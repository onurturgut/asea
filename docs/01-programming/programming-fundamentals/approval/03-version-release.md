---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-012"
supporting_document_type: "Compatibility Report"
title: "Programming Fundamentals Academy Version Release"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Derived"
owner_role: "Release Manager"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-003"
  - "V01-MF005"
  - "V01-RV039"
derived_from:
  - "../academy/12-academy-manifest.md"
  - "./01-canonical-approval.md"
  - "./02-curriculum-freeze-record.md"
---

# Programming Fundamentals Academy Version Release

## Purpose

Record the versions and compatibility boundary approved for curriculum
production. This is an architecture approval release, not a published learner
content release and not a repository tag declaration.

## Scope

The release covers the immutable Academy architecture snapshot represented by
`V01-MF005` and controlled by `V01-BP01@2.1.0`.

## Ownership

The Release Manager owns this version record. Curriculum meaning remains
owned by the canonical Blueprint and its authoritative registries.

## Content

### Version record

| Field | Value |
| --- | --- |
| Academy curriculum version | `0.1.1` |
| Approval release version | `1.0.0` |
| Blueprint version | `2.1.0` |
| Freeze record version | `1.0.0` |
| Manifest version | `1.0.0` |
| Approval date | 2026-07-21 |
| Lifecycle | Stable architecture approval |
| Content publication | Not included |

The Academy version remains `0.1.1` because no frozen Academy artefact was
modified or silently version-bumped during approval.

### Compatibility

| Target | Compatibility |
| --- | --- |
| `V01-BP01@2.1.0` | Compatible |
| `V01-FR-BP-003` | Inherits active structural freeze |
| `V01-MF004` | Canonical Blueprint manifest preserved |
| `V01-MF005` | Exact Academy approval snapshot |
| Standards v2 | Compatible |
| Governance Extension | Compatible |
| Content Production Engine | Authorized input |

### Lifecycle boundary

The architecture is Stable for production planning and content generation.
Individual educational artefacts created later retain their own Draft,
Review, and Stable lifecycles and are not pre-approved by this record.

## Validation

- Every version is valid SemVer.
- Scope versions match their source records.
- No tag, content release, or repository publication is claimed.
- No historical version record was modified.

## References

- [Canonical Approval](./01-canonical-approval.md)
- [Curriculum Freeze Record](./02-curriculum-freeze-record.md)
- [Blueprint Version History](../../../../governance/blueprint-v2/21-version-history.md)
- [Repository Standard v2](../../../standards/repository-standard-v2.md)
