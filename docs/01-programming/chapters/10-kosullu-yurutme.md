---
document_type: "chapter"
chapter_id: "V01-C10"
title: "Koşullu Yürütme — Karar Akışını Tasarlamak"
volume: "01"
module: "V01-M03"
chapter: "10"
slug: "kosullu-yurutme"
difficulty: "Beginner"
estimated_time: "9-11 saat"
status: "Draft"
version: "0.1.0"
prerequisites:
  - "V01-C08"
  - "V01-C09"
learning_objectives:
  - "V01-LO015"
  - "V01-LO016"
concept_ids:
  - "ASEA-CON-000036"
  - "ASEA-CON-000037"
  - "ASEA-CON-000038"
production_packet: "V01-C10-CPP-001"
---

# Koşullu Yürütme — Karar Akışını Tasarlamak

## Learning Objectives

Bir programın yalnız hesap yapması yeterli değildir. Program, elde ettiği bilgiye göre hangi işlemi yapacağını da seçmelidir. Bu bölümde koşullu yürütme (Conditional Execution) kavramını, yalnız `if` sözdizimi olarak değil, gerçek bir kararın eksiksiz ve sınanabilir yürütme yollarına dönüştürülmesi olarak öğreneceksin.

Bu bölümün sonunda şunları yapabileceksin:

- Sıralı yürütme ile seçim arasındaki farkı program sayacı zihinsel modeliyle açıklayabileceksin.
- Koşul (Condition), dal (Branch), seçim (Selection) ve varsayılan durum (Default Case) kavramlarını doğru kullanabileceksin.
- `if`, `if...else` ve `else if` yapılarının hangi durumda uygun olduğunu seçebileceksin.
- Bir `else if` zincirini çalıştırmadan önce adım adım izleyip hangi dalın çalışacağını tahmin edebileceksin.
- Dal sırasının sonucu neden değiştirebildiğini sınır örnekleriyle gösterebileceksin.
- Bağımsız `if` ifadeleriyle birbirini dışlayan `else if` zinciri arasındaki davranış farkını açıklayabileceksin.
- Süslü parantezlerin blok sınırını nasıl belirlediğini ve “dangling else” riskini tanıyabileceksin.
- Karar tablosu (Decision Table) oluşturarak koşulları, uygulanabilir birleşimleri ve beklenen eylemleri eksiksiz gösterebileceksin.
- Bir karar tablosunun sütunlarını okunabilir koşullu dallara dönüştürebileceksin.
- Eksik, çelişkili veya alan açısından imkânsız kural sütunlarını ayırt edebileceksin.
- Erişilebilirlik (Reachability) analiziyle hiçbir girdinin ulaşamadığı bir dalı bulabileceksin.
- Dal kapsamı (Branch Coverage) için her anlamlı sonucu çalıştıran test girdileri seçebileceksin.
- Yüzde 100 dal kapsamının program doğruluğunu neden tek başına kanıtlamadığını açıklayabileceksin.
- `switch`, `case`, `default` ve `break` davranışını izleyebilecek; `if...else` ile seçim ölçütlerini karşılaştırabileceksin.
- Yapay zekânın ürettiği karar kodunu gereksinim, karar tablosu, sıra, erişilebilirlik ve test kanıtıyla denetleyebileceksin.

İki kanonik çıktı özellikle ölçülecektir. `V01-LO015` için verilen doğal dil kurallarını bütün ilgili durumları kapsayan karar tablosuna ve koşullu akışa dönüştürmelisin. `V01-LO016` için eksik veya erişilemeyen dalları bulmalı ve her erişilebilir dal sonucuna ulaşan test girdisini açıkça eşlemelisin. Yalnız çalışan kod teslim etmek bu iki çıktıyı kanıtlamaz; tasarım ve test izi de gerekir.

## Prerequisites

Bu bölüm `V01-C08` ve `V01-C09` üzerine kurulur. Girdinin güvenilmez olabileceğini, doğrulama ve normalleştirme ihtiyacını bilmelisin. Karşılaştırmaların mantıksal değer ürettiğini, VE/VEYA/DEĞİL ilişkilerini ve doğruluk tablosu oluşturmayı da uygulayabilmelisin.

Başlamadan önce aşağıdaki tanılama görevini notlarına bakmadan yap:

```js
const age = 20;
const hasVerifiedEmail = true;
const isBlocked = false;

const canRegister =
  age >= 18 && hasVerifiedEmail && !isBlocked;

console.log(canRegister);
```

Şunları yanıtla:

1. `canRegister` hangi üç küçük sorudan oluşur?
2. Kod çalıştırılmadan sonuç nedir?
3. `age` değeri 17 olursa sağdaki diğer koşulların hesaplanma davranışı nasıl etkilenebilir?
4. Üç girdi yalnız doğru/yanlış kabul edilirse kaç farklı birleşim vardır?
5. `isBlocked` doğru olduğunda kayıt neden reddedilir?

Bu soruları yanıtlayamıyorsan C09'un doğruluk tabloları, adlandırılmış yüklemler ve kısa devre bölümlerini yeniden çalış. C10 mantıksal ifadeyi kurmaktan bir adım ileri gider: bu sonucun hangi talimatların çalışacağını seçmesini inceler.

Terminalde Node.js kullanabilmelisin. Aşağıdaki komut sürüm göstermelidir:

```powershell
node --version
```

Bir `.js` dosyasını `node dosya-adi.js` ile çalıştırabilmen yeterlidir. Framework, tarayıcı API'si, veritabanı veya ağ bilgisi gerekmez. Kod örnekleri kasıtlı olarak küçük ve gözlenebilir tutulacaktır.

## Estimated Study Time

Önerilen toplam süre 9–11 saattir. Karar tablosu ve dal testleri ilk kez yapılıyorsa daha uzun sürmesi normaldir.

| Çalışma | Süre |
|---|---:|
| Ana dersi okuyup not çıkarma | 3–4 saat |
| Akış izleri ve sınır örnekleri | 60–90 dakika |
| Karar tablosu çalışmaları | 90 dakika |
| Alıştırmalar ve quiz | 2–3 saat |
| Laboratuvar ve yansıma | 2 saat |

Çalışmayı üç oturuma bölmek yararlıdır. İlk oturumda `if`, `else` ve dal sırasını; ikinci oturumda karar tablosu ve erişilebilirliği; üçüncü oturumda dal kapsamı, laboratuvar ve AI denetimini tamamla. Her oturumdan önce önceki kavramları notsuz olarak geri çağır.

Bu bölümde hız ölçüt değildir. Bir örneğin çıktısını gördükten sonra “anladım” demek yerine, yeni bir girdi için yolu önceden çizebilmelisin. İlerleme kapısı şudur: Bir gereksinimi koda bakmadan tabloya dönüştürebiliyor, tablodan dalları üretebiliyor ve her dal için test girdisi seçebiliyorsan C11'e geçebilirsin.

Çalışma günlüğünde yalnız doğru sonuçları saklama. Yanlış tahminini, hatanın nedenini ve zihinsel modelindeki düzeltmeyi de yaz. Böylece aynı sözdizimini başka bir alanda gördüğünde ezbere değil, yürütme izine dayanırsın. Bir örneği bitirdikten sonra değişken değerlerini değiştirerek yeni bir sınır durumu üretmen özellikle yararlıdır.

## Introduction

