---
document_type: "research-packet"
document_id: "V01-C11-RP01"
title: "Repetition and Loops Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C11"
blueprint_id: "V01-C11-BP01"
production_packet_id: "V01-C11-CPP-001"
learning_outcomes: ["V01-LO017"]
concept_ids:
  - "ASEA-CON-000039"
  - "ASEA-CON-000040"
  - "ASEA-CON-000041"
  - "ASEA-CON-000042"
last_updated: "2026-07-23"
---

# Repetition and Loops Research Packet

## Overview

Bu paket `V01-C11` için yineleme, döngü durumu ve sonlanma bilgisini ders üretiminden önce sınırlar. Öğretim hedefi `for` veya `while` ezberletmek değil; başlangıç, devam koşulu, gövde, güncelleme ve çıkış arasındaki ilişkiyi izlenebilir kılmaktır. JavaScript normatif davranış için örnek dildir; zihinsel model dilden bağımsızdır.

## Learning Goals

`V01-LO017`, sayaç, biriktirici veya sentinel kullanan sonlanan bir döngü tasarlama ve yineleme tablosuyla izleme kanıtı ister. Öğrenci sıfır, bir ve çok yineleme durumlarını sınamalı; durumun her turda nasıl değiştiğini göstermeli; çıkış koşulunun ulaşılabilirliğini ve sonlanma gerekçesini açıklamalıdır.

## Official Sources

