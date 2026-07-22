---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-ASMT-002"
supporting_document_type: "Assessment Plan"
title: "Programlama Nedir? — Quiz Cevap Anahtarı"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Assessment Designer"
source_ids: ["V01-C01-QZ01", "V01-C01-AS01", "V01-LO001", "V01-LO002"]
derived_from: ["./quiz.md", "../../../assessments/01-quiz-01-what-is-programming.md", "./assessment-rubric.md"]
x-content-language: "tr-TR"
---

# Programlama Nedir? — Quiz Cevap Anahtarı

## Purpose

Quiz tamamlandıktan sonra puanlama, hata açıklaması ve hedefli tekrar için
değerlendiriciye doğrulanabilir cevap ölçütleri sunmak.

## Scope

Bu belge 25 sorunun cevaplarını ve kabul ölçütlerini kapsar. Öğrenci bağımsız
denemesini teslim etmeden gösterilmemelidir.

## Ownership

- Puanlama sahibi: Assessment Designer
- Teknik doğrulama: Subject-Matter Reviewer
- Yayın erişimi: sınav teslim durumu veya yetkili rol ile sınırlandırılmalıdır

## Content

### Çoktan seçmeli cevaplar

| Soru | Cevap | Outcome | Açıklama |
| ---: | :---: | --- | --- |
| 1 | B | `V01-LO001` | Algoritma sonlu çözüm yöntemidir. |
| 2 | C | `V01-LO001` | Yöntem ile somut dil/ortam ifadesi ayrılır. |
| 3 | C | `V01-LO001` | Yürütme, talimatların gerçekten uygulanmasıdır. |
| 4 | B | `V01-LO002` | Nesne, ölçüt ve hata davranışı belirsizdir. |
| 5 | C | `V01-LO001` | Çalışma, gereksinim doğruluğunu tek başına kanıtlamaz. |
| 6 | A | `V01-LO001` | Düğmeye basma sisteme giren olaydır. |
| 7 | C | `V01-LO002` | Kesinlik tek anlam, sıra ve gözlenebilirlik ister. |
| 8 | C | `V01-LO002` | Bir kişi geçerli alanın alt sınırıdır. |
| 9 | B | `V01-LO002` | İlk sapma kök neden aramasının başlangıcıdır. |
| 10 | B | `V01-LO002` | Kör test gizli bağlamı ortadan kaldırır. |
| 11 | D | `V01-LO001` | Çıktı farklı gözlenebilir etkiler olabilir. |
| 12 | A | `V01-LO001` | Algoritma tek dile bağlı değildir. |
| 13 | C | `V01-LO001` | AI çıktısı kanıtla doğrulanması gereken öneridir. |
| 14 | A | `V01-LO002` | Etki ile onu üreten temel kusur ayrılır. |
| 15 | B | `V01-LO002` | Üretilen ve test edilen talimat dizisi doğrudan kanıttır. |

### Kısa yanıt kabul ölçütleri

16. Problem tanımı, gereksinim, algoritma, test ve doğrulamanın sözdiziminden
    ayrı olduğunu belirtmelidir.
17. Aynı senaryoda algoritmayı yöntem, programı temsil, yürütmeyi çalışan süreç
    olarak doğru ayırmalıdır.
18. Programın çalıştığını fakat gereksinimi yanlış yorumladığını gösteren somut
    senaryo ve beklenen davranış içermelidir.
19. Yazılmayan fakat uygulayıcının bilmesi beklenen kararı tanımlamalı ve iki
    farklı yorum üretmelidir.
20. Normal geçerli akışı, sınır izin verilen kenarı, geçersiz test sözleşme dışı
    girdiye tepkiyi ölçmelidir.

### Uygulama sorusu kabul ölçütleri

21. En az beş bağımsız karar bulunmalıdır; örneğin boşluk, yinelenen değer,
    sıralama, geçersiz veri, çıktı ve hata davranışı.
22. Dört adım tek eylemli, sıralı ve gözlenebilir olmalıdır; girdi veya ön koşul
    belirtilmelidir.
23. İş kuralı toplam satış tutarıysa ilk sapma `unitPrice + quantity`
    işlemidir; beklenen işlem çarpmadır.
24. Başlangıç durumu, yalnız yazılı talimat, açıklama yasağı, adım kaydı, ilk
    sapma ve revizyon içermelidir.
25. Beş istenen alan birbirinden ayrılmalı; sınır ve geçersiz durum gözlenebilir
    beklenen davranış taşımalıdır.

### Puanlama

- Çoktan seçmeli: 15 × 2 = 30 puan
- Kısa yanıt: 5 × 6 = 30 puan
- Uygulama: 5 × 8 = 40 puan
- Geçme puanı: 80/100
- Her outcome için en az %70 alt puan gerekir

## Validation

- 25 sorunun tamamı için cevap veya kabul ölçütü vardır.
- Puan toplamı 100'dür.
- Cevap anahtarı öğrenci quiz dosyasından ayrıdır.
- Değerlendirme iki outcome'u ayrı raporlayabilir.

## References

- [Öğrenci Quiz Formu](./quiz.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Kanonik Assessment](../../../assessments/01-assessment-01-what-is-programming.md)
