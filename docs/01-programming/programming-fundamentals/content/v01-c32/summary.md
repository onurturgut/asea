---
document_type: "summary"
document_id: "V01-C32-SUM01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Kısa Özet

Function callable bir value'dur. `fn` onu taşır, `fn()` çalıştırıp return value'sunu
üretir. Higher-order function function kabul eder veya döndürür; callback çağrı
yetkisinin başka caller'a verilmesi ilişkisidir.

Contract; parameter sayısından fazlasını kapsar: argument anlamı, return, invocation
order/count, timing, side effect ve error. Callable olmak uyumluluk garantisi değildir;
signature mismatch adapter ile çözülür. Callback senkron veya host-managed olabilir.
C33 bu modele lexical capture ve retained state ekler.
