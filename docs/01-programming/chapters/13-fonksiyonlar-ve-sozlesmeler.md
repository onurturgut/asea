---
title: "Fonksiyonlar ve Sözleşmeler — Davranışı Adlandırmak"
volume: "01"
chapter: "13"
chapter_id: "V01-C13"
slug: "fonksiyonlar-ve-sozlesmeler"
difficulty: "Beginner"
estimated_time: "5-6 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C13-BP01"
production_packet_id: "V01-C13-CPP-001"
prerequisites:
  - "V01-C04"
  - "V01-C12"
learning_objectives:
  - "V01-LO019"
  - "V01-LO020"
last_updated: "2026-07-23"
---

# Fonksiyonlar ve Sözleşmeler — Davranışı Adlandırmak

## Learning Objectives

Bu bölümün sonunda öğrenci, bir fonksiyonu yalnız tekrar kullanılan kod bloğu olarak değil, açıkça tanımlanmış davranış sınırı olarak tasarlayabilecektir. Öğrenciden beklenen kanıtlar şunlardır:

- Fonksiyon (Function), fonksiyon tanımı ve fonksiyon çağrısı arasındaki farkı açıklamak.
- Bir davranışı tek ve anlaşılır bir sorumlulukla adlandırmak.
- Fonksiyon sözleşmesini (Function Contract) uygulama kodundan önce yazmak.
- Kabul edilen girdileri, ön koşulu (Precondition), çıktıyı, son koşulu (Postcondition), gözlenebilir etkiyi ve hata davranışını açıkça belirtmek.
- Çağıran (Caller) ile çağrılan (Callee) tarafın yükümlülüklerini ayırmak.
- Çağrı (Invocation) başladığında denetimin nasıl fonksiyona geçtiğini ve dönüş (Return) sonrasında nereden devam ettiğini izlemek.
- İç içe fonksiyon çağrılarını doğru sırada çözmek ve çağrı yığını (Call Stack) için başlangıç seviyesinde doğru bir zihinsel model kurmak.
- `console.log` ile değer döndürme arasındaki farkı göstermek.
- `return` bulunmayan veya bazı yollarda çalışmayan JavaScript fonksiyonlarının `undefined` sonucunu teşhis etmek.
- Gizli girdi (Hidden Input), gizli etki ve belirsiz hata davranışının bakım ve test maliyetini açıklamak.
- Aynı sözleşmeyi karşılayan farklı uygulamaları davranış kanıtıyla karşılaştırmak.
- Normal, sınır ve geçersiz vaka testlerini doğrudan sözleşmeden türetmek.
- Yapay zekâ tarafından üretilen bir fonksiyonun sözleşmesini, çağrı izini ve başarısızlık sınırlarını bağımsız olarak denetlemek.

`V01-LO019` için başarı kanıtı, en az üç davranışın tam sözleşmesini yazmak ve bunları test vakalarıyla eşlemektir. `V01-LO020` için başarı kanıtı, iç içe bir çağrıda denetimin çağırandan çağrılana, oradan tekrar çağırana hangi sırada geçtiğini; her adımın girdisini, yerel durumunu ve dönüş değerini gösteren izdir. Fonksiyon sözdizimini ezberlemek bu iki sonucu tek başına karşılamaz.

## Prerequisites

Bu bölüm C04'teki algoritma ve izleme bilgisini, C12'deki bileşik kontrol akışı ve davranış koruma bilgisini kullanır. Aşağıdaki soruları notlara bakmadan cevaplamaya çalışın:

1. Bir algoritmanın girdisi, işlemi ve çıktısı nasıl ayrılır?
2. Bir programın çalışma izinde hangi ara durumlar kaydedilir?
3. Bir karar tablosu normal, sınır ve geçersiz vakaları nasıl görünür kılar?
4. Bir refactoring işleminde gözlenebilir davranışın korunduğu nasıl kanıtlanır?
5. Bir `return` ifadesinin mevcut fonksiyonu bitirdiğini C12 örneğinden hatırlıyor musunuz?

Şu küçük programı çalıştırmadan izleyin:

```js
const width = 4;
const height = 3;
const area = width * height;
console.log(area);
```

Girdi `width` ve `height`, işlem çarpma, sonuç 12'dir. Şimdi şu soruyu sorun: Programın başka üç yerinde aynı alan hesabı gerekirse ne olur? Çarpma ifadesini kopyalamak ilk bakışta kolaydır. Fakat negatif ölçülerin reddedilmesi, birim dönüşümü veya hata mesajı eklendiğinde dört kopyanın birlikte değiştirilmesi gerekir. Fonksiyon, yalnız tekrar azaltmak için değil, “dikdörtgen alanı hesaplama” davranışını adlandırmak ve bir sözleşmeye bağlamak için kullanılacaktır.

Çalışma ortamı olarak Node.js ve bir metin düzenleyici yeterlidir. Her örnekte şu sırayı izleyin:

1. Fonksiyonun sözleşmesini kendi cümlelerinizle yazın.
2. Kodu çalıştırmadan çağrı ve dönüş sırasını tahmin edin.
3. Gerçek çıktıyı gözleyin.
4. Tahminle sonuç arasındaki farkı ilk ayrışma noktasında açıklayın.
5. En az bir sınır ve bir geçersiz vaka ekleyin.

Ön koşulları tam hatırlamıyorsanız C04 ve C12'nin tamamını yeniden okumak yerine ilgili izleme ve davranış tablosu bölümlerini uygulayın. Amaç pasif tekrar değil, C13'te kullanılacak bilgiye yeniden erişebilmektir.

## Estimated Study Time

Bu chapter için 5-6 saat ayırın. Önerilen çalışma planı şöyledir:

| Çalışma | Süre | Üretilecek kanıt |
|---|---:|---|
| Ön bilgi kontrolü ve motivasyon | 30 dakika | Girdi–işlem–çıktı tablosu |
| Fonksiyon ve davranış sınırı | 55 dakika | Üç sorumluluk tanımı |
| Sözleşme, ön/son koşul | 70 dakika | Üç contract tablosu |
| Çağrı, dönüş ve yığın izi | 60 dakika | İki iç içe çağrı izi |
| Hata, etki ve gizli bağımlılık | 50 dakika | Kök neden analizi |
| Uygulamalı görev | 75 dakika | Çalışan üç fonksiyon ve testler |
| Özet ve geri çağırma | 30 dakika | Bir sayfalık kişisel özet |

Tek oturumda bitirmek zorunda değilsiniz. İlk gün fonksiyon ve contract modelini, ikinci gün çağrı izi ile laboratuvarı tamamlamak daha verimli olabilir. İkinci güne başlarken “fonksiyon neyi kabul eder?”, “neyi garanti eder?”, “hangi etkileri vardır?” ve “çağrı bitince denetim nereye döner?” sorularını notlara bakmadan cevaplayın.

Süre, yalnız metni okumayı değil kodu tahmin etmeyi, çalıştırmayı, tablo hazırlamayı ve açıklamayı kapsar. Örneklerin tamamını kopyalayıp çalıştırmak hızlı görünebilir; fakat kendi sözleşmenizi yazmadan yapılan çalışma, fonksiyonun neden doğru tasarlandığını öğretmez. Bir örnekte hata yaptıysanız süreyi uzatın. Bu, planın bozulması değil öğrenmenin ölçülmesidir.

## Introduction

Bir program büyürken ilk görülen sorun genellikle uzunluktur. Aynı hesap farklı yerlerde tekrarlanır, bir karar akışı yüzlerce satırın arasında kaybolur ve değişken adlarının neyi temsil ettiği belirsizleşir. Başlangıç öğrencisi fonksiyonu çoğu zaman “uzun kodu küçültmek” veya “aynı kodu tekrar çalıştırmak” için öğrenir. Bunlar yararlı sonuçlardır, fakat profesyonel yazılım mühendisliğindeki asıl güç daha derindedir: Fonksiyon, bir davranışa isim verir ve o davranışın sınırını tanımlar.

Bir kargo fiyatı hesapladığınızı düşünün. İlk sürüm şöyle olabilir:

```js
const weight = 4;
const pricePerKilogram = 30;
const shippingPrice = weight * pricePerKilogram;
console.log(shippingPrice);
```

Bu kod 120 üretir. Fakat bir ekip arkadaşı şu soruları sorabilir:

- Ağırlık negatif olabilir mi?
- Sıfır kilogram ücretsiz gönderi mi, geçersiz veri mi?
- Fiyatın para birimi nedir?
- Ondalık sonuç nasıl yuvarlanır?
- Geçersiz girdide hata mı oluşur, özel sonuç mu döner?
- Hesap bir indirim uyguluyor mu?
- Fonksiyon ekrana mı yazdırır, değeri mi döndürür?

Bu sorular kodun yalnız matematiğiyle cevaplanamaz. Davranışın sınırlarını belirleyen bir sözleşme gerekir. Sözleşme, fonksiyonun kabul ettiği girdileri, çağırandan beklediği koşulları, başarılı olduğunda garanti ettiği sonucu, yaptığı dış etkileri ve başarısız olduğunda ne olacağını açıklar.

Fonksiyonu şöyle yazabiliriz:

```js
function calculateShippingPrice(weight, pricePerKilogram) {
  return weight * pricePerKilogram;
}

const shippingPrice = calculateShippingPrice(4, 30);
console.log(shippingPrice);
```

Kod artık davranışı adlandırır, fakat sözleşme hâlâ tamamen görünür değildir. İsim yalnız niyete işaret eder. Geçerli değer aralığı, birim, hata davranışı ve yan etkiler ayrıca tanımlanmalıdır. İyi isim sözleşmenin yerini tutmaz; sözleşmenin okunmasını kolaylaştırır.

