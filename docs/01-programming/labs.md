---
document_type: "supporting-document"
supporting_document_id: "V01-SD-LAB-001"
supporting_document_type: "Laboratory Plan"
title: "Volume 01 Laboratory Blueprint"
version: "1.1.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Laboratory Blueprint

## Purpose

Bu dosya 28 laboratuvarın sözleşmesini tanımlar; uygulama yönergelerini, çözümü veya kodu içermez. Her lab tek bir Chapter'a bağlıdır ve `Objective`, `Required Skills`, `Tasks`, `Evaluation Criteria` ve `Bonus Challenge` alanlarını taşır.

## Scope

This document governs the Laboratory Plan records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Laboratory Plan data within Volume 01.
- **Owner Role:** Software Engineering Educator.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Laboratory Plan records.

Ortak başarı kuralı: her lab 20 puandır; en az 14 puan gerekir. Correctness ve explanation ölçütlerinin her birinden en az yarı puan alınmadığında toplam puandan bağımsız revizyon gerekir.

## Lab 01 — Human Instruction Interpreter

- **Lab ID:** `V01-C01-L01`
- **Chapter ID:** `V01-C01`
- **Learning Outcome IDs:** `V01-LO001`, `V01-LO002`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C01-BP01`](./chapter-blueprints/01-what-is-programming.md)

- **Objective:** Belirsiz doğal dil talimatlarını yürütülebilir adımlara dönüştürmek.
- **Required Skills:** Program, instruction, input, output ayrımı.
- **Tasks:** Bir günlük sürecin girdisini ve beklenen sonucunu tanımlamak; talimatları sıralamak; iki belirsizliği test girdisiyle göstermek.
- **Evaluation Criteria:** Kesinlik 6, sıra ve tamlık 5, test senaryoları 5, açıklama 4 puan.
- **Bonus Challenge:** Aynı talimatları farklı başlangıç durumu için uyarlamak.

## Lab 02 — Trace a Tiny Machine

- **Lab ID:** `V01-C02-L01`
- **Chapter ID:** `V01-C02`
- **Learning Outcome IDs:** `V01-LO003`, `V01-LO004`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C02-BP01`](./chapter-blueprints/02-how-computers-execute-programs.md)

- **Objective:** Basitleştirilmiş instruction ve memory modelini adım adım izlemek.
- **Required Skills:** Chapter 01 kavramları ve sıralı talimat okuma.
- **Tasks:** Başlangıç state'ini kaydetmek; her instruction sonrası memory state üretmek; final output'u gerekçelendirmek.
- **Evaluation Criteria:** Trace doğruluğu 8, state gösterimi 5, final sonuç 3, model açıklaması 4 puan.
- **Bonus Challenge:** Tek instruction değişikliğinin bütün state zincirine etkisini tahmin etmek.

## Lab 03 — Decompose a Ticket Pricing Problem

- **Lab ID:** `V01-C03-L01`
- **Chapter ID:** `V01-C03`
- **Learning Outcome IDs:** `V01-LO005`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C03-BP01`](./chapter-blueprints/03-problem-definition-and-decomposition.md)

- **Objective:** Belirsiz fiyatlandırma isteğini doğrulanabilir alt problemlere ayırmak.
- **Required Skills:** Input-process-output modeli ve scope tanımı.
- **Tasks:** Paydaş, girdi, çıktı, constraint ve assumption listesi; decomposition tree; beş edge case hazırlamak.
- **Evaluation Criteria:** Problem contract 6, decomposition 6, edge case 4, açıklık 4 puan.
- **Bonus Challenge:** Çelişen iki paydaş kuralını görünür kılmak.

## Lab 04 — Design and Trace a Fare Algorithm

- **Lab ID:** `V01-C04-L01`
- **Chapter ID:** `V01-C04`
- **Learning Outcome IDs:** `V01-LO006`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C04-BP01`](./chapter-blueprints/04-algorithms-pseudocode-and-tracing.md)

