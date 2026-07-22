---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-IDX-001"
supporting_document_type: "Index"
title: "V01-C03 Research Packet: Problem Definition and Decomposition"
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
  - "./source-strategy.md"
  - "./research-collection.md"
  - "../lesson-03/research-packet.md"
x-research-brief-id: "V01-C03-SD-COMP-001"
x-knowledge-snapshot: "knowledge-foundation-freeze-1.0.0"
x-graph-snapshot: "knowledge-graph-1.0.0"
x-validation-report: "V01-C03-SD-COMP-018"
x-generated-on: "2026-07-22"
x-updated-on: "2026-07-22"
x-language: "tr-TR"
---

# V01-C03 Research Packet: Problem Definition and Decomposition

## Overview

Bu paket, `V01-C03` — Problem Definition and Decomposition chapter'ının yeni
referans modelle üretimi için araştırma girdisidir. Hedef kitle programlamaya
yeni başlayan yetişkindir. Eğitim anlatımı Türkçe; kod, kimlikler ve resmî
teknik adlar İngilizce kalır. Teknik terimler ilk kullanımda Türkçe (English)
biçiminde verilir.

Araştırma sorusu: Belirsiz bir ihtiyaç, çözüm veya kod seçilmeden önce nasıl
ölçülebilir bir problem sözleşmesine dönüştürülür; bu sözleşme, ilişkileri ve
sınırları kaybetmeden nasıl alt sorumluluklara ayrılır?

Kapsama problem alanı, paydaş, sonuç, girdi, çıktı, kısıt, varsayım, kapsam,
non-goal, kabul ölçütü, edge case, decomposition, abstraction, verification,
validation ve temel traceability girer. Pseudocode, programlama dili, veri tipi
ve çalışan çözüm kodu kapsam dışıdır.

Bir önceki `V01-C03-SD-COMP-005` tarihsel araştırma snapshot'ıdır. Bu paket onu
silmez veya kanonik bilgi sahipliğini değiştirmez; 26 bölümlü güncel sözleşmeyle
coverage expansion sağlar.

## Learning Goals

Kanonik Outcome metni değiştirilmeden korunur:

> `V01-LO005`: Verilen problemi input, output, constraint, assumption ve edge
> case'lere ayırabilmek.

Araştırma, öğrencinin aşağıdaki gözlenebilir kanıtları üretebilmesini
desteklemelidir:

- çözüm fikri ile problem ifadesini ayırmak;
- paydaşı, istenen sonucu, girdiyi ve çıktıyı açıkça yazmak;
- constraint ile assumption'ı gerekçesiyle sınıflandırmak;
- geçerli boundary/edge case ile invalid input'u ayırmak;
- scope ve non-goal belirlemek;
- ölçülebilir acceptance criteria yazmak;
- sorumluluk ağacı ve dependency ilişkisi üretmek;
- AI önerisini aynı sözleşmeyle denetlemek ve kararını savunmak.

Prerequisites: `V01-C01`, `V01-C02`. Assessment: `V01-C03-AS01`. Lab:
`V01-C03-L01`.

## Official Sources

Bu tabloda `c03-source-*` anahtarları packet-local adaylardır; Source Registry
kimliği değildir. Locator'lar 2026-07-22 tarihinde erişilebilirlik ve konu
uyumu açısından kontrol edilmiştir.

