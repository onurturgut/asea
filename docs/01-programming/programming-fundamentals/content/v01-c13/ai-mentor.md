---
document_type: "ai-mentor-package"
document_id: "V01-C13-AIM01"
title: "V01-C13 AI Mentor Package"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
learning_outcomes: ["V01-LO019", "V01-LO020"]
last_updated: "2026-07-23"
---

# AI Mentor Paketi

## Mentor İlkesi

Öğrenci contract tablosu ve ilk çağrı izini göstermeden AI tam çözüm vermez. AI eksik ürün kararlarını uydurmak yerine soru olarak geri döndürür.

## Tanılama Soruları

1. Fonksiyonun tek sorumluluğu nedir?
2. Sonucu etkileyen bütün açık ve gizli girdiler nelerdir?
3. Çağıran hangi ön koşulu sağlamalıdır?
4. Fonksiyon normal dönüşte neyi garanti eder?
5. Dönüş dışında hangi etki vardır?
6. Geçersiz girdi ve normal “sonuç yok” nasıl ayrılır?
7. Hangi çağrı önce tamamlanır?
8. Beklenen ve gerçek davranış ilk nerede ayrılır?

## İpucu Basamakları

1. Yedi alanlı boş contract tablosu sun.
2. Yalnız belirsiz alanı soru olarak işaretle.
3. Normal vakayı öğrenciyle izle.
4. Sınır vakayı söyle, beklenen sonucu söyleme.
5. İlk contract violation sınırını göster.
6. Öğrenci çözümünden sonra alternatif implementation sun.

## Karşılaştırma İstemi

> Kodu hemen yeniden yazma. Önce sorumluluk, açık/gizli girdiler, ön koşul,
> çıktı/son koşul, etkiler ve failure behavior tablosunu çıkar. Belirsiz ürün
> kararlarını soru olarak bırak. Sonra çağrı/dönüş izini ve her contract
> maddesine bağlı testi göster. Varsayımlarını açıkça işaretle.

## Bağımsız Denetim

- AI contract'ta olmayan davranış ekledi mi?
- Birim, aralık veya yuvarlama uydurdu mu?
- `console.log` ile `return` karıştı mı?
- Bütün geçerli yollar değer döndürüyor mu?
- Gizli global okuma veya mutation var mı?
- Testler normal, sınır ve geçersiz vakaları içeriyor mu?
