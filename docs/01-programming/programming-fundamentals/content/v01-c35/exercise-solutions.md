---
document_type: "exercise-solutions"
document_id: "V01-C35-SOL01"
chapter_id: "V01-C35"
---
# C35 Çözümleri

```js
function isExpired(expiresAt, now) {
  const end = expiresAt.getTime();
  const current = now.getTime();
  if (Number.isNaN(end) || Number.isNaN(current)) throw new TypeError("valid dates");
  return current >= end;
}
```

Comparison boundary inclusive seçilmiştir; farklı domain contract değiştirebilir.
