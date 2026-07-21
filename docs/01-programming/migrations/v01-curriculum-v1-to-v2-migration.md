---
document_type: "migration-record"
migration_record_id: "V01-MG-001-002-001"
title: "Volume 01 Curriculum Blueprint v1 to v2 Migration"
version: "1.0.0"
status: "Stable"
migration_state: "Completed"
scope_id: "V01"
source_version: "1.1.0"
target_version: "2.0.0"
owner_role: "Curriculum Architect"
compatibility_report_id: "V01-SD-COMP-001"
review_ids:
  - "V01-RV019"
  - "V01-RV020"
---

# Volume 01 Curriculum Blueprint v1 to v2 Migration

## Migration Purpose

This record documents the completed controlled curriculum migration from
Volume 01 Blueprint `V01-BP01` version `1.1.0` to version `2.0.0`.

The migration preserved the source Blueprint Freeze throughout review and
validation. It expands the existing programming foundations with the
JavaScript-specific knowledge required for later JavaScript, TypeScript, and
React volumes without discarding the current curriculum's durable,
language-independent engineering foundation.

Blueprint v2 was activated only after the approved review sequence and new
Freeze Record. Blueprint v1 remains immutable historical evidence.

## Scope and Inventory

### Frozen source inventory

| Measure | Current canonical count |
| --- | ---: |
| Modules | 7 |
| Chapters | 28 |
| Learning Outcomes | 46 |
| Chapter Labs | 28 |
| Mini Projects | 6 |
| Capstones | 1 |

The current architecture progresses through computational thinking, data and
expressions, control flow, functions, structured data, algorithms, and program
reliability. Its principal strengths are:

- a dependency-driven progression instead of a syntax checklist;
- measurable outcomes concentrated at Apply through Create;
- one lab for every Chapter;
- project and assessment traceability;
- technology-neutral concepts that remain useful across programming languages.

The analysis identified five curriculum gaps for the intended downstream path:

1. JavaScript runtime and tooling are present only as supporting context.
2. JavaScript type conversion and equality semantics need explicit treatment.
3. Objects, arrays, higher-order functions, and closures need language-specific
   depth beyond their current general models.
4. numeric reliability, dates, and time boundaries are not explicit.
5. exception handling and ES module boundaries are not explicit.

### Pre-migration checksums

These checksums establish the immutable source baseline for the planned
migration.

| Frozen artefact | SHA-256 |
| --- | --- |
| `volume-blueprint.md` | `5f8e45e0de41ff9026c87f60550232dc459007ca25aa8f480ec5667f8e8573d2` |
| `learning-outcomes.md` | `1da25e3892092c857ca7c954402a9a2c2d91007d0ecea8046e547a153c2c2b23` |
| `module-map.md` | `f295952324f2ce5f2c9e1f814277b3a41a05eaf7f293ac92c44887558e3a2820` |
| `chapter-map.md` | `275add3631ce576c7424640e71cda3d98ed8b1252689b9c705d0d555786adc93` |
| `dependency-map.md` | `bc6350d78bdf98720a270f4554a6e4655973723035255962e2da080637f97127` |
| `assessment.md` | `11e9beeab502aebe1464f270d4343d3d625d61e7a04a86207c5772652386785b` |
| `labs.md` | `dc4fc4a97819276680ef9574af01ade65d6c916f3991b6d1e2786777385520e4` |
| `projects.md` | `a17bdb99f15a93dcd4860f4cf5783bc378c4c43e43c46688257e07a9fd8c48c6` |
| `roadmap.md` | `3056f8d2580cd5f4a63f7d24681e84a80b615d138bdb23da0f84738e2f0d5e1c` |

## Source Contract

The source contract is `V01-BP01` version `1.1.0`, protected by
`V01-FR-BP-001`. The following constraints apply until the migration is
approved and enters its authorized execution window:

- all seven Module identities and meanings remain canonical;
- all 28 Chapter identities, titles, meanings, and relative order remain
  canonical;
- all 46 Learning Outcome identities and meanings remain canonical;
- the existing dependency, lab, project, and assessment mappings remain
  canonical;
