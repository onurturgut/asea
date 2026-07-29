---
document_type: "chapter"
chapter_id: "V01-C22"
volume_id: "V01"
title: "Sıralama Algoritmaları"
slug: "siralama-algoritmalari"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "9-11 saat"
prerequisites:
  - "V01-C11"
  - "V01-C12"
  - "V01-C17"
  - "V01-C31"
learning_outcomes:
  - "V01-LO034"
  - "V01-LO035"
related_lab_ids:
  - "V01-C22-L01"
related_assessment_ids:
  - "V01-C22-AS01"
next_chapter_id: "V01-C23"
blueprint_id: "V01-C22-BP01"
last_updated: "2026-07-29"
---

# Sıralama Algoritmaları

## Learning Objectives

C21’de ikili aramanın sıralı veri istediğini gördünüz. O bölümde sıralı array
bize hazır verilmişti. Şimdi o sözleşmenin nasıl üretildiğini öğreneceğiz.

Bu chapter sonunda:

- selection sort ve insertion sort işlemlerini her tur için elle
  izleyebileceksiniz (`V01-LO034`);
- `start`, `candidateIndex`, `smallestIndex`, `currentIndex`, `position` ve
  `currentValue` değişkenlerinin taşıdığı bilgiyi açıklayabileceksiniz;
- sıralı önek (sorted prefix) değişmezini kullanarak ara durumların neden doğru
  olduğunu savunabileceksiniz;
- kararlılık (stability), yerinde çalışma (in-place), mutasyon (mutation), girdi
  biçimi ve sadelik ölçütleriyle strateji seçebileceksiniz (`V01-LO035`);
- eşit değerlerin ve kayıt kimliklerinin neden önemli olduğunu gösterebileceksiniz;
- normal, boş, tek elemanlı, ters ve önceden sıralı girdiler için test
  yazabileceksiniz;
- JavaScript’in `sort()` ve `toSorted()` davranışlarını kendi algoritmanızdan
  ayırabileceksiniz.

Bu bölümün amacı üretim sistemlerinde her zaman kendi sıralama algoritmanızı
yazmanız değildir. Ama hazır araca hangi karşılaştırma sözleşmesini verdiğinizi,
orijinal verinin değişip değişmediğini ve eşit kayıtların sırasının korunup
korunmadığını anlayabilmeniz gerekir.

## Prerequisites

C11’de döngü, C12’de iç içe döngü, C17’de array/index ve mutasyon davranışını
öğrendiniz. C21’de karşılaştırma, hedef, çalışma izi ve değişmez kavramlarını
kullandınız. C21 canonical ön koşul listesinde yer almasa da öğretim
hikâyemizdeki ihtiyacı sağlar: binary search için sıralı veri üretmek.

Canonical kayıt C31’i de ön koşul gösterir. C31 henüz sayısal üretim sırasında
yazılmadığından bu chapter `map`, `filter` veya `reduce` bilgisi varsaymaz.
İçerik çalışır; ancak C31 kanıtı tamamlanmadan Stable kalite kapısı kapanmaz.

Hazırlık kontrolü:

```js
const chapterIds = [21, 8, 17, 2];
```

1. İlk geçerli index ve son geçerli index nedir?
2. `chapterIds[1]` hangi değeri verir?
3. İki number’ı küçükten büyüğe göre nasıl karşılaştırırsınız?
4. İki değerin yerini değiştirmek array’i mutasyona uğratır mı?
5. Bir dış döngünün her turunda iç döngü neden farklı bir aralığı gezebilir?

Yanıtlarınız `0`, `3`, `8`, `<` veya çıkarma tabanlı karşılaştırma, “evet” ve
“çözülen bölüm büyüdüğü için” düşüncesine yaklaşıyorsa hazırsınız.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Sıralama problemi, karşılaştırma ve swap | 75 dakika |
| Selection sort ve ayrıntılı çalışma izi | 2 saat |
| Insertion sort ve ayrıntılı çalışma izi | 2 saat |
| Stability, in-place, mutation ve comparator | 90 dakika |
| Hata avı, test ve strateji karşılaştırması | 90 dakika |
| Quiz, lab ve bağımsız proje artımı | 2-3 saat |

