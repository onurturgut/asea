---
document_type: "chapter"
chapter_id: "V01-C24"
volume_id: "V01"
title: "Hatalar ve Başarısızlık Türleri"
slug: "hatalar-ve-basarisizlik-turleri"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "10-12 saat"
prerequisites:
  - "V01-C08"
  - "V01-C12"
  - "V01-C15"
  - "V01-C18"
learning_outcomes:
  - "V01-LO038"
  - "V01-LO039"
related_lab_ids:
  - "V01-C24-L01"
related_assessment_ids:
  - "V01-C24-AS01"
next_chapter_id: "V01-C25"
blueprint_id: "V01-C24-BP01"
last_updated: "2026-08-01"
---

# Hatalar ve Başarısızlık Türleri

## Learning Objectives

Bir öğrenci ASEA'da ilerleme yüzdesini `80` olarak kaydediyor. Ekran ise `%800`
gösteriyor. Program durmadı, kırmızı bir hata mesajı çıkmadı ve JavaScript hiçbir
istisna üretmedi. Yine de sistem doğru çalışmadı. Başka bir öğrenci ilerleme
alanına `"seksen"` yazdığında program bir `TypeError` ile duruyor. İki olay da
günlük dilde “hata”dır; fakat kanıtları, nedenleri ve doğru müdahaleleri aynı değildir.

Bu chapter sonunda:

- Bir belirtiyi hemen çözüme atlamadan gözlemlenebilir kanıt olarak yazabileceksiniz.
- Kusur (defect), yanlış iç durum (error state), başarısızlık (failure) ve
  istisna (exception) kavramlarını birbirinden ayırabileceksiniz.
- Sözdizimi, çalışma zamanı, mantık, sözleşme ve ortam kaynaklı başarısızlıkları
  kanıta göre sınıflandırabileceksiniz (`V01-LO038`).
- Bir girdi sınırı için kabul, reddetme, kullanıcı mesajı, tanılama bilgisi ve
  kurtarma davranışını içeren hata sözleşmesi tasarlayabileceksiniz (`V01-LO039`).
- Hatanın bağlamını kaybetmeden katmanlar arasında nasıl ilerlediğini izleyebileceksiniz.
- Sessizce yutmak, her şeyi `try...catch` ile sarmak ve kullanıcıya teknik ayrıntı
  göstermek gibi yaygın hataları teşhis edebileceksiniz.

Başarı ölçünüz “hata çıkmadı” olmayacak. Bir olay gerçekleştiğinde ne olduğunu,
nerede başladığını, kullanıcıya ne gösterileceğini ve sistemin bundan sonra ne
yapacağını açıklayabilmeniz gerekecek.

## Prerequisites

C24 yeni sözdizimi yarışına girmez. Daha önce öğrendiğiniz araçları güvenilir bir
program davranışı tasarlamak için bir araya getirir:

- C08'den gelen girdi–dönüşüm–çıktı hattı ve doğrulama düşüncesi,
- C12'den gelen bileşik kontrol akışı ve hangi dalın çalıştığını izleme,
- C15'ten gelen kapsam, yaşam süresi ve yan etkinin nerede oluştuğunu bulma,
- C18'den gelen kayıt modeli, alan anlamı ve veri değişmezleri.

Kısa hazırlık kontrolü:

```js
function updateProgress(progress, completedChapter) {
  if (completedChapter) {
    progress += 10;
  }

  return progress;
}
```

Notlarınıza bakmadan cevaplayın:

1. `progress` hangi bilgiyi temsil ediyor ve türü ne olmalı?
2. `completedChapter` neden boolean olmalıdır?
3. `progress = 95` iken fonksiyon hangi değeri döndürür?
4. Bu değer ASEA'nın `0–100` değişmezini koruyor mu?

Dördüncü soruda duraksadıysanız C18'deki veri değişmezi bölümünü tekrar edin.
Burada amaç hız değil; sonraki kavramı taşıyacak sağlam zemindir.

## Estimated Study Time

