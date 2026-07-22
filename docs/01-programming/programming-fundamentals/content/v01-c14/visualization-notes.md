---
document_type: "visualization-notes"
document_id: "V01-C14-VIS01"
title: "V01-C14 Visualization Notes"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
last_updated: "2026-07-23"
---

# Görselleştirme Notları

## Parameter–Argument Binding

```mermaid
flowchart LR
  A1[Argument 20] --> P1[Parameter price]
  A2[Argument 3] --> P2[Parameter quantity]
  P1 --> B[Function body]
  P2 --> B
  B --> R[Return 60]
  R --> C[Caller result]
```

Metin karşılığı: Argument ifadeleri değerlendirilir, konumlarına göre parameter'lara bağlanır; body sonucu caller'a return eder.

## Output Kanalları

```mermaid
flowchart TD
  F[Function] -->|return| C[Caller expression]
  F -->|console.log| O[Console / kullanıcı]
  F -->|mutation| S[Dış durum]
  F -->|throw| E[Failure path]
```

Metin karşılığı: Return, print, mutation ve failure farklı hedeflere gider; contract hepsini ayrı açıklar.

## Interface Refactoring

```mermaid
flowchart LR
  A[Caller ve contract envanteri] --> B[Input sınıflandırma]
  B --> C[Küçük interface değişikliği]
  C --> D[Caller migration]
  D --> E[Boundary ve regression testleri]
  E --> F{Davranış korundu mu?}
  F -- Hayır --> G[İlk ayrışmayı bul]
  G --> C
  F -- Evet --> H[Kararı kaydet]
```

## Tasarım Gereksinimleri

- Binding animasyonunda argument evaluation sırası numaralı olmalı.
- Primitive reassignment ve object mutation yan yana gösterilmeli.
- Default matrisi omitted, `undefined`, `null`, 0 ve false içermeli.
- Output kanalları renk dışında ok etiketi ve şekille ayrılmalı.
- Her Mermaid görselinin metin karşılığı bulunmalı.
