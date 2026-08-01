---
document_type: "flashcards"
document_id: "V01-C33-FC01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Bilgi Kartları

## Kartlar

- **Lexical environment?** Lexical nesting'e göre identifier bindings modeli.
- **Closure?** Function'ın oluşturulduğu çevredeki bindings'e erişim davranışı.
- **Captured binding?** Returned function'ın dış lexical çevrede çözdüğü binding.
- **Snapshot değildir?** Binding mutation sonrası yeni value görülür.
- **Factory instance?** Bir factory invocation'ın ürettiği API/state örneği.
- **Independent state?** Ayrı invocation environments içindeki ayrı bindings.
- **Command?** State değiştiren operation.
- **Query?** State'i değiştirmeden gözleyen operation.
- **Reference leak?** Internal mutable object'in dışarı aynı identity ile verilmesi.
- **Fresh snapshot?** Güncel state'i yeni value/object olarak dışarı sunma.
- **Reachability?** Bir value/environment'a program yollarıyla erişilebilir olma.
- **Retention?** Erişimin gerekenden uzun sürmesi.
