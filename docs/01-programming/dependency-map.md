---
document_type: "supporting-document"
supporting_document_id: "V01-SD-DMAP-001"
supporting_document_type: "Dependency Map"
title: "Volume 01 Dependency Map"
version: "1.1.0"
status: "Stable"
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
V01-C01 Programming
→ V01-C02 Program Execution
→ V01-C03 Problem Definition and Decomposition
→ V01-C04 Algorithms, Pseudocode, and Tracing
→ V01-C05 Values and Data Types
→ V01-C06 Variables and State
→ V01-C07 Operators and Expressions
→ V01-C08 Input, Output, and Data Transformation
→ V01-C09 Boolean Logic and Truth
→ V01-C10 Conditional Execution
→ V01-C11 Repetition and Loops
→ V01-C12 Nested and Composite Control Flow
→ V01-C13 Functions and Contracts
→ V01-C14 Parameters and Return Values
→ V01-C15 Scope, Lifetime, and Side Effects
→ V01-C16 Functional Decomposition and Reuse
→ V01-C17 Collections and Iteration
→ V01-C18 Records and Data Modeling
→ V01-C19 Recursion and Recursive Thinking
→ V01-C20 Strings and Text Processing
→ V01-C21 Searching Algorithms
→ V01-C22 Sorting Algorithms
→ V01-C23 Algorithmic Complexity and Trade-offs
→ V01-C24 Errors and Failure Modes
→ V01-C25 Systematic Debugging
→ V01-C26 Testing Fundamentals
→ V01-C27 Clean Code and Refactoring
→ V01-C28 Program Design from Requirements to Delivery
```

Bu ana yol önerilen öğrenme sırasıdır. Aşağıdaki harita gerçek zorunlu bağımlılıkları daha kesin gösterir; her Chapter yalnızca hemen önceki numaraya değil, listelenen bilgi kanıtlarına bağlıdır.

## Chapter Dependency Matrix

| Chapter | Cannot Be Learned Reliably Without | Required Evidence Produced |
| ---: | --- | --- |
| `V01-C01` | `V00` | Program, instruction ve computation ayrımını açıklama |
| `V01-C02` | `V01-C01` | Instruction, memory, input ve output yürütmesini trace etme |
| `V01-C03` | `V01-C01`, `V01-C02` | Problem sözleşmesi ve decomposition tree |
| `V01-C04` | `V01-C03` | Sonlanan pseudocode ve trace table |
| `V01-C05` | `V01-C02`, `V01-C04` | Değerleri tür ve temsil sınırlarıyla sınıflandırma |
| `V01-C06` | `V01-C05` | Değişken durumunu adım adım izleme |
| `V01-C07` | `V01-C05`, `V01-C06` | Expression değerlendirme ve ara sonuç trace'i |
| `V01-C08` | `V01-C04`, `V01-C07` | Validate-transform-output veri akışı |
| `V01-C09` | `V01-C07` | Truth table ve Boolean expression |
| `V01-C10` | `V01-C08`, `V01-C09` | Karar tablosundan conditional flow üretme |
| `V01-C11` | `V01-C06`, `V01-C09`, `V01-C10` | Sonlanan loop ve iteration trace'i |
| `V01-C12` | `V01-C10`, `V01-C11` | İç içe akışı doğrulanabilir parçalara ayırma |
| `V01-C13` | `V01-C04`, `V01-C12` | Function contract ve invocation trace'i |
| `V01-C14` | `V01-C07`, `V01-C13` | Parametre-return veri akışı |
| `V01-C15` | `V01-C06`, `V01-C13`, `V01-C14` | Scope/lifetime trace ve side-effect ayrımı |
| `V01-C16` | `V01-C03`, `V01-C04`, `V01-C13`, `V01-C14`, `V01-C15` | Çok adımlı çözümün fonksiyonlara ayrılması |
| `V01-C17` | `V01-C11`, `V01-C14`, `V01-C15`, `V01-C16` | Koleksiyon traversal ve aggregate sonucu |
| `V01-C18` | `V01-C05`, `V01-C14`, `V01-C17` | Alanları ve invariant'ları olan record modeli |
| `V01-C19` | `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15` | Base case, recursive case ve call trace |
| `V01-C20` | `V01-C08`, `V01-C14`, `V01-C17` | Normalize-tokenize-filter-summarize hattı |
| `V01-C21` | `V01-C10`, `V01-C11`, `V01-C17` | Linear/binary search trace ve kullanım koşulu |
| `V01-C22` | `V01-C11`, `V01-C12`, `V01-C17` | Sorting pass trace ve invariant |
| `V01-C23` | `V01-C04`, `V01-C17`, `V01-C21`, `V01-C22` | Girdi büyüklüğüne göre maliyet karşılaştırması |
| `V01-C24` | `V01-C08`, `V01-C12`, `V01-C15`, `V01-C18` | Failure sınıflandırması ve error boundary |
| `V01-C25` | `V01-C02`, `V01-C04`, `V01-C23`, `V01-C24` | Yeniden üretim, hipotez, deney ve kök neden kaydı |
| `V01-C26` | `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C17`, `V01-C18`, `V01-C24`, `V01-C25` | Normal, boundary ve invalid test seti |
| `V01-C27` | `V01-C16`, `V01-C23`, `V01-C25`, `V01-C26` | Davranışı koruyan refactoring kanıtı |
| `V01-C28` | `V01-C03`, `V01-C04`, `V01-C05`, `V01-C06`, `V01-C07`, `V01-C08`, `V01-C09`, `V01-C10`, `V01-C11`, `V01-C12`, `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C17`, `V01-C18`, `V01-C19`, `V01-C20`, `V01-C21`, `V01-C22`, `V01-C23`, `V01-C24`, `V01-C25`, `V01-C26`, `V01-C27` | Gereksinimden teslimata program design dossier |

## Branching Dependencies

```text
V01-C07 Expressions ───────┐
                      ├→ V01-C09 Boolean Logic → V01-C10 Conditions
V01-C08 Data Transformation┘

V01-C11 Loops ─────────────┐
V01-C14 Parameters/Returns ├→ V01-C17 Collections → V01-C18 Records
V01-C16 Decomposition ─────┘

V01-C10 Conditions ────────┐
V01-C13 Functions ─────────┼→ V01-C19 Recursion
V01-C15 Scope ─────────────┘

V01-C17 Collections ───────┬→ V01-C21 Searching ─┐
                      └→ V01-C22 Sorting ────┴→ V01-C23 Complexity

V01-C24 Failure Modes → V01-C25 Debugging → V01-C26 Testing → V01-C27 Refactoring
03-27 ─────────────────────────────────────────→ V01-C28 Program Design
```

## Module Gates

- **Gate `V01-M01`:** Chapter 04'te bir algoritmayı pseudocode ve trace ile doğrulama.
- **Gate `V01-M02`:** Chapter 08'de tür, durum ve dönüşüm hatlarını açıklama.
- **Gate `V01-M03`:** Chapter 12'de sonlanan ve doğru bileşik kontrol akışı kurma.
- **Gate `V01-M04`:** Chapter 16'da davranışı fonksiyon sözleşmelerine ayırma.
- **Gate `V01-M05`:** Chapter 20'de structured data ve text pipeline tasarlama.
- **Gate `V01-M06`:** Chapter 23'te algoritma seçimini correctness ve cost ile savunma.
- **Gate `V01-M07`:** Chapter 28'de küçük programı requirements, tests ve review kanıtıyla teslim etme.

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
