---
document_type: "standard"
standard_id: "ASEA-STD-TEACHING-001"
title: "ASEA Teaching and Continuity Standard v1.0"
version: "1.0.0"
status: "Stable"
supersedes: []
---

# ASEA Teaching and Continuity Standard v1.0

Bu standart, ASEA'daki her akademi, modül ve chapter'ın öğrenciye nasıl
öğretileceğini ve öğrenmenin içerikler arasında nasıl devam edeceğini tanımlar.
ASEA'nın görevi belgeleri öğrenciye yeniden sunmak değil; doğrulanmış bilgiyi,
sıfırdan başlayan bir öğrencinin anlayabileceği, uygulayabileceği ve mesleki
yetkinliğe dönüştürebileceği bir öğrenme deneyimine çevirmektir.

Ortak repository kuralları
[Repository Standard v2.0](./repository-standard-v2.md), öğrenme çıktıları ve
değerlendirme ilişkileri
[Curriculum Standard v2.0](./curriculum-standard-v2.md), chapter dosya şeması
ve zorunlu yapısı [Chapter Standard v2.0](./chapter-standard-v2.md) tarafından
yönetilir. Bu standart onların yerine geçmez; öğrenciye dönük anlatım,
öğretimsel ilerleme ve içerikler arası devamlılığın sahibidir.

## 1. Amaç ve öğrenci vaadi

ASEA, konuya hiç aşina olmayan öğrenciyi yalnızca içerik tüketen biri olarak
değil, öğrendiğini açıklayabilen, kod üzerinde gösterebilen, elle izleyebilen,
hatalı çözümü teşhis edebilen ve yeni bir probleme aktarabilen bir profesyonel
olarak yetiştirir.

Bir akademiyi tamamlayan öğrenci:

- temel kavramları ezberlenmiş tanımlarla değil neden-sonuç ilişkileriyle
  açıklayabilmeli;
- bir programın çalışma zamanındaki davranışını zihninde canlandırabilmeli;
- değişken, tür, kontrol akışı, fonksiyon ve veri modeli kararlarını
  gerekçelendirebilmeli;
- küçük örneklerden gerçekçi problemlere doğru bağımsız kod yazabilmeli;
- hata mesajını okuyup kanıta dayalı hata ayıklama yapabilmeli;
- quiz, kod okuma, mülakat sorusu, laboratuvar ve proje gibi farklı
  değerlendirme biçimlerinde aynı yetkinliği gösterebilmeli;
- resmî belgeleri mesleki doğrulama kaynağı olarak kullanabilecek seviyeye
  gelmelidir.

Bu vaat bütün akademiler için geçerlidir. İleri akademiler başlangıç
akademilerindeki öğretim sorumluluğunu ortadan kaldırmaz; yalnız öğrencinin
kanıtlanmış ön bilgisi kadar yoğunluğu artırır.

## 2. Normatif dil

Bu belgede:

- **ZORUNLUDUR**, taviz verilemeyen üretim veya yayın koşulunu;
- **GEREKLİDİR**, koşulun kapsam içinde uygulanmasını;
- **ÖNERİLİR**, güçlü varsayılanı ve farklı karar verildiğinde gerekçe
  kaydedilmesini;
- **YAPILMAMALIDIR**, pedagojik veya teknik kaliteyi düşüren yaklaşımı
  ifade eder.

## 3. Standartlar arasındaki yetki sınırı

Bu standardın tekil yetki alanı şunlardır:

- öğrencinin karşılaştığı anlatım deneyimi;
- akademi, modül ve chapter arasındaki öğretimsel köprü;
- örneklerin, alıştırmaların ve desteğin kademelendirilmesi;
- kod ve değişken kararlarının açıklanma derinliği;
- hikâye, görsel, terim ve AI Mentor kullanım biçimi;
- bir chapter'ın sonraki öğrenmeye devrettiği yeterlik.

Curriculum Standard neyin ve hangi outcome için öğretileceğini; Chapter
Standard dosyanın metadata ve başlık sözleşmesini yönetir. Bu standart,
belirlenen sonucu öğrencinin nasıl öğrenebilir hâle getirileceğini yönetir.
Chapter Standard'daki teknik H2 başlıkları kaynak dosyanın yapısal
sözleşmesidir. Öğrenci arayüzünde bu başlıklar Türkçe, doğal ve öğretim akışına
uygun etiketlerle sunulabilir; anlam ve izlenebilirlik korunur.

## 4. Kaynaktan öğretime dönüşüm

Araştırma, resmî belge, üniversite dersi, teknik kitap, güvenilir eğitim
platformu ve nitelikli açık kaynak proje ASEA için ham bilgidir. Öğrenciye
sunulan ders ise ayrı bir öğretim ürünüdür.

