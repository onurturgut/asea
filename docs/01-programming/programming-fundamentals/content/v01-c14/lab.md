---
document_type: "laboratory"
document_id: "V01-C14-L01"
title: "Refactor Inputs and Outputs"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
learning_outcomes: ["V01-LO021"]
estimated_time: "75 dakika"
last_updated: "2026-07-23"
---

# Laboratuvar — Girdi ve Çıktıları Sadeleştirme

## Objective

Gereksiz parameter'ları sınıflandırmak, hidden input/output'u görünür yapmak, print'i explicit return'e çevirmek ve caller davranışını testlerle korumak.

## Requirements

- Node.js ve terminal.
- Ana dersteki problemli `createProgressSummary` kodu.
- Parameter sınıflandırma ve data-flow tablosu.
- Basit assertion yardımcıları.

## Tasks

1. Bütün parameter'ları necessary, unused, derived, duplicate, flag veya hidden ile ilişkilendirin.
2. `total=0`, yuvarlama, boş ad ve invalid type contract kararlarını yazın.
3. Mevcut normal davranışı ve sorunlu sınırları testlerle kaydedin.
4. Hesap, format ve print sorumluluklarını ayırın.
5. Global `latestSummary` hidden output'unu kaldırın.
6. `percentage` duplicate input'unu gerekçeli biçimde kaldırın.
7. Caller'ları yeni interface'e migration edin.
8. Primitive reassignment ile object mutation deneyini ekleyin.
9. En az 16 testi çalıştırın.
10. Önce/sonra data-flow ve signature karşılaştırmasını raporlayın.

## Bonus Challenge

Tutarlı `{ ok, value, error }` result modeliyle invalid input'u yönetip throw alternatifiyle trade-off karşılaştırın. İki sürümün caller kodunu ve test matrisini gösterin.

## Evaluation Criteria

- Input sınıflandırma ve contract: 25 puan.
- Interface sadeleştirme doğruluğu: 20 puan.
- Explicit return ve data-flow trace: 20 puan.
- Normal, sınır, invalid, mutation testleri: 25 puan.
- AI audit ve karar kaydı: 10 puan.

Başarı için toplam 75; input analizi ve test ölçütlerinin her birinden en az 15 puan gerekir.
