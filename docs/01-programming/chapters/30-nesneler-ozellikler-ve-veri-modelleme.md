---
document_type: "chapter"
chapter_id: "V01-C30"
volume_id: "V01"
title: "Nesneler, Özellikler ve Veri Modelleme"
slug: "nesneler-ozellikler-ve-veri-modelleme"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "12-15 saat"
prerequisites:
  - "V01-C18"
  - "V01-C29"
  - "V01-C33"
learning_outcomes:
  - "V01-LO049"
  - "V01-LO050"
related_lab_ids:
  - "V01-C30-L01"
related_assessment_ids:
  - "V01-C30-AS01"
next_chapter_id: "V01-C31"
blueprint_id: "V01-C30-BP01"
last_updated: "2026-08-01"
---

# Nesneler, Özellikler ve Veri Modelleme

## Learning Objectives

Ada, ASEA'daki ilerleme ekranını geliştirmektedir. Ders ekranına verdiği öğrenci
bilgisinin bir “anlık görüntü” olduğunu düşünür. Fakat ekran için hazırladığı kopyada
tamamlanan chapter sayısını artırınca asıl kayıt da değişir. Kod hata vermemiştir;
yanlış olan Ada'nın zihinsel modelidir.

Bu chapter sonunda:

- bir gereksinimi JavaScript object modeline dönüştürecek ve geçerli durum
  kurallarını savunacaksınız (`V01-LO049`),
- object identity, property access, mutation, copying ve aliasing ilişkilerini
  bağ–referans–nesne–özellik iziyle çözümleyeceksiniz (`V01-LO050`),
- dot ve bracket notation arasında bilinçli seçim yapacak,
- bulunmayan property ile değeri `undefined` olan property'yi ayıracak,
- `const` binding ile değişebilir object state arasındaki farkı açıklayacak,
- spread ve `Object.assign` işlemlerinin neden shallow copy ürettiğini gösterecek,
- iç içe bir modeli seçici kopyalama ile güvenli biçimde güncelleyeceksiniz.

Hedef, object sözdizimini ezberlemek değildir. Kod çalışmadan önce hangi bağların
aynı nesneyi gördüğünü ve bir değişikliğin nerelerde gözleneceğini tahmin etmektir.

## Prerequisites

C18'de bir kaydı alanları ve invariant'larıyla modellediniz. C29'da dışarıdan gelen
ham değeri canonical type'a dönüştürdünüz. C33'te state'in nerede yaşadığını ve hangi
kodun o state'e erişebildiğini incelediniz. C30 bu üç hattı birleştirir.

Çalıştırmadan önce tahmin edin:

```js
const first = { completed: 30 };
const second = first;
second.completed = 31;

console.log(first.completed);
console.log(first === second);
```

İlk satır `30` mu, `31` mi yazar? İkinci satır neden yalnızca alan değerlerini değil,
nesne kimliğini karşılaştırır? Cevabınızdan emin değilseniz sorun yok; chapter'ın
merkezindeki soru tam olarak budur.

> Öğrenme kapısı: C30 üretim sırasıyla hazırlanmıştır; öğrenci akışında C18, C29 ve
> C33 tamamlanmadan açılmamalıdır.

## Estimated Study Time

Bu chapter için 12–15 saat ayırın: anlatım ve elle izleme 4 saat, kısa uygulamalar
3 saat, hata avı 2 saat, lab 3 saat, quiz ve öz değerlendirme 1–3 saat. İki oturuma
bölüyorsanız ilk oturumda kimlik ve mutasyonu, ikincide kopyalama ve model tasarımını
çalışın. Her kod bloğundan önce tahmininizi yazın.

## Introduction

Bir öğrencinin adı, kimliği ve ilerlemesi birbirinden kopuk değişkenler olarak
tutulabilir. Fakat bu değerler birlikte aynı öğrenciyi anlatır. JavaScript'teki
**nesne (object)**, ilişkili bilgileri adlandırılmış özellikler altında bir arada
tutmamızı sağlar.

```js
const student = {
  studentId: "ST-001",
  displayName: "Ada",
  progress: {
    completedChapters: 30,
    totalChapters: 38,
  },
};
```

