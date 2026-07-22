---
document_type: "lab"
document_id: "V01-C10-L01"
title: "Kargo Karar Tablosunu Uygulama"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C10"
learning_outcomes: ["V01-LO015", "V01-LO016"]
estimated_time: "120 dakika"
---

# Kargo Karar Tablosunu Uygulama

## Amaç

Doğal dil kurallarını karar tablosuna, tabloyu koşullu akışa ve her dalı test girdisine dönüştürmek.

## Senaryo

Geçersiz adres bekletilir. Geçerli yurt dışı adres uluslararası kargoya gider. Geçerli yurt içi adres hızlı seçimde ekspres, aksi halde standart kargoya gider.

## Görevler

1. Koşul ve eylem listelerini ayır.
2. `-` değerlerini gerekçelendirerek dört sütunlu karar tablosu oluştur.
3. Tabloyu `if...else if...else` yapısına dönüştür.
4. Her sütun için en az bir test girdisi yaz.
5. Kod dalı, tablo sütunu ve test girdisini tek matriste eşle.
6. Uluslararası ve hızlı değerleri birlikte doğru yaparak önceliği doğrula.
7. Genel bir dalı en üste koyup özel dalı erişilemez hale getir.
8. Başarısız test ve yürütme iziyle hatayı teşhis et.
9. Düzeltmeden sonra bütün testleri yeniden çalıştır.
10. Yüzde 100 dal kapsamının kalan kör noktalarını yaz.

## Başlangıç Kodu

```js
const cases = [
  { valid: false, intl: false, express: false, expected: "fix" },
  { valid: true, intl: true, express: false, expected: "intl" },
  { valid: true, intl: false, express: true, expected: "express" },
  { valid: true, intl: false, express: false, expected: "standard" },
];

for (const testCase of cases) {
  let actual = "not-implemented";

  // Karar tablosunu burada uygula.

  console.log({
    ...testCase,
    actual,
    passed: actual === testCase.expected,
  });
}
```

## Teslim

- `decision-table.md`
- Çalışan `index.js`
- `branch-test-matrix.md`
- Başarısız ve düzeltilmiş terminal çıktıları
- En az 300 kelimelik `reflection.md`

## Bonus Challenge

“Tehlikeli madde” koşulu ekle. Bu tür siparişler yurt dışıysa manuel incelemeye, yurt içiyse özel taşıyıcıya gitsin. Tabloyu genişlet ve bütün yeni dalları kapsa.