Bir fonksiyon çağrıldığında programın denetimi çağrı noktasından fonksiyon gövdesine geçer. Fonksiyon çalışır, bir değer döndürür veya hata üretir. Normal dönüşte denetim çağrı ifadesinin bulunduğu yere geri gelir. Bu hareketi anlamadan iç içe çağrıları, hata yığınlarını veya beklenmeyen `undefined` sonuçlarını teşhis etmek zordur.

Şirket ortamında fonksiyon sınırları ekip iletişiminin temelidir. Bir geliştirici fonksiyonu uygular, başka biri çağırır, test uzmanı sözleşmeye göre vakalar üretir ve kod incelemeci gizli bağımlılıkları arar. Sözleşme belirsizse taraflar farklı varsayımlarla çalışır. Kod derlenip çalışsa bile ürün davranışı yanlış olabilir.

Yapay zekâ fonksiyon yazmayı çok hızlandırır; ancak eksik gereksinimi sessizce tahmin edebilir. “Bir indirim fonksiyonu yaz” istemine karşı yüzde sınırını, para birimini ve geçersiz girdiyi kendisi seçebilir. Profesyonel geliştirici önce sözleşmeyi netleştirir, sonra AI önerisini bu sözleşmeye göre denetler. Bu chapter, fonksiyon yazma becerisini AI çağında daha önemli hâle getiren tam olarak bu sorumluluk modelini öğretir.

## Core Concepts

### Fonksiyon: adlandırılmış davranış sınırı

Fonksiyon, çağrılabilir bir davranış birimidir. Bir isim veya başka bir erişim yolu üzerinden bulunur, bir sorumluluk gerçekleştirir ve isteğe bağlı olarak sonuç üretir. “Kod bloğu” tanımı eksiktir; `if` ve `for` da kod blokları içerir, fakat bağımsız bir çağrı arayüzü ve dönüş sınırı sunmaz.

```js
function greetUser() {
  return "Merhaba";
}
```

Bu satırlar fonksiyonu tanımlar. Gövde hemen çalışmaz. Çalıştırmak için çağrı gerekir:

```js
const message = greetUser();
console.log(message);
```

Tanım, hangi davranışın mevcut olduğunu oluşturur. Çağrı, o davranışı şimdi çalıştırır. Bu ayrım başlangıçtaki en önemli zihinsel modellerden biridir.

### Sorumluluk: fonksiyon hangi işi üstleniyor?

Bir fonksiyonun sorumluluğu, hangi gözlenebilir işi yerine getirdiğini ifade eder. İyi bir sorumluluk fiille adlandırılabilir: `calculateTotal`, `normalizeUsername`, `isEligibleForDiscount`, `formatReportLine`. `doStuff` veya `processData` gibi adlar davranışın sınırını söylemez.

Sorumluluğu yalnız satır sayısıyla ölçmeyin. Beş satırlık fonksiyon üç ilgisiz iş yapabilir; otuz satırlık bir parser tek ve tutarlı bir sorumluluk taşıyabilir. Başlangıç düzeyinde şu testi kullanın:

> Bu fonksiyonun ne yaptığını “ve” bağlacı olmadan tek cümleyle söyleyebiliyor muyum?

“Siparişi doğrular ve fiyatı hesaplar ve ekrana yazdırır” üç sorumluluk işaretidir. “Siparişin geçerli olup olmadığını belirler” daha açık bir davranış sınırıdır.

### Soyutlama: nasıl yaptığını değil, ne sunduğunu kullanmak

Soyutlama (Abstraction), bir davranışı kullanmak için iç ayrıntıların tamamını bilme gereksinimini azaltır. `calculateRectangleArea(4, 3)` çağıran kişi çarpma satırını bilmek zorunda değildir; sözleşmeyi bilmesi yeterlidir. Uygulama daha sonra farklı biçimde yazılabilir, fakat sözleşme korunuyorsa çağıran kod değişmeyebilir.

Soyutlama bilgisizce gizleme değildir. Çağıranın doğru karar vermesi için gerekli bilgiler arayüzde bulunmalıdır. Fonksiyon negatif değeri reddediyorsa bu sınır gizlenemez. Ağ isteği yapıyor, dosya yazıyor veya global durumu değiştiriyorsa bu etki sözleşmenin parçasıdır.

### Fonksiyon sözleşmesinin bileşenleri

Başlangıç için kullanılacak contract şablonu şöyledir:

| Alan | Soru |
|---|---|
| Sorumluluk | Fonksiyon hangi tek davranışı gerçekleştirir? |
| Kabul edilen girdi | Hangi değer veya veri biçimleri alınır? |
| Ön koşul | Çağrıdan önce ne doğru olmalıdır? |
| Çıktı | Fonksiyon hangi değeri döndürür? |
| Son koşul | Başarılı dönüşten sonra ne garanti edilir? |
| Etki | Fonksiyon dışarıda neyi değiştirir veya gözlenebilir ne yapar? |
| Hata davranışı | Geçersiz girdi veya işlem başarısızlığında ne olur? |

Örnek sözleşme:

| Alan | `calculateRectangleArea` |
|---|---|
| Sorumluluk | Dikdörtgen alanını hesaplamak |
| Girdi | `width`, `height`: sonlu sayılar |
| Ön koşul | İki değer de 0 veya daha büyük |
| Çıktı | Sayısal alan |
| Son koşul | Sonuç `width * height`; sonuç negatif değil |
| Etki | Yok; girdileri değiştirmez |
| Hata | Ön koşul bozuksa `RangeError` |

Bu tablo implementation değildir. Döngü, çarpma veya başka bir teknik kullanılacağını söylemez. Davranışın dışarıdan gözlenebilir sınırını tanımlar.

### Ön koşul: çağrıdan önce doğru olması gereken

Ön koşul, fonksiyonun sözleşmesini yerine getirebilmesi için çağıranın sağlaması gereken koşuldur. Örneğin bölüm işlemi yapan fonksiyonda bölenin sıfır olmaması bir ön koşul olabilir.

```js
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new RangeError("Bölen sıfır olamaz");
  }

  return dividend / divisor;
}
```

Burada iki tasarım dili vardır. “Çağıran sıfır göndermemelidir” ön koşuldur. Fonksiyon ayrıca ihlali çalışma zamanında denetleyip açık hata üretir. Her ön koşulun içeride denetlenmesi her sistemde zorunlu değildir; güven sınırı, maliyet ve dil araçları kararı etkiler. Ancak sözleşme ihlalinin sessizce anlamsız sonuç üretmesi başlangıç için kötü varsayılandır.

Ön koşul, fonksiyonun yapması gereken iş ile karıştırılmamalıdır. “Metin boş olmamalı” ön koşul olabilir. “Metnin başındaki ve sonundaki boşluğu kaldır” ise fonksiyon davranışıdır. Hangi sorumluluğun çağırana, hangisinin fonksiyona ait olduğu açık seçilmelidir.

### Son koşul: başarılı dönüşten sonra garanti edilen

Son koşul, ön koşullar sağlanmış ve fonksiyon normal tamamlanmışsa hangi özelliğin doğru olduğunu belirtir. `absolute(number)` için sonuç negatif değildir ve büyüklüğü girdinin büyüklüğüne eşittir. `normalizeUsername(text)` için sonuç baş/son boşluk içermez ve seçilen kurala göre küçük harftedir.

Son koşul yalnız örnek çıktı değildir. “`normalizeUsername(" Ada ")` değeri `"ada"` olur” tek vakadır. “Sonuç baş/son boşluk içermez ve küçük harfe dönüştürülmüştür” genel garantidir. Testler bu garantiyi temsil eden vakalar üretir.

### Etki ve saf davranış sınırı

Fonksiyonun döndürdüğü değer dışında gözlenebilen değişikliklere etki (Effect) denir. Ekrana yazmak, dosya değiştirmek, bir nesnenin özelliğini güncellemek veya global sayaç artırmak etkidir.

```js
let calculationCount = 0;

function calculateDouble(number) {
  calculationCount += 1;
  return number * 2;
}
```

Bu fonksiyon 6 için 12 döndürür, fakat aynı zamanda dış sayacı değiştirir. Yalnız dönüş değerine bakan test sözleşmenin yarısını görmez. Eğer sayaç gerekli ise belirtilmeli ve test edilmelidir. Gereksiz ise kaldırılması fonksiyonu daha kolay anlamayı ve sınamayı sağlar.

Saf fonksiyon (Pure Function) kavramı C15'te ayrıntılı işlenecektir. Bu chapter'da yalnız şu ayrım gerekir: Bir fonksiyonun sözleşmesi, dışarıdan gözlenebilir etkilerini gizlememelidir.

### Hata davranışı

Geçersiz girdi veya işlemin tamamlanamaması durumunda fonksiyonun ne yapacağı sözleşmenin parçasıdır. Yaygın seçenekler şunlardır:

- Açık hata fırlatmak.
- Başarı/başarısızlığı temsil eden özel bir sonuç döndürmek.
- Önceden tanımlanmış güvenli bir varsayılan kullanmak.
- İşlemi yapmayıp kontrollü bir durum bildirmek.

“Hiçbir şey yapma” bile gözlenebilir ve belgelenmişse bir davranıştır. Fakat sessizce `undefined`, `NaN` veya eski değer üretmek çoğu zaman belirsizlik yaratır.

Tek bir evrensel hata stratejisi yoktur. Kullanıcı formu bütün hataları toplamak isteyebilir; düşük seviyeli utility geçersiz programcı girdisinde hata fırlatabilir. Önemli olan kararın açık, tutarlı ve test edilebilir olmasıdır.

### Çağıran ve çağrılan

Fonksiyonu kullanan kod çağıran, çalışan fonksiyon çağrılan taraftır:

