---
document_type: "quiz"
quiz_id: "V01-C01-QZ01"
title: "What Is Programming? Quiz"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
scope_type: "Chapter"
scope_id: "V01-C01"
difficulty: "Beginner"
estimated_time: "20 minutes"
learning_outcomes:
  - "V01-LO001"
  - "V01-LO002"
assessment_id: "V01-C01-AS01"
question_count: 15
passing_score: 80
---

# What Is Programming? Quiz

## Instructions

Önce soruları kaynak kullanmadan yanıtlayın. Her soruda tek doğru seçenek vardır. Yanıtları göndermeden önce iki soruda neden diğer seçenekleri elediğinizi yazın. 15 sorudan en az 12 doğru cevap gerekir.

Makine tarafından okunabilir türev: [Quiz JSON](../assets/01-quiz-01-what-is-programming.json).

## Questions

### Easy

1. Bir problemi çözmek için tanımlanmış sonlu adımlar dizisi hangisidir?
   - A. Algoritma
   - B. Çıktı
   - C. Runtime
   - D. Hata mesajı
2. Hesaplamanın başlangıçta aldığı veriye ne ad verilir?
   - A. İşlem
   - B. Girdi
   - C. Programlama dili
   - D. Derleyici
3. Aşağıdakilerden hangisi gözlenebilir çıktı örneğidir?
   - A. Kaynak dosyanın adı
   - B. Programcının niyeti
   - C. Ekranda gösterilen toplam
   - D. Belirsiz gereksinim
4. Kaynak kodun gerçekten uygulanmasına ne denir?
   - A. Tasarım
   - B. Yürütme
   - C. Belgeleme
   - D. Tahmin
5. “Listeyi düzgün sırala” talimatının temel sorunu nedir?
   - A. Çok uzun olması
   - B. “Düzgün” ölçütünün belirsiz olması
   - C. Bir çıktı içermesi
   - D. Bilgisayarda çalışması

### Medium

6. Aynı algoritmanın Python ve JavaScript ile yazılması durumunda hangisi genellikle aynı kalır?
   - A. Sözdizimi
   - B. Runtime
   - C. Çözümün mantıksal adımları
   - D. Dosya uzantısı
7. Program çalışıyor fakat yüzde indirimi toplama olarak uyguluyor. Bu durum en iyi nasıl sınıflandırılır?
   - A. Doğru program
   - B. Mantık hatası
   - C. Yalnızca yazım hatası
   - D. Girdi yokluğu
8. Hangisi en iyi sınır testi örneğidir?
   - A. Tipik iki ürün
   - B. Boş ürün listesi
   - C. Kodun rengini değiştirmek
   - D. Dokümantasyonu okumamak
9. Bir programı çalıştırmadan önce çıktı tahmini yapmanın en önemli yararı nedir?
   - A. Test ihtiyacını kaldırır
   - B. Kodun daha kısa olmasını sağlar
   - C. Zihinsel model ile gerçek davranış arasındaki farkı görünür kılar
   - D. Runtime'ı değiştirir
10. “Kullanıcı adı yoksa hata göster” ifadesinde hangisi hâlâ açıklığa kavuşturulmalıdır?

- A. Hatanın gözlenebilir biçimi ve sonraki davranış
- B. Programın bir çıktısı olduğu
- C. Kullanıcı adının girdi olabileceği
- D. Bir karar verildiği

11. AI tarafından üretilen kod beklenen örneği veriyor. Sonraki en iyi adım hangisidir?

- A. Doğrudan yayınlamak
- B. Modelin güven ifadesine bakmak
- C. Gereksinim, sınır ve geçersiz testlerle bağımsız doğrulamak
- D. Tüm açıklamaları silmek

### Hard

12. İki kişi aynı talimat dizisini doğru okuyup farklı sonuç üretiyor. En güçlü ilk hipotez hangisidir?

- A. İki kişi de dikkatsizdir
- B. Talimat sözleşmesinde gizli varsayım vardır
- C. Algoritmalar program olamaz
- D. Çıktı gereksizdir

13. Bir program tüm mevcut testleri geçiyor. Hangisi teknik olarak doğrudur?

- A. Program bütün olası girdiler için kesinlikle doğrudur
- B. Testler yalnızca kapsadıkları davranış için kanıt sağlar
- C. Gereksinim artık değişemez
- D. Kaynak kod algoritmadan bağımsızdır

14. Hangisi program ile çalışan süreç arasındaki sınırı en iyi açıklar?

- A. Program yürütülebilir temsil; süreç bu temsilin belirli anda çalışan örneğidir
- B. İkisi her durumda aynı dosyadır
- C. Süreç yalnızca algoritmanın adıdır
- D. Program yalnızca çıktıdır

15. Bir dosya düzenleme algoritması “eski dosyaları arşivle” diyor. En iyi mühendislik iyileştirmesi hangisidir?

- A. Daha güçlü bir bilgisayar kullanmak
- B. “Eski” için tarih eşiği, saat dilimi ve eksik tarih davranışı tanımlamak
- C. Talimatı daha kısa yazmak
- D. Bir programlama dili seçmeden test yazmamak

## Answer Key

| Soru | Yanıt | Gerekçe |
|---:|:---:|---|
| 1 | A | Algoritma, çözümün sonlu ve sıralı yöntemidir. |
| 2 | B | Girdi, hesaplamaya başlangıçta verilen veridir. |
| 3 | C | Ekrandaki toplam dışarıdan gözlenebilir sonuçtur. |
| 4 | B | Yürütme, talimatların çalışma ortamında uygulanmasıdır. |
| 5 | B | Sıralama ölçütü belirtilmediği için sonuç doğrulanamaz. |
| 6 | C | Dil temsili değişse de çözüm yöntemi korunabilir. |
| 7 | B | Kod çalışır, fakat iş kuralını yanlış uygular. |
| 8 | B | Boş koleksiyon, minimum boyut sınırını sınar. |
| 9 | C | Tahmin, yanlış zihinsel modeli teşhis etmeyi sağlar. |
| 10 | A | Kullanıcıya ve sisteme etkisi belirlenmeden hata sözleşmesi eksiktir. |
| 11 | C | AI çıktısı bağımsız kanıtla doğrulanmalıdır. |
| 12 | B | Farklı geçerli yorumlar eksik sözleşme göstergesidir. |
| 13 | B | Test geçişi, test edilmemiş tüm durumları kanıtlamaz. |
| 14 | A | Kaynak temsil ile çalışan örnek farklı yaşam döngüleridir. |
| 15 | B | Belirsiz nitelik ölçülebilir kural ve hata davranışına dönüşür. |

## Scoring

- 12-15 doğru: geçti
- 9-11 doğru: ilgili kavramları tekrar edip yeni soru setiyle yeniden dene
- 0-8 doğru: Chapter'ın Core Concepts bölümünü tahmin–çalıştır–açıkla döngüsüyle yeniden çalış

Yanlışların sayısından çok dağılımını inceleyin. `V01-LO001` veya `V01-LO002` sorularının tamamında hata varsa toplam puan geçse bile hedefe özel yeniden çalışma gerekir.

## References

- [What Is Programming?](../chapters/01-what-is-programming.md)
- [Chapter 01 Assessment](./01-assessment-01-what-is-programming.md)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
