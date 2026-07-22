---
document_type: "flashcard-set"
flashcard_set_id: "V01-C08-FC01"
title: "Girdi, Çıktı ve Veri Dönüşümü — Bilgi Kartları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
card_count: 30
language: "tr"
---

# Girdi, Çıktı ve Veri Dönüşümü — 30 Bilgi Kartı

## Kullanım

Ön yüzü okuyup cevabı üret; sonra arka yüzü aç. Yanlış kartları 1, 3, 7 ve 14 gün sonra tekrar et.

1. **Ön:** Girdi nedir? **Arka:** Program dışından/bileşen sınırından gelen veri.
2. **Ön:** Çıktı nedir? **Arka:** Programın bir tüketiciye sunduğu temsil.
3. **Ön:** Güven sınırı nedir? **Arka:** Verinin farklı güven ve sözleşme koşulları arasında geçtiği nokta.
4. **Ön:** Input contract ne tanımlar? **Arka:** Presence, raw/target type, syntax, constraints, normalization, failure ve output.
5. **Ön:** Parsing ne yapar? **Arka:** Dış temsili program değeri/yapısına yorumlar.
6. **Ön:** Validation ne yapar? **Arka:** Değerin tanımlı constraints'e uyduğunu denetler.
7. **Ön:** Parse success validity midir? **Arka:** Hayır; domain rules ayrıca doğrulanır.
8. **Ön:** Syntactic validation nedir? **Arka:** Temsil biçiminin beklenen syntax'a uyumu.
9. **Ön:** Semantic validation nedir? **Arka:** Değerin business/domain anlamında kabul edilebilirliği.
10. **Ön:** `Number("")` nedir? **Arka:** Number 0.
11. **Ön:** Empty check ne zaman? **Arka:** Numeric conversion'dan önce.
12. **Ön:** `parseInt("12px",10)` nedir? **Arka:** 12; partial input kabul eder.
13. **Ön:** Sonlu Number denetimi? **Arka:** `Number.isFinite(value)`.
14. **Ön:** Tamsayı denetimi? **Arka:** `Number.isInteger(value)`.
15. **Ön:** JSON.parse neyi kanıtlar? **Arka:** JSON text'in parse edilebilir syntax taşıdığını.
16. **Ön:** Normalization nedir? **Arka:** Eşdeğer girdileri tutarlı internal forma getirme.
17. **Ön:** Normalization'ın temel riski? **Arka:** Meaning/data loss.
18. **Ön:** Transformation nedir? **Arka:** Validated values'dan yeni domain value/record üretme.
19. **Ön:** Formatting nedir? **Arka:** Internal değeri hedef tüketici temsiline çevirme.
20. **Ön:** Display String hesapta kullanılmalı mı? **Arka:** Hayır; internal value ayrı tutulmalı.
21. **Ön:** Fail fast nedir? **Arka:** İlk failure'da işlemi durdurma.
22. **Ön:** Collect errors nedir? **Arka:** Uygun bütün validation errors'ı toplama.
23. **Ön:** Field validation örneği? **Arka:** Age'in integer 13–120 olması.
24. **Ön:** Cross-field validation örneği? **Arka:** Start date'in end date'ten önce olması.
25. **Ön:** Error code neden? **Arka:** Machine-readable stable failure classification.
26. **Ön:** Error message neden? **Arka:** İnsana alanı ve düzeltme yolunu anlatmak.
27. **Ön:** Client validation rolü? **Arka:** Hızlı UX feedback; authoritative boundary değildir.
28. **Ön:** Loglanmaması gereken? **Arka:** Raw password, token ve gereksiz kişisel veri.
29. **Ön:** Temel pipeline? **Arka:** Receive, parse, validate, normalize, transform, format, output.
30. **Ön:** AI output trusted mı? **Arka:** Hayır; external input gibi validate edilir.
