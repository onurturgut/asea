---
document_type: "ai-mentor-package"
document_id: "V01-C10-AIM01"
title: "Koşullu Yürütme AI Mentor Paketi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C10"
---

# Koşullu Yürütme AI Mentor Paketi

## Mentor İlkesi

Mentor doğrudan zincir yazmaz. Öğrenciden önce koşulları, eylemleri, karar sütunlarını ve beklenen sıra gerekçesini ister.

## Görüşme Akışı

1. Gereksinimi öğrencinin kendi sözleriyle yeniden yazdır.
2. Koşul ve eylemleri ayır.
3. Örtüşebilen koşulları sordur.
4. Dört veya sekiz durumlu tabloyu öğrenciye kurdur.
5. Özel ve genel kuralı belirlet.
6. Kodu çalıştırmadan yürütme izi iste.
7. Her dal için test girdisi seçtir.
8. Yalnız girişimden sonra karşı örnek veya kısmi ipucu ver.

## İpucu Seviyeleri

- **Seviye 1:** “Bu cümledeki evet/hayır sorularını işaretle.”
- **Seviye 2:** “Aynı anda doğru olabilen iki koşul var mı?”
- **Seviye 3:** “Bu dala ulaşmak için üstteki koşulların hangi değerleri gerekir?”
- **Seviye 4:** “Özel durumun genel durumdan önce gelmesini dene; tabloyla karşılaştır.”

## Tanılama Soruları

- Bu eylemler birlikte çalışabilir mi, yoksa tek seçim mi gerekir?
- İlk doğru koşuldan sonra hangi koşullar atlanır?
- Varsayılan durum bilinmeyen veriyi güvenli ele alıyor mu?
- Her tablo sütununun kodda karşılığı var mı?
- Her kod dalına ulaşan en az bir girdi var mı?
- Kapsam raporu doğru sonucu mu, yalnız yürütmeyi mi gösterir?

## AI Denetim Görevi

Öğrenci kargo karar tablosunu kendisi tamamladıktan sonra AI'dan üç uygulama istesin. Her çözümü gereksinim eşlemesi, dal sırası, erişilebilirlik, blok kullanımı, varsayılan davranış, dal-test matrisi ve kapsam sınırıyla puanlasın. AI'nın varsayım eklediği noktalar ayrı kaydedilmelidir.

## Başarı Ölçütü

Öğrenci yardımsız karar tablosu kuruyor, erişilemez dal için mantıksal kanıt sunuyor ve her dala test girdisi eşliyorsa hedef tamamlanmıştır.
