---
document_type: "research-packet"
document_id: "V01-C10-RP01"
title: "Conditional Execution Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C10"
blueprint_id: "V01-C10-BP01"
production_packet_id: "V01-C10-CPP-001"
learning_outcomes:
  - "V01-LO015"
  - "V01-LO016"
concept_ids:
  - "ASEA-CON-000036"
  - "ASEA-CON-000037"
  - "ASEA-CON-000038"
last_updated: "2026-07-23"
---

# Conditional Execution Research Packet

## Overview

Bu paket, `V01-C10` için ders yazımından önce koşullu yürütme, karar tabloları ve dal kapsamı bilgisini sınırlar. Araştırmanın temel sorusu, doğal dildeki kuralların eksiksiz bir karar modeline, ardından erişilebilir ve sınanabilir kod yollarına nasıl dönüştürüleceğidir. JavaScript öğretim dili olarak kullanılır; temel model dilden bağımsızdır.

## Learning Goals

- `V01-LO015`: Verilen kuralları bütün ilgili durumları kapsayan karar tablosuna ve koşullu akışa dönüştürmek.
- `V01-LO016`: Koşullu dallarda eksik veya erişilemeyen durumları bulmak ve her erişilebilir sonuç için test girdisi seçmek.
- Öğrencinin yalnız `if` sözdizimini değil, kural çözümleme, sıra, varsayılan davranış, erişilebilirlik ve test kanıtını birlikte kullanması gerekir.

## Official Sources

