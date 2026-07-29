---
document_type: "blueprint"
blueprint_id: "V01-C38-BP01"
blueprint_type: "Chapter"
scope_id: "V01-C38"
title: "Chapter 38 Blueprint — JavaScript Runtime, Tooling, and Execution Environments"
version: "0.1.0"
status: "Draft"
freeze_status: "Unfrozen"
owner_role: "Curriculum Architect"
prerequisites:
  - "V01-C02"
  - "V01-C08"
learning_outcomes:
  - "V01-LO065"
  - "V01-LO066"
planned_artifacts:
  - "V01-C38"
  - "V01-C38-L01"
  - "V01-C38-EX01"
  - "V01-C38-QZ01"
  - "V01-C38-CH01"
  - "V01-C38-IV01"
  - "V01-C38-AS01"
review_ids: []
---

# Chapter 38 Blueprint — JavaScript Runtime, Tooling, and Execution Environments

## Purpose

### Chapter Metadata

| Field | Value |
|---|---|
| Chapter ID | `V01-C38` |
| Module | `V01-M08` — JavaScript Runtime and Type Semantics |
| Difficulty | Beginner |
| Estimated Study Time | 8-10 hours |
| Primary Lab | `V01-C38-L01` — Reproducible JavaScript Workflow |
| Assessment | `V01-C38-AS01` |
| Next Chapter | `V01-C29` |

### Chapter Purpose

Öğrencinin “JavaScript kodu çalıştı” cümlesini; kaynak kod, JavaScript motoru,
host ortamı, araçlar, giriş noktası, süreç ve gözlenebilir çıktı ilişkileriyle
açıklayabilmesini sağlamak. Öğrenci aynı programı desteklenen bir Node.js
ortamında açık komut, sürüm, girdi ve beklenen sonuçla tekrar çalıştırılabilir
bir iş akışına dönüştürür.

### Why This Chapter Exists

`V01-C02`, bilgisayarın komutları yürüttüğüne ilişkin temel modeli; `V01-C08`
ise girdi-dönüşüm-çıktı hattını kurar. Ancak kodun hangi ortamda, hangi araçla
ve hangi dış imkânlarla çalıştığı sessiz varsayım olarak kalırsa öğrenci
tarayıcıya ait bir özelliği JavaScript dilinin kendisi sanabilir veya kendi
bilgisayarında çalışan programı başka bir öğrencinin neden çalıştıramadığını
açıklayamaz. C38 bu gizli çalışma sözleşmesini görünür kılar ve C29'daki tür ve
dönüşüm deneyleri için güvenilir bir gözlem ortamı kurar.

## Scope

### In Scope

- Kaynak kod, ECMAScript dili, JavaScript motoru, çalışma zamanı ve host ortamı
  arasındaki ilişki.
- Tarayıcı ve Node.js ortamlarının ortak dil çekirdeği ile farklı host
  imkânlarını ayırma.
- Kod editörü, terminal/kabuk, Node.js CLI ve npm script'inin rollerini ayırma.
- Giriş dosyası, mevcut çalışma klasörü, komut satırı argümanları, standart
  çıktı/hata ve süreç çıkış durumuna başlangıç düzeyinde giriş.
- Desteklenen bir Node.js LTS sürümünde tekrar üretilebilir bir çalışma akışı
  kurma ve belgeleme.
- `V01-C08` girdi-dönüşüm-çıktı programını terminal girdileriyle çalıştırma.
- ASEA Teaching and Continuity Standard v1.0'a uygun değişken/tür açıklamaları,
  görünür yürütme izi, kademeli uygulama ve `C08 → C38 → C29` devri.

### Out of Scope

- Event loop, task queue, microtask ve asenkron yürütmenin ayrıntılı öğretimi.
- V8 iç mimarisi, JIT derleme aşamaları, garbage collector algoritmaları.
- ES Modules tasarımı ve çok dosyalı modül mimarisi; bunlar `V01-C37` kapsamıdır.
- Paket yayımlama, bağımlılık yönetimi, bundler ve framework kurulumu.
- `process.env`, gizli anahtar yönetimi ve üretim deployment'ı.
- Tür dönüşümü ve eşitlik semantiğinin ayrıntılı öğretimi; bunlar `V01-C29`
  kapsamıdır.
- Tarayıcı DOM programlama veya Node.js dosya/ağ API'lerinin ayrıntıları.

## Audience and Level

- **Audience:** `V01-C02` ve `V01-C08` kanıtlarını geçmiş, JavaScript'i ilk kez
  gerçek bir yerel çalışma akışında kullanacak öğrenciler.
- **Entry level:** Beginner; terminal ve Node.js deneyimi varsayılmaz.
- **Exit behavior:** Öğrenci bir programın nerede ve nasıl yürütüldüğünü kendi
  cümleleriyle açıklayabilir, ortam bağımlı bir adı teşhis edebilir ve başka bir
  öğrencinin tekrarlayabileceği çalışma kaydı üretebilir.
- **Teaching posture:** Önce gözlenen fark, sonra zihinsel model, en son teknik
  ad; tek komuttan belgelenmiş iş akışına doğru azalan rehberlik.

## Prerequisites

### Required Evidence

- `V01-C02`: Kaynak kodun doğrudan “bilgisayarın düşündüğü şey” olmadığını,
  yürütmenin adımlı bir süreç olduğunu açıklama.
- `V01-C08`: Dış girdiyi almak, uygun değere dönüştürmek ve gözlenebilir çıktı
  üretmek.

### Diagnostic Check

