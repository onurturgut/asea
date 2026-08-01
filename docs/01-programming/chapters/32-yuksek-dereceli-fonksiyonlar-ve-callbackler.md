---
document_type: "chapter"
chapter_id: "V01-C32"
volume_id: "V01"
title: "Yüksek Dereceli Fonksiyonlar ve Callback'ler"
slug: "yuksek-dereceli-fonksiyonlar-ve-callbackler"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "13-17 saat"
prerequisites:
  - "V01-C13"
  - "V01-C14"
  - "V01-C16"
learning_outcomes:
  - "V01-LO053"
  - "V01-LO054"
related_lab_ids:
  - "V01-C32-L01"
related_assessment_ids:
  - "V01-C32-AS01"
next_chapter_id: "V01-C33"
blueprint_id: "V01-C32-BP01"
last_updated: "2026-08-01"
---

# Yüksek Dereceli Fonksiyonlar ve Callback'ler

## Learning Objectives

Ada, ASEA'daki chapter denemelerini değerlendiren üç fonksiyon yazmıştır. Biri geçme
durumunu, biri öğrenciye gösterilecek etiketi, biri sıralama kuralını belirler. Kodun
geri kalanı aynı işlemleri tekrar eder; yalnız davranış kuralı değişir.

Ada'nın ihtiyacı “daha fazla fonksiyon” değildir. Bir fonksiyona, hangi davranışı
uygulayacağını başka bir fonksiyon değeriyle söyleyebilmesidir.

Bu chapter sonunda:

- fonksiyonların JavaScript'te callable object values olduğunu açıklayacak,
- `calculate` ile `calculate()` arasındaki geçirme–çağırma farkını ayıracak,
- callback kabul eden higher-order function tasarlayacak (`V01-LO053`),
- predicate, mapper, reducer, comparator ve operation callback sözleşmelerini
  uygulayacak,
- caller ile callback arasındaki kontrol ve veri devrini çağrı iziyle çözümleyecek
  (`V01-LO054`),
- invocation order/count, return ve error akışını gösterecek,
- signature uyuşmazlığını adapter callback ile düzelteceksiniz.

## Prerequisites

C13'te fonksiyon sözleşmesini; C14'te parameter, argument ve return value'yu;
C16'da büyük görevi sorumlulukları ayrılmış fonksiyonlara bölmeyi öğrendiniz.

Şu kodu çalıştırmadan karşılaştırın:

```js
function calculateScore() {
  return 85;
}

const first = calculateScore;
const second = calculateScore();

console.log(typeof first);
console.log(second);
```

`first`, function value'ya bağlanır; henüz function body çalışmaz. `second`, call
expression sonucu olan number `85`e bağlanır. Parantez küçük bir yazım ayrıntısı
değil, “şimdi çalıştır” talimatıdır.

## Estimated Study Time

13–17 saat ayırın: function-value zihinsel modeli 3 saat, custom higher-order
fonksiyonlar 4 saat, call trace 3 saat, signature ve side-effect hata avları 2 saat,
lab/quiz/proje 3–5 saat. Her callback örneğinde “kim çağırıyor, kaç kez, hangi
argümanlarla, return nereye gidiyor?” sorularını yazılı cevaplayın.

## Introduction

JavaScript'te function yalnız sözdizimsel bir blok değildir. Function value bir
binding'e atanabilir, object property olarak saklanabilir, array içinde taşınabilir,
argument olarak geçirilebilir ve başka bir function tarafından döndürülebilir.

```js
function isPassing(score) {
  return score >= 70;
}

const rule = isPassing;

console.log(typeof rule); // function
console.log(rule(85)); // true
```

`rule`, `isPassing` tarafından üretilen sonucu değil, aynı callable value'yu görür.
`rule(85)` call expression'ı function body'yi `score = 85` bağıyla çalıştırır.

**Yüksek dereceli fonksiyon (higher-order function)** en az bir function'ı argument
olarak kabul eden veya function döndüren fonksiyondur. **Callback**, çağrılma yetkisi
başka bir function/API'ye verilen function value'dur. Her callback kullanımı async
değildir; `map`, `filter` ve aşağıda yazacağımız işlemci callback'leri senkron biçimde
hemen çağırabilir.

