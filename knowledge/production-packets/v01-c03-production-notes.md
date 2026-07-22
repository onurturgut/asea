---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-021"
supporting_document_type: "Compatibility Report"
title: "V01-C03 Chapter Production Design"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C03-CPP-001"
authority: "Derived"
owner_role: "Learning Designer"
source_ids:
  - "V01-C03-CPP-001"
  - "V01-C03-SD-IDX-001"
derived_from:
  - "./v01-c03-cpp-001.json"
  - "../../docs/01-programming/programming-fundamentals/research/v01-c03/research-packet.md"
---

# V01-C03 Chapter Production Design

## Purpose

Machine-readable `V01-C03-CPP-001@0.1.0` paketini ana ders yazarının
uygulayabileceği öğrenme tasarımına dönüştürmek.

## Scope

Bu belge yalnız `V01-LO005` Draft üretimini yönlendirir. Yeni Outcome, Claim,
Concept, assessment veya curriculum kimliği oluşturmaz.

## Ownership

- Production Packet: `V01-C03-CPP-001`
- Öğrenme tasarımı: Learning Designer
- Ana ders: Software Engineering Educator
- Draft üretim yönü: Repository Owner talimatı
- Stable kararları: bağımsız reviewer rolleri

## Content

### Lesson blueprint

| Chapter section | Instructional purpose | Knowledge boundary | Learner evidence |
| --- | --- | --- | --- |
| Learning Objectives | Outcome ve başarı kanıtını görünür yap | `V01-LO005` | Kendi tamamlanma kriterini açıklar |
| Prerequisites | C01–C02 bilgisini geri çağır | Precise instruction, state/input/output | Diagnostic response |
| Introduction | Erken kodlamanın riskini hissettir | `CLM-000012` | Problem/solution ayrımı |
| Core Concepts | Dört canonical Concept'i öğret | `CON-000012`–`000015` | Problem contract + decomposition |
| Engineering Perspective | Değişiklik maliyeti ve review düşüncesi | Aynı dört Claim | Decision rationale |
| Real World Examples | Modeli farklı bağlama transfer et | Approved packet scenarios | Comparison table |
| Common Mistakes | Faulty mental model'i onar | Packet mistake set | Diagnosis |
| Best Practices | Koşullu engineering rules üret | Packet best practices | Checklist with rationale |
| Hands-on Exercise | Bağımsız uygulama ve AI audit | `V01-C03-EX01`, `AS01` | Complete deliverable |
| Reflection | Karar ve belirsizliği görünür yap | No new claims | Reflection log |
| Summary/Takeaways | Outcome sırasıyla sentez yap | Existing claims only | Retrieval summary |

### Teaching strategy

- Önce öğrencinin belirsiz isteğe verdiği doğal çözüm tepkisi alınır.
- Solution-first tepki yargılanmaz; problem-space sorularıyla yeniden çerçevelenir.
- Tek bir ticket-pricing vakası bölüm boyunca giderek zenginleştirilir.
- Her kavram intuition → precise definition → contrast → worked example →
  retrieval check sırasını izler.
- Constraint/assumption ve edge/invalid için contrastive examples kullanılır.
- Decomposition tree ardından dependency graph gösterilir; tek görselin iki
  ilişkiyi temsil ettiği yanılgısı önlenir.
- AI Mentor yalnız bağımsız contract taslağından sonra devreye girer.
- Öğrenci AI önerisini acceptance criteria ve source authority ile denetler.

### Learning flow

```text
Belirsiz ticket
-> ilk çözüm tahmini
-> problem space / solution space ayrımı
-> problem contract
-> sınırlar ve acceptance criteria
-> responsibility decomposition
-> dependency review
-> guided repair
-> independent transfer
-> AI audit
-> assessment and reflection
```

### Storytelling notes

Ana anlatı, “bilet fiyatı hesaplayan program yap” ticket'ının doğrudan kodlama
yerine sorularla güvenilir contract'a dönüşmesidir. Hikâye gerçek şirket vakası
olarak sunulmaz. Karakter veya dramatizasyon teknik evidence'ın yerine geçmez.

### Difficulty mapping

| Component | Bloom level | Support | Completion evidence |
| --- | --- | --- | --- |
| Term distinction | Understand | Definition + contrast | Correct explanation |
| Contract fields | Apply | Worked template | Complete table |
| Constraint/assumption | Analyze | Paired examples | Reasoned classification |
| Edge/invalid | Analyze | Boundary matrix | Coverage with labels |
| Decomposition | Create | Fading scaffold | Tree + dependency graph |
| AI audit | Evaluate | Review rubric | Accept/reject/correct log |
| Technical defense | Evaluate/Create | No live answer | Evidence-based explanation |

### Visual ideas

1. Problem space → contract → solution space flow; text alternative required.
2. Constraint'ın çözüm alanını daralttığı bounded area.
3. Normal/boundary/edge/invalid scenario number line.
4. Ticket-pricing decomposition tree.
5. Aynı tree'nin dependency graph görünümü.
6. Need → criterion → responsibility → evidence traceability chain.

### Assessment mapping

`V01-LO005`, `V01-C03-AS01` içinde şu birleşik kanıtla ölçülür:

- bağımsız problem contract;
- en az üç constraint ve üç doğrulanabilir assumption;
- normal, boundary ve invalid dahil en az sekiz scenario;
- responsibility tree ve dependency graph;
- AI önerisinde en az üç problem tespiti;
- beş dakikalık teknik savunma.

Retry policy: Öğrenci yalnız başarısız rubric boyutunu yeniden üretir; mevcut
teslimi silmez, diff ve gerekçe ekler.

### Output targets

| Output | Requirement | Gate |
| --- | --- | --- |
| Main lesson | Required now | Author self-check + automated validation |
| Chapter index and reading guide | Required now | Link and workload validation |
| Exercises, Quiz, Lab, Challenge | Draft assets created | Automated validation + independent assessment review |
| AI Mentor, Interview, Flashcards, Rubric | Draft assets created | Safety, pedagogy and assessment review |
| Final SVG/animation | Deferred to website design | Accessibility and asset review |
| Stable release | Excluded now | Independent reviews and pilot |

## Validation

- Required design components: complete.
- Outcome coverage: `V01-LO005` complete.
- Canonical IDs: reused, not redefined.
- Lesson flow: standard sequence preserved.
- Draft production decision: Authorized.
- Stable publication decision: not authorized.

## References

- [Machine-readable CPP](./v01-c03-cpp-001.json)
- [Research Packet](../../docs/01-programming/programming-fundamentals/research/v01-c03/research-packet.md)
- [Technical Readiness](../../docs/01-programming/programming-fundamentals/review/v01-c03/research-technical-readiness.md)
- [Pedagogical Readiness](../../docs/01-programming/programming-fundamentals/review/v01-c03/research-pedagogical-readiness.md)
- [Production Packet Standard](../../docs/production/production-packet-standard.md)
- [Lesson Authoring Standard](../../docs/production/lesson-authoring-standard.md)
