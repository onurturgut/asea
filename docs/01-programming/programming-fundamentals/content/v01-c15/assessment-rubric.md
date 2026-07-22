---
document_type: "assessment-rubric"
document_id: "V01-C15-RB01"
title: "V01-C15 Assessment Rubric"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
assessment_id: "V01-C15-AS01"
learning_outcomes: ["V01-LO022", "V01-LO023"]
last_updated: "2026-07-23"
---

# Değerlendirme Rubric'i

| Ölçüt | Başlangıç | Gelişiyor | Yeterli | Güçlü | Puan |
|---|---|---|---|---|---:|
| Scope ve binding | Ad/değer karışık | Basit scope doğru | Global/function/block tam | Module, unresolved ve karşı örnek tam | 20 |
| Identifier resolution | Çıktı tahmini kanıtsız | Bazı izler doğru | En içten dışa bütün iz doğru | Shadowing/reassignment gerekçeli | 15 |
| Lifetime ve closure | Scope ile eşitlenmiş | Basit closure çıktısı doğru | Binding/reachability ayrımı doğru | Ayrı closure ve retention sınırı tam | 15 |
| Effect inventory | Yalnız console bulunmuş | Bazı yazmalar bulunmuş | Açık/gizli okuma-yazma tam | Sahiplik ve gözlenebilirlik gerekçeli | 15 |
| Pure-core refactoring | Davranış bozuk | Hesap ayrılmış, kanal eksik | Pure core ve boundary uyumlu | Result shape/dependency tasarımı güçlü | 15 |
| Test kanıtı | Happy path | Bazı boundary | Normal, boundary, invalid, repeat tam | Input mutation ve dış durum regression tam | 15 |
| AI audit ve iletişim | Kör kabul | Kullanım beyanı | Varsayım testle doğrulanmış | Kabul/ret kararları kanıtlı | 5 |

## Başarı Kapısı

Toplam en az 75 puan gerekir. `V01-LO022` için scope/binding, resolution ve
lifetime ölçütlerinden toplam en az 30/50; `V01-LO023` için effect inventory,
refactoring ve test ölçütlerinden en az 27/45 gerekir. Çalışan fakat input
nesnesini gizlice değiştiren veya kapsam izini sunmayan çözüm geçmez.

## Kanıt Kontrolü

- Quiz: en az 19/25.
- Alıştırmalar: en az 16/20 ve zorunlu outcome görevleri.
- Lab: kod, kapsam haritası, etki envanteri ve en az 10 test.
- Challenge: en az 12 test ve mühendislik gerekçesi.
- AI kullanımı: öğrenci çözümünden sonra karşılaştırmalı denetim kaydı.
