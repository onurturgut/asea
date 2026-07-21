---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-017"
supporting_document_type: "Compatibility Report"
title: "Pilot Lessons Terminology Validation"
version: "0.1.0"
status: "Draft"
scope_id: "V01-BP01"
authority: "Derived"
owner_role: "Educational QA Lead"
source_ids:
  - "V01-C01"
  - "V01-C03"
  - "V01-C04"
derived_from:
  - "../research/"
  - "../content/"
  - "../assets/"
x-qa-sprint: "PHASE-06-SPRINT-06"
x-verified-on: "2026-07-21"
---

# Pilot Lessons Terminology Validation

## Purpose

Research, Lesson ve Learning Assets katmanlarındaki teknik terimlerin Türkçe ve
İngilizce kullanımını denetlemek.

## Scope

İlk beş üretim paketinin öğrenciye sunulan Markdown dosyaları kapsanır.

## Ownership

Bu rapor terminoloji üretmez; yalnız mevcut kullanımı sınıflandırır.

## Content

### Sonuç

**FAIL — Terminology Score: 75/100.** Kavram anlamları katmanlar arasında büyük
ölçüde tutarlıdır; bağımsız Learning Assets belgelerinde ilk kullanım standardı
tutarlı uygulanmamıştır.

### Terim Tutarlılığı

| Ders | Research ↔ Lesson | Lesson ↔ Assets | Sonuç |
| --- | --- | --- | --- |
| Lesson 01 | Uyumlu | Kavram anlamları uyumlu | PASS |
| Lesson 02 | Sezgisel yöntem Lesson'da eksik | Asset tanımı Packet'tan türetilmiş | FAIL |
| Lesson 03 | Uyumlu | Uyumlu | PASS |
| Lesson 04 | Uyumlu | Uyumlu | PASS |
| Lesson 05 | Şekil-role ayrıntısı eksik | Lab daha geniş beklenti kuruyor | FAIL |

### Türkçe ve İngilizce Karşılıklar

Lesson belgelerinde programlama (programming), algoritma (algorithm), sözde kod
(pseudocode) ve akış şeması (flowchart) gibi temel ilk kullanımlar bulunur.
Ancak `quiz.md`, `flashcards.md`, `cheat-sheet.md` ve diğer asset belgeleri
bağımsız okunabildiği hâlde çoğunlukla yalnız Türkçe terimle başlar.

### Çakışmalar

- Algorithm/algoritma ve pseudocode/sözde kod anlam çakışması yoktur.
- Doğruluk ile sonlanma doğru biçimde ayrılmıştır.
- Kısıt, varsayım ve sınır durum doğru biçimde ayrılmıştır.
- ISO anlam otoritesi ile çizim aracı rolü doğru biçimde ayrılmıştır.
- Sezgisel yöntem ayrımı Research ile Lesson arasında eksiktir.

### Gerekli Düzeltmeler

1. Her bağımsız öğrenci dokümanında ilk teknik kullanım Türkçe (English)
   biçiminde doğrulanmalıdır.
2. Sonraki kullanımlarda yalnız Türkçe kullanılmalıdır.
3. Lesson 02'deki sezgisel yöntem aktarım boşluğu Packet sınırında kapatılmalıdır.
4. Lesson 05'te şekil-role öğretimi ile Lab beklentisi eşitlenmelidir.

## Validation

- Yeni terminoloji: 0.
- Terminoloji anlamı değişikliği: 0.
- Sonuç: Changes Required.

## References

- [Lesson QA Report](./lesson-qa-report.md)
- [Final Quality Report](./final-quality-report.md)
