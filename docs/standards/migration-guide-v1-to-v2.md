---
document_type: "migration-guide"
migration_id: "ASEA-MIGRATION-001-002"
title: "ASEA Standards Migration Guide v1 to v2"
version: "1.0.0"
status: "Stable"
source_standard_major: 1
target_standard_major: 2
---

# ASEA Standards Migration Guide v1 to v2

Bu rehber, v1'e uygun ASEA artefact'larının v2 sözleşmesine kontrollü ve denetlenebilir geçişini açıklar. v1 dosyaları silinmez veya sessizce yeniden yorumlanmaz.

## 1. Migration Scope

Geçiş aşağıdaki değişiklik alanlarını kapsar:

- ortak Front Matter ve document type kaydı;
- kalıcı, makine tarafından okunabilir kimlikler;
- beş durumlu yaşam döngüsü;
- ayrı sürüm kapsamları;
- kesin dosya ve dizin adları;
- Blueprint ve Review kayıtları;
- outcome–Chapter–assessment traceability;
- Volume release ve Definition of Done kapıları.

Volume 01 veya başka bir Volume'un ders üretimi bu rehberin parçası değildir.

## 2. Compatibility Policy

- Dört v1 standardı tarihsel ve değişmez kaynak olarak korunur.
- Mevcut v1 artefact, migrate edilene kadar v1 standardına göre geçerlidir.
- v2 standartları v1 dosyalarını geriye dönük olarak geçersiz kılmaz.
- Bir dosyanın v2'ye geçirilmesi atomik olmalıdır: v1 ve v2 alanları aynı Front Matter içinde karıştırılmaz.
- Karma Volume döneminde manifest her artefact için uygulanan standard major sürümünü kaydetmelidir.
- v2 `Stable` Volume, kapsamındaki tüm kanonik artefact'ları v2'ye geçirmiş olmalıdır.

## 3. Breaking Changes

### 3.1 Common Metadata

- `document_type`, türe özgü ID, `version` ve ortak `status` zorunlu hale gelir.
- Boş string metadata ve serbest biçimli status değerleri kabul edilmez.
- Status seçenekleri `Draft`, `Review`, `Stable`, `Deprecated`, `Archived` ile sınırlıdır.
- Review sonucu ve Blueprint freeze bilgisi status alanından ayrılır.

### 3.2 Naming and Structure

- İçerik dosya ve dizinleri küçük harfli kebab-case olur.
- `README.md`, kök yönetişim adları ve `LICENSE` açık istisnadır.
- `release.md` ve `changelog.md` küçük harflidir.
- Volume'a `chapter-blueprints/`, `assessments/`, `reviews/`, `references/` ve `assets/` dahil zorunlu yapı eklenir.

### 3.3 Traceability and Release

- Learning Outcome ilişkileri iki yönlü ve ID tabanlı olur.
- Assessment artefact'ları ayrı şemalara uyar.
- Blueprint freeze, dört Review türü, manifest ve release kaydı Stable için zorunlu hale gelir.
- Definition of Done yalnızca Volume Standard v2.0'daki kanonik listeyle değerlendirilir.

## 4. Front Matter Field Mapping

### 4.1 Chapter

| v1 alanı | v2 alanı | Dönüşüm |
|---|---|---|
| Yok | `document_type` | `chapter` eklenir |
| Yok | `chapter_id` | `volume` ve `chapter` değerlerinden `V{NN}-C{NN}` üretilir |
| `volume` | `volume_id` | `00` → `V00` |
| `chapter` | `chapter_id` içinde | `01` → `V00-C01`; ayrı alan kaldırılır |
| `title` | `title` | Korunur |
| `slug` | `slug` | Küçük harfli kebab-case doğrulanır |
| Yok | `version` | Migrasyon kararına göre SemVer atanır |
| `status` | `status` | Kanonik enum'a eşlenir |
| `difficulty` | `difficulty` | Korunur ve enum doğrulanır |
| `estimated_time` | `estimated_time` | Korunur |
| `prerequisites` | `prerequisites` | Serbest metin yerine mümkün olduğunda ID kullanılır |
| `learning_objectives` | `learning_outcomes` | Outcome kayıtları oluşturulur ve ID listesine dönüştürülür |
| Yok | `related_lab_ids` | Traceability matrisinden eklenir |
| Yok | `related_assessment_ids` | Traceability matrisinden eklenir |
| Yok | `next_chapter_id` | Chapter map'ten eklenir |

