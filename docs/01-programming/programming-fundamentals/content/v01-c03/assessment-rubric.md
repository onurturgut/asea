---
document_type: assessment
assessment_id: "V01-C03-AS01"
title: "V01-C03 Değerlendirme Rubriği"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C03"
learning_outcomes:
  - "V01-LO005"
instruments:
  - "V01-C03-QZ01"
  - "V01-C03-EX01"
  - "V01-C03-L01"
  - "V01-C03-CH01"
  - "V01-C03-IV01"
passing_score: 80
language: "tr"
last_updated: "2026-07-22"
---

# V01-C03 Değerlendirme Rubriği

## Amaç

Bu rubrik, öğrencinin `V01-LO005` öğrenme çıktısını yalnızca hatırlama düzeyinde
değil; yeni bir problemi tanımlama, ayrıştırma, sınama ve kararlarını savunma
düzeyinde gösterip göstermediğini ölçer.

## Ölçülen Öğrenme Çıktısı

Öğrenci, verilen bir problemi girdi, çıktı, kısıt, varsayım ve uç durumlara
ayırabilir; alt problemler ve bağımlılıklar üretir; çözümünü kanıtla savunur ve
AI önerilerini denetler.

## Değerlendirme Araçları

| Araç | Kanıt | Ağırlık |
|---|---|---:|
| `V01-C03-QZ01` | Kavramsal ayrım ve senaryo muhakemesi | %20 |
| `V01-C03-EX01` | Aşamalı uygulama ve bağımsız transfer | %15 |
| `V01-C03-L01` | Tam problem sözleşmesi ve ayrıştırma | %35 |
| `V01-C03-CH01` | Yeni alana transfer ve belirsizlik yönetimi | %20 |
| `V01-C03-IV01` | Sözlü savunma ve profesyonel iletişim | %10 |
| **Toplam** |  | **%100** |

## Analitik Rubrik

| Boyut | 4 — Yetkin | 3 — Yeterli | 2 — Gelişiyor | 1 — Başlangıç |
|---|---|---|---|---|
| Problem çerçevesi | İhtiyaç, aktör, bağlam, başarı ve kapsam çelişkisizdir. | Ana ihtiyaç ve başarı açık; küçük kapsam boşlukları vardır. | Çözüm ile ihtiyaç yer yer karışır; başarı belirsizdir. | İstek doğrudan çözüme çevrilmiş, problem tanımlanmamıştır. |
| Girdi ve çıktı | Tür, zorunluluk, geçerlilik ve hata davranışları nettir. | Temel girdiler ve çıktılar doğru; bazı kurallar eksiktir. | Önemli girdi/çıktılar veya hata davranışları eksiktir. | Girdi ve çıktı birbirine karıştırılmıştır. |
| Kısıt ve varsayım | Tümü doğru etiketli, sahipli, riskli ve doğrulanabilirdir. | Sınıflandırma çoğunlukla doğru; birkaç doğrulama kaydı eksiktir. | Birden fazla ifade yanlış sınıflandırılmıştır. | Varsayımlar gerçek gibi sunulmuş veya kısıtlar görünmezdir. |
| Sınır ve hata analizi | Normal, sınır, geçersiz ve çelişkili durumlar sistematiktir. | Üç temel sınıf vardır; az sayıda kritik boşluk kalmıştır. | Senaryolar çoğunlukla normal akışla sınırlıdır. | Beklenen sonuçlar veya sınır durumları yoktur. |
| Ayrıştırma | Yapraklar tek sorumluluklu, bağımsız doğrulanabilir ve dengelidir. | Ağaç kullanılabilir; birkaç yaprak fazla geniştir. | Sorumluluklar örtüşür veya kabul ölçütleri zayıftır. | Listeleme yapılmış ancak gerçek ayrıştırma oluşmamıştır. |
| Bağımlılıklar | Yönler, ön koşullar, paralellik ve olası döngüler açıklanmıştır. | Temel bağımlılıklar doğrudur; bazı gerekçeler eksiktir. | Birden fazla yön veya sıra hatası vardır. | Bağımlılık modeli yoktur veya kullanılamazdır. |
| İzlenebilirlik | İhtiyaçtan kabul ölçütüne kesintisiz ve gerekçeli zincir vardır. | Ana zincirler kurulmuş, az sayıda kopukluk vardır. | Birçok senaryo veya görev kaynaksızdır. | Kararların hangi ihtiyaca dayandığı gösterilemez. |
| AI denetimi | İlk çözüm korunmuş; AI iddiaları kanıtla kabul veya reddedilmiştir. | İlk çözüm ve karşılaştırma vardır; bazı karar kanıtları zayıftır. | AI kullanılmış ancak sistematik denetim sınırlıdır. | AI çıktısı doğrudan teslim edilmiş veya ilk çözüm yoktur. |
| Teknik iletişim | Kararlar kısa, açık, savunulabilir ve hedef kitleye uygundur. | Anlatım anlaşılır; birkaç gerekçe eksiktir. | Kararlar var fakat savunma dağınıktır. | Sonuç açıklanamıyor veya terminoloji yanlış kullanılıyor. |

