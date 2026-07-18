---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-IDX-024"
supporting_document_type: "Index"
title: "Volume 01 Canonical Traceability Matrix"
version: "1.0.0"
status: "Draft"
scope_id: "V01"
authority: "Derived"
owner_role: "Knowledge Architect"
source_ids:
  - "ASEA-STD-GOV-TRACEABILITY-001"
  - "V01-SD-ASMT-001"
derived_from:
  - "ASEA-SD-IDX-010"
  - "ASEA-SD-IDX-013"
  - "ASEA-SD-IDX-018"
  - "ASEA-SD-IDX-003"
  - "V01-SD-ASMT-001"
---

# Volume 01 Canonical Traceability Matrix

## Purpose

This matrix materializes every canonical join required for forward and reverse
navigation across the eight-layer Volume 01 traceability chain.

## Scope

It represents 551 typed direct relationships and 272 unique complete
Source-to-Module paths. It is a derived view and cannot replace an atomic
registry or `assessment.md`.

## Ownership

- **Source version:** `docs/knowledge/source-registry.md` version 1.0.0.
- **Evidence version:** `docs/knowledge/evidence-registry.md` version 1.1.0.
- **Claim version:** `docs/knowledge/claim-registry.md` version 1.0.0.
- **Concept version:** `docs/knowledge/concept-registry.md` version 1.0.0.
- **Curriculum source:** `V01-SD-ASMT-001` version 1.0.0.
- **Generated:** 2026-07-18.
- **Authority:** Derived.

## Content

### Direct Relationship Counts

| Relationship | Edge Count |
| --- | ---: |
| Source → Evidence | 14 |
| Evidence → Claim | 167 |
| Claim → Concept | 101 |
| Concept → Outcome | 167 |
| Outcome → Assessment | 46 |
| Assessment → Chapter | 28 |
| Chapter → Module | 28 |
| **Total** | **551** |

### Source and Evidence Join

| Source | Evidence |
| --- | --- |
| `ASEA-SRC-000001` | `ASEA-EV-000001`, `ASEA-EV-000009`–`ASEA-EV-000011` |
| `ASEA-SRC-000002` | `ASEA-EV-000002` |
| `ASEA-SRC-000003` | `ASEA-EV-000012`–`ASEA-EV-000013` |
| `ASEA-SRC-000004` | `ASEA-EV-000014` |
| `ASEA-SRC-000005` | `ASEA-EV-000003` |
| `ASEA-SRC-000006` | `ASEA-EV-000004` |
| `ASEA-SRC-000007` | `ASEA-EV-000005` |
| `ASEA-SRC-000008` | `ASEA-EV-000006`–`ASEA-EV-000008` |

### Evidence and Claim Join

| Evidence | Claims |
| --- | --- |
| `ASEA-EV-000001` | `ASEA-CLM-000001`, `ASEA-CLM-000004` |
| `ASEA-EV-000002` | `ASEA-CLM-000002` |
| `ASEA-EV-000003` | `ASEA-CLM-000001` |
| `ASEA-EV-000004` | `ASEA-CLM-000006` |
| `ASEA-EV-000005` | `ASEA-CLM-000003` |
| `ASEA-EV-000006` | `ASEA-CLM-000004` |
| `ASEA-EV-000007` | `ASEA-CLM-000005` |
| `ASEA-EV-000008` | `ASEA-CLM-000006` |
| `ASEA-EV-000009` | `ASEA-CLM-000007`–`ASEA-CLM-000011`, `ASEA-CLM-000020`–`ASEA-CLM-000070`, `ASEA-CLM-000082`–`ASEA-CLM-000092` |
| `ASEA-EV-000010` | `ASEA-CLM-000012`–`ASEA-CLM-000019`, `ASEA-CLM-000071`–`ASEA-CLM-000081` |
| `ASEA-EV-000011` | `ASEA-CLM-000093`–`ASEA-CLM-000101` |
| `ASEA-EV-000012` | `ASEA-CLM-000020`–`ASEA-CLM-000045` |
| `ASEA-EV-000013` | `ASEA-CLM-000046`–`ASEA-CLM-000070`, `ASEA-CLM-000082`–`ASEA-CLM-000084` |
| `ASEA-EV-000014` | `ASEA-CLM-000093`–`ASEA-CLM-000101` |

### Claim and Concept Join

