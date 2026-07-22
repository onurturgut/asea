---
document_type: "research-packet"
document_id: "V01-C18-RP01"
title: "V01-C18 Records and Data Modeling Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C18"
last_updated: "2026-07-23"
---

# V01-C18 Records and Data Modeling Research Packet

## 1. Research Decision

Araştırma `V01-LO027` ve `V01-LO028` için üretime hazırdır. Bölüm nesne
sözdizimini değil; gereksinimden kayıt, alan, tür, zorunluluk ve değişmez kararı
üretmeyi öğretir. JavaScript nesnesi somut örnek dildir; kavramsal model dile bağlı
değildir.

## 2. Canonical Mapping

| Alan | Kayıtlar |
|---|---|
| Blueprint | `V01-C18-BP01` |
| Modül | `V01-M05` — Structured Data and Recursion |
| Ön koşullar | `V01-C05`, `V01-C14`, `V01-C17` |
| Öğrenme çıktıları | `V01-LO027`, `V01-LO028` |
| Claims | `ASEA-CLM-000061`–`ASEA-CLM-000063` |
| Concepts | `ASEA-CON-000061`–`ASEA-CON-000063` |
| Lab | `V01-C18-L01` — Model Inventory Records |
| Challenge | `V01-C18-CH01` — Make Invalid States Harder to Represent |

## 3. Terminology Boundary

- **Kayıt (Record):** Tek bir varlık, olay veya değeri anlatan adlandırılmış
  alanlar bütünüdür.
- **Alan (Field):** Kayıt içindeki tek anlamlı veri parçasının adı ve değeridir.
- **Veri modeli (Data Model):** Gereksinim için varlıkları, alanları, ilişkileri,
  kısıtları ve temsilleri seçen tasarımdır.
- **Şema (Schema):** Veri yapısının kontrol edilebilir kurallarını açıklayan
  sözleşmedir.
- **Değişmez (Invariant):** Model geçerli kaldığı sürece doğru olması gereken
  koşuldur.
- **Geçersiz durum (Invalid State):** En az bir değişmezi ihlal eden durumdur.

## 4. Requirement Before Representation

Alan seçimi sözdiziminden önce gereksinime dayanır. “Ürünü stokta izlemek” ifadesi
kimlik, ad, mevcut adet ve yeniden sipariş eşiği gerektirebilir. Her alan için hangi
soruyu cevapladığı, kaynağı, türü, zorunluluğu ve doğrulama kuralı yazılmalıdır.
Gerekçesiz alan modelin yüküdür; eksik alan ise iş kararını üretilemez kılar.

## 5. Record Boundary

Kayıt tek bir anlamlı bütünü temsil eder. Ürün bilgisi ile son giriş yapan
kullanıcının tarayıcı ayarını aynı kayıtta tutmak, yalnız birlikte kullanıldıkları
için doğru değildir. Sınır; sahiplik, birlikte değişme, kimlik ve iş kuralıyla
belirlenir. İlişkisiz alan torbası bakım maliyeti ve belirsizlik üretir.

## 6. Named Fields Versus Positions

`["A-10", "Kalem", 25]` gibi konumsal veri, anlamı sıraya bağlar. `{ sku: "A-10",
name: "Kalem", stock: 25 }` adlandırılmış alanlarla niyeti görünür kılar. Küçük ve
matematiksel koordinatlarda konum uygun olabilir; değişen iş kayıtlarında alan adı
daha güvenlidir.

## 7. JavaScript Object as Record Representation

ECMAScript nesnesi özellikler koleksiyonudur; object initializer anahtar–değer
çiftleriyle nesne üretir. Ancak her JavaScript nesnesi iyi bir domain kaydı değildir.
Prototype, getter, method ve dinamik özellik davranışları nesne modelinin parçasıdır.
Bölüm düz veri taşıyan object literal ile sınırlı örnekler kullanmalıdır.

## 8. Field Name and Domain Language

Alan adı iş dilindeki kavramı anlatmalıdır. `x`, `data2` veya `value` yerine
`availableStock`, `reorderLevel` ve `unitPriceInCents` gibi adlar birim ve anlamı
taşır. Ad, doğrulamanın yerine geçmez; fakat yanlış kullanım olasılığını azaltır ve
kod incelemesini hızlandırır.

## 9. Field Type Selection

Tür, olası değerler kümesini sınırlar. Yaş için sayı seçmek yetmez; sonlu, tamsayı
ve kabul edilen aralık gerekir. Para için binary floating point yerine küçük para
birimi tamsayısı gerekebilir. Tarih için serbest metin yerine açık biçim ve zaman
dilimi politikası seçilmelidir. Tür kararı iş işlemine göre gerekçelendirilir.

## 10. Required and Optional Fields

Zorunlu alan, geçerli kaydın onsuz kurulamayacağı bilgidir. Opsiyonel alan yalnız
“bazen boş geliyor” anlamına gelmez; yokluğun domain içinde anlamlı ve ele alınmış
olması gerekir. TypeScript optional property okumada `undefined` olasılığını görünür
kılar. Her alanı opsiyonel yapmak doğrulamayı bütün kullanıcılara dağıtır.

