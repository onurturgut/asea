# Görselleştirme Notları

## Contract → test akışı

Contract maddesi → partition → temsilci input → oracle/expected → assertion →
pass/fail zinciri yatay gösterilmeli. Actual yalnız execution sonrasında eklenmelidir.

## Boundary sayı doğrusu

0–100 kapalı aralığında -1, 0, 50, 100 ve 101 işaretlenmeli. Kabul/ret yalnız
renkle değil ikon ve metin etiketiyle ayrılmalıdır.

## Risk coverage matrisi

Satırlar risk, sütunlar test ID’leri. İşaretli hücre testin riske kanıt sağladığını,
boş hücre otomatik olarak defect olduğunu değil olası kör noktayı göstermelidir.
