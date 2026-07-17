---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-013"
supporting_document_type: "Index"
title: "Volume 01 Canonical Evidence Registry"
version: "1.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-005"
  - "ASEA-SD-IDX-010"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-010"
  - "ASEA-SD-IDX-003"
  - "V01-SD-LO-001"
  - "V01-SD-CMAP-001"
  - "V01-SD-MMAP-001"
  - "V01-SD-ASMT-001"
---

# Volume 01 Canonical Evidence Registry

## Purpose

This registry exposes the canonical Volume 01 Evidence inventory and resolves
each Evidence record to its Source and curriculum relationships without
creating Claims or a second atomic Evidence store.

## Scope

The registry covers the fourteen schema-valid Evidence records in
`knowledge/registry/evidence/`. Curriculum relationships are derived views for
coverage analysis; they do not assert Claim-level support.

## Ownership

- **Atomic Evidence authority:** [`knowledge/registry/evidence/`](../../knowledge/registry/evidence/).
- **Evidence schema:** [`evidence.schema.json`](../../knowledge/schemas/evidence.schema.json).
- **Source authority:** [`knowledge/registry/sources/`](../../knowledge/registry/sources/).
- **Curriculum traceability authority:** [Assessment](../01-programming/assessment.md).
- **Registry owner:** Knowledge Architect.
- **Generated:** 2026-07-18.

## Content

### Evidence Identity and Lifecycle

`Evidence Type` is the canonical `record_type` value `evidence`. The profile
column is descriptive and non-normative.

| Evidence ID | Canonical Name | Evidence Type | Profile | Owner | Version | Status | Created | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ASEA-EV-000001` | CS2023 includes instruction execution and system-state foundations | `evidence` | Academic curriculum section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000002` | A language engine executes source with host-environment services | `evidence` | Official documentation section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000003` | Nand2Tetris exposes the computer and software hierarchy | `evidence` | Institutional course description | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000004` | Processor manuals define an architecture and programming environment | `evidence` | Official documentation section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000005` | Compiler code generation can produce target machine representations | `evidence` | Official documentation section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000006` | An abstract machine models execution state | `evidence` | Language specification section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000007` | Instruction sequences normally execute in order | `evidence` | Language specification section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000008` | Memory instructions read and write abstract machine memory | `evidence` | Language specification section | Researcher | 1.0.0 | Validated | 2026-07-17 | 2026-07-17 |
| `ASEA-EV-000009` | CS2023 defines foundational programming and software-development competencies | `evidence` | Academic curriculum section | Researcher | 1.0.0 | Validated | 2026-07-18 | 2026-07-18 |
| `ASEA-EV-000010` | CS2023 defines algorithm design and analysis as foundational competencies | `evidence` | Academic curriculum section | Researcher | 1.0.0 | Validated | 2026-07-18 | 2026-07-18 |
| `ASEA-EV-000011` | CS2023 defines software-engineering quality and delivery competencies | `evidence` | Academic curriculum section | Researcher | 1.0.0 | Validated | 2026-07-18 | 2026-07-18 |
| `ASEA-EV-000012` | ECMAScript specifies values, expressions, statements, and declarations | `evidence` | Language specification section | Researcher | 1.0.0 | Validated | 2026-07-18 | 2026-07-18 |
| `ASEA-EV-000013` | ECMAScript specifies execution contexts, functions, objects, and control abstractions | `evidence` | Language specification section | Researcher | 1.0.0 | Validated | 2026-07-18 | 2026-07-18 |
| `ASEA-EV-000014` | Google Technical Writing defines audience-aware and verifiable technical communication | `evidence` | Official documentation section | Researcher | 1.0.0 | Validated | 2026-07-18 | 2026-07-18 |

### Source, Authority, Citation, and Freshness

Authority and freshness are resolved from the Source Registry and are not
duplicated into atomic Evidence records. Verification is the canonical Evidence
workflow state. Every row resolves to exactly one Source.