Bir oturumda yalnızca selection sort’u izleyip ertesi gün insertion sort’a
geçebilirsiniz. Her algoritma için array durumunu kâğıda yazmadan “anladım”
kararı vermeyin.

## Introduction

Bir öğretmenin sınav kâğıtlarını puana göre küçükten büyüğe dizdiğini düşünün.
Kâğıtlar masaya karışık bırakılmıştır. Öğretmen bir yöntem seçmelidir. Her
seferinde kalan kâğıtlar arasındaki en küçük puanı bulup sıranın başına
taşıyabilir. Ya da kâğıtları tek tek eline alıp elindeki sıralı kâğıtların
arasındaki doğru yere yerleştirebilir.

İki yöntem de sonunda aynı puan sırasını üretebilir. Fakat hareket biçimleri,
eşit puanlı öğrencilerin kendi aralarındaki sırası ve önceden neredeyse sıralı
bir masaya verdikleri emek farklı olabilir.

Sıralama (sorting), değerleri tanımlanmış bir karşılaştırma kuralına göre düzenli
bir sıraya getirmektir. “Düzenli” sözcüğü tek başına yeterli değildir. Sayıları
küçükten büyüğe mi, chapter’ları ID’ye göre mi, öğrenci kayıtlarını önce puana
sonra ada göre mi diziyoruz? Sıralama ancak karşılaştırma kuralıyla birlikte
anlamlıdır.

Şu array’e bakın:

```js
const values = [7, 3, 5, 2];
```

Çalıştırmadan tahmin edin: Her turda kalan en küçük değeri seçersek ilk turun
sonunda array ne olur? Yanıt `[2, 3, 5, 7]` değildir. İlk tur yalnızca `2`yi
başlangıca taşır ve `[2, 3, 5, 7]` tesadüfen tamamen sıralı görünür. Başka bir
girdi seçseydik yalnızca ilk konum kesinleşebilirdi. Algoritmaları sonuçtan çok
ara durumlarıyla öğreneceğiz.

## Core Concepts

### Karşılaştırma ve yer değiştirme

Karşılaştırma (comparison), iki değerin sıralama ilişkisini değerlendirmektir.
Number örneğinde `a < b`, `a === b` veya `a - b` kullanabiliriz.

Yer değiştirme (swap), iki index’teki değerin konumlarını karşılıklı
değiştirmektir:

```js
function swap(values, leftIndex, rightIndex) {
  const temporaryValue = values[leftIndex];
  values[leftIndex] = values[rightIndex];
  values[rightIndex] = temporaryValue;
}
```

`values` mutasyona uğrayan array’dir. `leftIndex` ve `rightIndex`, değiştirilecek
iki konumu taşıyan number değerleridir. `temporaryValue`, soldaki değeri
üzerine yazılmadan önce korur. String seçmek yanlış olurdu; burada metin değil,
geçerli array konumu taşırız. `temporaryValue` yeniden atanmadığı için `const`
olur.

İlk atamayı doğrudan yapsaydık soldaki eski değeri kaybederdik:

```js
values[leftIndex] = values[rightIndex];
values[rightIndex] = values[leftIndex];
```

İkinci satır artık eski solu değil, yeni yazılan sağ değeri okur. Sonuçta iki
konum da aynı değere dönüşebilir. Swap küçük görünür, fakat veri kaybını
önleyen üç adımlı bir sözleşmedir.

JavaScript’te destructuring ile aynı davranış daha kısa yazılabilir:

```js
[values[leftIndex], values[rightIndex]] = [
  values[rightIndex],
  values[leftIndex],
];
```

Öğrenirken geçici değişkenli sürümü kullanacağız; çünkü değerin hangi sırayla
korunduğunu açıkça gösterir.

### Birlikte yapalım: selection sort

