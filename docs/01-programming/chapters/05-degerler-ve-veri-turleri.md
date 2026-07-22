---
document_type: "chapter"
chapter_id: "V01-C05"
volume_id: "V01"
title: "Değerler ve Veri Türleri"
slug: "degerler-ve-veri-turleri"
version: "0.1.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "6-8 hours"
prerequisites:
  - "V01-C02"
  - "V01-C04"
learning_outcomes:
  - "V01-LO007"
  - "V01-LO008"
related_lab_ids:
  - "V01-C05-L01"
related_assessment_ids:
  - "V01-C05-AS01"
next_chapter_id: "V01-C06"
language: "tr"
last_updated: "2026-07-22"
---

# Değerler ve Veri Türleri

## Learning Objectives

Bu chapter tamamlandığında şunları yapabileceksin:

- bir programın işlediği değeri (Value), değerin veri türünü (Data Type), kaynak
  kodundaki değişmez değer yazımını (Literal) ve veri temsilini (Data Representation)
  birbirinden ayırmak;
- en az on örneği domain anlamına, türüne, temsil özelliğine ve geçerli işlemlerine göre
  sınıflandırmak (`V01-LO007`);
- sayı, metin, Boolean ve yokluk değerlerinin hangi ihtiyacı temsil ettiğini açıklamak;
- JavaScript'in temel türlerini doğru adlandırırken bu türleri bütün programlama
  dillerine genellememek;
- tür dönüşümünde (Type Conversion) kaynak türü, hedef türü ve geçerlilik sözleşmesini
  açıkça yazmak;
- verilen örneklerde kesinlik (Precision) veya anlam kaybını (Meaning Loss) belirlemek
  (`V01-LO008`);
- normal, sınır, geçersiz ve belirsiz girdilerden oluşan bir dönüşüm test matrisi kurmak;
- AI tarafından önerilen bir tür veya dönüşüm kararını gereksinim, resmî belge ve karşı
  örnekle denetlemek.

Bu hedeflerin başarı kanıtı “`typeof` sonuçlarını ezberledim” değildir. Gerçek kanıt,
bir alanın neden sayı ya da metin olduğunu açıklayabilmen; dönüşümde hangi bilginin
korunduğunu, değiştiğini veya kaybolduğunu gösterebilmen ve riskli girdiye ne yapılacağını
önceden belirleyebilmendir.

## Prerequisites

Bu chapter’dan önce [C02 — Bilgisayarlar Programları Nasıl
Çalıştırır?](./02-bilgisayarlar-programlari-nasil-calistirir.md) ve [C04 — Algoritmalar,
Sözde Kod ve İzleme](./04-algoritmalar-sozde-kod-ve-izleme.md) tamamlanmış olmalıdır.

C02’den şu zihinsel modeli getiriyorsun: kaynak kodu çalıştırılırken ifadeler runtime
değerleri üretir; program durumu bellekte temsil edilir; ekranda görülen metin ile
makinenin işlediği temsil aynı kavram değildir. C04’ten ise girdi sözleşmesi, normal/sınır/
geçersiz durum, sözde kod ve trace disiplini geliyor.

### Başlangıç kontrolü

Aşağıdaki beş girdiyi kod yazmadan incele:

```text
"0042"
42
true
"true"
boş bırakılmış teslimat notu
```

Her biri için şu sorulara birer cümleyle cevap ver:

1. Bu bilgi gerçek hayatta neyi ifade ediyor olabilir?
2. Aritmetik işlem anlamlı mı?
3. Baştaki sıfırlar korunmalı mı?
4. Boşluk bir hata mı, bilinmeyen bilgi mi, bilinçli yokluk mu?

“Tırnak varsa metin, yoksa sayı” demek yalnız kaynak yazımını tanır; domain kararını
vermez. Bu soruları yanıtlamadan sınıflandırma yapıyorsan C03’teki problem sözleşmesi ve
C04’teki girdi koşulları yaklaşımını yeniden gözden geçir.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Ön bilgi kontrolü ve ilk tahmin | 20 dakika |
| Ana anlatım ve kendi notlarını çıkarma | 180–220 dakika |
| Kod örneklerini tahmin etme ve çalıştırma | 60–75 dakika |
| Sınıflandırma ve dönüşüm alıştırması | 60 dakika |
| Quiz, laboratuvar hazırlığı ve reflection | 60–90 dakika |
| **Toplam** | **6–8 saat** |

Bu chapter’ı tek oturumda tüketme. Önerilen düzen: ilk gün değer–tür–temsil modeli;
ikinci gün sayı, metin, Boolean ve yokluk; üçüncü gün dönüşüm ve kayıp analizi; dördüncü
gün uygulama. Her oturumun başında önceki oturumdan üç kavramı notsuz açıklamaya çalış.

## Introduction

Bir e-ticaret sistemine şu veri geldiğini düşün:

```text
customerId: "000184"
age: "21"
emailVerified: "false"
discountRate: "0.10"
apartmentNumber: ""
```

Ekranda hepsi karakterlerden oluşur. Fakat program için aynı türde ve aynı anlamda
değillerdir. `customerId` rakamlardan oluşsa da toplama yapılacak bir miktar değildir;
başındaki sıfırlar kimliğin parçasıdır. `age`, doğrulandıktan sonra aritmetik karşılaştırma
için sayıya dönüşebilir. `emailVerified` metin hâlindeyken Boolean değildir; üstelik
`Boolean("false")` sonucu şaşırtıcı biçimde `true` olur. `discountRate` ondalıklı sayı gibi
görünür fakat para/indirim hesabında temsil ve yuvarlama politikası gerektirir.
`apartmentNumber` için boş metin “apartman numarası yok”, “kullanıcı cevaplamadı” veya
“veri alınamadı” anlamlarına gelebilir.

Bu örnek, programlamanın temel bir gerçeğini gösterir: bilgisayar yalnız sembolleri
görmez; sembolleri belirli kurallarla yorumlar. Hangi bilginin hangi türle temsil edildiği,
hangi işlemlerin anlamlı olduğu ve dönüşüm sırasında neyin kaybolabileceği tasarım
kararıdır.

Bir öğrenci için veri türleri çoğu zaman “number, string, boolean listesini ezberleme”
konusu gibi görünür. Profesyonel mühendis içinse veri türü bir sözleşmedir. Yanlış sözleşme
şu sonuçlara yol açabilir:

- müşteri kimliklerinin değişmesi,
- büyük sipariş numaralarının yuvarlanması,
- “false” yazan hesabın doğrulanmış kabul edilmesi,
- boş bilgi ile sıfır değerinin karıştırılması,
- farklı sistemlerin aynı JSON sayısını farklı yorumlaması,
- AI tarafından üretilen kodun sessizce veri kaybetmesi.

Bu chapter’ın amacı söz dizimini çoğaltmak değil, veriye bakışını değiştirmektir. Bundan
sonra her alan için “hangi tür?” sorusundan önce “hangi anlam, hangi geçerli değerler,
hangi işlemler ve hangi kayıp riski?” sorularını soracaksın.

## Core Concepts

### 1. Bilgi, veri ve değer

Gerçek dünyada “21 yaş”, “İstanbul”, “ödeme tamamlandı” ve “telefon numarası bilinmiyor”
gibi bilgiler vardır. Program bu bilgiyi doğrudan kavramaz; belirli bir temsil içinde
işler. Programın saklayabildiği, karşılaştırabildiği, dönüştürebildiği veya iletebildiği
temsil edilmiş bilgi parçasına **değer** denir.

Değer ile değer hakkında konuştuğumuz değişkeni karıştırma. `42` bir değer olabilir.
`age` ise sonraki chapter’da göreceğin biçimde bu değere bağlanan bir isimdir. Aynı değer
birden fazla yerde bulunabilir; bir isim zaman içinde farklı değerlerle bağlanabilir.

Şu dört katmanı ayır:

| Katman | Sorduğu soru | Örnek |
|---|---|---|
| Domain meaning | Gerçek hayatta ne ifade ediyor? | Müşteri yaşı |
| Value | Program hangi bilgiyi işliyor? | Sayısal 21 değeri |
| Type | Hangi değer ailesi ve işlemler geçerli? | Number |
| Representation | Nasıl kodlanıyor/iletiliyor? | IEEE 754 binary64 veya JSON `21` |

Bu katmanlar ilişkilidir ama aynı değildir. Aynı domain anlamı farklı sistemlerde farklı
temsiller kullanabilir. Aynı görünüm de farklı domain anlamları taşıyabilir. `2026` bir yıl,
ürün kodu, PIN parçası veya miktar olabilir.

### 2. Değişmez değer yazımı değer değildir

