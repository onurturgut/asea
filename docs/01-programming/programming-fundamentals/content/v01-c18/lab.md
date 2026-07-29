---
document_type: "lab"
document_id: "V01-C18-L01"
title: "Model Inventory Records"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C18"
learning_outcomes: ["V01-LO027", "V01-LO028"]
estimated_time: "120-180 dakika"
last_updated: "2026-07-29"
---

# Lab — Envanter Kayıtlarını Modelle

## Senaryo

Küçük bir kırtasiye; ürün ekleme, stok ayırma ve yeniden sipariş raporu için
güvenilir bir kayıt modeline ihtiyaç duyuyor. Dış girdiler güvenilir değildir.

## Gereksinimler

- `code`, `name`, `stock`, `reservedStock`, `reorderLevel`, `status` alanlarını
  gerekçeli biçimde modelleyin.
- `status`, yalnız `active` veya `discontinued` olsun.
- Stok değerleri negatif olmayan tamsayı olsun.
- Ayrılmış stok toplam stoğu aşmasın.
- Üretimden kaldırılmış üründe yeni stok ayırma reddedilsin.
- Bütün hatalar tek çalışmada toplanıp kararlı kodlarla dönsün.

## Görevler

1. Alan ve değişmez karar tablolarını yazın.
2. `createInventoryItem` factory'sini geliştirin.
3. `reserveStock(item, quantity)` işlemini, kaynak kaydı değiştirmeden yazın.
4. Başarılı işlemden sonra bütün değişmezleri yeniden kontrol edin.
5. En az 14 test yazın: 4 normal, 4 sınır, 4 geçersiz, 2 mutation/kimlik testi.
6. Bir AI modelinden alternatif alan listesi isteyin; önerileri kabul/reddetme
   gerekçesiyle kayıt altına alın.

## Teslimat

Çalışan kod, testler, `field-decisions.md`, `invariants.md`, `ai-review.md` ve kısa
README. Test komutu tek satırla çalışmalıdır.

## Kabul Ölçütü

Toplam en az 75/100 ve rubriğin “Model/değişmez” ile “Test kanıtı” boyutlarının her
birinde en az %75 gerekir.
