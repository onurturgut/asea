---
document_type: "chapter"
chapter_id: "V01-C21"
volume_id: "V01"
title: "Arama Algoritmaları"
slug: "arama-algoritmalari"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "8-10 saat"
prerequisites:
  - "V01-C10"
  - "V01-C11"
  - "V01-C17"
  - "V01-C31"
learning_outcomes:
  - "V01-LO032"
  - "V01-LO033"
related_lab_ids:
  - "V01-C21-L01"
related_assessment_ids:
  - "V01-C21-AS01"
next_chapter_id: "V01-C22"
blueprint_id: "V01-C21-BP01"
last_updated: "2026-07-29"
---

# Arama Algoritmaları

## Learning Objectives

Bu chapter bittiğinde aramayı “hazır bir metot çağırmak” olarak değil, açık bir
problem çözme süreci olarak göreceksiniz. `V01-LO032` ve `V01-LO033`
yeterliklerini şu kanıtlarla göstereceksiniz:

- Doğrusal arama (linear search) ve ikili aramanın (binary search) her adımını
  elle izleyebileceksiniz.
- `target`, `index`, `low`, `high` ve `middle` değişkenlerinin o anda neyi temsil
  ettiğini kendi cümlelerinizle açıklayabileceksiniz.
- Aranan değer bulunmadığında neden `-1` döndürüldüğünü yorumlayabileceksiniz.
- İkili aramanın neden sıralı girdi (sorted input) istediğini bir karşı örnekle
  gösterebileceksiniz.
- Verinin sıralı olup olmamasına, arama sayısına ve değişim biçimine bakarak
  uygun stratejiyi seçebileceksiniz.
- Normal, sınır ve bulunamadı durumlarını test ederek algoritmanın sözleşmesini
  savunabileceksiniz.

Bu bölümde karşılaştırma sayısını görünür hâle getireceğiz; ancak büyüme
karmaşıklığının resmî gösterimi C23’ün konusudur. C22’de ise sıralamanın nasıl
üretildiğini öğreneceksiniz. Burada sıralı veri bize verilmiş bir sözleşmedir.

## Prerequisites

C10’da koşulların programın yolunu nasıl değiştirdiğini, C11’de döngünün aynı
işi kontrollü biçimde nasıl tekrarladığını, C17’de array ve index ilişkisini
öğrendiniz. C20’de ham ders başlıklarını karşılaştırılabilir metinlere
dönüştürdünüz. Şimdi o başlıkların içinde belirli bir başlığı bulacağız.

Kanonik müfredat C31’i de ön koşul olarak gösterir. C31 henüz sayısal üretim
sırasında yazılmadığı için bu chapter `map`, `filter` ve `reduce` bilgisi
varsaymaz. Bölüm çalışır ve değerlendirilebilir; fakat Stable inceleme kapısı,
C31 kanıtıyla daha sonra tamamlanacaktır.

Hazırlık kontrolü:

```js
const chapterTitles = [
  "fonksiyonlar",
  "stringler ve metin işleme",
  "algoritmalar",
];
```

1. `"algoritmalar"` değerinin index’i kaçtır?
2. `chapterTitles.length` kaçtır ve son geçerli index nedir?
3. Bir döngü ilk elemandan son elemana nasıl ilerler?
4. İki string’in eşitliğini hangi operatörle kontrol edersiniz?
5. Aranan değer yoksa geçerli bir index döndürmek neden tehlikelidir?

Yanıtlarınız sırasıyla `2`, `3`, `2`, `===` ve “olmayan bir kaydı varmış gibi
göstereceği için” düşüncesine yaklaşıyorsa hazırsınız.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Problem ve doğrusal arama zihinsel modeli | 75 dakika |
| Kodun satır satır yürütülmesi | 90 dakika |
| İkili arama ve aralık değişmezi | 2 saat |
| Karşılaştırma, hata avı ve test | 90 dakika |
| Quiz, lab ve bağımsız uygulama | 2-3 saat |

Tek oturumda bitirmek zorunda değilsiniz. İkili arama izini kâğıt üzerinde
doğru kuramıyorsanız videoya veya çözüme dönmeden önce beş dakikalık ara verip
`low`, `high`, `middle` tablosunu yeniden oluşturun.

