---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-007"
supporting_document_type: "Compatibility Report"
title: "Atomic Evidence Register: How Computers Execute Programs"
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
x-production-unit: "v01-c02"
x-research-stage: "Atomic Evidence Extraction"
x-access-date: "2026-07-22"
---

# Atomic Evidence Register: How Computers Execute Programs

## Purpose

Bu belge, `V01-C02` araştırması için locator düzeyinde doğrulanmış 88 atomik teknik kanıtı kaydeder. Kayıtlar ders anlatımı değil, Research Validation girdisidir.

## Scope

Kapsam `V01-LO003` ve `V01-LO004` ile sınırlıdır. Evidence ID'leri bu araştırma paketinin yerel kayıt kimlikleridir; kanonik Knowledge Foundation kayıtlarını değiştirmez.

## Ownership

Research Engineer extraction ve provenance bilgisinden sorumludur. Bütün kayıtlar Sprint 07C Technical Review beklediği için belge `Draft` durumundadır.

## Content

### Register Summary

| Metric | Value |
| --- | ---: |
| Atomic evidence | 92 |
| HIGH confidence | 91 |
| MEDIUM confidence | 1 |
| LOW confidence | 0 |
| Exact locators | 92 (100%) |
| LO003 records | 84 |
| LO004 records | 8 |

### Program and source code

#### V01-C02-EV-001

- **Evidence ID:** `V01-C02-EV-001`
- **Claim:** A stored-program computer can represent program instructions as bits.
- **Turkish Statement:** Saklı program yaklaşımında program talimatları bitlerle temsil edilebilir.
- **English Canonical Term:** Stored Program
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-006`
- **Source Title:** CS61C Course Notes — C Basics Introduction
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/c-basics/)
- **Locator Type:** Section/heading
- **Locator:** §3 Great Idea #1, Figure 3 and lines under the stored-program discussion
- **Locator Status:** COMPLETE
- **Evidence Summary:** Saklı program yaklaşımında program talimatları bitlerle temsil edilebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Saklı program yaklaşımında program talimatları bitlerle temsil edilebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-002`
- **Related Evidence IDs:** `V01-C02-EV-002`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-002

- **Evidence ID:** `V01-C02-EV-002`
- **Claim:** High-level languages abstract away many processor-architecture details.
- **Turkish Statement:** Yüksek seviyeli programlama dilleri işlemci mimarisinin birçok ayrıntısını soyutlar.
- **English Canonical Term:** High-Level Programming Language
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-006`
- **Source Title:** CS61C Course Notes — C Basics Introduction
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/c-basics/)
- **Locator Type:** Section/heading
- **Locator:** §4 High-level programming languages
- **Locator Status:** COMPLETE
- **Evidence Summary:** Yüksek seviyeli programlama dilleri işlemci mimarisinin birçok ayrıntısını soyutlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Yüksek seviyeli programlama dilleri işlemci mimarisinin birçok ayrıntısını soyutlar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-003`
- **Related Evidence IDs:** `V01-C02-EV-003`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-003

- **Evidence ID:** `V01-C02-EV-003`
- **Claim:** A high-level program is a distinct representation from assembly and machine code.
- **Turkish Statement:** Yüksek seviyeli program, assembly ve makine kodundan ayrı bir gösterimdir.
- **English Canonical Term:** Program Representation
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-007`
- **Source Title:** CS61C Course Notes — RISC-V Introduction
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/rv-intro/)
- **Locator Type:** Section/heading
- **Locator:** Introduction, Figure 1 and paragraph immediately below it
- **Locator Status:** COMPLETE
- **Evidence Summary:** Yüksek seviyeli program, assembly ve makine kodundan ayrı bir gösterimdir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Yüksek seviyeli program, assembly ve makine kodundan ayrı bir gösterimdir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-001`
- **Related Evidence IDs:** `V01-C02-EV-001`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-004

- **Evidence ID:** `V01-C02-EV-004`
- **Claim:** A program stored on disk consists of instructions and may include static data.
- **Turkish Statement:** Diskte duran bir program talimatlardan ve isteğe bağlı statik veriden oluşur.
- **English Canonical Term:** Program
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 4, opening paragraph, PDF page 1
- **Locator Status:** COMPLETE
- **Evidence Summary:** Diskte duran bir program talimatlardan ve isteğe bağlı statik veriden oluşur.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Diskte duran bir program talimatlardan ve isteğe bağlı statik veriden oluşur.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-006`
- **Related Evidence IDs:** `V01-C02-EV-006`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-005

- **Evidence ID:** `V01-C02-EV-005`
- **Claim:** A process is the operating-system abstraction of a running program.
- **Turkish Statement:** Süreç, işletim sisteminin çalışan programa sunduğu soyutlamadır.
- **English Canonical Term:** Process
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.1 The Abstraction: A Process, PDF page 2
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç, işletim sisteminin çalışan programa sunduğu soyutlamadır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç, işletim sisteminin çalışan programa sunduğu soyutlamadır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-004`
- **Related Evidence IDs:** `V01-C02-EV-004`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-006

- **Evidence ID:** `V01-C02-EV-006`
- **Claim:** Systems education distinguishes program execution, information storage, and communication as related concerns.
- **Turkish Statement:** Sistemler eğitimi program yürütme, bilgi saklama ve iletişimi ilişkili fakat ayrı konular olarak ele alır.
- **English Canonical Term:** Computer Systems
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-004`
- **Source Title:** 15-213 Introduction to Computer Systems
- **Source Organization:** Carnegie Mellon University
- **Source Type:** University course profile
- **Source Version:** Course profile
- **Publication Date:** Updated November 2017
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://csd.cs.cmu.edu/15213-introduction-to-computer-systems)
- **Locator Type:** Section/heading
- **Locator:** Course Goals/Objectives
- **Locator Status:** COMPLETE
- **Evidence Summary:** Sistemler eğitimi program yürütme, bilgi saklama ve iletişimi ilişkili fakat ayrı konular olarak ele alır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Sistemler eğitimi program yürütme, bilgi saklama ve iletişimi ilişkili fakat ayrı konular olarak ele alır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-007`
- **Related Evidence IDs:** `V01-C02-EV-007`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-007

- **Evidence ID:** `V01-C02-EV-007`
- **Claim:** A Python program is constructed from code blocks that execute as units.
- **Turkish Statement:** Python programı birim olarak yürütülen kod bloklarından oluşur.
- **English Canonical Term:** Code Block
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-022`
- **Source Title:** Python Language Reference — Execution Model
- **Source Organization:** Python Software Foundation
- **Source Type:** Official language documentation
- **Source Version:** Python 3.14.6
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.python.org/3/reference/executionmodel.html)
- **Locator Type:** Section/heading
- **Locator:** §4.1 Structure of a program
- **Locator Status:** COMPLETE
- **Evidence Summary:** Python programı birim olarak yürütülen kod bloklarından oluşur.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Python programı birim olarak yürütülen kod bloklarından oluşur.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-008`
- **Related Evidence IDs:** `V01-C02-EV-008`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-008

