# Örnekler

## Minimal failing case

```js
function totalMinutes(minutes) {
  let total = 0;

  for (let index = 0; index <= minutes.length; index += 1) {
    total += minutes[index];
  }

  return total;
}

totalMinutes([30]);
```

Tek öğe failure’ı korur; diğer veriler araştırma için gerekli değildir.

## Hipoteze yönelik gözlem

```js
function traceTotal(minutes) {
  let total = 0;

  for (let index = 0; index <= minutes.length; index += 1) {
    console.log({ index, length: minutes.length, value: minutes[index], total });
    total += minutes[index];
  }

  return total;
}
```

Log alanları H3’ü sınar: index gerçekten length değerine ulaşıyor mu?

## Logic failure

```js
function findLongestTitle(titles) {
  let longest = "";

  for (const title of titles) {
    if (title.length < longest.length) longest = title;
  }

  return longest;
}
```

Exception yoktur. Beklenen–gözlenen karşılaştırması failure’ı gösterir.
