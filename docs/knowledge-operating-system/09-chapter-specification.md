---
document_type: "standard"
standard_id: "ASEA-STD-KOS-009"
title: "ASEA Chapter Production Specification"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Chapter Production Specification

## Purpose

This standard defines the approved production packet required before any chapter may be drafted. It supplements rather than replaces the Chapter Standard.

## Production Authorization

A chapter MUST NOT enter Content Production until it has an approved Chapter Production Packet (CPP). The CPP records:

- packet ID, chapter ID/version, owner, and state;
- canonical learning outcomes and prerequisites;
- approved concept, claim, evidence, and source IDs;
- graph version and curriculum-positioning decision;
- required chapter components and assets;
- assessment alignment and acceptance criteria;
- accessibility, language, and terminology constraints;
- known risks, contradictions, exclusions, and review owners.

Draft educational content may be created after CPP approval; publishing remains subject to governance reviews and freeze rules.

CPP approval requires:

1. a passing Validation Report for the packet and its references; and
2. an `Approved` canonical Review record using `review_type: Content` and
   `review_domain: Content`.

This pre-production decision reviews learning design and packet completeness. It
does not perform the post-draft Technical Review. Technical Review remains
independent and evaluates the produced Chapter, runnable examples, and claim
trace after drafting.

## Production Guidance Components

The following components define production intent. They do not replace or rename
the canonical Chapter Standard v2 H2 headings.

| Component | Production requirement |
|---|---|
| Hook | Relevant opening that activates attention without sensational claims |
| Story | Bounded narrative serving a learning objective |
| Problem | Concrete problem the concept helps solve |
| Curiosity | Question or observation motivating investigation |
| Mental Model | Accurate representation with stated limits |
| Visualization | Accessible visual specification and text equivalent |
| Interactive Demo | Observable behavior, controls, fallback, and success state |
| Theory | Validated explanation with scope and terminology |
| Engineering Perspective | Trade-offs, constraints, and decision reasoning |
| Industry Case Study | Verifiable, context-preserving source |
| Code Walkthrough | Runnable code, environment, expected output, explanation |
| Debugging | Intentional fault, symptoms, diagnostic path, solution criteria |
| Common Mistakes | Evidence-backed misconception and corrective model |
| AI Discussion | Independent attempt, AI comparison, and verification |
| Exercise | Measurable task with completion criteria |
| Lab | Reproducible scenario, deliverables, and rubric |
| Challenge | Transfer task with reduced scaffolding |
| Reflection | Prompts about reasoning, evidence, and next action |
| Quiz | Outcome coverage, rationale, difficulty, and answer integrity |
| Mini Project | Integrated authentic deliverable and evaluation |
| Summary | Outcome-aligned synthesis without new claims |
| References | Complete claim-to-source navigation |

## Canonical Chapter Mapping

| Production function | Canonical Chapter Standard v2 owner location |
|---|---|
| Hook, Story, Problem, Curiosity | `Introduction` |
| Mental Model, Visualization, Interactive Demo, Theory | `Core Concepts` |
| Engineering Perspective, AI Discussion | `Engineering Perspective` |
| Industry Case Study, Code Walkthrough | `Real World Examples` |
| Debugging, Common Mistakes | `Common Mistakes` |
| Corrective guidance and decision rules | `Best Practices` |
| Exercise, Lab, Challenge, Quiz, Mini Project | `Hands-on Exercise` or separately linked canonical artefact |
| Reflection | `Reflection Questions` |
| Summary | `Chapter Summary` and `Key Takeaways` |
| Extended sources | `Further Reading` |
| Claim-to-source navigation | `References` |

Optional component labels use H3 beneath these H2 headings. A Chapter may link
to separately governed Lab, Quiz, Challenge, Assessment, or Project artefacts
using their canonical Standards v2 IDs. KOS does not create an alternative
Chapter file structure.

## Traceability Matrix

For each component, the CPP maps objective ID → concept IDs → claim IDs →
evidence IDs → canonical artefact or KOS asset IDs → assessment criteria.
Unsupported claims and unassessed objectives block approval. Canonical
educational artefacts retain their Curriculum and Repository Standard IDs; KOS
does not assign a generic activity ID.

## Content Rules

The chapter uses original synthesis, defines technical terms at first meaningful use, labels version-specific behavior, explains code, preserves uncertainty, and contains no placeholders. Examples must be executable in the declared environment. References must be stable and sufficiently precise to verify claims.

## Change Control

Adding a material claim requires validation and a CPP revision. Editorial corrections may proceed as PATCH changes if they do not alter meaning. Changes to outcomes, IDs, or architecture follow canonical Standards v2 governance.

## Definition of Done

The CPP is done when all fields resolve, every component has a measurable
purpose, assessment alignment is complete, risks are owned, packet validation
passes, and the canonical pre-production Content Review approves the exact packet
version. Technical and subsequent publishing reviews apply to the produced draft
and do not create a circular prerequisite for CPP creation.

## References

### Internal Standards

- [Chapter Standard v2.0](../standards/chapter-standard-v2.md)
- [Learning Architecture](./08-learning-architecture.md)
- [Content Assets](./10-content-assets.md)
- [Traceability Standard](../standards/governance/03-traceability-standard.md)
