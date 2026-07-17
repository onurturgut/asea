---
document_type: "standard"
standard_id: "ASEA-STD-KOS-014"
title: "ASEA Knowledge Quality Metrics"
version: "1.0.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Quality Metrics

## Purpose

This standard defines evidence-based indicators for KOS health. Metrics reveal risk; they do not authorize publication or replace qualitative review.

## Core Metrics

| Metric | Calculation | Release target |
|---|---|---|
| Claim traceability | Material claims with approved evidence / all material claims | 100% |
| Source verifiability | Sources with resolvable identity and locator / all sources | 100% |
| Freshness compliance | Active claims reviewed before due date / active claims | 100% |
| Contradiction closure | Material and Blocking contradictions dispositioned / total | 100% |
| Outcome coverage | Outcomes with instruction, practice, assessment / target outcomes | 100% |
| Graph integrity | Valid active nodes and edges / all active nodes and edges | 100% |
| Example reproducibility | Passing executable examples / executable examples | 100% |
| Asset accessibility | Assets passing required checks / applicable assets | 100% |
| Link integrity | Resolving internal links / internal links | 100% |
| Review completion | Required Approved gates / required gates | 100% |

Targets are release gates for the affected scope. Draft dashboards may display lower values without blocking draft creation.

## Learning Quality Indicators

Track objective-assessment alignment, task completion, misconception recurrence, retry success, learner-reported clarity, transfer-task performance, and time-on-task variance. Personal data is minimized and aggregated; metrics are never used to claim learning effectiveness without an appropriate evaluation design.

## Process Indicators

Track source-to-validation lead time, rework rate by stage, review latency, stale-record age, update closure time, escaped defects, and regenerated-asset failures. Optimize the system, not individual contributor activity.

## Metric Integrity

Each metric has an owner, scope, formula, data source, collection interval, limitations, threshold, and version. Missing data is reported as missing, never converted to a passing score. Derived dashboards identify source registry version and generated date.

## Anti-Gaming Rules

Splitting claims to inflate counts, marking evidence independent when it shares an origin, closing findings without verification, excluding difficult assets from denominators, or redefining materiality after failure is prohibited.

## Quality Review

Monthly operational review examines trends and overdue items; each release records a scoped snapshot. Threshold changes require a decision record and cannot retroactively change a past release result.

## Definition of Done

A quality report is done when formulas are reproducible, source data is pinned, limitations are stated, thresholds are applied consistently, failures have owners, and no metric substitutes for required review.

## References

- [Source Validation](./05-source-validation.md)
- [Review Process](./11-review-process.md)
- [Audit Standard](../standards/governance/07-audit-standard.md)