## Introduction

ASEA’da ders arama kutusuna “algoritmalar” yazdığınızı düşünün. Ekranda yüzlerce
chapter olabilir. Bilgisayarın gözleri yoktur; başlıkları bir bakışta seçemez.
Ona hangi sırayla bakacağını, ne zaman duracağını ve bulamadığında ne
söyleyeceğini tarif etmemiz gerekir.

Önce en doğal yöntemi deneyelim. Bir kitaplığın önünde durup soldan sağa her
kitabın sırtını okursunuz. İlk kitap aradığınız kitap değilse ikinciye, sonra
üçüncüye geçersiniz. Bulduğunuz anda durursunuz. Rafın sonuna gelip hâlâ
bulamadıysanız kitabın rafta olmadığını söylersiniz. Bu, doğrusal aramanın
sezgisel modelidir.

Peki telefon rehberi gibi alfabetik sıralı bir kaynakta yine ilk sayfadan mı
başlarsınız? Genellikle ortalara bakar, aradığınız soyadının daha önce mi sonra
mı olduğunu değerlendirir ve olamayacak sayfaların yarısını elersiniz. Bu da
ikili aramanın temel fikridir. Gücü “ortaya bakmak”tan değil, verinin sıralı
olduğu bilgisine güvenerek bir yarıyı güvenle elemekten gelir.

Tahmin edin: 128 sıralı değerde hedef yoksa doğrusal arama en kötü durumda kaç
değere bakar? İkili arama yaklaşık kaç kez aralığı yarıya indirir? Şimdilik
yanıtı ezberlemeyin; izlerken karşılaştırmaları sayacağız.

## Core Concepts

Arama (search), bir koleksiyon içinde hedef değerin bulunup bulunmadığını ve
çoğu zaman nerede bulunduğunu belirleme işlemidir. Hedef (target), bulmaya
çalıştığımız değerdir. Sonuç olarak değerin kendisini, index’ini, bir boolean
değeri veya bir kayıt nesnesini döndürebiliriz. Bu bölümde sözleşmemiz index
döndürmektir.

### Birlikte yapalım: doğrusal arama

```js
function linearSearch(values, target) {
  for (let index = 0; index < values.length; index += 1) {
    const currentValue = values[index];

    if (currentValue === target) {
      return index;
    }
  }

  return -1;
}
```

`values`, içinde arama yaptığımız array’dir. Çoğul isim seçmemiz bilinçlidir:
değişken tek değer değil, bir değerler koleksiyonu taşır. `target`, aranan tek
değerdir. Örneğimizde array string taşıyorsa target da karşılaştırılabilir bir
string olmalıdır.

`index` bir number’dır ve `0` ile başlar; çünkü JavaScript array’lerinde ilk
konumun index’i sıfırdır. Her turda değişeceği için `let` kullanılır.
`index < values.length` koşulu son geçerli index’ten sonra durmamızı sağlar.
`<=` yazsaydık bir adım fazla ilerler, array dışında `undefined` okurduk.

`currentValue`, o turda incelenen değerdir. Bir sonraki turda yeni bir
`currentValue` oluşturulur; aynı tur içinde yeniden atanmadığı için `const`
kullanılır. Bu değişken zorunlu değildir, fakat `values[index]` ifadesinin
anlamını isimlendirerek izi okunabilir yapar.

Eşleşme olduğunda `return index` yalnızca `if` bloğunu değil, fonksiyonun
tamamını bitirir. Eşleşme olmadan döngü biterse `return -1` çalışır. Geçerli
index’ler sıfır veya daha büyük olduğu için `-1`, “bulunamadı” durumunu geçerli
konumlardan ayıran bir işarettir.

```js
const titles = [
  "fonksiyonlar",
  "stringler ve metin işleme",
  "algoritmalar",
  "veri modelleme",
];

const resultIndex = linearSearch(titles, "algoritmalar");
console.log(resultIndex); // 2
```

Çalışma izi:

