---
title: "Parametreler ve Dönüş Değerleri — Veri Akışını Tasarlamak"
volume: "01"
chapter: "14"
chapter_id: "V01-C14"
slug: "parametreler-ve-donus-degerleri"
difficulty: "Beginner"
estimated_time: "4-5 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C14-BP01"
production_packet_id: "V01-C14-CPP-001"
prerequisites:
  - "V01-C07"
  - "V01-C13"
learning_objectives:
  - "V01-LO021"
last_updated: "2026-07-23"
---

# Parametreler ve Dönüş Değerleri — Veri Akışını Tasarlamak

## Learning Objectives

Bu bölümün sonunda öğrenci, fonksiyon arayüzünü yalnız çalışan bir sözdizimi olarak değil, açık ve denetlenebilir bir veri akışı olarak tasarlayabilecektir. Öğrenciden beklenen kanıtlar şunlardır:

- Parametre (Parameter) ile argüman (Argument) arasındaki farkı tanım ve çağrı üzerinde göstermek.
- Argüman ifadelerinin değerlendirilip parametre konumlarına nasıl bağlandığını izlemek.
- JavaScript'te eksik ve fazla argüman davranışlarını tahmin etmek ve sınamak.
- Varsayılan parametrenin (Default Parameter) yalnız eksik veya `undefined` argümanda devreye girdiğini göstermek.
- Primitive bir parametreyi yeniden atamak ile nesne özelliğini değiştirmek arasındaki farkı doğru değer aktarımı modeliyle açıklamak.
- Fonksiyon sonucunu etkileyen gerekli, kullanılmayan, yinelenen, türetilebilir ve gizli girdileri sınıflandırmak.
- Uzun parametre listesinin hangi bağımlılıkları ve yanlış sıra risklerini oluşturduğunu değerlendirmek.
- Dönüş değerini (Return Value), ekrana yazdırma ve dış durumu değiştirme kanallarından ayırmak.
- Eksik `return` nedeniyle oluşan `undefined` sonucunu yol tablosuyla teşhis etmek.
- Bir fonksiyonun sonucunu sonraki fonksiyonun argümanı yaparak veri akışını (Data Flow) izlemek.
- Fonksiyon bileşiminin (Function Composition) yalnız sözdizimsel iç içelik değil, uyumlu sözleşmeler gerektirdiğini açıklamak.
- Birden fazla sonucu tek ve tutarlı bir sonuç modeliyle döndürmek.
- Değer soran davranış ile dış dünyada değişiklik yapan davranışı ayırmak için komut–sorgu sezgisini (Command–Query Intuition) kullanmak.
- Yapay zekâ tarafından üretilen bir fonksiyon arayüzünde gereksiz parametre, gizli çıktı, belirsiz varsayılan ve tutarsız result shape sorunlarını denetlemek.

`V01-LO021` için başarı kanıtı iki parçalıdır. Birincisi, mevcut bir fonksiyonun parametrelerini inceleyip kullanılmayan, türetilebilir, yinelenen veya gizli girdileri belirlemek ve davranışı koruyarak daha küçük bir arayüz üretmektir. İkincisi, yalnız yazdıran veya global duruma yazan hidden output'u açık dönüş değerine çevirmek ve print ile return arasındaki yürütme farkını kanıtlamaktır.

## Prerequisites

Bu chapter, C07'deki ifade değerlendirmesi ile C13'teki function contract ve çağrı/dönüş modelini kullanır. Başlamadan önce aşağıdaki soruları notlara bakmadan cevaplayın:

1. Bir ifade nasıl değer üretir?
2. `&&` ve `||` kısa devresi değerlendirme sırasını nasıl etkiler?
3. Fonksiyon tanımı ile çağrı arasındaki fark nedir?
4. Function contract hangi yedi alanı içerir?
5. `console.log` ile `return` neden aynı kanal değildir?
6. İç içe çağrıda hangi çağrı önce tamamlanır?

Şu kodu çalıştırmadan izleyin:

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(20, 3);
console.log(total);
```

`price` ve `quantity`, fonksiyon tanımındaki girdi yerleridir. `20` ve `3`, belirli çağrıda bu yerlere sağlanan değerlerdir. Çağrı sırasında 20 değeri `price`, 3 değeri `quantity` adıyla fonksiyonun yerel bağlamında kullanılır. Çarpım 60 olur ve dönüş değeri çağrı ifadesinin sonucu hâline gelir. Atama tamamlandıktan sonra konsola 60 yazılır.

Bu açıklamayı rahat yapamıyorsanız C13'teki caller–callee ve call frame bölümlerine dönün. Kodu yalnız kopyalayıp sonucu görmek yeterli değildir; veri akışını çağrı noktasından sonuç kullanımına kadar kendi kelimelerinizle anlatabilmelisiniz.

Çalışma ortamı olarak Node.js, terminal ve metin düzenleyici yeterlidir. Her deneyde şu sırayı kullanın:

1. Parametre ve argümanları ayrı renkle veya sütunla işaretleyin.
2. Argüman ifadelerinin değerlendirme sırasını tahmin edin.
3. Parametrelerin çağrı içindeki değerlerini yazın.
4. Fonksiyon gövdesindeki ara değerleri izleyin.
5. Return, print ve mutation kanallarını ayrı kaydedin.
6. Normal, sınır ve geçersiz vaka çalıştırın.

## Estimated Study Time

Önerilen toplam çalışma süresi 4-5 saattir:

| Çalışma | Süre | Kanıt |
|---|---:|---|
| Ön bilgi ve parameter–argument ayrımı | 35 dakika | Bağlama tablosu |
| Eksik, fazla ve default argümanlar | 50 dakika | Karşı örnek matrisi |
| JavaScript değer aktarımı | 55 dakika | Primitive/nesne izleri |
| Necessary input ve interface tasarımı | 55 dakika | Önce/sonra parametre analizi |
| Return, print ve bileşim | 50 dakika | Üç kanallı veri akışı |
| Uygulamalı görev | 75 dakika | Çalışan refactoring ve testler |
| Geri çağırma ve özet | 25 dakika | Kişisel kontrol listesi |

Bu süre yalnız okumayı kapsamaz. Her örnekte önce tahmin, sonra çalışma, ardından açıklama yapılır. `null`, `undefined`, 0, `false` ve boş metin gibi sınır değerleri özellikle ayrı deneyin. Varsayılan parametre davranışını yalnız normal değerle görmek, gerçek kuralı öğretmez.

İki oturuma bölerseniz ilk gün bağlama ve değer aktarımını, ikinci gün arayüz sadeleştirme ile laboratuvarı çalışın. İkinci günün başında şu cümleyi tamamlayın: “JavaScript nesneyi call-by-reference ile aktarır” demek yerine “JavaScript değeri aktarır; nesne değeri ...” Kendi kelimelerinizle doğru devamı yazamıyorsanız ilgili bölümü tekrar uygulayın.

## Introduction

Bir fonksiyonun gövdesi doğru olabilir, fakat arayüzü kötü tasarlanmış olabilir. Gereksiz yedi parametre alan, hangi sırada ne beklendiği anlaşılmayan veya sonucu yalnız global bir değişkene yazan bir fonksiyon çalışır; yine de kullanması, test etmesi ve değiştirmesi zordur.

Şu çağrıyı düşünün:

```js
createReport("Ada", 24, true, 3, 4, false, "tr");
```

Koda bakmadan 24 nedir? `true` hangi kararı temsil eder? 3 ve 4 hangi sıradadır? `false` neyi kapatır? Parametre isimleri fonksiyon tanımında görünse bile her çağıran doğru sırayı hatırlamak zorundadır. Bir değer kullanılmıyorsa veya başka girdilerden türetilebiliyorsa gereksiz bağımlılıktır. Boolean flag iki farklı davranışı tek fonksiyonun içine gizliyor olabilir.

Başka bir sorun çıktı kanalında ortaya çıkar:

```js
let latestResult;

function calculateProgress(completed, total) {
  latestResult = (completed / total) * 100;
  console.log(latestResult);
}
```

Fonksiyon sonucu hem global değişkene yazar hem ekrana basar, fakat çağırana değer döndürmez. Test başka global durumdan etkilenebilir. Hesabı başka bir format fonksiyonuna vermek için global değişken okunmalıdır. Veri akışı arayüzden görünmez.

```js
function calculateProgress(completed, total) {
  return (completed / total) * 100;
}

