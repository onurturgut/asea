# V01-C24 Kaynak Notları

## Araştırma sorusu

Başlangıç seviyesindeki öğrenciye “hata” tek bir kavrammış gibi öğretilmeden,
failure sınıflandırması ve kontrollü boundary davranışı nasıl kazandırılır?

## Bulgular

- NIST SP 800-142, geliştirici yanlışı, programdaki fault ve beklenenden farklı
  sonuç olan failure arasında nedensel ayrım kurar. Terminoloji kaynaklar arasında
  değişebildiği için ASEA çalışma sözlüğünü açıkça ilan etmelidir.
- MDN, `throw` ile üretilen exception'ın çağrı zincirinde ilerlediğini ve
  `try...catch` içinde kontrolün `catch` bloğuna geçtiğini açıklar.
- JavaScript teknik olarak herhangi bir değeri throw etmeye izin verir; MDN,
  yakalayan kodun `message` gibi alanlara güvenebilmesi için Error nesnesi veya
  alt sınıfı kullanılmasını önerir.
- `Error.cause`, hatayı yeni bağlamla yeniden fırlatırken orijinal nedeni korur.
  Mesaj metni makine tarafından ayrıştırılacak kararlı veri olarak görülmemelidir.

## Öğretim kararı

Öğrenci önce belirtiden olay zincirine, sonra beş failure sınıfına geçer. Exception
yalnız bir mekanizma olarak öğretilir. Error contract; code, userMessage,
diagnostic, recoverable ve safe state boyutlarıyla tasarlanır.
