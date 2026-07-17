---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-005"
supporting_document_type: "Compatibility Report"
title: "ASEA Evidence Foundation"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-010"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-010"
---

# ASEA Evidence Foundation

## Purpose

This document prepares the schema, lifecycle, ownership, extraction, and
validation contract for Sprint 04 without creating new Evidence or Claim
records.

## Scope

The foundation applies to Evidence extracted from Active Sources. It preserves
the existing 8 operational Evidence records and
introduces no Evidence ID reservation.

## Ownership

- **Atomic Evidence authority:** `knowledge/registry/evidence/`.
- **Evidence schema:** `knowledge/schemas/evidence.schema.json`.
- **Source authority:** `knowledge/registry/sources/`.
- **Claim integration:** Deferred to the separately authorized Claim Registry sprint.
- **Owner:** Knowledge Architect.

## Content

### Required Evidence Metadata

| Field | Contract |
| --- | --- |
| Evidence ID | Existing `ASEA-EV-{NNNNNN}` pattern; immutable and never recycled |
| Record Type | `evidence` |
| Version | SemVer |
| Workflow State | `Candidate`, `Extracted`, `Validated`, `Approved`, `Deprecated`, or `Archived` |
| Title | Concise description of the observed evidence |
| Owner Role | Accountable extraction or review role |
| Created / Updated | ISO `YYYY-MM-DD` dates |
| Supersedes / Tags | Canonical common-record arrays |
| Source ID | One resolvable `ASEA-SRC-{NNNNNN}` |
| Locator | Exact section, heading, page, paragraph, anchor, or versioned location |
| Paraphrase | Faithful original synthesis or copyright-compliant minimal quotation |
| Scope | Applicable context and explicit limitation |
| Observed On | Date the locator and meaning were checked |
| Extractor Role | Accountable human or supervised workflow role |
| Independence Group | Underlying publication or study identity used to prevent double counting |

### Ownership of Requested Attributes

| Requested attribute | Canonical owner |
| --- | --- |
| Evidence Type | Evidence `record_type`; no second type enum exists |
| Source and Source Version | Evidence `source_id`, resolved to the Source record and version |
| Concept Links | Connected through a future Claim; direct Evidence-to-Concept fields are not schema-valid |
| Review Status / Verification State | Evidence `workflow_state` and formal Review record |
| Authority | Source `tier`; never copied into Evidence |
| Freshness | Source freshness class and Claim freshness score; never copied into Evidence |

### Extraction Workflow

1. Select an Active Source with current identity and rights metadata.
2. Allocate the next immutable Evidence ID.
3. Capture a precise locator and faithful paraphrase.
4. Record scope, observation date, extractor, and independence group.
5. Validate source resolution, locator fidelity, licensing, and duplication.
6. Obtain human review before `Approved`.
7. Link Evidence to an atomic Claim in the future Claim Registry.

### Existing Evidence Compatibility

The 8 existing records remain operational and unchanged.
They demonstrate the active schema but do not authorize creation of new Claims
or imply full Volume 01 Evidence coverage.

## Validation

The foundation contains every required Evidence schema field, uses the existing
lifecycle and ID pattern, and creates no Claim, Evidence record, or parallel
authority field.

## References

- [Evidence Schema](../../knowledge/schemas/evidence.schema.json)
- [Knowledge Standards](../knowledge-operating-system/02-knowledge-standards.md)
- [Source Validation Standard](../knowledge-operating-system/05-source-validation.md)
- [Source Candidate Registry](./source-registry.md)
