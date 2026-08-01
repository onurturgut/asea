---
document_type: "lab"
document_id: "V01-C33-L01"
chapter_id: "V01-C33"
title: "Design and Defend a Closure State Boundary"
version: "0.1.0"
status: "Draft"
---

# Lab — Design and Defend a Closure State Boundary

## Görev

ASEA StudentProgress için closure tabanlı tracker boundary tasarlayın.

## Gereksinimler

- Valid initial `completed/total`
- `completeNext`, `reset`, `getSnapshot`, `isComplete`
- Internal mutable reference sızıntısı olmaması
- Her transition'da invariant korunması
- İki instance bağımsızlığı
- Command/query adlarının açık olması
- Geçersiz transition error contract'ı

## Kanıt

- En az 12 adımlı E/F/state trace
- captured binding inventory
- snapshot identity testleri
- iki instance testi
- invalid input/transition testleri
- ownership ve lifetime decision record

## Başarı Kapısı

LO055 trace'i doğru; LO056 API'si geçersiz state'i kapatıyor ve internal reference
sızdırmıyorsa lab başarılıdır.
