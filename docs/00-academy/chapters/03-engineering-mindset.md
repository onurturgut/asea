---
title: "Engineering Mindset — Mühendis Gibi Düşünmek"
volume: "00"
chapter: "03"
slug: "engineering-mindset"
difficulty: "Beginner"
estimated_time: "90-120 minutes"
status: "Draft"
prerequisites:
  - "Chapter 01 — Welcome to ASEA"
  - "Chapter 02 — Learning Philosophy"
learning_objectives:
  - "Bir problemi belirtiden ayırarak açık ve sınanabilir biçimde tanımlayabilmek"
  - "Bir yazılım sistemini bileşenleri, sınırları ve etkileşimleriyle inceleyebilmek"
  - "Gereksinimleri ve kalite niteliklerini ölçülebilir kabul ölçütlerine dönüştürebilmek"
  - "Basitlik, bakım yapılabilirlik ve ölçeklenebilirlik arasındaki ödünleşimleri değerlendirebilmek"
  - "Teknik borcu görünür kılan ve karar gerekçesini kaydeden bir mühendislik kararı hazırlayabilmek"
---

# Engineering Mindset — Mühendis Gibi Düşünmek

## Learning Objectives

Bu bölümün sonunda öğrenci:

- İstenen çözümü hemen kodlamak yerine problemi, paydaşları, kısıtları ve başarı ölçütlerini tanımlar.
- Sistem düşüncesi (systems thinking) kullanarak yerel bir değişikliğin diğer bileşenlere etkisini araştırır.
- İşlevsel gereksinim (functional requirement) ile kalite niteliğini (quality attribute) birbirinden ayırır.
- Bir tasarım seçeneğini doğruluk, güvenilirlik, güvenlik, maliyet ve işletim yükü açısından karşılaştırır.
- Teknik borcu (technical debt) bilinçli bir karar olarak kaydeder ve geri ödeme koşulunu belirler.
- Teknik bir kararı kanıt, belirsizlik ve ödünleşimleriyle kısa ve anlaşılır biçimde savunur.

## Prerequisites

Öğrencinin Chapter 01'de açıklanan ASEA çalışma modelini ve Chapter 02'deki aktif öğrenme yöntemlerini tamamlamış olması beklenir. Belirli bir programlama dili bilgisi gerekmez. Bir metin düzenleyiciyle Markdown dosyası oluşturabilmek yeterlidir.

## Estimated Study Time

Okuma ve not çıkarma için 90-120 dakika, uygulama görevi için 120-180 dakika ayrılmalıdır. Görev bir akranla gözden geçirilecekse 30 dakika ek süre planlanabilir.

## Introduction

Program yazmak, tanımlanmış bir davranışı bilgisayara yaptırmaktır. Yazılım mühendisliği ise doğru davranışın ne olduğunu keşfetmeyi; çözümü kısıtlar altında tasarlamayı; doğrulamayı; değiştirmeyi ve güvenilir biçimde işletmeyi de kapsar. Mühendislik zihniyeti (engineering mindset), bir teknoloji listesi değil, belirsizlik karşısında izlenen düşünme disiplinidir.

Bir hata bildirimi geldiğinde yalnızca görünen satırı değiştirmek kısa vadede işe yarayabilir. Ancak hata yanlış gereksinimden, eksik veri sözleşmesinden, yarış durumundan veya gözlemlenebilirlik eksikliğinden kaynaklanıyorsa yerel düzeltme sorunu başka yere taşır. Mühendis önce "Ne bozuldu?", "Kim etkileniyor?", "Başarıyı nasıl ölçeceğiz?" ve "Bu değişiklik başka neyi etkiler?" sorularını sorar.

Bu yaklaşım her kararı ağır bir törene dönüştürmez. Ama kararın riski arttıkça kanıt, inceleme ve kayıt düzeyi de artar. Amaç kusursuz tahmin yapmak değil; varsayımları görünür kılmak, küçük ve geri alınabilir adımlar atmak, sonuçlardan öğrenmektir.

## Core Concepts

### Problemi belirtiden ayırmak

Belirti (symptom), gözlenen olumsuz sonuçtur; problem (problem), bu sonucu üreten koşullar bütünüdür. "Sayfa yavaş" bir belirtidir. Hangi kullanıcı grubunda, hangi istek yüzdesinde, hangi cihazda ve hangi eşik üzerinde yavaş olduğu açıklanmadıkça mühendislik problemi oluşmaz.

