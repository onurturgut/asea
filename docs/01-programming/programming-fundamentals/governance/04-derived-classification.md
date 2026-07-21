---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-009"
supporting_document_type: "Compatibility Report"
title: "Programming Fundamentals Academy Derived Classification"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Derived"
owner_role: "Repository Governance Engineer"
source_ids:
  - "V01-BP01"
  - "V01-RV038"
  - "V01-MF005"
derived_from:
  - "./01-canonical-authority-review.md"
  - "../academy/12-academy-manifest.md"
---

# Programming Fundamentals Academy Derived Classification

## Purpose

Confirm authority, ownership, version source, approval source, and Freeze scope
for every Academy architecture document.

## Scope

The classification covers all 15 files in `../academy/`. It changes no
educational meaning or canonical registry.

## Ownership

`V01-BP01@2.1.0` owns curriculum meaning. Individual Academy documents retain
their declared operational owner roles while remaining Derived and Blueprint
Controlled.

## Content

### Classification contract

| Property | Classification |
| --- | --- |
| Curriculum authority | `V01-BP01@2.1.0` |
| Academy authority | Derived |
| Governance classification | Approved by `V01-RV038` |
| Control model | Blueprint Controlled |
| Repository authority | Standards Index v2 and Repository Standard v2 |
| Version source | Pinned Blueprint version 2.1.0 |
| Freeze source | Existing `V01-FR-BP-003` |
| Independent Academy freeze scope | None |

### Per-document classification

| Document | Authority | Owner | Version source | Approval source | Freeze scope |
| --- | --- | --- | --- | --- | --- |
| `01-academy-overview.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `02-learning-path.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `03-module-registry.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `04-chapter-registry.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `05-lesson-registry.md` | Derived | Content Systems Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `06-learning-outcomes.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `07-dependency-map.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `08-knowledge-graph.md` | Derived | Knowledge Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `09-competency-framework.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `10-assessment-framework.md` | Derived | Assessment Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `11-project-framework.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `12-academy-manifest.md` | Derived manifest | Repository Architect | Academy candidate 0.1.1 | `RV038` | None |
| `13-academy-statistics.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `14-academy-roadmap.md` | Derived | Curriculum Architect | Blueprint 2.1.0 | `RV038` | Inherited |
| `15-completion-requirements.md` | Derived | Assessment Architect | Blueprint 2.1.0 | `RV038` | Inherited |

Abbreviated Review IDs inherit the `V01-` prefix. “Inherited” means the view
cannot exceed or alter the active Blueprint Freeze.

### Lifecycle clarification

Governance classification is Approved. Academy artefact lifecycle remains
Draft until Sprint 02B records the required approval chain. These are separate
properties and must not be conflated.

## Validation

- Academy documents classified: 15 of 15.
- Documents with independent canonical authority: 0.
- Documents without an owner: 0.
- Documents without version source: 0.
- Documents without approval source: 0.
- Unsupported Freeze scope: 0.

## References

- [Authority Review](./01-canonical-authority-review.md)
- [Academy View Template](../../../../blueprint-v2/05-academy-template.md)
- [Academy Approval Manifest](../academy/12-academy-manifest.md)