Bir kargo şirketinde siparişlerin nasıl yönlendirileceğini düşün. Adres yurt dışındaysa uluslararası taşıma gerekir. Yurt içindeyse teslimat türüne göre standart veya hızlı taşıma seçilir. Sepet tutarı belirli sınırı aşıyorsa standart kargo ücretsiz olabilir. Adres eksikse hiçbir taşıma seçilmemeli; sipariş önce düzeltmeye gönderilmelidir.

Bu gereksinimler yalnız hesap değildir. Programın aynı sipariş için bütün işlemleri çalıştırmasını istemeyiz. Geçersiz adres için kargo etiketi üretmek, uluslararası siparişe yurt içi fiyatı uygulamak veya aynı siparişi iki taşıyıcıya göndermek yanlış olur. Program, veriye bakıp doğru yürütme yolunu seçmelidir.

C09'da “bu sipariş ücretsiz kargoya uygun mu?” sorusuna `true` veya `false` ürettik. C10'da bu cevabın sonucunu kullanırız: uygun ise ücret sıfırlanır, değilse ücret hesaplanır. Mantıksal değer kararın cevabıdır; koşullu yürütme bu cevaba bağlı eylemdir.

Başlangıç öğrencileri çoğu zaman `if` yapısını kolay bulur: paranteze koşul, süslü paranteze kod yazılır. Gerçek zorluk sözdiziminde değildir. Zorluk; hangi durumların var olduğunu bilmek, durumların örtüşüp örtüşmediğini görmek, özel kuralı doğru sıraya koymak, varsayılan davranışı seçmek ve hiçbir dalın unutulmadığını kanıtlamaktır.

Örneğin puan sınıflandırmasında şu sıralama yanlış olabilir:

```js
if (score >= 50) {
  console.log("Geçti");
} else if (score >= 90) {
  console.log("Üstün başarı");
}
```

95 puan ilk koşulu sağladığı için “Geçti” dalına girer; ikinci koşula hiç ulaşılmaz. Kod hata vermeden çalışır, fakat daha özel kural gölgelenmiştir. Bu, sözdizimi değil karar modelleme hatasıdır.

Profesyonel sistemlerde bu hatalar fiyat, izin, vergi, risk, bildirim ve durum geçişlerini etkiler. Karar kodu küçük görünse de işin anlamını taşır. Bu nedenle bu bölüm `if` yazmaktan fazlasını öğretir: Gereksinimden tabloya, tablodan akışa, akıştan teste uzanan bir kanıt zinciri kurar.

## Core Concepts

### 1. Sıra ve seçim

Programın talimatları normalde sırayla yürütülür. Aşağıdaki üç satırın üçü de çalışır:

```js
console.log("Sipariş alındı");
console.log("Sipariş kaydedildi");
console.log("İşlem tamamlandı");
```

Seçim eklendiğinde program bazı talimatları çalıştırır, bazılarını atlar. Program sayacını kaynak kod üzerinde ilerleyen bir işaretçi gibi düşünebilirsin. Koşula geldiğinde sonuç hesaplanır; sayaç seçilen bloğun başına gider. Blok tamamlandığında seçim yapısından sonraki ortak satıra devam eder.

```js
const isAddressValid = true;

console.log("Kontrol başladı");

if (isAddressValid) {
  console.log("Kargo etiketi hazırlanabilir");
}

console.log("Kontrol bitti");
```

Koşul doğruysa üç mesaj, yanlışsa ilk ve son mesaj görünür. `if` dışındaki son satır ortak devam noktasıdır.

### 2. Koşul ve dal

Koşul, hangi yolun seçileceğini belirlemek için değerlendirilen ifadedir. Dal, bu sonuca bağlı olarak izlenebilen yürütme yoludur. `if...else` iki sonuçlu bir seçim üretir: doğru dal ve yanlış dal.

```js
const temperature = 12;

if (temperature < 15) {
  console.log("Mont öner");
} else {
  console.log("Hafif kıyafet öner");
}
```

Koşul `temperature < 15`tir. Birinci dal koşul doğru olduğunda, ikinci dal yanlış olduğunda çalışır. İkisi aynı yürütmede birlikte çalışmaz.

ECMAScript, koşul sonucuna `ToBoolean` dönüşümü uygular. Bu nedenle `if (value)` yalnız gerçek `true` değerini değil, doğru kabul edilen değerleri de seçebilir. Fakat eğitim ve iş kuralı kodunda koşulu açık bir yüklem olarak yazmak niyeti görünür kılar.

### 3. Yalnız `if`

Bir eylem yalnız belirli durumda yapılacak, aksi durumda hiçbir özel eylem gerekmeyecekse tek `if` uygundur.

```js
const stock = 3;

if (stock <= 5) {
  console.log("Düşük stok uyarısı gönder");
}

console.log("Stok kontrolü tamamlandı");
```

Stok 10 ise uyarı atlanır, program devam eder. Burada “stok yüksek” için ayrı eylem yoktur; boş bir `else` yazmak gereksizdir.

### 4. `if...else`

İki birbirini dışlayan sonuçtan tam biri gerekli olduğunda `if...else` kullanılır.

```js
const paymentCompleted = false;

if (paymentCompleted) {
  console.log("Siparişi hazırlamaya al");
} else {
  console.log("Ödeme bekleniyor");
}
```

Koşul bir kez değerlendirilir. Doğruysa ilk, yanlışsa ikinci blok çalışır. Ardından yapı sonrasına devam edilir.

### 5. `else if` zinciri

İkiden fazla sınıf olduğunda koşullar sırayla sınanabilir. JavaScript'te tek parça `elseif` anahtar sözcüğü yoktur; `else if`, `else` dalına yerleştirilmiş başka bir `if`tir.

```js
const score = 84;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Gelişim gerekli");
}
```

84 için ilk koşul yanlış, ikinci doğru olur. `B` yazdırılır; 70 koşulu da doğru olabilecek olsa bile artık değerlendirilmez. İlk eşleşme kazanır.

### 6. Dal sırası

Örtüşen koşullarda sıra davranışın parçasıdır. Sınıflandırma yukarıdaki gibi en dar/yüksek sınırdan geniş/düşük sınıra ilerlemelidir. `score >= 70` ilk yazılırsa 95 de orada yakalanır.

Sıra her zaman sayısal olarak büyükten küçüğe demek değildir. Genel kural şudur: Daha özel koşul, onu kapsayan genel koşuldan önce gelmelidir.

```js
if (isEmployee && isOnCall) {
  console.log("Acil görev erişimi");
} else if (isEmployee) {
  console.log("Standart çalışan erişimi");
}
```

İkinci koşul önce olsaydı nöbetçi çalışan özel dala ulaşamazdı.

### 7. Bağımsız `if` ile zincir farkı

Bağımsız `if` ifadelerinin her biri değerlendirilir ve birden fazlası çalışabilir.

```js
const score = 95;

if (score >= 50) {
  console.log("Geçti");
}

if (score >= 80) {
  console.log("Onur listesi");
}
```

İki mesaj da doğrudur ve iki eylem de isteniyorsa bağımsız yapı uygundur. Bunlar tek bir sınıflandırma değil, iki ayrı kuraldır.

```js
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
```

Burada tek not sınıfı seçilmelidir; zincir uygundur. Yapı seçimini sözdizim tercihi değil, eylemlerin birlikte çalışıp çalışamayacağı belirler.

### 8. Bloklar ve süslü parantezler

Süslü parantezler bir blok oluşturur. Parantez kullanılmadığında yalnız sonraki tek Statement koşula bağlıdır.

```js
if (isValid)
  console.log("Geçerli");
  console.log("Kaydedildi");
```

