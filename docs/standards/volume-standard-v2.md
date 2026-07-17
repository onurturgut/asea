---
document_type: "standard"
standard_id: "ASEA-STD-VOLUME-002"
title: "ASEA Volume Standard v2.0"
version: "2.0.0"
status: "Stable"
supersedes: "volume-standard-v1.md"
---

# ASEA Volume Standard v2.0

Bu standart, her ASEA Volume'unun paketleme, Blueprint, yayın ve Definition of Done sözleşmesini tanımlar. Ortak repository kuralları [Repository Standard v2.0](./repository-standard-v2.md), öğrenme ilişkileri [Curriculum Standard v2.0](./curriculum-standard-v2.md), Chapter yapısı [Chapter Standard v2.0](./chapter-standard-v2.md) tarafından yönetilir.

## 1. Purpose

Her Volume belirli bir uzmanlık alanını sistematik olarak öğretmeli; açık ön koşullara, ölçülebilir sonuçlara, uygulama ve assessment kanıtlarına sahip olmalıdır. Volume önceki öğrenme üzerine inşa edilmeli, sonraki Volume için doğrulanmış temel oluşturmalıdır.

## 2. Volume Front Matter Schema

Her Volume `README.md` dosyası şu şemayı kullanır:

```yaml
---
document_type: "volume"
volume_id: "V01"
title: "Example Volume"
slug: "example-volume"
version: "1.0.0"
status: "Draft"
level_start: "Beginner"
level_target: "Intermediate"
estimated_duration: "12 weeks"
estimated_hours: 120
prerequisite_volumes:
  - "V00"
learning_outcomes:
  - "V01-LO001"
blueprint_id: "V01-BP01"
---
```

### 2.1 Field Rules

- `volume_id`, dizin numarasıyla eşleşmelidir.
- `slug`, Volume dizinindeki slug ile aynı olmalıdır.
- `level_start` ve `level_target` ayrı ayrı `Beginner`, `Intermediate` veya `Advanced` olabilir; birleşik seviye metni kullanılmaz.
- `estimated_hours` pozitif tam sayıdır; `estimated_duration` insan tarafından okunabilir planlama değeridir.
- `prerequisite_volumes` yalnızca doğrudan bağımlılıkları içerir; ön koşul yoksa boş dizidir.
- `learning_outcomes` en az bir geçerli Volume outcome ID içerir.
- `blueprint_id`, kanonik Volume Blueprint kimliğini gösterir.

## 3. Required Volume Structure

Her Volume aşağıdaki yapıya sahip olmalıdır:

```text
{NN}-{volume-slug}/
├── README.md
├── volume-blueprint.md
├── roadmap.md
├── learning-outcomes.md
├── chapter-map.md
├── module-map.md
├── dependency-map.md
├── labs.md
├── projects.md
├── assessment.md
├── study-plan.md
├── references.md
├── glossary.md
├── manifest.md
├── release.md
├── changelog.md
├── chapters/
├── chapter-blueprints/
├── labs/
├── projects/
├── assessments/
├── reviews/
├── references/
└── assets/
```

### 3.1 Directory Responsibilities

| Dizin | Kanonik içerik |
|---|---|
| `chapters/` | Öğretim Chapter dosyaları |
| `chapter-blueprints/` | Chapter üretim planları ve kapsam sözleşmeleri |
| `labs/` | Uygulamalı Lab dosyaları |
| `projects/` | Mini Project ve Capstone dosyaları |
| `assessments/` | Quiz, Challenge, Exercise, Interview ve Assessment kayıtları |
| `reviews/` | Technical, Content, Repository ve Final Review kayıtları |
| `references/` | Volume'a özel yardımcı kaynak kayıtları; kanonik liste `references.md` |
| `assets/` | Volume'a özel görsel ve indirilebilir dosyalar |

Zorunlu dizinler boş kalamaz; üretim başlamadıysa repository'ye yalnızca boş dizin eklemek yerine Blueprint içinde planlanır. Bir içerik türü başka dizine kopyalanamaz; indeks dosyaları kanonik dosyalara bağlantı verir.

## 4. Volume README Contract

`README.md`, Front Matter ve tek H1'den sonra şu H2 başlıklarını aynı sırada taşır:

