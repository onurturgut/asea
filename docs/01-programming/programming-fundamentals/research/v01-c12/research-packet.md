---
document_type: "research-packet"
document_id: "V01-C12-RP01"
title: "Nested and Composite Control Flow Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C12"
blueprint_id: "V01-C12-BP01"
production_packet_id: "V01-C12-CPP-001"
learning_outcomes: ["V01-LO018"]
concept_ids:
  - "ASEA-CON-000043"
  - "ASEA-CON-000044"
  - "ASEA-CON-000045"
last_updated: "2026-07-23"
---

# Nested and Composite Control Flow Research Packet

## Overview

Bu paket `V01-C12` için iç içe ve bileşik kontrol akışının teknik sınırını ders üretiminden önce belirler. Hedef, girintiyi yalnız biçimsel bir sorun gibi sunmak değil; dış ve iç kararların hangi yürütme yollarını oluşturduğunu, durum değişikliklerinin bu yollar boyunca nasıl izlendiğini ve davranış korunarak akışın nasıl sadeleştirildiğini kanıtlanabilir hâle getirmektir. JavaScript yürütülebilir örnek dilidir; ana zihinsel model dilden bağımsızdır.

## Learning Goals

`V01-LO018`, öğrencinin iç içe bir akış için uygulanabilir yürütme yollarını çıkarmasını ve davranışı koruyarak gereksiz iç içeliği azaltmasını ister. Kabul edilebilir kanıt; yol tablosu, durum izi, normal-sınır-geçersiz vaka testleri, önce/sonra davranış karşılaştırması ve yapılan tasarım kararının gerekçesidir. Öğrenci yalnız daha az satır veya daha az girinti üretmekle sonucu karşılamış sayılmaz.

## Official Sources

