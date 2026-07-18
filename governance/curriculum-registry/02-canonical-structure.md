---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-037"
supporting_document_type: "Index"
title: "ASEA Canonical Curriculum Structure"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-001"
derived_from:
  - "../../docs/standards/standards-index-v2.md"
  - "../../docs/01-programming/volume-blueprint.md"
  - "../../docs/01-programming/module-map.md"
  - "../../docs/01-programming/chapter-map.md"
  - "../../docs/01-programming/learning-outcomes.md"
---

# ASEA Canonical Curriculum Structure

## Purpose

This index describes how current curriculum entities relate and identifies the
authoritative source for each entity class.

## Scope

The index covers governance authority, Volume, Module, Chapter, lesson,
Learning Outcome, lab, assessment, and project relationships for the existing
repository.

## Ownership

- **Authority:** Derived navigation index.
- **Canonical authority:** The source files linked below.
- **Duplicate source of truth:** Forbidden.
- **Update rule:** Regenerate this view from approved canonical artefacts.

## Content

### Current authority chain

```text
Standards Index v2
└── Curriculum Standard v2
    └── Volume Standard v2
        └── V01-BP01 v1.1.0
            ├── V01 Module Map
            ├── V01 Chapter Map
            ├── V01 Learning Outcomes Registry
            ├── V01 Dependency Map
            ├── V01 Assessment Plan
            ├── V01 Laboratory Plan
            └── V01 Project Plan
```

### Entity hierarchy

```text
ASEA
├── Volume 00 — Academy Blueprint
└── V01 — Programming Foundations
    ├── 7 Modules
    │   └── 28 Chapters
    │       ├── 46 Learning Outcomes
    │       ├── 28 Chapter Blueprints
    │       ├── 28 planned Labs
    │       └── 28 planned Chapter Assessments
    ├── 6 planned Mini Projects
    └── 1 planned Capstone
```

### Authority matrix

| Entity class | Canonical source | Current state |
| --- | --- | --- |
| Governance standards | `docs/standards/standards-index-v2.md` | Stable |
| Volume architecture | `docs/01-programming/volume-blueprint.md` | Stable, Frozen |
| Modules | `docs/01-programming/module-map.md` | Stable |
| Chapters | `docs/01-programming/chapter-map.md` | Stable |
| Learning Outcomes | `docs/01-programming/learning-outcomes.md` | Stable |
| Dependencies | `docs/01-programming/dependency-map.md` | Stable |
| Labs | `docs/01-programming/labs.md` | Stable plan |
| Assessments | `docs/01-programming/assessment.md` | Stable plan |
| Projects | `docs/01-programming/projects.md` | Stable plan |
| Produced Chapter 01 | `docs/01-programming/chapters/01-what-is-programming.md` | Draft |
| Variables lesson package | `content/programming-fundamentals/variables/` | Production candidate |

### Registry role

The Curriculum Registry is currently a derived discovery layer. It does not
become canonical merely by listing entities. If a future approved migration
promotes a repository-wide registry, it must reference canonical records rather
than copy and independently govern their semantic content.

## Validation

- One active canonical Volume Blueprint was found.
- No second canonical Blueprint is introduced by this index.
- Entity counts match the frozen manifest.
- All authority links are relative.
- Lesson candidates are distinguished from canonical architecture.

## References

- [Standards Index v2](../../docs/standards/standards-index-v2.md)
- [Curriculum Standard v2](../../docs/standards/curriculum-standard-v2.md)
- [Volume Standard v2](../../docs/standards/volume-standard-v2.md)
- [Volume 01 Blueprint](../../docs/01-programming/volume-blueprint.md)
- [Volume 01 Freeze Record](../../docs/01-programming/reviews/volume-01-freeze-record.md)
