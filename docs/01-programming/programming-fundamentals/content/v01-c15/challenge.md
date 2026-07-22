---
document_type: "challenge"
document_id: "V01-C15-CH01"
title: "Convert a Stateful Function to a Pure Core"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
last_updated: "2026-07-23"
---

# İleri Görev — Durumlu Fonksiyondan Saf Çekirdeğe

Bir teslimat ücreti fonksiyonu global bölge, güncel saat, rastgele kampanya ve
global çağrı sayacına bağlıdır. Kodu size hazır verilmeden sıfırdan kurun:

- Eski sürüm en az iki gizli okuma ve iki dış yazma içersin.
- Davranışı gösteren karakterizasyon testleri yazın.
- Kapsam haritası ve etki envanteri çıkarın.
- Saf çekirdek; mesafe, bölge kuralları, kampanya ve zaman değerlerini açıkça alsın.
- Etkili sınır gerçek bağımlılıkları toplasın ve sonucu uygulasın.
- Normal, sınır, geçersiz ve tekrar çalıştırma vakalarını test edin.
- En az bir etkinin neden sınırda kalması gerektiğini savunun.

## Kısıtlar

Framework, class, ağ, veritabanı veya henüz öğretilmeyen async yapı kullanmayın.
Global mutable durum çözümde bulunmamalı. Input nesneleri değiştirilemez. Her
sonuç yolu aynı result shape'i kullanmalıdır.

## Başarı Kanıtı

Teslim; çalışan kod, en az 12 test, üç kapsam çözümleme izi, etki envanteri,
Mermaid önce/sonra veri akışı ve 300–500 kelimelik mühendislik gerekçesi içerir.
