---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-005"
supporting_document_type: "Compatibility Report"
title: "Research Packet: Programlama Nedir?"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Research Lead"
source_ids:
  - "V01-BP01"
  - "V01-C01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "./research-request.md"
  - "./research-collection.md"
  - "./research-validation.md"
  - "./research-normalization.md"
x-production-unit: "lesson-01"
x-canonical-lesson-id: "V01-C01"
x-research-stage: "Packet"
x-lesson-production-authority: "Sole research source"
x-verified-on: "2026-07-21"
---

# Research Packet: Programlama Nedir?

## Purpose

`V01-C01` Lesson Production için tek yetkili araştırma girdisini sağlamak.

## Scope

Bu packet programlama kavramı, algorithm/program ayrımı, precision,
source-runtime-execution modeli ve iki canonical outcome’u kapsar.

## Ownership

Lesson Production yalnız bu packet’taki doğrulanmış bilgiye dayanmalıdır.
Yeni iddia gerekirse önce Research Pipeline yeniden işletilir.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Canonical ID | `V01-C01` |
| Module | `V01-M01` |
| Title | Programlama Nedir? |
| Difficulty | Beginner |
| Duration | 2.5 saat |
| Outcomes | `V01-LO001`, `V01-LO002` |
| Status | Ready for Lesson Production |

### Verified Concepts

Programming process; bounded problem; algorithm; instruction; program;
programming language; source code; runtime; execution; state; input/output;
correctness evidence; stored-program concept.

### Normalized Definitions

- Programlama: problemi hesaplanabilir biçimde çerçeveleme, çözümü tasarlama,
  dilde ifade etme, çalıştırma ve doğrulama süreci.
- Algoritma: inputları beklenen outputlara dönüştüren açık işlem dizisi.
- Program: bir ortamda davranış üretmek üzere ifade edilmiş talimatlar ve veri.
- Yürütme: talimatların işlenerek state ve observable output üretmesi.

### Required Terminology

İlk kullanım: programlama (programming), algoritma (algorithm), talimat
(instruction), program (program), kaynak kod (source code), çalışma ortamı
(runtime environment), yürütme (execution), durum (state). Sonraki kullanımda
Türkçe terim tercih edilir; API ve language names English kalır.

### Learning Objectives

- Program, algorithm, instruction ve computation’ı iki örnekle ayırmak.
- Programming ile coding arasındaki scope farkını açıklamak.
- Problem-to-output pipeline’ını doğru sırayla kurmak.
- Belirsiz günlük süreci en az sekiz kesin adıma dönüştürmek.
- Adımlarda assumption, missing input ve edge case belirlemek.

### Prerequisites

`V00` readiness; temel dosya ve bilgisayar kullanımı; Türkçe okuduğunu anlama.
Önceden programlama dili bilgisi gerekmez.

### Dependencies

- Incoming: `V00`.
- Outgoing: `V01-C02`, `V01-C03`, `V01-C04`.
- No new graph edge is authorized.

### Teaching Notes

- Curiosity hook için “bilgisayar belirsiz niyeti neden güvenilir biçimde
  tamamlayamaz?” sorusu kullanılabilir.
- Recipe analogy yalnız precision, branch ve failure sınırlarıyla verilmelidir.
- Programlamayı syntax’a indirgemeyin; engineering loop’u görünür tutun.
- Tarihte Lovelace için tartışmalı unvan yerine published stepwise procedures
  ve CHM kaydı kullanılmalıdır.
- Bir inputta çalışan program ile contract’a göre doğru programı ayırın.

### Known Misconceptions

Programming=coding; algorithm=program; computer understands intention;
running=correct; language knows implementation details; every problem should
be automated.

### Example Suggestions

- Belirsiz “dosyaları düzenle” isteğini sekiz measurable adıma dönüştürme.
- Elevator request’i input/state/rule/output olarak ayırma.
- Aynı algorithm’ın prose, pseudocode ve two-language program representations.
- Stored-program memory model with instructions and data.

### Visualization Suggestions

- Problem → Algorithm → Source → Runtime → State/Output pipeline.
- Algorithm/program/software boundary map.
- Human intention → precision transformation funnel.
- Stored-program memory and execution diagram.

### Assessment Suggestions

Henüz assessment üretilmez. Gelecek üretim için önerilen evidence:

- four-term classification task for `LO001`;
- two-example explanation;
- eight-step precision transformation for `LO002`;
- ambiguity and edge-case marking rubric.

### AI Mentor Notes

AI Mentor paketi üretilmez. Gelecek mentor önce öğrenciden kendi instruction
listesini istemeli; doğrudan final steps vermemeli; ardından belirsiz verb,
missing input, branch ve termination için Socratic questions yöneltmelidir.

### Version Metadata

- Packet: `1.0.0`.
- Blueprint: `V01-BP01@2.1.0`.
- Academy curriculum: `0.1.1`.
- Verified: 2026-07-21.
- Sources are version-aware; rolling documentation must be rechecked on update.

### Review Metadata

- Research validation: Pass.
- Blocking findings: 0.
- Terminology conflicts: 0.
- Outcome coverage: 2/2.
- Lesson Production readiness: Ready.

## Validation

- Required packet sections: 15/15.
- Verified concepts: complete.
- Canonical identity conflict: 0.
- Lesson content generated: no.
- Result: **Ready for Lesson Production**.

## References

- [Research Collection](./research-collection.md)
- [Research Validation](./research-validation.md)
- [Research Normalization](./research-normalization.md)
- [Learning Outcome Map](../../academy/06-learning-outcomes.md)
