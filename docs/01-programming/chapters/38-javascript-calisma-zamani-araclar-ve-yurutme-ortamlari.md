---
document_type: "chapter"
chapter_id: "V01-C38"
volume_id: "V01"
title: "JavaScript Çalışma Zamanı, Araçlar ve Yürütme Ortamları"
slug: "javascript-calisma-zamani-araclar-ve-yurutme-ortamlari"
version: "0.1.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "8-10 saat"
prerequisites:
  - "V01-C02"
  - "V01-C08"
learning_outcomes:
  - "V01-LO065"
  - "V01-LO066"
related_lab_ids:
  - "V01-C38-L01"
related_assessment_ids:
  - "V01-C38-AS01"
next_chapter_id: "V01-C29"
blueprint_id: "V01-C38-BP01"
last_updated: "2026-07-29"
---

# JavaScript Çalışma Zamanı, Araçlar ve Yürütme Ortamları

## Learning Objectives

Bu chapter'ın sonunda iki temel yeterliği kanıtlayacaksınız:

- `V01-LO065`: Kaynak kod, JavaScript dili, JavaScript motoru, çalışma zamanı,
  host ortamı ve geliştirme araçlarının ilişkisini örnekler üzerinde
  açıklayabileceksiniz.
- `V01-LO066`: Desteklenen bir Node.js ortamında JavaScript programını
  çalıştırabilecek; sürüm, klasör, komut, girdi, çıktı ve tamamlanma durumunu
  başka bir öğrencinin yeniden üretebileceği biçimde belgeleyebileceksiniz.

Başarı ölçümüz “Benim bilgisayarımda çalıştı” cümlesi değildir. Programın neden
çalıştığını, hangi ortam imkânlarına dayandığını ve başka bir bilgisayarda aynı
deneyin nasıl tekrarlanacağını gösterebilmeniz gerekir.

## Prerequisites

Buraya kadar kaynak kodun bir dizi talimat taşıdığını ve programın girdiyi
alıp dönüştürerek çıktı ürettiğini gördünüz. C08'deki şu küçük hattı hatırlayın:

```js
const rawScore = "85";
const score = Number(rawScore);
console.log(score + 5);
```

Kodu çalıştırmadan şu dört soruyu yanıtlayın:

1. `rawScore` hangi gerçek bilgiyi temsil ediyor?
2. Neden başlangıç değeri bir `string`?
3. `score` hangi işlemden sonra bir `number` oluyor?
4. Son satırda beklediğiniz çıktı nedir?

Yanıtınız sırasıyla “dışarıdan gelen ham puan”, “girdi önce metin biçiminde
geldi”, “`Number` dönüşümünden sonra” ve `90` ise C08'in gerekli kısmı hazır.
Şimdi daha önce açık bırakılmış bir soruya geçebiliriz:

> Bu üç satır kendi kendine çalışmadıysa onları kim çalıştırdı?

Bir kâğıda yazıldığında bu metin hiçbir çıktı üretmez. Bir `.js` dosyasına
kaydedilmesi de tek başına yetmez. Bir çalışma sistemi dosyayı bulmalı, dil
kurallarına göre anlamlandırmalı, talimatları yürütmeli ve `console` üzerinden
çıktıyı bir yere taşımalıdır. Bu chapter'ın konusu tam olarak bu görünmeyen
çalışma sözleşmesidir.

Araç hazırlığı olarak bilgisayarınızda desteklenen bir Node.js LTS sürümü ve
bir metin/kod editörü bulunmalıdır. Terminalde aşağıdaki komutu çalıştırın:

```powershell
node --version
```

macOS veya Linux terminalinde de komut aynıdır. `v` ile başlayan bir sürüm
görüyorsanız Node.js komutuna erişebiliyorsunuz. Sürüm numarasını ders
metnindeki sabit bir sayıyla karşılaştırmayacağız; Node.js sürümleri zamanla
değişir. Önemli olan desteklenen LTS sürümü kullanmanız ve gerçek çıktıyı çalışma
kaydınıza yazmanızdır. “`node` tanınmıyor” benzeri bir hata görürseniz lab'a
başlamadan önce Node.js kurulumunu veya terminal `PATH` ayarını düzeltin.

## Estimated Study Time

| Çalışma | Önerilen süre |
|---|---:|
| Ön bilgi kontrolü ve ilk ortam gözlemi | 45 dakika |
| Katman modeli ve tarayıcı/Node.js karşılaştırması | 90 dakika |
| Terminal, giriş noktası ve süreç yürütme izi | 90 dakika |
| Komut satırı argümanlarıyla birlikte örnek | 90 dakika |
| Hata avı ve tekrar üretilebilirlik çalışması | 75 dakika |
| Hands-on exercise ve lab | 2-3 saat |
| Quiz, özet ve öz değerlendirme | 45 dakika |

Toplam çalışma süresi yaklaşık 8-10 saattir. Tek oturumda bitirmek zorunda
değilsiniz. Katman modelinden sonra, birlikte yapılan örnekten sonra ve lab
öncesinde kısa ara vermek öğrenme yükünü dengeler.

## Introduction

### Ada'nın çalışan programı neden Ece'de çalışmadı?

Ada, C08'de puanı dönüştüren küçük bir program yazdı. Sonucu görünce dosyayı
arkadaşı Ece'ye gönderdi:

```js
const rawScore = "85";
const score = Number(rawScore);
console.log(score + 5);
```

Ada dosyayı terminalde `node score.js` komutuyla çalıştırıyordu. Ece ise
JavaScript'i tarayıcı konsolunda denemeye alışmıştı. Bu ilk program iki yerde
de `90` yazdırdı. İkisi de doğal olarak “Demek ki ortam fark etmiyor” sonucuna
yaklaştı.

Ada daha sonra dosyaya sayfanın başlığını yazdıran bir satır ekledi:

```js
console.log(document.title);
```

Ece bunu bir web sayfasının tarayıcı konsolunda çalıştırdığında başlığı gördü.
Ada aynı satırı Node.js ile çalıştırdığında ise şu tür bir hata aldı:

