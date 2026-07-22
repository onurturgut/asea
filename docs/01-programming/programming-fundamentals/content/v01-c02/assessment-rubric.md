---
document_type: "assessment"
assessment_id: "V01-C02-AS01"
title: "V01-C02 Bölüm Değerlendirmesi"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
scope_type: "Chapter"
scope_id: "V01-C02"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
instruments:
  - "V01-C02-QZ01"
  - "V01-C02-EX01"
  - "V01-C02-L01"
  - "V01-C02-CH01"
  - "V01-C02-IV01"
passing_rule: "Quiz and lab pass; both learning outcomes reach Proficient"
attempt_policy: "Retry after targeted feedback and one new trace scenario"
---

# V01-C02 Bölüm Değerlendirmesi

## Purpose

Öğrencinin program yürütme modelini doğru açıklayabildiğini ve küçük bir talimat
dizisini adım adım hatasız izleyebildiğini birden fazla kanıtla değerlendirmek.

## Outcome Coverage

| Öğrenme Çıktısı | Gözlenebilir davranış | Zorunlu kanıt |
| --- | --- | --- |
| `V01-LO003` | Kaynak kod, çalışma zamanı, bellek, girdi ve çıktı ilişkisini doğru katmanlarla açıklar. | Kısa sınav kavram soruları, laboratuvar model raporu, mülakat açıklaması |
| `V01-LO004` | Her talimattan sonra durumu hatasız izler. | Alıştırma izi, laboratuvar üçlü izi, hata ayıklama görevi |

## Instruments

| Kimlik | Araç | Rol | Zorunlu |
| --- | --- | --- | --- |
| `V01-C02-QZ01` | [Kısa Sınav](./quiz.md) | Kavram, ayrım ve kısa izleme | Evet |
| `V01-C02-EX01` | [Alıştırma](./exercises.md) | Rehberli uygulama | Evet |
| `V01-C02-L01` | [Laboratuvar](./lab.md) | Tekrar üretilebilir uygulama kanıtı | Evet |
| `V01-C02-CH01` | [Hata Ayıklama Görevi](./debugging.md) | Bağımsız hata teşhisi ve aktarım | Evet |
| `V01-C02-IV01` | [Mülakat](./interview.md) | Açıklama ve mühendislik muhakemesi | Evet |
| `V01-P01` | [Talimat Simülatörü](../../../projects/project-01-instruction-simulator.md) | Modül düzeyinde bütünleştirme | Bölüm başarısı için doğrudan zorunlu değil |

## Scoring Model

### Outcome rubric

| Düzey | `V01-LO003` | `V01-LO004` |
| --- | --- | --- |
| 4 — Örnek Düzey | Yerel ve VM yollarını doğru katmanlarla karşılaştırır; model sınırlarını ve hata katmanlarını gerekçelendirir. | Dallanma ve G/Ç içeren izi hatasız tamamlar; değişmez üretir ve ilk sapmayı teşhis eder. |
| 3 — Yetkin | Temsil, araç zinciri, çalışma zamanı, süreç, bellek, girdi ve çıktıyı temel ayrımları koruyarak açıklar. | Her adımda önceki/sonraki durum ile PC'yi doğru izler. |
| 2 — Gelişiyor | Ana zinciri kurar fakat en az bir kavramı birleştirir veya model sınırını açıklayamaz. | Sonuca ulaşır fakat ara durum veya PC adımlarında düzeltilebilir hata yapar. |
| 1 — Başlangıç | Kaynak kodu makine koduyla veya programı süreçle sistematik biçimde karıştırır. | Yalnız son çıktıyı tahmin eder; durum izi kanıtı üretmez. |

### Araç ağırlıkları

| Araç | Ağırlık |
| --- | ---: |
| Kısa sınav | %20 |
| Alıştırma | %15 |
| Laboratuvar | %35 |
| Hata ayıklama görevi | %20 |
| Mülakat | %10 |
| **Toplam** | **%100** |

## Passing Criteria

- Toplam en az 80/100.
- Kısa sınav en az 80/100.
- Laboratuvar en az 80/100.
- Her iki öğrenme çıktısı rubrikte en az `3 — Yetkin`.
- Laboratuvar ve hata ayıklama görevi izlerinde kritik PC/kontrol-akışı hatası kalmamalıdır.
- Açıklama, bölüm kapsamındaki soyut modeli fiziksel bütün CPU davranışı olarak
  sunmamalıdır.

Yalnız yüksek toplam puan, bir öğrenme çıktısı `Gelişiyor` düzeyindeyse başarı sayılmaz.

## Feedback and Retry

1. İncelemeci (Reviewer) hatayı `temsil`, `araç-zinciri`, `çalışma-zamanı`, `bellek`, `PC`, `durum
   geçişi` veya `model sınırı` etiketiyle sınıflandırır.
2. Öğrenci ilgili ders bölümünü ve en az bir farklı örneği tekrarlar.
3. Aynı programın sayılarını değiştirerek ezber ölçülmez; farklı kontrol akışı
   içeren yeni bir iz verilir.
4. Yeniden denemede yalnız başarısız öğrenme çıktısı tekrar ölçülür.
5. İkinci başarısızlıktan sonra öğrenci AI Mentör yerine insan incelemeciyle kök
   neden görüşmesi yapar.

## Traceability

| Öğrenme Çıktısı | Kavram/KU | Uygulama | Değerlendirme Kanıtı |
| --- | --- | --- | --- |
| `V01-LO003` | `KU-001`–`KU-014`, `KU-017` | `EX01`, `L01`, `CH01` | Kavram ayrımları, yürütme modeli raporu, mülakat |
| `V01-LO004` | `KU-007`, `KU-015`, `KU-016` | `EX01`, `L01`, `CH01` | Eksiksiz iz, kontrol aktarımı, kök neden raporu |

Kanıt dayanağı [Learning Outcome Evidence Map](../../research/v01-c02/learning-outcome-evidence-map.md)
ve [Değerlendirme Hazırlığı](../../research/v01-c02/assessment-readiness.md) içinde
korunur.

## References

- [Bölüm Planı](../../../chapter-blueprints/02-how-computers-execute-programs.md)
- [Kanonik Değerlendirme Kaydı](../../../assessment.md)
- [Öğrenme Çıktısı Sentezi](../../research/v01-c02/learning-outcome-synthesis.md)
- [Değerlendirme Hazırlığı](../../research/v01-c02/assessment-readiness.md)
