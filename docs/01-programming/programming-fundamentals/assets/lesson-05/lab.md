---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-044"
supporting_document_type: "Compatibility Report"
title: "Mini Lab: Flowchart"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Lab Designer"
source_ids:
  - "V01-C04-SD-COMP-024"
  - "V01-C04-SD-COMP-015"
derived_from:
  - "../../content/lesson-05/lesson.md"
  - "../../research/lesson-05/research-packet.md"
x-production-unit: "lesson-05"
x-content-language: "tr-TR"
---

# Akış Şeması (Flowchart) — Mini Lab

## Purpose

Ders hedefini gözlenebilir bir ürün ve kontrol listesiyle uygulamak.

## Scope

Mini Lab yalnız ilgili Lesson ve Research Packet kavramlarını kullanır.

**Terminoloji standardı:** düğüm (Node), yönlü kenar (Directed Edge), başlangıç/bitiş (Terminal), işlem (Process), karar (Decision), dal (Branch), birleşme (Merge), döngü (Loop) ve sonlanma yolu (Termination Path). Sonraki kullanımlar Türkçedir.

## Ownership

Lab `V01-LO006` ile eşlenmiştir.

## Content

### Amaç

Karar ve döngü yolları açık, izlenebilir bir akış şeması tasarlamak.

### Görev

En fazla üç giriş denemesini; düğümlerin rollerini metinle etiketleyerek başarı,
yeniden deneme ve kilitli bitiş yollarıyla şemalaştır. Belirli geometrik şekil
bilgisi veya çizim aracı kullanımı beklenmez.

### Adımlar

1. Başlangıç/bitiş, girdi/çıktı, işlem ve karar rollerini metinle belirt.
2. Karar düğümlerini ve bütün dal etiketlerini yaz.
3. Başarısız denemede sayaç ilerlemesini göster.
4. Geri dönüş ve sonlanma yollarını bağla.
5. Başarılı, son denemede başarılı ve başarısız girdileri yol boyunca izle.

### Beklenen Çıktı

Rolleri metinle belirtilmiş, dalları etiketli ve üç girdiyle yolu doğrulanmış
akış şeması.

### Kontrol Listesi

- [ ] Başlangıç ve bitişler açık.
- [ ] Düğüm rolleri Lesson'daki anlamlara göre metinle belirtilmiş.
- [ ] Bütün karar dalları etiketli.
- [ ] Döngü ilerliyor ve sonlanıyor.
- [ ] Üç yol izlemesi tamam.

### Yaygın Hatalar

- Karar dallarını etiketsiz bırakmak.
- Geometrik şekli, düğümün anlamını açıklamak yerine kullanmak.
- Sayaç ilerlemesini atlamak.
- Kilitli bitiş yolunu göstermemek.

### Learning Outcome Mapping

- `V01-LO006`

## Validation

- Lab Coverage: PASS.
- Beklenen çıktı ve kontrol listesi: Complete.
- Yeni terminoloji: 0.

## References

- [Lesson](../../content/lesson-05/lesson.md)
- [Research Packet](../../research/lesson-05/research-packet.md)