Görsel girinti ikinci mesaj koşula bağlıymış izlenimi verir; aslında her zaman çalışır. Doğrusu:

```js
if (isValid) {
  console.log("Geçerli");
  console.log("Kaydedildi");
}
```

Her dalda süslü parantez kullanmak, sonradan satır eklendiğinde davranışın sessizce değişmesini de önler.

### 9. En yakın `if` ve dangling else

Parantezsiz iç içe yapılarda `else`, sözdizimsel olarak en yakın uygun `if` ile eşleşir.

```js
if (hasAccount)
  if (isVerified)
    console.log("Erişim verildi");
  else
    console.log("Hesap yok");
```

Mesaj yanıltıcıdır. `else`, dıştaki `hasAccount` değil, içteki `isVerified` koşuluna aittir. Süslü parantezler ilişkiyi açık kılar. Daha da iyisi, yanlış mesajı alan diliyle düzeltmektir.

### 10. Varsayılan durum

Bir zincirde hiçbir özel koşul eşleşmezse `else`, `switch` yapısında hiçbir `case` eşleşmezse `default` çalışabilir. Varsayılan, “önemsiz geri kalan” değildir. Bilinmeyen verinin nasıl ele alınacağına dair açık karardır.

```js
if (status === "draft") {
  console.log("Taslak");
} else if (status === "published") {
  console.log("Yayında");
} else {
  console.log("Bilinmeyen durum");
}
```

Yeni bir `archived` durumu eklendiğinde varsayılan dal bunu görünür kılar. Sessizce “taslak” saymak veri hatasını gizleyebilirdi.

### 11. `switch` ile çoklu seçim

`switch`, tek bir seçici değeri birden fazla sabit seçenekle karşılaştırırken okunabilir olabilir.

```js
const command = "start";

switch (command) {
  case "start":
    console.log("Başlatılıyor");
    break;
  case "stop":
    console.log("Durduruluyor");
    break;
  case "status":
    console.log("Durum okunuyor");
    break;
  default:
    console.log("Bilinmeyen komut");
}
```

`switch` seçiciyi bir kez değerlendirir ve katı eşitlikle eşleşen ilk `case` bölümüne aktarır. `break` yoksa yürütme sonraki `case` gövdesine geçer. Buna aşağı düşme (Fall-Through) denir.

```js
const day = "saturday";

switch (day) {
  case "saturday":
  case "sunday":
    console.log("Hafta sonu");
    break;
  default:
    console.log("Hafta içi");
}
```

Burada boş `saturday` bölümü kasıtlı geçişle iki değeri aynı eylemde birleştirir. Kasıt yorum veya yapı ile açık olmalıdır.

### 12. `switch` mi `if...else` mi?

Tek bir değerin çok sayıda sabit seçenekle eşleşmesi `switch` için iyi adaydır. Aralıklar, farklı değişkenler ve bileşik koşullar için `if...else` çoğu zaman daha doğaldır.

```js
if (temperature < 0) {
  // Aralık koşulu
} else if (temperature < 15) {
  // Başka aralık
}
```

`switch (true)` ile aralıklar yazılabilir, fakat başlangıç öğrencisi için kontrol modelini gizleyebilir. Araç seçimi kısalık veya iddia edilen performans avantajına değil, gereksinimin biçimine ve okunabilirliğe dayanmalıdır.

### 13. Karar tablosu

Karar tablosu, ilgili koşul birleşimlerini ve her birleşimde yapılacak eylemleri gösterir. Doğruluk tablosu bir mantıksal ifadenin sonucunu hesaplarken karar tablosu iş kuralını eyleme bağlar.

Kargo örneği:

| Koşul/Eylem | Kural 1 | Kural 2 | Kural 3 | Kural 4 |
|---|---|---|---|---|
| Adres geçerli mi? | H | E | E | E |
| Yurt dışı mı? | - | E | H | H |
| Hızlı teslimat mı? | - | - | E | H |
| **Adresi düzelt** | X |  |  |  |
| **Uluslararası kargo** |  | X |  |  |
| **Yurt içi hızlı** |  |  | X |  |
| **Yurt içi standart** |  |  |  | X |

`E` evet, `H` hayır, `-` önemsiz anlamındadır. Adres geçersizken diğer koşullar eylemi değiştirmez. Her sütun tek bir tam kuraldır.

### 14. Tabloyu kodlamak

Tablodaki öncelik doğal olarak önce geçersiz adresi, sonra yurt dışını, sonra hızlı teslimatı ele alır:

```js
if (!isAddressValid) {
  shippingResult = "address-correction";
} else if (isInternational) {
  shippingResult = "international";
} else if (isExpress) {
  shippingResult = "domestic-express";
} else {
  shippingResult = "domestic-standard";
}
```

Her dal bir tablo sütununa karşılık gelir. Kodun okunabilirliği, tablonun diliyle aynı sırayı koruduğu için güçlenir.

### 15. Eksiksizlik, çelişki ve uygulanabilirlik

Eksiksiz tablo, alan için önemli bütün uygulanabilir durumları kapsar. Çelişki, aynı koşul birleşimine iki uyumsuz eylem atanmasıdır. Uygulanamaz birleşim, alan kuralları gereği oluşamayandır; örneğin tek bir siparişin aynı anda hem yalnız dijital hem yalnız fiziksel ürün olması gibi.

Uygulanamaz satırı silmek yetmez; neden uygulanamaz olduğu belgelenmelidir. Aksi halde gelecekte gereksinim değişince eksik durum sanılabilir.

### 16. Erişilebilir ve erişilemez dallar

Bir dal için hiçbir olası girdi o dala ulaşamıyorsa dal erişilemezdir.

```js
if (age >= 18) {
  category = "adult";
} else if (age >= 65) {
  category = "senior";
}
```

`age >= 65`, zaten `age >= 18` koşulunu da sağlar. İlk dal seçildiği için ikinci dala ulaşılamaz. Düzeltme yalnız sırayı değiştirmek değildir; sınıfların iş anlamını da netleştirmek gerekir:

```js
if (age >= 65) {
  category = "senior";
} else if (age >= 18) {
  category = "adult";
} else {
  category = "minor";
}
```

### 17. Dal kapsamı

Dal kapsamı, testlerin kontrol akışındaki ilgili dalları çalıştırma oranını ölçer. Basit `if...else` iki dal üretir. Bir test doğru dalı, başka bir test yanlış dalı çalıştırırsa iki dal da kapsanır.

```js
if (amount >= 1000) {
  shippingFee = 0;
} else {
  shippingFee = 50;
}
```

`amount = 1000` doğru dalı, `amount = 999` yanlış dalı çalıştırır. Fakat yalnız bu iki test, negatif tutarın reddedilip reddedilmediğini veya sayısal olmayan girdinin ele alınıp alınmadığını kanıtlamaz.

Genel ölçüm:

```text
dal kapsamı = çalıştırılan dal sayısı / toplam erişilebilir dal sayısı × 100
```

Kapsam, yürütülme kanıtıdır; beklenen sonucun doğru tanımlandığını veya assertion'ın güçlü olduğunu göstermez.

### 18. Karar tablosunu adım adım kurmak

Karar tablosu doğrudan hücre doldurarak başlamaz. İlk adım, doğal dildeki gereksinimi koşullar ve eylemler olarak ayırmaktır. Şu kuralı ele al:

> Müşterinin adresi doğrulanmış değilse sipariş bekletilir. Adres doğrulanmışsa ve sipariş yurt dışına gidecekse uluslararası kargo kullanılır. Yurt içi siparişlerde premium müşteri veya sepeti 1.000 TL ve üzeri olan müşteri ücretsiz standart kargo alır. Diğer yurt içi siparişlerde ücretli standart kargo kullanılır.

Önce karar sorularını çıkar:

1. Adres doğrulanmış mı?
2. Sipariş yurt dışına mı gidiyor?
3. Müşteri premium mı?
4. Sepet ücretsiz kargo sınırına ulaştı mı?

Sonra eylemleri çıkar:

- Siparişi beklet.
- Uluslararası kargo seç.
- Ücretsiz standart kargo seç.
- Ücretli standart kargo seç.

Her sorunun her kuralda önemli olmadığını fark et. Adres doğrulanmamışsa diğer üç soru eylemi değiştirmez. Yurt dışı siparişte premium üyelik ve yurt içi ücretsiz kargo sınırı bu basitleştirilmiş modelde önemsizdir. Bu durumları `-` ile göstermek tabloyu 16 ham birleşimi tek tek yazmaktan daha anlaşılır yapar.

| Koşul/Eylem | K1 | K2 | K3 | K4 | K5 |
|---|---|---|---|---|---|
| Adres doğrulanmış mı? | H | E | E | E | E |
| Yurt dışı mı? | - | E | H | H | H |
| Premium mı? | - | - | E | H | H |
| Sınır aşıldı mı? | - | - | - | E | H |
| **Beklet** | X |  |  |  |  |
| **Uluslararası** |  | X |  |  |  |
| **Ücretsiz standart** |  |  | X | X |  |
| **Ücretli standart** |  |  |  |  | X |

K3'te müşteri premium olduğu için sepet sınırı önemsizdir. K4'te premium olmayan müşteri sınırı aştığı için ücretsiz kargo alır. Bu iki sütun aynı eylemi üretse de farklı iş nedenlerini temsil eder. Kodda ortak yükleme dönüştürülebilir:

```js
const reachedFreeShippingThreshold = cartTotal >= 1000;
const hasDomesticFreeShipping =
  isPremium || reachedFreeShippingThreshold;

if (!isAddressVerified) {
  shippingResult = "hold-order";
} else if (isInternational) {
  shippingResult = "international";
} else if (hasDomesticFreeShipping) {
  shippingResult = "domestic-free";
} else {
  shippingResult = "domestic-paid";
}
```

Tablo oluştururken şu denetimleri sırayla yap:

1. Her koşul gözlenebilir veya hesaplanabilir mi?
2. Her eylem dışarıdan doğrulanabilir bir sonuç mu?
3. İki sütun aynı koşul birleşimine farklı eylem atıyor mu?
4. Alan için mümkün olan bir birleşim eksik mi?
5. `-` kullanılan koşul gerçekten eylemi değiştirmiyor mu?
6. Sütunlar kodda hangi sırayla uygulanmalı?
7. Her sütun için en az bir somut test girdisi üretilebilir mi?

Bu sorular kod yazmadan önce gereksinim kusurunu ortaya çıkarabilir. Örneğin uluslararası premium müşteriye ücretsiz kargo verilip verilmediği metinde açık değilse K2'de premium değerini `-` yapmak bir varsayımdır. Ürün sahibine sorulmalı ve karar kaydedilmelidir.

### 19. Yürütme izi çıkarmak

Bir koşul zincirini anlamanın güvenilir yolu, programın karşılaştığı koşulları sırayla yazmaktır. Örneğin:

```js
const temperature = -4;
let label;

if (temperature < 0) {
  label = "freezing";
} else if (temperature < 15) {
  label = "cold";
} else if (temperature < 25) {
  label = "mild";
} else {
  label = "hot";
}

console.log(label);
```

İz tablosu:

| Adım | Gözlenen ifade | Sonuç | Sonraki hareket |
|---:|---|---|---|
| 1 | `temperature` değeri okunur | `-4` | İlk koşula git |
| 2 | `-4 < 0` | `true` | İlk bloğu çalıştır |
| 3 | `label = "freezing"` | Atama tamam | Zincir sonrasına git |
| 4 | `console.log(label)` | `freezing` | Program devam eder |

İkinci ve üçüncü koşullar hiç değerlendirilmez. Aynı kodda `temperature = 20` olduğunda ilk koşul yanlış, ikinci yanlış, üçüncü doğru olur. İz yalnız sonucu değil, atlanan değerlendirmeleri de kaydeder.

Hata ayıklarken koşullara geçici gözlem ekleyebilirsin:

```js
const isBelowFreezing = temperature < 0;
const isBelowColdLimit = temperature < 15;
const isBelowMildLimit = temperature < 25;

console.log({
  temperature,
  isBelowFreezing,
  isBelowColdLimit,
  isBelowMildLimit,
});
```

20 için ikinci ve üçüncü yüklemler matematiksel olarak ikisi de doğrudur. Buna rağmen zincirde yalnız ikinci eşleşen ilgili dal çalışır. Bu gözlem, “koşul doğru mu?” ile “bu koşula ulaşılabildi mi?” sorularının farklı olduğunu öğretir.

### 20. Sınırları bölgelere ayırmak

Sayısal sınıflandırmada her dal bir aralık temsil eder. Sıra doğru olsa bile aralıkta boşluk veya örtüşme olabilir. Şu gereksinimi düşün:

- 0'dan küçük değer geçersiz.
- 0–49 başarısız.
- 50–79 başarılı.
- 80–100 üstün başarı.
- 100'den büyük değer geçersiz.

Önce aralıkları matematiksel olarak yaz:

```text
score < 0             → geçersiz
0 <= score < 50       → başarısız
50 <= score < 80      → başarılı
80 <= score <= 100    → üstün başarı
score > 100           → geçersiz
```

Sonra sıralı akışa dönüştür:

```js
if (score < 0 || score > 100) {
  result = "invalid";
} else if (score < 50) {
  result = "failed";
} else if (score < 80) {
  result = "passed";
} else {
  result = "excellent";
}
```

İlk geçersizlik kontrolü geçildikten sonra kalan değerlerin 0–100 arasında olduğu bilgisi vardır. Bu yüzden ikinci koşulda `score >= 0` tekrarına gerek yoktur. Üçüncü dala ulaşan değerin zaten 50 veya daha büyük olduğunu yürütme yolu garanti eder. Her dal, önceki yanlış sonuçlardan bilgi devralır.

Test için yalnız her sınıftan rastgele bir değer seçme. Her sınırın iki tarafını ve kendisini kullan:

| Girdi | Beklenen | Kanıtladığı sınır |
|---:|---|---|
| -1 | invalid | Alt sınır dışı |
| 0 | failed | Alt sınır dahil |
| 49 | failed | Geçme sınırının altı |
| 50 | passed | Geçme sınırı dahil |
| 79 | passed | Üstün başarı sınırının altı |
| 80 | excellent | Üstün başarı sınırı dahil |
| 100 | excellent | Üst sınır dahil |
| 101 | invalid | Üst sınır dışı |

Bu sekiz test dal kapsamından fazlasını sağlar; sınır değerlerinin doğru bölgelere düştüğünü de sınar.

### 21. Eksik ve çelişkili kuralları tanımak

Bir karar tablosu otomatik olarak doğru değildir. Kötü gereksinimi düzenli biçimde gösterebilir. Örneğin şu iki kural çelişir:

- Premium müşteri bütün yurt içi siparişlerde ücretsiz kargo alır.
- Hızlı teslimat bütün müşteriler için ücretlidir.