```js
function square(number) {
  return number * number;
}

const result = square(5);
```

Atama satırı çağıran bağlamdır; `square` gövdesi çağrılan bağlamdır. Çağıran 5 değerini sağlar ve sonucu bekler. Çağrılan sözleşmesi uyarınca 25 üretir. Dönüş sonrasında atama tamamlanır.

### Çağrı ve dönüş izi

Şu örneği adım adım izleyin:

```js
function double(number) {
  return number * 2;
}

function addOne(number) {
  return number + 1;
}

const result = addOne(double(3));
```

JavaScript dış çağrının argümanını hesaplamak için önce `double(3)` çağrısını tamamlar:

1. Ana akış `addOne(double(3))` ifadesine gelir.
2. `addOne` için argüman değeri gerekir.
3. `double(3)` çağrılır.
4. `double` içinde `number = 3` olur.
5. `number * 2` değeri 6 hesaplanır.
6. `double` 6 döndürür; denetim dış ifadedeki çağrı noktasına gelir.
7. İfade artık `addOne(6)` biçimindedir.
8. `addOne` çağrılır; yerel `number = 6` olur.
9. 7 döndürülür.
10. `result` değeri 7 olur.

İç içe yazım, dış fonksiyonun önce çalıştığı anlamına gelmez. Argüman ifadesinin değeri önce gerekir.

### Çağrı çerçevesi ve yığın sezgisi

Her aktif fonksiyon çağrısının kendi yerel bilgisi ve dönüş noktası olduğunu düşünün. Buna çağrı çerçevesi (Call Frame) için sezgisel model diyebiliriz. Yeni çağrı başladığında yeni kart en üste konur; çağrı bittiğinde üst kart çıkar ve alttaki kartın dönüş noktasından devam edilir.

```js
function multiplyByTwo(number) {
  return number * 2;
}

function calculateScore(base) {
  const doubled = multiplyByTwo(base);
  return doubled + 10;
}

const score = calculateScore(5);
```

Yığın sezgisi:

1. Ana program `calculateScore(5)` dönüşünü bekler.
2. `calculateScore` çerçevesi `base = 5` ile aktiftir.
3. Bu fonksiyon `multiplyByTwo(5)` dönüşünü bekler.
4. `multiplyByTwo` 10 döndürür ve çerçevesi kapanır.
5. `calculateScore` içinde `doubled = 10` olur.
6. Fonksiyon 20 döndürür ve çerçevesi kapanır.
7. Ana program `score = 20` atamasını tamamlar.

Gerçek motorlar optimizasyon yapabilir. Bu model implementation'ın birebir fiziksel resmi değil, eşzamanlı normal fonksiyonların yürütme sırasını anlamak için güvenilir başlangıç modelidir. Asenkron çağrı, generator ve kuyruk davranışları bu chapter'ın dışındadır.

### `return`, `console.log` değildir

```js
function add(a, b) {
  console.log(a + b);
}

const result = add(2, 3);
console.log("sonuç:", result);
```

İlk log 5 yazar; fonksiyon açık değer döndürmediği için `result` değeri `undefined` olur. İkinci çıktı `sonuç: undefined` biçimindedir. Ekrana yazdırma bir etkidir; değeri çağırana iletmez.

Doğru değer üretimi:

```js
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log("sonuç:", result);
```

Şimdi fonksiyon hesaplamayı yapar ve değeri döndürür. Yazdırma kararı çağıranda kalır. Bu ayrım fonksiyonu başka hesaplarda, testlerde veya farklı arayüzlerde yeniden kullanmayı kolaylaştırır.

### Koşullu dönüş ve eksik yol

```js
function getAccessLabel(age) {
  if (age >= 18) {
    return "adult";
  }
}
```

18 ve üzeri için sonuç vardır; daha küçük değerlerde fonksiyon gövdesi normal biter ve JavaScript `undefined` döndürür. Eğer sözleşme her geçerli yaş için bir etiket vaat ediyorsa uygulama sözleşmeyi ihlal eder.

```js
function getAccessLabel(age) {
  if (age >= 18) {
    return "adult";
  }

  return "minor";
}
```

Artık iki geçerli yol da açık sonuç üretir. Geçersiz negatif yaşın davranışı hâlâ sözleşmede seçilmelidir.

### Gizli girdi

```js
let taxRate = 0.2;

function calculateTax(price) {
  return price * taxRate;
}
```

Fonksiyon görünüşte yalnız `price` alır, fakat sonucu `taxRate` global durumuna da bağlıdır. `taxRate` gizli girdidir. Aynı `price` farklı zamanlarda farklı sonuç üretebilir. Bu mutlaka yasak değildir; fakat sözleşmede ve test düzeninde görünür olmalıdır.

Başlangıç için açık sürüm:

```js
function calculateTax(price, taxRate) {
  return price * taxRate;
}
```

Parametre ve argüman ayrıntıları C14'te öğretilecektir. Buradaki ders, sonucu etkileyen bilginin arayüzde görünmesidir.

### Aynı sözleşme, farklı uygulama

```js
function sumWithLoop(numbers) {
  let total = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }

  return total;
}
```

Başka bir implementation farklı bir döngü veya ileride koleksiyon yöntemi kullanabilir. Eğer kabul edilen girdiler, sonuç, etkiler ve hata davranışı aynıysa çağıran açısından sözleşme korunur. Bu ayrım refactoring'i mümkün kılar: İç mekanizma değişebilir, dış davranış kanıtla aynı tutulur.

### İmza ile tam sözleşme aynı şey değildir

Fonksiyon imzası (Function Signature), çağrılabilir arayüzün görünen biçimini tanımlar. Dile veya kullanılan gösterime göre isim, parametre konumları ve sonuç bilgisi imzanın parçası olabilir. JavaScript'te şu tanım bize bir isim ve iki giriş konumu gösterir:

```js
function calculateDistance(speed, duration) {
  return speed * duration;
}
```

Bu imza iki değer beklendiğini düşündürür; fakat tek başına şu soruları cevaplamaz:

- Hız kilometre/saat mi, metre/saniye mi?
- Süre saat mi, saniye mi?
- Negatif değer kabul edilir mi?
- `NaN` veya `Infinity` ne olur?
- Sonuç hangi birimdedir?
- Girdi eksik olduğunda ne olur?
- Fonksiyon dış durum değiştirir mi?

Dolayısıyla imza sözleşmenin görünür giriş kapısıdır, sözleşmenin tamamı değildir. Tür güvenli bir dil bazı değer sınıflarını imzada ifade edebilir; yine de birim, aralık, ilişkisel kısıt ve etki gibi bilgiler ayrıca gerekebilir.

İyi bir contract, imzayla çelişmez. Fonksiyon adı `calculateDistance` iken gerçekte ekrana yazdırıp değer döndürmüyorsa isim ve davranış birbirinden kopmuştur. İmza, belge, test ve implementation aynı vaadi farklı kanıt biçimleriyle desteklemelidir.

### Her çağrı kendi yerel durumuna sahiptir

Aynı fonksiyon art arda çağrıldığında her çağrı kendi parametre ve yerel değişken değerlerine sahiptir:

```js
function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

const first = calculateTotal(10, 2);
const second = calculateTotal(7, 3);
```

İlk çağrının yerel `price=10`, `quantity=2`, `total=20` değerleri vardır. Çağrı tamamlanır. İkinci çağrı `price=7`, `quantity=3`, `total=21` ile yeni bir yerel bağlam oluşturur. İlk çağrının `total` değeri ikinci çağrının yerel değişkenine sızmaz.

Bu model, global durumda tutulan değerlerle karşılaştırıldığında önemlidir:

```js
let total = 0;

function calculateTotal(price, quantity) {
  total = price * quantity;
  return total;
}
```

Artık her çağrı dışarıdaki `total` değerini değiştirir. Sonuç doğru görünse bile fonksiyon ek bir etkiye sahiptir. Başka kod aynı global değeri okuyorsa çağrı sırası davranışı etkiler. Sözleşme bu etkiyi belirtmiyorsa çağıran eksik bilgiyle çalışır.

### Değerlendirme sırası ve birden çok argüman çağrısı

Şu ifadeyi inceleyin:

```js
function announce(label, value) {
  console.log(label);
  return value;
}

function add(left, right) {
  return left + right;
}

const total = add(
  announce("sol", 2),
  announce("sağ", 3),
);
```

JavaScript çağrı argümanlarını soldan sağa değerlendirir. Önce `announce("sol", 2)` çağrılır, `sol` yazılır ve 2 döner. Sonra sağ çağrı çalışır, `sağ` yazılır ve 3 döner. En son `add(2, 3)` çağrılır ve 5 döner. Sonucun yalnız 5 olduğunu bilmek, etkilerin sırasını bilmek için yeterli değildir.

Koşul veya argüman hesaplayan fonksiyonların etkili olması bu nedenle izlemeyi zorlaştırır. Aynı matematiksel toplamda terimlerin sırası önemsiz görünebilir, fakat fonksiyon çağrıları zaman ve etki taşır. Refactoring sırasında çağrı sırası değişirse log, sayaç, hata veya dış işlem sırası değişebilir.

### Erken dönüş ve contract yolları

Bir fonksiyon birden fazla `return` kullanabilir:

```js
function getDeliveryStatus(isAddressValid, hasCapacity) {
  if (!isAddressValid) {
    return "invalid-address";
  }

  if (!hasCapacity) {
    return "no-capacity";
  }

  return "ready";
}
```

Üç dönüş noktası üç farklı contract sonucunu temsil eder. Erken dönüş burada reddetme nedenlerini ana yoldan ayırır. Ancak her sonuç sözleşmede belgelenmeli ve test edilmelidir. `return` sonrasındaki satırlar o çağrıda çalışmaz.

