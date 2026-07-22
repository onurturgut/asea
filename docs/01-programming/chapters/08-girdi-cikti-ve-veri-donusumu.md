---
document_type: "chapter"
chapter_id: "V01-C08"
volume_id: "V01"
title: "Girdi, Çıktı ve Veri Dönüşümü"
slug: "girdi-cikti-ve-veri-donusumu"
version: "0.1.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "8-10 hours"
prerequisites: ["V01-C04", "V01-C07"]
learning_outcomes: ["V01-LO012"]
related_lab_ids: ["V01-C08-L01"]
related_assessment_ids: ["V01-C08-AS01"]
next_chapter_id: "V01-C09"
language: "tr"
last_updated: "2026-07-22"
---

# Girdi, Çıktı ve Veri Dönüşümü

## Learning Objectives

Bu chapter sonunda:

- girdi (Input), çıktı (Output) ve güven sınırı (Trust Boundary) kavramlarını ayırabilecek;
- bir alan için tür, biçim, aralık, zorunluluk ve hata davranışı içeren girdi sözleşmesi
  (Input Contract) yazabilecek;
- ayrıştırma (Parsing) ile doğrulama (Validation) arasındaki farkı örnekle açıklayabilecek;
- sözdizimsel ve anlamsal doğrulamayı ayırabilecek;
- normalleştirme (Normalization), dönüştürme (Transformation) ve biçimlendirme (Formatting)
  aşamalarını doğru sorumluluklara yerleştirebilecek;
- `Number`, `parseInt` ve `JSON.parse` davranışlarını sözleşmeye göre seçebilecek;
- `receive → parse → validate → normalize → transform → format → output` hattını tabloyla
  izleyebilecek;
- normal, sınır ve geçersiz girdiler için kontrollü hata geri bildirimi tasarlayabilecek;
- AI tarafından üretilen veri hattındaki gizli varsayımları test ve resmî kaynakla
  denetleyebileceksin.

`V01-LO012` başarı kanıtı yalnız “program doğru çıktıyı verdi” değildir. En az bir açık girdi
sözleşmesi, geçersiz vaka listesi, üç veya daha fazla ayrılmış dönüşüm aşaması, aşama başına
temsil/tür kaydı ve çalıştırılmış test kanıtı gerekir.

## Prerequisites

[C04](./04-algoritmalar-sozde-kod-ve-izleme.md) üzerinden algoritma, sözde kod, izleme tablosu
ve kabul ölçütü; [C07](./07-operatorler-ve-ifadeler.md) üzerinden tür duyarlı ifadeler, açık
dönüşüm, ara değer ve değerlendirme tablosu bilgisi gerekir.

Başlangıç kontrolü:

```js
const rawAge = "20";
const nextAge = rawAge + 1;
```

`nextAge` değerini ve türünü açıklayamıyorsan C07'deki `+` ve conversion bölümlerine dön. Bir
gereksinimi girdi, çıktı, normal durum, sınır durum ve geçersiz durumlara ayıramıyorsan C04'ün
problem sözleşmesini tekrar et.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Ön bilgi ve tahmin testi | 30 dakika |
| Ana ders ve kişisel notlar | 240–300 dakika |
| Pipeline/contract tabloları | 90 dakika |
| Alıştırmalar ve quiz | 90–120 dakika |
| Laboratuvar ve AI denetimi | 150–180 dakika |
| Aralıklı tekrar | 45 dakika |
| **Toplam** | **8–10 saat** |

## Introduction

Bir kullanıcı kayıt ekranına yaşını `"24"` olarak yazdı. Ekranda gördüğün şey bir sayı gibi
görünür; programın aldığı şey ise çoğu giriş mekanizmasında metindir. Aşağıdaki kısa kod ilk
bakışta çalışıyor gibi görünebilir:

```js
const rawAge = "24";
const ageNextYear = rawAge + 1;

console.log(ageNextYear); // "241"
```

Sorun JavaScript'in “mantıksız” olması değildir. Program, girdi sözleşmesini kurmadan String
ile Number'ı `+` işleminde birleştirmiştir. Şimdi yalnız `Number(rawAge)` ekleyelim:

```js
const age = Number(rawAge);
const ageNextYear = age + 1;
```

Bu sürüm `"24"` için doğru görünür. Peki boş metin, `"24 yaş"`, `"-3"`, `"999"`, `"3.5"` veya
`"bilinmiyor"` geldiğinde ne olacak? Dönüştürmenin başarılı görünmesi, değerin kayıt sistemi
için kabul edilebilir olduğunu kanıtlamaz. Örneğin `Number("")` Number 0 üretir. Teknik olarak
bir dönüşüm olmuştur; iş kuralı bakımından “yaş girilmedi” durumu kaybolmuştur.

Gerçek yazılımın önemli bölümü bu sınırda yaşar. Veriler terminalden, formdan, dosyadan,
ortam değişkeninden, API'den, sensörden veya başka bir ekipten gelir. Kaynağı ne olursa olsun
program, dış verinin türünü, biçimini, anlamını veya güvenilirliğini varsayamaz. Dışarıdan gelen
veri kötü niyetli olmak zorunda değildir; eski sürüm, yanlış yerel ayar, kullanıcı hatası,
eksik belge veya sistem arızası nedeniyle de beklenenden farklı olabilir.

Bu chapter'da şu zihinsel modeli kuracağız:

```text
Dış dünya
   ↓
Receive → Parse → Validate → Normalize → Transform → Format → Output
   ↓         ↓          ↓           ↓           ↓          ↓
 raw      typed?      allowed?    canonical   domain      audience
```

Her ok bir sözleşmedir. Her aşama ne aldığını, ne ürettiğini ve başarısızlık durumunda ne
yaptığını açıklamalıdır. Bir aşamanın çıktısı sonraki aşamanın girdisidir. Hatanın nerede
oluştuğunu bu ayrım sayesinde bulabiliriz.

## Core Concepts

### Girdi ve çıktı birer sınır kavramıdır

**Girdi**, programın dışından veya başka bir bileşenden programa giren veridir. **Çıktı**,
programın bir kullanıcıya, dosyaya, terminale, başka bir bileşene veya sisteme sunduğu
temsildir. Aynı değer bir aşama için çıktı, sonraki aşama için girdi olabilir.

Örnek kaynaklar:

| Kaynak | Ham temsil | Tipik risk |
|---|---|---|
| Terminal satırı | String | boşluk, yanlış tür, eksik değer |
| HTML formu | çoğunlukla String | client kuralının atlanması |
| JSON dosyası | serialized text | syntax doğru, shape yanlış olabilir |
| Ortam değişkeni | String veya eksik | typo, boş değer, gizli bilgi |
| API isteği | bytes/structured data | beklenmeyen alan, eski sürüm, kötü niyet |
| Sensör | numeric/binary reading | aralık dışı, ölçüm hatası, birim farkı |

Çıktının da sözleşmesi vardır. Terminalde kullanıcıya gösterilen `"1.234,50 ₺"` ile başka bir
sisteme gönderilen `{ "amountInCents": 123450 }` aynı anlamı farklı tüketiciler için temsil
eder. İnsan için okunabilir biçimi iç hesaplama değeri olarak kullanmak yeni parsing sorunları
üretir.

### Güven sınırı

**Güven sınırı**, verinin farklı güven ve sözleşme koşulları arasından geçtiği noktadır. “Dış
girdi güvensizdir” cümlesi kullanıcıya düşman olmak anlamına gelmez. Program, veriyi henüz
kanıtlanmamış kabul eder. Bu yaklaşım şu kaynakların tamamına uygulanır:

- kullanıcı girdisi;
- başka servisin yanıtı;
- daha önce kaydedilmiş dosya;
- yönetici paneli;
- kendi takımının ürettiği eski veri;
- AI tarafından üretilmiş yapılandırma;
- test fixture'ı dışında production data.

Güven, kaynağın adına değil doğrulanan sözleşmeye bağlanır. “Bu veri bizim servisten geliyor”
demek, servisin bug, sürüm farkı veya bozuk kayıt üretemeyeceğini kanıtlamaz.

### Girdi sözleşmesi yazmak

Koddan önce her alan için şu soruları yanıtla:

