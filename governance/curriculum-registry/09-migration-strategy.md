---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-026"
supporting_document_type: "Compatibility Report"
title: "ASEA Curriculum Migration Strategy Analysis"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-001"
  - "V01-MG-001-002-001"
  - "V01-ADR-017"
derived_from:
  - "../../docs/01-programming/volume-blueprint.md"
  - "../../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md"
  - "../../docs/01-programming/migrations/v01-curriculum-v1-v2-compatibility-report.md"
  - "../../docs/01-programming/migrations/v01-curriculum-v2-decision.md"
---

# ASEA Curriculum Migration Strategy Analysis

## Purpose

This document compares three curriculum evolution strategies. It does not
execute a migration, authorize an unfreeze, or create Blueprint v2.

## Scope

The comparison covers advantages, disadvantages, risk, estimated migration
cost, repository impact, backward compatibility, and long-term suitability.

## Ownership

- **Authority:** Derived analysis.
- **Current canonical curriculum:** `V01-BP01` version `1.1.0`.
- **Migration authority:** Migration Standard and approved review records.
- **Execution state:** Not authorized by this document.

## Content

### Option A — Keep the current Blueprint

| Dimension | Assessment |
| --- | --- |
| Advantages | Zero canonical migration; no Freeze transition; existing content continues unchanged |
| Disadvantages | JavaScript readiness gaps remain; later Academies repeat foundation material; cross-Academy registry remains incomplete |
| Risk level | Medium long-term curriculum risk; low immediate repository risk |
| Estimated migration cost | None |
| Repository impact | No structural impact |
| Backward compatibility | Complete |

This option is suitable only if V01 remains permanently language-neutral and a
separate JavaScript prerequisite Volume is created before TypeScript and React.

### Option B — Expand around the current Blueprint

This option keeps V01 unchanged and creates future Volumes for all missing
language and specialization areas.

| Dimension | Assessment |
| --- | --- |
| Advantages | Preserves the Freeze; clear separation between general programming and JavaScript |
| Disadvantages | Adds an extra transition Volume; duplicates some values, collections, functions, and error concepts; increases learner path length |
| Risk level | Medium |
| Estimated migration cost | Medium |
| Repository impact | New Volume Blueprints, IDs, dependencies, outcomes, reviews, and release artefacts |
| Backward compatibility | High; additive |

This option is governance-safe but creates curriculum duplication unless the
transition Volume is tightly scoped.

### Option C — Controlled Blueprint v2

This option preserves all current IDs and meanings, then adds new Modules,
Chapters, and outcomes through a MAJOR Blueprint migration.

| Dimension | Assessment |
| --- | --- |
| Advantages | Closes transition gaps in one foundation; preserves historical IDs; creates a clear prerequisite for JavaScript, TypeScript, and React |
| Disadvantages | Requires unfreeze workflow, full review, expanded duration, new labs and assessments, and coordinated canonical activation |
| Risk level | Medium-high during migration; low after validated activation |
| Estimated migration cost | High |
| Repository impact | Blueprint, maps, manifest, reviews, and Freeze must receive new approved versions |
| Backward compatibility | High for existing IDs; learner transition needed for new outcomes |

Option C is already represented by a Planned migration record and Proposed
decision. Those documents remain non-canonical and do not alter the current
Blueprint.

### Comparative decision matrix

| Criterion | Weight | Option A | Option B | Option C |
| --- | ---: | ---: | ---: | ---: |
| Long-term curriculum coherence | 25% | 2/5 | 3/5 | 5/5 |
| Backward compatibility | 20% | 5/5 | 5/5 | 4/5 |
| Downstream Academy readiness | 20% | 2/5 | 4/5 | 5/5 |
| Governance safety | 15% | 5/5 | 4/5 | 3/5 |
| Duplication control | 10% | 3/5 | 2/5 | 5/5 |
| Learner path efficiency | 10% | 2/5 | 3/5 | 5/5 |
| **Weighted result** | **100%** | **3.25/5** | **3.70/5** | **4.50/5** |

### Required controls for Option C

1. Preserve the active v1 Freeze during analysis and candidate authoring.
2. Accept the curriculum decision through required reviews.
3. Keep the candidate Draft, Unfrozen, and non-authoritative.
4. Preserve all existing Module, Chapter, and outcome IDs.
5. Allocate new IDs only after existing ranges.
6. Validate dependencies, assessments, links, and total mappings.
7. Perform a single atomic canonical switch.
8. Ensure v1 and v2 are never canonical at the same time.

## Validation

- All three required options were analyzed.
- Costs and risks are relative planning estimates, not delivery commitments.
- The recommendation does not execute migration.
- Existing migration documents are referenced, not modified.
- Current canonical status remains unchanged.

## References

- [Migration Record](../../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md)
- [Curriculum Decision](../../docs/01-programming/migrations/v01-curriculum-v2-decision.md)
- [Compatibility Report](../../docs/01-programming/migrations/v01-curriculum-v1-v2-compatibility-report.md)
- [Migration Standard](../../docs/standards/governance/06-migration-standard.md)
- [Freeze Standard](../../docs/standards/governance/05-freeze-standard.md)
