---
document_type: "chapter"
chapter_id: "V01-C37"
volume_id: "V01"
title: "ES Modülleri ve Program Organizasyonu"
slug: "es-modulleri-ve-program-organizasyonu"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "12-16 saat"
prerequisites:
  - "V01-C16"
  - "V01-C33"
  - "V01-C36"
learning_outcomes:
  - "V01-LO063"
  - "V01-LO064"
related_lab_ids:
  - "V01-C37-L01"
related_assessment_ids:
  - "V01-C37-AS01"
next_chapter_id: "V01-C38"
blueprint_id: "V01-C37-BP01"
last_updated: "2026-08-01"
---

# ES Modülleri ve Program Organizasyonu

## Learning Objectives

Tek dosyayı dört dosyaya bölmek otomatik mimari değildir. Her dosya her şeyi import
ediyor, internal state dışarı sızıyor ve cycle oluşuyorsa karmaşıklık yalnız dağılmıştır.
Bu chapter sonunda cohesive ES module graph üretecek (`LO063`) ve dependency/cycle/
boundary leakage riskini analiz edeceksiniz (`LO064`).

## Prerequisites

C16 responsibility decomposition, C33 state ownership ve C36 error boundaries gerekir.
Bir module'ın “hangi işi yapmadığını” açıklayamıyorsanız sınırı henüz net değildir.

## Estimated Study Time

12–16 saat: syntax/semantics 3, responsibility/public API 3, graph/cycle 3, lab 3–7.

## Introduction

ES module kendi scope'u, import requests ve export declarations taşıyan source text
birimidir. Static imports engine/host'un dependency graph'ı link etmesine olanak verir.
Ama module boundary teknik dosya sınırından önce tasarım kararıdır.

## Core Concepts

### İlk ayrım: responsibility

P08 programını şu sorumluluklara ayıralım:

```text
domain/progress.js      valid state ve transitions
errors/domain-errors.js stable error contracts
application/service.js use-case orchestration
adapters/console.js     input/output
main.js                 composition root
```

Domain console'u, filesystem'i veya UI mesajını bilmez. Composition root concrete
dependencies'i birleştirir.

### Named exports/imports

```js
// progress.js
export function advance(progress) {
  if (progress.completed >= progress.total) throw new RangeError("complete");
  return { ...progress, completed: progress.completed + 1 };
}

export function isComplete(progress) {
  return progress.completed >= progress.total;
}
```

```js
// service.js
import { advance, isComplete } from "./progress.js";
```

Named exports public API'yi açıklar ve rename/refactor'ı görünür kılar. Default export
tek ana value için kullanılabilir; ekip standardı tutarlı olmalıdır. Her şeyi default
yapmak tüketicide keyfi isimlere, her şeyi export etmek boundary leakage'e yol açabilir.

### Module scope ve strict behavior

Top-level declarations module scope'tadır; otomatik global property olmaz. Modules
strict mode semantics ile değerlendirilir. Bu izolasyon state ownership'i güçlendirir,
fakat exported mutable object yine paylaşılmış state olabilir.

### Imported binding live ve read-only'dir

```js
// status.js
export let status = "idle";
export function start() { status = "running"; }
```

```js
// view.js
import { status } from "./status.js";
// status = "broken"; // importer binding'e atayamaz
```

Import, exporter's binding'ine live erişimdir; frozen snapshot değildir. Exporter
değiştirince importer yeni value'yu gözleyebilir. Importer binding'i rebind edemez;
ancak exported object mutable ise property mutation ayrı risktir. State'i command/query
API arkasında tutmak C33 kararını module boundary'ye taşır.

### Dependency graph

```text
main → console-adapter → application-service → domain
                           ↓
                         errors
```

Ok “A, B'ye bağlıdır” anlamındadır. Domain dış adapters'a dönük ok taşımıyorsa core
reuse/test kolaylaşır. Graph review, klasör adlarından daha güvenilir kanıttır.

### Cycle riski

`a.js → b.js → a.js` cycle'ı spec tarafından her durumda syntax error sayılmaz;
module records cycles'e katılabilir. Fakat initialization order, uninitialized live
bindings ve top-level side effects şaşırtıcı failure üretir. Cycle'ı “çalışıyor” diye
kabul etmek yerine ortak responsibility'yi üçüncü module'a çıkarın veya dependency
direction'ı yeniden tasarlayın.

### Top-level side effects

Module import edilirken top-level evaluation gerçekleşir. Import anında network,
dosya yazma veya global registration yapmak test ve initialization order'ı gizler.
Tercih:

```js
// explicit API
export function startApplication(dependencies) {
  return createService(dependencies);
}
```

Composition root ne zaman çağıracağını belirler. Module evaluation/caching ayrıntısı
host graph lifecycle'ına bağlıdır; iş mantığı “import kaç kere çalışır?” varsayımına
dayanmamalıdır.

