# Değişkenler (Variables) ve Durum (State) Mülakat Hazırlığı

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

Sorular adayın ezberini değil tahmin, gerekçe ve sınırlandırma becerisini ölçer.

## Junior Seviyesi

### Soru 1

**Soru:** Değişkeni kendi sözlerinizle tanımlayın.  
**Beklenen cevap:** Program durumuna verilen adlı bağlama; ad, bağlama ve değer
ayrımı.  
**Değerlendirme notu:** Yalnızca “bellekte kutu” cevabı eksiktir.

### Soru 2

**Soru:** Bildirim ile atama arasındaki fark nedir?  
**Beklenen cevap:** Bildirim bağlama oluşturur; atama bir başvuru üzerinden
değer yazar.  
**Değerlendirme notu:** İlklendiriciyi iki kavramın kesişimi olarak açıklaması
artı değerdir.

### Soru 3

**Soru:** `let` ve `const` arasında nasıl seçim yaparsınız?  
**Beklenen cevap:** Bağlama yeniden atanacaksa `let`, atanmayacaksa `const`.  
**Değerlendirme notu:** Kararı veri türüne bağlamamalıdır.

### Soru 4

**Soru:** `const user = {}; user.name = "Ada";` geçerli midir?  
**Beklenen cevap:** Evet; nesne mutasyonu bağlama yeniden ataması değildir.  
**Değerlendirme notu:** `const`un derin dondurma olmadığını söylemelidir.

### Soru 5

**Soru:** `var`, `let` ve `const`un temel kapsam farkı nedir?  
**Beklenen cevap:** `var` sıradan blok kapsamlı değildir; `let` ve `const`
sözlüksel blok kapsamlı olabilir.  
**Değerlendirme notu:** Fonksiyon ve ortam sınırını doğru kurmalıdır.

### Soru 6

**Soru:** Geçici Ölü Bölge nedir?  
**Beklenen cevap:** Sözlüksel bağlamanın yaratıldığı fakat ilklendirilmediği
çalışma aralığıdır.  
**Değerlendirme notu:** “Değişken yoktur” dememelidir.

### Soru 7

**Soru:** `console.log(x); var x = 1;` ilk olarak ne yazdırır?  
**Beklenen cevap:** `undefined`; bağlama önceden ilklendirilir, `1` sonra
atanır.  
**Değerlendirme notu:** Kaynak kodun taşındığını iddia etmemelidir.

### Soru 8

**Soru:** Yeniden bildirim ve yeniden atama nasıl ayrılır?  
**Beklenen cevap:** Biri aynı adı tekrar bildirmeye, diğeri mevcut değişebilir
bağlamayı güncellemeye çalışır.  
**Değerlendirme notu:** Kısa kod örneği isteyin.

### Soru 9

**Soru:** Gölgeleme nedir?  
**Beklenen cevap:** İçteki aynı adlı bağlamanın normal çözümlemede dıştakini
gizlemesidir.  
**Değerlendirme notu:** En yakın bağlama kuralını belirtmelidir.

### Soru 10

**Soru:** Neden dar kapsam tercih edilir?  
**Beklenen cevap:** Duruma erişen kodu, ad çakışmasını ve düşünme yüzeyini
azaltır.  
**Değerlendirme notu:** Yalnızca “temiz kod” demesi yetersizdir.

## Mid Seviyesi

### Soru 11

**Soru:** `const first = {}; const second = first;` nesneyi kopyalar mı?  
**Beklenen cevap:** Hayır; iki bağlama aynı nesne kimliğine başvurur.  
**Değerlendirme notu:** Mutasyonun iki taraftan gözlemlenmesini açıklamalıdır.

### Soru 12

**Soru:** `typeof` neden bazen `"undefined"`, bazen `ReferenceError` üretir?  
**Beklenen cevap:** Hiç bulunmayan tanımlayıcı ile ilklendirilmemiş sözlüksel
bağlama farklıdır.  
**Değerlendirme notu:** Geçici Ölü Bölgeyi doğru kullanmalıdır.

### Soru 13

**Soru:** Yukarı kaldırmayı dil standardına yakın biçimde açıklayın.  
**Beklenen cevap:** Bildirim oluşturma ve ilklendirme aşamalarının farklı
bildirim biçimlerinde farklı sonuçları vardır; satırlar taşınmaz.  
**Değerlendirme notu:** `var`, `let`, `const` farkını vermelidir.

### Soru 14

**Soru:** Klasik betikte üst düzey `var` ile `let` arasındaki global nesne farkı
nedir?  
**Beklenen cevap:** `var` global nesne özelliği oluşturabilir; sözlüksel `let`
bağlaması oluşturmaz.  
**Değerlendirme notu:** Tarayıcı klasik betiği sınırını söylemelidir.

### Soru 15

**Soru:** Modül üst düzeyini neden tarayıcı klasik betiği gibi açıklayamayız?  
**Beklenen cevap:** Modüller ayrı modül ortamına ve farklı üst düzey semantiğe
sahiptir.  
**Değerlendirme notu:** Çalışma ortamı varsayımını açık etmelidir.

### Soru 16

