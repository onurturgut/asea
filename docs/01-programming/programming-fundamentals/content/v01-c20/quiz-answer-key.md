---
document_type: "quiz-answer-key"
document_id: "V01-C20-QZ01-KEY"
title: "V01-C20 Quiz Açıklamalı Cevaplar"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
quiz_id: "V01-C20-QZ01"
---

# V01-C20 Quiz Açıklamalı Cevaplar

1. String işlemleri özgün değeri yerinde değiştirmez; yeni string üretir.
2. Baş ve son whitespace'i etkiler, iç whitespace'i değil.
3. Empty string `""`.
4. Türkçe `I/ı` ve `İ/i` mapping'i varsayılan mapping'den farklıdır.
5. Hayır; normalization temsil eşdeğerliğini, case harf biçimini ele alır.
6. Sonuç `[""]` olup sahte bir token sayısı `1` üretebilir; politika `[]`
   döndürmelidir.
7. Tokenization parçalar, validation parçaların kurallara uygunluğunu sınar.
8. Ham kanıt korunur; search temsili kayıplı eşleştirme politikası taşıyabilir.
9. JavaScript `length` UTF-16 code unit sayar; emoji surrogate pair olabilir.
10. Uygun sıra: trim → NFC → locale case → tokenize/filter → summarize/format.