Kaynak kodda bir değeri doğrudan yazmak için kullanılan sözdizimsel gösterime **değişmez
değer yazımı** denir. Aşağıdaki kodda `42`, `"42"`, `true` ve `null` farklı literal’lerdir:

```js
console.log(42);       // Number değeri
console.log("42");     // String değeri
console.log(true);     // Boolean değeri
console.log(null);     // Null değeri
```

Literal kaynak koddaki yazımdır; program çalıştığında elde edilen şey runtime değeridir.
Örneğin `20 + 22` bir Number değeri üretir ama `20 + 22` tek bir numeric literal değildir.
Bir formdan gelen `"42"` de literal değildir; runtime’da elde edilmiş String değeridir.

Bu ayrım neden önemlidir? Çünkü “tırnakları kaldırınca sayı olur” yalnız kaynak kodu
düzenlerken anlamlıdır. Kullanıcı girdisi, dosya veya API verisi için tırnak silmek yerine
doğrulama ve dönüşüm gerekir.

### 3. Veri türü bir kural kitabıdır

**Veri türü**, bir değer kümesini ve bu değerlere uygulanabilen işlemler ile kısıtları
tanımlar. Number değerleriyle aritmetik yapılabilir. String değerlerinde sıralı metin
birimleri vardır. Boolean değerleri iki mantıksal durumu temsil eder. Tür yalnız “verinin
adı” değildir; hangi davranışın anlamlı olduğunu belirleyen sözleşmedir.

Bir tür kararı üç soruyu cevaplar:

1. Hangi değerler geçerlidir?
2. Hangi işlemler tanımlıdır?
3. Hangi sonuç veya hata davranışı beklenir?

Telefon numarasını Number seçersen aritmetik işlemler teknik olarak mümkün hâle gelir;
fakat bu işlemler domain açısından anlamsızdır. Baştaki sıfır ve `+` ülke kodu işareti de
kaybolabilir. Demek ki “rakam içeriyor” tür seçmek için yeterli değildir.

### 4. Temel tür ve bileşik değer sınırı

Programlama dilleri genellikle bazı değerleri doğrudan dil modelinin temelinde tanımlar.
Bunlara **temel tür** değerleri denir. Dilin modeline göre tür listesi değişebilir.
ECMAScript, JavaScript için yedi primitive tür tanımlar:

1. Undefined
2. Null
3. Boolean
4. Number
5. BigInt
6. String
7. Symbol

Object ise primitive olmayan türdür. Array ve function gibi yapılar JavaScript dil
modelinde Object ailesiyle ilişkilidir. Bu chapter sayı, metin, Boolean ve yokluk üzerinde
yoğunlaşır. BigInt büyük tamsayı sınırını anlamak için tanıtılır; Symbol ve bileşik veri
yapıları ileride derinleşir.

“Primitive” kelimesini “basit, önemsiz veya bellekte kesin tek parça” diye yorumlama. Bu,
dilin anlamsal sınıflandırmasıdır; JavaScript motorunun fiziksel bellekte hangi
optimizasyonu yaptığına dair garanti değildir.

### 5. JavaScript’te türü gözlemlemek

`typeof` operatörü runtime değeri hakkında bir String sonucu verir:

```js
console.log(typeof 42);          // "number"
console.log(typeof "42");        // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof 42n);         // "bigint"
console.log(typeof Symbol());    // "symbol"
console.log(typeof null);        // "object"
```

Son satır kritik bir tarihsel istisnadır. ECMAScript’e göre `null` primitive değerdir;
`typeof null` sonucunun `"object"` olması onu Object türüne dönüştürmez. Null kontrolü
gerekiyorsa doğrudan `value === null` karşılaştırması yapılır.

`typeof`, domain türünü söylemez. `typeof "00123"` yalnız String der; bunun posta kodu,
ürün kodu veya yanlış yazılmış sayı olup olmadığını söyleyemez. Runtime gözlem ile iş
kuralını birlikte kullanmalısın.

### 6. Sayı: tek görünüm, sınırlı temsil

Günlük hayatta doğal sayılar, negatif sayılar, kesirler ve ondalıklar hakkında konuşuruz.
JavaScript’te çoğu sayısal değer Number türündedir. `42`, `-7`, `3.14` ve `1e6` farklı
literal yazımlarıyla Number değerleri üretir.

ECMAScript Number türü, IEEE 754 binary64 formatına dayanan davranışı tanımlar. Bu temsil
sonlu sayıda bit kullandığı için bütün gerçek sayıları ve bütün tamsayıları tam olarak
saklayamaz. Bu bir JavaScript “hatası” değil, sınırlı dijital temsil sonucudur.

#### Ondalık kesir neden şaşırtır?

```js
const result = 0.1 + 0.2;

console.log(result);          // 0.30000000000000004
console.log(result === 0.3);  // false
```

`0.1` ve `0.2`, ikilik tabanda sonlu bir binary64 kesri olarak tam temsil edilemez. Yakın
değerler saklanır; işlem ve yuvarlama sonunda görünen küçük fark oluşur. Çıkarılacak ders
“ondalık sayıları kullanma” değildir. Hesabın hata toleransını, para temsilini ve
yuvarlama politikasını açıkça belirle.

Para için yaygın bir yaklaşım en küçük birimi tamsayı olarak tutmaktır: 10,25 TL yerine
1025 kuruş. Fakat bu da para birimi, kesir basamağı, vergi yuvarlaması ve çok büyük tutar
sınırlarını ortadan kaldırmaz. Finansal sistemlerde decimal/arbitrary-precision araçlar
gerekebilir; teknoloji seçimi domain sözleşmesine göre yapılır.

#### Güvenli tamsayı sınırı

JavaScript’te güvenli tamsayı aralığı `-(2^53 - 1)` ile `2^53 - 1` arasındadır.

```js
console.log(Number.MAX_SAFE_INTEGER);                // 9007199254740991
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(9007199254740992 === 9007199254740993);  // true
```

Son karşılaştırma ilk bakışta imkânsız görünür. Fakat ikinci literal Number’a
dönüştürülürken ayırt edilebilir kesinlik kalmaz. Bu yüzden çok büyük dış sistem ID’lerini
Number’a çevirmek tehlikelidir. Kimlikler zaten aritmetik miktar değildir; çoğu zaman
String olarak korunmalıdır.

#### BigInt sınırı

BigInt, dil modelinde keyfî kesinlikli tamsayıları temsil eder:

```js
const exactId = 9007199254740993n;
console.log(exactId + 1n); // 9007199254740994n
```

BigInt yalnız tamsayıdır ve Number ile doğrudan bütün işlemlerde karıştırılamaz. Ayrıca
JSON doğrudan BigInt değeri taşımaz. “Büyükse BigInt kullan” tek başına yeterli tasarım
değildir; sistemler arası uyumluluk ve dönüşüm sözleşmesi gerekir.

#### Özel Number değerleri

- `NaN`: geçerli bir sayısal sonuç üretilemediğini gösteren Number değeridir.
- `Infinity` ve `-Infinity`: pozitif/negatif sonsuzluk değerleridir.
- `0` ve `-0`: bazı işlemlerde ayırt edilebilen iki sıfır değeridir.

```js
console.log(typeof NaN);           // "number"
console.log(Number.isNaN(NaN));    // true
console.log(Number.isFinite(1/0)); // false
console.log(Object.is(0, -0));     // false
```

Business input için bu değerlerin kabul edilip edilmeyeceği ayrıca belirlenir. Runtime
türünün Number olması “geçerli yaş” anlamına gelmez.

### 7. Metin: tırnak içinden daha fazlası

JavaScript’te metin String türüyle temsil edilir. Tek tırnak, çift tırnak ve template
literal farklı kaynak yazımlarıyla String değeri üretebilir:

```js
console.log("ASEA");
console.log('ASEA');
console.log(`ASEA`);
```

String değerleri değiştirilemez primitive değerlerdir. String metotları eski değeri
yerinde dönüştürmek yerine yeni bir String sonucu üretir. Değişken ve assignment ayrıntısı
C06’da işlenecektir.

ECMAScript String, 16-bit unsigned integer değerlerinden oluşan bir dizi olarak tanımlanır;
bunlar metin işlenirken çoğunlukla UTF-16 code unit’leri olarak yorumlanır. İnsan gözüyle
bir “karakter”, Unicode code point ve JavaScript `length` sonucu her zaman bire bir değildir:

```js
console.log("A".length);  // 1
console.log("🙂".length); // 2
```

Emoji tek görünür sembol gibi algılanır fakat UTF-16’da iki code unit ile temsil edilir.
Birleşen işaretler ve emoji dizileri daha karmaşık olabilir. Bu chapter’da tam Unicode
işleme algoritmaları öğrenmiyorsun; şu ilkeyi öğreniyorsun: **görüntü, soyut karakter ve
saklama birimi aynı şey değildir.**

