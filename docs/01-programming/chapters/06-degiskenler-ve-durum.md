---
document_type: "chapter"
chapter_id: "V01-C06"
volume_id: "V01"
title: "Değişkenler ve Durum"
slug: "degiskenler-ve-durum"
version: "0.1.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "6-8 hours"
prerequisites:
  - "V01-C05"
learning_outcomes:
  - "V01-LO009"
  - "V01-LO010"
related_lab_ids:
  - "V01-C06-L01"
related_assessment_ids:
  - "V01-C06-AS01"
next_chapter_id: "V01-C07"
language: "tr"
last_updated: "2026-07-22"
---

# Değişkenler ve Durum

<!-- markdownlint-disable MD012 MD024 -->

## Learning Objectives

Bu dersi tamamladıktan sonra:

1. Bir atama dizisi için eksiksiz durum tablosu oluşturabileceksiniz
   (`V01-LO009`).
2. Verinin beklenen değişim ihtiyacına göre sabit veya değişebilir değişken
   seçimini gerekçelendirebileceksiniz (`V01-LO010`).
3. Bildirim, ilklendirme, atama, yeniden atama ve mutasyonu ayırabileceksiniz.
4. `var`, `let` ve `const` için temel kapsam davranışını tahmin
   edebileceksiniz.
5. Yukarı kaldırma ve Geçici Ölü Bölgeyi, kaynak kodun fiziksel olarak
   taşındığını iddia etmeden açıklayabileceksiniz.
6. Okunabilir ve bakımı kolay kod için modern JavaScript bildirim
   uygulamalarını kullanabileceksiniz.

İlk iki hedef bu bölümün kanonik öğrenme çıktılarıdır. Diğerleri bu çıktıların
JavaScript'te doğru uygulanmasını destekler.

## Prerequisites

Şunları yapabiliyor olmalısınız:

- bir değeri veri türünden ayırmak;
- temel JavaScript ifadelerini okumak;
- sayı, metin, mantıksal değer, `null`, `undefined` ve nesneleri tanımak;
- kısa bir komut dizisini yukarıdan aşağıya izlemek;
- program çalışırken durumun değişebileceğini açıklamak.

Kanonik ön koşul `V01-C05`, Values and Data Types bölümüdür.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Ön bilgi kontrolü | 20 dakika |
| Ana anlatım ve not çıkarma | 180–220 dakika |
| Kod tahmini ve state table çalışmaları | 75–90 dakika |
| Alıştırma ve laboratuvar hazırlığı | 75–100 dakika |
| Quiz, tekrar ve reflection | 60 dakika |
| **Toplam** | **6–8 saat** |

## Introduction

Her ürünü hesaplayabilen fakat ara toplamı hatırlayamayan bir kasa programı
düşünün. Program aritmetik işlem yapabilir, ancak yeni ürün geldiğinde önceki
sonuç kaybolur. Skor takip edemez, deneme sayısını sayamaz, kullanıcının oturum
durumunu veya çalışma sırasında gerekli yapılandırmayı koruyamaz.

Bir programın, içinde bulunduğu koşulu açıklayan **duruma** ihtiyacı
vardır. **Değişken**, bu durumun bir bölümüne ad verir. Bu ad,
programın güncel değeri okumasını ve tasarım izin veriyorsa yeni bir değerle
ilişkilendirmesini sağlar.

Bu basit yetenek önemli mühendislik soruları doğurur:

- Hangi bilgi değişmelidir?
- Hangi bilgi tek bir değerle ilişkili kalmalıdır?
- Değişikliği kim yapabilir?
- Ad nerede kullanılabilir?
- Bildirim ilklendirilmeden önce ne olur?
- Bir nesnenin içeriğini değiştirmek değişkeni yeniden atamak mıdır?

Bu soruların yanıtları kodun öngörülebilir veya şaşırtıcı olmasını belirler.
Değişkenler yalnızca sözdizimi değildir; programın zaman, sahiplik ve değişim
modelinin parçasıdır.

Bu derste JavaScript sınırlı dil örneğidir. Ad, bağlama, değer ve durum geçişi
modeli başka programlama dillerine de taşınabilir.

Bir yeniden deneme politikası düşünün:

```js
const maximumAttempts = 3;
let attemptsUsed = 0;

attemptsUsed = attemptsUsed + 1;
```

İki ad iki farklı söz verir:

- `maximumAttempts`, işlem sırasında başka bir değerle ilişkilendirilmemesi
  gereken bir politikayı temsil eder.
- `attemptsUsed`, değişen durumu temsil eder.

Anahtar sözcükler, okuyucu programın geri kalanını incelemeden önce bu niyeti
gösterir. İki bağlama da serbestçe yeniden atanabilseydi kod çalışabilirdi,
ancak tasarım daha belirsiz olurdu. İkisi de değiştirilemez olsaydı sayaç
ilerleyemezdi.

Amaç anahtar sözcüğü ezberle seçmek değil, değişimi dürüst biçimde modellemektir.

Bir mühendis şunları sorar:

1. Bu ad hangi gerçeği temsil ediyor?
2. Ad daha sonra başka bir değerle ilişkilendirilecek mi?
3. Değer bir nesneyse nesnenin iç durumu değişebilir mi?
4. Bu ada ihtiyaç duyan en dar bölge hangisi?
5. Durum geçişi gözlemlenip açıklanabilir mi?

## Core Concepts

### Ad, bağlama ve değer

Şu soyut modeli kullanın:

```text
tanımlayıcı -> bağlama -> güncel değer
```

**Tanımlayıcı (identifier)** kaynak kodda yazılan addır. **Bağlama (binding)**,
bu ad ile güncel değer arasındaki ilişkidir. **Değer (value)** ise bağlamanın o
anda ilişkilendirildiği JavaScript değeridir.

```js
let score = 10;
```

Bu bildirimden sonra:

- `score` tanımlayıcıdır;
- bildirim `score` adına ait bir bağlama oluşturur;
- bağlamanın güncel değeri `10` sayısıdır.

```js
score = 15;
```

Ad hâlâ `score` olur, fakat değişebilir bağlamanın güncel değeri artık `15`tir.

Bu model, her değişkeni fiziksel bir bellek kutusu saymaktan daha doğrudur.
JavaScript gözlemlenebilir dil davranışını tanımlar; her bağlama için tek bir
donanım adresi, yığın konumu veya öbek yerleşimi zorunlu kılmaz.

### Durum anlık görüntüler dizisidir

Durum tablosu değişimi görünür kılar:

| Adım | Komut | Önceki `score` | Sonraki `score` |
| ---: | --- | ---: | ---: |
| 1 | `let score = 10` | İlklendirilmemiş | 10 |
| 2 | `score = score + 5` | 10 | 15 |
| 3 | `score -= 2` | 15 | 13 |

Her satır şu soruları yanıtlar:

- Hangi komut çalıştı?
- Hangi bağlama okundu?
- Hangi bağlama yazıldı?
- Gözlemlenebilir durum ne oldu?

Tablo soyutlamadır; JavaScript motorundaki her ayrıntıyı değil, çözümleme için
önemli program durumunu gösterir.

### Bağlama, işaret ettiği nesne değildir

```js
const settings = { theme: "light" };
settings.theme = "dark";
```

`settings` bağlaması yeniden atanmadı. Değeri hâlâ aynı nesneye başvurur; yalnızca
nesnenin bir özelliği değişti.

```js
settings = { theme: "dark" };
```

Bu işlem, değiştirilemez `settings` bağlamasını başka bir değerle
ilişkilendirmeye çalışır. Çalışma bu komuta ulaşırsa JavaScript `TypeError`
üretir.

`const` bağlamayı sabitler; nesneyi özyinelemeli olarak dondurmaz.

### Değişkenler ve program durumu

Değişken, program durumuna verilen adlı bir bağlamadır. **Atama (assignment)**,
bağlamayla ilişkili değeri oluşturur veya değiştirir. **Değişebilirlik
(mutability)**, durumun izin verilen bir bölümünün ilklendirmeden sonra
değişebilmesidir. Sabit bağlama yeniden atamayı engeller; erişilen tüm durumu
kendiliğinden değiştirilemez yapmaz.

Beş işlemi ayırın:

| İşlem | Anlam | Örnek |
| --- | --- | --- |
| Bildirim (declaration) | Bildirim sözdizimiyle bağlama oluşturur | `let total;` |
| İlklendirme (initialization) | Bağlamanın ilk değerini kurar | `let total = 0;` |
| Atama | Bir başvuru üzerinden değer yazar | `total = 4;` |
| Yeniden atama (reassignment) | Değişebilir bağlamanın güncel değerini değiştirir | `total = 5;` |
| Mutasyon (mutation) | Nesne veya koleksiyonun iç durumunu değiştirir | `cart.items.push(item);` |

