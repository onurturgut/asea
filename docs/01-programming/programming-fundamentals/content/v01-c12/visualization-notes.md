---
document_type: "visualization-notes"
document_id: "V01-C12-VIS01"
title: "V01-C12 Visualization Notes"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C12"
last_updated: "2026-07-23"
---

# Görselleştirme Notları

## İç İçe Karar Yolu

```mermaid
flowchart TD
  A[Başlangıç] --> B{Etkin mi?}
  B -- Hayır --> C[Inactive]
  B -- Evet --> D{Kapasite var mı?}
  D -- Hayır --> E[Full]
  D -- Evet --> F{Çakışma var mı?}
  F -- Evet --> G[Conflict]
  F -- Hayır --> H[Scheduled]
```

Metin karşılığı: Her iç karara yalnız önceki dış kararın “Evet” dalından ulaşılır; her ret dalı ayrı sonuç üretir.

## İç İçe Döngü

```mermaid
flowchart TD
  A[Dış döngüyü başlat] --> B{Dış koşul?}
  B -- Hayır --> Z[Bitir]
  B -- Evet --> C[İç döngüyü yeniden başlat]
  C --> D{İç koşul?}
  D -- Evet --> E[Aday çifti işle]
  E --> F[İç sayacı güncelle]
  F --> D
  D -- Hayır --> G[Dış sayacı güncelle]
  G --> B
```

Metin karşılığı: İç başlangıç, her dış turda yeniden yapılır. İç döngü bittiğinde dış güncelleme gerçekleşir.

## Davranış Koruma Akışı

```mermaid
flowchart LR
  A[Yolları çıkar] --> B[Mevcut davranışı testle]
  B --> C[Küçük dönüşüm]
  C --> D[Testleri yeniden çalıştır]
  D --> E{Eşdeğer mi?}
  E -- Hayır --> F[Geri al ve ilk ayrışmayı bul]
  F --> C
  E -- Evet --> G[Kararı kaydet]
```

## Tasarım Gereksinimleri

- Renk tek başına anlam taşımamalı; ok etiketleri kullanılmalı.
- Animasyonda dış ve iç tur sayaçları aynı anda görünmeli.
- `break` oku iç çıkışa, dış devam ayrı oka bağlanmalı.
- Guard sürümü ve derin sürüm aynı karar tablosuna bağlanmalı.
- Her görselin erişilebilir metin açıklaması bulunmalı.