1. `Volume Overview`
2. `Purpose`
3. `Learning Outcomes`
4. `Skills Acquired`
5. `Estimated Duration`
6. `Prerequisites`
7. `Chapter List`
8. `Lab Structure`
9. `Project Structure`
10. `Assessment`
11. `Completion Criteria`
12. `References`

H2 adları değiştirilemez. Konuya özgü H3 başlıkları ilgili H2 altında eklenebilir. Liste ve süreler, ilgili kanonik harita ve Front Matter değerleriyle uyuşmalıdır.

## 5. Supporting File Contracts

- `roadmap.md`: Öğrenme sırası, kilometre taşları ve geçiş kapıları.
- `learning-outcomes.md`: Curriculum Standard v2.0 Outcome kayıtları.
- `chapter-map.md`: Chapter ID, ad, zorluk, süre, outcome, ön koşul, Lab, Project ve sonraki Chapter ilişkileri.
- `module-map.md`: Chapter'ların modül grupları ve modül amaçları.
- `dependency-map.md`: Volume, Module, Chapter ve outcome bağımlılıklarının döngüsüz grafiği.
- `labs.md`: Lab indeksini, kapsamını ve Chapter eşlemesini içerir.
- `projects.md`: En az üç Mini Project ve bir Capstone planını ve bağlantılarını içerir.
- `assessment.md`: Assessment stratejisi ve kanonik traceability matrix'i içerir.
- `study-plan.md`: Önerilen haftalık sıra, süre ve review noktalarını içerir.
- `references.md`: Kullanılan standart, dokümantasyon, kitap ve araştırmaları kategorize eder.
- `glossary.md`: Volume'da kullanılan terimlerin tutarlı Türkçe/İngilizce karşılığını tanımlar.
- `manifest.md`: Repository Standard v2.0 Manifest şemasını kullanır ve yayın kapsamındaki kanonik artefact'ları listeler.
- `release.md`: Repository Standard v2.0 Release şemasını kullanır.
- `changelog.md`: Sürümler arasındaki kullanıcıya etkili değişiklikleri kaydeder.

## 6. Blueprint Standard

Blueprint içerik değildir; üretim kapsamı, bağımlılık, kabul ölçütü ve izlenebilirlik sözleşmesidir. Volume ve Chapter Blueprint türleri desteklenir.

### 6.1 Blueprint Front Matter Schema

```yaml
---
document_type: "blueprint"
blueprint_id: "V01-BP01"
blueprint_type: "Volume"
scope_id: "V01"
title: "Volume 01 Blueprint"
version: "1.0.0"
status: "Draft"
freeze_status: "Unfrozen"
owner_role: "Curriculum Architect"
prerequisites:
  - "V00"
learning_outcomes:
  - "V01-LO001"
planned_artifacts:
  - "V01-C01"
review_ids: []
---
```

- `blueprint_type` yalnızca `Volume` veya `Chapter` olabilir.
- Volume Blueprint kimliği `V{NN}-BP{NN}`, Chapter Blueprint kimliği `V{NN}-C{NN}-BP{NN}` biçimindedir.
- `scope_id`, Blueprint türüne göre Volume veya Chapter ID olmalıdır.
- `freeze_status` yalnızca `Unfrozen` veya `Frozen` olabilir ve ortak `status` alanından bağımsızdır.
- `planned_artifacts` üretilecek kimliklerin eksiksiz listesidir.
- `review_ids`, Blueprint kararlarını veren Review kayıtlarını içerir.

### 6.2 Mandatory Blueprint Sections

Her Blueprint şu H2 başlıklarını aynı sırada içerir:

1. `Purpose`
2. `Scope`
3. `Audience and Level`
4. `Prerequisites`
5. `Learning Outcomes`
6. `Content Map`
7. `Practice and Assessment Map`
8. `Dependencies`
9. `Traceability`
10. `Acceptance Criteria`
11. `Risks and Constraints`
12. `Review and Freeze`
13. `References`

Volume Blueprint, modül ve Chapter haritasını; Chapter Blueprint, kavram, örnek, exercise ve assessment ayrıntılarını H3 düzeyinde genişletebilir.

### 6.3 Blueprint Lifecycle

```text
Draft/Unfrozen -> Review/Unfrozen -> Stable/Frozen
```

