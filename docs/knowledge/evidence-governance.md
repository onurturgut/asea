---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-008"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Evidence Governance"
version: "1.1.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "ASEA-SD-IDX-013"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "ASEA-SD-IDX-013"
---

# Volume 01 Evidence Governance

## Purpose

This document governs Evidence identity, admission, ownership, provenance,
review, change control, and curriculum mapping while preserving the existing
Standards v2 and KOS authority hierarchy.

## Scope

It applies to Volume 01 Evidence records and the Evidence documentation created
or versioned through Sprint 05. It does not authorize Claims, Source activation,
curriculum changes, or schema changes.

## Ownership

| Concern | Canonical Owner |
| --- | --- |
| Atomic Evidence | `knowledge/registry/evidence/` |
| Evidence schema and lifecycle | KOS Knowledge Standards and `evidence.schema.json` |
| Source identity, authority, and freshness | Source Registry |
| Concept identity | Concept Registry |
| Outcome-to-assessment traceability | `docs/01-programming/assessment.md` |
| Derived Evidence views | Knowledge Architect |
| Extraction | Knowledge Engineer |
| Evidence review | Assigned reviewer under Review Standard |

## Content

### Identity and Single Source of Truth

- Evidence IDs use `ASEA-EV-{NNNNNN}`, are immutable, and are never recycled.
- Each Evidence record references exactly one Source.
- `knowledge/registry/evidence/` is the only atomic Evidence store.
- Markdown registries are derived views and cannot override atomic records.
- A publication is a Source; an exact observed portion is Evidence; an
  assertable proposition will be a Claim in the separately authorized sprint.

### Admission Workflow

1. Select an Active, schema-valid Source.
2. Allocate the next unused Evidence ID.
3. Record an exact locator, faithful paraphrase, explicit scope, observation
   date, extractor, and independence group.
4. Validate schema, Source resolution, citation fidelity, rights, duplication,
   and version.
5. Advance only through the canonical lifecycle:
   `Candidate → Extracted → Validated → Approved → Deprecated → Archived`.
6. Complete formal Evidence Review before `Approved`.
7. Create Concept or curriculum support assertions only through the future
   Claim Registry.

### Derived Relationship Rules

Evidence-to-Concept, Outcome, Chapter, Assessment, and Module joins through
Sprint 05 are candidate coverage views. They identify where later Claims may be
needed; they do not prove that an Outcome is achieved or an Assessment is valid.

### Authority and Freshness Rules

- Evidence never copies Source authority or freshness into atomic JSON.
- Registry views resolve Source `tier`, Source version, and freshness at
  generation time.
- A Source version change triggers locator and meaning revalidation.
- Changed meaning requires a new Evidence version or superseding Evidence;
  historical records remain addressable.
- Multiple Evidence records from the same independence group must not be counted
  as independent corroboration.

### Review and Change Control

- Validated Evidence requires formal Review before approval.
- Review uses existing Review IDs, statuses, ownership, and approval rules.
- Schema or enum changes require an ADR-style Decision Record and SemVer.
- Frozen curriculum artefacts remain read-only; relationship corrections occur
  in derived Evidence views unless the canonical curriculum owner authorizes a
  separate change.
- AI output, search summaries, and uncited aggregation cannot become Evidence.

### Sprint Boundary

This sprint creates six schema-valid Evidence JSON records, no Claim Registry,
no Source activation, and no mutation to Concept, Graph, Blueprint, Review, or
Freeze records.

## Validation

- Atomic Evidence authority preserved: Yes.
- Existing eight Evidence records changed: No.
- New schema-valid Evidence records: 6.
- New enum or workflow state introduced: No.
- Evidence without one resolvable Source: 0.
- Direct Claim assertion created: 0.
- Frozen curriculum mutation: 0.

## References

- [Canonical Evidence Registry](./evidence-registry.md)
- [Evidence Validation Report](./evidence-validation-report.md)
- [Evidence Foundation](./evidence-foundation.md)
- [Source Governance](./source-governance.md)
- [Review Standard](../standards/governance/02-review-standard.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
