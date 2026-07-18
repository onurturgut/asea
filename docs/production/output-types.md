---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-035"
supporting_document_type: "Index"
title: "ASEA Production Output Types"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Content Systems Architect"
source_ids:
  - "ASEA-STD-KOS-010"
derived_from:
  - "ASEA-SD-IDX-033"
  - "ASEA-STD-PROD-PACKET-001"
---

# ASEA Production Output Types

## Purpose

This document defines supported content-production outputs and their minimum
contracts.

## Scope

It covers Lessons, Quizzes, Flashcards, Labs, Coding Exercises, Interview
Questions, Slides, Cheat Sheets, AI Mentor Knowledge, Articles, and PDF Notes.
It defines requirements but produces none of these outputs.

## Ownership

- Existing Curriculum, Chapter, Assessment, Lab, Quiz, Exercise, and Project
  standards retain authority over canonical educational artefacts.
- KOS Content Asset Standard owns shared asset requirements.
- Output types do not receive duplicate identities.
- Owner: Content Systems Architect.

## Content

### Common Contract

Every output records or resolves:

- canonical ID and SemVer;
- owner and lifecycle status;
- Volume, Module, Chapter, Outcome, Concept, and Claim mappings;
- authoritative source and approved packet versions;
- accessibility, language, licensing, and security requirements;
- source file and generated derivatives;
- validation commands or review method;
- required Review IDs and release manifest entry.

### Output Catalogue

| Output | Purpose | Minimum requirements | Primary gate |
| --- | --- | --- | --- |
| Lesson | Complete instructional narrative | Chapter structure, traceable Claims, practice, summary, references | Technical and Pedagogical Review |
| Quiz | Check knowledge and reasoning | Outcome map, difficulty, answer, rationale, distractor quality, scoring | Assessment Review |
| Flashcards | Support active recall | Atomic prompt, precise answer, Concept ID, scheduling metadata | Content Review |
| Lab | Reproduce an engineering scenario | Objective, environment, requirements, tasks, deliverables, rubric, cleanup | Technical and Lab Review |
| Coding Exercise | Practice an observable skill | Starter state, constraints, expected behavior, tests, feedback, solution separation | Technical Review |
| Interview Questions | Practice explanation and judgment | Level, competency, prompt, evaluation signals, follow-ups, model response separation | Content Review |
| Slides | Support facilitated instruction | Narrative sequence, speaker notes, sources, accessibility, visual restraint | Content and Asset Review |
| Cheat Sheet | Provide compact retrieval support | Scope, version, concise rules, examples, exceptions, references | Technical Review |
| AI Mentor Knowledge | Ground model-assisted guidance | Canonical Claims, refusal boundaries, attempt-first rule, privacy, verification | Technical and Governance Review |
| Article | Present standalone technical synthesis | Audience, narrative, traceability, examples, references, update owner | Editorial and Technical Review |
| PDF Notes | Provide portable derived material | Authoritative source, deterministic generation, bookmarks, accessibility, version | Asset and Publishing Review |

### Assessment Separation

Questions, answer keys, rationales, rubrics, and hidden tests are stored and
released according to assessment integrity rules. Learner-facing outputs never
expose protected answers before the required attempt.

### Generated Derivatives

Slides rendered to PDF, Mermaid rendered to SVG, or Markdown rendered to PDF
remain Derived. The editable source is authoritative, and generation commands,
tool versions, checksums, and dates are retained.

### Accessibility Baseline

All outputs provide semantic structure, keyboard-compatible interaction where
applicable, readable contrast, text alternatives, reduced-motion support when
animated, and a non-interactive fallback where required.

## Validation

All 11 requested output types have a purpose, minimum contract, and primary
review gate. No output artefact was generated.

## References

- [Production Architecture](./production-architecture.md)
- [Production Packet Standard](./production-packet-standard.md)
- [KOS Content Asset Standard](../knowledge-operating-system/10-content-assets.md)
- [Chapter Standard v2](../standards/chapter-standard-v2.md)
