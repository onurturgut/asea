---
document_type: "exercise-set"
document_id: "V01-C14-EX01"
title: "V01-C14 Exercises"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
learning_outcomes: ["V01-LO021"]
last_updated: "2026-07-23"
---

# Alıştırmalar

Her alıştırmada önce parameter/argument veya return trace, sonra çalışan kod ve test üretin.

## Uygulamalar

### Alıştırma 1 — Parametre ve argüman

İki parameter alan bir function tanımlayın ve üç farklı çağrı yapın. Tanımdaki parameter'ları, her çağrıdaki argument'ları ayrı tabloya yazın.

### Alıştırma 2 — Konumsal sıra

`divide(dividend, divisor)` çağrısında `divide(10, 2)` ve `divide(2, 10)` sonuçlarını izleyin. Aynı türde argümanların semantic sıra riskini açıklayın.

### Alıştırma 3 — İfade değerlendirme sırası

İki yan etkili gözlem fonksiyonunu `subtract` çağrısında argüman yapın. Soldan sağa çıktı ve return sırasını tahmin edip doğrulayın.

### Alıştırma 4 — Eksik argüman

İki number isteyen `multiply` fonksiyonunu tek argümanla çağırın. Parameter binding, `undefined`, `NaN` ve ilk contract violation adımını gösterin.

### Alıştırma 5 — Fazla argüman

İki parameter'lı function'a yan etkili üçüncü argument verin. Değer kullanılmasa da ifadenin değerlendirildiğini kanıtlayın.

### Alıştırma 6 — Default matrisi

Bir default parameter'ı omitted, `undefined`, `null`, 0, `false` ve boş metinle sınayın. Sonuç tablosunu yazın.

### Alıştırma 7 — Rest ve spread

Rest ile belirsiz sayıda number toplayın; bir array'i spread ile çağrıya açın. Toplama ve açma yönlerini açıklayın.

### Alıştırma 8 — Primitive reassignment

Number parametresini içeride yeniden atayın. Dış binding ile return değerini önce/sonra tablosuna yazın.

### Alıştırma 9 — Object mutation

Student object property’sini function içinde değiştirin. Caller'ın aynı nesnede değişimi neden gördüğünü değer aktarımı modeliyle açıklayın.

### Alıştırma 10 — Object reassignment

Object parametresini yeni object'e atayın. Dış binding'in değişmediğini property mutation alıştırmasıyla karşılaştırın.

### Alıştırma 11 — Aliasing

Aynı object'i iki parameter konumuna verin. İki mutation'ın aynı nesneye uygulanma sırasını izleyin; contract riskini yazın.

### Alıştırma 12 — Necessary input analizi

Beş parametreli bir hesap function'ında bir unused, bir derived ve bir duplicate input oluşturun. Sınıflandırıp interface'i küçültün.

### Alıştırma 13 — Hidden input

Global vergi oranı kullanan function'ı test edin. Oranı explicit parameter yaparak aynı açık girdide deterministic davranışı gösterin.

### Alıştırma 14 — Flag argument

`createReport(data, isPreview)` contract'ını inceleyin. Tek options modeli ve iki ayrı function alternatifini trade-off tablosunda karşılaştırın.

### Alıştırma 15 — Print'i return'e çevirme

Sonucu yalnız yazdıran function'ın caller'da `undefined` ürettiğini gösterin. Explicit return'e dönüştürüp sonucu iki farklı caller'da kullanın.

### Alıştırma 16 — Eksik return yolu

Bir üyelik oranı function'ında false yolunu return'süz bırakın. Yol tablosuyla bulup bütün geçerli yollarda tutarlı number döndürün.

### Alıştırma 17 — Multiple result

Bölüm ve kalan değerini object içinde döndüren function yazın. Sıfıra bölme failure'ını ve result field contract'ını test edin.

### Alıştırma 18 — Composition

Normalize, validate, calculate ve format adımlarından dört function'lık pipeline kurun. Her output'un sonraki input contract'ıyla uyumunu tabloya yazın.

### Alıştırma 19 — Interface refactoring

Yedi positional parameter alan function için bütün caller'ları listeleyin; bir parameter'ı tek adımda kaldırın ve caller testlerini çalıştırın.

### Alıştırma 20 — AI interface audit

AI'dan utility arayüzü üretmesini isteyin. Necessary/unused/derived/duplicate/hidden, default, mutation, return shape ve composition kontrolleriyle kabul/ret raporu yazın.
