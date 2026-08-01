---
document_type: "examples"
document_id: "V01-C37-EX01"
chapter_id: "V01-C37"
---
# C37 Örnekleri

## Named export

```js
// domain/progress.js
export function completionRate(completed, total) {
  if (total <= 0) throw new RangeError("total must be positive");
  return completed / total;
}
```

## Açık bağımlılık

```js
// application/report.js
import { completionRate } from "../domain/progress.js";

export function buildReport(progress) {
  return { ...progress, rate: completionRate(progress.completed, progress.total) };
}
```

`report.js`, hesabı nereden aldığını gizlemez; import satırı graph'ın bir kenarıdır.
