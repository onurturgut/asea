---
supporting_document_id: "V01-C04-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "V01-C04 Quiz Cevap Anahtarı"
version: "0.1.0"
status: "Draft"
owner: "Assessment Maintainer"
scope_id: "V01-C04-QZ01"
source_document: "quiz.md"
source_version: "0.1.0"
canonical_registry: "../../../assessment.md"
generated_date: "2026-07-22"
language: "tr"
access: "post-attempt"
---

# V01-C04 Quiz Cevap Anahtarı

## Erişim Kuralı

Yalnız quiz yanıtı kilitlendikten sonra kullanılır.

## Çoktan Seçmeli

| Soru | Cevap | Gerekçe |
|---:|:---:|---|
| 1 | B | Hedef sonuç vardır, uygulanabilir steps yoktur. |
| 2 | B | Pseudocode human review için dil bağımsız representation’dır. |
| 3 | B | Precondition başlangıç obligation’ını tanımlar. |
| 4 | B | Postcondition successful completion guarantee’sidir. |
| 5 | B | Trace seçili path’te steps ve state changes kaydeder. |
| 6 | B | Ön tahmin, mental model divergence’ını görünür kılar. |
| 7 | C | Eşiğin altı, eşiti ve üstü birlikte sınanır. |
| 8 | B | Condition true kalabilir ve loop durmayabilir. |
| 9 | B | İlerleme, sınır ve durma birlikte gerekir. |
| 10 | B | Evidence yalnız seçilmiş üç execution path’i kapsar. |
| 11 | B | `console.log` JavaScript-specific API’dir. |
| 12 | A | Invalid path calculation’a sızarak contract’ı ihlal eder. |
| 13 | A | Failure branch’i progress sağlamadığı için termination yoktur. |
| 14 | B | AI rule authority değildir; doğrulanmalıdır. |
| 15 | A | Tek counterexample universal claim’i çürütebilir. |

## Kısa Yanıt Rehberi

- **16:** Algorithm language-independent solution logic; program executable,
  language/runtime-specific implementation. İki doğru ayrım 6 puan.
- **17:** Valid integer range precondition; result classification postcondition;
  outside range explicit error. Her parça 2 puan.
- **18:** Measure `remaining`; bound `0`; condition `remaining > 0`, update `-2`.
  Odd starts için exact behavior ayrıca sorgulanmalıdır.
- **19:** Operation’ın neden olduğu state transition’ı eşleştirip ilk divergence’ı
  bulmayı sağlar.
- **20:** Boundary inequality, valid domain, equality rule ve ilgili branch
  comparison incelenmelidir.

## Uygulamalı Rubrik

- **21:** Contract 3, precise pseudocode 3, invalid behavior 2 puan.
- **22:** Üç complete trace 5, correct class labels 2, prediction 1 puan.
- **23:** Odd value’da progress yok 4; safe branch-independent update veya explicit
  behavior 4 puan.
- **24:** Her complete traceability chain 2 puan; bütünlük ve açıklık 2 puan.
- **25:** Contract source, independent version, boundary/counterexample traces,
  termination audit ve reasoned decision adımlarının her biri 1,6 puan.

## Tekrar Yolu

| Sorular | Tekrar |
|---|---|
| 1–6, 16–17 | Algorithm, pseudocode ve contract |
| 7, 10, 15, 19–22 | Trace ve boundary evidence |
| 8–9, 13, 18, 23 | Termination |
| 11–12, 24 | Representation ve traceability |
| 14, 25 | AI audit |

## References

- [Quiz](./quiz.md)
- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