| Claims | Concepts |
| --- | --- |
| `ASEA-CLM-000001` | `ASEA-CON-000006` |
| `ASEA-CLM-000002` | `ASEA-CON-000001` |
| `ASEA-CLM-000003` | `ASEA-CON-000002` |
| `ASEA-CLM-000004` | `ASEA-CON-000003` |
| `ASEA-CLM-000005` | `ASEA-CON-000004` |
| `ASEA-CLM-000006` | `ASEA-CON-000005` |
| `ASEA-CLM-000007`–`ASEA-CLM-000101` | Matching `ASEA-CON-000007`–`ASEA-CON-000101` |

### Concept and Outcome Join

| Chapter scope | Concepts | Outcomes | Edge Count |
| --- | --- | --- | ---: |
| `V01-C01` | `ASEA-CON-000007`–`ASEA-CON-000011` | `V01-LO001`–`V01-LO002` | 10 |
| `V01-C02` | `ASEA-CON-000001`–`ASEA-CON-000006` | `V01-LO003`–`V01-LO004` | 12 |
| `V01-C03` | `ASEA-CON-000012`–`ASEA-CON-000015` | `V01-LO005` | 4 |
| `V01-C04` | `ASEA-CON-000016`–`ASEA-CON-000019` | `V01-LO006` | 4 |
| `V01-C05` | `ASEA-CON-000020`–`ASEA-CON-000023` | `V01-LO007`–`V01-LO008` | 8 |
| `V01-C06` | `ASEA-CON-000024`–`ASEA-CON-000025` | `V01-LO009`–`V01-LO010` | 4 |
| `V01-C07` | `ASEA-CON-000026`–`ASEA-CON-000028` | `V01-LO011` | 3 |
| `V01-C08` | `ASEA-CON-000029`–`ASEA-CON-000031` | `V01-LO012` | 3 |
| `V01-C09` | `ASEA-CON-000032`–`ASEA-CON-000035` | `V01-LO013`–`V01-LO014` | 8 |
| `V01-C10` | `ASEA-CON-000036`–`ASEA-CON-000038` | `V01-LO015`–`V01-LO016` | 6 |
| `V01-C11` | `ASEA-CON-000039`–`ASEA-CON-000042` | `V01-LO017` | 4 |
| `V01-C12` | `ASEA-CON-000043`–`ASEA-CON-000045` | `V01-LO018` | 3 |
| `V01-C13` | `ASEA-CON-000046`–`ASEA-CON-000048` | `V01-LO019`–`V01-LO020` | 6 |
| `V01-C14` | `ASEA-CON-000049`–`ASEA-CON-000051` | `V01-LO021` | 3 |
| `V01-C15` | `ASEA-CON-000052`–`ASEA-CON-000054` | `V01-LO022`–`V01-LO023` | 6 |
| `V01-C16` | `ASEA-CON-000055`–`ASEA-CON-000057` | `V01-LO024` | 3 |
| `V01-C17` | `ASEA-CON-000058`–`ASEA-CON-000060` | `V01-LO025`–`V01-LO026` | 6 |
| `V01-C18` | `ASEA-CON-000061`–`ASEA-CON-000063` | `V01-LO027`–`V01-LO028` | 6 |
| `V01-C19` | `ASEA-CON-000064`–`ASEA-CON-000067` | `V01-LO029`–`V01-LO030` | 8 |
| `V01-C20` | `ASEA-CON-000068`–`ASEA-CON-000070` | `V01-LO031` | 3 |
| `V01-C21` | `ASEA-CON-000071`–`ASEA-CON-000073` | `V01-LO032`–`V01-LO033` | 6 |
| `V01-C22` | `ASEA-CON-000074`–`ASEA-CON-000077` | `V01-LO034`–`V01-LO035` | 8 |
| `V01-C23` | `ASEA-CON-000078`–`ASEA-CON-000081` | `V01-LO036`–`V01-LO037` | 8 |
| `V01-C24` | `ASEA-CON-000082`–`ASEA-CON-000084` | `V01-LO038`–`V01-LO039` | 6 |
| `V01-C25` | `ASEA-CON-000085`–`ASEA-CON-000088` | `V01-LO040`–`V01-LO041` | 8 |
| `V01-C26` | `ASEA-CON-000089`–`ASEA-CON-000092` | `V01-LO042`–`V01-LO043` | 8 |
| `V01-C27` | `ASEA-CON-000093`–`ASEA-CON-000096` | `V01-LO044`–`V01-LO045` | 8 |
| `V01-C28` | `ASEA-CON-000097`–`ASEA-CON-000101` | `V01-LO046` | 5 |

