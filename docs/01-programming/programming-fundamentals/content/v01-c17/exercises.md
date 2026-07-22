---
document_type: "exercise-set"
document_id: "V01-C17-EX01"
title: "V01-C17 Exercises"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
learning_outcomes: ["V01-LO025", "V01-LO026"]
last_updated: "2026-07-23"
---

# Alıştırmalar

Her alıştırmada önce beklenen sonucu yazın, sonra kodu çalıştırın. Yalnız ekran
görüntüsü değil; sözleşme, test girdileri ve kısa karar gerekçesi teslim edin.

## Uygulamalar

### Alıştırma 1 — İndeks haritası

`[12, 18, 25, 31]` dizisini değer, indeks ve uzunluk olarak çizin. İlk, üçüncü ve
son öğeye iki farklı biçimde erişen kodu yazın.

### Alıştırma 2 — Sınır denetimi

`readAt(values, index)` fonksiyonunu yazın. Negatif, kesirli ve uzunluğa eşit
indeksleri `RangeError` ile reddedin. En az altı test oluşturun.

### Alıştırma 3 — Boş konum ile undefined

`[10, , 30]` ve `[10, undefined, 30]` dizilerini `in`, `Object.keys`, `for...of`
ve `map` ile karşılaştırıp gözlemlerinizi tabloya yazın.

### Alıştırma 4 — Döngü sözleşmesi

Bir dizinin bütün öğelerini yazdıran indeksli döngü için başlangıç, sınır, adım,
geçerli öğe ve değişmezi ayrı ayrı belirtin.

### Alıştırma 5 — Off-by-one hata ayıklama

`index <= values.length` kullanan hatalı toplam fonksiyonunu çalıştırın. Son turdaki
`index`, öğe ve toplamı kaydedip düzeltmeyi açıklayın.

### Alıştırma 6 — Değer odaklı dolaşma

Aynı kelime dizisini indeksli `for`, `for...of` ve `entries()` ile dolaşın. Her
sürümün hangi bilgiye eriştiğini karşılaştırın.

### Alıştırma 7 — Güvenli silme

Dolaşma sırasında `splice` kullandığı için ardışık çift sayıları atlayan kodu yeniden
üretin. Yeni koleksiyon üreten bir çözüm ve sondan dolaşan bir çözüm yazın.

### Alıştırma 8 — map sözleşmesi

Santigrat değerlerini Fahrenhayt değerlerine dönüştürün. Kaynak ve sonuç uzunluğunu,
kaynak dizinin korunmasını ve boş dizi sonucunu test edin.

### Alıştırma 9 — Eksik return

Süslü parantezli `map` callback'inde `return` unutulduğunda oluşan sonucu tahmin
edin, çalıştırın ve nedenini kendi sözlerinizle açıklayın.

### Alıştırma 10 — Açık filter koşulu

`filter(Boolean)` yaklaşımının `[0, 1, false, true, null, ""]` üzerindeki etkisini
gösterin. Yalnız `null` ve `undefined` atan açık predicate yazın.

### Alıştırma 11 — Başlangıç değerli reduce

Bir sayı dizisini `reduce` ile toplayın. Boş dizi üzerinde başlangıç değerli ve
değersiz sürümleri karşılaştırıp hata kaydını ekleyin.

### Alıştırma 12 — Ortalama sözleşmesi

Boş dizide `null`, diğer dizilerde ortalama döndüren fonksiyon yazın. `[0]`, `[10]`,
`[10, 20]` ve `[]` testlerini kurun.

### Alıştırma 13 — Minimum tuzağı

Minimumu `0` ile başlatan hatayı `[4, 8, 12]` üzerinde gösterin. İlk öğeden başlayan
ve boş durumu yöneten doğru sürümü yazın.

### Alıştırma 14 — Nesne referansı

Nesne dizisini `filter` ile seçtikten sonra sonuçtaki nesneyi değiştirin. Kaynağın
neden değiştiğini açıklayın ve yeni nesne üreten sürümü yazın.

### Alıştırma 15 — Sepet hattı

Geçerli sepet satırlarını doğrulayın, satır toplamına dönüştürün ve ara toplamı
hesaplayın. Geçersiz satırı sessizce düşürmeyin; indeksiyle raporlayın.

### Alıştırma 16 — some ve every

Bir yetki listesinde en az bir yönetim izni ve bütün izin adlarının geçerli metin
olup olmadığını kontrol edin. Boş dizide iki yöntemin sonuçlarını açıklayın.

### Alıştırma 17 — Gruplama

Siparişleri `status` alanına göre nesne veya `Map` içinde gruplayın. Eksik durum
alanı için açık politika belirleyin.

### Alıştırma 18 — Tek ve çok geçiş

Toplam, minimum ve maksimumu önce üç ayrı açık geçişle, sonra tek geçişle hesaplayın.
İki sürüm için okunabilirlik ve ölçülen süre tablosu hazırlayın.

### Alıştırma 19 — Asenkron dolaşma

`forEach(async...)` ile yazılmış başlangıç kodunu düzeltin. Sıralı `for...of` ve
paralel `Promise.all` sürümlerinin hata ve zamanlama farkını açıklayın.

Başlangıç kodu:

```js
const ids = [101, 102, 103];

async function loadRecord(id) {
  return { id, loaded: true };
}

ids.forEach(async (id) => {
  const record = await loadRecord(id);
  console.log(record);
});

console.log("Bütün kayıtlar yüklendi.");
```

### Alıştırma 20 — Puan analiz motoru

Ana dersteki sözleşmeye göre doğrulama, özet, geçen/kalan listeleri ve harf notları
üreten motoru tamamlayın. En az on test, kaynak koruma kanıtı ve 200 kelimelik
tasarım karşılaştırması teslim edin.
