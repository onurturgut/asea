---
document_type: "decision-record"
decision_id: "V01-ADR-016"
title: "Volume 01 Blueprint Decision Log"
version: "1.0.0"
status: "Review"
decision_status: "Proposed"
scope_id: "V01"
decided_on: "2026-07-17"
owner_role: "Curriculum Architect"
review_ids:
  - "V01-RV001"
superseded_by: []
---

# Volume 01 Blueprint Decisions

## Purpose

This governance Blueprint records the architecture and curriculum decisions already supported by the Volume 01 repository. It does not introduce lesson content or expand the frozen curriculum candidate.

## Scope

The decisions cover module and Chapter architecture, concept order, canonical identifiers, Blueprint separation, assessment planning, Capstone boundaries, repository authority, and change classification.

## Audience and Level

The primary audience is curriculum, documentation, repository, and quality reviewers. Decisions apply to the Beginner-to-Intermediate progression of Volume 01.

## Prerequisites

Reviewers must inspect the Volume Blueprint, Chapter/Module/Dependency maps, Learning Outcomes, assessment plan, Project Blueprint, and Standards v2 before changing a decision.

## Learning Outcomes

These decisions govern the architecture supporting `V01-LO001` through `V01-LO046`; they do not redefine any outcome statement.

## Content Map

### V01-ADR-001 — Seven-module architecture

- **Decision ID:** `V01-ADR-001`
- **Context:** Forty-six outcomes form distinct dependency gates.
- **Decision:** Use seven modules: computational thinking; data and expressions; control flow; functions and decomposition; structured data and recursion; algorithms and efficiency; reliability and program design.
- **Rationale:** Each module produces evidence consumed by the next and aligns with one Mini Project except the Capstone-focused final module.
- **Consequences:** Module gates, Chapter ranges, project ownership, and study plans must remain synchronized.
- **Alternatives Considered:** Grouping only by topic would hide readiness gates; more modules would fragment coherent outcome groups.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-002 — Twenty-eight Chapters

- **Decision ID:** `V01-ADR-002`
- **Context:** The Volume must keep each main mental model teachable within a 3–9 hour cycle.
- **Decision:** Use 28 Chapters exactly as listed in chapter-map.md.
- **Rationale:** The count limits simultaneous novelty while leaving room for practice, assessment, and reflection.
- **Consequences:** Changing the count affects IDs, maps, labs, assessments, study plans, and review scope.
- **Alternatives Considered:** Fewer Chapters would combine unrelated mental models; more would create repetition and coordination cost.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-003 — Chapter sequence

- **Decision ID:** `V01-ADR-003`
- **Context:** Concepts require an acyclic progression from computation to reliable program delivery.
- **Decision:** Use the dependency order recorded in dependency-map.md without reordering Chapters.
- **Rationale:** Data precedes decisions, control flow precedes decomposition, structured data precedes algorithms, and reliability follows sufficient program complexity.
- **Consequences:** Any reorder requires dependency, outcome, practice, project, and assessment impact analysis.
- **Alternatives Considered:** A syntax-first or project-first sequence would depend on skills not yet evidenced.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-004 — Programming-concept progression

- **Decision ID:** `V01-ADR-004`
- **Context:** Language syntax must not replace durable programming models.
- **Decision:** Teach computation, data, control, functions, structured data, algorithms, and reliability in that order; use JavaScript only as a reference language.
- **Rationale:** The sequence supports transfer to other general-purpose languages and keeps tools subordinate to concepts.
- **Consequences:** Examples may change language, but outcome wording and assessment cannot become JavaScript-specific.
- **Alternatives Considered:** A JavaScript feature sequence was rejected because it would bind outcomes to one language.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-005 — Recursion at Chapter 19

- **Decision ID:** `V01-ADR-005`
- **Context:** Recursion requires conditions, functions, scope, lifetime, and structured-data reasoning.
- **Decision:** Place introductory recursion after records and before the text/algorithm modules.
- **Rationale:** Learners can trace a call stack and compare recursive and iterative forms without introducing advanced algorithms.
- **Consequences:** Chapter 19 must remain introductory; advanced recursion and algorithm design stay outside this Volume.
- **Alternatives Considered:** Teaching recursion beside early loops would introduce function and stack assumptions too soon; removing it would leave a foundational model gap.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-006 — Search, sort, then complexity

