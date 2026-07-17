---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-007"
supporting_document_type: "Compatibility Report"
title: "ASEA Evidence Type Compatibility Profile"
version: "1.1.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-013"
---

# ASEA Evidence Type Compatibility Profile

## Purpose

This document prevents an unauthorized Evidence-type enum while providing
consistent descriptive profiles for registry navigation and later governance
review.

## Scope

It applies to Volume 01 Evidence documentation. It does not alter
`evidence.schema.json`, the canonical `record_type`, or the KOS lifecycle.

## Ownership

- **Canonical type owner:** `knowledge/schemas/evidence.schema.json`.
- **Canonical value:** `record_type: evidence`.
- **Profile owner:** Knowledge Architect.
- **Authority:** Informational; profiles are not schema values.

## Content

### Canonical Rule

The KOS currently defines one Evidence record type: `evidence`. No canonical
`evidence_type` field or enum exists. Adding suggested values directly to JSON
records would violate `unevaluatedProperties: false`.

### Descriptive Profiles

| Profile | Meaning | Current Count | Governance State |
| --- | --- | --- | --- |
| Academic curriculum section | Exact curriculum knowledge unit or competency section | 4 | Informational profile |
| Official documentation section | Exact maintained documentation section | 4 | Informational profile |
| Institutional course description | Exact institutional course page or section | 1 | Informational profile |
| Language specification section | Exact normative or abstract-machine specification section | 5 | Informational profile |
| Research result | Exact result in a research publication | 0 | Proposal only |
| Peer-reviewed paper section | Exact section of a peer-reviewed publication | 0 | Proposal only |
| Book chapter | Exact chapter or page range | 0 | Proposal only |
| RFC section | Exact RFC section | 0 | Proposal only |
| Benchmark result | Reproducible benchmark configuration and result | 0 | Proposal only |
| Industry practice | Accountable production-practice guidance | 0 | Proposal only |
| Engineering standard section | Exact professional or engineering standard section | 0 | Proposal only |
| Reference implementation location | Versioned implementation file, symbol, and revision | 0 | Proposal only |

### Governance Proposal Boundary

A future enum may be proposed only through the existing Decision Record and
schema-versioning process. Approval must define enum ownership, migration,
validation, and backward compatibility. Until then, profiles may appear only in
derived Markdown views.

## Validation

All fourteen Evidence records retain `record_type: evidence`. No unsupported field,
enum, lifecycle value, or authority level was introduced.

## References

- [Evidence Schema](../../knowledge/schemas/evidence.schema.json)
- [Evidence Foundation](./evidence-foundation.md)
- [Decision Record Standard](../standards/governance/04-decision-record-standard.md)
