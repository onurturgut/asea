---
document_type: "chapter"
chapter_id: "V01-C31"
volume_id: "V01"
title: "Diziler ve Koleksiyon Hatları"
slug: "diziler-ve-koleksiyon-hatlari"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "14-18 saat"
prerequisites:
  - "V01-C17"
  - "V01-C30"
  - "V01-C32"
learning_outcomes:
  - "V01-LO051"
  - "V01-LO052"
related_lab_ids:
  - "V01-C31-L01"
related_assessment_ids:
  - "V01-C31-AS01"
next_chapter_id: "V01-C32"
blueprint_id: "V01-C31-BP01"
last_updated: "2026-08-01"
---

# Diziler ve Koleksiyon Hatları

## Learning Objectives

Ada'nın elinde artık C30'da doğruladığı tek bir öğrenci kaydı değil, yüzlerce kayıt
vardır. Dashboard şu soruları aynı veri üzerinden cevaplamalıdır: Aktif öğrenciler
kimler? İlerlemesi yüzde 75'i geçenler hangileri? Toplam kaç chapter tamamlandı?

Ada her soruya ayrı bir döngü yazabilir. Fakat değişkenler çoğaldıkça hangi döngünün
neyi seçtiği, neyi değiştirdiği ve hangi output'u ürettiği belirsizleşir. Bu chapter'da
bir koleksiyon işlemini okunabilir bir veri hattına dönüştüreceğiz.

Bu chapter sonunda:

- array'in sıralı bir collection ve identity taşıyan bir object olduğunu açıklayacak,
- `find`, `some`, `every`, `filter`, `map` ve `reduce` yöntemlerinin sorularını ve
  output sözleşmelerini ayıracak,
- her pipeline aşamasında element type, cardinality ve state değişimini izleyecek,
- geçerli öğrenci object'lerinden dashboard çıktısı üreten bir pipeline
  uygulayacaksınız (`V01-LO051`),
- mutating ve non-mutating yöntemi ownership, aliasing, history, okunabilirlik ve
  maliyet üzerinden değerlendireceksiniz (`V01-LO052`),
- array kopyası ile element object kopyasının aynı şey olmadığını kanıtlayacaksınız.

## Prerequisites

C17'de koleksiyon üzerinde sırayla dolaştınız. C30'da object identity, aliasing ve
shallow copy'yi izlediniz. C32'de bir fonksiyonun başka bir fonksiyona callback olarak
verilmesini ve callback'in value/index/collection bilgileriyle çağrılmasını öğrendiniz.

Çalıştırmadan önce tahmin edin:

```js
const students = [
  { name: "Ada", active: true },
  { name: "Mert", active: false },
];

const activeStudents = students.filter((student) => student.active);
activeStudents[0].name = "Ada Yılmaz";

console.log(students[0].name);
console.log(activeStudents === students);
console.log(activeStudents[0] === students[0]);
```

Üç sonuç sırasıyla `"Ada Yılmaz"`, `false`, `true` olur. `filter` yeni bir array
üretir; seçtiği object element'leri deep-copy etmez. C30'un identity modeli şimdi
array ve element olmak üzere iki katmanda çalışacaktır.

> Öğrenme kapısı: C31 sayısal üretim sırasıyla hazırlanmıştır. Öğrenci akışında C17,
> C30 ve C32 kanıtları tamamlanmadan açılmamalıdır.

## Estimated Study Time

14–18 saat planlayın. Array zihinsel modeli ve sorgular 3 saat, map/filter/reduce
hatları 5 saat, mutation karşılaştırmaları 3 saat, uygulamalar 3 saat, lab ve ölçme
3–4 saat sürer. Her uzun zinciri önce ayrı ara değişkenlerle çalışın; ancak davranışı
kanıtladıktan sonra kısaltmayı değerlendirin.

## Introduction

Bir array yalnız “birden fazla değer tutan kutu” değildir. JavaScript'te array,
sayısal index property'lerine özel davranan bir object'tir. `length`, mevcut
element sayısını her durumda sayan bir sayaç gibi düşünülmemelidir; en büyük array
index'iyle ilişkili özel bir property'dir. Düzenli ve boşluksuz array'lerde beklediğimiz
element sayısıyla örtüşür.

```js
const chapterIds = ["V01-C29", "V01-C30", "V01-C31"];

console.log(chapterIds[0]); // V01-C29
console.log(chapterIds.length); // 3
console.log(Array.isArray(chapterIds)); // true
```

Index sıfırdan başlar. İlk element `0`, son düzenli element `length - 1` index'indedir.
`Array.isArray` runtime value'nun gerçekten array olup olmadığını sorar; `typeof`
array için `"object"` verir ve tek başına yeterli değildir.