## Core Concepts

### Function oluşturma biçimleri value üretir

```js
function doubleDeclaration(value) {
  return value * 2;
}

const doubleExpression = function double(value) {
  return value * 2;
};

const doubleArrow = (value) => value * 2;
```

Üç binding de callable function value'ya ulaşır. Declaration/expression hoisting,
arrow `this` ve constructor farkları bu chapter'ın sorusu değildir. Burada ortak
özelliğe odaklanırız: her biri argument olarak geçirilebilir ve çağrılabilir.

### Geçirmek ile çağırmak

```js
function runOperation(value, operation) {
  return operation(value);
}

function double(value) {
  return value * 2;
}

console.log(runOperation(5, double)); // 10
```

`runOperation(5, double)` satırında ikinci argument function value'dur. İçeride
`operation` parameter'ı bu function value'ya bağlanır. `operation(value)` satırına
gelindiğinde higher-order function callback'i çağırır.

Yanlış sürüm:

```js
// runOperation(5, double())
```

Burada `double` argument hazırlanırken hemen ve argumentsiz çağrılır. `value`
`undefined` olur, sonuç `NaN`dır; `runOperation` function yerine `NaN` alır ve onu
çağırmaya çalışınca TypeError üretir.

### Birlikte yapalım: tam çağrı izi

```js
function applyOperation(left, right, operation) {
  const result = operation(left, right);
  return result;
}

function add(a, b) {
  return a + b;
}

const total = applyOperation(12, 8, add);
```

| Adım | Aktif function | Olan şey |
| ---: | --- | --- |
| 1 | global | `add` function value oluşturulur |
| 2 | global | `applyOperation` 12, 8 ve `add` ile çağrılır |
| 3 | `applyOperation` | `left=12`, `right=8`, `operation=add` bağları kurulur |
| 4 | `applyOperation` | `operation(left, right)` call expression değerlendirilir |
| 5 | `add` | `a=12`, `b=8` bağları kurulur |
| 6 | `add` | `20` hesaplanıp caller'a döner |
| 7 | `applyOperation` | `result=20` olur ve global caller'a döner |
| 8 | global | `total=20` bağı kurulur |

Kontrol geçici olarak `applyOperation`dan `add`e, sonra geri döner. Veri 12 ve 8
olarak callback'e gider; return data'sı 20 olarak higher-order function'a döner.

### Callback contract: beş açık soru

Bir API callback kabul ediyorsa şu sözleşme yazılmalıdır:

1. Callback'i kim çağırır?
2. Ne zaman ve kaç kez çağırabilir?
3. Hangi argument'ları, hangi sırada verir?
4. Callback'ten hangi return anlamını bekler?
5. Callback error fırlatırsa ne olur?

```js
function processItems(items, transform) {
  const output = [];

  for (let index = 0; index < items.length; index += 1) {
    const transformed = transform(items[index], index);
    output.push(transformed);
  }

  return output;
}
```

Burada `processItems` caller/manager'dır. `transform`ı her mevcut sıradaki element
için bir kez, `(value, index)` ile çağırır. Return edilen value output'a eklenir.
Callback throw ederse bu function catch etmediği için error dış caller'a ilerler.

### Callback rollerini ayırmak

| Rol | Input | Beklenen return | Amaç |
| --- | --- | --- | --- |
| operation | domain value(lar) | yeni domain value | davranış uygula |
| predicate | element | boolean bağlamı | karar ver/seç |
| mapper | element | output element | shape/value dönüştür |
| reducer | accumulator, element | yeni accumulator | birleştir |
| comparator | left, right | negatif/sıfır/pozitif number | göreli sıra |

Aynı function herhangi bir role “adı yüzünden” uymaz. Parameter ve return sözleşmesi
caller'ın beklediği imzayla uyuşmalıdır.

### Higher-order function davranışı data'dan ayırır

