---
title: "Koleksiyonlar ve Yineleme — Çok Sayıda Değeri Güvenle İşlemek"
volume: "01"
chapter: "17"
chapter_id: "V01-C17"
slug: "koleksiyonlar-ve-yineleme"
difficulty: "Beginner"
estimated_time: "8-10 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C17-BP01"
production_packet_id: "V01-C17-CPP-001"
prerequisites:
  - "V01-C11"
  - "V01-C14"
  - "V01-C15"
  - "V01-C16"
learning_objectives:
  - "V01-LO025"
  - "V01-LO026"
last_updated: "2026-07-23"
---

# Koleksiyonlar ve Yineleme — Çok Sayıda Değeri Güvenle İşlemek

## Learning Objectives

Bir uygulama yalnızca tek bir sıcaklık, tek bir sipariş veya tek bir öğrenci
puanıyla çalışsaydı değişkenler çoğu sorunu çözebilirdi. Gerçek sistemler ise yüzlerce
ürünü, binlerce ölçümü ve milyonlarca olayı işler. Bu bölümde çok sayıda değeri
bir arada tutmanın ötesine geçeceğiz: verinin hangi sırayla saklandığını, her
öğeye nasıl erişildiğini, koleksiyonun nasıl dolaşıldığını ve güvenilir bir özetin
nasıl üretildiğini öğreneceğiz.

Bölüm sonunda şunları yapabileceksiniz:

- Koleksiyon (Collection), dizi (Array), öğe (Element), indeks (Index) ve uzunluk
  (Length) kavramlarını birbirinden ayırmak.
- JavaScript dizisinin sabit boyutlu bir bellek kutusu değil, özel davranışları
  bulunan dinamik ve sıralı bir veri yapısı olduğunu açıklamak.
- Sıfır tabanlı indekslemeyi kullanarak ilk, son ve belirli konumdaki öğeye güvenli
  biçimde erişmek.
- Boş, tek öğeli ve çok öğeli koleksiyonlarda algoritmanın davranışını önceden
  tanımlamak.
- Sınır dışı erişimi, `undefined` değerini ve boş konumu birbirinden ayırmak.
- Başlangıç, sınır, adım, geçerli öğe ve döngü değişmezinden oluşan bir dolaşma
  sözleşmesi kurmak.
- İndeksli `for`, değer odaklı `for...of`, `forEach`, `map`, `filter` ve `reduce`
  araçlarını amaçlarına göre seçmek.
- Eşleme (Mapping), süzme (Filtering), indirgeme (Reduction) ve toplulaştırma
  (Aggregation) işlemlerini çalışan JavaScript koduyla gerçekleştirmek.
- Toplam, adet, ortalama, minimum ve maksimum değerleri sınır durumlarını gözeterek
  hesaplamak.
- Koleksiyonu dolaşırken aynı koleksiyonu değiştirmenin neden riskli olduğunu
  örneklerle göstermek.
- Birden çok açık geçiş ile tek karmaşık geçiş arasında okunabilirlik, bellek ve
  performans kanıtına dayalı karar vermek.
- AI tarafından üretilen koleksiyon kodunu sınır, başlangıç değeri, yan etki,
  mutation ve test yeterliliği bakımından denetlemek.

`V01-LO025` için kanıtınız, farklı büyüklükte dizileri güvenli biçimde dolaşan ve
dönüştüren bir program olacaktır. `V01-LO026` için kanıtınız, puan koleksiyonunu
doğrulayan; toplam, ortalama, minimum, maksimum ve başarı dağılımı çıkaran bir
analiz ile bu analizin test matrisidir. Yalnız doğru görünen çıktı yeterli değildir:
boş giriş kararı, geçersiz veri politikası ve kaynak dizinin değişip değişmediği
de açıklanmalıdır.

## Prerequisites

Bu bölüm `V01-C11` ile kurulan döngü sözleşmesine, `V01-C14` ile öğrenilen parametre
ve dönüş değerlerine, `V01-C15` ile açıklanan kapsam ve yan etki sınırlarına ve
`V01-C16` ile geliştirilen işlevsel ayrıştırmaya dayanır. Aşağıdaki kodu okuyup
sonucunu açıklayabiliyorsanız hazır sayılırsınız:

```js
function calculateSquare(number) {
  return number * number;
}

for (let current = 1; current <= 3; current += 1) {
  console.log(calculateSquare(current));
}
```

Burada fonksiyon her çağrıda bir sayı alır ve bir sayı döndürür. Döngü ise üç
ayrı çağrı yapar. Bu bölümde asıl değişiklik, değerlerin tek tek değişkenlerden
gelmesi yerine bir koleksiyonda bulunmasıdır. Fonksiyon sözleşmesi fikri ortadan
kalkmayacak; tam tersine koleksiyonun türü, öğe türü, boşluk davranışı ve dönüş
koleksiyonunun yapısı sözleşmeye eklenecektir.

Çalışmaya başlamadan önce bilgisayarınızda güncel bir Node.js sürümünün ve bir
metin düzenleyicinin bulunması yararlıdır. Örnekleri bir `.js` dosyasına yazıp
`node dosya-adi.js` komutuyla çalıştırabilirsiniz. Her örneği önce kâğıt üzerinde
tahmin edin, sonra çalıştırın ve tahmininizle gerçek sonucu karşılaştırın. Hata
mesajını silmek yerine notunuza ekleyin; çünkü hata, zihinsel modeliniz ile çalışma
zamanının gerçek davranışı arasındaki farkı gösterir.

Hazırlık kontrolü:

1. `let` ile değişken tanımlayabiliyor musunuz?
2. Bir fonksiyona parametre gönderip dönüş değerini kullanabiliyor musunuz?
3. `for` döngüsünde başlangıç, koşul ve adımı ayırabiliyor musunuz?
4. `if` ile geçersiz girdiyi reddedebiliyor musunuz?
5. Bir fonksiyonun dış değişkeni değiştirmesiyle değer döndürmesi arasındaki farkı
   açıklayabiliyor musunuz?

Bu maddelerden biri belirsizse ilgili ön koşul bölümüne kısa bir dönüş yapın.
Ama her ayrıntıyı ezberlemeyi beklemeyin. Bu bölüm, önceki kavramları gerçek bir
veri işleme problemi içinde tekrar kullanmanıza yardım edecektir.

## Estimated Study Time

Ana dersi dikkatle okumak ve kodları elle çalıştırmak yaklaşık dört saat sürer.
Not çıkarma ve küçük tahmin deneyleri için bir buçuk saat, alıştırmalar için iki
saat, laboratuvar için iki ila üç saat ayırın. Quiz, mülakat hazırlığı ve bölüm
sonu öz değerlendirmeyle toplam çalışma süresi sekiz ile on saat arasındadır.

Bu süreyi tek oturumda tüketmeyin. Önerilen çalışma düzeni şöyledir:

- Birinci oturum: koleksiyon zihinsel modeli, indeks ve sınırlar.
- İkinci oturum: dolaşma sözleşmesi, `for`, `for...of` ve değişmezler.
- Üçüncü oturum: `map`, `filter`, `reduce` ve toplulaştırma.
- Dördüncü oturum: mutation, hata politikası, test ve mühendislik kararları.
- Beşinci oturum: alıştırmalar, lab, challenge ve öz değerlendirme.

Her oturumun sonunda kodu kapatıp şu üç cümleyi kendi kelimelerinizle yazın:
“Bugün öğrendiğim temel fikir…”, “En çok karıştırdığım nokta…” ve “Bunu gerçek bir
programda şu amaçla kullanırım…”. Notunuz kodun kopyası değil, kararların açıklaması
olmalıdır. Özellikle boş koleksiyon ve geçersiz öğe kararlarını yazmak, sonraki
algoritma bölümlerinde büyük zaman kazandırır.

## Introduction

Bir öğretmenin beş öğrencinin notunu değerlendirdiğini düşünün. Ayrı değişkenlerle
başlayabilir:

```js
const score1 = 72;
const score2 = 88;
const score3 = 91;
const score4 = 64;
const score5 = 79;
```

Beş değer için bu kod katlanılabilir görünür. Fakat altıncı öğrenci geldiğinde yeni
değişken, yeni toplama satırı ve belki yeni karşılaştırma gerekir. Öğrenci sayısı
önceden bilinmiyorsa programın yapısı veri miktarına göre sürekli değişir. Bu,
veri ile program yapısının yanlış bağlandığını gösterir. İhtiyacımız “kaç puan
olursa olsun aynı işlemleri uygula” sözleşmesidir.

```js
const scores = [72, 88, 91, 64, 79];
```

Bu satır beş sayıyı sıralı bir koleksiyonda tutar. Fakat yalnız köşeli parantez
kullanmak problemi çözmez. Şimdi yeni sorular doğar: İlk puan hangisidir? Son puana
nasıl ulaşılır? Her puan tam olarak bir kez nasıl işlenir? Koleksiyon boşsa ortalama
nedir? İçinde yanlışlıkla `"88"` metni varsa ne olur? Dolaşma sırasında öğe silersek
hangi değer atlanır? Profesyonel koleksiyon kodu bu sorulara görünür cevap verir.

