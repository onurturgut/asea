---
title: "İç İçe ve Bileşik Kontrol Akışı — Karmaşıklığı Yönetmek"
volume: "01"
chapter: "12"
chapter_id: "V01-C12"
slug: "ic-ice-ve-bilesik-kontrol-akisi"
difficulty: "Beginner"
estimated_time: "5-6 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C12-BP01"
production_packet_id: "V01-C12-CPP-001"
prerequisites:
  - "V01-C10"
  - "V01-C11"
learning_objectives:
  - "V01-LO018"
last_updated: "2026-07-23"
---

# İç İçe ve Bileşik Kontrol Akışı — Karmaşıklığı Yönetmek

## Learning Objectives

Bu bölümün sonunda öğrenci aşağıdaki işleri yalnız sözdizimini hatırlayarak değil, görünür kanıt üreterek yapabilecektir:

- İç içe kontrol akışını (Nested Control Flow) dış yapıdan iç yapıya doğru izlemek.
- İç içe dal (Nested Branch) içinde bir kararın hangi koşullarda erişilebilir olduğunu açıklamak.
- İç içe döngünün (Nested Loop) her dış turda iç döngüyü nasıl yeniden başlattığını göstermek.
- Bir programın yürütme yolunu (Execution Path) koşullar, durum değişimleri ve sonuçlarla tabloya dökmek.
- Sözdizimsel olarak düşünülebilen yollarla gerçekten uygulanabilir yolları ayırmak.
- İki boyutlu tekrarın neden çoğu durumda `m × n` çalışma ürettiğini hesaplamak.
- `break`, `continue` ve sınırlı bir `return` örneğinin hangi kapsamdan çıktığını doğru belirlemek.
- Kontrol akışı karmaşıklığını (Control-Flow Complexity) yalnız girinti sayısı olarak değil, okuyucunun taşıdığı bağlam ve sınanması gereken davranışlar olarak değerlendirmek.
- Koruma koşulu (Guard Clause), erken çıkış (Early Exit), adlandırılmış koşul ve birleşik koşul kullanarak gereksiz iç içeliği azaltmak.
- Bir dönüşümün davranışı koruyup korumadığını karar tablosu ve testlerle denetlemek.
- Yapay zekâ tarafından önerilen bir sadeleştirmenin görünüşte güzel ama davranış bakımından hatalı olabileceğini fark etmek.
- Çok kurallı bir zamanlayıcıyı analiz etmek, sadeleştirmek ve normal, sınır, geçersiz ve çakışan vakalarla doğrulamak.

Bu hedeflerin merkezinde `V01-LO018` bulunur: öğrenci iç içe akış için yol çıkaracak ve davranışı koruyarak iç içelik derinliğini azaltacaktır. “Kod çalıştı” tek başına yeterli kanıt değildir. Hangi girdilerin hangi yoldan geçtiği, hangi durumun değiştiği ve dönüşümden sonra aynı sonucun neden korunduğu açıklanmalıdır.

## Prerequisites

Bu bölüme başlamadan önce C10'daki koşullu yürütme ile C11'deki yineleme ve döngü bilgisi kullanılabilir durumda olmalıdır. Aşağıdaki kısa kontrolü notlara bakmadan yapın:

1. `if`, `else if` ve `else` dallarından bir çalışmada neden yalnız birinin seçildiğini açıklayın.
2. `A && B` ifadesinde `A` yanlış olduğunda `B` ifadesinin neden değerlendirilmeyebileceğini söyleyin.
3. `for` döngüsünde başlatma, koşul, gövde ve güncelleme sırasını yazın.
4. Bir `while` döngüsünün sonlanması için hangi durumun değişmesi gerektiğini gösterin.
5. `break` ile `continue` arasındaki farkı birer cümleyle anlatın.

Bu sorulardan biri belirsizse ilerlemek yasak değildir; fakat ilgili C10 veya C11 bölümüne dönüp bir iz tablosu çıkarmak öğrenme süresini kısaltır. Bu chapter önceki sözdizimini yeniden öğretmez. Önceki iki yeteneği aynı problem içinde birleştirir.

Gerekli çalışma ortamı basittir: Node.js çalıştırabilen bir terminal veya tarayıcı geliştirici konsolu, bir metin düzenleyici ve not tutmak için tablo oluşturabileceğiniz bir araç. Kod örneklerini kopyalayıp hemen çalıştırmak yerine önce sonucu tahmin edin. Tahmini, gerçek çıktıyı ve farkın nedenini ayrı ayrı kaydedin. Bu alışkanlık, karmaşık akışı yalnız gözle takip etme yanılgısını azaltır.

Ön bilgilerinizin güçlü olup olmadığını ölçmek için şu küçük programı zihninizde yürütün:

```js
for (let number = 1; number <= 3; number += 1) {
  if (number % 2 === 0) {
    console.log("çift", number);
  } else {
    console.log("tek", number);
  }
}
```

Üç tur vardır; her turda tek bir koşul dalı seçilir. Çıktı sırasıyla `tek 1`, `çift 2`, `tek 3` olur. Bu açıklamayı rahatça yapabiliyorsanız iç içe akışa geçmeye hazırsınız. Yapamıyorsanız aynı kod için tur numarası, `number`, koşul sonucu ve çıktı sütunlarından oluşan bir tablo hazırlayın.

## Estimated Study Time

Önerilen toplam süre 5-6 saattir; bu süre tek oturumda tamamlanmak zorunda değildir. Verimli bir plan şöyledir:

| Çalışma | Süre | Üretilecek kanıt |
|---|---:|---|
| Ön bilgi geri çağırma ve ilk okuma | 35 dakika | Beş tanım ve ilk tahmin |
| İç içe dallar ve yol tabloları | 55 dakika | En az iki tam yol tablosu |
| İç içe döngüler ve koordinat izleri | 60 dakika | `m × n` tablosu ve değişken sınır izi |
| Karmaşıklık ve sadeleştirme | 60 dakika | Önce/sonra karar tablosu |
| Gerçek dünya örneği ve hata analizi | 45 dakika | Kök neden notları |
| Uygulamalı görev | 75 dakika | Çalışan zamanlayıcı ve testler |
| Özet, yansıma ve ertesi gün tekrar | 30 dakika | Kendi kelimelerinizle bir sayfalık özet |

Hızlı okumak hedef değildir. Bir yürütme yolunu yanlış tahmin ettiğinizde durun ve kodu satır satır izleyin. Özellikle dış koşul, iç koşula giriş, güncelleme ve çıkış anlarını not edin. Bir örneği anlayamadan sonraki örneğe geçmek, derin iç içelikte hatayı büyütür.

Çalışmayı iki güne bölerseniz ilk gün iç içe dallar ile döngüleri, ikinci gün sadeleştirme ve laboratuvarı tamamlayın. İkinci güne başlarken notlara bakmadan “iç yapı hangi durumda erişilir?”, “iç döngü ne zaman sıfırlanır?” ve “bir dönüşümün doğru olduğunu nasıl kanıtlarım?” sorularını yanıtlayın. Bu kısa geri çağırma, okuma hissi ile gerçek öğrenmeyi ayırır.

## Introduction

Bir sinema için basit bir bilet kuralı düşünün. Salon açıksa, boş koltuk varsa ve izleyicinin yaşı film sınırını karşılıyorsa bilet verilsin. İlk kez program yazan biri bu kuralları doğal olarak iç içe kurabilir:

```js
if (isOpen) {
  if (hasSeat) {
    if (age >= minimumAge) {
      console.log("Bilet verildi");
    }
  }
}
```

Bu kod yanlış değildir. Hatta kuralı dıştan içe doğru açık biçimde temsil eder: salon kapalıysa koltuk ve yaş kontrolüne ihtiyaç yoktur. Sorun, kurallar çoğaldığında başlar. Üyelik tipi, engelli erişimi, seans çakışması, ödeme durumu ve güvenlik kuralı eklendiğinde okuyucu her satırda daha önce hangi kapıların açıldığını zihninde tutmak zorunda kalır. Bir hata olduğunda yalnız “hangi koşul yanlış?” değil, “bu koşula hiç ulaşıldı mı?” sorusu ortaya çıkar.

Program yalnız satırları yukarıdan aşağı okumaz; koşullar ve döngüler yürütmenin hangi satırlardan geçeceğini belirler. Başlangıçtan bir sonuca kadar gerçekten izlenen bu rota yürütme yoludur. Aynı program farklı girdilerle farklı yollar seçebilir. Profesyonel mühendislikte kodu anlamak, yalnız bütün satırları görmek değil; önemli yolları, bu yollardaki durum değişikliklerini ve her yolun beklenen sonucunu görünür kılmaktır.

İç içelik bazen problemin doğal biçimidir. Bir takvimde her günün zaman dilimlerini dolaşmak, bir tablonun satır ve sütunlarını gezmek veya her öğrenci için her sınav sonucunu işlemek iki boyutlu tekrar gerektirir. Burada iç içe döngüden kaçınmaya çalışmak problemi gizleyebilir. Buna karşılık yalnız birkaç sınır durumunu dışlamak için beş seviye `if` kullanmak ana davranışı gereksiz yere gömebilir. Hedef “hiç iç içelik kullanma” değildir; yapı ile problem arasındaki ilişkiyi bilinçli seçmektir.

Bu bölüm iki yeteneği birlikte geliştirir. Birincisi analizdir: mevcut akışın hangi yolları oluşturduğunu, her yolun ne yaptığını ve hangi yolun eksik sınandığını çıkarmak. İkincisi tasarımdır: aynı gözlenebilir davranışı koruyarak akışı daha doğrudan hâle getirmek. Tasarımın doğru kabul edilmesi için estetik görüş yetmez; önce ve sonra sürümler aynı anlamlı vaka kümesinde karşılaştırılmalıdır.

