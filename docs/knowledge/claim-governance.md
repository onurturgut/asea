---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-011"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Claim Governance"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "ASEA-SD-IDX-018"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "ASEA-SD-IDX-018"
---

# Volume 01 Claim Governance

## Purpose

This document governs Claim identity, atomicity, Evidence support, confidence,
review, contradiction handling, versioning, and curriculum mapping within the
existing Standards v2 and KOS hierarchy.

## Scope

It applies to the 101 Volume 01 Claims and nine Sprint 06 Claim documents. It
does not authorize lesson production or change frozen curriculum artefacts.

## Ownership

| Concern | Canonical Owner |
| --- | --- |
| Atomic Claim | `knowledge/registry/claims/` |
| Claim schema and lifecycle | KOS Knowledge Standards and `claim.schema.json` |
| Evidence locator and Source link | Evidence Registry |
| Source tier and freshness class | Source Registry |
| Concept identity | Concept Registry |
| Outcome-to-assessment traceability | `docs/01-programming/assessment.md` |
| Derived Claim views | Knowledge Architect |
| Formal technical approval | Subject-Matter Reviewer under Review Standard |

## Content

### Identity and Authority

- Claim IDs use `ASEA-CLM-{NNNNNN}`, are immutable, and are never recycled.
- `knowledge/registry/claims/` is the only atomic Claim source of truth.
- Each Claim contains one bounded proposition and one or more Evidence IDs.
- Sources are resolved through Evidence; direct Source fields are not added.
- Markdown registries are derived views and cannot override atomic Claims.

### Requested Metadata Ownership

| Requested attribute | Canonical representation |
| --- | --- |
| Canonical Statement | Claim `proposition` |
| Statement Type | Informational profile only; no schema enum exists |
| Description | Claim `scope` and `exceptions` |
| Supporting Evidence | Claim `evidence_ids` |
| Supporting Sources | Derived through Evidence `source_id` |
| Authority Tier | Claim tier scores resolved against Sources |
| Verification and Status | Claim `workflow_state`; no duplicate status field |
| Review Status | Claim `review_decision` and formal Review record |
| Curriculum relationships | Derived from primary Concept and frozen maps |

### Admission Workflow

1. Allocate the next immutable Claim ID.
2. Write one objective, testable proposition.
3. Record scope and material exceptions.
4. Attach one or more exact Evidence IDs.
5. Calculate authority, confidence, freshness, independence, and Evidence count.
6. Detect duplicates, contradictions, and unresolved references.
7. Map the Claim to its primary Concept and frozen curriculum relationships.
8. Advance through the canonical lifecycle:
   `Candidate → Extracted → Validated → Mapped → Approved → Deprecated → Archived`.
9. Require formal human Claim Review before `Approved`.

### Change Control

- Meaning changes require a new Claim ID or explicit supersession.
- Backward-compatible metadata corrections use SemVer PATCH.
- New Evidence may change confidence without changing the proposition.
- A Source version change triggers Evidence and Claim freshness review.
- Blocking contradictions require canonical Contradiction records and prevent
  approval.
- Statement Type cannot become a JSON field without an ADR, schema version, and
  migration.

### Production Boundary

Only the six pre-existing Approved Claims are currently production-eligible
within their recorded scopes. The 95 new Validated Claims require formal Claim
Review; registry coverage alone does not authorize educational prose.

## Validation

- Atomic Claim records: 101.
- Claims without Evidence or Source: 0.
- Duplicate or conflicting Claims: 0.
- Unsupported enum or schema field introduced: 0.
- Frozen curriculum or Knowledge Graph mutations: 0.

## References

- [Canonical Claim Registry](./claim-registry.md)
- [Claim Validation Report](./claim-validation-report.md)
- [Claim Conflict Analysis](./claim-conflict-analysis.md)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [Review Standard](../standards/governance/02-review-standard.md)