Koleksiyonları öğrenirken sık yapılan hata, yöntemi sonucun adıyla ezberlemektir:
“`map` dönüştürür, `filter` seçer, `reduce` toplar.” Bu cümleler başlangıç için
yararlıdır fakat yetmez. Bir yöntemi doğru kullanmak için giriş ve çıkış
sözleşmesini bilmelisiniz. `map` kaç öğe döndürür? `filter` kaynak diziyi değiştirir
mi? `reduce` boş dizide başlangıç değeri olmadan ne yapar? Callback içinde dış
durumu değiştirirseniz kod hâlâ güvenilir midir? Bu bölüm, yöntem isimlerinden önce
bu sözleşmeleri kuracaktır.

Gerçek iş hayatında koleksiyonlar her yerdedir: API'den gelen siparişler, günlük
kayıtları, ödeme hareketleri, sensör ölçümleri, test sonuçları, kullanıcı izinleri
ve yapılandırma seçenekleri. Bu verilerin küçük bir bölümünü yanlış atlamak bile
yanlış fatura, görünmeyen hata veya hatalı karar üretebilir. Bu nedenle koleksiyon
dolaşması “basit döngü konusu” değil, doğruluk sınırı olan bir mühendislik işidir.

Bu bölüm boyunca puan analizi örneğini büyüteceğiz. Önce veriyi okuyacağız; sonra
geçerli puanları ayıracak, puanları harf notuna dönüştürecek ve özet sonuçlar
üreteceğiz. En sonunda aynı gereksinimi birden çok açık geçişle ve tek geçişle
çözüp iki tasarımı karşılaştıracağız. Ama hedef, en kısa kodu yazmak değildir.
Hedef, başka bir mühendisin doğruluğunu denetleyebileceği kod ve kanıt üretmektir.

## Core Concepts

### Koleksiyon bir kap değil, sözleşmedir

Koleksiyonu “birden çok değeri tutan kutu” olarak düşünmek ilk adım için işe yarar,
ama mühendislik için eksiktir. Koleksiyon; öğelerin düzenini, erişim biçimini,
tekrar politikasını ve değiştirilebilirliğini belirleyen bir sözleşmedir. Sıralı
bir listede ilk ve son kavramları anlamlıdır. Anahtar–değer yapısında ise erişim
sayısal konumdan çok anahtara dayanır. Kümede bir değerin bulunup bulunmadığı
önemlidir; tekrar eden aynı değer genellikle ayrı öğeler olarak tutulmaz.

Bu bölümün ana aracı dizidir. Dizi, öğelerin bir sıra içinde bulunduğu ve çoğu
zaman sayısal indeksle erişildiği koleksiyondur. Farklı dillerin dizi davranışları
aynı değildir. C gibi dillerde klasik dizi sabit uzunluk ve bitişik bellek fikrine
yakındır. JavaScript dizisi ise dinamik uzunluklu bir nesnedir. Bu nedenle “dizi
her dilde tam olarak şudur” demek yerine kullandığınız dilin resmî sözleşmesini
okumalısınız.

```js
const temperatures = [18, 21, 20, 23];

console.log(temperatures.length); // 4
console.log(temperatures[0]); // 18
console.log(temperatures[3]); // 23
```

Burada `temperatures` tek bir değişkendir; değeri bir dizi referansıdır. Dizinin
içinde dört öğe vardır. `length` uzunluğu, köşeli parantez ise belirli konumdaki
öğeyi verir. Değişkenin `const` olması dizinin bütün içeriğini değişmez yapmaz;
yalnız değişken adının başka bir değere yeniden bağlanmasını engeller.

```js
const temperatures = [18, 21];
temperatures.push(20); // Geçerli: aynı dizi değiştiriliyor.

// temperatures = [30, 31]; // Hata: değişken başka diziye bağlanamaz.
```

Bu ayrım önemlidir. “`const` dizi değişmezdir” cümlesi yanlıştır. Kaynak diziyi
değiştirmeme sözleşmesi istiyorsanız yalnız `const` yeterli değildir; kullandığınız
yöntemleri, fonksiyon sınırlarını ve gerekirse dondurma/kopyalama stratejisini
seçmelisiniz.

### Sıfır tabanlı indeks ve sınır

JavaScript dizilerinde ilk öğenin indeksi `0` olur. Bunun sonucunda `n` öğeli bir
dizinin geçerli indeksleri `0` ile `n - 1` arasındadır. Dört öğeli dizide son indeks
`3` olur. Uzunluk bir adet, indeks ise konumdur; aynı şeyi ölçmezler.

```text
Değer:   18   21   20   23
İndeks:   0    1    2    3
Uzunluk: 4
```

Son öğeye erişmek için:

```js
const lastIndex = temperatures.length - 1;
const lastTemperature = temperatures[lastIndex];
```

Modern JavaScript'te `temperatures.at(-1)` da son öğeyi verir. Buna karşılık
`temperatures[-1]`, başka dillerdeki gibi sondan erişmez. `-1` adında normal bir
nesne özelliği arar ve çoğu durumda `undefined` döndürür.

Sınır dışı okuma JavaScript'te her zaman açık hata üretmez:

```js
const scores = [70, 80, 90];
console.log(scores[3]); // undefined
```

Bu sessizlik tehlikelidir. Program devam edebilir ve `undefined + 10` sonucunda
`NaN` üretebilir. Bu yüzden dışarıdan gelen indeks doğrulanmalıdır:

```js
function readAt(values, index) {
  const isValidIndex = Number.isInteger(index)
    && index >= 0
    && index < values.length;

  if (!isValidIndex) {
    throw new RangeError("İndeks koleksiyon sınırları dışında.");
  }

  return values[index];
}
```

Bu fonksiyonun sözleşmesi sessiz `undefined` yerine açık hata seçer. Başka bir API
`{ found: false }` döndürebilir. Önemli olan tek doğru politika değil, politikanın
çağıran tarafından anlaşılmasıdır.

### Uzunluk her zaman gerçek öğe sayısı değildir

JavaScript dizisinin `length` özelliği, en büyük sayısal indeksin bir fazlasıyla
ilişkilidir. Uzak bir indekse değer yazmak arada boş konumlar oluşturabilir:

```js
const values = [10, 20];
values[5] = 60;

console.log(values.length); // 6
console.log(values); // [10, 20, <3 empty items>, 60]
```

Burada `length` altıdır, fakat açıkça atanmış yalnız üç değer vardır. Bu yapıya
seyrek dizi (Sparse Array) denir. Boş konum ile açık `undefined` aynı değildir:

```js
const withHole = [10, , 30];
const withUndefined = [10, undefined, 30];

console.log(1 in withHole); // false
console.log(1 in withUndefined); // true
```

Bazı yöntemler boş konum için callback çağırmaz. Bu, “`map` her indeks için kesin
çalışır” varsayımını bozar. Başlangıç seviyesinde seyrek dizi üretmeyin. Eksik
değer gerçek iş alanının parçasıysa onu `null`, açık bir durum nesnesi veya doğrulanmış
başka modelle temsil edin. Eksiklik ile teknik boşluğu birbirine karıştırmayın.

### Boş, tek öğeli ve çok öğeli durumlar

Bir algoritmayı yalnız üç normal örnekle denemek yanıltıcıdır. Önce veri biçimlerini
ayırın:

```js
const empty = [];
const singleton = [42];
const multiple = [42, 17, 91];
```

Toplam için boş dizide `0` mantıklıdır. Ortalama için `0` demek genellikle yanlıştır;
çünkü hiç gözlem yoktur. Minimum için de evrensel sayı yoktur. Bu nedenle sonucu
önceden tanımlayın:

```js
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total / numbers.length;
}
```

`null`, burada “ortalama mevcut değil” kararını temsil eder. Üretim sisteminde daha
zengin bir sonuç kullanılabilir:

```js
function calculateAverageResult(numbers) {
  if (numbers.length === 0) {
    return { ok: false, reason: "EMPTY_COLLECTION" };
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);
  return { ok: true, value: total / numbers.length };
}
```

Bu biçim, gerçek ortalamanın `0` olmasıyla ortalamanın bulunmamasını ayırır.

### Dolaşma sözleşmesi

Dolaşma, öğeleri belirli bir düzende ziyaret etmektir. Bir döngüyü yazmadan önce
beş soruyu cevaplayın:

1. Nereden başlıyorum?
2. Hangi koşulda devam ediyorum?
3. Her adımda nasıl ilerliyorum?
4. Şu anda hangi öğeyi işliyorum?
5. Her turun başında hangi ifade doğru kalıyor?

Son soru döngü değişmezi (Loop Invariant) fikridir. Örneğin toplam döngüsünde
“Her turun başında `total`, `0` ile `i - 1` arasındaki işlenmiş öğelerin toplamıdır”
değişmezi kullanılabilir:

```js
function sum(numbers) {
  let total = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }

  return total;
}
```

Başlangıçta hiç öğe işlenmemiştir ve toplam `0` doğru kimlik değeridir. Her turda
bir öğe eklenir, değişmez korunur. Döngü bittiğinde `index === numbers.length`
olduğundan bütün geçerli indeksler işlenmiştir. Bu açıklama, kodun neden doğru
olduğunu gösterir.

En yaygın sınır hatası şudur:

```js
for (let index = 0; index <= numbers.length; index += 1) {
  // Son turda numbers[numbers.length] okunur.
}
```

`<=` kullanımı bir fazla tur üretir. Bunu ezberlemenin ötesinde, geçerli son indeksin
`length - 1` olduğunu ve koşulun son indeksten sonra durması gerektiğini düşünün.

