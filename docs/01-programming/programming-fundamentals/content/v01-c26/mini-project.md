# Mini Proje — Contract’tan Test Matrisi

Yapılandırılmış bir function contract alıp test matrisi oluşturan JavaScript
aracı yazın. Contract; acceptedTypes, range, integerOnly, required ve errorCodes
alanlarını taşısın.

Araç normal, boundary ve invalid adaylar önermeli; her satırda partition, input,
expected ve risk göstermelidir. Üretilen adayların otomatik olarak doğru oracle
olmadığını açıkça belirtin; kullanıcı her expected sonucu onaylamalıdır.
