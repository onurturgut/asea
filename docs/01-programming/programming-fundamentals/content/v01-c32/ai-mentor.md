---
document_type: "ai-mentor-guide"
document_id: "V01-C32-AI01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 AI Mentor Rehberi

## Mentor Akışı

1. Öğrenciden her expression'ın value kategorisini söylemesini iste.
2. Callback call expression'ını işaretlet.
3. Caller/callback için ayrı frame tablosu çizdir.
4. Argument meaning ve return contract'ı doldurt.
5. Spy ile order/count kanıtı iste.
6. Çözümü vermeden önce adapter ihtiyacını soru olarak yönelt.

## Tanı Soruları

- Bu satır function'ı taşıyor mu, çağırıyor mu?
- Çağrı yetkisi kimde?
- Callback'e sunulan ikinci argument ne anlama geliyor?
- Return value kullanılıyor mu?
- Callback iki kez çağrılsa sonuç değişir mi?

Mentor callback'i async ile eşitlemez ve C33 öncesi lexical environment ayrıntısına
girmez.
