---
document_type: "supporting-document"
supporting_document_id: "V01-C05-SD-REF-002"
supporting_document_type: "References"
title: "V01-C05 Research Collection"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C05"
authority: "Derived"
owner_role: "Research Engineer"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C05 Research Collection

## Collection Scope

Bu ham koleksiyon `V01-LO007` ve `V01-LO008` için değer, veri türü, temsil ve
dönüşüm bilgisini toplar. Öğretim anlatısı değildir; üretim kararlarının kanıt
deposudur.

## Source Inventory

| No | Kaynak | Otorite | Kullanım |
|---:|---|---|---|
| 1 | ECMA-262 2025, Terms and Definitions | Normatif standart | type, primitive value, null, undefined, Boolean, String |
| 2 | ECMA-262 2025, ECMAScript Data Types and Values | Normatif standart | yedi primitive tür ve Object sınırı |
| 3 | ECMA-262 2025, Numeric Types | Normatif standart | Number, BigInt, IEEE 754 ilişkisi |
| 4 | ECMA-262 2025, Type Conversion | Normatif standart | ToPrimitive, ToBoolean, ToNumber, ToString |
| 5 | ECMA-262 2025, Equality Operators | Normatif standart | strict/abstract equality sınırı |
| 6 | ECMA-262 2025, Literals | Normatif standart | kaynak gösterimi ve runtime value ayrımı |
| 7 | IEEE 754-2019 | Uluslararası standart | binary floating-point formatı ve yuvarlama |
| 8 | Unicode Standard 16.0, Chapter 2–3 | Uluslararası standart | character, code point, encoding form |
| 9 | Unicode Standard Annex #15 | Unicode normatif ek | eşdeğer metin temsilleri ve normalization sınırı |
| 10 | RFC 8259 / STD 90 | Internet Standard | JSON value, number, string, Boolean, null |
| 11 | WHATWG HTML, Form Control Infrastructure | Living Standard | kullanıcı girdisi ve control value ayrımı |
| 12 | MDN, JavaScript Data Types and Data Structures | Maintained vendor documentation | beginner-facing tür özeti |
| 13 | MDN, Grammar and Types | Maintained vendor documentation | literal ve dönüşüm örnekleri |
| 14 | MDN, Number | Maintained vendor documentation | Number sınırları, NaN, Infinity |
| 15 | MDN, Number.isSafeInteger | Maintained vendor documentation | güvenli tamsayı aralığı |
| 16 | MDN, BigInt | Maintained vendor documentation | büyük tamsayı ve JSON sınırı |
| 17 | MDN, Number() | Maintained vendor documentation | açık numeric conversion |
| 18 | MDN, parseInt() | Maintained vendor documentation | kısmi parse ve radix riskleri |
| 19 | MDN, parseFloat() | Maintained vendor documentation | kısmi ondalık parse sınırı |
| 20 | MDN, Number.isNaN() | Maintained vendor documentation | conversion sonucu doğrulama |
| 21 | MDN, typeof | Maintained vendor documentation | runtime tür gözlemi ve `null` istisnası |
| 22 | ACM/IEEE-CS/AAAI CS2023, SDF | Akademik curriculum | primitive types ve expressions kapsamı |
| 23 | ACM/IEEE-CS/AAAI CS2023, AR-Representation | Akademik curriculum | numeric/non-numeric representation |
| 24 | V8, JavaScript Numbers | Engine documentation | implementation perspective; normative değil |
| 25 | W3C Internationalization, Character Encodings | Standards education | Unicode/encoding terminology support |
| 26 | ISO/IEC 2382 terminology overview | Terminology standard | data and representation vocabulary support |

## Atomic Findings

### Value, type, literal, representation

- A value is program information; a type is the set/rules to which that value belongs.
- A literal is source notation that evaluates to a value. `42` and `"42"` are not two
  spellings of one value; they denote values in different type domains.
- Representation answers how information is encoded. Display text, source literal,
  runtime value and bytes must not be collapsed into one concept.
- Domain meaning precedes type selection. A postal code made only of digits is still
  text when arithmetic is meaningless and leading zeros are significant.

### Primitive and composite boundary

- ECMAScript defines seven primitive types: Undefined, Null, Boolean, Number, BigInt,
  String and Symbol. Object is the non-primitive language type.
- C05 teaches Number, text, Boolean and absence deeply enough for classification;
  BigInt and Symbol are orientation topics. Composite structures belong to later chapters.
- Primitive does not mean “unimportant” or necessarily “one machine word.” It describes
  the language model, not a promise about physical storage.

### Numbers and precision

- ECMAScript Number uses IEEE 754 binary64 semantics with specification-defined details.
- Many decimal fractions are not represented exactly in binary floating point;
  `0.1 + 0.2` therefore need not equal the decimal literal intuition of `0.3`.
- Safe integer range is `-(2^53 - 1)` through `2^53 - 1` inclusive.
- `NaN` is a Number value used for invalid/undefined numeric results; its name must not
  be interpreted as “not of the Number type.”
- `Infinity`, `-Infinity`, `+0` and `-0` are Number values with specified behavior.
- BigInt represents integers with arbitrary precision in the language model, but Number
  and BigInt are separate numeric types and do not freely mix.

### Text and Unicode

- ECMAScript String is a sequence of 16-bit unsigned integer values, commonly treated
  as UTF-16 code units for text.
- Character, code point, code unit and displayed grapheme are different layers.
- Visible length is not always JavaScript `.length`; full text processing is deferred.
- Unicode-equivalent visible text can have different code point sequences. Equality of
  source sequences and human-perceived equality are not always the same question.

