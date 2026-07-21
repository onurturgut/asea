---
document_type: "supporting-document"
supporting_document_id: "V01-SD-STUDY-004"
supporting_document_type: "Study Plan"
title: "Programming Fundamentals Academy Completion Requirements"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Assessment Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-ASMT-001"
  - "V01-SD-PROJ-001"
derived_from:
  - "../../assessment.md"
  - "../../projects.md"
  - "./06-learning-outcomes.md"
  - "./10-assessment-framework.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Completion Requirements

## Purpose

Define measurable Academy completion, remediation, interview-readiness, and
certification-readiness gates.

## Scope

This document aggregates existing outcome, assessment, and Project contracts.
It does not issue a certificate or alter canonical scoring rules.

## Ownership

Canonical assessment and Project requirements remain owned by
`V01-SD-ASMT-001` and `V01-SD-PROJ-001`. This document owns only the derived
Academy completion checklist.

## Content

### Completion criteria

A learner completes the Academy only when all conditions below are satisfied:

1. all 38 Chapter-based Lessons have required study and practice evidence;
2. all 66 canonical Learning Outcomes have accepted evidence;
3. all 38 Chapter assessments meet their outcome gates;
4. all 12 Module evidence reviews pass;
5. Mini Projects `V01-P01`-`V01-P08` pass;
6. Final Project `V01-CP01` passes;
7. the final technical review and technical defense pass;
8. no unresolved critical correctness, integrity, or traceability defect
   remains;
9. required reflection and self-assessment records are complete;
10. AI assistance, if used, is disclosed and the learner independently
    explains the submitted work.

### Evidence matrix

| Gate | Required evidence | Completion signal |
| --- | --- | --- |
| Lesson | Attempt, practice evidence, reflection | Required Lesson cycle complete |
| Chapter | Mapped outcome evidence and `Cnn-AS01` | Chapter outcomes accepted |
| Module | All member Chapters plus Module review | Module competency gate accepted |
| Mini Project | Canonical deliverables and review | Project completion criteria met |
| Final Project | Full delivery dossier and defense | `V01-CP01` accepted |
| Academy | All prior gates and final self-assessment | Certification-ready |

### Remediation rules

- A failed outcome receives targeted practice and reassessment.
- Passed unrelated outcomes do not need to be repeated.
- A critical defect blocks the affected Chapter, Project, or final gate until
  resolved.
- Dependency gates remain enforced during remediation.
- Time spent is not a substitute for demonstrated evidence.

### Interview readiness

The learner is interview-ready when they can independently:

- define and decompose a bounded problem;
- trace data and control flow;
- explain function, object, array, closure, and module behavior;
- compare basic algorithmic trade-offs;
- reproduce and debug a failure;
- justify tests and refactoring decisions;
- present one Project and answer follow-up questions using evidence.

### Certification readiness

Certification readiness is an eligibility decision, not automatic
certification. It requires identity verification, complete traceability, all
completion gates, repository integrity, and final reviewer approval.

### Non-completion conditions

The Academy is not complete when any canonical outcome is orphaned or failed,
any required Project is missing, critical defects remain, protected solutions
replace learner evidence, or the learner cannot independently explain the
submitted work.

## Validation

- Chapter completion coverage: 38 of 38.
- Outcome completion coverage: 66 of 66.
- Module gate coverage: 12 of 12.
- Mini Project coverage: 8 of 8.
- Final Project coverage: 1 of 1.
- Completion conditions are measurable and evidence-based.

## References

- [Canonical Assessment Plan](../../assessment.md)
- [Canonical Project Plan](../../projects.md)
- [Learning Outcome Map](./06-learning-outcomes.md)
- [Academy Roadmap](./14-academy-roadmap.md)
