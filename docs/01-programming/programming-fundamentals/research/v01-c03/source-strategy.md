---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-REF-001"
supporting_document_type: "References"
title: "V01-C03 Source Strategy"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Research Lead"
source_ids:
  - "V01-C03"
  - "V01-LO005"
  - "ASEA-SRC-000001"
derived_from:
  - "../../../chapter-blueprints/03-problem-definition-and-decomposition.md"
  - "../lesson-03/research-packet.md"
x-generated-on: "2026-07-22"
x-language: "tr-TR"
---

# V01-C03 Source Strategy

## Research Objective

Bu strateji, `V01-C03` için problem tanımlama ve ayrıştırma bilgisini tek bir
kitaba veya blog yazısına dayandırmadan araştırır. Araştırma şu soruya yanıt
verir: Bir öğrenci, çözüm tasarlamadan önce belirsiz bir ihtiyacı nasıl
doğrulanabilir bir problem sözleşmesine dönüştürür ve bu problemi ilişkileri
bozmadan nasıl daha küçük sorumluluklara ayırır?

Kapsam `V01-LO005` ile sınırlıdır. Pseudocode yazımı ve algoritma doğrulama
`V01-C04` kapsamındadır; C03 yalnızca bu çalışmanın doğru problem üzerinde
yapılmasını sağlayan ön hazırlığı üretir.

## Authority Strategy

Kaynaklar aşağıdaki öncelik sırasında kullanılacaktır:

1. Uluslararası standartlar ve resmî body of knowledge belgeleri.
2. Kamu kurumlarının doğrulanabilir sistem/yazılım mühendisliği el kitapları.
3. Hakemli veya akademik olarak yayımlanmış birincil çalışmalar.
4. Resmî hizmet tasarımı ve kullanıcı araştırması rehberleri.
5. Yalnızca açıklama veya tarihsel bağlam için güvenilir ikincil kaynaklar.

Bir kaynak bütün bölümü tek başına doğrulamaz. Gereksinim kalitesi, kullanıcı
ihtiyacı, ayrıştırma ve hesaplamalı düşünme farklı uzmanlık kaynaklarıyla çapraz
kontrol edilir.

## Candidate Source Catalogue

`c03-source-*` anahtarları yalnızca bu araştırma paketindeki yerel aday
anahtarlardır. Kanonik Source ID değildir. Teknik inceleme sonrasında Source
Registry sahibi tarafından kimlik tahsis edilmedikçe `ASEA-SRC-*` olarak
kullanılamazlar.

| Key | Source | Authority | Version or date | Primary coverage |
| --- | --- | --- | --- | --- |
| `c03-source-01` | ACM/IEEE-CS/AAAI CS2023 Report | International curriculum report | 2023 report; web edition 2025 | Problem solving, decomposition, ambiguity, specification |
| `c03-source-02` | IEEE Computer Society SWEBOK v4 topics | Official body of knowledge | v4.0 | Requirements fundamentals, analysis, validation |
| `c03-source-03` | ISO/IEC/IEEE 29148 | International standard | 2018; confirmed 2024; revision pending | Requirements processes and information items |
| `c03-source-04` | NASA Systems Engineering Handbook | Government engineering handbook | Rev 2 | Stakeholder expectations, requirements, decomposition |
| `c03-source-05` | NASA System Design Processes | Government engineering guidance | Current web edition | Process relationships and iteration |
| `c03-source-06` | NASA Requirements Quality guidance | Government engineering guidance | Current web edition | Clear, singular, measurable requirements |
| `c03-source-07` | NASA SWE-050 Software Requirements | Government software standard guidance | Current web edition | Hierarchical decomposition and traceability |
| `c03-source-08` | NASA SWE-055 Requirements Validation | Government software standard guidance | Current web edition | Validation, completeness, consistency |
| `c03-source-09` | NASA Software Requirements Specification guidance | Government software guidance | Current web edition | Decomposed and derived requirements |
| `c03-source-10` | NASA SWE-034 Acceptance Criteria | Government software guidance | Current web edition | Verifiable completion conditions |
| `c03-source-11` | GOV.UK Understand User Needs | Official service standard | Current web edition | User problem, need, outcome |
| `c03-source-12` | GOV.UK Start by Learning User Needs | Official research guidance | Current web edition | Evidence, assumptions, user stories |
| `c03-source-13` | GOV.UK Scoping Your Service | Official service design guidance | Current web edition | Scope and end-to-end boundaries |
| `c03-source-14` | GOV.UK Discovery Phase | Official delivery guidance | Current web edition | Reframing, risks, constraints, non-goals |
| `c03-source-15` | Wing, Computational Thinking | Peer-reviewed viewpoint | 2006 | Abstraction and decomposition foundations |
| `c03-source-16` | National Academies computational thinking report | Academic consensus report | 2021 | Computational practices and problem formulation |
| `c03-source-17` | SEBoK Stakeholder Needs Definition | Official body of knowledge | v2.14, May 2026 | Needs, stakeholders, risks, constraints |
| `c03-source-18` | SEBoK System Requirements Definition | Official body of knowledge | v2.14, May 2026 | Need-to-requirement transformation |
| `c03-source-19` | SEBoK Requirements Management | Official body of knowledge | v2.14, May 2026 | Traceability, change, lifecycle |
| `c03-source-20` | SEBoK Business or Mission Analysis | Official body of knowledge | v2.14, May 2026 | Problem space and mission analysis |

