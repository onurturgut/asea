---
document_type: "interview-questions"
document_id: "V01-C30-INT01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Mülakat Soruları

## Temel Sorular

1. Object identity ile structural equality arasındaki fark nedir?
2. `const` object mutation'ını neden engellemez?
3. Dot ve bracket notation ne zaman seçilir?
4. Alias nasıl oluşur ve hangi riski taşır?
5. Shallow copy nasıl kanıtlanır?

## Kod Okuma

```js
const a = { meta: { active: true } };
const b = { ...a };
b.meta.active = false;
```

Output ezberi yerine binding–identity izini sözlü kurun.

## Tasarım Sorusu

Bir UI state güncellemesinde mutation mı, immutable update mi seçersiniz? Sahiplik,
paylaşım, geçmiş state, performans ve test edilebilirlik üzerinden koşullu cevap verin.

## Güçlü Cevap İşaretleri

Aday dil garantisiyle motor ayrıntısını ayırır; nested identity'yi ölçer; “her zaman
deep copy” gibi mutlak kural yerine veri sahipliği sözleşmesi kurar.
