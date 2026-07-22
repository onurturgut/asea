---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-LO-001"
supporting_document_type: "Learning Outcomes Registry"
title: "Learning Outcome Evidence Map: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids:
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
derived_from:
  - "./atomic-evidence-register.md"
  - "./source-locator-register.md"
  - "./conflict-register.md"
x-production-unit: "v01-c02"
x-research-stage: "Learning Outcome Mapping"
x-access-date: "2026-07-22"
---

# Learning Outcome Evidence Map: How Computers Execute Programs

## Purpose

Bu belge, `V01-C02` için kanonik öğrenme çıktılarının doğrulanmış atomik kanıtlarla karşılanıp karşılanmadığını gösterir. Öğrenme çıktılarının metni değiştirilmeden kullanılmıştır.

## Scope

Yalnızca `V01-LO003` ve `V01-LO004` kapsamdadır. Bu harita Research Validation girdisidir; lesson, assessment veya kanonik Knowledge Foundation kaydı değildir.

## Ownership

Knowledge Engineer eşlemelerin bütünlüğünden; Technical Reviewer kanıtların iddiaları gerçekten desteklediğini doğrulamaktan sorumludur.

## Content

### Canonical Learning Outcomes

| Learning Outcome ID | Canonical Statement |
| --- | --- |
| `V01-LO003` | Source code, runtime, memory, input ve output ilişkisini doğru execution model ile açıklayabilmek |
| `V01-LO004` | Küçük bir talimat dizisinde her adımdan sonra oluşan state'i hatasız trace edebilmek |

### Coverage Summary

| LO | Evidence | Verified source documents | Independent source families | Official/specification support | Academic support | Result |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `V01-LO003` | 84 | 25 | 12+ | 16 documents | 11 documents | PASS |
| `V01-LO004` | 8 | 3 | 3 | WebAssembly execution specification | MIT Beta and OSTEP | PASS |

### Learning Outcome Registry View

| Learning Outcome ID | Learning Outcome Statement | Required Concepts | Evidence IDs | Source Diversity | Coverage Status | Gap Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `V01-LO003` | Source code, runtime, memory, input ve output ilişkisini doğru execution model ile açıklayabilmek | Source code, compiler, interpreter, assembly, machine code, ISA, CPU, memory, runtime, process, input, output | `V01-C02-EV-001`–`V01-C02-EV-080`; `V01-C02-EV-089`–`V01-C02-EV-092` | 25 documents; 17 organizations; 12+ independent families | PASS | Blocking/Major gap yok; runtime terminology review bekliyor. |
| `V01-LO004` | Küçük bir talimat dizisinde her adımdan sonra oluşan state'i hatasız trace edebilmek | Current instruction, PC, register/work area, memory, input, output, control flow, next state | `V01-C02-EV-081`–`V01-C02-EV-088` | WebAssembly, MIT and OSTEP | PASS | Blocking/Major gap yok; PC-before/after convention reviewer onayı bekliyor. |

### `V01-LO003` Evidence Mapping

| Required Knowledge Area | Evidence IDs | Source Diversity | Coverage |
| --- | --- | --- | --- |
| Program, source code and executable representation | `EV-001`–`EV-008` | Berkeley, OSTEP, CMU, Python, Stanford | Complete |
| Compilation, assembly, linking and loading | `EV-009`–`EV-024` | GCC, GNU ld, Microsoft PE, POSIX, OSTEP, Nand2Tetris, WebAssembly | Complete |
| Machine code, assembly and ISA | `EV-025`–`EV-036` | Nand2Tetris, Berkeley, RISC-V, JVM | Complete |
| CPU, register, PC and state transition | `EV-037`–`EV-052` | MIT Beta, RISC-V, OSTEP | Complete |
| Memory, address space, stack and heap | `EV-053`–`EV-064` | Microsoft, OSTEP, JVM, PE specification | Complete |
| Process, thread and runtime state | `EV-065`–`EV-072` | OSTEP, JVM, Python | Complete |
| VM, bytecode, interpreter and JIT | `EV-073`–`EV-080` | WebAssembly, JVM, Python, V8, ECMA-335 | Complete |
| Fetch-decode-execute model | `EV-089`–`EV-092` | MIT and Berkeley | Complete |

> `EV-nnn` shorthand in this document expands to `V01-C02-EV-nnn`.

#### `V01-LO003` Reasoning Chain

1. Source text and program representation are distinct from the running instance: `EV-001`–`EV-008`, `EV-065`–`EV-067`.
2. Translation and loading may follow multiple valid paths: `EV-009`–`EV-024`, `EV-073`–`EV-080`.
3. The target execution model exposes instructions and architectural state: `EV-025`–`EV-052`.
4. A running program has memory and runtime state governed by its environment: `EV-053`–`EV-072`.
5. Input and output can cause observable state transitions and OS interaction: `EV-022`, `EV-051`, `EV-088`.
6. The simplified processor cycle is supported but bounded as a conceptual model: `EV-089`–`EV-092`, `V01-C02-CF-007`.

