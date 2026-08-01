---
document_type: "chapter"
chapter_id: "V01-C29"
volume_id: "V01"
title: "JavaScript Tür Sistemi ve Dönüşüm Semantiği"
slug: "javascript-tur-sistemi-ve-donusum-semantigi"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "12-15 saat"
prerequisites:
  - "V01-C05"
  - "V01-C07"
  - "V01-C38"
learning_outcomes:
  - "V01-LO047"
  - "V01-LO048"
related_lab_ids:
  - "V01-C29-L01"
related_assessment_ids:
  - "V01-C29-AS01"
next_chapter_id: "V01-C09"
blueprint_id: "V01-C29-BP01"
last_updated: "2026-08-01"
---

# JavaScript Tür Sistemi ve Dönüşüm Semantiği

## Learning Objectives

Terminalden gelen `"40"` ile program içinde yazılan `40` ekranda birbirine çok
benzer. Fakat biri metin, diğeri sayıdır. JavaScript bir operator çalıştırırken
yalnız görünen karakterlere değil, operandların çalışma zamanındaki değer ve
türlerine bakar. Bu nedenle `"40" + 2` ile `"40" - 2` aynı dönüşüm yolunu izlemez.

Bu chapter sonunda:

- JavaScript'te türün variable adına değil değere ait olduğunu açıklayacak,
- binding içindeki değer ve tür değişimini adım adım izleyecek,
- explicit conversion ile implicit coercion'ı ayıracak,
- `+`, arithmetic, Boolean context ve equality işlemlerinin conversion kararlarını
  ara değer/tür tablosuyla çözümleyecek (`V01-LO047`),
- `NaN`, `null`, `undefined`, truthy/falsy ve `typeof` sınırlarını doğru yorumlayacak,
- veri sınırında grammar validation → explicit conversion → result validation
  zinciri kuracak,
- dönüşüm stratejisini ambiguity, information loss, failure ve domain contract
  üzerinden savunacaksınız (`V01-LO048`).

Hedef şaşırtıcı JavaScript sonuçlarını ezberlemek değildir. Daha önce görmediğiniz
bir ifade için “hangi kural, hangi değeri, hangi türe dönüştürdü?” sorusunu kendi
başınıza yanıtlayabilmektir.

## Prerequisites

C05'te value ile type'ı, C07'de operand–operator–result hattını öğrendiniz. C38'de
ise aynı deneyi Node.js sürümü, dosya, komut ve output ile yeniden üretilebilir
hâle getirdiniz.

Şu kodu çalıştırmadan inceleyin:

```js
const rawMinutes = "40";
const result = rawMinutes + 2;
console.log(result, typeof result);
```

Şu dört soruya cevap verin:

1. `rawMinutes` hangi bilgiyi temsil ediyor?
2. Değer neden number değil string?
3. `+` burada toplama mı, metin birleştirme mi yapacak?
4. Final value ve type ne olacak?

`"402"` ve `string` tahminini yaptıysanız başlangıç köprüsü hazırdır. Yalnız “çünkü
JavaScript garip” dediyseniz sorun yok; bu chapter tam olarak “garip” etiketinin
yerine izlenebilir bir çalışma modeli koyacaktır.

C38 çalışma kaydınızda kullandığınız gerçek Node.js sürümünü ve komutu koruyun.
Type deneylerinde output kadar source expression ve beklenen value/type tahmini de
kaydedilecektir.

## Estimated Study Time

| Çalışma | Önerilen süre |
|---|---:|
| Ön bilgi ve ilk şaşırtıcı çıktılar | 45 dakika |
| Dynamic type, primitive ve `typeof` | 90 dakika |
| Explicit conversion deneyleri | 90 dakika |
| Operator-specific coercion izleri | 2 saat |
| Truthiness ve equality semantiği | 2 saat |
| Validated conversion boundary | 2 saat |
| Hata avı, alıştırma ve lab | 3–4 saat |
| Quiz, mülakat ve öz değerlendirme | 60 dakika |

Toplam 12–15 saat hedefleyin. Conversion tablosundan, equality izinden ve lab
öncesinden sonra ayrı çalışma durakları verin. Bu chapter yoğun görünür; çünkü aynı
karakterlerin arkasındaki görünmeyen runtime kararlarını görünür yapıyoruz.

## Introduction

### Deniz'in yanlış tamamlanma kaydı