const percentage = calculateProgress(3, 4);
console.log(percentage);
```

İkinci sürümde veri akışı açıktır: iki argüman içeri girer, bir sonuç döner, çağıran sonucu ister yazdırır ister başka hesapta kullanır. Fonksiyonun contract'ı ayrıca `total=0`, negatif değerler ve yuvarlama politikasını belirtmelidir.

Parametre listesini küçültmenin amacı mümkün olan en az sayıya ulaşmak değildir. Fonksiyonun sorumluluğunu yerine getirmesi için gerekli bütün veriyi açık biçimde taşıması gerekir. Eksik arayüz, global veya çevre durumuna gizlice bağımlı olabilir. Fazla arayüz ise çağıranı ilgisiz bilgiye bağlar. Hedef “küçük ama eksiksiz” sözleşmedir.

Bu chapter veri akışına şu sorularla yaklaşır:

- Fonksiyon hangi değerleri gerçekten kullanıyor?
- Hangi değerler başka girdilerden güvenilir biçimde türetilebilir?
- Hangi değer aynı bilgiyi iki kez temsil ediyor?
- Hangi bağımlılık gizli olduğu için arayüzde görünmüyor?
- Sonuç kime gidiyor: çağırana mı, konsola mı, global duruma mı?
- Dönen sonuç başka fonksiyonun kabul ettiği contract ile uyumlu mu?

AI, bir prompt'tan hızlıca uzun parametreli fonksiyon üretebilir veya her şeyi tek seçenek nesnesine koyabilir. İki yaklaşım da otomatik olarak doğru değildir. Mühendis, her girdinin gerekliliğini, varsayılanın anlamını ve çıktı modelinin tutarlılığını sözleşme ve test kanıtıyla değerlendirir.

## Core Concepts

### Parametre ve argüman

Parametre, fonksiyon tanımında girdi için adlandırılan yerdir. Argüman, çağrı sırasında o yere değer sağlayan ifadedir:

```js
function greet(name, greeting) {
  return `${greeting}, ${name}`;
}

const message = greet("Ada", "Merhaba");
```

`name` ve `greeting` parametredir. `"Ada"` ve `"Merhaba"` argümandır. “Parameter fonksiyona gönderilir” günlük dilde anlaşılabilir olsa da teknik ayrım reasoning için önemlidir: Parameter tanıma, argument çağrıya aittir.

Argüman yalnız literal olmak zorunda değildir:

```js
const firstName = "Ada";
const prefix = "Merhaba";
const message = greet(firstName.trim(), prefix.toUpperCase());
```

Argüman ifadeleri önce değerlendirilir. Ortaya çıkan değerler parametrelere bağlanır. `name` değeri `"Ada"`, `greeting` değeri `"MERHABA"` olur.

### Konumsal bağlama

JavaScript'te normal parametreler konumlarına göre bağlanır:

```js
function divide(dividend, divisor) {
  return dividend / divisor;
}

divide(10, 2); // 5
divide(2, 10); // 0.2
```

Aynı iki değer farklı sırada farklı sonuç üretir. İsimler çağrı noktasında görünmediği için çok sayıda benzer türde argüman yanlış sıra riskini artırır.

Bağlama tablosu:

| Konum | Parametre | Birinci çağrı argümanı | Yerel değer |
|---:|---|---|---:|
| 1 | `dividend` | `10` | 10 |
| 2 | `divisor` | `2` | 2 |

Bir çağrıyı incelerken değerlerin anlamını sırayla eşleyin; yalnız türlerinin uyumlu olması doğru bağlama kanıtı değildir.

### Argüman değerlendirme sırası

JavaScript, argüman ifadelerini soldan sağa değerlendirir:

```js
function observe(label, value) {
  console.log(label);
  return value;
}

function subtract(left, right) {
  return left - right;
}

const result = subtract(
  observe("sol", 10),
  observe("sağ", 3),
);
```

Önce `sol`, sonra `sağ` yazılır; en son `subtract(10, 3)` çalışır. Sonuç 7'dir. Eğer argüman ifadelerinin etkisi veya hata olasılığı varsa sıra gözlenebilir davranıştır. Saf değer ifadelerinde önem daha az görünse de runtime kuralı aynıdır.

### Eksik argüman

JavaScript eksik argümanda otomatik olarak hata üretmez:

```js
function multiply(left, right) {
  return left * right;
}

multiply(5); // NaN
```

`left=5`, `right=undefined` olur. `5 * undefined` sonucu `NaN`'dır. Belirti hesapta görülür, kök neden çağrı contract'ının eksik olmasıdır.

Eksik değerin geçersiz olduğu contract'ta açık doğrulama yapılabilir:

```js
function multiply(left, right) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new TypeError("İki sonlu sayı gereklidir");
  }

  return left * right;
}
```

Varsayılan değer yalnız gerçek ve güvenli bir anlam varsa kullanılmalıdır.

### Fazla argüman

```js
function add(left, right) {
  return left + right;
}

add(2, 3, 100); // 5
```

Üçüncü argüman için adlandırılmış parametre yoktur ve normal gövde onu kullanmaz. Fakat argüman ifadesi çağrı sırasında değerlendirilir:

```js
add(2, 3, observe("fazla argüman değerlendirildi", 100));
```

Mesaj yazılır, sonra fonksiyon 5 döndürür. “Fazla argüman tamamen yok sayılır” cümlesi eksiktir: Değer normal parametreye bağlanmaz, fakat ifade değerlendirilmiş olabilir.

Fazla değeri sessizce kabul etmek typo veya eski çağıran sorununu gizleyebilir. JavaScript'in dinamik davranışı nedeniyle contract ve test disiplini önemlidir.

### Varsayılan parametre

```js
function multiply(number, multiplier = 1) {
  return number * multiplier;
}

multiply(5); // 5
multiply(5, undefined); // 5
multiply(5, 2); // 10
```

Default, argüman verilmediğinde veya `undefined` sağlandığında kullanılır. Aşağıdakiler default'u tetiklemez:

```js
multiply(5, null); // 0
multiply(5, 0); // 0
multiply(5, false); // 0
multiply(5, ""); // 0
```

Bu sonuçlar type coercion nedeniyle oluşur; iyi contract gerekirse bu türleri reddeder. Default parametre doğrulama yerine geçmez.

Varsayılan değer çağrı anında değerlendirilir:

```js
let nextId = 1;

function createLabel(id = nextId++) {
  return `item-${id}`;
}

createLabel(); // item-1
createLabel(); // item-2
```

Bu örnek etki içerir ve dikkatli contract gerektirir. Başlangıç için sabit ve saf varsayılanlar daha anlaşılırdır.

### Kalan parametre

Kalan parametre (Rest Parameter), belirsiz sayıda kalan argümanı gerçek bir array içinde toplar:

```js
function sum(...numbers) {
  let total = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }

  return total;
}
```

Bu araç değişken sayıda aynı anlamdaki girdiler için uygundur. Yedi ilgisiz parametreyi `...args` ile gizlemek arayüz tasarımını iyileştirmez. Rest son parametre olmalı ve default alamaz. Koleksiyon dolaşımı C17'de ayrıntılandırılacaktır; burada yalnız interface anlamı işlenir.

### JavaScript'te değer aktarımı

JavaScript argüman ifadelerinin ürettiği değerleri parametrelere bağlar. Primitive değer örneği:

```js
function replaceNumber(number) {
  number = 100;
  return number;
}

let original = 5;
const returned = replaceNumber(original);

console.log(original); // 5
console.log(returned); // 100
```

Fonksiyon içindeki `number` binding'i yeniden atanır; dış `original` binding'i değişmez.

Nesne örneği:

```js
function renameStudent(student) {
  student.name = "Ada";
}

const student = { name: "Ece" };
renameStudent(student);
console.log(student.name); // Ada
```

Nesne değeri aynı nesneye erişimi sağlayan reference değeridir. Bu değer parametreye aktarılır. Fonksiyon o referans üzerinden property'yi değiştirince çağıran aynı nesnede değişikliği görür.

Ancak parametreyi yeni nesneye yeniden atamak dış binding'i değiştirmez:

```js
function replaceStudent(student) {
  student = { name: "Ada" };
  return student;
}

const originalStudent = { name: "Ece" };
const newStudent = replaceStudent(originalStudent);

console.log(originalStudent.name); // Ece
console.log(newStudent.name); // Ada
```

Bu nedenle “JavaScript nesneleri pass-by-reference geçirir” cümlesi yanıltıcıdır. Daha doğru model: JavaScript değer aktarır; nesne değeri bir nesneye referanstır. Property mutation dışarıdan görünür, parameter reassignment dış binding'i yeniden atamaz.

### Gerekli girdi

Her parametre için şu soruyu sorun: Bu değer fonksiyonun contract sonucunu veya zorunlu etkisini değiştiriyor mu?

```js
function calculateLineTotal(price, quantity, username) {
  return price * quantity;
}
```

`username` kullanılmıyor ve sonucu etkilemiyor. Gerekli değildir. Taşınması çağıranı anlamsız bağımlılığa bağlar ve yanlış “kullanıcıya göre hesap değişebilir” sinyali verir.

### Türetilebilir ve yinelenen girdi

```js
function calculateRectangleArea(width, height, area) {
  return area;
}
```

`area`, width ve height'tan türetilebilir. Üç değer çelişebilir: `width=4`, `height=3`, `area=99`. Hangi kaynak doğrudur? Gereksiz duplicate input tutarsız durum üretir.

```js
function calculateRectangleArea(width, height) {
  return width * height;
}
```

Türetme ucuz, güvenilir ve fonksiyon sorumluluğunun parçasıysa arayüz daha küçüktür. Türetme pahalı veya farklı otoriteye aitse karar değişebilir. Evrensel kural değil, contract trade-off'udur.

### Gizli girdi

```js
let taxRate = 0.2;

