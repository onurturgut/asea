---
document_type: "chapter"
chapter_id: "V01-C26"
volume_id: "V01"
title: "Test Temelleri"
slug: "test-temelleri"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "10-12 saat"
prerequisites:
  - "V01-C10"
  - "V01-C13"
  - "V01-C14"
  - "V01-C15"
  - "V01-C16"
  - "V01-C17"
  - "V01-C18"
  - "V01-C24"
  - "V01-C25"
learning_outcomes:
  - "V01-LO042"
  - "V01-LO043"
related_lab_ids:
  - "V01-C26-L01"
related_assessment_ids:
  - "V01-C26-AS01"
next_chapter_id: "V01-C27"
blueprint_id: "V01-C26-BP01"
last_updated: "2026-08-01"
---

# Test Temelleri

## Learning Objectives

C25’te bir failure’ı yeniden ürettiniz. En küçük başarısız örneği sakladınız,
hipotezleri deneylerle elediniz ve kök nedeni düzelttiniz. Son kontrolü elle
yaptığınızda sonuç doğruydu. Peki aynı kusurun üç hafta sonra geri dönmediğini
kim hatırlayacak? Başka bir geliştirici fonksiyonu sadeleştirdiğinde hangi
örnekleri tekrar çalıştırması gerektiğini nereden bilecek?

Bu chapter sonunda:

- Fonksiyon sözleşmesini test edilebilir davranışlara çevirebileceksiniz.
- Her test case için girdi, başlangıç koşulu, beklenen sonuç ve gözlenen sonucu
  açıkça yazabileceksiniz.
- Normal, boundary ve invalid input sınıflarından dengeli test seti
  üretebileceksiniz (`V01-LO042`).
- Test oracle’ın kaynağını açıklayabilecek ve implementation’dan bağımsız expected
  result yazabileceksiniz.
- Assertion’ın actual ile expected arasındaki farkı nasıl görünür yaptığını
  kod üzerinde izleyebileceksiniz.
- Küçük bir birimi izole test edebilecek ve bilinen defect için regression testi
  tasarlayabileceksiniz.
- Bir test suite’in hangi riskleri kapsadığını, hangi kör noktaları bıraktığını
  ve coverage sayısının neden tek başına kalite kanıtı olmadığını
  savunabileceksiniz (`V01-LO043`).

Amaç “çok test” yazmak değildir. Amaç, önemli bir davranış yanlış olduğunda
anlamlı ve güvenilir bir alarm üreten testler yazmaktır.

## Prerequisites

C26 önceki chapterların ortak ürünüdür:

- C10: normal, alternatif ve birleşik koşul dalları,
- C13–C14: fonksiyonun girdi, çıktı ve sorumluluk sözleşmesi,
- C15–C16: yan etkileri ayırma ve küçük test edilebilir birimler,
- C17–C18: koleksiyon ve kayıt değişmezleri,
- C24: expected failure ve error contract,
- C25: failing case, root cause ve regression riski.

Hazırlık kontrolü olarak şu sözleşmeyi okuyun:

> `validateProgress(rawProgress)`, number veya sayıya dönüştürülebilen boş olmayan
> string kabul eder. Sonuç 0–100 arasında tamsayıysa `{ ok: true, value }` döner.
> Boş, sayısal olmayan, ondalıklı veya sınır dışı değerlerde kararlı error code
> içeren `{ ok: false, error }` döner. Girdi üzerinde yan etki oluşturmaz.

Kodu görmeden şu girdilerin expected result’ını yazın: `"80"`, `0`, `100`, `""`,
`"sekiz"`, `42.5`, `-1`, `101`. Eğer beklenen sonucu implementation’a bakmadan
yazamıyorsanız testin kaynağı henüz yeterince açık değildir; önce sözleşmeyi
netleştirin.

## Estimated Study Time

Önerilen toplam süre **10–12 saattir**:

| Çalışma | Süre |
|---|---:|
| Sözleşmeden test case çıkarma | 120 dakika |
| Oracle, assertion ve unit test | 120 dakika |
| Partition ve boundary analizi | 120 dakika |
| Regression ve isolation | 90 dakika |
| Coverage ve kör nokta değerlendirmesi | 90 dakika |
| Quiz, lab ve bağımsız uygulama | 150–210 dakika |

İlk oturumda testleri yalnız tablo hâlinde tasarlayın. İkinci oturumda kodlayın.
Bu ayrım, expected result’ı implementation’ın mevcut çıktısından kopyalama
alışkanlığını önler.

## Introduction

Bir öğretmen yalnız sınıfın en başarılı öğrencisine tek bir soru sorup “herkes
konuyu öğrendi” diyemez. Soru doğru olabilir, cevap da doğru olabilir; fakat
kanıt yalnız bir kişiyi ve bir davranışı kapsar. Program testinde de tek başarılı
örnek tüm sözleşmeyi kanıtlamaz.

Test, kodun doğru olduğuna dair mutlak ispat değildir. Belirli bir başlangıç
koşulunda, belirli girdinin, belirli beklenen davranışla uyuşup uyuşmadığını
kontrol eden tekrarlanabilir kanıttır.

Bu chapter boyunca ASEA ilerleme doğrulamasını test edeceğiz. Önce öğretmen gibi
“neyi ölçmek istiyorum?” diyeceğiz; sonra mühendis gibi girdileri sınıflara
ayıracak, sınırların iki tarafına bakacak ve geçmişte yaşanan defect’i kalıcı bir
regression alarmına çevireceğiz.

Başlamadan tahmin edin: 0–100 aralığını doğrulayan bir fonksiyon için yalnız
`50` değerini test etmek kaç önemli riski görünmez bırakır? Cevap yalnız “çok”
değildir; chapter sonunda kör noktaları adlarıyla listeleyeceksiniz.

## Core Concepts

### Test case: tek bir davranış sorusu

**Test case (test vakası)** belirli bir davranışı sınamak için hazırlanan küçük
kanıt birimidir. En az şu parçaları taşır:

| Parça | Soru | Örnek |
|---|---|---|
| Ad | Hangi davranış inceleniyor? | “Alt sınır 0 kabul edilir” |
| Başlangıç | Testten önce durum nedir? | Paylaşılan state yok |
| Girdi | Birime ne veriliyor? | `0` |
| Expected | Sözleşmeye göre ne olmalı? | `ok === true`, `value === 0` |
| Actual | Çalıştırma ne üretti? | Fonksiyon sonucu |
| Sonuç | Expected ve actual uyuşuyor mu? | pass/fail |

Test case yalnız bir kod çağrısı değildir. `validateProgress(0)` yazıp çıktıya
bakmak deneydir; beklenen sonucu önceden ilan edip otomatik karşılaştırmak testtir.

### Test oracle: doğru cevabı nereden biliyoruz?

**Test oracle**, expected result’ın doğru olduğunu belirlememizi sağlayan bilgi
kaynağıdır. Bu chapterda en güçlü oracle fonksiyon sözleşmesidir. Başka oracle
kaynakları; doğrulanmış örnek, matematik kuralı, kabul kriteri veya güvenilir
önceki davranış olabilir.

Kodu hem actual hem expected üretmek için kullanırsanız test kendi ödevini
kendisi kontrol eder. Örneğin implementation içindeki aynı yanlış formülü testte
tekrar yazmak iki tarafta da aynı yanlış sonucu oluşturabilir.

Zayıf oracle:

```js
const expected = completionRate(3, 12);
const actual = completionRate(3, 12);
```

İki değer elbette eşittir; fakat doğruluğa dair yeni bilgi üretmez. Güçlü oracle,
sözleşmeden bağımsız olarak `25` değerini belirler.

### Assertion: farkı otomatik alarm yapmak

