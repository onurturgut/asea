---
document_type: "standard"
standard_id: "ASEA-STD-CURRICULUM-002"
title: "ASEA Curriculum Standard v2.0"
version: "2.0.0"
status: "Stable"
supersedes: "curriculum-standard-v1.md"
---

# ASEA Curriculum Standard v2.0

Bu standart, ASEA müfredatındaki öğrenme ilerleyişini, öğrenme çıktılarının izlenebilirliğini ve ölçme artefact'larının ortak sözleşmesini tanımlar. Ortak metadata, kimlik, durum ve sürüm kuralları [Repository Standard v2.0](./repository-standard-v2.md) tarafından yönetilir.

## 1. Purpose

Müfredat; başlangıç seviyesinden ileri seviyeye ilerleyen, ön koşulları görünür, uygulama ağırlıklı, ölçülebilir ve resmî kaynaklara dayalı bir öğrenme sistemi olmalıdır. Her içerik ve assessment, açık bir öğrenme çıktısına hizmet etmelidir.

## 2. Curriculum Principles

- Kavram önce, araç ve dil sonra öğretilir.
- Öğrenme döngüsü **Concept → Example → Practice → Challenge → Assessment → Reflection** sırasını izler.
- Konular bilişsel yük ve ön koşullar dikkate alınarak kolaydan zora ilerler.
- Aynı kavram kanonik olarak tek yerde öğretilir; sonraki kullanımlar bağlantı kurar ve derinleştirir.
- Resmî dokümantasyon, standartlar ve özgün araştırmalar öncelikli kaynaktır.
- Teori, gerçekçi mühendislik bağlamı ve üretilebilir kanıtla birlikte sunulur.
- Programlama dili, framework veya sağlayıcı müfredatın kalıcı kavram modelinin yerine geçmez.

## 3. Learning Progression

Her öğrenme birimi aşağıdaki işlevleri yerine getirmelidir:

1. **Concept:** Terim, sınır, amaç ve zihinsel model açıklanır.
2. **Example:** Kavram, açıklanmış ve doğrulanabilir bir örnekle gösterilir.
3. **Practice:** Öğrenci yönlendirmeli bir görevle beceriyi uygular.
4. **Challenge:** Daha az yönlendirmeli ve karar gerektiren bir sorun çözülür.
5. **Assessment:** Tanımlı başarı ölçütleriyle kanıt değerlendirilir.
6. **Reflection:** Yaklaşım, hata, tercih ve aktarılabilir dersler değerlendirilir.

Bir Chapter bu adımların hepsini kendi içinde tamamlayabilir veya açık kimlik bağlarıyla haricî Lab, Challenge ve Assessment artefact'larına dağıtabilir.

## 4. Dependencies

### 4.1 Volume Dependencies

- Her Volume, `prerequisite_volumes` alanında doğrudan ön koşullarını belirtir.
- Volume bağımlılık grafiği döngüsüz olmalıdır.
- Ön koşulda öğretilmemiş teknoloji veya beceri zorunlu tutulamaz.
- Bir Volume'un hedef seviyesi, onu izleyen Volume'un başlangıç seviyesine makul bir geçiş sağlamalıdır.

### 4.2 Chapter Dependencies

- Chapter ön koşulları Chapter ID veya Learning Outcome ID ile ifade edilir.
- Chapter sırası yalnızca numaraya değil, bağımlılık grafiğine de uymalıdır.
- İleri referans öğretim için kullanılamaz; yalnızca gelecekteki bağlamı işaretleyebilir.
- Ortak ön koşullar kopyalanmaz; kanonik Chapter'a göreli bağlantı verilir.

## 5. Learning Outcome Standard

### 5.1 Outcome Contract

Her öğrenme çıktısı (Learning Outcome):

