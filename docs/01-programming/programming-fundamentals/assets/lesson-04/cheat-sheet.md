---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-040"
supporting_document_type: "Compatibility Report"
title: "Cheat Sheet: Pseudocode"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Technical Writer"
source_ids:
  - "V01-C04-SD-COMP-020"
  - "V01-C04-SD-COMP-010"
derived_from:
  - "../../content/lesson-04/lesson.md"
  - "../../research/lesson-04/research-packet.md"
x-production-unit: "lesson-04"
x-content-language: "tr-TR"
---

# Sözde Kod (Pseudocode) — Hızlı Tekrar

## Purpose

Dersin tek sayfalık kavramsal tekrar görünümünü sağlamak.

## Scope

Yalnız Lesson ve Research Packet içinde tanımlanan bilgiler özetlenir.

**Terminoloji standardı:** anahtar sözcük (Keyword), atama (Assignment), koşul (Condition), seçim (Selection), yineleme (Iteration), yordam (Procedure), dönüş (Return), elle izleme (Dry Run) ve izleme tablosu (Trace Table). Sonraki kullanımlar Türkçedir.

## Ownership

Bu belge yeni bilgi veya terminoloji eklemez.

## Content

### Ana Kavramlar

- **Sözde kod:** Algoritma mantığını dil bağımsız ve çalıştırılma zorunluluğu olmadan ifade eden yapılandırılmış gösterim.
- **Anahtar sözcük:** Gösterimde işlemin rolünü belirten ayrılmış sözcük.
- **Atama:** Bir ada yeni değer bağlama işlemi.
- **Eşitlik:** İki değerin aynı olup olmadığını değerlendiren karşılaştırma.
- **Sıra:** Adımların belirlenen düzen içinde yürütülmesi.
- **Seçim:** Bir koşula göre alternatif yollardan birinin izlenmesi.
- **Yineleme:** Bir adım grubunun belirli koşulla tekrarlanması.
- **Yordam:** Belirli işi tanımlayan adlandırılmış adım grubu.

### Tanımlar

- **Dönüş:** Yordamın sonucunu çağıran akışa iletme.
- **Girinti:** Blok içeriğini görsel olarak belirginleştiren hizalama.
- **Blok sınırı:** Bir kontrol yapısının nerede başlayıp bittiğini gösteren işaret.
- **INPUT:** Sözde kodda veri alma rolünü gösteren anahtar sözcük.
- **OUTPUT:** Sözde kodda sonuç verme rolünü gösteren anahtar sözcük.
- **SET name TO:** Atamayı eşitlikten ayıran ders gösterimi.

### Kritik Notlar

- IF/ELSE — Koşula bağlı seçim yapısını gösteren anahtar sözcükler.
- WHILE — Koşul doğru kaldığı sürece yinelemeyi gösteren yapı.
- FOR EACH — Koleksiyondaki öğeleri sırayla işleyen yineleme gösterimi.
- Elle izleme — Sözde kodu seçilen girdiyle adım adım zihinsel yürütme.

### Yaygın Hatalar

- Sözde kodu çalıştırılabilir kod sanmak.
- Evrensel tek sözdizimi olduğunu düşünmek.
- Atama ile eşitliği karıştırmak.
- Döngü ilerlemesini görünmez bırakmak.

### Hatırlanması Gerekenler

- **İzleme tablosu:** Her adımda değişen değerleri kaydeden tablo.
- **İlerleme koşulu:** Döngünün çıkışa yaklaşmasını sağlayan durum değişimi.

## Validation

- Cheat Sheet Consistency: PASS.
- Learning Outcome Mapping: `V01-LO006`.

## References

- [Lesson](../../content/lesson-04/lesson.md)
- [Research Packet](../../research/lesson-04/research-packet.md)
