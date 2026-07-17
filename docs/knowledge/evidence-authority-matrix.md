---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-016"
supporting_document_type: "Index"
title: "Volume 01 Evidence Authority Matrix"
version: "1.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-SD-COMP-004"
  - "ASEA-SD-IDX-013"
derived_from:
  - "ASEA-SD-COMP-004"
  - "ASEA-SD-IDX-010"
  - "ASEA-SD-IDX-013"
---

# Volume 01 Evidence Authority Matrix

## Purpose

This matrix resolves Evidence authority, verification, and freshness from their
canonical owners and reports portfolio distribution without copying those
attributes into atomic Evidence records.

## Scope

It covers all fourteen operational Evidence records and their eight referenced
Sources as of 2026-07-18.

## Ownership

- **Authority owner:** Source Registry `tier`.
- **Verification owner:** Evidence `workflow_state`.
- **Freshness owner:** Source freshness classification.
- **Matrix authority:** Derived.
- **Owner:** Knowledge Architect.

## Content

### Evidence-Level Matrix

| Evidence ID | Source ID | Authority | Verification | Freshness | Independence Group |
| --- | --- | --- | --- | --- | --- |
| `ASEA-EV-000001` | `ASEA-SRC-000001` | Tier 1 — Academic | Validated | Slow | `acm-ieee-aaai-cs2023` |
| `ASEA-EV-000002` | `ASEA-SRC-000002` | Tier 2 — Official Documentation | Validated | Moderate | `mdn` |
| `ASEA-EV-000003` | `ASEA-SRC-000005` | Tier 1 — Academic | Validated | Slow | `nand2tetris` |
| `ASEA-EV-000004` | `ASEA-SRC-000006` | Tier 2 — Official Documentation | Validated | Moderate | `intel-sdm` |
| `ASEA-EV-000005` | `ASEA-SRC-000007` | Tier 2 — Official Documentation | Validated | Moderate | `llvm` |
| `ASEA-EV-000006` | `ASEA-SRC-000008` | Tier 2 — Official Documentation | Validated | Moderate | `webassembly-spec` |
| `ASEA-EV-000007` | `ASEA-SRC-000008` | Tier 2 — Official Documentation | Validated | Moderate | `webassembly-spec` |
| `ASEA-EV-000008` | `ASEA-SRC-000008` | Tier 2 — Official Documentation | Validated | Moderate | `webassembly-spec` |
| `ASEA-EV-000009` | `ASEA-SRC-000001` | Tier 1 — Academic | Validated | Slow | `acm-ieee-aaai-cs2023` |
| `ASEA-EV-000010` | `ASEA-SRC-000001` | Tier 1 — Academic | Validated | Slow | `acm-ieee-aaai-cs2023` |
| `ASEA-EV-000011` | `ASEA-SRC-000001` | Tier 1 — Academic | Validated | Slow | `acm-ieee-aaai-cs2023` |
| `ASEA-EV-000012` | `ASEA-SRC-000003` | Tier 2 — Official Documentation | Validated | Moderate | `ecma-262` |
| `ASEA-EV-000013` | `ASEA-SRC-000003` | Tier 2 — Official Documentation | Validated | Moderate | `ecma-262` |
| `ASEA-EV-000014` | `ASEA-SRC-000004` | Tier 2 — Official Documentation | Validated | Slow | `google-technical-writing` |

### Authority Distribution

| Authority | Evidence Count | Share |
| --- | ---: | ---: |
| Tier 1 — Academic | 5 | 35.7% |
| Tier 2 — Official Documentation | 9 | 64.3% |
| Tier 3 — Industry | 0 | 0.0% |
| Tier 4 — Community | 0 | 0.0% |

### Verification Distribution

| Evidence Workflow State | Count | Share |
| --- | ---: | ---: |
| Validated | 14 | 100.0% |
| Candidate | 0 | 0.0% |
| Extracted | 0 | 0.0% |
| Approved | 0 | 0.0% |
| Deprecated | 0 | 0.0% |
| Archived | 0 | 0.0% |

`Validated` confirms record-level verification. It does not substitute for the
formal Evidence Review required before `Approved`.

### Freshness Distribution

| Freshness | Evidence Count | Share | Revalidation Rule |
| --- | ---: | ---: | --- |
| Slow | 6 | 42.9% | Recheck on edition change or scheduled governance review |
| Moderate | 8 | 57.1% | Recheck before production use and on upstream version change |

### Source Utilization

| Source State | Used | Total | Unused Source IDs |
| --- | ---: | ---: | --- |
| Active | 8 | 8 | None |
| Proposed | 0 | 12 | `ASEA-SRC-000009`–`ASEA-SRC-000020` |

Proposed Sources cannot supply operational Evidence until schema-valid Source
admission and review. Unused Active Sources remain valid Sources; they form the
next extraction queue and do not orphan existing Evidence.

## Validation

Every authority, verification, freshness, and Source-state value resolves to a
canonical owner. No missing authority, unknown tier, or copied atomic field was
introduced.

## References

- [Authority Model](./authority-model.md)
- [Canonical Evidence Registry](./evidence-registry.md)
- [Source Registry](./source-registry.md)
- [Evidence Governance](./evidence-governance.md)