Her chapter üretiminde aşağıdaki dönüşüm ZORUNLUDUR:

```text
Kaynak kanıtı
  -> doğrulanmış teknik iddia
  -> öğrencinin ön bilgisine göre açıklama
  -> sezgisel zihinsel model
  -> çalışan en küçük örnek
  -> görünür çalışma izi
  -> kademeli uygulama
  -> değerlendirme ve transfer
```

Kaynak cümlelerinin çevrilmesi, peş peşe tanım verilmesi veya API üyelerinin
listelenmesi öğretim sayılmaz. Kaynaklar doğruluk ve kapsam için arka planda
kalır; öğrenci ön planda öğretmenin kurduğu anlamlı anlatımla karşılaşır.

Kaynakla desteklenen teknik gerçek korunmalı, fakat öğrencinin anlaması için:

1. gerçek bir ihtiyaç veya soru kurulmalı;
2. öğrenciye tanıdık bir durumla bağ kurulmalı;
3. gereksiz ayrıntılar ilk karşılaşmadan ertelenmeli;
4. bilgi kod, tablo, akış veya davranış üzerinde görünür yapılmalı;
5. öğrenciye bilgiyi kullanma ve açıklama fırsatı verilmelidir.

## 5. Sıfırdan profesyonelliğe ilerleme ilkesi

ASEA “başlangıç seviyesini” yüzeysellik olarak yorumlamaz. Başlangıç seviyesi;
daha az varsayım, daha küçük adımlar, daha açık nedenler ve daha fazla
rehberlik demektir.

Bilgi yoğunluğu şu sırayla artırılır:

1. **İhtiyaç:** Bu kavram olmadan hangi sorunla karşılaşıyoruz?
2. **Sezgi:** Öğrenci bunu bildiği hangi durumla ilişkilendirebilir?
3. **Davranış:** En küçük örnek çalışırken ne olur?
4. **Adlandırma:** Gözlenen davranışın teknik adı nedir?
5. **Kural:** Ne zaman geçerlidir, nerede sınırı vardır?
6. **Karşılaştırma:** Benzer seçeneklerden neden farklıdır?
7. **Uygulama:** Öğrenci seçimi kendisi nasıl yapar?
8. **Mesleki boyut:** Bu karar bakım, test, güvenlik ve ekip çalışmasını nasıl
   etkiler?

Öğrenci ilk örnekte ileri seviye input validation, optimizasyon, mimari
soyutlama veya araç zinciriyle aynı anda karşılaştırılmamalıdır. Bu ayrıntılar
temel davranış anlaşıldıktan sonra gerçek bağlamıyla eklenir.

## 6. Akademi, modül ve chapter devamlılık sözleşmesi

ASEA içeriği bağımsız makaleler toplamı değildir. Her akademi önceki
akademilerden yeterlik alır, onu genişletir ve sonraki akademilere kanıtlanmış
yeterlik devreder. Aynı ilişki modüller ve chapter'lar arasında da
ZORUNLUDUR.

### 6.1 Akademi sözleşmesi

Her akademi aşağıdakileri tanımlar:

- girişte beklenen kanıtlanmış yeterlikler;
- eksik ön koşullar için kısa onarım yolu;
- akademi boyunca büyüyen ana problem veya proje;
- modüller arasındaki yetkinlik devri;
- akademi sonunda öğrencinin bağımsız üreteceği mesleki kanıt;
- sonraki akademilerin kullanacağı çıkış yeterlikleri.

### 6.2 Modül sözleşmesi

Her modül:

- önceki modülün hangi çıktısını kullandığını;
- öğrenciye hangi yeni problemi görünür kıldığını;
- hangi zihinsel modeli geliştirdiğini;
- chapter'ların bu modeli hangi sırayla kurduğunu;
- modül projesine her chapter'ın ne eklediğini;
- kapanış değerlendirmesinin hangi bağımsız davranışı kanıtladığını
  belirtmelidir.

### 6.3 Chapter devir sözleşmesi

Her chapter üretim planında aşağıdaki alanlar bulunmalıdır:

| Alan | Zorunlu cevap |
|---|---|
| Gelen yeterlik | Öğrenci önceki chapter'dan ne biliyor ve ne yapabiliyor? |
| Hatırlama köprüsü | Bu bilgi kısa bir soru veya görevle nasıl etkinleştirilecek? |
| Yeni ihtiyaç | Önceki bilgi neden artık tek başına yetmiyor? |
| Yeni yeterlik | Bu chapter sonunda öğrenci hangi yeni davranışı bağımsız yapacak? |
| Proje artışı | Süregelen proje veya ürün hangi görünür parçayı kazanacak? |
| Sonraki devir | Sonraki chapter burada üretilen hangi yeterliği kullanacak? |