**Assertion (doğrulama iddiası)** actual ile expected arasındaki ilişkinin doğru
olması gerektiğini ilan eder. Önce küçük ve framework bağımsız bir yardımcı yazalım:

```js
function expectEqual(actual, expected, label) {
  if (!Object.is(actual, expected)) {
    throw new Error(`${label}: expected ${expected}, actual ${actual}`);
  }
}
```

`actual`, kodun ürettiği değerdir. `expected`, oracle’dan gelen beklenen değerdir.
`label`, failure olduğunda hangi davranışın bozulduğunu söyleyen string’dir.
`Object.is`, bu başlangıç örneğinde primitive değerleri tür dönüşümü yapmadan
karşılaştırır. Nesneler için daha sonra deep equality gerekir; aynı nesne
referansını test etmekle alan değerlerini test etmek aynı şey değildir.

İlk assertion:

```js
const result = validateProgress("80");

expectEqual(result.ok, true, "sayısal string kabul edilir");
expectEqual(result.value, 80, "sayısal string number'a dönüşür");
```

`result`, fonksiyonun tek çalıştırmadaki bütün sonucunu tutan object’tir. İki
assertion iki farklı sözleşme parçasını görünür yapar. İlk assertion başarısızsa
ikincinin hata mesajı gürültü üretebilir; gerçek test runner’lar testleri ayrı
raporlayarak bu ayrımı kolaylaştırır.

### Test edilen implementation

Chapter boyunca şu fonksiyonu kullanacağız:

```js
function validateProgress(rawProgress) {
  const validInputType =
    typeof rawProgress === "number" || typeof rawProgress === "string";

  if (!validInputType) {
    return { ok: false, error: { code: "PROGRESS_INVALID_TYPE" } };
  }

  if (typeof rawProgress === "string" && rawProgress.trim() === "") {
    return { ok: false, error: { code: "PROGRESS_REQUIRED" } };
  }

  const progress = Number(rawProgress);

  if (!Number.isFinite(progress)) {
    return { ok: false, error: { code: "PROGRESS_NOT_NUMBER" } };
  }

  if (!Number.isInteger(progress)) {
    return { ok: false, error: { code: "PROGRESS_NOT_INTEGER" } };
  }

  if (progress < 0 || progress > 100) {
    return { ok: false, error: { code: "PROGRESS_OUT_OF_RANGE" } };
  }

  return { ok: true, value: progress };
}
```

`validInputType`, dış sınırın kabul ettiği iki JavaScript türünü temsil eden
boolean’dır. `const` seçilir çünkü hesaplandıktan sonra değişmez. Önce türü
kontrol etmek `null` değerinin `Number(null) === 0` davranışıyla yanlışlıkla kabul
edilmesini önler.

Boş string kontrolü dönüşümden önce gelir; çünkü `Number("")` ve yalnız boşluk
içeren stringler `0`a dönüşebilir. `progress`, dönüşümden sonraki number adaydır.
Finite, integer ve range kontrolleri farklı error code üretir; test bir failure
sınıfının diğerine karıştığını yakalayabilir.

### Arrange–Act–Assert akışı

Testi üç zihinsel adıma ayırın:

```js
// Arrange: girdi ve beklenen davranış
const rawProgress = 0;
const expectedValue = 0;

// Act: yalnız test edilen davranışı çalıştır
const actualResult = validateProgress(rawProgress);

// Assert: sözleşme ile karşılaştır
expectEqual(actualResult.ok, true, "alt sınır kabul edilir");
expectEqual(actualResult.value, expectedValue, "alt sınır korunur");
```

Arrange test koşulunu, Act davranışı, Assert kararı görünür yapar. Her testin
mutlaka yorumlarla üç blok taşıması gerekmez; ayrım okunabiliyorsa yeterlidir.

### Normal, boundary ve invalid sınıfları

Sözleşmeyi yalnız örnek listesine çevirmek yerine önce davranış sınıflarına ayırın.

#### Normal input