function calculateTax(price) {
  return price * taxRate;
}
```

Signature yalnız `price` gösterir, fakat sonuç `taxRate` değerine de bağlıdır. Bu hidden input'tur. Arayüz küçük görünür, ama eksiktir. Açık sürüm:

```js
function calculateTax(price, taxRate) {
  return price * taxRate;
}
```

Her bağımlılığı parametre yapmak zorunlu değildir; daha ileri dependency tasarımları sonraki akademilerde öğrenilir. Buradaki ilke, sonucu etkileyen görünmeyen bilginin contract ve testte kaybolmamasıdır.

### Uzun parametre listesi

Uzun liste şu riskleri artırır:

- Yanlış sıra.
- Benzer türde değerlerin karışması.
- Çağrı noktasında anlamın görünmemesi.
- Fonksiyonun birden çok sorumluluk taşıması.
- Yeni seçenek eklendikçe bütün caller'ların değişmesi.
- Test kombinasyonlarının büyümesi.

Fakat “üçten fazla parametre her zaman kötüdür” gibi evrensel eşik yoktur. Dört koordinat değeri tek açık geometri işlemi için anlamlı olabilir. İki parametre bile ilgisiz iki sorumluluğu birleştirebilir.

İlişkili girdiler anlamlı modelde gruplanabilir:

```js
function formatAddress(address) {
  return `${address.street}, ${address.city}, ${address.country}`;
}
```

Bu object yalnız listeyi saklamak için değil, “adres” adlı gerçek bir kavramı temsil ediyorsa değerlidir. Domain modelleme C18'de ayrıntılı işlenecektir.

### Flag parametresi

```js
function createReport(data, isPreview) {
  if (isPreview) {
    return createPreview(data);
  }

  return createFinalReport(data);
}
```

Boolean flag, caller'ın `true` veya `false` anlamını hatırlamasını ve fonksiyonun iki farklı davranış taşımasını sağlayabilir. Ayrı `createPreview` ve `createFinalReport` arayüzleri daha açık olabilir. Ancak flag her zaman yanlış değildir; tek contract'ın küçük bir seçeneğini temsil edebilir. Karar, sorumluluk ve değişim nedenine göre verilir.

### Dönüş değeri ve çağrı noktası

```js
function square(number) {
  return number * number;
}

const area = square(4);
```

`return` ifadesi 16 üretir, fonksiyonu bitirir ve 16 değerini `square(4)` çağrı ifadesinin sonucu yapar. Atama sonra tamamlanır. Dönüş değeri yalnız “fonksiyonun içinde hesaplanan şey” değil, çağıranın kullanabileceği açık veri kanalıdır.

### Print ve return farkı

```js
function squareAndPrint(number) {
  console.log(number * number);
}

const result = squareAndPrint(4);
console.log(result); // undefined
```

16 konsola yazılır, fakat çağırana değer dönmez. Print insan veya log sistemi için etki üretir. Return programın sonraki ifadesi için değer üretir.

```js
function square(number) {
  return number * number;
}

const result = square(4);
console.log(result);
```

Hesap ile sunum ayrılmıştır. Fonksiyon sonucu testte, başka hesapta veya farklı UI'da kullanılabilir.

### Eksik return

```js
function getDiscountRate(isMember) {
  if (isMember) {
    return 0.1;
  }
}
```

Üye olmayan yolda `undefined` döner. Contract iki tür müşteride sayısal oran vaat ediyorsa yanlış implementation'dır:

```js
function getDiscountRate(isMember) {
  if (isMember) {
    return 0.1;
  }

  return 0;
}
```

Yol tablosu bütün geçerli caller durumlarının result shape'ini denetler.

### Veri akışı ve bileşim

```js
function normalizeName(name) {
  return name.trim().toLowerCase();
}

function createGreeting(name) {
  return `Merhaba, ${name}`;
}

const greeting = createGreeting(normalizeName("  ADA  "));
```

İz:

1. `normalizeName` argümanı değerlendirilir.
2. `"ada"` döner.
3. Bu değer `createGreeting` için argüman olur.
4. Son fonksiyon `"Merhaba, ada"` döndürür.

Composition için sözleşmeler uyumlu olmalıdır. İlk fonksiyon `null` döndürebiliyorsa, ikinci fonksiyon yalnız string kabul ediyorsa doğrudan bileşim güvenli değildir. Sözdizimsel olarak iç içe yazılabilmesi contract uyumunu kanıtlamaz.

### Çoklu sonuç modelleme

Fonksiyon birden fazla ilişkili bilgi üretmek isteyebilir:

```js
function analyzeScore(score) {
  return {
    passed: score >= 50,
    distanceToPass: Math.max(0, 50 - score),
  };
}
```

Tek object değeri iki adlandırılmış alanı tutarlı biçimde döndürür. Her yolda aynı result shape korunmalıdır. Bir yolda number, diğer yolda object döndürmek caller'ı karmaşık tür kontrolüne zorlar.

Global `passed` ve `distance` değişkenlerine yazmak hidden output oluşturur. Explicit result data flow'u görünür kılar.

### Komut–sorgu sezgisi

Sorgu (query) bir değer sorar; komut (command) dış durumda değişiklik yapar. Başlangıç sezgisi, bir fonksiyonun hem karmaşık mutation yapıp hem bilgi döndürmesini sorgulamaktır.

```js
function calculateTotal(items) {
  return /* hesaplanan değer */;
}

