---
document_type: "research-notes"
document_id: "V01-C30-RS01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
last_verified: "2026-08-01"
---

# C30 Kaynak Notları

## Araştırma Soruları

1. JavaScript object identity normatif olarak nasıl tanımlanır?
2. Property access ve assignment hangi temel davranışlara dayanır?
3. Spread ve `Object.assign` hangi kopyalama garantisini verir?
4. Başlangıç öğrencisine referans modeli motor ayrıntısı uydurmadan nasıl anlatılır?

## Bulgular

ECMA-262 Object Type bölümü object'leri identity taşıyan values olarak ayırır. Aynı
object farklı erişim yollarından gözlendiğinde mutable özelliklerindeki değişim bütün
yollardan görülebilir. Bu bulgu aliasing anlatımının normatif temelidir.

Object initializer her değerlendirmede object üretir. Property accessors bölümü dot
ve bracket erişimini tanımlar. Specification'daki `Get` ve `Set` soyut işlemleri,
öğrenci metnindeki property okuma/yazma davranışının doğrulama dayanağıdır.

`Object.assign`, source object'lerin enumerable own property değerlerini target'a
atar ve target'ı döndürür. Nested object value bir referans olduğu için bağımsız bir
nested clone garantisi yoktur. MDN shallow-copy tanımı spread ve `Object.assign`
örnekleri için öğrenci dostu karşılaştırma sağlar.

## Pedagojik Uyarlama

“Değişken bellekte adres tutar” ifadesi kullanılmadı. Bunun yerine binding'den
identity taşıyan object value'ya kavramsal referans oku çizildi. Bu model observable
semantiği açıklar fakat motorun gerçek bellek düzeni hakkında garanti iddia etmez.

## Kaynaklar

- [ECMA-262 Object Initializer](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-object-initializer)
- [ECMA-262 Property Accessors](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-property-accessors)
- [ECMA-262 Object Type](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-type)
- [ECMA-262 Get](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-get-o-p)
- [ECMA-262 Set](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-set-o-p-v-throw)
- [ECMA-262 Object.assign](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign)
- [MDN Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