1. [ECMAScript — Statements and Declarations](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html)
2. [ECMAScript — If Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-if-statement)
3. [ECMAScript — Iteration Statements](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-iteration-statements)
4. [ECMAScript — Break Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-break-statement)
5. [ECMAScript — Continue Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-continue-statement)
6. [ECMAScript — Return Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-return-statement)
7. [MDN — Control Flow and Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
8. [MDN — Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
9. [MDN — if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
10. [MDN — break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
11. [MDN — continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
12. [MDN — return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

ECMAScript kaynakları koşul değerlendirmesi ile `break`, `continue` ve `return` tamamlanmalarının normatif davranışını tanımlar. MDN aynı davranışları geliştirici odaklı örneklerle açıklar. Ders, etiketli ifadeleri yalnız tanıma düzeyinde anabilir; başlangıç öğrencisi için varsayılan sadeleştirme aracı yapmaz.

## Supporting Sources

13. [ACM/IEEE/AAAI Computer Science Curricula 2023](https://csed.acm.org/)
14. [NIST — Structured Testing Methodology](https://www.nist.gov/publications/structured-testing-testing-methodology-using-cyclomatic-complexity-metric-0)
15. [NIST SP 500-235](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf)
16. [McCabe — A Complexity Measure](https://www.cs.du.edu/~snarayan/sada/teaching/COMP3705/lecture/p1/mccabe.pdf)
17. [Hoare — An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf)
18. [MIT Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf)
19. [Refactoring — Replace Nested Conditional with Guard Clauses](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)
20. [Refactoring Catalog](https://refactoring.com/catalog/index.html)
21. [Dijkstra and Structured Programming History](https://courses.cs.washington.edu/courses/cse503/08wi/design-history.pdf)
22. [Python Tutorial — Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
23. [Oracle Java Tutorial — Control Flow](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html)
24. [Microsoft Learn — Selection Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements)
25. [Microsoft Learn — Iteration Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements)
26. [NISTIR 8397 — Guidelines on Minimum Standards for Developer Verification](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf)

Çoklu dil kaynakları yalnız yapısal kavramın dil bağımsızlığını kontrol eder. McCabe ve NIST, kontrol akışı grafiği ile temel yol sınama düşüncesini destekler; bir sayısal metriğin tek başına okunabilirlik veya hata olasılığı hükmü verdiği iddia edilmez. Refactoring kataloğu guard clause dönüşümünü örnekler; dönüşüm test kanıtı olmadan doğru kabul edilmez.

## Concept Coverage

| Concept | Kapsam |
|---|---|
| `ASEA-CON-000043` | İç içe karar, iç içe döngü, dış/iç yapı, yürütme yolu, durum izi |
| `ASEA-CON-000044` | Yol etkileşimi, uygulanabilir yol, kontrol akışı grafiği sezgisi, ölçüm sınırları |
| `ASEA-CON-000045` | Koruma koşulu, erken çıkış, adlandırılmış koşul, davranış koruyan dönüşüm |

## Claim Coverage

- `ASEA-CLM-000043`: İç içe kontrol akışı, bileşik kararları veya tekrarlanan boyutları temsil etmek için bir kontrol yapısını diğerinin içine yerleştirir.
- `ASEA-CLM-000044`: İç içelik ve etkileşen karar yolları, okuyucunun aynı anda taşıması gereken bağlamı ve sınanması gereken davranış kümelerini artırır.
- `ASEA-CLM-000045`: Koruma koşulları sınır durumlarını erken ele alarak ana yolu sadeleştirebilir; doğruluk, önce/sonra davranış kanıtına bağlıdır.

## Evidence Mapping

`ASEA-EV-000009`, programlama, algoritmik düşünme ve sınama yetkinliği kapsamını; `ASEA-EV-000012`, ECMAScript kontrol aktarımının normatif örneğini destekler. NIST ve McCabe kaynakları bağımsız yolların sınama planındaki rolünü açıklar. Hoare ve MIT kaynakları durum değişmezleri ile davranış koruma sezgisini güçlendirir. Refactoring kaynağı guard clause biçimini gösterir. Bu chapter, formal doğrulama veya tek bir karmaşıklık eşiği öğretmez.

## Terminology

- İç içe kontrol akışı (Nested Control Flow)
- İç içe dal (Nested Branch)
- İç içe döngü (Nested Loop)
- Dış yapı (Outer Structure)
- İç yapı (Inner Structure)
- Yürütme yolu (Execution Path)
- Uygulanabilir yol (Feasible Path)
- Kontrol akışı karmaşıklığı (Control-Flow Complexity)
- Kontrol akışı grafiği (Control-Flow Graph)
- Kartezyen yineleme (Cartesian Iteration)
- Koruma koşulu (Guard Clause)
- Erken çıkış (Early Exit)
- Adlandırılmış koşul (Named Predicate)
- Davranış koruyan dönüşüm (Behavior-Preserving Refactoring)
- Karakterizasyon testi (Characterization Test)

## Mental Models

1. **Kapılar:** Bir iç bloğa ulaşmak için dışarıdaki bütün kapıların doğru sırada açılması gerekir.
2. **Yol haritası:** Her karar bir ayrımdır; yol, başlangıçtan sonuca kadar alınan dalların sırasıdır.
3. **Koordinat tablosu:** İki bağımsız döngü, her dış değer için bütün iç değerleri üretir; `m × n` çift oluşur.
4. **Sırt çantası:** Derin iç içelik, okuyucunun dış koşulları zihninde taşımasını gerektirir.
5. **Giriş kontrolü:** Koruma koşulu geçersiz veya bitmiş vakayı kapıda durdurur; ana yol daha az bağlamla okunur.
6. **Davranış sözleşmesi:** Sadeleştirme, aynı girdilerde aynı gözlenebilir sonuçları üretmelidir.

## Historical Context

Yapılandırılmış programlama, keyfî sıçramalar yerine sıralama, seçim ve yinelemenin bileşimini öne çıkardı. Kontrol akışı grafikleri bir programın olası geçişlerini düğüm ve kenarlarla görünür kıldı. McCabe'ın çevrimsel karmaşıklığı bağımsız yol sayısına ilişkin bir ölçü sundu; sonraki yaklaşımlar insanın iç içeliği okurken taşıdığı bilişsel yükü ayrıca ele aldı. Eğitimde güvenli sonuç şudur: ölçüm bir inceleme sinyalidir, bağlamdan bağımsız kalite kararı değildir.

## Technical Details

İç içe koşulda iç karar yalnız dış koşulun ilgili dalı seçildiğinde değerlendirilir. `else`, sözdizimsel olarak en yakın eşleşmemiş `if` ile ilişkilidir; süslü parantez kullanımı sahipliği görünür kılar. Bağımsız iki ikili karar en fazla dört doğruluk birleşimi üretse de programın koşulları bazı birleşimleri imkânsız kılabilir. Bu yüzden sözdizimsel olasılık ile uygulanabilir yol ayrılır.

İç içe döngüde iç döngü, dış döngünün her turunda kendi başlangıcından çalışır. Dış tur sayısı `m`, iç tur sayısı her dış turda sabit `n` ise gövde `m × n` kez yürür. İç sınır dış değere bağlıysa toplam `n₁ + n₂ + ... + nₘ` olur. Etiketsiz `break` yalnız en içteki geçerli yapıyı sonlandırır; `continue` geçerli en iç döngünün sonraki turuna geçer.

`if (A) { if (B) { eylem(); } }` yapısı, dış veya iç blokta başka davranış ve ayrı `else` yoksa çoğu durumda `if (A && B) { eylem(); }` biçimine dönüştürülebilir. Ancak değerlendirme sırası, yan etkiler ve hata üretimi korunmalıdır. `A && B` kısa devre yaptığı için `B`, yalnız `A` doğru olduğunda değerlendirilir; bu özellik özgün iç içe davranışla eşleştirilmelidir.

Koruma koşulu, bir fonksiyonun geçersiz veya tamamlanmış vakasını `return` ile; bir döngünün ilgisiz turunu `continue` ile; arama tamamlandığında en iç döngüyü `break` ile erken sonlandırabilir. Araç seçimi hangi kapsamdan çıkılacağını açıkça göstermelidir. Çok sayıda dağınık çıkış, kaynak temizliği veya zorunlu son adımlar varsa yeni risk yaratabilir.

## Code References

```js
for (let day = 1; day <= 2; day += 1) {
  for (let slot = 1; slot <= 3; slot += 1) {
    console.log(`Gün ${day}, dilim ${slot}`);
  }
}
```

Çıktı altı çifttir: `(1,1)`, `(1,2)`, `(1,3)`, `(2,1)`, `(2,2)`, `(2,3)`. İç sayaç her dış turda yeniden başlatılır.

```js
function schedule(isActive, hasRoom, conflictCount) {
  if (!isActive) return "inactive";
  if (!hasRoom) return "no-room";
  if (conflictCount > 0) return "conflict";
  return "scheduled";
}
```

Bu örnek C13'te ayrıntılandırılacak fonksiyon sözleşmesini öğretmez; guard davranışını sınırlı olarak gösterir. Önce/sonra sürümleri aynı karar tablosunda sınanmalıdır.

## Best Practices

- Kodu çalıştırmadan önce dıştan içe yol listesi çıkar.
- Her koşula niyet bildiren ad ver; yalnız sözdizimini tekrar eden ad kullanma.
- Her yol için girdi, alınan dallar, durum değişimleri ve çıktı kaydet.
- İç döngünün her dış turda nasıl başladığını açıkça göster.
- `break`, `continue` ve `return` için çıkılan kapsamı yaz.
- Normal, sınır, geçersiz ve çakışan kural vakalarını ayrı sınar.
- Düzleştirmeden önce `else` sahipliğini ve yan etki sırasını doğrula.
- Karmaşıklık metriğini inceleme önceliği olarak kullan; otomatik hükme dönüştürme.
- Küçük, geri alınabilir dönüşümler yap ve her adımda test çalıştır.
- Yapay zekâ önerisinden yol tablosu ve davranış eşdeğerliği kanıtı iste.

## Common Mistakes

- Dış koşul yanlışken iç koşulun yine de değerlendirildiğini sanmak.
- İç döngü sayacını dışarıda tutup ikinci dış turda sıfırlamamak.
- `m + n` ile `m × n` çalışma sayısını karıştırmak.
- `break` komutunun bütün döngülerden çıktığını varsaymak.
- `continue` sonrasında gerekli durum güncellemesini atlamak.
- Bir `else` dalının hangi `if` yapısına ait olduğunu yanlış okumak.
- Yalnız başarılı yolu sınamak.
- İmkânsız yolları gerçek vaka saymak veya uygulanabilir yolu atlamak.
- Girintiyi azaltırken koşul değerlendirme sırasını değiştirmek.
- Yan etkili koşulları `&&` ile birleştirirken davranışı değiştirmek.
- Her erken çıkışı otomatik olarak daha okunabilir kabul etmek.
- Karmaşıklık sayısını ekip bağlamından bağımsız kalite puanı saymak.

## Edge Cases

- Dış koşulun bütün iç akışı erişilemez yapması.
- Sıfır turluk dış veya iç döngü.
- Tek elemanlı iki boyut.
- İç sınırın dış sayaca bağlı olması.
- Aynı çiftin yanlış başlangıç nedeniyle iki kez üretilmesi.
- İlk iç turda `break` ve sonraki dış tura devam edilmesi.
- Son iç turda `continue` davranışı.
- İki koşulun mantıksal olarak birbirini dışlaması.
- Kural önceliğinin sonuç değiştirmesi.
- Boş plan, kapasite sıfır, negatif sınır ve geçersiz durum.
- Koşul içinde durum değiştiren ifade.
- Sadeleştirme sonrası aynı mesajın fakat farklı durum değişiminin üretilmesi.

## Real World Examples

- Günler ve zaman dilimleri arasında uygun randevu arama.
- Satırlar ve sütunlar üzerinde tablo dolaşma.
- Kullanıcı rolü, kaynak durumu ve işlem türüne göre izin kararı.
- Depo ve ürün kombinasyonlarında stok kontrolü.
- Sınıf ve öğrenci kayıtlarını eşleştirme.
- Test girdileri ile beklenen sonuç kombinasyonlarını çalıştırma.
- Oyun tahtasında koordinat dolaşma.
- Çok kurallı sipariş indirimi; kural önceliği açıkça belgelenmelidir.

## Interview Notes

Adaydan girintiyi yorumlaması değil, yürütme yolunu sesli izlemesi istenir. Güçlü cevap dış koşulları, iç koşula erişim şartını, ara durumu, çıkış kapsamını ve eksik testleri belirtir. “Bu `break` hangi döngüyü bitirir?”, “kaç çift üretilir?”, “hangi yollar uygulanamaz?”, “bu dönüşüm davranışı koruduğunu nasıl kanıtlarsınız?” ve “hangi durumda guard clause kullanmazsınız?” soruları ayırt edicidir.

## Exercise Ideas

- İki iç içe koşulu dört girdiyle izleme.
- `else` sahipliğini parantezlerle görünür kılma.
- İki döngüden koordinat tablosu üretme.
- Üçgen iç döngünün toplam tur sayısını hesaplama.
- İç `break` sonrasındaki dış turu tahmin etme.
- Yol tablosundaki erişilemez vakayı bulma.
- İç içe koşulu birleşik koşula dönüştürme.
- Guard clause ile sınır durumunu ayırma.
- Karakterizasyon testleri yazma.
- Yapay zekâ dönüşümündeki davranış farkını bulma.

## Quiz Ideas

25 soru; dış/iç yapı, yol erişilebilirliği, `else` sahipliği, çift sayısı, değişken iç sınır, durum izi, `break`, `continue`, koruma koşulu, erken çıkış, uygulanabilir yol, ölçüm sınırı, davranış eşdeğerliği ve sınama stratejisini kapsamalıdır. Cevap anahtarı ayrı dosyada tutulmalıdır.

## Lab Ideas

`V01-C12-L01`, etkinlik, kapasite, çakışma, öncelik ve gün/zaman kombinasyonlarını içeren çok kurallı bir zamanlayıcı sunar. Öğrenci mevcut yolları çıkarır, erişilemez veya yinelenen kararı bulur, mevcut davranışı testlerle sabitler, adlandırılmış koşullar ve guard kullanarak akışı sadeleştirir, sonra aynı testlerin geçtiğini ve karmaşıklığın neden azaldığını açıklar.

## Animation Ideas

- Dış kapı açılmadan iç kapıya ulaşılamaması.
- Karar ağacında seçilen yolun renkle izlenmesi.
- `m × n` koordinat çiftlerinin tabloya dolması.
- İç `break` sonrasında okun dış döngünün sonraki turuna dönmesi.
- Derin iç içe yapı ile guard tabanlı düz akışın yan yana hareketi.
- Önce/sonra karar tablolarındaki aynı çıktıların eşleşmesi.

## Further Reading

Normatif JavaScript davranışı için ECMAScript, uygulamalı sınırlar için MDN okunmalıdır. NIST ve McCabe temel yol sınama düşüncesini; Hoare ve MIT değişmez/durum reasoning temelini; Refactoring kataloğu guard dönüşümünü destekler. Fonksiyon sözleşmeleri ve parçalama C13-C16'da, koleksiyon dolaşımı C17'de, algoritmik karmaşıklık C21-C23'te ayrıntılandırılacaktır.

## Review Notes

- Formal durum makinesi öğretimi yapılmaz; yalnız “durum + olay → sonraki durum” sezgisi verilir.
- Çevrimsel veya bilişsel karmaşıklık için zorunlu eşik belirlenmez.
- Etiketli `break` JavaScript olanağı olarak anılabilir fakat ana sadeleştirme tekniği değildir.
- Fonksiyon tasarımının sözleşme ve ayrıştırma boyutu C13'e bırakılır.
- Davranış eşdeğerliği yalnız birkaç örnekle değil, uygulanabilir yol ve sınır testleriyle savunulur.
- Her olası veri değeri değil, farklı davranış sınıflarını temsil eden yollar sınanır.

## Approval

Repository Owner'ın toplu içerik üretim yetkisi Draft üretimi kapsar. Bu paket Stable yayın, bağımsız teknik/pedagojik inceleme veya öğrenci pilotu onayı değildir.

## Version

`0.1.0` — İlk araştırma sentezi; living specification, resmî dokümantasyon ve destekleyici kaynaklar 23 Temmuz 2026 tarihinde doğrulandı.

## Status

**Research Ready.** Kaynak, concept, claim, evidence, outcome, assessment ve kapsam dışı konular eşlenmiştir. Sıradaki işlem kitap kalitesindeki ana ders ve tam öğrenme paketidir.
