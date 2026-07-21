---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-016"
supporting_document_type: "Compatibility Report"
title: "Pilot Lessons Educational QA Report"
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

# Pilot Lessons Educational QA Report

## Purpose

İlk beş pilot üretim paketinin Research, Lesson ve Learning Assets katmanlarını
birlikte denetlemek.

## Scope

Her üretim birimindeki 5 Research, 5 Content ve 7 Learning Assets dosyası olmak
üzere toplam 85 dosya incelenmiştir.

## Ownership

Bu rapor kalite bulgusu üretir; curriculum, kanonik kimlik veya eğitim içeriğini
değiştirmez.

## Content

### Genel Sonuç

**Changes Required.** Teknik repository kontrolleri geçmiştir; ancak Assessment
tasarımı ve iki dersteki araştırma aktarımı Educational QA onayını engeller.

### Lesson 01 — Programlama Nedir?

#### Lesson 01 Sonucu: FAIL

- Research Alignment: PASS.
- Learning Outcome belge görünürlüğü: `LO001` ve `LO002` için 7/7.
- Eksik: Mini Lab görevi esas olarak `LO002` kanıtı üretir; `LO001` için program,
  algoritma, talimat ve hesaplama ayrımını gözlenebilir biçimde ölçmez.
- Risk: Metadata eşlemesi gerçek öğrenci kanıtından daha geniş görünür.
- Öneri: Lab kontrolüne `LO001` kavram ayrımı için ölçülebilir bir çıktı eklenmeli.

### Lesson 02 — Algoritma Nedir?

#### Lesson 02 Sonucu: FAIL

- Research Alignment: FAIL.
- Learning Outcome belge görünürlüğü: `LO006` için 7/7.
- Eksik: Research Packet, algoritma, program ve sezgisel yöntem ayrımını hedefler;
  Lesson gövdesi sezgisel yöntemi tanımlayıp karşılaştırmaz.
- Risk: Quiz ve flashcard, Lesson içinde öğretilmeyen ayrımı ölçmektedir.
- Öneri: Gelecek remediation sprintinde yalnız Packet'taki doğrulanmış ayrım
  Lesson'a taşınmalıdır.

### Lesson 03 — Problem Çözme Yaklaşımı

#### Lesson 03 Sonucu: FAIL

- Research Alignment: PASS.
- Learning Outcome belge görünürlüğü: `LO005` için 7/7.
- Eğitim akışı ve gerçek hayat örnekleri: PASS.
- Eksik: Ortak quiz ve interview tasarım bulguları bu dersi de etkiler.
- Risk: Tanıma dayalı sorular uygulama ve analiz düzeyini olduğundan yüksek
  gösterebilir.
- Öneri: Assessment remediation uygulanmalıdır.

### Lesson 04 — Pseudocode

#### Lesson 04 Sonucu: FAIL

- Research Alignment: PASS.
- Learning Outcome belge görünürlüğü: `LO006` için 7/7.
- Gösterim sınırı, blok yapısı, ilerleme ve sonlanma: PASS.
- Eksik: Ortak quiz, interview ve bağımsız doküman terminolojisi bulguları vardır.
- Risk: Zorluk etiketi gerçek bilişsel yükle uyuşmaz.
- Öneri: Sorular tanım hatırlamadan izleme ve belirsizlik onarımına taşınmalıdır.

### Lesson 05 — Flowchart

#### Lesson 05 Sonucu: FAIL

- Research Alignment: FAIL.
- Learning Outcome belge görünürlüğü: `LO006` için 7/7.
- Eksik: Lesson temel sembollerin rollerini açıklar, fakat bu rollerin geometrik
  şekil eşlemesini öğretmez; Lab ise öğrenciden şekil rollerini doğru kullanmasını
  bekler.
- Risk: Öğrenciye öğretilmeyen temsil ayrıntısı değerlendirilir.
- Öneri: ISO uyumlu ve Packet sınırındaki şekil-role eşlemesi remediation
  sırasında Lesson ve örneklerde görünür kılınmalıdır.

### Ortak Bulgular

| Bulgu | Önem | Etkilenen kapsam |
| --- | --- | --- |
| `EQA-001`: 50 çoktan seçmeli sorunun doğru cevabı A seçeneğidir | Blocker | 5 quiz |
| `EQA-002`: Hard etiketli sorular tanım hatırlama düzeyindedir | Blocker | 5 quiz |
| `EQA-003`: Scenario ve Trick interview bölümleri aynı tanım sorusu şablonunu kullanır | Major | 5 interview |
| `EQA-004`: Bağımsız asset belgelerinde ilk teknik terim Türkçe (English) biçimi tutarlı değildir | Major | Learning Assets |
| `EQA-005`: Flashcard kısa açıklamaları kavrama özgü değil, tekrar eden genel metindir | Minor | 100 flashcard |

### Onay Durumu

- Educational QA Approved lesson: **0/5**.
- Blocking issue: **2 ortak + 2 derse özgü**.
- Remediation olmadan Production Approval verilemez.

## Validation

- Yeni eğitim içeriği: 0.
- Mevcut dosya değişikliği: 0.
- Kanonik yapı değişikliği: 0.

## References

- [Terminology Validation](./terminology-validation.md)
- [Learning Outcome Validation](./learning-outcome-validation.md)
- [Assessment Validation](./assessment-validation.md)
- [Repository Validation](./repository-validation.md)
