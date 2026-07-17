---
document_type: "standard"
standard_id: "ASEA-STD-KOS-017"
title: "ASEA Knowledge and Content Lifecycle"
version: "1.1.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge and Content Lifecycle

## Purpose

This standard defines explicit states, transitions, approvals, and terminal handling for knowledge and content records.

## Record Lifecycles

### Source

`Proposed → Verified → Active → Deprecated → Archived`

Verification confirms identity, version, locator, usage conditions, and
usability. Activation is a separate governed transition confirming that the
Verified source is current and eligible for evidence extraction. Evidence MUST
NOT be extracted from a source that has not reached `Active`. Deprecation
preserves the record and states replacement or reason.

### Knowledge Item

`Candidate → Extracted → Validated → Mapped → Approved → Deprecated → Archived`

Only Approved concepts and claims may enter a CPP. A rejected candidate retains its audit decision but does not advance.

### Chapter Production

`Planned → Researching → Validated → Ready for Production → Draft → Review → Stable → Deprecated → Archived`

`Ready for Production` requires an approved CPP. `Stable` requires all publishing reviews; draft creation does not require a freeze.

### Update Request

`Open → Triaged → In Progress → Verification → Resolved → Closed`

Rejected or duplicate requests close with a reason and linked evidence.

## Transition Rules

Every transition records actor, date, previous/new state, scope version, evidence, approval or decision ID, and reason. Automated validation may recommend or block a transition but cannot grant human approval.
The allowed `workflow_state` values for each record type are registered in
[Knowledge Standards](./02-knowledge-standards.md). Review gate names and common
repository document status values are never stored as KOS workflow states.

## Reversion

A failed review returns the artifact to the earliest affected state. Reversion creates a new event and does not erase the prior decision. Published Stable content may be withdrawn, deprecated, or superseded; it is not silently downgraded in history.

## Freeze Relationship

Blueprint Freeze protects approved architecture; Content Freeze and later freezes protect completed publication scope. Freeze does not prevent authorized Draft content creation. Changes within a frozen scope follow the unfreeze or permitted-change workflow in the Freeze Standard.

## Retention

Source snapshots, validation decisions, contradiction reports, release manifests, and review records are retained for the life of any dependent release. Archived records remain resolvable and read-only.

## Service Expectations

Each active state has an owner and review due date. Items without an owner cannot advance. Overdue volatile knowledge becomes stale and triggers the Update Pipeline.

## Definition of Done

Lifecycle implementation is done when state enums are enforced, transitions are auditable, approvals match roles, freezes are respected, stale items trigger updates, and archived dependencies remain reproducible.

## References

### Internal Standards

- [Research Pipeline](./03-research-pipeline.md)
- [Update Pipeline](./13-update-pipeline.md)
- [Freeze Standard](../standards/governance/05-freeze-standard.md)
