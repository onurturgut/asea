---
title: "Welcome to ASEA"
volume: "00"
chapter: "01"
slug: "welcome-to-asea"
difficulty: "Beginner"
estimated_time: "45-60 minutes"
status: "Draft"
prerequisites: []
learning_objectives:
  - "ASEA'nın amacını ve öğrenme modelini açıklayabilmek"
  - "Programlama ile yazılım mühendisliği arasındaki farkı tanımlayabilmek"
  - "Bir problemi mühendislik bakış açısıyla inceleyebilmek"
  - "Sürekli öğrenmenin yazılım mühendisliğindeki yerini açıklayabilmek"
  - "Gerçek dünya yazılım ekiplerinin temel beklentilerini sıralayabilmek"
---

# Welcome to ASEA

## Learning Objectives

Bu bölümü tamamladığınızda:

- ASEA'nın neden yalnızca kod yazmayı öğreten bir program olmadığını açıklayabileceksiniz.
- Programlama (programming) ile yazılım mühendisliği (software engineering) arasındaki temel farkları zaman, ekip, kalite ve sorumluluk boyutlarında karşılaştırabileceksiniz.
- Belirsiz bir problemi gereksinimler, kısıtlar, riskler ve ödünleşimler üzerinden inceleyebileceksiniz.
- Sürekli öğrenme (continuous learning) için kanıta ve geri bildirime dayalı kişisel bir çalışma döngüsü kurabileceksiniz.
- Gerçek bir yazılım ekibinde kodun yanı sıra beklenen iletişim, test, inceleme, dokümantasyon ve sahiplik davranışlarını tanımlayabileceksiniz.

## Prerequisites

Bu bölüm için önceden programlama deneyimi gerekmez. Bir metni dikkatle okuyabilmek, kendi öğrenme alışkanlıklarınızı değerlendirmeye istekli olmak ve bölüm sonundaki yazılı çalışmayı tamamlamak yeterlidir.

Bir metin düzenleyici kullanabilmeniz önerilir. Git veya herhangi bir programlama dili bilgisi bu bölümün ön koşulu değildir.

## Estimated Study Time

Bu bölüm için önerilen çalışma süresi **45-60 dakikadır**:

- Okuma ve not alma: 25-30 dakika
- Gerçek dünya örneklerini inceleme: 10 dakika
- Uygulama çalışması: 15-20 dakika

Süre bir performans hedefi değildir. Kavramları kendi cümlelerinizle açıklayabiliyor olmanız, bölümü ne kadar hızlı bitirdiğinizden daha önemlidir.

## Introduction

ASEA, Aisurix Software Engineering Academy'nin kısaltmasıdır. Akademinin amacı, öğrenenleri yalnızca çalışan kod üretebilen kişiler olarak değil; problemleri anlayan, teknik kararlarını gerekçelendiren, başkalarıyla iş birliği yapan ve oluşturduğu sistemin sonuçları için sorumluluk alan yazılım mühendisleri olarak yetiştirmektir.

Kod yazmak bu yolculuğun vazgeçilmez bir parçasıdır, ancak tek başına yeterli değildir. Gerçek bir yazılım sistemi kullanıcı beklentileri, iş hedefleri, güvenlik gereksinimleri, zaman ve bütçe kısıtları, ekip çalışması, değişen teknolojiler ve üretim ortamındaki beklenmeyen koşullar içinde yaşar. Bu nedenle yazılım mühendisliği, yalnızca “Bu kod çalışıyor mu?” sorusunu değil, aşağıdaki soruları da sorar:

- Doğru problemi mi çözüyoruz?
- Çözüm anlaşılır, test edilebilir ve sürdürülebilir mi?
- Sistem değiştiğinde mevcut kullanıcıları koruyabilecek miyiz?
- Bir hata oluştuğunda bunu fark edip güvenli biçimde düzeltebilir miyiz?
- Kararlarımızı ekip arkadaşlarımıza ve paydaşlara açıklayabiliyor muyuz?

ASEA'da öğrenme; okumak, uygulamak, geri bildirim almak, hataları incelemek ve daha iyi bir çözüm üretmekten oluşan tekrarlı bir süreçtir. Amaç kusursuz başlamak değil, her döngüde daha bilinçli karar verebilmektir.

## Core Concepts

### Programlama ve yazılım mühendisliği

