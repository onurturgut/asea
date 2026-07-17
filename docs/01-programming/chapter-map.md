---
document_type: "supporting-document"
supporting_document_id: "V01-SD-CMAP-001"
supporting_document_type: "Chapter Map"
title: "Volume 01 Chapter Map"
version: "1.2.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Chapter Map

## Purpose

Bu harita Chapter içeriklerini yazmaz. Her Chapter'ın kapsam, bağımlılık, uygulama ve assessment sözleşmesini tanımlar. Bütün Chapter'lar yazım aşamasında [ASEA Chapter Standard v2.0](../standards/chapter-standard-v2.md) yapısını kullanmalıdır.

## Scope

This document governs the Chapter Map records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Chapter Map data within Volume 01.
- **Owner Role:** Curriculum Architect.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Chapter Map records.

## Chapter 01 — What Is Programming?

- **Chapter Number:** 01
- **Chapter ID:** V01-C01
- **Learning Outcome IDs:** V01-LO001, V01-LO002
- **Chapter Name:** What Is Programming? — Programlama ve Hesaplama
- **Difficulty:** Beginner
- **Estimated Study Time:** 3-4 hours
- **Objective:** Program, algorithm, instruction ve computation kavramlarını ayırmak; programlamayı problem çözme aracı olarak konumlandırmak.
- **Learning Objectives:** Program ile algoritma farkını örnekle açıklamak; bir günlük süreci kesin talimatlara dönüştürmek.
- **Produced Competencies:** Program ve algoritmayı ayırma; kesin, sıralı ve test edilebilir talimat yazma.
- **Prerequisites:** Volume 00 çalışma ve yansıtma döngüsünü uygulayabilmek.
- **Prerequisite IDs:** `V00`
- **Core Concepts:** Program, instruction, computation, input, process, output.
- **Supporting Concepts:** Determinism, automation, correctness, programming language.
- **Common Mistakes:** Programlamayı sözdizimi ezberi sanmak; belirsiz talimatı yürütülebilir kabul etmek.
- **Best Practices:** Önce beklenen sonucu tanımlamak; talimatları test edilebilir yazmak.
- **Related Lab:** [`V01-C01-L01` — Human Instruction Interpreter](./chapter-blueprints/01-what-is-programming.md).
- **Related Assessment:** [`V01-C01-AS01`](./assessment.md).
- **Related Challenge:** `V01-C01-CH01` — Ambiguous Recipe Repair.
- **Related Project:** [`V01-P01` — Mini Project 01 — Instruction Simulator.](./projects.md)
- **Related Interview:** `V01-C01-IV01` — Program ve algoritma ayrımını iki dakikada açıklama.
- **Assessment Type:** 8 soruluk quiz, 2 açık uçlu soru, Lab 01 rubriği, bir belirsizlik yansıtması.
- **Related Next Chapter:** `V01-C02` — 02 — How Computers Execute Programs.

## Chapter 02 — How Computers Execute Programs

- **Chapter Number:** 02
- **Chapter ID:** V01-C02
- **Learning Outcome IDs:** V01-LO003, V01-LO004
- **Chapter Name:** How Computers Execute Programs — Yürütme Modeli
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Talimat, bellek, processor, runtime, input ve output ilişkisi için doğru başlangıç modeli kurmak.
- **Learning Objectives:** Basit bir talimat dizisinin yürütmesini trace etmek; source code ile running program farkını açıklamak.
- **Produced Competencies:** Execution-state tracing; source code, runtime, memory, input ve output ilişkisini açıklama.
- **Prerequisites:** Chapter 01'de instruction ve computation ayrımını göstermek.
- **Prerequisite IDs:** `V01-C01`
- **Core Concepts:** CPU abstraction, memory, instruction sequence, runtime, state.
- **Supporting Concepts:** Source code, interpreter, compiler, process, storage.
- **Common Mistakes:** Bilgisayarın niyeti anladığını varsaymak; memory ile persistent storage'ı eşitlemek.
- **Best Practices:** Yürütmeyi adım adım izlemek; soyut modelin sınırlarını belirtmek.
- **Related Lab:** [`V01-C02-L01` — Trace a Tiny Machine](./chapter-blueprints/02-how-computers-execute-programs.md).
- **Related Assessment:** [`V01-C02-AS01`](./assessment.md).
- **Related Challenge:** `V01-C02-CH01` — Predict the Final Machine State.
- **Related Project:** [`V01-P01` — Mini Project 01 — Instruction Simulator.](./projects.md)
- **Related Interview:** `V01-C02-IV01` — Source code çalıştığında hangi aşamalardan geçer?
- **Assessment Type:** 8 soruluk quiz, execution trace açıklaması, Lab 02 rubriği, model sınırı yansıtması.
- **Related Next Chapter:** `V01-C03` — 03 — Problem Definition and Decomposition.

## Chapter 03 — Problem Definition and Decomposition

- **Chapter Number:** 03
- **Chapter ID:** V01-C03
- **Learning Outcome IDs:** V01-LO005
- **Chapter Name:** Problem Definition and Decomposition — Problemi Sınırlamak
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Belirsiz isteği girdi, çıktı, constraint, assumption ve alt problemlere dönüştürmek.
- **Learning Objectives:** Verilen senaryo için problem contract yazmak; decomposition tree ile çözümü bağımsız alt görevlere ayırmak.
- **Produced Competencies:** Gereksinim netleştirme, problem framing ve bağımsız alt problemlere decomposition.
- **Prerequisites:** Chapter 02'de input-process-output yürütmesini trace etmek.
- **Prerequisite IDs:** `V01-C01`, `V01-C02`
- **Core Concepts:** Problem statement, input, output, constraint, decomposition.
- **Supporting Concepts:** Stakeholder, assumption, edge case, scope, acceptance criterion.
- **Common Mistakes:** Çözümü problem sanmak; kapsam ve varsayımları gizlemek.
- **Best Practices:** Örneklerle problem sınırını test etmek; alt problemleri tek sorumluluklu tutmak.
- **Related Lab:** [`V01-C03-L01` — Decompose a Ticket Pricing Problem](./chapter-blueprints/03-problem-definition-and-decomposition.md).
- **Related Assessment:** [`V01-C03-AS01`](./assessment.md).
- **Related Challenge:** `V01-C03-CH01` — Find Missing Requirements.
- **Related Project:** [`V01-P01` — Mini Project 01 — Instruction Simulator.](./projects.md)
- **Related Interview:** `V01-C03-IV01` — Belirsiz bir isteği kodlamadan önce nasıl netleştirirsiniz?
- **Assessment Type:** 10 soruluk quiz, problem contract incelemesi, Lab 03 rubriği, varsayım yansıtması.
- **Related Next Chapter:** `V01-C04` — 04 — Algorithms, Pseudocode, and Tracing.

## Chapter 04 — Algorithms, Pseudocode, and Tracing

