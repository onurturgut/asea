---
document_type: challenge
challenge_id: "V01-C04-CH01"
title: "Sonlanmayan Algoritmayı Onarma Challenge'ı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C04"
difficulty: "Intermediate"
estimated_time: "60 minutes"
learning_outcomes: ["V01-LO006"]
assessment_id: "V01-C04-AS01"
language: "tr"
---

# Sonlanmayan Algoritmayı Onarma Challenge'ı

## Senaryo

Bir AI aracı, borç bakiyesi sıfıra ulaşana kadar aylık ödeme uygulayan bir
algorithm önerdi. Bazı aylarda fee, payment’tan büyük olduğunda balance artıyor;
loop yine de `balance > 0` koşuluyla devam ediyor.

## Görev

1. Problem contract’ta eksik en az sekiz soruyu yaz.
2. AI pseudocode’unu değiştirmeden önce iki non-terminating trace üret.
3. Progress measure iddiasının neden başarısız olduğunu açıkla.
4. Contract’ı uydurmadan safe stop/failure behavior öner.
5. Düzeltilmiş pseudocode’u iki normal, bir boundary ve bir invalid case’te trace et.
6. Onarımın postcondition ve termination etkisini 250–400 kelimeyle savun.

## Başarı Koşulu

En az 80/100, uydurulmuş kritik business rule sayısı sıfır ve bütün loop
branches’lerinde görünür progress/stop behavior gerekir.

## References

- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
- [Rubrik](./assessment-rubric.md)