Bu chapter için önerilen toplam çalışma süresi **10–12 saattir**:

| Çalışma | Süre |
|---|---:|
| Ön bilgi kontrolü ve ilk okuma | 60 dakika |
| Hata anatomisi ve sınıflandırma | 150 dakika |
| Kod izleri ve birlikte çözülen örnek | 120 dakika |
| Hata sözleşmesi tasarımı | 120 dakika |
| Alıştırma, hata avı ve quiz | 90 dakika |
| Lab ve bağımsız uygulama | 150–210 dakika |

Tek oturumda bitirmeye çalışmayın. Özellikle sınıflandırma tablosundan sonra kısa
ara verin; dönüşte örnekleri isimlerini kapatarak yeniden sınıflandırın.

## Introduction

Bir öğretmenin sınav kâğıdında yalnızca “yanlış” yazdığını düşünün. Öğrenci
işlem hatası mı yaptı, soruyu mu yanlış anladı, eksik bilgi mi kullandı, yoksa
cevabı doğru olduğu hâlde yanlış kutuya mı yazdı? “Yanlış” sonucu gerçektir ama
öğrenmek ve düzeltmek için yeterli değildir.

Programlarda da kullanıcı “çalışmıyor” dediğinde elimizde önce bir **belirti
(symptom)** vardır. Belirti; beklenen ile gözlenen arasındaki farktır:

> “Kaydet düğmesine bastığımda not listede görünmedi.”

Bu cümle henüz neden söylemez. Veritabanı bozuk olabilir, koşul yanlış olabilir,
girdi reddedilmiş olabilir veya arayüz eski veriyi gösteriyor olabilir. Profesyonel
yaklaşım, belirtiyi küçümsemeden fakat nedeni de tahmin etmeden kanıt toplamaktır.

Bu chapterın hikâyesinde ASEA'nın “chapter ilerlemesi kaydetme” sınırını
olgunlaştıracağız. Önce başarısızlıkların birbirinden nasıl ayrıldığını görecek,
sonra kullanıcı hatası ile programcı hatasına aynı tepkiyi vermeyen açık bir
sözleşme kuracağız.

Başlamadan tahmin edin: Kullanıcının `-10` ilerleme değeri girmesi bir exception
mıdır, failure mıdır, yoksa contract ihlali midir? Chapter sonunda aynı soruya
tek etiketle değil, olay zinciriyle cevap vereceksiniz.

## Core Concepts

### Önce olay zincirini görelim

Bir başarısızlık genellikle tek noktadan ibaret değildir:

```text
İnsan kararı veya dış koşul
        ↓
Kodda kusur / geçersiz girdi
        ↓
Programın iç durumu beklenenden sapar
        ↓
Sapma sınırı aşarsa kullanıcı yanlış davranışı görür
```

Her ok zorunlu değildir. Kodda bir kusur yıllarca hiç tetiklenmeden kalabilir.
Geçersiz girdi sınırda reddedilirse yanlış iç duruma dönüşmez. Bir exception
oluşabilir ama uygun yerde ele alındığı için kullanıcıya failure olarak yansımayabilir.

### ASEA'nın çalışma sözlüğü

Kaynaklar “error”, “fault”, “defect” ve “failure” kelimelerini farklı standartlarda
biraz farklı kullanabilir. Bu yüzden ekip içinde tek bir çalışma sözlüğü ilan ederiz:

| Kavram | Bu chapterdaki anlamı | Örnek |
|---|---|---|
| Kusur (defect/fault) | Kod veya tasarımdaki yanlışlık | Üst sınır kontrolünün unutulması |
| Yanlış iç durum (error state) | Program durumunun beklenenden sapması | `progress` değerinin `105` olması |
| Başarısızlık (failure) | Dışarıdan gözlenen davranışın sözleşmeden sapması | Ekranda `%105` gösterilmesi |
| İstisna (exception) | Normal akışı kesip çağrı zincirinde ilerleyen olay | `throw new TypeError(...)` |
| Belirti (symptom) | Kullanıcının veya geliştiricinin gözleyebildiği işaret | “Kaydetme sonrası değer değişmedi” |

