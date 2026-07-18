---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-023"
supporting_document_type: "Compatibility Report"
title: "ASEA Current Blueprint Analysis"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-001"
derived_from:
  - "../../docs/01-programming/volume-blueprint.md"
  - "../../docs/01-programming/manifest.md"
  - "../../docs/01-programming/reviews/volume-01-freeze-record.md"
---

# ASEA Current Blueprint Analysis

## Purpose

This document records a read-only analysis of the current ASEA curriculum
architecture. It establishes the verified baseline for future curriculum
evolution without changing the active Blueprint Freeze.

## Scope

The analysis covers the repository-level academy foundation, Volume 00, the
canonical Volume 01 Blueprint, produced lesson candidates, naming, versioning,
dependencies, coverage, consistency, and long-term growth constraints.

## Ownership

- **Authority:** Derived analysis.
- **Canonical governance authority:** Standards Index v2.
- **Canonical curriculum authority:** `V01-BP01` version `1.1.0`.
- **Active freeze:** `V01-FR-BP-001`.
- **Change effect:** None. This document cannot replace or amend the Blueprint.

## Content

### Verified inventory

| Entity | Verified state |
| --- | --- |
| Repository academy | ASEA — Aisurix Software Engineering Academy |
| Academy foundation | Volume 00 with five educational Chapters |
| Canonical technical Volume | `V01` — Programming Foundations |
| Canonical Modules | 7 |
| Canonical Chapters | 28 |
| Canonical Learning Outcomes | 46 |
| Canonical Chapter Blueprints | 28 |
| Planned Chapter Labs | 28 |
| Planned Mini Projects | 6 |
| Planned Capstones | 1 |
| Produced canonical Chapter files | 1 Draft (`V01-C01`) |
| Produced external lesson packages | 1 Variables package mapped to `V01-C06` |

Volume 00 contains meaningful educational prose, but its `README.md` remains a
minimal legacy skeleton without the current Volume metadata contract. Volume 01
is the only fully governed technical curriculum architecture.

### Architecture strengths

- Canonical identifiers are consistent across Blueprint, Modules, Chapters,
  outcomes, labs, assessments, and projects.
- The learning sequence is dependency-driven and acyclic.
- All 46 outcomes use measurable evidence and Revised Bloom levels.
- Every planned Chapter has a Blueprint and a lab contract.
- The curriculum teaches durable engineering models before language syntax.
- The active Freeze has review, validation, manifest, and authorization
  evidence.

### Structural limitations

- Repository-wide Academy, Volume, Module, Chapter, lesson, and outcome
  discovery is distributed across several files.
- The canonical hierarchy models one technical Volume well but has no active
  cross-Academy registry.
- Volume 00 is not governed at the same metadata maturity as Volume 01.
- Lesson production exists in two paths:
  `docs/01-programming/chapters/` and
  `content/programming-fundamentals/`.
- The Variables lesson package uses canonical outcomes but is not itself a
  canonical Chapter record.
- The current language-neutral scope does not fully define JavaScript,
  TypeScript, or framework readiness.
- Future Academies do not yet have IDs, dependency contracts, owners, or
  lifecycle records.

### Naming and versioning

The `V01-*` namespace is coherent and must remain stable. File names are
lowercase kebab-case in the canonical Volume. The main inconsistency is
terminological rather than syntactic: repository materials use both
"Programming Foundations" and "Programming Fundamentals." The canonical name
is **Programming Foundations** because it is declared by `V01-BP01`.

Version values describe different artefact lifecycles:

- Blueprint: `1.1.0`, Stable and Frozen.
- Volume README: `0.1.0`, Draft.
- Chapter 01: `0.1.0`, Draft.
- Supporting maps: independently versioned Stable documents.

Independent SemVer is valid, but repository-wide status views must avoid
presenting a Draft content artefact as equivalent to a Stable frozen Blueprint.

### Long-term suitability

The current architecture is a strong foundation, not a complete multi-Academy
curriculum. It scales structurally through the `V{NN}` namespace and explicit
prerequisites, but it does not yet provide the cross-Academy registry,
specialization taxonomy, or transition contracts needed for the full ASEA
vision.

## Validation

| Check | Result |
| --- | --- |
| Active Blueprint identified | PASS |
| Freeze state identified | PASS |
| Module count | PASS — 7 |
| Chapter count | PASS — 28 |
| Learning Outcome count | PASS — 46 |
| Canonical IDs renamed | PASS — none |
| Canonical artefacts modified | PASS — none |
| Blueprint v2 created | PASS — no |

## References

- [Volume 01 Blueprint](../../docs/01-programming/volume-blueprint.md)
- [Volume 01 Manifest](../../docs/01-programming/manifest.md)
- [Volume 01 Freeze Record](../../docs/01-programming/reviews/volume-01-freeze-record.md)
- [Volume 01 README](../../docs/01-programming/README.md)
- [Volume 00 README](../../docs/00-academy/README.md)