Metin türü şu alanlar için çoğu zaman doğrudur:

- ad ve açıklamalar,
- telefon ve posta kodları,
- dış sistem kimlikleri,
- formatı korunması gereken numaralar,
- tarih/saatin henüz parse edilmemiş kaynak gösterimi,
- sayı biçiminde olsa bile aritmetik anlam taşımayan kodlar.

Metin “her şeyi güvenle saklar” da değildir. Geçerli encoding, normalization, uzunluk,
izin verilen karakterler, case kuralları ve güvenlik sınırları domain’e göre belirlenir.

### 8. Boolean: iki mantıksal değer

Boolean türünde yalnız `true` ve `false` değerleri vardır. Bu tür, iki durumlu bir sorunun
yanıtını temsil etmek için uygundur: “e-posta doğrulandı mı?”, “ödeme başarılı mı?” veya
“kullanıcı şartları kabul etti mi?”

```js
console.log(typeof true);       // "boolean"
console.log(typeof "true");     // "string"
console.log(true === "true");   // false
```

İki durum gerçekten yeterli mi? “Doğrulandı”, “doğrulanmadı” ve “henüz kontrol edilmedi”
üç farklı durumsa tek Boolean bilgi kaybettirir. Tür seçmeden önce domain durumlarını say.

Örtük doğruluk (truthiness) ile Boolean değerini karıştırma. JavaScript bazı bağlamlarda
diğer türleri Boolean’a dönüştürür. Ayrıntılı kontrol akışı sonra gelecek, fakat şu risk
şimdi bilinmelidir:

```js
console.log(Boolean("false")); // true
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true
console.log(Boolean(0));       // false
```

`Boolean()` kelimenin anlamını parse etmez. Boş olmayan her String burada `true` olur.
Metin girdisi `"true"`/`"false"` sözleşmesine sahipse kabul edilen kelimeleri açıkça
karşılaştırıp sonra Boolean üretmelisin.

### 9. Yokluk: boş, sıfır ve false ile aynı değildir

Programlarda bazen bir değer yoktur. Fakat “yok” tek bir durum değildir:

- henüz atanmadı,
- bilinmiyor,
- kullanıcı bilerek vermedi,
- bu alan bu kayıt için uygulanamaz,
- arama sonucu bulunamadı,
- veri kaynağında eksik,
- işlem hata verdi.

JavaScript’te `undefined` ve `null` ayrı primitive değerlerdir. ECMAScript terminolojisinde
`undefined`, bir değişkenin değer atanmamış olduğu durumlarla ilişkilidir; `null` ise bir
Object değerinin kasıtlı yokluğunu temsil eder. Uygulama sözleşmeleri bunlara daha açık
domain anlamları atamalıdır.

```js
console.log(undefined === null); // false
console.log("" === null);        // false
console.log(0 === null);         // false
console.log(false === null);     // false
```

Boş String mevcut fakat sıfır uzunluklu metindir. `0` geçerli sayısal değer olabilir.
`false` geçerli Boolean yanıttır. Bunları “falsy” oldukları için tek eksik durumuna
indirgemek veri kaybıdır.

Bir alan için yokluk politikası yaz:

| Soru | Örnek karar |
|---|---|
| Alan zorunlu mu? | `customerId` zorunlu |
| Yokluk nasıl temsil edilir? | `middleName: null` |
| Boş metin kabul edilir mi? | Hayır; trim sonrası boşsa reddet |
| Bilinmeyen ve uygulanamaz ayrılır mı? | Gerekirse ayrı domain durumları kullan |
| Çıktıya nasıl taşınır? | JSON sözleşmesine göre açıkça belirt |

### 10. Veri temsili: aynı anlam, farklı taşıyıcı

Bir değerin saklanması, iletilmesi veya yorumlanması için seçilen kodlamaya veri temsili
denir. `42` sayısal değeri bellekte Number olarak, kullanıcı arayüzünde `"42"` metni olarak,
JSON’da `42` token’ı olarak veya URL’de `%34%32` byte gösterimine kadar farklı katmanlarda
temsil edilebilir.

Temsil değiştiğinde şu özellikleri kontrol et:

- değer kümesi: hedef bütün kaynak değerlerini taşıyabiliyor mu?
- kesinlik: hedef ayırt edilmesi gereken değerleri ayırabiliyor mu?
- biçim: leading zero, sign, case veya whitespace önemli mi?
- birim: `12` kilogram mı, metre mi, adet mi?
- yokluk: hedef `undefined` gibi bir durumu destekliyor mu?
- uyumluluk: alıcı sistem aynı kuralları kullanıyor mu?

JSON iyi bir örnektir. RFC 8259 JSON değerlerini String, Number, Boolean, null, Array ve
Object olarak tanımlar. JavaScript’teki `undefined`, BigInt, Symbol, `NaN` ve Infinity
doğrudan JSON value değildir. “JavaScript’te var” demek “JSON ile aynen taşınır” demek
değildir.

```js
console.log(JSON.stringify({ result: NaN })); // {"result":null}
// JSON.stringify({ id: 42n }); TypeError üretir.
```

İlk örnekte çalışma durmaz ama anlam değişir: “sayısal sonuç geçersiz” bilgisi JSON’da
`null` olur. Bu dönüşüm bilinçli sözleşme olmadan yapılırsa tüketici nedeni bilemez.

### 11. Tür dönüşümü: sınırdaki mühendislik kararı

Bir değeri bir type veya representation domain’inden diğerine dönüştürmeye tür dönüşümü
denir. Dönüşüm açıkça çağrılabilir veya dil tarafından örtük yapılabilir.

```js
console.log(Number("42"));  // 42
console.log(String(42));    // "42"
console.log(Boolean(1));    // true
console.log("5" + 1);       // "51" (örtük dönüşüm ve concatenation)
```

Açık dönüşüm niyeti görünür yapar; ancak güvenlik garantisi değildir:

```js
console.log(Number(""));          // 0
console.log(Number("  "));        // 0
console.log(Number("12px"));      // NaN
console.log(parseInt("12px", 10)); // 12
```

`Number()` ile `parseInt()` aynı problemi çözmez. `Number()` trim edilmiş girdinin
tamamının numeric grammar’a uymasını bekler. `parseInt()` geçerli tamsayı prefix’ini
okuyup sonraki karakterlerde durabilir. “12px içinden 12’yi al” sözleşmesi varsa prefix
parse anlamlı olabilir; “alan yalnız tamsayı içermeli” sözleşmesinde sessiz kabul hatadır.

#### Güvenli dönüşüm hattı

Şu sırayı kullan:

```text
Ham girdiyi koru
    ↓
Kaynak türünü ve biçimi doğrula
    ↓
Domain anlamını ve birimi doğrula
    ↓
Açık dönüşüm uygula
    ↓
Sonuç türü, aralık ve kesinliği doğrula
    ↓
Kabul et / reddet / incelemeye ayır
```

Örnek strict yaş dönüşümü:

```js
function parseAge(rawAge) {
  // Ham girdinin String ve yalnız ondalık basamaklardan oluşmasını doğrula.
  if (typeof rawAge !== "string" || !/^[0-9]+$/.test(rawAge)) {
    return { ok: false, reason: "Yaş yalnız rakamlardan oluşmalıdır." };
  }

  const age = Number(rawAge);

  // Dönüşüm sonrasında tamsayı ve domain aralığını doğrula.
  if (!Number.isInteger(age) || age < 0 || age > 130) {
    return { ok: false, reason: "Yaş 0 ile 130 arasında olmalıdır." };
  }

  return { ok: true, value: age };
}

console.log(parseAge("21"));   // { ok: true, value: 21 }
console.log(parseAge("21x"));  // { ok: false, reason: ... }
console.log(parseAge(""));     // { ok: false, reason: ... }
console.log(parseAge("131"));  // { ok: false, reason: ... }
```

Bu örnek “her sayı böyle parse edilir” şablonu değildir. Yaşa ait grammar ve range
sözleşmesini görünür kılar. Fiyat, sıcaklık veya dış sistem ID’si farklı kurallar ister.

### 12. Kesinlik kaybı ve anlam kaybı

İki kayıp türünü ayır:

**Kesinlik kaybı**, ayrı olması gereken sayısal değerlerin hedef representation’da aynı
veya yaklaşık hâle gelmesidir.

```js
const rawId = "9007199254740993";
const convertedId = Number(rawId);

console.log(convertedId);                  // 9007199254740992
console.log(Number.isSafeInteger(convertedId)); // false
```

**Anlam kaybı**, bit düzeyinde sonuç “doğru” görünse bile domain bilgisinin silinmesidir:

```js
const postalCode = "00123";
console.log(Number(postalCode)); // 123
```

123 matematiksel olarak doğru dönüşüm olabilir; fakat posta kodu kimliği değişmiştir.
Benzer kayıplar:

- `"12.00"` → 12: gösterim ölçeği/format bilgisi kaybolabilir,
- `"12 kg"` → 12: birim kaybolur,
- `null` → 0: “yok” ile “sıfır” birleşir,
- tarih metni → locale varsayımıyla date: gün ve ay yer değiştirebilir,
- büyük integer → Number: düşük basamaklar kaybolabilir,
- Unicode normalization olmadan karşılaştırma: görünür eşitlik kaçabilir.

Her dönüşüm için şu cümleyi tamamla: “Bu dönüşüm kaynak değerden ... bilgisini
korur; ... bilgisini kaybedebilir; bu yüzden ... durumda reddedilir.”

### 13. Sınıflandırma yöntemi: veri sözlüğü

Profesyonel ekipler önemli alanları yalnız isim–type çiftiyle belgelememelidir. Basit bir
veri sözlüğü (Data Dictionary) şu alanları içerebilir:

| Alan | Açıklama |
|---|---|
| Field | Tutarlı alan adı |
| Domain meaning | Gerçek hayatta neyi ifade eder? |
| Source representation | Veri nereden ve nasıl gelir? |
| Runtime type | Doğrulama sonrası kullanılacak tür |
| Valid examples | Normal ve sınır örnekleri |
| Invalid examples | Reddedilecek örnekler |
| Allowed operations | Hangi işlemler anlamlıdır? |
| Absence policy | Eksik/bilinmeyen nasıl gösterilir? |
| Conversion policy | Nasıl dönüştürülür ve doğrulanır? |
| Loss risk | Kesinlik/meaning riski |

Örnek:

| Field | Meaning | Source | Runtime | Valid | Invalid | Loss policy |
|---|---|---|---|---|---|---|
| `customerId` | Değişmez dış kimlik | String | String | `"000184"` | boş | Number’a dönüştürme |
| `age` | Tamamlanmış yaş | String | Number | `"0"`, `"130"` | `"21x"` | full parse + range |
| `emailVerified` | doğrulama sonucu | String | Boolean | `"true"`, `"false"` | `"yes"` | explicit token map |
| `discountRate` | 0–1 oranı | String | Number | `"0.10"` | `"10%"` | finite + range; rounding policy |
| `apartmentNumber` | adres alt bilgisi | String/null | String/null | `"12A"`, null | whitespace-only | empty ≠ null |

Bu tablo, koddan önce alınmış küçük bir architecture kararıdır. Sonraki chapter’larda
değişken isimleri, operatörler ve I/O bu sözleşmeyi kullanacaktır.

### 14. Tam örnek: içe aktarma kaydını denetlemek

Ham kaydımız:

```js
const rawRecord = {
  customerId: "000184",
  age: "21",
  emailVerified: "false",
  discountRate: "0.10",
  apartmentNumber: "",
};
```

Kod yazmadan önce tahmin et:

- Hangileri String olarak kalmalı?
- Hangileri dönüştürülebilir?
- Hangi alanın boşluğu belirsizdir?
- Hangi dönüşüm `Number()` ile, hangisi token mapping ile yapılmalıdır?

Sonra sınır dönüştürücüsünü incele:

```js
function parseBooleanToken(rawValue) {
  // Yalnız sözleşmede izin verilen token'ları kabul et.
  if (rawValue === "true") return { ok: true, value: true };
  if (rawValue === "false") return { ok: true, value: false };
  return { ok: false, reason: "Boolean token true veya false olmalıdır." };
}

function parseRate(rawValue) {
  // Tam girdinin basit ondalık grammar'a uymasını iste.
  if (typeof rawValue !== "string" || !/^(0|1)(\.[0-9]+)?$/.test(rawValue)) {
    return { ok: false, reason: "Oran 0 ile 1 arasında ondalık metin olmalıdır." };
  }

  const value = Number(rawValue);
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    return { ok: false, reason: "Oran sınır dışında." };
  }

  return { ok: true, value };
}

function normalizeRecord(raw) {
  const ageResult = parseAge(raw.age);
  const verifiedResult = parseBooleanToken(raw.emailVerified);
  const rateResult = parseRate(raw.discountRate);

  const errors = [];
  if (!ageResult.ok) errors.push({ field: "age", reason: ageResult.reason });
  if (!verifiedResult.ok) {
    errors.push({ field: "emailVerified", reason: verifiedResult.reason });
  }
  if (!rateResult.ok) {
    errors.push({ field: "discountRate", reason: rateResult.reason });
  }

  if (typeof raw.customerId !== "string" || !/^[0-9]{6}$/.test(raw.customerId)) {
    errors.push({ field: "customerId", reason: "Kimlik altı basamaklı metin olmalıdır." });
  }

  if (errors.length > 0) return { ok: false, raw, errors };

  return {
    ok: true,
    value: {
      customerId: raw.customerId,
      age: ageResult.value,
      emailVerified: verifiedResult.value,
      discountRate: rateResult.value,
      apartmentNumber: raw.apartmentNumber === "" ? null : raw.apartmentNumber,
    },
  };
}

console.log(normalizeRecord(rawRecord));
```

Bu tasarımda önemli olan syntax değil, kararlardır:

- müşteri ID’si String kalır;
- Boolean metnin truthiness’iyle değil token eşlemesiyle üretilir;
- oran full-input grammar ve range ile denetlenir;
- başarısızlık durumunda ham kayıt korunur;
- boş apartman numarasına `null` atanması açık policy’dir; requirements farklıysa karar
  da değişmelidir.

#### Trace tablosu

| Field | Raw | Source type | Check | Conversion | Result | Risk decision |
|---|---|---|---|---|---|---|
| customerId | `"000184"` | String | 6 digits | none | `"000184"` | leading zero preserved |
| age | `"21"` | String | digits + 0–130 | Number | 21 | accepted |
| emailVerified | `"false"` | String | exact token | map | false | truthiness avoided |
| discountRate | `"0.10"` | String | grammar + range | Number | 0.1 | display precision not retained |
| apartmentNumber | `""` | String | empty policy | null | null | intentional normalization |

### 15. AI ile çalışma: öneri değil kanıt iste

AI’ye “Bu alanların türlerini seç” dersen, model eksik gereksinimleri kendi varsayımlarıyla
doldurabilir. Daha güvenli süreç:

1. Kendi veri sözlüğü taslağını oluştur.
2. AI’ye her kararın gizli varsayımını sordur.
3. En az beş karşı örnek ve sınır girdisi üretmesini iste.
4. Önerilen davranışı resmî belgeden doğrula.
5. Kod varsa çalıştır; beklenen çıktıyı bağımsız yaz.
6. Domain kararını AI’ye devretme; paydaş sözleşmesine geri dön.

Örnek istem:

```text
Aşağıdaki veri sözlüğünü çözme. Önce her alan için eksik gereksinimleri,
precision veya meaning loss riskini ve kararı bozabilecek karşı örnekleri listele.
JavaScript davranışı iddia ediyorsan ilgili ECMA-262 veya MDN bölümünü belirt.
Son kodu ancak ben ilk dönüşüm politikamı yazdıktan sonra karşılaştırma için üret.
```

AI `customerId` için Number önerirse şu denetimi yap:

- Aritmetik işlem gereksinimi var mı?
- Leading zeros anlamlı mı?
- Maksimum uzunluk nedir?
- 2^53 sınırı aşılabilir mi?
- Başka sistemler ID’yi nasıl taşır?
- Dönüşümün geri dönüşü bire bir mi?

AI’nin güvenli görünen kodu testlerden geçse bile requirements yanlışsa çözüm yanlıştır.
Mühendislik sorumluluğu, öneriyi kabul etmek değil, iddia–kanıt zincirini kurmaktır.

### 16. Tür seçme karar ağacı

Bir field gördüğünde hemen JavaScript keyword’ü düşünmek yerine aşağıdaki karar sırasını
uygula. Bu sıra kusursuz bir otomasyon değildir; bilinçli soru sormayı sağlar.

#### Adım 1 — Alan kimlik mi, miktar mı, ifade mi, durum mu?

- **Kimlik:** Bir varlığı ayırt eder. `customerId`, pasaport numarası ve posta kodu gibi.
  Genellikle arithmetic anlamsızdır; format korunur.
- **Miktar:** Sayılabilir veya ölçülebilir büyüklüktür. Stok adedi, yaş, mesafe gibi.
  Unit, range ve precision gerekir.
