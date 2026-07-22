---
supporting_document_id: "V01-C06-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "V01-C06 Quiz Cevap Anahtarı"
version: "0.1.0"
status: "Draft"
owner: "Assessment Maintainer"
scope_id: "V01-C06-QZ01"
source_document: "quiz.md"
source_version: "0.1.0"
canonical_registry: "../../../assessment.md"
generated_date: "2026-07-22"
language: "tr"
access: "post-attempt"
---

# V01-C06 Quiz Cevap Anahtarı

<!-- markdownlint-disable MD012 MD033 -->

Yalnız quiz cevapları kilitlendikten sonra açılır.

## Yanıtlar ve Açıklamalar

Soruların tamamını yanıtlamadan bu bölümü açmayın.

<details>
<summary>Cevap anahtarını göster</summary>

| Soru | Doğru cevap | Soru | Doğru cevap |
| ---: | --- | ---: | --- |
| 1 | C | 14 | Doğru |
| 2 | C | 15 | Yanlış |
| 3 | B | 16 | Doğru |
| 4 | B | 17 | Bağlama |
| 5 | C | 18 | İlklendirme |
| 6 | C | 19 | Geçici Ölü Bölge |
| 7 | C | 20 | Mutasyon |
| 8 | B | 21 | `const` |
| 9 | B | 22 | A-2, B-3, C-1 |
| 10 | C | 23 | A-3, B-2, C-1 |
| 11 | Yanlış | 24 | A-2, B-3, C-1 |
| 12 | Doğru | 25 | A-3, B-1, C-2 |
| 13 | Yanlış |  |  |

</details>

## Açıklamalar

Önce cevabınızı anahtarla karşılaştırın, sonra açıklamayı açın.

<details>
<summary>Açıklamaları göster</summary>

1. `+= 5`, güncel `10` değerini okur ve bağlamayı `15` ile yeniden atar.
2. Yeniden atama yoksa `const` bu niyeti açıkça gösterir.
3. Bağlama aynı nesneye başvururken nesnenin özelliği değişir.
4. Sıradan bloklar `var` için yeni blok kapsamı oluşturmaz.
5. İlklendirilmemiş sözlüksel bağlamayı okumak `ReferenceError` üretir.
6. İkinci komut yeni bağlama bildirmez; mevcut bağlamayı günceller.
7. Atama nesneyi kopyalamaz; iki bağlama aynı nesne kimliğine başvurur.
8. Tercih performans garantisine değil açık niyet ve dar kapsama dayanır.
9. `var` önceden `undefined` ile ilklendirilir; `7` daha sonra atanır.
10. Kapsam, adın hangi bölgelerden çözümlenebildiğini belirler.
11. `const` nesneyi değil bağlama yeniden atamasını sınırlar.
12. `let` ve `const` sözlüksel ve blok kapsamlı olabilir.
13. Yukarı kaldırma satır taşıma değil bildirim işleme etkileri için kısaltmadır.
14. İlklendiricisiz `let`, bildirimi çalıştığında `undefined` alır.
15. `null` ataması bir başvuruyu kaldırır; hemen toplamayı garanti etmez.
16. Dar kapsam duruma erişen kodu ve düşünme yüzeyini azaltır.
17. Bağlama, ad ile güncel değer arasındaki ilişkidir.
18. İlklendirme bağlamanın ilk değerini kurar.
19. Bu aralıkta bağlama vardır fakat ilklendirilmemiştir.
20. Nesnenin iç durumundaki değişiklik mutasyondur.
21. Yeniden atama planlanmıyorsa modern kodda genellikle `const` seçilir.
22. Bildirim bağlama oluşturur, atama değer yazar, mutasyon nesneyi değiştirir.
23. `var` sıradan blok kapsamlı değildir; `let` değişebilir, `const`
    değiştirilemez sözlüksel bağlamadır.
24. Tekrarlı sözlüksel bildirim erken sözdizimi, Geçici Ölü Bölge okuması
    başvuru, `const` yeniden ataması tür hatası üretir.
25. İstek kimliği sabit, sayaç değişebilir, önbellek bağlaması sabit fakat
    mutasyon politikası ayrıca belirlenmiş durumdur.

</details>

## Öz Değerlendirme

| Sonuç | Eylem |
| --- | --- |
| 22-25 doğru | Yanlış veya düşük güvenli soruları tekrar edin, sonra uygulamaya geçin |
| 17-21 doğru | İlgili ders bölümlerini ve kod örneklerini yeniden inceleyin |
| 0-16 doğru | Zihinsel model, bildirim türleri ve kapsam bölümlerini yeniden çalışın |

Yanlış sayısı kadar güven kalibrasyonunu da değerlendirin. Doğru fakat düşük
güvenli cevaplar tekrar listesine eklenmelidir.

## Kapsam Özeti

| Öğrenme çıktısı | İlgili sorular |
| --- | --- |
| `V01-LO009` | 1, 4-6, 9-10, 12-14, 17-19, 22, 24 |
| `V01-LO010` | 2-3, 7-8, 11, 15-16, 20-21, 22-23, 25 |
