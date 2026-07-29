---
document_type: "challenge"
challenge_id: "V01-C38-CH01"
title: "İki Ortam, Tek Çekirdek"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
learning_outcomes:
  - "V01-LO065"
  - "V01-LO066"
---

# V01-C38-CH01 — İki Ortam, Tek Çekirdek

## Görev

Aşağıdaki davranışları üç gruba ayıran bir kanıt raporu üretin:

1. Hem tarayıcı konsolunda hem Node.js'te çalışan dil davranışları.
2. Tarayıcı host'una özgü davranışlar.
3. Node.js host'una özgü davranışlar.

İncelenecek küçük ifadeler:

```js
const value = 2 + 3;
console.log(value);
typeof document;
typeof process;
```

## Kurallar

- Bir web sayfasının tarayıcı konsolunu ve yerel Node.js ortamını kullanın.
- Her ifade için önce tahmin, sonra gözlem kaydedin.
- Sonucu “çalıştı/çalışmadı” olarak bırakmayın; sorumlu katmanı açıklayın.
- `console`un iki ortamda bulunmasının onu otomatik olarak dil çekirdeği
  yapmadığını açıklayın.
- Node.js deneyinde sürüm ve tam komut kaydı bulunmalıdır.
- Tarayıcı deneyinde tarayıcı adı/sürümü ve sayfa bağlamı kaydedilmelidir.

## Teslimat

| İfade | Ortam | Tahmin | Gözlem | Katman | Gerekçe |
|---|---|---|---|---|---|

Tabloya ek olarak 200-400 kelimelik “Aynı JavaScript neden farklı imkânlar
gördü?” açıklaması yazın.

## Başarı Ölçütü

Öğrenci dil, host ve araç sorumluluklarını karıştırmadan iki deneyin sonucunu
açıklayabiliyor ve deneyin yeniden yapılması için yeterli ortam bilgisi
veriyorsa challenge tamamlanır.
