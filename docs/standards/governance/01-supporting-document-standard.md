---
document_type: "standard"
standard_id: "ASEA-STD-GOV-SUPPORTING-001"
title: "ASEA Supporting Document Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Supporting Document Standard v1.0

## Purpose

Bu standart, Standards v2 tarafından zorunlu kılınan ancak kendisine ait Front Matter şeması bulunmayan destek belgelerini ortak ve doğrulanabilir bir sözleşmeye bağlar. Eğitim içeriğini veya mevcut Volume/Chapter şemalarını yeniden tanımlamaz.

## Scope

Standart şu belge ailelerini kapsar: README dışındaki indeksler, glossary, references, study plan, roadmap, module map, chapter map, dependency map, learning outcomes registry, laboratory plan, project plan, assessment plan ve historical review indexleri. Volume `README.md`, Volume Blueprint, Chapter, Lab, Project, Assessment ve Review gibi Standards v2’de zaten şeması bulunan belgeler kendi asıl şemalarını kullanır.

## Required Metadata

```yaml
---
document_type: "supporting-document"
supporting_document_id: "V01-SD-ROAD-001"
supporting_document_type: "Roadmap"
title: "Volume 01 Roadmap"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---
```

Zorunlu alanlar: `document_type`, `supporting_document_id`, `supporting_document_type`, `title`, `version`, `status`, `scope_id`, `authority`, `owner_role`, `source_ids` ve `derived_from`. Boş ilişki alanları boş YAML dizisi olmalıdır.

## Document Type

`document_type` değeri `supporting-document` olmalıdır. `supporting_document_type` yalnızca şu değerlerden biri olabilir:

- `Index`
- `Glossary`
- `References`
- `Study Plan`
- `Roadmap`
- `Module Map`
- `Chapter Map`
- `Dependency Map`
- `Learning Outcomes Registry`
- `Laboratory Plan`
- `Project Plan`
- `Assessment Plan`
- `Review Index`
- `Compatibility Report`

`README.md`, bağlı olduğu Volume veya repository şemasını kullanır; sırf dosya adı nedeniyle `supporting-document` sayılmaz.

## ID Convention

Biçim: `{SCOPE}-SD-{KIND}-{NNN}`.

- `{SCOPE}`: `ASEA`, `V01` veya `V01-C01` gibi kanonik kapsam.
- `{KIND}`: `IDX`, `GLOS`, `REF`, `STUDY`, `ROAD`, `MMAP`, `CMAP`, `DMAP`, `LO`, `LAB`, `PROJ`, `ASMT`, `RVIDX` veya `COMP`.
- `{NNN}`: Üç basamaklı, yeniden kullanılmayan sıra.

Örnekler: `V01-SD-LO-001`, `V01-SD-CMAP-001`, `ASEA-SD-IDX-001`.

## Status Lifecycle

Ortak Standards v2 yaşam döngüsü uygulanır: `Draft → Review → Stable → Deprecated → Archived`. `authority` ayrı bir alandır:

- `Authoritative`: İlgili veri için source of truth.
- `Derived`: Yalnızca tanımlı kaynaklardan üretilen görünüm.
- `Informational`: Açıklama veya gezinme yardımı; normatif ilişki üretmez.

Derived belge, kaynaklarından daha yüksek bir status alamaz.

## Versioning Rules

- SemVer kullanılır ve `v` öneki Front Matter’a yazılmaz.
- Kimlik, kolon sözleşmesi veya kanonik anlam değişikliği MAJOR’dır.
- Geriye uyumlu yeni kayıt/alan MINOR’dır.
- Yazım, link ve anlamı değiştirmeyen metadata düzeltmesi PATCH’tir.
- Derived belge yalnızca yeniden üretildiyse PATCH artırabilir; kaynak sözleşmesi değiştiyse uygun MAJOR/MINOR uygulanır.

## Required Sections

Her supporting document en az `Purpose`, `Scope`, `Ownership`, `Content`, `Validation` ve `References` H2 bölümlerini içerir. Aşağıdaki profil başlıkları `Content` altında H3 veya belgenin var olan kanonik H2 sözleşmesi olarak kullanılabilir:

| Type | Zorunlu içerik profili |
|---|---|
| Glossary | Usage, Terms |
| References | Source Policy, Categories, Maintenance |
| Study Plan | Plan Selection, Schedule, Adjustment Rules |
| Roadmap | Learning Path, Milestones, Gates |
| Module Map | Module Records, Cross-Module Dependencies |
| Chapter Map | Chapter Records, Count, Navigation |
| Dependency Map | Rules, Graph/Matrix, Gates |
| Learning Outcomes Registry | Outcome Records, Distribution, Traceability Rules |
| Laboratory Plan | Lab Contracts, Count, Chapter Mapping |
| Project Plan | Project Contracts, Capstone Boundary, Count |
| Assessment Plan | Strategy, Scoring, Traceability Ownership, Reassessment |
| Index | Registered Artefacts, Lifecycle, Navigation |

Standards v2’de bir dosya için daha özel zorunlu H2 sözleşmesi varsa o sözleşme korunur.

## Validation Rules

- Metadata alanları ve enum değerleri şemaya uymalıdır.
- ID benzersiz olmalı ve kapsamla eşleşmelidir.
- `authority: Authoritative` aynı veri alanında tek belgeye ait olmalıdır.
- Derived belgelerde `derived_from` boş olamaz ve bütün kaynaklar mevcut olmalıdır.
- Relative linkler çözülmeli; dosya adı lowercase kebab-case olmalıdır.
- Boş zorunlu bölüm, filler içerik veya gizli ikinci source of truth bulunamaz.
- Kayıt sayıları, bağlı manifest ve source belgelerle eşleşmelidir.

## Examples

```yaml
---
document_type: "supporting-document"
supporting_document_id: "V01-SD-GLOS-001"
supporting_document_type: "Glossary"
title: "Volume 01 Glossary"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Documentation Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---
```

Bu örnek yalnızca metadata sözleşmesini gösterir; gerçek terim içeriği üretmez.

## DoD (Definition of Done)

- Belge türü ve ID geçerlidir.
- Authority ve kaynak ilişkileri çelişkisizdir.
- Zorunlu bölüm profili eksiksizdir.
- Kayıt, link, heading ve metadata kontrolleri geçmiştir.
- Repository Review kararı `Approved` olmuştur.
- Stable belge, aynı kapsamda çelişen ikinci bir source of truth bırakmaz.

## References

- [Repository Standard v2.0](../repository-standard-v2.md)
- [Volume Standard v2.0](../volume-standard-v2.md)
- [Governance Index](./09-governance-index.md)