1. [ECMAScript — Iteration Statements](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-iteration-statements)
2. [ECMAScript — `do-while`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-do-while-statement)
3. [ECMAScript — `while`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-while-statement)
4. [ECMAScript — `for`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-statement)
5. [ECMAScript — `break`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-break-statement)
6. [ECMAScript — `continue`](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-continue-statement)
7. [MDN — Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
8. [MDN — `while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
9. [MDN — `do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
10. [MDN — `for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
11. [MDN — `break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
12. [MDN — `continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

ECMAScript kaynakları değerlendirme sırası ve kontrol aktarımını tanımlar. MDN geliştirici odaklı açıklama, hata sınırı ve çalıştırılabilir örnek sağlar.

## Supporting Sources

13. [ACM/IEEE/AAAI Computer Science Curricula 2023](https://csed.acm.org/)
14. [MIT Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf)
15. [Open Data Structures](https://opendatastructures.org/)
16. [Python Tutorial — Control Flow](https://docs.python.org/3/tutorial/controlflow.html)
17. [Oracle Java Tutorial — Control Flow](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html)
18. [Microsoft Learn — Iteration Statements](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements)
19. [NISTIR 8397 — Developer Verification](https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8397.pdf)
20. [Hoare — An Axiomatic Basis for Computer Programming](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf)

Dil karşılaştırmaları yalnız genel mekanizmayı ayırmak için kullanılır. İleri formal kanıtlar değerlendirme kapsamı değildir; başlangıç, koruma ve sonlanma sezgisi öğretime alınır.

## Concept Coverage

| Concept | Kapsam |
|---|---|
| `ASEA-CON-000039` | Döngü, yineleme, `while`, `do...while`, `for`, `break`, `continue` |
| `ASEA-CON-000040` | Başlangıç ve tur sonu durum, güncelleme, ilerleme, iz tablosu |
| `ASEA-CON-000041` | Sayaç, biriktirici, sentinel, özdeşlik başlangıcı |
| `ASEA-CON-000042` | Çıkış koşulu, sonlanma, sonsuz döngü, off-by-one, invariant sezgisi |

## Claim Coverage

- `ASEA-CLM-000039`: Döngü, devam kuralı izin verdiği sürece gövdeyi tekrarlar.
- `ASEA-CLM-000040`: Yineleme durumu, turlar arasında incelenen veya değişen bilgidir.
- `ASEA-CLM-000041`: Sayaç oluş sayısını, biriktirici birleşik sonucu, sentinel özel kontrol durumunu temsil eder.
- `ASEA-CLM-000042`: Sonlanma için ulaşılabilir çıkış ve ona doğru ilerleyen durum değişimi gerekir.

## Evidence Mapping

`ASEA-EV-000009` programlama ve test yetkinliği kapsamını, `ASEA-EV-000012` ECMAScript yürütme davranışını destekler. ECMAScript `while` koşulu gövdeden önce, `do...while` gövdeden sonra değerlendirir. `for` başlangıç, koşul, gövde ve afterthought sırasını tanımlar. Akademik kaynaklar invariant ve ilerleme sezgisini destekler.

## Terminology

- Yineleme (Iteration)
- Döngü (Loop)
- Döngü gövdesi (Loop Body)
- Başlatma (Initialization)
- Güncelleme (Update)
- Sayaç (Counter)
- Biriktirici (Accumulator)
- Gözcü değer (Sentinel)
- Dolaşma (Traversal)
- Bir eksik/bir fazla hatası (Off-by-One Error)
- Döngü değişmezi (Loop Invariant)
- Sonlanma (Termination)
- İlerleme ölçüsü (Loop Variant)

## Mental Models

1. **Kontrol noktası:** Koşul her yeni turdan önce izin verir veya durdurur.
2. **Durum fotoğrafı:** Her tur öncesi ve sonrası değerler tabloya yazılır.
3. **Mesafe:** Sonlanma için sıfıra yaklaşan, aşağıdan sınırlı bir ilerleme ölçüsü bulunur.
4. **Rol ayrımı:** Sayaç “kaç?”, biriktirici “toplam sonuç ne?”, sentinel “devam mı?” sorusunu yanıtlar.

## Historical Context

Yineleme, yapılandırılmış programlamanın temel kontrol biçimidir. Döngü değişmezi yaklaşımı, başlangıçta doğru olan bir özelliğin her turda korunmasını ve çıkışta sonucu desteklemesini inceler. Sonlanma ayrıca ilerleme gerektirir. Bu bölüm formal mantık kanıtı istemez; öğrencinin sınırlı tam sayı döngülerinde başlangıç, korunan özellik ve azalan mesafe açıklaması yapmasını ister.

## Technical Details

`while` koşulu gövdeden önce değerlendirir; gövde sıfır kez çalışabilir. `do...while` gövdeyi önce çalıştırdığı için en az bir tur yapar. `for` yapısında initialization bir kez, condition her turdan önce, body koşul doğruysa, afterthought ise normal tur sonunda ve `continue` sonrasında değerlendirilir. `break` en içteki döngüyü hemen sonlandırır. `continue` mevcut gövdenin kalanını atlar; `while`da koşula, `for`da afterthought adımına geçer.

## Code References

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count += 1;
}
```

İz: başlangıç 0; koşul doğru; 0 yazılır; durum 1 olur. Aynı düzen 1 ve 2 için sürer. Durum 3 olduğunda koşul yanlış ve döngü sonlanır.

```js
let total = 0;

for (let number = 1; number <= 4; number += 1) {
  total += number;
}

console.log(total); // 10
```

Biriktirici toplama için özdeşlik değeri 0'dan başlar.

## Best Practices

- Döngüden önce başlangıç, devam koşulu, güncelleme ve çıkış sonrası sonucu yaz.
- Sıfır, bir ve çok tur vakalarını sınamadan döngüyü tamamlanmış sayma.
- Sayaç ve biriktirici rollerini ayrı, anlamlı isimlerle tut.
- Güncellemeyi çıkışa doğru ilerletecek yönde yap.
- Sentinel değerinin geçerli alan verisiyle çakışmadığını doğrula.
- `break` ve `continue` kullanımını görünür ve gerekçeli tut.
- Karmaşık gövdede yineleme tablosu ve geçici gözlemler kullan.
- Timeout'u yanlış döngünün yerine çözüm sayma; koruyucu operasyonel sınır olarak gör.

## Common Mistakes

- Sayaç güncellemesini unutmak.
- `<` yerine `<=` ile bir fazla tur yapmak.
- Başlangıç değerini 0 yerine 1 seçerek ilk öğeyi atlamak.
- Toplama biriktiricisini yanlış başlangıçla kurmak.
- Ortalama hesaplamasında boş girdide sıfıra bölmek.
- Sentinel ile geçerli veriyi aynı değer yapmak.
- `continue` öncesinde gerekli `while` güncellemesini atlamak.
- Ondalık değeri tam eşitliğe ulaştırmayı beklemek.
- Gövde içinde birden fazla durum değiştirip iz bırakmamak.
- Sonsuz döngüyü yalnız `break` ile belirsiz biçimde durdurmak.

## Edge Cases

- Sıfır turluk giriş.
- Tek turluk giriş.
- Üst sınırın dahil veya hariç oluşu.
- Negatif başlangıç ve ters yönde ilerleme.
- Boş koleksiyon veya hiç veri girmeden sentinel.
- Sentinel'in ilk değer olması.
- Bütün öğelerin filtrelenmesi.
- `continue` ile güncellemenin atlanması.
- `break` ile normal çıkış koşulunun farklılaşması.
- Sayı taşması, çok büyük tur sayısı ve kaynak tüketimi.

## Real World Examples

- Belirli sayıda yeniden deneme.
- Girdi `quit` olana kadar komut işleme.
- Sipariş tutarlarını toplama.
- Hatalı kayıt sayma.
- Sayfalı veriyi son sayfaya kadar çekme; ağ uygulaması bu bölümün dışında, model örneğidir.
- Kuyruktaki işleri sınır dahilinde işleme.
- En yüksek veya en düşük değeri bulma.

## Interview Notes

Adaydan `for` sözdizimini ezberden söylemesi yerine bir döngünün ilk üç turunu izlemesi, off-by-one hatasını bulması, `continue` nedeniyle güncellemenin atlanmasını açıklaması ve sonlanma gerekçesi sunması istenir. “Bu döngü ne zaman sıfır kez çalışır?”, “hangi değişken çıkışa yaklaşıyor?” ve “yüzde yüz emin olmadığınız girdi varsayımı nedir?” soruları ayrım yaratır.

## Exercise Ideas

- 0'dan N-1'e sayma.
- N'den 1'e geri sayma.
- 1–N toplamı.
- Yalnız eşleşen değerleri sayma.
- Sentinel gelene kadar toplam.
- `while`, `do...while`, `for` dönüşümü.
- Off-by-one onarımı.
- `continue` güncelleme tuzağı.
- İz tablosundan kod üretme.
- Koddan sonlanma argümanı çıkarma.

## Quiz Ideas

25 soru; kavram ayrımı, yürütme sırası, çıktı tahmini, iz tablosu, sayaç/biriktirici/sentinel rolü, sıfır-tur davranışı, off-by-one, `break`, `continue`, sonlanma ve invariant sezgisini kapsamalıdır. Cevap anahtarı ayrı dosyada tutulmalıdır.

## Lab Ideas

`V01-C11-L01`, hatalı dört döngüyü izletir: eksik güncelleme, yanlış sınır, yanlış biriktirici başlangıcı ve sentinel çakışması. Öğrenci her biri için beklenen/gerçek iz, kök neden, en küçük düzeltme, sınır testleri ve sonlanma açıklaması üretir.

## Animation Ideas

- Koşul → gövde → güncelleme → koşul döngüsü.
- `while` ile `do...while` ilk kontrol farkı.
- `for` başlatma/koşul/gövde/afterthought zaman çizgisi.
- Her turda sayaç ve toplamın tablo satırına dönüşmesi.
- Çıkışa olan mesafenin azalması.
- `continue` ve `break` kontrol aktarım okları.

## Further Reading

ECMAScript çalışma zamanı adımları normatif davranış için, MDN uygulamalı örnek ve sınırlar için okunmalıdır. Hoare metni ileri okuma olarak değişmez özellik fikrinin tarihsel temelini sağlar. MIT kaynağı invariant ve sonlanma düşüncesini matematiksel bağlama taşır. C17 koleksiyon dolaşımını, C19 özyinelemeyi, C21–C23 algoritma analizini derinleştirecektir.

## Review Notes

- `for...in` ve `for...of` yalnız kısa karşılaştırma olarak geçebilir; koleksiyon semantiği C17'ye bırakılır.
- İç içe döngü ve sadeleştirme C12 kapsamındadır.
- Asenkron olay döngüsü, zamanlayıcılar ve paralellik dışarıdadır.
- İnvariant formal ispat değil, her turda korunması beklenen açık cümle olarak öğretilir.
- Sonlanma, “bilgisayar hızlıdır” değil, ulaşılabilir çıkış ve ilerleme argümanıyla açıklanır.

## Approval

Repository Owner'ın toplu içerik üretim yetkisi Draft üretimi kapsar. Bu araştırma paketi Stable yayın, bağımsız inceleme veya öğrenci pilotu onayı değildir.

## Version

`0.1.0` — İlk araştırma sentezi; resmî living specification ve güncel MDN sayfaları 23 Temmuz 2026 tarihinde doğrulandı.

## Status

**Research Ready.** Kaynak, concept, claim, evidence, outcome ve değerlendirme eşlemesi hazırdır. Sıradaki işlem kitap kalitesindeki ana ders ve tam öğrenme paketidir.