- **İfade:** İnsan tarafından okunacak text veya code’dur. İsim, açıklama ve şehir gibi.
- **Durum:** Bir sürecin veya kararın hâlidir. İki durum varsa Boolean düşünülebilir;
  daha çok durum varsa açık bir vocabulary gerekir.
- **Yokluk/sonuç:** Bilginin bulunmaması veya operation’ın sonuç vermemesi olabilir.
  Absence reason önemliyse tek null yeterli olmayabilir.

`orderNumber` adında “Number” geçmesi onu numeric quantity yapmaz. `temperature` text olarak
gelse bile domain’de ölçümdür. İsim yalnız ipucu; sözleşme otoritedir.

#### Adım 2 — Geçerli değer kümesini yaz

“Number” demeden önce şu ayrımları belirle:

- integer mı, decimal mı?
- negative mümkün mü?
- minimum/maximum nedir?
- unit nedir?
- unknown/empty kabul edilir mi?
- special values (`NaN`, Infinity) kabul edilir mi?

String için de aynı disiplin gerekir:

- empty kabul edilir mi?
- minimum/maximum length hangi ölçüte göre?
- leading/trailing whitespace significant mı?
- case significant mı?
- Unicode/normalization policy var mı?
- yalnız format mı doğrulanacak, gerçek-world existence da mı?

Boolean için “iki state var mı?” sorusunu sor. Bir teslimat `delivered=false` olduğunda bunun
“hazırlanıyor”, “yolda”, “iptal”, “başarısız” veya “bilinmiyor” durumlarından hangisi olduğu
anlaşılmıyorsa Boolean fazla bilgi sıkıştırmıştır.

#### Adım 3 — Kullanılacak işlemleri yaz

Türü operations üzerinden sınayabilirsin:

| İhtiyaç | Olası model | Uyarı |
|---|---|---|
| Toplama, ortalama | Numeric quantity | Unit ve precision şart |
| Equality/lookup | Identifier String | Case/normalization contract gerekir |
| Metin birleştirme | String | Structured data’yı text’e gömme riski |
| Evet/hayır kararı | Boolean | Unknown state var mı kontrol et |
| Sıralama | Number/date/text | Hangi ordering semantics? |

Telefon numaralarını toplamayız; bu nedenle numeric operations’ın mümkün olması avantaj
değil, yanlış kullanım kapısıdır. Buna karşılık stock count’u String bırakırsak her
hesaplamada dönüşüm tekrar eder. Doğrulanmış boundary’den sonra runtime Number daha açıktır.

#### Adım 4 — Kaynak ve hedef temsili karşılaştır

Form, environment variable, command-line argument ve CSV çoğu veriyi text olarak getirir.
Bu, domain’in de text olduğu anlamına gelmez. Kaynak representation ile normalized runtime
type’ı ayrı sütunlara yaz.

```text
Kaynak: "25" (String, command-line argument)
Domain: adet (integer quantity)
Hedef: 25 (Number, safe integer 0–999)
Policy: full decimal grammar + range + integer check
```

Başka örnek:

```text
Kaynak: "000025" (String, CSV)
Domain: employee identity
Hedef: "000025" (String)
Policy: exactly six digits, no numeric conversion
```

İki input aynı sembolleri taşısa da requirements farklı olduğu için hedef karar farklıdır.

#### Adım 5 — Round-trip sorusunu sor

Kaynak değeri hedefe çevirip tekrar kaynak biçimine döndürdüğünde aynı bilgi elde ediliyor mu?

```js
const raw = "00123";
const converted = Number(raw);
const roundTrip = String(converted);

console.log(roundTrip);       // "123"
console.log(roundTrip === raw); // false
```

Round-trip eşitliği tek başına yeterli correctness proof değildir; örneğin whitespace’i
bilinçli normalize ediyor olabilirsin. Fakat eşitsizlik, hangi bilginin kaybolduğunu
sormak için güçlü sinyaldir. Policy bu kaybı bekliyor ve izin veriyor mu?

### 17. On iki değeri birlikte sınıflandıralım

Aşağıdaki çalışma outcome’un doğrudan modelidir. Önce sağ sütunları kapat ve kendi
kararlarını yaz.

| Field ve raw value | Domain meaning | Target | Karar gerekçesi |
|---|---|---|---|
| `postalCode="06000"` | teslimat bölgesi kimliği | String | Arithmetic yok; leading zero korunur |
| `stock="0"` | ürün adedi | Number | Valid zero; integer/range sonrası convert |
| `phone="+90312..."` | iletişim kimliği | String | `+`, format ve leading digits significant |
| `height="1.75"` | metre ölçümü | Number | Unit ve acceptable precision açık olmalı |
| `isActive="false"` | iki durumlu flag | Boolean | Exact token mapping gerekir |
| `approval="pending"` | workflow state | controlled String | Boolean üç state’i taşıyamaz |
| `middleName=""` | optional name | contract-dependent | Empty/null policy requirement ister |
| `managerId=null` | yönetici ilişkisi yok | null/String | Null intentional absence; ID varsa String |
| `externalId="9007199254740993"` | dış kimlik | String | Number precision risk; arithmetic yok |
| `ratio="0.10"` | oran | Number/decimal policy | Range 0–1; display scale ayrıca gerekebilir |
| `temperature="21.5 C"` | magnitude + unit | structured result | Prefix parse unit’i kaybettirmemeli |
| `label="🙂"` | user-visible text | String | UTF-16 length visible count değildir |

Bu tabloyu okurken iki davranışı fark et. Birincisi, target sütununda bazen tek kelime
yerine “contract-dependent” yazar. Requirements eksikken tahminde bulunmamak profesyonel
bir davranıştır. İkincisi, aynı JavaScript türü farklı validation sözleşmeleri taşır.
Postal code ve phone String’dir fakat grammar’ları aynı değildir.

#### Kendi gerekçeni test et

Her row için üç saldırı sorusu üret:

1. Kararımı bozan boundary value nedir?
2. Başka bir sistem bu değeri nasıl farklı temsil edebilir?
3. Hangi requirement değişirse target type değişir?

Örneğin stock için maximum 10^30 olursa Number safe integer yetmeyebilir. Height için ölçüm
laboratuvar düzeyinde exact decimal gerektirirse binary64 policy uygun olmayabilir. Approval
yalnız approved/rejected olarak yeniden tanımlanırsa Boolean düşünülebilir; fakat isimlerin
okunabilirliği ve gelecek state’ler yine değerlendirilir.

### 18. Dönüşüm matrisi nasıl okunur?

Bir dönüşüm tablosu yalnız “input → output” gösterirse review için zayıftır. Şu kolonları
kullan:

| Raw | Source type | Rule | Target | Result | Loss | Decision |
|---|---|---|---|---|---|---|
| `"42"` | String | digits, 0–100 | Number | 42 | none | accept |
| `"042"` | String | digits, 0–100 | Number | 42 | textual form | accept only if form irrelevant |
| `""` | String | required | — | — | absence ambiguity | reject |
| `"42px"` | String | full digits | — | — | suffix/unit | reject |
| `"101"` | String | range 0–100 | Number | 101 | none | reject range |
| `"9007199254740993"` | String | integer | Number | inexact | precision | reject/alternate type |

“Loss = none” demek, bütün olası anlamın korunduğu evrensel iddia değildir. Yalnız yazılmış
contract kapsamında kayıp bulunmadığını söyler. `"42" → 42` işlemi yaş için güvenli olabilir;
ürün code için olmayabilir.

#### Accept, normalize, reject, quarantine

Dört sonuç kategorisi kullanışlıdır:

- **Accept:** Value ve representation contract’a uygundur.
- **Normalize:** İzin verilen, belgelenmiş dönüşüm uygulanır; örneğin çevresel whitespace
  kaldırılır. Ham input audit ihtiyacı varsa korunur.
- **Reject:** Geçersiz veya kayıplı input işleme alınmaz; reason kullanıcıya/sisteme verilir.
- **Quarantine:** Otomatik karar verilemeyen değer manuel review veya ayrı iş akışına alınır.

Özellikle migration ve import işlerinde “uydurulmuş default ile devam et” yerine quarantine
veri bütünlüğünü koruyabilir. Bunun operasyon maliyeti vardır; risk–cost kararı bilinçli verilir.

### 19. Kod atölyesi: parser'ı adım adım geliştirmek

Bir quantity parser’ı aceleyle şöyle yazılabilir:

```js
function parseQuantity(raw) {
  return Number(raw);
}
```

İlk test yalnız `"12"` ise code başarılı görünür. Şimdi C04 trace disiplinini kullan:

| Input | Number result | Business expectation | Sonuç |
|---|---:|---|---|
| `"12"` | 12 | accept | doğru |
| `""` | 0 | reject required | yanlış |
| `"  "` | 0 | reject required | yanlış |
| `"12.5"` | 12.5 | reject integer | yanlış |
| `"-1"` | -1 | reject range | yanlış |
| `"1000"` | 1000 | reject max 999 | yanlış |
| `"12px"` | NaN | reject | tesadüfen fark edilebilir |

