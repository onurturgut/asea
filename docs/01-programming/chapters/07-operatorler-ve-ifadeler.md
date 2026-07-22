---
document_type: "chapter"
chapter_id: "V01-C07"
volume_id: "V01"
title: "Operatörler ve İfadeler"
slug: "operatorler-ve-ifadeler"
version: "0.1.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "6-8 hours"
prerequisites: ["V01-C05", "V01-C06"]
learning_outcomes: ["V01-LO011"]
related_lab_ids: ["V01-C07-L01"]
related_assessment_ids: ["V01-C07-AS01"]
next_chapter_id: "V01-C08"
language: "tr"
last_updated: "2026-07-22"
---

# Operatörler ve İfadeler

## Learning Objectives

Bu chapter sonunda:

- ifade (Expression), işleç (Operator) ve işlenen (Operand) kavramlarını ayırabilecek;
- arithmetic, comparison, equality ve assignment operators’ın amaçlarını sınıflandırabilecek;
- bir compound expression’ın implicit grouping’ini precedence ve associativity ile kurabilecek;
- operand types, conversions ve intermediate values içeren evaluation table üretebilecek;
- `+` operator’ının Number addition ile String concatenation davranışını ayırabilecek;
- strict equality ile coercion yapan loose equality arasındaki farkı açıklayabilecek;
- floating-point, `NaN`, division, remainder ve BigInt boundaries’i tanıyabilecek;
- ambiguous veya dense expression’ı explicit grouping/named intermediates ile iyileştirebilecek;
- AI’nin verdiği sonucu resmî kurallar ve executable trace ile denetleyebileceksin.

`V01-LO011` başarı kanıtı yalnız doğru final output değildir. İfadenin grouping’ini,
operandların type/value’larını, uygulanan conversion’ı, her ara sonucu ve clearer rewrite’ı
göstermen gerekir.

## Prerequisites

[C05](./05-degerler-ve-veri-turleri.md) üzerinden value, type, representation, explicit/
implicit conversion ve precision riskini; [C06](./06-degiskenler-ve-durum.md) üzerinden
binding, assignment ve state table modelini bilmelisin.

Başlangıç kontrolü: `"5" + 2`, `"5" - 2`, `total = total + 1` için operand types,
operation ve expected result yaz. Sonuçları yalnız ezberden söylüyor fakat nedenini type ve
conversion ile açıklayamıyorsan C05 conversion bölümünü tekrar et.

## Estimated Study Time

| Çalışma | Süre |
|---|---:|
| Ön bilgi ve prediction | 20 dakika |
| Ana anlatım/not çıkarma | 180–220 dakika |
| Expression tree/evaluation table | 75–90 dakika |
| Alıştırma ve laboratuvar | 90–120 dakika |
| Quiz, reflection ve tekrar | 60 dakika |
| **Toplam** | **6–8 saat** |

## Introduction

Şu iki satır aynı sayıları kullanır:

```js
console.log(3 + 4 * 5);   // 23
console.log((3 + 4) * 5); // 35
```

Bilgisayar ilk satırı “soldan sağa gördüğüm her şeyi yaparım” diye okumaz. Language grammar,
`*` operator’ını `+` operator’ından daha sıkı gruplar. Parentheses ikinci expression’ın
grouping’ini değiştirir.

Şimdi daha şaşırtıcı örnek:

```js
console.log("5" + 1); // "51"
console.log("5" - 1); // 4
```

Birinci `+`, operandlardan biri String olduğunda concatenation üretir. `-` ise numeric
conversion ister. Aynı görünen values, farklı operator semantics altında farklı sonuç verir.

Gerçek projelerde expressions fiyat, vergi, permission, pagination, retry limit ve data
transformation üretir. Tek bir gizli conversion veya yanlış grouping; para, authorization
veya state bug’ına dönüşebilir. Bu nedenle profesyonel geliştirici expression’a “sonuç kaç?”
diye değil şu sırayla bakar:

1. Parse/grouping nedir?
2. Operands hangi sırada değerlendirilir?
3. Her operandın value ve type’ı nedir?
4. Operator hangi semantics/conversion’ı uygular?
5. Intermediate result ve type nedir?
6. Effect var mı?
7. Reader intent daha açık yazılabilir mi?

## Core Concepts

### İfade bir değer üretir

**İfade**, değerlendirildiğinde bir value üreten ve bazı durumlarda effect de oluşturabilen
code parçasıdır. Literal `42`, binding read `price`, arithmetic `price * quantity`, function
call ve assignment birer expression olabilir. `const total = price * quantity;` satırında
declaration statement içinde `price * quantity` expression’ı vardır.

Expression ile statement aynı değildir. Expression value üretir; statement program akışında
bir action/declaration yapısıdır. Dillerin sınırları farklı olabilir; JavaScript’te assignment
itself bir value üretir, fakat bunu dense chains için kullanmak readability riski taşır.

### Operator ve operand

Operator operation’ı; operand operation’ın uygulandığı value/expression’ı gösterir:

```text
price * quantity
  ↑       ↑
operand   operand
   \     /
 operator: *
```

Arity’ye göre:

- unary: bir operand — `-price`, `typeof value`, `!isReady`;
- binary: iki operand — `a + b`, `x === y`;
- ternary: üç bölüm — condition operator C09/C10 sınırında ayrıntılanır.

Symbol tek başına semantics’i söylemez. Unary `-` negation, binary `-` subtraction’dır. `+`
numeric addition, String concatenation veya unary numeric conversion rolünde bulunabilir.

### Arithmetic operators

| Operator | Amaç | Örnek | Sonuç |
|---|---|---|---:|
| `+` | addition/concatenation | `8 + 2` | 10 |
| `-` | subtraction | `8 - 2` | 6 |
| `*` | multiplication | `8 * 2` | 16 |
| `/` | division | `8 / 2` | 4 |
| `%` | remainder | `8 % 3` | 2 |
| `**` | exponentiation | `2 ** 3` | 8 |

Remainder’ı bütün signs için mathematical modulo diye adlandırma:

```js
console.log(5 % 3);   // 2
console.log(-5 % 3);  // -2
```

JavaScript remainder sonucu dividend’in sign’ını izler. Positive wrap-around gerekiyorsa
contract ve normalization açık yazılır.

Division by zero exception atmaz:

```js
console.log(10 / 0); // Infinity
console.log(0 / 0);  // NaN
```

Runtime Number sonucu, domain açısından geçerli değildir. Divider validation gerekir.

### `+` neden özel dikkat ister?

Binary `+`, operands primitive değerlere dönüştürüldükten sonra String varsa concatenation,
aksi hâlde numeric addition yapar. Bu simplified mental model beginner için yeterlidir:

```js
console.log(5 + 1);        // 6
console.log("5" + 1);      // "51"
console.log(5 + "1");      // "51"
console.log(1 + 2 + "3");  // "33"
console.log("1" + 2 + 3);  // "123"
```

Son iki satırı trace et:

| Expression | İlk operation | Intermediate | İkinci operation | Final |
|---|---|---|---|---|
| `1 + 2 + "3"` | 1+2 numeric | 3 Number | 3+"3" concat | "33" |
| `"1" + 2 + 3` | "1"+2 concat | "12" String | "12"+3 concat | "123" |

Parentheses type contract’ın yerini almaz. `(rawPrice + tax)` grouping’i açıklar ama rawPrice
String ise concatenation riskini çözmez. Boundary’de validate/convert et.

### Comparison ve equality

Relational operators `<`, `<=`, `>`, `>=` bir ilişkiyi değerlendirip Boolean üretir. Types
ve conversion rules sonucu etkiler. Text comparison numeric comparison değildir:

```js
console.log("20" < "3"); // true: String comparison
console.log(20 < 3);     // false: numeric comparison
```

JavaScript birden fazla equality algorithm sunar. Beginner default’u `===` ve `!==` strict
equality’dir: farklı types eşit değildir ve implicit conversion yapılmaz.

```js
console.log(5 === "5"); // false
console.log(5 == "5");  // true: loose equality conversion uygular
```

`==` yasak bir character değil, specified algorithm’dır; fakat conversion chain’i kolay
yanlış okunur. Bounded requirement yoksa explicit conversion + strict equality tercih edilir.

Special cases:

```js
console.log(NaN === NaN);          // false
console.log(Object.is(NaN, NaN));  // true
console.log(0 === -0);             // true
console.log(Object.is(0, -0));     // false
console.log({} === {});            // false: farklı object identity
```

Equality “domain’de aynı mı?” sorusunu otomatik çözmez. Unicode normalization, floating-point
tolerance, object structural equality veya case-insensitive comparison ayrı contracts ister.

### Precedence: implicit grouping

Operator precedence, operators’ın birbirine göre nasıl parsed/grouped olduğunu belirler.
Higher-precedence operator lower-precedence expression’ın operandı olur.

```js
3 + 4 * 5
```

Implicit grouping:

```text
3 + (4 * 5)
```

Expression tree:

```text
       +
      / \
     3   *
        / \
       4   5
```

Öğrenmen gereken minimal hierarchy:

1. Parentheses/grouping
2. Exponentiation
3. Unary operators
4. Multiplication/division/remainder
5. Addition/subtraction
6. Relational comparison
7. Equality
8. Logical operators (C09)
9. Assignment

