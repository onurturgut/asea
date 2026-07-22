---
title: "Kapsam, Yaşam Süresi ve Yan Etkiler — Görünmeyen Veri Akışını Yönetmek"
volume: "01"
chapter: "15"
chapter_id: "V01-C15"
slug: "kapsam-yasam-suresi-ve-yan-etkiler"
difficulty: "Beginner"
estimated_time: "6-8 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C15-BP01"
production_packet_id: "V01-C15-CPP-001"
prerequisites:
  - "V01-C06"
  - "V01-C13"
  - "V01-C14"
learning_objectives:
  - "V01-LO022"
  - "V01-LO023"
last_updated: "2026-07-23"
---

# Kapsam, Yaşam Süresi ve Yan Etkiler — Görünmeyen Veri Akışını Yönetmek

## Learning Objectives

Bir programda yalnız değerlerin ne olduğunu bilmek yetmez. Bir adın **nerede**
kullanılabildiğini, bağlı olduğu durumun **ne kadar süre** erişilebilir kaldığını
ve bir fonksiyonun açıkça döndürdüğü sonucun dışında **neyi okuyup değiştirdiğini**
de bilmeniz gerekir. Bu chapter'ın sonunda aşağıdaki davranışları gösterebileceksiniz:

- Kapsamı (Scope), bir bağın kaynak kodun hangi bölgesinden erişilebildiğini
  belirleyen kural olarak açıklamak.
- Yaşam süresini (Lifetime), durumun ne zaman var veya erişilebilir olduğunu
  anlatan zaman boyutu olarak kapsamdan ayırmak.
- Bağ (Binding), ad ve değer kavramlarını birbirine karıştırmadan kullanmak.
- Sözcüksel kapsamı (Lexical Scope), kodun yazılı iç içeliğine bakarak okumak;
  çalışma zamanındaki çağrı sırasını kapsam zinciri sanmamak.
- Ad çözümlemeyi (Identifier Resolution) kullanım noktasından başlayıp en yakın
  kapsamdan dış kapsamlara doğru adım adım izlemek.
- JavaScript'teki global, modül, fonksiyon ve blok kapsamlarını ayırt etmek.
- `let` ve `const` bildirimlerinin blok kapsamıyla `var` bildirimlerinin
  fonksiyon kapsamı davranışını çalışan örneklerle karşılaştırmak.
- Gölgelemeyi (Shadowing) yeniden atamadan ayırmak ve iki farklı bağın aynı adı
  taşıdığı bir kodu doğru yorumlamak.
- Kapanışın (Closure), dış fonksiyon tamamlandıktan sonra bile sözcüksel çevredeki
  bir bağa erişimi nasıl koruyabildiğini başlangıç düzeyinde açıklamak.
- Yerel durum (Local State) ile küresel durumu (Global State) sahiplik, erişim
  yüzeyi ve değişim riski açısından değerlendirmek.
- Yan etkiyi (Side Effect), dönüş değerinin dışında dış durum okuyan veya
  değiştiren davranış olarak tanımak.
- Saf fonksiyonu (Pure Function), açık girdilerden sonuç hesaplayan ve önceden
  var olan dış durumu değiştirmeyen bir hesaplama olarak modellemek.
- Gönderimsel saydamlık sezgisini (Referential Transparency Intuition) bir çağrıyı
  değeriyle değiştirme testi üzerinden kullanmak.
- Durumlu bir fonksiyonu saf çekirdek (Pure Core) ve etkili sınır (Effectful
  Boundary) olarak ikiye ayırmak.
- Saat, rastgelelik ve yapılandırma gibi gizli girdileri basit bağımlılık
  enjeksiyonu (Dependency Injection) ile açık parametrelere taşımak.
- Yapay zekânın ürettiği kodda kapsam, gizli bağımlılık, paylaşılan durum ve
  kontrolsüz yan etki risklerini kanıtla denetlemek.

`V01-LO022` için başarı kanıtınız, iç içe kapsamlar içeren bir kodda her adın
hangi bağa çözüldüğünü kullanım noktasından başlayarak izlemenizdir. İziniz;
global, fonksiyon ve blok sınırlarını, gölgelemeyi ve bulunamayan ad durumunu
göstermelidir. `V01-LO023` için başarı kanıtınız, gizli okuma ve yazmaları olan
bir fonksiyonun etki envanterini çıkarmanız; hesaplamayı açık girdiler ve dönüş
değeri kullanan saf çekirdeğe taşımanız; gerekli dış etkiyi küçük bir sınırda
tutmanız ve davranışın korunduğunu testlerle göstermenizdir.

Bu bölümün hedefi bütün kodu “saf” yapmak değildir. Gerçek yazılım ekrana yazar,
dosya okur, ağ üzerinden iletişim kurar ve zamanla etkileşir. Hedef; hangi
etkinin nerede gerçekleştiğini görünür kılmak, hesaplamayı gereksiz gizli
bağımlılıklardan korumak ve değişikliğin etkisini yönetebilmektir.

## Prerequisites

Bu bölüm C06'daki değişken ve bağ modelini, C13'teki fonksiyon çağrısını ve
C14'teki parametre–dönüş değeri veri akışını kullanır. Aşağıdaki kısa tanılamayı
notlarınıza bakmadan yapın:

1. Bir değişken adı ile o adın o anda tuttuğu değer aynı şey midir?
2. `const` bir nesnenin bütün özelliklerini değişmez yapar mı?
3. Fonksiyon çağrısında argümanlar hangi anda parametrelere bağlanır?
4. `console.log(value)` ile `return value` arasındaki davranış farkı nedir?
5. Bir fonksiyon nesne argümanının özelliğini değiştirirse çağıran bunu neden
   görebilir?
6. Bir fonksiyonun sözleşmesinde gizli girdi bulunması ne demektir?

Şimdi şu kodu çalıştırmadan sonucu tahmin edin:

```js
const rate = 0.2;

function calculateTax(price) {
  const rate = 0.1;
  return price * rate;
}

console.log(calculateTax(100));
console.log(rate);
```

İki çıktı da aynı `rate` adına bakıyor gibi görünür. Fakat kullanım noktaları
aynı değildir. Çarpma ifadesindeki arama `calculateTax` fonksiyonunun kapsamından
başlar ve yerel `rate` bağını bulur; sonuç 10 olur. Son `console.log` ise global
kapsamdan arar ve global bağı bulur; sonuç 0.2 olur. İç bildirim dış bağı
değiştirmedi. Aynı adlı ikinci bir bağ oluşturarak dış bağı geçici olarak
gölgeledi.

Bu açıklamada zorlanıyorsanız önce C06'daki bağ ve yeniden atama, sonra C14'teki
parametre ve yerel değer akışı bölümlerini tekrar edin. Bu chapter çok fazla
yeni sözdizimi öğretmez; bildiğiniz sözdiziminin görünmeyen çözümleme kurallarını
görünür hâle getirir.

Çalışma ortamınız için Node.js ve bir metin düzenleyici yeterlidir. Her örneği
şu disiplinle çalışın:

1. Kodu hemen çalıştırmayın; önce kullanım noktalarını numaralandırın.
2. Her kullanım için “hangi ad aranıyor?” sorusunu yazın.
3. En iç kapsamdan dışarı doğru arama tablosu oluşturun.
4. Çıktıyı ve olası yan etkileri tahmin edin.
5. Kodu çalıştırıp tahmininizle karşılaştırın.
6. Fark varsa rastgele değişiklik yapmayın; yanlış zihinsel modeli tek cümleyle
   adlandırın.
7. Normal, sınır ve geçersiz bir vaka ekleyin.

## Estimated Study Time

Bu chapter için önerilen toplam çalışma süresi 6–8 saattir. Ana dersi bir oturuşta
bitirmek yerine, iz üretme ve kod çalıştırma arasında bölmeniz daha verimlidir.

| Çalışma | Süre | Üretilecek kanıt |
|---|---:|---|
| Ön bilgi ve kapsam–yaşam süresi ayrımı | 45 dakika | İki sütunlu karşılaştırma |
| Sözcüksel kapsam ve ad çözümleme | 75 dakika | Üç kapsam zinciri izi |
| JavaScript kapsam türleri ve gölgeleme | 60 dakika | `let`/`const`/`var` matrisi |
| Kapanış ve yaşam süresi sezgisi | 55 dakika | Zaman çizelgesi |
| Yerel/global durum ve etki envanteri | 65 dakika | Dört kanallı etki tablosu |
| Saflık ve saf çekirdek tasarımı | 75 dakika | Önce/sonra refactoring |
| Hands-on exercise | 75–90 dakika | Kod, test ve karar kaydı |
| Tekrar ve yansıma | 30 dakika | Hata günlüğü ve kartlar |

Süre hedef değil, planlama aracıdır. Bir arama izini doğru üretemiyorsanız sonraki
konuya geçmek yerine yeni bir küçük örnek kurun. Buna karşılık, yalnız metni
okuyup hiçbir tablo, tahmin veya test üretmeden iki saatte bitirmek chapter'ı
tamamladığınız anlamına gelmez. Öğrenme kanıtınız çıktıyı ezberlemek değil,
çıktının nedenini açıklayabilmektir.

## Introduction

Bir ekip düşünün. Sipariş toplamını hesaplayan fonksiyon testlerde bazen 120,
bazen 126 döndürüyor. Fonksiyonun parametrelerine baktığınızda yalnız `items`
görüyorsunuz. Kodun içinde ise global `taxRate`, sistem saati ve kampanya
durumu okunuyor. Başka bir test global oranı değiştiriyor fakat geri almıyor.
Fonksiyon aynı açık girdiyle farklı sonuç üretiyor. Hata hesaplama formülünde
değil, görünmeyen veri akışındadır.