### Public API ve boundary leakage

Bir module yalnız tüketicinin ihtiyaç duyduğu stable operations/types/errors'ı export
eder. Internal helper, mutable cache veya raw database shape export edilirse tüketici
implementation detail'e bağlanır.

### Birlikte yapalım: module graph tasarımı

Use case: raw progress input al, parse et, advance et, safe result göster.

| Module | Sorumluluk | Imports | Exports |
| --- | --- | --- | --- |
| parser | raw → domain | errors | `parseProgress` |
| progress | transition | errors | `advance`, `isComplete` |
| service | orchestration | parser, progress | `runAdvance` |
| console | presentation | none/core types | `renderResult` |
| main | composition | service, console | entry only |

Parser console message üretmez; service raw storage işlemez; domain process exit
çağırmaz. Error translation C36 boundary sözleşmesine uyar.

### Host resolution

Specifier'ın dosyaya/URL'ye çözülmesi host tarafından tanımlanır. Node ESM, browser ve
bundler farklı resolution/package kuralları kullanabilir. ASEA repo target runtime,
file extensions ve package `type` ayarını C38 delivery dosyasında açıklar.

## Engineering Perspective

İyi module yüksek cohesion, düşük coupling ve stable public API taşır. Dosya satır
sayısı tek ölçüt değildir. Değişikliklerin birlikte hareket ettiği responsibility'ler
birlikte; farklı nedenlerle değişenler ayrı olmalıdır. Dependency direction policy'yi
infrastructure'dan korur.

Barrel `index.js` convenience sağlayabilir fakat cycle'ları ve import source'unu
gizleyebilir. Küçük graph'ta doğrudan module imports daha izlenebilirdir. Shared
“utils” module zamanla alakasız responsibilities çöp kutusuna dönüşmemelidir.

## Real World Examples

- Domain/application/adapter separation.
- Error classes ayrı stable boundary.
- Formatter pure module; clock/storage injected adapter.
- Composition root bütün concrete dependencies'i kurar.
- Test module yalnız public API'yi kullanır.

## Common Mistakes

- Dosya bölmeyi responsibility design sanmak.
- Internal helpers ve mutable state'i export etmek.
- Import-time side effects yapmak.
- Domain'den UI/database adapter import etmek.
- Barrel üzerinden cycle gizlemek.
- Imported live binding'i snapshot sanmak.
- Host resolution varsayımını belgelememek.

## Best Practices

1. Her module için tek cümle responsibility yazın.
2. Public API'yi minimum tutun.
3. Dependency graph çizin ve direction'ı savunun.
4. Core'u adapters'tan bağımsız tutun.
5. Top-level side effects yerine explicit start/create API kullanın.
6. Cycle'ları graph test/review ile engelleyin.
7. Runtime/resolution assumptions'ı dokümante edin.

## Hands-on Exercise

### Şimdi sen dene

Tek dosyalı progress CLI'ı parser/domain/service/console/main modules'a ayırın. Her
module için responsibility, imports, exports ve forbidden knowledge tablosu yazın.

### Hata avı

Cycle, mutable export ve import-time logging içeren graph'ı düzeltin.

### Bağımsız uygulama

P08 error boundary'yi domain ve UI arasında yerleştirin; domain error'un safe UI result'a
nerede çevrildiğini graph üzerinde gösterin.

### Gerçek proje bağlantısı

P08 için çalışan ESM graph, public API tests, cycle scan, module responsibility records
ve C38 run/build commands teslim edin.

## Reflection Questions

1. Module boundary ile dosya boundary farkı nedir?
2. Import neden snapshot değildir?
3. Cycle hangi initialization riskini doğurur?
4. Domain neden adapter import etmemelidir?
5. Top-level side effect testleri nasıl zorlaştırır?
6. Composition root neyi sahiplenir?

## Chapter Summary

ES module scope/import/export semantiği sağlar; profesyonel organization ise cohesive
responsibilities, minimal public API ve açık dependency direction gerektirir. Live
bindings ve cycles graph düzeyinde analiz edilir. State/error/side effects doğru
boundary'lerde tutulur; composition root sistemi birleştirir.

## Key Takeaways

- Dosya bölmek tek başına mimari değildir.
- Named exports public API'yi görünür kılar.
- Imports live, read-only bindings'tir.
- Exported mutable object yine state leak olabilir.
- Cycle legal olsa da initialization riski taşır.
- Top-level side effects gizli lifecycle oluşturur.
- Dependency graph architecture evidence'dır.
- Host resolution assumptions belgelenmelidir.

## Further Reading

- C16 functional decomposition
- C33 state boundary
- C36 error boundary
- C38 runtime/build/repository delivery
- P08 modular program defense

## References

- ECMA-262 Modules, Source Text Module Records ve Cyclic Module Records
- ASEA `V01-C37-BP01`, `V01-LO063`, `V01-LO064`
