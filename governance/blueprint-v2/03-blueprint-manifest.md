---
document_type: "manifest"
manifest_id: "V01-MF002"
title: "Volume 01 Blueprint v2 Candidate Manifest"
version: "0.1.0"
status: "Draft"
scope_id: "V01-BP01"
scope_version: "2.0.0"
generated_on: "2026-07-18"
artifact_count: 18
artifacts:
  - id: "ASEA-SD-IDX-038"
    path: "../../blueprint-v2/01-blueprint-v2-overview.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-IDX-039"
    path: "../../blueprint-v2/02-curriculum-hierarchy.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-COMP-028"
    path: "../../blueprint-v2/03-identifier-standard.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-COMP-029"
    path: "../../blueprint-v2/04-versioning-policy.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-IDX-040"
    path: "../../blueprint-v2/05-academy-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-MMAP-002"
    path: "../../blueprint-v2/06-module-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-CMAP-002"
    path: "../../blueprint-v2/07-chapter-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-IDX-041"
    path: "../../blueprint-v2/08-lesson-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-LO-002"
    path: "../../blueprint-v2/09-learning-outcome-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-ASMT-001"
    path: "../../blueprint-v2/10-assessment-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-IDX-042"
    path: "../../blueprint-v2/11-ai-mentor-template.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-COMP-030"
    path: "../../blueprint-v2/12-folder-architecture.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-COMP-031"
    path: "../../blueprint-v2/13-repository-standards.md"
    version: "0.1.0"
    status: "Draft"
  - id: "ASEA-SD-COMP-032"
    path: "../../blueprint-v2/14-blueprint-v2-specification.md"
    version: "0.1.0"
    status: "Draft"
  - id: "V01-BP01"
    path: "./02-canonical-schema.md"
    version: "2.0.0"
    status: "Draft"
  - id: "V01-SD-CMAP-002"
    path: "./04-chapter-registry.md"
    version: "0.1.0"
    status: "Draft"
  - id: "V01-SD-LO-002"
    path: "./05-learning-outcome-registry.md"
    version: "0.1.0"
    status: "Draft"
  - id: "V01-SD-DMAP-002"
    path: "./06-dependency-graph.md"
    version: "0.1.0"
    status: "Draft"
---

# Volume 01 Blueprint v2 Candidate Manifest

## Purpose

Define the exact design and registry files in the Blueprint v2 review
candidate.

## Scope

The manifest covers the candidate architecture only. It does not list
learner-facing Chapter, lab, quiz, project, or AI Mentor production artefacts.

## Ownership

- Manifest owner: Repository Governance Engineer.
- Source Blueprint: `V01-BP01@2.0.0`.
- Active canonical manifest remains `V01-MF001`.
- This candidate manifest has no release or Freeze authority.

## Content

### Blueprint and repository versions

| Scope | Version |
| --- | --- |
| Blueprint candidate | `2.0.0` |
| Candidate manifest | `0.1.0` |
| Current repository package | `0.1.0` |
| Standards profile | Standards v2 |

### Hierarchy

```text
Academy View -> Track View -> Volume -> Module -> Chapter/Lesson
-> Learning Outcome -> Assessment -> Knowledge Package
-> Publishing Package
```

Academy, Track, and Lesson are derived views. Canonical authority begins at
Volume and registered child artefacts.

### Entity types

The package uses only registered types: `blueprint`, `manifest`,
`supporting-document`, `validation-report`, and `review`.

### Folder structure

- Design sources: `blueprint-v2/`
- Candidate canonical records: `governance/blueprint-v2/`
- Current canonical Volume: `docs/01-programming/`
- Knowledge records: `knowledge/`
- Research and production staging: `research/` and `content/`

### Identifier and version policy

Repository Standard v2 owns identifiers and SemVer. Existing IDs are preserved;
new target records use sequences after current allocations.

### Governance and validation policy

Migration Standard controls the v1-to-v2 transition. Review, Validation, and
Freeze standards control promotion. Draft candidate files cannot replace the
active manifest or Blueprint.

## Validation

- Declared artifact count: 18.
- Every declared path must exist.
- Each ID, version, and status must match the target file metadata.
- Duplicate manifest identities are forbidden.
- Manifest validation evidence is recorded in migration validation.

## References

- [Canonical Schema Candidate](./02-canonical-schema.md)
- [Migration Validation](./07-migration-validation.md)
- [Repository Standard v2](../../docs/standards/repository-standard-v2.md)
