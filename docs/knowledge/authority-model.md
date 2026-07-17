---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-004"
supporting_document_type: "Compatibility Report"
title: "ASEA Source Authority Model"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-004"
  - "ASEA-STD-KOS-005"
derived_from:
  - "ASEA-STD-KOS-004"
  - "ASEA-STD-KOS-005"
---

# ASEA Source Authority Model

## Purpose

This document explains the existing KOS Tier 1–4 authority model and prevents
new trust or authority enums from being introduced by Source Registry views.

## Scope

It governs Source selection, trust interpretation, current status, conflict
precedence, freshness, and permitted use before Evidence extraction.

## Ownership

- **Normative priority owner:** `ASEA-STD-KOS-004`.
- **Validation owner:** `ASEA-STD-KOS-005`.
- **Source lifecycle owner:** `ASEA-STD-KOS-002`.
- **Owner:** Knowledge Architect.

## Content

### Authority Levels

| Level | Canonical label | Primary use | Volume 01 Sources |
| --- | --- | --- | ---: |
| 1 | Tier 1 — Academic | Consensus curricula, peer-reviewed or institutional foundations, and applicable professional standards | 8 |
| 2 | Tier 2 — Official Documentation | Normative technology specifications and documentation maintained by responsible organizations | 10 |
| 3 | Tier 3 — Industry | Production practices, trade-offs, and accountable practitioner guidance | 2 |
| 4 | Tier 4 — Community | Discovery, misconception research, and candidate failure modes requiring corroboration | 0 |

Labels such as Official Specification, Academic Peer Reviewed, Vendor
Documentation, Industry Best Practice, Community Knowledge, and Historical
Reference are descriptive profiles. They do not become new machine enums.

### Trust and Lifecycle

Source trust is determined jointly by identity verification, canonical
publisher, tier, applicable scope, version/date, usage rights, freshness, and
the Source lifecycle:

`Proposed → Verified → Active → Deprecated → Archived`.

An Active Source is eligible for Evidence extraction. A Proposed candidate is
discoverable but cannot support a production Claim.

### Conflict Precedence

1. Current applicable standard or specification.
2. Current official documentation for the exact version.
3. Reproducible primary evidence.
4. Independently corroborated industry evidence.
5. Community observations.

Conflicts remain explicit and require version, scope, and reviewer rationale;
precedence never silently deletes contradictory evidence.

### Freshness and Rights

- Fast Sources default to a 90-day review interval.
- Moderate Sources default to 180 days.
- Slow Sources default to 365 days.
- Historical Sources are reviewed when factual challenges arise.
- Availability never implies copying permission; usage rights and attribution
  remain mandatory.

## Validation

All 20 Sources resolve to one canonical Tier. Missing authority:
0. New authority enums: 0.

## References

- [Source Priority Standard](../knowledge-operating-system/04-source-priority.md)
- [Source Validation Standard](../knowledge-operating-system/05-source-validation.md)
- [Source Candidate Registry](./source-registry.md)
