---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-008"
supporting_document_type: "Compatibility Report"
title: "Conflict Register: How Computers Execute Programs"
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
  - "./research-collection.md"
  - "./atomic-evidence-register.md"
x-production-unit: "v01-c02"
x-research-stage: "Conflict Analysis"
x-access-date: "2026-07-22"
---

# Conflict Register: How Computers Execute Programs

## Purpose

Bu belge, `V01-C02` araştırmasında kaynaklar arasında görülen tanım, kapsam ve soyutlama farklılıklarını kaydeder. Amaç farklı modelleri tek ve yanıltıcı bir yürütme yolu gibi sunmayı önlemektir.

## Scope

Kayıt; yerel kaynak koddan çalışan programa geçiş, işlemci durum modeli, bellek, süreç, iş parçacığı, sanal makine ve durum izleme konularıyla sınırlıdır. Ders anlatımı veya pedagojik çözüm üretmez.

## Ownership

Research Engineer çatışmaları sınıflandırır. Technical Reviewer, Sprint 07C sırasında çözümün kaynak kanıtıyla uyumunu onaylar veya kaydı yeniden açar.

## Content

### Conflict Status Model

| Status | Meaning |
| --- | --- |
| `OPEN` | Araştırma veya reviewer kararı gerektirir. |
| `RESOLVED_SCOPE` | Kaynaklar farklı kapsam ya da soyutlama düzeylerini anlatmaktadır. |
| `RESOLVED_TERMINOLOGY` | Fark, terimin bağlama göre değişen anlamından kaynaklanmaktadır. |
| `RESOLVED_IMPLEMENTATION` | Fark, standart ile belirli bir gerçekleştirim arasındadır. |

### Conflict Summary

| Conflict ID | Subject | Status | Severity | Resolution |
| --- | --- | --- | --- | --- |
| `V01-C02-CF-001` | Tek bir evrensel execution pipeline varsayımı | `RESOLVED_SCOPE` | Major | Native, VM, interpreter ve JIT yolları ayrı modeller olarak tutuldu. |
| `V01-C02-CF-002` | ISA ile microarchitecture'ın eşitlenmesi | `RESOLVED_SCOPE` | Major | Yazılımca görünür sözleşme, iç donanım gerçekleştiriminden ayrıldı. |
| `V01-C02-CF-003` | PC'nin “current” veya “next” instruction göstermesi | `RESOLVED_TERMINOLOGY` | Major | PC anlamı, gözlem anı ve ISA semantiğiyle birlikte ifade edilecek. |
| `V01-C02-CF-004` | Stack ve heap'in evrensel fiziksel bölgeler sayılması | `RESOLVED_IMPLEMENTATION` | Major | Bunlar runtime/ABI/VM tarafından tanımlanan mantıksal yapılardır. |
| `V01-C02-CF-005` | Program ile process'in aynı sayılması | `RESOLVED_TERMINOLOGY` | Major | Statik program temsili, yürütülen process durumundan ayrıldı. |
| `V01-C02-CF-006` | Virtual address ile physical address'ın aynı sayılması | `RESOLVED_SCOPE` | Major | Process-visible address space ile fiziksel depolama ayrıldı. |
| `V01-C02-CF-007` | Fetch-decode-execute'ın evrensel zamanlama modeli sayılması | `RESOLVED_SCOPE` | Major | Mimari öğretim modeli olarak sınırlandırıldı. |
| `V01-C02-CF-008` | Runtime teriminin tek anlamlı kullanılması | `RESOLVED_TERMINOLOGY` | Minor | Runtime system, execution environment ve runtime phase bağlamları etiketlenecek. |
| `V01-C02-CF-009` | Bytecode'un taşınabilir makine kodu sayılması | `RESOLVED_SCOPE` | Major | Bytecode, belirli VM sözleşmesinin talimat temsili olarak tanımlandı. |
| `V01-C02-CF-010` | JIT'in bütün VM'lerde zorunlu sayılması | `RESOLVED_IMPLEMENTATION` | Major | JIT olası bir gerçekleştirim stratejisidir; VM tanımının zorunlu parçası değildir. |

