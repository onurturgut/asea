---
document_type: "standard"
standard_id: "ASEA-STD-GOV-FREEZE-001"
title: "ASEA Freeze Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Freeze Standard v1.0

## Purpose

Bu standart, Blueprint, Content, Volume ve Repository freeze kayıtlarını; approval koşullarını, değişiklik sınırlarını, unfreeze sürecini ve content authorization kararını tanımlar.

## Scope

- `Blueprint Freeze`: scope, ID, dependency, outcome ve planned assessment sözleşmesini sabitler.
- `Content Freeze`: review edilmiş learner-facing içeriği release adayı olarak sabitler.
- `Volume Freeze`: Volume paketini release öncesi değişikliklere kapatır.
- `Repository Freeze`: repository release kapsamını sabitler.

Freeze, Git branch korumasının yerine geçmez; governance kararıdır.

## Required Metadata

```yaml
---
document_type: "freeze-record"
freeze_id: "V01-FR-BP-001"
title: "Volume 01 Blueprint Freeze"
version: "1.0.0"
status: "Stable"
freeze_type: "Blueprint"
freeze_state: "Active"
scope_id: "V01-BP01"
scope_version: "1.0.0"
frozen_on: "2026-07-17"
review_ids:
  - "V01-RV001"
validation_report_ids:
  - "V01-VR001"
manifest_id: "V01-MF001"
content_authorization: "Authorized"
---
```

## Document Type

`document_type: freeze-record`. `freeze_type`: `Blueprint`, `Content`, `Volume`, `Repository`. `freeze_state`: `Active`, `Released`, `Superseded`. `content_authorization`: `Authorized`, `Not Authorized`, `Not Applicable`.

## ID Convention

Biçim: `{SCOPE}-FR-{TYPE}-{NNN}`.

- TYPE: `BP`, `CT`, `VOL`, `REP`.
- Örnek: `V01-FR-BP-001`, `V01-FR-CT-001`, `ASEA-FR-REP-001`.
- Unfreeze mevcut ID’yi silmez; yeni Freeze yeni sıra alır.

## Status Lifecycle

```text
Draft -> Review -> Stable/Active
Stable/Active -> Stable/Released
Released -> Superseded (new freeze record)
```

Common `status` belgenin olgunluğunu, `freeze_state` freeze’in operasyonel durumunu gösterir. Active freeze silinemez veya geriye dönük değiştirilemez.

## Versioning Rules

- Freeze record yayımlandığında değişmez.
- Typo bile yeni PATCH record veya açık errata kaydıyla düzeltilir; original evidence korunur.
- Scope değişikliği unfreeze + yeni Blueprint/Content version + yeni Freeze ID gerektirir.
- Freeze record version’ı scope version yerine kullanılamaz.

## Required Sections

1. `Freeze Summary`
2. `Frozen Scope`
3. `Frozen Files and Manifest`
4. `Counts and Coverage`
5. `Approval Evidence`
6. `Validation Result`
7. `Authorized Changes`
8. `Forbidden Changes`
9. `Change Request Process`
10. `Unfreeze Conditions`
11. `Content Production Authorization`
12. `References`

## Validation Rules

### Approval Requirements

- Blueprint Freeze: Approved Technical, Content, Repository ve Final Blueprint Review; passing Validation Report; complete traceability.
- Content Freeze: Approved Content, Technical ve Assessment Review; no open Critical/Major finding.
- Volume Freeze: Volume Standard v2 Definition of Done; Approved Final Review; complete manifest.
- Repository Freeze: all release scopes Stable; repository audit ve final validation Approved.

### Authorized Changes

Active freeze altında yalnızca typo, broken link, açıklama netleştirmesi ve anlamı değiştirmeyen metadata düzeltmesi yapılabilir. Her değişiklik PATCH ve review kaydı taşır.

### Forbidden Changes

Chapter/module count veya order, canonical IDs, outcome anlamı, prerequisite graph, temel assessment mapping, Project/Capstone scope, mandatory technology ve acceptance criteria değiştirilemez.

### Content Authorization

`content_authorization: Authorized` yalnızca Blueprint Freeze için bütün approval/validation kanıtları mevcutsa kullanılabilir. Exact authorization sentence:

> Volume scope Chapter content production may begin.

Scope adı gerçek kayıtta açık yazılmalıdır. Changes Required/Rejected review, failed validation veya eksik manifest authorization’ı yasaklar.

## Examples

| Freeze Type | Scope example | Authorization effect |
|---|---|---|
| Blueprint | `V01-BP01` | Chapter content production başlayabilir |
| Content | `V01` content candidate | Yalnız release düzeltmeleri yapılabilir |
| Volume | `V01` release candidate | Volume tag hazırlığı başlayabilir |
| Repository | ASEA release | Repository release yayımlanabilir |

## DoD (Definition of Done)

- Freeze metadata ve ID geçerlidir.
- Scope version ve immutable manifest eşleşir.
- Gerekli bütün review kararları Approved’dır.
- Validation Report pass’tir.
- Frozen counts gerçek dosya/ID sayılarıyla eşleşir.
- Authorized/forbidden change sınırları açıktır.
- Unfreeze owner, trigger ve workflow tanımlıdır.
- Content authorization koşullu ve kanıtlanmıştır.

## References

- [Volume Standard v2.0](../volume-standard-v2.md)
- [Review Standard](./02-review-standard.md)
- [Validation Standard](./08-validation-standard.md)
- [Audit Standard](./07-audit-standard.md)
