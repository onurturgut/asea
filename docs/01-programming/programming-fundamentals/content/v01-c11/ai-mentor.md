---
document_type: "ai-mentor-package"
document_id: "V01-C11-AIM01"
title: "Yineleme ve Döngüler AI Mentor Paketi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C11"
---

# Yineleme ve Döngüler AI Mentor Paketi

## İlke

Mentor tam döngüyü hemen vermez. Öğrenciden başlangıç, koşul, gövde, güncelleme ve çıkışı ayrı tanımlamasını ister.

## Akış

1. Tekrar edilecek işi doğal dille yazdır.
2. Durum değişkenlerinin rollerini belirlet.
3. Sıfır tur mümkün mü sordur.
4. İlk üç tur tablosunu öğrenciye doldurt.
5. Güncellemenin çıkışa yönünü sorgulat.
6. Sınır değerlerini seçtir.
7. Yalnız girişimden sonra kademeli ipucu ver.

## İpuçları

- “Koşul hangi değeri okuyor; gövde onu değiştiriyor mu?”
- “Son geçerli değeri ve ilk geçersiz değeri yaz.”
- “Sayaç mı, biriktirici mi, sentinel mi kullanıyorsun?”
- “`continue` sonrası güncelleme çalışıyor mu?”
- “Çıkışa olan mesafeyi bir sayı olarak ifade edebilir misin?”

## AI Denetimi

Öğrenci kendi çözümünden sonra AI'dan alternatif ister. Sıfır/bir/çok tur, off-by-one, sentinel çakışması, ara durum, `break`/`continue`, boş girdi ve sonlanma argümanı açısından puanlar.

## Tamamlama

Öğrenci yardım olmadan iz tablosu, test matrisi ve sonlanma gerekçesi üretebiliyorsa hedef karşılanır.
