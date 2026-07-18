---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-024"
supporting_document_type: "Compatibility Report"
title: "ASEA Curriculum Gap Analysis"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-FR-BP-001"
derived_from:
  - "../../docs/01-programming/volume-blueprint.md"
  - "../../docs/01-programming/module-map.md"
  - "../../docs/01-programming/chapter-map.md"
  - "../../docs/01-programming/learning-outcomes.md"
---

# ASEA Curriculum Gap Analysis

## Purpose

This analysis identifies curriculum gaps that limit progression from the
current Programming Foundations Volume to the intended long-term ASEA Academy
portfolio.

## Scope

The analysis covers missing curriculum areas, structural weaknesses, naming,
dependencies, production integration, and growth bottlenecks. Proposed
additions are not canonical curriculum.

## Ownership

- **Authority:** Derived analysis.
- **Canonical curriculum:** Frozen Volume 01 Blueprint.
- **Interpretation:** A gap is an unmet future requirement, not a defect that
  silently authorizes a frozen scope change.

## Content

### Missing curriculum areas inside the transition layer

| Gap | Current coverage | Required future contract |
| --- | --- | --- |
| JavaScript runtime behavior | Supporting examples only | Runtime, environment, tooling, and execution semantics |
| JavaScript type semantics | General values and types | Coercion, equality, special values, and language-specific edge cases |
| Objects | General records and data modeling | Properties, identity, mutation, copying, and object operations |
| Arrays | General collections | Array APIs, iteration pipelines, mutation, and copying |
| Functional JavaScript | General functions | Callbacks, higher-order functions, closures, and lexical capture |
| Numeric reliability | General number representation | Floating-point behavior, Math APIs, precision, and safe boundaries |
| Dates and time | Not explicit | Dates, time zones, formatting, parsing, and temporal boundaries |
| Exception handling | Failure modes are general | `throw`, `try`, `catch`, `finally`, and custom errors |
| Module system | Modular design is conceptual | ES modules, imports, exports, dependency boundaries, and cycles |

These gaps support the existing migration proposal for five additive Modules,
ten Chapters, and twenty measurable outcomes. The proposal remains
non-canonical until approved.

### Missing Academy architecture

The repository contains no approved Blueprint, canonical ID namespace,
prerequisite contract, outcome registry, or release plan for the 21 requested
specialized Academies beyond Programming Fundamentals. Their names currently
represent portfolio intent, not governed curriculum entities.

### Structural weaknesses

1. **Distributed discovery:** Entity records are authoritative but spread
   across Blueprint and supporting maps.
2. **Uneven Volume maturity:** Volume 00 does not use the same metadata maturity
   as Volume 01.
3. **Dual content paths:** Canonical Chapter content and production packages
   are stored under different roots.
4. **No Academy-level ID contract in use:** Volume IDs exist, but no current
   registry identifies specialization families.
5. **No cross-Academy dependency graph:** Future entry and exit competencies
   are not yet modeled.
6. **Status aggregation is absent:** Stable architecture and Draft content can
   be mistaken for equivalent release readiness.

### Naming issues

| Issue | Effect | Required resolution |
| --- | --- | --- |
| Programming Foundations vs Programming Fundamentals | Search and navigation ambiguity | Keep canonical Blueprint name; define aliases only in derived indexes |
| Academy vs Volume terminology | Unclear hierarchy | Define Academy as portfolio/domain and Volume as governed learning unit |
| Lesson vs Chapter | Production assets can appear canonical | Require Chapter metadata and content-integration status |
| Blueprint vs content | Completion may be overstated | Report architecture and production maturity separately |

### Dependency problems

- `V00` is a prerequisite but lacks a fully governed Volume contract.
- The future Volume 02 transition is described but not canonically defined.
- Specialized Academy prerequisites are absent.
- A single "`V01` complete" dependency is too coarse for later pathways that
  need only selected competencies or require additional language semantics.

### Growth bottlenecks

- manual synchronization across maps as entity counts grow;
- no machine-readable repository-wide curriculum index;
- no canonical alias policy for renamed public-facing programs;
- candidate content can accumulate without an integration gate;
- every future Academy could invent its own taxonomy unless a shared registry
  references Standards v2 contracts.

### Missing outcomes

No existing outcome is invalid. Future outcomes are needed for the transition
areas listed above. They must be created only within an approved Blueprint
candidate, use new immutable IDs, map to evidence, and pass curriculum review.

## Validation

- Existing Modules, Chapters, and outcomes were not rewritten.
- Every gap is classified as future scope or structural debt.
- Proposed additions are clearly marked non-canonical.
- No new canonical identifier was assigned.
- No educational content was generated.

## References

- [Current Blueprint Analysis](./01-current-blueprint-analysis.md)
- [Canonical Structure](./02-canonical-structure.md)
- [Existing Migration Analysis](../../docs/01-programming/migrations/v01-curriculum-v1-to-v2-migration.md)
- [Curriculum Standard v2](../../docs/standards/curriculum-standard-v2.md)
