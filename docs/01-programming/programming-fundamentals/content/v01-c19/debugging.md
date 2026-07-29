---
document_type: "debugging-guide"
document_id: "V01-C19-DBG01"
title: "V01-C19 Hata Ayıklama"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Hata Ayıklama

## En Küçük İz Yöntemi

Stack hatasında büyük girdiyi tekrar çalıştırmayın. Önce `0`, `1`, `2` gibi en küçük
girdilerde şu tabloyu doldurun:

| Call | Input | Base? | Next input | Progress | Return |
|---|---|---|---|---|---|

Tablodan önce beklenen davranışı tam cümleyle yazın. Sonra her denemede yalnız
bir hipotezi sınayın. Birden fazla satırı aynı anda değiştirmek hangi değişikliğin
hatayı giderdiğini belirsizleştirir.

## Vaka 1 — Eksik Base Case

**Belirti:** Her girdide çağrı sayısı büyür.  
**Kanıt:** En küçük geçerli girdide bile yeni çağrı yapılır.  
**Düzeltme:** Sözleşmedeki en küçük problemin doğrudan sonucunu tanımlayın.

## Vaka 2 — Yanlış Yön

```js
function countDown(n) {
  if (n === 0) return;
  countDown(n + 1);
}
```

`n` base case'ten uzaklaşır. İlk üç çağrı `3, 4, 5` olur. Düzeltme yalnız `- 1`
yazmak değildir; geçerli girdi sözleşmesinin negatif sayıları dışladığını da
belirtmektir.

## Vaka 3 — Eksik Return

**Belirti:** İçte doğru sayı loglanır, dış sonuç `undefined`.  
**Tanı:** Dönüş fazında her frame'in return sütununu doldurun.  
**Düzeltme:** Recursive sonucu `return` ile dış frame'e taşıyın.

## Vaka 4 — Bir Dal İlerlemiyor

İki recursive call içeren fonksiyonda yalnız bir argümanı kontrol etmek yetmez.
Her branch'in yeni girdisini ve progress ölçüsünü ayrı satırda yazın.

## Vaka 5 — Derinlik Hatası

Kod mantıksal olarak durabilir fakat pratik çağrı derinliği runtime stack sınırını
aşabilir. Girdi derinliği dışarıdan kontrol ediliyorsa iteratif çözüm, açık stack
veya güvenli derinlik limiti değerlendirin.

## Vaka 6 — Bütün Dalları Gezmeme

**Belirti:** Tek zincir veri doğru, iki veya daha fazla çocuk taşıyan veri eksik
sonuç üretir.  
**Kanıt:** Ziyaret edilen düğüm adlarını yazdırdığınızda ikinci çocuk görünmez.  
**Kök neden:** Recursive çağrı yalnız `children[0]` için yapılıyor.  
**En küçük karşı örnek:** İki yaprak çocuk taşıyan tek kök.  
**Düzeltme:** Bütün çocukları dolaşıp her dönüş sonucunu sözleşmedeki işlemle
birleştirmek.  
**Doğrulama:** Tek zincir testinin yanında iki dallı ve üç çocuklu test eklemek.

Bu vaka, “program durduysa recursive kod doğrudur” düşüncesini düzeltir.
Sonlanma gerekli fakat tek başına yeterli değildir.
