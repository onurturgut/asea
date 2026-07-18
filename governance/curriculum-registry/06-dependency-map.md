---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-DMAP-001"
supporting_document_type: "Dependency Map"
title: "ASEA Curriculum Dependency Map"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-DMAP-001"
derived_from:
  - "../../docs/01-programming/dependency-map.md"
---

# ASEA Curriculum Dependency Map

## Purpose

This document provides a repository-level view of the current curriculum
dependency chain and its scaling constraints.

## Scope

The map covers the Volume 00 entry gate, all seven Volume 01 Module gates, the
28-Chapter primary path, and the declared transition toward a future Volume 02.

## Ownership

- **Authority:** Derived.
- **Authoritative dependency source:** `V01-SD-DMAP-001`.
- **Edge semantics:** A target requires verified evidence from its source.
- **Change rule:** Dependencies cannot change under the active Freeze.

## Content

### Volume and Module dependency path

```text
V00
└── V01-M01 Computational Thinking
    └── V01-M02 Data and Expressions
        └── V01-M03 Control Flow
            └── V01-M04 Functions and Decomposition
                └── V01-M05 Structured Data and Recursion
                    └── V01-M06 Algorithms and Efficiency
                        └── V01-M07 Reliability and Program Design
```

### Chapter primary path

```text
V00
-> V01-C01 -> V01-C02 -> V01-C03 -> V01-C04
-> V01-C05 -> V01-C06 -> V01-C07 -> V01-C08
-> V01-C09 -> V01-C10 -> V01-C11 -> V01-C12
-> V01-C13 -> V01-C14 -> V01-C15 -> V01-C16
-> V01-C17 -> V01-C18 -> V01-C19 -> V01-C20
-> V01-C21 -> V01-C22 -> V01-C23
-> V01-C24 -> V01-C25 -> V01-C26 -> V01-C27 -> V01-C28
```

The primary path is a recommended sequence, not a claim that every Chapter
depends only on its immediate predecessor. The authoritative map records
multi-parent dependencies for data types, control flow, functions,
collections, algorithms, reliability, and Capstone readiness.

### Module gates

| Gate | Evidence required before progression |
| --- | --- |
| `V01-M01` | Valid pseudocode and execution trace |
| `V01-M02` | Explained type, state, and transformation pipeline |
| `V01-M03` | Correct terminating composite control flow |
| `V01-M04` | Behavior decomposed into function contracts |
| `V01-M05` | Structured-data and text-processing pipeline |
| `V01-M06` | Algorithm choice defended with correctness and cost |
| `V01-M07` | Program delivered with requirements, tests, and review evidence |

### Cross-Academy limitation

No canonical cross-Academy dependency graph exists because only Volume 01 has a
frozen technical Blueprint. The current map can serve as a prerequisite root,
but future Academies need explicit entry competencies and cannot rely only on
an implied "`V01` completed" relationship.

## Validation

- Primary path contains all 28 Chapter IDs exactly once.
- Module path contains all seven Module IDs exactly once.
- The canonical dependency graph reports no cycle.
- Entry dependency `V00` is explicit.
- Future Volume and Academy dependencies are not presented as canonical.

## References

- [Canonical Dependency Map](../../docs/01-programming/dependency-map.md)
- [Canonical Assessment Plan](../../docs/01-programming/assessment.md)
- [Module Registry](./03-module-registry.md)
- [Scalability Analysis](./08-scalability-analysis.md)
