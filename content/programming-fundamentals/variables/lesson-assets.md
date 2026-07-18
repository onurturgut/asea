# Değişkenler (Variables) ve Durum (State): Ders Varlıkları

Bu dosya [Değişkenler ve Durum](./lesson.md) dersi için tekrar kullanılabilir
öğrenci materyallerini tanımlar. Bilgi değerlendirmesi, laboratuvar, bilgi
kartı, sunum veya AI Mentor etkileşimi içermez.

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

## Terim Kartları

### Değişken

Program durumuna verilen adlı bağlama.

Sınır: değişkeni otomatik olarak tek bir fiziksel bellek adresiyle eşitlemeyin.

### Bağlama

Dil ortamında bir ad ile güncel değeri arasındaki ilişki.

Sınır: bağlama, nesne veya nesne özelliğiyle aynı şey değildir.

### Bildirim

Bir veya daha fazla bağlama oluşturan sözdizimi.

Örnek: `let total;`

### İlklendirme

Bağlama yaratıldıktan sonra ilk değerinin kurulması.

Örnek: `let total = 0;`

### Atama

Bir başvuru üzerinden değer yazan işlem.

Örnek: `total = 12;`

### Yeniden atama

Değişebilir bağlamanın güncel değerinin değiştirilmesi.

Örnek: `total = 15;`

### Mutasyon

Nesne veya koleksiyonun iç durumundaki değişiklik.

Örnek: `cart.items.push(item);`

### Kapsam

Bağlamanın erişilebilir olduğu bölge.

Sınır: kapsam görünürlükle ilgilidir; fiziksel bellek konumu veya nesne yaşam
süresi garantisi değildir.

### Geçici Ölü Bölge

Sözlüksel bağlamanın var olduğu fakat henüz ilklendirilmediği çalışma aralığı.

### Yukarı kaldırma

Ardışık komutlar başlamadan önceki bildirim işleme davranışları için toplulukta
kullanılan kısaltma.

Sınır: ECMAScript dil standardı kaynak kod satırlarını taşımaz.

## Temel Karşılaştırma Tablosu

| Özellik | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Yeniden atama | İzinli | İzinli | Reddedilir |
| İlklendirici zorunlu | Hayır | Hayır | Evet |
| Sıradan blok kapsamlı | Hayır | Evet | Evet |
| Komutlardan önce yaratılır | Evet | Evet | Evet |
| Bildirimden önce ilklendirilir | Evet, `undefined` | Hayır | Hayır |
| Erken okuma | `undefined` | `ReferenceError` | `ReferenceError` |
| Aynı kapsamda tekrarlı bildirim | `var` ile çoğu zaman izinli | Erken `SyntaxError` | Erken `SyntaxError` |
| Modern kullanım | Özel semantiği gerektiğinde | Bilinçli yeniden atama | Yeniden atama planlanmadığında |

Tablo sıradan durumları özetler. Global betikler, modüller, parametreler,
`eval`, Annex B davranışı ve çalışma ortamları ek sınırlar getirir.

## Durum Tablosu Kalıbı

### Boş kalıp

| Adım | Komut | Okumalar | Yazmalar | Sonraki durum |
| ---: | --- | --- | --- | --- |
| 1 |  |  |  |  |

### Tamamlanmış kalıp

Şu kod için:

```js
let balance = 10;
balance += 5;
balance -= 3;
```

şu tabloyu kullanın:

| Adım | Komut | Okumalar | Yazmalar | Sonraki `balance` |
| ---: | --- | --- | --- | ---: |
| 1 | `let balance = 10` | `10` sabiti | `balance` ilklendirilir | 10 |
| 2 | `balance += 5` | `balance`, `5` | `balance` yeniden atanır | 15 |
| 3 | `balance -= 3` | `balance`, `3` | `balance` yeniden atanır | 12 |

## Bağlama Seçim Rehberi

Soruları sırayla yanıtlayın:

1. Bu ad daha sonra farklı bir değerle ilişkilendirilecek mi?
2. Hayırsa `const` seçin.
3. Evetse `let` seçin ve planlanan geçiş noktalarını belirleyin.
4. Değer nesneyse nesne mutasyonuna izin verilip verilmediğini ayrıca belirleyin.
5. Bildirimi duruma sahip olan en dar kapsama yerleştirin.
6. `var`ı yalnızca özel semantiği gerektiğinde kullanın.

## Yanlış Anlama Düzeltmeleri