Tüm tabloyu ezberleme. Mixed expression’da official table’a bak ve parentheses ile intent’i
göster. Syntax bilen reviewer’ın bile mentally hesaplamasını isteme.

### Associativity: same precedence grouping

Same-precedence operators için associativity grouping yönünü belirler. Çoğu arithmetic
operator left-associative’dir:

```js
console.log(10 - 3 - 2);       // 5
console.log((10 - 3) - 2);     // 5
console.log(10 - (3 - 2));     // 9
```

Exponentiation right-associative’dir:

```js
console.log(2 ** 3 ** 2);      // 512
console.log(2 ** (3 ** 2));    // 512
console.log((2 ** 3) ** 2);    // 64
```

Assignment da right-associative parsed olur:

```js
let a;
let b;
a = b = 5; // a = (b = 5)
```

Çalışsa bile explicit separate assignments çoğu durumda daha okunabilirdir.

### Precedence, associativity ve operand order aynı değildir

En önemli ayrım: precedence operators’ın grouping’ini belirler; operand expressions
JavaScript’te soldan sağa değerlendirilir. Effects varsa bu görünür olur:

```js
function observe(label, value) {
  console.log(label);
  return value;
}

const result = observe("left", 4) + observe("middle", 3) * observe("right", 2);
// left, middle, right yazılır; grouping 4 + (3 * 2), result 10.
```

`*` önce uygulanır diye `middle/right` çağrılarının `left`ten önce yapıldığını söylemek
yanlıştır. Önce operand evaluations soldan sağa gerçekleşir; operator grouping yine
multiplication node’unun addition’dan önce reduced edilmesini belirler.

### Evaluation table yöntemi

Expression: `subtotal + shipping * quantity > limit`

Varsayalım `subtotal=100`, `shipping=20`, `quantity=3`, `limit=150`.

| Step | Subexpression | Operand types/values | Rule | Result/type |
|---:|---|---|---|---|
| 1 | `shipping * quantity` | Number 20, Number 3 | multiply | 60 Number |
| 2 | `subtotal + 60` | Number 100, Number 60 | addition | 160 Number |
| 3 | `160 > limit` | Number 160, Number 150 | relational | true Boolean |

Her tablo şu kolonları içermeli: implicit grouping, step, operator, left/right values,
types, conversion, intermediate result/type, effect ve final. Conversion yoksa “none” yaz;
boş bırakma.

### Grouping readability içindir

Parentheses iki amaç taşır:

1. Parser grouping’ini değiştirmek.
2. Değiştirmese bile reader intent’i açıklaştırmak.

```js
const total = base + tax * quantity;       // correct olabilir
const total = base + (tax * quantity);     // intent daha görünür
const total = (base + tax) * quantity;     // farklı behavior
```

Gereksiz her subexpression’ı parentheses içine almak da noise üretir. Ama mixed operator,
conversion veya domain phase sınırı varsa explicit grouping/named intermediates değerlidir.

### Named intermediates ile expression’ı açmak

```js
const finalPrice = basePrice + basePrice * taxRate - discount;
```

Daha reviewable:

```js
const taxAmount = basePrice * taxRate;
const priceWithTax = basePrice + taxAmount;
const finalPrice = priceWithTax - discount;
```

İkinci version daha uzun fakat her intermediate type/value test edilebilir. Production’da
“tek satır” hedef değildir; smallest clear correct expression hedeflenir.

### Assignment expressions ve effects

Assignment yalnız value üretmez; binding state’ini değiştirir:

```js
let total = 10;
const result = (total = total + 5);
```

`result` ve `total` 15 olur. Bir calculation expression içine assignment saklamak trace’i
zorlaştırır. Calculation ile state transition’ı ayrı satırlarda tut:

```js
const nextTotal = total + 5;
total = nextTotal;
```

Condition içindeki accidental assignment klasik risktir. ESLint ve strict review policy
yardım eder; asıl çözüm assignment/equality mental modelini ayırmaktır.

### Short-circuit ön izlemesi

`&&`, `||`, `??` bazı operands’ı hiç değerlendirmeyebilir ve her zaman Boolean dönmek zorunda
değildir. Ayrıntı C09’dadır. C07 sınırında yalnız şu uyarıyı taşı:

```js
const label = providedLabel || "Default";
```

Burada right operand yalnız left falsy ise değerlendirilir; `0` veya empty String valid domain
value ise fallback yanlış olabilir. Short-circuit expression’ın effects ve result type’ını
trace etmeden shorthand kullanma.

### Tam vaka: fiyat expression'ı

Requirements:

- `basePriceInCents`: safe integer ≥ 0
- `quantity`: integer 1–100
- `discountRate`: Number 0–1
- tax rate 0.20
- rounding policy: discount nearest cent

Naive expression:

```js
const total = basePriceInCents * quantity * (1 - discountRate) * 1.20;
```

Sorular: Rounding hangi aşamada? Tax discounted amount’a mı uygulanır? Result integer mı?
Named model:

```js
const grossInCents = basePriceInCents * quantity;
const discountInCents = Math.round(grossInCents * discountRate);
const discountedInCents = grossInCents - discountInCents;
const taxInCents = Math.round(discountedInCents * 0.20);
const totalInCents = discountedInCents + taxInCents;
```

| Step | Expression | Result | Type | Invariant |
|---:|---|---:|---|---|
| 1 | `1000 * 3` | 3000 | Number integer | safe |
| 2 | `round(3000*0.10)` | 300 | Number integer | 0≤discount≤gross |
| 3 | `3000-300` | 2700 | Number integer | non-negative |
| 4 | `round(2700*0.20)` | 540 | Number integer | non-negative |
| 5 | `2700+540` | 3240 | Number integer | final |

Bu tasarım domain policy’yi görünür kılar. Formula kısa olmadığı için kötü değildir; her phase
adlandırıldığı için test edilebilirdir.

### AI expression audit

AI’ye “sonuç ne?” demeden önce kendi parse ve trace’ini yaz. Sonra şunu iste:

```text
Final sonucu doğrudan verme. Expression'ın implicit grouping tree'sini çıkar.
Her operandın value/type'ını, conversion rule'u, intermediate value/type'ı ve effect'i
tabloya yaz. Precedence, associativity ve operand evaluation order'ı ayrı açıkla.
Ardından aynı behavior'ı daha okunabilir grouping veya named intermediates ile göster.
```

AI’nin tablosunu official operator semantics ve çalıştırılan tests ile karşılaştır. AI’nin
emin konuşması evidence değildir.

### Bir ifadeyi çözmek için yedi adımlı protokol

Karmaşık bir ifadeyi tek bakışta zihinden hesaplamak güvenilir bir mühendislik yöntemi
değildir. Doğru sonuç bulsan bile hangi varsayımın doğru çıktığını bilemezsin. Bunun yerine
her ifadeyi aynı protokolle çöz. Bu protokol sınav tekniği değil; kod incelemede, hata
ayıklamada ve AI çıktısını denetlemede kullanacağın çalışma biçimidir.

1. **Sözleşmeyi yaz:** Her girdinin kabul edilen türünü, birimini ve aralığını belirt.
2. **Etkileri işaretle:** Fonksiyon çağrısı, atama, artırma veya dış dünyaya erişim var mı?
3. **Gruplamayı çıkar:** Öncelik ve birleşme yönüne göre örtük parantezleri ekle.
4. **İşlenenleri değerlendir:** JavaScript'in soldan sağa işlenen değerlendirme sırasını izle.
5. **Dönüşümleri kaydet:** Her işlecin hangi türe dönüştürme yaptığını açıkça yaz.
6. **Ara değerleri hesapla:** Yalnız nihai sonucu değil, her düğümün değerini ve türünü kaydet.
7. **Niyeti yeniden yaz:** Aynı davranışı daha açık parantezler veya adlandırılmış ara
   değerlerle ifade et.

Şu örneği ele al:

```js
const result = "6" + 4 * 2 - 3;
```

İlk bakışta `17`, `611` veya başka bir sonuç tahmin edilebilir. Protokol belirsizliği giderir.
`*`, `+` ve `-` işleçlerinden daha yüksek önceliklidir; `+` ve `-` aynı seviyede soldan
birleşir. Örtük gruplama şöyledir:

```js
const result = ("6" + (4 * 2)) - 3;
```

| Adım | Alt ifade | Girdiler | Kural | Ara sonuç |
|---:|---|---|---|---|
| 1 | `4 * 2` | Number 4, Number 2 | sayısal çarpma | Number 8 |
| 2 | `"6" + 8` | String "6", Number 8 | metin birleştirme | String "68" |
| 3 | `"68" - 3` | String "68", Number 3 | sayısal dönüşüm ve çıkarma | Number 65 |

Bu tablo sonuçtan daha değerlidir. Çünkü `"6"` yerine `"altı"` geldiğinde son adımın neden
`NaN` üreteceğini de açıklayabilir. Güvenli tasarım, giriş sınırında sayıya dönüştürmek ve
geçerliliği kontrol etmektir:

```js
const rawCount = "6";
const count = Number(rawCount);

if (!Number.isFinite(count)) {
  throw new TypeError("count geçerli bir sayı olmalıdır");
}

const doubledCount = 4 * 2;
const result = count + doubledCount - 3;
```