- **Evidence ID:** `V01-C02-EV-008`
- **Claim:** Computer-system execution study spans source-level constructs down to machine-level code and memory organization.
- **Turkish Statement:** Bilgisayar sistemi yürütme çalışması kaynak düzeyi yapılardan makine koduna ve bellek organizasyonuna kadar uzanır.
- **English Canonical Term:** Execution Layers
- **Topic:** Program and source code
- **Source ID:** `V01-C02-SRC-005`
- **Source Title:** CS107 General Information and Syllabus
- **Source Organization:** Stanford University
- **Source Type:** University course syllabus
- **Source Version:** Summer 2026
- **Publication Date:** Updated 2026-03-30
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://web.stanford.edu/class/cs107/syllabus.html)
- **Locator Type:** Section/heading
- **Locator:** Course Overview
- **Locator Status:** COMPLETE
- **Evidence Summary:** Bilgisayar sistemi yürütme çalışması kaynak düzeyi yapılardan makine koduna ve bellek organizasyonuna kadar uzanır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Bilgisayar sistemi yürütme çalışması kaynak düzeyi yapılardan makine koduna ve bellek organizasyonuna kadar uzanır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-005`
- **Related Evidence IDs:** `V01-C02-EV-005`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### Compilation, interpretation, linking, and loading

#### V01-C02-EV-009

- **Evidence ID:** `V01-C02-EV-009`
- **Claim:** GCC compilation can involve preprocessing, compilation proper, assembly, and linking.
- **Turkish Statement:** GCC derleme akışı önişleme, asıl derleme, assembly ve bağlama aşamalarını içerebilir.
- **English Canonical Term:** Compilation Pipeline
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-014`
- **Source Title:** GCC Overall Options
- **Source Organization:** GNU Project
- **Source Type:** Official toolchain documentation
- **Source Version:** Rolling GCC manual
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
- **Locator Type:** Section/heading
- **Locator:** §3.2 Options Controlling the Kind of Output, opening paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** GCC derleme akışı önişleme, asıl derleme, assembly ve bağlama aşamalarını içerebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GCC derleme akışı önişleme, asıl derleme, assembly ve bağlama aşamalarını içerebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-010`
- **Related Evidence IDs:** `V01-C02-EV-010`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-010

- **Evidence ID:** `V01-C02-EV-010`
- **Claim:** GCC orders preprocessing, compilation, assembly, and linking in that sequence.
- **Turkish Statement:** GCC önişleme, derleme, assembly ve bağlama aşamalarını bu sırada uygular.
- **English Canonical Term:** Compilation Order
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-014`
- **Source Title:** GCC Overall Options
- **Source Organization:** GNU Project
- **Source Type:** Official toolchain documentation
- **Source Version:** Rolling GCC manual
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
- **Locator Type:** Section/heading
- **Locator:** §3.2 Options Controlling the Kind of Output, opening paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** GCC önişleme, derleme, assembly ve bağlama aşamalarını bu sırada uygular.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GCC önişleme, derleme, assembly ve bağlama aşamalarını bu sırada uygular.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-009`
- **Related Evidence IDs:** `V01-C02-EV-009`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-011

- **Evidence ID:** `V01-C02-EV-011`
- **Claim:** The GCC `-E` option stops after preprocessing and emits preprocessed source.
- **Turkish Statement:** GCC `-E` seçeneği önişlemeden sonra durur ve önişlenmiş kaynak üretir.
- **English Canonical Term:** Preprocessing
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-014`
- **Source Title:** GCC Overall Options
- **Source Organization:** GNU Project
- **Source Type:** Official toolchain documentation
- **Source Version:** Rolling GCC manual
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
- **Locator Type:** Section/heading
- **Locator:** §3.2, `-E` / `--preprocess`
- **Locator Status:** COMPLETE
- **Evidence Summary:** GCC `-E` seçeneği önişlemeden sonra durur ve önişlenmiş kaynak üretir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GCC `-E` seçeneği önişlemeden sonra durur ve önişlenmiş kaynak üretir.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-009`
- **Related Evidence IDs:** `V01-C02-EV-009`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-012

- **Evidence ID:** `V01-C02-EV-012`
- **Claim:** The GCC `-S` option stops after compilation proper and emits assembler code.
- **Turkish Statement:** GCC `-S` seçeneği asıl derlemeden sonra durur ve assembler kodu üretir.
- **English Canonical Term:** Compilation
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-014`
- **Source Title:** GCC Overall Options
- **Source Organization:** GNU Project
- **Source Type:** Official toolchain documentation
- **Source Version:** Rolling GCC manual
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
- **Locator Type:** Section/heading
- **Locator:** §3.2, `-S` / `--assemble`
- **Locator Status:** COMPLETE
- **Evidence Summary:** GCC `-S` seçeneği asıl derlemeden sonra durur ve assembler kodu üretir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GCC `-S` seçeneği asıl derlemeden sonra durur ve assembler kodu üretir.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-018`
- **Related Evidence IDs:** `V01-C02-EV-018`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-013

- **Evidence ID:** `V01-C02-EV-013`
- **Claim:** The GCC `-c` option compiles or assembles without performing the linking stage.
- **Turkish Statement:** GCC `-c` seçeneği bağlama yapmadan derler veya assemble eder.
- **English Canonical Term:** Object File
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-014`
- **Source Title:** GCC Overall Options
- **Source Organization:** GNU Project
- **Source Type:** Official toolchain documentation
- **Source Version:** Rolling GCC manual
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
- **Locator Type:** Section/heading
- **Locator:** §3.2, `-c` / `--compile`
- **Locator Status:** COMPLETE
- **Evidence Summary:** GCC `-c` seçeneği bağlama yapmadan derler veya assemble eder.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GCC `-c` seçeneği bağlama yapmadan derler veya assemble eder.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-014`
- **Related Evidence IDs:** `V01-C02-EV-014`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-014

- **Evidence ID:** `V01-C02-EV-014`
- **Claim:** GNU `ld` combines object and archive files.
- **Turkish Statement:** GNU `ld`, nesne ve arşiv dosyalarını birleştirir.
- **English Canonical Term:** Linker
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-015`
- **Source Title:** GNU ld — Overview
- **Source Organization:** GNU Binutils
- **Source Type:** Official linker documentation
- **Source Version:** Binutils 2.46
- **Publication Date:** 2026-02-08 documentation snapshot
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://sourceware.org/binutils/docs/ld/Overview.html)
- **Locator Type:** Section/heading
- **Locator:** §1 Overview, first paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** GNU `ld`, nesne ve arşiv dosyalarını birleştirir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GNU `ld`, nesne ve arşiv dosyalarını birleştirir.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-015`
- **Related Evidence IDs:** `V01-C02-EV-015`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-015

- **Evidence ID:** `V01-C02-EV-015`
- **Claim:** GNU `ld` relocates data while linking inputs.
- **Turkish Statement:** GNU `ld`, girdileri bağlarken verileri yeniden konumlandırır.
- **English Canonical Term:** Relocation
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-015`
- **Source Title:** GNU ld — Overview
- **Source Organization:** GNU Binutils
- **Source Type:** Official linker documentation
- **Source Version:** Binutils 2.46
- **Publication Date:** 2026-02-08 documentation snapshot
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://sourceware.org/binutils/docs/ld/Overview.html)
- **Locator Type:** Section/heading
- **Locator:** §1 Overview, first paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** GNU `ld`, girdileri bağlarken verileri yeniden konumlandırır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GNU `ld`, girdileri bağlarken verileri yeniden konumlandırır.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-019`
- **Related Evidence IDs:** `V01-C02-EV-019`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-016

- **Evidence ID:** `V01-C02-EV-016`
- **Claim:** GNU `ld` resolves symbol references among linked inputs.
- **Turkish Statement:** GNU `ld`, bağlanan girdiler arasındaki sembol başvurularını çözer.
- **English Canonical Term:** Symbol Resolution
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-015`
- **Source Title:** GNU ld — Overview
- **Source Organization:** GNU Binutils
- **Source Type:** Official linker documentation
- **Source Version:** Binutils 2.46
- **Publication Date:** 2026-02-08 documentation snapshot
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://sourceware.org/binutils/docs/ld/Overview.html)
- **Locator Type:** Section/heading
- **Locator:** §1 Overview, first paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** GNU `ld`, bağlanan girdiler arasındaki sembol başvurularını çözer.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** GNU `ld`, bağlanan girdiler arasındaki sembol başvurularını çözer.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-016`
- **Related Evidence IDs:** `V01-C02-EV-016`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-017

- **Evidence ID:** `V01-C02-EV-017`
- **Claim:** An executable has an entry point identifying the first instruction to execute.
- **Turkish Statement:** Yürütülebilir dosya, ilk yürütülecek talimatı belirleyen bir giriş noktasına sahiptir.
- **English Canonical Term:** Entry Point
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-016`
- **Source Title:** GNU ld — Setting the Entry Point
- **Source Organization:** GNU Binutils
- **Source Type:** Official linker documentation
- **Source Version:** Binutils 2.46
- **Publication Date:** 2026-02-08 documentation snapshot
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://sourceware.org/binutils/docs/ld/Entry-Point.html)
- **Locator Type:** Section/heading
- **Locator:** §3.4.1 Setting the Entry Point
- **Locator Status:** COMPLETE
- **Evidence Summary:** Yürütülebilir dosya, ilk yürütülecek talimatı belirleyen bir giriş noktasına sahiptir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Yürütülebilir dosya, ilk yürütülecek talimatı belirleyen bir giriş noktasına sahiptir.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-020`
- **Related Evidence IDs:** `V01-C02-EV-020`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-018

- **Evidence ID:** `V01-C02-EV-018`
- **Claim:** A PE program image records its starting address relative to the image base.
- **Turkish Statement:** PE program görüntüsü başlangıç adresini görüntü tabanına göre kaydeder.
- **English Canonical Term:** AddressOfEntryPoint
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-019`
- **Source Title:** PE Format
- **Source Organization:** Microsoft
- **Source Type:** Official executable-format documentation
- **Source Version:** PE/COFF rolling documentation
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format)
- **Locator Type:** Section/heading
- **Locator:** Optional Header Standard Fields, `AddressOfEntryPoint`
- **Locator Status:** COMPLETE
- **Evidence Summary:** PE program görüntüsü başlangıç adresini görüntü tabanına göre kaydeder.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** PE program görüntüsü başlangıç adresini görüntü tabanına göre kaydeder.
- **Confidence Level:** HIGH
- **Authority Level:** Vendor documentation
- **Independent Confirmation:** `V01-C02-EV-017`
- **Related Evidence IDs:** `V01-C02-EV-017`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-019

- **Evidence ID:** `V01-C02-EV-019`
- **Claim:** POSIX `exec` replaces the process image with a new process image.
- **Turkish Statement:** POSIX `exec`, mevcut süreç görüntüsünü yeni bir süreç görüntüsüyle değiştirir.
- **English Canonical Term:** Process Image
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-017`
- **Source Title:** POSIX exec Functions
- **Source Organization:** The Open Group
- **Source Type:** Operating-system API standard
- **Source Version:** POSIX.1-2024 Issue 8
- **Publication Date:** 2024
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pubs.opengroup.org/onlinepubs/9799919799/functions/exec.html)
- **Locator Type:** Section/heading
- **Locator:** DESCRIPTION, opening normative paragraphs
- **Locator Status:** COMPLETE
- **Evidence Summary:** POSIX `exec`, mevcut süreç görüntüsünü yeni bir süreç görüntüsüyle değiştirir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** POSIX `exec`, mevcut süreç görüntüsünü yeni bir süreç görüntüsüyle değiştirir.
- **Confidence Level:** HIGH
- **Authority Level:** Official standard
- **Independent Confirmation:** `V01-C02-EV-021`
- **Related Evidence IDs:** `V01-C02-EV-021`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-020

- **Evidence ID:** `V01-C02-EV-020`
- **Claim:** Program loading places code and static data into the process address space.
- **Turkish Statement:** Program yükleme, kodu ve statik veriyi süreç adres alanına yerleştirir.
- **English Canonical Term:** Loading
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.3 Process Creation: A Little More Detail, PDF page 4
- **Locator Status:** COMPLETE
- **Evidence Summary:** Program yükleme, kodu ve statik veriyi süreç adres alanına yerleştirir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Program yükleme, kodu ve statik veriyi süreç adres alanına yerleştirir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-011`
- **Related Evidence IDs:** `V01-C02-EV-011`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-021

- **Evidence ID:** `V01-C02-EV-021`
- **Claim:** Before execution, an operating system prepares a runtime stack for the process.
- **Turkish Statement:** İşletim sistemi yürütmeden önce süreç için çalışma zamanı yığını hazırlar.
- **English Canonical Term:** Runtime Stack Setup
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.3 Process Creation, PDF page 5
- **Locator Status:** COMPLETE
- **Evidence Summary:** İşletim sistemi yürütmeden önce süreç için çalışma zamanı yığını hazırlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** İşletim sistemi yürütmeden önce süreç için çalışma zamanı yığını hazırlar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-012`
- **Related Evidence IDs:** `V01-C02-EV-012`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-022

- **Evidence ID:** `V01-C02-EV-022`
- **Claim:** Process startup can initialize standard input, standard output, and standard error resources.
- **Turkish Statement:** Süreç başlatma, standart girdi, standart çıktı ve standart hata kaynaklarını hazırlayabilir.
- **English Canonical Term:** I/O Setup
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.3 Process Creation, PDF page 5
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç başlatma, standart girdi, standart çıktı ve standart hata kaynaklarını hazırlayabilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç başlatma, standart girdi, standart çıktı ve standart hata kaynaklarını hazırlayabilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-013`
- **Related Evidence IDs:** `V01-C02-EV-013`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-023

