# ASEA Öğrenci Çalışma Alanı — Ürün ve UX Planı

## Belge Durumu

- Sürüm: `0.3.0`
- Tarih: `2026-07-28`
- Durum: Ürün kararları doğrulandı
- Öncelikli cihaz: Masaüstü
- Tanıtım sitesi: `apps/web`
- Öğrenci çalışma uygulaması: `apps/admin`
- İçerik yönetimi: Sonraki aşamada ayrı proje

## Ürün Amacı

ASEA Öğrenci Çalışma Alanı, öğrencinin bir dersi dikkatini dağıtmadan okumasını,
aynı bağlam içinde kod çalıştırmasını ve ASEA öğrenme araçlarına ulaşmasını
sağlayan hesap tabanlı bir çalışma ortamıdır.

Arayüz, NotebookLM'in üç sütunlu çalışma düzeninden yararlanır; görsel dil,
bilgi mimarisi, araçlar ve öğrenme davranışları ASEA'ya özgü olacaktır.

## Uygulama Sınırları

### `apps/web` — Herkese Açık ASEA Sitesi

`apps/web`, ASEA'yı öğrencilere, katkıcılara ve diğer ziyaretçilere tanıtan
kamusal web alanıdır. Ürün anlatımı, akademiler, yol haritası, örnek içerikler
ve öğrenci uygulamasına yönlendirme bu alanda bulunur.

### `apps/admin` — Öğrenci Çalışma Uygulaması

Mevcut dizin adına rağmen `apps/admin`, Google hesabıyla giriş yapan öğrencinin
kişisel çalışma alanıdır. Dashboard, üç sütunlu ders ekranı, arama, Kod Editörü,
ASEA araç kartları, notlar, ilerleme ve kişisel rekorlar burada geliştirilir.

### Gelecekteki Ayrı Proje — İçerik Yönetimi

Ders yazma, düzenleme, önizleme, taslak kaydetme, inceleme ve yayın yönetimi
`apps/web` veya `apps/admin` içine eklenmeyecektir. Bu yetenekler sonraki
aşamada ayrı bir proje ve uygulama sınırı içinde planlanacaktır.

## Temel Öğrenme Akışı

Bir çalışma oturumu aşağıdaki sırayı destekler:

1. Konu anlatımı
2. Örnek
3. Alıştırma
4. Quiz
5. Laboratuvar
6. Yansıtma

İlerleme yalnızca sayfayı görüntülemeye değil, tamamlanan öğrenme kanıtlarına
dayanır.

## Ana Yerleşim

### Sol Sütun — Öğrenme Ağacı

- Akademi, modül, chapter ve ders navigasyonu
- Mevcut chapter ilerlemesi
- Kilitli ve erişilebilir içerik durumları
- Ders içi bölüm başlıklarına hızlı geçiş
- Paneli daraltma ve yeniden açma

### Orta Sütun — Aktif Çalışma Alanı

Orta alan sekmeli bir çalışma yüzeyidir.

- Birinci kalıcı sekme: `Ders`
- Sağ panelden Kod Editörü seçildiğinde açılan ikinci sekme: `Kod Editörü`
- Ders sekmesi kod editörü açıldığında kapanmaz veya içerik durumunu kaybetmez.
- Açık sekme, kod, konsol ve çalışma durumu öğrenci hesabına otomatik kaydedilir.
- Sekmeler tarayıcı sekmesi mantığında çalışır; aynı chapter'a dönüldüğünde
  çalışma geri yüklenir.

### Sağ Sütun — ASEA Çalışma Araçları

Sağ sütun, referans görseldeki Studio yaklaşımına benzer biçimde ikonlu ve
hafif renk kodlu araç kartlarından oluşur.

Planlanan araçlar:

- AI Mentor
- Kod Editörü
- Alıştırmalar
- Quiz
- Laboratuvar
- Challenge
- Bilgi Kartları
- Zihin Haritası
- Görselleştirmeler
- Mülakat Soruları
- Kısa Notlar
- Öğrenci Notları
- İlerleme ve Kanıtlar

