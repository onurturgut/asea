---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-015"
supporting_document_type: "Compatibility Report"
title: "Volume 01 Knowledge Validation Rules"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-VALIDATION-001"
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "ASEA-STD-KOS-002"
derived_from:
  - "ASEA-SD-IDX-029"
  - "ASEA-SD-IDX-023"
---

# Volume 01 Knowledge Validation Rules

## Purpose

This document defines the complete, deterministic rule catalogue for the
Volume 01 Knowledge Validation Engine.

## Scope

The catalogue contains 58 rules across the 11 authorized validation domains.
It introduces no schema field, lifecycle state, authority level, relationship,
or educational object.

## Ownership

- Each rule validates a contract owned by an existing standard or canonical
  registry.
- Rule IDs identify checks only; they are not repository object IDs.
- Validation Standard result and severity behavior remains authoritative.
- Owner: Knowledge Architect.

## Content

### Source Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-SRC-001` | All 20 registry IDs are unique and match the canonical Source ID pattern. |
| `KVE-SRC-002` | Required metadata is complete for every Source entry. |
| `KVE-SRC-003` | Authority level resolves to the canonical authority model. |
| `KVE-SRC-004` | Version values use SemVer and publication metadata is present. |
| `KVE-SRC-005` | Status is allowed and operational use is limited to 8 Active Sources. |
| `KVE-SRC-006` | Canonical names are unique and normalized naming is consistent. |

### Evidence Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-EV-001` | Every Evidence record references exactly one existing Active Source. |
| `KVE-EV-002` | Citation locator and paraphrase are present and non-empty. |
| `KVE-EV-003` | Authority is derived from the referenced Source without escalation. |
| `KVE-EV-004` | Verification and workflow states use canonical lifecycle values. |
| `KVE-EV-005` | Every Evidence version uses SemVer. |
| `KVE-EV-006` | All declared Concept and curriculum relationships resolve. |

### Claim Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-CLM-001` | Every Claim has at least one existing supporting Evidence record. |
| `KVE-CLM-002` | Every Claim resolves to at least one Source through Evidence. |
| `KVE-CLM-003` | Each proposition is non-empty, atomic, and unique after normalization. |
| `KVE-CLM-004` | Statement type uses the canonical Claim schema enum. |
| `KVE-CLM-005` | Authority and confidence values reconcile with supporting Evidence and Sources. |
| `KVE-CLM-006` | Workflow, verification, and review values follow canonical lifecycles. |
| `KVE-CLM-007` | Claim IDs and canonical naming are valid and unique. |

### Concept Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-CON-001` | All 101 Concept IDs are unique and pattern-valid. |
| `KVE-CON-002` | Every Concept uses an allowed canonical category. |
| `KVE-CON-003` | Canonical names and 208 aliases contain no duplicates or collisions. |
| `KVE-CON-004` | Every Concept participates in the Knowledge Graph. |
| `KVE-CON-005` | Every Concept is supported by one or more Claims. |
| `KVE-CON-006` | Every Concept maps to one or more Learning Outcomes. |

### Knowledge Graph Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-KG-001` | Edge identities and semantic source/type/target tuples are unique. |
| `KVE-KG-002` | Prerequisite and progression subgraphs are acyclic. |
| `KVE-KG-003` | Every endpoint resolves to a known Concept or authorized curriculum object. |
| `KVE-KG-004` | Every relation type is canonical and every edge carries rationale and evidence or decision. |
| `KVE-KG-005` | All 101 Concepts belong to the single expected connected component. |
| `KVE-KG-006` | Root, leaf, hub, and maximum-degree metrics reconcile with the graph snapshot. |

### Learning Outcome Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-LO-001` | All 46 Learning Outcome IDs are unique and valid. |
| `KVE-LO-002` | Every Learning Outcome is linked from one or more Concepts. |
| `KVE-LO-003` | Every Learning Outcome maps to one canonical Assessment. |

### Assessment Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-AS-001` | All 28 Assessment IDs are unique and valid. |
| `KVE-AS-002` | Every Assessment measures one or more Learning Outcomes. |
| `KVE-AS-003` | Every Assessment resolves to exactly one canonical Chapter. |

### Chapter Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-CH-001` | All 28 Chapter IDs are unique and valid. |
| `KVE-CH-002` | Every Chapter has one or more Assessments. |
| `KVE-CH-003` | Every Chapter resolves to exactly one frozen Module. |

### Module Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-MOD-001` | All 7 Module IDs are unique and valid. |
| `KVE-MOD-002` | Every Module contains one or more Chapters. |
| `KVE-MOD-003` | Module order and dependencies match the frozen Blueprint. |

### Traceability Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-TR-001` | Forward traversal covers every operational layer. |
| `KVE-TR-002` | Reverse traversal is the exact inverse of canonical direct relations. |
| `KVE-TR-003` | Every operational object participates in a complete seven-edge chain. |
| `KVE-TR-004` | Direct edge and complete path totals reconcile to 551 and 272. |
| `KVE-TR-005` | No missing link or broken chain exists. |
| `KVE-TR-006` | No operational orphan exists. |
| `KVE-TR-007` | No duplicate relation, circular chain, or unknown endpoint exists. |

### Governance Rules

| Rule ID | Rule |
| --- | --- |
| `KVE-GOV-001` | Files and canonical identities follow naming conventions. |
| `KVE-GOV-002` | Document and record versions follow SemVer. |
| `KVE-GOV-003` | Authority and ownership match canonical schemas. |
| `KVE-GOV-004` | Document and object statuses use allowed lifecycle values. |
| `KVE-GOV-005` | Review states and decisions are valid and evidence-backed. |
| `KVE-GOV-006` | Approval state is not inferred from structural validation. |
| `KVE-GOV-007` | Repository structure and relative references comply with standards. |
| `KVE-GOV-008` | Markdown structure, headings, tables, and code fences pass lint. |

### Failure Behavior

- Missing identity, unknown reference, duplicate canonical identity, ownership
  violation, or frozen artefact mutation is a failure.
- A valid Draft, Proposed, Candidate, Validated, or Changes Required lifecycle
  value is not a schema failure, but it may prevent publication or freeze.
- Concentration and future maintenance exposure are warnings unless a canonical
  threshold says otherwise.

## Validation

Rule inventory: 58. Domain coverage: 11 of 11. Every rule maps to an existing
canonical contract and has a deterministic pass condition.

## References

- [Knowledge Validation Engine](./knowledge-validation-engine.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
- [Source Validation Report](./source-validation-report.md)
- [Evidence Validation Report](./evidence-validation-report.md)
- [Claim Validation Report](./claim-validation-report.md)
- [Concept Validation Report](./concept-validation-report.md)
- [Knowledge Graph Validation Report](./knowledge-graph-validation-report.md)