- **Evidence ID:** `V01-C02-EV-023`
- **Claim:** An assembler translates symbolic assembly instructions into binary machine instructions.
- **Turkish Statement:** Assembler, sembolik assembly talimatlarını ikili makine talimatlarına çevirir.
- **English Canonical Term:** Assembler
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-008`
- **Source Title:** Nand2Tetris Project 04 — Machine Language
- **Source Organization:** Nand2Tetris
- **Source Type:** Official academic course material
- **Source Version:** Website 2025
- **Publication Date:** 2025
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://www.nand2tetris.org/project04)
- **Locator Type:** Section/heading
- **Locator:** Project 4, Background and Guidelines / Tests
- **Locator Status:** COMPLETE
- **Evidence Summary:** Assembler, sembolik assembly talimatlarını ikili makine talimatlarına çevirir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Assembler, sembolik assembly talimatlarını ikili makine talimatlarına çevirir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-022`
- **Related Evidence IDs:** `V01-C02-EV-022`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-024

- **Evidence ID:** `V01-C02-EV-024`
- **Claim:** Source-to-execution paths are not limited to a single native compilation pipeline.
- **Turkish Statement:** Kaynaktan yürütmeye giden yollar tek bir native derleme hattıyla sınırlı değildir.
- **English Canonical Term:** Execution Path
- **Topic:** Compilation, interpretation, linking, and loading
- **Source ID:** `V01-C02-SRC-020`
- **Source Title:** WebAssembly Core Specification — Introduction
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/intro/introduction.html)
- **Locator Type:** Section/heading
- **Locator:** Introduction, Design Goals — Efficient and portable representation
- **Locator Status:** COMPLETE
- **Evidence Summary:** Kaynaktan yürütmeye giden yollar tek bir native derleme hattıyla sınırlı değildir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Kaynaktan yürütmeye giden yollar tek bir native derleme hattıyla sınırlı değildir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-023`
- **Related Evidence IDs:** `V01-C02-EV-023`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### Machine code, assembly, and ISA

#### V01-C02-EV-025

- **Evidence ID:** `V01-C02-EV-025`
- **Claim:** A hardware platform executes commands encoded in its machine language.
- **Turkish Statement:** Donanım platformu kendi makine dilinde kodlanmış komutları yürütür.
- **English Canonical Term:** Machine Language
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-008`
- **Source Title:** Nand2Tetris Project 04 — Machine Language
- **Source Organization:** Nand2Tetris
- **Source Type:** Official academic course material
- **Source Version:** Website 2025
- **Publication Date:** 2025
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://www.nand2tetris.org/project04)
- **Locator Type:** Section/heading
- **Locator:** Project 4, Background
- **Locator Status:** COMPLETE
- **Evidence Summary:** Donanım platformu kendi makine dilinde kodlanmış komutları yürütür.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Donanım platformu kendi makine dilinde kodlanmış komutları yürütür.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-026`
- **Related Evidence IDs:** `V01-C02-EV-026`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-026

- **Evidence ID:** `V01-C02-EV-026`
- **Claim:** Assembly is a symbolic low-level representation distinct from binary machine code.
- **Turkish Statement:** Assembly, ikili makine kodundan ayrı sembolik bir düşük seviye gösterimdir.
- **English Canonical Term:** Assembly Language
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-008`
- **Source Title:** Nand2Tetris Project 04 — Machine Language
- **Source Organization:** Nand2Tetris
- **Source Type:** Official academic course material
- **Source Version:** Website 2025
- **Publication Date:** 2025
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://www.nand2tetris.org/project04)
- **Locator Type:** Section/heading
- **Locator:** Project 4, Background
- **Locator Status:** COMPLETE
- **Evidence Summary:** Assembly, ikili makine kodundan ayrı sembolik bir düşük seviye gösterimdir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Assembly, ikili makine kodundan ayrı sembolik bir düşük seviye gösterimdir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-025`
- **Related Evidence IDs:** `V01-C02-EV-025`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-027

- **Evidence ID:** `V01-C02-EV-027`
- **Claim:** An ISA defines the interface through which software addresses hardware capabilities.
- **Turkish Statement:** ISA, yazılımın donanım yetenekleriyle etkileşim kurduğu arayüzü tanımlar.
- **English Canonical Term:** Instruction Set Architecture
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-007`
- **Source Title:** CS61C Course Notes — RISC-V Introduction
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/rv-intro/)
- **Locator Type:** Section/heading
- **Locator:** §1.1 Instruction Set Architecture
- **Locator Status:** COMPLETE
- **Evidence Summary:** ISA, yazılımın donanım yetenekleriyle etkileşim kurduğu arayüzü tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** ISA, yazılımın donanım yetenekleriyle etkileşim kurduğu arayüzü tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-028`
- **Related Evidence IDs:** `V01-C02-EV-028`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-028

- **Evidence ID:** `V01-C02-EV-028`
- **Claim:** Machine language represents instructions as bits.
- **Turkish Statement:** Makine dili talimatları bitlerle temsil eder.
- **English Canonical Term:** Machine Code
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-007`
- **Source Title:** CS61C Course Notes — RISC-V Introduction
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/rv-intro/)
- **Locator Type:** Section/heading
- **Locator:** Introduction, Figure 1 and §1.1
- **Locator Status:** COMPLETE
- **Evidence Summary:** Makine dili talimatları bitlerle temsil eder.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Makine dili talimatları bitlerle temsil eder.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-027`
- **Related Evidence IDs:** `V01-C02-EV-027`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-029

- **Evidence ID:** `V01-C02-EV-029`
- **Claim:** Different CPU families can implement different instruction set architectures.
- **Turkish Statement:** Farklı CPU aileleri farklı talimat kümesi mimarilerini uygulayabilir.
- **English Canonical Term:** ISA Implementation
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-007`
- **Source Title:** CS61C Course Notes — RISC-V Introduction
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/rv-intro/)
- **Locator Type:** Section/heading
- **Locator:** §2 RISC vs. CISC, 'Different CPUs implement different ISAs'
- **Locator Status:** COMPLETE
- **Evidence Summary:** Farklı CPU aileleri farklı talimat kümesi mimarilerini uygulayabilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Farklı CPU aileleri farklı talimat kümesi mimarilerini uygulayabilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-031`
- **Related Evidence IDs:** `V01-C02-EV-031`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-030

- **Evidence ID:** `V01-C02-EV-030`
- **Claim:** The RV32I programmer-visible state includes general-purpose registers.
- **Turkish Statement:** RV32I programcıya görünür durumu genel amaçlı kayıtları içerir.
- **English Canonical Term:** Register
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.1 Programmers' Model for Base Integer ISA
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I programcıya görünür durumu genel amaçlı kayıtları içerir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I programcıya görünür durumu genel amaçlı kayıtları içerir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-032`
- **Related Evidence IDs:** `V01-C02-EV-032`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-031

- **Evidence ID:** `V01-C02-EV-031`
- **Claim:** The RV32I programmer-visible state includes a program counter.
- **Turkish Statement:** RV32I programcıya görünür durumu bir program sayacı içerir.
- **English Canonical Term:** Program Counter
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.1 Programmers' Model for Base Integer ISA
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I programcıya görünür durumu bir program sayacı içerir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I programcıya görünür durumu bir program sayacı içerir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-033`
- **Related Evidence IDs:** `V01-C02-EV-033`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-032

- **Evidence ID:** `V01-C02-EV-032`
- **Claim:** RV32I base instructions use fixed 32-bit core instruction formats.
- **Turkish Statement:** RV32I temel talimatları sabit 32 bitlik çekirdek talimat biçimleri kullanır.
- **English Canonical Term:** Instruction Encoding
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.2 Base Instruction Formats
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I temel talimatları sabit 32 bitlik çekirdek talimat biçimleri kullanır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I temel talimatları sabit 32 bitlik çekirdek talimat biçimleri kullanır.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-030`
- **Related Evidence IDs:** `V01-C02-EV-030`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-033

- **Evidence ID:** `V01-C02-EV-033`
- **Claim:** RV32I arithmetic instructions operate on register operands rather than directly on memory.
- **Turkish Statement:** RV32I aritmetik talimatları doğrudan bellek yerine kayıt operandları üzerinde çalışır.
- **English Canonical Term:** Load-Store Architecture
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.4.2 Integer Register-Register Instructions
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I aritmetik talimatları doğrudan bellek yerine kayıt operandları üzerinde çalışır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I aritmetik talimatları doğrudan bellek yerine kayıt operandları üzerinde çalışır.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-034`
- **Related Evidence IDs:** `V01-C02-EV-034`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-034

- **Evidence ID:** `V01-C02-EV-034`
- **Claim:** RV32I load and store instructions transfer values between registers and memory.
- **Turkish Statement:** RV32I yükleme ve saklama talimatları değerleri kayıtlarla bellek arasında taşır.
- **English Canonical Term:** Load and Store
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.6 Load and Store Instructions
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I yükleme ve saklama talimatları değerleri kayıtlarla bellek arasında taşır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I yükleme ve saklama talimatları değerleri kayıtlarla bellek arasında taşır.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-029`
- **Related Evidence IDs:** `V01-C02-EV-029`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-035

- **Evidence ID:** `V01-C02-EV-035`
- **Claim:** The JVM specification defines an abstract machine rather than a concrete implementation.
- **Turkish Statement:** JVM spesifikasyonu somut bir uygulama yerine soyut bir makine tanımlar.
- **English Canonical Term:** Abstract Machine
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** Chapter 2 opening paragraphs
- **Locator Status:** COMPLETE
- **Evidence Summary:** JVM spesifikasyonu somut bir uygulama yerine soyut bir makine tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** JVM spesifikasyonu somut bir uygulama yerine soyut bir makine tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-035`
- **Related Evidence IDs:** `V01-C02-EV-035`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-036

- **Evidence ID:** `V01-C02-EV-036`
- **Claim:** JVM compiled code uses a hardware- and operating-system-independent binary class-file format.
- **Turkish Statement:** JVM için derlenmiş kod donanım ve işletim sisteminden bağımsız ikili class-file biçimi kullanır.
- **English Canonical Term:** Class File
- **Topic:** Machine code, assembly, and ISA
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1 The class File Format
- **Locator Status:** COMPLETE
- **Evidence Summary:** JVM için derlenmiş kod donanım ve işletim sisteminden bağımsız ikili class-file biçimi kullanır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** JVM için derlenmiş kod donanım ve işletim sisteminden bağımsız ikili class-file biçimi kullanır.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-036`
- **Related Evidence IDs:** `V01-C02-EV-036`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### CPU, registers, program counter, and execution cycle

