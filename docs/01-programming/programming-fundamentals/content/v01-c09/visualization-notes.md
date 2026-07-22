---
document_type: "visualization-notes"
document_id: "V01-C09-VIS01"
title: "Boolean Mantığı ve Doğruluk Görselleştirme Notları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
---

# Boolean Mantığı ve Doğruluk Görselleştirme Notları

## Görsel 1 — Karar Boru Hattı

```mermaid
flowchart LR
    A[Gerçek dünya gereksinimi] --> B[Önermeler]
    B --> C[Karşılaştırmalar]
    C --> D[Mantıksal operatörler]
    D --> E[Boolean sonuç]
    E --> F[Program akışı - C10]
```

Amaç, mantıksal sonucun ham veriden doğrudan çıkmadığını; gereksinim ve karşılaştırma katmanlarından geçtiğini göstermektir.

## Görsel 2 — VE ve VEYA Kapıları

İki yan yana kart kullanılmalı. VE kartında yalnız “doğru/doğru” satırı yeşil; VEYA kartında yalnız “yanlış/yanlış” satırı kırmızı gösterilmelidir. Renk tek bilgi taşıyıcısı olmamalı; metin ve simge de kullanılmalıdır.

## Görsel 3 — De Morgan Dönüşümü

```mermaid
flowchart TB
    A[Değil: A ve B] --> B[Olumsuzluğu bileşenlere dağıt]
    B --> C[A değil]
    B --> D[B değil]
    C --> E[Veya ile birleştir]
    D --> E
```

Görselin yanında `!(A && B) === (!A || !B)` gösterilmeli; bunun atama veya gerçek JavaScript eşitlik testi değil, öğretim amaçlı eşdeğerlik anlatımı olduğu açıklanmalıdır.

## Görsel 4 — Kısa Devre Akışı

```mermaid
flowchart TD
    A[Sol işleneni değerlendir] --> B{Operatör && mi?}
    B -->|Evet| C{Sol yanlış mı?}
    C -->|Evet| D[Sol işleneni döndür]
    C -->|Hayır| E[Sağ işleneni değerlendir ve döndür]
    B -->|Hayır: ||| F{Sol doğru mu?}
    F -->|Evet| G[Sol işleneni döndür]
    F -->|Hayır| H[Sağ işleneni değerlendir ve döndür]
```

## Görsel 5 — Üç Girdili Tablo Üretimi

A sütunu dört satırda, B iki satırda, C her satırda değişecek biçimde animasyon önerilir. Öğrenci “sonraki satır” düğmesiyle birleşimlerin hiçbirinin atlanmadığını gözlemlemelidir.

## Erişilebilirlik Notları

- Doğru/yanlış ayrımı yalnız yeşil/kırmızı renge bırakılmamalıdır.
- Tablolarda sütun başlıkları ekran okuyucular için açık olmalıdır.
- Animasyon durdurulabilir ve adım adım kullanılabilir olmalıdır.
- Kod ile görselde aynı değişken adları korunmalıdır.
