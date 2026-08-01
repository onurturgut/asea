---
document_type: "mini-project"
document_id: "V01-C30-MP01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# Mini Proje — Öğrenci İlerleme Snapshot'ı

## Senaryo

Dashboard mevcut ilerlemeyi, audit alanı ise güncelleme öncesi snapshot'ı göstermeli.
Yanlış nested paylaşım geçmiş kaydı da değiştirmektedir.

## Ürün

- geçerli state factory'si,
- `advanceProgress` ve `renameStudent`,
- önce/sonra görünümü,
- identity teşhis raporu,
- invariant ve mutation testleri.

## Kabul Ölçütleri

Eski ilerleme sayısı güncellemeden sonra korunur. Rename işlemi değişmeyen progress'i
bilinçli paylaşır. Kod, mutation yapan ve yapmayan API'leri adlarıyla ayırır. Hatalı
input açık hata türüyle reddedilir.
