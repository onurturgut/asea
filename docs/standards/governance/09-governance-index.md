---
document_type: "standard"
standard_id: "ASEA-STD-GOV-INDEX-001"
title: "ASEA Governance Extension Index v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Governance Extension Index v1.0

## Purpose

Bu indeks, ASEA Standards v2’yi değiştirmeden tamamlayan Governance Extension paketinin registry, kapsam, öncelik ve kullanım akışını tanımlar.

## Scope

Paket yalnız governance belge türlerini ve süreçlerini kapsar. Repository, Curriculum, Volume ve Chapter Standards v2’nin eğitim, yapı ve ortak metadata kararları aynen korunur. Bu paket Standards v3 değildir.

## Required Metadata

Governance standard belgeleri Repository Standard v2 `standard` şemasını kullanır. Extension tarafından tanımlanan managed document types:

| Document Type | Identity field | Owner standard |
|---|---|---|
| `supporting-document` | `supporting_document_id` | Supporting Document Standard |
| `review` + `review_domain` | `review_id` | Review Standard |
| `decision-record` | `decision_id` | Decision Record Standard |
| `freeze-record` | `freeze_id` | Freeze Standard |
| `migration-record` | `migration_record_id` | Migration Standard |
| `audit` | `audit_id` | Audit Standard |
| `validation-report` | `validation_report_id` | Validation Standard |

Traceability registry, `supporting-document` türünün `Assessment Plan` profilidir.

## Document Type

Bu indeks `document_type: standard` kullanır. Governance Extension yeni türleri kaydeder ancak Standards v2’de zaten tanımlı Volume, Blueprint, Chapter, Lab, Quiz, Challenge, Exercise, Interview, Project, Assessment, Review, Release ve Manifest şemalarını yeniden tanımlamaz.

## ID Convention

Governance standard ID biçimi: `ASEA-STD-GOV-{DOMAIN}-{MAJOR}`. Managed record ID’leri ilgili standardında tanımlanır. Tüm ID’ler büyük harfli ASCII, scope-aware, immutable ve repository genelinde benzersizdir.

## Status Lifecycle

Governance belgeleri Standards v2 ortak yaşam döngüsünü kullanır: `Draft → Review → Stable → Deprecated → Archived`. Türe özgü operational state alanları (`decision_status`, `freeze_state`, `migration_state`, `result`) ortak `status` yerine geçmez.

## Versioning Rules

- Governance Extension kendi `1.x` sürümünü kullanır; bu Standards v2’nin major sürümünü değiştirmez.
- Yeni geriye uyumlu governance type/profile MINOR’dır.
- Mevcut schema’yı kıran değişiklik Governance Extension MAJOR sürümüdür; Standards v3 anlamına gelmez.
- Typo/link/açıklama düzeltmesi PATCH’tir.
- Her standardın Front Matter version’ı kanonik tam SemVer’dir.

## Required Sections

### Standards Registry

| Order | Standard | Governing responsibility |
|---:|---|---|
| 01 | [Supporting Document Standard](./01-supporting-document-standard.md) | Required Volume support files and indexes |
| 02 | [Review Standard](./02-review-standard.md) | Review domain, gates, findings and decisions |
| 03 | [Traceability Standard](./03-traceability-standard.md) | Single authoritative outcome relationship registry |
| 04 | [Decision Record Standard](./04-decision-record-standard.md) | ADR-style immutable decisions |
| 05 | [Freeze Standard](./05-freeze-standard.md) | Freeze types, unfreeze and content authorization |
| 06 | [Migration Standard](./06-migration-standard.md) | Version migration and compatibility evidence |
| 07 | [Audit Standard](./07-audit-standard.md) | Independent audit contracts |
| 08 | [Validation Standard](./08-validation-standard.md) | Machine/human validation reports and gates |
| 09 | Governance Index | Registry, precedence and usage |

### Integration with Standards v2

| Core standard | Continues to own | Governance Extension adds |
|---|---|---|
| [Repository Standard v2](../repository-standard-v2.md) | Common metadata, naming, status, SemVer, core IDs, Review/Release/Manifest | Missing governance document identities and validation report contract |
| [Curriculum Standard v2](../curriculum-standard-v2.md) | Learning progression, outcome meaning, assessment relationships | Canonical/derived traceability ownership and audit evidence |
| [Volume Standard v2](../volume-standard-v2.md) | Volume packaging, Blueprint, Capstone, Volume DoD | Supporting-file schemas and formal freeze record |
| [Chapter Standard v2](../chapter-standard-v2.md) | Chapter schema, 15 H2 structure, Chapter review gate | Content/Chapter audit and validation evidence |

### Precedence

1. Repository Standard v2 common constraints always apply.
2. Curriculum, Volume ve Chapter Standards kendi semantic/type alanlarında otoritedir.
3. Governance Extension yalnız önceden tanımsız governance/supporting alanlarını tamamlar.
4. Extension, core standard kuralını zayıflatamaz.
5. Traceability için Curriculum Standard’daki `assessment.md` authority korunur; ayrı matrix’ler derived’dır.
6. Doğrudan çelişki bulunursa core Standards v2 uygulanır ve Governance Decision Record açılır.

### Required Governance Flow

```text
Decision / Blueprint
  -> Authoritative supporting documents
  -> Traceability registry
  -> Validation Report
  -> Audit (when required)
  -> Technical / Content / Repository / Final Reviews
  -> Freeze Record
  -> Authorized production or release
```

## Validation Rules

- Dokuz dosya registry’deki exact lowercase kebab-case adlarıyla bulunmalıdır.
- Her dosya `standard` Front Matter’ı, benzersiz standard ID ve SemVer taşır.
- Her governance document type yalnız tek owner standard tarafından tanımlanır.
- Relative links çözülür ve circular authority oluşmaz.
- Core Standards v2 enum/ID/status alanları değiştirilmez.
- Traceability, freeze ve review approval zinciri machine-readable ID’lerle kurulabilir olmalıdır.
- Hiçbir governance standard eğitim içeriği, Chapter count veya outcome anlamı üretmez.

## Examples

### Blueprint Freeze Usage

1. Volume support files Supporting Document schema’ya migrate edilir.
2. `assessment.md` authoritative traceability registry olarak doğrulanır.
3. Validation Report `Pass` olur.
4. Gerekli Review kayıtları `Approved` olur.
5. Freeze Record `freeze_state: Active` ve `content_authorization: Authorized` ile oluşturulur.
6. Ancak bundan sonra scope için Chapter content production başlayabilir.

### Derived Traceability Usage

Website veya `traceability-matrix.md`, authoritative `assessment.md` source ID/version’ını kaydeder. Kaynak değiştiğinde derived görünüm yeniden üretilene kadar Stable sayılmaz.

## DoD (Definition of Done)

- Dokuz standardın tamamı mevcut ve registry’ye bağlıdır.
- Belge türü sahiplikleri tekildir.
- Metadata, ID, lifecycle, version, sections, validation, examples ve DoD her standardda tanımlıdır.
- Bütün internal relative links çözülür.
- Core Standards v2 ile çelişki yoktur.
- Governance akışı Review ve Freeze kararını kanıtla üretebilir.

## References

- [Standards Index v2.0](../standards-index-v2.md)
- [Repository Standard v2.0](../repository-standard-v2.md)
- [Curriculum Standard v2.0](../curriculum-standard-v2.md)
- [Volume Standard v2.0](../volume-standard-v2.md)
- [Chapter Standard v2.0](../chapter-standard-v2.md)
- [Migration Guide v1 to v2](../migration-guide-v1-to-v2.md)