Şu hatayı düşünün:

```js
function getDeliveryStatus(isAddressValid, hasCapacity) {
  if (!isAddressValid) {
    return "invalid-address";
    console.log("Adres reddedildi");
  }

  if (hasCapacity) {
    return "ready";
  }
}
```

İlk log erişilemezdir; `hasCapacity=false` ve geçerli adres yolunda açık dönüş yoktur. Yol tablosu iki sorunu da gösterir. Contract “her çağrı bir durum etiketi döndürür” diyorsa implementation eksiktir.

### Hata fırlatıldığında çağrı akışı

Bir fonksiyon hata fırlattığında normal `return` gerçekleşmez. Hata yakalanmadığı sürece çağrı zincirinde yukarı doğru ilerler:

```js
function requirePositive(number) {
  if (number <= 0) {
    throw new RangeError("Sayı pozitif olmalıdır");
  }

  return number;
}

function calculateHalf(number) {
  const validNumber = requirePositive(number);
  return validNumber / 2;
}

const result = calculateHalf(0);
```

İz:

1. Ana akış `calculateHalf(0)` çağrısını başlatır.
2. Dış fonksiyon `requirePositive(0)` çağrısını başlatır.
3. İç fonksiyon ön koşul ihlalini görür ve `RangeError` fırlatır.
4. İç fonksiyon değer döndürmez.
5. Dış fonksiyondaki atama tamamlanmaz ve bölme çalışmaz.
6. Hata dışarıda yakalanmadığı için ana atama da tamamlanmaz.

Bu chapter `try/catch` ayrıntılarını öğretmez. Buradaki temel, failure behavior'ın normal dönüşten farklı kontrol akışı oluşturduğunu anlamaktır. “Fonksiyon sayı döndürür” contract'ı tek başına yetersizdir; hangi koşulda hata ürettiği de belirtilmelidir.

### Güçlü ve zayıf sözleşme

“Bir sayı döndürür” çok zayıf bir garantidir. Negatif mi, sonlu mu, hangi birimde mi bilinmez. “Geçerli genişlik ve yükseklik için negatif olmayan, sonlu ve `width * height` değerine eşit alan döndürür” daha güçlü ve test edilebilir bir son koşuldur.

Ancak gereksiz derecede ayrıntılı contract da implementation özgürlüğünü kısıtlayabilir. “Tam olarak üç geçici değişken ve `for` döngüsü kullanır” çağıranın ihtiyaç duymadığı ayrıntıyı vaade dönüştürür. İç mekanizma değiştiğinde davranış aynı olsa bile sözleşme bozulmuş görünür.

Uygun contract şu dengeyi kurar:

- Çağıranın güvenmesi gereken davranış yeterince kesin olmalıdır.
- Implementation'ın değişebilmesi için iç ayrıntı gereksiz yere sabitlenmemelidir.
- Ölçülebilir olmayan “hızlı”, “iyi”, “uygun” gibi sözcükler ölçütle açıklanmalıdır.
- Birimler, aralıklar ve özel değerler açık olmalıdır.

### Contract ile gereksinim arasındaki izlenebilirlik

Fonksiyon sözleşmesi ürün gereksiniminden kopuk yazılmamalıdır. Örneğin “tamamlanma yüzdesi tam sayıya yuvarlanır” kararı, kullanıcı arayüzü gereksiniminden gelmelidir. Geliştirici keyfî olarak aşağı yuvarlarsa 2/3 için 66 mı 67 mi gösterileceği ürün davranışına dönüşür.

İzlenebilir basit zincir:

```text
Ürün kuralı
→ fonksiyon contract maddesi
→ implementation kararı
→ test vakası
→ kullanıcıya görünen sonuç
```

Bir test başarısız olduğunda hangi ürün kuralını koruduğu bilinirse doğru karar verilir. Aksi hâlde test yalnız eski implementation'ı dondurabilir. Karakterizasyon testi mevcut davranışı kaydeder; gereksinim testi istenen davranışı kanıtlar. İkisi çelişiyorsa bilinçli migration veya hata düzeltme gerekir.

### Contract ihlalinin sorumluluğunu teşhis etmek

Design by Contract düşüncesinde ön koşul ihlali genellikle çağıranın, son koşul ihlali çağrılan implementation'ın sorumluluğuna işaret eder. Fakat gerçek sistemde güven sınırları, eşzamanlı değişim ve dış servisler resmi karmaşıklaştırabilir. Başlangıç için şu tanı yöntemi yeterlidir:

1. Gerçek çağrı girdilerini kaydet.
2. Ön koşulu kontrol et.
3. Ön koşul yanlışsa değeri üreten çağırana geri git.
4. Ön koşul doğruysa sonucu ve etkileri son koşulla karşılaştır.
5. Garanti bozuksa fonksiyon implementation'ını incele.
6. Sözleşme belirsizse ürün veya mimari kararı netleştir.

Bu yöntem “kim suçlu?” aramak için değil, düzeltmenin hangi sınırda yapılacağını belirlemek içindir.

### Fonksiyon contract'ını kendi sözlerinizle test etme

Bir fonksiyonu gerçekten anlayıp anlamadığınızı şu yöntemle ölçün:

1. Kodu kapatın.
2. Fonksiyon adını ve yedi contract alanını boş kâğıda yazın.
3. Normal, sınır ve geçersiz birer örnek üretin.
4. Çağrıdan önce ve dönüşten sonra doğru olanları söyleyin.
5. Ekrana yazma, mutation veya global değişim olup olmadığını belirtin.
6. Sonra kodu açıp sözleşmenizle karşılaştırın.

Kodu okuyup açıklamak, contract'ı bağımsız üretmekten daha kolaydır. Geri çağırma çalışması eksik zihinsel modeli görünür kılar.

## Engineering Perspective

### Fonksiyon sınırı neden mimari bir karardır?

Fonksiyon oluşturmak yalnız kodu fiziksel olarak başka yere taşımak değildir. Hangi bilginin içeri gireceğini, hangi sonucun dışarı çıkacağını ve hangi kararın bu birime ait olduğunu seçersiniz. Yanlış sınır, birbirine gereksiz bağlı fonksiyonlar üretir. Doğru sınır, davranışı bağımsız düşünme ve test etme olanağı sağlar.

Örneğin `processOrder` adlı fonksiyon doğrulama, fiyat hesaplama, dosyaya yazma ve kullanıcıya mesaj verme işlerini birlikte yapıyorsa dört farklı değişim nedeni taşır. Vergi kuralı değiştiğinde, kayıt biçimi değiştiğinde veya mesaj metni güncellendiğinde aynı fonksiyon etkilenir. Davranışların contract'ları ayrı düşünülebiliyorsa ayrıştırma adayıdır.

Ancak her iki satırı fonksiyona çevirmek de iyi tasarım değildir. `addOneToCounter` gibi yalnız tek yerde kullanılan ve alan anlamı taşımayan aşırı küçük sınırlar okuyucuyu dosyalar arasında dolaştırabilir. Fonksiyon sınırı; niyet, bağımsız sözleşme, test edilebilirlik ve değişim nedeni ile gerekçelendirilmelidir.

### Sözleşme implementation'dan önce neden yazılır?

Kod yazmaya hemen başlandığında geliştirici ilk aklına gelen veri ve hata davranışını uygulayabilir. Sözleşme önce yazıldığında belirsizlik görünür olur. “Yaş negatifse ne olacak?”, “boş liste toplamı nedir?”, “girdi değiştirilecek mi?” soruları implementation maliyeti oluşmadan cevaplanabilir.

Contract-first çalışma formal belge zorunluluğu demek değildir. Küçük bir fonksiyonda yedi satırlık tablo veya kısa JSDoc açıklaması yeterli olabilir. Kritik finans veya güvenlik davranışında tür, şema, assertion, test ve resmî dokümantasyon birlikte gerekebilir. Biçim bağlama göre değişir; açıklık ilkesi değişmez.

### Girdi doğrulama ile ön koşul ilişkisi

Ön koşulu yazmak, doğrulamayı nereye koyacağınız sorusunu doğurur. Dış dünyadan gelen kullanıcı girdisi güven sınırında doğrulanmalıdır. Program içindeki küçük yardımcı fonksiyon, yalnız doğrulanmış verilerle çağrılıyorsa her çağrıda aynı pahalı kontrolü tekrarlamayabilir. Bununla birlikte sessiz varsayım yerine contract açık olmalıdır.

Karar ölçütleri:

- Girdi güvenilmeyen dış kaynaktan mı geliyor?
- İhlal ciddi veri veya güvenlik riski yaratır mı?
- Kontrolün maliyeti nedir?
- Dilin tür sistemi bu koşulu ifade edebiliyor mu?
- Hata çağıranın düzeltebileceği bir durum mu?
- Fonksiyon genel kullanıma açık mı, kapalı iç yardımcı mı?

Bu chapter tek bir politika dayatmaz; gerekçeli ve tutarlı karar ister.

### Hata ile geçerli “sonuç yok” durumunu ayırmak

Bir aramada eşleşme bulunmaması normal bir sonuç olabilir. Geçersiz arama ölçütü ise hata olabilir. Her ikisini de `undefined` ile temsil etmek çağıranın nedeni ayırmasını zorlaştırır.

```js
function findLabel(code) {
  if (typeof code !== "string") {
    throw new TypeError("Kod metin olmalıdır");
  }

  if (code === "A") {
    return "active";
  }

  return null;
}
```

Bu contract'ta `null`, geçerli fakat bulunmayan sonucu; hata, geçersiz türü temsil eder. Bu yalnız bir tasarım örneğidir. Önemli olan iki durumun çağıran tarafından güvenilir biçimde ayrılabilmesidir.

