---
document_type: "supporting-document"
supporting_document_id: "V01-C05-SD-REF-001"
supporting_document_type: "References"
title: "V01-C05 Source Strategy"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C05"
authority: "Derived"
owner_role: "Research Engineer"
generated_date: "2026-07-22"
language: "en"
---

# V01-C05 Source Strategy

## Purpose

Define the evidence hierarchy and research boundary for Values and Data Types before
educational production.

## Research Questions

1. What distinguishes a value, a data type, a literal, and a representation?
2. Which value families are necessary for a beginner mental model?
3. How do numeric and textual representations expose precision or interpretation risks?
4. Which conversions preserve meaning, which lose information, and which must fail?
5. How should a learner verify an AI-proposed data model or conversion?

## Source Hierarchy

| Tier | Role | Sources |
|---|---|---|
| 1 | Normative language and interchange behavior | ECMA-262, RFC 8259, WHATWG HTML |
| 1 | Representation authority | IEEE 754-2019, Unicode Standard 16.0 |
| 1 | Curriculum scope | ACM/IEEE-CS/AAAI CS2023 |
| 2 | Maintained explanatory documentation | MDN JavaScript Guide and Reference |
| 3 | Context only | No community source is used as primary evidence |

## Selection Rules

- Prefer normative clauses over tutorials for behavioral claims.
- Record edition or living-standard access date.
- Keep technology-neutral definitions separate from ECMAScript examples.
- Use at least two independent authorities for high-risk representation claims.
- Reject sources that do not expose authorship, version, or stable ownership.
- Do not infer business meaning from a source value's visual form.

## Scope Boundary

Included: values, literals, primitive types, number, BigInt orientation, text, Boolean,
absence, representation, explicit and implicit conversion, precision and meaning loss,
and equality as a type-sensitive observation.

Deferred: variable bindings (`V01-C06`), operator semantics (`V01-C07`), input/output
pipelines (`V01-C08`), full Unicode text processing, collections, serialization design,
database types, and static type-system theory.

## Validation

Every lesson-critical statement must be traceable to a source in the Research Packet.
All code observations must be reproducible in a current ECMAScript runtime. URLs are
checked during production validation; mutable documentation is recorded with access date.