| Tur | `index` | `currentValue` | `target` | Eşit mi? | Sonuç |
|---:|---:|---|---|---|---|
| 1 | 0 | `"fonksiyonlar"` | `"algoritmalar"` | Hayır | Devam |
| 2 | 1 | `"stringler ve metin işleme"` | `"algoritmalar"` | Hayır | Devam |
| 3 | 2 | `"algoritmalar"` | `"algoritmalar"` | Evet | `2` dön |

Döngü değişmezi (loop invariant) şu cümledir: Her turun başında, target daha
önce incelenmiş `0` ile `index - 1` arasındaki konumlarda yoktur. Bu cümle
başlangıçta doğrudur; henüz hiçbir konum incelenmemiştir. Her başarısız
karşılaştırma cümleyi bir sonraki index için doğru tutar. Döngü bittiğinde tüm
geçerli konumlar incelenmiştir; bu yüzden `-1` sonucu gerekçelidir.

Anlama kontrolü: target ilk elemandaysa kaç karşılaştırma yapılır? Array boşsa
döngü neden hiç çalışmaz? Target iki kez geçiyorsa hangi index döner?
Yanıtlar: bir; `0 < 0` yanlış olduğu için sıfır; ilk eşleşmenin index’i.

### Tahmin et: bulunamayan değer

Aşağıdaki çağrıyı çalıştırmadan önce sonucu ve karşılaştırma sayısını yazın:

```js
linearSearch([8, 17, 20, 21], 15);
```

Dört değer de sırayla incelenir. Hiçbiri `15` olmadığı için sonuç `-1`, toplam
karşılaştırma sayısı `4` olur. `-1` değerini doğrudan array index’i gibi
kullanmak hatadır; önce sonucu kontrol etmeliyiz:

```js
const foundIndex = linearSearch([8, 17, 20, 21], 15);

if (foundIndex === -1) {
  console.log("Chapter bulunamadı.");
} else {
  console.log(`Chapter ${foundIndex}. konumda.`);
}
```

### İkili arama: aralığı koruyarak küçültmek

İkili arama yalnızca kullanılan karşılaştırmaya göre sıralı bir koleksiyonda
doğru çalışır. Sayılar küçükten büyüğe sıralıysa hedefi ortadaki sayıyla
karşılaştırabiliriz.

```js
function binarySearch(sortedValues, target) {
  let low = 0;
  let high = sortedValues.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const middleValue = sortedValues[middle];

    if (middleValue === target) {
      return middle;
    }

    if (middleValue < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return -1;
}
```

`sortedValues` adı bir vaat taşır: array sıralıdır. JavaScript bu ismi okuyup
veriyi kontrol etmez; sözleşmeye uymak çağıranın sorumluluğudur. `low`,
aranabilecek aralığın en küçük index’i; `high`, en büyük index’idir. Aralık iki
ucu da içerdiği için başlangıçta `high`, `length - 1` olur. İkisi de aralık
küçüldükçe yeniden atanır; bu nedenle `let` kullanılır.

`middle`, o turdaki orta index’tir. `(low + high) / 2` ondalıklı çıkabilir.
Array index’i tam sayı olmalıdır; `Math.floor` alt tam sayıyı seçer.
`middleValue`, orta index’teki değerdir. Her tur yeniden hesaplanır ama tur
içinde değişmez; ikisi de `const` olur.

Temel değişmezimiz şudur: Target array’de varsa, her turun başında kapsayıcı
`low..high` aralığındadır. `middleValue < target` ise sıralılık sayesinde
middle ve onun solundaki hiçbir değer target olamaz; `low = middle + 1` ile
onları eleriz. Aksi durumda middle’ın sağı elenir.

`[2, 5, 8, 17, 20, 21, 23]` içinde `20` arayalım:

| Tur | `low` | `high` | `middle` | `middleValue` | Karar |
|---:|---:|---:|---:|---:|---|
| 1 | 0 | 6 | 3 | 17 | Hedef büyük; `low = 4` |
| 2 | 4 | 6 | 5 | 21 | Hedef küçük; `high = 4` |
| 3 | 4 | 4 | 4 | 20 | Bulundu; `4` dön |

