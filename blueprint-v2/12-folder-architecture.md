---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-030"
supporting_document_type: "Compatibility Report"
title: "ASEA Blueprint v2 Folder Architecture"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Repository Architect"
source_ids:
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-VOLUME-002"
  - "ASEA-SD-COMP-020"
derived_from:
  - "./02-curriculum-hierarchy.md"
  - "../docs/production/repository-production-structure.md"
---

# ASEA Blueprint v2 Folder Architecture

## Purpose

This document defines a proposed folder architecture that scales to multiple
Academy views while preserving current canonical Volume paths.

## Scope

The design covers governance, catalog views, canonical Volumes, knowledge,
research, production, AI Mentor packages, applications, and shared packages.
Only this design package is created in the current Sprint.

## Ownership

- Repository Standard v2 owns naming and canonical root rules.
- Volume Standard v2 owns Volume package structure.
- KOS owns atomic knowledge registries.
- Production architecture owns staging and derived output paths.
- Academy folders, if approved, contain derived navigation only.

## Content

### Proposed target tree

```text
repository-root/
├── apps/
├── packages/
├── docs/
│   ├── standards/
│   ├── academies/
│   │   └── {academy-slug}/
│   │       └── index.md
│   ├── {nn}-{volume-slug}/
│   │   ├── README.md
│   │   ├── volume-blueprint.md
│   │   ├── module-map.md
│   │   ├── chapter-map.md
│   │   ├── learning-outcomes.md
│   │   ├── dependency-map.md
│   │   ├── chapters/
│   │   ├── labs/
│   │   ├── assessments/
│   │   ├── projects/
│   │   ├── references/
│   │   └── reviews/
│   ├── mentor/
│   │   └── volume-{nn}/chapter-{nn}/
│   └── publishing/
├── knowledge/
│   ├── registry/
│   ├── graph/
│   ├── research-briefs/
│   ├── production-packets/
│   ├── asset-manifests/
│   ├── reviews/
│   └── releases/
├── research/
│   └── {volume-slug}/{chapter-slug}/
├── content/
│   └── {volume-slug}/{chapter-slug}/
├── governance/
│   └── curriculum-registry/
└── blueprint-v2/
```

### Authority by path

| Path | Responsibility | Authority |
| --- | --- | --- |
| `docs/standards/` | Canonical standards | Authoritative |
| `docs/academies/` | Portfolio navigation | Derived |
| `docs/{nn}-{slug}/` | Canonical Volume package | Authoritative by document type |
| `knowledge/registry/` | Atomic knowledge records | Authoritative KOS |
| `knowledge/production-packets/` | Machine-readable production contracts | Authoritative KOS |
| `research/` | Human-readable research working set | Derived or staged |
| `content/` | Pre-integration content production | Draft staging |
| `docs/mentor/` | Reviewed AI Mentor packages | Derived |
| `governance/curriculum-registry/` | Discovery and migration analysis | Derived |
| `blueprint-v2/` | Non-canonical design package | Informational |

### Path rules

- Canonical Volume directories stay directly under `docs/`.
- Academy views link to Volumes; they never contain duplicate Chapter files.
- Staged content moves into the canonical Volume only through review.
- AI Mentor packages reference KOS records rather than copying them.
- Generated derivatives record sources, tool versions, dates, and checksums.
- Empty future Academy or Volume directories are not created.
- All new directories and content files use lowercase kebab-case.

### Migration compatibility

The design requires no relocation of `docs/01-programming/`. Existing content
and knowledge paths remain readable. New catalog and mentor paths are additive
and require approval before creation.

## Validation

- Existing canonical paths remain unchanged.
- Academy navigation cannot become duplicate curriculum authority.
- Ownership is explicit for every proposed root.
- Naming follows lowercase kebab-case.
- No future content directory is created by this Sprint.

## References

- [Repository Standard v2](../docs/standards/repository-standard-v2.md)
- [Volume Standard v2](../docs/standards/volume-standard-v2.md)
- [Repository Production Structure](../docs/production/repository-production-structure.md)
- [Repository Design Rules](./13-repository-standards.md)
