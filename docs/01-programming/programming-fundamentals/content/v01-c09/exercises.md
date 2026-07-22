---
document_type: "exercise-set"
document_id: "V01-C09-EX01"
title: "Boolean Mantığı ve Doğruluk Alıştırmaları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
learning_outcomes:
  - "V01-LO013"
  - "V01-LO014"
---

# Boolean Mantığı ve Doğruluk Alıştırmaları

Her alıştırmada önce tahminini yaz, sonra kod veya tabloyla doğrula. Yalnız sonucu değil, gerekçeni de kaydet.

## Alıştırmalar

### Alıştırma 1 — Mantıksal Değeri Tanı

Aşağıdaki değerleri “mantıksal değer”, “metin” veya “sayı” olarak sınıflandır: `true`, `"true"`, `false`, `0`, `"false"`, `1`. Ardından her biri için `typeof` çıktısını tahmin et ve JavaScript ile doğrula.

### Alıştırma 2 — Önerme mi?

Şu ifadeleri önerme olanlar ve olmayanlar diye ayır: “Sunucu çalışıyor”, “Sunucuyu başlat”, “Sunucu çalışıyor mu?”, “Yanıt süresi 200 ms'den küçüktür”, “Daha hızlı ol.” Her kararın için bir cümle gerekçe yaz.

### Alıştırma 3 — Sınır Değerleri

`age >= 18` karşılaştırmasını 17, 18 ve 19 için değerlendir. Gereksinim “18 yaşından büyük” olsaydı operatör ve sonuçlar nasıl değişirdi?

### Alıştırma 4 — DEĞİL Tablosu

`isBlocked` için iki satırlık doğruluk tablosu oluştur. `canEnter = !isBlocked` sonucunu ekle ve doğal dilde açıkla.

### Alıştırma 5 — VE Tablosu

`hasTicket && passedSecurity` ifadesinin dört satırlık doğruluk tablosunu oluştur. Hangi satırda giriş verildiğini belirt.

### Alıştırma 6 — VEYA Tablosu

`hasEmail || hasPhone` ifadesinin dört satırlık tablosunu oluştur. İki yöntemin birlikte bulunduğu satırın neden doğru olduğunu açıkla.

### Alıştırma 7 — Dışlayıcı Seçim

Bir kullanıcı yalnız kart veya yalnız havale seçtiğinde geçerli olan, ikisini birden ya da hiçbirini seçtiğinde geçersiz olan iki girdili bir ifade kur. Tabloyla doğrula.

### Alıştırma 8 — Üç Girdili Tablo

`A && B && C` için sekiz satırlık tablo oluştur. Sistematik satır üretme düzenini notlarında açıkla.

### Alıştırma 9 — Ara Sütunlar

`(A || B) && !C` için `A || B`, `!C` ve sonucun ayrı olduğu sekiz satırlık tablo oluştur. Bir satırdaki hesabı adım adım anlat.

### Alıştırma 10 — Öncelik Tahmini

`true || false && false` ifadesini çalıştırmadan hesapla. Sonra parantezli iki olası yorumu ayrı ayrı çalıştır ve hangisinin JavaScript davranışıyla aynı olduğunu göster.

### Alıştırma 11 — Hatalı Rol Kontrolü

`role === "admin" || "owner"` ifadesinin neden yanlış olduğunu açıklayan küçük bir program yaz. `guest`, `owner` ve `admin` girdilerini dene; sonra doğru ifadeyi kur.

### Alıştırma 12 — De Morgan I

`!(isActive && isVerified)` ifadesini De Morgan kullanarak dönüştür. Dört satırlık tabloyla iki sonucun eşit olduğunu göster.

### Alıştırma 13 — De Morgan II

`!(hasEmail || hasPhone)` ifadesini dönüştür. Sonucu “hesabı kurtarmak için hiçbir yöntem yok” bağlamında doğal Türkçeyle açıkla.

### Alıştırma 14 — Doğru ve Yanlış Değerler

`false`, `0`, `1`, `""`, `"0"`, `"false"`, `null`, `undefined`, `NaN`, `[]` ve `{}` değerlerini `Boolean(...)` ile sınamadan önce tahmin et. Yanlış tahminlerini ayrı bir listede tut.

### Alıştırma 15 — İşlenen Döndürme

Şu ifadelerin hem değerini hem türünü tahmin et: `"ASEA" && 42`, `0 && "devam"`, `"" || "Misafir"`, `"Onur" || "Misafir"`. Kodla doğrula.

### Alıştırma 16 — Kısa Devre Gözlemi

Konsola mesaj yazan `secondCheck` işlevi oluştur. `false && secondCheck()` ve `true || secondCheck()` ifadelerinde mesajın neden görünmediğini açıkla.

### Alıştırma 17 — Adlandırılmış Yüklemler

`age >= 18 && status === "active" && emailVerified === true` ifadesini üç anlamlı ara yükleme ayır. Davranışı değiştirmediğini dört farklı veri örneğiyle göster.

### Alıştırma 18 — Varsayılan Değer Tuzağı

Yeniden deneme sayısı bilinçli olarak `0` olduğunda `retryCount || 3` ifadesinin sonucunu gözle. Sıfırın neden “eksik” sayılamayacağını açıkla ve `??` ile karşılaştırmalı bir örnek yaz.

### Alıştırma 19 — Çalışma Ortamını Hazırla

Bilgisayarında Node.js'in kurulu olduğunu `node --version` ile doğrula. Yeni bir `boolean-practice` klasörü, içinde `index.js` dosyası oluştur. Terminali bu klasörde açıp `node index.js` komutunu çalıştır. Komut, yol veya sürüm hatası alırsan hata mesajını ve çözüm adımlarını çalışma günlüğüne kaydet.

### Alıştırma 20 — Karar Denetleyicisi

Aşağıdaki başlangıç kodunu tamamla. Sekiz durumun tümünde `passed` değeri `true` olmalıdır. Önce beklenen kuralı doğal dilde yaz, ardından ifadeyi ekle.

```js
const cases = [
  { active: false, locked: false, role: false, expected: false },
  { active: false, locked: false, role: true, expected: false },
  { active: false, locked: true, role: false, expected: false },
  { active: false, locked: true, role: true, expected: false },
  { active: true, locked: false, role: false, expected: false },
  { active: true, locked: false, role: true, expected: true },
  { active: true, locked: true, role: false, expected: false },
  { active: true, locked: true, role: true, expected: false },
];

for (const testCase of cases) {
  const actual = /* ifadeni buraya yaz */;

  console.log({
    ...testCase,
    actual,
    passed: actual === testCase.expected,
  });
}
```

Tesliminde kod, terminal çıktısı, sekiz satırlık doğruluk tablosu ve bir paragraflık öz değerlendirme bulunmalıdır.
