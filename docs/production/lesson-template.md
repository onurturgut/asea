---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-034"
supporting_document_type: "Index"
title: "ASEA Lesson Authoring Template"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Learning Designer"
source_ids:
  - "ASEA-STD-CHAPTER-002"
  - "ASEA-STD-PROD-LESSON-001"
derived_from:
  - "ASEA-STD-KOS-009"
  - "ASEA-STD-PROD-PACKET-001"
---

# ASEA Lesson Authoring Template

## Purpose

This template translates the Lesson Authoring Standard into a repeatable Chapter
drafting contract without supplying learner-facing content.

## Scope

It describes what authors must place in each canonical Chapter section. It is
not a lesson, Research Packet, Production Packet, assessment, or answer key.

## Ownership

- Chapter Standard v2 owns Front Matter and the 15 H2 headings.
- The approved CPP owns the exact Outcomes, Concepts, Claims, assets, and
  assessment alignment.
- Authors own original synthesis within those boundaries.
- Reviewers own approval.
- Owner: Learning Designer.

## Content

### Front Matter Contract

Use the complete Chapter Standard v2 metadata. Values must resolve to the exact
Chapter, Module, Volume, Outcome, prerequisite, lab, project, and source
identities named by the approved CPP. Do not invent IDs or leave empty required
fields.

### Learning Objectives

Reproduce canonical Outcome wording and add no unapproved Outcome. Explain
observable completion evidence where the Chapter Standard permits supporting
text.

### Prerequisites

List canonical prerequisites in dependency order and provide a concise readiness
check. Do not reteach prerequisites unless the CPP explicitly requires review.

### Estimated Study Time

Provide a realistic range derived from reading, practice, assessment, and
reflection effort. State assumptions affecting the estimate.

### Introduction

Include motivation, a bounded problem, prior-knowledge activation, and a clear
learning promise. Curiosity must serve the Outcomes.

### Core Concepts

For each Concept, move from mental model to technical definition, limitations,
example, and check for understanding. Map every material assertion to approved
Claims.

### Engineering Perspective

Explain trade-offs, constraints, maintainability, failure modes, and how an
engineer decides when the Concept applies.

### Real World Examples

Use verifiable scenarios and runnable code where relevant. Declare environment,
input, expected output, and explanation.

### Common Mistakes

For each mistake, show the faulty mental model, symptom, diagnostic method,
correction, and prevention rule.

### Best Practices

Provide conditional recommendations with rationale and scope. Avoid universal
rules when trade-offs exist.

### Hands-on Exercise

Link or define approved exercises, Quiz, Lab, Challenge, or Mini Project
activities. Include objective, requirements, tasks, deliverables, evaluation,
and retry guidance without prematurely exposing answers.

### Reflection Questions

Ask learners to explain reasoning, compare alternatives, identify uncertainty,
and plan transfer to a new problem.

### Chapter Summary

Synthesize the lesson in Outcome order. Introduce no new material Claim.

### Key Takeaways

State concise, actionable conclusions that map directly to taught Concepts and
approved Claims.

### Further Reading

Prioritize official sources and explain the purpose, expected difficulty, and
recommended reading scope for each.

### Chapter References

Provide complete Claim-to-Source navigation with stable locators, versions, and
access dates where required.

### Author Self-Check

Before review, confirm:

- all 15 H2 headings appear once and in order;
- every Outcome is taught and assessed;
- every material Claim is traceable;
- examples and commands execute as documented;
- diagrams and assets have accessible alternatives;
- terminology is consistent;
- no placeholder, hidden answer, broken link, or unsupported assertion remains.

## Validation

The template preserves the Chapter Standard structure and provides substantive
author instructions for every required section. It contains no lesson content
or placeholder field.

## References

- [Lesson Authoring Standard](./lesson-authoring-standard.md)
- [Production Packet Standard](./production-packet-standard.md)
- [Chapter Standard v2](../standards/chapter-standard-v2.md)
- [KOS Chapter Production Specification](../knowledge-operating-system/09-chapter-specification.md)
