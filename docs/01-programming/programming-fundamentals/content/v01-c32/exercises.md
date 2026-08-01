---
document_type: "exercises"
document_id: "V01-C32-EXR01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Alıştırmaları

## Alıştırma 1 — Value Tahmini

`const a = calculate; const b = calculate();` için iki binding'in type ve value
kategorisini yazın.

## Alıştırma 2 — Operation

İki number ve operation callback alan `calculate` yazın. Add/subtract stratejileriyle
test edin.

## Alıştırma 3 — Call Trace

Alıştırma 2 için global → caller → callback → caller → global sırasını argument ve
return değerleriyle tabloya dökün.

## Alıştırma 4 — Signature

`["10", "10", "10"].map(parseInt)` sonucunu çağrı argument'larıyla açıklayıp adapter
ile düzeltin.

## Alıştırma 5 — Spy

Bir callback'in hangi sırada ve kaç kez çağrıldığını array log ile kanıtlayın.

## Alıştırma 6 — Strategy Selector

Existing named `ascending` ve `descending` comparator'lardan birini döndüren function
yazın. Bilinmeyen seçimde açık error üretin.