Aralığın ortasındaki temsilî değerlerdir: `50`, `"80"`. Başarılı ana yolu gösterir.

#### Boundary input

Davranışın değiştiği sınır ve hemen çevresidir. `0–100` kapalı aralığında:

- alt sınır: `0`,
- alt sınırın hemen dışı: `-1`,
- üst sınır: `100`,
- üst sınırın hemen dışı: `101`.

Ondalıklı değer ayrı kurala sahipse `42`, `42.5` gibi integer/non-integer sınırı
da temsil edilmelidir.

#### Invalid input

Sözleşmenin kabul etmediği sınıflardır: `""`, `"sekiz"`, `null`, object, `NaN`,
`Infinity`, ondalıklı ve range dışı değerler. Her olası değeri deneyemeyiz; aynı
işlenmesi beklenen değerleri sınıflara ayırırız.

### Equivalence partition: aynı davranış sınıfından temsilci seçmek

**Eşdeğerlik bölümlendirme (equivalence partitioning)**, aynı kuralla işlenmesi
beklenen girdileri çakışmayan sınıflara ayırır. Örneğin:

| Partition | Temsilci | Beklenen |
|---|---|---|
| Geçerli tamsayı number | `50` | success 50 |
| Geçerli sayısal string | `"80"` | success 80 |
| Boş string | `"  "` | `PROGRESS_REQUIRED` |
| Sayısal olmayan string | `"sekiz"` | `PROGRESS_NOT_NUMBER` |
| Yanlış tür | `null` | `PROGRESS_INVALID_TYPE` |
| Ondalıklı | `42.5` | `PROGRESS_NOT_INTEGER` |
| Alt range dışı | `-1` | `PROGRESS_OUT_OF_RANGE` |
| Üst range dışı | `101` | `PROGRESS_OUT_OF_RANGE` |

Bir temsilcinin geçmesi aynı partition’daki her değeri matematiksel olarak
kanıtlamaz. Bu, risk temelli örnek seçimidir. Partition’ın gerçekten eşdeğer
olduğu varsayımı yanlışsa ek sınıf gerekir.

### Tablo odaklı testler

Aynı test yapısını veri tablosuyla tekrar kullanabiliriz:

```js
const cases = [
  { name: "normal number", input: 50, expectedOk: true, expectedValue: 50 },
  { name: "lower boundary", input: 0, expectedOk: true, expectedValue: 0 },
  { name: "upper boundary", input: 100, expectedOk: true, expectedValue: 100 },
  { name: "below boundary", input: -1, expectedOk: false, expectedCode: "PROGRESS_OUT_OF_RANGE" },
  { name: "empty text", input: "", expectedOk: false, expectedCode: "PROGRESS_REQUIRED" },
];

for (const testCase of cases) {
  const result = validateProgress(testCase.input);
  expectEqual(result.ok, testCase.expectedOk, `${testCase.name}: ok`);

  if (testCase.expectedOk) {
    expectEqual(result.value, testCase.expectedValue, `${testCase.name}: value`);
  } else {
    expectEqual(result.error.code, testCase.expectedCode, `${testCase.name}: code`);
  }
}
```

`cases` bir array’dir; her object bağımsız test vakasının verisini taşır.
`expectedOk`, başarı ve failure sonucunun hangi assertion dalına gireceğini
belirleyen boolean’dır. Başarı vakasında `expectedValue`, invalid vakada
`expectedCode` anlamlıdır. Tek object’te her alanın her zaman dolu olmaması küçük
örnek için kabul edilebilir; daha büyük sistemde iki ayrı vaka türü tasarlanabilir.

### Unit test ve isolation

**Birim testi (unit test)** küçük bir davranış birimini kontrollü ve mümkün
olduğunca izole koşullarda sınar. “Unit” her zaman tek fonksiyon demek değildir;
ekibin hızlı ve kararlı biçimde izole edebildiği davranış sınırıdır.

