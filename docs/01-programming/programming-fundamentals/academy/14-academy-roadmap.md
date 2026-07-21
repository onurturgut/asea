---
document_type: "supporting-document"
supporting_document_id: "V01-SD-ROAD-002"
supporting_document_type: "Roadmap"
title: "Programming Fundamentals Academy Roadmap"
version: "0.1.1"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-DMAP-002"
  - "V01-SD-PROJ-001"
derived_from:
  - "./02-learning-path.md"
  - "./03-module-registry.md"
  - "./10-assessment-framework.md"
  - "./11-project-framework.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-21"
---

# Programming Fundamentals Academy Roadmap

## Purpose

Define the production and learner milestone sequence from Academy entry to
final completion.

## Scope

The roadmap contains architecture milestones and gates only. It does not
schedule unpublished content or create lesson materials.

## Ownership

Canonical prerequisites and Project contracts remain owned by their source
registries. This roadmap owns the derived milestone presentation.

## Content

### Learning path

```text
Entry
-> Computational Thinking
-> Data and Expressions
-> JavaScript Runtime and Types
-> Control Flow
-> Functions
-> Functional JavaScript
-> Structured Data
-> Objects and Collections
-> Numeric and Temporal Computing
-> Algorithms
-> Errors and Modules
-> Reliability and Delivery
-> Final Project
```

### Milestones

| Milestone | Curriculum scope | Required evidence |
| ---: | --- | --- |
| 1 | `M01` | `C01`-`C04`, Module review, `P01` |
| 2 | `M02` | `C05`-`C08`, Module review, `P02` |
| 3 | `M08` | `C38`, `C29`, runtime/type review |
| 4 | `M03` | `C09`-`C12`, Module review, `P03` |
| 5 | `M04` | `C13`-`C16`, Module review, `P04` |
| 6 | `M10` | `C32`, `C33`, functional review |
| 7 | `M05` | `C17`-`C20`, Module review, `P05` |
| 8 | `M09` | `C30`, `C31`, object/collection review |
| 9 | `M11` | `C34`, `C35`, numeric/temporal review; `P07` preparation only |
| 10 | `M06` | `C21`-`C23`, Module review, `P06`, then `P07` |
| 11 | `M12` | `C36`, `C37`, exception/module review |
| 12 | `M07` | `C24`-`C28`, reliability review, `P08` |
| 13 | Academy completion | `CP01`, final assessment, technical defense, self-assessment |

All abbreviated IDs inherit the `V01-` prefix.

`P07` begins only after `P01`-`P06` have passed. `P08` begins only after
`P07` and its mapped reliability prerequisites have passed. `CP01` remains the
final Project after `P01`-`P08`.

### Difficulty progression

```text
Guided Beginner
-> Independent Beginner
-> JavaScript-specific transition
-> Integrated Intermediate
-> Reliability and delivery defense
```

Difficulty increases through task independence, number of interacting
constraints, failure-path coverage, and required design justification—not
through unexplained syntax volume.

### Production readiness gates

For each Chapter:

```text
Architecture metadata
-> research
-> production packet
-> draft Lesson
-> assessment assets
-> educational quality assurance
-> release review
```

Sprint 01 completes only the architecture-metadata stage.

### Review strategy

- Curriculum Review validates sequencing and outcome coverage.
- Technical Review validates runtime and engineering accuracy boundaries.
- Assessment Review validates measurable evidence.
- Repository Review validates metadata, IDs, links, and paths.
- Final Curriculum Review decides whether Sprint 02 can approve the Academy
  architecture for content production.

No new review status or approval enum is introduced.

## Validation

- Milestones cover all 12 Modules.
- Project milestones cover `P01`-`P08` and `CP01`.
- Final milestone follows all prerequisite gates.
- Production roadmap creates no educational content.

## References

- [Learning Path](./02-learning-path.md)
- [Assessment Framework](./10-assessment-framework.md)
- [Project Framework](./11-project-framework.md)
- [Completion Requirements](./15-completion-requirements.md)
