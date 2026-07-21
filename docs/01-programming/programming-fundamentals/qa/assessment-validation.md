---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-019"
supporting_document_type: "Compatibility Report"
title: "Pilot Lessons Assessment Validation"
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
  - "../assets/"
  - "../content/"
x-qa-sprint: "PHASE-06-SPRINT-06"
x-verified-on: "2026-07-21"
---

# Pilot Lessons Assessment Validation

## Purpose

Quiz, Exercises, Lab, Interview, Cheat Sheet ve Flashcards materyallerinin
doğruluğunu, zorluğunu ve outcome uygunluğunu denetlemek.

## Scope

Beş dersteki 35 Learning Assets belgesi incelenmiştir.

## Ownership

Bu rapor assessment üretmez veya mevcut soruları değiştirmez.

## Content

### Sonuç

**FAIL — Assessment Score: 68/100.** Cevapların kavramsal doğruluğu genel olarak
korunmuştur; soru tasarımı, zorluk ve kategori anlamı yayın onayını engeller.

### Quiz Doğruluğu

| Kontrol | Sonuç |
| --- | --- |
| Soru sayısı | 125/125 |
| Doğru cevap alanı | 125/125 |
| Açıklama alanı | 125/125 |
| Difficulty alanı | 125/125 |
| LO mapping alanı | 125/125 |
| Kavramsal cevap doğruluğu | PASS |
| Çoktan seçmeli cevap dağılımı | FAIL |
| Difficulty geçerliliği | FAIL |

Beş quizdeki toplam 50 çoktan seçmeli sorunun tamamında doğru cevap `A`
seçeneğidir. Bu düzen, içerik bilgisinden bağımsız cevap örüntüsü oluşturur.
`Hard` olarak etiketlenen 10 soru da tanım seçme biçimindedir ve analiz ya da
uygulama gerektirmez.

### Egzersiz Uygunluğu

- Beş zorunlu kategori: 5/5 derste mevcut.
- Outcome mapping: PASS.
- Kolaydan zora akış: Genel olarak PASS.
- Challenge ve Reflection ayrımı: PASS.

### Lab Kalitesi

- Zorunlu altı bölüm: 5/5 derste tamam.
- Beklenen çıktı ve kontrol listesi: PASS.
- Lesson 01 `LO001` kanıtı: PARTIAL.
- Lesson 05 şekil-role öğretim ön koşulu: FAIL.

### Interview Soruları

- Soru, beklenen cevap ve kriter: 40/40.
- Dört kategori başlığı: 5/5 derste mevcut.
- Scenario soruları gerçek senaryo sunmuyor; temel tanım sorusunu tekrar ediyor.
- Trick soruları yanlış öncül veya kavramsal tuzak incelemiyor; temel tanım
  sorusunu tekrar ediyor.
- Kategori semantiği: FAIL.

### Cheat Sheet ve Flashcards

- Cheat Sheet kavram doğruluğu: PASS.
- Flashcard sayısı: 100/100.
- Flashcard cevap doğruluğu: PASS.
- Kısa açıklamalar bütün kartlarda aynı genel kalıbı kullandığı için kavrama özgü
  pekiştirme değeri düşüktür: WARNING.

### Gerekli Remediation

1. Çoktan seçmeli doğru cevap konumları dengelenmelidir.
2. Distractor seçenekleri aynı kavram ailesinden ve inandırıcı olmalıdır.
3. Medium/Hard sorular gerçek uygulama, izleme, karşı örnek veya hata analizi
   gerektirmelidir.
4. Scenario ve Trick interview bölümleri başlıklarının gerektirdiği soru tipine
   dönüştürülmelidir.
5. Lab ile öğretilen bilgi arasındaki Lesson 01 ve Lesson 05 boşlukları kapatılmalıdır.

## Validation

- Yeni soru: 0.
- Mevcut assessment değişikliği: 0.
- Sonuç: Changes Required.

## References

- [Learning Outcome Validation](./learning-outcome-validation.md)
- [Final Quality Report](./final-quality-report.md)
