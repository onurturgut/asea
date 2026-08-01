---
document_type: "research-notes"
document_id: "V01-C28-RN001"
chapter_id: "V01-C28"
status: "Draft"
researched_at: "2026-08-01"
---

# V01-C28 Kaynak Notları

## NASA Systems Engineering Handbook

NASA'nın Requirements Verification Matrix örneği, her gereksinimin benzersiz
kimlik, kaynak ve verification yöntemiyle izlenmesini önerir. V&V planı; kapsam,
sorumluluk, yöntem ve acceptance testing alanlarını görünür tutar. C28'de ölçek
küçültülerek requirement → design → code → test → review matrisi kullanıldı.

Kaynak: [NASA Systems Engineering Handbook Appendix](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)

## NASA SWE-055

NASA guidance, validation'ı doğru sistemin üretildiğini; verification'ı ürünün
doğru üretildiğini kontrol eden ayrı amaçlar olarak tanımlar. Requirements'ın
correct, complete, clear, consistent ve fulfillable olması stakeholder ile
incelenir. Bu ayrım chapterdaki test ve kullanıcı ihtiyacı sınırına taşındı.

Kaynak: [NASA SWE-055 Requirements Validation](https://swehb.nasa.gov/spaces/7150/pages/16449673/SWE-055%2B-%2BRequirements%2BValidation)

## Google Engineering Practices

Google review guidance design, functionality, complexity, tests, naming,
documentation ve context'in birlikte incelenmesini ister. Teknik gerçek ve veri
kişisel tercihten üstün tutulur. Small CL guidance küçük değişikliklerin daha
derin review, düşük bug riski ve kolay geri alma sağladığını açıklar.

Kaynaklar:

- [What to Look for in a Code Review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
- [The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html)
- [Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html)

## Kullanım sınırı

NASA'nın büyük sistem süreçleri başlangıç seviyesi küçük programa aynen taşınmadı.
Formlar ve rol yapıları yerine öğrenci için gerekli en küçük kanıt seti seçildi.
Kaynaklar pedagojik sırayı değil, teknik iddiaların sınırını doğrulamak için
kullanıldı.
