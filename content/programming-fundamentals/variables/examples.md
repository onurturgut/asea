# Değişkenler (Variables) ve Durum (State): Aşamalı Kod Örnekleri

<!-- markdownlint-disable MD024 -->

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

Bu örnekler [Değişkenler ve Durum](./lesson.md) dersini destekler. Daha dar bir
ortam belirtilmedikçe güncel Node.js sürümünde veya modern tarayıcı konsolunda
çalıştırılabilir.

Her çalıştırılabilir blok bağımsızdır. Bilerek hata içeren örnekler **ayrı hata
örneği** olarak işaretlenmiştir ve tek başına değerlendirilmelidir.

## Örnek 1: Sabit Bir Değeri Adlandırmak

### Amaç

Başka bir değerle ilişkilendirilmemesi gereken bağlama oluşturmak.

### Kod

```js
const courseName = "Programming Fundamentals";

console.log(courseName);
```

### Beklenen çıktı

```text
Programming Fundamentals
```

### Açıklama

Bildirim `courseName` bağlamasını oluşturur ve ilklendirir. Ders boyunca bu ad
başka bir değerle ilişkilendirilmeyeceği için `const` doğru niyeti gösterir.

## Örnek 2: Bilinçli Değişimi Modellemek

### Amaç

Zaman içinde değişen değeri temsil etmek.

### Kod

```js
let completedLessons = 0;

completedLessons = completedLessons + 1;
completedLessons += 1;

console.log(completedLessons);
```

### Beklenen çıktı

```text
2
```

### Durum izi

| Adım | İşlem | Önceki değer | Sonraki değer |
| ---: | --- | ---: | ---: |
| 1 | `let completedLessons = 0` | İlklendirilmemiş | 0 |
| 2 | `completedLessons = completedLessons + 1` | 0 | 1 |
| 3 | `completedLessons += 1` | 1 | 2 |

### Açıklama

İki atama da bağlamanın güncel sayı değerini değiştirir. Yeniden atama modelin
parçası olduğu için `let` uygundur.

## Örnek 3: Birden Fazla Bağlamayı İzlemek

### Amaç

Bir atamanın başka bağlamaları okuduğu diziyi eksiksiz durum tablosuna
dönüştürmek.

### Kod

```js
let subtotal = 20;
const shipping = 5;
let total = subtotal + shipping;

subtotal = 25;
total = subtotal + shipping;

console.log({ subtotal, shipping, total });
```

### Beklenen çıktı

```text
{ subtotal: 25, shipping: 5, total: 30 }
```

### Durum izi

| Adım | Komut | `subtotal` | `shipping` | `total` |
| ---: | --- | ---: | ---: | ---: |
| 1 | `let subtotal = 20` | 20 | İlklendirilmemiş | İlklendirilmemiş |
| 2 | `const shipping = 5` | 20 | 5 | İlklendirilmemiş |
| 3 | `let total = subtotal + shipping` | 20 | 5 | 25 |
| 4 | `subtotal = 25` | 25 | 5 | 25 |
| 5 | `total = subtotal + shipping` | 25 | 5 | 30 |

### Açıklama

`subtotal` değiştiğinde `total` kendiliğinden hesaplanmaz. `total` atamasının
yeniden çalışması gerekir. Değişkenler güncel değer taşır; elektronik tablo
formülü gibi otomatik ilişki kurmaz.

## Örnek 4: Yeniden Atama ve Mutasyon

### Amaç

Sabit bağlamayı değişebilir nesne durumundan ayırmak.

### Kod

```js
const user = {
  name: "Ada",
  visits: 0,
};

user.visits += 1;

console.log(user);
```

### Beklenen çıktı

```text
{ name: 'Ada', visits: 1 }
```

Çıktının biçimi çalışma ortamına göre küçük farklılık gösterebilir; `visits`
değeri `1` olur.

### Açıklama

`user` bağlaması hâlâ aynı nesneye başvurur. `visits` özelliğini güncellemek
nesneyi değiştirir, bağlamayı yeniden atamaz.

### Ayrı çalışma zamanı hatası

