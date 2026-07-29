---
document_type: "debugging-guide"
document_id: "V01-C18-DBG01"
title: "V01-C18 Hata Ayıklama"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C18"
last_updated: "2026-07-29"
---

# Hata Ayıklama

## Vaka 1 — Sıfır stok kayboluyor

```js
if (!input.stock) {
  errors.push("stock gerekli");
}
```

**Belirti:** `stock: 0` reddedilir.  
**Neden:** Truthiness, yokluk ile geçerli sıfırı birleştirir.  
**Kanıt:** `0`, `undefined`, `null` ve `""` için ayrı test çalıştırın.  
**Düzeltme:** Özellik varlığını ve sayı kuralını ayrı denetleyin.

## Vaka 2 — Aynı ürün bulunamıyor

```js
const target = { id: "P-1" };
items.includes(target);
```

**Belirti:** Aynı `id` değerine rağmen sonuç `false`.  
**Neden:** Nesne referansları farklıdır.  
**Kanıt:** `target === items[0]` ve `target.id === items[0].id` sonuçlarını karşılaştırın.  
**Düzeltme:** Arama amacına uygun kimlik karşılaştırması kullanın.

## Vaka 3 — Türetilmiş toplam eski

**Belirti:** Adet değişir, `totalInCents` değişmez.  
**Neden:** İki doğruluk kaynağı vardır.  
**Kanıt:** Güncelleme öncesi ve sonrası `unitPriceInCents * quantity` değişmezini
kontrol edin.  
**Düzeltme:** Toplamı okumada hesaplayın veya tek atomik güncelleme sınırı kurun.

## Vaka 4 — Hata bulunamıyor

**Belirti:** Factory yalnız `false` döndürür.  
**Neden:** Hata sözleşmesi yoktur.  
**Kanıt:** Çağıranın hangi alanı düzelteceğini belirleyip belirleyemediğini sorun.  
**Düzeltme:** `{ field, code, message }` biçiminde yapılandırılmış hata döndürün;
hassas girdiyi mesaja koymayın.

## Tanı Sırası

1. Ham girdiyi ve beklenen iş anlamını yazın.
2. Özellik varlığı, tür ve aralık kontrollerini ayırın.
3. Alanlar-arası değişmezleri tek tek değerlendirin.
4. Normal durumdan önce en küçük hata örneğini yeniden üretin.
5. Düzeltmeden sonra ihlal testinin başarısız, geçerli testin başarılı olduğunu görün.
