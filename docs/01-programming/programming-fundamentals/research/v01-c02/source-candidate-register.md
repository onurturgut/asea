---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-REF-002"
supporting_document_type: "References"
title: "Source Candidate Register: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-BP01"
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
derived_from:
  - "./research-request.md"
  - "./source-strategy.md"
x-production-unit: "v01-c02"
x-research-stage: "Source Discovery"
x-access-date: "2026-07-22"
---

# Source Candidate Register: How Computers Execute Programs

## Purpose

Bu kayıt, `V01-C02` için internet üzerinden erişilerek doğrulanmış kaynak
adaylarını, kullanım sınırlarını ve ilk araştırma bulgularını saklar. Buradaki
`S01`–`S26` anahtarları yalnızca yerel araştırma etiketidir; kanonik Source
Registry kimliği değildir ve yeni Knowledge Foundation kaydı oluşturmaz.

## Scope

Kayıt; akademik müfredat ve dersler, işlemci mimarisi, derleme araç zinciri,
yürütülebilir biçimler, süreç ve sanal bellek, sanal makineler, yorumlayıcılar ve
başlangıç düzeyi durum izleme kaynaklarını kapsar. Erişim tarihi bütün web
kaynakları için `2026-07-22` olarak sabitlenmiştir.

## Ownership

Research Engineer adayları keşfeder ve kullanım kararını önerir. Technical
Reviewer, sonraki sprintte belirli iddiaların kaynakla gerçekten desteklenip
desteklenmediğini locator düzeyinde onaylar. “Primary” kararı kaynağın her
cümlesinin doğrudan eğitim içeriğine taşınacağı anlamına gelmez.

## Content

### Candidate Summary

| Ölçüt | Sonuç |
| --- | ---: |
| Toplam aday | 26 |
| Tier 1 — Academic | 8 |
| Tier 2 — Official Documentation | 16 |
| Tier 3 — Official Engineering | 2 |
| Tier 4 — Community evidence | 0 |
| Primary | 16 |
| Supporting | 8 |
| Historical/implementation-specific | 2 |
| Bağımsız kurum veya standart ailesi | 19 |

### Tier 1 — Academic and Curriculum Sources

