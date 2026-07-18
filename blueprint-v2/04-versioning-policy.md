---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-029"
supporting_document_type: "Compatibility Report"
title: "ASEA Blueprint v2 Versioning Design"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Repository Architect"
source_ids:
  - "ASEA-STD-REPOSITORY-002"
  - "ASEA-STD-VOLUME-002"
  - "ASEA-STD-GOV-MIGRATION-001"
derived_from:
  - "./03-identifier-standard.md"
  - "../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md"
---

# ASEA Blueprint v2 Versioning Design

## Purpose

This document applies existing SemVer and lifecycle rules to the proposed
multi-Academy architecture.

## Scope

It covers repository, standard, Blueprint, Volume, Chapter, assessment,
knowledge package, AI Mentor package, derived view, and migration versions.

## Ownership

- Repository Standard v2 owns common SemVer behavior.
- Volume Standard v2 owns Blueprint and Volume lifecycle behavior.
- Migration Standard owns source-to-target migration state.
- This document introduces no new status or version syntax.

## Content

### Independent version scopes

| Scope | Version owner | Change example |
| --- | --- | --- |
| Repository | Repository release | Coordinated platform and content release |
| Standards | Individual standard | Schema or rule change |
| Blueprint | Blueprint record | Scope, outcome, dependency, or planned artefact change |
| Volume | Volume package | Released learner-facing package |
| Chapter | Chapter document | Chapter content revision |
| Assessment | Assessment document | Instrument or passing-contract revision |
| Knowledge record | KOS schema and record | Evidence, Claim, or Concept revision |
| Production packet | CPP schema and packet | Approved input or output-target revision |
| AI Mentor package | Package manifest | Grounding, policy, or interaction-contract revision |
| Derived Academy view | Index document | Navigation or membership refresh |

One scope's version must not be copied into another scope merely to appear
synchronized.

### SemVer rules

- **MAJOR:** incompatible schema, prerequisite, outcome meaning, mandatory
  technology, or consumer-contract change.
- **MINOR:** backward-compatible capability, content, assessment, or membership
  addition.
- **PATCH:** correction that does not change meaning or requirements.

### Blueprint migration rule

The proposed expansion of frozen `V01-BP01` changes Module, Chapter, outcome,
dependency, and assessment counts. It therefore targets Blueprint version
`2.0.0`. The current `1.1.0` remains canonical until atomic activation.

### Lifecycle

```text
Draft/Unfrozen -> Review/Unfrozen -> Stable/Frozen
```

Candidate Academy indexes and Lesson views use the common document lifecycle:

```text
Draft -> Review -> Stable -> Deprecated -> Archived
```

They do not use `freeze_status` unless their registered document schema permits
it.

### Compatibility records

Every MAJOR migration records:

- source and target versions;
- total ID mapping;
- breaking and compatible changes;
- learner transition;
- rollback method;
- validation and review IDs;
- canonical activation time.

### Derived artefact updates

Derived Academy navigation, search indexes, Lesson renderings, and AI Mentor
packages may increment independently. A derived artefact cannot claim a newer
canonical meaning than its pinned source version.

## Validation

- Every version scope has one owner.
- SemVer meaning matches Repository Standard v2.
- Blueprint and content versions remain independent.
- No new lifecycle state is introduced.
- Blueprint v2 remains Draft and non-canonical in this Sprint.

## References

- [Repository Standard v2](../docs/standards/repository-standard-v2.md)
- [Volume Standard v2](../docs/standards/volume-standard-v2.md)
- [Migration Standard](../docs/standards/governance/06-migration-standard.md)
- [Blueprint Migration Record](../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md)
