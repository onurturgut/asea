---
document_type: "assessment-rubric"
document_id: "V01-C14-RB01"
title: "V01-C14 Assessment Rubric"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
assessment_id: "V01-C14-AS01"
learning_outcomes: ["V01-LO021"]
last_updated: "2026-07-23"
---

# Değerlendirme Rubric'i

| Ölçüt | Başlangıç | Gelişiyor | Yeterli | Güçlü | Puan |
|---|---|---|---|---|---:|
| Input analizi | Sınıflar karışık | Bazı gereksiz input'lar bulunmuş | Necessary/unused/derived/duplicate/hidden doğru | Otorite, maliyet ve caller kanıtlı | 25 |
| Binding ve value passing | İz yanlış | Normal primitive doğru | Missing/default/object mutation tam | Extra argument, aliasing ve karşı örnek tam | 20 |
| Return/data flow | Print ile return karışık | Explicit return var | Pipeline ve result shape tutarlı | Multiple result/failure uyumu gerekçeli | 20 |
| Interface refactoring | Davranış bozuk | Function değişmiş, caller eksik | Function ve caller'lar uyumlu | Küçük adımlar ve karar günlüğü var | 15 |
| Test kanıtı | Happy path | Bazı boundary | Normal, boundary, invalid, mutation tam | Contract maddeleri traceable/regression var | 15 |
| AI audit | Kör kabul | Kullanım beyanı | Varsayım testle doğrulanmış | Interface rationale kabul/ret kaydı | 5 |

## Başarı Kapısı

Toplam en az 75; input analizinden en az 16, value passing ve return ölçütlerinin her birinden en az 12 puan gerekir. Yalnız parameter sayısını azaltan fakat hidden dependency oluşturan çözüm başarısızdır.