Başka bir dosyada geliştirici `status` adını üç ayrı kapsamda kullanıyor. Kod
incelemesinde biri iç bloktaki atamanın global durumu değiştirdiğini sanıyor;
diğeri bunun yeni bir yerel bağ olduğunu söylüyor. İki yorumdan hangisinin doğru
olduğunu adın kendisine bakarak anlayamazsınız. Adın bildirildiği kapsamı,
kullanım noktasını ve arama zincirini görmeniz gerekir.

Küçük programlarda bu sorunlar kolay görünür. Yirmi satırlık dosyada global
değerin nerede değiştiğini arayabilirsiniz. Uygulama büyüdükçe yüzlerce fonksiyon
aynı durumu okuyabilir, bazıları değiştirebilir, bir kısmı bunu dolaylı yardımcı
fonksiyonlardan yapabilir. Bir testin sonucu başka bir testin çalışma sırasına
bağlanabilir. Yapay zekâ çalışan fakat gizli global bağımlılık ekleyen bir çözümü
saniyeler içinde üretebilir. Kod “çalışıyor” olsa da anlamak, test etmek ve
güvenle değiştirmek zorlaşır.

Bu chapter üç temel soruyu öğretir:

1. **Bu ad nerede kullanılabilir ve burada hangi bağa karşılık geliyor?**
2. **Bu durum ne kadar süre var veya erişilebilir kalıyor?**
3. **Bu fonksiyon açık sonucunun dışında ne okuyor ya da neyi değiştiriyor?**

İlk soru kapsam ve ad çözümlemeye, ikinci soru yaşam süresi ve erişilebilirliğe,
üçüncü soru yan etkiler ve saflığa götürür. Sorular birbirine bağlıdır fakat aynı
değildir. Profesyonel muhakeme, onları tek “değişken konusu” altında eritmek
yerine ayrı ayrı cevaplayıp sonra ilişkilerini kurar.

Bir benzetme kullanalım. Bir okulda aynı isimde iki öğrenci olabilir. “Deniz”
diye seslendiğinizde bulunduğunuz sınıftaki Deniz önce karşılık verir. Koridordan
başka bir sınıftaki Deniz'i çağırmanız gerekebilir. Bu, en yakın kapsamdan dışarı
arama sezgisini verir. Fakat programlama dili insan gibi belirsizliğe göre karar
vermez; kesin bildirim ve iç içelik kurallarını izler. Üstelik öğrencinin okulda
bulunma süresi, adının hangi sınıfta geçerli olduğundan farklı bir konudur.
Benzetme bu ayrımı görmemize yardım eder, fakat JavaScript'in çevre kaydı ve
bellek yönetimini açıklayan gerçek mekanizma değildir.

Bu bölüm boyunca her kod parçasına “çıktı kaç?” sorusundan önce “arama nereden
başlıyor, hangi bağ bulunuyor, hangi durum okunuyor ve ne değişiyor?” sorularını
soracağız. Bu alışkanlık; hata ayıklamada, test yazmada, kod incelemede,
mülakatta ve AI çıktısını denetlemede doğrudan kullanılabilir.

## Core Concepts

### 1. Ad, bağ ve değer

Kaynak kodda `score` gördüğünüzde üç farklı şeyi ayırmanız gerekir:

- **Ad (identifier):** Kodda yazılan `score` işaretidir.
- **Bağ:** Bu adı belirli bir kapsamda bir değişken hücresi veya dil varlığıyla
  ilişkilendiren kayıttır.
- **Değer:** Bağın o anda sağladığı `10`, `"ready"` veya nesne referansı gibi
  veridir.

```js
let score = 10;
score = 20;
```

Burada ikinci satır yeni bir `score` bağı oluşturmaz. Mevcut bağın değerini
yeniden atar. Aşağıdaki kod ise iki ayrı bağ oluşturur:

```js
let score = 10;

{
  let score = 20;
  console.log(score); // 20
}

console.log(score); // 10
```

İçteki ve dıştaki ad yazılış olarak aynıdır, fakat farklı kapsam kayıtlarına
aittir. İç blokta `score` araması en yakındaki bağı bulur. Blok bittikten sonra
dış kullanım dıştaki bağı bulur. Bunu “değer önce 20 oldu, sonra 10'a döndü”
diye anlatmak yanlıştır; iki farklı bağ vardır ve hiçbir geri dönüş yaşanmamıştır.

### 2. Kapsam: erişilebilirliğin haritası

Kapsam, bir bağın kodun hangi bölgesinde adıyla erişilebilir olduğunu belirler.
Kapsamı yalnız “değişkenin bulunduğu yer” diye düşünmeyin. Fonksiyonlar,
sınıflar ve import adları da bağ oluşturabilir. Bu chapter değişken örneklerine
odaklanır çünkü mekanizmayı en açık onlar gösterir.

Şu iki soruyu ayırın:

- “`total` adlı bağ kaynak kodun bu satırından erişilebilir mi?” kapsam sorusudur.
- “`total` bağının tuttuğu nesne hâlâ bellekte erişilebilir mi?” yaşam süresi ve
  erişilebilirlik sorusudur.

Bir kapsam içindeki kod genellikle dış kapsamların bağlarını görebilir; dıştaki
kod ise iç kapsamın özel bağlarını göremez. Bu tek yönlü görünürlük yerel
ayrıntıları saklamayı ve aynı adı farklı küçük bağlamlarda güvenle kullanmayı
sağlar.

### 3. Sözcüksel kapsam: kod nerede yazılmış?

JavaScript sözcüksel kapsam kullanır. Bir fonksiyonun hangi dış bağlara
erişebileceği, fonksiyonun nereden çağrıldığına göre değil, kaynak kodda nerede
tanımlandığına göre belirlenir.

```js
const label = "global";

function showLabel() {
  console.log(label);
}

function caller() {
  const label = "caller";
  showLabel();
}

caller(); // global
```

`showLabel`, `caller` içinden çağrıldı. Buna rağmen `caller` fonksiyonunun yerel
`label` bağını görmez; çünkü orada tanımlanmamıştır. `showLabel` kaynak kodda
global kapsamın içinde tanımlıdır. Kendi yerel kapsamında `label` bulamayınca
tanımlandığı dış çevreye gider ve global bağı bulur.

Bu ayrım çok önemlidir:

- **Çağrı yığını (Call Stack)** hangi fonksiyonun şu anda çalıştığını ve nereye
  döneceğini izler.
- **Sözcüksel kapsam zinciri** bir adın hangi bağa çözüleceğini belirler.

İkisi çalışma sırasında birlikte bulunur fakat aynı yapı değildir. “Beni bu
fonksiyon çağırdı, onun yerel değişkenlerini görebilirim” düşüncesi JavaScript
için yanlıştır.

### 4. Ad çözümleme algoritması

Bir ad kullanıldığında şu pratik algoritmayı uygulayın:

1. Kullanım noktasını bulun; bildirim noktasından başlamayın.
2. Kullanım noktasını içeren en dar sözcüksel kapsamı belirleyin.
3. Bu kapsamda aynı adlı bağ varsa onu seçip aramayı bitirin.
4. Yoksa dış sözcüksel kapsama geçin.
5. Her dış kapsamda aynı denetimi tekrarlayın.
6. Zincir bittiğinde bağ bulunamadıysa çözümlenemeyen bir ad vardır.

```js
const currency = "TRY";

function formatPrice(amount) {
  const decimals = 2;

  if (amount === 0) {
    const prefix = "Ücretsiz";
    return prefix;
  }

  return `${amount.toFixed(decimals)} ${currency}`;
}
```

Son `return` içindeki çözümleme izleri:

| Aranan ad | Fonksiyon kapsamı | Global kapsam | Sonuç |
|---|---|---|---|
| `amount` | Parametre bağı bulundu | Bakılmaz | Yerel parametre |
| `decimals` | Yerel bağ bulundu | Bakılmaz | Yerel sabit |
| `currency` | Bulunamadı | Bağ bulundu | Global sabit |
| `prefix` | Bulunamadı | Bulunamadı | Kullanılsaydı hata |

`prefix` yalnız `if` bloğundadır. Son `return` o bloğun dışındadır. Program
`prefix` kullanmadığı için burada hata yoktur; fakat son satıra `${prefix}`
eklerseniz ad çözümleme başarısız olur.

### 5. Global kapsam

Global kapsam, script modunda kodun en dış kapsamıdır. Çok geniş bir erişim
yüzeyi sağlar. “Her yerden erişilebilir” rahat görünse de sahipliği belirsiz
paylaşılan durum yaratabilir.

```js
let currentUser = "Ada";

function greet() {
  return `Merhaba, ${currentUser}`;
}
```

`greet` açık parametre almaz fakat sonucu `currentUser` değerine bağlıdır. Bu
global okuma bir gizli girdidir. Fonksiyon hemen kötü değildir; fakat sözleşmesi
imzasından anlaşılamaz. Testten önce global durumu hazırlamak gerekir. Başka kod
değeri değiştirirse sonuç değişir.

Modern projelerde her dosyayı modül olarak kullanmak, script global kapsamına
ad sızdırma riskini azaltır. Bununla birlikte modül düzeyindeki değiştirilebilir
durum da modülü import eden kodlar arasında paylaşılabilir. “Global değil,
modülde” demek otomatik olarak güvenli sahiplik anlamına gelmez.

