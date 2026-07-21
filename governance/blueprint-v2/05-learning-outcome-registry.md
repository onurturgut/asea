---
document_type: "supporting-document"
supporting_document_id: "V01-SD-LO-002"
supporting_document_type: "Learning Outcomes Registry"
title: "Volume 01 Blueprint v2 Canonical Learning Outcome Registry"
version: "0.1.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
  - "V01-SD-CMAP-002"
derived_from:
  - "./02-canonical-schema.md"
  - "./04-chapter-registry.md"
  - "../../docs/01-programming/learning-outcomes.md"
---

# Volume 01 Blueprint v2 Canonical Learning Outcome Registry

## Purpose

Define complete parent, difficulty, Bloom, and dependency mappings for all 66
canonical Learning Outcomes.

## Scope

`V01-LO001`-`V01-LO046` preserve their v1 statements and evidence contracts.
`V01-LO047`-`V01-LO066` are the new Blueprint v2 outcomes.

## Ownership

- Authority applies to canonical Blueprint v2.
- The v1 Learning Outcomes Registry remains immutable archived history.
- Parent Lesson uses the same identity as its canonical parent Chapter.
- No separate Lesson ID family is created.

## Content

### Complete relationship registry

| ID | Parent Lesson | Parent Chapter | Parent Module | Difficulty | Bloom | Dependencies |
| --- | --- | --- | --- | --- | --- | --- |
| `V01-LO001` | `V01-C01` | `V01-C01` | `V01-M01` | Beginner | Understand | `V00` |
| `V01-LO002` | `V01-C01` | `V01-C01` | `V01-M01` | Beginner | Apply | `V00` |
| `V01-LO003` | `V01-C02` | `V01-C02` | `V01-M01` | Beginner | Understand | `V01-C01` |
| `V01-LO004` | `V01-C02` | `V01-C02` | `V01-M01` | Beginner | Analyze | `V01-C01` |
| `V01-LO005` | `V01-C03` | `V01-C03` | `V01-M01` | Beginner | Analyze | `V01-C01`, `V01-C02` |
| `V01-LO006` | `V01-C04` | `V01-C04` | `V01-M01` | Beginner | Create | `V01-C03` |
| `V01-LO007` | `V01-C05` | `V01-C05` | `V01-M02` | Beginner | Understand | `V01-C02`, `V01-C04` |
| `V01-LO008` | `V01-C05` | `V01-C05` | `V01-M02` | Beginner | Analyze | `V01-C02`, `V01-C04` |
| `V01-LO009` | `V01-C06` | `V01-C06` | `V01-M02` | Beginner | Apply | `V01-C05` |
| `V01-LO010` | `V01-C06` | `V01-C06` | `V01-M02` | Beginner | Evaluate | `V01-C05` |
| `V01-LO011` | `V01-C07` | `V01-C07` | `V01-M02` | Beginner | Apply | `V01-C05`, `V01-C06` |
| `V01-LO012` | `V01-C08` | `V01-C08` | `V01-M02` | Beginner | Create | `V01-C04`, `V01-C07` |
| `V01-LO013` | `V01-C09` | `V01-C09` | `V01-M03` | Beginner | Apply | `V01-C07`, `V01-C29` |
| `V01-LO014` | `V01-C09` | `V01-C09` | `V01-M03` | Beginner | Analyze | `V01-C07`, `V01-C29` |
| `V01-LO015` | `V01-C10` | `V01-C10` | `V01-M03` | Beginner | Create | `V01-C08`, `V01-C09` |
| `V01-LO016` | `V01-C10` | `V01-C10` | `V01-M03` | Beginner | Analyze | `V01-C08`, `V01-C09` |
| `V01-LO017` | `V01-C11` | `V01-C11` | `V01-M03` | Beginner | Apply | `V01-C06`, `V01-C09`, `V01-C10` |
| `V01-LO018` | `V01-C12` | `V01-C12` | `V01-M03` | Beginner | Evaluate | `V01-C10`, `V01-C11` |
| `V01-LO019` | `V01-C13` | `V01-C13` | `V01-M04` | Beginner | Create | `V01-C04`, `V01-C12` |
| `V01-LO020` | `V01-C13` | `V01-C13` | `V01-M04` | Beginner | Analyze | `V01-C04`, `V01-C12` |
| `V01-LO021` | `V01-C14` | `V01-C14` | `V01-M04` | Beginner | Evaluate | `V01-C07`, `V01-C13` |
| `V01-LO022` | `V01-C15` | `V01-C15` | `V01-M04` | Beginner | Analyze | `V01-C06`, `V01-C13`, `V01-C14` |
| `V01-LO023` | `V01-C15` | `V01-C15` | `V01-M04` | Beginner | Apply | `V01-C06`, `V01-C13`, `V01-C14` |
| `V01-LO024` | `V01-C16` | `V01-C16` | `V01-M04` | Beginner | Create | `V01-C03`, `V01-C04`, `V01-C13`-`V01-C15` |
| `V01-LO025` | `V01-C17` | `V01-C17` | `V01-M05` | Beginner | Apply | `V01-C11`, `V01-C14`-`V01-C16`, `V01-C32`, `V01-C33` |
| `V01-LO026` | `V01-C17` | `V01-C17` | `V01-M05` | Beginner | Analyze | `V01-C11`, `V01-C14`-`V01-C16`, `V01-C32`, `V01-C33` |
| `V01-LO027` | `V01-C18` | `V01-C18` | `V01-M05` | Beginner | Create | `V01-C05`, `V01-C14`, `V01-C17` |
| `V01-LO028` | `V01-C18` | `V01-C18` | `V01-M05` | Beginner | Evaluate | `V01-C05`, `V01-C14`, `V01-C17` |
| `V01-LO029` | `V01-C19` | `V01-C19` | `V01-M05` | Beginner | Apply | `V01-C10`, `V01-C13`-`V01-C15` |
| `V01-LO030` | `V01-C19` | `V01-C19` | `V01-M05` | Beginner | Analyze | `V01-C10`, `V01-C13`-`V01-C15` |
| `V01-LO031` | `V01-C20` | `V01-C20` | `V01-M05` | Beginner | Create | `V01-C08`, `V01-C14`, `V01-C17` |
| `V01-LO032` | `V01-C21` | `V01-C21` | `V01-M06` | Intermediate | Apply | `V01-C10`, `V01-C11`, `V01-C17`, `V01-C31` |
| `V01-LO033` | `V01-C21` | `V01-C21` | `V01-M06` | Intermediate | Analyze | `V01-C10`, `V01-C11`, `V01-C17`, `V01-C31` |
| `V01-LO034` | `V01-C22` | `V01-C22` | `V01-M06` | Intermediate | Apply | `V01-C11`, `V01-C12`, `V01-C17`, `V01-C31` |
| `V01-LO035` | `V01-C22` | `V01-C22` | `V01-M06` | Intermediate | Evaluate | `V01-C11`, `V01-C12`, `V01-C17`, `V01-C31` |
| `V01-LO036` | `V01-C23` | `V01-C23` | `V01-M06` | Intermediate | Analyze | `V01-C04`, `V01-C17`, `V01-C21`, `V01-C22` |
| `V01-LO037` | `V01-C23` | `V01-C23` | `V01-M06` | Intermediate | Evaluate | `V01-C04`, `V01-C17`, `V01-C21`, `V01-C22` |
| `V01-LO038` | `V01-C24` | `V01-C24` | `V01-M07` | Intermediate | Analyze | `V01-C08`, `V01-C12`, `V01-C15`, `V01-C18`, `V01-C36`, `V01-C37` |
| `V01-LO039` | `V01-C24` | `V01-C24` | `V01-M07` | Intermediate | Create | `V01-C08`, `V01-C12`, `V01-C15`, `V01-C18`, `V01-C36`, `V01-C37` |
| `V01-LO040` | `V01-C25` | `V01-C25` | `V01-M07` | Intermediate | Apply | `V01-C02`, `V01-C04`, `V01-C23`, `V01-C24` |
| `V01-LO041` | `V01-C25` | `V01-C25` | `V01-M07` | Intermediate | Analyze | `V01-C02`, `V01-C04`, `V01-C23`, `V01-C24` |
| `V01-LO042` | `V01-C26` | `V01-C26` | `V01-M07` | Intermediate | Create | `V01-C10`, `V01-C13`-`V01-C18`, `V01-C24`, `V01-C25` |
| `V01-LO043` | `V01-C26` | `V01-C26` | `V01-M07` | Intermediate | Evaluate | `V01-C10`, `V01-C13`-`V01-C18`, `V01-C24`, `V01-C25` |
| `V01-LO044` | `V01-C27` | `V01-C27` | `V01-M07` | Intermediate | Apply | `V01-C16`, `V01-C23`, `V01-C25`, `V01-C26` |
| `V01-LO045` | `V01-C27` | `V01-C27` | `V01-M07` | Intermediate | Evaluate | `V01-C16`, `V01-C23`, `V01-C25`, `V01-C26` |
| `V01-LO046` | `V01-C28` | `V01-C28` | `V01-M07` | Intermediate | Create | `V01-C03`-`V01-C27`, `V01-C29`-`V01-C38` |
| `V01-LO047` | `V01-C29` | `V01-C29` | `V01-M08` | Intermediate | Analyze | `V01-C05`, `V01-C07`, `V01-C38` |
| `V01-LO048` | `V01-C29` | `V01-C29` | `V01-M08` | Intermediate | Evaluate | `V01-LO047` |
| `V01-LO049` | `V01-C30` | `V01-C30` | `V01-M09` | Intermediate | Create | `V01-C18`, `V01-C29`, `V01-C33` |
| `V01-LO050` | `V01-C30` | `V01-C30` | `V01-M09` | Intermediate | Analyze | `V01-LO049` |
| `V01-LO051` | `V01-C31` | `V01-C31` | `V01-M09` | Intermediate | Apply | `V01-C17`, `V01-C30`, `V01-C32` |
| `V01-LO052` | `V01-C31` | `V01-C31` | `V01-M09` | Intermediate | Evaluate | `V01-LO051` |
| `V01-LO053` | `V01-C32` | `V01-C32` | `V01-M10` | Intermediate | Apply | `V01-C13`, `V01-C14`, `V01-C16` |
| `V01-LO054` | `V01-C32` | `V01-C32` | `V01-M10` | Intermediate | Analyze | `V01-LO053` |
| `V01-LO055` | `V01-C33` | `V01-C33` | `V01-M10` | Intermediate | Analyze | `V01-C15`, `V01-C32` |
| `V01-LO056` | `V01-C33` | `V01-C33` | `V01-M10` | Intermediate | Create | `V01-LO055` |
| `V01-LO057` | `V01-C34` | `V01-C34` | `V01-M11` | Intermediate | Analyze | `V01-C05`, `V01-C07`, `V01-C29`, `V01-C31` |
| `V01-LO058` | `V01-C34` | `V01-C34` | `V01-M11` | Intermediate | Evaluate | `V01-LO057` |
| `V01-LO059` | `V01-C35` | `V01-C35` | `V01-M11` | Intermediate | Apply | `V01-C08`, `V01-C34` |
| `V01-LO060` | `V01-C35` | `V01-C35` | `V01-M11` | Intermediate | Analyze | `V01-LO059` |
| `V01-LO061` | `V01-C36` | `V01-C36` | `V01-M12` | Intermediate | Apply | `V01-C10`, `V01-C13`, `V01-C15`, `V01-C29` |
| `V01-LO062` | `V01-C36` | `V01-C36` | `V01-M12` | Intermediate | Create | `V01-LO061` |
| `V01-LO063` | `V01-C37` | `V01-C37` | `V01-M12` | Intermediate | Create | `V01-C16`, `V01-C33`, `V01-C36` |
| `V01-LO064` | `V01-C37` | `V01-C37` | `V01-M12` | Intermediate | Analyze | `V01-LO063` |
| `V01-LO065` | `V01-C38` | `V01-C38` | `V01-M08` | Beginner | Understand | `V01-C02`, `V01-C08` |
| `V01-LO066` | `V01-C38` | `V01-C38` | `V01-M08` | Beginner | Apply | `V01-LO065` |

