---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-038"
supporting_document_type: "Index"
title: "ASEA Blueprint v2 Design Overview"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-STD-INDEX-002"
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-CURRICULUM-002"
  - "ASEA-STD-VOLUME-002"
  - "ASEA-STD-CHAPTER-002"
derived_from:
  - "../governance/curriculum-registry/10-governance-recommendation.md"
  - "../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md"
---

# ASEA Blueprint v2 Design Overview

## Purpose

This package designs a scalable curriculum architecture for ASEA while
preserving Standards v2, the frozen `V01-BP01` contract, and all existing
canonical identifiers.

## Scope

The design covers portfolio organization, curriculum hierarchy, templates,
identifiers, versions, assessments, knowledge packages, AI Mentor integration,
folders, and repository conformance. It creates no lesson, Learning Outcome,
Academy release, Volume Blueprint, or canonical migration result.

## Ownership

- **Authority:** Informational design candidate.
- **Canonical standards:** Standards Index v2 and its registered standards.
- **Canonical curriculum:** `V01-BP01` version `1.1.0`.
- **Freeze effect:** None.
- **Activation:** Requires migration, schema review where applicable, validation,
  and Approved reviews.

## Content

### Design thesis

Blueprint v2 separates four concerns:

1. **Portfolio:** Academy views group related Volumes for discovery.
2. **Curriculum:** Volumes, Modules, Chapters, outcomes, and assessments define
   governed learning contracts.
3. **Knowledge:** Sources, Evidence, Claims, Concepts, and graph records ground
   curriculum and content.
4. **Experience:** Lessons, labs, projects, AI Mentor interactions, and
   publishing views present canonical contracts without becoming parallel
   authorities.

### Academy portfolio

The design supports these Academy views:

- Computer Science;
- Programming Fundamentals;
- JavaScript;
- TypeScript;
- HTML;
- CSS;
- Tailwind;
- React;
- Next.js;
- Backend;
- Database;
- DevOps;
- AI Engineering;
- Cyber Security;
- Mobile Development;
- Data Engineering;
- Game Development;
- UI/UX;
- Software Engineering;
- System Design;
- Career;
- Enterprise.

An Academy is a catalog and progression view over one or more canonical
Volumes. It is not a new authority above Standards v2 and does not own duplicate
outcome statements.

### Core hierarchy

```text
ASEA Portfolio
-> Academy View
-> Volume
-> Module
-> Chapter
-> Lesson Experience
-> Practice and Assessment Evidence
```

Learning Outcomes attach to Volume, Chapter, and assessment contracts.
Knowledge packages attach orthogonally through traceability.

### Compatibility commitments

- Preserve `V01-BP01` until an approved atomic migration.
- Preserve every existing `V01-*` identity and meaning.
- Keep canonical Volume paths under `docs/{nn}-{slug}/`.
- Use existing Standards v2 schemas for governed artefacts.
- Use `x-` metadata only for non-canonical design hints.
- Create no Academy or Lesson identifier family without an approved schema
  change.
- Keep one semantic source of truth for every entity.

### Package status

| Area | Design state |
| --- | --- |
| Hierarchy | Defined |
| Identifier compatibility | Defined |
| Versioning | Defined |
| Templates | Defined |
| Assessment model | Defined |
| Knowledge and AI integration | Defined |
| Folder architecture | Defined |
| Canonical activation | Not authorized |

## Validation

- The package is Draft and Informational.
- No canonical Blueprint is created.
- No Standards v2 file is modified.
- No new lifecycle status is introduced.
- Academy and Lesson layers do not duplicate canonical curriculum authority.

## References

- [Standards Index v2](../docs/standards/standards-index-v2.md)
- [Curriculum Registry Recommendation](../governance/curriculum-registry/10-governance-recommendation.md)
- [Blueprint Migration Record](../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md)
- [Blueprint v2 Specification](./14-blueprint-v2-specification.md)
