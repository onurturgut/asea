---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-022"
supporting_document_type: "Index"
title: "Volume 01 Claim Coverage Report"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-SD-IDX-018"
  - "ASEA-SD-IDX-003"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-018"
  - "ASEA-SD-IDX-003"
  - "V01-SD-LO-001"
  - "V01-SD-CMAP-001"
  - "V01-SD-MMAP-001"
  - "V01-SD-ASMT-001"
---

# Volume 01 Claim Coverage Report

## Purpose

This report demonstrates complete Claim coverage for every Volume 01 Concept,
Chapter, Module, Learning Outcome, Assessment, Evidence record, and Active
Source.

## Scope

The analysis joins 101 operational Claims to frozen Volume 01 curriculum
artefacts as of 2026-07-18. Coverage does not convert Validated Claims into
Approved production knowledge.

## Ownership

- **Atomic Claim authority:** `knowledge/registry/claims/`.
- **Concept identity authority:** Concept Registry.
- **Curriculum traceability authority:** Volume 01 Assessment registry.
- **Report authority:** Derived.
- **Owner:** Knowledge Architect.

## Content

### Coverage by Chapter

| Chapter | Concepts | Claims | Outcomes | Assessments | Coverage |
| --- | ---: | ---: | ---: | ---: | ---: |
| `V01-C01` | 5 | 5 | 2 | 1 | 100% |
| `V01-C02` | 6 | 6 | 2 | 1 | 100% |
| `V01-C03` | 4 | 4 | 1 | 1 | 100% |
| `V01-C04` | 4 | 4 | 1 | 1 | 100% |
| `V01-C05` | 4 | 4 | 2 | 1 | 100% |
| `V01-C06` | 2 | 2 | 2 | 1 | 100% |
| `V01-C07` | 3 | 3 | 1 | 1 | 100% |
| `V01-C08` | 3 | 3 | 1 | 1 | 100% |
| `V01-C09` | 4 | 4 | 2 | 1 | 100% |
| `V01-C10` | 3 | 3 | 2 | 1 | 100% |
| `V01-C11` | 4 | 4 | 1 | 1 | 100% |
| `V01-C12` | 3 | 3 | 1 | 1 | 100% |
| `V01-C13` | 3 | 3 | 2 | 1 | 100% |
| `V01-C14` | 3 | 3 | 1 | 1 | 100% |
| `V01-C15` | 3 | 3 | 2 | 1 | 100% |
| `V01-C16` | 3 | 3 | 1 | 1 | 100% |
| `V01-C17` | 3 | 3 | 2 | 1 | 100% |
| `V01-C18` | 3 | 3 | 2 | 1 | 100% |
| `V01-C19` | 4 | 4 | 2 | 1 | 100% |
| `V01-C20` | 3 | 3 | 1 | 1 | 100% |
| `V01-C21` | 3 | 3 | 2 | 1 | 100% |
| `V01-C22` | 4 | 4 | 2 | 1 | 100% |
| `V01-C23` | 4 | 4 | 2 | 1 | 100% |
| `V01-C24` | 3 | 3 | 2 | 1 | 100% |
| `V01-C25` | 4 | 4 | 2 | 1 | 100% |
| `V01-C26` | 4 | 4 | 2 | 1 | 100% |
| `V01-C27` | 4 | 4 | 2 | 1 | 100% |
| `V01-C28` | 5 | 5 | 1 | 1 | 100% |
| **Total** | **101** | **101** | **46** | **28** | **100%** |

### Coverage by Module

| Module | Chapters | Concepts | Claims | Outcomes | Assessments |
| --- | ---: | ---: | ---: | ---: | ---: |
| `V01-M01` | 4 | 19 | 19 | 6 | 4 |
| `V01-M02` | 4 | 12 | 12 | 6 | 4 |
| `V01-M03` | 4 | 14 | 14 | 6 | 4 |
| `V01-M04` | 4 | 12 | 12 | 6 | 4 |
| `V01-M05` | 4 | 13 | 13 | 7 | 4 |
| `V01-M06` | 3 | 11 | 11 | 6 | 3 |
| `V01-M07` | 5 | 20 | 20 | 9 | 5 |

### Evidence Coverage

| Evidence ID | Supporting Claim Count |
| --- | ---: |
| `ASEA-EV-000001` | 2 |
| `ASEA-EV-000002` | 1 |
| `ASEA-EV-000003` | 1 |
| `ASEA-EV-000004` | 1 |
| `ASEA-EV-000005` | 1 |
| `ASEA-EV-000006` | 1 |
| `ASEA-EV-000007` | 1 |
| `ASEA-EV-000008` | 1 |
| `ASEA-EV-000009` | 67 |
| `ASEA-EV-000010` | 19 |
| `ASEA-EV-000011` | 9 |
| `ASEA-EV-000012` | 26 |
| `ASEA-EV-000013` | 28 |
| `ASEA-EV-000014` | 9 |

Evidence coverage is 14/14. All eight Active Sources are reachable through the
Claim → Evidence → Source chain.

### Claim Density

| Metric | Result |
| --- | ---: |
| Claims per Concept | 1.00 |
| Mean Claims per Chapter | 3.61 |
| Mean Claims per Module | 14.43 |
| Mean Evidence records per Claim | 1.65 |
| Claim-to-Evidence edges | 167 |
| Claims with one Evidence record | 35 |
| Claims with two Evidence records | 66 |

## Validation

- Concept coverage: 101/101.
- Outcome coverage: 46/46.
- Chapter coverage: 28/28.
- Assessment coverage: 28/28.
- Module coverage: 7/7.
- Evidence coverage: 14/14.
- Active Source coverage: 8/8.

## References

- [Canonical Claim Registry](./claim-registry.md)
- [Claim Relations](./claim-relations.md)
- [Claim Authority Matrix](./claim-authority-matrix.md)
- [Concept Registry](./concept-registry.md)
- [Volume 01 Assessment](../01-programming/assessment.md)
