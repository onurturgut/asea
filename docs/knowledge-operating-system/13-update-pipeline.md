---
document_type: "standard"
standard_id: "ASEA-STD-KOS-013"
title: "ASEA Knowledge Update Pipeline"
version: "1.0.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Update Pipeline

## Purpose

This standard keeps published knowledge current without bypassing research, review, traceability, or history preservation.

## Update Triggers

Triggers include new specification or documentation versions, source withdrawal, security advisories, contradiction discovery, broken examples, learner evidence, accessibility defects, dependency changes, expired freshness dates, and approved curriculum decisions.

## Intake

Every trigger creates an Update Request with ID, reporter, date, affected source/claim/concept/content IDs, evidence, urgency, risk, proposed owner, and disclosure constraints. Duplicate requests are linked, not discarded.

## Triage

| Priority | Condition | Initial response target |
|---|---|---|
| Critical | Safety, security, legal, or materially false instruction | 1 business day |
| High | Broken core behavior or blocking accessibility defect | 3 business days |
| Normal | Staleness or bounded correctness issue | 10 business days |
| Planned | Improvement without current defect | Next planning cycle |

Targets define triage, not guaranteed resolution. The owner records actual dates.

## Impact Analysis

Traverse source → evidence → claim → concept → graph → outcome → chapter → asset → release. Record affected versions, learners, assessments, compatibility, migration need, and whether temporary withdrawal is required.

## Change Workflow

```text
Trigger → Intake → Triage → Impact Analysis → Research
→ Validation → Change Set → Reviews → Release → Monitoring
```

The change re-enters the earliest affected KOS stage. A source wording change does not require content revision if validation proves the meaning unchanged; that decision is recorded.

## Emergency Corrections

Release owners may temporarily withdraw unsafe or legally problematic content. Replacement still requires evidence and review. Emergency authority cannot rewrite published history, alter canonical IDs, or declare unvalidated knowledge correct.

## Propagation and Closure

Approved changes update authoritative records first. Derived views are regenerated from pinned source versions. The request closes only when releases, redirects or deprecations, manifests, changelog, notifications, and post-release checks are complete.

## Definition of Done

An update is done when impact is fully traversed, evidence and reviews support the change, all derived artifacts reconcile, history remains available, and monitoring confirms the intended correction.

## References

- [Versioning](./12-versioning.md)
- [Content Lifecycle](./17-content-lifecycle.md)
- [Migration Standard](../standards/governance/06-migration-standard.md)
