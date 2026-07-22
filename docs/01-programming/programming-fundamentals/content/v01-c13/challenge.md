---
document_type: "challenge"
document_id: "V01-C13-CH01"
title: "Detect a Contract Violation"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
learning_outcomes: ["V01-LO019", "V01-LO020"]
last_updated: "2026-07-23"
---

# İleri Görev — Contract Violation Tespit Et

Bir stok utility'si tasarlayın: ürün kodunu normalleştirme, kullanılabilir stok hesaplama, sipariş uygunluğunu belirleme ve özet biçimlendirme. Dört contract birbirine çağrılarla bağlanmalıdır.

## Teslimatlar

- Dört tam contract tablosu.
- Contract'lara bağlı en az 24 test.
- Üç seviyeli çağrı/dönüş izi.
- Bilerek eklenmiş bir caller precondition ihlali.
- Bilerek eklenmiş bir callee postcondition ihlali.
- İki ihlalin farklı kök neden analizi.
- Gizli girdi veya etki içermediğine dair denetim.
- AI önerisinin kabul/ret kaydı.

## Kısıtlar

Veritabanı, framework, sınıf, asenkron işlem veya henüz öğretilmemiş koleksiyon yöntemi kullanmayın. Basit değerler, koşullar, döngüler ve function declaration yeterlidir.
