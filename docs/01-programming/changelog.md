---
document_type: "supporting-document"
supporting_document_id: "V01-SD-IDX-003"
supporting_document_type: "Index"
title: "Volume 01 Changelog"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Release Manager"
source_ids:
  - "V01-BP01"
  - "V01-MF001"
derived_from: []
---

# Volume 01 Changelog

## Purpose

This document records versioned, user-impacting and governance-significant
changes to Volume 01 without becoming a second curriculum source of truth.

## Scope

It covers Volume 01 architecture, content and release changes. Detailed
curriculum meaning remains authoritative in the Blueprint, maps and registries
linked by the manifest.

## Ownership

- **Authority:** Authoritative only for the Volume 01 change history.
- **Owner Role:** Release Manager.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Stable entries are append-only.

## Content

### 2026-07-18 — Blueprint Freeze Candidate

#### Added

- Canonical Volume Blueprint freeze manifest `V01-MF001`.
- Required release coordination and changelog records.

#### Changed

- Chapter Map relationships now expose canonical prerequisite, Lab,
  Assessment, Project/Capstone and next Chapter IDs.
- Module Map and Dependency Map now expose canonical Module and Chapter IDs.
- Lab and Project index records now include canonical identity, outcome,
  difficulty, duration and relative navigation data.
- Markdown lint violations were corrected without changing curriculum meaning.

#### Governance

- Historical Changes Required reviews remain unchanged as decision evidence.
- New validation and re-review records are required before Blueprint Freeze.

## Validation

- Entries must identify a date and an observable change.
- No entry may redefine learning outcomes, dependencies or assessment meaning.
- Referenced IDs and relative links must resolve.

## References

- [Volume Blueprint](./volume-blueprint.md)
- [Blueprint Freeze Manifest](./manifest.md)
- [Release Candidate Record](./release.md)
- [Repository Standard v2.0](../standards/repository-standard-v2.md)
