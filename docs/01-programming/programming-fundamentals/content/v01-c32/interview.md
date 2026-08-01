---
document_type: "interview-questions"
document_id: "V01-C32-INT01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Mülakat Soruları

## Sorular

1. First-class function ile higher-order function farkı nedir?
2. Callback neden mutlaka async değildir?
3. `fn` ve `fn()` arasındaki bug'ı nasıl teşhis edersiniz?
4. Callback contract hangi alanları içermelidir?
5. `map(parseInt)` vakasını call arguments ile açıklayın.
6. Named callback, inline arrow ve adapter ne zaman seçilir?
7. Side-effect callback'in retry durumunda riski nedir?

## Tasarım

Bir API'ye üç callback vermek ile tek strategy object vermeyi karşılaştırın. Adaydan
cohesion, configuration validation, invocation order ve test ergonomisini tartması
beklenir.