- gözlenebilir bir eylem fiiliyle başlar;
- öğrencinin ne üreteceğini veya göstereceğini belirtir;
- gerekli koşulları ve başarı ölçütünü tanımlar;
- tek bir değerlendirme kararına yetecek kadar odaklıdır;
- `V{NN}-LO{NNN}` kimliğiyle benzersizdir;
- uygun Bloom düzeyiyle sınıflandırılır: `Remember`, `Understand`, `Apply`, `Analyze`, `Evaluate` veya `Create`.

“JavaScript'i öğrenmek” ölçülebilir değildir. “Verilen gereksinimlere göre saf bir fonksiyon yazmak ve en az üç testle davranışını doğrulamak” ölçülebilirdir.

### 5.2 Outcome Record

`learning-outcomes.md` içinde her çıktı şu alanlarla kaydedilir:

| Alan | Kural |
|---|---|
| `outcome_id` | Zorunlu ve benzersiz Learning Outcome ID |
| `statement` | Ölçülebilir davranış cümlesi |
| `bloom_level` | İzin verilen Bloom düzeyi |
| `conditions` | Araç, bağlam veya sınırlamalar |
| `success_evidence` | Kabul edilebilir üretim/performans kanıtı |
| `chapter_ids` | En az bir Chapter ID |
| `assessment_ids` | En az bir Assessment ID |
| `lab_ids` | Uygulamalı çıktıysa en az bir Lab ID |
| `project_ids` | Bütünleştirici çıktıysa en az bir Project veya Capstone ID |

### 5.3 Traceability Rules

- Her outcome en az bir Chapter ve bir Assessment ile bağlı olmalıdır.
- `Apply`, `Analyze`, `Evaluate` ve `Create` düzeyleri en az bir Lab, Challenge, Project veya Capstone kanıtına bağlanmalıdır.
- Her Chapter, Lab, Quiz, Challenge ve Project en az bir outcome'a bağlanmalıdır.
- Her ilişki iki yönlü olmalıdır: outcome kaydı artefact ID'sini, artefact Front Matter'ı outcome ID'sini taşımalıdır.
- Yetim, döngüsel veya var olmayan kimlik bağı `Stable` durumunu engeller.
- `assessment.md` içindeki traceability matrix kanonik ilişki görünümüdür; kaynak Front Matter ile uyuşmalıdır.

Önerilen matris:

| Outcome ID | Chapter | Quiz | Lab/Challenge | Project/Capstone | Success Evidence |
|---|---|---|---|---|---|
| `V01-LO001` | `V01-C01` | `V01-C01-QZ01` | `V01-C01-L01` | `V01-P01` | Çalışan çıktı ve rubric sonucu |

## 6. Practice Strategy

- Chapter içi exercise kavramı ilk kez uygulatır.
- Lab, kontrollü ortamda çok adımlı üretim ve doğrulama yaptırır.
- Challenge, çözüm yolunu öğrenciye bırakan sınırlı bir problem sunar.
- Project birden fazla outcome'u bütünleştirir.
- Capstone Volume'un hedef outcome'larının çoğunu bağımsız bir teslimatta kanıtlar.
- Çözüm materyali, görevden ayrı tutulmalı ve değerlendirme öncesinde varsayılan olarak görünür olmamalıdır.
- Uygulama görevleri süre, girdi, teslimat ve değerlendirme ölçütü içermelidir.

## 7. Assessment Model

Assessment, bir veya daha fazla değerlendirme aracını aynı karar altında birleştiren üst kayıttır.

```text
Learning Outcome
├── Quiz: kavramsal doğrulama
├── Exercise: yönlendirmeli uygulama
├── Lab: süreç ve teknik uygulama
├── Challenge: bağımsız problem çözme
├── Interview: açıklama ve muhakeme
├── Project: bütünleştirilmiş üretim
└── Capstone: Volume düzeyi yeterlik kanıtı
```

Tek bir Quiz, uygulamalı outcome için yeterli kanıt sayılmaz. Project ve Capstone değerlendirmesi, ürünün yanı sıra karar gerekçesi, doğrulama ve bakım yapılabilirlik kanıtı içermelidir.

## 8. Artefact Front Matter Schemas