```js
const user = { name: "Ada" };
user = { name: "Grace" };
```

İkinci komut değiştirilemez bağlamayı yeniden atamaya çalıştığı için `TypeError`
üretir.

## Örnek 5: Paylaşılan Nesne Kimliği

### Amaç

İki bağlamanın aynı nesneye başvurabileceğini göstermek.

### Kod

```js
const first = { active: false };
const second = first;

second.active = true;

console.log(first.active);
console.log(first === second);
```

### Beklenen çıktı

```text
true
true
```

### Açıklama

`first` değerini `second`a atamak nesneyi kopyalamaz. İki bağlama aynı nesne
kimliğine başvurur; biri üzerinden yapılan mutasyon diğeri üzerinden görünür.

## Örnek 6: `let` ve `const` ile Blok Kapsamı

### Amaç

Geçici durumu ona sahip olan blokla sınırlandırmak.

### Kod

```js
const outside = "visible";

if (true) {
  const inside = "block only";
  let counter = 0;
  counter += 1;

  console.log(outside);
  console.log(inside);
  console.log(counter);
}

console.log(outside);
```

### Beklenen çıktı

```text
visible
block only
1
visible
```

### Açıklama

`inside` ve `counter` yalnızca `if` bloğunda erişilebilirdir. `outside`
çevreleyen kapsama aittir.

### Ayrı çalışma zamanı hatası

```js
if (true) {
  const inside = "block only";
}

console.log(inside);
```

Son okuma `ReferenceError` üretir; o konumdan erişilebilir `inside` bağlaması
yoktur.

## Örnek 7: `var` Sıradan Blok Kapsamlı Değildir

### Amaç

`var`ı sözlüksel bildirimlerle karşılaştırmak.

### Kod

```js
function inspectVarScope() {
  if (true) {
    var status = "ready";
  }

  console.log(status);
}

inspectVarScope();
```

### Beklenen çıktı

```text
ready
```

### Açıklama

`status` fonksiyonun değişken ortamına aittir. Sıradan `if` bloğu kapsamını
sınırlandırmaz.

## Örnek 8: Gölgelemede En Yakın Bağlama

### Amaç

Sözlüksel ad çözümlemesini gözlemlemek.

### Kod

```js
const label = "outer";

function printLabels() {
  const label = "function";

  if (true) {
    const label = "block";
    console.log(label);
  }

  console.log(label);
}

printLabels();
console.log(label);
```

### Beklenen çıktı

```text
block
function
outer
```

### Açıklama

Her okuma, erişilebilir en yakın `label` bağlamasını çözümler. Aynı tanımlayıcı
yazımına sahip olsalar da bağlamalar farklıdır.

## Örnek 9: `var` İlklendirme Zamanı

### Amaç

Bağlama ilklendirmesi ile ilklendirici değerlendirmenin farkını gözlemlemek.

### Kod

```js
console.log(legacyValue);

var legacyValue = 7;

console.log(legacyValue);
```

### Beklenen çıktı

```text
undefined
7
```

### Açıklama

`var` bağlaması ardışık komutlardan önce yaratılır ve `undefined` ile
ilklendirilir. `7` değeri ancak değerlendirme bildirime ulaştığında atanır.
Hiçbir kaynak satırı fiziksel olarak taşınmaz.

## Örnek 10: Geçici Ölü Bölge

### Amaç

İlklendirilmemiş sözlüksel bağlamayı gözlemlemek.

### Ayrı çalışma zamanı hatası

```js
console.log(modernValue);

let modernValue = 7;
```

### Beklenen davranış

İlk komut `ReferenceError` üretir. `modernValue` bağlaması vardır, ancak
değerlendirme bildirime ulaşana kadar ilklendirilmemiştir.

### `typeof` sınırı

```js
console.log(typeof neverDeclared);
```

Beklenen çıktı:

```text
undefined
```

Şu ayrı örnek ise `ReferenceError` üretir:

```js
console.log(typeof lexicalValue);

let lexicalValue = 7;
```

`typeof`, hiç bulunmayan tanımlayıcı ile var olan fakat ilklendirilmemiş
sözlüksel bağlamayı farklı ele alır.