`validateProgress` dış servis, saat veya paylaşılan mutable state kullanmadığı için
izole test edilmesi kolaydır. Test sırası değişse bile sonuç değişmemelidir. Bir
testin bıraktığı veri sonraki testi etkiliyorsa failure’ın kaynağı belirsizleşir.

İzolasyonun bedeli de vardır. Her bağımlılığı sahte nesneyle değiştirmek gerçek
bileşenlerin birlikte çalışma sorunlarını görünmez bırakabilir. Unit test hızlı
geri bildirim verir; entegrasyon davranışının yerine geçmez.

### Regression test: geçmiş failure’ı kalıcı alarma çevirmek

C25’teki defect’i hatırlayın:

```js
function totalMinutes(minutes) {
  let total = 0;

  for (let index = 0; index <= minutes.length; index += 1) {
    total += minutes[index];
  }

  return total;
}
```

Minimal failing case `[30]` için sonuç `NaN` idi. Düzeltmeden önce şu test
başarısız olmalıdır:

```js
const actual = totalMinutes([30]);
expectEqual(actual, 30, "regression: tek öğeli toplam korunur");
```

**Regression testi**, daha önce gözlenen defect’in tekrar ortaya çıkmasını
yakalamak için saklanan testtir. Güçlü akış:

1. Testi defect’li kodda çalıştır ve doğru nedenle fail olduğunu gör.
2. Root cause’a yönelik minimal fix’i yap.
3. Testin geçtiğini gör.
4. Komşu normal ve boundary testlerini çalıştır.

Test defect’li kodda zaten geçiyorsa yanlış davranışı ölçüyor veya güçlü bir
oracle kullanmıyor olabilir.

### Coverage: çalıştırılan ile kanıtlanan aynı değildir

**Coverage (kapsama)** testlerin hangi kod, dal, gereksinim veya risk öğelerine
değdiğini ölçen bilgidir. Örneğin tüm `if` dallarının en az bir kez çalışması branch
coverage sağlar. Fakat assertion yoksa dallar çalışmış, yanlış sonuçlar fark
edilmemiş olabilir.

Yüzde 100 line coverage şu sorulara tek başına cevap vermez:

- Expected sonuçlar doğru oracle’dan mı geldi?
- Boundary değerler seçildi mi?
- Dalların birleşimleri test edildi mi?
- Testler birbirinden izole mi?
- Kullanıcı için en yüksek riskli failure kapsandı mı?
- Dış bileşenler birlikte doğru çalışıyor mu?

Bu nedenle coverage bir yön bulma aracıdır; kalite puanı değildir.

### Test suite risk raporu

Bir **test suite**, birlikte çalıştırılan testler kümesidir. Suite sonunda şu
raporu yazın:

| Risk | Kanıtlayan testler | Güven | Kör nokta |
|---|---|---|---|
| Range dışı değer kaydı | -1 ve 101 | Orta | Çok büyük değerler ayrı denenmedi |
| Boş form girişi | `""`, `"  "` | Yüksek | Unicode whitespace çeşitleri yok |
| Tür karışıklığı | null ve object | Orta | Array/function temsilcileri yok |
| Eski loop defect’i | `[30]` regression | Yüksek | Büyük koleksiyon/performance kapsanmıyor |

Bu tablo testlerin değersiz olduğunu değil, kanıt sınırının dürüstçe bilindiğini
gösterir. Yeni risk ortaya çıktığında rastgele test eklemek yerine kör noktaya
uygun yeni test tasarlanır.

### Gerçek test runner’a geçiş

Kendi `expectEqual` yardımcımız kavramı görünür yaptı. Profesyonel projede test
runner; testleri keşfeder, ayrı raporlar, failure durumunda süreci başarısız kodla
bitirir ve async yaşam döngüsünü yönetir. Node.js’in yerleşik `node:test` modülü
test fonksiyonları, `node:assert/strict` ise invariant doğrulama araçları sağlar.

