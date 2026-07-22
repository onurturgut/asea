---
document_type: "flashcard-set"
document_id: "V01-C09-FC01"
title: "Boolean Mantığı ve Doğruluk Bilgi Kartları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
card_count: 30
---

# Boolean Mantığı ve Doğruluk Bilgi Kartları

Kartın arkasını okumadan önce yanıtı sesli veya yazılı üret.

1. **Ön:** Boolean değer hangi iki değerden biridir? **Arka:** `true` veya `false`.
2. **Ön:** `"true"` neden Boolean değildir? **Arka:** Tırnak içinde olduğu için string değeridir.
3. **Ön:** Önerme nedir? **Arka:** Doğru veya yanlış olduğu söylenebilen bildirimdir.
4. **Ön:** Yüklem nedir? **Arka:** Girdiye göre mantıksal sonuç üreten soru veya ifadedir.
5. **Ön:** `A && B` ne zaman doğrudur? **Arka:** A ve B birlikte doğruyken.
6. **Ön:** `A || B` ne zaman yanlıştır? **Arka:** A ve B birlikte yanlışken.
7. **Ön:** `!false` nedir? **Arka:** `true`.
8. **Ön:** İki bağımsız girdi kaç tablo satırı üretir? **Arka:** Dört.
9. **Ön:** Üç bağımsız girdi kaç tablo satırı üretir? **Arka:** Sekiz.
10. **Ön:** Genel satır sayısı kuralı nedir? **Arka:** `2^n`.
11. **Ön:** Ara sütun neden kullanılır? **Arka:** Alt sonuçları ve hata kaynağını görünür kılmak için.
12. **Ön:** `!(A && B)` eşdeğeri nedir? **Arka:** `!A || !B`.
13. **Ön:** `!(A || B)` eşdeğeri nedir? **Arka:** `!A && !B`.
14. **Ön:** Eşdeğerlik nasıl doğrulanır? **Arka:** Bütün olası girdilerde sonuçların aynı olmasıyla.
15. **Ön:** Mantıksal operatör önceliği nasıldır? **Arka:** Önce `!`, sonra `&&`, sonra `||`.
16. **Ön:** `Boolean(0)` nedir? **Arka:** `false`.
17. **Ön:** `Boolean("0")` nedir? **Arka:** `true`.
18. **Ön:** `Boolean("false")` nedir? **Arka:** `true`.
19. **Ön:** `Boolean([])` nedir? **Arka:** `true`.
20. **Ön:** Temel yanlış değerlerden üçü nedir? **Arka:** Örneğin `0`, `""`, `null`.
21. **Ön:** `&&` hangi işleneni döndürür? **Arka:** İlk yanlış kabul edilen işleneni, yoksa son işleneni.
22. **Ön:** `||` hangi işleneni döndürür? **Arka:** İlk doğru kabul edilen işleneni, yoksa son işleneni.
23. **Ön:** Kısa devre nedir? **Arka:** Sonuç belirlendiğinde sağ tarafın değerlendirilmemesidir.
24. **Ön:** `false && call()` içinde çağrı çalışır mı? **Arka:** Hayır.
25. **Ön:** `true || call()` içinde çağrı çalışır mı? **Arka:** Hayır.
26. **Ön:** `role === "admin" || "owner"` hatası nedir? **Arka:** İkinci taraf karşılaştırma değildir.
27. **Ön:** `0 || 10` sonucu nedir? **Arka:** `10`.
28. **Ön:** Olumlu yüklem adına örnek ver. **Arka:** `isActive` veya `hasPermission`.
29. **Ön:** İstemci kontrolü neden yetkilendirme değildir? **Arka:** İstemci değiştirilebilir; sunucu kararı doğrulamalıdır.
30. **Ön:** AI koşulunu denetlemenin temel aracı nedir? **Arka:** Gereksinim eşlemesi, doğruluk tablosu ve sınır testleri.
