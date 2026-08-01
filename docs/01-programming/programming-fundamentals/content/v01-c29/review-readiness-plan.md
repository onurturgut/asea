# Review Readiness Planı

## Teknik review

- Her output doğru ECMAScript conversion/equality kuralına bağlı mı?
- `typeof null`, `NaN` ve falsy kümesi doğru sınırla anlatılıyor mu?
- `==` folklore yerine algoritmayla açıklanıyor mu?
- Boundary empty, whitespace, malformed ve lossy girdiyi ayırıyor mu?
- C09, C30 ve C34 kapsamları erken tüketiliyor mu?

## Pedagojik review

- C05/C07/C38 geri çağırma köprüsü var mı?
- Öğrenci output'tan önce value/type tahmini yapıyor mu?
- Her conversion ara value/type ile görünür mü?
- Beş zorunlu uygulama kademesi var mı?
- Quiz, lab, interview ve P07 aynı outcome'ları ölçüyor mu?

Bağımsız review ve öğrenci pilotu tamamlanana kadar paket `Draft` kalır.