Bir şirkette kod incelemesi yaptığınızı düşünün. Yapay zekâ, derin iç içe bir fonksiyonu tek bir uzun koşula dönüştürmüş olabilir. Kod daha kısa görünür. Fakat özgün sürümde ilk koşul doğru olduğunda yapılan bir kayıt işlemi yeni sürümde kaybolmuşsa davranış değişmiştir. İyi mühendis, “daha temiz görünüyor” demek yerine yol tablosunu, yan etki sırasını ve testleri inceler. Bu nedenle chapter boyunca her sadeleştirme önerisinin yanında şu soru vardır: Aynı girdi sınıflarında aynı çıktı ve aynı gerekli durum değişimleri korunuyor mu?

## Core Concepts

### İç içe dal: bir kararın başka bir karara erişim vermesi

Bir `if` bloğunun içinde ikinci bir `if` bulunduğunda iç karar her zaman çalışmaz. Önce dış kararın ilgili dalı seçilmelidir:

```js
const isMember = true;
const cartTotal = 700;

if (isMember) {
  console.log("Üye hesabı doğrulandı");

  if (cartTotal >= 500) {
    console.log("Ücretsiz teslimat");
  }
}
```

`isMember` yanlışsa `cartTotal >= 500` değerlendirilmez. Bu, iç kararın erişim koşuludur. İç koşulu tek başına incelemek yeterli değildir; o noktaya gelene kadar seçilmiş dış dallar da yolun parçasıdır.

Dört temel girdi birleşimini yazalım:

| Üye mi? | Sepet en az 500 mü? | İç koşula ulaşılır mı? | Sonuç |
|---|---|---|---|
| yanlış | yanlış | hayır | mesaj yok |
| yanlış | doğru | hayır | mesaj yok |
| doğru | yanlış | evet | yalnız doğrulama mesajı |
| doğru | doğru | evet | iki mesaj |

İkinci satır önemli bir ayrım gösterir: sepet koşulu veri bakımından doğru olsa bile program bu koşulu değerlendirmez. “Koşul doğru” ile “koşul değerlendirildi” aynı şey değildir.

### `else` hangi `if` yapısına aittir?

Süslü parantez kullanılmadığında veya girinti yanıltıcı olduğunda `else` sahipliği hata kaynağı olabilir. JavaScript'te `else`, sözdizimsel olarak en yakın eşleşmemiş `if` ile bağlanır:

```js
if (isMember)
  if (cartTotal >= 500)
    console.log("Ücretsiz teslimat");
  else
    console.log("Teslimat ücretli");
```

Buradaki `else`, dıştaki `if (isMember)` yapısına değil, `if (cartTotal >= 500)` yapısına aittir. Üye olmayan biri için hiçbir mesaj çıkmaz. Girinti başka bir niyet düşündürebilir fakat çalışma davranışını belirlemez. ASEA örneklerinde süslü parantez kullanmamızın nedeni yalnız stil değildir; dal sahipliğini gözle görünür kılmaktır.

### Yürütme yolu ve durum izi

Yol yalnız doğru/yanlış dizisi değildir. Yol boyunca değişen durum ve üretilen gözlenebilir sonuç da kaydedilmelidir:

```js
let points = 0;
const completedProfile = true;
const verifiedEmail = false;

if (completedProfile) {
  points += 10;

  if (verifiedEmail) {
    points += 20;
  } else {
    points += 5;
  }
}

console.log(points);
```

Bu girdide yol şöyledir:

1. `points` değeri 0'dır.
2. Dış koşul doğrudur; dış bloğa girilir.
3. `points` 10 olur.
4. İç koşul yanlıştır; iç `else` seçilir.
5. `points` 15 olur.
6. 15 yazdırılır.

Yalnız sonucun 15 olduğunu bilmek, dönüşüm için yeterli değildir. Dış bloktaki `points += 10` işlemi her iki iç dalda da korunmalıdır. Yapay zekâ yalnız iç sonuçlara bakıp yapıyı değiştirirse bu ortak durum değişimini düşürebilir.

### Uygulanabilir ve uygulanamaz yollar

İki ikili koşul kâğıt üzerinde dört birleşim üretir. Fakat koşullar arasında mantıksal ilişki varsa bazı birleşimler imkânsızdır:

```js
const age = 12;
const isAdult = age >= 18;
const canReceiveChildDiscount = age < 13;
```

`isAdult` ve `canReceiveChildDiscount` aynı anda doğru olamaz. Karar tablosuna bütün doğruluk birleşimlerini yazabiliriz; fakat test tasarımında uygulanamaz birleşimi gerçek bir girdiyle oluşturmaya çalışmak anlamsızdır. Uygulanabilir yol, veri ve kurallar altında gerçekten izlenebilen yoldur. Bu ayrım test sayısını bilinçli seçmeyi sağlar.

### İç içe döngü ve Kartezyen yineleme

Bir döngünün gövdesinde başka bir döngü bulunduğunda dış döngünün her turunda iç döngü yeniden çalışır:

```js
for (let row = 1; row <= 2; row += 1) {
  for (let column = 1; column <= 3; column += 1) {
    console.log(row, column);
  }
}
```

Dış döngü iki, iç döngü her dış turda üç kez çalışır. Toplam altı çift üretilir. İki kümenin bütün çiftlerini üretme düşüncesine Kartezyen yineleme (Cartesian Iteration) diyebiliriz. İz tablosu şöyledir:

| Dış tur | `row` | İç tur | `column` | Üretilen çift |
|---:|---:|---:|---:|---|
| 1 | 1 | 1 | 1 | `(1, 1)` |
| 1 | 1 | 2 | 2 | `(1, 2)` |
| 1 | 1 | 3 | 3 | `(1, 3)` |
| 2 | 2 | 1 | 1 | `(2, 1)` |
| 2 | 2 | 2 | 2 | `(2, 2)` |
| 2 | 2 | 3 | 3 | `(2, 3)` |

İç değişkenin her dış turda `1` olarak yeniden oluşturulduğuna dikkat edin. İç sayacı yanlışlıkla dışarıya taşırsanız ikinci dış tur başladığında sayaç 4 olabilir ve iç döngü hiç çalışmayabilir.

### Sabit olmayan iç sınır

Her iç döngü aynı sayıda tur yapmak zorunda değildir:

```js
for (let row = 1; row <= 4; row += 1) {
  for (let column = 1; column <= row; column += 1) {
    console.log(row, column);
  }
}
```

İç tur sayıları sırasıyla 1, 2, 3 ve 4'tür; toplam `1 + 2 + 3 + 4 = 10` çalışma oluşur. Burada doğrudan `4 × 4` demek yanlıştır. Genel kural şudur: iç sınır sabitse çarpım kullanılabilir; dış tura göre değişiyorsa her dış turun iç çalışma sayıları toplanır.

### `break` ve `continue` kapsamı

Etiketsiz `break`, içinde bulunduğu en yakın döngüyü bitirir:

```js
for (let day = 1; day <= 3; day += 1) {
  for (let slot = 1; slot <= 4; slot += 1) {
    if (slot === 2) {
      break;
    }
    console.log(day, slot);
  }
}
```

Her gün yalnız `slot = 1` yazdırılır. `slot = 2` olduğunda iç döngü biter; dış döngü sonraki güne devam eder. Program bütünüyle bitmez. `continue` kullanılsaydı yalnız iç döngünün mevcut turunun kalanı atlanır ve `slot = 3` ile devam edilirdi.

Bu davranışı anlamanın güvenli yolu “kaç girinti dışarı çıkar?” diye tahmin etmek değil, ilgili komutun hedef yapısını açıkça işaretlemektir. Kod incelemesinde `break // iç slot aramasını bitirir` gibi niyeti açıklayan kısa bir yorum, karmaşık durumda yararlı olabilir. Yorum yanlış yapıyı düzeltmez; yalnız bilinçli kapsam kararını görünür kılar.

### Bileşik koşul ve kısa devre

Aşağıdaki yapı, dış ve iç bloklarda başka işlem yoksa tek birleşik koşula dönüştürülebilir:

```js
if (isActive) {
  if (hasPermission) {
    startTask();
  }
}
```

```js
if (isActive && hasPermission) {
  startTask();
}
```

İki sürümde de `hasPermission` yalnız `isActive` doğru olduğunda değerlendirilir; `&&` kısa devresi özgün erişim koşulunu korur. Fakat dış blokta `logActiveUser()` gibi başka işlem varsa doğrudan birleştirme bu işlemi kaybedebilir. Dönüşüm kalıbı bir emir değil, ön koşulları doğrulanması gereken bir araçtır.

### Durum makinesi sezgisi

Durum makinesi sezgisi (State Machine Intuition), çok sayıda bayrakla iç içe karar vermek yerine sistemin hangi durumda olduğunu ve bir olayın onu hangi sonraki duruma taşıdığını sormaktır. Örneğin bir başvuru `draft`, `submitted`, `approved` veya `rejected` durumunda olabilir. `isDraft`, `isSubmitted`, `isApproved` gibi birbirleriyle çelişebilecek çok sayıda boolean yerine tek bir `status` değeri bazı imkânsız birleşimleri ortadan kaldırır.

Bu chapter formal durum makinesi tasarlamaz. Buradaki ders şudur: çok sayıda iç içe koşul, aslında açıkça adlandırılmamış durumları temsil ediyor olabilir. Böyle bir koku gördüğünüzde yalnız girintiyi düzleştirmek yerine veri modelinin geçerli durumları doğru temsil edip etmediğini sorun.

