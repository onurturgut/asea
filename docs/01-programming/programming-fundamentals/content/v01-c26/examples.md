# Örnekler

## Primitive assertion

```js
function expectEqual(actual, expected, label) {
  if (!Object.is(actual, expected)) {
    throw new Error(`${label}: expected ${expected}, actual ${actual}`);
  }
}

expectEqual(2 + 2, 4, "toplama davranışı");
```

## Boundary testi

```js
const lowerBoundary = validateProgress(0);
expectEqual(lowerBoundary.ok, true, "alt sınır kabul edilir");
expectEqual(lowerBoundary.value, 0, "alt sınır değeri korunur");
```

## Invalid test

```js
const invalid = validateProgress(101);
expectEqual(invalid.ok, false, "üst sınır dışı reddedilir");
expectEqual(invalid.error.code, "PROGRESS_OUT_OF_RANGE", "doğru kod döner");
```

## Regression testi

```js
expectEqual(totalMinutes([30]), 30, "tek öğeli toplam regression");
```