İlklendirici bildirimin parçasıdır:

```js
let total = 0;
```

Daha sonraki atama yeni bir bildirim değildir:

```js
total = 12;
```

### `let`: değişebilir sözlüksel bağlama

Yeniden atama bağlamanın planlanan yaşam döngüsünün parçasıysa `let` kullanın:

```js
let remainingAttempts = 3;
remainingAttempts -= 1;
```

`let`, değişebilir sözlüksel bağlama oluşturur. Bağlama, değerlendirme bildirime
ulaştığında ilklendirilir. İlklendiricisi olmayan `let`, bildirim çalıştığında
`undefined` ile ilklendirilir:

```js
let result;
console.log(result); // undefined
```

`let` blok kapsamlıdır:

```js
if (true) {
  let message = "inside";
  console.log(message);
}

// console.log(message); // ReferenceError
```

### `const`: değiştirilemez sözlüksel bağlama

Bağlama yeniden atanmayacaksa `const` kullanın:

```js
const taxRate = 0.2;
```

`const`, daha sonra atanamayacağı için ilklendirici ister:

```js
// const taxRate; // SyntaxError
```

Bağlama değiştirilemez olsa da işaret edilen nesne değişebilir:

```js
const profile = { visits: 0 };
profile.visits += 1;
```

`let` ile `const` arasındaki karar nesnenin değişip değişmediğine değil,
bağlamanın yeniden kurulup kurulmayacağına dayanır.

### `var`: değişebilir değişken-ortamı bağlaması

`var`, JavaScript'in özgün genel bildirim biçimidir. Sıradan fonksiyon kodunda
blok değil, fonksiyon kapsamlıdır:

```js
function readStatus() {
  if (true) {
    var status = "ready";
  }

  return status;
}

console.log(readStatus()); // ready
```

`if` bloğunun süslü parantezleri `status` için ayrı kapsam oluşturmaz.

`var` bağlamaları bildirim oluşturma sırasında yaratılır ve ardışık komutlar
çalışmadan önce `undefined` ile ilklendirilir:

```js
console.log(legacyCount); // undefined
var legacyCount = 1;
```

Bu davranış `var legacyCount = 1` satırının taşındığı anlamına gelmez. Oluşturma,
ilklendirme ve çalıştırma farklı aşamalardır.

Yeni uygulama kodunda `var`ın özel fonksiyon/global davranışı bilinçli olarak
gerekmiyorsa `const` ve `let` tercih edin.

### Kapsam: bağlamanın kullanılabildiği yer

**Kapsam (scope)**, bir bağlamanın erişilebilir olduğu bölgedir. JavaScript
genellikle sözlüksel kapsam kullanır: ortam arama yolu kaynak kodun iç içe
yapısından belirlenir.

#### Global kapsam

**Global kapsam (global scope)** geniş bir bölgeden erişilen durumdur ve geniş
bağımlılık oluşturur.

- Tarayıcıdaki klasik betiğin üst düzey `var` bildirimi `globalThis` üzerinde
  özellik oluşturabilir.
- Klasik betikte üst düzey `let` veya `const`, global nesne özelliği olmayan
  sözlüksel bağlama oluşturur.
- Modülün üst düzey bildirimleri modül kapsamındadır.

Çalışma ortamı önemlidir. Node.js CommonJS üst düzeyi, tarayıcı klasik betiği
gibi açıklanmamalıdır.

#### Fonksiyon kapsamı

**Fonksiyon kapsamı (function scope)**, parametrelerin ve sıradan `var`
bildirimlerinin fonksiyon içinde erişilebildiği bölgedir:

```js
function calculate(subtotal) {
  var fee = 2;
  return subtotal + fee;
}
```

`subtotal` ve `fee`, `calculate` dışında erişilebilir değildir.

#### Blok kapsamı

**Blok kapsamı (block scope)**, `let` ve `const` bağlamalarını belirli bir blokla
sınırlar:

```js
{
  const temporaryToken = "abc";
  let attempts = 0;
}
```

Dar kapsam, durumu okuyabilecek veya değiştirebilecek yerlerin sayısını azaltır.

### Gölgeleme ve ad çözümleme

İç kapsam dış kapsamla aynı adı bildirirse **gölgeleme (shadowing)** oluşur:

```js
const label = "outer";

{
  const label = "inner";
  console.log(label); // inner
}

console.log(label); // outer
```

JavaScript en yakın bağlamayı çözümler. Kısa ve bilinçli gölgeleme geçerli
olabilir; yanlışlıkla yapılan gölgeleme yanlış durumun okunmasına yol açabilir.

### Yeniden bildirim ve yeniden atama

**Yeniden bildirim (redeclaration)**, aynı kapsamda bir adı tekrar bildirmeye
çalışmaktır. Yeniden atama ise var olan değişebilir bağlamayı günceller:

```js
let count = 0;
count = 1; // geçerli yeniden atama
```

```js
// Ayrı dosyada değerlendirin:
// let count = 0;
// let count = 1; // SyntaxError
```

Sıradan tekrarlı `var` bildirimleri aynı bağlamayı gösterebilir:

```js
var legacyValue = 1;
var legacyValue = 2;
```

Bu izin geriye dönük uyumluluk davranışıdır; bildirimleri çoğaltmak için bir
tasarım önerisi değildir.

### Geçici Ölü Bölge

Sözlüksel bildirimde bağlama, ortam kurulurken yaratılır; değerlendirme bildirime
ulaşana kadar ilklendirilmez. Bağlamanın var olduğu fakat ilklendirilmediği
çalışma aralığına **Geçici Ölü Bölge (Temporal Dead Zone)** denir:

```js
{
  // console.log(value); // ReferenceError
  let value = 42;
}
```

`typeof` da bu bölgeyi aşmaz:

```js
{
  // console.log(typeof value); // ReferenceError
  let value = 42;
}
```

Buna karşılık hiç bildirilmemiş `neverDeclared` için
`typeof neverDeclared`, sıradan koşullarda `"undefined"` döndürür.

### Ezber yerine yukarı kaldırmayı açıklamak

**Yukarı kaldırma (hoisting)** kaynak kodu taşıyan bir dil standardı işlemi
değil, bildirimlerin ardışık çalıştırmadan önce işlenmesinin gözlemlenebilir
etkileri için kullanılan topluluk kısaltmasıdır:

| Bildirim | Komutlardan önce yaratılır mı? | Bildirim çalışmadan ilklendirilir mi? | Erken okuma |
| --- | --- | --- | --- |
| `var` | Evet | Evet, `undefined` ile | `undefined` |
| `let` | Evet | Hayır | `ReferenceError` |
| `const` | Evet | Hayır | `ReferenceError` |

Fonksiyon bildirimlerinin ve içe aktarmaların ek kuralları vardır. “Bildirimler
üste taşınır” cümlesi tüm biçimleri doğru açıklayamaz.

### Bellek: yararlı soyutlama ve sınırları

Bağlamalar ve değerler program çalışırken bir biçimde temsil edilir, ancak
ECMAScript evrensel yığın/öbek yerleşimi zorunlu kılmaz:

```js
const first = {};
const second = first;

second.active = true;
console.log(first.active); // true
```

İki bağlama aynı nesne kimliğine başvuran değerler taşır. `second` üzerinden
yapılan mutasyon `first` üzerinden gözlemlenir.

Bir motor gözlemlenebilir davranışı koruyarak değerleri yazmaçta tutabilir,
bağlamaları kaldırabilir, ortamları gerektiğinde oluşturabilir, fonksiyonları
satır içine alabilir veya nesneleri taşıyabilir.

**Çöp toplama (garbage collection)** erişilebilirliğe dayanır. Bir bağlamayı
`null`a yeniden atamak yalnızca bir başvuruyu kaldırır; nesnenin erişilemez
olduğunu veya hemen toplanacağını kanıtlamaz.

### Aşamalı Çalışılmış Örnekler

### Örnek 1: Sabit Bir Değeri Adlandırmak

#### Amaç

Başka bir değerle ilişkilendirilmemesi gereken bağlama oluşturmak.

#### Kod

```js
const courseName = "Programming Fundamentals";

console.log(courseName);
```

#### Beklenen çıktı

```text
Programming Fundamentals
```

