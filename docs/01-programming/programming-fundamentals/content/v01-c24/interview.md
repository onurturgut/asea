# Mülakat Soruları

## Ana soru

“Defect, error state, failure ve exception arasında nasıl ayrım yaparsınız?”

Güçlü cevap, ekip sözlüğünü açıklar; kod kusuru → yanlış iç durum → gözlenen
failure zincirini kurar ve exception'ın normal akışı kesen bir mekanizma olduğunu,
her failure'ın exception üretmediğini belirtir.

## Takip soruları

- Exception oluşturmayan bir failure örneği verin.
- Beklenen geçersiz girdide result object ile throw arasında nasıl seçersiniz?
- Her şeyi yakalayıp genel mesaj göstermek neden risklidir?
- Kullanıcı mesajı ve diagnostic bağlamı nasıl ayırırsınız?
- Fail-fast ve recovery arasında neye göre karar verirsiniz?
