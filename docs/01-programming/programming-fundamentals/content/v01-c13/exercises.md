---
document_type: "exercise-set"
document_id: "V01-C13-EX01"
title: "V01-C13 Exercises"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
learning_outcomes: ["V01-LO019", "V01-LO020"]
last_updated: "2026-07-23"
---

# Alıştırmalar

Her alıştırmada önce sözleşme veya yürütme tahmini, sonra kod ve test kanıtı üretin.

## Uygulamalar

### Alıştırma 1 — Tanım ve çağrı

Bir `sayHello` fonksiyonu tanımlayın fakat çağırmayın. Sonra iki ayrı çağrı ekleyin. Tanım ile her çağrının programda ne zaman etkili olduğunu açıklayın.

### Alıştırma 2 — Davranışı adlandırma

`doIt`, `process` ve `handleData` adlarını taşıyan üç hayalî davranış için alan dilinde daha kesin isimler üretin. Her isim için tek cümlelik sorumluluk yazın.

### Alıştırma 3 — Contract tablosu

Dikdörtgen alanı için sorumluluk, girdi, ön koşul, çıktı, son koşul, etki ve hata davranışı tablosunu doldurun.

### Alıştırma 4 — Ön koşul

Bölme fonksiyonu için bölen sıfır, sayısal olmayan girdi ve sonlu olmayan sayı politikalarını seçin. Nelerin caller yükümlülüğü olduğunu gerekçelendirin.

### Alıştırma 5 — Son koşul

Mutlak değer fonksiyonu için tek örnek yerine iki genel son koşul yazın. Normal, sıfır ve negatif testleri üretin.

### Alıştırma 6 — `console.log` ve `return`

Toplamı yalnız yazdıran fonksiyonun sonucunu değişkene atayın. `undefined` belirtisini gözleyin; değer döndüren sürümle düzeltin.

### Alıştırma 7 — Eksik dönüş yolu

Yalnız pozitif sayıda sonuç döndüren, sıfır ve negatifte `undefined` üreten kod yazın. Yol tablosuyla eksik contract sonucunu bulun ve onarın.

### Alıştırma 8 — Çağrı izi

`addOne(double(4))` ifadesini tanım, argüman değerlendirme, çağrı, yerel değer, dönüş ve atama adımlarıyla izleyin.

### Alıştırma 9 — Üç seviyeli çağrı

`formatResult(addOne(double(4)))` çağrısını yazın. Her frame'in girişini, dönüş değerini ve geri dönülen noktayı tabloya kaydedin.

### Alıştırma 10 — Gizli girdi

Global vergi oranı kullanan fonksiyon oluşturun. Aynı fiyatın global oran değişince farklı sonucunu gösterin; oranı açık girdi hâline getirin.

### Alıştırma 11 — Gizli etki

Her çağrıda global sayaç artıran fonksiyonun contract'ını yazın. Sayacı kaldıran sürümle test ve yeniden kullanım farkını açıklayın.

### Alıştırma 12 — Hata ve bulunamadı

Bir etiketi kodla arayan fonksiyonda geçersiz kod türü ile geçerli fakat bulunamayan kodu ayrı temsil edin. Beş test yazın.

### Alıştırma 13 — Aynı contract, iki uygulama

Sayı listesini toplayan iki farklı döngü uygulaması yazın. Aynı contract testlerini ikisine de çalıştırın ve dış davranış eşdeğerliğini açıklayın.

### Alıştırma 14 — Contract'tan test

İndirimli fiyat sözleşmesinin her maddesinden en az bir test türetin: normal, sıfır, yüzde yüz, negatif, yüzde birden büyük, `NaN` ve etki.

### Alıştırma 15 — Birim belirsizliği

Hız ve süre alan fonksiyon için kilometre/saat–saat ve metre/saniye–saniye alternatiflerini karşılaştırın. Birimleri contract ve isimlerde açık hâle getirin.

### Alıştırma 16 — Erken dönüş yolları

Teslimat durumunu `invalid-address`, `no-capacity` ve `ready` olarak döndüren fonksiyon yazın. Üç yolun çağrı/dönüş izini çıkarın.

### Alıştırma 17 — Contract violation debug

`calculateAverage(0, 0)` sonucundaki `NaN` için belirti, ilk bozuk contract maddesi, ürün kararı, düzeltme ve regresyon testi yazın.

### Alıştırma 18 — Girdi değişimi

Bir öğrenci nesnesinin adını doğrudan değiştiren fonksiyon ile yeni değer döndüren fonksiyonu karşılaştırın. Etki ve test sözleşmelerini ayrı yazın.

### Alıştırma 19 — AI contract denetimi

AI'dan ilerleme yüzdesi fonksiyonu isteyin. `total=0`, yuvarlama, tür, aralık, etki ve hata varsayımlarını çıkarıp kabul/ret tablosu hazırlayın.

### Alıştırma 20 — Bağımsız toolkit

Üç ilişkili utility fonksiyonu tasarlayın. Her biri için contract, altı test ve en az bir iç içe çağrı izi üretin. Toplamda en az 18 test çalıştırın ve AI yardımını belgeleyin.
