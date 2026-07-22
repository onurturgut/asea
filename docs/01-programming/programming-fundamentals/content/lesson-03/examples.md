---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-007"
supporting_document_type: "Compatibility Report"
title: "Examples: Problem Çözme Yaklaşımı"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C03-SD-COMP-005"
derived_from:
  - "../../research/lesson-03/research-packet.md"
x-production-unit: "lesson-03"
x-content-language: "tr-TR"
---

# Problem Çözme (Problem Solving) Yaklaşımı — Örnekler

**Terminoloji standardı:** Problem tanımı (Problem Statement), gereksinim
(Requirement), kabul ölçütü (Acceptance Criterion), kısıt (Constraint), varsayım
(Assumption), sınır durum (Edge Case), parçalama (Decomposition) ve soyutlama
(Abstraction). Sonraki kullanımlar Türkçedir.

## Purpose

Belirsiz ihtiyaçtan ölçülebilir problem sözleşmesine geçişi örneklemek.

## Scope

Örnekler `V01-C03` ve `V01-LO005` kapsamıyla sınırlıdır.

## Ownership

Tüm örnekler [Research Packet](../../research/lesson-03/research-packet.md)
üzerinden türetilmiştir.

## Content

### Basit Örnekler

“Dosya yüklenmiyor” bir belirtidir. Problem tanımı; etkilenen kullanıcıyı,
desteklenen dosya türünü, boyut sınırını, beklenen sonucu ve başarısızlık
mesajını açıklar. “Yeni yükleme kütüphanesi kullanmak” ise çözüm fikridir.

### Gerçek Hayat Örnekleri

Randevu sistemi; kullanıcı, tarih ve saat dilimini girdi alır. Çalışma saatleri
ve çakışmama kuralı kısıttır. Kullanıcının saat diliminin bilindiği kabulü bir
varsayımdır. İlk ve son müsait saat sınır durumdur.

### Yanlış Örnekler

“Not uygulamasını daha modern, hızlı ve kolay yap.” Bu ifade paydaşı, ölçülebilir
başarıyı, girdiyi, çıktıyı ve kısıtları belirtmez. Çözümün doğrulanacağı bir
sözleşme sunmaz.

### Doğru Örnekler

Toplu taşıma gecikme problemi; belirli hattı kullanan yolcuya, eşik üzerindeki
gecikmeyi, yolculuk başlamadan önce seçilen kanaldan bildirmeyi hedefler.
Gecikme verisi girdi, zamanında gönderilen bildirim çıktıdır. Kanal erişimi
varsayım olarak kaydedilir ve kanıtla doğrulanır.

### Açıklamalar

Doğru örnek çözümü dikte etmez; ihtiyacın hangi koşullarda karşılandığını
gözlenebilir yapar. Gereksinim, kısıt ve varsayımı ayırmak, zorunlu sınırlarla
henüz doğrulanmamış kabullerin birbirine karışmasını engeller.

### Öğrenme Notları

- Her örnekte paydaşı ve başarı ölçütünü önce yazın.
- Sınır durum ile geçersiz girdiyi ayrı işaretleyin.
- Parçalara ayırırken aralarındaki veri ve sıra bağımlılığını koruyun.
- Varsayım günlüğünde her kabulün doğrulama durumunu görünür tutun.

## Validation

- Örnekler araştırma önerileriyle sınırlıdır.
- Yeni görev veya değerlendirme oluşturulmamıştır.

## References

- [Research Packet](../../research/lesson-03/research-packet.md)