## Örnek 11: Yeniden Bildirim, Yeniden Atama Değildir

### Amaç

Sık karıştırılan iki işlemi ayırmak.

### Çalıştırılabilir yeniden atama

```js
let count = 0;
count = 1;

console.log(count);
```

Beklenen çıktı:

```text
1
```

### Ayrı sözdizimi hatası

```js
let count = 0;
let count = 1;
```

Aynı kapsamda iki sözlüksel bildirim bulunduğu için kaynak birimi `SyntaxError`
ile ayrıştırılamaz.

### İzin verilen fakat önerilmeyen tekrarlı `var`

```js
var legacyCount = 0;
var legacyCount = 1;

console.log(legacyCount);
```

Beklenen çıktı:

```text
1
```

Sıradan tekrarlı `var` bildirimleri tek bağlamayı gösterebilir. Bu eski
uyumluluk davranışı bildirim stratejisi olarak kullanılmamalıdır.

## Örnek 12: Koşul İçinde Atama

### Amaç

Atamanın durumu değiştiren bir ifade olduğunu göstermek.

### Kod

```js
let isReady = false;

if ((isReady = true)) {
  console.log("Ready branch");
}

console.log(isReady);
```

### Beklenen çıktı

```text
Ready branch
true
```

### Açıklama

Atama `true` değerini üretir ve koşul bu değeri kullanır. Kod geçerlidir fakat
çoğu zaman yanlışlıkla yazılır. Karşılaştırma bağlamayı değiştirmez:

```js
if (isReady === true) {
  console.log("Ready branch");
}
```

## Örnek 13: Her Yinelemede Yeni `const` Bağlaması

### Amaç

Her döngü yinelemesinde yeni sabit bağlama kullanmak.

### Kod

```js
let total = 0;

for (const price of [4, 6, 10]) {
  total += price;
}

console.log(total);
```

### Beklenen çıktı

```text
20
```

### Açıklama

Her yineleme yeni `price` bağlaması alır. Bağlama o yineleme içinde yeniden
atanmaz. `total` değeri değiştiği için `let` kullanır.

## Örnek 14: Beklenen Değişime Göre Seçim

### Amaç

Tek fonksiyonda farklı durum politikalarını ifade etmek.

### Kod

```js
function summarizeOrder(prices) {
  const itemCount = prices.length;
  let subtotal = 0;

  for (const price of prices) {
    subtotal += price;
  }

  return {
    itemCount,
    subtotal,
  };
}

console.log(summarizeOrder([12, 8, 5]));
```

### Beklenen çıktı

```text
{ itemCount: 3, subtotal: 25 }
```

### Açıklama

- `prices` parametresi yeniden atanmaz.
- `itemCount` bir kez hesaplanır.
- `subtotal`, fiyatlar eklendikçe değişir.
- Her `price` yalnızca kendi yinelemesinde kullanılan sabit bağlamadır.

Bildirim tercihleri her bağlamanın planlanan yaşam döngüsünü izler.

## Durum Tablosu Şablonu

Yeni bir diziyi çözümlerken şu biçimi kullanın:

| Adım | Komut | Okunan bağlamalar | Yazılan bağlamalar | Sonraki durum |
| ---: | --- | --- | --- | --- |
| 1 |  |  |  |  |

İlklendirmeyi de durum geçişi olarak kaydedin. Değerlendirme sözdizimi veya
çalışma zamanı hatasıyla durursa hatayı yazın ve sonraki durumu üretmeyin.

## Çalışma Ortamı Notları

- Örnekler gerektiği yerlerde modern ve katı JavaScript davranışını varsayar.
- Tarayıcı klasik betiği, ECMAScript modülü, Node.js CommonJS ve REPL
  gönderimleri üst düzeyde farklı davranabilir.
- Hata sınıfı örnek sözleşmesinin parçasıdır; hata iletisi motorlara göre
  değişebilir.
- Örnekler fiziksel yığın/öbek yerleşimi iddiasında bulunmaz.

## Kaynak Temeli

- [Variables Research Packet](../../../research/programming-fundamentals/variables/research-packet.md)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
