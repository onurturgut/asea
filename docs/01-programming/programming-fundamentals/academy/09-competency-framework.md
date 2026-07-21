---
document_type: "supporting-document"
supporting_document_id: "V01-SD-IDX-008"
supporting_document_type: "Index"
title: "Programming Fundamentals Academy Competency Framework"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-002"
  - "V01-SD-LO-002"
derived_from:
  - "../../../../governance/blueprint-v2/02-canonical-schema.md"
  - "../../../../governance/blueprint-v2/04-chapter-registry.md"
  - "../../../../governance/blueprint-v2/05-learning-outcome-registry.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Competency Framework

## Purpose

Group canonical Learning Outcomes into observable competency categories for
curriculum planning, assessment, and graduate-profile reporting.

## Scope

Competency keys are local derived catalog keys. They are not canonical IDs and
do not replace Learning Outcomes.

## Ownership

The canonical outcome registry owns measurable performance. This document owns
only the Academy-level aggregation labels and proficiency descriptions.

## Content

### Proficiency scale

| Level | Evidence |
| --- | --- |
| Emerging | Explains or traces a bounded example with guidance. |
| Developing | Applies the competency independently in a familiar task. |
| Proficient | Integrates the competency, handles edge cases, and defends decisions. |

### Competency catalog

| Local key | Competency | Chapters | Outcomes | Exit evidence |
| --- | --- | --- | --- | --- |
| `problem-framing` | Define goals, inputs, outputs, constraints, assumptions, and edge cases. | `C01`, `C03` | `LO001`-`LO002`, `LO005` | Problem contract |
| `execution-tracing` | Predict and record observable program state step by step. | `C02`, `C04`, `C19` | `LO003`-`LO004`, `LO006`, `LO029`-`LO030` | Correct trace |
| `algorithm-design` | Produce finite, testable, language-independent procedures. | `C04`, `C19` | `LO006`, `LO029`-`LO030` | Algorithm and termination evidence |
| `data-modeling` | Select representations, fields, types, invariants, and boundaries. | `C05`, `C08`, `C18`, `C20`, `C30` | `LO007`-`LO008`, `LO012`, `LO027`-`LO028`, `LO031`, `LO049`-`LO050` | Valid-state model |
| `state-reasoning` | Trace bindings, mutation, lifetime, capture, and side effects. | `C06`, `C11`, `C15`, `C33` | `LO009`-`LO010`, `LO017`, `LO022`-`LO023`, `LO055`-`LO056` | State and lifetime analysis |
| `expression-evaluation` | Evaluate operators, grouping, types, conversion, equality, and predicates. | `C07`, `C09`, `C29` | `LO011`, `LO013`-`LO014`, `LO047`-`LO048` | Expression/type trace |
| `runtime-reasoning` | Explain runtime, host, tooling, identity, mutation, and execution assumptions. | `C29`, `C30`, `C38` | `LO047`-`LO050`, `LO065`-`LO066` | Reproducible runtime contract |
| `control-flow-design` | Design complete decisions and terminating repetition. | `C09`-`C12` | `LO013`-`LO018` | Branch/loop evidence |
| `functional-decomposition` | Define function contracts and cohesive responsibility boundaries. | `C13`-`C16` | `LO019`-`LO024` | Function map and contracts |
| `higher-order-reasoning` | Apply callbacks and closures while tracing invocation and retained state. | `C32`, `C33` | `LO053`-`LO056` | Callback/closure analysis |
| `collection-processing` | Traverse and transform collections, arrays, and text. | `C17`, `C20`, `C31` | `LO025`-`LO026`, `LO031`, `LO051`-`LO052` | Transformation pipeline |
| `numeric-temporal-reliability` | Handle precision, rounding, dates, time zones, and invalid values. | `C34`, `C35` | `LO057`-`LO060` | Boundary strategy |
| `algorithm-analysis` | Trace, compare, and justify search, sort, and complexity choices. | `C21`-`C23` | `LO032`-`LO037` | Trade-off memo |
| `failure-engineering` | Classify, reproduce, isolate, and contain failures. | `C24`, `C25`, `C36` | `LO038`-`LO041`, `LO061`-`LO062` | Failure contract and debug log |
| `verification-refactoring` | Design tests and improve structure without changing behavior. | `C26`, `C27` | `LO042`-`LO045` | Test and refactoring evidence |
| `program-delivery` | Organize modules and deliver a traceable, reviewed small program. | `C16`, `C28`, `C37`, `C38` | `LO024`, `LO046`, `LO063`-`LO066` | Delivery dossier and defense |

All abbreviated IDs inherit the `V01-` prefix.

### Difficulty progression

| Phase | Expected competency level |
| --- | --- |
| `M01`-`M02` | Emerging mental models; guided application |
| `M08`, `M03`, `M04` | Developing independent reasoning |
| `M10`, `M05`, `M09`, `M11` | Integrated data and language behavior |
| `M06`, `M12` | Intermediate analysis and boundary design |
| `M07` | Proficient integration and technical defense |

## Validation

- Competency categories: 16.
- Categories with Chapter mappings: 16.
- Categories with outcome mappings: 16.
- Canonical outcomes altered: 0.
- Unsupported canonical competency IDs introduced: 0.

## References

- [Canonical Learning Outcome Registry](../../../../governance/blueprint-v2/05-learning-outcome-registry.md)
- [Chapter Registry](./04-chapter-registry.md)
- [Assessment Framework](./10-assessment-framework.md)
