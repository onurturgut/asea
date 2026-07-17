---
title: "Academy Roadmap — ASEA Öğrenme Mimarisi"
volume: "00"
chapter: "04"
slug: "academy-roadmap"
difficulty: "Beginner"
estimated_time: "75-100 minutes"
status: "Draft"
prerequisites:
  - "Chapter 01 — Welcome to ASEA"
  - "Chapter 02 — Learning Philosophy"
  - "Chapter 03 — Engineering Mindset"
learning_objectives:
  - "ASEA'nın volume, chapter, laboratuvar, proje ve değerlendirme bileşenlerini açıklayabilmek"
  - "Öğrenme seviyelerini beklenen kanıt türleriyle eşleştirebilmek"
  - "Bir volume içindeki teori, uygulama ve geri bildirim akışını planlayabilmek"
  - "Capstone çalışmasının diğer projelerden farkını ve tamamlanma koşullarını açıklayabilmek"
  - "Kişisel ilerlemeyi akademinin uzun vadeli yol haritasıyla ilişkilendirebilmek"
---

# Academy Roadmap — ASEA Öğrenme Mimarisi

## Learning Objectives

Bu bölümün sonunda öğrenci:

- ASEA'nın içerik birimlerini ve her birimin öğrenme sürecindeki sorumluluğunu tanımlar.
- Başlangıç, uygulama ve ileri düzey çalışmaların yalnızca zorlukla değil, üretilen kanıtla ayrıldığını açıklar.
- Bir chapter'ı laboratuvar, quiz ve projeyle bir öğrenme döngüsüne dönüştürür.
- Biçimlendirici değerlendirme (formative assessment) ile sonuç değerlendirmesini (summative assessment) ayırır.
- Capstone projesi (capstone project) için gereksinim, tasarım, uygulama, doğrulama ve savunma çıktılarının neden birlikte gerektiğini gerekçelendirir.
- Kendi ilerleme planını repository'deki güncel içerik ve resmî yol haritasına göre oluşturur.

## Prerequisites

Bu bölüm, önceki üç chapter'ın tamamlandığını varsayar. Öğrenci ASEA'nın amacı, aktif öğrenme yaklaşımı ve mühendislik kararlarının nasıl ele alındığı konusunda temel kavrayışa sahip olmalıdır. Git veya belirli bir programlama dili bilgisi zorunlu değildir.

## Estimated Study Time

Okuma ve mimariyi inceleme için 75-100 dakika, bölüm sonu yol haritası görevi için 60-90 dakika ayrılmalıdır. Planın bir akranla gözden geçirilmesi 20-30 dakika sürebilir.

## Introduction

Bir akademi, sıralanmış makalelerden ibaret değildir. Öğrenme hedefleri, uygulamalar, geri bildirim, değerlendirme ve gerçek dünya çalışmaları birbirini destekleyen bir sistem oluşturmalıdır. ASEA'nın yol haritası, öğrenciye yalnızca "sonraki sayfayı" değil, hangi yeterliği neden geliştirdiğini ve bunu hangi kanıtla göstereceğini anlatır.

ASEA repository'si bu sistemin tek doğruluk kaynağıdır (single source of truth). İçerik durumu, klasör yapısı, standartlar ve üst düzey gelişim aşamaları burada izlenir. Bu chapter mevcut mimariyi açıklar; gelecekteki volume başlıklarını icat etmez veya henüz onaylanmamış teknolojileri programa eklemez. Yeni içerik, ilgili plan onaylandığında aynı sözleşmeye göre yerleştirilir.

Volume 00 — Academy Blueprint, akademinin kullanım kılavuzu ve mimari temelidir. Öğrenci sonraki teknik çalışmalara geçmeden önce nasıl öğreneceğini, mühendis gibi nasıl düşüneceğini, akademinin parçalarını ve günlük çalışma biçimini burada kavrar.

## Core Concepts

### Öğrenme mimarisinin birimleri

ASEA içeriği aşağıdaki sorumluluklara ayrılır:

- **Volume:** Ortak bir yeterlik alanına hizmet eden büyük öğrenme birimidir. Kendi amacı, ön koşulları ve tamamlanma ölçütleri vardır.
- **Chapter:** Kavramları, mühendislik bağlamını, örnekleri ve yönlendirilmiş uygulamayı bir araya getirir.
- **Laboratuvar (lab):** Öğrencinin bir davranışı gözlenebilir çıktı üreterek uyguladığı kontrollü çalışma ortamıdır.
- **Quiz:** Hatırlama ve kavramsal ayrımları hızlı geri bildirimle sınar; tek başına ustalık kanıtı değildir.
- **Proje (project):** Birden fazla yeterliği açık uçlu bir problemde bütünleştirir.
- **Diyagram, varlık ve referanslar:** Ana anlatımı destekleyen görsel, dosya ve kaynak kanıtlarını taşır.

Bu ayrım, aynı metni farklı klasörlerde tekrarlamak için değil, her öğrenme etkinliğine tek bir sorumluluk vermek içindir.

### Volume sözleşmesi

Her volume, içerik geliştikçe aynı mantıksal sözleşmeyi izler: bir giriş dosyası volume'un kapsamını açıklar; chapter'lar kavramsal ilerlemeyi kurar; laboratuvarlar uygulanabilir beceriyi sınar; quiz bilgiyi geri çağırır; diyagramlar ve referanslar kanıtı destekler. Volume'a ait dosyalar kendi dizininde, akademiler arası bütünleşik projeler ise repository'nin proje alanında tutulur.

Front Matter içindeki `difficulty`, içeriğin beklediği bağımsızlık ve problem belirsizliğini; `status` ise belgenin yayın olgunluğunu belirtir. `Draft`, `Review` ve `Stable` öğrencinin notu değildir. Bir `Draft` chapter tamamlanabilir, ancak içeriğin değişebileceği dikkate alınmalıdır.

### Öğrenme seviyeleri ve kanıt

ASEA'da seviye, yalnızca okunan metin miktarıyla yükselmez:

| Seviye | Beklenen davranış | Asgari kanıt |
| --- | --- | --- |
| Başlangıç (Beginner) | Kavramı kendi sözcükleriyle açıklar ve yönlendirilmiş adımları uygular. | Chapter notu, quiz sonucu ve çalışan yönlendirilmiş lab |
| Orta (Intermediate) | Bilgiyi yeni bir bağlama aktarır, seçenekleri karşılaştırır ve hataları araştırır. | Yarı yönlendirilmiş lab, karar kaydı ve test edilmiş proje parçası |
| İleri (Advanced) | Belirsiz problemi sınırlar, sistemi tasarlar, işletim risklerini yönetir ve kararını savunur. | Bağımsız proje veya capstone, inceleme kanıtı, teknik savunma |

Bu seviyeler etiket değil, performans beklentisidir. Öğrenci başlangıç içeriğini hızlı okuyabilir; fakat istenen çıktıyı üretemiyorsa bir sonraki seviyeye hazır değildir.

### Laboratuvar sistemi

Laboratuvarlar üç kademede ilerler:

1. **Yönlendirilmiş lab:** Ortam ve adımlar açıkça verilir; öğrenci temel mekanizmayı gözlemler.
2. **Yarı yönlendirilmiş lab:** Hedef ve kısıtlar verilir, çözüm adımları öğrenciye bırakılır.
3. **Bağımsız lab:** Belirti veya gereksinim verilir; tanılama, tasarım ve doğrulama öğrenci tarafından yapılır.

Her lab; amaç, ön koşul, başlangıç durumu, kısıt, teslim çıktısı, doğrulama komutu veya yöntemi ve temizlik adımı içermelidir. Başarılı olmak yalnızca sonucun ekranda görünmesi değildir; öğrenci ne yaptığını, neden çalıştığını ve hangi durumda bozulacağını açıklayabilmelidir.

### Proje sistemi

Projeler bilgiyi birleştirir. Kapsamlı bir proje kaydı en azından problem tanımı, gereksinimler, teslim ölçütleri, tasarım kararları, uygulama, testler, kullanım belgesi ve geriye dönük değerlendirme (retrospective) içerir. Proje büyüklüğü arttıkça sürümleme, iş bölümü, güvenlik ve işletim kanıtı da genişler.

Hazır bir öğreticiyi aynen yeniden üretmek proje sayılmaz; çünkü önemli kararlar öğrenci tarafından verilmemiştir. Proje, en az bir belirsizliği çözmeyi ve en az iki makul seçenek arasında gerekçeli seçim yapmayı gerektirir.

### Değerlendirme sistemi

ASEA değerlendirmesi dört kanıt katmanını birlikte kullanır:

- **Bilgi kontrolü:** Quiz ve aktif hatırlama soruları temel kavramları yoklar.
- **Uygulama kontrolü:** Otomatik test veya açık doğrulama adımı, çıktının beklenen davranışını sınar.
- **Mühendislik incelemesi:** Rubrik; gerekçe, okunabilirlik, test, dokümantasyon ve ödünleşimleri değerlendirir.
- **Yansıtma:** Öğrenci başarısız denemeleri, geri bildirimi ve sonraki iyileştirmeyi kaydeder.

Otomatik değerlendirme (autograding) hızlı geri bildirim sağlar, fakat tasarım gerekçesini tek başına ölçemez. Bu nedenle puan, inceleme ve açıklama birbirinin yerine geçmez; birbirini tamamlar.

### Capstone yaklaşımı

Capstone, akademide geliştirilen yeterliklerin gerçekçi ve açık uçlu bir problemde bütünleştirildiği sonuç çalışmasıdır. Tek bir büyük kod deposu olmak zorunda değildir; ancak aşağıdaki kanıtları birlikte sunmalıdır:

1. Doğrulanmış problem ve paydaş ihtiyacı.
2. Ölçülebilir işlevsel ve kalite gereksinimleri.
3. Alternatifleri ve ödünleşimleri içeren tasarım kararları.
4. Çalışan, sürümlenmiş ve test edilmiş uygulama.
5. Güvenlik, gözlemlenebilirlik ve işletim planı.
6. Kullanıcı ve geliştirici dokümantasyonu.
7. Bağımsız inceleme geri bildirimi ve yapılan düzeltmeler.
8. Sonuç, sınırlar ve öğrenilen dersleri içeren teknik savunma.

Capstone'a geçiş takvimle değil, önceki proje ve lab kanıtlarıyla belirlenir.

### Uzun vadeli ilerleyiş

Repository'nin üst düzey `ROADMAP.md` dosyası akademinin kurumsal gelişimini dört aşamada tanımlar: temel altyapı, müfredat tasarımı, öğrenme platformu ve topluluk gelişimi. Bu aşamalar içerik öğrenme seviyeleriyle karıştırılmamalıdır. Biri ASEA ürününün gelişimini, diğeri öğrencinin yeterlik gelişimini izler.

Yol haritası niyet ve sıralama sunar; tamamlanmış çalışma kanıtı değildir. Geçerli durum dosyalar, inceleme sonuçları ve ilgili teslim ölçütleri üzerinden doğrulanır.

## Engineering Perspective

ASEA'nın kendisi bir öğrenme sistemi olarak ele alınabilir:

- **Girdiler:** Öğrencinin ön bilgisi, zamanı, hedefi ve erişebildiği araçlar.
- **İşleme:** Chapter okuması, aktif hatırlama, laboratuvar, proje ve inceleme.
- **Çıktılar:** Açıklama, çalışan yazılım, test, karar kaydı ve yansıtma notu.
- **Geri besleme:** Quiz sonucu, otomatik test, akran incelemesi ve öz değerlendirme.
- **Kalite kapıları:** Ön koşullar, rubrik eşiği ve ölçülebilir tamamlanma tanımı.

Bir öğrencinin quiz puanı yüksek fakat bağımsız laboratuvarı tamamlayamıyorsa sistem, hatırlama ile uygulama arasında boşluk olduğunu gösterir. Çözüm daha fazla chapter tüketmek değil; daha küçük uygulamalar, hata günlüğü ve hedefli tekrar eklemektir. Benzer biçimde, proje çalışıyor fakat kararlar belgelenmemişse ürün çıktısı vardır, mühendislik kanıtı eksiktir.

Bu geri besleme yaklaşımı akademiyi sabit bir takvimden ayırır. Öğrenci gerektiğinde döngüyü tekrarlar; kanıt yeterli olduğunda ilerler.

## Real World Examples

### ACM ve IEEE: capstone ile bütünleştirme

ACM/IEEE Software Engineering 2014 müfredat rehberi, yazılım mühendisliği kavramlarının program boyunca tekrar eden temalar olarak işlenmesini ve capstone öğrenci projesini temel bir unsur olarak görür. Bu örnek, ASEA'da mühendislik zihniyetinin tek chapter'a kapatılmamasını ve sonuç projesinde farklı yeterliklerin birleştirilmesini destekler.

### GitHub Classroom: otomatik ve insani geri bildirim

