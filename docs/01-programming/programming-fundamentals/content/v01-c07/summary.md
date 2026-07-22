---
document_type: "chapter-summary"
summary_id: "V01-C07-SM01"
title: "Operatörler ve İfadeler — Chapter Özeti"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
learning_outcomes: ["V01-LO011"]
language: "tr"
---

# Chapter Özeti — Operatörler ve İfadeler

## Temel Model

İfade değer üretir; işleç işlemi, işlenen ise girdiyi belirtir. Güvenilir değerlendirme sırası:

1. girdi sözleşmesini yaz;
2. örtük gruplamayı çıkar;
3. işlenenleri soldan sağa değerlendir;
4. dönüşümleri kaydet;
5. ara değer ve türleri hesapla;
6. etkileri izle;
7. ifadeyi daha açık biçimde yeniden yaz.

## Kritik Ayrımlar

- Öncelik gruplamayı, birleşme yönü aynı seviyedeki gruplama yönünü belirler.
- İşlenen değerlendirme sırası bu iki kavramdan ayrıdır.
- `+`, Number toplama veya String birleştirme yapabilir.
- `===` örtük tür dönüşümü yapmaz; nesnelerde kimliği karşılaştırır.
- Parantez tür doğrulaması yapmaz.
- `NaN`, `Infinity`, kayan nokta ve BigInt sınırları domain politikası ister.
- Adlandırılmış ara değerler tür, birim ve test noktalarını görünür yapar.

## Tamamlama Sorusu

`"6" + 4 * 2 - 3` ifadesi için gruplama, değer/tür/dönüşüm tablosu ve açık yeniden yazım
üretebiliyorsan chapter'ın ana becerisini gösterebilirsin. Yalnız `65` demek yeterli değildir.

## Sonraki Chapter'a Köprü

`V01-C08`, ifadelerin girdileri nasıl aldığını, çıktıya nasıl dönüştüğünü ve veri dönüşüm
zincirlerinin nasıl tasarlandığını ele alacaktır. C08 dosyası üretildiğinde bu kayıt göreli
chapter bağlantısına dönüştürülecektir.
