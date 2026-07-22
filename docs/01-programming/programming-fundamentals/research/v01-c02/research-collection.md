---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "Research Collection: How Computers Execute Programs"
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
  - "./research-request.md"
  - "./source-strategy.md"
  - "./source-candidate-register.md"
  - "./atomic-evidence-register.md"
x-production-unit: "v01-c02"
x-research-stage: "Research Collection"
x-access-date: "2026-07-22"
---
# Research Collection: How Computers Execute Programs

## Purpose

Bu belge, Sprint 07A'da seçilen kaynaklardan locator düzeyinde incelenen araştırma sonuçlarını kaynak bazında düzenler. Ders anlatımı veya Research Packet değildir.

## Scope

Koleksiyon 25 doğrulanmış belgeyi, 92 atomik kanıtı ve `V01-LO003`/`V01-LO004` eşlemelerini kapsar.

## Ownership

Research Engineer erişim ve extraction kaydından; Technical Reviewer Sprint 07C'de doğruluk, kapsam ve conflict kararından sorumludur.

## Content

### Collection Summary

| Metric | Value |
| --- | ---: |
| Sources reviewed and verified | 25 |
| Atomic evidence | 92 |
| Official/specification documents | 16 |
| Academic documents | 11 |
| Evidence with exact locator | 92 |

### `V01-C02-SRC-006` — CS61C Course Notes — C Basics Introduction

- **Source ID:** ``V01-C02-SRC-006``
- **Title:** CS61C Course Notes — C Basics Introduction
- **Organization:** University of California, Berkeley
- **Type:** University course notes
- **Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://notes.cs61c.org/content/c-basics/)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §3 Great Idea #1, Figure 3 and lines under the stored-program discussion; §4 High-level programming languages
- **Relevant Topics:** Program and source code
- **Extracted Evidence IDs:** `V01-C02-EV-001`, `V01-C02-EV-002`
- **Authority Assessment:** Academic
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 2 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-007` — CS61C Course Notes — RISC-V Introduction

- **Source ID:** ``V01-C02-SRC-007``
- **Title:** CS61C Course Notes — RISC-V Introduction
- **Organization:** University of California, Berkeley
- **Type:** University course notes
- **Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://notes.cs61c.org/content/rv-intro/)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Introduction, Figure 1 and paragraph immediately below it; §1.1 Instruction Set Architecture; Introduction, Figure 1 and §1.1; §2 RISC vs. CISC, 'Different CPUs implement different ISAs'
- **Relevant Topics:** Program and source code; Machine code, assembly, and ISA
- **Extracted Evidence IDs:** `V01-C02-EV-003`, `V01-C02-EV-027`, `V01-C02-EV-028`, `V01-C02-EV-029`
- **Authority Assessment:** Academic
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 4 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-010` — OSTEP — The Abstraction: The Process

- **Source ID:** ``V01-C02-SRC-010``
- **Title:** OSTEP — The Abstraction: The Process
- **Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Type:** Open academic textbook
- **Version:** 1.10
- **Publication Date:** November 2023
- **URL:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Chapter 4, opening paragraph, PDF page 1; §4.1 The Abstraction: A Process, PDF page 2; §4.3 Process Creation: A Little More Detail, PDF page 4; §4.3 Process Creation, PDF page 5; §4.1 and §4.3; cross-checked with OSTEP Chapter 6 protocol; §4.1 The Abstraction: A Process, PDF pages 2–3; Chapter 6 §6.3, PDF page 8; Aside: Key Process Terms, PDF page 10; Chapter 4 opening and §4.1; §4.4 Process States, Figures 4.3 and 4.4, PDF pages 6–7
- **Relevant Topics:** Program and source code; Compilation, interpretation, linking, and loading; CPU, registers, program counter, and execution cycle; Process, thread, and runtime; LO004 state tracing
- **Extracted Evidence IDs:** `V01-C02-EV-004`, `V01-C02-EV-005`, `V01-C02-EV-020`, `V01-C02-EV-021`, `V01-C02-EV-022`, `V01-C02-EV-049`, `V01-C02-EV-050`, `V01-C02-EV-051`, `V01-C02-EV-065`, `V01-C02-EV-066`, `V01-C02-EV-067`, `V01-C02-EV-088`
- **Authority Assessment:** Academic textbook
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 12 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-004` — 15-213 Introduction to Computer Systems

- **Source ID:** ``V01-C02-SRC-004``
- **Title:** 15-213 Introduction to Computer Systems
- **Organization:** Carnegie Mellon University
- **Type:** University course profile
- **Version:** Course profile
- **Publication Date:** Updated November 2017
- **URL:** [Canonical source](https://csd.cs.cmu.edu/15213-introduction-to-computer-systems)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Course Goals/Objectives
- **Relevant Topics:** Program and source code
- **Extracted Evidence IDs:** `V01-C02-EV-006`
- **Authority Assessment:** Academic
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-022` — Python Language Reference — Execution Model