function printTotal(total) {
  console.log(total);
}
```

Bu ayrım hesaplamayı test etmeyi kolaylaştırır. Katı evrensel yasa değildir: Bir kayıt komutu yeni ID döndürebilir. Önemli olan return ve effect contract'larının açık olmasıdır.

## Engineering Perspective

### Parametre listesi bağımlılık haritasıdır

Her parametre fonksiyonun bir bilgiye bağımlı olduğunu ilan eder. Listeye yeni parametre eklemek yalnız imza değişikliği değildir; bütün caller'lar, testler, mock'lar ve belgeler etkilenebilir. Bu nedenle interface tasarımı değişim maliyetidir.

Parametre analizi için sınıflandırma tablosu kullanın:

| Parametre | Kullanılıyor mu? | Türetilebilir mi? | Yineleniyor mu? | Gizli alternatif var mı? | Karar |
|---|---|---|---|---|---|
| `price` | Evet | Hayır | Hayır | Hayır | Tut |
| `quantity` | Evet | Hayır | Hayır | Hayır | Tut |
| `username` | Hayır | — | — | — | Kaldır |
| `subtotal` | Evet | Evet | `price*quantity` | — | Kaldır/türet |

Her kaldırma davranış koruma testiyle yapılmalıdır. Parametre şu anda kullanılmıyor fakat sözleşmenin gelecekteki migration parçasıysa rastgele silinemez; bu durum açık karar kaydı gerektirir.

### Küçük arayüz ile gizli bağımlılık arasındaki denge

Parametre sayısını sıfıra indirmek kolaydır: Her şeyi globalden okuyun. Bu iyi tasarım değildir. Küçük arayüz gerekli bilgiyi eksiksiz gösterir; gizli bağımlılık kullanmaz. “Az parametre” hedef değil, açık ve odaklı bağımlılık hedefidir.

### Derived input ne zaman tutulabilir?

Bir değer başka girdiden türetilebilse bile şu durumlarda caller tarafından sağlanması düşünülebilir:

- Türetme çok pahalıdır ve caller zaten güvenilir sonucu hesaplamıştır.
- Caller farklı bir otoritenin onaylı değerini taşır.
- Snapshot zamanı önemlidir.
- Farklı hesap politikasının seçilmesi contract'ın parçasıdır.

Bu durumda tutarlılık ve otorite açık olmalıdır. `width`, `height` ve `area` birlikte alınacaksa çelişkide hangi değer kazanacak? Belirsiz duplicate truth bakım riskidir.

### Object parameter her zaman çözüm değildir

Uzun listeyi tek `options` object'e taşımak çağrıyı adlandırabilir, fakat fonksiyon yine on ilgisiz değere bağımlıysa sorumluluk sorunu devam eder. Model gerçek bir kavramı temsil ediyor mu, yoksa sayı saklama torbası mı? Kullanılmayan alanlar bütün büyük object'in fonksiyona verilmesinden kaynaklanıyor mu?

En dar anlamlı veri tercih edilir. Bütün `user` nesnesi yerine yalnız `user.id` gerekiyorsa ID parametresi coupling'i azaltabilir. Buna karşılık birkaç alan birlikte “adres” invariant'ı taşıyorsa address modeli daha doğru olabilir.

### Mutation contract'ı

Bir nesne parametresini değiştirmek bazen amaçtır:

```js
function markTaskCompleted(task) {
  task.completed = true;
}
```

Contract açıkça `task.completed` alanının değişeceğini, diğer alanların korunacağını ve return davranışını belirtmelidir. Alternatif immutable sürüm yeni object döndürebilir:

```js
function createCompletedTask(task) {
  return { ...task, completed: true };
}
```

İki tasarımın performans, kimlik ve caller beklentisi farklıdır. “Mutation her zaman kötü” veya “object zaten reference” gibi sloganlar yerine contract ve kullanım bağlamı değerlendirilir.

### Return shape bir arayüzdür

Fonksiyonun döndürdüğü değerin biçimi caller contract'ıdır. Şu tutarsız tasarım risklidir:

```js
function parseQuantity(text) {
  const quantity = Number(text);

  if (Number.isNaN(quantity)) return "invalid";
  if (quantity < 0) return null;
  return { ok: true, value: quantity };
}
```

Caller string, null ve object ayrımını bilmek zorundadır. Tutarlı model:

```js
function parseQuantity(text) {
  const quantity = Number(text);

  if (!Number.isFinite(quantity) || quantity < 0) {
    return { ok: false, value: null, error: "invalid-quantity" };
  }

  return { ok: true, value: quantity, error: null };
}
```

Bu yalnız örnek bir politika; hata fırlatma da seçilebilirdi. Önemli olan her yolda öngörülebilir contract'tır.

### Bileşim ve hata sınırı

Bir pipeline'da her aşamanın output contract'ı sonraki aşamanın input contract'ıyla uyumlu olmalıdır:

```text
raw input
→ normalize
→ validate
→ calculate
→ format
```

Normalize boş metin döndürebilir, validate yalnız non-empty bekliyorsa arada açık kontrol gerekir. Bir aşama hata fırlatıyor, diğeri result object döndürüyorsa failure policy karışabilir. Composition yalnız fonksiyonları iç içe yazmak değil, data ve failure kanallarını uyumlandırmaktır.

### Interface refactoring süreci

Güvenli adımlar:

1. Mevcut caller'ları ve gerçek argümanları listele.
2. Contract ve davranış testlerini sabitle.
3. Her parametreyi necessary/unused/derived/duplicate/hidden olarak sınıflandır.
4. Tek bir interface değişikliği yap.
5. Fonksiyon ve bütün caller'ları birlikte güncelle.
6. Normal, sınır, invalid ve mutation testlerini çalıştır.
7. Data-flow trace'i yeniden çıkar.
8. Contract değiştiyse refactoring değil migration olarak kaydet.

### AI arayüz denetimi

AI'dan şu tabloyu isteyin:

| Girdi | Neden gerekli? | Nerede kullanılır? | Türetilebilir mi? | Varsayılan ne? | Risk |
|---|---|---|---|---|---|

Sonra şu kontrolleri bağımsız yapın:

- AI kullanılmayan parametre ekledi mi?
- Bütün object'i alıp bir alan mı kullanıyor?
- Aynı gerçeği iki parametrede mi taşıyor?
- Default ile geçersiz caller verisini gizliyor mu?
- Sonucu return yerine log/global mutation ile mi iletiyor?
- Result shape bütün yollarda aynı mı?
- Pipeline contract'ları uyumlu mu?

Modelin “cleaner” açıklaması kanıt değildir. Önce/sonra caller testleri ve data-flow izi gerekir.

### Parametre kokularını sistematik inceleme

Bir parameter list'e yalnız uzun diye müdahale etmek yerine her girdinin davranıştaki rolünü inceleyin. Aşağıdaki kokular bir inceleme başlatır; otomatik hata hükmü değildir.

**Kullanılmayan parametre:** Gövdede okunmayan ve contract'ta etkisi olmayan değerdir. Eski interface uyumluluğu veya callback standardı gibi dış neden yoksa kaldırma adayıdır. Önce bütün caller'ları ve dinamik kullanımları araştırın.

**Flag parametresi:** `true` veya `false` ile farklı davranış yolu seçer. Fonksiyonun iki sorumluluğunu gizleyebilir. Çağrı noktasındaki `generate(data, true)` ifadesi anlamı görünmez kılar. Named option veya iki açık fonksiyon alternatifi değerlendirilir.

**Data clump:** Aynı parametre grubu birçok fonksiyonda birlikte taşınır. `street`, `city`, `postalCode`, `country` gerçek bir address kavramını işaret edebilir. Grup yalnız kolaylık için değil, ortak anlam ve invariant taşıdığı için modellenmelidir.

**Primitive obsession sezgisi:** Birbirine benzeyen çok sayıda string veya number, semantic hatayı tür seviyesinde ayırmaz. `userId` ile `orderId` ikisi de string olabilir ve yanlış sırada verilebilir. Daha ileri type/model araçları sonraki akademilerde gelir; şimdilik isim ve contract ile ayrım görünür tutulur.

**Bütün nesneyi geçme:** Fonksiyon büyük bir `user` nesnesinden yalnız `id` okur. Caller gereksiz alanlara ve mutation riskine bağlanabilir. Yalnız gerekli ID'yi almak daha dar contract olabilir. Ancak ID'den başka veriye yakın gelecekte ihtiyaç duyulması değil, mevcut sorumluluk karar verir.

**Birbirine bağlı parametreler:** `start` ve `end` ayrı değerlerdir fakat `start <= end` invariant'ı paylaşır. Contract ilişkisel kısıtı açıklamalıdır. İleri aşamada range modeli düşünülebilir.

**Boolean sürüsü:** Üç boolean sekiz teorik birleşim üretir; bazıları anlamsız olabilir. Açık bir mode veya durum modeli geçerli kombinasyonları daha iyi temsil edebilir. Bu karar C18'de derinleşecektir.

Koku bulduğunuzda doğrudan refactor etmeyin. Şu kanıtları toplayın: caller sayısı, gerçek argüman örnekleri, parameter kullanım noktaları, contract maddesi, test kapsamı ve değişim geçmişi. Sonra küçük dönüşüm yapın.

### Aynı nesnenin iki parametreye verilmesi: aliasing

Aliasing, iki farklı adın aynı nesneye erişmesi durumudur:

```js
function updatePair(left, right) {
  left.value += 1;
  right.value *= 2;
}

const item = { value: 3 };
updatePair(item, item);
console.log(item.value); // 8
```

İlk işlem değeri 4, ikinci işlem aynı nesnedeki değeri 8 yapar. Caller iki ayrı object gönderdiğini varsayan bir contract ile aynı object gönderebiliyorsa sonuç şaşırtıcı olabilir.

```js
const first = { value: 3 };
const second = { value: 3 };
updatePair(first, second);

console.log(first.value); // 4
console.log(second.value); // 6
```

İki çağrı aynı görünür türde argümanlar kullanır, fakat object identity ilişkisi farklıdır. Fonksiyon aynı nesnenin iki role verilmesini desteklemiyorsa bu bir ön koşul olarak yazılmalı veya implementation güvenli hâle getirilmelidir. Bu chapter identity teorisini derinleştirmez; mutation contract'ında alias riskini görmeyi öğretir.

### Default parameter karar tablosu

Default davranışını “değer yoksa kullanılır” diye ezberlemek sınırları gizler. Açık tablo:

| Çağrı | `multiplier` değeri | Default çalışır mı? |
|---|---:|---|
| `multiply(5)` | 1 | Evet |
| `multiply(5, undefined)` | 1 | Evet |
| `multiply(5, null)` | `null` | Hayır |
| `multiply(5, 0)` | 0 | Hayır |
| `multiply(5, false)` | `false` | Hayır |
| `multiply(5, "")` | `""` | Hayır |

Default parameter caller'ın açıkça verdiği `null` veya 0 değerini “boş” kabul etmez. Bu doğru davranıştır; 0 gerçek bir çarpan olabilir. Uygulama `multiplier = multiplier || 1` kullanırsa 0 yanlışlıkla 1 olur. Nullish coalescing gibi araçlar C07'de görülebilir, fakat contract yine hangi değerlerin “eksik” sayıldığını açıklamalıdır.

Varsayılan başka parametreye bağlı olabilir:

```js
function createRange(start, end = start + 10) {
  return { start, end };
}
```

Parametreler soldan sağa bağlandığı için önceki parametre default ifadesinde kullanılabilir. Bu kolaylık contract'ı karmaşıklaştırıyorsa açık çağrı daha iyi olabilir.

Default object veya array her çağrıda yeniden değerlendirilebilir:

```js
function createOptions(options = {}) {
  options.created = true;
  return options;
}
```

Her eksik çağrı kendi yeni object değerini alır. Buna rağmen mutation contract'ı açık olmalıdır. Varsayılanların scope ayrıntıları C15'e bırakılır.

### Parametre yeniden atama neden kafa karıştırabilir?

```js
function normalizeScore(score) {
  score = Math.max(0, Math.min(100, score));
  return score;
}
```

Bu kod dış değişkeni değiştirmez; yalnız yerel parameter binding'i yeniden atar. Teknik olarak doğrudur. Ancak parameter artık “caller'ın sağladığı ham değer” ile “normalleştirilmiş değer” rollerini aynı isimde taşır. Debug sırasında giriş değerini kaybetmek istenmeyebilir.

```js
function normalizeScore(score) {
  const normalizedScore = Math.max(0, Math.min(100, score));
  return normalizedScore;
}
```

İkinci sürüm ham ve dönüştürülmüş değeri ayırır. Bu evrensel stil zorunluluğu değildir; dönüşümün anlamlı ara aşaması varsa yeni isim reasoning'i kolaylaştırır.

### Object mutation için önce/sonra sözleşmesi

Şu fonksiyon bir task'ı güncelliyor:

```js
function completeTask(task) {
  task.completed = true;
  return task;
}
```

Contract soruları:

- Girdi object olmalı mı?
- `completed` alanı önceden yoksa oluşturulur mu?
- Diğer alanlar korunur mu?
- Aynı object mi döner, yeni object mi?
- Donmuş object veya getter davranışı ne olur?
- Return gerekli mi, mutation zaten output mu?

Başlangıç kapsamı için contract şöyle olabilir: “Mutable task object alır; aynı object'in `completed` alanını true yapar; diğer own data alanlarını değiştirmez; aynı object referansını döndürür.” Bu güçlü ve test edilebilir bir vaattir.

Immutable alternatif:

```js
function createCompletedTask(task) {
  return { ...task, completed: true };
}
```

Bu sürüm yeni object döndürür, caller'ın object'ini doğrudan değiştirmez. Shallow copy iç içe nesneleri derin kopyalamaz; bu ayrıntı C17-C18'de işlenir. İki tasarım da bağlama göre geçerli olabilir.

### Return sonrasında yürütme

`return` çalıştığı anda fonksiyonun kalan gövdesi o çağrı için yürütülmez:

```js
function classify(number) {
  if (number < 0) {
    return "negative";
  }

  return "non-negative";
  console.log("Bu satır erişilemez");
}
```

Erişilemez kod, yanlış kontrol akışı veya eski implementation kalıntısı olabilir. Linter yardımcı olabilir. İnsan contract incelemesi her return yolunun neyi garanti ettiğini ve hangi gerekli etkinin atlanmadığını kontrol eder.

Çok erken return gerekli cleanup veya audit işlemini atlayabilir. C14 basit synchronous utility'lerle sınırlıdır; kaynak yönetimi sonraki modüllerdedir. Yine de return kanalının kontrol akışı olduğunu unutmayın.

### Return değeri hemen nasıl kullanılır?

Dönüş değeri birçok caller bağlamında kullanılabilir:

```js
const total = calculateTotal(20, 3); // Atama
console.log(calculateTotal(20, 3)); // Başka çağrıya argüman