Deniz, ASEA çalışma raporuna komut satırından iki bilgi verdi:

```powershell
node study-report.js 40 false
```

C38'den biliyoruz: `process.argv` içindeki kullanıcı argümanları metin olarak gelir.
Programın içinde başlangıç değerleri şöyledir:

```js
const rawMinutes = "40";
const rawCompleted = "false";
```

Deniz hızlıca şu dönüşümleri yazdı:

```js
const minutes = Number(rawMinutes);
const completed = Boolean(rawCompleted);

console.log(minutes, completed);
```

İlk sonuç beklediği gibiydi: `minutes` number `40` oldu. İkinci sonuç ise `true`
oldu. Deniz “Ama metinde false yazıyor” diye düşündü.

JavaScript, `Boolean` dönüşümünde string'in İngilizce anlamını okumaz. String boş
mı, değil mi diye tür kuralını uygular. `"false"` altı karakterli, boş olmayan
bir string'dir; bu nedenle truthy'dir ve `Boolean("false")` sonucu `true` olur.

Bu hata “programcı dikkatsizdi” cümlesiyle kapanmamalı. Asıl soru şudur:

> Ham dış girdi hangi biçimleri kabul ediyor ve domain değeri hangi açık kuralla
> üretiliyor?

`"true"` ve `"false"` tokenlarını kabul eden bir alan için Boolean constructor'ın
genel truthiness kuralı doğru conversion policy değildir. Domain grammar'ını önce
doğrulamalı, sonra açık eşleme yapmalıyız.

Bu chapterda Deniz'in programını yamamakla yetinmeyeceğiz. JavaScript'in değer ve
tür modelini kurup operatorların conversion kararlarını izlemeyi öğreneceğiz.
Sonra dış girdiyi güvenilir domain değerine dönüştüren sınırı tasarlayacağız.

## Core Concepts

### Tür kutuya değil değere aittir

JavaScript **dynamic typing (dinamik türleme)** kullanır. Bir binding'in içine
farklı zamanlarda farklı türde değerler atanabilir. Tür, binding adının kalıcı
etiketi değildir; o anda taşınan değerin niteliğidir.

```js
let progress = 40;
console.log(progress, typeof progress);

progress = "40%";
console.log(progress, typeof progress);
```

İlk anda `progress` number `40` taşır. İkinci atamadan sonra string `"40%"` taşır.
Variable “number türünden string türüne dönüştü” demek günlük kullanımda anlaşılır;
daha doğru model şudur: aynı binding önce number bir değere, sonra string bir değere
bağlandı.

| Adım | Binding | Value | Type | Neden |
|---:|---|---|---|---|
| 1 | `progress` | `40` | number | Hesaplanabilir dakika/yüzde değeri |
| 2 | `progress` | `"40%"` | string | İnsan için biçimlendirilmiş metin |

Bu kod geçerlidir ama iyi tasarım olmak zorunda değildir. Aynı adın iki farklı
domain anlamı taşıması okuyucuyu zorlayabilir. `progressValue` ve `progressLabel`
gibi ayrı `const` binding'leri, dönüşüm sınırını daha açık gösterir.

### Primitive türler ve object sınırı

JavaScript language value'ları primitive veya object olabilir. Bu chapterda temel
primitive'lere odaklanıyoruz:

- `undefined`: atanmış değer bulunmamasını temsil eden tek değerli tür,
- `null`: bilinçli “değer yok” işareti olarak kullanılan tek değerli tür,
- `boolean`: `true` veya `false`,
- `string`: metinsel veri,
- `number`: IEEE 754 tabanlı sayısal değerler; `NaN` ve infinities dahil,
- `bigint`: büyük integer değerleri için ayrı numeric tür,
- `symbol`: benzersiz kimlik benzeri primitive.

Objects, arrays, functions ve identity ayrıntısı C30'da ele alınacak. Burada önemli
olan, conversion ve equality kuralının önce operandın türüne bakmasıdır.

### `typeof` yararlı bir gözlem aracıdır, eksiksiz type oracle değildir

```js
console.log(typeof 40);          // "number"
console.log(typeof "40");        // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(typeof NaN);         // "number"
```

`typeof null` tarihsel uyumluluk nedeniyle `"object"` üretir. Bu, `null` değerinin
ECMAScript language type'ının Object olduğu anlamına gelmez; specification'da Null
ayrı bir türdür. `typeof NaN` ise `"number"` döndürür; çünkü `NaN`, Number türü
içindeki özel bir değerdir.

