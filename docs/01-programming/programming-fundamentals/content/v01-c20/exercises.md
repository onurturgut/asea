---
document_type: "exercise-set"
document_id: "V01-C20-EX01"
title: "V01-C20 Alıştırmaları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
learning_outcomes:
  - "V01-LO031"
---

# V01-C20 Alıştırmaları

1. `"  Kodlama  ".trim()` sonucunu ve özgün string'in değişip değişmediğini
   açıklayın.
2. `"   ".trim()` değerini ve türünü tahmin edin.
3. `"İSTANBUL".toLocaleLowerCase("tr-TR")` sonucunu yazın.
4. `"\u00E9"` ile `"e\u0301"` doğrudan neden eşit değildir? En küçük
   normalization çözümünü yazın.
5. `"bir   iki".split(" ")` sonucundaki sorunu gösterin.
6. Empty string için `[]` döndüren `tokenize` fonksiyonu yazın.
7. Ham, display ve search metinlerinin neden ayrı tutulduğunu açıklayın.
8. `const fox = "🦊"` için `fox.length` ile `Array.from(fox).length`
   sonuçlarını açıklayın.
9. `"Ada|85|Ankara"` metnini parçalayın; parsing'in validation olmadığını iki
   geçersiz örnekle gösterin.
10. Şu pipeline'daki sıra kararını değerlendirin:
    `trim → NFC → tr-TR case → tokenize → filter → summarize`.
11. Hatalı kodu düzeltin:

    ```js
    function countWords(text) {
      return text.trim().split(" ").length;
    }
    ```

12. Bağımsız görev: dağınık beceri etiketlerini `{ rawTag, displayTag,
    searchTag, tokens }` kayıtlarına dönüştürün; beş test vakası yazın.
