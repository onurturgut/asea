---
document_type: "exercise-set"
document_id: "V01-C12-EX01"
title: "V01-C12 Exercises"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C12"
learning_outcomes: ["V01-LO018"]
last_updated: "2026-07-23"
---

# Alıştırmalar

Her alıştırmada önce tahmin, sonra çalışma izi, en son kod bulunmalıdır.

## Uygulamalar

### Alıştırma 1 — İç bloğa erişim

`isActive` ve `hasPermission` için dört doğruluk birleşimini tabloya yazın. İç bloğun hangi satırlarda erişilebilir olduğunu belirtin.

### Alıştırma 2 — `else` sahipliği

Parantezsiz iki iç içe `if` ve tek `else` örneği yazın. `else` dalının hangi `if` yapısına bağlandığını tahmin edin; sonra süslü parantezle niyeti görünür yapın.

### Alıştırma 3 — Durum izi

Başlangıçta 0 olan puanı dış doğru dalda 10, iç doğru dalda 20 artıran kod için bütün uygulanabilir yolların son puanını hesaplayın.

### Alıştırma 4 — Uygulanamaz yol

`age >= 18` ile `age < 13` koşullarının dört doğruluk birleşiminden hangisinin uygulanamaz olduğunu gerekçelendirin.

### Alıştırma 5 — Koordinat üretimi

İki satır ve dört sütun üreten iç içe döngüyü yazın. Kodu çalıştırmadan sekiz çifti sırayla listeleyin.

### Alıştırma 6 — Değişken sınır

İç döngünün `1..row` çalıştığı, dış döngünün 1'den 5'e gittiği programın toplam iç gövde sayısını formül ve iz tablosuyla bulun.

### Alıştırma 7 — İç sayaç sızıntısı

İç sayacı yanlışlıkla dışarıda tanımlayan bir örnek oluşturun. İkinci dış turdaki belirtiyi ve kök nedeni açıklayın; kapsamı düzelterek onarın.

### Alıştırma 8 — `break` hedefi

Üç gün ve üç slot dolaşın. Slot 2 olduğunda `break` kullanın. Üretilen bütün çıktıları tahmin edin ve hangi döngünün devam ettiğini yazın.

### Alıştırma 9 — `continue` hedefi

Aynı örnekte slot 2 için `continue` kullanın. Alıştırma 8 ile çıktı ve kontrol aktarımı farkını karşılaştırın.

### Alıştırma 10 — Üç ayrı sayı

Üç ürün ve dört depoyu dolaşın; stok pozitifse sonucu kaydedin ve ilk beş sonuçtan sonrasını listeye eklemeyin. Aday, eşleşme ve kaydedilen sonuç sayılarını ayrı sayaçlarla ölçün.

### Alıştırma 11 — Birleşik koşula dönüştürme

Yalnız iç eylem içeren `if (A) { if (B) { ... } }` kodunu `A && B` ile yazın. Kısa devrenin erişim davranışını neden koruduğunu açıklayın.

### Alıştırma 12 — Güvensiz düzleştirme

Dış blokta ortak bir puan artırma işlemi bulunan örnek tasarlayın. Körlemesine `A && B` dönüşümünün hangi yolu bozduğunu testle gösterin.

### Alıştırma 13 — Adlandırılmış koşul

`isActive && capacity > reserved && conflictCount === 0` ifadesini alan dilindeki üç ara ad ve bir sonuç adıyla yeniden yazın.

### Alıştırma 14 — Guard clause

Pasif, kapasitesiz ve çakışmalı vakaları iç içe ele alan küçük bir fonksiyonu koruma koşullarıyla düzleştirin. Önce/sonra karar tablosu üretin.

### Alıştırma 15 — Erken çıkışın uygun olmadığı vaka

Bütün doğrulama hatalarının kullanıcıya birlikte gösterilmesi gereken bir kayıt formu tasarlayın. İlk hatada `return` kullanımının gereksinimi neden bozduğunu açıklayın.

### Alıştırma 16 — Durum bayrağı

İki döngüde ilk eşleşmeyi bulan `found` bayrağı kullanın. Bayrağın başlangıç, güncelleme ve dış döngü kontrol noktalarını tabloya yazın.

### Alıştırma 17 — Karakterizasyon testi

Eski bir koşul akışı için dört mevcut davranışı testle sabitleyin. Bilinen bir hatayı ayrı testle görünür yapın; refactoring ile hata düzeltme adımını ayırın.

### Alıştırma 18 — İlk ayrışma

Önceki dış turdan sızan `hasConflict` değerine sahip hatalı kodu çalıştırın. Beklenen ve gerçek izin ilk ayrıştığı satırı bulun.

### Alıştırma 19 — Kod inceleme

Bir AI aracından iç içe bir zamanlayıcıyı sadeleştirmesini isteyin. Öneride yol, yan etki, kısa devre sırası ve çıkış kapsamını kontrol eden bir inceleme notu yazın.

### Alıştırma 20 — Bağımsız aktarım

Gün-slot örneğini kullanmadan depo-ürün, öğrenci-sınav veya satır-sütun alanlarından birini seçin. En az dört yol, bir sınır vaka, bir guard ve bir iç döngü içeren çalışan çözüm üretin; sekiz testle doğrulayın.