#### Açıklama

Bildirim `courseName` bağlamasını oluşturur ve ilklendirir. Ders boyunca bu ad
başka bir değerle ilişkilendirilmeyeceği için `const` doğru niyeti gösterir.

### Örnek 2: Bilinçli Değişimi Modellemek

#### Amaç

Zaman içinde değişen değeri temsil etmek.

#### Kod

```js
let completedLessons = 0;

completedLessons = completedLessons + 1;
completedLessons += 1;

console.log(completedLessons);
```

#### Beklenen çıktı

```text
2
```

#### Durum izi

| Adım | İşlem | Önceki değer | Sonraki değer |
| ---: | --- | ---: | ---: |
| 1 | `let completedLessons = 0` | İlklendirilmemiş | 0 |
| 2 | `completedLessons = completedLessons + 1` | 0 | 1 |
| 3 | `completedLessons += 1` | 1 | 2 |

#### Açıklama

İki atama da bağlamanın güncel sayı değerini değiştirir. Yeniden atama modelin
parçası olduğu için `let` uygundur.

### Örnek 3: Birden Fazla Bağlamayı İzlemek

#### Amaç

Bir atamanın başka bağlamaları okuduğu diziyi eksiksiz durum tablosuna
dönüştürmek.

#### Kod

```js
let subtotal = 20;
const shipping = 5;
let total = subtotal + shipping;

subtotal = 25;
total = subtotal + shipping;

console.log({ subtotal, shipping, total });
```

#### Beklenen çıktı

```text
{ subtotal: 25, shipping: 5, total: 30 }
```

#### Durum izi

| Adım | Komut | `subtotal` | `shipping` | `total` |
| ---: | --- | ---: | ---: | ---: |
| 1 | `let subtotal = 20` | 20 | İlklendirilmemiş | İlklendirilmemiş |
| 2 | `const shipping = 5` | 20 | 5 | İlklendirilmemiş |
| 3 | `let total = subtotal + shipping` | 20 | 5 | 25 |
| 4 | `subtotal = 25` | 25 | 5 | 25 |
| 5 | `total = subtotal + shipping` | 25 | 5 | 30 |

#### Açıklama

`subtotal` değiştiğinde `total` kendiliğinden hesaplanmaz. `total` atamasının
yeniden çalışması gerekir. Değişkenler güncel değer taşır; elektronik tablo
formülü gibi otomatik ilişki kurmaz.

### Örnek 4: Yeniden Atama ve Mutasyon

#### Amaç

Sabit bağlamayı değişebilir nesne durumundan ayırmak.

#### Kod

```js
const user = {
  name: "Ada",
  visits: 0,
};

user.visits += 1;

console.log(user);
```

#### Beklenen çıktı

```text
{ name: 'Ada', visits: 1 }
```

Çıktının biçimi çalışma ortamına göre küçük farklılık gösterebilir; `visits`
değeri `1` olur.

#### Açıklama

`user` bağlaması hâlâ aynı nesneye başvurur. `visits` özelliğini güncellemek
nesneyi değiştirir, bağlamayı yeniden atamaz.

#### Ayrı çalışma zamanı hatası

```js
const user = { name: "Ada" };
user = { name: "Grace" };
```

İkinci komut değiştirilemez bağlamayı yeniden atamaya çalıştığı için `TypeError`
üretir.

### Örnek 5: Paylaşılan Nesne Kimliği

#### Amaç

İki bağlamanın aynı nesneye başvurabileceğini göstermek.

#### Kod

```js
const first = { active: false };
const second = first;

second.active = true;

console.log(first.active);
console.log(first === second);
```

#### Beklenen çıktı

```text
true
true
```

#### Açıklama

`first` değerini `second`a atamak nesneyi kopyalamaz. İki bağlama aynı nesne
kimliğine başvurur; biri üzerinden yapılan mutasyon diğeri üzerinden görünür.

### Örnek 6: `let` ve `const` ile Blok Kapsamı

#### Amaç

Geçici durumu ona sahip olan blokla sınırlandırmak.

#### Kod

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

#### Beklenen çıktı

```text
visible
block only
1
visible
```

#### Açıklama

`inside` ve `counter` yalnızca `if` bloğunda erişilebilirdir. `outside`
çevreleyen kapsama aittir.

#### Ayrı çalışma zamanı hatası

```js
if (true) {
  const inside = "block only";
}

console.log(inside);
```

Son okuma `ReferenceError` üretir; o konumdan erişilebilir `inside` bağlaması
yoktur.

### Örnek 7: `var` Sıradan Blok Kapsamlı Değildir

#### Amaç

`var`ı sözlüksel bildirimlerle karşılaştırmak.

#### Kod

```js
function inspectVarScope() {
  if (true) {
    var status = "ready";
  }

  console.log(status);
}

inspectVarScope();
```

#### Beklenen çıktı

```text
ready
```

#### Açıklama

`status` fonksiyonun değişken ortamına aittir. Sıradan `if` bloğu kapsamını
sınırlandırmaz.

### Örnek 8: Gölgelemede En Yakın Bağlama

#### Amaç

Sözlüksel ad çözümlemesini gözlemlemek.

#### Kod

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

#### Beklenen çıktı

```text
block
function
outer
```

#### Açıklama

Her okuma, erişilebilir en yakın `label` bağlamasını çözümler. Aynı tanımlayıcı
yazımına sahip olsalar da bağlamalar farklıdır.

### Örnek 9: `var` İlklendirme Zamanı

#### Amaç

Bağlama ilklendirmesi ile ilklendirici değerlendirmenin farkını gözlemlemek.

#### Kod

```js
console.log(legacyValue);

var legacyValue = 7;

console.log(legacyValue);
```

#### Beklenen çıktı

```text
undefined
7
```

#### Açıklama

`var` bağlaması ardışık komutlardan önce yaratılır ve `undefined` ile
ilklendirilir. `7` değeri ancak değerlendirme bildirime ulaştığında atanır.
Hiçbir kaynak satırı fiziksel olarak taşınmaz.

### Örnek 10: Geçici Ölü Bölge

#### Amaç

İlklendirilmemiş sözlüksel bağlamayı gözlemlemek.

#### Ayrı çalışma zamanı hatası

```js
console.log(modernValue);

let modernValue = 7;
```

#### Beklenen davranış

İlk komut `ReferenceError` üretir. `modernValue` bağlaması vardır, ancak
değerlendirme bildirime ulaşana kadar ilklendirilmemiştir.

#### `typeof` sınırı

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

### Örnek 11: Yeniden Bildirim, Yeniden Atama Değildir

#### Amaç

Sık karıştırılan iki işlemi ayırmak.

#### Çalıştırılabilir yeniden atama

```js
let count = 0;
count = 1;

console.log(count);
```

Beklenen çıktı:

```text
1
```

#### Ayrı sözdizimi hatası

```js
let count = 0;
let count = 1;
```

Aynı kapsamda iki sözlüksel bildirim bulunduğu için kaynak birimi `SyntaxError`
ile ayrıştırılamaz.

#### İzin verilen fakat önerilmeyen tekrarlı `var`

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

### Örnek 12: Koşul İçinde Atama

#### Amaç

Atamanın durumu değiştiren bir ifade olduğunu göstermek.

#### Kod

```js
let isReady = false;

if ((isReady = true)) {
  console.log("Ready branch");
}

console.log(isReady);
```

#### Beklenen çıktı

```text
Ready branch
true
```

#### Açıklama

Atama `true` değerini üretir ve koşul bu değeri kullanır. Kod geçerlidir fakat
çoğu zaman yanlışlıkla yazılır. Karşılaştırma bağlamayı değiştirmez:

```js
if (isReady === true) {
  console.log("Ready branch");
}
```

### Örnek 13: Her Yinelemede Yeni `const` Bağlaması

#### Amaç

Her döngü yinelemesinde yeni sabit bağlama kullanmak.

#### Kod

```js
let total = 0;

for (const price of [4, 6, 10]) {
  total += price;
}

console.log(total);
```

#### Beklenen çıktı

```text
20
```

#### Açıklama

Her yineleme yeni `price` bağlaması alır. Bağlama o yineleme içinde yeniden
atanmaz. `total` değeri değiştiği için `let` kullanır.

### Örnek 14: Beklenen Değişime Göre Seçim

#### Amaç

Tek fonksiyonda farklı durum politikalarını ifade etmek.

#### Kod

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

#### Beklenen çıktı

```text
{ itemCount: 3, subtotal: 25 }
```

#### Açıklama

