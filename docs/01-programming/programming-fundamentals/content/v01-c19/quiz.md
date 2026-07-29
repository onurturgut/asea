---
document_type: "quiz"
document_id: "V01-C19-QZ01"
title: "V01-C19 Quiz"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
learning_outcomes: ["V01-LO029", "V01-LO030"]
last_updated: "2026-07-29"
---

# Quiz

Notlara ve çalışan koda bakmadan çözün. Yalnız seçenek işaretlemek yerine her
cevabın yanına bir cümlelik neden yazın.

## Kavramı Açıkla

1. Özyinelemeyi “fonksiyonun kendisini çağırması” cümlesinden daha güçlü
   biçimde açıklayın.
2. Base case'in “durmak” dışında ikinci sorumluluğu nedir?
3. Geçersiz girdi kontrolü ile base case arasındaki farkı bir örnekle açıklayın.
4. Progress measure neden yalnız base case'in kodda bulunmasından daha güçlü bir
   sonlanma kanıtı verir?

## Tahmin Et ve İzle

Şu kodu çalıştırmadan 5–8. soruları yanıtlayın:

```js
function show(n) {
  if (n === 0) {
    console.log("B");
    return;
  }

  console.log("G", n);
  show(n - 1);
  console.log("Ç", n);
}

show(2);
```

5. Konsol çıktısını doğru sırada yazın.
6. `show(1)` başladığında `show(2)` frame'inde hangi parametre ve bekleyen iş
   korunur?
7. İlk `Ç` satırı neden `Ç 1` olur?
8. `show(n - 1)` satırı `show(n)` olarak değiştirilirse ilk üç çağrı girdisi
   ne olur ve program neden durmaz?

## Hata Teşhisi

9. Şu fonksiyon hangi girdide en küçük biçimde bozulur? Belirtiyi ve kök nedeni
   ayrı yazın.

   ```js
   function sumTo(n) {
     if (n === 0) return 0;
     sumTo(n - 1);
   }
   ```

10. Aşağıdaki kodda base case vardır. Buna rağmen pozitif girdide neden
    sonlanmaz?

    ```js
    function broken(n) {
      if (n === 0) return 0;
      return n + broken(n + 1);
    }
    ```

11. Bir ağaç fonksiyonunun yalnız `children[0]` üzerinde recursive çağrı
    yaptığını düşünün. Tek zincir testi geçerken iki dallı test neden başarısız
    olur?

## Karar ve Transfer

12. Her çağrının parametreleri neden diğer çağrılardan bağımsızdır?
13. İki recursive branch taşıyan bir fonksiyon için termination nasıl
    doğrulanır?
14. Mantıksal olarak sonlanan bir fonksiyon hangi koşulda yine de call stack
    hatası verebilir?
15. Milyon elemanlık doğrusal bir diziyi toplarken döngüyü recursive çözüme
    tercih etmeniz için iki gerekçe yazın.

## Başarı Kapısı

- Her soru 2 puandır: doğru sonuç/karar 1 puan, doğru gerekçe 1 puan.
- Toplam puan: 30
- Toplam başarı eşiği: %75
- Kritik outcome soruları: 5, 6, 8, 10, 11, 13
- Kritik sorularda ayrı başarı eşiği: %75
- Bir cevap doğru sonuç fakat yanlış gerekçe içeriyorsa tam puan almaz.
- Tam çözüm veya yüksek düzey AI ipucu kullanıldıysa benzer yeni bir izleme
  sorusu bağımsız çözülmelidir.
