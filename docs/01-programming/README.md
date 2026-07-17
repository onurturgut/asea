---
document_type: "volume"
volume_id: "V01"
title: "Programming Foundations"
slug: "programming"
version: "0.1.0"
status: "Draft"
level_start: "Beginner"
level_target: "Intermediate"
estimated_duration: "8-16 weeks"
estimated_hours: 245
prerequisite_volumes:
  - "V00"
learning_outcomes:
  - "V01-LO001"
  - "V01-LO002"
  - "V01-LO003"
  - "V01-LO004"
  - "V01-LO005"
  - "V01-LO006"
  - "V01-LO007"
  - "V01-LO008"
  - "V01-LO009"
  - "V01-LO010"
  - "V01-LO011"
  - "V01-LO012"
  - "V01-LO013"
  - "V01-LO014"
  - "V01-LO015"
  - "V01-LO016"
  - "V01-LO017"
  - "V01-LO018"
  - "V01-LO019"
  - "V01-LO020"
  - "V01-LO021"
  - "V01-LO022"
  - "V01-LO023"
  - "V01-LO024"
  - "V01-LO025"
  - "V01-LO026"
  - "V01-LO027"
  - "V01-LO028"
  - "V01-LO029"
  - "V01-LO030"
  - "V01-LO031"
  - "V01-LO032"
  - "V01-LO033"
  - "V01-LO034"
  - "V01-LO035"
  - "V01-LO036"
  - "V01-LO037"
  - "V01-LO038"
  - "V01-LO039"
  - "V01-LO040"
  - "V01-LO041"
  - "V01-LO042"
  - "V01-LO043"
  - "V01-LO044"
  - "V01-LO045"
  - "V01-LO046"
blueprint_id: "V01-BP01"
---

# Volume 01 — Programming Foundations

## Volume Overview

Programming Foundations, ASEA'nın ilk teknik Volume'üdür. Bu Volume bir programlama dilini ezberletmek yerine programlama mantığı (programming logic), algoritmik düşünme (algorithmic thinking), problem çözme, bilgisayarın programları nasıl yürüttüğü, sistematik hata ayıklama ve küçük program tasarımı üzerine kurulur.

JavaScript, yalnızca çalıştırılabilir örneklerin ortak bir biçimde gösterilmesi için kullanılabilir. Öğrenme hedefleri JavaScript sözdizimine bağlı değildir; öğrenci aynı kavramları başka bir genel amaçlı dilde yeniden uygulayabilmelidir.

Volume; [7 modül](./module-map.md), [28 planlanmış Chapter](./chapter-map.md), [28 laboratuvar](./labs.md), 6 Mini Project ve 1 [Capstone Project](./projects.md) içerir. Bu aşamada Chapter ve laboratuvar içerikleri değil, bunları yönetecek eğitim mimarisi tanımlanmıştır.

## Purpose

Bu Volume'un amacı öğrencinin bir problemi bilgisayarın yürütebileceği kesin adımlara dönüştürmesini; küçük programları tasarlamasını; davranışı kanıtla doğrulamasını ve kodu okunabilir biçimde geliştirmesini sağlamaktır. Volume, dil bağımsız kavrayış ile gerçek uygulama disiplini arasında köprü kurar.

### Why Programming Foundations?

Bir dilin sözdizimini bilmek, problemi doğru modellemek veya programın neden çalışmadığını bulmak için yeterli değildir. Değişken, koşul, döngü ve fonksiyon gibi araçlar; ancak veri, durum, kontrol akışı ve ayrıştırma kavramları anlaşıldığında kalıcı beceriye dönüşür. Bu nedenle Volume, teknolojiden önce hesaplama modelini ve problem çözme sürecini öğretir.

### Why This Is The First Technical Volume

Sonraki teknik alanların tamamı program davranışını okuyabilme, küçük algoritmalar kurabilme, veriyi dönüştürebilme ve hatayı izole edebilme becerilerine dayanır. Bu Volume, öğrencinin araç talimatlarını körlemesine izlemesi yerine kodun davranışını tahmin etmesini ve kararını açıklamasını sağlar. Volume 00 çalışma disiplinini kurar; Volume 01 bu disiplini ilk kez teknik üretime dönüştürür.

