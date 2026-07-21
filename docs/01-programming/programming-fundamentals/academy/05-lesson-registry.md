---
document_type: "supporting-document"
supporting_document_id: "V01-SD-IDX-007"
supporting_document_type: "Index"
title: "Programming Fundamentals Academy Lesson Registry"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Content Systems Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-002"
  - "V01-SD-LO-002"
derived_from:
  - "../../../../governance/blueprint-v2/02-canonical-schema.md"
  - "../../../../governance/blueprint-v2/04-chapter-registry.md"
  - "../../../../governance/blueprint-v2/05-learning-outcome-registry.md"
  - "../../../../blueprint-v2/08-lesson-template.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Lesson Registry

## Purpose

Register the delivery metadata for every Chapter-based Lesson experience.

## Scope

Each canonical Chapter has exactly one Lesson experience in this Sprint. The
Lesson uses its parent Chapter ID and version. `V01-Cnn-L01` is a Lab ID under
the repository identifier standard and is not used as a Lesson ID.

## Ownership

- The parent Chapter owns learning objectives, outcomes, and prerequisites.
- The Lesson view owns presentation sequence, estimated duration, and
  theory/practice allocation.
- This registry creates no independent prerequisite or outcome authority.

## Content

### Lesson architecture

Every Lesson will later render the 15 required Chapter Standard sections and
use the experience sequence:

```text
Motivation -> Mental Model -> Explanation -> Worked Example
-> Guided Practice -> Independent Practice -> Assessment -> Reflection
```

### Lesson records

