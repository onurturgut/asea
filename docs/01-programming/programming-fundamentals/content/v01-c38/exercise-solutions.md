---
document_type: "exercise-solutions"
document_id: "V01-C38-EX01-SOL"
title: "V01-C38 Alıştırma Çözümleri"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Alıştırma Çözümleri

Bu dosyayı kendi denemenizden sonra açın. Çözüm kodundan çok karar gerekçesini
karşılaştırın.

## 1. Katmanlar

| Öğe | Katman | Gerekçe |
|---|---|---|
| `const score = 85` | Kaynak kod/dil | Yazılan metin ve bildirim kuralı |
| `document.title` | Tarayıcı host API | Web sayfasını host sağlar |
| `process.argv` | Node.js host/runtime API | Süreç argümanlarını Node sunar |
| VS Code | Tool | Kodu yazma ve inceleme aracı |
| `node app.js` | Tool/CLI komutu | Runtime'ı entry point ile başlatır |
| `+` kuralları | Dil | ECMAScript değerlendirme davranışı |
| PowerShell | Tool/shell | Komutu çözümleyip süreci başlatır |
| Node.js yürütmesi | Runtime | Motor ve host yetenekleriyle kodu çalıştırır |

## 2. Komut ve `argv`

`node` CLI, `order-report.js` entry point; `Defter`, `4`, `35` kullanıcı
argümanlarıdır.

| İndeks | Anlam |
|---:|---|
| `0` | Node çalıştırılabilir dosya yolu |
| `1` | `order-report.js` giriş dosyası yolu |
| `2` | `"Defter"` |
| `3` | `"4"` |
| `4` | `"35"` |

## 3. Tahmin

`productName` `"Kalem"` string, `rawQuantity` `"6"` string, `quantity` `6`
number olur. Çıktı `Kalem: 7` olur.

## 4. Yanlış indeks

`argv[1]`, giriş dosyasının yoludur. İlk kullanıcı argümanı `[2]` konumundadır:

```js
const city = process.argv[2];
```

## 5. Yanlış ortam

Node.js varsayılan host'unda `document` tanımlı olmadığı için `ReferenceError`
oluşur. Ürün gerçekten web sayfasının başlığını okuyacaksa kod tarayıcı
bağlamında tasarlanmalıdır. Ürün bir terminal programıysa sayfa başlığı
gereksinimi kaldırılmalı veya terminale uygun veri kaynağı seçilmelidir.

## 6. Yanlış tür

Komut satırı `"50"` string'ini getirir; `+ 10` birleştirme davranışıyla `"5010"`
üretebilir.

```js
const rawPrice = process.argv[2];
const price = Number(rawPrice);
const finalPrice = price + 10;
```

## 7. Çalışma klasörü

İlk `node app.js`, `C:\asea\labs\app.js` arayacağı için başarısız olur. İkinci
komut doğru göreli yolu verdiği için çalışır. `cd .\c38` çalışma klasörünü
değiştirir; hemen ardından gelen `node app.js` artık doğru dosyayı bulur.

## 8. Profil özeti

```js
const name = process.argv[2];
const rawAge = process.argv[3];
const city = process.argv[4];
const age = Number(rawAge);

console.log(`Ad: ${name}`);
console.log(`Yaş: ${age}`);
console.log(`Şehir: ${city}`);
```

`rawAge`, dış sınırdaki metni; `age`, program içindeki sayısal temsili gösterir.

## 9. npm Script

```json
{
  "name": "profile-summary",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "profile": "node profile.js"
  }
}
```

`private: true`, eğitim paketinin yanlışlıkla registry'ye yayımlanmaması
niyetini belirtir.

## 10. README Çekirdeği

```md
# Profil Özeti

- Runtime: Node.js (çıktı: `node --version`)
- Çalışma klasörü: Bu `package.json` dosyasının bulunduğu klasör
- Komut: `npm run profile -- Deniz 19 Istanbul`
- Argümanlar: ad, yaş, şehir
- Beklenen çıktı: üç etiketli satır
- Başarı durumu: `0`
- Bilinen sınır: Eksik veya sayısal olmayan yaş henüz doğrulanmıyor
```

## 11. Hata kanalı ve durum

`console.error` insana/araçlara hata metni taşır. `process.exitCode = 1`,
sürecin makine-okunur başarısızlık durumunu belirler. Yalnız mesaj varsa CI
komutu başarılı sanabilir.

## 12. Sipariş raporu referansı

```js
const productName = process.argv[2];
const rawQuantity = process.argv[3];
const rawUnitPrice = process.argv[4];

const quantity = Number(rawQuantity);
const unitPrice = Number(rawUnitPrice);
const totalPrice = quantity * unitPrice;

console.log(`Ürün: ${productName}`);
console.log(`Adet: ${quantity}`);
console.log(`Birim fiyat: ${unitPrice}`);
console.log(`Toplam: ${totalPrice}`);
```

Bu çözüm doğrulama eklemez; bilinmeyen dönüşüm davranışını C29'a açık soru
olarak taşır. Öğrenci teslimatında `node order.js Defter 4 35` için `140`,
sayısal olmayan değer için gözlenen sonucu kaydetmelidir.
