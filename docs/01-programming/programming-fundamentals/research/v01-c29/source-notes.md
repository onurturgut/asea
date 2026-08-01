---
document_type: "research-notes"
document_id: "V01-C29-RN001"
chapter_id: "V01-C29"
status: "Draft"
researched_at: "2026-08-01"
---

# V01-C29 Kaynak Notları

## ECMAScript Language Types

ECMAScript specification; Undefined, Null, Boolean, String, Symbol, Number,
BigInt ve Object type'larını ayırır. Undefined ve Null tek değerli ayrı type'lardır.
Bu kaynak `typeof null` output'unun Null'ın specification type'ı olarak
yorumlanmaması için canonical sınırdır.

Kaynak: [ECMAScript Language Types](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types)

## Type Conversion Abstract Operations

`ToBoolean`, undefined, null, signed zero, NaN, BigInt zero ve empty String için
false; diğer değerler için true davranışını tanımlar. `ToNumber`, type'a göre ayrı
dönüşüm yolları ve StringNumericValue grammar'ı kullanır. Chapter bu algoritmaları
öğrenciye doğrudan ezberletmek yerine gözlenen value/type izinin teknik dayanağı
olarak kullanır.

Kaynaklar:

- [ECMAScript ToBoolean](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean)
- [ECMAScript ToNumber](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber)
- [ECMAScript ToString](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring)

## Equality Algorithms

`IsStrictlyEqual`, type'lar farklıysa false döndürür. `IsLooselyEqual`, aynı type
için strict algoritmaya geçer; farklı type kombinasyonlarında null/undefined özel
durumu, String→Number, Boolean→Number ve Object→Primitive gibi açık adımlar uygular.
Bu nedenle `==` rastgele diye öğretilmez; fakat gizli dönüşüm ve domain belirsizliği
nedeniyle boundary normalization + `===` varsayılanı savunulur.

Kaynaklar:

- [ECMAScript IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal)
- [ECMAScript IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal)

## Kaynak kullanım sınırı

Güncel specification draft'ının algoritmaları teknik doğrulama için kullanıldı;
öğrenciye specification notation ezberletilmedi. TypeScript, framework, object
identity, floating-point ayrıntıları ve complete predicate tasarımı chapter
kapsamı dışında tutuldu.
