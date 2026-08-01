---
document_type: "lab"
document_id: "V01-C30-L01"
chapter_id: "V01-C30"
title: "Model and Trace Object State"
version: "0.1.0"
status: "Draft"
---

# Lab — Model and Trace Object State

## Amaç

ASEA öğrenci ilerlemesi için geçerli model üretmek, mutation ve copy davranışını
kimlik kanıtlarıyla çözümlemek ve güvenli güncelleme API'si yazmak.

## Gereksinimler

1. `createStudentProgress` canonical type ve invariant'ları doğrulasın.
2. `advanceProgress` input'u mutate etmeden yeni root ve yeni `progress` üretsin.
3. `renameStudent` yeni root üretirken değişmeyen `progress` referansını paylaşsın.
4. En az altı geçerli/geçersiz factory testi yazın.
5. Alias, shallow copy ve selective copy için identity matrisi üretin.
6. Bilerek hatalı shallow-copy sürümünü teşhis edip düzeltin.

## Kanıt Matrisi

| Senaryo | Root aynı mı? | Progress aynı mı? | Eski state korunur mu? |
| --- | --- | --- | --- |
| Alias | | | |
| Root spread | | | |
| Selective update | | | |
| Rename | | | |

## Teslim

- Çalışan JavaScript dosyası
- gereksinim–property–invariant tablosu
- test output'u
- doldurulmuş identity matrisi
- 150–250 kelimelik sahiplik ve mutation kararı

## Başarı Kapısı

Factory geçersiz state'i reddetmeli; güncelleme fonksiyonları sözleşmedeki identity
sonuçlarını üretmeli; öğrenci shallow copy hatasını kendi cümlesiyle açıklamalıdır.
