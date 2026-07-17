---
document_type: "supporting-document"
supporting_document_id: "V01-SD-MMAP-001"
supporting_document_type: "Module Map"
title: "Volume 01 Module Map"
version: "1.1.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Module Map

## Purpose

Her modül, ortak bir yeterlik kapısına hizmet eden Chapter, lab, proje ve assessment grubudur. Chapter içeriği bu dosyada yazılmaz; yalnızca mimari ilişki tanımlanır.

## Scope

This document governs the Module Map records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Module Map data within Volume 01.
- **Owner Role:** Curriculum Architect.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Module Map records.

## Module 1 — Computational Thinking

- **Module ID:** `V01-M01`

- **Purpose:** Problemi bilgisayarın yürütebileceği kesin bir çözüm modeline dönüştürmek.
- **Chapters:** 01 What Is Programming?, 02 How Computers Execute Programs, 03 Problem Definition and Decomposition, 04 Algorithms, Pseudocode, and Tracing.
- **Chapter IDs:** `V01-C01`, `V01-C02`, `V01-C03`, `V01-C04`
- **Learning Outcomes:** V01-LO001–V01-LO006.
- **Skills:** Problem framing, input/output analysis, decomposition, algorithm writing, tracing.
- **Projects:** Mini Project 01 — Instruction Simulator.
- **Project ID:** `V01-P01`
- **Assessment:** Chapter assessments 01-04, Labs 01-04, module trace review, Mini Project 01.

## Module 2 — Data and Expressions

- **Module ID:** `V01-M02`

- **Purpose:** Program verisini temsil etmek, saklamak, değerlendirmek ve dönüştürmek.
- **Chapters:** 05 Values and Data Types, 06 Variables and State, 07 Operators and Expressions, 08 Input, Output, and Data Transformation.
- **Chapter IDs:** `V01-C05`, `V01-C06`, `V01-C07`, `V01-C08`
- **Learning Outcomes:** V01-LO007–V01-LO012.
- **Skills:** Type reasoning, state tracing, expression evaluation, validation, transformation pipeline.
- **Projects:** Mini Project 02 — Data Transformation Console.
- **Project ID:** `V01-P02`
- **Assessment:** Chapter assessments 05-08, Labs 05-08, data-flow review, Mini Project 02.

## Module 3 — Control Flow

- **Module ID:** `V01-M03`

- **Purpose:** Koşul ve tekrar yoluyla program davranışını denetlemek.
- **Chapters:** 09 Boolean Logic and Truth, 10 Conditional Execution, 11 Repetition and Loops, 12 Nested and Composite Control Flow.
- **Chapter IDs:** `V01-C09`, `V01-C10`, `V01-C11`, `V01-C12`
- **Learning Outcomes:** V01-LO013–V01-LO018.
- **Skills:** Truth tables, decision tables, branching, loop design, termination reasoning, control-flow simplification.
- **Projects:** Mini Project 03 — Rule-Based Workflow.
- **Project ID:** `V01-P03`
- **Assessment:** Chapter assessments 09-12, Labs 09-12, control-flow review, Mini Project 03.

## Module 4 — Functions and Decomposition

- **Module ID:** `V01-M04`

- **Purpose:** Davranışı açık sözleşmeli ve test edilebilir fonksiyonlara ayırmak.
- **Chapters:** 13 Functions and Contracts, 14 Parameters and Return Values, 15 Scope, Lifetime, and Side Effects, 16 Functional Decomposition and Reuse.
- **Chapter IDs:** `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`
- **Learning Outcomes:** V01-LO019–V01-LO024.
- **Skills:** Function contracts, parameter design, return modeling, scope tracing, side-effect control, decomposition.
- **Projects:** Mini Project 04 — Function-Based Utility Toolkit.
- **Project ID:** `V01-P04`
- **Assessment:** Chapter assessments 13-16, Labs 13-16, function contract review, Mini Project 04.

## Module 5 — Structured Data and Recursion

- **Module ID:** `V01-M05`

- **Purpose:** Çoklu, yapılandırılmış ve recursive veriyi modellemek ve işlemek.
- **Chapters:** 17 Collections and Iteration, 18 Records and Data Modeling, 19 Recursion and Recursive Thinking, 20 Strings and Text Processing.
- **Chapter IDs:** `V01-C17`, `V01-C18`, `V01-C19`, `V01-C20`
- **Learning Outcomes:** V01-LO025–V01-LO031.
- **Skills:** Collection traversal, record modeling, nested data access, recursion tracing, text pipeline design.
- **Projects:** Mini Project 05 — Structured Data Processor.
- **Project ID:** `V01-P05`
- **Assessment:** Chapter assessments 17-20, Labs 17-20, data model review, Mini Project 05.

## Module 6 — Algorithms and Efficiency

- **Module ID:** `V01-M06`

- **Purpose:** Temel algoritma seçeneklerini doğruluk ve maliyet açısından değerlendirmek.
- **Chapters:** 21 Searching Algorithms, 22 Sorting Algorithms, 23 Algorithmic Complexity and Trade-offs.
- **Chapter IDs:** `V01-C21`, `V01-C22`, `V01-C23`
- **Learning Outcomes:** V01-LO032–V01-LO037.
- **Skills:** Linear/binary search, sorting trace, invariants, operation counting, Big O communication, selection rationale.
- **Projects:** Mini Project 06 — Algorithm Workbench.
- **Project ID:** `V01-P06`
- **Assessment:** Chapter assessments 21-23, Labs 21-23, algorithm review, Mini Project 06.

## Module 7 — Reliability and Program Design

- **Module ID:** `V01-M07`

- **Purpose:** Programı failure, debugging, test, readability ve change açısından güvenilir hale getirmek.
- **Chapters:** 24 Errors and Failure Modes, 25 Systematic Debugging, 26 Testing Fundamentals, 27 Clean Code and Refactoring, 28 Program Design from Requirements to Delivery.
- **Chapter IDs:** `V01-C24`, `V01-C25`, `V01-C26`, `V01-C27`, `V01-C28`
- **Learning Outcomes:** V01-LO038–V01-LO046.
- **Skills:** Failure classification, hypothesis-driven debugging, test design, naming, refactoring, modular design, technical review.
- **Projects:** Capstone — Reliable Command-Line Problem Solver.
- **Project ID:** `V01-CP01`
- **Assessment:** Chapter assessments 24-28, Labs 24-28, Final Assessment, Technical Review, Code Review, Capstone Evaluation, Self Assessment.

## Cross-Module Traceability

| Module | Consumes | Produces |
| --- | --- | --- |
| `V01-M01` | Volume 00 study discipline | Executable problem model |
| `V01-M02` | Algorithm and trace | Data and state model |
| `V01-M03` | Expressions and state | Controlled program behavior |
| `V01-M04` | Repeated control behavior | Function contracts and modules |
| `V01-M05` | Functions and iteration | Structured-data processing |
| `V01-M06` | Collections and functions | Algorithm selection rationale |
| `V01-M07` | All prior outputs | Reliable, reviewed program |

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

- [Learning Outcomes](./learning-outcomes.md)
- [Projects](./projects.md)
- [Assessment](./assessment.md)
