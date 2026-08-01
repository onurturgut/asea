---
document_type: "examples"
document_id: "V01-C36-EX01"
chapter_id: "V01-C36"
---
# C36 Örnekleri

```js
class ValidationError extends Error {
  constructor(message, code, options = {}) {
    super(message, options);
    this.name = "ValidationError";
    this.code = code;
  }
}

function requireName(value) {
  if (typeof value !== "string" || !value.trim()) {
    throw new ValidationError("name required", "NAME_REQUIRED");
  }
  return value.trim();
}
```