Bu nedenle yokluk kontrolünde `typeof value === "object"` yazmak `null` ile gerçek
object değerlerini ayırmaz. Type gözlemi context'e uygun araç gerektirir.

### Explicit conversion ve implicit coercion

**Explicit conversion (açık tür dönüşümü)**, geliştiricinin dönüşümü kodda görünür
biçimde istemesidir:

```js
const minutes = Number("40");
const label = String(40);
const hasText = Boolean("40");
```

**Implicit coercion (örtük tür zorlaması)**, bir operator veya dil bağlamının
çalışmak için operandı başka türe dönüştürmesidir:

```js
const joined = "40" + 2;
const difference = "40" - 2;
```

İkisi de specification kurallarına dayanır. Explicit yazılması dönüşümün otomatik
olarak güvenli olduğu anlamına gelmez. `Number("")` sonucu `0`'dır; domain'de boş
girdinin sıfır sayılması istenmiyorsa açık dönüşüm yine yanlış policy'dir.

### `Number` dönüşümünü gözlemlemek

Önce tahmin edin:

```js
const observations = [
  Number("40"),
  Number(" 40 "),
  Number(""),
  Number("   "),
  Number("40px"),
  Number(true),
  Number(false),
  Number(null),
  Number(undefined),
];

console.log(observations);
```

Beklenen gözlem:

| Input value/type | Output | Output type | Risk |
|---|---:|---|---|
| `"40"` / string | `40` | number | Uygun olabilir |
| `" 40 "` / string | `40` | number | Whitespace sessizce kabul edilir |
| `""` / string | `0` | number | Empty ile gerçek zero karışabilir |
| `"   "` / string | `0` | number | Whitespace-only ile zero karışabilir |
| `"40px"` / string | `NaN` | number | Tam string numeric grammar'a uymaz |
| `true` / boolean | `1` | number | Domain anlamı kaybolabilir |
| `false` / boolean | `0` | number | False ile zero karışabilir |
| `null` / null | `0` | number | Yokluk zero'ya dönüşebilir |
| `undefined` / undefined | `NaN` | number | Geçersiz numeric sonuç |

Tablo “Number kullanmayın” demez. Dönüşümün domain kararını sizin yerinize
vermediğini gösterir.

### `NaN`: dönüşüm başarısızlığının önemli izi

`NaN`, “Not-a-Number” adını taşır fakat type'ı number'dır. Numeric operation'ın
geçerli bir numeric sonuç üretemediğini temsil eder.

```js
const minutes = Number("forty");

console.log(minutes);                 // NaN
console.log(typeof minutes);          // "number"
console.log(minutes === NaN);         // false
console.log(Number.isNaN(minutes));   // true
```

`NaN === NaN` false olduğundan doğrudan `=== NaN` kontrolü çalışmaz.
`Number.isNaN(value)` verilen değerin gerçekten number türündeki `NaN` olup
olmadığını kontrol eder. Global `isNaN` ayrıca coercion yaptığı için başlangıç
seviyesinde conversion boundary'de `Number.isNaN` daha açık davranış sağlar.

### `String` dönüşümü ve information loss

```js
console.log(String(40));         // "40"
console.log(String(false));      // "false"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
```

String conversion çoğu primitive için gösterim üretir; fakat geri dönüş her zaman
tek anlamlı değildir. `"false"` metni önce boolean mıydı, yoksa kullanıcı gerçekten
“false” kelimesini mi yazdı? `"null"` gerçek null mıydı, yoksa dört harfli metin mi?
Dönüşüm source type bilgisini kaybedebilir. Audit gerekiyorsa raw değeri ayrıca
saklamak gerekir.

### `Boolean` dönüşümü ve falsy kümesi

JavaScript'te `ToBoolean` bazı değerleri false'a, geri kalan değerleri true'ya
dönüştürür. Başlangıç düzeyindeki temel falsy değerler:

```text
false, undefined, null, 0, -0, 0n, NaN, ""
```

Boş olmayan tüm string'ler truthy'dir:

```js
console.log(Boolean("false")); // true
console.log(Boolean("0"));     // true
console.log(Boolean(" "));     // true
console.log(Boolean(""));      // false
```

String içeriğinin insan dilindeki anlamı okunmaz. Bu nedenle token tabanlı boolean
girdisi açık eşleme gerektirir.

