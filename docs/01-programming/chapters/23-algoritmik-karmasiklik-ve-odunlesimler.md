---
document_type: "chapter"
chapter_id: "V01-C23"
volume_id: "V01"
title: "Algoritmik Karmaşıklık ve Ödünleşimler"
slug: "algoritmik-karmasiklik-ve-odunlesimler"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "9-11 saat"
prerequisites:
  - "V01-C04"
  - "V01-C17"
  - "V01-C21"
  - "V01-C22"
learning_outcomes:
  - "V01-LO036"
  - "V01-LO037"
related_lab_ids:
  - "V01-C23-L01"
related_assessment_ids:
  - "V01-C23-AS01"
next_chapter_id: "V01-C24"
blueprint_id: "V01-C23-BP01"
last_updated: "2026-08-01"
---

# Algoritmik Karmaşıklık ve Ödünleşimler

## Learning Objectives

C21’de doğrusal ve ikili aramanın kaç karşılaştırma yaptığını kaydettiniz.
C22’de selection ve insertion sort için comparison, swap ve shift sayılarını
topladınız. Şimdi bu sayıların tek bir örnekten daha büyük bir anlam taşımasını
sağlayacağız.

Bu chapter sonunda:

- Girdi büyüklüğünü (input size) probleme uygun bir `n` değişkeniyle
  tanımlayabileceksiniz.
- Bir algoritma için açık bir maliyet modeli (cost model) kurup temel işlemleri
  sayabileceksiniz.
- Sabit, logaritmik, doğrusal ve karesel büyümeyi tablo ve kod üzerinden
  ayırt edebileceksiniz (`V01-LO036`).
- Big O, Big Omega ve Big Theta notasyonlarının farklı iddialarını
  açıklayabileceksiniz.
- En iyi, ortalama ve en kötü durumun hangi girdi koşulunu anlattığını
  belirtebileceksiniz.
- Zaman karmaşıklığı ile gerçek çalışma süresini birbirine karıştırmadan
  benchmark sonucunu yorumlayabileceksiniz.
- İki doğru çözümü zaman, ek alan, okunabilirlik, beklenen girdi büyüklüğü ve
  değişim maliyeti açısından karşılaştırabileceksiniz (`V01-LO037`).
- “Daha iyi Big O”nun her bağlamda otomatik olarak daha iyi ürün kararı
  olmadığını savunabileceksiniz.

Başarı ölçütümüz `O(n)` etiketini bir döngünün yanına yazmak değildir. Hangi
girdiyi büyüttüğünüzü, hangi işlemi saydığınızı, hangi durumu analiz ettiğinizi
ve seçiminizin hangi varsayımlar altında geçerli olduğunu açıklamanız gerekir.

## Prerequisites

C04’te algoritmayı adımlara ayırıp elle izlediniz. C17’de koleksiyon uzunluğu,
index ve dolaşma ilişkisini kurdunuz. C21’de search algoritmalarının
karşılaştırma sayılarını; C22’de sorting algoritmalarının karşılaştırma ve veri
hareketlerini görünür yaptınız.

Başlamadan şu tabloyu tamamlayın:

| Algoritma | Girdi özelliği | Saydığımız temel iş |
|---|---|---|
| Linear search | Sıralı olmak zorunda değil | Target karşılaştırması |
| Binary search | Aynı kurala göre sıralı | Orta değer karşılaştırması |
| Selection sort | Array | Aday karşılaştırması ve swap |
| Insertion sort | Array | Karşılaştırma ve shift |

Şu sorulara notlarınıza bakmadan cevap verin:

1. Linear search hedef ilk elemandaysa kaç karşılaştırma yapar?
2. Hedef yoksa ne zaman durur?
3. Binary search neden bir turun ardından yaklaşık yarı aralığı eleyebilir?
4. Selection sort sıralı girdide de kalan bölümü tarar mı?
5. Insertion sort neredeyse sıralı girdide neden daha az shift yapabilir?

Bu davranışları hatırlamıyorsanız C21 ve C22 trace tablolarına dönün. Bu bölüm
algoritmaları yeniden öğretmeyecek; onların ölçümlerini yorumlayacaktır.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| `n`, cost model ve kesin işlem sayısı | 90 dakika |
| Büyüme aileleri ve karşılaştırma tabloları | 2 saat |
| Big O, Ω, Θ ve durum analizi | 2 saat |
| Zaman–alan–sadelik ödünleşimleri | 90 dakika |
| Benchmark sınırı ve hata avı | 60 dakika |
| Quiz, lab ve proje kapanışı | 2-3 saat |

