---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-014"
supporting_document_type: "Compatibility Report"
title: "Research Normalization: Flowchart"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids:
  - "V01-C04"
  - "V01-LO006"
derived_from:
  - "./research-collection.md"
  - "./research-validation.md"
x-production-unit: "lesson-05"
x-canonical-lesson-id: "V01-C04"
x-research-stage: "Normalization"
x-verified-on: "2026-07-21"
---

# Research Normalization: Flowchart

## Purpose

Flowchart research’ünü normatif semantics ve repository rendering ayrımını
koruyan teaching model’e dönüştürmek.

## Scope

Definition, symbols, hierarchy, knowledge order, difficulty, teaching order
ve dependency’ler normalize edilir.

## Ownership

ISO 5807 normatif referanstır; Mermaid rendering aracıdır. Bu belge ikisinin
yerine geçmez.

## Content

### Normalized Definition

**Akış şeması (flowchart):** Bir algoritma veya process içindeki işlemleri,
kararları ve yürütme yönünü anlam taşıyan shapes ile directed edges üzerinden
gösteren görsel temsil.

### Normalized Symbol Set

| Role | Meaning | Teaching label |
| --- | --- | --- |
| Terminal | Entry/exit boundary | `START`, `END` |
| Process | One action/transformation | Verb phrase |
| Decision | Boolean condition | Question/condition |
| Input/Output | External data boundary | `READ`, `DISPLAY` meaning |
| Flow line | Execution direction | Arrow |

Connector, subprocess ve ileri semboller yalnız diagram readability gerçekten
gerektirirse eklenir.

### Teaching Order

1. Nodes and directed edges.
2. Linear sequence.
3. Decision and labelled branches.
4. Merge and explicit END.
5. Loop: initialize, condition, body, progress, exit.
6. Pseudocode equivalence.
7. Mermaid render and visual inspection.

### Difficulty Progression

Recognize symbols -> trace path -> detect ambiguity -> convert representation
-> review loop termination.

### Dependencies

Algorithm contract and pseudocode model precede comparison. Flowchart adds no
new canonical outcome or Lesson identity.

## Validation

- ISO/Mermaid authority separation: Pass.
- Core symbol semantics: complete.
- Flowchart/DFD/state model conflict: 0.
- `LO006` meaning changed: no.

## References

- [Research Collection](./research-collection.md)
- [Research Validation](./research-validation.md)
- [Chapter Registry](../../academy/04-chapter-registry.md)