### İndeksli for ve değer odaklı for...of

Konuma ihtiyaç duyuyorsanız indeksli `for` açık seçimdir:

```js
const tasks = ["araştır", "uygula", "doğrula"];

for (let index = 0; index < tasks.length; index += 1) {
  console.log(`${index + 1}. adım: ${tasks[index]}`);
}
```

Yalnız değer gerekiyorsa `for...of` daha az hareketli parça taşır:

```js
for (const task of tasks) {
  console.log(task);
}
```

Hem indeks hem değer gerekiyorsa:

```js
for (const [index, task] of tasks.entries()) {
  console.log(index, task);
}
```

`for...in` dizinin değerlerini değil, enumerable özellik anahtarlarını dolaşır.
Bu nedenle dizilerde varsayılan dolaşma aracı olarak kullanılmamalıdır:

```js
for (const key in tasks) {
  console.log(key); // "0", "1", "2" gibi string anahtarlar
}
```

Araç seçimini kişisel zevk değil ihtiyaç belirler. Konum mantığı varsa indeksli
döngü; her değeri sırayla işlemek varsa `for...of`; yeni koleksiyon üretmek varsa
uygun dönüşüm yöntemi kullanılmalıdır.

### Dolaşma sırasında koleksiyonu değiştirmek

Şu kodun bütün çift sayıları sildiğini düşünebilirsiniz:

```js
const numbers = [2, 4, 6, 7];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 0) {
    numbers.splice(index, 1);
  }
}

console.log(numbers);
```

İlk turda `2` silinince `4`, indeks `0` konumuna kayar. Döngü indeksini `1` yapar
ve `4` ziyaret edilmeden geçilir. Bu hata, dolaşma imleci ile koleksiyon yapısının
aynı anda değişmesinden doğar. Güvenli çözüm yeni koleksiyon üretmektir:

```js
const numbers = [2, 4, 6, 7];
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
```

Yerinde silmek zorunluysa sondan başa dolaşmak bazı indeks kaymalarını önleyebilir;
fakat bunun gerekçesi yorum ve testle görünür olmalıdır. Çoğu uygulama kodunda
hesaplama aşamasında yeni sonuç üretmek daha kolay denetlenir.

### Eşleme: her öğeyi dönüştürmek

Eşleme, kaynak koleksiyondaki her mevcut öğeyi bir sonuç öğesine dönüştürür. JavaScript
`map` yöntemi yeni bir dizi döndürür ve normal yoğun dizide uzunluğu korur:

```js
const prices = [100, 250, 80];
const pricesWithTax = prices.map((price) => price * 1.2);

console.log(pricesWithTax); // [120, 300, 96]
console.log(prices); // [100, 250, 80]
```

Callback'in dönüş değeri yeni dizinin öğesidir. Süslü parantez kullanıp `return`
unutursanız sonuç `undefined` değerlerinden oluşur:

```js
const broken = prices.map((price) => {
  price * 1.2;
});
```

Doğrusu:

```js
const fixed = prices.map((price) => {
  return price * 1.2;
});
```

`map` kullanıp sonucunu hiçbir yerde kullanmamak niyet uyuşmazlığıdır. Yalnız ekrana
yazmak veya dış sisteme etki göndermek istiyorsanız `map` yeni ve gereksiz bir
dizi üretir. “Her öğeden yeni öğe üret” sözleşmesi yoksa başka araç seçin.

Nesne öğelerinde sığ kopya (Shallow Copy) ayrımını unutmayın:

```js
const users = [{ name: "Ada", active: false }];
const activated = users.map((user) => ({ ...user, active: true }));
```

Yeni nesne oluşturulduğu için kaynak kullanıcı değişmez. Buna karşılık callback
içinde `user.active = true` yapmak kaynak nesneyi de değiştirir. `map` yeni dış
dizi üretse bile iç nesneleri otomatik derin kopyalamaz.

### Süzme: koşulu sağlayanları seçmek

Süzme, her öğeyi bir koşulla değerlendirir ve doğru kabul edilenleri yeni diziye
alır:

```js
const scores = [42, 75, 91, 58, 83];
const passingScores = scores.filter((score) => score >= 60);

console.log(passingScores); // [75, 91, 83]
```

Süzme sonucu boş olabilir, kaynakla aynı uzunlukta olabilir veya arada bir uzunlukta
olabilir. Koşulun adı iş kuralını anlatmalıdır:

```js
function isPassingScore(score) {
  return score >= 60;
}

const passingScores = scores.filter(isPassingScore);
```

Bu sürümde “60 ne demek?” sorusu fonksiyon adıyla kısmen cevaplanır. Daha gerçekçi
sistemde eşik parametre olabilir. Callback içinde kaynak öğeyi değiştirmeyin;
seçme ve dönüştürme sorumluluklarını ayırın. Önce geçerli kayıtları `filter` ile
seçip sonra `map` ile dönüştürmek, tek callback içinde gizli iki işi yürütmekten
daha okunabilir olabilir.

### İndirgeme ve biriktirici

İndirgeme, çok sayıda öğeyi bir sonuçta birleştirir. `reduce` callback'i biriktirici
(Accumulator) ve sıradaki öğeyi alır:

```js
const scores = [72, 88, 91];
const total = scores.reduce((sum, score) => sum + score, 0);
```

Adımları görünür yapalım:

```text
Başlangıç: sum = 0
1. öğe:    sum = 0 + 72 = 72
2. öğe:    sum = 72 + 88 = 160
3. öğe:    sum = 160 + 91 = 251
Sonuç: 251
```

Buradaki `0` başlangıç değeri rastgele değildir; toplamanın kimlik öğesidir. Boş
dizide callback hiç çalışmaz ve sonuç `0` olur. Başlangıç değeri verilmezse ilk
öğe biriktirici kabul edilir; boş dizide ise `TypeError` oluşur:

```js
[].reduce((sum, value) => sum + value); // TypeError
```

Bu yüzden başlangıç değerini açıkça vermek güvenli varsayılandır. Biriktiricinin
türü, beklenen sonuç türüne uymalıdır:

```js
const words = ["elma", "armut", "elma"];

const counts = words.reduce((result, word) => {
  result[word] = (result[word] ?? 0) + 1;
  return result;
}, {});
```

Bu örnek nesneyi yerinde değiştirir. Yerel biriktiriciye yapılan kontrollü mutation
performans için kabul edilebilir; fakat dışarıdan paylaşılmamalı ve callback her
turda aynı nesneyi döndürmelidir. Tamamen kopyalı sürüm daha açık olabilir ama her
turda nesne kopyalama maliyeti doğurur. Kararı sloganla değil veri büyüklüğü,
okunabilirlik ve ölçümle verin.

### Toplam, ortalama, minimum ve maksimum

Temel analiz fonksiyonlarını ayrı sözleşmelerle yazalım:

```js
function calculateTotal(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  return calculateTotal(numbers) / numbers.length;
}

function findMinimum(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let minimum = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < minimum) {
      minimum = numbers[index];
    }
  }

  return minimum;
}
```

Minimum döngüsü neden indeks `1` ile başlar? Çünkü `numbers[0]` başlangıç adayıdır
ve kendisiyle yeniden karşılaştırılması gerekmez. `minimum = 0` ile başlamak hatalıdır;
örneğin `[4, 8]` için koleksiyonda bulunmayan `0` sonucu çıkar. `Infinity` kullanmak
başka bir yaklaşım olabilir, fakat boş koleksiyon davranışı yine açıkça ele alınmalıdır.

Maksimum aynı desenin karşılaştırma yönü değiştirilmiş hâlidir. Tek fonksiyonda
hem minimum hem maksimum isteniyorsa tek geçişte ikisi birlikte izlenebilir:

```js
function findRange(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let minimum = numbers[0];
  let maximum = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    const number = numbers[index];

    if (number < minimum) minimum = number;
    if (number > maximum) maximum = number;
  }

  return { minimum, maximum };
}
```

Bu fonksiyonun değişmezi şudur: Her turun başında `minimum` ve `maximum`, daha önce
işlenmiş alt dizinin sınırlarıdır. Son tur bittiğinde bütün dizi için doğrudur.

### Veri doğrulama koleksiyondan önce gelir

JavaScript toplama işlemi tür dönüşümü nedeniyle yanıltıcı olabilir:

```js
console.log([10, "20", 30].reduce((sum, value) => sum + value, 0));
// "0102030"
```

İkinci öğe metin olduğu için `+` birleştirme davranışına geçer. Çözüm her şeyi
körü körüne `Number` yapmak değildir; çünkü `Number("")` sıfır üretir ve bozuk
veriyi gizleyebilir. Önce sözleşme yazın:

```js
function isValidScore(value) {
  return Number.isFinite(value) && value >= 0 && value <= 100;
}

function validateScores(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("Puanlar bir dizi olmalıdır.");
  }

  const invalidEntries = values
    .map((value, index) => ({ index, value }))
    .filter((entry) => !isValidScore(entry.value));

  return {
    ok: invalidEntries.length === 0,
    invalidEntries,
  };
}
```

Bu fonksiyon yanlış öğeyi sessizce atmaz; konumuyla raporlar. Çağıran, analizi
durdurma veya kullanıcıdan düzeltme isteme kararını verebilir. Gerçek sistemlerde
veri kaybını gizlemek yerine sorunlu kaydı görünür kılmak daha güvenlidir.

### Dönüşüm hattı kurmak