Bu kod yalnızca düzenli görünen bir veri kutusu değildir. Çalışma zamanında kendi
kimliği olan bir object üretir. `student` adı object'in kendisi değildir; o object'e
ulaşmamızı sağlayan bir **bağdır (binding)**. Açıklamalarımızda kolaylık için buna
“referans” diyeceğiz. Bu kavramsal bir modeldir; motorun gerçek bellek adresini
gördüğümüzü iddia etmeyiz.

Hikâyemizde ASEA API'sinden gelen kayıt C29'daki sınırda doğrulanmış olsun. Bu yüzden
`completedChapters` artık `"30"` değil, canonical `number` değeridir. İç model ham
veriyi sürekli yeniden yorumlamaz.

### İlk anlama kontrolü

`student` değişkeninin adı `learner` yapılırsa öğrencinin kimliği değişir mi? Hayır.
Binding'in adı değişir; temsil edilen object'in property'leri ve domain anlamı aynı
kalabilir. Kod adı ile gerçek dünya kimliğini ayırmak veri modellemenin ilk adımıdır.

## Core Concepts

### Problemi modele çevirmek

Önce object literal yazıp sonra anlam aramayız. Gereksinimden başlarız:

> Her ilerleme kaydı boş olmayan bir öğrenci kimliği ve görünen ad taşımalı.
> Tamamlanan chapter sayısı sıfırdan küçük, toplam chapter sayısından büyük olamaz.

Buradan üç karar çıkarırız: property adları, canonical type'lar ve invariant'lar.

| Property yolu | Anlam | Canonical type | Kural |
| --- | --- | --- | --- |
| `studentId` | Kalıcı öğrenci kimliği | string | Boş olamaz |
| `displayName` | Arayüzde görünen ad | string | Boş olamaz |
| `progress.completedChapters` | Tamamlanan sayı | number/integer | `0 <= değer <= toplam` |
| `progress.totalChapters` | Akademideki toplam | number/integer | `değer > 0` |

**Object literal**, süslü parantez içinde yeni bir object üretmenin sözdizimidir.
Soldaki adlar **property key**, sağdaki ifadelerin sonuçları property value olur.
Her literal değerlendirmesi yeni bir kimlik üretir:

```js
const a = { completed: 30 };
const b = { completed: 30 };

console.log(a === b); // false
```

İçerikleri aynı görünse de `a` ve `b` farklı object'lere bağlanır. Object'lerde
`===`, alanları tek tek karşılaştıran “aynı içerik” testi değil, aynı object value'yu
görüp görmediğimizin kimlik testidir.

### Property erişimi: nokta mı, köşeli parantez mi?

Property'ye iki temel yolla ulaşırız:

```js
console.log(student.displayName);
console.log(student["displayName"]);
```

İkisi de burada `"Ada"` üretir. Dot notation, key kodu yazarken belliyse daha açık
okunur. Bracket notation, key başka bir değerden geliyorsa gereklidir:

```js
const selectedField = "displayName";
console.log(student[selectedField]);
```

`student.selectedField` yazsaydık JavaScript değişkenin içindeki `"displayName"`
değerini değil, kelimenin kendisini key kabul ederdi.

#### Tahmin et

```js
const field = "studentId";
console.log(student.field);
console.log(student[field]);
```

İlk erişim `field` adlı property arar ve bu modelde `undefined` döndürür. İkincisi
`field` binding'indeki değeri hesaplar, sonra `studentId` property'sini bulur.

### Bulunmayan property ile `undefined` değeri aynı soru değildir

```js
const profile = {
  nickname: undefined,
};

console.log(profile.nickname); // undefined
console.log(profile.avatar); // undefined
```

İki okuma aynı sonucu verir ama durumlar farklıdır: `nickname` vardır ve değeri
`undefined`dır; `avatar` yoktur. Property'nin sahipliğini sormak için:

```js
console.log(Object.hasOwn(profile, "nickname")); // true
console.log(Object.hasOwn(profile, "avatar")); // false
```

Bu ayrım API güncellemesinde önemlidir. “Alan gönderilmedi” ile “alan bilerek boş
bırakıldı” farklı sözleşmeler olabilir.

