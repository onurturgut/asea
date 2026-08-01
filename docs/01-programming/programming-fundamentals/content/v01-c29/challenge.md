# Challenge — Ambiguous Import'u Savun

Bir dış sistem şu kayıtları gönderiyor:

```text
id,minutes,completed
0012,40,false
0013,,true
0014,20minutes,0
```

## Görev

- Her alan için domain type ve accepted grammar belirleyin.
- Hangi satırların neden reddedileceğini açıklayın.
- Empty minutes ve `0` completed için en az iki policy karşılaştırın.
- Raw değerleri koruyan conversion result tasarlayın.
- 12 test ve value/type trace üretin.
- Information loss, ambiguity ve failure riskleriyle teknik savunma yazın.

Başarı yalnız parse edilen satır sayısı değil, policy'nin yeniden üretilebilir ve
değişiklik altında savunulabilir olmasıdır.
