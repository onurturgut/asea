---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-CMAP-002"
supporting_document_type: "Chapter Map"
title: "ASEA Blueprint v2 Chapter Architecture Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-STD-VOLUME-002"
  - "ASEA-STD-CHAPTER-002"
  - "ASEA-STD-CURRICULUM-002"
derived_from:
  - "./06-module-template.md"
  - "../docs/01-programming/chapter-map.md"
---

# ASEA Blueprint v2 Chapter Architecture Template

## Purpose

This template defines the architecture record required before a Chapter
Blueprint or learner-facing Chapter is produced.

## Scope

It covers Chapter identity, scope, outcomes, prerequisites, concepts, practice,
assessment, project contribution, navigation, risk, and production readiness.
It does not contain lesson prose.

## Ownership

- The Volume Blueprint owns Chapter allocation.
- The Chapter Map owns the architecture record.
- Chapter Standard v2 owns learner-facing Front Matter and section structure.
- Curriculum Standard v2 owns outcome and assessment traceability.

## Content

### Required architecture fields

| Field | Requirement |
| --- | --- |
| Chapter ID | Valid `V{NN}-C{NN}` ID |
| Module ID | One primary Module |
| Title and slug | Unique, stable, and kebab-case compatible |
| Objective | One bounded learning transformation |
| Difficulty | Beginner, Intermediate, or Advanced |
| Estimated time | Reading, practice, and assessment total |
| Prerequisite IDs | Minimal existing evidence |
| Learning Outcome IDs | At least one measurable outcome |
| Core Concept IDs | Concepts directly taught |
| Supporting Concept IDs | Concepts refreshed or contextualized |
| Claim and Evidence scope | Approved knowledge boundaries |
| Related Lab IDs | Practical evidence |
| Related Assessment IDs | Outcome measurement |
| Related Project ID | Integration contribution where applicable |
| Next Chapter ID | Canonical navigation |
| Excluded scope | Explicit deferrals |
| Risks | Technical, pedagogical, accessibility, or dependency risks |

### Production gates

```text
Chapter architecture
-> Chapter Blueprint
-> Research Brief
-> Research Packet
-> Chapter Production Packet
-> Draft Chapter
-> Assessments and assets
-> Reviews
-> Stable content
```

### Chapter Blueprint relationship

A Chapter architecture record is concise. A Chapter Blueprint expands it using
the 13 mandatory Blueprint sections from Volume Standard v2. The learner-facing
Chapter then uses the 15 mandatory H2 sections from Chapter Standard v2.

### Design rules

- One Chapter teaches a bounded concept cluster.
- Every objective maps to a canonical Learning Outcome.
- Every outcome has instruction, practice, and assessment evidence.
- Prerequisites are tested or refreshed, never assumed silently.
- A Chapter cannot require a technology absent from current or prerequisite
  Volumes.
- Concepts shared by multiple Chapters have one canonical definition and are
  linked through the knowledge graph.
- Excluded scope prevents later material from leaking into the Chapter.

## Validation

- All required IDs resolve and share the correct Volume scope.
- Prerequisites are acyclic.
- Outcome coverage is bidirectional.
- Lab and assessment difficulty matches the objective.
- Planned paths follow repository naming rules.
- No lesson content or unapproved Claim is introduced.

## References

- [Volume Standard v2](../docs/standards/volume-standard-v2.md)
- [Chapter Standard v2](../docs/standards/chapter-standard-v2.md)
- [Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- [Lesson Template](./08-lesson-template.md)
