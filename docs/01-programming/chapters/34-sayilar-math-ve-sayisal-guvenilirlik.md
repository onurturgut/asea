---
document_type: "chapter"
chapter_id: "V01-C34"
volume_id: "V01"
title: "Sayılar, Math ve Sayısal Güvenilirlik"
slug: "sayilar-math-ve-sayisal-guvenilirlik"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "12-16 saat"
prerequisites:
  - "V01-C05"
  - "V01-C07"
  - "V01-C29"
  - "V01-C31"
learning_outcomes:
  - "V01-LO057"
  - "V01-LO058"
related_lab_ids:
  - "V01-C34-L01"
related_assessment_ids:
  - "V01-C34-AS01"
next_chapter_id: "V01-C35"
blueprint_id: "V01-C34-BP01"
last_updated: "2026-08-01"
---

# Sayılar, Math ve Sayısal Güvenilirlik

## Learning Objectives

ASEA dashboard'ında iki öğrencinin ilerleme oranı teoride aynı görünürken karşılaştırma
başarısız olabilir; büyük bir dış sistem kimliği Number'a çevrilince başka kimlikle
aynılaşabilir; “iki basamak göster” amacı yanlış yerde uygulanırsa hesaplama string'e
dönüşebilir. Bu chapter sonunda numeric representation ve domain kararını ayıracak,
riskleri analiz edecek (`V01-LO057`) ve güvenilir stratejiyi savunacaksınız (`V01-LO058`).

## Prerequisites

C05 Number type'ını, C07 arithmetic'i, C29 conversion boundary'yi ve C31 aggregation
pipeline'ını sağladı. Şunu tahmin edin:

```js
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
```

Sonuç yaklaşık `0.30000000000000004` ve `false`tur. Bu JavaScript'in rastgele
davranması değil, decimal kesirlerin binary floating-point temsiline sığma sınırıdır.

## Estimated Study Time

12–16 saat: representation/precision 4, validation/equality 3, rounding/domain
strategy 3, lab ve değerlendirme 2–6 saat.

## Introduction

JavaScript'teki temel numeric value `Number`dır ve IEEE-754 binary64 davranışına
dayanır. Çok geniş bir aralık ve kesirli hesap sunar; fakat bütün decimal kesirleri ve
bütün integer'ları exact temsil edemez. Profesyonel yaklaşım “floating point kötüdür”
değil, hangi domain'in ne kadar doğruluk istediğini açıkça belirlemektir.

## Core Concepts

### Temsil hatası ve gözlenen değer

`0.1` ile `0.2` binary sistemde sonlu temsil edilemez. Saklanan yakın değerler
toplanınca küçük fark görünür. Her işlemde “matematiksel ideal → temsil edilen operands
→ operation → temsil edilen result” zincirini düşünün.

### Geçerli Number sınırı

```js
function assertFiniteNumber(value, name) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} sonlu bir number olmalıdır.`);
  }
}
```

`NaN`, `Infinity` ve `-Infinity` Number type'ındadır fakat birçok domain için geçersiz
state'tir. Global `isNaN` conversion yapabilir; canonical domain value kontrolünde
`Number.isNaN`/`Number.isFinite` daha açık davranır.

### Güvenli integer

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isSafeInteger(9007199254740992)); // false
```

Safe sınırın ötesinde farklı matematiksel integer'lar aynı Number value'ya
yuvarlanabilir. Dış sistem kimliğiyle arithmetic yapılmayacaksa onu string tutmak
leading-zero ve exact-digit bilgisini de korur. BigInt bir seçenektir fakat Number ile
karıştırma, JSON ve API sözleşmesi ayrıca tasarlanmalıdır.

### Equality stratejisi

Integer count gibi exact domain'de `===` doğrudur. Ölçüm/floating calculation için
tolerance gerekebilir:

```js
function approximatelyEqual(left, right, relativeTolerance = 1e-12) {
  assertFiniteNumber(left, "left");
  assertFiniteNumber(right, "right");
  const scale = Math.max(1, Math.abs(left), Math.abs(right));
  return Math.abs(left - right) <= relativeTolerance * scale;
}
```

Tolerance domain'e göre seçilir. `Number.EPSILON`, 1 civarındaki representable
Number'lar arasındaki farkı anlatır; bütün büyüklükler için tek başına evrensel eşik
değildir. Finansal cent, sensör ölçümü ve geometri aynı toleransı paylaşmaz.

### Rounding yöntemlerinin niyeti

| Yöntem | Davranış |
| --- | --- |
| `Math.floor` | `-∞` yönündeki integer |
| `Math.ceil` | `+∞` yönündeki integer |
| `Math.trunc` | Kesirli kısmı atar, sıfıra yaklaşır |
| `Math.round` | En yakın integer; eşit uzaklıkta `+∞` yönü |

Negatif değerlerde floor ile trunc aynı değildir. Sayfa sayısı gibi “kısmi varsa bir
üst birim” ihtiyacı `ceil`; tamamlanmış tam birimler `floor` isteyebilir.

```js
const display = (0.1 + 0.2).toFixed(2);
console.log(display, typeof display); // "0.30", "string"
```

`toFixed` presentation üretir. Sonraki arithmetic için formatted string'i domain
number yerine kullanmayın.

### Para ve yüzdeler