Öğrenciye `const rawScore = "85"; const score = Number(rawScore);` kodu verilir.
Kodun aldığı girdi, yaptığı dönüşüm ve ürettiği değeri sözlü açıklaması istenir.
Ardından “Bu iki satır kendi başına nasıl çalışmaya başladı?” sorusuna verdiği
yanıt dinlenir. İlk bölüm C08'i, ikinci bölüm C38'in yeni ihtiyacını görünür
kılar.

## Learning Outcomes

- **V01-LO065:** Kaynak kod, JavaScript çalışma zamanı, host ortamı ve araçlar
  arasındaki ilişkiyi doğru sınırlarla açıklamak.
- **V01-LO066:** Desteklenen bir çalışma zamanında tekrar üretilebilir bir
  JavaScript iş akışını yürütmek ve belgelemek.

### Evidence Contract

`V01-LO065` için öğrenci, verilen altı öğeyi doğru katmana yerleştirir ve en az
iki ortam farkını gerekçelendirir. `V01-LO066` için kaynak dosya, runtime sürümü,
mevcut klasör, tam komut, girdi, çıktı ve çıkış durumunu içeren bir yürütme
kaydı teslim eder; başka bir öğrenci kaydı kullanarak sonucu yeniden üretir.

## Content Map

### Core Concepts

1. Kod neden tek başına çalışmaz?
2. Dil kuralları, motor, runtime ve host arasındaki katmanlar.
3. Tarayıcı ile Node.js'in ortak ve farklı yüzeyleri.
4. Editör, terminal, CLI ve paket script'i arasındaki görev ayrımı.
5. Sürecin giriş dosyasından çıkış durumuna kadar yürütülmesi.
6. Tekrar üretilebilir çalışma sözleşmesi.

### Teaching Sequence

```text
C08 programı
  -> aynı kodun iki ortamda farklı davranışı
  -> hangi parçanın dile, hangisinin host'a ait olduğunu keşfetme
  -> terminalde tek dosya çalıştırma
  -> argümanları girdi olarak alma
  -> yürütme izini ve ortam bilgisini kaydetme
  -> npm script ile ortak komut oluşturma
  -> başka bir öğrencinin yeniden üretmesi
  -> C29 için kontrollü deney ortamı
```

### Canonical First Example

Öğrenci aynı `console.log("ASEA hazır");` satırını hem tarayıcı konsolunda hem
Node.js ile çalıştırır. Ardından `document.title` ve `process.argv` adlarını
karşılaştırır. Amaç API ezberletmek değil, “aynı dil çekirdeği + farklı host
imkânları” modelini gözlemle kurmaktır.

### Canonical Worked Workflow

`runtime-report.js`, öğrencinin adını ve puanını komut satırı argümanlarından
alır, puanı sayıya dönüştürür ve yapılandırılmış bir sonuç yazdırır. Her
değişkenin kaynağı, türü, adı, `const` seçimi ve sınır durumu açıklanır.

## Practice and Assessment Plan

| Kademe | Öğrenci davranışı | Outcome |
|---|---|---|
| Tahmin et | Bir adın tarayıcıda/Node.js'te bulunup bulunmadığını gerekçelendirir | `LO065` |
| Birlikte yapalım | İlk dosyayı terminalden çalıştırır ve süreci izler | `LO065`, `LO066` |
| Şimdi sen dene | Argüman ve çıktı alanını küçük bir değişiklikle genişletir | `LO066` |
| Hata avı | Yanlış klasör, yanlış dosya ve host API hatasını ayırır | `LO065`, `LO066` |
| Bağımsız uygulama | Belgelenmiş runtime raporu üretir | `LO066` |
| Akran yeniden üretimi | Başka bir çalışma kaydını aynı sonuçla yürütür | `LO066` |
| Mülakat | Katmanları örneklerle sözlü açıklar | `LO065` |

### Success Boundary

Yalnız ekranda doğru çıktıyı görmek yeterli değildir. Öğrenci hangi runtime'ı
kullandığını, komutun hangi dosyayı giriş noktası seçtiğini, girdinin nereden
geldiğini ve başka birinin çalışmayı nasıl tekrarlayacağını gösterebilmelidir.

## Visual and Interaction Plan

- Kaynak koddan gözlenebilir çıktıya katman diyagramı.
- Tarayıcı ve Node.js için ortak çekirdek/farklı host kartları.
- `node runtime-report.js Ada 85` komutunun token haritası.
- `process.argv` indeks tablosu.
- Terminal → süreç → çıktı/çıkış durumu akış çizgisi.
- “Kod mu, kabuk komutu mu?” sürükle-bırak sınıflandırması.
- Tekrar üretilebilirlik kontrol kartı.

## Review Gate

- [ ] Blueprint kanonik registry ve outcome kimlikleriyle uyumlu.
- [ ] Araştırma yalnız birincil/resmî teknik kaynaklarla doğrulanmış.
- [ ] C08'den gelen davranış yeniden öğretilmeden etkinleştirilmiş.
- [ ] C29 tür semantiği erken ve ayrıntılı öğretilmemiş.
- [ ] Tarayıcı/Node.js karşılaştırması JavaScript dilini host API'lerle
  özdeşleştirmiyor.
- [ ] Bütün komutlar Windows, macOS ve Linux farklarını gereksiz kabuk
  ayrıntısına girmeden açıklıyor.
- [ ] Kod, Markdown, bağlantı ve JSON doğrulamaları geçiyor.
- [ ] Bağımsız teknik ve pedagojik inceleme tamamlanıyor.

## References

- [V01 Chapter Registry](../../../governance/blueprint-v2/04-chapter-registry.md)
- [V01 Learning Outcome Registry](../../../governance/blueprint-v2/05-learning-outcome-registry.md)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
- [ASEA Chapter Standard](../../standards/chapter-standard-v2.md)
- [C38 Research Packet](../programming-fundamentals/research/v01-c38/research-packet.md)
