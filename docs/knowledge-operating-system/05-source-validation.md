---
document_type: "standard"
standard_id: "ASEA-STD-KOS-005"
title: "ASEA Source and Knowledge Validation Standard"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Source and Knowledge Validation Standard

## Purpose

This standard defines repeatable scoring and human review for sources, evidence, claims, and concepts. Scores inform decisions; they do not replace reviewer judgment.

## Required Validation Fields

Every claim records:

- Academic Score
- Official Score
- Industry Score
- Community Score
- Confidence Score
- Freshness Score
- Evidence Count
- Contradiction Report

Other record types retain the validation data they own:

- sources record tier, freshness class, identity, usage rights, and lifecycle state;
- evidence records locator fidelity, scope, observation date, and independence group;
- concepts record approved-claim coverage and curriculum disposition;
- edges record endpoint validity, relation semantics, rationale, and graph state.

These fields are referenced across records and are not duplicated.

## Tier Scores

Each tier score ranges from 0 to 5 and measures the quality of evidence from that tier:

| Score | Meaning |
|---|---|
| 0 | No evidence |
| 1 | Unverified or weakly relevant evidence |
| 2 | Relevant but incomplete or indirect evidence |
| 3 | Credible direct evidence with limitations |
| 4 | Strong, current, direct evidence |
| 5 | Multiple independent, authoritative, directly applicable sources |

`Not applicable` is allowed only with a written rationale; it is excluded from the weighted denominator.

## Confidence Score

Confidence is 0–100. The reviewer evaluates authority (30%), directness (20%), independence (15%), reproducibility (15%), consistency (10%), and scope clarity (10%). The calculation and component scores MUST be stored. It is not a simple average of tier scores.

- `80–100`: eligible for production if no blocking contradiction exists.
- `65–79`: reviewer action or additional evidence required.
- `0–64`: not eligible for content production.

High confidence never converts an opinion into a universal fact; claim wording must preserve scope.

## Freshness Score

Freshness is 0–100 and compares the validation date with the assigned review interval:

```text
freshness = max(0, 100 - (elapsed_days / review_interval_days * 100))
```

A reviewer may override the numeric value only by recording the trigger, evidence, new score, and next review date. Stable volatile claims require a positive score and an unexpired review date.

## Evidence Count

Evidence Count is the number of distinct, verified evidence records. Mirrors, citations of the same underlying study, and syndicated copies count once. Counts are reported by tier and independence group.

## Contradiction Report

Each contradiction has an ID, disputed claim, source/evidence IDs, versions and contexts, severity (`Advisory`, `Material`, `Blocking`), owner, status (`Open`, `Resolved`, `Accepted Risk`), rationale, decision record when applicable, and review date. Blocking contradictions prohibit production and publication.
These values classify contradiction impact only; they are not Review finding
severities. Formal Review findings use `Critical`, `Major`, `Minor`, or
`Observation` from the Governance Review Standard.

## Validation Procedure

1. Verify source identity, version, locator, and usage rights.
2. Check evidence fidelity against the source.
3. Atomize the claim and record scope and exceptions.
4. Group dependent evidence.
5. Score tier coverage, confidence, and freshness.
6. Search explicitly for disconfirming evidence.
7. Create or update contradiction records.
8. Obtain subject-matter review.
9. Set `Approved`, `Changes Required`, or `Rejected`.

## Example

A framework behavior claim supported by current official documentation and a reproducible test may receive Official 4, Industry 2, Confidence 88, and Freshness 92. It remains ineligible if another supported runtime version contradicts it and the claim fails to state the applicable version.

## Validation Rules

All arithmetic is reproducible; source IDs resolve; evidence locators are precise; independent counts are honest; scores include reviewer and date; overrides are justified; and decisions preserve prior versions.

## Definition of Done

Validation is done when all required fields exist, disconfirming evidence was sought, contradictions are dispositioned, thresholds are met, and a human subject-matter reviewer records the decision.

## References

### Internal Standards

- [Source Priority](./04-source-priority.md)
- [Validation Standard](../standards/governance/08-validation-standard.md)
- [Decision Record Standard](../standards/governance/04-decision-record-standard.md)
