---
document_type: "chapter"
chapter_id: "V01-C11"
title: "Yineleme ve Döngüler — Sonlanan Tekrar"
volume: "01"
module: "V01-M03"
chapter: "11"
slug: "yineleme-ve-donguler"
difficulty: "Beginner"
estimated_time: "10-12 saat"
status: "Draft"
version: "0.1.0"
prerequisites: ["V01-C06", "V01-C09", "V01-C10"]
learning_objectives: ["V01-LO017"]
concept_ids:
  - "ASEA-CON-000039"
  - "ASEA-CON-000040"
  - "ASEA-CON-000041"
  - "ASEA-CON-000042"
production_packet: "V01-C11-CPP-001"
---

# Yineleme ve Döngüler — Sonlanan Tekrar

## Learning Objectives

Bu bölümün amacı aynı kodu birçok kez çalıştırmayı öğretmekten daha büyüktür. Bir tekrarın nerede başladığını, hangi koşul altında sürdüğünü, her turda hangi durumun değiştiğini ve neden sonunda durduğunu açıklayabilmelisin.

Bu bölümün sonunda:

- Yineleme (Iteration) ile döngü (Loop) arasındaki ilişkiyi açıklayabileceksin.
- Başlatma, devam koşulu, döngü gövdesi ve güncelleme adımlarını ayırabileceksin.
- `while`, `do...while` ve `for` yapılarını yürütme sırasıyla izleyebileceksin.
- Sıfır, bir ve çok turluk girdilerde çıktıyı çalıştırmadan tahmin edebileceksin.
- Yineleme durumu (Iteration State) için tur öncesi ve sonrası değerleri tabloya yazabileceksin.
- Sayaç (Counter), biriktirici (Accumulator) ve gözcü değer (Sentinel) rollerini ayırt edebileceksin.
- Bir eksik/bir fazla hatasını (Off-by-One Error) sınır tablosuyla bulabileceksin.
- `break` ile döngüyü sonlandırmanın ve `continue` ile mevcut turun kalanını atlamanın etkisini izleyebileceksin.
- `continue` nedeniyle güncellemenin atlandığı sonsuz döngüyü teşhis edebileceksin.
- Sonlanma (Termination) için ulaşılabilir çıkış koşulu ve ona doğru ilerleyen durum değişimini gösterebileceksin.
- Basit bir ilerleme ölçüsüyle döngünün sonlu girdide neden durduğunu açıklayabileceksin.
- Döngü değişmezi (Loop Invariant) sezgisini kullanarak her turdan önce ve sonra doğru kalan özelliği ifade edebileceksin.
- Toplama, sayma, arama ve sentinel kontrollü giriş kalıplarını doğru başlangıç değerleriyle tasarlayabileceksin.
- Boş girdi, tek öğe, üst sınır ve geçersiz veri durumlarını test edebileceksin.
- Yapay zekâ tarafından üretilen bir döngüyü durum izi, sınır testleri ve sonlanma argümanıyla denetleyebileceksin.

Kanonik çıktı `V01-LO017`dir: Sayaç, biriktirici veya sentinel kullanan sonlanan bir döngü tasarlamak; bütün durum değişimlerini yineleme tablosunda göstermek ve sonlu girdi için neden durduğunu açıklamak. Yalnız beklenen çıktıyı görmek bu çıktıyı kanıtlamaz.

## Prerequisites

Bu bölüm C06'daki değişken ve durum, C09'daki Boolean koşulları, C10'daki koşullu yürütme üzerine kurulur. `let` ile yeniden atama yapabilmeli, karşılaştırma ve mantıksal ifadeleri okuyabilmeli, bir `if` dalını izleyebilmelisin.

Tanılama:

```js
let count = 0;

if (count < 3) {
  count += 1;
}

console.log(count);
```

Şunları yanıtla:

1. `count` başlangıçta kaçtır?
2. Koşul hangi mantıksal sonucu üretir?
3. Atamadan sonra durum nasıl değişir?
4. `if` gövdesi neden yalnız bir kez çalışabilir?
5. Aynı karar üç kez yeniden verilmek istense hangi bilgi değişmelidir?

`count += 1`, `count = count + 1` ile aynı temel güncellemeyi ifade eder. Bu kısa yazım seni zorluyorsa C07'yi tekrar et. Node.js ortamında `.js` dosyası çalıştırabilmen gerekir.

Henüz diziler veya gelişmiş koleksiyon yöntemleri bilinmesi beklenmez. Küçük sayı aralıkları ve basit veri listeleri yalnız yineleme modelini görünür yapmak için kullanılacaktır. İç içe döngü tasarımı C12, koleksiyon dolaşımı C17'de derinleşir.

## Estimated Study Time

Önerilen toplam süre 10–12 saattir.

| Çalışma | Süre |
|---|---:|
| Ana ders ve notlar | 4 saat |
| Yineleme tabloları | 90 dakika |
| Kod örnekleri | 90 dakika |
| Alıştırma ve quiz | 2–3 saat |
| Laboratuvar ve challenge | 2–3 saat |

İlk oturumda döngü anatomisi ve yapı farklarını, ikinci oturumda durum kalıplarını, üçüncü oturumda hata ayıklama ve sonlanmayı çalış. Her kodu çalıştırmadan önce en az ilk üç turu kâğıtta izle.

Yanlış tahminlerini silme. Başlangıç değeri, koşul, gövde veya güncellemeden hangisini yanlış düşündüğünü yaz. Döngü öğreniminde en değerli kanıt, yalnız son çıktı değil ara durumların doğru açıklanmasıdır.

Çalışma oturumunda aynı örneği farklı yapılara dönüştürmek yararlıdır; fakat yalnız sözdizimini çevirmek yeterli değildir. Sıfır tur davranışının, `continue` sonrasındaki güncellemenin ve çıkış sonrası değişken değerlerinin aynı kaldığını ayrıca doğrula. Her dönüşüm için en az bir sınır testi yaz. Bir kodu okuyabildiğini düşünüyorsan ekranı kapatıp başlangıç, ilk tur, son geçerli tur ve çıkış durumunu kendi cümlelerinle yeniden kur. Bu dört nokta doğru değilse örneği çalıştırıp ara değerlerle karşılaştır. Amaç çok sayıda döngü kopyalamak değil, yeni bir döngünün davranışını kanıtlayabilecek zihinsel modeli geliştirmektir.

Notlarında kodun yanında küçük bir “durma gerekçesi” alanı bırak. Buraya hangi değerin değiştiğini, hangi sınıra yaklaştığını ve kaç tur için üst sınır verebildiğini yaz. Bu alışkanlık, daha sonra arama ve sıralama algoritmalarını incelerken yalnız ne olduğunu değil, neden tamamlandığını ve hangi maliyetle tamamlandığını da anlamanı kolaylaştıracaktır.

## Introduction

Bir mağazada 100 sipariş bulunduğunu düşün. Her sipariş için aynı adımları tek tek kopyalamak mümkün olabilir: siparişi oku, doğrula, toplamı güncelle, sonraki siparişe geç. Fakat 101'inci sipariş geldiğinde kod değişmeli mi? Sipariş sayısı her gün farklıysa kaç kopya yazılmalı?

