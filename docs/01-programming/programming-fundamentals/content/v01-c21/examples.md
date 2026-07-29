---
document_type: "examples"
document_id: "V01-C21-EXAMPLES01"
chapter_id: "V01-C21"
status: "Draft"
---

# Örnekler

## Örnek 1 — İlk Eşleşmeyi Bulmak

```js
function linearSearch(values, target) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === target) return index;
  }
  return -1;
}

console.log(linearSearch(["c10", "c17", "c21"], "c21")); // 2
```

## Örnek 2 — Sıralı ID Aralığını Küçültmek

```js
function binarySearch(sortedValues, target) {
  let low = 0;
  let high = sortedValues.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const value = sortedValues[middle];
    if (value === target) return middle;
    if (value < target) low = middle + 1;
    else high = middle - 1;
  }

  return -1;
}

console.log(binarySearch([2, 8, 17, 20, 21, 23], 21)); // 4
```

## Örnek 3 — Boş Koleksiyon

```js
console.log(linearSearch([], 7)); // -1
console.log(binarySearch([], 7)); // -1
```
