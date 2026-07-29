---
document_type: "examples"
document_id: "V01-C38-EXAMPLES"
title: "V01-C38 Kademeli Örnekler"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Kademeli Örnekler

## Örnek 1 — Ortak Dil Çekirdeği

**Soru:** Hangi en küçük davranış tarayıcı ve Node.js'te karşılaştırılabilir?

```js
const courseName = "Programlama Temelleri";
console.log(courseName);
```

`courseName`, gösterilecek ders adını temsil eden bir string'dir. Değer yeniden
atanmadığı için `const` kullanılır. Bildirim ve string değeri JavaScript dil
kurallarıyla ilgilidir. `console` ise host'un sunduğu yaygın bir gözlem
yüzeyidir.

Beklenen çıktı:

```text
Programlama Temelleri
```

## Örnek 2 — Host Sınırını Gözlemek

Bu satırları önce tahmin edin, sonra uygun ortamda ayrı ayrı deneyin:

```js
console.log(typeof document);
console.log(typeof process);
```

Tipik sonuç:

| Ortam | `typeof document` | `typeof process` |
|---|---|---|
| Web sayfası tarayıcı konsolu | `"object"` | `"undefined"` |
| Node.js | `"undefined"` | `"object"` |

Bu tablo bütün JavaScript host'ları için evrensel API listesi değildir.
Yalnızca iki yaygın ortamın farklı host yüzeylerine kanıt sunar.

## Örnek 3 — Komutun Anatomisi

```powershell
node greeting.js Zeynep
```

```js
const visitorName = process.argv[2];
console.log(`Merhaba ${visitorName}`);
```

İz:

| Kaynak | Değer | Hedef |
|---|---|---|
| Komut token'ı 1 | `node` | Runtime CLI |
| Komut token'ı 2 | `greeting.js` | Entry point |
| Komut token'ı 3 | `"Zeynep"` | `process.argv[2]` |
| Bildirim | `"Zeynep"` | `visitorName` |
| Template literal | `"Merhaba Zeynep"` | stdout |

## Örnek 4 — Ham Değer ile Hesaplama Değerini Ayırmak

```powershell
node price.js 120 3
```

```js
const rawUnitPrice = process.argv[2];
const rawQuantity = process.argv[3];

const unitPrice = Number(rawUnitPrice);
const quantity = Number(rawQuantity);
const totalPrice = unitPrice * quantity;

console.log(`Toplam: ${totalPrice} TL`);
```

| Ad | Temsil | Tür | Neden ayrı? |
|---|---|---|---|
| `rawUnitPrice` | Terminalde yazılan fiyat | string | Girdinin özgün biçimini korur |
| `unitPrice` | Hesaplanabilir fiyat | number | Çarpma için sayısal değer gerekir |
| `rawQuantity` | Terminalde yazılan adet | string | Host sınırını görünür tutar |
| `quantity` | Hesaplanabilir adet | number | Sayısal çarpan olur |
| `totalPrice` | Türetilen sonuç | number | İki sayısal değerin çarpımıdır |

Beklenen çıktı `Toplam: 360 TL` olur.

## Örnek 5 — Ortam Kaydı

```js
const runtimeVersion = process.version;
const workingDirectory = process.cwd();

console.log(`Runtime: Node.js ${runtimeVersion}`);
console.log(`Çalışma klasörü: ${workingDirectory}`);
```

İki çıktı da bilgisayara ve çalışma anına bağlıdır. Bu nedenle beklenen sonuçta
sabit bir sürüm veya yol yazmak yerine biçim sözleşmesi kullanılır:

```text
Runtime: Node.js v...
Çalışma klasörü: ...
```

## Örnek 6 — Çıkış Durumu

Aşağıdaki örnek, C10'daki koşullu yürütme bilgisi edinildikten sonra tam
anlamıyla uygulanacaktır. C38'de amaç iki hata kanıtını ayırmaktır:

```js
const rawValue = process.argv[2];

if (rawValue === undefined) {
  console.error("Kullanım: node app.js <değer>");
  process.exitCode = 1;
} else {
  console.log(`Alınan değer: ${rawValue}`);
}
```

Eksik argümanda insan için açıklama `stderr` kanalına, otomasyon için başarısız
durum exit status'a gider. `process.exitCode` kullanımı, süreç doğal biçimde
tamamlanırken durumun korunmasını sağlar.