### 6. Modül kapsamı

JavaScript modülünde en üst düzey bildirimler modül kapsamındadır. Başka bir
modül, yalnız açıkça `export` edilen bağlara erişebilir.

```js
// counter.js
let count = 0;

export function increment() {
  count += 1;
  return count;
}

export function readCount() {
  return count;
}
```

`count` doğrudan dışarı açılmamıştır; fakat iki exported fonksiyon aynı modül
durumuna erişir. Bu, global ad kirliliğinden daha kontrollüdür. Yine de testler
arasında durum korunabilir ve çağrı sırası sonucu etkileyebilir. Modül sınırı
erişim yetkisini daraltır; yan etki ve yaşam süresi sorularını ortadan kaldırmaz.

### 7. Fonksiyon kapsamı

Her fonksiyon çağrısı parametreler ve yerel bildirimler için yeni bir yürütme
bağlamı oluşturur. Aynı fonksiyon iki kez çağrıldığında yerel bağlar birbirinden
bağımsızdır.

```js
function calculateDiscount(price, rate) {
  const discount = price * rate;
  return discount;
}

const first = calculateDiscount(100, 0.1);
const second = calculateDiscount(200, 0.2);
```

İlk çağrının `price`, `rate` ve `discount` bağları ikinci çağrınınkilerle aynı
adları taşır fakat aynı bağlar değildir. Bu yerellik, çağrıların birbirine
karışmadan çalışmasını sağlar. Fonksiyon dışındaki kod `discount` adına erişemez.

`var` bildirimi de fonksiyon gövdesiyle sınırlıdır; sıradan `if`, `for` veya
çıplak blok onu ayrıca sınırlamaz. Bu davranış, modern `let` ve `const` blok
kapsamından farklıdır.

### 8. Blok kapsamı ve `let`/`const`

Bir blok `{ ... }`, `let`, `const` ve `class` bildirimleri için yeni kapsam
oluşturabilir.

```js
function processOrder(total) {
  if (total > 1000) {
    const discountRate = 0.1;
    const discounted = total * (1 - discountRate);
    console.log(discounted);
  }

  // discountRate ve discounted burada erişilebilir değildir.
}
```

Geçici hesaplama adlarının yalnız gerekli dalda görünmesi iki fayda sağlar.
Birincisi yanlışlıkla başka yerde kullanılmalarını önler. İkincisi kodu okuyan
kişiye sahipliği gösterir: bu değerler indirim dalına aittir.

Döngüde `let` kullanımı da her yineleme için kapanışlarla doğru çalışan blok
bağları sağlar. Bu ayrıntı kapanış bölümünde görülecektir. Başlangıç kuralı:
yeniden atama gerekmiyorsa `const`, gerekiyorsa `let` kullanın; mevcut eski kodu
anlamak dışında `var` tercih etmeyin.

### 9. `var` neden farklıdır?

```js
function example(flag) {
  if (flag) {
    var message = "hazır";
  }

  console.log(message);
}

example(true);  // hazır
example(false); // undefined
```

`message`, `if` bloğuna değil `example` fonksiyonuna aittir. Bildirimin
başlatılması yalnız dal çalıştığında gerçekleşir; fakat `var` bağı fonksiyon
kapsamında vardır ve başlangıç değeri `undefined` modeline göre davranır. Aynı
örneği `let` ile yazarsanız blok dışındaki okuma `ReferenceError` üretir.

Bu davranışı “JavaScript satırı yukarı taşıdı” diye ezberlemek yerine bağın
hangi kapsama ait olduğunu ve ne zaman başlatıldığını ayırın. C06'daki hoisting
ve geçici ölü bölge bilgisi burada kapsam sınırıyla birleşir.

### 10. Gölgeleme

Gölgeleme, iç kapsamda dış kapsamla aynı adlı yeni bir bağ oluşturulduğunda en
yakın bağın aramayı kazanmasıdır.

```js
const environment = "production";

function runPreview() {
  const environment = "preview";
  return environment;
}

console.log(runPreview()); // preview
console.log(environment);  // production
```

Burada iki `environment` vardır. İç fonksiyonun dönüşü yerel bağı kullanır.
Fonksiyon bittiğinde global bağ yine `production` değerindedir. Buna karşılık:

```js
let environment = "production";

function runPreview() {
  environment = "preview";
}
```

İçeride yeni bildirim yoktur. Arama dıştaki bağı bulur ve atama onu değiştirir.
Bu yeniden atamadır ve global yan etkidir. Bir kod incelemesinde yalnız adlara
değil, bildirim sınırına bakmanız bu iki davranışı ayırır.

Gölgeleme bazen kısa bir dönüşümde anlamı koruyabilir. Fakat uzun fonksiyonda
aynı ad farklı anlamlar taşıyorsa bilişsel yükü artırır. `user` adlı dış nesneyle
`user` adlı iç string'i gölgelemek yerine `userName` gibi anlamı belirgin ad
seçmek daha güvenlidir.

### 11. Kapsam ile yaşam süresini ayırmak

Kapsam kaynak kod üzerindeki erişim bölgesidir. Yaşam süresi, bir bağın veya
durumun çalışma sırasında var ve erişilebilir kaldığı zaman aralığıdır. Bunlar
çoğu basit örnekte birlikte başlar ve biter gibi göründüğü için karıştırılır.

```js
function createMessage() {
  const message = "Merhaba";
  return message;
}

const result = createMessage();
```

`message` adı yalnız fonksiyon gövdesinde erişilebilirdir. Fonksiyon dışındaki
kod `message` yazamaz. Fakat onun ürettiği string değer `result` bağı üzerinden
yaşamaya devam eder. Adın kapsamı ile değerin kullanılabilirliği aynı değildir.

Nesnelerde ayrım daha görünürdür:

```js
function createUser() {
  const localUser = { name: "Ada" };
  return localUser;
}

const user = createUser();
console.log(user.name);
```

`localUser` adı fonksiyon dışında yoktur. Aynı nesne ise dönüş değeriyle `user`
bağına ulaşmıştır ve erişilebilirdir. “Yerel değişken öldü, nesne de silindi”
demek yanlıştır.

### 12. Erişilebilirlik ve otomatik bellek yönetimi

JavaScript belleği otomatik yönetir. Basit yaşam döngüsü; belleğin ayrılması,
değerin kullanılması ve artık erişilemeyen belleğin motor tarafından geri
kazanılmasıdır. Uygulama kodu bir nesnenin tam hangi milisaniyede toplanacağını
güvenilir biçimde belirleyemez.

Başlangıç için şu zihinsel model yeterlidir:

- Program köklerden —örneğin etkin global durumdan ve çalışan çağrılardan—
  nesnelere giden başvuru yollarını izleyebilir.
- Bir nesneye ulaşan yol varsa nesne erişilebilirdir.
- Hiçbir erişim yolu kalmadığında nesne geri kazanılmaya uygun hâle gelir.
- Uygun olmak, tam o anda kesin olarak silinmek demek değildir.

Kapsam analizi bir adın kaynak koddan kullanılabilirliğini; erişilebilirlik
analizi bir nesneye çalışma sırasında yol olup olmadığını sorar. C15'in görevi
çöp toplayıcı implementasyonunu öğretmek değil, bu soruları karıştırmanızı
önlemektir.

### 13. Kapanış: dış çağrıdan sonra erişim

Kapanış, fonksiyon ile tanımlandığı sözcüksel çevre arasındaki ilişkidir. İç
fonksiyon dışarı döndürülürse, dış fonksiyonun çağrısı tamamlandıktan sonra da
gereken dış bağlara erişebilir.

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

Zaman çizelgesi:

1. `createCounter()` çağrılır; `count` bağı 0 ile oluşturulur.
2. `increment` fonksiyonu tanımlandığı çevrede `count` bağına erişebilir.
3. `increment` dışarı döndürülür ve `counter` bağına atanır.
4. `createCounter` çağrısı tamamlanır.
5. `counter()` çağrıldığında `increment`, korunan `count` bağını bulur.
6. Bağın değeri değişir ve sonraki çağrı aynı bağı görür.

Kapanışı “0 değerinin fotoğrafı kopyalandı” diye açıklarsanız ikinci çağrının 2
döndürmesini açıklayamazsınız. Korunan şey yalnız ilk değer değil, bağa erişimdir.
Her `createCounter()` çağrısı ayrı bir çevre ve ayrı `count` bağı üretir:

```js
const firstCounter = createCounter();
const secondCounter = createCounter();

console.log(firstCounter());  // 1
console.log(firstCounter());  // 2
console.log(secondCounter()); // 1
```

### 14. Yerel durum ve kapsülleme

`count`, dış kod tarafından doğrudan okunamaz veya yazılamaz; yalnız döndürülen
fonksiyon onu değiştirir. Bu, yerel durumu küçük bir arayüz arkasında kapsüller.
Kapsülleme her şeyi güvenli yapmaz: `increment` hâlâ durumlu ve çağrı sırasına
bağlıdır. Fakat değişim yetkisi sınırlıdır.

Yerel durum için şu soruları sorun:

- Durum hangi tek sorumluluğa ait?
- Hangi fonksiyonlar okuyabilir ve yazabilir?
- Geçerli değerlerin invariant'ı nedir?
- Durum ne zaman sıfırlanır?
- İki bağımsız kullanım aynı durumu paylaşmalı mı?

Durumu en dar sorumlu kapsamda tutmak, olası okuyucu ve yazıcı sayısını azaltır.
Bu kural “her değeri fonksiyon içine sakla” demek değildir. Birden fazla bileşen
gerçekten aynı durumu paylaşacaksa ortak sahip gerekir; ancak erişim ve değişim
protokolü açık olmalıdır.

