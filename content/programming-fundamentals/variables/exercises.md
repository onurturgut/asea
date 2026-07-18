# Değişkenler (Variables) ve Durum (State) Alıştırmaları

Alıştırmalar aktif öğrenme için tasarlanmıştır. Kod İngilizce, açıklamalar
Türkçedir. Her görev `V01-LO009`, `V01-LO010` veya ikisini birlikte kapsar.

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

## Başlangıç Seviyesi

### Alıştırma 1: İlk Bağlama

**Amaç:** Yeniden atanmayacak değeri doğru bildirmek.  
**Görev:** `courseName` adlı bağlamayı `"Programming Fundamentals"` değeriyle
oluşturun ve yazdırın.  
**Beklenen çıktı:** `Programming Fundamentals`  
**Öğrenme çıktısı:** `V01-LO010`

### Alıştırma 2: Sayaç

**Amaç:** Değişebilir durumu modellemek.  
**Görev:** `count` değerini `0`dan başlatıp iki kez artırın.  
**Beklenen çıktı:** `2`  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 3: Durum Tablosu

**Amaç:** Atama dizisini izlemek.  
**Görev:** `let balance = 10; balance += 5; balance -= 3;` için her komuttan
sonraki değeri tabloya yazın.  
**Beklenen çıktı:** Sırasıyla `10`, `15`, `12`.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 4: `const` mu `let` mi?

**Amaç:** Bildirim seçimini gerekçelendirmek.  
**Görev:** `birthYear` ve `currentAge` için uygun anahtar sözcükleri seçip birer
cümleyle açıklayın; yaşın daha sonra güncelleneceğini varsayın.  
**Beklenen çıktı:** `birthYear` için `const`, `currentAge` için `let` ve değişim
ihtiyacına dayalı gerekçe.  
**Öğrenme çıktısı:** `V01-LO010`

### Alıştırma 5: İlklendirme

**Amaç:** Bildirim ve ilklendirmeyi ayırmak.  
**Görev:** Önce ilklendiricisiz `result` bağlaması oluşturun, değerini yazdırın,
sonra `42` atayın ve tekrar yazdırın.  
**Beklenen çıktı:** `undefined`, ardından `42`.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 6: Nesne Mutasyonu

**Amaç:** Mutasyonu yeniden atamadan ayırmak.  
**Görev:** `const profile = { visits: 0 }` oluşturun ve `visits` değerini bir
artırın.  
**Beklenen çıktı:** `{ visits: 1 }` eşdeğeri.  
**Öğrenme çıktısı:** `V01-LO010`

### Alıştırma 7: Blok Kapsamı

**Amaç:** Sözlüksel kapsamı gözlemlemek.  
**Görev:** Bir blok içinde `const message = "inside"` oluşturup blok içinde
yazdırın; dışarıdaki okumayı yorum satırında neden başarısız olacağını açıklayın.  
**Beklenen çıktı:** `inside`; açıklamada `ReferenceError`.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 8: Hata Sınıfı

**Amaç:** `const` yeniden atamasını tanımak.  
**Görev:** `const limit = 3; limit = 4;` kodunun hata sınıfını çalıştırmadan
tahmin edin, sonra ayrı dosyada doğrulayın.  
**Beklenen çıktı:** `TypeError`.  
**Öğrenme çıktısı:** `V01-LO010`

## Orta Seviye

### Alıştırma 9: Sipariş Toplamı

**Amaç:** Birden fazla bağlamanın durumunu izlemek.  
**Görev:** `subtotal`, sabit `shipping` ve `total` bağlamalarını kullanarak iki
ayrı toplam hesaplayın; her adım için durum tablosu oluşturun.  
**Beklenen çıktı:** Kodunuzla aynı değerleri gösteren eksiksiz tablo.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 10: Gölgeleme

**Amaç:** En yakın bağlamanın seçildiğini göstermek.  
**Görev:** Dış, fonksiyon ve blok kapsamlarında üç farklı `label` değeri
oluşturup içten dışa yazdırın.  
**Beklenen çıktı:** `block`, `function`, `outer`.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 11: `var` ve Blok

