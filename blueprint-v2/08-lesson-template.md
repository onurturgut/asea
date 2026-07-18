---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-041"
supporting_document_type: "Index"
title: "ASEA Blueprint v2 Lesson Experience Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Content Systems Architect"
source_ids:
  - "ASEA-STD-CHAPTER-002"
  - "ASEA-STD-PROD-PACKET-001"
derived_from:
  - "./07-chapter-template.md"
  - "../docs/production/lesson-template.md"
---

# ASEA Blueprint v2 Lesson Experience Template

## Purpose

This template defines a Lesson experience as a delivery view of one canonical
Chapter, not as a second curriculum entity.

## Scope

It covers source pinning, instructional flow, Chapter section mapping,
practice, accessibility, traceability, and release integration. It generates no
lesson content.

## Ownership

- Chapter Standard v2 owns the canonical learner-facing structure.
- The Chapter owns outcomes and prerequisite meaning.
- The approved Chapter Production Packet owns the bounded authoring input.
- The Lesson view owns presentation and interaction only.

## Content

### Required source contract

| Input | Requirement |
| --- | --- |
| Chapter ID and version | Exactly one canonical Chapter |
| Blueprint version | Approved source scope |
| Production Packet ID and version | Approved authoring input |
| Learning Outcome IDs | Exact Chapter mapping |
| Concept and Claim IDs | Approved knowledge scope |
| Assessment IDs | Exact evidence contract |
| Language profile | Repository English; education Turkish |
| Accessibility profile | Text alternatives and interaction requirements |
| Review IDs | Required before Stable publication |

### Canonical section mapping

The Lesson renders the Chapter Standard v2 H2 order:

1. Learning Objectives
2. Prerequisites
3. Estimated Study Time
4. Introduction
5. Core Concepts
6. Engineering Perspective
7. Real World Examples
8. Common Mistakes
9. Best Practices
10. Hands-on Exercise
11. Reflection Questions
12. Chapter Summary
13. Key Takeaways
14. Further Reading
15. References

Presentation functions such as Hook, Mental Model, Visualization, Code
Walkthrough, Debugging, and AI Discussion appear as H3 sections under the
appropriate canonical H2. They do not alter the heading contract.

### Experience sequence

```text
Motivation
-> Mental Model
-> Explanation
-> Worked Example
-> Guided Practice
-> Independent Practice
-> Assessment
-> Reflection
```

### Segment contract

A delivery system may split a Chapter into local segments. Each segment records:

- local segment key;
- parent Chapter ID and version;
- outcomes supported;
- prerequisite segment keys;
- estimated time;
- content source anchor;
- accessibility alternative;
- completion signal.

Segment completion is navigation state, not outcome mastery.

### Quality gates

- learner attempt precedes protected answers;
- code and diagrams are validated;
- all material Claims resolve to Evidence and Sources;
- terminology follows the language profile;
- interaction has a non-interactive fallback;
- assessment complexity matches the outcome;
- AI assistance is disclosed and independently verified.

## Validation

- The Lesson resolves to exactly one Chapter.
- No separate Lesson ID family is introduced.
- All 15 canonical Chapter sections remain present and ordered.
- Segment keys create no prerequisite or outcome authority.
- Stable publication requires Technical, Content, and Repository review.

## References

- [Chapter Standard v2](../docs/standards/chapter-standard-v2.md)
- [Lesson Authoring Standard](../docs/production/lesson-authoring-standard.md)
- [Lesson Template](../docs/production/lesson-template.md)
- [Chapter Architecture Template](./07-chapter-template.md)
