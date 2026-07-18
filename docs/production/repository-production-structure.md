---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-020"
supporting_document_type: "Compatibility Report"
title: "ASEA Repository Production Structure"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Repository Architect"
source_ids:
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-KOS-016"
derived_from:
  - "ASEA-SD-IDX-033"
---

# ASEA Repository Production Structure

## Purpose

This document defines the target repository layout for content production while
preserving existing canonical paths.

## Scope

It assigns ownership and path responsibilities for research, production,
courses, lessons, assessments, labs, slides, flashcards, mentor assets, and
publishing. Only `docs/production/` is created in this sprint; the remaining
paths are created when their first authorized artefact exists.

## Ownership

- Existing `docs/`, `knowledge/`, Volume, and KOS paths remain unchanged.
- Repository Standard v2 owns naming, links, metadata, IDs, and release records.
- KOS Folder Structure owns operational registry paths.
- This document proposes additive production paths and creates no canonical
  educational object.
- Owner: Repository Architect.

## Content

### Target Layout

```text
docs/
├── production/
│   ├── production-architecture.md
│   ├── research-engine.md
│   ├── research-packet-standard.md
│   ├── production-packet-standard.md
│   ├── lesson-authoring-standard.md
│   ├── lesson-template.md
│   ├── output-types.md
│   ├── production-workflows.md
│   ├── repository-production-structure.md
│   ├── production-governance.md
│   └── production-lifecycle.md
├── research/
│   └── volume-{nn}/chapter-{nn}/
├── courses/
│   └── volume-{nn}/
├── lessons/
│   └── volume-{nn}/chapter-{nn}/
├── assessments/
│   └── volume-{nn}/chapter-{nn}/
├── labs/
│   └── volume-{nn}/chapter-{nn}/
├── slides/
│   └── volume-{nn}/chapter-{nn}/
├── flashcards/
│   └── volume-{nn}/chapter-{nn}/
├── mentor/
│   └── volume-{nn}/chapter-{nn}/
└── publishing/
    └── releases/

knowledge/
├── research-briefs/
├── production-packets/
├── registry/
├── asset-manifests/
├── reviews/
└── releases/
```

The tree is a path contract, not an instruction to duplicate existing Volume
content or KOS records.

### Path Responsibilities

| Path | Responsibility | Authority |
| --- | --- | --- |
| `docs/production/` | Production architecture and Draft production standards | Governance documentation |
| `docs/research/` | Human-readable Research Packet indexes and review notes | Derived from KOS records |
| `knowledge/research-briefs/` | Machine-readable Research Brief records | KOS canonical |
| `knowledge/production-packets/` | Machine-readable CPP records | KOS canonical |
| `docs/courses/` | Course-level navigation and release composition | Derived |
| `docs/lessons/` | Learner-facing Chapter sources when authorized | Chapter canonical scope |
| `docs/assessments/` | Governed assessment artefacts | Assessment owner |
| `docs/labs/` | Governed Lab artefacts | Lab owner |
| `docs/slides/` | Editable slide sources | Asset owner |
| `docs/flashcards/` | Governed active-recall assets | Asset owner |
| `docs/mentor/` | AI Mentor grounding and behavior assets | AI and governance owner |
| `docs/publishing/` | Release manifests, publishing records, and derived outputs | Release owner |

### Naming Rules

- Directories and files use lowercase kebab-case.
- Canonical IDs remain uppercase ASCII inside metadata.
- Volume and Chapter path segments use zero-padded numbers.
- Generated files record their authoritative source and are never edited
  manually.
- Internal links are relative.
- Empty directories are not created solely to represent future architecture.

### Duplication Controls

- A Lesson does not copy atomic Source, Evidence, Claim, or Concept records.
- A Research Packet links to canonical KOS records.
- Course navigation links to Lessons rather than duplicating lesson prose.
- PDF and rendered slides are Derived from editable sources.
- AI Mentor Knowledge references approved Claims and does not become a Claim
  registry.

## Validation

The structure is additive, lowercase kebab-case, and compatible with existing
repository and KOS paths. No future content directory was created prematurely.

## References

- [Production Architecture](./production-architecture.md)
- [Production Workflows](./production-workflows.md)
- [Repository Standard v2](../standards/repository-standard-v2.md)
- [KOS Folder Structure](../knowledge-operating-system/16-folder-structure.md)