## 11. Missing, Null, and Empty

Eksik özellik, değeri `undefined` olan özellik, açık `null`, boş metin ve sıfır
farklı durumlar olabilir. `Object.hasOwn` özelliğin gerçekten bulunup bulunmadığını
ayırt eder. Model bu durumları iş anlamına göre tanımlamalı; truthiness ile hepsini
tek sınıfa indirmemelidir.

## 12. Schema Versus Instance

Şema izin verilen yapı ve kısıtları, örnek (instance) ise gerçek değerleri taşır.
Tek başarılı nesne şema değildir. JSON Schema'da `properties` alan şemalarını,
`required` zorunlu alan adlarını belirtir; `properties` içinde görünmek alanı tek
başına zorunlu yapmaz. Şema davranışın bütün iş kurallarını otomatik kapsamaz.

## 13. Static Type and Runtime Validation

TypeScript türleri geliştirme sırasında hataları yakalar fakat dış JSON çalışma
zamanında otomatik doğrulanmaz. API, dosya, kullanıcı veya mesaj kuyruğundan gelen
veri `unknown` kabul edilip runtime sınırında doğrulanmalıdır. Statik tür, runtime
validator, storage constraint ve domain invariant birbirini tamamlayan katmanlardır.

## 14. Nested Data

İç içe veri, bir alt bütün kendi alanlarıyla anlamlıysa kullanılır: ürünün boyutları
`dimensions` kaydı olabilir. Aşırı iç içelik erişimi ve güncellemeyi zorlaştırır;
her şeyi düzleştirmek ise isim tekrarına ve sınır kaybına yol açar. Birlikte sahiplik,
tekrar kullanım ve bağımsız yaşam döngüsü kararı belirler.

## 15. Identity

Kimlik (Identity), bir kaydın zaman içinde aynı varlığı temsil etmesini sağlayan
ayırt edicidir. Ad veya e-posta değişebilir; kararlı bir `productId` daha uygun
olabilir. Kimlik alanı benzersizlik, üretim, gizlilik ve dağıtık sistem sınırlarıyla
tasarlanır. Görünen sıra numarası her zaman güvenilir kimlik değildir.

## 16. Equality

JavaScript nesnelerinde `===` yapısal alan eşitliğini değil aynı referansı denetler.
İki ayrı `{ x: 1 }` nesnesi aynı görünse de referans eşit değildir. Domain eşitliği
kimlik eşitliği, seçili alan eşitliği veya bütün değerlerin yapısal karşılaştırması
olabilir. Karşılaştırma amacı açıkça seçilmelidir.

## 17. Derived and Duplicated Data

`quantity` ve `unitPrice` varken `lineTotal` da saklanırsa kaynak alanlar değiştiğinde
toplam eski kalabilir. Türetilmiş veri her kullanımda hesaplanabilir veya performans
için saklanıp güncelleme kuralıyla korunabilir. Tekrarı otomatik yasaklamak yerine
doğruluk, hesap maliyeti ve sahiplik trade-off'u belgelenmelidir.

## 18. Invariant

Değişmez tek alanın türünden daha geniş olabilir: `stock >= 0`, `start <= end`,
`discountedPrice <= listPrice` veya `status === "shipped"` ise `trackingId` bulunması.
Alan tablosu yanında değişmez tablosu oluşturulmalı; normal, sınır ve ihlal örnekleri
verilmelidir.

## 19. Construction Boundary

Geçerli kayıtlar bir construction function üzerinden kurulursa doğrulama tek sınırda
toplanır. Fonksiyon ham girdiyi alır, bütün hataları raporlar ve yalnız başarılıysa
geçerli kayıt döndürür. Daha sonra yapılan her işlem değişmezi korumalıdır. Her yerde
serbest object literal üretmek geçersiz durumların sisteme sızmasını kolaylaştırır.

## 20. Invalid State Prevention

Geçersiz durumları zor temsil edilir yapmak; dar türler, ayrı varyantlar ve birbirini
zorunlu kılan alanları tek yapı altında modellemekle mümkündür. Örneğin ödeme sonucu
tek nesnede `success`, opsiyonel `receipt` ve opsiyonel `error` yerine başarılı ve
başarısız iki açık biçim olarak modellenebilir. JavaScript'te runtime validator ve
factory bu niyeti uygular.

## 21. Validation Error Design

`false` sonucu hangi alanın neden yanlış olduğunu anlatmaz. Yapılandırılmış hata;
kod, alan yolu, alınan değer ve açıklama taşıyabilir. Bütün hataları toplamak form
deneyiminde yararlı, ilk hatada durmak güvenlik veya maliyet sınırında uygun olabilir.
Hassas değerler hata mesajlarına sızdırılmamalıdır.

## 22. Model Evolution

Yeni alan eklemek yalnız object literal değiştirmek değildir. Eski kayıtlar, okuyucu
kod, test, dokümantasyon ve serialization etkilenir. Yeni zorunlu alan geriye dönük
uyumluluğu bozabilir. Varsayılanın iş anlamı yoksa sahte değer üretmek yerine kontrollü
migration ve versioning gerekir.