Empty array, hata değil geçerli bir koleksiyon state'idir:

```js
const completedChapters = [];
console.log(completedChapters.length); // 0
```

Profesyonel kod “mutlaka element vardır” varsayımını sözleşmesiz yapmaz. No-match,
empty input ve tek elementli input her pipeline'ın normal sınır testleridir.

## Core Concepts

### Önce soruyu adlandır

Array yöntemi seçmeden önce output sorusunu söyleyin:

| İhtiyaç | Yöntem | Output biçimi |
| --- | --- | --- |
| Bir value koleksiyonda var mı? | `includes` | boolean |
| Koşula uyan ilk element hangisi? | `find` | element veya `undefined` |
| En az bir element uyuyor mu? | `some` | boolean |
| Bütün elementler uyuyor mu? | `every` | boolean |
| Uyan elementlerin tamamı hangileri? | `filter` | yeni array |
| Her elementi başka bir değere dönüştür | `map` | yeni, aynı uzunlukta array |
| Koleksiyonu tek sonuca birleştir | `reduce` | accumulator'ın type'ında değer |

Bir yöntemi “kısa olduğu” için değil, sorduğunuz sorunun output sözleşmesine uyduğu
için seçersiniz.

### Running model: C30'dan gelen geçerli kayıtlar

```js
const students = [
  {
    studentId: "ST-001",
    displayName: "Ada",
    active: true,
    progress: { completedChapters: 31, totalChapters: 38 },
  },
  {
    studentId: "ST-002",
    displayName: "Mert",
    active: false,
    progress: { completedChapters: 12, totalChapters: 38 },
  },
  {
    studentId: "ST-003",
    displayName: "Zeynep",
    active: true,
    progress: { completedChapters: 29, totalChapters: 38 },
  },
];
```

Array'in kendisi `A1` kimliğidir; elementler `O1`, `O2`, `O3` object'leridir.
`students[0]` okumak `O1` object value'suna ulaşır. Bu iki kimlik katmanını ayrı
tutmak, “yeni array üretildi, demek ki her şey bağımsız” hatasını önler.

### Baseline: `for...of` ile açık dolaşma

Önce gizli sihir olmadığını görelim:

```js
const activeNames = [];

for (const student of students) {
  if (student.active) {
    activeNames.push(student.displayName);
  }
}

console.log(activeNames); // ["Ada", "Zeynep"]
```

`activeNames` yeni bir array'dir. Döngü her student için condition'ı değerlendirir;
true olduğunda string adı output'a ekler. Bu doğru bir çözümdür. Pipeline yöntemleri
aynı niyeti “seç, sonra dönüştür” aşamalarıyla daha görünür hâle getirebilir.

### `find`, `some` ve `every`: üç farklı soru

```js
const ada = students.find((student) => student.studentId === "ST-001");
const hasInactive = students.some((student) => !student.active);
const allHaveProgress = students.every(
  (student) => student.progress.totalChapters > 0,
);
```

`find` ilk eşleşen element object'ini döndürür; eşleşme yoksa `undefined` verir.
Dönen object source array'deki object ile aynı identity'dir. `some`, ilk true
sonuçta; `every`, ilk false sonuçta durabilir. Buna short-circuit davranışı denir.

#### Tahmin et

Empty array için `[].some(predicate)` false, `[].every(predicate)` true döner.
İlk sonuç “en az bir eşleşme yok” demektir. İkinci sonuçta kuralı bozan hiçbir element
yoktur. Bu sonuç sizi şaşırtıyorsa empty collection testini özellikle yazın.

### `filter`: element seçmek

```js
const active = students.filter((student) => student.active);
```

Callback her mevcut element için boolean bağlamında değerlendirilen bir değer döndürür.
True olan element yeni output array'ine alınır. Source array'in uzunluğu ve sırası
değişmez. Output cardinality sıfır ile input length arasında olabilir.

| Aşama | Element type | Cardinality | Root identity |
| --- | --- | --- | --- |
| `students` | StudentProgress | 3 | `A1` |
| `active` | StudentProgress | 2 | `A2` |

Element type değişmedi; seçilen `O1` ve `O3` object'leri paylaşıldı.

### `map`: her elementi dönüştürmek

Dashboard tüm domain object'ini değil, küçük bir view model ister:

```js
const cards = active.map((student) => ({
  studentId: student.studentId,
  label: student.displayName,
  completionRate:
    student.progress.completedChapters / student.progress.totalChapters,
}));
```

