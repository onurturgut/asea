---
document_type: "research-packet"
document_id: "V01-C13-RP01"
title: "Functions and Contracts Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C13"
blueprint_id: "V01-C13-BP01"
production_packet_id: "V01-C13-CPP-001"
learning_outcomes: ["V01-LO019", "V01-LO020"]
concept_ids:
  - "ASEA-CON-000046"
  - "ASEA-CON-000047"
  - "ASEA-CON-000048"
last_updated: "2026-07-23"
---

# Functions and Contracts Research Packet

## Overview

Bu paket `V01-C13` için fonksiyonu yalnız tekrar kullanılabilir kod bloğu değil; adlandırılmış davranış sınırı ve açık sözleşme olarak ele alır. Araştırma; sorumluluk, kabul edilen girdi, ön koşul, sonuç/son koşul, gözlenebilir etki, hata davranışı ile çağrı–dönüş akışını sınırlar. JavaScript çalıştırılabilir referans dilidir; sözleşme zihinsel modeli teknoloji bağımsızdır.

## Learning Goals

`V01-LO019`, verilen davranış için açık fonksiyon sözleşmesi yazmayı; `V01-LO020`, çağırandan fonksiyona ve dönüşten tekrar çağırana denetim akışını izlemeyi ister. Kanıt; üç contract tablosu, normal-sınır-geçersiz testleri ve en az bir iç içe çağrı izidir.

## Official Sources

