---
document_type: "standard"
standard_id: "ASEA-STD-GOV-REVIEW-001"
title: "ASEA Review Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Review Standard v1.0

## Purpose

Bu standart, Standards v2 Review şemasını değiştirmeden review kapsamlarını, sahipliği, approval kapılarını ve yaşam döngüsünü tamamlar.

## Scope

Blueprint Review, Content Review, Lab Review, Assessment Review, Volume Review, Repository Review, Governance Review ve Validation Report incelemelerini kapsar. Technical, Content, Repository ve Final gate’leri Repository Standard v2’deki `review_type` alanında korunur.

## Required Metadata

```yaml
---
document_type: "review"
review_id: "V01-RV001"
title: "Volume 01 Blueprint Final Review"
version: "1.0.0"
status: "Stable"
review_type: "Final"
review_domain: "Blueprint"
scope_id: "V01-BP01"
scope_version: "1.0.0"
reviewer_roles:
  - "Curriculum Architect"
decision: "Approved"
reviewed_on: "2026-07-17"
findings: 0
updated_files:
  - "../volume-blueprint.md"
---
```

`review_domain` bu extension’ın zorunlu ek alanıdır. Diğer alanlar Repository Standard v2 Review şemasıyla aynıdır.

## Document Type

`document_type: review` kullanılır. `review_type`: `Technical`, `Content`, `Repository` veya `Final`. `review_domain`: `Blueprint`, `Content`, `Lab`, `Assessment`, `Volume`, `Repository`, `Governance` veya `Validation`.

Validation Report kendi şemasına göre üretilir; bir review onu girdi olarak inceler ve `review_domain: Validation` kullanır.

## ID Convention

Review ID biçimi Repository Standard v2’ye göre `V{NN}-RV{NNN}` veya repository kapsamı için `ASEA-RV{NNN}`’dir. ID review türü değişse bile değişmez; farklı gate veya yeniden inceleme yeni ID alır.

## Status Lifecycle

Belge durumu: `Draft → Review → Stable → Deprecated → Archived`.

Review çalışma akışı:

```text
Prepared -> In Review -> Decision Recorded -> Closed
                         ├-> Approved
                         ├-> Changes Required
                         └-> Rejected
```

Front Matter `status`, belgenin olgunluğunu; `decision`, incelenen scope sonucunu ifade eder. İzin verilen decision değerleri yalnızca `Approved`, `Changes Required`, `Rejected`’dır. “Approved with Minor Changes” ayrı decision değildir; blocking olmayan bulgular açık owner ve due version ile kaydedilmişse `Approved` kullanılabilir.

## Versioning Rules

- Review kaydı ilk tamamlandığında `1.0.0` olabilir.
- Karar değiştirilemez; yeniden değerlendirme yeni Review ID üretir.
- Typo/link düzeltmesi PATCH’tir ve karar kanıtını değiştiremez.
- Kapsam veya rubric değişikliği yeni Review kaydı gerektirir.
- Closed Review tarihsel kayıt olarak korunur.

## Required Sections

1. `Review Scope`
2. `Inputs`
3. `Validation Method`
4. `Findings`
5. `Decision`
6. `Required Actions`
7. `Updated Files`
8. `References`

Her finding: ID, severity, status, evidence, impact, owner ve required resolution taşır. Severity: `Critical`, `Major`, `Minor`, `Observation`.

## Validation Rules

- Reviewer role kapsamla uyumlu olmalıdır.
- Reviewer, Final gate’te kendi değişikliklerini bağımsız inceleme kanıtı olmadan tek başına onaylayamaz.
- `findings` sayısı body kayıtlarıyla eşleşmelidir.
- Critical veya Major açık finding varken decision `Approved` olamaz.
- `Changes Required` scope’u Draft’a; `Rejected` yeni scope/approach tasarımına döndürür.
- Technical doğruluk, Content pedagojik/dil, Repository yapı/metadata, Final önceki gate ve yayın/freeze hazırlığını doğrular.
- Her decision, kullanılan Validation Report ve scope sürümüne bağlanmalıdır.

## Examples

| Review Domain | Uygun gate dizisi | Owner rolleri |
|---|---|---|
| Blueprint | Technical → Content → Repository → Final | Curriculum, technical, documentation, QA |
| Lab | Technical → Content → Final | Educator, technical reviewer, QA |
| Assessment | Content → Technical → Final | Assessment designer, subject reviewer, QA |
| Governance | Repository → Final | Governance architect, independent reviewer |
| Volume | Technical → Content → Repository → Final | Cross-functional review board |

## DoD (Definition of Done)

- Metadata ve review domain geçerlidir.
- Kapsam ve input sürümleri sabittir.
- Validation method yeniden üretilebilirdir.
- Her finding kanıt ve owner taşır.
- Decision, açık finding severity’leriyle uyumludur.
- Updated files listesi doğrudur.
- Review kaydı link ve schema validation’dan geçmiştir.

## References

- [Repository Standard v2.0](../repository-standard-v2.md)
- [Validation Standard](./08-validation-standard.md)
- [Freeze Standard](./05-freeze-standard.md)
