---
document_type: "research-packet"
document_id: "V01-C17-RP01"
title: "V01-C17 Collections and Iteration Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C17"
last_updated: "2026-07-23"
---

# V01-C17 Collections and Iteration Research Packet

## 1. Research Decision

Araştırma, `V01-LO025` ve `V01-LO026` için üretime hazırdır. Bölüm; koleksiyon,
dizi, indeks, dolaşma, toplulaştırma, eşleme, süzme ve indirgeme kavramlarını
JavaScript örnekleriyle öğretirken kavramsal modeli tek bir dile bağlamayacaktır.
Öğrenci hem doğru sonuç üreten hem de boş, tek öğeli, sınır ve geçersiz girdilerde
davranışı açıklanabilen koleksiyon işlemleri tasarlayacaktır.

## 2. Canonical Mapping

| Alan | Kayıtlar |
|---|---|
| Blueprint | `V01-C17-BP01` |
| Modül | `V01-M05` — Structured Data and Recursion |
| Ön koşullar | `V01-C11`, `V01-C14`, `V01-C15`, `V01-C16` |
| Öğrenme çıktıları | `V01-LO025`, `V01-LO026` |
| Claims | `ASEA-CLM-000058`–`ASEA-CLM-000060` |
| Concepts | `ASEA-CON-000058`–`ASEA-CON-000060` |
| Lab | `V01-C17-L01` — Analyze a Score Collection |
| Challenge | `V01-C17-CH01` — One Pass or Multiple Passes? |
| Sonraki bölüm | `V01-C18` |

## 3. Terminology Boundary

- **Koleksiyon (Collection):** Birden çok değeri belirli erişim ve dolaşma
  kurallarıyla bir arada tutan veri yapısı ailesidir.
- **Dizi (Array):** Öğelere çoğunlukla sayısal konumla erişilen sıralı
  koleksiyondur. Dil ve çalışma zamanı ayrıntıları değişebilir.
- **İndeks (Index):** Bir öğenin koleksiyondaki sayısal konumunu belirten değerdir.
- **Dolaşma (Traversal):** Koleksiyon öğelerini belirli bir sıra ve sınır
  sözleşmesiyle ziyaret etme işlemidir.
- **Toplulaştırma (Aggregation):** Bir koleksiyondan toplam, adet, en küçük, en
  büyük veya grup özeti gibi birleşik sonuç üretmektir.
- **Eşleme (Mapping):** Her giriş öğesini bir sonuç öğesine dönüştürmektir.
- **Süzme (Filtering):** Bir koşulu sağlayan öğeleri seçmektir.
- **İndirgeme (Reduction):** Öğeleri bir biriktirici üzerinden tek sonuçta
  birleştirmektir.

## 4. Collection as a Contract

Koleksiyon yalnızca köşeli parantez sözdizimi değildir. Sıra korunuyor mu, tekrar
eden değer kabul ediliyor mu, öğeye konumla mı anahtarla mı erişiliyor, yapı
değiştirilebilir mi ve dolaşma sırası tanımlı mı soruları koleksiyon sözleşmesini
oluşturur. Java `List` sıralı ve tekrarlı öğelere izin veren bir koleksiyon olarak
tanımlanırken JavaScript `Array`, tamsayı indeksli özellikleri ve özel `length`
davranışı bulunan bir nesnedir. Ders bu ayrımı görünür tutmalıdır.

## 5. JavaScript Array Model

ECMAScript dizileri klasik sabit boyutlu bellek blokları gibi düşünülmemelidir.
JavaScript dizileri yeniden boyutlanabilir, farklı türde değerleri birlikte
tutabilir ve eksik indeksler barındırabilir. `Array.isArray` marka denetimi için
güvenilir yöntemdir. Üretim kodunda “dizi” denildiğinde sıralı veri sözleşmesi,
öğe türü beklentisi ve boşluk kabulü ayrıca açıklanmalıdır.

## 6. Zero-Based Index and Length

İlk öğenin indeksi `0`, son öğenin indeksi `length - 1` olur. `length`, son
sayısal indeksin bir fazlasını temsil eder; her zaman gerçekten mevcut öğe
sayısını göstermez. Örneğin `values[10] = 7` ataması `length` değerini `11`
yapabilir ve arada boş konumlar bırakabilir. Döngü sınırı `i < values.length`
olmalıdır; `i <= values.length` son geçerli konumun dışına çıkar.

## 7. Empty, Singleton, and Multiple-Element Cases