### 15. Küresel durum ve etki yarıçapı

Küresel değiştirilebilir durum, geniş bir kod yüzeyince okunup yazılabilir.
Sorun yalnız küresel olması değil, değişimin sahibinin ve sırasının görünmez
olmasıdır.

```js
let totalOrders = 0;

function registerOrder(order) {
  totalOrders += 1;
  return { id: order.id, accepted: true };
}
```

`registerOrder` hem değer döndürür hem global sayacı değiştirir. Testler çağrı
sırasına bağlı hâle gelebilir. Aynı fonksiyon iki kez çalıştırıldığında dönüş
nesnesi aynı görünse bile global durum farklıdır. Yeniden deneme veya paralel
işlem gibi gerçek sistem koşullarında sayaç beklenmedik sonuç verebilir.

Küresel durum bazen uygulama yapılandırması, önbellek veya koordinasyon için
gerekli olabilir. Profesyonel çözüm “global gördüğün her şeyi sil” değildir.
Sahipliği belirlemek, yazma noktalarını sınırlamak, değişimi fonksiyon adıyla
görünür kılmak ve test izolasyonu sağlamaktır.

### 16. Yan etki: yalnız yazma değil

Bir fonksiyonun açık dönüş değerinin ötesindeki gözlenebilir davranışına yan
etki denir. En bilinen örnek dış durumu değiştirmektir:

```js
let balance = 100;

function withdraw(amount) {
  balance -= amount;
  return balance;
}
```

Ancak dış dünyayı okumak da gizli bağımlılık oluşturabilir:

```js
function createTimestampedMessage(message) {
  return `${Date.now()}: ${message}`;
}
```

Fonksiyon dışarı yazmıyor fakat aynı `message` girdisiyle farklı zamanlarda
farklı sonuç veriyor. `Date.now()` gizli girdidir. Yan etki envanterinde hem
okumaları hem yazmaları kaydedin:

| Kanal | Örnek | Tasarım etkisi |
|---|---|---|
| Açık girdi | Parametre | Sözleşmede görünür |
| Gizli okuma | Saat, global, dosya | Sonuç dış koşula bağlı |
| Açık sonuç | `return` | Çağıran tarafından birleştirilebilir |
| Dış yazma | Konsol, nesne, dosya | Başka gözlemcilerin durumu değişir |

Yan etki listesine konsol/ekran yazma, dosya ve ağ işlemi, argüman nesnesini
değiştirme, hata fırlatma, saat ve rastgelelik okuma gibi davranışlar girebilir.
Her biri kötü değildir; fakat açıkça yerleştirilmezse test ve muhakeme maliyeti
yaratır.

### 17. Saf fonksiyon

Bu bölümde saf fonksiyonu iki pratik koşulla tanıyacağız:

1. Aynı açık girdiler aynı sonucu üretir.
2. Fonksiyon çağrıdan önce var olan dış durumu gözlenebilir biçimde değiştirmez.

```js
function calculateNetPrice(price, discountRate) {
  return price * (1 - discountRate);
}
```

Bu fonksiyonun sonucu parametrelerinden belirlenir. Global değer, saat veya
rastgelelik okumaz; dış nesneyi değiştirmez. `calculateNetPrice(100, 0.2)` her
çağrıda 80 üretir.

Saflık, fonksiyon gövdesinde hiç atama olmaması demek değildir:

```js
function normalizeNames(names) {
  const result = [];

  for (const name of names) {
    result.push(name.trim().toLowerCase());
  }

  return result;
}
```

`result` yeni ve yerel bir dizidir. Fonksiyon dışarıdan aldığı `names` dizisini
değiştirmez. Yerel mutasyon dışarıdan gözlenemediği için hesaplama aynı girdide
aynı sonucu verir. “Kodda `.push` gördüm, saf değildir” gibi sözdizimsel bir
denetim yeterli değildir. Hangi nesnenin ne zaman oluşturulduğunu ve değişimin
dışarıdan gözlenebilir olup olmadığını izleyin.

### 18. Gönderimsel saydamlık sezgisi

Bir ifadeyi ürettiği değerle değiştirmek programın gözlenebilir davranışını
değiştirmiyorsa gönderimsel saydamlık sezgisi vardır.

```js
const result = calculateNetPrice(100, 0.2) + 10;
```

Çağrıyı `80` ile değiştirirseniz sonuç yine 90 olur ve başka durum değişmez.
Fakat:

```js
let ticket = 0;

function nextTicket() {
  ticket += 1;
  return ticket;
}
```

`nextTicket()` çağrısını bir kez gördüğünüz dönüş değeriyle değiştirmek global
sayacın değişimini ortadan kaldırır ve sonraki çağrıları etkiler. Çağrı yalnız
bir değer değildir; aynı zamanda komuttur.

Bu sezgi, saf hesapların neden daha kolay test edildiğini, önbelleğe alınabildiğini
ve farklı sırada güvenle çalıştırılabildiğini anlamanıza yardım eder. Burada
biçimsel programlama dili teorisine girmiyoruz; amaç, gizli davranışı fark eden
bir inceleme sorusu kazanmaktır.

### 19. Saf çekirdek ve etkili sınır

Gerçek uygulamanın etkileri vardır. Sağlam tasarım, hesaplamayı etkilerle
karıştırmak yerine iki rolü ayırır:

- Saf çekirdek veriyi doğrular, dönüştürür ve sonuç üretir.
- Etkili sınır dış dünyadan veri okur, çekirdeği çağırır ve sonucu dış dünyaya
  uygular.

Önce karışık sürüm:

```js
let taxRate = 0.2;

function printInvoice(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal * (1 + taxRate);
  console.log(`Toplam: ${total}`);
}
```

Fonksiyon global oran okur ve konsola yazar. Hesap sonucu return edilmez. Saf
çekirdeğe ayıralım:

```js
function calculateInvoice(items, taxRate) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal * (1 + taxRate);
  return { subtotal, taxRate, total };
}

function printInvoice(items, taxRate) {
  const invoice = calculateInvoice(items, taxRate);
  console.log(`Toplam: ${invoice.total}`);
}
```

Konsola yazma hâlâ vardır; çünkü program kullanıcıya bilgi vermelidir. Fakat
hesaplama artık açık girdilerle sınanabilir. Etki küçük sınırda görünürdür.
`calculateInvoice` başka bir arayüzde, API'de veya dosya çıktısında yeniden
kullanılabilir.

### 20. Gizli girdiyi bağımlılık olarak taşımak

Saat ve rastgelelik gibi değerleri fonksiyon içinde doğrudan okumak yerine
parametreyle sağlayabilirsiniz. Bu başlangıç düzeyindeki bağımlılık enjeksiyonu
sezgisidir.

```js
function isCampaignActive(campaign, now) {
  return now >= campaign.startsAt && now <= campaign.endsAt;
}

const now = Date.now();
const active = isCampaignActive(campaign, now);
```

Test artık `now` için sabit bir sayı verir; gece yarısında tesadüfen bozulmaz.
Etkili sınır gerçek saati okur, saf çekirdek karşılaştırmayı yapar.

Her bağımlılığı parametreye eklemek de iyi tasarım garantisi değildir. Onlarca
ilgisiz parametre C14'teki uzun arayüz sorununu oluşturur. Aynı sorumluluğa ait
bağımlılıkları anlamlı bir sözleşmede gruplayın ve yalnız gerekli olanları
taşıyın. Bir framework veya dependency container bu temel fikrin ön koşulu
değildir.

### 21. Etki envanteri nasıl çıkarılır?

Bir fonksiyonu satır satır inceleyip dört liste oluşturun:

1. **Açık girdiler:** Parametreler ve onların erişilen alanları.
2. **Gizli okumalar:** Global/modül durum, saat, rastgelelik, ortam, dosya, ağ.
3. **Açık sonuçlar:** Return değeri ve hata sözleşmesi.
4. **Dış yazmalar:** Paylaşılan nesne, global durum, konsol, dosya, ağ.

```js
let auditCount = 0;

function approveOrder(order) {
  auditCount += 1;
  order.status = "approved";
  console.log(Date.now(), order.id);
  return true;
}
```

| Kanal | Bulgu |
|---|---|
| Açık girdi | `order`, `order.id` |
| Gizli okuma | `auditCount`, `Date.now()` |
| Açık sonuç | `true` |
| Dış yazma | `auditCount`, `order.status`, konsol |

Bu tablo hemen çözümü belirlemez. İş gereksinimi sipariş durumunun gerçekten
değişmesini istiyor olabilir. Envanter yalnız görünmeyeni görünür kılar. Sonra
hangi etkinin çekirdekte gereksiz, hangisinin sınırda zorunlu olduğuna karar
verirsiniz.

### 22. Davranışı koruyan refactoring sırası

Yan etkili kodu tek seferde tamamen değiştirmek risklidir. Küçük adımlar izleyin:

1. Mevcut davranışı normal ve sınır vakalarıyla kaydedin.
2. Açık/gizli girdi ve yazma envanterini çıkarın.
3. Saf hesaplanabilir parçayı belirleyin.
4. Bu parçayı parametreler ve return kullanan yeni fonksiyona taşıyın.
5. Eski etkili fonksiyonu yeni çekirdeği çağıracak biçimde düzenleyin.
6. Önceki davranış testlerinin geçtiğini doğrulayın.
7. Gizli bağımlılıkları tek tek sınıra taşıyın.
8. Çağıranları ve hata sözleşmesini yeniden doğrulayın.

