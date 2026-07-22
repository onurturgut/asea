---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-RVIDX-001"
supporting_document_type: "Review Index"
title: "V01-C02 Bağımsız İnceleme Hazırlık Planı"
version: "0.1.2"
status: "Draft"
scope_id: "V01-C02"
authority: "Informational"
owner_role: "Repository Reviewer"
source_ids:
  - "V01-C02"
  - "V01-C02-AS01"
  - "V01-C02-SD-COMP-023"
derived_from:
  - "./educational-quality-assurance.md"
  - "../../../../../knowledge/reviews/v01-c02-lo-traceability-validation-report.md"
  - "../../../../standards/governance/02-review-standard.md"
---

# V01-C02 Bağımsız İnceleme Hazırlık Planı

## Purpose

`V01-C02` paketinin `Stable` geçişinden önce tamamlanacak bağımsız teknik,
pedagojik, ölçme, erişilebilirlik ve repository incelemelerinin kapsamını,
kanıtlarını ve karar sırasını tanımlamak.

## Scope

Plan yalnız inceleme hazırlığıdır; kendi başına onay veya inceleme kararı
üretmez. Her gerçek karar, ASEA Review Standard'a uygun ayrı bir `review`
belgesinde ve incelemeyi gerçekleştiren yetkili rol tarafından kaydedilir.

## Ownership

- Koordinasyon: Repository Reviewer
- Teknik inceleme: Subject-Matter Reviewer
- Pedagojik ve dil incelemesi: Pedagogical Reviewer
- Ölçme incelemesi: Assessment Reviewer
- Erişilebilirlik incelemesi: Accessibility Reviewer
- Nihai kapı: değişikliklerin yazarından bağımsız Final Reviewer

Bir incelemeci kendi ürettiği içeriği tek başına nihai olarak onaylayamaz.

## Content

### İnceleme sırası

```text
Otomatik doğrulama
→ Teknik inceleme
→ Pedagojik ve dil incelemesi
→ Ölçme incelemesi
→ Erişilebilirlik incelemesi
→ Repository incelemesi
→ Öğrenci pilotu
→ Gerekli düzeltmeler
→ Yeniden doğrulama
→ Final inceleme
```

### Ortak inceleme girdileri

- [Kanonik ana ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Bölüm dizini](./chapter.md)
- [Değerlendirme rubriği](./assessment-rubric.md)
- [Eğitimsel kalite güvencesi](./educational-quality-assurance.md)
- [Araştırma sentezi](../../research/v01-c02/research-synthesis.md)
- [Öğrenme çıktısı kanıt haritası](../../research/v01-c02/learning-outcome-evidence-map.md)
- [Üretim paketi](../../../../../knowledge/production-packets/v01-c02-cpp-001.json)
- [LO izlenebilirlik doğrulama raporu](../../../../../knowledge/reviews/v01-c02-lo-traceability-validation-report.md)

İncelemeci kullandığı dosyaların sürümlerini karar kaydında sabitler.

### İnceleme teslim kapsamı

Bağımsız incelemeye gönderilecek kapsam aşağıdaki sürümlerle kilitlenmiştir:

| Girdi | Sürüm | Kullanım |
| --- | --- | --- |
| Kanonik ana ders `V01-C02` | `0.2.2` | İncelenecek eğitim anlatımı |
| Chapter Blueprint `V01-C02-BP01` | `0.1.2` | Mimari ve outcome sözleşmesi |
| Üretim paketi `V01-C02-CPP-001` | `1.0.1` | Üretim ve kabul kanıtı sözleşmesi |
| EQA raporu `V01-C02-SD-COMP-023` | `0.2.2` | Açık yayın kapıları ve masa başı bulguları |
| LO izlenebilirlik raporu `V01-C02-VR001` | `0.1.0` | Otomatik doğrulama kanıtı |

İnceleme başladıktan sonra bu girdilerden biri değişirse mevcut karar kapsamı
geçersiz olur; değişen sürümle yeni review kaydı açılır.

