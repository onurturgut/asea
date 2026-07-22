---
document_type: "flashcard-set"
document_id: "V01-C13-FC01"
title: "V01-C13 Flashcards"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
last_updated: "2026-07-23"
---

# Flashcards

1. **Ön:** Fonksiyon nedir? **Arka:** Adlandırılmış veya erişilebilir çağrılabilir davranış sınırıdır.
2. **Ön:** Fonksiyon tanımı ne yapar? **Arka:** Çağrılabilir davranışı oluşturur; tek başına çalıştırmaz.
3. **Ön:** Çağrı nedir? **Arka:** Denetimi çağırandan fonksiyona aktaran işlemdir.
4. **Ön:** Caller kimdir? **Arka:** Fonksiyon çağrısını başlatan kod bağlamıdır.
5. **Ön:** Callee kimdir? **Arka:** Çağrılan ve çalışan fonksiyondur.
6. **Ön:** Sorumluluk nedir? **Arka:** Fonksiyonun üstlendiği tek, gözlenebilir davranıştır.
7. **Ön:** Soyutlama nedir? **Arka:** Kullanım için gerekli arayüzü sunup değişebilir iç ayrıntıyı saklamaktır.
8. **Ön:** Function contract nedir? **Arka:** Girdi, ön/son koşul, etki ve hata vaadidir.
9. **Ön:** Ön koşul nedir? **Arka:** Geçerli çağrıdan önce doğru olması gereken caller yükümlülüğüdür.
10. **Ön:** Son koşul nedir? **Arka:** Geçerli ve normal dönüş sonrası fonksiyon garantisidir.
11. **Ön:** Gözlenebilir etki nedir? **Arka:** Dönüş dışında dış durum veya çevrede görülen değişikliktir.
12. **Ön:** Failure behavior nedir? **Arka:** Geçersiz veya başarısız durumda sözleşmeli davranıştır.
13. **Ön:** Return ne yapar? **Arka:** Fonksiyonu bitirip değer ve denetimi çağırana taşır.
14. **Ön:** `console.log` ne yapar? **Arka:** Ekrana yazma etkisi üretir; çağırana değer iletmez.
15. **Ön:** Eksik return sonucu nedir? **Arka:** Normal tamamlanmada JavaScript `undefined` döndürür.
16. **Ön:** İç içe çağrıda önce ne tamamlanır? **Arka:** Dış çağrının argümanını üreten iç çağrı.
17. **Ön:** Call frame nedir? **Arka:** Aktif çağrının yerel bilgisi ve dönüş noktasına dair modeldir.
18. **Ön:** Call stack nedir? **Arka:** Aktif çağrıların son giren ilk çıkan düzenidir.
19. **Ön:** Gizli girdi nedir? **Arka:** Sonucu etkileyip arayüzde görünmeyen bilgidir.
20. **Ön:** Gizli etki nedir? **Arka:** Contract'ta belirtilmeyen dış durum değişimidir.
21. **Ön:** İmza nedir? **Arka:** Fonksiyonun görünen çağrı arayüzüdür; tam contract değildir.
22. **Ön:** Implementation nedir? **Arka:** Contract davranışını gerçekleştiren iç mekanizmadır.
23. **Ön:** Aynı contract farklı implementation alabilir mi? **Arka:** Evet, gözlenebilir vaatler korunuyorsa.
24. **Ön:** Contract'tan hangi testler çıkar? **Arka:** Normal, sınır, geçersiz, etki ve hata testleri.
25. **Ön:** Karakterizasyon testi nedir? **Arka:** Mevcut gözlenebilir davranışı kaydeden testtir.
26. **Ön:** Contract violation nedir? **Arka:** Caller yükümlülüğü veya callee garantisinin bozulmasıdır.
27. **Ön:** Geçerli “bulunamadı” neden hatadan ayrılır? **Arka:** Caller farklı tepki vermelidir.
28. **Ön:** Contract-first nedir? **Arka:** Implementation öncesi davranış sınırlarını kesinleştirmektir.
29. **Ön:** AI contract denetiminde ilk soru nedir? **Arka:** Model hangi eksik varsayımları kendi seçti?
30. **Ön:** C13 başarı kanıtı nedir? **Arka:** Tam contract'lar, test matrisi ve doğru çağrı/dönüş izi.
