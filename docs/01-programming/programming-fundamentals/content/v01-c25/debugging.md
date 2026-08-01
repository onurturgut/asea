# Hata Avı — Debugging Sürecindeki Kusurlar

Bir geliştirici aynı anda koşulu değiştiriyor, varsayılan değer ekliyor ve
exception’ı yakalıyor. Sonuç doğru görünürse şu sorular cevapsız kalır:

- Failure hangi değişiklikle kayboldu?
- İlk hipotez neydi?
- Root cause hangi kod kararıydı?
- Yeni varsayılan değer başka girdileri bozdu mu?

İkinci hata, binlerce etiketsiz log satırı üretmektir. Her gözlem hipotez kimliği,
tur veya kayıt kimliğiyle bağlanmalıdır.

Üçüncü hata, exception satırını doğrudan root cause ilan etmektir. Değer daha
önce bozulmuş olabilir; call stack ve veri akışı geriye doğru izlenmelidir.
