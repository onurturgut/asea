---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-023"
supporting_document_type: "Compatibility Report"
title: "Assessment Remediation Evidence"
version: "0.1.0"
status: "Draft"
scope_id: "V01-BP01"
authority: "Derived"
owner_role: "Assessment QA Lead"
source_ids:
  - "V01-SD-COMP-019"
derived_from:
  - "./assessment-validation.md"
  - "../assets/"
x-remediation-sprint: "PHASE-06-SPRINT-06A"
x-verified-on: "2026-07-21"
---

# Assessment Remediation Evidence

## Purpose

Quiz, Lab, Interview ve Flashcard bulgularının giderildiğini ölçülebilir kanıtla
göstermek.

## Scope

Beş pilot dersteki ilgili Learning Assets dosyaları kapsanır.

## Ownership

Bu belge yeni assessment üretmez; mevcut materyallerdeki QA düzeltmelerini
kaydeder.

## Content

### Quiz Distribution

| Ders | A | B | C | D | Sonuç |
| --- | ---: | ---: | ---: | ---: | --- |
| Lesson 01 | 3 | 3 | 2 | 2 | PASS |
| Lesson 02 | 2 | 3 | 3 | 2 | PASS |
| Lesson 03 | 2 | 2 | 3 | 3 | PASS |
| Lesson 04 | 3 | 2 | 2 | 3 | PASS |
| Lesson 05 | 3 | 3 | 2 | 2 | PASS |

Toplam dağılım A=13, B=13, C=12, D=12; oranlar %26, %26, %24 ve %24'tür.
Her seçenek hedeflenen yaklaşık %25 dağılımındadır.

### Hard Question Validation

- Hard soru: 10/10.
- Senaryo tabanlı: 10/10.
- Analiz, değerlendirme veya problem onarımı gerektiren: 10/10.
- Tanım seçme biçiminde kalan Hard soru: 0.

### Lab Validation

- Lesson 01 Lab, `LO001` için problem, algoritma, program, talimat ve hesaplama
  ayrım tablosu üretir.
- Lesson 01 Lab, `LO002` için en az sekiz kesin talimat üretir.
- Lesson 05 Lab, yalnız Lesson'da öğretilen metinsel düğüm rolleri, dallar,
  ilerleme ve sonlanma yollarını ister.
- Öğretilmeyen geometrik şekil veya araç bilgisi beklentisi: 0.

### Interview Category Validation

- Scenario sorusu: 10/10 gerçek durum ve karar bağlamı içerir.
- Trick sorusu: 10/10 açık bir kavramsal yanılgıyı sınar.
- Beklenen cevap ve değerlendirme kriteri: 20/20.

### Flashcard Validation

- Kart sayısı: 100/100.
- Kısa açıklama sayısı: 100/100.
- Benzersiz kısa açıklama: 100/100.
- Tekrarlanan genel açıklama: 0.

### Result

**Assessment remediation: PASS — provisional score 100/100.**

## Validation

- Learning Outcome kimliği değişikliği: 0.
- Yeni soru veya assessment dosyası: 0.
- Sonuç: PASS.

## References

- [Previous Assessment Validation](./assessment-validation.md)
- [QA Remediation Report](./qa-remediation-report.md)
