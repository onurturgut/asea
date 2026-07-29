---
document_type: "chapter"
chapter_id: "V01-C20"
volume_id: "V01"
title: "String'ler ve Metin İşleme"
slug: "stringler-ve-metin-isleme"
version: "0.1.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "8-10 saat"
prerequisites:
  - "V01-C08"
  - "V01-C14"
  - "V01-C17"
learning_outcomes:
  - "V01-LO031"
related_lab_ids:
  - "V01-C20-L01"
related_assessment_ids:
  - "V01-C20-AS01"
next_chapter_id: "V01-C21"
blueprint_id: "V01-C20-BP01"
last_updated: "2026-07-29"
---

# String'ler ve Metin İşleme

## Learning Objectives

Bu chapter'ın sonunda `V01-LO031` yeterliğini şu kanıtlarla göstereceksiniz:

- Ham metni kaybetmeden normalize, tokenize, filtre ve özetleme aşamalarından
  oluşan bir metin işleme hattı tasarlayabileceksiniz.
- Her aşamanın girdisini, çıktısını ve neden o sırada bulunduğunu
  açıklayabileceksiniz.
- Whitespace, Türkçe büyük/küçük harf, Unicode normalization ve empty input
  politikalarını görünür kararlar hâline getirebileceksiniz.
- Normal, sınır ve hata odaklı girdiler için beklenen ara/son değerleri test
  edebileceksiniz.
- JavaScript string uzunluğunun her zaman kullanıcının gördüğü karakter sayısı
  olmadığını code unit, code point ve grapheme ayrımıyla açıklayabileceksiniz.

Başarı ölçümüz birkaç `String` metodunu ezberlemek değildir. Yeni bir metin
problemi gördüğünüzde hangi dönüşüm aşamalarına ihtiyaç olduğunu belirlemeniz,
politikaları savunmanız ve davranışı testle görünür yapmanız gerekir.

## Prerequisites

C08'de girdi → dönüşüm → çıktı hattı kurdunuz. C14'te bir fonksiyonun parametre
ve dönüş değerini, C17'de koleksiyonların dolaşılmasını öğrendiniz. C19'un
öğretim bağlamında iç içe öğrenme gruplarından başlıklar topladınız.

Şu listeyi inceleyin:

```js
const rawTitles = [
  "  Fonksiyonlar  ",
  "JavaScript   TEMELLERİ",
  "İstanbul'da Kodlama",
  "",
];
```

Başlamadan önce yanıtlayın:

1. `rawTitles` neden tek bir string değil, array'dir?
2. Her eleman hangi türdedir?
3. Boş string geçerli bir string değeri midir?
4. İlk başlığın başında ve sonunda gördüğünüz boşluklar aramada sorun çıkarır mı?
5. Bir fonksiyon ham başlığı alıp temiz başlık döndürürse parametresi ve dönüş
   değeri ne olur?

`rawTitles`, sıralı ve birden fazla başlık taşıdığı için array'dir. Her eleman
string'dir; boş string de geçerli bir string değeridir, fakat ürün
sözleşmemizde anlamlı başlık olmayabilir. Bir fonksiyon tek bir `rawTitle`
string'i alıp yeni bir string veya token array'i döndürebilir.

Bu chapter C19'un recursion davranışını yeniden öğretmez. C19'un ürettiği ham
başlıkları gerçek bir metin işleme problemine dönüştürür.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Hazırlık ve başarısız eşleşme problemi | 45 dakika |
| String zihinsel modeli ve temel dönüşümler | 90 dakika |
| Türkçe case ve Unicode normalization | 90 dakika |
| Tokenization, empty input ve pipeline izi | 2 saat |
| Unicode karakter sınırları | 60 dakika |
| Hata avı ve uygulamalar | 90 dakika |
| Lab, quiz ve öz değerlendirme | 2-3 saat |

Toplam yaklaşık 8-10 saattir. Türkçe case/Unicode bölümünden ve birlikte
yapılan pipeline'dan sonra ara vermeniz önerilir.

## Introduction

### Ekranda aynı görünen metin, programda neden farklı davranır?

C19 sonunda ASEA'nın öğrenme gruplarındaki başlıkları topladığınızı düşünün.
Arama kutusuna `javascript temelleri` yazan öğrenci şu kayıtla eşleşmeyi
bekliyor:

```text
JavaScript   TEMELLERİ
```

İnsan gözü iki metnin aynı konuyu anlattığını kolayca görür. Program ise
kendiliğinden “fazla boşluğu önemseme, büyük harfi eşleştir, Türkçe kurallarını
kullan” kararı vermez.

Şu karşılaştırmayı tahmin edin:

