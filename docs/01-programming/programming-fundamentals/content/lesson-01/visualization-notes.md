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

# Programlama (Programming) Nedir? — Görselleştirme Notları

**Terminoloji standardı:** program (Program), algoritma (Algorithm), talimat
(Instruction), hesaplama (Computation), kaynak kod (Source Code), çalışma ortamı
(Runtime Environment), yürütme (Execution) ve durum (State). Sonraki
kullanımlar Türkçedir.

## Purpose

`V01-C01` içeriğindeki ilişkileri görselleştirecek üretim önerilerini
tanımlamak.

## Scope

Notlar yalnız diyagram, animasyon, zaman çizelgesi, kavram grafiği, kullanıcı
arayüzü ve etkileşim tasarımı girdisidir; görsel varlık üretmez.

## Ownership

Öğrenme deneyimi tasarımcısı sunumu yönetir. Görseller yeni kavram veya
müfredat ilişkisi üretemez.

## Content

### Diyagram Önerileri

- **Ana akış:** Problem → Algoritma → Kaynak kod → Çalışma ortamı → Durum
  ve çıktı. Her düğüm için tek cümlelik metin alternatifi hazırlanmalı.
- **Sınır haritası:** Algoritma, program ve daha geniş yazılım kavramlarını ayrı
  kutularda; “uygulanır”, “çalıştırılır” ilişkileriyle gösterin.
- **Kesinlik hunisi:** Belirsiz insan niyetinden açık girdi, kural ve çıktıya
  daralan bir akış.
- **Bellekte tutulan program modeli:** Bellekteki talimatlar/veri ve bunları
  işleyen bir yürütme bileşeni; donanım ayrıntısına girilmemeli.

### Animasyon Önerileri

- “Dosyaları düzenle” cümlesindeki belirsiz parçaları sırayla vurgulayın;
  öğrenci her vurguda eksik bilgiyi görsün.
- Algoritma adımlarının kaynak gösterimine, ardından durum değişimine
  dönüşmesini aşamalı gösterin.
- Otomatik oynatma yerine ileri/geri kontrolü ve metin dökümü sunun.

### Timeline

Yalnız iki doğrulanmış dönüm noktası kullanılmalı:

- 1843: Ada Lovelace’ın Analytical Engine için yayımlanan stepwise procedures
  bağlamı; “ilk programcı” kesin hükmü kullanılmamalı.
- 1948: Manchester Baby’nin bellekte tutulan 17 talimatlı programı çalıştırması.

### Concept Graph

```text
problem -> algorithm -> program -> execution -> state/output
                    \-> source code -> runtime -/
```

Grafik, algoritma ile programı aynı düğümde birleştirmemelidir.

### UI Önerileri

- Sol panelde belirsiz talimat, sağ panelde giderek kesinleşen sürüm.
- Terimler için ilk kullanımda açılan kısa iki dilli tanım kartı.
- Akış düğümü seçildiğinde yalnız o aşamanın girdi/çıktı bilgisi gösterilsin.
- Renk tek başına anlam taşımamalı; ikon ve etiket birlikte kullanılmalı.

### İnteraktif Fikirler

- Öğrenci belirsiz cümlede eksik girdi/kural/çıktı parçalarını işaretler.
- Sürükle-bırak ile problem, algoritma, program ve yürütme kartlarını sıralar.
- Bir talimat değiştiğinde hangi gözlenebilir çıktının etkileneceğini seçer.
- Her etkileşim için klavye erişimi ve metin tabanlı alternatif sağlanır.

## Validation

- Paket dışı kavram: 0.
- Üretilen varlık: yok.
- Erişilebilirlik alternatifi: mevcut.
- Kanonik ilişki: korundu.

## References

- [Research Packet](../../research/lesson-01/research-packet.md)
