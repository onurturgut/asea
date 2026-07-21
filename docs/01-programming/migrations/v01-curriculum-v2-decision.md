---
document_type: "decision-record"
decision_id: "V01-ADR-017"
title: "Expand Volume 01 Through a Controlled Blueprint v2 Migration"
version: "1.0.0"
status: "Stable"
decision_status: "Accepted"
scope_id: "V01"
decided_on: "2026-07-19"
owner_role: "Curriculum Architect"
review_ids:
  - "V01-RV015"
  - "V01-RV016"
  - "V01-RV017"
  - "V01-RV018"
  - "V01-RV019"
  - "V01-RV020"
superseded_by: []
---

# Expand Volume 01 Through a Controlled Blueprint v2 Migration

## Decision ID

`V01-ADR-017`

## Context

Volume 01 currently has a frozen, internally consistent architecture of seven
Modules, 28 Chapters, and 46 measurable Learning Outcomes. It provides a strong
language-independent progression from computational thinking to reliable
program design.

The planned downstream academies require learners to enter JavaScript,
TypeScript, and React study with explicit knowledge of JavaScript runtime
behavior, coercion, objects, arrays, higher-order functions, closures, numeric
reliability, dates, exceptions, modules, and development tooling. These topics
are either represented only as general concepts or are outside the current
frozen scope.

Changing Module and Chapter counts is forbidden under the active Blueprint
Freeze. A curriculum migration and an explicit curriculum decision are
therefore required.

## Decision

Adopt a MAJOR migration of `V01-BP01` from version `1.1.0` to version `2.0.0`
with the following target contract:

- preserve all seven existing Module IDs and meanings;
- preserve all 28 existing Chapter IDs, titles, and learning contracts;
- preserve all 46 existing Learning Outcome IDs and meanings;
- add five Modules using `V01-M08` through `V01-M12`;
- add ten Chapters using `V01-C29` through `V01-C38`;
- add twenty measurable Learning Outcomes using `V01-LO047` through
  `V01-LO066`;
- expand the project plan from six to eight Mini Projects while preserving
  `V01-CP01`;
- keep projects, the Capstone, and assessments outside the academic Module
  count;
- retain the existing canonical file paths and `V01-*` identity namespace;
- activate Blueprint v2 only through a single canonical switch after all
  required approvals and validation pass.

This Accepted decision authorizes the separately governed Blueprint v2 Freeze
workflow. It does not execute migration, replace the active Blueprint, or
change the current Freeze Record.

## Rationale

The proposed architecture uses the smallest expansion that closes the verified
readiness gaps:

- the existing foundation remains reusable and avoids curriculum rewrite;
- new language-specific material is isolated in explicit Modules;
- historical links, content, assessments, and evidence keep their IDs;
- new IDs are appended instead of repurposing existing identities;
- twelve Modules are large enough to represent competency gates without
  fragmenting every topic into a separate administrative unit;
- later JavaScript, TypeScript, and React volumes receive a clear prerequisite
  contract;
- an atomic activation prevents two canonical curricula from coexisting.

## Alternatives Considered

### Keep Blueprint v1 unchanged

Rejected as the final architecture because later volumes would need to reteach
JavaScript runtime, object, collection, closure, module, date, and error
semantics. It remains the correct canonical state until migration approval.

### Replace the curriculum with 22 topic Modules

Rejected because Variables, Operators, Strings, Numbers, and similar topics do
not each justify an independent competency gate. Treating Mini Projects,
Capstone, and Academy Assessment as Modules would mix curriculum structure with
assessment artefacts and inflate governance overhead.

### Introduce `PF-*` IDs and a new curriculum tree

Rejected because it would create a parallel identity namespace and a second
source of truth. It would also break established Chapter, Learning Outcome,
lab, project, and assessment references.

### Renumber all Chapters into a new learning order

Rejected because renumbering would destroy historical traceability and require
unnecessary migration of existing content and evidence.

### Add JavaScript details inside the existing frozen Chapters

Rejected because the required expansion changes learning contracts,
dependencies, assessments, and duration. Hiding this change inside existing
IDs would violate ID immutability and the active Freeze.

## Consequences

Positive consequences:

- Volume 01 becomes an explicit prerequisite for JavaScript, TypeScript, and
  React pathways.
- Existing content and traceability remain valid.
- New content can be produced under unambiguous canonical IDs.
- The curriculum remains engineering-first rather than syntax-first.

Costs and risks:

- estimated duration, labs, projects, assessments, and study plans must expand;
- the dependency graph becomes non-linear because appended IDs can appear
  earlier in the learning path;
- ten new Chapter Blueprints and twenty new Learning Outcomes require complete
  review;
- the canonical switch requires coordinated regeneration of every derived map;
- existing learners need a documented transition path to the additional
  competency gates.

## Status

The decision status is `Accepted`.

Acceptance evidence:

1. Curriculum Review `V01-RV015`, Approved;
2. Technical Review `V01-RV016`, Approved;
3. Repository Review `V01-RV017`, Approved;
4. Governance Review `V01-RV018`, Approved;
5. Migration Review `V01-RV019`, Approved;
6. Final Architecture Review `V01-RV020`, Approved.

The Accepted decision authorizes Freeze preparation, not migration execution
or canonical activation.

## Superseded By

None.

## Traceability

This decision affects:

- `V01-BP01`;
- `V01-SD-MMAP-001`;
- `V01-SD-CMAP-001`;
- `V01-SD-DMAP-001`;
- `V01-SD-LO-001`;
- the Volume 01 lab, project, assessment, roadmap, manifest, and freeze
  contracts;
- migration record `V01-MG-001-002-001`;
- compatibility report `V01-SD-COMP-001`.

No affected authoritative curriculum artefact is modified by this Accepted
record. Canonical activation remains a separate governed transaction.

## References

- [Migration Record](./v01-curriculum-v1-to-v2-migration.md)
- [Compatibility Report](./v01-curriculum-v1-v2-compatibility-report.md)
- [Current Volume Blueprint](../volume-blueprint.md)
- [Current Freeze Record](../reviews/volume-01-freeze-record.md)
- [Decision Record Standard](../../standards/governance/04-decision-record-standard.md)
- [Migration Standard](../../standards/governance/06-migration-standard.md)
