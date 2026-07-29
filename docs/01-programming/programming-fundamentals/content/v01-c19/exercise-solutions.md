---
document_type: "exercise-solutions"
document_id: "V01-C19-EX01-SOL"
title: "V01-C19 Bağımsız Uygulama Çözümü"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C19"
learning_outcomes: ["V01-LO029", "V01-LO030"]
last_updated: "2026-07-29"
---

# Bağımsız Uygulama Çözümü

Bu çözümü, ana dersteki `countCharacters` görevinde en az bir kod denemesi ve
bir çağrı izi ürettikten sonra açın. Çözümü okumak bağımsız başarı kanıtı
değildir; ardından farklı bir veriyle transfer görevi çözülmelidir.

## Problemi Yeniden Kuralım

Bir metin dizisindeki bütün metinlerin JavaScript `.length` değerlerinin
toplamını bulmak istiyoruz.

Örnek:

```js
["ASEA", "öğren"]
```

Beklenen sonuç:

```text
4 + 5 = 9
```

Bu chapter'ın odağı Unicode karakter sayma politikası değildir. `.length`
JavaScript string'lerinde UTF-16 code unit sayısını verir. Kullanıcının
algıladığı karakter sayısı bazı metinlerde farklı olabilir; bu sınır C20'de
ele alınacaktır.

## Fonksiyon Sözleşmesi

```text
Ad: countCharacters
Girdi:
  values -> string değerlerden oluşan dizi
  index  -> sıradaki işlenmemiş konum, varsayılan 0
Çıktı:
  index'ten dizinin sonuna kadar toplam .length değeri
Yan etki:
  yok; kaynak dizi değiştirilmez
Geçerli sınır:
  0 <= index <= values.length
```

## Değişken ve Tür Kararları

### `values`

`values`, işlenecek bütün metinleri taşıyan dizidir. Türünü insan tarafından
okunur biçimde “string dizisi” diye ifade ederiz. JavaScript çalışma zamanında
`Array.isArray(values)` ile dizi olup olmadığı kontrol edilebilir; her elemanın
string olduğu ayrıca doğrulanmalıdır.

Neden tek bir `string` değil? Problem birden fazla bağımsız metnin toplamını
istiyor. Tek string'e birleştirmek eleman sınırlarını kaybettirebilir ve
gereksiz yeni değer üretir.

`values` her recursive çağrıda aynı dizi referansını taşır. Problem, diziyi
kesip yeni dizi oluşturarak değil `index` sınırını ilerleterek küçültülür.

### `index`

`index`, sıradaki işlenmemiş elemanın konumunu temsil eder. JavaScript türü
`number`, daha dar kısıtı negatif olmayan tamsayıdır.

Neden string değil? `"0" + 1` işlemi `1` yerine `"01"` üretir. Dizi indeksi ve
`values.length` karşılaştırması sayısal ilerleme gerektirir.

`index = 0` varsayılanı, dışarıdan çağıran kişinin bütün diziyi işlemek
istediği normal durumu kolaylaştırır. Recursive çağrılar `index + 1` değerini
gönderir. Mevcut frame'in `index` değeri değişmez; yeni frame yeni sayıyı alır.

### Dönen sayı

Her frame, kendi konumundan dizinin sonuna kadar kalan toplamı döndürür. Türü
`number`'dır. Base case `0` döndürür, çünkü işlenecek metin kalmadığında
toplama katkısı yoktur.

## Recursive Çözüm

```js
function countCharacters(values, index = 0) {
  if (index === values.length) {
    return 0;
  }

  const currentLength = values[index].length;
  const remainingLength = countCharacters(values, index + 1);

  return currentLength + remainingLength;
}
```

Tek satırlık `return values[index].length + countCharacters(...)` çözümü de
doğrudur. Burada iki ara değişken kullanmamızın nedeni, yeni öğrenen öğrencinin
mevcut katkı ile küçük problemin sonucunu ayrı görebilmesidir.

### `currentLength`

`currentLength`, yalnız mevcut `index` konumundaki metnin `.length` değeridir.
`const` kullanılır; frame içinde bir kez hesaplanır ve yeniden atanmaz.

### `remainingLength`

`remainingLength`, daha küçük problemin döndürdüğü sayıdır. `const` kullanılır;
recursive çağrı tamamlandıktan sonra bir kez bağlanır ve değişmez.

Bu adlar `a` ve `b` gibi kısa adlardan daha uzundur, fakat iki sayının farklı
rollerini görünür kılar. Aynı `number` türünde olmaları aynı anlamı taşıdıkları
anlamına gelmez.

## Satır Satır Çalışma İzi

Girdi:

```js
countCharacters(["ab", "c"]);
```