Bu şemalardaki `version`, `status`, adlandırma ve ID davranışı Repository Standard v2.0'a tabidir.

### 8.1 Lab

```yaml
---
document_type: "lab"
lab_id: "V01-C01-L01"
title: "Example Lab"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C01"
difficulty: "Beginner"
estimated_time: "60 minutes"
prerequisites:
  - "V01-C01"
learning_outcomes:
  - "V01-LO001"
assessment_id: "V01-C01-AS01"
deliverables:
  - "source-code"
---
```

Zorunlu H2 başlıkları: `Objective`, `Requirements`, `Tasks`, `Bonus Challenge`, `Deliverables`, `Evaluation Criteria`, `Reflection`, `References`. Bonus uygulanmıyorsa gerekçesi yazılır; bölüm boş bırakılamaz.

### 8.2 Quiz

```yaml
---
document_type: "quiz"
quiz_id: "V01-C01-QZ01"
title: "Example Quiz"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
scope_type: "Chapter"
scope_id: "V01-C01"
difficulty: "Beginner"
estimated_time: "15 minutes"
learning_outcomes:
  - "V01-LO001"
assessment_id: "V01-C01-AS01"
question_count: 10
passing_score: 80
---
```

`scope_type` yalnızca `Chapter` veya `Volume` olabilir. Chapter Quiz kimliği `V{NN}-C{NN}-QZ{NN}`, Volume Final Quiz kimliği `V{NN}-QZ{NNN}` biçimindedir ve `scope_id` seçilen kapsamla eşleşir. Zorunlu H2 başlıkları: `Instructions`, `Questions`, `Answer Key`, `Scoring`, `References`. Answer Key, yayın altyapısı izin veriyorsa öğrenci görünümünden ayrıştırılmalıdır.

### 8.3 Challenge

```yaml
---
document_type: "challenge"
challenge_id: "V01-C01-CH01"
title: "Example Challenge"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C01"
difficulty: "Intermediate"
estimated_time: "90 minutes"
prerequisites:
  - "V01-C01-L01"
learning_outcomes:
  - "V01-LO001"
assessment_id: "V01-C01-AS01"
deliverables:
  - "implementation"
---
```

Zorunlu H2 başlıkları: `Problem`, `Constraints`, `Acceptance Criteria`, `Deliverables`, `Evaluation`, `Reflection`, `References`.

### 8.4 Exercise

```yaml
---
document_type: "exercise"
exercise_id: "V01-C01-EX01"
title: "Example Exercise"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C01"
difficulty: "Beginner"
estimated_time: "20 minutes"
learning_outcomes:
  - "V01-LO001"
assessment_id: "V01-C01-AS01"
---
```

Zorunlu H2 başlıkları: `Objective`, `Instructions`, `Expected Evidence`, `Self-check`, `References`.

### 8.5 Interview

```yaml
---
document_type: "interview"
interview_id: "V01-C01-IV01"
title: "Example Interview"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C01"
difficulty: "Intermediate"
estimated_time: "30 minutes"
learning_outcomes:
  - "V01-LO001"
assessment_id: "V01-C01-AS01"
interviewer_role: "Reviewer"
---
```

Zorunlu H2 başlıkları: `Purpose`, `Question Set`, `Evidence Guide`, `Scoring Rubric`, `Feedback`, `References`.

### 8.6 Project

```yaml
---
document_type: "project"
project_id: "V01-P01"
project_type: "Mini Project"
title: "Example Project"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
difficulty: "Intermediate"
estimated_time: "8 hours"
prerequisites:
  - "V01-C04"
learning_outcomes:
  - "V01-LO001"
assessment_id: "V01-AS010"
allowed_technologies:
  - "technology-taught-in-volume"
deliverables:
  - "repository"
---
```

`project_type` yalnızca `Mini Project` veya `Capstone` olabilir. Capstone kimliği `V{NN}-CP{NN}` biçimini kullanır. Zorunlu H2 başlıkları: `Goal`, `Scope`, `Features`, `Technical Requirements`, `Constraints`, `Deliverables`, `Evaluation`, `References`.

