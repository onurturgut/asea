---
document_type: "flashcard-set"
document_id: "V01-C15-FC01"
title: "V01-C15 Flashcards"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
last_updated: "2026-07-23"
---

# Flashcards

1. **Ön:** Kapsam nedir? **Arka:** Bir bağa kaynak kodun nerelerinden erişilebildiğini belirleyen kuraldır.
2. **Ön:** Yaşam süresi nedir? **Arka:** Durumun ne zaman var veya erişilebilir kaldığı zaman aralığıdır.
3. **Ön:** Bağ nedir? **Arka:** Bir ad ile değişken/değer varlığı arasındaki ilişkidir.
4. **Ön:** Sözcüksel kapsam nedir? **Arka:** Çözümlemenin kodun yazılı iç içeliğinden belirlenmesidir.
5. **Ön:** Ad çözümleme nereden başlar? **Arka:** Kullanım noktasındaki en dar kapsamdan.
6. **Ön:** Arama ne zaman durur? **Arka:** İlk eşleşen en yakın bağ bulunduğunda.
7. **Ön:** Global kapsam nedir? **Arka:** Script kodunun en dış erişim bölgesidir.
8. **Ön:** Modül kapsamı ne sağlar? **Arka:** Üst düzey adları modülde tutar; yalnız export edilenler dışarı açılır.
9. **Ön:** Fonksiyon kapsamı nedir? **Arka:** Parametre ve yerel bağların fonksiyon çağrısına ait bölgesidir.
10. **Ön:** Blok kapsamı nedir? **Arka:** `let`/`const` gibi bildirimleri `{}` içinde sınırlayan kapsamdır.
11. **Ön:** `var` sıradan blokla sınırlanır mı? **Arka:** Hayır; çoğunlukla içeren fonksiyon veya script'e aittir.
12. **Ön:** Gölgeleme nedir? **Arka:** Yakın aynı adlı yeni bağın dış bağı aramada gizlemesidir.
13. **Ön:** Gölgeleme dış bağı değiştirir mi? **Arka:** Hayır; ayrı bağ oluşturur.
14. **Ön:** Yeniden atama nedir? **Arka:** Çözümlemede bulunan mevcut bağın değerini değiştirmektir.
15. **Ön:** Closure nedir? **Arka:** Fonksiyonun tanımlandığı sözcüksel çevredeki bağlara erişim ilişkisidir.
16. **Ön:** Closure yalnız değer kopyalar mı? **Arka:** Hayır; JavaScript'te dış bağa erişimi koruyabilir.
17. **Ön:** İki factory çağrısı aynı yerel bağı paylaşır mı? **Arka:** Normalde ayrı çağrı çevreleri üretir.
18. **Ön:** Scope sonu anlık GC demek mi? **Arka:** Hayır; erişim yolları ve motorun kararı ayrıdır.
19. **Ön:** Reachability nedir? **Arka:** Program köklerinden nesneye erişim yolu bulunmasıdır.
20. **Ön:** Yerel durum nedir? **Arka:** Erişimi dar sorumlu kapsamla sınırlı durumdur.
21. **Ön:** Global mutable durum riski nedir? **Arka:** Sahiplik ve çağrı sırasının geniş kod yüzeyini etkilemesidir.
22. **Ön:** Yan etki nedir? **Arka:** Açık return dışında dış durumu okuma veya değiştirmedir.
23. **Ön:** Gizli okuma örneği nedir? **Arka:** `Date.now()`, `Math.random()` veya global state okumaktır.
24. **Ön:** Dış yazma örneği nedir? **Arka:** Global, argüman nesnesi, konsol, dosya veya ağa yazmaktır.
25. **Ön:** Saf fonksiyonun iki koşulu nedir? **Arka:** Aynı açık girdide aynı sonuç ve dış durumu değiştirmeme.
26. **Ön:** Yerel `.push` daima impure mı? **Arka:** Hayır; yeni yerel nesnedeki değişim dışarıdan gözlenmeyebilir.
27. **Ön:** Referans saydamlığı sezgisi nedir? **Arka:** Çağrıyı değeriyle değiştirince davranışın korunmasıdır.
28. **Ön:** Saf çekirdek nedir? **Arka:** Açık girdilerden deterministik hesap yapan bölümdür.
29. **Ön:** Etkili sınır nedir? **Arka:** I/O ve dış durum etkileşimini küçük, açık yerde yöneten bölümdür.
30. **Ön:** C15 başarı kanıtı nedir? **Arka:** Doğru scope trace ve davranışı koruyan pure-core refactoring'idir.