- **Chapter Number:** 04
- **Chapter ID:** V01-C04
- **Learning Outcome IDs:** V01-LO006
- **Chapter Name:** Algorithms, Pseudocode, and Tracing — Çözümü Kesinleştirmek
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Çözüm adımlarını bir dile bağlı olmadan sonlanan, trace edilebilir algoritmaya dönüştürmek.
- **Learning Objectives:** Problem contract'tan pseudocode üretmek; trace table ile iki normal ve bir edge case sonucu doğrulamak.
- **Produced Competencies:** Sonlanan algoritma tasarlama, pseudocode yazma ve trace table ile doğrulama.
- **Prerequisites:** Chapter 03'te doğrulanabilir problem contract ve decomposition tree üretmek.
- **Prerequisite IDs:** `V01-C03`
- **Core Concepts:** Algorithm, pseudocode, trace table, precondition, postcondition.
- **Supporting Concepts:** Sequence, termination, correctness, dry run, invariant intuition.
- **Common Mistakes:** Pseudocode'u belirli dil sözdizimine çevirmek; termination koşulunu belirtmemek.
- **Best Practices:** Adımları tek anlamlı yazmak; örnekleri koddan önce trace etmek.
- **Related Lab:** [`V01-C04-L01` — Design and Trace a Fare Algorithm](./chapter-blueprints/04-algorithms-pseudocode-and-tracing.md).
- **Related Assessment:** [`V01-C04-AS01`](./assessment.md).
- **Related Challenge:** `V01-C04-CH01` — Repair a Non-Terminating Algorithm.
- **Related Project:** [`V01-P01` — Mini Project 01 — Instruction Simulator.](./projects.md)
- **Related Interview:** `V01-C04-IV01` — Bir algoritmanın doğru ve sonlanan olduğunu nasıl gösterirsiniz?
- **Assessment Type:** 10 soruluk quiz, pseudocode savunması, Lab 04 rubriği, trace hatası yansıtması.
- **Related Next Chapter:** `V01-C05` — 05 — Values and Data Types.

## Chapter 05 — Values and Data Types

- **Chapter Number:** 05
- **Chapter ID:** V01-C05
- **Learning Outcome IDs:** V01-LO007, V01-LO008
- **Chapter Name:** Values and Data Types — Veriyi Temsil Etmek
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Program verisini value, type ve representation sınırlarıyla modellemek.
- **Learning Objectives:** Örnek değerleri uygun türlere sınıflandırmak; type mismatch ve conversion riskini tespit etmek.
- **Produced Competencies:** Type ve representation reasoning; conversion sırasında anlam ve precision kaybını değerlendirme.
- **Prerequisites:** Chapter 04'te algoritmanın girdi ve ara değerlerini göstermek.
- **Prerequisite IDs:** `V01-C02`, `V01-C04`
- **Core Concepts:** Value, primitive type, number, text, Boolean, absence.
- **Supporting Concepts:** Representation, literal, conversion, precision, equality.
- **Common Mistakes:** Görünüşü aynı değerleri aynı tür sanmak; conversion kaybını göz ardı etmek.
- **Best Practices:** Tür beklentisini açık yazmak; conversion'ı boundary'de doğrulamak.
- **Related Lab:** [`V01-C05-L01` — Classify and Convert Input Values](./chapter-blueprints/05-values-and-data-types.md).
- **Related Assessment:** [`V01-C05-AS01`](./assessment.md).
- **Related Challenge:** `V01-C05-CH01` — Detect Lossy Conversions.
- **Related Project:** [`V01-P02` — Mini Project 02 — Data Transformation Console.](./projects.md)
- **Related Interview:** `V01-C05-IV01` — Tür bilgisi hangi hata sınıflarını önler?
- **Assessment Type:** 10 soruluk quiz, type-choice açıklaması, Lab 05 rubriği, conversion yansıtması.
- **Related Next Chapter:** `V01-C06` — 06 — Variables and State.

## Chapter 06 — Variables and State

- **Chapter Number:** 06
- **Chapter ID:** V01-C06
- **Learning Outcome IDs:** V01-LO009, V01-LO010
- **Chapter Name:** Variables and State — Değişimi İzlemek
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Değişkeni isim, değer ve zaman içindeki state değişimi olarak anlamak.
- **Learning Objectives:** Assignment dizisinde state table üretmek; constant ve değişebilir state kullanımını gerekçelendirmek.
- **Produced Competencies:** Variable-state tracing; constant ve mutable state seçimini gerekçelendirme.
- **Prerequisites:** Chapter 05'te değer ve türleri doğru sınıflandırmak.
- **Prerequisite IDs:** `V01-C05`
- **Core Concepts:** Variable, binding, assignment, state, constant.
- **Supporting Concepts:** Initialization, reassignment, naming, lifetime intuition.
- **Common Mistakes:** Assignment ile equality'yi karıştırmak; başlangıç değerini belirsiz bırakmak.
- **Best Practices:** Anlamlı isim seçmek; değişebilir state'i en aza indirmek.
- **Related Lab:** [`V01-C06-L01` — Trace an Account State](./chapter-blueprints/06-variables-and-state.md).
- **Related Assessment:** [`V01-C06-AS01`](./assessment.md).
- **Related Challenge:** `V01-C06-CH01` — Remove Unnecessary Mutation.
- **Related Project:** [`V01-P02` — Mini Project 02 — Data Transformation Console.](./projects.md)
- **Related Interview:** `V01-C06-IV01` — Değişebilir state hangi sorunları büyütebilir?
- **Assessment Type:** 8 soruluk quiz, state trace açıklaması, Lab 06 rubriği, naming yansıtması.
- **Related Next Chapter:** `V01-C07` — 07 — Operators and Expressions.

## Chapter 07 — Operators and Expressions

- **Chapter Number:** 07
- **Chapter ID:** V01-C07
- **Learning Outcome IDs:** V01-LO011
- **Chapter Name:** Operators and Expressions — Değer Üretmek
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Operand, operator, precedence ve evaluation ile yeni değerlerin nasıl üretildiğini göstermek.
- **Learning Objectives:** Bileşik expression sonucunu ara adımlarla hesaplamak; belirsiz ifadeyi grouping ile açıklığa kavuşturmak.
- **Produced Competencies:** Expression evaluation, precedence analizi ve açık grouping kullanımı.
- **Prerequisites:** Chapter 05-06'da tür ve state trace'i üretmek.
- **Prerequisite IDs:** `V01-C05`, `V01-C06`
- **Core Concepts:** Expression, operator, operand, precedence, evaluation.
- **Supporting Concepts:** Arithmetic, comparison, coercion, grouping, short-circuit preview.
- **Common Mistakes:** Precedence'i tahmin etmek; tür dönüşümünü görünmez kabul etmek.
- **Best Practices:** Okunabilir grouping kullanmak; ara sonuç ve türü trace etmek.
- **Related Lab:** [`V01-C07-L01` — Build an Expression Evaluator Table](./chapter-blueprints/07-operators-and-expressions.md).
- **Related Assessment:** [`V01-C07-AS01`](./assessment.md).
- **Related Challenge:** `V01-C07-CH01` — Explain Surprising Results.
- **Related Project:** [`V01-P02` — Mini Project 02 — Data Transformation Console.](./projects.md)
- **Related Interview:** `V01-C07-IV01` — Bir expression'ı güvenilir biçimde nasıl değerlendirirsiniz?
- **Assessment Type:** 10 soruluk quiz, evaluation trace, Lab 07 rubriği, ambiguity yansıtması.
- **Related Next Chapter:** `V01-C08` — 08 — Input, Output, and Data Transformation.

