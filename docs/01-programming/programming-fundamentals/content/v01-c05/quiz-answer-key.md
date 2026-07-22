---
supporting_document_id: "V01-C05-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "V01-C05 Quiz Cevap Anahtarı"
version: "0.1.0"
status: "Draft"
owner: "Assessment Maintainer"
scope_id: "V01-C05-QZ01"
source_document: "quiz.md"
source_version: "0.1.0"
canonical_registry: "../../../assessment.md"
generated_date: "2026-07-22"
language: "tr"
access: "post-attempt"
---

# V01-C05 Quiz Cevap Anahtarı

## Erişim Kuralı

Yalnız bütün cevaplar kilitlendikten sonra açılır.

## Yanıtlar

1. Literal source notation; value runtime information. `20 + 22` value 42 üretir ama literal değildir.
2. Valid value set, applicable operations, constraints/behavior.
3. D.
4. Undefined, Null, Boolean, Number, BigInt, String, Symbol.
5. `"object"`; historical behavior, null primitive'dir.
6. Number.
7. String/Boolean type; non-empty text truthy olsa da value false değildir.
8. Empty mevcut text value; null intentional absence policy taşıyabilir.
9. Arithmetic meaningless ve leading zeros/format significant olabilir.
10. false; binary64 approximation nedeniyle sum `0.30000000000000004` olur.
11. `2^53-1` = 9007199254740991; ötesinde integers ayırt edilemeyebilir.
12. true, false, true, false.
13. 0 ve NaN; empty’nin 0’a dönüşmesi ve invalid result’un fark edilmemesi risktir.
14. Number full numeric string ister; parseInt valid integer prefix’inde durabilir.
15. `Number.isNaN(value)`.
16. Leading zeros/identifier form; meaning loss.
17. Precision loss; String preserve, contract uygunsa BigInt, interoperability policy.
18. String UTF-16 code units tutar; one visible grapheme multiple units olabilir.
19. Örnek: undefined, BigInt, Symbol, NaN/Infinity. Reject/map/tagged String gibi explicit policy.
20. String/required check → full digit grammar → Number → integer/range check → result object.
21. `"0"` true olur quantity meaning kaybolur; `"false"` true olur; empty false olup absence reason kaybolur.
22. Örnek large ID Number’da precision; postal ID Number’da leading-zero meaning loss.
23. Field, meaning, source representation, runtime type, valid/invalid examples, operations,
    absence, conversion, loss policy (sekizi yeterli).
24. Arithmetic meaning, leading zeros, max length, safe range, formatting, round trip,
    producer/consumer compatibility, absence (altısı).
25. ID String/no numeric conversion; age strict String→Number + range; verified exact token→Boolean;
    rate grammar/range + numeric precision policy; unit validated String/enumeration.

## Scoring Notes

Open-ended answers exact wording yerine correct concept, explicit assumption, boundary ve
loss reasoning üzerinden puanlanır. 16–25 için gerekçesiz sonuç en fazla yarım puandır.