Bir chapter, önceki chapter'ı uzun biçimde tekrar etmemeli; gerekli bilgiyi
kısa bir hatırlama ve uygulama köprüsüyle geri çağırmalıdır. Sonraki chapter,
öğrencinin henüz edinmediği bir bilgiyi sessizce varsaymamalıdır.

## 7. Süregelen proje ve anlatı omurgası

Her akademide öğrencinin bilgi birikimiyle birlikte büyüyen en az bir proje
omurgası bulunması ZORUNLUDUR. Chapter içindeki küçük örnekler bu projeye
bağlanabilir, fakat her örneğin aynı kurguya zorlanması gerekmez.

Hikâyeleştirme şu amaçlarla kullanılabilir:

- kavramın çözdüğü ihtiyacı doğal biçimde ortaya çıkarmak;
- öğrencinin bir kararın sonucunu merak etmesini sağlamak;
- önceki chapter'daki ürün veya problemi yeni chapter'a taşımak;
- hata ayıklamayı gerçek bir araştırma süreci gibi yaşatmak.

Hikâye teknik içeriği süsleyen yapay bir dekor olmamalıdır. Çocuklaştırıcı
karakterler, gereksiz dramatizasyon, her paragrafta benzetme ve gerçek
davranışı yanlış temsil eden metaforlar kullanılmamalıdır. Benzetmenin nerede
bittiği açıkça gösterilmelidir.

Öğrenci, chapter'lar ilerledikçe aynı ürünün gereksinim, veri, davranış,
güvenilirlik, test ve teslimat açısından nasıl olgunlaştığını görmelidir.

## 8. Chapter öğretim yolculuğu

Her chapter aşağıdaki öğretim işlevlerinin tamamını yerine getirmelidir.
Bunların her biri ayrı ve görünür H2 olmak zorunda değildir; anlatım akıcı bir
öğretmen metni olarak kurulabilir. Ancak üretim incelemesinde her işlevin
kanıtı gösterilmelidir.

1. Öğrenciyle bağ kuran bölüm açılışı
2. Konunun çözdüğü problem ve öğrenme nedeni
3. Kısa ön bilgi ve hazırlık kontrolü
4. Günlük durum veya somut problem üzerinden sezgisel model
5. Tek yeni odağa sahip ilk sade örnek
6. Kodun satır satır ve çalışma sırasına göre yürütülmesi
7. Çözümden önce tahmin fırsatı
8. Gözlenen davranışın teknik kavramlarla adlandırılması
9. Değer tablosu, akış, bellek modeli veya çağrı izi
10. Öğretmenle birlikte çözülen ikinci örnek
11. Muhtemel yanlış düşünce, sık hata ve hata ayıklama
12. Öğrencinin küçük bir değişikliği kendisinin yapması
13. Cevabı hemen vermeyen kademeli ipuçları
14. Çözüm, alternatifler ve karar gerekçesi
15. Gerçek dünyadaki kullanım
16. Temel öğrenildikten sonra mühendislik perspektifi
17. Açıklamalı cevapları olan mini quiz
18. Uygulama veya laboratuvar görevi
19. Kavramsal bağları birleştiren chapter özeti
20. Öz değerlendirme ve sonraki chapter'a hazırlık

Uzunluk sınırı yoktur. Bununla birlikte uzunluk amaç değil, öğrenme
gereksiniminin sonucudur. Metin gereksiz tekrarla uzatılmamalı; uzun chapter
anlamlı çalışma duraklarına, kısa anlama kontrollerine ve geri dönülebilir
alt bölümlere ayrılmalıdır.

## 9. Öğretmen sesi ve anlatım dili

Anlatım, öğrencinin yanında düşünen samimi ve yetkin bir öğretmenin sesiyle
yazılır. Dil:

- sıcak fakat yapay heyecandan uzak;
- açık fakat teknik doğruluktan taviz vermeyen;
- yönlendirici fakat öğrencinin yerine bütün kararları vermeyen;
- sabırlı fakat gereksiz tekrar üretmeyen;
- profesyonel fakat kurumsal rapor diline dönüşmeyen
  nitelikte olmalıdır.

“Bu açıktır”, “çok kolay”, “sadece şunu yap” ve öğrencinin zorlanmasını
küçümseyen ifadeler kullanılmamalıdır. Motivasyon, boş övgüyle değil,
öğrencinin ilerlemesini ve artık yapabildiği somut davranışı görünür kılarak
sağlanır.

