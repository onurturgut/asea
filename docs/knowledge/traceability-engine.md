---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-023"
supporting_document_type: "Index"
title: "Volume 01 Canonical Traceability Engine"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "ASEA-STD-KOS-002"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-010"
  - "ASEA-SD-IDX-013"
  - "ASEA-SD-IDX-018"
  - "ASEA-SD-IDX-003"
  - "V01-SD-LO-001"
  - "V01-SD-ASMT-001"
  - "V01-SD-CMAP-001"
  - "V01-SD-MMAP-001"
---

# Volume 01 Canonical Traceability Engine

## Purpose

This document defines the derived navigation engine that connects every
operational Volume 01 knowledge and curriculum object through a verifiable,
bidirectional chain.

## Scope

The engine covers 8 Active Sources, 14 Evidence records, 101 Claims,
101 Concepts, 46 Learning Outcomes, 28 Assessments, 28 Chapters, and 7 Modules.
It introduces no new knowledge or curriculum objects.

## Ownership

- **Curriculum traceability authority:** `docs/01-programming/assessment.md`.
- **Atomic KOS authority:** Source, Evidence, and Claim JSON registries.
- **Concept identity:** Concept Registry.
- **Chapter and Module ownership:** Frozen Volume 01 maps.
- **Engine authority:** Derived; it cannot define new relationships.
- **Owner:** Knowledge Architect.
- **Generated:** 2026-07-18.

## Content

### Canonical Chain

```text
Source
  -> Evidence
  -> Claim
  -> Concept
  -> Learning Outcome
  -> Assessment
  -> Chapter
  -> Module
```

Every complete path contains eight nodes and seven directed edges. Reverse
traversal uses the same relationships in the opposite direction; it does not
create separate semantic edges.

### Relationship Ownership

| Layer transition | Canonical owner | Join key |
| --- | --- | --- |
| Source → Evidence | Evidence Registry | Evidence `source_id` |
| Evidence → Claim | Claim Registry | Claim `evidence_ids` |
| Claim → Concept | Canonical Claim Registry derived mapping | Claim ID to primary Concept ID |
| Concept → Outcome | Concept Registry | Concept curriculum mapping |
| Outcome → Assessment | Volume 01 Assessment registry | Outcome row `Assessment ID` |
| Assessment → Chapter | Volume 01 Assessment registry | Outcome row Chapter and Assessment IDs |
| Chapter → Module | Module Map and Assessment registry | Chapter and Module IDs |

### Operational Node Policy

Only Sources with canonical `workflow_state: Active` participate in educational
traceability. The 12 Proposed Source reservations are not operational nodes,
cannot support Evidence, and are excluded from orphan calculations until Source
admission. All 8 Active Sources participate in complete chains.

### Traversal Contract

- Forward traversal starts at any layer and follows arrows toward Module.
- Reverse traversal starts at any layer and follows arrows toward Source.
- Results preserve canonical IDs, record versions, lifecycle state, and source
  document versions.
- Duplicate paths are removed by the ordered tuple of all eight node IDs.
- Default results include only operational Sources and non-deprecated records.
- Claims remain subject to their review decisions; traceability does not imply
  production approval.

### Engine Inventory

| Node type | Operational nodes | Forward participation | Reverse participation |
| --- | ---: | ---: | ---: |
| Active Source | 8 | 8 | 8 |
| Evidence | 14 | 14 | 14 |
| Claim | 101 | 101 | 101 |
| Concept | 101 | 101 | 101 |
| Learning Outcome | 46 | 46 | 46 |
| Assessment | 28 | 28 | 28 |
| Chapter | 28 | 28 | 28 |
| Module | 7 | 7 | 7 |

## Validation

- Forward coverage: 100%.
- Reverse coverage: 100%.
- End-to-end paths: 272.
- Missing, broken, duplicate, circular, or unknown relationships: 0.
- Operational orphan nodes: 0.

## References

- [Traceability Matrix](./traceability-matrix.md)
- [Forward Traceability](./forward-traceability.md)
- [Reverse Traceability](./reverse-traceability.md)
- [Traceability Query Patterns](./traceability-query-patterns.md)
- [Traceability Validation Report](./traceability-validation-report.md)
- [Canonical Assessment Registry](../01-programming/assessment.md)
