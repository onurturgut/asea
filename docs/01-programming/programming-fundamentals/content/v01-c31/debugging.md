---
document_type: "debugging-guide"
document_id: "V01-C31-DBG01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Hata Ayıklama Rehberi

## Pipeline Probe

Uzun zinciri ara adlara ayırın ve her aşamada şu dört kanıtı yazın:

1. Element type nedir?
2. Length/cardinality nedir?
3. Root identity değişti mi?
4. Element identity paylaşılıyor mu?

```js
console.table({
  sourceLength: source.length,
  selectedLength: selected.length,
  sameRoot: source === selected,
  firstElementShared: source[0] === selected[0],
});
```

## Belirti Tablosu

| Belirti | Olası neden | Kontrol |
| --- | --- | --- |
| Map output'u `undefined` | Eksik `return` | Callback output'u |
| Source sıra değişti | `sort/reverse` mutation | Root identity |
| Source object değişti | Element aliasing | Element `===` |
| Empty input çöküyor | Initial value yok | Reduce boundary |
| Property read hatası | `find` no-match | `undefined` guard |