```js
const savedTitle = "JavaScript   TEMELLERİ";
const query = "javascript temelleri";

console.log(savedTitle === query);
```

Sonuç `false` olur. Bunun nedeni string'lerin “anlam” taşımaması değildir;
programın eşitlik işlemi iki string'in değerini belirlenmiş kurallarla
karşılaştırır. Büyük/küçük harf ve üç boşluk ile tek boşluk aynı değildir.

İlk tepki bütün farklılıkları tek bir uzun satırda silmek olabilir:

```js
const result = savedTitle.trim().toLowerCase().split(/\s+/).join(" ");
```

Bu satır belirli girdi için işe yarayabilir. Fakat sıralanan kararlar görünmez
kalır:

- Hangi locale'in harf kuralları kullanıldı?
- Unicode açısından eşdeğer iki yazım ortaklaştırıldı mı?
- Boş girdi hangi sonucu üretti?
- Kelime ayırma politikası yalnız whitespace'e mi dayanıyor?
- Hata varsa hangi aşamada oluştu?

Bu chapter'da metni tek hamlede “temizlemek” yerine bir veri hattı
**pipeline** olarak işleyeceğiz. Her aşama bir soruyu cevaplayacak ve ara
değeri gözlenebilir bırakacak.

### Önce ilk küçük sorunu çözelim

```js
const rawTitle = "  Fonksiyonlar  ";
const trimmedTitle = rawTitle.trim();

console.log(trimmedTitle);
```

Çıktı:

```text
Fonksiyonlar
```

`rawTitle`, kaynaktan gelen özgün metni temsil eder. Adındaki `raw`, henüz ürün
politikasından geçmediğini anlatır. String türündedir; metinsel bir başlık
taşır. Değer yeniden atanmadığı için `const` kullanılır.

`trimmedTitle`, yalnız baştaki ve sondaki whitespace kaldırıldıktan sonraki
yeni string'dir. `trim()` özgün string'i yerinde değiştirmez. JavaScript
string'leri immutable'dır; dönüşüm yeni bir değer üretir. Bu yüzden ham ve
işlenmiş değerleri ayrı adlarda tutabiliriz.

**Anlama kontrolü:** `rawTitle` dönüşümden sonra hâlâ iki taraftaki boşlukları
taşır mı? Evet. Bu özellik hata raporunda kullanıcının gerçekten ne gönderdiğini
görmemizi sağlar.

## Core Concepts

### String nedir, ne değildir?

**String (metin dizisi)**, metinsel veriyi temsil eden bir değer türüdür.
JavaScript teknik olarak string'leri UTF-16 code unit dizileri olarak temsil
eder. Başlangıçta bir başlık, ad, açıklama veya komut girdisini string olarak
düşünürüz; ancak “string” demek “temiz”, “geçerli”, “tek kelime” veya “insanın
gördüğü karakter sayısıyla aynı uzunlukta” demek değildir.

```js
const courseTitle = "Programlama Temelleri";
const emptyTitle = "";
const numericText = "42";
```

Üçü de string'dir:

- `courseTitle` anlamlı bir başlık;
- `emptyTitle` sıfır uzunlukta bir metin;
- `numericText` rakam görüntüsü taşıyan metindir, number değildir.

Tür, değerin nasıl temsil edildiğine dair temel bilgi verir. Ürün
geçerliliğini tek başına garanti etmez.

### String'ler neden immutable?

Şu kodu izleyin:

```js
const rawLabel = "  JavaScript  ";
const cleanLabel = rawLabel.trim();
```

| Değişken | Değer |
|---|---|
| `rawLabel` | `"  JavaScript  "` |
| `cleanLabel` | `"JavaScript"` |

`trim()` ham değeri kesip biçmez; yeni string döndürür. Immutable davranış,
aynı ham veriden farklı amaçlara uygun temsiller üretebilmemizi sağlar:

```js
const displayTitle = rawLabel.trim();
const searchTitle = displayTitle.toLocaleLowerCase("tr-TR");
```

`displayTitle` kullanıcıya gösterilecek yazımı korur. `searchTitle`, eşleştirme
için küçük harfli temsildir. Arama kolaylığı uğruna gösterim metnini kaybetmeyiz.

### Whitespace yalnız space değildir

Gündelik dilde “boşluk” dediğimiz şey yalnız klavyedeki space karakteri
değildir. Tab ve satır sonu gibi whitespace değerleri de olabilir:

```js
const rawText = "\t  JavaScript\n";
const trimmedText = rawText.trim();

console.log(trimmedText);
```

`trim()` string'in başı ve sonundaki whitespace'i kaldırır. İçerideki
whitespace'e dokunmaz:

```js
const title = "JavaScript   Temelleri";
console.log(title.trim());
```