Selection sort, sırasız bölümdeki en küçük değeri seçer ve o bölümün ilk
konumuna taşır.

```js
function selectionSort(values) {
  const sortedValues = [...values];

  for (
    let start = 0;
    start < sortedValues.length - 1;
    start += 1
  ) {
    let smallestIndex = start;

    for (
      let candidateIndex = start + 1;
      candidateIndex < sortedValues.length;
      candidateIndex += 1
    ) {
      if (
        sortedValues[candidateIndex] <
        sortedValues[smallestIndex]
      ) {
        smallestIndex = candidateIndex;
      }
    }

    if (smallestIndex !== start) {
      swap(sortedValues, start, smallestIndex);
    }
  }

  return sortedValues;
}
```

`values`, çağıranın verdiği orijinal array’dir. `sortedValues = [...values]`,
yüzeysel bir kopya üretir. Sıralama hareketleri bu kopyayı değiştirir; böylece
orijinal array korunur. Bu API kararı ek bir array belleği kullanır. Algoritmanın
çekirdeği kopyanın üzerinde yerinde çalışsa da fonksiyonun tamamına “ek
koleksiyon kullanmıyor” diyemeyiz.

`start`, o turda kesin konumuna yerleştireceğimiz index’tir. Her turda
değiştiğinden `let` kullanılır. Son eleman için ayrıca tur yapmayız; önceki tüm
konumlar doğruysa kalan tek değer zaten doğru yerdedir.

`smallestIndex`, şu ana kadar gördüğümüz en küçük adayın index’idir. Başlangıçta
en iyi bildiğimiz aday `start` konumudur. Daha küçük değer bulunursa yeniden
atanacağı için `let` olur.

`candidateIndex`, sırasız bölümde test ettiğimiz konumdur. `start + 1` ile
başlar; `start` zaten ilk aday olarak kaydedilmiştir. İç döngü tüm kalan
değerleri inceler.

`[7, 3, 5, 2]` izini çıkaralım:

| Dış tur | `start` | Bulunan `smallestIndex` | Swap | Tur sonu |
|---:|---:|---:|---|---|
| 1 | 0 | 3 (`2`) | index 0 ↔ 3 | `[2, 3, 5, 7]` |
| 2 | 1 | 1 (`3`) | Gerekmez | `[2, 3, 5, 7]` |
| 3 | 2 | 2 (`5`) | Gerekmez | `[2, 3, 5, 7]` |

İlk turdaki iç iz daha ayrıntılıdır:

| Aday | Değer | O ana kadarki en küçük | Karar |
|---:|---:|---:|---|
| 1 | 3 | 7 (index 0) | `smallestIndex = 1` |
| 2 | 5 | 3 (index 1) | Değişmez |
| 3 | 2 | 3 (index 1) | `smallestIndex = 3` |

Selection sort değişmezi: Her dış turun başında `0..start-1` öneki, tüm
array’in en küçük `start` elemanını doğru sırada ve son konumlarında taşır.
Tur, kalan bölümün en küçüğünü `start` konumuna koyarak bu doğru öneki bir
eleman büyütür.

Anlama kontrolü: Array zaten sıralıysa `smallestIndex !== start` koşulu kaç
swap’ı engeller? Algoritma yine karşılaştırma yapar mı? Evet, gereksiz swap’lar
engellenir; fakat kalan en küçüğü kanıtlamak için karşılaştırmalar sürer.

### Tahmin et: ikinci selection turu

`[9, 4, 7, 3, 8]` girdisinde ilk turun sonunda `[3, 4, 7, 9, 8]` oluşur.
Çalıştırmadan ikinci turun sonunu yazın. `start = 1` için kalan en küçük `4`
zaten doğru yerdedir; array değişmez. Üçüncü turda `7` yine yerinde kalır.
Dördüncü tur `8` ile `9`u değiştirir.

### Birlikte yapalım: insertion sort

Elinizde sıralı tuttuğunuz iskambil kartlarını düşünün. Yeni kartı en sona
bırakmazsınız; büyük kartları sağa kaydırıp yeni kart için boşluk açarsınız.

