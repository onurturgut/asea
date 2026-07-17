---
document_type: "supporting-document"
supporting_document_id: "V01-SD-PROJ-001"
supporting_document_type: "Project Plan"
title: "Volume 01 Project Blueprint"
version: "1.1.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Project Blueprint

## Purpose

Altı Mini Project ve tek Capstone kolaydan zora ilerler. Projeler çözüm veya kod içermez; problem sınırı, kanıt ve değerlendirme sözleşmesini tanımlar. Her proje ilgili Chapter kapısı geçildikten sonra başlatılır.

## Scope

This document governs the Project Plan records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Project Plan data within Volume 01.
- **Owner Role:** Curriculum Architect.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Project Plan records.

## Mini Project 01 — Instruction Simulator

- **Project ID:** `V01-P01`
- **Difficulty:** Beginner
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** Basit bir machine state üzerinde kesin talimatları sırayla yürüten çözüm modeli tasarlamak.
- **Purpose:** Program, execution, decomposition, pseudocode ve trace kavramlarını birleştirmek.
- **Learning Outcomes:** V01-LO001–V01-LO006.
- **Required Chapters:** 01-04.
- **Features:** Başlangıç state'i, sınırlı instruction set, adım trace'i, final-state raporu, invalid-instruction davranışı.
- **Technical Scope:** Dil bağımsız model; implementation aşamasında yalnızca sequence, simple values ve output gerekir.
- **Technical Requirements:** En az beş instruction türü; sonlanan execution; iki invalid case; deterministic trace.
- **Deliverables:** Problem contract, instruction specification, pseudocode, beş test trace'i, decision note.
- **Success Criteria:** Trace'lerin %100 doğru olması; invalid case'lerin kontrollü sonuçlanması; algoritmanın sözlü açıklanabilmesi.
- **Evaluation:** Correctness %40, problem/algorithm %25, trace evidence %20, explanation %15.
- **Estimated Duration:** 5-7 hours.

## Mini Project 02 — Data Transformation Console

- **Project ID:** `V01-P02`
- **Difficulty:** Beginner
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** Ham kayıt girdisini doğrulayıp normalize edilmiş özet çıktıya dönüştürmek.
- **Purpose:** Type, state, expression ve transformation pipeline yeterliklerini bütünleştirmek.
- **Learning Outcomes:** V01-LO007–V01-LO012.
- **Required Chapters:** 05-08.
- **Features:** Input contract, parsing, validation, normalization, derived values, formatted output.
- **Technical Scope:** Tek kayıt modeli; file/database/network kullanımı yok; JavaScript yalnızca örnek implementation dili olabilir.
- **Technical Requirements:** En az altı alan; üç conversion; dört invalid case; dönüşüm aşamalarının ayrılması.
- **Deliverables:** Data dictionary, pipeline diagram, input/output examples, validation matrix, verification record.
- **Success Criteria:** Normal ve boundary girdilerinin beklenen çıktıyı üretmesi; invalid girdilerin anlamlı şekilde reddedilmesi.
- **Evaluation:** Data correctness %35, boundary handling %25, pipeline design %25, explanation %15.
- **Estimated Duration:** 6-8 hours.

## Mini Project 03 — Rule-Based Workflow

- **Project ID:** `V01-P03`
- **Difficulty:** Beginner
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** Birden fazla kural ve tekrar içeren karar sürecini eksiksiz yürütmek.
- **Purpose:** Boolean logic, conditions, loops ve composite control flow'u gerçekçi bir akışta kullanmak.
- **Learning Outcomes:** V01-LO013–V01-LO018.
- **Required Chapters:** 09-12.
- **Features:** Decision table, repeated input processing, summary counters, default behavior, boundary cases.
- **Technical Scope:** In-memory veri; tek kullanıcı oturumu; dış sistem entegrasyonu yok.
- **Technical Requirements:** En az sekiz karar kombinasyonu; bir sonlanan loop; bir accumulator; tüm branch'ler için test girdisi.
- **Deliverables:** Rule catalog, decision table, control-flow map, branch test matrix, reflection.
- **Success Criteria:** Kuralların çelişkisiz uygulanması; loop termination kanıtı; branch testlerinin tamamının geçmesi.
- **Evaluation:** Rule correctness %35, control flow %25, test coverage %25, explanation %15.
- **Estimated Duration:** 7-9 hours.

## Mini Project 04 — Function-Based Utility Toolkit

- **Project ID:** `V01-P04`
- **Difficulty:** Beginner
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** İlişkili küçük davranışları açık contract'lı fonksiyonlar halinde sunan araç seti tasarlamak.
- **Purpose:** Parameter, return, scope, side effect ve decomposition becerilerini birleştirmek.
- **Learning Outcomes:** V01-LO019–V01-LO024.
- **Required Chapters:** 13-16.
- **Features:** En az sekiz utility function, ortak validation boundary, composition örnekleri, hata sözleşmesi.
- **Technical Scope:** Saf hesaplama çekirdeği; input/output etkileri boundary'de; framework yok.
- **Technical Requirements:** Her fonksiyonda contract; gizli global state olmaması; tek sorumluluk; bağımsız doğrulama.
- **Deliverables:** Function map, contract catalog, dependency view, test cases, design rationale.
- **Success Criteria:** Contract'ların karşılanması; fonksiyonların bağımsız test edilebilmesi; side effect'lerin açıklanması.
- **Evaluation:** Contract quality %30, decomposition %30, correctness %25, explanation %15.
- **Estimated Duration:** 8-10 hours.