## Chapter 08 — Input, Output, and Data Transformation

- **Chapter Number:** 08
- **Chapter ID:** V01-C08
- **Learning Outcome IDs:** V01-LO012
- **Chapter Name:** Input, Output, and Data Transformation — Veri Akışı
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Dış girdiyi doğrulama, normalize etme, dönüştürme ve çıktı üretme hattı kurmak.
- **Learning Objectives:** Girdi sözleşmesi ve invalid case'ler tanımlamak; en az üç aşamalı transformation pipeline tasarlamak.
- **Produced Competencies:** Input validation, normalization, transformation ve output pipeline tasarımı.
- **Prerequisites:** Chapter 04 ve 07'de algorithm ve expression trace etmek.
- **Prerequisite IDs:** `V01-C04`, `V01-C07`
- **Core Concepts:** Input, output, parsing, validation, transformation.
- **Supporting Concepts:** Normalization, formatting, boundary, error message, pipeline.
- **Common Mistakes:** Dış girdiye güvenmek; parsing, validation ve transformation'ı tek adım yapmak.
- **Best Practices:** Boundary'de doğrulamak; her dönüşümü tek amaçlı tutmak.
- **Related Lab:** [`V01-C08-L01` — Normalize a Registration Record](./chapter-blueprints/08-input-output-and-data-transformation.md).
- **Related Assessment:** [`V01-C08-AS01`](./assessment.md).
- **Related Challenge:** `V01-C08-CH01` — Design Invalid-Input Feedback.
- **Related Project:** [`V01-P02` — Mini Project 02 — Data Transformation Console.](./projects.md)
- **Related Interview:** `V01-C08-IV01` — Kullanıcı girdisi neden güven sınırı kabul edilir?
- **Assessment Type:** 10 soruluk quiz, pipeline açıklaması, Lab 08 rubriği, invalid-input yansıtması.
- **Related Next Chapter:** `V01-C09` — 09 — Boolean Logic and Truth.

## Chapter 09 — Boolean Logic and Truth

- **Chapter Number:** 09
- **Chapter ID:** V01-C09
- **Learning Outcome IDs:** V01-LO013, V01-LO014
- **Chapter Name:** Boolean Logic and Truth — Kararların Temeli
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Boolean value, comparison ve logical operator'larla doğrulanabilir karar ifadeleri kurmak.
- **Learning Objectives:** Truth table oluşturmak; bileşik Boolean expression'ı eşdeğer daha okunabilir biçime dönüştürmek.
- **Produced Competencies:** Boolean reasoning, truth-table üretimi ve predicate decomposition.
- **Prerequisites:** Chapter 07'de comparison ve expression evaluation yapmak.
- **Prerequisite IDs:** `V01-C07`
- **Core Concepts:** Boolean, truth table, comparison, AND, OR, NOT.
- **Supporting Concepts:** Short-circuit evaluation, predicate, De Morgan intuition, truthiness boundary.
- **Common Mistakes:** Doğal dildeki "ve/veya" ile operator semantics'i karıştırmak; negation kapsamını kaçırmak.
- **Best Practices:** Koşulu adlandırmak; truth table ile edge case doğrulamak.
- **Related Lab:** [`V01-C09-L01` — Model Access Rules with Truth Tables](./chapter-blueprints/09-boolean-logic-and-truth.md).
- **Related Assessment:** [`V01-C09-AS01`](./assessment.md).
- **Related Challenge:** `V01-C09-CH01` — Simplify a Complex Predicate.
- **Related Project:** [`V01-P03` — Mini Project 03 — Rule-Based Workflow.](./projects.md)
- **Related Interview:** `V01-C09-IV01` — Bileşik bir koşulu nasıl test edersiniz?
- **Assessment Type:** 10 soruluk quiz, predicate açıklaması, Lab 09 rubriği, negation yansıtması.
- **Related Next Chapter:** `V01-C10` — 10 — Conditional Execution.

## Chapter 10 — Conditional Execution

- **Chapter Number:** 10
- **Chapter ID:** V01-C10
- **Learning Outcome IDs:** V01-LO015, V01-LO016
- **Chapter Name:** Conditional Execution — Karar Akışı
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Decision table'ı eksiksiz ve erişilebilir conditional branch'lere dönüştürmek.
- **Learning Objectives:** Bir karar tablosundan conditional flow tasarlamak; branch coverage için test girdileri seçmek.
- **Produced Competencies:** Decision modeling, branch completeness analizi ve conditional-flow tasarımı.
- **Prerequisites:** Chapter 08-09'da doğrulanmış veri ve Boolean predicate üretmek.
- **Prerequisite IDs:** `V01-C08`, `V01-C09`
- **Core Concepts:** Condition, branch, if/else, selection, default case.
- **Supporting Concepts:** Guard clause, branch order, reachability, decision table.
- **Common Mistakes:** Durumları eksik bırakmak; özel koşulu genel koşuldan sonra yerleştirmek.
- **Best Practices:** Karar tablosu kullanmak; branch'leri mutually exclusive ve okunabilir kılmak.
- **Related Lab:** [`V01-C10-L01` — Implement a Shipping Decision Table](./chapter-blueprints/10-conditional-execution.md).
- **Related Assessment:** [`V01-C10-AS01`](./assessment.md).
- **Related Challenge:** `V01-C10-CH01` — Find an Unreachable Branch.
- **Related Project:** [`V01-P03` — Mini Project 03 — Rule-Based Workflow.](./projects.md)
- **Related Interview:** `V01-C10-IV01` — Branch sırası sonucu nasıl değiştirebilir?
- **Assessment Type:** 10 soruluk quiz, decision review, Lab 10 rubriği, missed-case yansıtması.
- **Related Next Chapter:** `V01-C11` — 11 — Repetition and Loops.

## Chapter 11 — Repetition and Loops

- **Chapter Number:** 11
- **Chapter ID:** V01-C11
- **Learning Outcome IDs:** V01-LO017
- **Chapter Name:** Repetition and Loops — Sonlanan Tekrar
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Tekrarlanan işlemleri initialization, condition, update ve termination ilişkisiyle tasarlamak.
- **Learning Objectives:** Loop state'ini iteration table ile izlemek; finite input için loop'un neden sonlandığını açıklamak.
- **Produced Competencies:** Loop design, iteration-state tracing ve termination reasoning.
- **Prerequisites:** Chapter 06 ve 09-10'da state, predicate ve branch kullanmak.
- **Prerequisite IDs:** `V01-C06`, `V01-C09`, `V01-C10`
- **Core Concepts:** Iteration, loop, counter, accumulator, termination.
- **Supporting Concepts:** Sentinel, traversal, off-by-one, loop invariant intuition.
- **Common Mistakes:** Update'i unutmak; sınır koşulunda bir fazla veya eksik iteration yapmak.
- **Best Practices:** Termination'ı koddan önce yazmak; invariant ve boundary case kontrol etmek.
- **Related Lab:** [`V01-C11-L01` — Trace and Repair Repetition](./chapter-blueprints/11-repetition-and-loops.md).
- **Related Assessment:** [`V01-C11-AS01`](./assessment.md).
- **Related Challenge:** `V01-C11-CH01` — Prove a Loop Terminates.
- **Related Project:** [`V01-P03` — Mini Project 03 — Rule-Based Workflow.](./projects.md)
- **Related Interview:** `V01-C11-IV01` — Infinite loop'u sistematik biçimde nasıl araştırırsınız?
- **Assessment Type:** 10 soruluk quiz, loop trace, Lab 11 rubriği, off-by-one yansıtması.
- **Related Next Chapter:** `V01-C12` — 12 — Nested and Composite Control Flow.

