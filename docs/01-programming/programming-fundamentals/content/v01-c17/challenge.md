---
document_type: "challenge"
document_id: "V01-C17-CH01"
title: "One Pass or Multiple Passes?"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
learning_outcomes: ["V01-LO025", "V01-LO026"]
last_updated: "2026-07-23"
---

# İleri Görev — Tek Geçiş mi, Çoklu Geçiş mi?

## Problem

Bir milyon sensör ölçümünden geçerli adet, eksik adet, toplam, ortalama, minimum,
maksimum ve üç eşik grubunu üretin. Aynı sözleşmeyi iki tasarımla uygulayın:

1. Adlandırılmış `filter`, `map` ve toplulaştırma aşamalarından oluşan açık hat.
2. Tek dolaşmada bütün sonuçları üreten kontrollü biriktirici.

## Zorunlu Kanıt

- İki sürüm için aynı test seti.
- 100, 100.000 ve 1.000.000 öğelik gerçekçi veriyle en az 20 tekrar ölçümü.
- Isınma, Node.js sürümü ve donanım bilgisini içeren benchmark notu.
- Zaman, tepe bellek, okunabilirlik ve hata ayıklama karşılaştırması.
- En az bir profiler çıktısı veya ölçüm açıklaması.
- “Hangi sürüm hangi koşulda seçilir?” sorusuna 500 kelimelik karar kaydı.

## Kısıtlar

Kaynak dizi değiştirilmeyecek, geçersiz değerler sessizce atılmayacak ve ölçüm
sonucu önceden seçilmiş kararı savunmak için çarpıtılmayacaktır. Sonuçlar aynı değilse
performans kıyaslaması geçersizdir.