```js
function insertionSort(values) {
  const sortedValues = [...values];

  for (
    let currentIndex = 1;
    currentIndex < sortedValues.length;
    currentIndex += 1
  ) {
    const currentValue = sortedValues[currentIndex];
    let position = currentIndex;

    while (
      position > 0 &&
      sortedValues[position - 1] > currentValue
    ) {
      sortedValues[position] = sortedValues[position - 1];
      position -= 1;
    }

    sortedValues[position] = currentValue;
  }

  return sortedValues;
}
```

`currentIndex`, sıralı öneke eklenecek yeni değerin başlangıç index’idir.
Index `1` ile başlar; tek elemanlı `0..0` öneki zaten sıralıdır.
`currentValue`, yerleştirmeye çalıştığımız değerdir. Kaydırmalar sırasında
array’deki eski konumunun üzerine yazılacağı için önce ayrı bir değişkende
korunur. Değeri tur boyunca değişmediğinden `const` kullanılır.

`position`, boşluğun ve sonunda yerleştirmenin yapılacağı index’tir. Büyük
değerleri sağa kaydırdıkça azalır; bu nedenle `let` kullanılır. `position > 0`,
sol komşu okumadan önce array sınırını korur. JavaScript `&&` ifadesini soldan
sağa ve kısa devreli değerlendirdiği için position sıfırken ikinci koşul
çalışmaz.

`sortedValues[position - 1] > currentValue` yalnızca büyük değeri sağa
kaydırır. Eşit değeri kaydırmaz. Bu küçük görünen `>` tercihi insertion
sort’un bu sürümünü stable yapar.

`[7, 3, 5, 2]` izinde:

| Tur | `currentValue` | Kaydırmalar | Yerleşim | Tur sonu |
|---:|---:|---|---:|---|
| 1 | 3 | `7` sağa | 0 | `[3, 7, 5, 2]` |
| 2 | 5 | `7` sağa | 1 | `[3, 5, 7, 2]` |
| 3 | 2 | `7`, `5`, `3` sağa | 0 | `[2, 3, 5, 7]` |

Insertion sort değişmezi: Her dış turun başında `0..currentIndex-1` öneki
sıralıdır ve özgün önekteki aynı değerleri taşır. Yeni değer uygun yere
yerleştirildiğinde önek bir eleman büyür ve sıralı kalır.

### Stability: eşit değerlerin görünmeyen kimliği

Sayı array’inde iki `80` yer değiştirirse farkı göremezsiniz. Gerçek kayıtlarda
eşit karşılaştırma anahtarına sahip öğelerin başka kimlikleri vardır:

```js
const submissions = [
  { student: "Ada", score: 80 },
  { student: "Mert", score: 80 },
  { student: "Ece", score: 60 },
];
```

Puanla stable sıralama yapıldığında Ada, Mert’ten önce kalır; çünkü ikisi de 80
puanlıdır ve özgün göreli sıraları korunur. Klasik selection sort, uzaktaki en
küçüğü swap ederken eşit kayıtların göreli sırasını bozabilir. Yukarıdaki
array’de Ece ile Ada swap edilirse sonuç `Ece, Mert, Ada` olur; Ada ile Mert’in
80 puan içindeki sırası tersine dönmüştür.

Insertion sort’un `>` koşullu sürümü eşit sol komşuyu kaydırmadığı için stable
kalır. Koşulu `>=` yaparsanız eşit değerler de sağa kayar ve bu garanti
kaybolabilir.

### In-place ile orijinali korumak aynı karar değildir

In-place algoritma, girdi boyutuyla büyüyen ikinci bir koleksiyon kullanmadan
girdinin üzerinde çalışır. Selection ve insertion sort çekirdekleri array’i
yerinde düzenleyebilir. Fakat örnek fonksiyonlarımız çağıranın verisini
korumak için `[...values]` kopyası üretir.

Burada iki ayrı düzey vardır:

