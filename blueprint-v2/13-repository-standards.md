---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-031"
supporting_document_type: "Compatibility Report"
title: "ASEA Blueprint v2 Repository Conformance Profile"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Repository Architect"
source_ids:
  - "ASEA-STD-INDEX-002"
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-CURRICULUM-002"
  - "ASEA-STD-VOLUME-002"
  - "ASEA-STD-CHAPTER-002"
derived_from:
  - "./03-identifier-standard.md"
  - "./04-versioning-policy.md"
  - "./12-folder-architecture.md"
---

# ASEA Blueprint v2 Repository Conformance Profile

## Purpose

This document consolidates the existing repository rules that Blueprint v2
designs must satisfy. Despite its file name, it is not a new standard and does
not override Standards v2.

## Scope

The profile covers authority, metadata, naming, links, Markdown, identifiers,
versions, statuses, traceability, reviews, validation, manifests, migration,
and canonical activation.

## Ownership

- Standards Index v2 resolves authority and precedence.
- Repository Standard v2 owns common repository contracts.
- Curriculum Standard v2 owns learning and assessment meaning.
- Volume Standard v2 owns Blueprint and Volume packaging.
- Chapter Standard v2 owns learner-facing Chapter structure.
- Governance Extension owns review, migration, validation, and freeze records.

## Content

### Authority rules

1. Every semantic field has one authoritative owner.
2. Derived indexes link to canonical records and do not copy their meaning.
3. Academy views cannot override a Volume.
4. Lesson views cannot override a Chapter.
5. AI Mentor packages cannot override Claims, outcomes, or assessments.
6. A candidate remains non-canonical until approved activation.

### Metadata rules

- Every governed Markdown document starts with YAML Front Matter.
- `document_type`, type-specific ID, `title`, SemVer `version`, and lifecycle
  `status` are mandatory.
- Unknown fields use the `x-` prefix until registered.
- Empty relation fields use empty YAML arrays.
- Dates use `YYYY-MM-DD`.
- A document cannot mix incompatible schema versions.

### Naming rules

- Directories and content files use lowercase kebab-case.
- Volume directories use `{nn}-{volume-slug}`.
- Ordered file names use zero-padded numeric prefixes.
- Canonical machine IDs remain uppercase ASCII.
- File numbering and ID numbering agree where a canonical file contract
  requires sequence alignment.
- Internal links are relative and must resolve.

### Markdown and asset rules

- At most one H1 per Markdown file.
- Heading levels are not skipped.
- Required H2 names and order remain unchanged.
- Code blocks use language identifiers.
- Mermaid blocks use `mermaid`.
- Images have meaningful alternative text.
- Generated assets record source, generator version, date, and checksum.

### Curriculum integrity

- Prerequisites exist and form an acyclic graph.
- Every outcome maps to Chapter instruction and Assessment evidence.
- Applied outcomes map to practical evidence.
- Projects and Capstone use only taught technologies.
- Content, examples, assessments, and outcome difficulty align.
- Learner-facing Turkish and technical terminology follow the repository
  language profile.

### Review and lifecycle

```text
Draft -> Review -> Stable -> Deprecated -> Archived
```

Blueprints additionally use:

```text
Draft/Unfrozen -> Review/Unfrozen -> Stable/Frozen
```

Technical, Content, Repository, and Final decisions must be Approved where the
governing standard requires them. Validation does not imply approval.

### Canonical activation

A Blueprint migration activates only when:

- decision and migration records satisfy their schemas;
- target artefacts pass validation;
- required reviews are Approved;
- manifest counts and checksums reconcile;
- rollback is documented;
- one atomic switch prevents concurrent canonical versions;
- a new immutable Freeze Record is issued.

### Required automated checks

- YAML parse and schema validation;
- duplicate and malformed ID detection;
- relative link validation;
- Markdown lint;
- dependency cycle detection;
- traceability coverage;
- placeholder and legacy detection;
- manifest count and checksum validation;
- status and SemVer consistency.

## Validation

- Every rule resolves to an existing canonical owner.
- No rule weakens or replaces Standards v2.
- No new document type, status, or canonical ID family is introduced.
- Blueprint v2 activation remains gated.
- Repository compatibility is explicit and testable.

## References

- [Standards Index v2](../docs/standards/standards-index-v2.md)
- [Repository Standard v2](../docs/standards/repository-standard-v2.md)
- [Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- [Volume Standard v2](../docs/standards/volume-standard-v2.md)
- [Chapter Standard v2](../docs/standards/chapter-standard-v2.md)
- [Governance Index](../docs/standards/governance/09-governance-index.md)
