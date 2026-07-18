---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-027"
supporting_document_type: "Compatibility Report"
title: "ASEA Curriculum Governance Recommendation"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-001"
  - "V01-MG-001-002-001"
  - "V01-ADR-017"
derived_from:
  - "./01-current-blueprint-analysis.md"
  - "./02-canonical-structure.md"
  - "./07-gap-analysis.md"
  - "./08-scalability-analysis.md"
  - "./09-migration-strategy.md"
---

# ASEA Curriculum Governance Recommendation

## Purpose

This document provides one governance recommendation based on the complete
Sprint 01 analysis.

## Scope

The recommendation covers curriculum evolution strategy, authority boundaries,
approval sequence, registry role, and the next permitted Sprint. It does not
authorize implementation.

## Ownership

- **Authority:** Derived recommendation.
- **Current canonical Blueprint:** `V01-BP01` version `1.1.0`.
- **Current canonical Freeze:** `V01-FR-BP-001`.
- **Decision authority:** Existing Standards v2 review and migration workflow.

## Content

### Recommendation

Proceed with **Option C — Controlled Blueprint v2**, using the existing Planned
migration `V01-MG-001-002-001` and Proposed curriculum decision
`V01-ADR-017`.

This is the only recommended path.

### Technical justification

1. The current 7/28/46 architecture is internally sound and should be
   preserved, not replaced.
2. Later JavaScript, TypeScript, and React paths need explicit language
   semantics that the current language-neutral contract does not provide.
3. Appending new IDs preserves content, evidence, and historical
   traceability.
4. A controlled MAJOR Blueprint version makes the expanded duration,
   dependencies, labs, projects, and assessments visible.
5. The atomic activation rule prevents parallel canonical curricula.
6. Existing governance already supports decision, migration, review,
   validation, and freeze transitions; no new governance model is needed.

### Registry governance

The ten Sprint 01 documents are Draft, Derived analysis artefacts. They improve
discovery but do not replace the canonical Blueprint and supporting maps.

If a Curriculum Registry becomes an active repository-wide source of truth
after migration, it should be a canonical index of entity identities and
locations. Module, Chapter, and Learning Outcome semantics should remain owned
by their approved Blueprint and authoritative registries. This avoids a second
semantic source of truth.

### Required approval sequence

1. Review and Accept `V01-ADR-017`.
2. Review the target counts, new competency areas, and ID preservation rules.
3. Move `V01-MG-001-002-001` from Planned to In Progress only after approval.
4. Create a non-authoritative Blueprint v2 candidate.
5. Run Curriculum, Technical, Repository, and Final Blueprint reviews.
6. Run complete validation and migration compatibility checks.
7. Activate Blueprint v2 atomically and publish a new Freeze Record.

### Sprint scorecard

| Measure | Score | Basis |
| --- | ---: | --- |
| Curriculum Health | 76/100 | Strong V01 architecture and outcomes; low multi-Academy coverage and limited produced content |
| Scalability | 52/100 | Extensible standards and IDs; missing cross-Academy registry and specialization graph |
| Governance | 91/100 | Stable Standards v2, complete Freeze evidence, controlled migration mechanism |
| Maintainability | 78/100 | Consistent canonical V01 files; distributed discovery and dual content paths |

### Final status

| Report field | Result |
| --- | --- |
| Sprint Status | Analysis Complete |
| Repository Status | Active |
| Canonical Blueprint Status | `V01-BP01` v1.1.0 — Stable, Frozen |
| Curriculum Health Score | 76/100 |
| Scalability Score | 52/100 |
| Governance Score | 91/100 |
| Maintainability Score | 78/100 |
| Migration Required | YES |
| Blueprint v2 created | NO |
| Curriculum changed | NO |
| Lesson production | NONE |

### Recommended next Sprint

**PHASE 05 — Curriculum Governance, Sprint 02: Curriculum Migration Decision
Review**

The next Sprint should review the Proposed decision and migration target. It
must not create Blueprint v2 until the decision receives the approvals required
by Standards v2.

## Validation

- Exactly one migration path is recommended.
- The recommendation derives authority from existing Standards v2.
- No new authority level or lifecycle state is introduced.
- No current canonical ID, Blueprint, outcome, dependency, or Freeze was
  modified.
- Blueprint v2 production remains gated by review approval.

## References

- [Current Blueprint Analysis](./01-current-blueprint-analysis.md)
- [Canonical Structure](./02-canonical-structure.md)
- [Gap Analysis](./07-gap-analysis.md)
- [Scalability Analysis](./08-scalability-analysis.md)
- [Migration Strategy](./09-migration-strategy.md)
- [Current Freeze Record](../../docs/01-programming/reviews/volume-01-freeze-record.md)
