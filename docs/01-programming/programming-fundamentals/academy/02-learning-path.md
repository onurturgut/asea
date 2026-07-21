---
document_type: "supporting-document"
supporting_document_id: "V01-SD-STUDY-003"
supporting_document_type: "Study Plan"
title: "Programming Fundamentals Academy Learning Path"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-002"
  - "V01-SD-DMAP-002"
derived_from:
  - "../../../../governance/blueprint-v2/02-canonical-schema.md"
  - "../../../../governance/blueprint-v2/04-chapter-registry.md"
  - "../../../../governance/blueprint-v2/06-dependency-graph.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Learning Path

## Purpose

Present a complete learner sequence for the frozen Programming Fundamentals
architecture while preserving every canonical prerequisite edge.

## Scope

The path covers entry, 12 Module gates, 38 Chapter-based Lessons, 8 Mini
Projects, the Final Project, and Academy completion. It is a scheduling view,
not a new dependency authority.

## Ownership

- The canonical Chapter Registry owns Chapter prerequisites.
- The canonical Dependency Graph owns the validated derived graph.
- This document owns only the recommended learner-facing sequence and pacing.

## Content

### Path sequence

| Stage | Module | Chapter sequence | Integration gate |
| ---: | --- | --- | --- |
| 1 | `V01-M01` Computational Thinking | `C01`-`C04` | `V01-P01` |
| 2 | `V01-M02` Data and Expressions | `C05`-`C08` | `V01-P02` |
| 3 | `V01-M08` JavaScript Runtime and Type Semantics | `C38`, `C29` | Runtime/type gate |
| 4 | `V01-M03` Control Flow | `C09`-`C12` | `V01-P03` |
| 5 | `V01-M04` Functions and Decomposition | `C13`-`C16` | `V01-P04` |
| 6 | `V01-M10` Functional JavaScript | `C32`, `C33` | Functional gate |
| 7 | `V01-M05` Structured Data and Recursion | `C17`-`C20` | `V01-P05` |
| 8 | `V01-M09` JavaScript Objects and Collections | `C30`, `C31` | Object/collection gate |
| 9 | `V01-M11` Numeric and Temporal Computing | `C34`, `C35` | `V01-P07` preparation |
| 10 | `V01-M06` Algorithms and Efficiency | `C21`-`C23` | `V01-P06` |
| 11 | `V01-M12` Errors and Module Boundaries | `C36`, `C37` | `V01-P08` preparation |
| 12 | `V01-M07` Reliability and Program Design | `C24`-`C28` | `V01-P08`, `V01-CP01` |

`V01-P07` follows completion of `C29`-`C35`, `C38`, and `V01-P01`-`V01-P06`.
`V01-P08` follows `V01-P07`, `C24`-`C27`, and `C36`-`C38`. The Final Project
follows all Chapters and all eight Mini Projects.

### Why this order

- Computational models precede syntax and language behavior.
- Data and expression reasoning precede runtime-specific conversion rules.
- JavaScript runtime and type semantics precede Boolean decisions that depend
  on those semantics.
- Functions precede callbacks and closures.
- Functional behavior precedes the collection pipelines that consume it.
- Object and collection semantics precede algorithmic and numeric integration.
- Error and module boundaries precede final reliability work.
- `C28` remains the terminal integration gate.

### Canonical topological order

```text
C01 -> C02 -> C03 -> C04 -> C05 -> C06 -> C07 -> C08 -> C38 -> C29
-> C09 -> C10 -> C11 -> C12 -> C13 -> C14 -> C15 -> C16 -> C19
-> C36 -> C32 -> C33 -> C17 -> C37 -> C18 -> C20 -> C24 -> C30
-> C31 -> C22 -> C34 -> C21 -> C35 -> C23 -> C25 -> C26 -> C27
-> C28
```

Independent nodes may be scheduled differently only when every direct
prerequisite remains satisfied.

### Recommended study cycle

Each Chapter-based Lesson follows:

1. prerequisite evidence check;
2. concept and mental-model study;
3. prediction and trace;
4. guided practice;
5. independent practical evidence;
6. Chapter assessment;
7. reflection and remediation.

### Pacing profiles

| Profile | Core hours per week | Core duration | Project scheduling |
| --- | ---: | --- | --- |
| Intensive | 20 | 5-6 weeks | Dedicated integration blocks |
| Balanced | 10 | 10-12 weeks | One Project block after each gate |
| Sustainable | 6 | 17-20 weeks | Projects split across two or more weeks |

Project hours are additional to the 100-120 core hours.

### Progression gates

- Chapter gate: mapped outcome evidence and Chapter assessment meet the
  published rubric threshold.
- Module gate: all member Chapter outcomes are demonstrated and the Module
  assessment has no unresolved critical gap.
- Project gate: required Chapters and earlier Projects are complete.
- Final gate: all 66 outcomes have evidence, all Projects pass, and the final
  technical defense is complete.

## Validation

- All 38 Chapters occur exactly once in the recommended path.
- The order is compatible with the canonical acyclic dependency graph.
- All 12 Modules occur exactly once.
- Project prerequisites are preserved.
- `C28` remains terminal.

## References

- [Canonical Chapter Registry](../../../../governance/blueprint-v2/04-chapter-registry.md)
- [Canonical Dependency Graph](../../../../governance/blueprint-v2/06-dependency-graph.md)
- [Module Registry](./03-module-registry.md)
- [Academy Roadmap](./14-academy-roadmap.md)
