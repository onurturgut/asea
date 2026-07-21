---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-037"
supporting_document_type: "Compatibility Report"
title: "Mini Lab: Pseudocode"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Lab Designer"
source_ids:
  - "V01-C04-SD-COMP-020"
  - "V01-C04-SD-COMP-010"
derived_from:
  - "../../content/lesson-04/lesson.md"
  - "../../research/lesson-04/research-packet.md"
x-production-unit: "lesson-04"
x-content-language: "tr-TR"
---

# Sözde Kod (Pseudocode) — Mini Lab

## Purpose

Ders hedefini gözlenebilir bir ürün ve kontrol listesiyle uygulamak.

## Scope

Mini Lab yalnız ilgili Lesson ve Research Packet kavramlarını kullanır.

**Terminoloji standardı:** anahtar sözcük (Keyword), atama (Assignment), koşul (Condition), seçim (Selection), yineleme (Iteration), yordam (Procedure), dönüş (Return), elle izleme (Dry Run) ve izleme tablosu (Trace Table). Sonraki kullanımlar Türkçedir.

## Ownership

Lab `V01-LO006` ile eşlenmiştir.

## Content

### Amaç

Açık blokları ve sonlanan döngüsü bulunan sözde kod oluşturup izlemek.

### Görev

En fazla üç PIN denemesine izin veren akışı sözde kodla göster ve üç girdi dizisiyle izle.

### Adımlar

1. Girdi ve beklenen çıktıları yaz.
2. Sayaç başlangıcını SET ile göster.
3. Koşul, başarı dönüşü ve başarısızlık ilerlemesini açık bloklarla yaz.
4. Başarı, son denemede başarı ve tüm denemelerde başarısızlık girdilerini seç.
5. Her girdi dizisi için izleme tablosu hazırla.

### Beklenen Çıktı

Tutarlı gösterimli, açık bloklu, sonlanan sözde kod ve üç izleme tablosu.

### Kontrol Listesi

- [ ] Gösterim kuralı açık.
- [ ] Atama eşitlikten ayrılmış.
- [ ] Sayaç ilerliyor.
- [ ] Bütün bloklar kapanıyor.
- [ ] Üç izleme tamam.

### Yaygın Hatalar

- END IF veya END WHILE yazmamak.
- Sayacı artırmamak.
- Başarı durumunda akışı sonlandırmamak.

### Learning Outcome Mapping

- `V01-LO006`

## Validation

- Lab Coverage: PASS.
- Beklenen çıktı ve kontrol listesi: Complete.
- Yeni terminoloji: 0.

## References

- [Lesson](../../content/lesson-04/lesson.md)
- [Research Packet](../../research/lesson-04/research-packet.md)