```js
function gradeAttempt(score, rule) {
  if (!Number.isFinite(score)) {
    throw new TypeError("score sonlu bir number olmalıdır.");
  }

  return {
    score,
    passed: rule(score),
  };
}

function standardRule(score) {
  return score >= 70;
}

function strictRule(score) {
  return score >= 85;
}
```

`gradeAttempt` doğrulama ve output modelinden sorumludur; geçme politikasını callback'e
devreder. Yeni politika için işlemcinin içini değiştirmek yerine sözleşmeye uyan yeni
function value geçilebilir.

Bu esneklik sınırsız değildir. Callback'in `"passed"` gibi string döndürmesi truthy
olabilir fakat contract boolean istiyorsa hatadır. JavaScript runtime bunu type system
ile otomatik engellemez; validation, test ve ileride TypeScript sözleşmeleri gerekir.

### Function döndüren higher-order function

Higher-order function function döndürebilir. C33'te dış değişkenleri hatırlayan closure
factory'leri işleyeceğiz. Burada capture yapmadan mevcut stratejilerden birini seçelim:

```js
function chooseRule(level) {
  if (level === "standard") return standardRule;
  if (level === "strict") return strictRule;
  throw new RangeError("Bilinmeyen değerlendirme seviyesi.");
}

const selectedRule = chooseRule("strict");
console.log(selectedRule(82)); // false
```

`chooseRule` function value döndürür; `selectedRule(82)` daha sonra onu çağırır.
Function döndürme ile function sonucunu döndürme yine farklıdır.

### C31 bağlantısı: callback'i kim çağırır?

```js
const scores = [45, 82, 91];
const passedScores = scores.filter(standardRule);
```

`filter`, `standardRule` callback'ini çağırır. Her callback çağrısında value yanında
index ve traversed object de sunulur. Callback daha az parameter tanımlayabilir;
kullanmadığı extra arguments göz ardı edilir.

Bu özellik signature mismatch üretebilir:

```js
const values = ["10", "10", "10"];
console.log(values.map(parseInt)); // [10, NaN, 2]
```

`map`, callback'i `(value, index, array)` ile çağırır. `parseInt` ikinci argument'ı
radix olarak yorumlar. Çağrılar kavramsal olarak `parseInt("10", 0)`,
`parseInt("10", 1)`, `parseInt("10", 2)` olur. Callback callable olsa da contract
uyumlu değildir.

Adapter callback yalnız gereken argument'ı geçirir:

```js
const parsedValues = values.map((value) => Number.parseInt(value, 10));
console.log(parsedValues); // [10, 10, 10]
```

### Inline mı, named mi, adapter mı?

Kısa ve yalnız bir yerde kullanılan davranış inline arrow olabilir. Domain anlamı,
tekrar kullanım veya bağımsız test gerektiren callback named function olmalıdır.
Mevcut function'ın signature'ı caller ile uyuşmuyorsa adapter kullanılır.

```js
const passed = scores.filter((score) => score >= 70); // kısa inline
const passedAgain = scores.filter(standardRule); // domain named
const parsed = values.map((value) => Number.parseInt(value, 10)); // adapter
```

### Side effect ve callback tekrar çağrısı

```js
let invocationCount = 0;

function trackedRule(score) {
  invocationCount += 1;
  return score >= 70;
}
```

Bu callback sonucu dışında dış state'i değiştirir; bu bir side effect'tir. Debug veya
test spy için bilinçli olabilir. Fakat iş mantığı callback'i iki kez çağırırsa davranış
değişebilir. Contract invocation count garantisi vermiyorsa callback'i gereksiz side
effect'ten arındırmak yeniden kullanım ve test edilebilirliği artırır.

### Senkron ve host-managed callback ayrımı

`applyOperation` ve `map` callback'leri çağrı tamamlanmadan çalışır; senkrondur.
Browser event listener veya timer gibi host API'leri callback'i daha sonra çağırabilir.
“Callback eşittir asynchronous” çıkarımı yanlıştır. Event loop, task queues ve Promise
ayrıntıları bu chapter'ın dışında ayrıca öğretilecektir.

## Engineering Perspective