| Evidence ID | Source ID | Source Record Version | Authority | Verification | Publication Version | Freshness | Citation and Location |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ASEA-EV-000001` | `ASEA-SRC-000001` | 1.0.0 | Tier 1 — Academic | Validated | CS2023 | Slow | [Computer Science Curricula 2023](https://doi.org/10.1145/3664191), “Architecture and Organization; Assembly-Level Machine Organization and Systems Fundamentals” |
| `ASEA-EV-000002` | `ASEA-SRC-000002` | 1.0.0 | Tier 2 — Official Documentation | Validated | Living documentation | Moderate | [JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model), “The engine and the host” |
| `ASEA-EV-000003` | `ASEA-SRC-000005` | 1.0.0 | Tier 1 — Academic | Validated | Living course materials | Slow | [From Nand to Tetris](https://www.nand2tetris.org/), “Home page and course description” |
| `ASEA-EV-000004` | `ASEA-SRC-000006` | 1.0.0 | Tier 2 — Official Documentation | Validated | Current online manual set | Moderate | [Intel Software Developer Manuals](https://www.intel.com/content/www/us/en/support/articles/000006715/processors.html), manuals landing page |
| `ASEA-EV-000005` | `ASEA-SRC-000007` | 1.1.0 | Tier 2 — Official Documentation | Validated | LLVM 24.0.0git | Moderate | [LLVM Target-Independent Code Generator](https://llvm.org/docs/CodeGenerator.html), “Introduction” |
| `ASEA-EV-000006` | `ASEA-SRC-000008` | 1.0.1 | Tier 2 — Official Documentation | Validated | WebAssembly Core Specification 3.0, 2026-07-10 | Moderate | [WebAssembly Core Specification](https://webassembly.github.io/spec/core/), “Execution > Conventions > Prose Notation” |
| `ASEA-EV-000007` | `ASEA-SRC-000008` | 1.0.1 | Tier 2 — Official Documentation | Validated | WebAssembly Core Specification 3.0, 2026-07-10 | Moderate | [WebAssembly Core Specification](https://webassembly.github.io/spec/core/), “Execution > Conventions > Prose Notation” |
| `ASEA-EV-000008` | `ASEA-SRC-000008` | 1.0.1 | Tier 2 — Official Documentation | Validated | WebAssembly Core Specification 3.0, 2026-07-10 | Moderate | [WebAssembly Core Specification](https://webassembly.github.io/spec/core/), “Instructions > Memory Instructions” and “Modules > Memories” |
| `ASEA-EV-000009` | `ASEA-SRC-000001` | 1.0.0 | Tier 1 — Academic | Validated | CS2023 | Slow | [Computer Science Curricula 2023](https://doi.org/10.1145/3664191), “Software Development Fundamentals (SDF), Preamble and Knowledge Units” |
| `ASEA-EV-000010` | `ASEA-SRC-000001` | 1.0.0 | Tier 1 — Academic | Validated | CS2023 | Slow | [Computer Science Curricula 2023](https://doi.org/10.1145/3664191), “Algorithmic Foundations (AL), Preamble and Knowledge Units” |
| `ASEA-EV-000011` | `ASEA-SRC-000001` | 1.0.0 | Tier 1 — Academic | Validated | CS2023 | Slow | [Computer Science Curricula 2023](https://doi.org/10.1145/3664191), “Software Engineering (SE), Preamble and Knowledge Units” |
| `ASEA-EV-000012` | `ASEA-SRC-000003` | 1.0.0 | Tier 2 — Official Documentation | Validated | Living edition | Moderate | [ECMAScript Language Specification](https://tc39.es/ecma262/), Clauses 6, 13, and 14 |
| `ASEA-EV-000013` | `ASEA-SRC-000003` | 1.0.0 | Tier 2 — Official Documentation | Validated | Living edition | Moderate | [ECMAScript Language Specification](https://tc39.es/ecma262/), Clauses 9, 15, and 20 |
| `ASEA-EV-000014` | `ASEA-SRC-000004` | 1.0.0 | Tier 2 — Official Documentation | Validated | Living course | Slow | [Technical Writing Courses for Engineers](https://developers.google.com/tech-writing), “Audience,” “Short Sentences,” and “Lists and Tables” |

### Scope and Review

| Evidence ID | Scope | Observed | Review Status |
| --- | --- | --- | --- |
| `ASEA-EV-000001` | Curriculum positioning for an introductory execution-model chapter | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000002` | JavaScript illustration; not a universal implementation pipeline | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000003` | Pedagogical evidence for a simplified layered execution model | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000004` | x86-64 and IA-32 example; not a universal CPU implementation | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000005` | LLVM example of an implementation-dependent translation path | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000006` | Precise abstract-machine example for state tracing | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000007` | WebAssembly sequence semantics with explicit model limits | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000008` | WebAssembly linear memory; not a complete physical-memory hierarchy | 2026-07-17 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000009` | Programming, data, control, function, text, error, debugging, and testing foundations | 2026-07-18 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000010` | Problem definition, pseudocode, tracing, searching, sorting, and complexity | 2026-07-18 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000011` | Requirements, design, quality, refactoring, validation, review, and delivery | 2026-07-18 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000012` | ECMAScript-specific values, expressions, bindings, and control flow | 2026-07-18 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000013` | ECMAScript-specific functions, scope, objects, collections, and failures | 2026-07-18 | Evidence workflow validated; formal Evidence Review pending |
| `ASEA-EV-000014` | Audience-aware instructions and reviewable engineering communication | 2026-07-18 | Evidence workflow validated; formal Evidence Review pending |

### Curriculum Relationship View

These relationships identify where Evidence may be used during later Claim
construction. They are not Claims.

| Evidence ID | Related Concepts | Related Outcomes | Chapter | Assessment | Module |
| --- | --- | --- | --- | --- | --- |
| `ASEA-EV-000001` | `ASEA-CON-000001`–`ASEA-CON-000006` | `V01-LO003`, `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000002` | `ASEA-CON-000001`, `ASEA-CON-000002` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000003` | `ASEA-CON-000001`, `ASEA-CON-000002`, `ASEA-CON-000006` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000004` | `ASEA-CON-000003`, `ASEA-CON-000005`, `ASEA-CON-000006` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000005` | `ASEA-CON-000002`, `ASEA-CON-000006` | `V01-LO003` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000006` | `ASEA-CON-000003`, `ASEA-CON-000004`, `ASEA-CON-000005` | `V01-LO003`, `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000007` | `ASEA-CON-000004` | `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000008` | `ASEA-CON-000003`, `ASEA-CON-000005` | `V01-LO004` | `V01-C02` | `V01-C02-AS01` | `V01-M01` |
| `ASEA-EV-000009` | `ASEA-CON-000007`–`ASEA-CON-000011`, `ASEA-CON-000020`–`ASEA-CON-000070`, `ASEA-CON-000082`–`ASEA-CON-000092` | `V01-LO001`–`V01-LO002`, `V01-LO007`–`V01-LO031`, `V01-LO038`–`V01-LO043` | `V01-C01`, `V01-C05`–`V01-C20`, `V01-C24`–`V01-C26` | Matching Chapter assessment IDs | `V01-M01`–`V01-M05`, `V01-M07` |
| `ASEA-EV-000010` | `ASEA-CON-000012`–`ASEA-CON-000019`, `ASEA-CON-000071`–`ASEA-CON-000081` | `V01-LO005`–`V01-LO006`, `V01-LO032`–`V01-LO037` | `V01-C03`, `V01-C04`, `V01-C21`–`V01-C23` | Matching Chapter assessment IDs | `V01-M01`, `V01-M06` |
| `ASEA-EV-000011` | `ASEA-CON-000093`–`ASEA-CON-000101` | `V01-LO044`–`V01-LO046` | `V01-C27`, `V01-C28` | `V01-C27-AS01`, `V01-C28-AS01` | `V01-M07` |
| `ASEA-EV-000012` | `ASEA-CON-000020`–`ASEA-CON-000045` | `V01-LO007`–`V01-LO018` | `V01-C05`–`V01-C12` | `V01-C05-AS01`–`V01-C12-AS01` | `V01-M02`, `V01-M03` |
| `ASEA-EV-000013` | `ASEA-CON-000046`–`ASEA-CON-000070`, `ASEA-CON-000082`–`ASEA-CON-000084` | `V01-LO019`–`V01-LO031`, `V01-LO038`–`V01-LO039` | `V01-C13`–`V01-C20`, `V01-C24` | `V01-C13-AS01`–`V01-C20-AS01`, `V01-C24-AS01` | `V01-M04`, `V01-M05`, `V01-M07` |
| `ASEA-EV-000014` | `ASEA-CON-000007`–`ASEA-CON-000015`, `ASEA-CON-000093`–`ASEA-CON-000101` | `V01-LO001`, `V01-LO002`, `V01-LO005`, `V01-LO044`–`V01-LO046` | `V01-C01`, `V01-C03`, `V01-C27`, `V01-C28` | Matching Chapter assessment IDs | `V01-M01`, `V01-M07` |

## Validation

- Evidence records represented: 14/14.
- Evidence records with exactly one Source: 14/14.
- Duplicate Evidence IDs or atomic records: 0.
- Missing Source, authority, citation, locator, verification, or SemVer: 0.
- Orphan or unused Evidence records: 0.
- Relationship coverage: 101/101 Concepts, 46/46 Outcomes, 28/28 Chapters,
  28/28 Assessments, and 7/7 Modules.
- Source coverage: 8/20 registered Sources and 8/8 Active Sources.

## References

- [Evidence Index](./evidence-index.md)
- [Evidence Relations](./evidence-relations.md)
- [Evidence Authority Matrix](./evidence-authority-matrix.md)
- [Evidence Coverage Report](./evidence-coverage-report.md)
- [Evidence Gap Analysis](./evidence-gap-analysis.md)
- [Evidence Foundation](./evidence-foundation.md)
- [Source Registry](./source-registry.md)
- [Concept Registry](./concept-registry.md)
