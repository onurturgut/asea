# Örnekler

## Rename

```js
function calculateSessionScore(session) {
  let score = session.mode === "focus"
    ? session.durationMinutes * 2
    : session.durationMinutes;

  if (session.completed) score += 10;
  if (session.durationMinutes >= 60) score += 5;
  return score;
}
```

İsimler değişir; observable score sözleşmesi değişmez.

## Extract Function

```js
function completionBonusFor(session) {
  return session.completed ? 10 : 0;
}
```

Yardımcı yalnız tek domain kuralını taşır. Extraction sonrası aynı boundary ve
regression testleri çalıştırılır.

## Anlamsal kayma

```js
function isLongSession(session) {
  return session.durationMinutes > 60;
}
```

Eski kural `>= 60` ise bu refactoring değildir; 60 dakikadaki davranış değişmiştir.
