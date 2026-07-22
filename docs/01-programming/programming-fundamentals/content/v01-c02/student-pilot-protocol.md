---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-STUDY-004"
supporting_document_type: "Study Plan"
title: "V01-C02 Öğrenci Pilot Protokolü"
version: "0.1.1"
status: "Draft"
scope_id: "V01-C02"
authority: "Informational"
owner_role: "Pedagogical Reviewer"
source_ids:
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
  - "V01-C02-AS01"
derived_from:
  - "./educational-quality-assurance.md"
  - "./reading-guide.md"
  - "./assessment-rubric.md"
---

# V01-C02 Öğrenci Pilot Protokolü

## Purpose

`V01-C02` dersinin başlangıç seviyesindeki gerçek öğrenciler tarafından dış
kaynağa bağımlı olmadan anlaşılabilir, tamamlanabilir ve ölçülebilir olup
olmadığını kontrollü biçimde sınamak.

## Scope

Pilot, ana ders, örnekler, alıştırmalar, kısa sınav ve laboratuvarı kapsar. AI
Mentör yalnız öğrencinin bağımsız denemesinden sonra kullanılabilir. Pilot,
gerçek incelemeci onayının yerine geçmez ve tamamlanmadan sonuç üretilmiş
sayılmaz.

## Ownership

- Pilot sahibi: Pedagogical Reviewer
- Katılımcı desteği ve zaman kaydı: Pilot Facilitator
- Teknik olay değerlendirmesi: Subject-Matter Reviewer
- Ölçme analizi: Assessment Reviewer
- Anonim veri saklama ve erişim: Repository Owner

İçeriği yazan kişi oturumu gözlemleyebilir; tek başına başarı kararı veremez.

## Content

### Katılımcı profili

- Hedef grup: 8 başlangıç seviyesinde öğrenci.
- Alt sınır: 5 tamamlanmış ve geçerli katılımcı kaydı.
- Katılımcı, değişken, fonksiyon veya CPU iç yapısını önceden bilmek zorunda
  değildir.
- Katılımcı temel dosya açma, tarayıcı kullanma ve terminalde verilen komutu
  çalıştırma becerisine sahip olmalıdır.
- Profesyonel yazılım geliştiriciler ana başlangıç grubu sonucuna katılmaz;
  ayrı karşılaştırma grubu olarak etiketlenebilir.

### Etik ve veri minimizasyonu

Pilot öncesinde amaç, süre, bırakma hakkı ve toplanan veri açıklanır. Gerçek ad,
e-posta, ekran kaydı veya özel kaynak kodu zorunlu değildir. Her öğrenciye
`P01`–`P08` biçiminde yerel katılımcı kodu atanır. Rapor yalnız toplulaştırılmış
sonuç yayımlar.

### Başlangıç ölçümü

Öğrenciye öğretim yapılmadan önce aşağıdaki dört görev verilir:

1. Program ile çalışan süreç arasındaki farkı kendi cümlesiyle açıklamak.
2. Kaynak koddan çalışan programa kadar bildiği katmanları sıralamak.
3. İki talimatlık basit bir durum izini tamamlamak.
4. Cevabına duyduğu güveni 1–5 arasında puanlamak.

Başlangıç ölçümü başarı/başarısızlık kapısı değildir; öğrenme kazancının taban
değeridir.

### Uygulama planı

| Aşama | Materyal | Hedef Süre | Toplanacak Kanıt |
| --- | --- | ---: | --- |
| 1 | Okuma rehberi ve ana ders | 80 dk | Bölüm süreleri, takılma noktaları, notlar |
| 2 | Çalışan örnek ve kavram özeti | 25 dk | Tahmin/çıktı karşılaştırması |
| 3 | Kademeli alıştırmalar | 35 dk | Tamamlama ve hata türleri |
| 4 | Kısa sınav | 30 dk | Ham cevap, puan, süre, soru güveni |
| 5 | Laboratuvar | 90 dk | Teslimatlar, test sonucu ve izler |
| 6 | Mülakat ve yansıtma örneklemi | 20 dk | Açıklama kalitesi ve öğrenci görüşü |

Oturumlar tek günde yapılmak zorunda değildir. Kanonik 2,5 saatlik rota ve
genişletilmiş ustalık çalışması ayrı süreler olarak raporlanır.

### Dış kaynak ve yardım kaydı

Öğrenci, takıldığı anda şu yardım düzeylerinden birini kaydeder:

| Kod | Yardım Düzeyi |
| --- | --- |
| `H0` | Yardım yok |
| `H1` | Ders içi bağlantıya geri döndü |
| `H2` | AI Mentörden ipucu aldı; doğrudan cevap almadı |
| `H3` | Kolaylaştırıcıdan yönlendirici soru aldı |
| `H4` | Repository dışı kaynağa ihtiyaç duydu |
| `H5` | Doğrudan çözüm veya cevap aldı |

ASEA'nın tek ana kaynak hedefi için `H4` ve `H5` olayları konu ve gerekçeyle
birlikte zorunlu bulgudur.

