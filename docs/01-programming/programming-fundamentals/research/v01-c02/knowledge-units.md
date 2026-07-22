---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-010"
supporting_document_type: "Compatibility Report"
title: "Knowledge Units: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./atomic-evidence-register.md", "./learning-outcome-evidence-map.md"]
x-production-unit: "v01-c02"
x-research-stage: "Knowledge Synthesis"
---

# Knowledge Units: How Computers Execute Programs

## Purpose

Bu belge 92 atomik kanıtı, tek başına öğretilebilir fakat birbirine bağlı bilgi birimlerinde gruplar.

## Scope

Yalnız `V01-C02`, `V01-LO003` ve `V01-LO004` kapsamındadır. Kimlikler yerel ve türetilmiştir; kanonik Knowledge Foundation kaydı değildir.

## Ownership

Knowledge Engineer gruplama bütünlüğünden, Technical Reviewer kanıt sınırlarının korunmasından sorumludur.

## Content

| ID | Name | Description | Evidence IDs | Related Sources | Confidence | LO | Prerequisites |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `V01-C02-KU-001` | Program representations | Programın kaynak kod, assembly, makine kodu ve diskteki program olarak farklı temsilleri vardır. | `EV-001`–`EV-008` | `SRC-004`–`SRC-007`, `SRC-010`, `SRC-022` | HIGH | `LO003` | None |
| `V01-C02-KU-002` | Compilation pipeline | Preprocessing, compilation proper ve assembly ayrılabilen dönüşüm aşamalarıdır. | `EV-009`–`EV-013`, `EV-023` | `SRC-008`, `SRC-014` | HIGH | `LO003` | `KU-001` |
| `V01-C02-KU-003` | Linking and executable formation | Linker girdileri birleştirir, relocation ve symbol resolution yapar; executable giriş noktası taşır. | `EV-014`–`EV-018` | `SRC-015`, `SRC-016`, `SRC-019` | HIGH | `LO003` | `KU-002` |
| `V01-C02-KU-004` | Loading and process startup | Program image, stack ve I/O kaynakları execution öncesi hazırlanır. | `EV-019`–`EV-022` | `SRC-010`, `SRC-017` | HIGH | `LO003` | `KU-003` |
| `V01-C02-KU-005` | Assembly and machine language | Assembly sembolik, machine code ikili ve hedef mimariye bağlı temsildir. | `EV-023`, `EV-025`–`EV-029` | `SRC-007`, `SRC-008` | HIGH | `LO003` | `KU-001` |
| `V01-C02-KU-006` | ISA-visible state | ISA, register, PC, instruction ve memory operation sözleşmesini yazılıma görünür kılar. | `EV-027`–`EV-036` | `SRC-007`, `SRC-013`, `SRC-024` | HIGH | `LO003` | `KU-005` |
| `V01-C02-KU-007` | Instruction state transition | Instruction, register/PC/memory durumunda tanımlı bir geçiş üretir. | `EV-037`–`EV-048` | `SRC-003`, `SRC-013` | HIGH | `LO003`, `LO004` | `KU-006` |
| `V01-C02-KU-008` | Protected native execution | Native instruction yürütümü OS kontrolündedir; illegal olaylar denetimi OS'ye aktarabilir. | `EV-049`–`EV-052` | `SRC-003`, `SRC-010` | HIGH | `LO003` | `KU-007` |
| `V01-C02-KU-009` | Virtual address model | Process sanal adresleri kullanır; bunlar fiziksel adres ve file offset ile aynı değildir. | `EV-053`–`EV-057`, `EV-064` | `SRC-011`, `SRC-018`, `SRC-019` | HIGH | `LO003` | `KU-004` |
| `V01-C02-KU-010` | Stack and heap models | Stack ve heap execution environment'a bağlı mantıksal bellek yapılarıdır. | `EV-058`–`EV-063` | `SRC-011`, `SRC-024` | HIGH | `LO003` | `KU-009` |
| `V01-C02-KU-011` | Program and process | Program pasif temsildir; process çalışan programın bellek, register ve I/O durumudur. | `EV-004`, `EV-005`, `EV-065`–`EV-067` | `SRC-010` | HIGH | `LO003` | `KU-004`, `KU-009` |
| `V01-C02-KU-012` | Threads and frames | Aynı process içindeki thread'ler address space'i paylaşır; execution noktaları ve özel state taşırlar. | `EV-068`–`EV-072` | `SRC-012`, `SRC-022`, `SRC-024` | HIGH | `LO003` | `KU-011` |
| `V01-C02-KU-013` | Virtual machines and bytecode | VM, fiziksel CPU'dan ayrı abstract machine sözleşmesi ve binary/intermediate representation sunabilir. | `EV-035`, `EV-036`, `EV-073`, `EV-075`–`EV-078`, `EV-080` | `SRC-020`–`SRC-025` | HIGH | `LO003` | `KU-001`, `KU-006` |
| `V01-C02-KU-014` | Alternative execution paths and JIT | Source-to-execution yolu native, interpreted, AOT veya JIT bileşimleri içerebilir. | `EV-024`, `EV-074`, `EV-077`, `EV-079` | `SRC-020`, `SRC-024`, `SRC-026` | HIGH/MEDIUM | `LO003` | `KU-002`, `KU-013` |
| `V01-C02-KU-015` | Fetch-decode-execute model | Başlangıç modeli instruction fetch, decode, execute ve PC update aşamalarını ilişkilendirir. | `EV-089`–`EV-092` | `SRC-002`, `SRC-027` | HIGH | `LO003` | `KU-006`, `KU-007` |
| `V01-C02-KU-016` | State-tracing model | Her adım current instruction, state-before, transition ve state-after olarak izlenebilir. | `EV-081`–`EV-088` | `SRC-003`, `SRC-010`, `SRC-021` | HIGH | `LO004` | `KU-007`, `KU-015` |
| `V01-C02-KU-017` | Input, output and observable state | I/O resources ve olayları process state'in parçasıdır ve execution geçişlerini etkileyebilir. | `EV-022`, `EV-051`, `EV-066`, `EV-088` | `SRC-010` | HIGH | `LO003`, `LO004` | `KU-011`, `KU-016` |

## Validation

- Knowledge units: 17.
- Atomik kanıt kapsamı: `EV-001`–`EV-092`; tekrarlar yalnız çapraz LO ilişkisini göstermek içindir.
- Yeni teknik iddia, kaynak veya kanonik kimlik oluşturulmadı.

## References

- [Atomic Evidence Register](./atomic-evidence-register.md)
- [Concept Model](./concept-model.md)
- [Learning Outcome Synthesis](./learning-outcome-synthesis.md)
