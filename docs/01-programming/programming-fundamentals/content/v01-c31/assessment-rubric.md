---
document_type: "assessment-rubric"
document_id: "V01-C31-AS01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Değerlendirme Rubriği

## Ölçütler

| Ölçüt | Başlangıç | Yeterli | Güçlü |
| --- | --- | --- | --- |
| Pipeline (`LO051`) | Yöntemler rastgele | Doğru select/transform/aggregate | Output sözleşmesi ve sınırlar açık |
| Trace (`LO051`) | Yalnız final output | Type/cardinality doğru | Her aşama identity/state ile kanıtlı |
| Karar (`LO052`) | “Mutation kötüdür” | Ownership ile seçim | Alternatif ve maliyet kanıtıyla savunma |
| Identity | Root/element karışık | İki katman ayrılır | Selective sharing bilinçli |
| Sınırlar | Empty input unutulmuş | Empty/no-match testli | Domain anlamı gerekçeli |
| İletişim | Yöntem listesi | Neden-sonuç açık | Trade-off profesyonel savunulur |

## Başarı Kapısı

LO051 ve LO052 ayrı ayrı en az “Yeterli” olmalıdır. Final output'un doğru olması,
source mutation veya yanlış empty semantiğini telafi etmez.
