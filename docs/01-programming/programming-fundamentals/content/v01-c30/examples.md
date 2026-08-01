---
document_type: "examples"
document_id: "V01-C30-EX01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Örnekleri

## Örnek 1 — Hesaplanan Property

```js
const student = { studentId: "ST-001", displayName: "Ada" };
const requestedKey = "displayName";

console.log(student[requestedKey]);
```

Bracket notation önce `requestedKey` değerini hesaplar, sonra `displayName`
property'sini okur. `student.requestedKey` farklı bir key arardı.

## Örnek 2 — Alias İzi

```js
const original = { completed: 30 };
const panel = original;
panel.completed += 1;

console.log(original.completed); // 31
console.log(panel === original); // true
```

İki binding tek `O1` kimliğini görür. Mutasyon `panel` değişkenine değil, `O1` state'ine
uygulanır.

## Örnek 3 — Shallow Copy

```js
const original = { progress: { completed: 30 }, theme: "calm" };
const copy = { ...original };

console.log(copy === original); // false
console.log(copy.progress === original.progress); // true
```

Yeni dış object, paylaşılan nested object vardır.

## Örnek 4 — Seçici Güncelleme

```js
function renameStudent(student, displayName) {
  if (typeof displayName !== "string" || displayName.trim() === "") {
    throw new TypeError("Geçerli bir ad gerekir.");
  }

  return { ...student, displayName: displayName.trim() };
}
```

Yalnız dış property değiştiği için `progress` referansı paylaşılır. Sözleşme,
`renameStudent` fonksiyonunun `progress` üzerinde mutation yapmamasını gerektirir.

## Örnek 5 — Property Varlığı

```js
const patch = { nickname: undefined };

console.log(Object.hasOwn(patch, "nickname")); // true
console.log(Object.hasOwn(patch, "avatar")); // false
```

Output aynı value'yu gösterebilse de iki state aynı değildir.
