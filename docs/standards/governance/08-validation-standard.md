---
document_type: "standard"
standard_id: "ASEA-STD-GOV-VALIDATION-001"
title: "ASEA Validation Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Validation Standard v1.0

## Purpose

Bu standart, Repository Standard v2 doğrulama sırasını çalıştırılabilir Validation Report, check sonucu, severity ve freeze/release gate sözleşmesiyle tamamlar.

## Scope

Metadata, document structure, ID, dependency, traceability, relative links, duplicate IDs, legacy usage, filler/unfinished content, code/Mermaid ve governance evidence validation’ını kapsar.

## Required Metadata

```yaml
---
document_type: "validation-report"
validation_report_id: "V01-VR001"
title: "Volume 01 Blueprint Validation Report"
version: "1.0.0"
status: "Stable"
validation_type: "Blueprint"
scope_id: "V01-BP01"
scope_version: "1.0.0"
validated_on: "2026-07-17"
validator_version: "1.0.0"
result: "Pass"
check_count: 120
failure_count: 0
warning_count: 0
evidence_paths:
  - "../reviews/validation-output.txt"
---
```

## Document Type

`document_type: validation-report`. `validation_type`: `Repository`, `Curriculum`, `Volume`, `Blueprint`, `Chapter`, `Content`, `Assessment`, `Governance`, `Migration`, `Release`. `result`: `Pass`, `Fail`, `Pass with Warnings`.

## ID Convention

Biçim: `{SCOPE}-VR{NNN}`. Örnek: `V01-VR001`, `V01-C01-VR001`, `ASEA-VR001`. Aynı scope/version için yeniden çalışma yeni ID veya aynı Draft record içinde yeni run entry üretir; Stable report değiştirilmez.

## Status Lifecycle

Belge: `Draft → Review → Stable → Deprecated → Archived`. Run: `Queued → Running → Completed | Failed to Run`. `Failed to Run`, validation `Fail` ile aynı değildir ve freeze/release’i yine engeller.

## Versioning Rules

- Validator version ile report version ayrı tutulur.
- Check contract değişikliği validator MAJOR/MINOR artırır.
- Aynı contract altında implementation fix PATCH’tir.
- Stable report immutable’dır; yeni scope version yeni report gerektirir.

## Required Sections

1. `Validation Scope`
2. `Validator Environment`
3. `Checks Executed`
4. `Results Summary`
5. `Failures`
6. `Warnings`
7. `Evidence`
8. `Reproduction`
9. `Conclusion`
10. `References`

## Validation Rules

Kontroller aşağıdaki sırayla uygulanır:

1. **Inventory:** Beklenen/beklenmeyen/boş dosyalar.
2. **Naming:** Lowercase kebab-case ve açık istisnalar.
3. **Metadata:** YAML parse, document type, required fields, enums.
4. **Document structure:** Tek H1, zorunlu H2 sırası, heading hierarchy.
5. **IDs:** Pattern, scope, benzersizlik, yeniden kullanım.
6. **Versions/status:** SemVer ve geçiş kuralları.
7. **Dependencies:** Var olan hedefler, acyclic graph, prerequisite order.
8. **Traceability:** Outcome–artefact çift yönlü coverage ve authority.
9. **Links/assets:** Relative links, anchors ve asset paths.
10. **Content hygiene:** Unfinished/filler markers, boş bölüm, accidental lesson/code leakage.
11. **Technical blocks:** Language tags, runnable examples, Mermaid parse.
12. **Legacy detection:** Aktif legacy metadata, IDs, status ve standard links.
13. **Governance:** Decision, Review, Audit, Validation ve Freeze evidence.
14. **Manifest/release:** Counts, paths, versions ve immutable references.

Her check `pass`, `fail` veya gerekçeli `not-applicable` üretir. Warning gate davranışı ilgili standarda göre açıklanır. Critical veya Major fail, `Pass` sonucunu yasaklar.

### Legacy Detection

Legacy metin migration mapping veya archived evidence olarak etiketliyse hata değildir. Aktif relationship key, Front Matter alanı veya authoritative registry değeri olarak kullanılıyorsa fail’dir.

### Duplicate Detection

Aynı ID’nin referans olarak tekrarı normaldir. Duplicate yalnız aynı ID iki document identity veya iki authoritative record tarafından sahiplenildiğinde oluşur.

## Examples

| Check ID | Check | Result | Evidence |
|---|---|---|---|
| `VAL-META-001` | Required Front Matter fields | pass | Parsed schema output |
| `VAL-ID-001` | Duplicate document identities | pass | Identity registry |
| `VAL-LINK-001` | Relative link targets | fail | Missing target list |

## DoD (Definition of Done)

- Scope/version validator girişleriyle eşleşir.
- Bütün zorunlu check grupları çalışmıştır.
- Count alanları gerçek sonuçlarla eşleşir.
- Failure ve warning evidence yeniden üretilebilirdir.
- Result severity kurallarıyla uyumludur.
- Reproduction command/environment kaydedilmiştir.
- Validation Review tamamlanmıştır.

## References

- [Repository Standard v2.0](../repository-standard-v2.md)
- [Traceability Standard](./03-traceability-standard.md)
- [Audit Standard](./07-audit-standard.md)
- [Freeze Standard](./05-freeze-standard.md)