| Key | Source, version | Authority | Locator and use | License/use and freshness |
| --- | --- | --- | --- | --- |
| `c03-source-01` | ACM/IEEE-CS/AAAI CS2023 Report | International curriculum report | [Report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm); problem solving and decomposition | Link/synthesis; 2023 report, web edition checked 2026-07-22 |
| `c03-source-02` | SWEBOK v4 | Official body of knowledge | [Topics](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics); requirements knowledge areas | Link/synthesis; v4 |
| `c03-source-03` | ISO/IEC/IEEE 29148:2018 | International standard | [Catalogue](https://www.iso.org/standard/72089.html); lifecycle/process scope | Copyrighted standard; catalogue facts only; confirmed 2024, revision pending |
| `c03-source-04` | NASA SE Handbook Rev 2 | Government engineering handbook | [PDF](https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf); stakeholder, requirements, decomposition | Public link and synthesis; version pinned |
| `c03-source-05` | NASA System Design Processes | Government engineering guidance | [Web](https://www.nasa.gov/reference/4-0-system-design-processes/); process flow | Public link/synthesis; checked 2026-07-22 |
| `c03-source-06` | NASA SE Handbook Appendix | Government engineering guidance | [Web](https://www.nasa.gov/reference/system-engineering-handbook-appendix/); requirement quality | Public link/synthesis; checked 2026-07-22 |
| `c03-source-07` | NASA SWE-050 | Government software guidance | [Web](https://swehb.nasa.gov/spaces/7150/pages/16449651/SWE-050%2B-%2BSoftware%2BRequirements); hierarchy/traceability | Public link/synthesis; checked 2026-07-22 |
| `c03-source-08` | NASA SWE-055 | Government software guidance | [Web](https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604513/SWE-055%2B-%2BRequirements%2BValidation); validation | Public link/synthesis; checked 2026-07-22 |
| `c03-source-09` | NASA SRS guidance | Government software guidance | [Web](https://swehb.nasa.gov/spaces/SWEHBVD/pages/140640605/SRS%2B-%2BSoftware%2BRequirements%2BSpecification); derived requirements | Public link/synthesis; checked 2026-07-22 |
| `c03-source-10` | NASA SWE-034 | Government software guidance | [Web](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695413/SWE-034%2B-%2BAcceptance%2BCriteria); acceptance criteria | Public link/synthesis; checked 2026-07-22 |
| `c03-source-11` | GOV.UK Understand User Needs | Official service standard | [Web](https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs); user problem/outcome | OGL-linked public guidance; checked 2026-07-22 |
| `c03-source-12` | GOV.UK Learning User Needs | Official research guidance | [Web](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs); evidence/assumptions | OGL-linked public guidance; checked 2026-07-22 |
| `c03-source-13` | GOV.UK Scoping Your Service | Official service guidance | [Web](https://www.gov.uk/service-manual/design/scoping-your-service); scope boundaries | OGL-linked public guidance; checked 2026-07-22 |
| `c03-source-14` | GOV.UK Discovery Phase | Official delivery guidance | [Web](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works); reframing/non-goals | OGL-linked public guidance; checked 2026-07-22 |
| `c03-source-17` | SEBoK Stakeholder Needs Definition | Official body of knowledge | [v2.14](https://sebokwiki.org/wiki/Stakeholder_Needs_Definition); needs/stakeholders | CC BY-NC-SA noted by site; May 2026 |
| `c03-source-18` | SEBoK System Requirements Definition | Official body of knowledge | [v2.14](https://sebokwiki.org/wiki/System_Requirements_Definition); requirements transformation | CC BY-NC-SA noted by site; May 2026 |
| `c03-source-19` | SEBoK Requirements Management | Official body of knowledge | [v2.14](https://sebokwiki.org/wiki/Requirements_Management); change/traceability | CC BY-NC-SA noted by site; May 2026 |
| `c03-source-20` | SEBoK Business or Mission Analysis | Official body of knowledge | [v2.14](https://sebokwiki.org/wiki/Business_or_Mission_Analysis); problem space | CC BY-NC-SA noted by site; May 2026 |

## Supporting Sources

| Key | Source | Authority | Intended use | Use limit |
| --- | --- | --- | --- | --- |
| `c03-source-15` | Jeannette Wing, “Computational Thinking,” 2006 | Peer-reviewed professional viewpoint | Historical framing of abstraction and decomposition | Not a requirements standard; no current process claims |
| `c03-source-16` | National Academies, computational thinking report, 2021 | Academic consensus report | Problem formulation and computational practices | Education synthesis; not software lifecycle authority |

Further industry blogs, videos and community posts were intentionally excluded
from claim support. They may later inform examples only after technical review.

## Concept Coverage

| Concept ID | Canonical concept | Required instructional boundary | Source candidates |
| --- | --- | --- | --- |
| `ASEA-CON-000012` | Problem Definition and Requirements | Need, problem, outcome, stakeholder, input/output, scope and acceptance; not solution design | `01`–`14`, `17`, `18`, `20` |
| `ASEA-CON-000013` | Constraint and Assumption | Mandatory boundary versus falsifiable temporary belief; assumption ownership | `03`, `04`, `06`, `12`, `17`, `18` |
| `ASEA-CON-000014` | Edge Case | Boundary/edge/invalid distinction and systematic discovery | `06`, `08`, `10`, `18` |
| `ASEA-CON-000015` | Problem Decomposition | Responsibility, interface, dependency and coverage; not arbitrary splitting | `01`, `04`, `05`, `07`, `09`, `15`, `16` |

No new Concept is introduced. Scope, acceptance criterion, stakeholder and
validation are supporting vocabulary under the four canonical concepts.

## Claim Coverage

| Claim ID | Coverage judgment | Strongest candidate corroboration |
| --- | --- | --- |
| `ASEA-CLM-000012` | Covered: outcome, stakeholders, inputs/outputs, constraints and acceptance before design | `c03-source-03`, `04`, `11`, `17`, `18`, `20` |
| `ASEA-CLM-000013` | Covered: constraint limits solution; assumption requires confirmation | `c03-source-04`, `06`, `12`, `17`, `18` |
| `ASEA-CLM-000014` | Covered with terminology warning: edge-case usage varies; packet defines its teaching boundary | `c03-source-06`, `08`, `10`, `18` |
| `ASEA-CLM-000015` | Covered: bounded responsibilities plus inputs, outputs and interactions | `c03-source-01`, `04`, `05`, `07`, `09`, `15` |

The canonical claim text is unchanged. Candidate sources expand corroboration;
they do not alter claim identity or status.

## Evidence Mapping

Current canonical chain:

| Outcome | Concept | Claim | Evidence | Source |
| --- | --- | --- | --- | --- |
| `V01-LO005` | `ASEA-CON-000012` | `ASEA-CLM-000012` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `V01-LO005` | `ASEA-CON-000013` | `ASEA-CLM-000013` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `V01-LO005` | `ASEA-CON-000014` | `ASEA-CLM-000014` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `V01-LO005` | `ASEA-CON-000015` | `ASEA-CLM-000015` | `ASEA-EV-000010` | `ASEA-SRC-000001` |

Candidate evidence plan:

| Candidate locator group | Supports | Evidence type | Registry action required |
| --- | --- | --- | --- |
| ISO 29148 scope + NASA requirements quality | `CLM-000012` | Standard/guidance synthesis | Allocate bounded Evidence records |
| SEBoK needs + NASA expectation capture | `CLM-000013` | Body-of-knowledge corroboration | Allocate bounded Evidence records |
| NASA measurable validation/acceptance material | `CLM-000014` | Validation guidance with teaching interpretation | Human terminology review |
| CS2023 + NASA logical decomposition | `CLM-000015` | Curriculum and engineering corroboration | Allocate bounded Evidence records |

The current chain resolves, but one broad Evidence record supports four claims.
Stable approval requires Source Registry and Evidence Registry integration of
the bounded candidate locators.

## Terminology

| First use | Later use | Meaning boundary |
| --- | --- | --- |
| İhtiyaç (Need) | ihtiyaç | Stakeholder'ın elde etmek istediği sonuç |
| Problem tanımı (Problem Definition) | problem tanımı | Mevcut ve istenen durum farkının bounded tarifi |
| Gereksinim (Requirement) | gereksinim | Sağlanması gereken doğrulanabilir koşul/yetenek |
| Paydaş (Stakeholder) | paydaş | Sonuçtan etkilenen veya meşru karar etkisi olan taraf |
| Girdi (Input) | girdi | Davranış üretmek için alınan bilgi |
| Çıktı (Output) | çıktı | Gözlenebilir sonuç veya state change |
| Kısıt (Constraint) | kısıt | Kabul edilebilir çözümü zorunlu biçimde sınırlayan koşul |
| Varsayım (Assumption) | varsayım | Kanıtlanana kadar geçici doğru kabul edilen koşul |
| Kapsam (Scope) | kapsam | Taahhüt edilen problem sınırı |
| Kapsam dışı hedef (Non-goal) | kapsam dışı hedef | Bilerek çözülmeyen alan |
| Kabul ölçütü (Acceptance Criterion) | kabul ölçütü | Başarıyı gözlenebilir yapan koşul |
| Sınır durumu (Boundary Case) | sınır durumu | Tanımlı sınırın üzeri veya yakınındaki senaryo |
| Uç durum (Edge Case) | uç durum | Olağan varsayımların zorlandığı sınır davranışı |
| Geçersiz girdi (Invalid Input) | geçersiz girdi | Sözleşmenin kabul etmediği değer |
| Problem ayrıştırma (Problem Decomposition) | ayrıştırma | Sorumluluk ve ilişkileri koruyarak alt problemlere ayırma |
| Soyutlama (Abstraction) | soyutlama | Soruya ilgili ayrıntıyı koruyan model |
| Doğrulama (Verification) | doğrulama | Artefact'ın tanımlı kurala uygunluğunu sınama |
| Geçerleme (Validation) | geçerleme | Doğru ihtiyacın karşılandığını sınama |

“İstek,” “problem,” “gereksinim” ve “çözüm” eş anlamlı kullanılmayacaktır.
`Edge case` her olağandışı olay veya her invalid input anlamında kullanılmaz.

## Mental Models

1. **Problem sözleşmesi:** Öğrenci koddan önce iki tarafın neyin başarı
   sayılacağında anlaşmasını düşünür. Sınırı: yasal sözleşme değildir.
2. **Problem space / solution space:** Önce neden ve hangi sonucu, sonra nasıl
   sorusu. Sınırı: süreç tamamen doğrusal değildir; yeni kanıt geri dönüş doğurur.
3. **Mercekler:** Girdi, çıktı, kısıt, varsayım ve edge case aynı problemi farklı
   risklerden inceler. Sınırı: sadece kutu doldurma çalışmasına dönüşmemelidir.
4. **Ağaç + grafik:** Decomposition tree sorumluluk sahipliğini, dependency
   graph parçalar arası ihtiyacı gösterir. Tek görsel ikisini de eksiksiz anlatmaz.
5. **Varsayım defteri:** Her varsayım kanıt, sahip ve yanlış çıkma etkisi taşır.
6. **Kanıt zinciri:** Need → problem → criterion → responsibility → evidence.

Muhtemel yanılgılar: ayrıştırmayı dosya sayısına eşitlemek, bütün ayrıntıyı
başta bilmek gerektiğini düşünmek, “AI net yazdıysa gereksinim doğrudur” demek.

## Historical Context

Gereksinim mühendisliği uzun süredir yazılım ve sistem yaşam döngüsünün temel
alanıdır. Wing'in 2006 çalışması decomposition ve abstraction gibi uygulamaları
yalnızca bilgisayar bilimcilere ait olmayan düşünme araçları olarak yeniden
öne çıkarmıştır. Güncel CS2023, problem solving'i ambiguity altında specification
ve reasoning ile ilişkilendirir. Bu tarihçe dersin odağı değildir; öğrencinin
“önce kod” refleksinin neden profesyonel mühendislikte yetersiz kaldığını
anlamasını destekler.

## Technical Details

- Problem statement çözüm teknolojisini ancak gerçek bir constraint ise içerir.
- Her gereksinim mümkün olduğunca tek yükümlülük taşır; birleşik cümleler ayrı
  testleri gizleyebilir.
- Constraint'in kaynağı (hukuk, platform, süre, bütçe, domain) kaydedilmelidir.
- Assumption'ın sahibi, doğrulama yöntemi ve invalidation etkisi bulunmalıdır.
- Input domain; tür, birim, aralık, optionality ve trust boundary taşır.
- Output contract; başarı, reddetme ve controlled failure sonuçlarını kapsar.
- Acceptance criterion implementation değil observable behavior tarif eder.
- Decomposition completeness ve overlap açısından kontrol edilir.
- Decomposition tree bağımlılık sırasını garanti etmez.
- Verification ve validation farklı sorular sorar ve ikisi de gereklidir.
- Traceability, değişen bir ihtiyacın hangi kriter ve parçaları etkilediğini bulur.

Belirsizlik: “Edge case” için tek evrensel standardize tanım bulunmadığından
ASEA öğretim tanımı canonical Claim sınırıyla sabitlenmeli ve teknik reviewer
tarafından onaylanmalıdır.

## Code References

C03 dil bağımsızdır; final lesson çalışan çözüm kodu öğretmemelidir. Referans
gösterimler yalnızca veri yapısını görünür kılmak için kullanılabilir:

```text
ProblemContract
  stakeholder
  desiredOutcome
  inputs[]
  outputs[]
  constraints[]
  assumptions[]
  nonGoals[]
  acceptanceCriteria[]
  edgeCases[]
```

```text
Responsibility
  name
  consumes[]
  produces[]
  dependsOn[]
  acceptanceEvidence
```

Bu örnekler program değildir; alanların eksiksizliğini inceleme aracıdır. JSON
veya TypeScript gösterimi, öğrenci bu biçimleri henüz öğrenmediği için ana
anlatımda kullanılmamalıdır.

## Best Practices

- Problemi çözümden bağımsız bir cümleyle yeniden ifade et.
- Paydaşı ve istenen gözlenebilir sonucu birlikte yaz.
- Input/output alanlarına tür kadar unit, range ve validity ekle.
- Constraint ve assumption'ı ayrı listelerde tut.
- Her assumption için nasıl doğrulanacağını belirt.
- Scope ve non-goal'leri görünür yap.
- Normal, sınır ve invalid senaryo üret.
- Acceptance criteria'yı ölçülebilir davranışla yaz.
- Ayrıştırmada her parçaya tek sorumluluk ve açık interface ver.
- AI önerisini kaynak değil, denetlenmesi gereken candidate olarak kullan.
- Kararı kriter ve kanıtla savun; “AI böyle dedi” gerekçe değildir.

## Common Mistakes

- “Bir uygulama yap” cümlesini problem tanımı sanmak.
- İlk duyulan belirtiyi kök problem kabul etmek.
- Teknoloji tercihini zorunlu constraint gibi sunmak.
- Varsayımı gerçekmiş gibi gizlemek.
- Edge case ile invalid input'u aynı saymak.
- Acceptance criterion yerine “iyi çalışmalı” yazmak.
- Kapsam dışı alanları belirtmemek.
- Problemi fiil/sorumluluk yerine dosya veya ekran adına göre bölmek.
- Alt parçalar arası veri ve sıra bağımlılığını unutmak.
- AI'ın eklediği requirement'ı paydaş onayı olmadan kabul etmek.

## Edge Cases

Araştırma üretiminde en az şu sınıflar kullanılmalıdır:

- boş, eksik, `null` benzeri yokluk;
- minimum, maksimum, sınırın hemen altı/üstü;
- sıfır, negatif, çok büyük değer;
- tekrar, eşitlik, kararsız sıra;
- bozuk biçim veya yanlış birim;
- birden fazla kuralın aynı anda uygulanması;
- çelişen stakeholder ihtiyacı;
- dış servisin gecikmesi veya başarısızlığı;
- timezone, locale ve encoding değişimi;
- permission, ownership ve privacy sınırı;
- assumption'ın yanlış çıkması;
- scope içi davranışın non-goal ile kesişmesi.

Her durum geçerli/invalid, beklenen sonuç ve ilişkili criterion ile
etiketlenmelidir.

## Real World Examples

1. **Bilet fiyatı:** Fiyat, kategori, indirim önceliği, yuvarlama ve sınır yaşlar.
2. **Dosya yükleme:** Boyut/type constraint, ağ assumption'ı, duplicate ve
   partial upload davranışı.
3. **Randevu planlama:** Timezone, çakışma, cancellation, çalışma saati ve
   stakeholder conflict.
4. **Incident alert:** Severity, ownership, duplicate alert, escalation ve
   response-time acceptance criteria.
5. **Kamu hizmeti başvurusu:** User need ile kurum içi işlem ayrımı, accessibility,
   evidence ve status visibility.

Örnekler gerçek şirket adı veya doğrulanmamış başarı iddiası kullanmaz. Her biri
aynı problem-contract şablonuna uygulanabilir.

## Interview Notes

| Prompt | Expected observable behavior | Red flag |
| --- | --- | --- |
| Belirsiz bir ticket'ı nasıl netleştirirsin? | Stakeholder, outcome, constraints, examples asks | Hemen teknoloji seçer |
| Constraint ve assumption farkı nedir? | Mandatory boundary vs falsifiable belief | İkisini eş anlamlı kullanır |
| Edge case nasıl bulursun? | Boundary/systematic lenses | Rastgele tahmin |
| Acceptance criterion nasıl yazılır? | Observable and testable behavior | “İyi çalışmalı” |
| Problem nasıl ayrıştırılır? | Responsibilities, I/O, dependencies | Dosya listesi verir |
| AI requirement önerirse ne yaparsın? | Source/authority/criteria validation | Doğrudan kabul eder |

Interview içeriği ezber değil, düşünce sürecinin teknik savunmasını ölçmelidir.

## Exercise Ideas

| Idea | Outcome | Difficulty | Observable result | Validation |
| --- | --- | --- | --- | --- |
| Solution-language detector | `V01-LO005` | Easy | Problem cümlesindeki erken çözüm kelimelerini işaretler | Reasoned classification |
| Contract completion | `V01-LO005` | Easy | Eksik input/output/constraint alanlarını tamamlar | Completeness checklist |
| Constraint or assumption | `V01-LO005` | Medium | 12 ifadeyi sınıflandırır ve gerekçelendirir | Classification rubric |
| Boundary matrix | `V01-LO005` | Medium | Normal/boundary/invalid test seti | Partition coverage |
| Decomposition repair | `V01-LO005` | Medium | Overlap ve missing responsibility bulur | Coverage + dependency review |
| AI critique | `V01-LO005` | Advanced | AI sözleşmesinde unsupported requirement bulur | Evidence-backed decisions |

Final exercise seti bu fikirlerden ayrı artefact olarak üretilmelidir.

## Quiz Ideas

- Problem, symptom ve solution idea ayırma.
- Requirement'ın ölçülebilir olup olmadığını belirleme.
- Constraint/assumption karşılaştırma.
- Edge/boundary/invalid senaryoyu sınıflandırma.
- Scope/non-goal farkını uygulama.
- Decomposition ağacındaki missing/overlap sorunu bulma.
- Dependency sırasını yorumlama.
- Verification/validation sorusunu ayırma.
- AI çıktısındaki invented requirement'ı belirleme.

Sorular yalnız tanım hatırlamayı değil apply/analyze düzeylerini ölçmeli; cevap
anahtarı öğrenci yanıtından önce görünmemelidir.

## Lab Ideas

`V01-C03-L01` için önerilen senaryo: Belirsiz bir etkinlik kayıt isteğini
incelenebilir problem contract'a dönüştürme.

Teslimatlar:

1. Stakeholder/outcome map.
2. Input/output/domain table.
3. Constraint/assumption ledger.
4. Scope/non-goal boundary.
5. En az sekiz acceptance criterion.
6. En az on iki normal/boundary/invalid scenario.
7. Responsibility tree ve dependency graph.
8. AI'ın ürettiği alternatif contract için satır bazlı review.
9. Beş dakikalık technical defense.

Başarı, alan doldurmakla değil completeness, consistency, traceability ve
decision rationale rubric'iyle değerlendirilir.

## Animation Ideas

- “İstekten problem sözleşmesine” dönüşen kartlar: symptom → need → outcome.
- Problem-space ve solution-space arasında erken çözüm varsayımını gösteren kapı.
- Constraint'in solution space'i daralttığı görsel alan animasyonu.
- Assumption'ın evidence gelince confirmed/invalidated durumuna geçişi.
- Boundary çizgisi üzerinde normal, edge ve invalid noktalar.
- Decomposition tree'den dependency graph'a dönüşüm.
- Need → criterion → responsibility → evidence traceability zinciri.

Animasyonlarda autoplay zorunlu olmamalı, reduced-motion alternatifi ve metinsel
açıklama bulunmalıdır.

## Further Reading

- [Source Strategy](./source-strategy.md)
- [Research Collection](./research-collection.md)
- [Chapter Blueprint](../../../chapter-blueprints/03-problem-definition-and-decomposition.md)
- [Research Packet Standard](../../../../production/research-packet-standard.md)
- [CS2023 report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
- [NASA Systems Engineering Handbook](https://science.nasa.gov/wp-content/uploads/2023/04/nasa_systems_engineering_handbook_0.pdf)
- [SEBoK Stakeholder Needs Definition](https://sebokwiki.org/wiki/Stakeholder_Needs_Definition)
- [GOV.UK discovery guidance](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works)

## Review Notes

- 2026-07-22: Existing five-source historical packet retained; expanded research
  uses 20 primary/supporting candidates.
- 2026-07-22: Canonical concepts, claims, Outcome and IDs were not modified.
- 2026-07-22: AI-native mapping added as a derived production contract.
- Open: Technical reviewer must confirm edge-case terminology and requirements
  simplification.
- Open: Educational reviewer must assess beginner cognitive load.
- Open: Registry owner must allocate Source/Evidence identities for approved
  candidate locators.

## Approval

Validation record: `V01-C03-SD-COMP-018`.

Technical Review: Pending. Educational Review: Pending. Source/Evidence
Registry integration: Pending. This exact packet version is therefore not
approved for `Stable` publication. It is sufficient to prepare, but not publish,
the C03 Chapter Production Packet and draft lesson.

## Version

Current version: `0.1.0`.

This is a new 26-section packet index and compatible coverage expansion over
the historical `V01-C03-SD-COMP-005`. Moving to `0.2.0` requires bounded
Evidence integration or material coverage expansion. `1.0.0` requires all
reviews and approval for the exact snapshot.

## Status

`Draft` — content coverage is assembled; canonical identities resolve for the
existing chain, but expanded Source/Evidence registration and independent
Technical/Educational Reviews remain open.
