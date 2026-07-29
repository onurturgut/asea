---
document_type: "exercise-set"
document_id: "V01-C38-EX01"
title: "V01-C38 Alıştırmaları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
learning_outcomes:
  - "V01-LO065"
  - "V01-LO066"
---

# V01-C38 Alıştırmaları

Çözümleri açmadan önce tahmininizi ve gerekçenizi yazın. Yalnız doğru çıktıyı
bulmak yeterli değildir; runtime, host veya tool sınırını göstermeniz beklenir.

## 1. Katmanı Bul

Aşağıdaki öğeleri `kaynak kod`, `dil`, `engine/runtime`, `host API` veya `tool`
olarak sınıflandırın:

1. `const score = 85`
2. `document.title`
3. `process.argv`
4. VS Code
5. `node app.js`
6. ECMAScript'in `+` işleci kuralları
7. PowerShell
8. Node.js'in JavaScript'i yürütmesi

## 2. Komutu Parçala

```powershell
node order-report.js Defter 4 35
```

Runtime CLI'ı, entry point'i ve üç kullanıcı argümanını etiketleyin.
`process.argv[0]` ile `[4]` arasındaki anlam tablosunu oluşturun.

## 3. Çıktıyı Tahmin Et

```js
const productName = process.argv[2];
const rawQuantity = process.argv[3];
const quantity = Number(rawQuantity);

console.log(`${productName}: ${quantity + 1}`);
```

Komut:

```powershell
node stock.js Kalem 6
```

Çıktıyı ve her değişkenin türünü yazın.

## 4. Hata Avı — Yanlış İndeks

```js
const city = process.argv[1];
console.log(`Şehir: ${city}`);
```

Komut `node weather.js Bursa` iken çıktı neden `Bursa` olmaz? En küçük
düzeltmeyi ve gerekçesini yazın.

## 5. Hata Avı — Yanlış Ortam

```js
console.log(document.title);
```

Node.js'teki hatanın belirtisini, kök nedenini ve iki olası ürün kararını
açıklayın. “Bir paket kur” cevabı gerekçe olmadan kabul edilmez.

## 6. Hata Avı — Yanlış Tür

```js
const rawPrice = process.argv[2];
const finalPrice = rawPrice + 10;
console.log(finalPrice);
```

Komut `node price.js 50` olduğunda neden beklenen `60` yerine farklı bir sonuç
görülebilir? Ham ve dönüştürülmüş değeri ayıran çözümü yazın.

## 7. Çalışma Klasörü

Dosyanız `C:\asea\labs\c38\app.js`, terminaliniz
`C:\asea\labs` klasöründedir. Şunlardan hangileri çalışabilir?

```powershell
node app.js
node .\c38\app.js
cd .\c38
node app.js
```

Her satırı tek başına değil, komut sırasını dikkate alarak gerekçelendirin.

## 8. Şimdi Sen Dene — Profil Özeti

Şu komutu alan programı yazın:

```powershell
node profile.js Deniz 19 Istanbul
```

Çıktı:

```text
Ad: Deniz
Yaş: 19
Şehir: Istanbul
```

`rawAge` ile `age` adlarını ayrı kullanın. Yaş üzerinde henüz aritmetik
yapmasanız bile dönüşüm sınırını görünür kılın.

## 9. npm Script

`profile.js` için `npm run profile -- Deniz 19 Istanbul` komutunu sağlayan
minimal `package.json` yazın. `private` alanının niyetini bir cümleyle
açıklayın.

## 10. Reproducibility Kaydı

Bir arkadaşınızın programınızı çalıştırabilmesi için README şablonu hazırlayın.
Şablonda en az runtime sürümü, klasör, kurulum varsayımı, tam komut, argüman
sırası, örnek çıktı, exit status ve bilinen sınırlar olsun.

## 11. Hata Kanalı ve Durum

Şu iki satırın farklı sorumluluklarını açıklayın:

```js
console.error("Girdi eksik");
process.exitCode = 1;
```

Yalnız birincisinin bulunduğu program otomasyon tarafından nasıl yanlış
yorumlanabilir?

## 12. Bağımsız Uygulama — Sipariş Raporu

Ürün adı, adet ve birim fiyat alan bir CLI programı oluşturun. Doğrudan `node`
komutu ve npm script'iyle çalıştırın. Teslimatınıza:

- kaynak kod;
- `package.json`;
- iki normal örnek;
- bir hatalı girdi gözlemi;
- `argv` tablosu;
- değişken/tür kararları;
- tekrar üretim kaydı

ekleyin. Hatalı girdiyi otomatik düzeltmeniz şart değildir; gözlenen davranışı
doğru belgelemek ve C29'a devredilecek soruyu yazmak zorunludur.
