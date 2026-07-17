---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-019"
supporting_document_type: "Index"
title: "Volume 01 Claim Index"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-SD-IDX-018"
derived_from:
  - "ASEA-SD-IDX-018"
  - "ASEA-SD-IDX-003"
---

# Volume 01 Claim Index

## Purpose

This index provides deterministic navigation across all 101 operational Claim
records and their primary Chapter ownership.

## Scope

It indexes the complete Volume 01 Claim inventory as of 2026-07-18 without
duplicating atomic Claim statements.

## Ownership

- **Atomic Claim authority:** [`knowledge/registry/claims/`](../../knowledge/registry/claims/).
- **Derived registry:** [Canonical Claim Registry](./claim-registry.md).
- **Owner:** Knowledge Architect.

## Content

### Chapter Claim Ranges

| Chapter | Claim IDs | Claim Count |
| --- | --- | ---: |
| `V01-C01` | `ASEA-CLM-000007`–`ASEA-CLM-000011` | 5 |
| `V01-C02` | `ASEA-CLM-000001`–`ASEA-CLM-000006` | 6 |
| `V01-C03` | `ASEA-CLM-000012`–`ASEA-CLM-000015` | 4 |
| `V01-C04` | `ASEA-CLM-000016`–`ASEA-CLM-000019` | 4 |
| `V01-C05` | `ASEA-CLM-000020`–`ASEA-CLM-000023` | 4 |
| `V01-C06` | `ASEA-CLM-000024`–`ASEA-CLM-000025` | 2 |
| `V01-C07` | `ASEA-CLM-000026`–`ASEA-CLM-000028` | 3 |
| `V01-C08` | `ASEA-CLM-000029`–`ASEA-CLM-000031` | 3 |
| `V01-C09` | `ASEA-CLM-000032`–`ASEA-CLM-000035` | 4 |
| `V01-C10` | `ASEA-CLM-000036`–`ASEA-CLM-000038` | 3 |
| `V01-C11` | `ASEA-CLM-000039`–`ASEA-CLM-000042` | 4 |
| `V01-C12` | `ASEA-CLM-000043`–`ASEA-CLM-000045` | 3 |
| `V01-C13` | `ASEA-CLM-000046`–`ASEA-CLM-000048` | 3 |
| `V01-C14` | `ASEA-CLM-000049`–`ASEA-CLM-000051` | 3 |
| `V01-C15` | `ASEA-CLM-000052`–`ASEA-CLM-000054` | 3 |
| `V01-C16` | `ASEA-CLM-000055`–`ASEA-CLM-000057` | 3 |
| `V01-C17` | `ASEA-CLM-000058`–`ASEA-CLM-000060` | 3 |
| `V01-C18` | `ASEA-CLM-000061`–`ASEA-CLM-000063` | 3 |
| `V01-C19` | `ASEA-CLM-000064`–`ASEA-CLM-000067` | 4 |
| `V01-C20` | `ASEA-CLM-000068`–`ASEA-CLM-000070` | 3 |
| `V01-C21` | `ASEA-CLM-000071`–`ASEA-CLM-000073` | 3 |
| `V01-C22` | `ASEA-CLM-000074`–`ASEA-CLM-000077` | 4 |
| `V01-C23` | `ASEA-CLM-000078`–`ASEA-CLM-000081` | 4 |
| `V01-C24` | `ASEA-CLM-000082`–`ASEA-CLM-000084` | 3 |
| `V01-C25` | `ASEA-CLM-000085`–`ASEA-CLM-000088` | 4 |
| `V01-C26` | `ASEA-CLM-000089`–`ASEA-CLM-000092` | 4 |
| `V01-C27` | `ASEA-CLM-000093`–`ASEA-CLM-000096` | 4 |
| `V01-C28` | `ASEA-CLM-000097`–`ASEA-CLM-000101` | 5 |

### Navigation

| View | Purpose |
| --- | --- |
| [Claim Registry](./claim-registry.md) | Statements, metadata, Evidence, Source, and curriculum mappings |
| [Claim Types](./claim-types.md) | Canonical type boundary and descriptive profiles |
| [Claim Relations](./claim-relations.md) | Relationship contract and group mappings |
| [Claim Authority Matrix](./claim-authority-matrix.md) | Authority, verification, and Evidence distributions |
| [Claim Coverage Report](./claim-coverage-report.md) | Coverage and density analysis |
| [Claim Conflict Analysis](./claim-conflict-analysis.md) | Duplicate, conflict, and circularity results |
| [Claim Validation Report](./claim-validation-report.md) | Reproducible validation results |
| [Claim Governance](./claim-governance.md) | Admission, review, and change control |

## Validation

The 28 ranges contain 101 unique Claim IDs with no overlap or gap.

## References

- [KOS Registry Manifest](../../knowledge/registry-manifest.json)
- [Claim Schema](../../knowledge/schemas/claim.schema.json)
- [Concept Index](./concept-index.md)
