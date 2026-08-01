---
document_type: "exercise-solutions"
document_id: "V01-C32-SOL01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Alıştırma Çözümleri

## Çözüm 1–3

`a` function value, `b` invocation return value'dur.

```js
function calculate(left, right, operation) {
  return operation(left, right);
}

const add = (left, right) => left + right;
const subtract = (left, right) => left - right;
```

Trace: arguments hazırlanır; calculate bağları kurulur; operation çağrılır; callback
return'ü calculate'e, calculate return'ü dış caller'a gider.

## Çözüm 4–6

```js
const numbers = ["10", "10", "10"].map((value) =>
  Number.parseInt(value, 10),
);

const calls = [];
function spy(value, index) {
  calls.push({ value, index });
  return value;
}
["a", "b"].map(spy);

const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;
function selectOrder(name) {
  if (name === "ascending") return ascending;
  if (name === "descending") return descending;
  throw new RangeError("Bilinmeyen sıra.");
}
```