Yedi elemanın yalnızca üçüne baktık. Hedef `19` olsaydı üçüncü turda
`middleValue` 20 olur, `high = 3` yapılırdı. Sonra `low` 4, `high` 3 olduğu
için `low <= high` yanlış olur ve `-1` dönerdi. Aralığın boşalması, bakılacak
olası konum kalmadığı anlamına gelir.

### Neden sırasız veride çalışmaz?

```js
const unsortedIds = [21, 2, 17, 8, 20];
binarySearch(unsortedIds, 20);
```

İlk orta değer `17`’dir. Algoritma hedef daha büyük diye sol yarıyı eler.
Sonraki orta değer `8` olur; yine solu eler ve sonunda yanlışlıkla `-1`
dönebilir. Sorun kodun sözdizimi değil, “orta değerden küçük olanlar soldadır,
büyük olanlar sağdadır” varsayımının yanlış olmasıdır.

String ararken sıralama ve karşılaştırma aynı kurala dayanmalıdır. C20’de
Türkçe metni normalleştirdik. Eğer başlıkları `Intl.Collator("tr-TR")` ile
sıralarsanız ikili arama kararlarını da aynı karşılaştırıcıyla vermelisiniz.
Bu bölümün ilk uygulamasında sayıları kullanmamızın nedeni, arama mekanizmasını
dil sıralama ayrıntılarıyla karıştırmamaktır.

### Birlikte çözelim: yalnız sonucu değil emeği de görmek

Şu ana kadar fonksiyonlarımız yalnızca index döndürdü. Bu sözleşme hedefi
bulmak için yeterli, fakat iki stratejinin kaç karar verdiğini karşılaştırmak
için yetersizdir. Sonucu bozmadan bir sayaç ekleyelim:

```js
function binarySearchWithCount(sortedValues, target) {
  let low = 0;
  let high = sortedValues.length - 1;
  let comparisons = 0;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const middleValue = sortedValues[middle];
    comparisons += 1;

    if (middleValue === target) {
      return {
        index: middle,
        comparisons,
      };
    }

    if (middleValue < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return {
    index: -1,
    comparisons,
  };
}
```

Buradaki `comparisons`, number türünde bir sayaçtır. Başlangıçta hiçbir
karşılaştırma yapılmadığı için değeri `0`’dır. Her turda bir orta değer target
ile değerlendirildiği için `comparisons += 1` çalışır. Sayaç değiştiğinden
`let` gerekir. Boolean kullanmak doğru olmazdı; boolean yalnızca “karşılaştırma
yapıldı mı?” sorusunu taşır, kaç kez yapıldığını taşıyamazdı.

Fonksiyon artık tek bir number yerine bir nesne döndürüyor. `index`, arama
sonucunu; `comparisons`, o sonuca ulaşmak için yapılan işi temsil ediyor. Bu iki
bilgiyi aynı kayıtta taşımamız, birinin diğerine ait olduğunu görünür kılar.
Bulunamadığında bile karşılaştırma sayısını kaybetmiyoruz:

```js
const found = binarySearchWithCount(
  [2, 5, 8, 17, 20, 21, 23],
  21,
);
const missing = binarySearchWithCount(
  [2, 5, 8, 17, 20, 21, 23],
  19,
);

console.log(found); // { index: 5, comparisons: 2 }
console.log(missing); // { index: -1, comparisons: 3 }
```

İlk çağrıda middle önce `3`, değer `17` olur. Hedef büyük olduğu için `low`
`4` yapılır. İkinci turda middle `5`, değer `21` olur ve eşleşme bulunur.
İkinci çağrı ise aralığı boşaltana kadar üç karşılaştırma yapar.

Şimdi önemli bir ayrımı kendi cümlenizle kurun: “bulunamadı” başarısız çalışan
algoritma demek değildir. Hedef gerçekten koleksiyonda yoksa `index: -1`,
algoritmanın sözleşmeye uygun doğru sonucudur. Hata; olmayan hedefi bulamamak
değil, var olan hedefi kaçırmak veya hiç sonlanmamaktır.

