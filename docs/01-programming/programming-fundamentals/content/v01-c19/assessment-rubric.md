---
document_type: "assessment-rubric"
document_id: "V01-C19-AR01"
title: "V01-C19 Değerlendirme Rubriği"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Değerlendirme Rubriği

| Boyut | Ağırlık | Tam başarı kanıtı |
|---|---:|---|
| Call stack trace | 25 | Çağrı, parametre, bekleyen işlem ve dönüşler eksiksiz |
| Base case doğruluğu | 15 | En küçük problem doğrudan ve doğru sonuçlanıyor |
| Progress/termination | 20 | Her branch için sonlu ilerleme kanıtı |
| Kod, değişken ve tür sözleşmesi | 15 | Girdi/hata davranışı açık; ad, tür, değer kısıtı ve recursive sonuç gerekçeli |
| Test kanıtı | 15 | Base, tek-adım, normal, geniş/dallı, geçersiz ve derinlik sınırı |
| Alternatif tasarım | 5 | Iteration trade-off'u gerekçeli |
| Teknik iletişim | 5 | Terimler ve karar kaydı açık |

Toplam eşik 75'tir. `V01-LO029` için trace, `V01-LO030` için base/progress
boyutlarının her biri ayrı ayrı en az %75 olmalıdır.

## Outcome Kapıları

### `V01-LO029` — Çağrı yığınını izleme

Öğrenci en az:

- her frame'in parametre değerini;
- bekleyen işlemi;
- base case dönüşünü;
- çözülme sırasındaki ara ve nihai dönüşleri

bağımsız göstermelidir. Yalnız nihai çıktının doğru olması yeterli değildir.

### `V01-LO030` — Base case ve sonlanma

Öğrenci:

- base case'in doğrudan doğru sonucunu;
- recursive girdinin neden daha küçük olduğunu;
- her branch'in progress ölçüsünü;
- ölçünün alt sınırını ve geçerli girdi sözleşmesini

açıklamalıdır.

## Destek Düzeyinin Kaydı

| Düzey | Kullanılan destek | Bağımsız kanıt durumu |
|---|---|---|
| 0 | Destek yok | Geçerli |
| 1 | Yönlendirici soru | Geçerli; kaydedilir |
| 2 | Kavramsal ipucu | Geçerli; transfer sorusuyla doğrulanır |
| 3 | Kısmi kod iskeleti | Kısmen geçerli; yeni görev gerekir |
| 4 | Adım adım/tam çözüm | Bağımsız kanıt değildir |

Tam çözüm sonrası öğrenci aynı kodu yeniden yazmak yerine farklı veri ve adlarla
eşdeğer bir transfer görevi çözmelidir.
