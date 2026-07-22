---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-CMAP-004"
supporting_document_type: "Chapter Map"
title: "ASEA AI-Native Chapter Mapping"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-SD-COMP-040"
  - "ASEA-SD-CMAP-003"
derived_from:
  - "./asea-ai-native-competency-framework.md"
  - "./asea-26-academy-pedagogical-chapter-map.md"
---

# ASEA AI-Native Chapter Mapping

## Purpose

ASEA'nın 236 Chapter üretim biriminin tamamına AI-native yetkinlik, izin seviyesi
ve gözlenebilir kanıt profili atamak. Bu eşleme yeni kanonik Learning Outcome
veya Chapter kimliği üretmez; Chapter contract hazırlanırken kullanılacak Draft
curriculum input'udur.

## Mapping Contract

Bir satırdaki Chapter aralığı iki uç dahil bütün Chapter'ları kapsar. Her Chapter
şu değişmez sırayı uygular:

1. Öğrenci AI kullanmadan ilk çözümünü veya zihinsel modelini üretir.
2. AI'a verilen görev amaç, bağlam, kısıt, non-goal ve acceptance criteria taşır.
3. Öğrenci AI çıktısını çalıştırır ya da gözlenebilir kriterlerle inceler.
4. Kabul, düzeltme ve ret kararları evidence ile kaydedilir.
5. Öğrenci nihai artefact'ı AI olmadan teknik olarak savunur.

Yetkinlik anahtarları ve 0–5 izin seviyeleri
[AI-Native Competency Framework](./asea-ai-native-competency-framework.md)
tarafından tanımlanır. Aralıklar kanonik ID olmayan yerel Chapter adaylarını da
eksiksiz kapsar.

## Academy 01 Mapping

| Chapter coverage | Level | Primary competencies | Required evidence profile |
| --- | ---: | --- | --- |
| `V01-C01` | 0–1 | 01, 02, 08, 15 | AI kapalı açıklama; AI tanımında hata bulma; sözlü savunma |
| `V01-C02` | 0–2 | 01, 02, 07, 08, 09, 15 | Bağımsız execution trace; AI trace review; controlled correction |
| `V01-C03` | 0–2 | 02, 03, 04, 05, 07, 08, 15 | Problem contract; context sheet; decomposition; AI requirement audit |
| `V01-C04` | 0–2 | 02, 03, 05, 07, 08, 15 | Bağımsız pseudocode/trace; AI algoritmasında termination ve correctness review |
| `V01-C05`–`V01-C08` | 0–2 | 02, 03, 07, 08, 09, 15 | Bağımsız model/kod; boundary tests; AI output trace ve düzeltme |
| `V01-C09`–`V01-C12` | 0–2 | 02, 05, 07, 08, 09, 15 | Truth/path/loop trace; unreachable veya non-terminating AI code review |
| `V01-C13`–`V01-C16` | 1–3 | 03, 05, 06, 07, 08, 15 | Function contract; bounded diff; test; cohesion ve side-effect review |
| `V01-C17`–`V01-C20` | 1–3 | 02, 03, 06, 07, 08, 09 | Collection/data invariant; edge-case tests; mutation/recursion review |
| `V01-C21`–`V01-C23` | 1–3 | 02, 05, 07, 08, 13, 15 | Correctness trace; complexity evidence; benchmark interpretation |
| `V01-C24`–`V01-C27` | 1–3 | 07, 08, 09, 12, 13, 15 | Failure reproduction; hypothesis log; test/refactor diff; provenance |
| `V01-C28` | 2–4 | 03–10, 12, 14, 15 | Issue → plan → bounded AI diff → test → PR → technical defense |
| `V01-C29`–`V01-C38` | 2–4 | 02, 04, 06–10, 12, 14, 15 | JavaScript runtime evidence; lint/test; tooling and module review; PR |

## Academies 02–26 Mapping