İyi bir problem tanımı şu unsurları içerir:

1. Gözlenen mevcut durum ve kanıtı.
2. Etkilenen kullanıcı ya da sistem.
3. Beklenen sonuç ve ölçülebilir başarı ölçütü.
4. Bilinen kısıtlar ve kapsam dışı konular.
5. Henüz doğrulanmamış varsayımlar.

Kök neden analizi (root cause analysis), ilk makul açıklamada durmamayı gerektirir. Günlükler, ölçümler, yeniden üretilebilir deney ve zaman çizelgesi; sezgiyi sınanabilir hipoteze dönüştürür.

### Sistem düşüncesi

Bir sistem; amacı olan, sınırları belirlenmiş ve ilişkiler üzerinden davranış üreten bileşenler bütünüdür. Sistem düşüncesinde yalnızca parçalar değil, parçalar arasındaki veri akışı, bağımlılıklar, geri besleme döngüleri ve gecikmeler incelenir.

Bir çevrim içi sipariş akışında arayüz, stok, ödeme, bildirim ve raporlama ayrı bileşenlerdir. Ödeme zaman aşımı yalnızca ödeme servisinin sorunu olmayabilir: tekrar deneme politikası çift çekime, uzun bekleme stok kilidine, eksik olay kaydı destek ekibinin kör kalmasına yol açabilir. Sistem sınırı çizmek, bu etkileri konuşulabilir hale getirir.

### Gereksinim analizi

Gereksinim analizi (requirements analysis), paydaş ihtiyacını uygulanabilir ve doğrulanabilir beklentiye dönüştürür. İşlevsel gereksinimler sistemin ne yapacağını; işlevsel olmayan gereksinimler (non-functional requirements) ise davranışın hangi kalite ve kısıtlarla sunulacağını belirtir.

"Sistem hızlı olmalı" doğrulanabilir değildir. "Ürün arama isteklerinin yüzde 95'i normal yükte 500 milisaniyenin altında yanıtlanmalı" ifadesi ölçüm koşulu ve eşik içerir. Her önemli gereksinim için en az bir kabul ölçütü (acceptance criterion) bulunmalı; çelişkiler kodlama başlamadan önce paydaşlarla çözülmelidir.

### Kalite ve ödünleşimler

Kalite (quality), yalnızca hatasız çalışma değildir. Doğruluk, güvenilirlik, güvenlik, kullanılabilirlik, performans, test edilebilirlik ve işletilebilirlik gibi nitelikler bağlama göre farklı ağırlık taşır. Bir sağlık sistemi ile geçici bir kampanya sayfasının risk profili aynı değildir.

Ödünleşim (trade-off), bir niteliği iyileştirirken başka bir maliyeti kabul etmektir. Daha agresif önbellekleme gecikmeyi düşürebilir fakat verinin güncelliğini ve hata ayıklamayı zorlaştırabilir. Mühendis "en iyi teknoloji" aramak yerine seçenekleri gereksinimler ve kısıtlarla karşılaştırır.

### Basitlik, bakım yapılabilirlik ve ölçeklenebilirlik

Basitlik (simplicity), gereksiz kavram ve hareketli parça sayısını azaltmaktır; eksik tasarım yapmak değildir. Gereksinimi karşılayan en küçük anlaşılır çözüm, belirsizlik yüksekken değişim maliyetini düşürür.

Bakım yapılabilirlik (maintainability), yazılımın güvenli biçimde anlaşılması, sınanması ve değiştirilmesi kolaylığıdır. Açık adlandırma, dar sorumluluklar, otomatik testler ve güncel belgeler bu niteliği destekler. Ölçeklenebilirlik (scalability), sistemin artan iş yükünü kabul edilebilir performans ve maliyetle karşılayabilmesidir. Henüz var olmayan yük için karmaşık dağıtık mimari kurmak ise bakım maliyetini bugünden doğurabilir. Ölçek kararı ölçüm, büyüme beklentisi ve darboğaz kanıtına dayanmalıdır.

### Teknik borç

Teknik borç, bugün daha hızlı ilerlemek için gelecekteki değişiklik maliyetini artıran tasarım veya uygulama eksikliğidir. Martin Fowler'ın açıkladığı borç benzetmesinde düşük iç kalite, sonraki özelliklerin geliştirilmesine "faiz" ekler. Her kısa yol aynı değildir: tarihli bir deney için bilinçli ve sınırlı borç makul olabilir; nedeni, sahibi ve geri ödeme tetikleyicisi olmayan borç ise görünmez risk üretir.

