---
document_type: "summary"
document_id: "V01-C31-SUM01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Kısa Özet

Array, sıralı elementler taşıyan identity-bearing object'tir. `find`, `some`, `every`,
`filter`, `map` ve `reduce` aynı şeyin kısa yazımları değildir; farklı output soruları
cevaplar. Pipeline'da element type, cardinality, identity ve state her aşamada izlenir.

Yeni array üretmek object elementlerini deep-copy etmez. `sort`, `reverse`, `splice`
gibi yöntemler source'u mutate eder; copying karşılıkları yeni root üretir. Seçim,
ownership ve paylaşım sözleşmesine dayanır. Empty/no-match state'leri normal test
senaryolarıdır.