| Sözleşme boyutu | Soru | Yaş alanı örneği |
|---|---|---|
| Presence | Alan zorunlu mu? | Evet |
| Raw representation | Nasıl geliyor? | String |
| Target type | İçeride ne olmalı? | Number integer |
| Syntax | Hangi metin biçimi kabul? | Yalnız onluk rakamlar |
| Range | Hangi değerler geçerli? | 13–120 |
| Normalization | Eşdeğer çeşitler? | baş/son boşluğu kaldır |
| Invalid behavior | Hata nasıl döner? | alan kodu + düzeltme mesajı |
| Output | Nasıl gösterilir? | `24 yaş` |

Sözleşme, kodun davranışını önceden sınırlar. `"024"` kabul edilecek mi? `"24.0"` geçerli mi?
`" 24 "` normalize edilecek mi? Bu soruların tek evrensel cevabı yoktur. Kimlik kodunda leading
zero anlamlı olabilir; yaşta olmayabilir. Karar domain'e aittir.

### Pipeline aşamaları

Bu chapter için temel hat:

1. **Receive:** Ham veriyi kaynaktan al.
2. **Parse:** Dış temsili program değerine yorumla.
3. **Validate:** Değerin tür, biçim, aralık ve iş kurallarına uyduğunu kanıtla.
4. **Normalize:** Kabul edilen eşdeğer girdileri tutarlı iç biçime getir.
5. **Transform:** Domain için yeni değer veya kayıt üret.
6. **Format:** İç değeri hedef tüketiciye uygun temsile çevir.
7. **Output:** Sonucu doğru kanala gönder.

Her problem bütün aşamaları ayrı fonksiyon yapmak zorunda değildir. Ancak zihinsel ayrım
korunmalıdır. Küçük bir programda parse ve validate aynı fonksiyonda olabilir; yine de hangi
kontrolün representation, hangisinin domain kararı olduğunu açıklayabilmelisin.

### Ayrıştırma: sembollerden değere

**Ayrıştırma**, dış temsilin kurallarını okuyup programın çalışabileceği bir değer veya yapı
üretir. `"42"` metnini Number 42'ye, JSON metnini object'e veya CSV satırını alanlara ayırmak
örnektir.

```js
const rawCount = "42";
const count = Number(rawCount);
```

Parse işleminin üç olası sonucu vardır:

- istenen değer başarıyla üretildi;
- temsil geçersiz olduğu için kontrollü failure oluştu;
- parser beklenenden daha permissive davranıp kısmi/yanlış değeri kabul etti.

Sonuncusu en tehlikeli öğrenme noktalarından biridir. `parseInt` baştaki uygun tamsayı bölümünü
okuyup geri kalan metinde durabilir:

```js
console.log(Number("12px"));       // NaN
console.log(parseInt("12px", 10)); // 12
```

CSS benzeri `"12px"` değerinden sayısal önek almak bilerek isteniyorsa `parseInt` uygun olabilir.
Bir yaş alanının tamamının tamsayı olmasını istiyorsan kısmi kabul sözleşmeyi ihlal eder. Araç
seçimi “hangisi kolay?” değil, “hangi acceptance behavior gerekiyor?” sorusuna bağlıdır.

### `Number` davranış matrisi

`Number` dönüşümünü ezberlemek yerine sınır vakalarını deneyle:

| Ham değer | `Number(raw)` | Kabul kararı |
|---|---:|---|
| `"24"` | 24 | sözleşmeye göre değerlendir |
| `" 24 "` | 24 | whitespace policy gerekir |
| `""` | 0 | eksik girdiyi gizleyebilir |
| `"   "` | 0 | eksik girdiyi gizleyebilir |
| `"24x"` | `NaN` | reddet |
| `"3.5"` | 3.5 | integer gerekiyorsa reddet |
| `"Infinity"` | `Infinity` | finite gerekiyorsa reddet |
| `null` | 0 | presence hatasını gizleyebilir |
| `undefined` | `NaN` | reddet |

Bu nedenle sağlam akış önce presence/empty kontrolü yapar, sonra dönüştürür, ardından result
type/range doğrular:

```js
function parseRequiredAge(rawAge) {
  if (typeof rawAge !== "string" || rawAge.trim() === "") {
    return { ok: false, code: "AGE_REQUIRED" };
  }

  const age = Number(rawAge);

  if (!Number.isInteger(age)) {
    return { ok: false, code: "AGE_MUST_BE_INTEGER" };
  }

  return { ok: true, value: age };
}
```

Bu fonksiyon henüz 13–120 domain aralığını kontrol etmez. Parse ile semantic validation'ı
bilinçli olarak ayırıyoruz.

### Doğrulama: kabul edilebilir mi?

**Doğrulama**, değerin tanımlanmış kısıtları karşılayıp karşılamadığını belirler. İki düzey
özellikle önemlidir:

- **Sözdizimsel doğrulama:** temsil beklenen biçimde mi? Örneğin yalnız onluk rakamlar.
- **Anlamsal doğrulama:** değer bu iş bağlamında anlamlı ve izinli mi? Örneğin yaş 13–120.

`"999"` başarıyla Number 999'a parse edilir ve syntactically tam bir integer'dır; kayıt sistemi
için semantically invalid olabilir. `"2026-02-30"` date-like syntax taşıyabilir fakat takvimde
geçerli bir tarih değildir. Parse success ile validity aynı değildir.

### Alan doğrulaması ve kayıt doğrulaması

Tek alan kuralları yeterli olmayabilir. Başlangıç ve bitiş tarihleri ayrı ayrı geçerli olsa bile
başlangıç bitişten sonra olamaz. `password` ve `passwordConfirmation` tek tek String olabilir;
birlikte eşleşmelidir. Bu kurallara cross-field veya record-level validation denir.

Başlangıç düzeyinde şu ayrımı kullan:

```text
Field validation:
- name zorunlu ve 2–50 karakter
- age integer ve 13–120
- consent Boolean

Record validation:
- age 18'in altındaysa guardianConsent gerekir
- email ile emailConfirmation eşleşir
```

C09 Boolean logic'i derinleştirecektir. Burada yalnız validation kararlarının açık sözleşmeye
dayanması gerektiğini kuruyoruz.

### Hızlı reddetmek ve bütün hataları toplamak

İki geçerli tasarım vardır:

- **Fail fast:** İlk hatada dur. Sistem komutu veya kritik invariant için basit olabilir.
- **Collect errors:** Uygun bütün alan hatalarını topla. Form kullanıcısının tek seferde düzeltme
  yapmasını kolaylaştırır.

İkisini rastgele karıştırma. Bir kayıt formunda ilk hatayı her gönderimde tek tek göstermek kötü
kullanıcı deneyimi olabilir. Fakat bozuk JSON parse edilmeden alan validation yapılamaz; önce
parse failure çözülmelidir. Hata toplama, aşama sınırlarına saygı duyar.

```js
function validateAge(age) {
  const errors = [];

  if (!Number.isInteger(age)) {
    errors.push({ field: "age", code: "MUST_BE_INTEGER" });
  } else if (age < 13 || age > 120) {
    errors.push({ field: "age", code: "OUT_OF_RANGE" });
  }

  return errors;
}
```

### Normalleştirme: aynı anlam için tutarlı biçim

**Normalleştirme**, kabul edilmiş eşdeğer girdileri tutarlı iç temsile getirir. Baş/son boşluğu
kaldırmak, bir ürün kodunu tanımlı case policy'ye getirmek veya Unicode canonical form seçmek
örnektir.

```js
const normalizedName = rawName.trim().normalize("NFC");
```

Ancak her alanı `trim().toLowerCase()` yapmak iyi bir evrensel kural değildir. Password'deki
boşluk anlamlı olabilir. Kullanıcı adının büyük/küçük harfi display için korunmak istenebilir.
Türkçe `I`, `İ`, `ı`, `i` dönüşümleri locale kararına bağlıdır. Normalization, “veriyi
temizlemek” gibi belirsiz bir refleks değil, anlam koruma sözleşmesidir.

Normalization öncesi şu soruları sor:

1. Hangi varyasyonlar gerçekten eşdeğer?
2. Hangi özgün bilgi kaybolacak?
3. Arama/kimlik/display ihtiyaçları aynı mı?
4. Orijinal temsil ayrıca saklanmalı mı?
5. Locale ve Unicode politikası nedir?

### Dönüştürme: yeni domain değeri üretmek

**Dönüştürme**, doğrulanmış/normalize edilmiş veriden yeni değer veya yapı üretir. Ad ve soyadı
bir kayıt nesnesinde birleştirmek, kuruş değerinden sipariş toplamı hesaplamak veya alanları
internal record'a map etmek örnektir.