Bu ayrımın amacı kelime tartışması kazanmak değildir. Doğru müdahaleyi seçmektir.
Kusur kodda düzeltilir; yanlış durumun yayılması engellenir; failure kullanıcı
etkisiyle değerlendirilir; exception ise yalnızca onu anlamlı biçimde ele
alabilecek sınırda yakalanır.

### Beş failure sınıfı

#### 1. Sözdizimi başarısızlığı — syntax failure

```text
const progress = 80;
console.log(progress;
```

Parantez kapanmadığı için JavaScript kaynak metni geçerli bir program olarak
ayrıştıramaz. Asıl kanıt, çalıştırma başlamadan verilen `SyntaxError` ve konum
bilgisidir. “Sonuç yanlış çıktı” demeyiz; program o noktaya kadar yürütülebilir
bir yapıya dönüşememiştir.

#### 2. Çalışma zamanı başarısızlığı — runtime failure

```js
function normalizeTitle(title) {
  return title.trim().toLowerCase();
}

normalizeTitle(undefined);
```

Kod sözdizimsel olarak geçerlidir. Fonksiyon çağrılır; fakat `undefined` üzerinde
`trim` metodu aranırken işlem yapılamaz ve `TypeError` oluşur. Kanıt; exception
türü, mesajı, çağrı izi ve çağrı anındaki değerdir.

#### 3. Mantık başarısızlığı — logic failure

```js
function completionRate(completed, total) {
  return completed * total;
}

completionRate(8, 10);
```

Program çalışır ve `80` döndürür. Bu örnek tesadüfen doğruymuş gibi görünür.
`completionRate(3, 10)` ise `30` döndürerek yine doğru görünür; fakat
`completionRate(3, 12)` sonucu `36` olur, beklenen `25`tir. Kusur, doğru formül
olan `(completed / total) * 100` yerine çarpma kullanılmasıdır. Exception yoktur;
beklenen ve gerçek çıktıyı karşılaştıran örnekler kanıt sağlar.

#### 4. Sözleşme başarısızlığı — contract failure

Fonksiyon “progress, 0 ile 100 arasında sonlu bir number olmalıdır” diyorsa
`-10`, `140`, `NaN` ve `"80"` bu sınırın dışındadır. Burada önemli soru şudur:
Sözleşme bu girdiler için ne yapılacağını söyledi mi? Sessizce kabul etmek,
belirsiz `false` döndürmek ve açıklamasız exception atmak farklı davranışlardır.

Sözleşme yalnızca kabul edilen girdiyi değil şunları da açıklamalıdır:

- Geçersizliğin nasıl tanınacağı,
- çağıranın hangi sonucu alacağı,
- kullanıcıya hangi mesajın gösterileceği,
- geliştirici için hangi tanı bilgisinin korunacağı,
- tekrar deneme veya güvenli geri dönüş olup olmadığı.

#### 5. Ortam kaynaklı başarısızlık — environmental failure

Doğru kod ve doğru girdi, gerekli dış koşul yoksa yine çalışmayabilir. Yapılandırma
değeri bulunmayabilir, depolama alanı dolabilir, ağ bağlantısı kesilebilir veya
izin reddedilebilir. Bu olaylar kodun sözdizimi kusuru değildir.

Şimdilik dış servis kullanmadan davranışı modelleyelim:

```js
function readStudyMode(config) {
  if (!config.studyMode) {
    return {
      ok: false,
      error: {
        code: "CONFIG_MISSING",
        userMessage: "Çalışma modu şu anda başlatılamıyor.",
        diagnostic: "config.studyMode alanı bulunamadı",
      },
    };
  }

  return { ok: true, value: config.studyMode };
}
```

Burada `config` dış ortamdan geldiğini varsaydığımız nesnedir. `ok`, işlemin
başarılı olup olmadığını ayırt eden boolean'dır. Başarılı durumda `value`, başarısız
durumda `error` vardır. Bu yapı, beklenen bir çevresel eksikliği kontrol akışında
görünür yapar.

