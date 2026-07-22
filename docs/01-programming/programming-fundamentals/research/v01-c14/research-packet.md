---
document_type: "research-packet"
document_id: "V01-C14-RP01"
title: "Parameters and Return Values Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C14"
blueprint_id: "V01-C14-BP01"
production_packet_id: "V01-C14-CPP-001"
learning_outcomes: ["V01-LO021"]
concept_ids:
  - "ASEA-CON-000049"
  - "ASEA-CON-000050"
  - "ASEA-CON-000051"
last_updated: "2026-07-23"
---

# Parameters and Return Values Research Packet

## Overview

Bu paket `V01-C14` için fonksiyon arayüzündeki veri akışını sınırlar: parametre ile argüman ayrımı, konumsal bağlama, eksik/fazla argüman davranışı, varsayılan değer, JavaScript'te değer aktarımı, açık return, print/return farkı, birleştirme ve çoklu sonuç modelleme. Hedef sözdizimi çoğaltmak değil, gerekli girdiyi küçük ve görünür tutup çıktıyı çağıranın kullanabileceği biçimde döndürmektir.

## Learning Goals

`V01-LO021`, öğrencinin gereksiz, türetilebilir, yinelenen veya gizli girdileri belirleyip parametre listesini gerekli veriye indirmesini ve print ile return akışını izleyerek ayırmasını ister. Kanıt; önce/sonra interface tablosu, parameter–argument bağlama izi, mutation gözlemi, explicit return pipeline'ı ve sınır/geçersiz testlerdir.

## Official Sources