**Amaç:** `var`ın blok kapsamlı olmadığını göstermek.  
**Görev:** Fonksiyon içindeki `if` bloğunda `var status = "ready"` bildirip
bloktan sonra döndürün.  
**Beklenen çıktı:** `ready`.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 12: Geçici Ölü Bölge

**Amaç:** Erken sözlüksel okumayı çözümlemek.  
**Görev:** Bildirimden önce `let value` okuyan ayrı bir örnek hazırlayın; hangi
komutta durduğunu ve sonraki durumun neden oluşmadığını yazın.  
**Beklenen çıktı:** İlk okumada `ReferenceError`; sonraki komutlar çalışmaz.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 13: Paylaşılan Kimlik

**Amaç:** İki bağlamanın aynı nesneye başvurduğunu kanıtlamak.  
**Görev:** `first` nesnesini `second`a atayın, özelliği `second` üzerinden
değiştirin ve iki eşitlik kontrolü yazın.  
**Beklenen çıktı:** Özellik için `true`, `first === second` için `true`.  
**Öğrenme çıktısı:** `V01-LO010`

### Alıştırma 14: Yeniden Bildirim Deneyi

**Amaç:** Ayrıştırma hatasıyla çalışma zamanı hatasını ayırmak.  
**Görev:** Tekrarlı `let` bildirimini ve tekrarlı `var` bildirimini ayrı
dosyalarda çalıştırın; sonucu karşılaştırın.  
**Beklenen çıktı:** `let` dosyası `SyntaxError`; `var` dosyası son atanan değeri
yazdırır.  
**Öğrenme çıktısı:** `V01-LO009`

### Alıştırma 15: Döngü Toplamı

**Amaç:** Her bağlamanın yaşam döngüsüne göre anahtar sözcük seçmek.  
**Görev:** `[4, 6, 10]` dizisini `for...of` ile toplayın; `price` ve `total`
seçimlerini açıklayın.  
**Beklenen çıktı:** `20`; `price` için `const`, `total` için `let`.  
**Öğrenme çıktısı:** `V01-LO009`, `V01-LO010`

### Alıştırma 16: Atama mı Karşılaştırma mı?

**Amaç:** Koşul içindeki yan etkiyi tanımak.  
**Görev:** `if ((isReady = true))` kodunu durum değişmeden sınama yapacak
biçimde düzeltin.  
**Beklenen çıktı:** `if (isReady === true)` veya eşdeğer mantıksal sınama.  
**Öğrenme çıktısı:** `V01-LO009`

## İleri Seviye

### Alıştırma 17: Bağlama Politikası İncelemesi

**Amaç:** Gerçekçi kodda değişim sahipliğini açıklamak.  
**Görev:** Yapılandırma, deneme sayacı, istek kimliği ve önbellek için bildirim
seçimlerini yapın; nesne mutasyon politikasını ayrıca yazın.  
**Beklenen çıktı:** Dört bağlama için beklenen yeniden atamaya dayalı karar ve
önbellek/yapılandırma için ayrı mutasyon kararı.  
**Öğrenme çıktısı:** `V01-LO010`

### Alıştırma 18: Tam Çalıştırma İzi

**Amaç:** Hata oluşan programda eksiksiz durum izi üretmek.  
**Görev:** İki `let`, bir `const`, bir nesne mutasyonu ve son olarak `const`
yeniden ataması içeren kısa program yazın; hata noktasına kadar tabloyu doldurun.  
**Beklenen çıktı:** Her yazmayı gösteren tablo, son satırda `TypeError`, hata
sonrası hayalî durum yok.  
**Öğrenme çıktısı:** `V01-LO009`, `V01-LO010`

### Alıştırma 19: Ortam Sınırı Karşılaştırması

