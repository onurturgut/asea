---
document_type: "visualization-notes"
document_id: "V01-C11-VIS01"
title: "Yineleme ve Döngüler Görselleştirme Notları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C11"
---

# Yineleme ve Döngüler Görselleştirme Notları

## Temel Akış

```mermaid
flowchart TD
    A[Başlat] --> B{Koşul doğru mu?}
    B -->|Hayır| E[Çıkış]
    B -->|Evet| C[Gövde]
    C --> D[Durumu güncelle]
    D --> B
```

## `do...while` Farkı

```mermaid
flowchart TD
    A[Başlat] --> B[Gövde]
    B --> C[Durumu güncelle]
    C --> D{Devam mı?}
    D -->|Evet| B
    D -->|Hayır| E[Çıkış]
```

## Durum Animasyonu

Her turda `index`, `current`, `total` ve `remaining` ayrı kartlarda önce/sonra olarak gösterilmelidir. Renk tek bilgi taşıyıcısı olmamalı; ok ve metin etiketi bulunmalıdır.

## Sonlanma Görseli

`length - index` mesafesinin 4, 3, 2, 1, 0 olarak azaldığı basamak görseli; yanında düz metin açıklaması bulunmalıdır.