```text
ReferenceError: document is not defined
```

Bu noktada durup tahmin edin. Hangisi daha olası?

- Ada JavaScript'i yanlış mı yazdı?
- Node.js JavaScript değil mi?
- `document` JavaScript dilinin değil, çalışılan ortamın sağladığı bir imkân mı?

Üçüncü seçenek bizi doğru zihinsel modele götürüyor. Her iki ortam da JavaScript
dilini çalıştırabilir. Fakat tarayıcı, açık web sayfasını temsil eden `document`
gibi imkânlar sunar. Node.js ise çalışan süreç hakkındaki bilgiyi taşıyan
`process` gibi farklı imkânlar sunar.

Şimdi karşı yönde deneyelim:

```js
console.log(process.version);
```

Bu satır Node.js'te sürüm etiketini yazdırır. Sıradan bir tarayıcı sayfasının
konsolunda ise `process` adı bulunmaz. Sorun JavaScript sözdiziminde değildir.
Kod, içinde çalıştığı **host ortamının (host environment)** sunduğu bir adı
kullanmaktadır.

Bu chapter'da Node.js'in bütün API'lerini veya tarayıcı programlamayı
öğrenmeyeceğiz. Amacımız daha temel ve daha kalıcıdır: Bir davranış gördüğünüzde
“Bunu dil mi sağlıyor, çalışma ortamı mı, yoksa kullandığım araç mı?” sorusunu
doğru sormayı öğreneceğiz.

### İlk anlama kontrolü

Aşağıdaki üç adı iki sütuna yerleştirin:

| Ad | Tarayıcıda beklenir mi? | Node.js'te beklenir mi? |
|---|---|---|
| `console.log` | ? | ? |
| `document` | ? | ? |
| `process` | ? | ? |

`console.log` iki ortamda da yaygın biçimde bulunur; ayrıntılı uygulaması ortama
göre değişebilir. `document` tarayıcı sayfası host'una, `process` Node.js
host'una aittir. Buradaki hedef liste ezberlemek değildir. Bir adın kaynağını
resmî belgeden araştırmak için doğru ayrımı kurmaktır.

## Core Concepts

### Kodun çıktıya ulaşırken geçtiği beş sorumluluk

Bir tiyatro metni düşünün. Metin önemlidir ama gösterinin kendisi değildir.
Oyuncular metni yorumlar, sahne ışık ve ses imkânlarını sağlar, teknik ekip
gösteriyi başlatır. Bu benzetme ilk ayrımı görmemize yardım eder; fakat sınırını
unutmayın: JavaScript motoru yaratıcı bir oyuncu gibi yorum yapmaz. Belirlenmiş
dil kurallarını uygular.

Şimdi teknik modele geçelim:

```text
Kaynak kod
  ↓ dil kurallarıyla anlamlandırılır
JavaScript motoru
  ↓ bir çalışma sistemi içinde yürütür
Runtime + host ortamı
  ↓ dış dünya imkânları sağlar
Gözlenebilir çıktı

Araçlar: kodu yazmamıza, süreci başlatmamıza ve sonucu incelememize yardım eder.
```

Bu modeldeki parçaları tek tek adlandıralım.

**Kaynak kod (source code)**, sizin yazdığınız `const`, `Number` ve
`console.log` gibi ifadeleri taşıyan metindir. Kaynak dosya program için
talimattır; henüz çalışan bir süreç değildir.

**ECMAScript**, JavaScript dilinin standartlaştırılmış kurallarını tanımlar.
Bir ifadenin nasıl değerlendirileceği veya bir `const` bildiriminin ne anlama
geldiği dil düzeyindeki konulardır.

**JavaScript motoru (JavaScript engine)**, bu dil kurallarını uygulayan ve kodu
yürüten bileşendir. Başlangıç seviyesinde motoru “JavaScript talimatlarını
anlayıp yürüten bileşen” diye düşünebiliriz. Parser, bytecode, JIT derleme ve
garbage collector ayrıntıları bu chapter'ın hedefi değildir.

**Çalışma zamanı (runtime)**, kodun gerçekten çalıştığı sistemi ifade eder.
Node.js yalnız bir motor adı değildir; JavaScript kodunu motorla yürütürken
dosya sistemi, süreç ve terminal gibi sunucu/masaüstü bağlamına uygun imkânlar
sağlayan bir çalışma zamanıdır.

**Host ortamı (host environment)**, JavaScript programının dil çekirdeğinin
dışındaki dünyayla ilişki kurmasını sağlayan ortamdır. Tarayıcı web sayfası ve
kullanıcı etkileşimiyle ilgili imkânlar sunar. Node.js süreç, dosya ve ağ gibi
farklı bağlamlara uygun imkânlar sunar. Bu tanım “Node.js'te tarayıcıya ait
hiçbir şey yapılamaz” gibi bir sonuç doğurmaz; yalnız varsayılan olarak hangi
API'lerin kim tarafından sağlandığını ayırır.

**Araçlar (tooling)** ise kod editörü, terminal, debugger ve paket script'i gibi
çalışmanızı hazırlayan ve gözlenebilir kılan yardımcı sistemlerdir. Editörünüz
kodunuzu renklendirebilir ama dosyayı çalıştıran editörün rengi değildir.
Terminal komutu kabul eder ama JavaScript dilinin kendisi değildir.

#### Anlama kontrolü

Bir editörü kapattıktan sonra terminalden `node app.js` komutuyla program
çalışıyorsa bu bize ne söyler? Editör yazma aracıdır; programın çalışmasının
zorunlu parçası değildir. Buna karşılık Node.js runtime'ı olmadan `node app.js`
komutu yürütülemez.

### Aynı dil, farklı dış dünya

Tarayıcı ile Node.js arasında keskin bir “biri gerçek JavaScript, diğeri değil”
ayrımı yoktur. Ortak JavaScript çekirdeğini farklı host yetenekleriyle
çalıştırırlar.

