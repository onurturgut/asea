---
document_type: "assessment-rubric"
document_id: "V01-C32-AS01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Değerlendirme Rubriği

## Ölçütler

| Ölçüt | Başlangıç | Yeterli | Güçlü |
| --- | --- | --- | --- |
| Uygulama (`LO053`) | Function sonucu geçirir | Doğru callback stratejileri | Açık reusable contract ve validation |
| Trace (`LO054`) | Yalnız output | Caller/callback sırası doğru | Argument/return/error/count tam izli |
| Signature | Arity'ye bakar | Meaning mismatch'i bulur | Adapter'ı gerekçelendirir |
| Side effect | Gizli mutation | Effect açık | Retry/count riskini değerlendirir |
| Test | Final result | Spy arguments/count | Error ve order dahil contract testi |
| İletişim | “Callback çalışır” | Kim/ne zaman açık | Trade-off profesyonel savunulur |

## Başarı Kapısı

LO053 ve LO054 ayrı ayrı en az “Yeterli” olmalıdır. Çalışan output, yanlış callback
contract'ını veya izlenmeyen side effect'i telafi etmez.
