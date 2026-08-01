---
document_type: "challenge"
document_id: "V01-C30-CH01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Challenge — Patch Sözleşmesi

Bir ilerleme kaydına yalnız izin verilen alanları uygulayan `applyProgressPatch`
fonksiyonu tasarlayın.

## Kurallar

- Patch yalnız `displayName` ve `progress.completedChapters` içerebilir.
- Eksik alan “değiştirme” anlamına gelir; own `undefined` geçersizdir.
- Canonical type ve invariant'lar korunmalıdır.
- Değişiklik yoksa aynı root identity dönebilir.
- Dış alan değişirse yeni root; nested ilerleme değişirse yeni root ve yeni progress
  üretilmelidir.
- Input ve patch mutate edilmemelidir.

## Kanıt

En az sekiz test, property ownership testi ve her senaryo için identity matrisi
sunulmalıdır. Kararınızı “neden her durumda deep copy yapmadım?” sorusuyla savunun.
