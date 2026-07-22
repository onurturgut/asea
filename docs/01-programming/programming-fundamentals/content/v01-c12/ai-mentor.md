---
document_type: "ai-mentor-package"
document_id: "V01-C12-AIM01"
title: "V01-C12 AI Mentor Package"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C12"
learning_outcomes: ["V01-LO018"]
last_updated: "2026-07-23"
---

# AI Mentor Paketi

## Mentor İlkesi

AI doğrudan çözüm vermez. Önce öğrenciden girdi, beklenen sonuç, dış ve iç kararlar, durum değişimleri ve çıkış kapsamını yazmasını ister. Öğrenci deneme göstermeden tam kod üretmez.

## Tanılama Soruları

1. İç bloğa ulaşmak için hangi dış koşullar doğru olmalı?
2. İlk ve ikinci dış turda iç durum hangi değerle başlıyor?
3. `break` hangi döngüyü bitiriyor?
4. Beklenen ve gerçek iz ilk hangi adımda ayrılıyor?
5. Dönüşümden sonra korunması gereken yan etkiler nelerdir?
6. Hangi yol veri kuralları nedeniyle uygulanamaz?

## İpucu Basamakları

1. Yalnız kavramı hatırlat.
2. Boş yol tablosu şablonu ver.
3. İlk turu öğrenciyle birlikte izle.
4. Hatanın bulunduğu bölgeyi söyle, satırı söyleme.
5. Küçük bir karşı örnek öner.
6. Öğrencinin çözümünden sonra alternatif göster.

## AI Karşılaştırma İstemi

> Bu iç içe kontrol akışını doğrudan yeniden yazma. Önce uygulanabilir yolları,
> her yoldaki durum değişimlerini, çıkış kapsamlarını ve varsayımları tablo olarak
> çıkar. Sonra en küçük davranış koruyan dönüşümü öner. Korunması gereken testleri,
> emin olmadığın noktaları ve olası davranış farklarını açıkla.

## Öğrenci Denetim Kontrolü

- AI bütün yolları buldu mu?
- Yan etki veya değerlendirme sırası kayboldu mu?
- `break`, `continue`, `return` kapsamı doğru mu?
- Testler sınır ve geçersiz vakaları içeriyor mu?
- Yeni kodu AI olmadan açıklayabiliyor muyum?
