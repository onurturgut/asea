---
document_type: "visualization-notes"
document_id: "V01-C31-VIS01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Görselleştirme Notları

## Pipeline Şeridi

`Student[3] → filter → Student[2] → map → number[2] → reduce → number` şeridi.
Her kutuda type ve cardinality birlikte gösterilir.

## İki Katmanlı Identity

Source `A1` ve filtered `A2` array kartları ayrı; ikisinden aynı `O1` student kartına
ok çizilir. Root farklı, element aynı rozetleri kullanılır.

## Mutation Karşılaştırması

`sort`: before/after aynı `A1`; `toSorted`: source `A1`, output `A2`. Object element
oklarının paylaşılabildiği ayrıca görünür.

Renk tek sinyal olmaz; identity etiketi, ok biçimi ve metin tablosu sağlanır.