1. Algoritmanın hareket mekanizması ne kadar ek alan ister?
2. Ürün API’si çağıranın orijinal verisini değiştirmeyi kabul ediyor mu?

Profesyonel açıklama bu ayrımı gizlemez. “Fonksiyon hiçbir şeyi mutasyona
uğratmıyor” demek de yanlıştır; `sortedValues` mutasyona uğrar. “Çağıranın
verdiği `values` korunuyor” demek doğrudur.

### Comparator sözleşmesi

Sayı dışında veri sıralamak için karşılaştırıcı (comparator) kullanırız. Genel
sözleşme negatif sayıda `a` önce, pozitif sayıda `b` önce, sıfırda eşit
sıralama anahtarı demektir:

```js
function compareByScore(firstSubmission, secondSubmission) {
  return firstSubmission.score - secondSubmission.score;
}
```

Comparator saf ve tutarlı olmalıdır. Aynı iki değer için rastgele farklı sonuç
vermemeli; `a` ile `b` ilişkisinin tersini `b` ile `a` için de tutarlı
üretmelidir. Challenge’da algoritmalarınızı comparator alacak biçime
dönüştüreceksiniz.

## Engineering Perspective

Selection ve insertion sort küçük ve öğretici algoritmalardır. Büyük üretim
verisinde genellikle dilin iyi test edilmiş sıralama aracını kullanırsınız.
Yine de seçim yalnızca “hangisi hızlı” sorusu değildir.

| Ölçüt | Selection sort | Insertion sort |
|---|---|---|
| Zihinsel model | Kalanın en küçüğünü seç | Yeni değeri sıralı öneke yerleştir |
| Önceden sıralı girdi | Karşılaştırmalar sürer | Çok az kaydırma yapar |
| Swap/kaydırma | Az sayıda swap | Girdiye göre çok kaydırma olabilir |
| Stability | Klasik swap sürümü stable değil | `>` koşullu sürüm stable |
| In-place çekirdek | Evet | Evet |
| Uygun bağlam | Küçük veri, az yazma isteği | Küçük veya neredeyse sıralı veri |

C23’te bu davranışları işlem büyümesiyle resmîleştireceğiz. Burada ölçüm
kanıtımız karşılaştırma, swap ve kaydırma sayılarıdır.

JavaScript `Array.prototype.sort()` orijinal array’i mutasyona uğratır ve aynı
array referansını döndürür. `toSorted()` ise yeni bir array üretir. Sayıları
comparator vermeden `sort()` ile sıralamak tehlikelidir; varsayılan davranış
değerleri string’e çevirerek UTF-16 sırasına göre karşılaştırır. Bu nedenle
`[1, 30, 4, 21, 100]` beklediğiniz sayısal sıraya gelmeyebilir.

Modern ECMAScript sözleşmesinde `sort()` stable’dır; fakat verdiğiniz comparator
yine de tutarlı olmalıdır. Hazır aracın stable olması, yanlış comparator’ı
düzeltmez.

## Real World Examples

ASEA dashboard’unda chapter kartları ilerleme yüzdesine göre sıralanabilir.
Yüzdeler eşitse önceki kullanıcı düzenini korumak, arayüzün her yenilemede
zıplamaması için stability gerektirebilir.

Bir öğretmen teslimleri önce tarihe, sonra puana göre sıralayabilir. Stable
ikinci sıralama, eşit puanlı kayıtların önceki tarih sırasını korumayı mümkün
kılar. Comparator ve sıralama sırası ürün kararıdır.

Canlı skor tablosunda birkaç yeni kayıt mevcut sıralı listeye ekleniyorsa
insertion zihinsel modeli yararlıdır. Buna karşılık milyonlarca kaydı uygulama
array’ine çekip bu basit algoritmalarla sıralamak doğru sistem tasarımı değildir;
veri tabanı veya uygun sıralama altyapısı kullanılmalıdır.

Bir lojistik ekranında öncelik aynı olan paketlerin geliş sırasını korumak adil
işleme için önemlidir. Stability burada akademik bir ayrıntı değil, iş kuralıdır.