#### V01-C02-EV-037

- **Evidence ID:** `V01-C02-EV-037`
- **Claim:** A programmer-visible machine model can be specified using registers, a program counter, memory, and instructions.
- **Turkish Statement:** Programcıya görünür bir makine modeli kayıtlar, program sayacı, bellek ve talimatlarla tanımlanabilir.
- **English Canonical Term:** Machine State
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §2 Machine Model, PDF page 2
- **Locator Status:** COMPLETE
- **Evidence Summary:** Programcıya görünür bir makine modeli kayıtlar, program sayacı, bellek ve talimatlarla tanımlanabilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Programcıya görünür bir makine modeli kayıtlar, program sayacı, bellek ve talimatlarla tanımlanabilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-038`
- **Related Evidence IDs:** `V01-C02-EV-038`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-038

- **Evidence ID:** `V01-C02-EV-038`
- **Claim:** The Beta architecture defines its registers as 32 bits wide.
- **Turkish Statement:** Beta mimarisi kayıtlarını 32 bit genişliğinde tanımlar.
- **English Canonical Term:** Register Width
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §2 Machine Model, PDF page 2
- **Locator Status:** COMPLETE
- **Evidence Summary:** Beta mimarisi kayıtlarını 32 bit genişliğinde tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Beta mimarisi kayıtlarını 32 bit genişliğinde tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-041`
- **Related Evidence IDs:** `V01-C02-EV-041`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-039

- **Evidence ID:** `V01-C02-EV-039`
- **Claim:** The Beta program counter is constrained to aligned instruction addresses.
- **Turkish Statement:** Beta program sayacı hizalanmış talimat adresleriyle sınırlandırılır.
- **English Canonical Term:** Instruction Address
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §2 Machine Model diagram, PDF page 2
- **Locator Status:** COMPLETE
- **Evidence Summary:** Beta program sayacı hizalanmış talimat adresleriyle sınırlandırılır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Beta program sayacı hizalanmış talimat adresleriyle sınırlandırılır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-042`
- **Related Evidence IDs:** `V01-C02-EV-042`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-040

- **Evidence ID:** `V01-C02-EV-040`
- **Claim:** The Beta specification models each instruction as atomic for architectural reasoning.
- **Turkish Statement:** Beta spesifikasyonu mimari akıl yürütmede her talimatı atomik kabul eder.
- **English Canonical Term:** Atomic Instruction
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §5 Instruction Specifications, PDF page 3
- **Locator Status:** COMPLETE
- **Evidence Summary:** Beta spesifikasyonu mimari akıl yürütmede her talimatı atomik kabul eder.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Beta spesifikasyonu mimari akıl yürütmede her talimatı atomik kabul eder.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-047`
- **Related Evidence IDs:** `V01-C02-EV-047`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-041

- **Evidence ID:** `V01-C02-EV-041`
- **Claim:** A Beta ADD step updates the program counter.
- **Turkish Statement:** Bir Beta ADD adımı program sayacını günceller.
- **English Canonical Term:** State Transition
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §5.1 ADD, Operation, PDF page 4
- **Locator Status:** COMPLETE
- **Evidence Summary:** Bir Beta ADD adımı program sayacını günceller.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Bir Beta ADD adımı program sayacını günceller.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-048`
- **Related Evidence IDs:** `V01-C02-EV-048`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-042

- **Evidence ID:** `V01-C02-EV-042`
- **Claim:** A Beta ADD step writes its computed sum to a destination register.
- **Turkish Statement:** Bir Beta ADD adımı hesaplanan toplamı hedef kayda yazar.
- **English Canonical Term:** Register Update
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §5.1 ADD, Operation, PDF page 4
- **Locator Status:** COMPLETE
- **Evidence Summary:** Bir Beta ADD adımı hesaplanan toplamı hedef kayda yazar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Bir Beta ADD adımı hesaplanan toplamı hedef kayda yazar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-037`
- **Related Evidence IDs:** `V01-C02-EV-037`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-043

- **Evidence ID:** `V01-C02-EV-043`
- **Claim:** A Beta conditional branch can replace sequential control flow by changing the program counter.
- **Turkish Statement:** Beta koşullu dallanması program sayacını değiştirerek sıralı kontrol akışını değiştirebilir.
- **English Canonical Term:** Control Flow
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §5.5 BEQ/BF, Operation, PDF page 5
- **Locator Status:** COMPLETE
- **Evidence Summary:** Beta koşullu dallanması program sayacını değiştirerek sıralı kontrol akışını değiştirebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Beta koşullu dallanması program sayacını değiştirerek sıralı kontrol akışını değiştirebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-050`
- **Related Evidence IDs:** `V01-C02-EV-050`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-044

- **Evidence ID:** `V01-C02-EV-044`
- **Claim:** In RV32I, the program counter holds the address of the current instruction.
- **Turkish Statement:** RV32I'de program sayacı mevcut talimatın adresini tutar.
- **English Canonical Term:** Program Counter
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.1 Programmers' Model for Base Integer ISA
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I'de program sayacı mevcut talimatın adresini tutar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I'de program sayacı mevcut talimatın adresini tutar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-045`
- **Related Evidence IDs:** `V01-C02-EV-045`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-045

- **Evidence ID:** `V01-C02-EV-045`
- **Claim:** RV32I register `x0` always reads as zero.
- **Turkish Statement:** RV32I `x0` kaydı her zaman sıfır olarak okunur.
- **English Canonical Term:** Zero Register
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.1 Programmers' Model for Base Integer ISA
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I `x0` kaydı her zaman sıfır olarak okunur.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I `x0` kaydı her zaman sıfır olarak okunur.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-046`
- **Related Evidence IDs:** `V01-C02-EV-046`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-046

- **Evidence ID:** `V01-C02-EV-046`
- **Claim:** RV32I ADD reads two source registers and writes one destination register.
- **Turkish Statement:** RV32I ADD iki kaynak kaydı okur ve bir hedef kayda yazar.
- **English Canonical Term:** Register Operation
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.4.2 Integer Register-Register Instructions
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I ADD iki kaynak kaydı okur ve bir hedef kayda yazar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I ADD iki kaynak kaydı okur ve bir hedef kayda yazar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-044`
- **Related Evidence IDs:** `V01-C02-EV-044`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-047

- **Evidence ID:** `V01-C02-EV-047`
- **Claim:** An RV32I NOP advances the program counter while leaving other architecturally visible state unchanged.
- **Turkish Statement:** RV32I NOP, diğer mimari görünür durumu değiştirmeden program sayacını ilerletir.
- **English Canonical Term:** NOP
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.4.3 NOP Instruction
- **Locator Status:** COMPLETE
- **Evidence Summary:** RV32I NOP, diğer mimari görünür durumu değiştirmeden program sayacını ilerletir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** RV32I NOP, diğer mimari görünür durumu değiştirmeden program sayacını ilerletir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-043`
- **Related Evidence IDs:** `V01-C02-EV-043`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-048

- **Evidence ID:** `V01-C02-EV-048`
- **Claim:** A taken control-transfer instruction changes which instruction address is executed next.
- **Turkish Statement:** Alınan kontrol aktarım talimatı sırada yürütülecek talimat adresini değiştirir.
- **English Canonical Term:** Control Transfer
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-013`
- **Source Title:** RISC-V Unprivileged ISA — RV32I Base Integer Instruction Set
- **Source Organization:** RISC-V International
- **Source Type:** Official ISA specification
- **Source Version:** 20260120 / RV32I 2.1
- **Publication Date:** 2026-01-20
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.riscv.org/reference/isa/unpriv/rv32.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1.5 Control Transfer Instructions
- **Locator Status:** COMPLETE
- **Evidence Summary:** Alınan kontrol aktarım talimatı sırada yürütülecek talimat adresini değiştirir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Alınan kontrol aktarım talimatı sırada yürütülecek talimat adresini değiştirir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-049`
- **Related Evidence IDs:** `V01-C02-EV-049`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-049

- **Evidence ID:** `V01-C02-EV-049`
- **Claim:** Native program instructions can execute directly on the CPU under operating-system control.
- **Turkish Statement:** Native program talimatları işletim sistemi denetimi altında doğrudan CPU üzerinde yürütülebilir.
- **English Canonical Term:** Limited Direct Execution
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.1 and §4.3; cross-checked with OSTEP Chapter 6 protocol
- **Locator Status:** COMPLETE
- **Evidence Summary:** Native program talimatları işletim sistemi denetimi altında doğrudan CPU üzerinde yürütülebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Native program talimatları işletim sistemi denetimi altında doğrudan CPU üzerinde yürütülebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-040`
- **Related Evidence IDs:** `V01-C02-EV-040`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-050

- **Evidence ID:** `V01-C02-EV-050`
- **Claim:** A process machine state includes register contents.
- **Turkish Statement:** Süreç makine durumu kayıt içeriklerini kapsar.
- **English Canonical Term:** Register State
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.1 The Abstraction: A Process, PDF pages 2–3
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç makine durumu kayıt içeriklerini kapsar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç makine durumu kayıt içeriklerini kapsar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-039`
- **Related Evidence IDs:** `V01-C02-EV-039`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-051

- **Evidence ID:** `V01-C02-EV-051`
- **Claim:** Illegal execution events such as invalid memory access can transfer control to the operating system.
- **Turkish Statement:** Geçersiz bellek erişimi gibi yasa dışı yürütme olayları denetimi işletim sistemine aktarabilir.
- **English Canonical Term:** Execution Error
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 6 §6.3, PDF page 8
- **Locator Status:** COMPLETE
- **Evidence Summary:** Geçersiz bellek erişimi gibi yasa dışı yürütme olayları denetimi işletim sistemine aktarabilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Geçersiz bellek erişimi gibi yasa dışı yürütme olayları denetimi işletim sistemine aktarabilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-051`
- **Related Evidence IDs:** `V01-C02-EV-051`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-052

