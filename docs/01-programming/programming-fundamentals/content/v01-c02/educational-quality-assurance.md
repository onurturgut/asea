---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-023"
supporting_document_type: "Compatibility Report"
title: "V01-C02 Eğitimsel Kalite Güvencesi"
version: "0.2.2"
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
  - "../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md"
  - "./assessment-rubric.md"
  - "../../research/v01-c02/research-synthesis.md"
  - "../../../../../knowledge/reviews/v01-c02-lo-traceability-validation-report.md"
x-review-date: "2026-07-22"
x-review-method: "Automated validation and desk review"
---

# V01-C02 Eğitimsel Kalite Güvencesi

## Purpose

`V01-C02 — Bilgisayarlar Programları Nasıl Çalıştırır?` referans paketinin
öğrenme çıktısı, teknik doğruluk, değerlendirme, dil, pedagojik akış ve
erişilebilirlik açısından inceleme durumunu kaydetmek.

## Scope

İnceleme, `content/v01-c02/` altındaki 20 destek artefaktı ile
`chapters/02-bilgisayarlar-programlari-nasil-calistirir.md` ana dersini; toplam
21 Markdown artefaktını kapsar.
Araştırma, Bilgi Temeli, Blueprint, standartlar ve yönetişim belgeleri kapsam
dışıdır ve değiştirilmemiştir. Bu çalışma öğrenci pilotu veya bağımsız uzman
onayı değildir.

## Ownership

- İçerik ve pedagojik masa başı inceleme: Pedagojik İncelemeci
- Teknik onay: Konu Uzmanı İncelemeci
- Ölçme onayı: Değerlendirme İncelemecisi
- Erişilebilirlik onayı: Erişilebilirlik İncelemecisi
- `Stable` geçişi: Chapter Standard v2'de tanımlı inceleme sahipleri

## Content

### İnceleme kararı

| Karar alanı | Sonuç |
| --- | --- |
| Otomatik ve masa başı EQA | PASS |
| Referans paket üretim hazırlığı | Review Ready |
| Repository Owner üretim referansı onayı | APPROVED |
| `Stable` yayın onayı | BEKLİYOR |
| Yeni eğitim içeriği üretimi | Oluşturulmadı |

Paket, bağımsız incelemeye girebilecek bütünlüğe ulaşmıştır. `Stable` kararı,
gerçekleştirilmemiş insan incelemeleri ve öğrenci pilotu varmış gibi gösterilmez.

### Öğrenme çıktısı eşleşmesi

| Öğrenme Çıktısı | Öğretim Kanıtı | Uygulama Kanıtı | Ölçme Kanıtı | Sonuç |
| --- | --- | --- | --- | --- |
| `V01-LO003` | Ana dersin kaynak kod → yürütme yolu → durum → çıktı modeli | Alıştırmalar, laboratuvar model raporu, mülakat | Kısa sınav 1–15, 21–23, 25 ve rubrik | PASS |
| `V01-LO004` | Durum geçişi, PC ve kontrol akışı bölümleri | Adım izleri, hata ayıklama görevi ve üç laboratuvar senaryosu | Kısa sınav 16–20, 24–25 ve rubrik | PASS |

Ön koşul `V01-C01`, ders metadata'sında ve bölüm planında aynı kimlikle
çözülmektedir. Paket yeni öğrenme çıktısı veya yeni bölüm kimliği üretmez.

### Teknik doğruluk

- Kaynak kod, assembly, makine kodu, araç zinciri, ISA, süreç ve çalışma zamanı
  kavramları ayrı katmanlar olarak ele alınmıştır.
- Getir-çözümle-yürüt modeli, modern mikro mimarinin çevrim doğruluklu ve evrensel
  açıklaması olarak sunulmamıştır.
- Program sayacı, sanal adres ve bellek açıklamalarında gerçekleştirim sınırları
  belirtilmiştir.