Bu chapter belirli framework ezberi istemez. Test case, oracle, assertion,
isolation ve risk coverage modeli; Node test runner, Vitest, Jest veya başka bir
araçta taşınabilir kalmalıdır.

## Engineering Perspective

İyi test suite üç hedefi dengeler:

1. Önemli failure’ları erken yakalamak,
2. geliştiriciye hangi davranışın bozulduğunu hızlı anlatmak,
3. bakım maliyetini kod değişikliğini engellemeyecek düzeyde tutmak.

Her implementation satırını bire bir test etmek, refactoring’i zorlaştırabilir.
Örneğin `validateProgress` içindeki yerel değişken adını test etmek sözleşme
davranışını kanıtlamaz. Test, mümkün olduğunda input ve observable output’a
bağlanmalıdır.

Yavaş veya kararsız testler ekip tarafından daha az çalıştırılır. Rastgelelik,
saat, paylaşılan state ve dış servis gibi bağımlılıklar kontrol edilmelidir. Buna
karşılık her şeyi izole etmek entegrasyon riskini saklayabilir. Test seviyesi
ürün riskine göre seçilir.

Test adları yaşayan dokümantasyondur. “test 1” yerine “üst sınır 100 kabul edilir”
adı, failure raporunda bozulan sözleşmeyi doğrudan söyler. Ancak test yalnız adla
doğru olmaz; oracle ve assertion’ın da aynı davranışı gerçekten ölçmesi gerekir.

## Real World Examples

### Kayıt formu

Normal e-posta, boş değer, yalnız boşluk, eksik `@`, çok uzun değer ve doğru
Unicode örneği farklı risk sınıflarıdır. Tek “geçerli e-posta” örneği kullanıcı
hatalarını veya dönüşüm sınırlarını kapsamaz.

### İndirim hesabı

Oran 0–100 ise 0, 100, -1 ve 101 boundary setinin temelidir. Para hesabında
kayan nokta ve yuvarlama ayrı risk olduğundan oracle yalnız ekranda görünen string
değil, ilan edilen yuvarlama kuralıdır.

### Arama

Sonucun boş olması başarı davranışı olabilir. “Sonuç yok” ile çevresel failure’ı
aynı expected değerle test etmek C24 sözleşmesini bozar. Test, success empty list
ile error result’ı ayırmalıdır.

### Sıralama

Yalnız `[3, 1, 2]` test edilirse boş, tek öğe, duplicate ve zaten sıralı veri
görünmez kalır. Çıktının sıralı olması yanında aynı elemanları kaybetmeden koruması
da ayrı invariant’tır.

## Common Mistakes

### Yalnız happy path test etmek

`50`nin kabul edilmesi alt/üst boundary, invalid tür ve boş girdi hakkında kanıt
üretmez. Contract’ı partition’lara ayırın.

### Expected sonucu implementation’dan kopyalamak

Test ve kod aynı yanlış formülü kullanırsa test yeşil kalır. Oracle’ı sözleşme,
matematik veya bağımsız doğrulanmış örnekten alın.

### Bir testte çok davranış ölçmek

Tek test form doğrulama, kayıt, sıralama ve mesaj üretimini aynı anda yaparsa
failure nedeni belirsizleşir. Birincil davranışı küçük testte izole edin; birlikte
çalışmayı ayrı seviyede sınayın.

### Yanlış eşitlik kullanmak

`==` tür dönüşümü yaparak `1` ile `"1"` farkını gizleyebilir. Nesnelerde `===`
yalnız referansı karşılaştırır. Veri yapısına uygun strict veya deep assertion seçin.

### Regression testini fix’ten sonra yazmak

Testin eski defect’i gerçekten yakaladığını görmezsiniz. Mümkünse önce doğru
nedenden fail olduğunu doğrulayın.

### Coverage yüzdesini kalite sanmak

Çalıştırılan satır doğru assertion’la değerlendirilmemiş olabilir. Coverage
raporuna risk ve kör nokta açıklaması ekleyin.

