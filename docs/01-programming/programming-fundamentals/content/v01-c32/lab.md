---
document_type: "lab"
document_id: "V01-C32-L01"
chapter_id: "V01-C32"
title: "Build and Trace a Callback-Driven Processor"
version: "0.1.0"
status: "Draft"
---

# Lab — Build and Trace a Callback-Driven Processor

## Görev

Attempt kayıtlarını rule ve formatter callback'leriyle işleyen senkron işlemci yazın.

## Gereksinimler

- `processAttempts(attempts, passRule, toResult)` API'si
- Callback callable validation'ı
- Her attempt için rule sonra formatter invocation'ı
- Input mutation olmaması
- Empty input desteği
- Callback throw politikasının belgelenmesi
- Standard ve strict rule
- Student ve admin result formatter

## Kanıt

- En az on adımlı control/data-flow trace
- callback argument/order/count spy kayıtları
- `fn`/`fn()` hata vakası
- signature mismatch ve adapter düzeltmesi
- sekizden fazla test

## Başarı Kapısı

LO053 için reusable callback strategies çalışmalı; LO054 için öğrenci caller'ın bütün
invocation contract'ını kod çalıştırmadan açıklayabilmelidir.
