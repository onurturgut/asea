---
document_type: "supporting-document"
supporting_document_id: "V01-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "Volume 01 Assessment and Traceability Plan"
version: "1.0.0"
status: "Review"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Assessment Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Assessment System

## Purpose

Değerlendirme; bilgi hatırlamayı, program davranışını uygulamayı, mühendislik kararını açıklamayı ve hatadan öğrenmeyi birlikte ölçer. Tek bir quiz, otomatik test veya proje puanı Volume yeterliği olarak kabul edilmez.

## Scope

This document is the authoritative Volume 01 assessment plan and canonical Traceability Registry. It preserves the existing scoring, evidence, and reassessment contracts.

## Ownership

- **Authority:** Authoritative for Volume 01 assessment strategy and outcome-to-evidence relationships.
- **Owner Role:** Assessment Architect.
- **Source Blueprint:** `V01-BP01`.
- **Derived Views:** `traceability-matrix.md` and external renderings may not define new relationships.

## Content

The existing assessment sections below remain the authoritative assessment contract.

## Chapter-Level Assessment Contract

Her Chapter sonunda aşağıdaki dört bileşen zorunludur:

### Quiz

- 8-12 soru.
- Kavram ayrımı, trace tahmini ve common-mistake tanıma dengesi.
- İlk deneme kaynak kapalı.
- Başarı eşiği %75; yanlışlar gerekçeli düzeltme kaydına alınır.
- Bu Blueprint quiz sorularını içermez.

### Open-ended Questions

- İki veya üç soru.
- En az biri "neden" veya trade-off açıklaması gerektirir.
- Cevap; iddia, gerekçe, örnek ve sınır içerir.
- Dört seviyeli rubrik: Eksik, Gelişiyor, Yeterli, Güçlü.

### Hands-on Lab

- Chapter ile aynı numaralı lab kullanılır.
- 20 puan üzerinden en az 14 gerekir.
- Correctness ve explanation kritik kapıdır.
- Lab sözleşmeleri [labs.md](./labs.md) içinde tanımlanmıştır.

### Reflection

- Öğrenci en önemli hata, elenen hipotez, kalıcı ders ve tekrar tarihini kaydeder.
- Genel duygu ifadesi tek başına yeterli değildir.
- En az bir sonraki eylem ölçülebilir olmalıdır.

## Chapter Completion Rule

Chapter tamamlanması için quiz eşiği, lab eşiği, açık uçlu sorularda en az `Yeterli` ve ölçülebilir reflection birlikte gerekir. Bir bileşen eksikse Chapter `completed` sayılmaz.

## Module Assessment

Her modül sonunda:

- Bir retrieval quiz uygulanır.
- Önceki Chapter'lardan bir unseen trace veya design task verilir.
- İlgili Mini Project teknik incelemeye sunulur.
- Öğrenci bir sonraki modül için readiness statement yazar.

Modül kapısı Mini Project için en az %70 ve kritik correctness maddelerinin tamamlanmasıdır. Module 7 kapısı final değerlendirmeleriyle ölçülür.

## Scoring Model

| Component | Weight |
| --- | ---: |
| Chapter quizzes, questions, labs, reflections | %35 |
| Six Mini Projects | %25 |
| Final Assessment + Technical Review + Code Review | %15 |
| Capstone Evaluation | %25 |
| **Total** | **%100** |

Genel başarı eşiği %75'tir. Ağırlıklı toplam, kritik kapıları geçersiz kılamaz.

## Final Assessment

Final Assessment 120 dakika sürer ve dört bölüm içerir:

1. **Concept and execution:** Dil bağımsız kavram ayrımları ve trace — %25.
2. **Problem and algorithm:** Problem contract, pseudocode ve correctness — %25.
3. **Data and control:** Data model, expression, branch, loop ve functions — %25.
4. **Reliability:** Failure, debugging, test, refactoring ve trade-off — %25.

Başarı eşiği toplam %75 ve her bölümde en az %60'tır. Sorular daha sonra ayrı assessment içeriği olarak oluşturulacaktır.

## Technical Review

Öğrenci 30 dakikalık kaynak kapalı oturumda:

- Verilen küçük programın davranışını trace eder.
- Bir failure için ilk debug planını hazırlar.
- Bir function/data boundary kararı verir.
- Bir algorithm trade-off'unu açıklar.
- Kendi Mini Project'lerinden bir tasarım kararını savunur.

Rubrik: correctness 30, reasoning 25, evidence 20, communication 15, uncertainty handling 10 puan. Başarı eşiği 75/100'dür.

## Code Review

Code Review, Capstone ve seçilen iki Mini Project üzerinde uygulanır:

| Criterion | Weight |
| --- | ---: |
| Correct behavior and contracts | %25 |
| Readability and naming | %15 |
| Functional decomposition and cohesion | %20 |
| Test quality and failure handling | %20 |
| Simplicity and justified trade-offs | %10 |
| Documentation and change clarity | %10 |

Başarı eşiği %75'tir. Critical correctness, secret exposure veya açıklanamayan copied code bulunursa inceleme revizyona döner.

## Capstone Evaluation

Capstone 100 puan üzerinden değerlendirilir:

- Requirements and traceability: 15.
- Correctness and controlled failure: 20.
- Data/algorithm/function design: 15.
- Tests and debugging evidence: 20.
- Readability and maintainability: 15.
- Documentation and technical defense: 15.

Başarı eşiği 80/100'dür. Aşağıdaki kritik kapıların tamamı ayrıca geçilmelidir:

- Onaylanan acceptance criteria'nın tamamı doğrulanmış olmalı.
- En az 25 test içinde normal, boundary ve invalid input bulunmalı.
- Bilinen critical defect kalmamalı.
- Öğrenci seçilen kodu ve kararları kendi cümleleriyle açıklayabilmeli.
- Kaynak ve AI yardımı beyan edilmiş olmalı; gizli veya lisanssız içerik bulunmamalı.

## Self Assessment

Öğrenci V01-LO001–V01-LO046 için `Kanıtlandı`, `Gelişiyor` veya `Yeniden Çalışılmalı` durumu atar. Her `Kanıtlandı` kaydı bir lab, project, assessment veya review kanıtına bağlanmalıdır.

Self Assessment şu sorulara ölçülebilir cevap verir:

- Hangi üç outcome en güçlü kanıta sahip?
- Hangi üç outcome yeni bağlamda tekrar edilmeli?
- En pahalı debugging hatası neydi ve hangi süreç değişti?
- Bir sonraki Volume'da hangi kontrol listesi sürdürülecek?

## Reassessment Policy

- Quiz, yanlış analizi ve 48 saatlik aradan sonra yeniden denenebilir.
- Lab ve proje, inceleme bulguları kapatıldıktan sonra yeniden sunulabilir.
- Final Assessment başarısız bölüm için en az iki hedefli practice kanıtı gerekir.
- Capstone yeniden değerlendirmesi, değişiklik günlüğü ve yeni test kanıtıyla yapılır.
- İlk ve sonraki sonuçlar öğrenme geçmişinde birlikte korunur.

## Volume Completion and Volume 02 Readiness

Volume 02 geçişi için:

- Genel ağırlıklı puan en az %75.
- Final Assessment ve Technical Review ayrı ayrı en az %75.
- Code Review en az %75.
- Capstone en az %80 ve tüm kritik kapılar.
- 28 lab'ın en az 24'ü doğrudan başarı eşiğinde; kalanlar için kritik bulgular kapalı.
- Altı Mini Project'in her biri en az %70.
- V01-LO001–V01-LO046 için kanıt bağlantılı Self Assessment.

## Quality Assurance

Assessment içeriği yazıldığında answer key, rubric, ambiguity review, difficulty balance ve accessibility review zorunludur. Bir soru amaçlanan outcome dışında dil ayrıntısı veya trivia ölçmemelidir. JavaScript örneği kullanılsa bile dil bağımsız kavram ayrıca ölçülmelidir.

## Traceability

This section is the canonical source of truth for all active Volume 01 outcome relationships. Every target remains `Planned` until its separate artefact is produced and validated.