- **Evidence ID:** `V01-C02-EV-052`
- **Claim:** A beginner execution model must separate architecturally visible state from hidden timing behavior.
- **Turkish Statement:** Başlangıç yürütme modeli mimari görünür durumu gizli zamanlama davranışından ayırmalıdır.
- **English Canonical Term:** Architectural State
- **Topic:** CPU, registers, program counter, and execution cycle
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §5 Instruction Specifications, timing-scope paragraph, PDF page 3
- **Locator Status:** COMPLETE
- **Evidence Summary:** Başlangıç yürütme modeli mimari görünür durumu gizli zamanlama davranışından ayırmalıdır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Başlangıç yürütme modeli mimari görünür durumu gizli zamanlama davranışından ayırmalıdır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-052`
- **Related Evidence IDs:** `V01-C02-EV-052`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### Memory, virtual address space, stack, and heap

#### V01-C02-EV-053

- **Evidence ID:** `V01-C02-EV-053`
- **Claim:** A process virtual address space is the set of virtual addresses the process can use.
- **Turkish Statement:** Süreç sanal adres alanı, sürecin kullanabildiği sanal adresler kümesidir.
- **English Canonical Term:** Virtual Address Space
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-018`
- **Source Title:** Virtual Address Space
- **Source Organization:** Microsoft
- **Source Type:** Official platform documentation
- **Source Version:** Win32 documentation
- **Publication Date:** Last updated 2021-01-07
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space)
- **Locator Type:** Section/heading
- **Locator:** Virtual Address Space, opening paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç sanal adres alanı, sürecin kullanabildiği sanal adresler kümesidir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç sanal adres alanı, sürecin kullanabildiği sanal adresler kümesidir.
- **Confidence Level:** HIGH
- **Authority Level:** Vendor documentation
- **Independent Confirmation:** `V01-C02-EV-054`
- **Related Evidence IDs:** `V01-C02-EV-054`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-054

- **Evidence ID:** `V01-C02-EV-054`
- **Claim:** Windows gives each process a private virtual address space unless memory is explicitly shared.
- **Turkish Statement:** Windows, açıkça paylaşım yapılmadıkça her sürece özel sanal adres alanı verir.
- **English Canonical Term:** Private Address Space
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-018`
- **Source Title:** Virtual Address Space
- **Source Organization:** Microsoft
- **Source Type:** Official platform documentation
- **Source Version:** Win32 documentation
- **Publication Date:** Last updated 2021-01-07
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space)
- **Locator Type:** Section/heading
- **Locator:** Virtual Address Space, opening paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** Windows, açıkça paylaşım yapılmadıkça her sürece özel sanal adres alanı verir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Windows, açıkça paylaşım yapılmadıkça her sürece özel sanal adres alanı verir.
- **Confidence Level:** HIGH
- **Authority Level:** Vendor documentation
- **Independent Confirmation:** `V01-C02-EV-060`
- **Related Evidence IDs:** `V01-C02-EV-060`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-055

- **Evidence ID:** `V01-C02-EV-055`
- **Claim:** A virtual address does not directly identify an object's physical memory location.
- **Turkish Statement:** Sanal adres bir nesnenin fiziksel bellek konumunu doğrudan belirtmez.
- **English Canonical Term:** Virtual Address
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-018`
- **Source Title:** Virtual Address Space
- **Source Organization:** Microsoft
- **Source Type:** Official platform documentation
- **Source Version:** Win32 documentation
- **Publication Date:** Last updated 2021-01-07
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space)
- **Locator Type:** Section/heading
- **Locator:** Virtual Address Space, second paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** Sanal adres bir nesnenin fiziksel bellek konumunu doğrudan belirtmez.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Sanal adres bir nesnenin fiziksel bellek konumunu doğrudan belirtmez.
- **Confidence Level:** HIGH
- **Authority Level:** Vendor documentation
- **Independent Confirmation:** `V01-C02-EV-053`
- **Related Evidence IDs:** `V01-C02-EV-053`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-056

- **Evidence ID:** `V01-C02-EV-056`
- **Claim:** Address translation maps a process virtual address to a physical address.
- **Turkish Statement:** Adres çevirisi süreç sanal adresini fiziksel adrese eşler.
- **English Canonical Term:** Address Translation
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-018`
- **Source Title:** Virtual Address Space
- **Source Organization:** Microsoft
- **Source Type:** Official platform documentation
- **Source Version:** Win32 documentation
- **Publication Date:** Last updated 2021-01-07
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/memory/virtual-address-space)
- **Locator Type:** Section/heading
- **Locator:** Virtual Address Space, second paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** Adres çevirisi süreç sanal adresini fiziksel adrese eşler.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Adres çevirisi süreç sanal adresini fiziksel adrese eşler.
- **Confidence Level:** HIGH
- **Authority Level:** Vendor documentation
- **Independent Confirmation:** `V01-C02-EV-057`
- **Related Evidence IDs:** `V01-C02-EV-057`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-057

- **Evidence ID:** `V01-C02-EV-057`
- **Claim:** A process address space contains the running program's memory state.
- **Turkish Statement:** Süreç adres alanı çalışan programın bellek durumunu içerir.
- **English Canonical Term:** Address Space
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-011`
- **Source Title:** OSTEP — The Abstraction: Address Spaces
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 13, §13.2 The Address Space, PDF page 3
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç adres alanı çalışan programın bellek durumunu içerir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç adres alanı çalışan programın bellek durumunu içerir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-055`
- **Related Evidence IDs:** `V01-C02-EV-055`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-058

- **Evidence ID:** `V01-C02-EV-058`
- **Claim:** A conventional process address-space model includes program code, a stack, and a heap.
- **Turkish Statement:** Geleneksel süreç adres alanı modeli program kodu, yığın ve heap içerir.
- **English Canonical Term:** Address-Space Layout
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-011`
- **Source Title:** OSTEP — The Abstraction: Address Spaces
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 13, Figure 13.3 and surrounding text, PDF pages 3–4
- **Locator Status:** COMPLETE
- **Evidence Summary:** Geleneksel süreç adres alanı modeli program kodu, yığın ve heap içerir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Geleneksel süreç adres alanı modeli program kodu, yığın ve heap içerir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-056`
- **Related Evidence IDs:** `V01-C02-EV-056`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-059

- **Evidence ID:** `V01-C02-EV-059`
- **Claim:** In OSTEP's C-oriented model, the stack tracks calls, local variables, parameters, and return values.
- **Turkish Statement:** OSTEP'in C odaklı modelinde yığın çağrıları, yerel değişkenleri, parametreleri ve dönüş değerlerini izler.
- **English Canonical Term:** Stack
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-011`
- **Source Title:** OSTEP — The Abstraction: Address Spaces
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 13, §13.2, PDF page 3
- **Locator Status:** COMPLETE
- **Evidence Summary:** OSTEP'in C odaklı modelinde yığın çağrıları, yerel değişkenleri, parametreleri ve dönüş değerlerini izler.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** OSTEP'in C odaklı modelinde yığın çağrıları, yerel değişkenleri, parametreleri ve dönüş değerlerini izler.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-061`
- **Related Evidence IDs:** `V01-C02-EV-061`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-060

- **Evidence ID:** `V01-C02-EV-060`
- **Claim:** In OSTEP's C-oriented model, the heap stores dynamically allocated program data.
- **Turkish Statement:** OSTEP'in C odaklı modelinde heap dinamik olarak ayrılan program verisini saklar.
- **English Canonical Term:** Heap
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-011`
- **Source Title:** OSTEP — The Abstraction: Address Spaces
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 13, §13.2, PDF page 3
- **Locator Status:** COMPLETE
- **Evidence Summary:** OSTEP'in C odaklı modelinde heap dinamik olarak ayrılan program verisini saklar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** OSTEP'in C odaklı modelinde heap dinamik olarak ayrılan program verisini saklar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-062`
- **Related Evidence IDs:** `V01-C02-EV-062`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-061

- **Evidence ID:** `V01-C02-EV-061`
- **Claim:** Stack and heap placement in an address-space diagram is a convention, not a universal physical law.
- **Turkish Statement:** Adres alanı diyagramındaki stack ve heap yerleşimi evrensel fiziksel yasa değil bir uzlaşımdır.
- **English Canonical Term:** Memory Layout Convention
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-011`
- **Source Title:** OSTEP — The Abstraction: Address Spaces
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 13, Figure 13.3 discussion, PDF page 4
- **Locator Status:** COMPLETE
- **Evidence Summary:** Adres alanı diyagramındaki stack ve heap yerleşimi evrensel fiziksel yasa değil bir uzlaşımdır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Adres alanı diyagramındaki stack ve heap yerleşimi evrensel fiziksel yasa değil bir uzlaşımdır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-063`
- **Related Evidence IDs:** `V01-C02-EV-063`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-062

- **Evidence ID:** `V01-C02-EV-062`
- **Claim:** Each JVM thread has a private JVM stack containing frames.
- **Turkish Statement:** Her JVM iş parçacığının frame'leri tutan özel bir JVM yığını vardır.
- **English Canonical Term:** JVM Stack
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** §2.5.2 Java Virtual Machine Stacks
- **Locator Status:** COMPLETE
- **Evidence Summary:** Her JVM iş parçacığının frame'leri tutan özel bir JVM yığını vardır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Her JVM iş parçacığının frame'leri tutan özel bir JVM yığını vardır.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-058`
- **Related Evidence IDs:** `V01-C02-EV-058`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-063

- **Evidence ID:** `V01-C02-EV-063`
- **Claim:** The JVM heap is shared among JVM threads and supplies storage for class instances and arrays.
- **Turkish Statement:** JVM heap'i iş parçacıkları arasında paylaşılır ve sınıf örnekleriyle diziler için depolama sağlar.
- **English Canonical Term:** JVM Heap
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** §2.5.3 Heap
- **Locator Status:** COMPLETE
- **Evidence Summary:** JVM heap'i iş parçacıkları arasında paylaşılır ve sınıf örnekleriyle diziler için depolama sağlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** JVM heap'i iş parçacıkları arasında paylaşılır ve sınıf örnekleriyle diziler için depolama sağlar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-059`
- **Related Evidence IDs:** `V01-C02-EV-059`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-064

- **Evidence ID:** `V01-C02-EV-064`
- **Claim:** An executable section's file offset can differ from its virtual address after loading.
- **Turkish Statement:** Yürütülebilir bölümün dosya ofseti, yükleme sonrasındaki sanal adresinden farklı olabilir.
- **English Canonical Term:** File Offset and Virtual Address
- **Topic:** Memory, virtual address space, stack, and heap
- **Source ID:** `V01-C02-SRC-019`
- **Source Title:** PE Format
- **Source Organization:** Microsoft
- **Source Type:** Official executable-format documentation
- **Source Version:** PE/COFF rolling documentation
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://learn.microsoft.com/en-us/windows/win32/debug/pe-format)
- **Locator Type:** Section/heading
- **Locator:** PE terminology: RVA/VA; Section Table fields
- **Locator Status:** COMPLETE
- **Evidence Summary:** Yürütülebilir bölümün dosya ofseti, yükleme sonrasındaki sanal adresinden farklı olabilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Yürütülebilir bölümün dosya ofseti, yükleme sonrasındaki sanal adresinden farklı olabilir.
- **Confidence Level:** HIGH
- **Authority Level:** Vendor documentation
- **Independent Confirmation:** `V01-C02-EV-064`
- **Related Evidence IDs:** `V01-C02-EV-064`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### Process, thread, and runtime

#### V01-C02-EV-065

- **Evidence ID:** `V01-C02-EV-065`
- **Claim:** A process can be summarized by the machine state its running program can read or update.
- **Turkish Statement:** Süreç, çalışan programın okuyabildiği veya güncelleyebildiği makine durumuyla özetlenebilir.
- **English Canonical Term:** Process State
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.1 The Abstraction: A Process, PDF pages 2–3
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç, çalışan programın okuyabildiği veya güncelleyebildiği makine durumuyla özetlenebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç, çalışan programın okuyabildiği veya güncelleyebildiği makine durumuyla özetlenebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-066`
- **Related Evidence IDs:** `V01-C02-EV-066`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-066

