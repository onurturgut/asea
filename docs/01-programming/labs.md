---
document_type: "supporting-document"
supporting_document_id: "V01-SD-LAB-001"
supporting_document_type: "Laboratory Plan"
title: "Volume 01 Laboratory Blueprint"
version: "1.0.0"
status: "Review"
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

- **Objective:** Belirsiz doğal dil talimatlarını yürütülebilir adımlara dönüştürmek.
- **Required Skills:** Program, instruction, input, output ayrımı.
- **Tasks:** Bir günlük sürecin girdisini ve beklenen sonucunu tanımlamak; talimatları sıralamak; iki belirsizliği test girdisiyle göstermek.
- **Evaluation Criteria:** Kesinlik 6, sıra ve tamlık 5, test senaryoları 5, açıklama 4 puan.
- **Bonus Challenge:** Aynı talimatları farklı başlangıç durumu için uyarlamak.

## Lab 02 — Trace a Tiny Machine

- **Objective:** Basitleştirilmiş instruction ve memory modelini adım adım izlemek.
- **Required Skills:** Chapter 01 kavramları ve sıralı talimat okuma.
- **Tasks:** Başlangıç state'ini kaydetmek; her instruction sonrası memory state üretmek; final output'u gerekçelendirmek.
- **Evaluation Criteria:** Trace doğruluğu 8, state gösterimi 5, final sonuç 3, model açıklaması 4 puan.
- **Bonus Challenge:** Tek instruction değişikliğinin bütün state zincirine etkisini tahmin etmek.

## Lab 03 — Decompose a Ticket Pricing Problem

- **Objective:** Belirsiz fiyatlandırma isteğini doğrulanabilir alt problemlere ayırmak.
- **Required Skills:** Input-process-output modeli ve scope tanımı.
- **Tasks:** Paydaş, girdi, çıktı, constraint ve assumption listesi; decomposition tree; beş edge case hazırlamak.
- **Evaluation Criteria:** Problem contract 6, decomposition 6, edge case 4, açıklık 4 puan.
- **Bonus Challenge:** Çelişen iki paydaş kuralını görünür kılmak.

## Lab 04 — Design and Trace a Fare Algorithm

- **Objective:** Problem contract'tan sonlanan pseudocode üretmek.
- **Required Skills:** Decomposition, sequence, precondition ve postcondition.
- **Tasks:** Pseudocode yazmak; normal, boundary ve invalid input trace'leri üretmek; termination gerekçesi sunmak.
- **Evaluation Criteria:** Algorithm correctness 7, trace 6, termination 3, explanation 4 puan.
- **Bonus Challenge:** Aynı sonucu daha az karar adımıyla tasarlamak.

## Lab 05 — Classify and Convert Input Values

- **Objective:** Değerleri türlerine ayırmak ve güvenli conversion sınırlarını belirlemek.
- **Required Skills:** Algorithm input ve trace bilgisi.
- **Tasks:** Verilen değer setini sınıflandırmak; conversion tablosu oluşturmak; kayıplı dönüşümleri işaretlemek.
- **Evaluation Criteria:** Type classification 7, conversion analysis 6, risk cases 3, explanation 4 puan.
- **Bonus Challenge:** Locale-dependent number input için ek boundary tanımlamak.

## Lab 06 — Trace an Account State

- **Objective:** Değişkenlerin zaman içindeki state değişimini izlemek.
- **Required Skills:** Value, type, assignment ve initialization.
- **Tasks:** State table üretmek; gereksiz mutation'ları belirlemek; iki değişkeni constant adayı olarak gerekçelendirmek.
- **Evaluation Criteria:** State trace 8, mutation analysis 5, naming 3, explanation 4 puan.
- **Bonus Challenge:** Aynı davranışı daha az mutable state ile modellemek.

## Lab 07 — Build an Expression Evaluator Table

- **Objective:** Bileşik expression'ları precedence, grouping ve türle değerlendirmek.
- **Required Skills:** Values, variables ve assignment trace.
- **Tasks:** Ara sonuç tablosu oluşturmak; implicit conversion risklerini işaretlemek; belirsiz ifadeleri yeniden gruplamak.
- **Evaluation Criteria:** Evaluation 8, type trace 4, rewrite quality 4, explanation 4 puan.
- **Bonus Challenge:** Aynı sonucu üreten iki expression'ın okunabilirliğini karşılaştırmak.

## Lab 08 — Normalize a Registration Record

- **Objective:** Güvenilmeyen girdiyi doğrulanmış bir çıktıya dönüştüren veri hattı tasarlamak.
- **Required Skills:** Parsing, expressions, type conversion ve problem contract.
- **Tasks:** Input contract yazmak; parse/validate/normalize/format aşamalarını belirlemek; invalid case mesajlarını tanımlamak.
- **Evaluation Criteria:** Pipeline 7, validation 5, edge cases 4, explanation 4 puan.
- **Bonus Challenge:** Kısmi geçerli girdiler için recovery politikası tasarlamak.

## Lab 09 — Model Access Rules with Truth Tables

