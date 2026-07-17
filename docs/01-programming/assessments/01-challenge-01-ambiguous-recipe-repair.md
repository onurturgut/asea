---
document_type: "challenge"
challenge_id: "V01-C01-CH01"
title: "Ambiguous Recipe Repair"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C01"
difficulty: "Intermediate"
estimated_time: "75-90 minutes"
prerequisites:
  - "V01-C01-L01"
learning_outcomes:
  - "V01-LO001"
  - "V01-LO002"
assessment_id: "V01-C01-AS01"
deliverables:
  - "executable-recipe-specification"
  - "decision-log"
  - "test-matrix"
---

# Ambiguous Recipe Repair

## Problem

Bir ekip, güvenli fiziksel uygulama gerektirmeyen “dijital dosya arşivleme tarifi”ni otomasyona hazırlıyor. Mevcut tarif şöyledir:

> Eski dosyaları bul, önemli olanları ayır, düzgün adlandır, uygun klasöre koy ve gerekirse yedekle.

Bu metni, farklı ekip üyelerinin aynı örnek dosya listesinde aynı sonucu üreteceği kesin bir algoritma sözleşmesine dönüştürün. Gerçek dosyaları taşımayın; yalnızca sağlanan hayalî kayıtlarla çalışın.

## Constraints

- “Eski”, “önemli”, “düzgün”, “uygun” ve “gerekirse” sözcüklerinin tamamı ölçülebilir kurala dönüşmelidir.
- Algoritma sonlu olmalıdır.
- Aynı ada sahip iki dosya için çakışma politikası bulunmalıdır.
- Eksik tarih, bilinmeyen dosya türü ve boş girdi davranışı tanımlanmalıdır.
- Çözüm dil bağımsız pseudocode veya karar tablosu olarak sunulmalıdır.

## Acceptance Criteria

- En az on iki kesin adım bulunur.
- En az altı varsayım veya karar açıkça kaydedilir.
- Beş test vakası normal, sınır ve geçersiz durumları kapsar.
- Her test için beklenen hedef klasör/ad veya hata sonucu belirtilir.
- Program, algoritma ve yürütme kavramları teslimatta doğru ayrılır.

## Deliverables

1. Algoritma veya pseudocode
2. Dosya sınıflandırma karar tablosu
3. Beş satırlık test matrisi
4. En fazla 400 kelimelik karar günlüğü
5. İlk sürüm ile revize sürüm arasındaki fark

## Evaluation

| Boyut | Ağırlık |
|---|---:|
| Belirsizliği ölçülebilir kurala dönüştürme | %30 |
| Tamlık ve sonlanma | %20 |
| Test kapsamı | %25 |
| Kavram doğruluğu | %15 |
| Karar gerekçesi | %10 |

## Reflection

1. Hangi kural teknik değil, ürün kararı gerektiriyordu?
2. İki geçerli tasarım arasında hangi trade-off'u seçtiniz?
3. Gerçek dosya sistemi kullanılsaydı hangi güvenlik sınırları eklenmeliydi?

## References

- [What Is Programming?](../chapters/01-what-is-programming.md)
- [Human Instruction Interpreter](../labs/01-lab-01-human-instruction-interpreter.md)