- `prices` parametresi yeniden atanmaz.
- `itemCount` bir kez hesaplanır.
- `subtotal`, fiyatlar eklendikçe değişir.
- Her `price` yalnızca kendi yinelemesinde kullanılan sabit bağlamadır.

Bildirim tercihleri her bağlamanın planlanan yaşam döngüsünü izler.

### Durum Tablosu Şablonu

Yeni bir diziyi çözümlerken şu biçimi kullanın:

| Adım | Komut | Okunan bağlamalar | Yazılan bağlamalar | Sonraki durum |
| ---: | --- | --- | --- | --- |
| 1 |  |  |  |  |

İlklendirmeyi de durum geçişi olarak kaydedin. Değerlendirme sözdizimi veya
çalışma zamanı hatasıyla durursa hatayı yazın ve sonraki durumu üretmeyin.

### Çalışma Ortamı Notları

- Örnekler gerektiği yerlerde modern ve katı JavaScript davranışını varsayar.
- Tarayıcı klasik betiği, ECMAScript modülü, Node.js CommonJS ve REPL
  gönderimleri üst düzeyde farklı davranabilir.
- Hata sınıfı örnek sözleşmesinin parçasıdır; hata iletisi motorlara göre
  değişebilir.
- Örnekler fiziksel yığın/öbek yerleşimi iddiasında bulunmaz.

### Kaynak Temeli

- [Variables Research Packet](../../../research/programming-fundamentals/variables/research-packet.md)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)



Örnekler altı düşünme düzeyinde ilerler:

1. bir değeri `const` ile adlandırmak;
2. bilinçli değişimi `let` ile modellemek;
3. atama dizisini durum tablosuna dönüştürmek;
4. yeniden atama ile nesne mutasyonunu ayırmak;
5. blok ve fonksiyon kapsamını karşılaştırmak;
6. ilklendirme zamanını ve Geçici Ölü Bölgeyi tahmin etmek.

Çalıştırılabilir örnekler ve beklenen çıktılar
[examples.md](../../../content/programming-fundamentals/variables/examples.md) dosyasındadır. Sözdizimi hatası örnekleri ayrı
tutulur; tek bir hata tüm kaynak biriminin ayrıştırılmasını engeller.

### Durum tablosu nasıl eksiksiz üretilir?

Bir programı yalnız son çıktısından okumak, filmin son karesine bakıp bütün olayları
anladığını sanmaya benzer. **Durum tablosu (State Table)**, her anlamlı adımda binding’lerin
önceki ve sonraki değerlerini görünür kılar. `V01-LO009` için ana başarı kanıtın budur.

Şu kodu çalıştırmadan önce izle:

```js
let balance = 1000;
const fee = 25;
let successfulOperations = 0;

balance = balance - 200;
successfulOperations = successfulOperations + 1;
balance = balance - fee;
successfulOperations = successfulOperations + 1;
```

Önce binding envanteri çıkar:

| Ad | Başlangıç değeri | Değişim niyeti | Bildirim |
|---|---:|---|---|
| `balance` | 1000 | Her başarılı işlemde değişir | `let` |
| `fee` | 25 | Bu çalışma boyunca değişmez | `const` |
| `successfulOperations` | 0 | Sayaçtır | `let` |

Sonra yalnız assignment olan satırları değil, bütün gözlemlenebilir adımları sırala:

| Adım | Çalışan ifade | Önce balance | Önce count | Sonra balance | Sonra count | Invariant |
|---:|---|---:|---:|---:|---:|---|
| 0 | initialization | — | — | 1000 | 0 | balance ≥ 0 |
| 1 | `balance = balance - 200` | 1000 | 0 | 800 | 0 | sağlandı |
| 2 | `count = count + 1` | 800 | 0 | 800 | 1 | sağlandı |
| 3 | `balance = balance - fee` | 800 | 1 | 775 | 1 | sağlandı |
| 4 | `count = count + 1` | 775 | 1 | 775 | 2 | sağlandı |

Tabloyu üretirken şu sırayı uygula:

1. Sağ tarafı mevcut state ile değerlendir.
2. Sonucu geçici olarak yaz.
3. Sol taraftaki binding’i belirle.
4. Assignment izinli mi kontrol et.
5. Yeni değeri binding ile ilişkilendir.
6. Etkilenen invariant’ı kontrol et.
7. Sonraki adıma yalnız güncel state ile geç.

`balance = balance - 200` matematiksel eşitlik değildir. Matematikte bir sayı kendisinden
200 eksik değere eşit olamaz. Assignment instruction’ında sağ taraf eski state üzerinden
hesaplanır, ardından sol binding’in ilişkili değeri değiştirilir. Ok işaretiyle düşünmek
yardımcı olabilir: `balance ← old balance - 200`.

#### Eksik state table belirtileri

- Yalnız değişen binding yazılmış, diğer relevant bindings görünmüyor.
- İlk state yok; ilk operation’ın hangi değerden başladığı bilinmiyor.
- Aynı satırda birden çok assignment birleşmiş.
- Sağ taraf yeni değerle değerlendirilmiş.
- Error üreten adım sanki başarıyla state değiştirmiş gibi yazılmış.
- Object mutation ile binding reassignment aynı sütunda ayrım olmadan gösterilmiş.
- Invariant yalnız final satırda kontrol edilmiş.

Bir state table’ın amacı tablo çizmek değil, yanlış zihinsel modeli yakalamaktır. Tablo
olmadan doğru tahmin ettiğin kısa code’da bile uygulama yap; daha sonra loops, functions ve
shared state geldiğinde aynı disiplin seni debugging sırasında koruyacaktır.

### Bildirim, ilklendirme, atama ve mutasyonun dört ayrı olayı

Bu kelimeler günlük konuşmada birbirinin yerine kullanılsa da code review’da ayrılmalıdır.

```js
let score;        // declaration
score = 10;       // assignment; aynı zamanda ilk meaningful value olabilir
score = 20;       // reassignment

const settings = { theme: "light" }; // declaration + initialization
settings.theme = "dark";             // object mutation
```

**Bildirim (Declaration)** bir adın program modeline tanıtılmasıdır. **İlklendirme
(Initialization)** binding’in ilk value’suyla kurulmasıdır. **Atama (Assignment)** bir
reference’ın gösterdiği hedefe value yazma operation’ıdır. Daha önce değerlenmiş binding’e
yeni value atanırsa **yeniden atama (Reassignment)** olur. Object property’sinin değişmesi
ise binding’i değil object state’ini değiştirir; buna **mutasyon (Mutation)** denir.

Bu ayrım hata mesajını doğru okumayı sağlar. `const settings = ...` sonrasında
`settings = {}` yazmak binding reassignment’dır ve hata verir. `settings.theme = "dark"`
ise aynı object identity üzerinden property mutation’dır ve izinlidir. “const değişmezdir”
cümlesi bu nedenle eksiktir. Doğru cümle: “`const`, binding’in başka bir value ile yeniden
ilişkilendirilmesini engeller; referenced object’i deep immutable yapmaz.”

### Binding modeli neden kutu modelinden daha güçlüdür?

Başlangıçta variable’ı isimli kutu gibi düşünmek yararlıdır: kutuda bir value vardır,
assignment kutunun içeriğini değiştirir. Fakat iki ad aynı object’i gösterdiğinde kutu
analojisi yanıltıcı olur:

```js
const original = { status: "draft" };
const alias = original;

alias.status = "ready";

console.log(original.status); // "ready"
```

İki ayrı binding vardır fakat iki ayrı object yoktur. `alias` üzerinden yapılan mutation,
`original` üzerinden gözlenen object state’ini de etkiler. Bu yüzden üç katmanı ayrı izle:

1. Identifier: `original`, `alias` gibi source name.
2. Binding: name ile current value ilişkisi.
3. Value/object identity: iki binding’in paylaşabileceği runtime value.

State table’da object için identity etiketi kullanabilirsin:

| Adım | original binding | alias binding | Object O1 state |
|---:|---|---|---|
| 0 | O1 | — | `{status: "draft"}` |
| 1 | O1 | O1 | `{status: "draft"}` |
| 2 | O1 | O1 | `{status: "ready"}` |

Binding değerleri değişmedi; O1’in internal state’i değişti. C17–C18’de structured data,
C15’te scope/side effects bu modeli derinleştirecek. Şimdilik amaç aliasing’i çözmek değil,
`const` ve immutability’yi karıştırmamaktır.

### `let`, `const` ve `var` için karar yöntemi

