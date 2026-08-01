---
document_type: "technical-decisions"
document_id: "V01-C34-TD01"
chapter_id: "V01-C34"
---
# C34 Teknik Kararlar

- EPSILON evrensel comparator yapılmadı; magnitude/domain tolerance öğretildi.
- `toFixed` calculation değil display boundary'de tutuldu.
- Para için minor units koşullu strateji olarak sunuldu.
- BigInt ve decimal libraries yönelim düzeyinde bırakıldı.
- Numeric reliability final output değil unit/range/rounding contract'ıyla ölçüldü.
