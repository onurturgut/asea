---
document_type: "standard"
standard_id: "ASEA-STD-KOS-007"
title: "ASEA Knowledge Graph Standard"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Graph Standard

## Purpose

The knowledge graph makes conceptual dependencies and curriculum traceability machine-readable without replacing canonical curriculum registries.

## Authority Model

Concept and edge registries are authoritative for knowledge relationships. Volume `assessment.md` remains authoritative for curriculum traceability under the [Traceability Standard](../standards/governance/03-traceability-standard.md). Chapter maps and graph visualizations are derived views.

## Concept Node Schema

```yaml
id: "ASEA-CON-000001"
version: "1.0.0"
title: "Concept title"
difficulty: "Beginner"
knowledge_area: "Programming Foundations"
learning_outcome_ids:
  - "V01-LO001"
prerequisite_ids: []
dependency_ids: []
related_concept_ids: []
next_concept_ids: []
claim_ids:
  - "ASEA-CLM-000001"
workflow_state: "Validated"
```

Difficulty uses `Beginner`, `Intermediate`, or `Advanced`. Every node has at least one validated claim and one curriculum disposition: mapped, explicitly deferred, or excluded with rationale.

## Edge Schema

Edges have ID, source concept, target ID, relation type, rationale, evidence or
decision IDs, version, and state. Direction is represented by the ordered
`source_concept_id` and `target_id` endpoints; no separate direction field is
created. Allowed relation types are:

- `prerequisite-of`
- `depends-on`
- `related-to`
- `enables`
- `next-concept`
- `practiced-by`
- `assessed-by`
- `evidenced-by`
- `supersedes`

Symmetric relations are stored once and rendered bidirectionally.
`prerequisite-of`, `depends-on`, `enables`, `next-concept`, `practiced-by`,
`assessed-by`, `evidenced-by`, and `supersedes` follow the stored source-to-target
direction.

## Graph Rules

- Prerequisite edges form a directed acyclic graph.
- Self-loops and duplicate semantic edges are forbidden.
- Every referenced ID resolves to one active record.
- A prerequisite states required prior capability; a dependency states technical reliance.
- `related-to` cannot hide an unknown prerequisite.
- Difficulty changes require curriculum impact review.
- Deprecated nodes remain addressable and point to their replacement.

## Curriculum Mapping

Mapping proceeds from learning outcome to concepts, then to chapters and practice artifacts. A concept may support several outcomes; a material outcome must not depend on an unmapped concept. Graph changes that alter progression require Curriculum Review and synchronization with the authoritative traceability registry.

## Validation

Automated checks detect missing nodes, invalid relations, duplicate IDs, cycles, orphan concepts, unreachable next concepts, unknown outcomes, and mismatched reverse indexes. Human review checks whether relation semantics and difficulty are educationally valid.

## Derived Views

Module maps, prerequisite diagrams, chapter maps, search indexes, and learner recommendations record graph source version and generated date. They never create or edit authoritative edges.

## Definition of Done

A graph change is done when all nodes and edges validate, prerequisite cycles are absent, curriculum mappings reconcile, derived views identify their source version, and Knowledge and Curriculum owners approve the change.

## References

### Internal Standards

- [Knowledge Extraction](./06-knowledge-extraction.md)
- [Learning Architecture](./08-learning-architecture.md)
- [Curriculum Standard v2.0](../standards/curriculum-standard-v2.md)