- **Evidence ID:** `V01-C02-EV-066`
- **Claim:** Process state includes address-space memory, register state, and I/O information.
- **Turkish Statement:** Süreç durumu adres alanı belleğini, kayıt durumunu ve girdi/çıktı bilgisini içerir.
- **English Canonical Term:** Process State Components
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Aside: Key Process Terms, PDF page 10
- **Locator Status:** COMPLETE
- **Evidence Summary:** Süreç durumu adres alanı belleğini, kayıt durumunu ve girdi/çıktı bilgisini içerir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Süreç durumu adres alanı belleğini, kayıt durumunu ve girdi/çıktı bilgisini içerir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-065`
- **Related Evidence IDs:** `V01-C02-EV-065`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-067

- **Evidence ID:** `V01-C02-EV-067`
- **Claim:** A program file is passive, whereas a process denotes that program in execution.
- **Turkish Statement:** Program dosyası pasiftir; süreç ise programın yürütülmekte olan halini belirtir.
- **English Canonical Term:** Program vs Process
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 4 opening and §4.1
- **Locator Status:** COMPLETE
- **Evidence Summary:** Program dosyası pasiftir; süreç ise programın yürütülmekte olan halini belirtir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Program dosyası pasiftir; süreç ise programın yürütülmekte olan halini belirtir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-067`
- **Related Evidence IDs:** `V01-C02-EV-067`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-068

- **Evidence ID:** `V01-C02-EV-068`
- **Claim:** A multithreaded process has more than one point of execution.
- **Turkish Statement:** Çok iş parçacıklı süreç birden fazla yürütme noktasına sahiptir.
- **English Canonical Term:** Thread
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-012`
- **Source Title:** OSTEP — Concurrency: An Introduction
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 26 opening, PDF page 1
- **Locator Status:** COMPLETE
- **Evidence Summary:** Çok iş parçacıklı süreç birden fazla yürütme noktasına sahiptir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Çok iş parçacıklı süreç birden fazla yürütme noktasına sahiptir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-069`
- **Related Evidence IDs:** `V01-C02-EV-069`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-069

- **Evidence ID:** `V01-C02-EV-069`
- **Claim:** Threads in one process share the same address space.
- **Turkish Statement:** Aynı süreçteki iş parçacıkları aynı adres alanını paylaşır.
- **English Canonical Term:** Shared Address Space
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-012`
- **Source Title:** OSTEP — Concurrency: An Introduction
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 26 opening, PDF page 1
- **Locator Status:** COMPLETE
- **Evidence Summary:** Aynı süreçteki iş parçacıkları aynı adres alanını paylaşır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Aynı süreçteki iş parçacıkları aynı adres alanını paylaşır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-068`
- **Related Evidence IDs:** `V01-C02-EV-068`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-070

- **Evidence ID:** `V01-C02-EV-070`
- **Claim:** Each thread has its own program counter and private register set in the OSTEP model.
- **Turkish Statement:** OSTEP modelinde her iş parçacığının kendi program sayacı ve özel kayıt kümesi vardır.
- **English Canonical Term:** Thread State
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-012`
- **Source Title:** OSTEP — Concurrency: An Introduction
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** Chapter 26 opening, PDF page 1
- **Locator Status:** COMPLETE
- **Evidence Summary:** OSTEP modelinde her iş parçacığının kendi program sayacı ve özel kayıt kümesi vardır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** OSTEP modelinde her iş parçacığının kendi program sayacı ve özel kayıt kümesi vardır.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-070`
- **Related Evidence IDs:** `V01-C02-EV-070`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-071

- **Evidence ID:** `V01-C02-EV-071`
- **Claim:** The JVM has both virtual-machine-lifetime data areas and per-thread data areas.
- **Turkish Statement:** JVM hem sanal makine ömürlü hem de iş parçacığına özel çalışma zamanı veri alanları tanımlar.
- **English Canonical Term:** Runtime Data Area
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** §2.5 Run-Time Data Areas
- **Locator Status:** COMPLETE
- **Evidence Summary:** JVM hem sanal makine ömürlü hem de iş parçacığına özel çalışma zamanı veri alanları tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** JVM hem sanal makine ömürlü hem de iş parçacığına özel çalışma zamanı veri alanları tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-072`
- **Related Evidence IDs:** `V01-C02-EV-072`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-072

- **Evidence ID:** `V01-C02-EV-072`
- **Claim:** Python executes each code block in an execution frame that carries continuation-related information.
- **Turkish Statement:** Python her kod bloğunu yürütmenin nasıl devam edeceğine ilişkin bilgi taşıyan bir frame içinde çalıştırır.
- **English Canonical Term:** Execution Frame
- **Topic:** Process, thread, and runtime
- **Source ID:** `V01-C02-SRC-022`
- **Source Title:** Python Language Reference — Execution Model
- **Source Organization:** Python Software Foundation
- **Source Type:** Official language documentation
- **Source Version:** Python 3.14.6
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.python.org/3/reference/executionmodel.html)
- **Locator Type:** Section/heading
- **Locator:** §4.1 Structure of a program
- **Locator Status:** COMPLETE
- **Evidence Summary:** Python her kod bloğunu yürütmenin nasıl devam edeceğine ilişkin bilgi taşıyan bir frame içinde çalıştırır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Python her kod bloğunu yürütmenin nasıl devam edeceğine ilişkin bilgi taşıyan bir frame içinde çalıştırır.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-071`
- **Related Evidence IDs:** `V01-C02-EV-071`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### Virtual machine, bytecode, and JIT

#### V01-C02-EV-073

- **Evidence ID:** `V01-C02-EV-073`
- **Claim:** WebAssembly is a portable low-level code format designed for efficient execution.
- **Turkish Statement:** WebAssembly verimli yürütme için tasarlanmış taşınabilir düşük seviye kod biçimidir.
- **English Canonical Term:** Portable Code Format
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-020`
- **Source Title:** WebAssembly Core Specification — Introduction
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/intro/introduction.html)
- **Locator Type:** Section/heading
- **Locator:** Introduction, opening paragraph
- **Locator Status:** COMPLETE
- **Evidence Summary:** WebAssembly verimli yürütme için tasarlanmış taşınabilir düşük seviye kod biçimidir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** WebAssembly verimli yürütme için tasarlanmış taşınabilir düşük seviye kod biçimidir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-074`
- **Related Evidence IDs:** `V01-C02-EV-074`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-074

- **Evidence ID:** `V01-C02-EV-074`
- **Claim:** WebAssembly can be compiled using either JIT or ahead-of-time compilation.
- **Turkish Statement:** WebAssembly JIT veya önceden derleme yaklaşımıyla derlenebilir.
- **English Canonical Term:** JIT and AOT
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-020`
- **Source Title:** WebAssembly Core Specification — Introduction
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/intro/introduction.html)
- **Locator Type:** Section/heading
- **Locator:** Design Goals — Efficient and portable representation
- **Locator Status:** COMPLETE
- **Evidence Summary:** WebAssembly JIT veya önceden derleme yaklaşımıyla derlenebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** WebAssembly JIT veya önceden derleme yaklaşımıyla derlenebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-079`
- **Related Evidence IDs:** `V01-C02-EV-079`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-075

- **Evidence ID:** `V01-C02-EV-075`
- **Claim:** WebAssembly execution semantics use an abstract machine containing a stack and store.
- **Turkish Statement:** WebAssembly yürütme semantiği stack ve store içeren soyut makine kullanır.
- **English Canonical Term:** Virtual Machine State
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, opening execution paragraphs
- **Locator Status:** COMPLETE
- **Evidence Summary:** WebAssembly yürütme semantiği stack ve store içeren soyut makine kullanır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** WebAssembly yürütme semantiği stack ve store içeren soyut makine kullanır.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-075`
- **Related Evidence IDs:** `V01-C02-EV-075`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-076

- **Evidence ID:** `V01-C02-EV-076`
- **Claim:** The JVM class-file format is a binary representation consumed by a virtual machine.
- **Turkish Statement:** JVM class-file biçimi sanal makinenin tükettiği ikili bir gösterimdir.
- **English Canonical Term:** Bytecode Container
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** §2.1 The class File Format
- **Locator Status:** COMPLETE
- **Evidence Summary:** JVM class-file biçimi sanal makinenin tükettiği ikili bir gösterimdir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** JVM class-file biçimi sanal makinenin tükettiği ikili bir gösterimdir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-073`
- **Related Evidence IDs:** `V01-C02-EV-073`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-077

- **Evidence ID:** `V01-C02-EV-077`
- **Claim:** JVM implementations may translate virtual-machine instructions to machine code without changing the abstract-machine contract.
- **Turkish Statement:** JVM uygulamaları soyut makine sözleşmesini değiştirmeden sanal makine talimatlarını makine koduna çevirebilir.
- **English Canonical Term:** JIT Compilation
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-024`
- **Source Title:** Java Virtual Machine Specification
- **Source Organization:** Oracle / Java Community Process
- **Source Type:** Official virtual-machine specification
- **Source Version:** Java SE 26
- **Publication Date:** 2026-02-03
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/jvms-2.html)
- **Locator Type:** Section/heading
- **Locator:** Chapter 2 opening paragraphs, implementation discretion
- **Locator Status:** COMPLETE
- **Evidence Summary:** JVM uygulamaları soyut makine sözleşmesini değiştirmeden sanal makine talimatlarını makine koduna çevirebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** JVM uygulamaları soyut makine sözleşmesini değiştirmeden sanal makine talimatlarını makine koduna çevirebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-076`
- **Related Evidence IDs:** `V01-C02-EV-076`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-078