### Bir yürütme yolu nasıl sistematik çıkarılır?

Karmaşık kodu yalnız gözünüzle takip etmeye çalışmak, çalışma belleğinize gereğinden fazla yük bindirir. Bunun yerine tekrar kullanılabilir bir yöntem uygulayın. İlk adımda programın girdilerini, başlangıç durumunu ve gözlenebilir çıktısını yazın. İkinci adımda her karar noktasına `D1`, `D2`, `D3`; her döngüye `L1`, `L2` gibi geçici etiket verin. Üçüncü adımda tek bir girdi seçin ve her kararın sonucunu sırayla kaydedin. Dördüncü adımda değişen her değerin önceki ve sonraki hâlini yazın. Son adımda programın ürettiği çıktı veya hata ile izin verdiği yan etkileri kaydedin.

Şu örneği ele alalım:

```js
let status = "waiting";
let attempts = 0;
const isEnabled = true;
const responses = ["busy", "ready", "ready"];

if (isEnabled) {
  for (let index = 0; index < responses.length; index += 1) {
    attempts += 1;

    if (responses[index] === "ready") {
      status = "connected";
      break;
    }
  }
} else {
  status = "disabled";
}

console.log(status, attempts);
```

Burada `D1`, `isEnabled`; `L1`, yanıt dolaşımı; `D2`, yanıtın `ready` olup olmadığıdır. Seçilen girdide `D1=true`, ilk turda `D2=false`, ikinci turda `D2=true` yolu izlenir. `attempts` sırasıyla 0, 1 ve 2 olur. İkinci turda `status` değeri `connected` olur ve `break`, `L1` döngüsünü bitirir. Üçüncü `ready` değeri hiç okunmaz. Son çıktı `connected 2` olur.

Bu izden birkaç önemli sonuç çıkar. Dizide bir `ready` bulunması yetmez; ona ulaşmadan önce dış kararın izin vermesi gerekir. İlk eşleşmede çıkıldığı için sonrasındaki veri sonucu değiştirmez. `attempts` yalnız sonuç değil, yürütülen tur sayısına dair gözlenebilir durumdur. Bir refactoring aynı `status` değerini üretip `attempts` değerini 3 yaparsa davranışın en az bir kısmını değiştirmiştir. Bu değişiklik kabul edilebilir olabilir, fakat “eşdeğer” diye gizlenemez.

Yol çıkarırken tek bir tablo kullanabilirsiniz:

| Adım | Konum | Karar/değer | Önceki durum | Sonraki durum | Sonraki hedef |
|---:|---|---|---|---|---|
| 1 | D1 | doğru | `waiting, 0` | aynı | L1 başlangıcı |
| 2 | L1 tur 1 | `index=0` | `waiting, 0` | `waiting, 1` | D2 |
| 3 | D2 | yanlış | `waiting, 1` | aynı | L1 güncelleme |
| 4 | L1 tur 2 | `index=1` | `waiting, 1` | `waiting, 2` | D2 |
| 5 | D2 | doğru | `waiting, 2` | `connected, 2` | L1 çıkışı |
| 6 | çıktı | — | `connected, 2` | aynı | program sonu |

Tablodaki “sonraki hedef” sütunu özellikle `break` ve `continue` hatalarını yakalar. Bir komutun yalnız ne yaptığını değil, denetimi nereye aktardığını gösterir.

### Karar ağacı ile karar tablosunun farklı rolleri

Karar ağacı, soruların sırasını ve bir soruya hangi önceki sonuç üzerinden ulaşıldığını gösterir. Karar tablosu ise önemli girdi sınıfları ile beklenen sonuçları sıkıştırılmış biçimde karşılaştırır. Aynı problemde ikisi birlikte kullanılabilir.

Bir teslimat kararı düşünün: adres doğrulanmış olmalı, bölge desteklenmeli ve paket ağırlık sınırında olmalıdır. Ağaç önce adresi, sonra bölgeyi, sonra ağırlığı kontrol edebilir. Tablo ise “adres geçersizse diğerleri herhangi”, “adres geçerli fakat bölge desteklenmiyorsa ağırlık herhangi”, “ilk ikisi doğru ve ağırlık fazla”, “hepsi uygun” satırlarını gösterir.

Karar sırası yalnız teknik tercih olmayabilir. Adres doğrulaması ucuz ve güvenli, bölge sorgusu pahalıysa ucuz ret kontrolünün önce yapılması kaynak kullanımını azaltır. Fakat iş gereksinimi bütün reddetme nedenlerini aynı anda kullanıcıya göstermekse ilk hatada erken çıkış uygun olmayabilir. Bu durumda bütün kontroller yapılır ve bir hata listesi biriktirilir. Aynı koşullar, farklı ürün sözleşmesi nedeniyle farklı kontrol akışı gerektirir.

Bu örnek guard clause kullanımının neden bağlama bağlı olduğunu açıklar. “Bir hata varsa hemen dön” genel bir yasa değildir. Hedef yalnız tek karar vermekse uygundur; bütün doğrulama sorunlarını toplamak gerekiyorsa erken dönüş gereksinimi karşılamaz. Tasarımdan önce gözlenebilir sözleşme sorulmalıdır.

### İç içe döngüde üç ayrı sayı

İç içe döngüleri analiz ederken öğrenciler çoğu zaman üç farklı sayıyı birbirine karıştırır:

1. Aday çift sayısı: dış ve iç değerlerin kaç birleşimi değerlendirildi?
2. Koşulun doğru olduğu çift sayısı: adayların kaçı filtreyi geçti?
3. Üretilen veya kaydedilen sonuç sayısı: geçen adayların kaçı gerçekten sonuca eklendi?

Şu programı inceleyin:

```js
let checked = 0;
let matched = 0;
const results = [];

for (let left = 1; left <= 3; left += 1) {
  for (let right = 1; right <= 4; right += 1) {
    checked += 1;

    if ((left + right) % 2 === 0) {
      matched += 1;

      if (results.length < 3) {
        results.push([left, right]);
      }
    }
  }
}
```

On iki aday değerlendirilir; `checked` 12 olur. Toplamı çift olan altı çift vardır; `matched` 6 olur. Sonuç listesi ilk üç eşleşmeyle sınırlandığı için uzunluğu 3'tür. Yalnız `results.length` değerine bakıp döngünün üç kez çalıştığını söylemek yanlıştır. Performans analizi için `checked`, iş kuralı analizi için `matched`, çıktı sözleşmesi için sonuç uzunluğu önemli olabilir.

Bu ayrım üretim sistemlerinde maliyeti anlamaya yardım eder. Bir arama yalnız ilk beş sonucu gösterse bile milyonlarca adayı tarıyorsa kullanıcı çıktısı küçük, hesaplama maliyeti büyük olabilir. C21-C23 bu konuyu algoritma analiziyle derinleştirecektir. Şimdilik programda “kaç kez?” sorusunun hangi olayı saydığını mutlaka adlandırın.

### Durum sızıntısı ve yanlış yaşam alanı

Bir değişkenin yaşam alanı gereğinden genişse önceki dış turun bilgisi sonraki tura sızabilir:

```js
let hasConflict = false;

for (let day = 1; day <= 2; day += 1) {
  for (let slot = 1; slot <= 2; slot += 1) {
    if (day === 1 && slot === 1) {
      hasConflict = true;
    }

    if (!hasConflict) {
      console.log("uygun", day, slot);
    }
  }
}
```

İlk adayda `hasConflict` doğru olur ve hiçbir yerde yeniden yanlış yapılmaz. Böylece sonraki bütün adaylar yanlışlıkla çakışmalı kabul edilir. Değişkenin anlamı “mevcut aday çakışıyor mu?” ise her yeni aday için `false` olarak başlamalıdır; dışarıda tutulması anlamıyla çelişir.

Kök neden yalnız “reset unutulmuş” değildir. Daha derin neden, durumun ait olduğu kapsamın yanlış seçilmesidir. Doğru yapı şöyledir:

```js
for (let day = 1; day <= 2; day += 1) {
  for (let slot = 1; slot <= 2; slot += 1) {
    let hasConflict = false;

    if (day === 1 && slot === 1) {
      hasConflict = true;
    }

    if (!hasConflict) {
      console.log("uygun", day, slot);
    }
  }
}
```

Şimdi her aday kendi çatışma değerlendirmesine sahiptir. Bu ders yalnız JavaScript `let` kapsamı değildir; modelleme ilkesidir: bir değer hangi karar birimine aitse mümkün olan en dar doğru alanda yaşamalıdır.

### Bayrakla çıkış ve doğrudan dönüş karşılaştırması

İki döngüden aynı anda çıkmak için başlangıç öğrencileri bir bayrak kullanabilir:

```js
let found = false;
let selected = null;

for (let day = 1; day <= 3 && !found; day += 1) {
  for (let slot = 1; slot <= 4; slot += 1) {
    if (day === 2 && slot === 3) {
      selected = `${day}-${slot}`;
      found = true;
      break;
    }
  }
}
```

Bu tasarımda `found` üç rol oynar: sonucun bulunup bulunmadığını bildirir, dış döngünün devam koşulunu etkiler ve iç `break` sonrasında dış akışa bilgi taşır. Kod doğrudur, fakat `selected !== null` zaten aynı bilgiyi temsil ediyorsa ikinci bir bayrak iki değerin tutarsızlaşması riskini yaratır.