**Soru:** Durum tablosunda hata sonrası satırlar nasıl ele alınır?  
**Beklenen cevap:** Hata noktasında değerlendirme durur; çalışmayan sonraki
komutlar için hayalî durum yazılmaz.  
**Değerlendirme notu:** Hata aşaması ve sınıfını kaydetmelidir.

### Soru 17

**Soru:** Paylaşılan önbellek için `const` kullanmak onu güvenli yapar mı?  
**Beklenen cevap:** Hayır; yalnızca bağlamayı sabitler, mutasyon sahipliği ve
geçersizleştirme ayrıca tasarlanır.  
**Değerlendirme notu:** Durum sahipliğini tartışmalıdır.

### Soru 18

**Soru:** Koşul içinde atama neden risklidir?  
**Beklenen cevap:** Atama durumu değiştirir ve atanan değeri koşul sonucu olarak
üretir; karşılaştırmayla karışabilir.  
**Değerlendirme notu:** `no-cond-assign` gibi aracın politika olduğunu bilmelidir.

### Soru 19

**Soru:** Aynı kapsamda iki `let` bildirimi hangi aşamada başarısız olur?  
**Beklenen cevap:** Kaynak çalışmadan önce erken sözdizimi doğrulamasında
`SyntaxError`.  
**Değerlendirme notu:** Çalışma zamanı hatası dememelidir.

### Soru 20

**Soru:** `for (const item of items)` nasıl geçerlidir?  
**Beklenen cevap:** Her yineleme yeni bağlama alır; o yineleme içinde yeniden
atama yapılmaz.  
**Değerlendirme notu:** Tek bağlamanın tekrar tekrar atanması açıklamasını
kabul etmeyin.

## Senior Seviyesi

### Soru 21

**Soru:** Dil standardındaki ortam kaydı ile motorun bellek temsili aynı mıdır?  
**Beklenen cevap:** Hayır; ortam kaydı semantik modeldir, motor gözlemlenebilir
davranışı koruyarak farklı temsil kullanabilir.  
**Değerlendirme notu:** Soyut ve fiziksel katmanları ayırmalıdır.

### Soru 22

**Soru:** `const`un performans avantajını nasıl değerlendirirsiniz?  
**Beklenen cevap:** Dil evrensel hız garantisi vermez; temsilî iş yükü ve hedef
motor ölçülmelidir.  
**Değerlendirme notu:** Mikro benchmark sonuçlarını genellememelidir.

### Soru 23

**Soru:** Bağlamayı `null` yapmak bellek sızıntısını çözer mi?  
**Beklenen cevap:** Yalnızca bir başvuruyu kaldırır; diğer erişilebilir yollar ve
haricî kaynaklar incelenmelidir.  
**Değerlendirme notu:** Çöp toplama zamanını garanti etmemelidir.

### Soru 24

**Soru:** Büyük kod tabanında değişebilir durum sahipliğini nasıl görünür
yaparsınız?  
**Beklenen cevap:** Dar kapsam, anlamlı ad, sınırlı yazma noktaları, açık API,
inceleme ve testlerle.  
**Değerlendirme notu:** Yalnızca `const` kullanmayı çözüm saymamalıdır.

### Soru 25

**Soru:** Gölgeleme ne zaman kabul edilebilir, ne zaman risklidir?  
**Beklenen cevap:** Kısa ve açık yerel kapsamda bilinçli olabilir; global,
parametre veya uzun yaşayan durumu gizlediğinde risklidir.  
**Değerlendirme notu:** Koşullu bir politika sunmalıdır.

### Soru 26

**Soru:** `Object.freeze` ile `const` arasındaki sözleşme farkı nedir?  
**Beklenen cevap:** `const` bağlamayı, `Object.freeze` nesne özelliklerinin
belirli yüzeysel değişikliklerini sınırlar.  
**Değerlendirme notu:** `Object.freeze`ın yüzeysel sınırını belirtmelidir.

### Soru 27

**Soru:** Bir kod incelemesinde geniş kapsamlı `let` gördüğünüzde ne sorarsınız?  
**Beklenen cevap:** Yeniden atama gerçekten gerekli mi, sahip kim, yazma
noktaları nerede ve kapsam daraltılabilir mi?  
**Değerlendirme notu:** Mekanik `const` dönüşümünden önce davranışı incelemelidir.

### Soru 28

**Soru:** Derleyici veya motor bağlamayı ortadan kaldırabilir mi?  
**Beklenen cevap:** Gözlemlenebilir semantik korunuyorsa optimize edebilir,
yazmaçta tutabilir veya ortamı gerektiğinde somutlaştırabilir.  
**Değerlendirme notu:** Dil standardı modelini fiziksel nesne saymamalıdır.

### Soru 29

**Soru:** Durum tablosu üretim kodu tasarımında nasıl kullanılır?  
**Beklenen cevap:** Geçişleri, ön/son koşulları, hata noktasını ve test
beklentilerini görünür yapar.  
**Değerlendirme notu:** Tabloyu yalnızca eğitim aracı olarak görmemelidir.

### Soru 30

**Soru:** Değişken politikasını takım genelinde nasıl uygularsınız?  
**Beklenen cevap:** Semantik kuralları belgeleyip lint, inceleme, test ve ölçümle
destekler; istisnaları bağlama göre gerekçelendirir.  
**Değerlendirme notu:** Araç politikasını dil semantiğiyle karıştırmamalıdır.
