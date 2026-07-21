---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-012"
supporting_document_type: "Compatibility Report"
title: "Research Collection: Flowchart"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-C04"
  - "V01-LO006"
derived_from:
  - "./research-request.md"
  - "../../academy/06-learning-outcomes.md"
x-production-unit: "lesson-05"
x-canonical-lesson-id: "V01-C04"
x-research-stage: "Collection"
x-verified-on: "2026-07-21"
---

# Research Collection: Flowchart

## Purpose

Flowchart kavramı, sembolleri, control-flow semantics’i ve Mermaid rendering
gereksinimleri için doğrulanacak araştırmayı toplamak.

## Scope

Program flowchart bağlamında terminal, process, decision, input/output,
directed flow, branch, merge, loop ve connector ele alınır.

## Ownership

ISO 5807 notation için normatif otoritedir. Mermaid repository içinde diagram
rendering syntax’ı sağlar; normatif sembol standardının yerini almaz.

## Content

### Core Concepts and Definitions

Akış şeması (flowchart), bir process veya algorithm’deki adım ve control-flow
ilişkilerini geometric nodes ve directed connectors ile gösteren diyagramdır.
ISO 5807:1985, data, program ve system flowchart’larında kullanılacak sembol ve
conventions için uluslararası standardı tanımlar; 2019 review’unda güncelliği
teyit edilmiştir. OpenStax, başlangıç bağlamında pseudocode’un ordered textual,
flowchart’ın ise visual decision-flow representation olduğunu açıklar.

| Eleman | Semantik amaç | Başlangıç kullanımı |
| --- | --- | --- |
| Terminal | Akışın başlangıç veya bitiş sınırı | `START`, `END` |
| Process | Tek işlem veya transformation | Açık fiil + nesne |
| Decision | Boolean condition’dan çıkan alternatifler | En az iki labelled branch |
| Input/Output | Dış veri alma veya observable output | Input ile processing ayrılır |
| Flow line | Yürütme yönü ve sıra | Arrow direction tutarlı |
| Connector | Ayrık akış bölümlerini bağlama | Yalnız karmaşıklığı azaltıyorsa |
| Merge | Alternatif branch’leri sonraki ortak adıma bağlama | Decision’dan ayrıdır |
| Loop back | Tekrar condition’ına dönen edge | Exit path görünür olmalı |

### Representation Rules

- Her diagram açık bir entry ve en az bir termination path göstermelidir.
- Decision node bir condition taşır; outgoing branches anlamlı etiketlenir.
- Process node “veriyi işle” gibi belirsiz metin yerine tek gözlenebilir işi
  ifade eder.
- Arrow direction mümkün olduğunca top-to-bottom veya left-to-right kalır.
- Crossing edges ve uzun geri dönüşler readability sinyalidir; decomposition
  gerekebilir.
- Diagram tek başına data contract veya correctness proof değildir.

### ISO versus Mermaid

- ISO, sembol ve documentation conventions anlamını yönetir.
- Mermaid, nodes ve edges’i Markdown tabanlı syntax ile render eder.
- Mermaid `flowchart TD`/`LR` orientation, geometric node syntax ve labelled
  edges sunar.
- Mermaid’in automatic layout sonucu semantic order’ı değiştirmemelidir;
  rendered diagram gözle review edilmelidir.
- Lowercase `end` Mermaid parser’ında özel sorun çıkarabildiği için terminal
  label `END` veya quoted text olmalıdır.

### Terminology and Alternatives

- akış şeması (flowchart);
- program flowchart, process flowchart, data flowchart;
- node, edge/connector, control flow;
- branch, merge, loop, termination path;
- data-flow diagram (DFD): control sequence yerine data movement odaklı farklı
  model;
- state diagram: state ve transition semantiğine sahip farklı model.

### Historical Context

ISO 5807:1985, eski ISO 1028:1973 ve ISO 2636:1973 çalışmalarını izleyen
birinci edition standardıdır. Eski, withdrawn standardlar current guidance
olarak kullanılmamalıdır.

### Common Misconceptions

1. Her diagram flowchart’tır.
2. Shape seçimi yalnız dekorasyondur; shape semantik rol taşır.
3. Decision branch label olmadan anlaşılır.
4. Flowchart algoritmanın doğru olduğunu kanıtlar.
5. Daha çok node her zaman daha açıklayıcıdır.
6. Mermaid syntax ISO standardıyla aynı otoritededir.

### Real-world Applications

- Input validation ve error branch tasarımı.
- Kullanıcı onboarding veya approval workflow analizi.
- Algorithm branch/loop review’u.
- Incident response sürecinde karar ve escalation akışı.

### Prerequisites and Related Lessons

- `V01-C03`: problem boundaries.
- `lesson-02`: algorithm contract and termination.
- `lesson-04`: equivalent textual representation.
- `V01-C09`-`C12`: later control-flow depth.

### Potential Examples

- Yaşa göre access decision: input, decision, two outputs, merge/end.
- Liste toplamı: initialize, has-next decision, process, loop-back, output.
- Login attempt: validation, remaining-attempt branch, explicit exit.
- Counterexample: unlabeled diamond, no termination edge, crossed arrows.

### Potential Diagrams

- Pseudocode line to flowchart node mapping.
- Valid simple selection versus ambiguous selection comparison.
- Loop anatomy: initialization, condition, body, progress, exit.
- Diagram selection guide: flowchart versus DFD versus state diagram.

### Source Register

| ID | Kaynak | Tür | Kullanım |
| --- | --- | --- | --- |
| `SRC-FLW-01` | ISO 5807:1985 | International Standard | Symbols and conventions authority |
| `SRC-FLW-02` | Mermaid Flowchart Syntax | Official tool documentation | Repository rendering syntax |
| `SRC-FLW-03` | OpenStax Computational Thinking | Reviewed open textbook | Beginner symbols and pseudocode comparison |
| `SRC-FLW-04` | MIT 6.006 Syllabus | University course | Diagram as algorithm communication evidence |

## Validation

- Current ISO source used; withdrawn ISO 1028 not treated as authority.
- Flowchart, DFD ve state diagram ayrıldı.
- Core symbols and branch/loop semantics covered.
- Mermaid/ISO authority conflict resolved.
- Diagram asset veya learner-facing content produced: no.

## References

- ISO, [ISO 5807:1985](https://www.iso.org/standard/11955.html)
- Mermaid, [Flowcharts Syntax](https://mermaid.js.org/syntax/flowchart.html)
- OpenStax, [Computational Thinking](https://openstax.org/books/introduction-computer-science/pages/2-1-computational-thinking)
- MIT OpenCourseWare, [6.006 Introduction to Algorithms Syllabus](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/syllabus/)