**Amaç:** Üst düzey kapsam iddialarını çalışma ortamıyla sınırlandırmak.  
**Görev:** Tarayıcı klasik betiğinde üst düzey `var` ve `let` için
`globalThis` ilişkisini açıklayan iki küçük örnek hazırlayın; modülde neden aynı
sonucu varsayamayacağınızı yazın.  
**Beklenen çıktı:** Klasik betikte `var` özelliği ile sözlüksel `let`
bağlamasının ayrımı ve açık ortam uyarısı.  
**Öğrenme çıktısı:** `V01-LO009`

#### Çalışma Ortamının Hazırlanması

1. Boş bir `scope-environments` klasörü oluşturun.
2. Klasöre `classic.html`, `classic.js`, `module.html` ve `module.js`
   dosyalarını ekleyin.
3. `classic.html` içeriğini yazın:

```html
<!doctype html>
<html lang="tr">
  <body>
    <script src="./classic.js"></script>
  </body>
</html>
```

4. `classic.js` içeriğini yazın:

```js
var classicVar = 1;
let classicLet = 2;

console.log(globalThis.classicVar);
console.log("classicLet" in globalThis);
```

5. `module.html` içeriğini yazın:

```html
<!doctype html>
<html lang="tr">
  <body>
    <script type="module" src="./module.js"></script>
  </body>
</html>
```

6. `module.js` içeriğini yazın:

```js
var moduleVar = 1;
let moduleLet = 2;

console.log("moduleVar" in globalThis);
console.log("moduleLet" in globalThis);
```

7. Klasör içinde yerel sunucu başlatın:

```powershell
py -m http.server 8000
```

`py` komutu yoksa `python -m http.server 8000` kullanın.

8. Tarayıcıda önce `http://localhost:8000/classic.html`, sonra
   `http://localhost:8000/module.html` adresini açın ve geliştirici konsolunu
   inceleyin.
9. Klasik betikte beklenen çıktı `1` ve `false`; modülde beklenen çıktı
   `false` ve `false` değerleridir.
10. Sonucun tarayıcı klasik betiği ve ECMAScript modülü bağlamına ait olduğunu,
    Node.js CommonJS veya REPL davranışına genellenemeyeceğini raporunuza yazın.

### Alıştırma 20: Mini Kod İncelemesi

**Amaç:** Bakım sorunlarını sistematik bulmak.  
**Görev:** `var`, geniş kapsam, anlamsız ad, gereksiz `let`, nesne mutasyonu ve
koşul içinde atama içeren 10-15 satırlık örneği yeniden düzenleyin. Her değişimi
bir cümleyle gerekçelendirin.  
**Beklenen çıktı:** Davranışı koruyan modern kod; en az beş açık gerekçe ve
doğru bildirim seçimleri.  
**Öğrenme çıktısı:** `V01-LO009`, `V01-LO010`

#### Başlangıç Kodu

```js
var appState = { ready: false, lastPrice: 0 };
let maxRetries = 3;
var x = 0;
function processPrices(prices) {
  var total = 0;
  if (prices.length > 0) {
    var p = prices[0];
    appState.lastPrice = p;
    total = prices.reduce((sum, price) => sum + price, 0);
  }
  if ((appState.ready = true)) {
    x = total;
  }
  return x;
}
```

#### Korunacak Davranış

```js
console.log(processPrices([12, 8]));
console.log(appState);
```

Beklenen değerler:

```text
20
{ ready: true, lastPrice: 12 }
```

Nesnenin konsol biçimi çalışma ortamına göre değişebilir.

#### İnceleme Kontrolü

Yeniden düzenleme sırasında:

- geniş kapsamdaki durumu daraltın;
- `var` bildirimlerini niyete uygun `const` veya `let` ile değiştirin;
- `maxRetries` kullanılmıyorsa kaldırın veya tasarımdaki görevini açıklayın;
- `x` ve `p` adlarını alan anlamı taşıyan adlarla değiştirin;
- koşul içindeki atamayı açık durum güncellemesi ve ayrı sınama hâline getirin;
- nesne mutasyonunun sahibini görünür yapın;
- önceki çıktı ve durum değerlerini koruyun.
