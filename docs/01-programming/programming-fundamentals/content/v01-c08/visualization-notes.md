---
document_type: "visualization-notes"
visualization_notes_id: "V01-C08-VIS01"
title: "Girdi, Çıktı ve Veri Dönüşümü — Görselleştirme Notları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
language: "tr"
---

# Görselleştirme Notları

## Pipeline Görseli

```mermaid
flowchart LR
    A["Dış girdi"] --> B[Receive]
    B --> C[Parse]
    C --> D{Validate}
    D -->|Geçerli| E[Normalize]
    D -->|Geçersiz| X[Alan-temelli hata]
    E --> F[Transform]
    F --> G[Format]
    G --> H[Output]
```

Metin alternatifi: Dış veri alınır, parse edilir ve doğrulanır; geçersizse alan hatası, geçerliyse
normalize/transform/format aşamalarından sonra çıktı üretilir.

## Temsil Merdiveni

```mermaid
flowchart TD
    A["Raw String: ' 24 '"] --> B["Parsed Number: 24"]
    B --> C["Validated age: 24"]
    C --> D["Domain record"]
    D --> E["Human: '24 yaş'"]
    D --> F["Machine: age=24"]
```

## Error Dalı

Bir stage timeline üzerinde parse failure, field validation failure ve record validation failure
farklı shapes ile gösterilmeli. Renk yanında icon ve metin label kullanılmalı.

## Etkileşim Önerisi

Öğrenci raw input'u seçer, her stage output'unu tahmin eder; “Çalıştır” sonrasında actual
type/value/error açılır. Cevap ilk tahminden önce görünmez.

## Erişilebilirlik

- Renk tek başına durum göstermemeli.
- Her node representation/type etiketi taşımalı.
- Diyagram altında metin alternatifi bulunmalı.
- Animasyon durdurulabilir ve klavyeyle adımlanabilir olmalı.