### Binding, referans, object ve state

Şimdi açılıştaki kodu yürütelim:

```js
const courseCard = student;
courseCard.progress.completedChapters = 31;
```

Kavramsal iz:

| Adım | `student` bağı | `courseCard` bağı | Object state |
| --- | --- | --- | --- |
| Başlangıç | `O1` | yok | `O1.progress.completedChapters = 30` |
| Atama sonrası | `O1` | `O1` | değer hâlâ `30` |
| Mutasyon sonrası | `O1` | `O1` | değer artık `31` |

`courseCard = student` object'in property'lerini kopyalamadı. İkinci bir bağ aynı
object value'ya ulaştı. Bir object'e birden fazla yol olduğunda bu yollar birbirinin
**alias'ıdır**. Property'yi yerinde değiştirmek **mutasyon (mutation)** olarak
adlandırılır. Bütün alias'lar yeni state'i gözler.

### `const` neden mutasyonu durdurmadı?

`const`, binding'in başka bir value'ya yeniden bağlanmasını engeller:

```js
const learner = student;
// learner = { studentId: "ST-002" }; // TypeError

learner.displayName = "Ada Yılmaz"; // geçerli
```

İkinci satır `learner` bağını değiştirmez. Bağın ulaştığı object'in property state'ini
değiştirir. “`const` object'i değişmez yapar” düşüncesi bu yüzden yanlıştır.

### Sığ kopya: dış kabuk yeni, iç nesne ortak

Ada, ekran için spread ile kopya üretir:

```js
const snapshot = { ...student };

console.log(snapshot === student); // false
console.log(snapshot.progress === student.progress); // true
```

Spread, dış object için yeni kimlik üretir ve seçilebilir own property değerlerini
yeni object'e taşır. `progress` değerinin kendisi bir object referansı olduğu için o
referans taşınır; iç object yeniden üretilmez. Buna **sığ kopya (shallow copy)** denir.

```text
student  ──► O1 ── progress ──► O2 { completedChapters: 30 }
snapshot ──► O3 ── progress ──┘
```

Dolayısıyla aşağıdaki satır iki dış modelden de görülen `O2` object'ini değiştirir:

```js
snapshot.progress.completedChapters = 31;
console.log(student.progress.completedChapters); // 31
```

`Object.assign({}, student)` da bu örnekte sığ bir kopya üretir. Fakat
`Object.assign(student, patch)` ilk argüman olan hedefi mutasyona uğratır. Hedef
seçimi bir stil ayrıntısı değil, state sözleşmesidir.

### Seçici iç içe kopyalama

Yalnız değişen yol üzerindeki object'leri yeniden üretirsek eski ve yeni state'i
ayırabiliriz:

```js
const updatedStudent = {
  ...student,
  progress: {
    ...student.progress,
    completedChapters: 31,
  },
};
```

Şimdi iz:

| Karşılaştırma | Sonuç | Neden |
| --- | --- | --- |
| `updatedStudent === student` | `false` | Dış object yeni |
| `updatedStudent.progress === student.progress` | `false` | `progress` da yeniden üretildi |
| `student.progress.completedChapters` | `30` | Eski state mutasyona uğramadı |
| `updatedStudent.progress.completedChapters` | `31` | Yeni state yeni değeri taşıyor |

Bu, her şeyi körlemesine “deep copy” etmek değildir. Değişen yol kopyalanır;
değişmeyen nested object'ler varsa bilinçli olarak paylaşılabilir. Paylaşım kararı
veri sahipliği ve mutasyon politikasına dayanmalıdır.

### Geçerli nesneyi tek kapıdan üretmek

C29'un kuralını koruyalım: domain içine string `"30"` kabul edip sessizce number'a
çevirmeyiz. Bu factory canonical type ve invariant ister:

```js
function createStudentProgress({
  studentId,
  displayName,
  completedChapters,
  totalChapters,
}) {
  if (typeof studentId !== "string" || studentId.trim() === "") {
    throw new TypeError("studentId boş olmayan bir string olmalıdır.");
  }

  if (typeof displayName !== "string" || displayName.trim() === "") {
    throw new TypeError("displayName boş olmayan bir string olmalıdır.");
  }

  if (!Number.isInteger(completedChapters)) {
    throw new TypeError("completedChapters integer olmalıdır.");
  }

  if (!Number.isInteger(totalChapters)) {
    throw new TypeError("totalChapters integer olmalıdır.");
  }

  if (totalChapters <= 0) {
    throw new RangeError("totalChapters sıfırdan büyük olmalıdır.");
  }

  if (completedChapters < 0 || completedChapters > totalChapters) {
    throw new RangeError("completedChapters geçerli aralıkta olmalıdır.");
  }

  return {
    studentId: studentId.trim(),
    displayName: displayName.trim(),
    progress: { completedChapters, totalChapters },
  };
}
```

Satırların çalışma sırası önemlidir. Önce her property'nin type sözleşmesi, sonra
değer aralığı denetlenir. Böylece karşılaştırmalar beklediğimiz türlerle yapılır.
Factory, geçersiz state'in modele girişini engeller; sonradan her kullanıcı “acaba
bu number mı?” diye tekrar kontrol etmek zorunda kalmaz.

### Birlikte yapalım: ilerlemeyi güvenli artırmak

Girdi object'ini mutasyona uğratmadan yeni state döndüren bir fonksiyon yazalım:

```js
function advanceProgress(student) {
  const { completedChapters, totalChapters } = student.progress;

  if (completedChapters >= totalChapters) {
    throw new RangeError("Tamamlanacak chapter kalmadı.");
  }

  return {
    ...student,
    progress: {
      ...student.progress,
      completedChapters: completedChapters + 1,
    },
  };
}
```

Fonksiyon önce gereken iki değeri okur. Invariant ihlal edilecekse erken durur.
Sonra yeni dış object ve yeni `progress` object'i üretir. `studentId` ile
`displayName` değişmediği için spread ile taşınır. Eski object üzerinde atama yoktur.

```js
const before = createStudentProgress({
  studentId: "ST-001",
  displayName: "Ada",
  completedChapters: 30,
  totalChapters: 38,
});

const after = advanceProgress(before);

console.log(before.progress.completedChapters); // 30
console.log(after.progress.completedChapters); // 31
```

### `Object.freeze` hakkında doğru sınır

`Object.freeze(student)` dış object'in own property'lerinde değişikliği engeller;
fakat içteki `student.progress` otomatik olarak freeze edilmez. Yani freeze de sığdır.
Bu chapter'da recursive deep-freeze altyapısı kurmuyoruz. Asıl hedef, state paylaşımını
görmek ve güncelleme sözleşmesini açıkça tasarlamaktır.

## Engineering Perspective

Profesyonel kodda “nesneler mutable mı immutable mı olmalı?” sorusunun tek cümlelik
cevabı yoktur. Yerel, tek sahibi belli ve kısa ömürlü bir object'i kontrollü biçimde
mutasyona uğratmak anlaşılır ve verimli olabilir. Aynı state UI, cache ve iş kuralı
arasında paylaşılıyorsa gizli mutasyon eski ekranları, testleri ve günlük kayıtlarını
bozabilir.

Karar verirken şu sözleşmeyi yazın:

- Bu object'in sahibi kim?
- Kimler referansını saklayabilir?
- Güncelleme yerinde mi, yeni state üreterek mi yapılacak?
- Hangi nested object'ler paylaşılabilir?
- Hangi invariant her güncellemede korunacak?

Kopyalamanın maliyeti de vardır. Büyük object graph'ını her işlemde bütünüyle
kopyalamak zaman ve bellek tüketir. Seçici immutable update, yalnız değişen yolu
yenileyerek kimlik değişimini anlamlı bir sinyal hâline getirir. Ölçmeden performans
iddiasında bulunmayın; önce doğruluk ve açık sahiplik sağlayın, sonra profiler ile
darboğazı ölçün.

Object property'leri bir API sözleşmesidir. `name`, `displayName` ve `student_name`
gibi eş anlamlı key'leri rastgele karıştırmak tüketicileri koşullu kod yazmaya zorlar.
Boundary katmanı dış biçimi canonical modele çevirir; domain içi tek sözlükle konuşur.

