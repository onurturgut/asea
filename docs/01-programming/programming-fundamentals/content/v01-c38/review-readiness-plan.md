---
document_type: "review-readiness-plan"
document_id: "V01-C38-RRP01"
title: "V01-C38 İnceleme Hazırlık Planı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 İnceleme Hazırlık Planı

## Otomatik Kontroller

- [ ] Chapter front matter ve 15 zorunlu H2.
- [ ] Markdown lint.
- [ ] Göreli bağlantılar.
- [ ] JavaScript code fence syntax.
- [ ] JSON dosyaları.
- [ ] Referans çözüm runtime çıktıları.
- [ ] Lab kabul komutları.
- [ ] Outcome/assessment kimlikleri.

## Bağımsız İnsan İncelemesi

- [ ] Teknik review: Node.js/ECMAScript sorumluluk sınırları.
- [ ] Pedagojik review: sıfırdan başlayan öğrenci için bilişsel yük.
- [ ] Türkçe dil ve öğretmen sesi review.
- [ ] Görsel/erişilebilirlik review.
- [ ] Gerçek öğrenci pilotu.
- [ ] Akran reproducibility deneyi.

Bu kutular gerçekten tamamlanmadan işaretlenmez. Otomatik doğrulama insan
incelemesinin yerine geçmez.

## Review Soruları

1. Problem tanımdan önce hissediliyor mu?
2. C08 bilgisi kısa köprüyle etkinleştiriliyor mu?
3. Dil, host ve araç sınırı hiçbir örnekte bulanıklaşıyor mu?
4. Terminal komutu ile JavaScript kodu açıkça ayrılıyor mu?
5. Değişken/tür kararları “bu string'dir” düzeyini aşıyor mu?
6. C29 kapsamı erken öğretilmeden doğru sorular devrediliyor mu?
7. Öğrenci bağımsız workflow'u gerçekten yeniden üretebilir mi?
8. Hata görevleri rastgele çözüm yerine kanıt sırasını öğretiyor mu?

## Yaşam Döngüsü

Otomatik doğrulama sonrası sonuç en fazla `Pass with Warnings` olabilir.
Bağımsız teknik/pedagojik review ve pilot tamamlanmadan chapter `Stable`
durumuna geçirilemez.
