---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-MMAP-001"
supporting_document_type: "Module Map"
title: "ASEA Module Registry"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-MMAP-001"
derived_from:
  - "../../docs/01-programming/module-map.md"
---

# ASEA Module Registry

## Purpose

This registry provides a complete discovery view of current canonical Modules
without redefining their names, purposes, order, or identifiers.

## Scope

The registry includes all Modules declared by the active Volume 01 Blueprint.
No future or proposed Module is listed as canonical.

## Ownership

- **Authority:** Derived.
- **Authoritative Module source:** `V01-SD-MMAP-001`.
- **Owner Role:** Curriculum Architect.
- **Change rule:** Module semantics change only through approved curriculum
  migration and a new Blueprint version.

## Content

| Order | Module ID | Canonical name | Chapters | Outcomes | Produced competency gate |
| ---: | --- | --- | --- | --- | --- |
| 1 | `V01-M01` | Computational Thinking | `V01-C01`-`V01-C04` | `V01-LO001`-`V01-LO006` | Executable problem model |
| 2 | `V01-M02` | Data and Expressions | `V01-C05`-`V01-C08` | `V01-LO007`-`V01-LO012` | Data and state model |
| 3 | `V01-M03` | Control Flow | `V01-C09`-`V01-C12` | `V01-LO013`-`V01-LO018` | Controlled program behavior |
| 4 | `V01-M04` | Functions and Decomposition | `V01-C13`-`V01-C16` | `V01-LO019`-`V01-LO024` | Function contracts and decomposition |
| 5 | `V01-M05` | Structured Data and Recursion | `V01-C17`-`V01-C20` | `V01-LO025`-`V01-LO031` | Structured-data processing |
| 6 | `V01-M06` | Algorithms and Efficiency | `V01-C21`-`V01-C23` | `V01-LO032`-`V01-LO037` | Algorithm selection rationale |
| 7 | `V01-M07` | Reliability and Program Design | `V01-C24`-`V01-C28` | `V01-LO038`-`V01-LO046` | Reliable reviewed program |

### Registry totals

| Measure | Count |
| --- | ---: |
| Modules | 7 |
| Chapters mapped | 28 |
| Learning Outcomes mapped | 46 |
| Orphan Modules | 0 |
| Duplicate Module IDs | 0 |

## Validation

- Registry count matches the frozen Blueprint.
- Every Module ID resolves in the canonical Module Map.
- Chapter ranges are complete and non-overlapping.
- Outcome ranges are complete and non-overlapping.
- No proposed migration Module is presented as canonical.

## References

- [Canonical Module Map](../../docs/01-programming/module-map.md)
- [Volume 01 Blueprint](../../docs/01-programming/volume-blueprint.md)
- [Chapter Registry](./04-chapter-registry.md)
- [Learning Outcome Registry](./05-learning-outcome-registry.md)