### Curriculum Join

| Outcomes | Assessment | Chapter | Module |
| --- | --- | --- | --- |
| `V01-LO001`–`V01-LO002` | `V01-C01-AS01` | `V01-C01` | `V01-M01` |
| `V01-LO003`–`V01-LO004` | `V01-C02-AS01` | `V01-C02` | `V01-M01` |
| `V01-LO005` | `V01-C03-AS01` | `V01-C03` | `V01-M01` |
| `V01-LO006` | `V01-C04-AS01` | `V01-C04` | `V01-M01` |
| `V01-LO007`–`V01-LO008` | `V01-C05-AS01` | `V01-C05` | `V01-M02` |
| `V01-LO009`–`V01-LO010` | `V01-C06-AS01` | `V01-C06` | `V01-M02` |
| `V01-LO011` | `V01-C07-AS01` | `V01-C07` | `V01-M02` |
| `V01-LO012` | `V01-C08-AS01` | `V01-C08` | `V01-M02` |
| `V01-LO013`–`V01-LO014` | `V01-C09-AS01` | `V01-C09` | `V01-M03` |
| `V01-LO015`–`V01-LO016` | `V01-C10-AS01` | `V01-C10` | `V01-M03` |
| `V01-LO017` | `V01-C11-AS01` | `V01-C11` | `V01-M03` |
| `V01-LO018` | `V01-C12-AS01` | `V01-C12` | `V01-M03` |
| `V01-LO019`–`V01-LO020` | `V01-C13-AS01` | `V01-C13` | `V01-M04` |
| `V01-LO021` | `V01-C14-AS01` | `V01-C14` | `V01-M04` |
| `V01-LO022`–`V01-LO023` | `V01-C15-AS01` | `V01-C15` | `V01-M04` |
| `V01-LO024` | `V01-C16-AS01` | `V01-C16` | `V01-M04` |
| `V01-LO025`–`V01-LO026` | `V01-C17-AS01` | `V01-C17` | `V01-M05` |
| `V01-LO027`–`V01-LO028` | `V01-C18-AS01` | `V01-C18` | `V01-M05` |
| `V01-LO029`–`V01-LO030` | `V01-C19-AS01` | `V01-C19` | `V01-M05` |
| `V01-LO031` | `V01-C20-AS01` | `V01-C20` | `V01-M05` |
| `V01-LO032`–`V01-LO033` | `V01-C21-AS01` | `V01-C21` | `V01-M06` |
| `V01-LO034`–`V01-LO035` | `V01-C22-AS01` | `V01-C22` | `V01-M06` |
| `V01-LO036`–`V01-LO037` | `V01-C23-AS01` | `V01-C23` | `V01-M06` |
| `V01-LO038`–`V01-LO039` | `V01-C24-AS01` | `V01-C24` | `V01-M07` |
| `V01-LO040`–`V01-LO041` | `V01-C25-AS01` | `V01-C25` | `V01-M07` |
| `V01-LO042`–`V01-LO043` | `V01-C26-AS01` | `V01-C26` | `V01-M07` |
| `V01-LO044`–`V01-LO045` | `V01-C27-AS01` | `V01-C27` | `V01-M07` |
| `V01-LO046` | `V01-C28-AS01` | `V01-C28` | `V01-M07` |

### Canonical Reverse Mappings

Every table above is a bidirectional join:

- Module → Chapters is the inverse of the final Curriculum Join column pair.
- Chapter → Assessments and Assessment → Outcomes invert the Curriculum Join.
- Outcome → Concepts inverts the Concept and Outcome Join.
- Concept → Claims inverts the Claim and Concept Join.
- Claim → Evidence inverts the Evidence and Claim Join.
- Evidence → Source inverts the Source and Evidence Join.

No reverse relation receives a second ID or independent authority.

## Validation

- Direct typed edges: 551.
- Unique end-to-end paths: 272.
- Duplicate direct relations: 0.
- Unknown endpoints, broken chains, circular paths, or operational orphans: 0.

## References

- [Canonical Traceability Engine](./traceability-engine.md)
- [Forward Traceability](./forward-traceability.md)
- [Reverse Traceability](./reverse-traceability.md)
- [Canonical Assessment Registry](../01-programming/assessment.md)
