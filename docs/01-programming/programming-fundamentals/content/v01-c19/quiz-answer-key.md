---
document_type: "quiz-answer-key"
document_id: "V01-C19-QZ01-AK"
title: "V01-C19 Quiz Cevap Anahtarı"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Quiz Cevap Anahtarı

## Kavram Cevapları

1. Özyineleme, bir problemi aynı sözleşmedeki daha küçük problem yardımıyla
   çözme ve küçük sonucun mevcut cevaba nasıl dönüştürüleceğini tanımlama
   yaklaşımıdır. Yalnız kendini çağırmak, küçülme ve doğru sonuç yoksa çözüm
   değildir.
2. Base case, yeni çağrı yapmadan durmanın yanında en küçük geçerli problem için
   **doğru sonucu** üretmelidir. Yanlış değer döndüren base case sonlanır fakat
   fonksiyonu yanlış yapar.
3. Base case sözleşme içindeki en küçük problemi çözer; validation sözleşme
   dışındaki girdiyi reddeder. `sumTo(0) = 0` base case, `sumTo(-1)` girdisini
   `RangeError` ile reddetmek validation örneğidir.
4. Base case yalnız hedefi gösterir. Progress measure, her geçerli recursive
   branch'in o hedefe yaklaştığını ve sonsuza kadar ilerleyemeyeceği alt sınırı
   gösterir.

## İzleme Cevapları

5. Çıktı:

   ```text
   G 2
   G 1
   B
   Ç 1
   Ç 2
   ```

6. `show(2)` frame'i kendi `n = 2` parametresini ve recursive çağrı
   tamamlandıktan sonra `console.log("Ç", n)` satırından devam edeceği bilgisini
   korur.
7. `show(1)`, `show(0)` çağrısına en yakın bekleyen frame'dir. `show(0)`
   döndüğünde stack'in üstündeki `show(1)` önce devam eder.
8. Çağrılar `show(2) → show(2) → show(2)` olur. `n` değişmediği için
   `n === 0` durumuna yaklaşılmaz.

## Hata Teşhisi Cevapları

9. En küçük bozulan normal girdi `1`'dir. İç `sumTo(0)` doğru biçimde `0`
   döndürür; fakat dış frame recursive sonucu `return` etmediği için nihai
   sonuç `undefined` olur. Kök neden base case değil, dönüşün dış frame'e
   bağlanmamasıdır.
10. Recursive argüman `n + 1` ile `0`'dan uzaklaşır. Örneğin çağrılar
    `2, 3, 4...` olur. Base case erişilemez.
11. Tek zincirde her düğümün yalnız bir çocuğu olduğu için `[0]` tesadüfen bütün
    yapıyı kapsar. İki dallı yapıda ikinci ve sonraki çocuklar hiç ziyaret
    edilmez. Bu bir termination değil, kapsam/doğruluk hatasıdır.

## Karar ve Transfer Cevapları

12. Her fonksiyon çağrısı ayrı call frame oluşturur. Parametre bağlamaları ve
    yerel değişkenler o frame'e aittir; iç çağrı yeni argüman değeri alır.
13. Her branch'in aldığı girdiyi ayrı izlemek ve aynı iyi temellenmiş progress
    ölçüsünde base case'e yaklaştığını göstermek gerekir. Bir branch'in
    ilerlemesi diğerini kanıtlamaz.
14. Girdi sonlu olsa bile gereken frame sayısı runtime'ın mevcut call stack
    kapasitesini aşabilir. Sınır motor, ortam ve çalışma koşuluna göre değişir.
15. Doğrusal büyük veride döngü yeni call frame üretmeden sabit call-stack
    kullanabilir ve sayaç/biriktirici akışı daha doğrudan okunabilir. Başka
    gerekçeli cevaplar da kabul edilebilir.

## Yanlış Cevabı Nasıl Yorumlarız?

- 1–4 yanlışsa kavram adlarından önce problem/base/progress ilişkisine dönün.
- 5–8 yanlışsa `show(2)` için frame kartları çizin.
- 9–11 yanlışsa belirti–kök neden ayrımını hata avıyla tekrar edin.
- 12–15 yanlışsa scope, call frame ve recursion–iteration karşılaştırmasına
  dönün.

Yanlış cevabı yalnız doğru seçenekle değiştirmeyin. İlk yanlış varsayımınızı bir
cümleyle yazın ve yeni küçük örnekte tekrar sınayın.
