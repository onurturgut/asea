---
document_type: interview
interview_id: "V01-C03-IV01"
title: "Problem Tanımı ve Ayrıştırma — Mülakat Hazırlığı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C03"
difficulty: "Intermediate"
estimated_time: "45 minutes"
learning_outcomes:
  - "V01-LO005"
assessment_id: "V01-C03-AS01"
language: "tr"
last_updated: "2026-07-22"
---

# Problem Tanımı ve Ayrıştırma — Mülakat Hazırlığı

## Amaç

Bu set, junior yazılım mühendisi adayının belirsiz bir iş isteğini kodlamadan
önce nasıl ele aldığını, sorularını nasıl önceliklendirdiğini ve AI önerilerini
nasıl denetlediğini sözlü olarak göstermesini sağlar.

## Uygulama Biçimi

- 15 soru, toplam 45 dakika
- Her cevap için 2–3 dakika
- Senaryo sorularında önce açıklayıcı soru sorun, sonra yaklaşımı anlatın.
- Ezberlenmiş tanım yerine karar, gerekçe ve doğrulama yöntemi sunun.
- Görüşmeci tam çözümden çok düşünme sürecini değerlendirir.

## Temel Sorular

### Soru 1

Belirsiz bir özellik isteği aldığınızda kod yazmadan önce hangi adımları
izlersiniz?

**Güçlü sinyaller:** İhtiyaç, paydaş, kapsam, girdi/çıktı, açık sorular,
senaryolar ve kabul ölçütleri.

**Takip sorusu:** En önce hangi belirsizliği çözersiniz ve neden?

### Soru 2

Problem ile çözüm önerisini nasıl ayırırsınız?

**Güçlü sinyaller:** Kullanıcı sonucu, iş değeri, çözümden bağımsız başarı
tanımı, alternatif çözüm olasılığı.

### Soru 3

Kısıt ile varsayım arasındaki fark nedir? Birer örnek verin.

**Güçlü sinyaller:** Kısıtın uyulması gereken sınır, varsayımın henüz
doğrulanmamış kabul olması; sahip ve doğrulama yöntemi.

### Soru 4

Bir alt problemin yeterince küçük ve doğru ayrıştırılmış olduğunu nasıl
anlarsınız?

**Güçlü sinyaller:** Tek sorumluluk, açık girdi/çıktı, bağımsız doğrulama,
gözlenebilir kabul ölçütü.

### Soru 5

Sınır durumları neden normal akış kadar önemlidir?

**Güçlü sinyaller:** Eşik davranışı, boş/geçersiz veri, çelişen kurallar,
beklenmeyen kombinasyonlar ve yanlış varsayım keşfi.

## Senaryo Soruları

### Soru 6

Ürün sahibi “Kayıt işlemi hızlı olmalı” diyor. Bu isteği nasıl netleştirirsiniz?

**Takip sorusu:** Hangi ölçüm koşullarını kayda alırsınız?

### Soru 7

Bir kampanya “500 TL üzerindeki siparişlerde” geçerli. 500 TL’nin davranışı
belirsiz. Ne yaparsınız?

**Güçlü sinyaller:** Dilsel belirsizliği görünür kılma, karar sahibini bulma,
sınır senaryolarını karar öncesi ve sonrası güncelleme.

### Soru 8

İki paydaş birbiriyle çelişen indirim kuralları veriyor. Geliştirme ekibinin
ilerleyebilmesi için nasıl bir kayıt oluşturursunuz?

**Güçlü sinyaller:** Çelişki, alternatiflerin etkisi, karar sahibi, son tarih,
bloklanan işler ve alınan kararın izlenebilirliği.

### Soru 9

“Kullanıcı bildirimlerini yönetebilsin” isteğini görüşme sırasında nasıl
ayrıştırırsınız?

**Güçlü sinyaller:** Kanal, olay, tercih, izin, gönderim, başarısızlık ve kayıt
sorumluluklarını ayırma; teknolojiye erken atlamama.

### Soru 10

Son bir stok ürününü iki kullanıcı aynı anda satın almak istiyor. Problem
tanımına hangi soruları eklersiniz?

