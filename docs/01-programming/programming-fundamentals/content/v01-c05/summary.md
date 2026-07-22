---
supporting_document_id: "V01-C05-SD-COMP-003"
supporting_document_type: "Compatibility Report"
title: "V01-C05 One-Page Summary"
version: "0.1.0"
status: "Draft"
owner: "Content Maintainer"
scope_id: "V01-C05"
source_document: "../../../chapters/05-degerler-ve-veri-turleri.md"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C05 Tek Sayfalık Özet

## Core Model

`Domain meaning → Value → Data type rules + Representation`. Literal source notation’dır;
runtime value veya external input ile aynı şey değildir.

## Classification Questions

1. Field neyi ifade ediyor?
2. Hangi values valid?
3. Hangi operations meaningful?
4. Format/leading zeros/unit significant mı?
5. Range/precision nedir?
6. Absence nasıl temsil edilir?

## JavaScript Boundaries

- Primitives: Undefined, Null, Boolean, Number, BigInt, String, Symbol.
- `typeof null === "object"` historical exception’dır.
- `NaN` Number type içindedir.
- Safe integer upper bound `9007199254740991`.
- String `.length` UTF-16 code units sayar.
- `Boolean("false") === true`.

## Conversion Checklist

Raw input’u koru → full source grammar validate et → domain meaning/unit doğrula → explicit
convert et → target range/precision doğrula → accept/reject ve reason kaydet.

## Loss Test

- Precision loss: ayrı numeric values target’ta ayırt edilemiyor.
- Meaning loss: leading zero, unit, absence state veya format gibi domain information siliniyor.

## Completion Evidence

En az on gerekçeli classification ve normal/boundary/invalid/ambiguous cases içeren conversion
matrix. AI output yalnız independent first attempt sonrası audit edilir.
