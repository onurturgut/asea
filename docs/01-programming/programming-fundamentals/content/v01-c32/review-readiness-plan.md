---
document_type: "review-readiness-plan"
document_id: "V01-C32-RR01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 İncelemeye Hazırlık Planı

## Teknik

- Function value/call ayrımı ve callable açıklaması doğru mu?
- Caller'ın callback arguments/return davranışı kaynakla uyumlu mu?
- `map(parseInt)` trace gerçek runtime sonucuyla eşleşiyor mu?
- Callback async ile yanlış eşitleniyor mu?

## Pedagojik

- C13/C14/C16 köprüsü ve C31/C33 devirleri görünür mü?
- Her callback için kim/ne zaman/kaç kez/arguments/return soruluyor mu?
- Closure capture erken öğretiliyor mu?
- LO054 ezber değil gerçek call trace gerektiriyor mu?

## Ürün

- 21 dosya, terim JSON'u, lab, P07 artımı ve admin M10 mapping eksiksiz mi?
- Bağımsız review ve pilot kapıları açık mı?