| Yanlış anlayış | Doğru açıklama |
| --- | --- |
| JavaScript değişkeninin tek ve sabit türü vardır. | Değerlerin türü vardır; değişebilir bağlama daha sonra başka türden değer tutabilir. |
| `const` nesneyi dondurur. | `const` bağlama yeniden atamasını engeller; nesne durumu değişebilir. |
| `let` kendi satırından önce yoktur. | Bağlama daha önce yaratılır, bildirim çalışana kadar ilklendirilmez. |
| Yukarı kaldırma bildirimleri taşır. | Bildirim oluşturma ve ilklendirme farklı zamanlarda gerçekleşir. |
| `var` blok kapsamlıdır. | Sıradan `var`, fonksiyon veya değişken-ortamı kapsamlıdır. |
| Her global bildirim `globalThis` üzerindedir. | Klasik betikte üst düzey sözlüksel bildirimler global nesne özelliği değildir. |
| Değişkeni `null` yapmak belleği hemen boşaltır. | Yalnızca bir başvuru kaldırılır; erişilebilirlik ve toplama motorun denetimindedir. |
| `const` her zaman daha hızlıdır. | ECMAScript anahtar sözcükler için evrensel performans sırası garanti etmez. |

## Mühendislik Bilgi Kutuları

### Alışkanlık değil niyet

`const` veya `let` seçimini kişisel alışkanlıktan ya da veri türünden değil,
bağlamanın beklenen yaşam döngüsünden yapın.

### Sabit bağlama, değişebilir nesne

Sabit bağlama değişebilir nesneye başvurabilir. Bağlama politikası ile nesne
durumu politikası ayrı incelenmelidir.

### Kapsam bir bakım sınırıdır

Değişebilir duruma erişebilen her ek satır düşünme alanını büyütür. Dar kapsam
bu alanı küçültür.

### Durum geçişlerini adlandırın

Güncelleme anlamlı bir alan olayını temsil ediyorsa, açıklamasız atamalara
dağıtmak yerine bu olayı kodda görünür yapın.

### Politika semantik değildir

Lint kuralları takım uygulamalarını zorunlu kılabilir; JavaScript dilini
değiştirmez.

## Hata Sınıflandırma Tablosu

| Durum | Aşama | Tipik hata veya sonuç |
| --- | --- | --- |
| Aynı kapsamda iki `let` bildirimi | Ayrıştırma/erken doğrulama | `SyntaxError` |
| İlklendiricisiz `const` | Ayrıştırma/erken doğrulama | `SyntaxError` |
| Geçici Ölü Bölgedeki bağlamayı okuma | Çalışma zamanı | `ReferenceError` |
| İlklendirilmiş `const`u yeniden atama | Çalışma zamanı | `TypeError` |
| İlklendiriciden önce bildirilmiş `var`ı okuma | Çalışma zamanı | `undefined` |
| Erişilemeyen blok bağlamasını okuma | Çalışma zamanı | `ReferenceError` |

Kesin hata iletisi motorlara göre değişebilir. Öğrenme açısından hata sınıfı ve
aşaması önemlidir.

## Görseller İçin Erişilebilirlik Metinleri

### Bağlama anatomisi

`score` tanımlayıcısı tek bir bağlamayı çözümler. Başlangıçta bağlamanın güncel
değeri `10`dur. Yeniden atamadan sonra aynı bağlamanın değeri `15` olur.
Diyagram fiziksel bellek haritası değil, soyut durum modelidir.

### Sabit bağlama ve nesne mutasyonu

Değiştirilemez `settings` bağlaması, `theme` özelliği `light`tan `dark`a
değişmeden önce ve sonra aynı nesneye başvurur. Bağlamayı başka değerle
değiştirmek yasaktır; özelliği değiştirmek ayrı işlemdir.

### Kapsam araması

En iç bloktaki okuma önce blok ortamını, sonra fonksiyon ortamını, sonra dış
ortamı arar. İlk eşleşen ad seçilir.

### Bildirim yaşam döngüsü

Komutlar başlamadan `var` bağlaması yaratılmış ve `undefined` ile
ilklendirilmiştir. `let` veya `const` bağlaması yaratılmış ama
ilklendirilmemiştir. Bildirim çalıştığında sözlüksel bağlama ilklendirilir.

## Editoryal Dil Kuralları

- Teknik terimi ilk kullanımda Türkçe (English) biçiminde verin.
- Sonraki kullanımlarda Türkçe karşılığı kullanın.
- Programlama anahtar sözcükleri ve tanımlayıcıları İngilizce bırakın.
- Kod yorumlarını Türkçe yazın.
- Yeniden atama semantiğinde “bağlama” sözcüğünü kullanın.
- Nesne özelliği değişiminde “nesne mutasyonu” deyin.
- Global davranışı klasik betik, modül, tarayıcı veya çalışma ortamıyla
  sınırlandırın.
- Yukarı kaldırma ifadesini doğru oluşturma/ilklendirme açıklamasından sonra
  kullanın.
- Yığın/öbek yerleşimini evrensel JavaScript kuralı gibi sunmayın.

## Kaynak Temeli

- [Variables Research Packet](../../../research/programming-fundamentals/variables/research-packet.md)
- [Aşamalı kod örnekleri](./examples.md)
- [Görselleştirme notları](./visualization-notes.md)
