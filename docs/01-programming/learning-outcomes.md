---
document_type: "supporting-document"
supporting_document_id: "V01-SD-LO-001"
supporting_document_type: "Learning Outcomes Registry"
title: "Volume 01 Learning Outcomes"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Learning Outcomes

## Purpose

Öğrenme çıktıları Revised Bloom's Taxonomy'nin bilişsel süreç düzeyleriyle eşleştirilmiştir: Remember, Understand, Apply, Analyze, Evaluate ve Create. Volume başlangıçta açıklama ve uygulamaya ağırlık verir; modüller ilerledikçe analiz, değerlendirme ve üretme kanıtı zorunlu olur.

## Scope

This document governs the Learning Outcomes Registry records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Learning Outcomes Registry data within Volume 01.
- **Owner Role:** Curriculum Architect.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Learning Outcomes Registry records.

Her çıktı ölçülebilir bir fiil, bağlam ve kanıt türü içerir. `LO` kimlikleri Chapter, lab, proje ve assessment izlenebilirliği için kullanılır.

## Module 1 — Computational Thinking

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO001 | Understand | Program, algorithm, instruction ve computation kavramlarını iki örnek üzerinde doğru ayırabilmek | Chapter 01 open-ended review |
| V01-LO002 | Apply | Belirsiz bir günlük süreci en az sekiz kesin ve sıralı talimata dönüştürebilmek | Lab 01 |
| V01-LO003 | Understand | Source code, runtime, memory, input ve output ilişkisini doğru execution model ile açıklayabilmek | Chapter 02 trace review |
| V01-LO004 | Analyze | Küçük bir talimat dizisinde her adımdan sonra oluşan state'i hatasız trace edebilmek | Lab 02 |
| V01-LO005 | Analyze | Verilen problemi input, output, constraint, assumption ve edge case'lere ayırabilmek | Lab 03 |
| V01-LO006 | Create | Sonlanan bir çözümü pseudocode ile yazıp üç test girdisi üzerinde trace edebilmek | Lab 04 + Mini Project 01 |

## Module 2 — Data and Expressions

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO007 | Understand | En az on örnek değeri tür ve temsil özelliğine göre doğru sınıflandırabilmek | Chapter 05 quiz |
| V01-LO008 | Analyze | Conversion sırasında oluşabilecek precision veya meaning kaybını verilen örneklerde belirleyebilmek | Lab 05 |
| V01-LO009 | Apply | Assignment dizisi için eksiksiz state table üretebilmek | Lab 06 |
| V01-LO010 | Evaluate | Bir veri için constant veya mutable variable seçimini değişim ihtiyacıyla gerekçelendirebilmek | Chapter 06 open-ended review |
| V01-LO011 | Apply | Bileşik expression sonucunu precedence, grouping ve ara türlerle doğru hesaplayabilmek | Lab 07 |
| V01-LO012 | Create | Parse, validate, normalize, transform ve format aşamalarından uygun olanları içeren veri hattı tasarlayabilmek | Lab 08 + Mini Project 02 |

## Module 3 — Control Flow

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO013 | Apply | Bileşik Boolean expression için eksiksiz truth table oluşturabilmek | Lab 09 |
| V01-LO014 | Analyze | Karmaşık predicate'i davranışı koruyan daha okunabilir alt koşullara ayırabilmek | Chapter 09 challenge |
| V01-LO015 | Create | Verilen kuralları tüm durumları kapsayan decision table ve conditional flow'a dönüştürebilmek | Lab 10 |
| V01-LO016 | Analyze | Conditional branch'lerde erişilemeyen veya eksik durumu tespit edebilmek | Chapter 10 assessment |
| V01-LO017 | Apply | Counter, accumulator veya sentinel kullanan sonlanan loop tasarlayıp trace edebilmek | Lab 11 |
| V01-LO018 | Evaluate | Nested control flow'u execution path, readability ve testability ölçütleriyle sadeleştirebilmek | Lab 12 + Mini Project 03 |

## Module 4 — Functions and Decomposition

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO019 | Create | Bir davranış için input, precondition, output, postcondition ve failure içeren function contract yazabilmek | Lab 13 |
| V01-LO020 | Analyze | Function call ve return akışını state değişimleriyle trace edebilmek | Chapter 13 assessment |
| V01-LO021 | Evaluate | Parametre listesini gerekli ve yeterli girdilere indirip kararını açıklayabilmek | Lab 14 |
| V01-LO022 | Analyze | Scope, lifetime, shadowing ve side effect davranışını verilen program modelinde belirleyebilmek | Lab 15 |
| V01-LO023 | Apply | Side effect içeren davranışı pure core ve boundary effect olarak ayırabilmek | Chapter 15 challenge |
| V01-LO024 | Create | Çok adımlı problemi cohesive ve test edilebilir fonksiyonlardan oluşan function map'e dönüştürebilmek | Lab 16 + Mini Project 04 |