Döngü, tekrar eden işlem örüntüsünü tek bir gövdede tanımlar. Program, devam koşulu izin verdiği sürece bu gövdeyi yeniden yürütür. Her yürütmeye bir yineleme denir.

Tekrar yalnız “aynı şeyi yapmak” değildir. Her turda durum değişebilir. Bir sayaç kaç öğe işlendiğini, bir toplam şimdiye kadar ne biriktiğini, bir konum sıradaki öğeyi, bir sentinel girişin bitip bitmediğini gösterebilir.

```text
başlat → koşulu sor → gövdeyi çalıştır → durumu güncelle → koşula dön
```

Bu döngüsel akışın iki sorumluluğu vardır. Gövde doğru işi yapmalı ve döngü sonunda durmalıdır. Güncelleme unutulursa program sonsuza kadar aynı koşulu doğru bulabilir. Sınır yanlışsa bir öğe eksik veya fazla işlenebilir. Biriktirici yanlış başlatılırsa bütün ara adımlar düzenli görünse bile sonuç yanlıştır.

Döngüler ileride arama, sıralama, veri işleme, dosya okuma, tekrar deneme ve kullanıcı etkileşimi için temel olacaktır. Fakat güçlü kullanım, sözdizim ezberinden değil durum ve sonlanma düşüncesinden doğar.

## Core Concepts

### 1. Tekrar, yineleme ve döngü

Tekrar genel fikirdir. Yineleme, gövdenin belirli bir turudur. Döngü, bu turları yöneten kontrol yapısıdır. Üç tur çalışan bir döngü üç yineleme yapar.

```js
for (let round = 1; round <= 3; round += 1) {
  console.log("Tur", round);
}
```

Çıktı:

```text
Tur 1
Tur 2
Tur 3
```

### 2. Döngünün dört temel parçası

Birçok döngü şu parçaları taşır:

1. **Başlatma:** İlk durum nedir?
2. **Koşul:** Yeni tur yapılmalı mı?
3. **Gövde:** Bu turda hangi iş yapılır?
4. **Güncelleme:** Bir sonraki tura nasıl ilerlenir?

```js
let count = 0;          // Başlatma

while (count < 3) {     // Koşul
  console.log(count);   // Gövde
  count += 1;           // Güncelleme
}
```

Çıkış, `count < 3` yanlış olduğunda gerçekleşir.

### 3. `while` döngüsü

`while`, koşulu gövdeden önce değerlendirir. Koşul başlangıçta yanlışsa gövde hiç çalışmaz.

```js
let number = 1;

while (number <= 3) {
  console.log(number);
  number += 1;
}
```

Yürütme sırası:

1. `number = 1`.
2. `1 <= 3` doğru.
3. 1 yazdırılır.
4. `number = 2`.
5. Koşula dönülür.

Durum 4 olduğunda `4 <= 3` yanlış olur ve gövde çalışmaz.

### 4. Yineleme tablosu

| Tur | Tur başı `number` | Koşul | Yazdırılan | Tur sonu `number` |
|---:|---:|---|---:|---:|
| 1 | 1 | doğru | 1 | 2 |
| 2 | 2 | doğru | 2 | 3 |
| 3 | 3 | doğru | 3 | 4 |
| Çıkış | 4 | yanlış | — | 4 |

Çıkış kontrolünü ayrı satır göstermek, son koşulun da değerlendirildiğini hatırlatır. Döngü üç tur yapar fakat koşul dört kez sınanır.

### 5. Sıfır turluk davranış

```js
let remaining = 0;

while (remaining > 0) {
  console.log(remaining);
  remaining -= 1;
}
```

Koşul ilk kontrolde yanlıştır. Bu bir hata olmak zorunda değildir. “Kalan iş yoksa hiçbir şey yapma” gereksinimini doğru temsil edebilir. Sıfır tur, mutlaka test edilmelidir.

### 6. `do...while`

`do...while` gövdeyi koşuldan önce çalıştırır. Bu yüzden en az bir yineleme yapar.

```js
let attempts = 0;

do {
  attempts += 1;
  console.log("Deneme", attempts);
} while (attempts < 3);
```

Başlangıç koşulu yanlış olsa bile gövde bir kez çalışır. Kullanıcıdan en az bir giriş alma gibi senaryoları temsil edebilir; yine de veri alma altyapısı bu bölümün dışındadır.

### 7. `while` ve `do...while` farkı

`while` “önce izin, sonra iş”; `do...while` “önce bir iş, sonra devam izni” modelidir. Seçim, sözdizim tercihine değil sıfır tur mümkün mü sorusuna dayanır.

### 8. `for` döngüsü

Sayaç kontrollü tekrarın parçaları `for` başlığında yan yana görünür:

```js
for (let index = 0; index < 3; index += 1) {
  console.log(index);
}
```

Sıra:

1. `let index = 0` bir kez çalışır.
2. `index < 3` kontrol edilir.
3. Gövde çalışır.
4. `index += 1` çalışır.
5. Koşula dönülür.

`for`, “kaç tur” veya “hangi ardışık konumlar” biliniyorsa okunabilir olabilir. `while`, devamın olay veya sentinel koşuluna bağlı olduğu durumda daha doğal olabilir.

### 9. Eşdeğer temel yapı

```js
let index = 0;

while (index < 3) {
  console.log(index);
  index += 1;
}
```

Bu örnek önceki `for` ile aynı çıktıyı üretir. Yapıların ifade gücü büyük ölçüde örtüşür; okunabilirlik ve hata riski değişebilir.

### 10. Sayaç

Sayaç bir olayın kaç kez gerçekleştiğini tutar.

```js
let evenCount = 0;

for (let number = 1; number <= 6; number += 1) {
  if (number % 2 === 0) {
    evenCount += 1;
  }
}

console.log(evenCount); // 3
```

Döngü değişkeni `number` sıradaki değeri, `evenCount` eşleşme sayısını tutar. İkisi farklı roldedir.

### 11. Biriktirici

Biriktirici her turda yeni değeri mevcut sonuçla birleştirir.

```js
let total = 0;

for (let number = 1; number <= 4; number += 1) {
  total += number;
}

console.log(total); // 10
```

Toplama için başlangıç 0'dır çünkü `0 + x = x`. Çarpım için özdeşlik 1'dir; 0'dan başlanırsa sonuç her zaman 0 olur.

### 12. Sayaç ile biriktiriciyi ayırmak

Ortalama için hem toplam hem kaç değer bulunduğu gerekir:

```js
let total = 0;
let count = 0;

for (let number = 2; number <= 8; number += 2) {
  total += number;
  count += 1;
}

const average = count > 0 ? total / count : null;
console.log({ total, count, average });
```

Boş girdi durumunda `count` sıfırsa bölme yapılmamalıdır.

### 13. Sentinel

Sentinel, normal akışta özel anlam taşıyan ve devamı bitiren değerdir. Örneğin komut listesinde `"quit"` görüldüğünde işlem durabilir.

```js
const commands = ["status", "start", "quit", "stop"];
let index = 0;

while (index < commands.length && commands[index] !== "quit") {
  console.log("İşleniyor:", commands[index]);
  index += 1;
}
```

