# Hata Avı

## Hata 1 — Yanlış `n`

Bir öğrenci-quiz eşleştirmesinde yalnızca öğrenci sayısını `n` kabul etmek,
quiz sayısını görünmez yapar. İki bağımsız girdi varsa `n` ve `m` kullanın.

## Hata 2 — Süreyi karmaşıklık sanmak

Bir çalıştırmanın 2 ms sürmesi tek başına O(1) olduğunu göstermez. Donanım,
çalışma zamanı ve veri koşulları süreyi etkiler. Farklı boyutlardaki eğilime bakın.

## Hata 3 — Big O'yu eşitlik gibi okumak

O bir üst sınır iddiasıdır; her zaman sıkı sınır değildir. `3n + 2`, hem O(n)
hem de O(n²) denebilir, fakat büyümeyi en iyi anlatan sıkı sınıf Θ(n)'dir.

## Hata 4 — En kötü durumu tek gerçek sanmak

Doğrusal aramanın hedef ilk sıradaysa yaptığı iş ile hedef yokken yaptığı iş
aynı değildir. Hangi durumun analiz edildiğini açıkça yazın.
