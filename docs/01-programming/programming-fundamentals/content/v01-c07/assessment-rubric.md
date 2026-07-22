---
document_type: "assessment-rubric"
rubric_id: "V01-C07-RB01"
title: "Operatörler ve İfadeler — Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
assessment_id: "V01-C07-AS01"
maximum_score: 100
passing_score: 80
language: "tr"
---

# Değerlendirme Rubriği

## Puanlama

| Ölçüt | Puan | Tam başarı kanıtı |
|---|---:|---|
| Örtük gruplama | 15 | Öncelik ve birleşme yönü doğru, ağaç/parantez açık |
| Tür ve değer izi | 20 | Her işlenen ve ara sonuç değer/tür ile kayıtlı |
| Dönüşüm açıklaması | 15 | Örtük/açık dönüşümler doğru kurala bağlı |
| Değerlendirme sırası | 10 | İşlenen sırası, işleç gruplamasından ayrılmış |
| Okunabilir yeniden yazım | 15 | Domain adımları ve birimler görünür |
| Test kapsamı | 15 | Normal, sınır, geçersiz ve tür vakaları çalışıyor |
| AI denetimi | 5 | Öneriler bağımsız kanıtla kabul/reddedilmiş |
| Teknik iletişim | 5 | Dosyalar, açıklamalar ve kanıtlar açık |
| **Toplam** | **100** | |

## Kritik Hata Kuralları

Aşağıdakilerden biri varsa toplam puan en fazla 79 olabilir:

- final sonuç var fakat değerlendirme izi yok;
- precedence ile operand evaluation order karıştırılmış;
- geçersiz girdi sessizce kabul edilmiş;
- AI çıktısı doğrulanmadan teslim edilmiş;
- testler çalıştırılmamış veya kanıt sunulmamış.

## Başarı Düzeyleri

- **90–100:** Açıklayabilir, denetleyebilir ve üretim düzeyinde yeniden tasarlayabilir.
- **80–89:** Öğrenme çıktısını karşılar; sınırlı iyileştirme gerekir.
- **65–79:** Temel sonuçlar doğru olabilir; trace veya mühendislik kanıtı eksiktir.
- **0–64:** Öncelik, tür dönüşümü veya ara değer modeli yeniden çalışılmalıdır.