Premium müşteri hızlı yurt içi teslimat seçerse iki kural farklı eylem söyler. Geliştirici, koşulları yazma sırasına göre birini kazandırmamalıdır. Şu sorular ürün kararına sunulur:

- Premium avantajı hızlı teslimatı da kapsar mı?
- Hızlı teslimat ücreti ücretsiz kargodan istisna mı?
- Ücretin tamamı mı, standart ücret kadarı mı düşülür?

Yanıt geldikten sonra tablo güncellenir. Bu süreç “kodlamayı geciktirmek” değildir; yanlış davranış üretmeyi önlemektir.

Eksik kural örneği:

- `draft` içerik düzenlenebilir.
- `published` içerik görüntülenebilir.

Peki `review` veya bilinmeyen durum ne olur? Varsayılan dal olmadan değişken atanmamış kalabilir. Eksiklik, kodun bir yerde `undefined` üretmesine kadar saklanabilir.

```js
let action;

if (status === "draft") {
  action = "edit";
} else if (status === "published") {
  action = "view";
}

console.log(action); // Bilinmeyen durumda undefined
```

Varsayılanın ne olacağı alan kararına bağlıdır. `"unsupported-status"`, açık hata veya güvenli reddetme seçeneklerinden biri seçilebilir.

### 22. Erişilemez dalı sistematik bulmak

Bir dalın erişilebilirliğini sınamak için o dala ulaşması gereken koşulları birlikte yaz. `else if` zincirinde bir dala ulaşmak, üstteki bütün koşulların yanlış ve kendi koşulunun doğru olması demektir.

```js
if (value >= 10) {
  result = "ten-or-more";
} else if (value >= 20) {
  result = "twenty-or-more";
}
```

İkinci dala ulaşma gereksinimi:

```text
value >= 10 yanlış
VE
value >= 20 doğru
```

İlk koşulun yanlış olması `value < 10` demektir. Aynı değer hem 10'dan küçük hem 20 veya daha büyük olamaz. Bu nedenle dal erişilemezdir.

Bu yöntemi karmaşık roller için de kullanabilirsin:

```js
if (isEmployee) {
  access = "employee";
} else if (isEmployee && isAdmin) {
  access = "admin";
}
```

İkinci dal, ilk koşul yanlışken `isEmployee && isAdmin` doğru olmasını ister. İmkânsızdır. Özel yönetici dalı önce gelmeli veya rollerin modeli yeniden düşünülmelidir.

Erişilemezlik bazen statik araçlarla bulunur, bazen yalnız alan ilişkileri bilinince görülür. Örneğin `isMinor && hasCorporateSigningAuthority` teknik olarak mümkün iki Boolean birleşimi gibi görünse de alan politikasında imkânsız olabilir. Bu bilgi kodda tür, doğrulama veya açık invariant ile temsil edilmelidir.

### 23. Dal-test matrisi oluşturmak

Test tasarımını kod tamamlandıktan sonra rastgele örnek seçmeye bırakma. Her dal için en az bir girdi ve beklenen sonuç yaz:

| Dal | Girdi | Beklenen | Neden bu dal? |
|---|---|---|---|
| Geçersiz adres | `valid=false` | `address-correction` | İlk koşul doğru |
| Uluslararası | `valid=true`, `international=true` | `international` | İlk yanlış, ikinci doğru |
| Yurt içi hızlı | `valid=true`, `international=false`, `express=true` | `domestic-express` | İlk iki yanlış, üçüncü doğru |
| Yurt içi standart | `valid=true`, `international=false`, `express=false` | `domestic-standard` | Bütün özel koşullar yanlış |

Bu dört vaka dört kod dalını çalıştırır. Ancak birleşik koşullar içinde ayrı Boolean parçalarının etkisini sınamak için ek vakalar gerekebilir. Örneğin uluslararası ve hızlı birlikte doğru olduğunda önceliğin uluslararasıda kalması bir sıra testidir.

Test adları alan davranışını açıklamalıdır:

```text
geçersiz adres siparişi düzeltmeye yönlendirir
yurt dışı hedef hızlı seçeneğe rağmen uluslararası yolu seçer
yurt içi hızlı sipariş hızlı taşıyıcıya gider
yurt içi standart sipariş varsayılan taşıyıcıya gider
```

“test1”, “if branch test” gibi adlar gereksinim izini taşımaz.

### 24. Koruma koşuluna kontrollü giriş

Koruma koşulu (Guard Clause), geçersiz veya devam etmeyi engelleyen durumu erken ele alarak ana akışın iç içe kalmasını azaltır. Tam işlev ve erken dönüş tasarımı ileriki bölümlerde derinleşecektir; burada yalnız karşılaştırma yapıyoruz.

İç içe model:

```js
if (isAddressValid) {
  if (hasStock) {
    result = "ready-to-ship";
  } else {
    result = "out-of-stock";
  }
} else {
  result = "invalid-address";
}
```

Düz zincir:

```js
if (!isAddressValid) {
  result = "invalid-address";
} else if (!hasStock) {
  result = "out-of-stock";
} else {
  result = "ready-to-ship";
}
```

İkinci modelde başarısız ön koşullar önce ele alınır ve başarı yolu son `else`te kalır. Hangisinin daha iyi olduğu bağlama bağlıdır. Olumsuzluk sayısı, eylemlerin uzunluğu ve alan dilinin doğal akışı değerlendirilir. “Guard clause her zaman daha iyidir” yeni bir ezber olmamalıdır.

### 25. Koşulların yan etkisiz olması

Koşul içinde atama, sayaç artırma veya dış sistem çağrısı varsa, dal sırası yalnız seçim değil durum değişikliği de üretir. Bu durum izlemeyi zorlaştırır.

```js
if (attempts++ >= limit) {
  locked = true;
}
```

Bu kod karşılaştırmadan sonra `attempts` değerini artırır. Okuyucu hem eski değeri hem yan etkiyi düşünmek zorundadır. Daha açık sürüm:

```js
const reachedAttemptLimit = attempts >= limit;

if (reachedAttemptLimit) {
  locked = true;
}

attempts += 1;
```

Gerçek gereksinime göre artırma sırası değişebilir; açık adımlar tartışmayı görünür kılar. Yan etkisiz yüklemler test ve yeniden sıralama açısından daha güvenlidir.

### 26. Hata ayıklama protokolü

Bir karar yanlış sonuç verdiğinde koşulları rastgele değiştirme. Şu protokolü kullan:

1. Beklenen iş kuralını tek cümleyle yaz.
2. Gerçek girdilerin değer ve türlerini kaydet.
3. Her adlandırılmış yüklemin sonucunu ayrı gözle.
4. Koşulların değerlendirilme sırasını izle.
5. Seçilen dalı ve atlanan dalları kaydet.
6. Aynı girdiyi karar tablosunda bul.
7. Tablo sonucu ile kod sonucunu karşılaştır.
8. En küçük davranış farkını oluşturan girdiyi sakla.
9. Düzeltmeden sonra tüm dal ve sınır testlerini yeniden çalıştır.

Örneğin 95 puanın “passed” çıkması beklenirken “basic-pass” çıkıyorsa önce değerin gerçekten sayı olduğunu, sonra zincirde `score >= 50` koşulunun `score >= 90`dan önce olup olmadığını gözle. Belirtiyi yamamak yerine kök nedeni bul.

## Engineering Perspective

### Karar kodu iş gereksiniminin çalıştırılabilir halidir

