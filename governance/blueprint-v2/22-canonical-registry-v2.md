---
document_type: "supporting-document"
supporting_document_id: "V01-SD-IDX-005"
supporting_document_type: "Index"
title: "Volume 01 Canonical Registry v2"
version: "1.1.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Repository Governance Engineer"
source_ids:
  - "V01-BP01"
  - "V01-MF004"
  - "V01-FR-BP-003"
  - "V01-ADR-017"
  - "V01-CR-BP-003"
derived_from:
  - "./02-canonical-schema.md"
  - "./31-correction-manifest.md"
  - "./29-blueprint-v2-refreeze.md"
  - "./21-version-history.md"
---

# Volume 01 Canonical Registry v2

## Purpose

Declare the single active source of truth for Volume 01 curriculum architecture
after the completed Blueprint v2 migration.

## Scope

The registry owns canonical discovery for the Blueprint, Chapter Registry,
Learning Outcome Registry, Dependency Graph, manifest, Freeze, migration,
decision, and approval evidence.

## Ownership

- Registry operational state: **Active**.
- Registry authority: **Authoritative**.
- Owner: Repository Governance Engineer.
- Standards authority: Standards Index v2 and Governance Extension.

## Content

### Active canonical records

| Role | Canonical ID | Version | Path | State |
| --- | --- | --- | --- | --- |
| Blueprint | `V01-BP01` | `2.1.0` | `02-canonical-schema.md` | Stable/Frozen |
| Manifest | `V01-MF004` | `0.1.0` | `31-correction-manifest.md` | Stable |
| Chapter Registry | `V01-SD-CMAP-002` | `0.1.0` | `04-chapter-registry.md` | Stable |
| Learning Outcome Registry | `V01-SD-LO-002` | `0.1.0` | `05-learning-outcome-registry.md` | Stable |
| Dependency Graph | `V01-SD-DMAP-002` | `0.1.0` | `06-dependency-graph.md` | Stable |
| Project Plan | `V01-SD-PROJ-001` | `1.2.0` | Canonical Project Plan | Stable |
| Decision | `V01-ADR-017` | `1.0.0` | ADR-017 migration decision | Accepted |
| Change Request | `V01-CR-BP-003` | `1.0.0` | `25-mini-project-change-request.md` | Approved |
| Freeze | `V01-FR-BP-003` | `1.0.0` | `29-blueprint-v2-refreeze.md` | Active |
| Migration | `V01-MG-001-002-001` | `1.0.0` | v1-to-v2 migration record | Completed |

Paths without a directory prefix are relative to this registry. Decision and
migration paths resolve through the References section.

### Canonical hierarchy

```text
Volume V01
-> 12 Modules
-> 38 Chapters
-> 66 Learning Outcomes
-> 38 planned Chapter assessments
-> 8 Mini Projects
-> 313 planned artefact identities
```

### Archived architecture

| Blueprint | Version | Historical manifest | Historical Freeze | Registry state |
| --- | --- | --- | --- | --- |
| `V01-BP01` | `1.1.0` | `V01-MF001` | `V01-FR-BP-001` | Archived |
| `V01-BP01` | `2.0.0` | `V01-MF002` | `V01-FR-BP-002` | Superseded |

Archived means non-canonical and immutable. The original documents remain
available through their Freeze evidence, checksums, and repository history.

### Authority rule

Only records in **Active canonical records** may define current Volume 01
architecture. Archived v1 files, design documents, review records, research,
and content staging cannot override these records.

## Validation

- Operational state: Active.
- Canonical Blueprint count: 1.
- Canonical manifest count: 1.
- Active Blueprint Freeze count: 1.
- Duplicate active authority: 0.
- Archived or superseded Blueprint versions: 2.
- All canonical references resolve.

## References

- [Canonical Blueprint](./02-canonical-schema.md)
- [Canonical Manifest](./31-correction-manifest.md)
- [Active Blueprint Freeze](./29-blueprint-v2-refreeze.md)
- [Version History](./21-version-history.md)
- [Canonical Project Plan](../../docs/01-programming/projects.md)
- [ADR-017](../../docs/01-programming/migrations/v01-curriculum-v2-decision.md)
- [Migration Record](../../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md)
- [Standards Index v2](../../docs/standards/standards-index-v2.md)
