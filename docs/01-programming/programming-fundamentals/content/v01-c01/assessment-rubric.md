---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "V01-C01 Bölüm Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Assessment Designer"
source_ids:
  - "V01-C01-AS01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "../../../assessments/01-assessment-01-what-is-programming.md"
  - "../../../assessment.md"
---

# V01-C01 Bölüm Değerlendirme Rubriği

## Purpose

C01 quiz, alıştırma, laboratuvar, challenge ve mülakat kanıtlarını iki öğrenme
çıktısı için ayrı ve gözlenebilir ölçütlerle değerlendirmek.

## Scope

Rubrik `V01-C01-AS01` değerlendirmesinin öğrenciye dönük uygulama görünümüdür;
kanonik assessment kaydını değiştirmez.

## Ownership

- Kanonik assessment: `V01-C01-AS01`
- Puanlama sahibi: Assessment Designer
- Teknik ve pedagojik moderasyon: bağımsız reviewers

## Content

### Outcome rubriği

| Düzey | `V01-LO001` — Kavram ayrımı | `V01-LO002` — Kesin talimat |
| ---: | --- | --- |
| 1 — Başlangıç | Program, algoritma ve yürütmeyi karıştırır. | Talimatlar belirsiz, sırasız veya sekiz adımdan azdır. |
| 2 — Gelişiyor | Tanımları verir fakat yeni örnekte sınırları açıklayamaz. | Sekiz adım vardır ancak gizli varsayım veya test sözleşmesi eksiktir. |
| 3 — Yetkin | İki yeni örnekte kavramları doğru ayırır ve gerekçelendirir. | En az sekiz kesin adımı normal, sınır ve geçersiz testle doğrular. |
| 4 — İleri | Karşı örnek, risk ve mühendislik etkisiyle ayrımı savunur. | Kör testte ilk sapmayı bulur, kanıta dayalı revizyonu yeniden doğrular. |

### Araç ağırlıkları

| Araç | Ağırlık |
| --- | ---: |
| Quiz | 25 |
| Alıştırmalar | 15 |
| Laboratuvar | 35 |
| Challenge | 15 |
| Mülakat ve yansıtma | 10 |

### Geçme kuralı

Öğrenci:

1. toplamda en az 80/100 almalı;
2. quiz ve laboratuvarı ayrı ayrı geçmeli;
3. her iki learning outcome için en az `3 — Yetkin` düzeyine ulaşmalı;
4. laboratuvarın kör test ve revizyon kanıtlarını teslim etmelidir.

Bir outcome yetersizse yalnız toplam puanı yükseltmek yeterli değildir. Hedefli
tekrar sonrası yeni senaryoyla yeniden kanıt gerekir.

## Validation

- Toplam araç ağırlığı 100'dür.
- Düzeyler gözlenebilir davranışlarla ayrılır.
- Öz değerlendirme tek başına geçme kanıtı değildir.
- Kanonik assessment kimliği yeniden sahiplenilmemiştir.

## References

- [Canonical Assessment Registry](../../../assessment.md)
- [Canonical Chapter Assessment](../../../assessments/01-assessment-01-what-is-programming.md)
- [Quiz](./quiz.md)
- [Laboratuvar](./lab.md)
- [Challenge](./debugging.md)
