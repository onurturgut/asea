---
document_type: "challenge"
challenge_id: "V01-C20-CH01"
title: "Dağınık Metin Girdilerini İşle"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
learning_outcomes:
  - "V01-LO031"
---

# V01-C20-CH01 — Dağınık Metin Girdilerini İşle

Bir etiket listesini normalize edin:

```js
[
  " JavaScript ",
  "JAVASCRIPT",
  "  İSTANBUL ",
  "istanbul",
  "",
  "\u00E9",
  "e\u0301"
]
```

Ham kayıtları kaybetmeden aynı arama kimliğine gelen değerleri gruplayın.
Locale ve Unicode politikanızı açıklayın. Empty input'u ayrı raporlayın.
`"JAVASCRIPT"` değerinin `tr-TR` ile `"javascrıpt"` olacağını test edin; tek
locale'in karma dilli teknik içeriği neden çözemediğini ve bu challenge için
hangi açık terim/metadata politikasını seçtiğinizi yazın.

Teslimat: çalışan kod, ara iz, eşdeğerlik tablosu, beş test ve “hangi
farklılıkları bilinçli olarak kaybettim?” karar notu.