### Canonical Conflict Records

| Conflict ID | Topic | Claim A | Source A | Claim B | Source B | Conflict Type | Reason | Resolution | Pedagogical Decision | Deferred Scope |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `V01-C02-CF-001` | Execution paths | Native toolchain produces CPU-targeted executable forms. | `EV-009`–`EV-023` | VM/interpreter/JIT paths execute intermediate forms. | `EV-073`–`EV-080` | Abstraction-level difference | Valid implementations use different paths. | Preserve separate execution models. | Never teach one universal pipeline. | Engine internals |
| `V01-C02-CF-002` | ISA and implementation | ISA defines software-visible state and behavior. | `EV-027`–`EV-034` | Teaching/real processors may implement that behavior differently. | `EV-037`–`EV-052` | Architecture-specific behavior | Contract and implementation are different layers. | Separate ISA from microarchitecture. | Teach only software-visible guarantees here. | Modern CPU internals |
| `V01-C02-CF-003` | Program counter | PC identifies the current instruction in one state description. | `EV-031`, `EV-044` | PC is described as identifying the next instruction at another observation point. | `EV-039`, `EV-041`, `EV-047` | Terminology difference | Observation time and ISA semantics differ. | Use PC-before and PC-after. | Require both columns in later trace work. | Pipeline timing |
| `V01-C02-CF-004` | Stack and heap | Process address spaces conventionally contain stack and heap regions. | `EV-057`–`EV-061` | JVM stacks are per-thread while heap is shared. | `EV-062`, `EV-063` | Language-specific behavior | Runtime and ABI rules differ. | Name the execution environment. | Avoid universal physical-region language. | Allocator/GC algorithms |
| `V01-C02-CF-005` | Program and process | Program is a static representation. | `EV-004` | Process is a running instance with machine state. | `EV-005`, `EV-065`–`EV-067` | Terminology difference | Everyday language collapses two entities. | Teach the distinction explicitly. | Use separate diagrams for file and running instance. | Scheduler internals |
| `V01-C02-CF-006` | Addressing | Process observes virtual addresses. | `EV-053`–`EV-058` | Executable file offsets and physical storage are different coordinate systems. | `EV-064` | Abstraction-level difference | Address domains serve different layers. | Label virtual address, physical address and file offset separately. | Never equate a source variable with a fixed RAM cell. | Page tables and TLBs |
| `V01-C02-CF-007` | Instruction cycle | Fetch-decode-execute explains architectural work. | `EV-089`–`EV-092` | ISA permits implementations with different internal timing. | `EV-040`–`EV-048` | Pedagogical simplification | Conceptual ordering is not universal physical timing. | Use it as a bounded mental model. | State that it is conceptual, not timing-accurate. | Speculation and out-of-order execution |
| `V01-C02-CF-008` | Runtime | Runtime can mean a phase or support system. | `EV-019`–`EV-024` | Runtime can mean a VM/language execution environment. | `EV-071`–`EV-080` | Terminology difference | The term is context-sensitive. | Always qualify the term. | Name runtime phase, system or environment. | Runtime implementation internals |
| `V01-C02-CF-009` | Bytecode | Native machine code targets a physical ISA. | `EV-025`–`EV-034` | Bytecode targets a VM instruction contract. | `EV-036`, `EV-073`, `EV-076`, `EV-078`, `EV-080` | Abstraction-level difference | Both are instruction representations for different machines. | Identify the target machine. | Compare targets before comparing encodings. | Binary encoding details |
| `V01-C02-CF-010` | JIT | VM specifications permit translation to host code. | `EV-074`, `EV-077` | A particular engine uses a historical hybrid pipeline. | `EV-079` | Historical versus modern model | Implementation example is not a normative requirement. | Present JIT as optional. | Label V8 as a dated implementation example. | Current engine topology |

### `V01-C02-CF-001` — Execution paths

