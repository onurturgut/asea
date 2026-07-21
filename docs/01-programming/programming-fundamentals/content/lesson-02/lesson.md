---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-016"
supporting_document_type: "Compatibility Report"
title: "Lesson Content: Algoritma Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C04-SD-COMP-005"
derived_from:
  - "../../research/lesson-02/research-packet.md"
x-production-unit: "lesson-02"
x-canonical-lesson-id: "V01-C04"
x-content-language: "tr-TR"
---

# Algoritma (Algorithm) Nedir?

## Purpose

Algoritmayı bir adım listesi olarak ezberletmeden; problem sözleşmesi, doğruluk,
sonlanma ve izleme üzerinden mühendislik açısından açıklamak.

## Scope

Bu içerik `V01-C04` dersinin algoritma segmentidir. Ayrı bir kanonik ders
değildir; sözde kod ve akış şeması segmentleriyle aynı ders içinde birleşir.

## Ownership

İçerik yalnız [onaylı Research Packet](../../research/lesson-02/research-packet.md)
üzerinden türetilmiştir. Kanonik outcome veya bağımlılık eklenmemiştir.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Lesson/Chapter ID | `V01-C04` |
| Module | `V01-M01` |
| Üretim segmenti | `lesson-02` |
| Seviye | Beginner |
| Süre | `V01-C04` birleşik ders süresi: 2,5 saat |
| Learning Outcome | `V01-LO006` |
| İçerik durumu | Draft |

### Learning Objectives

Bu segmentin sonunda öğrenci:

- algoritma, program ve sezgisel yöntemi birbirinden ayırabilir;
- girdi, çıktı, ön koşul ve son koşuldan oluşan problem sözleşmesi yazabilir;
- doğruluk ile sonlanmayı ayrı özellikler olarak değerlendirebilir;
- normal, sınır ve geçersiz girdiler için izleme planlayabilir;
- bir gösterimin algoritmanın kendisi olmadığını açıklayabilir.

### Learning Outcomes

`V01-LO006`, açık ve sonlu bir algoritma tasarlama ile algoritmayı farklı
girdiler üzerinde izleme yetkinliğini kapsar. Bu segment, outcome'un kavramsal
temelini sağlar.

### Prerequisites

`V01-C03` kapsamında problem sözleşmesi, girdi, çıktı, kısıt, varsayım ve sınır
durum anlaşılmış olmalıdır.

### Estimated Duration

Bu segmente ayrı bir kanonik süre atanmamıştır. Algoritma, sözde kod ve akış
şeması segmentlerinin birleştiği `V01-C04` dersinin toplam süresi 2,5 saattir.

### Difficulty

**Beginner.** Öğrenci bir programlama dili bilmeden sözleşme ve adım mantığıyla
çalışabilir.

### Introduction

Bir hedefe ulaşan her adım listesi algoritma değildir. “Sonuç yeterince iyi
olana kadar devam et” ifadesi neyin yeterli olduğunu ve sürecin ne zaman
duracağını açıklamaz. Mühendislikte bir çözümün yalnız anlaşılır olması değil,
tanımlı girdiler üzerinde uygulanabilir olması ve söz verilen çıktıyı sonlu
sürede üretmesi gerekir.

Algoritma, geçerli girdileri açık ve uygulanabilir adımlarla sonlu
sürede sözleşmeye uygun çıktılara dönüştüren çözüm yöntemidir.

### Neden Bu Konu Önemli?

Kod, yanlış tanımlanmış bir algoritmayı da eksiksiz uygulayabilir. Bu durumda
program çalışır fakat yanlış işi güvenilir biçimde yapar. Algoritmayı koddan
önce incelemek; eksik ön koşulları, durmayan süreçleri ve yanlış sonuç veren
sınır durumlarını daha erken görmemizi sağlar.

### Kavramın Açıklaması

Bir problem sınıfı (problem class), benzer kurallara sahip bütün problemleri;
problem örneği (problem instance) ise belirli bir girdiyi anlatır. Algoritma
tek bir örneği değil, tanımlanan geçerli girdi kümesini ele almalıdır.

Problem sözleşmesi dört parçadan oluşur:

- girdi (input): işlenecek veri;
- çıktı (output): üretilecek sonuç;
- ön koşul (precondition): algoritma başlamadan doğru olması gereken şart;
- son koşul (postcondition): algoritma bittiğinde sağlanması gereken şart.

### Teknik Açıklama

Doğruluk (correctness), algoritmanın her geçerli girdi için sözleşmeye uygun
çıktı üretmesidir. Sonlanma (termination), işlemin sonlu sayıda adımdan sonra
durmasıdır. Biri diğerinin yerine geçmez: duran bir yöntem yanlış sonuç
üretebilir; doğru bir sonuca yaklaşan yöntem ise hiç durmayabilir.

