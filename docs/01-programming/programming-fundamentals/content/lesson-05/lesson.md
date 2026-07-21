---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-024"
supporting_document_type: "Compatibility Report"
title: "Lesson Content: Flowchart"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C04-SD-COMP-015"
derived_from:
  - "../../research/lesson-05/research-packet.md"
x-production-unit: "lesson-05"
x-canonical-lesson-id: "V01-C04"
x-content-language: "tr-TR"
---

# Akış Şeması (Flowchart)

## Purpose

Algoritmanın işlem ve kontrol yönünü anlamı belirli şekiller ve yönlü bağlantılar
üzerinden açık, izlenebilir bir görsel gösterime dönüştürmek.

## Scope

Bu içerik `V01-C04` dersinin akış şeması segmentidir. Ayrı kanonik ders değildir;
algoritma ve sözde kod segmentleriyle birleşir.

## Ownership

İçerik yalnız [onaylı Research Packet](../../research/lesson-05/research-packet.md)
üzerinden türetilmiştir. Gösterim anlamı ile çizim aracı birbirine karıştırılmaz.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Lesson/Chapter ID | `V01-C04` |
| Module | `V01-M01` |
| Üretim segmenti | `lesson-05` |
| Seviye | Beginner |
| Süre | `V01-C04` birleşik ders süresi: 2,5 saat |
| Learning Outcome | `V01-LO006` |
| İçerik durumu | Draft |

### Learning Objectives

Bu segmentin sonunda öğrenci:

- akış şemasını veri akışı ve durum diyagramından ayırabilir;
- temel sembollerin anlamsal rollerini açıklayabilir;
- etiketli dallar ve açık sonlanma üzerinden bir yolu izleyebilir;
- döngünün ilerleme ve çıkış yapısını inceleyebilir;
- eşdeğer sözde kod ve akış şeması kontrol akışını karşılaştırabilir.

### Learning Outcomes

Bu segment, `V01-LO006` kapsamındaki algoritma gösterimi ve farklı girdiler
üzerinden yürütme izleme becerisini görsel temsil aracılığıyla destekler.

### Prerequisites

`V01-C03` problem sözleşmesi, `lesson-02` algoritma modeli ve `lesson-04` metinsel
gösterim bilgisi gereklidir.

### Estimated Duration

Bu segmente ayrı kanonik süre atanmaz. `V01-C04` içindeki üç üretim segmentinin
birleşik ders süresi 2,5 saattir.

### Difficulty

**Beginner.** Odak çizim aracını öğrenmek değil, şekillerin anlamını ve kontrol
yollarını doğru okumaktır.

### Introduction

Uzun bir koşul dizisini metinde okurken hangi dalın nereye bağlandığını veya bir
döngünün nasıl sona erdiğini gözden kaçırmak kolaydır. Görsel bir gösterim,
işlemler arasındaki yönü ve alternatif yolları aynı yüzeyde gösterir.

Akış şeması, algoritma veya süreç işlemlerini ve kontrol yönünü
anlamsal şekiller ile yönlü kenarlar kullanarak gösteren görsel temsildir.

### Neden Bu Konu Önemli?

Akış şeması, bir algoritmanın bütün yollarını gözden geçirmeye yardımcı olur.
Etiketsiz bir karar dalı, eksik bir sonlanma yolu veya ilerlemeyen döngü görsel
incelemede daha kolay fark edilebilir. Ancak şema yalnız bir gösterimdir;
algoritmanın doğruluğunu kendiliğinden kanıtlamaz.

### Kavramın Açıklaması

Bir akış şemasının temel öğeleri şunlardır:

- başlangıç/bitiş (terminal): akışın giriş veya çıkış noktası;
- işlem (process): gerçekleştirilen dönüşüm veya adım;
- karar (decision): koşula göre yolların ayrıldığı nokta;
- girdi/çıktı: alınan veri veya üretilen sonuç;
- düğüm (node): şemadaki anlamlı nokta;
- yönlü kenar (directed edge): kontrolün izlediği yön;
- dal (branch): karar sonucunda seçilen yol;
- birleşme (merge): ayrılan yolların yeniden buluşması;
- döngü (loop): önceki bir adıma dönen kontrollü yol;
- sonlanma yolu (termination path): akışın bitişe ulaşmasını sağlayan yol.

### Teknik Açıklama

Şekiller dekorasyon değildir; her biri farklı bir anlamsal rol taşır. Karar
düğümünden çıkan dallar, koşul sonuçlarını açıkça belirten etiketlere sahip
olmalıdır. Bir döngüde geri dönüş kenarı kadar, durumu değiştiren ilerleme adımı
ve bitişe çıkan yol da görünmelidir.

