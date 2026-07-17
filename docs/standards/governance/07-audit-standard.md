---
document_type: "standard"
standard_id: "ASEA-STD-GOV-AUDIT-001"
title: "ASEA Audit Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Audit Standard v1.0

## Purpose

Bu standart, repository, curriculum, quality, validation ve governance audits için bağımsız kapsam, kanıt, finding ve remediation sözleşmesini tanımlar.

## Scope

`Repository`, `Curriculum`, `Quality`, `Validation` ve `Governance` audit türlerini kapsar. Audit mevcut durumu ölçer; içeriği veya standardı kendiliğinden değiştirmez.

## Required Metadata

```yaml
---
document_type: "audit"
audit_id: "V01-AU-GOV-001"
title: "Volume 01 Governance Audit"
version: "1.0.0"
status: "Stable"
audit_type: "Governance"
scope_id: "V01"
scope_version: "1.0.0"
audited_on: "2026-07-17"
auditor_roles:
  - "Governance Auditor"
finding_count: 0
validation_report_ids:
  - "V01-VR001"
review_ids:
  - "V01-RV001"
---
```

## Document Type

`document_type: audit`. `audit_type`: `Repository`, `Curriculum`, `Quality`, `Validation`, `Governance`.

## ID Convention

Biçim: `{SCOPE}-AU-{TYPE}-{NNN}`. TYPE: `REP`, `CUR`, `QLT`, `VAL`, `GOV`. Repository scope örneği: `ASEA-AU-REP-001`.

## Status Lifecycle

Belge `Draft → Review → Stable → Deprecated → Archived`. Audit execution: `Planned → Evidence Collection → Analysis → Reported → Closed`. Execution state body’de tutulur; ortak status yerine kullanılmaz.

## Versioning Rules

- Her audit cycle yeni ID alır.
- Closed audit immutable’dır.
- Kanıt linki/yazım düzeltmesi PATCH; finding severity değişikliği yeni audit veya review gerektirir.
- Audit criteria değişikliği standard/review version’ına bağlanır.

## Required Sections

1. `Audit Objective`
2. `Scope`
3. `Criteria`
4. `Evidence Sources`
5. `Method`
6. `Findings`
7. `Risk Summary`
8. `Required Actions`
9. `Limitations`
10. `Conclusion`
11. `References`

## Validation Rules

- Scope ve criteria audit başlamadan sabitlenir.
- Evidence source path, ID ve version ile tanımlanır.
- Her finding ID, severity, evidence, impact, owner, due gate ve status taşır.
- Auditor gözlem ile yorumu ayırır.
- Sampling kullanıldıysa population, sample ve limitation açıklanır.
- Critical/Major finding kapanmadan “no material issue” sonucu verilemez.
- Remediation ayrı changeset ve Review ile uygulanır.

## Examples

| Audit Type | Primary criteria | Typical evidence |
|---|---|---|
| Repository | Naming, metadata, links, IDs | File inventory, validation report |
| Curriculum | Progression, outcomes, assessment | Maps, registry, traceability |
| Quality | Correctness, clarity, maintainability | Reviews, tests, rubrics |
| Validation | Validator coverage and repeatability | Commands, logs, fixtures |
| Governance | Decision, review, freeze, migration | Governance records |

## DoD (Definition of Done)

- Scope, criteria ve version sabittir.
- Evidence listesi yeniden üretilebilirdir.
- Bulgular sayılmış ve sınıflandırılmıştır.
- Risk/limitation açıkça yazılmıştır.
- Required actions owner ve gate taşır.
- Audit Review tamamlanmış ve karar kaydedilmiştir.

## References

- [Review Standard](./02-review-standard.md)
- [Validation Standard](./08-validation-standard.md)
- [Governance Index](./09-governance-index.md)