`map`, her input elementi için tam bir output değeri üretir. Output array'in length'i
input length ile aynıdır; element type `StudentProgress`tan `DashboardCard` object'ine
dönüşür. Callback içindeki object literal her çağrıda yeni object üretir, dolayısıyla
kartlar source student object'leriyle aynı identity değildir.

`map` callback'inde `student.displayName = ...` gibi mutation yapmak mümkündür ama
niyeti bulanıklaştırır. Dönüştürme hattı source state'i değiştirmeyecekse callback
yalnız output üretmelidir.

### `reduce`: birçok değerden bir sonuç üretmek

```js
const totalCompleted = active.reduce(
  (sum, student) => sum + student.progress.completedChapters,
  0,
);
```

Buradaki `sum`, **accumulator (biriktirici)**dir. Initial value `0`, accumulator'ın
başlangıç state'ini ve number type'ını açıklar.

| Çağrı | Önceki `sum` | Student değeri | Yeni `sum` |
| --- | ---: | ---: | ---: |
| Başlangıç | `0` | — | `0` |
| 1 | `0` | Ada: `31` | `31` |
| 2 | `31` | Zeynep: `29` | `60` |

Initial value vermeden empty array üzerinde `reduce` TypeError üretir. Initial value
vermek yalnız hatadan kaçınmak değil, output type ve empty-input anlamını tasarlamaktır.
Toplam için identity `0`, çarpım için `1` olabilir; her domain'de nötr değer aynı
değildir.

### Birlikte yapalım: pipeline'ı aşamalı kurmak

Hedefimiz aktif öğrencilerin tamamlanma oranlarını üretmek ve ortalamayı bulmak olsun.
Önce ara adlarla yazalım:

```js
const activeStudents = students.filter((student) => student.active);

const completionRates = activeStudents.map(
  (student) =>
    student.progress.completedChapters / student.progress.totalChapters,
);

const rateSum = completionRates.reduce((sum, rate) => sum + rate, 0);

const averageRate =
  completionRates.length === 0 ? null : rateSum / completionRates.length;
```

Neden `null`? Aktif öğrenci yoksa ortalama `0` değildir; “ölçülecek gözlem yok”tur.
Bu bir domain kararıdır. C34'te sayısal precision ve gösterim ayrıntılarına döneceğiz.

| Aşama | Input → output element type | Uzunluk |
| --- | --- | ---: |
| source | StudentProgress | 3 |
| filter | StudentProgress → StudentProgress | 2 |
| map | StudentProgress → number | 2 |
| reduce | number[] → number | 1 sonuç |

Ara adlar debugger'da her state'i gözlemlemeyi ve yanlış aşamayı bulmayı kolaylaştırır.
Tek zincir de mümkündür, fakat okunabilirlik kanıtlanmadan kısaltma yapmayın.

### Mutation envanteri

Array yöntemleri aynı davranmaz:

| Mutating yöntem | Source üzerindeki temel etki | Non-mutating yönelim |
| --- | --- | --- |
| `push`, `pop` | Sona ekler/sondan çıkarır | spread, `slice` |
| `splice` | Aralık siler/ekler | `toSpliced` |
| `sort` | Element sırasını yerinde değiştirir | `toSorted` |
| `reverse` | Sırayı yerinde ters çevirir | `toReversed` |
| `fill` | Aralıktaki değerleri yerinde yazar | `map` veya yeni üretim |

```js
const names = ["Zeynep", "Ada", "Mert"];
const alias = names;
names.sort();

console.log(alias); // ["Ada", "Mert", "Zeynep"]
```

`sort` yeni array üretmedi; `names` ve `alias` aynı `A1` identity'sini görür.

```js
const names = ["Zeynep", "Ada", "Mert"];
const sortedNames = names.toSorted();

console.log(names); // original order
console.log(sortedNames); // sorted order
```

`toSorted` yeni array üretir. Ancak elementler object olsaydı object identity'leri
paylaşılmaya devam ederdi.

### Array kopyası element kopyası değildir

```js
const copy = [...students];

console.log(copy === students); // false
console.log(copy[0] === students[0]); // true
```

C30'daki shallow-copy kuralı array için de geçerlidir. Bir elementi güvenli güncellemek
için yeni array ve değişen element object'i üretin:

```js
const updatedStudents = students.map((student) =>
  student.studentId === "ST-001"
    ? {
        ...student,
        progress: {
          ...student.progress,
          completedChapters: student.progress.completedChapters + 1,
        },
      }
    : student,
);
```