Bir teknik borç kaydı en azından bağlamı, kabul edilen sonucu, etkilenen alanı, riski, sahibini ve ele alınma koşulunu içermelidir. "Kodu sonra temizle" eyleme geçirilebilir bir kayıt değildir.

### Karar verme ve iletişim

Karar kalitesi, yalnızca sonucun doğru çıkmasıyla ölçülmez. O anda mevcut kanıtın nasıl kullanıldığı, alternatiflerin değerlendirilip değerlendirilmediği ve geri dönüş yolunun bulunup bulunmadığı önemlidir. Mimari karar kaydı (architecture decision record — ADR), bağlamı, seçenekleri, kararı ve sonuçlarını kısa biçimde saklar.

İletişim bir yan beceri değildir; gereksinimlerin ve risklerin ekipte aynı anlaşılmasını sağlayan mühendislik aracıdır. Etkili teknik iletişim; gözlemle yorumu ayırır, belirsizliği açıklar, karardan etkilenen kişileri erken dahil eder ve itiraz edilebilir bir gerekçe sunar.

## Engineering Perspective

Bir ekip, kullanıcıların işlem tamamlandığında e-posta almasını istiyor olsun. İlk fikir, ödeme isteğinin içinde doğrudan e-posta göndermektir. Mühendislik değerlendirmesi şu sırayı izleyebilir:

1. **Problem:** Kullanıcı başarılı işlemin kaydını zamanında alamıyor.
2. **Gereksinim:** Başarılı işlemlerin yüzde 99'u için bildirim beş dakika içinde üretilmeli; başarısız gönderimler işlem sonucunu değiştirmemeli.
3. **Sistem sınırı:** Ödeme, olay kuyruğu, bildirim hizmeti, e-posta sağlayıcısı ve gözlemleme sistemi tanımlanır.
4. **Seçenekler:** Eşzamanlı gönderim, kuyruk tabanlı eşzamansız gönderim ve zamanlanmış toplu gönderim karşılaştırılır.
5. **Ödünleşim:** Kuyruk gecikme ve işletim karmaşıklığı ekler; fakat ödeme ile dış sağlayıcıyı ayırır ve yeniden denemeyi yönetilebilir kılar.
6. **Doğrulama:** Teslim süresi, hata oranı, yinelenen bildirim ve kuyruk yaşı ölçülür.
7. **Karar:** Bağlam, reddedilen seçenekler ve geri alma planıyla kaydedilir.

Bu süreç teknoloji seçmekten önce başarı tanımını kurar. Tasarımın değeri, şemasının etkileyiciliğinden değil, gereksinimi öngörülebilir risk ve maliyetle karşılamasından gelir.

## Real World Examples

### Google: küçük ve odaklı değişiklikler

Google'ın açık kod inceleme rehberi, küçük değişikliklerin daha hızlı ve ayrıntılı incelendiğini; daha az hata barındırdığını ve gerektiğinde daha kolay geri alınabildiğini belirtir. Aynı rehber, kod sağlığının zaman içinde iyileştirilmesini incelemenin temel standardı olarak tanımlar. Bu uygulama, basitlik ve geri alınabilirliğin yalnızca estetik tercih değil, risk yönetimi olduğunu gösterir.

### Amazon Web Services: bağlama göre mimari karar

AWS Builders' Library, Amazon mühendislerinin gerçek sistemleri nasıl tasarlayıp işlettiğini paylaşırken tek bir doğru yöntem olmadığını; kararın müşteri ihtiyacına ve kısıtlara bağlı olduğunu açıkça vurgular. Bu yaklaşım, bir şirketin çözümünü bağlamından koparıp kopyalamak yerine karar mantığını incelemek gerektiğini gösterir.

### NASA: yaşam döngüsü boyunca sistem yaklaşımı

NASA Systems Engineering Handbook, sistem mühendisliğini tasarım, gerçekleştirme, teknik yönetim, işletim ve hizmetten çıkarma boyunca yöntemli ve çok disiplinli bir yaklaşım olarak ele alır. Paydaş beklentilerinin teknik gereksinimlere dönüştürülmesi ve mantıksal ayrıştırma süreçlerinin yinelemeli olması, yazılım kararlarının da daha büyük sistem ve yaşam döngüsü içinde değerlendirilmesi gerektiğini gösterir.