Burada birkaç satır fazladır; buna karşılık tür sözleşmesi görünür, hata yeri nettir ve ara
değer ayrı test edilebilir.

### İşleç ailelerini anlamlı sorularla seçmek

İşleçleri simge tablosu olarak ezberlemek yerine her aileyi cevapladığı soruyla ilişkilendir.
Bu yaklaşım yeni bir programlama diline geçtiğinde de taşınır; simgeler değişebilir fakat
model büyük ölçüde kalır.

| Aile | Cevapladığı soru | Tipik çıktı | Örnek |
|---|---|---|---|
| Aritmetik | “Nicelikler nasıl birleşir?” | Number/BigInt | `price * quantity` |
| Karşılaştırma | “Hangi değer önce, büyük veya küçük?” | Boolean | `age >= 18` |
| Eşitlik | “Bu iki değer seçilen eşitlik kuralına göre aynı mı?” | Boolean | `role === "admin"` |
| Atama | “Yeni değer hangi bağlamaya yazılacak?” | atanan değer + etki | `total = nextTotal` |
| Tekli | “Tek bir değer nasıl sorgulanır veya dönüştürülür?” | işlece bağlı | `typeof value` |
| Mantıksal | “Koşullar nasıl birleştirilir?” | işlece bağlı | C09'da ayrıntılı |

Bir iş gereksinimini önce soruya dönüştür. “Sepetteki ürünlerin toplam tutarını bul” gereksinimi
nicelikleri birleştirir; aritmetik gerekir. “Kullanıcı bu kaydı düzenleyebilir mi?” bir doğruluk
kararıdır; karşılaştırma ve mantıksal işleçler gerekir. “Sonucu toplam değişkenine kaydet” ise
atama etkisidir. Bu üç amacı tek bir yoğun ifadede birleştirmek mümkün olsa da bakım maliyetini
artırır. Hesap, karar ve durum geçişini ayırmak çoğu zaman daha güvenlidir.

### Tekli işleçler ve bağlamın önemi

Tekli işleç (Unary operator) bir işlenenle çalışır. Aynı simge ikili bağlamda başka anlama
gelebilir:

```js
const temperature = -5;       // tekli eksi: işareti değiştirir
const difference = 8 - 5;     // ikili eksi: çıkarma yapar
const parsed = +"42";         // tekli artı: sayısal dönüşüm ister
const label = "A" + "B";      // ikili artı: metin birleştirir
```

Tekli `+` kısa görünür fakat niyeti her okuyucu için açık değildir. Eğitimde ve çoğu üretim
kodunda `Number(rawValue)` daha görünür bir dönüştürme sözleşmesi sunar. Aynı biçimde `!!value`
bir değeri Boolean'a dönüştürür; `Boolean(value)` niyeti daha açık ifade edebilir. Kısalık ile
açıklık aynı ölçüt değildir.

`typeof` da tekli bir işleçtir. Sonucu bir metindir:

```js
console.log(typeof 42);          // "number"
console.log(typeof "42");        // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (tarihsel davranış)
```

`typeof null` sonucu, “null bir nesnedir” şeklinde bir domain çıkarımı yapmana izin vermez.
Bu, JavaScript'in tarihsel uyumluluk davranışıdır. Tür kontrolü yazarken işlecin gerçek
sözleşmesini bilmek gerekir.

### Artırma ve azaltma: küçük simge, görünür etki

`++` ve `--` hem bir değer üretir hem de bağlamayı değiştirir. Önek (prefix) ve sonek
(postfix) biçimleri farklı değer döndürür:

```js
let count = 3;
const before = count++;
// before 3, count 4

let score = 3;
const after = ++score;
// after 4, score 4
```

Tek başına `count += 1;` veya `count++;` anlaşılabilir olabilir. Fakat başka bir ifadenin
içinde kullanıldığında iki soruyu aynı anda yanıtlamayı gerektirir: “İfade hangi değeri
üretti?” ve “Durum ne zaman değişti?”

```js
let index = 1;
const total = index++ + index;
```

İşlenenler soldan sağa değerlendirilir. `index++` Number 1 üretir, sonra `index` 2 olur;
sağdaki `index` 2 okunur ve toplam 3 çıkar. Bu kodun açıklanabilir olması, iyi tasarlandığı
anlamına gelmez. Daha açık biçim:

```js
let index = 1;
const previousIndex = index;
index += 1;
const total = previousIndex + index;
```

Amaç yalnız bir sayacı artırmaksa ara hesaplama içine saklama. Yan etkili kısa ifadeler hata
ayıklama sırasında zaman çizelgesini gereksiz yere karmaşıklaştırır.

### Bileşik atamalar ve gizli tür değişimi

`+=`, `-=`, `*=`, `/=` gibi bileşik atama işleçleri mevcut değeri okuyup işlemi yapar ve sonucu
aynı bağlamaya yazar. `total += amount`, kabaca `total = total + amount` niyetini taşır. Fakat
`+` tür duyarlı olduğu için `+=` de aynı riski taşır:

```js
let total = 10;
total += "5";
console.log(total);        // "105"
console.log(typeof total); // "string"
```

Buradaki hata yalnız yanlış toplam değildir. `total` değişkeninin türü Number'dan String'e
dönmüş, sonraki bütün ifadelerin sözleşmesini bozmuştur. C06'daki durum tablosunu kullan:

| Zaman | İfade | Önceki değer/tür | Yeni değer/tür | Beklenti |
|---:|---|---|---|---|
| t0 | `let total = 10` | — | 10 / Number | Number |
| t1 | `total += "5"` | 10 / Number | "105" / String | Number bekleniyordu |

Bir kullanıcı girdisi aritmetik duruma katılmadan önce dönüştürülüp doğrulanmalıdır. Bileşik
atama, sınır doğrulamasını ortadan kaldırmaz.

### Karşılaştırmalarda tür ve sözlük sırası

Metinleri `<` veya `>` ile karşılaştırdığında insan dilindeki alfabetik sırayı otomatik olarak
elde ettiğini varsayma. JavaScript metinleri UTF-16 kod birimlerine dayalı kurallarla
karşılaştırır. Büyük/küçük harf ve Türkçe karakterler kullanıcı beklentisinden farklı bir sıra
üretebilir. Kullanıcıya dönük dilsel sıralama gerektiğinde `Intl.Collator` gibi yerelleştirme
araçları ayrı bir sözleşme ile kullanılmalıdır.

```js
console.log("10" < "2"); // true
console.log(10 < 2);     // false
```

İlk ifade sayısal büyüklüğü değil metin sırasını karşılaştırır. Form alanından gelen sayısal
değerler metin olarak bırakılırsa “100, 20'den küçüktür” gibi görünen hatalar oluşabilir.
Çözüm, karşılaştırmayı rastgele dönüştürmelere bırakmak değil; giriş sınırında amaçlanan türe
getirmektir.

Zincirlenmiş matematiksel karşılaştırmalar da JavaScript'te beklenen anlamı taşımaz:

```js
const x = 7;
console.log(1 < x < 10); // true görünse de güvenilir aralık testi değildir
```

İlk karşılaştırma `true` üretir; sonra `true < 10` değerlendirilir ve `true` sayısal bağlamda
1'e dönüşür. `x = 100` için bile ifade `true` olabilir. Doğru aralık koşulu C09'da mantıksal
bağlaçlarla kurulacaktır: `x > 1 && x < 10`. Şimdilik önemli olan her ara sonucun türünü
izlemektir.

### Eşitlikte kimlik, değer ve domain anlamı

`===` çoğu başlangıç senaryosu için doğru varsayılandır; ancak “eşitlik problemlerinin tamamını
çözer” anlamına gelmez. İlkel değerlerde tür ve değer karşılaştırılır. Nesnelerde ise aynı
nesne kimliğine yapılan başvuru karşılaştırılır:

```js
const first = { id: 7 };
const second = { id: 7 };
const alias = first;

console.log(first === second); // false
console.log(first === alias);  // true
```

İki kullanıcının aynı kimlik numarasına sahip olup olmadığını denetlemek istiyorsan domain
alanlarını karşılaştırmalısın: `first.id === second.id`. Derin nesne eşitliği ayrı bir
algoritmadır; `===` bunu yapmaz.

Ondalıklı hesaplarda da ham eşitlik her zaman domain ihtiyacına uymaz:

```js
const calculated = 0.1 + 0.2;
console.log(calculated === 0.3); // false
```

Bu sonuç C05'teki ikili kayan nokta gösteriminin devamıdır. Mühendislik çözümü, her yerde
gelişigüzel tolerans kullanmak değildir. Para için en küçük birimden tamsayı, bilimsel hesap
için tanımlı tolerans, hassas ondalık için uygun kütüphane gibi domain politikası seçilir.

### `NaN`, sonlu değer ve geçerlilik

`NaN`, “sayı değil” adını taşısa da `typeof NaN` sonucu `"number"`dır. Bu değer, başarısız veya
tanımsız bir sayısal işlemin sonucunu temsil eder ve sonraki aritmetiğe yayılır:

```js
const parsed = Number("on iki");
const total = parsed + 5;

console.log(parsed); // NaN
console.log(total);  // NaN
```