| Learning Outcome ID | Learning Outcome Summary | Module ID | Chapter ID | Chapter Name | Planned Lab ID | Planned Exercise ID | Planned Quiz ID | Planned Challenge ID | Planned Interview ID | Assessment ID | Mini Project Relationship | Capstone Relationship | Prerequisite Learning Outcomes | Coverage Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `V01-LO015` | Verilen kuralları tüm durumları kapsayan decision table ve conditional flow'a dönüştürebilmek | `V01-M03` | `V01-C10` | Conditional Execution | `V01-C10-L01` | `V01-C10-EX01` | `V01-C10-QZ01` | `V01-C10-CH01` | `V01-C10-IV01` | `V01-C10-AS01` | `V01-P03` | Indirect foundation — `V01-CP01` | `V01-LO012`, `V01-LO013`, `V01-LO014` | Planned |
| `V01-LO016` | Conditional branch'lerde erişilemeyen veya eksik durumu tespit edebilmek | `V01-M03` | `V01-C10` | Conditional Execution | `V01-C10-L01` | `V01-C10-EX01` | `V01-C10-QZ01` | `V01-C10-CH01` | `V01-C10-IV01` | `V01-C10-AS01` | `V01-P03` | Indirect foundation — `V01-CP01` | `V01-LO012`, `V01-LO013`, `V01-LO014` | Planned |
| `V01-LO017` | Counter, accumulator veya sentinel kullanan sonlanan loop tasarlayıp trace edebilmek | `V01-M03` | `V01-C11` | Repetition and Loops | `V01-C11-L01` | `V01-C11-EX01` | `V01-C11-QZ01` | `V01-C11-CH01` | `V01-C11-IV01` | `V01-C11-AS01` | `V01-P03` | Indirect foundation — `V01-CP01` | `V01-LO009`, `V01-LO010`, `V01-LO013`, `V01-LO014`, `V01-LO015`, `V01-LO016` | Planned |
| `V01-LO018` | Nested control flow'u execution path, readability ve testability ölçütleriyle sadeleştirebilmek | `V01-M03` | `V01-C12` | Nested and Composite Control Flow | `V01-C12-L01` | `V01-C12-EX01` | `V01-C12-QZ01` | `V01-C12-CH01` | `V01-C12-IV01` | `V01-C12-AS01` | `V01-P03` | Supporting — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO017` | Planned |
| `V01-LO019` | Bir davranış için input, precondition, output, postcondition ve failure içeren function contract yazabilmek | `V01-M04` | `V01-C13` | Functions and Contracts | `V01-C13-L01` | `V01-C13-EX01` | `V01-C13-QZ01` | `V01-C13-CH01` | `V01-C13-IV01` | `V01-C13-AS01` | `V01-P04` | Indirect foundation — `V01-CP01` | `V01-LO006`, `V01-LO018` | Planned |
| `V01-LO020` | Function call ve return akışını state değişimleriyle trace edebilmek | `V01-M04` | `V01-C13` | Functions and Contracts | `V01-C13-L01` | `V01-C13-EX01` | `V01-C13-QZ01` | `V01-C13-CH01` | `V01-C13-IV01` | `V01-C13-AS01` | `V01-P04` | Indirect foundation — `V01-CP01` | `V01-LO006`, `V01-LO018` | Planned |
| `V01-LO021` | Parametre listesini gerekli ve yeterli girdilere indirip kararını açıklayabilmek | `V01-M04` | `V01-C14` | Parameters and Return Values | `V01-C14-L01` | `V01-C14-EX01` | `V01-C14-QZ01` | `V01-C14-CH01` | `V01-C14-IV01` | `V01-C14-AS01` | `V01-P04` | Indirect foundation — `V01-CP01` | `V01-LO011`, `V01-LO019`, `V01-LO020` | Planned |
| `V01-LO022` | Scope, lifetime, shadowing ve side effect davranışını verilen program modelinde belirleyebilmek | `V01-M04` | `V01-C15` | Scope, Lifetime, and Side Effects | `V01-C15-L01` | `V01-C15-EX01` | `V01-C15-QZ01` | `V01-C15-CH01` | `V01-C15-IV01` | `V01-C15-AS01` | `V01-P04` | Indirect foundation — `V01-CP01` | `V01-LO009`, `V01-LO010`, `V01-LO019`, `V01-LO020`, `V01-LO021` | Planned |
| `V01-LO023` | Side effect içeren davranışı pure core ve boundary effect olarak ayırabilmek | `V01-M04` | `V01-C15` | Scope, Lifetime, and Side Effects | `V01-C15-L01` | `V01-C15-EX01` | `V01-C15-QZ01` | `V01-C15-CH01` | `V01-C15-IV01` | `V01-C15-AS01` | `V01-P04` | Indirect foundation — `V01-CP01` | `V01-LO009`, `V01-LO010`, `V01-LO019`, `V01-LO020`, `V01-LO021` | Planned |
| `V01-LO024` | Çok adımlı problemi cohesive ve test edilebilir fonksiyonlardan oluşan function map'e dönüştürebilmek | `V01-M04` | `V01-C16` | Functional Decomposition and Reuse | `V01-C16-L01` | `V01-C16-EX01` | `V01-C16-QZ01` | `V01-C16-CH01` | `V01-C16-IV01` | `V01-C16-AS01` | `V01-P04` | Supporting — `V01-CP01` | `V01-LO005`, `V01-LO006`, `V01-LO019`, `V01-LO020`, `V01-LO021`, `V01-LO022`, `V01-LO023` | Planned |
| `V01-LO025` | Bir koleksiyonu güvenli biçimde traverse ederek filter, map veya aggregate sonucu üretebilmek | `V01-M05` | `V01-C17` | Collections and Iteration | `V01-C17-L01` | `V01-C17-EX01` | `V01-C17-QZ01` | `V01-C17-CH01` | `V01-C17-IV01` | `V01-C17-AS01` | `V01-P05` | Indirect foundation — `V01-CP01` | `V01-LO017`, `V01-LO021`, `V01-LO022`, `V01-LO023`, `V01-LO024` | Planned |
| `V01-LO026` | Empty, single-item ve duplicate-value collection edge case'lerini belirleyebilmek | `V01-M05` | `V01-C17` | Collections and Iteration | `V01-C17-L01` | `V01-C17-EX01` | `V01-C17-QZ01` | `V01-C17-CH01` | `V01-C17-IV01` | `V01-C17-AS01` | `V01-P05` | Indirect foundation — `V01-CP01` | `V01-LO017`, `V01-LO021`, `V01-LO022`, `V01-LO023`, `V01-LO024` | Planned |
| `V01-LO027` | Gereksinimlerden uygun field, type ve invariant'ları olan record modeli tasarlayabilmek | `V01-M05` | `V01-C18` | Records and Data Modeling | `V01-C18-L01` | `V01-C18-EX01` | `V01-C18-QZ01` | `V01-C18-CH01` | `V01-C18-IV01` | `V01-C18-AS01` | `V01-P05` | Supporting — `V01-CP01` | `V01-LO007`, `V01-LO008`, `V01-LO021`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO028` | İki data model seçeneğini invalid state, duplication ve change cost açısından karşılaştırabilmek | `V01-M05` | `V01-C18` | Records and Data Modeling | `V01-C18-L01` | `V01-C18-EX01` | `V01-C18-QZ01` | `V01-C18-CH01` | `V01-C18-IV01` | `V01-C18-AS01` | `V01-P05` | Indirect foundation — `V01-CP01` | `V01-LO007`, `V01-LO008`, `V01-LO021`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO029` | Base case ve recursive case içeren fonksiyonun call stack'ini doğru trace edebilmek | `V01-M05` | `V01-C19` | Recursion and Recursive Thinking | `V01-C19-L01` | `V01-C19-EX01` | `V01-C19-QZ01` | `V01-C19-CH01` | `V01-C19-IV01` | `V01-C19-AS01` | `V01-P05` | Indirect foundation — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO019`, `V01-LO020`, `V01-LO021`, `V01-LO022`, `V01-LO023` | Planned |
| `V01-LO030` | Recursive çözümün progress ve termination koşulunu doğrulayabilmek | `V01-M05` | `V01-C19` | Recursion and Recursive Thinking | `V01-C19-L01` | `V01-C19-EX01` | `V01-C19-QZ01` | `V01-C19-CH01` | `V01-C19-IV01` | `V01-C19-AS01` | `V01-P05` | Indirect foundation — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO019`, `V01-LO020`, `V01-LO021`, `V01-LO022`, `V01-LO023` | Planned |
| `V01-LO031` | Messy text input için belgelenmiş normalization ve tokenization kararları olan işleme hattı tasarlayabilmek | `V01-M05` | `V01-C20` | Strings and Text Processing | `V01-C20-L01` | `V01-C20-EX01` | `V01-C20-QZ01` | `V01-C20-CH01` | `V01-C20-IV01` | `V01-C20-AS01` | `V01-P05` | Indirect foundation — `V01-CP01` | `V01-LO012`, `V01-LO021`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO032` | Linear search'ü found ve not-found girdilerinde doğru trace edebilmek | `V01-M06` | `V01-C21` | Searching Algorithms | `V01-C21-L01` | `V01-C21-EX01` | `V01-C21-QZ01` | `V01-C21-CH01` | `V01-C21-IV01` | `V01-C21-AS01` | `V01-P06` | Indirect foundation — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO017`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO033` | Binary search'ün sorted-input invariant'ını ve search interval değişimini açıklayabilmek | `V01-M06` | `V01-C21` | Searching Algorithms | `V01-C21-L01` | `V01-C21-EX01` | `V01-C21-QZ01` | `V01-C21-CH01` | `V01-C21-IV01` | `V01-C21-AS01` | `V01-P06` | Indirect foundation — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO017`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO034` | Selection ve insertion temelli sort işlemlerini her pass için trace edebilmek | `V01-M06` | `V01-C22` | Sorting Algorithms | `V01-C22-L01` | `V01-C22-EX01` | `V01-C22-QZ01` | `V01-C22-CH01` | `V01-C22-IV01` | `V01-C22-AS01` | `V01-P06` | Indirect foundation — `V01-CP01` | `V01-LO017`, `V01-LO018`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO035` | Sorting seçimini stability, mutation, input shape ve simplicity ölçütleriyle gerekçelendirebilmek | `V01-M06` | `V01-C22` | Sorting Algorithms | `V01-C22-L01` | `V01-C22-EX01` | `V01-C22-QZ01` | `V01-C22-CH01` | `V01-C22-IV01` | `V01-C22-AS01` | `V01-P06` | Indirect foundation — `V01-CP01` | `V01-LO017`, `V01-LO018`, `V01-LO025`, `V01-LO026` | Planned |
| `V01-LO036` | Basit algoritmalar için operation-count modeli kurup growth class belirleyebilmek | `V01-M06` | `V01-C23` | Algorithmic Complexity and Trade-offs | `V01-C23-L01` | `V01-C23-EX01` | `V01-C23-QZ01` | `V01-C23-CH01` | `V01-C23-IV01` | `V01-C23-AS01` | `V01-P06` | Indirect foundation — `V01-CP01` | `V01-LO006`, `V01-LO025`, `V01-LO026`, `V01-LO032`, `V01-LO033`, `V01-LO034`, `V01-LO035` | Planned |
| `V01-LO037` | İki doğru algoritmayı time, space, readability ve expected input size açısından karşılaştırabilmek | `V01-M06` | `V01-C23` | Algorithmic Complexity and Trade-offs | `V01-C23-L01` | `V01-C23-EX01` | `V01-C23-QZ01` | `V01-C23-CH01` | `V01-C23-IV01` | `V01-C23-AS01` | `V01-P06` | Supporting — `V01-CP01` | `V01-LO006`, `V01-LO025`, `V01-LO026`, `V01-LO032`, `V01-LO033`, `V01-LO034`, `V01-LO035` | Planned |
| `V01-LO038` | Syntax, runtime, logic, contract ve environmental failure örneklerini doğru sınıflandırabilmek | `V01-M07` | `V01-C24` | Errors and Failure Modes | `V01-C24-L01` | `V01-C24-EX01` | `V01-C24-QZ01` | `V01-C24-CH01` | `V01-C24-IV01` | `V01-C24-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO012`, `V01-LO018`, `V01-LO022`, `V01-LO023`, `V01-LO027`, `V01-LO028` | Planned |
| `V01-LO039` | Bir input boundary için açık failure ve recovery contract tasarlayabilmek | `V01-M07` | `V01-C24` | Errors and Failure Modes | `V01-C24-L01` | `V01-C24-EX01` | `V01-C24-QZ01` | `V01-C24-CH01` | `V01-C24-IV01` | `V01-C24-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO012`, `V01-LO018`, `V01-LO022`, `V01-LO023`, `V01-LO027`, `V01-LO028` | Planned |
| `V01-LO040` | Bir failure'ı yeniden üretip minimal failing case oluşturabilmek | `V01-M07` | `V01-C25` | Systematic Debugging | `V01-C25-L01` | `V01-C25-EX01` | `V01-C25-QZ01` | `V01-C25-CH01` | `V01-C25-IV01` | `V01-C25-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO003`, `V01-LO004`, `V01-LO006`, `V01-LO036`, `V01-LO037`, `V01-LO038`, `V01-LO039` | Planned |
| `V01-LO041` | En az üç debug hipotezini kontrollü deney ve kanıtla elemek | `V01-M07` | `V01-C25` | Systematic Debugging | `V01-C25-L01` | `V01-C25-EX01` | `V01-C25-QZ01` | `V01-C25-CH01` | `V01-C25-IV01` | `V01-C25-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO003`, `V01-LO004`, `V01-LO006`, `V01-LO036`, `V01-LO037`, `V01-LO038`, `V01-LO039` | Planned |
| `V01-LO042` | Function contract'tan normal, boundary ve invalid input test seti üretebilmek | `V01-M07` | `V01-C26` | Testing Fundamentals | `V01-C26-L01` | `V01-C26-EX01` | `V01-C26-QZ01` | `V01-C26-CH01` | `V01-C26-IV01` | `V01-C26-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO019`, `V01-LO020`, `V01-LO021`, `V01-LO022`, `V01-LO023`, `V01-LO024`, `V01-LO025`, `V01-LO026`, `V01-LO027`, `V01-LO028`, `V01-LO038`, `V01-LO039`, `V01-LO040`, `V01-LO041` | Planned |
| `V01-LO043` | Bir test suite'in risk kapsamını ve kör noktalarını açıklayabilmek | `V01-M07` | `V01-C26` | Testing Fundamentals | `V01-C26-L01` | `V01-C26-EX01` | `V01-C26-QZ01` | `V01-C26-CH01` | `V01-C26-IV01` | `V01-C26-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO015`, `V01-LO016`, `V01-LO019`, `V01-LO020`, `V01-LO021`, `V01-LO022`, `V01-LO023`, `V01-LO024`, `V01-LO025`, `V01-LO026`, `V01-LO027`, `V01-LO028`, `V01-LO038`, `V01-LO039`, `V01-LO040`, `V01-LO041` | Planned |
| `V01-LO044` | Test güvencesi altında küçük adımlarla behavior-preserving refactoring yapabilmek | `V01-M07` | `V01-C27` | Clean Code and Refactoring | `V01-C27-L01` | `V01-C27-EX01` | `V01-C27-QZ01` | `V01-C27-CH01` | `V01-C27-IV01` | `V01-C27-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO024`, `V01-LO036`, `V01-LO037`, `V01-LO040`, `V01-LO041`, `V01-LO042`, `V01-LO043` | Planned |
| `V01-LO045` | Refactoring sonucunu readability, cohesion, duplication ve complexity ölçütleriyle savunabilmek | `V01-M07` | `V01-C27` | Clean Code and Refactoring | `V01-C27-L01` | `V01-C27-EX01` | `V01-C27-QZ01` | `V01-C27-CH01` | `V01-C27-IV01` | `V01-C27-AS01` | None — direct Capstone preparation | Supporting — `V01-CP01` | `V01-LO024`, `V01-LO036`, `V01-LO037`, `V01-LO040`, `V01-LO041`, `V01-LO042`, `V01-LO043` | Planned |
| `V01-LO046` | Ölçülebilir gereksinimlerden modüler, test edilmiş ve açıklanabilir küçük program tasarlayıp teslim edebilmek | `V01-M07` | `V01-C28` | Program Design from Requirements to Delivery | `V01-C28-L01` | `V01-C28-EX01` | `V01-C28-QZ01` | `V01-C28-CH01` | `V01-C28-IV01` | `V01-C28-AS01` | None — direct Capstone preparation | Primary — `V01-CP01` | `V01-LO005`, `V01-LO006`, `V01-LO007`, `V01-LO008`, `V01-LO009`, `V01-LO010`, `V01-LO011`, `V01-LO012`, `V01-LO013`, `V01-LO014`, `V01-LO015`, `V01-LO016`, `V01-LO017`, `V01-LO018`, `V01-LO019`, `V01-LO020`, `V01-LO021`, `V01-LO022`, `V01-LO023`, `V01-LO024`, `V01-LO025`, `V01-LO026`, `V01-LO027`, `V01-LO028`, `V01-LO029`, `V01-LO030`, `V01-LO031`, `V01-LO032`, `V01-LO033`, `V01-LO034`, `V01-LO035`, `V01-LO036`, `V01-LO037`, `V01-LO038`, `V01-LO039`, `V01-LO040`, `V01-LO041`, `V01-LO042`, `V01-LO043`, `V01-LO044`, `V01-LO045` | Planned |
| `V01-LO001` | Program, algorithm, instruction ve computation kavramlarını iki örnek üzerinde doğru ayırabilmek | `V01-M01` | `V01-C01` | What Is Programming? | `V01-C01-L01` | `V01-C01-EX01` | `V01-C01-QZ01` | `V01-C01-CH01` | `V01-C01-IV01` | `V01-C01-AS01` | `V01-P01` | Indirect foundation — `V01-CP01` | Volume 00 readiness | Planned |
| `V01-LO002` | Belirsiz bir günlük süreci en az sekiz kesin ve sıralı talimata dönüştürebilmek | `V01-M01` | `V01-C01` | What Is Programming? | `V01-C01-L01` | `V01-C01-EX01` | `V01-C01-QZ01` | `V01-C01-CH01` | `V01-C01-IV01` | `V01-C01-AS01` | `V01-P01` | Indirect foundation — `V01-CP01` | Volume 00 readiness | Planned |
| `V01-LO003` | Source code, runtime, memory, input ve output ilişkisini doğru execution model ile açıklayabilmek | `V01-M01` | `V01-C02` | How Computers Execute Programs | `V01-C02-L01` | `V01-C02-EX01` | `V01-C02-QZ01` | `V01-C02-CH01` | `V01-C02-IV01` | `V01-C02-AS01` | `V01-P01` | Indirect foundation — `V01-CP01` | `V01-LO001`, `V01-LO002` | Planned |
| `V01-LO004` | Küçük bir talimat dizisinde her adımdan sonra oluşan state'i hatasız trace edebilmek | `V01-M01` | `V01-C02` | How Computers Execute Programs | `V01-C02-L01` | `V01-C02-EX01` | `V01-C02-QZ01` | `V01-C02-CH01` | `V01-C02-IV01` | `V01-C02-AS01` | `V01-P01` | Indirect foundation — `V01-CP01` | `V01-LO001`, `V01-LO002` | Planned |
| `V01-LO005` | Verilen problemi input, output, constraint, assumption ve edge case'lere ayırabilmek | `V01-M01` | `V01-C03` | Problem Definition and Decomposition | `V01-C03-L01` | `V01-C03-EX01` | `V01-C03-QZ01` | `V01-C03-CH01` | `V01-C03-IV01` | `V01-C03-AS01` | `V01-P01` | Supporting — `V01-CP01` | `V01-LO001`, `V01-LO002`, `V01-LO003`, `V01-LO004` | Planned |
| `V01-LO006` | Sonlanan bir çözümü pseudocode ile yazıp üç test girdisi üzerinde trace edebilmek | `V01-M01` | `V01-C04` | Algorithms, Pseudocode, and Tracing | `V01-C04-L01` | `V01-C04-EX01` | `V01-C04-QZ01` | `V01-C04-CH01` | `V01-C04-IV01` | `V01-C04-AS01` | `V01-P01` | Supporting — `V01-CP01` | `V01-LO005` | Planned |
| `V01-LO007` | En az on örnek değeri tür ve temsil özelliğine göre doğru sınıflandırabilmek | `V01-M02` | `V01-C05` | Values and Data Types | `V01-C05-L01` | `V01-C05-EX01` | `V01-C05-QZ01` | `V01-C05-CH01` | `V01-C05-IV01` | `V01-C05-AS01` | `V01-P02` | Indirect foundation — `V01-CP01` | `V01-LO003`, `V01-LO004`, `V01-LO006` | Planned |
| `V01-LO008` | Conversion sırasında oluşabilecek precision veya meaning kaybını verilen örneklerde belirleyebilmek | `V01-M02` | `V01-C05` | Values and Data Types | `V01-C05-L01` | `V01-C05-EX01` | `V01-C05-QZ01` | `V01-C05-CH01` | `V01-C05-IV01` | `V01-C05-AS01` | `V01-P02` | Indirect foundation — `V01-CP01` | `V01-LO003`, `V01-LO004`, `V01-LO006` | Planned |
| `V01-LO009` | Assignment dizisi için eksiksiz state table üretebilmek | `V01-M02` | `V01-C06` | Variables and State | `V01-C06-L01` | `V01-C06-EX01` | `V01-C06-QZ01` | `V01-C06-CH01` | `V01-C06-IV01` | `V01-C06-AS01` | `V01-P02` | Indirect foundation — `V01-CP01` | `V01-LO007`, `V01-LO008` | Planned |
| `V01-LO010` | Bir veri için constant veya mutable variable seçimini değişim ihtiyacıyla gerekçelendirebilmek | `V01-M02` | `V01-C06` | Variables and State | `V01-C06-L01` | `V01-C06-EX01` | `V01-C06-QZ01` | `V01-C06-CH01` | `V01-C06-IV01` | `V01-C06-AS01` | `V01-P02` | Indirect foundation — `V01-CP01` | `V01-LO007`, `V01-LO008` | Planned |
| `V01-LO011` | Bileşik expression sonucunu precedence, grouping ve ara türlerle doğru hesaplayabilmek | `V01-M02` | `V01-C07` | Operators and Expressions | `V01-C07-L01` | `V01-C07-EX01` | `V01-C07-QZ01` | `V01-C07-CH01` | `V01-C07-IV01` | `V01-C07-AS01` | `V01-P02` | Indirect foundation — `V01-CP01` | `V01-LO007`, `V01-LO008`, `V01-LO009`, `V01-LO010` | Planned |
| `V01-LO012` | Parse, validate, normalize, transform ve format aşamalarından uygun olanları içeren veri hattı tasarlayabilmek | `V01-M02` | `V01-C08` | Input, Output, and Data Transformation | `V01-C08-L01` | `V01-C08-EX01` | `V01-C08-QZ01` | `V01-C08-CH01` | `V01-C08-IV01` | `V01-C08-AS01` | `V01-P02` | Supporting — `V01-CP01` | `V01-LO006`, `V01-LO011` | Planned |
| `V01-LO013` | Bileşik Boolean expression için eksiksiz truth table oluşturabilmek | `V01-M03` | `V01-C09` | Boolean Logic and Truth | `V01-C09-L01` | `V01-C09-EX01` | `V01-C09-QZ01` | `V01-C09-CH01` | `V01-C09-IV01` | `V01-C09-AS01` | `V01-P03` | Indirect foundation — `V01-CP01` | `V01-LO011` | Planned |
| `V01-LO014` | Karmaşık predicate'i davranışı koruyan daha okunabilir alt koşullara ayırabilmek | `V01-M03` | `V01-C09` | Boolean Logic and Truth | `V01-C09-L01` | `V01-C09-EX01` | `V01-C09-QZ01` | `V01-C09-CH01` | `V01-C09-IV01` | `V01-C09-AS01` | `V01-P03` | Indirect foundation — `V01-CP01` | `V01-LO011` | Planned |

## Validation

- Canonical outcome rows: 46.
- Duplicate canonical outcome IDs: 0.
- Orphan Chapter or Assessment relationships: 0.
- Derived views must record this registry ID `V01-SD-ASMT-001`, version `1.0.0`, and generation date.
- Stable status requires a passing Validation Report and Approved Assessment/Repository Review.


## References

- [Learning Outcomes](./learning-outcomes.md)
- [Laboratory Blueprint](./labs.md)
- [Project Blueprint](./projects.md)
