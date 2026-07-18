---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-CMAP-001"
supporting_document_type: "Chapter Map"
title: "ASEA Chapter Registry"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-001"
derived_from:
  - "../../docs/01-programming/chapter-map.md"
  - "../../docs/01-programming/chapter-blueprints/"
---

# ASEA Chapter Registry

## Purpose

This registry lists every Chapter in the active canonical technical curriculum
and distinguishes architecture records from produced learner-facing content.

## Scope

The registry covers all 28 frozen Volume 01 Chapters. Volume 00 educational
documents are foundation material but are not assigned `V01-Cxx` identities and
are therefore excluded from this technical Chapter count.

## Ownership

- **Authority:** Derived.
- **Authoritative Chapter source:** `V01-SD-CMAP-001`.
- **Blueprint source:** `V01-BP01`.
- **Content status authority:** Each Chapter file's own lifecycle metadata.

## Content

| ID | Module | Canonical title | Outcomes | Production state |
| --- | --- | --- | --- | --- |
| `V01-C01` | `V01-M01` | What Is Programming? | `V01-LO001`, `V01-LO002` | Draft Chapter produced |
| `V01-C02` | `V01-M01` | How Computers Execute Programs | `V01-LO003`, `V01-LO004` | Blueprint only |
| `V01-C03` | `V01-M01` | Problem Definition and Decomposition | `V01-LO005` | Blueprint only |
| `V01-C04` | `V01-M01` | Algorithms, Pseudocode, and Tracing | `V01-LO006` | Blueprint only |
| `V01-C05` | `V01-M02` | Values and Data Types | `V01-LO007`, `V01-LO008` | Blueprint only |
| `V01-C06` | `V01-M02` | Variables and State | `V01-LO009`, `V01-LO010` | External lesson candidate |
| `V01-C07` | `V01-M02` | Operators and Expressions | `V01-LO011` | Blueprint only |
| `V01-C08` | `V01-M02` | Input, Output, and Data Transformation | `V01-LO012` | Blueprint only |
| `V01-C09` | `V01-M03` | Boolean Logic and Truth | `V01-LO013`, `V01-LO014` | Blueprint only |
| `V01-C10` | `V01-M03` | Conditional Execution | `V01-LO015`, `V01-LO016` | Blueprint only |
| `V01-C11` | `V01-M03` | Repetition and Loops | `V01-LO017` | Blueprint only |
| `V01-C12` | `V01-M03` | Nested and Composite Control Flow | `V01-LO018` | Blueprint only |
| `V01-C13` | `V01-M04` | Functions and Contracts | `V01-LO019`, `V01-LO020` | Blueprint only |
| `V01-C14` | `V01-M04` | Parameters and Return Values | `V01-LO021` | Blueprint only |
| `V01-C15` | `V01-M04` | Scope, Lifetime, and Side Effects | `V01-LO022`, `V01-LO023` | Blueprint only |
| `V01-C16` | `V01-M04` | Functional Decomposition and Reuse | `V01-LO024` | Blueprint only |
| `V01-C17` | `V01-M05` | Collections and Iteration | `V01-LO025`, `V01-LO026` | Blueprint only |
| `V01-C18` | `V01-M05` | Records and Data Modeling | `V01-LO027`, `V01-LO028` | Blueprint only |
| `V01-C19` | `V01-M05` | Recursion and Recursive Thinking | `V01-LO029`, `V01-LO030` | Blueprint only |
| `V01-C20` | `V01-M05` | Strings and Text Processing | `V01-LO031` | Blueprint only |
| `V01-C21` | `V01-M06` | Searching Algorithms | `V01-LO032`, `V01-LO033` | Blueprint only |
| `V01-C22` | `V01-M06` | Sorting Algorithms | `V01-LO034`, `V01-LO035` | Blueprint only |
| `V01-C23` | `V01-M06` | Algorithmic Complexity and Trade-offs | `V01-LO036`, `V01-LO037` | Blueprint only |
| `V01-C24` | `V01-M07` | Errors and Failure Modes | `V01-LO038`, `V01-LO039` | Blueprint only |
| `V01-C25` | `V01-M07` | Systematic Debugging | `V01-LO040`, `V01-LO041` | Blueprint only |
| `V01-C26` | `V01-M07` | Testing Fundamentals | `V01-LO042`, `V01-LO043` | Blueprint only |
| `V01-C27` | `V01-M07` | Clean Code and Refactoring | `V01-LO044`, `V01-LO045` | Blueprint only |
| `V01-C28` | `V01-M07` | Program Design from Requirements to Delivery | `V01-LO046` | Blueprint only |

### Production interpretation

All 28 Chapter Blueprint files exist. A Blueprint is not a lesson. Only
`V01-C01` has a learner-facing Chapter under the canonical Chapter path.

The Variables package under `content/programming-fundamentals/variables/`
substantively maps to `V01-C06` and its two outcomes, but its lesson file has no
canonical Chapter metadata. It must remain a production candidate until a
separate content-integration workflow validates and places it.

## Validation

| Check | Result |
| --- | --- |
| Canonical Chapters | 28 |
| Chapter Blueprints | 28 |
| Missing canonical IDs | 0 |
| Duplicate canonical IDs | 0 |
| Outcome mappings missing | 0 |
| Produced canonical Chapters | 1 Draft |
| External lesson candidates | 1 |

## References

- [Canonical Chapter Map](../../docs/01-programming/chapter-map.md)
- [Chapter Blueprint Index](../../docs/01-programming/chapter-blueprints/README.md)
- [Produced Chapter 01](../../docs/01-programming/chapters/01-what-is-programming.md)
- [Variables Lesson Candidate](../../content/programming-fundamentals/variables/lesson.md)
