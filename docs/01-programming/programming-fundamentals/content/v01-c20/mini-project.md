---
document_type: "mini-project"
project_id: "V01-C20-MP01"
title: "ASEA Başlık İndeksi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
---

# ASEA Başlık İndeksi

C19'un iç içe yapıdan topladığı başlıkları şu yapıya dönüştürün:

```js
{
  rawTitle,
  displayTitle,
  searchTitle,
  tokens,
  canonicalTitle,
  wordCount
}
```

## Ürün Davranışları

- Türkçe başlık arama temsili.
- NFC Unicode politikası.
- Çoklu whitespace'i token sınırı olarak ele alma.
- Empty title raporu.
- Toplam başlık, boş başlık ve token sayısı.
- Ham değerlerin korunması.

## Teknik Savunma

Pipeline sırasını, locale seçimini, `[]` empty-token kararını, `length`
sınırını ve C21'e devredilen search array'ini açıklayın.