Çıktıda üç iç boşluk kalır. Bu hata değildir; `trim()` sözleşmesidir.

**Tahmin et:** `"   ".trim()` ne döndürür? Yalnız whitespace içeren metnin
sınırlarının tamamı kaldırılır ve `""` empty string kalır.

### Case conversion ürün politikasıdır

Arama için büyük/küçük harf farkını yok saymak isteyebiliriz:

```js
const title = "FONKSİYONLAR";
const searchTitle = title.toLocaleLowerCase("tr-TR");

console.log(searchTitle);
```

Çıktı:

```text
fonksiyonlar
```

Neden doğrudan `toLowerCase()` yerine `toLocaleLowerCase("tr-TR")` kullandık?
Türkçedeki büyük `I`, küçük `ı`; büyük `İ`, küçük `i` ile eşleşir. Locale'i
açık belirtmek, programın hangi dil politikasını uyguladığını belgeler.

Karşılaştırın:

```js
const city = "İSTANBUL";

console.log(city.toLowerCase());
console.log(city.toLocaleLowerCase("tr-TR"));
```

Görsel çıktı bazı ortamlarda birbirine yakın görünebilir; fakat varsayılan
mapping ilk `İ` için `i` ve combining dot dizisi üretebilir. Türkçe locale
sonucu `"istanbul"` olur.

`locale` değişkenini ayrıca tanımlayabiliriz:

```js
const locale = "tr-TR";
const searchTitle = title.toLocaleLowerCase(locale);
```

`locale`, BCP 47 dil/region etiketini taşıyan string'dir. `"tr-TR"` seçimi
teknik zorunluluktan değil, Türkçe içerik arama gereksiniminden gelir. Ürün
çok dilli olsaydı locale kullanıcı veya içerik metadata'sından gelebilirdi.

Burada önemli bir sınır var: Bir locale bütün diller için doğru case politikası
değildir. ASEA başlıkları Türkçe cümle içinde İngilizce teknik terim taşıyabilir:

```js
console.log("JAVASCRIPT".toLocaleLowerCase("tr-TR"));
console.log("JAVASCRIPT".toLocaleLowerCase("en-US"));
```

İlk sonuç `"javascrıpt"`, ikinci sonuç `"javascript"` olur. Türkçe locale,
İngilizce `I` harfinin hangi dilde kullanıldığını bilemez. Başlangıç
pipeline'ımız bu nedenle teknik ürün adlarının kanonik yazımını (`JavaScript`)
girdide korur ve Türkçe başlık case politikasını uygular. Gerçek çok dilli
arama; içerik dili metadata'sı, terim sözlüğü veya locale-aware arama
stratejisi gerektirir. “Her şeyi küçük harfe çevir” tek başına evrensel çözüm
değildir.

### Normalization kelimesinin iki düzeyi

Bu chapter'da **metin normalizasyonu**, farklı ham girdileri ürünün ortak işleme
politikasına getiren geniş süreçtir: trim, Unicode biçimi ve case gibi aşamalar
içerebilir.

**Unicode normalization** ise daha özel bir teknik işlemdir. Görsel olarak aynı
karakter farklı code point dizileriyle temsil edilebilir:

```js
const composed = "\u00E9";
const decomposed = "e\u0301";

console.log(composed);
console.log(decomposed);
console.log(composed === decomposed);
```

İkisi de `é` gibi görünür, doğrudan eşitlik `false` verir. NFC biçimine
getirelim:

```js
const normalizedComposed = composed.normalize("NFC");
const normalizedDecomposed = decomposed.normalize("NFC");

console.log(normalizedComposed === normalizedDecomposed);
```

Bu kez `true` elde ederiz.

Neden `"NFC"`? Kanonik olarak eşdeğer temsilleri mümkün olduğunda composed
biçimde ortaklaştırır ve genel metin alışverişinde yaygın bir politikadır.
`NFKC` gibi compatibility biçimleri bazı görünüm/anlam ayrımlarını silebilir;
ürün gereksinimi incelenmeden varsayılan temizlik aracı olarak kullanılmaz.

### Token nedir?

Bir metni sonraki işlem için anlamlı parçalara ayırdığımızda her parçaya
**token** deriz. Token'ın “kelime” olması zorunlu değildir. CSV'de alan, arama
sorgusunda terim, programlama dilinde sembol olabilir.

Bu chapter'daki sınırlı politikamız:

> Türkçe/Latin temelli ders başlıklarında, bir veya daha fazla whitespace ile
> ayrılan boş olmayan parçaları token say.

İlk başarısız tasarım:

```js
const title = "javascript   temelleri";
const tokens = title.split(" ");

console.log(tokens);
```

Sonuç:

```js
["javascript", "", "", "temelleri"]
```

`split(" ")` her tek ASCII space sınırında böler. Yan yana üç space, arada boş
parçalar üretir.

Sınırlı whitespace politikası:

```js
const tokens = title.split(/\s+/);
```

`/\s+/`, bir veya daha fazla whitespace dizisini ayırıcı olarak kullanır.
Burada regex dilini kapsamlı öğrenmiyoruz: `\s` whitespace sınıfı, `+` bir veya
daha fazla tekrar anlamındadır.

Fakat yeni bir sınır var:

```js
const emptyText = "";
console.log(emptyText.split(/\s+/));
```

Sonuç `[""]` olabilir. Bizim ürün sözleşmemizde empty input, bir boş token değil,
sıfır token üretmelidir.

### Empty input politikasını görünür kılmak

```js
function tokenize(searchTitle) {
  if (searchTitle === "") {
    return [];
  }

  return searchTitle.split(/\s+/);
}
```

`searchTitle`, daha önce trim/normalize/case aşamalarından geçmiş string
parametredir. Boşsa `[]` döner. Bu array sıfır token olduğu anlamına gelir.

Neden `null` veya `[""]` değil?

- `null`, “token koleksiyonu yok” gibi ayrı bir durum ekler ve çağıranın array
  işlemlerini keser.
- `[""]`, gerçekte bir anlamlı token varmış gibi `length === 1` üretir.
- `[]`, “koleksiyon var ama eleman yok” sözleşmesini doğru taşır.

### Birlikte yapalım: Tam başlık pipeline'ı

Önce aşamaları ayrı fonksiyonlara yazalım:

```js
function normalizeTitle(rawTitle, locale) {
  const trimmedTitle = rawTitle.trim();
  const unicodeTitle = trimmedTitle.normalize("NFC");
  const searchTitle = unicodeTitle.toLocaleLowerCase(locale);

  return searchTitle;
}

function tokenizeTitle(searchTitle) {
  if (searchTitle === "") {
    return [];
  }

  return searchTitle.split(/\s+/);
}

function createTitleSummary(rawTitle, locale) {
  const searchTitle = normalizeTitle(rawTitle, locale);
  const tokens = tokenizeTitle(searchTitle);
  const wordCount = tokens.length;

  return {
    rawTitle,
    searchTitle,
    tokens,
    wordCount,
  };
}
```

Çalıştıralım:

```js
const locale = "tr-TR";
const rawTitle = "  JavaScript   TEMELLERİ  ";
const summary = createTitleSummary(rawTitle, locale);

console.log(summary);
```

Beklenen yapı:

```js
const expectedSummary = {
  rawTitle: "  JavaScript   TEMELLERİ  ",
  searchTitle: "javascript   temelleri",
  tokens: ["javascript", "temelleri"],
  wordCount: 2,
};
```

`searchTitle` içindeki üç boşluğu neden tek space'e çevirmedik? Çünkü arama
temsili ve token listesi farklı ürün çıktılarıdır. Eğer kanonik arama başlığının
tek boşluklu olması gerekiyorsa token'ları `" "` ile birleştiren ayrı ve açık
bir formatlama aşaması ekleriz:

```js
const canonicalTitle = tokens.join(" ");
```

Şimdi tam izi görelim:

| Adım | İşlem | Değer | Tür |
|---:|---|---|---|
| 1 | Girdi | `"  JavaScript   TEMELLERİ  "` | string |
| 2 | `trim()` | `"JavaScript   TEMELLERİ"` | string |
| 3 | `normalize("NFC")` | `"JavaScript   TEMELLERİ"` | string |
| 4 | Türkçe case | `"javascript   temelleri"` | string |
| 5 | whitespace tokenization | `["javascript", "temelleri"]` | array of string |
| 6 | `tokens.length` | `2` | number |
| 7 | `tokens.join(" ")` | `"javascript temelleri"` | string |

Bu tablo pipeline'ın değer türünü de dönüştürdüğünü gösterir: string girer,
ara aşamalarda string kalır, tokenization array üretir, ölçüm number üretir,
formatlama tekrar string üretebilir.

### Her değişkenin gerekçesi

`rawTitle`, özgün kanıtı korur; yanlış case veya boşluk davranışını geriye dönük
inceleyebiliriz. `trimmedTitle`, sınır temizliğinin sonucunu tek başına test
ettirir. `unicodeTitle`, Unicode temsil politikasını görünür kılar.
`searchTitle`, gösterim için değil eşleştirme için hazırlanır. `tokens`,
işlenecek sıralı parçaları taşır. `wordCount`, token array'inden türetilen
number'dır; string `"2"` kullanılmaz çünkü ileride sayısal karşılaştırma ve
toplama yapılabilir.