Metin madde yığınına dönüştürülmemelidir. Liste; karşılaştırma, kontrol,
işlem sırası veya ölçüt gerçekten liste gerektirdiğinde kullanılır. Ana
öğretim, birbirine neden-sonuç ilişkileriyle bağlanan paragraflar ve örnekler
üzerinden ilerler.

## 10. Teknik terim öğretme sözleşmesi

Teknik terim, öğrenci davranışı veya ihtiyacı görmeden önce tanım olarak
sunulmamalıdır. Varsayılan sıra:

```text
problem -> sezgi -> örnek davranış -> Türkçe açıklama
-> Türkçe terim + İngilizce karşılık -> tekrar ve kullanım
```

Bir teknik terim ilk kullanımda Türkçe ve İngilizce birlikte verilir. Sonraki
kullanımlarda bağlama uygun tek biçim seçilir. Chapter başına yeni terim
yoğunluğu öğrencinin seviyesine göre kademelendirilir; çok sayıda terim aynı
paragrafta tanıtılmaz.

Her chapter sağ paneldeki **İngilizce Terimler** kartı için en az şu verileri
üretmelidir:

- İngilizce terim;
- Türkçe karşılık;
- öğrencinin anlayacağı kısa açıklama;
- chapter içindeki ilk kullanım bağlamı;
- küçük kod veya davranış örneği;
- sık karıştırılan yakın terim;
- sonraki tekrar noktası.

Terim kartı ana anlatımın yerine geçmez; tekrar ve başvuru aracı olarak
çalışır.

## 11. Kod örneği sözleşmesi

Her kod örneği:

- hangi soruyu cevapladığını;
- çalıştırılacağı ortamı;
- gerekli girdiyi;
- beklenen çıktıyı;
- satırların hangi sırayla çalıştığını;
- her adımda hangi değerin değiştiğini;
- başarısız veya sınır durumda ne olacağını
  açıklar.

İlk örnekte yalnızca mevcut öğretim hedefi için gerekli yeni kavramlar
kullanılır. Henüz öğretilmemiş sözdizimi kullanmak zorunluysa kısa ve yerel
bir açıklama verilir; yeni bir öğrenme hedefi gibi genişletilmez.

Kodun altında yalnız sonuç yazmak yeterli değildir. Öğrenci, sonucu üreten
çalışma sürecini görebilmelidir. Gerektiğinde şu araçlardan biri kullanılır:

- değişken/değer izleme tablosu;
- satır numaralı yürütme izi;
- çağrı yığını;
- kontrol akışı diyagramı;
- veri dönüşüm hattı;
- önce/sonra karşılaştırması.

## 12. Değişken ve veri türü açıklama sözleşmesi

Öğrencinin ilk kez karşılaştığı veya yeni bir rolde kullanılan her önemli
değişken için aşağıdakiler açıklanmalıdır:

1. Değişken programdaki hangi gerçek bilgiyi temsil ediyor?
2. Adı neden böyle seçildi; adın öğrenciye verdiği ipucu nedir?
3. Başlangıç değeri nedir ve bu değer nereden gelir?
4. Çalışma sırasında değeri değişiyor mu; değişiyorsa hangi olayla?
5. Değerin veri türü nedir?
6. Bu tür hangi işlemleri anlamlı kılar?
7. Neden başka bir tür seçilmedi?
8. `const` veya `let` seçimi neyi ifade eder?
9. Geçersiz, boş, eksik veya sınır değer nasıl görünür?
10. Yanlış tür seçilirse programın davranışı nasıl bozulur?

Bu açıklama “`age` bir number değişkenidir” cümlesiyle tamamlanmış sayılmaz.
Örneğin öğrencinin yaşını yıl cinsinden hesaplamada kullanılan sayı ile
“18” metni arasındaki fark; yapılabilecek işlemler, kullanıcı girdisinin ilk
biçimi ve dönüşüm gereksinimi üzerinden gösterilmelidir.

Dil doğruluğu korunur. JavaScript'te ayrı bir `int` veri türü varmış gibi
öğretilmez; `number` değerinin belirli bir problemde tamsayı olmasının bir
değer kısıtı olduğu açıklanır. `boolean`, `string`, `number`, `undefined`,
`null`, nesne kimliği ve referans davranışı sırası geldiğinde aynı derinlikte
karşılaştırılır.

Her yeni tür için en az şu sorular cevaplanmalıdır:

- Bu tür hangi problemi temsil etmek için uygundur?
- Hangi değerleri taşıyabilir?
- Hangi işlemler anlamlıdır?
- Benzer türden hangi davranışla ayrılır?
- Dönüşüm ne zaman gerekir ve ne kaybettirebilir?
- Öğrenci yanlış tür seçimini nasıl fark eder?