### Üretilecek bağımsız karar kayıtları

Karar kayıtları `docs/01-programming/programming-fundamentals/review/v01-c02/`
altında oluşturulmalıdır. Aşağıdaki sıra, tür ve alan değerleri Review Standard
enum'larını değiştirmeden kullanılır:

| Sıra | Planlanan ID | Review Type | Review Domain | Bağımsız sahip |
| ---: | --- | --- | --- | --- |
| 1 | `V01-RV040` | Technical | Validation | Repository Reviewer |
| 2 | `V01-RV041` | Technical | Content | Subject-Matter Reviewer |
| 3 | `V01-RV042` | Content | Content | Pedagogical Reviewer |
| 4 | `V01-RV043` | Content | Assessment | Assessment Reviewer |
| 5 | `V01-RV044` | Technical | Assessment | Subject-Matter Reviewer |
| 6 | `V01-RV045` | Content | Content | Accessibility Reviewer |
| 7 | `V01-RV046` | Repository | Content | Repository Reviewer |
| 8 | `V01-RV047` | Final | Content | Final Reviewer |

Bu ID'ler yalnız planlanan sırayı gösterir. Her kayıt oluşturulmadan hemen önce
repository genelinde benzersizlik kontrolü yeniden çalıştırılır. Karar ve bulgu
alanları gerçek incelemeci değerlendirmesi yapılmadan önceden doldurulmaz.

### Teknik inceleme sözleşmesi

Review Standard karşılığı: `review_type: Technical`,
`review_domain: Content`.

Kontrol listesi:

1. Kaynak kod, assembly, makine kodu ve süreç ayrımları doğrudur.
2. Derleyici, assembler, bağlayıcı ve yükleyici rolleri birbirine karışmaz.
3. ISA ve mikro mimari sınırı korunur.
4. Program sayacı, yazmaç, bellek ve sanal adres açıklamaları bağlama duyarlıdır.
5. Getir-çözümle-yürüt modeli evrensel çevrim zamanlaması gibi sunulmaz.
6. JavaScript örnekleri bildirilen sonuçları üretir.
7. Laboratuvar talimat sözleşmesi ve hata davranışları tutarlıdır.
8. Resmî ve akademik kaynaklar teknik iddiaları destekler.

Zorunlu kanıt: çalıştırma çıktısı, iddia-kaynak örneklemesi ve bulgu tablosu.

### Pedagojik ve dil incelemesi sözleşmesi

Review Standard karşılığı: `review_type: Content`,
`review_domain: Content`.

Kontrol listesi:

1. Öğrenme yolu ön bilgiden bağımsız uygulamaya kademeli ilerler.
2. Her ana bölüm “ne, neden, nasıl ve ne zaman” sorularını karşılar.
3. `V01-LO003` ve `V01-LO004` anlatımda ayrı ve görünürdür.
4. Bilişsel yük, okuma rehberindeki oturumlarla yönetilebilir.
5. Benzetmeler teknik modelin yerine geçmez ve sınırları açıklanır.
6. İlk teknik terim kullanımı Türkçe (English) biçimindedir.
7. Kod, API, talimat ve dosya adları dışındaki eğitim anlatımı Türkçedir.
8. Örnek, uygulama, hata ayıklama ve yansıtma arasında gereksiz tekrar yoktur.

Zorunlu kanıt: bölüm bazlı bulgular, terminoloji örneklemesi ve bilişsel yük
değerlendirmesi.

### Ölçme incelemesi sözleşmesi

Review Standard karşılığı önce `review_type: Content`, ardından gerekli teknik
doğrulama için `review_type: Technical`; iki kayıtta da
`review_domain: Assessment`.

Kontrol listesi:

