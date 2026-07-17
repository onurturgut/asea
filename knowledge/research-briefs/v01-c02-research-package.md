---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-IDX-001"
supporting_document_type: "Index"
title: "Chapter 02 Research Package"
version: "1.0.0"
status: "Review"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-RB-2026-0001"
derived_from:
  - "../registry-manifest.json"
  - "../graph/snapshots/graph-1.0.0.json"
---

# Chapter 02 Research Package

## Purpose

Assemble the validated research inputs required to produce `V01-C02` without writing the lesson.

## Scope

The package covers `V01-LO003` and `V01-LO004` under blueprint `V01-C02-BP01`. It preserves the chapter’s language-independent scope and uses concrete architectures only as bounded evidence.

## Ownership

- **Research owner:** Knowledge Architect
- **Technical review owner:** Subject-Matter Reviewer
- **Curriculum owner:** Curriculum Architect
- **Research brief:** [`ASEA-RB-2026-0001`](./asea-rb-2026-0001.json)
- **Graph snapshot:** [`ASEA-KG-001` version `1.0.0`](../graph/snapshots/graph-1.0.0.json)

## Content

### Source Coverage

| Tier | Records | Purpose |
|---|---|---|
| Tier 1 | `ASEA-SRC-000001`, `ASEA-SRC-000005` | Curriculum position and cross-layer pedagogy |
| Tier 2 | `ASEA-SRC-000002`, `ASEA-SRC-000006`, `ASEA-SRC-000007`, `ASEA-SRC-000008` | Runtime, architecture, translation, and formal execution |

Tier 3 and Tier 4 are not required for the bounded foundational claims. Production case studies must add independently validated industry evidence before making organization-specific claims.

### Validated Claims

| Claim | Confidence | Freshness | Outcome |
|---|---:|---:|---|
| `ASEA-CLM-000001` | 92 | 95 | Curriculum positioning |
| `ASEA-CLM-000002` | 86 | 92 | `V01-LO004` |
| `ASEA-CLM-000003` | 85 | 90 | `V01-LO004` |
| `ASEA-CLM-000004` | 94 | 96 | `V01-LO003` |
| `ASEA-CLM-000005` | 89 | 98 | `V01-LO003` |
| `ASEA-CLM-000006` | 92 | 94 | `V01-LO003`, `V01-LO004` |

All listed claims are `Approved`; no contradiction record is open.

### Concept Set

The approved set contains source code/running program, program translation, program state, instruction sequence/control flow, execution memory, and CPU abstraction. Their typed prerequisite graph is acyclic.

### Curriculum Position

- **Prerequisite:** `V01-C01`
- **Chapter:** `V01-C02`
- **Next chapter:** `V01-C03`
- **Practice:** `V01-C02-L01`, `V01-C02-EX01`, `V01-C02-CH01`
- **Assessment:** `V01-C02-AS01`
- **Project relation:** `V01-P01`

### Production Boundary

The lesson may use a tiny deterministic abstract machine to trace state. It must label the model as an abstraction and must not present WebAssembly, x86, LLVM, or JavaScript implementation details as universal CPU behavior.

## Validation

- Research brief fields are complete.
- Source identity, access date, usage rights, and freshness classes are recorded.
- Every production claim has exact evidence records and scores.
- All Approved claims meet the confidence threshold.
- Concepts map to canonical outcomes.
- Graph references resolve and prerequisite edges are acyclic.

## References

- [Chapter 02 Blueprint](../../docs/01-programming/chapter-blueprints/02-how-computers-execute-programs.md)
- [Research Pipeline](../../docs/knowledge-operating-system/03-research-pipeline.md)
- [Source Validation](../../docs/knowledge-operating-system/05-source-validation.md)
- [Knowledge Extraction](../../docs/knowledge-operating-system/06-knowledge-extraction.md)
