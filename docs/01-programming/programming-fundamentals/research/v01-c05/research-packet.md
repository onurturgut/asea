---
document_type: "supporting-document"
supporting_document_id: "V01-C05-SD-IDX-001"
supporting_document_type: "Index"
title: "V01-C05 Values and Data Types Research Packet"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C05"
authority: "Derived"
owner_role: "Research Engineer"
prerequisite_ids: ["V01-C02", "V01-C04"]
learning_outcome_ids: ["V01-LO007", "V01-LO008"]
source_ids: ["ASEA-SRC-000001", "ASEA-SRC-000013", "ASEA-SRC-000018", "ASEA-SRC-000020"]
evidence_ids: ["ASEA-EV-000009", "ASEA-EV-000012"]
claim_ids: ["ASEA-CLM-000020", "ASEA-CLM-000021", "ASEA-CLM-000022", "ASEA-CLM-000023"]
concept_ids: ["ASEA-CON-000020", "ASEA-CON-000021", "ASEA-CON-000022", "ASEA-CON-000023"]
knowledge_snapshot: "1.0.0"
graph_snapshot: "1.0.1"
generated_date: "2026-07-22"
updated_date: "2026-07-22"
language: "tr"
---

# V01-C05 Values and Data Types Research Packet

## Overview

Bu paket, öğrencinin bir veriyi yalnız görünüşüne göre değil; domain meaning, value,
type ve representation özelliklerine göre sınıflandırmasını ve conversion kaybını
kanıtla belirlemesini sağlayacak C05 üretiminin tek araştırma girdisidir.

Araştırma sorusu: “Bir programın işlediği bilgi hangi value’dur, hangi type kurallarına
tabidir, nasıl temsil edilir ve başka bir type’a dönüştürülürken ne kaybedilebilir?”

## Learning Goals

- `V01-LO007`: En az on örnek değeri tür ve temsil özelliğine göre doğru sınıflandırmak.
- `V01-LO008`: Dönüşüm sırasında precision veya meaning kaybını verilen örneklerde belirlemek.

Başarı; kavram tanımı ezberlemek değil, classification ve conversion kararını normal,
boundary, invalid ve ambiguous örneklerle savunmaktır.

## Official Sources

1. ECMA-262 2025: language types, values, numeric types, abstract conversions, literals.
2. IEEE 754-2019: floating-point arithmetic formats and rounding behavior.
3. Unicode Standard 16.0 and UAX #15: code point, encoding form, normalization.
4. RFC 8259 / STD 90: JSON value and interoperability model.
5. WHATWG HTML Living Standard: form control input/value behavior.
6. ACM/IEEE-CS/AAAI CS2023: primitive types and representation curriculum scope.

## Supporting Sources

MDN’s maintained JavaScript Guide and Reference explain data types, literals, `Number`,
`BigInt`, `Number.isSafeInteger`, `Number.isNaN`, `Number()`, `parseInt`, `parseFloat`
and `typeof`. V8 documentation is implementation context only. No community article is
primary evidence.

## Concept Coverage

| Concept | Production requirement |
|---|---|
| `ASEA-CON-000020` Value | Meaning, runtime value, literal boundary |
| `ASEA-CON-000021` Data Type | Set of values, allowed operations, primitive boundary |
| `ASEA-CON-000022` Data Representation | Encoding, precision, text and interchange |
| `ASEA-CON-000023` Type Conversion | Source/target contract, validation, loss |

## Claim Coverage

`ASEA-CLM-000020`–`000023` are used without semantic modification. The lesson must
make each proposition observable through a classification or conversion artefact.
Language-independent claims remain distinct from ECMAScript-specific behavior.

## Evidence Mapping

| Evidence | Role | Limit |
|---|---|---|
| `ASEA-EV-000009` | CS2023 curriculum scope | Does not define JavaScript runtime behavior |
| `ASEA-EV-000012` | ECMAScript normative example | Does not define all programming languages |
| IEEE 754-2019 | Number representation | Does not define domain meaning |
| Unicode 16.0 | Text encoding model | Does not define user-perceived equality alone |
| RFC 8259 | Interchange value model | JSON is not identical to JavaScript runtime |

## Terminology

First meaningful use is Turkish (English): değer (Value), veri türü (Data Type),
temel tür (Primitive Type), veri temsili (Data Representation), değişmez değer yazımı
(Literal), tür dönüşümü (Type Conversion), örtük dönüştürme (Coercion), kesinlik
(Precision), anlam kaybı (Meaning Loss), yokluk (Absence), güvenli tamsayı (Safe Integer).

## Mental Models

1. **Information card:** value is the information, type is its rulebook, representation
   is the encoding, literal is one source spelling.
2. **Border checkpoint:** raw value enters; contract validates; conversion transforms;
   result validation checks; loss policy accepts or rejects.
3. **Data dictionary:** every important field records meaning, type, examples, invalid
   values, range, absence policy and representation notes.

## Historical Context

Programming languages classify values to make operations predictable and analyzable.
Floating-point standards enable portable numeric behavior within bounded formats.
Unicode separates abstract characters from encoding forms. JavaScript’s `typeof null`
result is a historical compatibility behavior and must not redefine null as non-primitive.

## Technical Details