1. Her soru veya görev en az bir öğrenme çıktısını gerçekten ölçer.
2. `V01-LO004`, yalnız doğru son çıktıyla değil ara durumlarla değerlendirilir.
3. Kısa sınav seçeneklerinde dilbilgisel veya biçimsel cevap ipucu bulunmaz.
4. Çeldiriciler gerçek yanlış zihinsel modellerden türetilmiştir.
5. Rubrik düzeyleri gözlenebilir davranışlarla ayrılır.
6. Başarı eşiği ve yeniden deneme politikası tutarlıdır.
7. Cevap anahtarı teknik olarak doğrudur.
8. AI Mentör bağımsız denemeden önce doğrudan cevap vermez.

Zorunlu kanıt: soru-outcome matrisi, cevap doğrulaması ve rubrik örnek puanlama.

### Erişilebilirlik incelemesi sözleşmesi

Review Standard karşılığı: `review_type: Content`,
`review_domain: Content`; reviewer rolü `Accessibility Reviewer` olur.

Kontrol listesi:

1. Diyagramların sıralı metin karşılığı vardır.
2. Tablolar başlık hücreleriyle anlamlandırılabilir.
3. Bilgi yalnız renk, hareket veya konumla aktarılmaz.
4. Üretilecek animasyonlar duraklatılabilir ve azaltılmış hareket seçeneği taşır.
5. Etkileşimler klavyeyle kullanılabilir ve görünür odak sunar.
6. Kod ve izleme tabloları ekran büyütmede yatay kayıp oluşturmadan erişilebilir.
7. Bağlantı metinleri hedefi bağlam dışında da açıklar.
8. Türkçe karakterler ve kod parçaları ekran okuyucuda ayırt edilebilir.

Gerçek web/SVG artefaktları üretilmeden görsel erişilebilirlik nihai olarak
onaylanamaz; bu tur belge gereksinimlerini onaylar.

### Repository ve final kapıları

Repository incelemesi şunları doğrular:

- ana ders adı `02-bilgisayarlar-programlari-nasil-calistirir.md` ve slug
  sözleşmesiyle uyumludur;
- kimlikler benzersiz ve iki yönlüdür;
- YAML, Markdown ve göreli bağlantılar geçerlidir;
- `V01-C02-CPP-001@1.0.1` kabul kanıtı eşlemesi kanonik `learning-outcomes.md`
  ve `assessment.md` kayıtlarıyla aynıdır;
- frozen Chapter Blueprint ve Knowledge Registry içindeki eski ters LO
  ilişkisi kontrollü metadata düzeltmesiyle kapatılmıştır;
- gerçek review kayıtları Review Standard şemasına uyar.

Final inceleme yalnız önceki kararlar `Approved`, öğrenci pilotunun başarı
ölçütleri karşılanmış ve açık `Critical`/`Major` bulgu kalmamışsa `Approved`
olabilir.

### Bulgu kayıt sözleşmesi

Her bulgu şu alanları taşır:

| Alan | Kural |
| --- | --- |
| Finding ID | Review kaydı içinde benzersiz |
| Severity | `Critical`, `Major`, `Minor` veya `Observation` |
| Status | Açık veya kanıtla kapatılmış |
| Evidence | Dosya, bölüm, satır veya çalıştırma çıktısı |
| Impact | Öğrenci, teknik doğruluk, ölçme veya yayın etkisi |
| Owner | Düzeltmeden sorumlu rol |
| Required Resolution | Yeniden doğrulanabilir bitiş koşulu |

## Validation

- Review Standard enum'ları yeniden tanımlanmadı.
- Bu belge review kararı veya sahte onay üretmez.
- Beş uzmanlık alanı ve nihai kapı için ölçülebilir kontrol listesi vardır.
- Her aşamanın girdisi, sahibi ve zorunlu kanıtı tanımlıdır.

## References

- [ASEA Review Standard](../../../../standards/governance/02-review-standard.md)
- [Chapter Standard v2](../../../../standards/chapter-standard-v2.md)
- [Curriculum Standard v2](../../../../standards/curriculum-standard-v2.md)
- [Öğrenci Pilot Protokolü](./student-pilot-protocol.md)
