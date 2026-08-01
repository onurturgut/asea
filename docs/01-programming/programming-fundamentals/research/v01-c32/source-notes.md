---
document_type: "research-notes"
document_id: "V01-C32-RS01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
last_verified: "2026-08-01"
---

# C32 Kaynak Notları

## Araştırma Soruları

1. Function value'nun callable object olduğu normatif olarak nasıl temellenir?
2. Call expression argument ve return akışını nasıl başlatır?
3. Array yöntemleri callback'i hangi arguments ile çağırır?
4. ECMAScript callback ile host-managed callback sınırı nasıl korunur?

## Bulgular

ECMA-262 function'ı `[[Call]]` internal method'ını destekleyen object olarak tanımlar.
Call expression callable value'yu arguments listesiyle çağırır. Öğrenci modelinde bu,
function reference ile invocation result ayrımının teknik temelidir.

ECMAScript Function Objects bölümü call sırasında parameter binding, body evaluation
ve return completion davranışının normatif dayanağıdır. Ana metin specification
internal-slot ayrıntısını öğretmez; observable caller → callback → caller akışına
dönüştürür.

Array `map/filter` algoritmaları callback'e element value, index ve traversed object
sağlar. `map(parseInt)` vakası bu iki geçerli signature'ın anlamca uyuşmamasından
doğar: map'in index'i parseInt'in radix argument'ına gider.

Timer ve DOM event gibi callback timing davranışları ECMAScript dilinin tek başına
tanımladığı API'ler değildir; host sözleşmesidir. Bu yüzden C32 callback'i async ile
eşitlemez ve event loop ayrıntısını kapsam dışında tutar.

## Kaynaklar

- [ECMA-262 Function Objects](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-type)
- [ECMAScript Function Objects](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ecmascript-function-objects)
- [Call Expressions](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-function-calls)
- [Array.prototype.map](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map)
- [Array.prototype.filter](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter)
- [Job Callback Records](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-jobcallback-records)
