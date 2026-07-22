---
document_type: "interview-preparation"
interview_set_id: "V01-C08-IV01"
title: "Girdi, Çıktı ve Veri Dönüşümü — Mülakat Hazırlığı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
question_count: 15
language: "tr"
---

# Mülakat Hazırlığı

## Yanıtlama Modeli

Tanım → örnek → failure/boundary → engineering decision sırasıyla yanıtla.

## Sorular

1. Neden kullanıcı girdisi bir güven sınırı kabul edilir?
2. Parsing ile validation arasındaki fark nedir?
3. Syntactic ve semantic validation'a birer örnek verir misin?
4. `Number("")` davranışı required input'u nasıl bozabilir?
5. `Number("12px")` ile `parseInt("12px", 10)` farkı nedir?
6. JSON parse başarısı neden schema/domain validity kanıtı değildir?
7. Normalization ile transformation arasındaki fark nedir?
8. Neden her String'e trim/lowercase uygulanmamalıdır?
9. Internal para değeri ile display representation neden ayrılmalıdır?
10. Fail-fast ve collect-errors stratejilerini ne zaman seçersin?
11. Client-side validation neden server-side validation'ın yerini tutmaz?
12. İyi bir validation error hangi alanları taşımalıdır?
13. Hassas girdi failure'larını nasıl gözlemlersin?
14. Bir data pipeline'ı source adapter'dan nasıl bağımsız tutarsın?
15. AI'nin ürettiği input validation kodunu nasıl denetlersin?

## Uygulamalı Soru

`rawPort = "3000x"` için iki parser seçeneğini karşılaştır; contract yaz, sonucu tahmin et,
validation ve error output tasarla. Yalnız “parseInt kullan” cevabı yeterli değildir.

## Öz Değerlendirme

Her cevabı 0–3 puanla. Toplam 36/45 altında kalan öğrenci bağlı ana ders bölümünü tekrar eder.
