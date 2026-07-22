---
document_type: "exercise-set"
exercise_set_id: "V01-C07-EX01"
title: "Operatörler ve İfadeler — Alıştırmalar"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
exercise_count: 20
learning_outcomes: ["V01-LO011"]
language: "tr"
---

# Operatörler ve İfadeler — 20 Alıştırma

## Çalışma Protokolü

Her alıştırmada önce tahminini yaz; örtük gruplamayı, işlenen türlerini, dönüşümleri ve ara
sonuçları kaydet. Kodu ancak bundan sonra Node.js ile çalıştır. Yanlış tahminlerini silme;
yanına düzeltme kuralını ekle.

## Temel Alıştırmalar

### Alıştırma 1 — İşleç ve İşlenen

`price * quantity + shipping` ifadesindeki işleçleri, işlenenleri ve alt ifadeleri işaretle.
İfadenin ürettiği değerin muhtemel türünü girdi sözleşmesine bağlı olarak açıkla.

### Alıştırma 2 — Örtük Gruplama

`8 + 3 * 4 - 2` ifadesini açık parantezlerle yeniden yaz, ifade ağacını çiz ve sonucu hesapla.

### Alıştırma 3 — Birleşme Yönü

`20 / 5 / 2` ile `20 / (5 / 2)` ifadelerini ayrı ayrı çöz. Sonuç farkını soldan birleşme
kuralıyla açıkla.

### Alıştırma 4 — Üs Alma

`2 ** 3 ** 2` için örtük gruplamayı ve ara değerleri yaz. `(2 ** 3) ** 2` ile karşılaştır.

### Alıştırma 5 — Tür Duyarlı Artı

`1 + 2 + "3"`, `"1" + 2 + 3` ve `1 + "2" + 3` için değerlendirme tablosu oluştur.

## Tür ve Dönüşüm Alıştırmaları

### Alıştırma 6 — Çıkarma Dönüşümü

`"20" - 4 + "2"` ifadesinin her ara değerini ve türünü yaz. Davranışı açık tür dönüşümleriyle
yeniden üret.

### Alıştırma 7 — Form Girdisi

Aşağıdaki kodun neden yanlış sonuç üretebileceğini açıkla ve sınırda doğrulanan sürümü yaz:

```js
const rawQuantity = "4";
const nextQuantity = rawQuantity + 1;
```

### Alıştırma 8 — `NaN` İzleme

`Number("sekiz") * 2 + 1` ifadesinin sonucunu bul. `NaN` değerini güvenilir biçimde nasıl
denetleyeceğini kodla.

### Alıştırma 9 — Eşitlik

`5 == "5"`, `5 === "5"`, `NaN === NaN`, `Object.is(NaN, NaN)` sonuçlarını tahmin et ve her
birinde kullanılan eşitlik modelini açıkla.

### Alıştırma 10 — Nesne Kimliği

İki `{ id: 3 }` nesnesinin `===` ile neden eşit olmadığını göster. Domain kimliğini `id`
alanıyla karşılaştıran sürümü yaz.

## Değerlendirme ve Yan Etki Alıştırmaları

### Alıştırma 11 — Sıra ile Önceliği Ayır

Aşağıdaki kodda konsola yazılma sırasını ve aritmetik gruplamayı ayrı ayrı belirt:

```js
function read(label, value) {
  console.log(label);
  return value;
}

const result = read("A", 2) + read("B", 3) * read("C", 4);
```

### Alıştırma 12 — Sonek Artırma

`let i = 2; const value = i++ + i;` için zaman çizelgesi oluştur. Aynı niyeti yan etkiyi
hesaptan ayırarak yeniden yaz.

### Alıştırma 13 — Bileşik Atama

`let total = 10; total += "5";` için durum tablosu çıkar. Türün değişmesini engelleyen bir
girdi sözleşmesi yaz.

### Alıştırma 14 — Atama Zinciri

`a = b = 7` ifadesinin nasıl gruplandığını açıkla. Aynı sonucu daha okunabilir iki satırda yaz.

### Alıştırma 15 — Parantez Ne Yapmaz?

`(rawPrice + tax)` ifadesine parantez eklemenin hangi problemi çözdüğünü, tür bakımından hangi
problemi çözmediğini örnekle göster.

## Mühendislik Alıştırmaları

### Alıştırma 16 — Sayfalama

`offset = (page - 1) * pageSize` hesabı için normal, sınır ve geçersiz girdileri kapsayan en az
altı test vakası yaz. Girdi doğrulama sözleşmesini belirt.

### Alıştırma 17 — Birim Güvenliği

Saniye cinsinden zaman aşımı ile milisaniye cinsinden geçen süreyi güvenli biçimde karşılaştır.
Değişken adlarında birimleri görünür kıl.

### Alıştırma 18 — Para Hesabı

Fiyat, adet, indirim ve vergi içeren yoğun bir ifadeyi kuruş cinsinden adlandırılmış ara
değerlere böl. Yuvarlamanın hangi adımda yapıldığını gerekçelendir.

### Alıştırma 19 — Çalışma Ortamı ve İnceleme

Yeni bir klasör aç, `exercise-19.js` dosyası oluştur ve `node exercise-19.js` ile çalıştır.
En az sekiz şaşırtıcı expression için şu kolonları yazdıran bir tablo üret: ifade, tahmin,
gerçek sonuç, `typeof`, uygulanan kural. Node.js sürümünü `node --version` çıktısıyla not et.

### Alıştırma 20 — Başlangıç Koduyla Expression Denetçisi

Aşağıdaki başlangıç kodunu tamamla. En az 12 test vakası ekle; Number/String `+`, çıkarma,
çarpma, bölme, remainder, eşitlik ve öncelik örneklerini kapsa.

```js
const cases = [
  {
    label: "öncelik",
    expression: "3 + 4 * 5",
    predictedValue: undefined,
    predictedType: "",
    actualValue: 3 + 4 * 5,
    rule: "",
  },
];

function createAuditRow(testCase) {
  // Tahmin, gerçek değer/tür ve kuralı tek kayıt hâline getir.
}

const report = cases.map(createAuditRow);
console.table(report);
```

## Tamamlama Ölçütü

- 20 alıştırmanın tamamı çözülmüş olmalıdır.
- En az 15 alıştırmada açık değerlendirme izi bulunmalıdır.
- Alıştırma 19 ve 20 çalıştırılabilir kanıt üretmelidir.
- Yanlış tahminler, ilgili resmi kural ve düzeltilmiş açıklamayla kaydedilmelidir.
