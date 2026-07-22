---
document_type: "laboratory"
document_id: "V01-C12-L01"
title: "Simplify a Multi-Rule Scheduler"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C12"
learning_outcomes: ["V01-LO018"]
estimated_time: "75 dakika"
last_updated: "2026-07-23"
---

# Laboratuvar — Çok Kurallı Zamanlayıcıyı Sadeleştirme

## Objective

İç içe karar ve döngü yollarını çıkarmak, mevcut davranışı testle sabitlemek, gereksiz iç içeliği azaltmak ve dönüşümün davranışını kanıtlamak.

## Requirements

- Node.js ve terminal.
- Ana dersin uygulamalı görevindeki başlangıç kodu.
- En az altı satırlık karar/yol tablosu.
- Test çalıştırmak için basit `assertEqual` yardımcısı.

## Tasks

1. Pasif, kapasitesiz, boş gün, boş slot, ilk aday uygun, sonraki aday uygun ve bütün adaylar dolu vakalarını yazın.
2. Başlangıç kodunu her vaka için izleyin; erişilemez veya yinelenen kararları işaretleyin.
3. “İlk uygun aday” gereksinimi ile “son uygun aday” mevcut davranışı arasındaki hatayı tekrar üretin.
4. Mevcut doğru davranışları karakterizasyon testleriyle sabitleyin.
5. Pasif ve kapasitesiz vakaları guard clause ile ayırın.
6. Aday ve rezervasyon karşılaştırmasını anlamlı adlarla görünür yapın.
7. Çakışma bulunduğunda rezervasyon döngüsünden çıkın.
8. İlk uygun aday bulunduğunda bütün aramayı doğru kapsamda bitirin.
9. En az sekiz testi çalıştırın ve sonuçları tabloya ekleyin.
10. Önce/sonra sürümleri yol, durum ve çıkış kapsamı bakımından karşılaştırın.

## Bonus Challenge

Bir günün bütün slotları dolu olduğunda sonraki güne geçildiğini kanıtlayan bir iz üretin. Ardından yinelenen rezervasyonların sonucu değiştirmediğini test edin. Performans iddiası vermeden, hangi gereksiz taramaların kaldırıldığını sayaçla ölçün.

## Evaluation Criteria

- Yol listesi ve durum izi: 25 puan.
- Teknik doğruluk ve çıkış kapsamı: 25 puan.
- Davranış koruma/hata düzeltme ayrımı: 20 puan.
- Normal, sınır, geçersiz testler: 20 puan.
- Açıklama, isimlendirme ve AI kullanım beyanı: 10 puan.

75 ve üzeri başarıdır; teknik doğruluk bölümünden en az 15 puan zorunludur.