İniş:

| Frame | `index` | Base? | `currentLength` | Beklenen küçük sonuç |
|---|---:|---|---:|---|
| 1 | 0 | Hayır | 2 | `countCharacters(values, 1)` |
| 2 | 1 | Hayır | 1 | `countCharacters(values, 2)` |
| 3 | 2 | Evet | oluşturulmaz | yok |

Çözülme:

| Frame | Base/küçük sonuç | İşlem | Dönen sonuç |
|---|---:|---|---:|
| 3 | 0 | doğrudan dönüş | 0 |
| 2 | 0 | `1 + 0` | 1 |
| 1 | 1 | `2 + 1` | 3 |

Frame 1, Frame 2 çalışırken `currentLength = 2` bilgisiyle bekler. İç çağrı
tamamlandığında `remainingLength = 1` olur ve dış frame `3` döndürür.

## Base Case ve Sonlanma Kanıtı

Base case:

```js
index === values.length
```

Bu durumda işlenmemiş eleman kalmamıştır ve doğru doğrudan sonuç `0`'dır.
Fonksiyon `values[index]` okumadan döndüğü için sınır dışı erişim oluşmaz.

Progress measure:

```text
values.length - index
```

Her recursive çağrıda `index` bir artar; dolayısıyla kalan eleman sayısı bir
azalır. Geçerli başlangıçta ölçü negatif değildir ve sonunda `0` olur. Bu,
fonksiyonun sonlu dizi için base case'e ulaşacağını gösterir.

## Girdi Sınırını Koruyan Sürüm

Özyinelemeli çekirdeği gördükten sonra dış sözleşmeyi koruyabiliriz:

```js
function countCharacters(values, index = 0) {
  if (!Array.isArray(values)) {
    throw new TypeError("values bir dizi olmalıdır");
  }

  if (!Number.isInteger(index) || index < 0 || index > values.length) {
    throw new RangeError("index geçerli bir dizi sınırında olmalıdır");
  }

  if (index === values.length) {
    return 0;
  }

  if (typeof values[index] !== "string") {
    throw new TypeError("values yalnız string elemanlar taşımalıdır");
  }

  const currentLength = values[index].length;
  const remainingLength = countCharacters(values, index + 1);

  return currentLength + remainingLength;
}
```

Bu doğrulama öğretim mekanizmasından sonra geldi. Böylece ilk örnek sade kaldı,
profesyonel sınır davranışı ise saklanmadı.

## Testler

```js
const assert = require("node:assert/strict");

assert.equal(countCharacters([]), 0);
assert.equal(countCharacters(["a"]), 1);
assert.equal(countCharacters(["ASEA", "öğren"]), 9);
assert.equal(countCharacters(["", "a"]), 1);
assert.equal(countCharacters(["ab", "cd"], 1), 2);

assert.throws(() => countCharacters("ASEA"), TypeError);
assert.throws(() => countCharacters(["a", 2]), TypeError);
assert.throws(() => countCharacters(["a"], -1), RangeError);
assert.throws(() => countCharacters(["a"], 2), RangeError);
```

`assert.throws` testleri yalnız hata oluştuğunu değil, hata sınıfının sözleşmeyle
uyumlu olduğunu doğrular.

## Döngülü Alternatif

```js
function countCharactersIterative(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values bir dizi olmalıdır");
  }

  let totalCharacters = 0;

  for (const value of values) {
    if (typeof value !== "string") {
      throw new TypeError("values yalnız string elemanlar taşımalıdır");
    }

    totalCharacters += value.length;
  }

  return totalCharacters;
}
```

`totalCharacters`, şimdiye kadar işlenmiş metinlerin toplamını taşıdığı için
`let` kullanır. Her turda yeni bir sayıya atanır. `value`, o turdaki tek string
elemandır ve döngü gövdesinde yeniden atanmadığı için `const` ile bağlanır.

Doğrusal bir dizi için döngülü sürüm daha doğrudan olabilir ve her eleman için
yeni call frame oluşturmaz. Recursive sürüm burada öğrenme ve izleme için
değerlidir; üretim kararında veri büyüklüğü, okunabilirlik ve stack riski
birlikte düşünülmelidir.

## Transfer Görevi

Çözüme bakmadan yeni bir fonksiyon yazın:

```text
countMatchingWords(values, targetLength)
```

Fonksiyon, uzunluğu `targetLength` olan kaç string bulunduğunu recursive olarak
hesaplasın. Aynı çözümü kopyalamak yerine:

- yeni değişkenlerin anlamını;
- base case'i;
- mevcut frame katkısını;
- progress measure'ı;
- en az beş testi

yeniden kurun.