Programlama, bir bilgisayara belirli bir görevi yaptıracak talimatları tasarlama ve kodlama becerisidir. Yazılım mühendisliği ise yazılımın gereksinimlerden kullanımdan kaldırılmasına kadar tüm yaşam döngüsünü (software lifecycle) sistematik biçimde ele alır. Gereksinim analizi (requirements analysis), tasarım (design), uygulama, test, dağıtım, işletim, bakım ve ekip koordinasyonu bu disiplinin parçalarıdır.

| Boyut | Programlama odağı | Yazılım mühendisliği odağı |
| --- | --- | --- |
| Temel soru | Kod beklenen çıktıyı üretiyor mu? | Sistem doğru ihtiyacı güvenilir biçimde karşılıyor mu? |
| Zaman | Görevin veya uygulamanın tamamlanması | Sistemin aylar ve yıllar boyunca değişmesi |
| Ölçek | Çoğu zaman bireysel çözüm | Birden çok kişinin geliştirdiği ve işlettiği sistem |
| Kalite | Doğru çıktı ve anlaşılır kod | Güvenilirlik, güvenlik, performans, bakım ve kullanılabilirlik |
| Değişim | Yeni kod yazarak ilerleme | Mevcut davranışı koruyarak güvenli değişiklik yapma |
| Sorumluluk | Kodun çalışması | Kullanıcı, ekip, işletim ve uzun vadeli sonuçlar |

ACM'nin yazılım mühendisliği müfredatı, disiplini yüksek kaliteli ve güvenilir programların sistematik, kontrollü ve verimli biçimde oluşturulması olarak ele alır. Güncel ACM/IEEE-CS müfredat çalışması da programlama ile yazılım mühendisliği arasındaki ayrımı özellikle **insanlar** ve **zaman** üzerinden açıklar: gerçek sistemler ekipler tarafından geliştirilir ve birçok sürüm boyunca yaşamaya devam eder.

### Mühendislik düşüncesi

Mühendislik düşüncesi (engineering mindset), ilk akla gelen çözümü hemen uygulamak yerine problemi ve karar koşullarını görünür hâle getirmektir. Bu yaklaşım beş temel alışkanlığa dayanır:

1. **Problemi tanımla:** Kullanıcının ihtiyacını, mevcut durumu ve başarı ölçütünü açıkla.
2. **Kısıtları belirle:** Zaman, bütçe, güvenlik, performans, mevzuat ve ekip kapasitesi gibi sınırları kaydet.
3. **Seçenek üret:** Tek bir çözüme bağlanmadan önce uygulanabilir alternatifler oluştur.
4. **Ödünleşimleri değerlendir:** Ödünleşim (trade-off), bir avantaj kazanırken başka bir maliyeti kabul etmektir. Daha hızlı geliştirme, daha yüksek işletim maliyeti veya daha düşük esneklik yaratabilir.
5. **Sonucu doğrula:** Testler, ölçümler ve kullanıcı geri bildirimiyle varsayımların doğru olup olmadığını kontrol et.

Mühendislik kararı, “Ben böyle tercih ettim” ifadesinden daha fazlasıdır. Kararın bağlamı, seçenekleri, kanıtı, riski ve beklenen sonucu açıklanabilmelidir.

### Kalite bir son kontrol değildir

Yazılım kalitesi yalnızca proje sonunda yapılan testlerle eklenmez. Gereksinimlerin açık yazılması, küçük ve incelenebilir değişiklikler yapılması, otomatik kontroller kullanılması, kararların belgelenmesi ve üretim davranışının izlenmesi kaliteyi sürecin tamamına yayar.

Bir özelliğin çalışması önemlidir; fakat anlaşılmayan, test edilmeyen veya güvenli biçimde değiştirilemeyen bir özellik gelecekte ekibe maliyet oluşturur. ASEA'da “bitti” sözcüğü yalnızca kodun yazıldığını değil, çözümün doğrulandığını ve başkasının devam ettirebileceği kadar anlaşılır olduğunu ifade eder.

### Sürekli öğrenme

Teknolojiler, araçlar ve kullanıcı beklentileri değişir. Bu yüzden yazılım mühendisliği eğitimi sabit bir araç listesini ezberlemek üzerine kurulamaz. Sürekli öğrenme; yeni bilgiyi seçme, deneme, sonucu gözlemleme ve bilgiyi kalıcı bir beceriye dönüştürme disiplinidir.

ASEA'nın önerdiği geri bildirim döngüsü (feedback loop) şöyledir:

1. Öğrenme hedefini ölçülebilir biçimde yaz.
2. Konuyu güvenilir bir kaynaktan incele.
3. Küçük bir uygulama üret.
4. Test, inceleme veya kullanıcı geri bildirimi al.
5. Hatanın nedenini ve kararın sonucunu değerlendir.
6. Çözümü ve açıklamasını iyileştir.
7. Öğrendiklerini kısa bir kayıtla kalıcılaştır.