| Lesson identity | Lesson name | Learning objective | Duration | Difficulty | Prerequisites / dependencies | Competencies | Theory / Practice |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `V01-C01` | What Is Programming? | Distinguish programming concepts and produce precise instructions. | 2.5 h | Beginner | `V00` | problem framing, algorithm design | 60% / 40% |
| `V01-C02` | How Computers Execute Programs | Explain and trace a basic execution model. | 2.5 h | Beginner | `C01` | execution tracing | 60% / 40% |
| `V01-C03` | Problem Definition and Decomposition | Produce a bounded problem contract and decomposition. | 2.5 h | Beginner | `C01`, `C02` | problem framing | 50% / 50% |
| `V01-C04` | Algorithms, Pseudocode, and Tracing | Design and verify a finite algorithm. | 2.5 h | Beginner | `C03` | algorithm design, execution tracing | 45% / 55% |
| `V01-C05` | Values and Data Types | Classify values and analyze representation risks. | 2.5 h | Beginner | `C02`, `C04` | data modeling | 55% / 45% |
| `V01-C06` | Variables and State | Trace state and justify mutability choices. | 2.5 h | Beginner | `C05` | state reasoning | 45% / 55% |
| `V01-C07` | Operators and Expressions | Evaluate compound expressions reliably. | 2.5 h | Beginner | `C05`, `C06` | expression evaluation | 45% / 55% |
| `V01-C08` | Input, Output, and Data Transformation | Design a validated data-transformation boundary. | 2.5 h | Beginner | `C04`, `C07` | data modeling, expression evaluation | 40% / 60% |
| `V01-C38` | JavaScript Runtime, Tooling, and Execution Environments | Run and explain a reproducible JavaScript workflow. | 4 h | Beginner | `C02`, `C08` | runtime reasoning, program delivery | 50% / 50% |
| `V01-C29` | JavaScript Type System and Conversion Semantics | Trace coercion and select explicit conversion strategies. | 4 h | Intermediate | `C05`, `C07`, `C38` | runtime reasoning, expression evaluation | 50% / 50% |
| `V01-C09` | Boolean Logic and Truth | Build and simplify complete Boolean predicates. | 2 h | Beginner | `C07`, `C29` | control-flow design | 45% / 55% |
| `V01-C10` | Conditional Execution | Implement complete and testable decision behavior. | 2.5 h | Beginner | `C08`, `C09` | control-flow design | 40% / 60% |
| `V01-C11` | Repetition and Loops | Design and trace terminating repetition. | 2.5 h | Beginner | `C06`, `C09`, `C10` | control-flow design, state reasoning | 40% / 60% |
| `V01-C12` | Nested and Composite Control Flow | Analyze and simplify composite paths. | 2 h | Beginner | `C10`, `C11` | control-flow design | 40% / 60% |
| `V01-C13` | Functions and Contracts | Define and trace explicit function contracts. | 2.5 h | Beginner | `C04`, `C12` | functional decomposition | 45% / 55% |
| `V01-C14` | Parameters and Return Values | Design minimal inputs and composable outputs. | 2.5 h | Beginner | `C07`, `C13` | functional decomposition | 40% / 60% |
| `V01-C15` | Scope, Lifetime, and Side Effects | Trace resolution/lifetime and isolate effects. | 2.5 h | Beginner | `C06`, `C13`, `C14` | state reasoning, functional decomposition | 50% / 50% |
| `V01-C16` | Functional Decomposition and Reuse | Build a cohesive, testable function map. | 2.5 h | Beginner | `C03`, `C04`, `C13`-`C15` | functional decomposition, program delivery | 35% / 65% |
| `V01-C32` | Higher-Order Functions and Callbacks | Apply and trace higher-order behavior. | 4 h | Intermediate | `C13`, `C14`, `C16` | higher-order reasoning | 45% / 55% |
| `V01-C33` | Closures, Lifetime, and State Encapsulation | Trace capture and design a closure boundary. | 4 h | Intermediate | `C15`, `C32` | higher-order reasoning, state reasoning | 50% / 50% |
| `V01-C17` | Collections and Iteration | Process collections and handle structural edge cases. | 3 h | Beginner | `C11`, `C14`-`C16`, `C32`, `C33` | collection processing | 40% / 60% |
| `V01-C18` | Records and Data Modeling | Design valid-state record models. | 3 h | Beginner | `C05`, `C14`, `C17` | data modeling | 40% / 60% |
| `V01-C19` | Recursion and Recursive Thinking | Trace and verify terminating recursion. | 3 h | Beginner | `C10`, `C13`-`C15` | algorithm design, execution tracing | 50% / 50% |
| `V01-C20` | Strings and Text Processing | Design a robust text-processing pipeline. | 3 h | Beginner | `C08`, `C14`, `C17` | collection processing, data modeling | 40% / 60% |
| `V01-C30` | Objects, Properties, and Data Modeling | Model objects and analyze identity and mutation. | 4 h | Intermediate | `C18`, `C29`, `C33` | data modeling, runtime reasoning | 45% / 55% |
| `V01-C31` | Arrays and Collection Pipelines | Build and justify array transformation pipelines. | 4 h | Intermediate | `C17`, `C30`, `C32` | collection processing | 35% / 65% |
| `V01-C34` | Numbers, Math, and Numeric Reliability | Select reliable numeric strategies. | 3.5 h | Intermediate | `C05`, `C07`, `C29`, `C31` | numeric-temporal reliability | 45% / 55% |
| `V01-C35` | Dates, Time, and Temporal Boundaries | Handle date-time boundaries under explicit assumptions. | 3.5 h | Intermediate | `C08`, `C34` | numeric-temporal reliability | 45% / 55% |
| `V01-C21` | Searching Algorithms | Trace and select basic search approaches. | 3 h | Intermediate | `C10`, `C11`, `C17`, `C31` | algorithm analysis | 40% / 60% |
| `V01-C22` | Sorting Algorithms | Trace and evaluate elementary sorting. | 3 h | Intermediate | `C11`, `C12`, `C17`, `C31` | algorithm analysis | 40% / 60% |
| `V01-C23` | Algorithmic Complexity and Trade-offs | Compare solutions using operation growth and constraints. | 3 h | Intermediate | `C04`, `C17`, `C21`, `C22` | algorithm analysis | 50% / 50% |
| `V01-C36` | Exception Handling and Custom Errors | Design and apply explicit exception boundaries. | 3.5 h | Intermediate | `C10`, `C13`, `C15`, `C29` | failure engineering | 40% / 60% |
| `V01-C37` | ES Modules and Program Organization | Design and analyze stable module boundaries. | 3.5 h | Intermediate | `C16`, `C33`, `C36` | program delivery | 40% / 60% |
| `V01-C24` | Errors and Failure Modes | Classify failures and specify recovery behavior. | 2.5 h | Intermediate | `C08`, `C12`, `C15`, `C18`, `C36`, `C37` | failure engineering | 45% / 55% |
| `V01-C25` | Systematic Debugging | Isolate root cause through reproducible evidence. | 2.5 h | Intermediate | `C02`, `C04`, `C23`, `C24` | failure engineering | 30% / 70% |
| `V01-C26` | Testing Fundamentals | Derive risk-based tests from contracts. | 2.5 h | Intermediate | `C10`, `C13`-`C18`, `C24`, `C25` | verification/refactoring | 35% / 65% |
| `V01-C27` | Clean Code and Refactoring | Improve design while preserving behavior. | 2.5 h | Intermediate | `C16`, `C23`, `C25`, `C26` | verification/refactoring | 30% / 70% |
| `V01-C28` | Program Design from Requirements to Delivery | Produce and defend an integrated program design dossier. | 2 h | Intermediate | `C03`-`C27`, `C29`-`C38` | program delivery | 25% / 75% |

All abbreviated dependency IDs inherit the `V01-` prefix.

## Validation

- Lesson experiences: 38.
- Canonical Lesson identities: 38 unique parent Chapter IDs.
- Duplicate Lesson identities: 0.
- Orphan Lesson experiences: 0.
- Unsupported Lesson ID families introduced: 0.
- Theory/practice allocation per Lesson: 100%.
- Total core duration: 110 hours.

## References

- [Lesson Experience Template](../../../../blueprint-v2/08-lesson-template.md)
- [Chapter Registry](./04-chapter-registry.md)
- [Learning Outcomes](./06-learning-outcomes.md)