Aramayı bir fonksiyon içinde yapmak ve bulunca `return` kullanmak bazı durumlarda daha doğrudandır. Fakat fonksiyon tasarımı henüz C13'ün konusudur. Şimdilik seçim ölçütünü öğrenin: bayrak kullanıyorsanız tek bir anlamı olsun, her güncelleme noktası açık olsun ve bayrakla temsil ettiği diğer durumun çelişemeyeceğini test edin. Doğrudan dönüş kullanıyorsanız fonksiyondan çıkmanın atladığı zorunlu işlem olmadığını doğrulayın.

### Koşulların yan etkili olması neden risktir?

Bir koşul yalnız soru cevaplamak yerine durum değiştiriyorsa sadeleştirme zorlaşır:

```js
let checks = 0;

function hasCapacity(capacity) {
  checks += 1;
  return capacity > 0;
}
```

`isActive && hasCapacity(capacity)` ifadesinde etkinlik pasifse `hasCapacity` çağrılmaz ve `checks` artmaz. Koşul sırası değiştirilirse sayaç davranışı değişir. Sayaç yalnız debug amaçlı olsa bile gözlenebilir bir yan etkidir; gerçek sistemde çağrı ağ isteği, dosya erişimi veya audit kaydı olabilir.

Başlangıç seviyesinde güvenli tercih, koşul yordamlarının mümkün olduğunca yalnız değer hesaplamasıdır. Yan etki gerekiyorsa önce açık bir adımda yapılmalı veya sırası belgelenmelidir. “Boolean ifadeler matematikte değişmeli görünüyor” diye program ifadelerinin sırasını değiştirmek güvenli değildir; program değerlendirmesi zaman ve etki taşır.

### Eşdeğerlik için dört katmanlı kontrol

İki sürümün aynı olduğunu savunurken dört katmanı ayrı inceleyin:

1. **Sonuç eşdeğerliği:** Aynı girdi sınıfında aynı dönüş veya çıktı var mı?
2. **Durum eşdeğerliği:** Değişkenler, kayıtlar veya dış sistem üzerindeki gerekli değişiklikler aynı mı?
3. **Sıra eşdeğerliği:** Etkilerin sırası gereksinim açısından korunuyor mu?
4. **Hata eşdeğerliği:** Geçersiz girdide aynı kontrollü hata veya reddetme davranışı var mı?

Her refactoring bu dört katmanda tamamen aynı olmak zorunda değildir; performans amacıyla gereksiz bir çağrı bilinçli kaldırılabilir. Ancak değişiklik belirtilmeli, gereksinimle uyumlu olmalı ve testte görünmelidir. Farkında olmadan oluşan ayrım, refactoring hatasıdır.

Bir kod incelemesinde “testler geçiyor” cümlesi de sınırlandırılmalıdır. Hangi testler? Hangi yollar? Yan etkiler doğrulanıyor mu? Hata yolları var mı? Test kümesi zayıfsa geçmesi davranış eşdeğerliğini kanıtlamaz. Bu nedenle önce yol tablosu, sonra o tabloyu temsil eden testler gerekir.

### İç içe akış için hata ayıklama protokolü

Bir program beklenmeyen sonuç verdiğinde rastgele `console.log` eklemek bazı ipuçları sağlar, fakat sistematik olmazsa daha fazla gürültü üretir. İç içe akışta şu protokolü kullanın:

1. Beklenen sonucu tek cümleyle yazın.
2. Hatayı üreten en küçük girdiyi sabitleyin.
3. Dış yapı girişinde girdileri ve başlangıç durumunu gözleyin.
4. Her karar için koşulun kendisini değil, adını ve sonucunu kaydedin.
5. Her döngüde dış/ iç tur numaralarını birlikte yazın.
6. Değişen durumun önceki ve sonraki değerini kaydedin.
7. `break`, `continue` veya `return` öncesinde çıkış nedenini yazın.
8. Gerçek izi beklenen yol tablosuyla ilk ayrıştığı noktada durdurun.

Örnek gözlem biçimi şöyledir:

```js
console.log({
  dayIndex,
  slotIndex,
  candidateDay,
  candidateSlot,
  hasConflict,
});
```

Nesne biçimi, beş ayrı belirsiz sayı yazdırmaktan daha okunabilirdir. Gerçek üretim sisteminde hassas veri günlüğe yazılmamalı ve yapılandırılmış gözlemlenebilirlik kuralları kullanılmalıdır; bu örnek yerel öğrenme ortamı içindir.

İlk ayrışma yaklaşımı önemlidir. Son yanlış değere bakmak, hatanın üretildiği yer ile fark edildiği yeri karıştırabilir. Örneğin `hasConflict` önceki dış turdan sızmışsa yanlış sonuç en sonda görülür, fakat ilk hatalı durum yeni aday başlarken değerinin hâlâ `true` olmasıdır. Kök neden bu ilk ayrışmadır.

Hata ayıklarken aynı anda birden fazla değişiklik yapmayın. Önce gözlem ekleyin ve varsayımı doğrulayın. Sonra en küçük düzeltmeyi yapın. Testi tekrar çalıştırın. Ardından geçici günlükleri kaldırın veya kalıcı ve güvenli ölçümlere dönüştürün. Çalışan ama neden çalıştığı bilinmeyen kod, tamamlanmış çözüm değildir.

### Kod incelemesinde sorulacak sorular

Profesyonel kod incelemesinde biçimsel tercihten önce davranış soruları gelir:

- Dış koşul iç kontrole erişimi doğru sınırlıyor mu?
- Kuralların önceliği gereksinimle aynı mı?
- Her `else` dalının sahibi açık mı?
- İç döngü durumu her dış turda doğru başlıyor mu?
- Sıfır ve bir tur vakaları işlendi mi?
- `break` veya `continue` hedefi okuyucu için belli mi?
- Erken çıkış gerekli kayıt veya temizliği atlıyor mu?
- Aynı gerçeği temsil eden iki bayrak çelişebilir mi?
- Sadeleştirme değerlendirme sırasını değiştirdi mi?
- Testler yalnız başarılı yolu mu kapsıyor?
- Uygulanamaz yol yanlışlıkla zorlanıyor mu?
- Kodun alan dilindeki amacı adlardan anlaşılabiliyor mu?

İncelemeci “bunu fonksiyona böl” gibi bağlamsız emir vermek yerine gözlediği riski belirtmelidir: “Bu iç blokta `isActive` ve `hasCapacity` varsayımlarını aynı anda taşımak gerekiyor; çakışma yolu için test göremiyorum.” Böyle bir yorum yazara problem ve kabul ölçütü verir. Çözüm adlandırılmış koşul, guard, fonksiyona ayırma veya karar tablosu olabilir; tek bir stil zorunluluğuna dönüşmez.

### Gereksinim belirsizliği ile kod karmaşıklığını ayırmak

Bazen kodun derinliği kötü programlama değil, cevaplanmamış ürün sorularının sonucudur. Bir kullanıcı hem öncelikli hem cezalıysa hangi kural önce gelir? Kapasite son anda düşerse mevcut rezervasyon korunur mu? Bir zaman diliminde iki farklı kaynak varsa çakışma kaynak bazında mı, genel mi değerlendirilir? Bu sorular net değilse hiçbir refactoring doğru davranışı garanti edemez.

Belirsizliği çözmek için örnek tabanlı konuşun. Ürün sahibine bütün kodu değil, küçük karar tablosunu gösterin. Her satırda somut girdi ve beklenen sonuç olsun. Çelişen satırlar bulunduğunda önce kural kararı kaydedilir, sonra kod değiştirilir. Böylece yazılım mühendisi yalnız verilen sözdizimini düzenlemez; problem tanımını test edilebilir hâle getirir.

Bu yaklaşım AI ile çalışırken de gereklidir. Belirsiz gereksinimi modele verirseniz model çoğu zaman makul görünen bir öncelik uydurur. Uydurulan davranış teknik olarak çalışan fakat iş açısından yanlış bir sistem oluşturabilir. AI'ın eksik bilgiyi açık soru olarak döndürmesini isteyin ve ürün kararını yetkili insanla doğrulayın.

### Öğrenmeyi kalıcı hâle getiren çalışma biçimi

Bu chapter'ı yalnız okuyarak bitirmeyin. Her ana örnek için üç aşamalı kayıt tutun: tahmin, iz, açıklama. Tahmin aşamasında kodu çalıştırmadan çıktı ve yol yazılır. İz aşamasında gerçek çalışma adım adım kaydedilir. Açıklama aşamasında farkın hangi yanlış zihinsel modelden kaynaklandığı belirtilir.

Ertesi gün boş bir sayfaya şu dört şekli çizin: iki katmanlı karar ağacı, iki döngülü koordinat tablosu, guard clause ile düzleştirilmiş akış ve önce/sonra davranış tablosu. Her şeklin altına neyi gösterdiğini ve neyi göstermediğini yazın. Örneğin karar ağacı yol sırasını gösterir fakat döngüdeki bütün ara değerleri tek başına göstermez.

Bir hafta sonra başlangıç kodlarından birini yeniden yazmayın; sıfırdan benzer bir problem kurun. Örneğin gün-zaman yerine depo-ürün, öğrenci-sınav veya satır-sütun kullanın. Yeni alana aktarım yapabiliyorsanız kavramı yalnız örneğe bağlı ezberlememişsiniz demektir. Son olarak kendi kodunuzu AI'a inceletin, fakat öneriyi yol tablosu ve test kanıtıyla denetleyin.