## Module 5 — Structured Data and Recursion

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO025 | Apply | Bir koleksiyonu güvenli biçimde traverse ederek filter, map veya aggregate sonucu üretebilmek | Lab 17 |
| V01-LO026 | Analyze | Empty, single-item ve duplicate-value collection edge case'lerini belirleyebilmek | Chapter 17 assessment |
| V01-LO027 | Create | Gereksinimlerden uygun field, type ve invariant'ları olan record modeli tasarlayabilmek | Lab 18 |
| V01-LO028 | Evaluate | İki data model seçeneğini invalid state, duplication ve change cost açısından karşılaştırabilmek | Chapter 18 challenge |
| V01-LO029 | Apply | Base case ve recursive case içeren fonksiyonun call stack'ini doğru trace edebilmek | Lab 19 |
| V01-LO030 | Analyze | Recursive çözümün progress ve termination koşulunu doğrulayabilmek | Chapter 19 assessment |
| V01-LO031 | Create | Messy text input için belgelenmiş normalization ve tokenization kararları olan işleme hattı tasarlayabilmek | Lab 20 + Mini Project 05 |

## Module 6 — Algorithms and Efficiency

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO032 | Apply | Linear search'ü found ve not-found girdilerinde doğru trace edebilmek | Lab 21 |
| V01-LO033 | Analyze | Binary search'ün sorted-input invariant'ını ve search interval değişimini açıklayabilmek | Lab 21 |
| V01-LO034 | Apply | Selection ve insertion temelli sort işlemlerini her pass için trace edebilmek | Lab 22 |
| V01-LO035 | Evaluate | Sorting seçimini stability, mutation, input shape ve simplicity ölçütleriyle gerekçelendirebilmek | Chapter 22 assessment |
| V01-LO036 | Analyze | Basit algoritmalar için operation-count modeli kurup growth class belirleyebilmek | Lab 23 |
| V01-LO037 | Evaluate | İki doğru algoritmayı time, space, readability ve expected input size açısından karşılaştırabilmek | Mini Project 06 |

## Module 7 — Reliability and Program Design

| ID | Bloom Level | Measurable Learning Outcome | Primary Evidence |
| --- | --- | --- | --- |
| V01-LO038 | Analyze | Syntax, runtime, logic, contract ve environmental failure örneklerini doğru sınıflandırabilmek | Lab 24 |
| V01-LO039 | Create | Bir input boundary için açık failure ve recovery contract tasarlayabilmek | Chapter 24 challenge |
| V01-LO040 | Apply | Bir failure'ı yeniden üretip minimal failing case oluşturabilmek | Lab 25 |
| V01-LO041 | Analyze | En az üç debug hipotezini kontrollü deney ve kanıtla elemek | Lab 25 debug log |
| V01-LO042 | Create | Function contract'tan normal, boundary ve invalid input test seti üretebilmek | Lab 26 |
| V01-LO043 | Evaluate | Bir test suite'in risk kapsamını ve kör noktalarını açıklayabilmek | Chapter 26 assessment |
| V01-LO044 | Apply | Test güvencesi altında küçük adımlarla behavior-preserving refactoring yapabilmek | Lab 27 |
| V01-LO045 | Evaluate | Refactoring sonucunu readability, cohesion, duplication ve complexity ölçütleriyle savunabilmek | Chapter 27 review |
| V01-LO046 | Create | Ölçülebilir gereksinimlerden modüler, test edilmiş ve açıklanabilir küçük program tasarlayıp teslim edebilmek | Lab 28 + Capstone |

## Bloom Distribution

| Bloom Level | Outcome Count | Curriculum Role |
| --- | ---: | --- |
| Remember | 0 | Ezber tek başına Volume yeterliği değildir; quiz sorularında destekleyici olarak kullanılır. |
| Understand | 3 | İlk zihinsel modeller ve teknik iletişim |
| Apply | 12 | Temel programlama davranışını güvenilir uygulama |
| Analyze | 13 | Trace, decomposition, failure ve algorithm inceleme |
| Evaluate | 8 | Trade-off, kalite ve seçim gerekçesi |
| Create | 10 | Algorithm, model, test ve program tasarımı |
| **Total** | **46** | Ölçülebilir Volume yeterlik seti |

## Traceability Rules

- Her LO en az bir Chapter assessment ve bir practice kanıtına bağlanmalıdır.
- Mini Project'ler bir modül içindeki birden fazla LO'yu bütünleştirmelidir.
- Capstone V01-LO046'yı doğrudan; V01-LO005, V01-LO006, V01-LO012, V01-LO018, V01-LO024, V01-LO027, V01-LO037, V01-LO041, V01-LO042 ve V01-LO045'i destekleyici olarak ölçmelidir.
- Bir outcome metni değişirse ilgili Chapter, lab, project ve assessment kayıtları aynı değişiklik kapsamında incelenmelidir.
- Başarı, yalnızca quiz puanıyla kanıtlanamaz.

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

1. Anderson, Lorin W. ve Krathwohl, David R., eds. *A Taxonomy for Learning, Teaching, and Assessing*. Longman, 2001.
2. ACM ve IEEE Computer Society. [Computing Curricula 2020](https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf). 2020.
3. ACM ve IEEE Computer Society. [Software Engineering 2014 Curriculum Guidelines](https://www.acm.org/binaries/content/assets/education/se2014.pdf). 2015.
