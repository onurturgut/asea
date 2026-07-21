---
document_type: "supporting-document"
supporting_document_id: "V01-SD-IDX-004"
supporting_document_type: "Index"
title: "Volume 01 Blueprint Version History"
version: "1.1.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Release Manager"
source_ids:
  - "V01-BP01"
  - "V01-ADR-017"
  - "V01-FR-BP-001"
  - "V01-FR-BP-002"
  - "V01-FR-BP-003"
derived_from:
  - "../../docs/01-programming/volume-blueprint.md"
  - "./02-canonical-schema.md"
  - "./18-blueprint-v2-freeze.md"
  - "./29-blueprint-v2-refreeze.md"
---

# Volume 01 Blueprint Version History

## Purpose

Maintain the authoritative lifecycle history for Volume 01 Blueprint versions
without duplicating curriculum meaning.

## Scope

The index records architecture version, approval, migration date, ADR,
authorization, Freeze, canonical status, and historical preservation.

## Ownership

- Owner: Release Manager.
- Curriculum meaning remains in the versioned Blueprint.
- Review decisions remain in immutable Review records.
- Freeze authority remains in immutable Freeze records.

## Content

### Version records

| Blueprint | Version | Approval | Migration date | ADR | Owner authorization | Freeze | Registry status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `V01-BP01` | `1.1.0` | Approved | 2026-07-18 | Historical decisions | Approved | `V01-FR-BP-001` | Archived |
| `V01-BP01` | `2.0.0` | Approved | 2026-07-19 | `V01-ADR-017` | Approved | `V01-FR-BP-002` | Superseded |
| `V01-BP01` | `2.1.0` | Approved | 2026-07-19 | `V01-CR-BP-003` | Approved | `V01-FR-BP-003` | Canonical |

### Transition

`V01-BP01@2.1.0` supersedes `V01-BP01@2.0.0` through the bounded Mini Project
contract correction. Blueprint v1 and v2.0 evidence remain immutable.

## Validation

- Version sequence follows SemVer.
- Every frozen version has immutable approval and Freeze evidence.
- Exactly one version has Canonical registry status.
- Migration date and ADR reference resolve.
- Historical source recovery remains available.

## References

- [Canonical Registry](./22-canonical-registry-v2.md)
- [Blueprint v2 Freeze](./18-blueprint-v2-freeze.md)
- [Blueprint v1 Freeze](../../docs/01-programming/reviews/volume-01-freeze-record.md)
- [ADR-017](../../docs/01-programming/migrations/v01-curriculum-v2-decision.md)