Öğrenme günlüğünüzde yalnız doğru çözümleri saklamayın. Yanlış tahmininizi, gerçek izi ve düzeltilmiş zihinsel modeli yan yana tutun. “`break` bütün döngülerden çıkar sanıyordum; aslında en yakın döngüyü bitiriyor” gibi bir kayıt, gelecekte aynı hata sinyalini daha erken tanımanızı sağlar. Hata geçmişi başarısızlık listesi değil, kişisel test kataloğunuzdur.

Kendinizi değerlendirmek için örneğin değişken adlarını veya sayıları değiştirmek yeterli değildir. Yapı bakımından yeni bir vaka seçin: sabit iç sınırı değişken sınıra dönüştürün, ilk eşleşme yerine bütün eşleşmeleri isteyin veya ilk hatada dönmek yerine bütün hataları biriktirin. Bu değişiklikler kontrol akışı sözleşmesini dönüştürür ve gerçekten anlayıp anlamadığınızı gösterir.

Son ölçüt açıklanabilirliktir. Kodu ekrana bakmadan tamamen ezberden yazmanız gerekmez. Ancak seçtiğiniz yapının neden uygun olduğunu, hangi yolları oluşturduğunu, hangi sınırları test ettiğinizi ve alternatif tasarımın hangi ödünleşimi getirdiğini başka bir öğrenciye anlatabilmelisiniz. Açıklayamadığınız bir AI önerisi veya kopyalanmış çözüm henüz size ait bir mühendislik yetkinliği değildir.

Çalışma oturumunu bitirirken tek bir “bugün ne okudum?” cümlesi yerine üç kanıt kaydedin: kendi başınıza çıkardığınız bir yol tablosu, düzelttiğiniz bir yanlış varsayım ve davranışı koruduğunu testlerle gösterdiğiniz bir dönüşüm. Bu üçlü; bilgi, hata ayıklama ve tasarım becerisini birlikte ölçer. Ertesi oturumda ilk iş olarak bu kanıtlardan birini notlara bakmadan yeniden üretin. Yeniden üretilemiyorsa bölümü baştan okumayın; yalnız unutulan kavramı bulun, küçük bir örnek çalıştırın ve ardından tekrar geri çağırın. Böylece süreyi pasif okumaya değil, eksik zihinsel bağlantıyı güçlendirmeye harcarsınız.

Bir ekip arkadaşınızdan yalnız sonucu değil, izleme yaklaşımınızı incelemesini isteyin. Arkadaşınızın aynı tabloyu kullanarak aynı sonuca ulaşıp ulaşamadığını gözlemleyin. Kanıt başka biri tarafından tekrar üretilemiyorsa eksik varsayım, belirsiz ad veya kaydedilmemiş durum değişimi vardır. Profesyonel dokümantasyonun amacı yalnız yazarı ikna etmek değil, bağımsız okuyucunun kararı yeniden doğrulayabilmesini sağlamaktır.

## Engineering Perspective

### Karmaşıklık neden yalnız satır sayısı değildir?

On satırlık kod zor, otuz satırlık kod kolay olabilir. Okuma zorluğunu belirleyen etkenlerden biri, bir satırın anlamını çözmek için kaç önceki kararı zihinde tutmanız gerektiğidir. Dördüncü seviyedeki bir iç blokta okuyucu “kullanıcı etkin, plan kurumsal, ödeme onaylı ve kota dolmamış” bağlamını taşır. Bu bağlamlardan biri unutulduğunda iç eylem yanlış yorumlanır.

Kontrol akışı karmaşıklığı; karar sayısını, kararların etkileşimini, iç içelik derinliğini, erken çıkışları, döngü sınırlarını ve durum değişikliklerini birlikte düşünür. Çevrimsel karmaşıklık gibi ölçüler bağımsız yol yapısına dair sinyal verir. Bilişsel yaklaşımlar iç içeliğin insan üzerindeki yükünü vurgular. Hiçbiri tek başına “bu kod iyidir” veya “bu kod hatalıdır” diyemez. Alan kuralı, ekip deneyimi, test kanıtı ve değişim sıklığı değerlendirmeye dâhildir.

Bir metrik yüksekse otomatik olarak kodu bölmek de doğru değildir. Çok kurallı ama istikrarlı bir doğrulama tablosu açık biçimde yazılmış ve güçlü testlerle korunmuş olabilir. Buna karşılık düşük sayısal karmaşıklığa sahip tek bir uzun boolean ifade, isimlendirilmemiş iş kuralları nedeniyle okunamaz olabilir. Metrik, incelemeye nereden başlanacağını söyler; kararın yerine geçmez.

### Yol tablosu bir iletişim aracıdır

Yol tablosu yalnız öğrenci alıştırması değildir. Gereksinim analizi, test tasarımı, hata raporu ve kod incelemesi arasında ortak dil sağlar. Örnek bir zamanlayıcı için tablo şöyle olabilir:

| Etkin mi? | Kapasite var mı? | Çakışma var mı? | Beklenen sonuç |
|---|---|---|---|
| hayır | herhangi | herhangi | `inactive` |
| evet | hayır | herhangi | `full` |
| evet | evet | evet | `conflict` |
| evet | evet | hayır | `scheduled` |

“Herhangi” ifadesi, önceki karar sonucu belirlediği için sonraki değerin gözlenebilir sonucu değiştirmediğini gösterir. Testte yine uygun temsilci değer seçilir, fakat bütün kombinasyonların ayrı davranış olmadığını görürüz. Bu tablo ürün sahibine de gösterilebilir; böylece kural önceliği kod yazılmadan tartışılır.

### Adlandırılmış koşullar

Uzun bir boolean ifadeyi anlamlı parçalara ayırmak, yeni davranış eklemeden niyeti görünür kılar:

```js
const hasValidCapacity = capacity > 0 && reserved < capacity;
const hasScheduleConflict = existingDay === requestedDay
  && existingSlot === requestedSlot;
const canSchedule = isActive && hasValidCapacity && !hasScheduleConflict;
```

`canSchedule` sonucu okumayı kolaylaştırır; ara adlar hata ayıklama sırasında ayrı gözlenebilir. Fakat ad, ifadenin gerçek anlamını doğru yansıtmalıdır. `isValid` gibi genel bir isim hangi kuralın geçerli olduğunu söylemez. Ayrıca ara değerler zaman içinde durum değişiyorsa eski kalabilir. Bu örnekte girdiler karar sırasında değişmez varsayılmıştır.

### Koruma koşulları ve ana yol

Derin iç içe kodda sınır vakalarını önce ele almak ana yolu açabilir:

```js
function getScheduleResult(isActive, capacity, conflictCount) {
  if (!isActive) {
    return "inactive";
  }

  if (capacity <= 0) {
    return "full";
  }

  if (conflictCount > 0) {
    return "conflict";
  }

  return "scheduled";
}
```

Buradaki `return`, fonksiyonun kalanını sonlandırır. Fonksiyon sözleşmeleri C13'te ayrıntılı öğretilecektir; bu örneğin amacı erken çıkışın iç içeliği nasıl azalttığını göstermektir. Her koruma koşulu tek bir reddetme nedenini adlandırır. Son satır ana başarılı yolu temsil eder.

Koruma koşulu her zaman üstün değildir. Fonksiyon sonunda zorunlu kaynak temizliği varsa, birçok farklı yerden çıkmak bu adımı atlama riski doğurabilir. Modern dil yapıları bu soruna araçlar sunar, fakat bu chapter'ın kapsamı dışındadır. Başlangıç ilkesi: erken çıkış sınır vakasını açıkça ayırıyor ve zorunlu son işlemleri atlamıyorsa değerlidir.

### Davranış koruyan dönüşüm

Davranış koruyan dönüşüm, kodun iç yapısını değiştirirken kullanıcı veya başka kod tarafından gözlenebilen gerekli davranışı aynı tutar. Bunun için önce mevcut davranış bilinmelidir. Belgesiz eski kodda karakterizasyon testi (Characterization Test), sistemin şu anda ne yaptığını kaydeder. Bu test mevcut davranışın ideal olduğunu söylemez; dönüşüm sırasında istemeden değişmesini önler.

Güvenli süreç şöyledir:

1. Anlamlı yolları ve sınırları listele.
2. Her yol için mevcut sonucu ve gerekli yan etkileri kaydet.
3. Bu davranışları testlerle sabitle.
4. Tek ve küçük bir dönüşüm yap.
5. Testleri çalıştır.
6. Yol tablosunu yeni kodla tekrar izle.
7. Değişim bilinçliyse gereksinim ve testi birlikte güncelle; bilinçsizse dönüşümü geri al.

Bir defada bütün fonksiyonu yeniden yazmak, hangi değişikliğin davranışı bozduğunu bulmayı zorlaştırır. Profesyonel refactoring küçük, geri alınabilir ve sürekli doğrulanan adımlarla yapılır.

### Test kapsamı ve yol seçimi

Her olası girdi değerini sınamak çoğu programda imkânsızdır. Bunun yerine farklı davranış sınıflarını temsil eden vakalar seçilir. Zamanlayıcıda etkin olmayan, kapasitesiz, çakışmalı ve başarılı yollar ayrı davranışlardır. Kapasite için `-1`, `0`, `1` değerleri geçersiz/sınır/geçerli ayrımını gösterebilir. Döngü için sıfır, bir ve çok tur vakaları önemlidir.

Yol kapsamı da tek başına kusursuzluk sağlamaz. Aynı yolu izleyen iki farklı veri değeri farklı aritmetik hata üretebilir. Tersine bütün teorik yol birleşimlerini sınamaya çalışmak uygulanamaz koşullar yüzünden gereksiz olabilir. İyi test planı yol, sınır, veri sınıfı ve iş riskini birlikte değerlendirir.

