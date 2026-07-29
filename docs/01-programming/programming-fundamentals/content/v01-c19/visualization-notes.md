---
document_type: "visualization-notes"
document_id: "V01-C19-VS01"
title: "V01-C19 Görsel Tasarım Notları"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Görsel Tasarım Notları

## 0 — C18'den Gelen İhtiyaç

İki seviye için sabit yazılmış erişim kodunu ve üçüncü seviye eklendiğinde
hesaba katılmayan kaydı yan yana göster. Görsel şu soruyu cevaplamalıdır:
“Derinliği önceden bilmiyorsak aynı işlemi bütün seviyelere nasıl taşırız?”

## 1 — Dört Parçalı Recursion Kartı

Problem contract → base case → smaller problem → combine result akışını tek yatay
şemada göster. Progress measure ayrı sayaç etiketiyle her adımda azalsın.

## 2 — Call Stack Animasyonu

`sumTo(3)` için frame kartları aşağı doğru push, yukarı doğru pop olacak şekilde
animasyonlanır. Her kartta `n`, bekleyen işlem ve dönüş değeri bulunur. Öğrenci
“sonraki adım” düğmesiyle ilerler; otomatik oynatma ikincil olmalıdır.

## 3 — Hatalı İlerleme Karşılaştırması

Sol tarafta `3 → 2 → 1 → 0`, sağ tarafta `3 → 4 → 5 → ...`. Base case `0` sabit
işaretlenir. Renk dışında ok yönü ve “yaklaşıyor/uzaklaşıyor” etiketi kullanılır.

## 4 — Recursion ve Iteration

Aynı toplam problemi için call frame yığını ile tek accumulator zaman çizgisini
yan yana göster. Görsel “kazanan” ilan etmez; yapı ve kaynak trade-off'unu anlatır.

## 5 — V01-P05 Öğrenme Grubu Ağacı

`academyPlan` kaydındaki her group için bir düğüm çiz. Düğümde `title`,
`lessons` ve frame'in döndürdüğü toplam yer alsın. Aşağı iniş okları “çağrı”,
yukarı oklar “dönüş değeri” etiketi taşısın. `Kayıtlar -> 2`,
`Yapılandırılmış Veri -> 5`, kök `-> 11` sonuçlarını adım adım göster.

## Etkileşim ve Erişilebilirlik

- Öğrenci her görseli “önceki adım”, “sonraki adım” ve “başa dön” ile kontrol
  edebilmelidir.
- Otomatik animasyon varsayılan olmamalı; reduced-motion tercihi korunmalıdır.
- İniş ve çözülme yalnız renkle ayrılmamalı, metin etiketi ve ok yönü
  kullanılmalıdır.
- Her frame klavye odağı alabilmeli ve ekran okuyucu açıklaması `çağrı`,
  `parametre`, `bekleyen işlem`, `dönüş` sırasını izlemelidir.
- Görselin altında aynı bilginin tablo alternatifi bulunmalıdır.
- Kutular/klasörler benzetmesinin call stack'in gerçek teknik modeli olmadığı
  açıklanmalıdır.