- no candidate document may claim authoritative or canonical status;
- the active Freeze Record and source artefacts remain unchanged.

## Target Contract

The proposed target is `V01-BP01` version `2.0.0` with:

| Measure | Proposed target |
| --- | ---: |
| Modules | 12 |
| Chapters | 38 |
| Learning Outcomes | 66 |
| Chapter Labs | 38 |
| Mini Projects | 8 |
| Capstones | 1 |
| Final Assessments | 1 |

The target preserves all existing IDs and meanings, then allocates new IDs
after the current ranges. The proposed new Modules are:

| Proposed ID | Module | Purpose | Intended placement |
| --- | --- | --- | --- |
| `V01-M08` | JavaScript Runtime and Type Semantics | Make runtime, type coercion, equality, and execution-environment behavior explicit | After `V01-M02` |
| `V01-M09` | JavaScript Objects and Collections | Apply object and array semantics to structured-data work | After `V01-M05` |
| `V01-M10` | Functional JavaScript | Add higher-order functions, callbacks, closures, and state encapsulation | After `V01-M04` |
| `V01-M11` | Numeric and Temporal Computing | Address numeric reliability, Math APIs, dates, time zones, and temporal boundaries | After `V01-M09` |
| `V01-M12` | Errors and Module Boundaries | Add exceptions, custom errors, ES modules, exports, imports, and dependency boundaries | Before `V01-M07` |

The proposed learning path preserves the relative dependency order of
`V01-M01` through `V01-M07`:

```text
V01-M01 -> V01-M02 -> V01-M08 -> V01-M03 -> V01-M04 -> V01-M10
        -> V01-M05 -> V01-M09 -> V01-M11 -> V01-M06 -> V01-M12
        -> V01-M07
```

Projects, the Capstone, and the final assessment remain assessment artefacts.
They are not represented as artificial curriculum Modules.

## Field and ID Mapping

### Existing identity policy

| Source range | Target rule | Classification |
| --- | --- | --- |
| `V01-M01`-`V01-M07` | Preserve ID and meaning | One-to-one |
| `V01-C01`-`V01-C28` | Preserve ID, title, and learning contract | One-to-one |
| `V01-LO001`-`V01-LO046` | Preserve ID and measurable meaning | One-to-one |
| `V01-P01`-`V01-P06` | Preserve ID and scope | One-to-one |
| `V01-CP01` | Preserve ID and scope | One-to-one |

### Proposed new Chapter identities

| New ID | Proposed Chapter title | Proposed Module |
| --- | --- | --- |
| `V01-C29` | JavaScript Type System and Conversion Semantics | `V01-M08` |
| `V01-C30` | Objects, Properties, and Data Modeling | `V01-M09` |
| `V01-C31` | Arrays and Collection Pipelines | `V01-M09` |
| `V01-C32` | Higher-Order Functions and Callbacks | `V01-M10` |
| `V01-C33` | Closures, Lifetime, and State Encapsulation | `V01-M10` |
| `V01-C34` | Numbers, Math, and Numeric Reliability | `V01-M11` |
| `V01-C35` | Dates, Time, and Temporal Boundaries | `V01-M11` |
| `V01-C36` | Exception Handling and Custom Errors | `V01-M12` |
| `V01-C37` | ES Modules and Program Organization | `V01-M12` |
| `V01-C38` | JavaScript Runtime, Tooling, and Execution Environments | `V01-M08` |

Each proposed Chapter receives two measurable Learning Outcomes in the
contiguous range `V01-LO047` through `V01-LO066`. Outcome statements are not
created by this planning record; they must be proposed in the Blueprint v2
candidate after the curriculum decision is Accepted.

The `PF-*` identifier family is rejected because Volume 01 already has the
canonical `V01-*` namespace. Introducing `PF-*` would create parallel identity
systems and break historical traceability.

## File Operations

The migration executed in this approved order:

