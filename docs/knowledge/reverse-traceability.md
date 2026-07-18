---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-026"
supporting_document_type: "Index"
title: "Volume 01 Reverse Traceability"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-SD-IDX-023"
  - "ASEA-SD-IDX-024"
derived_from:
  - "ASEA-SD-IDX-023"
  - "ASEA-SD-IDX-024"
---

# Volume 01 Reverse Traceability

## Purpose

This document defines deterministic traversal from Module toward Source and
reports reverse participation at every layer.

## Scope

It reverses the same 272 complete paths used by forward traceability and creates
no new relationship semantics.

## Ownership

- **Reverse edges:** Derived inversion of canonical forward relationships.
- **Canonical relationship meaning:** Remains with the forward edge owner.
- **Owner:** Knowledge Architect.

## Content

### Reverse Traversal

| Start object | Required expansion |
| --- | --- |
| Module | Chapters → Assessments → Outcomes → Concepts → Claims → Evidence → Sources |
| Chapter | Assessments → Outcomes → Concepts → Claims → Evidence → Sources |
| Assessment | Outcomes → Concepts → Claims → Evidence → Sources |
| Learning Outcome | Concepts → Claims → Evidence → Sources |
| Concept | Claims → Evidence → Sources |
| Claim | Evidence → Sources |
| Evidence | Source |
| Source | Terminal node |

### Reverse Coverage

| Layer | Eligible nodes | Nodes reaching a valid Source | Coverage |
| --- | ---: | ---: | ---: |
| Module | 7 | 7 | 100% |
| Chapter | 28 | 28 | 100% |
| Assessment | 28 | 28 | 100% |
| Learning Outcome | 46 | 46 | 100% |
| Concept | 101 | 101 | 100% |
| Claim | 101 | 101 | 100% |
| Evidence | 14 | 14 | 100% |
| Active Source | 8 | 8 | 100% |

### Reverse Path Rules

1. Invert only existing canonical edges.
2. Preserve all many-to-one and one-to-many relationships.
3. Return Source, Evidence, and Claim versions with the path.
4. Keep Proposed Source reservations outside operational results.
5. Include Claim review decisions so callers can distinguish coverage from
   production approval.
6. Sort reverse results by canonical ID and remove identical tuples.

## Validation

Every Module, Chapter, Assessment, Outcome, Concept, Claim, and Evidence reaches
at least one Active Source. Broken reverse paths and operational orphans: 0.

## References

- [Canonical Traceability Engine](./traceability-engine.md)
- [Traceability Matrix](./traceability-matrix.md)
- [Traceability Query Patterns](./traceability-query-patterns.md)