- **Objective:** Problem contract'tan sonlanan pseudocode üretmek.
- **Required Skills:** Decomposition, sequence, precondition ve postcondition.
- **Tasks:** Pseudocode yazmak; normal, boundary ve invalid input trace'leri üretmek; termination gerekçesi sunmak.
- **Evaluation Criteria:** Algorithm correctness 7, trace 6, termination 3, explanation 4 puan.
- **Bonus Challenge:** Aynı sonucu daha az karar adımıyla tasarlamak.

## Lab 05 — Classify and Convert Input Values

- **Lab ID:** `V01-C05-L01`
- **Chapter ID:** `V01-C05`
- **Learning Outcome IDs:** `V01-LO007`, `V01-LO008`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C05-BP01`](./chapter-blueprints/05-values-and-data-types.md)

- **Objective:** Değerleri türlerine ayırmak ve güvenli conversion sınırlarını belirlemek.
- **Required Skills:** Algorithm input ve trace bilgisi.
- **Tasks:** Verilen değer setini sınıflandırmak; conversion tablosu oluşturmak; kayıplı dönüşümleri işaretlemek.
- **Evaluation Criteria:** Type classification 7, conversion analysis 6, risk cases 3, explanation 4 puan.
- **Bonus Challenge:** Locale-dependent number input için ek boundary tanımlamak.

## Lab 06 — Trace an Account State

- **Lab ID:** `V01-C06-L01`
- **Chapter ID:** `V01-C06`
- **Learning Outcome IDs:** `V01-LO009`, `V01-LO010`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C06-BP01`](./chapter-blueprints/06-variables-and-state.md)

- **Objective:** Değişkenlerin zaman içindeki state değişimini izlemek.
- **Required Skills:** Value, type, assignment ve initialization.
- **Tasks:** State table üretmek; gereksiz mutation'ları belirlemek; iki değişkeni constant adayı olarak gerekçelendirmek.
- **Evaluation Criteria:** State trace 8, mutation analysis 5, naming 3, explanation 4 puan.
- **Bonus Challenge:** Aynı davranışı daha az mutable state ile modellemek.

## Lab 07 — Build an Expression Evaluator Table

- **Lab ID:** `V01-C07-L01`
- **Chapter ID:** `V01-C07`
- **Learning Outcome IDs:** `V01-LO011`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C07-BP01`](./chapter-blueprints/07-operators-and-expressions.md)

- **Objective:** Bileşik expression'ları precedence, grouping ve türle değerlendirmek.
- **Required Skills:** Values, variables ve assignment trace.
- **Tasks:** Ara sonuç tablosu oluşturmak; implicit conversion risklerini işaretlemek; belirsiz ifadeleri yeniden gruplamak.
- **Evaluation Criteria:** Evaluation 8, type trace 4, rewrite quality 4, explanation 4 puan.
- **Bonus Challenge:** Aynı sonucu üreten iki expression'ın okunabilirliğini karşılaştırmak.

## Lab 08 — Normalize a Registration Record

- **Lab ID:** `V01-C08-L01`
- **Chapter ID:** `V01-C08`
- **Learning Outcome IDs:** `V01-LO012`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C08-BP01`](./chapter-blueprints/08-input-output-and-data-transformation.md)

- **Objective:** Güvenilmeyen girdiyi doğrulanmış bir çıktıya dönüştüren veri hattı tasarlamak.
- **Required Skills:** Parsing, expressions, type conversion ve problem contract.
- **Tasks:** Input contract yazmak; parse/validate/normalize/format aşamalarını belirlemek; invalid case mesajlarını tanımlamak.
- **Evaluation Criteria:** Pipeline 7, validation 5, edge cases 4, explanation 4 puan.
- **Bonus Challenge:** Kısmi geçerli girdiler için recovery politikası tasarlamak.

## Lab 09 — Model Access Rules with Truth Tables

