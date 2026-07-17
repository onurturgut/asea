---
document_type: "standard"
standard_id: "ASEA-STD-KOS-012"
title: "ASEA Knowledge Versioning Standard"
version: "1.0.0"
status: "Review"
supersedes: []
---

# ASEA Knowledge Versioning Standard

## Purpose

This standard preserves the history and reproducibility of knowledge, graphs, production packets, chapters, and assets.

## Version Model

All managed records and documents use SemVer without a `v` prefix in metadata:

- **MAJOR:** incompatible meaning, schema, learning contract, or identifier interpretation.
- **MINOR:** backward-compatible knowledge, evidence, relation, component, or capability addition.
- **PATCH:** correction that does not change the learning or technical contract.

Published tags may include `v` according to the Repository Standard.

## Immutable History

Published records are not rewritten. A correction creates a new version with change reason, author, date, predecessor, affected claims, migration impact, and review IDs. Removed knowledge is deprecated and remains addressable.

## Layered Versions

Sources, evidence, claims, concepts, graph snapshots, curriculum positioning, CPPs, chapters, and assets version independently. Each downstream artifact pins the exact upstream versions used. A new source version does not automatically change a claim, but creates an update trigger.

## Compatibility

Every change records whether it is compatible with existing content, graph mappings, assessments, assets, and releases. Incompatible changes require a migration plan and cannot silently reuse a prior meaning or ID.

## Status Lifecycle

Repository documents use `Draft → Review → Stable → Deprecated → Archived`. KOS operational records use their lifecycle from [Content Lifecycle](./17-content-lifecycle.md), while retaining SemVer and audit history. Status and version are independent.

## Changelog Requirements

Each release records additions, changes, deprecations, removals, corrected claims, source updates, graph effects, curriculum effects, migration instructions, and security or licensing notes. “No impact” requires rationale.

## Reproducibility

A release manifest pins document, record, graph, asset, toolchain, and source snapshot versions plus checksums. Rebuilding a release must not depend on mutable URLs alone.

## Rollback

Rollback republishes or restores a previously reviewed manifest; it does not delete intervening history. Data migrations include a tested reverse procedure or explicitly document irreversibility and recovery.

## Definition of Done

A version change is done when classification is justified, dependencies and compatibility are evaluated, history is preserved, manifests resolve, required migrations exist, and affected reviews approve the exact versions.

## References

- [Repository Standard v2.0](../standards/repository-standard-v2.md)
- [Migration Standard](../standards/governance/06-migration-standard.md)
- [Update Pipeline](./13-update-pipeline.md)