Tek happy path, function contract’ını doğrulamamıştır. Önce result-object tasarla:

```js
function parseQuantity(raw) {
  if (typeof raw !== "string") {
    return { ok: false, code: "TYPE", reason: "Girdi String olmalıdır." };
  }

  if (!/^(0|[1-9][0-9]{0,2})$/.test(raw)) {
    return { ok: false, code: "FORMAT", reason: "0-999 arası tam sayı yazılmalıdır." };
  }

  const value = Number(raw);

  if (!Number.isSafeInteger(value) || value < 0 || value > 999) {
    return { ok: false, code: "RANGE", reason: "Miktar sınır dışında." };
  }

  return { ok: true, value };
}
```

Regex burada domain grammar’ını ifade eder: `0` kabul, gereksiz leading zero reddedilir,
en çok üç digit vardır. Eğer `"012"` kabul edilip normalize edilecekse grammar ve test
değişmelidir. Code’dan önce policy değişir.

#### Test harness

```js
const cases = [
  ["0", true],
  ["999", true],
  ["", false],
  ["  ", false],
  ["012", false],
  ["12.5", false],
  ["-1", false],
  ["1000", false],
  ["12px", false],
];

for (const [input, expectedOk] of cases) {
  const actual = parseQuantity(input);
  console.log({ input, expectedOk, actualOk: actual.ok, actual });
}
```

Bir sonraki adım yalnız testleri çalıştırmak değildir. Her case’in neden normal, boundary
veya invalid olduğunu label’la. Bir test başarısız olduğunda parser mı, expected result mı,
yoksa requirement mı yanlış sorusunu ayır.

### 20. Not çıkarma ve kendini sınama yöntemi

Bu chapter’dan kopyalanmış uzun paragraflar iyi not değildir. Defterinde veya personal
knowledge base’inde beş artefact üret:

1. **Dört katman kartı:** domain meaning, value, type, representation.
2. **Primitive table:** her JavaScript primitive için bir example ve bir boundary note.
3. **Loss table:** en az üç precision, üç meaning loss example.
4. **Conversion checklist:** raw preservation’dan decision’a kadar sıra.
5. **Kendi domain data dictionary:** en az 10 field.

Sonra kitabı kapat ve şu 90 saniyelik açıklamayı kaydet:

> “Neden `"00123"`, `123`, `null` ve `false` yalnız ekranda görünen sembollerle
> sınıflandırılamaz? Güvenli dönüşüm için hangi kanıtlara ihtiyacım var?”

Kaydı dinlerken term ezberi değil bağlantı ara. Literal ile value’yu karıştırıyor musun?
Type ile business validity’yi aynı mı sanıyorsun? Precision loss ile formatting loss’u
ayıramıyor musun? Eksik bağlantıyı tek cümleyle yeniden yaz.

#### Öğrenme kontrol noktaları

- **Hatırlama:** Primitive types ve safe integer sınırını söyleyebiliyor musun?
- **Anlama:** `Boolean("false")` ve `typeof null` istisnalarını açıklayabiliyor musun?
- **Uygulama:** On field’lık data dictionary kurabiliyor musun?
- **Analiz:** Conversion matrix’te loss class ve cause bulabiliyor musun?
- **Değerlendirme:** İki representation alternative’ı trade-off ile seçebiliyor musun?
- **Üretme:** Yeni domain için tested boundary parser tasarlayabiliyor musun?

İlk iki basamak chapter’ı okuduğunu; son dört basamak öğrendiğini gösterir. Quiz puanı
yüksek fakat lab’de type decision savunamıyorsan geri dönmen gereken yer tanımlar değil,
classification ve counterexample pratiğidir.

### 21. Bir gereksinim değiştiğinde tür kararı nasıl değişir?

Tür seçimini bir kez yapılıp sonsuza kadar doğru kalan etiket gibi görme. Requirements
değişirse type ve representation kararı yeniden değerlendirilir. Bunu bir bilet sistemi
üzerinde adım adım görelim.

#### Sürüm 1 — Basit koltuk numarası

İlk gereksinim şöyledir:

> Her salonda koltuklar 1 ile 100 arasında numaralandırılır.

Bu bounded requirement için Number tamsayı modeli savunulabilir:

```text
meaning: salon içindeki sıralı koltuk numarası
source: form String
target: Number safe integer
valid range: 1–100
operations: range validation, numeric ordering
absence: allowed değil
```

Parser full decimal grammar, integer ve range kontrol eder. `"01"` kabul edilip 1’e
normalize mi edilecek, yoksa format hatası mı sayılacak? Requirement bunu henüz söylemiyor;
karar owner’a sorulur.

#### Sürüm 2 — Harfli blok ekleniyor

Yeni salon `A01`, `A02`, `B01` biçimini kullanıyor. Artık field tek Number değildir.
Seçenekler:

- Tek String: `"A01"`; basit taşıma, fakat block ve sıra operations’ı parse gerektirir.
- Structured value: `{ block: "A", number: 1 }`; ayrı validation ve sorting daha açıktır.
- Birleşik internal ID + display label: identity ve gösterim ayrı tutulur.

“Daha önce Number seçmiştik” yeni requirement için gerekçe değildir. Model değişmeli ve
migration planı eski kayıtları nasıl çevireceğini belirtmelidir.

#### Sürüm 3 — Koltuksuz genel giriş

Bazı biletlerde koltuk yoktur. `seat=0` kullanmak cazip olabilir fakat 0’ın “koltuksuz” mu,
“henüz atanmadı” mı, invalid mi olduğunu gizler. Daha açık seçenekler:

```js
const assignedSeat = { kind: "ASSIGNED", block: "A", number: 12 };
const generalAdmission = { kind: "GENERAL_ADMISSION" };
const notAssignedYet = { kind: "PENDING" };
```

Bu Object modeling C18’de derinleşecek. Buradaki ders şudur: bir special number ile birden
fazla domain state’i sıkıştırma. Primitive değerler yararlıdır ama domain karmaşıklığı
büyüdüğünde bileşik model gerekebilir.

#### Sürüm 4 — Sistemler arası aktarım

Partner API yalnız String field kabul ediyor. Internal model structured olsa da boundary’de
serialize edilir. Örneğin `ASSIGNED:A:12`. Bu representation için escaping, version ve
invalid token policy gerekir. Internal type’ı sırf dış API String istiyor diye tamamen
String’e düşürmek zorunda değilsin; boundary adapter iki modeli ayırabilir.

Bu dört sürümden çıkarılacak sonuçlar:

1. Type requirement’a hizmet eder; requirement type’a değil.
2. Source ve internal representation farklı olabilir.
3. Absence/state çeşitliliği primitive seçimini değiştirebilir.
4. Migration, eski representation’daki bilginin yeni modele nasıl taşındığını kanıtlamalıdır.
5. Data dictionary version’lanmalı ve tüketiciler etkiden haberdar edilmelidir.

### 22. Hata mesajı da veri sözleşmesinin parçasıdır

Conversion başarısız olduğunda yalnız `false` döndürmek debugging’i zorlaştırır. Öğrenci
olarak result object kullanmaya erken alışman önemlidir:

```js
{
  ok: false,
  field: "age",
  code: "OUT_OF_RANGE",
  raw: "131",
  expected: "0 ile 130 arasında tam sayı"
}
```

Bu modelde her alan bilinçli seçilir:

- `ok`: success/failure ayrımı,
- `field`: hangi sözleşmenin bozulduğu,
- `code`: makinenin güvenilir biçimde işleyebileceği stable category,
- `raw`: policy izin veriyorsa debugging evidence,
- `expected`: insanın anlayacağı açıklama.

Sensitive raw values log’a yazılmamalıdır. Password, token, sağlık veya finans verisi için
masking ve retention policy gerekir. “Raw input’u koru” ilkesi güvenlik ve gizlilik
sözleşmesinin önüne geçmez. Gerekiyorsa hash, redacted preview veya correlation ID tutulur.

Hata code’u ile message’ı ayırmak localization ve automation sağlar. `"Yaş geçersiz"`
metnine göre program akışı kurmak yerine `OUT_OF_RANGE` code’u kullanılır; kullanıcıya
Türkçe mesaj sunulur. Bu ayrıntı exception chapter’ında genişleyecek, fakat type conversion
boundary’sinde temelini atarsın.

### 23. “Doğru tür” yerine “savunulabilir sözleşme” düşün

