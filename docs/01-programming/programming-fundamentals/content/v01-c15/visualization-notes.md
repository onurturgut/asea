---
document_type: "visualization-notes"
document_id: "V01-C15-VIS01"
title: "V01-C15 Visualization Notes"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
last_updated: "2026-07-23"
---

# Görselleştirme Notları

## Görsel 1 — Sözcüksel Kapsam Zinciri

```mermaid
flowchart LR
    U[Adın kullanım noktası] --> B[Blok kapsamı]
    B -->|Bağ yok| F[Fonksiyon kapsamı]
    F -->|Bağ yok| M[Modül kapsamı]
    M -->|Bağ yok| G[Global kapsam]
    G -->|Bağ yok| E[Çözümlenemeyen ad]
    F -->|Bağ bulundu| S[Arama durur]
```

Metinsel alternatif: Arama kullanım noktasından en dar kapsama, oradan dış
kapsamlara ilerler; ilk eşleşmede durur.

## Görsel 2 — Shadowing ve Reassignment

```mermaid
flowchart TB
    A[Dış binding: rate = 0.2]
    A --> B{İç işlem}
    B -->|const rate = 0.1| C[Yeni iç binding: shadowing]
    B -->|rate = 0.1| D[Dış binding değişir: reassignment]
```

Renk dışında “yeni bağ” ve “aynı bağ” etiketleri kullanılmalıdır.

## Görsel 3 — Closure Yaşam Çizgisi

```mermaid
sequenceDiagram
    participant C as Caller
    participant F as createCounter
    participant B as count binding
    C->>F: createCounter()
    F->>B: count = 0
    F-->>C: increment function
    Note over F: Dış çağrı tamamlanır
    C->>B: increment erişimiyle count += 1
    B-->>C: 1
    C->>B: count += 1
    B-->>C: 2
```

Metin, fonksiyon çağrısının bitmesiyle bağa bütün erişimin bitmediğini açıklar.

## Görsel 4 — Etki Envanteri

```mermaid
flowchart LR
    I[Açık input] --> F[Function]
    H[Gizli okuma: saat/global] --> F
    F --> R[Return value]
    F --> W[Dış yazma: console/state/file]
```

Oklar `read`, `return` ve `write` olarak metinle etiketlenmelidir.

## Görsel 5 — Pure Core ve Effectful Boundary

```mermaid
flowchart LR
    E1[Dış dünya] -->|oku| B1[Effectful boundary]
    B1 -->|explicit values| C[Pure core]
    C -->|result| B1
    B1 -->|uygula/yaz| E1
```

Saf çekirdek başka renkle gösterilebilir; renk kullanılmasa da kutu adları
ilişkiyi anlatmalıdır.

## Görsel Üretim Kuralları

- Her görsel için numaralı okuma sırası ve metinsel alternatif üretin.
- Binding, value ve object şekillerini farklı ikon/etiketle ayırın.
- Scope kutularını gerçekten iç içe gösterin; call-stack oku kullanmayın.
- GC zamanını kesin bir “silindi” anıyla göstermeyin; “unreachable/eligible” yazın.
- Yan etkileri yalnız kırmızı “kötü” olarak kodlamayın; gerekli boundary etkilerini ayrı sınıflandırın.
