---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-PROJ-001"
supporting_document_type: "Project Plan"
title: "V01-C01 Contribution to V01-P01 Instruction Simulator"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Project Designer"
source_ids:
  - "V01-P01"
  - "V01-C01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "../../../projects/project-01-instruction-simulator.md"
  - "../../../chapters/01-what-is-programming.md"
  - "./lab.md"
---

# V01-C01 Mini Proje Katkısı — Talimat Sözleşmesi

## Purpose

`V01-P01 — Instruction Simulator` projesine başlamadan önce simülatörün kabul
edeceği talimatların açık, sıralı ve test edilebilir sözleşmesini üretmek.

## Scope

Bu katkı simülatör kodunu yazmaz. Talimat sözlüğü, girdi/çıktı sınırı, hata
durumları ve örnek programları tanımlar.

## Ownership

- Kanonik proje: `V01-P01`
- Chapter katkısı: `V01-C01`
- Değerlendirilen outcomes: `V01-LO001`, `V01-LO002`
- Proje sahibi: Project Designer

## Content

### Goal

Başka bir öğrencinin ek açıklama istemeden uygulayabileceği küçük bir talimat
dili sözleşmesi hazırlamak.

### Deliverables

1. En az beş talimat adı ve her talimatın tek eylemli tanımı.
2. Geçerli argümanlar ve geçersiz argüman davranışı.
3. Programın başlangıç ve bitiş koşulları.
4. En az sekiz talimatlı iki örnek program.
5. Normal, sınır ve geçersiz durum testleri.
6. Kör test sırasında bulunan sapmalar ve revize sözleşme.

### Acceptance criteria

- İki bağımsız uygulayıcı aynı talimat dizisinden aynı beklenen sonucu çıkarır.
- Her hata durumu gözlenebilir bir sonuçla tanımlıdır.
- Algoritma, program temsili ve yürütme açıklaması birbirinden ayrılır.
- Revizyonlar gözlem veya test kanıtına bağlanır.

## Validation

- Yeni proje ID'si oluşturulmadı.
- Katkı, kanonik `V01-P01` sınırını aşmaz.
- Her teslimat en az bir öğrenme çıktısına bağlanabilir.

## References

- [V01-P01 Instruction Simulator](../../../projects/project-01-instruction-simulator.md)
- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Laboratuvar](./lab.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