## Learning Outcomes

Volume sonunda öğrenci:

- Sınırlı bir problemi girdi, çıktı, kısıt ve uç durumlarıyla tanımlar.
- Çözümü sözde kod (pseudocode), karar tablosu veya akış modeliyle ifade eder.
- Değer, tür, değişken, ifade, koşul, döngü, fonksiyon ve koleksiyonları birlikte kullanır.
- Küçük algoritmaları izler, doğruluk gerekçesi sunar ve temel verimlilik farklarını karşılaştırır.
- Hataları yeniden üretir, hipotez kurar, kanıt toplar ve en küçük düzeltmeyi doğrular.
- Test edilebilir, okunabilir ve değiştirilebilir küçük programlar tasarlar.

Ölçülebilir çıktıların tam listesi [learning-outcomes.md](./learning-outcomes.md) dosyasındadır.

## Skills Acquired

Öğrenci; problem ayrıştırma, program izleme, veri modelleme, kontrol akışı tasarımı, fonksiyon sözleşmesi kurma, temel algoritma seçimi, hata ayıklama, test tasarımı, yeniden düzenleme ve teknik karar açıklama becerileri kazanır.

### Skills You Will Gain

Bu beceriler öğrencinin küçük komut satırı programları, veri dönüştürücüler, doğrulama araçları, metin işleyiciler ve kural tabanlı karar sistemleri geliştirmesine yeterlidir. Çıktı, üretim ölçeğinde sistem uzmanlığı değil; sonraki Volume'lerde derinleştirilebilecek güvenilir bir programlama temelidir.

### Study Strategy

Her Chapter, **Concept → Example → Practice → Challenge → Assessment → Reflection** döngüsüyle çalışılmalıdır. Öğrenci önce davranışı kendi sözcükleriyle açıklamalı, ardından örneğin çıktısını tahmin etmeli, ilgili laboratuvarı uygulamalı, challenge ile yeni bağlama aktarmalı ve değerlendirme kanıtını kaydetmelidir.

Yanlış cevaplar ve başarısız denemeler silinmemeli; hata günlüğünde hipotez, kanıt ve düzeltmeyle birlikte tutulmalıdır. Projeler, ilgili modül kapısı geçilmeden başlatılmamalıdır.

## Estimated Duration

Volume çalışma yoğunluğuna göre 8, 12 veya 16 haftada tamamlanabilir. Hızlandırılmış plan yalnızca haftada 28-33 odaklı saat ayırabilen öğrenciler için uygundur. Dengeli plan 19-22, sürdürülebilir plan 14-16 saatlik haftalık yük öngörür.

### Estimated Hours

Toplam tahmini yük 220-270 saattir:

- Chapter öğrenme döngüleri ve 28 laboratuvar: 139-168 saat.
- Altı Mini Project: 44-58 saat.
- Capstone: 25-30 saat.
- Final incelemeler, planlı tekrar ve öz değerlendirme: yaklaşık 12-14 saat; güçlü öğrencilerde bazı tekrar oturumları Chapter süreleriyle örtüşebilir.

## Prerequisites

- Volume 00 — Academy Blueprint'in tamamlanması.
- Hedef, kanıt ve yansıtma içeren bir çalışma oturumu yürütebilme.
- Markdown dosyası oluşturma ve düzenleme.
- Yerel geliştirme ortamında yönerge izleyebilme.

Önceden programlama veya JavaScript bilgisi gerekmez.

## Chapter List

1. İlgili modülün amaç ve geçiş kapısını [roadmap.md](./roadmap.md) içinde okuyun.
2. Chapter ön koşullarını [chapter-map.md](./chapter-map.md) üzerinden doğrulayın.
3. Chapter öğrenme döngüsünü tamamlayın.
4. Eşleşen laboratuvar ve challenge çıktısını doğrulayın.
5. Quiz, açık uçlu soru ve yansıtmayı tamamlayın.
6. Modül projesini veya birikimli proje parçasını teslim edin.
7. Zayıf çıktıları tekrar planına alın; kapı geçilmeden sonraki modüle ilerlemeyin.

