---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-021"
supporting_document_type: "Compatibility Report"
title: "ASEA Content Production Governance"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Governance Architect"
source_ids:
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-GOV-REVIEW-001"
  - "ASEA-STD-GOV-VALIDATION-001"
derived_from:
  - "ASEA-SD-IDX-033"
  - "ASEA-SD-IDX-036"
---

# ASEA Content Production Governance

## Purpose

This document defines authority, ownership, approval, validation, change, and
release controls for ASEA content production.

## Scope

It governs production architecture and future Research Packets, CPPs, Lessons,
assessments, assets, and releases. It does not freeze the Knowledge Foundation
or alter existing standards and registries.

## Ownership

| Domain | Canonical owner |
| --- | --- |
| Standards hierarchy | Standards Index v2 |
| Repository metadata, IDs, and release | Repository Standard v2 |
| Knowledge records | KOS standards and atomic registries |
| Curriculum and Outcomes | Curriculum and Volume standards |
| Chapter structure | Chapter Standard v2 |
| Traceability | Canonical Assessment Plan and Traceability Standard |
| Validation result | Validation Standard |
| Review decision | Review Standard |
| Freeze and publication boundary | Freeze Standard |

Production documents operate beneath this hierarchy.

## Content

### Release Candidate Policy

Knowledge Foundation RC1 may be used for research design and Draft content
production. It may not be represented as frozen, Stable, or universally
Approved. Any packet using Candidate or Changes Required knowledge records must
record the gate and cannot publish dependent material until required approval.

### Role Separation

| Role | Responsibility | Cannot do alone |
| --- | --- | --- |
| Researcher | Scope research and assemble packet evidence | Approve contested Claims |
| Knowledge Architect | Validate registry and graph alignment | Approve learner-facing quality |
| Learning Designer | Design CPP and teaching strategy | Approve own Final release |
| Author | Produce original Draft content | Expand knowledge scope silently |
| Technical Reviewer | Verify correctness and executable material | Replace pedagogical review |
| Content Reviewer | Verify learning design and clarity | Approve technical defects |
| Asset Reviewer | Verify accessibility and reproducibility | Approve unsupported content |
| Repository Reviewer | Verify structure, metadata, links, and manifest | Infer content approval |
| Final Reviewer | Verify all gates and release scope | Self-approve without independence |

AI systems may assist but cannot own records or approve reviews.

### Approval Sequence

```text
Research Validation
  -> Technical Research Review
  -> Educational Research Review
  -> CPP Validation
  -> Pre-production Content Review
  -> Draft Authoring
  -> Technical Review
  -> Pedagogical Review
  -> Asset and Assessment Reviews
  -> Repository Review
  -> Final Review
  -> Release
```

Only canonical Review decisions authorize promotion.

### Traceability Policy

Every material lesson assertion must resolve:

```text
Lesson location -> Claim -> Evidence -> Source
Lesson objective -> Learning Outcome -> Assessment
Lesson concept -> Concept -> Knowledge Graph -> prerequisite chain
```

Derived packets and content cannot create canonical relationships.

### Validation Policy

Validation checks inventory, naming, metadata, IDs, SemVer, dependencies,
traceability, links, executable material, accessibility, security, licensing,
content hygiene, review evidence, and release manifests. Validation does not
equal approval.

### Change Control

- Knowledge defect: return to the canonical KOS owner.
- Outcome or Chapter architecture change: return to curriculum governance.
- CPP design change: revise packet and rerun pre-production review.
- Draft technical or pedagogical defect: revise Draft and rerun affected review.
- Published correction: create a new version and preserve immutable history.

No urgency permits direct mutation of a Stable or frozen artefact.

### Publication Gate

Publication requires:

- complete and approved Research and Production Packets;
- approved post-draft reviews;
- validated assessments and assets;
- no open Critical or Major finding;
- complete manifest and release record;
- exact version and tag reconciliation.

## Validation

Governance reuses existing authority, review types, decisions, lifecycle, and
freeze rules. It creates no parallel governance or approval state.

## References

- [Production Architecture](./production-architecture.md)
- [Production Lifecycle](./production-lifecycle.md)
- [Standards Index v2](../standards/standards-index-v2.md)
- [Review Standard](../standards/governance/02-review-standard.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)
- [Freeze Standard](../standards/governance/05-freeze-standard.md)
- [KOS Review Process](../knowledge-operating-system/11-review-process.md)