```js
const registration = {
  displayName: normalizedName,
  age,
  canJoinAdultProgram: age >= 18,
};
```

C09'daki karar mantığını burada derinleştirmiyoruz. Önemli olan transformation'ın yalnız
validated values üzerinde çalışmasıdır. Domain fonksiyonunun içinde tekrar raw string parse
etmek, trust boundary'yi her yere yayar.

### Biçimlendirme: tüketiciye uygun temsil

**Biçimlendirme**, iç değeri insan veya makine tüketicisine uygun dış temsile çevirir.

```js
const amountInCents = 123_450;
const amount = amountInCents / 100;

const displayAmount = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
}).format(amount);
```

`displayAmount` hesaplama girdisi değildir. `"₺1.234,50"` tekrar Number'a çevrilmeye
çalışılırsa locale-specific parsing problemi oluşur. Internal model mümkün olduğunca stable,
machine-usable değer tutar; display boundary format uygular.

### Çıktı tüketicisini tanımak

“Çıktı üret” tek bir görev değildir. Tüketici şunlardan biri olabilir:

- terminal kullanan öğrenci;
- ekran okuyucu kullanan kişi;
- başka bir program;
- JSON dosyası;
- log/monitoring sistemi;
- yazıcı veya rapor.

İnsan çıktısı açıklayıcı labels ve düzeltme yolu ister. Machine output stable field names,
types ve format sözleşmesi ister. Aynı metni iki tüketiciye gönderip ikisinin de doğru
yorumlamasını beklemek risklidir.

```js
const machineOutput = JSON.stringify({
  age: 24,
  status: "accepted",
});

const humanOutput = "Kayıt kabul edildi. Yaş: 24";
```

### Hata mesajı bir ürün çıktısıdır

“Invalid input” teknik olarak bir hata mesajıdır fakat öğrencinin veya kullanıcının neyi
düzeltmesi gerektiğini söylemez. Erişilebilir ve eyleme dönük hata:

- hangi alanın hatalı olduğunu belirtir;
- hangi kuralın beklediğini açıklar;
- mümkünse düzeltme örneği verir;
- yalnız renge dayanmaz;
- hassas girdiyi tekrar göstermez;
- internal stack trace'i kullanıcıya sızdırmaz.

```js
const error = {
  field: "age",
  code: "AGE_OUT_OF_RANGE",
  message: "Yaş 13 ile 120 arasında olmalıdır.",
};
```

Error code machine için stable, message insan için anlaşılır olabilir. Localization gerektiğinde
code sabit kalır, message değişebilir.

### JSON parse başarısı neden yetmez?

```js
const raw = '{"name":"Ada","age":"24"}';
const parsed = JSON.parse(raw);
```

Bu kod syntax bakımından geçerli JSON'u object'e dönüştürür. Fakat `age` hâlâ String'dir; name
boş olabilir; beklenmeyen alanlar bulunabilir. `JSON.parse` schema veya business validation
yapmaz.

```js
function validateRegistrationShape(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, code: "RECORD_REQUIRED" };
  }

  if (typeof value.name !== "string" || typeof value.age !== "string") {
    return { ok: false, code: "FIELDS_INVALID" };
  }

  return { ok: true, value };
}
```

İleri schema libraries daha sonra kullanılabilir; zihinsel model aynı kalır.

### Tam iz: kayıt girdisi

Ham kayıt:

```js
const rawRecord = {
  name: "  Ada Lovelace  ",
  age: "36",
  email: " ADA@EXAMPLE.COM ",
};
```

| Aşama | Girdi temsili | İşlem | Çıktı | Failure |
|---:|---|---|---|---|
| Receive | external object | alanları al | raw record | veri yok |
| Parse | age String | Number conversion | age Number 36 | NaN/non-integer |
| Validate | typed fields | range/length checks | accepted fields | field errors |
| Normalize | accepted Strings | trim + policy | canonical strings | data-loss risk |
| Transform | normalized fields | internal record | registration | invariant failure |
| Format | registration | human view | summary String | locale failure |
| Output | summary | terminal write | visible result | output channel error |

Burada email'i lower-case yapmak domain policy'dir. Email local-part case davranışının ve gerçek
mail sistemi uyumluluğunun ayrıntıları bu chapter'ın dışındadır. Örnek, “bütün email'i daima
lower-case yap” evrensel kuralı üretmez.

### Çalıştırılabilir kayıt hattı

```js
function parseAge(rawAge) {
  if (typeof rawAge !== "string" || rawAge.trim() === "") {
    return { ok: false, error: { field: "age", code: "REQUIRED" } };
  }

  const age = Number(rawAge);

  if (!Number.isInteger(age)) {
    return { ok: false, error: { field: "age", code: "INTEGER_REQUIRED" } };
  }

  return { ok: true, value: age };
}

function validateAge(age) {
  if (age < 13 || age > 120) {
    return { ok: false, error: { field: "age", code: "OUT_OF_RANGE" } };
  }

  return { ok: true, value: age };
}

function normalizeName(rawName) {
  if (typeof rawName !== "string") {
    return { ok: false, error: { field: "name", code: "STRING_REQUIRED" } };
  }

  const name = rawName.trim().normalize("NFC");

  if (name.length < 2 || name.length > 50) {
    return { ok: false, error: { field: "name", code: "LENGTH" } };
  }

  return { ok: true, value: name };
}

function buildRegistration(rawRecord) {
  const parsedAge = parseAge(rawRecord.age);
  const normalizedName = normalizeName(rawRecord.name);
  const errors = [];

  if (!parsedAge.ok) errors.push(parsedAge.error);
  if (!normalizedName.ok) errors.push(normalizedName.error);

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  const validatedAge = validateAge(parsedAge.value);

  if (!validatedAge.ok) {
    return { ok: false, errors: [validatedAge.error] };
  }

  return {
    ok: true,
    value: {
      name: normalizedName.value,
      age: validatedAge.value,
    },
  };
}
```

Bu kod kusursuz bir production validator değildir; chapter'ın aşama ayrımını görünür kılan
başlangıç modelidir. Örneğin `rawRecord` object değilse property access fail olabilir. Lab'da
outer shape contract eklenecektir.

### Result modeli ile kontrollü failure

Örneklerde `{ ok: true, value }` veya `{ ok: false, errors }` kullandık. Bu, başarı ve beklenen
input failure'ını explicit kılar. `throw` her zaman yanlış değildir; programlama hatası,
beklenmeyen sistem failure veya caller contract'ına göre uygun olabilir. Chapter'ın amacı tek
hata mekanizmasını zorunlu kılmak değil, failure davranışını tesadüfe bırakmamaktır.

Beklenen kullanıcı hatalarında error result, formun birden fazla hatayı göstermesine yardım
eder. JSON syntax bozukluğu gibi parse exception'ı boundary'de yakalanıp kontrollü error'a
çevrilebilir:

```js
function parseJson(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch {
    return { ok: false, error: { code: "INVALID_JSON" } };
  }
}
```

Raw text'i error message'e eklemek hassas veri sızdırabilir. Tanılama kayıtları ayrı güvenlik
politikasına uymalıdır.

### Terminalden girdi almak

Node.js `readline` modülü bir readable stream'den satır satır veri alır. Basit promise-based
örnek:

```js
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

try {
  const rawAge = await rl.question("Yaşınız: ");
  const parsed = parseAge(rawAge);
  console.log(parsed);
} finally {
  rl.close();
}
```

`question` cevabı String'dir. Prompt'ta “sayı girin” yazması runtime type'ını Number yapmaz.
Interface'i kapatmak resource lifecycle'ın parçasıdır. Full stream/event programming sonraki
chapterlarda derinleşebilir.

### Pipeline tablosu nasıl hazırlanır?

Her aşama için şu kolonları doldur:

| Stage | Input type/shape | Contract | Operation | Output type/shape | Failure |
|---|---|---|---|---|---|
| Receive | external | field may exist | read | raw String | missing |
| Parse | String | entire text numeric | Number | Number | parse error |
| Validate | Number | integer 13–120 | checks | validated age | field errors |
| Normalize | String | name semantics | trim/NFC | canonical String | meaning loss |
| Transform | validated fields | record invariant | build | record | invariant error |
| Format | record | Turkish human output | format | String | locale/config |
| Output | String | terminal available | write | visible output | I/O failure |

Boş hücre bırakma. Bir aşama failure üretmiyorsa neden üretmediğini veya failure'ın hangi
katmanda ele alındığını belirt.