GitHub Classroom resmî belgeleri, ödev şablonları, her gönderimde çalışabilen otomatik testler ve pull request üzerinden geri bildirim olanaklarını açıklar. Otomatik test hızlı davranış kontrolü sağlarken geri bildirim incelemesi öğrencinin yaklaşımını tartışabilir. Bu, ASEA'nın çok katmanlı değerlendirme modeline doğrulanabilir bir sektör aracıdır; aracın kullanımı mimarinin zorunlu koşulu değildir.

### GitHub Skills: repository içinde etkin öğrenme

GitHub Skills dersleri, öğrenme hedefiyle planlanan ve repository içindeki eylemlerle ilerleyen etkileşimli çalışmalar sunar. Öğrencinin yalnızca belge okumak yerine gerçek sürüm kontrolü davranışları üretmesi, laboratuvarın gözlenebilir çıktı ilkesine örnektir.

## Common Mistakes

- **Volume'u okunacak sayfa listesi sanmak:** Kanıt üretilmeden sıradaki dosyaya geçmek ilerleme görünümü yaratır, yeterlik yaratmaz.
- **Zorluk etiketini kimlik olarak görmek:** `Advanced` etiketi, temel uygulamaları atlama izni değildir.
- **Lab adımlarını anlamadan kopyalamak:** Çalışan sonuç, mekanizma açıklanamıyorsa aktarılabilir beceri kanıtlamaz.
- **Quiz puanını ustalık saymak:** Hatırlama, açık uçlu bir sistemi tasarlama ve hata ayıklama yeterliğini ölçmez.
- **Projeyi gereksiz büyütmek:** Çok özellik, daha iyi öğrenme anlamına gelmez; doğrulanabilir kapsam daha değerlidir.
- **Capstone'a erken başlamak:** Eksik temel pratikler büyük projede birikerek geri bildirim döngüsünü yavaşlatır.
- **Araçla mimariyi karıştırmak:** GitHub Classroom gibi bir araç değişebilir; öğrenme hedefi, çıktı ve rubrik kalıcı sözleşmedir.
- **Yol haritasını kesin tarih taahhüdü saymak:** Öncelikler kalite kanıtı ve repository durumu ile yeniden değerlendirilebilir.

## Best Practices

1. Her çalışma oturumuna chapter'ın öğrenme hedeflerinden biriyle başlayın.
2. Bir volume'a başlamadan önce ön koşulları küçük bir tanılama göreviyle sınayın.
3. Chapter sonrasında aynı kavramı açıklama, uygulama ve yansıtma çıktılarıyla pekiştirin.
4. Laboratuvarda başlangıç ve sonuç durumunu; kullanılan komutları ve hataları kaydedin.
5. Proje kapsamını teslim ölçütleriyle dondurun; yeni fikirleri ayrı bir sonraki sürüm listesine alın.
6. Otomatik test sonucunu rubrik ve insan incelemesiyle tamamlayın.
7. Başarısız denemeleri silmeyin; neyin neden değiştiğini öğrenme günlüğünde koruyun.
8. Bir sonraki seviyeye takvim dolduğu için değil, gereken kanıt üretildiği için geçin.
9. İçerik durumu için repository'yi ve resmî yol haritasını esas alın.
10. Capstone'da çalışan ürün kadar gerekçe, test, işletim ve savunma kalitesini de değerlendirin.

## Hands-on Exercise

### Görev: Kişisel ASEA ilerleme haritası

Tek bir Markdown dosyasında dört haftalık örnek bir öğrenme planı hazırlayın. Plan, Volume 00'daki beş chapter'ı ve en az bir örnek laboratuvar, quiz ve proje döngüsünü kapsamalıdır. Henüz mevcut olmayan içeriği tamamlanmış gibi göstermeyin; bu tür öğeleri "planlandığında" koşuluyla belirtin.

Dosyada şunlar bulunmalıdır:

1. Her chapter için hedeflenen yeterlik ve üretilecek kanıt.
2. Başlangıç, orta ve ileri seviyeler arasındaki geçiş için birer ölçülebilir kapı.
3. Bir laboratuvarın amaç, teslim çıktısı ve doğrulama yöntemi.
4. Bir projenin kapsamı, üç kabul ölçütü ve inceleme rubriği.
5. Quiz, otomatik kontrol, insan incelemesi ve yansıtmanın plandaki yeri.
6. En az üç risk ve her risk için uygulanabilir önlem.
7. Haftalık gözden geçirme sonucuna göre planın nasıl değişeceğine ilişkin iki kural.