Bu döngüde hata başarısızlık etiketi değil, varsayım ile gerçek arasındaki farkı gösteren veridir. Aynı hatayı nedenini incelemeden tekrarlamak ise öğrenme fırsatını kaçırmaktır.

## Engineering Perspective

Bir mühendis, çözümü yalnızca kendi bilgisayarında çalışan bir program olarak görmez. Çözümün kullanıcı, ekip ve üretim sistemi içindeki bütün etkilerini değerlendirir.

Örneğin bir kullanıcı kayıt formu geliştirdiğinizi düşünün. Programlama açısından form verisini alıp veritabanına yazmak yeterli görünebilir. Mühendislik açısından ise şu sorular da gereklidir:

- Hangi alanlar zorunlu ve bu gereksinimi kim belirledi?
- Aynı e-posta adresiyle iki hesap açılabilir mi?
- Parola nasıl korunacak?
- Geçersiz veya kötü niyetli veri nasıl ele alınacak?
- Veritabanı geçici olarak erişilemezse kullanıcı ne görecek?
- Davranış hangi testlerle doğrulanacak?
- Kişisel veriler ne kadar süre saklanacak?
- Değişiklik üretimde sorun çıkarırsa nasıl geri alınacak?

Bu sorular kod miktarını artırmak için değil, görünmeyen riskleri erken bulmak için sorulur. Mühendislik bakış açısı çözümü karmaşıklaştırmayı değil, gerekli karmaşıklığı bilinçli biçimde yönetmeyi amaçlar.

ASEA boyunca sizden yalnızca sonuç göstermeniz beklenmeyecek. Neden o çözümü seçtiğinizi, hangi alternatifleri değerlendirdiğinizi, hangi varsayımları yaptığınızı ve çözümünüzü nasıl doğruladığınızı da açıklamanız istenecek. Bu açıklama, teknik iletişim (technical communication) becerisinin temelidir.

## Real World Examples

### Google: üretim güvenilirliği tüm yaşam döngüsünün parçasıdır

Google'ın Site Güvenilirliği Mühendisliği (Site Reliability Engineering, SRE) kaynakları; büyük sistemleri oluşturma, dağıtma, izleme ve bakımını tek bir yaşam döngüsünün parçaları olarak ele alır. Google SRE yaklaşımında güvenilirlik yalnızca operasyon ekibine bırakılan son aşama değildir; yazılım geliştirme kararlarının doğrudan bir kalite hedefidir.

Bu örnek, “Kod çalışıyor” ile “Hizmet gerçek koşullarda güvenilir biçimde çalışıyor” arasındaki farkı gösterir. ASEA projelerinde de gözlemlenebilirlik, hata davranışı ve bakım maliyeti tasarımın parçası olarak değerlendirilir.

### GitLab: kod, inceleme ve ortak sahiplik yoluyla gelişir

GitLab'ın yayımladığı mühendislik el kitabında kod incelemesi (code review) her birleştirme isteği için zorunlu bir uygulama olarak tanımlanır. İnceleme yalnızca hata aramak değildir; bilginin ekip içinde paylaşılmasını, kararların sorgulanmasını ve kod tabanının ortak standartlarla korunmasını sağlar.

Bu örnek, profesyonel yazılım geliştirmenin bireysel hızdan ibaret olmadığını gösterir. Anlaşılır değişiklik hazırlamak, bağlam sağlamak, geri bildirime yanıt vermek ve başkasının çalışmasını dikkatle incelemek mühendislik işinin parçasıdır.

### Açık kaynak: çalışma ürünü kadar süreç de görünürdür

Açık kaynak projelerinde değişiklik geçmişi, hata kayıtları, tartışmalar, katkı kuralları ve sürüm notları çoğunlukla herkese açıktır. Bu görünürlük, yalnızca son kodu değil karar sürecini de değerlendirilebilir hâle getirir. ASEA'nın repository tabanlı çalışma modeli bu nedenle önemlidir: öğrenme çıktısı, tekrarlanabilir ve incelenebilir bir mühendislik kaydına dönüşür.

## Common Mistakes

### Yalnızca sözdizimine odaklanmak

Bir programlama dilinin sözdizimini bilmek değerlidir, ancak hangi problemin çözüldüğünü veya çözümün nasıl doğrulanacağını açıklayamamak önemli bir eksikliktir. Araç bilgisi, problem çözmenin yerine geçmez.