- **Objective:** Erişim kurallarını Boolean model ve truth table ile doğrulamak.
- **Required Skills:** Comparison ve expression evaluation.
- **Tasks:** Predicate'leri adlandırmak; eksiksiz truth table üretmek; iki karmaşık koşulu sadeleştirmek.
- **Evaluation Criteria:** Truth table 8, predicate correctness 4, simplification 4, explanation 4 puan.
- **Bonus Challenge:** Negated access policy için eşdeğer ifade üretmek.

## Lab 10 — Implement a Shipping Decision Table

- **Objective:** Karar tablosunu eksiksiz conditional flow tasarımına dönüştürmek.
- **Required Skills:** Boolean logic, validation ve branch tracing.
- **Tasks:** Decision table hazırlamak; branch order belirlemek; her branch için test girdisi tanımlamak.
- **Evaluation Criteria:** Case coverage 7, flow correctness 6, tests 3, explanation 4 puan.
- **Bonus Challenge:** Guard clause kullanarak eşdeğer daha düz akış tasarlamak.

## Lab 11 — Trace and Repair Repetition

- **Objective:** Loop state, boundary ve termination hatalarını tespit etmek.
- **Required Skills:** State, Boolean condition ve conditional flow.
- **Tasks:** Iteration table üretmek; off-by-one ve infinite-loop nedenlerini belirlemek; en küçük düzeltmeyi açıklamak.
- **Evaluation Criteria:** Trace 7, root cause 5, repair 4, explanation 4 puan.
- **Bonus Challenge:** Counter loop'u sentinel loop modeline dönüştürmek.

## Lab 12 — Simplify a Multi-Rule Scheduler

- **Objective:** Nested control flow'u kapsam kaybetmeden sadeleştirmek.
- **Required Skills:** Conditions, loops ve execution paths.
- **Tasks:** Path listesi çıkarmak; unreachable case belirlemek; guard ve named predicate ile yeni flow tasarlamak.
- **Evaluation Criteria:** Path analysis 6, behavior preservation 6, readability 4, explanation 4 puan.
- **Bonus Challenge:** Aynı kuralları state-transition tablosuyla ifade etmek.

## Lab 13 — Design Function Contracts

- **Objective:** Davranışı açık function contract'larına dönüştürmek.
- **Required Skills:** Algorithms ve composite control flow.
- **Tasks:** Üç fonksiyon için input, precondition, output, postcondition ve failure tanımlamak; call trace üretmek.
- **Evaluation Criteria:** Contract completeness 8, responsibility 4, trace 4, explanation 4 puan.
- **Bonus Challenge:** Bir contract'ı farklı implementation'lara izin verecek biçimde genelleştirmek.

## Lab 14 — Refactor Inputs and Outputs

- **Objective:** Parametre ve return value tasarımını sadeleştirmek.
- **Required Skills:** Function contract ve expression data flow.
- **Tasks:** Gereksiz parametreleri belirlemek; hidden output'u return modeline çevirmek; before/after interface karşılaştırmak.
- **Evaluation Criteria:** Interface correctness 6, data flow 6, compatibility analysis 4, explanation 4 puan.
- **Bonus Challenge:** Birden fazla sonucu anlamlı record olarak modellemek.

## Lab 15 — Diagnose Scope and Mutation

- **Objective:** Scope, shadowing ve side effect kaynaklı davranışı izole etmek.
- **Required Skills:** Variables, functions, parameters ve return values.
- **Tasks:** Identifier resolution trace etmek; side effect'leri sınıflandırmak; state'i daha dar scope'a taşıyan tasarım sunmak.
- **Evaluation Criteria:** Scope trace 7, effect analysis 5, redesign 4, explanation 4 puan.
- **Bonus Challenge:** Pure core / impure shell ayrımı tasarlamak.

## Lab 16 — Decompose a Report Generator

- **Objective:** Çok adımlı veri işini cohesive fonksiyonlara ayırmak.
- **Required Skills:** Contracts, scope, parameters ve decomposition.
- **Tasks:** Function map oluşturmak; dependencies göstermek; iki tasarımı coupling ve testability ile karşılaştırmak.
- **Evaluation Criteria:** Decomposition 7, contracts 5, trade-off 4, explanation 4 puan.
- **Bonus Challenge:** Pipeline ve orchestration yaklaşımlarını karşılaştırmak.

## Lab 17 — Analyze a Score Collection

- **Objective:** Collection traversal, filter, mapping ve aggregation davranışlarını seçmek.
- **Required Skills:** Loops, functions ve return values.
- **Tasks:** Empty/single/multiple input senaryoları; traversal planı; aggregate doğrulama tablosu hazırlamak.
- **Evaluation Criteria:** Traversal 7, edge cases 5, aggregate correctness 4, explanation 4 puan.
- **Bonus Challenge:** Tek pass ve çok pass tasarım maliyetini karşılaştırmak.

## Lab 18 — Model Inventory Records

- **Objective:** Domain gereksiniminden record ve invariant modeli üretmek.
- **Required Skills:** Types, collections ve function contracts.
- **Tasks:** Field/type tablosu; required/optional kararları; üç invariant ve invalid-state örneği tanımlamak.
- **Evaluation Criteria:** Model fitness 7, invariants 5, invalid states 4, explanation 4 puan.
- **Bonus Challenge:** Nested ve flat modellerin değişim maliyetini karşılaştırmak.

