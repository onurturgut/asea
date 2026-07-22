---
document_type: quiz
quiz_id: "V01-C04-QZ01"
title: "Algoritmalar, Sözde Kod ve İzleme — Quiz"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C04"
difficulty: "Beginner"
estimated_time: "40 minutes"
question_count: 25
passing_score: 80
learning_outcomes: ["V01-LO006"]
assessment_id: "V01-C04-AS01"
language: "tr"
---

# Algoritmalar, Sözde Kod ve İzleme — Quiz

## Yönerge

25 soruyu yardım almadan yanıtla. Cevaplarını kilitledikten sonra ayrı answer
key’i aç. Başarı eşiği 80/100; uygulamalı bölüm eşiği 24/40’tır.

## A — Çoktan Seçmeli

### Soru 1 — Kolay

Hangisi tek başına algorithm değildir?

A. Her elemanı sırayla karşılaştırmak  
B. En küçük değeri bulmak  
C. Counter’ı her turda azaltmak  
D. Invalid input’ta hata döndürmek

### Soru 2 — Kolay

Pseudocode’un temel amacı nedir?

A. Her dilde doğrudan çalışmak  
B. Algorithm’ı dil bağımsız ve incelenebilir ifade etmek  
C. Programlama syntax’ını ezberletmek  
D. Test ihtiyacını kaldırmak

### Soru 3 — Kolay

Precondition neyi tanımlar?

A. Successful completion’dan sonraki guarantee’yi  
B. Algorithm’ın başlamadan önce beklediği koşulu  
C. Her intermediate state’i  
D. Kullanılan programming language’i

### Soru 4 — Kolay

Postcondition için en doğru ifade hangisidir?

A. Implementation’ın bütün satırlarını tanımlar.  
B. Başarılı bitişte sağlanacak observable guarantee’yi tanımlar.  
C. Yalnız invalid input’u tanımlar.  
D. Loop’un kaç satır olduğunu tanımlar.

### Soru 5 — Kolay

Trace table neyi kaydeder?

A. Yalnız final output’u  
B. Seçilen input için ilgili steps ve state transitions’ı  
C. Tüm olası inputs’u  
D. Yalnız execution time’ı

### Soru 6 — Kolay

Prediction neden trace’ten önce yazılır?

A. Tabloyu kısaltmak için  
B. Mental model ile actual steps arasındaki farkı görmek için  
C. Pseudocode’u çalıştırmak için  
D. Formal proof oluşturmak için

### Soru 7 — Orta

1–50 valid aralığında en yararlı upper-bound üçlüsü hangisidir?

A. 10, 20, 30  
B. 48, 49, 50  
C. 49, 50, 51  
D. 1, 25, 50

### Soru 8 — Orta

Bir loop’ta stop condition vardır fakat state hiç değişmiyorsa temel risk nedir?

A. Syntax error  
B. Non-termination  
C. Type conversion  
D. Network failure

### Soru 9 — Orta

Termination defense’in temel üçlüsü hangisidir?

A. Input, output, color  
B. Progress measure, bound, stop condition  
C. Class, object, method  
D. File, folder, command

### Soru 10 — Orta

Üç başarılı trace hangi iddiayı destekler?

A. Algorithm bütün inputs için kanıtlanmıştır.  
B. Seçilen üç path beklenen sonucu üretmiştir.  
C. Algorithm en hızlı çözümdür.  
D. Problem contract kesinlikle doğrudur.

### Soru 11 — Orta

Pseudocode’da `console.log` kullanımının temel sakıncası nedir?

A. Output üretmesi  
B. Representation’ı JavaScript API’sine bağlaması  
C. Büyük harf içermemesi  
D. Her zaman yavaş olması

### Soru 12 — Orta

Invalid input validation’dan sonra calculation yine çalışıyorsa hangi özellik
bozulmuştur?

A. Control flow ve contract fidelity  
B. File naming  
C. Complexity analysis  
D. Source licensing

### Soru 13 — Zor

Bir counter yalnız `IF success` branch’inde azalıyor; failure branch’i tekrar
loop başına dönüyor. En doğru tanı hangisidir?

A. Her branch’te progress garanti edilmediği için termination savunulamaz.  
B. Stop condition bulunduğu için loop kesin sonlanır.  
C. Counter adı değiştirilmelidir.  
D. Trace gereksizdir.

### Soru 14 — Zor

AI contract’ta olmayan bir indirim ekledi. İlk işlem ne olmalıdır?

A. Daha kullanıcı dostu olduğu için kabul etmek  
B. Kaynaksız rule’u assumption olarak ayırıp yetkili kaynakla doğrulamak  
C. Syntax’ını düzeltmek  
D. Daha fazla indirim eklemek

### Soru 15 — Zor

Bir counterexample trace’in değeri nedir?

A. Geniş correctness iddiasının en az bir input’ta yanlış olduğunu gösterebilir.  
B. Algorithm’ın bütün diğer inputs’ta doğru olduğunu kanıtlar.  
C. Precondition ihtiyacını kaldırır.  
D. Programı otomatik düzeltir.

## B — Kısa Yanıt

### Soru 16 — Kolay

Algorithm ile program arasındaki iki farkı yaz.

### Soru 17 — Orta

1–100 score contract’ı için bir precondition, bir postcondition ve invalid input
behavior yaz.

### Soru 18 — Orta

`remaining` değeri 4’ten başlayıp her turda 2 azalıyor. Progress measure, bound
ve stop condition’ı tanımla.

### Soru 19 — Orta

Trace table’da “instruction” ile “state after” sütunlarının ayrı tutulmasının
yararını açıkla.

### Soru 20 — Zor

Bir trace normal case’te doğru, boundary case’te yanlışsa incelemeye hangi
contract ve pseudocode parçalarından başlarsın?

## C — Uygulamalı

### Soru 21 — Orta

1–10 arasındaki bir sayının çift veya tek olduğunu bildiren dil bağımsız
pseudocode ve contract yaz.

### Soru 22 — Zor

Soru 21’i `2`, `10` ve `11` için trace et; her case class’ını etiketle.

### Soru 23 — Zor

Şu loop neden sonlanmaz ve en küçük düzeltme nedir?

```pseudocode
WHILE count > 0
  IF count is even THEN
    count ← count - 1
  END IF
END WHILE
```

### Soru 24 — Zor

Bir fare algorithm için contract rule → pseudocode line → trace row zincirinden
en az üç örnek üret.

### Soru 25 — Zor

AI pseudocode’unu kabul etmeden önce uygulayacağın contract, boundary,
termination ve trace denetimini beş adımda açıkla.

## Cevabı Kilitle

Yanıtlarının değiştirilemez bir sürümünü oluştur; sonra [cevap
anahtarını](./quiz-answer-key.md) aç.

## Puanlama

| Bölüm | Dağılım | Puan |
|---|---|---:|
| 1–15 | 2 puan | 30 |
| 16–20 | 6 puan | 30 |
| 21–25 | 8 puan | 40 |
| **Toplam** |  | **100** |

## References

- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
- [Rubrik](./assessment-rubric.md)
