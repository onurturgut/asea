---
document_type: "standard"
standard_id: "ASEA-STD-KOS-006"
title: "ASEA Knowledge Extraction Standard"
version: "1.0.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Extraction Standard

## Purpose

This standard converts verified sources into atomic evidence, testable claims, and reusable concept records without copying source prose.

## Extraction Workflow

1. Confirm the source record and exact version.
2. Capture evidence with a stable locator.
3. Separate observation, claim, interpretation, and recommendation.
4. Atomize compound statements into independently testable claims.
5. Record scope, exceptions, terminology, and uncertainty.
6. Synthesize the concept template from validated claims.
7. Link prerequisites, outcomes, and candidate graph relations.
8. Submit the record to validation; extraction never self-approves.

## Concept Extraction Template

Every concept record contains:

| Field | Required content |
|---|---|
| Definition | Precise boundary and distinguishing properties |
| Purpose | Problem addressed and value provided |
| History | Relevant origins and evolution, or justified `Not applicable` |
| Mental Model | Accurate internal representation and its limits |
| Analogy | Optional explanatory bridge with explicit failure points |
| Terminology | Canonical terms, aliases, and disallowed ambiguities |
| Relationships | Typed links to other concepts |
| Prerequisites | Concepts required before instruction |
| Real World Usage | Scoped, verifiable applications |
| Common Mistakes | Evidence-backed misconceptions or failure modes |
| Industry Notes | Context-specific production practices |
| AI Notes | AI-era implications, limits, and verification needs |
| Interview Notes | Competencies assessable in a professional discussion |
| Exercises | Candidate observable practice |
| Labs | Candidate reproducible investigation |
| Projects | Candidate integrated application |
| References | Source, evidence, and claim IDs |

Empty fields are prohibited. If a field is genuinely inapplicable, the record states why.

## Evidence Fidelity

Paraphrases must retain the source’s modality, scope, and uncertainty. “May” cannot become “will”; a version-specific statement cannot become universal. Direct quotations are minimal and include locator and attribution. Translations are labeled and retain the original locator.

## Claim Atomization

A claim contains one subject, one assertion, and one bounded context. Recommendations are split into factual basis, trade-off, and recommended action. Examples and analogies are not evidence unless independently sourced.

## Extraction Quality Checks

- Every statement maps to at least one evidence ID.
- Terminology matches authoritative specifications.
- Conflicting definitions remain separate pending validation.
- Source prose is not reproduced beyond permitted quotation.
- Inferences are labeled and explain their evidence chain.
- Suggested exercises do not enter the curriculum until learning design review.

## Handoff Contract

The extraction package includes source records, evidence records, claim candidates, concept draft, unresolved questions, candidate contradictions, and extraction log. The validator receives immutable source locators and may return individual claims without discarding accepted work.

## Definition of Done

Extraction is done when the complete template is meaningful, provenance resolves, claims are atomic, uncertainty is retained, licensing is respected, and the package is ready for independent validation.

## References

- [Knowledge Standards](./02-knowledge-standards.md)
- [Source Validation](./05-source-validation.md)
- [Knowledge Graph](./07-knowledge-graph.md)
