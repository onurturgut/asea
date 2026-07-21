---
document_type: "supporting-document"
supporting_document_id: "V01-SD-IDX-006"
supporting_document_type: "Index"
title: "Programming Fundamentals Academy Overview"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-002"
  - "V01-SD-LO-002"
  - "V01-SD-PROJ-001"
derived_from:
  - "../../../../governance/blueprint-v2/02-canonical-schema.md"
  - "../../../../governance/blueprint-v2/04-chapter-registry.md"
  - "../../../../governance/blueprint-v2/05-learning-outcome-registry.md"
  - "../../projects.md"
x-academy-slug: "programming-fundamentals"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Overview

## Purpose

Define the learner pathway and production architecture for the Programming
Fundamentals Academy without copying or overriding the canonical meaning owned
by `V01-BP01@2.1.0`.

## Scope

This Academy view covers 12 Modules, 38 Chapter-based Lesson experiences, 66
Learning Outcomes, 8 Mini Projects, and 1 Academy Final Project. It is
architecture metadata only. It contains no lesson prose, examples, exercises,
labs, quiz questions, research, or AI Mentor material.

## Ownership

- The frozen Blueprint owns Module, Chapter, outcome, dependency, and planned
  artefact meaning.
- The canonical Project Plan owns Project contracts.
- This derived Academy view owns navigation, workload presentation, teaching
  methodology, and curriculum-production coordination only.
- Lesson experiences use their parent Chapter identity; no separate canonical
  Lesson ID family is introduced.

## Content

### Academy identity

| Field | Value |
| --- | --- |
| Academy name | Programming Fundamentals |
| Academy slug | `programming-fundamentals` |
| Canonical Volume | `V01` |
| Source Blueprint | `V01-BP01@2.1.0` |
| Active Freeze | `V01-FR-BP-003` |
| Level | Foundation |
| Audience | Learners with no prior programming experience |
| Education language | Turkish |
| Repository language | English |
| Authorized core workload range | 100-120 hours |
| Planned core guided workload | 110 hours |
| Project workload | 99-126 hours |
| Total planned learner workload | 209-236 hours |

The core guided workload includes Chapter-based Lesson study, guided practice,
Chapter assessments, Module reviews, and planned consolidation. Project
workload is reported separately because the frozen Project contracts already
define their own duration ranges.

### Academy vision

Programming is treated as a disciplined way to transform an ambiguous problem
into precise, executable, testable, and maintainable behavior. Syntax supports
that goal; it is not the curriculum's organizing principle. Graduates should
be able to reason about program behavior before, during, and after writing
code.

### Target audience

- learners beginning software engineering without prior programming study;
- self-taught learners who need a coherent mental model and evidence-based
  practice;
- learners preparing for later Computer Science, JavaScript, TypeScript,
  Backend, Frontend, and Software Engineering Academies.

### Entry requirements

- `V00` completion or equivalent diagnostic evidence;
- ability to follow a structured local workflow;
- basic file, terminal, Markdown, and study-log literacy;
- willingness to attempt, trace, test, explain, and revise work.

No programming language knowledge is required.

### Graduate profile

A successful graduate can:

- define inputs, outputs, constraints, assumptions, and edge cases;
- design and trace finite algorithms;
- model values, state, expressions, control flow, functions, and collections;
- reason about JavaScript runtime and type semantics;
- design object, collection, numeric, temporal, error, and module boundaries;
- compare basic algorithms using correctness and cost;
- reproduce failures, test behavior, refactor safely, and explain trade-offs;
- deliver a bounded command-line program with traceable requirements and
  verification evidence.

### Learning philosophy

The Academy uses the sequence:

```text
Concept -> Example -> Practice -> Challenge -> Assessment -> Reflection
```

Progress depends on demonstrated evidence rather than content consumption.
Learners first predict and attempt, then compare behavior, explain discrepancies,
and revise their mental model.

### Teaching methodology

1. Establish a first-principles mental model.
2. Demonstrate observable behavior with a bounded example.
3. Require tracing or prediction before execution.
4. Move from guided to independent practice.
5. Assess the mapped outcome with explicit criteria.
6. Require reflection and a next-action decision.
7. Integrate outcomes through Projects without adding untaught technology.

### Career outcomes

Completion prepares a learner for supervised entry-level programming work and
for deeper ASEA study. It does not by itself claim framework, production
operations, database, security, distributed-systems, or advanced algorithm
specialization.

### Architecture summary

| Entity | Count | Canonical identity |
| --- | ---: | --- |
| Volume | 1 | `V01` |
| Modules | 12 | `V01-M01`-`V01-M12` |
| Chapters | 38 | `V01-C01`-`V01-C38` |
| Lesson experiences | 38 | Parent Chapter ID and version |
| Learning Outcomes | 66 | `V01-LO001`-`V01-LO066` |
| Competency categories | 16 | Local derived catalog keys |
| Mini Projects | 8 | `V01-P01`-`V01-P08` |
| Final Project | 1 | `V01-CP01` |

## Validation

- Source Blueprint resolves to `V01-BP01@2.1.0`.
- Academy slug is lowercase kebab-case.
- Academy view introduces no unsupported canonical identity family.
- All counts reconcile with the frozen Blueprint and Project Plan.
- Workload presentation preserves canonical Project durations.
- Educational content generated by this document: 0.

## References

- [Canonical Blueprint](../../../../governance/blueprint-v2/02-canonical-schema.md)
- [Chapter Registry](../../../../governance/blueprint-v2/04-chapter-registry.md)
- [Learning Outcome Registry](../../../../governance/blueprint-v2/05-learning-outcome-registry.md)
- [Project Plan](../../projects.md)
- [Academy View Template](../../../../blueprint-v2/05-academy-template.md)