## Real World Examples

### Arayüz state'i

Bir React ekranında eski state doğrudan mutasyona uğratılırsa framework beklediği
kimlik değişimini göremeyebilir veya geçmiş state de değişmiş gibi davranabilir.
C30 framework öğretmez; framework davranışının altında duran identity sözleşmesini
öğretir.

### Audit kaydı

Bir işlem öncesi object'i “before” diye saklayıp aynı nested object'i sonra mutate
ederseniz audit kaydı geçmişi korumaz. Snapshot'ın hangi derinlikte bağımsız olması
gerektiği iş kuralıdır.

### Cache

Cache içindeki object'i alan kod doğrudan değiştirebiliyorsa diğer kullanıcılar
beklenmedik state görebilir. Kopyalama, freeze veya read-only erişim politikası;
ownership sözleşmesine göre belirlenir.

### ASEA projesi

`V01-P07` ilerleme modeli; öğrenci kimliği, tamamlanan chapter sayısı ve toplamı
geçerli bir object olarak üretir. C31 bu kayıtların koleksiyonunu işleyecek. C30'da
tek kaydın doğru değilse C31'deki liste işlemleri hatayı yalnız çoğaltır.

## Common Mistakes

### Hata avı 1: alias'ı kopya sanmak

```js
const original = { progress: { completed: 30 } };
const copy = original;
copy.progress.completed = 31;
```

`copy` adı yeni bir object üretmez. Düzeltme, gereken bağımsızlık düzeyine göre yeni
dış ve nested object üretmektir.

### Hata avı 2: spread'i deep copy sanmak

```js
const copy = { ...original };
copy.progress.completed = 31;
```

Dış kimlik farklı, `progress` kimliği ortaktır. İz tablosunda her object katmanını
ayrı satıra yazmadan “kopyalandı” demeyin.

### Hata avı 3: `const` ile immutable'ı eşitlemek

`const` yeniden bağlamayı önler; property mutation'ı değil. Değişmezlik gerekiyorsa
API sözleşmesi, seçici update ve gerektiğinde freeze gibi ayrı araçlar gerekir.

### Hata avı 4: eksik property'yi falsy test etmek

`if (!progress.completedChapters)` kontrolü `0` değerini eksik sayar. Ownership için
`Object.hasOwn`, type için `typeof`/`Number.isInteger`, aralık için açık karşılaştırma
kullanın.

### Hata avı 5: factory içinde sessiz coercion

`Number(completedChapters)` geçersiz bir çağıranın hatasını gizleyebilir. Raw veri
C29'daki boundary'de dönüştürülür; C30 domain factory'si canonical contract ister.

## Best Practices

1. Önce domain cümlesini, sonra property ve invariant tablosunu yazın.
2. Key statikse dot, runtime'da hesaplanıyorsa bracket notation kullanın.
3. Equality sonucunu yorumlamadan önce primitive value mı object identity mi
   karşılaştırdığınızı söyleyin.
4. Her atamada “yeni object mi, aynı object'e yeni alias mı?” diye sorun.
5. Kopyalama derinliğini nested identity karşılaştırmalarıyla kanıtlayın.
6. Güncelleme fonksiyonunda invariant'ı tekrar koruyun.
7. Boundary'de raw veriyi canonical modele dönüştürün; domain içinde tek type kullanın.
8. Mutation politikasını fonksiyon adı ve dokümantasyonla görünür kılın.

## Hands-on Exercise

### Şimdi sen dene

`createLessonProgress` ve `markLessonComplete` fonksiyonlarını yazın. Model şu
property'leri taşısın: `lessonId`, `title`, `status` ve `metrics.attempts`.

Kurallar:

- `lessonId` ve `title` boş olmayan string olmalı,
- `status`, `"not-started"`, `"in-progress"` veya `"completed"` olmalı,
- `attempts` sıfır veya daha büyük integer olmalı,
- `markLessonComplete` girdiyi mutate etmemeli,
- yeni dış object ve yeni `metrics` object'i üretmeli,
- yeni state'te `status` completed, `attempts` bir fazla olmalı.