### Yapay zekâ ile çalışma

Yapay zekâdan “bu kodu sadeleştir” istemek hızlı sonuç verir, fakat doğruluk sorumluluğu geliştiricidedir. Daha güçlü bir istem şu bilgileri talep eder: mevcut yol listesi, her dönüşümün ön koşulu, önce/sonra davranış tablosu, kaybolabilecek yan etkiler, sınır testleri ve emin olunmayan varsayımlar. Cevabı aldıktan sonra kodu doğrudan kabul etmeyin.

Denetim sırası:

1. AI'ın çıkardığı yolları kendi tablonuzla karşılaştırın.
2. Atladığı `else`, `break`, `continue` veya durum güncellemesi var mı bakın.
3. Koşul sırası değiştiyse kısa devre ve yan etkileri inceleyin.
4. Testleri AI'dan bağımsız olarak çalıştırın.
5. En az bir geçersiz ve bir sınır vakası ekleyin.
6. Yeni kodu kendi kelimelerinizle açıklayamıyorsanız birleştirmeyin.

Bu yaklaşım AI'ı reddetmez; onu taslak üreten, alternatif gösteren ve inceleme soruları sağlayan yardımcı konumuna yerleştirir.

## Real World Examples

### Randevu zamanlayıcı

Bir klinikte üç gün ve her gün dört zaman dilimi olsun. Öğrenci ilk boş zamanı arıyor:

```js
const unavailable = new Set(["1-1", "1-2", "2-1"]);
let selected = null;

for (let day = 1; day <= 3; day += 1) {
  for (let slot = 1; slot <= 4; slot += 1) {
    const key = `${day}-${slot}`;

    if (!unavailable.has(key)) {
      selected = key;
      break;
    }
  }

  if (selected !== null) {
    break;
  }
}

console.log(selected); // 1-3
```

İç `break` yalnız slot döngüsünü bitirdiği için dış döngüde ikinci bir kontrol gerekir. Bu kod çalışır fakat iki çıkış noktası arasındaki ilişki açıklanmalıdır. Alternatif tasarım C13'te fonksiyona ayırma ile daha açık hâle getirilebilir. Şimdilik iz tablosu kullanın: gün, slot, uygun mu, `selected`, iç çıkış, dış çıkış.

### Yetki ve kaynak durumu

Bir kullanıcı ancak hesabı etkin, rolü uygun ve kaynak kilitli değilse düzenleme yapabilsin. İç içe sürüm iş kuralının önceliğini gösterir; guard sürümü reddetme nedenlerini erken döndürür. Burada güvenlik açısından önemli nokta “varsayılan izin” değil, koşullar sağlanmadığında açık reddetmedir. Ancak gerçek yetkilendirme sistemleri daha kapsamlı güvenlik modelleri gerektirir; örnek yalnız kontrol akışını açıklar.

### Tablo ve koordinat dolaşımı

Bir sınıfın üç öğrencisi ve her öğrenci için dört notu varsa iki boyutlu yapı doğal olarak iç içe dolaşılır. Dış tur öğrenci, iç tur not boyutudur. Toplam on iki not işlenir. Fakat her öğrencinin not sayısı farklıysa iç sınır değişkendir; toplam, her öğrenciye ait not sayılarının toplamıdır. Bu ayrım performans tahmini ve boş veri sınaması için önemlidir.

### Ürün kombinasyonları

Üç tişört rengi ve dört beden bütün kombinasyonlarda sunulacaksa on iki varyant vardır. İç içe döngü problemi doğrudan temsil eder. Bazı renk-beden çiftleri üretilemiyorsa iç koşul bu çiftleri filtreler. Üretilen kombinasyon sayısı artık yalnız `3 × 4` değildir; on iki aday değerlendirilir fakat daha az çıktı oluşabilir. “Döngü gövdesi kaç kez değerlendirildi?” ile “kaç sonuç üretildi?” ayrılmalıdır.

### Çok kurallı indirim

Üyelik, sepet tutarı, kampanya kodu ve ürün kategorisi birleştiğinde karar ağacı hızla büyür. Burada önce kural önceliği karar tablosuna taşınmalıdır. İki kampanya birlikte uygulanabilir mi? Üye indirimi kampanya kodundan önce mi sonra mı hesaplanır? Geçersiz kod tüm indirimi mi iptal eder? Kod yazmadan bu sorulara cevap verilmezse iç içelik asıl problem değil, belirsiz gereksinimin belirtisidir.

### Oyun tahtası

Sekiz satır ve sekiz sütunluk bir tahtayı dolaşmak 64 koordinat üretir. Belirli bir taşı bulduğumuzda iç `break` yalnız sütun aramasını bitirir; dış satır döngüsü devam edebilir ve ikinci eşleşme bulunabilir. “İlk eşleşme yeterli” sözleşmesi varsa bütün aramayı bitiren açık bir tasarım gerekir. Bu küçük örnek, çıkış kapsamının iş gereksinimiyle birlikte seçilmesi gerektiğini gösterir.

### Üretim kodunda hata araştırması

Bir hata yalnız kurumsal müşteri, hafta sonu, kapasite sınırı ve yeniden deneme turu birleştiğinde oluşabilir. Tek tek kuralları sınamak hatayı yakalamaz. Mühendis hata raporundan bu birleşimi çıkarır, yürütme yolunu günlüklerle doğrular, en küçük tekrar üretimini yazar ve düzeltme sonrası regresyon testi bırakır. İç içe akış bilgisi burada doğrudan hata ayıklama yeteneğine dönüşür.

## Common Mistakes

### Girintiyi yürütme kanıtı sanmak

Girinti okuyucuya yardım eder, fakat program davranışını parantezler ve sözdizimi belirler. Özellikle parantezsiz `if` yapılarında görsel hizalama yanlış `else` sahipliği düşündürebilir. Çözüm, süslü parantez kullanmak ve yol tablosu çıkarmaktır.

### İç koşulun her zaman değerlendirildiğini düşünmek

Dış koşul yanlışsa iç bloğa girilmez. Koşul içinde fonksiyon çağrısı veya sayaç artırma gibi yan etki varsa bu fark büyür. Koşulları saf ve niyet odaklı tutmak izlemeyi kolaylaştırır; yan etki zorunluysa değerlendirme sırası açıkça sınanmalıdır.

### İç sayacı yeniden başlatmamak

İç sayaç dışarıda tanımlandığında ilk dış turdan sonra sınırı aşabilir. Sonraki dış turlarda iç döngü sıfır kez çalışır. Belirti eksik kombinasyonlardır. Kök neden iç yineleme durumunun yanlış yaşam alanıdır. Çözüm, iç sayacı iç döngünün başlatma bölümünde oluşturmaktır.

### Çarpım ile toplamı karıştırmak

Sabit iki boyutta `m × n` aday üretilir. İç sınır dış tura bağlıysa her turun sayısı toplanır. Ayrıca filtrelenen çıktı sayısı, gövde değerlendirme sayısından farklı olabilir. Önce neyi saydığınızı yazın: koşul değerlendirmesi, iç gövde çalışması veya üretilen sonuç.

### `break` komutunu bütün döngülerden çıkış sanmak

Etiketsiz `break` en yakın döngüyü sonlandırır. Dış döngü devam eder. Belirti gereksiz sonraki aramalar veya birden fazla sonuçtur. Çözüm, iş gereksinimini adlandırmak, çıkış kapsamını işaretlemek ve gerekirse durum bayrağı veya sonraki chapter'da fonksiyon dönüşü kullanmaktır.

### `continue` ile güncellemeyi atlamak

`while` gövdesinde sayaç güncellemesi `continue` sonrasında kalıyorsa belirli vakada sonsuz döngü oluşabilir. Güncellemeyi güvenli konuma taşımak veya uygun `for` yapısını seçmek gerekir. Düzeltmeden önce sıfır, ilk eşleşme ve bütün eşleşmeler vakalarını izleyin.

### Yalnız başarılı yolu test etmek

Başarılı zamanlama çalışırken etkin olmayan veya kapasite sıfır vaka yanlış sonuç verebilir. Her sonuç sınıfı için en az bir temsilci test ve kritik sınırlar gerekir. Hata üretmiş yol ayrıca regresyon testi olmalıdır.

### Uygulanamaz yolu gerçek test saymak

Bir kullanıcı aynı modelde hem `age >= 18` hem `age < 13` olamaz. Test tablosunda bu birleşimi zorla üretmeye çalışmak veri modelini bozabilir. Önce koşullar arası kısıtları belirleyin ve uygulanabilir yolları işaretleyin.

### Düzleştirirken yan etki kaybetmek

Dış blokta log, puan artırma veya durum güncelleme varsa iki `if` yapısını yalnız `&&` ile birleştirmek bu davranışı düşürebilir. Önce her yoldaki bütün gözlenebilir işlemleri listeleyin. Test yalnız dönüş değerini değil, gerekli durum değişimini de denetlemelidir.

### Koşul sırasını önemsiz sanmak

`isReady && expensiveCheck()` ile `expensiveCheck() && isReady` doğruluk bakımından bazı girdilerde aynı görünse de ikinci sürüm pahalı veya hata üretebilen kontrolü gereksiz çalıştırabilir. Kısa devre sırası performans ve güvenlik açısından anlamlı olabilir.

### Her erken çıkışı iyi tasarım saymak

On farklı `return`, ana yolu açmak yerine davranışı parçalayabilir. Çıkışlar tek amaçlı, yakın ve açık olduğunda yararlıdır. Zorunlu temizleme, ölçüm veya audit işlemleri varsa tüm çıkışların bu yükümlülüğü yerine getirdiği kanıtlanmalıdır.

