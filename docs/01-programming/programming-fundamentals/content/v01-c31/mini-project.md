---
document_type: "mini-project"
document_id: "V01-C31-MP01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# Mini Proje — ASEA Cohort Dashboard Builder

## Ürün

StudentProgress array'inden şu çıktıları üretin:

- aktif öğrenci kartları,
- chapter tamamlama toplamı,
- average completion rate,
- yüksek ilerlemeli öğrenci listesi,
- tamamlanmamış chapter bulunan öğrenci sinyali.

## Kabul Ölçütleri

Input korunur; empty collection geçerlidir; no-match açıkça yönetilir; sayısal sıralama
comparator taşır. Her output'un type/cardinality sözleşmesi test adıyla görünürdür.
Karar notu mutating ve non-mutating alternatifi karşılaştırır.