if (isEligible(75)) { // Koşul ifadesi
  console.log("Uygun");
}

const finalPrice = applyTax(calculateSubtotal(20, 3), 0.2); // Composition
```

Fonksiyon print yapsaydı bu kullanımların hiçbiri aynı şekilde mümkün olmazdı. Return, sonucu programın ifade sistemine dâhil eder.

### Multiple result için tasarım seçenekleri

Bir fonksiyon quotient ve remainder üretsin:

```js
function divideWithRemainder(dividend, divisor) {
  if (divisor === 0) {
    throw new RangeError("Bölen sıfır olamaz");
  }

  return {
    quotient: Math.trunc(dividend / divisor),
    remainder: dividend % divisor,
  };
}
```

Adlandırılmış object alanları caller için okunabilir:

```js
const result = divideWithRemainder(17, 5);
console.log(result.quotient); // 3
console.log(result.remainder); // 2
```

Array de döndürülebilir, fakat konumsal anlam çağıranda hatırlanmalıdır. İki değer doğal ve yaygın sıraya sahipse tuple-benzeri array uygun olabilir; adlandırılmış alanlar çoğu beginner contract'ında daha açıktır.

Birden fazla global değişkene yazmak:

```js
let latestQuotient;
let latestRemainder;
```

gizli output, çağrı sırası ve eşzamanlı kullanım sorunu doğurur. Tek return value içinde yapılandırılmış sonuç daha izlenebilirdir.

### Command–query sezgisini doğru kullanma

Bir query değer döndürür ve mümkün olduğunca dış durumu değiştirmez. Bir command değişiklik yapar. Bu ayrım şu soruyu sordurur: “Bu fonksiyonun adı değer soruyor gibi görünürken neden dosya yazıyor?”

```js
function getUserCount(users) {
  analytics.countReads += 1;
  return users.length;
}
```

Sonuç doğru olsa bile gizli analytics etkisi test ve kullanım beklentisini değiştirir. Etki gerekli ise contract'ta açık olmalı veya dış instrumentation katmanında ele alınmalıdır.

Katı uygulama her zaman mümkün değildir. `createOrder` sistemi değiştirir ve oluşturulan ID'yi döndürür. Bu bir command sonucudur. Sezgi, return ile effect'i karıştırmamak ve isimde/contract'ta ikisini açık göstermektir.

### Interface refactoring'de geçiş stratejisi

Bir parametreyi kaldırınca bütün çağıranlar aynı anda değişmeyebilir. Küçük repository'de atomik değişiklik yapılır: Fonksiyon ve caller'lar tek değişiklik kümesinde güncellenir, testler çalışır. Büyük sistemde deprecation ve adapter gerekebilir; bu chapter ileri migration tasarlamaz.

Örnek:

```js
// Eski
calculatePrice(price, quantity, subtotal)

// Yeni
calculatePrice(price, quantity)
```

Geçiş kontrolü:

- `subtotal` kullanan gerçek caller var mı?
- Caller subtotal'ı başka rounding politikasıyla mı hesaplıyor?
- Yeni fonksiyon sonucu tüm eski contract testlerinde aynı mı?
- Telemetry veya log bu argümana dayanıyor mu?
- Belgeler ve AI örnek prompt'ları güncellendi mi?

### Data-flow diyagramı ile review

Kod incelemesinde yalnız function body değil, değerlerin kaynak ve hedeflerini çizin:

```text
CLI text
  ↓ parseQuantity
number | failure
  ↓ calculateSubtotal(price, quantity)
subtotal
  ↓ applyDiscount(subtotal, rate)
discounted total
  ↓ formatMoney
display text
  ↓ console.log