### Değer döndürme ve komut verme

Bir fonksiyon hesaplama sonucu döndürebilir veya bir etki gerçekleştirebilir. İkisini karıştırmak testleri zorlaştırabilir. `calculateInvoiceTotal` değer döndürür; `printInvoice` yazdırma etkisi yapar. Ayrı contract'lar, hesaplamayı terminal olmadan test etmeyi sağlar.

Bu ayrım her zaman mutlak değildir. Veritabanına kayıt ekleyen fonksiyon hem etki yapıp hem oluşturulan kimliği döndürebilir. Sözleşme iki davranışı da açıkça göstermelidir. Başlangıç için “hesaplama” ve “I/O” sorumluluklarını ayırmak güçlü bir varsayılandır.

### Contract'tan test türetme

Sözleşmenin her cümlesi test fikri üretmelidir. `calculateRectangleArea` örneğinde:

- Normal: 4 ve 3 sonucu 12.
- Sınır: 0 ve 3 sonucu 0.
- Geçersiz: -1 ve 3, `RangeError`.
- Son koşul: geçerli girdide sonuç negatif değil.
- Etki: girdi değerleri değişmiyor.
- Tutarlılık: 4×3 ile 3×4 aynı sonuç; bu alan özelliğidir.

Testin yalnız implementation satırlarını çalıştırması değil, contract davranışını temsil etmesi gerekir. Bir satır kapsamı yüzde yüz görünürken geçersiz girdi davranışı hiç sınanmamış olabilir.

### Çağrı izi hata ayıklamada nasıl kullanılır?

Bir hata yığını, hangi fonksiyonun hangisini çağırdığını gösterir. Başlangıç öğrencisi çoğu zaman en üstteki hata mesajına bakıp rastgele satır değiştirir. Daha iyi yöntem:

1. Hata üreten en iç çağrıyı bulun.
2. O çağrının gerçek girdilerini kaydedin.
3. Girdilerin ön koşulu karşılayıp karşılamadığını kontrol edin.
4. Karşılamıyorsa yanlış verinin hangi çağırandan geldiğini izleyin.
5. Karşılıyorsa fonksiyonun implementation veya contract hatasını inceleyin.
6. İlk contract violation için regresyon testi yazın.

Bu yöntem suçu bir fonksiyona atmak değil, sözleşmenin ilk bozulduğu sınırı bulmaktır.

### Gizli bağımlılık ve test güvenilirliği

Fonksiyon saat, rastgele sayı, global ayar veya dış dosyayı gizlice okuyorsa aynı açık girdide farklı sonuç üretebilir. Testler aralıklı başarısız olabilir. Çözüm her şeyi parametre yapmak olmak zorunda değildir; dependency injection ve farklı mimari araçlar sonraki akademilerde öğrenilecektir. C13 düzeyinde en azından bağımlılığı contract'ta adlandırın ve testin onu nasıl kontrol ettiğini açıklayın.

### İsim sözleşmenin kısa özeti olmalıdır

`validateAndSaveUser` adı iki davranışı itiraf eder. `isValid` hangi varlığın, hangi kurala göre geçerli olduğunu söylemez. `handle` ve `process` çoğu zaman fazla geniştir. İyi isim, fonksiyonun sonucunu tahmin etmeye yardım eder:

- `calculateOrderTotal`: bir değer hesaplar.
- `isEligibleForDiscount`: boolean karar üretir.
- `normalizeUsername`: dönüştürülmüş metin üretir.
- `printOrderSummary`: yazdırma etkisini adında gösterir.

İsim tek başına bütün contract değildir, fakat yanlış beklenti üretmemelidir.

### AI ile contract-first çalışma

Zayıf istem:

> Bir indirim fonksiyonu yaz.

Bu istem yüzde sınırı, fiyat alanı, yuvarlama ve hata davranışını belirsiz bırakır. Model bunları uydurabilir.

Güçlü süreç:

1. Önce AI'dan eksik contract sorularını listelemesini isteyin.
2. Ürün kararlarını siz veya yetkili kişi cevaplasın.
3. Accepted input, precondition, output, effect ve failure tablosunu kesinleştirin.
4. AI'dan implementation ile testleri bu sözleşmeye ayrı ayrı eşlemesini isteyin.
5. Kodun her yolunu ve çağrı sırasını kendiniz izleyin.
6. Modelin eklediği gizli varsayımları reddedin veya belgeleyin.

Örnek denetim istemi:

> Bu fonksiyonu yeniden yazmadan önce açık ve gizli girdileri, ön koşulları,
> son koşulları, etkileri ve hata davranışını çıkar. Belirsiz noktaları soru
> olarak döndür. Sonra her contract maddesine karşılık gelen testi belirt.

AI hızlı taslak üretir; contract otoritesi değildir. Ürün ve teknik sorumluluk değişikliği kabul eden insandadır.

### Kod incelemesinde contract soruları

Bir fonksiyon PR'ını incelerken şu soruları kullanın:

- İsim tek sorumluluğu doğru ifade ediyor mu?
- Sonucu etkileyen bütün girdiler görünür mü?
- Kabul edilen değer alanı açık mı?
- Ön koşul ihlali nasıl ele alınıyor?
- Her başarılı yol contract'taki sonucu üretiyor mu?
- `undefined` bilinçli sonuç mu, eksik `return` mü?
- Girdiler veya dış durum değişiyor mu?
- Hata ile normal “bulunamadı” sonucu ayrılıyor mu?
- Testler normal, sınır ve geçersiz vakaları kapsıyor mu?
- Aynı contract daha basit bir sınırla ifade edilebilir mi?
- AI kullanıldıysa öneri bağımsız doğrulandı mı?

Bu sorular stil tartışmasını davranış tartışmasına dönüştürür.

### Fonksiyon hataları için sistematik debug protokolü

Bir fonksiyon beklenmeyen sonuç verdiğinde hemen gövdeyi yeniden yazmayın. Önce sözleşme sınırında kanıt toplayın:

1. Beklenen davranışı contract cümlesi olarak yazın.
2. Hatayı üreten en küçük çağrıyı oluşturun.
3. Gerçek argüman değerlerini çağrıdan hemen önce kaydedin.
4. Ön koşulların her birini doğru/yanlış olarak işaretleyin.
5. Fonksiyon gövdesinde karar ve dönüş yollarını izleyin.
6. Dönüş değerini ve dış durumdaki etkileri ayrı kaydedin.
7. Beklenen ve gerçek davranışın ilk ayrıştığı adımı bulun.
8. En küçük düzeltmeyi yapın ve regresyon testini çalıştırın.

Örnek:

```js
function calculateAverage(total, count) {
  return total / count;
}

console.log(calculateAverage(0, 0)); // NaN
```

Belirti `NaN` değeridir. Kök neden yalnız bölme satırı değildir; contract `count = 0` davranışını tanımlamamıştır. Ürün kararına göre boş veri hata, `null` veya başka kontrollü sonuç olabilir. Debug süreci önce sözleşme boşluğunu, sonra implementation kararını düzeltir.

Gözlem eklerken hassas veriyi veya üretim sırrını loglamayın. Yerel eğitim örneğinde değer yazdırmak yararlıdır; gerçek sistemde güvenli yapılandırılmış log, maskeleme ve erişim politikaları gerekir. Debug kolaylığı güvenlik sözleşmesini bozmamalıdır.

### Test matrisi hazırlama

Bir fonksiyonun testlerini sezgiyle rastgele seçmek yerine contract alanlarına bağlayın:

| Contract alanı | Test sorusu | Örnek |
|---|---|---|
| Kabul edilen tür | Doğru tür çalışıyor mu? | `price=100` |
| Alt sınır | İlk geçerli değer nedir? | `price=0` |
| Üst sınır | Son geçerli değer nedir? | `rate=1` |
| Geçersiz tür | Nasıl reddedilir? | `price="100"` |
| İlişkisel kısıt | Değerler birbiriyle uyumlu mu? | `completed <= total` |
| Son koşul | Genel garanti doğru mu? | sonuç 0-100 arası |
| Etki | Dış durum değişiyor mu? | girdi nesnesi aynı |
| Hata | Hata türü ve sınırı doğru mu? | `RangeError` |

Bu matris her olası değeri sınamaz. Davranışı değiştiren eşdeğer sınıfları ve sınırları seçer. Kritik kurallarda ek property-based, fuzz veya güvenlik testleri gerekebilir; bunlar sonraki akademilerde derinleşecektir.

### Güven sınırındaki fonksiyonlar

Dış kullanıcı, dosya, ağ veya AI çıktısı alan fonksiyon güvenilmeyen veriyle karşılaşır. Bu sınırdaki contract yalnız iş sonucunu değil doğrulama ve kaynak kısıtlarını da açıklamalıdır. Örneğin bir metin dönüştürücü, yalnız türü değil izin verilen uzunluğu da sınırlayabilir. Aşırı büyük girdi bellek veya süre sorununa yol açabilir.

Başlangıç öğrencisi için güvenli kontrol listesi:

- Tür doğru mu?
- Değer aralıkta mı?
- Uzunluk veya adet sınırı var mı?
- Girdi boş olabilir mi?
- Özel sayılar (`NaN`, `Infinity`) kabul ediliyor mu?
- Hata mesajı gizli bilgi açığa çıkarıyor mu?
- Fonksiyon girdiyi beklenmedik biçimde değiştiriyor mu?

Bu kontroller her iç utility'de kopyalanmamalıdır. Sistemin güven sınırında merkezî doğrulama, içeride açık ön koşullar kullanmak daha sürdürülebilir olabilir. Karar mimariye bağlıdır; görünmez varsayım olmamalıdır.

