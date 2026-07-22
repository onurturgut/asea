---
document_type: "supporting-document"
supporting_document_id: "V01-C07-SD-IDX-001"
supporting_document_type: "Index"
title: "V01-C07 Operators and Expressions Research Packet"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C07"
authority: "Derived"
owner_role: "Research Engineer"
prerequisite_ids: ["V01-C05", "V01-C06"]
learning_outcome_ids: ["V01-LO011"]
source_ids: ["ASEA-SRC-000001", "ASEA-SRC-000003"]
evidence_ids: ["ASEA-EV-000009", "ASEA-EV-000012"]
claim_ids: ["ASEA-CLM-000026", "ASEA-CLM-000027", "ASEA-CLM-000028"]
concept_ids: ["ASEA-CON-000026", "ASEA-CON-000027", "ASEA-CON-000028"]
generated_date: "2026-07-22"
language: "tr"
---

# V01-C07 Operators and Expressions Research Packet

## Overview

Bu paket compound expression’ları operand type, operator semantics, implicit conversion,
precedence, associativity, grouping ve intermediate result üzerinden güvenilir biçimde
değerlendirmek için üretim girdisidir.

## Learning Goals

`V01-LO011`: Öğrenci compound expression sonucunu precedence, grouping ve ara types ile
doğru hesaplar; ambiguous expression’ı explicit grouping veya named intermediates ile açıklar.

## Official Sources

ECMA-262 2026 expressions/evaluation clauses; ACM/IEEE-CS/AAAI CS2023 SDF; IEEE 754-2019
numeric context; Unicode 17.0 String comparison boundary.

## Supporting Sources

MDN Expressions and Operators, Operator Precedence, Arithmetic Operators, Comparison,
Equality and Sameness, Addition, Remainder, Exponentiation; ESLint `eqeqeq`,
`no-implicit-coercion`, `no-mixed-operators`. Araştırma envanteri 18 maintained source’dur.

## Concept Coverage

`ASEA-CON-000026` operator/operand; `000027` evaluation; `000028` precedence/grouping.
Concepts language-neutral başlar, ECMAScript behavior bounded example olarak kullanılır.

## Claim Coverage

Claims `ASEA-CLM-000026`–`000028` semantic modification olmadan kullanılır. Her claim bir
evaluation table, type trace veya grouping rewrite ile observable evidence üretir.

## Evidence Mapping

CS2023 curriculum scope’u; ECMA-262 normative runtime behavior’ı; MDN maintained explanation’ı;
ESLint tool policy’yi destekler. Tool rules language law olarak sunulmaz.

## Terminology

İfade (Expression), işleç (Operator), işlenen (Operand), değerlendirme (Evaluation), öncelik
(Precedence), birleşme yönü (Associativity), gruplama (Grouping), ara değer (Intermediate
Value), örtük dönüştürme (Coercion), yan etki (Effect).

## Mental Models

Expression tree: leaves operands, internal nodes operators. Önce parse/grouping tree kurulur;
sonra operands language-defined order’da değerlendirilir, conversions görünür kaydedilir ve
typed intermediate result üst node’a taşınır.

## Historical Context

Operator notation mathematical conventions’dan etkilenir fakat programming languages
assignment, String concatenation, coercion, short-circuit ve effects ekler. Bu nedenle okul
aritmetiği yararlı fakat eksik modeldir.

## Technical Details

Arithmetic: `+ - * / % **`; unary `+/-`; comparison `< <= > >=`; equality `=== !==` ve
bounded explanation of `== !=`; assignment expression; String concatenation. Precedence
parse grouping’i, associativity same-precedence grouping’i belirler. Operand evaluation order
ayrı kavramdır. `**` right-associative; most arithmetic left-associative; assignment right-associative.

## Code References

Required traces: `3 + 4 * 5`; `(3 + 4) * 5`; `10 - 3 - 2`; `2 ** 3 ** 2`;
`"5" + 1`; `"5" - 1`; `0.1 + 0.2`; strict/loose equality; chained assignment;
effectful operand calls; `NaN`, `-0`, division by zero.

## Best Practices

Predict before run; annotate operand types; expand intermediate results; prefer `===`/`!==`;
make conversion explicit; group for reader intent; split dense expressions; separate calculation
from assignment/effects; test boundaries.

## Common Mistakes

Reading strictly left-to-right; confusing precedence with evaluation order; assuming `+` always
adds; using `==` without conversion proof; treating `%` as mathematical modulo in all signs;
assuming parentheses fix type errors; comparing floating-point results naively.

## Edge Cases

Empty String, whitespace, null/undefined, NaN, Infinity, `-0`, BigInt/Number mixing, safe integer
boundary, negative remainder, Unicode-equivalent Strings, object identity, effectful operands.

## Real World Examples

Pricing calculations, unit conversion, percentage, eligibility predicate preview, retry budget,
pagination offset, form-derived arithmetic, data transformation expressions.

## Interview Notes

Candidate must state grouping, operand types, conversions, intermediate values, final result and
readability rewrite. Strong answer distinguishes precedence, associativity and operand order.

## Exercise Ideas

Annotate operators/operands; build expression trees; trace 20 expressions; repair coercion;
compare implicit/explicit grouping; name intermediates; diagnose precision and boundary cases.

## Quiz Ideas

25 items: 7 recall/understanding, 10 applied traces, 6 analysis/repair, 2 transfer. Answer key
separate and post-attempt.

## Lab Ideas

Build evaluator table with columns source, implicit grouping, operand values/types, operation,
conversion, intermediate result/type, effect, final result and clearer rewrite.

## Animation Ideas

Expression tree reduction; precedence-to-parentheses transformation; type flow through `+`;
effectful operand timeline. Static text/table alternative mandatory.

## Further Reading

ECMA-262 clauses are normative. MDN precedence table aids navigation, not memorization.
ESLint policies demonstrate review automation. C09 will deepen Boolean logic/short-circuit.

## Review Notes

Do not say precedence alone determines operand evaluation order. Do not teach `==` folklore;
show strict equality default and bounded conversion evidence. Preserve C08/C09 boundaries.

## Approval

Repository Owner authorizes Draft production. Student pilot remains deferred until Academy 01
content completion.

## Version

Packet `0.1.0`; sources accessed 2026-07-22; ECMAScript edition 2026.

## Status

**Research Complete — Ready for Draft Production.**

### References

- [ECMAScript 2026 Expressions](https://tc39.es/ecma262/2026/multipage/ecmascript-language-expressions.html)
- [MDN Expressions and Operators](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN Operator Precedence](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [MDN Equality and Sameness](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
- [MDN Addition](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Addition)
- [MDN Remainder](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Remainder)
- [MDN Exponentiation](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [ESLint eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
- [ESLint no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
- [ESLint no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
- [CS2023](https://csed.acm.org/)
- [IEEE 754-2019](https://standards.ieee.org/ieee/754/6210/)
- [Unicode 17.0](https://www.unicode.org/versions/Unicode17.0.0/)
- [MDN Comparison Operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [MDN Assignment](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Assignment)
- [MDN Unary Plus](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [MDN BigInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [MDN Number.isFinite](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)
