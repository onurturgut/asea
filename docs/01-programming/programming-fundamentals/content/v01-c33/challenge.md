---
document_type: "challenge"
document_id: "V01-C33-CH01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Challenge — Transactional Score History

Limitli score history state boundary tasarlayın.

## Kısıtlar

- `add`, `removeLast`, `average`, `snapshot`, `clear`
- score 0–100 integer, history length limit invariant'ları
- Operation başarısızsa state kısmen değişmemeli
- Snapshot fresh array/object olmalı
- İki instance bağımsız olmalı
- Saat/global/random gizli dependency olmamalı

## Savunma

Captured binding envanteri, ownership/lifetime, command/query ayrımı ve closure yerine
class/module seçilebilecek koşulları değerlendirin.