## Chapter 12 — Nested and Composite Control Flow

- **Chapter Number:** 12
- **Chapter ID:** V01-C12
- **Learning Outcome IDs:** V01-LO018
- **Chapter Name:** Nested and Composite Control Flow — Karmaşıklığı Yönetmek
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** İç içe koşul ve loop'ların davranışını izlemek, karmaşık akışı daha açık parçalara dönüştürmek.
- **Learning Objectives:** Nested flow için execution path çıkarmak; davranışı koruyarak nesting derinliğini azaltmak.
- **Produced Competencies:** Composite control-flow analizi, path tracing ve davranışı koruyan sadeleştirme.
- **Prerequisites:** Chapter 10-11'de conditional ve loop tasarlamak.
- **Prerequisite IDs:** `V01-C10`, `V01-C11`
- **Core Concepts:** Nested branch, nested loop, execution path, control-flow complexity.
- **Supporting Concepts:** Early exit, guard clause, state machine intuition, Cartesian iteration.
- **Common Mistakes:** Nesting içinde state değişimini kaybetmek; tüm kombinasyonları test etmemek.
- **Best Practices:** Akış yollarını listelemek; early exit ve adlandırılmış predicate kullanmak.
- **Related Lab:** [`V01-C12-L01` — Simplify a Multi-Rule Scheduler](./chapter-blueprints/12-nested-and-composite-control-flow.md).
- **Related Assessment:** [`V01-C12-AS01`](./assessment.md).
- **Related Challenge:** `V01-C12-CH01` — Cover Every Execution Path.
- **Related Project:** [`V01-P03` — Mini Project 03 — Rule-Based Workflow.](./projects.md)
- **Related Interview:** `V01-C12-IV01` — İç içe kontrol akışını ne zaman parçalarsınız?
- **Assessment Type:** 10 soruluk quiz, path analysis, Lab 12 rubriği, complexity yansıtması.
- **Related Next Chapter:** `V01-C13` — 13 — Functions and Contracts.

## Chapter 13 — Functions and Contracts

- **Chapter Number:** 13
- **Chapter ID:** V01-C13
- **Learning Outcome IDs:** V01-LO019, V01-LO020
- **Chapter Name:** Functions and Contracts — Davranışı Adlandırmak
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Fonksiyonu input, behavior, output ve failure koşulları olan bir sözleşme olarak tasarlamak.
- **Learning Objectives:** Verilen davranış için function contract yazmak; çağrı ve return akışını trace etmek.
- **Produced Competencies:** Function contract tasarımı, call/return tracing ve failure boundary tanımlama.
- **Prerequisites:** Chapter 04 ve 12'de algorithm ve control flow üretmek.
- **Prerequisite IDs:** `V01-C04`, `V01-C12`
- **Core Concepts:** Function, call, contract, precondition, postcondition.
- **Supporting Concepts:** Signature, abstraction, responsibility, invocation, return.
- **Common Mistakes:** Fonksiyonu yalnızca kod grubu sanmak; hidden input kullanmak.
- **Best Practices:** Davranışı fiille adlandırmak; contract'ı uygulamadan önce yazmak.
- **Related Lab:** [`V01-C13-L01` — Design Function Contracts](./chapter-blueprints/13-functions-and-contracts.md).
- **Related Assessment:** [`V01-C13-AS01`](./assessment.md).
- **Related Challenge:** `V01-C13-CH01` — Detect a Contract Violation.
- **Related Project:** [`V01-P04` — Mini Project 04 — Function-Based Utility Toolkit.](./projects.md)
- **Related Interview:** `V01-C13-IV01` — İyi bir function contract hangi bilgileri içerir?
- **Assessment Type:** 10 soruluk quiz, contract review, Lab 13 rubriği, abstraction yansıtması.
- **Related Next Chapter:** `V01-C14` — 14 — Parameters and Return Values.

## Chapter 14 — Parameters and Return Values

- **Chapter Number:** 14
- **Chapter ID:** V01-C14
- **Learning Outcome IDs:** V01-LO021
- **Chapter Name:** Parameters and Return Values — Veri Akışını Tasarlamak
- **Difficulty:** Beginner
- **Estimated Study Time:** 4-5 hours
- **Objective:** Fonksiyon girdilerini ve çıktısını açık, küçük ve birleştirilebilir biçimde modellemek.
- **Learning Objectives:** Parametre listesini gerekli veriye indirgemek; print ile return arasındaki davranış farkını trace etmek.
- **Produced Competencies:** Function interface, parameter ve return-value modelleme.
- **Prerequisites:** Chapter 07 ve 13'te expression ve function contract kullanmak.
- **Prerequisite IDs:** `V01-C07`, `V01-C13`
- **Core Concepts:** Parameter, argument, return value, data flow, composition.
- **Supporting Concepts:** Default value, validation, multiple-result modeling, command-query intuition.
- **Common Mistakes:** Output üretmekle value return etmeyi karıştırmak; gereksiz çok parametre taşımak.
- **Best Practices:** Açık return contract kullanmak; ilişkili veriyi anlamlı modelde toplamak.
- **Related Lab:** [`V01-C14-L01` — Refactor Inputs and Outputs](./chapter-blueprints/14-parameters-and-return-values.md).
- **Related Assessment:** [`V01-C14-AS01`](./assessment.md).
- **Related Challenge:** `V01-C14-CH01` — Replace Hidden Output with Return Values.
- **Related Project:** [`V01-P04` — Mini Project 04 — Function-Based Utility Toolkit.](./projects.md)
- **Related Interview:** `V01-C14-IV01` — Bir fonksiyon ne zaman değer döndürmelidir?
- **Assessment Type:** 8 soruluk quiz, data-flow trace, Lab 14 rubriği, interface yansıtması.
- **Related Next Chapter:** `V01-C15` — 15 — Scope, Lifetime, and Side Effects.

## Chapter 15 — Scope, Lifetime, and Side Effects