```

Her okta contract soruları vardır: Önceki output sonraki input için geçerli mi? Failure nasıl ilerliyor? Hangi aşama effect yapıyor? Birim korunuyor mu? Bu küçük görsel, gizli global geçişi ve yanlış katmandaki print'i fark ettirir.

### Debug protokolü: yanlış sonuç hangi kanalda?

Bir fonksiyon “sonuç vermiyor” denildiğinde önce kanal ayrımı yapın:

1. Fonksiyon çağrıldı mı?
2. Argüman ifadeleri hangi değerleri üretti?
3. Parametre binding'leri beklenen değerleri aldı mı?
4. Geçerli yol `return` noktasına ulaştı mı?
5. Dönen değer çağıran tarafından capture edildi mi?
6. Yalnız print mi gözleniyor?
7. Sonuç global/mutation kanalına mı yazıldı?
8. Caller dönen değeri yanlış tür veya birimde mi yorumladı?

Bu sıra, “fonksiyon bozuk” gibi geniş varsayımı test edilebilir noktalara böler.

### Parametre değişikliklerinin test matrisi

Interface için yalnız fonksiyon gövdesini test etmeyin:

| Risk | Test |
|---|---|
| Yanlış sıra | İki farklı anlamdaki aynı tür değer |
| Eksik argüman | Her required position için omission |
| Fazla argüman | Yan etkili ekstra expression |
| Default | omitted, `undefined`, `null`, 0, false, empty string |
| Mutation | Object before/after ve identity |
| Aliasing | Aynı object iki role verilir |
| Return yolu | Her conditional path |
| Result shape | Başarı ve failure alanları |
| Composition | Stage boundary input/output |
| Caller migration | Bütün çağrı noktaları |

Bu tablo `V01-LO021` için ölçülebilir kanıt üretir.

### Öğrenme çalışması: arayüzü yeniden kurma

Bir chapter örneğini ezberlemek yerine şu transfer görevini yapın:

1. Günlük hayattan tek davranış seçin: sıcaklık dönüştürme, süre biçimlendirme veya sepet toplamı.
2. Gerekli input'ları yazın.
3. Bilerek bir unused, bir duplicate ve bir hidden input ekleyin.
4. İlk interface'i test edin.
5. Sorunları sınıflandırıp küçük interface'e dönüştürün.
6. Return değerini başka fonksiyona compose edin.
7. Önce/sonra data-flow diyagramını karşılaştırın.

Kendi hatalı interface'inizi üretip düzeltmek, yalnız hazırlanmış doğru örneği okumaktan daha güçlü öğrenme kanıtıdır.

### Rest ile spread sözdizimini karıştırmamak

Üç nokta aynı görünse de bulunduğu bağlama göre farklı rol oynar. Fonksiyon tanımındaki rest parameter kalan argümanları toplar:

```js
function sum(first, ...remaining) {
  let total = first;

  for (let index = 0; index < remaining.length; index += 1) {
    total += remaining[index];
  }

  return total;
}
```

Çağrıdaki spread syntax ise iterable değerleri ayrı argümanlara açar:

```js
const values = [1, 2, 3];
const total = sum(...values);
```

Rest “topla”, spread “aç” yönünde düşünülebilir. Bu chapter spread'i ayrıntılı öğretmez; aynı simgenin parameter ile argument tarafında ters veri hareketi oluşturduğunu ayırır.

Rest kullanıldığında element contract'ı hâlâ gereklidir. `sum(...numbers)` her kalan değerin sonlu number olmasını vaat etmiyorsa string concatenation veya `NaN` sızabilir. Variable arity, validation sorumluluğunu ortadan kaldırmaz.

### Options object ve varsayılanlar

Bir fonksiyonun birçok isteğe bağlı ve aynı sorumluluğa ait seçeneği varsa named options çağrıyı okunur yapabilir:

```js
function formatPrice(
  amount,
  options = {},
) {
  const currency = options.currency ?? "TRY";
  const includeSymbol = options.includeSymbol ?? true;
  // Biçimlendirme uygulanır.
  return `${includeSymbol ? currency : ""} ${amount}`.trim();
}
```

Çağrı:

```js
formatPrice(100, {
  currency: "EUR",
  includeSymbol: false,
});
```

Bu tasarım positional boolean'ı adlandırır. Fakat yeni sorunlar oluşturabilir:

- Bilinmeyen option sessizce kabul ediliyor mu?
- Object `null` olabilir mi?
- Varsayılanlar hangi değerlerde çalışır?
- Fonksiyon options object'ini değiştiriyor mu?
- Tüm seçenekler gerçekten aynı sorumluluğa mı ait?

Options object çözüm değil, başka bir contract biçimidir. C18'de data modeling ayrıntılandırılır.

### Boolean argümanın çağrı ergonomisi

```js
saveReport(report, true, false);
```

Bu çağrı iki boolean'ın anlamını gizler. Named option daha okunur olabilir:

```js
saveReport(report, {
  overwrite: true,
  createBackup: false,
});
```

Ancak asıl soru iki davranışın aynı fonksiyonda olup olmamasıdır. `overwrite` ve `createBackup` tek save operation'ın seçenekleri olabilir. `preview` flag'i ise tamamen farklı output contract oluşturabilir. Interface review, sözdizimsel estetiğin ötesinde sorumluluk sınırını inceler.

### Parametre sayısı ve test kombinasyonları

Her bağımsız boolean parameter iki davranış durumu ekler. Üç bağımsız boolean sekiz, dört boolean on altı teorik kombinasyon oluşturur. Tüm kombinasyonlar uygulanabilir olmayabilir; yine de etkileşim reasoning yükünü artırır.

Number veya enum parametrelerin alanları daha büyüktür. Testler her değeri denemez; equivalence classes ve boundaries seçer. Ancak parametre listesine her yeni bağımsız karar eklendiğinde test matrisinin hangi yeni boyutu kazandığını kaydedin.

Bu, “parameter sayısını metrikle cezalandır” anlamına gelmez. Bir input modelinin karmaşıklığını görünür kılar. Bazı kararlar upstream validation ile çözülebilir; bazıları ayrı function contract'a ayrılabilir.

### Return type değil return anlamı

İki fonksiyon number döndürebilir fakat sonuçların anlamı farklıdır:

```js
calculateDiscountRate() // 0 ile 1 arası oran
calculatePercentage() // 0 ile 100 arası sayı
```

İkisi de number olduğu için yanlış composition sözdizimsel olarak çalışabilir. Contract birim ve domain'i açıklar. İsimlendirme, belge ve test semantic type rolü görür. TypeScript ve daha ileri domain typing Akademi 11'de öğrenilecektir; temel düşünce şimdiden kurulmalıdır.

### Output'u capture etmemek

Fonksiyon doğru değer döndürürken caller onu kullanmayabilir:

```js
calculateTotal(20, 3);
```

Çağrı 60 üretir fakat değer atanmıyor, başka çağrıya verilmiyor veya return edilmiyorsa kaybolur. “Fonksiyon return etmiyor” şikâyetinin kök nedeni caller'ın result'ı capture etmemesi olabilir.

Debug sırasında hem callee return noktasını hem call-site kullanımını inceleyin:

```js
const total = calculateTotal(20, 3);
console.log(total);
```

Bu ayrım, output üretimi ile output tüketimini iki contract sorumluluğu olarak görmeyi sağlar.

### Failure result composition

Bir parse fonksiyonu result object döndürüyorsa sonraki aşama başarıyı kontrol etmelidir:

```js
function parseQuantity(text) {
  const quantity = Number(text);

  if (!Number.isInteger(quantity) || quantity < 0) {
    return { ok: false, value: null, error: "invalid-quantity" };
  }

  return { ok: true, value: quantity, error: null };
}

const parsed = parseQuantity("3");