### 4.2 Volume README

| v1 alanı | v2 alanı | Dönüşüm |
|---|---|---|
| Yok | `document_type` | `volume` eklenir |
| `volume` | `volume_id` | `01` → `V01` |
| `title` | `title` | Korunur |
| Yok | `slug` | Dizin adından türetilip doğrulanır |
| Yok | `version` | SemVer atanır |
| `level` | `level_start`, `level_target` | Başlangıç ve hedef ayrı değer olarak kaydedilir |
| `estimated_duration` | `estimated_duration` | Korunur |
| `estimated_hours` | `estimated_hours` | Pozitif tam sayı doğrulanır |
| `status` | `status` | Kanonik enum'a eşlenir |
| `prerequisites` | `prerequisite_volumes` | Volume ID listesine dönüştürülür |
| `learning_outcomes` | `learning_outcomes` | Metinler kanonik Outcome ID'lerine dönüştürülür |
| Yok | `blueprint_id` | Onaylı Volume Blueprint ID'si eklenir |

## 5. Status Mapping

| v1/yürütme ifadesi | v2 `status` | Ayrı kayıt |
|---|---|---|
| Taslak / Not Started / In Progress | `Draft` | İlerleme proje takibinde tutulur |
| Technical Review / Content Review / Repository Review / Final Review | `Review` | `review_type` Review belgesine yazılır |
| Approved / Released | `Stable` | Karar Review, yayın Release belgesine yazılır |
| Kullanımdan kaldırılıyor | `Deprecated` | Ardıl belge bağlantısı verilir |
| Tarihsel | `Archived` | Değişmez arşiv kaydı tutulur |

## 6. Version Migration

- v1'deki `v0.1`, `v0.5`, `v0.9`, `v1.0` ifadeleri Front Matter'a sırasıyla geçerli SemVer olarak `0.1.0`, `0.5.0`, `0.9.0`, `1.0.0` yazılır.
- Sürüm yalnızca ilerleme etiketi değildir; sözleşme değişikliğinin büyüklüğünü ifade eder.
- Repository, Volume, Blueprint, Release ve tek belge sürümleri ayrı kaydedilir.
- Tag yalnızca yayın sırasında oluşturulur; Front Matter `version` değerine `v` eklenmez.
- v2 şema değişikliği tüketiciyi kırıyorsa migrate edilen belgenin MAJOR sürümü artırılır.

## 7. Heading Migration

- Chapter'ın v1'deki 15 H2 başlığı korunur ve standart sıraya getirilir.
- Production Workflow kaynaklı ek H2'ler, anlamına uygun zorunlu H2 altında H3'e taşınır.
- İçerik kısaltılmaz, anlamı değiştirilmez ve başlık taşıma sırasında kaynak bağlantıları korunur.
- Volume README'nin 12 zorunlu H2'si standart sıraya getirilir.
- Blueprint'ler Volume Standard v2.0'daki 13 H2 sözleşmesine geçirilir.
- Başlık taşımak anchor değiştirecekse tüm göreli bağlantılar aynı migrasyonda güncellenir.

## 8. ID Allocation

1. Mevcut Volume ve Chapter sıra numaraları dondurulur.
2. Repository genelindeki mevcut kimlik ve sıra listesi çıkarılır.
3. Repository Standard v2.0 biçiminde ID'ler ayrılır.
4. Silinmiş veya çakışan sıra numaraları yeniden kullanılmaz.
5. Dosya adları küçük harfli sözleşmeye geçirilirken içerideki büyük harfli ID korunur.
6. Bağlantılar ve traceability matrix yeni ID'lerle iki yönlü güncellenir.

