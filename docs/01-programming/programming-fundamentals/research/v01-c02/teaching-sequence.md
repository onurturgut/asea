---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-STUDY-001"
supporting_document_type: "Study Plan"
title: "Teaching Sequence: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Curriculum Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./knowledge-units.md", "./concept-model.md", "./mental-model.md"]
x-production-unit: "v01-c02"
x-research-stage: "Teaching Sequence Synthesis"
---

# Teaching Sequence: How Computers Execute Programs

## Purpose

Bu belge kavramları prerequisite sırasına koyar; lesson metni üretmez.

## Scope

Sıra yalnız V01-C02 knowledge units ve kanonik LO'larla sınırlıdır.

## Ownership

Curriculum Designer sıralamadan, reviewer dependency bütünlüğünden sorumludur.

## Content

### Plan Selection

Tek plan kullanılır: representation'dan running state'e, ardından instruction-state tracing'e ilerleyen prerequisite sırası.

### Schedule

| Step | Learning Goal | Required Concepts | Evidence | LO |
| ---: | --- | --- | --- | --- |
| 1 | Program, source code ve running process'i ayırmak | Program, Source Code | `EV-001`–`EV-008`, `EV-067` | `LO003` |
| 2 | Representation layers'ı tanımak | Programming Language, Assembly, Machine Code | `EV-002`, `EV-003`, `EV-023`, `EV-025`–`EV-029` | `LO003` |
| 3 | Native dönüşüm zincirini açıklamak | Compiler, Object File, Linker, Executable | `EV-009`–`EV-018` | `LO003` |
| 4 | Tek execution pipeline olmadığını açıklamak | Interpreter, Bytecode, VM, JIT | `EV-024`, `EV-035`, `EV-036`, `EV-073`–`EV-080` | `LO003` |
| 5 | Programın nasıl running state'e dönüştüğünü açıklamak | Loader, Runtime, Process | `EV-019`–`EV-022`, `EV-065`–`EV-067` | `LO003` |
| 6 | Memory modelini sınırlarıyla kurmak | Address, Virtual Address Space, Stack, Heap | `EV-053`–`EV-064` | `LO003` |
| 7 | ISA-visible machine modelini kurmak | ISA, CPU, Instruction, Register, PC | `EV-027`–`EV-052` | `LO003` |
| 8 | Kavramsal instruction cycle'ı ilişkilendirmek | Fetch-Decode-Execute, Control Flow | `EV-043`, `EV-048`, `EV-089`–`EV-092` | `LO003` |
| 9 | Process/thread ve shared/private state'i ayırmak | Process, Thread, Frame | `EV-068`–`EV-072` | `LO003` |
| 10 | Input, output ve state ilişkisini kurmak | Input, Output, State | `EV-022`, `EV-051`, `EV-066`, `EV-088` | `LO003`, `LO004` |
| 11 | Küçük instruction sequence'i izlemek için trace sözleşmesini hazırlamak | Current Instruction, PC, State Transition | `EV-081`–`EV-088` | `LO004` |

### Adjustment Rules

- Step 7 tamamlanmadan state tracing başlatılmaz.
- Native ve VM yolları birbiri yerine kullanılmaz; ortak nokta running state modelidir.
- Öğrenci virtual/physical address ayrımını kuramıyorsa Step 6 tekrarlanır.

## Validation

- Teaching steps: 11.
- Her adım prerequisite ve evidence taşır; LO metinleri değişmemiştir.

## References

- [Mental Model](./mental-model.md)
- [Knowledge Units](./knowledge-units.md)
- [Assessment Readiness](./assessment-readiness.md)
