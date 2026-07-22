---
document_type: "chapter-summary"
document_id: "V01-C10-SM01"
title: "Koşullu Yürütme — Hızlı Tekrar"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C10"
---

# Koşullu Yürütme — Hızlı Tekrar

## Temel Model

Koşul değerlendirilir, uygun dal çalışır, program ortak devam noktasına gider. Zincirde ilk doğru dal kazanır. Özel koşul genel koşuldan önce gelmelidir.

## Yapı Seçimi

- Tek ek eylem: `if`
- İki birbirini dışlayan sonuç: `if...else`
- İlk eşleşen çoklu sınıf: `else if`
- Birlikte çalışabilen kurallar: bağımsız `if`
- Tek değerin sabit seçenekleri: gerekçeli `switch`

## Karar Kanıtı

Karar tablosu koşul birleşimlerini eylemlere bağlar. Her uygulanabilir sütun bir kod dalına ve test girdisine eşlenmelidir. Erişilemez dal için hiçbir girdi yoktur.

## Test Sınırı

Dal kapsamı çalıştırılan dal oranıdır; doğru gereksinim, güçlü assertion veya bütün sınırlar anlamına gelmez.

## Sonraki Bölüm

C11, koşullu kararların tekrarlanan yürütmede sayaç, biriktirici, sentinel ve sonlanma koşullarıyla nasıl çalıştığını öğretir.