| İhtiyaç | Tarayıcı örneği | Node.js örneği | Sorumlu katman |
|---|---|---|---|
| Aritmetik ifade | `2 + 3` | `2 + 3` | Dil |
| Sabit bildirme | `const score = 85` | `const score = 85` | Dil |
| Mesaj yazdırma | `console.log(...)` | `console.log(...)` | Host tarafından sunulan yaygın API |
| Açık sayfaya erişme | `document.title` | Varsayılan olarak yok | Tarayıcı host'u |
| Çalışan sürece erişme | Varsayılan olarak yok | `process.version` | Node.js host'u |

Burada `console.log` özellikle öğreticidir. İki ortamda da bulunduğu için onu
kolayca dilin ayrılmaz parçası sanabiliriz. Oysa `console` API'sinin uygulaması
ortama bağlıdır. Yaygın olması, sorumluluk sınırını değiştirmez.

**Tahmin et:** Aşağıdaki dosya Node.js'te hangi satıra kadar çalışır?

```js
console.log("Birinci adım");
console.log(document.title);
console.log("Üçüncü adım");
```

Önce tahmininizi yazın. Sonra küçük bir dosyada deneyin. İlk satır mesajı
yazdırır. İkinci satırda `document` tanımlı olmadığı için `ReferenceError`
oluşur. Hata, normal yürütmeyi keser; üçüncü satır çalışmaz. Bu gözlem bize hem
host sınırını hem de yürütmenin sırayla ilerlediğini gösterir.

### Kod editörü ile terminal aynı şey değildir

Başlangıçta ekranınızdaki bütün paneller tek bir “kod programı” gibi
görünebilir. Görevleri ayırdığınızda hata mesajları daha anlaşılır olur:

| Parça | Görevi | Örnek |
|---|---|---|
| Kod editörü | Kaynak metni yazmak ve kaydetmek | VS Code, ASEA kod editörü |
| Terminal | Kabuk komutlarını kabul etmek | PowerShell, cmd, bash, zsh |
| Kabuk (shell) | Yazdığınız komutu çözümleyip program başlatmak | PowerShell veya bash |
| Node.js CLI | JavaScript giriş dosyasını seçip runtime'ı başlatmak | `node app.js` |
| JavaScript dosyası | Programın kaynak talimatlarını taşımak | `app.js` |

Şu satır bir **terminal komutudur**:

```powershell
node app.js
```

Şu satır ise **JavaScript kaynak kodudur**:

```js
console.log("Program başladı");
```

`node app.js` satırını `app.js` dosyasının içine yazarsanız JavaScript motoru
bunu geçerli JavaScript olarak anlamlandıramaz. `console.log(...)` satırını
PowerShell'e doğrudan yazarsanız da PowerShell onu JavaScript olarak yürütmek
zorunda değildir. Hangi dili hangi yüzeye yazdığınızı bilmek, programlamanın
ilk profesyonel alışkanlıklarından biridir.

### `node runtime-report.js Ada 85` komutunu okuyalım

Bir terminal komutuna soldan sağa bakalım:

```text
node runtime-report.js Ada 85
│    │                 │   │
│    │                 │   └─ program argümanı
│    │                 └───── program argümanı
│    └─────────────────────── giriş noktası
└──────────────────────────── çalıştırılan CLI programı
```

`node`, kabuğun başlatacağı programdır. `runtime-report.js`, Node.js'in ilk
yükleyip yürüteceği **giriş noktasıdır (entry point)**. `Ada` ve `85` ise
başlatılan JavaScript programına iletilen komut satırı argümanlarıdır.

Node.js giriş dosyasının yolu göreliyse onu terminalin **mevcut çalışma
klasörüne (current working directory)** göre arar. Örneğin dosya
`C:\dersler\c38\runtime-report.js` içindeyken terminal
`C:\dersler` klasöründeyse `node runtime-report.js` dosyayı bulamaz. İki çözüm
vardır:

```powershell
cd C:\dersler\c38
node runtime-report.js Ada 85
```

veya bulunduğunuz yerden doğru göreli/tam yolu vermek:

```powershell
node .\c38\runtime-report.js Ada 85
```

Bu hata JavaScript mantığınızın bozuk olduğu anlamına gelmez. Runtime henüz
kaynak dosyayı bulup yükleyememiştir.

### Bir süreç nasıl başlar ve biter?

`node runtime-report.js Ada 85` komutunu gönderdiğinizde kabuk bir Node.js
**süreci (process)** başlatır. Süreç, çalışan programın o anki örneğidir. Kaynak
dosya diskte duran metindir; süreç ise bellekte yürüyen, girdileri ve çalışma
durumunu taşıyan etkin örnektir.

Başlangıç düzeyindeki izimiz şöyledir:

| Sıra | Olay | Gözlenebilir kanıt |
|---:|---|---|
| 1 | Kabuk `node` programını başlatır | Komut kabul edilir |
| 2 | Node.js giriş noktasını mevcut klasöre göre bulur | Dosya yoksa yükleme hatası |
| 3 | Motor kaynak kodu JavaScript kurallarına göre ayrıştırır | Sözdizimi hatası varsa yürütme başlamaz |
| 4 | Talimatlar sırayla yürütülür | `console.log` çıktıları görünür |
| 5 | Yapılacak iş kalmadığında süreç tamamlanır | Terminal yeni komut kabul eder |
| 6 | Süreç bir exit status bırakır | Kabuk/otomasyon başarıyı okuyabilir |

Bu model asenkron işlerin ve event loop'un bütün ayrıntılarını içermez. Bu
chapter'daki senkron, tek dosyalı program için yeterli ve doğru bir başlangıç
modelidir.

### Komut satırı argümanları nerede bulunur?

Node.js, sürecin başlatılma bilgilerini `process` adı üzerinden sunar.
`process.argv` bir dizidir. Dizinin her elemanı bir string taşır:

```js
console.log(process.argv);
```

Komutu şöyle çalıştırdığınızı varsayalım:

```powershell
node runtime-report.js Ada 85
```

Tam yollar bilgisayarınıza göre değişmekle birlikte anlam tablosu şöyledir:

| İndeks | Yaklaşık değer | Anlam |
|---:|---|---|
| `0` | Node.js çalıştırılabilir dosyasının yolu | Süreci hangi runtime başlattı? |
| `1` | `runtime-report.js` dosyasının tam yolu | Giriş noktası hangisi? |
| `2` | `"Ada"` | İlk kullanıcı argümanı |
| `3` | `"85"` | İkinci kullanıcı argümanı |

Bu yüzden ad ve puanı şöyle alabiliriz:

```js
const studentName = process.argv[2];
const rawScore = process.argv[3];
```

`studentName`, raporun kime ait olduğunu temsil eder. Adın metinsel kimliği
üzerinde aritmetik yapmayacağımız için `string` uygun türdür. Değeri program
çalışırken yeniden atamayacağımız için `const` kullanırız.

`rawScore`, terminalden gelen ham puanı temsil eder. Adındaki `raw`, değerin
henüz programın hesaplama biçimine dönüştürülmediğini anlatır. `"85"` bir
string'dir; komut satırı argümanları metinsel gelir. Argüman hiç verilmezse bu
indekste `undefined` bulunur. Bu chapter'da tür dönüşümünün bütün garip sınır
durumlarını açmayacağız; onları C29'da kontrollü deneylerle inceleyeceğiz.

### Birlikte yapalım: C08 programını gerçek bir girdiye bağlamak

`runtime-report.js` adında bir dosya oluşturun:

```js
const studentName = process.argv[2];
const rawScore = process.argv[3];

const score = Number(rawScore);
const bonus = 5;
const finalScore = score + bonus;

console.log(`Öğrenci: ${studentName}`);
console.log(`Ham puan: ${rawScore}`);
console.log(`Bonus sonrası puan: ${finalScore}`);
```

Şimdi terminalde dosyanın bulunduğu klasöre gidin ve çalıştırın:

```powershell
node runtime-report.js Ada 85
```

Beklenen çıktı:

```text
Öğrenci: Ada
Ham puan: 85
Bonus sonrası puan: 90
```

Kodu yalnız satır satır değil, çalışma sırasına göre yürütelim.

1. `process.argv[2]`, komuttaki `"Ada"` metnini verir. Bu değer
   `studentName` sabitine bağlanır.
2. `process.argv[3]`, komuttaki `"85"` metnini verir. Bu değer `rawScore`
   sabitine bağlanır.
3. `Number(rawScore)`, ham metinden hesaplamada kullanılacak sayısal değeri
   üretir. `score` artık `85` sayısını taşır.
4. `bonus`, iş kuralındaki sabit `5` sayısını taşır. Çalışma boyunca değişmediği
   için `const` seçilir.
5. `score + bonus` işlemi `90` üretir ve `finalScore` bu türetilmiş değeri
   taşır.
6. Son üç satır, değerleri terminalin normal çıktı kanalında görünür yapar.

Değer izini tabloya dönüştürelim:

| Adım | `studentName` | `rawScore` | `score` | `bonus` | `finalScore` |
|---:|---|---|---:|---:|---:|
| 1 | `"Ada"` | henüz yok | henüz yok | henüz yok | henüz yok |
| 2 | `"Ada"` | `"85"` | henüz yok | henüz yok | henüz yok |
| 3 | `"Ada"` | `"85"` | `85` | henüz yok | henüz yok |
| 4 | `"Ada"` | `"85"` | `85` | `5` | henüz yok |
| 5 | `"Ada"` | `"85"` | `85` | `5` | `90` |

Neden `rawScore` değerini doğrudan değiştirmek yerine yeni `score` adı
oluşturduk? Çünkü ham girdiyi ve dönüştürülmüş değeri ayrı tutmak, hatayı hangi
sınırda arayacağımızı gösterir. Ayrıca `rawScore` bize kullanıcının gerçekten
ne gönderdiğini korur. Bu karar daha sonra tür dönüşümü ve doğrulama
hatalarında çok değerlidir.

#### Tahmin et

Programı şu komutla çalıştırmadan önce çıktıdaki üç değeri tahmin edin:

```powershell
node runtime-report.js Mert 40
```

`studentName` `"Mert"`, `rawScore` `"40"`, `finalScore` `45` olur. Şimdi
argümanları ters verirseniz ne olacağını tahmin edin:

```powershell
node runtime-report.js 40 Mert
```

Program komutun niyetini anlayıp alanları kendiliğinden düzeltmez.
`studentName` `"40"` olur. `Number("Mert")` geçerli bir sayısal sonuç
üretemediği için `finalScore` çıktısı `NaN` olur. `NaN` ve dönüşüm semantiğini
C29'da ayrıntılı inceleyeceğiz. Şimdilik kanıtımız şudur: Argüman sırası
programın girdi sözleşmesinin parçasıdır ve belgelenmelidir.

### Şimdi sen dene

Programa öğrencinin şehrini üçüncü kullanıcı argümanı olarak ekleyin. Komut:

```powershell
node runtime-report.js Ada 85 Ankara
```

Yeni çıktıda `Şehir: Ankara` satırı olmalıdır. Çözüme bakmadan önce hangi
`process.argv` indeksini kullanacağınızı yazın. İlk iki indeks runtime ve giriş
noktası için ayrıldığına göre üçüncü kullanıcı argümanı `process.argv[4]`
olmalıdır:

```js
const city = process.argv[4];
console.log(`Şehir: ${city}`);
```

`city` bir konum adını temsil eder, string taşır ve program boyunca yeniden
atanmaz. Bu yüzden `const` seçimi uygundur.

### Mevcut çalışma klasörü neden görünür olmalı?

Programın çalıştığı klasörü görmek için:

```js
const workingDirectory = process.cwd();
console.log(`Çalışma klasörü: ${workingDirectory}`);
```

`workingDirectory` bir dosya yolu metnidir. Üzerinde matematik yapmayız; bu
yüzden string doğru temsildir. `process.cwd()` sonucu program çalışırken
yeniden atamadığımız için `const` kullanırız.

Buradaki önemli ayrım şudur: çalışma klasörü her zaman kaynak dosyanın klasörü
olmak zorunda değildir. Terminal başka bir klasördeyken dosyaya tam yol
verebilirsiniz. Bu nedenle “dosyanın bulunduğu yer” ile “sürecin başlatıldığı
çalışma klasörü” aynı kavram değildir.

