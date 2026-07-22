---
document_type: "chapter-summary"
document_id: "V01-C09-SM01"
title: "Boolean Mantığı ve Doğruluk — Hızlı Tekrar"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
---

# Boolean Mantığı ve Doğruluk — Hızlı Tekrar

## Temel Model

Karşılaştırmalar `true` veya `false` üretir. `&&` bütün koşulların, `||` en az bir koşulun sağlanmasını, `!` ise tersini temsil eder.

| İşlem | Doğru olma koşulu |
|---|---|
| `A && B` | A ve B birlikte doğru |
| `A \|\| B` | A veya B'den en az biri doğru |
| `!A` | A yanlış |

## Doğruluk Tablosu

`n` bağımsız girdi `2^n` satır üretir. Karmaşık ifadede her alt ifade için ara sütun oluştur. Eşdeğerlik için sonuç sütunlarının bütün satırlarda aynı olması gerekir.

## De Morgan

- `!(A && B)` → `!A || !B`
- `!(A || B)` → `!A && !B`

## JavaScript Sınırı

`0`, `""`, `null`, `undefined`, `NaN` ve `false` yanlış kabul edilir. Boş olmayan metin, dizi ve nesne doğru kabul edilir. `&&` ve `||` her zaman Boolean değil, işlenen döndürebilir. Sonuç belirlendiğinde sağ taraf çalışmaz.

## İnceleme Kontrol Listesi

- Gereksinim açık önermelere ayrıldı mı?
- VE ve VEYA seçimi doğal dilde gerekçelendirildi mi?
- Parantez iş kuralını gösteriyor mu?
- Değişken adları soru gibi okunuyor mu?
- Sınır ve karışık durumlar test edildi mi?
- Sonucun türü biliniyor mu?
- Kısa devre yan etkiyi gizliyor mu?
- İstemci kontrolü yanlışlıkla güvenlik sayılıyor mu?
- AI çıktısı tabloyla doğrulandı mı?

## Sonraki Bölüme Geçiş

Bu bölüm kararın sonucunu üretmeyi öğretti. C10, bu Boolean sonucun programın hangi yolu çalıştıracağını nasıl belirlediğini ele alacaktır.
