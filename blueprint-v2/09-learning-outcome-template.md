---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-LO-002"
supporting_document_type: "Learning Outcomes Registry"
title: "ASEA Blueprint v2 Learning Outcome Record Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-STD-CURRICULUM-002"
derived_from:
  - "./07-chapter-template.md"
  - "../docs/01-programming/learning-outcomes.md"
---

# ASEA Blueprint v2 Learning Outcome Record Template

## Purpose

This template defines the design and validation fields for measurable Learning
Outcomes in a candidate Volume Blueprint.

## Scope

It applies to new outcome proposals and migration mapping. It does not create,
reserve, or change an outcome.

## Ownership

- Curriculum Standard v2 owns outcome meaning and traceability.
- The Volume Learning Outcomes Registry owns canonical statements.
- The Volume Blueprint allocates planned outcome IDs.
- Assessments own evidence and passing criteria.

## Content

### Required record fields

| Field | Requirement |
| --- | --- |
| Outcome ID | Valid `V{NN}-LO{NNN}` identity |
| Volume ID | Same scope as the outcome |
| Module ID | Primary competency gate |
| Chapter IDs | Instruction locations |
| Statement | Observable performance, context, and expected quality |
| Bloom level | Remember, Understand, Apply, Analyze, Evaluate, or Create |
| Prerequisite outcome IDs | Minimal prior competencies |
| Concept IDs | Knowledge required |
| Assessment IDs | Direct evidence sources |
| Practice IDs | Labs, exercises, challenges, or projects |
| Mastery criteria | Observable threshold |
| Reassessment policy | Feedback and retry path |
| Source Blueprint version | Exact planning authority |

### Statement pattern

```text
Observable verb
+ object of performance
+ operating context
+ measurable quality or constraint
```

An outcome such as "understand modules" is not measurable. A valid statement
must let a reviewer identify the expected learner action and evidence.

### Outcome hierarchy

```text
Volume exit competency
-> Module competency gate
-> Chapter Learning Outcome
-> Assessment evidence
```

Volume and Module competencies are derived aggregations. Chapter-level Learning
Outcome records remain the atomic measurable contract.

### Design rules

- Each outcome expresses one assessable performance.
- Bloom level matches the verb and evidence.
- Every outcome maps to at least one Chapter and one Assessment.
- Applied outcomes require practical evidence.
- Reflection alone cannot establish mastery.
- An existing ID cannot receive a broader or different meaning.
- New migration outcomes use IDs after the highest allocated sequence.
- Duplicate outcomes are consolidated by reference, not copied.

### Review checklist

- Statement is specific and observable.
- Prerequisites are sufficient and acyclic.
- Instruction, practice, and assessment align.
- Passing criteria measure the statement directly.
- Difficulty and time are realistic.
- Outcome adds distinct value to the competency map.

## Validation

- The template uses the existing Learning Outcome identity family.
- No candidate statement is made canonical.
- Required mappings are bidirectional.
- Bloom and assessment evidence are compatible.
- Migration preserves all existing outcome meanings.

## References

- [Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- [Current Learning Outcomes](../docs/01-programming/learning-outcomes.md)
- [Assessment Template](./10-assessment-template.md)
- [Identifier Design](./03-identifier-standard.md)