### New canonical outcome statements

| ID | Measurable outcome statement |
| --- | --- |
| `V01-LO047` | Trace JavaScript coercion and equality behavior for representative normal and edge-case expressions |
| `V01-LO048` | Justify an explicit conversion and equality strategy for a specified data boundary |
| `V01-LO049` | Design an object model with documented properties, invariants, and valid-state constraints |
| `V01-LO050` | Analyze object identity, mutation, shallow copying, and aliasing effects in a program trace |
| `V01-LO051` | Implement an array transformation pipeline that produces the required result without hidden state |
| `V01-LO052` | Defend mutating or non-mutating array operations using correctness and maintainability criteria |
| `V01-LO053` | Apply higher-order functions and callbacks to a bounded transformation or coordination problem |
| `V01-LO054` | Analyze callback control flow, data flow, invocation order, and failure boundaries |
| `V01-LO055` | Trace lexical capture, lifetime, and retained state through a closure |
| `V01-LO056` | Create a closure-based state boundary with an explicit and testable contract |
| `V01-LO057` | Identify floating-point, safe-integer, and rounding risks in representative calculations |
| `V01-LO058` | Select and justify a numeric comparison, rounding, or tolerance strategy |
| `V01-LO059` | Parse, validate, format, and compare date-time values under an explicit environment contract |
| `V01-LO060` | Analyze time-zone, calendar, locale, and invalid-date edge cases |
| `V01-LO061` | Apply `try`, `catch`, and `finally` while preserving the intended error boundary |
| `V01-LO062` | Design a custom error and recovery contract for a defined failure category |
| `V01-LO063` | Create ES module boundaries with explicit imports, exports, and responsibilities |
| `V01-LO064` | Analyze an ES module dependency graph for cycles, leakage, and unstable boundaries |
| `V01-LO065` | Explain the relationship among source code, JavaScript runtime, host environment, and tooling |
| `V01-LO066` | Execute and document a reproducible JavaScript workflow in a supported runtime environment |