Bir koşul zinciri çoğu zaman şirket politikasını temsil eder. Ücretsiz kargo, kredi uygunluğu, destek önceliği veya içerik yayımlama kuralı değiştiğinde kod değişir. Bu nedenle karar kodunu yalnız teknik ayrıntı saymak tehlikelidir. Ürün, alan uzmanı, geliştirici ve test uzmanının aynı kural üzerinde anlaşması gerekir.

Karar tablosu ortak dil sağlar. Ürün sahibi sütunlardaki koşul ve eylemleri inceleyebilir; geliştirici dalları üretebilir; test uzmanı her sütundan vaka çıkarabilir. Koddan önce belirsizlik yakalanırsa düzeltme maliyeti düşer.

### İlk eşleşme bir öncelik politikasıdır

`else if` zincirinde sıra, yalnız yürütme ayrıntısı değil öncelik politikasıdır. İki koşul aynı anda doğru olabiliyorsa hangisinin önce geldiği sonucu belirler. Bu öncelik gereksinimde açık değilse geliştirici uydurmamalıdır.

Örneğin hem premium hem çalışan indirimi olan kullanıcıda hangisi uygulanır? İkisi birleşir mi, büyük olan mı seçilir, çalışan indirimi mi önceliklidir? Kod yazmadan önce soru sorulmalıdır.

### Varsayılan davranış güvenlik ve gözlenebilirlik kararıdır

Bilinmeyen rolü “normal kullanıcı” saymak bazen güvenlik açığı, bilinmeyen ödeme durumunu “başarılı” saymak mali kayıp doğurabilir. Güvenli varsayılan çoğu kritik alanda işlemi reddetmek veya manuel incelemeye yönlendirmektir. Fakat her alanda “reddet” doğru değildir; kullanıcı deneyimi ve iş sürekliliği dikkate alınır.

Önemli olan varsayılanın kasıtlı, gözlenebilir ve test edilmiş olmasıdır. Log, ölçüm veya açık hata sonucu, yeni durumu sessizce yutmaktan daha değerlidir.

### Erişilemez kod yalnız temizlik sorunu değildir

Erişilemez dal, unutulmuş bir gereksinim veya yanlış öncelik göstergesi olabilir. “Bu satır hiç çalışmıyor, silelim” demeden önce neden yazıldığını araştır. Belki özel durum amaçlanmış fakat genel koşul tarafından gölgelenmiştir.

### Karmaşıklık büyüdükçe parçalama gerekir

Beş koşulun tüm birleşimleri 32, on koşulun 1.024 durum üretir. Her şeyi tek zincire koymak sürdürülemez. Kararları anlamlı alt kararlara ayırmak, alan kavramlarını isimlendirmek ve daha sonra fonksiyonlara bölmek gerekir. Bu bölüm parçalamanın sezgisini verir; fonksiyon sözleşmeleri C13–C16'da derinleşir.

### Dal kapsamı kalite hedefi değil kalite sinyalidir

Yüzde 100 kapsam, her dalın en az bir kez çalıştığını söyler. Yanlış beklenen değer yazılmışsa test yine geçebilir. Aynı dal içindeki sınır hataları görülemeyebilir. Eksik gereksinim için hiç dal yazılmadıysa kapsam bunu bilmez. Bu nedenle kapsam; karar tablosu, sınır değerleri, güçlü assertion ve incelemeyle birlikte kullanılır.

### AI ile hızlanırken sahipliği korumak

AI bir karar zinciri üretebilir, fakat alan önceliğini bilemezse boşluğu tahminle doldurur. Profesyonel kullanıcı şu kanıtları ister:

1. Gereksinimlerin yeniden ifadesi.
2. Varsayımların listesi.
3. Karar tablosu.
4. Kod-dal eşlemesi.
5. Her dal için test girdisi ve beklenen sonuç.
6. Erişilemezlik ve varsayılan durum denetimi.

AI önerisi başlangıçtır; kararın sorumluluğu geliştiricide kalır.

## Real World Examples

### Kargo sınıflandırması

```js
const isAddressValid = true;
const isInternational = false;
const isExpress = true;
let shippingResult;

if (!isAddressValid) {
  shippingResult = "address-correction";
} else if (isInternational) {
  shippingResult = "international";
} else if (isExpress) {
  shippingResult = "domestic-express";
} else {
  shippingResult = "domestic-standard";
}

console.log(shippingResult);
```

Bu kod karar tablosunun dört sütununu sırayla uygular. Geçersiz adres en önce ele alınır; aksi halde başka kargo yolu yanlışlıkla seçilebilir.

### Destek talebi önceliği

```js
if (serviceDown && affectsManyUsers) {
  priority = "critical";
} else if (serviceDown) {
  priority = "high";
} else if (hasWorkaround) {
  priority = "normal";
} else {
  priority = "medium";
}
```

Bu eğitim örneği gerçek şirketin SLA politikasının yerine geçmez. `critical` koşulu, daha genel `serviceDown` koşulundan önce gelir.

### Girdi doğrulama sonucu

```js
if (rawAge === "") {
  message = "Yaş zorunludur";
} else if (Number.isNaN(Number(rawAge))) {
  message = "Yaş sayı olmalıdır";
} else if (Number(rawAge) < 0) {
  message = "Yaş negatif olamaz";
} else {
  message = "Girdi kabul edildi";
}
```

Boş değer ilk ele alınmazsa `Number("")` sıfıra dönüşebilir ve eksik veri yanlışlıkla kabul edilebilir. Veri dönüşümü bilgisi C08'den gelir.

### İçerik durum makinesi sınırı

```js
switch (status) {
  case "draft":
    action = "continue-editing";
    break;
  case "review":
    action = "request-review";
    break;
  case "published":
    action = "view-public-page";
    break;
  default:
    action = "report-unknown-status";
}
```

Bu yalnız durumdan eyleme seçimdir; geçişlerin hangi rol tarafından yapılabileceği ek kurallar gerektirir.

### Risk yönlendirme

```js
if (!isIdentityVerified) {
  route = "reject";
} else if (isHighAmount && isNewDevice) {
  route = "manual-review";
} else {
  route = "normal-processing";
}
```

Gerçek risk sistemi bundan çok daha karmaşıktır. Örnek, güvenilir kimlik yokluğunun diğer koşullardan önce ele alınmasını gösterir.

### Özellik yayılımı

```js
if (!isFeatureEnabled) {
  experience = "current";
} else if (isInternalUser) {
  experience = "new";
} else if (isExperimentMember) {
  experience = "new";
} else {
  experience = "current";
}
```

İki dal aynı eylemi üretiyor. Gereksinim uygunsa yüklem birleştirilerek sadeleştirilebilir:

```js
const hasAudienceAccess =
  isInternalUser || isExperimentMember;

if (isFeatureEnabled && hasAudienceAccess) {
  experience = "new";
} else {
  experience = "current";
}
```

Sadeleştirmenin davranışı değiştirmediği tablo ve testlerle doğrulanmalıdır.

## Common Mistakes

### Atama ile karşılaştırmayı karıştırmak

```js
if (status = "active") {
  console.log("Aktif");
}
```

Bu kod `status` değerini değiştirir ve boş olmayan metin doğru kabul edildiği için dal çalışır. Doğrusu `status === "active"` karşılaştırmasıdır. Linter bu hatayı yakalamaya yardımcı olabilir; yine de kod inceleyen kişi koşuldaki yan etkiyi sorgulamalıdır.

### Sınırı yanlış seçmek

“18 ve üzeri” için `age > 18` yazmak 18 değerini dışlar. Sınırın altı, kendisi ve üstü test edilmelidir.