### Değerlendirme ölçütleri

| Ölçüt | Puan |
| --- | ---: |
| Hedef ve kanıt eşleşmesi | 5 |
| Seviye geçişlerinin ölçülebilirliği | 4 |
| Lab ve proje sözleşmelerinin açıklığı | 5 |
| Değerlendirme katmanlarının dengesi | 4 |
| Risk ve uyarlama planı | 4 |
| Repository gerçekliğiyle tutarlılık | 3 |
| **Toplam** | **25** |

Başarı eşiği 18/25'tir. Her öğrenme hedefinin karşısında gözlenebilir bir kanıt yoksa plan, toplam puandan bağımsız olarak revizyona döner.

## Reflection Questions

1. Bir chapter'ı "okudum" demekle yeterliği kanıtlamak arasındaki fark nedir?
2. Hangi beceriler quiz ile, hangileri proje incelemesiyle daha doğru ölçülür?
3. Bir laboratuvarın fazla yönlendirilmiş olduğunu nasıl anlarsınız?
4. Capstone projesinin kapsamı hangi kanıta göre küçültülmeli veya genişletilmelidir?
5. Öğrenci ilerlemesi ile akademi ürün yol haritası neden ayrı izlenmelidir?
6. Otomatik değerlendirme hangi önemli mühendislik niteliklerini kaçırabilir?

## Chapter Summary

ASEA, volume'lardan chapter, laboratuvar, quiz, proje ve capstone'a uzanan kanıt temelli bir öğrenme mimarisidir. Seviyeler, tüketilen içerikten çok öğrencinin bağımsızlık derecesi ve ürettiği çıktılarla ayrılır. Değerlendirme; bilgi kontrolünü, çalışan davranışı, mühendislik incelemesini ve yansıtmayı birleştirir. Volume 00 bu sistemin temelini kurar; repository'deki resmî yol haritası ise akademinin altyapıdan topluluk gelişimine uzanan kurumsal ilerleyişini gösterir.

## Key Takeaways

- Her öğrenme biriminin ayrı bir sorumluluğu ve doğrulanabilir çıktısı vardır.
- Volume, teori ve uygulamayı ortak yeterlik hedefinde birleştirir.
- Seviye ilerlemesi süreye değil, kanıta dayanır.
- Otomatik test hızlı geri bildirimdir; tasarım kalitesinin tamamı değildir.
- Proje, birden fazla yeterliği gerçekçi belirsizlik altında bütünleştirir.
- Capstone; ürün, süreç, karar, doğrulama ve savunmayı birlikte değerlendirir.
- Repository durumu ile uzun vadeli yol haritası farklı fakat ilişkili bilgi kaynaklarıdır.

## Further Reading

- Repository kökündeki [ROADMAP.md](../../../ROADMAP.md), ASEA'nın onaylı uzun vadeli gelişim aşamalarını gösterir.
- [ASEA Chapter Standard v1.0](../../standards/chapter-standard-v1.md), bütün chapter'ların içerik sözleşmesini tanımlar.
- ACM/IEEE Software Engineering 2014 rehberinin müfredat ilkeleri ve capstone bölümleri, program düzeyinde bütünleştirme yaklaşımını açıklar.
- GitHub Classroom belgeleri, otomatik test ve inceleme geri bildiriminin eğitim görevlerine nasıl bağlandığını gösterir.

## References

1. ACM Joint Task Force on Computing Curricula and IEEE Computer Society. [Software Engineering 2014: Curriculum Guidelines for Undergraduate Degree Programs in Software Engineering](https://www.acm.org/binaries/content/assets/education/se2014.pdf). 2015.
2. GitHub Docs. [About GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/get-started-with-github-classroom/about-github-classroom). Erişim: 17 Temmuz 2026.
3. GitHub Docs. [Use Autograding](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding). Erişim: 17 Temmuz 2026.
4. GitHub Skills. [GitHub Skills Quickstart Guide](https://skills.github.com/quickstart). Erişim: 17 Temmuz 2026.
5. ASEA. [ASEA Roadmap](../../../ROADMAP.md). Erişim: 17 Temmuz 2026.
6. ASEA. [ASEA Chapter Standard v1.0](../../standards/chapter-standard-v1.md). Erişim: 17 Temmuz 2026.
