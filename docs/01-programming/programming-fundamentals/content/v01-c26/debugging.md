# Hata Avı — Yeşil Ama Değersiz Test

```js
function testRate() {
  const actual = completionRate(3, 12);
  const expected = completionRate(3, 12);
  expectEqual(actual, expected, "rate works");
}
```

Test daima aynı implementation’ı kendisiyle karşılaştırır. Yanlış formül iki
tarafta da aynı sonucu üretir. Oracle bağımsız değildir; test adı sözleşmeyi
söylemez; normal dışı örnek yoktur ve tek yeşil sonuç güven yanılsaması üretir.

Expected değer sözleşmeden `25` gelmeli, test “3/12 tamamlanma yüzde 25 döner”
diye adlandırılmalı ve sıfır total gibi ayrı contract davranışları ayrı testte
ele alınmalıdır.
