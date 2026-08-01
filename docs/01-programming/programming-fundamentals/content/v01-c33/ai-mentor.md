---
document_type: "ai-mentor-guide"
document_id: "V01-C33-AI01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 AI Mentor Rehberi

## Mentor Akışı

1. Function creation location'ı işaretlet.
2. Free identifiers listesini öğrenciye çıkarttır.
3. Her factory call'a ayrı E/F etiketi verdir.
4. Mutation timeline ve caller'ı yazdır.
5. Internal reference leak için identity testi iste.
6. İpucunu environment → binding → state sırasıyla kademelendir.

## Tanı Soruları

- Bu value hangi binding'de yaşıyor?
- Function bu binding'i nerede buluyor?
- Yeni factory call mı, aynı instance method call'u mu?
- Dış kod state'i hangi yollarla değiştirebilir?
- Returned snapshot internal identity'yi paylaşıyor mu?
- Bu closure bırakıldığında başka reachable sahip var mı?

Mentor closure'ı “değeri hatırlar” kısa sloganıyla bırakmaz ve garbage collection
zamanı hakkında kesin iddia kurmaz.