## Common Mistakes

### İç döngüyü `start`tan başlatmak

Aynı konum gereksiz yere kendisiyle karşılaştırılır. Sonuç bazen doğru kalır
ama iz ve işlem sayısı bozulur. İlk aday zaten `smallestIndex = start` ile
kaydedildiği için `candidateIndex = start + 1` olmalıdır.

### `smallestValue` tutup index’i kaybetmek

En küçük değeri bilmek swap için yeterli değildir; hangi konumda olduğunu da
bilmeliyiz. Bu yüzden `smallestIndex` saklarız.

### Insertion sırasında `currentValue`yu korumamak

Sağa kaydırılan değer, yeni değerin eski konumunun üzerine yazabilir. Önce
`currentValue` değişkenine almak veri kaybını önler.

### `>=` ile stability’yi bozmak

Eşit sol komşular da kaydırılır. Sayı çıktısı sıralı görünse bile kayıt
kimliklerinin göreli sırası değişebilir.

### `sort()`un yeni array döndürdüğünü sanmak

`sort()` aynı array’i değiştirir. Orijinalin korunması gerekiyorsa `toSorted()`
veya açık bir kopya gerekir.

### Sayıları comparator olmadan sıralamak

Varsayılan string sırası, `100`ü `21`den önce getirebilir. Sayısal artan sıra
için `(a, b) => a - b` gibi iyi tanımlı comparator gerekir.

## Best Practices

- Sıralama anahtarını ve yönünü fonksiyon sözleşmesinde açıkça belirtin.
- Orijinal verinin korunup korunmadığını isim ve belgede görünür yapın.
- Her dış tur için değişmezi bir cümleyle yazın.
- Duplicate kayıtları yalnızca number değil, ayrı kimlikli nesnelerle test edin.
- Boş, tek eleman, sıralı, ters sıralı ve duplicate girdileri doğrulayın.
- Comparator’ın negatif, sıfır ve pozitif sonuçlarını test edin.
- Stability ve in-place kavramlarını “hız” ile karıştırmayın.
- Üretimde yerleşik sıralama aracını kullanırken mutasyon ve varsayılan
  comparator davranışını kontrol edin.

## Hands-on Exercise

### Şimdi sen dene

`[6, 2, 9, 2, 4]` için selection sort’un her dış turunu tabloya yazın.
`smallestIndex` değerini yalnızca sonuç olarak değil, iç karşılaştırmalarla
birlikte gösterin.

Sonra aynı girdiyi insertion sort ile izleyin. Her turda:

- `currentIndex`;
- `currentValue`;
- sağa kaydırılan değerler;
- son `position`;
- tur sonu array

bilgilerini kaydedin.

### Hata avı

```js
function brokenInsertionSort(values) {
  const sortedValues = [...values];

  for (
    let currentIndex = 0;
    currentIndex < sortedValues.length;
    currentIndex += 1
  ) {
    let position = currentIndex;

    while (
      sortedValues[position - 1] >=
      sortedValues[currentIndex]
    ) {
      sortedValues[position] = sortedValues[position - 1];
      position -= 1;
    }
  }

  return sortedValues;
}
```

En az dört sorun bulun. Her sorun için belirti, neden ve düzeltme yazın.

### Kademeli ipuçları

1. İlk eleman tek başına zaten sıralı bir önek oluşturur.
2. Kaydırmalar başlamadan önce yerleştirilecek değeri koruyun.
3. Sol komşuyu okumadan önce position sınırını kontrol edin.
4. Stability için eşit değer kaydırılmalı mı?
5. Döngü bittikten sonra korunan değer nereye yazılmalı?

### Gerekçeli çözüm

Doğru insertion sürümü Core Concepts bölümündedir. `currentIndex = 1`, boşuna
ilk turu önler. `currentValue` kaydırmalardan önce korunur. `position > 0`
array dışına çıkmayı önler. `>` eşitlerin göreli sırasını korur. While
bittiğinde açılan boşluğa `currentValue` yazılır.

### Bağımsız uygulama

