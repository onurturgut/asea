---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-006"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Source and Evidence Governance"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-004"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-003"
  - "V01-FR-BP-001"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-004"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-003"
  - "V01-FR-BP-001"
---

# Volume 01 Source and Evidence Governance

## Purpose

This document preserves KOS identity, authority, lifecycle, provenance, and
curriculum ownership while establishing the Sprint 03 Source portfolio and
Evidence foundation.

## Scope

It governs the seven Sprint 03 documents, reconciliation of operational Sources
and Evidence, Candidate source reservations, external-reference verification,
and the boundary before Claim creation.

## Ownership

- **Knowledge owner:** Knowledge Architect.
- **Research owner:** Researcher.
- **Atomic Source authority:** `knowledge/registry/sources/`.
- **Atomic Evidence authority:** `knowledge/registry/evidence/`.
- **Concept identity authority:** `knowledge/registry/concepts/`.
- **Curriculum traceability authority:** `docs/01-programming/assessment.md`.

## Content

### Identity and Authority Boundary

The existing Source and Evidence ID patterns, schemas, source types, tiers,
freshness classes, and lifecycle values are reused. The Markdown Source Registry
is a derived candidate inventory, not a second atomic store.

### Operational Reconciliation

- 8 existing Active Source records retain their exact
  IDs; LLVM and WebAssembly freshness metadata was updated from canonical
  publisher pages.
- 8 existing Evidence records remain unchanged.
- 12 new Source IDs are Candidate reservations with
  `Proposed` lifecycle status.
- New Sources require schema-valid JSON admission, verification, and review
  before becoming Active.

### Provenance Boundary

Sprint 03 establishes Concept-to-Source coverage for research planning. It does
not assert that a Source directly proves every Concept definition. The canonical
production chain remains:

`content fragment → Concept → Claim → Evidence → Source`.

Claims and new Evidence records require separate authorization.

### Change Control

- Frozen Blueprint, Concept Registry, Knowledge Graph, Learning Outcomes,
  Assessments, and Review records are referenced and never rewritten.
- Source meaning or publisher identity changes require versioning or a new ID.
- URLs, versions, rights, and freshness must be revalidated before activation.
- Removed or superseded Sources remain addressable.
- AI output, search snippets, and aggregators cannot become evidence.

## Validation

No new enum, second operational store, Claim, Blueprint mutation, Concept
mutation, Graph mutation, or unreviewed Active Source was created.

## References

- [Source Candidate Registry](./source-registry.md)
- [Evidence Foundation](./evidence-foundation.md)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [Source Priority Standard](../knowledge-operating-system/04-source-priority.md)
- [Concept Governance](./concept-governance.md)