`value === NaN` hiçbir zaman geçerli denetim değildir; `NaN` kendisine eşit değildir.
`Number.isNaN(value)` yalnız gerçek `NaN` değerini, `Number.isFinite(value)` ise sonlu ve Number
türündeki değerleri denetlemek için daha açık araçlardır:

```js
function requireFiniteNumber(value, name) {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${name} sonlu bir Number olmalıdır`);
  }
}
```

Bu doğrulama `Infinity`, `-Infinity`, `NaN` ve Number dışındaki türleri reddeder. Fakat negatif
sayı, tamsayı olma veya üst sınır gibi domain koşullarını ayrıca denetlemen gerekir.

### Number ile BigInt sınırını korumak

BigInt, Number'ın güvenli tamsayı aralığını aşan tamsayılar için kullanılabilir. Sonunda `n`
bulunan literal BigInt'tir:

```js
const large = 9_007_199_254_740_993n;
const next = large + 1n;
```

Number ve BigInt çoğu aritmetik işlemde doğrudan karıştırılamaz:

```js
// TypeError üretir:
// const invalid = 10n + 5;
```

Bu sınır faydalıdır; çalışma zamanı hangi temsilin seçileceğini sessizce tahmin etmez. Bilinçli
dönüşüm gerekir, fakat BigInt'i Number'a dönüştürmek veri kaybı yaratabilir. İş gereksinimi
önce temsil politikasını belirlemelidir. Bir kimlik numarası aritmetik nicelik değilse String
olarak tutulması da daha doğru olabilir.

### Öncelik tablosunu ezberlemeden güvenli kullanmak

Profesyonel geliştirici bütün öncelik seviyelerini ezberlemek zorunda değildir. Sık kullanılan
aritmetik ilişkiyi bilir, geri kalanında resmi tabloya bakar ve niyeti kodda görünür kılar.
Şu pratik karar ağacını kullan:

1. Tek bir işleç varsa öncelik çatışması yoktur; yine de türleri kontrol et.
2. Aynı işleç tekrarlanıyorsa birleşme yönünün sonucu değiştirip değiştirmediğine bak.
3. Farklı işleçler varsa örtük gruplamayı yaz.
4. Grup domain adımıysa adlandırılmış ara değere dönüştür.
5. Okuyucu tabloya bakmak zorunda kalacaksa açık parantez ekle.
6. Yan etki varsa ifadeyi satırlara ayır.

Örneğin `net = gross - discount + shipping` ifadesinde `-` ve `+` aynı seviyede soldan birleşir:
`(gross - discount) + shipping`. Bu, gereksinimle uyumluysa yine de ara değerler niyeti daha iyi
anlatabilir:

```js
const discountedTotal = gross - discount;
const net = discountedTotal + shipping;
```

İsimler formülün yalnız nasıl değil, neden o sırada çalıştığını da açıklar.

### Birleşme yönünü deneyle doğrulamak

Birleşme yönü (Associativity), aynı öncelikteki işleçlerin sözdizim ağacını belirler. Çıkarma
soldan birleşir; üs alma sağdan birleşir. Bunu yalnız sonuçla değil ağaçla göster:

```text
10 - 3 - 2              2 ** 3 ** 2

      -                       **
     / \                     /  \
    -   2                   2    **
   / \                          /  \
 10   3                        3    2
```

Sol ağaç `(10 - 3) - 2`, sağ ağaç `2 ** (3 ** 2)` anlamına gelir. Çarpma ve toplamada bazı
sayısal örnekler farklı gruplamada aynı sonucu verdiği için birleşme yönü hatası görünmeyebilir.
Çıkarma, bölme ve üs alma gibi işlemler farkı daha iyi gösterir. Bir kuralı öğrenirken onu
görünür kılan karşı örnek seçmek, rastgele örnek seçmekten daha öğreticidir.

### İşlenen değerlendirme zaman çizelgesi

Öncelik ağacını çıkardıktan sonra yan etkilerin gerçekleşme sırasını ayrı bir zaman çizelgesinde
göster. Şu kodu incele:

```js
const events = [];

function read(label, value) {
  events.push(label);
  return value;
}

const result = read("A", 2) + read("B", 3) * read("C", 4);
console.log(events); // ["A", "B", "C"]
console.log(result); // 14
```

| Zaman | Olay | Üretilen değer | Henüz uygulanmayan işlem |
|---:|---|---:|---|
| t1 | `read("A", 2)` | 2 | addition bekliyor |
| t2 | `read("B", 3)` | 3 | multiplication bekliyor |
| t3 | `read("C", 4)` | 4 | multiplication uygulanabilir |
| t4 | `3 * 4` | 12 | addition uygulanabilir |
| t5 | `2 + 12` | 14 | tamamlandı |

Bu ayrım, fonksiyon çağrılarının ağ erişimi, loglama, sayaç artırma veya paylaşılan durum
değiştirme gibi etkileri olduğunda kritiktir. En güvenli yaklaşım, hesaplama ifadelerindeki
fonksiyonları mümkün olduğunca etkisiz ve öngörülebilir tutmaktır.

### Kısa devreyi yalnız bir performans hilesi sanma

Mantıksal işleçler C09'un ana konusudur; fakat ifade değerlendirme modeli açısından kısa devre
(Short-circuit) şimdiden önemlidir. Bazı işlenenler hiç değerlendirilmez. Bu yalnız hız değil,
program davranışıdır:

```js
const user = null;
const name = user && user.name;
```

Sol taraf falsy olduğu için `user.name` okunmaz. Sağ tarafta fonksiyon çağrısı varsa o çağrı da
yapılmaz. Bu yüzden kısa devreli ifadeye yan etki koymak kodu kırılganlaştırır. Ayrıca `&&` ve
`||` her zaman Boolean üretmez; değerlendirmeyi belirleyen işlenenlerden birini döndürür.
C09'da truthy/falsy ve nullish kuralları ayrıntılandırılacaktır. C07'de çıkaracağın ders şudur:
“Her işleç bütün işlenenlerini kesinlikle çalıştırır” varsayımı doğru değildir; resmi semantiği
kontrol etmelisin.

### Dört farklı parantez kullanımını ayırmak

Parantez gördüğünde otomatik olarak “önceliği değiştiriyor” deme. Dört ayrı amaç olabilir:

1. **Davranışı değiştirme:** `(a + b) * c`, `a + b * c`den farklıdır.
2. **Örtük davranışı görünür kılma:** `a + (b * c)` sonucu değiştirmeden niyeti açıklar.
3. **Fonksiyon çağrısı:** `calculate(a, b)` içindeki parantez çağrı sözdizimidir.
4. **Okunabilirlik grubu:** Uzun bir koşul veya dönüşüm zihinsel parçaları ayırır.

Parantez tür dönüşümü, doğrulama veya birim güvenliği sağlamaz. `(rawPrice + tax)` ifadesinde
`rawPrice` hâlâ String olabilir. Güvenilir kod, yapısal açıklığı veri sözleşmesiyle birlikte
kurar.

### Hata ayıklama: sonucu değil ilk sapmayı bul

Bir expression beklenmeyen sonuç verdiğinde tamamını değiştirerek deneme yapma. İlk yanlış ara
değeri bul. Aşağıdaki sırayı uygula:

1. Gerçek girdileri ve `typeof` sonuçlarını kaydet.
2. Örtük gruplamayı açık parantezle yeniden yaz.
3. Her alt ifadeyi ayrı sabite çıkar.
4. Her ara değeri, türü ve birimi gözlemle.
5. Beklenen ile gerçeğin ilk ayrıldığı satırı belirle.
6. Resmi işleç kuralını o satır için doğrula.
7. En küçük düzeltmeyi yap ve regression cases ekle.

```js
const rawPrice = "120";
const quantity = 2;
const shipping = 15;

const lineTotal = rawPrice * quantity;
const finalTotal = lineTotal + shipping;