### Birlikte yapalım: girdi sınırı tasarlamak

ASEA öğrencisinin ilerleme yüzdesini alan bir fonksiyon yazalım. İlk kararımız:
Geçersiz kullanıcı girdisi beklenen bir olaydır; programcı hatası gibi uygulamayı
durdurmak yerine yapılandırılmış sonuç döndüreceğiz.

```js
function validateProgress(rawProgress) {
  const progress = Number(rawProgress);

  if (!Number.isFinite(progress)) {
    return {
      ok: false,
      error: {
        code: "PROGRESS_NOT_NUMBER",
        userMessage: "İlerleme için sayısal bir değer girin.",
        diagnostic: `Dönüştürülemeyen değer: ${String(rawProgress)}`,
        recoverable: true,
      },
    };
  }

  if (progress < 0 || progress > 100) {
    return {
      ok: false,
      error: {
        code: "PROGRESS_OUT_OF_RANGE",
        userMessage: "İlerleme 0 ile 100 arasında olmalıdır.",
        diagnostic: `Sınır dışı ilerleme: ${progress}`,
        recoverable: true,
      },
    };
  }

  return { ok: true, value: progress };
}
```

Her değişkenin görevi:

- `rawProgress`, sınırın dışından gelen ve henüz güvenmediğimiz değerdir. Adındaki
  `raw`, dönüşüm ve doğrulama yapılmadığını hatırlatır.
- `progress`, `Number(...)` dönüşümünden sonraki number adaydır. `const` kullanılır;
  çünkü doğrulama boyunca başka bir değerle değiştirilmez.
- `ok`, iki farklı sonuç biçimini ayıran boolean işarettir. String olarak
  `"success"` da kullanılabilirdi; iki durum için boolean daha küçük bir sözleşmedir.
- `code`, programın karar vermesi için kararlı kimliktir. Kullanıcı mesajını
  karşılaştırmak kırılgandır; metin zamanla veya dile göre değişebilir.
- `userMessage`, teknik bilgisi olmayan öğrenciye ne yapacağını söyler.
- `diagnostic`, geliştiricinin hangi değer ve kuralın sorun oluşturduğunu görmesini
  sağlar. Doğrudan son kullanıcıya gösterilmemelidir.
- `recoverable`, kullanıcının girdiyi düzelterek tekrar deneyip deneyemeyeceğini
  açıkça söyler.

Çalışma izi:

| `rawProgress` | `progress` | İlk koşul | İkinci koşul | Sonuç |
|---|---:|---|---|---|
| `"80"` | `80` | false | false | `{ ok: true, value: 80 }` |
| `"seksen"` | `NaN` | true | çalışmaz | `PROGRESS_NOT_NUMBER` |
| `140` | `140` | false | true | `PROGRESS_OUT_OF_RANGE` |
| `0` | `0` | false | false | başarılı sınır değeri |

Tahmin edin: Boş string `""` hangi dala gider? JavaScript'te `Number("")` sonucu
`0`dır. Ürün sözleşmesi boş alanı kabul etmemeliyse yalnız `Number.isFinite`
yeterli değildir. Önce `rawProgress === ""` kontrolü eklemek gerekir. Bu örnek,
teknik dönüşümün ürün anlamını tek başına belirleyemeyeceğini gösterir.

### Exception ne zaman kullanılır?

JavaScript'te `throw`, bir değeri exception olarak çağrı zincirine gönderir.
Pratikte `Error` veya alt sınıflarından bir nesne atmak; `name`, `message`, stack
ve neden bağlamını korumayı kolaylaştırır.

```js
function calculateRate(completed, total) {
  if (typeof completed !== "number" || typeof total !== "number") {
    throw new TypeError("completed ve total number olmalıdır");
  }

  if (total <= 0) {
    throw new RangeError("total sıfırdan büyük olmalıdır");
  }

  return (completed / total) * 100;
}
```

