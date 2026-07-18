# Laboratuvar: Sipariş Durumu (State) İzleyicisi

Teknik sözlük: değişken (variable), bağlama (binding), bildirim (declaration),
ilklendirme (initialization), atama (assignment), yeniden atama (reassignment),
mutasyon (mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge
(Temporal Dead Zone) ve yukarı kaldırma (hoisting).

## Laboratuvar Amacı

Bir sipariş işleme senaryosunda bağlamaları doğru seçmek, bütün atamaları durum
tablosuyla izlemek ve bağlama yeniden atamasını nesne mutasyonundan ayırmak.

Hedefler:

- `V01-LO009`: Eksiksiz atama dizisi durum tablosu üretmek.
- `V01-LO010`: Sabit veya değişebilir bağlama seçimini beklenen değişime göre
  gerekçelendirmek.

## Ön Koşullar

- `lesson.md` ve `examples.md` dosyalarını tamamlamak
- Node.js veya modern tarayıcı konsolunda JavaScript çalıştırabilmek
- Nesne, dizi, döngü ve temel aritmetik ifadeleri okuyabilmek

## Senaryo

Bir siparişte sabit istek kimliği, ürün fiyatları, değişen ara toplam, sabit
kargo ücreti ve mutasyona uğrayan sipariş özeti vardır. Program her önemli
geçişte gözlemlenebilir durum çıktısı üretmelidir.

## Başlangıç Kodu

```js
const requestId = "req-1001";
const prices = [12, 8, 5];
const shippingFee = 4;
const order = {
  status: "created",
  itemCount: 0,
  subtotal: 0,
  total: 0,
};

let subtotal = 0;

// Görev 1: Her fiyatı subtotal değerine ekleyin.

// Görev 2: order nesnesinin itemCount ve subtotal özelliklerini güncelleyin.

// Görev 3: total bağlamasını doğru anahtar sözcükle oluşturun.

// Görev 4: order.total ve order.status özelliklerini güncelleyin.

console.log({
  requestId,
  subtotal,
  order,
});
```

## Yapılacak Görevler

1. `prices` dizisini `for...of` ile dolaşın.
2. Her fiyatı `subtotal` değerine ekleyin.
3. Her yinelemeden sonra `subtotal` için durum satırı kaydedin.
4. `order.itemCount` değerini ürün sayısıyla güncelleyin.
5. `order.subtotal` değerini hesaplanan ara toplamla güncelleyin.
6. `subtotal + shippingFee` değerini tutan `total` bağlamasını oluşturun.
7. `total` bağlaması için `const` veya `let` seçiminizi gerekçelendirin.
8. `order.total` değerini güncelleyin.
9. `order.status` değerini `"priced"` yapın.
10. Başlangıçtan sona bütün yazmaları içeren durum tablosu oluşturun.
11. Hangi işlemlerin yeniden atama, hangilerinin nesne mutasyonu olduğunu
    etiketleyin.
12. Her bağlamanın neden `const` veya `let` olduğunu birer cümleyle açıklayın.

## Teslim Edilecekler

- Çalışan `order-tracker.js`
- Konsol çıktısı
- Markdown biçiminde eksiksiz durum tablosu
- Bağlama karar tablosu
- Yeniden atama/mutasyon sınıflandırması

## Beklenen Çıktı

```text
{
  requestId: 'req-1001',
  subtotal: 25,
  order: {
    status: 'priced',
    itemCount: 3,
    subtotal: 25,
    total: 29
  }
}
```

Nesne biçimlendirmesi ortama göre değişebilir; değerler aynı olmalıdır.

Beklenen ara toplam izi:

| Yineleme | `price` | Önceki `subtotal` | Sonraki `subtotal` |
| ---: | ---: | ---: | ---: |
| 1 | 12 | 0 | 12 |
| 2 | 8 | 12 | 20 |
| 3 | 5 | 20 | 25 |

## İpuçları

- Her `price` yineleme içinde yeniden atanmaz.
- `subtotal` her yinelemede yeni sayı değeri alır.
- `order` bağlamasının sabit olması nesnenin özelliklerini değiştirmeyi
  engellemez.
- Durum tablosunda yalnızca son değeri değil her yazma işlemini gösterin.
- Hata alırsanız önce hata sınıfını, sonra hatanın oluştuğu komutu belirleyin.

## Çözüm Yaklaşımı

Önce durum sahiplerini sınıflandırın:

1. Kimlik ve giriş koleksiyonu yeniden atanmayacak bağlamalardır.
2. Ara toplam hesaplama boyunca yeniden atanır.
3. Nihai toplam bir kez hesaplanıyorsa sabit bağlamadır.
4. Sipariş nesnesinin bağlaması sabit kalırken özellikleri kontrollü biçimde
   mutasyona uğrar.

Sonra kodu küçük geçişlerle tamamlayın. Her geçişten sonra gerçek çıktıyı durum
tablosuyla karşılaştırın. En son bağlama seçimi gerekçelerini yazın; yalnızca
“modern kullanım” demek yerine beklenen yeniden atama ihtiyacını belirtin.

## Öz Değerlendirme Ölçütleri

| Ölçüt | Başarı koşulu |
| --- | --- |
| Çalışabilirlik | Program hatasız çalışır ve beklenen değerleri üretir |
| Durum izi | Her atama ve mutasyon doğru sırada gösterilir |
| Bildirim seçimi | Her `const`/`let` kararı beklenen değişimle gerekçelendirilir |
| Kavram ayrımı | Yeniden atama ve mutasyon doğru sınıflandırılır |
| Kod kalitesi | Adlar anlamlı, kapsamlar dar, gereksiz `var` yoktur |
