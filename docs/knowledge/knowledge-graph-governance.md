---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-003"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Knowledge Graph Governance"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-007"
  - "ASEA-SD-IDX-003"
  - "V01-FR-BP-001"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-007"
  - "ASEA-SD-IDX-003"
  - "V01-FR-BP-001"
---

# Volume 01 Knowledge Graph Governance

## Purpose

This document preserves the KOS authority, identity, lifecycle, and curriculum
ownership contracts for the Sprint 02 graph foundation.

## Scope

It governs the seven graph documents under `docs/knowledge/`, the reconciliation
of existing operational edges, Candidate edge reservations, derived views, and
downstream use.

## Ownership

- **Knowledge owner:** Knowledge Architect.
- **Curriculum owner:** Curriculum Architect.
- **Atomic edge authority:** `knowledge/registry/edges/`.
- **Curriculum traceability authority:** `docs/01-programming/assessment.md`.
- **Derived graph inventory:** `docs/knowledge/knowledge-graph-registry.md`.

## Content

### Identity and Authority

The existing ID pattern `ASEA-EDGE-{NNNNNN}` and KOS relation enum are used.
The 10 Approved operational edges retain their exact IDs
and semantics. New IDs are immutable Candidate reservations; the Markdown
registry does not replace the atomic JSON store.

### Lifecycle and Admission

1. Reconcile a relation with Concept and frozen curriculum sources.
2. Allocate an immutable Candidate Edge ID.
3. Validate endpoints, type, rationale, and evidence or decision IDs.
4. Complete Knowledge and Curriculum review when progression is affected.
5. Admit a schema-valid atomic record to `knowledge/registry/edges/`.
6. Regenerate version-pinned graph views.

Candidate edges cannot be represented as Approved or used for automated
high-stakes learner decisions before operational admission.

### Source-of-Truth Boundaries

- Concept identity and semantics remain owned by the Concept registry.
- Edge semantics remain owned by the operational Edge registry.
- Learning Outcomes, Chapters, Labs, Assessments, and Projects retain their
  Standards v2 owners.
- Category, Module, Chapter, and Outcome links remain mappings because the KOS
  relation enum does not define membership or support edge types.
- Visual graphs, indexes, metrics, and learning paths are derived views.

### Change Control

- Frozen Blueprint artefacts are referenced and never rewritten.
- Edge meaning changes require a new version or ID according to KOS rules.
- Prerequisite or progression changes require Curriculum impact review.
- Symmetric relations are stored once.
- Deprecated edges remain addressable and identify replacements.

## Validation

The foundation introduces no new relation enum, no second operational edge
store, no Blueprint mutation, and no unreviewed Approved record.

## References

- [Knowledge Graph Standard](../knowledge-operating-system/07-knowledge-graph.md)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [Knowledge Graph Candidate Registry](./knowledge-graph-registry.md)
- [Concept Governance](./concept-governance.md)
- [Blueprint Freeze Record](../01-programming/reviews/volume-01-freeze-record.md)
