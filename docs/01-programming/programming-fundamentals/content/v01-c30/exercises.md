---
document_type: "exercises"
document_id: "V01-C30-EXR01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Alıştırmaları

## Alıştırma 1 — Tahmin

İki ayrı `{ score: 10 }` literal'inin `===` sonucunu ve gerekçesini yazın.

## Alıştırma 2 — Erişim

`const key = "title"` verildiğinde `{ title: "Objects" }` içinden değeri runtime key
ile okuyun. Dot notation'ın neden aynı soruyu çözmediğini açıklayın.

## Alıştırma 3 — İz

```js
const a = { settings: { sound: true } };
const b = a;
const c = { ...a };
b.settings.sound = false;
```

`a === b`, `a === c`, `a.settings === c.settings` ve üç `sound` değerini tahmin edin.

## Alıştırma 4 — Model

Bir chapter denemesi için `chapterId`, `score` ve `feedback.visible` property'lerini;
type ve invariant tablosuyla tasarlayın.

## Alıştırma 5 — Güvenli Güncelleme

Alıştırma 4 modelinde yalnız `feedback.visible` değerini değiştiren, girdiyi mutate
etmeyen bir fonksiyon yazın.

## Alıştırma 6 — Hata Avı

`if (!attempt.score)` kontrolünün neden geçerli `0` puanını yanlış değerlendirdiğini
gösterin ve üç ayrı kontrolle düzeltin: sahiplik, type, aralık.

## Alıştırma 7 — Factory

`createAttempt` factory'si yazın. Raw string'i dönüştürmeyin; `score` için integer ve
`0–100` invariant'ını uygulayın.