### Özel durumu genel durumdan sonra koymak

`score >= 50` önceyse `score >= 90` dalı erişilemez. Her zincirde “üstteki koşul alttakini tamamen kapsıyor mu?” sorusunu sor.

### Bağımsız `if`leri tek seçim sanmak

İki koşul doğruysa iki bağımsız `if` de çalışır. Tek sonuç gerekiyorsa zincir veya açık öncelik gerekir.

### `else if` zincirinde bütün koşulların değerlendirildiğini sanmak

İlk doğru koşuldan sonra zincir durur. Sonraki koşullar yan etki taşıyorsa hiç çalışmayabilir; koşulların yan etkisiz olması tercih edilir.

### Süslü parantezleri atlamak

Girinti JavaScript sözdizimi değildir. Parantezsiz yapıda yalnız tek Statement dala aittir. Ekip standardı olarak her zaman blok kullanmak güvenlidir.

### Her bilinmeyeni varsayılan normal durum yapmak

`default: success` veya geniş `else` veri hatasını gizleyebilir. Varsayılanı alan riskine göre tasarla.

### `switch` içinde `break` unutmak

Eşleşen bölümden sonraki kodlar da çalışır. Kasıtlı geçiş yoksa her bölüm `break`, `return` veya başka açık kontrol aktarımıyla bitmelidir.

### Karar tablosunda koşul ve eylemi karıştırmak

“Premium kullanıcı” koşuldur; “ücretsiz kargo ver” eylemdir. Aynı hücrede ikisini bir cümleye sıkıştırmak kombinasyonları görünmez yapar.

### İmkânsız durumu sessizce silmek

Bir birleşim alan açısından imkânsızsa gerekçesini yaz. Veri bozulduğunda bu birleşim yine görülebilir; sistemin nasıl davranacağı düşünülmelidir.

### Yalnız satır kapsamına bakmak

Bir satırın çalışması, kararın iki sonucunun da çalıştığı anlamına gelmez. Dal düzeyinde girdileri eşle.

### Kapsamı doğruluk sanmak

Her dal çalışmış olsa bile beklenen sonuç yanlış olabilir. Test oracle'ı, gereksinim ve sınırlar ayrıca doğrulanır.

## Best Practices

### Kodu yazmadan önce kararları listele

Koşulları evet/hayır sorularına, eylemleri gözlenebilir sonuçlara dönüştür. İki veya üç koşul varsa tablo oluştur. Gereksinim belirsizse uygulamaya başlamadan soru üret.

### Özelden genele sırala

Örtüşen aralık ve roller için dar durum önce gelmelidir. Sıra nedenini kısa bir tasarım notunda kaydetmek gelecekteki değişikliği güvenli kılar.

### Koşulları adlandır

```js
const isEligibleForFreeShipping =
  cartTotal >= 1000 || isPremium;

if (isEligibleForFreeShipping) {
  shippingFee = 0;
}
```

Ad, gereksinimi görünür kılar. Ancak adın altındaki ifade yine sınanmalıdır.

### Blok kullan

Tek satır olsa bile süslü parantez kullan. Bu yaklaşım biçimlendirme yanılsamasını ve sonradan satır ekleme hatasını azaltır.

### Varsayılanı bilinçli yap

Beklenmeyen durum için hata, güvenli reddetme, manuel inceleme veya açık bilinmeyen sonuç seç. Sessizce başarılı sayma.

### Her dalı tablo sütununa bağla

Kod incelemede “bu dal hangi kuralı uygular?” sorusunun cevabı görünür olmalıdır. Test adı da aynı alan dilini kullanabilir.

### Sınırları çift taraflı sınama

`amount >= 1000` için 999, 1000 ve 1001; tarih sınırı için önce, tam an ve sonra; liste boyutu için 0, 1 ve üst sınır test edilir.

### Kapsam raporunu soru üretmek için kullan

Kırmızı dal “hangi girdi buraya ulaşır?” sorusunu doğurur. Ulaşılamıyorsa kod veya gereksinim hatası olabilir. Ulaşılıyor fakat test yoksa test açığı vardır.

### Kısa kod yerine açık kodu seç

Üçlü koşul operatörü küçük değer seçimlerinde yararlı olabilir, fakat iç içe kullanımı karar yapısını gizler. Bu bölümde çok dallı iş kuralları için açık yapıları tercih et.

### AI çıktısında karşı örnek ara

AI çözümünü onaylamak için yalnız beklenen bir örnek değil, yanlış sırayı açığa çıkaran karşı örnek kullan. Özel koşul ve genel koşul aynı anda doğru olduğunda hangi dal seçiliyor?

## Hands-on Exercise

### Kargo karar tablosunu uygula

Kurallar:

1. Adres geçersizse sipariş adres düzeltmeye gönderilir.
2. Adres geçerli ve hedef yurt dışıysa uluslararası kargo seçilir.
3. Adres geçerli, hedef yurt içi ve hızlı teslimat seçilmişse yurt içi hızlı kargo seçilir.
4. Adres geçerli, hedef yurt içi ve hızlı teslimat seçilmemişse standart kargo seçilir.

Önce dört sütunlu karar tablosunu kendin oluştur. Ardından kodu tamamla:

```js
const cases = [
  {
    addressValid: false,
    international: false,
    express: false,
    expected: "address-correction",
  },
  {
    addressValid: true,
    international: true,
    express: false,
    expected: "international",
  },
  {
    addressValid: true,
    international: false,
    express: true,
    expected: "domestic-express",
  },
  {
    addressValid: true,
    international: false,
    express: false,
    expected: "domestic-standard",
  },
];

for (const testCase of cases) {
  let actual;

  // Karar tablosunu burada koşullu akışa dönüştür.

  console.log({
    ...testCase,
    actual,
    passed: actual === testCase.expected,
  });
}
```

Sonra şu çalışmaları yap:

1. Her kod dalını tablo sütunuyla eşle.
2. Dört testin dört dalı çalıştırdığını açıkla.
3. Uluslararası ve hızlı değerleri birlikte doğru yap. Gereksinime göre hangi dal seçilmeli? Neden?
4. Genel “adres geçerli” dalını zincirin en başına ekleyerek bilerek hata oluştur. Hangi dallar erişilemez oldu?
5. Hatayı düzelt ve bütün testleri yeniden çalıştır.
6. `switch` kullanmanın bu çok değişkenli kuralı daha açık yapıp yapmayacağını gerekçelendir.
7. Yüzde 100 dal kapsamına rağmen hangi veri risklerinin kaldığını yaz.

Teslimin karar tablosu, çalışan kod, terminal çıktısı, dal-test matrisi, bilerek oluşturulan hata izi ve en az 250 kelimelik mühendislik değerlendirmesi içermelidir.

## Reflection Questions

