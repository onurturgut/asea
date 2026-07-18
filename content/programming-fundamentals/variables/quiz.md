# Değişkenler (Variables) ve Durum (State) Bilgi Değerlendirmesi

<!-- markdownlint-disable MD024 MD033 -->

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

Bu değerlendirme durum geçişlerini izleme (`V01-LO009`) ile sabit/değişebilir
bağlama seçimini gerekçelendirme (`V01-LO010`) becerilerini ölçer.

## Uygulama Yöntemi

1. Cevap anahtarını açmadan bütün soruları yanıtlayın.
2. Her cevabın yanına güven düzeyinizi `1`, `2` veya `3` olarak yazın.
3. Sorular tamamlanınca katlanabilir cevap anahtarını açın.
4. Sonucunuzu `Doğru`, `Kısmen Doğru` veya `Tekrar Et` olarak işaretleyin.
5. Yalnızca cevabı değil ilgili açıklamayı da inceleyin.
6. Yanlış veya düşük güvenli soruları 24 saat sonra yeniden çözün.

## Çoktan Seçmeli Sorular

### Soru 1

`let score = 10; score += 5;` çalıştıktan sonra `score` kaçtır?

- A) 5
- B) 10
- C) 15
- D) `undefined`

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 2

Yeniden atanmayacak bir istek kimliği için en uygun bildirim hangisidir?

- A) `var requestId = createId();`
- B) `let requestId = createId();`
- C) `const requestId = createId();`
- D) `requestId = createId();`

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 3

`const user = { visits: 0 }; user.visits += 1;` için hangisi doğrudur?

- A) `user` bağlaması yeniden atanmıştır.
- B) Nesne mutasyona uğramıştır.
- C) Kod her zaman `TypeError` üretir.
- D) `const` nesneyi dondurmuştur.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 4

Sıradan bir `if` bloğunda bildirilen `var` hangi kapsama aittir?

- A) Her zaman yalnızca `if` bloğuna
- B) İçinde bulunduğu fonksiyonun değişken ortamına
- C) Yalnızca `const` kapsamına
- D) Hiçbir kapsama

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 5

`let` bağlamasını bildiriminden önce okumak genellikle ne üretir?

- A) `null`
- B) `undefined`
- C) `ReferenceError`
- D) `TypeError`

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 6

Hangisi yeniden bildirim değil, yeniden atamadır?

- A) `let count = 0; let count = 1;`
- B) `const count = 0; const count = 1;`
- C) `let count = 0; count = 1;`
- D) `let count; let count;`

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 7

`const first = {}; const second = first;` için hangisi doğrudur?

- A) İki ayrı nesne oluşturulur.
- B) `second`, nesnenin derin kopyasıdır.
- C) İki bağlama aynı nesne kimliğine başvurur.
- D) `first` artık kullanılamaz.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 8

Modern uygulama kodunda `var` yerine `let`/`const` tercihinin temel gerekçesi
hangisidir?

- A) `const` her zaman daha hızlıdır.
- B) Daha açık yeniden atama niyeti ve daha dar sözlüksel kapsam sağlarlar.
- C) `var` JavaScript'ten kaldırılmıştır.
- D) `let` nesneleri otomatik dondurur.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 9

`console.log(value); var value = 7;` kodunun ilk çıktısı nedir?

- A) 7
- B) `undefined`
- C) `ReferenceError`
- D) `SyntaxError`

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 10

Bir bağlamanın erişilebilir olduğu bölgeyi hangi kavram açıklar?

- A) Tür
- B) Mutasyon
- C) Kapsam
- D) Çöp toplama

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

## Doğru veya Yanlış Soruları

### Soru 11

`const`, işaret edilen nesnenin tüm özelliklerini değiştirilemez yapar.

**Cevabınız (Doğru/Yanlış):**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 12

`let` ve `const` sıradan bloklarla sınırlandırılabilir.

**Cevabınız (Doğru/Yanlış):**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 13

Yukarı kaldırma, dil standardının kaynak satırlarını fiziksel olarak taşıdığı
anlamına gelir.

**Cevabınız (Doğru/Yanlış):**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 14

`let total;` çalıştığında `total`, `undefined` ile ilklendirilir.

**Cevabınız (Doğru/Yanlış):**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 15

Bir bağlamayı `null`a atamak nesnenin hemen çöp toplama ile silineceğini garanti
eder.

**Cevabınız (Doğru/Yanlış):**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 16

Dar kapsam, değişebilir duruma erişebilen kod miktarını azaltabilir.

**Cevabınız (Doğru/Yanlış):**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

## Boşluk Doldurma Soruları

### Soru 17

Bir ad ile güncel değeri arasındaki ilişkiye ______ denir.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 18

Bir bağlamanın ilk değerinin kurulmasına ______ denir.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 19

Sözlüksel bağlamanın var fakat ilklendirilmemiş olduğu aralık ______ olarak
adlandırılır.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 20

Nesnenin özelliğini değiştirmek bağlama yeniden ataması değil, nesne ______
işlemidir.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 21

Yeniden atama planlanmayan modern JavaScript bağlamalarında genellikle ______
kullanılır.

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

## Kavram Eşleştirme Soruları

### Soru 22

Eşleştirin: A) Bildirim, B) Atama, C) Mutasyon

1. `user.visits += 1`
2. `let count;`
3. `count = 2`

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`, `V01-LO010`

### Soru 23

Eşleştirin: A) `var`, B) `let`, C) `const`

1. Yeniden atanamayan sözlüksel bağlama
2. Değişebilir sözlüksel bağlama
3. Sıradan blokla sınırlandırılmayan değişebilir bağlama

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

### Soru 24

Eşleştirin: A) `SyntaxError`, B) `ReferenceError`, C) `TypeError`

1. `const` bağlamasını yeniden atama
2. Aynı kapsamda iki `let` bildirimi
3. Geçici Ölü Bölgedeki bağlamayı okuma

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO009`

### Soru 25

Eşleştirin: A) İstek kimliği, B) Yeniden deneme sayacı, C) Paylaşılan önbellek

1. `let` bağlaması
2. `const` bağlaması ve ayrıca belirlenen mutasyon politikası
3. Yeniden atanmayan `const` bağlaması

**Cevabınız:**  
**Güven düzeyiniz (1-3):**  
**İlgili öğrenme çıktısı:** `V01-LO010`

## Cevap Anahtarı

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
