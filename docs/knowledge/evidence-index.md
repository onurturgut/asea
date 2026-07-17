---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-014"
supporting_document_type: "Index"
title: "Volume 01 Evidence Index"
version: "1.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-013"
derived_from:
  - "ASEA-SD-IDX-013"
---

# Volume 01 Evidence Index

## Purpose

This index provides deterministic navigation across the operational Evidence
inventory, Source relationships, verification state, and curriculum coverage.

## Scope

It indexes all fourteen Evidence records admitted to the KOS operational store as
of 2026-07-18.

## Ownership

- **Atomic Evidence authority:** [`knowledge/registry/evidence/`](../../knowledge/registry/evidence/).
- **Derived registry:** [Canonical Evidence Registry](./evidence-registry.md).
- **Owner:** Knowledge Architect.

## Content

### Evidence Records

| Evidence ID | Short Name | Source ID | Status | Primary Coverage |
| --- | --- | --- | --- | --- |
| `ASEA-EV-000001` | CS2023 system foundations | `ASEA-SRC-000001` | Validated | `V01-C02`; execution model |
| `ASEA-EV-000002` | Engine and host | `ASEA-SRC-000002` | Validated | `V01-C02`; source and translation |
| `ASEA-EV-000003` | Computer and software hierarchy | `ASEA-SRC-000005` | Validated | `V01-C02`; layered execution |
| `ASEA-EV-000004` | Architecture and programming environment | `ASEA-SRC-000006` | Validated | `V01-C02`; CPU and state |
| `ASEA-EV-000005` | Target machine representation | `ASEA-SRC-000007` | Validated | `V01-C02`; translation |
| `ASEA-EV-000006` | Abstract-machine state | `ASEA-SRC-000008` | Validated | `V01-C02`; state and memory |
| `ASEA-EV-000007` | Ordered instruction execution | `ASEA-SRC-000008` | Validated | `V01-C02`; control flow |
| `ASEA-EV-000008` | Abstract-machine memory | `ASEA-SRC-000008` | Validated | `V01-C02`; state and memory |
| `ASEA-EV-000009` | Software-development fundamentals | `ASEA-SRC-000001` | Validated | 20 Chapters; programming practice |
| `ASEA-EV-000010` | Algorithmic foundations | `ASEA-SRC-000001` | Validated | 5 Chapters; problem solving and algorithms |
| `ASEA-EV-000011` | Software-engineering competencies | `ASEA-SRC-000001` | Validated | 2 Chapters; quality and delivery |
| `ASEA-EV-000012` | ECMAScript values and control | `ASEA-SRC-000003` | Validated | 8 Chapters; language semantics |
| `ASEA-EV-000013` | ECMAScript functions and abstractions | `ASEA-SRC-000003` | Validated | 9 Chapters; execution and data models |
| `ASEA-EV-000014` | Technical communication | `ASEA-SRC-000004` | Validated | 4 Chapters; reviewable instructions |

### Navigation

| View | Purpose |
| --- | --- |
| [Evidence Registry](./evidence-registry.md) | Full identity, Source, citation, lifecycle, and curriculum mapping |
| [Evidence Types](./evidence-types.md) | Canonical type boundary and descriptive profiles |
| [Evidence Relations](./evidence-relations.md) | Evidence-to-Source and derived curriculum joins |
| [Evidence Authority Matrix](./evidence-authority-matrix.md) | Authority, verification, and freshness distributions |
| [Evidence Validation Report](./evidence-validation-report.md) | Reproducible integrity and coverage results |
| [Evidence Governance](./evidence-governance.md) | Ownership, admission, review, and change control |
| [Evidence Coverage Report](./evidence-coverage-report.md) | Chapter, Module, Source, reuse, and density analysis |
| [Evidence Gap Analysis](./evidence-gap-analysis.md) | Closed gaps and non-blocking governance queue |

## Validation

The index contains one row for every operational Evidence ID and resolves every
linked document. The six Sprint 05 IDs are admitted through schema-valid atomic
records and preserve the immutable ID sequence.

## References

- [KOS Registry Manifest](../../knowledge/registry-manifest.json)
- [Evidence Schema](../../knowledge/schemas/evidence.schema.json)
- [Source Index](./source-index.md)
