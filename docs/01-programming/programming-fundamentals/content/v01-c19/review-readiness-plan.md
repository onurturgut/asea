---
document_type: "supporting-document"
supporting_document_id: "V01-C19-SD-RVIDX-001"
supporting_document_type: "Review Index"
title: "V01-C19 Bağımsız İnceleme Hazırlık Planı"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C19"
authority: "Informational"
owner_role: "Repository Reviewer"
source_ids:
  - "V01-C19"
  - "V01-C19-BP01"
  - "V01-C19-AS01"
  - "ASEA-STD-TEACHING-001"
derived_from:
  - "./continuity-and-teaching-plan.md"
  - "../../review/v01-c19/validation-report.md"
  - "../../../../standards/governance/02-review-standard.md"
---

# V01-C19 Bağımsız İnceleme Hazırlık Planı

## Purpose

`V01-C19` pilot paketinin teknik, pedagojik, ölçme, erişilebilirlik,
repository ve öğrenci-pilotu kapılarını tanımlamak.

Bu belge hazırlık planıdır. İnceleme kararı, reviewer ataması veya yayın onayı
üretmez. AI destekli masa başı doğrulaması bağımsız uzman ve gerçek öğrenci
kanıtının yerine geçmez.

## Scope

İnceleme kapsamı:

- `V01-C19@0.2.0` ana ders;
- `V01-C19-BP01@0.2.0` Chapter Blueprint;
- 20 dosyalık C19 öğrenme paketi;
- C18 → C19 → C20 devamlılık sözleşmesi;
- `V01-LO029` ve `V01-LO030` değerlendirme kanıtları;
- `V01-P05` proje artışı;
- otomatik validation çıktılarıdır.

Gerçek web arayüzü, tamamlanmış SVG/animasyonlar, öğrenci analitiği ve Stable
yayın bu kapsamda değildir.

## Ownership

- Koordinasyon: Repository Reviewer
- Teknik doğruluk: Subject-Matter Reviewer
- Pedagoji ve Türkçe anlatım: Pedagogical Reviewer
- Ölçme: Assessment Reviewer
- Erişilebilirlik: Accessibility Reviewer
- Öğrenci pilotu: Learning Researcher
- Nihai karar: içerik üretiminden bağımsız Final Reviewer

Yazar veya AI sistem kendi içeriğini Final gate'te tek başına onaylayamaz.

## Content

### Kilitlenecek girdiler

| Girdi | Sürüm | Konum |
|---|---:|---|
| Ana ders | `V01-C19@0.2.0` | [C19 Chapter](../../../chapters/19-ozyineleme-ve-ozyinelemeli-dusunme.md) |
| Chapter Blueprint | `V01-C19-BP01@0.2.0` | [C19 Blueprint](../../../chapter-blueprints/19-recursion-and-recursive-thinking.md) |
| Öğretim planı | `V01-C19-TP01@0.1.0` | [Devamlılık Planı](./continuity-and-teaching-plan.md) |
| Çalışma rehberi | `V01-C19-CG01@0.2.0` | [Çalışma Rehberi](./chapter.md) |
| Değerlendirme rubriği | `V01-C19-AR01@0.2.0` | [Rubrik](./assessment-rubric.md) |
| Validation raporu | `V01-C19-VR001@0.1.0` | [Validation Report](../../review/v01-c19/validation-report.md) |

İnceleme başladığında bir girdi değişirse karar yeni sürüm için yeniden
üretilmelidir.

### İnceleme sırası

```text
Otomatik validation
-> teknik içerik incelemesi
-> pedagojik ve dil incelemesi
-> assessment incelemesi
-> erişilebilirlik incelemesi
-> repository incelemesi
-> başlangıç öğrencisi pilotu
-> düzeltme ve yeniden validation
-> bağımsız Final review
```

### Planlanan review kayıtları

| Sıra | Planlanan ID | Review Type | Domain | Bağımsız rol |
|---:|---|---|---|---|
| 1 | `V01-RV048` | Technical | Validation | Repository Reviewer |
| 2 | `V01-RV049` | Technical | Content | Subject-Matter Reviewer |
| 3 | `V01-RV050` | Content | Content | Pedagogical Reviewer |
| 4 | `V01-RV051` | Content | Assessment | Assessment Reviewer |
| 5 | `V01-RV052` | Technical | Assessment | Subject-Matter Reviewer |
| 6 | `V01-RV053` | Content | Content | Accessibility Reviewer |
| 7 | `V01-RV054` | Repository | Content | Repository Reviewer |
| 8 | `V01-RV055` | Final | Content | Final Reviewer |

