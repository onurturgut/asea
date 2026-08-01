---
document_type: "challenge"
document_id: "V01-C31-CH01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Challenge — İstatistik Hattı

Bir attempt koleksiyonundan her öğrenci için completed attempt sayısı, en yüksek
score ve average score üreten `buildStudentStats` fonksiyonu tasarlayın.

## Kısıtlar

- Input mutate edilmez.
- Empty input `[]` döndürür.
- Geçersiz attempt açıkça reddedilir.
- Output öğrenci kimliğine göre deterministik sıralanır.
- Nested reducer kullanacaksanız accumulator shape ve initial value açıklanır.
- En az iki alternatif tasarım karşılaştırılır.

## Savunma

Pipeline okunabilirliği, tekrar dolaşma maliyeti, mutation riski ve test edilebilirlik
üzerinden seçiminizi savunun. Ölçmediğiniz performansı kesin sonuç gibi sunmayın.