### Assessment traceability

Every outcome resolves to one planned Chapter assessment through its
`Parent Chapter` field. The rule is deterministic:
`V01-LOxxx -> V01-Cnn -> V01-Cnn-AS01`. It adds no new assessment type and
does not generate assessment content.

| Parent Chapter | Planned Assessment | Covered Outcomes |
| --- | --- | --- |
| `V01-C01` | `V01-C01-AS01` | All outcomes whose Parent Chapter is `V01-C01` |
| `V01-C02` | `V01-C02-AS01` | All outcomes whose Parent Chapter is `V01-C02` |
| `V01-C03` | `V01-C03-AS01` | All outcomes whose Parent Chapter is `V01-C03` |
| `V01-C04` | `V01-C04-AS01` | All outcomes whose Parent Chapter is `V01-C04` |
| `V01-C05` | `V01-C05-AS01` | All outcomes whose Parent Chapter is `V01-C05` |
| `V01-C06` | `V01-C06-AS01` | All outcomes whose Parent Chapter is `V01-C06` |
| `V01-C07` | `V01-C07-AS01` | All outcomes whose Parent Chapter is `V01-C07` |
| `V01-C08` | `V01-C08-AS01` | All outcomes whose Parent Chapter is `V01-C08` |
| `V01-C09` | `V01-C09-AS01` | All outcomes whose Parent Chapter is `V01-C09` |
| `V01-C10` | `V01-C10-AS01` | All outcomes whose Parent Chapter is `V01-C10` |
| `V01-C11` | `V01-C11-AS01` | All outcomes whose Parent Chapter is `V01-C11` |
| `V01-C12` | `V01-C12-AS01` | All outcomes whose Parent Chapter is `V01-C12` |
| `V01-C13` | `V01-C13-AS01` | All outcomes whose Parent Chapter is `V01-C13` |
| `V01-C14` | `V01-C14-AS01` | All outcomes whose Parent Chapter is `V01-C14` |
| `V01-C15` | `V01-C15-AS01` | All outcomes whose Parent Chapter is `V01-C15` |
| `V01-C16` | `V01-C16-AS01` | All outcomes whose Parent Chapter is `V01-C16` |
| `V01-C17` | `V01-C17-AS01` | All outcomes whose Parent Chapter is `V01-C17` |
| `V01-C18` | `V01-C18-AS01` | All outcomes whose Parent Chapter is `V01-C18` |
| `V01-C19` | `V01-C19-AS01` | All outcomes whose Parent Chapter is `V01-C19` |
| `V01-C20` | `V01-C20-AS01` | All outcomes whose Parent Chapter is `V01-C20` |
| `V01-C21` | `V01-C21-AS01` | All outcomes whose Parent Chapter is `V01-C21` |
| `V01-C22` | `V01-C22-AS01` | All outcomes whose Parent Chapter is `V01-C22` |
| `V01-C23` | `V01-C23-AS01` | All outcomes whose Parent Chapter is `V01-C23` |
| `V01-C24` | `V01-C24-AS01` | All outcomes whose Parent Chapter is `V01-C24` |
| `V01-C25` | `V01-C25-AS01` | All outcomes whose Parent Chapter is `V01-C25` |
| `V01-C26` | `V01-C26-AS01` | All outcomes whose Parent Chapter is `V01-C26` |
| `V01-C27` | `V01-C27-AS01` | All outcomes whose Parent Chapter is `V01-C27` |
| `V01-C28` | `V01-C28-AS01` | All outcomes whose Parent Chapter is `V01-C28` |
| `V01-C29` | `V01-C29-AS01` | All outcomes whose Parent Chapter is `V01-C29` |
| `V01-C30` | `V01-C30-AS01` | All outcomes whose Parent Chapter is `V01-C30` |
| `V01-C31` | `V01-C31-AS01` | All outcomes whose Parent Chapter is `V01-C31` |
| `V01-C32` | `V01-C32-AS01` | All outcomes whose Parent Chapter is `V01-C32` |
| `V01-C33` | `V01-C33-AS01` | All outcomes whose Parent Chapter is `V01-C33` |
| `V01-C34` | `V01-C34-AS01` | All outcomes whose Parent Chapter is `V01-C34` |
| `V01-C35` | `V01-C35-AS01` | All outcomes whose Parent Chapter is `V01-C35` |
| `V01-C36` | `V01-C36-AS01` | All outcomes whose Parent Chapter is `V01-C36` |
| `V01-C37` | `V01-C37-AS01` | All outcomes whose Parent Chapter is `V01-C37` |
| `V01-C38` | `V01-C38-AS01` | All outcomes whose Parent Chapter is `V01-C38` |

### Bloom distribution

| Bloom level | Count |
| --- | ---: |
| Remember | 0 |
| Understand | 4 |
| Apply | 17 |
| Analyze | 20 |
| Evaluate | 11 |
| Create | 14 |
| **Total** | **66** |

## Validation

- Outcome records: 66.
- Preserved outcome IDs: 46.
- New outcome IDs: 20.
- Missing parents: 0.
- Missing difficulty or Bloom values: 0.
- Duplicate outcome IDs: 0.
- Lesson identity conflicts: 0.

## References

- [Chapter Registry](./04-chapter-registry.md)
- [Dependency Graph](./06-dependency-graph.md)
- [Current v1 Outcomes](../../docs/01-programming/learning-outcomes.md)
- [Curriculum Standard v2](../../docs/standards/curriculum-standard-v2.md)
