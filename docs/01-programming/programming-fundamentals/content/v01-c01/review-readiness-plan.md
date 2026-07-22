---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-RVIDX-001"
supporting_document_type: "Review Index"
title: "V01-C01 Independent Review Readiness Plan"
version: "0.1.1"
status: "Draft"
scope_id: "V01-C01"
authority: "Informational"
owner_role: "Repository Reviewer"
source_ids:
  - "V01-C01"
  - "V01-C01-AS01"
  - "V01-C01-SD-COMP-023"
derived_from:
  - "./educational-quality-assurance.md"
  - "../../../../standards/governance/02-review-standard.md"
---

# V01-C01 Bağımsız İnceleme Hazırlık Planı

## Purpose

C01'in Stable geçişinden önce teknik, pedagojik, ölçme, erişilebilirlik,
repository ve final incelemelerinin sırasını ve kanıtlarını tanımlamak.

## Scope

Plan inceleme hazırlığıdır; kendi başına `Approved` kararı üretmez.

## Ownership

- Teknik: Subject-Matter Reviewer
- Pedagojik: Pedagogical Reviewer
- Ölçme: Assessment Reviewer
- Erişilebilirlik: Accessibility Reviewer
- Repository: Repository Reviewer
- Final: içerik yazarından bağımsız Final Reviewer

## Content

### Kilitli girdiler

| Girdi | Sürüm |
| --- | --- |
| Kanonik ana ders `V01-C01` | `0.3.0` |
| Paket girişi `V01-C01-SD-IDX-001` | `0.1.1` |
| EQA `V01-C01-SD-COMP-023` | `0.1.0` |
| Rubrik `V01-C01-SD-ASMT-001` | `0.1.0` |

### İnceleme sırası

```text
Otomatik doğrulama
→ Teknik inceleme
→ Pedagojik inceleme
→ Ölçme incelemesi
→ Erişilebilirlik incelemesi
→ Repository incelemesi
→ Öğrenci pilotu
→ Düzeltme ve yeniden doğrulama
→ Final inceleme
```

### Teknik kontrol

- Program, algoritma, yürütme ve çıktı sınırları doğru mu?
- “Çalışıyor” ile doğruluk ayrımı teknik olarak tutarlı mı?
- Kod örnekleri beklenen sonuçları üretiyor mu?
- C02 kapsamındaki yürütme ayrıntıları C01'de gereksiz yere öğretiliyor mu?

### Pedagojik kontrol

- Başlangıç seviyesindeki öğrenci dış kaynaksız ilerleyebilir mi?
- Kavramlar örnek, karşı örnek ve uygulamayla destekleniyor mu?
- Üç oturumluk bilişsel yük uygulanabilir mi?
- Türkçe anlatım ve ilk terim kullanımları tutarlı mı?

### Ölçme kontrolü

- Quiz cevapları öğrenci formunda görünmüyor mu?
- Her outcome birden fazla araçla ölçülüyor mu?
- Kör test ve revizyon kanıtı `V01-LO002` için yeterli mi?
- Rubrik düzeyleri gözlenebilir davranışlarla ayrılıyor mu?

### Karar kuralı

Critical veya Major açık bulgu varken `Approved` kararı verilemez. Her review
kaydı gerçek reviewer, kapsam sürümü, yöntem, bulgular ve karar içermelidir.

## Validation

- Mevcut Review Standard enum'ları kullanılır.
- Kendi içeriğini tek başına final onaylama yasaktır.
- Review ve pilot gerçekleşmeden onay sonucu iddia edilmez.

## References

- [ASEA Review Standard](../../../../standards/governance/02-review-standard.md)
- [EQA](./educational-quality-assurance.md)
- [Öğrenci Pilot Protokolü](./student-pilot-protocol.md)
- [C02 Review Readiness Plan](../v01-c02/review-readiness-plan.md)