Bu sıra “refactor ederken davranışı değiştirme” riskini azaltır. Aynı anda hem
iş kuralını hem arayüzü hem çıktı biçimini değiştirirseniz başarısızlığın
nedenini ayırmak zorlaşır.

### 23. Yapay zekâ çıktısında kapsam ve etki denetimi

AI, çalışan kod üretirken kolayca modül düzeyinde değiştirilebilir sayaç,
fonksiyon içinde `Date.now()`, argüman nesnesinde mutation veya yalnız
`console.log` ile çıktı kullanabilir. Çözümü kabul etmeden önce şu kanıtları
isteyin:

- Her serbest ad hangi kapsamda bildirildi?
- Aynı adlı kaç farklı bağ var?
- Fonksiyonun bütün açık ve gizli girdileri neler?
- Hangi durum okunuyor, hangisi değiştiriliyor?
- Aynı girdide iki çağrı aynı sonuç ve aynı dış durum üretir mi?
- Hesaplama saf çekirdeğe ayrılabilir mi?
- Normal, sınır ve geçersiz testler etkileri de gözlüyor mu?

“Bu fonksiyon saf mı?” diye sorup AI'ın evet/hayır cevabını kabul etmeyin. Etki
envanterini, kapsam zincirini ve testleri siz üretin. AI'ın açıklamasını kendi
izinizle karşılaştırın. Uyuşmazlıkta çalışan deney ve resmî dil davranışı
otoritedir.

## Engineering Perspective

### Yerellik bir stil tercihi değil, muhakeme aracıdır

Bir mühendisin bir fonksiyonu güvenle değiştirebilmesi için değişikliğin hangi
durumu etkileyebileceğini bilmesi gerekir. Durum en dar kapsamda ve az sayıda
fonksiyonun denetimindeyse olasılık uzayı küçülür. Global değiştirilebilir durum
ise aynı adı veya nesneyi kullanan bütün kodu olası etki alanına katar.

Bu yüzden “değişkenleri mümkün olan en dar kapsamda bildir” kuralı yalnız kodu
güzel göstermez. İncelenecek satır sayısını ve aynı durum hakkında varsayım
yapabilecek bileşen sayısını azaltır. Dar kapsam:

- yanlış kullanımın derleyici veya çalışma zamanı hatasıyla erken görünmesini;
- bir adın sahibinin kaynak koddan anlaşılmasını;
- testlerin daha az ortak hazırlık gerektirmesini;
- paralel çalışan işlerin birbirine daha az müdahale etmesini;
- refactoring sırasında etki alanının daha doğru tahmin edilmesini sağlar.

Ancak aşırı yerellik de bilgi akışını parçalayabilir. Aynı iş kavramını her
fonksiyonda yeniden üretmek veya bir değeri gereksiz uzun parametre zincirinden
geçirmek yeni maliyet yaratır. Doğru kapsam, değeri kullanan tek satır kadar dar
olmak zorunda değildir; değerin sahibi olan en küçük anlamlı sorumluluk kadar
dar olmalıdır.

### Sahiplik sorusu

Paylaşılan durum gördüğünüzde ilk soru “bunu nasıl saklarız?” değil, “bunun
sahibi kim?” olmalıdır. Sahiplik şu yetkileri tanımlar:

- Başlangıç değerini kim belirler?
- Kim okuyabilir?
- Kim değiştirebilir?
- Hangi değişiklikler geçerlidir?
- Değişiklik başarısız olursa ne olur?
- Durum ne zaman sıfırlanır veya sonlandırılır?

Örneğin alışveriş sepeti toplamı, ürün listesinden türetilebiliyorsa ayrıca
global bir `cartTotal` tutmak iki doğruluk kaynağı yaratır. Ürün listesi değişip
toplam güncellenmezse çelişki oluşur. Toplamı ihtiyaç anında saf fonksiyonla
hesaplamak veya tek bir sorumlu modül içinde birlikte güncellemek daha açık bir
invariant sağlar.

### Etkileri kaldırmak değil, sınırlandırmak

Bir ödeme sistemi saf fonksiyonlardan ibaret olamaz; bankaya istek göndermesi,
işlemi kaydetmesi ve kullanıcıya cevap vermesi gerekir. Saflık öğretisinin
profesyonel yorumu şudur: karar ve hesaplamayı mümkün olduğunca deterministik
çekirdekte tut, kaçınılmaz etkileri görünür ve küçük sınırda yürüt.

Ödeme örneğinde çekirdek; tutarı, para birimini, indirimleri ve geçerlilik
kurallarını hesaplayabilir. Sınır; saati okur, ödeme sağlayıcısını çağırır,
sonucu veritabanına yazar. Bu ayrım sayesinde iş kuralı binlerce ağ çağrısı
yapmadan test edilir; sağlayıcı entegrasyonu ise ayrı sözleşme testleriyle
denetlenir.

Saf çekirdek–etkili sınır modeli mutlak değildir. Bazen veri tabanı transaction'ı
içindeki karar, eşzamanlı durum nedeniyle okuma ve yazmaya yakın durmalıdır.
Mühendislik; kuralı körü körüne uygulamak değil, tutarlılık, performans, sadelik
ve test edilebilirlik arasında kanıtlı karar vermektir.

### Test edilebilirlik neden artar?

Gizli girdisi olan fonksiyonun testinde ortamı kontrol etmeniz gerekir. Saat
okuyorsa sistemi taklit eder, global değer okuyorsa her testten önce kurar,
dosyaya yazıyorsa geçici dosya sistemi hazırlarsınız. Test başarısız olduğunda
hesaplama mı, ortam mı, temizleme adımı mı bozulduğunu ayırmanız gerekir.

Saf çekirdek ise değer tablosuyla sınanabilir:

```js
function calculateLateFee(daysLate, dailyRate, maximumFee) {
  const rawFee = daysLate * dailyRate;
  return Math.min(rawFee, maximumFee);
}
```

```js
console.assert(calculateLateFee(0, 5, 100) === 0);
console.assert(calculateLateFee(3, 5, 100) === 15);
console.assert(calculateLateFee(30, 5, 100) === 100);
```

Bu testler hızlı ve tekrarlanabilirdir. Gerçek tarihi hesaplayan sınır, bugünün
tarihini açık `now` girdisine çevirip çekirdeğe verebilir. Böylece tarih hesabı
gece yarısında rastgele bozulmaz.

### Eşzamanlılık için erken sezgi

Bu volume henüz eşzamanlılık (Concurrency) öğretmez, ancak paylaşılan
değiştirilebilir durumun neden gelecekte zorlaşacağını sezmek önemlidir. İki iş
aynı global sayacı okuyup artırmaya çalışırsa işlemlerin sırası sonucu
etkileyebilir. Tek iş parçacıklı JavaScript'te bile zamanlayıcılar ve asenkron
işlemler farklı zamanlarda aynı duruma dokunabilir.

C15'te çözmeniz gereken ileri yarış durumu değildir. Kazanmanız gereken erken
refleks şudur: “Bu fonksiyon hangi ortak duruma bağlı ve çağrı sırası davranışı
değiştiriyor mu?” Bu soru daha sonra asenkron programlama, veritabanı işlemleri
ve dağıtık sistemlerde daha güçlü araçlarla ele alınacaktır.

### Kod inceleme sözleşmesi

Bir pull request'te kapsam veya etki değişiyorsa yalnız diff'in çalışmasına
bakmayın. Şu inceleme kaydını isteyin:

1. Yeni veya genişletilen bağın kapsamı nedir?
2. Erişebilen okuyucu/yazıcı sayısı arttı mı?
3. Fonksiyonun açık sözleşmesine yeni bağımlılık eklendi mi?
4. Yeni yan etki hangi sınırda gerçekleşiyor?
5. Testler dönüş değerini ve dış etkiyi ayrı doğruluyor mu?
6. Geri alma veya tekrar çalıştırma davranışı nedir?

Bu sorular, stil tartışmasını mühendislik kanıtına çevirir. “Global kullanma”
yerine “bu modül durumunu üç test paylaşıyor ve ikinci test birincinin bıraktığı
değere bağlı; her senaryo için yeni sahiplik oluşturmalıyız” demek eyleme
dönüşebilir bir geri bildirimdir.

### Hata ayıklamada kapsam ve etki yöntemi

Bir hata yalnız bazı çalıştırmalarda ortaya çıkıyorsa hemen koşul ifadelerini
değiştirmeyin. Önce gözlenen yanlış değerin kaynağını geriye doğru izleyin.
Değerin okunduğu kullanım noktasını bulun, adı hangi bağın sağladığını kapsam
zinciriyle kanıtlayın ve o bağa yazabilen bütün noktaları listeleyin. Ardından
fonksiyon çağrısından önceki ve sonraki dış durumu kaydedin. Bu yöntem iki yaygın
hata sınıfını ayırır: yanlış bağın okunması ve doğru bağın beklenmedik zamanda
değiştirilmesi.

Örneğin bir `discount` değeri beklenenden farklıysa aynı adlı bütün metinleri
toplu değiştirmek tehlikelidir. İç bloktaki `discount` dıştakini gölgeliyor
olabilir; ya da fonksiyon global bağı yeniden atıyor olabilir. İki durumda
görünen ad aynı olsa da düzeltme farklıdır. İlkinde daha açık adlandırma veya
kapsam düzenleme, ikincide sahiplik ve etki sınırı gerekir.

Etkili bir hata ayıklama günlüğünde şu kayıtlar bulunur:

1. Yanlış davranışın en küçük yeniden üretimi.
2. Kullanım noktasındaki kapsam zinciri.
3. Bulunan bağın çağrı öncesi değeri.
4. Bağa veya bağlı nesneye yazan noktalar.
5. Çağrı sırası ve dış durumun önce/sonra görüntüsü.
6. Tek bir varsayımı sınayan deney.
7. Düzeltmeden sonra regresyon testi.

Bu disiplin, rastgele `console.log` eklemekten farklıdır. Log kullanabilirsiniz,
fakat her log belirli bir hipotezi sınamalıdır. “Bir yerlerde değişiyor” yerine
“ikinci çağrıdan önce modül düzeyindeki sayaç 1; bu fonksiyon onu 2 yapıyor ve
üçüncü test temiz başlangıç varsayıyor” gibi kesin bir açıklama üretin.

### Performans hakkında doğru sınır

Dar kapsam veya saf fonksiyon kullanmanın performansı otomatik olarak
iyileştirdiğini söylemek doğru değildir. Bazı saf tasarımlar yeni nesneler
üretebilir; bazı yerinde güncellemeler bellek tahsisini azaltabilir. Buna rağmen
saf ve açık veri akışı ölçüm yapmayı kolaylaştırır: aynı girdiyi tekrar üretir,
hesaplama süresini dış I/O'dan ayırır ve optimizasyon öncesi doğru davranışı
kilitlersiniz.

Önce anlaşılabilirlik ve doğruluk sözleşmesini kurun. Gerçek bir performans
sorunu varsa ölçüm yapın; sonra yerel mutation, önbellek veya daha uzun yaşamlı
durum gibi optimizasyonları bilinçli uygulayın. Optimizasyon yan etki ekliyorsa
etkinin sahibi, geçersiz kılma kuralı ve testleri açık olmalıdır. “Global daha
hızlıdır” ya da “immutable her zaman hızlıdır” gibi kanıtsız genellemeler
mühendislik kararı değildir.

### Güvenlik ve gizli durum

Geniş kapsam yalnız bakım değil güvenlik riski de yaratabilir. Erişim belirteci,
parola veya kişisel veri gereksiz yere global ya da uzun yaşayan kapanış içinde
tutulursa daha fazla kod bu veriye erişebilir ve yaşam süresi uzayabilir.
Konsola yazma gibi görünüşte basit bir yan etki hassas veriyi loglara sızdırabilir.

Bu chapter güvenli sır yönetiminin tamamını öğretmez; fakat iki temel refleks
kazandırır: hassas verinin kapsamını ve yaşam süresini gereksinim kadar dar tut,
her dış yazmayı —özellikle logu— veri ifşası açısından incele. Bir AI önerisi
debug amacıyla bütün nesneyi logluyorsa alanları ve logun kalıcılığını denetlemeden
kabul etmeyin.

## Real World Examples

### Senaryo 1: Kampanya süresi

İlk sürüm:

```js
function calculateCampaignPrice(price) {
  const hour = new Date().getHours();

  if (hour >= 18 && hour < 21) {
    return price * 0.8;
  }

  return price;
}
```

Fonksiyonun görünür girdisi `price`, gizli girdisi sistem saatidir. Saat
18.00'de test geçen kod 17.59'da farklı sonuç üretir. Saf çekirdek:

```js
function calculateCampaignPrice(price, hour) {
  const isCampaignHour = hour >= 18 && hour < 21;
  return isCampaignHour ? price * 0.8 : price;
}

const hour = new Date().getHours();
const finalPrice = calculateCampaignPrice(100, hour);
```

Gerçek saat yalnız sınırda okunur. Çekirdek için `17`, `18`, `20` ve `21`
değerleriyle sınır testleri yazılır. İş kuralı ile saat edinme mekanizması ayrı
değişebilir.

### Senaryo 2: Sipariş numarası

```js
let nextOrderId = 1;

function createOrder(items) {
  const order = { id: nextOrderId, items };
  nextOrderId += 1;
  return order;
}
```

Bu fonksiyon çağrı sırasına bağlıdır. Aynı `items` girdisi farklı id üretir.
Bu gereksiz bir etki olmayabilir; benzersiz id gereksinimi gerçektir. Fakat id
üretimi ile sipariş modelleme ayrılabilir:

```js
function buildOrder(id, items) {
  return { id, items: [...items] };
}

function createOrder(items, generateId) {
  const id = generateId();
  return buildOrder(id, items);
}
```

`buildOrder` saf çekirdektir. `generateId` etkili bağımlılıktır. Test sabit
`() => 42` fonksiyonu verebilir. Üretim ortamı veritabanı veya güvenilir id
sağlayıcı kullanabilir. Etki ortadan kalkmadı; sözleşmede görünür oldu.

### Senaryo 3: Yapılandırma gölgelemesi

```js
const timeout = 5000;

function requestPreview() {
  const timeout = 1000;

  return {
    previewTimeout: timeout,
    defaultTimeout: 5000,
  };
}
```

Kod çalışır fakat ikinci `5000` ayrı sabit olduğu için dış `timeout` ile
ilişkisi görünmez. Gölgeleme bilinçli olsa bile anlam belirsizdir. Daha açık
adlandırma:

```js
const defaultTimeoutMs = 5000;

function requestPreview() {
  const previewTimeoutMs = 1000;

  return {
    previewTimeout: previewTimeoutMs,
    defaultTimeout: defaultTimeoutMs,
  };
}
```

Burada amaç her gölgelemeyi mekanik olarak kaldırmak değil; aynı adın iki farklı
iş anlamını gizlemesini önlemektir.

### Senaryo 4: Testler arasında sızan durum

```js
let failedAttempts = 0;

function verifyPassword(isCorrect) {
  if (!isCorrect) {
    failedAttempts += 1;
  }

  return failedAttempts < 3;
}
```

Bir test iki başarısız deneme yapar, sonraki test temiz başlangıç beklerse test
sırası sonucu değiştirir. Durumu açık modelleyebiliriz:

```js
function verifyPassword(state, isCorrect) {
  const failedAttempts = isCorrect
    ? state.failedAttempts
    : state.failedAttempts + 1;

  return {
    nextState: { failedAttempts },
    allowed: failedAttempts < 3,
  };
}
```

Her test başlangıç durumunu sağlar ve sonraki durumu kontrol eder. Gerçek
uygulamadaki etkili sınır bu durumu kullanıcı kaydına yazar. Bu model daha fazla
veri taşır fakat geçişi görünür ve tekrarlanabilir kılar.

### Senaryo 5: Kapanışla bağımsız oturum

```js
function createSession(userId) {
  let actions = 0;

  return {
    recordAction() {
      actions += 1;
      return actions;
    },
    summary() {
      return { userId, actions };
    },
  };
}
```

Her `createSession` çağrısı kendi `userId` ve `actions` bağlarını oluşturur.
Dış kod `actions` değerini doğrudan değiştiremez; yalnız iki yöntem üzerinden
erişir. Bu kapsülleme kullanışlıdır. Fakat oturum nesnesi uzun süre global bir
listede tutulursa kapanışın eriştiği durum da erişilebilir kalır. Kapanış hem
güçlü bir kapsülleme aracı hem yaşam süresini uzatabilecek bir başvuru yoludur.

### Senaryo 6: Konsola yazan doğrulama

```js
function validateAge(age) {
  if (age < 18) {
    console.log("Yaş uygun değil");
    return false;
  }

  console.log("Yaş uygun");
  return true;
}
```

Doğrulama kararı ve sunum etkisi karışmıştır. Başka bir arayüz aynı kuralı
kullanmak isterse konsol mesajını engellemek zorundadır. Ayrılmış sürüm:

```js
function validateAge(age) {
  if (!Number.isInteger(age) || age < 0) {
    return { valid: false, reason: "invalid-age" };
  }

  if (age < 18) {
    return { valid: false, reason: "underage" };
  }

  return { valid: true, reason: null };
}

const result = validateAge(16);
console.log(result.valid ? "Yaş uygun" : result.reason);
```

Çekirdek iş kararını result object ile döndürür. Sınır mesajın Türkçe, İngilizce,
web veya terminal sunumunu seçebilir.

## Common Mistakes

### 1. Kapsamı çalışma sırasıyla açıklamak

“`showLabel`, `caller` içinden çağrıldığı için caller'ın değişkenini görür”
yanlıştır. JavaScript'te sözcüksel tanım konumu belirleyicidir. Teşhis için
fonksiyon tanımlarını kutularla çevreleyin; çağrı oklarını kapsam oku olarak
kullanmayın.

### 2. Gölgelemeyi yeniden atama sanmak

İç kapsamda `const value = ...` yeni bağ oluşturur. `value = ...` ise arama
sonucunda bulunan mevcut bağı yeniden atar. Bildirim anahtar sözcüğünü, kapsam
sınırını ve blok sonrası dış değeri birlikte kontrol edin.

### 3. Her süslü parantezi `var` kapsamı sanmak

`if`, `for` ve çıplak blok `let`/`const` bağlarını sınırlar; `var` için sıradan
blok kapsamı oluşturmaz. Eski kodu modernleştirirken yalnız `var` kelimesini
`let` ile değiştirmek davranışı değiştirebilir. Her kullanım noktasını ve
yeniden bildirim durumunu test edin.

### 4. Kapsam bittiğinde nesnenin hemen silindiğini söylemek

