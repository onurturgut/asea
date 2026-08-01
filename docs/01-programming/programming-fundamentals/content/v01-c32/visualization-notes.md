---
document_type: "visualization-notes"
document_id: "V01-C32-VIS01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Görselleştirme Notları

## Function Value Kartı

`rule` binding'inden callable `F1` kartına ok; `rule()` call expression'ından return
value kutusuna ayrı ok çizilir.

## Control/Data-Flow

Global → higher-order caller → callback → caller → global dönüş yolu; control okları
ile argument/return data okları farklı çizgi biçimleriyle gösterilir.

## Signature Adapter

`map(value,index,array)` çıkışı ile `parseInt(text,radix)` girişi yan yana; adapter'ın
yalnız value'yu alıp sabit radix 10 verdiği eşleme tablosu.

Renk tek sinyal değildir; frame numarası, ok etiketi ve metin trace sağlanır.
