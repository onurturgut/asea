# Alıştırma Çözümleri

## 1

Expected `"JavaScript"`, observed `""`; fonksiyonu iki başlıklı diziyle çağırıp
dönüşü gözleme; aynı runtime/sürümde tekrarların tamamında aynı sonuç.

## 2

`["JS"]` failure’ı korur: beklenen `"JS"`, gözlenen `""`. Boş dizi failure
sözleşmesini farklı bir sınır sorununa çevirdiği için daha açıklayıcı değildir.

## 3

`longest` yanlış başlayabilir; karşılaştırma yönü yanlış olabilir; döngü hiç
çalışmıyor olabilir. Sırasıyla başlangıç değeri, koşul sonucu ve tur sayısı ölçülür.

## 4

Fix yalnız tek öğeyi değil tüm temsilî sözleşme gruplarını karşılamalıdır. Eşit
uzunlukta ilk veya son öğeyi seçme davranışı sözleşmede ayrıca ilan edilmelidir.