`quit` işlenmez ve sonrasındaki `stop`a ulaşılmaz. Ayrıca dizi sonu kontrol edilir; sentinel hiç yoksa sınır dışına çıkılmaz.

### 14. Sentinel çakışması

Sayı girişinde `-1` durdurma değeri seçilmişse -1 alan için geçerli veri olamaz. Negatif sıcaklığın geçerli olduğu bir alanda `-1` kötü sentineldir. Ayrı durum işareti veya tür kullanmak daha güvenli olabilir.

### 15. Dolaşma sınırı

Bir dizinin geçerli konumları 0 ile `length - 1` arasındadır. Bu yüzden tipik koşul `index < values.length`dir.

```js
const values = [10, 20, 30];

for (let index = 0; index < values.length; index += 1) {
  console.log(values[index]);
}
```

`index <= values.length` yazılırsa son turda `values[3]` okunur ve `undefined` elde edilir.

### 16. Off-by-one hatası

Bir sınırın yanlış dahil edilmesi veya dışlanması döngünün bir tur eksik ya da fazla çalışmasına yol açar.

| Amaç | Başlangıç | Koşul | Üretilen değerler |
|---|---:|---|---|
| 0–4 | 0 | `i < 5` | 0,1,2,3,4 |
| 1–5 | 1 | `i <= 5` | 1,2,3,4,5 |
| 5 kez | 0 | `i < 5` | 5 tur |

Sınırı doğal dilde ve matematiksel aralıkla yazmak hatayı azaltır.

### 17. `break`

`break`, en içteki döngüyü hemen bitirir.

```js
for (let number = 1; number <= 10; number += 1) {
  if (number === 4) {
    break;
  }
  console.log(number);
}
```

1, 2, 3 yazılır. 4'te gövdenin kalanı ve bütün sonraki turlar atlanır.

### 18. `continue`

`continue`, yalnız mevcut turun kalanını atlar.

```js
for (let number = 1; number <= 5; number += 1) {
  if (number === 3) {
    continue;
  }
  console.log(number);
}
```

1, 2, 4, 5 yazılır. `for` yapısında `continue`, afterthought güncellemesine gider.

### 19. `while` ve `continue` tuzağı

```js
let number = 0;

while (number < 5) {
  if (number === 2) {
    continue;
  }
  number += 1;
}
```

Durum 2 olduğunda `continue`, güncellemeyi atlar. `number` sonsuza kadar 2 kalır. Güncelleme `continue` öncesinde güvenceye alınmalı veya yapı yeniden tasarlanmalıdır.

### 20. Sonlanma için üç soru

1. Çıkış koşulu nedir?
2. Hangi durum her turda değişir?
3. Bu değişim çıkışa yaklaşıyor mu?

```js
let remaining = 5;

while (remaining > 0) {
  remaining -= 1;
}
```

İlerleme ölçüsü `remaining`dir. Başlangıçta negatif değildir, her turda 1 azalır ve 0 olduğunda koşul yanlış olur. Bu, sınırlı tam sayılar için açık sonlanma argümanıdır.

### 21. Yanlış yönde güncelleme

```js
let remaining = 5;

while (remaining > 0) {
  remaining += 1;
}
```

Koşul doğru kalır ve değer çıkıştan uzaklaşır. Güncelleme bulunması tek başına yetmez; doğru yönde ilerlemelidir.

### 22. Döngü değişmezi sezgisi

Döngü değişmezi, her tur başında doğru kalması beklenen özelliktir. 1'den N'e toplama döngüsünde şu cümle kullanılabilir: “Her tur başında `total`, 1'den `number - 1`e kadar işlenmiş sayıların toplamıdır.”

Başlangıçta `number = 1`, işlenmiş sayı yok ve `total = 0`dır. Gövde `number`ı ekler, güncelleme sonraki sayıya geçer; cümle korunur. Çıkışta bütün istenen sayılar işlenmiştir.

### 23. Invariant ile sonlanma aynı değildir

Bir özellik sonsuz döngü boyunca doğru kalabilir. Sonlanma ayrıca çıkışa ilerleyen ölçü ister. Doğruluk düşüncesinde “doğru çalışırsa ne korunur?” ve “neden durur?” ayrı sorulardır.

### 24. Sonsuz döngüler

Kasıtlı sunucu veya olay döngüleri bulunabilir; bu bölümdeki komut satırı görevlerinde kontrolsüz sonsuz döngü hatadır. Yaygın nedenler:

- Güncelleme yok.
- Güncelleme yanlış yönde.
- Koşul hiçbir zaman değişmeyen değere bağlı.
- Sentinel hiçbir zaman üretilemiyor.
- `continue` güncellemeyi atlıyor.
- Ondalık sayı tam eşitliğe ulaşmıyor.

### 25. Ondalık eşitlik riski

```js
let value = 0;

while (value !== 1) {
  value += 0.1;
}
```

Kayan nokta gösterimi nedeniyle değer tam 1 olmayabilir. Sınır karşılaştırması, tur limiti veya uygun tolerans tasarımı gerekir. C05 sayı gösterimi bilgisi burada önemlidir.

### 26. `for...of` sınırı

`for...of` yinelenebilir değerlerin öğelerini dolaşmayı kolaylaştırır:

```js
for (const value of [10, 20, 30]) {
  console.log(value);
}
```

Bu bölüm yalnız kısa tanıtım yapar. Koleksiyon seçimi, mutasyon ve yüksek düzey yöntemler C17'de incelenecektir.

### 27. `for` döngüsünü ayrıntılı izlemek

Şu kodun yalnız çıktısını değil, değerlendirme sırasını incele:

```js
let total = 0;

for (let number = 1; number <= 3; number += 1) {
  total += number;
  console.log({ number, total });
}
```

| Adım | `number` | `number <= 3` | Gövde sonrası `total` | Güncelleme sonrası `number` |
|---:|---:|---|---:|---:|
| Başlatma | 1 | — | 0 | 1 |
| Tur 1 | 1 | doğru | 1 | 2 |
| Tur 2 | 2 | doğru | 3 | 3 |
| Tur 3 | 3 | doğru | 6 | 4 |
| Çıkış | 4 | yanlış | 6 | 4 |

Başlatma yalnız bir kez çalışır. `total` döngü başlığında değil, döngü dışında başlatılır; çünkü sonuç döngü sonrasında da kullanılacaktır. `number` ise döngünün kontrol konumudur.

`continue` eklenirse sıra değişir:

```js
let total = 0;

for (let number = 1; number <= 4; number += 1) {
  if (number === 2) {
    continue;
  }
  total += number;
}
```

2 değerinde `total += number` atlanır, fakat `number += 1` yine çalışır. Sonuç `1 + 3 + 4 = 8` olur. Bu ayrıntı `for`un afterthought adımının `continue` sonrasında yürütülmesinden gelir.

### 28. Aynı döngüyü yapılar arasında dönüştürmek

Bir `for` döngüsünü `while`a dönüştürmek mekanizmayı anlamayı sağlar:

```js
for (let index = 0; index < 3; index += 1) {
  console.log(index);
}
```

```js
let index = 0;

while (index < 3) {
  console.log(index);
  index += 1;
}
```