- Ders içi makine açıkça soyut model olarak etiketlenmiştir.
- Çalıştırılabilir JavaScript örneği beklenen `PC=3`, `R2=12`, `output=[12]`
  son durumunu üretmiştir.

Masa başı teknik kontrol PASS'tir. Bağımsız Konu Uzmanı İncelemeci onayı hâlâ
`Stable` kapısının parçasıdır.

### Ölçme kalitesi

- Kısa sınav 25 sorudur; bilgi hatırlama, kavramsal açıklama, uygulama ve analiz
  düzeylerini birlikte ölçer.
- Çoktan seçmeli soruların doğru seçenek dağılımı A=4, B=3, C=4 ve D=4 olarak
  dengelenmiştir.
- Cevap anahtarı [ayrı bir değerlendirici belgesine](./quiz-answer-key.md)
  taşınmıştır.
- Uygulamalı başarı yalnız son çıktıyla değil, ara durumlar ve ilk sapma
  kanıtıyla ölçülür.
- Yansıtma soruları tek başına yeterlik kanıtı sayılmaz.

Yayın sistemi cevap anahtarı bağlantısını deneme teslim edilene kadar
gizlemelidir; Markdown deposu tek başına erişim denetimi sağlamaz.

### Pedagojik akış ve Bloom kapsamı

| Bloom Düzeyi | Paket İçindeki Kanıt |
| --- | --- |
| Hatırlama | Kavram özeti ve 30 aktif hatırlama kartı |
| Anlama | Zihinsel model, katman karşılaştırmaları ve kavram soruları |
| Uygulama | 15 kademeli alıştırma ve durum izleri |
| Analiz | İlk sapmayı bulma, hata katmanı ayırma ve dallanma inceleme |
| Değerlendirme | Mülakat savunması, rubrikle öz değerlendirme ve model sınırı tartışması |
| Oluşturma | Laboratuvar uygulaması ve `V01-P01` mini proje katkısı |

Akış, önce zihinsel model kurar; ardından örnek, rehberli uygulama, bağımsız
izleme, hata ayıklama ve aktarım görevlerine ilerler. 2,5 saatlik kanonik rota ile
6–9 saatlik ustalık rotası birbirinden ayrılmıştır.

### Dil ve terminoloji

- Eğitim anlatımı Türkçedir.
- Kod, API, talimat adları, dosya adları ve kanonik kimlikler İngilizce
  bırakılmıştır.
- Ana derste teknik terimler ilk anlamlı kullanımda Türkçe (English) biçiminde
  tanımlanmıştır.
- Öğrenciye dönük kavram özeti, okuma rehberi, kısa sınav, kartlar, mülakat ve
  değerlendirme anlatımındaki gereksiz İngilizce kullanımlar düzeltilmiştir.
- Chapter Standard'ın zorunlu H2 adları ve metadata enum değerleri kanonik
  sözleşme gereği İngilizce korunmuştur.

### Erişilebilirlik ve gezinme

- Diyagram önerileri renk dışında metin ve etiket taşımayı zorunlu kılar.
- Animasyonlar için duraklatma ve azaltılmış hareket alternatifi tanımlanmıştır.
- Etkileşimli modeller için klavye kullanımı ve statik alternatif istenmiştir.
- Öğrenci, [bölüm dizininden](./chapter.md) ana ders, örnek, alıştırma,
  laboratuvar, değerlendirme ve AI Mentör belgelerine göreli bağlantılarla
  ulaşabilir.

Üretilecek gerçek SVG, animasyon ve web arayüzü ayrıca erişilebilirlik
incelemesinden geçmelidir.

### Giderilen bulgular

1. Çoktan seçmeli cevapların tek seçenekte kümelenmesi giderildi.
2. Cevap ve açıklamaların öğrenci soru formunda doğrudan görünmesi giderildi.
3. `Assembly dili`, `yazmaç`, `durum`, `izleme`, `çalışma zamanı` ve benzeri
   terimlerde Türkçe anlatım tutarlılığı güçlendirildi.
