---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Concept Registry Governance"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-007"
  - "V01-BP01"
  - "V01-FR-BP-001"
derived_from: []
---

# Volume 01 Concept Registry Governance

## Purpose

This document preserves the canonical KOS authority model while enabling the
PHASE 03 Volume 01 Concept inventory.

## Scope

It governs identity allocation, authority, lifecycle, review, and downstream
use of the five documents under `docs/knowledge/`.

## Ownership

- **Governance owner:** Knowledge Architect.
- **Curriculum owner:** Curriculum Architect.
- **Atomic Concept authority:** `knowledge/registry/concepts/`.
- **Curriculum traceability authority:** `docs/01-programming/assessment.md`.
- **Human-readable candidate inventory:** `docs/knowledge/concept-registry.md`.

## Content

### ID Contract

The existing KOS pattern `ASEA-CON-{NNNNNN}` is used. No ID proposal or new
namespace is introduced. IDs `ASEA-CON-000001` through
`ASEA-CON-000006` retain their existing Approved operational records.
Subsequent IDs in the candidate inventory are reserved and immutable.

### Authority Boundary

The Markdown registry is a derived candidate inventory, not a second atomic
record store. A Candidate becomes operational only when a schema-valid JSON
record with the same ID is admitted to `knowledge/registry/concepts/`.
Operational admission requires claim, evidence, and source references under
the Knowledge Standards.

### Lifecycle

1. Extracted curriculum term.
2. Canonicalized candidate with reserved Concept ID.
3. Evidence and Claim mapping.
4. Concept schema validation.
5. Knowledge and technical review.
6. Operational record admission.
7. Graph mapping in a separately authorized sprint.

### Change Rules

- Canonical IDs are never recycled.
- Alias changes require duplicate and ambiguity validation.
- Definition changes require evidence review and SemVer.
- Prerequisite changes require curriculum impact review.
- Frozen Blueprint IDs and relationships are referenced, never rewritten.
- Knowledge Graph edges are outside this sprint.

### Downstream Use

Search and research tools may use Candidate records for discovery when they
display Candidate status. AI Mentor, assessment decisions, adaptive learning,
and production authorization may use only operational records that meet KOS
approval and provenance requirements.

## Validation

This governance package introduces no second source of truth, no new ID
namespace, no Graph edge, and no change to frozen Volume 01 artefacts.

## References

- [Concept Candidate Registry](./concept-registry.md)
- [Knowledge Registry Index](../../knowledge/README.md)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [Knowledge Graph Standard](../knowledge-operating-system/07-knowledge-graph.md)
- [Blueprint Freeze Record](../01-programming/reviews/volume-01-freeze-record.md)
