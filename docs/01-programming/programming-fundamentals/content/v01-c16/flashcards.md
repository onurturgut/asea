---
document_type: "flashcard-set"
document_id: "V01-C16-FC01"
title: "V01-C16 Flashcards"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
last_updated: "2026-07-23"
---

# Flashcards

1. **Ön:** Functional decomposition nedir? **Arka:** Büyük davranışı anlamlı function responsibilities'e bölme tasarımıdır.
2. **Ön:** Responsibility map nedir? **Arka:** Problem outcomes, inputs, outputs, failures ve effects haritasıdır.
3. **Ön:** Function map nedir? **Arka:** Function contracts ve aralarındaki data/control/failure arrows'dur.
4. **Ön:** Syntax extraction nedir? **Arka:** Anlamlı responsibility kanıtı olmadan code block'u function'a taşımaktır.
5. **Ön:** Top-down decomposition nedir? **Arka:** Büyük outcome'dan alt sorumluluklara inmektir.
6. **Ön:** Bottom-up composition nedir? **Arka:** Mevcut küçük contracts'tan büyük davranış kurmaktır.
7. **Ön:** Abstraction level nedir? **Arka:** Kodun workflow'a veya implementation detail'e yakınlık düzeyidir.
8. **Ön:** Cohesion nedir? **Arka:** Birim öğelerinin aynı responsibility/change reason'a hizmet etme gücüdür.
9. **Ön:** Function length cohesion kanıtı mı? **Arka:** Hayır; yalnız inceleme sinyalidir.
10. **Ön:** Change reason nedir? **Arka:** Bir birimin hangi requirement değişikliğinde değişme nedenidir.
11. **Ön:** Coupling nedir? **Arka:** Ayrı units arasındaki data, state, time, failure veya detail dependence'tır.
12. **Ön:** Data coupling nedir? **Arka:** Units'in aktarılan value/shape contract'ına bağımlılığıdır.
13. **Ön:** State coupling nedir? **Arka:** Aynı mutable state'i paylaşma bağımlılığıdır.
14. **Ön:** Temporal coupling nedir? **Arka:** Doğru davranış için belirli call order gereksinimidir.
15. **Ön:** Failure coupling nedir? **Arka:** Consumer'ın provider error model/detail'ine bağımlılığıdır.
16. **Ön:** Loose coupling nedir? **Arka:** Necessary dependency'nin küçük, explicit ve stable contract'ta olmasıdır.
17. **Ön:** Dependency direction nedir? **Arka:** Hangi unit'in hangi provider contract'ına güvendiğini gösteren yöndür.
18. **Ön:** Helper contract ne içermeli? **Arka:** Meaningful name, necessary input, result, failure ve effect.
19. **Ön:** Orchestrator nedir? **Arka:** Workflow sequence, branching, failure ve boundaries'i koordine eden function'dır.
20. **Ön:** Pipeline nedir? **Arka:** Bir aşama output'unu compatible sonraki input'a bağlayan flow'dur.
21. **Ön:** Composition nedir? **Arka:** Compatible contracts'i daha büyük behavior'da birleştirmektir.
22. **Ön:** Reuse nedir? **Arka:** Stable uygun contract'ı başka gerçek bağlamda kullanmaktır.
23. **Ön:** Coincidental duplication nedir? **Arka:** Aynı görünen ama farklı nedenlerle değişen code tekrarlarıdır.
24. **Ön:** Premature abstraction nedir? **Arka:** Shared invariant kanıtlanmadan generic ortak çözüm üretmektir.
25. **Ön:** Mode flag büyümesi ne sinyalidir? **Arka:** Abstraction'ın ilgisiz responsibilities'i birleştirdiğinin sinyali olabilir.
26. **Ön:** Characterization test nedir? **Arka:** Existing observable behavior'ı değişim öncesi kaydeden testtir.
27. **Ön:** Extract Function nedir? **Arka:** Meaningful block'u named contract'a taşıyan refactoring'dir.
28. **Ön:** Inline Function ne zaman? **Arka:** Extraction yeni abstraction değil yalnız indirection üretiyorsa.
29. **Ön:** Split Phase nedir? **Arka:** Data preparation ve processing gibi aşamaları contract sınırıyla ayırmaktır.
30. **Ön:** C16 başarı kanıtı nedir? **Arka:** Function map, two alternatives, coupling evidence ve behavior tests'tir.