Modern JavaScript’te başlangıç politikası şudur:

1. Binding reassignment gerekmiyorsa `const`.
2. Gerçek state transition nedeniyle reassignment gerekiyorsa `let`.
3. `var`, mevcut/legacy code davranışını anlamak veya özel compatibility gerekçesi dışında
   yeni code’da kullanılmaz.

Bu mekanik “her şeyi const yap” kuralı değildir. Niyet görünürlüğüdür. Bir sayaç gerçekten
ilerleyecekse `let` dürüst seçimdir. Bir configuration binding’i değişmemeliyse `const`
illegal reassignment’ı runtime’da engeller ve reader’ın arama alanını küçültür.

#### Karar tablosu

| Soru | Evet | Hayır |
|---|---|---|
| Binding başka value’ya bağlanacak mı? | `let` adayı | `const` adayı |
| Değişim requirement tarafından gerekli mi? | transition contract yaz | reassignment’ı kaldır |
| Object internal state değişecek mi? | mutation ayrıca incelenir | immutable usage daha açık olabilir |
| Scope gerçekten function-wide mı olmalı? | yine `let/const` ile block design düşün | en dar block |
| Legacy behavior korunuyor mu? | `var` gerekçesi belgelenebilir | `var` kullanma |

ESLint `prefer-const`, hiç reassigned edilmeyen `let` binding’lerini yakalayabilir. `no-var`
modern declarations’ı teşvik eder. Bu rules language semantics değildir; ekip policy’sini
otomatik denetler. Tool “neden bu state değişmeli?” sorusunun cevabını veremez.

### Temporal Dead Zone ve hoisting’i fiziksel taşıma sanma

`let` ve `const` binding’leri block environment kurulurken tanınır; declaration execution’a
ulaşılana kadar initialized değildir. Bu aralık **Geçici Ölü Bölge (Temporal Dead Zone)**
olarak adlandırılır. Bu sırada okumak `ReferenceError` üretir:

```js
console.log(total); // ReferenceError
let total = 0;
```

`var` binding’i ise ilgili variable environment oluşturulurken `undefined` ile initialized
edilir; initializer assignment source sıradaki yerine gelince çalışır:

```js
console.log(total); // undefined
var total = 0;
console.log(total); // 0
```

“Declaration yukarı taşındı” ifadesi yalnız outcome’u hatırlatan teaching shorthand’dır.
Engine’in source line’ları fiziksel olarak taşıdığı veya tek implementation yaptığı anlamına
gelmez. ECMAScript Environment Records ve declaration instantiation algorithms üzerinden
observable behavior tanımlar.

C06’da TDZ’nin bütün scope edge case’lerini öğrenmek zorunda değilsin. Şu engineering
alışkanlığını kazan: binding’i kullanıldığı noktaya yakın bildir, meaningful initial value ile
kur ve pre-initialization okumaya güvenme.

### State, snapshot ve transition

Programın bir andaki ilgili değerler bütününe **durum (State)** denir. State yalnız bir
variable değildir; behavior’ı etkileyen bütün ilgili bindings ve mutable objects birlikte
değerlendirilir. Bir operation state’i S0’dan S1’e götürür. Bu değişime **durum geçişi
(State Transition)** denir.

Bir bank account için state şu olabilir:

```text
S0 = { balance: 1000, status: ACTIVE, withdrawals: 0 }
```

200 birim withdrawal sonrası:

```text
S1 = { balance: 800, status: ACTIVE, withdrawals: 1 }
```

Her transition için dört soru sor:

- Precondition nedir? Account ACTIVE ve amount positive olmalı.
- Hangi state parçaları okunur? balance, status, amount.
- Hangileri değişir? balance ve withdrawals.
- Postcondition/invariant nedir? balance negative olamaz; count bir artar.

Final state doğru görünse bile ara transition invariant’ı bozmuş olabilir. Örneğin önce
balance’ı negative yapıp sonra düzeltmek, arada event veya observer varsa gerçek bug’dır.
State table sequence’i koruduğu için bu hatayı yakalar.

### Mutable state'i azaltmak ne demektir?

Mutable state’i azaltmak “hiç `let` kullanma” veya “her operation’da object kopyala” demek
değildir. Gereksiz değişim noktalarını azaltmak, ownership’i netleştirmek ve aynı gerçeği
birden çok yerde tutmamaktır.

Şu code üç ayrı mutable ara değer kullanıyor:

```js
let basePrice = 100;
let tax = basePrice * 0.20;
let total = basePrice + tax;

tax = tax + 5;
total = basePrice + tax;
```

Requirements “processing fee 5 eklenir” diyorsa daha açık snapshots kullanılabilir:

```js
const basePrice = 100;
const tax = basePrice * 0.20;
const processingFee = 5;
const total = basePrice + tax + processingFee;
```

İkinci tasarımda her name tek anlam taşır; “tax önce neydi?” sorusu kaybolmaz. Fakat gerçek
bir game score veya retry count zaman içinde değişiyorsa mutable state domain’in kendisidir.
Onu gizlemek yerine transition’ı merkezileştir, validate et ve trace et.

#### Gereksiz mutation sinyalleri

- Bir variable farklı aşamalarda farklı anlamlar taşıyor.
- Aynı derived value hem saklanıyor hem tekrar hesaplanabiliyor.
- Binding yalnız bir kez reassigned oluyor ve iki anlamlı snapshot name’i daha açık olurdu.
- Function dışında geniş scope’ta değiştiriliyor.
- Bir değişikliğin sahibi belli değil.
- Update sonrası invariant kontrol edilmiyor.
- AI, kısa code için existing binding’i “boşta” diye tekrar kullanıyor.

### İsimlendirme state modelini nasıl etkiler?

İsim yalnız style değildir; trace doğruluğunu etkiler. `x`, `temp`, `data`, `value2` gibi
names, hangi state’in neden değiştiğini gizler. Name domain noun veya transition sonucunu
taşımalıdır:

```js
let retryCount = 0;
const maximumRetries = 3;
const normalizedEmail = rawEmail.trim().toLowerCase();
```

Boolean name soru gibi okunabilir: `isVerified`, `hasPermission`, `canRetry`. Unit name’de
görünebilir: `timeoutMs`, `distanceKm`, `priceInCents`. `total` yerine `orderTotalInCents`
review sırasında yanlış unit assignment’ını azaltır.

Name type annotation’ın yerine geçmez ve truth garantisi değildir. `age` adlı binding
negative olabilir. Buna rağmen iyi name, invariant ve expected transition’ı görünür yapar.

### AI tarafından üretilen stateful code'u denetlemek

AI’den “bu code’u sadeleştir” istediğinde model mutation ekleyebilir, kaldırabilir veya
operation sırasını değiştirebilir. Görünür final output aynı olsa bile edge behavior farklı
olabilir. Şu audit sırasını kullan:

1. Original binding inventory çıkar.
2. Her binding için owner, initial value, valid range ve change reason yaz.
3. Original state table’ı oluştur.
4. AI version için aynı tabloyu oluştur.
5. Normal, boundary ve invalid inputs’ta transition sequence’i karşılaştır.
6. Invariant ve error behavior aynı mı kontrol et.
7. Yeni shared object mutation veya alias oluşmuş mu ara.
8. Yalnız behavior preserved ise readability trade-off’unu değerlendir.

AI’ye final code istemeden önce şu prompt daha güvenlidir:

```text
Bu kodu yeniden yazma. Önce bütün bindings'i, initialization noktalarını,
reassignment ve object mutations'ı çıkar. Her adım için state table oluştur.
Gereksiz mutation adaylarını ve behavior'ı değiştirebilecek riskleri listele.
Ben ilk refactoring kararımı verdikten sonra alternatif üret.
```

AI bir `let` binding’i `const` yapmayı önerdiğinde yalnız lint rule’a güvenme; bütün control
paths’te reassignment olup olmadığını ve object mutation’ın hâlâ bulunduğunu kontrol et.

### Uçtan uca vaka: sipariş durumunu izlemek

Bir sipariş için aşağıdaki başlangıç kodu verilsin:

```js
const orderId = "ORD-1042";
const maximumPaymentAttempts = 3;
let paymentAttempts = 0;
let paymentStatus = "PENDING";
let remainingAmountInCents = 12500;

paymentAttempts = paymentAttempts + 1;
remainingAmountInCents = remainingAmountInCents - 5000;
paymentStatus = "PARTIALLY_PAID";

paymentAttempts = paymentAttempts + 1;
remainingAmountInCents = remainingAmountInCents - 7500;
paymentStatus = "PAID";
```