1. [ECMAScript — Parameter Lists](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-parameter-lists)
2. [ECMAScript — Function Definitions](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-function-definitions)
3. [ECMAScript — Function Calls](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-function-calls)
4. [ECMAScript — Argument Lists](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-argument-lists)
5. [ECMAScript — Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement)
6. [MDN — Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
7. [MDN — Parameter Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)
8. [MDN — Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
9. [MDN — Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
10. [MDN — Return Values](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values)
11. [MDN — return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
12. [MDN — JavaScript Language Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview)

ECMAScript kaynakları argument list evaluation, formal parameter initialization ve return completion davranışını normatif açıklar. MDN; parameter/argument ayrımı, default/rest sözdizimi, JavaScript değer aktarımı ve return kullanımını uygulamalı biçimde açıklar. Rest parameter yalnız sınırlı tanıma düzeyinde kullanılır; ana outcome uzun listeyi rest ile gizlemek değildir.

## Supporting Sources

13. [ACM/IEEE/AAAI CS2023 Report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
14. [CS2023 Foundations of Programming Languages](https://csed.acm.org/wp-content/uploads/2023/09/FPL-Version-Gamma.pdf)
15. [Python Tutorial — Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
16. [Oracle Java Tutorial — Passing Information to a Method](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html)
17. [Microsoft Learn — Method Parameters](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/method-parameters)
18. [Go Specification — Function Types](https://go.dev/ref/spec#Function_types)
19. [Rust Book — Functions](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)
20. [NISTIR 8397 — Developer Verification](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf)
21. [SEI CERT Java — Methods](https://wiki.sei.cmu.edu/confluence/display/java/Methods)
22. [Refactoring — Introduce Parameter Object](https://refactoring.com/catalog/introduceParameterObject.html)
23. [Refactoring — Remove Flag Argument](https://refactoring.com/catalog/removeFlagArgument.html)
24. [Refactoring — Replace Query with Parameter](https://refactoring.com/catalog/replaceQueryWithParameter.html)
25. [Refactoring — Replace Parameter with Query](https://refactoring.com/catalog/replaceParameterWithQuery.html)
26. [NASA Software Engineering Handbook](https://swehb.nasa.gov/)

Çoklu dil belgeleri kavram ayrımını kontrol eder; JavaScript'e başka dilin reference/out parametre davranışı taşınmaz. Refactoring kaynakları arayüz değişikliklerinin bağlama bağlı alternatiflerini gösterir: her değeri parametre yapmak veya her parametreyi kaldırmak evrensel kural değildir.

## Concept Coverage

| Concept | Kapsam |
|---|---|
| `ASEA-CON-000049` | Formal parameter, actual argument, position, default, missing/extra value, value passing |
| `ASEA-CON-000050` | Explicit result, return path, `undefined`, print/mutation/return channel ayrımı |
| `ASEA-CON-000051` | Signature, necessary input, data-flow pipeline, composition, multiple-result model |

## Claim Coverage

- `ASEA-CLM-000049`: Parameter tanımdaki girdi konumunu, argument çağrı sırasında bu konuma sağlanan değeri temsil eder.
- `ASEA-CLM-000050`: Return value, fonksiyonun çağırana açıkça ilettiği sonuçtur.
- `ASEA-CLM-000051`: Signature; isim, parametreler ve sonuç contract'ı üzerinden çağrılabilir arayüzü tanımlar.

## Evidence Mapping

`ASEA-EV-000009`, function abstraction ve parameter passing müfredat kapsamını; `ASEA-EV-000013`, ECMAScript parameter initialization, argument evaluation ve return davranışını destekler. Resmî dil belgeleri farklı mekanizmaların dil bağımlı olduğunu gösterir. Refactoring katalogları input surface trade-off'larını örnekler.

## Terminology

- Parametre (Parameter)
- Argüman (Argument)
- Biçimsel parametre (Formal Parameter)
- Gerçek argüman (Actual Argument)
- Parametre listesi (Parameter List)
- Argüman listesi (Argument List)
- Konumsal bağlama (Positional Binding)
- Varsayılan parametre (Default Parameter)
- Kalan parametre (Rest Parameter)
- Dönüş değeri (Return Value)
- Veri akışı (Data Flow)
- Fonksiyon bileşimi (Function Composition)
- Çoklu sonuç modelleme (Multiple-Result Modeling)
- Komut–sorgu sezgisi (Command–Query Intuition)

## Mental Models

1. **Etiketli koltuklar:** Parametreler yerleri, argümanlar çağrıya özel değerleri temsil eder.
2. **Değer kopyası:** JavaScript parametre bağlamasına değer aktarır; nesne değeri bir referans olduğundan özellik mutation'ı dışarıdan görülebilir.
3. **Çıkış kanalları:** Return çağırana; print kullanıcı/konsola; mutation dış duruma gider.
4. **Boru hattı:** Bir fonksiyonun dönüşü sonraki fonksiyonun argümanı olabilir.
5. **Arayüz bütçesi:** Her parametre yeni bağımlılık ve test boyutu ekler; yalnız gerekli veri taşınır.

## Historical Context

Parametre aktarımı, procedure ve function abstraction'ın temelidir. Diller call-by-value, reference, value-result ve başka modeller sunabilir. JavaScript için güvenli ifade “argüman ifadeleri değerlendirilir ve elde edilen değerler parametrelere bağlanır”dır. Nesne değeri bir referansı temsil ettiği için fonksiyon içindeki property mutation çağıran tarafından görülebilir; bu, JavaScript'in nesneyi call-by-reference ile yeniden bağladığı anlamına gelmez.

## Technical Details

JavaScript'te argümanlar soldan sağa değerlendirilir ve konumlarına göre parametrelere bağlanır. Eksik argüman parametreyi `undefined` bırakır. Fazla argüman değerlendirilir fakat adı konmuş parametre yoksa normal gövde bunları kullanmaz. Default parameter, argüman verilmediğinde veya açıkça `undefined` olduğunda devreye girer; `null`, `0`, `false` ve boş metin varsayılanı tetiklemez.

Primitive değer parametresini yeniden atamak çağıranın değişkenini yeniden atamaz. Nesne değerinin property’sini değiştirmek aynı nesneye erişen çağıranda görülür. Parametreyi yeni nesneye yeniden atamak çağıranın binding'ini değiştirmez. Bu ayrım mutation contract'ı için zorunludur.

`return expression` ifadeyi değerlendirir, fonksiyonu normal dönüşle sonlandırır ve değeri çağrı ifadesinin sonucu yapar. Açık return yoksa `undefined` oluşur. `console.log` etkisi dönüş değeri değildir. Birden fazla mantıksal sonuç gerektiğinde sabit biçimli object gibi tek anlamlı sonuç modeli kullanılabilir; her yolda farklı tür döndürmek çağıranın contract'ını zorlaştırır.

## Code References

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(20, 3);
```

`price` ve `quantity` parametre; `20` ve `3` argümandır. Değerler sırasıyla bağlanır ve 60 çağrı noktasına döner.

```js
function multiply(number, multiplier = 1) {
  return number * multiplier;
}

multiply(5); // 5
multiply(5, undefined); // 5
multiply(5, null); // 0 — default çalışmaz
```

Default, her “falsy” değerde değil yalnız eksik veya `undefined` argümanda çalışır.

## Best Practices

- Her parametre için “sonucu veya zorunlu etkiyi gerçekten değiştiriyor mu?” sorusunu sor.
- Kullanılmayan, türetilebilir, yinelenen veya globalden gizlice okunan girdiyi belirle.
- Uzun positional listede çağrı okunabilirliğini ve yanlış sıra riskini incele.
- Default'u yalnız gerçek ve güvenli varsayılan varsa kullan.
- Parameter reassignment ile object mutation'ı ayır.
- Hesaplama değerini açık return ile ilet; print kararını çağıranda tut.
- Bütün geçerli yollarda tutarlı result shape kullan.
- Bileşim öncesi output–input contract uyumunu doğrula.
- Interface refactoring'i caller testleriyle güvenceye al.

## Common Mistakes

- Parameter ve argument sözcüklerini bağlamsız karıştırmak.
- Argüman sırasını yanlış vermek.
- Eksik argümanın otomatik hata olacağını sanmak.
- Default parameter'ın `null`, 0 veya boş metinde çalışacağını sanmak.
- Fazla argümanın çağrılmadığını sanmak; ifadeler yine değerlendirilebilir.
- Primitive reassignment ile object mutation'ı aynı modellemek.
- Kullanılmayan parametreyi “ileride gerekir” diye taşımak.
- Fonksiyonun türetebildiği değeri ayrıca parametre olarak istemek.
- Bir flag parametresiyle iki farklı sorumluluğu gizlemek.
- Hesaplamayı yalnız yazdırıp return sonucunu kaybetmek.
- Bir yolda sayı, başka yolda metin veya belirsiz `undefined` döndürmek.
- Çoklu sonucu global değişkenlere yazmak.

## Edge Cases

- Sıfır argüman ve bütün parametrelerin `undefined` olması.
- Açık `undefined` ile argümanın hiç verilmemesi.
- `null`, 0, `false`, boş metin ve `NaN`.
- Fazla argümanın yan etkili ifade olması.
- Default ifadesinin çağrı başına yeniden değerlendirilmesi.
- Daha önceki parametreye bağlı default.
- Nesne property mutation ve parametre reassignment farkı.
- Aynı nesnenin iki parametreye verilmesi (aliasing).
- Bütün return yollarında tutarsız result shape.
- Çoklu sonuçta bir alanın bazı yollarda eksik olması.
- Return sonrası erişilemez kod.

## Real World Examples

- Fiyat, adet ve indirim girdisini açıklaştırma.
- Tarih biçimlendirme için gereksiz locale/timezone gizliliğini kaldırma.
- CLI hesaplamasını print yerine return ile test edilebilir yapma.
- `isPreview` flag'ine göre iki iş yapan fonksiyonu ayırma.
- Adres alanlarını uzun positional liste yerine anlamlı modele taşıma.
- Validation sonucunu `{ ok, value, errors }` gibi tutarlı modelle döndürme.
- AI tarafından eklenen kullanılmayan veya duplicate parametreyi tespit etme.

## Interview Notes

Güçlü aday parameter/argument ayrımını çağrı üzerinden gösterir; eksik ve fazla JavaScript argüman davranışını bilir; object mutation ile parameter reassignment'ı izler; uzun listeyi otomatik object'e çevirmek yerine trade-off açıklar; print ile return kanallarını ayırır. “Bu parametre neden gerekli?”, “değeri içeride türetebilir misiniz?”, “default hangi değerlerde çalışır?” ve “bu result shape her yolda aynı mı?” soruları ayırt edicidir.

## Exercise Ideas

- Parameter–argument bağlama tablosu.
- Yanlış sıra hatası.
- Eksik/fazla argüman trace'i.
- Default ve `null` karşı örneği.
- Primitive reassignment deneyi.
- Object mutation deneyi.
- Unused ve derived input kaldırma.
- Flag argument analizi.
- Print'i explicit return'e dönüştürme.
- Çoklu sonuç result object'i.
- Üç fonksiyonluk data-flow pipeline.
- AI interface audit.

## Quiz Ideas

25 soru; parameter/argument, position, missing/extra value, default, `undefined`/`null`, value passing, primitive/object davranışı, necessary input, long list, return/print, missing return, result shape, data flow, composition ve command-query sezgisini kapsamalıdır. Anahtar ayrı dosyada bulunmalıdır.

## Lab Ideas

`V01-C14-L01`, gereksiz yedi parametreli ve sonucu yalnız yazdırıp globale yazan bir utility sunar. Öğrenci unused, derived, duplicate ve hidden input'ları sınıflandırır; interface'i küçültür; hidden output'u return modeline taşır; önce/sonra caller'ları aynı contract testleriyle karşılaştırır.

## Animation Ideas

- Argument ifadelerinin soldan sağa değerlendirilip parametre koltuklarına bağlanması.
- Eksik argümanda `undefined`, default parametrede varsayılan değer.
- Primitive reassignment ve object property mutation'ın yan yana izi.
- Print okunun konsola, return okunun caller'a gitmesi.
- Bir return değerinin sonraki fonksiyona argument oluşu.
- Uzun parameter listeden küçük anlamlı interface'e dönüşüm.

## Further Reading

Normatif davranış için ECMAScript Parameter Lists, Argument Lists ve Return Statement; uygulama için MDN Functions, Default Parameters ve Return Values okunmalıdır. CS2023 parameter passing ve composition bağlamı sağlar. Scope/mutation etkileri C15, decomposition C16, structured data models C17-C18'de derinleşir.

## Review Notes

- Rest parameter tanıtılır fakat uzun contract sorununu gizleyen varsayılan çözüm yapılmaz.
- Destructuring, higher-order parameter ve advanced signature typing dışarıdadır.
- “JavaScript pass-by-reference” denmez; değer aktarımı ve object-reference value ayrımı kullanılır.
- Multiple return, tutarlı tek object/array sonuç modeli olarak anlatılır; C18 domain modeling önden öğretilmez.
- Command-query yalnız “değer soran davranış ile etki yapan komutu ayırmayı düşün” sezgisidir; katı mimari kural değildir.
- Parametre sayısı için evrensel sayısal eşik verilmez.

## Approval

Repository Owner toplu Draft üretimini yetkilendirmiştir. Research Ready, bağımsız inceleme, öğrenci pilotu veya Stable yayın kararı değildir.

## Version

`0.1.0` — Living ECMAScript, güncel MDN, CS2023 ve kurumsal/dil kaynakları 23 Temmuz 2026 tarihinde doğrulandı.

## Status

**Research Ready.** Scope, source, concept, claim, evidence, outcome ve assessment eşlemesi Chapter Production için hazırdır.
