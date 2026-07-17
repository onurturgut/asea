---
document_type: "standard"
standard_id: "ASEA-STD-CHAPTER-002"
title: "ASEA Chapter Standard v2.0"
version: "2.0.0"
status: "Stable"
supersedes: "chapter-standard-v1.md"
---

# ASEA Chapter Standard v2.0

Bu standart, ASEA Chapter belgelerinin metadata, başlık ve içerik sözleşmesini tanımlar. Ortak kurallar [Repository Standard v2.0](./repository-standard-v2.md), öğrenme ve assessment ilişkileri [Curriculum Standard v2.0](./curriculum-standard-v2.md) tarafından yönetilir.

## 1. Purpose

Her Chapter, sınırlı bir kavram kümesini öğretmeli, ölçülebilir öğrenme çıktıları üretmeli ve öğrenciyi bir sonraki bağımlılık noktasına hazırlamalıdır. Yapı tutarlı kalırken konuya özgü anlatım H3 düzeyinde genişletilebilir olmalıdır.

## 2. Chapter Front Matter Schema

```yaml
---
document_type: "chapter"
chapter_id: "V01-C01"
volume_id: "V01"
title: "Example Chapter"
slug: "example-chapter"
version: "1.0.0"
status: "Draft"
difficulty: "Beginner"
estimated_time: "45 minutes"
prerequisites: []
learning_outcomes:
  - "V01-LO001"
related_lab_ids:
  - "V01-C01-L01"
related_assessment_ids:
  - "V01-C01-AS01"
next_chapter_id: "V01-C02"
---
```

### 2.1 Field Rules

- `document_type` değeri `chapter` olmalıdır.
- `chapter_id` ve `volume_id`, Repository Standard v2.0 kimlik biçimine uymalı ve birbiriyle aynı Volume'u göstermelidir.
- `slug` küçük harfli kebab-case olmalı ve dosya adındaki başlık kısmıyla eşleşmelidir.
- `version` ve `status` ortak yaşam döngüsüne uymalıdır.
- `difficulty` yalnızca `Beginner`, `Intermediate` veya `Advanced` olabilir.
- `estimated_time`, sayı ve birim içeren gerçekçi bir aralık veya tek değer olmalıdır.
- `prerequisites`, var olan Chapter, Learning Outcome veya önceki Volume kimliklerini içerir; ön koşul yoksa boş dizidir.
- `learning_outcomes` en az bir geçerli Learning Outcome ID içerir.
- `related_lab_ids` ve `related_assessment_ids`, Curriculum Standard v2.0 traceability kurallarına göre doldurulur.
- Son Chapter için `next_chapter_id` boş dizi `[]`; diğer Chapter'lar için tek Chapter ID'dir.
- Alanlar boş string olarak bırakılamaz.

## 3. File and Heading Contract

Chapter dosyası `{chapter-number}-{slug}.md` biçiminde adlandırılır. Belge Front Matter'dan sonra tek H1 taşır; H1, `title` alanıyla aynı anlamı ifade eder.

Aşağıdaki H2 başlıkları zorunludur, aynı sırada bulunur ve yeniden adlandırılamaz:

1. `Learning Objectives`
2. `Prerequisites`
3. `Estimated Study Time`
4. `Introduction`
5. `Core Concepts`
6. `Engineering Perspective`
7. `Real World Examples`
8. `Common Mistakes`
9. `Best Practices`
10. `Hands-on Exercise`
11. `Reflection Questions`
12. `Chapter Summary`
13. `Key Takeaways`
14. `Further Reading`
15. `References`

### 3.1 Extensibility Rules

- Zorunlu H2 başlıkları silinemez, birleştirilemez veya bölünemez.
- Konuya özgü alt başlıklar ilgili H2 altında H3 olarak serbestçe eklenebilir.
- `Core Concepts` altındaki her ana kavram ayrı bir H3 olabilir.
- `Hands-on Exercise` altında `Objective`, `Requirements`, `Tasks`, `Deliverables` ve `Evaluation Criteria` H3 başlıkları kullanılmalıdır.
- `Chapter Summary` altında gerekirse `Navigation` H3 başlığıyla önceki/sonraki Chapter bağlantıları verilebilir.
- Yeni bir H2 ancak Chapter Standard'ın yeni MAJOR sürümüyle zorunlu yapıya eklenebilir.
- H3 eklentileri zorunlu H2'nin amacını değiştiremez ve başka standardın şemasını yeniden tanımlayamaz.

## 4. Section Requirements

### 4.1 Learning Objectives

Front Matter'daki Learning Outcome kimliklerini insan tarafından okunabilir, ölçülebilir cümlelerle açıklar. Her madde bir outcome ile eşleşmelidir.

### 4.2 Prerequisites

Gerekli bilgi, artefact ve araçları bağlantılarıyla açıklar. Ön koşul yoksa bunun nedeni tam cümleyle belirtilir.

### 4.3 Estimated Study Time

Okuma, uygulama ve değerlendirme sürelerini ayırır; toplam Front Matter değeriyle tutarlı olmalıdır.

### 4.4 Introduction

Konunun neden önemli olduğunu, Chapter kapsamını ve kapsam dışını açıklar. Sonucu peşinen öğretmeden öğrencinin zihinsel modelini hazırlar.

### 4.5 Core Concepts

