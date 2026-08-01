---
document_type: "continuity-plan"
document_id: "V01-C32-CP01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Devamlılık ve Öğretim Planı

## Gelen Yeterlik

- C13: function contract ve tek sorumluluk
- C14: parameter, argument, return ve call trace
- C16: davranışı küçük, test edilebilir fonksiyonlara bölme

## Öğretim Rotası

1. Function reference ve invocation result ayrılır.
2. Function parameter üzerinden davranış geçirilir.
3. Caller'ın callback'i çağırdığı an adım adım izlenir.
4. Operation/predicate/mapper/reducer/comparator sözleşmeleri karşılaştırılır.
5. Function döndürme capture olmadan uygulanır.
6. Signature mismatch adapter ile düzeltilir.
7. Side effect ve invocation count test spy ile görünür yapılır.

## Yanlış Kavrayışlar

| Yanlış düşünce | Müdahale |
| --- | --- |
| “Function geçirirken parantez gerekir.” | `fn`/`fn()` value trace |
| “Callback otomatik çalışır.” | Caller içindeki call expression |
| “Bütün callback'ler async'dir.” | `applyOperation` senkron izi |
| “Callable ise uyumludur.” | `map(parseInt)` signature vakası |
| “Arrow her zaman daha iyidir.” | Named/inline/adapter karar tablosu |

## Devir

C33 bu function-value modeline lexical capture, retained environment ve state lifetime
ekler. C31 callback rollerini array pipeline üzerinde kullanır. C32 geçmeden bu iki
chapter'ın öğrenci başarı kapıları açılmaz.
