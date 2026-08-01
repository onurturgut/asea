---
document_type: "project-increment"
document_id: "V01-C32-PI01"
chapter_id: "V01-C32"
project_id: "V01-P07"
version: "0.1.0"
status: "Draft"
---

# V01-P07 Proje Artımı

## Artım

C31 collection pipeline'ına injectable davranış sözleşmeleri eklenir:

- `isAtRisk(progress)` predicate
- `toProgressCard(student)` mapper
- `compareByProgress(left, right)` comparator
- strategy registry/selector
- callback invocation contract testleri

## Definition of Done

LO053 için işlemci farklı stratejilerle değişmeden çalışır. LO054 için caller/callback
trace, signature adapter ve invocation spy kanıtı vardır. C33'e stateful rule factory
ihtiyacı açıkça devredilir.