## 13. Uygulama kademeleri

Her chapter'da aşağıdaki beş deneyim ZORUNLUDUR:

- **Birlikte yapalım:** Öğretmen kararları görünür biçimde model olur.
- **Şimdi sen dene:** Öğrenci küçük fakat anlamlı bir adımı tamamlar.
- **Hata avı:** Öğrenci hatalı davranışı tahmin, teşhis ve düzeltir.
- **Bağımsız uygulama:** Öğrenci yeni fakat benzer bir problemi çözer.
- **Gerçek proje bağlantısı:** Öğrenilen yeterlik süregelen ürüne aktarılır.

Uygulamalar aynı sorunun sayıları değiştirilmiş kopyaları olmamalıdır.
Varsayılan ilerleme:

```text
gözle -> tahmin et -> izle -> küçük değişiklik yap -> eksik parçayı tamamla
-> hatayı düzelt -> yönlendirmeli çöz -> bağımsız çöz -> projeye aktar
```

Öğrenciden istenen bağımsızlık arttıkça yönerge azalır; başarı ölçütü açık
kalır.

## 14. Tahmin, anlama kontrolü ve geri çağırma

Önemli bir açıklamadan sonra öğrencinin zihinsel modelini sınayan kısa bir
anlama kontrolü bulunmalıdır. Bu kontrol yalnız “anladın mı?” diye sormaz;
öğrenciden değer, çıktı, sıra, neden veya alternatif tahmini ister.

Çözüm gösterilmeden önce makul olduğunda öğrenciye tahmin fırsatı verilir.
Yanlış tahmin başarısızlık olarak değil, açıklanabilir bir zihinsel model
işareti olarak ele alınır.

Önceki chapter'lardaki kritik bilgi tek sefer öğretilip terk edilmez. Yeni
bağlamlarda kısa geri çağırma soruları, hata avları ve proje kararlarıyla
yeniden kullanılır. Tekrar aynı metnin yeniden anlatılması değil, bilginin
yeni bir görevde geri çağrılmasıdır.

## 15. Kademeli ipucu ve AI Mentor sözleşmesi

AI Mentor öğrencinin yerine çözüm üretmez; öğrencinin bir sonraki düşünme
adımını bulmasına yardım eder. Varsayılan destek sırası:

1. Öğrenciden mevcut düşüncesini ve denediği adımı istemek
2. Hedefi veya gözlenen davranışı netleştiren soru
3. İlgili önceki kavramı hatırlatan küçük ipucu
4. Kavramsal açıklama
5. Çözümün yalnız bir sonraki adımını gösteren yapısal ipucu
6. Benzer fakat farklı mini örnek
7. Öğrenci denemesinden sonra adım adım çözüm açıklaması
8. Gerekliyse tam çözüm ve alternatiflerin karşılaştırılması

Öğrenci doğrudan açıklama istediğinde kavramsal destek verilebilir; fakat
değerlendirilen bağımsız görevde tam çözüm, deneme kanıtı veya açık vazgeçme
olmadan gösterilmemelidir. İpucu geçmişi kaydedildiğinde değerlendirme
kanıtında kullanılan destek düzeyi görünür olmalıdır.

## 16. Görsel öğretim sözleşmesi

Görsel yalnız sayfayı zengin göstermek için eklenmez. Her görsel şu
sorulardan en az birini metinden daha iyi cevaplamalıdır:

- Sıra nasıl ilerliyor?
- Değer nereden nereye taşınıyor?
- Hangi parçalar birbirine bağlı?
- Durum zaman içinde nasıl değişiyor?
- İki yaklaşım hangi noktada ayrılıyor?
- Hata hangi adımda oluşuyor?

Uygun görseller arasında akış diyagramı, bellek/durum modeli, çağrı izi,
zaman çizelgesi, karşılaştırma tablosu ve küçük arayüz şeması bulunur.
Animasyon kullanılıyorsa öğrencinin durdurma, adımlama ve yeniden başlatma
kontrolü olmalıdır. Renk tek anlam taşıyıcısı olmamalı; metin alternatifi ve
erişilebilir açıklama sunulmalıdır.

Bir görselin benzetme olduğu durumda, gerçek sistem davranışıyla örtüşmeyen
sınır açıkça belirtilmelidir.

## 17. Hata öğretme ve hata ayıklama sözleşmesi

Hatalar chapter sonunda eklenen “yapmayın” listesi değildir. Öğrenci doğru
modeli kurduktan sonra gerçekçi bir yanlış düşünceyle karşılaştırılır.

Her önemli hata örneği:

- öğrencinin neden bu sonuca varabileceğini;
- görünen belirtiyi;
- beklenen ve gerçekleşen davranış farkını;
- kanıt toplama adımını;
- kök nedeni;
- en küçük düzeltmeyi;
- düzeltmenin neden çalıştığını
  göstermelidir.

Hata ayıklamada rastgele değişiklik yapmak yerine şu alışkanlık öğretilir:

```text
yeniden üret -> beklentiyi yaz -> gözlemi kaydet -> hipotez kur
-> en küçük deneyi yap -> sonucu karşılaştır -> düzelt -> tekrar doğrula
```

## 18. Değerlendirme hizalaması

Quiz, kod okuma, hata avı, mülakat sorusu, lab ve proje birbirinden kopuk soru
havuzları değildir. Aynı learning outcome'u farklı kanıt biçimleriyle
ölçmelidir.

Chapter sonunda öğrenci en az şunları kanıtlar:

| Kanıt biçimi | Beklenen davranış |
|---|---|
| Kendi cümlesiyle açıklama | Kavramı, çözdüğü problemi ve sınırını anlatır |
| Kod üzerinde gösterme | Kavramın kodda hangi parçalarla gerçekleştiğini işaretler |
| Elle izleme | Değer ve kontrol değişimini doğru sırada yürütür |
| Hata teşhisi | Belirtiyi kök nedenle ilişkilendirir ve düzeltmeyi doğrular |
| Bağımsız çözüm | Benzer fakat görülmemiş küçük probleme uygular |
| Transfer | Yeterliği süregelen projede kullanır |

Mini quiz açıklamalı cevap anahtarına sahip olmalıdır. Yanlış seçenekler
rastgele değil, yaygın yanlış zihinsel modelleri temsil etmelidir.

Mülakat soruları yalnız kısa tanım istememeli; öğrenciden örnek, karşılaştırma,
izleme, karar gerekçesi ve gerektiğinde kod düzeltmesi istemelidir.

Başarı kapıları Curriculum Standard ve assessment plan tarafından belirlenir.
Bir chapter'ı okumak veya quiz'i bir kez geçmek tek başına ustalık değildir.

## 19. Çözüm açıklama sözleşmesi

Çözüm yalnız nihai kod olarak sunulamaz. Açıklama:

1. problemi ve kabul ölçütünü yeniden ifade eder;
2. seçilen yaklaşımı ve nedenini açıklar;
3. veri ve değişken kararlarını gerekçelendirir;
4. kodu çalışma sırasına göre yürütür;
5. sınır veya hata durumunu gösterir;
6. en az bir makul alternatifi karşılaştırır;
7. öğrencinin kendi çözümünü nasıl doğrulayacağını gösterir.

Farklı ama doğru çözümler tek bir “doğru cevap” uğruna reddedilmemelidir.
Değerlendirme; doğruluk, açıklanabilirlik, chapter kapsamına uygunluk ve
başarı ölçütleri üzerinden yapılır.

## 20. Profesyonel mühendislik perspektifinin zamanlaması

ASEA profesyonel ayrıntıları saklamaz; doğru sırada öğretir. Öğrenci temel
mekanizmayı anlamadan uzun performans, güvenlik, optimizasyon veya mimari
istisna listesiyle karşılaşmamalıdır.

Her mesleki ayrıntı şu bağlardan biriyle eklenmelidir:

- öğrencinin yazdığı örnekte görünür bir risk;
- süregelen projede ortaya çıkan bakım ihtiyacı;
- önceki basit çözümün büyüme sınırı;
- test veya hata ayıklamayla kanıtlanan davranış;
- ekip çalışmasında kararın açıklanma gereksinimi.

“Gerçek projelerde böyle yapılır” ifadesi tek başına gerekçe değildir. Hangi
koşulda, hangi maliyet karşılığında ve hangi alternatiflere göre tercih
edildiği açıklanır.

## 21. Chapter ve modül kapsamını genişletme

ASEA'da sabit kelime, chapter veya modül sayısı pedagojik bir üst sınır
değildir. Yeni chapter veya modül şu durumlardan biri varsa eklenebilir:

- mevcut kapsam ayrı bir zihinsel model gerektiriyorsa;
- tek chapter öğrencinin çalışma belleğine aşırı yük bindiriyorsa;
- ayrı ve ölçülebilir bir learning outcome oluşuyorsa;
- yeterli yönlendirmeli ve bağımsız uygulama için alan kalmıyorsa;
- sonraki içerik önemli bir ön koşulu varsayıyor fakat öğretmiyorsa;
- gerçek proje geçişi için yeni bir yetkinlik kapısı gerekiyorsa.

