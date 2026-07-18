---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-030"
supporting_document_type: "Index"
title: "Volume 01 Knowledge Validation Workflows"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-VALIDATION-001"
  - "ASEA-STD-GOV-REVIEW-001"
derived_from:
  - "ASEA-SD-IDX-029"
  - "ASEA-SD-COMP-015"
---

# Volume 01 Knowledge Validation Workflows

## Purpose

This document defines repeatable workflows for object-level, domain-level,
foundation-level, and pre-release knowledge validation.

## Scope

The workflows orchestrate existing validation rules and evidence. They do not
implement application code, mutate canonical records, approve reviews, or
authorize release.

## Ownership

- Validation Standard owns execution and report requirements.
- Review Standard owns review decisions.
- Freeze Standard owns freeze eligibility and immutable records.
- Canonical object owners resolve defects in their own domains.
- Owner: Knowledge Architect.

## Content

### Common Workflow

```text
Declare scope and version
  -> Load canonical owners
  -> Validate inventory and identities
  -> Validate metadata and lifecycle
  -> Validate direct references
  -> Validate graph and traceability
  -> Calculate metrics and risks
  -> Record failures and warnings
  -> Produce Validation Report
  -> Submit report to Review
```

If loading, parsing, or schema validation fails, the run records `Failed to
Run` or `Fail` as required by the Validation Standard. It must not continue
with assumed data.

### Single Claim Workflow

1. Resolve the Claim ID and version.
2. Run `KVE-CLM-001` through `KVE-CLM-007`.
3. Resolve every Evidence ID and its Source.
4. Resolve the primary Concept and curriculum chain.
5. Return canonical IDs, check results, lifecycle, and review decision.
6. Keep structural validity separate from production approval.

### Single Concept Workflow

1. Resolve Concept identity, category, canonical name, and aliases.
2. Run `KVE-CON-001` through `KVE-CON-006`.
3. Validate graph membership and adjacency.
4. Traverse supporting Claims, Evidence, and Sources.
5. Traverse Learning Outcomes, Assessments, Chapters, and Modules.
6. Return coverage, missing links, and dependency impact.

### Single Chapter Workflow

1. Resolve the frozen Chapter ID and its Module.
2. Validate linked Assessments and Learning Outcomes.
3. Traverse Concepts, Claims, Evidence, and Sources in reverse.
4. Validate complete forward and reverse paths.
5. Return scope totals, lifecycle gates, and critical dependencies.

### Complete Knowledge Foundation Workflow

1. Snapshot all 11 validation domains and their versions.
2. Execute all 58 rules in canonical pipeline order.
3. Reconcile 20 Sources, 14 Evidence, 101 Claims, 101 Concepts, 740 graph
   relations, 46 Outcomes, 28 Assessments, 28 Chapters, and 7 Modules.
4. Reconcile 333 operational traceability nodes, 551 direct edges, and 272
   complete paths.
5. Calculate health, integrity, compliance, coverage, and risk metrics.
6. Produce the canonical Validation Report and derived health reports.

### Pre-Release Repository Workflow

1. Complete the Knowledge Foundation workflow.
2. Validate repository inventory, naming, metadata, links, and Markdown.
3. Confirm frozen artefacts have no unauthorized diff.
4. Confirm required Validation and Review records exist and match scope
   versions.
5. Evaluate open failures and lifecycle warnings.
6. Submit the evidence package to Governance Review.
7. Do not freeze or release unless the appropriate review decision is
   `Approved`.

### Failure Workflow

```text
Failure detected
  -> Identify canonical owner
  -> Record evidence and impact
  -> Stop dependent scoring
  -> Create an authorized change request
  -> Correct the canonical owner
  -> Rerun affected and downstream rules
  -> Create a new report or update the same Draft run
```

Derived documents must never conceal or directly repair a canonical failure.

## Validation

The workflow catalogue covers all five required query scopes: Claim, Concept,
Chapter, complete Knowledge Foundation, and complete repository before release.
Each workflow preserves validation, review, and freeze ownership.

## References

- [Knowledge Validation Engine](./knowledge-validation-engine.md)
- [Knowledge Validation Rules](./knowledge-validation-rules.md)
- [Validation Query Patterns](./validation-query-patterns.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)
- [Review Standard](../standards/governance/02-review-standard.md)
- [Freeze Standard](../standards/governance/05-freeze-standard.md)