Dönüşüm sırasında şu eşlemeyi yap:

- `for` initialization → `while` öncesindeki başlatma.
- `for` condition → `while` koşulu.
- `for` body → `while` gövdesi.
- `for` afterthought → `while` gövdesinin kontrollü güncellemesi.

Fakat `continue` varsa mekanik taşıma davranışı bozabilir:

```js
let index = 0;

while (index < 3) {
  if (index === 1) {
    continue;
  }
  console.log(index);
  index += 1;
}
```

Bu sürüm 1'de takılır. `for` sürümündeki afterthought otomatik olarak çalışırken `while` güncellemesi atlanmıştır. Yapılar yalnız görünüş değil kontrol aktarımı ayrıntıları açısından karşılaştırılmalıdır.

### 29. Geri sayım ve ilerleme yönü

İlerleme her zaman artırma değildir. Çıkışa doğru azalma da ilerlemedir:

```js
for (let remaining = 3; remaining > 0; remaining -= 1) {
  console.log(remaining);
}
console.log("Başla");
```

| Tur | `remaining` başı | Koşul | Çıktı | Güncelleme |
|---:|---:|---|---:|---:|
| 1 | 3 | doğru | 3 | 2 |
| 2 | 2 | doğru | 2 | 1 |
| 3 | 1 | doğru | 1 | 0 |
| Çıkış | 0 | yanlış | Başla | — |

Sonlanma mesafesi doğrudan `remaining`dır. Her turda bir azalır, sıfırın altına inmeden koşul yanlış olur. `remaining += 1` güncellemesi ters yönde giderdi.

Adım büyüklüğü de önemlidir:

```js
for (let value = 0; value < 10; value += 3) {
  console.log(value);
}
```

0, 3, 6, 9 yazılır; 10 yazılmaz. “10'a ulaşana kadar” ifadesi tam eşitlik anlamına gelmemelidir. Güncelleme 3 olduğu için değer 10'a hiçbir zaman eşit olmaz; sınır karşılaştırması doğru modeldir.

### 30. Sayaç kalıbını doğru kurmak

Bir koşulu sağlayan öğelerin sayısını bulmak için sayaç yalnız eşleşmede artar:

```js
const temperatures = [12, -2, 0, -5, 8];
let freezingCount = 0;

for (const temperature of temperatures) {
  if (temperature <= 0) {
    freezingCount += 1;
  }
}
```

İz tablosu:

| Sıra | Sıcaklık | `<= 0` | Önceki sayaç | Yeni sayaç |
|---:|---:|---|---:|---:|
| 1 | 12 | yanlış | 0 | 0 |
| 2 | -2 | doğru | 0 | 1 |
| 3 | 0 | doğru | 1 | 2 |
| 4 | -5 | doğru | 2 | 3 |
| 5 | 8 | yanlış | 3 | 3 |

Değişmez sezgisi: Her tur başında `freezingCount`, daha önce işlenen sıcaklıklardan sıfır veya altı olanların sayısıdır. Başlangıçta hiç öğe işlenmediği için 0 doğrudur. Her turda yalnız eşleşen öğe sayacı artırır; özellik korunur.

### 31. Biriktirici kalıpları

Toplam:

```js
let sum = 0;
for (const value of [4, 6, 10]) {
  sum += value;
}
```

Çarpım:

```js
let product = 1;
for (const value of [4, 6, 10]) {
  product *= value;
}
```

Metin birleştirme:

```js
let report = "";
for (const status of ["ok", "warn", "ok"]) {
  report += `${status}\n`;
}
```

Başlangıç değeri işlemin özdeşlik unsurundan gelir: toplama için 0, çarpma için 1, metin birleştirme için boş metin. Maksimum bulmada sabit 0 kullanmak negatif veri için hatalı olabilir:

```js
const values = [-8, -3, -12];
let maximum = values[0];

for (let index = 1; index < values.length; index += 1) {
  if (values[index] > maximum) {
    maximum = values[index];
  }
}
```

Bu kod boş dizi için çalışmaz; boş girdi politikası önce belirlenmelidir. `null` döndürmek, hata üretmek veya sonuç bulunmadığını açıkça temsil etmek seçeneklerdir.

### 32. Ortalama için iki durum değişkeni

Ortalama yalnız toplam değildir. Hangi değerlerin hesaba katıldığını saymak gerekir:

```js
const readings = [10, null, 20, 30];
let total = 0;
let validCount = 0;

for (const reading of readings) {
  if (typeof reading !== "number") {
    continue;
  }
  total += reading;
  validCount += 1;
}

const average =
  validCount === 0 ? null : total / validCount;
```

`readings.length` ile bölmek yanlış olur; çünkü `null` hesaba katılmamıştır. Sayaç, biriktiriciyle aynı filtre koşulunda güncellenmelidir.

Testler:

- Boş liste → `null` ortalama.
- Yalnız geçersiz değerler → `null`.
- Tek geçerli değer → aynı değer.
- Karışık değerler → yalnız geçerli olanların toplamı/sayısı.
- Geçerli sıfır → hesaba katılmalı.

### 33. Sentinel kontrollü tekrarın tam izi

```js
const inputs = [5, 8, -1, 12];
let index = 0;
let total = 0;

while (index < inputs.length && inputs[index] !== -1) {
  total += inputs[index];
  index += 1;
}
```

| Tur | `index` | Değer | Sentinel mi? | Yeni toplam | Yeni indeks |
|---:|---:|---:|---|---:|---:|
| 1 | 0 | 5 | hayır | 5 | 1 |
| 2 | 1 | 8 | hayır | 13 | 2 |
| Çıkış | 2 | -1 | evet | 13 | 2 |

12 işlenmez. Sentinel ilk öğe olursa sıfır tur çalışır ve toplam 0 kalır. Sentinel hiç yoksa `index < inputs.length` koşulu güvenli çıkış sağlar. Yalnız sentinel kontrolü yazılsaydı dizi sonundan sonra `undefined !== -1` doğru kalabilir ve döngü sonlanmayabilirdi.

Sentinel kontrollü programda iki ayrı bitiş nedeni bulunur:

1. Kullanıcı/akış açık durma işareti verdi.
2. Girdi kaynağı tükendi.

Her ikisi test edilmeli ve çıktı sözleşmesinde ayırt edilmesi gerekiyorsa ayrı durumla kaydedilmelidir.

### 34. Sonlanma argümanını yazmak

Basit tam sayı döngüsü için şu şablonu kullan:

1. **Başlangıç sınırı:** İlerleme ölçüsü başlangıçta sonlu ve negatif olmayan bir tam sayıdır.
2. **Katı ilerleme:** Her normal turda ölçü en az bir azalır.
3. **Alt sınır:** Ölçü sıfırın altına sınırsız inmez.
4. **Çıkış bağlantısı:** Ölçü sıfıra ulaştığında devam koşulu yanlıştır.

Örnek:

```js
let index = 0;
const length = 5;

while (index < length) {
  index += 1;
}
```

İlerleme ölçüsü `length - index`tir. Başlangıçta 5, her turda bir azalır. Sıfır olduğunda `index < length` yanlıştır. Bu nedenle beş tur sonra durur.