Bu sayaç gerçek zamanı ölçmez. Bir karşılaştırmanın maliyeti veri türüne,
karşılaştırıcıya ve çalışma ortamına göre değişebilir. Yine de aynı girdi ve
aynı karşılaştırma kuralında iki algoritmanın karar davranışını görünür kılar.
C23’te bu gözlemi daha genel bir büyüme modeline dönüştüreceğiz.

### Aynı değerden birden fazla varsa

İkili arama eşitliği gördüğü anda durur. Aynı değer birden çok kez geçiyorsa
bulduğu eşleşmelerden birini döndürür; ilk eşleşmeyi döndürme garantisi yoktur.
“Herhangi bir eşleşme” ile “ilk eşleşme” farklı sözleşmelerdir. Challenge’da
ilk eşleşmeyi bulmak için eşleşmeden sonra sol tarafta aramaya devam edeceksiniz.

## Engineering Perspective

Profesyonel seçim “binary search daha hızlıdır, her yerde onu kullan” cümlesi
değildir. Önce veri sözleşmesini sorarız.

| Durum | İlk aday | Gerekçe |
|---|---|---|
| Veri sırasız ve tek arama yapılacak | Doğrusal arama | Hazırlık gerektirmez |
| Veri zaten sıralı ve çok arama yapılacak | İkili arama | Her adımda olası aralığı küçültür |
| Veri sık eklenip değişiyor | Bağlama göre | Sıralı düzeni korumanın maliyeti vardır |
| İlk eşleşme kesin gerekli | Uyarlanmış arama | Temel sözleşme yeterli değildir |
| Metinler kullanıcı girdisinden geliyor | Önce normalizasyon | Aynı görünen değerler farklı temsil edilebilir |

Karşılaştırma sayısı, süreyle aynı şey değildir; ama algoritmanın davranışını
makineden bağımsız incelemek için yararlı bir kanıttır. C23’te giriş büyüdükçe
iş miktarının nasıl büyüdüğünü resmîleştireceğiz.

Üretim kodunda çoğu zaman `indexOf`, `findIndex`, veri tabanı index’i veya arama
servisi kullanırsınız. Yine de bu algoritmaları öğrenirsiniz; çünkü hazır aracın
hangi sözleşmeyle çalıştığını, neden yanlış sonuç verebildiğini ve hangi testleri
gerektirdiğini anlayabilmeniz gerekir.

## Real World Examples

ASEA ders kataloğunda sırasız bir “son görüntülenenler” listesi küçükse doğrusal
arama yeterlidir. Öğrencinin kaldığı chapter ID’sini listede bulur, index’i
arayüzün odaklanacağı karta göndeririz.

Bir sözlük uygulamasında yüz binlerce kelime alfabetik sırada tutuluyorsa ikili
arama mantığı iyi bir başlangıç modelidir. Burada Türkçe sıralama kuralının
veriyi sıralarken ve ararken aynı olması zorunludur.

Bir hata günlüğünde ilk `"ERROR"` kaydını bulmak doğrusal arama için doğal bir
örnektir: kayıtlar zamana göre sıralıdır, hata seviyesine göre değil. Sırf veri
bir ölçüte göre sıralı diye başka bir ölçüte göre ikili arama yapılamaz.

Oyunlarda oyuncu envanterindeki küçük bir eşya listesi doğrusal aranabilir.
Milyonlarca kullanıcı kaydı için ise uygulama kodunda array dolaşmak yerine veri
tabanının arama yapıları kullanılır. Zihinsel soru değişmez: hedef nedir,
karşılaştırma kuralı nedir, veri hangi koşulu sağlıyor ve bulunamadı sonucu
nasıl temsil ediliyor?

## Common Mistakes

### Sırasız veride ikili arama

Belirti bazen doğru, bazen yanlış sonuç alınmasıdır. Neden, yarıyı eleme
kararının sıralılık kanıtına dayanmamasıdır. Düzeltme, girdiyi aynı
karşılaştırıcıyla sıralı tutmak veya doğrusal aramayı seçmektir.

### `low < high` yazmak

