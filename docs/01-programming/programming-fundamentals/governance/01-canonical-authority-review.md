---
document_type: "review"
review_id: "V01-RV038"
title: "Programming Fundamentals Academy Canonical Authority Review"
version: "1.0.0"
status: "Stable"
review_type: "Repository"
review_domain: "Governance"
scope_id: "V01"
scope_version: "0.1.1"
reviewer_roles:
  - "Repository Governance Engineer"
decision: "Approved"
reviewed_on: "2026-07-21"
findings: 0
updated_files:
  - "./01-canonical-authority-review.md"
  - "../academy/12-academy-manifest.md"
---

# Programming Fundamentals Academy Canonical Authority Review

## Review Scope

Review the authority relationship among the Blueprint, Academy view,
curriculum records, manifests, registries, and Freeze records.

## Inputs

- [Canonical Blueprint](../../../../governance/blueprint-v2/02-canonical-schema.md)
- [Active Freeze](../../../../governance/blueprint-v2/29-blueprint-v2-refreeze.md)
- [Academy View Template](../../../../blueprint-v2/05-academy-template.md)
- [Academy Approval Manifest](../academy/12-academy-manifest.md)
- [Sprint 02 Repository Review](../review/11-repository-review.md)

## Validation Method

Resolve authority from Standards Index v2 through Repository, Curriculum,
Volume, Supporting Document, Manifest, and Freeze contracts. Reject any model
that creates an Academy identity owner or a second curriculum source of truth.

## Findings

No open finding remains after adopting the authority hierarchy below.

## Decision

**Approved.** The governing relationship is:

```text
Standards Index v2
-> Repository/Curriculum/Volume Standards v2
-> V01-BP01@2.1.0 (single canonical curriculum authority)
-> V01-FR-BP-003 (active canonical Blueprint Freeze)
-> canonical registries and V01-MF004
-> Programming Fundamentals Academy (Derived, Approved, Blueprint Controlled)
-> V01-MF005 (Derived approval snapshot)
```

“Approved” describes the governance classification decision. It does not
promote Draft Academy artefacts to Stable and does not grant an independent
Academy freeze scope.

## Required Actions

- Preserve `V01-BP01@2.1.0` as the single source of truth.
- Keep Academy documents Derived.
- Treat Academy approval as approval of a Blueprint-controlled view.
- Use only supported Freeze types and scopes.

## Updated Files

- `01-canonical-authority-review.md`
- `../academy/12-academy-manifest.md`

## References

- [Standards Index v2](../../../standards/standards-index-v2.md)
- [Freeze Standard](../../../standards/governance/05-freeze-standard.md)
- [Review Standard](../../../standards/governance/02-review-standard.md)
