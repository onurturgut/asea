---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-021"
supporting_document_type: "Compatibility Report"
title: "Examples: Pseudocode"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C04-SD-COMP-010"
derived_from:
  - "../../research/lesson-04/research-packet.md"
x-production-unit: "lesson-04"
x-content-language: "tr-TR"
---

# Sözde Kod (Pseudocode) — Örnekler

**Terminoloji standardı:** anahtar sözcük (Keyword), atama (Assignment), koşul
(Condition), seçim (Selection), yineleme (Iteration), yordam (Procedure), dönüş
(Return), elle izleme (Dry Run) ve izleme tablosu (Trace Table). Sonraki
kullanımlar Türkçedir.

## Purpose

Sözde kod yapılarının açık ve izlenebilir kullanımını göstermek.

## Scope

Örnekler yalnız `V01-C04` sözde kod segmentini kapsar.

## Ownership

Örnekler [Research Packet](../../research/lesson-04/research-packet.md) içindeki
doğrulanmış önerilerden türetilmiştir.

## Content

### Basit Örnekler

```pseudocode
INPUT birinci, ikinci
IF birinci >= ikinci
  OUTPUT birinci
ELSE
  OUTPUT ikinci
END IF
```

Bu örnekte girdi, iki olası dal ve tek çıktı açıkça görünür.

### Gerçek Hayat Örnekleri

```pseudocode
SET deneme TO 0
WHILE deneme < 3
  INPUT pin
  IF pin doğruysa
    OUTPUT "Giriş başarılı"
    RETURN
  END IF
  SET deneme TO deneme + 1
END WHILE
OUTPUT "Deneme sınırı doldu"
```

Deneme sayısının artması ilerlemeyi, `deneme < 3` koşulu sonlanmayı gösterir.

### Yanlış Örnekler

```pseudocode
IF puan geçerliyse
  IF puan >= 50
    OUTPUT "Geçti"
ELSE
  OUTPUT "Geçersiz"
```

Blok sonları bulunmadığı için `ELSE` dalının hangi koşula ait olduğu belirsizdir.

### Doğru Örnekler

```pseudocode
IF puan geçerliyse
  IF puan >= 50
    OUTPUT "Geçti"
  ELSE
    OUTPUT "Kaldı"
  END IF
ELSE
  OUTPUT "Geçersiz"
END IF
```

Açık son işaretleri ve girinti, her dalın sahipliğini gösterir.

### Açıklamalar

Sözde kodun amacı belirli bir dilin sözdizimini taklit etmek değil, kontrol
akışını tartışmasız kılmaktır. PIN örneğinde sayaç artmasaydı döngünün çıkış
koşuluna ilerlediği gösterilemezdi.

### Öğrenme Notları

- Her örneği en az normal ve sınır girdisiyle elle izleyin.
- Atama ile karşılaştırmayı aynı gösterimle yazmayın.
- Döngü gövdesinde hangi değerin ilerlediğini işaretleyin.
- Okunabilirliği doğruluk kanıtı olarak yorumlamayın.

## Validation

- Kod blokları çalıştırılabilir program değil, sözde kod olarak etiketlendi.
- Değerlendirme veya exercise üretilmedi.

## References

- [Research Packet](../../research/lesson-04/research-packet.md)