### AI ile pipeline denetimi

AI'ye ham gereksinimi verip doğrudan kod istemek; eksik contract'ı hızlı fakat görünmez biçimde
koda dönüştürebilir. Önce kendi sözleşmeni ve invalid cases listesini yaz. Sonra şu istemi kullan:

```text
Final kodu hemen üretme. Verilen girdi alanları için raw representation, target type,
presence, syntax, range, normalization, invalid behavior ve output contract tablosu çıkar.
Receive, parse, validate, normalize, transform, format ve output aşamalarını ayır.
Her aşamada type/shape ve controlled failure göster. Belirsiz gereksinimler için varsayım
yapmak yerine soru listesi üret. Ardından benim pipeline'ımdaki eksik boundary cases'i bul.
```

AI şu hataları yapabilir:

- `parseInt` ile kısmi input'u sessizce kabul etmek;
- boş String'i 0 saymak;
- locale kararını evrensel kural gibi sunmak;
- bütün alanları `trim/lowercase` yapmak;
- parse success'i validation success saymak;
- raw password/token gibi sensitive value'yu loglamak;
- error message'te internal stack veya input göstermek;
- client validation'ı security guarantee saymak.

Her öneriyi test ve source ile değerlendir.

### Kademeli uygulama: tek alandan kayda

Öğrenme sırasında bütün kayıt hattını tek seferde yazma. Şu sırayı kullan:

1. Tek age alanı için contract table.
2. `Number` behavior matrix.
3. parse result modeli.
4. range validation.
5. normal/boundary/invalid tests.
6. name normalization contract.
7. field results'i registration result'ta birleştirme.
8. human ve machine output üretme.

Her adım çalıştıktan sonra bir önceki testleri koru. Böylece yeni field eklenirken eski davranış
bozulursa hemen görürsün.

### Bir haftalık çalışma planı

**1. gün:** Input/output/trust boundary kavramlarını kendi günlük hayatından üç örnekle yaz.
**2. gün:** `Number`, `parseInt`, empty/whitespace/partial input behavior matrix'i çalıştır.
**3. gün:** Syntactic ve semantic validation'a beşer örnek üret.
**4. gün:** Name/product-code/password için farklı normalization policies tasarla.
**5. gün:** Registration pipeline'ı adım adım kodla ve 18 test çalıştır.
**6. gün:** AI audit yap; kabul/ret/deney gerekli decision log tut.
**7. gün:** Notlara bakmadan pipeline'ı çiz, quiz çöz ve bir arkadaşına parsing-validation
farkını öğret.

### Rehberli çalışma: önce sözleşme

Bir kullanıcıdan aylık çalışma saatini alıp haftalık ortalama göstereceğiz. Hemen kod yazarsan
şöyle bir satır üretmek kolaydır:

```js
const weeklyAverage = Number(rawMonthlyHours) / 4;
```

Bu expression syntax bakımından geçerlidir; fakat contract cevaplanmamıştır. Ay her zaman dört
hafta mı kabul edilecek? Ondalık saat kabul mü? Negative value ne anlama gelir? Empty input
default 0 mı, hata mı? Maksimum kaç olabilir? Output kaç decimal gösterecek? Aşağıdaki sözleşme
kararları koddan önce gelir:

```text
Field: monthlyHours
Raw representation: String
Presence: required
Syntax: decimal number, dot separator
Target: finite Number
Range: 0–744
Precision: en fazla iki decimal
Normalization: baş/son boşluk kabul edilip kaldırılır
Invalid behavior: MONTHLY_HOURS_INVALID
Calculation: requirement'a göre 4 değil 52/12 divisor
Output: tr-TR, iki decimal saate kadar
```

Bu kararlar açık olduğunda implementasyon yalnız bir tahmin değil, contract'ın yürütülebilir
karşılığı olur. Öğrenci olarak kendine şu kuralı koy: bir input processing function yazmadan önce
en az presence, raw type, target type, allowed range ve failure behavior yazılı olmalı.

### Rehberli çalışma: parser seçim deneyi

Aşağıdaki dosyayı çalıştırmadan önce her satırın sonucunu tahmin et:

```js
const samples = ["42", " 42 ", "42px", "3.9", "", " ", "0x10", "1e3"];

for (const raw of samples) {
  console.log({
    raw,
    number: Number(raw),
    integer: parseInt(raw, 10),
    float: parseFloat(raw),
  });
}
```

Bu deney “en iyi parser hangisi?” sorusuna tek cevap vermez. Örneğin `"3.9"`, Number ve
`parseFloat` için 3.9; `parseInt` için 3 olur. Tamsayı contract'ında 3.9'u silently truncate
etmek yanlış olabilir. `"42px"` için Number `NaN`, diğer iki parser 42 üretebilir. CSS boyutundan
numeric prefix extraction amaçlanıyorsa kabul, pure quantity alanında hata olabilir.

Sonuç tablosuna dördüncü bir kolon ekle: “contract kararı”. Runtime behavior, business kabul
kararının yerine geçmez. Bir değerin parser tarafından üretilebilmesi, onun kullanılabilir
olduğunu değil yalnız parser'ın belirtilen kurala göre yorumladığını gösterir.

### Entire-input kontrolü

Bir alanın tamamının sayısal olmasını istiyorsan regular expression tek olası çözüm değildir;
ama acceptance rule'u görünür kılmak için kullanılabilir:

```js
function parseDecimalInteger(raw) {
  if (typeof raw !== "string") {
    return { ok: false, code: "STRING_REQUIRED" };
  }

  const normalized = raw.trim();

  if (!/^[+-]?\d+$/.test(normalized)) {
    return { ok: false, code: "INTEGER_SYNTAX" };
  }

  const value = Number(normalized);

  if (!Number.isSafeInteger(value)) {
    return { ok: false, code: "INTEGER_RANGE" };
  }

  return { ok: true, value };
}
```

Bu örnek artı/eksi işaretini kabul eder; leading zeros'u kabul eder; Unicode digit set'i değil
ASCII digits'i tanır. Bunların her biri bilinçli veya yanlış contract kararı olabilir. Regex'i
görmek, gereksinim düşünmeyi durdurmaz. Ayrıca karmaşık regular expressions performans ve bakım
riski taşıyabilir; field'a uygun en basit açık çözüm tercih edilir.

### Boundary value analizi

Range `13–120` ise yalnız 24 test etmek yeterli değildir. Sınırların hemen altı, sınırın kendisi
ve hemen üstü özellikle değerlidir:

| Case | Raw | Parsed | Beklenen |
|---|---|---:|---|
| altın altı | `"12"` | 12 | reject |
| alt sınır | `"13"` | 13 | accept |
| normal | `"24"` | 24 | accept |
| üst sınır | `"120"` | 120 | accept |
| üstün üstü | `"121"` | 121 | reject |
| decimal | `"24.5"` | 24.5 | reject |
| empty | `""` | conversion öncesi | required error |
| malformed | `"24x"` | NaN | syntax error |

Bu teknik, C04'teki boundary cases düşüncesini yürütülebilir contract'a bağlar. Her constraint
test matrisi üretmelidir. Minimum length 2 ise 1, 2 ve 3; allowed set varsa her allowed value ve
en az bir unknown value; required field ise missing, null, undefined, empty ve whitespace
politikaya göre test edilir.

### Missing, null, empty ve zero aynı değildir

Birçok bug bu dört durumu tek falsy kontrolle birleştirir:

```js
if (!value) {
  // 0, false ve empty String aynı dala girer.
}
```

Bu davranış bazen istenebilir; çoğu input contract'ta belirsizdir. Quantity için 0 invalid,
discount için 0 valid, consent için false valid, nickname için empty belki valid olabilir.
Presence denetimini field semantics'e göre açık yaz:

```js
const isMissing = value === undefined || value === null;
const isEmptyText = typeof value === "string" && value.trim() === "";
```

Sonra required/optional/default kararlarını ayrı uygula. Default vermek bir normalization değil,
business decision'dır; missing data'yı görünmez yapabilir. Örneğin missing newsletter consent'i
`false` yapmak privacy bakımından uygun olabilir, fakat missing country'yi rastgele `TR` yapmak
yanlış kullanıcı verisi üretir.

### Optional alan sözleşmesi

Optional alan “her şey kabul” anlamına gelmez. Alan yoksa valid olabilir; varsa bütün type,
syntax ve domain rules yine uygulanır:

```js
function parseOptionalScore(rawScore) {
  if (rawScore === undefined || rawScore === null || rawScore === "") {
    return { ok: true, value: null };
  }

  const score = Number(rawScore);

  if (!Number.isFinite(score) || score < 0 || score > 100) {
    return { ok: false, code: "SCORE_INVALID" };
  }

  return { ok: true, value: score };
}
```

Burada empty String'in “alan yok” sayılması contract kararıdır. Whitespace'in de optional
sayılıp sayılmayacağı ayrıca belirtilmelidir. `null`, “ölçülmedi” gibi domain meaning taşıyorsa
internal modelde korunabilir.

### Default değerlerin görünür maliyeti

```js
const pageSize = Number(rawPageSize) || 20;
```

Bu kısa expression C07'deki short-circuit preview riskini taşır. `Number("0")` 0 üretir ve
fallback 20 seçilir; parse failure `NaN` de 20'ye dönüşür. Kullanıcı 0 girdi mi, alan boş mu,
malformed mı ayırt edilemez. Daha açık tasarım:

```js
function resolvePageSize(rawPageSize) {
  if (rawPageSize === undefined) {
    return { ok: true, value: 20, source: "default" };
  }

  const pageSize = Number(rawPageSize);

  if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    return { ok: false, code: "PAGE_SIZE_INVALID" };
  }

  return { ok: true, value: pageSize, source: "input" };
}
```

Default, parse failure'ı saklamaz. Ayrıca sonucun kaynağı gözlemlenebilir.

### Shape validation

Structured input object göründüğünde doğrudan property okumak outer contract'ı atlayabilir:

```js
function isPlainRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
```

Bu küçük kontrol bütün object security sorunlarını çözmez; yalnız chapter düzeyinde array/null
ile record ayrımını kurar. Ardından required keys, unknown keys ve field types değerlendirilir.
Unknown field policy açık olmalıdır:

- reject: strict protocol ve typo detection;
- ignore: forward compatibility fakat veri kaybı riski;
- preserve: proxy/import senaryosu fakat trust surface büyür.

“Fazla alanları otomatik sil” normalization gibi görünse de bilgi kaybı kararıdır.

### Validation sırasının hata kalitesine etkisi

Age raw String ise range check'i parse öncesi yapmak implicit coercion'a dayanabilir:

```js
// Kaçınılması gereken belirsiz sıra:
if (rawAge < 13) {
  // String, comparison sırasında dönüşebilir.
}
```

Önce representation, sonra type, sonra range:

```js
const parsed = parseRequiredAge(rawAge);

if (!parsed.ok) {
  return parsed;
}

if (parsed.value < 13 || parsed.value > 120) {
  return { ok: false, code: "AGE_OUT_OF_RANGE" };
}
```

Bu sıra error specificity sağlar. `"abc"` için “13'ten küçük” değil, “integer required” mesajı
çıkar. Doğru stage doğru sorumluluğu üstlenir.

### Normalization idempotence

İyi bir canonicalization işlemi çoğu durumda ikinci uygulamada sonucu değiştirmemelidir:

```text
normalize(normalize(x)) = normalize(x)
```

Bu özelliğe idempotence denir. Örneğin `trim()` ikinci çağrıda genellikle aynı String'i üretir;
NFC normalization da tanımlı canonical forma ulaşınca tekrar değişmez. Test ekle:

```js
const once = normalizeName(rawName);
const twice = normalizeName(once.value);
console.assert(once.value === twice.value);
```

Ancak fonksiyon failure result döndürüyorsa test shape'e uygun yazılmalıdır. Idempotence tek
başına meaning preservation kanıtı değildir; yanlış policy de idempotent olabilir.

### Orijinal ve canonical değeri saklama kararı

Bazen display için original input, lookup için canonical value gerekir:

```js
const userName = {
  original: "İpek Ak",
  lookupKey: "ipek-ak",
};
```

Bu örnekte lookupKey üretiminin Türkçe locale, collision ve allowed-character policy'si vardır.
İki farklı original aynı canonical key'e düşebilir. Kimlik üretimi basit lower-case işlemine
indirgenmemelidir. Chapter düzeyinde çıkarım: normalization sonrası uniqueness veya identity
varsayımı yapmadan önce collision policy gerekir.

### Output sözleşmesi ve versiyonlama

Başka bir program çıktını okuyorsa field name, type ve missing behavior bir API sözleşmesine
dönüşür. Human message'i parse eden machine consumer kırılgandır:

```text
Kayıt başarılı: Ada, 36
```

Machine output daha explicit olabilir:

```json
{
  "status": "accepted",
  "registration": {
    "name": "Ada",
    "age": 36
  }
}
```

Field rename veya Number'ı String'e çevirme downstream consumers'i kırabilir. Bu yüzden output
formatting yalnız görsel detay değil, bağımlılık yönetimidir. Full API versioning sonraki
akademilerde; temel düşünce burada başlar.

### Error katalogu oluşturmak

Random message Strings test ve localization'ı zorlaştırır. Küçük katalog:

| Code | Field | Ne zaman | Kullanıcı mesajı |
|---|---|---|---|
| `AGE_REQUIRED` | age | missing/empty | Yaş alanını doldurun. |
| `AGE_INTEGER` | age | syntax/type | Yaşı tam sayı olarak girin. |
| `AGE_RANGE` | age | semantic range | Yaş 13–120 arasında olmalıdır. |
| `NAME_LENGTH` | name | length | Ad 2–50 karakter olmalıdır. |
| `ROLE_ALLOWED` | role | allowlist | Rol student veya mentor olmalıdır. |

Message değişse bile code testlerde stable kalabilir. Error code kullanıcıya gösterilmek zorunda
değildir; support ve machine consumer için taşınabilir.

### Hata ayıklama: ilk bozuk aşamayı bul

Output yanlışsa bütün pipeline'ı yeniden yazma. Her stage'in output'unu kaydet:

```js
const trace = {
  received: rawAge,
  parsed: parsedAge,
  validated: validatedAge,
  formatted: formattedAge,
};
```

Hassas alanları raw biçimde loglama. Test ortamında safe sample data kullan. Debug sırası:

1. Source gerçekten beklenen değeri gönderdi mi?
2. Parse hangi type/value üretti?
3. Validation hangi rule/code ile karar verdi?
4. Normalization meaning'i değiştirdi mi?
5. Transformation doğru invariant'ı korudu mu?
6. Formatting yalnız representation mı değiştirdi?
7. Output doğru kanala mı gitti?

İlk sapma root cause'a en yakın noktadır.

### Worked case: CLI not ortalaması

Kullanıcı üç sınav puanını terminalden girsin. Contract: her input required decimal String,
Number 0–100; final average iki decimal ile gösterilir.

Naive code:

```js
const average = (rawFirst + rawSecond + rawThird) / 3;
```

String concatenation sonrası division tesadüfi sonuç üretebilir. Güvenilir model:

```js
function parseScore(raw, field) {
  if (typeof raw !== "string" || raw.trim() === "") {
    return { ok: false, error: { field, code: "REQUIRED" } };
  }

  const value = Number(raw);

  if (!Number.isFinite(value) || value < 0 || value > 100) {
    return { ok: false, error: { field, code: "SCORE_RANGE" } };
  }

  return { ok: true, value };
}

const parsedScores = [
  parseScore(rawFirst, "first"),
  parseScore(rawSecond, "second"),
  parseScore(rawThird, "third"),
];

const errors = parsedScores.filter((result) => !result.ok);

if (errors.length === 0) {
  const values = parsedScores.map((result) => result.value);
  const total = values[0] + values[1] + values[2];
  const average = total / values.length;
  const output = average.toFixed(2);
  console.log(`Ortalama: ${output}`);
}
```

Array methods ileride ayrıntılı işlenecektir; burada pipeline görünürlüğü için kullanıldı. En
önemli ayrım: `average` Number, `output` formatted String'dir.

### Worked case: machine ve human failure

Invalid record için internal error:

```js
const errors = [
  { field: "age", code: "AGE_RANGE" },
  { field: "role", code: "ROLE_ALLOWED" },
];
```

Human formatter code'ları mesajlara map eder:

```text
Kayıt tamamlanamadı:
- Yaş 13–120 arasında olmalıdır.
- Rol student veya mentor olmalıdır.
```

Machine formatter structured JSON üretir:

```json
{
  "status": "rejected",
  "errors": [
    { "field": "age", "code": "AGE_RANGE" },
    { "field": "role", "code": "ROLE_ALLOWED" }
  ]
}
```

