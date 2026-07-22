---
document_type: exercise
exercise_id: "V01-C04-EX01"
title: "Algoritmalar, Sözde Kod ve İzleme — Alıştırmalar"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C04"
difficulty: "Beginner"
estimated_time: "100 minutes"
learning_outcomes: ["V01-LO006"]
assessment_id: "V01-C04-AS01"
language: "tr"
---

# Algoritmalar, Sözde Kod ve İzleme — Alıştırmalar

## Kurallar

Her soruda önce tahminini yaz, ardından trace et. AI yalnız bağımsız ilk sürüm
kilitlendikten sonra karşılaştırma amacıyla kullanılabilir.

## A — Kavram ve Sözleşme

### Alıştırma 1 — Hedef mi algoritma mı?

“En yüksek puanı bul”, “değerleri soldan sağa karşılaştır” ve “sonucu göster”
ifadelerini hedef, operation veya output olarak sınıflandır; gerekçelendir.

### Alıştırma 2 — Algoritma ile program

Aynı çözümün algorithm ve program düzeyinde taşıdığı ayrıntıları iki sütunlu
tabloda ayır. En az beş fark yaz.

### Alıştırma 3 — Belirsiz operations

“Veriyi uygun şekilde işle”, “gerekirse indirim yap” ve “sonucu düzelt”
adımlarını tek anlamlı hâle getirmek için gereken soruları üret.

### Alıştırma 4 — Ön koşul

Bir asansör kat seçme algoritması için beş precondition öner. Gerçek requirement
olmayanları assumption olarak işaretle.

### Alıştırma 5 — Son koşul

Bir sınav puanı sınıflandırma algoritması için üç observable postcondition ve
iki implementation detail yaz; ikisini karıştırmadığını açıkla.

## B — Sözde Kod

### Alıştırma 6 — Sıralama

Çay hazırlama örneğini değil, “kütüphane kitabı teslim alma” sürecini sekiz
precise operation’a ayır. İnsan sezgisine bıraktığın kelimeleri işaretle.

### Alıştırma 7 — Dil bağımlılığını temizleme

Şu satırı language-independent pseudocode’a dönüştür:

```javascript
console.log(Math.max(a, b));
```

Input, branch ve output’u ayrı satırlarda göster.

### Alıştırma 8 — Contract’tan pseudocode

1–100 arası score için 50 ve üzerini `PASS`, altını `FAIL` üreten bir algorithm
contract ve pseudocode yaz. Invalid input behavior’ı unutma.

### Alıştırma 9 — Rule coverage

Alıştırma 8’deki her contract rule’una kimlik ver ve bir pseudocode line’a bağla.
Bağsız rule veya kaynaksız line varsa düzelt.

### Alıştırma 10 — İki geçerli tasarım

Adult/student fare algoritmasını ortak gross calculation ve branch içinde ayrı
calculation yaklaşımlarıyla iki kez yaz. Readability ve change cost’u karşılaştır.

## C — Trace

### Alıştırma 11 — Tahmin ve trace

C04 ana dersindeki fare algoritmasını `5, ADULT` için tahmin et ve tam trace
table üret.

### Alıştırma 12 — İkinci branch

Aynı algoritmayı `5, STUDENT` için trace et. İlk divergence step’ini göster.

### Alıştırma 13 — Boundary üçlüsü

Distance alt sınırı için `0`, `1`, `2`; üst sınırı için `49`, `50`, `51`
değerlerini trace et. Hangi comparison’ın her sonucu belirlediğini yaz.

### Alıştırma 14 — Eksik trace’i onar

`grossFare=60` değerinden doğrudan `finalFare=45` sonucuna atlayan trace’e
eksik instruction, before state ve calculation alanlarını ekle.

### Alıştırma 15 — İlk divergence

Expected 45, observed 60 olan student fare trace’inde yanlışlığın ilk ortaya
çıktığı step’i bul. Symptom, root cause ve repair yaz.

## D — Sonlanma ve Doğruluk

### Alıştırma 16 — Progress measure

10’dan sıfıra countdown için progress measure, bound, update ve stop condition’ı
ayrı ayrı yaz.

### Alıştırma 17 — Gizli sonsuz döngü

Bir branch’te counter’ı azaltmayan loop tasarla, üç iteration trace ederek hatayı
kanıtla ve en küçük onarımı yap.

### Alıştırma 18 — Trace’in sınırı

Üç başarılı trace’in neden universal proof olmadığını, trace edilmemiş bir
counterexample class önererek 120–180 kelimeyle açıkla.

## E — Transfer ve AI Denetimi

### Alıştırma 19 — Bağımsız transfer

1–20 arası sipariş adedi için quantity discount üreten bounded bir problemden
pre/postcondition, pseudocode, iki normal, bir boundary ve bir invalid trace
üret. Termination defense ekle.

### Alıştırma 20 — AI audit

Alıştırma 19’un `student-v1` sürümünü kilitle. AI alternatifi al; contract
değişikliği, ambiguous operation, boundary error ve termination risklerinden en
az üçünü denetle. Her öneri için `kanıt → karar → gerekçe` kaydı oluştur.

## Teslim Kanıtı

- 20 yanıt
- En az iki tam algorithm contract
- En az sekiz trace table
- İki termination defense
- Bağımsız sürüm ve AI audit diff’i

## References

- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
- [Rubrik](./assessment-rubric.md)
