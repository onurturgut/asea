---
document_type: "examples"
document_id: "V01-C33-EX01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Örnekleri

## Binding Capture

```js
function createReader() {
  let value = 1;
  function read() {
    return value;
  }
  value = 2;
  return read;
}

console.log(createReader()()); // 2
```

Closure creation-time value `1`i dondurmaz; `value` binding'inin güncel değerini okur.

## Independent Instances

```js
function createCounter() {
  let count = 0;
  return () => ++count;
}

const first = createCounter();
const second = createCounter();
console.log(first(), first(), second()); // 1 2 1
```

## Shared Commands and Queries

```js
function createToggle() {
  let enabled = false;
  return {
    enable() { enabled = true; },
    disable() { enabled = false; },
    isEnabled() { return enabled; },
  };
}
```

Üç function aynı invocation environment'ındaki binding'i paylaşır.
