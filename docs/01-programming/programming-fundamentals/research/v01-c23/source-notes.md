# V01-C23 Kaynak Notları

## Araştırma sorusu

Başlangıç seviyesindeki öğrenciye algoritmik karmaşıklık, gerçek süreyle
karıştırılmadan ve notasyon ezberine dönüşmeden nasıl öğretilir?

## Bulgular

- MIT 6.006 materyali O'yu üst, Ω'yı alt, Θ'yı sıkı sınır olarak ayırır ve
  sabitlerle düşük dereceli terimlerin asimptotik karşılaştırmada elendiğini gösterir.
- MIT ders çerçevesi profesyonel algoritma cevabını yalnızca kod değil; açıklama,
  örnek, doğruluk ve zaman/ilgiliyse alan analizi olarak ele alır.
- NIST, “maliyet” kavramının karşılaştırma, taşıma, bellek, disk erişimi veya
  gerçek süre gibi seçilen kaynağa bağlı olduğunu vurgular.
- MDN, `performance.now()` değerinin monoton ve yüksek çözünürlüklü bir zaman
  damgası olduğunu açıklar. Bu, kontrollü deney için uygundur; karmaşıklık
  ispatının yerine geçmez.

## Öğretim kararı

Chapter önce C21/C22 sayaçlarını kullanır, sonra büyüme tablosu kurar, en son
notasyonu isimlendirir. Her seçimde ön koşul, beklenen `n`, zaman, alan ve
okunabilirlik birlikte değerlendirilir.
