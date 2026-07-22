---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-023"
supporting_document_type: "Compatibility Report"
title: "V01-C01 Educational Quality Assurance"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Informational"
owner_role: "Pedagogical Reviewer"
source_ids:
  - "V01-C01"
  - "V01-LO001"
  - "V01-LO002"
  - "V01-C01-AS01"
derived_from:
  - "../../../chapters/01-what-is-programming.md"
  - "./assessment-rubric.md"
  - "./reference-chapter-report.md"
x-review-date: "2026-07-22"
x-review-method: "Automated validation and desk review"
---

# V01-C01 Eğitimsel Kalite Güvencesi

## Purpose

C01 referans paketinin öğrenme çıktısı, teknik doğruluk, ölçme, dil, pedagojik
akış ve C02 üretim modeli uyumunu kaydetmek.

## Scope

Ana ders ve 20 destek materyali kapsanır. Bu belge bağımsız insan onayı veya
gerçek öğrenci pilotu değildir.

## Ownership

- Masa başı içerik kontrolü: Pedagogical Reviewer
- Teknik onay: Subject-Matter Reviewer
- Ölçme onayı: Assessment Reviewer
- Stable geçişi: bağımsız review ve öğrenci pilotu sonrasında

## Content

### İnceleme kararı

| Alan | Sonuç |
| --- | --- |
| Paket yapısı | C02 Reference Model Compatible |
| Masa başı öğrenme çıktısı kapsamı | PASS |
| Otomatik repository doğrulaması | PASS |
| Bağımsız review | BEKLİYOR |
| Öğrenci pilotu | BEKLİYOR |
| Stable yayın | YETKİLENDİRİLMEDİ |

### Learning outcome eşleşmesi

| Outcome | Öğretim | Uygulama | Ölçme | Sonuç |
| --- | --- | --- | --- | --- |
| `V01-LO001` | Ana ders, kavram özeti, örnekler | Sınıflandırma, debugging, mülakat | Quiz ve rubrik | PASS |
| `V01-LO002` | Kesin talimat modeli | 15 alıştırma, kör test laboratuvarı | Quiz, lab ve challenge | PASS |

### Pedagojik akış

Paket kavram sınırından gerçek örneğe, ardından rehberli uygulama, bağımsız
talimat üretimi, kör test, hata ayıklama ve değerlendirmeye ilerler. Öğrenciden
çalıştırmadan önce tahmin, cevap görmeden önce bağımsız deneme ve her revizyon
için kanıt istenir.

### Bloom kapsamı

| Düzey | Kanıt |
| --- | --- |
| Hatırlama | Kavram özeti ve 30 kart |
| Anlama | Örnek/karşı örnek ve kısa yanıtlar |
| Uygulama | 15 alıştırma ve kesin talimat üretimi |
| Analiz | İlk sapma, kök neden ve belirsizlik avı |
| Değerlendirme | Rubrik, mülakat ve AI önerisi doğrulama |
| Oluşturma | Laboratuvar sözleşmesi ve `V01-P01` katkısı |

### Açık yayın kapıları

| Kimlik | Konu | Gerekli işlem |
| --- | --- | --- |
| `C01-EQA-OPEN-01` | Bağımsız teknik ve pedagojik review yapılmadı. | Yetkili reviewer kararları |
| `C01-EQA-OPEN-02` | Gerçek öğrenci pilotu yapılmadı. | En az beş geçerli katılımcı |
| `C01-EQA-OPEN-03` | Web cevap anahtarı erişim kontrolü yok. | Yayın katmanında teslim/rol kontrolü |
| `C01-EQA-OPEN-04` | Legacy ve yeni paket birlikte gezilebilir durumda. | Web yayınında yeni paketi tek öğrenci girişi yapmak |

## Validation

- Learning outcome coverage: PASS — 2/2
- Chapter structure: PASS — 15/15 H2
- Quiz coverage: PASS — 25 soru
- Exercise coverage: PASS — 15 görev
- Bloom coverage: PASS — 6/6
- Duplicate canonical ownership: PASS — yeni paket Derived
- Markdown and links: PASS
- Independent review: Pending
- Student pilot: Pending

Nihai karar `Review Ready` seviyesindedir; `Stable` değildir.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Paket Girişi](./chapter.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Review Planı](./review-readiness-plan.md)
- [Öğrenci Pilot Protokolü](./student-pilot-protocol.md)
- [C02 EQA](../v01-c02/educational-quality-assurance.md)
