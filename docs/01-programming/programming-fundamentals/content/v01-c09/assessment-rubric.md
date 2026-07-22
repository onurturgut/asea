---
document_type: "assessment-rubric"
document_id: "V01-C09-RB01"
assessment_id: "V01-C09-AS01"
title: "Boolean Mantığı ve Doğruluk Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
---

# Boolean Mantığı ve Doğruluk Değerlendirme Rubriği

## Zorunlu Kapılar

- `V01-LO013`: Üç bağımsız girdi için eksiksiz sekiz satırlık doğruluk tablosu.
- `V01-LO014`: Bileşik ifadeyi eşdeğer, daha okunabilir biçime dönüştürme ve bütün satırlarda kanıtlama.
- Quiz: En az 20/25.
- Laboratuvar: Bütün temel testlerin geçmesi.
- Güvenlik sınırı: İstemci kararının gerçek yetkilendirme olmadığını doğru açıklama.

Kapılardan biri başarısızsa toplam puandan bağımsız olarak bölüm tamamlanmış sayılmaz.

## Puanlama Tablosu

| Ölçüt | Ağırlık | Başarılı kanıt |
|---|---:|---|
| Gereksinimi önermelere ayırma | 15 | Her kural açık, bağımsız ve anlamlı adlandırılmış |
| Doğruluk tablosu doğruluğu | 25 | Bütün birleşimler ve ara sütunlar eksiksiz |
| Eşdeğerlik ve De Morgan | 20 | Dönüşüm doğru, bütün satırlarda kanıtlı |
| JavaScript davranışı | 15 | Truthy/falsy, işlenen dönüşü ve kısa devre doğru açıklanmış |
| Kod kalitesi | 10 | Açık adlar, parantez, çalışan ve izlenebilir kod |
| Hata ayıklama kanıtı | 10 | Bilerek eklenen hata karşı örnekle teşhis edilmiş |
| Yansıma ve mühendislik sınırı | 5 | Karar modeli ile güvenlik mimarisi ayrılmış |

## Performans Düzeyleri

- **90–100 — Yetkin:** Bağımsız çözer, kanıtlar ve alternatifleri değerlendirir.
- **75–89 — Gelişiyor:** Temel hedefler karşılanır; küçük gerekçe veya sınır eksikleri vardır.
- **60–74 — Destek gerekli:** Bazı doğru sonuçlar vardır, fakat tablo veya eşdeğerlik güvenilir değildir.
- **0–59 — Yeniden çalışma:** Temel operatör veya doğruluk modeli kurulmamıştır.

## Geri Bildirim Kuralı

Geri bildirim “yanlış” demekle sınırlı kalmamalıdır. Hatalı satır, beklenen davranış, muhtemel zihinsel model ve öğrencinin yapacağı bir sonraki ölçülebilir düzeltme belirtilmelidir.