- **Conflicting Models:** GCC/loader/native execution; JVM and WebAssembly virtual machines; Python and V8 implementation paths.
- **Evidence:** `V01-C02-EV-009`–`V01-C02-EV-024`, `V01-C02-EV-073`–`V01-C02-EV-080`.
- **Why It Appears Conflicting:** Bazı programlar ahead-of-time derlenip doğrudan ISA talimatlarına dönüşürken bazıları bytecode, yorumlayıcı veya JIT katmanından geçer.
- **Resolution:** Tek evrensel pipeline iddia edilmeyecek. Native compilation, interpreted execution, bytecode VM ve hybrid JIT ayrı geçerli yollar olarak gösterilecek.
- **Impact:** `V01-LO003` için birden fazla execution model açıklanmalıdır.

### `V01-C02-CF-002` — ISA and microarchitecture

- **Conflicting Models:** RISC-V/JVM specification-visible state; MIT Beta single-cycle teaching datapath; modern implementation freedom.
- **Evidence:** `V01-C02-EV-027`–`V01-C02-EV-043`, `V01-C02-EV-052`, `V01-C02-EV-077`.
- **Why It Appears Conflicting:** Bir ISA sonucu ve görünür durumu tanımlar; bir işlemci bu sonucu pipeline, cache veya farklı yürütme teknikleriyle üretebilir.
- **Resolution:** ISA, software-visible contract; microarchitecture, that contract's implementation olarak ayrılacak.
- **Impact:** Tek çevrimli Beta modeli modern CPU'nun fiziksel zamanlaması diye genellenemez.

### `V01-C02-CF-003` — Program counter semantics

- **Conflicting Models:** RISC-V kaynağı PC'yi current instruction adresiyle; OS anlatımları ise sıradaki yürütülecek instruction bağlamıyla açıklar.
- **Evidence:** `V01-C02-EV-031`, `V01-C02-EV-039`, `V01-C02-EV-041`, `V01-C02-EV-043`, `V01-C02-EV-044`, `V01-C02-EV-047`.
- **Why It Appears Conflicting:** PC'nin anlamı instruction öncesi, instruction sırasında veya state snapshot sonrasında gözlenmesine göre farklı ifade edilir.
- **Resolution:** Her trace satırı `PC before` ve `PC after` alanlarını ayıracak; ISA'nın kesin state-transition semantiği esas alınacak.
- **Impact:** `V01-LO004` trace tablolarında off-by-one yorum hatası önlenir.

### `V01-C02-CF-004` — Stack and heap

- **Conflicting Models:** OSTEP process address space; JVM per-thread stacks and shared heap; executable layout conventions.
- **Evidence:** `V01-C02-EV-057`–`V01-C02-EV-064`.
- **Why It Appears Conflicting:** “Stack” ve “heap” farklı runtime ve ABI'lerde farklı veri, yönetim ve paylaşım kurallarına sahiptir.
- **Resolution:** Terimler fiziksel RAM bölmeleri olarak değil, belirli execution environment içindeki mantıksal yönetim yapıları olarak sunulacak.
- **Impact:** C-benzeri process modeli JVM'e doğrudan uygulanmayacak.

### `V01-C02-CF-005` — Program and process

- **Conflicting Models:** Diskte duran executable program; OS'nin canlı process abstraction'ı.
- **Evidence:** `V01-C02-EV-004`, `V01-C02-EV-005`, `V01-C02-EV-065`–`V01-C02-EV-067`.
- **Why It Appears Conflicting:** Günlük dilde “program çalışıyor” denirken statik dosya ile canlı yürütme durumu aynı adla anılabilir.
- **Resolution:** Program, instructions/data representation; process, running instance with address space and machine state olarak ayrılacak.
- **Impact:** Bir programdan birden fazla process oluşturulabileceği korunur.

### `V01-C02-CF-006` — Virtual and physical addresses