## Kritik Hata Koşulları

Aşağıdakilerden biri varsa toplam puan 80’in üzerinde olsa bile değerlendirme
başarısızdır:

- kritik bir iş kuralını kanıtsız biçimde uydurmak,
- kısıt ile varsayımı sistematik olarak karıştırmak,
- sınır veya geçersiz senaryo üretmemek,
- ayrıştırma yapraklarına doğrulanabilir sonuç yazmamak,
- ilk öğrenci çözümünü üretmeden AI çıktısını teslim etmek,
- AI çıktısındaki kaynaksız iddiaları gerçek olarak sunmak,
- kişisel veri veya erişim sırrı paylaşmak.

## Başarı Kuralları

Öğrenci başarılı sayılmak için:

1. ağırlıklı toplamda en az 80/100 almalı,
2. quizin uygulamalı bölümünde en az 24/40 almalı,
3. laboratuvardan en az 80/100 almalı,
4. “Problem çerçevesi”, “Kısıt ve varsayım”, “Ayrıştırma” ve “AI denetimi”
   boyutlarında en az Seviye 3 göstermeli,
5. kritik hata koşullarından hiçbirini ihlal etmemelidir.

## Yetkinlik Kararı

| Sonuç | Koşul | Karar |
|---|---|---|
| 90–100 | Kritik boyutların tümü Seviye 4 | Üst düzey yetkinlik |
| 80–89 | Kritik boyutların tümü en az Seviye 3 | Yetkin |
| 65–79 | Kritik hata yok, fakat kanıt yetersiz | Hedefli tekrar gerekli |
| 0–64 | Temel model eksik veya kritik hata var | Yeniden çalışma gerekli |

## Geri Bildirim ve Yeniden Deneme

Geri bildirim “yanlış” demekle sınırlı kalmaz. Her bulgu şu yapıda yazılır:

`kanıt → etki → ilgili ölçüt → beklenen düzeltme → yeniden teslim koşulu`

Yeniden denemede öğrenci yalnızca eksik dosyayı değil, düzeltmenin bağlı olduğu
izlenebilirlik zincirini de günceller. Yeni senaryo verilerek transfer
becerisinin ezberden bağımsız olduğu doğrulanır.

## İzlenebilirlik

| Öğrenme çıktısı | Kavramlar | İddialar | Kanıtlar | Araçlar |
|---|---|---|---|---|
| `V01-LO005` | `ASEA-CON-000012`–`ASEA-CON-000015` | `ASEA-CLM-000012`–`ASEA-CLM-000015` | `ASEA-EV-000010`, `ASEA-EV-000014` | `QZ01`, `EX01`, `L01`, `CH01`, `IV01` |

## Referanslar

- [Kanonik değerlendirme kaydı](../../../assessment.md)
- [Ana ders](../../../chapters/03-problem-tanimi-ve-ayristirma.md)
- [Quiz](./quiz.md)
- [Laboratuvar](./lab.md)
- [Challenge](./challenge.md)
