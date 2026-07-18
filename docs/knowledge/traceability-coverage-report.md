---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-028"
supporting_document_type: "Index"
title: "Volume 01 Traceability Coverage Report"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-023"
  - "ASEA-SD-IDX-024"
  - "ASEA-SD-IDX-025"
  - "ASEA-SD-IDX-026"
---

# Volume 01 Traceability Coverage Report

## Purpose

This report measures operational object coverage across the canonical Volume 01
traceability chain without creating or changing a knowledge or curriculum
relationship.

## Scope

Coverage includes Active Sources, admitted Evidence, admitted Claims, canonical
Concepts, frozen Learning Outcomes, Assessments, Chapters, and Modules. Proposed
Source candidates are inventory reservations and are excluded until admission
because they cannot participate in an operational chain without Evidence.

## Ownership

- **Curriculum relationship authority:** `docs/01-programming/assessment.md`.
- **Knowledge relationship authority:** atomic Source, Evidence, and Claim
  records and the Concept Registry.
- **Report authority:** Derived.
- **Owner:** Knowledge Architect.
- **Generated:** 2026-07-18.

## Content

### Coverage Summary

| Layer | Operational Objects | Forward Covered | Reverse Covered | Coverage |
| --- | ---: | ---: | ---: | ---: |
| Source | 8 | 8 | 8 | 100% |
| Evidence | 14 | 14 | 14 | 100% |
| Claim | 101 | 101 | 101 | 100% |
| Concept | 101 | 101 | 101 | 100% |
| Learning Outcome | 46 | 46 | 46 | 100% |
| Assessment | 28 | 28 | 28 | 100% |
| Chapter | 28 | 28 | 28 | 100% |
| Module | 7 | 7 | 7 | 100% |

All 333 operational objects belong to at least one complete forward and reverse
path. There are no disconnected operational components.

### Path and Density Measurements

| Measurement | Result |
| --- | ---: |
| Operational nodes | 333 |
| Typed direct edges | 551 |
| Complete Source-to-Module paths | 272 |
| Minimum complete path length | 7 edges |
| Average complete path length | 7 edges |
| Maximum complete path length | 7 edges |
| Direct edges per operational node | 1.655 |
| Directed graph density | 0.50% |
| Complete paths per Claim | 2.693 |

The directed graph density is `551 / (333 × 332)`. It is reported for
structural comparison only; the graph is intentionally sparse because only
schema-authorized adjacent-layer relationships are valid.

### Module Distribution

| Module | Chapters | Assessments | Outcomes | Concepts | Claims |
| --- | ---: | ---: | ---: | ---: | ---: |
| `V01-M01` | 4 | 4 | 6 | 19 | 19 |
| `V01-M02` | 4 | 4 | 6 | 12 | 12 |
| `V01-M03` | 4 | 4 | 6 | 14 | 14 |
| `V01-M04` | 4 | 4 | 6 | 12 | 12 |
| `V01-M05` | 4 | 4 | 7 | 13 | 13 |
| `V01-M06` | 3 | 3 | 6 | 11 | 11 |
| `V01-M07` | 5 | 5 | 9 | 20 | 20 |
| **Total** | **28** | **28** | **46** | **101** | **101** |

### Operational Source Contribution

| Source ID | Claims | Concepts | Complete Paths | Share of Paths |
| --- | ---: | ---: | ---: | ---: |
| `ASEA-SRC-000001` | 97 | 97 | 159 | 58.46% |
| `ASEA-SRC-000002` | 1 | 1 | 2 | 0.74% |
| `ASEA-SRC-000003` | 54 | 54 | 86 | 31.62% |
| `ASEA-SRC-000004` | 9 | 9 | 13 | 4.78% |
| `ASEA-SRC-000005` | 1 | 1 | 2 | 0.74% |
| `ASEA-SRC-000006` | 1 | 1 | 2 | 0.74% |
| `ASEA-SRC-000007` | 1 | 1 | 2 | 0.74% |
| `ASEA-SRC-000008` | 3 | 3 | 6 | 2.21% |

Claim and Concept counts overlap across Sources when a Claim is supported by
Evidence from more than one Source. The path count is therefore the canonical
aggregation measure for the table.

### Lifecycle Boundary

The Source Registry also contains 12 Proposed candidates. They are not unused
operational Sources and are not classified as orphans. Admission requires an
allowed lifecycle transition and at least one valid Evidence record before the
engine can include them.

## Validation

- Forward layer coverage: 100%.
- Reverse layer coverage: 100%.
- End-to-end operational coverage: 100%.
- Disconnected operational nodes: 0.
- Broken complete paths: 0.
- Inventory totals reconcile with the canonical registries and frozen Volume 01
  curriculum artefacts.

## References

- [Traceability Engine](./traceability-engine.md)
- [Traceability Matrix](./traceability-matrix.md)
- [Forward Traceability](./forward-traceability.md)
- [Reverse Traceability](./reverse-traceability.md)
- [Volume 01 Assessment Registry](../01-programming/assessment.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