- **Chapter Number:** 15
- **Chapter ID:** V01-C15
- **Learning Outcome IDs:** V01-LO022, V01-LO023
- **Chapter Name:** Scope, Lifetime, and Side Effects — Görünürlük ve Etki
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** İsimlerin nerede erişilebilir olduğunu, değerlerin ne kadar yaşadığını ve dış state değişiminin etkisini anlamak.
- **Learning Objectives:** Nested scope içinde identifier resolution trace etmek; side effect'i tespit edip daha açık veri akışına dönüştürmek.
- **Produced Competencies:** Scope/lifetime analizi, side-effect kontrolü ve pure-core ayrımı.
- **Prerequisites:** Chapter 06 ve 13-14'te state ve function data flow izlemek.
- **Prerequisite IDs:** `V01-C06`, `V01-C13`, `V01-C14`
- **Core Concepts:** Scope, lifetime, local state, global state, side effect.
- **Supporting Concepts:** Shadowing, closure intuition, purity, referential transparency intuition.
- **Common Mistakes:** Global state'e sessizce bağımlı olmak; aynı ismi farklı scope'larda belirsiz kullanmak.
- **Best Practices:** State'i en dar scope'ta tutmak; side effect'i boundary'de toplamak.
- **Related Lab:** [`V01-C15-L01` — Diagnose Scope and Mutation](./chapter-blueprints/15-scope-lifetime-and-side-effects.md).
- **Related Assessment:** [`V01-C15-AS01`](./assessment.md).
- **Related Challenge:** `V01-C15-CH01` — Convert a Stateful Function to a Pure Core.
- **Related Project:** [`V01-P04` — Mini Project 04 — Function-Based Utility Toolkit.](./projects.md)
- **Related Interview:** `V01-C15-IV01` — Side effect test etmeyi neden zorlaştırır?
- **Assessment Type:** 10 soruluk quiz, scope trace, Lab 15 rubriği, mutation yansıtması.
- **Related Next Chapter:** `V01-C16` — 16 — Functional Decomposition and Reuse.

## Chapter 16 — Functional Decomposition and Reuse

- **Chapter Number:** 16
- **Chapter ID:** V01-C16
- **Learning Outcome IDs:** V01-LO024
- **Chapter Name:** Functional Decomposition and Reuse — Modüler Çözüm
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Büyük bir algoritmayı cohesive, loosely coupled ve yeniden kullanılabilir fonksiyonlara ayırmak.
- **Learning Objectives:** Çok adımlı problemi function map'e dönüştürmek; iki decomposition seçeneğini coupling ve testability ile karşılaştırmak.
- **Produced Competencies:** Functional decomposition, cohesion, loose coupling ve kontrollü reuse.
- **Prerequisites:** Chapter 03-04 ve 13-15'te decomposition ve function boundaries kurmak.
- **Prerequisite IDs:** `V01-C03`, `V01-C04`, `V01-C13`, `V01-C14`, `V01-C15`
- **Core Concepts:** Decomposition, cohesion, coupling, reuse, orchestration.
- **Supporting Concepts:** Abstraction level, dependency direction, helper function, pipeline.
- **Common Mistakes:** Her satırı fonksiyona çevirmek; shared mutable state ile sahte reuse üretmek.
- **Best Practices:** Tek abstraction seviyesinde çalışmak; contract üzerinden composition yapmak.
- **Related Lab:** [`V01-C16-L01` — Decompose a Report Generator](./chapter-blueprints/16-functional-decomposition-and-reuse.md).
- **Related Assessment:** [`V01-C16-AS01`](./assessment.md).
- **Related Challenge:** `V01-C16-CH01` — Compare Two Function Maps.
- **Related Project:** [`V01-P04` — Mini Project 04 — Function-Based Utility Toolkit.](./projects.md)
- **Related Interview:** `V01-C16-IV01` — Fonksiyon sınırını hangi ölçütlerle belirlersiniz?
- **Assessment Type:** 10 soruluk quiz, design comparison, Lab 16 rubriği, boundary yansıtması.
- **Related Next Chapter:** `V01-C17` — 17 — Collections and Iteration.

## Chapter 17 — Collections and Iteration

- **Chapter Number:** 17
- **Chapter ID:** V01-C17
- **Learning Outcome IDs:** V01-LO025, V01-LO026
- **Chapter Name:** Collections and Iteration — Çoklu Veriyi İşlemek
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Sıralı değer koleksiyonlarını modellemek, traverse etmek ve aggregate sonuç üretmek.
- **Learning Objectives:** Collection traversal için doğru loop tasarlamak; filter, map ve reduce davranışlarını dil bağımsız açıklamak.
- **Produced Competencies:** Collection traversal, filter/map/aggregate kullanımı ve collection edge-case analizi.
- **Prerequisites:** Chapter 11 ve 14-16'da loop ve function composition yapmak.
- **Prerequisite IDs:** `V01-C11`, `V01-C14`, `V01-C15`, `V01-C16`
- **Core Concepts:** Collection, array, index, traversal, aggregation.
- **Supporting Concepts:** Mapping, filtering, reduction, empty collection, bounds.
- **Common Mistakes:** Index sınırını aşmak; collection'ı iteration sırasında kontrolsüz değiştirmek.
- **Best Practices:** Empty case'i test etmek; intent'e uygun traversal seçmek.
- **Related Lab:** [`V01-C17-L01` — Analyze a Score Collection](./chapter-blueprints/17-collections-and-iteration.md).
- **Related Assessment:** [`V01-C17-AS01`](./assessment.md).
- **Related Challenge:** `V01-C17-CH01` — One Pass or Multiple Passes?
- **Related Project:** [`V01-P05` — Mini Project 05 — Structured Data Processor.](./projects.md)
- **Related Interview:** `V01-C17-IV01` — Map, filter ve reduce hangi problem türlerini temsil eder?
- **Assessment Type:** 10 soruluk quiz, traversal trace, Lab 17 rubriği, empty-case yansıtması.
- **Related Next Chapter:** `V01-C18` — 18 — Records and Data Modeling.

## Chapter 18 — Records and Data Modeling

- **Chapter Number:** 18
- **Chapter ID:** V01-C18
- **Learning Outcome IDs:** V01-LO027, V01-LO028
- **Chapter Name:** Records and Data Modeling — Anlamlı Yapılar
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** İlişkili alanları record/object modelinde birleştirmek ve domain invariant'larını görünür kılmak.
- **Learning Objectives:** Gereksinimden field ve type seçmek; invalid state'i engelleyen data model gerekçesi yazmak.
- **Produced Competencies:** Record/data-model tasarımı, invariant görünürlüğü ve invalid-state azaltma.
- **Prerequisites:** Chapter 05, 14 ve 17'de type, function input ve collection kullanmak.
- **Prerequisite IDs:** `V01-C05`, `V01-C14`, `V01-C17`
- **Core Concepts:** Record, field, object as data, schema, invariant.
- **Supporting Concepts:** Nested data, identity, equality, optional field, normalization intuition.
- **Common Mistakes:** İlişkisiz alanları tek record'da toplamak; invalid state'i modelde serbest bırakmak.
- **Best Practices:** Domain diliyle isimlendirmek; invariant'ı boundary'de doğrulamak.
- **Related Lab:** [`V01-C18-L01` — Model Inventory Records](./chapter-blueprints/18-records-and-data-modeling.md).
- **Related Assessment:** [`V01-C18-AS01`](./assessment.md).
- **Related Challenge:** `V01-C18-CH01` — Make Invalid States Harder to Represent.
- **Related Project:** [`V01-P05` — Mini Project 05 — Structured Data Processor.](./projects.md)
- **Related Interview:** `V01-C18-IV01` — Bir data modelin iyi olduğunu nasıl değerlendirirsiniz?
- **Assessment Type:** 10 soruluk quiz, model review, Lab 18 rubriği, invariant yansıtması.
- **Related Next Chapter:** `V01-C19` — 19 — Recursion and Recursive Thinking.

## Chapter 19 — Recursion and Recursive Thinking

