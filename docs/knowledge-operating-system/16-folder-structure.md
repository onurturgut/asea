---
document_type: "standard"
standard_id: "ASEA-STD-KOS-016"
title: "ASEA Knowledge Operating System Folder Structure"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Operating System Folder Structure

## Purpose

This standard defines a scalable storage architecture for KOS records and generated views. It specifies future structure; adopting it requires the normal repository change and migration process.

## Documentation Package

```text
docs/knowledge-operating-system/
|-- 01-vision.md
|-- 02-knowledge-standards.md
|-- 03-research-pipeline.md
|-- 04-source-priority.md
|-- 05-source-validation.md
|-- 06-knowledge-extraction.md
|-- 07-knowledge-graph.md
|-- 08-learning-architecture.md
|-- 09-chapter-specification.md
|-- 10-content-assets.md
|-- 11-review-process.md
|-- 12-versioning.md
|-- 13-update-pipeline.md
|-- 14-quality-metrics.md
|-- 15-ai-workflow.md
|-- 16-folder-structure.md
|-- 17-content-lifecycle.md
|-- 18-contributor-guide.md
`-- reviews/
```

## Operational Knowledge Store

```text
knowledge/
|-- registry-manifest.json
|-- registry/
|   |-- sources/
|   |-- evidence/
|   |-- claims/
|   |-- concepts/
|   |-- contradictions/
|   `-- edges/
|-- research-briefs/
|-- extraction/
|-- graph/
|   |-- snapshots/
|   `-- derived/
|-- production-packets/
|-- asset-manifests/
|-- update-requests/
|-- reviews/
|-- releases/
|-- schemas/
`-- scripts/
```

This structure documents existing repository paths. It does not authorize new
directories or registry implementations. `registry-manifest.json` identifies
operational areas and schema versions; `scripts/` contains validation tools.
Changes to this structure require the normal migration and Repository Review
process.

## Authority Boundaries

`registry/` stores authoritative atomic records. `graph/snapshots/` pins reviewed graph states. `graph/derived/` contains regenerable views. Production packets reference canonical curriculum documents in `docs/`; they do not duplicate or redefine them. Reviews and releases use governance schemas.

## Naming and Partitioning

Folders and files use lowercase kebab-case. Records may be partitioned by stable ID prefix or year when scale requires it; partitioning does not alter IDs. Generated filenames include source version or manifest reference where ambiguity is possible.

## File Formats

Markdown is used for human-governed specifications and reviews; YAML or JSON is used for schema-validated records; Mermaid or SVG sources remain editable; checksums and manifests use deterministic ordering and UTF-8.

## Validation

No record may exist in two authoritative locations. Links are relative inside the repository. Generated locations are writable only by the documented generator. Case collisions, spaces, hidden second sources of truth, and unregistered binary assets are forbidden.

## Definition of Done

Structure adoption is done when a migration record authorizes it, schemas and owners exist, authority boundaries are tested, paths comply with Repository Standard v2, and no canonical educational path or ID changes.

## References

### Internal Standards

- [Repository Standard v2.0](../standards/repository-standard-v2.md)
- [Migration Standard](../standards/governance/06-migration-standard.md)
- [Knowledge Standards](./02-knowledge-standards.md)
