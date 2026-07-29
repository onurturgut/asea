---
document_type: "interview-set"
interview_id: "V01-C38-IV01"
title: "V01-C38 Mülakat Soruları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Mülakat Soruları

## Başlangıç Soruları

1. Kaynak kod, JavaScript motoru ve çalışan process arasındaki farkı bir program
   örneğiyle anlatır mısın?
2. Node.js ile tarayıcı ikisi de JavaScript çalıştırıyorsa `document` neden
   Node.js'te varsayılan olarak bulunmaz?
3. Kod editörü, terminal ve runtime'ın sorumlulukları nelerdir?
4. Entry point nedir? Göreli yol hangi klasöre göre çözülür?
5. `process.argv` dizisinin ilk üç konumunu açıklar mısın?

## Kod Okuma

```js
const rawHours = process.argv[2];
const hours = Number(rawHours);
console.log(hours + 1);
```

Sorular:

- `node app.js 4` komutunda her satır hangi değeri üretir?
- `rawHours` ve `hours` neden ayrı adlardır?
- Argüman verilmezse hangi sınır sorusu ortaya çıkar?
- Bu kodun hangi parçası Node.js'e özgüdür?

## Hata Teşhisi

Bir aday şu raporu alıyor:

```text
node --version -> çalışıyor
node app.js -> Cannot find module 'C:\work\app.js'
```

Önce hangi iki kanıtı istersin? Neden kaynak kodu hemen değiştirmezsin?

Beklenen yaklaşım: çalışma klasörü ve dosya listesini görmek; hata kaynak
dosyanın yüklenmesinden önce oluşmuştur.

## Mühendislik Soruları

1. `console.error` yazmak neden tek başına başarısız exit status kanıtı değildir?
2. “Bende çalışıyor” raporunu yeniden üretilebilir hâle getirmek için hangi
   alanları istersin?
3. Node.js sürümünü README'ye sabit “en son sürüm” diye yazmak neden kırılgan?
4. npm script kullanmanın faydası nedir, hangi sorunları tek başına çözmez?
5. Host bağımlılığını görünür tutmak test ve ekip iletişimine nasıl yardım eder?

## Değerlendirme Ölçütü

Güçlü aday ezber tanım vermekle kalmaz; komutu parçalara ayırır, sorumluluk
katmanlarını örnekler, ilk yanlış varsayımı kanıtla daraltır ve çözümü yeniden
çalıştırma adımıyla kapatır.
