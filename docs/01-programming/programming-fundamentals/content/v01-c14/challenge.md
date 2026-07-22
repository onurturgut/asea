---
document_type: "challenge"
document_id: "V01-C14-CH01"
title: "Replace Hidden Output with Return Values"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
learning_outcomes: ["V01-LO021"]
last_updated: "2026-07-23"
---

# İleri Görev — Hidden Output'u Return Value ile Değiştir

Global `latestInvoice`, `latestTax` ve `latestErrors` değerlerine yazan; sekiz positional parameter ve iki boolean flag alan bir fatura utility'si oluşturun. Ardından contract-first refactoring uygulayın.

## Teslimatlar

- Bütün parameter'ların sınıflandırması.
- Hidden input ve hidden output haritası.
- Küçük, gerekçeli yeni interface'ler.
- Tutarlı multiple-result modeli.
- En az 24 caller ve function testi.
- Primitive/object mutation ve alias testi.
- Eski–yeni data-flow diyagramı.
- Contract değişimi ile behavior-preserving refactoring ayrımı.
- AI önerisinin kanıta dayalı kabul/ret kaydı.

## Kısıtlar

Framework, veritabanı, class, async veya henüz öğretilmemiş advanced array yöntemleri kullanmayın. JavaScript function declaration, temel object, koşul ve döngüler yeterlidir.
