---
document_type: "visualization-notes"
document_id: "V01-C33-VIS01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Görselleştirme Notları

## Frame ve Environment Ayrımı

Outer call frame zaman çizelgesinde kapanır; returned F1'den E1 environment kartına
lexical-access oku kalır. Bunlar tek şekil olarak çizilmez.

## Independent Instances

`trackerA → {methods} → E1 state` ve `trackerB → {methods} → E2 state` paralel şeritleri.

## Shared Closures

Increment/read/reset function kartlarının aynı E1 count binding'ine okları; command
okları yazma, query oku okuma etiketi taşır.

Renk tek sinyal olmaz; E/F kimlikleri, ok etiketleri ve state tabloları kullanılır.
