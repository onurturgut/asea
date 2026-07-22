---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "Assessment Readiness: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Assessment Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./knowledge-units.md", "./learning-outcome-synthesis.md", "./misconception-map.md"]
x-production-unit: "v01-c02"
x-research-stage: "Assessment Synthesis"
---

# Assessment Readiness: How Computers Execute Programs

## Purpose

Bu belge soru üretmeden, hangi knowledge unit'in hangi assessment türüyle ölçülebileceğini tanımlar.

## Scope

Quiz, exercise, lab, scoring item veya answer key içermez.

## Ownership

Assessment Designer sonraki production sprintindeki item tasarımından; reviewer LO alignment'dan sorumludur.

## Content

### Strategy

| Assessment Type | Suitable Knowledge Units | Observable Capability | LO | Evidence Basis |
| --- | --- | --- | --- | --- |
| Definition | `KU-001`, `KU-005`, `KU-006`, `KU-011`, `KU-013` | Terimi sınırlarıyla tanımlar. | `LO003` | `EV-001`–`EV-008`, `EV-025`–`EV-036`, `EV-065`–`EV-080` |
| Classification | `KU-001`–`KU-006`, `KU-013`, `KU-014` | Artifact veya execution path'i doğru katmana yerleştirir. | `LO003` | `EV-009`–`EV-036`, `EV-073`–`EV-080` |
| Comparison | `KU-005`, `KU-009`–`KU-014` | Assembly/machine code, program/process, process/thread, native/VM farklarını açıklar. | `LO003` | `EV-023`–`EV-029`, `EV-053`–`EV-080` |
| Ordering | `KU-002`–`KU-004` | Compilation, linking, loading ve execution sırasını gerekçelendirir. | `LO003` | `EV-009`–`EV-022` |
| Scenario | `KU-004`, `KU-008`–`KU-012`, `KU-017` | Runtime/memory/I/O durumunu verilen senaryoya uygular. | `LO003` | `EV-019`–`EV-022`, `EV-049`–`EV-072`, `EV-088` |
| Tracing | `KU-007`, `KU-015`, `KU-016` | Her instruction sonrası state'i hatasız kaydeder. | `LO004` | `EV-081`–`EV-092` |
| Misconception diagnosis | Tüm KU'lar | Yanlış modeli bulur ve evidence-bound düzeltir. | `LO003`, `LO004` | `MC-001`–`MC-014` |

### Scoring Boundary

- LO003 değerlendirmesi correct model, relationship ve scope boundary gözlemlemelidir.
- LO004 değerlendirmesi her step için PC/state doğruluğunu ayrı kontrol etmelidir.
- Bu sprint puan, eşik veya soru üretmez.

### Traceability Ownership

Her gelecekteki assessment item en az bir LO, KU ve evidence range'e bağlanmalıdır.

### Reassessment

Hata türü misconception ID ile sınıflandırılmalı; yeniden değerlendirme aynı LO'yu farklı scenario veya trace ile ölçmelidir.

## Validation

- Assessment types: 7.
- LO003 ve LO004 için ölçülebilir observable capability vardır.
- Üretilen assessment item: 0.

## References

- [Knowledge Units](./knowledge-units.md)
- [Learning Outcome Synthesis](./learning-outcome-synthesis.md)
- [Misconception Map](./misconception-map.md)
