---
document_type: "assessment-rubric"
document_id: "V01-C16-RB01"
title: "V01-C16 Assessment Rubric"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
assessment_id: "V01-C16-AS01"
learning_outcomes: ["V01-LO024"]
last_updated: "2026-07-23"
---

# Değerlendirme Rubric'i

| Ölçüt | Başlangıç | Gelişiyor | Yeterli | Güçlü | Puan |
|---|---|---|---|---|---:|
| Responsibility map | Syntax blocks | Bazı outcomes | Input/output/effect tam | Requirements ve change reasons traceable | 15 |
| Function map/contracts | İsim listesi | Bazı arrows | Data/failure contracts tam | Alternatives ve boundaries gerekçeli | 20 |
| Cohesion | Length iddiası | Genel açıklama | Outcome/change reason kanıtı | Counterexample ve trade-off tam | 15 |
| Coupling | Call count | Bazı dependencies | Data/state/time/failure inventory | Direction ve risk reduction kanıtı | 15 |
| Refactoring | Behavior bozuk | Extraction çalışıyor | Characterization ve independent tests | Küçük steps/decision record tam | 15 |
| Alternative comparison | Tek design | Yüzeysel ikinci map | En az 5 change scenario | Performance/failure/evolution trade-off tam | 15 |
| AI audit | Kör kabul | Kullanım beyanı | Contract/test ile doğrulama | Kabul/ret evidence tam | 5 |

## Başarı Kapısı

Toplam en az 75 gerekir. Function map/contracts ve alternative comparison
ölçütlerinden toplam en az 22/35; cohesion ve coupling'den toplam en az 18/30
zorunludur. Yalnız çalışan refactored code geçmez.