### Birlikte yapalım: `+` operatorünü izlemek

Şu ifadeyi değerlendirelim:

```js
const result = "5" + 1 + 2;
```

Expression soldan sağa gruplanır: `("5" + 1) + 2`.

| Adım | Sol value/type | Operator | Sağ value/type | Conversion/operation | Ara sonuç |
|---:|---|---|---|---|---|
| 1 | `"5"` / string | `+` | `1` / number | String bulunduğu için `1 → "1"`, concatenate | `"51"` / string |
| 2 | `"51"` / string | `+` | `2` / number | `2 → "2"`, concatenate | `"512"` / string |

Sonuç number `8` değil, string `"512"` olur. İlk ara sonuç ikinci operatorün
operandıdır; bu yüzden intermediate type izlenmeden final sonuç açıklanamaz.

Şimdi grouping değişsin:

```js
const result = "5" + (1 + 2);
```

Parantez içi number addition ile `3` üretir; sonra `"5" + 3` string concatenation
ile `"53"` olur. Aynı tokenlar, farklı grouping ve intermediate type nedeniyle
farklı sonuç verir.

### Arithmetic operatorlarda numeric coercion

```js
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("6" / 2); // 3
console.log("5px" - 1); // NaN
```

`-`, `*` ve `/` burada string concatenation alternatifi taşımaz; operandları numeric
değere dönüştürür. `"5"` number `5` olur. `"5px"` tam numeric string olmadığı için
`NaN` üretir.

Bu örneklerden “JavaScript string'i her zaman number'a çevirir” sonucu çıkarılmaz.
Doğru cümle şudur: conversion operatorün contract'ına bağlıdır.

### Equality: `===` ve `==` aynı algoritma değildir

**Strict equality (sıkı eşitlik)** `===`, operand türleri farklıysa false döndürür;
eşitlik için türleri dönüştürmez:

```js
console.log("5" === 5); // false
console.log(0 === false); // false
console.log(null === undefined); // false
```

**Loose equality (gevşek eşitlik)** `==`, türler farklı olduğunda belirlenmiş
conversion adımlarını uygulayabilir:

```js
console.log("5" == 5); // true
console.log(0 == false); // true
console.log("" == 0); // true
console.log(null == undefined); // true
```

`"5" == 5` izini açalım:

| Adım | Sol | Sağ | Kural | Sonuç |
|---:|---|---|---|---|
| 1 | string `"5"` | number `5` | String, `ToNumber` ile number'a çevrilir | number `5` ve number `5` |
| 2 | number `5` | number `5` | Aynı tür strict numeric equality | `true` |

`0 == false` için boolean operand önce number'a çevrilir: `false → 0`; sonra
`0 == 0` true olur.

Profesyonel varsayılanımız `===` kullanmak ve gerekli conversion'ı veri sınırında
açıkça yapmaktır. Bu, `==` operatorünün rastgele olduğu anlamına gelmez; algoritması
belirlidir. Fakat dönüşüm kararını karşılaştırmanın içine gizlemek, domain niyetini
okumayı ve test etmeyi zorlaştırabilir.

### `null` ve `undefined` aynı yokluk değildir

`undefined`, bir değerin henüz atanmadığı veya bulunmadığı durumlarda ortaya
çıkabilir. `null` çoğu uygulama sözleşmesinde bilinçli “değer yok” işareti olarak
seçilir. İkisi farklı tür ve değerlerdir:

```js
console.log(null === undefined); // false
console.log(null == undefined);  // true
```

Loose equality'nin bu özel davranışını genel yokluk modelinin yerine koymayın.
Bir alanın `null`, `undefined`, empty string veya hiç bulunmama durumlarından hangisini
kabul ettiğini domain contract açıkça söylemelidir.

### Conversion boundary: ham veriden domain değerine

Deniz'in komut satırı girdisine dönelim. İlk olarak kabul edilen grammar'ı yazalım:

- Dakika: `0` veya başında gereksiz sıfır olmayan pozitif decimal integer metni.
- Tamamlanma: yalnız `"true"` veya `"false"`.
- Empty, whitespace, decimal, unit suffix ve başka kelimeler reddedilir.

```js
function parseMinutes(rawMinutes) {
  if (!/^(0|[1-9]\d*)$/.test(rawMinutes)) {
    throw new TypeError("minutes must be a whole-number token");
  }

  const minutes = Number(rawMinutes);

  if (!Number.isSafeInteger(minutes)) {
    throw new RangeError("minutes are outside the safe integer range");
  }

  return minutes;
}
```