- **Evidence ID:** `V01-C02-EV-078`
- **Claim:** CPython bytecode is an implementation detail that may change between Python releases.
- **Turkish Statement:** CPython bytecode'u Python sürümleri arasında değişebilen bir uygulama ayrıntısıdır.
- **English Canonical Term:** Bytecode
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-023`
- **Source Title:** Python dis — Disassembler for Python Bytecode
- **Source Organization:** Python Software Foundation
- **Source Type:** Official implementation documentation
- **Source Version:** Python 3.14.6
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://docs.python.org/3/library/dis.html)
- **Locator Type:** Section/heading
- **Locator:** `dis` module introduction and implementation-detail note
- **Locator Status:** COMPLETE
- **Evidence Summary:** CPython bytecode'u Python sürümleri arasında değişebilen bir uygulama ayrıntısıdır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** CPython bytecode'u Python sürümleri arasında değişebilen bir uygulama ayrıntısıdır.
- **Confidence Level:** HIGH
- **Authority Level:** Official documentation
- **Independent Confirmation:** `V01-C02-EV-078`
- **Related Evidence IDs:** `V01-C02-EV-078`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-079

- **Evidence ID:** `V01-C02-EV-079`
- **Claim:** The V8 Ignition/TurboFan architecture combines an interpreter with an optimizing compiler.
- **Turkish Statement:** V8 Ignition/TurboFan mimarisi yorumlayıcı ile optimize edici derleyiciyi birleştirir.
- **English Canonical Term:** Hybrid Execution
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-026`
- **Source Title:** Launching Ignition and TurboFan
- **Source Organization:** V8 Project
- **Source Type:** Official engineering article
- **Source Version:** Historical V8 architecture
- **Publication Date:** 2017-05-16
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://v8.dev/blog/launching-ignition-and-turbofan)
- **Locator Type:** Section/heading
- **Locator:** Launching Ignition and TurboFan, architecture overview
- **Locator Status:** COMPLETE
- **Evidence Summary:** V8 Ignition/TurboFan mimarisi yorumlayıcı ile optimize edici derleyiciyi birleştirir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** V8 Ignition/TurboFan mimarisi yorumlayıcı ile optimize edici derleyiciyi birleştirir.
- **Confidence Level:** MEDIUM
- **Authority Level:** Official engineering history
- **Independent Confirmation:** `V01-C02-EV-080`
- **Related Evidence IDs:** `V01-C02-EV-080`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Yalnız farklı yürütme yollarına tarihsel örnek.
- **Scope Note:** V01-C38 engine internals kapsamına girilmez.
- **Conflict Status:** Historical model
- **Conflict Notes:** Bkz. conflict-register.md.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-080

- **Evidence ID:** `V01-C02-EV-080`
- **Claim:** The Common Language Infrastructure defines a virtual execution system for multiple high-level languages.
- **Turkish Statement:** Common Language Infrastructure birden fazla yüksek seviyeli dil için sanal yürütme sistemi tanımlar.
- **English Canonical Term:** Virtual Execution System
- **Topic:** Virtual machine, bytecode, and JIT
- **Source ID:** `V01-C02-SRC-025`
- **Source Title:** ECMA-335 Common Language Infrastructure
- **Source Organization:** Ecma International
- **Source Type:** Official standard
- **Source Version:** 6th edition
- **Publication Date:** June 2012
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://dev.ecma-international.org/publications-and-standards/standards/ecma-335/)
- **Locator Type:** Section/heading
- **Locator:** Standard overview, Partition I: Concepts and Architecture
- **Locator Status:** COMPLETE
- **Evidence Summary:** Common Language Infrastructure birden fazla yüksek seviyeli dil için sanal yürütme sistemi tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Common Language Infrastructure birden fazla yüksek seviyeli dil için sanal yürütme sistemi tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Official standard
- **Independent Confirmation:** `V01-C02-EV-077`
- **Related Evidence IDs:** `V01-C02-EV-077`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Teknik açıklama ve kavram sınırı.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

### LO004 state tracing

#### V01-C02-EV-081

- **Evidence ID:** `V01-C02-EV-081`
- **Claim:** WebAssembly specifies execution with step-wise rules for individual instructions.
- **Turkish Statement:** WebAssembly yürütmeyi tek tek talimatlar için adımlı kurallarla tanımlar.
- **English Canonical Term:** Step-Wise Execution
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, §Prose Notation
- **Locator Status:** COMPLETE
- **Evidence Summary:** WebAssembly yürütmeyi tek tek talimatlar için adımlı kurallarla tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** WebAssembly yürütmeyi tek tek talimatlar için adımlı kurallarla tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-082`
- **Related Evidence IDs:** `V01-C02-EV-082`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** State-tracing modelinin adım birimini gerekçelendirir.
- **Scope Note:** Öğrenci etkinliği üretilmez.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-082

- **Evidence ID:** `V01-C02-EV-082`
- **Claim:** A WebAssembly configuration describes current store, frame, and remaining instruction sequence.
- **Turkish Statement:** WebAssembly configuration mevcut store, frame ve kalan talimat dizisini tanımlar.
- **English Canonical Term:** Execution Configuration
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, §Formal Notation, configuration tuple
- **Locator Status:** COMPLETE
- **Evidence Summary:** WebAssembly configuration mevcut store, frame ve kalan talimat dizisini tanımlar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** WebAssembly configuration mevcut store, frame ve kalan talimat dizisini tanımlar.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-081`
- **Related Evidence IDs:** `V01-C02-EV-081`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** İzleme tablosunun state alanlarını gerekçelendirir.
- **Scope Note:** WebAssembly sözdizimi öğretilmez.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-083

- **Evidence ID:** `V01-C02-EV-083`
- **Claim:** A reduction rule represents one transition from one program configuration to another.
- **Turkish Statement:** Reduction kuralı bir program configuration'ından diğerine tek geçişi temsil eder.
- **English Canonical Term:** State Transition
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, §Formal Notation, reduction-rule form
- **Locator Status:** COMPLETE
- **Evidence Summary:** Reduction kuralı bir program configuration'ından diğerine tek geçişi temsil eder.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Reduction kuralı bir program configuration'ından diğerine tek geçişi temsil eder.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-084`
- **Related Evidence IDs:** `V01-C02-EV-084`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** Önceki ve sonraki state sütunlarını gerekçelendirir.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-084

- **Evidence ID:** `V01-C02-EV-084`
- **Claim:** Instruction sequences execute in order unless a trap, jump, or exception changes that order.
- **Turkish Statement:** Talimat dizileri trap, jump veya exception sırayı değiştirmedikçe sıralı yürütülür.
- **English Canonical Term:** Sequential Control Flow
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, §Prose Notation
- **Locator Status:** COMPLETE
- **Evidence Summary:** Talimat dizileri trap, jump veya exception sırayı değiştirmedikçe sıralı yürütülür.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Talimat dizileri trap, jump veya exception sırayı değiştirmedikçe sıralı yürütülür.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-083`
- **Related Evidence IDs:** `V01-C02-EV-083`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** Control-flow decision alanını gerekçelendirir.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-085

- **Evidence ID:** `V01-C02-EV-085`
- **Claim:** A jump identifies a different next instruction.
- **Turkish Statement:** Jump, farklı bir sonraki talimatı belirler.
- **English Canonical Term:** Next Instruction
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, §Prose Notation, jump rule
- **Locator Status:** COMPLETE
- **Evidence Summary:** Jump, farklı bir sonraki talimatı belirler.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Jump, farklı bir sonraki talimatı belirler.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-086`
- **Related Evidence IDs:** `V01-C02-EV-086`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** Next-state/next-instruction alanını gerekçelendirir.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-086

- **Evidence ID:** `V01-C02-EV-086`
- **Claim:** An instruction can mutate stack, store, or frame components of abstract-machine state.
- **Turkish Statement:** Talimat soyut makine durumundaki stack, store veya frame bileşenlerini değiştirebilir.
- **English Canonical Term:** State Mutation
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-021`
- **Source Title:** WebAssembly Core Specification — Execution Conventions
- **Source Organization:** W3C WebAssembly Community Group
- **Source Type:** Official specification
- **Source Version:** 3.0
- **Publication Date:** 2026-07-10
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://webassembly.github.io/spec/core/exec/conventions.html)
- **Locator Type:** Section/heading
- **Locator:** Conventions, §Prose Notation
- **Locator Status:** COMPLETE
- **Evidence Summary:** Talimat soyut makine durumundaki stack, store veya frame bileşenlerini değiştirebilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Talimat soyut makine durumundaki stack, store veya frame bileşenlerini değiştirebilir.
- **Confidence Level:** HIGH
- **Authority Level:** Official specification
- **Independent Confirmation:** `V01-C02-EV-085`
- **Related Evidence IDs:** `V01-C02-EV-085`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** Değişen state bileşenlerini açıkça izletmeyi gerekçelendirir.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-087