İlk iş `let` ve `const` saymak değildir. Domain facts çıkar:

- Order identity değişmez.
- Retry policy bu execution boyunca değişmez.
- Attempt count yalnız gerçek payment denemesinde bir artar.
- Remaining amount 0’ın altına inmemelidir.
- Status ve amount tutarlı olmalıdır: amount 0 ise PAID; positive ise PENDING veya
  PARTIALLY_PAID policy’sine uymalıdır.

State table:

| Step | Operation | Attempts before→after | Amount before→after | Status before→after | Invariants |
|---:|---|---|---|---|---|
| 0 | initialize | —→0 | —→12500 | —→PENDING | pass |
| 1 | attempt +1 | 0→1 | 12500→12500 | PENDING→PENDING | pass |
| 2 | payment 5000 | 1→1 | 12500→7500 | PENDING→PENDING | status pending review |
| 3 | status update | 1→1 | 7500→7500 | PENDING→PARTIALLY_PAID | pass |
| 4 | attempt +1 | 1→2 | 7500→7500 | PARTIALLY_PAID→PARTIALLY_PAID | pass |
| 5 | payment 7500 | 2→2 | 7500→0 | PARTIALLY_PAID→PARTIALLY_PAID | temporary mismatch |
| 6 | status update | 2→2 | 0→0 | PARTIALLY_PAID→PAID | pass |

Adım 2 ve 5’in “temporary mismatch” üretmesi önemli design sorusudur. Tek-threaded küçük
örnekte iki assignment arka arkaya gelir. Gerçek sistemde arada error, log, event veya
observer çalışırsa inconsistent state gözlemlenebilir. İleride structured update veya
function boundary ile amount/status transition’ı tek sorumlulukta ele alacaksın.

Şimdi bug ekleyelim:

```js
paymentAttempts = paymentAttempts + 1;
remainingAmountInCents = remainingAmountInCents - 8000;
paymentStatus = "PAID";
```

Remaining amount 7500 iken 8000 çıkarmak `-500` üretir. JavaScript assignment’ı teknik
olarak yapabilir; type Number’dır. Fakat domain invariant bozulur. C05’in “type business
validity değildir” ilkesi burada canlıdır. Transition’dan önce amount range validate edilir.

#### Daha az mutable state alternatifi

`paymentStatus`, remaining amount’dan tamamen türetilebiliyorsa ayrı mutable source of truth
olması gereksiz olabilir:

```js
const paymentStatus = remainingAmountInCents === 0
  ? "PAID"
  : remainingAmountInCents < originalAmountInCents
    ? "PARTIALLY_PAID"
    : "PENDING";
```

Nested expression ayrıntısı C07’de işlenecek. Buradaki fikir: derived state saklanırsa ana
state ile senkron dışı kalabilir. Fakat status her zaman amount’dan türetilemiyorsa — örneğin
REVIEW, FAILED veya REFUNDED state’leri varsa — ayrı domain state gereklidir. Mutation’ı
azaltma kararı requirements’a dayanır.

### Debugging için state-first yaklaşım

Bir program yanlış sonuç verdiğinde hemen code’u değiştirmek yerine şu kanıt zincirini kur:

1. Beklenen initial state’i yaz.
2. Gerçek initial state’i log veya debugger ile gözle.
3. İlk sapmanın olduğu assignment’ı bul.
4. Sağ tarafın hangi eski values ile değerlendirildiğini kaydet.
5. Binding reassignment mı object mutation mı sınıflandır.
6. Invariant ilk hangi adımda bozuldu belirle.
7. Semptomu değil ilk yanlış transition’ı düzelt.

Örnek bug:

```js
let availableSeats = 10;
let reservedSeats = 0;

reservedSeats = reservedSeats + 3;
availableSeats = availableSeats - reservedSeats;

reservedSeats = reservedSeats + 2;
availableSeats = availableSeats - reservedSeats;
```

İkinci update’te yalnız yeni reservation 2 düşülmesi gerekirken cumulative reservedSeats 5
düşülür. Final values’a bakınca arithmetic bug gibi görünür. State table ilk operation’da
`available=7, reserved=3`, ikinci reservation sonrası `reserved=5`, ardından
`available=2` gösterir. İlk yanlış transition son satırdır; right-hand operand yanlış state
meaning taşımaktadır. `newlyReservedSeats` gibi ayrı snapshot name hatayı görünür yapar.

Debugger bir araçtır; state modelinin yerine geçmez. Breakpoint’te yüz variable görmek,
hangilerinin relevant ve hangi invariant’ın bozuk olduğunu söylemez. Önceden beklenen state
table yazarsan debugger gerçek–beklenen karşılaştırma aracına dönüşür.

### Scope ve lifetime için şimdilik bilmen gereken sınır

**Kapsam (Scope)** bir identifier’ın code’un hangi bölgesinde çözümlenebildiğini,
**yaşam süresi (Lifetime)** binding/value’ın execution boyunca ne zaman var veya reachable
olduğunu anlatır. Tam konu C15’tedir; C06 için iki sezgi yeterlidir:

- State’i ihtiyaç duyduğu en dar block/function içinde tutmak, değiştirebilecek code alanını
  küçültür.
- Bir name görünmüyor diye underlying object kesin yok olmuş veya memory hemen geri alınmış
  denemez; başka references bulunabilir ve GC timing garanti edilmez.

Global mutable state birçok code parçasının aynı gerçeği değiştirebilmesine yol açar. Beginner
programda bile configuration ve accumulator’ı gereksiz global yapmak trace’i zorlaştırır.
Scope ayrıntısını öğrenmeden şu policy’yi kullan: binding’i ilk meaningful kullanıma yakın,
gereken en dar block’ta ve explicit initializer ile kur.

### State review pratiği: bir pull request nasıl okunur?

Profesyonel çalışma hayatında yalnız kendi yazdığın code’u değil, ekip arkadaşının veya AI
aracının ürettiği değişikliği de inceleyeceksin. Bir pull request’te yeni bir variable
gördüğünde önce syntax’a değil state ownership’e bak.

#### 1. Yeni state gerçekten gerekli mi?

Yeni binding, mevcut değerlerden ucuz ve güvenilir biçimde türetilebiliyorsa ikinci source of
truth yaratabilir. Örneğin `items.length` her zaman erişilebiliyorken ayrıca mutable
`itemCount` saklamak iki value’nun senkron dışı kalmasına yol açabilir. Ancak hesap pahalıysa,
snapshot/audit gerekiyorsa veya source daha sonra yok olacaksa derived value saklamak
savunulabilir. Reviewer gerekçeyi arar.

#### 2. State'in sahibi kim?

Bir binding’i kaç function veya module değiştirebilir? Değişim noktaları dağınıksa behavior’ı
anlamak için bütün repository’yi aramak gerekir. Owner belirli bir operation veya küçük
boundary ise transition daha kolay test edilir. C06’da module design yapmıyoruz; fakat name’in
nerelerde assignment aldığını arama alışkanlığı kazanıyoruz.

#### 3. Initialization bütün paths'te açık mı?

Condition’a bağlı initialization beginner bug’larının kaynağıdır:

```js
let shippingCost;

if (isDomestic) {
  shippingCost = 50;
}

console.log(shippingCost); // Bazı paths'te undefined
```

Çözüm otomatik olarak `let shippingCost = 0` değildir; 0 gerçek business meaning taşıyabilir
ve bug’ı gizler. Domestic olmayan shipment için cost nasıl hesaplanacak? Operation reject mi
edilecek? Requirement doğru initializer veya explicit absence modelini belirlemelidir.

#### 4. Transition atomik bir domain kararı mı?

Birbirine bağlı iki binding ayrı ayrı değişiyorsa arada inconsistent state oluşabilir.
`balance` ve `status`, `stock` ve `isAvailable`, `attempts` ve `locked` örneklerinde reviewer
transition’ın tek bir contract altında ele alınıp alınmadığını sorar. Küçük script’te ardışık
satırlar yeterli olabilir; event/concurrency bulunan sistemlerde farklı mekanizmalar gerekir.
Burada yalnız riski adlandırıyoruz.

#### 5. Error path state'i nasıl bırakıyor?

Şu pattern yarım update üretebilir:

```js
balance = balance - amount;

if (balance < 0) {
  throw new Error("Yetersiz bakiye");
}
```

Error atıldığında balance çoktan değişmiştir. Daha güvenli sıra, candidate next state’i
hesaplamak, validate etmek ve yalnız valid ise commit etmektir:

