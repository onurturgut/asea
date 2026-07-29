---
document_type: "technical-decisions"
document_id: "V01-C22-RS02"
chapter_id: "V01-C22"
status: "Draft"
---

# C22 Teknik ve Öğretim Kararları

## TD-01 — İki algoritma

Scope selection ve insertion sort ile sınırlıdır. Bubble, merge, quick ve heap
sort sonraki veri yapıları/algoritmalar kapsamına bırakılır.

## TD-02 — Kopya döndüren öğrenci API’si

Örnekler orijinal array’i korumak için yüzeysel kopya üretir. Algoritmanın
in-place çekirdeği ile ürün API’sinin mutation kararı açıkça ayrılır.

## TD-03 — Insertion stability

Kaydırma koşulu `leftValue > currentValue` olur. `>=` kullanılmaz; eşit anahtarlı
kayıtların göreli sırası korunur.

## TD-04 — Selection stability

Klasik uzak swap sürümü stable değildir. Bu sınır ayrı kimlikli eşit kayıt
karşı örneğiyle gösterilir.

## TD-05 — Ölçüm devri

C22 operation sayılarını toplar ama büyüme sınıfı adlandırmaz. Formal analiz
C23’ün learning outcome’udur.