### Katılımcı veri şeması

Her katılımcı için aşağıdaki alanlar kaydedilir:

| Alan | Tür | Açıklama |
| --- | --- | --- |
| `participant_id` | `P01`–`P08` | Anonim katılımcı kodu |
| `experience_band` | kategori | Yeni başlayan veya sınırlı deneyim |
| `pre_score` | 0–100 | Başlangıç ölçümü |
| `post_score` | 0–100 | Aynı becerilerin farklı sorularla son ölçümü |
| `lo003_level` | 1–4 | Rubriğe göre açıklama yeterliği |
| `lo004_level` | 1–4 | Rubriğe göre izleme yeterliği |
| `quiz_score` | 0–100 | Kısa sınav sonucu |
| `lab_score` | 0–100 | Laboratuvar sonucu |
| `canonical_minutes` | sayı | Kanonik rota süresi |
| `mastery_minutes` | sayı | Ek ustalık çalışması süresi |
| `help_events` | kod listesi | `H0`–`H5` yardım olayları |
| `critical_misconceptions` | sayı | Pilot sonunda kalan kritik yanlış modeller |
| `completion_state` | kategori | Tamamladı, bıraktı veya teknik engel |

Ham cevaplar, puanı yeniden üretebilmek için katılımcı koduyla tutulur.

### Başarı ölçütleri

Pilot başarılı sayılmak için bütün koşullar karşılanmalıdır:

1. En az 5 geçerli katılımcı paketi tamamlar.
2. Tamamlayanların en az %80'i `V01-LO003` ve `V01-LO004` için ayrı ayrı en az
   `3 — Yetkin` düzeyine ulaşır.
3. Tamamlayanların kısa sınav ortalaması en az 80/100'dür.
4. Tamamlayanların laboratuvar ortalaması en az 80/100'dür.
5. Son ölçüm ortalaması başlangıç ölçümünden en az 20 puan yüksektir.
6. Pilot sonunda doğrulanmış kritik teknik yanlış anlama kalmaz.
7. Katılımcıların en az %80'i `H4` veya `H5` olmadan kanonik rotayı tamamlar.
8. Kanonik rota medyan süresi 120–180 dakika aralığındadır.
9. Aynı bölümde üç veya daha fazla katılımcının takılması ortak içerik bulgusu
   olarak açılır.

Küçük örneklem nedeniyle sonuç genellenebilir akademik araştırma olarak değil,
yayın öncesi kullanılabilirlik ve öğrenme sinyali olarak yorumlanır.

### Başarısızlık ve düzeltme kuralları

- Teknik yanlış anlama veya yanlış cevap anahtarı `Major` bulgudur.
- Bir öğrenme çıktısında %80 yetkinlik sağlanmaması `Major` bulgudur.
- Dış kaynak ihtiyacı aynı konuda iki katılımcıda görülürse açıklama veya örnek
  gözden geçirilir.
- Süre medyanı aralık dışındaysa okuma rehberi ve görev yükü yeniden tahmin
  edilir.
- Değişiklik sonrası yalnız etkilenen beceriler için en az 3 yeni katılımcıyla
  doğrulama turu yapılır.

### Pilot sonuç raporu

Sonuç raporu şunları içerir:

1. katılımcı sayısı ve profil dağılımı;
2. tamamlama ve bırakma oranı;
3. başlangıç/son ölçüm farkı;
4. LO003 ve LO004 yeterlik dağılımı;
5. kısa sınav ve laboratuvar istatistikleri;
6. süre dağılımı;
7. yardım ve dış kaynak olayları;
8. açık bulgular, sahipler ve yeniden test gereksinimleri;
9. `PASS`, `Changes Required` veya `Rejected` önerisi.

Bu protokol gerçek veri içermediği için şu anda pilot sonucu veya onay kararı
bulunmamaktadır.

## Validation

- Katılımcı profili ve asgari örneklem tanımlıdır.
- Öğrenme öncesi/sonrası ve outcome bazlı ölçümler tanımlıdır.
- Tek kaynak hedefi için dış yardım kaydı tanımlıdır.
- Başarı ölçütleri sayısal ve yeniden üretilebilirdir.
- Gizlilik için veri minimizasyonu uygulanır.
- Gerçekleştirilmemiş pilot için sonuç iddia edilmez.
- Kolaylaştırıcı ve katılımcı uygulama rehberleri protokol kapsamına bağlıdır.
- Pilot veri şeması, tanımlanan katılımcı alanlarını başlık düzeyinde kapsar.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Okuma Rehberi](./reading-guide.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Kısa Sınav](./quiz.md)
- [Laboratuvar](./lab.md)
- [Bağımsız İnceleme Hazırlık Planı](./review-readiness-plan.md)
- [Pilot Kolaylaştırıcı Uygulama Rehberi](./pilot/pilot-facilitator-runbook.md)
- [Pilot Katılımcı Rehberi](./pilot/pilot-participant-guide.md)
- [Pilot Veri Şeması](./pilot/pilot-results.csv)
