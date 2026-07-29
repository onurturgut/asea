---
document_type: "interview-set"
interview_id: "V01-C20-IV01"
title: "V01-C20 Mülakat Soruları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
---

# V01-C20 Mülakat Soruları

1. Metin işleme neden yalnız `split` işleminden ibaret değildir?
2. `trim()` ne yapar, ne yapmaz?
3. Türkçe case dönüşümünde locale neden önemlidir?
4. Unicode normalization ile case conversion farkı nedir?
5. Görsel olarak aynı iki string neden doğrudan eşit olmayabilir?
6. `split(" ")` çoklu boşlukta nasıl hata üretir?
7. Empty input için neden `[]` tercih edilebilir?
8. Parsing ve validation'ı örnekle ayır.
9. Code unit, code point ve grapheme nedir?
10. Ham, display ve search metnini ayırmanın mühendislik faydası nedir?

## Kod Savunması

```js
function tokenize(text) {
  const trimmedText = text.trim();
  return trimmedText === "" ? [] : trimmedText.split(/\s+/);
}
```

Aday her satırı, türleri, empty davranışını ve fonksiyonun Unicode/kelime
segmentasyonu açısından sınırlarını açıklamalıdır.