## 23. Testing Strategy

Her alan için normal, alt/üst sınır, yanlış tür, eksik, null ve fazla alan durumları;
her değişmez için en az bir geçerli ve ihlal eden kombinasyon sınanır. Construction
function başarılı sonuçta alanları normalize etmeli, hatada kısmi geçerli nesne
sızdırmamalıdır. Property-based test, üretilen her başarılı kaydın değişmezlerini
koruduğunu sınayabilir.

## 24. AI-Assisted Modeling Boundary

AI alan listesi önerebilir fakat gereksinimin kaynağını ve iş anlamını kendiliğinden
garanti etmez. Öğrenci önce gereksinim–alan tablosunu yazar; sonra AI önerisindeki
gerekçesiz, tekrar, türetilmiş, hassas veya opsiyonel alanları denetler. Üretilen
model normal, sınır ve çelişkili örneklerle test edilir.

## 25. Outcome and Assessment Contract

`V01-LO027`, gereksinimden alan adı, tür, required/optional kararı, varsayılan ve
validation layer çıkaran tabloyla ölçülür. `V01-LO028`, en az üç değişmezi,
reddedilen invalid state örneklerini, construction boundary ve koruma testlerini
içeren karar kaydıyla ölçülür. Lab envanter kaydı, challenge ise geçersiz durumları
zorlaştıran alternatif model ister.

## 26. Source Register

| # | Kaynak | Tür | Kullanım |
|---:|---|---|---|
| 1 | [ECMAScript 2025](https://tc39.es/ecma262/2025/) | Dil standardı | Nesne ve özellik normatif modeli |
| 2 | [ECMAScript Object Initializer](https://tc39.es/ecma262/2025/multipage/ecmascript-language-expressions.html#sec-object-initializer) | Dil standardı | Object literal davranışı |
| 3 | [ECMAScript Object Type](https://tc39.es/ecma262/2025/multipage/ecmascript-data-types-and-values.html#sec-object-type) | Dil standardı | Özellik ve nesne modeli |
| 4 | [MDN Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) | Resmî başvuru | JavaScript nesne oluşturma |
| 5 | [MDN Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) | Resmî başvuru | Alan erişimi |
| 6 | [MDN Object.hasOwn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) | Resmî başvuru | Eksik özellik ayrımı |
| 7 | [MDN Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) | Resmî rehber | Referans eşitliği |
| 8 | [MDN Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects) | Resmî rehber | Nesne ve özellik kullanımı |
| 9 | [JSON Schema 2020-12](https://json-schema.org/draft/2020-12/json-schema-core) | Endüstri standardı | Şema çekirdeği |
| 10 | [JSON Schema Validation](https://json-schema.org/draft/2020-12/json-schema-validation) | Endüstri standardı | Validation vocabulary |
| 11 | [JSON Schema Object](https://json-schema.org/understanding-json-schema/reference/object) | Resmî rehber | Properties ve required |
| 12 | [JSON Schema Getting Started](https://json-schema.org/learn/getting-started-step-by-step) | Resmî rehber | Şema–instance örneği |
| 13 | [TypeScript Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html) | Resmî dokümantasyon | Alan türü, optional, readonly |
| 14 | [TypeScript Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types) | Resmî dokümantasyon | Object type temeli |
| 15 | [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) | Resmî dokümantasyon | Required, Partial, Readonly sınırı |
| 16 | [Python dataclasses](https://docs.python.org/3/library/dataclasses.html) | Resmî dokümantasyon | Adlandırılmış alanlı kayıt karşılaştırması |
| 17 | [Python typing](https://docs.python.org/3/library/typing.html) | Resmî dokümantasyon | TypedDict ve tür sözleşmesi |
| 18 | [Rust Structs](https://doc.rust-lang.org/stable/book/ch05-01-defining-structs.html) | Resmî kitap | İlgili değerleri adlandırma |
| 19 | [Rust Struct Reference](https://doc.rust-lang.org/reference/items/structs.html) | Dil başvurusu | Struct normatif modeli |
| 20 | [C# Record Types](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/records) | Resmî dokümantasyon | Record ve value equality karşılaştırması |
| 21 | [Java Record Classes](https://docs.oracle.com/en/java/javase/21/language/records.html) | Resmî dokümantasyon | Şeffaf veri taşıyıcı record |
| 22 | [Kotlin Data Classes](https://kotlinlang.org/docs/data-classes.html) | Resmî dokümantasyon | Veri sınıfı karşılaştırması |
| 23 | [OpenAPI 3.1 Schema Object](https://spec.openapis.org/oas/v3.1.0#schema-object) | Endüstri standardı | API şema bağlamı |
| 24 | [CS2023 Curriculum Guidelines](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf) | Akademik standart | Veri modelleme öğrenme kapsamı |
| 25 | [SWEBOK Guide V4.0a](https://www.computer.org/education/bodies-of-knowledge/software-engineering) | Mesleki standart | Gereksinim ve model kalite bağlamı |
| 26 | [Martin Fowler — Value Object](https://martinfowler.com/bliki/ValueObject.html) | Endüstri başvurusu | Kimlik ve değer eşitliği ayrımı |
