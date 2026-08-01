---
document_type: "visualization-notes"
document_id: "V01-C30-VIS01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Görselleştirme Notları

## Görsel 1 — Binding ve Identity

İki isim kutusundan tek `O1` object kartına ok çizilir. Mutation sonrası object kartı
renk değiştirir; iki okun hedefi aynı kalır. “Bellek adresi” etiketi kullanılmaz.

## Görsel 2 — Shallow Copy

`O1` ve `O3` adlı iki dış object; ikisinin `progress` oku tek `O2` nested object'ine
gider. Dış identity karşılaştırması false, nested karşılaştırma true rozetleriyle
gösterilir.

## Görsel 3 — Selective Update

Eski yol `O1 → O2`, yeni yol `O3 → O4` olarak yan yana çizilir. Değişmeyen primitive
property değerlerinin taşındığı, değişen yolun yeni kimlik aldığı vurgulanır.

## Erişilebilirlik

Renk tek ayırt edici sinyal olmaz; identity etiketleri, ok biçimleri ve metin
açıklamaları kullanılır. Her görselin altında aynı ilişkiyi anlatan tablo bulunur.