### Performans bir sözleşme midir?

Çoğu küçük fonksiyonda “hızlı” ifadesi belirsizdir ve contract'a konmamalıdır. Fakat bazı sistemlerde yanıt süresi, bellek sınırı veya maksimum girdi boyutu kullanıcıya verilen gerçek garantidir. Böyle durumda ölçülebilir performans hedefi sözleşmenin operasyonel parçası olabilir.

Örneğin “10.000 öğeye kadar 100 milisaniye içinde sonuç” belirli ortam, ölçüm yöntemi ve hata payıyla tanımlanmalıdır. “Bu implementation tek döngü kullanır” performans garantisi değildir. Donanım, runtime ve veri dağılımı sonucu etkiler.

C13'te performans optimizasyonu yapılmaz. Öğrenilecek ilke şudur: Çağıranın güvenmesi gereken ölçülebilir davranış sözleşmede yer alabilir; yalnız iç mekanizma veya kanıtsız hız iddiası yer almamalıdır.

### Ekipler arası fonksiyon sözleşmesi

Tek geliştiricili alıştırmada belirsizliği zihninizde tamamlayabilirsiniz. Ekipte bu varsayım paylaşılmayabilir. Frontend geliştiricisi `null`, backend geliştiricisi boş metin, test uzmanı hata bekleyebilir. Fonksiyon veya API sınırı üzerinde açık contract, bu yorum farkını azaltır.

Bir değişiklik contract'ı kırıyorsa yalnız implementation ayrıntısı değildir. Çağıranlar, testler ve belgeler birlikte güncellenmelidir. Geriye uyumluluk, sürümleme ve migration sonraki akademilerde ayrıntılı işlenecektir. C13 düzeyinde contract değişikliğini “küçük refactoring” diye gizlememeyi öğrenin.

### Öğrenme kanıtınızı güçlendirme

Bir fonksiyonu yazdıktan sonra şu üçlü kanıtı saklayın:

- Contract tablosu: ne vaat edildi?
- Çağrı izi: nasıl yürütüldü?
- Test matrisi: vaat nasıl doğrulandı?

Kod tek başına niyetin tamamını anlatmaz. Bu üç belge, portfolyo veya mülakatta yalnız “fonksiyon yazabiliyorum” demek yerine mühendislik kararını göstermenizi sağlar. Bir hafta sonra kodu açmadan tablodan implementation yazmayı deneyin. Sözleşme yeterince açık değilse eksiklerini fark edersiniz.

## Real World Examples

### Kullanıcı adı normalleştirme

Sözleşme:

- Girdi bir metindir.
- Baş/son boşluk kaldırılır.
- Metin küçük harfe dönüştürülür.
- Boş sonuç geçersizdir.
- Fonksiyon girdi metnini değiştirmez; yeni değer döndürür.
- Geçersiz türde `TypeError`, boş sonuçta `RangeError` üretir.

```js
function normalizeUsername(username) {
  if (typeof username !== "string") {
    throw new TypeError("Kullanıcı adı metin olmalıdır");
  }

  const normalized = username.trim().toLowerCase();

  if (normalized.length === 0) {
    throw new RangeError("Kullanıcı adı boş olamaz");
  }

  return normalized;
}
```

`"  Ada  "` sonucu `"ada"`; `"   "` hata; `42` tür hatasıdır. Gerçek kullanıcı adı kuralları Unicode ve güvenlik ayrıntıları içerir; bu örnek yalnız contract düşüncesi içindir.

### Fiyat ve indirim

```js
function calculateDiscountedPrice(price, discountRate) {
  if (!Number.isFinite(price) || price < 0) {
    throw new RangeError("Fiyat geçerli ve negatif olmayan sayı olmalıdır");
  }

  if (!Number.isFinite(discountRate)
      || discountRate < 0
      || discountRate > 1) {
    throw new RangeError("İndirim oranı 0 ile 1 arasında olmalıdır");
  }

  return price * (1 - discountRate);
}
```

Burada `0.20`, yüzde 20 anlamına gelir. Bu birim contract'ta açık olmalıdır; bir çağıranın 20 göndermesi devasa negatif sonuç üretmemeli, reddedilmelidir. Para yuvarlaması gerçek sistemlerde ayrıca sözleşme ister.

### Puan sınıflandırma

```js
function getPerformanceLabel(score) {
  if (!Number.isFinite(score) || score < 0 || score > 100) {
    throw new RangeError("Puan 0 ile 100 arasında olmalıdır");
  }

  if (score >= 85) return "excellent";
  if (score >= 70) return "good";
  if (score >= 50) return "pass";
  return "needs-work";
}
```

Contract bütün geçerli puanlarda bir etiket garanti eder. Sınırlar 49, 50, 69, 70, 84, 85 ve 100 çevresinde test edilmelidir. `NaN`, aralık karşılaştırmalarında yanıltıcı olduğu için açıkça reddedilir.

### CLI çıktı üretimi

Hesaplamayı yazdırmadan ayırın:

```js
function formatTaskSummary(completed, total) {
  if (!Number.isInteger(completed) || !Number.isInteger(total)) {
    throw new TypeError("Sayılar tam sayı olmalıdır");
  }

  if (completed < 0 || total < 0 || completed > total) {
    throw new RangeError("Görev sayıları geçersiz");
  }

  return `${completed}/${total} görev tamamlandı`;
}

const summary = formatTaskSummary(3, 5);
console.log(summary);
```

Fonksiyon yalnız metin üretir; terminal etkisi çağırandadır. Böylece format fonksiyonu konsolu yakalamadan test edilir.

### Sipariş uygunluğu ve çağrı zinciri

```js
function hasCapacity(stock, quantity) {
  return stock >= quantity;
}

function canPlaceOrder(stock, quantity, isAccountActive) {
  if (!isAccountActive) return false;
  return hasCapacity(stock, quantity);
}
```

`canPlaceOrder(5, 3, true)` çağrısında dış fonksiyon başlar, hesap etkin olduğu için `hasCapacity(5, 3)` çağrılır, `true` döner ve dış fonksiyon aynı değeri çağırana döndürür. Hesap pasifse iç fonksiyon hiç çağrılmaz. Çağrı izi kontrol akışıyla birlikte okunmalıdır.

### Gerçek şirkette utility fonksiyonu

Bir ekip tarih biçimlendirme utility'si kullanıyor olabilir. Contract zaman dilimi, geçersiz tarih, locale ve çıktı biçimini belirtmezse farklı ekranlar farklı varsayımlar yapar. Bir geliştirici yerel saat, diğeri UTC kabul eder. Fonksiyon teknik olarak çalışır fakat ürün tutarsız olur. Sorun “fonksiyon yazmayı bilmemek” değil, davranış sözleşmesini kurmamaktır.

### AI tarafından üretilen doğrulayıcı

AI, e-posta doğrulama için dev bir regex önerebilir. Mühendis önce contract'ı sorgular: Amaç standarttaki bütün geçerli adresleri kanıtlamak mı, kullanıcı girişinde temel biçim kontrolü mü? Unicode destekleniyor mu? Boşluk normalleştirilecek mi? Hata mesajı ne? Contract netleşmeden regex doğruluğu değerlendirilemez. AI çözümü önce probleme değil, uydurulmuş probleme doğru olabilir.

### Kod incelemesinde contract farkı yakalama

Bir PR'da şu değişiklik önerilsin:

```js
function findStudentName(id, students) {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].id === id) {
      return students[index].name;
    }
  }

  return null;
}
```

AI tarafından yapılan sadeleştirme bulunamayan durumda boş metin döndürüyor olsun. Kod daha kısa olabilir; fakat `null` ile boş metin aynı contract değildir. Boş metin gerçek fakat eksik bir öğrenci adı olarak sistemde bulunabilir. Çağıran `result === null` kontrolü yapıyorsa yeni sürüm hatalı akışa girer.

İncelemeci şu kanıtları ister:

- Mevcut contract bulunamayan sonuç için ne diyor?
- Çağıranlar `null` değerini nasıl kullanıyor?
- Boş ad geçerli veri olabilir mi?
- Migration gerekiyorsa hangi çağıranlar değişecek?
- Testler iki durumu ayırıyor mu?

Bu örnek, küçük görünen dönüş değeri değişikliğinin neden davranış değişikliği olduğunu gösterir. Refactoring, dış contract'ı korur. Contract değiştiriliyorsa bu yeni özellik veya migration olarak açıkça yönetilmelidir.

### Gözlenebilir davranışın kapsamı

Bir fonksiyonun davranışı yalnız dönen değer değildir. Şunlar gözlenebilir olabilir:

- Fırlatılan hata türü ve zamanı.
- Girdi nesnesindeki değişiklik.
- Global durum veya sayaç güncellemesi.
- Yazdırılan mesaj.
- Yapılan dosya veya ağ işlemi.
- Çağrılan başka servislerin sırası.
- Çok büyük girdide süre veya kaynak sınırı.

Başlangıç alıştırmalarında bu alanların tamamı kullanılmaz. Ancak “test sonucu aynı, davranış aynı” demeden önce contract'ın hangi gözlemleri kapsadığını sorun. İki implementation aynı değeri döndürüp birinin girdiyi değiştirmesi hâlinde eşdeğer değildir.

### Öğrenci projesine aktarım

Konsol tabanlı öğrenci yönetim sisteminde her menü seçeneğini dev bir `if` içinde yazmak yerine davranışları contract'larla ayırabilirsiniz: `validateStudentRecord`, `calculateAverage`, `formatStudentSummary` ve `findStudentById`. Her fonksiyon ayrı test edilebilir ve ana program yalnız akışı düzenler.