### Normal çıktı, hata çıktısı ve exit status

Bir program üç farklı kanıt üretebilir:

1. Normal bilgi `stdout` kanalına yazılır; `console.log` başlangıçta bu amaçla
   kullanılır.
2. Hata açıklaması `stderr` kanalına yazılabilir; `console.error` bu niyeti
   gösterir.
3. Sürecin başarı veya başarısızlık durumu bir **çıkış durumu (exit status)**
   ile kabuğa bildirilir.

Mesaj ile durum aynı şey değildir:

```js
console.error("Puan bilgisi eksik");
```

Bu satır hata kanalına mesaj yazar; tek başına sürecin sıfır dışı durumla
bitmesini garanti etmez. Başarısızlığı otomasyonun da anlayabilmesi için
program uygun yerde `process.exitCode` belirleyebilir:

```js
process.exitCode = 1;
```

Yaygın sözleşmede `0` başarıyı, sıfır dışı değer başarısızlığı gösterir. Bu
chapter'da henüz koşullu doğrulama programını büyütmeyeceğiz. Lab'da size
verilen hata dalını inceleyip `console.error` ile `process.exitCode` rollerini
ayıracaksınız.

Neden doğrudan `process.exit(1)` kullanmıyoruz? Node.js belgeleri,
`process.exit()` çağrısının bekleyen çıktı işlemlerini tamamlanmadan
kesebileceğini belirtir. Başlangıç düzeyindeki güvenli varsayım, hata durumunu
belirleyip sürecin doğal biçimde tamamlanmasına izin vermektir.

### npm script: ortak çalışma komutu

Komut uzadıkça ekip üyeleri farklı biçimler kullanabilir. Proje klasöründe
`package.json` oluşturalım:

```json
{
  "name": "asea-runtime-report",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node runtime-report.js"
  }
}
```

`scripts.start`, ortak komutun adını ve gerçek terminal komutunu eşleştirir.
Şimdi programı şöyle çalıştırabiliriz:

```powershell
npm run start -- Ada 85
```

`--` işaretinden sonraki `Ada` ve `85`, seçilen script'in komutuna iletilir.
Program yine `process.argv[2]` ve `[3]` üzerinden aynı değerleri görür.

Bu script programın iş mantığını değiştirmez. Araç katmanında, ekibin aynı
başlatma sözleşmesini kullanmasını kolaylaştırır. `package.json` içindeki
`private: true` alanı da bu eğitim paketinin yanlışlıkla npm registry'ye
yayımlanmasını engelleyen niyet beyanıdır.

### Tekrar üretilebilir çalışma kaydı

Bir ekran görüntüsü, sonucun bir kez görüldüğünü kanıtlar; deneyin nasıl
tekrarlanacağını tek başına söylemez. Profesyonel bir çalışma kaydında en az şu
alanlar bulunur:

| Alan | Örnek |
|---|---|
| İşletim sistemi | Windows 11 |
| Runtime ve sürüm | `node --version` gerçek çıktısı |
| Çalışma klasörü | `C:\asea\c38-runtime-lab` |
| Giriş noktası | `runtime-report.js` |
| Tam komut | `npm run start -- Ada 85` |
| Girdi sözleşmesi | 1. ad, 2. puan |
| Beklenen çıktı | Üç satırlık örnek |
| Gerçek çıktı | Çalıştırmada gözlenen değer |
| Exit status | Başarı için `0` |
| Bilinen sınır | Eksik/geçersiz puan doğrulaması C29/C10 sonrasında |

Bu kayıt “bende çalışıyor” ifadesini incelenebilir kanıta dönüştürür. Bir
arkadaşınız aynı dosyaları ve kaydı alıp aynı sonucu üretebiliyorsa iş akışınız
tekrar üretilebilirdir.

## Engineering Perspective

### Ortam varsayımı da bir bağımlılıktır

Bir program `document` kullanıyorsa tarayıcı benzeri bir host imkânına
bağlıdır. `process.argv` kullanıyorsa Node.js süreç API'sine bağlıdır. Bu
bağımlılıklar kötü değildir; programın ne yaptığına göre gereklidir. Sorun,
bağımlılığın görünmez bırakılmasıdır.

Bir mühendis “Bu JavaScript programı” demekle yetinmez. Şunları da sorar:

- Hangi runtime ve desteklenen sürüm?
- Giriş noktası hangi dosya?
- Program hangi klasörden başlatılmalı?
- Girdi nereden ve hangi sırada geliyor?
- Başarı nasıl gözleniyor?
- Hata insan tarafından mı, otomasyon tarafından mı okunacak?

Bu sorular kodu gereksiz karmaşıklaştırmaz. Tam tersine, aynı davranışın
geliştirici bilgisayarında, test ortamında ve üretimde açıklanabilir olmasını
sağlar.

### Sürümü ezberlemek yerine ölçmek

Node.js yayın takvimi değişir. Bugün güncel olan sürüm, gelecekte destek dışına
çıkabilir. Bu nedenle kalıcı ders kuralı “mutlaka şu sabit sürümü kullan” değil,
“desteklenen LTS sürümü kullan ve gerçek sürümü kaydet” olmalıdır.

`node --version` küçük ama değerli bir kanıttır. Bir hata yalnız belirli bir
sürümde ortaya çıktığında çalışma kaydı araştırmayı daraltır. Ekipler bunu
zamanla `package.json` engine alanı, sürüm yöneticileri ve CI kontrolleriyle
daha sıkı hâle getirebilir; bu chapter'da temel alışkanlığı kuruyoruz.

### Açık komut, gizli tıklamadan daha taşınabilirdir

Editördeki “Run” düğmesi yararlıdır. Fakat düğmenin arka planda hangi komutu,
hangi klasörden ve hangi runtime ile çalıştırdığını bilmiyorsanız hata
teşhisiniz editöre bağımlı kalır. Terminalde açık komut yazabilmek size
taşınabilir bir temel verir. Editör düğmesini kullanabilirsiniz; aynı davranışın
komut karşılığını da bilmelisiniz.

