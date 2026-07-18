---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-028"
supporting_document_type: "Compatibility Report"
title: "ASEA Blueprint v2 Identifier Design"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Repository Architect"
source_ids:
  - "ASEA-STD-REPOSITORY-002"
derived_from:
  - "./02-curriculum-hierarchy.md"
  - "../governance/curriculum-registry/02-canonical-structure.md"
---

# ASEA Blueprint v2 Identifier Design

## Purpose

This document defines how Blueprint v2 uses existing identifiers and where it
must avoid inventing unsupported identity families.

## Scope

The design covers Academy views, Volumes, Modules, Chapters, outcomes,
assessments, Lesson experiences, knowledge records, and production packets.

## Ownership

- Repository Standard v2 remains the only canonical identifier owner.
- Existing IDs are immutable and globally unique.
- This design cannot reserve or activate new canonical IDs.
- Unsupported identity needs require a reviewed standard change before use.

## Content

### Existing canonical formats

| Entity | Format | Example |
| --- | --- | --- |
| Volume | `V{NN}` | `V01` |
| Module | `V{NN}-M{NN}` | `V01-M01` |
| Chapter | `V{NN}-C{NN}` | `V01-C01` |
| Learning Outcome | `V{NN}-LO{NNN}` | `V01-LO001` |
| Lab | `V{NN}-C{NN}-L{NN}` | `V01-C01-L01` |
| Quiz | `V{NN}-C{NN}-QZ{NN}` | `V01-C01-QZ01` |
| Exercise | `V{NN}-C{NN}-EX{NN}` | `V01-C01-EX01` |
| Challenge | `V{NN}-C{NN}-CH{NN}` | `V01-C01-CH01` |
| Interview | `V{NN}-C{NN}-IV{NN}` | `V01-C01-IV01` |
| Assessment | `V{NN}-C{NN}-AS{NN}` | `V01-C01-AS01` |
| Project | `V{NN}-P{NN}` | `V01-P01` |
| Capstone | `V{NN}-CP{NN}` | `V01-CP01` |
| Blueprint | `V{NN}-BP{NN}` | `V01-BP01` |

### Academy identity

Standards v2 has no `academy_id` schema. Blueprint v2 therefore models an
Academy as a catalog entry with:

- a stable lowercase kebab-case `academy_slug`;
- a human-readable title;
- a list of canonical Volume IDs;
- derived prerequisite and completion summaries.

Until a schema owner approves an Academy document type, the slug may appear
only in an Index record or an `x-academy-slug` extension field. It is not a
canonical machine ID.

### Lesson identity

Standards v2 treats the Chapter as the canonical learner-facing instructional
contract. A Lesson experience therefore uses the Chapter ID it renders.

If presentation requires segments, each segment uses a local lowercase key such
as `mental-model` or `guided-practice`. Segment keys:

- are unique only inside one Chapter version;
- do not receive canonical outcomes;
- are not referenced as prerequisites;
- cannot replace the Chapter ID.

### Knowledge and production identities

Blueprint v2 references established KOS identities rather than redefining them:

- Sources: `ASEA-SRC-*`;
- Evidence: existing Evidence Registry IDs;
- Claims: `ASEA-CLM-*`;
- Concepts: existing Concept Registry IDs;
- Chapter Production Packets: `V{NN}-C{NN}-CPP-{NNN}`.

Exact KOS formats remain owned by their registered schemas.

### Allocation rules

1. Never reuse a deleted or superseded ID.
2. Never renumber an existing entity to match navigation order.
3. Append new IDs after the highest allocated sequence in scope.
4. Record splits and merges in a migration map.
5. Keep public slugs independent from immutable machine IDs.
6. Validate repository-wide uniqueness before Review.

## Validation

- No new canonical ID family is introduced.
- Academy and Lesson needs are represented without parallel authority.
- Existing `V01-*` IDs remain valid.
- New candidate allocation requires Blueprint and migration approval.
- KOS identity ownership remains unchanged.

## References

- [Repository Standard v2](../docs/standards/repository-standard-v2.md)
- [Migration Standard](../docs/standards/governance/06-migration-standard.md)
- [Curriculum Hierarchy](./02-curriculum-hierarchy.md)
- [Repository Design Rules](./13-repository-standards.md)
