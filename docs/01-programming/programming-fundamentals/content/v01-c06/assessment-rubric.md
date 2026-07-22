---
document_type: assessment
assessment_id: "V01-C06-AS01"
title: "V01-C06 Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C06"
learning_outcomes: ["V01-LO009", "V01-LO010"]
instruments: ["V01-C06-QZ01", "V01-C06-EX01", "V01-C06-L01", "V01-C06-CH01", "V01-C06-IV01"]
passing_score: 80
language: "tr"
---

# V01-C06 Değerlendirme Rubriği

## Weights

| Araç | Ağırlık |
|---|---:|
| Quiz | %20 |
| Exercises | %15 |
| Lab | %35 |
| Challenge | %20 |
| Interview ve reflection | %10 |

## Outcome Gates

| Outcome | Minimum evidence | Gate |
|---|---|---:|
| `V01-LO009` | Initial state ve bütün assignments içeren doğru state table | %75 |
| `V01-LO010` | Her binding için değişim ihtiyacına dayalı const/mutable decision | %75 |

## Analytic Criteria

| Boyut | Yetkin | Gelişiyor | Yetersiz |
|---|---|---|---|
| State trace | Previous/next values, operation ve invariant eksiksiz | Birkaç ara state eksik | Final output בלבד |
| Concept distinction | Declaration, initialization, reassignment, mutation ayrılmış | Bir ayrım karışıyor | Hepsi “değişken değiştirme” |
| Mutability decision | Requirement ve alternatives ile savunulmuş | Syntax/lint ağırlıklı | Gerekçesiz |
| Boundary behavior | Error ve invalid transitions state’i değiştirmiyor | Bir boundary eksik | Happy path only |
| AI audit | Independent first attempt ve trace comparison | Yüzeysel review | Kopyalama |

## Critical Errors

Assignment’ı equality sanmak, `const` object’i deep immutable kabul etmek, error sonrası
state’i başarıyla değişmiş göstermek veya state table’ı yalnız final output’tan üretmek ilgili
outcome’u geçersiz kılar.

## Completion Decision

Overall en az 80, her outcome gate en az %75 ve critical error 0 olmalıdır.
