---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-008"
supporting_document_type: "Index"
title: "Volume 01 Knowledge Relations"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-007"
  - "ASEA-SD-IDX-006"
derived_from:
  - "ASEA-STD-KOS-007"
  - "ASEA-SD-IDX-006"
---

# Volume 01 Knowledge Relations

## Purpose

This document applies the existing KOS relationship contract to the Sprint 02
graph without inventing a parallel relation vocabulary.

## Scope

It defines how Concept topology, practice, assessment, and curriculum mappings
are represented in the Graph Registry.

## Ownership

- **Normative relation authority:** `ASEA-STD-KOS-007`.
- **Candidate edge source:** [Knowledge Graph Candidate Registry](./knowledge-graph-registry.md).
- **Owner:** Knowledge Architect.
- **Generated:** 2026-07-18.

## Content

### Canonical Relation Contract

| Relation | Direction | Sprint 02 use | Edge Count |
| --- | --- | --- | ---: |
| `prerequisite-of` | Concept → Concept | Required prior capability | 133 |
| `depends-on` | Concept → target | Explicit technical reliance | 0 |
| `related-to` | Symmetric, stored once | Reviewed non-prerequisite association | 204 |
| `enables` | Concept → Concept | Capability enabled by another Concept | 0 |
| `next-concept` | Concept → Concept | Frozen learning-path succession | 100 |
| `practiced-by` | Concept → Lab or Project | Practice and mastery integration | 202 |
| `assessed-by` | Concept → Assessment | Chapter assessment mapping | 101 |
| `evidenced-by` | Concept → evidence | Evidence provenance | 0 |
| `supersedes` | Record → record | Lifecycle replacement | 0 |

Zero-count canonical relations remain valid but are not fabricated when the
current sources do not assert them.

### Sprint Vocabulary Reconciliation

| Requested term | Canonical representation |
| --- | --- |
| `prerequisite_of` | `prerequisite-of` |
| `depends_on` | `depends-on` |
| `related_to` | `related-to` |
| `assessed_by` | `assessed-by` |
| `practiced_in`, `demonstrated_in`, `mastered_in` | `practiced-by` plus Lab/Project mapping |
| `introduces` | Concept node `Introduced In` mapping |
| `extends` | `prerequisite-of`, `enables`, or `related-to` only when the source semantics justify it |
| `belongs_to_category` | Concept Category mapping, not an edge |
| `belongs_to_module` | Concept Module mapping, not an edge |
| `belongs_to_chapter` | Concept Chapter mapping, not an edge |
| `supports_outcome` | Concept Learning Outcome mapping, not an edge |

### Integrity Rules

- A stored relation uses exactly one canonical KOS relation type.
- A symmetric `related-to` pair is stored once using deterministic endpoint order.
- Relation direction is encoded only by source and target.
- Prerequisite and progression relations must remain acyclic.
- Every edge carries a non-empty rationale and evidence or decision list.
- Mapping fields preserve curriculum ownership and do not create new edge types.

## Validation

All 740 edges use the KOS relation enum. No underscore relation name
or new relation type is active.

## References

- [Knowledge Graph Standard](../knowledge-operating-system/07-knowledge-graph.md)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [Knowledge Graph Candidate Registry](./knowledge-graph-registry.md)
