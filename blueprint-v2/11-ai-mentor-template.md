---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-042"
supporting_document_type: "Index"
title: "ASEA Blueprint v2 AI Mentor Package Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "AI and Governance Architect"
source_ids:
  - "ASEA-STD-KOS-015"
  - "ASEA-SD-IDX-035"
derived_from:
  - "./08-lesson-template.md"
  - "./10-assessment-template.md"
  - "../docs/production/output-types.md"
---

# ASEA Blueprint v2 AI Mentor Package Template

## Purpose

This template defines a grounded, attempt-first AI Mentor package for one
canonical Chapter version.

## Scope

It covers grounding, learner state, guidance boundaries, misconception support,
assessment integrity, privacy, verification, review, and observability. It
creates no AI Mentor content or model integration.

## Ownership

- Canonical Claims and Concepts remain owned by KOS registries.
- Chapter and outcome meaning remain owned by curriculum records.
- Assessment owners define protected answers and allowed assistance.
- The AI package is Derived and cannot approve, grade, or change canonical
  records.

## Content

### Required package inputs

| Input | Requirement |
| --- | --- |
| Chapter ID and version | Exact learner scope |
| Blueprint and CPP versions | Approved production boundaries |
| Learning Outcome IDs | Guidance and assessment targets |
| Prerequisite Concept IDs | Readiness checks |
| Allowed Claim IDs | Grounding boundary |
| Evidence and Source IDs | Verification path |
| Misconception catalog | Diagnosed errors and repair strategy |
| Assessment policy | Allowed hints and protected material |
| Language profile | Turkish learner interaction and terminology rules |
| Safety and privacy profile | Data minimization and prohibited inputs |

### Interaction contract

```text
Check prerequisite readiness
-> Ask for learner attempt
-> Diagnose reasoning, not only output
-> Give the smallest useful hint
-> Ask learner to revise
-> Verify against source or test
-> Invite explanation and reflection
```

### Guidance levels

| Level | Permitted behavior |
| --- | --- |
| 0 — Orient | Restate goal and constraints |
| 1 — Probe | Ask a diagnostic question |
| 2 — Hint | Point to one concept or test |
| 3 — Scaffold | Provide a partial structure without the answer |
| 4 — Compare | Compare learner work with a verified alternative after attempt |
| 5 — Explain | Explain a completed or explicitly released solution |

Assessment policy determines the maximum permitted level.

### Required package sections

1. Scope and Source Pins
2. Learner Prerequisites
3. Outcome Map
4. Concept and Claim Grounding
5. Misconceptions
6. Diagnostic Questions
7. Hint Ladder
8. Verification Methods
9. Assessment Boundaries
10. Safety and Privacy
11. Escalation
12. Review and Telemetry

### Prohibited behavior

- inventing facts or citations;
- exposing protected answers before an authorized attempt;
- completing assessed work on behalf of the learner;
- accepting code only because it runs;
- changing IDs, outcomes, or mastery state;
- processing secrets or unnecessary personal data;
- treating model output as evidence.

### Review contract

Technical Review verifies grounding and code guidance. Content Review verifies
pedagogy and language. Assessment Review verifies hint and answer boundaries.
Governance Review verifies privacy, provenance, and authority.

## Validation

- Every guidance path resolves to approved Claims and Sources.
- Hint ladders preserve attempt-first behavior.
- Protected assessment material is isolated.
- Learner data requirements are minimal.
- Model output cannot mutate curriculum or mastery records.
- Package version pins all canonical inputs.

## References

- [AI-Assisted Knowledge Workflow](../docs/knowledge-operating-system/15-ai-workflow.md)
- [Production Output Types](../docs/production/output-types.md)
- [Lesson Experience Template](./08-lesson-template.md)
- [Assessment Template](./10-assessment-template.md)