Burada string girdiyi kabul etmek fonksiyonun ilan edilen programcı sözleşmesine
aykırıdır. Çağıran kodun düzeltilmesi gerekir. Buna karşılık bir form alanında
kullanıcının yanlış yazması beklenen bir durumdur ve yapılandırılmış doğrulama
sonucu daha uygun olabilir.

Bu kesin ve evrensel bir kural değildir. API, ekip ve ürün sözleşmesi seçimi
değiştirebilir. Esas şart, çağıranın başarısızlığı fark edebilmesi ve ne yapacağını
bilmesidir.

### Yayılma ve hata sınırı

Bir exception, onu yakalayan `catch` bulunana kadar çağrı zincirinde ilerler.
Her fonksiyonun yakalaması gerekmez. Yalnızca anlamlı bir karar verebilen katman
yakalamalıdır:

```js
function saveProgress(rawProgress) {
  const result = validateProgress(rawProgress);

  if (!result.ok) {
    return result;
  }

  return { ok: true, value: `İlerleme %${result.value} olarak kaydedildi.` };
}
```

`saveProgress`, doğrulama sonucunu saklamaz veya “başarılı” gibi davranmaz.
Başarısızlık bağlamını çağırana taşır. Bu, **fault propagation** kavramının
kontrollü hâlidir. **Hata sınırı (error boundary)** ise başarısızlığın hangi
noktada kullanıcı mesajına, log kaydına veya kurtarma davranışına çevrileceğini
belirleyen sorumluluk sınırıdır.

### Fail fast ve kontrollü kurtarma

**Erken başarısız olma (fail fast)**, bozuk durumu ilerletmek yerine ihlali
bulunduğu sınıra yakın görünür yapmaktır. Her şeyde uygulamayı kapatmak demek değildir.

**Kurtarma (recovery)** ise sistemin başarısızlıktan sonra tanımlı bir duruma
dönmesidir. Örnekler:

- Kullanıcı girdisini koruyup yanlış alanı işaretlemek,
- son geçerli değeri göstermeye devam etmek,
- geçici ortam sorununda sınırlı yeniden deneme sunmak,
- işlem güvenli değilse durdurup veri yazmamak.

Kurtarma “ne pahasına olursa olsun devam et” değildir. Yanlış ilerleme değerini
kaydetmektense işlemi reddetmek, veri bütünlüğünü koruyan doğru davranıştır.

## Engineering Perspective

Profesyonel hata yönetimi üç ayrı hedefi dengeler:

1. Kullanıcı ne olduğunu ve ne yapabileceğini anlamalıdır.
2. Geliştirici olayın bağlamını teşhis edebilmelidir.
3. Sistem geçersiz veya yarım duruma geçmemelidir.

Tek bir mesaj bu üç hedefi karşılamaz. `Cannot read properties of undefined`
geliştirici için ipucu olabilir; öğrenciye gösterildiğinde çözüm sunmaz. “Bir şeyler
ters gitti” kullanıcıyı korkutmaz ama geliştirici için neredeyse kanıtsızdır.

İyi bir error contract şu alanları tanımlar:

| Sözleşme alanı | Cevapladığı soru |
|---|---|
| Başarı biçimi | İşlem başarılıysa çağıran ne alır? |
| Hata kodu | Program hangi sınıfa göre karar verir? |
| Kullanıcı mesajı | Kullanıcı ne yapmalı? |
| Tanılama bağlamı | Geliştirici hangi girdiyi ve kuralı inceler? |
| Kurtarılabilirlik | Tekrar deneme veya düzeltme mümkün mü? |
| Güvenli durum | Başarısızlık sonrası hangi veri korunur? |

Tanılama bağlamına parola, erişim anahtarı veya gereksiz kişisel veri eklenmez.
“Daha çok log” otomatik olarak daha iyi tanılama değildir. Amaç, olayı ayırt
edecek en az ve güvenli kanıttır.

