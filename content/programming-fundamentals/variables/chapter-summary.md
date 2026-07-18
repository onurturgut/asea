# Bölüm Özeti: Değişkenler (Variables) ve Durum (State)

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

## Ana Kavramlar

Bir **değişken** program durumuna verilen adlı bağlamadır. Kaynak
koddaki tanımlayıcı bağlamayı çözümler; bağlama da güncel değerle ilişkilidir.
Bu ayrım, değişkeni fiziksel bellek kutusuyla karıştırmadan program davranışını
açıklamayı sağlar.

Bildirim bağlama oluşturur, ilklendirme ilk değeri kurar, atama değer yazar,
yeniden atama değişebilir bağlamanın güncel değerini değiştirir. Mutasyon ise
bağlama yerine nesne veya koleksiyonun iç durumunu değiştirir.

## Öğrenilen Kurallar

- `const`, yeniden atanmayacak bağlamalar içindir.
- `let`, bilinçli yeniden atama içindir.
- `var`, sıradan blok kapsamlı değildir ve komutlardan önce `undefined` ile
  ilklendirilir.
- `let` ve `const` sözlüksel bağlamaları yaratılır fakat bildirim çalışana kadar
  ilklendirilmez.
- İlklendirilmemiş sözlüksel bağlamayı okumak `ReferenceError` üretir.
- Aynı kapsamda tekrarlı sözlüksel bildirim `SyntaxError` üretir.
- İlklendirilmiş `const` bağlamasını yeniden atamak `TypeError` üretir.
- En yakın aynı adlı bağlama dış bağlamayı gölgeler.

## Kritik Notlar

`const`, işaret edilen nesneyi dondurmaz. Sabit bağlama ile değişebilir nesne
birlikte bulunabilir. Bu nedenle bağlama politikası ve nesne mutasyon politikası
ayrı kararlardır.

Yukarı kaldırma, kaynak kod satırlarının taşınması değildir. Doğru açıklama
bağlamanın ne zaman yaratıldığı, ne zaman ilklendirildiği ve ne zaman
okunabildiğidir.

JavaScript her bağlama için evrensel yığın/öbek konumu veya `const`/`let`/`var`
performans sırası garanti etmez. Motor uygulaması ile dil semantiği ayrılmalıdır.

## Öğrenme Çıktıları Özeti

### `V01-LO009`

Öğrenci, bir atama dizisindeki her komut için:

- okunan bağlamaları;
- yazılan bağlamaları;
- önceki ve sonraki değerleri;
- hata oluşursa hata noktasını

gösteren eksiksiz durum tablosu üretebilir.

### `V01-LO010`

Öğrenci, bağlamanın beklenen yeniden atama ihtiyacını inceleyerek `const` veya
`let` seçimini gerekçelendirebilir; nesne mutasyonunu bu karardan ayrı ele alır.

## Hızlı Kontrol

Bir kod parçasını incelerken:

1. Bağlamaları ve ilk değerlerini bulun.
2. Her okuma ve yazmayı sırayla izleyin.
3. Yeniden atama ile mutasyonu ayırın.
4. Her adın kapsamını belirleyin.
5. `const`/`let` seçimini beklenen değişimle doğrulayın.
6. Hata varsa sonraki komutlar için durum üretmeyin.

## Bir Sonraki Bölüme Hazırlık

Sonraki bölümde operatörler ve ifadeler, bağlamaların değerlerini okuyup yeni
değerler üretecektir. Hazır olmak için durum tablosu oluşturabilmeli, atamanın
hangi değeri değiştirdiğini açıklayabilmeli ve her bağlama seçimini
gerekçelendirebilmelisiniz.

## İlgili Materyaller

- [Ana ders](./lesson.md)
- [Kod örnekleri](./examples.md)
- [Bilgi değerlendirmesi](./quiz.md)
- [Alıştırmalar](./exercises.md)
- [Laboratuvar](./lab.md)
- [Bilgi kartları](./flashcards.md)
- [Mülakat hazırlığı](./interview.md)
- [Hızlı tekrar](./cheatsheet.md)
