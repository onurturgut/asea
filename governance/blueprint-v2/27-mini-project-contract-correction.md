---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-004"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Mini Project Contract Correction"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-CR-BP-003"
  - "V01-BP01"
  - "V01-SD-PROJ-001"
derived_from:
  - "./25-mini-project-change-request.md"
  - "./02-canonical-schema.md"
  - "../../docs/01-programming/projects.md"
---

# Volume 01 Mini Project Contract Correction

## Purpose

Record the exact metadata-only correction for `V01-P07` and `V01-P08` and the
associated Blueprint version decision.

## Scope

This document summarizes Project contracts. The canonical detailed metadata is
owned by `docs/01-programming/projects.md`; this record creates no second
Project authority.

## Ownership

- Blueprint owner: Curriculum Architect.
- Project Plan owner: Curriculum Architect.
- Change owner: Repository Governance Engineer.
- Authorized request: `V01-CR-BP-003`.

## Content

### Project 07 contract

| Field | Value |
| --- | --- |
| Project ID | `V01-P07` |
| Name | JavaScript Data Reliability Integrator |
| Type | Semi-Guided Integration Project |
| Level | Intermediate |
| Related Modules | `V01-M08`, `V01-M09`, `V01-M10`, `V01-M11` |
| Related Chapters | `V01-C29`-`V01-C35`, `V01-C38` |
| Related Outcomes | `V01-LO047`-`V01-LO060`, `V01-LO065`-`V01-LO066` |
| Duration | 14-18 hours |
| Assessment | Practical integration review and technical defense |
| Project prerequisite | `V01-P01`-`V01-P06` |

### Project 08 contract

| Field | Value |
| --- | --- |
| Project ID | `V01-P08` |
| Name | Modular Failure-Resilient Program Design |
| Type | Independent Pre-Capstone Project |
| Level | Intermediate |
| Related Modules | `V01-M12`, `V01-M07` |
| Related Chapters | `V01-C24`-`V01-C27`, `V01-C36`-`V01-C38` |
| Related Outcomes | `V01-LO038`-`V01-LO045`, `V01-LO061`-`V01-LO066` |
| Duration | 16-20 hours |
| Assessment | Independent project, repository, and technical review |
| Project prerequisite | `V01-P07` |

The contracts are pedagogically distinct: Project 07 is a semi-guided
cross-feature integration gate; Project 08 is an independent reliability and
module-boundary gate immediately before Capstone.

### Version decision

Canonical Blueprint version is incremented from `2.0.0` to `2.1.0`.

Volume Standard v2 requires MINOR or MAJOR versioning when a Frozen Blueprint
scope changes. Adding two planned Project identities is backward-compatible
but changes the complete `planned_artifacts` contract. It is therefore MINOR,
not PATCH. Existing IDs and meanings remain unchanged.

### Count correction

| Contract | Before | Corrected |
| --- | ---: | ---: |
| Mini Projects | 6 planned IDs | 8 planned IDs |
| Planned artefacts | 311 | 313 |
| Existing Project IDs changed | 0 | 0 |

## Validation

- Both Project IDs are unique and allocated after `V01-P06`.
- Every Module, Chapter, and outcome reference exists.
- Project 07 depends only on completed prior Chapters and Projects.
- Project 08 depends only on Project 07 and completed prior Chapters.
- No lesson dependency is introduced.
- Project contracts contain metadata only.

## References

- [Canonical Project Plan](../../docs/01-programming/projects.md)
- [Corrected Blueprint](./02-canonical-schema.md)
- [Correction Validation](./28-correction-validation.md)
- [Volume Standard v2](../../docs/standards/volume-standard-v2.md)
