---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-009"
supporting_document_type: "Index"
title: "Volume 01 Root and Critical Concept Analysis"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-SD-IDX-006"
derived_from:
  - "ASEA-SD-IDX-006"
---

# Volume 01 Root and Critical Concept Analysis

## Purpose

This document identifies entry, leaf, hub, bridge, high-dependency, critical,
mastery, and dead-end Concepts from the candidate graph.

## Scope

Root and leaf status use the prerequisite DAG. Hub and bridge status use the
undirected Concept topology formed by prerequisite, related, and next-concept
edges. Artifact endpoints are excluded from topology metrics.

## Ownership

- **Authority:** Derived analysis.
- **Source:** [Knowledge Graph Candidate Registry](./knowledge-graph-registry.md).
- **Generated:** 2026-07-18.
- **Owner:** Knowledge Architect.

## Content

### Root and Entry Concepts

Root Concepts have no incoming `prerequisite-of` edge.

- `ASEA-CON-000001` — Source Code and Running Program
- `ASEA-CON-000007` — Program

### Leaf Concepts

Leaf Concepts have no outgoing `prerequisite-of` edge.

- `ASEA-CON-000002` — Program Translation
- `ASEA-CON-000006` — CPU Abstraction
- `ASEA-CON-000008` — Programming
- `ASEA-CON-000013` — Constraint and Assumption
- `ASEA-CON-000023` — Type Conversion
- `ASEA-CON-000025` — Mutability and Constant
- `ASEA-CON-000028` — Precedence and Grouping
- `ASEA-CON-000035` — Short-Circuit Evaluation
- `ASEA-CON-000037` — Decision Table
- `ASEA-CON-000038` — Branch Coverage
- `ASEA-CON-000041` — Counter, Accumulator, and Sentinel
- `ASEA-CON-000042` — Loop Termination
- `ASEA-CON-000044` — Control-Flow Complexity
- `ASEA-CON-000045` — Guard Clause and Early Exit
- `ASEA-CON-000051` — Function Signature
- `ASEA-CON-000053` — Shadowing
- `ASEA-CON-000054` — Side Effect and Purity
- `ASEA-CON-000057` — Reuse and Composition
- `ASEA-CON-000060` — Mapping, Filtering, and Reduction
- `ASEA-CON-000066` — Call Stack
- `ASEA-CON-000067` — Structural Recursion
- `ASEA-CON-000069` — Tokenization and Delimiters
- `ASEA-CON-000070` — Text Normalization
- `ASEA-CON-000072` — Binary Search
- `ASEA-CON-000075` — Selection Sort
- `ASEA-CON-000076` — Insertion Sort
- `ASEA-CON-000077` — Stability and Mutation
- `ASEA-CON-000080` — Operation Count and Growth
- `ASEA-CON-000084` — Error Message
- `ASEA-CON-000088` — Root Cause
- `ASEA-CON-000090` — Boundary and Invalid-Input Testing
- `ASEA-CON-000094` — Semantic Preservation
- `ASEA-CON-000096` — Readability and Naming
- `ASEA-CON-000100` — Risk and Delivery
- `ASEA-CON-000101` — Technical Review

### Hub Concepts

Hub Concepts occupy the top degree decile; the inclusive threshold is
6 unique Concept neighbors.

- `ASEA-CON-000047` — Function Contract
- `ASEA-CON-000011` — Algorithm
- `ASEA-CON-000058` — Collection
- `ASEA-CON-000003` — Program State
- `ASEA-CON-000012` — Problem Definition and Requirements
- `ASEA-CON-000020` — Value
- `ASEA-CON-000036` — Conditional Execution
- `ASEA-CON-000039` — Loop and Iteration
- `ASEA-CON-000046` — Function
- `ASEA-CON-000097` — Program Design
- `ASEA-CON-000001` — Source Code and Running Program
- `ASEA-CON-000006` — CPU Abstraction
- `ASEA-CON-000015` — Problem Decomposition
- `ASEA-CON-000021` — Data Type
- `ASEA-CON-000055` — Functional Decomposition
- `ASEA-CON-000064` — Recursion
- `ASEA-CON-000078` — Algorithmic Complexity
- `ASEA-CON-000089` — Test Case and Test Oracle

### Bridge Concepts

Bridge Concepts are articulation points whose removal increases the number of
connected components in the undirected Concept topology.

None.

### High-Dependency and Critical Concepts

High-dependency Concepts occupy the top decile by transitive prerequisite
descendant count; the inclusive threshold is 25.