- **Source ID:** ``V01-C02-SRC-022``
- **Title:** Python Language Reference — Execution Model
- **Organization:** Python Software Foundation
- **Type:** Official language documentation
- **Version:** Python 3.14.6
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://docs.python.org/3/reference/executionmodel.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §4.1 Structure of a program
- **Relevant Topics:** Program and source code; Process, thread, and runtime
- **Extracted Evidence IDs:** `V01-C02-EV-007`, `V01-C02-EV-072`
- **Authority Assessment:** Official documentation
- **Limitations:** Python/CPython kapsamıyla sınırlıdır.
- **Research Notes:** 2 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-005` — CS107 General Information and Syllabus

- **Source ID:** ``V01-C02-SRC-005``
- **Title:** CS107 General Information and Syllabus
- **Organization:** Stanford University
- **Type:** University course syllabus
- **Version:** Summer 2026
- **Publication Date:** Updated 2026-03-30
- **URL:** [Canonical source](https://web.stanford.edu/class/cs107/syllabus.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Course Overview
- **Relevant Topics:** Program and source code
- **Extracted Evidence IDs:** `V01-C02-EV-008`
- **Authority Assessment:** Academic
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-014` — GCC Overall Options

- **Source ID:** ``V01-C02-SRC-014``
- **Title:** GCC Overall Options
- **Organization:** GNU Project
- **Type:** Official toolchain documentation
- **Version:** Rolling GCC manual
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §3.2 Options Controlling the Kind of Output, opening paragraph; §3.2, `-E` / `--preprocess`; §3.2, `-S` / `--assemble`; §3.2, `-c` / `--compile`
- **Relevant Topics:** Compilation, interpretation, linking, and loading
- **Extracted Evidence IDs:** `V01-C02-EV-009`, `V01-C02-EV-010`, `V01-C02-EV-011`, `V01-C02-EV-012`, `V01-C02-EV-013`
- **Authority Assessment:** Official documentation
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 5 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-015` — GNU ld — Overview

- **Source ID:** ``V01-C02-SRC-015``
- **Title:** GNU ld — Overview
- **Organization:** GNU Binutils
- **Type:** Official linker documentation
- **Version:** Binutils 2.46
- **Publication Date:** 2026-02-08 documentation snapshot
- **URL:** [Canonical source](https://sourceware.org/binutils/docs/ld/Overview.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §1 Overview, first paragraph
- **Relevant Topics:** Compilation, interpretation, linking, and loading
- **Extracted Evidence IDs:** `V01-C02-EV-014`, `V01-C02-EV-015`, `V01-C02-EV-016`
- **Authority Assessment:** Official documentation
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 3 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-016` — GNU ld — Setting the Entry Point