Sezgisel yöntem (heuristic), algoritma ve programla eş anlamlı değildir. Bir
aday çözümü pratik biçimde bulmaya yardımcı olabilir; ancak hangi geçerli
girdilerde hangi son koşulu garanti ettiği ayrıca belirtilmelidir. Bu nedenle
bir yöntemi değerlendirirken adı yerine açık sözleşmesine bakılır.

Deterministiklik (determinism) de algoritma tanımının evrensel şartı değildir.
Bir yöntemin deterministik olup olmadığı ayrı bir özelliktir; doğruluk ve
sonlanma incelemesinin yerine geçmez. Algoritma değerlendirmesi bu üç özelliği
birbirine karıştırmadan yapılmalıdır.

İzleme (trace), seçilen bir girdi için adımları ve değişen durumu sırayla takip
etmektir. İzleme tek başına genel doğruluk kanıtı değildir; normal, sınır ve
geçersiz girdiler üzerindeki karşı örnekleri görünür kılan bir inceleme
aracıdır. Uygulama (implementation), algoritmanın belirli bir dil ve ortamda
gerçekleştirilmesidir. Metin, sözde kod ve akış şeması aynı algoritmanın farklı
gösterimleri olabilir.

### Günlük Hayattan Örnekler

Bir listedeki en büyük değeri bulma yönteminde listenin boş olmaması ön koşul
olabilir. Girdi boşsa “ilk değeri en büyük kabul et” adımı uygulanamaz. Bu eksik
koşul belirtilmeden yazılan adımlar yalnız bazı örneklerde çalışır.

“Aradığın anahtarı bulana kadar kutuları kontrol et” talimatı da anahtar yoksa
sonlanmaz. Son kutudan sonra “bulunamadı” çıktısına giden açık bir yol gerekir.

### Gerçek Yazılım Dünyasındaki Kullanımı

ATM'den para çekme akışında kart, istenen tutar ve doğrulama bilgisi girdidir.
Geçerli kart ve yeterli bakiye ön koşullar arasındadır; para verme ve bakiyeyi
doğru güncelleme son koşullardır. Yalnız başarılı işlemi incelemek, yetersiz
bakiye veya geçersiz tutar gibi sınırları gözden kaçırır.

Arama sistemlerinde “bulunamadı” durumu da sözleşmenin bir parçasıdır. Bu durum
tanımlanmazsa uygulama yanlış bir değer döndürebilir veya gereksiz yere devam
edebilir.

### Common Misconceptions

- **“Her adım listesi algoritmadır.”** Adımlar açık, uygulanabilir ve sonlu
  olmalı; sözleşmeye uygun sonuç üretmelidir.
- **“Bir örnekte doğru sonuç genel doğruluğu gösterir.”** Tek izleme yalnız o
  problem örneği hakkında kanıt sağlar.
- **“Sonlanan yöntem doğrudur.”** Sonlanma, sonucun sözleşmeyi karşıladığını
  garanti etmez.
- **“Algoritma programdır.”** Program, algoritmanın belirli bir uygulamasıdır.
- **“Algoritma mutlaka deterministik olmalıdır.”** Determinizm evrensel bir
  algoritma şartı olarak ele alınamaz.
- **“Sezgisel yöntem ile algoritma aynı garantiyi verir.”** Bir yöntemin
  garantileri yalnız adıyla değil, açık sözleşmesiyle değerlendirilir.
- **“En kısa açıklama en iyi algoritmadır.”** Eksik koşullar kısa görünür ama
  yöntemi belirsiz bırakır.

### Best Practices

- Adımlardan önce geçerli girdi kümesini ve beklenen çıktıyı yazın.
- Her döngü için ilerlemeyi ve çıkış koşulunu görünür kılın.
- Doğruluk ve sonlanmayı ayrı sorularla inceleyin.
- Normal, sınır ve geçersiz girdiler için izleme planlayın.
- Bir karşı örneğin genelleştirilmiş iddiayı çürütebileceğini unutmayın.
- Gösterim biçimini çözüm mantığından ayırın.

### Chapter Summary

Algoritma; geçerli girdileri, açık ve uygulanabilir adımlarla, sonlu sürede
sözleşmeye uygun çıktılara dönüştürür. Girdi, çıktı, ön koşul ve son koşul
sözleşmeyi kurar. Doğruluk ve sonlanma ayrı değerlendirilir. İzleme, seçilmiş
girdilerde davranışı inceler fakat tek başına genel doğruluğu kanıtlamaz.
Program ve gösterim, algoritmanın kendisi değil, onun uygulama ve anlatım
biçimleridir.

### Next Lesson

Sonraki üretim segmenti, aynı `V01-C04` içindeki **Sözde Kod** konusudur.
Birleşik `V01-C04` tamamlandığında kanonik öğrenme yolu `V01-C05` ile sürer.

## Validation

- Tek araştırma kaynağı kullanıldı.
- `V01-LO006` anlamı değiştirilmedi.
- Yeni kanonik Lesson ID veya bağımlılık üretilmedi.
- Quiz, exercise, lab veya assessment üretilmedi.

## References

- [Research Packet](../../research/lesson-02/research-packet.md)
