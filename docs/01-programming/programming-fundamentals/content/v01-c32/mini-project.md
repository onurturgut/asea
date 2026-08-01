---
document_type: "mini-project"
document_id: "V01-C32-MP01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# Mini Proje — ASEA Değerlendirme Stratejileri

## Ürün

- standard/strict pass rules
- student/admin formatters
- score comparators
- `evaluateAttempts` higher-order processor
- signature contract tablosu
- invocation trace ve spy testleri

## Kabul Ölçütleri

Function references doğru geçirilir; callback sonuçları doğrulanır; input mutate
edilmez. Empty input, callback throw ve yanlış callback value testleri bulunur.
Strategy selector capture kullanmadan existing named function döndürür.
