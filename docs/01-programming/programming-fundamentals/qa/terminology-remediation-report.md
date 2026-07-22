---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-030"
supporting_document_type: "Compatibility Report"
title: "Sprint 06C Terminology Remediation Report"
version: "0.1.0"
status: "Draft"
scope_id: "V01-BP01"
authority: "Derived"
owner_role: "Educational Quality Engineer"
source_ids:
  - "V01-SD-COMP-026"
  - "V01-SD-COMP-027"
  - "V01-SD-COMP-028"
derived_from:
  - "./qa-verification-report.md"
  - "./educational-approval.md"
  - "./verification-checklist.md"
x-remediation-sprint: "PHASE-06-SPRINT-06C"
x-remediated-on: "2026-07-22"
---

# Sprint 06C Terminology Remediation Report

## Purpose

Sprint 06B tarafından belirlenen 16 terminoloji bulgusunu, eğitim içeriğinin
anlamını veya kanonik eşlemeleri değiştirmeden gidermek.

## Scope

Beş pilot derse ait 55 öğrenci belgesi tarandı. Değişiklikler yalnız beş
`examples.md`, beş `visualization-notes.md`, beş `exercises.md` ve Lesson 01
`learning-objectives.md` dosyasına uygulandı.

## Ownership

Bu rapor yalnız Sprint 06C terminoloji düzeltmelerini kaydeder. Curriculum,
Learning Outcome, Research, metadata, JSON, governance ve kanonik eşlemeler
değiştirilmemiştir.

## Content

### Applied Remediation

- Ana ders kavramları ilk kullanımda Türkçe (English) biçimine getirildi.
- Her hedef belgeye, ilgili onaylı ders sözlüğüyle aynı terim eşlemesi uygulandı.
- İlk kullanımdan sonraki gereksiz İngilizce terim tekrarları Türkçeleştirildi.
- `Flow Chart`, `Flow-Chart`, `Pseudo Code` ve `Pseudo-Code` varyantları
  engellendi; kanonik adlar `Flowchart` ve `Pseudocode` olarak korundu.
- Lesson 01 öğrenme amaçlarındaki karma eğitim dili, anlam değiştirilmeden
  Türkçe terminolojiye normalleştirildi.

### Change Boundaries

- Yeni lesson, research, quiz veya learning outcome: 0.
- Değiştirilen quiz, lab, flashcard veya JSON: 0.
- Değiştirilen kanonik kimlik veya eşleme: 0.
- Yeniden yazılan ders: 0.

## Validation

| Kontrol | Sonuç |
| --- | --- |
| Documents scanned | 55 |
| Documents updated | 16 |
| Terminology coverage | 55/55 — PASS |
| Canonical bilingual headings | 55/55 — PASS |
| Noncanonical naming variants | 0 — PASS |
| Markdown lint | 55 files, 0 issues — PASS |
| Broken relative links | 0 — PASS |

Sprint 06C sonucu: **PASS**.

## References

- [Terminology Coverage Report](./terminology-coverage-report.md)
- [Terminology Consistency Report](./terminology-consistency-report.md)
- [Sprint 06B Verification Report](./qa-verification-report.md)
