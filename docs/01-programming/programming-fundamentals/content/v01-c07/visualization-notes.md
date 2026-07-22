---
document_type: "visualization-notes"
visualization_notes_id: "V01-C07-VIS01"
title: "Operatörler ve İfadeler — Görselleştirme Notları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
language: "tr"
---

# Görselleştirme Notları

## Görsel 1 — İfade Ağacı

```mermaid
flowchart TD
    A["+ : Number 23"] --> B["3 : Number"]
    A --> C["* : Number 20"]
    C --> D["4 : Number"]
    C --> E["5 : Number"]
```

Amaç: `3 + 4 * 5` ifadesinde önceliğin soldan sağa basit yürütme olmadığını göstermek.

## Görsel 2 — Tür Dönüşümü Akışı

```mermaid
flowchart LR
    A["String '6'"] --> C["+ birleştirme"]
    B["Number 8"] --> C
    C --> D["String '68'"]
    D --> E["- sayısal dönüşüm"]
    F["Number 3"] --> E
    E --> G["Number 65"]
```

## Görsel 3 — Öncelik ve Değerlendirme Sırası

İki paralel şerit kullanılmalı: üst şerit soldan sağa `A → B → C` çağrı zaman çizelgesini,
alt şerit `B * C → A + sonuç` işleç uygulama ağacını göstermeli. Böylece iki kavram aynı görselde
karışmadan karşılaştırılır.

## Görsel 4 — Expression Audit Table

Etkileşimli sürümde öğrenci kodu çalıştırmadan tahmin, tür ve kural hücrelerini doldurmalı;
“Çalıştır” sonrasında gerçek sonuç açılmalıdır. Cevap anahtarı ilk denemeden önce görünmemelidir.

## Erişilebilirlik

- Renk tek başına anlam taşımamalıdır.
- Number, String ve Boolean düğümleri metin etiketiyle belirtilmelidir.
- Mermaid diyagramlarının altında düz metin açıklaması bulunmalıdır.
- Animasyon durdurulabilir ve adım adım ilerletilebilir olmalıdır.
