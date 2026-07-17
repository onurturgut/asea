---
document_type: "standard"
standard_id: "ASEA-STD-KOS-008"
title: "ASEA Learning Architecture"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Learning Architecture

## Purpose

This standard turns validated concepts into measurable learning experiences while preserving ASEA curriculum authority and progressive difficulty.

## Learning Sequence

The canonical progression is:

```text
Concept → Example → Practice → Challenge → Assessment → Reflection
```

Within a chapter, motivation and mental models prepare the learner for theory; examples demonstrate boundaries; guided practice reduces support gradually; challenge tests transfer; assessment measures outcomes; reflection consolidates judgment.

## Curriculum Positioning

Before chapter design, the Curriculum Architect records target outcomes, prerequisite concepts and outcomes, module/chapter placement, difficulty, prior coverage, subsequent concepts, practice demand, assessment evidence, and excluded scope. The authoritative Volume registries remain unchanged unless their governed change process approves an update.

## Design Requirements

- Every learning objective uses an observable verb and maps to a canonical outcome.
- Every objective has instruction, practice, and assessment evidence.
- Prerequisites are tested or explicitly refreshed.
- Examples progress from minimal to realistic without introducing hidden concepts.
- Cognitive load is controlled through chunking, signaling, and gradual complexity.
- Accessibility is designed at specification time, not added after production.
- Retrieval practice and spaced review are scheduled where retention matters.
- Learners must explain decisions and trade-offs, not merely reproduce code.

## Chapter Experience

Each chapter specifies Hook, Story, Problem, Curiosity, Mental Model, Visualization, Interactive Demo, Theory, Engineering Perspective, Industry Case Study, Code Walkthrough, Debugging, Common Mistakes, AI Discussion, Exercise, Lab, Challenge, Reflection, Quiz, Mini Project, Summary, and References.

These are production functions, not a second heading contract. Chapter Standard
v2 exclusively owns the 15 canonical H2 headings. A production function may use
an optional H3 beneath the mapped canonical H2 when the Chapter needs it. The
mapping is defined in [Chapter Specification](./09-chapter-specification.md).
Adjacent presentation functions may be combined only when each required purpose
remains identifiable and traceable.

## Assessment Alignment

Assessment complexity must match the objective. Recall questions cannot prove implementation skill; code completion alone cannot prove engineering judgment. Labs produce observable artifacts, quizzes sample conceptual understanding, and projects integrate multiple outcomes. Rubrics state criteria, evidence, performance levels, and retry rules.

## AI-Native Learning

AI activities require an independent attempt, explicit prompt or interaction log when assessed, verification against authoritative sources or tests, comparison of alternatives, and learner explanation. AI output is never accepted solely because it executes or sounds plausible.

## Accessibility and Inclusion

Visual meaning has a text equivalent; interaction is keyboard operable; color is not the sole signal; motion has a reduced alternative; examples avoid unnecessary cultural assumptions; terminology is defined on first meaningful use.

## Definition of Done

Learning design is complete when all required components have intent and evidence, objectives align bidirectionally with assessment, prerequisites resolve, accessibility requirements are explicit, and the Chapter Production Packet is approved.

## References

### Internal Standards

- [Curriculum Standard v2.0](../standards/curriculum-standard-v2.md)
- [Chapter Specification](./09-chapter-specification.md)

### Evidence Sources

- World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG)
  2.2*, W3C Recommendation, 2023:
  <https://www.w3.org/TR/WCAG22/>