Yeni bölüm yalnız sayıyı büyütmek, aynı açıklamayı tekrar etmek veya kaynaktaki
başlıkları birebir taşımak için eklenmemelidir.

Bir chapter bölündüğünde veya yeni chapter eklendiğinde:

- kanonik kimlik ve migration kararı;
- ön koşul ve sonraki chapter bağlantıları;
- learning outcome sahipliği;
- assessment ve proje bağları;
- terim tekrar noktaları;
- öğrenci ilerleme verisinin uyumluluğu
  güncellenmelidir.

Araştırma takipçilerindeki sayılar mevcut planın anlık görüntüsüdür; öğrenme
kalitesini sınırlayan taahhüt değildir.

## 22. Öğrenci farklılıkları ve destek yolları

Zorunlu ana yol bütün öğrenciler için aynı çıkış yeterliğini korur. Destek
biçimi öğrencinin ihtiyacına göre değişebilir:

- ön koşulu eksik öğrenciye kısa onarım etkinliği;
- çalışma izinde zorlanan öğrenciye daha küçük adım ve ek tablo;
- terim yükünde zorlanan öğrenciye terim kartı ve geri çağırma;
- hızlı ilerleyen öğrenciye daha karmaşık transfer veya alternatif çözüm;
- erişilebilirlik ihtiyacına uygun metin, klavye ve görsel alternatifleri.

Destek yolu hedefi düşürmemeli; hedefe ulaşmak için gereken basamakları
çoğaltmalıdır. Zenginleştirme içeriği temel yolu kesmemeli ve henüz
öğretilmemiş kavramı sessizce zorunlu kılmamalıdır.

## 23. Üretim artefact sözleşmesi

Tam bir chapter üretim paketi en az şunları içerir:

- kaynak ve kanıt paketi;
- chapter öğretim planı;
- gelen/çıkan yeterlik ve devamlılık kaydı;
- öğrenciye dönük ana ders;
- çalışan kod örnekleri ve beklenen çıktıları;
- gerekli izleme tablosu veya görsel açıklama;
- Birlikte yapalım etkinliği;
- Şimdi sen dene etkinliği;
- Hata avı;
- bağımsız uygulama;
- kademeli ipuçları ve açıklamalı çözüm;
- mini quiz ve açıklamalı cevapları;
- lab ve proje artışı;
- mülakat soruları ve değerlendirme ölçütleri;
- İngilizce Terimler kart verisi;
- kısa not ve tekrar için özet verisi;
- outcome-assessment-source izlenebilirliği;
- sonraki chapter'a devir notu.

Öğrenci arayüzünde bu parçalar tek, sakin ve odaklı çalışma yolculuğu olarak
sunulur. Paket sayısının fazlalığı öğrencinin aynı anda bütün araçlarla
karşılaşması anlamına gelmez; araçlar öğrenme anına göre açılır.

## 24. İnceleme ve kalite kapıları

Bir chapter bu standarda göre `Review` almadan önce aşağıdaki kapıları
geçmelidir:

### 24.1 Devamlılık kapısı

- Gelen ve çıkan yeterlik açık mı?
- Önceki chapter gerçekten kullanılıyor mu?
- Sonraki chapter için gerekli temel üretiliyor mu?
- Süregelen proje görünür biçimde ilerliyor mu?

### 24.2 Anlatım kapısı

- Konu tanımdan önce ihtiyaçla açılıyor mu?
- Öğretmen sesi doğal, sabırlı ve profesyonel mi?
- Metin belge özeti veya madde yığınına dönüşmüş mü?
- Sezgi ile teknik gerçek arasındaki sınır doğru mu?

### 24.3 Kod ve ayrıntı kapısı

- Yeni değişkenler, türler ve seçimler gerekçelendirilmiş mi?
- Kod çalışma sırasına göre görünür mü?
- Örnek yalnız gerekli yeni kavramları mı içeriyor?
- Hata ve sınır davranışı açıklanmış mı?

### 24.4 Uygulama kapısı

- Beş zorunlu uygulama deneyimi mevcut mu?
- Öğrenci tahmin ediyor, kod yazıyor, hata ayıklıyor ve transfer yapıyor mu?
- İpuçları aşamalı mı?
- Çözüm gerekçesi ve alternatif içeriyor mu?

### 24.5 Değerlendirme kapısı

- Bütün görevler learning outcome ile hizalı mı?
- Açıklama, izleme, teşhis ve bağımsız üretim ayrı ayrı kanıtlanıyor mu?
- Quiz ve mülakat yanlış zihinsel modelleri ölçüyor mu?
- Proje artışı sonraki chapter'da kullanılabilir mi?

