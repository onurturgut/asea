---
document_type: "supporting-document"
supporting_document_id: "V01-SD-COMP-008"
supporting_document_type: "Compatibility Report"
title: "Programming Fundamentals Freeze Manifest Remediation"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Derived"
owner_role: "Repository Architect"
source_ids:
  - "V01-BP01"
  - "V01-MF004"
  - "V01-MF005"
  - "V01-FR-BP-003"
derived_from:
  - "../review/11-repository-review.md"
  - "../academy/12-academy-manifest.md"
---

# Programming Fundamentals Freeze Manifest Remediation

## Purpose

Close the manifest schema blocker identified in `REP-002` without replacing
the canonical Blueprint manifest or creating a new Freeze authority.

## Scope

The former Academy supporting Index was converted into a repository-standard
manifest used as an immutable Sprint 02B approval snapshot.

## Ownership

- `V01-MF004` remains the canonical Blueprint manifest.
- `V01-MF001` remains existing Volume/repository release history.
- `V01-MF005` owns only the derived Academy approval snapshot.
- `V01-FR-BP-003` remains the active canonical Freeze.

## Content

### Schema conversion

| Field | Before | After |
| --- | --- | --- |
| Document type | `supporting-document` | `manifest` |
| Identity | `V01-SD-IDX-009` | `V01-MF005` |
| Version | `0.1.0` | `1.0.0` |
| Status | Draft | Stable immutable snapshot |
| Artefact inventory | Human-readable table | 14 structured records |
| Integrity | No checksums | SHA-256 per artefact |
| Authority | Derived Index | Derived, Blueprint-controlled manifest |

### Compatibility

The new manifest does not supersede `V01-MF004` or amend `V01-FR-BP-003`.
Its `scope_version: 0.1.1` identifies the Academy approval candidate, not a new
canonical curriculum version.

### Immutability

`V01-MF005@1.0.0` is a byte-level snapshot. If Sprint 02B changes lifecycle
metadata or any artefact bytes, it must issue a new manifest ID rather than
editing this record.

## Validation

- Manifest metadata: conforming.
- Artefact count: 14.
- Missing artefacts: 0.
- Duplicate artefact IDs: 0.
- Missing version/status: 0.
- Missing checksum: 0.
- Checksum mismatches: 0.
- Canonical manifest conflicts: 0.

## References

- [Academy Approval Manifest](../academy/12-academy-manifest.md)
- [Blueprint Manifest](../../../../governance/blueprint-v2/31-correction-manifest.md)
- [Repository Standard v2](../../../standards/repository-standard-v2.md)
- [Freeze Standard](../../../standards/governance/05-freeze-standard.md)