- Üretim planı `Draft/Unfrozen` durumunda değiştirilebilir.
- `Review/Unfrozen`, kapsam ve traceability incelemesidir.
- Onaylı Blueprint `Stable/Frozen` olur.
- Frozen Blueprint kapsamını etkileyen değişiklik, Blueprint MINOR veya MAJOR sürümünü artırır, `Draft/Unfrozen` durumunda yeni review döngüsü açar.
- Yazım düzeltmesi kapsamı değiştirmiyorsa PATCH sürümüyle ve kayıtlı review kararıyla uygulanabilir.
- Blueprint sürümü, Volume ve Chapter içerik sürümlerinden bağımsızdır.

### 6.4 Blueprint Validation

- Kapsamdaki tüm artefact'lar geçerli ve ayrılmış kimlik taşır.
- Her outcome en az bir Chapter ve Assessment ile eşleşir.
- Ön koşullar mevcut, önce öğretilmiş ve döngüsüzdür.
- Süre, zorluk ve üretim büyüklüğü birbiriyle tutarlıdır.
- Capstone kapsamı öğretilmiş teknoloji kapısını geçer.
- Acceptance Criteria ölçülebilir ve Review kararına elverişlidir.
- Planlanan dosya yolları naming standardına uyar.
- Açık kritik risk veya çözülmemiş kapsam sorusu varken Blueprint `Frozen` olamaz.

## 7. Chapter Map and Dependency Rules

Her Chapter kaydı şu bilgileri içerir:

- Chapter ID ve adı
- Difficulty ve estimated time
- Learning Outcome ID'leri
- Prerequisite ID'leri
- Related Lab ve Assessment ID'leri
- Related Project veya Capstone ID'si
- Related Next Chapter ID'si

Harita ile Chapter Front Matter arasında uyuşmazlık hata sayılır. Dependency map, Chapter map'in ilişkilerini grafik olarak gösterebilir ancak yeni bir ilişki kaynağı oluşturmaz.

## 8. Labs, Projects, and Assessment Packaging

- Her Chapter en az bir uygulamalı kanıta bağlanmalıdır; bu Lab, Challenge veya kapsamı yeterli bir Project olabilir.
- Her Volume en az üç Mini Project ve bir Capstone içerir.
- Assessment türlerinin rolleri ve şemaları Curriculum Standard v2.0 tarafından yönetilir.
- İndeks dosyaları kimlik, başlık, outcome, zorluk, süre ve göreli bağlantı sunar.
- Cevap ve çözüm materyalleri öğrenci görevinden ayrı tutulur; erişim politikası assessment belgesinde belirtilir.

## 9. Capstone Standard

Capstone, Volume düzeyi bütünleştirici yeterlik kanıtıdır.

### 9.1 Scope Gate

- Zorunlu teknoloji ve teknikler aynı Volume'da veya açık prerequisite Volume'larında öğretilmiş olmalıdır.
- `allowed_technologies` listesindeki her öğe en az bir Chapter ve outcome ile izlenebilir olmalıdır.
- Henüz öğretilmeyen teknoloji zorunlu feature, teknik gereksinim veya değerlendirme ölçütü olamaz.
- İsteğe bağlı keşifler Bonus olarak ayrılır ve temel passing score'u etkilemez.
- Veri kalıcılığı, dağıtım, bulut, framework veya benzeri yetenekler öğretilmediyse zorunlu tutulamaz.

### 9.2 Required Capstone Evidence

- Çalışan teslimat ve yeniden üretilebilir çalıştırma talimatı
- Gereksinim ve acceptance criteria eşlemesi
- Teknik karar ve trade-off gerekçesi
- Test veya eşdeğer doğrulama kanıtı
- Outcome bazlı rubric sonucu
- Kısıtlar, bilinen sorunlar ve reflection

Capstone Technical Review ve Final Review onayı olmadan Volume `Stable` olamaz.

## 10. Review and Release Process

Volume yayın süreci:

```text
Draft
  -> Technical Review
  -> Content Review
  -> Repository Review
  -> Final Review
  -> Stable Release
```

Review aşamalarında Volume'un ortak `status` değeri `Review` olur; aşama adı `status` içine yazılmaz. Aktif/aşılmış kapılar Review kayıtları ve `release.md` içinde tutulur. `Changes Required` kararı kapsamı `Draft` durumuna döndürür. Tüm zorunlu kararlar `Approved` olmadan Final Review başlayamaz.