- **Lab ID:** `V01-C09-L01`
- **Chapter ID:** `V01-C09`
- **Learning Outcome IDs:** `V01-LO013`, `V01-LO014`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C09-BP01`](./chapter-blueprints/09-boolean-logic-and-truth.md)

- **Objective:** Erişim kurallarını Boolean model ve truth table ile doğrulamak.
- **Required Skills:** Comparison ve expression evaluation.
- **Tasks:** Predicate'leri adlandırmak; eksiksiz truth table üretmek; iki karmaşık koşulu sadeleştirmek.
- **Evaluation Criteria:** Truth table 8, predicate correctness 4, simplification 4, explanation 4 puan.
- **Bonus Challenge:** Negated access policy için eşdeğer ifade üretmek.

## Lab 10 — Implement a Shipping Decision Table

- **Lab ID:** `V01-C10-L01`
- **Chapter ID:** `V01-C10`
- **Learning Outcome IDs:** `V01-LO015`, `V01-LO016`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C10-BP01`](./chapter-blueprints/10-conditional-execution.md)

- **Objective:** Karar tablosunu eksiksiz conditional flow tasarımına dönüştürmek.
- **Required Skills:** Boolean logic, validation ve branch tracing.
- **Tasks:** Decision table hazırlamak; branch order belirlemek; her branch için test girdisi tanımlamak.
- **Evaluation Criteria:** Case coverage 7, flow correctness 6, tests 3, explanation 4 puan.
- **Bonus Challenge:** Guard clause kullanarak eşdeğer daha düz akış tasarlamak.

## Lab 11 — Trace and Repair Repetition

- **Lab ID:** `V01-C11-L01`
- **Chapter ID:** `V01-C11`
- **Learning Outcome IDs:** `V01-LO017`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C11-BP01`](./chapter-blueprints/11-repetition-and-loops.md)

- **Objective:** Loop state, boundary ve termination hatalarını tespit etmek.
- **Required Skills:** State, Boolean condition ve conditional flow.
- **Tasks:** Iteration table üretmek; off-by-one ve infinite-loop nedenlerini belirlemek; en küçük düzeltmeyi açıklamak.
- **Evaluation Criteria:** Trace 7, root cause 5, repair 4, explanation 4 puan.
- **Bonus Challenge:** Counter loop'u sentinel loop modeline dönüştürmek.

## Lab 12 — Simplify a Multi-Rule Scheduler

- **Lab ID:** `V01-C12-L01`
- **Chapter ID:** `V01-C12`
- **Learning Outcome IDs:** `V01-LO018`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C12-BP01`](./chapter-blueprints/12-nested-and-composite-control-flow.md)

- **Objective:** Nested control flow'u kapsam kaybetmeden sadeleştirmek.
- **Required Skills:** Conditions, loops ve execution paths.
- **Tasks:** Path listesi çıkarmak; unreachable case belirlemek; guard ve named predicate ile yeni flow tasarlamak.
- **Evaluation Criteria:** Path analysis 6, behavior preservation 6, readability 4, explanation 4 puan.
- **Bonus Challenge:** Aynı kuralları state-transition tablosuyla ifade etmek.

## Lab 13 — Design Function Contracts

- **Lab ID:** `V01-C13-L01`
- **Chapter ID:** `V01-C13`
- **Learning Outcome IDs:** `V01-LO019`, `V01-LO020`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C13-BP01`](./chapter-blueprints/13-functions-and-contracts.md)

- **Objective:** Davranışı açık function contract'larına dönüştürmek.
- **Required Skills:** Algorithms ve composite control flow.
- **Tasks:** Üç fonksiyon için input, precondition, output, postcondition ve failure tanımlamak; call trace üretmek.
- **Evaluation Criteria:** Contract completeness 8, responsibility 4, trace 4, explanation 4 puan.
- **Bonus Challenge:** Bir contract'ı farklı implementation'lara izin verecek biçimde genelleştirmek.

## Lab 14 — Refactor Inputs and Outputs

- **Lab ID:** `V01-C14-L01`
- **Chapter ID:** `V01-C14`
- **Learning Outcome IDs:** `V01-LO021`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C14-BP01`](./chapter-blueprints/14-parameters-and-return-values.md)

