---
document_type: "research-notes"
document_id: "V01-C31-RS01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
last_verified: "2026-08-01"
---

# C31 Kaynak Notları

## Araştırma Soruları

1. Array index ve `length` için normatif davranış nedir?
2. Sorgu/dönüşüm yöntemlerinin callback ve output sözleşmeleri nasıl ayrılır?
3. Hangi yöntemler source'u mutate eder, copying karşılıkları ne garanti eder?
4. Empty ve sparse collection davranışları başlangıç öğrencisine nasıl sınırlanır?

## Bulgular

ECMA-262 Array Exotic Objects bölümü array index property'lerine ve `length`e özel
davranışı tanımlar. Bu nedenle `length` yalnız sezgisel “element sayacı” olarak
sunulmadı; düzenli array bağlamında kullanıldı, sparse sınırı ayrıca belirtildi.

Indexed Collections algoritmaları `find/some/every`, `filter/map/reduce` ve sorting
yöntemlerinin gözlenebilir sözleşmelerini sağlar. `some` ilk truthy, `every` ilk falsy
sonuçta kısa devre yapabilir. `find` ilk eşleşen value'yu, no-match'te `undefined`
döndürür. `filter` ve `map` yeni array üretirken element object'lerini deep-copy etme
garantisi vermez.

`sort`, `reverse` ve `splice` source üzerinde değişiklik yapar. `toSorted`,
`toReversed` ve `toSpliced` copying karşılıkları yeni array üretir. Yeni root kimliği,
nested/element kimliğinin otomatik yenilendiği anlamına gelmez.

## Pedagojik Uyarlama

Specification algoritmaları öğrenciye adım listesi olarak taşınmadı. Her yöntem
“hangi soruya hangi output shape?” modeliyle öğretildi. Sparse arrays tanıtıldı ancak
uygulama deseni olarak teşvik edilmedi. Callback control-flow C32'ye bırakıldı.

## Kaynaklar

- [ECMA-262 Array Exotic Objects](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-array-exotic-objects)
- [ECMA-262 Indexed Collections](https://tc39.es/ecma262/multipage/indexed-collections.html)
- [Array.prototype.find](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find)
- [Array.prototype.some](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.some)
- [Array.prototype.every](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.every)
- [Array.prototype.filter](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter)
- [Array.prototype.map](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map)
- [Array.prototype.reduce](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce)
- [Array.prototype.toSorted](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tosorted)