- **Chapter Number:** 19
- **Chapter ID:** V01-C19
- **Learning Outcome IDs:** V01-LO029, V01-LO030
- **Chapter Name:** Recursion and Recursive Thinking — Kendine Benzer Problemler
- **Difficulty:** Beginner
- **Estimated Study Time:** 6-7 hours
- **Objective:** Base case ve daha küçük recursive case ile kendine benzer problemleri modellemek.
- **Learning Objectives:** Recursive call stack'i trace etmek; verilen çözümde base case ve progress condition doğrulamak.
- **Produced Competencies:** Recursive decomposition, call-stack tracing ve termination doğrulama.
- **Prerequisites:** Chapter 10, 13 ve 15'te condition, function call ve lifetime trace etmek.
- **Prerequisite IDs:** `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15`
- **Core Concepts:** Recursion, base case, recursive case, progress, call stack.
- **Supporting Concepts:** Structural recursion, stack depth, iterative alternative, divide intuition.
- **Common Mistakes:** Base case'i eksik bırakmak; problemi küçültmeyen recursive call yazmak.
- **Best Practices:** Önce base case'i tanımlamak; küçük girdilerle call trace yapmak.
- **Related Lab:** [`V01-C19-L01` — Trace Recursive Structures](./chapter-blueprints/19-recursion-and-recursive-thinking.md).
- **Related Assessment:** [`V01-C19-AS01`](./assessment.md).
- **Related Challenge:** `V01-C19-CH01` — Convert Recursion and Iteration.
- **Related Project:** [`V01-P05` — Mini Project 05 — Structured Data Processor.](./projects.md)
- **Related Interview:** `V01-C19-IV01` — Recursion ne zaman doğal, ne zaman gereksizdir?
- **Assessment Type:** 10 soruluk quiz, call-stack trace, Lab 19 rubriği, progress yansıtması.
- **Related Next Chapter:** `V01-C20` — 20 — Strings and Text Processing.

## Chapter 20 — Strings and Text Processing

- **Chapter Number:** 20
- **Chapter ID:** V01-C20
- **Learning Outcome IDs:** V01-LO031
- **Chapter Name:** Strings and Text Processing — Metin Veri Hattı
- **Difficulty:** Beginner
- **Estimated Study Time:** 5-6 hours
- **Objective:** Text'i Unicode farkındalığı olan bir veri koleksiyonu olarak normalize, parse ve özetlemek.
- **Learning Objectives:** Metin işleme pipeline'ı tasarlamak; whitespace, case ve empty input edge case'lerini test etmek.
- **Produced Competencies:** Text normalization, tokenization ve Unicode-aware processing pipeline tasarımı.
- **Prerequisites:** Chapter 08, 14 ve 17'de transformation, function ve collection traversal yapmak.
- **Prerequisite IDs:** `V01-C08`, `V01-C14`, `V01-C17`
- **Core Concepts:** String, character, token, normalization, parsing.
- **Supporting Concepts:** Unicode awareness, case folding intuition, delimiter, whitespace, formatting.
- **Common Mistakes:** Character ile byte'ı eşitlemek; normalization kararını gizlemek.
- **Best Practices:** Text boundary kurallarını belgelemek; pipeline aşamalarını ayrı doğrulamak.
- **Related Lab:** [`V01-C20-L01` — Build a Text Statistics Pipeline](./chapter-blueprints/20-strings-and-text-processing.md).
- **Related Assessment:** [`V01-C20-AS01`](./assessment.md).
- **Related Challenge:** `V01-C20-CH01` — Handle Messy Text Inputs.
- **Related Project:** [`V01-P05` — Mini Project 05 — Structured Data Processor.](./projects.md)
- **Related Interview:** `V01-C20-IV01` — Metin işleme neden yalnızca split işleminden ibaret değildir?
- **Assessment Type:** 10 soruluk quiz, pipeline review, Lab 20 rubriği, normalization yansıtması.
- **Related Next Chapter:** `V01-C21` — 21 — Searching Algorithms.

## Chapter 21 — Searching Algorithms

- **Chapter Number:** 21
- **Chapter ID:** V01-C21
- **Learning Outcome IDs:** V01-LO032, V01-LO033
- **Chapter Name:** Searching Algorithms — Arama Stratejileri
- **Difficulty:** Intermediate
- **Estimated Study Time:** 5-6 hours
- **Objective:** Linear ve binary search'ü input invariant, correctness ve operation count ile karşılaştırmak.
- **Learning Objectives:** İki search algoritmasını trace etmek; sorted-input koşuluna göre uygun algoritmayı seçmek.
- **Produced Competencies:** Search tracing, invariant reasoning ve constraint'e göre search seçimi.
- **Prerequisites:** Chapter 10-11 ve 17'de condition, loop ve collection traversal yapmak.
- **Prerequisite IDs:** `V01-C10`, `V01-C11`, `V01-C17`
- **Core Concepts:** Search, linear search, binary search, target, invariant.
- **Supporting Concepts:** Sorted input, index range, not-found result, comparison count.
- **Common Mistakes:** Unsorted data üzerinde binary search kullanmak; not-found case'i atlamak.
- **Best Practices:** Preconditions'ı contract'a yazmak; bulunan indeks ile değeri ayırmak.
- **Related Lab:** [`V01-C21-L01` — Compare Search Strategies](./chapter-blueprints/21-searching-algorithms.md).
- **Related Assessment:** [`V01-C21-AS01`](./assessment.md).
- **Related Challenge:** `V01-C21-CH01` — Find the First Matching Record.
- **Related Project:** [`V01-P06` — Mini Project 06 — Algorithm Workbench.](./projects.md)
- **Related Interview:** `V01-C21-IV01` — Binary search neden sorted data gerektirir?
- **Assessment Type:** 10 soruluk quiz, algorithm trace, Lab 21 rubriği, selection yansıtması.
- **Related Next Chapter:** `V01-C22` — 22 — Sorting Algorithms.

## Chapter 22 — Sorting Algorithms

- **Chapter Number:** 22
- **Chapter ID:** V01-C22
- **Learning Outcome IDs:** V01-LO034, V01-LO035
- **Chapter Name:** Sorting Algorithms — Düzenleme ve Invariant
- **Difficulty:** Intermediate
- **Estimated Study Time:** 6-7 hours
- **Objective:** Basit comparison-based sorting yaklaşımlarını adım, invariant ve maliyet üzerinden incelemek.
- **Learning Objectives:** Selection ve insertion temelli sorting pass'lerini trace etmek; stability ve in-place trade-off'unu açıklamak.
- **Produced Competencies:** Sorting trace, invariant analizi ve sorting trade-off değerlendirmesi.
- **Prerequisites:** Chapter 11-12 ve 17'de loop, nested flow ve collection mutation izlemek.
- **Prerequisite IDs:** `V01-C11`, `V01-C12`, `V01-C17`
- **Core Concepts:** Sorting, comparison, swap, selection sort, insertion sort.
- **Supporting Concepts:** Stability, in-place, sorted prefix, comparator, duplicate value.
- **Common Mistakes:** Inner-loop sınırını yanlış kurmak; eşit değer davranışını göz ardı etmek.
- **Best Practices:** Her pass invariant'ını yazmak; orijinal veriyi koruma kararını açıklamak.
- **Related Lab:** [`V01-C22-L01` — Trace and Verify Two Sorts](./chapter-blueprints/22-sorting-algorithms.md).
- **Related Assessment:** [`V01-C22-AS01`](./assessment.md).
- **Related Challenge:** `V01-C22-CH01` — Design a Comparator Contract.
- **Related Project:** [`V01-P06` — Mini Project 06 — Algorithm Workbench.](./projects.md)
- **Related Interview:** `V01-C22-IV01` — Sorting algoritması seçerken hız dışında neyi değerlendirirsiniz?
- **Assessment Type:** 10 soruluk quiz, pass trace, Lab 22 rubriği, stability yansıtması.
- **Related Next Chapter:** `V01-C23` — 23 — Algorithmic Complexity and Trade-offs.

