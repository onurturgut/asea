---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-002"
supporting_document_type: "Index"
title: "ASEA Knowledge Registry Index"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Authoritative"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-KOS-002"
  - "ASEA-STD-KOS-007"
derived_from: []
---

# ASEA Knowledge Registry Index

## Purpose

This index identifies the authoritative operational store for ASEA source, evidence, claim, concept, contradiction, and knowledge-graph records.

## Scope

The store supports research and content-production packets. It does not replace canonical curriculum IDs, learning outcomes, chapter blueprints, or the Volume traceability registry.

## Ownership

- **Owner:** Knowledge Architect
- **Schema version:** `1.0.0`
- **Manifest:** [`registry-manifest.json`](./registry-manifest.json)
- **Validator:** [`validate-knowledge.mjs`](./scripts/validate-knowledge.mjs)

## Content

| Area | Authority |
|---|---|
| `registry/sources/` | Source identity and provenance |
| `registry/evidence/` | Source-located evidence |
| `registry/claims/` | Validated technical propositions and scores |
| `registry/concepts/` | Reusable concept extractions |
| `registry/contradictions/` | Disputed-claim lifecycle |
| `registry/edges/` | Typed knowledge relationships |
| `research-briefs/` | Approved research scope |
| `production-packets/` | Chapter production authorization inputs |
| `graph/snapshots/` | Version-pinned authoritative graph snapshots |
| `graph/derived/` | Regenerable graph views |
| `reviews/` | Audits, migrations, and validation evidence |

The canonical curriculum traceability registry remains [`assessment.md`](../docs/01-programming/assessment.md).

## Validation

Run:

```powershell
node knowledge/scripts/validate-knowledge.mjs
```

The validator checks JSON parsing, required fields, ID ownership, cross-record references, production-packet references, and prerequisite cycles.

## References

- [Knowledge Standards](../docs/knowledge-operating-system/02-knowledge-standards.md)
- [Knowledge Graph Standard](../docs/knowledge-operating-system/07-knowledge-graph.md)
- [Folder Structure](../docs/knowledge-operating-system/16-folder-structure.md)
- [Traceability Standard](../docs/standards/governance/03-traceability-standard.md)