### Testler arasında state paylaşmak

Test sırası sonucu değiştiriyorsa failure tekrarlanabilir değildir. Her test kendi
başlangıç durumunu kurmalı ve bıraktığı etkiyi temizlemelidir.

## Best Practices

- Testleri implementation’dan önce sözleşme ve risk tablosunda tasarlayın.
- Her testte expected sonucu çalıştırmadan önce ilan edin.
- Normal, boundary ve invalid partition’lardan temsilci seçin.
- Test adını davranış ve koşulla yazın.
- Arrange, Act ve Assert ayrımını okunabilir tutun.
- Her testin tek birincil failure nedeni olsun.
- Bilinen defect için önce fail eden regression testi saklayın.
- Paylaşılan mutable state’i azaltın; testleri sıradan bağımsız çalıştırın.
- Coverage metriğini eksik riskleri bulmak için kullanın, kalite hedefinin yerine koymayın.
- Suite sonunda kapsanan riskleri, güven düzeyini ve kör noktaları yazın.

## Hands-on Exercise

### Birlikte yapalım

`validateProgress` sözleşmesini tabloya dönüştürelim:

| ID | Sınıf | Girdi | Expected `ok` | Expected değer/kod |
|---|---|---|---|---|
| T01 | Normal | `50` | true | 50 |
| T02 | Boundary | `0` | true | 0 |
| T03 | Boundary | `100` | true | 100 |
| T04 | Invalid boundary | `-1` | false | `PROGRESS_OUT_OF_RANGE` |
| T05 | Invalid boundary | `101` | false | `PROGRESS_OUT_OF_RANGE` |
| T06 | Invalid empty | `""` | false | `PROGRESS_REQUIRED` |
| T07 | Invalid type | `null` | false | `PROGRESS_INVALID_TYPE` |

Her satırın hangi sözleşme cümlesinden geldiğini sözlü olarak açıklayın. Bir test
yalnız “aklımıza geldiği” için varsa risk ilişkisi zayıftır.

### Şimdi sen dene

Tabloya şu riskler için test ekleyin:

- yalnız boşluk içeren string,
- sayısal olmayan string,
- ondalıklı number,
- `NaN`,
- `Infinity`,
- geçerli sayısal string.

Her test için partition, oracle kaynağı ve failure olduğunda hangi defect sınıfını
işaret edeceğini yazın.

### Hata avı

```js
function testProgress() {
  const actual = validateProgress(50);
  const expected = validateProgress(50);
  expectEqual(actual.ok, expected.ok, "progress works");
}
```

En az dört sorun bulun:

1. Expected hangi bağımsız oracle’dan geliyor?
2. Neden yalnız `ok` alanı yetersiz olabilir?
3. Test adı hangi sözleşmeyi anlatıyor?
4. Hangi boundary ve invalid riskleri görünmez?

### Kademeli ipuçları

1. **Soru:** Implementation tamamen yanlış olsa iki çağrı yine eşit olabilir mi?
2. **Küçük yön:** Expected değeri sözleşmeden sabit olarak yazın.
3. **Kavramsal açıklama:** Test, kodu kendisiyle değil bağımsız oracle ile karşılaştırır.
4. **Kısmi yapı:** `expectEqual(actual.value, ___, "normal 50 korunur")`.
5. **Gerekçeli kontrol:** Normal testten sonra boundary ve invalid partition
   tablosunu ayrı testlere dönüştürün.

### Bağımsız uygulama

`validateStudySession` için sözleşmeden test suite tasarlayın:

- `durationMinutes`: 10–180 tamsayı,
- `mode`: `focus` veya `review`,
- `chapterId`: boş olmayan string.

En az iki normal, altı boundary ve altı invalid test oluşturun. Her testte tek
birincil failure nedeni tutun. Sonunda risk coverage ve en az beş kör nokta yazın.

### Lab — Boundary odaklı test suite

