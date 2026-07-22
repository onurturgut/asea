---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-REF-003"
supporting_document_type: "References"
title: "Source Locator Register: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
derived_from:
  - "./source-candidate-register.md"
  - "./atomic-evidence-register.md"
x-production-unit: "v01-c02"
x-research-stage: "Locator Verification"
x-access-date: "2026-07-22"
---
# Source Locator Register: How Computers Execute Programs

## Purpose

Bu kayıt, her atomik kanıtın kaynak içindeki kesin yerini ve doğrulama durumunu gösterir.

## Scope

Kayıt `V01-C02-EV-001`–`V01-C02-EV-092` aralığını kapsar. Ana sayfa URL'si tek başına locator kabul edilmemiştir.

## Ownership

Research Engineer locator'ları kaydeder; Sprint 07C reviewer'ı kaynak metinle birebir eşleşmeyi yeniden doğrular.

## Content

| Source ID | Evidence ID | Locator Type | Locator | URL | Locator Status | Verification Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| V01-C02-SRC-006 | `V01-C02-EV-001` | Section/heading | §3 Great Idea #1, Figure 3 and lines under the stored-program discussion | [Source](https://notes.cs61c.org/content/c-basics/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-006 | `V01-C02-EV-002` | Section/heading | §4 High-level programming languages | [Source](https://notes.cs61c.org/content/c-basics/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-007 | `V01-C02-EV-003` | Section/heading | Introduction, Figure 1 and paragraph immediately below it | [Source](https://notes.cs61c.org/content/rv-intro/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-004` | Section/heading | Chapter 4, opening paragraph, PDF page 1 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-005` | Section/heading | §4.1 The Abstraction: A Process, PDF page 2 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-004 | `V01-C02-EV-006` | Section/heading | Course Goals/Objectives | [Source](https://csd.cs.cmu.edu/15213-introduction-to-computer-systems) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-022 | `V01-C02-EV-007` | Section/heading | §4.1 Structure of a program | [Source](https://docs.python.org/3/reference/executionmodel.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-005 | `V01-C02-EV-008` | Section/heading | Course Overview | [Source](https://web.stanford.edu/class/cs107/syllabus.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-014 | `V01-C02-EV-009` | Section/heading | §3.2 Options Controlling the Kind of Output, opening paragraph | [Source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-014 | `V01-C02-EV-010` | Section/heading | §3.2 Options Controlling the Kind of Output, opening paragraph | [Source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-014 | `V01-C02-EV-011` | Section/heading | §3.2, `-E` / `--preprocess` | [Source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-014 | `V01-C02-EV-012` | Section/heading | §3.2, `-S` / `--assemble` | [Source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-014 | `V01-C02-EV-013` | Section/heading | §3.2, `-c` / `--compile` | [Source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-015 | `V01-C02-EV-014` | Section/heading | §1 Overview, first paragraph | [Source](https://sourceware.org/binutils/docs/ld/Overview.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-015 | `V01-C02-EV-015` | Section/heading | §1 Overview, first paragraph | [Source](https://sourceware.org/binutils/docs/ld/Overview.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-015 | `V01-C02-EV-016` | Section/heading | §1 Overview, first paragraph | [Source](https://sourceware.org/binutils/docs/ld/Overview.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-016 | `V01-C02-EV-017` | Section/heading | §3.4.1 Setting the Entry Point | [Source](https://sourceware.org/binutils/docs/ld/Entry-Point.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-019 | `V01-C02-EV-018` | Section/heading | Optional Header Standard Fields, `AddressOfEntryPoint` | [Source](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-017 | `V01-C02-EV-019` | Section/heading | DESCRIPTION, opening normative paragraphs | [Source](https://pubs.opengroup.org/onlinepubs/9799919799/functions/exec.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-020` | Section/heading | §4.3 Process Creation: A Little More Detail, PDF page 4 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-021` | Section/heading | §4.3 Process Creation, PDF page 5 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-022` | Section/heading | §4.3 Process Creation, PDF page 5 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-008 | `V01-C02-EV-023` | Section/heading | Project 4, Background and Guidelines / Tests | [Source](https://www.nand2tetris.org/project04) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-020 | `V01-C02-EV-024` | Section/heading | Introduction, Design Goals — Efficient and portable representation | [Source](https://webassembly.github.io/spec/core/intro/introduction.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-008 | `V01-C02-EV-025` | Section/heading | Project 4, Background | [Source](https://www.nand2tetris.org/project04) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-008 | `V01-C02-EV-026` | Section/heading | Project 4, Background | [Source](https://www.nand2tetris.org/project04) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-007 | `V01-C02-EV-027` | Section/heading | §1.1 Instruction Set Architecture | [Source](https://notes.cs61c.org/content/rv-intro/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-007 | `V01-C02-EV-028` | Section/heading | Introduction, Figure 1 and §1.1 | [Source](https://notes.cs61c.org/content/rv-intro/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-007 | `V01-C02-EV-029` | Section/heading | §2 RISC vs. CISC, 'Different CPUs implement different ISAs' | [Source](https://notes.cs61c.org/content/rv-intro/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-030` | Section/heading | §2.1.1 Programmers' Model for Base Integer ISA | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-031` | Section/heading | §2.1.1 Programmers' Model for Base Integer ISA | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-032` | Section/heading | §2.1.2 Base Instruction Formats | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-033` | Section/heading | §2.1.4.2 Integer Register-Register Instructions | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-034` | Section/heading | §2.1.6 Load and Store Instructions | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-035` | Section/heading | Chapter 2 opening paragraphs | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-036` | Section/heading | §2.1 The class File Format | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-037` | Section/heading | §2 Machine Model, PDF page 2 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-038` | Section/heading | §2 Machine Model, PDF page 2 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-039` | Section/heading | §2 Machine Model diagram, PDF page 2 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-040` | Section/heading | §5 Instruction Specifications, PDF page 3 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-041` | Section/heading | §5.1 ADD, Operation, PDF page 4 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-042` | Section/heading | §5.1 ADD, Operation, PDF page 4 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-043` | Section/heading | §5.5 BEQ/BF, Operation, PDF page 5 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-044` | Section/heading | §2.1.1 Programmers' Model for Base Integer ISA | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-045` | Section/heading | §2.1.1 Programmers' Model for Base Integer ISA | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-046` | Section/heading | §2.1.4.2 Integer Register-Register Instructions | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-047` | Section/heading | §2.1.4.3 NOP Instruction | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-013 | `V01-C02-EV-048` | Section/heading | §2.1.5 Control Transfer Instructions | [Source](https://docs.riscv.org/reference/isa/unpriv/rv32.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-049` | Section/heading | §4.1 and §4.3; cross-checked with OSTEP Chapter 6 protocol | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-050` | Section/heading | §4.1 The Abstraction: A Process, PDF pages 2–3 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-051` | Section/heading | Chapter 6 §6.3, PDF page 8 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-052` | Section/heading | §5 Instruction Specifications, timing-scope paragraph, PDF page 3 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-018 | `V01-C02-EV-053` | Section/heading | Virtual Address Space, opening paragraph | [Source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-018 | `V01-C02-EV-054` | Section/heading | Virtual Address Space, opening paragraph | [Source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-018 | `V01-C02-EV-055` | Section/heading | Virtual Address Space, second paragraph | [Source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-018 | `V01-C02-EV-056` | Section/heading | Virtual Address Space, second paragraph | [Source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-011 | `V01-C02-EV-057` | Section/heading | Chapter 13, §13.2 The Address Space, PDF page 3 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-011 | `V01-C02-EV-058` | Section/heading | Chapter 13, Figure 13.3 and surrounding text, PDF pages 3–4 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-011 | `V01-C02-EV-059` | Section/heading | Chapter 13, §13.2, PDF page 3 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-011 | `V01-C02-EV-060` | Section/heading | Chapter 13, §13.2, PDF page 3 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-011 | `V01-C02-EV-061` | Section/heading | Chapter 13, Figure 13.3 discussion, PDF page 4 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-062` | Section/heading | §2.5.2 Java Virtual Machine Stacks | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-063` | Section/heading | §2.5.3 Heap | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-019 | `V01-C02-EV-064` | Section/heading | PE terminology: RVA/VA; Section Table fields | [Source](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-065` | Section/heading | §4.1 The Abstraction: A Process, PDF pages 2–3 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-066` | Section/heading | Aside: Key Process Terms, PDF page 10 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-067` | Section/heading | Chapter 4 opening and §4.1 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-012 | `V01-C02-EV-068` | Section/heading | Chapter 26 opening, PDF page 1 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-012 | `V01-C02-EV-069` | Section/heading | Chapter 26 opening, PDF page 1 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-012 | `V01-C02-EV-070` | Section/heading | Chapter 26 opening, PDF page 1 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-071` | Section/heading | §2.5 Run-Time Data Areas | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-022 | `V01-C02-EV-072` | Section/heading | §4.1 Structure of a program | [Source](https://docs.python.org/3/reference/executionmodel.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-020 | `V01-C02-EV-073` | Section/heading | Introduction, opening paragraph | [Source](https://webassembly.github.io/spec/core/intro/introduction.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-020 | `V01-C02-EV-074` | Section/heading | Design Goals — Efficient and portable representation | [Source](https://webassembly.github.io/spec/core/intro/introduction.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-075` | Section/heading | Conventions, opening execution paragraphs | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-076` | Section/heading | §2.1 The class File Format | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-024 | `V01-C02-EV-077` | Section/heading | Chapter 2 opening paragraphs, implementation discretion | [Source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-023 | `V01-C02-EV-078` | Section/heading | `dis` module introduction and implementation-detail note | [Source](https://docs.python.org/3/library/dis.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-026 | `V01-C02-EV-079` | Section/heading | Launching Ignition and TurboFan, architecture overview | [Source](https://v8.dev/blog/launching-ignition-and-turbofan) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-025 | `V01-C02-EV-080` | Section/heading | Standard overview, Partition I: Concepts and Architecture | [Source](https://dev.ecma-international.org/publications-and-standards/standards/ecma-335/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-081` | Section/heading | Conventions, §Prose Notation | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-082` | Section/heading | Conventions, §Formal Notation, configuration tuple | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-083` | Section/heading | Conventions, §Formal Notation, reduction-rule form | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-084` | Section/heading | Conventions, §Prose Notation | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-085` | Section/heading | Conventions, §Prose Notation, jump rule | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-021 | `V01-C02-EV-086` | Section/heading | Conventions, §Prose Notation | [Source](https://webassembly.github.io/spec/core/exec/conventions.html) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-003 | `V01-C02-EV-087` | Section/heading | §5.1 ADD, Operation, PDF page 4 | [Source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-010 | `V01-C02-EV-088` | Section/heading | §4.4 Process States, Figures 4.3 and 4.4, PDF pages 6–7 | [Source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-002 | `V01-C02-EV-089` | Section/heading | §9.1 Annotated Slides, paragraph beginning “At the start of executing an instruction” | [Source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-002 | `V01-C02-EV-090` | Section/heading | §9.1 Annotated Slides, instruction-field and control-signal explanation | [Source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-002 | `V01-C02-EV-091` | Section/heading | §9.1 Annotated Slides, ALU/result and PC-update paragraphs | [Source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |
| V01-C02-SRC-027 | `V01-C02-EV-092` | Section/heading | Datapath Summary, sections “Instruction Fetch (IF)”, “Instruction Decode (ID)” and “Execute (EX)” | [Source](https://notes.cs61c.org/content/datapath/summary/) | COMPLETE | Verified 2026-07-22 | Sprint 07C re-review pending |

## Validation

- Locator records: 92.
- COMPLETE locators: 92.
- INCOMPLETE locators: 0.
- Her kayıt section, heading, field, figure veya PDF page locator'ı taşır.

## References

- [Atomic Evidence Register](./atomic-evidence-register.md)
- [Source Candidate Register](./source-candidate-register.md)