Girdi `length` negatif olabilseydi döngü sıfır tur yapar; yine sonlanır. `index` gövdede bazen azaltılsaydı katı ilerleme argümanı bozulurdu. `continue` güncellemeyi atlıyorsa “her normal turda azalır” önermesi doğru değildir.

### 35. Döngü değişmezini üç aşamada incelemek

Bir değişmez için başlangıç, koruma ve çıkış ilişkisi düşünülür.

```js
let total = 0;
let number = 1;

while (number <= 4) {
  total += number;
  number += 1;
}
```

Önerilen değişmez: “Her koşul kontrolünde `total`, 1 ile `number - 1` arasındaki sayıların toplamıdır.”

- **Başlangıç:** `number = 1`; aralık boştur ve toplam 0'dır.
- **Koruma:** Gövde mevcut `number`ı ekler, sonra `number`ı artırır. Yeni kontrolde toplam yeni `number - 1`e kadar olanları içerir.
- **Çıkış:** `number = 5` olduğunda koşul yanlıştır; toplam 1–4 aralığını içerir ve 10'dur.

Bu düşünme yöntemi hatayı da ortaya çıkarır. Güncelleme toplamdan önce yapılırsa hangi sayıların eklendiği değişir; önerilen değişmez korunmaz.

### 36. `break` kullanılan döngünün çıkış sonrası durumu

```js
const values = [2, 4, 9, 12];
let index = 0;
let found = false;

while (index < values.length) {
  if (values[index] % 2 !== 0) {
    found = true;
    break;
  }
  index += 1;
}
```

Döngü iki nedenle biter: tek sayı bulundu veya liste tükendi. Çıkış sonrası yorum:

- `found === true` ise `index` ilk tek sayının konumudur.
- `found === false` ise `index === values.length` ve tek sayı yoktur.

Birden çok çıkış, çıkış sonrası invariantı karmaşıklaştırabilir. `break` kullanımı yanlış değildir; fakat bütün çıkış nedenleri açıkça test edilmelidir.

### 37. `continue` ile filtreleme

```js
let total = 0;

for (const value of [5, -2, 7, -1, 3]) {
  if (value < 0) {
    continue;
  }
  total += value;
}
```

Negatif değerler atlanır ve toplam 15 olur. Aynı davranış olumlu koşulla da yazılabilir:

```js
let total = 0;

for (const value of [5, -2, 7, -1, 3]) {
  if (value >= 0) {
    total += value;
  }
}
```

Kısa gövdede ikinci sürüm daha açık olabilir. Uzun gövdede erken `continue` iç içeliği azaltabilir. Seçim, okunabilirlik ve atlanan adımların görünürlüğüne göre yapılır.

### 38. Döngü hata ayıklama protokolü

Bir döngü yanlış sonuç verdiğinde rastgele sınır değiştirme. Şu sırayı uygula:

1. Beklenen girdi ve çıktıyı yaz.
2. Döngü sözleşmesini çıkar: başlangıç, koşul, gövde, güncelleme, çıkış.
3. Sıfır tur mümkün mü belirle.
4. İlk üç tur ve çıkış satırı için tablo oluştur.
5. Her durum değişkeninin rolünü adlandır.
6. Koşulun kullandığı değişkenlerin her turda değişip değişmediğini kontrol et.
7. Değişimin çıkışa doğru olup olmadığını sınamaya çalış.
8. `break` ve `continue` yollarını ayrı izle.
9. Sınırın dahil/haricini doğal dil gereksinimiyle karşılaştır.
10. En küçük başarısız girdiyi otomatik teste dönüştür.

Geçici log örneği:

```js
console.log({
  iteration,
  indexBefore: index,
  condition: index < values.length,
  currentValue: values[index],
  totalBefore: total,
});
```

Üretim ortamında sınırsız log yeni sorun yaratabilir. Yerel teşhis, yapılandırılmış örnekleme ve hassas veri koruması gerekir.

### 39. Test matrisi hazırlamak

Her döngü için yalnız “normal liste” yeterli değildir:

| Sınıf | Örnek | Sınanan risk |
|---|---|---|
| Sıfır tur | `[]` veya başlangıç koşulu yanlış | Başlangıç ve boş sonuç |
| Bir tur | Tek öğe | İlk/son öğe aynı |
| Çok tur | Üç öğe | Güncelleme ve birikim |
| Sınır dahil | Tam üst değer | `<`/`<=` kararı |
| Sentinel ilk | `[-1, ...]` | Gövde hiç çalışmamalı |
| Sentinel yok | Sonlu liste | Kaynak sonu çıkışı |
| Bütün öğeler atlanır | Hepsi geçersiz | Sayaç/biriktirici boş sonucu |
| Erken eşleşme | İlk öğe hedef | `break` çıkışı |
| Geç eşleşme | Son öğe hedef | Tam dolaşma |
| Eşleşme yok | Hedef yok | Normal tükenme |

Bu matris ileride arama ve koleksiyon bölümlerinde yeniden kullanılacaktır.

### 40. Döngüyü ne zaman kullanmamak gerekir?

Tek eylemi iki kez yazmak her zaman döngü gerektirmez. Tekrar sayısı sabit ve anlamlar farklıysa ayrı açık adımlar daha okunabilir olabilir. Örneğin “önce başlığı, sonra gövdeyi doğrula” aynı `validate` çağrısını içerse bile iki alanın hata mesajı ve sözleşmesi farklı olabilir.

Ayrıca dilin güvenli ve açık bir toplu işlemi varsa el yazımı indeks döngüsü hata riskini artırabilir. Fakat bu araçları doğru seçmek için önce döngü mekanizmasını anlamak gerekir. C17'de koleksiyon yöntemleri karşılaştırılacaktır.

## Engineering Perspective

### Tekrar kodunu silmekten fazlası

Döngü kopyala-yapıştırı azaltır, fakat asıl değer farklı girdi boyutlarına uyum sağlamaktır. 3 öğe için yazılan doğru döngü 300 öğede de aynı kurala dayanabilir. Kaynak ve süre maliyeti ayrıca değerlendirilir.

### Sonlanma bir üretim gereksinimidir

Kontrolsüz döngü CPU tüketebilir, hizmeti kilitleyebilir veya kullanıcı isteğini tamamlamayabilir. Timeout, yeniden deneme limiti ve iş sayısı sınırı operasyonel korumalardır. Fakat yanlış güncellemeyi gizlemek yerine doğru döngü tasarımını tamamlamalıdır.

### Durumun gözlenebilirliği

Hata sırasında yalnız “takıldı” mesajı yetersizdir. Tur numarası, mevcut öğe, kalan iş ve son ilerleme zamanı gibi bilgiler teşhis sağlar. Hassas veriler loglanmamalıdır; gözlenebilirlik ile gizlilik birlikte düşünülür.

### Doğru yapı seçimi

Sabit sayaç aralığı için `for`, koşula bağlı belirsiz tur sayısı için `while`, en az bir tur zorunluysa `do...while` niyeti daha görünür kılabilir. Her yapı diğerine dönüştürülebilir diye en az açıklayıcı olanı seçmek gerekmez.

