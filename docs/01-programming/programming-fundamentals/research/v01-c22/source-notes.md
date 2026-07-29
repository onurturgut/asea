---
document_type: "research-notes"
document_id: "V01-C22-RS01"
chapter_id: "V01-C22"
status: "Draft"
researched_at: "2026-07-29"
---

# C22 Kaynak Araştırma Notları

## Doğrulanan Teknik Sınırlar

| Kaynak | Kanıt | Öğretim kararı |
|---|---|---|
| MIT OCW Sorting | Stability, memory ve input shape seçim ölçütüdür | Hız dışı trade-off tablosu |
| MIT 6.006 | Selection/insertion in-place olabilir; insertion stable, klasik selection stable değildir | Kimlikli duplicate deneyi |
| Harvard CS50 | Selection kalan en küçüğü seçer; insertion sıralı bölgeye yerleştirir | İki sezgisel hikâye |
| MDN `sort()` | Kaynağı mutasyona uğratır, comparator sözleşmesi ve stable davranış | JavaScript engineering sınırı |
| MDN Array | `toSorted()` yeni array üretir | Orijinali koruma kararı |

## Pedagojik Sınır

- Big O gösterimi C23’e bırakıldı.
- C22 karşılaştırma, swap ve shift sayılarını kanıt olarak toplar.
- Sayısal örnekler mekanizmayı öğretir; stability ayrı kimlikli kayıtlarla
  görünür yapılır.
- Yerleşik `sort()` konuya giriş değil, öğrenci algoritmayı izledikten sonraki
  mühendislik transferidir.

## Açık Dependency

C31 canonical ön koşuldur ve henüz üretilmemiştir. C22, C31 metotlarını
varsaymadan yazılmıştır. Stable kararı C31 sonrası geriye dönük inceleme bekler.
