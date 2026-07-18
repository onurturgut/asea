# Educational Quality Assurance Raporu

## Denetim Kimliği

| Alan | Değer |
| --- | --- |
| Aşama | PHASE 04 |
| Sprint | Sprint 05 — Educational Quality Assurance |
| Kapsam | Programming Fundamentals — Variables |
| Ana kaynak | `lesson.md` |
| Denetlenen dosya | 11 Markdown dosyası |
| Denetim türü | Eğitimsel, pedagojik, dilsel ve teknik kalite güvencesi |
| İçerik değişikliği | Yok |
| Sonuç | Changes Required |

## Denetim Kapsamı

Denetim şu dosyaları kapsar:

- `lesson.md`
- `examples.md`
- `lesson-assets.md`
- `visualization-notes.md`
- `quiz.md`
- `exercises.md`
- `lab.md`
- `flashcards.md`
- `interview.md`
- `cheatsheet.md`
- `chapter-summary.md`

Bu sprint mevcut eğitim içeriklerini değiştirmez. Bulgular sonraki düzeltme
çalışması için kanıt ve kabul koşulu sağlar.

## Yönetici Özeti

Variables öğrenme paketi teknik içerik, ana kavram sırası, iki kanonik öğrenme
çıktısı, etkin uygulama çeşitliliği ve Bloom Taksonomisi kapsamı bakımından
güçlüdür.

Paket henüz yayın kalitesinde değildir. İki yayın engelleyici bulgu vardır:

1. Türkçe dil ve teknik terminoloji standardı bütün bağımsız materyallerde
   tutarlı uygulanmamıştır.
2. İleri seviye Alıştırma 20, öğrencinin yeniden düzenlemesi gereken kaynak kodu
   vermediği için uygulanabilir değildir.

Bu bulgular eğitim içeriğinin teknik anlamını geçersiz kılmaz; ancak düzeltme ve
yeniden EQA kontrolü yapılmadan yayınlanmamalıdır.

## Kalite Kapısı Sonuçları

| Denetim alanı | Sonuç | Kanıt veya yorum |
| --- | --- | --- |
| Learning Outcome ↔ Lesson | PASS | `V01-LO009` ve `V01-LO010` açıkça öğretiliyor ve özetleniyor |
| Lesson ↔ Quiz | PASS WITH OBSERVATION | 25 soru ders kapsamıyla uyumlu; üretim düzeyi `V01-LO009` davranışı diğer materyallerle tamamlanıyor |
| Lesson ↔ Exercises | CHANGES REQUIRED | 20 alıştırma uyumlu; Alıştırma 20'nin giriş kodu eksik |
| Lesson ↔ Lab | PASS | Durum tablosu ve bağlama seçimi iki outcome'u doğrudan uygulatıyor |
| Lesson ↔ Flashcards | PASS WITH MINOR FINDING | 40 kart ana kavramları kapsıyor; dosya düzeyi ilk terim eşlemesi eksik |
| Terminoloji standardı | CHANGES REQUIRED | İngilizce kalıntılar ve materyal bazında tutarsız ilk kullanım mevcut |
| Türkçe dil standardı | CHANGES REQUIRED | Bazı eğitimsel ifadeler İngilizce veya karma dilde |
| Kod doğruluğu | PASS | 58 JavaScript bloğu tarandı; tek parse hatası bilerek ayrılmış `SyntaxError` örneği |
| Zorluk dengesi | PASS WITH OBSERVATION | Alıştırmalar 8/8/4, mülakat 10/10/10; quiz bilişsel olarak alt düzeylere ağırlıklı |
| Tekrar eden içerik | PASS | Tekrarlar farklı geri çağırma ve uygulama biçimlerine hizmet ediyor |
| Eksik kavramlar | PASS | Dersin bütün ana hedefleri paket genelinde karşılanıyor |
| Eğitimsel akış | PASS | İlk ilkelerden zihinsel modele, kurama, örneğe ve uygulamaya ilerliyor |
| Pedagojik kalite | PASS WITH OBSERVATION | Aktif öğrenme güçlü; cevapların soruyla aynı yerde görünmesi geri çağırmayı zayıflatabilir |
| Bloom Taksonomisi | PASS | Hatırlama, anlama, uygulama, analiz, değerlendirme ve yaratma mevcut |

