---
document_type: "laboratory"
document_id: "V01-C13-L01"
title: "Design Function Contracts"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
learning_outcomes: ["V01-LO019", "V01-LO020"]
estimated_time: "75 dakika"
last_updated: "2026-07-23"
---

# Laboratuvar — Fonksiyon Sözleşmeleri Tasarlama

## Objective

Üç davranışı açık contract'lara dönüştürmek, implementation ve testleri contract maddelerine bağlamak, çağrı/dönüş izini çıkarmak ve bir ihlali teşhis etmek.

## Requirements

- Node.js ve terminal.
- Contract tablosu şablonu.
- Ana dersteki `assertEqual` ve `assertThrows` yardımcıları.
- `normalizeStudentName`, `calculateCompletionPercentage` ve `formatProgressSummary` davranışları.

## Tasks

1. Her fonksiyon için sorumluluk, girdi, ön koşul, çıktı, son koşul, etki ve hata alanlarını doldurun.
2. `total=0`, yuvarlama ve boş ad davranışlarını implementation öncesi karara bağlayın.
3. Her contract için normal, sınır ve geçersiz vaka matrisi üretin.
4. Fonksiyonları yalnız contract'ta yetkilendirilen davranışlarla uygulayın.
5. Toplam en az 18 otomatik test çalıştırın.
6. `createProgressSummary("  Ada  ", 3, 4)` için tam çağrı ve dönüş izi üretin.
7. Bilerek bir contract violation ekleyin; ilk ayrışmayı ve kök nedeni bulun.
8. Düzeltmeden sonra regresyon testini kaydedin.
9. AI'dan alternatif alın; sözleşmeyle çelişen en az bir varsayımı bulun.
10. Önceki ve son sürümün contract uyumunu raporlayın.

## Bonus Challenge

Fonksiyonların hiçbirinin ekrana yazmadığını kanıtlayın; yalnız orkestrasyon katmanında çıktı üretin. Aynı contract'ı sağlayan ikinci yüzde implementation'ı yazıp aynı test kümesine tabi tutun.

## Evaluation Criteria

- Üç eksiksiz contract: 25 puan.
- Çağrı/dönüş izinin doğruluğu: 20 puan.
- Normal, sınır, geçersiz ve etki testleri: 25 puan.
- İhlal teşhisi ve regresyon: 20 puan.
- AI denetimi ve teknik iletişim: 10 puan.

Başarı için toplam 75; contract ve test ölçütlerinin her birinden en az 15 puan gerekir.