- `ASEA-CON-000007` — Program
- `ASEA-CON-000009` — Instruction
- `ASEA-CON-000010` — Computation
- `ASEA-CON-000020` — Value
- `ASEA-CON-000011` — Algorithm
- `ASEA-CON-000012` — Problem Definition and Requirements
- `ASEA-CON-000046` — Function
- `ASEA-CON-000021` — Data Type
- `ASEA-CON-000058` — Collection
- `ASEA-CON-000017` — Preconditions and Postconditions
- `ASEA-CON-000026` — Operator and Operand
- `ASEA-CON-000047` — Function Contract

Critical Concepts are the union of hubs, bridges, and high-dependency Concepts.

- `ASEA-CON-000001` — Source Code and Running Program
- `ASEA-CON-000003` — Program State
- `ASEA-CON-000006` — CPU Abstraction
- `ASEA-CON-000007` — Program
- `ASEA-CON-000009` — Instruction
- `ASEA-CON-000010` — Computation
- `ASEA-CON-000011` — Algorithm
- `ASEA-CON-000012` — Problem Definition and Requirements
- `ASEA-CON-000015` — Problem Decomposition
- `ASEA-CON-000017` — Preconditions and Postconditions
- `ASEA-CON-000020` — Value
- `ASEA-CON-000021` — Data Type
- `ASEA-CON-000026` — Operator and Operand
- `ASEA-CON-000036` — Conditional Execution
- `ASEA-CON-000039` — Loop and Iteration
- `ASEA-CON-000046` — Function
- `ASEA-CON-000047` — Function Contract
- `ASEA-CON-000055` — Functional Decomposition
- `ASEA-CON-000058` — Collection
- `ASEA-CON-000064` — Recursion
- `ASEA-CON-000078` — Algorithmic Complexity
- `ASEA-CON-000089` — Test Case and Test Oracle
- `ASEA-CON-000097` — Program Design

### Mastery Concepts and Dead Ends

Mastery Concepts are integrated in the Volume Capstone `V01-CP01`.

- `ASEA-CON-000082` — Error and Failure Taxonomy
- `ASEA-CON-000083` — Error Boundary and Recovery
- `ASEA-CON-000084` — Error Message
- `ASEA-CON-000085` — Systematic Debugging
- `ASEA-CON-000086` — Reproduction and Minimal Failing Case
- `ASEA-CON-000087` — Debugging Hypothesis and Experiment
- `ASEA-CON-000088` — Root Cause
- `ASEA-CON-000089` — Test Case and Test Oracle
- `ASEA-CON-000090` — Boundary and Invalid-Input Testing
- `ASEA-CON-000091` — Unit Test and Test Isolation
- `ASEA-CON-000092` — Coverage and Regression
- `ASEA-CON-000093` — Refactoring
- `ASEA-CON-000094` — Semantic Preservation
- `ASEA-CON-000095` — Code Smell
- `ASEA-CON-000096` — Readability and Naming
- `ASEA-CON-000097` — Program Design
- `ASEA-CON-000098` — Requirements Traceability
- `ASEA-CON-000099` — Acceptance Criteria
- `ASEA-CON-000100` — Risk and Delivery
- `ASEA-CON-000101` — Technical Review

Dead ends are prerequisite leaves with no assessment, lab, or project mapping.

None.

### Degree Register