Bu chapter matematik dersi gibi görünmeye başladığında koda geri dönün. Her
sembolü önce gerçek bir sayaç tablosuyla ilişkilendirin. Formül, gözlemlediğiniz
davranışın kısa adıdır; davranışın yerine geçmez.

## Introduction

ASEA’nın ilk sürümünde 20 chapter olduğunu düşünün. Bir chapter ID’sini baştan
sona arayan fonksiyon yeterince hızlı hissedebilir. Aynı kod 20 bin kayıtlık bir
katalogda, her kullanıcı isteğinde ve günde binlerce kez çalıştığında kararın
sonucu değişir.

Kronometreyi açıp bir kez ölçmek caziptir: “Benim bilgisayarımda 0,2
milisaniye sürdü.” Fakat başka bilgisayar, başka JavaScript motoru, arka planda
çalışan işlemler ve farklı veri dağılımı sonucu değiştirebilir. Ayrıca 20 kayıt
için hızlı olan davranışın 20 bin kayıtta nasıl büyüdüğünü tek ölçüm söylemez.

Algoritmik analiz şu soruyu sorar: Girdi büyüdüğünde gereken iş ve ek kaynak
nasıl büyüyor? Önce çalışmanın kendisini sayar, sonra ayrıntıları sadeleştirerek
büyüme desenini adlandırırız.

Bir markette tek ürünü raftan almak ile listedeki her ürünü kontrol etmek
arasında fark vardır. Raf iki kat büyüdüğünde tek ürünü belirli bir konumdan
almak hâlâ bir adımdır. Her ürünü kontrol etmek yaklaşık iki kat işe dönüşür.
Her ürünü diğer her ürünle karşılaştırmak ise işin yaklaşık dört katına
çıkmasına yol açabilir.

Tahmin edin: `n` iki katına çıktığında `n`, `log₂ n` ve `n²` değerleri nasıl
değişir? Birazdan sayı tablosuyla göreceğiz; önce `n`nin ne olduğunu doğru
tanımlamalıyız.

## Core Concepts

### Girdi büyüklüğü: `n` neyi sayıyor?

Girdi büyüklüğü (input size), problem büyürken takip ettiğimiz ölçüdür.
Bir array aramasında çoğunlukla eleman sayısıdır:

```js
const chapterIds = [2, 8, 17, 21, 22, 23];
const n = chapterIds.length;
```

`chapterIds`, number değerlerinden oluşan koleksiyondur. `n` de number’dır ve
array’in kaç öğe taşıdığını temsil eder. Değeri `6`dır. `n`, son index değildir;
son index `n - 1`, yani `5`tir.

`n` her problemde otomatik olarak array uzunluğu değildir. Bir string
algoritmasında karakter veya code point sayısı, bir tabloda satır sayısı, iki
array’i karşılaştırırken ayrı ayrı `n` ve `m` olabilir. `999999` sayısını tek
bir number olarak işleyen basit bir JavaScript işlemi için değer büyük görünse
de koleksiyon eleman sayısı anlamında `n = 999999` diyemeyiz.

İlk kontrol sorusu bu yüzden şudur: “Hangi veri boyutu büyüyor?”

### Maliyet modeli: neyi sayıyoruz?

Maliyet modeli (cost model), analizde hangi işlemi temel kabul ettiğimizi
belirtir. C21’de target karşılaştırmalarını saymıştık:

