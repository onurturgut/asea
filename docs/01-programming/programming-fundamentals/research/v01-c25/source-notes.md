# V01-C25 Kaynak Notları

## Araştırma sorusu

Öğrenciye debugger düğmelerini ezberletmeden, yeniden üretilebilir ve kanıta
dayalı bir debugging yöntemi nasıl kazandırılır?

## Bulgular

- Chrome DevTools belgeleri line breakpoint’in satır çalışmadan önce durduğunu;
  conditional breakpoint’in yalnız koşulda, logpoint’in durmadan gözlem için
  kullanılabildiğini açıklar.
- Chrome debugging referansı durulan anda değişken, scope ve call stack’in
  incelenebildiğini; step kontrollerinin yürütmeyi farklı ayrıntıda ilerlettiğini gösterir.
- MDN’ye göre `debugger` ifadesi kullanılabilir debugging işlevini çağırır; araç
  yoksa etkisizdir.
- Git `bisect`, bilinen iyi ve kötü commit aralığını binary search ile daraltarak
  değişikliği getiren commit’i bulur. Bu, binary isolation zihinsel modelini
  somutlaştırır.

## Öğretim kararı

Araçlardan önce expected/observed, reproduction, minimal case ve hipotez gelir.
Her log veya breakpoint belirli bir hipotez sorusuna bağlanır. Fix sonrasında
failing case ve komşu davranışlar birlikte doğrulanır.
