---
document_type: "review"
review_id: "V01-RV036"
title: "Programming Fundamentals Academy Lesson ID Strategy Review"
version: "1.0.0"
status: "Stable"
review_type: "Technical"
review_domain: "Repository"
scope_id: "V01"
scope_version: "0.1.0"
reviewer_roles:
  - "Content Systems Architect"
decision: "Approved"
reviewed_on: "2026-07-19"
findings: 0
updated_files:
  - "./12-lesson-id-strategy-review.md"
---

# Programming Fundamentals Academy Lesson ID Strategy Review

## Review Scope

Evaluate whether a Lesson should continue using its parent Chapter identity or
receive a new canonical ID for CMS, AI Mentor, search, analytics, progress,
certificates, deep linking, APIs, and versioning.

## Inputs

- [Lesson Registry](../academy/05-lesson-registry.md)
- [Identifier Design](../../../../blueprint-v2/03-identifier-standard.md)
- [Lesson Experience Template](../../../../blueprint-v2/08-lesson-template.md)
- [Validation Report](./00-curriculum-validation-report.md)

## Validation Method

Compare each platform use case with current identity ownership and determine
whether it requires a curriculum identity or only a delivery/runtime key.

## Findings

No defect was found in the current Lesson identity strategy.

### Platform impact

| Consumer | Recommended key |
| --- | --- |
| CMS | Chapter ID + Chapter version + local segment key |
| AI Mentor | Chapter ID + approved outcome/concept scope + content revision |
| Search | Chapter ID + stable slug + section anchor |
| Analytics | Chapter ID + Chapter version + segment key + event/attempt ID |
| Progress tracking | Learner attempt ID referencing Chapter ID/version |
| Certificates | Canonical outcomes and completion gates, not Lesson IDs |
| Deep linking | Chapter route plus stable local anchor |
| API | Chapter resource with a `lesson-view` representation |
| Versioning | Chapter SemVer and independently versioned delivery assets |

### Recommendation

Keep the current strategy. Do not create a new Lesson ID family. A future
multi-Lesson-per-Chapter model would be a semantic architecture change and
must use a standards-backed migration, not an ad hoc ID allocation.

`V01-Cnn-L01` must remain a Lab ID and must never be reused for a Lesson.

## Decision

**Approved.** Parent Chapter identity is acceptable and preferable under the
current one-Chapter/one-Lesson-view contract.

## Required Actions

Platform implementations must store view/segment/attempt identity separately
from canonical curriculum identity.

## Updated Files

- `12-lesson-id-strategy-review.md`

## References

- [Repository Standard v2](../../../standards/repository-standard-v2.md)
- [Knowledge Graph Review](./10-knowledge-graph-review.md)