`Error` nesnesini yeni bağlamla yeniden fırlatmanız gereken ileri bir durumda
orijinal nedeni kaybetmemek için `cause` kullanılabilir. Ancak C36'da özel hata
türlerini ayrıntılı öğreneceğiz. Bu chapterda kararımız basittir: ele alamadığınız
exception'ı sessizce tüketmeyin; ya bağlamını koruyarak iletin ya da gerçekten
kurtarabildiğiniz sınırda kontrollü sonuca dönüştürün.

## Real World Examples

### Kayıt formu

E-posta alanının boş olması beklenen kullanıcı hatasıdır. Alanın yanında düzeltme
mesajı gösterilir ve form verisi korunur. Form doğrulama kodunun `undefined.trim()`
çalıştırması ise runtime failure'dır; aynı kullanıcı mesajıyla gizlemek kök nedeni
görünmez yapar.

### Ödeme veya puan işlemi

İşlemin yarısı uygulanmışsa yalnız ekranda hata göstermek yetmez. Güvenli durum
tanımlanmalıdır: ya hiçbir değişiklik yapılmamış olmalı ya da tamamlanma durumu
izlenebilir olmalıdır. C24 yalnızca bu sözleşmeyi tanımlar; transaction gibi ileri
mekanizmalar sonraki akademilerin konusudur.

### Arama ekranı

Sonuç bulunmaması failure değildir; geçerli bir başarı sonucudur: boş liste.
Arama kaynağına erişilememesi environmental failure olabilir. Bu ikisini aynı
“Sonuç yok” mesajıyla göstermek, kullanıcıyı yanlış yönlendirir ve sistemi izlemeyi
zorlaştırır.

### İçerik yayınlama

Taslağın zorunlu başlığı yoksa contract failure vardır ve kullanıcı düzeltebilir.
Yayın fonksiyonu doğru veriyi yanlış chapter kimliğiyle kaydediyorsa logic failure
vardır. Depolama hizmeti erişilemiyorsa environmental failure vardır. Aynı düğme,
üç farklı olay ve üç farklı kurtarma davranışı üretebilir.

## Common Mistakes

### Her failure'ı exception sanmak

Yanlış yüzde hesabı exception üretmeyebilir. Boş arama sonucu ise failure bile
değildir. Önce beklenen–gözlenen farkını ve sözleşmeyi inceleyin.

### Her şeyi `try...catch` içine almak

```js
try {
  riskyOperation();
} catch (error) {
  // hiçbir şey yapma
}
```

Bu kod yalnız programın görünürde durmasını engeller. Başarının gerçekleşmediğini
çağırana bildirmez, bağlamı kaybeder ve bozuk durumla devam edebilir. Buna
**hatayı sessizce yutmak (swallowing an error)** denir.

### Mesaj metnini hata kodu olarak kullanmak

`if (message === "İlerleme geçersiz")` gibi bir karar; noktalama, yeniden yazım
ve dil değişiminde kırılır. Program `code`, insan `userMessage` kullanmalıdır.

### Kullanıcıya tanılama ayrıntısını göstermek

Stack trace veya ham girdi geliştirici içindir. Kullanıcı mesajı eyleme dönük,
kısa ve güvenli olmalıdır.

### Otomatik düzeltmeyi gizlemek

`140` değerini sessizce `100` yapmak veriyi “kurtarmış” görünür; fakat kullanıcının
niyetini değiştirebilir. Ürün açıkça böyle bir normalizasyon istemiyorsa değeri
reddedin ve düzeltme fırsatı verin.

### Belirtiyi kök neden sanmak

“Düğme çalışmıyor” gözlemdir. “Veritabanı bozuk” kanıtsız hipotezdir. C25'te bu
hipotezleri kontrollü deneylerle eleyeceğiz; şimdilik ikisini ayrı yazmayı öğrenin.

## Best Practices

- Önce başarılı davranışı ve sınırı yazın; hata davranışı onun karşılığıdır.
- Bir failure kaydında beklenen, gözlenen, girdi, ortam ve yeniden üretim adımını
  birbirinden ayırın.
- Beklenen geçersiz girdiyi açık sonuçla; programlama ihlalini görünür exception
  ile ele almayı değerlendirin.
