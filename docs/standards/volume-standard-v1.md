# ASEA Volume Standard v1.0

Bu doküman ASEA içindeki tüm Volume'lerin ortak mimarisini tanımlar.

---

# 1. Purpose

Her Volume belirli bir uzmanlık alanını sistematik olarak öğretmelidir.

Her Volume:

- Kendi öğrenme hedeflerine sahip olmalıdır.
- Ön koşulları açıkça belirtmelidir.
- Bir önceki Volume üzerine inşa edilmelidir.
- Sonraki Volume için temel oluşturmalıdır.

---

# 2. Front Matter

Her Volume README.md aşağıdaki YAML ile başlamalıdır.

```yaml
---
title: ""
volume: ""
level: "Beginner | Intermediate | Advanced"
estimated_duration: ""
estimated_hours: ""
status: "Draft | Review | Stable"
prerequisites: []
learning_outcomes: []
---
```

---

# 3. Zorunlu Dosya Yapısı

Her Volume aşağıdaki dosyaları içermelidir.

```
01-volume-name/
│
├── README.md
├── roadmap.md
├── learning-outcomes.md
├── chapter-map.md
├── labs.md
├── projects.md
├── assessment.md
├── references.md
└── chapters/
```

Hiçbir dosya isteğe bağlı değildir.

---

# 4. README İçeriği

README.md şu bölümleri içermelidir.

1. Volume Overview
2. Purpose
3. Learning Outcomes
4. Skills Acquired
5. Estimated Duration
6. Prerequisites
7. Chapter List
8. Lab Structure
9. Project Structure
10. Assessment
11. Completion Criteria
12. References

---

# 5. Chapter Map

chapter-map.md

Her Chapter için aşağıdaki bilgiler bulunmalıdır.

- Chapter Number
- Chapter Name
- Difficulty
- Estimated Time
- Learning Objectives
- Prerequisites
- Related Labs
- Related Project
- Related Next Chapter

---

# 6. Learning Outcomes

learning-outcomes.md

Her öğrenme çıktısı ölçülebilir olmalıdır.

Örnek:

❌ JavaScript'i öğrenmek

✅ Fonksiyon yazabilmek

✅ Algoritma geliştirebilmek

✅ Hata ayıklayabilmek

---

# 7. Labs

labs.md

Her Chapter en az bir laboratuvar içermelidir.

Laboratuvar yapısı:

- Objective
- Requirements
- Tasks
- Bonus Challenge
- Evaluation Criteria

---

# 8. Projects

projects.md

Her Volume:

- En az 3 Mini Project
- En az 1 Capstone Project

içermelidir.

Her proje aşağıdaki alanlara sahip olmalıdır.

- Goal
- Features
- Technical Requirements
- Deliverables
- Evaluation

---

# 9. Assessment

assessment.md

Her Chapter sonunda:

- Quiz
- Open-ended Questions
- Hands-on Lab
- Reflection

bulunmalıdır.

Volume sonunda:

- Final Quiz
- Technical Review
- Capstone Review
- Self Assessment

---

# 10. References

references.md

Kullanılan kaynaklar kategorilere ayrılmalıdır.

Örnek:

## Standards

- IEEE
- ACM
- RFC

## Documentation

- MDN
- Microsoft Learn
- PostgreSQL Docs
- Docker Docs

## Books

- Code Complete
- Clean Architecture
- Designing Data-Intensive Applications
- The Pragmatic Programmer

## Research Papers

Gerektiğinde akademik makaleler.

---

# 11. Quality Rules

Her Volume aşağıdaki kurallara uymalıdır.

- Yer tutucu içerik bulunmamalıdır.
- İç bağlantılar çalışmalıdır.
- Front Matter eksiksiz olmalıdır.
- Öğrenme çıktıları ölçülebilir olmalıdır.
- Teknik örnekler doğrulanabilir olmalıdır.
- Kod örnekleri çalıştırılabilir olmalıdır.
- Kaynakça eksiksiz olmalıdır.
- Markdown başlık hiyerarşisi korunmalıdır.

---

# 12. Release Process

Bir Volume aşağıdaki aşamalardan geçmelidir.

Draft

↓

Technical Review

↓

Content Review

↓

Repository Review

↓

Stable Release

---

# 13. Versioning

Her Volume aşağıdaki sürüm sistemini kullanmalıdır.

v0.1 Draft

v0.5 Review

v0.9 Release Candidate

v1.0 Stable

v1.1 Minor Revision

v2.0 Major Revision

---

# 14. Design Principles

ASEA Volume'leri aşağıdaki prensiplere göre hazırlanmalıdır.

- Concept First
- Language Second
- Engineering Mindset
- Hands-on Learning
- Project Based Learning
- Progressive Difficulty
- Real World Focus
- Official Documentation First
- Open Source Friendly
- Lifelong Learning

---
