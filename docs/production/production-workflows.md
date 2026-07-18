---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-036"
supporting_document_type: "Index"
title: "ASEA Content Production Workflows"
version: "1.0.0"
status: "Draft"
scope_id: "ASEA"
authority: "Derived"
owner_role: "Content Operations Architect"
source_ids:
  - "ASEA-STD-KOS-003"
  - "ASEA-STD-KOS-011"
  - "ASEA-STD-KOS-013"
derived_from:
  - "ASEA-SD-IDX-033"
  - "ASEA-SD-COMP-019"
---

# ASEA Content Production Workflows

## Purpose

This document defines repeatable Research, Review, Lesson, Publishing, Version,
Update, and Deprecation workflows.

## Scope

The workflows orchestrate existing canonical records and review gates. They do
not implement automation or create educational content.

## Ownership

- KOS standards own research, update, review, and lifecycle behavior.
- Repository and Governance standards own validation, review, release, and
  freeze records.
- Canonical artefact owners correct defects in their own domains.
- Owner: Content Operations Architect.

## Content

### Research Workflow

```text
Research Request
  -> Research Brief
  -> Source Collection
  -> Evidence and Claim Selection
  -> Concept and Outcome Mapping
  -> Research Packet
  -> Validation
  -> Technical Review
  -> Educational Review
  -> Approved Production Input
```

Exit requires complete provenance, Outcome coverage, resolved contradictions,
and approval of the exact packet version.

### Review Workflow

1. Declare scope, version, reviewers, and criteria.
2. Validate inputs before human review.
3. Record findings with evidence, impact, owner, and required resolution.
4. Decide only `Approved`, `Changes Required`, or `Rejected`.
5. Return affected work to its earliest owning stage.
6. Revalidate corrections and create a new Review ID when a closed decision
   must be reconsidered.

Formal records use only canonical review types and domains.

### Lesson Workflow

```text
Approved Research Packet
  -> CPP Design
  -> CPP Validation
  -> Content Review Approval
  -> Draft Authoring
  -> Assessment and Asset Production
  -> Technical Review
  -> Pedagogical Review
  -> Repository Review
  -> Release Candidate
```

Material Claims outside the approved CPP return work to Research. Outcome or
architecture changes return work to curriculum governance.

### Publishing Workflow

1. Confirm all required output artefacts and assets exist.
2. Run technical, accessibility, security, link, and Markdown validation.
3. Reconcile IDs, versions, statuses, checksums, and traceability.
4. Generate the release manifest.
5. Complete Publishing and Final Reviews.
6. Create an immutable release record and tag.
7. Publish only the reviewed manifest contents.
8. Record monitoring and update ownership.

### Version Workflow

1. Classify the change as MAJOR, MINOR, or PATCH.
2. Identify affected canonical and Derived artefacts.
3. Create a new Draft version without rewriting published history.
4. Run dependency impact analysis.
5. Revalidate and re-review affected scopes.
6. Regenerate Derived outputs and manifests.
7. Publish the new version and preserve the predecessor.

### Update Workflow

Triggers include Source changes, specification releases, defects, learner
feedback, accessibility findings, security findings, broken dependencies, and
curriculum revisions.

```text
Signal -> Update Request -> Triage -> Impact Analysis -> Owner Decision
-> Authorized Change -> Validation -> Review -> Release
```

Urgency does not bypass evidence, review, or immutable history.

### Deprecation Workflow

1. Record the reason, replacement, affected consumers, and support window.
2. Mark the new version `Deprecated` without deleting history.
3. Update navigation and migration guidance.
4. Notify downstream packet and publication owners.
5. Continue critical correction support during the declared window.
6. Move to `Archived` only when policy conditions are met.

### Failure Routing

| Failure | Return owner |
| --- | --- |
| Missing or weak Source/Evidence | Research |
| Unsupported or conflicting Claim | Knowledge Validation |
| Concept or dependency defect | Knowledge Graph governance |
| Outcome mismatch | Curriculum architecture |
| Incomplete CPP | Learning Design |
| Incorrect explanation or code | Lesson Authoring |
| Invalid assessment | Assessment design |
| Accessibility or rendering defect | Asset production |
| Metadata, link, or manifest defect | Repository production |

## Validation

All seven requested workflows have entry logic, gate behavior, and completion
conditions. Review labels map to existing canonical metadata.

## References

- [Production Architecture](./production-architecture.md)
- [Research Engine](./research-engine.md)
- [Production Governance](./production-governance.md)
- [KOS Research Pipeline](../knowledge-operating-system/03-research-pipeline.md)
- [KOS Review Process](../knowledge-operating-system/11-review-process.md)
- [KOS Update Pipeline](../knowledge-operating-system/13-update-pipeline.md)