### Güvenlik sınırı

Komut satırı argümanları dış girdidir. Kullanıcının verdiği değere güvenmek,
onun gerçekten beklenen türde ve aralıkta olduğu anlamına gelmez. Bu chapter
yalnız girdinin runtime'a nasıl ulaştığını gösterir. C29 tür/dönüşüm
semantiğini, C09-C10 karar ve doğrulamayı, daha sonraki güvenlik içerikleri ise
güvenilmeyen girdinin kapsamlı işlenmesini kuracaktır.

## Real World Examples

### CI sistemi “başarılı” sonucu nasıl anlar?

Bir sürekli entegrasyon sistemi ekrana bakıp yeşil yazıyı yorumlamaz. Çalıştırdığı
komutun exit status değerini okur. Test komutu `0` ile biterse iş başarılı,
sıfır dışı bir değerle biterse başarısız kabul edilebilir. Bu nedenle hata
mesajı ile makine-okunur tamamlanma durumu ayrı sorumluluklardır.

### Ekipte ortak komut

Bir geliştirici `node runtime-report.js`, diğeri editörde özel bir düğme,
üçüncüsü unutulmuş bir tam yol kullanırsa hata yeniden üretmek zorlaşır.
`package.json` içinde `npm run start` gibi ortak bir script, komut sözleşmesini
projenin parçası yapar. Script her sorunu çözmez; ancak başlangıç komutundaki
farklılığı azaltır.

### Tarayıcıdaki eğitim aracı ile yerel Node.js programı

ASEA'nın kod editörü tarayıcı içinde güvenli bir yürütme alanı sunabilir.
Öğrenci aynı kaynak fikrini yerel Node.js'te çalıştırdığında host imkânları ve
güvenlik sınırları farklılaşabilir. Platformun görevi bu farkı saklamak değil,
uygun yerde görünür kılmaktır. Öğrenci böylece bir framework'e değil, çalışma
modeline hâkim olur.

### Hata raporunun değeri

“Çalışmadı” mesajı yerine şu raporu düşünün:

```text
Node: vXX.YY.ZZ
OS: Windows
Klasör: C:\projects\runtime-report
Komut: npm run start -- Ada 85
Beklenen: Bonus sonrası puan: 90
Gerçekleşen: Error: Cannot find module ...
```

Bu rapor, sorunun iş mantığından önce giriş dosyası çözümlemesinde olduğunu
gösterir. Runtime düşüncesi yalnız kod çalıştırma konusu değil, ekip içi açık
iletişim becerisidir.

## Common Mistakes

### Hata avı 1: “Dosya bulunamadı”

Belirti:

```text
Error: Cannot find module '...\runtime-report.js'
```

Muhtemel kök neden, terminalin dosyanın bulunduğu klasörde olmaması veya dosya
adının farklı olmasıdır. Önce kanıt toplayın:

```powershell
Get-Location
Get-ChildItem
```

macOS/Linux için benzer gözlem komutları `pwd` ve `ls` olur. Dosyayı görmeden
JavaScript satırlarını değiştirmek kök nedene dokunmaz. Önce çalışma klasörü ve
giriş noktası eşleşmesini düzeltin.

### Hata avı 2: `document is not defined`

Belirti bir `ReferenceError` ve tanımsız `document` adıdır. Kök neden çoğunlukla
tarayıcı host'una ait bir API'nin Node.js ortamında varsayılmasıdır. Çözüm
“rastgele paket kurmak” değildir. Önce programın gerçekten web sayfası mı yoksa
terminal programı mı olması gerektiğine karar verin. Ortam seçimi gereksinimden
çıkar.

### Hata avı 3: Argüman indeksi kaydı

Hatalı kod:

```js
const studentName = process.argv[0];
const rawScore = process.argv[1];
```

Bu kod syntax hatası üretmez. Fakat `studentName` runtime çalıştırılabilir
dosyasının yolunu, `rawScore` ise giriş dosyasının yolunu alır. Hata sessizce
yanlış veri üretir. Teşhis için tüm `process.argv` dizisini yazdırıp indeks
tablosuyla karşılaştırın.

### Hata avı 4: Puanı dönüştürmeden toplamak

Hatalı kod:

```js
const rawScore = process.argv[3];
const finalScore = rawScore + 5;
```

`rawScore` `"85"` string'iyse sonuç `90` değil, `"855"` olabilir. Kök neden
terminal girdisinin metinsel biçimi ile hesaplama biçiminin karıştırılmasıdır.
En küçük düzeltme açık dönüşüm sınırını geri getirmektir:

```js
const score = Number(rawScore);
const finalScore = score + 5;
```

Neden bazı metinlerin sayıya dönüştüğünü, bazılarının `NaN` ürettiğini C29'da
ayrıntılı olarak öğreneceğiz.

### Hata avı 5: `.js.txt` dosyası

Bazı işletim sistemi ayarları bilinen dosya uzantılarını gizler. Editörde
`runtime-report.js` gördüğünüz dosya gerçekte `runtime-report.js.txt` olabilir.
Node.js farklı dosya arar. Terminalde dosya listesini inceleyin ve editörün tam
dosya adını gösterdiğinden emin olun.

### Hata avı 6: Hata mesajı var ama exit status başarılı

Program `console.error("Geçersiz girdi")` yazıp doğal olarak başarı durumuyla
bitiyorsa insan hatayı görür, otomasyon göremeyebilir. Hata dalında uygun
`process.exitCode` belirlenmelidir. Tersi de önemlidir: Her uyarı programın
başarısız olduğu anlamına gelmez. Exit status iş sözleşmesine göre seçilir.

## Best Practices

1. **Runtime'ı ve gerçek sürümü kaydedin.** “Node kullanıyorum” ifadesini
   `node --version` kanıtıyla tamamlayın.
2. **Giriş noktasını açık tutun.** Başlangıçta tek ve anlamlı bir dosya adı
   kullanın; programın hangi dosyadan başladığı belirsiz olmasın.
