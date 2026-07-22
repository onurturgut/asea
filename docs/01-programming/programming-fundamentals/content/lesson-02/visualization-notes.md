---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-018"
supporting_document_type: "Compatibility Report"
title: "Visualization Notes: Algoritma Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Learning Experience Designer"
source_ids:
  - "V01-C04-SD-COMP-005"
derived_from:
  - "../../research/lesson-02/research-packet.md"
x-production-unit: "lesson-02"
x-content-language: "tr-TR"
---

# Algoritma (Algorithm) Nedir? — Görselleştirme Notları

**Terminoloji standardı:** problem örneği (Problem Instance), girdi (Input),
çıktı (Output), ön koşul (Precondition), son koşul (Postcondition), doğruluk
(Correctness), sonlanma (Termination), izleme (Trace), uygulama
(Implementation), sezgisel yöntem (Heuristic) ve determinizm (Determinism).
Sonraki kullanımlar Türkçedir.

## Purpose

Algoritma kavramını sözleşme, özellik ve kanıt ilişkileriyle görselleştirmek.

## Scope

Bu belge üretilecek görsellerin içerik notlarını verir; görsel varlık üretmez.

## Ownership

Notlar yalnız [Research Packet](../../research/lesson-02/research-packet.md)
içindeki doğrulanmış önerilere dayanır.

## Content

### Diyagram Önerileri

“Problem sözleşmesi → Algoritma → İzleme → Kanıt” akışı kullanılmalıdır. İkinci
bir diyagram, doğruluk ve sonlanmayı iki ayrı kapı olarak göstermelidir.

### Animasyon Önerileri

Bir liste girdisi üzerinde aday değerin adım adım güncellenmesi canlandırılmalı;
her karede işlenen değer, mevcut aday ve kalan veri görünmelidir.

### Zaman Çizelgesi Önerileri

Yatay sıra; sözleşmenin yazılması, aday algoritmanın kurulması, normal girdinin
izlenmesi, sınır girdinin izlenmesi ve karşı örnek incelemesini göstermelidir.

### Kavram Grafiği Önerileri

Merkezde algoritma; çevresinde girdi, çıktı, ön koşul, son koşul, doğruluk,
sonlanma, izleme, uygulama ve gösterim düğümleri bulunmalıdır.

### Kullanıcı Arayüzü Önerileri

Sol panelde sözleşme, orta panelde adımlar, sağ panelde seçili girdinin izleme
tablosu gösterilmelidir. Doğruluk ve sonlanma göstergeleri ayrı tutulmalıdır.

### Etkileşimli Öneriler

Öğrenci normal, sınır veya geçersiz girdi seçebilmeli; sistem yalnız adım ve
durum geçişlerini göstermeli, algoritmanın genel doğruluğunu otomatik olarak
ilan etmemelidir.

## Validation

- Görseller yeni kavram veya kanonik ilişki eklemez.
- Diyagram varlığı ya da değerlendirme üretilmemiştir.

## References

- [Research Packet](../../research/lesson-02/research-packet.md)