```js
function linearSearchWithMetrics(values, target) {
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

`comparisons`, kaç target karşılaştırması yapıldığını taşıyan number
sayaçtır. Başlangıçta hiç karşılaştırma yapılmadığı için `0`dır. Her turda
değiştiği için `let` kullanılır. `index` dolaşılan konumu, `target` aranan
değeri temsil eder.

Bu model CPU’nun her talimatını saymaz. Assignment, index artışı ve koşul
kontrolü de zaman alır. Fakat tüm turlarda tekrar eden ve problem davranışını
iyi temsil eden karşılaştırmayı seçmek, büyümeyi incelemek için açıklanabilir
bir model verir.

`n = 5` için üç farklı target düşünelim:

| Durum | Target konumu | Karşılaştırma |
|---|---:|---:|
| En iyi | İlk index | 1 |
| Ara örnek | Index 2 | 3 |
| En kötü | Son index veya yok | 5 |

Demek ki yalnız “linear search kaç işlem yapar?” sorusu eksiktir. Hangi durumu
incelediğimizi de söylemeliyiz.

### Kesin sayıdan büyüme desenine

Linear search’ün en kötü durum karşılaştırma sayısı `T(n) = n`dir. `T`, iş
miktarını; parantez içindeki `n`, bu miktarın girdi büyüklüğüne bağlı olduğunu
anlatır.

Bir döngünün her turunda üç sabit maliyetli işlem yaptığımızı varsayalım:

```js
function describeEveryChapter(chapters) {
  const descriptions = [];

  for (const chapter of chapters) {
    const label = `${chapter.id}: ${chapter.title}`;
    descriptions.push(label);
  }

  return descriptions;
}
```

Kesin model kurulum ayrıntılarına göre `3n + 2` gibi olabilir. `n` çok
büyüdüğünde sabit `2` ve `3` katsayısı işin `n` ile orantılı büyüdüğü gerçeğini
değiştirmez. Asimptotik analiz sabit katsayıları ve daha düşük dereceli
terimleri yok sayarak büyüme ailesine odaklanır.

Bu, sabitlerin gerçek dünyada önemsiz olduğu anlamına gelmez. Aynı büyüme
ailesindeki iki çözümden biri pahalı ağ isteği, diğeri basit number
karşılaştırması yapabilir. Big O önce ölçek davranışını karşılaştırır; benchmark
ve mühendislik incelemesi gerçek sabit maliyetleri tamamlar.

### Dört temel büyüme ailesi

#### Sabit büyüme — `O(1)`

```js
function firstChapter(chapters) {
  return chapters[0];
}
```

Array 10 veya 10 bin elemanlı olsa da tek bir index erişimi yapar. `O(1)`,
işlemin sıfır zaman aldığı değil, saydığımız işin `n` ile büyümediği anlamına
gelir.

#### Logaritmik büyüme — `O(log n)`

Binary search her adımda olası aralığı yaklaşık yarıya indirir. Kaç kez ikiye
bölerek 1’e ulaşabildiğimizi sorarız:

| `n` | Yaklaşık yarılama sayısı |
|---:|---:|
| 8 | 3 |
| 16 | 4 |
| 1.024 | 10 |
| 1.048.576 | 20 |

Girdi iki katına çıktığında yalnızca yaklaşık bir ek adım gerekir. Logaritmanın
tabanı asimptotik sınıfı değiştirmez; binary search zihinsel modelinde taban 2
doğaldır.

#### Doğrusal büyüme — `O(n)`

Linear search’ün en kötü durumunda her öğe incelenir. Girdi iki katına çıkarsa
karşılaştırma üst sınırı da yaklaşık iki katına çıkar.

#### Karesel büyüme — `O(n²)`

Her öğe için yaklaşık `n` öğe inceleyen iç içe yapı karesel davranış
üretebilir:

```js
function countEqualPairs(values) {
  let equalPairs = 0;

  for (let left = 0; left < values.length; left += 1) {
    for (let right = left + 1; right < values.length; right += 1) {
      if (values[left] === values[right]) {
        equalPairs += 1;
      }
    }
  }

  return equalPairs;
}
```

`left`, ilk kaydın index’i; `right`, yalnızca onun sağındaki adayları gezen
index’tir. Aynı çifti ters yönde tekrar karşılaştırmamak ve bir değeri
kendisiyle eşlememek için `right = left + 1` kullanılır.

Karşılaştırma sayısı tam olarak `n(n - 1) / 2`dir. `n = 4` için `6`, `n = 8`
için `28`, `n = 100` için `4.950` olur. Formülü açarsak `(n² - n) / 2`
görürüz. Baskın terim `n²` olduğu için büyüme kareseldir.

İki kat büyümenin etkisi:

| `n` | `log₂ n` | `n` | `n²` |
|---:|---:|---:|---:|
| 10 | ≈ 3,3 | 10 | 100 |
| 100 | ≈ 6,6 | 100 | 10.000 |
| 1.000 | ≈ 10 | 1.000 | 1.000.000 |
| 10.000 | ≈ 13,3 | 10.000 | 100.000.000 |

Bu tablo çalışma süresi değildir. Aynı soyut birimde büyüme karşılaştırmasıdır.

### Her iç içe döngü `O(n²)` değildir

Kodun görüntüsüne bakıp etiket yapıştırmayın. İki farklı koleksiyon varsa:

```js
function matchingIds(chapters, bookmarks) {
  let matches = 0;

  for (const chapter of chapters) {
    for (const bookmark of bookmarks) {
      if (chapter.id === bookmark.chapterId) {
        matches += 1;
      }
    }
  }

  return matches;
}
```

`chapters.length = n`, `bookmarks.length = m` ise karşılaştırma sayısı `n × m`
olur. Yalnız `n` ile `m`nin aynı ölçekte olduğunu açıkça varsayarsak bunu
`O(n²)` diye sadeleştirebiliriz.

Aynı şekilde bir `while` döngüsü index’i her turda iki katına çıkarıyorsa `n`
tur değil, yaklaşık `log n` tur çalışabilir. Analiz döngü sayısını değil,
değişkenlerin nasıl ilerlediğini inceler.

### C21 ve C22 ölçümlerini sınıflandırmak

| Algoritma ve durum | Temel işlem modeli | Büyüme |
|---|---|---|
| Linear search, en iyi | 1 karşılaştırma | `Θ(1)` |
| Linear search, en kötü | `n` karşılaştırma | `Θ(n)` |
| Binary search, en kötü | Aralığı yarılama | `Θ(log n)` |
| Selection sort | `n(n-1)/2` karşılaştırma | `Θ(n²)` |
| Insertion sort, sıralı | Yaklaşık `n-1` karşılaştırma | `Θ(n)` |
| Insertion sort, ters | Yaklaşık `n(n-1)/2` shift | `Θ(n²)` |

Burada `Θ` kullanmamız bilinçlidir: Yalnız üst sınır değil, ilgili durumdaki
sıkı büyüme derecesini söylüyoruz.

### Big O, Big Omega ve Big Theta

Big O, asimptotik üst sınırı anlatır. Yeterince büyük girdilerde maliyetin
belirtilen büyümeden daha hızlı artmadığını söyler. `3n + 2`, `O(n)`dir; aynı
zamanda gevşek biçimde `O(n²)` de denebilir. Fakat ikinci ifade daha az bilgi
verir.

Big Omega (`Ω`) asimptotik alt sınırı anlatır. Big Theta (`Θ`) hem üst hem alt
sınırın aynı büyüme ailesinde olduğunu, yani sıkı sınırı belirtir.

Gündelik yazılım konuşmalarında “Big O” bazen genel büyüme sınıfının kısa adı
gibi kullanılır. Teknik bir açıklamada iddianızı netleştirin:

- “Linear search worst case `Θ(n)`dir.”
- “Worst-case maliyeti `O(n)` ile üstten sınırlıdır.”
- “Best case `Θ(1)`dir.”

Bu üç cümle birbiriyle çelişmez; farklı sınır veya durumları anlatır.

### Zaman karmaşıklığı ile alan karmaşıklığı

Zaman karmaşıklığı (time complexity), seçilen temel işlemin girdiyle nasıl
büyüdüğünü inceler. Alan karmaşıklığı (space complexity), algoritmanın ihtiyaç
duyduğu ek belleğin nasıl büyüdüğünü inceler.

C22’deki selection sort çekirdeği aynı array üzerinde swap yaparsa birkaç
değişken kullanır: ek alan `O(1)`dir. Fakat orijinal array’i korumak için
`[...values]` kopyası üretirsek ek array `n` eleman taşır ve API’nin yardımcı
alanı `O(n)` olur.

C19’daki recursion da alan kullanabilir. Her aktif çağrı stack frame’i taşır.
Çağrı derinliği `n` ile büyüyorsa yardımcı stack alanı da `O(n)` olabilir.
Yalnız değişken sayısına bakmak, gizli call stack maliyetini kaçırır.

### Benchmark: tamamlayıcı deney, complexity kanıtı değil

```js
const startedAt = performance.now();
const result = linearSearchWithMetrics(chapterIds, 23);
const finishedAt = performance.now();

