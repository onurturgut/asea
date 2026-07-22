---
document_type: interview
interview_id: "V01-C05-IV01"
title: "Değerler ve Veri Türleri — Mülakat Hazırlığı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C05"
difficulty: "Intermediate"
estimated_time: "60 minutes"
learning_outcomes: ["V01-LO007", "V01-LO008"]
assessment_id: "V01-C05-AS01"
language: "tr"
---

# Değerler ve Veri Türleri — Mülakat Hazırlığı

## Application

Her cevap 2–3 dakika: definition → example → risk → verification. Scenario’da önce
clarifying questions sor; language behavior ile domain decision’ı ayır.

## Questions

1. Value, data type, literal ve representation farkları nedir?
2. Type information hangi hata sınıflarını önler, hangilerini önleyemez?
3. Digit-only customer ID neden String olmalıdır?
4. JavaScript primitive types nelerdir; `typeof null` nasıl açıklanır?
5. `NaN` nedir ve nasıl kontrol edilir?
6. `0.1 + 0.2` neden 0.3’e tam eşit olmayabilir?
7. Safe integer nedir; large external ID için ne yaparsın?
8. Number ve BigInt arasındaki önemli sınırlar nelerdir?
9. String length neden visible character count olmayabilir?
10. `null`, `undefined`, empty, zero ve false nasıl ayrılır?
11. `Boolean("false")` neden true ve güvenli parser nasıl kurulur?
12. `Number()` ile `parseInt()` hangi farklı contracts’ı karşılar?
13. Precision loss ile meaning loss’a ayrı örnek ver.
14. JSON boundary’sinde hangi JavaScript values sorun çıkarır?
15. AI’nin önerdiği conversion code’u production öncesi nasıl denetlersin?

## Evaluation Signals

Güçlü aday assumptions sorar, counterexample verir, source/target contracts yazar ve
validation evidence ister. Yalnız syntax veya ezberlenmiş output sunmak yeterli değildir.
