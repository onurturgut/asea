---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-008"
supporting_document_type: "Compatibility Report"
title: "Visualization Notes: Programlama Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Learning Experience Designer"
source_ids:
  - "V01-C01-SD-COMP-005"
derived_from:
  - "../../research/lesson-01/research-packet.md"
x-production-unit: "lesson-01"
x-canonical-lesson-id: "V01-C01"
---

# Visualization Notes: Programlama Nedir?

## Purpose

`V01-C01` içeriğindeki ilişkileri görselleştirecek üretim önerilerini
tanımlamak.

## Scope

Notlar yalnız diagram, animation, timeline, concept graph, UI ve interaction
tasarım girdisidir; görsel asset üretmez.

## Ownership

Learning Experience Designer presentation’ı yönetir. Görseller yeni kavram veya
curriculum relationship üretemez.

## Content

### Diyagram Önerileri

- **Ana pipeline:** Problem → Algoritma → Kaynak kod → Çalışma ortamı → Durum
  ve çıktı. Her node için tek cümlelik text alternative hazırlanmalı.
- **Boundary map:** Algoritma, program ve daha geniş yazılım kavramlarını ayrı
  kutularda; “uygulanır”, “çalıştırılır” ilişkileriyle gösterin.
- **Precision funnel:** Belirsiz insan niyetinden açık input, rule ve output’a
  daralan bir akış.
- **Stored-program model:** Bellekte instructions/data ve bunları işleyen bir
  execution bileşeni; hardware ayrıntısına girilmemeli.

### Animasyon Önerileri

- “Dosyaları düzenle” cümlesindeki belirsiz parçaları sırayla vurgulayın;
  öğrenci her vurguda eksik bilgiyi görsün.
- Algorithm adımlarının source representation’a, ardından state değişimine
  dönüşmesini aşamalı gösterin.
- Otomatik oynatma yerine ileri/geri kontrolü ve text transcript sunun.

### Timeline

Yalnız iki doğrulanmış milestone kullanılmalı:

- 1843: Ada Lovelace’ın Analytical Engine için yayımlanan stepwise procedures
  bağlamı; “ilk programcı” kesin hükmü kullanılmamalı.
- 1948: Manchester Baby’nin bellekte tutulan 17 talimatlı programı çalıştırması.

### Concept Graph

```text
problem -> algorithm -> program -> execution -> state/output
                    \-> source code -> runtime -/
```

Graph, algorithm ile programı aynı node’da birleştirmemelidir.

### UI Önerileri

- Sol panelde belirsiz talimat, sağ panelde giderek kesinleşen sürüm.
- Terimler için ilk kullanımdan açılan kısa bilingual definition card.
- Pipeline node seçildiğinde yalnız o aşamanın input/output bilgisi gösterilsin.
- Renk tek başına anlam taşımamalı; ikon ve label birlikte kullanılmalı.

### İnteraktif Fikirler

- Öğrenci belirsiz cümlede eksik input/rule/output parçalarını işaretler.
- Sürükle-bırak ile problem, algorithm, program, execution kartlarını sıralar.
- Bir talimat değiştiğinde hangi observable output’un etkileneceğini seçer.
- Her interaction için klavye erişimi ve metin tabanlı alternatif sağlanır.

## Validation

- Packet dışı concept: 0.
- Asset generated: no.
- Accessibility fallback specified: yes.
- Canonical relationship preserved: yes.

## References

- [Research Packet](../../research/lesson-01/research-packet.md)