console.log({
  elapsedMilliseconds: finishedAt - startedAt,
  comparisons: result.comparisons,
});
```

`startedAt` ve `finishedAt`, yüksek çözünürlüklü monotonic zaman damgası taşıyan
number değerleridir. Fark, o çalıştırmadaki yaklaşık geçen süreyi verir.
`comparisons` ise seçtiğimiz maliyet modelinin deterministik kanıtıdır.

Tek ölçüm; motor ısınması, JIT optimizasyonu, garbage collection, arka plan
yükü ve ölçüm çözünürlüğünden etkilenebilir. Benchmark yapacaksanız girdiyi,
ortamı, tekrar sayısını ve ölçüm yöntemini kaydedin. Birkaç küçük ölçümden
asimptotik sınıfı ispatlamaya çalışmayın.

## Engineering Perspective

Algoritma seçimi tek sütunlu bir yarış değildir. Önce iki çözümün de doğru
olduğunu ve aynı gereksinimi karşıladığını doğrularız. Sonra bağlamı inceleriz:

| Ölçüt | Sorulacak soru |
|---|---|
| Beklenen `n` | Veri gerçekten ne kadar büyüyecek? |
| Zaman | Kritik temel işlem nasıl büyüyor? |
| Ek alan | Kopya, yardımcı yapı veya call stack büyüyor mu? |
| Input shape | Sıralı, ters, duplicate veya neredeyse sıralı mı? |
| Okunabilirlik | Ekip çözümü güvenle değiştirebilir mi? |
| Doğrulama | Daha karmaşık çözüm için yeterli test var mı? |
| Değişim maliyeti | Gereksinim değişince yapı sürdürülebilir mi? |

On öğelik, günde bir kez çalışan bir yönetim aracı için açık ve doğrulanmış
`O(n²)` çözüm yeterli olabilir. Milyonlarca öğede kullanıcı isteği başına
çalışan aynı çözüm kabul edilemez olabilir. Buna karşılık teorik olarak daha
iyi büyüyen fakat yanlış, anlaşılmaz veya ölçülmemiş çözüm profesyonel değildir.

“Önce doğruluk, sonra kanıt, sonra ihtiyaç varsa optimizasyon” iyi bir çalışma
sırasıdır. Bu, performansı önemsememek değildir; yanlış problemi erken optimize
etmemektir.

### O(n) her zaman O(n²)’den hızlı mıdır?

Hayır, belirli ve küçük bir girdi için garanti değildir. `1000n` işlem yapan
doğrusal çözüm, `n²` işlem yapan basit çözümden `n = 10` için daha çok iş
yapabilir. Fakat `n` büyümeye devam ettiğinde karesel terim sonunda baskın
olur.

Big O, yeterince büyük girdilerdeki büyüme davranışını karşılaştırır; belirli
bir cihazdaki her `n` için hız sıralaması vermez. Bu nedenle complexity,
profiling ve ürün gereksinimi birlikte değerlendirilir.

## Real World Examples

ASEA aramasında katalog küçük ve sırasızsa linear search sade ve yeterli
olabilir. Katalog önceden sıralı ve her saniye çok sayıda arama alıyorsa binary
search’ün logaritmik büyümesi değerlidir. Fakat sıralı sözleşmeyi üretme ve
koruma maliyeti de karar notuna eklenmelidir.

Dashboard’da her render sırasında tüm chapter çiftlerini karşılaştırmak küçük
veride görünmezken akademi sayısı büyüdüğünde sorun olabilir. Doğru veri modeli
ve lookup yapısı karesel taramayı azaltabilir; bu yapının ek alan maliyeti vardır.

Bir API’den veri çekmekte ağ gecikmesi, array üzerindeki birkaç karşılaştırmadan
çok daha baskın olabilir. Yine de gereksiz `O(n²)` istemci işlemi veri büyüdükçe
kullanıcı deneyimini etkiler. Cost model bağlama göre ağ isteği, veri tabanı
erişimi veya karşılaştırma sayabilir.

Mobil cihazda ek `O(n)` kopya, masaüstünde önemsiz görünen bellek maliyetini
kritik hâle getirebilir. Aynı algoritmik karar farklı çalışma ortamlarında
farklı ödünleşim taşır.

## Common Mistakes

### Big O’yu kronometre sonucu sanmak

Belirti: “Fonksiyon 2 ms sürdü, yani O(2)” denir. Milisaniye ölçümü belirli
çalıştırmaya, Big O ise girdi büyüdükçe büyüme sınırına aittir.

### Her döngüye `O(n)` etiketi vermek

Döngü sabit beş kez çalışabilir, her turda iki kat ilerleyebilir veya başka bir
`m` girdisine bağlı olabilir. Değişim kuralını ve sınırı inceleyin.

### Her iç içe döngüyü `O(n²)` sanmak

İki bağımsız boyut `n × m` olabilir. İç döngü toplamda yalnız `n` kez de
ilerleyebilir. Görüntü değil toplam temel işlem sayısı kanıttır.

### Best case’i genel performans gibi sunmak

Linear search ilk öğede `Θ(1)` olabilir; ama hedefin her zaman ilk öğede
olacağına dair ürün kanıtı yoksa bu tek başına kapasite kararı vermez.

### Sabitleri tamamen önemsiz sanmak

Asimptotik sınıflandırmada sabitleri eleriz. Gerçek küçük/orta girdide pahalı
işlem, bellek erişimi ve ağ maliyeti önemini korur.

### Alan maliyetini unutmak

Daha hızlı arama için index veya map üretmek zaman kazandırabilir fakat bellek
ve güncelleme maliyeti ekler. Recursive çözümün call stack’i de ek alandır.

### Yanlış algoritmayı daha hızlı yapmak

Önce doğru sonuç ve sözleşme test edilmelidir. Hatalı çözümün benchmark’ta hızlı
çıkması başarı değildir.

## Best Practices

- `n` ve varsa `m`nin neyi temsil ettiğini yazın.
- Sayılan temel işlemi açıkça belirtin.
- Best, average veya worst case’ten hangisini analiz ettiğinizi söyleyin.
- Mümkünse önce kesin veya yaklaşık `T(n)` modeli kurun, sonra sadeleştirin.
- `O`, `Ω` ve `Θ` iddialarını birbirinin yerine gelişigüzel kullanmayın.
- Time ve auxiliary space analizini ayrı yazın.
- Complexity analizini gerçekçi benchmark ve profiling ile tamamlayın.
- Kararı expected input size, correctness, readability ve bakım maliyetiyle
  birlikte savunun.
- Optimizasyon öncesinde ölçülebilir performans hedefi belirleyin.
- Analiz varsayımlarını test ve karar notuyla saklayın.

## Hands-on Exercise

### Birlikte yapalım

Linear ve binary search için `n = 8, 16, 32, 64` girdilerini hazırlayın.
Bulunamayan target kullanarak comparison sayılarını kaydedin.

| `n` | Linear comparisons | Binary comparisons |
|---:|---:|---:|
| 8 | 8 | yaklaşık 4 |
| 16 | 16 | yaklaşık 5 |
| 32 | 32 | yaklaşık 6 |
| 64 | 64 | yaklaşık 7 |

Binary sayısı implementasyon ve aranan duruma göre bir adım farklılaşabilir;
önemli olan her iki kat büyümede yaklaşık bir ek karşılaştırmadır.

### Şimdi sen dene

C22 metrics fonksiyonlarını `n = 5, 10, 20, 40` için çalıştırın. Selection
sort karşılaştırma sayısını ve insertion sort’un sıralı/ters girdi shift
sayılarını tabloya yazın. `n` iki katına çıktığında oranın nasıl değiştiğini
açıklayın.

### Hata avı

Aşağıdaki yorumları kanıtla düzeltin:

```js
function inspect(values) {
  for (let index = 1; index < values.length; index *= 2) {
    console.log(values[index]);
  }
}

