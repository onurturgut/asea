---
document_type: "supporting-document"
supporting_document_id: "V01-SD-ASMT-002"
supporting_document_type: "Assessment Plan"
title: "Programming Fundamentals Academy Assessment Framework"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Assessment Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-ASMT-001"
  - "V01-SD-LO-002"
  - "V01-SD-PROJ-001"
derived_from:
  - "../../assessment.md"
  - "../../../../governance/blueprint-v2/05-learning-outcome-registry.md"
  - "../../projects.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Assessment Framework

## Purpose

Define how Lesson, Chapter, Module, Project, interview-readiness, and
certification-readiness evidence will measure the frozen curriculum.

## Scope

This is assessment architecture only. It creates no questions, exercises,
labs, rubrics, protected answers, or learner submissions.

## Ownership

The canonical Assessment Plan and Learning Outcome Registry own assessment
meaning and traceability. This framework aggregates those contracts for
Academy production.

## Content

### Assessment layers

| Layer | Instrument | Frequency | Evidence purpose |
| --- | --- | ---: | --- |
| Lesson | Retrieval quiz plan | 38 | Check terminology and mental-model recall before protected answers |
| Lesson | Hands-on exercise plan | 38 | Produce immediate application evidence |
| Chapter | Lab `V01-Cnn-L01` | 38 | Demonstrate practical outcome evidence |
| Chapter | Assessment `V01-Cnn-AS01` | 38 | Decide Chapter outcome attainment |
| Chapter | Challenge and reflection | 38 | Extend transfer and expose reasoning |
| Module | Evidence review gate | 12 | Aggregate member Chapter outcomes |
| Integration | Mini Project | 8 | Combine outcomes across a bounded scope |
| Final | `V01-CP01` | 1 | Integrate Academy outcomes in a defendable program |
| Readiness | Interview evidence review | 1 per Module plus final | Explain decisions without hidden assistance |
| Readiness | Certification review | 1 | Verify identity, completeness, and final evidence |

### Chapter assessment mapping

The deterministic rule is:

```text
V01-Cnn Lesson view
-> V01-Cnn-L01 practical Lab
-> V01-Cnn-AS01 Chapter assessment
-> mapped canonical Learning Outcomes
```

The complete Chapter-to-outcome relationship is recorded in
[06-learning-outcomes.md](./06-learning-outcomes.md).

### Module assessment design

| Module | Evidence gate |
| --- | --- |
| `M01` | Problem contract, algorithm trace, and `P01` |
| `M02` | State/data-flow evidence and `P02` |
| `M08` | Runtime workflow and conversion/equality defense |
| `M03` | Branch and termination evidence and `P03` |
| `M04` | Function contracts and `P04` |
| `M10` | Callback-flow and closure-boundary defense |
| `M05` | Data model, recursive trace, and `P05` |
| `M09` | Object identity and array-pipeline evidence |
| `M11` | Numeric and temporal boundary evidence |
| `M06` | Algorithm comparison and `P06` |
| `M12` | Exception and module-boundary review |
| `M07` | Reliability evidence, `P08`, and `CP01` readiness |

All abbreviated IDs inherit the `V01-` prefix.

### Assessment progression

- Beginner: explain, classify, trace, and apply in bounded examples.
- Developing: design and compare solutions under stated constraints.
- Intermediate: integrate outcomes, handle failure paths, and defend
  engineering decisions.

### Scoring principles

- correctness and outcome evidence take precedence over completion;
- protected answers follow an independent attempt;
- applied outcomes require practical evidence;
- critical correctness or integrity failures cannot be averaged away;
- reassessment targets failed outcomes rather than repeating unrelated work;
- AI assistance must be disclosed and the learner must independently explain
  submitted decisions.

### Interview readiness

Interview readiness is demonstrated through concise explanation, live tracing,
trade-off analysis, debugging hypotheses, and project defense. This Sprint
defines the evidence categories only and does not generate interview questions.

### Certification readiness

Certification readiness requires:

- all 66 outcomes with accepted evidence;
- 38 Chapter assessments complete;
- 12 Module gates complete;
- `P01`-`P08` and `CP01` accepted;
- no unresolved critical defect;
- final technical defense and self-assessment complete.

## Validation

- Lesson assessment coverage: 38 of 38.
- Chapter assessment coverage: 38 of 38.
- Module gate coverage: 12 of 12.
- Outcome assessment coverage: 66 of 66.
- Mini Project coverage: 8 of 8.
- Final Project coverage: 1 of 1.
- Assessment content generated: 0.

## References

- [Canonical Assessment Plan](../../assessment.md)
- [Canonical Learning Outcome Registry](../../../../governance/blueprint-v2/05-learning-outcome-registry.md)
- [Project Framework](./11-project-framework.md)
