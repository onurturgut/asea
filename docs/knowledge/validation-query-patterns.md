---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-032"
supporting_document_type: "Index"
title: "ASEA Knowledge Validation Query Patterns"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-VALIDATION-001"
derived_from:
  - "ASEA-SD-IDX-029"
  - "ASEA-SD-COMP-015"
  - "ASEA-SD-IDX-030"
---

# ASEA Knowledge Validation Query Patterns

## Purpose

This document defines canonical, deterministic validation query patterns for
future AI and tooling consumers.

## Scope

Patterns cover validation of one Claim, one Concept, one Chapter, the complete
Knowledge Foundation, and the complete repository before release. They define
read contracts only and do not implement code.

## Ownership

- Inputs and relationships come from canonical registries and frozen artefacts.
- Rule results come from the Knowledge Validation Rules.
- Query output is Derived and cannot change lifecycle or approval state.
- Owner: Knowledge Architect.

## Content

### Common Input Contract

Every query declares:

| Field | Requirement |
| --- | --- |
| `query_type` | One registered pattern name |
| `scope_id` | Canonical object or repository ID |
| `scope_version` | Exact SemVer |
| `validation_profile` | Rule group or `complete` |
| `as_of` | Validation date |
| `include_dependencies` | Boolean |

### Common Output Contract

Every response returns:

- resolved canonical ID and version;
- canonical owner and lifecycle state;
- executed, passed, failed, and not-applicable rules;
- failures and warnings with evidence paths;
- dependency and traceability impact;
- structural result;
- review and approval state as separate fields;
- source snapshot versions.

### Validate One Claim

**Input:** Claim ID and exact version.

**Execution:**

1. Run `KVE-CLM-001` through `KVE-CLM-007`.
2. Resolve Evidence and Sources.
3. Resolve the primary Concept.
4. Traverse Outcomes, Assessments, Chapters, and Modules.

**Output:** Claim validity, Evidence and Source chain, Concept coverage,
curriculum reach, lifecycle state, and review decision.

### Validate One Concept

**Input:** Concept ID and registry version.

**Execution:**

1. Run `KVE-CON-001` through `KVE-CON-006`.
2. Validate Knowledge Graph membership and adjacency.
3. Resolve supporting Claims, Evidence, and Sources.
4. Resolve all downstream curriculum paths.

**Output:** Concept metadata validity, graph role, support coverage, outcome
coverage, complete paths, and dependency risk.

### Validate One Chapter

**Input:** Chapter ID and frozen Blueprint version.

**Execution:**

1. Run Chapter rules.
2. Resolve its Module, Assessments, Outcomes, and Concepts.
3. Traverse all supporting Claims, Evidence, and Sources.
4. Validate forward and reverse completeness.

**Output:** Chapter coverage, complete chains, critical dependencies, failures,
and lifecycle gates.

### Validate Complete Knowledge Foundation

**Input:** `V01`, exact registry versions, and `complete` profile.

**Execution:** Run all 58 rules over all 11 domains.

**Output:** domain results, inventory reconciliation, five quality scores,
critical errors, warnings, risks, and recommendations.

### Validate Complete Repository Before Release

**Input:** repository scope, release candidate version, and commit identity.

**Execution:**

1. Run complete Knowledge Foundation validation.
2. Validate repository structure, naming, metadata, relative links, and
   Markdown.
3. Verify frozen artefact integrity.
4. Resolve required Validation, Review, Audit, Decision, and Freeze records.
5. Evaluate release eligibility without creating approval.

**Output:** structural result, unresolved gates, review evidence, freeze
eligibility, and release recommendation.

### AI Safety Rules

- Never infer a missing canonical relationship.
- Never treat Proposed, Candidate, Validated, or Changes Required as Approved.
- Never convert a warning into a pass silently.
- Return empty or failed resolution explicitly.
- Cite every canonical ID and version used.
- Distinguish structural validation from educational correctness and review.
- Do not persist or mutate query results as canonical data.

## Validation

All five required query patterns are defined with inputs, execution, and output
contracts. Every referenced rule group exists in the rule catalogue.

## References

- [Knowledge Validation Engine](./knowledge-validation-engine.md)
- [Knowledge Validation Rules](./knowledge-validation-rules.md)
- [Knowledge Validation Workflows](./knowledge-validation-workflows.md)
- [Traceability Query Patterns](./traceability-query-patterns.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)