Bazı alanlar için tek evrensel doğru type yoktur. Para Number, integer minor unit, decimal
type veya String-backed exact value ile modellenebilir. Tarih String, epoch number veya
date-time object olabilir. Doğru karar constraint’lere bağlıdır.

Bir kararı savunulabilir yapan kanıtlar şunlardır:

- açık domain meaning,
- bounded valid value set,
- gerekli operations,
- source ve consumer representations,
- precision/range ihtiyacı,
- absence semantics,
- conversion ve failure policy,
- test edilmiş boundary/counterexamples,
- seçilmeyen alternatiflerin kısa trade-off analizi.

Örneğin öğrenci projesinde para için integer kuruş seçebilirsin:

```text
Decision: Tutarlar TRY minor unit olarak safe integer tutulacak.
Reason: İki basamaklı para birimi ve exact addition gerekiyor.
Boundary: Maximum toplam MAX_SAFE_INTEGER altında kalacak.
Input: "19.99" strict decimal grammar ile 1999'a dönüştürülecek.
Output: Display sırasında locale-aware formatter kullanılacak.
Rejected alternative: Raw Number TL; binary fraction equality riskini artırıyor.
Future trigger: Multi-currency veya variable minor-unit desteğinde karar yeniden açılır.
```

Bu karar bütün finans sistemleri için doğru değildir; scope’u içinde ölçülebilir ve
denetlenebilir olduğu için profesyoneldir. Mühendislik, ezberlenmiş “best type” bulmak değil,
değişebilen kısıtlar altında kanıtlı trade-off yapmaktır.

### 24. Chapter mastery kontrolü

Ana dersi bitirdiğinde aşağıdaki mini sınavı notsuz yap:

1. Beş dakikada dört katman modelini çiz.
2. Beş dakikada on field sınıflandır.
3. Beş dakikada üç precision ve üç meaning loss örneği üret.
4. On dakikada strict integer parser contract’ı ve sekiz test yaz.
5. Beş dakikada AI type önerisine yönelteceğin altı review sorusunu yaz.

Toplam 30 dakikanın sonunda artefact’larını rubric ile incele. Takıldığın kavramı chapter’ın
tamamını tekrar okuyarak değil, ilgili küçük bölüm ve yeni counterexample ile düzelt.

Mastery şu cümleyi rahatça savunabildiğinde başlar:

> “Bu field için şu type ve representation’ı seçtim; çünkü domain anlamı ve operations
> bunları gerektiriyor. Şu boundary’lerde dönüşümü reddediyorum, şu bilgiyi koruyorum ve
> şu testlerle precision/meaning loss olmadığını — ya da kabul edilen kaybı — gösteriyorum.”

Bu savunmayı yapabiliyorsan C06’da value’ların isimlere nasıl bağlandığını ve program
state’inin zaman içinde nasıl değiştiğini öğrenmeye hazırsın.

## Engineering Perspective

Veri türü seçimi küçük bir syntax tercihi gibi görünür; gerçekte sistem sınırlarını etkileyen
architecture kararıdır. Bir alanın türü API sözleşmesini, saklama biçimini, doğrulamayı,
analitiği, kullanıcı arayüzünü ve hata ayıklamayı etkiler.

### Tür bir business rule değildir

`age` alanının Number olması, değerin 0–130 arasında olduğunu garanti etmez. String olması
da e-posta formatını garanti etmez. Tür sözleşmesi olası hata sınıflarını azaltır fakat
domain invariant’larının yerini almaz.

### Boundary ownership

Ham veri sisteme girdiği sınırda doğrulanmalıdır. İç katmanlar mümkün olduğunca normalize
edilmiş, anlamı belirli değerlerle çalışmalıdır. Dönüşüm her yerde tekrarlanırsa kurallar
dağılır ve aynı girdi farklı yorumlanabilir.

### Geri döndürülebilirlik ve audit

Dönüşüm bire bir değilse ham veriyi saklamak hata araştırmasında kritiktir. `"00123"` bir
kez 123’e dönüştürüldükten sonra kaç sıfırın kaybolduğunu bilemezsin. Güvenlik ve gizlilik
politikası izin verdiği ölçüde raw input, normalized value, conversion version ve rejection
reason ayrı kaydedilebilir.

### Interoperability

Bir dilin desteklediği tür, aktarım biçiminin veya diğer dilin desteklediği tür olmayabilir.
BigInt–JSON sınırı ve JSON numeric precision bunun örneğidir. “Bizim makinede çalışıyor”
yerine producer–consumer kontratını test et.

### Performans ne zaman önemlidir?

Beginner seviyesinde type kararını mikro performans tahminiyle verme. Önce correctness,
meaning, readability ve interoperability gelir. Gerçek ölçüm performans sorununu
gösterdiğinde temsil değişikliği değerlendirilir; değişiklik yine kayıp ve uyumluluk
testlerinden geçer.

### Profesyonel inceleme soruları

- Alanın domain anlamı tek cümlede açık mı?
- Type hangi geçerli operations’ı mümkün kılıyor?
- Range ve precision belirtilmiş mi?
- Absence states ayrılmış mı?
- External representation nedir?
- Conversion full input’u mu tüketiyor?
- Lossy conversion reddediliyor mu, kaydediliyor mu?
- AI önerisinin dayandığı assumption doğrulandı mı?

## Real World Examples

### Örnek 1 — Posta kodu

`"06000"` Ankara posta kodudur. Number’a dönüştürmek aritmetik fayda sağlamaz ve leading
zero kaybettirir. Runtime type String, valid grammar beş digit, allowed operation equality/
format validation olabilir.

### Örnek 2 — Para

`19.99` ekranda basit görünür. Vergi, currency, rounding ve minimum unit bilinmeden yalnız
Number seçmek eksiktir. Bazı sistemler integer minor units, bazıları decimal type kullanır.
Karar bütün producer/consumer zincirinde tutarlı olmalıdır.

### Örnek 3 — Büyük sipariş kimliği

API `"9223372036854775807"` gönderiyor. Bu bir miktar değil kimlikse String olarak koru.
Number’a dönüşüm precision kaybettirebilir. BigInt teknik olarak tamsayıyı korusa da JSON,
database ve UI uyumluluğu ayrıca tasarlanmalıdır.

### Örnek 4 — Feature flag

Environment variable `FEATURE_X="false"` biçiminde gelir. `Boolean(process.env.FEATURE_X)`
boş olmayan String için true olur. Exact accepted tokens üzerinden parse et ve bilinmeyen
değeri reddet.

### Örnek 5 — Form yaşı

Tarayıcı formundan değer metin biçiminde gelebilir. `Number("")` sonucu 0 olduğu için empty
input önce kontrol edilmezse yeni doğan kullanıcı gibi yorumlanabilir. Required, grammar,
range ve converted result ayrı doğrulanır.

### Örnek 6 — CSV’de eksik veri

Boş hücre 0, empty text, unknown veya not-applicable olabilir. CSV formatı tek başına
anlamı söylemez. Import contract, missing token ve rejection policy belirlenmelidir.

### Örnek 7 — Unicode kullanıcı adı

Görünüşte aynı iki String farklı Unicode sequences içerebilir. Authentication veya unique
username tasarımında normalization ve spoofing ayrı security çalışması ister. C05’in
dersi, `.length` veya byte count’u “karakter sayısı” diye varsaymamaktır.

### Örnek 8 — Sensör ölçümü

`"23.4 C"` hem numeric magnitude hem unit taşır. `parseFloat` 23.4 döndürebilir ama unit’i
sessizce atar. Sözleşme önce yapı ve unit’i doğrulamalı, ardından magnitude’u dönüştürmelidir.

## Common Mistakes

### 1. Görünüşe göre tür seçmek

**Belirti:** Kimlik, telefon veya posta kodu Number olur.  
**Neden:** “Rakam içeriyorsa sayıdır” varsayımı.  
**Etkisi:** Format ve leading zero kaybı.  
**Düzeltme:** Aritmetik anlam ve domain identity sorularını cevapla.

### 2. `typeof null` sonucunu gerçek type modeli sanmak

**Belirti:** Null, object branch’ine girer.  
**Neden:** Tarihsel `"object"` sonucunun genellenmesi.  
**Düzeltme:** Önce `value === null`, sonra gereken object check.

### 3. `Boolean("false")` ile metin parse etmek

**Belirti:** “false” ayarı açılır.  
**Neden:** Conversion’ın word meaning okuyacağı sanılır.  
**Düzeltme:** Exact token map kullan; bilinmeyen token’ı reddet.

### 4. `parseInt` ile strict validation yapmak

**Belirti:** `"12px"` geçerli 12 olur.  
**Neden:** Prefix parser ile full-input parser ayrımının bilinmemesi.  
**Düzeltme:** Önce grammar doğrula veya tam girdiyi tüketen policy kullan.