Önce şu kanıt tablosunu doldurun:

| Kanıt | Beklenti |
| --- | --- |
| `after === before` | ? |
| `after.metrics === before.metrics` | ? |
| `before.status` | ? |
| `after.status` | ? |

#### Kademeli ipuçları

1. Önce factory'nin type ve invariant kontrollerini bitirin.
2. Güncellemede iki spread gerekir: biri dış model, biri `metrics` için.
3. `status` dış object'te; `attempts` nested object'tedir.
4. Çözümünüzü yalnız output ile değil, iki identity karşılaştırmasıyla test edin.

### Bağımsız uygulama

Bir `updateDisplayName(student, newName)` fonksiyonu tasarlayın. Boş adı reddetsin,
girdiyi mutate etmesin ve `progress` değişmediği için aynı nested referansı bilinçli
olarak paylaşsın. Bu paylaşımın neden güvenli veya riskli olduğunu iki cümleyle
savunun.

### Gerçek proje bağlantısı

Lab'da `V01-P07` için geçerli ilerleme kaydı, güvenli güncelleme ve state trace'i
üreteceksiniz. Kanıt paketinde gereksinim–property eşlemesi, invariant testleri,
identity matrisi ve en az bir shallow-copy hata teşhisi bulunmalıdır.

## Reflection Questions

1. Aynı property değerlerine sahip iki object neden `===` ile eşit değildir?
2. `const` hangi şeyi sabitler, hangi şeyi sabitlemez?
3. Bir alias hangi koşulda yararlıdır, hangi koşulda gizli yan etki üretir?
4. Shallow copy'nin yeterli olup olmadığını kod çalıştırmadan nasıl belirlersiniz?
5. Eksik property ile own `undefined` property neden farklı domain anlamları taşıyabilir?
6. Factory'nin conversion yapmak yerine canonical type istemesi hangi hatayı erken yakalar?
7. Seçici immutable update sırasında hangi kimliklerin değişmesi gerekir?

## Chapter Summary

Object, ilişkili property'leri taşıyan ve kendi kimliği bulunan bir JavaScript
value'sudur. Binding object'in kendisi değil, ona ulaşan addır. Birden fazla binding
aynı object'e ulaştığında alias oluşur; property mutation'ı bütün alias'lardan
gözlenir. `const`, binding'i korur ama object state'ini otomatik olarak immutable
yapmaz.

Spread ve `Object.assign` dış object'i kopyalayabilir; nested object referanslarını
paylaşır. Bu yüzden “kopya” sözcüğü tek başına yeterli değildir: hangi katmanın yeni
kimlik aldığı açıklanmalıdır. Seçici nested copy, değişen yol üzerinde yeni object'ler
üreterek eski state'i korur. Geçerli bir model ise canonical type'ları ve invariant'ları
tek üretim kapısında doğrular.

## Key Takeaways

- Object content ile object identity aynı kavram değildir.
- Atama çoğu zaman object'i kopyalamaz; referansı paylaşır.
- Dot notation sabit, bracket notation hesaplanan key için uygundur.
- `Object.hasOwn`, eksik property ile own `undefined` değerini ayırır.
- `const` yeniden bağlamayı önler; nested mutation'ı önlemez.
- Spread ve `Object.assign` shallow copy üretir.
- Güvenli güncellemede değişen object yolu seçici olarak yeniden oluşturulur.
- Model kalitesi property listesinden değil, korunan invariant'lardan anlaşılır.

## Further Reading

- C18: kayıtlar, alanlar ve domain modelinin ilk kurulumu
- C29: raw girdiden canonical type'a kontrollü dönüşüm
- C33: state kapsamı ve erişim sınırları
- C31: object kayıtlarını array koleksiyonları içinde işleme
- Paket: `programming-fundamentals/content/v01-c30/`

## References

- ECMA-262, Object Initializer
- ECMA-262, Property Accessors
- ECMA-262, Object Type ve identity
- ECMA-262, `Object.assign`
- MDN Web Docs, Shallow copy
- ASEA `V01-C30-BP01`, `V01-LO049` ve `V01-LO050`