### `V01-LO004` Evidence Mapping

| Evidence ID | Contribution to Trace Skill | Authority | Model |
| --- | --- | --- | --- |
| `V01-C02-EV-081` | Adımlı yürütme dizisini tanımlar. | Official specification | WebAssembly prose execution |
| `V01-C02-EV-082` | State/configuration bileşenlerini ayırır. | Official specification | WebAssembly configuration tuple |
| `V01-C02-EV-083` | Önceki ve sonraki state arasında formal transition kurar. | Official specification | Reduction relation |
| `V01-C02-EV-084` | Normal sıra, trap ve jump ayrımını korur. | Official specification | Control flow |
| `V01-C02-EV-085` | Jump sonrası next-step seçimini gösterir. | Official specification | Control transfer |
| `V01-C02-EV-086` | State mutation'ın gözlenebilir etkisini doğrular. | Official specification | Store/stack state |
| `V01-C02-EV-087` | Register sonucu ve PC artışını somutlaştırır. | Academic architecture document | MIT Beta ADD transition |
| `V01-C02-EV-088` | Zaman, process state ve I/O geçişlerini ilişkilendirir. | Academic textbook | OSTEP process trace |

#### `V01-LO004` Acceptance Check

- En az 8 atomik kanıt: **8 — PASS**.
- En az iki akademik kaynak: **MIT Beta ve OSTEP — PASS**.
- En az bir resmî architecture/VM kaynağı: **WebAssembly Core Specification — PASS**.
- En az bir açık state-transition modeli: **WebAssembly reduction relation ve MIT Beta operation semantics — PASS**.
- PC before/after ayrımı: `V01-C02-CF-003` ile sınırlandırıldı — **PASS**.

### Critical Claim Dual-Source Matrix

| Critical Claim Area | Primary Evidence | Independent Confirmation | Independent Families | Result |
| --- | --- | --- | ---: | --- |
| ISA is a software-visible contract | `EV-027`, `EV-030`–`EV-034` | `EV-037`–`EV-043` | RISC-V + MIT | PASS |
| Fetch-decode-execute conceptual cycle | `EV-089`–`EV-091` | `EV-092` | MIT + Berkeley | PASS |
| Program counter participates in sequencing | `EV-031`, `EV-039`, `EV-044` | `EV-041`, `EV-043`, `EV-047` | RISC-V + MIT | PASS |
| Program and process are distinct | `EV-004`, `EV-005` | `EV-065`–`EV-067` | OSTEP chapters + CMU scope evidence | PASS |
| Virtual address is not physical address | `EV-053`–`EV-056` | `EV-057`, `EV-058`, `EV-064` | Microsoft + OSTEP + PE | PASS |
| Stack and heap are runtime-specific structures | `EV-058`–`EV-061` | `EV-062`, `EV-063` | OSTEP + JVM | PASS |
| Compilation, linking and loading are distinct | `EV-009`–`EV-018` | `EV-019`–`EV-023` | GCC + GNU + Microsoft + POSIX + OSTEP + Nand2Tetris | PASS |
| VM execution differs from native execution | `EV-035`, `EV-036`, `EV-073`–`EV-077` | `EV-078`–`EV-080` | JVM + WebAssembly + Python + V8 + ECMA | PASS |
| Bytecode targets a VM contract | `EV-036`, `EV-076` | `EV-073`, `EV-078`, `EV-080` | JVM + WebAssembly + Python + ECMA | PASS |
| JIT is an optional implementation strategy | `EV-074`, `EV-077` | `EV-079` | WebAssembly + JVM + V8 | PASS |
| Program execution is a state-transition sequence | `EV-040`–`EV-048` | `EV-081`–`EV-088` | MIT + RISC-V + WebAssembly + OSTEP | PASS |

Critical claim areas with two or more independent source families: **11/11 (100%)**.

### Assessment Alignment Boundary

Bu sprint assessment üretmez. Mevcut assessment bağları yalnızca kapsam denetimi için korunur:

| LO | Assessment Expectation for Later Sprint | Evidence Basis |
| --- | --- | --- |
| `V01-LO003` | Öğrencinin source-to-execution yolunu doğru model ve sınırlarla açıklaması | `EV-001`–`EV-080`, `EV-089`–`EV-092` |
| `V01-LO004` | Verilen küçük instruction sequence için state-before/state-after trace üretmesi | `EV-081`–`EV-088` |

## Validation

- Kanonik LO metni değiştirilmedi.
- Her evidence ID Atomic Evidence Register içinde bulunmalıdır.
- `V01-LO003` ve `V01-LO004` için evidence coverage PASS'tir.
- Critical claims dual-source coverage: 100%.
- LO004 özel kabul ölçütlerinin tamamı karşılandı.
- Yeni learning outcome, assessment, concept, claim veya canonical evidence oluşturulmadı.

## References

- [Atomic Evidence Register](./atomic-evidence-register.md)
- [Source Locator Register](./source-locator-register.md)
- [Conflict Register](./conflict-register.md)
- [Research Gap Register](./research-gap-register.md)
