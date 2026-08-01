---
document_type: "exercise-solutions"
document_id: "V01-C33-SOL01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Alıştırma Çözümleri

## Çözüm 1–3

Factory invocation E1, returned function F1 üretir; F1 E1 binding'ini çözer. İkinci
factory call E2/F2 üretir. Capture binding erişimidir; creation sonrası mutation
sonraki call'da görünür.

## Çözüm 4–5

```js
function createLimitedCounter(limit) {
  if (!Number.isInteger(limit) || limit < 1) throw new RangeError("limit");
  let count = 0;
  function snapshot() { return { count, limit }; }
  function increment() {
    if (count >= limit) throw new RangeError("limit reached");
    count += 1;
    return snapshot();
  }
  function read() { return count; }
  function reset() { count = 0; return snapshot(); }
  return { increment, read, reset };
}
```

## Çözüm 6

```js
const readers = [];
for (let index = 0; index < 3; index += 1) {
  readers.push(() => index);
}
console.log(readers.map((read) => read()));
```