`rawMinutes` string'dir; boundary'den değişmeden gelen kanıttır. Regex yalnız kabul
edilen metin biçimini doğrular. `minutes` number'dır; domain hesabına katılabilir.
`Number.isSafeInteger` burada conversion sonrası range guard olarak kullanılır;
safe integer ayrıntıları C34'te derinleşecektir.

Boolean token için:

```js
function parseCompleted(rawCompleted) {
  if (rawCompleted === "true") return true;
  if (rawCompleted === "false") return false;

  throw new TypeError('completed must be "true" or "false"');
}
```

Burada `Boolean(rawCompleted)` kullanmadık; çünkü genel truthiness, bizim token
grammar'ımızı temsil etmiyor. İki explicit equality dalı raw string'i gerçek
boolean domain değerine eşler.

İki dönüşümü birleştirelim:

```js
function convertStudyInput(rawMinutes, rawCompleted) {
  return {
    minutes: parseMinutes(rawMinutes),
    completed: parseCompleted(rawCompleted),
  };
}
```

Ana fonksiyonun input contract'ı iki raw string; output contract'ı `{ minutes:
number, completed: boolean }` object'idir. C30'da object modelini ayrıntılandıracağız;
şimdilik isimli iki domain değerini tek sonuçta taşıyoruz.

### Dönüşüm izi

`convertStudyInput("40", "false")` için:

| Adım | Value | Type | Kontrol/işlem | Sonraki value/type |
|---:|---|---|---|---|
| 1 | `"40"` | string | dakika grammar'ı | kabul |
| 2 | `"40"` | string | `Number` | `40` / number |
| 3 | `40` | number | safe integer | kabul |
| 4 | `"false"` | string | strict token equality | `false` / boolean |
| 5 | iki domain değeri | number + boolean | result object | `{ minutes: 40, completed: false }` |

Raw değer kaybolmadan önce validation yapılır. Conversion'dan sonra result type ve
range tekrar doğrulanır. Bu zincir `V01-LO048` için temel savunma kanıtıdır.

### `Number` ve `parseInt` aynı contract değildir

```js
console.log(Number("40px"));        // NaN
console.log(Number.parseInt("40px", 10)); // 40
```

`Number` tüm string'in numeric grammar'a uymasını ister. `parseInt` başlangıçtaki
integer bölümünü okuyup uygun olmayan karakterde durabilir. CSS benzeri bir metinden
prefix çıkarmak amaçlanıyorsa bu davranış bilinçli seçilebilir. Tüm input'un dakika
tokenı olması gerekiyorsa `parseInt` malformed girdiyi sessizce kabul eder.

Araç değil contract seçilir. “Hangisi daha iyi?” sorusunun cevabı domain'de hangi
metinlerin geçerli sayıldığına bağlıdır.

## Engineering Perspective

Type coercion JavaScript'in kazası değil, dil semantiğinin bir parçasıdır. Sorun
coercion'ın varlığı değil, domain kararının görünmez bir operator davranışına
bırakılmasıdır.

Güvenilir sınır yaklaşımı:

```text
Raw value ve source type
        ↓
Kabul edilen grammar/shape validation
        ↓
Explicit conversion
        ↓
Converted type/range validation
        ↓
Domain value
```

Bu yapı birkaç fayda sağlar:

- Hangi biçimlerin kabul edildiği review edilebilir.
- Empty, whitespace ve malformed input sessizce zero/true olmaz.
- Domain içinde tekrar tekrar conversion yapılmaz.
- Equality aynı türde değerler arasında daha açık hâle gelir.
- Failure mesajı boundary kararını gösterebilir.
- Raw input audit veya hata açıklaması için korunabilir.

Her conversion potansiyel **information loss (bilgi kaybı)** taşır. `"040"` ve
`"40"` ikisi de number `40` olduğunda biçim farkı kaybolur. Telefon numarası,
öğrenci numarası veya posta kodu görsel olarak digit içerir ama arithmetic anlamı
taşımayabilir. “Rakam görüyorum, number seçeyim” güvenilir type kararı değildir.

Code review'da şu soruları sorun:

- Raw veri hangi sistemden ve hangi type ile geliyor?
- Kabul edilen grammar açık mı?
- Empty ve whitespace nasıl davranıyor?
- Conversion hangi bilgiyi kaybediyor?
- `NaN`, range ve ambiguity nasıl ele alınıyor?
- Karşılaştırmadan önce iki operand aynı domain type'a normalize edildi mi?
- `==` kullanılıyorsa hangi exact coercion bilinçli isteniyor?
- Testler normal, boundary, invalid ve lossy vakaları içeriyor mu?

## Real World Examples

### HTML form girdisi

Kullanıcı sayı alanına yazsa bile formdan okunan değer çoğu zaman string olur.
`""` değerini doğrudan `Number` ile zero'ya çevirmek “alan boş” ile “kullanıcı sıfır
girdi” durumlarını birleştirebilir.

### URL query parametresi

`?page=2` içindeki `2` metinsel token'dır. `page=2x` için prefix parse etmek sayfayı
2 kabul edebilir; bütün token'ın integer olması gerekiyorsa önce grammar doğrulanır.

### Environment variable

`FEATURE_ENABLED=false` değeri string `"false"` olarak gelir. `Boolean(value)`
true üretir. Açık token mapping gerekir.

### Database veya API yanıtı

Aynı alan farklı sürümlerde `5` veya `"5"` gönderiyorsa loose equality ile semptom
gizlenebilir. Boundary normalization ve schema contract kaynak tutarsızlığını
görünür kılar.

### Kimlik ve kod alanları

`"00123"` öğrenci ID'sini number'a çevirmek baştaki sıfırları kaybeder. Arithmetic
gerekmiyorsa string daha doğru domain type olabilir.

## Common Mistakes

### Sonuçları ezberlemek

`"5" + 1` sonucunu bilip `"5" + 1 + 2` izini açıklayamamak transfer üretmez.
Operand type, grouping, conversion ve intermediate result yazın.

### `typeof null` sonucunu gerçek type sanmak

`typeof` output'u tarihsel operator davranışıdır. Null, specification'da ayrı
language type'tır.

### `NaN` değerini `=== NaN` ile kontrol etmek

`NaN === NaN` false olur. `Number.isNaN` kullanın ve failure'ın raw input kökünü
koruyun.

### Empty string'i zero kabul etmek

`Number("") === 0` teknik olarak doğrudur; domain açısından çoğu formda empty ile
zero farklıdır. Conversion öncesi empty kontrolü yapın.

### `Boolean("false")` ile token parse etmek

Boş olmayan string truthy'dir. `"true"`/`"false"` tokenlarını strict equality ile
açık eşleyin.

### `parseInt` ile tüm input'u doğruladığını sanmak

Prefix parser `"40px"` değerinden 40 çıkarabilir. Contract tüm string'i istiyorsa
grammar validation gerekir.

### Her `==` kullanımını açıklamadan yasaklamak

`==` belirlenmiş bir algoritmaya sahiptir; rastgele değildir. Buna rağmen dönüşümü
gizlediği için varsayılan olarak `===` ve explicit boundary conversion seçilir.
İddiayı folklore yerine mekanizma ve maintainability ile savunun.

### Kimliği number yapmak

Digitlerden oluşmak arithmetic anlamı taşımaz. Baştaki sıfır ve exact text
korunacaksa string seçin.

## Best Practices

- Her expression trace'inde value ile type'ı birlikte yazın.
- Operator conversion'ını genel “JavaScript çevirir” cümlesiyle değil exact
  operator contract ile açıklayın.
- Dış veriyi raw adıyla ve geldiği type ile sınırda karşılayın.
- Conversion'dan önce kabul edilen grammar veya shape'i doğrulayın.
- Explicit conversion'dan sonra type, `NaN`, range ve domain invariant kontrolü yapın.
- Domain içinde canonical type kullanın; conversion'ı farklı fonksiyonlara yaymayın.
- Equality için varsayılan olarak `===` kullanın ve operandları önce normalize edin.
- `null`, `undefined`, empty string, zero ve false için ayrı absence policy yazın.
- Information loss varsa raw değeri audit için koruyun.
- Normal, boundary, empty, whitespace, malformed, ambiguous ve lossy vakaları test edin.
- `parseInt` ile `Number` arasında alışkanlıkla değil input contract ile karar verin.
- C38 çalışma kaydında runtime sürümü, expression, tahmin, output ve açıklamayı tutun.

## Hands-on Exercise

### Birlikte yapalım

