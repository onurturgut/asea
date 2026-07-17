---
document_type: "decision-record"
decision_id: "ASEA-ADR-001"
title: "Preserve Standards v2 Authority in the KOS"
version: "1.0.0"
status: "Stable"
decision_status: "Accepted"
scope_id: "ASEA"
decided_on: "2026-07-17"
owner_role: "Governance Architect"
review_ids:
  - "ASEA-RV006"
superseded_by: []
---

# Preserve Standards v2 Authority in the KOS

## Decision ID

`ASEA-ADR-001`

## Context

The KOS introduced useful workflow labels, production guidance, validation
language, and asset requirements. Some terms could be interpreted as new Review
enums, a second Chapter structure, or duplicate lifecycle ownership. Standards
Index v2 already assigns each of those contracts to a canonical owner.

The remediation must make KOS operational language usable without modifying
Standards v2, creating a parallel governance hierarchy, or weakening an existing
schema.

## Decision

Standards Index v2, Repository Standard v2, the type-specific Standards v2, and
the Governance Extension remain unchanged and authoritative.

KOS documents:

- map workflow labels to existing Review metadata;
- use canonical finding severities;
- treat Chapter components as production guidance beneath canonical headings;
- reference canonical curriculum artefact IDs;
- own only KOS-specific source, evidence, claim, concept, graph, packet, and asset
  contracts;
- resolve conflicts by deferring to the owner identified by Standards Index v2.

## Rationale

This approach corrects the identified ownership and schema violations with the
smallest compatible change. It preserves one source of truth, keeps existing
canonical paths and IDs stable, and allows KOS to specialize workflows without
redefining repository governance.

## Alternatives Considered

### Create a Constitution Above Standards v2

Rejected because it would change precedence, create a second authority hierarchy,
and require a breaking standards migration.

### Create New Review Types and Domains

Rejected because Repository Standard v2 and the Governance Review Standard own
those enums.

### Move KOS Rules into Core Standards

Rejected because KOS can align through references and mappings without modifying
stable canonical standards.

## Consequences

Positive consequences:

- one canonical authority hierarchy remains;
- KOS review records are schema-valid;
- Chapter Standard v2 retains structural ownership;
- CPP approval no longer depends on a future draft review;
- future registry work can reference stable ownership boundaries.

Costs and limitations:

- KOS workflow labels must always be accompanied by their canonical metadata
  mapping;
- different workflow gates may share a canonical metadata pair and therefore
  require distinct Review IDs and exact scope versions;
- KOS standards remain in `Review` until an independent Final Governance Review.

## Status

Accepted through Repository-type Governance Review `ASEA-RV006`.

## Superseded By

None.

## Traceability

This decision affects:

- `ASEA-STD-KOS-002`
- `ASEA-STD-KOS-003`
- `ASEA-STD-KOS-005`
- `ASEA-STD-KOS-007`
- `ASEA-STD-KOS-008`
- `ASEA-STD-KOS-009`
- `ASEA-STD-KOS-010`
- `ASEA-STD-KOS-011`
- `ASEA-STD-KOS-016`
- `ASEA-STD-KOS-017`

Validation evidence is recorded in `ASEA-VR004`; approval is recorded in
`ASEA-RV006`.

## References

### Internal Standards

- [Standards Index v2.0](../../standards/standards-index-v2.md)
- [Repository Standard v2.0](../../standards/repository-standard-v2.md)
- [Governance Index](../../standards/governance/09-governance-index.md)
- [Decision Record Standard](../../standards/governance/04-decision-record-standard.md)
- [Review Standard](../../standards/governance/02-review-standard.md)