- **Decision ID:** `V01-ADR-006`
- **Context:** Complexity comparisons need concrete algorithms and trace evidence.
- **Decision:** Teach searching in Chapter 21, sorting in Chapter 22, and complexity/trade-offs in Chapter 23.
- **Rationale:** Learners first observe behavior and operation counts, then generalize growth and selection criteria.
- **Consequences:** Complexity evidence must reuse the search/sort traces and cannot become an isolated notation exercise.
- **Alternatives Considered:** Teaching Big O before concrete traces was rejected; sorting before collection traversal was rejected.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-007 — Reliability topics in the final module

- **Decision ID:** `V01-ADR-007`
- **Context:** Systematic failure analysis needs non-trivial program behavior to inspect.
- **Decision:** Place errors, debugging, testing, clean code/refactoring, and integrated design in Chapters 24–28.
- **Rationale:** The final module can evaluate reliability through prior functions, data models, and algorithms rather than isolated syntax.
- **Consequences:** Reliability assessment can integrate prior program behavior; earlier Chapters still introduce basic correctness throughout.
- **Alternatives Considered:** Introducing formal debugging/testing before learners can construct multi-part behavior would reduce the evidence quality; postponing all reliability to later Volumes was rejected.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-008 — Canonical Learning Outcome IDs

- **Decision ID:** `V01-ADR-008`
- **Context:** Legacy LO-XX identifiers are not repository-global or machine-scalable.
- **Decision:** Use V01-LO001 through V01-LO046 as the only active relationship keys; retain legacy identifiers only in explicit migration mappings.
- **Rationale:** IDs are unique, sortable, Volume-scoped, and compatible with v2 validation.
- **Consequences:** All active links and matrices use canonical IDs; legacy IDs remain only as explicit migration evidence.
- **Alternatives Considered:** Keeping LO-XX was rejected because it collides across Volumes; renumbering by Chapter was rejected because outcome identity should survive Chapter-file renames.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-009 — Blueprint/content separation

- **Decision ID:** `V01-ADR-009`
- **Context:** Production plans and learner-facing instruction have different review and change lifecycles.
- **Decision:** Keep Chapter Blueprints in chapter-blueprints/ and future lessons in chapters/.
- **Rationale:** Scope, evidence, and dependencies can freeze before prose and examples are produced; content cannot silently redefine the plan.
- **Consequences:** Blueprint changes can be reviewed and frozen without editing learner-facing Chapter prose.
- **Alternatives Considered:** Combining plan and lesson was rejected because review findings would mix architecture with writing changes.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-010 — Capstone scope gate

- **Decision ID:** `V01-ADR-010`
- **Context:** A fair Capstone may assess only taught outcomes and technologies.
- **Decision:** Restrict mandatory Capstone work to the Volume 01 in-memory/static-data, command-line, language-independent foundation scope.
- **Rationale:** Assessment remains traceable and learners are not penalized for missing untaught infrastructure knowledge.
- **Consequences:** Capstone acceptance criteria cannot require untaught infrastructure, and optional exploration cannot affect passing.
- **Alternatives Considered:** Requiring web, cloud, database, or framework capability was rejected as curriculum scope expansion.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-011 — Persistence and database exclusion

- **Decision ID:** `V01-ADR-011`
- **Context:** No Chapter teaches file persistence or database design.
- **Decision:** Do not require persistence or a database; in-memory create/read/update/delete behavior may demonstrate programming logic without claiming persistence.
- **Rationale:** The Capstone stays within taught data, control, function, collection, algorithm, failure, and test skills.
- **Consequences:** CRUD-like behavior is in-memory unless a future breaking curriculum change teaches and assesses persistence.
- **Alternatives Considered:** Mandatory file or database storage was rejected; optional exploration cannot affect passing criteria.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-012 — Assessment planning during Blueprint

- **Decision ID:** `V01-ADR-012`
- **Context:** Outcomes need evidence contracts before lesson production begins.
- **Decision:** Plan Quiz, open-ended, Lab, Exercise, Challenge, Interview, Project, and Capstone relationships at Blueprint stage without writing their content.
- **Rationale:** Coverage gaps become visible early, while later artefact production remains separately reviewable.
- **Consequences:** Every outcome must have planned evidence before content production, while assessment questions remain a later artefact.
- **Alternatives Considered:** Deferring assessment mapping until after lessons was rejected because it permits unmeasured outcomes and content drift.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-013 — Repository as source of truth