Aşağıdaki ifadeleri çalıştırmadan önce value/type ile tahmin edin:

```js
const expressions = [
  "8" + 2,
  "8" - 2,
  "8" + 2 + 1,
  "8" + (2 + 1),
  Boolean("false"),
  Number(""),
  "0" === 0,
  "0" == 0,
];

console.log(expressions);
```

Her satır için operand type, operator kuralı, conversion, intermediate result ve
final type sütunlarını doldurun. Ardından C38 workflow'unuzda gerçek output'u alın
ve tahmin farkını açıklayın.

### Şimdi sen dene

Listeye `Number("  ")`, `Number("8px")`, `Number.parseInt("8px", 10)`,
`Boolean(0)`, `Boolean("0")`, `null === undefined` ve `null == undefined`
ifadelerini ekleyin. “Şaşırtıcı” demek yerine her sonucu ilgili rule ile açıklayın.

### Hata avı

Şu kodu inceleyin:

```js
function readSettings(rawRetries, rawEnabled) {
  return {
    retries: Number.parseInt(rawRetries, 10),
    enabled: Boolean(rawEnabled),
  };
}
```

`readSettings("3times", "false")` hangi sonucu üretir? Hangi iki input sessizce
kabul edildi? Bu davranışın syntax değil conversion policy defect'i olduğunu
kanıtlayın.

### Kademeli ipuçları

1. **Soru:** Her conversion fonksiyonu string'in içeriğini hangi kuralla okuyor?
2. **Küçük yön:** `parseInt` prefix'te durabilir; `Boolean` string'in kelime
   anlamını okumaz.
3. **Kavramsal açıklama:** Generic conversion rule ile domain grammar aynı değildir.
4. **Kısmi yapı:** Önce `/^(0|[1-9]\d*)$/`, sonra `Number`; boolean için iki strict
   token dalı.
5. **Gerekçeli çözüm:** Malformed tokenları throw edin; normal ve invalid testleri
   çalıştırıp seçimi input contract ile savunun.

### Çözüm ve gerekçesi

```js
function parseRetries(rawRetries) {
  if (!/^(0|[1-9]\d*)$/.test(rawRetries)) {
    throw new TypeError("retries must be a whole-number token");
  }

  const retries = Number(rawRetries);
  if (!Number.isSafeInteger(retries)) {
    throw new RangeError("retries are outside the safe integer range");
  }
  return retries;
}

function parseEnabled(rawEnabled) {
  if (rawEnabled === "true") return true;
  if (rawEnabled === "false") return false;
  throw new TypeError('enabled must be "true" or "false"');
}
```

Grammar check `"3times"` değerini reddeder. Strict token mapping `"false"` değerini
boolean false'a çevirir; `"yes"` gibi belirsiz tokenı reddeder. Explicit conversion
ve post-conversion range kontrolü farklı sorumlulukları görünür tutar.

### Bağımsız uygulama

Bir CLI veya form için üç alan seçin: integer, boolean token ve kimlik metni. Her
alan için raw type, accepted grammar, explicit conversion, result invariant,
information loss ve failure policy yazın. En az 12 test üretin.

### Lab — Güvenilir conversion boundary

`V01-C29-L01` kapsamında:

1. C38 Node.js workflow'unda raw argümanları kaydedin.
2. En az 12 coercion/equality expression'ı tahmin ve type trace ile analiz edin.
3. Integer, boolean ve identifier için domain contract yazın.
4. Conversion öncesi grammar validation kurun.
5. Explicit conversion ve converted-result validation uygulayın.
6. Empty, whitespace, malformed, ambiguous ve lossy vakaları test edin.
7. `Number`/`parseInt`, `===`/`==` kararlarını trade-off kaydında savunun.
8. C09'a Boolean-ready ve C30'a type-stable veri devri üretin.

### Gerçek proje bağlantısı

`V01-P07 — JavaScript Data Reliability Integrator` için ilk artışı oluşturun.
Programın tüm dış girdilerini raw type ile listeleyin; her biri için tek bir
conversion boundary ve canonical domain type belirleyin. Raw → validated → converted
→ verified izini, test sonucunu ve bilinen information loss'u kaydedin.

## Reflection Questions

1. Hangi expression tahmininiz yanlış çıktı ve yanlış zihinsel kuralınız neydi?
2. `+` ile `-` operatorlerinin aynı string operandı farklı ele almasını nasıl
   açıklarsınız?
