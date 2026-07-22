---
document_type: "challenge"
challenge_id: "V01-C07-CH01"
title: "Şaşırtıcı Sonuçları Açıklama"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
learning_outcomes: ["V01-LO011"]
language: "tr"
---

# İleri Görev — Şaşırtıcı Sonuçları Açıkla

## Amaç

Görevin yalnız sonuç üretmek değil; şaşırtıcı bir JavaScript ifadesini resmi semantik, açık
gruplama ve çalıştırılabilir kanıtla açıklamaktır.

## İncelenecek İfadeler

```js
"10" + 2 * 3
"10" - 2 + 3
1 < 2 < 3
3 > 2 > 1
0.1 + 0.2 === 0.3
NaN === NaN
[] + []
[] + {}
```

İlk altı ifade zorunludur. Son iki ifade ileri araştırmadır; nesnelerin ilkel değere dönüşümü
henüz chapter'ın ana hedefi olmadığı için resmi kaynak okuyarak çöz.

## Teslim Biçimi

Her ifade için:

1. ilk tahmin;
2. örtük gruplama;
3. işlenen değerlendirme sırası;
4. değer/tür/dönüşüm tablosu;
5. gerçek Node.js sonucu;
6. resmi kaynak bağlantısı;
7. üretim kodunda daha açık karşılık;
8. yanlış anlaşılma riski yazılmalıdır.

## Başarı Ölçütü

Altı zorunlu ifadenin tamamında ilk yanlış ara değer doğru teşhis edilmeli; öncelik ile
değerlendirme sırası karıştırılmamalı; önerilen yeniden yazım örtük dönüşümü görünür kılmalıdır.
