---
document_type: "quiz"
quiz_id: "V01-C07-QZ01"
title: "Operatörler ve İfadeler — Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
difficulty: "Beginner"
estimated_time: "45 minutes"
question_count: 25
passing_score: 80
learning_outcomes: ["V01-LO011"]
assessment_id: "V01-C07-AS01"
language: "tr"
---

# Operatörler ve İfadeler — 25 Soruluk Quiz

## Uygulama Yöntemi

Cevap anahtarını açmadan bütün soruları yanıtla. Her cevap için güven düzeyini 1–3 arasında
yaz. Sonra [ayrı cevap anahtarını](./quiz-answer-key.md) kullan ve düşük güvenli soruları 24 saat
sonra yeniden çöz.

## Sorular

### Soru 1

`3 + 4 * 5` sonucu nedir?

- A) 35
- B) 23
- C) 17
- D) 60

**Cevabın:**  
**Güven düzeyin:**

### Soru 2

Bir işlecin uygulandığı değer veya alt ifadeye ne ad verilir?

- A) İşlenen
- B) Bildirim
- C) Bağlama
- D) Kapsam

**Cevabın:**  
**Güven düzeyin:**

### Soru 3

`10 - 3 - 2` nasıl gruplanır?

- A) `10 - (3 - 2)`
- B) `(10 - 3) - 2`
- C) `10 - (3 + 2)`
- D) `(10 - 3 + 2)`

**Cevabın:**  
**Güven düzeyin:**

### Soru 4

`2 ** 3 ** 2` sonucu nedir?

- A) 64
- B) 36
- C) 512
- D) 256

**Cevabın:**  
**Güven düzeyin:**

### Soru 5

`"5" + 2` sonucu ve türü hangisidir?

- A) Number 7
- B) String "52"
- C) Number 52
- D) `NaN`

**Cevabın:**  
**Güven düzeyin:**

### Soru 6

`"5" - 2` sonucu hangisidir?

- A) String "52"
- B) Number 3
- C) String "3"
- D) `NaN`

**Cevabın:**  
**Güven düzeyin:**

### Soru 7

`1 + 2 + "3"` sonucu hangisidir?

- A) Number 6
- B) String "123"
- C) String "33"
- D) Number 33

**Cevabın:**  
**Güven düzeyin:**

### Soru 8

`"1" + 2 + 3` sonucu hangisidir?

- A) String "123"
- B) String "15"
- C) Number 6
- D) Number 123

**Cevabın:**  
**Güven düzeyin:**

### Soru 9

`5 === "5"` neden `false` olur?

- A) İki değer de geçersizdir.
- B) Sıkı eşitlik örtük tür dönüşümü yapmaz.
- C) String sayılardan büyüktür.
- D) `===` yalnız nesnelerde çalışır.

**Cevabın:**  
**Güven düzeyin:**

### Soru 10

`NaN` değerini özel olarak denetleyen en uygun ifade hangisidir?

- A) `value === NaN`
- B) `typeof value === NaN`
- C) `Number.isNaN(value)`
- D) `value == "NaN"`

**Cevabın:**  
**Güven düzeyin:**

### Soru 11

`10 / 0` JavaScript'te ne üretir?

- A) Her zaman exception
- B) `Infinity`
- C) `null`
- D) `undefined`

**Cevabın:**  
**Güven düzeyin:**

### Soru 12

`-5 % 3` sonucu hangisidir?

- A) 1
- B) 2
- C) -2
- D) -1

**Cevabın:**  
**Güven düzeyin:**

### Soru 13

Öncelik (Precedence) temel olarak neyi belirler?

- A) Değişken adını
- B) İşleçlerin sözdizimsel gruplamasını
- C) Bütün fonksiyon çağrılarının ters sırada çalışmasını
- D) Verinin bellekteki adresini

**Cevabın:**  
**Güven düzeyin:**

### Soru 14

Birleşme yönü (Associativity) hangi durumda devreye girer?

- A) Aynı öncelik düzeyindeki işleçlerin gruplanmasında
- B) Dosya adlandırmada
- C) Yalnız `const` bildiriminde
- D) Yalnız dizilerde

