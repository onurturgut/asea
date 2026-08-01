# Örnekler

## Syntax failure

```text
const chapterTitle = "Hataların Anatomisi";
console.log(chapterTitle;
```

Program ayrıştırılamaz; kanıt `SyntaxError` ve kaynak konumudur.

## Runtime failure

```js
function cleanTitle(title) {
  return title.trim();
}

cleanTitle(undefined);
```

Geçerli kod yürütülürken `undefined` üzerinde `trim` kullanılamaz.

## Logic failure

```js
function percentage(completed, total) {
  return completed * total;
}
```

Exception yoktur; farklı örneklerde beklenen ve gerçek çıktı ayrışır.

## Açık sonuç sözleşmesi

```js
function requireTitle(rawTitle) {
  if (typeof rawTitle !== "string") {
    return { ok: false, error: { code: "TITLE_NOT_TEXT" } };
  }

  const title = rawTitle.trim();

  if (title.length === 0) {
    return { ok: false, error: { code: "TITLE_REQUIRED" } };
  }

  return { ok: true, value: title };
}
```

Beklenen kullanıcı hatası, kararlı ve denetlenebilir bir sonuçla temsil edilir.