console.table({
  rawPrice: [rawPrice, typeof rawPrice],
  lineTotal: [lineTotal, typeof lineTotal],
  finalTotal: [finalTotal, typeof finalTotal],
});
```

Burada `*` nedeniyle `lineTotal` Number 240 olur; sonra Number + Number sonucu 255'tir. Fakat
`rawPrice + shipping` önce yapılsaydı concatenation oluşabilirdi. Hata ayıklama tablosu,
“JavaScript garip davrandı” demek yerine tam olarak hangi işlecin hangi dönüşümü yaptığını
gösterir.

### Birimlerle düşünmek

JavaScript Number türü metre, saniye, kuruş ve adet arasında ayrım yapmaz. `distance + duration`
sözdizimsel olarak geçerli olsa da domain açısından anlamsızdır. Birimleri değişken adlarında ve
ara değerlerde görünür kıl:

```js
const distanceInMeters = 1_500;
const durationInSeconds = 300;
const speedInMetersPerSecond = distanceInMeters / durationInSeconds;
```

Farklı birimleri aynı ölçeğe dönüştürmeden birleştirme:

```js
const timeoutInSeconds = 5;
const elapsedInMilliseconds = 2_000;
const timeoutInMilliseconds = timeoutInSeconds * 1_000;
const hasTimedOut = elapsedInMilliseconds >= timeoutInMilliseconds;
```

İşleç doğru, türler aynı olsa bile birimler uyumsuzsa sonuç yanlıştır. Tip sistemi tek başına
domain doğruluğunu garanti etmez.

### Çalışılmış vaka: sayfalama hesabı

Bir API, sayfa numarasını 1'den başlatıyor ve her sayfada 20 kayıt gösteriyor olsun. Sorgunun
atlayacağı kayıt sayısı:

```js
const offset = (page - 1) * pageSize;
```

Sözleşme:

- `page`: Number, güvenli tamsayı, en az 1;
- `pageSize`: Number, güvenli tamsayı, 1–100;
- `offset`: negatif olmayan güvenli tamsayı.

`page = "3"` olduğunda `-` örtük sayısal dönüşüm yaptığı için sonuç tesadüfen doğru çıkabilir.
Bu başarı değil, gizli sözleşme ihlalidir. `page = "üç"` olduğunda `NaN` oluşur. Sınırda
doğrulanan sürüm:

```js
function calculateOffset(page, pageSize) {
  if (!Number.isSafeInteger(page) || page < 1) {
    throw new RangeError("page en az 1 olan güvenli bir tamsayı olmalıdır");
  }

  if (!Number.isSafeInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw new RangeError("pageSize 1 ile 100 arasında olmalıdır");
  }

  return (page - 1) * pageSize;
}
```

| `page` | `pageSize` | Beklenen | Neden |
|---:|---:|---:|---|
| 1 | 20 | 0 | ilk sayfa kayıt atlamaz |
| 2 | 20 | 20 | bir sayfa atlanır |
| 5 | 10 | 40 | dört sayfa atlanır |
| 0 | 20 | hata | sözleşme dışı |
| 2 | 0 | hata | boş sayfa boyutu geçersiz |

Bu vaka öncelik, parantez, aralık doğrulaması ve ölçülebilir test kanıtını birleştirir.

### Çalışılmış vaka: sıcaklık dönüşümü

Celsius'tan Fahrenheit'a dönüşüm formülü `C × 9/5 + 32`dir. Kod:

```js
function celsiusToFahrenheit(celsius) {
  if (!Number.isFinite(celsius)) {
    throw new TypeError("celsius sonlu bir Number olmalıdır");
  }

  const scaled = (celsius * 9) / 5;
  return scaled + 32;
}
```

`scaled` ara değeri formülün iki domain aşamasını ayırır: ölçekleme ve ofset ekleme. Çalışılmış
testler:

| Celsius | Ölçeklenmiş değer | Fahrenheit | Anlamlı sınır |
|---:|---:|---:|---|
| 0 | 0 | 32 | suyun donma noktası yaklaşık |
| 100 | 180 | 212 | suyun kaynama noktası yaklaşık |
| -40 | -72 | -40 | iki ölçeğin kesişimi |

Ondalıklı sonuçlar için gösterim/yuvarlama politikası kullanıcı arayüzü katmanında ayrı
belirlenmelidir. Hesaplama sırasında erken yuvarlama birikimli hata yaratabilir.

### Çalışılmış vaka: puan normalleştirme

Bir sınav puanını yüzdeye dönüştürmek basit görünür:

```js
const percentage = (earnedPoints / maximumPoints) * 100;
```

Fakat sözleşme yazılmadan ifade eksiktir. `maximumPoints` sıfırsa `Infinity` veya `NaN` oluşur;
`earnedPoints` negatifse domain ihlali vardır; maksimumdan büyük puan bonus politikasına göre
geçerli veya hatalı olabilir.

```js
function calculatePercentage(earnedPoints, maximumPoints) {
  if (!Number.isFinite(earnedPoints) || !Number.isFinite(maximumPoints)) {
    throw new TypeError("puanlar sonlu Number olmalıdır");
  }

  if (maximumPoints <= 0) {
    throw new RangeError("maximumPoints sıfırdan büyük olmalıdır");
  }

  if (earnedPoints < 0 || earnedPoints > maximumPoints) {
    throw new RangeError("earnedPoints geçerli aralıkta olmalıdır");
  }

  return (earnedPoints / maximumPoints) * 100;
}
```

İyi ifade tasarımı yalnız işleç sırasını değil, ifadenin geçerli olduğu dünyayı da tanımlar.

### Kod inceleme laboratuvarı: yoğun ifadeyi açmak

Şu üretim kodu parçası hızlı yazılmış olsun:

```js
const payable = rawPrice * qty - rawPrice * qty * discount + shipping * qty > limit;
```

Önce ne ürettiğini sor: fiyat mı, yoksa Boolean mı? `>` en düşük öncelikli olduğu için bütün
aritmetik sol tarafta tamamlanır ve ifade Boolean üretir. `payable` adı ise tutar bekletir gibi
görünür. Ayrıca `rawPrice * qty` iki kez hesaplanmış, tür doğrulaması görünmez ve kargonun adet
başına mı sipariş başına mı olduğu belirsizdir.

Daha açık tasarım:

```js
const unitPrice = Number(rawPrice);
const quantity = Number(qty);

if (!Number.isFinite(unitPrice) || !Number.isSafeInteger(quantity)) {
  throw new TypeError("fiyat ve adet geçerli olmalıdır");
}

const grossAmount = unitPrice * quantity;
const discountAmount = grossAmount * discount;
const shippingAmount = shipping * quantity;
const payableAmount = grossAmount - discountAmount + shippingAmount;
const exceedsLimit = payableAmount > limit;
```

Bu sürümde her adımın türü, birimi ve business anlamı gözden geçirilebilir. `shippingAmount`
politikasının yanlış olduğu anlaşılırsa tek satır değişir. `payableAmount` ayrıca test edilir.
Refactoring yalnız biçimsel güzellik değil, karar noktalarını görünür kılma işlemidir.

### Not tutma şablonu

Bu chapter'dan not çıkarırken işleç listesini kopyalama. Her önemli ifade için şu küçük kaydı
oluştur:

```text
İfade:
Amaç:
Girdi sözleşmesi:
Örtük gruplama:
İşlenen değerlendirme sırası:
Ara değerler ve türleri:
Örtük dönüşümler:
Yan etkiler:
Sınır durumları:
Daha açık yeniden yazım:
Kanıt kaynağı:
```

Üç farklı örnek üzerinde bu şablonu doldurabiliyorsan yalnız sonucu hesaplamıyor, çalıştırma
modelini açıklıyorsun. Notlarının sonunda kendi yanlış tahminini ve düzeltme nedenini sakla;
yanlışın izi, tekrar planı için doğru cevap listesinden daha değerlidir.

### Kendi kendini kontrol et

Aşağıdaki soruları kodu çalıştırmadan yanıtla, sonra küçük bir Node.js dosyasında doğrula:

1. `2 + 3 * 4 ** 2` nasıl gruplanır?
2. `"8" + 2 - 1` hangi ara türlerden geçer?
3. `20 / 5 / 2` neden `20 / (5 / 2)` ile aynı değildir?
4. `first() + second() * third()` çağrıları hangi sırada gerçekleşir?
5. `const same = {} === {};` neden `false` olur?
6. `total += rawAmount` hangi durumda `total` türünü değiştirebilir?
7. `0.1 + 0.2 === 0.3` sonucu hangi temsil gerçeğini gösterir?
8. `5 % -3` ve `-5 % 3` sonuçlarını tahmin etmek için hangi kural gerekir?

Bir cevabın yalnız sonucunu biliyor fakat kuralını, tür geçişini veya karşı örneğini
gösteremiyorsan o madde tamamlanmış sayılmaz.

### Rehberli çalışma: tahminden kanıta

Şimdi chapter'ın bütün modelini tek bir oturumda uygula. Bir kâğıdı veya not dosyasını üç
sütuna ayır: “tahminim”, “çalıştırma kanıtı” ve “düzeltme kuralı”. Aşağıdaki ifadeleri hemen
çalıştırma:

```js
const first = 7 + 2 * 5;
const second = (7 + 2) * 5;
const third = "7" + 2 * 5;
const fourth = "7" - 2 * 5;
const fifth = 20 / 4 / 2;
const sixth = 2 ** 2 ** 3;
```

Her birinde önce ağaç veya açık parantez kur. Sonra yapraklardan başlayarak değer ve türleri
yaz. `third` için `2 * 5` Number 10 olur; String `"7"` ile `+` metin birleştirdiği için String
`"710"` çıkar. `fourth` için aynı çarpma sonucu, `-` tarafından sayısal işleme alınır ve Number
-3 oluşur. Buradaki öğrenme, “artı garip, eksi normal” ezberi değildir. Her işlecin belirlenmiş
dönüşüm ve işlem sözleşmesi vardır.

Ardından dosyayı çalıştır:

```js
console.table([
  { name: "first", value: first, type: typeof first },
  { name: "second", value: second, type: typeof second },
  { name: "third", value: third, type: typeof third },
  { name: "fourth", value: fourth, type: typeof fourth },
  { name: "fifth", value: fifth, type: typeof fifth },
  { name: "sixth", value: sixth, type: typeof sixth },
]);
```

Tahminin yanlışsa sonucu kopyalamakla yetinme. Yanlışın ilk oluştuğu düğümü işaretle. Örneğin
`sixth` için `(2 ** 2) ** 3` varsaydıysan hata, arithmetic hesabında değil sağdan birleşme
kuralındadır. Hata sınıfını doğru adlandırmak, benzer yeni ifadelerde transfer sağlar.

### Rehberli çalışma: aynı sonuç, farklı güvenilirlik

Şu iki uygulama aynı normal girdide aynı sonucu üretebilir:

```js
function calculateA(rawPrice, rawQuantity) {
  return rawPrice * rawQuantity * 1.2;
}

