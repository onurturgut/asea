---
document_type: "exercise-solutions"
document_id: "V01-C31-SOL01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Alıştırma Çözümleri

## Çözüm 1–3

Sırasıyla `find`, `some`, `every`, `filter`, `map`, `reduce`. Cardinality
`n → 0..n → 0..n → tek value` olur.

```js
function summarizeScores(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = scores.length === 0 ? null : total / scores.length;
  return { total, average };
}
```

## Çözüm 4–5

`sort` aynı array'i döndürür; source, alias ve output aynı identity'dir. Spread yeni
root array üretir ama object elementleri paylaşır.

```js
const updated = source.map((item, index) =>
  index === 0 ? { ...item, active: false } : item,
);
```

## Çözüm 6

```js
const activeStudents = students.filter((student) => student.active);
const cards = activeStudents.map((student) => ({
  id: student.studentId,
  rate: student.progress.completed / student.progress.total,
}));
const rateTotal = cards.reduce((sum, card) => sum + card.rate, 0);
```

`total` invariant'ının sıfırdan büyük olması C30 factory'sinde garanti edilmelidir.