Bir veri hattı (Pipeline), bir aşamanın çıktısını sonraki aşamanın girdisine verir.
Örneğin API'den gelen kayıtlar içinde geçerli ve aktif kullanıcıların adlarını
normalleştirmek için:

```js
const displayNames = records
  .filter((record) => record.active === true)
  .filter((record) => typeof record.name === "string")
  .map((record) => record.name.trim())
  .filter((name) => name.length > 0);
```

Her satır tek soruya cevap verir: aktif mi, ad metin mi, normalleştirilmiş ad ne,
boş ad mı? Zincir uzun olduğunda adlandırılmış ara sonuçlar hata ayıklamayı
kolaylaştırabilir:

```js
const activeRecords = records.filter((record) => record.active === true);
const recordsWithNames = activeRecords.filter(
  (record) => typeof record.name === "string",
);
const normalizedNames = recordsWithNames.map((record) => record.name.trim());
const displayNames = normalizedNames.filter((name) => name.length > 0);
```

Bu sürüm daha çok satırdır fakat ara değerleri debugger'da incelemek kolaydır.
Kod kalitesi en az karakter değil, kararların görünürlüğüdür.

### Tek geçiş ve çoklu geçiş

Puanların toplamını, minimumunu ve maksimumunu üç ayrı fonksiyonla hesaplamak üç
geçiş yapar. Tek geçiş sürümü hepsini birlikte tutabilir:

```js
function summarizeScores(scores) {
  if (scores.length === 0) {
    return {
      count: 0,
      total: 0,
      average: null,
      minimum: null,
      maximum: null,
    };
  }

  const summary = scores.reduce(
    (result, score) => ({
      count: result.count + 1,
      total: result.total + score,
      minimum: Math.min(result.minimum, score),
      maximum: Math.max(result.maximum, score),
    }),
    {
      count: 0,
      total: 0,
      minimum: Infinity,
      maximum: -Infinity,
    },
  );

  return {
    ...summary,
    average: summary.total / summary.count,
  };
}
```

Bu çözüm tek dolaşma yapar, fakat başlangıçta `Infinity` kararını ve boş durumun
neden ayrı döndürüldüğünü okuyucu anlamalıdır. Bir milyon öğede ölçülebilir avantaj
sağlayabilir; yirmi öğede üç ayrı, açık fonksiyon daha iyi bakım değeri sunabilir.
Önce gereksinimi karşılayan en anlaşılır çözümü yazın. Performans iddiasını gerçek
veri ve profiler ile sınayın. “Tek geçiş her zaman daha profesyoneldir” doğru
değildir.

## Engineering Perspective

Koleksiyon işleme kodu genellikle sistemin iş kurallarıyla dış dünya arasında
bulunur. Bir ödeme hizmetinden gelen hareketleri, depodaki ürünleri veya test
koşularını tek tek işler. Bu noktada küçük görünen bir hata çok sayıda kayda
uygulanır. Bir koşulun yanlış yazılması tek kullanıcıyı değil bütün müşteri listesini
etkileyebilir. Bu nedenle profesyonel mühendis, döngünün çalışmasına ek olarak veri
sözleşmesini, başarısızlık biçimini ve doğrulama kanıtını tasarlar.

### Veri sözleşmesini koddan önce yazmak

Bir puan analizi fonksiyonuna başlamadan önce şu sözleşmeyi yazabiliriz:

- Girdi bir JavaScript dizisidir.
- Her öğe `0` ile `100` arasında sonlu bir sayıdır.
- Sıra, raporda öğrencilerin özgün sırasını temsil eder.
- Fonksiyon kaynak diziyi değiştirmez.
- Boş dizi geçerlidir; adet ve toplam sıfır, ortalama/minimum/maksimum `null` olur.
- Geçersiz öğe varsa analiz yapılmaz; hatalı indeksler raporlanır.

Bu altı madde, uygulanacak yöntemi önemli ölçüde belirler. `sort` kaynak diziyi
yerinde değiştirdiği için doğrudan çağrılamaz; önce `toSorted` veya kopya gerekir.
Geçersiz değerleri `filter` ile sessizce atmak sözleşmeye aykırıdır. Ortalama için
boş dizide bölme yapılmaz. Kod inceleyen kişi, davranışı tahmin etmek zorunda kalmaz.

```js
function analyzeScores(scores) {
  if (!Array.isArray(scores)) {
    return {
      ok: false,
      errors: [{ code: "NOT_AN_ARRAY" }],
    };
  }

  const errors = scores
    .map((value, index) => ({ value, index }))
    .filter(({ value }) => !Number.isFinite(value) || value < 0 || value > 100)
    .map(({ value, index }) => ({
      code: "INVALID_SCORE",
      index,
      received: value,
    }));

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  if (scores.length === 0) {
    return {
      ok: true,
      value: {
        count: 0,
        total: 0,
        average: null,
        minimum: null,
        maximum: null,
      },
    };
  }

  let total = 0;
  let minimum = scores[0];
  let maximum = scores[0];

  for (const score of scores) {
    total += score;
    if (score < minimum) minimum = score;
    if (score > maximum) maximum = score;
  }

  return {
    ok: true,
    value: {
      count: scores.length,
      total,
      average: total / scores.length,
      minimum,
      maximum,
    },
  };
}
```

Bu sürüm en kısa çözüm değildir; fakat hata ile başarıyı ayırır, sorunlu konumu
gösterir ve boş durumu açıklar. Fonksiyonun sonucunu kullanan kod önce `ok` alanını
kontrol etmelidir. Bu yapı, hatalı veriyi geçerli sıfırla karıştırmaz.

### Mutability sınırı ve sahiplik

Bir koleksiyonu değiştirmek başlı başına yanlış değildir. Sorun, değişikliğin
beklenmediği yerde yapılmasıdır. Fonksiyon kendisine verilen diziyi sıralarsa aynı
referansı kullanan başka kod da değişimi görür:

```js
function getLowestFirst(scores) {
  return scores.sort((left, right) => left - right);
}

const original = [80, 60, 90];
const sorted = getLowestFirst(original);

console.log(original); // [60, 80, 90] — kaynak da değişti
console.log(sorted === original); // true
```

Sözleşme yeni sonuç istiyorsa modern `toSorted` kullanılabilir veya önce kopya
alınabilir:

```js
function getLowestFirst(scores) {
  return [...scores].sort((left, right) => left - right);
}
```

Bu yalnız dış diziyi kopyalar. Öğeler nesneyse iç nesneler paylaşılmaya devam eder.
Derin kopya ihtiyacı gerçek veri modeline göre değerlendirilmelidir. Her şeyi
refleks olarak derin kopyalamak bellek ve performans maliyeti yaratır; hiç kopya
almamak ise gizli ortak durum oluşturur. Doğru sınır, hangi katmanın verinin sahibi
olduğunun açıklanmasıyla bulunur.

### Okunabilirlik ve yöntem zinciri

Yöntem zincirleri iş akışını soldan sağa anlatabilir:

```js
const result = orders
  .filter(isPaidOrder)
  .map(toInvoiceLine)
  .reduce(addInvoiceLine, createEmptyInvoice());
```

Bu kod “ödenmiş siparişleri seç, fatura satırına dönüştür, faturada birleştir” diye
okunur. Fakat callback'ler anonim, uzun ve yan etkiliyse aynı zincir anlaşılmaz
hâle gelir. Bir satırlık zincir kalite hedefi değildir. İş kurallarını adlandırılmış
fonksiyonlara taşımak test ve hata ayıklamayı kolaylaştırır.

Zincirin ara sonuçlarının büyük olması bellek maliyeti yaratabilir. `filter` yeni
dizi, ardından `map` başka yeni dizi üretir. On milyon kayıt işleniyorsa akış,
iterator, stream, generator veya tek geçiş araştırılabilir. Fakat bu optimizasyon
gereksinimi ölçülmelidir. Küçük bir yönetim ekranında okunabilir üç aşamayı karmaşık
tek `reduce` içine sıkıştırmak yanlış ekonomik karar olabilir.

### Karmaşıklık düşüncesi

Bir koleksiyonu baştan sona dolaşmak, öğe sayısı `n` olduğunda doğrusal zaman
karmaşıklığına sahiptir. İki ayrı tam dolaşma yaklaşık `2n` işlem yapar; Büyük-O
gösteriminde ikisi de `O(n)` sayılır. Bu, sabit katsayıların önemsiz olduğu anlamına
gelmez; yalnız büyüme sınıfını açıklar. Bir öğe başına yapılan işlem pahalıysa iki
geçiş gerçek fark yaratabilir.

İç içe dolaşma sıklıkla `O(n²)` büyüme üretir:

```js
for (const left of values) {
  for (const right of values) {
    compare(left, right);
  }
}
```

Bin öğede yaklaşık bir milyon karşılaştırma oluşabilir. Ancak her iç içe döngü
otomatik olarak yanlış değildir; gereksinim bütün çiftleri karşılaştırmak olabilir.
Önce yapılan işi sayın, sonra daha uygun veri yapısı veya algoritma arayın.

### Test matrisi ve değişmezler

Tek bir mutlu yol testi, koleksiyon algoritmasına güven oluşturmaz. Aşağıdaki matris
temel başlangıçtır:

| Durum | Girdi | Beklenen kanıt |
|---|---|---|
| Boş | `[]` | Tanımlı boş sonuç, hata yok |
| Tek öğe | `[75]` | min=max=ortalama=75 |
| Çok öğe | `[70, 90, 80]` | toplam 240, ortalama 80 |
| Sınırlar | `[0, 100]` | İki sınır da kabul edilir |
| Tekrar | `[50, 50]` | İki kayıt ayrı sayılır |
| Geçersiz düşük | `[-1]` | indeks 0 hatası |
| Geçersiz yüksek | `[101]` | indeks 0 hatası |
| Yanlış tür | `["80"]` | sessiz dönüşüm yapılmaz |
| Özel sayı | `[NaN]` | geçersiz kabul edilir |
| Kaynak koruma | dizi | çağrıdan sonra aynı içerik |

Özellik düzeyindeki değişmezler daha geniş güven verir. Örneğin `map` sonucu yoğun
geçerli dizide aynı uzunluktadır; `filter` sonucu kaynak uzunluğunu aşamaz; toplam
işleminde öğelerin sırası sonucu değiştirmez; kaynak değişmiyorsa çağrı öncesi ve
sonrası derin eşitlik korunur. Bu değişmezler rastgele üretilen girdilerle de
sınanabilir.

### Kod inceleme kontrolü

Bir pull request içinde koleksiyon kodu gördüğünüzde şu soruları sorun:

1. Girdi koleksiyonunun türü ve öğe sözleşmesi belli mi?
2. Boş koleksiyon kararı var mı?
3. Döngü sınırı bütün ve yalnız geçerli öğeleri kapsıyor mu?
4. Kaynak koleksiyon değişiyor mu; değişiyorsa çağıran bunu biliyor mu?
5. Callback dış durumu değiştiriyor mu?
6. `map` sonucu gerçekten kullanılıyor mu?
7. `reduce` başlangıç değeri sonuç türüne uygun mu?
8. Geçersiz veri sessizce kayboluyor mu?
9. Çoklu geçiş veya ara kopya gerçek ölçekte sorun mu?
10. Testler boş, sınır ve hatalı girdileri kapsıyor mu?

Bu sorular yöntemi yasaklamaz; kararın kanıtını ister. Mühendislik, “`reduce`
kullanmak modern görünür” gibi estetik tercihlerden çok davranış ve bakım maliyetiyle
ilgilenir.

### Dolaşma yöntemlerinin ayrıntılı seçim tablosu

Yeni başlayan biri için yöntemlerin çokluğu gereksiz görünebilir. Hepsi sonuçta
öğeleri sırayla ziyaret ediyorsa neden tek bir döngü yetmesin? Gerçek fark, aracın
hangi niyeti koda yerleştirdiğidir. Açık döngü genel amaçlıdır; hem sonuç üretebilir
hem yan etki yapabilir, erken bitebilir ve birden çok durumu izleyebilir. Bu güç,
okuyucunun döngünün tamamını incelemesini gerektirir. Özel yöntem ise bazı
olasılıkları kapatıp niyeti daraltır.

| İhtiyaç | Uygun başlangıç seçimi | Kontrol sorusu |
|---|---|---|
| Her değeri sırayla kullanmak | `for...of` | Erken çıkış gerekiyor mu? |
| Konum veya komşu öğe kullanmak | indeksli `for` | Sınır ve adım doğru mu? |
| Her öğeden yeni öğe üretmek | `map` | Sonuç aynı cardinality'de mi? |
| Bazı öğeleri seçmek | `filter` | Koşul iş kuralını açık anlatıyor mu? |
| Tek birleşik sonuç üretmek | `reduce` | Başlangıç ve biriktirici türü nedir? |
| İlk eşleşeni bulmak | `find` | Bulunamama sonucu ele alındı mı? |
| En az bir eşleşme aramak | `some` | Kısa devre davranışı isteniyor mu? |
| Bütün öğeleri doğrulamak | `every` | Boş dizide sonucun `true` olduğu biliniyor mu? |
| Yalnız kontrollü yan etki | `for...of`/`forEach` | Hata ve sıra nasıl yönetiliyor? |

Cardinality, giriş ve çıkıştaki öğe sayısı ilişkisidir. Yoğun bir dizide `map`
bir öğeye bir öğe üretir; `filter` sıfır ile giriş sayısı arasında öğe üretir;
`reduce` ise bir birleşik sonuç üretir. Bu ilişkiyi bilmek, yanlış yöntem seçimini
kod çalıştırmadan fark ettirir. Örneğin bir `map` callback'inin bazı durumlarda
hiçbir şey döndürmemesi “öğeyi silmez”; ilgili konuma `undefined` koyar. Silme
niyeti varsa önce süzme gerekir.

`find`, ilk eşleşen öğeyi veya eşleşme yoksa `undefined` döndürür. Koleksiyonun
kendisinde geçerli bir `undefined` öğesi bulunabiliyorsa “bulunamadı” ile “bulunan
değer undefined” ayrımı için `findIndex` veya daha açık sonuç modeli gerekebilir.
`some` ilk doğru sonuçta, `every` ilk yanlış sonuçta durur. Buna kısa devre
(Short-Circuit) denir. Pahalı doğrulamada gereksiz işleri önleyebilir; callback'in
yan etkili olması durumunda kaç kez çalıştığı veriye bağlı hâle gelir.

Boş dizide `every` sonucunun `true` olması başlangıçta şaşırtabilir. “Boş dizideki
bütün öğeler koşulu sağlar” ifadesine karşı örnek öğe yoktur. Matematikte buna
boş doğruluk denir. İş kuralı “en az bir öğe olmalı ve hepsi geçerli olmalı” ise
yalnız `every` yetmez:

```js
function hasOnlyValidScores(scores) {
  return scores.length > 0 && scores.every(isValidScore);
}
```

### Referans, değer ve nesne öğeleri

Sayı dizisinde bir öğeyi yeni sayıya dönüştürmek kaynak sayıyı değiştirmez; sayılar
ilkel değerlerdir. Nesne dizisinde ise öğe bir nesne referansıdır. İki ayrı dizi
aynı nesneye işaret edebilir:

```js
const source = [{ id: 1, status: "draft" }];
const selected = source.filter((item) => item.id === 1);

selected[0].status = "published";
console.log(source[0].status); // "published"
```

`filter` yeni dış dizi oluşturmuştur, fakat öğeyi kopyalamamıştır. Bu yüzden “yeni
dizi” ile “bağımsız veri” aynı şey değildir. Dönüşüm sırasında yeni nesne üretmek
gerekebilir:

```js
const published = source.map((item) => ({
  ...item,
  status: "published",
}));
```

Yayma sözdizimi de yalnız bir seviye kopyalar. `item.settings.theme` gibi iç içe
nesne hâlâ paylaşılabilir. İhtiyaç duyulan kopya derinliği veri sahipliği ve
değişiklik sınırına göre tasarlanmalıdır. Seri hâle getirip geri açmak genel bir
derin kopya çözümü değildir; `Date`, `Map`, döngüsel referans ve özel türlerde veri
kaybedebilir. Platformun `structuredClone` desteği veya alana özel kopyalama
değerlendirilebilir, fakat çoğu zaman daha iyi çözüm mutation sınırını küçük tutmaktır.

### Sayısal doğruluk ve ortalama

JavaScript sayıları kayan nokta gösterimi kullandığı için bazı ondalık toplamlar
tam temsil edilemez:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Bu, `reduce` hatası değildir; sayı modelinin sonucudur. Para değerlerini toplarken
kuruş gibi en küçük birimde tamsayı kullanmak veya alan için uygun decimal çözümü
seçmek gerekir. Eğitim puanlarında gösterim için yuvarlama yapılabilir, fakat ham
değer ile sunum değeri ayrılmalıdır:

```js
function roundForDisplay(value, digits = 2) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
```

Bu yardımcı her finansal sorunu çözmez. Yuvarlama modu, para birimi ve yasal kurallar
iş alanı sözleşmesidir. Koleksiyon algoritması doğru dolaşsa bile öğe üzerindeki
sayısal işlem yanlış model seçerse sonuç güvenilir olmaz.

Ortalama da tek başına dağılımı anlatmaz. `[50, 50, 50]` ile `[0, 50, 100]` aynı
ortalamaya sahiptir fakat farklı dağılımlardır. Profesyonel analiz, gereksinime göre
medyan, yüzdelik veya standart sapma gibi ölçülere ihtiyaç duyabilir. Bu bölümün
amacı istatistik öğretmek değildir; bir toplulaştırmanın iş sorusunu tam karşılayıp
karşılamadığını sorgulatmaktır.

### Büyük veri ve akış sınırı

Bir API'nin bütün kayıtlarını tek diziye yüklemek küçük veri için kolaydır. Veri
milyonlarca kayda çıktığında bellek sınırı ve gecikme önem kazanır. Sayfalama,
generator, stream veya veri tabanı toplulaştırması değerlendirilebilir. Örneğin
yalnız toplam ve adet gerekiyorsa bütün kayıtları istemciye taşımak yerine bu hesabı
veriye yakın yerde yapmak daha doğru olabilir.

Bu optimizasyon, ders içinde her şeyi stream'e çevirmek anlamına gelmez. Önce aynı
sözleşmeyi küçük bir diziyle doğru kurarsınız. Sonra sistem sınırını incelersiniz:
veri nerede üretiliyor, ağ maliyeti nedir, sonuç için bütün öğeler gerekli mi,
kısmi hata nasıl ele alınacak? Iterator ve stream, koleksiyon düşüncesinin yerine
geçmez; dolaşmanın ne zaman ve hangi kaynak tüketimiyle yapıldığını genişletir.