### Durum rollerini ayırmak

Tek değişken hem konum, hem eşleşme sayısı, hem çıkış işareti olursa kod kırılganlaşır. `index`, `matchCount`, `total`, `shouldStop` gibi ayrı adlar inceleme ve testi kolaylaştırır.

### Dış veri ve sentinel

Kullanıcı girdisi sentinel ile karşılaştırılmadan önce normalleştirilebilir. `"QUIT"`, `" quit "` ve `"quit"` aynı anlamdaysa C08'deki normalleştirme uygulanır. Ancak orijinal veri gerektiğinde korunmalıdır.

### AI denetimi

AI döngüsü için şu kanıtları iste:

1. Başlangıç durumu.
2. İlk üç turun tablosu.
3. Sıfır ve bir tur testi.
4. Üst sınır testi.
5. Güncelleme ve yönü.
6. Çıkış koşulu.
7. Sonlanma argümanı.
8. Sentinel alan sözleşmesi.
9. `break`/`continue` yolları.
10. Boş girdi sonucu.

### İş miktarı ile kaynak sınırı arasındaki ilişki

Sonlanan her döngü pratik olarak kabul edilebilir sürede bitmeyebilir. Bir milyon öğeyi işleyen döngü sonlanır, fakat gövdede pahalı bir işlem varsa kullanıcı deneyimini veya hizmet kapasitesini bozabilir. Bu bölüm Big-O analizi yapmaz; yine de üç temel soruyu erken sorar:

- En fazla kaç tur yapılabilir?
- Bir turda hangi işlem gerçekleşir?
- Girdi büyüklüğü iki katına çıkarsa yaklaşık iş miktarı nasıl değişir?

Örneğin tek bir listeyi baştan sona dolaşan döngü, öğe sayısıyla birlikte tur sayısını artırır. Gövde içinde ikinci tam dolaşma başlatılırsa iş miktarı daha hızlı büyüyebilir. İç içe yapı C12, algoritmik verimlilik C23'te ayrıntılı ele alınacaktır.

### Yeniden deneme döngülerinde güvenilirlik

Bir işlem başarısız olduğunda “başarana kadar dene” koşulu tehlikelidir. Hata kalıcı olabilir. Profesyonel tasarım genellikle şunları içerir:

- En yüksek deneme sayısı.
- Hangi hata türlerinin yeniden denenebilir olduğu.
- Denemeler arasında bekleme veya geri çekilme.
- Aynı işlemin tekrarının güvenli olup olmadığı.
- Bütün denemeler tükendiğinde açık sonuç.

Bu bölüm ağ isteği uygulamaz, fakat sonlanma sözleşmesini kurar:

```js
let attempt = 0;
const maxAttempts = 3;
let completed = false;

while (attempt < maxAttempts && !completed) {
  attempt += 1;
  completed = simulateAttempt(attempt);
}
```

Burada `simulateAttempt` eğitim yardımcısıdır. Döngü ya başarıda ya `attempt === maxAttempts` olduğunda biter. “Başarısız oldu” ile “deneme hakkı tükendi” sonuçları gözlenebilir olmalıdır.

### Toplu işlemde kısmi başarı

Yüz kaydın 60'ıncısında hata olursa ilk 59 kayıt işlenmiş olabilir. Döngünün sonlanması ile işlemin atomik olması farklıdır. Mühendis şu kararları verir:

- İlk hatada durulacak mı?
- Hatalı kayıt kaydedilip diğerlerine devam mı edilecek?
- Başarılı kayıtlar geri alınacak mı?
- Yeniden başlatma hangi konumdan devam edecek?

Bu kararlar veri tabanı ve işlem yönetimi bilgisi gerektirir; burada yalnız döngü durumunun iş sonucunu nasıl taşıdığını fark ediyoruz. `processedCount`, `failedCount` ve `lastProcessedIndex` gözlenebilir ilerleme kanıtı olabilir.

### Döngü içinde koleksiyonu değiştirme riski

Üzerinde dolaşılan koleksiyondan aynı anda öğe silmek, indekslerin kaymasına ve öğe atlanmasına yol açabilir:

```js
const values = [2, 4, 6, 7];

for (let index = 0; index < values.length; index += 1) {
  if (values[index] % 2 === 0) {
    values.splice(index, 1);
  }
}
```

İlk öğe silinince sonraki öğeler sola kayar; indeks artırıldığı için yeni 0 konumundaki 4 atlanabilir. Bu örneğin amacı `splice` öğretmek değil, döngü sınırı ve durumun gövde tarafından değişebileceğini göstermektir. Güvenli strateji yeni sonuç koleksiyonu üretmek, tersten dolaşmak veya uygun yüksek düzey yöntemi kullanmak olabilir; C17'de ayrıntılandırılır.

### Gözlenebilir fakat güvenli günlükleme

Sonsuz veya uzun döngüde her turu loglamak depolama ve performans sorunu yaratabilir. Daha ölçülü sinyaller:

- İlk birkaç turun ayrıntılı izi.
- Her belirli turda ilerleme özeti.
- Son ilerleme zamanı.
- Toplam işlenen ve kalan tahmini.
- Çıkış nedeni.

Kullanıcı parolası, erişim anahtarı veya kişisel veri loglanmamalıdır. Hata ayıklama ihtiyacı güvenlik ve gizlilik sorumluluğunu ortadan kaldırmaz.

### Kod inceleme kontrol listesi

Bir döngü incelemesinde şu sorular sorulur:

1. Tekrarlanacak iş açık mı?
2. Başlangıç durumu bütün girdiler için geçerli mi?
3. Koşul sıfır tur davranışını doğru tanımlıyor mu?
4. Her normal yol ilerleme güncellemesini yapıyor mu?
5. `break`, `continue` veya hata yolları hangi durumu bırakıyor?
6. Biriktiricinin başlangıcı doğru mu?
7. Sentinel geçerli veriyle çakışıyor mu?
8. Boş ve tek öğeli girdi test edilmiş mi?
9. En büyük beklenen girdi kaynak sınırına uygun mu?
10. Çıkış sonrası durum sözleşmeyle uyumlu mu?

Bu liste, “çıktı doğru görünüyor” düzeyinden daha güçlü kanıt üretir.

### AI ile karşılaştırmalı öğrenme

Önce kendi çözümünü, ilk üç tur tablonu ve sonlanma argümanını yaz. Sonra AI'dan alternatif iste. İki çözümü şu başlıklarda karşılaştır:

- Aynı sıfır-tur davranışı var mı?
- Sınırlar aynı değerleri kapsıyor mu?
- Güncelleme bütün kontrol yollarında çalışıyor mu?
- Durum rolleri açık mı?
- Sentinel sözleşmesi aynı mı?
- Çıkış sonrası sonuç aynı mı?
- Alternatif, kısalık uğruna kanıtı gizliyor mu?

AI daha kısa kod yazdığında onu otomatik olarak daha iyi sayma. Okunabilirlik, değişiklik maliyeti ve test edilebilirlik de kalite ölçütüdür.

## Real World Examples

### Yeniden deneme sınırı