- **Objective:** Parametre ve return value tasarımını sadeleştirmek.
- **Required Skills:** Function contract ve expression data flow.
- **Tasks:** Gereksiz parametreleri belirlemek; hidden output'u return modeline çevirmek; before/after interface karşılaştırmak.
- **Evaluation Criteria:** Interface correctness 6, data flow 6, compatibility analysis 4, explanation 4 puan.
- **Bonus Challenge:** Birden fazla sonucu anlamlı record olarak modellemek.

## Lab 15 — Diagnose Scope and Mutation

- **Lab ID:** `V01-C15-L01`
- **Chapter ID:** `V01-C15`
- **Learning Outcome IDs:** `V01-LO022`, `V01-LO023`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C15-BP01`](./chapter-blueprints/15-scope-lifetime-and-side-effects.md)

- **Objective:** Scope, shadowing ve side effect kaynaklı davranışı izole etmek.
- **Required Skills:** Variables, functions, parameters ve return values.
- **Tasks:** Identifier resolution trace etmek; side effect'leri sınıflandırmak; state'i daha dar scope'a taşıyan tasarım sunmak.
- **Evaluation Criteria:** Scope trace 7, effect analysis 5, redesign 4, explanation 4 puan.
- **Bonus Challenge:** Pure core / impure shell ayrımı tasarlamak.

## Lab 16 — Decompose a Report Generator

- **Lab ID:** `V01-C16-L01`
- **Chapter ID:** `V01-C16`
- **Learning Outcome IDs:** `V01-LO024`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C16-BP01`](./chapter-blueprints/16-functional-decomposition-and-reuse.md)

- **Objective:** Çok adımlı veri işini cohesive fonksiyonlara ayırmak.
- **Required Skills:** Contracts, scope, parameters ve decomposition.
- **Tasks:** Function map oluşturmak; dependencies göstermek; iki tasarımı coupling ve testability ile karşılaştırmak.
- **Evaluation Criteria:** Decomposition 7, contracts 5, trade-off 4, explanation 4 puan.
- **Bonus Challenge:** Pipeline ve orchestration yaklaşımlarını karşılaştırmak.

## Lab 17 — Analyze a Score Collection

- **Lab ID:** `V01-C17-L01`
- **Chapter ID:** `V01-C17`
- **Learning Outcome IDs:** `V01-LO025`, `V01-LO026`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C17-BP01`](./chapter-blueprints/17-collections-and-iteration.md)

- **Objective:** Collection traversal, filter, mapping ve aggregation davranışlarını seçmek.
- **Required Skills:** Loops, functions ve return values.
- **Tasks:** Empty/single/multiple input senaryoları; traversal planı; aggregate doğrulama tablosu hazırlamak.
- **Evaluation Criteria:** Traversal 7, edge cases 5, aggregate correctness 4, explanation 4 puan.
- **Bonus Challenge:** Tek pass ve çok pass tasarım maliyetini karşılaştırmak.

## Lab 18 — Model Inventory Records

- **Lab ID:** `V01-C18-L01`
- **Chapter ID:** `V01-C18`
- **Learning Outcome IDs:** `V01-LO027`, `V01-LO028`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C18-BP01`](./chapter-blueprints/18-records-and-data-modeling.md)

- **Objective:** Domain gereksiniminden record ve invariant modeli üretmek.
- **Required Skills:** Types, collections ve function contracts.
- **Tasks:** Field/type tablosu; required/optional kararları; üç invariant ve invalid-state örneği tanımlamak.
- **Evaluation Criteria:** Model fitness 7, invariants 5, invalid states 4, explanation 4 puan.
- **Bonus Challenge:** Nested ve flat modellerin değişim maliyetini karşılaştırmak.

## Lab 19 — Trace Recursive Structures