3. **Ham girdi ile dönüştürülmüş değeri ayırın.** `rawScore` ve `score` adları
   veri sınırını görünür kılar.
4. **Ortam API'sini ihtiyaçla seçin.** `document` veya `process` kullanmadan
   önce programın çalışacağı host'u belirleyin.
5. **Ortak komutu proje içinde belgeleyin.** npm script ve README birlikte
   çalıştırma bilgisini kişisel hafızadan çıkarır.
6. **Beklenen çıktıyı yazın.** Yalnız komutu vermek, doğru sonucun ne olduğunu
   göstermez.
7. **Hata kanalı ile exit status'u ayırın.** İnsan mesajı ve otomasyon sonucu
   birbirini tamamlar.
8. **Önce kanıt, sonra değişiklik.** Dosya bulunamadığında iş mantığını;
   `ReferenceError` gördüğünüzde puan hesabını rastgele değiştirmeyin.

Bu maddeler bağlamsız evrensel yasa değildir. Küçük bir öğrenme deneyiyle
üretim servisi aynı dokümantasyon derinliğine ihtiyaç duymayabilir. Ancak sürüm,
komut, girdi ve beklenen sonuçtan oluşan çekirdek kayıt küçük projede bile
faydalıdır.

## Hands-on Exercise

### Objective

C08'deki girdi-dönüşüm-çıktı bilgisini kullanarak Node.js'te çalışan,
belgelenmiş ve başka bir öğrenci tarafından yeniden üretilebilen bir çalışma
oturumu oluşturmak.

### Requirements

`runtime-score-report` adında bir klasör oluşturun. İçinde:

- `runtime-report.js`
- `package.json`
- `README.md`
- `expected-output.txt`

dosyaları bulunmalıdır.

Program üç kullanıcı argümanı almalıdır:

```text
öğrenci adı, ham puan, bonus
```

Örnek komut:

```powershell
npm run start -- Ada 85 5
```

Beklenen çıktı:

```text
Öğrenci: Ada
Ham puan: 85
Bonus: 5
Son puan: 90
```

### Tasks

1. Önce `node --version` ve çalışma klasörünüzü kaydedin.
2. Komut token'larını runtime, entry point ve kullanıcı argümanları olarak
   etiketleyin.
3. `process.argv` için `0`-`4` indeks tablosunu doldurun.
4. `studentName`, `rawScore`, `rawBonus`, `score`, `bonus` ve `finalScore`
   değişkenlerini oluşturun.
5. Her ad için temsil ettiği gerçek bilgiyi, başlangıç türünü ve neden `const`
   kullandığınızı README'de açıklayın.
6. Programı önce doğrudan `node` komutuyla çalıştırın.
7. Aynı komutu `package.json` içindeki `start` script'iyle çalıştırın.
8. Gerçek çıktıyı `expected-output.txt` ile karşılaştırın.
9. Dosyayı yanlış klasörden çalıştırarak hatayı yeniden üretin; belirtisini,
   kök nedenini ve düzeltmeyi README'ye yazın.
10. Bir arkadaşınızdan yalnız README'yi izleyerek programı çalıştırmasını
    isteyin; eksik adım varsa belgeyi düzeltin.

### Kademeli İpuçları

**İpucu 1:** İlk kullanıcı argümanı `argv[2]` ise üçüncü kullanıcı argümanı
hangi indekste olur?

**İpucu 2:** Ham puan ve ham bonus komut satırından string gelir. `+` işlemini
yapmadan önce hangi açık dönüşümü C08'de kullanmıştınız?

**İpucu 3:** npm script'iniz `"start": "node runtime-report.js"` olabilir.
Kullanıcı argümanlarını `npm run start -- ...` biçimiyle iletin.

**İpucu 4:** Başka öğrenci dosyayı bulamıyorsa önce README'de “hangi klasörde
olmalıyım?” bilgisinin bulunup bulunmadığını kontrol edin.

### Reference Solution

Önce kendi çözümünüzü çalıştırın. Ardından karşılaştırın:

```js
const studentName = process.argv[2];
const rawScore = process.argv[3];
const rawBonus = process.argv[4];

const score = Number(rawScore);
const bonus = Number(rawBonus);
const finalScore = score + bonus;

console.log(`Öğrenci: ${studentName}`);
console.log(`Ham puan: ${rawScore}`);
console.log(`Bonus: ${bonus}`);
console.log(`Son puan: ${finalScore}`);
```

`package.json`:

```json
{
  "name": "runtime-score-report",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node runtime-report.js"
  }
}
```

Bu çözümün gerekçesi, ham metinleri koruyup hesaplama değerlerini ayrı adlarda
üretmesidir. Böylece terminal sınırı, dönüşüm sınırı ve aritmetik adımı
izlenebilir kalır.

### Deliverables

- Dört dosyalı çalışma klasörü.
- İki farklı komutla başarılı yürütme kanıtı.
- `process.argv` indeks tablosu.
- Değişken/tür karar tablosu.
- Yanlış klasör hata raporu.
- Akran yeniden üretim sonucu ve belgeye yapılan en az bir iyileştirme.

### Evaluation Criteria

| Ölçüt | Puan |
|---|---:|
| Runtime/host/tool ayrımı doğru açıklanmış | 20 |
| Doğrudan Node.js ve npm script yürütmeleri çalışıyor | 20 |
| Argüman indeksleri ve dönüşüm sınırı doğru | 20 |
| Sürüm, klasör, komut, girdi, çıktı ve exit status belgelenmiş | 25 |
| Hata kanıtı ve kök neden açıklaması doğru | 10 |
| Dosya ve adlandırma düzeni okunabilir | 5 |

`V01-C38-AS01` için en az 80/100 ve “runtime/host ayrımı” ile “tekrar
üretilebilir kayıt” kritik ölçütlerinde sıfır hata gerekir.

## Reflection Questions

1. `console.log` hem tarayıcıda hem Node.js'te bulunurken neden onu doğrudan
   ECMAScript dil çekirdeğiyle özdeşleştirmemeliyiz?
2. Kaynak dosya ile çalışan process arasındaki farkı kendi cümlelerinizle nasıl
   açıklarsınız?