**Güçlü sinyaller:** Başarı kuralı, rezervasyon süresi, ödeme başarısızlığı,
kullanıcıya gösterilecek sonuç ve tutarlılık beklentisi.

## AI-Native ve Profesyonel Sorular

### Soru 11

Bir AI aracı gereksinimlerde olmayan iş kuralları eklerse bunu nasıl
denetlersiniz?

**Güçlü sinyaller:** İddiayı ayırma, kaynağa geri bağlama, varsayım olarak
işaretleme, yetkili doğrulama, karar kaydı.

### Soru 12

AI’dan problem ayrıştırma desteği alırken kendi düşünme becerinizi nasıl
korursunuz?

**Güçlü sinyaller:** Önce bağımsız sürüm, karşılaştırma, gerekçeli kabul/ret,
geri anlatım ve yeni probleme transfer.

### Soru 13

Bir gereksinimin testten üretim kararına kadar izlenebilirliğini nasıl
kurarsınız?

**Güçlü sinyaller:** Paydaş ihtiyacı → kural → alt problem → senaryo → kabul
ölçütü → test/kanıt zinciri.

### Soru 14

Problem analizi sırasında bilmediğiniz bir alan kuralıyla karşılaşırsanız ne
yaparsınız?

**Güçlü sinyaller:** Uydurmama, konu uzmanını bulma, resmi kaynak arama,
varsayım ve risk kaydı, doğrulamaya kadar blokaj yönetimi.

### Soru 15

Beş dakikada bilet fiyatlandırma ayrıştırmanızı savunun. En riskli kararınız
hangisiydi?

**Güçlü sinyaller:** Kısa problem özeti, kritik belirsizlikler, ayrıştırma
mantığı, sınır kanıtı, trade-off ve AI denetimi.

## Değerlendirici Kanıt Rehberi

| Boyut | Güçlü kanıt | Zayıf kanıt | Kırmızı bayrak |
|---|---|---|---|
| Netleştirme | Öncelikli, bağlama özgü sorular | Genel kontrol listesi | Soru sormadan kodlama |
| Sınırlar | Normal, sınır ve geçersiz senaryo | Yalnızca normal akış | Hata durumunu kullanıcı hatası sayma |
| Varsayım yönetimi | Sahip, risk, doğrulama | Varsayımı yalnızca listeleme | Varsayımı gerçek diye sunma |
| Ayrıştırma | Doğrulanabilir sorumluluklar | Uzun görev listesi | Teknoloji bileşenlerini problem sanma |
| İletişim | Karar ve gerekçe açık | Sonuç var, gerekçe zayıf | Belirsizliği saklama |
| AI denetimi | Kanıtla kabul/ret | AI çıktısını yüzeysel kontrol | AI cevabını otorite kabul etme |

## Puanlama

Her soru 0–4 arasında puanlanır:

- **4:** Yapılandırılmış yaklaşım, somut örnek, risk ve doğrulama içerir.
- **3:** Doğru yaklaşım ve gerekçe vardır; küçük bir boyut eksiktir.
- **2:** Temel kavram doğru fakat uygulama yüzeyseldir.
- **1:** Parçalı veya büyük ölçüde ezberlenmiş cevap vardır.
- **0:** Cevap yoktur ya da yaklaşım kritik biçimde yanlıştır.

Toplam 60 puanın 48’i başarı eşiğidir. Soru 3, 11 ve 15’in her birinden en az
3 puan alınmalıdır.

## Öz Değerlendirme

Görüşme sonrasında şunları yazın:

1. Hangi cevapta çözüme erken atladım?
2. Hangi varsayım için doğrulama yöntemi veremedim?
3. Hangi senaryoda sınır değerini kaçırdım?
4. AI denetimini hangi kanıtla güçlendirebilirim?
5. Bir sonraki provada hangi cevabı 90 saniyede daha açık anlatacağım?

## Referanslar

- [Ana ders](../../../chapters/03-problem-tanimi-ve-ayristirma.md)
- [Challenge](./challenge.md)
- [Değerlendirme rubriği](./assessment-rubric.md)