Bu aşamada veritabanı veya sınıf gerekmez. Basit değerlerle bile profesyonel alışkanlık kurulabilir: Davranışı adlandır, sözleşmeyi yaz, çağrıyı izle, sınırları test et ve etkileri açıkla. Daha ileri teknolojiler bu disiplinin yerini almaz; aynı temeli büyütür.

Projede yeni fonksiyon eklediğinizde yalnız dosya sayısını artırmış olmazsınız; takımın güveneceği yeni bir davranış sınırı oluşturursunuz. Bu sınırın adı, girdileri, garantileri ve başarısızlığı anlaşılmıyorsa kodun küçük görünmesi bakım maliyetini azaltmaz. Fonksiyonu tamamlanmış saymadan önce başka bir öğrencinin yalnız contract tablosunu okuyarak doğru çağrı ve testleri üretip üretemediğini kontrol edin. Bağımsız okuyucu aynı davranışı çıkaramıyorsa sözleşme henüz yeterince açık değildir.

Bu incelemeyi sözlü de yapın: Fonksiyonun vaadini, çağıranın yükümlülüğünü ve başarısızlık davranışını kodu göstermeden anlatın. Dinleyen kişi doğru normal, sınır ve geçersiz örnekleri çıkarabiliyorsa contract iletişim görevini yerine getiriyor demektir. Çıkaramıyorsa belgeyi ve isimleri koddan önce düzeltin.

## Common Mistakes

### Fonksiyon tanımı ile çağrıyı karıştırmak

Fonksiyonu yazmak onu çalıştırmaz. Belirti, beklenen çıktının hiç oluşmamasıdır. Tanım satırını ve çağrı satırını ayrı işaretleyin; debug sırasında çağrı noktasına gözlem ekleyin.

### Yalnız tekrar azaltmak için fonksiyon çıkarmak

İki benzer satır her zaman aynı davranış değildir. Yanlış soyutlama, farklı kuralları tek fonksiyona zorlar. Önce ortak contract var mı sorun. Yalnız metin benzerliği yeterli değildir.

### Belirsiz isim kullanmak

`process`, `handle`, `doIt` çağırana sonuç veya etki hakkında bilgi vermez. İsim davranışı fiille ve alan nesnesiyle anlatmalıdır. Belirsiz ad çoğu zaman belirsiz sorumluluğun belirtisidir.

### Implementation'ı sözleşme sanmak

“For döngüsüyle toplar” dış davranış garantisi değildir. Döngü değişebilir. Contract, kabul edilen sayı listesi, toplam sonucu, boş liste davranışı, etki ve hata sınırını tanımlamalıdır.

### `console.log` ile değer döndürmeyi karıştırmak

Fonksiyon ekranda doğru sayıyı gösterebilir fakat çağıran `undefined` alır. Hesaplama değer döndürmeli, gösterim kararı uygun çağıranda yapılmalıdır.

### Bazı yollarda `return` unutmak

Bir koşul dalında dönüş, diğerinde eksik sonuç varsa `undefined` sızar. Contract her geçerli yol için sonuç vaat ediyorsa yol tablosu bütün dalları kontrol etmelidir.

### Gizli global girdi kullanmak

Fonksiyon imzası sonucu etkileyen bütün bilgiyi göstermeyebilir. Testler sıraya bağımlı olur. Gizli bağımlılığı açık parametreye dönüştürün veya sözleşme/test ortamında kontrol altına alın.

### Gözlenebilir etkiyi belgelemeden girdiyi değiştirmek

Fonksiyon bir nesnenin özelliğini değiştirirse çağıranın durumu etkilenebilir. Yalnız dönüş değerini test etmek bu davranışı kaçırır. Mutation bilinçli ise contract'ta hangi alanın nasıl değiştiği yazılmalıdır.

### Geçersiz girdi ile “bulunamadı” sonucunu aynı yapmak

İki durum aynı `undefined` ile dönerse çağıran sorunu ayıramaz. Contract ayrı temsil veya açık hata seçmelidir.

### Aşırı doğrulama veya eksik doğrulama

Her küçük iç fonksiyonda aynı kontrolleri tekrarlamak gürültü ve maliyet yaratabilir; dış girdiyi hiç doğrulamamak risklidir. Güven sınırı ve caller/callee yükümlülüğü belgelenmelidir.

### Çok fazla sorumluluk

Fonksiyon doğrular, hesaplar, kaydeder ve yazdırırsa hata kaynağını ayırmak güçleşir. Değişim nedenlerini ve ayrı contract'ları inceleyin. Mekanik olarak her satırı parçalamayın.

### AI çıktısını sözleşme sanmak

AI kodu, eksik kuralları kendi varsayımıyla doldurabilir. Kodun derlenmesi veya birkaç testin geçmesi ürün sözleşmesini kanıtlamaz. Varsayımları açıkça çıkarın.

## Best Practices

### Davranışı fiille adlandırın

`calculate`, `format`, `normalize`, `is`, `has`, `find`, `print` gibi fiiller beklenen sonuç veya etkiyi işaret eder. Takımın alan dilini kullanın; yalnız teknik ayrıntıyı değil iş niyetini gösterin.

### Contract tablosunu koddan önce yazın

Yedi alanı doldurun: sorumluluk, girdi, ön koşul, çıktı, son koşul, etki, hata. Cevap veremediğiniz satır bir tasarım sorusudur. Kodla gizlemeyin.

### Görünür girdi kullanın

Sonucu etkileyen değerleri mümkün olduğunca arayüzde gösterin. Global veya dış bağımlılık gerekiyorsa adlandırın ve test kontrolünü açıklayın.

### Değer üretimi ile I/O'yu ayırın

Hesaplayan fonksiyon değer döndürsün; yazdırma, dosya veya ağ etkisi ayrı sınırda ele alınsın. Bu, test ve yeniden kullanım kolaylığı sağlar.

### Her başarılı yolu sonuçla kapatın

Contract değer vaat ediyorsa bütün geçerli yolların açık dönüşü bulunmalıdır. Yol tablosu ve lint/types araçları yardımcıdır; insan sözleşme denetiminin yerini tamamen tutmaz.

### Hata politikasını tutarlı seçin

Benzer fonksiyonlar geçersiz girdide rastgele farklı sonuçlar üretmemelidir. Ekip politikası ve çağıranın ihtiyacıyla uyumlu, belgelenmiş davranış kullanın.

### Contract maddelerini testlere bağlayın

Her ön koşul için geçerli ve ihlal vakası; her son koşul için özellik kontrolü; her etki için önce/sonra gözlemi; her hata için tür ve mesaj veya sonuç doğrulaması üretin.

### Küçük ve bağımsız çağrı izleri çıkarın

İç içe çağrıda satır atlamayın. Argüman hesaplama, frame girişi, yerel değer, dönüş ve devam noktasını numaralandırın. Debugger kullanırken aynı modeli gözlemleyin.

### Sözleşmeyi gereksiz implementation ayrıntısından koruyun

Döngü türü, geçici değişken adı veya iç algoritma değişebiliyorsa contract'a bağlanmamalıdır. Yalnız çağıranın güvenmesi gereken davranışı yazın.

### AI'a belirsizliği uydurtmayın

Önce eksik soruları çıkartın, kararları insan otoriteyle netleştirin, sonra kod üretin. AI cevabını contract–test matrisiyle denetleyin.

## Hands-on Exercise

### Senaryo: Küçük utility toolkit sözleşmeleri

Bir komut satırı çalışma takip uygulaması için üç davranış gereklidir:

1. Kullanıcı adını normalleştirmek.
2. Tamamlanma yüzdesini hesaplamak.
3. İlerleme özetini biçimlendirmek.

Henüz tek bir fonksiyon yazmadan önce her davranış için şu tabloyu doldurun:

| Alan | Cevap |
|---|---|
| Sorumluluk | |
| Kabul edilen girdi | |
| Ön koşul | |
| Çıktı | |
| Son koşul | |
| Etki | |
| Hata davranışı | |

### Görev 1: `normalizeStudentName`

Kurallar:

- Girdi metin olmalıdır.
- Baş ve son boşluk kaldırılır.
- Birden fazla iç boşluk tek boşluğa indirilir.
- Boş sonuç geçersizdir.
- Fonksiyon değer döndürür; ekrana yazmaz.

Normal, sınır ve geçersiz en az beş test üretin. Unicode adları bozacak yalnız ASCII varsayımı eklemeyin.

### Görev 2: `calculateCompletionPercentage`

Kurallar:

- `completed` ve `total` tam sayıdır.
- İki değer negatif değildir.
- `completed`, `total` değerini aşamaz.
- `total = 0` için ürün kararı gereklidir: 0 mı, 100 mü, hata mı? Kararı gerekçelendirin ve contract'a yazın.
- Geçerli durumda 0-100 arası sayısal sonuç döner.
- Yuvarlama stratejisini açıkça seçin.

Belirsiz `total = 0` vakasını AI'a uydurtmayın. Önce sözleşme kararını yazın.

### Görev 3: `formatProgressSummary`

Kurallar:

- Öğrenci adı ve yüzdelik alır.
- `"Ada: %75 tamamlandı"` benzeri metin döndürür.
- Ekrana yazdırmaz.
- Yüzdelik için `calculateCompletionPercentage` sonucunu kullanacak bir üst fonksiyon tasarlanabilir.

### Görev 4: Çağrı izi

Şu hedef çağrının tam izini çıkarın:

```js
const summary = createProgressSummary("  Ada  ", 3, 4);
```

`createProgressSummary` içinde isim normalleştirme, yüzde hesaplama ve biçimlendirme çağrıları olsun. Her adım için:

- aktif fonksiyon;
- gerçek girdi;
- yerel ara değer;
- dönüş değeri;
- geri dönülen satır;

bilgisini tabloya yazın.

