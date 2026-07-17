---
document_type: "migration-record"
migration_record_id: "ASEA-MG-000-001-001"
title: "ASEA KOS Operational Store Introduction"
version: "1.0.0"
status: "Stable"
migration_state: "Completed"
scope_id: "ASEA"
source_version: "0.0.0"
target_version: "1.0.0"
owner_role: "Repository Governance Engineer"
compatibility_report_id: "ASEA-SD-COMP-001"
review_ids:
  - "ASEA-RV005"
---

# ASEA KOS Operational Store Introduction

## Migration Purpose

Introduce the governed KOS record store described by the KOS documentation without changing canonical educational paths, IDs, learning outcomes, or Standards v2.

## Scope and Inventory

The source repository contains KOS specifications but no operational source, evidence, claim, concept, graph-edge, research-brief, or production-packet registries. The target adds the `knowledge/` store, schemas, validator, and initial Chapter 01–02 records.

## Source Contract

Before this migration, source lists and chapter references were human-readable Markdown. They did not provide atomic IDs, evidence locators, scored claims, or machine-readable graph edges.

## Target Contract

The target uses KOS `1.0.0`, JSON Schema Draft 2020-12, immutable KOS IDs, individual JSON records, an authoritative manifest, and a deterministic local validator.

## Field and ID Mapping

| Source information | Target record | Rule |
|---|---|---|
| Reference URL | `ASEA-SRC-*` | One canonical source identity per original publisher |
| Source-supported statement | `ASEA-EV-*` | One located paraphrase per evidence unit |
| Material proposition | `ASEA-CLM-*` | Atomic claim with validation scores |
| Chapter concept | `ASEA-CON-*` | Reusable extraction record |
| Concept relation | `ASEA-EDGE-*` | Typed, directed edge |
| Chapter research scope | `ASEA-RB-*` | Versioned research brief |
| Production authorization | `V01-C*-CPP-*` | Chapter Production Packet |

Canonical `V01-*` learning-outcome, chapter, lab, assessment, and project IDs are referenced and not remapped.

## File Operations

The migration creates new files only under `knowledge/` and KOS review records under `docs/knowledge-operating-system/reviews/`. Existing standards, curriculum, blueprints, and educational content are not modified.

## Compatibility Strategy

The change is additive and backward-compatible. Existing Markdown remains readable. The `knowledge/` store becomes authoritative only for KOS atomic records; `docs/01-programming/assessment.md` remains authoritative for curriculum traceability.

## Deprecation Plan

No existing file is deprecated. Human-readable chapter reference lists remain informational views. Future generated views must pin their KOS registry and graph versions.

## Validation Plan

- Parse every JSON record and schema.
- Enforce ID uniqueness and filename ownership.
- Resolve source, evidence, claim, concept, and production-packet references.
- Detect prerequisite cycles.
- Verify canonical curriculum IDs against Volume 01 registries.
- Run Markdown link, metadata, and heading checks for new review documents.

## Rollback Plan

Before adoption, rollback consists of removing the additive `knowledge/` store and KOS review records. No existing canonical file requires restoration because this migration performs no modification or rename.

## Results

Migration completed after Validation Report `ASEA-VR003` passed and Repository Review `ASEA-RV005` approved the additive store. No canonical educational file or ID changed.

## References

- [Migration Standard](../../docs/standards/governance/06-migration-standard.md)
- [KOS Folder Structure](../../docs/knowledge-operating-system/16-folder-structure.md)
- [Knowledge Registry Index](../README.md)