Terimleri, sınırları, ilişkileri ve temel mekanizmaları öğretir. Teknik terim ilk kullanımda Türkçe ve İngilizce birlikte yazılır. Her yeni kavram örnek veya görsel modelle desteklenir.

### 4.6 Engineering Perspective

Kavramın kalite, trade-off, bakım, güvenlik, performans, ekip çalışması veya operasyon bağlamındaki etkisini inceler. Her konu için ilgisiz kalite nitelikleri zorla eklenmez.

### 4.7 Real World Examples

Gerçekçi kullanım senaryoları ve doğrulanabilir şirket/teknoloji örnekleri sunar. Pazarlama iddiası veya kaynaksız şirket anlatısı kullanılmaz.

### 4.8 Common Mistakes

Hatanın belirtisini, kök nedenini, etkisini ve teşhis yolunu açıklar. Yalnızca “bunu yapmayın” listesi olarak yazılmaz.

### 4.9 Best Practices

Bağlama bağlı önerileri gerekçeleri ve sınırlarıyla açıklar. Tercihler evrensel kural gibi sunulmaz.

### 4.10 Hands-on Exercise

Ölçülebilir görev, teslimat ve başarı ölçütü içerir. Exercise, Chapter outcome'larından en az birini doğrudan kanıtlar; dış Lab'a dayanıyorsa kimlik ve göreli bağlantı verir.

### 4.11 Reflection Questions

Öğrencinin karar, hata, alternatif ve aktarım üzerine düşünmesini sağlayan açık uçlu sorular içerir. Yalnızca tanım hatırlatan sorular yeterli değildir.

### 4.12 Chapter Summary

Yeni iddia eklemeden kavramsal akışı ve sonuçları birleştirir.

### 4.13 Key Takeaways

Uygulanabilir, kısa ve birbirini tekrar etmeyen çıkarımlar sunar.

### 4.14 Further Reading

Bir sonraki öğrenme adımı için seçilmiş kaynakları, her birinin neden yararlı olduğunu belirterek listeler.

### 4.15 References

Chapter'daki doğrulanabilir iddiaların kanonik kaynaklarını Repository Standard v2.0 formatıyla verir.

## 5. Content Rules

- Yer tutucu, boş zorunlu bölüm veya yalnızca başlıktan oluşan bölüm bulunamaz.
- Anlatım birincil hedef kitleye uygun, açık ve profesyonel olmalıdır.
- Teknik terimler ilk kullanımda Türkçe ve İngilizce birlikte verilir; sonraki kullanımlar tutarlı olmalıdır.
- Gereksiz tekrar yerine kanonik bölüme göreli bağlantı kullanılır.
- Bilimsel, pedagojik ve şirketlere ilişkin doğrulanabilir iddialar kaynaklandırılır.
- Kod veya komut örneği amaç, çalışma bağlamı ve beklenen sonuçla açıklanır.
- Güvensiz örnekler güvenli varsayılan gibi sunulamaz; risk açıkça belirtilir.
- Framework veya dil detayı kavramın kendisiymiş gibi genellenemez.
- Chapter yalnızca kendi outcome kapsamını öğretir; ileri konu gerekiyorsa ön koşul ya da sonraki Chapter bağlantısı verilir.

## 6. Diagrams and Technical Examples

- Diyagram yalnızca ilişki veya akışın metinden daha açık olmasını sağlıyorsa kullanılır.
- Mermaid kod bloğu `mermaid` etiketi taşır ve metin açıklamasına sahip olur.
- Kod bloklarında gerçek dil etiketi kullanılır; çalıştırılamayan algoritma `pseudocode` etiketi taşır.
- Girdi, beklenen çıktı, sürüm bağımlılığı ve hata davranışı gerektiğinde belirtilir.
- Uzun örnekler Lab veya Project'e taşınır; Chapter kavramsal odağını korur.

## 7. Assessment and Traceability

- `learning_outcomes`, `related_lab_ids` ve `related_assessment_ids` karşı artefact'larda iki yönlü olarak bulunmalıdır.
- Hands-on Exercise başarı ölçütleri ilgili Assessment rubric'iyle çelişemez.
- Kavramsal outcome Quiz veya açık uçlu soruyla; uygulamalı outcome Exercise, Lab, Challenge ya da Project ile ölçülür.
- Reflection öğrenmeyi destekler ancak tek başına yeterlik kanıtı değildir.
- Chapter'ın `Stable` olabilmesi için tüm outcome bağları Curriculum Standard v2.0 traceability kontrolünden geçmelidir.

## 8. Chapter Review Gate

Chapter `Review` durumuna alınmadan önce:

- Front Matter eksiksiz ve geçerlidir;
- 15 zorunlu H2 doğru sıradadır;
- outcome ve assessment bağları çözülür;
- örnekler doğrulanmış, kaynaklar erişilebilir ve görev ölçülebilirdir;
- Markdown, link, kod ve Mermaid kontrolleri geçmiştir.

`Stable` geçişi Content, Technical ve Repository Review kapsamında onay gerektirir. Volume düzeyi Definition of Done, Volume Standard v2.0'da tek otorite olarak tanımlanır.

## 9. References

- John MacFarlane, *CommonMark Specification*: <https://spec.commonmark.org/current/>
- YAML Language Development Team, *YAML 1.2.2 Specification*, 2021: <https://yaml.org/spec/1.2.2/>
- Lorin W. Anderson ve David R. Krathwohl (eds.), *A Taxonomy for Learning, Teaching, and Assessing*, 2001.
