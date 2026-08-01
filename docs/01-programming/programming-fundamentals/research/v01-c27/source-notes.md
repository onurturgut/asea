# V01-C27 Kaynak Notları

## Bulgular

- Refactoring.com refactoring’i observable behavior’ı değiştirmeden iç yapıyı
  dönüştüren disiplin ve küçük behavior-preserving adımlar dizisi olarak tanımlar.
- Küçük adımlar sistemi çalışır durumda tutar ve hata alanını daraltır.
- Google JavaScript Style Guide, yeni okuyucunun anlayacağı açıklayıcı adları ve
  belirsiz kısaltmalardan kaçınmayı vurgular.
- Google documentation rehberi meaningful names’in aksi hâlde yoruma taşınacak
  bilgiyi kod içinde taşıyabildiğini; yorumun kodun veremediği bilgiyi eklemesi
  gerektiğini belirtir.

## Öğretim kararı

Öğrenci önce yeşil baseline kurar. Rename, constant ve extract adımlarını tek tek
uygular. Her adımda test ve boundary kanıtı alınır; iyileşme dört maintainability
ölçütüyle savunulur.
