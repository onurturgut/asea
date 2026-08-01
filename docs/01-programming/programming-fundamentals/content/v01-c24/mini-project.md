# Mini Proje — Failure Sınıflandırıcı

Bir olay kaydını alan ve sınıflandırma önerisi üreten küçük komut satırı mantığı
tasarlayın. Girdi; `phase`, `exceptionName`, `expected`, `observed`, `inputValid`
ve `environmentReady` alanlarını taşısın.

Program kesin bilmediği durumda “unknown” döndürmeli ve eksik kanıtları listelemelidir.
Amaç yapay zekâ gibi neden tahmin etmek değil; açık kurallarla öğrenciyi doğru
kanıtı toplamaya yönlendirmektir. Sonuçta classification, evidence ve nextAction
alanları bulunsun.