- ECMAScript primitive types: Undefined, Null, Boolean, Number, BigInt, String, Symbol.
- Number follows binary64 semantics; not every decimal fraction is exact.
- Safe integer interval: `[-(2^53 - 1), 2^53 - 1]`.
- `NaN` is in the Number type; `Number.isNaN` checks the specific result without coercion.
- String values are sequences of 16-bit unsigned integer values; text perception can span
  multiple code units and code points.
- Boolean values are only `true` and `false`; text words are not Boolean values.
- `undefined`, `null`, empty text, zero and false can represent different domain states.
- Conversion must define full-input versus prefix parsing, range, precision, units,
  leading zeros, locale, absence and failure behavior.

## Code References

Required observations: `typeof`, `Number()`, `String()`, `Boolean()`, `Number.isNaN()`,
`Number.isSafeInteger()`, `BigInt()`, strict equality, `0.1 + 0.2`, safe-integer boundary,
`Number("")`, `Boolean("false")`, `parseInt("12px", 10)`, and JSON serialization limits.
Every snippet must include expected output and an explanation of the relevant contract.

## Best Practices

- Select types from domain meaning, not visual shape.
- Keep identifiers, postal codes and phone numbers as text when arithmetic is meaningless.
- Validate raw boundary data before conversion; validate the converted result afterward.
- Prefer explicit conversion and strict input grammars.
- Record precision, range, unit and absence policy in the data contract.
- Preserve raw input when audit, recovery or error explanation matters.
- Test normal, boundary, invalid, ambiguous and lossy cases.

## Common Mistakes

- Treating digits as proof of numeric meaning.
- Treating a literal as the value itself.
- Believing explicit conversion is always safe.
- Using prefix parsers when the complete input must be valid.
- Treating `NaN` as a non-number type or `typeof null` as a correct classification.
- Conflating empty, zero, false, null and undefined.
- Assuming decimal arithmetic is exact or every integer is safe.

## Edge Cases

Empty string; whitespace-only string; `-0`; `NaN`; infinities; safe integer endpoints;
one step outside the safe range; leading zeros; localized decimal comma; unit suffix;
emoji and combining marks; null versus undefined; BigInt mixed with Number; JSON values
beyond interoperable precision.

## Real World Examples

Form fields arrive at a trust boundary and require validation. Postal code `"00123"`
must preserve structure. Money requires an explicit representation policy. Large external
IDs can exceed Number safety. CSV columns can mix missing and malformed values. JSON
transfers a smaller value universe than JavaScript. Feature flags must distinguish Boolean
values from text labels.

## Interview Notes

Ask candidates to distinguish value/type/literal/representation; explain why `"42"` is
not Number; diagnose `0.1 + 0.2`; state safe integer risk; compare `null` and `undefined`;
explain why `Boolean("false")` is true; choose parsing strategy; and design tests for a
lossy conversion. Strong answers state assumptions and counterexamples.

## Exercise Ideas

Classify mixed values; create a data dictionary; repair classifications based on domain
meaning; predict `typeof`; identify literal versus value; mark safe/lossy conversions;
test numeric boundaries; preserve identifiers; distinguish missing states; audit an AI
conversion; compare full parse with prefix parse; explain Unicode length surprises.

## Quiz Ideas

Use 25 questions across recall, understanding, application and analysis. At least eight
questions must require scenario reasoning; at least five must expose conversion loss;
answers live in a separate post-attempt file.

## Lab Ideas

Classify an imported customer record set and create a conversion matrix. Deliver raw
input inventory, data dictionary, conversion policy, normal/boundary/invalid test matrix,
loss log and short engineering decision. Score classification 7, conversion analysis 6,
risk cases 3 and explanation 4 points, then normalize to the chapter rubric.

## Animation Ideas

- Value → type rulebook → operation permission.
- Raw input → validation → explicit conversion → result validation → domain value.
- Decimal intention → binary64 approximation → displayed result.
- Text glyph → code point(s) → UTF-16 code unit(s), with static alternative.

## Further Reading

Read ECMA-262 clauses before MDN explanations for disputed behavior. Continue with IEEE
754 for numeric systems, Unicode Chapters 2–3/UAX #15 for text, RFC 8259 for interchange,
and CS2023 SDF/AR for curriculum context.

## Review Notes

Pedagogical review must protect beginner readability without saying that all languages
share JavaScript’s types. Technical review must execute snippets and verify conversion
tables. Terminology review must eliminate unnecessary English after first use.

## Approval

Repository Owner authorizes draft production. External student pilot is deferred until
Academy 01 content production is complete and is not a draft-production blocker.

## Version

Research Packet version `0.1.0`; knowledge snapshot `1.0.0`; graph snapshot `1.0.1`.
Any new lesson-critical claim requires research amendment and revalidation.

## Status

**Research Complete — Ready for Draft Production.** Sources were checked on 2026-07-22.

### Reference URLs

- [ECMAScript 2025](https://tc39.es/ecma262/2025/)
- [IEEE 754-2019](https://standards.ieee.org/ieee/754/6210/)
- [Unicode Standard 16.0](https://www.unicode.org/versions/Unicode16.0.0/)
- [Unicode UAX #15](https://unicode.org/reports/tr15/)
- [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259)
- [WHATWG Form Control Infrastructure](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html)
- [MDN Data Types](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures)
- [MDN Grammar and Types](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN Number.isSafeInteger](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)
- [MDN BigInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [MDN Number constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [MDN parseInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN Number.isNaN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [MDN typeof](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof)
- [Computer Science Curricula 2023](https://csed.acm.org/)
