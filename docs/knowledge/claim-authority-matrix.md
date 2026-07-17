---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-021"
supporting_document_type: "Index"
title: "Volume 01 Claim Authority Matrix"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-SD-COMP-004"
  - "ASEA-SD-IDX-018"
derived_from:
  - "ASEA-SD-COMP-004"
  - "ASEA-SD-IDX-013"
  - "ASEA-SD-IDX-018"
---

# Volume 01 Claim Authority Matrix

## Purpose

This matrix reports Claim authority, verification, review, Evidence count, and
Source independence without copying Source or Evidence metadata into Claims.

## Scope

It covers all 101 operational Claims as of 2026-07-18.

## Ownership

- **Tier scores and confidence:** Atomic Claim.
- **Source tier:** Atomic Source.
- **Evidence independence:** Atomic Evidence.
- **Matrix authority:** Derived.
- **Owner:** Knowledge Architect.

## Content

### Authority Distribution

| Authority Composition | Claim Count | Share |
| --- | ---: | ---: |
| Tier 1 — Academic only | 33 | 32.7% |
| Tier 2 — Official Documentation only | 4 | 4.0% |
| Tier 1 + Tier 2 | 64 | 63.4% |
| Tier 3 — Industry | 0 | 0.0% |
| Tier 4 — Community | 0 | 0.0% |

Percentages are rounded and may total 100.1%.

### Verification and Review Distribution

| Workflow / Verification | Review Decision | Count | Production Eligibility |
| --- | --- | ---: | --- |
| Approved | Approved | 6 | Eligible within recorded scope |
| Validated | Changes Required | 95 | Not eligible until formal Claim Review |

### Evidence per Claim

| Evidence Count | Claim Count | Claim-to-Evidence Edges |
| --- | ---: | ---: |
| 1 | 35 | 35 |
| 2 | 66 | 132 |
| **Total** | **101** | **167** |

### Independence Interpretation

Two Evidence records count as independent only when their
`independence_group` values differ. The 64 mixed Tier 1 + Tier 2 Claims use an
academic curriculum Source and a separate official documentation Source. Claim
scores remain bounded by the recorded scope and do not imply production
approval.

## Validation

All 101 Claims have valid tier scores, confidence components, freshness scores,
Evidence counts, review decisions, and next-review dates. The incorrect legacy
Industry score on `ASEA-CLM-000006` was removed in version 1.0.1 because both
supporting Sources are Tier 2.

## References

- [Authority Model](./authority-model.md)
- [Canonical Claim Registry](./claim-registry.md)
- [Evidence Authority Matrix](./evidence-authority-matrix.md)
- [Claim Validation Report](./claim-validation-report.md)
