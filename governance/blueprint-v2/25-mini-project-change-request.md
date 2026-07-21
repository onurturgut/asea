---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Mini Project Contract Change Request"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Repository Governance Engineer"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-002"
  - "V01-ADR-017"
derived_from:
  - "./02-canonical-schema.md"
  - "./18-blueprint-v2-freeze.md"
  - "../../docs/01-programming/projects.md"
x-change-request-id: "V01-CR-BP-003"
x-change-state: "Approved"
---

# Volume 01 Mini Project Contract Change Request

## Purpose

Record Repository Owner authorization for the smallest correction that makes
the frozen Mini Project contract internally consistent.

## Scope

Change Request `V01-CR-BP-003` applies only to:

- adding planned IDs `V01-P07` and `V01-P08`;
- defining their metadata-only Project contracts;
- changing Mini Project count from 6 to 8 where authoritative;
- changing planned artefact count from 311 to 313;
- issuing corrected validation, reviews, manifest, version, and Freeze records.

No Module, Chapter, Lesson, Learning Outcome, prerequisite, or Academy
hierarchy change is authorized.

## Ownership

- Change Request ID: `V01-CR-BP-003`.
- Request state: Approved.
- Authorization: Repository Owner.
- Change owner: Repository Governance Engineer.
- Curriculum contract owner: Curriculum Architect.

## Content

### Inconsistency description

Blueprint `V01-BP01@2.0.0` required eight Mini Projects, while its
`planned_artifacts` list and canonical Project Plan contained only
`V01-P01`-`V01-P06`. The same Blueprint reported both eight and six Mini
Projects.

### Discovery source

The inconsistency was discovered during PHASE 06 Sprint 01 Academy curriculum
pre-production validation. That sprint stopped before creating Academy files.

### Affected contracts

- Blueprint `planned_artifacts` and project-count statements;
- canonical Project Plan;
- Blueprint manifest and canonical registry;
- version history and Freeze succession;
- post-correction validation evidence.

### Risk analysis

| Risk | Control |
| --- | --- |
| Frozen scope changes silently | New MINOR Blueprint version and Freeze |
| Existing project meaning changes | `V01-P01`-`V01-P06` remain unchanged |
| New projects depend on future knowledge | Map only to existing Chapters and outcomes |
| Parallel active Freeze records | Canonical Registry activates only the newest Freeze |
| PHASE 06 starts on inconsistent IDs | Keep PHASE 06 blocked until correction Pass |

### Required correction

Create metadata-only contracts for `V01-P07` and `V01-P08`, add both IDs to
the complete planned artefact inventory, validate project and dependency
coverage, and activate a replacement Freeze.

### Permitted scope

Only files directly representing the Project contract, Blueprint inventory,
manifest, lifecycle, reviews, validation, and Freeze evidence may change.

### Rollback plan

If any required validation or review fails:

1. do not activate `V01-FR-BP-003`;
2. restore Blueprint `2.0.0` and Project Plan `1.1.0` from Git;
3. preserve `V01-FR-BP-002` as the last effective Freeze;
4. mark the correction attempt failed without running PHASE 06.

### Acceptance criteria

- `V01-P01`-`V01-P08` all resolve exactly once.
- The Blueprint contains 313 unique planned IDs.
- Mini Project count is consistently 8.
- Project dependencies resolve to existing Modules, Chapters, and outcomes.
- Required reviews and validation pass.
- New Freeze `V01-FR-BP-003` becomes the sole effective Freeze.

## Validation

- Change Request ID is unique.
- Authorization and permitted scope are explicit.
- Rollback does not depend on deleting historical evidence.
- No educational content production is authorized by this record.

## References

- [Controlled Unfreeze](./26-controlled-unfreeze-record.md)
- [Contract Correction](./27-mini-project-contract-correction.md)
- [Freeze Standard](../../docs/standards/governance/05-freeze-standard.md)
- [Volume Standard v2](../../docs/standards/volume-standard-v2.md)