### 24.6 Teknik ve erişilebilirlik kapısı

- Kod örnekleri belirtilen ortamda çalışıyor mu?
- Kaynak iddiaları doğrulanabilir mi?
- Görseller erişilebilir ve öğretimsel bir soruyu cevaplıyor mu?
- Arayüzde klavye, odak ve okunabilirlik gereksinimleri korunuyor mu?

Stable yayın için teknik, pedagojik ve repository incelemesine ek olarak
hedef öğrenci grubundan pilot kanıtı ÖNERİLİR. Pilot yapılmadan Stable kararı
verilirse gerekçe ve takip planı kaydedilmelidir.

## 25. Uygunsuzluk örnekleri

Aşağıdakiler bu standarda uygun değildir:

- chapter'ı tanım ve özellik listesiyle başlatmak;
- kaynak dokümanı Türkçeye çevirip ders olarak sunmak;
- kodu gösterip yalnız çıktısını yazmak;
- değişkenleri “bu bir değişkendir” düzeyinde bırakmak;
- öğrenciye deneme fırsatı vermeden çözümü açıklamak;
- bütün ipuçlarını tek seferde vermek;
- önceki chapter'la bağ kurmadan yeni konuya geçmek;
- quiz'de ölçülmeyen ayrıntıları tuzak soru yapmak;
- hikâyeyi teknik davranıştan daha baskın hâle getirmek;
- uzunluğu kalite göstergesi olarak kullanmak;
- ileri ayrıntıları temel kavramdan önce yığmak;
- görseli yalnız dekor olarak eklemek;
- öğrencinin yalnız okuduğu için yeterli olduğunu varsaymak.

## 26. Standardın uygulanma sırası

Bu standart yayımlandıktan sonra:

1. yeni üretilecek bütün chapter'lar başlangıçtan itibaren bu standardı
   kullanır;
2. üretimdeki chapter, `Review` öncesinde bu standarda uyarlanır;
3. mevcut Draft chapter'lar bağımlılık sırasıyla yeniden incelenir;
4. Stable içerikler için geriye dönük uygunluk programı hazırlanır;
5. her akademi için devamlılık ve süregelen proje haritası oluşturulur;
6. pilot verileriyle anlatım, uygulama ve süre tahminleri iyileştirilir.

Eski bir chapter'ın hazır olması, bu standarda otomatik uyduğu anlamına
gelmez. Yeniden inceleme; içeriği gereksiz yere baştan yazmak yerine somut
boşlukları kapatır.

## 27. Definition of Done

Bir chapter'ın bu öğretme standardına uygunluğu ancak:

- chapter devir sözleşmesi eksiksizse;
- öğrenciye dönük anlatım sıfır ön bilgi varsayımıyla anlaşılabiliyorsa;
- her yeni değişken, tür ve önemli kod kararı gerekçelendirildiyse;
- çalışma zamanı süreci en az bir izleme aracıyla görünürse;
- beş zorunlu uygulama deneyimi tamamlandıysa;
- kademeli ipucu ve açıklamalı çözüm mevcutsa;
- değerlendirmeler aynı outcome'u farklı kanıtlarla ölçüyorsa;
- süregelen proje veya gerçek proje bağlantısı ilerliyorsa;
- sonraki chapter'ın kullanacağı yeterlik açıkça devredildiyse;
- teknik, pedagojik, bağlantı ve kod kontrolleri geçtiyse
  sağlanır.

Volume düzeyi nihai Definition of Done yetkisi Volume Standard'da kalır.

## 28. References

- [ASEA Curriculum Standard v2.0](./curriculum-standard-v2.md)
- [ASEA Chapter Standard v2.0](./chapter-standard-v2.md)
- [ASEA Volume Standard v2.0](./volume-standard-v2.md)
- National Academies of Sciences, Engineering, and Medicine,
  [How People Learn II](https://nap.nationalacademies.org/catalog/24783/how-people-learn-ii-learners-contexts-and-cultures)
- CAST,
  [Universal Design for Learning Guidelines](https://udlguidelines.cast.org/)
- The Learning Scientists,
  [Retrieval Practice](https://www.learningscientists.org/retrieval-practice)
- Michelene T. H. Chi ve Ruth Wylie,
  [The ICAP Framework](https://doi.org/10.1080/00461520.2014.965823)
- John Sweller, Paul Ayres ve Slava Kalyuga,
  *Cognitive Load Theory*, Springer, 2011.
- Barbara J. Ericson, Lauren E. Margulieux ve Jochen Rick,
  [Solving Parsons Problems versus Fixing and Writing Code](https://doi.org/10.1145/3141880.3141895)
