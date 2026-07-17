---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-020"
supporting_document_type: "Index"
title: "Volume 01 Claim Relations"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-SD-IDX-018"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-018"
  - "ASEA-SD-IDX-013"
  - "ASEA-SD-IDX-003"
  - "V01-SD-ASMT-001"
---

# Volume 01 Claim Relations

## Purpose

This document defines the allowed Claim relationships and summarizes the
complete Claim-to-Evidence-to-Source and Claim-to-curriculum joins.

## Scope

It covers 101 Claims, 14 Evidence records, 8 Active Sources, 101 Concepts,
46 Outcomes, 28 Chapters, 28 Assessments, and 7 Modules.

## Ownership

- **Claim-to-Evidence authority:** Atomic Claim `evidence_ids`.
- **Evidence-to-Source authority:** Atomic Evidence `source_id`.
- **Curriculum joins:** Derived from Concept Registry and frozen Volume maps.
- **Owner:** Knowledge Architect.

## Content

### Relationship Contract

| Relationship | Cardinality | Authority | Rule |
| --- | --- | --- | --- |
| Claim → Evidence | One or more | Atomic Claim | Every Claim requires resolvable Evidence |
| Claim → Source | One or more | Derived through Evidence | Direct Claim-to-Source fields are not schema-valid |
| Claim → Concept | One or more | Derived registry view | This sprint assigns exactly one primary Concept |
| Claim → Outcome | One or more | Derived from Concept Registry | Outcomes remain owned by Volume 01 |
| Claim → Assessment | One or more | Derived from Assessment registry | Assessment meaning is not changed |
| Claim → Chapter | Exactly one primary Chapter | Derived from Concept Registry | Frozen Chapter ownership is preserved |
| Claim → Module | Exactly one | Derived from Module Map | Frozen Module ownership is preserved |
| Claim → Claim | Zero | Not used | No Claim dependency or circularity is introduced |

### Claim Group Mappings

| Claim Group | Primary Concepts | Evidence | Source |
| --- | --- | --- | --- |
| `ASEA-CLM-000001`–`ASEA-CLM-000006` | `ASEA-CON-000001`–`ASEA-CON-000006` | `ASEA-EV-000001`–`ASEA-EV-000008` | Active Sources `000001`, `000002`, `000005`–`000008` |
| `ASEA-CLM-000007`–`ASEA-CLM-000011` | `ASEA-CON-000007`–`ASEA-CON-000011` | `ASEA-EV-000009` | `ASEA-SRC-000001` |
| `ASEA-CLM-000012`–`ASEA-CLM-000019` | `ASEA-CON-000012`–`ASEA-CON-000019` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `ASEA-CLM-000020`–`ASEA-CLM-000045` | `ASEA-CON-000020`–`ASEA-CON-000045` | `ASEA-EV-000009`, `ASEA-EV-000012` | `ASEA-SRC-000001`, `ASEA-SRC-000003` |
| `ASEA-CLM-000046`–`ASEA-CLM-000070` | `ASEA-CON-000046`–`ASEA-CON-000070` | `ASEA-EV-000009`, `ASEA-EV-000013` | `ASEA-SRC-000001`, `ASEA-SRC-000003` |
| `ASEA-CLM-000071`–`ASEA-CLM-000081` | `ASEA-CON-000071`–`ASEA-CON-000081` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `ASEA-CLM-000082`–`ASEA-CLM-000084` | `ASEA-CON-000082`–`ASEA-CON-000084` | `ASEA-EV-000009`, `ASEA-EV-000013` | `ASEA-SRC-000001`, `ASEA-SRC-000003` |
| `ASEA-CLM-000085`–`ASEA-CLM-000092` | `ASEA-CON-000085`–`ASEA-CON-000092` | `ASEA-EV-000009` | `ASEA-SRC-000001` |
| `ASEA-CLM-000093`–`ASEA-CLM-000101` | `ASEA-CON-000093`–`ASEA-CON-000101` | `ASEA-EV-000011`, `ASEA-EV-000014` | `ASEA-SRC-000001`, `ASEA-SRC-000004` |

The first group is mapped one-to-one in non-numeric order:
`CLM-000001 → CON-000006`, `CLM-000002 → CON-000001`,
`CLM-000003 → CON-000002`, `CLM-000004 → CON-000003`,
`CLM-000005 → CON-000004`, and `CLM-000006 → CON-000005`.

## Validation

- Claim-to-Evidence edges: 167.
- Claims without Evidence or Source: 0.
- Concept, Outcome, Chapter, Assessment, or Module gaps: 0.
- Claim-to-Claim edges and circular references: 0.

## References

- [Canonical Claim Registry](./claim-registry.md)
- [Claim Coverage Report](./claim-coverage-report.md)
- [Evidence Relations](./evidence-relations.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
