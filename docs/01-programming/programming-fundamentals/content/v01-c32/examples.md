---
document_type: "examples"
document_id: "V01-C32-EX01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Örnekleri

## Operation Callback

```js
function execute(left, right, operation) {
  return operation(left, right);
}

function multiply(a, b) {
  return a * b;
}

console.log(execute(6, 7, multiply)); // 42
```

## Predicate Callback

```js
function matches(value, predicate) {
  return Boolean(predicate(value));
}

const isPositive = (number) => number > 0;
console.log(matches(4, isPositive)); // true
```

## Strategy Selection

```js
function asPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function asDecimal(value) {
  return value.toFixed(2);
}

function selectFormatter(name) {
  if (name === "percent") return asPercent;
  if (name === "decimal") return asDecimal;
  throw new RangeError("Bilinmeyen format.");
}
```

Function döndürülür; dış binding capture edilmez.

## Signature Adapter

```js
const raw = ["11", "12", "13"];
const numbers = raw.map((value) => Number.parseInt(value, 10));
```

Adapter, `map`in index argument'ının `parseInt` radix parameter'ına gitmesini önler.
