# Alıştırma Çözümleri

## 1

Sırasıyla syntax, logic, environmental, runtime ve contract. Yalnız etiket yeterli
değildir: ayrıştırma mesajı; beklenen–gerçek çıktı; eksik dış koşul; TypeError ve
çalışma anındaki değer; ilan edilen aralık ihlali kanıt olarak eklenmelidir.

## 2

Başarı `{ ok: true, value }` olabilir. Sayı/tamsayı olmayan değer için
`DURATION_NOT_INTEGER`, sınır dışı değer için `DURATION_OUT_OF_RANGE` kullanılır.
İki durumda da kullanıcı girdiyi düzelterek tekrar deneyebilir; geçersiz değer
kaydedilmez.

## 3

Failure `validate` sınırında üretilir. `save` başarısız sonucu değiştirmeden taşır;
`render` kullanıcı mesajını gösterir. Diagnostic bağlam yalnız geliştirici kanalına
gider. Veri yazma yan etkisi çalışmaz.
