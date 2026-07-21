---
document_type: "supporting-document"
supporting_document_id: "V01-SD-CMAP-003"
supporting_document_type: "Chapter Map"
title: "Programming Fundamentals Academy Chapter Registry"
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

# Programming Fundamentals Academy Chapter Registry

## Purpose

Define production metadata for every canonical Chapter without generating
learner-facing content.

## Scope

The registry covers all 38 Chapters. Each Chapter exposes one Lesson
experience using the same canonical Chapter identity and Blueprint version.

## Ownership

Canonical Chapter identity, membership, and prerequisite meaning remain owned
by `V01-SD-CMAP-002`. This document adds only derived production metadata:
bounded purpose, workload, competency labels, and Lesson-view declaration.

## Content

### Chapter records

| Chapter | Module | Purpose and description | Lesson list | Hours | Outcomes | Competencies | Dependencies |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `V01-C01` What Is Programming? | `M01` | Distinguish programs, algorithms, instructions, and computation; convert an everyday process into precise steps. | `V01-C01` Lesson view | 2.5 | `LO001`-`LO002` | problem framing, algorithm design | `V00` |
| `V01-C02` How Computers Execute Programs | `M01` | Model source, runtime, memory, input, output, and observable state transitions. | `V01-C02` Lesson view | 2.5 | `LO003`-`LO004` | execution tracing | `C01` |
| `V01-C03` Problem Definition and Decomposition | `M01` | Turn ambiguity into inputs, outputs, constraints, assumptions, edge cases, and bounded subproblems. | `V01-C03` Lesson view | 2.5 | `LO005` | problem framing | `C01`, `C02` |
| `V01-C04` Algorithms, Pseudocode, and Tracing | `M01` | Design a finite language-independent algorithm and verify it with traces. | `V01-C04` Lesson view | 2.5 | `LO006` | algorithm design, execution tracing | `C03` |
| `V01-C05` Values and Data Types | `M02` | Classify values by type and representation; identify conversion and precision risks. | `V01-C05` Lesson view | 2.5 | `LO007`-`LO008` | data modeling | `C02`, `C04` |
| `V01-C06` Variables and State | `M02` | Model bindings and state changes; justify constant or mutable storage. | `V01-C06` Lesson view | 2.5 | `LO009`-`LO010` | state reasoning | `C05` |
| `V01-C07` Operators and Expressions | `M02` | Evaluate expressions using operands, precedence, grouping, and intermediate types. | `V01-C07` Lesson view | 2.5 | `LO011` | expression evaluation | `C05`, `C06` |
| `V01-C08` Input, Output, and Data Transformation | `M02` | Design a parse, validate, normalize, transform, and format boundary. | `V01-C08` Lesson view | 2.5 | `LO012` | data modeling, expression evaluation | `C04`, `C07` |
| `V01-C09` Boolean Logic and Truth | `M03` | Build and simplify verifiable Boolean predicates and truth tables. | `V01-C09` Lesson view | 2 | `LO013`-`LO014` | control-flow design | `C07`, `C29` |
| `V01-C10` Conditional Execution | `M03` | Convert complete decision rules into reachable and testable branches. | `V01-C10` Lesson view | 2.5 | `LO015`-`LO016` | control-flow design | `C08`, `C09` |
| `V01-C11` Repetition and Loops | `M03` | Design terminating loops and trace iteration state. | `V01-C11` Lesson view | 2.5 | `LO017` | control-flow design, state reasoning | `C06`, `C09`, `C10` |
| `V01-C12` Nested and Composite Control Flow | `M03` | Analyze composite paths and simplify nesting without changing behavior. | `V01-C12` Lesson view | 2 | `LO018` | control-flow design | `C10`, `C11` |
| `V01-C13` Functions and Contracts | `M04` | Define input, behavior, output, precondition, postcondition, and failure contracts. | `V01-C13` Lesson view | 2.5 | `LO019`-`LO020` | functional decomposition | `C04`, `C12` |
| `V01-C14` Parameters and Return Values | `M04` | Design necessary inputs and composable return behavior. | `V01-C14` Lesson view | 2.5 | `LO021` | functional decomposition | `C07`, `C13` |
| `V01-C15` Scope, Lifetime, and Side Effects | `M04` | Trace name resolution and lifetime; separate pure behavior from boundary effects. | `V01-C15` Lesson view | 2.5 | `LO022`-`LO023` | state reasoning, functional decomposition | `C06`, `C13`, `C14` |
| `V01-C16` Functional Decomposition and Reuse | `M04` | Transform a multi-step solution into cohesive, testable functions. | `V01-C16` Lesson view | 2.5 | `LO024` | functional decomposition, program delivery | `C03`, `C04`, `C13`-`C15` |
| `V01-C17` Collections and Iteration | `M05` | Traverse collections and produce filtered, mapped, or aggregated results. | `V01-C17` Lesson view | 3 | `LO025`-`LO026` | collection processing | `C11`, `C14`-`C16`, `C32`, `C33` |
| `V01-C18` Records and Data Modeling | `M05` | Design records with explicit fields, types, invariants, and valid states. | `V01-C18` Lesson view | 3 | `LO027`-`LO028` | data modeling | `C05`, `C14`, `C17` |
| `V01-C19` Recursion and Recursive Thinking | `M05` | Trace recursive calls and verify base, progress, and termination conditions. | `V01-C19` Lesson view | 3 | `LO029`-`LO030` | algorithm design, execution tracing | `C10`, `C13`-`C15` |
| `V01-C20` Strings and Text Processing | `M05` | Design a documented normalization and tokenization pipeline. | `V01-C20` Lesson view | 3 | `LO031` | collection processing, data modeling | `C08`, `C14`, `C17` |
| `V01-C21` Searching Algorithms | `M06` | Trace linear and binary search and enforce the sorted-input invariant. | `V01-C21` Lesson view | 3 | `LO032`-`LO033` | algorithm analysis | `C10`, `C11`, `C17`, `C31` |
| `V01-C22` Sorting Algorithms | `M06` | Trace elementary sorts and evaluate stability, mutation, and input shape. | `V01-C22` Lesson view | 3 | `LO034`-`LO035` | algorithm analysis | `C11`, `C12`, `C17`, `C31` |
| `V01-C23` Algorithmic Complexity and Trade-offs | `M06` | Build operation-count models and compare time, space, readability, and scale. | `V01-C23` Lesson view | 3 | `LO036`-`LO037` | algorithm analysis | `C04`, `C17`, `C21`, `C22` |
| `V01-C24` Errors and Failure Modes | `M07` | Classify failures and design explicit failure and recovery contracts. | `V01-C24` Lesson view | 2.5 | `LO038`-`LO039` | failure engineering | `C08`, `C12`, `C15`, `C18`, `C36`, `C37` |
| `V01-C25` Systematic Debugging | `M07` | Reproduce failure, form hypotheses, run controlled experiments, and isolate root cause. | `V01-C25` Lesson view | 2.5 | `LO040`-`LO041` | failure engineering | `C02`, `C04`, `C23`, `C24` |
| `V01-C26` Testing Fundamentals | `M07` | Derive normal, boundary, invalid, and regression tests from contracts. | `V01-C26` Lesson view | 2.5 | `LO042`-`LO043` | verification/refactoring | `C10`, `C13`-`C18`, `C24`, `C25` |
| `V01-C27` Clean Code and Refactoring | `M07` | Improve naming, cohesion, duplication, and complexity under test protection. | `V01-C27` Lesson view | 2.5 | `LO044`-`LO045` | verification/refactoring | `C16`, `C23`, `C25`, `C26` |
| `V01-C28` Program Design from Requirements to Delivery | `M07` | Integrate requirements, models, algorithms, functions, tests, review, and delivery evidence. | `V01-C28` Lesson view | 2 | `LO046` | program delivery | `C03`-`C27`, `C29`-`C38` |
| `V01-C29` JavaScript Type System and Conversion Semantics | `M08` | Trace coercion and equality; justify explicit conversion at data boundaries. | `V01-C29` Lesson view | 4 | `LO047`-`LO048` | runtime reasoning, expression evaluation | `C05`, `C07`, `C38` |
| `V01-C30` Objects, Properties, and Data Modeling | `M09` | Design object invariants and analyze identity, mutation, copying, and aliasing. | `V01-C30` Lesson view | 4 | `LO049`-`LO050` | data modeling, runtime reasoning | `C18`, `C29`, `C33` |
| `V01-C31` Arrays and Collection Pipelines | `M09` | Implement array pipelines and justify mutating or non-mutating operations. | `V01-C31` Lesson view | 4 | `LO051`-`LO052` | collection processing | `C17`, `C30`, `C32` |
| `V01-C32` Higher-Order Functions and Callbacks | `M10` | Apply higher-order functions and trace callback control and data flow. | `V01-C32` Lesson view | 4 | `LO053`-`LO054` | higher-order reasoning | `C13`, `C14`, `C16` |
| `V01-C33` Closures, Lifetime, and State Encapsulation | `M10` | Trace lexical capture and design a testable closure-based state boundary. | `V01-C33` Lesson view | 4 | `LO055`-`LO056` | higher-order reasoning, state reasoning | `C15`, `C32` |
| `V01-C34` Numbers, Math, and Numeric Reliability | `M11` | Identify precision, safe-integer, rounding, and tolerance risks. | `V01-C34` Lesson view | 3.5 | `LO057`-`LO058` | numeric-temporal reliability | `C05`, `C07`, `C29`, `C31` |
| `V01-C35` Dates, Time, and Temporal Boundaries | `M11` | Parse, validate, format, and compare time values under explicit environment assumptions. | `V01-C35` Lesson view | 3.5 | `LO059`-`LO060` | numeric-temporal reliability | `C08`, `C34` |
| `V01-C36` Exception Handling and Custom Errors | `M12` | Apply exception boundaries and design custom error and recovery contracts. | `V01-C36` Lesson view | 3.5 | `LO061`-`LO062` | failure engineering | `C10`, `C13`, `C15`, `C29` |
| `V01-C37` ES Modules and Program Organization | `M12` | Create explicit module responsibilities and analyze cycles and boundary leakage. | `V01-C37` Lesson view | 3.5 | `LO063`-`LO064` | program delivery | `C16`, `C33`, `C36` |
| `V01-C38` JavaScript Runtime, Tooling, and Execution Environments | `M08` | Explain runtime/host/tooling relationships and execute a reproducible workflow. | `V01-C38` Lesson view | 4 | `LO065`-`LO066` | runtime reasoning, program delivery | `C02`, `C08` |

### Navigation order

The canonical learner order is defined in [02-learning-path.md](./02-learning-path.md).
Numeric Chapter allocation remains immutable and is not required to equal
navigation order.

## Validation

- Chapter records: 38.
- Missing Module parents: 0.
- Duplicate Chapter IDs: 0.
- Missing outcome mappings: 0.
- Orphan Chapter records: 0.
- Core Chapter/Lesson workload: 110 hours.

## References

- [Canonical Chapter Registry](../../../../governance/blueprint-v2/04-chapter-registry.md)
- [Canonical Learning Outcome Registry](../../../../governance/blueprint-v2/05-learning-outcome-registry.md)
- [Lesson Registry](./05-lesson-registry.md)
