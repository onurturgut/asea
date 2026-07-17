---
document_type: "standard"
standard_id: "ASEA-STD-GOV-MIGRATION-001"
title: "ASEA Migration Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Migration Standard v1.0

## Purpose

Bu standart, v1 → v2 ve gelecekteki repository/standard/content migrations için plan, uygulama, compatibility, deprecation ve kapanış kayıtlarını tanımlar.

## Scope

Metadata, schema, ID, path, heading, traceability, status, version, document type ve governance workflow migrations’ı kapsar. İçeriğin pedagojik anlamını değiştiren çalışma migration değil curriculum change’tir ve ayrı Decision Record gerektirir.

## Required Metadata

```yaml
---
document_type: "migration-record"
migration_record_id: "V01-MG-001-002-001"
title: "Volume 01 Standards v1 to v2 Migration"
version: "1.0.0"
status: "Draft"
migration_state: "Planned"
scope_id: "V01"
source_version: "1.0.0"
target_version: "2.0.0"
owner_role: "Repository Governance Engineer"
compatibility_report_id: "V01-SD-COMP-001"
review_ids: []
---
```

## Document Type

`document_type: migration-record`. `migration_state`: `Planned`, `In Progress`, `Validating`, `Completed`, `Rolled Back`, `Superseded`. Compatibility Report, Supporting Document Standard’daki `Compatibility Report` profilini kullanır.

## ID Convention

Biçim: `{SCOPE}-MG-{SOURCE_MAJOR}-{TARGET_MAJOR}-{NNN}`. Örnek: `V01-MG-001-002-001`. Aynı major geçişindeki ayrı migration waves farklı sıra alır.

## Status Lifecycle

Belge status’u ortak yaşam döngüsünü; migration_state operasyonel ilerlemeyi gösterir:

```text
Planned -> In Progress -> Validating -> Completed
                    └-> Rolled Back
Completed -> Superseded
```

Completed yalnız passing Validation Report ve Approved Repository Review ile mümkündür.

## Versioning Rules

- Migration record’ın kendi SemVer’i, plan sözleşmesini sürümler.
- Source/target versions ayrı alanlardır.
- Kapsam veya dönüşüm kuralı değişikliği MINOR/MAJOR; açıklama düzeltmesi PATCH’tir.
- Completed record immutable’dır; ek wave yeni ID alır.

## Required Sections

1. `Migration Purpose`
2. `Scope and Inventory`
3. `Source Contract`
4. `Target Contract`
5. `Field and ID Mapping`
6. `File Operations`
7. `Compatibility Strategy`
8. `Deprecation Plan`
9. `Validation Plan`
10. `Rollback Plan`
11. `Results`
12. `References`

## Validation Rules

- Pre-migration inventory ve checksums kaydedilir.
- Eski/yeni alanlar aynı Front Matter’da karıştırılmaz.
- Rename ve içerik anlam değişikliği aynı operation olarak gizlenmez.
- ID mapping total ve one-to-one/explicit split/merge olarak sınıflandırılmıştır.
- Broken link, orphan ID ve duplicate authority bırakılmaz.
- Deprecated artefact successor ve removal condition taşır.
- Rollback, source artefact’ı geri yükleyebilmelidir.
- Compatibility Report breaking/backward-compatible değişiklikleri ayrı listeler.

## Examples

| Source | Target | Rule |
|---|---|---|
| `LO-01` | `V01-LO001` | One-to-one canonical ID migration |
| `level: Beginner` | `level_start`, `level_target` | Semantic field split |
| Unregistered supporting file | `supporting-document` | Governance Extension schema adoption |

## DoD (Definition of Done)

- Inventory ve mapping eksiksizdir.
- Target schema validation geçmiştir.
- Legacy active relation kalmamıştır.
- Compatibility ve deprecation kayıtları tamamdır.
- Rollback prova edilmiş veya gerekçeli olarak doğrulanmıştır.
- Validation Report pass ve Repository Review Approved’dır.
- Migration state `Completed` olarak kaydedilmiştir.

## References

- [Migration Guide v1 to v2](../migration-guide-v1-to-v2.md)
- [Supporting Document Standard](./01-supporting-document-standard.md)
- [Validation Standard](./08-validation-standard.md)
