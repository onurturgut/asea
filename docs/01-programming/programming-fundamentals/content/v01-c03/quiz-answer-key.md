---
supporting_document_id: "V01-C03-SD-ASMT-001"
supporting_document_type: "Assessment Plan"
title: "V01-C03 Quiz Cevap Anahtarı ve Açıklamalar"
version: "0.1.0"
status: "Draft"
owner: "Assessment Maintainer"
scope_id: "V01-C03-QZ01"
source_document: "quiz.md"
source_version: "0.1.0"
canonical_registry: "../../../assessment.md"
generated_date: "2026-07-22"
language: "tr"
access: "post-attempt"
---

# V01-C03 Quiz Cevap Anahtarı ve Açıklamalar

## Kullanım Sınırı

Bu belge, `V01-C03-QZ01` teslimi kilitlendikten sonra öz değerlendirme veya
değerlendirici geri bildirimi için kullanılmalıdır. Quiz öncesinde öğrenciye
gösterilmemelidir.

## Çoktan Seçmeli Cevaplar

| Soru | Cevap | Gerekçe |
|---:|:---:|---|
| 1 | B | Problem tanımı ihtiyacı, sınırları ve doğrulanabilir başarıyı ortaklaştırır. |
| 2 | C | “Çok hızlı” gözlenebilir bir eşik veya ölçüm yöntemi belirtmez. |
| 3 | C | Bilet türü hesaplamaya giren veridir; diğer seçenekler çıktıdır. |
| 4 | B | Kısıt, çözümün ihlal edemeyeceği sınır veya zorunluluktur. |
| 5 | C | Varsayım görünür, sahipli, riskli ve doğrulanabilir tutulmalıdır. |
| 6 | C | 18, izin verilen aralığın alt sınırıdır. |
| 7 | B | Görev neyin tamamlanacağını ve nasıl doğrulanacağını söylemez. |
| 8 | C | Yeterli ayrıştırma, bağımsız sorumluluk ve doğrulanabilir sonuç üretir. |
| 9 | B | Kapsam dışı kayıt, gizli iş ve beklenti kaymasını sınırlar. |
| 10 | C | Geliştirici iş kuralı uydurmaz; çelişkiyi yetkili kişiye taşır. |
| 11 | B | Döngü, yanlış bağımlılık veya aşırı bağlı sorumluluk işareti olabilir. |
| 12 | C | Girdi, koşul ve gözlenebilir sonuç açıkça belirtilmiştir. |
| 13 | B | İndirimlerin birleşme ve öncelik davranışı tanımsızdır. |
| 14 | B | Kaynaksız AI ekleri gerçek değil, doğrulanması gereken varsayımlardır. |
| 15 | A | İzlenebilirlik, kararın ve testin kaynak ihtiyete bağını korur. |

## Kısa Yanıt Değerlendirme Rehberi

### Soru 16

Tam puan örneği: “Alan gönderilmediğinde sistem bunu kullanıcının bilgi
vermemesi olarak mı, istemcinin hatası olarak mı ele almalıdır?” Yanıtın eksik
değer ile boş değerin farklı iş anlamlarını sorgulaması gerekir.

### Soru 17

499,99 alt sınırın hemen altını, 500 eşik değerini, 500,01 hemen üstünü temsil
eder. Tam puan için öğrencinin `üzerindeki` sözcüğünün 500’ü kapsayıp
kapsamadığını ayrıca sorgulaması beklenir.

### Soru 18

Tam puan için iki makul girdi, iki gözlenebilir çıktı, ihlal edilemez iki sınır
ve doğrulanması gereken bir kabul açık etiketlenmelidir. Örneğin rapor türü ve
tarih aralığı girdi; dosya ve hata bildirimi çıktı olabilir. Dosya biçimi kısıt,
kullanıcının indirme yetkisi varsayım olarak ele alınabilir; bağlama göre farklı
cevaplar gerekçeyle kabul edilir.

### Soru 19

Sorumluluk ağacında görev kendi sorumluluğu olarak yer alır. Grafikte üç öncül
görevden bu göreve yönlü bağımlılık kenarları çizilir. Tam puan için yönün ve
önce-sonra anlamının açıklanması gerekir.

### Soru 20

Dört soru farklı boyutları kapsamalıdır: korunacak varlık, tehdit veya kötüye
kullanım, kimlik/yetki sınırı, ölçülebilir kabul ölçütü, mevzuat veya olay
müdahalesi. Yalnızca “hangi teknoloji?” soruları tam puan almaz.

## Uygulamalı Soruların Değerlendirme Rehberi

### Soru 21

- Problem bildirimi kullanıcı, bağlam, hedef ve başarı sonucunu içerir: 4 puan.
- En az dört kabul ölçütü gözlenebilir ve çelişkisizdir: 4 puan.

### Soru 22

- Üç kısıt doğru sınıflandırılmıştır: 2 puan.
- Üç varsayım görünür ve doğrulanabilir yazılmıştır: 2 puan.
- Karıştırmanın iki somut riski açıklanmıştır: 4 puan.

### Soru 23

- Her sınıftan en az iki senaryo vardır: 3 puan.
- Beklenen sonuçlar açıktır: 3 puan.
- Sınırlar problem kurallarından türetilmiştir: 2 puan.

### Soru 24

- En az iki seviye ve altı tek sorumluluklu yaprak vardır: 4 puan.
- İki bağımlılık yönü ve gerekçesi doğrudur: 2 puan.
- Yapraklar bağımsız doğrulanabilir niteliktedir: 2 puan.

### Soru 25

Tam puanlı süreç şu unsurları içermelidir: öneriyi iddia olarak ayırma, mevcut
gereksinimde kaynak arama, yetkili paydaş veya belgeyle doğrulama, sınır ve
karşı örnekleri test etme, kabul/ret kararını gerekçesiyle kaydetme. Her doğru
adım 1,6 puandır.

## Yanlış Cevaba Göre Tekrar Yolu

| Soru grubu | Tekrar konusu |
|---|---|
| 1–5 | Problem, girdi, çıktı, kısıt ve varsayım |
| 6, 12, 16–17, 23 | Sınır analizi ve kabul ölçütleri |
| 7–8, 11, 19, 24 | Ayrıştırma ve bağımlılıklar |
| 9–10, 13, 18, 20–22 | Kapsam, paydaş ve kural netleştirme |
| 14–15, 25 | AI denetimi ve izlenebilirlik |

## Referanslar

- [Quiz](./quiz.md)
- [Ana ders](../../../chapters/03-problem-tanimi-ve-ayristirma.md)
- [Değerlendirme rubriği](./assessment-rubric.md)
