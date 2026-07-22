---
document_type: "interview-preparation"
interview_set_id: "V01-C07-IV01"
title: "Operatörler ve İfadeler — Mülakat Hazırlığı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
question_count: 15
language: "tr"
---

# Mülakat Hazırlığı — Operatörler ve İfadeler

## Yanıtlama Modeli

Her soruya “tanım → küçük örnek → sınır/karşı örnek → mühendislik tercihi” sırasıyla yanıt ver.
Kodu tahmin et, sonra çalıştır. Ezberlenmiş tek cümle yeterli değildir.

## Sorular

1. İfade, işleç ve işlenen arasındaki fark nedir?
2. Operator precedence ile associativity arasındaki farkı örnekle açıklar mısın?
3. JavaScript'te operand evaluation order neden precedence ile aynı şey değildir?
4. `1 + 2 + "3"` ve `"1" + 2 + 3` neden farklı ara süreçlerden geçer?
5. `==` ile `===` arasındaki fark nedir; üretim kodunda varsayılan tercihin hangisidir?
6. `NaN === NaN` neden `false` olur ve `NaN` nasıl denetlenir?
7. `0.1 + 0.2 === 0.3` neden beklenmeyen sonuç verebilir?
8. JavaScript'te sıfıra bölme nasıl davranır ve uygulama bunu nasıl ele almalıdır?
9. `%` neden her zaman matematiksel modulo olarak adlandırılmamalıdır?
10. Önek ve sonek `++` biçimlerinin ürettiği değer nasıl farklıdır?
11. `const a = {}; const b = {}; a === b` sonucu neden `false` olur?
12. Number ve BigInt aritmetikte neden doğrudan karıştırılamaz?
13. Yoğun bir ifadeyi ne zaman adlandırılmış ara değerlere ayırırsın?
14. Kullanıcı girdisi içeren fiyat hesabını nasıl güvenli tasarlarsın?
15. AI tarafından üretilen karmaşık bir formülü nasıl teknik olarak denetlersin?

## Uygulamalı Mülakat Görevi

Mülakatçı şu kodu verdiğinde iki dakika sessiz analiz yap, sonra sesli düşün:

```js
const result = "12" + 3 * 2 - 4;
```

Beklenen yaklaşım: girdileri/türleri belirleme, gruplamayı yazma, ara değerleri çıkarma, sonucu
doğrulama ve daha açık bir sözleşme önerme. Yalnız `122` benzeri bir final söylemek yeterli
değildir.

## Öz Değerlendirme

Her cevabı 0–3 puanla: 0 cevapsız, 1 tanım, 2 doğru örnek, 3 sınır ve mühendislik kararı.
Toplam 36/45 altında kalan öğrenci ana dersin ilgili bölümüne dönmelidir.