## Chapter 23 — Algorithmic Complexity and Trade-offs

- **Chapter Number:** 23
- **Chapter ID:** V01-C23
- **Learning Outcome IDs:** V01-LO036, V01-LO037
- **Chapter Name:** Algorithmic Complexity and Trade-offs — Büyüme Maliyeti
- **Difficulty:** Intermediate
- **Estimated Study Time:** 6-7 hours
- **Objective:** Algoritma maliyetini input size, operation count ve asymptotic growth ile dil bağımsız karşılaştırmak.
- **Learning Objectives:** Basit loop yapılarının time complexity sınıfını gerekçelendirmek; iki çözümü zaman, alan ve simplicity ile karşılaştırmak.
- **Produced Competencies:** Operation counting, temel complexity analizi ve algoritma karşılaştırma.
- **Prerequisites:** Chapter 04, 17 ve 21-22'de algorithm trace ve collection işlemleri yapmak.
- **Prerequisite IDs:** `V01-C04`, `V01-C17`, `V01-C21`, `V01-C22`
- **Core Concepts:** Input size, operation count, time complexity, space complexity, Big O.
- **Supporting Concepts:** Best/average/worst case, constant factor, scalability, benchmark boundary.
- **Common Mistakes:** Big O'yu gerçek süre sanmak; küçük input'ta constant ve simplicity'yi yok saymak.
- **Best Practices:** Maliyet modelini belirtmek; correctness'i optimization'dan önce doğrulamak.
- **Related Lab:** [`V01-C23-L01` — Measure Growth, Explain Trade-offs](./chapter-blueprints/23-algorithmic-complexity-and-trade-offs.md).
- **Related Assessment:** [`V01-C23-AS01`](./assessment.md).
- **Related Challenge:** `V01-C23-CH01` — Choose the Simpler Adequate Algorithm.
- **Related Project:** [`V01-P06` — Mini Project 06 — Algorithm Workbench.](./projects.md)
- **Related Interview:** `V01-C23-IV01` — O(n) her zaman O(n²)'den hızlı mıdır?
- **Assessment Type:** 12 soruluk quiz, trade-off memo, Lab 23 rubriği, premature-optimization yansıtması.
- **Related Next Chapter:** `V01-C24` — 24 — Errors and Failure Modes.

## Chapter 24 — Errors and Failure Modes

- **Chapter Number:** 24
- **Chapter ID:** V01-C24
- **Learning Outcome IDs:** V01-LO038, V01-LO039
- **Chapter Name:** Errors and Failure Modes — Hatanın Anatomisi
- **Difficulty:** Intermediate
- **Estimated Study Time:** 5-6 hours
- **Objective:** Syntax, runtime, logic, contract ve environmental failure'ları ayırmak; kontrollü failure davranışı tasarlamak.
- **Learning Objectives:** Verilen failure'ı kanıta göre sınıflandırmak; bir input boundary için error contract tasarlamak.
- **Produced Competencies:** Failure classification, failure contract ve bounded recovery tasarımı.
- **Prerequisites:** Chapter 08, 12, 15 ve 18'de validation, flow, state ve data invariant kullanmak.
- **Prerequisite IDs:** `V01-C08`, `V01-C12`, `V01-C15`, `V01-C18`
- **Core Concepts:** Error, defect, failure, exception, invalid state.
- **Supporting Concepts:** Fault propagation, error boundary, recovery, fail fast, message quality.
- **Common Mistakes:** Her failure'ı exception olarak ele almak; hatayı sessizce yutmak.
- **Best Practices:** Failure bağlamını korumak; kullanıcı mesajı ile diagnostic bilgiyi ayırmak.
- **Related Lab:** [`V01-C24-L01` — Classify and Contain Failures](./chapter-blueprints/24-errors-and-failure-modes.md).
- **Related Assessment:** [`V01-C24-AS01`](./assessment.md).
- **Related Challenge:** `V01-C24-CH01` — Design a Useful Error Contract.
- **Related Project:** [`V01-CP01` — Capstone preparation.](./projects.md)
- **Related Interview:** `V01-C24-IV01` — Defect, error ve failure arasında nasıl ayrım yaparsınız?
- **Assessment Type:** 10 soruluk quiz, failure analysis, Lab 24 rubriği, recovery yansıtması.
- **Related Next Chapter:** `V01-C25` — 25 — Systematic Debugging.

## Chapter 25 — Systematic Debugging

- **Chapter Number:** 25
- **Chapter ID:** V01-C25
- **Learning Outcome IDs:** V01-LO040, V01-LO041
- **Chapter Name:** Systematic Debugging — Kanıtla Hata Ayıklamak
- **Difficulty:** Intermediate
- **Estimated Study Time:** 6-7 hours
- **Objective:** Debugging'i yeniden üretim, gözlem, hipotez, kontrollü deney ve doğrulama süreci olarak uygulamak.
- **Learning Objectives:** Minimal reproduction oluşturmak; en az üç hipotezi kanıtla elemek ve root cause açıklamak.
- **Produced Competencies:** Hypothesis-driven debugging, minimal reproduction ve evidence-based fix verification.
- **Prerequisites:** Chapter 02, 04 ve 23-24'te execution trace, algorithm ve failure modeli kullanmak.
- **Prerequisite IDs:** `V01-C02`, `V01-C04`, `V01-C23`, `V01-C24`
- **Core Concepts:** Reproduction, observation, hypothesis, experiment, root cause.
- **Supporting Concepts:** Breakpoint, logging, binary isolation, debugger, regression.
- **Common Mistakes:** Rastgele değişiklik yapmak; symptom düzeldiğinde root cause çözülmüş saymak.
- **Best Practices:** Tek değişkenli deney yapmak; düzeltmeden önce failing case'i korumak.
- **Related Lab:** [`V01-C25-L01` — Debug from Symptom to Root Cause](./chapter-blueprints/25-systematic-debugging.md).
- **Related Assessment:** [`V01-C25-AS01`](./assessment.md).
- **Related Challenge:** `V01-C25-CH01` — Minimize a Failing Case.
- **Related Project:** [`V01-CP01` — Capstone preparation.](./projects.md)
- **Related Interview:** `V01-C25-IV01` — Çalışmayan bir programı ilk beş adımda nasıl araştırırsınız?
- **Assessment Type:** 10 soruluk quiz, debug log review, Lab 25 rubriği, bias yansıtması.
- **Related Next Chapter:** `V01-C26` — 26 — Testing Fundamentals.