Tek elemanlık son aralık incelenmeden döngü bitebilir. Kapsayıcı aralık
kullanıyorsak koşul `low <= high` olmalıdır.

### `high = sortedValues.length` ile başlamak

Bu değer son geçerli index’in bir fazlasıdır. Doğru başlangıç `length - 1`’dir.
Boş array’de bunun `-1` olması faydalıdır; döngü hiç başlamaz.

### `low = middle` veya `high = middle` yazmak

Orta değer elenmiş olmasına rağmen aralıkta tutulur. Bazı girdilerde sınırlar
değişmez ve sonsuz döngü oluşur. Eşitlik ayrı ele alındıktan sonra sınırlar
`middle + 1` ya da `middle - 1` olmalıdır.

### `-1` sonucunu kontrol etmemek

`values[-1]` son elemanı vermez; normal bir negatif adlı property arar ve çoğu
zaman `undefined` üretir. Bulunamadı durumu başarı yolundan ayrı işlenmelidir.

### Değer ile index’i karıştırmak

Fonksiyonumuz target’ın kendisini değil, konumunu döndürür. `20` değerinin
index’i `4` olabilir. Değişkeni `result` yerine `foundIndex` adlandırmak bu
karışıklığı azaltır.

## Best Practices

- Fonksiyon adında veya belgesinde girdinin sıralı olması gerektiğini görünür
  kılın.
- Arama ile normalizasyonu karıştırmayın; aramadan önce karşılaştırılabilir
  değer üretin.
- Normal, ilk eleman, son eleman, boş array ve bulunamadı testlerini yazın.
- Sınırların kapsayıcı mı dışlayıcı mı olduğunu baştan belirleyip tutarlı olun.
- Karşılaştırıcı kullanılıyorsa sıralama ve aramada aynı karşılaştırıcıyı
  kullanın.
- “Bir eşleşme” ile “ilk eşleşme” sözleşmesini ayırın.
- Küçük ve değişken bir koleksiyonda daha karmaşık algoritmayı sırf etkileyici
  göründüğü için seçmeyin.

## Hands-on Exercise

### Şimdi sen dene

Önce aşağıdaki fonksiyonun boşluklarını çözümü açmadan tamamlayın:

```js
function linearSearchWithCount(values, target) {
  let comparisons = 0;

  for (let index = 0; index < values.length; index += 1) {
    comparisons += 1;

    if (values[index] === target) {
      return { index, comparisons };
    }
  }

  return { index: -1, comparisons };
}
```

Şunları elle tahmin edip sonra çalıştırın:

```js
linearSearchWithCount([4, 8, 15, 16, 23, 42], 4);
linearSearchWithCount([4, 8, 15, 16, 23, 42], 23);
linearSearchWithCount([4, 8, 15, 16, 23, 42], 99);
linearSearchWithCount([], 4);
```

### Hata avı

```js
function brokenBinarySearch(sortedValues, target) {
  let low = 0;
  let high = sortedValues.length;

  while (low < high) {
    const middle = Math.floor((low + high) / 2);

    if (sortedValues[middle] === target) {
      return middle;
    }

    if (sortedValues[middle] < target) {
      low = middle;
    } else {
      high = middle;
    }
  }

  return -1;
}
```

En az üç hata bulun. Her hata için yalnızca düzeltmeyi değil, hangi girdide
hangi belirtiyi oluşturacağını yazın.

### Kademeli ipuçları

1. Son geçerli index ile array uzunluğu aynı sayı değildir.
2. Tek elemanlık aralık hâlâ aranmalıdır.
3. Elenmiş orta konumu yeni aralığa tekrar dahil etmeyin.
4. Her tur sonunda `low` veya `high` kesinlikle değişmelidir.

### Çözümün gerekçesi

Doğru sürüm Core Concepts bölümündedir. `high = length - 1`, kapsayıcı aralığın
sağ ucunu geçerli index’te tutar. `low <= high`, tek konumu kontrol eder.
`middle + 1` ve `middle - 1`, karşılaştırılmış orta konumu eleyerek ilerlemeyi
garanti eder.

### Bağımsız uygulama

