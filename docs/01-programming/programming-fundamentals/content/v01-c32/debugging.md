---
document_type: "debugging-guide"
document_id: "V01-C32-DBG01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Hata Ayıklama Rehberi

## Beş Noktalı İz

1. Caller hangi value'yu callback parameter'ına bağlıyor?
2. Callback call expression hangi satırda?
3. Hangi argument'lar, hangi sırada gönderiliyor?
4. Callback ne döndürüyor?
5. Caller return'ü nasıl kullanıyor veya yok sayıyor?

## Belirti Tablosu

| Belirti | Olası neden | Kanıt |
| --- | --- | --- |
| “X is not a function” | `fn()` sonucu geçirildi | `typeof callback` |
| Output `undefined` | Callback return eksik | Callback result log |
| Beklenmedik argument | Signature mismatch | Spy arguments |
| Fazladan side effect | Birden çok invocation | Call count |
| Error dışarı çıktı | Caller catch etmiyor | Call trace |

## Basit Spy

```js
const calls = [];

function callbackSpy(value, index) {
  calls.push({ value, index });
  return value;
}
```

C32'de basit named spy kullanılır. Dış state'in neden function çağrıları arasında
erişilebilir kaldığını açıklayan closure/lifetime modeli C33'e bırakılır.