### Metrik peşinde davranışı bozmak

Bir karmaşıklık puanını düşürmek için kodu yapay parçalara ayırmak anlamı dağıtabilir. Metrik değişimi değil, okuma, test, bakım ve hata riski hedeflenmelidir. Önce somut problem tanımlanır; dönüşümün bu problemi çözdüğü kanıtlanır.

## Best Practices

### Önce yolu yaz, sonra kodu değiştir

Her önemli girdi sınıfı için dış koşul, iç koşul, döngü turu, durum değişimi ve sonucu tabloya koyun. Bu tablo dönüşüm sözleşmenizdir. Kod değiştikten sonra aynı satırları yeniden doğrulayın.

### Ana yolu görünür tut

Geçersiz, bitmiş veya ilgisiz vakaları erken ve açık ele almak ana başarılı davranışı sola yaklaştırabilir. Ancak erken çıkışın hangi kapsamı bitirdiği ve hangi zorunlu işlemlerin yine yapılacağı açık olmalıdır.

### Niyeti adlandır

`x > 0 && y < z && !blocked` yerine alan diline uygun `hasCapacity` ve `canSchedule` gibi adlar kullanın. Adlar gereksinimi yansıtmalı, “valid” gibi belirsiz sözcüklere yaslanmamalıdır.

### Durumu en dar doğru alanda tut

İç döngü sayacı iç döngüde; yalnız bir yolun geçici değeri o yola yakın; ortak sonuç bütün ilgili yolların erişebildiği alanda bulunmalıdır. Çok geniş durum alanı eski değerin sonraki tura sızma riskini artırır.

### Çıkış komutunu iş gereksinimiyle eşleştir

`continue` mevcut adayı atlar, `break` mevcut döngüyü bitirir, `return` mevcut fonksiyonu bitirir. “Nereden çıkmak istiyorum?” sorusunu cevaplamadan komut seçmeyin.

### Sınır sınıflarını zorunlu kıl

Döngüde sıfır, bir ve çok tur; kapasitede negatif, sıfır ve pozitif; karar akışında reddedilen, kabul edilen ve çakışan vakalar sınanmalıdır. Her kural için “ilk yanlış değer” ve “ilk doğru değer” düşünün.

### Küçük dönüşüm ve hızlı geri bildirim kullan

Bir koşulu adlandırın, test edin. Bir guard çıkarın, test edin. Bir ortak davranışı taşıyın, test edin. Küçük adımlar hata kaynağını daraltır ve geri dönüşü kolaylaştırır.

### Yorumla değil yapıyla açıkla

Yorum karmaşık kodu tercüme etmek zorunda kalıyorsa adlandırma veya yapı iyileştirilebilir. Yorum “neden bu öncelik seçildi?” gibi koddan çıkarılamayan kararı açıklamalıdır. “Bu if koşulu kontrol eder” türü yorum bilgi eklemez.

### Ölçümü bağlamla yorumla

Karmaşıklık aracı bir bölgeyi işaretlediğinde değişim sıklığına, hata geçmişine, test kapsamına ve alan önemine bakın. Kritik ödeme kuralı ile tek kullanımlık dönüştürme betiği aynı risk profiline sahip değildir.

### AI önerisini kanıt isteyerek değerlendir

AI'dan yalnız yeni kod değil; yol listesi, varsayımlar, eşdeğerlik gerekçesi, testler ve bilmediği noktaları isteyin. Kendi izlemenizle uyuşmayan cevapta modeli değil kanıtı esas alın.

## Hands-on Exercise

### Senaryo: Çok kurallı zamanlayıcıyı sadeleştirme

Bir eğitim merkezinde oturum planlanacaktır. Kural sırası şöyledir:

1. Etkinlik aktif değilse planlama yapılmaz.
2. Kapasite sıfır veya negatifse planlama yapılmaz.
3. İstenen gün ve zaman mevcut kayıtla çakışıyorsa planlama yapılmaz.
4. Uygun gün-zaman çiftlerinden ilk bulunan seçilir.
5. Hiç uygun çift yoksa `no-slot` sonucu üretilir.

Başlangıç kodu bilinçli olarak derin ve kısmen sorunludur:

```js
function findSchedule(event, days, slots, reservations) {
  let result = "no-slot";

  if (event.isActive) {
    if (event.capacity > 0) {
      for (let dayIndex = 0; dayIndex < days.length; dayIndex += 1) {
        for (let slotIndex = 0; slotIndex < slots.length; slotIndex += 1) {
          let hasConflict = false;

          for (
            let reservationIndex = 0;
            reservationIndex < reservations.length;
            reservationIndex += 1
          ) {
            const reservation = reservations[reservationIndex];

            if (
              reservation.day === days[dayIndex]
              && reservation.slot === slots[slotIndex]
            ) {
              hasConflict = true;
            }
          }

          if (!hasConflict) {
            result = `${days[dayIndex]}-${slots[slotIndex]}`;
          }
        }
      }
    } else {
      result = "full";
    }
  } else {
    result = "inactive";
  }

  return result;
}
```

Kod ilk uygun çifti değil, son uygun çifti seçmektedir. Çakışma bulunduğunda rezervasyon taramasını gereksiz sürdürür. Ayrıca gün ve zaman dolaşması, uygun sonuç bulunduktan sonra da devam eder.

### Görev 1: Yol ve durum analizi

Aşağıdaki vakalar için yol tablosu hazırlayın:

- etkinlik pasif;
- etkin, kapasite 0;
- etkin, kapasite 10, gün veya zaman listesi boş;
- ilk çift uygun;
- ilk çift çakışmalı, ikinci çift uygun;
- bütün çiftler çakışmalı.

Her satırda `result` başlangıcı, girilen dallar, döngü tur sayıları, `hasConflict` değişimleri ve son sonuç bulunmalıdır. Kod çalıştırılmadan önce tahmin yazılmalıdır.

### Görev 2: Karakterizasyon testleri

Mevcut davranışı kaydeden en az altı test yazın. Hatalı “son uygun çifti seçme” davranışını da bir test görünür kılsın. Ardından gereksinime göre bu testin beklenen sonucunu bilinçli olarak değiştirin. Böylece refactoring ile hata düzeltme arasındaki fark kaydedilir.

Basit doğrulama yardımcısı kullanabilirsiniz:

```js
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: ${actual} !== ${expected}`);
  }
}
```

### Görev 3: Koruma koşulları

Pasif etkinlik ve geçersiz kapasiteyi fonksiyonun başında açık sonuçlarla ele alın. Bu iki guard sonrasında ana arama yolunun daha az iç içe kaldığını gösterin. `days` veya `slots` boş olduğunda doğal olarak `no-slot` sonucunun korunup korunmadığını test edin.

### Görev 4: Çakışma koşulunu adlandırma

Rezervasyonun aday gün-zamanla çakışmasını anlatan bir koşul oluşturun. C13 fonksiyon tasarımını ayrıntılandıracağı için burada yardımcı fonksiyon zorunlu değildir; anlamlı yerel boolean yeterlidir. Hangi değerlerin karşılaştırıldığını açıklayın.

### Görev 5: Çıkış kapsamı

Çakışma bulunduğunda yalnız rezervasyon döngüsünden çıkın. Uygun aday bulunduğunda bütün aramayı nasıl durduracağınızı açıkça tasarlayın. Bir durum bayrağı kullanırsanız başlangıç, güncelleme ve kontrol yerini iz tablosuyla gösterin. `return` kullanırsanız fonksiyonun hangi sonucu hemen döndürdüğünü ve sonraki kodun neden çalışmadığını açıklayın.

Örnek hedef biçimlerden biri şöyledir:

```js
function findSchedule(event, days, slots, reservations) {
  if (!event.isActive) {
    return "inactive";
  }

  if (event.capacity <= 0) {
    return "full";
  }

  for (let dayIndex = 0; dayIndex < days.length; dayIndex += 1) {
    for (let slotIndex = 0; slotIndex < slots.length; slotIndex += 1) {
      const candidateDay = days[dayIndex];
      const candidateSlot = slots[slotIndex];
      let hasConflict = false;

      for (
        let reservationIndex = 0;
        reservationIndex < reservations.length;
        reservationIndex += 1
      ) {
        const reservation = reservations[reservationIndex];
        const matchesCandidate = reservation.day === candidateDay
          && reservation.slot === candidateSlot;

        if (matchesCandidate) {
          hasConflict = true;
          break;
        }
      }

      if (!hasConflict) {
        return `${candidateDay}-${candidateSlot}`;
      }
    }
  }

  return "no-slot";
}
```

Bu çözümü kopyalamadan önce kendi tasarımınızı üretin. Sonra iki sürümü yol sayısı, durum değişkeni, çıkış kapsamı ve okunabilirlik bakımından karşılaştırın.

### Görev 6: Doğrulama

En az şu testleri çalıştırın: pasif, kapasite sıfır, boş günler, boş zamanlar, rezervasyonsuz ilk aday, ilk çakışma sonrası ikinci aday, bütün adayların çakışması ve yinelenen rezervasyon. Testler geçtikten sonra önce/sonra karar tablosunu ekleyin.

### Ölçülebilir teslim

Tesliminizde şunlar bulunmalıdır:

- En az altı satırlık yol tablosu.
- Başlangıç kodunun kök neden analizi.
- Çalışan sadeleştirilmiş kod.
- En az sekiz otomatik kontrol.
- `break` ve `return` kapsamlarının yazılı açıklaması.
- Davranışın hangi kısmının korunduğu ve hangi hatanın bilinçli düzeltildiği.
- AI kullandıysanız verdiğiniz istem, öneriden reddettiğiniz bir nokta ve bağımsız doğrulama kanıtı.

## Reflection Questions

1. İç içe akışı okurken en çok hangi dış koşulu zihninizden kaçırdınız? Bunu görünür kılmak için hangi tablo sütunu işe yaradı?
2. Bir koşulun doğru olmasıyla o koşulun gerçekten değerlendirilmesi arasındaki farkı kendi örneğinizle açıklayın.
3. Sabit iç sınır ile dış değere bağlı iç sınır için toplam tur sayısını nasıl farklı hesaplarsınız?
4. `break` komutunun hedef kapsamını yanlış anlamak gerçek bir üründe nasıl hata oluşturabilir?
5. Birleşik koşula dönüştürmenin güvenli olması için hangi davranışların dış blokta bulunmaması gerekir?
6. Koruma koşulu sizin çözümünüzde ana yolu nasıl değiştirdi? Yalnız girinti mi azaldı, yoksa kararların anlamı da görünür oldu mu?
7. Bir erken çıkışın kodu kötüleştirebileceği bir durum tasarlayın.
8. Yol sayısını azaltmadan kodun anlaşılabilirliğini artırmak mümkün müdür? Adlandırılmış koşullar üzerinden açıklayın.
9. Uygulanamaz yol ile test edilmemiş yol arasındaki fark nedir?
10. Karmaşıklık metriğinin tek başına kalite kararı olamamasının iki nedenini yazın.
11. Sadeleştirme sonrası aynı çıktı alınsa bile hangi yan etkiler kaybolmuş olabilir?
12. AI önerisini kabul etmeden önce hangi üç kanıtı istersiniz?
13. Zamanlayıcı laboratuvarında hangi test hata düzeltmesini, hangileri davranış korumayı kanıtladı?
14. Çok sayıda boolean bayrak gördüğünüzde durum makinesi sezgisi size hangi soruyu sordurur?
15. Bu chapter'dan sonra C13'te fonksiyonlara ayırmayı öğrenmek neden doğal bir sonraki adımdır?

Yanıtları tek cümleyle geçmeyin. En az üç soruda küçük kod, tablo veya karşı örnek kullanın. Bir hafta sonra 2, 4, 6, 9 ve 12. soruları notlara bakmadan yeniden yanıtlayın; farklılıkları öğrenme günlüğüne yazın.

## Chapter Summary

İç içe kontrol akışı, bir karar veya yineleme yapısını başka bir yapının içinde kullanır. Bu bileşim yanlış değildir; bileşik kuralları ve çok boyutlu tekrarları doğal biçimde temsil eder. Asıl mühendislik sorunu, davranışın izlenebilir olup olmadığıdır.

İç dallara ancak ilgili dış dal seçildiğinde ulaşılır. Bu yüzden bir koşulun veri bakımından doğru olması onun mutlaka değerlendirildiği anlamına gelmez. Bir yürütme yolu, yalnız doğru/yanlış sonuçlarını değil, erişilen blokları, durum değişimlerini ve gözlenebilir sonucu içerir. Karar tablosu bu bilgiyi programcı, test uzmanı ve gereksinim sahibi arasında ortak kanıta dönüştürür.

İç içe döngüde iç döngü her dış tur için yeniden çalışır. Sabit `m` ve `n` sınırlarında `m × n` aday oluşur. İç sınır dış değere göre değişiyorsa tur sayıları toplanır. İç sayaç doğru yerde başlatılmalı; `break` ve `continue` komutlarının yalnız en yakın döngüyü hedeflediği açıkça izlenmelidir.

Karmaşıklık yalnız satır veya girinti sayısı değildir. Etkileşen yollar, zihinde taşınan dış bağlam, durum değişimleri ve sınama yükü birlikte önemlidir. Çevrimsel veya bilişsel metrikler inceleme sinyali olabilir; bağlamdan bağımsız kalite hükmü değildir.

Gereksiz iç içelik birleşik koşul, adlandırılmış koşul, koruma koşulu veya erken çıkışla azaltılabilir. Fakat her dönüşümün ön koşulları vardır. `else` sahipliği, kısa devre sırası, yan etkiler, zorunlu son işlemler ve çıkış kapsamı korunmalıdır. “Daha kısa” veya “daha güzel” davranış eşdeğerliğinin kanıtı değildir.

Davranış koruyan dönüşüm için önce mevcut yollar çıkarılır, karakterizasyon testleri yazılır, küçük değişiklik yapılır ve aynı vaka kümesinde sonuçlar karşılaştırılır. Bilinen hata bilinçli olarak düzeltiliyorsa bu davranış değişikliği ayrıca kaydedilir. Böylece refactoring ile özellik veya hata düzeltme birbirine karışmaz.

Yapay zekâ akış sadeleştirmede yararlı bir yardımcıdır, ancak yol veya yan etki atlayabilir. Geliştirici AI'dan varsayım, yol tablosu, eşdeğerlik gerekçesi ve test ister; sonra bağımsız olarak çalıştırır ve açıklar. Doğruluk sorumluluğu araçta değil, değişikliği kabul eden mühendistedir.

## Key Takeaways

- İç blok, ancak bütün gerekli dış kapılar açıldığında erişilir.
- Girinti yardımcıdır; yürütme kanıtı değildir.
- `else`, en yakın eşleşmemiş `if` yapısına bağlanır; süslü parantez sahipliği görünür kılar.
- Yol analizi koşul sonucu, durum değişimi ve çıktıyı birlikte kaydeder.
- Teorik doğruluk birleşimleri ile uygulanabilir yollar aynı olmayabilir.
- Sabit iç döngü sınırlarında toplam çalışma çoğunlukla çarpımdır; değişken sınırda toplam alınır.
- Etiketsiz `break` ve `continue` en yakın döngüyü hedefler.
- `return` mevcut fonksiyonu bitirir; zorunlu sonraki işlemleri atlama riski incelenmelidir.
- Uzun koşulları alan dilindeki adlarla görünür kılmak hata ayıklamayı kolaylaştırır.
- Guard clause sınır ve geçersiz vakaları ayırarak ana yolu açabilir.
- Düzleştirme sırasında kısa devre sırası, `else` sahipliği ve yan etkiler korunmalıdır.
- Karmaşıklık metrikleri araştırma sinyalidir, otomatik kalite kararı değildir.
- Her dönüşüm önce yol tablosu ve testlerle güvenceye alınmalıdır.
- Normal, sınır, geçersiz ve daha önce hata üretmiş yollar ayrı kanıttır.
- AI çıktısı kabul edilmeden önce yol, varsayım ve davranış eşdeğerliği bakımından denetlenmelidir.

## Further Reading

Önce [ECMAScript Statements and Declarations](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html) içindeki `if`, yineleme, `break`, `continue` ve `return` bölümlerini, ardından [MDN Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) ile [MDN Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) sayfalarını okuyun. Normatif metin ağır gelirse önce MDN örneğini çalıştırın, sonra aynı davranışın specification adımlarını bulun.

Temel yol sınama ve kontrol akışı grafiği için [NIST SP 500-235](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf), tarihsel ölçüm yaklaşımı için [McCabe — A Complexity Measure](https://www.cs.du.edu/~snarayan/sada/teaching/COMP3705/lecture/p1/mccabe.pdf) kullanılabilir. Bunları tek sayı ile kalite belirleme rehberi gibi değil, yol yapısını anlama kaynakları olarak okuyun.

Guard dönüşümü için [Replace Nested Conditional with Guard Clauses](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html) örneğini inceleyin. Örnekte hangi erken vakaların ayrıldığını, ana yolun nasıl görünür olduğunu ve davranışın korunması için hangi testlerin gerektiğini kendi tablonuzla açıklayın.

Program doğruluğunun tarihsel temeli için [Hoare — An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf) ileri okumadır. Formal gösterim bu chapter'ın değerlendirme kapsamı değildir; amaç, durum değişiklikleri sırasında korunması gereken özellik fikrini tanımaktır.

Sonraki C13, fonksiyonların sorumluluk ve sözleşme sınırlarını ele alacaktır. Bu chapter'da “bu iç içe parçayı adlandırılmış bir birime ayırmak istiyorum” dediğiniz nokta, C13 için hazır olduğunuzun işaretidir.

## References

1. Ecma International. [ECMAScript Language Specification — Statements and Declarations](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html). Living Standard, erişim: 23 Temmuz 2026.
2. MDN Web Docs. [Control Flow and Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling). Erişim: 23 Temmuz 2026.
3. MDN Web Docs. [Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration). Erişim: 23 Temmuz 2026.
4. ACM, IEEE-CS ve AAAI. [Computer Science Curricula 2023](https://csed.acm.org/). 2023.
5. Watson, A. H. ve McCabe, T. J. [Structured Testing: A Testing Methodology Using the Cyclomatic Complexity Metric](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf). NIST SP 500-235, 1996.
6. McCabe, T. J. [A Complexity Measure](https://www.cs.du.edu/~snarayan/sada/teaching/COMP3705/lecture/p1/mccabe.pdf). IEEE Transactions on Software Engineering, 1976.
7. Hoare, C. A. R. [An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf). Communications of the ACM, 1969.
8. Lehman, E., Leighton, F. T. ve Meyer, A. R. [Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf). MIT OpenCourseWare.
9. Fowler, M. [Replace Nested Conditional with Guard Clauses](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html). Refactoring Catalog.
10. NIST. [Guidelines on Minimum Standards for Developer Verification of Software](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf). NISTIR 8397, 2021.
