---
document_type: "supporting-document"
supporting_document_id: "V01-SD-DMAP-003"
supporting_document_type: "Dependency Map"
title: "Programming Fundamentals Academy Dependency Map"
version: "0.1.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-SD-CMAP-002"
  - "V01-SD-DMAP-002"
derived_from:
  - "../../../../governance/blueprint-v2/04-chapter-registry.md"
  - "../../../../governance/blueprint-v2/06-dependency-graph.md"
x-source-blueprint-version: "2.1.0"
x-generated-on: "2026-07-19"
---

# Programming Fundamentals Academy Dependency Map

## Purpose

Expose the complete canonical prerequisite flow in an Academy production view.

## Scope

The map includes Module and Chapter dependencies. Lesson dependencies are
identical to their parent Chapter dependencies and are not a second edge set.

## Ownership

The canonical Chapter Registry owns direct prerequisite relationships. This
document derives navigation and validation evidence only.

## Content

### Module graph

```mermaid
flowchart TD
    M01[V01-M01] --> M02[V01-M02]
    M02 --> M08[V01-M08]
    M08 --> M03[V01-M03]
    M03 --> M04[V01-M04]
    M04 --> M10[V01-M10]
    M10 --> M05[V01-M05]
    M05 --> M09[V01-M09]
    M08 --> M09
    M09 --> M11[V01-M11]
    M09 --> M06[V01-M06]
    M03 --> M12[V01-M12]
    M04 --> M12
    M08 --> M12
    M10 --> M12
    M06 --> M07[V01-M07]
    M11 --> M07
    M12 --> M07
```

### Complete Chapter prerequisite map

| Chapter | Direct prerequisites |
| --- | --- |
| `C01` | `V00` |
| `C02` | `C01` |
| `C03` | `C01`, `C02` |
| `C04` | `C03` |
| `C05` | `C02`, `C04` |
| `C06` | `C05` |
| `C07` | `C05`, `C06` |
| `C08` | `C04`, `C07` |
| `C09` | `C07`, `C29` |
| `C10` | `C08`, `C09` |
| `C11` | `C06`, `C09`, `C10` |
| `C12` | `C10`, `C11` |
| `C13` | `C04`, `C12` |
| `C14` | `C07`, `C13` |
| `C15` | `C06`, `C13`, `C14` |
| `C16` | `C03`, `C04`, `C13`, `C14`, `C15` |
| `C17` | `C11`, `C14`, `C15`, `C16`, `C32`, `C33` |
| `C18` | `C05`, `C14`, `C17` |
| `C19` | `C10`, `C13`, `C14`, `C15` |
| `C20` | `C08`, `C14`, `C17` |
| `C21` | `C10`, `C11`, `C17`, `C31` |
| `C22` | `C11`, `C12`, `C17`, `C31` |
| `C23` | `C04`, `C17`, `C21`, `C22` |
| `C24` | `C08`, `C12`, `C15`, `C18`, `C36`, `C37` |
| `C25` | `C02`, `C04`, `C23`, `C24` |
| `C26` | `C10`, `C13`, `C14`, `C15`, `C16`, `C17`, `C18`, `C24`, `C25` |
| `C27` | `C16`, `C23`, `C25`, `C26` |
| `C28` | `C03`-`C27`, `C29`-`C38` |
| `C29` | `C05`, `C07`, `C38` |
| `C30` | `C18`, `C29`, `C33` |
| `C31` | `C17`, `C30`, `C32` |
| `C32` | `C13`, `C14`, `C16` |
| `C33` | `C15`, `C32` |
| `C34` | `C05`, `C07`, `C29`, `C31` |
| `C35` | `C08`, `C34` |
| `C36` | `C10`, `C13`, `C15`, `C29` |
| `C37` | `C16`, `C33`, `C36` |
| `C38` | `C02`, `C08` |

All abbreviated Chapter IDs inherit the `V01-` prefix.

### Gate flow

```text
V00
-> foundational problem and data gates
-> JavaScript runtime/type gate
-> control and function gates
-> functional/data-model gates
-> numeric/algorithm/module gates
-> reliability gate
-> V01-CP01
```

### Dependency rules

- Every Chapter has exactly one primary Module.
- `C01` is the only Chapter consuming the external `V00` root directly.
- `C28` is the terminal integration node.
- Lesson views cannot define independent dependencies.
- Project dependencies are defined by the canonical Project Plan.

## Validation

- Chapter nodes: 38.
- Missing dependency targets: 0.
- Duplicate direct references: 0.
- Orphan Chapters: 0.
- Circular dependencies: 0.
- Topological coverage: 38 of 38.

## References

- [Canonical Dependency Graph](../../../../governance/blueprint-v2/06-dependency-graph.md)
- [Canonical Chapter Registry](../../../../governance/blueprint-v2/04-chapter-registry.md)
- [Learning Path](./02-learning-path.md)