- **Source ID:** ``V01-C02-SRC-016``
- **Title:** GNU ld — Setting the Entry Point
- **Organization:** GNU Binutils
- **Type:** Official linker documentation
- **Version:** Binutils 2.46
- **Publication Date:** 2026-02-08 documentation snapshot
- **URL:** [Canonical source](https://sourceware.org/binutils/docs/ld/Entry-Point.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §3.4.1 Setting the Entry Point
- **Relevant Topics:** Compilation, interpretation, linking, and loading
- **Extracted Evidence IDs:** `V01-C02-EV-017`
- **Authority Assessment:** Official documentation
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-019` — PE Format

- **Source ID:** ``V01-C02-SRC-019``
- **Title:** PE Format
- **Organization:** Microsoft
- **Type:** Official executable-format documentation
- **Version:** PE/COFF rolling documentation
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Optional Header Standard Fields, `AddressOfEntryPoint`; PE terminology: RVA/VA; Section Table fields
- **Relevant Topics:** Compilation, interpretation, linking, and loading; Memory, virtual address space, stack, and heap
- **Extracted Evidence IDs:** `V01-C02-EV-018`, `V01-C02-EV-064`
- **Authority Assessment:** Vendor documentation
- **Limitations:** Windows/PE özgüdür; diğer sistemlere genellenmez.
- **Research Notes:** 2 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-017` — POSIX exec Functions

- **Source ID:** ``V01-C02-SRC-017``
- **Title:** POSIX exec Functions
- **Organization:** The Open Group
- **Type:** Operating-system API standard
- **Version:** POSIX.1-2024 Issue 8
- **Publication Date:** 2024
- **URL:** [Canonical source](https://pubs.opengroup.org/onlinepubs/9799919799/functions/exec.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** DESCRIPTION, opening normative paragraphs
- **Relevant Topics:** Compilation, interpretation, linking, and loading
- **Extracted Evidence IDs:** `V01-C02-EV-019`
- **Authority Assessment:** Official standard
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-008` — Nand2Tetris Project 04 — Machine Language

- **Source ID:** ``V01-C02-SRC-008``
- **Title:** Nand2Tetris Project 04 — Machine Language
- **Organization:** Nand2Tetris
- **Type:** Official academic course material
- **Version:** Website 2025
- **Publication Date:** 2025
- **URL:** [Canonical source](https://www.nand2tetris.org/project04)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Project 4, Background and Guidelines / Tests; Project 4, Background
- **Relevant Topics:** Compilation, interpretation, linking, and loading; Machine code, assembly, and ISA
- **Extracted Evidence IDs:** `V01-C02-EV-023`, `V01-C02-EV-025`, `V01-C02-EV-026`
- **Authority Assessment:** Academic
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 3 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-020` — WebAssembly Core Specification — Introduction

- **Source ID:** ``V01-C02-SRC-020``
- **Title:** WebAssembly Core Specification — Introduction
- **Organization:** W3C WebAssembly Community Group
- **Type:** Official specification
- **Version:** 3.0
- **Publication Date:** 2026-07-10
- **URL:** [Canonical source](https://webassembly.github.io/spec/core/intro/introduction.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Introduction, Design Goals — Efficient and portable representation; Introduction, opening paragraph; Design Goals — Efficient and portable representation
- **Relevant Topics:** Compilation, interpretation, linking, and loading; Virtual machine, bytecode, and JIT
- **Extracted Evidence IDs:** `V01-C02-EV-024`, `V01-C02-EV-073`, `V01-C02-EV-074`
- **Authority Assessment:** Official specification
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 3 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-013` — RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set

- **Source ID:** ``V01-C02-SRC-013``
- **Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Organization:** RISC-V International
- **Type:** Official ISA specification
- **Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **URL:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §2.1.1 Programmers' Model for Base Integer ISA; §2.1.2 Base Instruction Formats; §2.1.4.2 Integer Register-Register Instructions; §2.1.6 Load and Store Instructions; §2.1.4.3 NOP Instruction; §2.1.5 Control Transfer Instructions
- **Relevant Topics:** Machine code, assembly, and ISA; CPU, registers, program counter, and execution cycle
- **Extracted Evidence IDs:** `V01-C02-EV-030`, `V01-C02-EV-031`, `V01-C02-EV-032`, `V01-C02-EV-033`, `V01-C02-EV-034`, `V01-C02-EV-044`, `V01-C02-EV-045`, `V01-C02-EV-046`, `V01-C02-EV-047`, `V01-C02-EV-048`
- **Authority Assessment:** Official specification
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 10 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-024` — Java Virtual Machine Specification

- **Source ID:** ``V01-C02-SRC-024``
- **Title:** Java Virtual Machine Specification
- **Organization:** Oracle / Java Community Process
- **Type:** Official virtual-machine specification
- **Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **URL:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Chapter 2 opening paragraphs; §2.1 The class File Format; §2.5.2 Java Virtual Machine Stacks; §2.5.3 Heap; §2.5 Run-Time Data Areas; Chapter 2 opening paragraphs, implementation discretion
- **Relevant Topics:** Machine code, assembly, and ISA; Memory, virtual address space, stack, and heap; Process, thread, and runtime; Virtual machine, bytecode, and JIT
- **Extracted Evidence IDs:** `V01-C02-EV-035`, `V01-C02-EV-036`, `V01-C02-EV-062`, `V01-C02-EV-063`, `V01-C02-EV-071`, `V01-C02-EV-076`, `V01-C02-EV-077`
- **Authority Assessment:** Official specification
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 7 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-003` — 6.004 Beta Documentation

- **Source ID:** ``V01-C02-SRC-003``
- **Title:** 6.004 Beta Documentation
- **Organization:** Massachusetts Institute of Technology
- **Type:** University architecture specification
- **Version:** Spring 2009
- **Publication Date:** 2009
- **URL:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §2 Machine Model, PDF page 2; §2 Machine Model diagram, PDF page 2; §5 Instruction Specifications, PDF page 3; §5.1 ADD, Operation, PDF page 4; §5.5 BEQ/BF, Operation, PDF page 5; §5 Instruction Specifications, timing-scope paragraph, PDF page 3
- **Relevant Topics:** CPU, registers, program counter, and execution cycle; LO004 state tracing
- **Extracted Evidence IDs:** `V01-C02-EV-037`, `V01-C02-EV-038`, `V01-C02-EV-039`, `V01-C02-EV-040`, `V01-C02-EV-041`, `V01-C02-EV-042`, `V01-C02-EV-043`, `V01-C02-EV-052`, `V01-C02-EV-087`
- **Authority Assessment:** Academic specification
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 9 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-018` — Virtual Address Space

- **Source ID:** ``V01-C02-SRC-018``
- **Title:** Virtual Address Space
- **Organization:** Microsoft
- **Type:** Official platform documentation
- **Version:** Win32 documentation
- **Publication Date:** Last updated 2021-01-07
- **URL:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Virtual Address Space, opening paragraph; Virtual Address Space, second paragraph
- **Relevant Topics:** Memory, virtual address space, stack, and heap
- **Extracted Evidence IDs:** `V01-C02-EV-053`, `V01-C02-EV-054`, `V01-C02-EV-055`, `V01-C02-EV-056`
- **Authority Assessment:** Vendor documentation
- **Limitations:** Windows/PE özgüdür; diğer sistemlere genellenmez.
- **Research Notes:** 4 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-011` — OSTEP — The Abstraction: Address Spaces

- **Source ID:** ``V01-C02-SRC-011``
- **Title:** OSTEP — The Abstraction: Address Spaces
- **Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Type:** Open academic textbook
- **Version:** 1.10
- **Publication Date:** November 2023
- **URL:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Chapter 13, §13.2 The Address Space, PDF page 3; Chapter 13, Figure 13.3 and surrounding text, PDF pages 3–4; Chapter 13, §13.2, PDF page 3; Chapter 13, Figure 13.3 discussion, PDF page 4
- **Relevant Topics:** Memory, virtual address space, stack, and heap
- **Extracted Evidence IDs:** `V01-C02-EV-057`, `V01-C02-EV-058`, `V01-C02-EV-059`, `V01-C02-EV-060`, `V01-C02-EV-061`
- **Authority Assessment:** Academic textbook
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 5 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-012` — OSTEP — Concurrency: An Introduction

- **Source ID:** ``V01-C02-SRC-012``
- **Title:** OSTEP — Concurrency: An Introduction
- **Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Type:** Open academic textbook
- **Version:** 1.10
- **Publication Date:** November 2023
- **URL:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Chapter 26 opening, PDF page 1
- **Relevant Topics:** Process, thread, and runtime
- **Extracted Evidence IDs:** `V01-C02-EV-068`, `V01-C02-EV-069`, `V01-C02-EV-070`
- **Authority Assessment:** Academic textbook
- **Limitations:** Akademik/pedagojik kaynak; normatif davranış için spesifikasyonla birlikte kullanılır.
- **Research Notes:** 3 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-021` — WebAssembly Core Specification — Execution Conventions

- **Source ID:** ``V01-C02-SRC-021``
- **Title:** WebAssembly Core Specification — Execution Conventions
- **Organization:** W3C WebAssembly Community Group
- **Type:** Official specification
- **Version:** 3.0
- **Publication Date:** 2026-07-10
- **URL:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Conventions, opening execution paragraphs; Conventions, §Prose Notation; Conventions, §Formal Notation, configuration tuple; Conventions, §Formal Notation, reduction-rule form; Conventions, §Prose Notation, jump rule
- **Relevant Topics:** Virtual machine, bytecode, and JIT; LO004 state tracing
- **Extracted Evidence IDs:** `V01-C02-EV-075`, `V01-C02-EV-081`, `V01-C02-EV-082`, `V01-C02-EV-083`, `V01-C02-EV-084`, `V01-C02-EV-085`, `V01-C02-EV-086`
- **Authority Assessment:** Official specification
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 7 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-023` — Python dis — Disassembler for Python Bytecode

- **Source ID:** ``V01-C02-SRC-023``
- **Title:** Python dis — Disassembler for Python Bytecode
- **Organization:** Python Software Foundation
- **Type:** Official implementation documentation
- **Version:** Python 3.14.6
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://docs.python.org/3/library/dis.html)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** `dis` module introduction and implementation-detail note
- **Relevant Topics:** Virtual machine, bytecode, and JIT
- **Extracted Evidence IDs:** `V01-C02-EV-078`
- **Authority Assessment:** Official documentation
- **Limitations:** Python/CPython kapsamıyla sınırlıdır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-026` — Launching Ignition and TurboFan

- **Source ID:** ``V01-C02-SRC-026``
- **Title:** Launching Ignition and TurboFan
- **Organization:** V8 Project
- **Type:** Official engineering article
- **Version:** Historical V8 architecture
- **Publication Date:** 2017-05-16
- **URL:** [Canonical source](https://v8.dev/blog/launching-ignition-and-turbofan)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Launching Ignition and TurboFan, architecture overview
- **Relevant Topics:** Virtual machine, bytecode, and JIT
- **Extracted Evidence IDs:** `V01-C02-EV-079`
- **Authority Assessment:** Official engineering history
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-025` — ECMA-335 Common Language Infrastructure

- **Source ID:** ``V01-C02-SRC-025``
- **Title:** ECMA-335 Common Language Infrastructure
- **Organization:** Ecma International
- **Type:** Official standard
- **Version:** 6th edition
- **Publication Date:** June 2012
- **URL:** [Canonical source](https://dev.ecma-international.org/publications-and-standards/standards/ecma-335/)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Standard overview, Partition I: Concepts and Architecture
- **Relevant Topics:** Virtual machine, bytecode, and JIT
- **Extracted Evidence IDs:** `V01-C02-EV-080`
- **Authority Assessment:** Official standard
- **Limitations:** Kaynağın tanımladığı mimari, standart veya araç kapsamıyla sınırlıdır.
- **Research Notes:** 1 atomik kayıt çıkarıldı; exact-locator paraphrase kullanıldı.

### `V01-C02-SRC-002` — MIT 6.004 Computation Structures, 9.1 Annotated Slides

- **Source ID:** `V01-C02-SRC-002`
- **Title:** MIT 6.004 Computation Structures — 9.1 Annotated Slides
- **Organization:** Massachusetts Institute of Technology OpenCourseWare
- **Type:** Academic course material
- **Version:** Spring 2017
- **Publication Date:** 2017
- **URL:** [Canonical source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** §9.1 Annotated Slides; fetch, instruction fields, control signals, ALU result and PC update
- **Relevant Topics:** Fetch-decode-execute, program counter, instruction format, architectural state
- **Extracted Evidence IDs:** `V01-C02-EV-089`, `V01-C02-EV-090`, `V01-C02-EV-091`
- **Authority Assessment:** University course material from a primary computer architecture course
- **Limitations:** The single-cycle presentation is an architectural teaching model, not a timing description of every modern processor.
- **Research Notes:** Three exact-locator evidence records extracted.

### `V01-C02-SRC-027` — CS61C Notes, Datapath Summary

- **Source ID:** `V01-C02-SRC-027`
- **Title:** CS61C Notes — Datapath Summary
- **Organization:** University of California, Berkeley
- **Type:** University course notes
- **Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **URL:** [Canonical source](https://notes.cs61c.org/content/datapath/summary/)
- **Access Date:** 2026-07-22
- **Reviewed Sections:** Instruction Fetch (IF), Instruction Decode (ID), Execute (EX)
- **Relevant Topics:** Processor datapath and fetch-decode-execute cycle
- **Extracted Evidence IDs:** `V01-C02-EV-092`
- **Authority Assessment:** University course material from an approved Sprint 07A academic source family
- **Limitations:** The instructional datapath model is not a universal microarchitecture timing description.
- **Research Notes:** One independent academic confirmation record extracted.

## Validation

- En az 20 doğrulanmış kaynak şartı karşılandı: 25.
- Community kaynakları temel kanıt yapılmadı.
- JavaScript engine ayrıntıları tarihsel execution-path karşılaştırmasıyla sınırlandı.
- Research Packet veya educational content üretilmedi.

## References

- [Atomic Evidence Register](./atomic-evidence-register.md)
- [Source Locator Register](./source-locator-register.md)
- [Conflict Register](./conflict-register.md)
- [Research Gap Register](./research-gap-register.md)
