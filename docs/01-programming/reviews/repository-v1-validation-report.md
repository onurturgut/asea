---
document_type: "validation-report"
validation_report_id: "ASEA-VR001"
title: "ASEA Repository 1.0.0-rc.1 Validation Report"
version: "1.0.0"
status: "Stable"
validation_type: "Repository"
scope_id: "ASEA"
scope_version: "1.0.0-rc.1"
validated_on: "2026-07-17"
validator_version: "1.0.0"
result: "Fail"
check_count: 22
failure_count: 7
warning_count: 1
evidence_paths:
  - "../assessment.md"
  - "../traceability-matrix.md"
  - "../chapter-blueprints/README.md"
  - "../../../website/package.json"
---

# ASEA Repository 1.0.0-rc.1 Validation Report

## Validation Scope

The validation covers repository governance metadata, Volume 01 Blueprint architecture, supporting documents, canonical traceability, decision records, review history, required Volume structure, relative links, canonical IDs, SemVer, status, freeze eligibility, and website verification.

## Validator Environment

- **Operating system:** Windows
- **Shell:** PowerShell
- **Repository scope:** ASEA working tree
- **Validation Standard:** `ASEA-STD-GOV-VALIDATION-001` version `1.0.0`
- **Validation date:** 2026-07-17
- **Website commands:** `npm run lint`, `npm run typecheck`, `npm run build`

## Checks Executed

| Check ID | Check | Result | Severity | Evidence |
|---|---|---|---|---|
| VAL-INV-001 | Required Volume directories | fail | Critical | chapters, labs, projects, assessments, references, assets absent |
| VAL-INV-002 | Required Volume release files | fail | Critical | manifest.md, release.md, changelog.md absent |
| VAL-CONTENT-001 | Produced Chapter/practice/project artefacts | fail | Critical | 28 Blueprints exist; produced artefacts do not |
| VAL-META-001 | Supporting-document metadata | pass | — | 12 documents, 12 unique supporting IDs |
| VAL-META-002 | Volume and Blueprint metadata | pass | — | v2 schemas present |
| VAL-ID-001 | Duplicate document identities | pass | — | 0 duplicates |
| VAL-ID-002 | Canonical Learning Outcome IDs | pass | — | V01-LO001–V01-LO046 |
| VAL-LINK-001 | Relative links | pass | — | 622 targets resolved |
| VAL-HYG-001 | Unfinished/filler markers | pass | — | 0 active markers |
| VAL-VER-001 | SemVer syntax | pass | — | managed records parse as SemVer |
| VAL-STATUS-001 | Freeze-ready lifecycle states | fail | Major | supporting documents and decision log remain Review/Proposed |
| VAL-DEP-001 | Prerequisite graph | pass | — | 28 Blueprint mappings match dependency map |
| VAL-TRACE-001 | Canonical traceability registry | pass | — | 46 unique authoritative rows in assessment.md |
| VAL-TRACE-002 | Derived traceability equivalence | pass | — | 46 derived IDs equal canonical IDs |
| VAL-DEC-001 | Decision-record structure | pass | — | 15 ADR-style records plus log identity |
| VAL-DEC-002 | Decision approval | fail | Major | decision_status Proposed; no Approved governance review |
| VAL-REVIEW-001 | Blocking review findings | fail | Critical | prior V01-RV001 decision is Changes Required |
| VAL-REPO-001 | Repository-wide governance metadata | fail | Major | 7 non-standard Markdown/MDX files lack Front Matter |
| VAL-LEGACY-001 | Active legacy IDs | pass | — | legacy IDs occur only in migration/historical evidence |
| VAL-WEB-001 | Website lint | pass | — | npm run lint exited 0 |
| VAL-WEB-002 | Website typecheck | pass | — | npm run typecheck exited 0 |
| VAL-WEB-003 | Website production build | pass | — | Next.js build and Pagefind indexing exited 0 |

## Results Summary

- **Pass:** 15
- **Fail:** 7
- **Warnings:** 1
- **Overall result:** Fail
- **Blueprint count:** 28
- **Canonical outcome count:** 46
- **Supporting-document count:** 12
- **Duplicate document IDs:** 0
- **Broken relative links:** 0

## Failures

### VAL-INV-001 — Required Volume directories are absent

Volume Standard v2 requires `chapters/`, `labs/`, `projects/`, `assessments/`, `references/`, and `assets/`. Empty or misleading directories were not created because educational production is outside this task.

### VAL-INV-002 — Release files are absent

`manifest.md`, `release.md`, and `changelog.md` do not exist. They cannot be truthfully generated before the release scope and artefact manifest are complete.

### VAL-CONTENT-001 — Volume Definition of Done is not satisfied

The repository contains plans and Blueprints, not the produced Chapter, Lab, Assessment, Project, and Capstone artefacts required for a Stable Volume.

### VAL-STATUS-001 and VAL-DEC-002 — Governance records are not approved

Migrated supporting documents are in Review and decision records are Proposed. Stable/Accepted would require successful reviews that the current repository state cannot support for a repository release.

### VAL-REVIEW-001 — Existing blocking decision remains

`V01-RV001` records Changes Required. This validation report does not overwrite an immutable historical decision.

### VAL-REPO-001 — Repository-wide metadata coverage is incomplete

Root governance documents, website README, and Volume 00 README include seven files without registered governance Front Matter. Objective restrictions limited migration work to Volume 01 and prohibited repository redesign.

## Warnings

Historical and explicit migration sections retain legacy identifiers for auditability. They are not active relationship keys.

## Evidence

- [Canonical Assessment and Traceability Registry](../assessment.md)
- [Derived Traceability Matrix](../traceability-matrix.md)
- [Volume Blueprint](../volume-blueprint.md)
- [Chapter Blueprint Index](../chapter-blueprints/README.md)
- [Decision Log](../blueprint-decisions.md)
- [Previous Blueprint Review](./blueprint-review-v2.md)

## Reproduction

```powershell
npm run lint
npm run typecheck
npm run build
```

Repository checks additionally enumerate managed Markdown, parse Front Matter identities, compare canonical/derived outcome rows, resolve relative links, detect duplicate IDs, and inspect required Volume paths.

## Conclusion

Validation failed with seven blocking checks. Blueprint Freeze, Repository Freeze, and Repository 1.0 Release Candidate authorization are not permitted from this result.

## References

- [Validation Standard](../../standards/governance/08-validation-standard.md)
- [Freeze Standard](../../standards/governance/05-freeze-standard.md)
- [Volume Standard v2.0](../../standards/volume-standard-v2.md)
- [Repository Standard v2.0](../../standards/repository-standard-v2.md)