Yeni array oluşur. Eşleşen student ve progress için yeni identity üretilir. Değişmeyen
student object'leri bilinçli olarak paylaşılır. Bu paylaşım, kodun onları mutate
etmeyeceği sözleşmesiyle güvenlidir.

## Engineering Perspective

Mutating yöntem kullanmak otomatik olarak amatörlük, non-mutating yöntem kullanmak
otomatik olarak profesyonellik değildir. Karar state sahipliğine dayanır.

Yerel bir fonksiyon yeni ürettiği ve dışarıya henüz paylaşmadığı array'i performans
ve sadelik için mutate edebilir. Buna karşılık UI state'i, cache, function input'u,
audit snapshot'ı veya birden fazla tüketicinin paylaştığı array üzerinde gizli
mutation yüksek risklidir.

Karar kaydında şu soruları cevaplayın:

- Source array'in sahibi kim?
- Başka kod aynı identity'yi saklıyor olabilir mi?
- Eski sıra veya state sonradan gerekli mi?
- Yöntem adı source'u değiştirdiğini açık ediyor mu?
- Yeni array allocation maliyeti ölçülmüş bir problem mi?
- Elementler object ise onların identity politikası nedir?

Pipeline uzunluğu da mühendislik kararıdır. On farklı yöntemi tek zincire dizmek kodu
kısaltabilir fakat veri shape'ini gizleyebilir. İş anlamı taşıyan ara adlar, type ve
cardinality değişimini belgeleyen küçük duraklardır. Profiler kanıtı olmadan zinciri
“daha hızlı” veya “daha yavaş” ilan etmeyin.

`reduce` her probleme uygulanabilse de her problem için en açık araç değildir. “Bir
eşleşme var mı?” sorusunda `some`, “ilk kayıt hangisi?” sorusunda `find`, çok amaçlı
bir reducer'dan daha iyi niyet bildirir.

## Real World Examples

### Dashboard görünüm modeli

Domain object'leri `filter` ile seçilir, `map` ile UI kartlarına dönüştürülür. UI,
gereksiz domain property'lerine bağlanmaz.

### Yetki kontrolü

`roles.includes("admin")`, sabit primitive value arar. Koşullu object aramasında
`some((role) => role.name === "admin")` kullanılır.

### Form doğrulama

`every` bütün alanların geçerli olup olmadığını, `some` en az bir hata olup olmadığını
ifade eder. Empty form için beklenen davranış domain sözleşmesinde ayrıca belirlenir.

### Raporlama

`filter` rapor dönemini seçer, `map` ölçülecek sayıyı çıkarır, `reduce` toplamı üretir.
C34 bu sayıların precision ve rounding kararlarını derinleştirecektir.

### ASEA P07

C30'un geçerli StudentProgress object'leri C31'de dashboard summary pipeline'ına
girer. C21 arama yaklaşımını, C22 sıralama davranışını bu güvenilir collection modeli
üzerinde inceleyecektir.

## Common Mistakes

### Hata avı 1: `map` callback'inde değer döndürmemek

```js
const names = students.map((student) => {
  student.displayName;
});
```

Süslü parantezli function body açık `return` ister. Output, `undefined` elementlerinden
oluşur. Düzeltme `return student.displayName` veya expression body kullanmaktır.

### Hata avı 2: `filter` ile object üretmeye çalışmak

`filter` callback output'unu yeni element olarak kullanmaz; yalnız mevcut elementin
kalıp kalmayacağına karar verir. Shape değişikliği `map` sorusudur.

### Hata avı 3: `sort` source'u koruyor sanmak

`const sorted = students.sort(...)` hem `sorted` hem `students` için aynı array
identity'sini verir. Source korunacaksa `toSorted` veya önce bilinçli kopya kullanın.

### Hata avı 4: yeni array'i deep copy sanmak

`filter`, `map` içinde doğrudan element döndürme ve spread array kopyası object
element'leri paylaşabilir. Root ve element identity'lerini ayrı test edin.

### Hata avı 5: `reduce` initial value'yu atlamak

Empty array TypeError üretir; ilk elementin accumulator olması type sözleşmesini de
değiştirebilir. Başlangıç state'ini açık yazın.

### Hata avı 6: `find` sonucunu kesin element sanmak

No-match sonucu `undefined`dır. Property okumadan önce sonucu kontrol edin veya
no-match için açık hata/alternatif politika belirleyin.

## Best Practices

