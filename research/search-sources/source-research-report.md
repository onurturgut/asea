---
document_type: "research-report"
document_id: "ASEA-SEARCH-SOURCES-RR01"
title: "ASEA Search Engine Kaynak Araştırması"
version: "0.1.0"
status: "Research Candidate"
last_updated: "2026-07-29"
---

# ASEA Search Engine Kaynak Araştırması

## Karar Özeti

ASEA arama motoru için 22 akademiyi kapsayan **320 tekil kaynaklık** ilk katalog
oluşturuldu. Otomatik erişim kontrolünde 306 kaynak doğrulandı, 2 kaynak erişilebilir
fakat otomasyona kapalı bulundu, 12 kaynak ise manuel inceleme kuyruğuna alındı.
Her akademide en az 10 küratörlü kaynak bulunur. Ortak kaynaklar tek kopya olarak
saklanır ve `academy_ids` ile birden fazla akademiye bağlanır.

Bu katalog doğrudan içerik kopyalama izni değildir. `status: research-candidate`
olması, kaynağın ders araştırmasında aday olduğunu gösterir. Açık lisansı kesin
olarak belirlenmemiş içeriklerde ASEA yalnız metadata, kendi özgün özeti ve dış
bağlantıyı indekslemelidir.

## Kapsam

| Ölçüt | Sonuç |
|---|---:|
| Akademi | 22 |
| Tekil kaynak | 320 |
| Doğrulanmış URL | 306 |
| Erişilebilir fakat kısıtlı | 2 |
| Manuel inceleme gerekli | 12 |
| Resmî dokümantasyon | 64 |
| Üniversite dersi | 23 |
| Şirket eğitimi | 38 |
| GitHub deposu | 17 |
| Açık ders/kitap/müfredat | 31 |
| Mevcut ASEA kaynak kayıtlarından geri kazanılan | 105 |

Kaynak türleri; üniversite dersleri, resmî dokümantasyonlar, dil ve güvenlik
standartları, şirket eğitimleri, açık dersler, açık kitaplar, pratik platformları ve
yüksek sinyalli GitHub depolarından oluşur.

## Seçim İlkeleri

Kaynaklar aşağıdaki sırayla puanlandı:

1. Birincil veya resmî otorite olması.
2. Öğretim amacının ve hedef kitlesinin açık olması.
3. Konu ile chapter düzeyinde eşlenebilmesi.
4. Ücretsiz erişim veya erişim koşulunun görünür olması.
5. Güncellik ve bakım sinyali.
6. GitHub için yıldız, son güncelleme, arşiv durumu ve lisans sinyali.
7. ASEA'nın sıfırdan başlayan Türk öğrenci hedefiyle uyumu.

Yıldız sayısı tek başına kalite ölçütü değildir. Resmî bir standart veya üniversite
dersi yıldızı olmasa da birincil kaynak olarak daha yüksek kanıt değeri taşıyabilir.

## Katalog Sözleşmesi

Makinece okunabilir katalog [source-catalog.json](./source-catalog.json) dosyasındadır.
Her kayıtta en az şu alanlar bulunur:

- kimlik, ad, sahip ve kaynak türü;
- birincil akademi ile bütün akademi eşlemeleri;
- chapter ve konu eşlemeleri;
- kaynak URL'si, son URL ve erişim doğrulaması;
- kayıt/sertifika sinyali;
- lisans ve önerilen ASEA kullanım politikası;
- kalite puanı;
- GitHub kaynaklarında yıldız, lisans, arşiv ve bakım metadata'sı.

Katalog [build-catalog.mjs](./build-catalog.mjs) ile yeniden üretilebilir. URL
kontrolünün geçmesi, içerik doğruluğunu veya yeniden yayın hakkını tek başına
kanıtlamaz.

## İçerik Kullanım Politikası

| Durum | ASEA davranışı |
|---|---|
| Resmî dokümantasyon veya standart | İddiayı doğrula, kısa özgün açıklama yaz, kaynağa bağlan |
| Açık lisans kesinleşmiş | Lisans yükümlülüğünü kayıt altına al; gerekiyorsa atıf ve share-alike uygula |
| Lisans belirsiz veya tüm hakları saklı | Yalnız metadata, özgün özet ve dış bağlantı |
| Giriş gerektiren eğitim | Erişim koşulunu göster; kapalı içeriği kopyalama |
| GitHub deposu | Repo lisansını dosya düzeyinde doğrulamadan kodu içeri alma |
| Robots/koşullar otomasyona izin vermiyor | Arama sonucu olarak dış bağlantı göster; otomatik tam metin alma |

## Manuel İnceleme Kuyruğu

HTTP 403/404/500 döndüren kayıtlar otomatik olarak silinmedi. Bazı eğitim
platformları otomatik isteklere farklı yanıt verebilir; bazı eski ASEA referansları
ise taşınmış olabilir. Bu kayıtlar üretim indeksine alınmadan önce tarayıcıda,
kanonik URL ve lisans bakımından kontrol edilmelidir.

## İlk Üretim Önerisi

İlk sürümde 306 doğrulanmış kaynağın metadata'sı indekslenebilir. Arama sonuçlarında
kaynak adı, kurum, tür, akademi, ilgili chapter, erişim koşulu ve dış bağlantı
gösterilmelidir. Kaynak özeti yalnız ASEA'nın özgün metni olmalı; belirsiz lisanslı
sayfaların tam metni depolanmamalıdır.
