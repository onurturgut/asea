---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "ASEA Blueprint v2 Assessment Architecture Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Assessment Architect"
source_ids:
  - "ASEA-STD-CURRICULUM-002"
  - "ASEA-STD-VOLUME-002"
derived_from:
  - "./09-learning-outcome-template.md"
  - "../docs/01-programming/assessment.md"
---

# ASEA Blueprint v2 Assessment Architecture Template

## Purpose

This template defines a layered assessment model that produces valid evidence
for Chapter, Module, Volume, and Academy progression.

## Scope

It covers instruments, outcome coverage, scoring, integrity, retry,
aggregation, projects, Capstone, reviews, and AI-assisted work.

## Ownership

- Curriculum Standard v2 owns assessment schemas and strategy.
- Volume Standard v2 owns Capstone and completion gates.
- Individual assessment records own scoring and passing rules.
- Academy views derive completion from canonical Volume evidence.

## Content

### Assessment hierarchy

```text
Chapter Assessment
├── Quiz or open-ended conceptual evidence
├── Exercise or Challenge
├── Lab or Project contribution
└── Reflection

Module Assessment
└── Aggregated outcome evidence and competency gate

Volume Assessment
├── Final Quiz
├── Technical Review
├── Capstone Review
└── Self Assessment

Academy Milestone
└── Derived completion of required Volume gates
```

### Required plan fields

| Field | Requirement |
| --- | --- |
| Assessment ID | Valid Chapter, Module, or Volume assessment ID |
| Scope type and ID | Exact governed scope |
| Outcome IDs | Complete direct coverage |
| Instruments | Canonical quiz, lab, exercise, challenge, project, or review IDs |
| Scoring model | Weights and aggregation method |
| Passing criteria | Observable minimum evidence |
| Critical gates | Requirements that cannot be averaged away |
| Attempt policy | Retry timing, feedback, and limits |
| Integrity policy | Answer, solution, and hidden-test separation |
| AI policy | Permitted help, disclosure, verification, and prohibited delegation |
| Reviewer role | Human or independent review owner |
| Traceability | Bidirectional source links |

### Evidence design rules

- Recall instruments cannot prove implementation skill.
- Code execution alone cannot prove engineering judgment.
- Practical outcomes require observable artefacts.
- Rubric criteria use the same skill boundaries as their outcomes.
- A score cannot compensate for failure of a safety or prerequisite gate.
- Answer keys remain separate until the learner submits an attempt.
- Reassessment targets failed outcomes, not arbitrary content repetition.

### AI-assisted assessment

When AI use is permitted, the assessment records:

- the learner's independent attempt;
- interaction or prompt evidence when required;
- verification against tests or authoritative sources;
- the learner's explanation of accepted and rejected suggestions;
- privacy and data-handling constraints.

AI output cannot be the sole evidence of learner mastery.

### Completion aggregation

Academy progress is a derived view of Volume completion. It cannot invent a
passing rule that contradicts a Volume assessment. Shared Volumes count once
even when they appear in multiple Academy views.

## Validation

- Every outcome has appropriate direct evidence.
- Instrument difficulty matches the Bloom level.
- Passing and retry rules are explicit.
- Answer integrity controls are present.
- Capstone requires only taught technologies.
- Academy completion derives from canonical Volume gates.

## References

- [Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- [Volume Standard v2](../docs/standards/volume-standard-v2.md)
- [Current Assessment Plan](../docs/01-programming/assessment.md)
- [Learning Outcome Template](./09-learning-outcome-template.md)