Hepsinde `const` kullanılır; bir kez üretilen referans/değer aynı scope içinde
yeniden atanmaz. Pipeline ilerlemesi bir değişkeni tekrar tekrar değiştirmekle
değil, her aşamanın yeni sonucuna anlamlı ad vermekle görünür olur.

### Şimdi sen dene

Şu girdi için bütün ara değerleri yazın:

```js
const rawTitle = "\t İSTANBUL'DA   KODLAMA \n";
```

Beklenen:

- `trimmedTitle`: `"İSTANBUL'DA   KODLAMA"`
- `unicodeTitle`: görsel olarak aynı NFC metni
- `searchTitle`: `"istanbul'da   kodlama"`
- `tokens`: `["istanbul'da", "kodlama"]`
- `wordCount`: `2`
- `canonicalTitle`: `"istanbul'da kodlama"`

Çalıştırmadan önce özellikle ilk `İ` harfinin sonucunu tahmin edin.

### Parsing ile validation aynı değildir

**Parsing (ayrıştırma)**, metni belirlenmiş yapıya dönüştürmektir. Örneğin:

```js
const rawRecord = "Ada|85|Ankara";
const fields = rawRecord.split("|");
```

`fields`, `["Ada", "85", "Ankara"]` olur. Bu işlem üç alanın da geçerli
olduğunu kanıtlamaz:

- Ad boş olabilir.
- `"85"` henüz number değildir.
- Fazladan ayırıcı alan sayısını değiştirebilir.

Tokenization/parsing bize parçaları verir; validation parçaların sözleşmeye
uygunluğunu sınar. C20 parsing sınırını görünür kılar, kapsamlı input validation
tasarımını sonraki ilgili chapter'lara bırakır.

### Code unit, code point ve grapheme

Gündelik “karakter” sözcüğü teknik olarak belirsizdir. Üç düzeyi ayıralım:

- **Code unit:** JavaScript string indeksleme ve `length` gibi birçok API'nin
  kullandığı UTF-16 birimi.
- **Code point:** Unicode'da atanmış soyut değer; örneğin tilki emoji için tek
  code point.
- **Grapheme cluster:** Kullanıcının çoğunlukla tek görsel karakter olarak
  algıladığı bir veya birden fazla code point dizisi.

```js
const fox = "🦊";

console.log(fox.length);
console.log(Array.from(fox).length);
```

`fox.length` `2`, `Array.from(fox).length` `1` verir. Bir emoji UTF-16'da
surrogate pair denen iki code unit ile temsil edilir; iterator code point'i
birlikte tutar.

Ancak `Array.from` her kullanıcı-algılı karakteri çözmez:

```js
const family = "👨‍👦";

console.log(family.length);
console.log(Array.from(family).length);
```

Bu görsel tek emoji, birden fazla code point'ten oluşabilir. Kullanıcı-algılı
karakter sayımı gerekiyorsa `Intl.Segmenter` gibi grapheme-aware bir araç ve
açık locale/uyumluluk kararı gerekir:

```js
const segmenter = new Intl.Segmenter("tr-TR", {
  granularity: "grapheme",
});

const graphemes = Array.from(segmenter.segment(family));
console.log(graphemes.length);
```

İlk pipeline'ımızın kelime sayımı grapheme sayımına ihtiyaç duymaz. Bu ayrıntıyı
her metin işlemine zorla eklemeyiz; yalnız “karakter sınırı” gereksinimi varsa
doğru düzeyi seçeriz.

### Pipeline'ı başlık koleksiyonuna uygulamak

```js
const rawTitles = [
  "  Fonksiyonlar  ",
  "JavaScript   TEMELLERİ",
  "İstanbul'da Kodlama",
  "",
];

const summaries = rawTitles.map((rawTitle) =>
  createTitleSummary(rawTitle, "tr-TR"),
);
```

`rawTitles`, C19'dan gelen array of string'dir. `map`, her ham başlık için aynı
sözleşmede bir özet kaydı üretir. `summaries`, array of object/record olur.
Kaynak array değiştirilmez.

Boş başlık için beklenen:

```js
const expectedEmptySummary = {
  rawTitle: "",
  searchTitle: "",
  tokens: [],
  wordCount: 0,
};
```

Bu kayıt boş girdiyi gizlemez. P05 projesi isterse daha sonra boş başlığı rapor
dışında filtreleyebilir veya veri hatası olarak işaretleyebilir. Önce davranışı
doğru temsil ederiz, sonra ürün kararı uygularız.

## Engineering Perspective

### Normalization sınırı nerede olmalı?

Metin her kullanıldığında farklı biçimde normalize edilirse ekip içinde
eşleşmeyen sonuçlar doğar. Güvenilir sistem, normalization politikasını
belgeler:

- Ham değer saklanacak mı?
- Normalization girişte mi, arama indeksi oluştururken mi yapılacak?
- Hangi Unicode formu?
- Hangi locale?
- İç whitespace nasıl ele alınacak?
- Noktalama token'ın parçası mı?

Tek doğru mimari yoktur. Arama, gösterim ve hukuki kayıt ihtiyaçları farklıdır.
Örneğin kullanıcının adı gösterilirken özgün yazımı korumak; arama için ayrı
normalize alan üretmek daha güvenli olabilir.

### Veri kaybı görünür karar olmalı

Lower-case dönüşümü, whitespace sadeleştirme veya compatibility normalization
bilgi kaybettirebilir. Kaybın kabul edilebilirliği kullanım amacına bağlıdır.
Bu nedenle pipeline aşamaları adlandırılır ve ham veri mümkün olduğunda
korunur.

### Tek uzun zincir mi, adlandırılmış aşamalar mı?

Küçük ve iyi anlaşılmış bir dönüşümde method chaining okunabilir olabilir.
Öğretim, hata ayıklama ve değişen ürün politikalarında adlandırılmış ara
değerler daha iyi kanıt sağlar. Performans kararı varsayımla değil ölçümle
verilir; başlangıçta doğruluk ve açıklık önceliklidir.

### Locale ortamın varsayımına bırakılmamalı

`toLocaleLowerCase()` locale verilmeden runtime'ın varsayılan locale'ini
kullanabilir. Aynı içeriğin farklı ortamlarda değişmesini istemiyorsak ürün
politikasını `"tr-TR"` gibi açık bir etiketle belirtiriz.

## Real World Examples

### Arama indeksi

Kullanıcı `istanbul` yazdığında `"İSTANBUL"` kaydını bulmak için gösterim
metninden ayrı normalize arama alanı üretilebilir. C21 bu alanı koleksiyonda
aramayı öğretecek.

### Etiket sistemi

`" JavaScript "`, `"JavaScript"` ve `"javascript"` aynı etiketi temsil edecekse
trim + NFC + belgelenmiş case + whitespace politikası uygulanır. Tamamı büyük
harfli İngilizce teknik terimlerin Türkçe locale ile `javascrıpt` olabileceği
ayrıca test edilmelidir. Özgün etiket gösterim için korunur.

### CSV ve ayırıcı metin

`"Ada|85|Ankara"` metni ayırıcıyla alanlara bölünebilir. Fakat gerçek CSV,
tırnak, escape ve satır sonu kuralları nedeniyle basit `split(",")` işleminden
daha karmaşıktır. Üretimde format parser'ı kullanmak gerekir.

### Kullanıcı adı uzunluğu

Kullanıcı arayüzü “en fazla 20 karakter” diyorsa bunun code unit, code point,
grapheme veya byte anlamına gelip gelmediği belirlenmelidir. Aksi hâlde emoji
ve birleşik harf kullanan öğrenciler beklenmedik şekilde reddedilebilir.

## Common Mistakes

### `trim()` iç boşlukları düzeltir sanmak

Belirti: `"JavaScript   Temelleri"` hâlâ üç boşluk taşır. Kök neden `trim` ile
whitespace collapse işlemini aynı sanmaktır. `trim` yalnız sınırları temizler;
iç düzen için ayrı tokenization/formatlama politikası gerekir.

### `split(" ")` ile boş token üretmek

Belirti: kelime sayısı `4` görünürken insan iki kelime görür. Önce token array'ini
yazdırın. Boş string elemanlar varsa ayırıcı politikası çok dar olabilir.

### Empty input'u bir kelime saymak

`"".split(/\s+/)` sonucunun `[""]` olması `length === 1` üretir. Pipeline,
tokenization öncesi boşluğu açıkça ele alıp `[]` döndürmelidir.

### Türkçe case'i varsayılan mapping'e bırakmak

Belirti: `İstanbul` aramada beklenmeyen code point dizisi veya eşleşmeme
oluşturur. Kök neden locale politikasının gizlenmesidir. Türkçe ürün bağlamında
`toLocaleLowerCase("tr-TR")` kararı test edilir.

### Görsel eşitliği string eşitliği sanmak

`é` iki farklı code point dizisiyle aynı görünebilir. Doğrudan eşitlik
başarısızsa code point dizilerini ve normalization politikasını inceleyin.

### `length` değerini kullanıcı karakteri saymak

Emoji için beklenenden büyük değer gördüğünüzde JavaScript bozuk değildir;
`length` UTF-16 code unit sayar. Gereksiniminiz grapheme sayısıysa doğru
segmentasyon düzeyini seçin.

