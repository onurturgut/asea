---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-RVIDX-002"
supporting_document_type: "Review Index"
title: "V01-C02 Independent Review Submission Index"
version: "0.1.2"
status: "Draft"
scope_id: "V01-C02"
authority: "Informational"
owner_role: "Repository Reviewer"
source_ids:
  - "V01-C02"
  - "V01-C02-BP01"
  - "V01-C02-CPP-001"
  - "V01-C02-VR001"
derived_from:
  - "../../content/v01-c02/review-readiness-plan.md"
  - "../../content/v01-c02/educational-quality-assurance.md"
---

# V01-C02 Independent Review Submission Index

## Purpose

This index provides the controlled handoff package for independent review of
the V01-C02 reference Chapter. It identifies the exact review scope, input
versions, review sequence, evidence requirements, and decision-record paths.

It does not contain or imply a completed review decision.

## Scope

The submission covers the learner-facing Chapter, its learning materials,
assessment assets, research synthesis, production packet, automated validation
evidence, and repository integration.

The submission excludes future website implementation, final SVG assets,
animation, and completed student-pilot evidence.

## Ownership

- Submission coordinator: Repository Reviewer
- Technical review owner: Subject-Matter Reviewer
- Pedagogical review owner: Pedagogical Reviewer
- Assessment review owner: Assessment Reviewer
- Accessibility review owner: Accessibility Reviewer
- Final decision owner: independent Final Reviewer
- Current human assignment state: Not assigned

No author may independently approve their own work at the Final gate.

## Content

### Locked submission inputs

| Input | Identity and Version | Location |
| --- | --- | --- |
| Learner-facing Chapter | `V01-C02@0.2.2` | [Main Chapter](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md) |
| Chapter Blueprint | `V01-C02-BP01@0.1.2` | [Chapter Blueprint](../../../chapter-blueprints/02-how-computers-execute-programs.md) |
| Chapter materials | 21 Markdown files | [Chapter Index](../../content/v01-c02/chapter.md) |
| Production packet | `V01-C02-CPP-001@1.0.1` | [Production Packet](../../../../../knowledge/production-packets/v01-c02-cpp-001.json) |
| EQA report | `V01-C02-SD-COMP-023@0.2.2` | [EQA Report](../../content/v01-c02/educational-quality-assurance.md) |
| Traceability validation | `V01-C02-VR001@0.1.0` | [Validation Report](../../../../../knowledge/reviews/v01-c02-lo-traceability-validation-report.md) |
| Review contract | `V01-C02-SD-RVIDX-001@0.1.2` | [Review Readiness Plan](../../content/v01-c02/review-readiness-plan.md) |
| Pilot contract | `V01-C02-SD-STUDY-004@0.1.1` | [Student Pilot Protocol](../../content/v01-c02/student-pilot-protocol.md) |

### Review execution order

| Order | Planned Review ID | Gate | Required independent role |
| ---: | --- | --- | --- |
| 1 | `V01-RV040` | Validation | Repository Reviewer |
| 2 | `V01-RV041` | Technical Content | Subject-Matter Reviewer |
| 3 | `V01-RV042` | Pedagogical Content | Pedagogical Reviewer |
| 4 | `V01-RV043` | Assessment Content | Assessment Reviewer |
| 5 | `V01-RV044` | Assessment Technical | Subject-Matter Reviewer |
| 6 | `V01-RV045` | Accessibility Content | Accessibility Reviewer |
| 7 | `V01-RV046` | Repository Content | Repository Reviewer |
| 8 | `V01-RV047` | Final Content | Final Reviewer |

Before creating each record, its planned ID must be checked again for
repository-wide uniqueness.

### Required reviewer evidence

Every reviewer must provide:

1. the reviewed scope and exact versions;
2. the reproducible validation method;
3. findings with severity, evidence, impact, owner, and required resolution;
4. one permitted decision: `Approved`, `Changes Required`, or `Rejected`;
5. an accurate list of files changed during remediation, or an explicit empty
   list when no files changed;
6. references to `V01-C02-VR001` and the applicable ASEA standard.

### Decision handling

- `Approved`: continue to the next review gate.
- `Changes Required`: return the Chapter to remediation, validate the change,
  and create a new review record for the new scope version.
- `Rejected`: stop the reference-model approval and document the required
  redesign without starting the student pilot.
- Open `Critical` or `Major` findings prohibit approval.

### Student-pilot entry gate

The student pilot may begin only after the technical, pedagogical, assessment,
accessibility, and repository reviews have recorded acceptable decisions and
all blocking findings are closed. Pilot evidence must come from real beginner
participants and cannot be synthesized as a substitute.

## Validation

- The package references one canonical Chapter and does not create a second
  curriculum authority.
- All input paths are relative and resolve inside the repository.
- Input versions match the current review-ready C02 package.
- Planned review types and domains use the existing Review Standard enums.
- No review decision, reviewer identity, or student result has been fabricated.
- Website implementation remains outside the current review scope.

## References

- [ASEA Review Standard](../../../../standards/governance/02-review-standard.md)
- [ASEA Validation Standard](../../../../standards/governance/08-validation-standard.md)
- [ASEA Chapter Standard v2](../../../../standards/chapter-standard-v2.md)
- [Future Work Register](../../content/v01-c02/sonrasinda-yapilacaklar.txt)