İki output aynı internal errors'dan türetilir; domain validation mesaj formatına bağımlı değildir.

### Not tutma şablonu

Her yeni input için şu kaydı doldur:

```text
Source/consumer:
Trust boundary:
Raw type/shape:
Target type/shape:
Presence/default:
Syntax rules:
Semantic rules:
Normalization/data-loss policy:
Pipeline stages:
Stage failures:
Human output:
Machine output:
Normal/boundary/invalid tests:
Official source:
```

Notlarında yalnız “Number kullan” gibi yöntem değil, neden o parser'ın acceptance behavior'ının
contract'a uyduğunu yaz.

### Yetkinlik kontrol kapısı

Lab'a geçmeden önce yardım almadan şunları üretebilmelisin:

- bir field contract table;
- parse edilen fakat invalid kalan iki karşı örnek;
- `Number` ve `parseInt` seçim gerekçesi;
- missing/null/empty/zero ayrımı;
- altı aşamalı representation trace;
- meaning-preserving ve meaning-losing normalization örneği;
- human/machine output çifti;
- alan-temelli error catalog;
- 12 normal/boundary/invalid test;
- AI cevabına yönelteceğin beş kanıt sorusu.

Eksik madde varsa chapter'ı okumuş fakat beceriyi henüz göstermemişsindir.

## Engineering Perspective

Veri hattı yalnız input'u “temizlemek” değildir. Sistemler arasındaki sözleşmeyi, güveni,
hata sahipliğini ve temsil değişimini yönetir. Sağlam bir pipeline şu özellikleri taşır:

- raw, parsed, validated ve formatted representations isimlerle ayrılır;
- her aşama mümkün olduğunca tek amaçlıdır;
- invalid input downstream hesaplamaya ulaşmaz;
- errors machine-readable code ve human-readable message taşır;
- logs gerekli tanılamayı sağlar fakat sensitive data sızdırmaz;
- output consumer ve locale açıkça tanımlanır;
- testler yalnız happy path'i değil boundary/failure paths'i kapsar.

### Validation ile güvenliği karıştırmamak

Input validation önemli bir güvenlik katmanıdır fakat tek başına SQL injection, XSS veya command
injection çözümü değildir. Context-aware output encoding, parameterized APIs, authorization ve
diğer kontroller ayrı sorumluluklardır. Bu chapter güvenli sınır düşüncesinin temelini kurar;
tam uygulama güvenliği daha sonraki akademilerde işlenecektir.

### Allowlist düşüncesi

Structured alanlarda “neyin kabul edildiğini” tanımlamak, bilinen kötü kalıpları tek tek
yasaklamaktan daha açıklayıcıdır. Role alanı yalnız `student`, `mentor`, `reviewer` kabul ediyorsa
allowlist bunu doğrudan söyler. Buna karşılık serbest metin alanında bütün punctuation'ı
yasaklamak gerçek isimleri ve dilleri bozabilir. Validation field semantics'e göre tasarlanır.

### Client ve server rollerini ayırmak

Client-side validation kullanıcıya hızlı feedback sağlar; fakat değiştirilebilir veya atlanabilir.
Güven sınırını uygulayan backend/authoritative component aynı contract'ı tekrar doğrulamalıdır.
Bu, client validation gereksiz demek değildir: biri UX, diğeri authority görevi görür.

### Değişim maliyeti

Bugün terminalden gelen kayıt yarın web formu veya API'den gelebilir. Domain transformation
raw `readline` çağrısına bağlıysa taşıma zordur. Input adapter ham veriyi alır; pure parse,
validation ve transformation functions source'tan bağımsız çalışır; output adapter sonucu
hedefe sunar. Bu ayrım test edilebilirlik ve değişebilirlik sağlar.

### Gözlemlenebilirlik

Production'da hangi stage'in ne kadar failure ürettiği önemlidir. Error codes ve stage names
metrics/logs için kullanılabilir. Ancak raw email, password, token veya kişisel veri loglanmamalı;
gerekli minimum metadata kaydedilmelidir. “Daha çok log” otomatik olarak “daha iyi tanılama”
değildir.

### Code review soruları

- Raw input nerede başlıyor ve trusted value nerede oluşuyor?
- Parser tüm input'u mu, yalnız prefix'i mi kabul ediyor?
- Parse success ile domain validity ayrılmış mı?
- Empty/null/undefined davranışı açık mı?
- Range, length, allowed values ve cross-field rules var mı?
- Normalization meaning kaybediyor mu?
- Formatted output tekrar calculation'a giriyor mu?
- Hata mesajı alanı ve correction'ı gösteriyor mu?
- Sensitive data log veya error'a sızıyor mu?
- AI önerisi hangi source/test ile doğrulandı?

### Katmanlar arasında güven seviyesini isimlendirmek

Raw ve validated değerler aynı primitive type'a sahip olabilir. `rawAge` de `"24"`, parse sonrası
başka bir alan da String olabilir. JavaScript runtime her domain aşamasını özel type olarak
ayıramaz; isimlendirme ve fonksiyon sınırları güven seviyesini görünür kılar:

```js
const rawAge = input.age;
const parsedAgeResult = parseAge(rawAge);
const validatedAgeResult = validateAge(parsedAgeResult.value);
const age = validatedAgeResult.value;
```

Bu isimler verbose görünse de review sırasında “hangi değer hangi contract'ı geçti?” sorusunu
cevaplar. TypeScript academy'de branded types veya schema-inferred types gibi daha güçlü araçlar
görülecektir. Temel ilke araçtan bağımsızdır: validated olmayan value, validated parameter
bekleyen domain logic'e geçmemelidir.

### Pure core ve impure shell

Terminalden okumak, dosyaya yazmak veya network response göndermek dış dünya etkileridir.
Parsing, validation ve transformation çoğu zaman pure functions olarak tasarlanabilir: aynı
input aynı output'u üretir ve dış durumu değiştirmez.

```text
Impure shell: readline ile input al
      ↓
Pure core: parse → validate → normalize → transform
      ↓
Impure shell: formatlanan sonucu stdout'a yaz
```

Bu ayrım testleri kolaylaştırır. Pure core'u terminal açmadan yüzlerce case ile test edebilirsin.
Input source web formuna dönüştüğünde core değişmez; yalnız adapter değişir. Bu, küçük bir CLI
projesinde bile profesyonel mimari düşüncenin başlangıcıdır.

### Mutation ve raw evidence

Raw object'i yerinde değiştiren normalization, debug evidence'ını yok edebilir:

```js
function normalizeInPlace(user) {
  user.name = user.name.trim();
  return user;
}
```

Hata olduğunda original input artık görünmeyebilir. Daha güvenli başlangıç yaklaşımı yeni record
üretmektir:

```js
function normalizeUser(rawUser) {
  return {
    ...rawUser,
    name: rawUser.name.trim(),
  };
}
```

Spread syntax ileride ayrıntılanacaktır. Buradaki karar, mutation'ın mutlak yasak olduğu değildir.
Ama raw evidence, retry ve audit gerekiyorsa destructive transformation maliyet taşır. Sensitive
raw data'nın saklanması da privacy riskidir; saklama policy'si amaç ve süreyle sınırlandırılmalıdır.

### Hata sahipliği

Her stage kendi anlayabildiği failure'ı tanımlar. Parser `"abc"`nin neden iş gereği yanlış
olduğunu bilmez; yalnız numeric syntax üretilemediğini bilir. Domain validator 999'un teknik
olarak Number olduğunu, fakat age range'i ihlal ettiğini bilir. Output formatter, error code'u
kullanıcı diline çevirir.

Bu ayrım şu faydaları sağlar:

- parser başka alanlarda yeniden kullanılabilir;
- business rule değiştiğinde parser değişmez;
- message localization domain logic'i değiştirmez;
- monitoring hangi aşamanın failure ürettiğini görebilir;
- tests doğru sorumluluk seviyesinde yazılır.

### Recovery ve retry kararı

Her failure aynı recovery yolunu istemez. Kullanıcı typo'su correction ister; geçici file read
failure retry isteyebilir; invalid configuration startup'ı durdurabilir; unknown record ayrı
karantina kuyruğuna alınabilir. C24 failure modes bu alanı derinleştirir. C08 düzeyinde error
result'a şu soruyu ekle: “Caller bu failure'dan sonra ne yapabilir?”