- Hata kodunu kararlı, kullanıcı mesajını eyleme dönük, diagnostic bilgisini
  geliştiriciye özel tutun.
- Yalnız gerçekten kurtarabileceğiniz exception'ı yakalayın; diğerini bağlamını
  koruyarak iletin.
- Başarısızlık sonrasında geçerli durum değişmezlerini yeniden kontrol edin.
- Kurtarma kararını sınırsız tekrar, veri kaybı veya sessiz varsayılan değer
  üretmeyecek şekilde sınırlandırın.

## Hands-on Exercise

### Birlikte yapalım

Aşağıdaki olayları sınıflandıralım:

| Olay | Birincil sınıf | Kanıt |
|---|---|---|
| Eksik `}` nedeniyle dosya başlamıyor | Syntax | Ayrıştırma konumu ve SyntaxError |
| `undefined.trim()` çağrısı | Runtime | TypeError ve çağrı anındaki değer |
| Ortalama yanlış formülle hesaplanıyor | Logic | Beklenen–gerçek çıktı karşılaştırması |
| `progress = -4` kabul ediliyor | Contract | İlan edilen `0–100` kuralı ihlal edilmiş |
| Yapılandırma bulunamadı | Environmental | Kod/girdi doğru, gerekli koşul yok |

Bir olayın birden fazla etiketi olabilir. Örneğin eksik yapılandırma ele alınmazsa
sonraki satırda runtime exception üretebilir. “Birincil sınıf”, zincirin ilk
anlamlı ve kanıtlanmış halkasını seçer.

### Şimdi sen dene

`validateProgress` fonksiyonunu şu kurallarla genişletin:

- Boş string kabul edilmesin.
- Ondalıklı değer kabul edilmesin.
- Başarıda number döndürülsün.
- Her ret için farklı ve kararlı `code` bulunsun.

Çözümü yazmadan önce `""`, `"42.5"`, `"42"`, `0`, `100`, `101` girdilerinin
beklenen sonuçlarını tabloya yazın.

### Hata avı

```js
function registerProgress(rawProgress) {
  try {
    const progress = Number(rawProgress);
    return { ok: true, value: progress };
  } catch {
    return { ok: true, value: 0 };
  }
}
```

En az dört sorun bulun. Başlangıç soruları:

1. `Number("seksen")` exception atar mı, yoksa başka bir değer mi üretir?
2. `ok: true` çağırana hangi yanlış bilgiyi verir?
3. `0` gerçek kullanıcı girdisiyle varsayılan kurtarma değerini nasıl karıştırır?
4. Fonksiyon `0–100` değişmezini nerede koruyor?

### Kademeli ipuçları

1. **Yön gösteren soru:** Dönüşüm yapmak doğrulama yapmakla aynı şey mi?
2. **Küçük yön:** `Number.isFinite` ve `Number.isInteger` kontrollerini sırala.
3. **Kavramsal açıklama:** Önce boş girdiyi, sonra tür/dönüşüm sonucunu, en son
   iş alanı sınırını kontrol et.
4. **Kısmi yapı:** Başarısız her dal `{ ok: false, error: { code, ... } }` dönsün.
5. **Çözüm kontrolü:** Normal, iki sınır ve üç geçersiz değer için tablo ile
   fonksiyon sonucunu karşılaştır.

### Bağımsız uygulama

Bir `validateStudySession` fonksiyonu tasarlayın. Girdi şu alanları taşısın:

- `durationMinutes`: 10–180 arasında tamsayı,
- `mode`: `"focus"` veya `"review"`,
- `chapterId`: boş olmayan string.

Fonksiyon ilk hatada durabilir veya bütün alan hatalarını toplayabilir. Seçiminizi
kullanıcı deneyimi, kod sadeliği ve çağıranın ihtiyacıyla gerekçelendirin. Normal,
sınır ve geçersiz durumlar için en az sekiz örnek üretin.

### Lab — Failure'ı sınıflandır ve sınırla