```js
let attempt = 0;
const maxAttempts = 3;
let succeeded = false;

while (attempt < maxAttempts && !succeeded) {
  attempt += 1;
  console.log("Deneme", attempt);
  // Eğitim örneğinde ikinci denemede başarı varsayılır.
  succeeded = attempt === 2;
}
```

İki ayrı çıkış vardır: başarı veya limit. Gerçek ağ yeniden denemeleri gecikme, hata sınıfı ve idempotency gibi ek tasarım gerektirir.

### İşlem toplamı

```js
const amounts = [120, 80, 50];
let total = 0;

for (const amount of amounts) {
  total += amount;
}

console.log(total); // 250
```

Boş listede toplamın 0 olması toplama özdeşliğiyle uyumludur.

### Geçerli kayıt sayısı

```js
const statuses = ["valid", "invalid", "valid", "valid"];
let validCount = 0;

for (const status of statuses) {
  if (status === "valid") {
    validCount += 1;
  }
}
```

Sayaç yalnız eşleşmede artar; her turda artarsa öğe sayısı elde edilir.

### İlk eşleşmeyi bulma

```js
const values = [3, 7, 12, 18];
let foundIndex = -1;

for (let index = 0; index < values.length; index += 1) {
  if (values[index] >= 10) {
    foundIndex = index;
    break;
  }
}
```

`-1`, geçerli indeks olmadığı için “bulunamadı” sentinelidir. Arama algoritmaları C21'de derinleşir.

### Komut işleme

```js
const inputs = [" status ", "START", "quit", "stop"];
let index = 0;

while (index < inputs.length) {
  const command = inputs[index].trim().toLowerCase();
  index += 1;

  if (command === "quit") {
    break;
  }

  console.log("Komut:", command);
}
```

Güncelleme `break` kontrolünden önce yapıldığı için durum ilerlemesi açıktır.

### Basit doğrulama tekrarı

```js
const candidates = ["", "abc", "42"];
let index = 0;
let accepted = null;

while (index < candidates.length && accepted === null) {
  const parsed = Number(candidates[index]);
  if (candidates[index] !== "" && Number.isFinite(parsed)) {
    accepted = parsed;
  }
  index += 1;
}
```

Sonlanma ya liste sonu ya kabul edilen değerle gerçekleşir.

### Gereksinimden döngü sınırı türetmek

Sınır operatörünü alışkanlıkla seçme. Önce işlenecek değerleri açık liste veya aralık olarak yaz. “1'den 5'e kadar, 5 dahil” gereksinimi `{1, 2, 3, 4, 5}` kümesini anlatır. Başlangıç 1 ve koşul `number <= 5` olabilir. “İlk beş indeks” ise `{0, 1, 2, 3, 4}` demektir; başlangıç 0 ve koşul `index < 5`tir.

Bir koleksiyonun bütün öğeleri için genel sınır `0 <= index < length`tir. Kodda başlangıç `index = 0`, devam `index < values.length`, güncelleme `index += 1` olur. Son turda `index = length - 1`; güncelleme sonrası `length` olur ve çıkış gerçekleşir.

Adım 2 ise yalnız çift konumlar işlenebilir:

```js
for (let index = 0; index < values.length; index += 2) {
  console.log(values[index]);
}
```

Bu döngünün amacı bütün öğeleri dolaşmak değildir. İsim, açıklama ve testler seçilen alt kümeyi göstermelidir.

Geriye doğru dolaşmada başlangıç `length - 1`, koşul `index >= 0`, güncelleme `index -= 1`dir. Boş koleksiyonda başlangıç -1 olur; koşul ilk kontrolde yanlıştır ve gövde çalışmaz. Bu davranış güvenlidir:

```js
for (let index = values.length - 1; index >= 0; index -= 1) {
  console.log(values[index]);
}
```

Her sınır için şu dört soruyu yaz:

1. İlk işlenecek değer nedir?
2. Son işlenecek değer nedir?
3. Son geçerli turdan sonra durum ne olur?
4. Boş girdide ilk koşulun sonucu nedir?

Bu yöntem `<` ve `<=` sembollerini ezberlemek yerine gereksinimden türetir.

## Common Mistakes

### Güncellemeyi unutmak

Koşulun kullandığı durum değişmezse aynı tur tekrar edilir. Belirti yüksek CPU veya bitmeyen programdır. İz tablosunda aynı satır yinelenir.

### Yanlış başlangıç

0 tabanlı dizide `index = 1` ilk öğeyi atlar. Gereksinimde ilk konumu açıkça yaz.

### `<` ve `<=` karışıklığı

`index <= values.length` bir fazla tur üretir. Sınırın dahil olup olmadığını örneklerle test et.

### Yanlış biriktirici özdeşliği

Çarpımı 0, toplamı 1 ile başlatmak sistematik yanlış sonuç üretir.

### Sayaç koşulunu yanlış yerleştirmek

Yalnız geçerli kayıtları saymak isterken her turda artırmak, toplam öğe sayısını verir.

### Sentinel'i işlemek

Durma işareti veriymiş gibi toplama veya çıktı listesine eklenebilir. Kontrolün gövdeden önce mi sonra mı yapılacağını belirle.

### `continue` ile güncellemeyi atlamak

Özellikle `while`da güncelleme gövdenin sonundaysa erken `continue` onu atlar. Güncellemeyi yeniden yapılandır.

### İç içe `break`i yanlış anlamak

Etiketsiz `break` yalnız en iç döngüyü bitirir. İç içe akış C12'de ele alınacaktır.

### Yalnız normal girdiyle test etmek

Sıfır tur, tek tur, tam sınır, sentinel ilk sırada ve sentinel yok durumlarını da test et.

### Sonlanmayı “küçük veri” ile kanıtlamak

Bir örneğin bitmesi bütün geçerli girdilerde biteceğini göstermez. İlerleme ve sınır gerekçesi gerekir.

## Best Practices

### Döngü sözleşmesini önce yaz

Başlangıç, koşul, gövde amacı, güncelleme ve çıkış sonrası beklentiyi koddan önce bir tabloya yaz.

### İsimlerde rolü göster

`i` kısa yerel indekslerde kabul edilebilir; öğrenme ve iş kodunda `index`, `processedCount`, `runningTotal`, `remainingAttempts` daha açıklayıcıdır.

### İlk üç turu izle

Başlangıç hatası, yanlış sıra ve yanlış güncelleme genellikle ilk üç turda görünür. Çıkış satırını da tabloya ekle.

### Sıfır/bir/çok testleri

Bu üç sınıf döngü testinin asgari omurgasıdır. Sınırın dahil olduğu değerleri ayrıca ekle.

### Güncelleme ile koşulu birlikte incele

Koşul `remaining > 0` ise güncellemenin `remaining`ı azaltması beklenir. Farklı değişken güncelleniyorsa çıkış nasıl değişecek?

### Biriktirici başlangıcını işlemden türet

Toplama 0, çarpma 1, metin birleştirme boş metin, maksimum ise alan ve boş girdi politikasına uygun başlangıç ister.

### Sentinel sözleşmesini belgele

Değerin neden alan dışında olduğunu, normalleştirmeyi ve sentinel bulunmazsa davranışı yaz.

### Kontrol aktarımlarını sınırlı tut