Her koleksiyon algoritması en az üç temel biçimde incelenmelidir: boş, tek öğeli
ve çok öğeli. Toplama için boş koleksiyonun doğal sonucu `0` olabilir; minimum
için böyle evrensel bir sayı yoktur. Minimum fonksiyonu boş girdiyi reddedebilir,
`undefined` döndürebilir veya ayrı bir sonuç türü kullanabilir. Bu seçim API
sözleşmesidir ve test edilmelidir.

## 8. Bounds and Invalid Access

JavaScript'te var olmayan bir dizi indeksini okumak genellikle `undefined`
döndürür; bu sessizlik, geçersiz erişimi doğru erişim sanma riskini doğurur.
Negatif köşeli parantez indeksi sondan erişim değildir; `array[-1]` normal nesne
özelliğidir. Sondan konumlu erişim için `at(-1)` kullanılabilir. Yazma işlemi
öncesinde indeksin tamsayı ve `0 <= index < length` koşulunu sağlaması gerekir.

## 9. Sparse Arrays and Explicit Undefined

Boş konum (hole) ile değeri açıkça `undefined` olan öğe aynı değildir. Bazı dizi
yöntemleri boş konumlarda callback çağırmaz; bazı dolaşma biçimleri ise konumu
`undefined` gibi gözlemletebilir. Seyrek diziler sonucu, callback sayısını ve
performans varsayımlarını şaşırtabilir. Başlangıç eğitiminde yoğun diziler
üretilmeli; boş konum gerekiyorsa bu karar açıkça belgelenmelidir.

## 10. Traversal Contract

Sağlam dolaşma beş unsuru açıklar: başlangıç konumu, devam koşulu, ilerleme
adımı, o anki öğe ve döngü değişmezi. `for (let i = 0; i < values.length; i += 1)`
ifadesinde başlangıç `0`, sınır `length`, adım `1`, geçerli öğe `values[i]` ve
değişmez “`0..i-1` aralığı işlenmiştir” olabilir. Bu model off-by-one hatalarını
sözdiziminden önce yakalar.

## 11. Indexed For Loop

İndeksli `for`, konuma ihtiyaç duyulduğunda, komşu öğeler karşılaştırıldığında
veya belirli aralık dolaşıldığında uygundur. Gücü aynı zamanda riskidir:
başlangıç, sınır ve adım programcıya aittir. Koleksiyon uzunluğu döngü sırasında
değiştirilecekse önceden alınmış uzunluk ile canlı `length` arasındaki fark
tasarımın parçası olmalıdır.

## 12. Value-Oriented Iteration

`for...of`, yinelenebilir yapının değerlerini dolaşır ve çoğu “her öğeyi işle”
durumunda indeks yönetimini kaldırır. `for...in` ise özellik anahtarlarını dolaşır
ve diziler için varsayılan seçim değildir. Yalnız değere ihtiyaç varsa `for...of`,
konum da gerekiyorsa `entries()` ile `[index, value]` ayrıştırması okunabilir bir
seçenektir.

## 13. forEach Semantics

`forEach` her mevcut öğe için callback çağırır ve anlamlı bir sonuç dizisi
döndürmez. Normal `break` veya `continue` ile erken sonlandırılamaz. Dönüş değeri
üretmek için `map`, seçim için `filter`, arama için `find`/`some`/`every` veya açık
döngü daha doğru niyet taşır. Asenkron callback'i `forEach` içine koymak beklenen
sıralı beklemeyi sağlamaz.

## 14. Mutation During Iteration

Koleksiyonu dolaşırken aynı koleksiyona öğe eklemek, silmek veya sıralamak ziyaret
sırasını değiştirebilir. ECMAScript'in yinelenen dizi yöntemleri çoğunlukla ilk
çağrıda `length` değerini kaydeder; sonradan eklenen öğeler ziyaret edilmeyebilir,
henüz ziyaret edilmemiş öğelerin değişen değerleri ise gözlemlenebilir. Güvenli
varsayılan; önce kopyalamak, yeni koleksiyon üretmek veya değişikliği ayrı aşamada
uygulamaktır.

## 15. Mapping Contract

`map`, her mevcut giriş öğesi için dönüşüm çalıştırıp aynı uzunlukta yeni dizi
üretir. Callback'in öğe, indeks ve kaynak dizi parametreleri vardır; sonuç değeri
yeni dizide ilgili konuma yazılır. `map` sonucunu kullanmamak bir anti-pattern'dir;
yalnız yan etki amaçlanıyorsa açık döngü veya `forEach` niyeti daha doğru anlatır.

