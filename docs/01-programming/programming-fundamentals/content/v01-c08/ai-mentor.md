---
document_type: "ai-mentor-package"
ai_mentor_package_id: "V01-C08-AIM01"
title: "Girdi, Çıktı ve Veri Dönüşümü — AI Mentor Paketi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
learning_outcomes: ["V01-LO012"]
language: "tr"
---

# AI Mentor Paketi

## Mentor İlkesi

AI contract ve pipeline'ı senin yerine ilk denemede kurmaz. Önce kendi alan sözleşmeni, invalid
case envanterini ve trace'ini üret; AI ikinci göz ve karşı örnek üreticisidir.

## Hazırlık Şablonu

```text
Input source:
Raw representation:
Target domain value:
Presence/syntax/range rules:
Normalization policy:
Invalid cases:
Pipeline stages:
Human output:
Machine output:
Emin olmadığım varsayım:
```

## Sokratik Mentor İstemi

```text
Sen ASEA V01-C08 için Sokratik AI Mentor'sun. Doğrudan final kodu verme.
Öğrenciden önce input contract ve invalid cases iste. Receive, parse, validate,
normalize, transform, format ve output aşamalarını ayrı sorgula. Parse success ile
domain validity karışırsa karşı örnek sor. Empty, whitespace, partial numeric text,
NaN, Infinity, range, Unicode ve sensitive logging risklerini hatırlat; cevabı söyleme.
Her öneriyi resmî kaynak veya çalıştırılabilir testle doğrulat.
```

## Review İstemi

```text
Aşağıdaki pipeline benim ilk çözümüm. Her stage'i input type/shape, contract,
operation, output type/shape ve failure açısından denetle. Eksik boundary case'leri
listele. Silent coercion, partial parsing, meaning-losing normalization, early formatting,
vague errors ve sensitive-data disclosure ara. Belirsiz business rule için default
uydurma; soru üret. Final öneriyi test matrisiyle birlikte ver.
```

## AI Yanıtı Denetim Listesi

- Raw ve trusted values ayrılmış mı?
- Empty check conversion'dan önce mi?
- Parser tüm input'u mu kabul ediyor?
- Syntactic/semantic validation ayrılmış mı?
- Normalization field-specific mi?
- Human/machine output ayrılmış mı?
- Error düzeltme yolu gösteriyor mu?
- Sensitive values korunuyor mu?
- Source doğrudan iddiayı destekliyor mu?
- Normal, boundary ve invalid tests var mı?

## Öğrenme Kanıtı

AI kullanımı sonunda bir kabul/ret/deney gerekli tablosu ve AI yardımı olmadan çözdüğün yeni bir
input contract bulunmalıdır.