### Çalışan ilk çözümü son çözüm saymak

İlk çalışan sürüm, varsayımları test etmek için yararlıdır. Fakat okunabilirlik, hata durumları, testler, güvenlik ve bakım değerlendirilmeden tamamlanmış kabul edilmemelidir.

### Anlamadan kopyalamak

Bir örneği, forum yanıtını veya yapay zekâ çıktısını açıklayamadan kullanmak öğrenme yanılsaması yaratır. Kullandığınız her çözümün girdilerini, çıktısını, hata durumlarını ve neden uygun olduğunu açıklayabilmelisiniz.

### Geri bildirimi kişisel eleştiri olarak görmek

Kod incelemesindeki yorumlar kişinin değerini değil, çalışma ürününü geliştirmeyi hedefler. Savunmaya geçmek yerine yorumun hangi riski veya standardı işaret ettiğini anlamaya çalışın.

### Dokümantasyonu sona bırakmak

Kararların bağlamı zamanla unutulur. Dokümantasyonu iş bittikten sonra hatırlamaya çalışmak yerine önemli kararları geliştirme sırasında kaydedin.

### Her yeni aracı öğrenmeye çalışmak

Sürekli öğrenme, her eğilimi takip etmek değildir. Hedefinizle ilişkili temel kavramları seçmek, uygulamak ve derinleştirmek daha sürdürülebilir bir yaklaşımdır.

## Best Practices

- Her çalışmaya açık ve ölçülebilir bir hedefle başlayın.
- Problemi kendi cümlelerinizle yazmadan çözüm üretmeye geçmeyin.
- Büyük işleri küçük, doğrulanabilir ve incelenebilir adımlara ayırın.
- Varsayımlarınızı ve kısıtlarınızı görünür hâle getirin.
- Çözümünüzü yalnızca başarılı senaryoyla değil, hata ve sınır durumlarıyla da değerlendirin.
- Geri bildirimi erken alın; geç gelen geri bildirim daha pahalı değişikliklere yol açar.
- Kaynağını doğrulayamadığınız teknik iddiaları kesin bilgi gibi kullanmayın.
- Araçları amaç değil, problem çözmeyi destekleyen seçimler olarak görün.
- Öğrenme günlüğünde ne yaptığınızı değil, hangi kararı neden değiştirdiğinizi kaydedin.
- Bir işi tamamlamadan önce başka birinin onu anlayıp sürdürebileceğini kontrol edin.

## Hands-on Exercise

### Görev: ASEA başlangıç mühendisliği sözleşmesi

Bir Markdown dosyasında aşağıdaki çalışmayı tamamlayın. Çalışmanız **300-500 kelime** arasında olmalıdır.

1. Çözmek istediğiniz basit bir yazılım problemi seçin. Örnek: kişisel görev takibi, çalışma süresi kaydı veya kitap listesi yönetimi.
2. Problemi en fazla üç cümleyle tanımlayın.
3. Çözümün başarılı sayılması için üç ölçülebilir ölçüt yazın.
4. En az üç kısıt veya risk belirleyin.
5. İki farklı çözüm yaklaşımı önerin.
6. Yaklaşımları en az iki ödünleşim üzerinden karşılaştırın.
7. Bir yaklaşımı seçin ve seçiminizi kanıt veya açık bir varsayımla gerekçelendirin.
8. Çözümü nasıl doğrulayacağınızı anlatan en az dört kontrol yazın; bunlardan en az biri hata durumunu kapsamalıdır.
9. Kendi çalışma biçiminiz için üç maddelik bir sürekli öğrenme taahhüdü oluşturun.

### Tamamlanma ölçütleri

Çalışma şu koşulların tamamını karşılamalıdır:

- Problem, kullanıcı veya ihtiyaç bağlamı içeriyor.
- Başarı ölçütleri gözlemlenebilir veya ölçülebilir.
- En az iki alternatif çözüm karşılaştırılıyor.
- Seçilen yaklaşımın avantajı kadar maliyeti de belirtiliyor.
- Doğrulama planında başarılı, hatalı ve sınır durumlarından en az biri yer alıyor.
- Sürekli öğrenme taahhütleri uygulanabilir sıklık veya davranış içeriyor.

## Reflection Questions