ID'ler rezervasyon değildir. Kayıt oluşturulmadan hemen önce repository
genelinde benzersizlik yeniden kontrol edilmelidir.

### Teknik inceleme kontrolü

1. Recursion, base case, recursive case ve progress measure ayrımları doğru.
2. Call stack/frame açıklamaları JavaScript davranışını yanlış genellemiyor.
3. Her örneğin beklenen çıktısı ve ara dönüşleri doğru.
4. `number`, string, array, object, `const` ve `let` açıklamaları doğru.
5. JavaScript'te ayrı `int` türü varmış gibi anlatım yapılmıyor.
6. Sonlanma ile doğruluk ayrı kanıt olarak ele alınıyor.
7. Recursive ve iteratif trade-off bağlama göre açıklanıyor.
8. Stack derinliği için sabit evrensel limit iddiası yapılmıyor.

### Pedagojik ve dil incelemesi kontrolü

1. Chapter tanımdan önce C18'den gelen gerçek ihtiyaçla açılıyor.
2. İlk örnek yalnız çağrı ve base case yükünü taşıyor.
3. Sonuç birleştirme ikinci örnekte ekleniyor.
4. Değişkenlerin anlam, ad, başlangıç, tür ve alternatif kararları görünür.
5. Birlikte yapalım, Şimdi sen dene, Hata avı, bağımsız uygulama ve proje bağı
   eksiksiz.
6. Öğretmen sesi doğal; metin dokümantasyon veya madde yığınına dönüşmüyor.
7. Benzetmelerin teknik sınırı açıklanıyor.
8. Uzunluk dört oturum ve anlamlı duraklarla yönetilebiliyor.
9. C20'ye devredilecek yeterlik ve proje verisi açık.

### Assessment incelemesi kontrolü

1. Quiz soruları `V01-LO029` veya `V01-LO030` kanıtı üretiyor.
2. Doğru sonuç kadar gerekçe de puanlanıyor.
3. Kritik sorular ayrı başarı kapısı taşıyor.
4. Cevap anahtarı yalnız cevabı değil yanlış zihinsel modeli açıklıyor.
5. Lab en az bir tam call trace ve her branch için progress kanıtı istiyor.
6. Tam çözüm kullanımı bağımsız kanıt olarak sayılmıyor.
7. Mülakat tanım ezberi yerine izleme ve karar gerekçesi istiyor.
8. Rubrik düzeyleri gözlenebilir davranışlarla ayrılıyor.

### Erişilebilirlik incelemesi kontrolü

1. Bütün planlanan görsellerin tablo/metin alternatifi var.
2. Bilgi yalnız renkle aktarılmıyor.
3. Animasyon durdurulabilir ve adımlanabilir.
4. Reduced-motion desteği tanımlı.
5. Frame kartları klavye ve ekran okuyucu akışına uygun.
6. Uzun tablolar dar ekranda anlam kaybetmeden sunulabilir.

### Öğrenci pilotu

Pilot en az:

- programlamaya yeni başlayan Türk öğrencileri;
- ön koşul tanı puanını;
- oturum başına gerçek süreyi;
- ipucu seviyesini;
- call trace doğruluğunu;
- gecikmeli geri çağırmayı;
- öğrenci diliyle açıklama örneklerini

kaydetmelidir.

Sentetik öğrenci yanıtı gerçek pilot kanıtı sayılmaz.

## Validation

- Plan Review Standard enum'larını değiştirmez.
- Gerçek reviewer veya karar uydurmaz.
- Öğretme Standardı v1.0 kapılarını ayrı ölçülebilir maddelere dönüştürür.
- Teknik, pedagojik, assessment, erişilebilirlik ve pilot kapsamı ayrıdır.

## References

- [ASEA Teaching and Continuity Standard](../../../../standards/teaching-and-continuity-standard-v1.md)
- [ASEA Review Standard](../../../../standards/governance/02-review-standard.md)
- [ASEA Validation Standard](../../../../standards/governance/08-validation-standard.md)
- [C19 Validation Report](../../review/v01-c19/validation-report.md)