### Ham değeri kaybetmek

`rawTitle = rawTitle.trim()` gibi yeniden atama hatanın özgün kanıtını yok
edebilir. `rawTitle`, `trimmedTitle`, `searchTitle` gibi roller ayrılmalıdır.

## Best Practices

- Ham metni ve işleme temsilini ayrı tutun.
- Pipeline aşamalarını adlandırın ve tek tek test edin.
- Locale, Unicode formu ve whitespace politikasını belgeleyin.
- Empty input'u tesadüfi method sonucu olarak bırakmayın.
- Tokenization ile validation'ı ayırın.
- Kullanıcı-algılı karakter gereksiniminde code unit sayımına güvenmeyin.
- NFKC/NFKD gibi compatibility normalization'ı anlam kaybını incelemeden
  kullanmayın.
- Normal, sınır, Türkçe case ve Unicode eşdeğerlik vakalarını birlikte test
  edin.

## Hands-on Exercise

### Objective

Dağınık ASEA başlıklarını ham veriyi kaybetmeden aranabilir özet kayıtlarına
dönüştüren metin pipeline'ı oluşturmak.

### Requirements

Girdiler:

```js
const rawTitles = [
  "  JavaScript   TEMELLERİ ",
  "\tİstanbul'da Kodlama\n",
  "Fonksiyonlar",
  "   ",
  "\u0065\u0301 ile Unicode",
];
```

Her kayıt şunları üretmelidir:

- `rawTitle`
- `displayTitle` — trim + NFC, özgün case korunur
- `searchTitle` — `tr-TR` küçük harf
- `tokens`
- `canonicalTitle` — token'lar tek space ile birleştirilir
- `wordCount`

### Tasks

1. Her alanın gerçek bilgi, tür ve üretildiği aşamayı yazın.
2. `normalizeForDisplay`, `normalizeForSearch`, `tokenize` ve `summarizeTitle`
   fonksiyonlarını oluşturun.
3. İlk başlık için tam ara değer izi çıkarın.
4. Yalnız whitespace girdisinin sıfır token ürettiğini test edin.
5. `"İSTANBUL"` girdisinin `"istanbul"` ürettiğini test edin.
6. Composed/decomposed `é` temsillerinin NFC sonrası eşitlendiğini test edin.
7. Kaynak `rawTitles` array'inin değişmediğini gösterin.
8. Pipeline politikasını README biçiminde 5-8 cümleyle savunun.

### Kademeli İpuçları

**İpucu 1:** Display metni case dönüşümüne ihtiyaç duymayabilir; arama metni
duyar.

**İpucu 2:** Empty string kontrolü tokenization fonksiyonunda `[]` döndürebilir.

**İpucu 3:** Önce `trim`, sonra `normalize("NFC")`; ardından arama için locale
case dönüşümü kullanın.

**İpucu 4:** `canonicalTitle`, `tokens.join(" ")` ile üretilebilir.

### Reference Solution

```js
function normalizeForDisplay(rawTitle) {
  return rawTitle.trim().normalize("NFC");
}

function normalizeForSearch(displayTitle, locale) {
  return displayTitle.toLocaleLowerCase(locale);
}

function tokenize(searchTitle) {
  if (searchTitle === "") {
    return [];
  }

  return searchTitle.split(/\s+/);
}

function summarizeTitle(rawTitle, locale) {
  const displayTitle = normalizeForDisplay(rawTitle);
  const searchTitle = normalizeForSearch(displayTitle, locale);
  const tokens = tokenize(searchTitle);
  const canonicalTitle = tokens.join(" ");
  const wordCount = tokens.length;

  return {
    rawTitle,
    displayTitle,
    searchTitle,
    tokens,
    canonicalTitle,
    wordCount,
  };
}

const summaries = rawTitles.map((rawTitle) =>
  summarizeTitle(rawTitle, "tr-TR"),
);

console.log(summaries);
```

Çözüm ham veriyi değiştirmez; gösterim ile arama temsilini ayırır ve empty
input'u sıfır token olarak modeller.

### Deliverables

- Çalışan JavaScript dosyası.
- Pipeline diyagramı.
- En az beş vakalık test tablosu.
- Bir tam ara değer izi.
- Değişken/tür karar tablosu.
- Politika ve bilinen sınırlar notu.

### Evaluation Criteria

| Ölçüt | Puan |
|---|---:|
| Pipeline aşamaları ve sıra gerekçesi | 25 |
| Türkçe case ve NFC politikası | 20 |
| Whitespace/empty input davranışı | 20 |
| Ara değer ve tür izi | 15 |
| Testler ve ham veriyi koruma | 15 |
| Açıklık ve adlandırma | 5 |

