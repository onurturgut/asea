---
document_type: "lab"
document_id: "V01-C31-L01"
chapter_id: "V01-C31"
title: "Build and Defend a Progress Pipeline"
version: "0.1.0"
status: "Draft"
---

# Lab — Build and Defend a Progress Pipeline

## Görev

C30 factory'sinden çıkan StudentProgress object array'i için dashboard özeti üretin.

## Gereksinimler

- Input'un array olduğunu ve element sözleşmesini sınırda doğrulayın.
- Active öğrencileri seçin.
- `{ studentId, displayName, completionRate }` kartları üretin.
- Completed chapter total ve average rate hesaplayın.
- Empty input ve no-active state'i yönetin.
- Source array ve element object'leri mutate etmeyin.
- Kartları rate'e göre non-mutating biçimde sıralayın.

## Kanıt Dosyası

| Aşama | Element type | Length | Root identity | Element paylaşımı |
| --- | --- | ---: | --- | --- |
| source | | | | |
| active | | | | |
| cards | | | | |
| sorted cards | | | | |

## Başarı Kapısı

En az sekiz test geçmeli; empty/no-match bulunmalı. Öğrenci mutation tercihinin
gerekçesini ownership, history ve allocation ölçütleriyle sözlü savunmalıdır.
