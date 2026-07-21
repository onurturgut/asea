---
document_type: "manifest"
manifest_id: "V01-MF005"
title: "Programming Fundamentals Academy Approval Manifest"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
scope_version: "0.1.1"
generated_on: "2026-07-21"
artifact_count: 14
artifacts:
  - id: "V01-SD-IDX-006"
    path: "./01-academy-overview.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "d7858182029906221107f7fc334cb58a43b66f96eacb66b1981780b8e6334b8e"
  - id: "V01-SD-STUDY-003"
    path: "./02-learning-path.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "eafd6a9a09fab05dabebcd43fb57480b7abb6ca61e004567e914fb8b53b105ac"
  - id: "V01-SD-MMAP-003"
    path: "./03-module-registry.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "aade7c688ac4b9aaa8da440cb9df50eeb94300b1a2f977414cbd0565b902d14b"
  - id: "V01-SD-CMAP-003"
    path: "./04-chapter-registry.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "b8491a73e914a61db7cbd0230a11f997ed2ddd677f9deafead2353a57d2eb140"
  - id: "V01-SD-IDX-007"
    path: "./05-lesson-registry.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "f917525fb31d44db4e4d1e34ee37d6ac35a202598f620ed48c490a2efafdbccb"
  - id: "V01-SD-LO-003"
    path: "./06-learning-outcomes.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "4f7c72c1787f47bd57c5ae0570852dd336101dbf8522d81a72e62f1812cc16fa"
  - id: "V01-SD-DMAP-003"
    path: "./07-dependency-map.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "5382da771c93380ae316d5f26a381e8eda3612785a33ff3792647bdada93d9c7"
  - id: "V01-SD-DMAP-004"
    path: "./08-knowledge-graph.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "30dc347afff120827aa93912780f7cfdd0828b46848acc020b103bb3907c3f0b"
  - id: "V01-SD-IDX-008"
    path: "./09-competency-framework.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "253a68786a2ef32bd0fcea9ae03c405891687ee675494e28b96678382712d38e"
  - id: "V01-SD-ASMT-002"
    path: "./10-assessment-framework.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "ddba48e0d80451be9c0192c6472f1a7fd3b4e1e64ae314c147bffc98771fdde4"
  - id: "V01-SD-PROJ-002"
    path: "./11-project-framework.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "be645d73683565476f7985bb4783c464c4d72c523fb8b6fb47c8139d87e9be64"
  - id: "V01-SD-IDX-010"
    path: "./13-academy-statistics.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "47eab6ace30c6d55f725d8476befef099529ffe9d5db73e4e74521c6ed90cbec"
  - id: "V01-SD-ROAD-002"
    path: "./14-academy-roadmap.md"
    version: "0.1.1"
    status: "Draft"
    x-sha256: "da9dff0c5e749a149216537a217f618e1446c83c4c77a9fc0d051aeda0138ea0"
  - id: "V01-SD-STUDY-004"
    path: "./15-completion-requirements.md"
    version: "0.1.0"
    status: "Draft"
    x-sha256: "169d27cbbf7fced1cb08e48da73862ad1dcb8ada2f1811e47a988f791cb044d5"
x-authority: "Derived"
x-blueprint-id: "V01-BP01"
x-blueprint-version: "2.1.0"
x-blueprint-freeze-id: "V01-FR-BP-003"
x-approval-source: "V01-RV038"
x-freeze-scope: "Derived Academy approval package; no independent canonical authority"
x-supersedes-supporting-document-id: "V01-SD-IDX-009"
---

# Programming Fundamentals Academy Approval Manifest

## Purpose

Provide an immutable, checksum-pinned approval snapshot of the derived Academy
architecture for PHASE 06 Sprint 02B.

## Scope

The manifest contains the 14 Academy architecture artefacts other than the
manifest itself. It does not replace `V01-MF004`, change the 313 Blueprint
artefacts, or create an independent Academy freeze scope.

## Authority

- `V01-BP01@2.1.0` remains the single canonical curriculum authority.
- `V01-FR-BP-003` remains the active Blueprint Freeze.
- This manifest is Derived, Blueprint Controlled, and approval-scoped.
- `V01-MF004` remains the canonical Blueprint correction manifest.

## Integrity Contract

- Every artefact path is relative to this manifest.
- Every artefact records ID, version, lifecycle status, and SHA-256 checksum.
- `artifact_count` excludes this manifest to avoid a circular checksum.
- Any byte change to an artefact invalidates this immutable snapshot and
  requires a new manifest ID.
- Draft artefacts may be reviewed from this snapshot; a later Freeze Record
  may reference only the manifest that matches the finally approved bytes and
  lifecycle states.

## Compatibility

| Registry | Relationship |
| --- | --- |
| Blueprint Manifest `V01-MF004` | Canonical source manifest; unchanged |
| Blueprint `V01-BP01@2.1.0` | Curriculum source of truth |
| Active Freeze `V01-FR-BP-003` | Existing canonical freeze; unchanged |
| Academy approval manifest `V01-MF005` | Derived approval snapshot |
| Repository manifest `V01-MF001` | Existing Volume/repository release history; unchanged |

## Validation

- Manifest schema: conforming.
- Artefact records: 14.
- Duplicate artefact IDs: 0.
- Missing paths: 0.
- Missing versions/statuses/checksums: 0.
- Independent canonical authority introduced: no.

## References

- [Canonical Blueprint](../../../../governance/blueprint-v2/02-canonical-schema.md)
- [Blueprint Manifest](../../../../governance/blueprint-v2/31-correction-manifest.md)
- [Active Freeze](../../../../governance/blueprint-v2/29-blueprint-v2-refreeze.md)
- [Repository Standard v2](../../../standards/repository-standard-v2.md)
