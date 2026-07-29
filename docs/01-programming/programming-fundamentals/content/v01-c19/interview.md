---
document_type: "interview"
document_id: "V01-C19-IV01"
title: "V01-C19 Mülakat Soruları"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Mülakat Soruları

Bu sorular tanım ezberini değil, adayın kodu izleme ve kararını
gerekçelendirme becerisini ölçer.

1. Özyinelemeyi “fonksiyonun kendini çağırması” tanımından daha güçlü biçimde açıklayın.
2. Base case ile geçersiz girdi kontrolü arasındaki fark nedir?
3. Progress measure nedir? `index + 1` örneğinde nasıl kurulur?
4. Bir call frame hangi bilgileri taşır?
5. İniş ve çözülme fazlarını küçük bir örnekle anlatın.
6. Base case olan kod neden yine de sonsuz çağrı yapabilir?
7. İki recursive branch için termination kanıtını nasıl kurarsınız?
8. Recursive sonucu döndürmeyi unutursanız ne olur?
9. Özyineleme ne zaman doğal, ne zaman gereksizdir?
10. Call stack sınırını tasarım kararına nasıl katarsınız?
11. Global accumulator neden risklidir?
12. AI üretimi recursive kodu çalıştırmadan nasıl incelersiniz?

Takip sorularında adaydan `n = 2` için gerçek trace, sınır örneği ve döngü alternatifi
istenmelidir.

## Uygulamalı Mülakat Görevi

Adaya şu kod verilir:

```js
function countItems(values, index = 0) {
  if (index === values.length) {
    return 0;
  }

  return 1 + countItems(values, index + 1);
}
```

Adaydan:

1. `countItems(["a", "b"])` için call/return izi çıkarması;
2. `values` ile `index` rollerini ve türlerini açıklaması;
3. progress measure'ı tanımlaması;
4. boş dizi davranışını gerekçelendirmesi;
5. döngülü alternatifi sözlü tasarlaması

istenir.

## Değerlendirme Ölçütü

| Düzey | Gözlenebilir davranış |
|---|---|
| Yetersiz | “Kendini çağırır” tanımında kalır; trace veya base/progress gerekçesi üretemez |
| Gelişiyor | Normal örneği izler fakat sınır veya dönüş fazında desteğe ihtiyaç duyar |
| Yeterli | Frame, base, progress ve dönüşü doğru açıklar; küçük kodu izler |
| Güçlü | Alternatif tasarımı, stack riskini ve geçersiz girdi sözleşmesini bağlama göre karşılaştırır |

Tam puan için adayın bütün terimleri İngilizce söylemesi gerekmez. Teknik
karşılığı tanıması beklenir; asıl kanıt mekanizmayı doğru açıklaması ve kod
üzerinde göstermesidir.