## Learning Outcome Denetimi

### `V01-LO009`

**Outcome:** Bir atama dizisi için eksiksiz durum tablosu üretmek.

| Materyal | Kapsam |
| --- | --- |
| Lesson | Bağlama, atama, yeniden atama ve durum tablosunu açıklar |
| Examples | Bir ve birden fazla bağlama için tamamlanmış durum izleri sunar |
| Quiz | 14 soru outcome'u doğrudan veya ortak biçimde ölçer |
| Exercises | 14 alıştırma outcome'u doğrudan veya ortak biçimde uygulatır |
| Lab | Her yineleme ve nesne güncellemesi için tam durum izi ister |
| Flashcards | Bildirim, ilklendirme, atama, hata ve kapsam bilgisini hatırlatır |
| Interview | Tahmin, hata aşaması ve durum çözümlemesini ölçer |
| Cheat sheet | Durum izleme ve hata sınıflarını hızlı başvuru olarak sunar |
| Chapter summary | Okuma, yazma, önceki/sonraki değer ve hata noktası ölçütlerini özetler |

**Sonuç:** PASS. Outcome öğretiliyor, örnekleniyor, uygulanıyor ve lab ile
doğrudan ürün olarak isteniyor.

### `V01-LO010`

**Outcome:** Beklenen değişim ihtiyacından sabit veya değişebilir değişken
seçimini gerekçelendirmek.

| Materyal | Kapsam |
| --- | --- |
| Lesson | `const`/`let` kararını yeniden atama ihtiyacıyla ilişkilendirir |
| Examples | Sabit kimlik, değişen sayaç, toplam ve nesne mutasyonu gösterir |
| Quiz | 12 soru outcome'u doğrudan veya ortak biçimde ölçer |
| Exercises | 9 alıştırma outcome'u doğrudan veya ortak biçimde uygulatır |
| Lab | Her bağlama için anahtar sözcük ve gerekçe ister |
| Flashcards | Sabit bağlama ile nesne mutasyonunu ayırır |
| Interview | Junior'dan Senior'a sahiplik ve değişim kararlarını sorgular |
| Cheat sheet | Karar akışı ve karşılaştırma tablosu sunar |
| Chapter summary | Bağlama ve nesne politikalarının ayrılığını özetler |

**Sonuç:** PASS. Outcome açıklama, seçim, gerekçelendirme ve gerçekçi uygulama
düzeylerinde kapsanıyor.

## Materyaller Arası Tutarlılık

### Lesson ↔ Quiz

- Sorular yalnızca derste bulunan kavramları kullanır.
- `var`, `let`, `const`, kapsam, Geçici Ölü Bölge, mutasyon ve hata sınıfları
  dersle aynı teknik anlamı taşır.
- Cevap ve açıklamalar dersle çelişmez.
- 25 sorunun tamamında cevap, açıklama ve outcome eşleşmesi vardır.

**Gözlem:** Quiz çoğunlukla seçme, tanıma ve kısa geri çağırma davranışı ölçer.
`V01-LO009` içindeki “eksiksiz tablo üretme” davranışını tek başına tam ölçmez;
bu eksik alıştırma ve lab ile doğru biçimde tamamlanır.

### Lesson ↔ Exercises

- 20 alıştırma dersin kavram sırasını temel alır.
- Başlangıç, orta ve ileri seviye dağılımı 8/8/4'tür.
- Bütün alıştırmalarda amaç, görev ve beklenen çıktı vardır.
- Outcome eşleşmeleri açıkça yazılmıştır.

**Engelleyici sorun:** Alıştırma 20, yeniden düzenlenecek 10-15 satırlık hatalı
örneğe başvurur; ancak bu kaynak kodu sağlamaz. Öğrenci görevi aynı başlangıç
noktasından yeniden üretemez.

### Lesson ↔ Lab

- Lab, dersteki istek kimliği, fiyat listesi, çalışan toplam ve nesne mutasyonu
  senaryolarını birleştirir.
- Başlangıç kodu çalıştırılabilir sözdizimine sahiptir.
- Beklenen `subtotal: 25` ve `total: 29` değerleri doğrulanmıştır.
- İpuçları çözümü doğrudan vermeden doğru zihinsel modele yönlendirir.
- Çözüm yaklaşımı, sprint gereksinimine uygun olarak stratejiyi açıklar; tam
  kodu ifşa etmez.

