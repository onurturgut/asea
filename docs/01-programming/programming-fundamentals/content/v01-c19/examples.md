---
document_type: "examples"
document_id: "V01-C19-EG01"
title: "V01-C19 Çalışılmış Örnekler"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Çalışılmış Örnekler

Her örnekte aynı çalışma düzenini kullanın:

1. Girdi ve çıktıyı tahmin edin.
2. Base case'i işaretleyin.
3. İlk üç çağrının parametrelerini yazın.
4. Bekleyen işlemleri gösterin.
5. Dönüşleri ters sırada tamamlayın.
6. Progress measure ve geçerli girdi sınırını açıklayın.

Kodu ancak bu altı adımdan sonra çalıştırın.

## Örnek 1 — Tahmin Et, Sonra İzle

```js
function repeatWord(word, count) {
  if (count === 0) return "";
  return word + repeatWord(word, count - 1);
}
```

`repeatWord("ha", 3)` sonucunu çalıştırmadan tahmin edin. Bekleyen işlemler:

```text
"ha" + ?
  "ha" + ?
    "ha" + ?
      ""
```

Dönüş: `""` → `"ha"` → `"haha"` → `"hahaha"`.

Base case `count === 0`, progress measure `count`, birleştirme ise `word +` olur.
Negatif `count` sözleşmeye dahilse fonksiyon durmaz; giriş kontrolü gereklidir.

`word`, her adımda sonuca eklenecek metni temsil eden `string` parametresidir.
`count`, kaç tekrar kaldığını taşıyan `number` parametresidir ve negatif olmayan
tamsayı olma kısıtı vardır. Her frame'de `count` farklıdır; `word` aynı string
değerini taşısa da her çağrının parametre bağlaması ayrıdır. String seçimi
önemlidir: sayı kullansaydık `+` operatörünün toplama davranışı devreye girerdi.

## Örnek 2 — Dizide İlk Eşleşme

```js
function findIndexFrom(values, target, index = 0) {
  if (index === values.length) return -1;
  if (values[index] === target) return index;
  return findIndexFrom(values, target, index + 1);
}
```

İki base case vardır: veri bittiğinde `-1`, eşleşme bulunduğunda indeks. Recursive
case yalnız eşleşme yoksa çalışır. Progress measure `values.length - index` olur.

`values` aranan koleksiyonu, `target` aranacak değeri, `index` ise sıradaki
işlenmemiş konumu temsil eder. `index` bir `number` ve tamsayı kısıtıdır; string
olsaydı `index + 1` sayısal ilerleme yerine metin birleştirmesi üretebilirdi.
`-1`, geçerli dizi indeksleri `0` ve üzeri olduğu için “bulunamadı” sonucunu
çakışmadan temsil eder.

## Örnek 3 — Onarım

```js
function brokenLength(text, index = 0) {
  if (index === text.length) return 0;
  return brokenLength(text, index);
}
```

Belirti: boş olmayan metinde stack hatası. En küçük karşı örnek `"a"` olur:
`index` hep `0` kalır. Düzeltme `index + 1` ile küçük probleme geçmektir; sonuç
birleştirmesi de gerekir:

```js
function textLength(text, index = 0) {
  if (index === text.length) return 0;
  return 1 + textLength(text, index + 1);
}
```

## Örnek 4 — Döngü Alternatifi

`textLength` için doğal production çözümü `text.length` olur. Bu örnek, özyinelemeyi
kullanabildiğimiz her yerde kullanmamız gerekmediğini gösterir. Öğretim örneği
mekanizmayı görünür kılar; mühendislik çözümü en açık ve güvenilir seçeneği kullanır.