| Academy and complete Chapter range | Level | Primary competencies | Required evidence profile |
| --- | ---: | --- | --- |
| Academy 02, `academy-02/chapter-01`–`08` | 1–3 | 03, 05, 06, 08, 15 | Responsibility/invariant model; AI design review; refactor defense |
| Academy 03, `academy-03/chapter-01`–`09` | 1–3 | 02, 05, 07, 08, 13, 15 | Independent algorithm; correctness/complexity proof; AI audit |
| Academy 04, `academy-04/chapter-01`–`06` | 1–4 | 04, 08, 12, 14, 15 | Branch/commit/PR history; diff review; provenance and defense |
| Academy 05, `academy-05/chapter-01`–`07` | 1–4 | 04, 09, 10, 11, 15 | Command plan; permission/risk check; sandbox evidence; recovery |
| Academy 06, `academy-06/chapter-01`–`10` | 2–4 | 03, 07, 08, 11, 14, 15 | Schema/query plan; migration; data-loss/rollback and SQL review |
| Academy 07, `academy-07/chapter-01`–`06` | 1–3 | 03, 06, 07, 08, 15 | Semantic document; validator; accessibility tree; AI markup audit |
| Academy 08, `academy-08/chapter-01`–`08` | 1–3 | 04, 06, 07, 08, 15 | Responsive visual evidence; accessibility and regression review |
| Academy 09, `academy-09/chapter-01`–`05` | 2–3 | 04, 06, 08, 12, 15 | Token/design-system context; utility diff; consistency review |
| Academy 10, `academy-10/chapter-01`–`10` | 2–4 | 02, 04, 06, 07, 08, 09, 15 | Runtime trace; tests; async/error audit; corrected implementation |
| Academy 11, `academy-11/chapter-01`–`08` | 2–4 | 03, 06, 07, 08, 15 | Type model; boundary checks; `any`/assertion audit; compiler evidence |
| Academy 12, `academy-12/chapter-01`–`08` | 2–4 | 03, 04, 06, 07, 08, 15 | State/effect model; component tests; accessibility and render review |
| Academy 13, `academy-13/chapter-01`–`08` | 3–5 | 03, 04, 07, 10, 11, 14, 15 | Server/client contract; security/E2E checks; deployment evidence |
| Academy 14, `academy-14/chapter-01`–`07` | 3–5 | 03–11, 14, 15 | API/data/job contract; observability; security; PR/release review |
| Academy 15, `academy-15/chapter-01`–`08` | 3–5 | 03, 04, 07, 08, 11, 14, 15 | Contract-first API; compatibility, failure and security evidence |
| Academy 16, `academy-16/chapter-01`–`08` | 2–5 | 07–12, 15 | Threat model; secret/permission audit; security tests; human approval |
| Academy 17, `academy-17/chapter-01`–`08` | 3–5 | 03, 04, 07, 10–14, 15 | IaC plan/diff; least privilege; cost, rollback and audit trail |
| Academy 18, `academy-18/chapter-01`–`07` | 2–5 | 04, 07, 10–12, 14, 15 | Image/Dockerfile audit; SBOM; supply-chain and runtime evidence |
| Academy 19, `academy-19/chapter-01`–`08` | 3–5 | 07, 10–14, 15 | Pipeline gates; deployment/rollback; incident and agent audit trail |
| Academy 20, `academy-20/chapter-01`–`08` | 2–5 | 03–05, 08, 12, 15 | Alternatives; ADR; constraint/trade-off review; architecture defense |
| Academy 21, `academy-21/chapter-01`–`08` | 2–4 | 02, 05, 07, 08, 15 | Smell evidence; pattern alternatives; test-protected refactor |
| Academy 22, `academy-22/chapter-01`–`08` | 2–5 | 03, 07–09, 13, 15 | Oracle/coverage model; generated-test audit; mutation/regression evidence |
| Academy 23, `academy-23/chapter-01`–`09` | 3–5 | 03–05, 08, 11, 13, 15 | Capacity model; failure modes; trade-offs; architecture defense |
| Academy 24, `academy-24/chapter-01`–`10` | 3–5 | 01–15 | Dataset/model provenance; eval; safety; cost/latency; production review |
| Academy 25, `academy-25/chapter-01`–`08` | 1–4 | 08, 12, 14, 15 | Portfolio provenance; AI-assisted practice; AI-free live defense |
| Academy 26, `academy-26/chapter-01`–`08` | 5 | 01–15 | End-to-end issue/PR/CI/release record; operations and jury defense |

## AI Mentor Policy per Chapter

AI Mentor her Chapter'da aynı pedagojik güvenlik sırasını izler:

- öğrencinin ilk düşüncesini ve denemesini ister;
- tek seferde en küçük ilerletici ipucunu verir;
- final answer veya final code'u assessment sırasında vermez;
- kaynak, test veya gözlenebilir davranışla doğrulama ister;
- hatalı mental model tekrar ediyorsa uygun prerequisite'e yönlendirir;
- secret, kişisel veri, destructive command ve permission escalation durumunda
  çalışmayı durdurur;
- Chapter sonunda AI kapalı açıklama ve teknik savunma uygular.

## Validation

- Akademi 01 kapsamı: 38/38 kanonik Chapter.
- Akademi 02–26 kapsamı: 198/198 yerel Chapter adayı.
- Toplam kapsam: 236/236 üretim birimi.
- Yetkinliksiz Chapter: 0.
- AI kapalı bağımsız çalışma zorunluluğu: 236/236.
- Verification/review ve teknik savunma kanıtı: 236/236.
- Yeni kanonik Learning Outcome veya Chapter ID: 0.
- C03 mapping, Research Packet içindeki özel sözleşmeyle uyumludur.

## References

- [AI-Native Competency Framework](./asea-ai-native-competency-framework.md)
- [26-Academy Pedagogical Chapter Map](./asea-26-academy-pedagogical-chapter-map.md)
- [Research Production Queue](./asea-26-academy-research-production-queue.md)
- [C03 Research Packet](../docs/01-programming/programming-fundamentals/research/v01-c03/research-packet.md)
