# Hata Ayıklama

## Vaka

```js
function readSettings(rawRetries, rawEnabled) {
  return {
    retries: Number.parseInt(rawRetries, 10),
    enabled: Boolean(rawEnabled),
  };
}
```

### Smallest failing input

`readSettings("3times", "false")` sonucu `{ retries: 3, enabled: true }` olur.

### Cause

`parseInt` geçerli integer prefix'ini kabul eder. `Boolean` boş olmayan string'in
kelime anlamını değil truthiness'ını değerlendirir.

### Düzeltme

Integer tokenını regex ile bütünüyle doğrulayın ve `Number` kullanın. Boolean
tokenını strict equality ile açıkça eşleyin. `"3"`, `"3times"`, `"false"`,
`"true"`, empty ve whitespace testlerini çalıştırın.
