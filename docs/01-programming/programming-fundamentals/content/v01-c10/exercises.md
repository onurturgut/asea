---
document_type: "exercise-set"
document_id: "V01-C10-EX01"
title: "Koşullu Yürütme Alıştırmaları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C10"
learning_outcomes: ["V01-LO015", "V01-LO016"]
---

# Koşullu Yürütme Alıştırmaları

## Alıştırmalar

Her görevde önce tahmin, sonra yürütme izi, en son gerçek çıktı üret.

### Alıştırma 1 — Sıra mı Seçim mi?

Beş küçük kod parçası yaz: yalnız sıra, tek `if`, `if...else`, iki bağımsız `if` ve `else if` zinciri. Her birinde kaç farklı yürütme yolu olduğunu açıkla.

### Alıştırma 2 — Tek `if`

Stok 5 veya altındaysa uyarı yazdır; diğer durumda özel eylem yapma. 5 ve 6 girdilerini dene.

### Alıştırma 3 — İki Yol

Sayı çiftse “çift”, değilse “tek” yazdır. -2, 0 ve 7 için yolu izle.

### Alıştırma 4 — Üçlü Sınıflandırma

Sayıyı negatif, sıfır veya pozitif sınıflandır. Her dal için bir test girdisi eşle.

### Alıştırma 5 — Yanlış Sıra

`score >= 50` dalını `score >= 90` dalından önce yazıp 95 ile gözle. Özel dalı erişilebilir yapacak düzeltmeyi açıkla.

### Alıştırma 6 — Bağımsız Kurallar

Bir kullanıcının hem “doğrulandı” hem “premium” rozetini aynı anda alabilmesini bağımsız `if`lerle modelle. Zincir kullanıldığında kaybolan davranışı göster.

### Alıştırma 7 — Blok Sınırı

Süslü parantezsiz iki satırlı bir `if` örneğinde yalnız ilk satırın koşullu olduğunu gözle. Kodu blokla düzelt.

### Alıştırma 8 — En Yakın `if`

İç içe, parantezsiz iki `if` ve bir `else` yaz. `else`in hangi koşula ait olduğunu girinti değil sözdizim üzerinden açıkla.

### Alıştırma 9 — Varsayılan Durum

`draft`, `review`, `published` durumlarını işle. Bilinmeyen değer için açık hata sonucu üret ve dört test yaz.

### Alıştırma 10 — `switch`

`start`, `stop`, `status` komutlarını `switch` ile yönlendir. Bilinmeyen komut için `default` ekle.

### Alıştırma 11 — Fall-Through Hatası

Bir `case`ten `break` kaldır. Çıktıyı tahmin et, çalıştır ve istemsiz geçişi düzelt.

### Alıştırma 12 — Ortak Eylem

Cumartesi ve pazar değerlerini aynı “hafta sonu” eylemine kasıtlı geçişle bağla. Kasıtı yorumla görünür yap.

### Alıştırma 13 — Karar Tablosu

Adres geçerliliği, yurt dışı ve hızlı teslimat koşulları için ana dersteki dört sütunlu tabloyu notsuz yeniden oluştur.

### Alıştırma 14 — Eksik Sütun

Üyelik ve sepet sınırıyla ücretsiz kargo kuralı oluştur. Dört mantıksal birleşimin tümünü yaz ve eksik olanı bul.

### Alıştırma 15 — Çelişki

“Premium her zaman ücretsiz” ve “hızlı teslimat her zaman ücretli” kurallarının çakıştığı girdiyi bul. Kod yazmadan ürün sahibine üç net soru üret.

### Alıştırma 16 — Erişilemez Dal

`value >= 10`dan sonra `value >= 20` dalının neden erişilemez olduğunu cebirsel koşullarla kanıtla; sonra sırayı düzelt.

### Alıştırma 17 — Sınır Testleri

0–100 puan sınıflandırması için -1, 0, 49, 50, 79, 80, 100 ve 101 girdilerinin beklenen sonuçlarını yaz.

### Alıştırma 18 — Dal Kapsamı

Dört dallı kargo akışı için en az bir girdi/dal matrisi hazırla. Her testin hangi dala ulaştığını belirt.

### Alıştırma 19 — Çalışma Ortamı

`node --version` ile ortamı doğrula. `conditional-practice/index.js` oluşturup `node index.js` ile çalıştır. Hata alırsan komut, çalışma klasörü ve tam hata mesajını günlüğe yaz.

### Alıştırma 20 — Tam Karar Denetimi

Aşağıdaki iskeleti tamamla. Her vaka doğru beklenen sonucu ve `passed: true` üretmelidir. Sonra genel bir dalı en üste koyarak hata oluştur ve bozulan vakaları kaydet.

```js
const cases = [
  { valid: false, intl: false, express: false, expected: "fix" },
  { valid: true, intl: true, express: false, expected: "intl" },
  { valid: true, intl: false, express: true, expected: "express" },
  { valid: true, intl: false, express: false, expected: "standard" },
];

for (const item of cases) {
  let actual;
  // Karar akışını yaz.
  console.log({ ...item, actual, passed: actual === item.expected });
}
```