| Key | Kaynak | Sürüm/tarih | Kullanım | LO | Karar |
| --- | --- | --- | --- | --- | --- |
| `S01` | [ACM/IEEE-CS/AAAI CS2023](https://csed.acm.org/) | Final report, 2024 endorsements | Architecture and Organization ile Systems Fundamentals kapsam gerekçesi | `LO003` | Primary |
| `S02` | [MIT OCW 6.004 Computation Structures](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/) | Spring 2017 | ISA, assembly, compiler, processor ve memory katmanları | `LO003`, `LO004` | Primary |
| `S03` | [MIT 6.004 Beta Documentation](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf) | Spring 2009 | Program counter, register, memory ve instruction içeren izlenebilir makine durumu | `LO004` | Primary |
| `S04` | [CMU 15-213 Introduction to Computer Systems](https://csd.cs.cmu.edu/15213-introduction-to-computer-systems) | Current course profile | Programların nasıl yürütüldüğüne ilişkin programmer's perspective | `LO003` | Primary |
| `S05` | [Stanford CS107 Syllabus](https://web.stanford.edu/class/cs107/syllabus.html) | Updated 2026-03-30 | Compilation, machine-level code ve memory organization kapsam kontrolü | `LO003` | Supporting |
| `S06` | [Berkeley CS61C Notes — Abstraction](https://notes.cs61c.org/content/c-basics/) | Rolling course notes | High-level language → assembly → machine language → processor/memory katmanları | `LO003` | Primary |
| `S07` | [Nand2Tetris Official Course](https://www.nand2tetris.org/) | Rolling official course | Machine language, CPU, ROM/RAM ve adım adım yürütme modeli | `LO003`, `LO004` | Primary |
| `S08` | [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/) | v1.10, 2023-11 | Process ve address-space kavramlarının akademik çapraz doğrulaması | `LO003` | Supporting |

### Tier 2 — Specifications and Official Documentation

| Key | Kaynak | Sürüm/tarih | Kullanım | LO | Karar |
| --- | --- | --- | --- | --- | --- |
| `S09` | [RISC-V Unprivileged ISA](https://docs.riscv.org/reference/isa/unpriv/unpriv-index.html) | 20260120 Official Release | ISA, software-visible state, registers, address space ve instruction sözleşmesi | `LO003`, `LO004` | Primary |
| `S10` | [Armv8-A Instruction Set Architecture Guide](https://developer.arm.com/-/media/Arm%20Developer%20Community/PDF/Learn%20the%20Architecture/Armv8-A%20Instruction%20Set%20Architecture.pdf) | Armv8-A guide | İkinci bağımsız ISA ailesiyle mimari genellemeleri sınama | `LO003` | Supporting |
| `S11` | [GCC Overall Options](https://gcc.gnu.org/onlinedocs/ref/gcc/Overall-Options.html) | Rolling GCC manual | Preprocessing, compilation, assembly ve linking aşamalarının resmi ayrımı | `LO003` | Primary |
| `S12` | [GNU Binutils `ld` Overview](https://sourceware.org/binutils/docs/ld/Overview.html) | Binutils 2.46 docs | Object/archive dosyalarını birleştirme, relocation ve symbol resolution | `LO003` | Primary |
| `S13` | [LLVM Documentation](https://llvm.org/docs/index.html) | Rolling official docs | Compiler infrastructure ve intermediate-representation karşılaştırması | `LO003` | Supporting |
| `S14` | [POSIX.1-2024 `exec`](https://pubs.opengroup.org/onlinepubs/9799919799/functions/exec.html) | Issue 8, 2024 | Process image replacement ve program başlatma sözleşmesi | `LO003` | Primary |
| `S15` | [System V ABI — ELF Specification](https://refspecs.linuxfoundation.org/elf/elf.pdf) | ELF specification archive | Object/executable biçimi, segments, sections ve loader ilişkisi | `LO003` | Primary |
| `S16` | [Microsoft PE Format](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format) | Rolling Windows documentation | PE/COFF image, loader, RVA/VA ve executable metadata | `LO003` | Primary |
| `S17` | [Microsoft Virtual Address Space](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space) | Rolling Windows documentation | Virtual address ile physical storage ayrımı | `LO003` | Primary |
| `S18` | [WebAssembly Core Specification — Introduction](https://webassembly.github.io/spec/core/intro/introduction.html) | WebAssembly 3.0, 2026-07-10 | Virtual ISA, binary/text representation ve execution environment | `LO003` | Primary |
| `S19` | [WebAssembly Core Specification — Execution](https://webassembly.github.io/spec/core/exec/index.html) | WebAssembly 3.0, 2026-07-10 | Stack, store, configuration ve adımlı state transition modeli | `LO004` | Primary |
| `S20` | [Python Execution Model](https://docs.python.org/3/reference/executionmodel.html) | Python 3.14.6 docs | Code block, execution frame ve runtime state modeli | `LO003`, `LO004` | Supporting |
| `S21` | [Python `dis` Documentation](https://docs.python.org/3/library/dis.html) | Python 3.14 docs | CPython bytecode'un uygulama ve sürüm ayrıntısı olduğunun doğrulanması | `LO003` | Supporting |
| `S22` | [Java Virtual Machine Specification](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/index.html) | Java SE 26, 2026-02-03 | Class format, PC register, frames, stacks, heap ve runtime data areas | `LO003`, `LO004` | Primary |
| `S23` | [ECMA-335 Common Language Infrastructure](https://dev.ecma-international.org/publications-and-standards/standards/ecma-335/) | 6th edition, 2012-06 | Çoklu dil, CIL instruction set ve Virtual Execution System modeli | `LO003` | Supporting |
| `S24` | [MDN JavaScript Execution Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) | Rolling MDN documentation | JavaScript engine/host, execution context, stack, heap ve queue ayrımı | `LO003` | Supporting |

### Tier 3 — Official Engineering Sources

| Key | Kaynak | Sürüm/tarih | Kullanım | LO | Karar |
| --- | --- | --- | --- | --- | --- |
| `S25` | [V8 Ignition Interpreter](https://v8.dev/blog/ignition-interpreter) | 2016-08-23 | V8'in bytecode interpreter tasarımına ilişkin tarihsel uygulama örneği | `LO003` | Historical |
| `S26` | [Launching Ignition and TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan) | 2017-05-16 | Interpreter ve optimizing compiler içeren hibrit motor örneği | `LO003` | Historical |

### Preliminary Technical Findings

Bu bulgular kaynak koleksiyonunu yönlendirir; henüz Research Packet iddiası
değildir.

#### Finding F01 — One Universal Execution Path Does Not Exist

GCC kaynak zinciri native derleme aşamalarını, JVM ve WebAssembly belgeleri
sanal makine/bytecode modellerini, Python ve V8 belgeleri ise yorumlama ile
uygulamaya özgü hibrit yolları gösterir. Bu nedenle ders, “kaynak kod → compiler
→ machine code → CPU” çizgisini tek evrensel gerçek olarak sunmamalıdır.

Kaynaklar: `S11`, `S18`, `S20`, `S22`, `S23`, `S25`, `S26`.

#### Finding F02 — ISA Is a Contract, Not the Whole Processor

RISC-V ve Arm belgeleri, yazılımın görebildiği talimatları ve mimari durumu
tanımlar. Üniversite kaynakları bu arayüzü yüksek seviyeli dil ile işlemci
arasında bir soyutlama katmanı olarak kullanır. Mikro-mimarinin pipeline,
reordering veya cache davranışı başlangıç modeline dahil edilmemelidir.

Kaynaklar: `S02`, `S06`, `S09`, `S10`.

#### Finding F03 — Compilation and Loading Are Separate Responsibilities

GCC, compilation pipeline aşamalarını; GNU `ld`, object files ve symbol
resolution işlemlerini; ELF/PE ve POSIX ise yürütülebilir görüntünün yüklenmesi
ve süreç bağlamındaki yürütmeyi açıklar. “Compiler programı RAM'e yükler” gibi
bir ifade sorumluluk sınırlarını bozar.

Kaynaklar: `S11`, `S12`, `S14`, `S15`, `S16`.

#### Finding F04 — A Running Program Includes State

MIT Beta, RISC-V, WebAssembly ve JVM modelleri program sayacı, kayıt/yerel
değerler, operand stack veya memory/store gibi durum bileşenleri tanımlar.
`LO004` için izleme modeli yalnızca çıktı satırlarını değil, her adım öncesi ve
sonrası değişen durumu göstermelidir.

Kaynaklar: `S03`, `S09`, `S19`, `S22`.

#### Finding F05 — Virtual and Physical Memory Must Not Be Collapsed

Microsoft virtual-address documentation ve OSTEP, bir sürecin kullandığı adres
alanı ile fiziksel depolamanın aynı şey olmadığını gösterir. Başlangıç anlatımı
“değer RAM'deki kesin bir kutuya gider” gibi fiziksel yerleşim iddialarından
kaçınmalıdır.

Kaynaklar: `S08`, `S17`.

#### Finding F06 — Runtime Has More Than One Legitimate Meaning

Runtime; dil uygulamasının hizmetleri, sanal makine, yürütme ortamı veya program
çalışırken var olan durum için kullanılabilir. JVM, CLI, Python ve MDN belgeleri
aynı kelime çevresinde farklı sınırlar kurar. Ders terimi ilk kullanımda kendi
kapsamıyla tanımlamalıdır.

Kaynaklar: `S20`, `S22`, `S23`, `S24`.

#### Finding F07 — State Tracing Should Use an Explicit Abstract Machine

Nand2Tetris CPU Emulator, MIT Beta ve WebAssembly execution semantics, bir
talimat dizisinin adım adım durum değişimleriyle gözlenebileceğini gösterir.
Başlangıç modeli en az şu alanları belirtmelidir: adım numarası, sıradaki talimat,
girdi durumu, değişen durum ve üretilen çıktı.

Kaynaklar: `S03`, `S07`, `S19`.

#### Finding F08 — Input and Output Cross Multiple Boundaries

Program düzeyindeki girdi/çıktı değerleri ile CPU/aygıt düzeyindeki I/O aynı
soyutlama değildir. CS2023 Architecture and Organization ile Nand2Tetris,
hardware I/O'yu ayrı bir konu olarak ele alır; `V01-C02` yalnızca programın
gözlemleyebildiği giriş ve çıkış sınırını temel modelde kullanmalıdır.

Kaynaklar: `S01`, `S07`.

### Misconceptions to Test During Collection

1. “CPU, JavaScript kaynak kodunu doğrudan okur.”
2. “Her dil ya tamamen compiled ya da tamamen interpreted olur.”
3. “Compiler ile runtime aynı bileşendir.”
4. “Program dosyası ile çalışan process aynı şeydir.”
5. “Memory her zaman fiziksel RAM demektir.”
6. “Stack ve heap bütün dillerde aynı fiziksel düzeni ifade eder.”
7. “Fetch-decode-execute modern işlemcide her talimat için görünür biçimde ve
   tek tek tamamlanır.”
8. “Program counter kaynak koddaki satır numarasıdır.”
9. “Bir talimat yalnızca ekrana çıktı üretiyorsa state değiştirir.”
10. “JIT, kaynak kodun değişmeden CPU tarafından okunmasıdır.”

### Coverage Matrix

| Required domain | Primary candidates | Supporting candidates | Durum |
| --- | --- | --- | --- |
| Curriculum scope | `S01`, `S02`, `S04` | `S05` | Covered |
| Abstraction layers | `S02`, `S06`, `S07`, `S09` | `S10` | Covered |
| Native compilation | `S11`, `S12` | `S13` | Covered |
| Executable/loading | `S14`, `S15`, `S16` | — | Covered |
| Process/address space | `S14`, `S17` | `S08` | Covered |
| ISA and CPU state | `S03`, `S09` | `S10` | Covered |
| VM/bytecode | `S18`, `S19`, `S22` | `S23` | Covered |
| Interpreter/JIT | `S20` | `S21`, `S25`, `S26` | Covered with freshness caveat |
| JavaScript comparison | — | `S24`, `S25`, `S26` | Supporting only; intentionally deferred |
| State tracing | `S03`, `S07`, `S19`, `S22` | — | Covered |
| Input/output boundary | `S01`, `S07` | `S24` | Covered at chapter depth |

### Knowledge Gaps and Risks

- V8'in güncel pipeline davranışı eski Ignition yazılarından çıkarılmamalıdır;
  güncel motor kodu/dokümanı gerekirse sonraki sprintte ayrıca doğrulanmalıdır.
- ELF arşiv kaynağının güncellik ve bakım statüsü Research Validation sırasında
  kayıt altına alınmalıdır; POSIX ve PE karşılaştırması bu riski azaltır.
- Fetch-decode-execute anlatısının modern CPU'larda yalnızca soyut model olduğu
  açıkça sınırlandırılmalıdır.
- “Runtime” ve “memory” terimleri lesson terminoloji sözleşmesinde bağlama göre
  tanımlanmalıdır.
- `V01-C38` kapsamına ait event loop, host jobs ve JavaScript tooling ayrıntıları
  bu chapter'a taşınmamalıdır.
- `LO004` için kullanılacak soyut instruction set sonraki sprintte seçilmeli;
  doğrudan RISC-V/JVM/WebAssembly öğretmek yerine küçük, tarafsız bir izleme
  modeli tercih edilmelidir.

### Source Decisions for the Next Sprint

- Atomik extraction ilk olarak `S09`, `S11`, `S12`, `S14`, `S18`, `S19`, `S22`
  üzerinde yapılacaktır.
- Kavramsal çapraz doğrulama `S01`, `S02`, `S03`, `S04`, `S06`, `S07` ile
  yürütülecektir.
- Process/memory sınırı `S08`, `S14`, `S15`, `S16`, `S17` ile doğrulanacaktır.
- Dil uygulaması karşılaştırması `S20`–`S26` ile yapılacak; hiçbir motor davranışı
  evrensel program execution kuralı olarak yazılmayacaktır.

## Validation

- 26 adayın tamamı `2026-07-22` tarihinde canlı web erişimiyle bulunmuştur.
- Tier 1 ve Tier 2 kaynak hedefleri aşılmıştır.
- Temel kanıt için community kaynağı kullanılmamıştır.
- Her zorunlu konu kümesi en az bir primary adayla eşleşmiştir.
- Kaynaklar henüz kanonik Source/Evidence Registry'ye eklenmemiştir.
- Kesin claim/evidence çıkarımı yapılmadığı için belge `Draft` durumundadır.

## References

- [Research Request](./research-request.md)
- [Source Strategy](./source-strategy.md)
- [Research Search Log](./research-search-log.md)
