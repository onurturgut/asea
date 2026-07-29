---
document_type: "debugging-guide"
document_id: "V01-C20-DBG01"
title: "V01-C20 Metin Hata Ayıklama"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
---

# V01-C20 Metin Hata Ayıklama

## Kanıt Sırası

1. Ham değeri `JSON.stringify(rawText)` ile görünür yapın.
2. Her pipeline aşamasını ayrı yazdırın.
3. Değerin türünü ve array ise elemanlarını inceleyin.
4. Locale ve Unicode formu politikasını doğrulayın.
5. En küçük karşı örneği çalıştırın.
6. Düzeltmeden sonra normal ve sınır vakalarını yeniden test edin.

## Belirti Haritası

| Belirti | Muhtemel neden | İlk kanıt |
|---|---|---|
| İç boşluklar kaldı | `trim` yanlış beklendi | `JSON.stringify(trimmed)` |
| Kelime sayısı fazla | Boş token | Token array |
| İstanbul eşleşmedi | Locale gizli | Case çıktısının code point'leri |
| Aynı görünen metin eşit değil | Unicode representation | NFC öncesi/sonrası |
| Emoji uzunluğu büyük | Code unit sayımı | `length` ve `Array.from` |
| Boş metin 1 kelime | `[""]` sonucu | Token array |

## Hata Avı

```js
function normalize(text) {
  return text.toLowerCase().trim().split(" ");
}
```

Şu girdilerle tek tek sınayın:

- `"  İSTANBUL  "`
- `"iki   kelime"`
- `"   "`
- `"\u00E9"` ve `"e\u0301"`

Her başarısız davranışı case, whitespace, empty input veya Unicode katmanına
yerleştirin; bütün fonksiyonu bir anda değiştirmeyin.
