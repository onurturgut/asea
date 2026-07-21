---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-005"
supporting_document_type: "Compatibility Report"
title: "Research Packet: Problem Çözme Yaklaşımı"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Research Lead"
source_ids:
  - "V01-BP01"
  - "V01-C03"
  - "V01-LO005"
derived_from:
  - "./research-request.md"
  - "./research-collection.md"
  - "./research-validation.md"
  - "./research-normalization.md"
x-production-unit: "lesson-03"
x-canonical-lesson-id: "V01-C03"
x-research-stage: "Packet"
x-lesson-production-authority: "Sole research source"
x-verified-on: "2026-07-21"
---

# Research Packet: Problem Çözme Yaklaşımı

## Purpose

`V01-C03` Lesson Production için doğrulanmış tek araştırma kaynağını sağlamak.

## Scope

Problem posing, contract, input/output, constraint, assumption, edge case,
decomposition, abstraction, model, evidence ve iteration’ı kapsar.

## Ownership

Packet yeni süreç standardı oluşturmaz. Canonical outcome ve prerequisites
değişmeden korunur.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Canonical ID | `V01-C03` |
| Module | `V01-M01` |
| Title | Problem Çözme Yaklaşımı |
| Difficulty | Beginner |
| Duration | 2.5 saat |
| Outcome | `V01-LO005` |
| Prerequisites | `V01-C01`, `V01-C02` |

### Verified Concepts

Problem statement, stakeholder, success criterion, input, output, constraint,
assumption, edge case, invalid input, decomposition, abstraction, model,
hypothesis, verification, validation and iteration.

### Normalized Definitions

Constraint zorunlu sınır; assumption doğruluğu izlenmesi gereken kabul; edge
case valid domain sınırıdır. Decomposition ilişkileri koruyarak ayırır;
abstraction amaç için gerekli bilgiyi koruyan model kurar.

### Required Terminology

Problem tanımı (problem statement), gereksinim (requirement), kabul ölçütü
(acceptance criterion), kısıt (constraint), varsayım (assumption), sınır durum
(edge case), parçalama (decomposition), soyutlama (abstraction), doğrulama
(verification/validation bağlama göre açıkça ayrılmalı).

### Learning Objectives

- Symptom, problem ve solution idea’yı ayırmak.
- Input/output/constraint/assumption/edge-case contract oluşturmak.
- Dependencies’i koruyan decomposition üretmek.
- Purpose-fit abstraction seçmek.
- Evidence ile assumption ve model revise etmek.

### Prerequisites

`V01-C01` precise instruction foundation; `V01-C02` execution/state model.

### Dependencies

Incoming `C01`,`C02`; outgoing `C04`. Algorithm design, problem contract
tamamlandıktan sonra öğretilmelidir.

### Teaching Notes

- Start with an ambiguous real request, not a pre-solved textbook prompt.
- Requirement/constraint/assumption table görünür olmalı.
- Decomposition tree’de cross-dependencies gösterilmeli.
- Abstraction is purposeful omission, not loss of required facts.
- Use an evidence loop rather than a rigid waterfall.

### Known Misconceptions

Solution idea equals problem; decomposition means equal pieces; assumption is
fact; edge case is invalid; abstraction deletes detail; first solution should
be final; user request is always complete.

### Example Suggestions

File upload contract; transit delay notification; appointment scheduling with
time-zone constraints; vague note-app request; assumption log.

### Visualization Suggestions

Need-to-contract funnel; iterative evidence cycle; decomposition tree with
dependency edges; requirement/constraint/assumption matrix.

### Assessment Suggestions

Future evidence: five-field contract, hidden-assumption annotation, edge-case
set, decomposition review and revised model. No assessment is generated now.

### AI Mentor Notes

Future mentor should ask for stakeholder, observable success, missing data and
counterexample before suggesting decomposition. It must not prematurely give a
solution architecture.

### Version Metadata

Packet `1.0.0`; Blueprint `2.1.0`; curriculum `0.1.1`; verified 2026-07-21.

### Review Metadata

Research validation Pass; blockers 0; five required outcome fields covered;
dependency and terminology validation Pass.

## Validation

- Packet completeness: Pass.
- Outcome coverage: 1/1.
- Technical conflicts: 0.
- Result: **Ready for Lesson Production**.

## References

- [Research Collection](./research-collection.md)
- [Research Validation](./research-validation.md)
- [Research Normalization](./research-normalization.md)
- [Learning Outcome Map](../../academy/06-learning-outcomes.md)