### Eş zamanlı ve asenkron işler

`forEach(async (...) => ...)` sık görülen bir hatadır. `forEach`, dönen promise'ları
toplayıp beklemez:

```js
items.forEach(async (item) => {
  await save(item);
});

console.log("Bitti sanılabilir, fakat kayıtlar sürüyor olabilir.");
```

Sırayla işlemek gerekiyorsa `for...of` içinde `await`, bağımsız işleri paralel
başlatmak gerekiyorsa `map` ile promise dizisi ve `Promise.all` kullanılabilir:

```js
for (const item of items) {
  await save(item);
}

const savePromises = items.map((item) => save(item));
await Promise.all(savePromises);
```

İkinci yaklaşım bütün işleri aynı anda başlatabilir; büyük koleksiyonda hizmetin
oran sınırını veya bağlantı havuzunu aşabilir. Sınırlı eş zamanlılık ayrı bir
tasarım problemidir. Buradaki temel ders şudur: dolaşma aracı yalnız öğe sırasını
değil, yan etkinin zamanlama ve hata davranışını da etkiler.

### AI üretimi kod için kanıt protokolü

AI'ya “bu dizinin ortalamasını bul” demeden önce siz şu tabloyu hazırlayın: geçerli
öğe türü, boş sonuç, hatalı öğe, kaynak mutation politikası ve en az beş test.
AI çözümünü aldıktan sonra yöntemi açıklamasını istemek tek başına doğrulama değildir;
kodun davranışını bağımsız test edin.

Denetim sırasında her callback'in girdisini ve çıktısını yazın. `reduce` kullanılmışsa
ilk iki turun biriktirici değerini elle hesaplayın. Kopya üretilmişse iç nesnelerin
paylaşılıp paylaşılmadığını test edin. Performans iddiası varsa aynı ortamda ölçüm
kurun. AI'nın uydurduğu API veya güncelliğini yitirmiş davranış olasılığı için TC39
ve MDN gibi birincil kaynakları kontrol edin. Son kararı veren, testi çalıştıran ve
sonucun etkisini taşıyan kişi sizsiniz.

## Real World Examples

### Sipariş toplamı ve geçersiz satırlar

Bir sepet sisteminde her satırın fiyatı ve adedi vardır. Toplam almadan önce değerler
doğrulanmalıdır:

```js
const cart = [
  { productId: "A-10", unitPrice: 120, quantity: 2 },
  { productId: "B-20", unitPrice: 50, quantity: 3 },
];

function isValidCartLine(line) {
  return typeof line.productId === "string"
    && Number.isFinite(line.unitPrice)
    && line.unitPrice >= 0
    && Number.isInteger(line.quantity)
    && line.quantity > 0;
}

function calculateCart(cartLines) {
  const invalidIndexes = cartLines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => !isValidCartLine(line))
    .map(({ index }) => index);

  if (invalidIndexes.length > 0) {
    return { ok: false, invalidIndexes };
  }

  const subtotal = cartLines
    .map((line) => line.unitPrice * line.quantity)
    .reduce((total, lineTotal) => total + lineTotal, 0);

  return { ok: true, subtotal };
}
```

İşlem sırası önemlidir: önce doğrulama, sonra dönüşüm, sonra toplama. Geçersiz satırı
sessizce atmak müşteriye eksik fatura gösterebilir. `0` fiyat geçerlidir; bu nedenle
`if (!line.unitPrice)` gibi truthiness kontrolü sıfırı yanlışlıkla reddeder.

### Sensör ölçümleri

Bir sıcaklık sensörü zaman zaman bağlantı hatası nedeniyle `null` gönderiyor olsun.
İş gereksinimi, geçerli ölçümlerin ortalamasını ve veri kalitesi oranını birlikte
istemelidir. Yalnız `null` değerleri atıp ortalama göstermek, eksik veriyi saklar.

```js
function analyzeReadings(readings) {
  const validReadings = readings.filter(Number.isFinite);
  const missingCount = readings.length - validReadings.length;
  const total = validReadings.reduce((sum, value) => sum + value, 0);

  return {
    totalReadings: readings.length,
    validReadings: validReadings.length,
    missingCount,
    completeness:
      readings.length === 0 ? null : validReadings.length / readings.length,
    average:
      validReadings.length === 0 ? null : total / validReadings.length,
  };
}
```

Burada boş koleksiyon ile tamamı geçersiz koleksiyon farklı bağlamlar olabilir.
İkisinde de ortalama `null` olsa da `totalReadings` ve `missingCount` ayrımı nedeni
gösterir. Gerçek gözlem sisteminde zaman damgası, birim ve sensör kimliği de
sözleşmenin parçası olmalıdır.

### Yetki denetimi

Bir kullanıcının izinlerinden en az birinin gerekli izinler arasında bulunması
istenebilir. Bütün diziyi elle dolaşmak yerine niyeti anlatan `some` kullanılabilir:

```js
function hasAnyPermission(userPermissions, requiredPermissions) {
  return requiredPermissions.some((permission) =>
    userPermissions.includes(permission),
  );
}
```

Bu kod küçük listelerde açıktır. İzin sayıları büyürse `includes` her aramada listeyi
dolaşır; kullanıcı izinlerini `Set` yapısına çevirmek daha uygun olabilir. Bu,
koleksiyon seçiminin algoritma maliyetini değiştirdiğini gösterir. Ancak güvenlikte
yalnız istemci tarafındaki bu sonuç yetkilendirme kanıtı değildir; sunucu aynı
kuralı güvenilir kimlikle uygulamalıdır.

### Günlük kayıtlarını gruplamak

Bir uygulama loglarını seviyeye göre gruplamak isteyebilir:

```js
const logs = [
  { level: "info", message: "Başlatıldı" },
  { level: "error", message: "Bağlantı kesildi" },
  { level: "info", message: "Yeniden denendi" },
];

const byLevel = logs.reduce((groups, log) => {
  const currentGroup = groups[log.level] ?? [];

  return {
    ...groups,
    [log.level]: [...currentGroup, log],
  };
}, {});
```

Bu tamamen kopyalı sürüm öğretim açısından açıktır; çok büyük log akışında her
turda kopyalama pahalı olabilir. Yerel biriktiriciyi kontrollü değiştiren sürüm
seçilebilir. Ayrıca kullanıcıdan gelen anahtarlarla sıradan nesne kullanmak güvenlik
ve prototip anahtarları açısından incelenmelidir; `Map` veya güvenli nesne modeli
daha uygun olabilir. Veri yapısı yalnız sözdizimi tercihi değildir.

### API yanıtını görünüm modeline dönüştürmek

Sunucudan gelen nesneyi doğrudan arayüzde kullanmak, arayüzü dış sözleşmeye sıkı
bağlar. Bir adaptasyon aşaması bu sınırı görünür yapar:

```js
function toProductCard(product) {
  return {
    id: product.id,
    title: product.display_name.trim(),
    priceLabel: `${product.price.toFixed(2)} TL`,
    available: product.stock_count > 0,
  };
}

const cards = apiResponse.items
  .filter((product) => product.status === "published")
  .map(toProductCard);
```

`filter` yayın politikasını, `map` ise veri biçimi dönüşümünü temsil eder. API'de
eksik `display_name` olasılığı varsa doğrulama önceden yapılmalıdır. `trim` hatası,
veri sözleşmesinin ihlal edildiğini gösterebilir; `?? ""` ile her şeyi sessizce
boş metne çevirmek sorunu gizleyebilir.

## Common Mistakes

### Bir fazla dolaşmak

`index <= values.length` koşulu son geçerli indeksten sonra bir tur daha yapar.
Sonuç açık hata yerine `undefined` ise sorun geç fark edilir. Sınırı “indeks,
uzunluktan küçük olduğu sürece” diye okuyun ve boş diziyle test edin.

### `const` diziyi tamamen değişmez sanmak

`const`, değişken bağını korur; `push`, `splice`, `sort` gibi işlemleri engellemez.
Fonksiyonun mutation yapmaması gerekiyorsa yeni koleksiyon üreten yöntem, kopya ve
test sözleşmesi kullanın.

### `map` ile yan etki yapmak

```js
users.map((user) => console.log(user.name));
```

Bu kod kullanılmayan bir sonuç dizisi üretir. Yalnız etki amaçlanıyorsa `for...of`
daha açık olabilir. Dönüşüm amaçlanıyorsa callback gerçek sonuç döndürmelidir.

### `filter(Boolean)` ile iş anlamını kaybetmek

`filter(Boolean)` sıfır, boş metin, `false`, `null` ve `undefined` değerlerini hep
atar. Oysa `0` geçerli puan, `false` geçerli özellik olabilir. Açık koşul yazın:

```js
const definedValues = values.filter(
  (value) => value !== null && value !== undefined,
);
```

### Başlangıç değersiz reduce

Boş koleksiyonda hata verir ve biriktirici türünü ilk öğeye bağlar. Sonuç türüne
uygun başlangıç değeri verin. Minimum gibi kimlik değerinin doğal olmadığı durumda
boş durumu ayırın.

### Minimumu sıfırdan başlatmak

