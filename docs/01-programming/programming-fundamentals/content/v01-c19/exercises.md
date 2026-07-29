---
document_type: "exercises"
document_id: "V01-C19-EX01"
title: "V01-C19 Alıştırmalar"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
learning_outcomes: ["V01-LO029", "V01-LO030"]
last_updated: "2026-07-29"
---

# Alıştırmalar

Görevler kademeli ilerler. İlk iki görev izleme, 3–5 tasarım ve hata ayıklama,
6–8 bağımsız uygulama ve transfer kanıtıdır. Tam çözüme bakmadan önce her
görevde en az bir tahmin veya çalışan deneme kaydedin.

## 1 — Trace Tamamlama

`sumTo(4)` için çağrı, `n`, bekleyen işlem ve dönüş sütunlarını doldurun. İniş ve
çözülme satırlarını farklı sembolle işaretleyin; yalnız renge güvenmeyin.

## 2 — Çıktı Sırası

`showFrames(2)` fonksiyonunun çıktısını çalıştırmadan yazın. Sonra
`console.log("çık", n)` satırını recursive call'dan önce taşıyıp farkı açıklayın.

## 3 — Base Case Tasarımı

Şu problemler için kod yazmadan base case ve doğrudan sonucu belirleyin:

- dizinin indeksten sonraki toplamı;
- metinde belirli karakterin sayısı;
- iç içe klasör modelindeki düğüm sayısı.

## 4 — Progress Kanıtı

Her fonksiyonda progress measure'ı bulun ve durup durmayacağını açıklayın:

```js
f(n - 2)
g(index + 1)
h(values.slice(1))
k(n / 2)
m(n + 1)
```

Tek başına ifadeye bakmanın yetmediği durumlarda geçerli girdi ve base case
sözleşmesini ayrıca yazın.

## 5 — Sonuç Kaybını Onar

Recursive call yapan fakat `return` veya birleştirme adımı eksik üç küçük fonksiyon
yazın. Bir arkadaşınızdan belirti–neden–düzeltme tablosuyla onarmasını isteyin.

## 6 — İki Base Case

Bir dizide ilk negatif sayının indeksini bulan recursive fonksiyon yazın. “Veri
bitti” ve “eşleşme bulundu” durumlarını ayırın; kaynak diziyi değiştirmeyin.

## 7 — Recursion/Iteration Kararı

Geri sayım, kategori ağacı, milyon öğelik doğrusal liste ve kullanıcıdan gelen
belirsiz derinlikte yorum ağacı için çözüm seçin. Her seçimde yapı, okunabilirlik
ve stack riskini gerekçelendirin.

## 8 — AI Denetimi

AI'dan recursive bir `sumArray` isteyin. Çalıştırmadan önce base case, progress,
recursive result ve boş dizi davranışını inceleyin. En az bir karşı örnek üretin.

## Kademeli Destek

Takıldığınız görevde şu sırayı izleyin:

1. En küçük geçerli girdiyi yazın.
2. İlk üç çağrının yalnız argümanlarını yazın.
3. Dış frame'in bekleyen işlemini `?` ile gösterin.
4. Her çağrıda küçülen sayı, kalan eleman veya alt yapıyı adlandırın.
5. Dönüşleri base case'ten başlayarak ters sırada tamamlayın.

Bu adımlar çözümü vermeden zihinsel modeli görünür kılar. Beşinci adımdan sonra
da ilerleyemiyorsanız [AI Mentor sözleşmesindeki](./ai-mentor.md) kavramsal
ipucu düzeyine geçin.

## Öz Değerlendirme

Her görev sonunda:

- Kodu çalıştırmadan önceki tahminim neydi?
- Yanlışsa ilk yanlış varsayımım hangi frame'de oluştu?
- Hangi değişkenin anlamını veya türünü yanlış düşündüm?
- Aynı beceriyi farklı bir veride tekrar gösterebilir miyim?

sorularına kısa cevap verin.
