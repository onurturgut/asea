---
document_type: exercise
exercise_id: "V01-C03-EX01"
title: "Problem Tanımı ve Ayrıştırma — Alıştırmalar"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C03"
difficulty: "Beginner"
estimated_time: "90 minutes"
learning_outcomes:
  - "V01-LO005"
assessment_id: "V01-C03-AS01"
language: "tr"
last_updated: "2026-07-22"
---

# Problem Tanımı ve Ayrıştırma — Alıştırmalar

## Amaç

Bu çalışma, belirsiz bir isteği kod yazmadan önce sınırları belirlenmiş ve
doğrulanabilir bir problem tanımına dönüştürme becerisini geliştirir. Sorular
kolaydan zora ilerler; son iki alıştırma bağımsız transfer ve yapay zekâ
denetimi gerektirir.

## Çalışma Kuralları

1. Önce soruyu yardım almadan çözün.
2. Her varsayımın yanına nasıl doğrulanacağını yazın.
3. Bir girdinin eksik olması hâlinde sistemin davranışını belirtin.
4. Yapay zekâyı yalnızca ilk çözümünüz tamamlandıktan sonra karşılaştırma için
   kullanın.
5. Çıktılarınızı değerlendirme ölçütleriyle kontrol edin; cevap anahtarı
   bulunmayan sorularda gerekçeniz sonuç kadar önemlidir.

## A — Problemi Çerçeveleme

### Alıştırma 1 — Çözüm mü, ihtiyaç mı?

İstek: “Ana sayfaya büyük bir kırmızı buton ekleyin.”

- İsteğin önerdiği çözümü yazın.
- Bu çözümün arkasında bulunabilecek iki farklı kullanıcı ihtiyacı üretin.
- İhtiyacı doğrulamak için ürün sahibine soracağınız üç soru yazın.

**Beklenen kanıt:** Çözüm ile ihtiyaç birbirinden açıkça ayrılmış olmalıdır.

### Alıştırma 2 — Başarıyı görünür kılma

İstek: “Arama daha iyi çalışmalı.”

Bu isteği ölçülebilir hâle getirecek en az dört başarı ölçütü önerin. Her
ölçütün hangi gözlem veya veriyle doğrulanacağını belirtin.

**Beklenen kanıt:** “Hızlı”, “iyi” ve “kolay” gibi sözcükler sayısal veya
gözlenebilir karşılıklara dönüştürülmelidir.

### Alıştırma 3 — Paydaş haritası

Bir hastane randevu iptal özelliği için en az beş paydaş belirleyin. Her paydaş
için hedefini, kaygısını ve verebileceği kritik bilgiyi yazın.

**Beklenen kanıt:** Yalnızca son kullanıcı değil, işletme ve operasyon
paydaşları da bulunmalıdır.

### Alıştırma 4 — Kapsam sınırı

Bir çevrim içi kurs platformuna “ilerleme takibi” özelliği eklenecektir.

- Kapsam içindeki beş davranışı yazın.
- Kapsam dışındaki üç davranışı yazın.
- Kapsam dışı bıraktığınız her davranışın nedenini açıklayın.

### Alıştırma 5 — Problem bildirimi

“Müşteriler ödeme ekranında sorun yaşıyor” cümlesini aşağıdaki yapı ile
yeniden yazın:

> [Kullanıcı], [bağlam] içinde [hedefe] ulaşamıyor; başarı,
> [ölçülebilir sonuç] ile doğrulanacaktır.

Eksik bilgileri uydurmayın; bilinmeyenleri soru olarak işaretleyin.

## B — Girdi, Çıktı, Kısıt ve Varsayım

### Alıştırma 6 — Girdi ve çıktı tablosu

Bir kargo ücreti hesaplama özelliği için en az altı girdi ve üç çıktı
belirleyin. Her girdinin veri türünü, zorunluluk durumunu ve geçerlilik
kuralını yazın.

### Alıştırma 7 — Kısıt mı, varsayım mı?

Aşağıdaki ifadeleri **kısıt (constraint)** veya **varsayım (assumption)** olarak
sınıflandırın ve gerekçelendirin:

1. Ödeme tutarı Türk lirası cinsinden saklanacaktır.
2. Kullanıcıların her zaman internet bağlantısı olacaktır.
3. İade süresi mevzuat nedeniyle on dört gündür.
4. Bir etkinlik salonu en fazla 600 kişi alır.
5. Kullanıcının yaş bilgisi doğru girilecektir.
6. Sistem yalnızca desteklenen tarayıcılarda çalışacaktır.

### Alıştırma 8 — Varsayım defteri

Bir yemek siparişi sistemindeki “tahmini teslimat süresi” özelliği için en az
altı varsayım yazın. Her biri için:

- varsayımın sahibi,
- yanlış çıkarsa etkisi,
- doğrulama yöntemi,
- doğrulama zamanı

bilgilerini ekleyin.

### Alıştırma 9 — Çelişen kısıtlar

Ürün sahibi “İndirim herkes için aynı olmalı” derken pazarlama ekibi “Yeni
üyelere ek yüzde on indirim verilmeli” diyor. Çelişkiyi çözmeden önce sorulması
gereken soruları, karar sahibini ve kayıt altına alınacak kararı yazın.

### Alıştırma 10 — Sözleşme taslağı

Bir sinema bileti fiyatlandırma isteği için şu başlıklarla kısa bir problem
sözleşmesi hazırlayın:

- amaç,
- aktörler,
- girdiler,
- çıktılar,
- iş kuralları,
- kısıtlar,
- varsayımlar,
- kapsam dışı,
- açık sorular,
- kabul ölçütleri.

## C — Sınırlar ve Hata Durumları

### Alıştırma 11 — Normal, sınır ve geçersiz

Yaş aralığı 18–65 olan bir üyelik başvurusu için üç normal, dört sınır ve dört
geçersiz senaryo üretin. Her senaryoda beklenen davranışı belirtin.

### Alıştırma 12 — Boş ve eksik veri

Bir profil formunda ad, e-posta ve doğum tarihi alanları vardır. Şu durumların
her biri için sistem davranışını tanımlayın:

- alan hiç gönderilmemiş,
- alan boş metin,
- alan yalnızca boşluk,
- biçim geçersiz,
- değer teknik olarak geçerli fakat iş kuralına aykırı.

### Alıştırma 13 — Zaman sınırları

Bir kampanya cuma 18.00’de başlayıp pazar 23.59’da bitiyor. Saat dilimi, tam
başlangıç anı, tam bitiş anı, yaz saati ve sunucu saati açısından en az sekiz
test senaryosu yazın.

### Alıştırma 14 — Eşzamanlılık riski

Son bir konser biletini iki kullanıcı aynı anda satın almaya çalışıyor.
Problemin sonucunu tanımlamak için ürün ve teknik ekipten öğrenmeniz gereken
bilgileri ayırın. Henüz çözüm teknolojisi seçmeyin.

## D — Ayrıştırma ve Bağımlılıklar

### Alıştırma 15 — Sorumluluk ağacı

“Etkinlik bileti satın alma” problemini, her yaprak tek bir sorumluluk ifade
edene kadar ayrıştırın. Ağacınız en az üç seviye ve on yaprak içermelidir.

### Alıştırma 16 — Bağımlılık grafiği

Alıştırma 15’teki yapraklar arasında “önce tamamlanmalı” ilişkilerini kurun.
Döngü oluşup oluşmadığını kontrol edin. Paralel yürütülebilecek işleri ayrıca
işaretleyin.

### Alıştırma 17 — Doğrulanabilir yaprak testi

Aşağıdaki görevleri tek başına doğrulanabilir hâle gelene kadar bölün:

1. Kullanıcı yönetimini yap.
2. Ödeme sistemini tamamla.
3. Raporları iyileştir.
4. Bildirimleri ekle.

Her son yaprak için bir kabul ölçütü yazın.

### Alıştırma 18 — İzlenebilirlik zinciri

Bir gereksinim seçin ve şu zinciri doldurun:

`paydaş ihtiyacı → problem kuralı → alt problem → senaryo → kabul ölçütü`

Zincirde her bağlantının neden geçerli olduğunu bir cümleyle açıklayın.

## E — Bağımsız Transfer ve AI Denetimi

### Alıştırma 19 — Yeni alan transferi

“Bir belediye kütüphanesinde çalışma odası rezervasyonu” isteğini bağımsız
olarak analiz edin. Tesliminiz şunları içermelidir:

- problem bildirimi,
- en az üç paydaş,
- en az beş girdi ve iki çıktı,
- üç kısıt ve üç varsayım,
- en az sekiz senaryo,
- sorumluluk ağacı,
- en az beş kabul ölçütü.

### Alıştırma 20 — Yapay zekâ önerisini denetleme

Önce Alıştırma 19’daki çözümünüzü tamamlayıp sürümleyin. Daha sonra bir yapay
zekâ aracından aynı problemi ayrıştırmasını isteyin.

1. Yapay zekâ çıktısından en az iki güçlü nokta bulun.
2. En az üç eksik, doğrulanmamış veya riskli nokta bulun.
3. Her bulguyu problem sözleşmesindeki kanıtla ilişkilendirin.
4. Kendi çözümünüzde yalnızca gerekçelendirebildiğiniz değişiklikleri yapın.
5. “Neyi neden kabul ettim veya reddettim?” başlıklı 150–250 kelimelik karar
   kaydı yazın.

**Kural:** İlk öğrenci çözümü bulunmadan yapay zekâ karşılaştırması yapılmışsa
bu alıştırma tamamlanmış sayılmaz.

## Teslim Kanıtları

- Yirmi alıştırmanın yanıtları tek bir Markdown dosyasında bulunmalıdır.
- Alıştırma 10 ve 19 için problem sözleşmesi bulunmalıdır.
- Alıştırma 15–16 için ağaç ve bağımlılık grafiği bulunmalıdır.
- Alıştırma 20 için ilk sürüm, AI çıktısı ve karar kaydı ayrı gösterilmelidir.

## Öz Değerlendirme

- Bir çözümü problemden ayırabiliyor muyum?
- Kısıt ile varsayım arasındaki farkı gerekçelendirebiliyor muyum?
- Sınır ve geçersiz senaryoları sistematik üretebiliyor muyum?
- Alt problemleri bağımsız doğrulanabilir parçalara bölebiliyor muyum?
- Yapay zekâ önerisini kanıtla denetleyebiliyor muyum?

## Kaynaklar

- [Ana ders](../../../chapters/03-problem-tanimi-ve-ayristirma.md)
- [Araştırma paketi](../../research/v01-c03/research-packet.md)
- [Değerlendirme rubriği](./assessment-rubric.md)
