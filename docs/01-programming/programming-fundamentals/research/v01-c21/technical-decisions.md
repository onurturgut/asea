---
document_type: "technical-decisions"
document_id: "V01-C21-RS02"
chapter_id: "V01-C21"
status: "Draft"
---

# C21 Teknik ve Öğretim Kararları

## TD-01 — Sonuç sözleşmesi index

Temel fonksiyonlar geçerli index veya `-1` döndürür. Böylece öğrenci değer ile
konumu ayırır ve MDN `indexOf`/`findIndex` sözleşmesine transfer yapabilir.

## TD-02 — Kapsayıcı binary aralık

Örnek `low = 0`, `high = length - 1`, `while (low <= high)` sözleşmesini
kullanır. Tek eleman, boş array ve bulunamadı izi bu modelle açıkça gösterilir.

## TD-03 — Temel örneklerde sayısal ID

Türkçe string sıralaması locale ve comparator ayrıntısı taşır. Binary search
mekanizmasını öğretirken bu ek yükü kaldırmak için sayısal ID kullanılır.
Başlıklara transferde sıralama ve aramanın aynı comparator’ı kullanması
gerektiği ayrıca belirtilir.

## TD-04 — Duplicate sözleşmesi

Temel binary search herhangi bir eşleşme döndürür. İlk eşleşme, challenge’da
ayrı bir sözleşme değişikliği olarak ele alınır.

## TD-05 — Performans sınırı

Karşılaştırma sayıları kaydedilir; Big O öğretimi C23’e bırakılır. Böylece öğrenci
kanıt toplar ama sonraki chapter’ın kavramı erkenden yüzeysel öğretilmez.