1. Önce soruyu ve beklenen output shape'ini yazın, sonra yöntemi seçin.
2. Her aşama için element type ve cardinality değişimini belirtin.
3. Callback'i tek ve açık bir soruya odaklayın.
4. `reduce` kullanırken initial accumulator ve empty-input anlamını açıklayın.
5. Source array ile output array identity'sini test edin.
6. Object elementlerde ayrıca element identity'sini test edin.
7. Paylaşılan input üzerinde mutating yöntem kullanacaksanız sözleşmede görünür kılın.
8. Uzun pipeline'ı iş anlamı taşıyan ara adlara bölün.
9. No-match ve empty array'i istisna değil normal sınır state'i olarak test edin.

## Hands-on Exercise

### Şimdi sen dene

`attempts` array'i `studentId`, `score` ve `status` object'lerinden oluşsun.

1. Yalnız `"completed"` denemeleri seçin.
2. Her birini `{ studentId, score }` view modeline dönüştürün.
3. Score toplamını initial value ile hesaplayın.
4. Hiç tamamlanmış deneme yoksa average için `null` döndürün.
5. Source array ve element object'lerin değişmediğini kanıtlayın.

#### Kademeli ipuçları

1. Seçim sorusu `filter`, shape değiştirme sorusu `map`tir.
2. Toplam accumulator'ı number `0` ile başlar.
3. Ortalama için bölmeden önce selected length'i kontrol edin.
4. Root identity ve property snapshot testlerini ayrı yazın.

### Bağımsız uygulama

Aynı öğrenci listesini ada göre sıralayan iki sürüm yazın: biri local/private array'i
mutate etsin, diğeri shared input'u korusun. Her sürüm için ownership varsayımı,
identity sonucu ve kullanım bağlamını açıklayan kısa karar kaydı üretin.

### Gerçek proje bağlantısı

`V01-P07` için `buildProgressSummary(students)` geliştirin. Active count, completed
chapter total, average completion rate ve yüksek ilerlemeli öğrenci kartlarını
döndürsün. Source mutation yapmasın ve empty input'u açıkça yönetsin.

## Reflection Questions

1. `filter` yeni array üretirken neden element mutation'ını önlemez?
2. `find`, `some` ve `filter` aynı predicate ile hangi farklı output'ları üretir?
3. `map` sonrası cardinality neden korunur, element type neden değişebilir?
4. Empty array için average neden otomatik olarak `0` kabul edilmemelidir?
5. `sort` hangi alias'ları etkileyebilir?
6. Seçici immutable update'te neden bütün elementler kopyalanmaz?
7. Hangi durumda yerel mutation savunulabilir?
8. Ara değişkenler pipeline hata ayıklamasını nasıl kolaylaştırır?

## Chapter Summary

Array, sıralı index property'leri ve özel `length` davranışı olan identity-bearing
bir object'tir. Collection yöntemi seçimi sözdiziminden önce output sorusuna dayanır:
`find` element, `some/every` boolean, `filter/map` yeni array, `reduce` birleştirilmiş
sonuç üretir.

Pipeline yalnız zincir değildir. Her aşamada input/output element type'ı, cardinality,
identity ve mutation etkisi izlenir. Yeni array üretmek nested object elementlerini
otomatik olarak bağımsızlaştırmaz. Mutating/non-mutating seçimi; ownership, paylaşım,
geçmiş state, okunabilirlik ve ölçülmüş maliyet üzerinden savunulur.

## Key Takeaways

- Array ve içindeki object elementler ayrı identity katmanlarıdır.
- Yöntem, cevaplaması gereken soruya göre seçilir.
- `filter` seçer, `map` dönüştürür, `reduce` birleştirir.
- `find` no-match durumunda `undefined` döndürür.
- `reduce` initial value, empty-input ve output type sözleşmesidir.
- `sort`, `reverse`, `splice` gibi yöntemler source'u mutate eder.
- `toSorted`, `toReversed`, `toSpliced` yeni array üretir ama elementleri deep-copy etmez.
- Profesyonel pipeline type, cardinality, identity ve state kanıtı taşır.

## Further Reading

- C17: koleksiyon dolaşması ve iteration temeli
- C30: object identity, aliasing ve selective update
- C32: callback control-flow ve higher-order function sözleşmesi
- C22: sıralama algoritmaları ve mutation/stability analizi
- C34: sayısal toplama, precision ve rounding güvenilirliği
- C21: doğrusal ve ikili arama seçimi

## References

- ECMA-262, Array Exotic Objects
- ECMA-262, Indexed Collections
- ECMA-262, `Array.prototype.find`, `some` ve `every`
- ECMA-262, `Array.prototype.filter`, `map` ve `reduce`
- ECMA-262, `sort`, `toSorted`, `toReversed` ve `toSpliced`
- ASEA `V01-C31-BP01`, `V01-LO051` ve `V01-LO052`
