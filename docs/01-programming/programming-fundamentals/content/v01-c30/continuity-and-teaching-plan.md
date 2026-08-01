---
document_type: "continuity-plan"
document_id: "V01-C30-CP01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Devamlılık ve Öğretim Planı

## Gelen Bilgi

- C18: kayıt, alan, schema ve invariant düşüncesi
- C29: raw değer, canonical type ve conversion boundary
- C33: state'in kapsamı, sahibi ve erişim yolları

C30, C18'i tekrar etmez; kaydın JavaScript çalışma zamanındaki kimliğini ve değişim
semantiğini görünür kılar. C29'un canonical değerlerini object içine yerleştirir.

## Öğrenme Rotası

1. Aynı içerik ile aynı kimlik ayrılır.
2. Dot/bracket access ve property ownership gözlenir.
3. Binding, reference, alias ve mutation elle izlenir.
4. Spread ile nested paylaşım keşfedilir.
5. Seçici immutable update uygulanır.
6. Gereksinim, property ve invariant üzerinden factory tasarlanır.
7. P07 ilerleme kaydı kanıtlanır.

Her aşama tahmin → çalıştırma → iz → kendi cümlesiyle açıklama döngüsünü izler.

## Yanlış Kavrayış Müdahaleleri

| Yanlış düşünce | Müdahale |
| --- | --- |
| “Aynı alanlar aynı object demektir.” | İki literal ve `===` deneyi |
| “Atama kopyalar.” | İki binding, tek `O1` izi |
| “`const` object'i dondurur.” | Rebinding ve property mutation ayrımı |
| “Spread deep copy'dir.” | Dış/nested identity matrisi |
| “`undefined` ise property yoktur.” | `Object.hasOwn` karşı deneyi |

## Devir

C31'e geçerken öğrenci tek bir kaydın invariant'larını ve identity politikasını
kanıtlamış olmalıdır. C31 bu kayıtları array koleksiyonunda arayacak, dönüştürecek
ve birleştirecektir. P07'nin tek kayıt modeli C31'in koleksiyon elemanıdır.
