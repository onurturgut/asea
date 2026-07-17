---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-012"
supporting_document_type: "Index"
title: "ASEA Source Categories"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-004"
  - "ASEA-SD-IDX-010"
derived_from:
  - "ASEA-STD-KOS-004"
  - "ASEA-SD-IDX-010"
---

# ASEA Source Categories

## Purpose

This document applies the six source types defined by the active Source schema
and reconciles informal category labels without creating a new enum.

## Scope

The category contract applies to Volume 01 Source candidates and future Source
records governed by the same KOS schema.

## Ownership

- **Normative enum owner:** `knowledge/schemas/source.schema.json`.
- **Priority owner:** `ASEA-STD-KOS-004`.
- **Inventory source:** [Source Candidate Registry](./source-registry.md).
- **Owner:** Knowledge Architect.

## Content

### Canonical Categories

| Source Type | Definition | Volume 01 Count | Source IDs |
| --- | --- | ---: | --- |
| `academic-curriculum` | Consensus curricula and bodies of knowledge maintained by academic or professional institutions. | 2 | `ASEA-SRC-000001`, `ASEA-SRC-000009` |
| `standard` | Normative language, computing, engineering, or interoperability specifications. | 5 | `ASEA-SRC-000003`, `ASEA-SRC-000008`, `ASEA-SRC-000014`, `ASEA-SRC-000017`, `ASEA-SRC-000018` |
| `official-documentation` | Documentation maintained by the organization responsible for the technology or tool. | 7 | `ASEA-SRC-000002`, `ASEA-SRC-000004`, `ASEA-SRC-000006`, `ASEA-SRC-000007`, `ASEA-SRC-000013`, `ASEA-SRC-000015`, `ASEA-SRC-000020` |
| `institutional-course` | Official course material published by a recognized educational institution. | 4 | `ASEA-SRC-000005`, `ASEA-SRC-000010`, `ASEA-SRC-000011`, `ASEA-SRC-000012` |
| `industry-publication` | Primary engineering guidance or documented practice published by an identifiable practitioner or organization. | 2 | `ASEA-SRC-000016`, `ASEA-SRC-000019` |
| `community` | Community discussion used for discovery or misconception research, never as sole technical authority. | 0 | None |

### Informal Label Reconciliation

| Informal label | Canonical classification rule |
| --- | --- |
| Academic | `academic-curriculum` or `institutional-course`, according to publisher and purpose |
| Official Documentation | `official-documentation` |
| Language Specification, Industry Standard, RFC | `standard` when normative; otherwise the publisher-appropriate type |
| Book | Classify by accountable publisher and use; no standalone Book enum |
| Research Paper | `academic-curriculum` only when used as curriculum/academic authority; otherwise classify under the current schema and record bibliographic identity |
| Engineering Blog, Conference | `industry-publication` when it is a primary accountable publication |
| Community, Video | `community` unless an institution publishes it as an official course |
| Internal | Not a Source type in the active schema; repository decisions use canonical Decision IDs |

### Classification Rules

- Type describes provenance and responsibility, not prestige.
- Tier and type are independent: a standard may be Tier 1 or Tier 2 according
  to the Source Priority Standard.
- Aggregators, AI output, copied tutorials, and search snippets are not Sources.
- Community material cannot be the sole authority for a technical Claim.

## Validation

All 20 Sources use one of six schema-defined types. Unknown
categories: 0. Parallel category enums: 0.

## References

- [Source Candidate Registry](./source-registry.md)
- [Source Priority Standard](../knowledge-operating-system/04-source-priority.md)
- [Source Schema](../../knowledge/schemas/source.schema.json)