## Lab 19 — Trace Recursive Structures

- **Objective:** Recursive call, base case ve stack davranışını izlemek.
- **Required Skills:** Functions, conditions, scope ve lifetime.
- **Tasks:** Base/recursive case belirlemek; üç input için call tree üretmek; progress ve termination gerekçesi yazmak.
- **Evaluation Criteria:** Call trace 8, base case 4, termination 4, explanation 4 puan.
- **Bonus Challenge:** Eşdeğer iterative çözüm taslağı üretmek.

## Lab 20 — Build a Text Statistics Pipeline

- **Objective:** Messy text'i normalize edip ölçülebilir çıktılara dönüştürmek.
- **Required Skills:** Input transformation, functions ve collections.
- **Tasks:** Normalization policy; tokenize/filter/aggregate aşamaları; Unicode, whitespace ve empty-input testleri tanımlamak.
- **Evaluation Criteria:** Pipeline 7, policy clarity 4, edge cases 5, explanation 4 puan.
- **Bonus Challenge:** İki farklı tokenization politikasının sonuç etkisini karşılaştırmak.

## Lab 21 — Compare Search Strategies

- **Objective:** Linear ve binary search davranışını precondition ve comparison count ile karşılaştırmak.
- **Required Skills:** Collections, loops ve conditions.
- **Tasks:** Found/not-found trace; binary interval table; üç input shape için algorithm selection yazmak.
- **Evaluation Criteria:** Trace 7, preconditions 4, selection 5, explanation 4 puan.
- **Bonus Challenge:** İlk veya son eşleşmeyi bulma varyantı tasarlamak.

## Lab 22 — Trace and Verify Two Sorts

- **Objective:** Selection ve insertion temelli sorting süreçlerini invariant ile doğrulamak.
- **Required Skills:** Nested loops, collection mutation ve comparison.
- **Tasks:** Her pass sonrası state; sorted-prefix invariant; duplicates ve already-sorted input analizi üretmek.
- **Evaluation Criteria:** Pass trace 8, invariant 4, edge cases 4, explanation 4 puan.
- **Bonus Challenge:** Stability gerektiren record sıralaması tasarlamak.

## Lab 23 — Measure Growth, Explain Trade-offs

- **Objective:** Input size ve operation count arasındaki büyümeyi karşılaştırmak.
- **Required Skills:** Search, sort, loops ve algorithm tracing.
- **Tasks:** Operation-count modeli; en az dört input size tablosu; time/space/simplicity karar notu üretmek.
- **Evaluation Criteria:** Cost model 7, data analysis 5, trade-off 4, explanation 4 puan.
- **Bonus Challenge:** Asymptotic olarak iyi fakat küçük girdide pahalı seçeneği açıklamak.

## Lab 24 — Classify and Contain Failures

- **Objective:** Failure türlerini ayırmak ve uygun boundary davranışı tasarlamak.
- **Required Skills:** Validation, control flow, scope ve data invariants.
- **Tasks:** Failure taxonomy; propagation path; user message, diagnostic context ve recovery policy tanımlamak.
- **Evaluation Criteria:** Classification 6, containment 6, recovery 4, explanation 4 puan.
- **Bonus Challenge:** Fail-fast ve graceful-degradation seçeneklerini karşılaştırmak.

## Lab 25 — Debug from Symptom to Root Cause

- **Objective:** Bir failure'ı hipotez odaklı debugging ile izole etmek.
- **Required Skills:** Execution tracing, failure modes ve algorithm analysis.
- **Tasks:** Reproduction; minimal case; üç hipotez ve kontrollü deney; root-cause ve regression risk kaydı üretmek.
- **Evaluation Criteria:** Reproduction 5, hypothesis evidence 7, root cause 4, explanation 4 puan.
- **Bonus Challenge:** Debugging süresini azaltacak ek observability noktaları tasarlamak.

## Lab 26 — Design a Boundary-Focused Test Suite

- **Objective:** Contract ve riskten dengeli test seti üretmek.
- **Required Skills:** Functions, structured data, failures ve debugging.
- **Tasks:** Normal/boundary/invalid partitions; expected results; regression test; coverage limitation yazmak.
- **Evaluation Criteria:** Test selection 7, oracle quality 5, regression 4, explanation 4 puan.
- **Bonus Challenge:** Property-based test için üç invariant önermek.

## Lab 27 — Refactor Under Test

- **Objective:** Davranışı koruyarak readability ve maintainability iyileştirmek.
- **Required Skills:** Functional decomposition, complexity, debugging ve testing.
- **Tasks:** Smell/risk listesi; küçük refactoring sırası; her adım için test kanıtı; before/after değerlendirme üretmek.
- **Evaluation Criteria:** Safety 6, maintainability improvement 6, test evidence 4, explanation 4 puan.
- **Bonus Challenge:** Reddedilen bir refactoring seçeneğini maliyetle gerekçelendirmek.

## Lab 28 — Produce a Program Design Dossier

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
