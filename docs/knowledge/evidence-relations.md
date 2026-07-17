---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-015"
supporting_document_type: "Index"
title: "Volume 01 Evidence Relations"
version: "1.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-013"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-013"
  - "ASEA-SD-IDX-003"
  - "V01-SD-LO-001"
  - "V01-SD-CMAP-001"
  - "V01-SD-MMAP-001"
  - "V01-SD-ASMT-001"
---

# Volume 01 Evidence Relations

## Purpose

This document defines and enumerates the allowed Evidence joins used for Source
provenance and curriculum coverage analysis before Claim Registry production.

## Scope

It covers fourteen Evidence-to-Source relationships and their derived mappings to
Volume 01 Concepts, Learning Outcomes, Chapters, Assessments, and Modules.

## Ownership

- **Evidence-to-Source authority:** Atomic Evidence `source_id`.
- **Curriculum relationship owners:** Concept Registry, Learning Outcomes,
  Chapter Map, Module Map, and Assessment.
- **Claim authority:** Not created in this sprint.
- **Owner:** Knowledge Architect.

## Content

### Relationship Contract

| Relationship | Cardinality | Authority | Meaning |
| --- | --- | --- | --- |
| Evidence → Source | Exactly one | Atomic Evidence record | Publication containing the observed portion |
| Evidence → Concept | Zero or more | Derived candidate view | Concept for which a later Claim may use the Evidence |
| Evidence → Outcome | Zero or more | Derived from Concept and curriculum maps | Outcome whose instructional scope includes the Concept |
| Evidence → Chapter | Zero or more | Derived from Concept Registry | Chapter introducing or applying the Concept |
| Evidence → Assessment | Zero or more | Derived from Assessment registry | Assessment associated with the mapped Outcome |
| Evidence → Module | Zero or more | Derived from Module Map | Module containing the mapped Chapter |

### Atomic Evidence-to-Source Edges

| Evidence ID | Source ID |
| --- | --- |
| `ASEA-EV-000001` | `ASEA-SRC-000001` |
| `ASEA-EV-000002` | `ASEA-SRC-000002` |
| `ASEA-EV-000003` | `ASEA-SRC-000005` |
| `ASEA-EV-000004` | `ASEA-SRC-000006` |
| `ASEA-EV-000005` | `ASEA-SRC-000007` |
| `ASEA-EV-000006` | `ASEA-SRC-000008` |
| `ASEA-EV-000007` | `ASEA-SRC-000008` |
| `ASEA-EV-000008` | `ASEA-SRC-000008` |
| `ASEA-EV-000009` | `ASEA-SRC-000001` |
| `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `ASEA-EV-000011` | `ASEA-SRC-000001` |
| `ASEA-EV-000012` | `ASEA-SRC-000003` |
| `ASEA-EV-000013` | `ASEA-SRC-000003` |
| `ASEA-EV-000014` | `ASEA-SRC-000004` |

### Derived Curriculum Edges

| Evidence ID | Concept IDs | Outcome IDs | Chapter ID | Assessment ID | Module ID |
| --- | --- | --- | --- | --- | --- |
| `ASEA-EV-000001` | `ASEA-CON-000001`–`ASEA-CON-000006` | `V01-LO003`, `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000002` | `ASEA-CON-000001`, `ASEA-CON-000002` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000003` | `ASEA-CON-000001`, `ASEA-CON-000002`, `ASEA-CON-000006` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000004` | `ASEA-CON-000003`, `ASEA-CON-000005`, `ASEA-CON-000006` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000005` | `ASEA-CON-000002`, `ASEA-CON-000006` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000006` | `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005` | `V01-LO003`, `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000007` | `ASEA-CON-000004` | `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000008` | `ASEA-CON-000003`, `ASEA-CON-000005` | `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000009` | `ASEA-CON-000007`–`ASEA-CON-000011`, `ASEA-CON-000020`–`ASEA-CON-000070`, `ASEA-CON-000082`–`ASEA-CON-000092` | `V01-LO001`–`V01-LO002`, `V01-LO007`–`V01-LO031`, `V01-LO038`–`V01-LO043` | `V01-C01`, `V01-C05`–`V01-C20`, `V01-C24`–`V01-C26` | Matching Chapter assessment IDs | `V01-M01`–`V01-M05`, `V01-M07` |
| `ASEA-EV-000010` | `ASEA-CON-000012`–`ASEA-CON-000019`, `ASEA-CON-000071`–`ASEA-CON-000081` | `V01-LO005`–`V01-LO006`, `V01-LO032`–`V01-LO037` | `V01-C03`, `V01-C04`, `V01-C21`–`V01-C23` | Matching Chapter assessment IDs | `V01-M01`, `V01-M06` |
| `ASEA-EV-000011` | `ASEA-CON-000093`–`ASEA-CON-000101` | `V01-LO044`–`V01-LO046` | `V01-C27`, `V01-C28` | `V01-C27-AS01`, `V01-C28-AS01` | `V01-M07` |
| `ASEA-EV-000012` | `ASEA-CON-000020`–`ASEA-CON-000045` | `V01-LO007`–`V01-LO018` | `V01-C05`–`V01-C12` | `V01-C05-AS01`–`V01-C12-AS01` | `V01-M02`, `V01-M03` |
| `ASEA-EV-000013` | `ASEA-CON-000046`–`ASEA-CON-000070`, `ASEA-CON-000082`–`ASEA-CON-000084` | `V01-LO019`–`V01-LO031`, `V01-LO038`–`V01-LO039` | `V01-C13`–`V01-C20`, `V01-C24` | `V01-C13-AS01`–`V01-C20-AS01`, `V01-C24-AS01` | `V01-M04`, `V01-M05`, `V01-M07` |
| `ASEA-EV-000014` | `ASEA-CON-000007`–`ASEA-CON-000015`, `ASEA-CON-000093`–`ASEA-CON-000101` | `V01-LO001`, `V01-LO002`, `V01-LO005`, `V01-LO044`–`V01-LO046` | `V01-C01`, `V01-C03`, `V01-C27`, `V01-C28` | Matching Chapter assessment IDs | `V01-M01`, `V01-M07` |

### Coverage Summary

| Dimension | Covered | Canonical Total | Coverage |
| --- | ---: | ---: | ---: |
| Sources | 8 | 20 | 40.0% |
| Active Sources | 8 | 8 | 100.0% |
| Concepts | 101 | 101 | 100.0% |
| Learning Outcomes | 46 | 46 | 100.0% |
| Chapters | 28 | 28 | 100.0% |
| Assessments | 28 | 28 | 100.0% |
| Modules | 7 | 7 | 100.0% |

Coverage describes the currently admitted Evidence set, not Claim approval or
curriculum completion. Every canonical Concept has at least one Evidence
relationship; Sprint 06 must still evaluate atomic Claims.

## Validation

All fourteen atomic Source edges resolve. All 101 Concepts, 46 Outcomes,
28 Chapters, 28 Assessments, and 7 Modules have derived Evidence coverage.
No relationship is presented as a Claim.

## References

- [Canonical Evidence Registry](./evidence-registry.md)
- [Concept Registry](./concept-registry.md)
- [Learning Outcomes](../01-programming/learning-outcomes.md)
- [Assessment](../01-programming/assessment.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
