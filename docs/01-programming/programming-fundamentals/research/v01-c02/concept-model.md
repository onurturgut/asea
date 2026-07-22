---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-011"
supporting_document_type: "Compatibility Report"
title: "Concept Model: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./knowledge-units.md", "./atomic-evidence-register.md", "./conflict-register.md"]
x-production-unit: "v01-c02"
x-research-stage: "Concept Modeling"
---

# Concept Model: How Computers Execute Programs

## Purpose

Bu belge, evidence-bound bilgi birimlerinden türetilen öğretim kavramlarını ve kavram sınırlarını tanımlar.

## Scope

Kavram kimlikleri `V01-C02` araştırmasına ait yerel referanslardır; kanonik Concept Registry'yi değiştirmez.

## Ownership

Knowledge Engineer tanım ve bağımlılıkları korur; Technical Reviewer misconception sınırlarını doğrular.

## Content

| ID | Türkçe Terim | English Term | Evidence-Bound Definition | KU | Dependencies | Common Misconception | Importance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `KC-001` | Program | Program | Instruction ve statik veri içerebilen pasif temsil. | `KU-001`, `KU-011` | None | Program ile process aynıdır. | Critical |
| `KC-002` | Kaynak kod | Source Code | Yüksek seviyeli dilde yazılan ve CPU-native temsil olmak zorunda olmayan program metni. | `KU-001` | `KC-001` | CPU kaynak kodu doğrudan yürütür. | Critical |
| `KC-003` | Programlama dili | Programming Language | Programı ifade eden, processor ayrıntılarının bir kısmını soyutlayabilen dil. | `KU-001` | `KC-002` | Dil ve ISA aynı katmandır. | High |
| `KC-004` | Derleyici | Compiler | Program temsilini compilation aşamalarında başka temsillere dönüştüren araç zinciri bileşeni. | `KU-002` | `KC-002`, `KC-003` | Her derleyici doğrudan executable üretir. | Critical |
| `KC-005` | Nesne dosyası | Object File | Linking aşamasına girdi olabilen derlenmiş/assemble edilmiş dosya temsili. | `KU-002`, `KU-003` | `KC-004` | Object file her zaman çalıştırılabilir. | High |
| `KC-006` | Bağlayıcı | Linker | Object/archive girdilerini birleştirip relocation ve symbol resolution yapan araç. | `KU-003` | `KC-005` | Linking compilation ile aynıdır. | High |
| `KC-007` | Yürütülebilir | Executable | Loader'ın process image oluşturmak için kullanabildiği, giriş noktası taşıyan program biçimi. | `KU-003`, `KU-004` | `KC-006` | Executable bellekteki process'in kendisidir. | Critical |
| `KC-008` | Yükleyici | Loader | Kod/veriyi address space'e yerleştirip başlangıç durumunu hazırlayan sistem rolü. | `KU-004` | `KC-007` | Loader yalnız dosyayı RAM'e kopyalar. | High |
| `KC-009` | Yorumlayıcı | Interpreter | Belirli bir implementation'da intermediate instruction'ları yürütme yoluna katılan bileşen. | `KU-014` | `KC-002` | Interpreter hiçbir zaman derleme kullanmaz. | High |
| `KC-010` | Assembly dili | Assembly Language | Machine instruction'ların sembolik düşük seviyeli temsili. | `KU-005` | `KC-003` | Assembly ile machine code aynıdır. | High |
| `KC-011` | Makine kodu | Machine Code | Hedef hardware platform/ISA için bitlerle kodlanmış instruction temsili. | `KU-005` | `KC-010`, `KC-012` | Her CPU aynı machine code'u yürütür. | Critical |
| `KC-012` | Talimat kümesi mimarisi | Instruction Set Architecture | Yazılımca görünür instruction ve machine-state sözleşmesi. | `KU-006` | `KC-011` | ISA, CPU'nun iç tasarımının tamamıdır. | Critical |
| `KC-013` | Merkezi işlem birimi | Central Processing Unit | Native machine instruction'ların mimari etkisini gerçekleştiren işlemci. | `KU-007`, `KU-008` | `KC-012` | CPU yalnız arithmetic yapar. | Critical |
| `KC-014` | Talimat | Instruction | Architectural state üzerinde tanımlı bir geçişe sahip yürütme birimi. | `KU-006`, `KU-007` | `KC-012` | Instruction etkisi yalnız bir değerdir. | Critical |
| `KC-015` | Register | Register | ISA-visible machine state'in instruction operand/result taşıyabilen bileşeni. | `KU-006`, `KU-007` | `KC-012` | Register genel RAM hücresidir. | High |
| `KC-016` | Program sayacı | Program Counter | Instruction sequencing için instruction address'i tutan ISA-visible state bileşeni. | `KU-006`, `KU-007` | `KC-014` | PC her gözlem anında aynı “current/next” anlamına gelir. | Critical |
| `KC-017` | Bellek | Memory | Code ve data state'in execution environment tarafından adreslenebilen saklama modeli. | `KU-009`, `KU-010` | `KC-014` | Bellek yalnız fiziksel RAM'dir. | Critical |
| `KC-018` | Bellek adresi | Memory Address | Belirli address domain içinde konum tanımlayan değer. | `KU-009` | `KC-017` | File offset, virtual ve physical address aynıdır. | High |
| `KC-019` | Sanal adres alanı | Virtual Address Space | Process'in kullanabildiği sanal adresler kümesi. | `KU-009` | `KC-011`, `KC-018` | Sanal adres fiziksel RAM konumudur. | Critical |
| `KC-020` | Yığın | Stack | Environment'a bağlı olarak call/frame/local state taşıyan mantıksal yapı. | `KU-010` | `KC-017` | Stack'in fiziksel konumu evrenseldir. | High |
| `KC-021` | Öbek | Heap | Environment'a bağlı dinamik nesne/veri saklama alanı. | `KU-010` | `KC-017` | Heap bütün runtime'larda aynı yönetilir. | High |
| `KC-022` | Çalışma zamanı ortamı | Runtime Environment | Program execution'ına state, services veya abstract-machine context sağlayan ortam. | `KU-004`, `KU-013`, `KU-014` | `KC-001` | Runtime tek bir evrensel bileşendir. | Critical |
| `KC-023` | Süreç | Process | Çalışan programı address space, register ve I/O state ile temsil eden OS abstraction'ı. | `KU-011` | `KC-001`, `KC-019` | Process diskteki executable'dır. | Critical |
| `KC-024` | İş parçacığı | Thread | Process içinde kendi execution point/PC/register state'i bulunan yürütme akışı. | `KU-012` | `KC-023` | Thread ve process aynıdır. | High |
| `KC-025` | Sanal makine | Virtual Machine | Concrete hardware yerine abstract-machine instruction/state sözleşmesi sunan execution modeli. | `KU-013` | `KC-012`, `KC-022` | VM yalnız hardware emülatörüdür. | Critical |
| `KC-026` | Bayt kodu | Bytecode | Belirli VM/implementation tarafından tüketilen intermediate binary instruction temsili. | `KU-013` | `KC-025` | Bytecode doğrudan physical CPU machine code'udur. | High |
| `KC-027` | Anında derleme | Just-in-Time Compilation | Execution sırasında intermediate instruction'ları host machine code'a çevirebilen opsiyonel strateji. | `KU-014` | `KC-025`, `KC-026` | Her VM JIT kullanır. | High |
| `KC-028` | Durum | State | Bir execution adımını açıklamak için gerekli PC, register, memory, stack/store ve I/O değerleri. | `KU-007`, `KU-016`, `KU-017` | `KC-014` | Program yalnız instruction listesidir. | Critical |
| `KC-029` | Kontrol akışı | Control Flow | Sonraki instruction'ı sequential advance veya control transfer ile belirleyen ilişki. | `KU-007`, `KU-016` | `KC-016`, `KC-028` | Instruction'lar her zaman sırayla ilerler. | Critical |
| `KC-030` | Girdi | Input | Program state'ine dışarıdan değer veya olay sağlayan execution kaynağı. | `KU-017` | `KC-023`, `KC-028` | Input state'i etkilemez. | High |
| `KC-031` | Çıktı | Output | Execution sonucunda dışarıya aktarılan gözlenebilir değer veya etki. | `KU-017` | `KC-028` | Output yalnız ekrana yazıdır. | High |
| `KC-032` | Getir-çözümle-yürüt döngüsü | Fetch-Decode-Execute Cycle | PC ile instruction getirme, instruction'ı çözümleme ve state etkisini gerçekleştirme için başlangıç düzeyi kavramsal model. | `KU-015` | `KC-013`–`KC-016` | Modern CPU'nun fiziksel zamanlamasını eksiksiz açıklar. | Critical |

## Validation

- Core concepts: 32.
- Her tanım en az bir knowledge unit ve mevcut evidence setine bağlıdır.
- Conflict register'daki architecture/runtime sınırları korunmuştur.

## References

- [Knowledge Units](./knowledge-units.md)
- [Conflict Register](./conflict-register.md)
- [Concept Graph](./concept-graph.md)