- **Lab ID:** `V01-C19-L01`
- **Chapter ID:** `V01-C19`
- **Learning Outcome IDs:** `V01-LO029`, `V01-LO030`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C19-BP01`](./chapter-blueprints/19-recursion-and-recursive-thinking.md)

- **Objective:** Recursive call, base case ve stack davranışını izlemek.
- **Required Skills:** Functions, conditions, scope ve lifetime.
- **Tasks:** Base/recursive case belirlemek; üç input için call tree üretmek; progress ve termination gerekçesi yazmak.
- **Evaluation Criteria:** Call trace 8, base case 4, termination 4, explanation 4 puan.
- **Bonus Challenge:** Eşdeğer iterative çözüm taslağı üretmek.

## Lab 20 — Build a Text Statistics Pipeline

- **Lab ID:** `V01-C20-L01`
- **Chapter ID:** `V01-C20`
- **Learning Outcome IDs:** `V01-LO031`
- **Difficulty:** Beginner
- **Estimated Duration:** 90 minutes
- **Related Blueprint:** [`V01-C20-BP01`](./chapter-blueprints/20-strings-and-text-processing.md)

- **Objective:** Messy text'i normalize edip ölçülebilir çıktılara dönüştürmek.
- **Required Skills:** Input transformation, functions ve collections.
- **Tasks:** Normalization policy; tokenize/filter/aggregate aşamaları; Unicode, whitespace ve empty-input testleri tanımlamak.
- **Evaluation Criteria:** Pipeline 7, policy clarity 4, edge cases 5, explanation 4 puan.
- **Bonus Challenge:** İki farklı tokenization politikasının sonuç etkisini karşılaştırmak.

## Lab 21 — Compare Search Strategies

- **Lab ID:** `V01-C21-L01`
- **Chapter ID:** `V01-C21`
- **Learning Outcome IDs:** `V01-LO032`, `V01-LO033`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C21-BP01`](./chapter-blueprints/21-searching-algorithms.md)

- **Objective:** Linear ve binary search davranışını precondition ve comparison count ile karşılaştırmak.
- **Required Skills:** Collections, loops ve conditions.
- **Tasks:** Found/not-found trace; binary interval table; üç input shape için algorithm selection yazmak.
- **Evaluation Criteria:** Trace 7, preconditions 4, selection 5, explanation 4 puan.
- **Bonus Challenge:** İlk veya son eşleşmeyi bulma varyantı tasarlamak.

## Lab 22 — Trace and Verify Two Sorts

- **Lab ID:** `V01-C22-L01`
- **Chapter ID:** `V01-C22`
- **Learning Outcome IDs:** `V01-LO034`, `V01-LO035`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C22-BP01`](./chapter-blueprints/22-sorting-algorithms.md)

- **Objective:** Selection ve insertion temelli sorting süreçlerini invariant ile doğrulamak.
- **Required Skills:** Nested loops, collection mutation ve comparison.
- **Tasks:** Her pass sonrası state; sorted-prefix invariant; duplicates ve already-sorted input analizi üretmek.
- **Evaluation Criteria:** Pass trace 8, invariant 4, edge cases 4, explanation 4 puan.
- **Bonus Challenge:** Stability gerektiren record sıralaması tasarlamak.

## Lab 23 — Measure Growth, Explain Trade-offs

- **Lab ID:** `V01-C23-L01`
- **Chapter ID:** `V01-C23`
- **Learning Outcome IDs:** `V01-LO036`, `V01-LO037`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C23-BP01`](./chapter-blueprints/23-algorithmic-complexity-and-trade-offs.md)

- **Objective:** Input size ve operation count arasındaki büyümeyi karşılaştırmak.
- **Required Skills:** Search, sort, loops ve algorithm tracing.
- **Tasks:** Operation-count modeli; en az dört input size tablosu; time/space/simplicity karar notu üretmek.
- **Evaluation Criteria:** Cost model 7, data analysis 5, trade-off 4, explanation 4 puan.
- **Bonus Challenge:** Asymptotic olarak iyi fakat küçük girdide pahalı seçeneği açıklamak.

## Lab 24 — Classify and Contain Failures