function calculateB(rawPrice, rawQuantity) {
  const price = Number(rawPrice);
  const quantity = Number(rawQuantity);

  if (!Number.isFinite(price) || price < 0) {
    throw new TypeError("price geçerli olmalıdır");
  }

  if (!Number.isSafeInteger(quantity) || quantity < 1) {
    throw new TypeError("quantity pozitif güvenli tamsayı olmalıdır");
  }

  const subtotal = price * quantity;
  const tax = subtotal * 0.2;
  return subtotal + tax;
}
```

`calculateA("100", "2")` tesadüfen 240 üretebilir; `*` sayısal dönüşüm yapar. Bu, fonksiyonun
güvenilir olduğunu kanıtlamaz. Boş metin, `"abc"`, negatif fiyat veya ondalıklı adet geldiğinde
hangi politika uygulanacağı belirsizdir. `calculateB` daha uzun olsa da sınır, ara değer ve hata
davranışını açıklar.

Bu karşılaştırmayı performans, okunabilirlik, test edilebilirlik ve değişiklik maliyeti üzerinden
değerlendir. Küçük bir alıştırmada ilk sürüm yeterli görünebilir; para veya yetkilendirme gibi
etkili domainlerde ikinci yaklaşımın kanıt gücü daha yüksektir.

### Rehberli çalışma: karşı örnek üretme

Bir iddiayı gerçekten anladığını göstermenin güçlü yolu, sınırını açığa çıkaran karşı örnek
üretmektir. Aşağıdaki iddiaların her biri için karşı örnek yaz:

- “JavaScript ifadeleri her zaman soldan sağa hesaplar.”
- “Parantez varsa tür sorunu çözülür.”
- “`===` aynı içeriğe sahip her şeyi eşit sayar.”
- “`%` her zaman pozitif kalan üretir.”
- “Bölme başarısız olursa exception oluşur.”
- “Bir formül kısa ise daha hızlıdır.”

Örnek: “`%` her zaman pozitif kalan üretir” iddiasına `-5 % 3 === -2` karşı örneğini ver.
Sonra doğru sınırlandırılmış ifadeyi yaz: “JavaScript Number remainder sonucu, sıfır olmadığı
durumlarda bölünenin işaretini izler.” Bilgiyi bu biçimde düzeltmek kesin fakat yanlış genelleme
yerine kullanılabilir bir teknik kural oluşturur.

### Rehberli çalışma: başkasına öğretme

Feynman yaklaşımını kullanarak precedence, associativity ve evaluation order farkını kod
bilmeyen birine üç dakikada anlat. Ancak benzetme tek başına yeterli değildir; ardından şu kodla
teknik karşılığını göster:

```js
function value(label, number) {
  console.log(label);
  return number;
}

