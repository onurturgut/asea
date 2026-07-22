---
document_type: "chapter-summary"
document_id: "V01-C14-SM01"
title: "V01-C14 Summary"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
learning_outcomes: ["V01-LO021"]
last_updated: "2026-07-23"
---

# Bölüm Özeti

Parameter tanımdaki girdi konumu, argument çağrıdaki değer üreten ifadedir. JavaScript argument ifadelerini soldan sağa değerlendirir ve konumsal bağlar. Eksik argument `undefined`; fazla argument değerlendirilmiş fakat kullanılmamış olabilir. Default yalnız omitted veya `undefined` değerinde çalışır.

JavaScript değer aktarır. Primitive parameter reassignment caller binding'ini değiştirmez. Object value bir referans olduğundan property mutation aynı nesnede görünür; parameter'ı yeni object'e atamak caller binding'ini değiştirmez.

Her parameter bağımlılıktır. Necessary input tutulur; unused, derived, duplicate ve hidden input sözleşme ile caller kanıtına göre değerlendirilir. Long list, flag ve options object sayısal reçeteyle değil sorumluluk ve semantic modelle incelenir.

Return caller'a explicit sonuç taşır. Print konsola, mutation dış duruma gider. Eksik return `undefined` üretir. Multiple results tutarlı result shape içinde modellenir. Composition için output ile sonraki input ve failure contract'ları uyumlu olmalıdır.

Interface refactoring; caller envanteri, contract testleri, input sınıflandırması, küçük dönüşüm, caller migration ve regression doğrulamasıyla yapılır. AI her parameter ve result kararını gerekçelendirmeli; insan testle doğrulamalıdır.

## Hızlı Kontrol

- Parameter ve argument'ı doğru ayırabiliyor muyum?
- Default ve eksik/fazla argument davranışını izleyebiliyor muyum?
- Primitive reassignment ile object mutation'ı açıklayabiliyor muyum?
- Gereksiz ve gizli input'u bulabiliyor muyum?
- Print'i explicit return pipeline'ına çevirebiliyor muyum?

Beş soruya kanıtla cevap verebiliyorsanız `V01-LO021` değerlendirmesine hazırsınız.
