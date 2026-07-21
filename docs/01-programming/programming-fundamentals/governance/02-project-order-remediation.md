---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-007"
supporting_document_type: "Compatibility Report"
title: "Programming Fundamentals Project Order Remediation"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-PROJ-001"
  - "V01-RV032"
derived_from:
  - "../review/08-project-review.md"
  - "../../projects.md"
  - "../academy/14-academy-roadmap.md"
---

# Programming Fundamentals Project Order Remediation

## Purpose

Close `PROJ-001` by aligning the derived Academy milestone schedule with the
canonical Project prerequisite sequence.

## Scope

Only Project milestone placement is corrected. Project IDs, definitions,
outcomes, competencies, durations, assessment contracts, and educational
content remain unchanged.

## Ownership

- The canonical Project Plan owns Project prerequisites and definitions.
- The Academy Roadmap owns the derived milestone presentation.
- This report records the remediation and validation evidence.

## Content

### Before

Milestone 9 listed `P07`, while prerequisite `P06` was not completed until
Milestone 10.

### After

| Milestone | Gate |
| ---: | --- |
| 1 | `P01` |
| 2 | `P02` |
| 4 | `P03` |
| 5 | `P04` |
| 7 | `P05` |
| 10 | `P06`, then `P07` |
| 12 | `P08` |
| 13 | `CP01` Final Project |

The complete Project order is now:

```text
P01 -> P02 -> P03 -> P04 -> P05 -> P06 -> P07 -> P08 -> CP01
```

### Modified record

`14-academy-roadmap.md` advanced from `0.1.0` to `0.1.1`. No locked registry,
Learning Path, Project definition, or educational review was modified.

## Validation

- Project identities: unchanged.
- Project definitions: unchanged.
- Project dependency order: valid.
- `P07` before `P06`: no.
- `P08` before `P07`: no.
- Final Project before `P08`: no.
- Remaining Project-order violations: 0.

## References

- [Remediated Academy Roadmap](../academy/14-academy-roadmap.md)
- [Canonical Project Plan](../../projects.md)
- [Sprint 02 Project Review](../review/08-project-review.md)