### 8.7 Assessment

```yaml
---
document_type: "assessment"
assessment_id: "V01-C01-AS01"
title: "Chapter 01 Assessment"
version: "1.0.0"
status: "Draft"
volume_id: "V01"
scope_type: "Chapter"
scope_id: "V01-C01"
learning_outcomes:
  - "V01-LO001"
instruments:
  - "V01-C01-QZ01"
  - "V01-C01-L01"
passing_rule: "All required instruments pass"
attempt_policy: "Retry after feedback"
---
```

`scope_type` yalnızca `Chapter`, `Module` veya `Volume` olabilir. Zorunlu H2 başlıkları: `Purpose`, `Outcome Coverage`, `Instruments`, `Scoring Model`, `Passing Criteria`, `Feedback and Retry`, `Traceability`, `References`.

## 9. Assessment Strategy

- Her Chapter sonunda en az Quiz, açık uçlu soru, uygulamalı kanıt ve Reflection bulunmalıdır; bunlar tek dosyada veya kimlikle bağlı artefact'larda olabilir.
- Her Volume sonunda Final Quiz, Technical Review, Capstone Review ve Self Assessment bulunmalıdır.
- Başarı ölçütleri üretim başlamadan önce tanımlanır ve öğrenciye görünürdür.
- Rubric ölçütleri outcome ifadeleriyle aynı beceriyi ölçmelidir.
- Yeniden deneme politikası geri bildirim, bekleme veya ek pratik koşulunu açıklar.
- Assessment sonucu yalnızca puan değil, outcome bazında yeterlik kanıtı üretir.

## 10. Capstone Curriculum Gate

- Capstone yalnızca aynı Volume'da veya açık ön koşul Volume'larında öğretilmiş teknoloji ve outcome'ları zorunlu tutabilir.
- Henüz öğretilmemiş teknoloji isteğe bağlı keşif olabilir; değerlendirme puanını düşüremez ve temel kabul ölçütü olamaz.
- `allowed_technologies` değerleri Chapter ve Learning Outcome kimlikleriyle kanıtlanmalıdır.
- Capstone kapsamı üretimden önce Blueprint Review sırasında, yayın öncesinde Technical Review sırasında yeniden doğrulanır.
- Capstone'un paketleme ve Stable kapısı Volume Standard v2.0 tarafından yönetilir.

## 11. Curriculum Quality and Review

### 11.1 Quality Rules

- Ön koşullar açık, mevcut ve döngüsüzdür.
- Outcome'lar ölçülebilir ve kanıtla eşleşir.
- İçerik tekrarları kanonik bağlantılarla giderilmiştir.
- Zorluk ve süre tahminleri görev kapsamıyla gerçekçidir.
- Her teknik veya pedagojik iddia güvenilir kaynağa dayanır.
- Örnek, pratik ve assessment aynı kavramsal hedefi ölçer.
- Traceability matrix ile Front Matter ilişkileri aynıdır.

### 11.2 Review Process

1. Curriculum kapsamı ve bağımlılıklar tasarlanır.
2. Learning Outcome kayıtları ve kanıt türleri tanımlanır.
3. Chapter ve assessment traceability kurulup doğrulanır.
4. Content Review pedagojik sıra, açıklık ve kaynakları inceler.
5. Technical Review uygulamaların doğruluğunu ve capstone kapsamını inceler.
6. Repository Review şema, kimlik ve bağlantıları doğrular.
7. Bulgular kapanmadan kapsam `Stable` olamaz.

## 12. References

- Lorin W. Anderson ve David R. Krathwohl (eds.), *A Taxonomy for Learning, Teaching, and Assessing*, 2001.
- John D. Bransford, Ann L. Brown ve Rodney R. Cocking (eds.), *How People Learn*, National Academies Press, 2000: <https://doi.org/10.17226/9853>
- YAML Language Development Team, *YAML 1.2.2 Specification*, 2021: <https://yaml.org/spec/1.2.2/>
