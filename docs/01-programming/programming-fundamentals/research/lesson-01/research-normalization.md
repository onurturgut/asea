---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-004"
supporting_document_type: "Compatibility Report"
title: "Research Normalization: Programlama Nedir?"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids:
  - "V01-C01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "./research-collection.md"
  - "./research-validation.md"
x-production-unit: "lesson-01"
x-canonical-lesson-id: "V01-C01"
x-research-stage: "Normalization"
x-verified-on: "2026-07-21"
---

# Research Normalization: Programlama Nedir?

## Purpose

Doğrulanan araştırmayı tek terminoloji, kavram hiyerarşisi ve öğretim sırasına
dönüştürmek.

## Scope

Programlama, problem, algoritma, program, dil, source, runtime, execution,
state ve output ilişkileri normalize edilir.

## Ownership

Knowledge Engineer derived knowledge order’ı yönetir; canonical outcome,
prerequisite veya Lesson identity değişmez.

## Content

### Normalized Definitions

- **Programlama (programming):** Bir problemi hesaplanabilir biçimde
  çerçeveleme; çözümü tasarlama, programlama dilinde ifade etme, çalıştırma ve
  evidence ile doğrulama süreci.
- **Algoritma (algorithm):** Tanımlı inputları beklenen outputlara dönüştüren
  açık işlem/kurallar dizisi.
- **Program (program):** Bir yürütme ortamında davranış üretmek üzere ifade
  edilmiş talimatlar ve ilişkili veriler bütünü.
- **Programlama dili (programming language):** Programların syntax ve
  semantics kurallarıyla ifade edildiği biçimsel sistem.
- **Yürütme (execution):** Talimatların işlenerek state ve observable output
  üretmesi.

### Concept Hierarchy

```text
Real-world need
-> bounded problem
-> algorithm
-> program representation/source code
-> runtime execution
-> state/output evidence
```

### Knowledge and Teaching Order

1. Bilgisayar niyeti değil, ifade edilmiş talimatı işler.
2. Günlük problem input/output/constraint ile sınırlandırılır.
3. Algorithm solution logic’i tanımlar.
4. Program bu mantığı belirli dil/ortam için ifade eder.
5. Execution observable behavior üretir.
6. Test ve debug, beklenen ile gerçekleşeni karşılaştırır.
7. Belirsiz günlük süreç kesin ve sıralı talimatlara dönüştürülür.

### Difficulty Progression

- Recall: temel kavramları ayır.
- Understand: problem-to-output zincirini açıkla.
- Apply: sekiz adımlı kesin süreç yaz.
- Analyze: belirsizlik ve eksik edge case bul.

### Dependencies

- Incoming: `V00` readiness.
- Outgoing: `V01-C02`, `V01-C03`, `V01-C04`.
- No language syntax dependency.

## Validation

- Definition conflicts: 0.
- First-use bilingual terms specified: yes.
- Outcome order preserved: yes.
- New curriculum relationship: 0.

## References

- [Research Collection](./research-collection.md)
- [Research Validation](./research-validation.md)
- [Dependency Map](../../academy/07-dependency-map.md)
