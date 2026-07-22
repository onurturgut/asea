---
document_type: "laboratory"
document_id: "V01-C15-L01"
title: "Diagnose Scope and Mutation"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
estimated_time: "90-120 minutes"
learning_outcomes: ["V01-LO022", "V01-LO023"]
last_updated: "2026-07-23"
---

# Laboratuvar — Kapsamı ve Mutation'ı Teşhis Et

## Senaryo

Bir terminal stok uygulamasında indirim sonucu test sırasına göre değişiyor.
Ekip; gölgeleme, global durum ve input mutation sorunlarını birbirine karıştırıyor.
Sizden davranışı kanıtla teşhis etmeniz ve saf çekirdek–etkili sınır tasarımına dönüştürmeniz isteniyor.

## Başlangıç Kodu

```js
let defaultDiscount = 0.05;
let processed = 0;

function priceOrder(order) {
  let total = 0;

  if (order.customer === "member") {
    const defaultDiscount = 0.15;
    order.discount = defaultDiscount;
  }

  for (const line of order.lines) {
    let total = line.price * line.quantity;
    console.log("line", total);
  }

  total = order.lines.reduce(
    (sum, line) => sum + line.price * line.quantity,
    0,
  );

  processed += 1;
  const discount = order.discount ?? defaultDiscount;
  return total * (1 - discount);
}
```

## Requirements

- Node.js ile ayrı bir çalışma klasörü oluşturun.
- Başlangıç kodunu değiştirmeden önce en az altı davranış testi yazın.
- Her `total` ve `defaultDiscount` için benzersiz bağ kimliği verin.
- Gizli okuma ve dış yazmaları etki envanterine kaydedin.
- Hesabı saf fonksiyona ayırın; input siparişini değiştirmeyin.
- Sayaç ve konsol davranışını açık etkili sınırda yönetin.
- Normal, üye, boş sepet, negatif fiyat ve tekrar çağrı vakalarını doğrulayın.

## Tasks

1. Global, fonksiyon, blok ve callback kapsamlarını gösteren diyagram üretin.
2. Üye dalındaki `defaultDiscount` kullanımını çözümleyin.
3. Döngü `total` bağının dış `total` üzerindeki etkisini kanıtlayın.
4. `processed`, `order.discount` ve konsol etkilerini sınıflandırın.
5. `calculateOrder(lines, discount)` saf çekirdeğini yazın.
6. Geçersiz satırları tutarlı result object ile raporlayın.
7. Etkili `processOrder` sınırını yeni çekirdeği çağıracak biçimde kurun.
8. Aynı input nesnesinin çağrıdan sonra değişmediğini test edin.
9. Aynı girdinin iki çekirdek çağrısında aynı sonucu verdiğini test edin.
10. Önce/sonra davranış ve tasarım farkını kısa karar kaydında açıklayın.

## Bonus Challenge

Gerçek zaman yerine `clock.now()` ve id üretimi için `idGenerator.next()`
bağımlılıklarını parametreyle sağlayın. Sabit test doubles kullanarak sınırın
deterministik testini yazın; framework veya mocking kütüphanesi eklemeyin.

## Deliverables

- `scope-map.md`
- `effect-inventory.md`
- `before-tests.js`
- `solution.js`
- `solution-tests.js`
- `decision-record.md`

## Evaluation Criteria

Kapsam ve gölgeleme izi %25, etki envanteri %20, saf çekirdek %20, boundary
tasarımı %15, test kanıtı %15, açıklama ve AI kullanım kaydı %5'tir. Toplam en
az 75 ve iki learning outcome'un her birinden en az %60 gerekir.
