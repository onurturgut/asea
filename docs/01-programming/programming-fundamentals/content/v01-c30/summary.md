---
document_type: "summary"
document_id: "V01-C30-SUM01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Kısa Özet

Object, adlandırılmış property'lerle domain bilgisini bir araya getirir ve kendi
kimliğine sahiptir. Atama yeni object üretmek zorunda değildir; iki binding aynı
object'i görebilir. Bu durumda property mutation'ı bütün alias'lardan gözlenir.

`const` binding'i yeniden atamaya karşı korur, object'i immutable yapmaz. Spread ve
`Object.assign` sığ kopyadır: dış object yeni olabilir, nested object'ler paylaşılabilir.
Eski state korunacaksa değişen property yolu seçici olarak yeniden üretilir.

Profesyonel model; property adlarının yanında canonical type, invariant, ownership
ve mutation sözleşmesi taşır. C31 bu güvenilir tek kayıtları koleksiyonlarda işler.
