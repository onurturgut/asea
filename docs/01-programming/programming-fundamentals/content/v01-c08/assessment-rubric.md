---
document_type: "assessment-rubric"
rubric_id: "V01-C08-RB01"
title: "Girdi, Çıktı ve Veri Dönüşümü — Rubrik"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
assessment_id: "V01-C08-AS01"
maximum_score: 100
passing_score: 80
language: "tr"
---

# Değerlendirme Rubriği

## Puanlama

| Ölçüt | Puan | Tam başarı kanıtı |
|---|---:|---|
| Input contract | 15 | Bütün alanlarda presence/type/syntax/constraints/failure/output |
| Pipeline ayrımı | 20 | En az altı stage, açık input/output/failure |
| Parsing ve validation | 15 | Ayrı sorumluluklar ve karşı örnekler |
| Normalization/formatting | 10 | Meaning policy ve internal/display ayrımı |
| Error model | 10 | Field/code/actionable message, sensitive-data güvenliği |
| Test kapsamı | 20 | En az 18 normal/sınır/invalid/data-loss vakası |
| AI denetimi | 5 | Kabul/ret/deney kararları kanıtlı |
| Teknik iletişim | 5 | İzlenebilir dosyalar ve açıklamalar |
| **Toplam** | **100** | |

## Kritik Hatalar

Şunlardan biri varsa puan en fazla 79:

- raw input doğrudan domain calculation'a giriyor;
- parse success validation success sayılıyor;
- yalnız happy path test ediliyor;
- sensitive value log/error'da açığa çıkıyor;
- AI çıktısı bağımsız doğrulanmıyor.

## Düzeyler

- **90–100:** Production-oriented boundary reasoning.
- **80–89:** LO karşılandı; küçük iyileştirmeler gerekir.
- **65–79:** Çalışan çıktı var, contract/trace kanıtı eksik.
- **0–64:** Pipeline ve parsing-validation modeli yeniden çalışılmalı.