## Common Mistakes

- **Çözümle başlamak:** Problemi doğrulamadan araç veya mimari seçmek, yanlış işi verimli yapmaya yol açar.
- **İşlevsel olmayan gereksinimleri sıfatlarla yazmak:** "Hızlı", "güvenli" ve "ölçeklenebilir" ölçüm koşulu olmadan test edilemez.
- **Geleceği kesin biliyormuş gibi tasarlamak:** Kanıtlanmamış büyüme için erken karmaşıklık, bugünkü değişiklikleri pahalılaştırır.
- **Teknik borcu her kötü kodla eşitlemek:** Borcun bağlamını, etkisini ve geri ödeme kararını kaydetmemek kavramı etkisizleştirir.
- **Yerel optimizasyon yapmak:** Bir bileşenin metriğini iyileştirirken uçtan uca kullanıcı sonucunu kötüleştirmek mümkündür.
- **Fikirleri gerçek gibi sunmak:** Ölçüm, varsayım ve tercih aynı cümlede karıştığında ekip sağlıklı itiraz edemez.
- **Kararı kaydetmemek:** Gerekçe kaybolduğunda ekip eski tartışmaları tekrarlar veya artık geçerli olmayan kısıtları sürdürür.
- **Kaliteyi yalnızca test ekibine bırakmak:** Kalite; gereksinim, tasarım, uygulama, inceleme ve işletimin ortak sonucudur.

## Best Practices

1. Önce problemi bir kullanıcı sonucu ve ölçülebilir başarı ölçütüyle yazın.
2. Bilinenleri, varsayımları ve açık soruları ayrı listelerde tutun.
3. Sistem sınırını ve bağımlılıkları basit bir bağlam diyagramıyla görünür kılın.
4. Her kritik gereksinime doğrulama yöntemi ve kabul eşiği ekleyin.
5. En az iki gerçek seçenek üretin; hiçbir şey yapmama seçeneğini de gerektiğinde değerlendirin.
6. Karar matrisinde ölçütlerin ağırlığını bağlama göre açıklayın.
7. Değişiklikleri küçük, odaklı, test edilebilir ve geri alınabilir tutun.
8. Teknik borca sahip, risk ve geri ödeme tetikleyicisi atayın.
9. Üretim davranışını ölçmeden ölçek veya performans iddiasında bulunmayın.
10. Karardan sonra sonucu gözden geçirin; yeni kanıt eski kararı geçersiz kılıyorsa kaydı güncelleyin.

## Hands-on Exercise

### Görev: Mühendislik karar dosyası hazırlama

Bir etkinlik kayıt sistemi için şu durumu ele alın: Kayıt açıldığında yoğun trafik oluşuyor, bazı kullanıcılar aynı koltuğu seçiyor ve destek ekibi hangi işlemin neden başarısız olduğunu göremiyor. Tek bir Markdown dosyasında aşağıdaki çıktıları üretin:

1. En fazla 120 kelimelik problem tanımı; etkilenen paydaşlar ve kapsam dışı iki konu.
2. Bileşenleri ve dış bağımlılıkları gösteren bir sistem bağlam diyagramı.
3. En az beş işlevsel gereksinim ve üç ölçülebilir kalite gereksinimi.
4. En az iki çözüm seçeneğini doğruluk, karmaşıklık, maliyet, bakım ve ölçek açısından karşılaştıran karar matrisi.
5. Seçilen çözüm için bağlam, karar, sonuçlar ve geri alma koşulu içeren bir ADR.
6. En az iki teknik borç kaydı; her kayıtta risk, sahip ve geri ödeme tetikleyicisi.
7. Çözümün nasıl doğrulanacağını açıklayan en az dört test veya üretim metriği.

### Değerlendirme ölçütleri

| Ölçüt | Puan |
| --- | ---: |
| Problem, paydaş ve kapsam açıklığı | 4 |
| Gereksinimlerin ölçülebilirliği | 5 |
| Sistem ilişkileri ve risk analizi | 4 |
| Seçeneklerin kanıta dayalı karşılaştırılması | 5 |
| ADR ve teknik borç kayıtlarının uygulanabilirliği | 4 |
| Doğrulama planının yeterliliği | 3 |
| **Toplam** | **25** |