1. [ECMAScript Language: Statements and Declarations — `if`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-if-statement)
2. [ECMAScript Language: Statements and Declarations — `switch`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-switch-statement)
3. [ECMAScript Abstract Operations — ToBoolean](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean)
4. [MDN — `if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
5. [MDN — `switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
6. [MDN — Block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
7. [MDN Learn — Making decisions with conditionals](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)
8. [MDN — Conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
9. [NIST CSRC — Decision or branch coverage](https://csrc.nist.gov/glossary/term/decision_or_branch_coverage)
10. [ISTQB CTFL Syllabus v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)

Normatif JavaScript davranışı ECMAScript kaynağından alınır. MDN sözdizim, uyarı ve geliştirici örnekleri sağlar. NIST ve ISTQB, kapsam ve karar tablosu test terminolojisini destekler.

## Supporting Sources

11. [ACM/IEEE/AAAI Computer Science Curricula 2023](https://csed.acm.org/)
12. [NISTIR 8397 — Guidelines on Minimum Standards for Developer Verification](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf)
13. [NIST SP 500-93 — Software Validation, Verification, and Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-93.pdf)
14. [McCabe — A Complexity Measure](https://www.cs.du.edu/~snarayan/sada/teaching/COMP3705/lecture/p1/mccabe.pdf)
15. [Microsoft Learn — C# Selection Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements)
16. [C# Language Specification — Selection Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/statements#138-selection-statements)
17. [Oracle Java Tutorial — Control Flow Statements](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html)
18. [Oracle Java Tutorial — The `switch` Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html)
19. [OpenStax — Contemporary Mathematics, Logic](https://openstax.org/details/books/contemporary-mathematics)
20. [MIT Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf)

Dil karşılaştırmaları, koşullu yürütmenin genel modelini JavaScript'e özgü ayrıntılardan ayırmak için kullanılır. Eski Oracle eğitim sayfaları güncel Java özelliği öğretmek için değil, temel kontrol akışı karşılaştırması için sınırlı biçimde kullanılmalıdır.

## Concept Coverage

| Concept ID | Kapsam | Bölüm kanıtı |
|---|---|---|
| `ASEA-CON-000036` | Koşul değerlendirme, dal, `if`, `else if`, `else`, seçim, varsayılan durum, sıra ve erişilebilirlik | Akış izleri ve çalışan örnekler |
| `ASEA-CON-000037` | Koşullar, eylemler, kural sütunları, uygulanabilir birleşimler, eksiksizlik ve çelişki | Kargo karar tablosu |
| `ASEA-CON-000038` | Dal sonucu, test girdisi eşleme, kapsam yüzdesi ve kapsamın sınırı | Dal-test matrisi |

## Claim Coverage

- `ASEA-CLM-000036`: Koşullu yürütme, yüklem sonucuna göre çalışacak talimatları seçer.
- `ASEA-CLM-000037`: Karar tablosu, ilgili koşul birleşimlerini ve beklenen eylemleri listeler.
- `ASEA-CLM-000038`: Dal kapsamı, testlerin koşullu kararın ilgili sonuçlarını çalıştırıp çalıştırmadığını ölçer.

Yeni Claim üretilmez. Ders bu üç mevcut iddiayı kaynak, örnek, karşı örnek ve değerlendirme kanıtıyla işler.

## Evidence Mapping

| Evidence | Kullanım |
|---|---|
| `ASEA-EV-000009` | CS2023 tabanlı programlama ve test yetkinliği kapsamı |
| `ASEA-EV-000012` | ECMAScript ifade, koşul ve kontrol aktarımı davranışı |
| ECMAScript `if` algoritması | Koşulun `ToBoolean` ile değerlendirilmesi ve yalnız seçilen Statement'ın çalışması |
| ISTQB/NIST | Karar tablosu sütunları, dal ve kapsam terminolojisi |

## Terminology

- Koşullu yürütme (Conditional Execution)
- Koşul (Condition)
- Dal (Branch)
- Seçim (Selection)
- Varsayılan durum (Default Case)
- Karar tablosu (Decision Table)
- Erişilebilirlik (Reachability)
- Dal sırası (Branch Order)
- Koruma koşulu (Guard Clause)
- Dal kapsamı (Branch Coverage)
- Kontrol akış grafiği (Control-Flow Graph)

İlk anlamlı kullanımın ardından Türkçe karşılık tercih edilir. `if`, `else`, `switch`, `case`, `default` ve `break` dil anahtar sözcükleri İngilizce kalır.

## Mental Models

1. **Yol ayrımı:** Program koşula gelir, sonucu bir kez hesaplar, tek uygun yolu izler ve ortak devam noktasına ulaşır.
2. **İlk eşleşme:** `else if` zincirinde koşullar sırayla sınanır; ilk doğru daldan sonra kalanlar atlanır.
3. **Kural sütunu:** Karar tablosundaki her sütun, koşul birleşimi ile beklenen eylem arasında sözleşmedir.
4. **Kapı kontrolü:** Dal kapsamı, her kapıdan en az bir kez geçilip geçilmediğini söyler; odanın içindeki davranışın doğru olduğunu kanıtlamaz.

## Historical Context

Seçim; sıra ve yinelemeyle birlikte yapılandırılmış programlamanın temel kontrol biçimlerindendir. Karar tabloları, iş kurallarını tablo halinde ifade ederek uygulama ve test arasındaki boşluğu azaltmak için uzun süredir kullanılır. McCabe'nin kontrol akış grafiğine dayalı çalışması, kararların program yapısındaki bağımsız yolları artırdığını görünür kılar. Bu bölüm karmaşıklık metriğini hesaplatmaz; yalnız her yeni kararın ek test ve anlama maliyeti oluşturduğu sezgisini kullanır.

## Technical Details

ECMAScript `if` yürütme algoritması koşul ifadesini değerlendirir, değerini alır, `ToBoolean` uygular ve sonuca göre yalnız ilgili Statement'ı değerlendirir. `else` yoksa ve koşul yanlışsa `if` tamamlanır. `else if`, ayrı bir `elseif` anahtar sözcüğü değil, `else` dalına yerleştirilmiş yeni bir `if` ifadesidir.

Koşullar metin sırasıyla değerlendirilir. Geniş bir koşul özel bir koşuldan önce doğru olursa özel dal erişilemez hale gelebilir. `switch`, seçici ifadeyi bir kez değerlendirir, ilk katı eşit `case` ile eşleşir ve `break`/`return` olmadan sonraki bölümlere geçebilir. Bu “fall-through” davranışı başlangıç öğrencisi için hata riski taşır; yalnız açık gerekçe olduğunda kullanılmalıdır.

## Code References

```js
if (temperature < 0) {
  console.log("Donma riski");
} else if (temperature < 15) {
  console.log("Soğuk");
} else {
  console.log("Ilıman veya sıcak");
}
```

Sıra önemlidir. `temperature < 15` ilk yazılsaydı eksi değerler de o dala girer ve özel “donma” dalı çalışmazdı.

```js
switch (shippingType) {
  case "standard":
    fee = 50;
    break;
  case "express":
    fee = 120;
    break;
  default:
    fee = null;
}
```

`default`, bilinmeyen girdinin sessizce normal bir sınıfa alınmasını önler; alan gereksinimine göre hata veya açık “desteklenmiyor” sonucu daha doğru olabilir.

## Best Practices

- Gereksinimi koddan önce karar tablosuna veya açık kurallara dönüştür.
- Özel ve dar koşulları, onları kapsayan genel koşullardan önce yerleştir.
- Her dalda süslü parantez kullan; “dangling else” ve sonradan eklenen satır hatalarını azalt.
- Koşul ile eylemi ayır; koşul mümkünse yan etkisiz ve isimlendirilmiş olsun.
- Varsayılan davranışı bilinçli seç; sessiz başarısızlık yerine gözlenebilir geçersiz durum üret.
- Her dala ulaşan en az bir test girdisini karar tablosundan türet.
- Yüzde 100 dal kapsamını doğruluk kanıtı olarak sunma; assertion ve gereksinim kalitesini ayrıca incele.

## Common Mistakes

- `=` ile atama yapıp `===` karşılaştırması sanmak.
- Süslü parantez olmadan birden fazla satırın dala ait olduğunu düşünmek.
- Geniş aralığı önce yazarak özel dalı erişilemez yapmak.
- Ayrı `if` ifadelerinin birbirini dışladığını varsaymak; birden fazlası çalışabilir.
- `else if` zincirinde ilk eşleşmeden sonra kontrolün devam ettiğini sanmak.
- Karar tablosunda uygulanabilir bir birleşimi atlamak.
- Birbiriyle çelişen iki kural için öncelik uydurmak.
- `switch` içinde `break` unutmak ve istemsiz geçiş oluşturmak.
- `default` dalında geçersiz girdiyi normal kabul etmek.
- Tek “mutlu yol” testini dal kapsamı sanmak.

## Edge Cases

- Tam sınır değerleri: `<` ile `<=` ayrımı.
- `NaN` karşılaştırmaları ve beklenmeyen türler.
- Boş metin, sıfır, `null` ve `undefined` koşulları.
- Birden çok koşulun aynı anda doğru olduğu bağımsız `if` yapıları.
- Hiçbir koşulun doğru olmadığı ve `else` bulunmadığı durum.
- Aynı eyleme giden farklı karar sütunları.
- Alan açısından imkânsız birleşimler.
- Geniş koşulun gölgelediği erişilemez dal.
- `switch` seçicisinin `case` ile katı eşitlik nedeniyle eşleşmemesi.
- Varsayılan dalın kasıtlı olup olmadığının belirsizliği.

## Real World Examples

- Kargo ücreti: bölge, sepet tutarı, üyelik ve teslimat türü.
- Destek önceliği: etki, aciliyet ve müşteri planı.
- İçerik durumu: taslak, inceleme, onay, yayımlama.
- Girdi doğrulama: eksik, biçimce geçersiz, alan dışında ve geçerli.
- Özellik yayılımı: sistem bayrağı, kullanıcı grubu ve güvenlik gereksinimi.
- Risk yönlendirme: normal işleme, manuel inceleme veya reddetme.

Gerçek yetkilendirme ve güvenlik kararları yalnız istemci tarafı `if` ifadelerine bırakılmaz; güvenilir sunucu tarafı denetimleri gerektirir.

## Interview Notes

Mülakat kanıtı sözdizim ezberinden öte olmalıdır. Adaydan bir `else if` zincirini izlemek, özel durumun neden önce gelmesi gerektiğini açıklamak, erişilemez dalı bulmak, karar tablosundan test girdileri çıkarmak ve yüzde 100 dal kapsamının sınırlarını söylemek istenebilir. `switch` ile `if/else` seçimi “hangisi hızlı?” ezberine değil, eşitlik tabanlı seçenekler, karmaşık koşullar, okunabilirlik ve kasıtlı geçiş ihtiyacına bağlanmalıdır.

## Exercise Ideas

- Sayıyı negatif, sıfır ve pozitif sınıflandırma.
- Yaş aralıklarında yanlış dal sırasını düzeltme.
- Üç koşullu karar tablosunu kodlama.
- Bağımsız `if` ile `else if` farkını gözleme.
- Eksik varsayılan durumu bulma.
- Erişilemez dal için karşı örnek üretme.
- `switch` içinde istemsiz geçişi teşhis etme.
- Her dala ulaşan en küçük test kümesini seçme.

## Quiz Ideas

Sorular; koşul değerlendirme izi, blok sınırı, ilk eşleşme, dal sırası, karar tablosu eksiksizliği, `switch` katı eşitliği, `break`, varsayılan durum, erişilemezlik, dal kapsamı hesabı ve kapsamın kanıtlamadığı şeyleri ölçmelidir. Cevaplar öğrenci quizinden ayrı tutulmalıdır.

## Lab Ideas

`V01-C10-L01` kargo karar tablosunu uygular. Öğrenci önce koşulları ve eylemleri tanımlar, uygulanabilir kural sütunlarını oluşturur, çelişki/eksikliği denetler, ardından dalları uygular. Her sütun bir test girdisine eşlenir. Bilerek yanlış sıraya alınan genel dalın özel kargo durumunu gölgelemesi teşhis edilir.

## Animation Ideas

- Program sayacının koşula gelip iki yoldan yalnız birini izlemesi.
- `else if` zincirinde ilk doğru koşuldan sonra kalanların griye dönmesi.
- Karar tablosu sütununun ilgili kod dalına ve test girdisine bağlanması.
- Erişilemez dalın hiçbir giriş oku almaması.
- Dal kapsamı göstergesinde çalıştırılan ve çalıştırılmayan yolların ayrı işaretlenmesi.

## Further Reading

ECMAScript belirtiminde önce `if` değerlendirme algoritması, sonra `switch` çalışma zamanı adımları okunmalıdır. ISTQB karar tablosu ve dal testi bölümleri, test tasarım terminolojisi için kullanılmalıdır. NIST kaynakları kapsamın güvenilirlikte tek başına yeterli olmadığını destekler. McCabe makalesi ileri okuma olarak kontrol akış grafiği ve yol karmaşıklığı bağlamı sağlar; bölüm değerlendirmesinde metrik hesabı istenmez.

## Review Notes

- `switch` konuya dahil edilir, fakat gelişmiş pattern matching ve performans iddiaları dışarıda tutulur.
- Koruma koşulu yalnız okunabilirlik karşılaştırması olarak tanıtılır; derin erken dönüş ve fonksiyon tasarımı C12–C16'ya bırakılır.
- Karar tablosu ile doğruluk tablosu farkı açık olmalıdır: doğruluk tablosu mantıksal sonucu, karar tablosu koşul birleşimlerine karşı eylemleri gösterir.
- Dal kapsamı, doğru assertion veya doğru gereksinim anlamına gelmez.
- Kod örnekleri Node.js ile çalışabilir ve yorumlar Türkçe olmalıdır.

## Approval

Repository Owner, Akademi 01 C09–C28 üretimini bölüm bazında yeniden onay gerektirmeden başlatmıştır. Bu paket Draft içerik üretimini yetkilendirir; Stable yayın, öğrenci pilotu veya bağımsız pedagojik onay anlamına gelmez.

## Version

`0.1.0` — İlk araştırma sentezi. Güncel living specification ve 2024/2026 tarihli resmî belgeler 23 Temmuz 2026 tarihinde kontrol edilmiştir.

## Status

**Research Ready.** Kaynak, concept, claim, evidence, outcome ve assessment eşlemeleri tamamlanmıştır. Sıradaki işlem 8.000+ kelimelik ana ders ve tam öğrenme paketidir.
