---
document_type: "summary"
document_id: "V01-C19-SM01"
title: "V01-C19 Kısa Özet"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Kısa Özet

Özyineleme, problemi aynı sözleşmedeki daha küçük problemle çözer. Doğru çözüm:
base case, recursive case, sonuç birleştirme ve her çağrıda sınıra yaklaşan progress
measure taşır. Her çağrı ayrı call frame'dir; inişte frame'ler bekler, base case'ten
sonra ters sırada çözülür.

C18'de alanları ve invariant'larıyla modellediğiniz iç içe kayıtlar, C19'da
recursive olarak işlenebilir hâle geldi. Bir grup kendi `lessons` değerini
başlangıç toplamı yapar; her `child` aynı sözleşmedeki daha küçük problem olur;
çocuk sonuçları dış frame'in toplamıyla birleşir. Her frame'in parametre ve
yerel değerleri ayrıdır.

Kontrol soruları:

- En küçük doğrudan cevap nedir?
- Her çağrıda tam olarak ne küçülüyor?
- Bütün branch'ler ilerliyor mu?
- İç çağrı dönünce dış çağrı ne yapıyor?
- Derinlik stack için güvenli mi?
- Döngü alternatifi daha açık mı?

## C20'ye Devir

Bir sonraki chapter'da iç içe gruplardan toplanan `title` değerleri metin
işleme hattına girecek. C19'dan şu davranışları taşıyın:

- boş koleksiyon için doğrudan sonuç;
- veriyi küçük parçalara ayırma;
- parça sonuçlarını tek sonuçta birleştirme;
- kaynak veriyi değiştirmeden çıktı üretme;
- küçük örneklerle sınır ve hata davranışını izleme.

C20'de yeni soru “hangi grupları gezeceğiz?” değil; elde edilen metinlerde
whitespace, case ve Unicode sınırlarını nasıl güvenilir işleyeceğimiz olacak.