## Chapter 26 — Testing Fundamentals

- **Chapter Number:** 26
- **Chapter ID:** V01-C26
- **Learning Outcome IDs:** V01-LO042, V01-LO043
- **Chapter Name:** Testing Fundamentals — Davranışı Kanıtlamak
- **Difficulty:** Intermediate
- **Estimated Study Time:** 6-7 hours
- **Objective:** Test case, oracle, boundary ve regression ile fonksiyon davranışını sistematik doğrulamak.
- **Learning Objectives:** Contract'tan normal, boundary ve invalid testler üretmek; bir defect için failing regression test tasarlamak.
- **Produced Competencies:** Test-case ve oracle tasarımı, boundary coverage ve test-suite risk analizi.
- **Prerequisites:** Chapter 10, 13-18 ve 24-25'te branch, contract, data ve failure davranışı kullanmak.
- **Prerequisite IDs:** `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C17`, `V01-C18`, `V01-C24`, `V01-C25`
- **Core Concepts:** Test case, expected result, assertion, unit test, regression test.
- **Supporting Concepts:** Test oracle, boundary value, equivalence partition, coverage, test isolation.
- **Common Mistakes:** Yalnızca happy path test etmek; implementation detail'e aşırı bağlanmak.
- **Best Practices:** Contract ve riskten test üretmek; her testin failure nedenini tek anlamlı tutmak.
- **Related Lab:** [`V01-C26-L01` — Design a Boundary-Focused Test Suite](./chapter-blueprints/26-testing-fundamentals.md).
- **Related Assessment:** [`V01-C26-AS01`](./assessment.md).
- **Related Challenge:** `V01-C26-CH01` — Make a Regression Reproducible.
- **Related Project:** [`V01-CP01` — Capstone preparation.](./projects.md)
- **Related Interview:** `V01-C26-IV01` — Test coverage neden tek başına kalite kanıtı değildir?
- **Assessment Type:** 12 soruluk quiz, test design review, Lab 26 rubriği, blind-spot yansıtması.
- **Related Next Chapter:** `V01-C27` — 27 — Clean Code and Refactoring.

## Chapter 27 — Clean Code and Refactoring

- **Chapter Number:** 27
- **Chapter ID:** V01-C27
- **Learning Outcome IDs:** V01-LO044, V01-LO045
- **Chapter Name:** Clean Code and Refactoring — Davranışı Korumak
- **Difficulty:** Intermediate
- **Estimated Study Time:** 6-7 hours
- **Objective:** Naming, cohesion, complexity ve duplication sorunlarını test güvencesi altında iyileştirmek.
- **Learning Objectives:** Code smell'i somut bakım riskiyle açıklamak; küçük refactoring adımlarında davranışın korunduğunu testle göstermek.
- **Produced Competencies:** Code-quality değerlendirmesi, güvenli refactoring ve teknik değişiklik savunusu.
- **Prerequisites:** Chapter 16, 23 ve 25-26'da decomposition, trade-off, debugging ve testing yapmak.
- **Prerequisite IDs:** `V01-C16`, `V01-C23`, `V01-C25`, `V01-C26`
- **Core Concepts:** Readability, code smell, refactoring, duplication, naming.
- **Supporting Concepts:** Small change, semantic preservation, cohesion, cognitive complexity, comment intent.
- **Common Mistakes:** Refactoring ile feature değişikliğini karıştırmak; test olmadan büyük rewrite yapmak.
- **Best Practices:** Küçük ve geri alınabilir adımlar kullanmak; önce davranışı testle sabitlemek.
- **Related Lab:** [`V01-C27-L01` — Refactor Under Test](./chapter-blueprints/27-clean-code-and-refactoring.md).
- **Related Assessment:** [`V01-C27-AS01`](./assessment.md).
- **Related Challenge:** `V01-C27-CH01` — Explain Every Refactoring Decision.
- **Related Project:** [`V01-CP01` — Capstone preparation.](./projects.md)
- **Related Interview:** `V01-C27-IV01` — Clean code ölçütlerini kişisel zevkten nasıl ayırırsınız?
- **Assessment Type:** 10 soruluk quiz, before/after review, Lab 27 rubriği, maintainability yansıtması.
- **Related Next Chapter:** `V01-C28` — 28 — Program Design from Requirements to Delivery.

## Chapter 28 — Program Design from Requirements to Delivery

- **Chapter Number:** 28
- **Chapter ID:** V01-C28
- **Learning Outcome IDs:** V01-LO046
- **Chapter Name:** Program Design from Requirements to Delivery — Bütünleşik Mühendislik
- **Difficulty:** Intermediate
- **Estimated Study Time:** 7-9 hours
- **Objective:** Problem contract, data model, algorithm, function map, test, debugging ve review kanıtlarını tek program design dossier'da birleştirmek.
- **Learning Objectives:** Ölçülebilir gereksinimden modüler çözüm tasarlamak; teslimi correctness, tests, readability ve limitations ile savunmak.
- **Produced Competencies:** Requirements-to-delivery program design, integration planning ve teknik review hazırlığı.
- **Prerequisites:** Chapter 03-27'nin modül kapılarını tamamlamak.
- **Prerequisite IDs:** `V01-C03`, `V01-C04`, `V01-C05`, `V01-C06`, `V01-C07`, `V01-C08`, `V01-C09`, `V01-C10`, `V01-C11`, `V01-C12`, `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C17`, `V01-C18`, `V01-C19`, `V01-C20`, `V01-C21`, `V01-C22`, `V01-C23`, `V01-C24`, `V01-C25`, `V01-C26`, `V01-C27`
- **Core Concepts:** Requirements, design, implementation plan, verification, delivery.
- **Supporting Concepts:** Scope control, traceability, technical review, change readiness, retrospective.
- **Common Mistakes:** Kodla başlayıp contract'ı sonradan yazmak; çalışan çıktıyı tamamlanmış mühendislik saymak.
- **Best Practices:** Requirement-outcome-test traceability kurmak; riskli varsayımları erken doğrulamak.
- **Related Lab:** [`V01-C28-L01` — Produce a Program Design Dossier](./chapter-blueprints/28-program-design-from-requirements-to-delivery.md).
- **Related Assessment:** [`V01-C28-AS01`](./assessment.md).
- **Related Challenge:** `V01-C28-CH01` — Defend the Design Under Change.
- **Related Project:** [`V01-CP01` — Capstone — Reliable Command-Line Problem Solver.](./projects.md)
- **Related Interview:** `V01-C28-IV01` — Küçük bir programı gereksinimden teslime nasıl yönetirsiniz?
- **Assessment Type:** 12 soruluk bütünleşik quiz, design defense, Lab 28 rubriği, Volume reflection.
- **Related Next Chapter:** None — terminal Chapter; Volume Final Assessment and `V01-CP01` follow.

## Chapter Count

Toplam 28 Chapter planlanmıştır: 20 Beginner ve 8 Intermediate. Advanced Chapter bulunmaz; ileri uzmanlık bu Volume'un kapsamı dışındadır.

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

- [Dependency Map](./dependency-map.md)
- [Labs](./labs.md)
- [Projects](./projects.md)
- [Assessment](./assessment.md)