### Module Overview

| Modül | Chapter'lar | Ana yeterlik |
| --- | ---: | --- |
| 1. Computational Thinking | 01-04 | Problemi kesin ve yürütülebilir adımlara dönüştürme |
| 2. Data and Expressions | 05-08 | Veriyi temsil etme, saklama ve dönüştürme |
| 3. Control Flow | 09-12 | Karar ve tekrar davranışı tasarlama |
| 4. Functions and Decomposition | 13-16 | Davranışı sözleşmeli, yeniden kullanılabilir parçalara ayırma |
| 5. Structured Data and Recursion | 17-20 | Koleksiyon, kayıt, metin ve özyinelemeli yapı işleme |
| 6. Algorithms and Efficiency | 21-23 | Arama, sıralama ve maliyet karşılaştırması |
| 7. Reliability and Program Design | 24-28 | Hata ayıklama, test, temiz kod ve bütünleşik tasarım |

Detaylı eşleştirme [module-map.md](./module-map.md) dosyasındadır.

### Chapter Inventory

Volume 28 Chapter olarak planlanmıştır. Chapter adları, amaçları, bağımlılıkları, ilgili lab, challenge, proje, görüşme odağı ve değerlendirme kanıtı [chapter-map.md](./chapter-map.md) dosyasında tanımlanır.

## Lab Structure

Her Chapter için bir laboratuvar bulunur. Her laboratuvar `Lab Name`, `Objective`, `Required Skills`, `Tasks`, `Evaluation Criteria` ve `Bonus Challenge` alanlarını taşır. Blueprint aşamasında yalnızca sözleşme ve kapsam tanımlanmıştır; uygulama yönergeleri yazılmamıştır.

## Project Structure

Altı Mini Project, modüller boyunca kolaydan zora ilerler. Tek Capstone Project, öğrencinin gereksinim, algoritma, uygulama, test, hata ayıklama ve teknik açıklama becerilerini birleştirir. Proje kapsamları [projects.md](./projects.md) dosyasındadır.

## Assessment

Her Chapter; quiz, açık uçlu sorular, laboratuvar ve yansıtmayla değerlendirilir. Volume sonunda Final Assessment, Technical Review, Code Review, Capstone Evaluation ve Self Assessment uygulanır. Otomatik doğrulama, tasarım gerekçesi ve insan incelemesinin yerine geçmez.

### Assessment Overview

Volume başarı puanı; Chapter kanıtları %35, Mini Project'ler %25, final teknik değerlendirme %15 ve Capstone %25 ağırlıkla hesaplanır. Ayrıntılı eşikler ve yeniden deneme kuralları [assessment.md](./assessment.md) dosyasındadır.

## Completion Criteria

Öğrenci Volume'u tamamlamak için:

- 28 Chapter'ın her birinde dört zorunlu değerlendirme kanıtını üretmelidir.
- 28 laboratuvarın en az 24'ünü başarı eşiğinin üzerinde tamamlamalı; kalanların tüm kritik güvenlik ve doğruluk maddelerini kapatmalıdır.
- Altı Mini Project'in tamamını teslim etmeli ve her birinden en az %70 almalıdır.
- Final Assessment ve Technical Review'dan en az %75 almalıdır.
- Capstone'dan en az %80 almalı; doğruluk, test ve açıklanabilirlik kritik kapılarını ayrı ayrı geçmelidir.
- Kendi çözümünü kaynak kapalı teknik görüşmede açıklayabilmelidir.

Bu kanıtlar, sonraki teknik Volume'a geçiş için hazır bulunuşluk kaydıdır.

## References

Volume'un kaynak politikası ve kategorize edilmiş başvuru listesi [references.md](./references.md) dosyasındadır.

### Official References

- IEEE Computer Society, SWEBOK Guide V4.0a.
- ACM/IEEE-CS, Computing Curricula 2020 ve Software Engineering 2014.
- ECMA International, ECMAScript Language Specification.
- MDN Web Docs, JavaScript Guide ve Reference.
- MIT OpenCourseWare, programlamaya giriş ve problem çözme dersleri.
