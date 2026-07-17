---
document_type: "standard"
standard_id: "ASEA-STD-KOS-011"
title: "ASEA Knowledge and Content Review Process"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge and Content Review Process

## Purpose

This standard defines quality gates from research through publication while using the canonical Governance Review Standard for review records and decisions.

## Review Gates

KOS stage labels are descriptive workflow labels. Formal records use only the
canonical `review_type` and `review_domain` enums below; stage labels are not
stored as new metadata values.

| KOS workflow label | Canonical `review_type` | Canonical `review_domain` | Reviewer ownership | Required evidence |
|---|---|---|---|---|
| Research Review | `Repository` | `Validation` | Knowledge Architect | Brief, search log, source coverage |
| Knowledge Validation | `Technical` | `Validation` | Subject-Matter Reviewer | Claims, scores, contradictions |
| Graph Review | `Technical` | `Validation` | Knowledge and Curriculum Architects | Node/edge diff and cycle report |
| Learning Design Review | `Content` | `Content` | Learning Designer | CPP, objective-assessment map |
| Technical Review | `Technical` | `Content` | Subject-Matter Reviewer | Draft, runnable examples, claim trace |
| Pedagogical Review | `Content` | `Content` | Content Reviewer | Progression, clarity, practice, assessment |
| Asset Review | `Technical` | `Content` | Asset and Accessibility Reviewers | Manifests, renders, tests |
| Repository Review | `Repository` | `Content` | Repository Reviewer | Metadata, links, IDs, versioning |
| Final Review | `Final` | `Content` | Independent Release Reviewer | All approvals and release manifest |

Separate gates using the same canonical metadata pair receive separate Review IDs
and exact scope versions. This does not extend either canonical enum.

## Decisions

Decisions are `Approved`, `Changes Required`, or `Rejected`. Approval applies only to the exact scope version. A changed material claim, learning objective, dependency, assessed behavior, or generated asset invalidates affected approvals.

## Finding Severity

- `Critical`: correctness, safety, licensing, provenance, traceability, or release integrity failure with immediate gate impact.
- `Major`: material learning or maintenance defect requiring correction.
- `Minor`: non-blocking quality issue with owner and deadline.
- `Observation`: optional improvement or recorded condition that does not require correction.

All findings have ID, location, evidence, impact, owner, required resolution,
due date, status, and resolution. A gate is blocked when an open Critical or
Major finding applies to it; `Blocking` is gate behavior, not a severity value.
“Resolved” requires verification by the reviewer or an independent automated
control recorded in the review.

## Independence

Authors may run checks and resolve findings but cannot be the sole Final reviewer for Stable publication. Contested technical claims require a reviewer other than the extractor. AI systems cannot own or approve reviews.

## Review Sequence

Research, knowledge, graph, and packet validation precede the pre-production
Content Review that authorizes an exact CPP version. Draft production follows
that approval. Post-draft Technical approval precedes Pedagogical approval;
asset generation follows approved content design; Repository and Final reviews
follow successful asset checks. Parallel review is allowed only where scopes do
not create an ordering dependency.

## Changes Required Workflow

The review record identifies the failed gate, exact corrections, owner, and re-review scope. Work returns to the earliest affected pipeline stage. Unaffected approvals remain valid only if the reviewer documents why their evidence did not change.

## Definition of Done

A review gate is done when its canonical record is schema-valid, findings are dispositioned, evidence is retained, the decision names an exact scope version, and required independence is demonstrated.

## References

### Internal Standards

- [Governance Review Standard](../standards/governance/02-review-standard.md)
- [Review Pipeline](./03-research-pipeline.md)
- [Quality Metrics](./14-quality-metrics.md)
