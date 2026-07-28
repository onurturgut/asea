# ASEA 2026 Fiyatlandırma Raporu

Tarih: 29 Temmuz 2026  
Para birimi: TL, KDV hariç  
Referans kur: 1 USD = 47,3802 TL

## Executive Summary

- **Mevcut ASEA'nın yeniden yapım maliyeti 2,40–7,57 milyon TL; merkez
  tahmini 4,62 milyon TL'dir.**
- **Tüm kaynak kod ve mevcut içerik haklarının bugünkü haliyle devrinde**
  2,90 milyon TL açılış, 2,30–2,70 milyon TL hedef kapanış ve 1,80 milyon
  TL taban öneriyorum.
- **Aynı kapsamın müşteriye özel MVP olarak yeniden üretilmesi**
  4,20–5,80 milyon TL + KDV fiyatlanmalıdır.
- **Üretime hazır V1 teslimi** 7,0–9,5 milyon TL + KDV; öğrenci
  uygulaması, içerik/yayın admini ve tanıtım sitesinden oluşan tam ekosistem
  9,5–14,0 milyon TL + KDV bandında fiyatlanmalıdır.

## İncelenen mevcut değer

Depo incelemesinde öğrenci uygulaması tarafında yaklaşık 9.550 satır özel
uygulama kodu ve 114 kaynak dosya bulundu. Ürün; Next.js App Router,
üç sütunlu ders deneyimi, dashboard, akademi ve proje katalogları, klasik
arama, kısa/uzun notlar, MongoDB ilerleme kaydı ve izole Web Worker içinde
JavaScript çalıştıran kod editörü içeriyor.

İçerik varlığı da ayrıca değerlidir:

| Varlık | Hacim |
|---|---:|
| Kanonik ders | 18 |
| Kanonik ders kelime sayısı | 133.032 |
| Aktivite paketi bulunan chapter | 17 |
| Aktivite içeriği kelime sayısı | 91.328 |
| Toplam ders ve aktivite içeriği | 224.360 kelime |
| Tanımlı programlama projesi | 9 |

Değeri aşağı çeken üretim eksikleri şunlardır:

- Gerçek Google/hesap girişi, rol ve yetkilendirme yok.
- Ödeme ve abonelik sistemi yok.
- Mentor gerçek bir AI servisi yerine doküman tabanlı deterministik yanıt
  veriyor.
- Profil, başarımlar ve mülakat gibi bazı alanlar örnek veriye dayanıyor.
- Otomatik test paketi, güvenlik sertleştirmesi, izleme ve üretim dağıtımı
  tamamlanmış değil.
- C19–C28 dersleri, C18 aktivite paketi ve ayrı ders yazma/yayınlama admini
  hazır değil.

Bu nedenle proje güçlü bir çalışan MVP'dir; henüz tamamlanmış ticari SaaS
olarak fiyatlanmamalıdır.

## Yeniden yapım maliyeti

| Bileşen | Tahmini saat | Maliyet |
|---|---:|---:|
| Ürün keşfi ve UX | 140–220 | 4.200–12.100 USD |
| Frontend ve tasarım sistemi | 420–620 | 12.600–34.100 USD |
| İçerik motoru, katalog ve arama | 180–280 | 5.400–15.400 USD |
| MongoDB API ve kod çalışma alanı | 240–360 | 7.200–19.800 USD |
| QA, proje yönetimi ve mevcut teslim | 240–360 | 7.200–19.800 USD |
| Ders ve aktivite varlığı | 700–1.300 | 14.000–58.500 USD |
| **Toplam** | **1.920–3.140** | **50.600–159.700 USD** |

Merkez senaryo:

- Yazılım: 1.530 saat × 42,5 USD
- İçerik ve öğretim tasarımı: 1.000 saat × 32,5 USD
- Toplam: 97.525 USD, yani yaklaşık **4,62 milyon TL**

Piyasa çıpaları: Clutch 2026 rehberinde yazılım şirketlerinin çoğu
25–49 USD/saat, Upwork geçmiş sözleşmelerinde full-stack geliştiriciler
16–35 USD/saat bandında. Öğretim tasarımı ve teknik içerik için görülen
genel bant 20–45 USD/saattir.

## Önerilen ticari fiyatlar

| Satış biçimi | Fiyat bandı | Önerilen merkez |
|---|---:|---:|
| Mevcut kod + içerik için tam IP devri | 1,80–2,90 milyon TL | 2,40 milyon TL |
| Mevcut MVP'nin müşteriye özel üretimi | 4,20–5,80 milyon TL | 5,00 milyon TL |
| Üretime hazır V1 | 7,00–9,50 milyon TL | 8,00 milyon TL |
| Tam ASEA ekosistemi | 9,50–14,00 milyon TL | 11,50 milyon TL |

