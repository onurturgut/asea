---
document_type: "continuity-plan"
document_id: "V01-C31-CP01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Devamlılık ve Öğretim Planı

## Gelen Yeterlik

- C17: koleksiyonda sıralı dolaşma ve accumulator temeli
- C30: geçerli object, identity, aliasing ve shallow copy
- C32: callback sözleşmesi ve control-flow

## Öğretim Rotası

1. Array identity ile element identity ayrılır.
2. Açık `for...of` çözümü baseline olarak kurulur.
3. `find/some/every` farklı sorulara bağlanır.
4. `filter/map/reduce` type ve cardinality izleriyle yürütülür.
5. Mutating yöntem source/alias gözlemiyle karşılaştırılır.
6. Non-mutating output'un elementleri deep-copy etmediği gösterilir.
7. P07 dashboard summary hattı teslim edilir.

## Yanlış Kavrayış Müdahaleleri

| Yanlış düşünce | Karşı deney |
| --- | --- |
| “Yeni array, yeni elementlerdir.” | Root false, element true identity testi |
| “Filter dönüştürür.” | Predicate output'u ile selected element karşılaştırması |
| “Map seçer.” | Length invariant testi |
| “Reduce initial değer opsiyonel ayrıntıdır.” | Empty input testi |
| “Sort yeni array döndürür.” | Source/return identity testi |

## Devir

C31; C22'ye mutation ve sıralama girdisi, C34'e numeric aggregation hattı, C21'e
collection search modeli verir. Sayısal üretimde sıradaki C32 olsa da öğrenci C32
başarı kapısını C31'den önce geçmiş olmalıdır.