- **Conflicting Models:** Process-visible virtual address space; physical storage and loader file offsets.
- **Evidence:** `V01-C02-EV-053`–`V01-C02-EV-058`, `V01-C02-EV-064`.
- **Why It Appears Conflicting:** Kaynak kodu ve process araçları çoğunlukla sanal adresleri gösterir; bu değerler fiziksel RAM konumu değildir.
- **Resolution:** Virtual address, physical address ve file offset ayrı alanlar olarak korunacak.
- **Impact:** Başlangıç düzeyinde “değişken RAM'deki şu hücrededir” türü kesin olmayan ifadeler engellenir.

### `V01-C02-CF-007` — Fetch-decode-execute

- **Conflicting Models:** MIT ve CMU öğretim döngüsü; ISA'nın atomic state-transition modeli; modern processor implementation freedom.
- **Evidence:** `V01-C02-EV-040`–`V01-C02-EV-048`, `V01-C02-EV-089`–`V01-C02-EV-092`.
- **Why It Appears Conflicting:** Döngü mimari davranışı açıklamakta yararlıdır; fakat pipeline ve speculative execution iç işlemleri bu sırayı fiziksel zaman çizelgesi olarak uygulamayabilir.
- **Resolution:** Fetch-decode-execute kavramsal yürütme modeli olarak kullanılacak, universal microarchitectural timing iddiası yapılmayacak.
- **Impact:** Öğrenci modeli doğru kalırken ilerideki architecture konularına yanlış ön kabul taşınmaz.

### `V01-C02-CF-008` — Runtime terminology

- **Conflicting Models:** Runtime phase, runtime system ve language execution environment kullanımları.
- **Evidence:** `V01-C02-EV-019`–`V01-C02-EV-024`, `V01-C02-EV-071`–`V01-C02-EV-080`.
- **Why It Appears Conflicting:** Aynı sözcük zaman aralığını, destek yazılımını veya VM/host ortamını gösterebilir.
- **Resolution:** İlk kullanımda bağlam açıkça yazılacak; çıplak “runtime” teknik iddia içinde kullanılmayacak.
- **Impact:** Kavram sınırları korunur.

### `V01-C02-CF-009` — Bytecode and machine code

- **Conflicting Models:** Native ISA machine code; JVM, WebAssembly and CPython instruction representations.
- **Evidence:** `V01-C02-EV-025`–`V01-C02-EV-036`, `V01-C02-EV-073`–`V01-C02-EV-080`.
- **Why It Appears Conflicting:** Her iki temsil de instruction içerir; ancak bytecode genellikle fiziksel CPU ISA'sı yerine VM sözleşmesini hedefler.
- **Resolution:** Target machine ve execution authority her örnekte adlandırılacak.
- **Impact:** Bytecode doğrudan CPU'nun native instruction set'i gibi anlatılmaz.

### `V01-C02-CF-010` — JIT requirement

- **Conflicting Models:** WebAssembly'ın JIT/AOT'a izin vermesi; JVM'in implementation discretion tanıması; V8'in belirli hybrid pipeline'ı.
- **Evidence:** `V01-C02-EV-074`, `V01-C02-EV-077`, `V01-C02-EV-079`.
- **Why It Appears Conflicting:** Yaygın implementasyon davranışı, standart zorunluluğu gibi algılanabilir.
- **Resolution:** JIT “may be used” düzeyinde tutulacak; V8 kaydı tarihsel implementation example olarak etiketlenecek.
- **Impact:** Zamana bağlı engine ayrıntıları genel VM tanımına dönüştürülmez.

## Validation

- Açık (`OPEN`) çatışma: 0.
- Major çatışma: 8 bulundu, 8 kapsam/terminoloji/gerçekleştirim sınırıyla çözüldü.
- Minor çatışma: 2 bulundu, 2 terminoloji/gerçekleştirim sınırıyla çözüldü.
- Çözümler kanonik learning outcome, concept, claim veya evidence kaydı oluşturmaz ya da değiştirmez.
- Bütün kararlar Sprint 07C Technical Review onayına tabidir.

## References

- [Research Collection](./research-collection.md)
- [Atomic Evidence Register](./atomic-evidence-register.md)
- [Source Locator Register](./source-locator-register.md)
- [Research Gap Register](./research-gap-register.md)