Higher-order tasarım değişen davranışı sabit işlem akışından ayırır. Validation,
logging ve output şekli aynı kalırken scoring policy callback ile değişebilir. Bu,
if/else zincirlerini azaltabilir ve her stratejinin bağımsız testini kolaylaştırabilir.

Fakat her tek satırlık davranışı callback parameter yapmak API'yi anlaşılmaz hâle
getirebilir. Bir function'ın beş callback alması, kontrol akışının nerede olduğunu
gizleyebilir. Callback sözleşmeleri isim, parameter sırası, return anlamı, error ve
invocation garantisiyle belgelenmelidir.

Bağımlılık enjeksiyonunun küçük bir biçimi olarak callback kullanımı testlerde yararlı
olur. Gerçek bildirimi göndermek yerine çağrıları kaydeden bir spy geçirilebilir:

```js
const calls = [];

function notificationSpy(message) {
  calls.push(message);
}

function completeChapter(chapterId, notify) {
  notify(`Tamamlandı: ${chapterId}`);
}

completeChapter("V01-C32", notificationSpy);
console.log(calls); // ["Tamamlandı: V01-C32"]
```

Test yalnız final sonucu değil, callback'in doğru argument ve sayıda çağrıldığını
kanıtlar. Üretim kodunda side-effect callback'lerinin retry ve duplicate-call
politikasının ayrıca tasarlanması gerekir.

## Real World Examples

### Array pipeline

`filter`, predicate; `map`, mapper; `reduce`, reducer callback kabul eder. C31'in veri
hattı C32'nin control-flow modeline dayanır.

### Sıralama politikası

`toSorted(compareByScore)` aynı collection operasyonuna farklı comparator davranışı
verir. Comparator'ın numeric contract'ı bozulursa sıralama sonucu güvenilmezleşir.

### UI olayları

Bir buton API'sine verilen callback kullanıcı etkileşiminden sonra host tarafından
çağrılır. Function'ı kayıt sırasında çağırmak ile referansını vermek farklıdır.

### İş kuralı stratejisi

Standart, strict veya erişilebilirlik uyarlamalı değerlendirme rule callback'leri aynı
attempt processor içinde kullanılabilir.

### Test double

Network veya bildirim gibi dış side effect yerine çağrıyı kaydeden callback geçirilir;
test invocation contract'ı kanıtlar.

## Common Mistakes

### Hata avı 1: callback yerine sonucunu geçirmek

`run(value, transform())` function value değil invocation sonucu geçirir. Caller daha
sonra callable olmayan value'yu çağırırsa TypeError doğar.

### Hata avı 2: callback'i hiç çağırmamak

Higher-order function parameter alabilir ama `callback(value)` satırı yoksa davranış
uygulanmaz. Function reference'in varlığı body'yi otomatik çalıştırmaz.

### Hata avı 3: return'ü kaybetmek

```js
const doubled = [1, 2].map((value) => {
  value * 2;
});
```

Block body açık `return` ister. Output `[undefined, undefined]` olur.

### Hata avı 4: signature'ı yalnız parameter sayısıyla değerlendirmek

`map(parseInt)` callable olmasına rağmen ikinci argument anlamı uyuşmaz. İsim ve
arity tek başına yeterli değildir; parameter meaning ve return contract incelenir.

### Hata avı 5: bütün callback'leri async sanmak

Senkron caller callback'i hemen çağırır ve return'ünü kullanır. Host-managed timing
ayrı sözleşmedir.

### Hata avı 6: gizli side effect

Predicate içinde dış array'i mutate etmek, callback tekrar sayısına bağlı ve zor
izlenen davranış üretir. Side effect gerekiyorsa adı ve contract'ı açık olmalıdır.

## Best Practices

1. Callback'in parameter ve return anlamını yazın.
2. Function reference ile invocation result'ı kod incelemesinde açıkça ayırın.
3. Domain anlamı taşıyan veya tekrar kullanılan callback'e ad verin.
4. Signature uyuşmuyorsa küçük adapter function kullanın.
5. Caller'ın invocation order/count garantisini varsaymayın; belgeleyin.
6. Callback throw ederse error politikasını tanımlayın.
7. Predicate/mapper gibi hesap callback'lerini mümkün olduğunca side-effect free tutun.
8. Testte output yanında callback arguments ve invocation count'u kanıtlayın.
9. Çok callback'li API'de kontrol akışını sadeleştirmeyi değerlendirin.

