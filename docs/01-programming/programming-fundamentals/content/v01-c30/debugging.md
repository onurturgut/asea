---
document_type: "debugging-guide"
document_id: "V01-C30-DBG01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Hata Ayıklama Rehberi

## Kimlik Önce, Output Sonra

Beklenmedik mutation gördüğünüzde önce görünür değerleri değil referans ilişkilerini
ölçün:

```js
console.log({
  sameRoot: before === after,
  sameProgress: before.progress === after.progress,
});
```

## Sistematik Prosedür

1. Değişen property yolunu tam yazın: `student.progress.completedChapters`.
2. Bu yol üzerindeki her object'e kavramsal kimlik verin: `O1`, `O2`.
3. Her atamanın yeni object mi alias mı oluşturduğunu işaretleyin.
4. Mutation yapan ilk satırı bulun.
5. Eski state'in korunması gerekiyorsa değişen yolu seçici kopyalayın.
6. Invariant ve identity testlerini birlikte çalıştırın.

## Sık Belirtiler

| Belirti | Olası neden | Kanıt |
| --- | --- | --- |
| “Kopya” değişince asıl da değişiyor | Nested alias | Nested `===` sonucu `true` |
| Alan yok sanılıyor | Falsy kontrol | `Object.hasOwn` sonucu |
| Güncelleme görünmüyor | Aynı root identity | Root `===` sonucu `true` |
| Factory string kabul ediyor | Sessiz coercion | `typeof` ile boundary testi |