Algorithm Workbench’e şu arayüzü ekleyin:

```js
sortWithMetrics(values, strategy, compare)
```

Sonuç:

```js
const expectedResultShape = {
  sortedValues: [],
  comparisons: 0,
  swaps: 0,
  shifts: 0,
  strategy: "selection",
};
```

Fonksiyon hem `"selection"` hem `"insertion"` stratejisini desteklesin.
Orijinal array’i korusun. En az sekiz test, iki ayrıntılı trace ve stability
deneyi teslim edin.

### Gerçek proje bağlantısı

C21’in Chapter Finder aracı binary search kullanmadan önce sıralı ID
sözleşmesine ihtiyaç duyuyordu. C22 artımı bu veriyi üretir ve nasıl
üretildiğine dair ölçüm bırakır. C23 bu ölçümleri girdi büyüklüğüyle
karşılaştıracaktır.

## Reflection Questions

1. Selection sort’ta hangi bölümün “artık kesinlikle doğru” olduğunu nasıl
   açıklarsınız?
2. Insertion sort’ta `currentValue` neden ayrı değişkende korunur?
3. Eşit sayılarla stability sorununu neden göremeyebilirsiniz?
4. Orijinal array’i korumak ile in-place algoritma arasındaki fark nedir?
5. Önceden neredeyse sıralı küçük bir veri için hangi yöntemi neden seçersiniz?
6. C23’e hangi ölçüm tablonuzu götüreceksiniz?

## Chapter Summary

Sıralama, açık bir comparator kuralına göre değerleri düzene koyar. Selection
sort her turda sırasız bölümün en küçük değerini seçip başlangıca taşır.
Değişmezi, tamamlanan önekin en küçük değerleri son konumlarında taşımasıdır.

Insertion sort yeni değeri sıralı önekteki yerine yerleştirir. Büyük değerleri
sağa kaydırırken `currentValue`yu korur. `>` koşullu sürüm eşit kayıtları
birbirinin üzerinden geçirmediği için stable’dır. Klasik swap tabanlı selection
sort ise stable değildir.

In-place, algoritmanın büyüyen ikinci koleksiyon istememesidir. Çağıranın
orijinal verisini koruyan `[...values]` API kararı ise ayrıca bellek kullanır.
JavaScript `sort()` mutasyon yapar; `toSorted()` yeni array üretir. Sayısal
sıralamada comparator verilmelidir.

## Key Takeaways

- Sıralama kuralı comparator olmadan eksik tanımdır.
- Selection sort kalan bölümün en küçüğünü seçer.
- Insertion sort yeni değeri sıralı öneke yerleştirir.
- Değişmez, her turun koruduğu doğruluk cümlesidir.
- Stability eşit anahtarlı kayıtların göreli sırasını korur.
- `>` ve `>=` tercihi insertion stability davranışını değiştirebilir.
- In-place ile orijinal girdiyi koruma farklı kararlardır.
- `sort()` mutasyon yapar; `toSorted()` kopya üretir.
- C23 için karşılaştırma, swap ve shift sayıları kanıt olarak saklanmalıdır.

## Further Reading

Önce lab’da iki algoritmayı aynı girdiler üzerinde izleyin. Sonra MDN `sort()`
sayfasında comparator, mutasyon ve stability bölümlerini kendi
uygulamanızla karşılaştırın. MIT ve CS50 anlatımlarındaki selection/insertion
izlerini farklı dillerde okuyup aynı değişmezleri bulmaya çalışın.

## References

- [MIT OpenCourseWare — Sorting](https://ocw.mit.edu/courses/1-124j-foundations-of-software-engineering-fall-2000/pages/lecture-notes/sorting/)
- [MIT 6.006 — Selection Sort and Insertion Sort](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/1869dbf640ded6b31f1bd369d2001ef5_MIT6_006S20_r03.pdf)
- [Harvard CS50 — Selection and Insertion Sort](https://cs50.harvard.edu/extension/business/2026/spring/notes/1/)
- [MDN — Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
