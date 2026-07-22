---
document_type: "visualization-notes"
document_id: "V01-C17-VN01"
title: "V01-C17 Visualization Notes"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
last_updated: "2026-07-23"
---

# Görselleştirme Notları

## 1. İndeks Şeridi

Yatay kutularda değerler, üstte indeksler, altta `length`; son indeks ile uzunluk
arasındaki bir fark vurgulanmalıdır. Boş dizi ayrı karede gösterilmelidir.

## 2. Dolaşma İmleci

`index`, işlenmiş önek ve henüz işlenmemiş son ek her turda farklı renkle gösterilir.
Değişmez: “İşlenmiş bölgenin toplamı `total` içindedir.”

```mermaid
flowchart LR
  S[Başlangıç index 0] --> C{index < length?}
  C -->|Evet| R[values index oku]
  R --> U[Birikmiş sonucu güncelle]
  U --> I[index + 1]
  I --> C
  C -->|Hayır| E[Sonucu döndür]
```

## 3. Mutation Tehlikesi

`[2,4,6,7]` üzerinde `2` silindiğinde `4` değerinin sola kaydığı, imlecin ise sağa
ilerlediği animasyonla gösterilmelidir.

## 4. map–filter–reduce

`map` için 1→1, `filter` için n→0..n, `reduce` için n→1 cardinality şeması
oluşturulmalıdır.

```mermaid
flowchart LR
  A[Kaynak Koleksiyon] --> M[map dönüşüm]
  M --> B[Aynı uzunlukta yeni koleksiyon]
  B --> F[filter seçim]
  F --> C[Seçilen öğeler]
  C --> R[reduce biriktirme]
  R --> D[Tek özet sonuç]
```

## 5. Tek ve Çok Geçiş

Çoklu geçişte üç açık hat, tek geçişte bir ortak biriktirici gösterilmeli; hız
üstünlüğü varsayılmamalı, ölçüm rozetiyle belirtilmelidir.

## Erişilebilirlik

Renk tek anlam taşıyıcısı olmayacak; etiket, desen ve sıra numarası kullanılacaktır.
Her görsel için metin alternatifi ve kodla aynı veri örneği sağlanacaktır.
