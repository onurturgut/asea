---
document_type: "technical-decisions"
document_id: "V01-C30-TD01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Teknik ve Pedagojik Kararlar

## TD-01 — C18'i Tekrarlamama

Karar: C18'in kayıt/schema öğretimi ön bilgi kabul edilir; C30 object runtime
semantiği, identity ve mutation üzerine kurulur.

## TD-02 — Referansı Kavramsal Model Olarak Sunma

Karar: `O1` referans okları kullanılır; gerçek bellek adresi veya belirli engine
yerleşimi dil garantisi olarak anlatılmaz.

## TD-03 — Canonical Type'ı Factory'de Korumak

Karar: Factory `"30"` gibi raw değerleri sessizce dönüştürmez. Conversion C29
boundary'sinde, invariant doğrulaması C30 domain modelinde yapılır.

## TD-04 — Copy Derinliğini Identity ile Kanıtlama

Karar: “Kopya” sözcüğü tek başına kullanılmaz; root ve nested `===` matrisi zorunlu
kanıttır. JSON round-trip genel deep-copy çözümü olarak öğretilmez.

## TD-05 — Koşullu Mutation Politikası

Karar: Mutation bütünüyle “kötü” ilan edilmez. Ownership ve paylaşım açık olduğunda
yerel mutation mümkün; ortak UI/audit state'inde seçici immutable update tercih edilir.

## TD-06 — Kapsam Sınırı

Prototype chain, descriptors, getters/setters, classes, Proxy/Reflect ve recursive
deep clone C30 kapsamı dışındadır. Arrays C31'e, closure kaynaklı state C33'e bırakılır.
