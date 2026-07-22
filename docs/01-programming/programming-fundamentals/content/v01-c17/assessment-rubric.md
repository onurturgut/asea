---
document_type: "assessment-rubric"
document_id: "V01-C17-AR01"
title: "V01-C17 Assessment Rubric"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
last_updated: "2026-07-23"
---

# Değerlendirme Rubriği

## Puanlama

| Boyut | Ağırlık | Tam başarı kanıtı |
|---|---:|---|
| Veri ve API sözleşmesi | 15 | Tür, aralık, boşluk, hata ve mutation politikası açık |
| Dolaşma doğruluğu | 20 | Sınırlar doğru, bütün ve yalnız gerekli öğeler işleniyor |
| Dönüşüm/toplulaştırma | 15 | `map`/`filter`/`reduce` veya döngü niyetle uyumlu |
| Sınır ve hata yönetimi | 15 | Boş, tek, sınır, yanlış tür ve özel sayılar kapsanıyor |
| Test ve kanıt | 20 | En az 12 anlamlı test, kaynak koruma ve hata yeniden üretimi |
| Tasarım gerekçesi | 10 | Tek/çok geçiş seçimi ölçütlerle savunuluyor |
| Kod okunabilirliği | 5 | Adlandırma, küçük sözleşmeler ve çalıştırma yönergesi açık |

## Başarı Eşikleri

- 90–100: Referans düzeyinde; kararlar ve kanıtlar eksiksiz.
- 75–89: Başarılı; küçük açıklık veya test eksikleri olabilir.
- 60–74: Revizyon gerekli; temel sonuç var fakat sınır kanıtı zayıf.
- 0–59: Yeniden çalışma; sözleşme veya doğruluk güvenilir değil.

`V01-LO025` için dolaşma ve dönüşüm boyutlarının, `V01-LO026` için toplulaştırma,
sınır yönetimi ve test boyutlarının her biri en az %75 olmalıdır. Toplam puan yüksek
olsa bile bu kritik eşiklerden biri karşılanmazsa bölüm tamamlanmış sayılmaz.