`searchChapter(chapters, targetId, strategy)` fonksiyonu yazın. `chapters`
nesneleri `{ id, title }` biçiminde olsun. `"linear"` stratejisi sırasız
array’de çalışsın. `"binary"` stratejisi ID’ye göre sıralı array sözleşmesi
istesin. Sonuç olarak `{ index, chapter, comparisons }` veya bulunamadığında
`{ index: -1, chapter: null, comparisons }` döndürün.

Teslim kanıtı:

- en az altı test;
- bir doğrusal ve bir ikili arama izi;
- neden o stratejiyi seçtiğinizi açıklayan beş cümle;
- sırasız girdide binary stratejisinin reddedilmesi veya açıkça belgelenmesi.

### Gerçek proje bağlantısı

Bu fonksiyon Algorithm Workbench projesinin ilk aracıdır. C22’de veri sıralama
stratejileri eklenecek, C23’te karşılaştırma sayıları giriş büyüklüğüne göre
yorumlanacaktır.

## Reflection Questions

1. İkili aramayı ilk gördüğünüzde “ortaya bakmak” ile “yarıyı güvenle elemek”
   arasındaki hangi farkı kaçırmıştınız?
2. `low`, `high` ve `middle` değişkenlerinden hangisinin anlamını açıklamakta
   zorlandınız?
3. Bir algoritmanın birkaç örnekte doğru sonuç vermesi neden sözleşmesinin doğru
   olduğu anlamına gelmez?
4. Elinizde on sırasız değer ve yalnızca bir arama varsa hangi yöntemi seçersiniz?
5. Yarın beş dakikalık tekrarınızda hangi izi yeniden çizeceksiniz?

## Chapter Summary

Arama, bir hedefin koleksiyonda bulunup bulunmadığını ve nerede bulunduğunu
belirler. Doğrusal arama değerleri baştan sona inceler; sıralılık istemez ve ilk
eşleşmeyi döndürür. İkili arama sıralı veride olası index aralığını her adımda
küçültür. Onun doğruluğu, target varsa kapsayıcı `low..high` aralığında kalması
değişmezine dayanır.

`-1`, geçerli index’lerden ayrılan bulunamadı sonucudur. `low`, `high` ve
`index` değiştiği için `let`; tur içindeki `middle`, `middleValue` ve
`currentValue` yeniden atanmadığı için `const` kullanılır. Strateji seçimi
yalnızca hız iddiasına değil, sıralılık, karşılaştırma kuralı, veri değişimi ve
istenen sonuç sözleşmesine dayanır.

## Key Takeaways

- Doğrusal arama sırasız veride çalışır.
- İkili arama, kullanılan karşılaştırmaya göre sıralı veri gerektirir.
- Binary search’ün gücü orta elemana bakmak değil, bir yarıyı kanıtla elemektir.
- Kapsayıcı aralıkta başlangıç `0..length - 1`, döngü koşulu `low <= high` olur.
- `-1` sonucu kullanılmadan önce kontrol edilmelidir.
- Aynı karşılaştırma kuralı sıralama ve aramada korunmalıdır.
- Algoritma seçimi veri sözleşmesiyle birlikte açıklanmalıdır.

## Further Reading

Önce bu chapter’ın lab ve challenge’ını bitirin. Ardından MDN’de `indexOf` ve
`findIndex` sözleşmelerini okuyup kendi `linearSearch` fonksiyonunuzla
karşılaştırın. C22’de sıralama algoritmalarına, C23’te algoritmik karmaşıklığa
geçerken bu bölümde tuttuğunuz karşılaştırma sayılarını saklayın.

## References

- [MIT OpenCourseWare — Linear and Binary Search](https://ocw.mit.edu/courses/1-124j-foundations-of-software-engineering-fall-2000/pages/recitations/recitation_5/)
- [Harvard CS50 — Algorithms Notes](https://cs50.harvard.edu/extension/business/2026/spring/notes/1/)
- [MIT 6.006 — Sorting and Binary Search](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/6d1ae5278d02bbecb5c4428928b24194_MIT6_006S20_lec3.pdf)
- [MDN — Array.prototype.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [MDN — Array.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