```js
const nextBalance = balance - amount;

if (nextBalance < 0) {
  throw new Error("Yetersiz bakiye");
}

balance = nextBalance;
```

Bu yapı `nextBalance` için `const`, gerçek persistent state transition için `let` kullanır.
Bir ara snapshot eklenmiştir fakat mutable authority artmamıştır.

#### 6. Name zaman içinde anlam değiştiriyor mu?

`data` önce raw input, sonra parsed number, sonra formatted String oluyorsa debugger’da hangi
state’in bulunduğunu anlamak zordur. `rawAmount`, `parsedAmountInCents`, `formattedAmount`
names hem type/meaning hem timeline’ı açıklar. Daha fazla binding bazen daha az mental load
demektir; amaç en az variable sayısı değil, en az belirsiz mutable state’tir.

#### 7. Review evidence nedir?

Yazar şu kanıtları sağlayabilmelidir:

- before/after state table,
- değişen ve değişmeyen bindings listesi,
- invariant’lar,
- normal/boundary/invalid tests,
- `const`/`let` decision rationale,
- behavior-preserving karşılaştırma,
- AI kullanıldıysa independent audit notu.

“Code daha temiz görünüyor” tek başına evidence değildir. State transition sayısı azalmış
olabilir fakat error behavior değişmiş olabilir. Reviewer aesthetics ile behavior’ı ayırır.

### Bu chapter için kişisel not sistemi

Kendi notuna chapter’ı kopyalamak yerine dört kalıcı şablon ekle:

1. Binding inventory: name, meaning, initial value, owner, change reason.
2. State table: step, operation, before, after, invariant.
3. Mutation map: reassignment, property mutation, shared identity.
4. Decision record: const/let choice, rejected alternative, test evidence.

Sonra kitabı kapatıp `x = x + 1` ifadesini declaration, binding, old value, operation, new
value ve state transition kelimeleriyle 90 saniyede açıkla. `const object` örneğini de binding
ve identity tablosuyla yeniden üret. Bu iki anlatım rahat değilse code örneğini yeniden
okumak yerine boş state table’ı kendin doldur.

## Engineering Perspective

### İstek kimliği

```js
const requestId = createRequestId();
```

Kimlik işlem boyunca aynı istekle ilişkili kalmalıdır. Sabit bağlama bu değişmezi
ifade eder.

### Yeniden deneme sayacı

```js
let retriesUsed = 0;

while (retriesUsed < 3) {
  retriesUsed += 1;
}
```

Sayaç bilinçli durum geçişlerini temsil eder; değişebilir bağlama uygundur.

### Uygulama yapılandırması

```js
const config = loadConfig();
```

Bağlama sabit kalabilir; yapılandırma nesnesinin mutasyon politikası ayrıca
belirlenir. `const` tek başına nesne değiştirilemezliği sağlamaz.

### Çalışan toplam

```js
let total = 0;

for (const price of [12, 8, 5]) {
  total += price;
}
```

`total` işlem ilerledikçe değişir. Her `price`, kendi yinelemesinde yeniden
atanmayan yeni bir bağlamadır.

### Paylaşılan önbellek

```js
const cache = new Map();
cache.set("profile:42", { name: "Ada" });
```

Bağlama sabit, koleksiyon değişebilirdir. Mühendislik soruları yalnızca anahtar
sözcükle değil mutasyon sahipliği, geçersizleştirme, yaşam süresi ve bellek
tutulmasıyla ilgilidir.

### Modül düzeyinde durum

Modül kapsamı bir adı örtük tarayıcı globalinden korur. Ancak değişebilir modül
durumu yine tüm içe aktaranları ortak davranışa bağlayabilir. Kapsam görünürlüğü
daraltır; güvenli sahipliği kendiliğinden kurmaz.

Güçlü bir junior açıklaması:

- değişkeni yalnızca “kutu” değil, duruma verilen adlı bağlama olarak tanımlar;
- bildirim, ilklendirme, yeniden atama ve mutasyonu ayırır;
- `const`un derin nesne mutasyonunu değil bağlama yeniden atamasını engellediğini
  açıklar;
- `var`, `let`, `const`u kapsam ve ilklendirme zamanı üzerinden karşılaştırır;
- Geçici Ölü Bölgeyi var olan fakat ilklendirilmemiş bağlama olarak açıklar;
- yukarı kaldırmayı ancak doğru oluşturma/ilklendirme açıklamasından sonra
  kısaltma olarak kullanır;
- yeniden bildirimle mevcut bağlamayı güncellemeyi ayırır;
- üst düzey betik ve modül davranışının aynı olmadığını bilir;
- evrensel yığın/öbek ve anahtar sözcük performans iddialarından kaçınır;
- kuralı söylemeden önce kod sonucunu tahmin eder.

Davranış klasik betiğe, modüle, tarayıcıya, Node.js'e veya belirli motora
bağlıysa bu sınır açıkça belirtilmelidir.

## Real World Examples

Ayrıntılı üretim sözleşmeleri
[visualization-notes.md](../../../content/programming-fundamentals/variables/visualization-notes.md) dosyasındadır.

Önerilen sıra:

1. **Bağlama anatomisi:** tanımlayıcı → bağlama → güncel değer.
2. **Durum zaman çizelgesi:** aynı bağlama `0`, `1`, `2` değerlerine geçer.
3. **Bağlama ve nesne grafiği:** sabit `const` bağlamasının işaret ettiği
   nesnenin özelliği değişir.
4. **Bildirim yaşam döngüsü:** `var`ın erken `undefined` ilklendirmesi ile
   `let`/`const`un ilklendirilmemiş yolu karşılaştırılır.
5. **İç içe kapsam:** ad araması en yakın bağlamayı seçer.

Her görsel bunun motor belleği değil soyut dil modeli olduğunu belirtmeli,
animasyonlar statik alternatif ve eşdeğer metin içermelidir.

## Common Mistakes

### Nesne özellikleri değiştiği için `let` seçmek

Yanlış model: “Nesne değişiyor, o hâlde değişken `let` olmalı.”

```js
const cart = { total: 0 };
cart.total = 25;
```

`cart` bağlaması yeniden atanmadı. Yalnızca bağlama başka bir değer tutacaksa
`let` seçin.

### `const`un veriyi derinden değiştirilemez yaptığını sanmak

`const` bağlamanın yeniden atanmasını engeller. Nesne değiştirilemezliği ayrı
bir tasarım ve gerekirse ayrı mekanizmalar ister. `Object.freeze` bile iç içe
nesneler ayrıca ele alınmadıkça yüzeyseldir.

### `var`ın sıradan bloğa uymasını beklemek

Her süslü parantez her bildirimi kapsamaz. Sıradan bloklar sözlüksel
bildirimleri kapsar, `var`ı değil.

### Sözlüksel bağlamayı ilklendirmeden okumak

Daha sonra yazılan `let` veya `const`, `var` gibi erken `undefined` üretmez.
İlklendirilmemiş bağlamanın okunması `ReferenceError` üretir.

### Yukarı kaldırmayı kaynak satırı taşınması olarak anlatmak

Dil standardı farklı bildirimleri farklı zamanlarda yaratır ve ilklendirir.
Kaynak satırlarının taşındığını söylemek yerine bu aşamaları açıklayın.

### Yeniden bildirimle yeniden atamayı karıştırmak

Atama mevcut bağlamayı günceller. Aynı kapsamda ikinci sözlüksel bildirim erken
sözdizimi hatasıdır.

### Yanlışlıkla global durum oluşturmak

Katı kodda çözümlenemeyen ada atama `ReferenceError` üretir. Eski gevşek betik
davranışı global bağımlılık oluşturabilir. Bağlamaları açıkça bildirin.

### Yanlışlıkla gölgeleme

Metinsel olarak en yakın satır değil, iç içe sözlüksel ortamlar ad çözümlemesini
belirler. İç bildirim, Geçici Ölü Bölgesi dâhil olmak üzere dış adı gölgeler.

### Karşılaştırma yerine atama kullanmak

```js
let ready = false;

if ((ready = true)) {
  console.log("Atama true ürettiği için bu dal çalışır.");
}
```

Atama durumu değiştirir ve atanan değeri üretir. Amaç sınamaksa karşılaştırma
kullanın.

## Best Practices

### Varsayılan olarak `const`, bilinçli yeniden atama için `let`

```js
const requestId = "req-42";
let retryCount = 0;
```

Bu bir bakım önerisidir; `const`un her zaman daha hızlı olduğu iddiası değildir.

