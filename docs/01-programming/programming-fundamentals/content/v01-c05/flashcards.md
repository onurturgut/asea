---
supporting_document_id: "V01-C05-SD-GLOS-001"
supporting_document_type: "Glossary"
title: "V01-C05 Aktif Hatırlama Kartları"
version: "0.1.0"
status: "Draft"
owner: "Content Maintainer"
scope_id: "V01-C05"
source_document: "../../../chapters/05-degerler-ve-veri-turleri.md"
canonical_registry: "../../../chapter-map.md"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C05 Aktif Hatırlama Kartları

## Schedule

Gün 0, 1, 3, 7, 14 ve 30’da tekrarla. Cevabı açmadan üret. `0=yanlış`, `1=eksik`,
`2=doğru ve gerekçeli`; 0 alan kart ertesi gün döner.

## Cards

1. **Ön:** Değer nedir? **Arka:** Programın saklayabildiği, karşılaştırabildiği,
   dönüştürebildiği veya iletebildiği represented information.
2. **Ön:** Veri türü nedir? **Arka:** Value set ile valid operations/constraints sözleşmesi.
3. **Ön:** Literal nedir? **Arka:** Source code’da value üretmek için doğrudan notation.
4. **Ön:** Representation nedir? **Arka:** Value’nun storage/transmission/interpretation encoding’i.
5. **Ön:** Domain meaning neden önce gelir? **Arka:** Görünüm type veya valid operation’ı belirlemez.
6. **Ön:** `42` ve `"42"` farkı? **Arka:** Number ve String value/type domains.
7. **Ön:** ECMAScript primitive types? **Arka:** Undefined, Null, Boolean, Number, BigInt, String, Symbol.
8. **Ön:** `typeof null`? **Arka:** `"object"`; historical exception, null primitive.
9. **Ön:** `NaN` type? **Arka:** Number.
10. **Ön:** NaN kontrolü? **Arka:** `Number.isNaN(value)`.
11. **Ön:** Safe integer upper bound? **Arka:** `2^53-1`, 9007199254740991.
12. **Ön:** BigInt neyi çözer? **Arka:** Arbitrary-precision integers; interoperability’yi tek başına çözmez.
13. **Ön:** `0.1 + 0.2` riski? **Arka:** Binary64 approximation nedeniyle exact decimal equality yoktur.
14. **Ön:** ID neden Number olmayabilir? **Arka:** Arithmetic meaningless; format/precision korunmalıdır.
15. **Ön:** String `.length` ne sayar? **Arka:** UTF-16 code units.
16. **Ön:** Boolean values? **Arka:** Yalnız `true` ve `false`.
17. **Ön:** `Boolean("false")`? **Arka:** true; non-empty String.
18. **Ön:** Empty ile null farkı? **Arka:** Empty mevcut zero-length text; null explicit absence olabilir.
19. **Ön:** Conversion nedir? **Arka:** Value’yu source type/representation’dan target’a dönüştürme.
20. **Ön:** Explicit conversion güvenli mi? **Arka:** Intent görünür; validation ve loss policy yine gerekir.
21. **Ön:** `Number("")`? **Arka:** 0.
22. **Ön:** `Number("12px")`? **Arka:** NaN.
23. **Ön:** `parseInt("12px", 10)`? **Arka:** 12; prefix parse eder.
24. **Ön:** Precision loss? **Arka:** Ayrı numeric values target representation’da ayırt edilemez/yaklaşır.
25. **Ön:** Meaning loss? **Arka:** Domain-significant structure/state conversion’da silinir.
26. **Ön:** Güvenli conversion hattı? **Arka:** Preserve raw → validate source/meaning → convert → validate result → decide.
27. **Ön:** Data dictionary ana alanları? **Arka:** Meaning, source, target, valid/invalid, operations, absence, conversion, loss.
28. **Ön:** JSON’da olmayan JS örnekleri? **Arka:** undefined, BigInt, Symbol, NaN/Infinity as such.
29. **Ön:** Minimum test classes? **Arka:** Normal, boundary, invalid, ambiguous, lossy.
30. **Ön:** AI type önerisi nasıl denetlenir? **Arka:** Requirements, assumptions, counterexamples, official source, execution evidence.
