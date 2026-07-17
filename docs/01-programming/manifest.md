---
document_type: "manifest"
manifest_id: "V01-MF001"
title: "Volume 01 Blueprint Freeze Manifest"
version: "1.0.0"
status: "Stable"
scope_id: "V01-BP01"
scope_version: "1.1.0"
generated_on: "2026-07-18"
artifact_count: 9
artifacts:
  - id: "V01-BP01"
    path: "volume-blueprint.md"
    version: "1.1.0"
    status: "Stable"
  - id: "V01-SD-CMAP-001"
    path: "chapter-map.md"
    version: "1.2.0"
    status: "Stable"
  - id: "V01-SD-MMAP-001"
    path: "module-map.md"
    version: "1.1.0"
    status: "Stable"
  - id: "V01-SD-DMAP-001"
    path: "dependency-map.md"
    version: "1.1.0"
    status: "Stable"
  - id: "V01-SD-LO-001"
    path: "learning-outcomes.md"
    version: "1.0.0"
    status: "Stable"
  - id: "V01-SD-ASMT-001"
    path: "assessment.md"
    version: "1.0.1"
    status: "Stable"
  - id: "V01-SD-LAB-001"
    path: "labs.md"
    version: "1.1.0"
    status: "Stable"
  - id: "V01-SD-PROJ-001"
    path: "projects.md"
    version: "1.1.0"
    status: "Stable"
  - id: "V01-SD-ROAD-001"
    path: "roadmap.md"
    version: "1.0.1"
    status: "Stable"
---

# Volume 01 Blueprint Freeze Manifest

## Purpose

This manifest fixes the canonical architecture artefacts proposed for the
`V01-BP01` Blueprint Freeze. It contains no lesson or assessment content.

## Scope

The scope is Volume 01 Blueprint `V01-BP01`, version `1.1.0`. Chapter bodies,
Lab bodies, assessment questions, projects, source code and later content
production artefacts are outside this manifest.

## Artifact Inventory

The Front Matter `artifacts` collection is authoritative for this manifest.
It contains nine canonical architecture artefacts and records the version and
intended Stable status of each freeze candidate.

## Integrity Rules

- Every path is relative to this file and must resolve inside
  `docs/01-programming/`.
- Every identity must match the identity declared by the target artefact.
- Every version and status must match the target after the approved freeze
  transition.
- Changes to an Active freeze require the canonical change request and
  unfreeze workflow.

## Validation

The manifest is eligible for `Stable` only after its nine paths, identities,
versions, statuses and artifact count pass validation and all four Blueprint
review gates are Approved.

## References

- [Volume Blueprint](./volume-blueprint.md)
- [Repository Standard v2.0](../standards/repository-standard-v2.md)
- [Volume Standard v2.0](../standards/volume-standard-v2.md)
- [Freeze Standard](../standards/governance/05-freeze-standard.md)
