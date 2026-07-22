---
document_type: "quiz"
quiz_id: "V01-C08-QZ01"
title: "Girdi, Çıktı ve Veri Dönüşümü — Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
difficulty: "Beginner"
estimated_time: "45 minutes"
question_count: 25
passing_score: 80
learning_outcomes: ["V01-LO012"]
assessment_id: "V01-C08-AS01"
language: "tr"
---

# Girdi, Çıktı ve Veri Dönüşümü — 25 Soruluk Quiz

## Uygulama Yöntemi

Bütün soruları cevap anahtarı kapalıyken çöz. Cevap ve güven düzeyini yaz. Sonra
[cevap anahtarını](./quiz-answer-key.md) aç; yanlışları bağlı pipeline aşamasıyla tekrar et.

## Sorular

### Soru 1

Terminal prompt'una girilen `42` çoğunlukla hangi raw türde alınır?

- A) Number
- B) String
- C) Boolean
- D) BigInt

**Cevabın:**  
**Güven düzeyin:**

### Soru 2

Güven sınırı neyi anlatır?

- A) Yalnız kötü niyetli kullanıcıyı
- B) Farklı güven/sözleşme koşulları arasındaki veri geçişini
- C) Yalnız ağ şifrelemesini
- D) Değişken kapsamını

**Cevabın:**  
**Güven düzeyin:**

### Soru 3

Parsing hangi soruyu cevaplar?

- A) Değer bu iş için kabul edilebilir mi?
- B) Dış temsil hangi program değerini/yapısını ifade ediyor?
- C) Kullanıcı yetkili mi?
- D) Çıktı hangi renkte?

**Cevabın:**  
**Güven düzeyin:**

### Soru 4

Validation hangi soruyu cevaplar?

- A) Değer tanımlı kısıtları karşılıyor mu?
- B) Dosya nerede?
- C) Program hangi dilde?
- D) CPU kaç çekirdekli?

**Cevabın:**  
**Güven düzeyin:**

### Soru 5

`Number("")` sonucu nedir?

- A) `NaN`
- B) 0
- C) `undefined`
- D) Exception

**Cevabın:**  
**Güven düzeyin:**

### Soru 6

`parseInt("12px", 10)` ne üretir?

- A) `NaN`
- B) 12
- C) `"12"`
- D) Exception

**Cevabın:**  
**Güven düzeyin:**

### Soru 7

Bir yaş alanında `parseInt("12px", 10)` kabulünün temel riski nedir?

- A) Çok yavaş olması
- B) Kısmi metni sessizce kabul etmesi
- C) String döndürmesi
- D) Yalnız browser'da çalışması

**Cevabın:**  
**Güven düzeyin:**

### Soru 8

`JSON.parse` başarılı olunca hangisi kanıtlanmış olur?

- A) Bütün business rules geçerli
- B) JSON syntax parse edilebilir
- C) Kullanıcı yetkili
- D) Alan türleri schema'ya uygun

**Cevabın:**  
**Güven düzeyin:**

### Soru 9

`"999"` → Number 999 başarılı dönüşür; yaş alanında neden reddedilebilir?

- A) SyntaxError olduğu için
- B) Semantic range contract'ı ihlal ettiği için
- C) String kaldığı için
- D) JSON olmadığı için

**Cevabın:**  
**Güven düzeyin:**

### Soru 10

Hangisi syntactic validation örneğidir?

- A) Başlangıç tarihinin bitişten önce olması
- B) Yaşın yalnız onluk rakamlardan oluşması
- C) Kullanıcının ödeme yetkisi
- D) Stokta ürün bulunması

**Cevabın:**  
**Güven düzeyin:**

### Soru 11

Hangisi semantic validation örneğidir?

- A) JSON parantezlerinin dengeli olması
- B) Yaşın 13–120 aralığında olması
- C) Metnin String olması
- D) Satırın okunması

**Cevabın:**  
**Güven düzeyin:**

### Soru 12

Normalization'ın amacı nedir?

- A) Her girdiyi silmek
- B) Eşdeğer kabul edilen girdileri tutarlı iç biçime getirmek
- C) Bütün String'leri Number yapmak
- D) Yalnız çıktı yazdırmak