**Sonuç:** PASS.

### Lesson ↔ Flashcards

- 40 kart altı konu grubunda ders kapsamını dengeli biçimde tekrar eder.
- Kartlar kısa ve tek odaklıdır.
- Ana yanlış anlamalar doğru karşılıklarıyla ele alınır.

**Küçük sorun:** Dosya bağımsız kullanıldığında yalnızca değişken ve bağlama ilk
kullanımda Türkçe/İngilizce eşlenir. Bildirim, ilklendirme, atama, kapsam ve
diğer teknik terimlerin ilk kullanım eşleri verilmez.

## Terminoloji ve Türkçe Dil Denetimi

### Doğru Kullanımlar

- Ana ders temel teknik terimleri ilk kullanımda Türkçe (English) biçiminde
  verir.
- Programlama anahtar sözcükleri, API adları ve tanımlayıcılar İngilizcedir.
- Lab ve cheat sheet içindeki kod yorumları Türkçedir.
- Teknik açıklamaların büyük çoğunluğu Türkçe ve anlaşılırdır.

### Uygunsuz veya Tutarsız Kullanımlar

| Dosya | Örnek | Sorun |
| --- | --- | --- |
| `lesson.md` | `canonical`, `specification` | Eğitim anlatısında çevrilmemiş İngilizce sözcük |
| `interview.md` | `Specification ortam kaydı` | Karma dil |
| `lesson-assets.md` | `Quiz`, `flashcard` | Türkçe eğitim materyali türü adlarıyla tutarsız |
| `chapter-summary.md` | `Quiz`, `Flashcard'lar` | Karma ve kısmen eklenmiş İngilizce |
| Birden fazla bağımsız materyal | İlk teknik terimler | Türkçe (English) ilk kullanım eşlemesi dosya bazında eksik |

**Sonuç:** CHANGES REQUIRED.

Her materyal tek başına sunulabileceği için ilk teknik kullanım eşlemesi dosya
başına doğrulanmalıdır. Resmî eser adları, dosya yolları, kod, API, hata sınıfı
ve JavaScript anahtar sözcükleri bu bulgunun dışındadır.

## Kod Doğruluğu

| Kontrol | Sonuç |
| --- | --- |
| JavaScript fenced block sayısı | 58 |
| Sözdizimi geçerli blok | 57 |
| Beklenen sözdizimi hatası bloğu | 1 |
| Beklenmeyen parse hatası | 0 |
| Örnek assertion kontrolleri | PASS |
| Lab sonuç assertion kontrolü | PASS |
| Markdown lint | 0 hata |
| Kırık göreli bağlantı | 0 |

Tek parse hatası `examples.md` içindeki tekrarlı `let` bildirimidir. Dosya bunu
“ayrı sözdizimi hatası” olarak açıkça etiketlediği için beklenen eğitim
davranışıdır.

Hata sınıfları dersle uyumludur:

- tekrarlı sözlüksel bildirim → `SyntaxError`;
- Geçici Ölü Bölgede okuma → `ReferenceError`;
- `const` yeniden ataması → `TypeError`;
- ilklendiriciden önce `var` okuma → `undefined`.

## Zorluk Dengesi

### Alıştırmalar

| Seviye | Sayı | Baskın davranış |
| --- | ---: | --- |
| Başlangıç | 8 | Tanıma, temel izleme, tek kavram uygulaması |
| Orta | 8 | Birden fazla bağlama, hata ve kapsam analizi |
| İleri | 4 | Politika, ortam sınırı, tam iz ve kod incelemesi |

Dağılım başlangıç dersi için uygundur.

### Mülakat

| Seviye | Sayı | Baskın davranış |
| --- | ---: | --- |
| Junior | 10 | Temel kavram ve kısa tahmin |
| Mid | 10 | Sınır durumları ve ortam farkları |
| Senior | 10 | Sahiplik, optimizasyon sınırı ve takım politikası |

Seviyeler yalnızca sözcük zorluğuyla değil beklenen muhakeme kapsamıyla ayrılır.

### Quiz

