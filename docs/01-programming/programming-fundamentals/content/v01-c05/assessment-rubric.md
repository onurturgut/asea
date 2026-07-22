---
document_type: assessment
assessment_id: "V01-C05-AS01"
title: "V01-C05 Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C05"
learning_outcomes: ["V01-LO007", "V01-LO008"]
instruments: ["V01-C05-QZ01", "V01-C05-EX01", "V01-C05-L01", "V01-C05-CH01", "V01-C05-IV01"]
passing_score: 80
language: "tr"
---

# V01-C05 Değerlendirme Rubriği

## Purpose

Öğrencinin value/type/representation classification ile conversion-loss analysis
yetkinliğini bağımsız ve ölçülebilir evidence üzerinden değerlendirmek.

## Instrument Weights

| Araç | Ağırlık |
|---|---:|
| Quiz | %20 |
| Exercises | %15 |
| Lab | %35 |
| Challenge | %20 |
| Interview + reflection | %10 |

## Outcome Gates

| Outcome | Minimum evidence | Gate |
|---|---|---:|
| `V01-LO007` | 10+ values correctly classified with justification | %75 |
| `V01-LO008` | Precision/meaning loss matrix with boundary tests | %75 |

## Analytic Rubric

| Boyut | 4 — Yetkin | 3 — Yeterli | 2 — Gelişiyor | 1 — Yetersiz |
|---|---|---|---|---|
| Domain classification | Meaning, operations, type and representation all justified | Most correct; minor omission | Appearance-driven errors | No defensible model |
| Conversion contract | Source/target, grammar, range, absence, failure explicit | One minor boundary missing | Several implicit assumptions | Blind conversion |
| Loss analysis | Precision and meaning loss distinguished with counterexamples | Main risks found | One loss class confused | Loss ignored |
| Test evidence | Normal, boundary, invalid, ambiguous, lossy cases reproducible | One class thin | Only happy paths | No executable evidence |
| Engineering explanation | Decision, alternatives and trade-offs traceable | Decision justified | Mostly syntax-focused | Unsupported assertion |
| AI audit | Independent first attempt; sources and counterexamples used | Audit present | AI output lightly reviewed | AI output copied |

## Critical Errors

Şunlardan biri varsa ilgili outcome geçemez: large ID’yi unsafe Number’a sessizce
dönüştürmek; `Boolean("false")` ile token parse etmek; invalid input’u success göstermek;
quiz/lab cevabını AI’den doğrudan kopyalamak; raw ve normalized value’yu ayıramamak.

## Completion Decision

Overall score en az 80, her outcome gate en az %75 ve critical error sayısı 0 olmalıdır.
Başarısız outcome için hedefli düzeltme yapılır; bütün chapter’ın tekrar edilmesi gerekmez.
