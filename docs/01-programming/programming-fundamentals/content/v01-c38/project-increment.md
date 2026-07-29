---
document_type: "project-increment"
document_id: "V01-C38-PI01"
title: "V01-P02 Runtime Teslimat Artışı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
project_id: "V01-P02"
---

# V01-P02 Runtime Teslimat Artışı

## C08'den Alınan Parça

V01-P02 Veri Dönüşüm Konsolu, dış girdiyi ham biçimden hesaplama değerine
dönüştürüp çıktı üretir. C38 bu iş mantığını yeniden tasarlamaz.

## C38'de Eklenen Parça

- Node.js entry point.
- Komut satırı girdi sözleşmesi.
- Runtime sürüm kaydı.
- npm script ile ortak başlatma komutu.
- Beklenen çıktı dosyası.
- Çalışma klasörü ve hata teşhis belgesi.
- Normal/hata çıktısı ile exit status karar notu.

## Kabul Sözleşmesi

Başka bir öğrenci:

1. README'den ön koşulu öğrenir.
2. Doğru klasöre gider.
3. Tek bir açık komutla programı çalıştırır.
4. Argüman sırasını doğru kullanır.
5. Sonucu beklenen çıktıyla karşılaştırır.
6. Hata durumunda troubleshooting kaydından ilk kanıtı toplar.

## C29'a Devir

Şu açık sorunlar proje backlog'una eklenir:

- boş string ve eksik argüman ayrımı;
- `"85"` ile `85` karşılaştırması;
- `Number` dönüşümünün başarısızlık davranışı;
- `NaN` tespiti;
- açık ve örtük dönüşüm seçimi.

Bu maddeler C38'in eksikliği değil, C29'un planlanmış öğretim kapsamıdır.