## 16. Filtering Contract

`filter`, koşul fonksiyonu doğruluk değeri üreten öğeleri yeni bir diziye seçer.
Sonucun uzunluğu `0` ile kaynak uzunluğu arasındadır; kaynak diziyi değiştirmez,
ancak öğeler nesneyse kopya sığdır ve nesne referansları paylaşılır. Koşul açık,
saf ve tek sorumluluklu olmalıdır; “neden seçildi?” sorusu adlandırmayla
cevaplanmalıdır.

## 17. Reduction Contract

`reduce`, biriktirici ile sıradaki öğeyi birleştirerek tek sonuç üretir.
Başlangıç değeri verildiğinde ilk callback `initialValue` ve ilk öğeyle çalışır.
Başlangıç değeri verilmezse ilk öğe biriktirici olur; boş dizide `TypeError`
oluşur. Bu nedenle toplam için `0`, çarpım için `1`, liste için `[]` veya nesne
için `{}` gibi sonuç türüne uygun açık başlangıç değeri tercih edilmelidir.

## 18. Aggregation Patterns

Toplam ve adet, başlangıç değerli basit indirgemelerdir. Ortalama için toplam ile
adet birlikte izlenmeli ve boş koleksiyon kararı ayrıca verilmelidir. Minimum ve
maksimum ilk geçerli öğeden başlatılabilir ya da açık boşluk sonucu taşıyabilir.
Gruplama, bir anahtarın her değeri için ayrı alt koleksiyon oluşturur. Her
toplulaştırmada biriktirici değişmezi yazılmalıdır.

## 19. One Pass Versus Multiple Passes

Tek geçiş daha az dolaşma yapabilir ve çok büyük veride avantaj sağlayabilir;
fakat birbirinden farklı üç hesabı tek karmaşık `reduce` içinde birleştirmek
okunabilirlik ve hata ayıklama maliyetini yükseltebilir. Küçük ve orta veri için
açık `filter` → `map` → `reduce` hattı daha denetlenebilir olabilir. Karar veri
boyutu, bellek, gecikme hedefi, ölçüm ve ekip okunabilirliğiyle verilmelidir.

## 20. Purity and Side Effects

Callback'in aynı girdi için aynı sonucu üretmesi ve dış durumu değiştirmemesi,
dönüşüm hattını test etmeyi kolaylaştırır. Toplam hesaplarken global sayacı
artırmak, `map` içinde kaynak nesneyi değiştirmek veya `sort` çağrısının kaynak
diziyi yerinde değiştirdiğini unutmak gizli yan etkilerdir. Etki gerekiyorsa
hesaplama ile uygulama aşaması ayrılmalıdır.

## 21. Complexity and Memory

Bir koleksiyonu bir kez dolaşan `map`, `filter` ve `reduce` tipik olarak öğe
sayısıyla doğrusal büyür. Zincirleme işlemler ara diziler ve birden çok geçiş
üretebilir. Ancak motor optimizasyonuna dair varsayım ölçüm olmadan kalite kanıtı
değildir. Önce doğru ve açık çözüm kurulmalı; gerçek darboğaz profil ve benchmark
ile doğrulanmalıdır.

## 22. Error and Validation Strategy

Fonksiyon; girdinin gerçekten dizi olup olmadığını, öğe türlerinin beklentiyi
karşılayıp karşılamadığını, `NaN`, boş değer ve eksik alan politikasını açıklar.
Hatalı kayıtları sessizce atlamak veri kaybını saklayabilir. Sözleşmeye göre hızlı
hata, doğrulama sonucu, ayrılmış hata listesi veya güvenli varsayılan seçilebilir;
seçim çağırana görünür olmalıdır.

## 23. Testing Strategy

Örnek tabanlı testler boş, tek öğeli, tekrar eden, negatif, sıfır, karışık geçerli
ve geçersiz değerleri kapsamalıdır. Özellik testleri; `map` uzunluğu korur,
`filter` sonucu kaynak uzunluğunu aşmaz ve toplamda sıra değişimi sonucu bozmaz
gibi değişmezleri sınayabilir. Mutation testinde kaynak koleksiyonun değişmediği
veya kasıtlı değişimin belgelendiği doğrulanmalıdır.

## 24. AI-Assisted Engineering Boundary