## Hands-on Exercise

### Şimdi sen dene

`evaluateAttempts(attempts, passRule, toResult)` higher-order function'ını yazın.

- Her attempt `{ studentId, score }` biçimindedir.
- `passRule(score)` boolean döndürmelidir.
- `toResult(attempt, passed)` output object üretmelidir.
- Callback'lerin sırası ve çağrı sayısı test edilmelidir.
- Empty input `[]` döndürmelidir.
- Input mutate edilmemelidir.

#### Kademeli ipuçları

1. Önce tek attempt için iki callback çağrısını yazın.
2. Rule return'ünü `passed` binding'inde saklayın.
3. İkinci callback'e original attempt ve boolean verin.
4. Spy callback'lerle çağrı log'u üretin.

### Bağımsız uygulama

`selectFormatter(formatName)` higher-order function'ı existing named formatter'lardan
birini döndürsün. Closure ile configuration capture etmeyin; bu C33'ün görevidir.
Bilinmeyen isim için açık error politikası tasarlayın.

### Gerçek proje bağlantısı

P07'de progress pipeline'ına `isAtRisk`, `toProgressCard` ve `compareByProgress`
callback'lerini ekleyin. Her callback'i bağımsız test edin; caller–callback trace ve
signature contract tablosunu teslim edin.

## Reflection Questions

1. `fn` ile `fn()` çalışma zamanında hangi farklı value'ları temsil eder?
2. Callback'i “callback” yapan function syntax'ı mı, kullanım ilişkisi mi?
3. Higher-order function kontrolü callback'e ne zaman devreder?
4. Callback return value nereye gider ve kim anlamlandırır?
5. `map(parseInt)` neden callable olmasına rağmen yanlış sonuç verir?
6. Named callback ne zaman inline arrow'dan daha güçlüdür?
7. Invocation count bilinmiyorsa side effect hangi riski taşır?
8. Function döndürmek neden her zaman closure öğretmek anlamına gelmez?

## Chapter Summary

JavaScript function'ları callable values'dur. Binding'e atanabilir ve argument olarak
geçirilebilir. Parantez function value'yu geçirmekten farklı olarak çağrıyı başlatır.
Higher-order function, function kabul eder veya döndürür; callback ise çağrı yetkisi
başka bir caller'a verilen function value'dur.

Profesyonel callback sözleşmesi parameter adediyle sınırlı değildir. Argument anlamı,
return, invocation order/count, timing, side effect ve error akışını açıklar. Call
trace, kontrolün caller'dan callback'e ve return ile geri dönüşünü görünür yapar.
Signature mismatch adapter ile düzeltilir; callback'lerin async olduğu varsayılmaz.

## Key Takeaways

- Function, çağrılabilir bir object value'dur.
- `fn` function value, `fn()` invocation result'tır.
- Higher-order function davranışı argument olarak kabul edebilir.
- Caller callback'in ne zaman, kaç kez ve hangi argümanlarla çağrılacağını belirler.
- Predicate, mapper, reducer ve comparator farklı return sözleşmeleri taşır.
- Callable olmak, callback signature'ıyla uyumlu olmak için yeterli değildir.
- Adapter callback parameter anlamlarını uyumlar.
- Callback senkron veya host tarafından daha sonra çağrılan türde olabilir.

## Further Reading

- C13: function contract ve sorumluluk
- C14: parameter, argument ve return flow
- C16: functional decomposition ve yeniden kullanım
- C31: array pipeline callback rollerinin uygulaması
- C33: lexical capture, closure lifetime ve state encapsulation

## References

- ECMA-262, Function Objects ve `[[Call]]`
- ECMA-262, ECMAScript Function Objects
- ECMA-262, Call Expressions
- ECMA-262, Array callback method contracts
- ASEA `V01-C32-BP01`, `V01-LO053` ve `V01-LO054`
