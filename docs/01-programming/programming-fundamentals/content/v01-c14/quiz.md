---
document_type: "quiz"
document_id: "V01-C14-QZ01"
title: "V01-C14 Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
learning_outcomes: ["V01-LO021"]
passing_score: 75
last_updated: "2026-07-23"
---

# Quiz

Her soruyu gerekçesiyle yanıtlayın; sonra [cevap anahtarını](./quiz-answer-key.md) açın.

## Sorular

### Soru 1

Parametre nerede bulunur?

A. Fonksiyon tanımında girdi konumu olarak  
B. Yalnız çıktıda  
C. Dosya adında  
D. Her yorumda

### Soru 2

Argüman nedir?

A. Fonksiyon adı  
B. Çağrıda parametreye değer sağlayan ifade  
C. Yalnız return  
D. Global değişken

### Soru 3

JavaScript argüman ifadelerini hangi sırada değerlendirir?

A. Sağdan sola  
B. Soldan sağa  
C. Rastgele  
D. İsim sırasıyla

### Soru 4

Eksik argümanda parameter genellikle ne olur?

A. 0  
B. `null`  
C. `undefined`  
D. Son argüman

### Soru 5

Fazla argüman için hangisi doğrudur?

A. İfadesi hiç değerlendirilmez  
B. İfadesi değerlendirilebilir, named parameter'a bağlanmayabilir  
C. Daima SyntaxError  
D. İlk parameter'ı siler

### Soru 6

Default parameter hangi durumda çalışır?

A. 0'da  
B. `null`'da  
C. Omitted veya `undefined`'da  
D. Her falsy değerde

### Soru 7

`multiply(5, null)` default multiplier 1 ise ne olur?

A. Default çalışır  
B. Default çalışmaz  
C. Argüman yok sayılır  
D. Daima SyntaxError

### Soru 8

Rest parameter ne yapar?

A. Kalan argümanları array'de toplar  
B. Array'i açar  
C. Return'ü siler  
D. Global durum oluşturur

### Soru 9

JavaScript parameter passing için doğru ifade hangisidir?

A. Her zaman call-by-reference  
B. Değerler aktarılır; object değeri bir referanstır  
C. Primitive değişmez  
D. Object daima kopyalanır

### Soru 10

Primitive parameter reassignment dış binding'i neden değiştirmez?

A. Yerel parameter binding'i yeniden atanır  
B. JavaScript çalışmaz  
C. Return yoktur  
D. Console engeller

### Soru 11

Object property mutation neden caller'da görünür?

A. İki taraf aynı nesneye erişen reference değerini kullanır  
B. Parameter adı aynıdır  
C. Object primitive'dir  
D. Default çalışır

### Soru 12

Unused parameter için ilk doğru işlem nedir?

A. Körlemesine silmek  
B. Contract ve bütün caller kullanımını doğrulamak  
C. Rest'e taşımak  
D. Global yapmak

### Soru 13

Derived input riski nedir?

A. İki truth source çelişebilir  
B. Kod hiç çalışmaz  
C. Return zorunlu olmaz  
D. Parameter adı kısalır

### Soru 14

Hidden input nedir?

A. Sonucu etkileyip signature'da görünmeyen bilgi  
B. Yorum  
C. Return value  
D. Literal argument

### Soru 15

Uzun parameter list neden otomatik hata değildir?

A. Bağlam ve tek sorumluluk bazı listeleri gerekçelendirebilir  
B. Her zaman iyidir  
C. Test gerekmez  
D. Sıra önemsizdir

### Soru 16

Flag argument hangi riski gösterebilir?

A. İki farklı davranışın tek function'da gizlenmesi  
B. Number overflow  
C. Dosya silinmesi  
D. Parameter olmaması

### Soru 17

Print ve return farkı hangisidir?

A. Print caller'a değer verir  
B. Return caller'a değer; print konsola etki verir  
C. İkisi aynıdır  
D. Return yalnız logdur

### Soru 18

Eksik return hangi sonucu üretebilir?

A. Otomatik 0  
B. `undefined`  
C. Son argument  
D. Sonsuz döngü

### Soru 19

Tutarlı result shape neden önemlidir?

A. Caller'ın öngörülebilir contract kullanması için  
B. Dosya uzasın diye  
C. Print artsın diye  
D. Parameter silinsin diye

### Soru 20

Composition için hangi şart gereklidir?

A. Output ile sonraki input contract uyumu  
B. Yalnız iç içe parantez  
C. Aynı function adı  
D. Global variable

### Soru 21

Aliasing nedir?

A. İki adın aynı nesneye erişmesi  
B. İki farklı primitive  
C. Eksik argument  
D. Default return

### Soru 22

Options object ne zaman anlamlıdır?

A. İlişkili named seçenekleri gerçek contract olarak taşıdığında  
B. Her uzun listede otomatik  
C. Gizli input için  
D. Testleri silmek için

### Soru 23

Command–query sezgisinin amacı nedir?

A. Return ve dış etki sorumluluklarını görünür sorgulamak  
B. Bütün command'ları yasaklamak  
C. Her function'ı print yapmak  
D. Parametreyi kaldırmak

### Soru 24

Interface refactoring'de hangi kapsam test edilmelidir?

A. Yalnız function body  
B. Function ve bütün caller'lar  
C. Yalnız dosya adı  
D. Yalnız AI çıktısı

### Soru 25

AI arayüzü için en güçlü kanıt hangisidir?

A. “Clean” demesi  
B. Parameter rationale, data-flow trace ve contract testlerinin geçmesi  
C. Kodun kısa olması  
D. Çok seçenek eklemesi
