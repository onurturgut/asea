---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-040"
supporting_document_type: "Index"
title: "ASEA Blueprint v2 Academy View Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-CURRICULUM-002"
derived_from:
  - "./02-curriculum-hierarchy.md"
  - "./03-identifier-standard.md"
---

# ASEA Blueprint v2 Academy View Template

## Purpose

This template defines a consistent derived Academy view that groups canonical
Volumes without duplicating curriculum meaning.

## Scope

It applies to portfolio catalog entries for all 22 planned Academies. It is not
a new Academy document schema and does not authorize an `academy_id`.

## Ownership

- The Academy view owner maintains navigation and pathway rationale.
- Volume owners retain scope, outcome, assessment, and release authority.
- Standards Index v2 remains the governance authority.
- Academy membership changes require link and dependency validation.

## Content

### Required record fields

| Field | Requirement |
| --- | --- |
| Academy title | Unique human-readable portfolio title |
| Academy slug | Stable lowercase kebab-case catalog key |
| Purpose | Bounded domain and learner value |
| Target audience | Entry profiles and intended use |
| Entry competencies | Canonical Volume or outcome references |
| Volume sequence | Ordered canonical Volume IDs |
| Optional branches | Explicit alternative paths |
| Exit competencies | Derived summary linked to canonical outcomes |
| Assessment milestones | Links to Volume-level gates |
| Related Academies | Cross-path navigation only |
| Owner role | Responsible curriculum role |
| Source versions | Pinned Blueprint and Volume versions |
| Review status | Common lifecycle status |

### Required sections

1. Overview
2. Audience
3. Entry Competencies
4. Volume Path
5. Optional Branches
6. Exit Competencies
7. Assessment Milestones
8. Related Academies
9. Version Sources
10. References

### Illustrative record

This example describes shape only and reserves no ID:

```yaml
academy_title: "JavaScript Academy"
academy_slug: "javascript"
authority: "Derived"
volume_ids:
  - "V01"
entry_competency_ids:
  - "V01-LO046"
source_blueprint_versions:
  - "V01-BP01@1.1.0"
status: "Draft"
```

If `academy_slug` is added to governed Front Matter before a registered schema
exists, it must use the extension form `x-academy-slug`.

### Membership rules

- A Volume can appear in multiple Academy views.
- Membership does not change the Volume's ID or owner.
- An Academy cannot override Volume prerequisites.
- Exit competencies must be derived from completed canonical outcomes.
- Optional branches must state which later path they unlock.
- Academy completion cannot be inferred from content page views.

## Validation

- Slug is unique, lowercase, and kebab-case.
- Every Volume ID and pinned version resolves.
- Entry competencies are sufficient for the first Volume.
- Volume order is acyclic.
- Exit competencies are derived from canonical outcomes.
- No curriculum statement is copied as a second authority.

## References

- [Curriculum Hierarchy](./02-curriculum-hierarchy.md)
- [Identifier Design](./03-identifier-standard.md)
- [Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- [Folder Architecture](./12-folder-architecture.md)
