---
document_type: assessment
assessment_id: "V01-C04-AS01"
title: "V01-C04 Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C04"
learning_outcomes: ["V01-LO006"]
instruments: ["V01-C04-QZ01", "V01-C04-EX01", "V01-C04-L01", "V01-C04-CH01", "V01-C04-IV01"]
passing_score: 80
language: "tr"
---

# V01-C04 Değerlendirme Rubriği

## Purpose

Öğrencinin contract’tan precise, traceable ve terminating algorithm üretme
yetkinliğini ölçmek.

## Instruments

| Araç | Ağırlık |
|---|---:|
| Quiz | %20 |
| Exercises | %15 |
| Lab | %35 |
| Challenge | %20 |
| Interview | %10 |

## Analytic Rubric

| Boyut | 4 — Yetkin | 3 — Yeterli | 2 — Gelişiyor | 1 — Başlangıç |
|---|---|---|---|---|
| Contract | Bütün rules doğru ve traceable | Küçük boşluklar | Önemli rule eksik | Contract yok/uydurulmuş |
| Pseudocode | Precise, language-independent, complete | Kullanılabilir, küçük ambiguity | Syntax bağımlı/eksik | Uygulanamaz |
| Pre/Post | Obligation ve guarantee doğru | Küçük ifade sorunu | Birbirine karışıyor | Yok |
| Trace | Steps/state ve case classes eksiksiz | Küçük kayıt eksiği | Path/step atlıyor | Yalnız final output |
| Termination | Measure, bound, stop bütün branches’te | Temel savunma doğru | Progress boşluklu | Savunma yok |
| Evidence limit | Trace/proof sınırını doğru açıklar | Küçük eksik | Aşırı geneller | Birkaç trace’i proof sayar |
| AI audit | Independent v1 ve kanıtlı karar | Karar var, kanıt zayıf | Yüzeysel karşılaştırma | AI output doğrudan teslim |
| Defense | Karar, trade-off, sınır açık | Genelde açık | Dağınık | Savunulamıyor |

## Critical Failures

- Contract’ta olmayan kritik rule uydurmak
- Boundary/invalid trace üretmemek
- Non-terminating branch’i doğru kabul etmek
- İlk bağımsız sürüm olmadan AI teslim etmek
- Trace’i universal proof diye sunmak

## Passing Rules

Toplam en az 80; Lab en az 80; Quiz applied section en az 24/40; Contract,
Trace, Termination ve AI audit boyutları en az Seviye 3; critical failure sıfır.

## Retry

Feedback `kanıt → etki → ölçüt → düzeltme → yeniden trace` biçimindedir.
Öğrenci eski sürümü silmez; diff ve yeni case evidence ekler.

## Traceability

| Outcome | Concepts | Claims | Evidence | Instruments |
|---|---|---|---|---|
| `V01-LO006` | `CON-000016`–`000019` | `CLM-000016`–`000019` | `EV-000010` | `QZ01`, `EX01`, `L01`, `CH01`, `IV01` |

## References

- [Assessment Registry](../../../assessment.md)
- [Lab](./lab.md)
- [Quiz](./quiz.md)
