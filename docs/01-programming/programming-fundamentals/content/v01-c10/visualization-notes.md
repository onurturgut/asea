---
document_type: "visualization-notes"
document_id: "V01-C10-VIS01"
title: "Koşullu Yürütme Görselleştirme Notları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C10"
---

# Koşullu Yürütme Görselleştirme Notları

## Seçim Akışı

```mermaid
flowchart TD
    A[Koşula ulaş] --> B{Koşul doğru mu?}
    B -->|Evet| C[Doğru dalı çalıştır]
    B -->|Hayır| D[Yanlış dalı çalıştır]
    C --> E[Ortak devam]
    D --> E
```

## Kargo Akışı

```mermaid
flowchart TD
    A{Adres geçerli mi?} -->|Hayır| B[Adresi düzelt]
    A -->|Evet| C{Yurt dışı mı?}
    C -->|Evet| D[Uluslararası kargo]
    C -->|Hayır| E{Hızlı mı?}
    E -->|Evet| F[Yurt içi hızlı]
    E -->|Hayır| G[Yurt içi standart]
```

## Erişilemez Dal Görseli

Genel koşulun bütün girdileri önce yakaladığı ve özel dalın giriş oku alamadığı karşılaştırmalı iki akış çizilmelidir.

## Erişilebilirlik

Renk tek işaret olmamalı; dal adları, Evet/Hayır etiketleri ve desenler kullanılmalıdır. Her Mermaid diyagramının altında düz metin yürütme sırası bulunmalıdır.