3. `Boolean("false")` neden true'dur ve domain tokenı nasıl parse edilmelidir?
4. `Number("")` teknik sonucu ile ürün anlamı neden farklı olabilir?
5. Hangi alanı digit içerdiği hâlde string olarak tuttunuz?
6. `==` için “rastgele” demeden hangi exact conversion adımını gösterebilirsiniz?
7. Conversion policy'niz hangi bilgiyi kaybediyor ve bunu nerede kaydettiniz?
8. C09'a geçmeden önce truthy/falsy konusunda hâlâ karıştırdığınız değer var mı?

## Chapter Summary

C29'da JavaScript tür modelini variable etiketlerinden çıkarıp runtime value'lara
bağladınız. Aynı binding'in farklı zamanda farklı türde değer taşıyabildiğini,
`typeof` operatorünün yararlı fakat `null` ve `NaN` gibi sınırları olan bir gözlem
aracı olduğunu gördünüz.

Explicit conversion ile implicit coercion'ı ayırdınız. `+` operatoründe string
concatenation, arithmetic operatorlerde numeric conversion, Boolean context'te
truthiness ve equality'de strict/loose algoritmaları ayrı ayrı izlediniz. Her
ifadeyi operand value/type → operator rule → conversion → intermediate value/type
→ final result zinciriyle açıkladınız.

En önemli mühendislik adımı dış veri sınırında gerçekleşti. Generic `Number`,
`Boolean` veya `parseInt` davranışını domain policy sanmak yerine önce kabul edilen
grammar'ı doğruladınız, explicit conversion yaptınız ve sonucu yeniden kontrol
ettiniz. Empty, whitespace, malformed ve lossy durumları sessizce kabul etmediniz.

Artık `"5" == 5` sonucunu ezberden söylemekle kalmıyor; string operandın number'a
dönüştürülüp aynı tür eşitliğine geçtiğini gösterebiliyorsunuz. Daha önemlisi,
uygulama kodunda bu gizli dönüşüme neden güvenmek istemediğinizi teknik olarak
savunabiliyorsunuz.

## Key Takeaways

- JavaScript'te type binding adına değil runtime value'ya aittir.
- Dynamic typing, kuralsızlık değil type kararlarının çalışma zamanında olmasıdır.
- `typeof null` sonucu `"object"` olsa da Null ayrı language type'tır.
- `NaN`, Number türünde özel bir değerdir; `Number.isNaN` ile kontrol edilir.
- Explicit conversion görünürdür fakat domain açısından otomatik güvenli değildir.
- Implicit coercion operator veya bağlam contract'ına bağlıdır.
- `+`, string concatenation ile numeric addition arasında operandlara göre karar verir.
- `-`, `*` ve `/` string concatenation yapmaz; numeric conversion ister.
- Boş olmayan `"false"`, `"0"` ve whitespace string'leri truthy'dir.
- `===` farklı türleri dönüştürmez; `==` belirlenmiş conversion adımları uygulayabilir.
- Varsayılan güvenilir yaklaşım boundary'de explicit conversion, domain içinde
  canonical type ve `===` kullanmaktır.
- Conversion öncesi grammar, sonrasında type/range/invariant doğrulanmalıdır.
- Digitlerden oluşan her bilgi number değildir; domain anlamı type kararını belirler.
- C29 çıktısı C09 Boolean kararları, C30 object modellemesi ve P07 için temeldir.

## Further Reading

- ECMAScript `ToBoolean` tablosunu chapterdaki falsy kümesiyle karşılaştırın.
- `ToNumber` string grammar'ının empty ve whitespace sonuçlarını deneyle doğrulayın.
- `IsLooselyEqual` algoritmasında string–number ve boolean dönüşüm adımlarını bulun.
- `IsStrictlyEqual`, `SameValue` ve `SameValueZero` farklarını yalnız yönelim
  düzeyinde inceleyin; ayrıntılı collection davranışı C31'de tekrar ele alınacaktır.
- C38 çalışma kaydınıza expression, expected value/type ve actual value/type
  sütunlarını ekleyin.

## References

- [ECMAScript Language Types](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types)
- [ECMAScript ToBoolean](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean)
- [ECMAScript ToNumber](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber)
- [ECMAScript IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal)
- [ECMAScript IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
- [C38 — JavaScript Çalışma Zamanı](./38-javascript-calisma-zamani-araclar-ve-yurutme-ortamlari.md)