if (parsed.ok) {
  const total = calculateTotal(20, parsed.value);
  console.log(total);
}
```

`parseQuantity("x").value` doğrudan calculate aşamasına verilirse `null` sızabilir. Composition yalnız happy-path output'u bağlamak değildir; failure branch'i de yönlendirmektir.

### Code review yorumunu kanıta çevirmek

Zayıf yorum: “Çok parameter var, object yap.”

Güçlü yorum:

> `percentage` değeri `completed/total` üzerinden aynı fonksiyon içinde
> türetiliyor; üç caller'da da farklı veya yetkili bir değer taşımıyor. Bu
> duplicate input çelişki yaratabilir. Parametreyi kaldırıp mevcut normal ve
> rounding boundary testlerini koruyabilir miyiz?

İkinci yorum sorun, kanıt, öneri ve doğrulama ölçütü içerir. Profesyonel review, kişisel stil tercihinden ziyade contract riskini açıklar.

### AI ile iki aşamalı interface üretimi

AI'a tek seferde kod yazdırmak yerine iki aşama kullanın:

#### Aşama 1 — Interface analizi

- Gerekli data nedir?
- Hangi değer türetilebilir?
- Hangi varsayılan ürün kararıdır?
- Mutation var mı?
- Return ve failure shape nedir?
- Caller örnekleri nelerdir?

#### Aşama 2 — Implementation ve test

- Onaylı contract'ı değiştirmeden kod üret.
- Her parameter kullanımını contract maddesine bağla.
- Missing/extra/default/mutation vakalarını test et.
- Data-flow diagram ve call trace sun.

Model ikinci aşamada yeni varsayım eklerse durdurun. Sözleşme değişikliği yeniden insan kararına dönmelidir.

### Kendi interface kalitenizi puanlama

Her fonksiyona 0 veya 1 vererek şu kontrolü yapın:

- Tek sorumluluk açık mı?
- Her parameter gerekli mi?
- Gizli input yok mu?
- Konumsal anlam çağrıda anlaşılır mı?
- Default güvenli mi?
- Mutation contract açık mı?
- Return shape tutarlı mı?
- Print/return ayrımı açık mı?
- Failure pipeline'a uyuyor mu?
- Testler interface boundary'lerini kapsıyor mu?

Bu puan evrensel kalite metriği değildir. Eksik alanları review gündemine taşır. Kritik fonksiyonda tek bir “hayır”, örneğin gizli mutation, diğer dokuz “evet”ten daha önemli olabilir.

### Arayüz karar günlüğü

Bir interface'i sadeleştirirken yalnız son kodu saklamayın. Kısa karar günlüğü oluşturun:

| Karar | Önceki durum | Kanıt | Yeni durum | Risk |
|---|---|---|---|---|
| `username` kaldırıldı | Gövdede okunmuyordu | Bütün caller ve test araması | İki gerekli parametre kaldı | Gizli dynamic kullanım kontrol edildi |
| `percentage` kaldırıldı | Diğer değerlerden türetiliyordu | Üç caller aynı formülü kullanıyordu | Fonksiyon hesaplıyor | Yuvarlama politikası contract'a eklendi |
| Print ayrıldı | Hesap fonksiyonu konsola yazıyordu | Caller sonucu compose edemiyordu | Explicit return | Ana program print sorumluluğunu aldı |

Bu kayıt, “kod daha temiz görünüyor” yerine neden–kanıt–risk zinciri sunar. Bir sonraki geliştirici kaldırılan parametreyi rastgele geri eklemeden önce kararı anlayabilir.

Karar günlüğü uzun mimari belge olmak zorunda değildir. PR açıklamasında birkaç satır, test isimleri ve önce/sonra signature yeterli olabilir. Önemli olan contract değişip değişmediğinin ve caller migration'ının görünür olmasıdır.

### Öğrenci için açıklama sınavı

Bir arkadaşınıza şu üç kodu göstermeden açıklayın:

1. Eksik argument'in parameter değerini nasıl `undefined` yaptığı.
2. Nesne property mutation'ının neden dışarıdan görüldüğü fakat parameter reassignment'ın dış binding'i değiştirmediği.
3. Print edilen 60 ile return edilen 60'ın program için neden farklı kanallar olduğu.

Arkadaşınız açıklamanızdan doğru küçük örneği yazabiliyorsa zihinsel modeliniz aktarılabilir düzeydedir. Yanlış örnek yazıyorsa açıklamadaki eksik adımı bulun. Özellikle “referansla geçer” gibi kısa ama yanıltıcı ifadeyi daha kesin değer aktarımı diliyle düzeltin.

Son olarak aynı davranışı yeni alana taşıyın: ilerleme yüzdesi yerine kargo ücreti, kullanıcı adı yerine ürün kodu, report print yerine fatura formatı kullanın. Kavram yalnız örnek adları değiştiğinde değil, yeni contract sınırlarında da çalışıyorsa öğrenme gerçekleşmiştir.

Çalışma günlüğünüze tek bir başarısız tahmin ekleyin. Örneğin `null` değerinin default'u çalıştıracağını düşündüyseniz gerçek tabloyu, yanlış varsayımı ve düzeltilmiş kuralı yan yana yazın. Benzer biçimde object parameter'ı yeni object'e atamanın caller değişkenini değiştireceğini düşündüyseniz property mutation ile reassignment izlerini karşılaştırın. Yanlış zihinsel modeli görünür tutmak, aynı hatayı sonraki chapter'larda daha erken tanımanızı sağlar.

Bir interface'i tamamlanmış saymadan önce başka bir öğrencinin yalnız signature ve contract tablosunu okuyarak doğru normal, boundary ve invalid çağrıları üretmesini isteyin. Çağrı sırasını veya result kullanımını yanlış çıkarıyorsa sorun öğrencide olmak zorunda değildir; parameter isimleri, birimler, default politikası veya return shape yeterince açık olmayabilir. Arayüz kalitesi, yalnız yazarı değil bağımsız caller'ı doğru yönlendirebilme yeteneğiyle ölçülür.

Bu kanıtı repository çalışma notunda saklayın.

## Real World Examples

### İndirim hesabı

```js
function calculateDiscountedPrice(price, discountRate = 0) {
  if (!Number.isFinite(price) || price < 0) {
    throw new RangeError("Fiyat geçersiz");
  }

  if (!Number.isFinite(discountRate)
      || discountRate < 0
      || discountRate > 1) {
    throw new RangeError("İndirim oranı geçersiz");
  }

  return price * (1 - discountRate);
}
```

Default 0 güvenli ürün kararıysa anlamlıdır. `null` gönderildiğinde default çalışmaz; coercion sonucu 0 olabilir. Contract tür doğrulaması bunu açıkça yönetmelidir.

### Mesafe hesaplama ve birim

`calculateDistance(speed, duration)` isimleri birimi söylemez. Ekip contract'ta km/saat ve saat belirleyebilir veya isimleri `speedKilometersPerHour`, `durationHours` yapabilir. Metre/saniye değeri yanlışlıkla geçirilirse tür doğru fakat anlam yanlış olur. Type tek başına semantic contract değildir.

### Kullanıcı raporu

Yedi positional parametre yerine gerçek bir report request modeli kullanılabilir; fakat fonksiyon yalnız isim ve tamamlama yüzdesi kullanıyorsa bütün öğrenci kaydını almak coupling yaratır. Gereken en dar anlamlı veri seçilir.

### CLI hesaplama ile çıktı

`calculateAverage` değer döndürür, `formatAverage` metne çevirir, ana program `console.log` ile gösterir. Testler hesap ve formatı terminal etkisinden bağımsız doğrular. Veri akışı açıkça caller üzerinden geçer.

### Validation sonucu

Birden çok hata gerekiyorsa ilk hatada throw yerine tutarlı `{ ok, value, errors }` modeli seçilebilir. Caller sonucu print etmek, kullanıcıya göstermek veya loglamak konusunda bağımsızdır. Result shape her yolda aynı tutulur.

### Sipariş nesnesi mutation'ı

`applyDiscount(order, rate)` mevcut order'ı değiştiriyorsa contract bunu söylemelidir. `createDiscountedOrder(order, rate)` yeni değer döndürüyorsa kimlik ve mutation davranışı farklıdır. İsim, test ve caller beklentisi aynı tasarıma hizalanmalıdır.

### AI tarafından üretilen flag interface

`generateInvoice(data, true, false, true)` çağrısında boolean anlamları görünmez. AI ayrı options isimleri veya ayrı davranış fonksiyonları önerebilir. Mühendis seçeneklerin gerçekten tek sorumluluğun varyasyonları mı, farklı use-case'ler mi olduğunu ürün contract'ına göre belirler.

## Common Mistakes

### Parametre ve argümanı karıştırmak

Belirti açıklamanın çağrı ile tanım arasında belirsizleşmesidir. Çözüm: “Tanımda parameter, çağrıda argument, çalışma sırasında parameter binding'in değeri” dilini kullanın.

### Yanlış argüman sırası

İki number türü sözdizimsel olarak uyumlu olsa da semantic anlam ters olabilir. Bağlama tablosu, açık isim ve anlamlı model kullanın.

### Eksik argümanın hata vereceğini sanmak

JavaScript eksik parametreyi `undefined` bırakabilir; hata sonraki hesapta `NaN` olarak ortaya çıkar. Contract sınırında doğrulayın veya anlamlı default kullanın.

### Default'u falsy değerlerde beklemek

`null`, 0, `false` ve boş metin default'u tetiklemez. `undefined` davranışıyla ayrı test edin. `value || default` kullanımı 0 gibi geçerli değeri yanlışlıkla değiştirir.

### Fazla argümanın değerlendirilmediğini sanmak

Adlandırılmış parametre olmasa bile argüman ifadesi çalışabilir. Yan etkili örnekle sırayı izleyin.

### JavaScript'i pass-by-reference sanmak

Property mutation görünür diye dış binding yeniden atanmaz. Primitive reassignment, object property mutation ve object parameter reassignment'ı üç ayrı deneyle karşılaştırın.

### Kullanılmayan parametre taşımak

Arayüz yanlış bağımlılık sinyali verir. Caller gereksiz değer üretir. Kullanım ve contract kaynağını doğruladıktan sonra kaldırın.

### Türetilebilir değeri duplicate taşımak

İki truth source çelişebilir. Otorite ve hesap maliyetini belirleyip birini seçin.

### Uzun listeyi rest ile gizlemek

`...args` isim ve anlam kaybını çözmez. Rest, aynı anlamdaki variable arity için kullanılmalıdır.

### Print'i return sanmak

Konsolda doğru sonuç görünürken caller `undefined` alır. Hesap ve sunum kanalını ayırın.

### Tutarsız result shape

Caller her yolda farklı tür kontrol eder. Tek model veya açık failure stratejisi kullanın.

### Bileşimde contract uyumunu kontrol etmemek

Bir output `null` olabilirken sonraki input string bekleyebilir. Pipeline boundary testleri ekleyin.

## Best Practices

### Her parametreyi gerekçelendirin

Kullanım satırı göstermek yeterli değildir; parametrenin contract'taki davranışı neden değiştirdiğini açıklayın.

### Necessary, derived, duplicate ve hidden ayrımını yapın

Interface review'da bu dört sınıfı tabloya koyun. Hidden input'u görünürleştirirken unnecessary input eklemeyin.

### Gerçek kavramları modelleyin

Uzun listeyi rastgele object'e koymak yerine address, money veya range gibi alan bütünlüğü varsa anlamlı model kullanın. C18'de derinleştirin.

### Default'u güvenli ve açık tutun

Default caller hatasını gizlememeli. `undefined`, `null`, 0 ve boş metin testleri zorunludur.

### Mutation'ı isim ve contract'ta gösterin

Girdi değişiyorsa hangi alanın nasıl değiştiğini belirtin. Alternatif new-value return tasarımını trade-off ile değerlendirin.

### Hesabı explicit return ile iletişim kurun

Print, log veya global durum, return yerine geçmez. Sunum kararı uygun caller'a bırakılır.

### Tutarlı result shape kullanın

Başarı ve failure alanları her yolda öngörülebilir olmalıdır. Caller'ın gereksiz type branching'ini azaltın.

### Bileşimde input/output uyumunu test edin

Her aşamanın result domain'i sonraki aşamanın accepted input domain'i içinde olmalıdır veya arada açık adapter/validation gerekir.

### Interface değişikliğini caller'larla birlikte doğrulayın

Fonksiyon testi tek başına yeterli değildir; çağrı noktaları ve entegrasyon davranışı korunmalıdır.

### AI önerisinden interface rationale isteyin

Her parameter, default ve result alanı için gerekçe, risk ve test talep edin. Kendi contract kararınızla karşılaştırın.

## Hands-on Exercise

### Senaryo: Hidden output ve gereksiz input refactoring'i

Başlangıç kodu bilinçli sorunlar içerir:

```js
let latestSummary = "";

function createProgressSummary(
  studentName,
  completed,
  total,
  percentage,
  locale,
  shouldPrint,
  unusedTheme,
) {
  const calculatedPercentage = (completed / total) * 100;
  const finalPercentage = percentage || calculatedPercentage;
  latestSummary = `${studentName}: %${Math.round(finalPercentage)}`;

  if (shouldPrint) {
    console.log(latestSummary);
  }
}
```

### Görev 1: Girdi sınıflandırma

Her parametreyi necessary, unused, derived, duplicate veya davranış seçen flag olarak sınıflandırın. `percentage` ile calculated value çatışmasını, `locale` kullanımını, `unusedTheme` durumunu ve `shouldPrint` sorumluluğunu açıklayın.

### Görev 2: Contract kararı

Şunları implementation öncesi belirleyin:

- `studentName` boş olabilir mi?
- `completed` ve `total` hangi aralıkta?
- `total=0` ne üretir?
- Yuvarlama nasıl yapılır?
- Format fonksiyonu print yapar mı, string mi döndürür?
- Global `latestSummary` gerekli mi?

### Görev 3: Küçük interface

Hesabı ve formatı ayırın:

```js
function calculateCompletionPercentage(completed, total) {
  // Contract'a göre doğrula ve değer döndür.
}

