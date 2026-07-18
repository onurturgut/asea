---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-019"
supporting_document_type: "Compatibility Report"
title: "ASEA Research Engine"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-003"
  - "ASEA-STD-KOS-004"
  - "ASEA-STD-KOS-005"
derived_from:
  - "ASEA-SD-IDX-033"
  - "ASEA-SD-IDX-029"
---

# ASEA Research Engine

## Purpose

The Research Engine defines how a bounded educational question becomes a
reviewed, version-pinned Research Packet suitable for learning design.

## Scope

It covers requests, briefs, source discovery, evidence and Claim selection,
Concept and Outcome coverage, terminology, synthesis notes, technical review,
educational review, approval, versioning, and handoff. It does not generate
lessons.

## Ownership

- Research Brief identity and schema belong to the KOS.
- Sources, Evidence, Claims, Concepts, and graph relationships remain canonical
  in their atomic registries.
- Curriculum architects own Learning Outcomes and Chapter positioning.
- Reviewers own approval decisions.
- The Research Packet is a read-only production snapshot of these owners.
- Owner: Knowledge Architect.

## Content

### Inputs

Every Research Engine run requires:

- canonical Chapter ID and target version;
- Learning Outcome IDs and prerequisites;
- approved or authorized Research Brief;
- scope inclusions, exclusions, and stop conditions;
- required source tiers and volatility classification;
- current Concept, graph, Claim, Evidence, and Source versions;
- terminology and language constraints;
- licensing, accessibility, security, and privacy constraints;
- named research and review owners.

### Research Method

1. Confirm scope and reject ambiguous expansion.
2. Search official specifications, standards, and primary documentation first.
3. Record successful and unsuccessful search queries.
4. Register or reference Sources through the canonical admission process.
5. Extract Evidence with precise locators and bounded paraphrases.
6. Select or propose atomic Claims without combining independent assertions.
7. Reconcile Concepts, aliases, prerequisites, and graph position.
8. Map every target Outcome to sufficient Claims and Evidence.
9. Record contradictions, uncertainty, volatile behavior, and exclusions.
10. Stop only when declared coverage and saturation conditions are met.

### Outputs

The engine produces a Research Packet containing:

- scope and version metadata;
- source collection and reading order;
- Concept, Claim, and Evidence coverage;
- terminology and mental-model constraints;
- technical synthesis and code references;
- practice, assessment, visual, and asset ideas;
- risks, contradictions, edge cases, and unresolved questions;
- Technical and Educational Review evidence;
- approval decision for production use.

Ideas are design inputs, not learner-facing content.

### Dependencies

| Dependency | Required condition |
| --- | --- |
| Blueprint | Chapter and Outcome scope resolves |
| Knowledge Foundation | Referenced records and versions validate |
| Traceability Engine | Forward and reverse paths are complete |
| Research Brief | Scope and stop conditions are explicit |
| Source policy | Required authority tiers are covered |
| Review governance | Independent ownership is assigned |

### Review Process

The workflow uses existing canonical review metadata:

1. Research Review maps to `review_type: Repository`,
   `review_domain: Validation`.
2. Technical Review maps to `review_type: Technical`,
   `review_domain: Validation`.
3. Educational Review maps to `review_type: Content`,
   `review_domain: Content`.

Stage names are workflow labels, not new review enums.

### Approval Process

A Research Packet becomes eligible for Production Packet design only when:

- its validation result is `Pass`;
- Technical Review is `Approved`;
- Educational Review is `Approved`;
- no unresolved contradiction affects a target Outcome;
- every referenced canonical version remains current;
- the exact packet version is named by both decisions.

Approval does not authorize lesson publication.

### Lifecycle

```text
Draft -> Review -> Validated -> Approved for Production
      -> Superseded | Deprecated -> Archived
```

These are workflow stages recorded through existing document status, validation
reports, and review decisions. They are not a replacement Front Matter enum.

### Versioning

- MAJOR: incompatible scope, Outcome, packet contract, or interpretation change.
- MINOR: backward-compatible source, Evidence, Claim, Concept, or design input.
- PATCH: non-semantic correction, locator repair, or explanatory clarification.

Any canonical dependency version change triggers impact analysis and packet
revalidation.

### Stop Conditions

Research stops when:

- all target Outcomes have sufficient authoritative support;
- every material Claim has verifiable Evidence;
- terminology and version boundaries are stable;
- new Sources no longer materially change the Concept or Claim model;
- contradictions are resolved or explicitly block approval;
- technical and educational reviewers have enough evidence to decide.

## Validation

The Research Engine defines purpose, scope, inputs, outputs, dependencies,
review, approval, lifecycle, versioning, and stop conditions. It reuses existing
KOS records and canonical Review enums.

## References

- [Research Packet Standard](./research-packet-standard.md)
- [Production Architecture](./production-architecture.md)
- [KOS Research Pipeline](../knowledge-operating-system/03-research-pipeline.md)
- [KOS Source Priority](../knowledge-operating-system/04-source-priority.md)
- [KOS Source Validation](../knowledge-operating-system/05-source-validation.md)
- [KOS Review Process](../knowledge-operating-system/11-review-process.md)
