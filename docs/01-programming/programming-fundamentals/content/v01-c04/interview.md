---
document_type: interview
interview_id: "V01-C04-IV01"
title: "Algoritmalar, Sözde Kod ve İzleme — Mülakat Hazırlığı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C04"
difficulty: "Intermediate"
estimated_time: "45 minutes"
learning_outcomes: ["V01-LO006"]
assessment_id: "V01-C04-AS01"
language: "tr"
---

# Algoritmalar, Sözde Kod ve İzleme — Mülakat Hazırlığı

## Application

Her cevap 2–3 dakika sürer. Tanım, örnek, risk ve doğrulama yöntemi sun. Senaryo
sorularında kodlamadan önce clarifying question sor.

## Questions

### Soru 1

Algorithm ile program arasındaki fark nedir?

### Soru 2

İyi bir algorithm’ın hangi özelliklerini ararsın?

### Soru 3

Pseudocode neden yararlıdır ve sınırı nedir?

### Soru 4

Precondition ile postcondition’ı bir örnekle ayır.

### Soru 5

Trace table nasıl hazırlanır; neden prediction önce gelir?

### Soru 6

Üç başarılı trace algorithm’ın doğru olduğunu kanıtlar mı?

### Soru 7

Bir loop’un sonlandığını nasıl savunursun?

### Soru 8

Stop condition var ama algorithm durmuyor. Neleri incelersin?

### Soru 9

1–100 valid aralığı için hangi trace cases’i seçersin ve neden?

### Soru 10

Expected output ile observed output ayrıştı. Root cause’u nasıl bulursun?

### Soru 11

AI contract’ta olmayan rule eklediyse ne yaparsın?

### Soru 12

AI-generated loop’un güvenliğini nasıl review edersin?

### Soru 13

Aynı contract’ı karşılayan iki algorithm’ı complexity bilmeden nasıl
karşılaştırırsın?

### Soru 14

Flowchart, pseudocode ve trace table’dan hangisini ne zaman seçersin?

### Soru 15

Fare algorithm’ını beş dakikada contract, traces ve termination evidence ile
savun.

## Evidence Signals

| Boyut | Güçlü | Zayıf | Kırmızı bayrak |
|---|---|---|---|
| Contract | Obligations/guarantees açık | Genel konuşur | Rule uydurur |
| Pseudocode | Precise ve language-independent | Syntax’a yaslanır | Code’u algorithm sanır |
| Trace | Prediction, steps, state | Yalnız output | Trace’i proof sayar |
| Termination | Measure/bound/stop | “Son satır var” | Riskli branch’i görmez |
| AI audit | Evidence-based accept/reject | Yüzeysel diff | AI’yı otorite sayar |

## Scoring

Her soru 0–4, toplam 60. Başarı 48; Soru 4, 7, 11 ve 15’in her birinden en az
3 puan gerekir.

## References

- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
- [Rubrik](./assessment-rubric.md)