```text
AGE_REQUIRED        → kullanıcı alanı doldurabilir
INVALID_JSON        → kaynak belge düzeltilmeli
OUTPUT_UNAVAILABLE  → sistem retry/abort policy seçmeli
```

Eylem yolu olmayan error message teşhis üretir ama recovery sağlamaz.

### Batch işlemede partial success

Bir dosyada yüz kayıt varsa ilk invalid satırda bütün import'u durdurmak veya valid satırları
alıp invalid satırları raporlamak iki farklı contract'tır. İkinci modelde summary açık olmalıdır:

```js
const importSummary = {
  received: 100,
  accepted: 94,
  rejected: 6,
  errorsByCode: {
    AGE_RANGE: 4,
    NAME_REQUIRED: 2,
  },
};
```

`received === accepted + rejected` invariant'ı test edilir. Partial success veri bütünlüğü
gereksinimine göre uygun veya tehlikeli olabilir. Örneğin banka transfer batch'i ile marketing
contact import'u aynı atomicity politikasına sahip değildir.

### Limits ve kaynak tüketimi

Input validation yalnız value meaning değil, resource limits de içerir. Çok uzun String, çok
büyük JSON document veya aşırı item sayısı memory/CPU tüketebilir. Beginner programda bile
makul maksimum length tanımlamak iyi pratiktir:

```js
if (rawName.length > 200) {
  return { ok: false, code: "INPUT_TOO_LONG" };
}
```

Normalization'dan önce raw length, normalization'dan sonra canonical length ayrı anlam taşıyabilir.
Limit seçimi rastgele değil gerçek kullanım ve platform constraints'e dayanmalıdır. Full denial
of service engineering güvenlik akademisinde ele alınır.

### Zaman, tarih ve locale uyarısı

Tarih input'u basit String conversion'dan daha zordur. `Date` constructor'ın kabul ettiği
esnek biçimlere güvenmek cross-platform veya timezone surprises doğurabilir. Bu chapter'da tarih
parser yazmıyoruz; şu sözleşme ilkesini taşıyoruz:

- accepted format açık olsun;
- timezone/locale assumption yazılsın;
- syntax parse ile calendar validity ayrı olsun;
- internal representation ile display ayrışsın;
- invalid/ambiguous dates reddedilsin veya clarification istensin.

Benzer biçimde `"1,5"` bazı locales'de decimal, bazı parserlarda invalid veya partial olabilir.
Locale-aware input parsing ile locale-aware output formatting aynı şey değildir.

### Test oracle ve beklenen sonucu belirlemek

Bir testte expected output'u da aynı production formula ile hesaplarsan test kendi hatasını
kopyalayabilir. Contract veya independently calculated example test oracle olur. Örneğin age
range boundaries requirement'tan; JSON parse behavior standarddan; formatting snapshot'ı locale
contract'tan türetilir.

AI hem code hem tests ürettiğinde aynı yanlış varsayımı iki tarafa da kopyalayabilir. Testlerin
varlığı tek başına bağımsız doğruluk kanıtı değildir. Review'da expected values'ın kaynağını sor.

### Property düşüncesi

Tek örneklerin ötesinde genel özellikler yazabilirsin:

- accepted age her zaman safe integer ve 13–120 arasındadır;
- normalize name ikinci uygulamada değişmez;
- output formatter internal record'u mutate etmez;
- rejected record domain transformation'a ulaşmaz;
- import count invariant'ı korunur;
- machine output tekrar parse edilebilir JSON'dur.

Property-based testing araçları daha ileride görülebilir. Şimdiden invariant yazmak test tasarımını
güçlendirir.

### Pipeline performansını doğru ölçmek

Aşamaları ayırmak “yavaş” görünür; fakat çoğu başlangıç uygulamasında correctness ve I/O cost
dominant'tır. Performance concern varsa gerçek input büyüklüğüyle ölç. Gereksiz tekrar parse,
aynı normalization'ı defalarca uygulama veya devasa batch'i memory'de tutma ölçümle görünür.

Doğrulamayı performans için kaldırmak yerine stage'i optimize et, limits uygula veya streaming
tasarımı düşün. Güvenilirliği kaybeden hızlı pipeline üretim hedefini karşılamaz.

### Takım seviyesinde ortak contract dili

Frontend, backend, QA ve content teams “age alanı Number” dediğinde farklı şeyler anlayabilir.
Ortak contract şu ayrıntıları içermelidir:

```text
Transport: JSON number mı JSON string mi?
Required: missing/null/empty davranışı ne?
Range: inclusive boundaries?
Integer: decimal kabul mü?
Error: hangi code/status?
Display: locale ve unit?
Version: change compatibility?
```

Bu dil bug'ı yalnız kodda düzeltmek yerine ekipler arası yanlış varsayımı önler. Schema tools
sonra gelebilir; anlaşılmış sözleşmenin yerine geçmez.

### Pull request kanıt paketi

Bir input pipeline değişikliği için profesyonel teslim yalnız code diff değildir:

- güncellenen contract;
- yeni/changed invalid cases;
- test matrix sonucu;
- backward compatibility notu;
- sample human/machine outputs;
- security/privacy değerlendirmesi;
- AI kullanıldıysa decision log;
- gözlemlenebilir error codes.

Reviewer bu paketle davranışın neden değiştiğini ve hangi risklerin kapatıldığını anlayabilir.
Git/GitHub academy'sinde bu evidence pull request workflow'a bağlanacaktır.

## Real World Examples

### Ortam değişkeni

`process.env.PORT` String veya `undefined` olabilir. `Number(process.env.PORT)` sonrası integer,
range ve reserved port policy doğrulanmalıdır. Eksik değerde bilinçli default veya startup error
seçilir; `NaN` ile uygulamayı başlatmak kontrollü davranış değildir.

### CSV içe aktarma

Dosyanın açılması I/O; satırın kolonlara ayrılması parsing; kolon sayısı/types validation;
whitespace/canonical codes normalization; internal record transformation; import summary
formatting'dir. Bir satır bozuk olduğunda tüm dosya mı duracak, satır mı reddedilecek contract
kararıdır.

### API isteği

JSON body parse edilebilir fakat beklenen object olmayabilir. Content type/size, JSON syntax,
shape, field constraints ve business rules farklı katmanlardır. Client'ın TypeScript kullanması
runtime request'i otomatik doğrulamaz.

### Ürün kodu

`" ab-001 "` → `"AB-001"` normalizasyonu yalnız product code policy bunu tanımlıyorsa geçerlidir.
Kullanıcı adı veya password'a aynı davranışı uygulamak veri kaybı doğurabilir.

### Para çıktısı

Internal `amountInCents=123450`, machine output'ta integer kalabilir; Turkish UI'da
`Intl.NumberFormat` ile gösterilir. Display String internal calculation'a geri sokulmaz.

### AI yapılandırması

AI'nin ürettiği JSON syntax bakımından valid olabilir ama unknown fields, unsupported model,
negative timeout veya secret leakage içerebilir. AI output da external input gibi schema ve
domain validation'dan geçer.

### Komut satırı bütçe kaydı

Bir CLI kullanıcıdan gelir ve gider tutarlarını alsın. Prompt'a `Gelir:` yazmak, cevabı Number
yapmaz. Ayrıca Turkish user `1.250,50` yazabilir; JavaScript `Number` bu locale display biçimini
doğrudan anlamaz. Contract iki yoldan birini açıkça seçmelidir:

- machine-friendly input: decimal separator nokta, grouping yok (`1250.50`);
- locale-aware input: tanımlı parser ve ambiguity policy.

Başlangıç academy'sinde ilk seçenek daha basit ve test edilebilirdir; prompt accepted format'ı
göstermelidir. Ardından internal money representation kuruş cinsinden safe integer olabilir,
output ise Turkish currency formatına çevrilir. `1250.50 * 100` floating-point sınırında
yuvarlama policy'si ister. “Kullanıcı ne yazarsa Number yap” bir contract değildir.

Pipeline:

```text
"1250.50" → entire decimal syntax → Number 1250.5 → range check
→ rounding policy → 125050 cents → budget transformation → "1.250,50 ₺"
```

Testlerde `0`, negative, empty, whitespace, `1,5`, `1.5`, `1e3`, çok büyük sayı ve iki decimal'dan
fazlası bulunmalıdır.

### Feature flag yapılandırması

Environment variable `FEATURE_ENABLED="false"` String'dir. `Boolean("false")` sonucu `true`
olur; çünkü empty olmayan String truthy'dir. Boolean logic C09'da derinleşecektir, fakat C08
sözleşmesi raw representation'ı allowed set ile parse etmelidir:

```js
function parseBooleanFlag(raw) {
  if (raw === "true") return { ok: true, value: true };
  if (raw === "false") return { ok: true, value: false };
  return { ok: false, code: "BOOLEAN_FLAG_INVALID" };
}
```

Case-insensitive kabul gerekiyorsa normalization policy açıkça eklenir. Missing flag default mu,
startup error mı? Bu deployment requirement'ına bağlıdır. Sessiz default production behavior'ı
değiştirebilir; result içinde `source: "default"` gibi provenance taşımak gözlemlenebilirlik
sağlar.

### Sensör ölçümü

Bir sıcaklık sensörü `{ value: 25.4, unit: "C" }` gönderiyor olsun. JSON parse, object üretir;
shape validation `value/unit`; semantic validation finite range ve allowed unit; normalization
unit code; transformation Celsius internal model; formatting display oluşturur.

Sensör bozulup 9999 gönderirse type doğru, value finite ve syntax valid olabilir; domain range
reddeder. Aynı ölçüm tekrar tekrar geliyorsa outlier detection veya calibration gerekebilir;
bunlar ileri data engineering konularıdır. C08 için lesson: validation yalnız type check değildir.

### Dosya adı ve dosya içeriği

Kullanıcıdan dosya yolu almak ile dosya içeriğini parse etmek iki ayrı sınırdır. Dosya adı allowed
directory, extension ve path policy ister; içerik size, encoding, syntax ve schema policy ister.
Yalnız `.json` extension'ına bakmak içeriğin valid JSON veya güvenli olduğunu kanıtlamaz.

Bu chapter gerçek file-system security implementation'a girmez. Fakat lab dışında bir import
tasarlarken source metadata, I/O failure, content parse failure ve record validation failure'ı
tek “dosya hatası” altında kaybetmemen gerektiğini öğretir.

### Kayıt güncelleme isteği

Create ve update contracts aynı olmayabilir. Create'te `name` required; partial update'te missing
name “değiştirme” anlamına gelebilir, empty name ise invalid olabilir. `undefined`, missing ve
`null` ayrımı burada domain etkisi taşır. Generic validator'ı hiçbir karar vermeden iki akışta
yeniden kullanmak bug üretebilir.

```text
Create: missing name → NAME_REQUIRED
Update: missing name → field unchanged
Update: name=null → policy'ye göre clear veya invalid
Update: name="" → NAME_EMPTY
```

Contract operation'a bağlıdır; field type tek başına yeterli değildir.

## Common Mistakes

1. **Prompt sayıyı istedi diye input'u Number sanmak:** runtime type'ı kontrol et.
2. **Dönüşümü validation saymak:** parse edilen değeri ayrıca validate et.
3. **`parseInt` ile partial input kabul etmek:** entire-input contract'ı test et.
4. **Empty String'i 0 yapmak:** presence kontrolünü conversion'dan önce yap.
5. **`NaN` ve Infinity'yi atlamak:** `Number.isFinite/Integer` kullan.
6. **Tüm girdileri aynı normalize etmek:** field semantics ve data loss'u incele.
7. **Client validation'a güvenmek:** authoritative boundary'de tekrar validate et.
8. **JSON parse success'i schema success saymak:** shape ve domain checks ekle.
9. **Tek “invalid” mesajı vermek:** field, code ve düzeltme yolu göster.
10. **Raw sensitive input loglamak:** minimum, redacted diagnostics kullan.
11. **Formatted String ile hesap yapmak:** internal value ve display'i ayır.
12. **Tek happy-path test:** empty, boundary, malformed ve cross-field cases ekle.
13. **AI'nin default varsayımını kabul etmek:** requirement clarification iste.
14. **Validation'ı bütün güvenlik olarak görmek:** context-specific controls'ı ayır.

## Best Practices

- Girdi sözleşmesini koddan önce tabloyla yaz.
- Raw ve trusted variables'i isimlerde ayır.
- Receive, parse, validate, normalize, transform ve format sorumluluklarını görünür tut.
- Presence kontrolünü dönüşümden önce yap.
- Entire-input acceptance behavior'ı test et.
- Type, range, length, allowed set ve cross-field rules'i ayrı tanımla.
- Normalization'ın meaning/data-loss kararını belgele.
- Internal ve display representations'i ayır.
- Structured error code ve actionable message kullan.
- Normal, boundary, invalid ve adversarial-inspired cases test et.
- Sensitive data'yı error/log'dan uzak tut.
- AI pipeline'ını aynı contract ve review kapısından geçir.

## Hands-on Exercise

Şu raw record için girdi sözleşmesi ve pipeline tasarla:

```js
const raw = {
  name: "  Deniz Kaya  ",
  age: "17",
  role: "STUDENT",
  newsletter: "yes",
};
```

Teslim:

1. Dört alan için presence/raw type/target type/syntax/range/normalization/error/output tablosu.
2. En az `receive → parse → validate → normalize → transform → format` aşamaları.
3. Her aşamada input/output type ve failure.
4. 12 test: 4 normal, 3 boundary, 4 invalid, 1 normalization risk.
5. Human ve machine output örneği.
6. AI audit sonucu: en az üç öneriyi kabul/ret/deney gerekli olarak sınıflandır.

Başarı: raw input downstream domain calculation'a sızmamalı; parse/validation ayrı kanıtlanmalı;
en az üç aşamalı pipeline ve bütün invalid cases controlled result üretmelidir.

## Reflection Questions

1. Hangi input'u türüne bakmadan güvenilir varsaydın?
2. Parse edilen ama invalid olan en iyi karşı örneğin nedir?
3. Hangi normalization kararı anlam kaybı üretebilir?
4. İnsan ve machine output neden aynı temsil olmamalı?
5. AI hangi belirsiz gereksinime sessizce default atadı?
6. Pipeline'da ilk failure'ı hangi evidence ile buldun?

## Chapter Summary

Girdi program dışından gelir ve güven sınırında sözleşmeyle karşılanır. Parsing dış temsili
program değerine dönüştürür; validation değerin biçim, type, range ve business constraints'e
uygunluğunu denetler. Başarılı parsing, validity kanıtı değildir.

Normalization eşdeğer girdileri meaning'i koruyan canonical internal form'a getirir.
Transformation validated values'dan domain result üretir. Formatting internal result'ı hedef
tüketiciye uygun external representation'a çevirir. Human ve machine output contracts farklı
olabilir.

Güvenilir yöntem: contract → receive → parse → validate → normalize → transform → format →
output. Her stage input/output representation, failure ve tests ile görünür olmalıdır.

## Key Takeaways

- Dış veri kötü değil; henüz doğrulanmamıştır.
- Prompt veya UI label runtime type garantisi değildir.
- Parsing ve validation farklı sorular sorar.
- `Number` ve `parseInt` contract'a göre seçilir.
- Empty, NaN, Infinity, range ve partial input test edilmelidir.
- Normalization field-specific ve meaning-preserving olmalıdır.
- Formatting calculation'dan ayrılır.
- Hata mesajı alanı ve düzeltme yolunu göstermelidir.
- Client validation UX, authoritative validation güven sınırıdır.
- AI output da external input gibi doğrulanır.

## Further Reading

ECMAScript conversion/JSON clauses; Node.js LTS Readline/Process; OWASP Input Validation;
WHATWG constraint validation; RFC 8259/ECMA-404; Unicode normalization; WCAG error
identification. C09 Boolean logic, C20 ileri text processing ve C24 failure modes konularını
genişletecektir.

## References

- [ECMAScript 2026 Abstract Operations](https://tc39.es/ecma262/2026/multipage/abstract-operations.html)
- [ECMAScript 2026 Structured Data](https://tc39.es/ecma262/2026/multipage/structured-data.html)
- [Node.js 24 LTS Readline](https://nodejs.org/docs/latest-v24.x/api/readline.html)
- [Node.js 24 LTS Process](https://nodejs.org/docs/latest-v24.x/api/process.html)
- [OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [WHATWG Constraint Validation](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#constraint-validation)
- [RFC 8259 — JSON](https://www.rfc-editor.org/info/rfc8259/)
- [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/)
- [Unicode Normalization](https://www.unicode.org/reports/tr15/)
- [WCAG 2.2 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [MDN Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [MDN parseInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN JSON.parse](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN String.normalize](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [MDN Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [CS2023](https://csed.acm.org/)