## Mini Project 05 — Structured Data Processor

- **Project ID:** `V01-P05`
- **Difficulty:** Beginner
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** Record koleksiyonunu doğrulayan, dönüştüren ve metin tabanlı rapor üreten program tasarlamak.
- **Purpose:** Collections, data modeling, recursion ve text processing yeterliklerini bütünleştirmek.
- **Learning Outcomes:** V01-LO025–V01-LO031.
- **Required Chapters:** 17-20.
- **Features:** Record schema, collection filtering/aggregation, nested-data işlemi, text normalization, report output.
- **Technical Scope:** In-memory dataset; küçük recursive alt problem; persistence ve UI yok.
- **Technical Requirements:** En az on record; üç invariant; empty/duplicate/malformed cases; recursive ve iterative karar gerekçesi.
- **Deliverables:** Schema, invariant listesi, processing pipeline, edge-case matrix, result verification.
- **Success Criteria:** Veri bütünlüğünün korunması; tüm edge case'lerin belirlenmiş davranışı; rapor sonuçlarının yeniden hesaplanabilir olması.
- **Evaluation:** Data model %25, processing correctness %30, edge cases %25, explanation %20.
- **Estimated Duration:** 9-12 hours.

## Mini Project 06 — Algorithm Workbench

- **Project ID:** `V01-P06`
- **Difficulty:** Intermediate
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** Aynı veri üzerinde search ve sort seçeneklerini trace, ölçüm ve trade-off ile karşılaştırmak.
- **Purpose:** Algorithm correctness, invariant ve complexity düşüncesini uygulamak.
- **Learning Outcomes:** V01-LO032–V01-LO037.
- **Required Chapters:** 21-23.
- **Features:** Linear/binary search, iki elementary sort, operation counter, input-shape comparison, recommendation report.
- **Technical Scope:** Küçük ve orta sentetik dataset; performans sonucu eğitim amaçlıdır, production benchmark değildir.
- **Technical Requirements:** Sorted-input contract; found/not-found tests; duplicate values; en az dört input size; time/space açıklaması.
- **Deliverables:** Algorithm contracts, traces, measurement table, trade-off memo, limitation statement.
- **Success Criteria:** Algoritmaların doğru sonuç vermesi; operation count'un yeniden üretilebilmesi; seçimin bağlama göre savunulması.
- **Evaluation:** Correctness %30, measurement %25, complexity reasoning %25, communication %20.
- **Estimated Duration:** 9-12 hours.

## Capstone Project — Reliable Command-Line Problem Solver

- **Project ID:** `V01-CP01`
- **Difficulty:** Intermediate
- **Related Blueprint:** [`V01-BP01`](./volume-blueprint.md)

- **Goal:** Gerçekçi, sınırları açık bir operasyon problemini güvenilir ve değiştirilebilir command-line programıyla çözmek.
- **Purpose:** Volume'un bütün learning outcomes setini gereksinimden teknik savunmaya kadar birleştirmek.
- **Learning Outcomes:** Birincil V01-LO046; destekleyici V01-LO005, V01-LO006, V01-LO012, V01-LO018, V01-LO024, V01-LO027, V01-LO037, V01-LO038–V01-LO045.
- **Required Chapters:** 01-28 ve altı Mini Project'in başarıyla tamamlanması.
- **Features:** Girdi doğrulama, en az iki record koleksiyonu veya ilişkili veri görünümü, rule-based işlem, search/sort kararı, özet rapor, controlled failure, test suite.
- **Technical Scope:** Command-line interface; local in-memory veya sağlanan statik veri; network, database, GUI, framework ve deployment kapsam dışıdır.
- **Technical Requirements:** En az 10 ölçülebilir requirement; function contracts; açık data model; en az 25 test case; debug log; complexity note; refactoring record; user/developer documentation.
- **Deliverables:** Problem statement, requirements, scope, data dictionary, algorithm/pseudocode, function map, risk register, implementation, tests, debug record, review checklist, usage guide, retrospective ve 10 dakikalık technical defense.
- **Success Criteria:** Bütün acceptance criteria'nın karşılanması; testlerin geçmesi; invalid input'ta kontrollü davranış; kritik bug olmaması; öğrenci tarafından kaynak kapalı açıklanabilmesi.
- **Evaluation:** Requirements/traceability %15, correctness %20, design %15, tests/debugging %20, readability/maintainability %15, documentation/defense %15.
- **Estimated Duration:** 25-30 hours.

## Capstone Candidate Domains

Öğrenci aşağıdaki problem sınıflarından birini seçebilir; ayrıntılı gereksinim capstone başlangıcında dondurulur:

- Küçük envanter ve yeniden sipariş analiz aracı.
- Etkinlik kayıt ve uygunluk doğrulama sistemi.
- Kişisel çalışma kayıtlarını analiz eden ilerleme raporlayıcı.
- Destek taleplerini sınıflandırıp önceliklendiren kural motoru.

Alan seçimi yeni teknik kapsam eklememelidir.

## Project Count

- Mini Project: 6
- Capstone Project: 1
- Total: 7

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

- [Learning Outcomes](./learning-outcomes.md)
- [Assessment](./assessment.md)
- [Study Plans](./study-plan.md)