| Concept ID | Concept | Unique Concept Degree | Direct Prerequisites | Direct Dependents | Transitive Dependents |
| --- | --- | ---: | ---: | ---: | ---: |
| `ASEA-CON-000047` | Function Contract | 10 | 2 | 7 | 25 |
| `ASEA-CON-000011` | Algorithm | 9 | 1 | 4 | 49 |
| `ASEA-CON-000058` | Collection | 9 | 1 | 6 | 28 |
| `ASEA-CON-000003` | Program State | 8 | 1 | 5 | 10 |
| `ASEA-CON-000012` | Problem Definition and Requirements | 8 | 1 | 6 | 34 |
| `ASEA-CON-000020` | Value | 7 | 1 | 4 | 57 |
| `ASEA-CON-000036` | Conditional Execution | 7 | 1 | 4 | 12 |
| `ASEA-CON-000039` | Loop and Iteration | 7 | 1 | 4 | 9 |
| `ASEA-CON-000046` | Function | 7 | 1 | 5 | 34 |
| `ASEA-CON-000097` | Program Design | 7 | 2 | 2 | 3 |
| `ASEA-CON-000001` | Source Code and Running Program | 6 | 0 | 3 | 13 |
| `ASEA-CON-000006` | CPU Abstraction | 6 | 3 | 0 | 0 |
| `ASEA-CON-000015` | Problem Decomposition | 6 | 1 | 2 | 12 |
| `ASEA-CON-000021` | Data Type | 6 | 1 | 4 | 32 |
| `ASEA-CON-000055` | Functional Decomposition | 6 | 2 | 3 | 8 |
| `ASEA-CON-000064` | Recursion | 6 | 2 | 1 | 2 |
| `ASEA-CON-000078` | Algorithmic Complexity | 6 | 2 | 2 | 4 |
| `ASEA-CON-000089` | Test Case and Test Oracle | 6 | 1 | 3 | 7 |
| `ASEA-CON-000002` | Program Translation | 5 | 1 | 0 | 0 |
| `ASEA-CON-000004` | Instruction Sequence and Control Flow | 5 | 1 | 1 | 1 |
| `ASEA-CON-000005` | Execution Memory | 5 | 1 | 1 | 1 |
| `ASEA-CON-000010` | Computation | 5 | 1 | 2 | 91 |
| `ASEA-CON-000016` | Pseudocode | 5 | 1 | 1 | 3 |
| `ASEA-CON-000017` | Preconditions and Postconditions | 5 | 1 | 1 | 26 |
| `ASEA-CON-000019` | Termination | 5 | 1 | 1 | 1 |
| `ASEA-CON-000024` | Variable and Assignment | 5 | 2 | 2 | 4 |
| `ASEA-CON-000032` | Boolean Logic | 5 | 1 | 2 | 17 |
| `ASEA-CON-000042` | Loop Termination | 5 | 2 | 0 | 0 |
| `ASEA-CON-000043` | Nested Control Flow | 5 | 2 | 1 | 1 |
| `ASEA-CON-000048` | Function Invocation | 5 | 1 | 3 | 4 |
| `ASEA-CON-000052` | Scope and Lifetime | 5 | 2 | 2 | 2 |
| `ASEA-CON-000061` | Record and Field | 5 | 2 | 1 | 11 |
| `ASEA-CON-000063` | Invariant and Invalid State | 5 | 1 | 2 | 8 |
| `ASEA-CON-000066` | Call Stack | 5 | 2 | 0 | 0 |
| `ASEA-CON-000067` | Structural Recursion | 5 | 2 | 0 | 0 |
| `ASEA-CON-000068` | String and Text | 5 | 2 | 2 | 2 |
| `ASEA-CON-000073` | Search Contract | 5 | 2 | 1 | 4 |
| `ASEA-CON-000074` | Sorting Algorithm | 5 | 2 | 3 | 3 |
| `ASEA-CON-000081` | Engineering Trade-off | 5 | 1 | 1 | 1 |
| `ASEA-CON-000082` | Error and Failure Taxonomy | 5 | 1 | 2 | 6 |
| `ASEA-CON-000085` | Systematic Debugging | 5 | 1 | 1 | 3 |
| `ASEA-CON-000098` | Requirements Traceability | 5 | 2 | 1 | 1 |
| `ASEA-CON-000099` | Acceptance Criteria | 5 | 1 | 1 | 1 |
| `ASEA-CON-000101` | Technical Review | 5 | 2 | 0 | 0 |
| `ASEA-CON-000007` | Program | 4 | 0 | 2 | 94 |
| `ASEA-CON-000008` | Programming | 4 | 1 | 0 | 0 |
| `ASEA-CON-000009` | Instruction | 4 | 1 | 1 | 92 |
| `ASEA-CON-000014` | Edge Case | 4 | 1 | 1 | 1 |
| `ASEA-CON-000022` | Data Representation | 4 | 1 | 2 | 4 |
| `ASEA-CON-000023` | Type Conversion | 4 | 2 | 0 | 0 |
| `ASEA-CON-000026` | Operator and Operand | 4 | 1 | 1 | 25 |
| `ASEA-CON-000027` | Expression Evaluation | 4 | 1 | 3 | 24 |
| `ASEA-CON-000029` | Data Transformation Pipeline | 4 | 1 | 1 | 4 |
| `ASEA-CON-000030` | Parsing and Validation | 4 | 2 | 2 | 3 |
| `ASEA-CON-000031` | Normalization and Formatting | 4 | 1 | 1 | 1 |
| `ASEA-CON-000033` | Predicate | 4 | 1 | 2 | 14 |
| `ASEA-CON-000034` | Truth Table | 4 | 1 | 1 | 1 |
| `ASEA-CON-000035` | Short-Circuit Evaluation | 4 | 1 | 0 | 0 |
| `ASEA-CON-000040` | Iteration State | 4 | 2 | 1 | 1 |
| `ASEA-CON-000045` | Guard Clause and Early Exit | 4 | 1 | 0 | 0 |
| `ASEA-CON-000049` | Parameter and Argument | 4 | 2 | 1 | 1 |
| `ASEA-CON-000054` | Side Effect and Purity | 4 | 2 | 0 | 0 |
| `ASEA-CON-000059` | Collection Traversal | 4 | 2 | 2 | 3 |
| `ASEA-CON-000070` | Text Normalization | 4 | 2 | 0 | 0 |
| `ASEA-CON-000071` | Linear Search | 4 | 1 | 1 | 1 |
| `ASEA-CON-000077` | Stability and Mutation | 4 | 1 | 0 | 0 |
| `ASEA-CON-000088` | Root Cause | 4 | 1 | 0 | 0 |
| `ASEA-CON-000090` | Boundary and Invalid-Input Testing | 4 | 2 | 0 | 0 |
| `ASEA-CON-000091` | Unit Test and Test Isolation | 4 | 2 | 1 | 3 |
| `ASEA-CON-000092` | Coverage and Regression | 4 | 1 | 1 | 2 |
| `ASEA-CON-000093` | Refactoring | 4 | 1 | 1 | 1 |
| `ASEA-CON-000094` | Semantic Preservation | 4 | 2 | 0 | 0 |
| `ASEA-CON-000095` | Code Smell | 4 | 1 | 1 | 1 |
| `ASEA-CON-000096` | Readability and Naming | 4 | 1 | 0 | 0 |
| `ASEA-CON-000100` | Risk and Delivery | 4 | 2 | 0 | 0 |
| `ASEA-CON-000013` | Constraint and Assumption | 3 | 1 | 0 | 0 |
| `ASEA-CON-000018` | Algorithm Trace | 3 | 1 | 1 | 2 |
| `ASEA-CON-000028` | Precedence and Grouping | 3 | 1 | 0 | 0 |
| `ASEA-CON-000037` | Decision Table | 3 | 1 | 0 | 0 |
| `ASEA-CON-000038` | Branch Coverage | 3 | 1 | 0 | 0 |
| `ASEA-CON-000041` | Counter, Accumulator, and Sentinel | 3 | 1 | 0 | 0 |
| `ASEA-CON-000050` | Return Value | 3 | 1 | 1 | 1 |
| `ASEA-CON-000051` | Function Signature | 3 | 2 | 0 | 0 |
| `ASEA-CON-000056` | Cohesion and Coupling | 3 | 1 | 1 | 2 |
| `ASEA-CON-000057` | Reuse and Composition | 3 | 1 | 0 | 0 |
| `ASEA-CON-000060` | Mapping, Filtering, and Reduction | 3 | 1 | 0 | 0 |
| `ASEA-CON-000062` | Data Model and Schema | 3 | 1 | 2 | 10 |
| `ASEA-CON-000065` | Base Case and Recursive Case | 3 | 1 | 1 | 1 |
| `ASEA-CON-000069` | Tokenization and Delimiters | 3 | 2 | 0 | 0 |
| `ASEA-CON-000072` | Binary Search | 3 | 2 | 0 | 0 |
| `ASEA-CON-000075` | Selection Sort | 3 | 1 | 0 | 0 |
| `ASEA-CON-000076` | Insertion Sort | 3 | 1 | 0 | 0 |
| `ASEA-CON-000079` | Time and Space Complexity | 3 | 1 | 1 | 2 |
| `ASEA-CON-000080` | Operation Count and Growth | 3 | 1 | 0 | 0 |
| `ASEA-CON-000083` | Error Boundary and Recovery | 3 | 2 | 1 | 1 |
| `ASEA-CON-000084` | Error Message | 3 | 1 | 0 | 0 |
| `ASEA-CON-000086` | Reproduction and Minimal Failing Case | 3 | 1 | 1 | 2 |
| `ASEA-CON-000087` | Debugging Hypothesis and Experiment | 3 | 1 | 1 | 1 |
| `ASEA-CON-000025` | Mutability and Constant | 2 | 1 | 0 | 0 |
| `ASEA-CON-000044` | Control-Flow Complexity | 2 | 1 | 0 | 0 |
| `ASEA-CON-000053` | Shadowing | 2 | 1 | 0 | 0 |

## Validation

- Root Concepts: 2.
- Leaf Concepts: 35.
- Hub Concepts: 18.
- Bridge Concepts: 0.
- Dead Ends: 0.
- Disconnected Components: 1.

## References

- [Knowledge Graph Candidate Registry](./knowledge-graph-registry.md)
- [Knowledge Learning Paths](./knowledge-learning-paths.md)
- [Knowledge Graph Validation Report](./knowledge-graph-validation-report.md)
