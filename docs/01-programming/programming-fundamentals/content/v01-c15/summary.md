---
document_type: "chapter-summary"
document_id: "V01-C15-SUM01"
title: "V01-C15 Summary"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C15"
last_updated: "2026-07-23"
---

# Bölüm Özeti — Kapsam, Yaşam Süresi ve Yan Etkiler

## Tek Sayfalık Model

Kapsam bir bağın **nerede** erişilebilir olduğunu, yaşam süresi durumun **ne
zaman** erişilebilir kaldığını söyler. JavaScript sözcüksel kapsam kullanır:
ad araması kullanım noktasındaki en dar kapsamdan başlar ve dışarı ilerler.
İlk eşleşen bağ kazanır.

`let` ve `const` blok kapsamlıdır; `var` sıradan blokla sınırlanmaz. İç kapsamda
aynı adlı yeni bağ oluşturmak gölgelemedir. Yeni bildirim olmadan dış bağı
değiştirmek yeniden atamadır. Kapanış, dış çağrı tamamlandıktan sonra bile
tanımlandığı çevredeki bağa erişimi koruyabilir. Bu yüzden scope sonu, nesnenin
hemen bellekten silinmesi değildir.

Yan etki açık return dışında dış durum okuma veya değiştirmedir. Etki envanteri:

| Kanal | Soru |
|---|---|
| Açık girdi | Parametrelerde ne var? |
| Gizli okuma | Saat, random, global, dosya veya ağ okunuyor mu? |
| Açık sonuç | Ne return ediliyor? |
| Dış yazma | Global, input nesnesi, console, dosya veya ağ değişiyor mu? |

Saf fonksiyon aynı açık girdide aynı sonucu verir ve önceden var olan dış durumu
değiştirmez. Amaç bütün etkileri kaldırmak değildir. Hesaplamayı saf çekirdekte,
kaçınılmaz I/O ve durum etkisini küçük etkili sınırda tutmaktır.

## Hızlı Denetim

1. Kullanım noktasını bul.
2. En dar kapsamdan dışarı bağ ara.
3. Shadowing ile reassignment'ı ayır.
4. Scope ile lifetime'ı karıştırma.
5. Açık/gizli veri kanallarını listele.
6. Pure core adayını belirle.
7. Normal, boundary, invalid ve repeat testleri yaz.
8. AI açıklamasını trace ve test olmadan kabul etme.

## Sonraki Chapter'a Hazırlık

C16'da decomposition, cohesion ve coupling kararlarını çalışırken bu chapter'ın
yerellik ve etki modellerini kullanacaksınız. Bir fonksiyonu bölmeden önce hangi
duruma sahip olduğunu ve hangi etkileri yönettiğini bilmek zorundasınız.
