---
document_type: challenge
challenge_id: "V01-C06-CH01"
title: "Gereksiz Mutasyonu Kaldır Challenge'ı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C06"
difficulty: "Intermediate"
estimated_time: "75 minutes"
learning_outcomes: ["V01-LO009", "V01-LO010"]
assessment_id: "V01-C06-AS01"
language: "tr"
---

# Gereksiz Mutasyonu Kaldır Challenge'ı

## Scenario

AI bir order calculation akışında aynı `result` binding’ini raw amount, normalized amount,
discounted amount ve formatted output için art arda yeniden kullanmıştır. Bir object iki
binding tarafından paylaşılmakta ve bir branch property mutation yapmaktadır.

## Task

1. Bütün bindings, initializations, reassignments ve object mutations’ı çıkar.
2. Normal, boundary ve invalid case için state table üret.
3. Aynı binding’in farklı anlamlara geçtiği en az üç noktayı bul.
4. Behavior-preserving biçimde meaningful snapshots kullanarak mutation’ı azalt.
5. Shared object identity’yi açık identity table ile göster.
6. Original ve revised outputs/error behavior’ı en az 15 testte karşılaştır.
7. Her `const`/`let` kararını actual reassignment ihtiyacıyla savun.

## Definition of Done

İlk yanlış transition belirlenmiş, bütün invariants korunmuş ve AI önerisi bağımsız trace
ile denetlenmiş olmalıdır. Kısa code tek başına başarı ölçütü değildir.