Pozitif sayılarda yanlışlıkla koleksiyonda olmayan sıfırı minimum yapar. İlk geçerli
öğeden başlatın veya sözleşmeye uygun nötr değer kullanın.

### Dolaşırken silmek

İndeksler kaydığı için öğeler atlanabilir. Yeni koleksiyon üretin veya yerinde
değişimin yönünü ve imleç davranışını açıkça tasarlayın.

### `for...in` ile dizi değerleri beklemek

`for...in` özellik anahtarlarını verir. Dizi değerleri için `for...of` kullanın.

### Sayıya benzer metni sayı sanmak

`"80"` bir sayıya benzer ama JavaScript türü metindir. Sessiz tür dönüşümü toplama
sonucunu birleştirmeye çevirebilir. Girdiyi sınırda doğrulayın ve dönüşüm politikasını
açıkça tanımlayın.

### Kaynak diziyi yanlışlıkla sıralamak

`sort` geleneksel olarak diziyi yerinde değiştirir. Görüntü için sıralanmış kopya
gerekiyorsa `toSorted` desteğini veya kopya üzerinde `sort` kullanımını değerlendirin.

### Aşırı zincirleme

On anonim callback'i tek ifadeye bağlamak “fonksiyonel” görünse de ara kararları
saklayabilir. Anlamlı adlar, küçük fonksiyonlar ve gerektiğinde ara sonuçlar kullanın.

### Erken performans iddiası

Tek geçişin hızlı olacağını varsayıp okunabilir kodu karmaşıklaştırmak kanıtsız
optimizasyondur. Veri büyüklüğünü ve gerçek darboğazı ölçün. Sonra aynı testleri
koruyarak kontrollü değişiklik yapın.

## Best Practices

Önce veri sözleşmesini yazın. “Dizi alır” tek başına yeterli değildir; öğe türü,
geçerli aralık, sıra anlamı, tekrar politikası, boş durum ve mutation davranışı
belirtilmelidir.

Niyeti anlatan aracı seçin. Dönüşüm için `map`, seçim için `filter`, tek sonuç için
`reduce`, değerleri sırayla işlemek için `for...of`, konum mantığı için indeksli
`for` kullanın. Bu bir yasak listesi değildir; kodu okuyan kişinin niyeti hızlı
görmesini sağlar.

Boş durumu en başta ele alın. Toplamın kimlik değeri olabilir; ortalama ve minimumun
olmayabilir. `null`, hata veya sonuç nesnesinden hangisini seçtiğinizi belgeleyin.

Callback'leri mümkün olduğunca saf tutun. Dış sayacı değiştirmek veya kaynak öğeyi
mutate etmek yerine sonuç döndürün. Yan etki gerekiyorsa ayrı ve adlandırılmış bir
aşamada uygulayın.

Geçersiz veriyi sessizce düşürmeyin. Hangi kaydın neden geçersiz olduğunu raporlayın.
Kullanıcı deneyimi gerektiriyorsa geçerli ve geçersiz kayıtları iki ayrı sonuçta
tutun.

Kaynak koleksiyonun korunmasını test edin. Fonksiyon yeni sonuç vaat ediyorsa çağrı
öncesi kopya ile çağrı sonrası girdiyi karşılaştırın. Nesne öğelerinde sığ kopya
sınırını ayrıca düşünün.

Döngü değişmezini zor algoritmalarda yorum veya tasarım notu olarak yazın. “İlk
`index` öğe işlendi” veya “biriktirici işlenmiş alt dizinin toplamıdır” cümlesi sınır
ve başlangıç hatalarını erken gösterir.

Yöntem zincirinde her aşamayı tek iş kuralına bağlayın. Adlandırılmış predicate ve
transformer fonksiyonları test edilebilir ve yeniden okunabilir olur.

Performansı ölçün. Büyük koleksiyonda ara diziler, kopyalar ve tekrar dolaşmalar
önemli olabilir. Küçük koleksiyonda ise bakım süresi CPU süresinden daha pahalıdır.
Profiler, benchmark ve üretim gözlemi olmadan motor davranışı hakkında kesin iddia
kurmayın.

Test matrisini uygulamadan önce yazın. Boş, tek, çoklu, sınır, tekrar, yanlış tür,
`NaN` ve kaynak mutation durumları temel kapsama girmelidir. Her hata düzeltildiğinde
onu yeniden üreten test kalıcı hâle getirilmelidir.

AI yardımını denetimli kullanın. Önce kendi sözleşmenizi ve beklenen örnekleri
yazın; sonra AI çözümünü bunlarla karşılaştırın. AI'nın seçtiği yöntemi sırf kısa
olduğu için kabul etmeyin. Başlangıç değeri, boş durum, mutation, karmaşıklık ve
test kapsamını satır satır inceleyin.

## Hands-on Exercise

Bu ana görevde küçük bir “Puan Analiz Motoru” geliştireceksiniz. Hazır çözümü
kopyalamadan önce aşağıdaki sözleşmeyi kendi notunuza yeniden yazın.

Girdi, `0` ile `100` arasında sonlu sayılardan oluşan bir dizi olmalıdır. Program
kaynak diziyi değiştirmemelidir. Geçersiz girişte bütün sorunlu indeksleri ve
değerleri raporlamalı, kısmi analiz üretmemelidir. Geçerli girişte adet, toplam,
ortalama, minimum, maksimum, geçen puanlar, kalan puanlar ve her puanın harf notu
üretilmelidir. Boş dizi geçerlidir; sayı gerektirmeyen listeler boş, toplam sıfır,
ortalama/minimum/maksimum `null` olmalıdır.

Adım 1: `isValidScore` fonksiyonunu yazın. `Number.isFinite`, alt sınır ve üst sınır
kontrolü yapmalıdır. `"80"`, `NaN`, `Infinity`, `-1` ve `101` reddedilmelidir.

Adım 2: `validateScores` fonksiyonunu yazın. Sonucu şu biçimde olsun:

```js
{
  ok: false,
  errors: [
    { index: 2, value: "90", code: "INVALID_SCORE" }
  ]
}
```

Adım 3: `toLetterGrade` fonksiyonunu yazın. Eşiklerinizi açık sabitlerle belirleyin.
Örneğin 90 ve üzeri `A`, 80–89 `B`, 70–79 `C`, 60–69 `D`, altı `F` olabilir.
Sınır değerleri için ayrı test yazın.

Adım 4: `summarizeScores` fonksiyonunu önce açık bir `for...of` döngüsüyle yazın.
Her tur için biriktirici değişmezini not edin. Boş durumu döngüden önce ele alın.

Adım 5: Geçen ve kalan puanları `filter`, harf notlarını `map` ile üretin. Kaynak
dizinin çağrıdan sonra aynı kaldığını kanıtlayın.

Adım 6: Başarı sonucunu şu biçimde birleştirin:

```js
{
  ok: true,
  value: {
    count: 4,
    total: 310,
    average: 77.5,
    minimum: 55,
    maximum: 95,
    passing: [80, 95, 80],
    failing: [55],
    letterGrades: ["B", "F", "A", "B"]
  }
}
```

Adım 7: Aşağıdaki testleri elle ve otomatik assertion ile çalıştırın: `[]`, `[75]`,
`[0, 100]`, `[50, 50]`, `[80, 55, 95, 80]`, `[-1]`, `[101]`, `["80"]`, `[NaN]`
ve dizi olmayan bir girdi.

Adım 8: Aynı özeti bir `reduce` ile tek geçişte yazmayı deneyin. İlk sürümle
karşılaştırın. Satır sayısını değil, şu ölçütleri kullanın: okunabilirlik, boş durum
açıklığı, hata ayıklanabilirlik, ara kopya, geçiş sayısı ve test kolaylığı.

Adım 9: Kod inceleme notu yazın. Hangi sürümü küçük bir eğitim platformunda tercih
ettiğinizi ve hangi veri büyüklüğünde ölçüm yapacağınızı en az 200 kelimeyle
gerekçelendirin.

Başarı ölçütü yalnız konsol çıktısı değildir. Fonksiyon sözleşmeleri, test matrisi,
kaynak koruma kanıtı, iki tasarımın karşılaştırması ve bir hata ayıklama kaydı teslim
edilmelidir. Ayrıntılı görevler bölümün `exercises.md`, gerçek senaryo ise `lab.md`
dosyasında devam eder.

## Reflection Questions

1. `length` ile gerçek atanmış öğe sayısı neden her JavaScript dizisinde aynı
   olmayabilir? Bu fark hangi hatayı doğurur?
2. Boş koleksiyon için toplamın `0`, ortalamanın `null` olması hangi matematiksel
   ve iş alanı kararlarına dayanır?
3. Bir fonksiyonun kaynak diziyi değiştirmediğini nasıl kanıtlarsınız? Dizi nesneler
   içeriyorsa kanıt neden zorlaşır?
4. `map` ve `forEach` ikisi de callback çağırırken hangi sonuç sözleşmesi onları
   ayırır?
5. `filter(Boolean)` hangi geçerli iş değerlerini yanlışlıkla atabilir?
6. Başlangıç değersiz `reduce` boş dizide neden risklidir? İlk öğeyi başlangıç
   yapmak hangi durumlarda anlamlı olabilir?
7. Dolaşma sırasında öğe silmek neden ziyaret edilmeyen değer bırakabilir?
8. Üç açık geçiş hangi durumda tek karmaşık geçişten daha iyi mühendislik kararıdır?
9. Veri boyutu büyüdüğünde yöntem zincirindeki ara dizilerin maliyetini nasıl
   ölçersiniz?