### Boolean and absence

- Boolean has exactly `true` and `false`; the strings `"true"` and `"false"` are text.
- Converting a non-empty string with `Boolean()` produces `true`; it does not parse the
  word's linguistic meaning. This is a critical counterexample.
- `undefined` represents absence of an assigned value in specified contexts; `null`
  expresses intentional absence of an object value in ECMAScript terminology.
- `null`, `undefined`, `""`, `0`, `false` and `NaN` must not be merged into a single
  business state merely because some contexts treat them similarly.

### Conversion

- Conversion requires source type, target type, accepted grammar, valid range, loss
  policy and failure behavior.
- Explicit conversion makes intent visible but is not automatically safe.
- `Number("42")` consumes the complete trimmed numeric string; `parseInt("42px", 10)`
  can accept a prefix. These tools answer different questions.
- Always verify a numeric conversion result; `Number.isNaN()` is preferable for checking
  whether the specific result is `NaN`.
- Conversion can lose precision (`9007199254740993` to Number), structure (`"00123"`
  to 123), unit (`"12 kg"` to 12 if prefix parsing is used), or state meaning (`null`
  to 0 under a language rule).

### Interchange and boundaries

- RFC 8259 allows JSON string, number, `true`, `false`, `null`, array and object values.
- JSON excludes JavaScript `undefined`, `NaN`, `Infinity`, BigInt literals and Symbol.
- RFC 8259 warns that numeric magnitude/precision beyond binary64 expectations can harm
  interoperability; the shared exact integer interval aligns with the safe integer range.
- Browser form controls have specified value behavior; raw user intent and control value
  can differ. Boundary code must retain enough evidence to diagnose rejection.

## Counterexamples

| Görünüm/girdi | Hatalı çıkarım | Doğru inceleme |
|---|---|---|
| `"42"` | “Sayıdır, çünkü rakamlardan oluşuyor.” | Runtime type String; ancak doğrulamadan sonra Number olabilir. |
| `"00123"` | “123'e güvenle çevrilir.” | Postal/employee ID ise leading zeros anlam taşır. |
| `Boolean("false")` | “false olur.” | Non-empty string olduğu için `true` olur. |
| `Number("")` | “Geçersiz olur.” | ECMAScript sonucu `0`; business contract ayrıca kontrol etmelidir. |
| `parseInt("12px", 10)` | “Geçersiz olur.” | Prefix `12` parse edilir; strict input için uygun olmayabilir. |
| `9007199254740993` | “Tam korunur.” | Number güvenli tamsayı sınırının dışındadır. |
| `typeof null` | “null bir object'tir.” | Sonuç tarihsel olarak `"object"`; null primitive değerdir. |
| `NaN` | “Number türünde değildir.” | ECMAScript'te Number değeridir. |

## Research Decisions

- Ana anlatı technology-neutral başlayacak, gözlem örnekleri JavaScript ile yapılacak.
- Öğrenci türü söz diziminden değil domain meaning + valid operations üzerinden seçecek.
- Dönüşüm modeli `koru → doğrula → dönüştür → sonucu doğrula → kaybı kaydet` olacak.
- Equality ayrıntısı C07’ye bırakılacak; C05 yalnızca type-sensitive comparison riskini kuracak.
- Unicode ayrıntısı sonraki text-processing chapter’larına bırakılacak.
- AI kullanımı “type öner” değil, “varsayım ve counterexample üret; öğrenci doğrulasın” biçiminde olacak.

## Canonical Mapping

| Konu | Concept | Claim | Outcome |
|---|---|---|---|
| Value | `ASEA-CON-000020` | `ASEA-CLM-000020` | `V01-LO007` |
| Data Type | `ASEA-CON-000021` | `ASEA-CLM-000021` | `V01-LO007` |
| Data Representation | `ASEA-CON-000022` | `ASEA-CLM-000022` | `V01-LO007`, `V01-LO008` |
| Type Conversion | `ASEA-CON-000023` | `ASEA-CLM-000023` | `V01-LO008` |

## References

- ECMA International. [*ECMAScript 2025 Language Specification*](https://tc39.es/ecma262/2025/).
- IEEE Standards Association. [*IEEE 754-2019*](https://standards.ieee.org/ieee/754/6210/).
- Unicode Consortium. [*The Unicode Standard 16.0*](https://www.unicode.org/versions/Unicode16.0.0/).
- Unicode Consortium. [*UAX #15: Unicode Normalization Forms*](https://unicode.org/reports/tr15/).
- IETF. [*RFC 8259: The JavaScript Object Notation*](https://www.rfc-editor.org/rfc/rfc8259).
- WHATWG. [*HTML Living Standard: Form Control Infrastructure*](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html).
- MDN Web Docs. [*JavaScript data types and data structures*](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures).
- MDN Web Docs. [*Grammar and types*](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Grammar_and_types).
- MDN Web Docs. [*Number*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number).
- MDN Web Docs. [*Number.isSafeInteger()*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).
- MDN Web Docs. [*BigInt*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- MDN Web Docs. [*Number()*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/Number).
- MDN Web Docs. [*parseInt()*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt).
- MDN Web Docs. [*parseFloat()*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).
- MDN Web Docs. [*Number.isNaN()*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN).
- MDN Web Docs. [*typeof*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof).
- ACM/IEEE-CS/AAAI. [*Computer Science Curricula 2023*](https://csed.acm.org/).