Geçme eşiği `80/100`; Türkçe case, empty input ve ham veriyi koruma kritik
ölçütlerdir.

## Reflection Questions

1. String türü neden metnin ürün açısından geçerli olduğunu kanıtlamaz?
2. Display ve search temsillerini ayırmak hangi veri kaybını önler?
3. `trim`, Unicode normalization ve case conversion neden aynı işlem değildir?
4. Türkçe içerikte locale'i gizli bırakmanın sonucu ne olabilir?
5. Tokenization neden validation değildir?
6. Empty input için `[]` seçiminin sözleşme avantajı nedir?
7. `length` hangi durumda doğru, hangi durumda yanlış ölçüdür?
8. Pipeline sırasını değiştirirseniz hangi testlerle davranışı doğrularsınız?
9. C19'daki başlık toplama ile C20'deki metin işleme nasıl tek ürün akışına
   dönüşüyor?
10. C21 arama algoritması bu chapter'ın hangi çıktısını kullanacak?

## Chapter Summary

C19'dan gelen ham başlıkların string olmasının güvenilir arama için yeterli
olmadığını gördük. Metin işleme hattını trim, Unicode NFC, locale-aware case,
tokenization, empty-input politikası, ölçüm ve formatlama aşamalarına ayırdık.

Ham metni koruyup her ara değere rol adı verdik. Türk öğrenci bağlamında
`tr-TR` politikasının `I/ı` ve `İ/i` eşleşmeleri için önemli olduğunu gördük.
Görsel olarak aynı metinlerin farklı Unicode dizileri taşıyabileceğini ve NFC
ile kanonik eşdeğerliği ortaklaştırabileceğimizi öğrendik.

String `length` değerinin UTF-16 code unit saydığını; code point ve grapheme'in
farklı problem düzeyleri olduğunu ayırdık. Tokenization'ın validation olmadığını
ve empty input'un açıkça sıfır token olarak modellenmesi gerektiğini kurduk.

P05 Structured Data Processor artık iç içe kayıtlardan başlık toplamakla
kalmıyor; gösterim, arama ve kelime özeti üretebiliyor. C21 bu normalize başlık
koleksiyonu üzerinde arama algoritmalarını inceleyecek.

### Navigation

- Önceki: `V01-C19` — Özyineleme ve Özyinelemeli Düşünme
- Şimdi: `V01-C20` — String'ler ve Metin İşleme
- Sonraki: `V01-C21` — Arama Algoritmaları

## Key Takeaways

- String türü, metnin temiz veya geçerli olduğu anlamına gelmez.
- JavaScript string'leri immutable'dır; metotlar yeni değer üretir.
- `trim()` yalnız sınır whitespace'ini kaldırır.
- Case conversion açık locale politikasına dayanmalıdır.
- Unicode normalization ile case conversion farklı işlemlerdir.
- `split(" ")`, çoklu whitespace'te boş token üretebilir.
- Empty input için `[]`, sıfır token'ı doğru temsil eder.
- Parsing parçalar; validation parçaların geçerli olduğunu sınar.
- `length` code unit sayar, her zaman grapheme saymaz.
- Ham, display, search ve token temsillerini ayırmak hata ayıklamayı kolaylaştırır.
- İyi pipeline her aşamayı test edilebilir ve gerekçelendirilebilir yapar.

## Further Reading

- [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String):
  UTF-16, code point ve grapheme sınırını derinleştirmek için.
- [MDN String.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize):
  NFC/NFD/NFKC/NFKD davranışlarını karşılaştırmak için.
- [MDN toLocaleLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase):
  Türkçe case örneklerini resmî davranışla doğrulamak için.
- [Unicode Normalization Forms](https://unicode.org/reports/tr15/):
  Normalization politikalarının teknik sınırlarını anlamak için.
- [Unicode Text Segmentation](https://unicode.org/reports/tr29/):
  Grapheme, word ve sentence sınırlarının neden ayrı problemler olduğunu görmek
  için.

## References

- Ecma International, [ECMAScript Text Processing](https://tc39.es/ecma262/multipage/text-processing.html).
- Ecma International, [ECMAScript Internationalization API](https://tc39.es/ecma402/).
- Mozilla, [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
- Mozilla, [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize).
- Mozilla, [String.prototype.toLocaleLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).
- Mozilla, [Intl.Segmenter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter).
- Unicode Consortium, [UAX #15: Unicode Normalization Forms](https://unicode.org/reports/tr15/).
- Unicode Consortium, [UAX #29: Unicode Text Segmentation](https://unicode.org/reports/tr29/).
- [V01-C20 Research Packet](../programming-fundamentals/research/v01-c20/research-packet.md).
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md).
