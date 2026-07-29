---
document_type: "exercise-solutions"
document_id: "V01-C20-EX01-SOL"
title: "V01-C20 Alıştırma Çözümleri"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
---

# V01-C20 Alıştırma Çözümleri

1. Sonuç `"Kodlama"`; özgün string immutable olduğu için değişmez.
2. `""` değerinde bir string.
3. `"istanbul"`.
4. Code point dizileri farklıdır:
   `first.normalize("NFC") === second.normalize("NFC")`.
5. Sonuçta iki boş token oluşur. Whitespace politikası için `/\s+/` kullanılır.
6.

```js
function tokenize(text) {
  return text === "" ? [] : text.split(/\s+/);
}
```

7. Ham metin kanıtı, display özgün case'li gösterim, search ise eşleştirme
   politikasıdır.
8. UTF-16 `length` iki code unit; iterator tek code point sayar.
9. `raw.split("|")`; `"|85|Ankara"` boş ad, `"Ada|puan|Ankara"` sayısal
   olmayan puan içerir.
10. Sıra uygundur; whitespace sınırı önce daraltılır, kanonik temsil case
    öncesinde kurulur, tokenization normalize arama metninde yapılır.
11.

```js
function countWords(text) {
  const trimmedText = text.trim();
  if (trimmedText === "") {
    return 0;
  }
  return trimmedText.split(/\s+/).length;
}
```

12. Referans çekirdek:

```js
function summarizeTag(rawTag) {
  const displayTag = rawTag.trim().normalize("NFC");
  const searchTag = displayTag.toLocaleLowerCase("tr-TR");
  const tokens = searchTag === "" ? [] : searchTag.split(/\s+/);
  return { rawTag, displayTag, searchTag, tokens };
}
```
