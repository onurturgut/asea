---
document_type: "supporting-document"
supporting_document_id: "V01-SD-DMAP-001"
supporting_document_type: "Dependency Map"
title: "Volume 01 Dependency Map"
version: "1.0.0"
status: "Review"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Dependency Map

## Purpose

Ok (`→`) işareti kaynak Chapter yeterliğinin hedef Chapter için zorunlu olduğunu gösterir. Kesikli veya isteğe bağlı ilişki kullanılmamıştır. Bir öğrenci ancak kaynak Chapter'ın assessment kapısını geçtiğinde bağımlılığı karşılamış sayılır.

## Scope

This document governs the Dependency Map records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Dependency Map data within Volume 01.
- **Owner Role:** Curriculum Architect.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Dependency Map records.

## Primary Learning Path

```text
01 Programming
→ 02 Program Execution
→ 03 Problem Definition and Decomposition
→ 04 Algorithms, Pseudocode, and Tracing
→ 05 Values and Data Types
→ 06 Variables and State
→ 07 Operators and Expressions
→ 08 Input, Output, and Data Transformation
→ 09 Boolean Logic and Truth
→ 10 Conditional Execution
→ 11 Repetition and Loops
→ 12 Nested and Composite Control Flow
→ 13 Functions and Contracts
→ 14 Parameters and Return Values
→ 15 Scope, Lifetime, and Side Effects
→ 16 Functional Decomposition and Reuse
→ 17 Collections and Iteration
→ 18 Records and Data Modeling
→ 19 Recursion and Recursive Thinking
→ 20 Strings and Text Processing
→ 21 Searching Algorithms
→ 22 Sorting Algorithms
→ 23 Algorithmic Complexity and Trade-offs
→ 24 Errors and Failure Modes
→ 25 Systematic Debugging
→ 26 Testing Fundamentals
→ 27 Clean Code and Refactoring
→ 28 Program Design from Requirements to Delivery
```

Bu ana yol önerilen öğrenme sırasıdır. Aşağıdaki harita gerçek zorunlu bağımlılıkları daha kesin gösterir; her Chapter yalnızca hemen önceki numaraya değil, listelenen bilgi kanıtlarına bağlıdır.

## Chapter Dependency Matrix

| Chapter | Cannot Be Learned Reliably Without | Required Evidence Produced |
| ---: | --- | --- |
| 01 | Volume 00 çalışma modeli | Program, instruction ve computation ayrımını açıklama |
| 02 | 01 | Instruction, memory, input ve output yürütmesini trace etme |
| 03 | 01-02 | Problem sözleşmesi ve decomposition tree |
| 04 | 03 | Sonlanan pseudocode ve trace table |
| 05 | 02, 04 | Değerleri tür ve temsil sınırlarıyla sınıflandırma |
| 06 | 05 | Değişken durumunu adım adım izleme |
| 07 | 05-06 | Expression değerlendirme ve ara sonuç trace'i |
| 08 | 04, 07 | Validate-transform-output veri akışı |
| 09 | 07 | Truth table ve Boolean expression |
| 10 | 08-09 | Karar tablosundan conditional flow üretme |
| 11 | 06, 09-10 | Sonlanan loop ve iteration trace'i |
| 12 | 10-11 | İç içe akışı doğrulanabilir parçalara ayırma |
| 13 | 04, 12 | Function contract ve invocation trace'i |
| 14 | 07, 13 | Parametre-return veri akışı |
| 15 | 06, 13-14 | Scope/lifetime trace ve side-effect ayrımı |
| 16 | 03-04, 13-15 | Çok adımlı çözümün fonksiyonlara ayrılması |
| 17 | 11, 14-16 | Koleksiyon traversal ve aggregate sonucu |
| 18 | 05, 14, 17 | Alanları ve invariant'ları olan record modeli |
| 19 | 10, 13-15 | Base case, recursive case ve call trace |
| 20 | 08, 14, 17 | Normalize-tokenize-filter-summarize hattı |
| 21 | 10-11, 17 | Linear/binary search trace ve kullanım koşulu |
| 22 | 11-12, 17 | Sorting pass trace ve invariant |
| 23 | 04, 17, 21-22 | Girdi büyüklüğüne göre maliyet karşılaştırması |
| 24 | 08, 12, 15, 18 | Failure sınıflandırması ve error boundary |
| 25 | 02, 04, 23-24 | Yeniden üretim, hipotez, deney ve kök neden kaydı |
| 26 | 10, 13-18, 24-25 | Normal, boundary ve invalid test seti |
| 27 | 16, 23, 25-26 | Davranışı koruyan refactoring kanıtı |
| 28 | 03-27 | Gereksinimden teslimata program design dossier |

## Branching Dependencies

```text
07 Expressions ───────┐
                      ├→ 09 Boolean Logic → 10 Conditions
08 Data Transformation┘

11 Loops ─────────────┐
14 Parameters/Returns ├→ 17 Collections → 18 Records
16 Decomposition ─────┘

10 Conditions ────────┐
13 Functions ─────────┼→ 19 Recursion
15 Scope ─────────────┘

17 Collections ───────┬→ 21 Searching ─┐
                      └→ 22 Sorting ────┴→ 23 Complexity

24 Failure Modes → 25 Debugging → 26 Testing → 27 Refactoring
03-27 ─────────────────────────────────────────→ 28 Program Design
```

## Module Gates

- **Gate M1:** Chapter 04'te bir algoritmayı pseudocode ve trace ile doğrulama.
- **Gate M2:** Chapter 08'de tür, durum ve dönüşüm hatlarını açıklama.
- **Gate M3:** Chapter 12'de sonlanan ve doğru bileşik kontrol akışı kurma.
- **Gate M4:** Chapter 16'da davranışı fonksiyon sözleşmelerine ayırma.
- **Gate M5:** Chapter 20'de structured data ve text pipeline tasarlama.
- **Gate M6:** Chapter 23'te algoritma seçimini correctness ve cost ile savunma.
- **Gate M7:** Chapter 28'de küçük programı requirements, tests ve review kanıtıyla teslim etme.

## Volume 02 Transition Dependency

Volume 02 — Computer Science'ın ayrıntılı kapsamı kendi Blueprint'i tarafından tanımlanacaktır. Geçiş bağımlılığı belirli bir teknoloji değil; Chapter 28, Final Assessment ve Capstone kapılarının birlikte tamamlanmasıdır. Ayrıntılı ölçütler [assessment.md](./assessment.md) içinde yer alır.

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

- [Chapter Map](./chapter-map.md)
- [Module Map](./module-map.md)
- [Volume Roadmap](./roadmap.md)
