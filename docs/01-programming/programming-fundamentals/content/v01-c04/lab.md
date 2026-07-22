---
document_type: lab
lab_id: "V01-C04-L01"
title: "Ücret Algoritması Tasarlama ve İzleme Laboratuvarı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C04"
difficulty: "Beginner"
estimated_time: "90 minutes"
learning_outcomes: ["V01-LO006"]
assessment_id: "V01-C04-AS01"
language: "tr"
---

# Ücret Algoritması Tasarlama ve İzleme Laboratuvarı

## Objective

Problem contract’tan dil bağımsız ve sonlanan fare pseudocode üretmek; iki
normal, bir boundary ve bir invalid input’ta trace ederek savunmak.

## Scenario

Şehir içi servis ücreti için doğrulanmış rules:

- `distanceKm`: 1–50 tam sayı
- `passengerType`: `ADULT`, `STUDENT`, `SENIOR`
- base fare: 24 TL
- distance fare: kilometre başına 4 TL
- student: gross fare’in %25’i kadar discount
- senior: gross fare’in %50’si kadar discount
- desteklenmeyen input: `INVALID_INPUT`
- discounts birleşmez

Formüller whole-number output üretecek şekilde seçilmiştir.

## Requirements

- AI’sız `student-v1` sürümü
- Algorithm contract ve rule IDs
- Language-independent pseudocode
- İki normal, bir lower-bound, bir upper-bound ve iki invalid trace
- Termination defense
- Contract-to-trace matrix
- AI alternative audit
- Beş dakikalık technical defense

## Tasks

1. `01-contract.md`: inputs, preconditions, postconditions, invalid behavior.
2. `02-rule-map.md`: her rule’u pseudocode line’a bağla.
3. `03-algorithm.md`: validation, gross calculation, discount branch ve output.
4. `04-traces.md`: tahminleri yaz, altı trace üret, first divergence’ı kaydet.
5. `05-termination.md`: fixed-step veya iteration varsa progress/bound/stop savun.
6. `06-student-v1.md`: ilk çözümü timestamp veya Git commit ile kilitle.
7. `07-ai-audit.md`: AI önerisinde en az üç issue veya improvement’ı kanıtla.
8. `08-defense.md`: contract fidelity, boundaries ve termination’ı savun.

## Bonus Challenge

“Yoğun saatte %10 surcharge” isteği gelir ancak saat aralığı ve discount sırası
tanımsızdır. Rule uydurmadan iki alternative’in etkisini trace et ve decision
owner’a sorulacak soruları yaz.

## Deliverables

Sekiz Markdown dosyası, en az altı trace, first-version evidence ve AI audit.

## Evaluation Criteria

| Boyut | Puan |
|---|---:|
| Contract fidelity | 20 |
| Pseudocode precision | 20 |
| Trace correctness and coverage | 25 |
| Termination defense | 15 |
| AI audit | 10 |
| Traceability and defense | 10 |
| **Toplam** | **100** |

Başarı: en az 80; contract fidelity ve trace boyutlarının her birinden en az
%70. Ayrıntı [rubrikte](./assessment-rubric.md).

## Cleanup and Safety

Gerçek müşteri verisi, şirket sırrı veya erişim anahtarı AI aracına verilmez.
Ham contract ile student-v1 değiştirilmeden korunur.

## Reflection

1. Hangi boundary comparison ilk tasarımını değiştirdi?
2. AI hangi rule’u uydurdu veya zayıflattı?
3. Trace’in göstermediği hangi input class kaldı?
4. Termination defense’in en zayıf adımı hangisiydi?

## References

- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
- [Challenge](./challenge.md)
- [Rubrik](./assessment-rubric.md)
