---
document_type: "standard"
standard_id: "ASEA-STD-GOV-TRACEABILITY-001"
title: "ASEA Traceability Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Traceability Standard v1.0

## Purpose

Bu standart, outcome’dan Capstone’a uzanan ilişkiler için tek source of truth, yön, minimum kapsama ve derived görünüm kurallarını tanımlar.

## Scope

Learning Outcome, Module, Chapter, Lab, Exercise, Challenge, Quiz/Interview, Assessment, Project ve Capstone ilişkilerini kapsar. Pedagojik anlam Curriculum Standard v2’ye, artefact şemaları kendi Standards v2 sahiplerine aittir.

## Required Metadata

Kanonik registry, Supporting Document Standard içindeki `Assessment Plan` profilini kullanır:

```yaml
---
document_type: "supporting-document"
supporting_document_id: "V01-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "Volume 01 Assessment and Traceability Plan"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Assessment Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---
```

Derived matrix aynı schema ile `supporting_document_type: Index`, `authority: Derived` ve dolu `derived_from` kullanır.

## Document Type

Tek kanonik source of truth, Volume kökündeki `assessment.md` dosyasının `Traceability` bölümüdür. Bu karar Curriculum Standard v2 §5.3’ü korur.

`traceability-matrix.md`, website görünümü, dashboard, manifest özeti ve Chapter-local tablolar derived’dır. Derived belge elle yeni ilişki tanımlayamaz; yalnızca `assessment.md` ve bağlı artefact metadata’sından üretilir.

## ID Convention

- Kanonik assessment plan: `{SCOPE}-SD-ASMT-{NNN}`.
- Derived traceability index: `{SCOPE}-SD-IDX-{NNN}`.
- İlişki satırı ayrı global ID üretmez; kanonik Learning Outcome ID satır anahtarıdır.
- İlişki hedefleri Repository Standard v2’deki mevcut ID’leri kullanır.

## Status Lifecycle

Registry `Draft → Review → Stable → Deprecated → Archived` yaşam döngüsünü izler. Derived matrix kaynak registry’nin status ve version’ını kaydeder; kaynak değişince derived görünüm `Draft` sayılır ve yeniden üretilmeden Stable olamaz.

## Versioning Rules

- Outcome anlamı, zorunlu assessment veya prerequisite ilişkisindeki uyumsuz değişiklik MAJOR’dır.
- Geriye uyumlu ek evidence ilişkisi MINOR’dır.
- Link, açıklama veya derived render düzeltmesi PATCH’tir.
- Derived belge version’ı bağımsız olabilir ancak `source_version` kaydı zorunludur.
- Satırların sırası ID sırasıdır; reorder version gerekmez.

## Required Sections

Kanonik `assessment.md`:

1. `Purpose`
2. `Assessment Strategy`
3. `Scoring Model`
4. `Passing Criteria`
5. `Feedback and Retry`
6. `Traceability`
7. `Validation`
8. `References`

`Traceability` tablosu en az şu kolonları taşır: Outcome ID, Module ID, Chapter ID, Lab ID, Exercise ID, Challenge ID, Assessment ID, Project ID, Capstone relation, prerequisite outcomes ve coverage status.

## Validation Rules

```text
Learning Outcome
  -> Module
  -> Chapter
  -> Lab / Exercise / Challenge
  -> Assessment instruments
  -> Mini Project
  -> Capstone
```

- Her outcome en az bir Chapter ve Assessment’a bağlıdır.
- `Apply` ve üzeri outcome en az bir uygulamalı evidence’a bağlıdır.
- Her Chapter/Lab/Exercise/Challenge/Assessment/Project en az bir outcome’a geri bağlanır.
- İlişkiler karşı artefact metadata’sıyla iki yönlü uyumludur.
- Prerequisite outcome grafiği döngüsüzdür.
- Planlanmış fakat üretilmemiş hedefler `Planned`; mevcut ve doğrulanmış hedefler `Verified` işaretlenir.
- Duplicate veya orphan outcome Stable’ı engeller.
- Derived ve authoritative satırlar farklı sonuç verirse authoritative registry esas alınır ve derived belge validation fail olur.

## Examples

| Outcome ID | Module | Chapter | Practice | Assessment | Project | Capstone | Coverage |
|---|---|---|---|---|---|---|---|
| `V01-LO001` | `V01-M01` | `V01-C01` | `V01-C01-L01` | `V01-C01-AS01` | `V01-P01` | Indirect | Planned |

Bu örnek ilişki biçimini gösterir; gerçek Volume registry’sinin yerine geçmez.

## DoD (Definition of Done)

- Tek authoritative `assessment.md` tanımlıdır.
- Outcome sayısı registry ve Volume metadata ile eşleşir.
- Orphan/duplicate ilişki yoktur.
- Prerequisite graph acyclic’tir.
- Applied outcome’larda practice evidence vardır.
- Derived görünümler source ID/version kaydeder ve authoritative veriyle aynıdır.
- Traceability Validation Report ve Assessment Review `Approved` olmuştur.

## References

- [Curriculum Standard v2.0](../curriculum-standard-v2.md)
- [Supporting Document Standard](./01-supporting-document-standard.md)
- [Validation Standard](./08-validation-standard.md)