**Cevabın:**  
**Güven düzeyin:**

### Soru 13

Neden bütün String'lere `trim().toLowerCase()` uygulanmamalıdır?

- A) JavaScript desteklemez.
- B) Bazı alanlarda boşluk/case anlamlıdır ve veri kaybı olabilir.
- C) Her zaman exception üretir.
- D) Yalnız Number döndürür.

**Cevabın:**  
**Güven düzeyin:**

### Soru 14

Formatting ne zaman yapılmalıdır?

- A) Raw input alınmadan önce
- B) Internal değer hedef tüketiciye sunulurken
- C) Her arithmetic işlemden önce
- D) Validation yerine

**Cevabın:**  
**Güven düzeyin:**

### Soru 15

`"1.234,50 ₺"` neden internal para hesabı için uygun değildir?

- A) Çok kısa olduğu için
- B) Locale/display ayrıntıları taşıyan String olduğu için
- C) Her zaman JSON olduğu için
- D) BigInt olduğu için

**Cevabın:**  
**Güven düzeyin:**

### Soru 16

Client-side validation'ın temel rolü hangisidir?

- A) Tek authoritative security boundary olmak
- B) Hızlı kullanıcı geri bildirimi sağlamak
- C) Server validation'ı kaldırmak
- D) Database schema üretmek

**Cevabın:**  
**Güven düzeyin:**

### Soru 17

Bir formda bütün uygun hataları tek seferde göstermeye ne denir?

- A) Fail fast
- B) Collect errors
- C) Hoisting
- D) Short circuit

**Cevabın:**  
**Güven düzeyin:**

### Soru 18

İyi bir kullanıcı hatası hangisini içermelidir?

- A) Yalnız “Invalid”
- B) Field, stable code ve düzeltme mesajı
- C) Full stack trace
- D) Raw password

**Cevabın:**  
**Güven düzeyin:**

### Soru 19

Pipeline'da validated value'dan yeni domain record üretmek hangi aşamadır?

- A) Receive
- B) Transform
- C) Output
- D) Parse

**Cevabın:**  
**Güven düzeyin:**

### Soru 20

Hangisi uygun sıralamadır?

- A) Format → receive → parse
- B) Receive → parse → validate → normalize → transform → format → output
- C) Validate → receive → output
- D) Output → transform → parse

**Cevabın:**  
**Güven düzeyin:**

### Soru 21

`Number.isFinite` hangi riski görünür kılar?

- A) Yalnız String length
- B) `NaN` ve ±Infinity dahil sonlu olmayan Number sonuçları
- C) Dosya boyutu
- D) Object identity

**Cevabın:**  
**Güven düzeyin:**

### Soru 22

Cross-field validation örneği hangisidir?

- A) Name'in String olması
- B) Başlangıç tarihinin bitiş tarihinden önce olması
- C) JSON'un parse edilmesi
- D) Metnin trim edilmesi

**Cevabın:**  
**Güven düzeyin:**

### Soru 23

Hassas input failure logunda hangisi saklanmamalıdır?

- A) Error code
- B) Stage name
- C) Raw password/token
- D) Timestamp

**Cevabın:**  
**Güven düzeyin:**

### Soru 24

AI'nin ürettiği JSON için doğru yaklaşım hangisidir?

- A) AI ürettiği için trusted saymak
- B) Parse, shape ve domain validation uygulamak
- C) Yalnız prettier çalıştırmak
- D) Doğrudan production'a göndermek

**Cevabın:**  
**Güven düzeyin:**

### Soru 25

`V01-LO012` için en güçlü kanıt hangisidir?

- A) Tek doğru çıktı
- B) Contract + invalid cases + aşamalı trace + testler
- C) Uzun variable adı
- D) Bir AI ekran görüntüsü

**Cevabın:**  
**Güven düzeyin:**

## Başarı Ölçütü

En az 20 doğru cevap ve kritik 3–14, 18–25 sorularında pipeline reasoning gerekir. Yanlış/düşük
güvenli soruları 24 saat sonra yeniden çöz.
