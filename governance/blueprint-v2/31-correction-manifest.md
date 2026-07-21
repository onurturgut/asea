---
document_type: "manifest"
manifest_id: "V01-MF004"
title: "Volume 01 Blueprint v2.1 Correction Manifest"
version: "0.1.0"
status: "Stable"
scope_id: "V01-BP01"
scope_version: "2.1.0"
generated_on: "2026-07-19"
artifact_count: 8
artifacts:
  - id: "V01-BP01"
    path: "./02-canonical-schema.md"
    version: "2.1.0"
    status: "Stable"
  - id: "V01-SD-CMAP-002"
    path: "./04-chapter-registry.md"
    version: "0.1.0"
    status: "Stable"
  - id: "V01-SD-LO-002"
    path: "./05-learning-outcome-registry.md"
    version: "0.1.0"
    status: "Stable"
  - id: "V01-SD-DMAP-002"
    path: "./06-dependency-graph.md"
    version: "0.1.0"
    status: "Stable"
  - id: "V01-SD-PROJ-001"
    path: "../../docs/01-programming/projects.md"
    version: "1.2.0"
    status: "Stable"
  - id: "V01-SD-COMP-002"
    path: "./25-mini-project-change-request.md"
    version: "1.0.0"
    status: "Stable"
  - id: "V01-SD-COMP-003"
    path: "./26-controlled-unfreeze-record.md"
    version: "1.0.0"
    status: "Stable"
  - id: "V01-SD-COMP-004"
    path: "./27-mini-project-contract-correction.md"
    version: "1.0.0"
    status: "Stable"
---

# Volume 01 Blueprint v2.1 Correction Manifest

## Purpose

Pin the exact files and lifecycle states reviewed for the controlled Mini
Project contract correction.

## Scope

The manifest covers Blueprint `V01-BP01@2.1.0`, unchanged canonical Chapter,
outcome, and dependency registries, Project Plan `1.2.0`, and correction
governance evidence.

## Artifact Inventory

The Front Matter `artifacts` list is authoritative. It contains eight files and
does not include educational content or PHASE 06 curriculum artefacts.

## Integrity Rules

- Every relative path must resolve.
- ID, version, and status must match target metadata.
- Manifest IDs must be unique.
- Only the Blueprint and Project Plan may change curriculum planning data.
- Stable unaffected registries must retain their previous checksums.

## Validation

- Declared artefacts: 8.
- Duplicate IDs: 0.
- Missing paths: 0.
- Scope version: `2.1.0`.
- Final promotion requires correction validation and four Approved reviews.

## References

- [Change Request](./25-mini-project-change-request.md)
- [Corrected Blueprint](./02-canonical-schema.md)
- [Correction Validation](./28-correction-validation.md)
- [Freeze Standard](../../docs/standards/governance/05-freeze-standard.md)