AI'dan önce öğrenci koleksiyon sözleşmesini, boş durum kararını ve örnek beklenen
sonuçları yazmalıdır. AI çıktısı; yanlış döngü sınırı, seyrek dizi varsayımı,
başlangıç değersiz `reduce`, kaynak mutation'ı, gereksiz geçiş ve gizli yan etki
açısından incelenmelidir. “Kod çalıştı” kanıt değildir; test matrisi ve sözleşme
karşılaştırması zorunludur.

## 25. Outcome and Assessment Contract

`V01-LO025`, öğrencinin diziyi doğru indekslemesi, dolaşması, dönüştürmesi ve sınır
durumlarını test etmesiyle ölçülür. `V01-LO026`, gerçek bir puan koleksiyonundan
doğrulanabilir toplam, ortalama, minimum, maksimum ve seçim sonuçları üretmesi;
tek geçiş ile çoklu geçiş tasarımını gerekçeli karşılaştırmasıyla ölçülür. Lab ve
challenge yalnız son çıktıyı değil sözleşme, ara durum ve test kanıtını ister.

## 26. Source Register

| # | Kaynak | Tür | Kullanım |
|---:|---|---|---|
| 1 | [ECMAScript 2025](https://tc39.es/ecma262/2025/) | Dil standardı | Dizi ve yinelenme normatif temeli |
| 2 | [ECMAScript Indexed Collections](https://tc39.es/ecma262/2025/multipage/indexed-collections.html) | Dil standardı | Array nesnesi ve prototype işlemleri |
| 3 | [Array.prototype.map specification](https://tc39.es/ecma262/2025/multipage/indexed-collections.html#sec-array.prototype.map) | Dil standardı | Eşleme algoritması |
| 4 | [Array.prototype.filter specification](https://tc39.es/ecma262/2025/multipage/indexed-collections.html#sec-array.prototype.filter) | Dil standardı | Süzme algoritması |
| 5 | [Array.prototype.reduce specification](https://tc39.es/ecma262/2025/multipage/indexed-collections.html#sec-array.prototype.reduce) | Dil standardı | İndirgeme ve boş dizi davranışı |
| 6 | [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Resmî başvuru | JavaScript dizi modeli |
| 7 | [MDN Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections) | Resmî rehber | İndeksli koleksiyon kullanımı |
| 8 | [MDN Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) | Resmî rehber | Döngü biçimleri |
| 9 | [MDN Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | Resmî başvuru | Eşleme sözleşmesi |
| 10 | [MDN Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | Resmî başvuru | Süzme sözleşmesi |
| 11 | [MDN Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) | Resmî başvuru | İndirgeme sözleşmesi |
| 12 | [MDN Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | Resmî başvuru | Callback dolaşması ve sınırlamalar |
| 13 | [MDN Array.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) | Resmî başvuru | Göreli indeks erişimi |
| 14 | [MDN Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) | Resmî başvuru | Uzunluk ve seyrek konumlar |
| 15 | [MDN Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | Resmî başvuru | Girdi türü doğrulama |
| 16 | [MDN Iterative methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) | Resmî başvuru | Ortak callback ve mutation semantiği |
| 17 | [Python Data Structures](https://docs.python.org/3/tutorial/datastructures.html) | Resmî dokümantasyon | Liste ve comprehension karşılaştırması |
| 18 | [Python Functional Programming HOWTO](https://docs.python.org/3/howto/functional.html) | Resmî dokümantasyon | Iterator ve dönüşüm modeli |
| 19 | [Rust core::iter](https://doc.rust-lang.org/stable/core/iter/index.html) | Resmî dokümantasyon | Iterator araçları |
| 20 | [Rust — Processing Items with Iterators](https://doc.rust-lang.org/stable/book/ch13-02-iterators.html) | Resmî kitap | Lazy map, filter ve collect |
| 21 | [Java List Interface](https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html) | Resmî dokümantasyon | Sıralı koleksiyon ve iterator |
| 22 | [.NET Collections](https://learn.microsoft.com/en-us/dotnet/standard/collections/) | Resmî dokümantasyon | Koleksiyon seçimi ve türleri |
| 23 | [Go Slices: usage and internals](https://go.dev/blog/slices-intro) | Resmî blog | Dizi–slice modeli ve sınırlar |
| 24 | [CS2023 Curriculum Guidelines](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf) | Akademik standart | Temel programlama kapsamı |
| 25 | [SWEBOK Guide V4.0a](https://www.computer.org/education/bodies-of-knowledge/software-engineering) | Mesleki standart | Yazılım doğrulama ve kalite bağlamı |
| 26 | [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) | Endüstri standardı | Okunabilir JavaScript uygulaması |
