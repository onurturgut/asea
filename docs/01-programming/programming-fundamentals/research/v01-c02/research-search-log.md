---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-006"
supporting_document_type: "Compatibility Report"
title: "Research Search Log: How Computers Execute Programs"
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
x-production-unit: "v01-c02"
x-research-stage: "Search Log"
x-search-date: "2026-07-22"
---

# Research Search Log: How Computers Execute Programs

## Purpose

Bu günlük, Sprint 07A sırasında kullanılan arama ailelerini, bulunan otorite
kümelerini ve dışlama kararlarını yeniden üretilebilir biçimde kaydeder.

## Scope

Günlük yalnızca kaynak keşfi ve ön incelemeyi kapsar. Atomik claim/evidence
çıkarımı, tam locator doğrulaması ve Research Packet üretimi sonraki sprintlerin
işidir.

## Ownership

Research Engineer sorguları ve erişim tarihini kaydeder. Technical Reviewer,
sonraki aşamada seçilen sayfa/bölümlerin iddia kapsamına uygunluğunu denetler.

## Content

### Search Session

| Alan | Değer |
| --- | --- |
| Tarih | 2026-07-22 |
| Hedef | `V01-C02`, `LO003`, `LO004` |
| Öncelik | Tier 1 ve Tier 2 |
| Dil | İngilizce teknik kaynaklar; Türkçe araştırma notları |
| Sonuç | 26 erişilebilir aday, 19 bağımsız otorite ailesi |

### Query Log

| No | Sorgu/inceleme alanı | Bulunan ana otorite | Karar |
| ---: | --- | --- | --- |
| 1 | `MIT OCW 6.004 computation structures ISA compiler processor memory` | MIT OCW | Include |
| 2 | `CMU 15-213 how systems execute programs store information` | Carnegie Mellon University | Include |
| 3 | `Berkeley CS61C abstraction assembly machine language processor memory` | UC Berkeley | Include |
| 4 | `Stanford CS107 compilation machine-level code memory organization` | Stanford University | Include |
| 5 | `Nand2Tetris official machine language CPU emulator RAM ROM` | Nand2Tetris | Include |
| 6 | `CS2023 architecture organization systems fundamentals execution` | ACM/IEEE-CS/AAAI | Include |
| 7 | `RISC-V ratified unprivileged ISA latest stable` | RISC-V International | Include; pin 20260120 |
| 8 | `Arm architecture official instruction set guide` | Arm | Include as independent ISA check |
| 9 | `GCC official compilation preprocessing assembly linking` | GNU GCC | Include |
| 10 | `GNU binutils ld object files relocation symbols` | GNU Binutils | Include |
| 11 | `LLVM official compiler infrastructure documentation` | LLVM Project | Supporting |
| 12 | `POSIX exec process image 2024` | The Open Group | Include |
| 13 | `ELF specification loader executable segments` | Linux Foundation archive | Include with freshness review |
| 14 | `Microsoft PE format loader virtual address` | Microsoft Learn | Include |
| 15 | `WebAssembly specification execution state stack store` | W3C/WebAssembly CG | Include |
| 16 | `Python execution model bytecode frames official` | Python Software Foundation | Supporting |
| 17 | `Java Virtual Machine specification runtime data areas frames` | Oracle/JCP | Include |
| 18 | `ECMA-335 CLI virtual execution system CIL` | Ecma International | Supporting |
| 19 | `V8 Ignition interpreter TurboFan official` | V8 team | Historical implementation example |
| 20 | `MDN JavaScript execution model engine host stack heap` | Mozilla/MDN | Supporting; reserve detailed use for `V01-C38` |
| 21 | `OSTEP process address space official` | University of Wisconsin authors | Supporting |
| 22 | `Intel SDM instruction execution official` | Intel | Deferred; canonical locator not sufficiently narrowed |

### Excluded Result Classes

- Wikipedia, Reddit, personal blogs and tutorial aggregators temel kanıttan
  çıkarıldı.
- Arama motoru özetleri tek başına kaynak kabul edilmedi.
- Coursera kopyaları, resmi Nand2Tetris sitesi erişilebilir olduğu için temel
  kaynak olarak kullanılmadı.
- Güncel olmayan RISC-V sürüm URL'leri, latest stable `20260120` doğrulandıktan
  sonra kullanılmadı.
- V8 yazıları güncel evrensel motor sözleşmesi değil, tarihsel implementation
  örneği olarak sınıflandırıldı.
- Spekülatif yürütme ve advanced memory research sonuçları chapter kapsamı
  dışında olduğu için dışlandı.

### Access and Freshness Notes

- RISC-V index, `Version 20260120: Official Release` bilgisini gösterir.
- Java SE specifications index, JVM Specification SE 26 sürümünü ve 2026
  yayımlanma bilgisini gösterir.
- WebAssembly Core Specification sayfası 3.0 ve `2026-07-10` tarihini gösterir.
- GNU Binutils belgeleri 2.46 sürümüne işaret eder.
- Stanford CS107 syllabus `2026-03-30` güncellemesini gösterir.
- OSTEP ana sayfası v1.10, November 2023 kaydını gösterir.
- Rolling belgeler için erişim tarihi sürüm kanıtı olarak tutulur; Research
  Validation aşamasında archive/checksum gereksinimi değerlendirilir.

### Search Saturation Assessment

İlk kaynak keşfi konu ailesi bakımından doygunluğa ulaşmıştır: son iki arama
turu yeni temel execution katmanı üretmemiş, mevcut ISA, toolchain, OS, VM ve
runtime ailelerine ek bağımsız doğrulama getirmiştir. Buna karşın evidence
doygunluğu henüz ilan edilmemiştir; locator düzeyinde atomik extraction
tamamlanmamıştır.

### Next Extraction Order

1. `LO003`: GCC → GNU `ld` → POSIX `exec` → ELF/PE → virtual address space.
2. `LO003`: RISC-V → university abstraction sources → JVM/WebAssembly/Python.
3. `LO004`: MIT Beta → RISC-V architectural state → WebAssembly execution →
   JVM frames and PC.
4. Cross-check: Nand2Tetris, CS61C, CMU 15-213 ve OSTEP.
5. Implementation appendix: V8/MDN, yalnızca chapter sınırı korunarak.

## Validation

- Sorgular kurum ve standart alanlarına öncelik vermiştir.
- Community sonuçları temel kaynak kaydına alınmamıştır.
- Erişim, sürüm ve dışlama kararları kaydedilmiştir.
- Arama günlüğü yeni kanonik kimlik veya governance kuralı üretmez.
- Research Collection henüz başlatılmamıştır.

## References

- [Research Request](./research-request.md)
- [Source Strategy](./source-strategy.md)
- [Source Candidate Register](./source-candidate-register.md)