- **Evidence ID:** `V01-C02-EV-087`
- **Claim:** The Beta ADD specification gives an explicit transition for both PC and destination-register state.
- **Turkish Statement:** Beta ADD spesifikasyonu hem PC hem hedef kayıt durumu için açık geçiş verir.
- **English Canonical Term:** Register-Machine Trace
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-003`
- **Source Title:** 6.004 Beta Documentation
- **Source Organization:** Massachusetts Institute of Technology
- **Source Type:** University architecture specification
- **Source Version:** Spring 2009
- **Publication Date:** 2009
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://live.ocw.mit.edu/courses/6-004-computation-structures-spring-2009/c1b18db634e4052b737b87e2021e4b12_MIT6_004s09_lab_beta_doc.pdf)
- **Locator Type:** Section/heading
- **Locator:** §5.1 ADD, Operation, PDF page 4
- **Locator Status:** COMPLETE
- **Evidence Summary:** Beta ADD spesifikasyonu hem PC hem hedef kayıt durumu için açık geçiş verir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Beta ADD spesifikasyonu hem PC hem hedef kayıt durumu için açık geçiş verir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic specification
- **Independent Confirmation:** `V01-C02-EV-088`
- **Related Evidence IDs:** `V01-C02-EV-088`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** Resmî akademik register-machine örneği sağlar.
- **Scope Note:** Yalnız V01-C02 başlangıç düzeyi.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-088

- **Evidence ID:** `V01-C02-EV-088`
- **Claim:** A trace can record process state over discrete time steps and annotate I/O-caused transitions.
- **Turkish Statement:** Trace, süreç durumunu ayrık zaman adımlarında kaydedip girdi/çıktı kaynaklı geçişleri açıklayabilir.
- **English Canonical Term:** Execution Trace
- **Topic:** LO004 state tracing
- **Source ID:** `V01-C02-SRC-010`
- **Source Title:** OSTEP — The Abstraction: The Process
- **Source Organization:** Arpaci-Dusseau / University of Wisconsin–Madison
- **Source Type:** Open academic textbook
- **Source Version:** 1.10
- **Publication Date:** November 2023
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)
- **Locator Type:** Section/heading
- **Locator:** §4.4 Process States, Figures 4.3 and 4.4, PDF pages 6–7
- **Locator Status:** COMPLETE
- **Evidence Summary:** Trace, süreç durumunu ayrık zaman adımlarında kaydedip girdi/çıktı kaynaklı geçişleri açıklayabilir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Trace, süreç durumunu ayrık zaman adımlarında kaydedip girdi/çıktı kaynaklı geçişleri açıklayabilir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic textbook
- **Independent Confirmation:** `V01-C02-EV-087`
- **Related Evidence IDs:** `V01-C02-EV-087`
- **Related Learning Outcome:** `V01-LO004`
- **Pedagogical Use:** Zaman/adım ve açıklama kolonlarını gerekçelendirir.
- **Scope Note:** OS scheduling ayrıntısı öğrenci modeline taşınmaz.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Yok; bağımsız doğrulama kaydıyla kapsam kontrolü yapılacaktır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-089

- **Evidence ID:** `V01-C02-EV-089`
- **Topic:** Fetch-decode-execute cycle
- **Subtopic:** Fetch
- **Turkish Statement:** İşlemci, yürütülecek komutu program sayacının gösterdiği bellek adresinden getirir.
- **English Canonical Term:** Instruction Fetch
- **Claim:** İşlemci, yürütülecek komutu program sayacının gösterdiği bellek adresinden getirir.
- **Source ID:** `V01-C02-SRC-002`
- **Source Title:** MIT 6.004 Computation Structures — 9.1 Annotated Slides
- **Source Organization:** Massachusetts Institute of Technology OpenCourseWare
- **Source Type:** Academic course material
- **Source Tier:** Tier 2
- **Source Version:** Spring 2017
- **Publication Date:** 2017
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/)
- **Locator Type:** Section/heading
- **Locator:** §9.1 Annotated Slides, paragraph beginning "At the start of executing an instruction"
- **Locator Status:** COMPLETE
- **Evidence Summary:** Komut yürütmenin başlangıcında PC'nin içerdiği adres bellekten komut getirmek için kullanılır.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** İşlemci, yürütülecek komutu PC'nin gösterdiği bellek adresinden getirir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic course material
- **Independent Confirmation:** `V01-C02-EV-092`
- **Related Evidence IDs:** `V01-C02-EV-031`, `V01-C02-EV-039`, `V01-C02-EV-092`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Fetch aşamasının PC ve bellek ilişkisini doğrular.
- **Scope Note:** Önbellek ve boru hattı ayrıntıları kapsam dışıdır.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Basit mimari model olarak kullanılır; modern mikro mimarinin zamanlama garantisi değildir.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-090

- **Evidence ID:** `V01-C02-EV-090`
- **Topic:** Fetch-decode-execute cycle
- **Subtopic:** Decode
- **Turkish Statement:** Getirilen komutun alanları, işlemcinin veri yolu işlemlerini seçen denetim sinyallerine dönüştürülür.
- **English Canonical Term:** Instruction Decode
- **Claim:** Getirilen komutun alanları, işlemcinin veri yolu işlemlerini seçen denetim sinyallerine dönüştürülür.
- **Source ID:** `V01-C02-SRC-002`
- **Source Title:** MIT 6.004 Computation Structures — 9.1 Annotated Slides
- **Source Organization:** Massachusetts Institute of Technology OpenCourseWare
- **Source Type:** Academic course material
- **Source Tier:** Tier 2
- **Source Version:** Spring 2017
- **Publication Date:** 2017
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/)
- **Locator Type:** Section/heading
- **Locator:** §9.1 Annotated Slides, instruction-field and control-signal explanation
- **Locator Status:** COMPLETE
- **Evidence Summary:** Opcode ve operand alanları register seçimleri, ALU işlemi ve diğer yürütme denetimlerini belirler.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Decode aşaması, komut bitlerini işlemcinin gerçekleştireceği işlemi seçen denetimlere çevirir.
- **Confidence Level:** HIGH
- **Authority Level:** Academic course material
- **Independent Confirmation:** `V01-C02-EV-092`
- **Related Evidence IDs:** `V01-C02-EV-032`, `V01-C02-EV-040`, `V01-C02-EV-092`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Decode kavramını komut biçimi ve işlem seçimiyle bağlar.
- **Scope Note:** Belirli bir donanım decode devresinin ayrıntıları genellenmez.
- **Conflict Status:** No material conflict
- **Conflict Notes:** ISA-visible davranış ile mikro mimari gerçekleştirim ayrılır.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-091

- **Evidence ID:** `V01-C02-EV-091`
- **Topic:** Fetch-decode-execute cycle
- **Subtopic:** Execute and advance
- **Turkish Statement:** Bir komutun yürütülmesi görünür durumu ve program sayacını günceller.
- **English Canonical Term:** Instruction Execution
- **Claim:** Bir komutun yürütülmesi operandlar üzerinde işlem yapar, görünür durumu günceller ve program sayacını sonraki komuta taşır veya kontrol aktarımı uygular.
- **Source ID:** `V01-C02-SRC-002`
- **Source Title:** MIT 6.004 Computation Structures — 9.1 Annotated Slides
- **Source Organization:** Massachusetts Institute of Technology OpenCourseWare
- **Source Type:** Academic course material
- **Source Tier:** Tier 2
- **Source Version:** Spring 2017
- **Publication Date:** 2017
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c9/c9s1/)
- **Locator Type:** Section/heading
- **Locator:** §9.1 Annotated Slides, ALU/result and PC-update paragraphs
- **Locator Status:** COMPLETE
- **Evidence Summary:** Yürütme seçilen işlemi gerçekleştirir; sonuç register durumuna yazılabilir ve PC normal ya da kontrol aktarımı yoluyla güncellenir.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Execute aşaması hesaplamayı ve mimari durum geçişini gerçekleştirir; PC sonraki adımı belirler.
- **Confidence Level:** HIGH
- **Authority Level:** Academic course material
- **Independent Confirmation:** `V01-C02-EV-041`
- **Related Evidence IDs:** `V01-C02-EV-041`, `V01-C02-EV-043`, `V01-C02-EV-048`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Execute ile durum geçişi arasındaki bağı kurar.
- **Scope Note:** Out-of-order execution ve speculative execution kapsam dışıdır.
- **Conflict Status:** No material conflict
- **Conflict Notes:** Mimari sonuç sırası anlatılır; iç donanım zamanlaması iddia edilmez.
- **Reviewer Notes:** Sprint 07C technical review pending.

#### V01-C02-EV-092

- **Evidence ID:** `V01-C02-EV-092`
- **Topic:** Fetch-decode-execute cycle
- **Subtopic:** Integrated cycle model
- **Turkish Statement:** Basit bir işlemci getir-çözümle-yürüt döngüsünü tekrarlayan bir durum makinesi olarak modellenebilir.
- **English Canonical Term:** Fetch-Decode-Execute Cycle
- **Claim:** Basit bir işlemcinin çalışma döngüsü, komutu getir, çözümle ve yürüt adımlarını tekrarlayan bir durum makinesi olarak modellenebilir.
- **Source ID:** `V01-C02-SRC-027`
- **Source Title:** CS61C Notes — Datapath Summary
- **Source Organization:** University of California, Berkeley
- **Source Type:** University course notes
- **Source Tier:** Tier 2
- **Source Version:** Rolling course notes
- **Publication Date:** Accessed 2026-07-22
- **Access Date:** 2026-07-22
- **URL or DOI:** [Canonical source](https://notes.cs61c.org/content/datapath/summary/)
- **Locator Type:** Section/heading
- **Locator:** Datapath Summary, sections “Instruction Fetch (IF)”, “Instruction Decode (ID)” and “Execute (EX)”
- **Locator Status:** COMPLETE
- **Evidence Summary:** Kaynak, işlemci veri yolunu instruction fetch, instruction decode ve execute aşamalarıyla açıklar.
- **Direct Quote:** Kullanılmadı; kesin locator'a bağlı paraphrase tercih edildi.
- **Paraphrase:** Basitleştirilmiş işlemci modeli, fetch-decode-execute döngüsünü tekrarlar.
- **Confidence Level:** HIGH
- **Authority Level:** Academic
- **Independent Confirmation:** `V01-C02-EV-089`
- **Related Evidence IDs:** `V01-C02-EV-089`, `V01-C02-EV-090`, `V01-C02-EV-091`
- **Related Learning Outcome:** `V01-LO003`
- **Pedagogical Use:** Döngünün bütünsel ve bağımsız akademik doğrulamasını sağlar.
- **Scope Note:** Bu bir başlangıç veri yolu modelidir; modern işlemcilerin tüm mikro mimari tekniklerini temsil etmez.
- **Conflict Status:** Resolved scope difference
- **Conflict Notes:** Model pedagojik mimari düzeyde sınırlandırılmıştır.
- **Reviewer Notes:** Sprint 07C technical review pending.

## Validation

- Evidence ID'leri `V01-C02-EV-001`–`V01-C02-EV-092` aralığında benzersizdir.
- Her kayıtta source, version, URL, exact locator, confidence ve learning outcome bulunur.
- LOW confidence kayıt yoktur; bir tarihsel implementation kaydı MEDIUM'dur.
- `LO004` için 8 özel kayıt, iki akademik kaynak ve bir resmî sanal makine spesifikasyonu kullanılmıştır.
- Community kaynağı temel kanıt olarak kullanılmamıştır.
- Lesson, assessment veya Research Packet üretilmemiştir.

## References

- [Research Collection](./research-collection.md)
- [Source Locator Register](./source-locator-register.md)
- [Conflict Register](./conflict-register.md)
- [Learning Outcome Evidence Map](./learning-outcome-evidence-map.md)
- [Research Gap Register](./research-gap-register.md)