İki ondalıklı para domain'inde integer minor units yaklaşımı yararlı olabilir:

```js
const subtotalCents = 1299;
const taxCents = 260;
const totalCents = subtotalCents + taxCents;
```

Bu yaklaşım currency'nin minor-unit kuralı, rounding noktası ve safe integer sınırı
tanımlandığında güvenlidir. Her para birimi iki ondalıklı değildir; yüksek hassasiyetli
finans için decimal library/policy gerekebilir.

Yüzdeyi içeride `0..1` oranı mı `0..100` değer mi sakladığınızı contract'ta yazın.
Display conversion'ını boundary'de yapın.

### Birlikte yapalım: güvenilir özet

```js
function summarizeRates(rates) {
  if (!Array.isArray(rates)) throw new TypeError("rates array olmalıdır.");
  for (const rate of rates) {
    assertFiniteNumber(rate, "rate");
    if (rate < 0 || rate > 1) throw new RangeError("rate 0..1 olmalıdır.");
  }
  const total = rates.reduce((sum, rate) => sum + rate, 0);
  return {
    count: rates.length,
    average: rates.length === 0 ? null : total / rates.length,
  };
}
```

Empty average `0` değildir; gözlem yoktur. `null` domain kararıdır. Display rounding
bu hesap fonksiyonunun değil UI boundary'sinin görevidir.

### `Math.random` sınırı

`Math.random()` yaklaşık uniform pseudo-random Number üretir, algoritması
implementation-defined'dır. Güvenlik token'ı, parola veya doğrulama kodu üretmek için
uygun güvenlik garantisi sağlamaz.

## Engineering Perspective

Numeric strategy veri sözleşmesidir: unit, scale, accepted range, precision, rounding
mode, invalid-value policy ve serialization biçimi belgelenir. “Number kullanıyoruz”
tek başına yeterli değildir. Boundary'de raw text doğrulanır; içeride canonical value
korunur; rounding yalnız business rule veya presentation'ın istediği noktada yapılır.

## Real World Examples

- İlerleme yüzdesi: ratio içeride, locale-aware yüzde display boundary'de.
- Para: uygun currency için cents integer; policy açık.
- Dış ID: arithmetic yoksa string.
- Sensör: domain toleransı ve finite check.
- Pagination: item count exact integer, page count `Math.ceil`.

## Common Mistakes

- Floating sonuçları her yerde `===` ile karşılaştırmak.
- EPSILON'ı ölçekten bağımsız sihirli tolerans yapmak.
- Büyük ID'yi Number'a çevirmek.
- `toFixed` sonucunu number sanmak.
- Rounding'i her ara adımda yapıp hata biriktirmek.
- Empty average'da sıfıra bölmek.
- `Math.random`ı güvenlik amacıyla kullanmak.

## Best Practices

1. Unit, scale ve range'i isim/sözleşmede belirtin.
2. `Number.isFinite` ve gerekiyorsa `isSafeInteger` ile sınırı koruyun.
3. Equality politikasını domain'e göre seçin.
4. Rounding noktasını ve yöntemini belgeleyin.
5. Formatting ile arithmetic value'yu ayırın.
6. Boundary values, negative values ve empty inputs test edin.

## Hands-on Exercise

### Şimdi sen dene

0..1 aralığındaki completion rates için count, min, max ve average üreten bir summary
function yazın. Empty input'ta min/max/average `null` olsun; input mutate edilmesin.

### Hata avı

`Number(bigId)`, `(price * 100)` ve `toFixed` ile tekrar arithmetic yapan üç hatayı
domain contract açısından açıklayın.

### Bağımsız uygulama

Bir fiyat toplamını minor units ile tasarlayın; currency, rounding ve maximum safe
amount varsayımlarını karar kaydına yazın.

### Gerçek proje bağlantısı

P07 progress summary için finite/range checks, empty policy, ratio/display ayrımı ve
tolerance tests ekleyin.

## Reflection Questions

1. `0.1 + 0.2` neden exact 0.3 olmayabilir?
2. Safe integer ile integer farkı nedir?
3. Tolerance neden domain ve magnitude'a bağlıdır?
4. `toFixed` neden calculation değil presentation aracıdır?
5. Minor-unit para stratejisinin sınırları nelerdir?

## Chapter Summary

Number geniş kullanımlıdır fakat finite olma, precision ve safe-integer sınırları
vardır. Güvenilir hesap; representation riskini tanır, canonical units seçer, invalid
values'ı reddeder, equality/rounding politikasını açıklar ve presentation'ı arithmetic
state'ten ayırır.

## Key Takeaways

- Decimal beklenti ile binary floating representation aynı değildir.
- `Number.isFinite` domain sınırının temel parçasıdır.
- Büyük integer kimlikleri Number için güvenli olmayabilir.
- Tolerance evrensel değil domain-specific karardır.
- Rounding yöntemi iş anlamına göre seçilir.
- `toFixed` string üretir.
- Empty aggregation sonucu açıkça modellenmelidir.

## Further Reading

- C29 conversion semantics
- C31 collection aggregation
- C35 epoch milliseconds ve time calculations
- P07 numeric reliability dossier

## References

- ECMA-262 Number Objects, safe integers ve EPSILON
- ECMA-262 Math Object ve rounding functions
- ASEA `V01-C34-BP01`, `V01-LO057`, `V01-LO058`