Adın erişilemez olması, nesnenin tüm başvuru yollarını kaybettiği anlamına
gelmez. Dönüş değeri, global koleksiyon, zamanlayıcı veya kapanış nesneyi
erişilebilir tutabilir. Ayrıca geri kazanımın kesin zamanı program sözleşmesi
değildir.

### 5. Kapanışın değeri kopyaladığını varsaymak

Kapanış çoğu örnekte dış bağa erişimi korur. Dış bağ değişirse sonraki okuma
değişen değeri görebilir. Zaman çizelgesi oluşturup her çağrıdaki bağ değerini
yazın; “fotoğraf” benzetmesine güvenmeyin.

### 6. Global sabiti global değiştirilebilir durumla eşitlemek

Değişmez bir yapılandırma sabiti ile geniş kapsamda değiştirilen sayaç aynı risk
profilinde değildir. Yine de sabitin nesne olması ve iç özelliklerinin mutable
kalması mümkündür. Erişim ve yazma yetkisini gerçek davranış üzerinden inceleyin.

### 7. Yalnız dış yazmaları yan etki saymak

Saat, rastgelelik, dosya veya global yapılandırma okuması da sonucu gizli girdiye
bağlar. Etki envanterinde okuma ve yazma sütunlarını ayrı tutun.

### 8. `console.log` ile `return`ü aynı sonuç kanalı sanmak

Konsol çıktısı dış etkidir; çağrı ifadesinin değeri değildir. Başka fonksiyon
konsoldaki metni doğal veri akışı olarak kullanamaz. Hesap sonucunu return edin,
sunumu sınırda yapın.

### 9. Saflığı sözdizimiyle ölçmek

`.push`, atama veya döngü görmek otomatik olarak dış etki kanıtı değildir. Yeni
yerel nesnedeki değişim dışarıdan gözlenmeyebilir. Tersine hiç atama görünmeyen
`Date.now()` çağrısı aynı girdide farklı sonuç üretir. Veri sahipliğini ve
gözlenebilirliği izleyin.

### 10. Bütün etkileri yok etmeye çalışmak

Etkisiz bir program kullanıcıya cevap veremez. Amaç etkileri açık sınıra taşımak
ve hesaplama çekirdeğini gereksiz etkilerden korumaktır. Etkinin neden gerekli
olduğunu ve hangi sözleşmeyle yürüdüğünü belgeleyin.

### 11. Refactoring sırasında davranışı da değiştirmek

Global bağımlılığı kaldırırken aynı anda kuralı, mesajı ve hata biçimini
değiştirirseniz regresyonu ayırmak zorlaşır. Önce mevcut davranışı testle kilitleyin,
sonra küçük taşıma adımları yapın.

### 12. AI açıklamasını kanıt sanmak

Bir modelin “bu closure bellekte kalır” veya “bu fonksiyon saftır” demesi yeterli
değildir. Kapsam izi, başvuru yolu, etki envanteri ve tekrarlanabilir test isteyin.
Resmî dokümantasyonla çelişen açıklamayı reddedin.

## Best Practices

### Bağı kullanıma yakın ve anlamlı kapsamda bildir

Bir değeri yalnız tek dal kullanıyorsa o dalda bildirin. Fakat aynı kavramı üç
dal kullanıyorsa ortak üst kapsam daha açık olabilir. Amaç satır sayısını değil,
sahipliği görünür kılmaktır.

### Yeniden atama gerekmiyorsa `const` kullan

`const`, bağın başka değere yeniden atanmasını önler ve okura niyet bildirir.
Nesnenin derin değişmezliğini garanti etmez. Yeniden atama gerçek algoritma
durumuysa `let` kullanın ve değişim noktalarını küçük tutun.

### Gölgelemeyi bilinçli kullan

Aynı ad aynı anlamı kısa bir dönüşümde sürdürüyor ve dış bağla karışmıyorsa
gölgeleme okunabilir olabilir. Aynı ad farklı iş kavramlarını temsil ediyorsa
ayırt edici adlar seçin. Linter kuralını bağlamdan bağımsız ahlaki yasa olarak
değil, hata riskini düşüren ekip politikası olarak değerlendirin.

### Durumun tek sahibini belirle

Birden fazla modül aynı mutable değeri doğrudan yazmasın. Değişimi adlandırılmış
işlemler üzerinden yönetin. Türetilen veriyi mümkünse tek doğruluk kaynağından
hesaplayın.

### Fonksiyon sözleşmesinde bütün girdileri görünür kıl

Saat, oran, yapılandırma ve sağlayıcı sonucu davranışı belirliyorsa bunları
parametre veya açık bağımlılık olarak modelleyin. Her global okumayı mekanik
olarak parametreye çevirmeyin; önce sorumluluk sınırını belirleyin.

### Hesaplamayı I/O'dan ayır

Dosya, ağ, kullanıcı girdisi ve konsol işlemini küçük sınıra koyun. Parse,
doğrulama ve hesaplama adımlarını değer alan ve değer döndüren fonksiyonlara
ayırın. Böylece çekirdek farklı arayüzlerde tekrar kullanılabilir.

### Etkiyi fonksiyon adı ve dönüş modeliyle görünür yap

`getUser` gibi adın arkasında kullanıcıyı değiştirmek şaşırtıcıdır. `saveUser`,
`recordAttempt` veya `sendNotification` etkinin niyetini gösterir. Başarı,
başarısızlık ve üretilen değişikliği tutarlı result object ile döndürün.

### Normal, sınır ve geçersiz durumları ayrı test et

Kapsam için en iç bağ, dış bağ, gölgeleme ve bulunamayan ad; saflık için aynı
girdinin tekrarı, farklı gizli ortam ve dış durumun önce/sonra değeri test
edilmelidir. Yalnız happy path, gizli kanal sorununu yakalamaz.

### Refactoring karar günlüğü tut

Hangi gizli bağımlılığı neden taşıdığınızı, davranışı hangi testlerin koruduğunu
ve hangi etkinin bilinçli olarak sınırda kaldığını kısa kaydedin. Bu günlük,
kod inceleme ve gelecekteki AI denetimi için bağlam sağlar.

## Hands-on Exercise

Bu uygulamada kapsam, gölgeleme ve yan etki sorunlarını içeren küçük bir sipariş
programını teşhis edip yeniden tasarlayacaksınız. Önce kodu kopyalayın fakat
hemen çalıştırmayın:

```js
let taxRate = 0.2;
let processedOrders = 0;

function processOrder(order) {
  const taxRate = order.customerType === "student" ? 0.1 : 0.2;
  let total = 0;

  for (const item of order.items) {
    let total = item.price * item.quantity;
    console.log("Satır toplamı:", total);
  }

  total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  processedOrders += 1;
  order.status = "processed";

  const finalTotal = total * (1 + taxRate);
  console.log("Sipariş:", order.id, "Toplam:", finalTotal);

  return true;
}
```

### Aşama 1 — Kapsam haritası

Global, fonksiyon, döngü ve callback kapsamlarını kutularla çizin. Her `taxRate`
ve `total` bildirimi için ayrı bağ kimliği verin: örneğin `total-A`, `total-B`.
Şu kullanım noktalarını en içten dışa izleyin:

- döngü içindeki `total`;
- `reduce` sonrasındaki `total`;
- `finalTotal` ifadesindeki `taxRate`;
- fonksiyon sonrasında global `taxRate`;
- `processedOrders += 1` içindeki ad.

Her iz için “bakılan kapsam, bağ bulundu mu, arama durdu mu?” sütunları olan
tablo oluşturun.

### Aşama 2 — Gölgeleme ve yeniden atama

İki `taxRate` ve iki `total` çiftini sınıflandırın. Hangileri gölgeleme, hangileri
yeniden atamadır? Döngü içindeki `total` atamasının fonksiyon düzeyindeki toplamı
neden değiştirmediğini kendi kelimelerinizle açıklayın. Ardından iç bağlardan
birinin adını anlamı belirgin olacak biçimde değiştirin; davranışı koruyun.

### Aşama 3 — Etki envanteri

Dört sütunlu tablo çıkarın:

| Açık girdiler | Gizli okumalar | Dönüş | Dış yazmalar |
|---|---|---|---|

En az `order`, `processedOrders`, `console`, `order.status` ve dönüş değerini
doğru sütuna yerleştirin. Global `taxRate` gerçekten okunuyor mu, yoksa yerel
bağ tarafından gölgelenmiş mi? Varsayımla değil çözümleme iziyle karar verin.

### Aşama 4 — Saf çekirdeği tasarla

`calculateOrder(order, taxRate)` adlı saf bir fonksiyon yazın. Fonksiyon:

- girdi nesnesini değiştirmemeli;
- satır toplamlarını bir dizi olarak üretmeli;
- ara toplam, vergi miktarı ve genel toplamı döndürmeli;
- boş sepet, sıfır miktar ve geçersiz fiyat için tanımlı davranış göstermeli;
- konsola yazmamalı ve global sayaç okumamalıdır.

Önerilen sonuç biçimi:

```js
{
  ok: true,
  value: {
    lineTotals: [40, 30],
    subtotal: 70,
    taxAmount: 7,
    total: 77,
  },
}
```

Geçersiz girdide `ok: false` ve anlamlı `errors` listesi döndürün. Hata
fırlatma veya result object seçiminizi kısa gerekçeyle kaydedin.

### Aşama 5 — Etkili sınırı tasarla

`processOrder` fonksiyonu hesap çekirdeğini çağırmalı; başarılıysa gerekli
konsol çıktısını yazmalı ve sayaç/durum etkisini açıkça uygulamalıdır. Daha
güçlü çözümde global sayaç yerine mevcut sayacı parametre alıp `nextState`
döndüren bir koordinasyon modeli kullanın.