function formatProgressSummary(studentName, percentage) {
  // Metin döndür; yazdırma yapma.
}
```

Gerekirse üçüncü orkestrasyon fonksiyonu iki sonucu bileştirsin.

### Görev 4: Parameter–argument trace

`createProgressSummary("Ada", 3, 4)` çağrısı için argüman değerlendirme, parameter binding, ara return ve final result adımlarını tabloya yazın.

### Görev 5: Primitive ve object deneyi

Yüzdelik number parametresini içeride yeniden atayın; dış değişkenin değişmediğini gösterin. Sonra student object property mutation örneği yazın ve farkı açıklayın. Üretim çözümünde hangi contract'ı seçtiğinizi belirtin.

### Görev 6: Test matrisi

En az 16 test:

- normal 3/4;
- 0/4;
- 4/4;
- total 0;
- completed negatif;
- completed total'dan büyük;
- string sayı;
- `NaN`;
- boş ad;
- whitespace ad;
- yuvarlama sınırları;
- print etkisinin olmaması;
- global state değişmemesi;
- tutarlı return type;
- pipeline sonucu;
- önceki davranışla bilinçli fark.

### Görev 7: AI audit

AI'dan interface'i sadeleştirmesini isteyin. Modelin kaldırdığı/tuttuğu her parametre için gerekçesini denetleyin. `percentage || calculatedPercentage` ifadesinin yüzde 0'ı nasıl etkileyebileceğini sorun. En az bir AI kararını testle kabul veya reddedin.

### Ölçülebilir teslim

- Önce/sonra interface tablosu.
- Tam function contract'ları.
- Çalışan küçük fonksiyonlar.
- En az 16 otomatik test.
- Parameter–argument ve return pipeline izi.
- Primitive/object mutation karşılaştırması.
- AI denetim kaydı.

## Reflection Questions

1. Parameter ile argument ayrımını kendi çağrınız üzerinden açıklayın.
2. Konumsal bağlama hangi durumda risklidir?
3. Eksik argüman neden her zaman hemen hata üretmez?
4. Fazla argüman kullanılmasa bile hangi davranışı gösterebilir?
5. Default parameter hangi değerlerde çalışır, hangilerinde çalışmaz?
6. Primitive reassignment dış değişkeni neden değiştirmez?
7. Nesne property mutation neden caller tarafından görünür?
8. “JavaScript pass-by-reference” ifadesi neden yanıltıcıdır?
9. Unused, derived ve duplicate input farkı nedir?
10. Küçük interface ile hidden dependency arasındaki dengeyi açıklayın.
11. Long parameter list ne zaman anlamlı olabilir?
12. Object parameter ne zaman gerçek model, ne zaman torbadır?
13. Print ile return veri akışı nasıl farklı yönlere gider?
14. Result shape tutarsızlığı caller'ı nasıl zorlaştırır?
15. Composition için yalnız iç içe çağrı neden yeterli değildir?
16. Command-query sezgisinin katı kural olmadığı bir örnek verin.
17. AI'ın gereksiz parameter eklediğini nasıl kanıtlarsınız?
18. C15'te scope ve side effect öğrenimi bu modeli nasıl genişletecek?

En az beş yanıtı kod, bağlama tablosu veya veri akışı diyagramıyla destekleyin. Bir hafta sonra 5, 7, 9, 13 ve 15. soruları notlara bakmadan yanıtlayın.

## Chapter Summary

Parametre, fonksiyon tanımındaki girdi konumudur; argüman, çağrı sırasında bu konuma değer sağlayan ifadedir. JavaScript argüman ifadelerini soldan sağa değerlendirir ve değerleri konumlarına göre parametrelere bağlar.

Eksik argüman ilgili parametreyi `undefined` bırakabilir; fazla argüman normal named parameter'a bağlanmasa da ifadesi değerlendirilir. Default parameter yalnız argüman yoksa veya `undefined` ise çalışır; `null`, 0, `false` ve boş metinde çalışmaz.

JavaScript değer aktarır. Primitive parametreyi yeniden atamak caller binding'ini değiştirmez. Nesne değeri bir referans olduğu için property mutation aynı nesneyi gören caller tarafından fark edilir. Parametreyi yeni nesneye yeniden atamak dış binding'i değiştirmez.

Her parametre bir bağımlılıktır. Necessary input tutulur; unused input kaldırılır; derived veya duplicate input için otorite ve hesap trade-off'u değerlendirilir; hidden input contract'ta görünürleştirilir. Long list evrensel sayısal eşikle değil, sorumluluk, sıra riski ve gerçek domain modeliyle incelenir.

Return value çağırana explicit sonuç taşır. Print konsola etki yapar, mutation dış durumu değiştirir. Üçü farklı kanaldır. Eksik return geçerli yolda `undefined` oluşturabilir. Tutarlı result shape caller'ın güvenilir kullanımını sağlar.

Data-flow pipeline'da bir function return değeri sonraki function argument'i olur. Composition için output contract ile input contract uyumlu olmalıdır. Failure ve effect kanalları ayrıca değerlendirilir.

Interface refactoring; caller listesi, contract testleri, input sınıflandırması, küçük değişiklik ve bütün caller doğrulamasıyla yapılır. AI her parameter, default ve result alanını gerekçelendirmeli; nihai karar test ve sözleşme kanıtıyla insan tarafından verilmelidir.

## Key Takeaways

- Parameter tanıma, argument çağrıya aittir.
- Argüman ifadeleri soldan sağa değerlendirilir.
- Konumsal bağlama semantic sıra hatası oluşturabilir.
- Eksik argüman parametreyi `undefined` bırakabilir.
- Fazla argüman ifadesi yine değerlendirilebilir.
- Default yalnız eksik veya `undefined` argümanda çalışır.
- JavaScript değeri aktarır; object value bir referanstır.
- Property mutation ile parameter reassignment aynı değildir.
- Her parametre gerekçelendirilmesi gereken bağımlılıktır.
- Unused, derived, duplicate ve hidden input farklı sorunlardır.
- Küçük interface gerekli veriyi saklamaz.
- Rest parameter long-interface problemini otomatik çözmez.
- Return çağırana, print konsola, mutation dış duruma gider.
- Bütün geçerli yollar tutarlı return contract sağlamalıdır.
- Multiple results tek tutarlı modelle döndürülmelidir.
- Composition uyumlu input/output ve failure contract ister.
- Interface refactoring caller'larla birlikte doğrulanır.
- AI'ın “clean” arayüz iddiası test kanıtı değildir.

## Further Reading

Önce [MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), [Parameter Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Parameter), [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) ve [Return Values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values) örneklerini çalıştırın. Ardından [ECMAScript Parameter Lists](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-parameter-lists), [Argument Lists](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-argument-lists) ve [Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement) normatif adımlarını inceleyin.

Dil farklarını görmek için [Python Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions), [Oracle Passing Information to a Method](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html), [Go Function Types](https://go.dev/ref/spec#Function_types) ve [Rust Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html) kaynaklarına bakın. Bu davranışları JavaScript'e kopyalamayın; hangi kavramın ortak, hangi mekanizmanın dile özel olduğunu not edin.

Arayüz trade-off'ları için [Introduce Parameter Object](https://refactoring.com/catalog/introduceParameterObject.html), [Remove Flag Argument](https://refactoring.com/catalog/removeFlagArgument.html), [Replace Query with Parameter](https://refactoring.com/catalog/replaceQueryWithParameter.html) ve [Replace Parameter with Query](https://refactoring.com/catalog/replaceParameterWithQuery.html) karşıt yönlü dönüşümleri birlikte okuyun. Bir tekniği evrensel reçete olarak değil, ön koşulları olan seçenek olarak değerlendirin.

C15 scope, lifetime ve side effect; C16 decomposition/reuse; C17-C18 structured data ve domain modelleme konularını derinleştirecektir.

## References

1. Ecma International. [ECMAScript — Parameter Lists](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-parameter-lists). Living Standard, erişim: 23 Temmuz 2026.
2. Ecma International. [ECMAScript — Argument Lists](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-argument-lists). Erişim: 23 Temmuz 2026.
3. Ecma International. [ECMAScript — Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement). Erişim: 23 Temmuz 2026.
4. MDN Web Docs. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). Erişim: 23 Temmuz 2026.
5. MDN Web Docs. [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters). Erişim: 23 Temmuz 2026.
6. MDN Web Docs. [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters). Erişim: 23 Temmuz 2026.
7. ACM, IEEE-CS ve AAAI. [Computer Science Curricula 2023 — FPL](https://csed.acm.org/wp-content/uploads/2023/09/FPL-Version-Gamma.pdf). 2023.
8. Python Software Foundation. [Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions). Erişim: 23 Temmuz 2026.
9. Oracle. [Passing Information to a Method or a Constructor](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html). Erişim: 23 Temmuz 2026.
10. Fowler, M. [Refactoring Catalog](https://refactoring.com/catalog/). Erişim: 23 Temmuz 2026.
