---
document_type: "supporting-document"
supporting_document_id: "V01-SD-CMAP-002"
supporting_document_type: "Chapter Map"
title: "Volume 01 Blueprint v2 Candidate Chapter Registry"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from:
  - "./02-canonical-schema.md"
---

# Volume 01 Blueprint v2 Candidate Chapter Registry

## Purpose

Define the complete Chapter identity, Module membership, prerequisite, parent,
and direct-child relationships for the v2 candidate.

## Scope

The registry contains 38 Chapters. Existing Chapter titles and meanings are
preserved; ten candidate Chapters extend JavaScript readiness.

## Ownership

- Authority is limited to the Draft v2 candidate.
- The active v1 Chapter Map remains canonical.
- Parent is the primary Module record.
- Children are direct reverse dependency edges, not ownership.

## Content

| ID | Name | Module | Dependencies | Parent | Children |
| --- | --- | --- | --- | --- | --- |
| `V01-C01` | What Is Programming? | `V01-M01` | `V00` | `V01-M01` | `V01-C02`, `V01-C03` |
| `V01-C02` | How Computers Execute Programs | `V01-M01` | `V01-C01` | `V01-M01` | `V01-C03`, `V01-C05`, `V01-C25`, `V01-C38` |
| `V01-C03` | Problem Definition and Decomposition | `V01-M01` | `V01-C01`, `V01-C02` | `V01-M01` | `V01-C04`, `V01-C16`, `V01-C28` |
| `V01-C04` | Algorithms, Pseudocode, and Tracing | `V01-M01` | `V01-C03` | `V01-M01` | `V01-C05`, `V01-C08`, `V01-C13`, `V01-C16`, `V01-C23`, `V01-C25`, `V01-C28` |
| `V01-C05` | Values and Data Types | `V01-M02` | `V01-C02`, `V01-C04` | `V01-M02` | `V01-C06`, `V01-C07`, `V01-C18`, `V01-C28`, `V01-C29`, `V01-C34` |
| `V01-C06` | Variables and State | `V01-M02` | `V01-C05` | `V01-M02` | `V01-C07`, `V01-C11`, `V01-C15`, `V01-C28` |
| `V01-C07` | Operators and Expressions | `V01-M02` | `V01-C05`, `V01-C06` | `V01-M02` | `V01-C08`, `V01-C09`, `V01-C14`, `V01-C28`, `V01-C29`, `V01-C34` |
| `V01-C08` | Input, Output, and Data Transformation | `V01-M02` | `V01-C04`, `V01-C07` | `V01-M02` | `V01-C10`, `V01-C20`, `V01-C24`, `V01-C28`, `V01-C35`, `V01-C38` |
| `V01-C09` | Boolean Logic and Truth | `V01-M03` | `V01-C07`, `V01-C29` | `V01-M03` | `V01-C10`, `V01-C11`, `V01-C28` |
| `V01-C10` | Conditional Execution | `V01-M03` | `V01-C08`, `V01-C09` | `V01-M03` | `V01-C11`, `V01-C12`, `V01-C19`, `V01-C21`, `V01-C26`, `V01-C28`, `V01-C36` |
| `V01-C11` | Repetition and Loops | `V01-M03` | `V01-C06`, `V01-C09`, `V01-C10` | `V01-M03` | `V01-C12`, `V01-C17`, `V01-C21`, `V01-C22`, `V01-C28` |
| `V01-C12` | Nested and Composite Control Flow | `V01-M03` | `V01-C10`, `V01-C11` | `V01-M03` | `V01-C13`, `V01-C22`, `V01-C24`, `V01-C28` |
| `V01-C13` | Functions and Contracts | `V01-M04` | `V01-C04`, `V01-C12` | `V01-M04` | `V01-C14`, `V01-C15`, `V01-C16`, `V01-C19`, `V01-C26`, `V01-C28`, `V01-C32`, `V01-C36` |
| `V01-C14` | Parameters and Return Values | `V01-M04` | `V01-C07`, `V01-C13` | `V01-M04` | `V01-C15`, `V01-C16`, `V01-C17`, `V01-C18`, `V01-C19`, `V01-C20`, `V01-C26`, `V01-C28`, `V01-C32` |
| `V01-C15` | Scope, Lifetime, and Side Effects | `V01-M04` | `V01-C06`, `V01-C13`, `V01-C14` | `V01-M04` | `V01-C16`, `V01-C17`, `V01-C19`, `V01-C24`, `V01-C26`, `V01-C28`, `V01-C33`, `V01-C36` |
| `V01-C16` | Functional Decomposition and Reuse | `V01-M04` | `V01-C03`, `V01-C04`, `V01-C13`, `V01-C14`, `V01-C15` | `V01-M04` | `V01-C17`, `V01-C26`, `V01-C27`, `V01-C28`, `V01-C32`, `V01-C37` |
| `V01-C17` | Collections and Iteration | `V01-M05` | `V01-C11`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C32`, `V01-C33` | `V01-M05` | `V01-C18`, `V01-C20`, `V01-C21`, `V01-C22`, `V01-C23`, `V01-C26`, `V01-C28`, `V01-C31` |
| `V01-C18` | Records and Data Modeling | `V01-M05` | `V01-C05`, `V01-C14`, `V01-C17` | `V01-M05` | `V01-C24`, `V01-C26`, `V01-C28`, `V01-C30` |
| `V01-C19` | Recursion and Recursive Thinking | `V01-M05` | `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15` | `V01-M05` | `V01-C28` |
| `V01-C20` | Strings and Text Processing | `V01-M05` | `V01-C08`, `V01-C14`, `V01-C17` | `V01-M05` | `V01-C28` |
| `V01-C21` | Searching Algorithms | `V01-M06` | `V01-C10`, `V01-C11`, `V01-C17`, `V01-C31` | `V01-M06` | `V01-C23`, `V01-C28` |
| `V01-C22` | Sorting Algorithms | `V01-M06` | `V01-C11`, `V01-C12`, `V01-C17`, `V01-C31` | `V01-M06` | `V01-C23`, `V01-C28` |
| `V01-C23` | Algorithmic Complexity and Trade-offs | `V01-M06` | `V01-C04`, `V01-C17`, `V01-C21`, `V01-C22` | `V01-M06` | `V01-C25`, `V01-C27`, `V01-C28` |
| `V01-C24` | Errors and Failure Modes | `V01-M07` | `V01-C08`, `V01-C12`, `V01-C15`, `V01-C18`, `V01-C36`, `V01-C37` | `V01-M07` | `V01-C25`, `V01-C26`, `V01-C28` |
| `V01-C25` | Systematic Debugging | `V01-M07` | `V01-C02`, `V01-C04`, `V01-C23`, `V01-C24` | `V01-M07` | `V01-C26`, `V01-C27`, `V01-C28` |
| `V01-C26` | Testing Fundamentals | `V01-M07` | `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C17`, `V01-C18`, `V01-C24`, `V01-C25` | `V01-M07` | `V01-C27`, `V01-C28` |
| `V01-C27` | Clean Code and Refactoring | `V01-M07` | `V01-C16`, `V01-C23`, `V01-C25`, `V01-C26` | `V01-M07` | `V01-C28` |
| `V01-C28` | Program Design from Requirements to Delivery | `V01-M07` | `V01-C03`-`V01-C27`, `V01-C29`-`V01-C38` | `V01-M07` | None |
| `V01-C29` | JavaScript Type System and Conversion Semantics | `V01-M08` | `V01-C05`, `V01-C07`, `V01-C38` | `V01-M08` | `V01-C09`, `V01-C28`, `V01-C30`, `V01-C34`, `V01-C36` |
| `V01-C30` | Objects, Properties, and Data Modeling | `V01-M09` | `V01-C18`, `V01-C29`, `V01-C33` | `V01-M09` | `V01-C28`, `V01-C31` |
| `V01-C31` | Arrays and Collection Pipelines | `V01-M09` | `V01-C17`, `V01-C30`, `V01-C32` | `V01-M09` | `V01-C21`, `V01-C22`, `V01-C28`, `V01-C34` |
| `V01-C32` | Higher-Order Functions and Callbacks | `V01-M10` | `V01-C13`, `V01-C14`, `V01-C16` | `V01-M10` | `V01-C17`, `V01-C28`, `V01-C31`, `V01-C33` |
| `V01-C33` | Closures, Lifetime, and State Encapsulation | `V01-M10` | `V01-C15`, `V01-C32` | `V01-M10` | `V01-C17`, `V01-C28`, `V01-C30`, `V01-C37` |
| `V01-C34` | Numbers, Math, and Numeric Reliability | `V01-M11` | `V01-C05`, `V01-C07`, `V01-C29`, `V01-C31` | `V01-M11` | `V01-C28`, `V01-C35` |
| `V01-C35` | Dates, Time, and Temporal Boundaries | `V01-M11` | `V01-C08`, `V01-C34` | `V01-M11` | `V01-C28` |
| `V01-C36` | Exception Handling and Custom Errors | `V01-M12` | `V01-C10`, `V01-C13`, `V01-C15`, `V01-C29` | `V01-M12` | `V01-C24`, `V01-C28`, `V01-C37` |
| `V01-C37` | ES Modules and Program Organization | `V01-M12` | `V01-C16`, `V01-C33`, `V01-C36` | `V01-M12` | `V01-C24`, `V01-C28` |
| `V01-C38` | JavaScript Runtime, Tooling, and Execution Environments | `V01-M08` | `V01-C02`, `V01-C08` | `V01-M08` | `V01-C28`, `V01-C29` |

### Candidate learning order

The recommended order is:

```text
C01-C08 -> C38 -> C29 -> C09-C16 -> C32-C33 -> C17-C20
-> C30-C31 -> C34-C35 -> C21-C23 and C36-C37 -> C24-C28
```

Independent branches converge before the reliability and delivery gate.

## Validation

- Chapter records: 38.
- Existing identities preserved: 28.
- New identities: 10.
- Missing Module parents: 0.
- Missing dependency targets: 0.
- Duplicate Chapter IDs: 0.
- Direct-child mappings are derived from dependency edges.

## References

- [Canonical Schema Candidate](./02-canonical-schema.md)
- [Learning Outcome Registry](./05-learning-outcome-registry.md)
- [Dependency Graph](./06-dependency-graph.md)
- [Current v1 Chapter Map](../../docs/01-programming/chapter-map.md)
