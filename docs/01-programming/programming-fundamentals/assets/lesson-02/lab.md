---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-030"
supporting_document_type: "Compatibility Report"
title: "Mini Lab: Algoritma Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Lab Designer"
source_ids:
  - "V01-C04-SD-COMP-016"
  - "V01-C04-SD-COMP-005"
derived_from:
  - "../../content/lesson-02/lesson.md"
  - "../../research/lesson-02/research-packet.md"
x-production-unit: "lesson-02"
x-content-language: "tr-TR"
---

# Algoritma (Algorithm) Nedir? — Mini Lab

## Purpose

Ders hedefini gözlenebilir bir ürün ve kontrol listesiyle uygulamak.

## Scope

Mini Lab yalnız ilgili Lesson ve Research Packet kavramlarını kullanır.

**Terminoloji standardı:** problem örneği (Problem Instance), girdi (Input), çıktı (Output), ön koşul (Precondition), son koşul (Postcondition), doğruluk (Correctness), sonlanma (Termination), izleme (Trace), uygulama (Implementation), sezgisel yöntem (Heuristic) ve determinizm (Determinism). Sonraki kullanımlar Türkçedir.

## Ownership

Lab `V01-LO006` ile eşlenmiştir.

## Content

### Amaç

Bir algoritma adayını sözleşme, doğruluk, sonlanma ve izleme açısından incelemek.

### Görev

Boş olmayan listedeki en büyük değeri bulan yöntem için sözleşme ve üç girdilik izleme hazırla.

### Adımlar

1. Girdi, çıktı, ön koşul ve son koşulu yaz.
2. Açık ve sonlu adımları sırala.
3. Normal, tek öğeli sınır ve boş geçersiz girdi seç.
4. Geçerli girdilerde durum değişimini adım adım izle.
5. Sonlanma ve doğruluk hakkında ayrı sonuç yaz.

### Beklenen Çıktı

Sözleşmesi açık, sonlanması açıklanmış ve üç girdiyle izlenmiş algoritma incelemesi.

### Kontrol Listesi

- [ ] Dört sözleşme alanı var.
- [ ] Adımlar uygulanabilir.
- [ ] İlerleme ve çıkış açık.
- [ ] Üç girdi sınıfı ayrılmış.
- [ ] İzleme genel kanıt olarak sunulmamış.

### Yaygın Hatalar

- Boş listeyi geçerli kabul etmek.
- Yalnız bir örnek izlemek.
- Sonlanmayı doğruluk sonucu olarak yazmak.

### Learning Outcome Mapping

- `V01-LO006`

## Validation

- Lab Coverage: PASS.
- Beklenen çıktı ve kontrol listesi: Complete.
- Yeni terminoloji: 0.

## References

- [Lesson](../../content/lesson-02/lesson.md)
- [Research Packet](../../research/lesson-02/research-packet.md)
