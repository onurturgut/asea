---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-016"
supporting_document_type: "Compatibility Report"
title: "Misconception Map: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Curriculum Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./concept-model.md", "./conflict-register.md", "./atomic-evidence-register.md"]
x-production-unit: "v01-c02"
x-research-stage: "Misconception Analysis"
---

# Misconception Map: How Computers Execute Programs

## Purpose

Bu belge evidence ve conflict analizinde görülen yanlış anlamaları düzeltme sınırlarıyla kaydeder.

## Scope

Öğretim metni veya assessment sorusu içermez.

## Ownership

Curriculum Designer düzeltme hedeflerini; Technical Reviewer supporting evidence'i doğrular.

## Content

| ID | Misconception | Why It Happens | Correct Explanation | Evidence |
| --- | --- | --- | --- | --- |
| `MC-001` | CPU kaynak kodu doğrudan çalıştırır. | Source ile machine representation karıştırılır. | CPU hedef ISA machine instruction'larını yürütür; source farklı yollardan dönüşür. | `EV-002`, `EV-003`, `EV-009`–`EV-024`, `EV-025` |
| `MC-002` | Compiler her zaman executable üretir. | Toolchain tek araç sanılır. | Compilation aşamaları assembly/object formunda durabilir; linking ayrıdır. | `EV-009`–`EV-016` |
| `MC-003` | Assembly ve machine code aynıdır. | Bire yakın eşleme temsil ayrımını gizler. | Assembly sembolik, machine code binary temsildir. | `EV-023`, `EV-025`, `EV-026` |
| `MC-004` | ISA CPU'nun tüm iç tasarımıdır. | Interface ile implementation birleştirilir. | ISA software-visible contract'tır; internal timing ayrı düzeydir. | `EV-027`–`EV-034`, `EV-052` |
| `MC-005` | PC her zaman “sonraki instruction” demektir. | Snapshot anı belirtilmez. | PC semantiği ISA ve before/after gözlem anıyla ifade edilir. | `EV-031`, `EV-039`, `EV-041`, `EV-044`, `EV-047` |
| `MC-006` | RAM ve virtual address space aynıdır. | Process view fiziksel depolama sanılır. | Virtual addresses translation ile physical addresses'a eşlenir. | `EV-053`–`EV-057` |
| `MC-007` | Stack ve heap'in fiziksel yeri evrenseldir. | Geleneksel diagram gerçek layout sanılır. | Yerleşim ve yönetim runtime/ABI convention'ına bağlıdır. | `EV-058`–`EV-063` |
| `MC-008` | Program ve process aynıdır. | “Program çalışıyor” gündelik ifadesi kullanılır. | Program pasif dosya/temsil; process çalışan instance ve state'tir. | `EV-004`, `EV-005`, `EV-065`–`EV-067` |
| `MC-009` | Thread ve process aynıdır. | İkisi de execution birimi diye anılır. | Thread process içinde execution point taşır ve address space paylaşabilir. | `EV-068`–`EV-070` |
| `MC-010` | Bytecode physical CPU machine code'udur. | İki temsil de instruction içerir. | Bytecode VM/implementation sözleşmesini hedefler. | `EV-036`, `EV-073`, `EV-076`, `EV-078`, `EV-080` |
| `MC-011` | Interpreter hiçbir derleme kullanmaz. | Interpreted/compiled ikili sınıflandırılır. | Hybrid implementations interpreter ve optimizing compiler'ı birleştirebilir. | `EV-024`, `EV-074`, `EV-077`, `EV-079` |
| `MC-012` | Her VM JIT kullanır. | Yaygın implementation normatif sanılır. | JIT opsiyonel strategy'dir. | `EV-074`, `EV-077`, `EV-079` |
| `MC-013` | Fetch-decode-execute modern CPU'nun tam zaman çizelgesidir. | Teaching model fiziksel pipeline sanılır. | Model architectural work'ü basitleştirir, hidden timing'i açıklamaz. | `EV-052`, `EV-089`–`EV-092` |
| `MC-014` | Instruction sequence her zaman sırayla ilerler. | Sequential default control transfer'i gölgeler. | Jump, branch, trap veya exception next instruction'ı değiştirebilir. | `EV-043`, `EV-048`, `EV-084`, `EV-085` |

## Validation

- Misconceptions: 14; tamamı supporting evidence taşır.
- Correct explanations conflict resolutions ile uyumludur.

## References

- [Concept Model](./concept-model.md)
- [Conflict Register](./conflict-register.md)
- [Mental Model](./mental-model.md)