1. [ECMAScript — Functions and Classes](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html)
2. [ECMAScript — Function Definitions](https://tc39.es/ecma262/multipage/ecmascript-language-functions-and-classes.html#sec-function-definitions)
3. [ECMAScript — Calls](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-function-calls)
4. [ECMAScript — Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement)
5. [ECMAScript — OrdinaryCallBindThis](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ordinarycallbindthis)
6. [MDN — Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
7. [MDN — Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
8. [MDN — Function Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
9. [MDN — return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
10. [MDN — JavaScript Language Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview)
11. [MDN Learn — Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)
12. [MDN — Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

ECMAScript kaynakları callable nesne, çağrı ifadesi, execution context ve return completion davranışını normatif olarak açıklar. MDN başlangıç düzeyi tanım, declaration/call ayrımı ve çalıştırılabilir örnek sağlar. C13 yalnız function declaration kullanır; expression/arrow karşılaştırması C14 veya sonraki içerik için sınır notudur.

## Supporting Sources

13. [ACM/IEEE/AAAI CS2023 Report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
14. [CS2023 Fundamental Principles](https://csed.acm.org/fundamental-principles/)
15. [Hoare — An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf)
16. [MIT Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf)
17. [Python Tutorial — Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
18. [Oracle Java Tutorial — Defining Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)
19. [Microsoft Learn — Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)
20. [University of New Hampshire — Design by Contract](https://www.cs.unh.edu/~cs619/slides/DesignByContract.pdf)
21. [University of Bern — Design by Contract](https://scg.unibe.ch/download/lectures/p2-2016/P2-03-DesignByContract.pdf)
22. [NISTIR 8397 — Developer Verification](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf)
23. [SEI CERT Java — Methods](https://wiki.sei.cmu.edu/confluence/display/java/Methods)
24. [JML Reference Manual](https://www.cs.ucf.edu/~leavens/JML/jmlrefman/jmlrefman.html)
25. [Eiffel — Design by Contract](https://www.eiffel.org/doc/solutions/Design_by_Contract_and_Assertions)
26. [NASA Software Assurance Guidebook](https://swehb.nasa.gov/display/SWEHBVC/Software+Assurance+and+Software+Safety+Standard)

Çoklu dil belgeleri, fonksiyon/method arayüzünün dil bağımsız çekirdeğini ayırmak için kullanılır. Formal sözleşme notasyonları ileri bağlam sağlar; öğrenci değerlendirmesinde formal ispat veya JML/Eiffel sözdizimi istenmez.

## Concept Coverage

| Concept | Kapsam |
|---|---|
| `ASEA-CON-000046` | Fonksiyon, davranış sınırı, sorumluluk, abstraction, gövde |
| `ASEA-CON-000047` | Contract, kabul edilen girdi, ön/son koşul, etki, hata |
| `ASEA-CON-000048` | Tanım/çağrı ayrımı, caller/callee, call frame sezgisi, return |

## Claim Coverage

- `ASEA-CLM-000046`: Fonksiyon, tanımlı girdiyle bir sorumluluk gerçekleştiren adlandırılmış veya erişilebilir davranış birimidir.
- `ASEA-CLM-000047`: Fonksiyon sözleşmesi kabul edilen girdiyi, ön koşulları, çıktıyı/son koşulu, etkileri ve hata davranışını açıklar.
- `ASEA-CLM-000048`: Çağrı, denetimi fonksiyona aktarır; sonuç veya hata sonrasında çağıran bağlama döndürür.

## Evidence Mapping

`ASEA-EV-000009` program abstraction ve modülerlik yetkinliğini; `ASEA-EV-000013` fonksiyon mekanizmasına ilişkin resmî davranışı destekler. Hoare ve Design by Contract kaynakları ön koşul/son koşul modelini; NIST/NASA kaynakları doğrulanabilir sözleşme ve test önemini destekler.

## Terminology

- Fonksiyon (Function)
- Davranış sınırı (Behavior Boundary)
- Sorumluluk (Responsibility)
- Soyutlama (Abstraction)
- Sözleşme (Contract)
- Ön koşul (Precondition)
- Son koşul (Postcondition)
- Gözlenebilir etki (Observable Effect)
- Hata davranışı (Failure Behavior)
- Çağıran (Caller)
- Çağrılan (Callee)
- Çağrı (Invocation)
- Çağrı çerçevesi (Call Frame)
- Dönüş (Return)

## Mental Models

1. **Hizmet masası:** Arayüz talebi ve vaadi açıklar; iç adımlar gizlenebilir.
2. **Hak ve yükümlülük:** Çağıran ön koşulu, fonksiyon geçerli çağrıda son koşulu yerine getirir.
3. **Ayraç:** Çağıran çağrı noktasında bekler; dönüşte hemen sonraki adımdan sürer.
4. **Yığın kartları:** Her aktif çağrı kendi yerel bilgisi ve dönüş noktasıyla üstte bir kart oluşturur.

## Historical Context

Fonksiyon ve procedure soyutlamaları tekrar, parçalara ayırma ve matematiksel fonksiyon fikrinden beslenir. Hoare mantığı ön/son koşullarla program davranışını ilişkilendirir. Design by Contract, çağıran ile hizmet sağlayan arasındaki sorumlulukları açıklaştırır. Modern diller contract'ın bir kısmını tür, assertion, şema, belge ve testlerle ifade eder; tek araç bütün davranışı kapsamaz.

## Technical Details

Function declaration kodu tanımlar; çağrı ifadesi çalıştırır. Çağrı sırasında argüman değerleri, çağrıya özel execution context ve dönüş noktası oluşur. `return expression`, ifadeyi değerlendirir, fonksiyon gövdesini sonlandırır ve değeri çağırana iletir. `return` yoksa JavaScript normal tamamlanmada `undefined` üretir. İç içe çağrılarda en son başlayan çağrı önce tamamlanır.

Sözleşme, uygulama adımlarının listesi değildir. “Diziyi döngüyle dolaş” implementation seçimi; “geçerli fiyatlar için toplamı döndür” davranış vaadidir. Ön koşul çağrıdan önce doğru olmalıdır; son koşul, geçerli çağrı normal tamamlandığında doğru olması vaat edilen özelliktir. Failure behavior geçersiz girdinin reddi, hata fırlatma veya kontrollü sonuç olarak açıkça seçilir.

## Code References

```js
function calculateRectangleArea(width, height) {
  return width * height;
}

const area = calculateRectangleArea(4, 3);
console.log(area); // 12
```

Contract: genişlik ve yükseklik sonlu, negatif olmayan sayıdır; sonuç çarpımlarıdır; girdi değişmez; geçersiz girdinin davranışı ayrıca tanımlanmalıdır.

```js
function double(number) {
  return number * 2;
}

function addOne(number) {
  return number + 1;
}

const result = addOne(double(3));
```

İz: `double(3)` çağrılır ve 6 döner; sonra `addOne(6)` çağrılır ve 7 döner; atama tamamlanır.

## Best Practices

- Fonksiyonu tek ve alan dilinde bir davranışla adlandır.
- Uygulamadan önce accepted input, precondition, output/postcondition, effect ve failure yaz.
- Gizli global girdiyi sözleşmeye taşı veya açık bağımlılık yap.
- Normal, sınır ve geçersiz vaka ekle.
- Tanım ile çağrıyı, yazdırma ile değer döndürmeyi ayır.
- Contract'ı implementation ayrıntısına bağlama.
- Caller/callee yükümlülüğünü belirsiz bırakma.
- AI fonksiyonundan contract ve çağrı izi iste.

## Common Mistakes

- Fonksiyonu yalnız satırları taşıyan kutu sanmak.
- Bir fonksiyona birden fazla ilgisiz sorumluluk vermek.
- Girdiyi global değişkenden gizlice okumak.
- `console.log` ile `return` davranışını karıştırmak.
- Fonksiyonu tanımlayınca çalıştığını sanmak.
- Eksik `return` sonrasında `undefined` davranışını atlamak.
- Ön koşulu belgelemeden çağıranı suçlamak.
- Geçersiz girdinin davranışını tesadüfe bırakmak.
- Implementation adımlarını contract sanmak.
- Yan etkiyi yalnız dönüş değerini test ederek kaçırmak.

## Edge Cases

- Sıfır parametreli davranış ve gizli girdi riski.
- Geçersiz tür, `NaN`, sonsuz veya negatif sayı.
- Boş metin ve yalnız boşluk.
- Sıfır değerinin geçerli sınır mı hata mı olduğu.
- `return` olmaması ve `undefined`.
- Koşullu `return` nedeniyle bazı yollarda eksik sonuç.
- Fonksiyonun girdiyi değiştirmesi.
- İç çağrının hata üretmesi ve dış çağrının tamamlanmaması.
- Aynı fonksiyonun ardışık çağrılarında sızan durum.

## Real World Examples

- Fiyat toplamı hesaplama.
- Kullanıcı girdisi doğrulama.
- Ölçü birimi dönüştürme.
- Dosya adı normalleştirme.
- Sipariş uygunluğu kararı.
- Rapor satırı biçimlendirme.
- CLI komutunu küçük sorumluluklara ayırma.
- AI tarafından üretilen utility fonksiyonunun contract denetimi.

## Interview Notes

Güçlü aday function syntax ezberinden önce sorumluluk, input, output, effect ve failure açıklar. “Bu fonksiyon neyi garanti eder?”, “geçersiz girdiden kim sorumludur?”, “print ile return farkı nedir?”, “iç içe çağrı hangi sırada döner?” ve “hidden input nasıl test sorununa dönüşür?” soruları ayırt edicidir.

## Exercise Ideas

- Davranışı fiille adlandırma.
- Koddan contract çıkarma.
- Contract'tan üç test üretme.
- Hidden global girdiyi bulma.
- `console.log` yerine değer döndürme.
- Eksik `return` yolunu onarma.
- İki seviyeli çağrı izi.
- Ön/son koşul karşı örneği.
- Aynı contract için iki implementation karşılaştırma.
- AI contract audit.

## Quiz Ideas

25 soru; tanım/çağrı, sorumluluk, abstraction, caller/callee, contract bileşenleri, ön/son koşul, etki, hata, `return`, `undefined`, iç çağrı sırası, hidden input ve test eşlemesini kapsamalıdır. Anahtar ayrı dosyada tutulmalıdır.

## Lab Ideas

`V01-C13-L01`, fiyat hesaplama, kullanıcı adı normalleştirme ve zamanlama uygunluğu için üç function contract yazdırır. Öğrenci önce contract ve vaka matrisi üretir, sonra implementation yazar, nested call trace çıkarır ve bir contract violation'ı testle teşhis eder.

## Animation Ideas

- Definition ile invocation ayrımı.
- Caller'da duraklama, callee frame oluşumu ve return.
- İç çağrılarda yığın kartlarının eklenip çıkarılması.
- Precondition okunun caller'dan, postcondition okunun function'dan gelmesi.
- Hidden global input'un contract dışından sızması.

## Further Reading

ECMAScript call/return davranışı ve MDN Functions önce okunmalıdır. CS2023 abstraction/modularity bağlamını, Hoare ve Design by Contract ön/son koşul modelini sağlar. Parametre ve return ayrıntıları C14; scope, lifetime ve side effects C15; decomposition C16 kapsamındadır.

## Review Notes

- Arrow/function expression karşılaştırması ana hedef değildir.
- Parametre geçirme ayrıntıları C14'e bırakılır.
- Scope, closure ve side-effect taksonomisi C15'e bırakılır.
- Formal Hoare proof veya contract dili sözdizimi istenmez.
- Async call, event loop, recursion ve higher-order function dışarıdadır.
- “Tek sorumluluk” satır sayısı değil, değişme nedeni ve contract bütünlüğüyle yorumlanır.

## Approval

Repository Owner toplu Draft üretimini yetkilendirmiştir. Research Ready, bağımsız inceleme, öğrenci pilotu veya Stable yayın kararı değildir.

## Version

`0.1.0` — Living ECMAScript, güncel MDN, CS2023 ve destekleyici contract kaynakları 23 Temmuz 2026 tarihinde doğrulandı.

## Status

**Research Ready.** Scope, source, concept, claim, evidence, outcome ve assessment eşlemesi Chapter Production için hazırdır.
