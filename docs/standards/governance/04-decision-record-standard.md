---
document_type: "standard"
standard_id: "ASEA-STD-GOV-DECISION-001"
title: "ASEA Decision Record Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Decision Record Standard v1.0

## Purpose

Bu standart, repository, curriculum, Volume, Chapter ve governance kararlarını ADR benzeri, değişmez ve izlenebilir kayıtlarla yönetir.

## Scope

Birden fazla artefact’ı etkileyen mimari, müfredat, scope, ID, dependency, assessment, teknoloji sınırı ve governance kararlarını kapsar. Yerel yazım tercihleri Decision Record gerektirmez.

## Required Metadata

```yaml
---
document_type: "decision-record"
decision_id: "V01-ADR-001"
title: "Use Seven Modules in Volume 01"
version: "1.0.0"
status: "Stable"
decision_status: "Accepted"
scope_id: "V01"
decided_on: "2026-07-17"
owner_role: "Curriculum Architect"
review_ids:
  - "V01-RV001"
superseded_by: []
---
```

## Document Type

`document_type` değeri `decision-record`’dır. Bir dosya tek karar taşıyabilir veya `decision-log.md` aynı metadata altında bir karar koleksiyonu taşıyabilir; koleksiyondaki her karar ayrı benzersiz `decision_id` alır.

## ID Convention

- Repository kararı: `ASEA-ADR-{NNN}`.
- Volume kararı: `V{NN}-ADR-{NNN}`.
- Chapter kararı: `V{NN}-C{NN}-ADR-{NNN}`.
- ID değişmez ve supersede edilen kayıtta yeniden kullanılmaz.

## Status Lifecycle

Belge `status`: Standards v2 ortak yaşam döngüsü. Karar `decision_status`: `Proposed → Accepted → Deprecated → Superseded`; alternatif terminal değer `Rejected`’dır.

- Accepted karar sessizce düzenlenemez.
- Superseded karar `superseded_by` ile ardıl ID’ye bağlanır.
- Rejected karar tarihsel gerekçesiyle korunur.
- Belge Stable olsa bile kararın business status’u ayrı alanda tutulur.

## Versioning Rules

- Accepted kararın anlamı değiştirilmez; yeni karar önceki kaydı supersede eder.
- Karar öncesi Draft açıklama genişletmesi MINOR olabilir.
- Yazım/link düzeltmesi PATCH’tir.
- Decision schema değişikliği bu standardın MAJOR sürümünü gerektirir.

## Required Sections

1. `Decision ID`
2. `Context`
3. `Decision`
4. `Rationale`
5. `Alternatives Considered`
6. `Consequences`
7. `Status`
8. `Superseded By`
9. `Traceability`
10. `References`

Koleksiyon dosyasında bu alanlar her karar için H3 altında tekrarlanır.

## Validation Rules

- Decision ID benzersiz ve scope ile uyumludur.
- Context problem ve constraint’i; Decision seçimi; Rationale kanıtı açıklar.
- Alternatives en az bir gerçekçi seçenek ve reddetme gerekçesi taşır.
- Consequences olumlu/olumsuz maliyetleri ve downstream etkileri belirtir.
- Accepted karar en az bir Approved Review ID taşır.
- `Superseded` durumunda `superseded_by` tam bir ID içerir; diğer durumlarda boş olabilir.
- Breaking kararı etkileyen artefact listesi Traceability’de bulunur.

## Examples

```text
V01-ADR-001 Accepted
  ├── affects V01-BP01
  ├── affects V01-SD-MMAP-001
  └── approved by V01-RV001
```

Bu ilişki, kararın hangi scope ve review tarafından yönetildiğini gösterir.

## DoD (Definition of Done)

- Metadata ve ID geçerlidir.
- On zorunlu bölüm eksiksizdir.
- Alternatif ve consequence analizi somuttur.
- Traceability hedefleri çözülür.
- Accepted karar Approved review’a bağlıdır.
- Supersession zinciri döngüsüzdür.
- Link, Markdown ve schema validation geçmiştir.

## References

- [Repository Standard v2.0](../repository-standard-v2.md)
- [Review Standard](./02-review-standard.md)
- [Migration Standard](./06-migration-standard.md)
