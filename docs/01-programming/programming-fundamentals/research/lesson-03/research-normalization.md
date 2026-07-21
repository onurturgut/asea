---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-004"
supporting_document_type: "Compatibility Report"
title: "Research Normalization: Problem Çözme Yaklaşımı"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids:
  - "V01-C03"
  - "V01-LO005"
derived_from:
  - "./research-collection.md"
  - "./research-validation.md"
x-production-unit: "lesson-03"
x-canonical-lesson-id: "V01-C03"
x-research-stage: "Normalization"
x-verified-on: "2026-07-21"
---

# Research Normalization: Problem Çözme Yaklaşımı

## Purpose

Problem-solving research’ünü ölçülebilir problem contract ve iterative
engineering cycle etrafında normalize etmek.

## Scope

Terminology, concept hierarchy, knowledge order, difficulty, teaching order ve
dependencies düzenlenir.

## Ownership

Normalized model bir teaching organization’dır; canonical workflow veya yeni
governance process değildir.

## Content

### Normalized Definitions

- **Problem statement:** Bağlam, mevcut durum ve istenen observable outcome.
- **Constraint:** Çözümün uyması zorunlu sınır.
- **Assumption:** Doğru kabul edilen ve doğrulanması gereken önerme.
- **Edge case:** Valid domain’in sınır veya nadir kombinasyon durumu.
- **Decomposition:** İlişkileri koruyarak yönetilebilir alt problemlere ayırma.
- **Abstraction:** Amaç için gerekli bilgiyi koruyan model oluşturma.

### Concept Hierarchy

```text
Context/stakeholder
-> problem statement
-> input/output/acceptance
-> constraints + assumptions + edge cases
-> decomposition
-> abstraction/model
-> candidate approach
-> evidence and revision
```

### Teaching Order

1. Symptom, problem ve solution idea’yı ayır.
2. Stakeholder ve success’i belirle.
3. Input/output yaz.
4. Constraint ve assumption’ı ayrı kaydet.
5. Normal, boundary ve invalid cases oluştur.
6. Decompose; dependencies’i kaybetme.
7. Abstraction/model seç.
8. Candidate approach’ı evidence ile test et.
9. Yeni bilgiyle problem contract’ı revise et.

### Difficulty Progression

- Identify: contract elements.
- Apply: five-field decomposition.
- Analyze: hidden assumptions and edge cases.
- Evaluate: model against examples.

### Dependencies

- Incoming: `V01-C01`, `V01-C02`.
- Outgoing: `V01-C04`.
- Algorithm design problem contract tamamlandıktan sonra başlar.

## Validation

- Required outcome fields: 5/5.
- Linear-only process claim: absent.
- Abstraction/decomposition conflict: 0.
- Dependency order: Pass.

## References

- [Research Collection](./research-collection.md)
- [Research Validation](./research-validation.md)
- [Dependency Map](../../academy/07-dependency-map.md)
