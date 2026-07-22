---
document_type: "challenge"
document_id: "V01-C16-CH01"
title: "Compare Two Function Maps"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
last_updated: "2026-07-23"
---

# İleri Görev — İki Function Map'i Karşılaştır

Bir banka işlem özeti, hastane randevu raporu veya inventory reconciliation
probleminden birini seçin. Aynı requirements için iki production-feasible
function map üretin:

- Tasarım A daha küçük ve bağımsız transformations kullansın.
- Tasarım B daha az boundary ve daha cohesive multi-step analysis kullansın.
- İkisi de aynı observable behavior'ı karşılasın.
- En az altı change scenario ve iki failure scenario ile karşılaştırın.
- Dependency, state, timing ve failure coupling'i ayrı puanlayın.
- İki design için en az 15 ortak acceptance test çalıştırın.

## Kısıtlar

Class, framework, database, network veya async kullanmayın. Sırf function sayısı
farklı olsun diye anlamsız wrappers üretmeyin. Her node responsibility ve contract taşır.

## Başarı Kanıtı

İki Mermaid map, contract catalog, change matrix, iki working implementation,
shared behavior tests ve 500–800 kelimelik design decision teslim edin.
