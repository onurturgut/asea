---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-010"
supporting_document_type: "Compatibility Report"
title: "ASEA Claim Type Compatibility Profile"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Informational"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-SD-IDX-018"
derived_from:
  - "ASEA-STD-KOS-002"
  - "ASEA-SD-IDX-018"
---

# ASEA Claim Type Compatibility Profile

## Purpose

This document provides consistent descriptive Statement Type profiles without
introducing an unauthorized Claim enum or schema field.

## Scope

It classifies the 101 Volume 01 Claims for navigation and analysis. It does not
alter `claim.schema.json` or the canonical `record_type: claim`.

## Ownership

- **Canonical type owner:** `knowledge/schemas/claim.schema.json`.
- **Canonical value:** `record_type: claim`.
- **Profile owner:** Knowledge Architect.
- **Authority:** Informational.

## Content

### Canonical Rule

The Claim schema has no `statement_type` field and rejects undeclared fields
through `unevaluatedProperties: false`. Statement Type therefore remains a
derived documentation profile until an existing ADR and schema-version process
authorizes it.

### Descriptive Profiles

| Statement Type | Meaning | Claim Count | Governance State |
| --- | --- | ---: | --- |
| Definition | Defines one canonical Concept using a bounded proposition | 95 | Informational profile |
| Principle | States a reusable engineering or pedagogical principle | 2 | Informational profile |
| Relationship | States a bounded relationship between engineering entities | 2 | Informational profile |
| Behavior | States observable behavior under an explicit scope | 1 | Informational profile |
| Rule | States a condition governing permitted behavior | 1 | Informational profile |
| Fact | Objective observation independent of prescriptive use | 0 | Proposal only |
| Constraint | Explicit limit that narrows valid behavior | 0 | Proposal only |
| Engineering Guideline | Evidence-backed engineering recommendation | 0 | Proposal only |
| Best Practice | Contextual practice requiring trade-off and scope evidence | 0 | Proposal only |

## Validation

All 101 records retain `record_type: claim`. The profile counts total 101 and no
unsupported JSON field or enum was added.

## References

- [Claim Schema](../../knowledge/schemas/claim.schema.json)
- [Canonical Claim Registry](./claim-registry.md)
- [Decision Record Standard](../standards/governance/04-decision-record-standard.md)
