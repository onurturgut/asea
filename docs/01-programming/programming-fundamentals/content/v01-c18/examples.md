---
document_type: "examples"
document_id: "V01-C18-EG01"
title: "V01-C18 Çalışılmış Örnekler"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C18"
last_updated: "2026-07-29"
---

# Çalışılmış Örnekler

## Örnek 1 — Alan Kararından Koda

Gereksinim: “Ürün kalıcı kodla bulunur ve stok negatife düşemez.”

| Alan | Tür | Zorunlu | Kural |
|---|---|---|---|
| `code` | string | Evet | Trim sonrası boş değil |
| `stock` | number | Evet | Negatif olmayan tamsayı |

Bu tablo doğrudan iki ayrı validation kontrolü üretir. `stock: "3"` sayıya
çevrilmeden önce kabul edilmez; sessiz dönüşüm model sözleşmesini belirsizleştirir.

## Örnek 2 — Eksik ile `undefined`

```js
const missing = {};
const presentUndefined = { note: undefined };

console.log(Object.hasOwn(missing, "note")); // false
console.log(Object.hasOwn(presentUndefined, "note")); // true
```

İki okumada da `note` değeri `undefined` görünür; özellik varlığı farklıdır.

## Örnek 3 — Alanlar Arası Değişmez

```js
function isReservationValid(item) {
  return Number.isInteger(item.stock)
    && Number.isInteger(item.reservedStock)
    && item.stock >= 0
    && item.reservedStock >= 0
    && item.reservedStock <= item.stock;
}
```

Tek tek iki sayı geçerli olabilir; son karşılaştırma ilişkinin geçerliliğini kanıtlar.
