---
document_type: "flashcard-set"
document_id: "V01-C14-FC01"
title: "V01-C14 Flashcards"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
last_updated: "2026-07-23"
---

# Flashcards

1. **Ön:** Parameter nedir? **Arka:** Function tanımındaki adlandırılmış girdi konumudur.
2. **Ön:** Argument nedir? **Arka:** Çağrıda parameter'a değer sağlayan ifadedir.
3. **Ön:** Formal parameter nedir? **Arka:** Tanımdaki parameter için teknik addır.
4. **Ön:** Actual argument nedir? **Arka:** Belirli çağrıda sağlanan argument değeridir.
5. **Ön:** Positional binding nedir? **Arka:** Değerlerin listedeki konuma göre parameter'a bağlanmasıdır.
6. **Ön:** Argument evaluation sırası nedir? **Arka:** JavaScript'te soldan sağadır.
7. **Ön:** Eksik argument sonucu nedir? **Arka:** İlgili parameter çoğunlukla `undefined` olur.
8. **Ön:** Fazla argument ne olur? **Arka:** İfadesi değerlendirilir, named parameter'a bağlanmayabilir.
9. **Ön:** Default ne zaman çalışır? **Arka:** Argument omitted veya `undefined` olduğunda.
10. **Ön:** `null` default'u çalıştırır mı? **Arka:** Hayır, açık değerdir.
11. **Ön:** Rest parameter nedir? **Arka:** Kalan argument'ları array'de toplar.
12. **Ön:** Spread çağrıda ne yapar? **Arka:** Iterable değerleri ayrı argument'lara açar.
13. **Ön:** JavaScript nasıl aktarır? **Arka:** Değer aktarır; object value bir referanstır.
14. **Ön:** Primitive reassignment etkisi nedir? **Arka:** Yerel binding değişir, caller binding değişmez.
15. **Ön:** Object property mutation etkisi nedir? **Arka:** Aynı object'i gören caller değişimi görür.
16. **Ön:** Object parameter reassignment etkisi nedir? **Arka:** Caller'ın binding'ini değiştirmez.
17. **Ön:** Aliasing nedir? **Arka:** İki adın aynı object'e erişmesidir.
18. **Ön:** Necessary input nedir? **Arka:** Contract sonucu veya zorunlu etki için gereken veridir.
19. **Ön:** Unused input nedir? **Arka:** Davranışta kullanılmayan bağımlılıktır.
20. **Ön:** Derived input nedir? **Arka:** Diğer güvenilir girdilerden hesaplanabilen değerdir.
21. **Ön:** Duplicate input riski nedir? **Arka:** İki truth source çelişebilir.
22. **Ön:** Hidden input nedir? **Arka:** Sonucu etkileyip interface'te görünmeyen bilgidir.
23. **Ön:** Return value nedir? **Arka:** Function'ın caller'a açıkça ilettiği sonuçtur.
24. **Ön:** Print ne kanalıdır? **Arka:** Konsol veya kullanıcıya gözlenebilir etkidir.
25. **Ön:** Missing return sonucu nedir? **Arka:** Normal completion `undefined` üretebilir.
26. **Ön:** Result shape nedir? **Arka:** Dönen değerin caller'ın güvendiği yapı ve alanlarıdır.
27. **Ön:** Composition nedir? **Arka:** Bir return değerini uyumlu sonraki input'a bağlamaktır.
28. **Ön:** Command–query sezgisi nedir? **Arka:** Value result ile external effect sorumluluğunu ayırmayı sorgular.
29. **Ön:** Interface refactoring kanıtı nedir? **Arka:** Caller listesi, contract testleri ve önce/sonra data-flow'dur.
30. **Ön:** C14 başarı kanıtı nedir? **Arka:** Küçük explicit input interface ve print'ten ayrılmış return pipeline'ıdır.
