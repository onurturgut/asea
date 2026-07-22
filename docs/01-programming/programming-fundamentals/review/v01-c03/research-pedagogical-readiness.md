---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-020"
supporting_document_type: "Compatibility Report"
title: "V01-C03 Research Pedagogical Readiness Audit"
version: "0.1.0"
status: "Review"
scope_id: "V01-C03-SD-IDX-001"
authority: "Informational"
owner_role: "Learning Designer"
source_ids:
  - "V01-C03-SD-IDX-001"
  - "V01-LO005"
derived_from:
  - "../../research/v01-c03/research-packet.md"
  - "../../../../../production/lesson-authoring-standard.md"
x-audited-on: "2026-07-22"
x-audit-kind: "author-side-pedagogical-readiness"
---

# V01-C03 Research Pedagogical Readiness Audit

## Purpose

C03 araştırmasının başlangıç seviyesindeki bir öğrenciyi problem tanımlama,
sınırlandırma ve ayrıştırma yeterliğine götürecek öğretim tasarımını destekleyip
desteklemediğini incelemek.

## Scope

İnceleme; prior knowledge activation, progressive disclosure, mental model,
worked example, guided/independent practice, misconception repair, cognitive
load, AI Mentor davranışı, assessment alignment ve transfer kapsamındadır.

Bu belge bağımsız Pedagogical Review yerine geçmez ve öğrenci pilotu sonucu
üretmez.

## Ownership

- Audit hazırlığı: Learning Designer
- Bağımsız pedagojik karar: atanacak Pedagogical Reviewer
- Assessment güvenilirliği: Assessment Reviewer
- Öğrenci deneyimi kanıtı: gerçek başlangıç seviyesi pilot katılımcıları

## Content

### Validation method

1. Her beklenen öğrenci davranışı `V01-LO005` ile karşılaştırıldı.
2. Motivation → Mental Model → Explanation → Example → Guided Practice →
   Independent Practice → Assessment → Reflection akışı tasarlandı.
3. Her kavram için sezgisel model, teknik sınır, non-example ve kontrol noktası
   bulunabilirliği değerlendirildi.
4. C01–C02 prerequisites için kısa retrieval check tasarlandı.
5. AI yardımından önce bağımsız deneme zorunluluğu doğrulandı.
6. Bloom kapsamı Remember/Understand ile sınırlı kalmayacak biçimde Apply,
   Analyze ve Evaluate davranışlarına bağlandı.

### Pedagogical findings

| ID | Severity | Status | Evidence | Impact | Required resolution |
| --- | --- | --- | --- | --- | --- |
| `C03-PR-001` | Minor | Open | Kurumsal requirements vocabulary geniş | Başlangıç öğrencisinde cognitive overload | Ana anlatımda dört canonical Concept'i omurga yap; ileri terimleri progressive disclosure ile ver |
| `C03-PR-002` | Minor | Open | Constraint/assumption ve edge/invalid çiftleri yakın | Sınıflandırma hatası | Contrast table ve counterexample kullan |
| `C03-PR-003` | Observation | Resolved for Draft | C03 kod üretmeyen bir chapter | Öğrenci “programlama yapmadım” hissine kapılabilir | Ticket pricing senaryosunu C04'e taşınan görünür artefact ile bitir |
| `C03-PR-004` | Major for Stable | Open | Gerçek beginner pilot verisi yok | Süre ve açıklık doğrulanamaz | Stable öncesi en az beş başlangıç öğrencisiyle pilot uygula |

### Learning flow contract

| Stage | Student activity | Evidence |
| --- | --- | --- |
| Motivation | Belirsiz bir ticket'ın neden koddan önce risk taşıdığını tahmin eder | İlk tahmin |
| Mental Model | Problem space ile solution space'i ayırır | İki sütunlu model |
| Explanation | Problem contract alanlarını kendi cümlesiyle açıklar | Not defteri kaydı |
| Worked Example | Ticket pricing örneğini adım adım sınırlar | Tamamlanmış contract |
| Guided Practice | Eksik bir contract'ı sorularla onarır | Düzeltme gerekçeleri |
| Independent Practice | Yeni senaryoyu AI olmadan ayrıştırır | `V01-C03-EX01` |
| AI Audit | AI önerisindeki invented requirement ve eksik edge case'i bulur | Review tablosu |
| Assessment | Contract + decomposition + technical defense üretir | `V01-C03-AS01` |
| Reflection | Yanlış varsayımını ve bir sonraki doğrulama adımını açıklar | Reflection log |

### Bloom and scaffolding

- **Remember:** Terimlerin adlarını geri çağırır.
- **Understand:** Problem ile çözüm fikrini açıklar.
- **Apply:** Verilen senaryoda contract alanlarını doldurur.
- **Analyze:** Constraint/assumption, edge/invalid ve responsibility/dependency
  ilişkilerini ayırır.
- **Evaluate:** AI önerisini acceptance criteria ve evidence ile inceler.
- **Create:** Yeni bir scenario için problem contract ve decomposition üretir.

### Decision boundary

Araştırma, Draft ana ders ve Chapter Production Packet tasarımına pedagojik
olarak yeterli girdi sağlar. Stable iddiası bağımsız reviewer ve öğrenci pilotu
olmadan kullanılamaz.

## Validation

- `V01-LO005` teaching coverage: PASS.
- Prerequisite activation: PASS.
- Progressive difficulty: PASS.
- Independent attempt before AI: PASS.
- Bloom Apply/Analyze/Evaluate/Create: PASS by design.
- Pilot evidence: PENDING.
- Sonuç: **Draft production pedagogically ready; independent review pending**.

## References

- [Research Packet](../../research/v01-c03/research-packet.md)
- [Technical Readiness Audit](./research-technical-readiness.md)
- [Lesson Authoring Standard](../../../../production/lesson-authoring-standard.md)
- [Chapter Standard v2](../../../../standards/chapter-standard-v2.md)
- [C02 Reference Chapter](../../content/v01-c02/chapter.md)
