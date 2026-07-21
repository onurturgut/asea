---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-047"
supporting_document_type: "Compatibility Report"
title: "Cheat Sheet: Flowchart"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Technical Writer"
source_ids:
  - "V01-C04-SD-COMP-024"
  - "V01-C04-SD-COMP-015"
derived_from:
  - "../../content/lesson-05/lesson.md"
  - "../../research/lesson-05/research-packet.md"
x-production-unit: "lesson-05"
x-content-language: "tr-TR"
---

# Akış Şeması (Flowchart) — Hızlı Tekrar

## Purpose

Dersin tek sayfalık kavramsal tekrar görünümünü sağlamak.

## Scope

Yalnız Lesson ve Research Packet içinde tanımlanan bilgiler özetlenir.

**Terminoloji standardı:** düğüm (Node), yönlü kenar (Directed Edge), başlangıç/bitiş (Terminal), işlem (Process), karar (Decision), dal (Branch), birleşme (Merge), döngü (Loop) ve sonlanma yolu (Termination Path). Sonraki kullanımlar Türkçedir.

## Ownership

Bu belge yeni bilgi veya terminoloji eklemez.

## Content

### Ana Kavramlar

- **Akış şeması:** Algoritma işlemlerini ve kontrol yönünü anlamsal şekiller ve yönlü kenarlarla gösteren temsil.
- **Düğüm:** Şemadaki anlamlı nokta.
- **Yönlü kenar:** Kontrolün izlediği yönü gösteren bağlantı.
- **Başlangıç/bitiş:** Akışın giriş veya çıkış noktasını gösteren terminal.
- **İşlem:** Bir dönüşüm veya adımı gösteren düğüm rolü.
- **Karar:** Koşula göre yolların ayrıldığı düğüm rolü.
- **Girdi/çıktı:** Alınan veri veya üretilen sonucu gösteren rol.
- **Dal:** Bir karar sonucunda seçilen yol.

### Tanımlar

- **Dal etiketi:** Karar sonucunun hangi kenara ait olduğunu açıklayan ifade.
- **Birleşme:** Ayrılmış yolların yeniden buluştuğu nokta.
- **Döngü:** Kontrollü biçimde önceki adıma dönen yol.
- **Geri dönüş kenarı:** Döngüde kontrolü önceki adıma taşıyan bağlantı.
- **İlerleme adımı:** Döngüyü çıkış koşuluna yaklaştıran durum değişimi.
- **Sonlanma yolu:** Akışın bitiş düğümüne ulaşmasını sağlayan yol.

### Kritik Notlar

- Bağlayıcı — Ayrı şema bölümleri arasındaki ilişkiyi gösteren öğe.
- Yol izleme — Bir girdinin düğüm ve kenarlarda izlediği sırayı takip etme.
- Gösterim eşdeğerliği — Farklı temsillerin aynı kontrol akışını anlatması.
- Görsel inceleme — Oluşturulan şemanın anlam ve okunabilirlik açısından kontrolü.

### Yaygın Hatalar

- Her diyagramı akış şeması saymak.
- Şekilleri dekorasyon olarak görmek.
- Karar dallarını etiketsiz bırakmak.
- Çizim aracının çıktısını doğruluk kanıtı saymak.

### Hatırlanması Gerekenler

- **Veri akış diyagramı:** Akış şemasıyla aynı olmayan, farklı ilişkileri gösteren diyagram türü.
- **Çizim aracı:** Şemayı oluşturan fakat anlam otoritesi olmayan araç.

## Validation

- Cheat Sheet Consistency: PASS.
- Learning Outcome Mapping: `V01-LO006`.

## References

- [Lesson](../../content/lesson-05/lesson.md)
- [Research Packet](../../research/lesson-05/research-packet.md)