### 5. `NaN` kontrolünü yanlış yapmak

**Belirti:** `value === NaN` her zaman false olur.  
**Düzeltme:** Belirli sonucu `Number.isNaN(value)` ile kontrol et.

### 6. Explicit conversion’ı güvenli sanmak

**Belirti:** `Number(raw)` görüldüğü için review tamam kabul edilir.  
**Neden:** Intent visibility ile correctness karıştırılır.  
**Düzeltme:** Pre-validation, post-validation ve loss policy ekle.

### 7. Yokluk durumlarını birleştirmek

**Belirti:** `0`, `false`, `""`, `null`, `undefined` aynı fallback’e gider.  
**Etkisi:** Geçerli değer veya süreç durumu kaybolur.  
**Düzeltme:** Her alan için explicit absence semantics yaz.

### 8. Floating-point sonucu eşitlikle test etmek

**Belirti:** Hesap doğru olduğu hâlde `0.1 + 0.2 === 0.3` başarısızdır.  
**Düzeltme:** Domain toleransı veya uygun exact representation tasarla.

### 9. JavaScript davranışını bütün dillere genellemek

**Belirti:** “Bütün dillerde integer ve float aynı Number’dır” denir.  
**Düzeltme:** Technology-neutral kavram ile reference language davranışını ayır.

### 10. AI’nin type inference’ını requirement sanmak

**Belirti:** AI örnek veriden `age`, `id`, `price` türü seçer; undocumented assumption
production contract olur.  
**Düzeltme:** Missing questions, counterexamples ve authority links iste; kararı owner verir.

## Best Practices

1. Önce domain anlamını yaz; sonra type seç.
2. Her önemli alan için data dictionary oluştur.
3. Identifier ile quantity’yi ayır.
4. Boundary’de raw input’u doğrula ve gerektiğinde koru.
5. Conversion’ı explicit yap; source/target contract’ı belgeye ekle.
6. Full-input validation ile prefix parsing’i bilinçli seç.
7. Number sonucunda finite, integer, safe integer ve range kontrollerinden gerekenleri yap.
8. Empty, missing, unknown, not-applicable ve false durumlarını ayrı değerlendir.
9. Representation değiştiren her adımda round-trip ve loss analizi yap.
10. Normal, boundary, invalid, ambiguous ve adversarial inputs test et.
11. Cross-system numeric ve text compatibility’yi yalnız local runtime ile doğrulama.
12. AI önerisini resmî source, executable example ve counterexample ile denetle.

## Hands-on Exercise

Bir etkinlik kayıt sisteminde şu ham değerler var:

```text
participantId = "000742"
age = "18"
ticketPrice = "349.90"
isStudent = "false"
seat = "A07"
companionCount = "0"
emergencyPhone = "+90 0500 000 00 00"
middleName = ""
externalOrderId = "9007199254740993"
checkInTime = null
temperature = "21.5 C"
note = "🙂"
```

### Teslimler

1. On iki değeri domain meaning, source type, target type, representation ve valid
   operations’a göre sınıflandır.
2. Her alan için absence policy yaz.
3. Dönüştürülecek alanlar için source grammar, target range ve failure behavior tanımla.
4. En az iki precision loss ve üç meaning loss riski bul; yoksa neden yok yaz.
5. İki normal, iki boundary, iki invalid ve iki ambiguous input üret.
6. AI’den üç alternatif type önerisi al; her birini kendi contract’ınla denetle.
7. Sonunda beş cümlelik engineering decision yaz.

### Öz değerlendirme ölçütü

- En az 10/12 classification gerekçeli doğru.
- ID ve phone Number’a çevrilmiyor veya güçlü requirement ile savunuluyor.
- `"false"` truthiness ile parse edilmiyor.
- Safe integer riskine açıkça değiniliyor.
- Empty String ve null kararı belgeleniyor.
- Her dönüşümde accept/reject davranışı gözlemlenebilir.

## Reflection Questions

1. Daha önce “rakam içeriyor” diye Number seçtiğin hangi alanı şimdi farklı modelliyorsun?
2. Value, literal ve representation ayrımlarından hangisi ilk başta en zordu?
3. `Boolean("false")` örneği hangi gizli varsayımını bozdu?
4. Precision loss ile meaning loss arasındaki farkı kendi örneğinle açıklayabilir misin?
5. Hangi absence states senin projen için gerçekten ayrılmalı?
6. AI önerisini kabul etmeden önce bundan sonra hangi üç kanıtı isteyeceksin?
7. Bir hafta sonra bu chapter’ı hatırladığını hangi küçük artefact ile göstereceksin?

## Chapter Summary

Programlar temsil edilmiş bilgi parçaları olan değerlerle çalışır. Bir veri türü, değer
kümesini ve geçerli operations/kısıtları belirler. Literal kaynak kod yazımıdır; value’nun
kendisi değildir. Representation ise değerin saklanma, iletilme veya yorumlanma biçimidir.

JavaScript yedi primitive tür tanımlar. Bu chapter Number, String, Boolean, undefined ve
null üzerinde yoğunlaşır; BigInt ve Symbol sınırlarını tanıtır. Number binary64 davranışına
dayandığı için bütün decimal fractions ve integers tam değildir. Safe integer sınırı büyük
ID’ler için kritiktir. String metni taşır ancak code unit ile görünür character aynı şey
olmayabilir. Boolean yalnız true/false’tur; `"false"` bir String’dir. Empty, zero, false,
null ve undefined farklı değerlerdir.

Type conversion, source ve target contract gerektirir. Explicit conversion güvenli olmakla
eş anlamlı değildir. `Number("")`, `Boolean("false")` ve `parseInt("12px", 10)` bunun
counterexample’larıdır. Güvenli süreç raw input’u korur, format ve meaning doğrular,
conversion uygular, result range/precision’ı kontrol eder ve accept/reject kararını kaydeder.

En güçlü araç data dictionary’dir. Her field için meaning, source representation, runtime
type, valid/invalid examples, operations, absence, conversion ve loss policy yazılır. Bu
sözleşme sonraki variable, expression ve I/O chapter’larının temelidir.

## Key Takeaways

- Type seçimi görünüşe değil domain meaning’e dayanır.
- `42` ile `"42"` farklı value/type domain’lerindedir.
- Literal, value ve representation aynı değildir.
- Runtime type business validity garantilemez.
- JavaScript Number sınırlı precision’a sahiptir.
- Identifier genellikle quantity değildir.
- `Boolean("false")` true’dur; token’ı explicit parse et.
- `null`, `undefined`, `""`, `0` ve `false` aynı state değildir.
- Conversion’dan önce ve sonra validation gerekir.
- Lossy conversion’da accept/reject/preserve policy açık olmalıdır.
- Data dictionary, kod öncesi önemli engineering artefact’tır.
- AI type önerir; requirement ve doğruluk sorumluluğunu devralmaz.

## Further Reading

- ECMA-262’nin Terms and Definitions, ECMAScript Data Types and Values ve Type Conversion
  bölümlerini önce kavram haritasıyla oku.
- MDN Data Types sayfasında primitive tür listesini ve `typeof null` notunu incele.
- IEEE 754-2019 özetinden binary/decimal floating-point kapsamını karşılaştır.
- Unicode Standard Chapter 2–3 ile code point ve encoding form ayrımını öğren.
- RFC 8259’un Values, Numbers ve Strings bölümlerini JavaScript runtime ile karşılaştır.
- WHATWG form control value tanımını boundary validation açısından değerlendir.

## References

- ECMA International. [ECMAScript 2025 Language Specification](https://tc39.es/ecma262/2025/).
- IEEE Standards Association. [IEEE 754-2019](https://standards.ieee.org/ieee/754/6210/).
- Unicode Consortium. [The Unicode Standard 16.0](https://www.unicode.org/versions/Unicode16.0.0/).
- Unicode Consortium. [UAX #15: Unicode Normalization Forms](https://unicode.org/reports/tr15/).
- IETF. [RFC 8259: The JavaScript Object Notation](https://www.rfc-editor.org/rfc/rfc8259).
- WHATWG. [HTML Living Standard: Form Control Infrastructure](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html).
- MDN Web Docs. [JavaScript data types and data structures](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures).
- MDN Web Docs. [Grammar and types](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Grammar_and_types).
- MDN Web Docs. [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number).
- MDN Web Docs. [Number.isSafeInteger()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).
- MDN Web Docs. [BigInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- MDN Web Docs. [Number()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/Number).
- MDN Web Docs. [parseInt()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt).
- MDN Web Docs. [Number.isNaN()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN).
- MDN Web Docs. [typeof](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof).
- ACM/IEEE-CS/AAAI. [Computer Science Curricula 2023](https://csed.acm.org/).