### Görev 5: Contract violation

Şu vakaları çalıştırın:

- Ad yalnız boşluk.
- `completed = -1`.
- `completed = 5`, `total = 4`.
- `total = 0`.
- `completed` metin olarak `"3"`.

Her birinde ihlal edilen contract maddesini, hatanın hangi fonksiyon sınırında yakalandığını ve çağıranın nasıl davranması gerektiğini belirtin.

### Görev 6: Test yardımcısı

```js
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: ${actual} !== ${expected}`);
  }
}

function assertThrows(action, expectedError, label) {
  try {
    action();
  } catch (error) {
    if (error instanceof expectedError) return;
    throw new Error(`${label}: yanlış hata türü`);
  }

  throw new Error(`${label}: hata bekleniyordu`);
}
```

En az 12 test yazın. Test adları contract maddesini açıklasın.

### Görev 7: AI denetimi

Kendi çözümünüzden sonra AI'dan alternatif implementation isteyin. Şunları karşılaştırın:

- AI aynı `total = 0` kararını korudu mu?
- Gizli normalleştirme veya yuvarlama ekledi mi?
- Bir fonksiyon yazdırma etkisi ekledi mi?
- Hata türleri contract ile aynı mı?
- Bütün çağrı yollarında dönüş var mı?

En az bir kabul veya ret kararını kanıtla yazın.

### Ölçülebilir teslim

- Üç eksiksiz contract tablosu.
- Üç çalışan fonksiyon ve bir orkestrasyon fonksiyonu.
- En az 12 otomatik test.
- Normal, sınır ve geçersiz vaka matrisi.
- İç içe çağrı/dönüş izi.
- Bir contract violation kök neden analizi.
- AI kullanım ve bağımsız doğrulama kaydı.

## Reflection Questions

1. Fonksiyonu yalnız tekrar kullanılan kod bloğu olarak görmek hangi önemli bilgileri kaçırır?
2. Sorumluluğu “ve” bağlacı olmadan söyleyemediğiniz bir fonksiyon örneği üretin.
3. İyi isim ile tam sözleşme arasındaki fark nedir?
4. Ön koşulun sahibi kimdir? Fonksiyon bu koşulu yine de ne zaman denetlemelidir?
5. Son koşul ile tek bir örnek çıktı arasındaki farkı açıklayın.
6. `console.log` neden değer döndürmez? Bu karışıklık hangi hatayı üretir?
7. Eksik `return` hangi yolda `undefined` oluşturdu? Bir yol tablosuyla gösterin.
8. Gizli global girdi aynı açık çağrıda neden farklı sonuç üretebilir?
9. Fonksiyonun girdiyi değiştirmesi contract'ta nasıl ifade edilmelidir?
10. Hata ile geçerli “sonuç bulunamadı” durumu neden ayrılmalıdır?
11. Aynı contract'ı sağlayan iki implementation nasıl karşılaştırılır?
12. İç içe çağrıda hangi fonksiyon önce tamamlanır ve neden?
13. Çağrı yığını modeli hangi durumlarda yalnız sezgisel kalır?
14. Contract'tan normal, sınır ve geçersiz testleri nasıl çıkardınız?
15. AI'ın uydurduğu bir sözleşme varsayımını nasıl fark edersiniz?
16. C14'te parametre ve dönüş değerlerini ayrıntılandırmak için hangi sorular açık kaldı?

En az dört soruyu küçük kod veya tabloyla yanıtlayın. Bir hafta sonra 4, 6, 8, 12 ve 15. soruları notlara bakmadan yeniden cevaplayın.

## Chapter Summary

Fonksiyon, yalnız süslü parantez içindeki kod değildir. Adlandırılmış, çağrılabilir bir davranış sınırıdır. İyi bir fonksiyon belirli bir sorumluluk üstlenir ve çağıranın implementation ayrıntılarını bilmeden davranışı kullanabilmesini sağlar.

Fonksiyon tanımı davranışı oluşturur; çağrı davranışı çalıştırır. Çağrı sırasında denetim çağırandan çağrılana geçer, çağrıya özel durum kullanılır ve `return` ile sonuç ve denetim çağrı noktasına döner. İç içe çağrıda argüman olarak kullanılan iç çağrı önce tamamlanır. Yığın kartı modeli bu sırayı anlamaya yardım eder.

Fonksiyon sözleşmesi; sorumluluk, kabul edilen girdi, ön koşul, çıktı, son koşul, etki ve hata davranışını tanımlar. Ön koşul, geçerli çağrıdan önce doğru olması gereken çağıran yükümlülüğüdür. Son koşul, geçerli çağrı normal tamamlandığında fonksiyonun garanti ettiği özelliktir. Gözlenebilir etkiler ve başarısızlık davranışı gizlenmemelidir.

`console.log` ekrana yazma etkisidir; çağırana değer döndürmez. Açık `return` bulunmayan JavaScript fonksiyonu normal tamamlandığında `undefined` üretir. Contract her geçerli yol için değer vaat ediyorsa bütün yollar dönüşle tamamlanmalıdır.

Global ayar, saat, rastgelelik veya dış veri sonucu etkiliyorsa bunlar gizli girdi olabilir. Gizli bağımlılıklar testleri sıraya ve ortama bağlı hâle getirir. Mümkün olduğunda açık arayüz kullanılır; zorunlu dış bağımlılık contract ve test düzeninde belirtilir.

Sözleşme implementation değildir. İçeride döngü veya başka algoritma değişebilir; kabul edilen değerler, sonuç, etkiler ve hata davranışı aynıysa çağıran açısından contract korunabilir. Bu ayrım güvenli refactoring ve ekipler arası çalışma sağlar.

Contract'tan test doğrudan türetilir. Normal değerler temel davranışı, sınırlar geçiş noktalarını, geçersiz vakalar ön koşul ve hata politikasını doğrular. Etkiler önce/sonra durumuyla, bütün dönüş yolları yol tablosuyla incelenir.

AI fonksiyon üretimini hızlandırır fakat eksik contract'ı uydurabilir. Önce eksik sorular çıkarılır, insan kararıyla sözleşme tamamlanır, sonra implementation ve test üretilir. Son sorumluluk kodu kabul eden mühendistedir.

## Key Takeaways

- Fonksiyon bir kod kutusundan önce davranış sınırıdır.
- Tanım davranışı oluşturur; çağrı çalıştırır.
- Sorumluluk tek ve alan dilinde adlandırılmalıdır.
- Soyutlama gerekli ayrıntıyı saklar, gerekli sözleşmeyi saklamaz.
- Contract; girdi, ön koşul, çıktı/son koşul, etki ve hata davranışını kapsar.
- Ön koşul çağıranın yükümlülüğünü, son koşul fonksiyonun garantisini açıklar.
- `return` değer ve denetimi çağırana taşır.
- `console.log` bir etkidir; dönüş değeri değildir.
- Eksik dönüş JavaScript'te `undefined` üretir.
- İç çağrı, dış çağrının argümanı tamamlanmadan önce sonuçlanır.
- Her aktif çağrının kendi yerel bilgisi ve dönüş noktası vardır.
- Gizli girdiler sözleşmeyi, testi ve hata ayıklamayı zorlaştırır.
- Aynı contract farklı implementation'larla sağlanabilir.
- Her contract maddesi en az bir test fikri üretmelidir.
- Normal, sınır ve geçersiz vaka ayrı kanıttır.
- AI'ın yaptığı varsayım sözleşme kararı değildir.
- Açıklayamadığınız veya izleyemediğiniz fonksiyon henüz güvenle kabul edilemez.

## Further Reading

Önce [MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) ve [MDN Learn Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions) kaynaklarındaki tanım–çağrı–return örneklerini çalıştırın. Ardından [ECMAScript Function Definitions](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-function-definitions), [Function Calls](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-function-calls) ve [Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement) bölümlerinden normatif davranışa bakın.

Program abstraction ve modularity bağlamı için [CS2023 Report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm) kullanılabilir. Ön/son koşulların tarihsel temeli için [Hoare — An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf) ileri okumadır. Formal notation bu chapter'ın değerlendirme kapsamı değildir.

Contract modelini genişletmek için [Design by Contract](https://www.cs.unh.edu/~cs619/slides/DesignByContract.pdf) ders notlarını inceleyin. Kaynağı okurken “caller obligation”, “supplier guarantee” ve ihlal sorumluluğunu kendi contract tablonuzla eşleyin.

C14 parametre, argüman, varsayılan değer ve return ayrıntılarını; C15 scope, lifetime ve side effects'i; C16 functional decomposition ve reuse'u derinleştirecektir. C13'te kurulan contract modeli bu chapter'ların ortak temelidir.

## References

1. Ecma International. [ECMAScript Language Specification — Functions and Classes](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html). Living Standard, erişim: 23 Temmuz 2026.
2. Ecma International. [ECMAScript — Function Calls](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-function-calls). Erişim: 23 Temmuz 2026.
3. Ecma International. [ECMAScript — Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement). Erişim: 23 Temmuz 2026.
4. MDN Web Docs. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). Erişim: 23 Temmuz 2026.
5. MDN Web Docs. [Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function). Erişim: 23 Temmuz 2026.
6. ACM, IEEE-CS ve AAAI. [Computer Science Curricula 2023](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm). 2023.
7. Hoare, C. A. R. [An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf). Communications of the ACM, 1969.
8. University of New Hampshire. [Design by Contract](https://www.cs.unh.edu/~cs619/slides/DesignByContract.pdf). Erişim: 23 Temmuz 2026.
9. NIST. [Guidelines on Minimum Standards for Developer Verification of Software](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf). NISTIR 8397, 2021.
10. Python Software Foundation. [Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions). Erişim: 23 Temmuz 2026.
