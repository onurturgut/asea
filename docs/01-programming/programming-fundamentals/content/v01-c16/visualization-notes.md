---
document_type: "visualization-notes"
document_id: "V01-C16-VIS01"
title: "V01-C16 Visualization Notes"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
last_updated: "2026-07-23"
---

# Görselleştirme Notları

## Görsel 1 — Responsibility to Function Map

```mermaid
flowchart LR
    R[Requirement] --> A[Parse responsibility]
    R --> B[Validate responsibility]
    R --> C[Calculate responsibility]
    R --> D[Present responsibility]
    A --> F1[parseRows]
    B --> F2[validateRows]
    C --> F3[calculateMetrics]
    D --> F4[formatReport]
```

## Görsel 2 — Pipeline ve Orchestration

```mermaid
flowchart LR
    I[Raw input] --> P[parseRows]
    P -->|parsed rows| V[validateRows]
    V -->|valid rows| C[calculateMetrics]
    C -->|metrics| F[formatReport]
    F -->|text| O[Output boundary]
    V -->|failure| E[Error result]
```

## Görsel 3 — Coupling Inventory

```mermaid
flowchart TB
    A[Orchestrator] -->|explicit input| B[Calculator]
    A -->|explicit result| C[Formatter]
    B -.->|hidden global state: remove| G[Global]
    C -.->|internal temporary: remove| B
```

Kesikli oklar undesirable coupling'i ve düzeltme hedefini gösterir; renk tek
anlam taşıyıcısı değildir.

## Görsel 4 — İki Alternative

```mermaid
flowchart LR
    subgraph A[Design A]
      A1[Validate] --> A2[Calculate] --> A3[Group] --> A4[Format]
    end
    subgraph B[Design B]
      B1[Analyze in one pass] --> B2[Format]
    end
```

Altında function count değil, change scenario ve test isolation tablosu bulunmalıdır.

## Görsel Kuralları

- Her arrow data veya failure contract adı taşımalı.
- Orchestrator ile domain functions farklı shapes ve text labels kullanmalı.
- Diagram yanında numbered textual traversal bulunmalı.
- “High cohesion/low coupling” yalnız renkli skorla gösterilmemeli; evidence yazılmalı.
