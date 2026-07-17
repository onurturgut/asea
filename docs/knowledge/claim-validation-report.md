---
document_type: "validation-report"
validation_report_id: "ASEA-VR009"
title: "PHASE 03 Sprint 06 Canonical Claim Registry Validation Report"
version: "1.0.0"
status: "Draft"
validation_type: "Governance"
scope_id: "ASEA-SD-IDX-018"
scope_version: "1.0.0"
validated_on: "2026-07-18"
validator_version: "1.0.0"
result: "Pass"
check_count: 26
failure_count: 0
warning_count: 0
evidence_paths:
  - "../../knowledge/registry/claims/"
  - "../../knowledge/registry/evidence/"
  - "../../knowledge/registry/sources/"
  - "./claim-registry.md"
  - "./claim-relations.md"
  - "./claim-authority-matrix.md"
  - "./claim-coverage-report.md"
  - "./claim-conflict-analysis.md"
---

# PHASE 03 Sprint 06 Canonical Claim Registry Validation Report

## Validation Scope

The run validates 101 operational Claims, their Evidence and Source chains,
Concept and curriculum mappings, nine Sprint 06 documents, authority,
confidence, freshness, duplication, conflicts, circularity, and full coverage.

## Validator Environment

- Repository: local ASEA working tree.
- Platform: Windows PowerShell.
- Validation date: 2026-07-18.
- KOS validator: `knowledge/scripts/validate-knowledge.mjs`.
- Schema: JSON Schema 2020-12.
- Markdown scope: `docs/knowledge/claim-*.md`.

## Checks Executed

| Check ID | Check | Result | Evidence |
| --- | --- | --- | --- |
| `CLM-INV-001` | Nine required Sprint artefacts exist | Pass | File inventory |
| `CLM-SCHEMA-001` | Claims conform to KOS schema | Pass | 101/101 |
| `CLM-ID-001` | Claim IDs match `ASEA-CLM-{NNNNNN}` | Pass | 101/101 |
| `CLM-ID-002` | Duplicate Claim IDs | Pass | 0 |
| `CLM-PROP-001` | Empty or non-atomic propositions | Pass | 0 |
| `CLM-PROP-002` | Duplicate normalized propositions | Pass | 0 |
| `CLM-EV-001` | Claims without Evidence | Pass | 0 |
| `CLM-EV-002` | Unknown Evidence IDs | Pass | 0 |
| `CLM-EV-003` | Declared Evidence count mismatch | Pass | 0 |
| `CLM-SRC-001` | Missing Source through Evidence chain | Pass | 0 |
| `CLM-CON-001` | Missing or unknown primary Concept | Pass | 0 |
| `CLM-LO-001` | Missing or unknown Outcome mapping | Pass | 0 |
| `CLM-CH-001` | Missing or unknown Chapter mapping | Pass | 0 |
| `CLM-AS-001` | Missing or unknown Assessment mapping | Pass | 0 |
| `CLM-MOD-001` | Missing or unknown Module mapping | Pass | 0 |
| `CLM-CITE-001` | Broken citation chain | Pass | 0 |
| `CLM-AUTH-001` | Invalid authority score or Source tier | Pass | 0 |
| `CLM-CONF-001` | Invalid confidence components or score | Pass | 0 |
| `CLM-FRESH-001` | Invalid freshness or review date | Pass | 0 |
| `CLM-VER-001` | Invalid SemVer | Pass | 0 |
| `CLM-STATE-001` | Invalid workflow or review decision | Pass | 0 |
| `CLM-CONFLICT-001` | Blocking conflicting Claims | Pass | 0 |
| `CLM-CYCLE-001` | Circular Claim or supersession references | Pass | 0 |
| `CLM-COV-001` | Concept, Outcome, and Assessment gaps | Pass | 0 |
| `CLM-LINK-001` | Broken relative Markdown links | Pass | 0 |
| `CLM-MD-001` | Markdown lint errors | Pass | 0 |

## Results Summary

| Metric | Result |
| --- | ---: |
| Claim records | 101 |
| Approved Claims | 6 |
| Validated Claims | 95 |
| Concept coverage | 101/101 |
| Outcome coverage | 46/46 |
| Chapter coverage | 28/28 |
| Assessment coverage | 28/28 |
| Module coverage | 7/7 |
| Evidence coverage | 14/14 |
| Active Source coverage | 8/8 |
| Claim-to-Evidence edges | 167 |
| Duplicate Claims | 0 |
| Conflicting Claims | 0 |
| Circular references | 0 |
| Failures | 0 |
| Warnings | 0 |

## Failures

None.

## Warnings

None. The 95 `Changes Required` review decisions are an explicit production
gate, not registry-validation warnings. Those Claims remain Validated and cannot
be treated as Approved content knowledge.

## Evidence

- All 101 Claim JSON records resolve against `claim.schema.json`.
- Every Claim has one or two Evidence records and at least one Active Source.
- All Concept, Outcome, Chapter, Assessment, and Module mappings resolve.
- Every Evidence record is used by one or more Claims.
- The authority mismatch in `ASEA-CLM-000006` was corrected in version 1.0.1.
- No Claim references another Claim; all contradiction and supersession arrays
  are acyclic.

## Reproduction

```powershell
node knowledge/scripts/validate-knowledge.mjs
pnpm exec markdownlint-cli2 "docs/knowledge/claim-*.md"
```

The integrity run additionally compares normalized propositions, Evidence
counts, Source tiers, Concept coverage, curriculum IDs, and relative links.

## Conclusion

**PASS.** The Canonical Claim Registry contains 101 unique, versioned,
Evidence-backed Claims and achieves complete Concept, Outcome, Chapter,
Assessment, Module, Evidence, and Active Source coverage. Formal review remains
required before the 95 new Validated Claims become production-eligible.

## References

- [Validation Standard](../standards/governance/08-validation-standard.md)
- [Claim Schema](../../knowledge/schemas/claim.schema.json)
- [Canonical Claim Registry](./claim-registry.md)
- [Claim Governance](./claim-governance.md)
- [Claim Conflict Analysis](./claim-conflict-analysis.md)