- **Decision ID:** `V01-ADR-013`
- **Context:** Counts, IDs, mappings, and review state require a versioned canonical location.
- **Decision:** Treat repository documents and their validated relative links as the source of truth; external tools may render but not redefine them.
- **Rationale:** Changes remain reviewable, reproducible, and technology independent.
- **Consequences:** Rendered sites and external trackers must resolve back to repository paths and cannot override validated records.
- **Alternatives Considered:** Using an unpublished external board or website as authority was rejected because it cannot guarantee repository consistency.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-014 — Change flexibility

- **Decision ID:** `V01-ADR-014`
- **Context:** Not every clarification changes the curriculum contract.
- **Decision:** Allow spelling, broken-link, explanation-clarity, and meaning-preserving metadata fixes through PATCH review; allow planned examples to evolve within frozen outcomes and scope.
- **Rationale:** Editorial quality can improve without reopening structural decisions.
- **Consequences:** Minor editorial corrections remain possible after freeze, but they cannot alter scope, IDs, dependencies, or evidence.
- **Alternatives Considered:** Freezing every sentence was rejected; allowing unreviewed scope changes was also rejected.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

### V01-ADR-015 — Breaking-change boundary

- **Decision ID:** `V01-ADR-015`
- **Context:** Structural identifiers and dependencies are consumed across many artefacts.
- **Decision:** Treat changes to Chapter/module count or order, canonical IDs, prerequisite graph, required assessment mapping, project/Capstone scope, mandatory schema, or frozen outcomes as breaking changes.
- **Rationale:** Impact analysis, Blueprint MAJOR version, unfreeze, and renewed review become mandatory.
- **Consequences:** A breaking change requires a Blueprint MAJOR version, unfreeze record, migration impact analysis, and renewed reviews.
- **Alternatives Considered:** Silent renumbering or local-only edits were rejected because they create orphan and contradictory relationships.
- **Status:** Proposed
- **Superseded By:** None.
- **Traceability:** `V01-BP01` and the supporting documents named in this record.

## Practice and Assessment Map

Decision V01-ADR-012 governs Blueprint-stage assessment planning. The canonical outcome-to-evidence relationships are maintained in [traceability-matrix.md](./traceability-matrix.md), not duplicated here.

## Dependencies

The decisions depend on [volume-blueprint.md](./volume-blueprint.md), [chapter-map.md](./chapter-map.md), [module-map.md](./module-map.md), [dependency-map.md](./dependency-map.md), [learning-outcomes.md](./learning-outcomes.md), [projects.md](./projects.md), and [assessment.md](./assessment.md).

## Traceability

Each decision cites an existing repository contract through its Context, Decision, and References. Structural decisions V01-ADR-001–007 map to curriculum architecture; V01-ADR-008–009 map to repository/Blueprint governance; V01-ADR-010–012 map to Capstone and assessment scope; V01-ADR-013–015 map to source control and change governance.

## Acceptance Criteria

The record is complete when all fifteen required decisions have unique IDs, explicit rationale, consequences, considered alternatives, and status; every decision is consistent with current Volume documents and Standards v2.

## Risks and Constraints

This record cannot repair undefined supporting-document schemas in Standards v2 and cannot authorize production by itself. A change marked Accepted is still subject to Blueprint Review and freeze controls.

## Review and Freeze

Current status is Draft / Unfrozen. Accepted decisions become part of the frozen scope only when a valid v2 Review approves the Blueprint package and the permitted freeze mechanism is recorded.

## References

- [Volume Blueprint](./volume-blueprint.md)
- [Roadmap](./roadmap.md)
- [Chapter Map](./chapter-map.md)
- [Module Map](./module-map.md)
- [Dependency Map](./dependency-map.md)
- [Learning Outcomes](./learning-outcomes.md)
- [Project Blueprint](./projects.md)
- [Assessment System](./assessment.md)
- [Traceability Matrix](./traceability-matrix.md)
- [Standards Index v2.0](../standards/standards-index-v2.md)
- [Volume Standard v2.0](../standards/volume-standard-v2.md)
- [Curriculum Standard v2.0](../standards/curriculum-standard-v2.md)