`V01-C26-L01` kapsamında:

1. Fonksiyon contract’ını görünür maddelere ayırın.
2. Equivalence partition ve boundary değerleri çıkarın.
3. Expected sonuçları kodu çalıştırmadan belirleyin.
4. Assertion’larla çalışan test suite oluşturun.
5. C25 defect’i için önce fail eden regression testi gösterin.
6. Risk coverage ve kör nokta raporu yazın.

### Gerçek proje bağlantısı

`V01-CP01` için C24 error contract ve C25 debugging dossier kanıtlarını testlere
dönüştürün. Normal, boundary, invalid ve regression grupları ayrı görünmelidir.
Test sonuçları C27’de davranışı koruyan refactoring güvenlik ağı olacaktır.

## Reflection Questions

1. Hangi testinizin oracle’ını belirlemek en zordu ve neden?
2. Boundary analizi happy path’in göstermediği hangi kusuru görünür yaptı?
3. En yüksek coverage’a sahip testiniz gerçekten en yüksek riskli davranışı mı ölçüyor?
4. Bir test implementation detail’e bağlandığında refactoring’i nasıl zorlaştırır?
5. C27’ye geçmeden önce hangi davranış için güvenlik ağınız hâlâ zayıf?

## Chapter Summary

C26’da C25’in manuel failing case’ini tekrar çalıştırılabilir bir regression
alarmına dönüştürdünüz. Test case’in ad, başlangıç, girdi, expected, actual ve
sonuç parçalarını kurdunuz. Expected result’ın implementation’dan değil bağımsız
test oracle’dan gelmesi gerektiğini gördünüz.

Assertion ile farkı otomatik görünür yaptınız; Arrange–Act–Assert akışında küçük
unit testler yazdınız. Sözleşmeyi normal, boundary ve invalid partition’lara
ayırarak temsilî test seti ürettiniz. Test izolasyonunu korudunuz ve regression
testinin defect’li kodda önce fail etmesini doğruladınız.

Son olarak coverage’ın yalnız neyin çalıştırıldığını söylediğini, doğruluğu veya
risk kapsamını tek başına kanıtlamadığını öğrendiniz. Suite’in kapsadığı riskleri
ve kör noktalarını dürüstçe raporladınız.

## Key Takeaways

- Test case, girdi kadar expected result ve oracle kaynağını da içerir.
- Expected sonucu implementation’dan üretmek testi döngüsel yapar.
- Assertion, actual ile expected arasındaki farkı otomatik alarm hâline getirir.
- Normal, boundary ve invalid sınıflar dengeli test seçiminin temelidir.
- Equivalence partitioning sonsuz girdiden anlamlı temsilci seçmeye yardım eder.
- Unit test küçük ve izole geri bildirim verir; entegrasyon kanıtının yerine geçmez.
- Regression testi geçmiş defect’i yeniden görünür yapan failing case’i korur.
- Regression testi mümkünse fix’ten önce doğru nedenle fail etmelidir.
- Yüksek coverage, güçlü oracle veya doğru risk seçimini garanti etmez.
- C27’de refactoring yalnız bu davranış güvenlik ağı yeşil kaldığı sürece ilerleyecektir.

## Further Reading

- Node.js yerleşik test runner ve strict assert belgelerindeki en küçük örneği
  kendi test case tablonuzla eşleyin.
- ISTQB equivalence partitioning ve boundary value analysis bölümlerini okuyup
  `validateProgress` partition’larıyla karşılaştırın.
- C25 debugging dossier’ındaki her expected sonucu bir test oracle kaynağıyla etiketleyin.
- Test suite’inizi test sırasını değiştirerek çalıştırın ve izolasyon kusuru arayın.

## References

- [Node.js — Test runner](https://nodejs.org/api/test.html)
- [Node.js — Assert](https://nodejs.org/api/assert.html)
- [ISTQB Certified Tester Foundation Level Syllabus v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