10. AI'nın ürettiği bir koleksiyon çözümünü kabul etmeden önce hangi beş sınır
    durumunu mutlaka test edersiniz?
11. Geçersiz kayıtları sessizce süzmek hangi gerçek dünya sistemlerinde ciddi
    risk doğurabilir?
12. Koleksiyon türü seçimi bir algoritmanın karmaşıklığını nasıl değiştirebilir?

Yanıtlarınızı tek cümleyle geçiştirmeyin. Her soruda bir iddia, küçük örnek ve bu
iddianın yanlış olabileceği bir karşı örnek yazın. Yansıma soruları ezber ölçmez;
kararınızın sınırlarını fark etmenizi sağlar.

## Chapter Summary

Koleksiyon, çok sayıda değeri bir arada tutan rastgele bir kap değil; sıra, erişim,
tekrar ve değişim davranışı olan bir sözleşmedir. Bu bölümde sıralı koleksiyonun
ana örneği olarak JavaScript dizisini kullandık. İlk indeksin sıfır, son indeksin
`length - 1` olduğunu; `length` değerinin seyrek dizide gerçek öğe sayısıyla aynı
olmayabileceğini gördük. Sınır dışı okumanın sessizce `undefined` üretebilmesi,
doğrulama ihtiyacını artırır.

Dolaşmayı başlangıç, devam koşulu, adım, geçerli öğe ve değişmez üzerinden kurduk.
Konuma ihtiyaç olduğunda indeksli `for`, yalnız değere ihtiyaç olduğunda `for...of`
kullandık. `for...in` anahtar dolaştığı için dizi değerleri için varsayılan araç
değildir. Dolaşma sırasında aynı diziyi değiştirmek indeks kayması ve yöntem
semantiği nedeniyle şaşırtıcı sonuç üretebilir; yeni koleksiyon üretmek çoğu zaman
daha güvenli sınırdır.

`map` her öğeyi sonuç öğesine dönüştürür, `filter` koşulu sağlayanları seçer,
`reduce` ise biriktirici üzerinden tek sonuç üretir. Bu kısa tanımların arkasındaki
sözleşmeleri inceledik: `map` sonucunun kullanılması, `filter` koşulunun iş anlamını
taşıması ve `reduce` başlangıç değerinin sonuç türüne uygun olması gerekir. Boş
dizide başlangıç değersiz `reduce` hata verir.

Toplam, ortalama, minimum ve maksimum örnekleri boş durumun her işlemde aynı
olmadığını gösterdi. Geçersiz veriyi sessizce dönüştürmek veya atmak yerine sorunlu
indeksleri raporlayan sonuç modeli kurduk. Kaynak dizinin değişmemesi, callback yan
etkileri, sığ kopya ve yerinde sıralama davranışı mühendislik sınırları olarak
ele alındı.

Son olarak tek geçiş ile çoklu geçişi karşılaştırdık. Büyük-O aynı olsa bile sabit
maliyet ve ara bellek gerçek ölçekte önemlidir; buna karşılık küçük veride açık,
test edilebilir aşamalar bakım değerini yükseltir. Doğru karar, moda veya en kısa
koda değil sözleşme, veri boyutu, profil ölçümü ve ekip okunabilirliğine dayanır.

## Key Takeaways

- Dizi uzunluğu adettir; son geçerli indeks `length - 1` olur.
- Boş, tek öğeli ve çok öğeli girişler her algoritmanın temel test sınıflarıdır.
- Seyrek dizide `length`, açıkça bulunan öğe sayısını göstermeyebilir.
- Döngü sınırı `index < length` biçiminde bütün ve yalnız geçerli indeksleri kapsar.
- Değer odaklı dolaşmada `for...of`, konum odaklı dolaşmada indeksli `for` açıktır.
- Dolaşma sırasında aynı koleksiyonu değiştirmek ziyaret sırasını bozabilir.
- `map` dönüşüm, `filter` seçim, `reduce` toplulaştırma niyetini taşır.
- `reduce` başlangıç değeri boş durum ve biriktirici türünü belirler.
- `const`, dizinin içeriğini otomatik olarak değişmez yapmaz.
- Sığ kopya, içteki nesne referanslarını paylaşmaya devam eder.
- Geçersiz kayıtları sessizce atmak veri kalitesi sorununu gizleyebilir.
- Tek geçiş her zaman en iyi çözüm değildir; ölçüm ve okunabilirlik birlikte
  değerlendirilir.
- AI çıktısı sözleşme, sınır, mutation, yan etki ve test kanıtıyla denetlenmelidir.

Bu çıkarımları uygularken önce yöntemi değil problemi adlandırın. “Burada `reduce`
kullanmalıyım” diye başlamak yerine “Geçerli puanlardan hangi tek sonucu üretmek
istiyorum, boş girişte ne olmalı ve kaynak veri korunmalı mı?” diye sorun. Doğru
sorular, uygun aracı çoğu zaman kendiliğinden görünür kılar. Kodunuzu başka bir
öğrenciye yalnız sözdizimiyle değil, girişten sonuca kadar veri akışını çizerek
anlatabiliyorsanız zihinsel modeliniz güçlenmiştir. Anlatamadığınız adım, yeniden
incelemeniz gereken adımdır.

Profesyonel gelişim için her koleksiyon çözümüne küçük bir kanıt paketi ekleyin:
bir sözleşme paragrafı, normal örnek, boş örnek, hatalı örnek, kaynak değişimi
kontrolü ve karmaşıklık notu. Bu alışkanlık başlangıçta yavaşlatıyor gibi görünür;
fakat kod inceleme, hata ayıklama ve bakım sırasında belirsizliği ciddi biçimde
azaltır. ASEA'da hedef yalnız çalışan döngü değil, neden doğru olduğunu gösterebilen
mühendislik çalışması üretmektir. Her yeni çözümde bu kanıtı yeniden üretin.
Alışkanlık hâline geldiğinde koleksiyon boyutu veya kullanılan programlama dili
değişse bile doğru soruları sormaya devam edersiniz; kalıcı yetkinlik budur.

Bir sonraki bölümde koleksiyonların içinde koleksiyonlar bulunduğunda ortaya çıkan
iki boyutlu yapı, satır–sütun koordinatları, iç içe dolaşma ve matris sınırları ele
alınacaktır. Bu bölümdeki indeks ve değişmez modeli, `V01-C18` için doğrudan temel
oluşturur.

## Further Reading

Önce ECMAScript'in Indexed Collections bölümünde `map`, `filter` ve `reduce`
algoritmalarının normatif adımlarını inceleyin. Spec metni ilk bakışta zor görünür;
`LengthOfArrayLike`, `HasProperty`, callback çağrısı ve sonuç dizisine yazma
adımlarını renklerle işaretleyin. Ardından aynı yöntemlerin MDN sayfalarındaki
örneklerini okuyup normatif adımlarla eşleştirin.

JavaScript modelini evrensel sanmamak için Python Data Structures belgesindeki
list comprehension örneklerini ve Rust iterator bölümündeki lazy adapter davranışını
karşılaştırın. Java `List` arayüzünün sıra, tekrarlı değer, konumsal erişim ve
iterator sözleşmesini not edin. Bu karşılaştırma, kavramın dilden bağımsız çekirdeği
ile dilin özel davranışını ayırmanıza yardım eder.

İleri çalışma için şu küçük deneyleri yapın:

1. Boş konumlu ve açık `undefined` içeren iki dizide `for...of`, `forEach`, `map`
   ve `Object.keys` sonuçlarını karşılaştırın.
2. Kaynak diziyi callback sırasında büyütüp küçülterek her yöntemin hangi öğeleri
   ziyaret ettiğini kaydedin; üretim kodunda bu davranışa güvenmeyin.
3. Yüz, yüz bin ve bir milyon öğede üç aşamalı hat ile tek geçişli özeti benchmark
   edin. Isınma, tekrar sayısı ve ortam bilgisini raporlayın.
4. Aynı puan analizi sözleşmesini Python ve Rust ile yazıp boş durum ve mutation
   farklarını açıklayın.

## References

1. ECMA International. [ECMAScript 2025 Language Specification](https://tc39.es/ecma262/2025/).
2. ECMA International. [Indexed Collections](https://tc39.es/ecma262/2025/multipage/indexed-collections.html).
3. MDN Web Docs. [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
4. MDN Web Docs. [Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections).
5. MDN Web Docs. [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).
6. MDN Web Docs. [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
7. MDN Web Docs. [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
8. MDN Web Docs. [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
9. MDN Web Docs. [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
10. Python Software Foundation. [Data Structures](https://docs.python.org/3/tutorial/datastructures.html).
11. The Rust Project. [Processing a Series of Items with Iterators](https://doc.rust-lang.org/stable/book/ch13-02-iterators.html).
12. Oracle. [The List Interface](https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html).
13. Microsoft. [.NET Collections](https://learn.microsoft.com/en-us/dotnet/standard/collections/).
14. The Go Authors. [Go Slices: usage and internals](https://go.dev/blog/slices-intro).
15. ACM/IEEE-CS/AAAI. [Computer Science Curricula 2023](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf).
16. IEEE Computer Society. [SWEBOK Guide V4.0a](https://www.computer.org/education/bodies-of-knowledge/software-engineering).