// Bir döngü var, o hâlde kesin O(n).
```

`index` değerlerini `1, 2, 4, 8...` diye izleyin. Her turda kalan mesafe bir
azalmıyor; erişilen index iki katına çıkıyor. Tur sayısı logaritmiktir.

### Kademeli ipuçları

1. İlk olarak girdi büyüklüğünü isimlendirin.
2. Döngü değişkeninin her turda nasıl değiştiğini yazın.
3. Kaç değişimden sonra sınıra ulaşacağını küçük `n`lerle tabloya dökün.
4. `n` iki katına çıktığında tur sayısına ne olduğunu gözleyin.
5. Büyüme sınıfını ancak bu kanıttan sonra adlandırın.

### Bağımsız uygulama

Algorithm Workbench’e şu raporu ekleyin:

```js
const analysisReport = {
  algorithm: "linear-search",
  inputSize: 64,
  caseType: "worst",
  costModel: "target comparisons",
  operations: 64,
  timeGrowth: "Theta(n)",
  auxiliarySpaceGrowth: "O(1)",
  decisionNote: "Sırasız ve küçük katalog için yeterli.",
};
```

Linear search, binary search, selection sort ve insertion sort için en az dört
farklı `n` ölçümü üretin. Her algoritmada input shape ve case type bilgisini
kaydedin. Sonunda iki senaryo için gerekçeli seçim yazın.

### Gerçek proje bağlantısı

Bu çalışma `V01-P06 Algorithm Workbench` projesinin kapanış artımıdır. Proje
artık algoritmayı çalıştırmakla kalmaz; maliyet modelini, ölçümü, büyüme
sınıfını ve mühendislik kararını birlikte sunar. Bu analiz disiplini C25’te
debug hipotezlerini ölçerken, C27’de refactoring kararlarını savunurken yeniden
kullanılacaktır.

## Reflection Questions

1. Daha önce Big O’yu gerçek çalışma süresiyle karıştırıyor muydunuz?
2. Bir kod parçasında `n`yi seçerken hangi hata yapılabilir?
3. C21 veya C22 ölçümlerinden hangisi büyüme sınıfını en görünür yaptı?
4. `O(n)` çözümün küçük girdide `O(n²)` çözümden yavaş olabileceğini nasıl
   açıklarsınız?
5. Zaman kazanmak için ek alan kullanmayı hangi üründe kabul edersiniz?
6. Bir sonraki performans kararınızda hangi beş bilgiyi kaydedeceksiniz?

## Chapter Summary

Algoritmik analiz, girdi büyüdüğünde iş ve ek kaynak ihtiyacının nasıl
büyüdüğünü inceler. İlk adım `n`nin neyi temsil ettiğini ve hangi temel işlemi
saydığımızı açıklamaktır. Kesin `T(n)` modeli kurulduktan sonra sabit katsayılar
ve düşük dereceli terimler sadeleştirilerek büyüme ailesi belirlenir.

Sabit `O(1)`, logaritmik `O(log n)`, doğrusal `O(n)` ve karesel `O(n²)`
büyümeler farklı ölçek davranışları taşır. Big O üst sınır, Ω alt sınır, Θ sıkı
sınır iddiasıdır. Best, average ve worst case ayrı girdi koşullarıdır.

Zaman karmaşıklığı gerçek milisaniye değildir. Benchmark belirli ortamın
ölçümünü, complexity ise ölçek modelini verir. Profesyonel seçim; doğruluk,
zaman, yardımcı alan, okunabilirlik, input shape, beklenen `n` ve değişim
maliyetini birlikte değerlendirir.

## Key Takeaways

- `n` her problemde aynı şeyi temsil etmez.
- Cost model hangi temel işlemi saydığımızı açıklar.
- Big O milisaniye değil, asimptotik üst sınırdır.
- Θ sıkı büyüme sınırını belirtir.
- Bir döngü otomatik `O(n)`, iki döngü otomatik `O(n²)` değildir.
- Linear search worst case `Θ(n)`, binary search worst case `Θ(log n)`dir.
- Selection sort karşılaştırmaları `Θ(n²)` büyür.
- Insertion sort input shape’e duyarlıdır.
- Zaman ve yardımcı alan ayrı incelenmelidir.
- En iyi mühendislik kararı yalnızca en küçük Big O etiketi değildir.

## Further Reading

Önce lab’da kendi operation-count tablolarınızı üretin. Sonra MIT 6.006’nın
asimptotik analiz notlarında üst, alt ve sıkı sınır ayrımını inceleyin. NIST
Algorithms and Data Structures Dictionary’de complexity ve Big O tanımlarını
karşılaştırın. Benchmark yaparken MDN `performance.now()` sözleşmesini okuyun;
tek ölçümün algoritmik ispat olmadığını koruyun.

## References

- [MIT 6.006 — Introduction and Asymptotic Notation](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/477c78e0af2df61fa205bcc6cb613ceb_MIT6_006S20_lec1.pdf)
- [MIT 6.006 — Asymptotic Complexity Recitation](https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/c6d8f06c6f11e3342633dec85498f551_MIT6_006S20_r01.pdf)
- [MIT 6.006 — Course Expectations](https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/syllabus/)
- [NIST — Complexity](https://xlinux.nist.gov/dads/HTML/complexity.html)
- [MDN — Performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
