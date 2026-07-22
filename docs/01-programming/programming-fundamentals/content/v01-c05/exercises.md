---
document_type: exercise
exercise_id: "V01-C05-EX01"
title: "Değerler ve Veri Türleri — Alıştırmalar"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C05"
difficulty: "Beginner"
estimated_time: "120 minutes"
learning_outcomes: ["V01-LO007", "V01-LO008"]
assessment_id: "V01-C05-AS01"
language: "tr"
---

# Değerler ve Veri Türleri — Alıştırmalar

## Kurallar

Her soruda önce tahminini yaz. Kod varsa çalıştırmadan önce expected output üret. AI yalnız
ilk cevabını kilitledikten sonra karşı örnek istemek için kullanılabilir.

## A — Kavramları Ayır

### Alıştırma 1 — Dört katman

`"0042"` için domain meaning, value, type ve representation katmanlarını iki farklı domain
(posta kodu ve ölçüm) altında yaz.

### Alıştırma 2 — Literal mi expression mı?

`42`, `"42"`, `20 + 22`, `Number("42")`, formdan gelen `"42"` ifadelerini literal,
expression ve runtime value ilişkisine göre sınıflandır.

### Alıştırma 3 — Type rulebook

Number, String ve Boolean için üçer geçerli operation ve birer anlamsız domain operation yaz.

### Alıştırma 4 — Primitive sınırı

`undefined`, `null`, `true`, `42`, `42n`, `"42"`, `Symbol("id")`, `{ id: 42 }` değerlerini
ECMAScript türlerine ayır; language model ile physical memory iddiasını karıştırma.

### Alıştırma 5 — `typeof` tahmini

Yukarıdaki sekiz örneğin `typeof` çıktısını tahmin et; `null` istisnasını açıklayan iki cümle yaz.

## B — Domain'e Göre Sınıflandır

### Alıştırma 6 — Kimlik mi miktar mı?

`productCode`, `stockCount`, `phone`, `invoiceTotal`, `postalCode`, `temperature` için type
öner; arithmetic meaning ve format preservation gerekçesi ver.

### Alıştırma 7 — Boolean yeterli mi?

E-posta doğrulamasında “verified”, “rejected”, “not checked” durumları için Boolean’ın neden
yetersiz olabileceğini göster; daha açık bir domain model öner.

### Alıştırma 8 — Absence matrix

`undefined`, `null`, `""`, `0`, `false`, `NaN` için bir sipariş sisteminde birbirinden farklı
olabilecek anlamlar yaz.

### Alıştırma 9 — Veri sözlüğü

`employeeId`, `salaryMinorUnit`, `isRemote`, `managerId`, `displayName` alanları için tam data
dictionary oluştur.

### Alıştırma 10 — Representation değişimi

42 sayısının source literal, runtime Number, JSON token ve UI String temsillerini sırala;
her sınırda kaybolabilecek bilgiyi belirt.

## C — Dönüşüm ve Kayıp

### Alıştırma 11 — Tahmin et ve çalıştır

`Number("")`, `Number("  ")`, `Number("12px")`, `parseInt("12px", 10)`,
`Boolean("false")`, `String(null)` sonuçlarını tahmin et ve nedenini yaz.

### Alıştırma 12 — Safe integer

`9007199254740990`–`9007199254740994` aralığını `Number.isSafeInteger` ile incele. Hangi
iki kaynak integer’ın aynı runtime value’ya yaklaşabildiğini açıkla.

### Alıştırma 13 — Precision mı meaning mi?

`"00123" → 123`, `"0.10" → 0.1`, `"9007199254740993" → Number`, `"12 kg" → 12`,
`null → 0` dönüşümlerini precision loss, meaning loss, ikisi veya güvenli olarak sınıflandır.

### Alıştırma 14 — Strict parser

`quantity` için yalnız `0`–`999` arası base-10 integer text kabul eden function yaz. Empty,
whitespace, decimal, suffix, negative ve boundary tests ekle.

### Alıştırma 15 — Boolean token parser

Yalnız lowercase `"true"` ve `"false"` kabul eden result-object parser yaz. `"yes"`, `"0"`,
empty ve actual Boolean input’un rejection davranışını test et.

### Alıştırma 16 — Para kararı

`"19.99"` input’u için Number, integer minor unit ve decimal library seçeneklerini correctness,
complexity ve interoperability açısından karşılaştır; tek bir bounded decision ver.

## D — Engineering ve AI Denetimi

### Alıştırma 17 — JSON sınırı

`undefined`, `NaN`, `Infinity`, `42n` ve Symbol içeren bir object’i JSON’a çevirmeyi dene.
Gözlenen behavior ile JSON value modelini karşılaştır.

### Alıştırma 18 — Unicode gözlemi

`"A"`, `"🙂"` ve birleşen işaret içeren `"é"` metinlerinde `.length`, spread length ve
görünen sembol sayısını karşılaştır; kesin “character count” iddiasından kaçın.

### Alıştırma 19 — AI önerisini denetle

AI’ye `customerId`, `price`, `enabled`, `deletedAt` türlerini sordur. Cevaptaki en az beş
gizli assumption’ı ve her biri için counterexample’ı yaz.

### Alıştırma 20 — Bağımsız transfer

Bir hastane kayıt import’u için 12 field seç. Classification table, conversion matrix,
eight-case test set ve 150–250 kelimelik engineering decision teslim et. En az bir large ID,
bir absence state, bir decimal measurement ve bir Boolean token bulunmalıdır.
