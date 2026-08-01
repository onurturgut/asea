---
document_type: "mini-project"
document_id: "V01-C33-MP01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# Mini Proje — ASEA Oturum İlerleme Kasası

## Ürün

- valid initial state factory
- progress commands ve snapshot queries
- independent student sessions
- transition history'nin defensive snapshot'ı
- environment/state trace
- lifetime/cleanup decision record

## Kabul Ölçütleri

Internal state dışarıdan doğrudan mutate edilemez. Geçmiş snapshot'lar korunur.
Geçersiz transition state'i değiştirmez. İki session birbirinden bağımsızdır. En az
on test ve LO055 sözlü trace vardır.
