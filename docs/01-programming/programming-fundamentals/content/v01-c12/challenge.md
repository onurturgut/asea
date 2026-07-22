---
document_type: "challenge"
document_id: "V01-C12-CH01"
title: "Cover Every Execution Path"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C12"
learning_outcomes: ["V01-LO018"]
last_updated: "2026-07-23"
---

# İleri Görev — Her Uygulanabilir Yolu Kapsa

Bir destek talebi yönlendiricisi tasarlayın. Talep etkin olmalı; önem düzeyi, müşteri planı, mesai durumu ve uygun ekip kombinasyonuna göre `reject`, `queue`, `escalate` veya `assign` sonucu üretmelidir. En az iki ekip ve üç vardiya iç içe dolaşılmalıdır.

## Teslimatlar

- Kuralları ve önceliği açıklayan karar tablosu.
- Teorik birleşimlerden uygulanamaz olanların gerekçesi.
- Bütün uygulanabilir sonuç sınıflarını kapsayan test matrisi.
- İlk çalışan iç içe sürüm.
- Davranışı koruyan sadeleştirilmiş sürüm.
- Önce/sonra sonuç, durum, sıra ve hata davranışı karşılaştırması.
- AI kullandıysanız önerinin reddedilen veya düzeltilen en az bir bölümü.

## Kısıtlar

Yeni framework, veritabanı veya asenkron işlem kullanmayın. Yalnız bu chapter ve ön koşullarındaki JavaScript yapılarıyla çalışın. Karmaşıklık puanı hedeflemek yerine kararların izlenebilirliğini ve test kanıtını optimize edin.
