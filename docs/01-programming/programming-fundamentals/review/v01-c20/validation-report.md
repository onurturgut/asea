---
document_type: "validation-report"
document_id: "V01-C20-VR001"
title: "V01-C20 Üretim Doğrulama Raporu"
version: "0.1.0"
status: "Pass with Warnings"
chapter_id: "V01-C20"
validated_at: "2026-07-29"
---

# V01-C20 Üretim Doğrulama Raporu

## Sonuç

**Pass with Warnings.** Blueprint, research, 3.660 kelimelik ana ders ve 21
dosyalık öğrenci/destek paketi otomatik kapıyı geçti. Bağımsız teknik,
pedagojik, assessment, erişilebilirlik review ve öğrenci pilotu bekliyor.

## Kapsam

| Grup | Sayı |
|---|---:|
| Ana chapter | 1 |
| Blueprint | 1 |
| Research | 2 |
| Content package | 21 |
| Doğrulama öncesi toplam | 25 |
| Markdown | 24 |
| JSON | 1 |

## Otomatik Sonuçlar

| Kontrol | Sonuç |
|---|---|
| Markdown lint | 24 dosya, 0 issue |
| Zorunlu H2 | 15/15 doğru sıra |
| JavaScript fenced syntax | 48/48 |
| Göreli bağlantılar | 21/21 |
| English terms JSON | 12 terim, parse başarılı |
| Runtime assertions | 12/12 |
| Turkish case karşı örneği | `JAVASCRIPT → javascrıpt` doğrulandı |
| NFC eşdeğerliği | Pass |
| Empty input | `[]`, count `0` |
| UTF-16 emoji sınırı | code unit `2`, code point `1` |
| Content compile | `V01-C20`, 233 block |
| Admin discovery | Ana ders + 15 destek kartı loader sözleşmesiyle uyumlu |

## Masa Başı Öğretim Kontrolü

- C19 ham başlık çıktısı geri çağrılıyor.
- Problem, tanımdan önce başarısız eşleşmeyle kuruluyor.
- Ham/display/search/token temsilleri ayrılıyor.
- Değişken ve tür kararları gerekçelendiriliyor.
- Türkçe locale'in faydası ve karma dilli sınırı birlikte öğretiliyor.
- Unicode normalization, case ve validation birbirinden ayrılıyor.
- Code unit/code point/grapheme sınırı doğru kuruluyor.
- Birlikte yapalım, Şimdi sen dene, Hata avı, bağımsız uygulama ve P05 bağlantısı
  bulunuyor.
- Quiz, lab, mülakat, challenge ve rubric `V01-LO031` ile hizalı.
- C21'e normalize başlık koleksiyonu devrediliyor.

## Yakalanan ve Düzeltilen Bulgular

İlk runtime testinde tamamen büyük harfli İngilizce `JAVASCRIPT` değerinin
`tr-TR` locale ile `javascrıpt` olduğu görüldü. İlk örnekte locale'in karma
dilli içeriği otomatik çözdüğü yönünde hatalı bir izlenim oluşabilirdi.

Düzeltme:

- Ana karma başlıkta teknik terimin kanonik `JavaScript` yazımı korundu.
- `JAVASCRIPT` ayrı karşı örnek olarak eklendi.
- İçerik dili metadata'sı, terim sözlüğü veya çok dilli arama stratejisi
  gereksinimi açık sınır olarak kaydedildi.
- Challenge bu trade-off'u savunmayı zorunlu kıldı.

## Uyarılar

1. Blueprint `Unfrozen`.
2. C19 öğretim bağlamıdır fakat kanonik prerequisite listesinde değildir.
3. C21'in `C31` kanonik dependency'si henüz üretilmedi; sırayla üretim kararı
   uygulanırken bu açık C21 review'da korunmalıdır.
4. `Intl.Segmenter` ileri sınır olarak tanıtıldı; ilk pipeline'ın zorunlu
   bağımlılığı değildir.
5. Gerçek öğrenci ve akran pilotu yapılmadı.
6. Görsel notlar var; son UI/erişilebilirlik review yapılmadı.

## Yaşam Döngüsü

C20 `Draft` olarak admin tarafından okunabilir ve C21 üretimine bağlam
sağlayabilir. İnsan review/pilot tamamlanmadan `Stable` yapılamaz.