**Cevabın:**  
**Güven düzeyin:**

### Soru 15

`first() + second() * third()` ifadesinde çağrılar hangi sırayla değerlendirilir?

- A) `second`, `third`, `first`
- B) `third`, `second`, `first`
- C) `first`, `second`, `third`
- D) Sıra rastgeledir

**Cevabın:**  
**Güven düzeyin:**

### Soru 16

`let i = 3; const old = i++;` sonrasında değerler hangisidir?

- A) `old=4`, `i=4`
- B) `old=3`, `i=4`
- C) `old=3`, `i=3`
- D) `old=4`, `i=3`

**Cevabın:**  
**Güven düzeyin:**

### Soru 17

`let total = 10; total += "5";` sonrasında hangisi doğrudur?

- A) `total` Number 15'tir.
- B) `total` String "105"tir.
- C) Kod mutlaka SyntaxError üretir.
- D) `total` değişmez.

**Cevabın:**  
**Güven düzeyin:**

### Soru 18

`{} === {}` neden `false` olur?

- A) Nesneler boş olamaz.
- B) Farklı nesne kimlikleri karşılaştırılır.
- C) Sıkı eşitlik nesnelerde yasaktır.
- D) Nesneler String'e dönüşür.

**Cevabın:**  
**Güven düzeyin:**

### Soru 19

`0.1 + 0.2 === 0.3` sonucunun `false` olması en çok hangi konuyla ilgilidir?

- A) Kapsam
- B) İkili kayan nokta gösterimi
- C) Değişken adlandırma
- D) Fonksiyon çağrı sırası

**Cevabın:**  
**Güven düzeyin:**

### Soru 20

Hangisi Number ile BigInt'i geçersiz biçimde karıştırır?

- A) `10n + 5n`
- B) `10 + 5`
- C) `10n + 5`
- D) `BigInt(10) + 5n`

**Cevabın:**  
**Güven düzeyin:**

### Soru 21

Yoğun bir ifadeyi adlandırılmış ara değerlere bölmenin en önemli yararı nedir?

- A) Her zaman daha hızlı çalışması
- B) Türlerin, domain adımlarının ve test noktalarının görünür olması
- C) JavaScript sözdizimini değiştirmesi
- D) Bütün dönüşümleri otomatik kaldırması

**Cevabın:**  
**Güven düzeyin:**

### Soru 22

Parantez aşağıdakilerden hangisini tek başına yapmaz?

- A) Gruplamayı değiştirmek
- B) Okuyucu niyetini görünür kılmak
- C) String girdiyi doğrulanmış Number'a dönüştürmek
- D) Bir alt ifadeyi belirginleştirmek

**Cevabın:**  
**Güven düzeyin:**

### Soru 23

`offset = (page - 1) * pageSize` için hangi girdi mutlaka reddedilmelidir?

- A) `page=1, pageSize=20`
- B) `page=2, pageSize=10`
- C) `page=0, pageSize=20`
- D) `page=3, pageSize=50`

**Cevabın:**  
**Güven düzeyin:**

### Soru 24

Bir expression hata ayıklanırken en güvenilir ilk yaklaşım hangisidir?

- A) Rastgele parantez eklemek
- B) İlk yanlış ara değeri ve türü bulmak
- C) Bütün kodu yeniden yazmak
- D) Yalnız nihai sonucu loglamak

**Cevabın:**  
**Güven düzeyin:**

### Soru 25

AI'nin verdiği ifade sonucu nasıl doğrulanmalıdır?

- A) Akıcı yazıldığı için kabul edilmelidir.
- B) Yalnız ikinci bir AI'ye sorulmalıdır.
- C) Gruplama, tür/dönüşüm izi, resmi kaynak ve çalıştırma kanıtıyla denetlenmelidir.
- D) Sonuç kısa ise doğrudur.

**Cevabın:**  
**Güven düzeyin:**

## Başarı Ölçütü

En az 20 doğru cevap (%80), yanlışların kural açıklaması ve 24 saat sonraki ikinci deneme
gereklidir. Soru 13–17 ve 21–25, `V01-LO011` için kritik muhakeme sorularıdır.