`V01-C24-L01` kapsamında size verilen küçük ilerleme uygulamasındaki olayları
sınıflandırın. Her olay için belirti, birincil sınıf, kanıt, yayılma yolu, kullanıcı
mesajı, diagnostic bağlam, güvenli durum ve recovery policy yazın. Ardından bir
input boundary'yi çalışan kodla düzeltin.

### Gerçek proje bağlantısı

`V01-CP01 — Reliable Command-Line Problem Solver` için ilk güvenilirlik artımını
ekleyin. Programın dışarıdan aldığı en az iki girdiye error contract uygulayın.
Başarısızlıkta yarım çıktı veya geçersiz durum üretmediğini bir normal, bir sınır
ve iki invalid örnekle kanıtlayın. Bu kayıt C25'te minimal failing case ve hipotez
çalışmasının başlangıç verisi olacak.

## Reflection Questions

1. Daha önce exception üretmeyen bir logic failure yaşadınız mı? Belirtisi neydi?
2. Kullanıcı mesajıyla diagnostic mesajı ayırmak hangi riski azaltır?
3. Hangi durumda fail fast, hangi durumda recovery daha güvenlidir?
4. `false`, `null`, exception ve yapılandırılmış result arasında nasıl seçim yaparsınız?
5. C25'e geçmeden önce hangi failure sınıfını örnekle açıklamakta zorlanıyorsunuz?

## Chapter Summary

Bu chapterda “hata” kelimesini tek bir torba olmaktan çıkardınız. Kusurun kodda
bulunabileceğini, yanlış iç durumun daha sonra failure'a dönüşebileceğini ve
exception'ın bu zincirde yalnızca bir kontrol akışı mekanizması olduğunu gördünüz.

Syntax, runtime, logic, contract ve environmental failure'ları kanıtlarıyla
ayırdınız. Ardından `validateProgress` üzerinden başarılı sonuç, kararlı hata kodu,
kullanıcı mesajı, diagnostic bağlam ve recovery kararından oluşan bir input
boundary contract tasarladınız.

Artık yalnız “çalışmadı” demek yerine beklenen ve gözleneni ayırabilir, olayın
hangi sınıfa ait olduğunu savunabilir ve başarısızlık sonrasında güvenli durumun
ne olması gerektiğini tarif edebilirsiniz.

## Key Takeaways

- Belirti gözlemdir; neden kanıt gerektirir.
- Defect, error state, failure ve exception aynı şey değildir.
- Exception oluşmaması programın doğru çalıştığını kanıtlamaz.
- Sözleşme başarılı girdiyi olduğu kadar başarısızlık davranışını da tanımlar.
- Kullanıcı mesajı eyleme dönük; diagnostic bağlam teknik ve güvenli olmalıdır.
- Error code, değişebilen mesaj metninden daha kararlı bir program arayüzüdür.
- `try...catch` yalnız anlamlı recovery veya dönüşüm yapılabilen sınırda değerlidir.
- Fail fast, bozuk durumu ilerletmemektir; her sorunda uygulamayı kapatmak değildir.
- Recovery sonrasında veri değişmezleri korunmalıdır.
- C25'te bu sınıflandırmayı kullanarak failure'ı yeniden üretecek ve hipotezleri
  kontrollü kanıtla eleyeceksiniz.

## Further Reading

- C25'e geçmeden `validateProgress` karar tablosunu kodu görmeden yeniden çizin.
- MDN'nin `throw` ve `try...catch` akış şemalarını küçük örneklerle çalıştırın.
- Bir uygulamada gördüğünüz üç hata mesajını kullanıcı mesajı, hata kodu ve
  diagnostic bağlam açısından değerlendirin.
- C18'deki veri modeli örneğine dönüp her alan için invalid state tanımlayın.

## References

- [NIST SP 800-142](https://csrc.nist.gov/csrc/media/Projects/automated-combinatorial-testing-for-software/documents/SP800-142-101006.pdf)
- [MDN — JavaScript control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN — try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN — throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [MDN — Error cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
