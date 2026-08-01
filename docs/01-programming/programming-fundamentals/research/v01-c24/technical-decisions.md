# V01-C24 Teknik Kararlar

## TD-01 — Terminoloji sözleşmesi ilan edildi

Kaynaklar error/fault/defect terimlerini farklı kullanabildiği için ASEA; defect,
error state, failure ve exception için yerel fakat kaynaklarla uyumlu çalışma
sözlüğü sunar. Bunun evrensel tek tanım olmadığı öğrenciye söylenir.

## TD-02 — Expected invalid input result ile temsil edildi

Kullanıcının düzeltmesi beklenen invalid girdi `{ ok, value/error }` sonucu ile
ele alınır. Programcı sözleşmesi ihlali örneğinde built-in Error alt türleri
gösterilir; tek yaklaşımın evrensel olduğu iddia edilmez.

## TD-03 — Mesaj ve kod ayrıldı

İnsan tarafından okunacak metin program kontrol akışının kimliği değildir.
Kararlı `code`, değişebilir `userMessage` ve geliştiriciye özel `diagnostic`
ayrı alanlardır.

## TD-04 — C36 kapsamı korunur

C24, throw/catch/cause davranışını sınıflandırmayı açıklayacak kadar kullanır.
Özel Error sınıfları ve ayrıntılı exception mimarisi C36'ya bırakılır.

## TD-05 — C25'e kanıt devri zorunlu

Lab çıktısı beklenen, gözlenen, girdi, ortam, sınıf ve propagation path içerir.
C25 bu kaydı minimal reproduction ve hipotez deneyine dönüştürür.