### Yeni uygulama kodunda `var`dan kaçının

`var` geçerli JavaScript'tir. Ancak fonksiyon kapsamı, erken ilklendirme,
tekrarlı bildirim ve klasik betik global davranışlarına ihtiyaç yoksa `let` veya
`const` daha açık niyet gösterir.

### En dar yararlı kapsamı kullanın

Bağlamayı ona sahip olan işe yakın tutun. Dar kapsam, olası okuma, yazma ve ad
çakışmalarını azaltır.

### Bildirime yakın ilklendirin

İlklendirilmemiş durumun alan anlamı yoksa hemen ilklendirin. Böylece okuyucunun
düşünmesi gereken durum sayısı azalır.

### Depolamayı değil alan gerçeğini adlandırın

`temp` veya `data2` yerine `remainingAttempts`, `invoiceTotal` ve
`isAuthenticated` gibi anlamlı adlar seçin.

### Durum geçişlerini görünür yapın

Değer değişiyorsa güncellemeyi bulmak ve açıklamak kolay olmalıdır. Az sayıdaki
bilinçli mutasyon noktası, programa dağılmış sınırsız güncellemeden kolay test
edilir.

### Bağlama sabitliği ile nesne değiştirilemezliğini ayırın

Bağlamanın değişip değişemeyeceğini ve işaret edilen nesnenin mutasyon
politikasını ayrı ayrı belgeleyin.

### Takım politikasını araçlarla uygulayın

ESLint'in `no-var`, `prefer-const`, `no-shadow`, `no-undef` ve
`no-cond-assign` kuralları takım politikasını otomatikleştirebilir; dil
semantiğini değiştirmez.

### Performans iddialarını ölçün

Bildirim biçimini doğruluk ve niyet için seçin. Performans önemliyse anahtar
sözcük mikro testleri yerine desteklenen ortamlarda temsilî iş yüklerini ölçün.

## Hands-on Exercise

Bir dijital cüzdanın şu işlem dizisini incele:

```js
const accountId = "ACC-007";
const dailyLimitInCents = 50000;
let balanceInCents = 30000;
let spentTodayInCents = 0;
let successfulTransactions = 0;
let status = "ACTIVE";

balanceInCents = balanceInCents + 20000;
balanceInCents = balanceInCents - 15000;
spentTodayInCents = spentTodayInCents + 15000;
successfulTransactions = successfulTransactions + 1;
status = "REVIEW";
balanceInCents = balanceInCents - 40000;
spentTodayInCents = spentTodayInCents + 40000;
```

### Teslimler

1. Altı binding için name, initial value, type, declaration form, change owner ve invariant
   içeren inventory oluştur.
2. Her assignment’ı ayrı satırda gösteren eksiksiz state table üret.
3. Daily limit ve non-negative balance invariants’ın ilk bozulduğu adımı işaretle.
4. Her binding için `const` veya mutable variable seçimini requirement ile gerekçelendir.
5. En az iki unnecessary mutation veya duplicated state adayı bul.
6. Original behavior ile güvenli behavior arasındaki farkı normal, boundary ve invalid
   case’lerde göster.
7. AI’den çözüm istemeden önce kendi repair plan’ını yaz. Sonra AI’ye yalnız counterexample
   ürettir ve önerilerini audit tablosunda kabul/reddet.

### Başarı ölçütü

- Initial state ve bütün yedi transition görünürdür.
- Sağ taraflar önceki state ile değerlendirilmiştir.
- Error/invalid transition state’i sessizce değiştirmiş sayılmaz.
- `accountId` ve `dailyLimitInCents` için reassignment ihtiyacı uydurulmaz.
- `const` ile object immutability karıştırılmaz.
- En az bir design alternative behavior-preserving trace ile savunulur.

## Reflection Questions

1. Hangi binding'in değişmesi gerektiğini yalnız syntax'a bakmadan nasıl savunursun?
2. const ile value immutability arasındaki fark hangi hatanı önler?
3. Bir state table hangi gizli assignment'ı görünür yaptı?
4. AI tarafından üretilen stateful kodu hangi invariant ve trace ile denetlersin?

## Chapter Summary

Programlar, işlem dizisi boyunca güncel gerçekleri hatırlamak için duruma ihtiyaç
duyar. Değişken bir ada bağlama sağlar; bağlama güncel değerle ilişkilidir.
Atama bu değeri kurabilir veya değiştirebilir ve gözlemlenebilir durum geçişi
oluşturur.

JavaScript'te `let` değişebilir, `const` değiştirilemez sözlüksel bağlama
oluşturur. `const` hemen ilklendirilmelidir. `var`, fonksiyon veya
değişken-ortamı kapsamına sahip değişebilir bağlama oluşturur ve ardışık
komutlardan önce `undefined` ile ilklendirilir.

`let` ve `const` bağlamaları bildirim çalışmadan önce yaratılır, ancak
ilklendirilmez. Bu aralıkta okumak `ReferenceError` üretir. Yukarı kaldırma bu
bildirim işleme etkileri için kısaltmadır; kaynak satırları fiziksel olarak
taşınmaz.

Kapsam adların erişilebilir olduğu yeri belirler. Dar blok ve modül kapsamı,
global duruma göre akıl yürütmeyi kolaylaştırır. Gölgelemede en yakın aynı adlı
bağlama kazanır.

Bağlama yeniden ataması ile nesne mutasyonu farklıdır. `const` tüm nesne
grafiğini değil bağlamayı sabitler. Modern JavaScript bu nedenle değişmeyecek
bağlamalarda `const`, bilinçli yeniden atamada `let` kullanır; özel semantiği
gerekmiyorsa `var`dan kaçınır.

## Key Takeaways

- Değişken, program durumuna verilen adlı bağlamadır.
- Tanımlayıcı, bağlama, güncel değer ve işaret edilen nesne farklıdır.
- Durum tablosu atama dizilerini görünür ve sınanabilir yapar.
- Yeniden bağlama planlanmıyorsa `const` kullanın.
- Yeniden atama tasarımın parçasıysa `let` kullanın.
- `const` bir nesneyi derinden değiştirilemez yapmaz.
- Sıradan bloklar `let` ve `const`u kapsar, sıradan `var`ı kapsamaz.
- Geçici Ölü Bölge, sözlüksel bağlamanın var ama ilklendirilmemiş olmasıdır.
- Yukarı kaldırma kaynak kodun taşındığı anlamına gelmez.
- Yeniden bildirim ve yeniden atama farklı işlemlerdir.
- Dar kapsam ve açık durum sahipliği bakımı kolaylaştırır.
- JavaScript evrensel yığın/öbek konumu veya anahtar sözcük hız sırası
  garanti etmez.

Sonraki bölüm, adlandırılmış değerleri operatörler ve ifadelerle birleştirebilir.
İlerlemeden önce:

- her komuttan sonra tüm bağlamaların değerini izleyebildiğinizden;
- `const` veya `let` seçimini beklenen yeniden atamayla gerekçelendirdiğinizden;
- işlemin bağlamayı mı nesneyi mi değiştirdiğini belirlediğinizden;
- adın kapsam içinde olup olmadığını tahmin ettiğinizden;
- erken okumayı “kod taşındı” demeden ilklendirme zamanıyla
  açıkladığınızdan emin olun.

Bu beceriler, ifadeleri tekil hesaplardan kontrollü durum geçişlerine dönüştürür.

Kaynak temeli:
[Variables Research Packet](../../../research/programming-fundamentals/variables/research-packet.md),
ECMA-262 ve pakette listelenen destekleyici araştırma belgeleri.

## Further Reading

- ECMAScript Environment Records ve Statements and Declarations bölümleri.
- MDN let, const, var ve JavaScript Language Overview.
- ESLint no-var, prefer-const, no-undef ve no-shadow.
- CS2023 Software Development Fundamentals ve Foundations of Programming Languages.

## References

- [ECMAScript 2026: Executable Code and Execution Contexts](https://tc39.es/ecma262/2026/multipage/executable-code-and-execution-contexts.html)
- [ECMAScript 2026: Statements and Declarations](https://tc39.es/ecma262/2026/multipage/ecmascript-language-statements-and-declarations.html)
- [MDN JavaScript Language Overview](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Language_overview)
- [MDN let](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/let)
- [MDN const](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/const)
- [MDN var](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/var)
- [ESLint no-var](https://eslint.org/docs/latest/rules/no-var)
- [ESLint prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
- [Computer Science Curricula 2023](https://csed.acm.org/)