const result = value("sol", 1) + value("orta", 2) * value("sağ", 3);
```

Açıklaman şu üç cümleyi doğru biçimde içermelidir:

1. Çarpma düğümü toplama düğümünden daha sıkı gruplanır.
2. Fonksiyon çağrıları soldan sağa değerlendirilir.
3. Üretilen değerler ağaçtaki kurala göre birleştirilerek sonuç 7 olur.

Bu üç noktadan birini atlıyorsan kavramlar zihninde hâlâ birleşmiş olabilir. Ders notuna kendi
çizdiğin iki şeritli zaman çizelgesini ekle.

### Yetkinlik kontrol kapısı

Laboratuvara geçmeden önce aşağıdaki kanıtların hepsi elinde olmalıdır:

- en az beş ifade ağacı;
- en az sekiz satırlı bir tür/dönüşüm tablosu;
- soldan ve sağdan birleşmeye birer karşı örnek;
- öncelik ile işlenen sırasını ayıran bir zaman çizelgesi;
- gizli String dönüşümünü düzelten bir sınır doğrulaması;
- para veya birim hesabını adlandırılmış aşamalara bölen örnek;
- AI yanıtında bulduğun ya da aradığın bir kanıt boşluğu.

Bu kanıtlar yoksa chapter'ı yalnız okumuş olursun; henüz uygulamış sayılmazsın. Öğrenme hedefi,
metni bitirmek değil, yeni bir ifadeyi bağımsız olarak açıklayabilmek ve daha güvenli hâle
getirebilmektir.

### Bir haftalık kalıcı öğrenme planı

Bu chapter'ı tek oturumda okuyup kapatmak yerine bilgiyi geri çağırma ve uygulama aralıklarına
böl. Aşağıdaki plan toplam süreyi büyütmekten çok, öğrendiğin modeli farklı bağlamlarda yeniden
kurmanı sağlar.

**1. gün — model kurma:** Ana anlatımı çalış, beş ifade ağacı çiz ve `+` dönüşümleri için üç
değerlendirme tablosu oluştur. Kodları çalıştırmadan önce tahmin yaz. Yanlışların yanına “bilgi
eksiği”, “dikkat hatası” veya “yanlış model” etiketi koy.

**2. gün — aktif hatırlama:** Notlara bakmadan precedence, associativity ve operand evaluation
order kavramlarını tanımla. Her biri için bir örnek ve bir karşı örnek üret. Ardından notlarınla
karşılaştır; eksik cümleleri farklı renkte tamamla.

**3. gün — tür sınırları:** Form girdisi, `NaN`, `Infinity`, floating-point ve BigInt içeren
sekiz küçük expression çöz. Her birinde “syntax geçerli” ile “domain geçerli” ayrımını yaz.
Çalışan her kodun doğru iş kuralı anlamına gelmediğini örnekle.

**4. gün — refactoring:** Gerçek veya yapay bir projeden üç yoğun expression seç. Davranışı
kilitleyen testler yaz; sonra ifadeyi adlandırılmış ara değerlere böl. Testler değişmeden
geçiyorsa davranışı koruduğuna dair kanıtın vardır.

**5. gün — laboratuvar:** Expression evaluator table laboratuvarını tamamla. Hatalı bir vakada
yalnız final sonucu değil, ilk yanlış ara adımı bul. Teslim dosyalarını rubrikle puanla.

**6. gün — AI denetimi:** Kendi trace'ini AI Mentor'a ver. AI'nin itirazlarını resmi kaynak ve
Node.js deneyi ile sınayıp kabul/ret tablosu oluştur. AI'nin bulamadığı en az bir risk eklemeye
çalış.

**7. gün — öğretme ve sınama:** Bir arkadaşına veya kameraya beş dakikalık anlatım yap. Quiz'i
cevap anahtarı kapalıyken yeniden çöz. Yüzde 80'in altında kalırsan yalnız yanlış soruları değil,
onların bağlı olduğu değerlendirme adımını tekrar et.

### Bir expression günlüğü örneği

Kalıcı öğrenme için günlükte yalnız doğru cevapları biriktirme. Aşağıdaki örnek, muhakemenin
nasıl kaydedileceğini gösterir:

```text
İfade: "12" + 3 * 2 - 4
İlk tahmin: "1218" (yanlış)
Güven: 2/3
Gruplama: ("12" + (3 * 2)) - 4
Adım 1: 3 * 2 -> Number 6
Adım 2: "12" + 6 -> String "126"
Adım 3: "126" - 4 -> Number 122
İlk sapma: + işleminin sonucundan sonra - işleminin sayısal dönüşümünü atladım.
Düzeltme kuralı: Her işleç düğümünde türü yeniden yaz; önceki düğümün türünü varsayma.
Daha açık sürüm: Number(raw) + product - adjustment; sınırda doğrulama gerekli.
```

Bu günlük gelecekteki tekrarın başlangıç noktasıdır. Aynı hata sınıfı yeniden oluşuyorsa daha
fazla soru çözmekten önce mental modelini düzelt. Örneğin sürekli final türünü yanlış tahmin
ediyorsan her ara düğümün altına `Number`, `String` veya `Boolean` etiketi yazmayı zorunlu hâle
getir.

### Chapter ustalık testi

Yeni ve daha önce görmediğin bir expression seç. On dakika içinde şu teslimi yardım almadan
üretebiliyorsan başlangıç düzeyinde ustalık kapısını geçersin:

1. girdi sözleşmesi ve units;
2. açık gruplama veya expression tree;
3. işlenen değerlendirme zaman çizelgesi;
4. bütün ara değerler ve türler;
5. dönüşüm ve special-case açıklaması;
6. normal, boundary ve invalid test;
7. daha okunabilir yeniden yazım;
8. kullandığın resmi kaynak.

Ardından bir AI aracından aynı analizi iste. İki analiz çatışırsa otoriteyi AI'ye veya kendi
özgüvenine verme; dil belirtimini, resmi dokümantasyonu ve en küçük yürütme deneyini hakem yap.
Bu davranış ASEA'nın AI-native mühendislik hedefinin temelidir: yardım almak, fakat teknik
sorumluluğu devretmemek.

## Engineering Perspective

Expression design correctness, readability ve change cost kararıdır. Kısa code daha az bug
anlamına gelmez. Hidden coercion, effect ve precedence dependency reader’ın mental load’unu
artırır. Review’da şunları sor:

- Operand types contract’tan geliyor mu?
- Conversion explicit ve validated mı?
- Grouping reader için açık mı?
- Intermediate result domain name almalı mı?
- Assignment/effect calculation içine saklanmış mı?
- Numeric precision/range policy var mı?
- Boundary ve invalid inputs test edilmiş mi?

Lint rules useful guardrails’dır. `eqeqeq` strict equality’yi, `no-implicit-coercion` obscure
conversion shorthand’larını, mixed-operator policy explicit grouping’i destekleyebilir.
Fakat tool, formula’nın business olarak doğru olup olmadığını belirleyemez.

### Doğru ifade, doğru gereksinimden başlar

Bir formül sözdizimsel ve matematiksel olarak doğru çalışabilir; fakat gereksinimi yanlış
modellerse yazılım yine hatalıdır. Örneğin indirimden önce vergi hesaplamak ile indirimden sonra
vergi hesaplamak iki geçerli aritmetik ifade üretebilir. Hangisinin doğru olduğu JavaScript
öncelik tablosundan değil, iş kuralından gelir.

Bu nedenle hesaplamadan önce şu sözleşmeyi yaz:

- Girdiler hangi gerçek dünya niceliklerini temsil ediyor?
- Birimleri ve para birimleri nedir?
- Geçerli aralıklar nelerdir?
- İş adımlarının sırası nedir?
- Yuvarlama hangi aşamada ve hangi kuralla yapılır?
- Geçersiz girdide hata mı, varsayılan değer mi, yoksa kullanıcı düzeltmesi mi gerekir?
- Sonuç hangi türde ve hangi kesinlikle sunulur?

Bir ifade bu soruların cevabını tamamen kodlayamaz. İyi isimler, küçük doğrulama fonksiyonları,
test vakaları ve kısa karar notları birlikte çalışır. “Kod zaten anlatıyor” ifadesi ancak kodun
domain kararlarını gerçekten görünür kıldığı durumda geçerlidir.

### Okunabilirlik performans düşmanı değildir

Yeni öğrenciler bazen tek satırlık ifadenin daha hızlı çalışacağını düşünür. Modern motorların
optimizasyonları kaynak kodundaki satır sayısına bağlı basit bir kuralla işlemez. Aynı temel
hesabı ara sabitlere bölmek çoğu uygulamada ölçülebilir bir performans problemi yaratmaz; buna
karşılık inceleme, test ve hata ayıklama maliyetini ciddi biçimde azaltabilir.

Performans önemliyse tahminle değil ölçümle karar ver. Önce doğru ve açık sürümü oluştur,
gerçekçi yükte profil çıkar, sıcak noktayı belirle ve davranışı koruyan testlerle optimize et.
Bir ifadeyi “daha kısa görünüyor” gerekçesiyle yoğunlaştırmak performans mühendisliği değildir.

### Değişiklik maliyeti üzerinden düşünmek

Bugün yalnız fiyat ve adet kullanan formüle yarın kupon, bölgesel vergi, kargo kampanyası ve
kur dönüşümü eklenebilir. Tek satırlık formül büyüdükçe her değişiklik bütün ifadeyi yeniden
anlamayı gerektirir. Adlandırılmış aşamalar, değişikliğin etkisini sınırlar:

```js
const grossInCents = unitPriceInCents * quantity;
const discountInCents = calculateDiscount(grossInCents, discountPolicy);
const taxableInCents = grossInCents - discountInCents;
const taxInCents = calculateTax(taxableInCents, taxPolicy);
const payableInCents = taxableInCents + taxInCents;
```

Burada henüz fonksiyonların içini bilmiyor olsan da iş akışını okuyabilirsin. Yeni bir vergi
politikası yalnız ilgili aşamada değişebilir. Ara değerler loglanabilir ve bağımsız olarak test
edilebilir. Modülerlik, gereksiz soyutlama kurmak değil; değişmesi muhtemel kararları görünür
sınırlarla ayırmaktır.

### Kod incelemede kanıt dili

Bir pull request'te “bu ifade bana yanlış geliyor” zayıf bir yorumdur. İncelenebilir yorum şu
öğeleri içerir:

```text
Gözlem: rawAmount form katmanından String geliyor.
Kural: Binary +, işlenenlerden biri String olduğunda birleştirme yapabilir.
Karşı örnek: rawAmount="10", fee=5 sonucu "105" oluyor.
Etki: total Number sözleşmesini kaybediyor ve sonraki karşılaştırma güvenilmezleşiyor.
Öneri: sınırda Number dönüşümü + finite/range doğrulaması; ardından strict Number hesabı.
Test: normal "10", boş metin, "abc", negatif ve üst sınır vakaları.
```

Bu yorum kişisel tercihi değil, tekrar üretilebilir bir riski anlatır. AI tarafından yazılmış
kod incelenirken de aynı standart geçerlidir. “AI yazdı” kabul veya ret gerekçesi değildir;
davranış ve kanıt esastır.

### Güvenlik açısından expression denetimi

İfadeler yalnız matematik üretmez; yetki, limit ve doğrulama kararları da üretir. Tür dönüşümü
ve yanlış gruplama güvenlik sınırını bozabilir. Örneğin rol denetiminde loose equality, limit
hesabında taşan veya sonlu olmayan değer, ücret hesabında yanlış birim gerçek etki doğurur.

Kullanıcıdan gelen bir metni dinamik olarak `eval` ile expression'a çevirmek bu chapter'ın
kapsamındaki normal değerlendirme değildir ve ciddi kod çalıştırma riski taşır. Kullanıcıya
formül tanımlatma gereksinimi varsa izin verilen işlemleri sınırlayan bir parser, açık veri
şeması ve sandbox tasarımı gerekir. Ham girdiyi kod olarak çalıştırma.

### Gözlemlenebilirlik ve üretim hataları

Üretimde “toplam yanlış” bildirimi geldiğinde yalnız final sonucu loglamak çoğu zaman yetersizdir.
Gizlilik ve güvenlik sınırları korunarak hesap sürümü, girdi türleri, birimler ve önemli ara
aşamalar gözlemlenebilir olmalıdır. Kredi kartı, kişisel veri veya gizli anahtar gibi hassas
değerler loglanmamalıdır.

Örnek yapılandırılmış tanılama kaydı:

```js
const calculationTrace = {
  calculationVersion: "pricing-v2",
  inputTypes: {
    unitPriceInCents: typeof unitPriceInCents,
    quantity: typeof quantity,
  },
  grossInCents,
  discountInCents,
  taxInCents,
  payableInCents,
};
```

Bu kayıt “hangi ara adım ilk kez saptı?” sorusunu yanıtlar. Her istekte ayrıntılı log üretmek
yerine hata anında veya kontrollü örneklemede kullanmak performans ve gizlilik açısından daha
uygun olabilir.

### Test tasarımı ifade yapısını izlemelidir

Bir formül için tek mutlu yol testi yeterli değildir. Test matrisi ifadenin karar noktalarından
türetilmelidir:

| Risk | Test sınıfı | Örnek |
|---|---|---|
| Örtük dönüşüm | tür vakası | `"5"`, `5`, `"beş"` |
| Sıfıra bölme | sınır/geçersiz | divider `0` |
| Kayan nokta | hassasiyet | `0.1 + 0.2` |
| Remainder işareti | karşı örnek | `-5 % 3` |
| Aralık | alt/üst sınır | quantity 1, 100, 0, 101 |
| Kimlik eşitliği | referans | aynı nesne, aynı içerikli farklı nesne |
| Birleşme yönü | yapısal | `10 - 3 - 2`, `2 ** 3 ** 2` |
| Yan etki sırası | zaman çizelgesi | loglayan üç işlenen |

Her test yalnız beklenen finali değil, gerektiğinde ara invariant'ları da doğrulamalıdır.
Örneğin indirim miktarı brüt tutardan büyük olamaz; toplam kuruş değeri güvenli tamsayı
olmalıdır. Invariant, tek bir örnekten daha geniş bir doğruluk iddiasıdır.

### Statik analiz neyi yakalar, neyi yakalayamaz?

ESLint gibi statik analiz araçları belirli risk kalıplarını çalıştırmadan bulabilir. Strict
equality kullanımı, karışık işleçlerin parantezlenmesi veya kafa karıştırıcı dönüşüm kısayolları
için kural uygulanabilir. TypeScript gibi bir tür sistemi String ile Number'ın bazı yanlış
birleşimlerini daha kod çalışmadan görünür kılabilir.

Fakat hiçbir araç `discountRate` değerinin yüzde mi oran mı olduğunu, `shipping` değerinin
sipariş başına mı ürün başına mı uygulanacağını kendiliğinden bilemez. Bu bilgiler type/name,
domain model, test ve gereksinim belgesinde açık olmalıdır. Araçlar muhakemenin yerine değil,
tekrarlanan mekanik denetimlerin yanına konur.

### Takım standardı oluşturmak

Takım içinde ifadeler için küçük ve uygulanabilir kurallar belirlemek tutarlılığı artırır:

- kullanıcı girdisini hesaplamaya katmadan önce dönüştür ve doğrula;
- para birimini ve fiziksel birimleri isimlerde belirt;
- varsayılan olarak `===` ve `!==` kullan;
- farklı işleç aileleri karışıyorsa niyeti parantezle;
- birden fazla domain aşaması varsa adlandırılmış ara değer kullan;
- hesaplama içine atama veya artırma etkisi saklama;
- sıra veya dönüşüm açısından şaşırtıcı kod için karşı örnek testi ekle;
- AI üretimini insan üretimiyle aynı review kapısından geçir.

Standart çok katı bir biçim yarışına dönüşmemelidir. Amaç bütün geliştiricilerin kritik tür,
birim ve gruplama kararlarını hızlıca görebilmesidir.

## Real World Examples

### Pagination

`offset = (page - 1) * pageSize`. Parentheses domain order’ını açıklar. page 0 veya String
gelirse formula doğru görünse de contract bozulur.

### Unit conversion

`fahrenheit = celsius * 9 / 5 + 32`. Intermediate type ve floating-point policy belirtilir.
`(celsius * 9) / 5` intent’i açıklaştırır.

### Percentage

`completed / total * 100`; total zero boundary’sinde NaN/Infinity riskini önceden doğrula.

### Access condition preview

Age, verified state ve permission’ı birleştiren expression C09’da Boolean logic olarak
derinleşir. C07’de yalnız operand types ve grouping hazırlanır.

### Form calculation

`quantityInput + 1` String concatenation yapabilir. Boundary parse sonrası Number expression
kullan; parentheses dönüşüm yerine geçmez.

### Abonelik faturası

Bir abonelik sistemi aylık ücret, kullanılan ek koltuk sayısı ve vergi hesaplasın. `baseFee +
extraSeats * seatFee * (1 + taxRate)` ifadesi öncelik bakımından çalışabilir; fakat verginin
yalnız ek koltuklara mı yoksa bütün faturaya mı uygulandığı belirsizdir. İki farklı business
kuralı iki farklı gruplama üretir:

```js
const extras = extraSeats * seatFee;
const subtotal = baseFee + extras;
const tax = subtotal * taxRate;
const total = subtotal + tax;
```

Ara adımlar gereksinimi görünür kılar. Testte sıfır ek koltuk, vergi muafiyeti ve üst koltuk
sınırı bulunmalıdır.

### Stok yeniden sipariş kararı

`available = stock - reserved + incoming` aritmetik olarak açıktır; fakat negatif stok kabul
ediliyor mu, gelen ürün kesinleşmiş mi ve yeniden sipariş eşiği hangi birimde gibi sorular
ayrıdır. Ardından `available <= reorderPoint` Boolean üretir. Nicelik hesabı ile kararın ayrı
değişkenlerde tutulması loglama ve alarm üretimini kolaylaştırır.

### Süre ve hız hesabı

Bir işlem süresini `endTime - startTime` ile hesaplamak iki aynı birimi gerektirir. Biri saniye,
diğeri milisaniye ise Number türleri aynı olmasına rağmen sonuç anlamsızdır. `durationInMs` adı,
negatif süre denetimi ve clock kaynağının seçimi formülün parçası olan mühendislik kararlarıdır.

### Özellik bayrağı yüzdesi

Kullanıcıların yüzde onuna özellik açmak için kimlikten deterministik bir bucket üretilip
`bucket < 10` karşılaştırması yapılabilir. `% 100` kullanımı negatif hash değerlerinde beklenen
0–99 aralığını vermeyebilir; remainder ile mathematical modulo farkı burada gerçek bir dağıtım
hatasına dönüşür. Normalizasyon ve sınır testleri gerekir.

### Arama sonucu puanı

`textScore * 0.7 + freshnessScore * 0.3` ağırlıklı puan üretir. İki skor aynı ölçek ve aralıkta
değilse doğru görünen ifade yanıltıcıdır. Önce skorları normalize etmek, sonra ağırlıkları
uygulamak ve ağırlık toplamının 1 olduğunu doğrulamak gerekir.

### SLA ve hata bütçesi

Kullanılabilirlik yüzdesi `(totalMinutes - downtimeMinutes) / totalMinutes * 100` ile
hesaplanabilir. `totalMinutes=0`, negatif kesinti veya toplamdan büyük kesinti için domain
kararı gerekir. Yüzdeyi ekranda yuvarlamak ile hesaplama verisini erken yuvarlamak birbirinden
ayrılmalıdır.

## Common Mistakes

1. **Her şeyi soldan sağa yapmak:** grouping tree kur.
2. **Precedence ile evaluation order’ı karıştırmak:** effects timeline’ını ayrı trace et.
3. **`+` her zaman toplar sanmak:** operand types’ı yaz.
4. **Parentheses conversion sorununu çözer sanmak:** types aynı kalır.
5. **`==` ile convenient conversion yapmak:** explicit conversion + `===` tercih et.
6. **Final result’a atlamak:** intermediate table üret.
7. **`%` matematiksel modulo sanmak:** negative cases test et.
8. **Division by zero exception beklemek:** Infinity/NaN ve domain validation.
9. **Floating-point exact equality:** tolerance/exact representation policy.
10. **Dense expression içine assignment saklamak:** calculation ve transition’ı ayır.
11. **Object equality’yi structural sanmak:** identity comparison’ı tanı.
12. **AI sonucunu test etmeden kabul etmek:** grouping + types + execution evidence.

## Best Practices

- Predict → group → annotate types → evaluate → run → compare sırasını kullan.
- Mixed operators’da intent’i parentheses veya named intermediate ile göster.
- Strict equality’yi default yap.
- Conversion’ı boundary’de explicit yap.
- Bir expression’da bir domain phase hedefle.
- Units’ı names’te belirt.
- Calculation’ı assignment/effects’ten ayır.
- Normal, boundary, invalid ve coercion cases test et.
- Precedence table’ı reference olarak kullan; ezber yarışına dönüştürme.
- AI’den final değil evaluator evidence iste.

## Hands-on Exercise

Şu expression’ları çalıştırmadan analiz et:

```js
const a = 3 + 4 * 5;
const b = "10" + 2 * 3;
const c = "10" - 2 + 3;
const d = 2 ** 3 ** 2;
const e = 10 - 3 - 2;
const f = 0.1 + 0.2 === 0.3;
const g = 5 == "5";
const h = 5 === "5";
```

Her biri için implicit grouping, operands/types, conversions, intermediate values/types,
final result ve clearer rewrite tablosu üret. Ardından normal/boundary/invalid beş yeni case
ekle. AI’ye ilk cevabından sonra aynı tabloyu ürettir; differences’i official source ve Node
execution ile çöz.

Başarı: 13 expression’ın en az 11’i doğru; bütün conversions görünür; precedence,
associativity ve operand order birbirine karıştırılmamış olmalıdır.

## Reflection Questions

1. Hangi expression’da type’ı atladığın için yanlış tahmin yaptın?
2. Precedence ile operand evaluation order farkını kendi örneğinle açıkla.
3. Named intermediate hangi formula’yı daha anlaşılır yaptı?
4. `==` yerine explicit conversion kullanmak hangi assumption’ı görünür kıldı?
5. AI trace’inde bulduğun ilk kanıtsız iddia neydi?

## Chapter Summary

Expression value/effect üretir; operator operation’ı, operands inputs’u gösterir. Evaluation
language-defined grouping, type ve conversion rules uygular. Precedence farklı operators’ı,
associativity same-precedence operators’ı gruplar. Operand evaluation order ayrı kavramdır.

JavaScript `+` Number addition veya String concatenation yapabilir. Strict equality conversion
yapmaz; loose equality yapar. Numeric boundaries, NaN/Infinity, floating-point ve remainder
behavior domain validation gerektirir. Güvenilir yöntem implicit tree + typed intermediate
evaluation table + explicit readable rewrite’tır.

## Key Takeaways

- Önce grouping, sonra types/conversions, sonra result.
- Precedence evaluation order değildir.
- `+` operand type’a duyarlıdır.
- Parentheses type conversion yapmaz.
- `===`/`!==` güvenli default’tur.
- Final output tek başına evidence değildir.
- Named intermediates reviewability sağlar.
- Effects calculation’dan ayrılmalıdır.
- AI sonucu official rule ve execution ile doğrulanmalıdır.

## Further Reading

ECMA-262 Expressions clauses; MDN Expressions and Operators/Operator Precedence; Equality and
Sameness; ESLint `eqeqeq`, `no-implicit-coercion` ve mixed-operator policy. Boolean logic ve
short-circuit C09’da derinleşecektir.

## References

- [ECMAScript 2026 Expressions](https://tc39.es/ecma262/2026/multipage/ecmascript-language-expressions.html)
- [MDN Expressions and Operators](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN Operator Precedence](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [MDN Equality Comparisons and Sameness](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
- [MDN Addition](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Addition)
- [MDN Remainder](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Remainder)
- [ESLint eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
- [ESLint no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
- [CS2023](https://csed.acm.org/)
- [IEEE 754-2019](https://standards.ieee.org/ieee/754/6210/)
- [Unicode 17.0](https://www.unicode.org/versions/Unicode17.0.0/)
- [MDN Assignment](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Assignment)
- [MDN BigInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [MDN Number.isFinite](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
