---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-LO-002"
supporting_document_type: "Learning Outcomes Registry"
title: "Learning Outcome Synthesis: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./learning-outcome-evidence-map.md", "./knowledge-units.md", "./mental-model.md"]
x-production-unit: "v01-c02"
x-research-stage: "Learning Outcome Synthesis"
---

# Learning Outcome Synthesis: How Computers Execute Programs

## Purpose

Bu belge kanonik learning outcome'ları kavram, knowledge unit, evidence ve mental model bileşenleriyle eşler.

## Scope

Yeni outcome üretmez ve mevcut ifadeleri değiştirmez.

## Ownership

Knowledge Engineer traceability'den, Curriculum Reviewer coverage kararından sorumludur.

## Content

### Outcome Records

| LO | Canonical Statement | Concepts | Knowledge Units | Evidence | Mental Model | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `V01-LO003` | Source code, runtime, memory, input ve output ilişkisini doğru execution model ile açıklayabilmek | `KC-001`–`KC-032` | `KU-001`–`KU-015`, `KU-017` | `EV-001`–`EV-080`, `EV-089`–`EV-092` | Two valid entry paths + running-state loop | PASS |
| `V01-LO004` | Küçük bir talimat dizisinde her adımdan sonra oluşan state'i hatasız trace edebilmek | `KC-014`–`KC-018`, `KC-028`–`KC-032` | `KU-007`, `KU-015`–`KU-017` | `EV-081`–`EV-088` | Trace contract: before → operation → after → next | PASS |

### Distribution

- `LO003`: representation, translation, loading, runtime, memory ve execution model sentezi.
- `LO004`: current instruction, PC, register/work state, memory/store, I/O, control flow ve next-state sentezi.

### Traceability Rules

- LO açıklaması yalnız kayıtlı concepts ve KU'lar üzerinden kurulmalıdır.
- LO004 uygulaması `PC before` ve `PC after` değerlerini ayırmalıdır.
- Native ve VM yolları LO003 altında alternatif, geçerli execution models olarak tutulmalıdır.

## Validation

- Learning outcome coverage: 2/2 PASS.
- LO004 minimum 8 evidence: PASS.
- Kanonik LO metinlerinde değişiklik: 0.

## References

- [Learning Outcome Evidence Map](./learning-outcome-evidence-map.md)
- [Knowledge Units](./knowledge-units.md)
- [Mental Model](./mental-model.md)
