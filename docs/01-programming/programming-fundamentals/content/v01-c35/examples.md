---
document_type: "examples"
document_id: "V01-C35-EX01"
chapter_id: "V01-C35"
---
# C35 Örnekleri

```js
const instant = new Date("2026-08-01T06:00:00.000Z");
console.log(instant.getTime());
console.log(instant.toISOString());
console.log(Number.isNaN(new Date("invalid").getTime()));
const clone = new Date(instant.getTime());
console.log(clone === instant, clone.getTime() === instant.getTime());
```
