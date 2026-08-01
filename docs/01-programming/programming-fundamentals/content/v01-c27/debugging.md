# Hata Avı

Extraction sırasında `durationMinutes >= 60` koşulu `durationMinutes > 60`
olmuştur. 30 ve 90 dakika testleri geçer; 60 dakika boundary testi fail eder.

Tanı:

- Symptom: 60 dakikalık oturum 5 puan eksik.
- Değişiklik: yalnız karşılaştırma operatörü.
- Root cause: refactoring sırasında inclusive boundary semantiği değişti.
- Düzeltme: eski `>=` sözleşmesini geri yüklemek.
- Doğrulama: 59, 60 ve 61 dakika ile bütün suite’i çalıştırmak.

Bu örnek, yeşil happy path’in semantic preservation için yeterli olmadığını gösterir.
