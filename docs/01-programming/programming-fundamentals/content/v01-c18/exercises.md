---
document_type: "exercises"
document_id: "V01-C18-EX01"
title: "V01-C18 Alıştırmalar"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C18"
learning_outcomes: ["V01-LO027", "V01-LO028"]
last_updated: "2026-07-29"
---

# Alıştırmalar

Her görevde önce kararınızı yazın, sonra kodlayın.

## 1 — Konumdan Ada

`["A-10", "Defter", 12, 3]` verisini adlandırılmış kayda dönüştürün. Her alanın
adını ve birimini gerekçelendirin. Aynı veri için dizinin uygun olabileceği tek bir
karşı örnek üretin.

## 2 — Yokluk Durumları

`discount`, `isActive` ve `note` alanları için eksik, `null`, `0`, `false` ve boş
metnin hangilerinin geçerli olduğunu tabloya yazın. Truthiness kullanmadan kontrol
fonksiyonları geliştirin.

## 3 — Alan Kararı

Bir kütüphane kitabı için aday alanlar: `id`, `title`, `author`, `pageCount`,
`borrowerPhone`, `available`, `borrowedAt`, `favoriteColor`. Gereksiz ve hassas
alanları ayırın; kalan her alan için gereksinim cümlesi yazın.

## 4 — Kimlik ve Eşitlik

Aynı `productId` değerine sahip fakat adları farklı iki kaydı karşılaştırın.
Referans eşitliği, kimlik eşitliği ve bütün alan eşitliğinin farklı cevaplarını
gösteren üç fonksiyon yazın.

## 5 — Değişmez Tablosu

Bir etkinlik kaydı için `startsAt`, `endsAt`, `capacity`, `registeredCount` alanlarını
modelleyin. En az iki tek-alan ve iki alanlar-arası değişmez; her biri için geçerli,
sınır ve ihlal örneği üretin.

## 6 — Construction Boundary

Ham envanter girdisini alan ve bütün hataları toplayan `createInventoryItem`
fonksiyonunu yazın. Başarılı sonuç `{ ok: true, value }`, hata sonucu
`{ ok: false, errors }` biçiminde olmalıdır.

## 7 — Model Evrimi

Eski kayıtlarda olmayan `supplierCode` alanını eklemek için üç stratejiyi
karşılaştırın: sahte varsayılan, opsiyonel geçiş dönemi, migration. Seçiminizi veri
doğruluğu ve geriye dönük uyumlulukla savunun.

## Öz Denetim

- Her alan bir iş sorusunu cevaplıyor mu?
- Yokluk ile geçersizlik ayrıldı mı?
- Başarılı her oluşturma bütün değişmezleri sağlıyor mu?
- Hatalar alan ve kararlı kod içeriyor mu?
- Testlerde normal, sınır ve çelişkili durum var mı?