Örnek sorumluluk ayrımı:

```js
const calculation = calculateOrder(order, selectedTaxRate);

if (!calculation.ok) {
  return calculation;
}

printOrder(order.id, calculation.value);

return {
  ok: true,
  value: calculation.value,
  nextStatus: "processed",
};
```

Bu örneği körü körüne tamamlanmış cevap olarak kullanmayın. `selectedTaxRate`
değerinin sahibi, status değişiminin uygulanacağı sınır ve sayacın saklanacağı
yer hakkında kendi kararınızı verin.

### Aşama 6 — Test matrisi

En az şu vakaları çalıştırın:

1. Tek ürünlü normal sipariş.
2. Birden fazla ürün.
3. Öğrenci ve normal müşteri oranı.
4. Boş ürün listesi.
5. Sıfır miktar.
6. Negatif fiyat.
7. Eksik `items` alanı.
8. Aynı input nesnesiyle iki çağrı.
9. Çağrıdan önce ve sonra input nesnesinin karşılaştırılması.
10. Aynı açık girdilerle aynı sonuç testi.

Testleriniz yalnız çıktıyı yazdırmamalı; beklenen değerle karşılaştırmalıdır.
Input nesnesinin değişmediğini doğrulamak için çağrı öncesi derin kopya veya
beklenen alan kontrolleri kullanın.

### Aşama 7 — AI karşılaştırması

Önce çözümünüzü ve testlerinizi tamamlayın. Sonra AI'dan aynı refactoring'i
isteyin. İki çözümü şu ölçütlerle karşılaştırın:

- kapsam zinciri doğru mu;
- gizli girdilerin tümü tanımlanmış mı;
- input mutation kaldırılmış mı;
- hesaplama ve sunum ayrılmış mı;
- result shape bütün yollarda tutarlı mı;
- boundary ve invalid testler var mı;
- davranış değişikliği gerekçesiz yapılmış mı?

AI önerisinden kabul ettiğiniz ve reddettiğiniz en az bir kararı, kanıtıyla
yazın. “Benimki daha iyi” veya “AI daha kısa yazdı” kanıt değildir.

### Tamamlanma ölçütü

Görev; çalışan koddan fazlasını gerektirir. Tesliminizde kapsam diyagramı,
çözümleme tablosu, etki envanteri, saf çekirdek, etkili sınır, en az on test ve
karar günlüğü bulunmalıdır. `V01-LO022` kapsam izi olmadan, `V01-LO023` ise
önce/sonra etki kanıtı olmadan geçilmiş sayılmaz.

## Reflection Questions

1. Bu chapter'dan önce kapsam ile yaşam süresini nasıl açıklıyordunuz? Hangi
   örnek eski modelinizi geçersiz kıldı?
2. Bir fonksiyon başka fonksiyon içinden çağrıldığında hangi dış bağları görür?
   Cevabınızı tanım ve çağrı konumunu ayırarak yazın.
3. Gölgeleme ile yeniden atamayı ayırmak için kullanacağınız üç kanıt nedir?
4. `var` ile blok kapsamı hakkındaki en riskli yanlış varsayımınız hangisiydi?
5. Kapanışın bir değer kopyası değil bağa erişim koruduğunu hangi deneyle
   gösterirsiniz?
6. Mevcut bir projenizde en geniş kapsamlı mutable durum hangisi? Sahibi kim?
7. Bir fonksiyonun gizli okuması dış yazma yapmasa bile neden test maliyeti
   oluşturabilir?
8. Yerel mutation hangi koşullarda saf sonuçla uyumlu olabilir?
9. Bütün yan etkileri kaldırmak neden gerçekçi değildir? Hangi etkileri hangi
   sınırda tutardınız?
10. AI tarafından üretilen kodda ilk çıkaracağınız etki envanteri hangi dört
    sütundan oluşur?
11. Saf çekirdek–etkili sınır ayrımı hangi durumda gereksiz karmaşıklık yaratabilir?
12. Bu hafta kendi kodunuzda uygulayacağınız tek kapsam veya etki iyileştirmesi
    nedir? Dosya, tarih ve doğrulama ölçütüyle yazın.

## Chapter Summary

Kapsam, bir bağın kaynak kodun hangi bölgesinden erişilebildiğini; yaşam süresi
ise durumun ne zaman var veya erişilebilir kaldığını anlatır. Ad çözümleme,
kullanım noktasındaki en dar sözcüksel kapsamdan başlar ve ilk eşleşen bağda
durur. JavaScript'te global, modül, fonksiyon ve blok kapsamları bulunur;
`let`/`const` blokla sınırlanırken `var` sıradan blok tarafından sınırlanmaz.

Gölgeleme, içte yeni ve aynı adlı bağ oluşturur; dış bağı değiştirmez. Yeniden
atama mevcut bağın değerini değiştirir. Kapanış, tanımlandığı çevredeki bağlara
erişimi koruyarak yerel durumun dış çağrı tamamlandıktan sonra da erişilebilir
kalmasını sağlayabilir. Bu, kapsam bitişinin anlık bellek silinmesi olmadığını
gösterir.

Yan etki, return edilen değerin dışında dış durumu okuma veya değiştirmedir.
Saat ve rastgelelik gizli okuma; konsol, dosya ve global mutation dış yazmadır.
Saf fonksiyon aynı açık girdide aynı sonucu üretir ve önceden var olan dış
durumu değiştirmez. Gerçek yazılım etkisiz olmaz; hesaplama saf çekirdekte,
zorunlu etkileşim küçük ve görünür etkili sınırda tutulur. Mühendislik kanıtı;
kapsam izi, etki envanteri, normal/sınır/geçersiz testler ve davranışı koruyan
önce/sonra karşılaştırmasıdır.

## Key Takeaways

- Ad, bağ ve değer farklı kavramlardır.
- Kapsam “nerede erişilir?”, yaşam süresi “ne zaman erişilebilir?” sorusudur.
- JavaScript adları çağrı sırasına değil sözcüksel iç içeliğe göre çözümler.
- Arama kullanım noktasından, en iç kapsamdan dışarı doğru yapılır.
- `let` ve `const` blok kapsamlı; `var` çoğunlukla fonksiyon kapsamlıdır.
- Gölgelemede iki bağ vardır; yeniden atamada bulunan mevcut bağ değişir.
- Kapanış yalnız anlık değer kopyası değil, dış bağa erişim koruyabilir.
- Dar kapsam sahipliği ve değişikliğin etki alanını görünür kılar.
- Global mutable durum test sırasını ve çağrı sırasını davranışa katabilir.
- Yan etki envanteri gizli okumaları da dış yazmaları da içerir.
- `console.log` bir etki, `return` açık veri akışıdır.
- Saflık sözdizimiyle değil gözlenebilir davranışla değerlendirilir.
- Yerel ve dışarıdan gözlenemeyen mutation saf hesapla uyumlu olabilir.
- Amaç bütün etkileri silmek değil, onları küçük ve açık sınırda toplamaktır.
- Saat ve rastgelelik açık bağımlılık olarak taşınırsa testler deterministik olur.
- Refactoring öncesi mevcut davranış testlerle kaydedilmelidir.
- AI cevabı kapsam izi ve etki kanıtı olmadan kabul edilmemelidir.

## Further Reading

Önce ECMAScript çevre kayıtları ve `GetIdentifierReference` algoritmasının
özetini, ardından MDN Scope, Blocks ve Closures rehberlerini okuyun. Resmî
belirtim dili ağır gelirse önce bu chapter'daki arama algoritmasını bir örnek
üzerinde çalıştırın; sonra belirtimde `HasBinding` ve `[[OuterEnv]]` adımlarını
işaretleyin. Bellek yönetimi rehberini “hangi anda silinir?” cevabı aramak için
değil, erişilebilirlik modelinin sınırlarını anlamak için okuyun.

Saflık ve etki sınırı için React'in “Keeping Components Pure” belgesi somut
JavaScript örnekleri sunar; ancak React kuralını bütün programlama bağlamlarının
tek tanımı sanmayın. Microsoft'un pure-function refactoring belgesi ve farklı
dillerin scope kuralları karşılaştırmalı düşünmenize yardım eder. Sonraki
chapter olan C16'ya geçmeden önce en az bir gerçek fonksiyonunuzun etki
envanterini çıkarın ve saf çekirdek adayı belirleyin.

## References

1. [ECMAScript 2025 — Executable Code and Execution Contexts](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html)
2. [ECMAScript 2025 — Environment Records](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html#sec-environment-records)
3. [ECMAScript 2025 — GetIdentifierReference](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html#sec-getidentifierreference)
4. [MDN — Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
5. [MDN — Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
6. [MDN — Block Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
7. [MDN — `var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
8. [MDN — `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
9. [MDN — Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
10. [MDN — Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management)
11. [React — Keeping Components Pure](https://react.dev/learn/keeping-components-pure)
12. [Microsoft Learn — Refactor into Pure Functions](https://learn.microsoft.com/en-us/dotnet/standard/linq/refactor-pure-functions)
13. [Python 3.14 FAQ — Local and Global Variables](https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python)
14. [Java Language Specification 26 — Names and Scope](https://docs.oracle.com/javase/specs/jls/se26/html/jls-6.html)
15. [ACM/IEEE-CS/AAAI CS2023](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf)
16. [SEI CERT — Minimize the Scope of Variables](https://wiki.sei.cmu.edu/confluence/display/java/DCL19-J.+Minimize+the+scope+of+variables)
17. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations)
18. [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
