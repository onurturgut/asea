# ASEA Chapter Standard v1.0

Bu standart, ASEA içindeki tüm chapter dosyalarının ortak yapısını tanımlar.

## Front Matter

Her chapter aşağıdaki YAML alanlarıyla başlamalıdır:

---
title: ""
volume: ""
chapter: ""
slug: ""
difficulty: "Beginner | Intermediate | Advanced"
estimated_time: ""
status: "Draft | Review | Stable"
prerequisites: []
learning_objectives: []
---

## Zorunlu Bölüm Yapısı

1. Learning Objectives
2. Prerequisites
3. Estimated Study Time
4. Introduction
5. Core Concepts
6. Engineering Perspective
7. Real World Examples
8. Common Mistakes
9. Best Practices
10. Hands-on Exercise
11. Reflection Questions
12. Chapter Summary
13. Key Takeaways
14. Further Reading
15. References

## İçerik Kuralları

- Başlık sırası korunmalıdır.
- Front Matter eksik bırakılmamalıdır.
- Yer tutucu metin kullanılmamalıdır.
- Teknik terimler ilk kullanımda Türkçe ve İngilizce birlikte verilmelidir.
- Gereksiz tekrar yapılmamalıdır.
- Gerçek şirket örnekleri doğrulanabilir olmalıdır.
- Kaynaklar bölüm sonunda verilmelidir.
- Kod veya teknik örnek varsa açıklaması bulunmalıdır.
- Bölüm sonu görevleri ölçülebilir olmalıdır.
- Markdown başlık hiyerarşisi bozulmamalıdır.

## Örnek Front Matter

---
title: "Welcome to ASEA"
volume: "00"
chapter: "01"
slug: "welcome-to-asea"
difficulty: "Beginner"
estimated_time: "30-45 minutes"
status: "Draft"
prerequisites: []
learning_objectives:
  - "ASEA'nın amacını açıklayabilmek"
  - "Programlama ile yazılım mühendisliği arasındaki farkı tanımlayabilmek"
  - "Akademinin çalışma modelini anlayabilmek"
---