4. Öğrenme çıktısı → ders → uygulama → değerlendirme matrisi doğrulandı.
5. Ana paket için kırık göreli bağlantı, yer tutucu ve boş zorunlu bölüm
   bulunmadı.
6. Üretim paketi `1.0.1` sürümüne çıkarıldı; trace kanıtı `V01-LO004`, yürütme
   modeli açıklaması `V01-LO003` ile eşlendi.
7. Ana ders, Chapter Standard v2 ile uyumlu
   `02-bilgisayarlar-programlari-nasil-calistirir.md` adına taşındı ve bütün
   göreli bağlantılar güncellendi.
8. Bağımsız inceleme ve öğrenci pilotunun kapsam, sahip, kanıt ve başarı
   ölçütleri ayrı uygulama planlarında tanımlandı.
9. Frozen Chapter Blueprint ile operasyonel ve türetilmiş Knowledge Registry
   kayıtlarındaki ters `V01-LO003`/`V01-LO004` ilişkisi kontrollü PATCH
   düzeltmesiyle kapatıldı; 11/11 semantik doğrulama PASS verdi.

### Açık yayın kapıları

| Kimlik | Konu | Etki | Gerekli İşlem |
| --- | --- | --- | --- |
| `EQA-OPEN-01` | Öğrenci pilotu yapılmadı. | Süre, bilişsel yük ve çeldirici güç gerçek veriye dayanmıyor. | En az bir başlangıç seviyesi öğrenci grubuyla pilot ve bulgu kaydı. |
| `EQA-OPEN-02` | Bağımsız teknik, pedagojik, ölçme ve erişilebilirlik onayları yapılmadı. | `Stable` yaşam döngüsü kapısı tamamlanmadı. | Yetkili incelemecilerin kayıtlı kararları. |
| `EQA-OPEN-03` | Cevap anahtarı depo içinde bağlantıyla erişilebilir. | Web yayını deneme öncesi cevabı açığa çıkarabilir. | Yayın katmanında rol/deneme durumuna bağlı görünürlük uygulanmalı. |

Bu açık maddeler yeni ders üretimini değil, `Stable` yayın onayını engeller.

## Validation

| Kontrol | Sonuç |
| --- | --- |
| Learning Outcome kapsamı | PASS — 2/2 |
| Ön koşul zinciri | PASS |
| Teknik masa başı kontrol | PASS |
| Bloom kapsamı | PASS — 6/6 düzey |
| Çoktan seçmeli dağılım | PASS — 4/3/4/4 |
| Markdown lint | PASS — 0 sorun |
| YAML Front Matter ayrıştırma | PASS — 21/21 |
| Göreli bağlantılar | PASS — 0 kırık |
| Zorunlu H2 sözleşmeleri | PASS |
| Çalıştırılabilir örnek | PASS |
| Yer tutucu taraması | PASS — 0 |
| Knowledge validator | PASS |
| LO003–LO004 semantik izlenebilirlik | PASS — 11/11 |
| Kanonik chapter yolu ve slug | PASS |
| Bağımsız insan incelemesi | BEKLİYOR |
| Öğrenci pilotu | BEKLİYOR |

Nihai EQA kararı: `Review Ready`. `Stable` yayın kararı henüz verilmemiştir.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Bölüm Dizini](./chapter.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Kısa Sınav](./quiz.md)
- [Araştırma Sentezi](../../research/v01-c02/research-synthesis.md)
- [Öğrenme Çıktısı Kanıt Haritası](../../research/v01-c02/learning-outcome-evidence-map.md)
- [Üretim Paketi](../../../../../knowledge/production-packets/v01-c02-cpp-001.json)
- [LO İzlenebilirlik Doğrulama Raporu](../../../../../knowledge/reviews/v01-c02-lo-traceability-validation-report.md)
- [Bağımsız İnceleme Hazırlık Planı](./review-readiness-plan.md)
- [Öğrenci Pilot Protokolü](./student-pilot-protocol.md)
- [Chapter Standard v2](../../../../standards/chapter-standard-v2.md)
