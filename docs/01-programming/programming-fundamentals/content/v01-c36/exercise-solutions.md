---
document_type: "exercise-solutions"
document_id: "V01-C36-SOL01"
chapter_id: "V01-C36"
---
# C36 Çözümleri

```js
function normalizeThrown(value) {
  return value instanceof Error ? value : new Error("Unknown thrown value", {
    cause: value,
  });
}
```

Recovery yalnız tanınan category'de yapılır; bilinmeyen error yeniden fırlatılır.
Mutation bütün validation geçtikten sonra tek commit noktasında yapılır.