Her araç ayrı bir karttır; kartlar kategori başlıkları altında
gruplanmayacaktır. Araç alanı daraltılabilir. Renkler araçları ayırmaya yardım
eder ancak hiçbir anlam yalnızca renkle aktarılmaz.

Bir araç kartı seçildiğinde sağ sütun kart listesinden aracın kendi çalışma
görünümüne geçer. Üst bölümde araç adı ve kart listesine dönüş kontrolü bulunur.
Alıştırma, Quiz, Laboratuvar, Challenge, Bilgi Kartları, Zihin Haritası,
Görselleştirmeler, Mülakat Soruları, Kısa Notlar, Öğrenci Notları ve İlerleme
sağ panel içinde çalışır.

Kod Editörü bu kuralın bilinçli istisnasıdır: kart sağ sütunda bulunur, ancak
seçildiğinde orta sütunda ikinci sekmeyi açar.

### Kısa Notlar ve Notlarım

`Kısa Notlar`, öğrencinin aktif ders bağlamını tek tıklamayla hızlı biçimde
kaydetmesini sağlar. Kayıt; seçili metni veya mevcut bölüm bağlantısını, tarihi
ve chapter kimliğini otomatik olarak ilişkilendirebilir.

`Notlarım` kartı seçildiğinde sağ panel tam boy bir not editörüne dönüşür.
Referans görseldeki davranış korunarak editör aşağıdakileri içerir:

- Araç yolu ve kart listesine dönüş
- Düzenlenebilir not başlığı
- Notu silme
- Geri alma ve yineleme
- Paragraf stili
- Kalın ve italik biçimlendirme
- Bağlantı
- Satır içi kod ve kod bloğu
- Otomatik kayıt
- Aktif ders veya kaynağa bağlama

Öğrenci notları hesapta saklanır ve genel aramadan bulunabilir.

## Kod Editörü

İlk desteklenen çalışma dili JavaScript'tir. Dil çalışma zamanı ve editör
entegrasyonu, ileride Python ve başka diller eklenebilecek bir adapter sınırıyla
tasarlanmalıdır.

İlk sürüm yetenekleri:

- Kodu çalıştırma
- Çalışan işlemi durdurma
- Konsol çıktısı
- Testleri çalıştırma
- Başlangıç koduna sıfırlama
- Çözümü gönderme
- AI Mentor'dan ipucu alma
- Otomatik bulut kaydı

## AI Mentor

AI Mentor bağlam erişimi varsayılan olarak açıktır. Öğrenci isterse bu erişimi
ayar üzerinden kapatabilir. Mentor aşağıdaki aktif çalışma bağlamını görebilir:

- Açık ders ve ders bölümü
- Kod editöründeki güncel kod
- Konsol ve test hataları
- Tamamlanan alıştırmalar
- Mevcut öğrenme hedefi

Yardım sırası:

1. Yönlendirici ipucu
2. Kavramsal açıklama
3. Öğrenci isterse örnek çözüm

Mentor, doğrulanmış ASEA içeriğine dayanmalı ve öğrencinin düşünme sürecini
gereksiz yere atlamamalıdır.

## Arama

İlk sürüm klasik sonuç listesi sunar. Sonuçlar aşağıdaki kapsamlarla
filtrelenebilir:

- Dersler
- Kavramlar
- Kod örnekleri
- Quizler
- Laboratuvarlar
- Projeler
- Mülakat soruları
- Öğrenci notları
- Kısa notlar
- İzin verilen çalışma kayıtları

Arama bütün ana ekranlardan erişilebilir olmalıdır.

AI tarafından özetlenmiş, kaynak bağlantılı cevap deneyimi ilk sürüm sonrasına
ertelenmiştir.

## Başarı Kapıları

Sistem aşağıdaki içerikleri ayrı kurallarla kilitleyebilmelidir:

- Sonraki chapter
- Laboratuvar
- Challenge
- Cevap anahtarı
- Modül projesi

Chapter tamamlama modeli; ders kontrol noktası, alıştırma, quiz, laboratuvar ve
kısa yansıtma kanıtlarını destekler. Kesin quiz eşiği ve tekrar politikası
sonraki ölçme-değerlendirme kararında belirlenecektir.

