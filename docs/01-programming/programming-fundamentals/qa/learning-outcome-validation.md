---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-018"
supporting_document_type: "Compatibility Report"
title: "Pilot Lessons Learning Outcome Validation"
version: "0.1.0"
status: "Draft"
scope_id: "V01-BP01"
authority: "Derived"
owner_role: "Educational QA Lead"
source_ids:
  - "V01-LO001"
  - "V01-LO002"
  - "V01-LO005"
  - "V01-LO006"
derived_from:
  - "../content/"
  - "../assets/"
x-qa-sprint: "PHASE-06-SPRINT-06"
x-verified-on: "2026-07-21"
---

# Pilot Lessons Learning Outcome Validation

## Purpose

Kanonik Learning Outcome'ların Lesson ve zorunlu Learning Assets dosyalarında
hem görünür hem de ölçülebilir karşılığını denetlemek.

## Scope

Lesson, Quiz, Exercises, Lab, Flashcards, Interview ve Summary katmanları
incelenmiştir.

## Ownership

Bu rapor yeni outcome üretmez ve mevcut outcome anlamını değiştirmez.

## Content

### Belge Görünürlüğü

| Learning Outcome | Lesson | Quiz | Exercise | Lab | Flashcards | Interview | Summary |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `V01-LO001` | PASS | PASS | PASS | PASS* | PASS | PASS | PASS |
| `V01-LO002` | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| `V01-LO005` | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| `V01-LO006` | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

`PASS*`, kimliğin ve eşlemenin dosyada bulunduğunu; görevin outcome için yeterli
öğrenci kanıtı üretmediğini belirtir.

### Semantik Kapsam

| Ders | Outcome | Sonuç | Gerekçe |
| --- | --- | --- | --- |
| Lesson 01 | `LO001` | PARTIAL | Lab kavram ayrımını doğrudan ölçmez |
| Lesson 01 | `LO002` | PASS | Kesin ve sıralı talimat çıktısı üretir |
| Lesson 02 | `LO006` | PARTIAL | Sezgisel yöntem ayrımı öğretilmeden ölçülür |
| Lesson 03 | `LO005` | PASS | Beş alanlı sözleşme ve model güncellemesi ölçülür |
| Lesson 04 | `LO006` | PASS | Sözde kod, ilerleme ve izleme doğrudan uygulanır |
| Lesson 05 | `LO006` | PARTIAL | Lab, açıklanmayan şekil-role ayrıntısını bekler |

### Coverage Sonucu

- Dosya düzeyinde kimlik görünürlüğü: **28/28 PASS**.
- Semantik outcome kanıtı: **3 partial mapping**.
- Eksik kanonik outcome: **0**.
- Tam QA coverage sonucu: **FAIL**.

### Öneriler

- Mapping satırının bulunması coverage kanıtı sayılmamalıdır.
- Her outcome için öğrenci tarafından üretilecek gözlenebilir çıktı ayrıca
  doğrulanmalıdır.
- Remediation yalnız mevcut outcome anlamı ve Research Packet sınırında yapılmalıdır.

## Validation

- Canonical outcome değişikliği: 0.
- Yeni outcome: 0.
- Sonuç: Changes Required.

## References

- [Lesson QA Report](./lesson-qa-report.md)
- [Assessment Validation](./assessment-validation.md)
