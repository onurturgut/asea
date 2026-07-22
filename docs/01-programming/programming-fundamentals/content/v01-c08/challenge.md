---
document_type: "challenge"
challenge_id: "V01-C08-CH01"
title: "Geçersiz Girdi Geri Bildirimi Tasarlama"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
learning_outcomes: ["V01-LO012"]
language: "tr"
---

# İleri Görev — Geçersiz Girdi Geri Bildirimi

## Problem

Bir CLI kullanıcıdan `budget`, `category`, `month` alıyor. Mevcut sistem her failure'da yalnız
`Error` yazıyor. Contract ve hata modeli tasarla; bütün uygulamayı yazmak yerine karar kanıtı
üret.

## Zorunlu Teslim

1. Üç alan için input contract.
2. En az 15 invalid case envanteri.
3. Parse failure ve validation failure ayrımı.
4. Stable error code, field ve Turkish correction message kataloğu.
5. Birden fazla hatayı toplama stratejisi.
6. Human CLI ve machine JSON failure output örneği.
7. Sensitive-data/logging policy.
8. W3C error identification ve OWASP input validation ilkeleriyle kısa gerekçe.

## Transfer Koşulu

Aynı error modelini bir web formuna taşırken neyin değişeceğini, domain contract'ın neden aynı
kalacağını açıkla. Framework kodu yazma.
