---
document_type: "interview-questions"
document_id: "V01-C33-INT01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Mülakat Soruları

## Sorular

1. Closure nedir; lexical scope ile ilişkisi nasıldır?
2. Capture by binding ile snapshot farkını örnekleyin.
3. Outer call dönmüşken state neden erişilebilir kalır?
4. Factory instance'ları nasıl bağımsız state üretir?
5. Closure encapsulation'ın reference leak riski nedir?
6. Closure, class ve module state arasında nasıl seçim yaparsınız?
7. Gereksiz capture memory/lifetime açısından nasıl incelenir?

## Kod Okuma

İki factory call ve üç returned method içeren kodda environment kimliklerini, mutation
sırasını ve final state'i whiteboard üzerinde izleyin.