Soru türleri çeşitlidir, ancak cevap biçimleri ağırlıklı olarak hatırlama ve
anlama düzeyindedir. Bu durum başlangıç quizi için kabul edilebilir; yüksek
düzeyli davranışlar alıştırma, lab ve mülakatla ölçülür.

## Tekrar ve Eksik Kavram Denetimi

### İşlevsel Tekrar

`const`/`let` seçimi, Geçici Ölü Bölge, bağlama/nesne ayrımı ve kapsam birden
fazla materyalde tekrar edilir. Bu tekrarlar aynı metnin gereksiz kopyası
değildir:

- ders açıklar;
- örnekler gösterir;
- quiz geri çağırır;
- alıştırmalar uygulatır;
- lab bütünleştirir;
- kartlar aralıklı tekrar girdisi sağlar;
- mülakat sözlü gerekçe ister;
- cheat sheet hızlı başvuru sunar.

**Sonuç:** Zararlı tekrar bulunmadı.

### Kavram Kapsamı

Paket genelinde şunların tamamı bulunur:

- değişken, bağlama, değer ve durum;
- bildirim, ilklendirme, atama, yeniden atama ve mutasyon;
- `var`, `let`, `const`;
- global, fonksiyon ve blok kapsamı;
- gölgeleme ve yeniden bildirim;
- Geçici Ölü Bölge ve yukarı kaldırma;
- nesne kimliği ve bellek modeli sınırı;
- modern kullanım, yaygın hatalar ve gerçek dünya senaryoları.

**Sonuç:** Ders hedeflerine göre eksik ana kavram bulunmadı.

## Eğitimsel Akış ve Pedagojik Kalite

Akış şu sırayı izler:

```text
İhtiyaç ve motivasyon
  -> bağlama zihinsel modeli
  -> durum tablosu
  -> bildirim biçimleri
  -> kapsam ve hata sınırları
  -> kademeli örnekler
  -> aktif uygulama
  -> bütünleştirici lab
  -> özet ve tekrar
```

Güçlü yönler:

- soyut kavramdan önce gerçek problem sunulması;
- yanlış zihinsel modellerin açıkça sınırlandırılması;
- kod, tablo ve metin temsillerinin birlikte kullanılması;
- hata örneklerinin geçerli koddan ayrılması;
- her ileri adımın önceki kavramlara dayanması;
- bağlama seçiminin ezber yerine gerekçeye bağlanması;
- lab içinde gözlemlenebilir teslimlerin bulunması.

Pedagojik gözlem:

Quiz cevapları her sorunun hemen altında görünür. Sprint 04 gereksinimi doğru
cevap ve açıklamayı zorunlu kıldığı için bu yapısal hata değildir. Öğrenci
sunumunda cevaplar katlanabilir alan, ayrı cevap anahtarı veya ilk denemeden
sonra gösterim biçiminde sunulmalıdır.

## Bloom Taksonomisi Kapsamı

| Bloom düzeyi | Kanıt | Sonuç |
| --- | --- | --- |
| Hatırlama | 40 bilgi kartı, doğru/yanlış ve boşluk doldurma | PASS |
| Anlama | Ders açıklamaları, quiz gerekçeleri, bölüm özeti | PASS |
| Uygulama | Başlangıç/orta alıştırmalar ve kod örnekleri | PASS |
| Analiz | Durum tabloları, hata sınıflandırması, gölgeleme ve kapsam izleri | PASS |
| Değerlendirme | `const`/`let` gerekçeleri, kod incelemesi, mülakat soruları | PASS |
| Yaratma | İleri alıştırmalar ve çalışan sipariş izleyicisi labı | PASS |

Üst düzey bilişsel davranışların sayısı alt düzeylerden azdır; başlangıç bölümü
için bu beklenen ve uygun bir dağılımdır.

## Bulgular

### `EQA-VAR-001` — Teknik Terim İlk Kullanım Standardı

- **Önem:** Major
- **Durum:** Open
- **Kanıt:** Bağımsız materyallerde ilk teknik terimlerin tamamı Türkçe
  (English) biçiminde verilmemiştir.
- **Etki:** Materyaller tek başına sunulduğunda dil standardı tutarsızlaşır.
- **Gerekli düzeltme:** Her dosyada ilk teknik kullanım çiftini ekleyin; sonraki
  kullanımları yalnızca Türkçe bırakın.
