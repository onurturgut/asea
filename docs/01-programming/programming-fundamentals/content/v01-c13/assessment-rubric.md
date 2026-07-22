---
document_type: "assessment-rubric"
document_id: "V01-C13-RB01"
title: "V01-C13 Assessment Rubric"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
assessment_id: "V01-C13-AS01"
learning_outcomes: ["V01-LO019", "V01-LO020"]
last_updated: "2026-07-23"
---

# Değerlendirme Rubric'i

| Ölçüt | Başlangıç | Gelişiyor | Yeterli | Güçlü | Puan |
|---|---|---|---|---|---:|
| Contract bütünlüğü | Alanlar eksik | Temel girdi/çıktı var | Yedi alan tam ve tutarlı | Birim, sınır ve alternatif gerekçeli | 25 |
| Çağrı/dönüş izi | Sıra yanlış | Ana sıra doğru, yerel durum eksik | Frame, girdi, dönüş ve devam tam | Hata ve kısa devre yolu da doğru | 20 |
| Implementation uyumu | Contract bozuluyor | Normal vaka uyumlu | Bütün geçerli ve hata yolları uyumlu | İki implementation eşdeğer kanıtlı | 20 |
| Test kanıtı | Yalnız happy path | Bazı sınırlar var | Normal, sınır, geçersiz, etki tam | Maddeler traceable ve regresyon var | 20 |
| Mühendislik açıklaması | Sözdizimi tekrarı | Kısmi gerekçe | Sorumluluk ve trade-off açık | Karşı örnek ve contract değişimi analizi | 10 |
| AI denetimi | Kör kabul | Kullanım beyanı | Varsayım bağımsız doğrulanmış | Kabul/ret kanıtı ve risk kaydı | 5 |

## Başarı Kapısı

Toplam en az 75; contract bütünlüğünde en az 16, çağrı izinde en az 12 ve test kanıtında en az 12 puan gerekir. Açıklanamayan AI kodu veya yalnız ekrana doğru değer yazdıran fakat contract döndürmeyen çözüm yeterli değildir.