1. Mantıksal değer üretmekle koşullu yürütme yapmak arasındaki fark nedir?
2. Tek `if` hangi durumda `if...else` yapısından daha uygundur?
3. Bağımsız iki `if` ile `if...else if` zinciri aynı girdide nasıl farklı davranabilir?
4. İlk eşleşme kuralı neden dal sırasını iş gereksiniminin parçası yapar?
5. Özel koşulu nasıl tanırsın?
6. Girinti neden blok sınırını belirlemez?
7. `else` hangi `if` ile eşleşir ve süslü parantez bu riski nasıl azaltır?
8. Varsayılan durum hangi durumda güvenli reddetme, hangi durumda kullanıcı dostu geri dönüş olmalıdır?
9. Karar tablosuyla doğruluk tablosu arasındaki fark nedir?
10. `-` yani önemsiz değer karar tablosunda ne anlatır?
11. Bir tablo sütununun uygulanamaz olduğunu nasıl kanıtlarsın?
12. Aynı koşul birleşimine iki eylem atanırsa ne yapılmalıdır?
13. Erişilemez dalın yalnız ölü kod değil, gereksinim sorunu olabileceği bir örnek üret.
14. Dal kapsamı nasıl hesaplanır?
15. Yüzde 100 dal kapsamı hangi hataları kaçırabilir?
16. `switch` ne zaman `if...else` zincirinden daha okunabilir olabilir?
17. `break` unutulmasının sonucu nedir? Kasıtlı geçiş nasıl görünür yapılır?
18. AI tarafından üretilen bir zincirde ilk hangi karşı örneği ararsın?
19. Bir kararın koşul sayısı büyüdüğünde hangi parçalama stratejilerini kullanırsın?
20. Kargo laboratuvarında yeni “tehlikeli madde” kuralı eklenirse tablo ve testler nasıl değişir?

Her yanıtın bir gerekçe ve mümkünse karşı örnek içersin. Yalnız tanım tekrarı, mühendislik kararını kanıtlamaz.

## Chapter Summary

Koşullu yürütme, programın değerlendirilen koşula göre hangi talimatları çalıştıracağını seçmesidir. Normal sıra, seçim noktasında dallanır ve seçilen bloktan sonra ortak devam noktasına döner. Koşul karar sorusudur; dal olası yürütme yoludur.

Tek `if`, yalnız doğru durumda ek eylem gerektiğinde; `if...else`, iki birbirini dışlayan sonuçtan biri gerektiğinde; `else if` zinciri birden çok sınıftan ilk eşleşen seçileceğinde kullanılır. Bağımsız `if`ler birlikte çalışabilir, zincir ise ilk doğru daldan sonra durur.

Dal sırası özellikle örtüşen koşullarda davranışı belirler. Özel koşul genel koşuldan sonra gelirse erişilemez olabilir. Süslü parantezler blok sınırını açıklar ve `else` ilişkisindeki yanılsamaları azaltır.

`switch`, tek seçici değeri sabit seçeneklerle eşleştirmede okunabilir olabilir. `case` katı eşitlikle eşleşir; `break` yoksa sonraki bölümlere geçiş olur. `default`, hiçbir seçenek eşleşmediğinde kasıtlı davranışı belirler.

Karar tablosu koşulları, kural sütunlarını ve eylemleri bir araya getirir. Eksik durumları, çelişkileri, öncelik belirsizliğini ve uygulanamaz birleşimleri koddan önce görünür yapar. Her uygulanabilir sütun kod dalına ve test girdisine bağlanabilir.

Erişilebilirlik analizi, bir dala ulaşan girdi bulunup bulunmadığını sorar. Dal kapsamı testlerin yürüttüğü dal oranını ölçer. Ancak kapsam doğruluk kanıtı değildir; yanlış gereksinim, zayıf assertion, eksik sınır ve hiç uygulanmamış kural kapsam raporunda görünmeyebilir.

Profesyonel yaklaşım gereksinimden tabloya, tablodan akışa, akıştan teste iz kurulmasıdır. AI bu süreci hızlandırabilir; fakat varsayımları, önceliği ve karşı örnekleri geliştirici denetlemelidir.

## Key Takeaways

- Koşul hangi yolun seçileceğini, dal ise izlenebilecek yolu temsil eder.
- `if` koşulu doğru kabul edilirse blok çalışır.
- `if...else` iki yoldan tam birini seçer.
- `else if` zincirinde ilk doğru dal çalışır; kalan koşullar değerlendirilmez.
- Bağımsız `if` ifadelerinden birden fazlası aynı yürütmede çalışabilir.
- Örtüşen koşullarda özel durum genel durumdan önce gelmelidir.
- Girinti davranış belirlemez; süslü parantez blok belirler.
- `else`, parantez yoksa en yakın uygun `if` ile eşleşir.
- Varsayılan durum bilinmeyen girdiye yönelik bilinçli politikadır.
- `switch`, tek değerin sabit seçeneklerle eşleşmesinde yararlı olabilir.
- `switch` içinde `break` yoksa yürütme sonraki bölüme geçebilir.
- Karar tablosundaki her sütun bir koşul birleşimi ve beklenen eylemdir.
- `-`, ilgili kural için koşul değerinin eylemi değiştirmediğini anlatır.
- Eksiksizlik, ilgili uygulanabilir durumların tümünün kapsanmasıdır.
- Aynı duruma çelişkili eylem atanması gereksinim sorusudur; geliştirici keyfî öncelik seçmemelidir.
- Erişilemez dal için hiçbir olası girdi yoktur.
- Dal kapsamı, yürütülen dalların toplam erişilebilir dallara oranıdır.
- Yüzde 100 dal kapsamı programın doğru olduğunu kanıtlamaz.
- Sınır değerleri ve geçersiz girdiler ayrıca test edilmelidir.
- AI çıktısı karar tablosu, dal sırası, erişilebilirlik ve test eşlemesiyle denetlenmelidir.

## Further Reading

Önce ECMAScript belirtimindeki `if` çalışma zamanı algoritmasını oku. Koşul ifadesinin değerlendirilmesi, `ToBoolean` uygulanması ve yalnız seçilen Statement'ın yürütülmesi adımlarını kendi sözlerinle yaz. Ardından `switch` bölümünde seçici değerlendirme, eşleşme ve geçiş davranışını incele.

MDN `if...else` sayfasında blok kullanımı, en yakın `if` ile eşleşen `else` ve koşul içinde yanlışlıkla atama uyarılarına odaklan. MDN `switch` sayfasında katı eşitlik, `break`, kasıtlı geçiş ve `default` davranışını çalıştır.

ISTQB Foundation Level müfredatında karar tablosu testi ve dal testi bölümlerini oku. Karar tablosu kapsam öğesinin uygulanabilir kural sütunları, dal kapsam öğesinin kontrol aktarım yolları olduğunu ayır. NIST kapsam kaynaklarını kullanarak “yüksek kapsam neden yeterli değildir?” sorusuna not çıkar.

İleri okuma için McCabe'nin kontrol akış grafiği yaklaşımını incele. Bu bölümde formül ezberleme; her yeni kararın ek yürütme yolu ve test sorumluluğu oluşturduğu fikrine odaklan.

## References

- Ecma International. [ECMAScript Language Specification — The `if` Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-if-statement).
- Ecma International. [ECMAScript Language Specification — The `switch` Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-switch-statement).
- Ecma International. [ECMAScript Language Specification — ToBoolean](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean).
- MDN Web Docs. [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
- MDN Web Docs. [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
- MDN Web Docs. [Block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block).
- MDN Web Docs. [Making decisions in your code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals).
- National Institute of Standards and Technology. [Decision or branch coverage](https://csrc.nist.gov/glossary/term/decision_or_branch_coverage).
- International Software Testing Qualifications Board. [Certified Tester Foundation Level Syllabus v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf).
- National Institute of Standards and Technology. [NISTIR 8397](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf).
- McCabe, T. J. [A Complexity Measure](https://www.cs.du.edu/~snarayan/sada/teaching/COMP3705/lecture/p1/mccabe.pdf). IEEE Transactions on Software Engineering, 1976.
- ACM, IEEE Computer Society, and AAAI. [Computer Science Curricula 2023](https://csed.acm.org/).