## Source Locators

- [CS2023 full report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
- [SWEBOK v4 topics](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics)
- [ISO/IEC/IEEE 29148:2018](https://www.iso.org/standard/72089.html)
- [NASA Systems Engineering Handbook](https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf)
- [NASA System Design Processes](https://www.nasa.gov/reference/4-0-system-design-processes/)
- [NASA handbook appendix](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)
- [NASA SWE-050](https://swehb.nasa.gov/spaces/7150/pages/16449651/SWE-050%2B-%2BSoftware%2BRequirements)
- [NASA SWE-055](https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604513/SWE-055%2B-%2BRequirements%2BValidation)
- [NASA SRS guidance](https://swehb.nasa.gov/spaces/SWEHBVD/pages/140640605/SRS%2B-%2BSoftware%2BRequirements%2BSpecification)
- [NASA SWE-034](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695413/SWE-034%2B-%2BAcceptance%2BCriteria)
- [GOV.UK service standard point 1](https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs)
- [GOV.UK learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs)
- [GOV.UK service scoping](https://www.gov.uk/service-manual/design/scoping-your-service)
- [GOV.UK discovery](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works)
- [Wing: Computational Thinking](https://doi.org/10.1145/1118178.1118215)
- [National Academies report](https://nap.nationalacademies.org/resource/26215/The-Integration-of-Computational-Thinking-in-Early-Childhood-and-Elementary-Education.pdf)
- [SEBoK Stakeholder Needs Definition](https://sebokwiki.org/wiki/Stakeholder_Needs_Definition)
- [SEBoK System Requirements Definition](https://sebokwiki.org/wiki/System_Requirements_Definition)
- [SEBoK Requirements Management](https://sebokwiki.org/wiki/Requirements_Management)
- [SEBoK Business or Mission Analysis](https://sebokwiki.org/wiki/Business_or_Mission_Analysis)

## Freshness and Use Limits

- ISO/IEC/IEEE 29148:2018, 2024 yılında doğrulanmış olsa da ISO sayfası Şubat
  2026 itibarıyla revizyon sürecini işaretlemektedir. Üretim öncesi yeniden
  kontrol edilmelidir.
- SEBoK yaşayan bir kaynaktır. Paket sürümü, okunan `v2.14` sürümüne sabitlenir.
- GOV.UK kaynakları evrensel yazılım standardı değildir; kullanıcı ihtiyacını
  keşfetme ve problemi erken çözüm varsayımından ayırma örnekleri için
  kullanılır.
- NASA kaynakları güvenlik kritik süreçlerin ayrıntısını başlangıç öğrencisine
  zorunlu kılmaz; yalnızca ölçülebilirlik, izlenebilirlik ve doğrulama
  ilkelerini destekler.
- Wing makalesi tarihsel ve kavramsal destek sağlar; güncel gereksinim standardı
  yerine kullanılamaz.

## Evidence Collection Rules

Her öğretilebilir önerme için kaynak, bölüm/başlık konumu, yorum sınırı,
güncellik ve hangi kanonik iddiayı desteklediği kaydedilir. Bir web sayfasının
yalnızca URL'sinin bulunması kanıt sayılmaz. Alıntılar telif sınırları nedeniyle
çoğaltılmaz; anlamı koruyan sentez ve kesin locator kullanılır.

## Stop Conditions

Araştırma aşağıdaki durumlardan biri varsa `Stable` olamaz:

- `V01-LO005` için Outcome → Concept → Claim → Evidence → Source zinciri eksikse;
- problem, ihtiyaç, gereksinim ve çözüm terimleri birbirine karışıyorsa;
- edge case ile invalid input ayrımı doğrulanmamışsa;
- ayrıştırma yalnızca “küçük parçalara böl” düzeyinde kalıyorsa;
- kaynak adayları kanonik kayıtlara alınmamışsa;
- teknik ve pedagojik inceleme tamamlanmamışsa.