- **Lab ID:** `V01-C24-L01`
- **Chapter ID:** `V01-C24`
- **Learning Outcome IDs:** `V01-LO038`, `V01-LO039`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C24-BP01`](./chapter-blueprints/24-errors-and-failure-modes.md)

- **Objective:** Failure türlerini ayırmak ve uygun boundary davranışı tasarlamak.
- **Required Skills:** Validation, control flow, scope ve data invariants.
- **Tasks:** Failure taxonomy; propagation path; user message, diagnostic context ve recovery policy tanımlamak.
- **Evaluation Criteria:** Classification 6, containment 6, recovery 4, explanation 4 puan.
- **Bonus Challenge:** Fail-fast ve graceful-degradation seçeneklerini karşılaştırmak.

## Lab 25 — Debug from Symptom to Root Cause

- **Lab ID:** `V01-C25-L01`
- **Chapter ID:** `V01-C25`
- **Learning Outcome IDs:** `V01-LO040`, `V01-LO041`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C25-BP01`](./chapter-blueprints/25-systematic-debugging.md)

- **Objective:** Bir failure'ı hipotez odaklı debugging ile izole etmek.
- **Required Skills:** Execution tracing, failure modes ve algorithm analysis.
- **Tasks:** Reproduction; minimal case; üç hipotez ve kontrollü deney; root-cause ve regression risk kaydı üretmek.
- **Evaluation Criteria:** Reproduction 5, hypothesis evidence 7, root cause 4, explanation 4 puan.
- **Bonus Challenge:** Debugging süresini azaltacak ek observability noktaları tasarlamak.

## Lab 26 — Design a Boundary-Focused Test Suite

- **Lab ID:** `V01-C26-L01`
- **Chapter ID:** `V01-C26`
- **Learning Outcome IDs:** `V01-LO042`, `V01-LO043`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C26-BP01`](./chapter-blueprints/26-testing-fundamentals.md)

- **Objective:** Contract ve riskten dengeli test seti üretmek.
- **Required Skills:** Functions, structured data, failures ve debugging.
- **Tasks:** Normal/boundary/invalid partitions; expected results; regression test; coverage limitation yazmak.
- **Evaluation Criteria:** Test selection 7, oracle quality 5, regression 4, explanation 4 puan.
- **Bonus Challenge:** Property-based test için üç invariant önermek.

## Lab 27 — Refactor Under Test

- **Lab ID:** `V01-C27-L01`
- **Chapter ID:** `V01-C27`
- **Learning Outcome IDs:** `V01-LO044`, `V01-LO045`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C27-BP01`](./chapter-blueprints/27-clean-code-and-refactoring.md)

- **Objective:** Davranışı koruyarak readability ve maintainability iyileştirmek.
- **Required Skills:** Functional decomposition, complexity, debugging ve testing.
- **Tasks:** Smell/risk listesi; küçük refactoring sırası; her adım için test kanıtı; before/after değerlendirme üretmek.
- **Evaluation Criteria:** Safety 6, maintainability improvement 6, test evidence 4, explanation 4 puan.
- **Bonus Challenge:** Reddedilen bir refactoring seçeneğini maliyetle gerekçelendirmek.

## Lab 28 — Produce a Program Design Dossier

- **Lab ID:** `V01-C28-L01`
- **Chapter ID:** `V01-C28`
- **Learning Outcome IDs:** `V01-LO046`
- **Difficulty:** Intermediate
- **Estimated Duration:** 120 minutes
- **Related Blueprint:** [`V01-C28-BP01`](./chapter-blueprints/28-program-design-from-requirements-to-delivery.md)

- **Objective:** Küçük program için gereksinimden teslimata izlenebilir tasarım dosyası hazırlamak.
- **Required Skills:** Chapter 03-27 modül kapıları.
- **Tasks:** Problem contract, data model, pseudocode, function map, risk, test plan, delivery ve change scenario analizi üretmek.
- **Evaluation Criteria:** Traceability 6, design correctness 5, verification 5, explanation 4 puan.
- **Bonus Challenge:** Yeni bir gereksinimin tasarıma etkisini change map ile göstermek.

## Laboratory Count and Traceability

Toplam 28 lab planlanmıştır; her Chapter için tam olarak bir birincil lab bulunur. Lab uygulama dosyaları daha sonra oluşturulduğunda bu kimlikler ve sözleşmeler korunmalıdır.

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

- [Chapter Map](./chapter-map.md)
- [Learning Outcomes](./learning-outcomes.md)
- [Assessment](./assessment.md)
