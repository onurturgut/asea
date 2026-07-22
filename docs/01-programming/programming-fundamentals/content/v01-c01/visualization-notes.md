---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-018"
supporting_document_type: "Compatibility Report"
title: "Görselleştirme Notları: Programlama Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Learning Experience Designer"
source_ids: ["V01-C01", "V01-LO001", "V01-LO002"]
derived_from: ["../../../chapters/01-what-is-programming.md", "../../content/lesson-01/visualization-notes.md"]
x-content-language: "tr-TR"
---

# Görselleştirme Notları: Programlama Nedir?

## Purpose

C01'in soyut kavramlarını dekoratif olmayan, öğrenme çıktısına bağlı ve
erişilebilir görsellerle desteklemek.

## Scope

Bu belge üretilecek diyagram, karşılaştırma kartı ve etkileşimli modellerin
tasarım sözleşmesidir; tamamlanmış SVG veya web bileşeni değildir.

## Ownership

- Görsel öğrenme modeli: Learning Experience Designer
- Teknik doğruluk: Subject-Matter Reviewer
- Erişilebilirlik: Accessibility Reviewer

## Content

### Görsel 1 — Niyetten doğrulamaya

```mermaid
flowchart LR
    A[İnsan ihtiyacı] --> B[Problem tanımı]
    B --> C[Algoritma]
    C --> D[Program]
    D --> E[Yürütme]
    E --> F[Çıktı]
    F --> G[Test ve doğruluk kararı]
```

Metin alternatifi: İhtiyaç önce ölçülebilir probleme, sonra çözüm yöntemine ve
program temsiline dönüşür; yürütme çıktı üretir, test çıktıyı gereksinimle
karşılaştırır.

### Görsel 2 — Kavram karşılaştırma kartları

Dört yan yana kart tasarlanır: algoritma, program, yürütme ve çıktı. Her kart
“nedir?”, “ne değildir?” ve “kanıtı nedir?” alanlarını taşır. Renk tek ayırıcı
olmaz; ikon, başlık ve biçim birlikte kullanılır.

### Görsel 3 — Belirsizlik merceği

“Dosyaları düzenle” ifadesinin üzerine açılan dallar gösterilir:

```mermaid
mindmap
  root((Dosyaları düzenle))
    Hangi dosyalar?
    Hangi sıralama?
    Yinelenenler?
    İsim çakışması?
    Hata davranışı?
    Başarı kanıtı?
```

### Etkileşim 1 — İnsan yorumlayıcı

Öğrenci bir talimatı kartlar hâlinde yazar. İkinci öğrenci yalnız kartları
uygular. Her sapmada talimat, varsayım veya sıra hatası işaretlenir. Web
sürümünde klavye ile kart taşıma ve metin tabanlı sıralama alternatifi gerekir.

### Etkileşim 2 — Çalışıyor mu, doğru mu?

Öğrenciye çalışan üç program ve üç farklı gereksinim gösterilir. Öğrenci
çalışma sonucu ile doğruluk kararını ayrı seçer ve gerekçesini test kanıtına
bağlar.

## Validation

- Her görsel en az bir öğrenme çıktısına bağlıdır.
- Her diyagramın metin alternatifi tanımlanmıştır.
- Bilgi yalnız renk veya hareketle aktarılmaz.
- Etkileşimler için klavye ve statik alternatif gereksinimi vardır.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Legacy Visualization Notes](../../content/lesson-01/visualization-notes.md)
- [C02 Future Work Register](../v01-c02/sonrasinda-yapilacaklar.txt)