1. Daha önce “çalışıyor” diye tamamladığınız bir çözümde hangi mühendislik sorularını atladınız?
2. Bir programın tek kişi tarafından ve kısa süre kullanılacak olması, hangi mühendislik beklentilerini değiştirir? Hangilerini değiştirmez?
3. Hız ile kalite arasında seçim yapmak zorunda kaldığınızda hangi bilgileri toplarsınız?
4. Teknik bir geri bildirime katılmadığınızda tartışmayı kişisel olmaktan nasıl çıkarabilirsiniz?
5. Şu anki öğrenme alışkanlıklarınızın hangisi gerçek beceri üretiyor, hangisi yalnızca ilerleme hissi veriyor?
6. Bir yapay zekâ aracından aldığınız çözümün sorumluluğu kimdedir? Bu çözümü kullanmadan önce neyi doğrulamalısınız?

## Chapter Summary

ASEA'nın amacı yalnızca programlama öğretmek değil, yazılımın tüm yaşam döngüsünde bilinçli karar verebilen mühendisler yetiştirmektir. Programlama çalışan talimatlar üretmeye odaklanırken yazılım mühendisliği; gereksinimleri, ekip çalışmasını, kaliteyi, değişimi, işletimi ve uzun vadeli sorumluluğu birlikte ele alır.

Mühendislik düşüncesi problemi tanımlamayı, kısıtları görünür kılmayı, alternatifler üretmeyi, ödünleşimleri değerlendirmeyi ve sonucu kanıtla doğrulamayı gerektirir. Sürekli öğrenme ise okumayı uygulama, geri bildirim, değerlendirme ve iyileştirme döngüsüne bağlar. Gerçek dünya ekipleri çalışan kodun yanında iletişim, inceleme, test, dokümantasyon ve sahiplik bekler.

Bu ilk bölüm, ASEA boyunca kullanılacak temel çalışma anlayışını kurar: küçük ama doğrulanabilir adımlar atmak, kararları açıklamak, hatalardan sistematik biçimde öğrenmek ve oluşturulan yazılımın sonuçları için sorumluluk almak.

## Key Takeaways

- Kod yazmak yazılım mühendisliğinin merkezindedir, ancak disiplinin tamamı değildir.
- Yazılım mühendisliği insanlar, zaman, değişim ve kalite sorunlarını birlikte yönetir.
- Mühendislik kararları bağlam, alternatif, ödünleşim ve kanıt içermelidir.
- Kalite proje sonunda eklenen bir kontrol değil, geliştirme sürecinin tamamına yayılan bir davranıştır.
- Sürekli öğrenme, bilgi tüketmekten çok uygulama ve geri bildirim döngüsü kurmaktır.
- Profesyonel ekipler teknik becerinin yanında iletişim, iş birliği, inceleme ve sahiplik bekler.
- Bir aracın veya üretilen çıktının doğruluğundan onu kullanan mühendis sorumludur.

## Further Reading

- ACM CCECC, **Software Engineering**: Yazılım mühendisliğinin yaşam döngüsü, kalite ve disiplin kapsamına giriş.
- ACM/IEEE-CS, **Computer Science Curricula 2023 — Software Engineering**: Programlama ile yazılım mühendisliği arasındaki insan ve zaman boyutları.
- IEEE Computer Society, **Guide to the Software Engineering Body of Knowledge (SWEBOK)**: Yazılım mühendisliğinin kabul görmüş bilgi alanları.
- Google, **Site Reliability Engineering**: Güvenilir üretim sistemlerinde yazılım yaşam döngüsü ve mühendislik uygulamaları.
- GitLab, **Code Review Guidelines**: Gerçek bir mühendislik organizasyonunda kod inceleme sorumlulukları.

## References

1. ACM Committee for Computing Education in Community Colleges. [Software Engineering](https://ccecc.acm.org/guidance/software-engineering). Erişim: 17 Temmuz 2026.
2. ACM Committee for Computing Education in Community Colleges. [Introduction to Software Engineering](https://ccecc.acm.org/guidance/software-engineering/courses/introduction-to-software-engineering). Erişim: 17 Temmuz 2026.
3. ACM/IEEE-CS/AAAI Joint Task Force. [Computer Science Curricula 2023 — Software Engineering Knowledge Area](https://csed.acm.org/wp-content/uploads/2023/09/SE-Version-Gamma.pdf). Erişim: 17 Temmuz 2026.
4. IEEE Standards Association. [Software Engineering Body of Knowledge — P19759](https://standards.ieee.org/ieee/19759/12607/). Erişim: 17 Temmuz 2026.
5. Google. [Site Reliability Engineering Resources](https://sre.google/resources/). Erişim: 17 Temmuz 2026.
6. GitLab. [Code Review Guidelines](https://handbook.gitlab.com/handbook/engineering/workflow/code-review/). Erişim: 17 Temmuz 2026.
