---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-031"
supporting_document_type: "Index"
title: "Volume 01 Knowledge Quality Metrics"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-VALIDATION-001"
derived_from:
  - "ASEA-SD-IDX-029"
  - "ASEA-SD-COMP-015"
  - "ASEA-SD-IDX-028"
---

# Volume 01 Knowledge Quality Metrics

## Purpose

This document defines reproducible quality metrics for the Volume 01 Knowledge
Foundation and records the current structural validation scores.

## Scope

Metrics cover rule execution, knowledge integrity, governance compliance,
traceability integrity, coverage, and repository health. Scores measure
structural conformance; they do not substitute for review approval, publication
readiness, or educational quality review.

## Ownership

- Canonical registries and standards own the measured facts.
- The Validation Engine owns only the derived calculations.
- No score changes an object lifecycle or review decision.
- Owner: Knowledge Architect.
- Measured: 2026-07-18.

## Content

### Scoring Contract

Each score uses only applicable binary validation rules:

```text
domain score = passed applicable rules / applicable rules × 100
```

No subjective penalty is applied without a canonical threshold. A failure
removes the affected rule from the passed count, never from the denominator.
`not-applicable` rules are reported but excluded from both counts.

### Current Scores

| Metric | Formula | Score |
| --- | --- | ---: |
| Knowledge Integrity | 31 passed Source, Evidence, Claim, Concept, and Graph rules / 31 | 100 |
| Governance Compliance | 8 passed Governance rules / 8 | 100 |
| Traceability Integrity | 7 passed Traceability rules / 7 | 100 |
| Coverage | 333 covered operational objects / 333 | 100 |
| Validation Pass Rate | 58 passed rules / 58 applicable rules | 100 |

### Repository Health Formula

```text
Repository Health =
  Knowledge Integrity × 0.30
  + Governance Compliance × 0.25
  + Traceability Integrity × 0.25
  + Coverage × 0.20
```

Current result:

```text
100 × 0.30 + 100 × 0.25 + 100 × 0.25 + 100 × 0.20 = 100
```

Repository Health Score: **100/100** for structural validation.

### Inventory Metrics

| Metric | Result |
| --- | ---: |
| Source entries | 20 |
| Active Sources | 8 |
| Proposed Sources | 12 |
| Evidence records | 14 |
| Claim records | 101 |
| Concept records | 101 |
| Knowledge Graph relations | 740 |
| Learning Outcomes | 46 |
| Assessments | 28 |
| Chapters | 28 |
| Modules | 7 |
| Operational traceability nodes | 333 |
| Direct traceability relations | 551 |
| Complete traceability paths | 272 |

### Integrity Metrics

| Metric | Result |
| --- | ---: |
| Duplicate canonical IDs | 0 |
| Broken canonical references | 0 |
| Operational orphans | 0 |
| Broken traceability chains | 0 |
| Duplicate traceability relations | 0 |
| Prerequisite or progression cycles | 0 |
| Disconnected Concept components | 0 beyond the single expected component |
| Forward traceability coverage | 100% |
| Reverse traceability coverage | 100% |

### Interpretation Boundary

A score of 100 means every declared structural rule passed for the measured
snapshot. It does not mean:

- 95 Validated Claims have become Approved;
- 95 Candidate Concepts have become Approved;
- 730 Candidate graph relations have become Approved;
- content production or publication has been reviewed;
- concentration and future maintenance risks do not exist.

Those facts remain governed by their canonical lifecycle and review processes.

## Validation

All score numerators and denominators reconcile to the 58-rule catalogue and
the current registry inventories. No hidden weighting or undocumented penalty
is used.

## References

- [Knowledge Validation Rules](./knowledge-validation-rules.md)
- [Knowledge Validation Report](./knowledge-validation-report.md)
- [Repository Health Report](./repository-health-report.md)
- [Traceability Coverage Report](./traceability-coverage-report.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)
