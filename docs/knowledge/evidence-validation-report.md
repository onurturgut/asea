---
document_type: "validation-report"
validation_report_id: "ASEA-VR008"
title: "PHASE 03 Sprint 05 Evidence Expansion Validation Report"
version: "1.1.0"
status: "Draft"
validation_type: "Governance"
scope_id: "ASEA-SD-IDX-013"
scope_version: "1.1.0"
validated_on: "2026-07-18"
validator_version: "1.0.0"
result: "Pass"
check_count: 22
failure_count: 0
warning_count: 0
evidence_paths:
  - "../../knowledge/registry/evidence/"
  - "../../knowledge/registry/sources/"
  - "./evidence-registry.md"
  - "./evidence-relations.md"
  - "./evidence-authority-matrix.md"
  - "./evidence-coverage-report.md"
  - "./evidence-gap-analysis.md"
---

# PHASE 03 Sprint 05 Evidence Expansion Validation Report

## Validation Scope

The run validates fourteen operational Evidence records, their exact Source
references, the expanded Evidence documents, and complete derived curriculum
coverage. It does not validate Claim support because Claim production is
outside this sprint.

## Validator Environment

- Repository: local ASEA working tree.
- Platform: Windows PowerShell.
- Validation date: 2026-07-18.
- KOS validator: `knowledge/scripts/validate-knowledge.mjs`.
- Schema: JSON Schema 2020-12.
- Markdown inventory: all `docs/knowledge/evidence-*.md` files.

## Checks Executed

| Check ID | Check | Result | Evidence |
| --- | --- | --- | --- |
| `EV-INV-001` | Seven required Sprint artefacts exist | Pass | File inventory |
| `EV-SCHEMA-001` | Operational Evidence conforms to KOS schema | Pass | KOS validator |
| `EV-ID-001` | Evidence IDs match `ASEA-EV-{NNNNNN}` | Pass | 14/14 |
| `EV-ID-002` | Duplicate Evidence IDs | Pass | 0 duplicates |
| `EV-CITE-001` | Duplicate citation and locator within one Source | Pass | 0 semantic duplicates; 1 reviewed shared locator |
| `EV-SRC-001` | Exactly one Source per Evidence | Pass | 14/14 |
| `EV-SRC-002` | Missing or unknown Source references | Pass | 0 |
| `EV-CON-001` | Unknown Concept references | Pass | 0 |
| `EV-LO-001` | Unknown Learning Outcome references | Pass | 0 |
| `EV-CH-001` | Unknown Chapter references | Pass | 0 |
| `EV-AS-001` | Unknown Assessment references | Pass | 0 |
| `EV-MOD-001` | Unknown Module references | Pass | 0 |
| `EV-USE-001` | Orphan or unused Evidence | Pass | 0 |
| `EV-AUTH-001` | Missing or unknown Source authority | Pass | 0 |
| `EV-CITE-002` | Missing citation or locator | Pass | 0 |
| `EV-STATE-001` | Missing or invalid verification lifecycle | Pass | 0 |
| `EV-VER-001` | Invalid Evidence or Source SemVer | Pass | 0 |
| `EV-LINK-001` | Broken relative Markdown links | Pass | 0 |
| `EV-COV-001` | Concept coverage gaps | Pass | 0/101 |
| `EV-COV-002` | Learning Outcome coverage gaps | Pass | 0/46 |
| `EV-COV-003` | Chapter and Assessment coverage gaps | Pass | 0/28 each |
| `EV-REUSE-001` | Redundant Evidence with identical meaning and scope | Pass | 0 |

## Results Summary

| Metric | Result |
| --- | ---: |
| Evidence records | 14 |
| Source edges | 14 |
| Unique Sources represented | 8 |
| Active Source coverage | 8/8 |
| Concept coverage | 101/101 |
| Outcome coverage | 46/46 |
| Chapter coverage | 28/28 |
| Assessment coverage | 28/28 |
| Module coverage | 7/7 |
| Concept-to-Evidence edges | 189 |
| Mean Concept links per Evidence | 13.5 |
| Evidence reused across multiple Concepts | 14/14 |
| Reviewed shared locator groups | 1 |
| Failures | 0 |
| Warnings | 0 |

Coverage targets are met without activating Proposed Sources or changing frozen
curriculum artefacts.

## Failures

None.

## Warnings

None. The twelve Proposed Sources remain unused because all targets are covered
by the eight Active Sources. Proposed Sources cannot be used operationally
before Source admission.

## Evidence

- All fourteen JSON records resolve against `evidence.schema.json`.
- Every `source_id` resolves to one operational Source JSON record.
- `ASEA-EV-000006` and `ASEA-EV-000007` intentionally share one normative
  locator but preserve distinct paraphrases and scopes; they are not duplicate
  Evidence.
- Every derived curriculum ID resolves to the frozen canonical Volume 01
  artefacts.
- Every canonical Concept, Outcome, Chapter, Assessment, and Module has one or
  more Evidence relationships.
- Authority, freshness, and status values are resolved from their canonical
  owners.
- No new Evidence type, verification, authority, or freshness enum exists.

## Reproduction

```powershell
node knowledge/scripts/validate-knowledge.mjs
pnpm exec markdownlint-cli2 "docs/knowledge/evidence-*.md"
```

The relative-link check resolves Markdown targets from each document directory.
ID checks compare definitions, not ordinary references.

## Conclusion

**PASS.** Sprint 05 expands the registry to fourteen Evidence records and
achieves 101/101 Concept, 46/46 Outcome, and 28/28 Assessment coverage. It has
no duplicate, orphan, unresolved, or schema-invalid Evidence. Sprint 06 must
evaluate atomic Claims before any relationship is treated as an approved
knowledge assertion.

## References

- [Validation Standard](../standards/governance/08-validation-standard.md)
- [Evidence Schema](../../knowledge/schemas/evidence.schema.json)
- [Canonical Evidence Registry](./evidence-registry.md)
- [Evidence Governance](./evidence-governance.md)
