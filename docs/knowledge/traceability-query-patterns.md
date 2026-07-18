---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-027"
supporting_document_type: "Index"
title: "ASEA Traceability Query Patterns"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-SD-IDX-023"
  - "ASEA-SD-IDX-024"
derived_from:
  - "ASEA-SD-IDX-023"
  - "ASEA-SD-IDX-024"
---

# ASEA Traceability Query Patterns

## Purpose

This document defines deterministic, canonical query patterns for future AI,
validation, authoring, and review systems without implementing application
code.

## Scope

The patterns query the eight-layer Volume 01 traceability chain in forward,
reverse, or bounded-neighborhood directions.

## Ownership

- **Query semantics:** Derived from the Traceability Engine.
- **Record meaning:** Remains with canonical registries.
- **Owner:** Knowledge Architect.

## Content

### Input Contract

Every query provides:

| Field | Requirement |
| --- | --- |
| `input_id` | One valid canonical Source, Evidence, Claim, Concept, Outcome, Assessment, Chapter, or Module ID |
| `direction` | `forward`, `reverse`, or `both` |
| `target_types` | Optional bounded list of requested canonical object types |
| `include_non_operational` | Defaults to false; Proposed Sources remain excluded |
| `include_review_state` | Defaults to true for Claims |
| `generated_on` | ISO date recorded by the caller |

These are query parameters, not new repository lifecycle enums.

### Output Contract

Results contain the input identity, resolved type, ordered nodes, typed edges,
record versions, source document versions, lifecycle/review state, generation
date, completeness result, and any access or lifecycle exclusions.

### Canonical Query Patterns

#### Source Impact Query

Given a Source:

1. Select Evidence whose `source_id` equals the Source ID.
2. Select Claims containing those Evidence IDs.
3. Resolve primary Concepts through the Claim Registry view.
4. Resolve Outcomes through the Concept Registry.
5. Resolve Assessments, Chapters, and Modules through `assessment.md`.
6. Return all unique complete paths and descendant counts.

#### Claim Provenance Query

Given a Claim:

1. Read its `evidence_ids`.
2. Resolve each Evidence and its exact locator.
3. Resolve each Evidence `source_id`.
4. Return confidence, freshness, review decision, Evidence, and Source versions.

#### Concept Support Query

Given a Concept:

1. Select every mapped Claim.
2. Expand each Claim to Evidence and Sources.
3. Return Claim review state and contradiction IDs.

#### Assessment Coverage Query

Given an Assessment:

1. Select canonical Outcome rows with that Assessment ID.
2. Resolve Concepts mapped to those Outcomes.
3. Resolve Claims, Evidence, and Sources.
4. Return the owning Chapter and Module.

#### Chapter Provenance Query

Given a Chapter:

1. Resolve its Assessments and Outcomes from `assessment.md`.
2. Resolve Concepts from the Concept Registry.
3. Resolve Claims, Evidence, and Sources.
4. Return unique Sources plus every supporting path.

#### Module Knowledge Query

Given a Module:

1. Resolve all Chapters in the Module.
2. Traverse Chapter → Assessment → Outcome → Concept → Claim → Evidence → Source.
3. Return coverage, critical dependencies, and review-state distributions.

### Determinism and Safety Rules

- Reject unknown or malformed IDs.
- Never infer a missing edge.
- Preserve fan-out and fan-in.
- Return canonical IDs before human-readable titles.
- Sort by layer rank and canonical ID.
- Distinguish `Validated` from `Approved`.
- Report excluded Proposed Sources separately from operational orphans.
- Never treat AI-generated prose as Source, Evidence, or Claim.

## Validation

All eight canonical input types have forward or reverse patterns. Every pattern
terminates, uses canonical owners, and introduces no new relationship.

## References

- [Canonical Traceability Engine](./traceability-engine.md)
- [Forward Traceability](./forward-traceability.md)
- [Reverse Traceability](./reverse-traceability.md)
- [Traceability Governance](./traceability-governance.md)
