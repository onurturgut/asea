---
document_type: "exercise-solutions"
document_id: "V01-C34-SOL01"
chapter_id: "V01-C34"
---
# C34 Çözümleri

```js
function summarize(values) {
  if (!values.every(Number.isFinite)) throw new TypeError("finite values required");
  const total = values.reduce((sum, value) => sum + value, 0);
  return { total, average: values.length ? total / values.length : null };
}
```

Count exact integer'dır; measurement tolerance ister. Arithmetic yapılmayan büyük ID
string kalır. Minor units için integer, range, currency ve rounding policy gerekir.