Birçok `break` ve `continue` gövdeyi parçalar. Az ve açık kullan; karmaşıklık artarsa daha küçük işlemlere ayırmayı düşün.

### Operasyonel sınır ekle

Dış sisteme bağlı tekrar denemede üst limit ve gözlenebilir hata gerekir. Limit doğru mantığın yerini tutmaz, güvenlik katmanı sağlar.

## Hands-on Exercise

### İzle ve onar

Aşağıdaki dört döngüyü çalıştırmadan incele.

```js
// A: güncelleme eksik
let a = 0;
while (a < 3) {
  console.log(a);
}

// B: sınır fazla
const values = [10, 20, 30];
for (let i = 0; i <= values.length; i += 1) {
  console.log(values[i]);
}

// C: çarpım başlangıcı yanlış
let product = 0;
for (let n = 1; n <= 4; n += 1) {
  product *= n;
}

// D: continue güncellemeyi atlıyor
let d = 0;
while (d < 5) {
  if (d === 2) {
    continue;
  }
  d += 1;
}
```

Her biri için:

1. İlk üç tur tablosunu oluştur.
2. Belirtiyi yaz.
3. Kök nedeni belirt.
4. En küçük düzeltmeyi yap.
5. Sıfır, bir ve çok tur testi ekle.
6. Sonlanma argümanını yaz.
7. Döngü sonunda doğru olması gereken özelliği ifade et.

Teslim; dört özgün iz, dört düzeltilmiş kod, terminal çıktıları, sınır testleri ve 400 kelimelik karşılaştırma içerir.

## Reflection Questions

1. Döngü ile yineleme arasındaki fark nedir?
2. Başlatma neden gövdeden önce tasarlanır?
3. `while` hangi durumda sıfır kez çalışır?
4. `do...while` neden en az bir kez çalışır?
5. `for` adımlarının gerçek sırası nedir?
6. Sayaç ve döngü konumu neden farklı olabilir?
7. Biriktirici başlangıcını nasıl seçersin?
8. Boş girdi ortalama hesabını nasıl etkiler?
9. Sentinel değerinin alan verisiyle çakışması ne doğurur?
10. `index < length` neden tipik sınırdır?
11. Off-by-one hatasını hangi testlerle bulursun?
12. `break` ile normal koşul çıkışı arasındaki fark nedir?
13. `continue`, `for` ve `while` yapılarında nereye aktarır?
14. Bir güncellemenin çıkışa yaklaştığını nasıl gösterirsin?
15. Döngü değişmezi neden sonlanmayı tek başına kanıtlamaz?
16. Sonsuz döngünün beş yaygın nedenini yaz.
17. Ondalık eşitlik çıkış koşulu neden risklidir?
18. Timeout neden mantıksal düzeltmenin yerine geçmez?
19. AI döngüsünden hangi ara kanıtları istersin?
20. C11 bilgisi arama ve sıralama bölümlerinde nasıl kullanılacak?

## Chapter Summary

Döngü, devam koşulu izin verdiği sürece gövdeyi tekrarlar; her gövde yürütmesi bir yinelemedir. Başlatma ilk durumu, koşul yeni tur iznini, gövde işi, güncelleme ilerlemeyi belirler.

`while` koşulu önce kontrol ettiği için sıfır tur yapabilir. `do...while` gövdeyi önce çalıştırır. `for`, sayaç kontrollü tekrarın parçalarını bir başlıkta toplar. Yapı seçimi niyeti görünür kılmalıdır.

Yineleme tablosu her turun başı, koşulu, eylemi ve son durumunu gösterir. Sayaç oluş sayısını, biriktirici birleşik sonucu, sentinel özel durma durumunu temsil eder. Başlangıç değerleri matematiksel ve alan anlamına uygun seçilir.

Off-by-one hataları başlangıç ve sınırın yanlış dahil edilmesinden doğar. `break` döngüyü, `continue` mevcut turu keser. `while` içinde `continue`, gerekli güncellemeyi atlayarak sonsuz döngü oluşturabilir.

Sonlanma; ulaşılabilir çıkış koşulu, her turda değişen durum ve çıkışa yönelen ilerleme ister. Döngü değişmezi korunan özelliği açıklar; sonlanma için ayrıca azalan veya sınırlı ilerleme ölçüsü gerekir.

Profesyonel döngü; sıfır/bir/çok tur testleri, sınır testleri, gözlenebilir durum, açık sentinel sözleşmesi ve gerekçeli kontrol aktarımlarıyla tasarlanır. AI çıktısı da aynı kanıtlarla incelenir.

## Key Takeaways

- Döngü kontrol yapısı, yineleme tek turdur.
- Temel parçalar başlatma, koşul, gövde ve güncellemedir.
- `while` sıfır, `do...while` en az bir tur yapabilir.
- `for` sırası: başlatma, koşul, gövde, güncelleme.
- Yineleme tablosu ara durumu görünür kılar.
- Sayaç kaç olayı, biriktirici birleşik sonucu tutar.
- Sentinel normal veriden ayırt edilebilir olmalıdır.
- Dizi indeksinde tipik sınır `index < length`dir.
- `<`/`<=` farkı bir fazla veya eksik tur yaratabilir.
- `break` döngüyü, `continue` mevcut turun kalanını keser.
- `continue` güncellemeyi atlayabilir.
- Sonlanma için çıkış ve ona doğru ilerleme gerekir.
- Güncelleme varlığı değil yönü önemlidir.
- Değişmez özellik ile sonlanma ayrı kanıtlardır.
- Sıfır, bir ve çok tur test edilmelidir.
- Boş girdide biriktirici ve bölüm davranışı açık olmalıdır.
- Ondalık tam eşitlik riskli çıkış koşuludur.
- Timeout yanlış döngünün mantıksal çözümü değildir.
- AI döngüsü ara durum ve sonlanma argümanıyla denetlenir.

## Further Reading

ECMAScript belirtimindeki `while`, `do-while` ve `for` çalışma zamanı adımlarını karşılaştır. MDN'nin `break` ve `continue` örneklerinde kontrolün nereye aktarıldığını çiz. MIT Mathematics for Computer Science içinde invariant ve doğruluk fikrini ileri okuma olarak incele. Hoare'nin tarihsel makalesini formal sözdizimi ezberlemek için değil, program hakkında açık özelliklerle düşünmenin kaynağını görmek için kullan.

C12 iç içe akış ve sadeleştirme, C17 koleksiyon dolaşımı, C19 özyineleme, C21–C23 arama, sıralama ve verimlilik konularında bu temeli genişletecektir.

## References

- Ecma International. [ECMAScript — Iteration Statements](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-iteration-statements).
- MDN Web Docs. [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).
- MDN Web Docs. [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).
- MDN Web Docs. [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while).
- MDN Web Docs. [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).
- MDN Web Docs. [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break).
- MDN Web Docs. [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue).
- ACM, IEEE Computer Society, and AAAI. [Computer Science Curricula 2023](https://csed.acm.org/).
- Lehman, E., Leighton, F. T., and Meyer, A. R. [Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf).
- Hoare, C. A. R. [An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf).
- National Institute of Standards and Technology. [NISTIR 8397](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf).
