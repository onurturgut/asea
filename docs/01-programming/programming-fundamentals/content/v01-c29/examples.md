# Örnekler

## Operator-specific coercion

```js
console.log("5" + 1); // "51"
console.log("5" - 1); // 4
```

İlk `+` string concatenation yolu seçer; `-` numeric conversion ister.

## Truthiness token parsing değildir

```js
console.log(Boolean("false")); // true
```

Boş olmayan string truthy'dir. Domain tokenı için explicit equality gerekir.

## Validated conversion

```js
function parseCompleted(rawCompleted) {
  if (rawCompleted === "true") return true;
  if (rawCompleted === "false") return false;
  throw new TypeError('completed must be "true" or "false"');
}
```

Generic truthiness yerine kabul edilen grammar açıkça uygulanır.
