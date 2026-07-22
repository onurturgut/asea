---
document_type: "exercise-set"
document_id: "V01-C15-EX01"
title: "V01-C15 Exercises"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
learning_outcomes: ["V01-LO022", "V01-LO023"]
last_updated: "2026-07-23"
---

# Alıştırmalar

Her alıştırmada önce tahmin, sonra çalışma izi, en son gerçek çıktı üretin.

## Uygulamalar

### Alıştırma 1 — Bağları ayır

`let score = 1; { let score = 2; }` kodundaki ad, bağ ve değerleri ayrı listeleyin.

### Alıştırma 2 — En içten dışa ara

Üç iç içe blokta yalnız en dışta bildirilen `currency` adının çözümleme tablosunu çizin.

### Alıştırma 3 — Bulunamayan ad

Bir blok dışında erişilemeyen `message` örneği yazın; çalıştırmadan hata türünü ve arama zincirini belirtin.

### Alıştırma 4 — Sözcüksel mi dinamik mi?

Globalde tanımlanan bir fonksiyonu yerel aynı adlı değişken bulunan başka fonksiyondan çağırın ve neden yerel değeri görmediğini açıklayın.

### Alıştırma 5 — Global ve modül

Script global bağı ile ES module üst düzey bağının erişim yüzeyini karşılaştıran altı maddelik tablo oluşturun.

### Alıştırma 6 — Fonksiyon çağrıları

Aynı fonksiyonu iki kez çağırın; iki çağrının aynı adlı parametrelerinin neden ayrı bağlar olduğunu bir çağrı çerçevesi çizimiyle gösterin.

### Alıştırma 7 — Blok kapsamı

Bir `if` bloğunda `const` ile tanımlanan değerin dışarıdan erişilemediğini normal ve hata vakasıyla kanıtlayın.

### Alıştırma 8 — `var` karşı örneği

Alıştırma 7'yi `var` ile tekrarlayın. Kapsam ve başlatma davranışını ayrı açıklayın.

### Alıştırma 9 — Gölgeleme

İki `rate` bağı içeren örnek yazın. İç ve dış kullanım noktaları için ayrı arama izi üretin.

### Alıştırma 10 — Yeniden atama

Alıştırma 9'daki iç bildirimi kaldırıp atama yapın. Dış değerin neden değiştiğini bağ kimlikleriyle açıklayın.

### Alıştırma 11 — Anlamlı adlandırma

Üç farklı anlamda `status` kullanan bir kod parçasını `orderStatus`, `requestStatus` ve `displayStatus` gibi açık adlarla düzenleyin.

### Alıştırma 12 — Kapsam ve yaşam süresi

Yerel nesneyi return eden fonksiyon yazın. Yerel ad erişilemezken nesnenin neden kullanılabildiğini açıklayın.

### Alıştırma 13 — Kapanış izi

Bir sayaç kapanışının üç çağrısını zaman çizelgesinde gösterin; her çağrıdan önce ve sonra korunan bağın değerini yazın.

### Alıştırma 14 — Bağımsız kapanışlar

Aynı factory fonksiyonundan iki sayaç üretin. Durumlarının paylaşılmadığını en az beş çağrıyla kanıtlayın.

### Alıştırma 15 — Etki envanteri

Global sayaç okuyan, argüman nesnesini değiştiren ve konsola yazan bir fonksiyon için dört sütunlu etki envanteri çıkarın.

### Alıştırma 16 — Gizli saat

`Date.now()` okuyan bir fonksiyonu `now` parametresi alan deterministik çekirdeğe dönüştürün; iki sınır testi yazın.

### Alıştırma 17 — Rastgelelik bağımlılığı

`Math.random()` kullanan seçim fonksiyonuna `random` sağlayıcısı enjekte edin; sabit sağlayıcıyla üç test oluşturun.

### Alıştırma 18 — Yerel mutation

Yeni bir sonuç dizisine `.push` yapan fakat input dizisini değiştirmeyen fonksiyon yazın. Saflık değerlendirmesini önce/sonra nesne kanıtıyla açıklayın.

### Alıştırma 19 — Saf çekirdek

Global oran okuyup konsola fatura yazan fonksiyonu değer alan/döndüren çekirdek ve yazdırma sınırı olarak ayırın.

### Alıştırma 20 — AI etki denetimi

AI'dan küçük bir rezervasyon fonksiyonu isteyin. Serbest adları, gizli okumaları, dış yazmaları ve test boşluklarını çıkarın; en az bir öneriyi kanıtla reddedin.

## Tamamlanma Ölçütü

En az 16 alıştırmayı tamamlayın; 2, 4, 9, 10 ve 13 `V01-LO022`, 15–20 ise
`V01-LO023` için zorunludur. Her zorunlu görevde kod, tahmin ve doğrulama kanıtı bulunmalıdır.