Sözde kod ve akış şeması aynı kontrol akışını farklı biçimde gösterebilir. `IF`
bloğu karar düğümü ve etiketli dallara; döngü koşulu ise karar, gövde, ilerleme,
geri dönüş ve çıkış yoluna karşılık gelir. Akış şeması, veri akış diyagramı veya
durum diyagramı değildir; farklı soruları yanıtlayan bu gösterimler birbirinin
yerine kullanılmamalıdır.

Çizim aracı şemanın anlam otoritesi değildir. Araç söz diziminin geçmesi de
görselin doğru ve okunabilir olduğunu göstermez; oluşturulan şema ayrıca görsel
olarak incelenmelidir.

### Günlük Hayattan Örnekler

Yaşa göre erişim kararında başlangıçtan sonra yaş girdisi alınır, karar düğümü
eşik koşulunu değerlendirir ve “Evet/Hayır” etiketli dallar farklı çıktılara
gider. Etiketler kaldırılırsa okuyucu hangi yolun hangi sonuca karşılık geldiğini
tahmin etmek zorunda kalır.

Bir koleksiyon toplamında başlangıç değeri kurulur, sıradaki öğe olup olmadığı
karar düğümünde kontrol edilir, öğe varsa toplam güncellenip kontrole dönülür;
öğe yoksa sonuç verilip süreç biter.

### Gerçek Yazılım Dünyasındaki Kullanımı

Sınırlı giriş denemesi akışında başarılı doğrulama, yeniden deneme ve deneme
sınırının dolması ayrı yollar olarak gösterilebilir. Bu görünüm, başarısız
denemede sayacın artırılmadığı veya sınır dolduğunda bitişe gidilmediği hataları
incelemeyi kolaylaştırır.

Büyük ve yoğun bir şema, çoğu zaman daha küçük yazı kullanma ihtiyacı değil,
algoritmayı anlamlı alt parçalara ayırma sinyalidir. Her alt akışın amacı ve
bağlantıları korunmalıdır.

### Common Misconceptions

- **“Her diyagram akış şemasıdır.”** Farklı diyagram türleri farklı ilişkileri
  gösterir.
- **“Şekiller yalnız dekorasyondur.”** Şekil, düğümün rolünü taşır.
- **“Etiketsiz dallar yeterince açıktır.”** Dal sonucu açıkça yazılmalıdır.
- **“Şema doğruluğu kanıtlar.”** Gösterim ayrıca izlenmeli ve incelenmelidir.
- **“Daha fazla düğüm daha fazla açıklık sağlar.”** Gereksiz yoğunluk okunurluğu
  azaltabilir.
- **“Mermaid gösterim otoritesidir.”** Mermaid bir çizim aracıdır; anlamı
  belirleyen kavramsal modeldir.

### Best Practices

- Önce şeklin anlamını, sonra araç söz dizimini seçin.
- Başlangıç ve bütün bitiş yollarını açık gösterin.
- Karar düğümünden çıkan her dalı etiketleyin.
- Döngüde ilerleme adımını, geri dönüşü ve çıkışı birlikte gösterin.
- Sözde kod ile şemanın kontrol akışını yol yol karşılaştırın.
- Oluşturulan şemayı yalnız söz dizimiyle değil, görsel incelemeyle doğrulayın.
- Aşırı büyük şemaları anlamlı alt akışlara ayırın.

### Chapter Summary

Akış şeması, algoritmanın işlemlerini ve kontrol yönünü anlamsal şekiller ve
yönlü kenarlarla gösterir. Başlangıç/bitiş, işlem, karar ve girdi/çıktı rolleri
ayrıdır. Karar dalları etiketlenir; döngülerde ilerleme, geri dönüş ve sonlanma
yolu görünür olur. Sözde kodla eşdeğer kontrol akışı kurulabilir. Çizim aracı ve
söz dizimi, şemanın anlamının veya doğruluğunun yerine geçmez.

### Next Lesson

Bu segmentle `V01-C04` algoritma gösterimleri tamamlanır. Kanonik öğrenme yolu
`V01-C05` ile devam eder.

## Validation

- Araştırma paketi tek bilgi kaynağıdır.
- ISO uyumlu anlam ile Mermaid benzeri çizim aracı rolleri ayrılmıştır.
- Yeni outcome, Lesson ID veya graph edge üretilmemiştir.
- Quiz, exercise, lab veya assessment üretilmemiştir.

## References

- [Research Packet](../../research/lesson-05/research-packet.md)
