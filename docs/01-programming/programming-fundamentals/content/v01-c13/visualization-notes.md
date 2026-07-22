---
document_type: "visualization-notes"
document_id: "V01-C13-VIS01"
title: "V01-C13 Visualization Notes"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
last_updated: "2026-07-23"
---

# Görselleştirme Notları

## Caller–Callee Contract

```mermaid
flowchart LR
  A[Caller] -->|Girdi ve ön koşul| B[Function]
  B -->|Çıktı ve son koşul| A
  B -.->|Belgelendirilmiş etki| C[Dış durum]
  B -->|Failure behavior| D[Hata veya kontrollü sonuç]
```

Metin karşılığı: Caller geçerli girdiyi sağlar; fonksiyon normal dönüşte sonucu garanti eder, etkisini ve başarısızlığı ayrıca bildirir.

## İç İçe Çağrı Yığını

```mermaid
sequenceDiagram
  participant M as Ana program
  participant A as addOne
  participant D as double
  M->>D: double(3)
  D-->>M: 6
  M->>A: addOne(6)
  A-->>M: 7
  Note over M: result = 7
```

Metin karşılığı: `double(3)` dış çağrının argümanını üretmek için önce tamamlanır; ardından `addOne(6)` çalışır.

## Contract-to-Test Akışı

```mermaid
flowchart TD
  A[Contract maddesi] --> B{Madde türü}
  B -->|Girdi/ön koşul| C[Geçerli ve ihlal vakası]
  B -->|Son koşul| D[Özellik doğrulaması]
  B -->|Etki| E[Önce/sonra durum]
  B -->|Failure| F[Hata türü veya kontrollü sonuç]
  C --> G[Test matrisi]
  D --> G
  E --> G
  F --> G
```

## Tasarım Gereksinimleri

- Renk tek başına anlam taşımamalı; oklar metinle etiketlenmeli.
- Her frame için girdi, yerel değer ve dönüş noktası görünmeli.
- Normal dönüş ile hata akışı farklı çizgi/etiketle ayrılmalı.
- `console.log` etkisi ile `return` oku ayrı gösterilmeli.
- Animasyonun yanında numaralı metin izi bulunmalı.