- **Kabul koşulu:** Otomatik terim taraması ve insan dil incelemesi PASS.

### `EQA-VAR-002` — İngilizce Eğitim Anlatısı Kalıntıları

- **Önem:** Major
- **Durum:** Open
- **Kanıt:** `canonical`, `specification`, `Quiz`, `flashcard` ve karma türevler.
- **Etki:** Türkçe eğitim dili sözleşmesi tam karşılanmaz.
- **Gerekli düzeltme:** Resmî başlık/kod istisnaları dışındaki anlatı
  sözcüklerini Türkçeleştirin.
- **Kabul koşulu:** Dil taraması ve editoryal inceleme PASS.

### `EQA-VAR-003` — Alıştırma 20 Giriş Kodu Eksik

- **Önem:** Major
- **Durum:** Open
- **Kanıt:** Görev bir örneğin yeniden düzenlenmesini ister, fakat örneği
  sağlamaz.
- **Etki:** Görev tekrarlanabilir ve eşit başlangıç koşullu değildir.
- **Gerekli düzeltme:** İstenen kusurların tamamını içeren 10-15 satırlık
  başlangıç kodunu ekleyin.
- **Kabul koşulu:** Başlangıç kodu çalışır veya beklenen kusur türleri açıkça
  etiketlenir; beklenen davranış korunarak yeniden düzenlenebilir.

### `EQA-VAR-004` — Quiz Cevap Görünürlüğü

- **Önem:** Observation
- **Durum:** Open
- **Kanıt:** Cevap ve açıklama sorunun hemen altındadır.
- **Etki:** İlk denemeden önce cevap görülürse aktif hatırlama zayıflar.
- **Gerekli düzeltme:** Yayın katmanında cevapları ilk denemeden sonra gösterin.
- **Kabul koşulu:** Yayın arayüzü veya ayrı cevap anahtarı davranışı doğrulanır.

### `EQA-VAR-005` — İleri Ortam Görevi Kurulumu

- **Önem:** Minor
- **Durum:** Open
- **Kanıt:** Alıştırma 19 klasik betik/modül karşılaştırması ister, ancak
  çalıştırma ortamı adımlarını vermez.
- **Etki:** Başlangıç öğrencisi doğru ortamı kuramayabilir.
- **Gerekli düzeltme:** Minimum HTML klasik betik ve `type="module"` çalıştırma
  yönergesi ekleyin.
- **Kabul koşulu:** İki ortamda gözlemlenebilir sonuç yeniden üretilebilir.

## Yayın Kararı

**Karar:** CHANGES REQUIRED

Paket:

- teknik doğruluk açısından PASS;
- öğrenme çıktısı kapsamı açısından PASS;
- pedagojik mimari açısından PASS;
- dil/terminoloji ve iki görevin uygulanabilirliği açısından yayın öncesi
  düzeltme gerektirir.

Major bulgular `EQA-VAR-001`, `EQA-VAR-002` ve `EQA-VAR-003` kapanmadan Sprint
05 PASS ve yayın adayı kararı verilmemelidir.

## Önerilen Düzeltme Sırası

1. Alıştırma 20 başlangıç kodunu ekleyin.
2. Bütün bağımsız materyallerde teknik terim ilk kullanımlarını düzeltin.
3. İngilizce anlatı kalıntılarını Türkçeleştirin.
4. Alıştırma 19 için çalışma ortamı yönergesi ekleyin.
5. Markdown, bağlantı ve JavaScript kontrollerini yeniden çalıştırın.
6. Yalnız etkilenen alanlarda EQA yeniden incelemesi yapın.
7. Major bulgular kapandıktan sonra Sprint 05'i PASS olarak işaretleyin.

## Sonuç

Variables paketi eğitimsel olarak güçlü ve teknik olarak güvenilirdir. Mevcut
sorunlar mimari yeniden tasarım gerektirmez; küçük, hedefli içerik düzeltmeleri
ve yeniden doğrulama ile yayın öncesi kalite kapısını geçebilir.

Bir sonraki çalışma, yeni AI Mentor içeriği üretmek değil, bu rapordaki açık
Major bulguları kapatan **Sprint 05 EQA Remediation** olmalıdır.