## 9. Migration Procedure

Her Volume için şu sıra izlenir:

1. **Inventory:** Dosya, dizin, Front Matter, link ve mevcut ID envanteri alınır.
2. **Baseline:** v1 doğrulama sonucu ve dosya checksum'ları kaydedilir.
3. **Blueprint:** Volume ve Chapter Blueprint'leri v2 şemasına geçirilip review edilir.
4. **Structure:** Zorunlu dosya ve dizinler planlı biçimde oluşturulur; içerikler kanonik konumlarına taşınır.
5. **Identifiers:** Kimlikler ayrılır, çakışmalar çözülür ve manifest taslağı hazırlanır.
6. **Metadata:** Her artefact kendi v2 Front Matter şemasına atomik olarak geçirilir.
7. **Headings:** Zorunlu H2 sırası ve H3 genişletme kuralları uygulanır.
8. **Traceability:** Outcome, Chapter, Lab, Assessment ve Project bağları iki yönlü kurulur.
9. **Validation:** Repository Standard v2.0'daki 12 aşamalı doğrulama çalıştırılır.
10. **Review:** Technical, Content, Repository ve Final Review bulguları kapatılır.
11. **Release:** Manifest, release kaydı, changelog ve tag hazırlanır.

Her adım ayrı, gözden geçirilebilir değişiklik olarak tutulmalıdır. İçerik taşıma ile anlam değişikliği aynı değişiklikte birleştirilmemelidir.

## 10. Files Affected

Tipik bir tam Volume migrasyonu şunları etkiler:

- Volume `README.md` ve destekleyici kök dosyaları;
- `volume-blueprint.md` ve `chapter-blueprints/`;
- `chapters/`, `labs/`, `projects/`, `assessments/` içindeki yönetilen belgeler;
- `learning-outcomes.md`, `chapter-map.md`, `dependency-map.md` ve `assessment.md`;
- `reviews/`, `release.md`, `changelog.md` ve manifest kaydı;
- yeniden adlandırma nedeniyle bu dosyalara giden göreli bağlantılar.

Kök yönetişim dosyaları yalnızca gerçekten v2 sözleşmesine bağlanmaları gerekiyorsa ayrı kapsamda güncellenir.

## 11. Rollback and Auditability

- Migrasyon öncesi checksum ve envanter korunur.
- Yeniden adlandırmalar içerik değişikliklerinden ayrı kaydedilir.
- Başarısız migrasyon v1 artefact'ı değiştirmeden geri alınabilmelidir.
- v1 dosya silinmez; yerini v2 dosya alıyorsa geçmiş ve yönlendirme korunur.
- Her manuel istisna Review bulgusu ve gerekçesiyle kaydedilir; v2 `Stable` için normatif kurallara istisna verilemez.

## 12. Migration Completion Criteria

Bir artefact migrasyonu şu koşullarda tamamlanır:

- yalnızca v2 şemasını kullanır;
- geçerli ve benzersiz ID taşır;
- link, başlık, status ve version kontrollerini geçer;
- gerekli traceability ilişkileri iki yönlüdür;
- önceki içeriğin anlamı ve kaynakları korunmuştur;
- manifestte v2 artefact olarak kayıtlıdır.

Bir Volume migrasyonu ancak Volume Standard v2.0 Definition of Done koşulları bütünüyle sağlandığında tamamlanır.

## 13. References

- [Standards Index v2.0](./standards-index-v2.md)
- [Repository Standard v2.0](./repository-standard-v2.md)
- [Curriculum Standard v2.0](./curriculum-standard-v2.md)
- [Volume Standard v2.0](./volume-standard-v2.md)
- [Chapter Standard v2.0](./chapter-standard-v2.md)
- [Chapter Standard v1.0](./chapter-standard-v1.md)
- [Curriculum Standard v1.0](./curriculum-standard-v1.md)
- [Volume Standard v1.0](./volume-standard-v1.md)
- [Repository Standard v1.0](./repository-standard-v1.md)