Yayın sırasında:

1. Volume sürümü kesinleştirilir.
2. Doğrulama kontrolleri çalıştırılır.
3. Manifest üretilir ve artefact sayısı doğrulanır.
4. Final Review, Definition of Done'ı onaylar.
5. `release.md` değişmez release kaydıyla tamamlanır.
6. `volume-{NN}-v{semver}` tag'i oluşturulur.

## 11. Definition of Done

Bu bölüm, bir Volume'un `Stable` olabilmesi için tek ve kanonik Definition of Done kaynağıdır. Diğer standartlar bu listeyi tekrar etmez.

### 11.1 Architecture and Metadata

- Zorunlu dosya ve dizin yapısı eksiksizdir.
- Tüm belgelerin Front Matter'ı türe özgü v2 şemasına uygundur.
- Kimlikler benzersiz, yollar geçerli, status ve version değerleri tutarlıdır.
- Volume README, Blueprint ve destekleyici haritalar birbiriyle uyumludur.

### 11.2 Curriculum and Content

- Blueprint `Stable/Frozen` ve onaylıdır.
- Tüm planned artefact'lar üretilmiş ve kapsam değişiklikleri kaydedilmiştir.
- Zorunlu Chapter bölümleri eksiksiz, teknik ve pedagojik olarak onaylıdır.
- Ön koşul grafiği döngüsüz; kolaydan zora ilerleyiş doğrulanmıştır.
- Yer tutucu, boş zorunlu bölüm veya kanıtsız kritik iddia yoktur.

### 11.3 Practice and Assessment

- Her outcome en az bir Chapter ve Assessment'a bağlıdır.
- Uygulamalı outcome'lar Lab, Challenge, Project veya Capstone kanıtına bağlıdır.
- En az üç Mini Project ve bir Capstone tamamlanmıştır.
- Quiz, açık uçlu soru, hands-on kanıt ve Reflection Chapter düzeyinde kapsanmıştır.
- Final Quiz, Technical Review, Capstone Review ve Self Assessment Volume düzeyinde tamamlanmıştır.
- Capstone yalnızca öğretilmiş zorunlu teknolojileri kullanır ve scope gate'i geçmiştir.

### 11.4 Repository Quality

- Repository Standard v2.0 doğrulama sırasındaki tüm zorunlu kontroller `pass` sonucundadır.
- Kırık bağlantı, eksik asset, duplicate ID veya parse hatası yoktur.
- Kod örnekleri çalıştırılmış; Mermaid, Markdown ve YAML doğrulanmıştır.
- Traceability matrix ile kaynak Front Matter ilişkileri aynıdır.

### 11.5 Review and Release

- Technical, Content, Repository ve Final Review kararları `Approved` durumundadır.
- Açık kritik veya yüksek öncelikli bulgu yoktur.
- Manifest yayın kapsamını eksiksiz listeler.
- Release kaydı, Volume sürümü, manifest ve tag birbiriyle eşleşir.
- Changelog kullanıcıya etkili değişiklikleri açıklar.

Bu koşullardan biri karşılanmıyorsa Volume `Stable` yapılamaz. İstisna verilmez; kapsam değiştirilecekse Blueprint ve review döngüsü yeniden işletilir.

## 12. Versioning and Maintenance

- Volume, Blueprint, belge ve Release sürümleri Repository Standard v2.0'a göre ayrı tutulur.
- İçerik ekleme veya yeni outcome geriye uyumluysa MINOR; zorunlu ön koşul, şema ya da öğrenme sözleşmesi değişiyorsa MAJOR; hata düzeltmesi PATCH'tir.
- Stable Volume'da sessiz değişiklik yapılamaz. Her değişiklik changelog ve uygun review ile yeni sürüme girer.
- Deprecated Volume ardıl Volume veya sürüme bağlantı verir; Archived Volume tarihsel bütünlüğünü korur.

## 13. References

- Tom Preston-Werner, *Semantic Versioning 2.0.0*: <https://semver.org/spec/v2.0.0.html>
- YAML Language Development Team, *YAML 1.2.2 Specification*, 2021: <https://yaml.org/spec/1.2.2/>
- John MacFarlane, *CommonMark Specification*: <https://spec.commonmark.org/current/>
