---
document_type: "quiz"
document_id: "V01-C15-QZ01"
title: "V01-C15 Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
question_count: 25
passing_score: 75
last_updated: "2026-07-23"
---

# Quiz

Cevaplarınızı kaydetmeden [cevap anahtarını](./quiz-answer-key.md) açmayın.

## Sorular

### Soru 1

Kapsam hangi soruyu cevaplar?

A. Değer kaç bayttır?  
B. Bağa kodun nerelerinden erişilebilir?  
C. Nesne tam ne zaman silinir?  
D. Fonksiyon kaç kez çağrılır?

### Soru 2

Yaşam süresi ile kapsam arasındaki doğru ayrım nedir?

A. İkisi eş anlamlıdır.  
B. Kapsam zaman, yaşam süresi kaynak bölgesidir.  
C. Kapsam erişim bölgesi, yaşam süresi zaman boyutudur.  
D. Yalnız derlenmiş dillerde ayrıdır.

### Soru 3

Sözcüksel kapsamda bir fonksiyon dış bağlarını neye göre bulur?

A. Nereden çağrıldığına  
B. Nerede tanımlandığına  
C. En son çalışan fonksiyona  
D. Dosya adına

### Soru 4

Ad çözümleme nereden başlamalıdır?

A. Global kapsamdan  
B. İlk bildirimden  
C. Kullanım noktasını içeren en dar kapsamdan  
D. Çağrı yığınının tabanından

### Soru 5

İç kapsamda eşleşen bağ bulununca ne olur?

A. Bütün dış bağlar da okunur.  
B. En eski bağ seçilir.  
C. Arama durur.  
D. SyntaxError oluşur.

### Soru 6

Hangisi JavaScript'te blok kapsamlıdır?

A. Sıradan blok içindeki `var`  
B. `let`  
C. Bütün function declaration'lar her modda  
D. Atama ifadesi

### Soru 7

Sıradan `if` bloğu içindeki `var` çoğunlukla hangi kapsama aittir?

A. Yalnız `if` bloğuna  
B. İçeren fonksiyona veya script'e  
C. Bir sonraki satıra  
D. Hiçbir kapsama

### Soru 8

Gölgeleme nedir?

A. Dış bağın değerini değiştirmek  
B. Yakın kapsamda aynı adlı yeni bağın aramayı kazanması  
C. Nesneyi silmek  
D. Adı export etmek

### Soru 9

Gölgeleme sonrası dış bağ için hangisi doğrudur?

A. Mutlaka silinir.  
B. Mutlaka `undefined` olur.  
C. İç bildirim tarafından doğrudan değiştirilmez.  
D. Global nesneye dönüşür.

### Soru 10

Yeni bildirim olmadan `count += 1` dıştaki bağı buluyorsa davranış nedir?

A. Gölgeleme  
B. Yeniden atama ve olası yan etki  
C. Closure oluşturma  
D. Import

### Soru 11

Fonksiyon dışına döndürülen yerel nesne neden kullanılabilir?

A. Yerel ad global olur.  
B. Dönüş değeri nesneye erişim yolu sağlar.  
C. Çöp toplama kapatılır.  
D. `const` nesneyi sonsuz yapar.

### Soru 12

Bir nesne geri kazanılmaya ne zaman uygun hâle gelir?

A. Bloğun kapanış parantezinde kesinlikle  
B. Bütün güçlü erişim yolları kaybolduğunda  
C. `console.log` sonrasında  
D. Ad gölgelendiğinde

### Soru 13

Kapanış başlangıç düzeyinde nasıl modellenmelidir?

A. Her zaman ilk değerin dondurulmuş kopyası  
B. Fonksiyonun sözcüksel çevredeki bağlara erişimi  
C. Global değişken listesi  
D. Çağrı yığınının hiç boşalmaması

### Soru 14

Aynı factory fonksiyonunun iki çağrısı çoğunlukla ne üretir?

A. Zorunlu olarak tek ortak yerel bağ  
B. Ayrı çağrı çevreleri ve ayrı yerel bağlar  
C. SyntaxError  
D. Aynı return nesnesi

### Soru 15

Hangisi gizli okumadır?

A. Parametreyi okumak  
B. `Date.now()` çağırmak  
C. Değer return etmek  
D. Yerel sabit hesaplamak

### Soru 16

Hangisi dış yazmadır?

A. Yeni yerel diziye değer eklemek  
B. Parametre nesnesinin özelliğini değiştirmek  
C. Yerel sayıyı hesaplamak  
D. Yeni string döndürmek

### Soru 17

Saf fonksiyon için en uygun iki koşul hangileridir?

A. Kısa olması ve arrow syntax kullanması  
B. Aynı açık girdide aynı sonuç ve dış durumu değiştirmeme  
C. Hiç yerel değişken kullanmama ve tek satır olma  
D. Yalnız sayı döndürme ve hata vermeme

### Soru 18

Yeni oluşturulan yerel sonuç dizisine `.push` yapmak neden otomatik olarak saflığı bozmaz?

A. `.push` aslında mutation değildir.  
B. Değişim çağrıdan önceki dış durum üzerinde gözlenemeyebilir.  
C. Diziler primitive'dir.  
D. `const` bütün özellikleri dondurur.

### Soru 19

Gönderimsel saydamlık sezgisi hangi testi kullanır?

A. Fonksiyon adını kısaltma  
B. Çağrıyı değeriyle değiştirince gözlenebilir davranışın korunması  
C. Her şeyi global yapma  
D. Yalnız performansı ölçme

### Soru 20

Saf çekirdek–etkili sınır tasarımında konsola yazma nerede olmalıdır?

A. Hesabın her ara satırında  
B. Küçük ve açık etkili sınırda  
C. Global değişken içinde  
D. Mutlaka kaldırılmalıdır.

### Soru 21

Saat bağımlılığını test edilebilir kılmanın basit yolu nedir?

A. Saati daha sık okumak  
B. `now` değerini açık parametre/sağlayıcı olarak vermek  
C. Global saate kopyalamak  
D. Testi yalnız gündüz çalıştırmak

### Soru 22

Etki envanterinde hangi dört kanal bulunmalıdır?

A. CSS, HTML, SQL, HTTP  
B. Açık girdi, gizli okuma, açık sonuç, dış yazma  
C. CPU, RAM, disk, ağ  
D. Syntax, lint, build, deploy

### Soru 23

Bir refactoring'de ilk güvenlik adımı nedir?

A. Bütün global adları silmek  
B. Mevcut davranışı test ve örneklerle kaydetmek  
C. Framework eklemek  
D. Bütün fonksiyonları tek satır yapmak

### Soru 24

AI “fonksiyon saftır” dediğinde en güçlü doğrulama nedir?

A. Cevabın uzunluğu  
B. Etki envanteri ve aynı girdi/dış durum testleri  
C. Modelin güven puanı  
D. Kodun renkli görünmesi

### Soru 25

Hangisi C15'in profesyonel tasarım hedefini en iyi özetler?

A. Tüm etkileri yasaklamak  
B. Bütün değişkenleri global yapmak  
C. Ad çözümlemeyi izlemek, duruma sahiplik vermek ve etkileri açık sınırlarda toplamak  
D. Kapanışları ezberlemek

## Cevap Kaydı

Her cevap için seçenek, gerekçe ve güven düzeyinizi (%0–100) yazın. Sonra ayrı
cevap anahtarından kontrol edin; yanlış veya düşük güvenli her soru için ana derste ilgili bölümü yeniden bulun.
