# Değişkenler (Variables) ve Durum (State)

Değişkenler, bir programın o anda doğru olan bilgiyi hatırlamasını, kullanmasını
ve koşullar değiştiğinde güncellemesini sağlar. Bu ders önce soyut bir durum
modeli kurar, ardından JavaScript'in bu modeli `var`, `let` ve `const` ile nasıl
ifade ettiğini gösterir.

Yardımcı materyaller:

- [Aşamalı kod örnekleri](./examples.md)
- [Tekrar kullanılabilir ders varlıkları](./lesson-assets.md)
- [Görselleştirme notları](./visualization-notes.md)

## 1. Giriş

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

## 2. Öğrenme Hedefleri

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

## 3. Ön Koşullar

Şunları yapabiliyor olmalısınız:

- bir değeri veri türünden ayırmak;
- temel JavaScript ifadelerini okumak;
- sayı, metin, mantıksal değer, `null`, `undefined` ve nesneleri tanımak;
- kısa bir komut dizisini yukarıdan aşağıya izlemek;
- program çalışırken durumun değişebileceğini açıklamak.

Kanonik ön koşul `V01-C05`, Values and Data Types bölümüdür.

## 4. Motivasyon

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

## 5. Zihinsel Model

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

## 6. Kuram

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

## 7. Görsel Açıklama Önerileri

Ayrıntılı üretim sözleşmeleri
[visualization-notes.md](./visualization-notes.md) dosyasındadır.

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

## 8. Aşamalı Kod Örnekleri

Örnekler altı düşünme düzeyinde ilerler:

1. bir değeri `const` ile adlandırmak;
2. bilinçli değişimi `let` ile modellemek;
3. atama dizisini durum tablosuna dönüştürmek;
4. yeniden atama ile nesne mutasyonunu ayırmak;
5. blok ve fonksiyon kapsamını karşılaştırmak;
6. ilklendirme zamanını ve Geçici Ölü Bölgeyi tahmin etmek.

Çalıştırılabilir örnekler ve beklenen çıktılar
[examples.md](./examples.md) dosyasındadır. Sözdizimi hatası örnekleri ayrı
tutulur; tek bir hata tüm kaynak biriminin ayrıştırılmasını engeller.

## 9. Yaygın Hatalar

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

## 10. En İyi Uygulamalar

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

## 11. Gerçek Dünya Senaryoları

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

## 12. Mülakat Notları

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

## 13. Bölüm Özeti

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

## 14. Temel Çıkarımlar

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

## 15. Sonraki Bölüme Hazırlık

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