### IP devrinde pazarlık stratejisi

- Açılış fiyatı: **2,90 milyon TL**
- Hedef kapanış: **2,30–2,70 milyon TL**
- Altına inilmemesi önerilen seviye: **1,80 milyon TL**

Bu fiyat tüm mevcut kaynak kod, tasarım ve içeriklerin münhasır ticari
haklarının devredildiği varsayımına dayanır. Marka, şirket hissesi, gelecek
gelir payı veya kurucu desteği dahilse ayrıca fiyatlanmalıdır.

### Proje tesliminde ödeme planı

- %30 sözleşme ve başlangıç
- %25 UX/ürün kabulü
- %25 beta teslimi
- %20 canlıya geçiş ve garanti başlangıcı

Yıllık bakım ve sürüm bütçesi proje bedelinin %18–22'si olmalıdır. Bulut,
MongoDB, e-posta, AI kullanımı ve ödeme komisyonları müşteriye ayrıca
faturalandırılmalıdır.

## SaaS fiyatlandırması

ASEA üretim V1 seviyesine ulaştıktan sonra önerilen liste fiyatları:

| Paket | Aylık | Yıllık | Kural |
|---|---:|---:|---|
| Core bireysel | 399 TL | 3.990 TL | AI hariç |
| AI Mentor bireysel | 699 TL | 6.990 TL | Aylık AI kredisi |
| Kurum 100–499 | 350 TL/öğrenci | 4.200 TL/öğrenci | En az 100 yıllık koltuk |
| Kurum 500–999 | 250 TL/öğrenci | 3.000 TL/öğrenci | Yıllık peşin |
| Enterprise 1000+ | 180 TL/öğrenci | 2.160 TL/öğrenci | SSO ve SLA ayrıca |

Kurum kurulum, veri hazırlama ve eğitim bedeli **150.000–450.000 TL**
olmalıdır. AI kullanımını hiçbir pakette sınırsız sunmamak; kredi, adil
kullanım ve ücretli aşım modeli kurmak gerekir.

Global karşılaştırmada DataCamp yıllık Premium planı aylık eşdeğer
14 USD, Coursera Plus 59 USD/ay veya 399 USD/yıl seviyesindedir. ASEA için
önerilen yerel fiyatlar, Türkiye satın alma gücü ve ilk sürümde daha dar
olan katalog dikkate alınarak bu çıpaların altında tutulmuştur.

## Sonraki kararlar

1. Satılacak model seçilmeli: tam IP devri, müşteriye özel proje veya SaaS.
2. Üretim V1 kabul kriterleri sözleşmeden önce dondurulmalı.
3. İçeriklerin uzman incelemesi ve ticari kullanım/telif zinciri
   belgelenmeli.
4. Ücretli pilotta haftalık aktif öğrenci, ders tamamlama, ödeme dönüşümü
   ve öğrenci başına AI maliyeti ölçülmeli.
5. İlk gerçek gelir ve kullanım verisinden sonra maliyet temelli fiyatlama
   yerine gelir ve büyüme temelli ürün değerlemesine geçilmeli.

## Varsayımlar ve sınırlar

Bu çalışma şirket değerlemesi değildir. Kullanıcı, gelir, büyüme,
sözleşme ve yatırım verisi olmadığı için gelir çarpanı kullanılmamıştır.
Kelime sayısı içerik kalitesini veya telif temizliğini tek başına kanıtlamaz.
Tüm TL fiyatları teklif tarihinde kur ve enflasyona göre güncellenmelidir.
KDV, üçüncü taraf servisler, müşteri özel entegrasyonları ve veri göçü
fiyatlara dahil değildir.

## Kaynaklar

- [Clutch Software Development Company Pricing Guide 2026](https://clutch.co/developers/pricing)
- [Upwork Full Stack Developer Cost](https://www.upwork.com/hire/full-stack-developers/cost/)
- [Upwork Instructional Designer Cost](https://www.upwork.com/hire/instructional-designers/cost/)
- [Upwork Technical Writer Cost](https://www.upwork.com/hire/technical-writers/cost/)
- [DataCamp Pricing](https://www.datacamp.com/pricing?period=yearly&tab=learn)
- [Coursera Plus](https://www.coursera.org/courseraplus/)
- [USD/TRY referans kuru](https://tr.investing.com/currencies/usd-try)
