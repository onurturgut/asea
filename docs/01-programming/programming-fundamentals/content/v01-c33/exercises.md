---
document_type: "exercises"
document_id: "V01-C33-EXR01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Alıştırmaları

## Alıştırma 1 — Environment Trace

Bir counter factory için E1/F1 oluşturma, outer return ve iki inner call'u en az on
adımlı tabloyla izleyin.

## Alıştırma 2 — Snapshot mı Binding mi?

Outer binding'i function creation sonrasında değiştirin; returned reader'ın sonucunu
tahmin edip açıklayın.

## Alıştırma 3 — Instance Independence

İki counter üretin; birini iki, diğerini bir kez çağırıp state ayrımını kanıtlayın.

## Alıştırma 4 — Reference Leak

Captured mutable object'i doğrudan döndüren store yazın, dış mutation ile invariant'ı
bozun ve fresh snapshot ile düzeltin.

## Alıştırma 5 — Commands/Queries

Limitli sayaç için `increment`, `read`, `reset` API'si ve invariant testleri yazın.

## Alıştırma 6 — Loop Closure

Üç reader callback'i `let` loop binding'iyle üretin ve `[0,1,2]` kanıtını gösterin.
