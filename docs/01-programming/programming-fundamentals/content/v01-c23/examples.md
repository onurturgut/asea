# Örnekler

## Örnek 1 — Sabit iş

```js
function firstChapter(chapterIds) {
  return chapterIds[0];
}
```

Liste uzasa da tek bir konuma erişilir. İşlem sayısı `n` ile büyümez: `Θ(1)`.

## Örnek 2 — Doğrusal iş

```js
function countCompleted(progress) {
  let completed = 0;

  for (const item of progress) {
    if (item.done) completed += 1;
  }

  return completed;
}
```

Her kayıt bir kez incelenir. `n` kayıt için `n` kontrol vardır: `Θ(n)`.

## Örnek 3 — İki bağımsız döngü

```js
function printTwice(values) {
  for (const value of values) console.log(value);
  for (const value of values) console.log(value);
}
```

Toplam iş `2n` olsa da büyüme sınıfı `Θ(n)` olur. Döngüler iç içe değildir.

## Örnek 4 — İki farklı boyut

```js
function everyPair(students, chapters) {
  for (const student of students) {
    for (const chapter of chapters) {
      console.log(student, chapter);
    }
  }
}
```

`n` öğrenci ve `m` chapter varsa iş `n × m` olur: `Θ(nm)`.
