---
document_type: "lab"
lab_id: "V01-C20-L01"
title: "Metin İstatistik Pipeline'ı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
learning_outcomes:
  - "V01-LO031"
assessment_id: "V01-C20-AS01"
estimated_time: "2-3 saat"
---

# V01-C20-L01 — Metin İstatistik Pipeline'ı

## Senaryo

ASEA başlık indeksindeki dağınık metinleri normalize edip aranabilir kayıtlar
ve toplu istatistikler üreteceksiniz.

## Girdi

```js
const rawTitles = [
  "  JavaScript   TEMELLERİ ",
  "Fonksiyonlar",
  " İSTANBUL'DA KODLAMA ",
  "   ",
  "\u0065\u0301 örneği",
];
```

## Görevler

1. `normalizeForDisplay`, `normalizeForSearch`, `tokenize`,
   `summarizeTitle` fonksiyonlarını yazın.
2. Ham array'i değiştirmeden özet array'i üretin.
3. Her kayıt için display/search/canonical title, tokens ve wordCount üretin.
4. Boş başlık sayısını, toplam token sayısını ve en uzun canonical başlığı
   hesaplayın.
5. Normal, whitespace, Turkish case, canonical Unicode ve empty-input testleri
   yazın.
6. Bir başlık için tam ara değer izi hazırlayın.
7. Politikanın yalnız whitespace tabanlı tokenization olduğunu ve bütün diller
   için kelime sınırı iddiası taşımadığını belgeleyin.

## Kabul Kriterleri

- Empty input `tokens: []`, `wordCount: 0`.
- `İSTANBUL` arama temsili `istanbul`.
- Composed/decomposed eşdeğerler NFC sonrası karşılaştırılabilir.
- Çoklu whitespace boş token üretmez.
- Kaynak array ve string değerleri değişmez.
- Her aşama bağımsız test edilebilir.

## Teslimat

`text-pipeline.js`, `tests.js`, `trace.md`, `policy.md`, `README.md`.

## Rubric

Pipeline doğruluğu %30, sınır testleri %25, Unicode/Türkçe politikası %20,
ara iz %15, açıklık %10.
