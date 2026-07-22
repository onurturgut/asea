---
document_type: "chapter-summary"
document_id: "V01-C17-SUM01"
title: "V01-C17 Summary"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
last_updated: "2026-07-23"
---

# Bölüm Özeti

Koleksiyon, çok sayıda değeri erişim ve dolaşma kurallarıyla tutar. JavaScript
dizisinde ilk indeks `0`, son indeks `length - 1` olur. `length`, seyrek dizide
gerçek atanmış öğe sayısını göstermeyebilir. Boş konum ile açık `undefined` farklıdır.

Dolaşma başlangıç, sınır, adım, geçerli öğe ve değişmezle tasarlanır. Konuma ihtiyaç
varsa indeksli `for`, yalnız değere ihtiyaç varsa `for...of` açıktır. Dolaşma sırasında
aynı diziyi değiştirmek öğe atlanmasına yol açabilir.

`map` her öğeyi yeni öğeye dönüştürür, `filter` koşulu sağlayanları seçer, `reduce`
biriktiriciyle tek sonuç üretir. Başlangıç değersiz `reduce` boş dizide hata verir.
Toplam için `0` anlamlıyken ortalama ve minimum boş girişte ayrı sonuç ister.

Profesyonel çözüm; öğe türünü doğrular, geçersiz kayıtları indeksleriyle raporlar,
kaynak mutation'ını açıklar ve boş/tek/çoklu/sınır testlerini sunar. Tek geçiş ile
çoklu geçiş seçimi en kısa koda değil ölçüm, okunabilirlik ve bakım maliyetine dayanır.
AI çıktısı da aynı sözleşme ve testlerden geçmeden kabul edilmez.

## Hızlı Kontrol

- Son indeks: `length - 1`
- Toplam başlangıcı: `0`
- Dönüşüm: `map`
- Seçim: `filter`
- Birleştirme: `reduce`
- Değer dolaşması: `for...of`
- Dizi doğrulama: `Array.isArray`
- Zorunlu testler: boş, tek, çoklu, sınır, yanlış tür, mutation
