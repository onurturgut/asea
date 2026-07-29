---
document_type: "summary"
document_id: "V01-C38-SUM01"
title: "V01-C38 Kısa Özet"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Kısa Özet

JavaScript kaynak kodu kendi başına çalışan program değildir. Bir motor dil
kurallarını uygular; runtime ve host ortamı kodun yürütülmesini ve dış dünyayla
etkileşimini sağlar. Tarayıcı ve Node.js aynı dil çekirdeğini kullanabilir,
ancak `document` ve `process` gibi farklı host imkânları sunar.

`node app.js Ada 85` komutunda `node` runtime CLI'ı, `app.js` giriş noktası,
`Ada` ile `85` program girdileridir. Node.js'te ilk kullanıcı argümanı tipik
olarak `process.argv[2]` konumundadır ve komut satırı değerleri string gelir.

Tekrar üretilebilir bir çalışma yalnız çalışan kod içermez. Runtime sürümü,
çalışma klasörü, giriş noktası, tam komut, girdi sözleşmesi, beklenen/gerçek
çıktı ve exit status kaydedilir. C29 bu güvenilir ortamı kullanarak JavaScript
tür ve dönüşüm davranışlarını ayrıntılı inceleyecektir.

## Kendini Kontrol Et

- Dil ile host API'sini örnekle ayırabiliyor muyum?
- Komuttan `argv` indeks tablosu çıkarabiliyor muyum?
- Yanlış klasör hatasını iş mantığı hatasından ayırabiliyor muyum?
- Ham girdi ile dönüştürülmüş değeri gerekçeli adlandırabiliyor muyum?
- Başka biri yalnız README ile programımı çalıştırabilir mi?

Beş sorunun herhangi birine kanıtla yanıt veremiyorsanız ilgili uygulamaya kısa
dönüş yapın.
