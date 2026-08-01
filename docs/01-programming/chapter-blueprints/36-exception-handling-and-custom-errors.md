---
document_type: "blueprint"
blueprint_id: "V01-C36-BP01"
scope_id: "V01-C36"
title: "Chapter 36 Blueprint — Exception Handling and Custom Errors"
version: "0.1.0"
status: "Draft"
prerequisites:
  - "V01-C10"
  - "V01-C13"
  - "V01-C15"
  - "V01-C29"
learning_outcomes:
  - "V01-LO061"
  - "V01-LO062"
planned_artifacts: ["V01-C36", "V01-C36-L01", "V01-C36-QZ01", "V01-C36-AS01"]
---
# C36 Blueprint — Exception Handling and Custom Errors

## Purpose

Throw/catch propagation'ı call trace ile öğretmek; recovery-capable exception boundary
ve stable custom error contract tasarlatmak.

## Scope

- `throw`, `try/catch/finally`, propagation ve stack yönelimi.
- Built-in Error categories, custom Error class, `cause`, stable `code/details`.
- Narrow try scope, selective catch, rethrow, normalization.
- Expected validation outcome ile exceptional failure seçimi.
- Cleanup in finally; finally return/throw tehlikesi.
- State mutation öncesi validation ve atomic transition.

Out: async rejection, distributed retries, observability platformları ve full security
error-redaction programı.

## Learning Outcomes

- **LO061 (Apply):** Hataları uygun boundary'de catch/classify/recover/rethrow ederek
  state ve cleanup sözleşmesini korumak.
- **LO062 (Create):** Stable code, safe details, cause ve recovery policy taşıyan custom
  error hierarchy/contract üretmek.

## References

- [ECMAScript try Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-try-statement)
- [ECMAScript Error Objects](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-error-objects)
