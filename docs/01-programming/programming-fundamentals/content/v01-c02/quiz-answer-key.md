---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-ASMT-002"
supporting_document_type: "Assessment Plan"
title: "Bilgisayarlar Programları Nasıl Çalıştırır? — Quiz Cevap Anahtarı"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Assessment Designer"
source_ids: ["V01-C02-QZ01", "V01-C02-AS01", "V01-LO003", "V01-LO004"]
derived_from: ["./quiz.md", "./assessment-rubric.md"]
x-production-unit: "v01-c02"
x-content-language: "tr-TR"
---

# Bilgisayarlar Programları Nasıl Çalıştırır? — Quiz Cevap Anahtarı

## Purpose

`V01-C02-QZ01` değerlendirmesinin cevaplarını, gerekçelerini ve açık uçlu cevap
ölçütlerini öğrenci soru formundan ayrı tutmak.

## Scope

Bu belge değerlendirme sonrasında öz değerlendirme ve değerlendirici geri
bildirimi için kullanılır. Öğrenci denemesini teslim etmeden gösterilmez.

## Ownership

Assessment Designer cevap doğruluğundan ve puanlama ölçütlerinden sorumludur.
Eğitmen veya yayın sistemi, belgeye erişimi deneme tamamlanana kadar sınırlar.

## Content

### Çoktan seçmeli ve durum izleme cevapları

| Soru | Cevap | Açıklama |
| ---: | --- | --- |
| 1 | B | Program temsil, süreç çalışan örnek ve durumdur. |
| 2 | C | Kaynak temsil bir araç zinciri veya çalışma zamanı üzerinden yürütme temsiline bağlanır. |
| 3 | A | Bağlayıcı nesne dosyalarını, sembolleri ve yeniden konumlandırma ilişkilerini birleştirir. |
| 4 | D | Yükleyici, yürütmenin başlayabileceği süreç durumunu hazırlar. |
| 5 | C | ISA, yazılımın gözleyebildiği talimat ve durum sözleşmesidir. |
| 6 | D | PC'nin ayrıntılı anlamı ISA'ya ve gözlem noktasına bağlıdır. |
| 7 | A | Sanal ve fiziksel adres aynı adres alanına ait değildir. |
| 8 | C | Yorumlama ve anında derleme aynı gerçekleştirim içinde birlikte bulunabilir. |
| 9 | D | Ayrı süreçlerin yürütme durumları bağımsız olabilir. |
| 10 | B | Model, mikro mimarinin eksiksiz zamanlama diyagramı değildir. |
| 11 | A | Çözümlenmeyen dış sembol bir bağlama problemidir. |
| 12 | C | Yürütülebilir vardır; süreç başlangıç hazırlığı başarısızdır. |
| 13 | A | Kaynak addan fiziksel hücreye sabit bire bir eşleme garanti edilmez. |
| 14 | B | İş parçacıkları süreç kaynaklarını paylaşırken ayrı yürütme durumu taşıyabilir. |
| 15 | D | İlk sapma, kök nedene giden en dar kanıt noktasıdır. |
| 16 | `PC=1, R1=3, R2=0, output=[], running=true` | `LOADI` yalnız R1 ve PC'yi değiştirir. |
| 17 | `R2=6, PC=2` | `3+3` R2'ye yazılır ve PC artar. |
| 18 | Hayır | R2 değeri 6'dır; sıfır olmadığı için PC 3 olur. |
| 19 | `output=[6], PC=4` | `OUT` değeri ekler; `HALT` çalışmayı bitirir ve PC'yi değiştirmez. |
| 20 | `0 → 1 → 2 → 4`; çıktı `[]` | R2 sıfır olur; `JZ` doğrudan `HALT` adresine dallanır. |

Çoktan seçmeli sorularda doğru seçenek dağılımı A=4, B=3, C=4 ve D=4'tür.

### Açık uçlu cevap ölçütleri

- **21:** Kaynak kod → derleyici/assembler → nesne dosyası → bağlayıcı →
  yürütülebilir → yükleyici → süreç → CPU talimat/durum etkileri zincirini
  anlamca doğru kurmalıdır.
- **22:** Temsil hedefi ve yürütücü bileşen farkını; talimatların durum geçişi
  üretmesi ortaklığını göstermelidir.
- **23:** Her katman için “son başarılı temsil” ve “başarısız tüketici/işlem”
  sorusunu içermelidir.
- **24:** Önceki durum, PC, talimat, okunan değerler, değişen alanlar, sonraki
  durum ve çıktıdan en az beşini gerekçelendirmelidir.
- **25:** Başlangıç ve girdinin aynı talimatlarda farklı yol veya sonuç
  oluşturabileceğini anlatmalı; modelin mikro mimari zamanlamayı açıklamadığını
  veya soyut ISA'ya bağlı olduğunu belirtmelidir.

## Validation

- Soru sayısı: 25.
- Çoktan seçmeli cevap dağılımı: dengeli.
- `V01-LO003`: sorular 1–15, 21–23 ve 25.
- `V01-LO004`: sorular 16–20, 24 ve 25.
- Öğrenci soru formunda doğrudan cevap bulunmaz.

## References

- [Quiz](./quiz.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Assessment Readiness](../../research/v01-c02/assessment-readiness.md)
