---
document_type: "lab"
lab_id: "V01-C07-L01"
title: "İfade Değerlendirme Tablosu Oluşturma"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
difficulty: "Beginner"
estimated_time: "120 minutes"
learning_outcomes: ["V01-LO011"]
assessment_id: "V01-C07-AS01"
language: "tr"
---

# Laboratuvar — İfade Değerlendirme Tablosu

## Senaryo

Bir e-ticaret ekibine katıldın. Sipariş ön izleme ekranında toplam, indirim ve ücretsiz kargo
kararı zaman zaman yanlış görünüyor. Kod çalışıyor; fakat ifadelerde tür dönüşümü, öncelik ve
birim varsayımları saklı. Görevin mevcut ifadeleri kanıtla incelemek ve anlaşılır bir hesaplama
modeline dönüştürmek.

## Başlangıç Kodu

```js
const orders = [
  { rawPrice: "1200", quantity: 2, discountRate: 0.1, shipping: 150 },
  { rawPrice: 750, quantity: "3", discountRate: 0, shipping: 0 },
  { rawPrice: "invalid", quantity: 1, discountRate: 0.2, shipping: 100 },
];

function calculateOrder(order) {
  const total = order.rawPrice * order.quantity * (1 - order.discountRate) + order.shipping;
  const hasFreeShipping = total > 2000;
  return { total, hasFreeShipping };
}

for (const order of orders) {
  console.log(calculateOrder(order));
}
```

## Gereksinimler

- Para değerleri kuruş cinsinden güvenli tamsayı olmalıdır.
- Adet 1–100 arasında güvenli tamsayı olmalıdır.
- İndirim oranı 0–1 arasında sonlu Number olmalıdır.
- Kargo sipariş başına bir kez eklenmelidir.
- İndirim en yakın kuruşa yuvarlanmalıdır.
- Geçersiz girdi sessizce `NaN` üretmemeli, açıklayıcı hata vermelidir.
- Ücretsiz kargo, indirim sonrası ve kargo öncesi ürün tutarı en az 2.000 kuruşsa uygulanmalıdır.

## Görevler

### Görev 1 — Tahmin

Başlangıç kodunu çalıştırmadan üç sipariş için `total` ve `hasFreeShipping` tahminlerini yaz.
Her tahminin yanına güven düzeyi ekle.

### Görev 2 — Gruplama ve Tür İzleme

Yoğun `total` ifadesinin örtük gruplamasını çıkar. Her sipariş için şu kolonlarda tablo üret:

| Adım | Alt ifade | Sol değer/tür | Sağ değer/tür | Dönüşüm | Sonuç/tür |
|---:|---|---|---|---|---|

### Görev 3 — Sözleşme Doğrulaması

`rawPrice`, `quantity`, `discountRate` ve `shipping` değerlerini açık biçimde dönüştüren ve
doğrulayan küçük fonksiyonlar yaz. Boş metin, anlamsız metin, negatif değer, sıfır adet ve
sonsuz değerleri test et.

### Görev 4 — Adlandırılmış Ara Değerler

Hesabı en az şu aşamalara ayır:

- `grossInCents`
- `discountInCents`
- `discountedInCents`
- `shippingInCents`
- `totalInCents`
- `hasFreeShipping`

Her ara değerin türünü ve invariant'ını yorum yerine testlerle kanıtla.

### Görev 5 — Test Matrisi

En az 15 test oluştur:

- 5 normal vaka;
- 4 sınır vakası;
- 4 geçersiz vaka;
- 2 tür dönüşümü vakası.

Test çıktısında beklenen, gerçek, tür ve geçme durumu bulunmalıdır.

### Görev 6 — AI Karşılaştırması

Önce kendi çözümünü bitir. Sonra [AI Mentor protokolünü](./ai-mentor.md) kullan. AI'nin önerdiği
her değişikliği “kabul”, “reddet” veya “deney gerekli” olarak sınıflandır; gerekçeyi resmi kural
ve test sonucu ile yaz.

## Teslim Edilecekler

```text
v01-c07-lab/
├── README.md
├── prediction.md
├── evaluation-table.md
├── solution.js
├── solution.test.js
└── ai-review.md
```

## Tamamlama Ölçütleri

- Bütün girdiler açık sözleşmeyle doğrulanmıştır.
- Hesaplama aşamaları adlandırılmış ve birimleri görünürdür.
- En az 15 testin tamamı geçer.
- Değerlendirme tablosu nihai sonuçtan önce ara türleri gösterir.
- AI önerileri bağımsız kanıtla incelenmiştir.
- [Rubrikte](./assessment-rubric.md) en az 80/100 alınmıştır.

## Bonus Görev

Para hesabını Number yerine BigInt ile güvenli tamsayı kuruş modeli kullanarak yeniden tasarla.
JSON serileştirme ve görüntüleme sınırlarında gereken dönüşümleri ayrıca belgele.
