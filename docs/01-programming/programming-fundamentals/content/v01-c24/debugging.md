# Hata Avı

```js
function saveDuration(rawDuration) {
  try {
    const duration = Number(rawDuration);
    return { ok: true, value: duration };
  } catch {
    return { ok: true, value: 10 };
  }
}
```

## Bulunması gereken kusurlar

- `Number(...)` çoğu geçersiz değerde exception atmaz; `NaN` üretir.
- Başarı işareti gerçek sonucu yanlış temsil eder.
- Sessiz varsayılan değer kullanıcının niyetini değiştirir.
- Tamsayı kontrolü yoktur.
- 10–180 değişmezi korunmaz.
- Diagnostic bağlam ve hata kodu kaybolur.

Önce test tablosu çıkarın. Kodu tek seferde yeniden yazmak yerine her kusurun
belirtisini, nedenini, en küçük doğrulama adımını ve önleme kuralını kaydedin.
