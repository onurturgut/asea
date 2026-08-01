---
document_type: "exercise-solutions"
document_id: "V01-C30-SOL01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Alıştırma Çözümleri

## Çözüm 1–3

İki literal farklı kimlik ürettiği için sonuç `false`tur. Runtime key erişimi
`object[key]` ile yapılır. Üçüncü alıştırmada sonuçlar sırasıyla `true`, `false`,
`true`; bütün `sound` okumaları `false`tur. `c` dışta yeni, içte ortak object'tir.

## Çözüm 4–5

`chapterId`: boş olmayan string; `score`: 0–100 integer; `feedback.visible`: boolean.

```js
function setFeedbackVisibility(attempt, visible) {
  if (typeof visible !== "boolean") {
    throw new TypeError("visible boolean olmalıdır.");
  }

  return {
    ...attempt,
    feedback: { ...attempt.feedback, visible },
  };
}
```

## Çözüm 6–7

```js
function createAttempt({ chapterId, score }) {
  if (typeof chapterId !== "string" || chapterId.trim() === "") {
    throw new TypeError("chapterId gerekir.");
  }

  if (!Object.hasOwn({ score }, "score")) {
    throw new TypeError("score gerekir.");
  }

  if (!Number.isInteger(score)) {
    throw new TypeError("score integer olmalıdır.");
  }

  if (score < 0 || score > 100) {
    throw new RangeError("score 0–100 aralığında olmalıdır.");
  }

  return { chapterId: chapterId.trim(), score };
}
```

Gerçek bir giriş object'inde ownership doğrudan o object üzerinde ölçülmelidir;
buradaki factory destructuring nedeniyle alanı parametre sınırında kabul eder.
