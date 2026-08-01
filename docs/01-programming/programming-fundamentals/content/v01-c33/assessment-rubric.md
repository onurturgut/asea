---
document_type: "assessment-rubric"
document_id: "V01-C33-AS01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Değerlendirme Rubriği

## Ölçütler

| Ölçüt | Başlangıç | Yeterli | Güçlü |
| --- | --- | --- | --- |
| Trace (`LO055`) | “Değeri hatırlar” | Environment/binding doğru | Frame/lifetime/reachability ayrımı tam |
| Instance | State karışık | E1/E2 bağımsız | Shared closures da doğru izli |
| Boundary (`LO056`) | State global/sızıyor | Commands/queries kontrollü | Invariant ve snapshot isolation güçlü |
| Lifetime | GC kesinliği iddiası | Ownership açık | Retention/cleanup trade-off'u değerlendirir |
| Test | Tek output | Independence/invariant | Leak ve failed transition dahil |
| İletişim | Slogan | Neden-sonuç | Alternatif tasarımı savunur |

## Başarı Kapısı

LO055 ve LO056 ayrı ayrı en az “Yeterli” olmalıdır. Çalışan counter, yanlış lifetime
modelini veya internal state leak'ini telafi etmez.