1. record Accepted status for `V01-ADR-017` through an Approved review;
2. authorize the migration execution window under the Freeze Standard;
3. create Blueprint v2 candidate data in a non-authoritative review scope;
4. validate the complete 12/38/66 architecture and all mappings;
5. obtain Curriculum, Technical, Repository, and Final Blueprint approvals;
6. replace the canonical files at their existing paths with version `2.0.0`;
7. publish a new manifest and Freeze Record;
8. mark the previous freeze as superseded through the new immutable record;
9. activate Blueprint v2 in one atomic canonical switch.

No `curriculum/programming-fundamentals/` parallel canonical tree will be
created. Existing canonical paths remain stable.

## Compatibility Strategy

Backward compatibility is maintained through immutable IDs, explicit additions,
and a total mapping:

- existing Chapter and Learning Outcome references continue to resolve;
- existing content remains attached to its current Chapter IDs;
- new concepts receive new Chapter and Learning Outcome IDs;
- module navigation may insert new Modules without renaming existing Modules;
- derived maps are regenerated only from the approved target Blueprint;
- one canonical Blueprint is active at every point in the migration.

The migration is semantically additive but governance-breaking because it
changes frozen counts, dependencies, assessments, and planned artefacts.
Therefore it requires a MAJOR Blueprint version and a new Freeze Record.

## Deprecation Plan

Blueprint v1 remains canonical throughout planning, review, and validation.
There is no period in which Blueprint v1 and Blueprint v2 are both canonical.

At activation:

- Blueprint v2 becomes the sole canonical curriculum;
- Blueprint v1 remains available through repository history and the immutable
  source Freeze Record;
- derived v1 maps are superseded by v2 maps at the same canonical paths;
- no duplicate authoritative registry is retained;
- migration documents remain historical governance evidence.

Removal of source history is forbidden. Removal of temporary candidate
artefacts is allowed only after the canonical switch and passing link
validation.

## Validation Plan

The migration must validate:

- the source checksums before any execution;
- unique and schema-valid Module, Chapter, Outcome, Lab, Project, and Assessment
  IDs;
- preservation of all `V01-C01`-`V01-C28` and
  `V01-LO001`-`V01-LO046` meanings;
- complete mappings for `V01-C29`-`V01-C38` and
  `V01-LO047`-`V01-LO066`;
- an acyclic prerequisite graph;
- one lab and one assessment contract per Chapter;
- complete project and Capstone coverage;
- no broken relative links;
- no duplicate authoritative curriculum;
- valid SemVer and lifecycle states;
- an Approved Repository Review and passing Validation Report.

## Rollback Plan

Before the canonical switch, rollback means deleting only non-authoritative
candidate artefacts and returning this record to `Planned` or `Rolled Back`.
The frozen v1 source needs no restoration because it remains unchanged.

After the switch, rollback requires a new migration wave and governance review.
It must restore the recorded v1 files from their checksums and repository
history, create a new Freeze Record, and perform another atomic canonical
switch. The immutable v1 Freeze Record must never be edited.

## Results

Current migration result: **Completed**.

- Source inventory: complete.
- Target architecture proposal: complete.
- ID strategy: complete.
- Compatibility analysis: complete.
- Curriculum decision: `V01-ADR-017`, Accepted.
- Blueprint v2: `V01-BP01@2.0.0`, Stable/Frozen.
- Frozen source changes: none.
- Source history: preserved by `V01-FR-BP-001` and Git history.
- Canonical manifest: `V01-MF002`, Stable.
- Canonical registry: `V01-SD-IDX-005`, Active operational state.
- New Freeze: `V01-FR-BP-002`, Active.
- Canonical switch: completed on 2026-07-19.
- Migration validation: `V01-VR003`, Pass.
- Post-migration validation: `V01-VR005`, Pass.

## References

- [Volume 01 Blueprint](../volume-blueprint.md)
- [Volume 01 Freeze Record](../reviews/volume-01-freeze-record.md)
- [Curriculum v2 Decision](./v01-curriculum-v2-decision.md)
- [Compatibility Report](./v01-curriculum-v1-v2-compatibility-report.md)
- [Migration Standard](../../standards/governance/06-migration-standard.md)
- [Freeze Standard](../../standards/governance/05-freeze-standard.md)
- [Volume Standard v2](../../standards/volume-standard-v2.md)
