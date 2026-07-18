---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-MMAP-002"
supporting_document_type: "Module Map"
title: "ASEA Blueprint v2 Module Record Template"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-STD-CURRICULUM-002"
  - "ASEA-STD-VOLUME-002"
derived_from:
  - "./02-curriculum-hierarchy.md"
  - "../docs/01-programming/module-map.md"
---

# ASEA Blueprint v2 Module Record Template

## Purpose

This template defines the information required for a Module record inside an
authoritative Volume Module Map.

## Scope

It applies to candidate Modules designed under an approved Volume Blueprint.
It does not create a standalone Module document type.

## Ownership

- The Volume Blueprint owns planned Module scope.
- The authoritative Module Map owns Module records.
- Curriculum Standard v2 owns learning progression and outcome meaning.
- Module IDs remain owned by Repository Standard v2.

## Content

### Required fields

| Field | Requirement |
| --- | --- |
| Module ID | Valid `V{NN}-M{NN}` ID |
| Module title | Unique within the Volume |
| Purpose | One bounded competency transition |
| Position | Learning order independent from ID allocation |
| Prerequisite IDs | Existing Volume, Module gate, Chapter, or outcome references |
| Chapter IDs | Complete ordered membership |
| Learning Outcome IDs | Outcomes produced or consolidated |
| Skills | Observable capabilities |
| Knowledge dependencies | Concept and graph references |
| Practice assets | Labs, exercises, and challenges |
| Project mapping | Mini Project or Capstone contribution |
| Assessment ID | Module-level evidence aggregation |
| Completion gate | Measurable pass condition |
| Next Module IDs | One or more valid transitions |

### Record structure

```text
Module Identity
-> Purpose and competency boundary
-> Prerequisite evidence
-> Ordered Chapters
-> Outcome and knowledge mapping
-> Practice and project evidence
-> Assessment gate
-> Next transitions
```

### Design rules

- A Module represents a competency gate, not a single syntax topic.
- Every Chapter belongs to exactly one primary Module.
- Cross-Module reuse occurs through prerequisites, not duplicate Chapters.
- A Module contains at least one Chapter and one measurable gate.
- Projects and assessments are mapped to Modules but are not Modules.
- Navigation order may differ from numeric allocation when migration preserves
  immutable IDs.
- Module difficulty must be consistent with its prerequisite evidence.

### Review checklist

- Purpose is not duplicated by an adjacent Module.
- All Chapter IDs exist in the candidate Blueprint.
- All outcomes have instruction and assessment coverage.
- Prerequisites are minimal and acyclic.
- Completion evidence is sufficient for downstream Modules.
- Estimated workload fits the Volume duration.

## Validation

- Record fields map to existing Standards v2 owners.
- No unsupported standalone Module schema is introduced.
- ID, Chapter, outcome, and assessment links resolve.
- Module membership is total and non-overlapping.
- The record is not canonical until included in an approved Module Map.

## References

- [Volume Standard v2](../docs/standards/volume-standard-v2.md)
- [Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- [Current Module Map](../docs/01-programming/module-map.md)
- [Chapter Template](./07-chapter-template.md)
