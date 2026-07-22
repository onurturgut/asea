---
supporting_document_id: "V01-C05-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "V01-C05 Visualization Notes"
version: "0.1.0"
status: "Draft"
owner: "Learning Designer"
scope_id: "V01-C05"
source_document: "../../../chapters/05-degerler-ve-veri-turleri.md"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C05 Visualization Notes

## Diagram 1 — Value Model

```mermaid
flowchart LR
    A[Domain meaning] --> B[Value]
    B --> C[Data type rules]
    B --> D[Representation]
    E[Literal or external input] --> B
    C --> F[Valid operations]
    D --> G[Storage or transmission]
```

Metin alternatifi: domain anlamı program value’suna modellenir; value bir type’ın
kurallarına tabidir ve bir representation ile saklanır/iletilir. Literal veya external
input value üretme yollarıdır.

## Diagram 2 — Safe Conversion Boundary

```mermaid
flowchart TD
    A[Raw input] --> B{Source grammar valid?}
    B -- No --> X[Reject with reason]
    B -- Yes --> C{Domain meaning valid?}
    C -- No --> X
    C -- Yes --> D[Explicit conversion]
    D --> E{Range and precision valid?}
    E -- No --> X
    E -- Yes --> F[Normalized value]
    F --> G[Record evidence]
```

Metin alternatifi: ham girdi önce source grammar ve domain meaning açısından doğrulanır;
sonra açık dönüşüm uygulanır; result range/precision kontrolünden geçerse kabul edilir.

## Diagram 3 — Loss Types

```mermaid
flowchart LR
    A[Source value] --> B[Conversion]
    B --> C[Target value]
    B --> D{Information preserved?}
    D -- Numeric distinction lost --> E[Precision loss]
    D -- Domain structure lost --> F[Meaning loss]
    D -- Fully preserved --> G[Lossless for contract]
```

## Future Rich Visuals

- Interactive card: domain meaning/type/representation layers can be toggled.
- Safe integer slider: values around `2^53-1` show representability collisions.
- Conversion playground: input, parser choice, result and loss warning displayed together.
- Unicode explorer: glyph, code points and UTF-16 units shown without claiming grapheme simplicity.

All animations require pause, keyboard access, static alternative and reduced-motion mode.
