---
document_type: "examples"
document_id: "V01-C22-EXAMPLES01"
chapter_id: "V01-C22"
status: "Draft"
---

# Örnekler

## Selection Sort

```js
function selectionSort(values) {
  const result = [...values];

  for (let start = 0; start < result.length - 1; start += 1) {
    let smallestIndex = start;
    for (let candidate = start + 1; candidate < result.length; candidate += 1) {
      if (result[candidate] < result[smallestIndex]) {
        smallestIndex = candidate;
      }
    }
    if (smallestIndex !== start) {
      [result[start], result[smallestIndex]] = [
        result[smallestIndex],
        result[start],
      ];
    }
  }

  return result;
}
```

## Insertion Sort

```js
function insertionSort(values) {
  const result = [...values];

  for (let currentIndex = 1; currentIndex < result.length; currentIndex += 1) {
    const currentValue = result[currentIndex];
    let position = currentIndex;
    while (position > 0 && result[position - 1] > currentValue) {
      result[position] = result[position - 1];
      position -= 1;
    }
    result[position] = currentValue;
  }

  return result;
}
```

```js
console.log(selectionSort([9, 4, 7, 3])); // [3, 4, 7, 9]
console.log(insertionSort([9, 4, 7, 3])); // [3, 4, 7, 9]
```
