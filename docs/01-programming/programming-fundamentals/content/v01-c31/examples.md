---
document_type: "examples"
document_id: "V01-C31-EX01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Örnekleri

## Sorgu

```js
const scores = [42, 81, 95];

console.log(scores.some((score) => score >= 90)); // true
console.log(scores.every((score) => score >= 50)); // false
console.log(scores.find((score) => score >= 80)); // 81
```

## Seç ve Dönüştür

```js
const students = [
  { name: "Ada", active: true },
  { name: "Mert", active: false },
];

const labels = students
  .filter((student) => student.active)
  .map((student) => student.name.toUpperCase());
```

`Student[] → Student[] → string[]` dönüşümü gerçekleşir; uzunluk `2 → 1 → 1`dir.

## Güvenli Sıralama

```js
const scores = [70, 100, 9];
const ascending = scores.toSorted((a, b) => a - b);

console.log(scores); // [70, 100, 9]
console.log(ascending); // [9, 70, 100]
```

Comparator verilmezse değerler string karşılaştırmasına uygun sıralanabilir; sayısal
niyet için comparator açık yazılır.

## Object Element Güncellemesi

```js
const updated = students.map((student) =>
  student.name === "Mert" ? { ...student, active: true } : student,
);
```

Array ve Mert object'i yenidir; Ada object'i bilinçli paylaşılır.