3. `node app.js Ada 85` komutunda kabuk, Node.js runtime'ı, giriş noktası ve
   program girdisi nerede ayrılır?
4. Program doğru çıktıyı bir kez üretmiş olsa bile neden tekrar üretilebilir
   sayılmayabilir?
5. `process.argv[3]` değerine `rawScore` adını vermek, yalnız `score` demekten
   hangi hata ayıklama avantajını sağlar?
6. Bir program hata mesajı yazdığı hâlde exit status `0` olursa otomasyon neyi
   yanlış anlayabilir?
7. Editördeki Run düğmesini kullanmak ile arka plandaki komutu bilmek birbirini
   neden dışlamaz?
8. C29'a geçtiğinizde runtime sürümü ve komutu sabit tutmak tür dönüşümü
   deneylerini nasıl daha güvenilir kılar?

## Chapter Summary

Bu chapter'a C08'de çalışan küçük bir dönüşüm programıyla başladık. Aynı dil
çekirdeğinin tarayıcı ve Node.js'te farklı host imkânlarıyla çalıştığını
`document` ve `process` karşılaştırması üzerinden gözledik. Ardından gözlemi
kaynak kod, ECMAScript kuralları, JavaScript motoru, runtime, host ve araç
katmanlarıyla adlandırdık.

Terminal komutuyla JavaScript satırının farklı diller ve yüzeyler olduğunu
ayırt ettik. `node runtime-report.js Ada 85` komutunu runtime, entry point ve
program argümanlarına ayırdık. Node.js sürecinin giriş dosyasını mevcut çalışma
klasörüne göre bulduğunu, `process.argv` dizisinin ilk iki konumu runtime ve
giriş noktası için ayırdığını, kullanıcı argümanlarının string olarak geldiğini
izledik.

C08'in ham girdi → dönüşüm → çıktı hattını gerçek terminal girdisine bağladık.
`studentName`, `rawScore`, `score`, `bonus` ve `finalScore` adlarının yalnız
syntax değil, veri yaşam çizgisini anlatan kararlar olduğunu gördük. Normal
çıktı, hata çıktısı ve exit status'un farklı kanıtlar sunduğunu ayırdık.

Son olarak npm script ile ortak başlangıç komutu kurduk ve “benim bilgisayarımda
çalıştı” ifadesini sürüm, klasör, komut, girdi, beklenen çıktı ve tamamlanma
durumu içeren tekrar üretilebilir çalışma kaydına dönüştürdük.

### Navigation

- Gelen yeterlik: `V01-C08` — Girdi, Çıktı ve Veri Dönüşümü
- Şimdiki yeterlik: `V01-C38` — Runtime ve tekrar üretilebilir workflow
- Sonraki yeterlik: `V01-C29` — JavaScript Tür Sistemi ve Dönüşüm Semantiği

C29'da aynı kontrollü çalışma ortamını kullanacağız. Bu kez `"85"`, `85`,
`undefined`, `NaN`, açık dönüşüm, örtük dönüşüm ve eşitlik davranışlarını
karşılaştıracağız. Ortamı kurmakla uğraşmak yerine gözlemin anlamına
odaklanabileceksiniz.

## Key Takeaways

- Kaynak kod çalışan süreç değildir; bir runtime tarafından yürütülmesi gerekir.
- JavaScript dili ile host ortamının sağladığı API'ler aynı sorumluluk değildir.
- Tarayıcı ve Node.js ortak dil çekirdeğine, farklı dış dünya imkânlarına
  sahiptir.
- Editör kodu yazdırır; terminal komutu ile runtime'ı başlatmak ayrı bir
  işlemdir.
- Göreli giriş dosyası mevcut çalışma klasörüne göre bulunur.
- `process.argv[0]` runtime yolunu, `[1]` giriş noktasını, `[2...]` kullanıcı
  argümanlarını taşır.
- Komut satırı argümanları metinsel gelir; ham ve dönüştürülmüş değerleri ayrı
  adlarda tutmak sınırı görünür kılar.
- Normal çıktı, hata çıktısı ve exit status birbirinden farklı kanıtlardır.
- Tekrar üretilebilir workflow; sürüm, klasör, komut, girdi, çıktı ve
  tamamlanma durumunu belgeler.
- Desteklenen sürümü kullanmak kadar gerçek sürümü kaydetmek de önemlidir.

## Further Reading

- [MDN JavaScript Execution Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model):
  Engine ve host ilişkisini chapter'daki başlangıç modelinden daha teknik
  düzeyde görmek için.
- [Node.js Command-line API](https://nodejs.org/api/cli.html): `node` komutunun
  giriş noktası, seçenek ve argüman sözleşmesini doğrulamak için.
- [Node.js Process API](https://nodejs.org/api/process.html): `process.argv`,
  `process.cwd()` ve `process.exitCode` davranışlarını resmî kaynaktan incelemek
  için.
- [npm Scripts](https://docs.npmjs.com/cli/using-npm/scripts/): Ortak proje
  komutlarının `package.json` içinde nasıl tanımlandığını öğrenmek için.
- Sonraki chapter: `V01-C29` JavaScript Tür Sistemi ve Dönüşüm Semantiği —
  komut satırından gelen string değerlerin dönüşüm davranışını güvenilir biçimde
  anlamak için.

## References

- Ecma International, [ECMAScript Language Specification](https://tc39.es/ecma262/).
- Mozilla, [JavaScript Execution Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model).
- Mozilla, [JavaScript Language Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview).
- Mozilla, [Console API](https://developer.mozilla.org/en-US/docs/Web/API/console).
- Node.js, [Command-line API](https://nodejs.org/api/cli.html).
- Node.js, [Process API](https://nodejs.org/api/process.html).
- Node.js, [Node.js Releases](https://nodejs.org/en/about/previous-releases).
- npm, [Scripts](https://docs.npmjs.com/cli/using-npm/scripts/).
- npm, [npm run-script](https://docs.npmjs.com/cli/commands/npm-run-script/).
- [V01-C38 Research Packet](../programming-fundamentals/research/v01-c38/research-packet.md).
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md).