Başarı eşiği 18/25'tir. Ayrıca üç kalite gereksiniminin tamamı sayısal bir eşik veya açık bir doğrulama koşulu içermelidir; bu koşul sağlanmazsa görev revizyona döner.

## Reflection Questions

1. Son çözdüğünüz bir hatada belirti ile kök nedeni nasıl ayırdınız?
2. Basitlik hangi durumda az özellik, hangi durumda daha açık bir tasarım anlamına gelir?
3. Bir kalite niteliğini iyileştirirken hangi başka niteliği zayıflatabilirsiniz?
4. Teknik borcu bilinçli kabul etmek için hangi bilgiler kayıt altına alınmalıdır?
5. Kendi kararlarınızda gözlem, varsayım ve tercihi nasıl ayırabilirsiniz?
6. Bir mimari kararın yeniden değerlendirilmesini tetikleyecek kanıt ne olabilir?

## Chapter Summary

Mühendislik zihniyeti, koddan önce problem ve başarı tanımıyla başlar. Sistem düşüncesi, bir değişikliğin bileşenler ve kullanıcı sonucu üzerindeki etkilerini görünür kılar. Gereksinim analizi belirsiz beklentileri doğrulanabilir koşullara dönüştürür. Kalite nitelikleri bağlama göre önceliklendirilir; basitlik, bakım yapılabilirlik ve ölçeklenebilirlik arasında kanıta dayalı ödünleşimler kurulur. Teknik borç ve mimari kararlar kaydedildiğinde ekip yalnızca ne yaptığını değil, neden yaptığını da korur.

## Key Takeaways

- Doğru çözüm, önce doğru tanımlanmış probleme ihtiyaç duyar.
- Sistem davranışı, bileşenlerin toplamından çok aralarındaki ilişkilerle oluşur.
- Ölçülemeyen bir kalite beklentisi güvenilir biçimde doğrulanamaz.
- Basitlik, belirsizlik altında öğrenme ve değişim maliyetini azaltır.
- Ölçeklenebilirlik gerçek yük, darboğaz ve maliyet verisiyle ele alınmalıdır.
- Teknik borç görünür, sahipli ve koşullu olduğunda yönetilebilir.
- İyi karar; bağlamı, alternatifleri, kanıtı ve sonuçlarıyla iletişim kurar.

## Further Reading

- NASA Systems Engineering Handbook'ın gereksinim ve sistem tasarımı bölümleri, yazılım dışındaki karmaşık sistemlerde de aynı düşünce disiplinini görmek için okunabilir.
- Google Engineering Practices, küçük değişiklik ve kod inceleme kararlarının günlük mühendislik kalitesine nasıl dönüştüğünü gösterir.
- Martin Fowler'ın teknik borç yazıları, borcun yalnızca kötü kod etiketi olarak kullanılmasını önleyen bir sınıflandırma sunar.
- IEEE SWEBOK Guide, yazılım mühendisliğinin kabul görmüş bilgi alanlarını daha geniş bir çerçevede incelemek için kullanılabilir.

## References

1. NASA. [NASA Systems Engineering Handbook, Revision 2](https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf). 2016.
2. NASA. [Fundamentals of Systems Engineering](https://www.nasa.gov/reference/2-0-fundamentals-of-systems-engineering/). Erişim: 17 Temmuz 2026.
3. NASA. [System Design Processes](https://www.nasa.gov/reference/4-0-system-design-processes/). Erişim: 17 Temmuz 2026.
4. Google. [The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html). Erişim: 17 Temmuz 2026.
5. Google. [Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html). Erişim: 17 Temmuz 2026.
6. Google. [What to Look for in a Code Review](https://google.github.io/eng-practices/review/reviewer/looking-for.html). Erişim: 17 Temmuz 2026.
7. Amazon Web Services. [Amazon Builders' Library — Frequently Asked Questions](https://aws.amazon.com/builders-library/faqs/). Erişim: 17 Temmuz 2026.
8. Fowler, Martin. [Technical Debt](https://martinfowler.com/bliki/TechnicalDebt.html). Erişim: 17 Temmuz 2026.
9. Fowler, Martin. [Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html). Erişim: 17 Temmuz 2026.
10. IEEE Computer Society. [Guide to the Software Engineering Body of Knowledge — SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering). Erişim: 17 Temmuz 2026.