## Öğrenci Dashboard'u

Birincil eylem `Derse devam et` olacaktır.

Dashboard aşağıdakileri önem sırasına göre sunar:

1. Devam edilecek ders
2. Günlük çalışma planı
3. Genel akademi ve chapter ilerlemesi
4. Tekrar zamanı gelen içerikler
5. Beceri seviyeleri
6. Proje ve öğrenme kanıtları
7. Kişisel rekorlar ve başarılar

İlk sürüm oyunlaştırması:

- XP
- Çalışma serisi
- Beceri seviyeleri
- Anlamlı başarı rozetleri
- Kişisel rekorlar

Genel öğrenci sıralaması ilk sürüm kapsamında değildir.
Öğrenci başka kullanıcılarla karşılaştırılmaz; yalnız kendi geçmişi, gelişim
eğrisi ve kişisel rekorları gösterilir.

## Ana Navigasyon

- Ana Sayfa
- Akademiler
- Arama
- Projeler
- Mülakat Soruları
- Notlarım
- Kısa Notlar
- Başarılar
- Profil

## Hesap ve Kalıcılık

- Öğrenci ilerlemesi hesap tabanlıdır.
- İlk giriş yöntemi Google ile giriş olacaktır.
- Ders konumu, açık sekmeler, kod, notlar, sonuçlar ve kişisel ilerleme
  sunucuda öğrenci hesabıyla ilişkilendirilir.
- Otomatik kayıt durumu arayüzde anlaşılır fakat dikkat dağıtmayan biçimde
  gösterilir.

## İçerik Yönetimi

İçerik üretimi hem tanıtım sitesinden hem öğrenci çalışma uygulamasından
ayrılır. Sonraki aşamada kurulacak ayrı projenin ilk kapsamı şunları içerir:

- Ders ve dosya ağacı
- Sade Markdown editörü
- Canlı öğrenci görünümü önizlemesi
- Taslak kaydetme

Gelişmiş AI yazarlığı, kaynak-iddia eşleme, sürüm karşılaştırma ve çok rollü
inceleme/yayın akışı sonraki sürüme ertelenmiştir.

## Görsel Tasarım İlkeleri

- Sakin ve odaklı çalışma alanı
- İçerik okunabilirliğini önceleyen orta sütun
- Düşük görsel gürültü
- Araçlarda tutarlı ikon ve kısa adlandırma
- Açık ve koyu tema
- Klavye erişimi ve görünür odak
- Yalnız renge dayanmayan durum göstergeleri
- Panel ve sekmelerde öngörülebilir davranış

Logo ve kalıcı ASEA renk paleti daha sonraki marka tasarımı aşamasında
belirlenecektir. İlk prototip değiştirilebilir semantik tasarım tokenları
kullanacaktır.

## İlk Profesyonel Prototip Kapsamı

1. Öğrenci dashboard'u
2. Chapter çalışma ekranı
3. Kod editörü sekmesi
4. Sağ çalışma araçları paneli
5. Arama ve filtrelenmiş sonuçlar

Chapter çalışma ekranı ve araç etkileşimleri için örnek içerik olarak
`V01-C02 — Bilgisayarlar Programları Nasıl Çalıştırır?` kullanılacaktır.

## Kapsam Dışı veya Ertelenen Konular

- Kalıcı logo ve renk paleti
- AI özetli arama
- Kesin quiz başarı ve tekrar politikası
- Genel öğrenci sıralaması
- Python ve diğer çalışma zamanları
- Ayrı içerik yönetimi projesi
- Gelişmiş içerik üretim ve çok rollü yayın sistemi
- Mobilde tam özellik eşitliği

## Açık Tasarım Ayrıntıları

- Sağ araç kartlarının kesin görsel sırası
- Geçici nötr tasarım tokenlarının ilk değerleri
- Panel genişliklerinin minimum ve maksimum ölçüleri
- Not editöründeki kaynak bağlama etkileşiminin ayrıntıları
