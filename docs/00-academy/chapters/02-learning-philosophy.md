---
title: "Learning Philosophy — Öğrenmeyi Öğrenmek"
volume: "00"
chapter: "02"
slug: "learning-philosophy"
difficulty: "Beginner"
estimated_time: "90-120 minutes"
status: "Draft"
prerequisites:
  - "Volume 00 / Chapter 01 — Welcome to ASEA"
learning_objectives:
  - "Aktif öğrenme ile pasif öğrenme arasındaki farkı açıklayabilmek"
  - "Bilmek, anlamak, uygulamak ve öğretebilmek seviyelerini ayırt edebilmek"
  - "Aktif hatırlama ve aralıklı tekrar kullanan bir çalışma planı hazırlayabilmek"
  - "Feynman tekniğini kullanarak bilgi boşluklarını tespit edebilmek"
  - "Resmî dokümantasyonu sistematik biçimde okuyup teknik not üretebilmek"
  - "İngilizce teknik kaynaklarla sürdürülebilir biçimde çalışabilmek"
  - "Yapay zekâ çıktısını açıklama, test ve kaynak kontrolüyle doğrulayabilmek"
  - "Debugging sürecini kanıta dayalı bir öğrenme etkinliğine dönüştürebilmek"
  - "Günlük ve haftalık ölçümleri olan kişisel bir öğrenme sistemi kurabilmek"
---

# Learning Philosophy — Öğrenmeyi Öğrenmek

## Learning Objectives

Bu bölümü tamamladığınızda:

- Aktif öğrenme (active learning) ile pasif öğrenme (passive learning) davranışlarını somut örneklerle karşılaştırabileceksiniz.
- Bir konudaki yeterliliğinizi bilmek, anlamak, uygulamak ve öğretebilmek seviyelerinde değerlendirebileceksiniz.
- Feynman tekniği (Feynman technique), aktif hatırlama (active recall) ve aralıklı tekrar (spaced repetition) yöntemlerini aynı çalışma döngüsünde kullanabileceksiniz.
- Resmî dokümantasyondan sürüm, kavram, örnek, sınır ve hata bilgisi çıkarabileceksiniz.
- İngilizce bir teknik kaynağı kelime kelime çevirmeden okuyup Türkçe bir açıklamaya dönüştürebileceksiniz.
- Yapay zekâyı (artificial intelligence, AI) çözümün sahibi olarak değil; soru üretme, açıklama, karşılaştırma ve inceleme yardımcısı olarak kullanabileceksiniz.
- Bir hatayı rastgele değişikliklerle değil; yeniden üretme, hipotez kurma, kanıt toplama ve doğrulama adımlarıyla çözebileceksiniz.
- Öğrenme sürenizi değil, ürettiğiniz kanıtları ölçen günlük ve haftalık bir sistem tasarlayabileceksiniz.

## Prerequisites

Bu bölüme başlamadan önce **Volume 00 / Chapter 01 — Welcome to ASEA** bölümünü tamamlamış olmanız beklenir. Özellikle programlama ile yazılım mühendisliği arasındaki farkı ve mühendislik kararlarının kanıtla doğrulanması gerektiğini kendi cümlelerinizle açıklayabilmelisiniz.

Belirli bir programlama dili bilgisi gerekmez. Notlarınızı Markdown biçiminde tutabileceğiniz bir metin düzenleyici yeterlidir. Bölüm sonu görevi için yedi güne yayılan kısa çalışma oturumları planlamanız gerekir.

## Estimated Study Time

Bu bölüm için önerilen ilk çalışma süresi **90-120 dakikadır**:

- Bölümü okuyup kavram haritası çıkarmak: 40-50 dakika
- Bir resmî dokümantasyon sayfasını yöntemle incelemek: 20-25 dakika
- Feynman açıklaması ve aktif hatırlama soruları hazırlamak: 15-20 dakika
- Kişisel çalışma sistemini kurmak: 15-25 dakika

Bölüm sonu uygulaması ayrıca yedi gün boyunca günde 25-45 dakika gerektirir. Amaç tek oturumda uzun süre çalışmak değil, öğrenmeyi zamana yayarak tekrar kullanılabilir bir sistem kurmaktır.

## Introduction

Yazılım alanında öğrenilecek konu sayısı sınırsız görünür: programlama dilleri, araçlar, işletim sistemleri, ağlar, veri yapıları, güvenlik, test, mimari ve sürekli değişen kütüphaneler. Bu ortamda başarı, her şeyi ezberlemekten değil; doğru konuyu seçmek, etkin biçimde çalışmak, bilgiyi uygulamak ve gerektiğinde yeniden öğrenmekten gelir.

Öğrenme çoğu zaman tüketimle karıştırılır. Video izlemek, metin okumak veya bir örneği takip etmek ilerleme hissi verebilir. Ancak bir kavramı kaynağa bakmadan açıklayamıyor, yeni bir probleme uygulayamıyor veya hata oluştuğunda nedenini araştırmıyorsanız bilgi henüz kullanılabilir beceriye dönüşmemiştir.

Bu ayrım öğrenme araştırmalarında da görünürdür. Freeman ve arkadaşlarının 225 lisans düzeyi bilim, teknoloji, mühendislik ve matematik (science, technology, engineering and mathematics, STEM) çalışmasını kapsayan meta-analizi (meta-analysis), öğrenciyi problem çözme ve düşünme etkinliklerine katan aktif öğrenme ortamlarında sınav performansının arttığını ve başarısızlık oranlarının geleneksel anlatım ağırlıklı ortamlara göre azaldığını raporlamıştır [1]. Bu sonuç, tek bir yöntemin her kişi ve konu için aynı etkiyi üreteceği anlamına gelmez. Yine de öğrenenin yalnızca bilgiyi izlemesi yerine bilgiyi geri çağırması, kullanması ve geri bildirim alması gerektiği yönünde güçlü bir gerekçe sunar.

ASEA'nın öğrenme felsefesi bu nedenle dört kanıta dayanır: **açıklayabilmek, üretebilmek, doğrulayabilmek ve iyileştirebilmek**. Okuma ve izleme bu sürecin girdileridir; çalışan uygulama, doğru açıklama, hata kaydı, test sonucu ve zaman içinde korunmuş hatırlama ise öğrenmenin kanıtlarıdır.

## Core Concepts

### Aktif ve pasif öğrenme farkı

Pasif öğrenmede bilgi çoğunlukla öğrenciye doğru akar. Metni yeniden okumak, bir videoyu durdurmadan izlemek, örnek kodu aynen yazmak ve altını çizmek bu gruba girebilir. Bu etkinlikler ilk temas için yararlıdır; sorun, tek başlarına yeterli kabul edilmeleridir.

Aktif öğrenmede öğrenci bilgiyi dönüştürür veya kullanır. Kaynağı kapatıp açıklama yapmak, sonucu önceden tahmin etmek, bir problemi çözmek, örneği değiştirip yeniden çalıştırmak, hata ayıklamak ve geri bildirimle düzeltmek aktif davranışlardır.

| Pasif davranış | Aktif karşılığı | Üretilen kanıt |
| --- | --- | --- |
| Bir bölümü yeniden okumak | Kaynak kapalıyken ana fikirleri yazmak | Hatırlama kaydı |
| Çözüm videosu izlemek | Videodan önce çözüm planı oluşturmak | Tahmin ve çözüm karşılaştırması |
| Örnek kodu kopyalamak | Çıktıyı tahmin edip örneği farklı girdilerle değiştirmek | Deney sonuçları |
| Dokümantasyonda gezinmek | Bir soruyla başlayıp cevabı kaynak bağlantısıyla not etmek | Kaynaklı teknik not |
| Yapay zekâdan çözüm istemek | Önce yaklaşım üretip AI'dan eleştiri ve test senaryosu istemek | Revizyon kaydı |

Pasif çalışma tamamen bırakılmaz. Ön bilgi edinmek için kısa bir okuma veya gösterim gerekir. ASEA'daki kural şudur: **Her pasif girdi, aynı oturum içinde gözlemlenebilir bir aktif çıktıya dönüşmelidir.**

### Bilmek, anlamak, uygulamak ve öğretebilmek

ASEA, bir konudaki ilerlemeyi dört çalışma seviyesiyle değerlendirir. Bunlar katı bir bilimsel sınıflandırma değil, öz değerlendirme için kullanılan operasyonel bir merdivendir:

1. **Bilmek:** Terimi tanırsınız ve temel tanımını geri çağırabilirsiniz.
2. **Anlamak:** Kavramın nedenini, parçalarını ve başka kavramlarla ilişkisini kendi cümlelerinizle açıklayabilirsiniz.
3. **Uygulamak:** Kavramı yeni bir görevde, örneği aynen izlemeksizin kullanabilir ve sonucu doğrulayabilirsiniz.
4. **Öğretebilmek:** Konuyu başlangıç seviyesindeki birine açık dille anlatabilir, uygun örnek seçebilir, soruları yanıtlayabilir ve açıklamanızdaki boşlukları fark edebilirsiniz.

Örneğin bir test kavramının adını bilmek birinci seviyedir. Testin hangi riski azalttığını açıklamak ikinci, yeni bir işlev için uygun testleri yazmak üçüncü, başka bir öğrencinin hatalı testini inceleyip nedenini anlatmak dördüncü seviyedir.

“Okudum” veya “izledim” bir yeterlilik ölçüsü değildir. Hedef seviyeyi konuya göre seçin. Bir kavrama ilk kez bakarken anlamak yeterli olabilir; üretim sisteminde kullanacağınız bir araç için uygulamak ve hatalarını teşhis edebilmek gerekir.

### Feynman tekniği

Feynman tekniği, bir konuyu sade bir dille öğretmeye çalışarak bilgi boşluklarını bulma yöntemidir. Caltech'in öğrenme kaynağı, notları kapatıp konuyu daha önce görmemiş birine anlatır gibi açıklamayı; duraksanan, belirsiz veya yalnızca jargonla geçilen noktaları eksik anlayış işareti olarak kullanmayı önerir [4].

ASEA uygulaması dört adımdır:

1. Dar bir konu seçin: “Git nedir?” yerine “Bir değişiklik kaydı (commit) hangi problemi çözer?” gibi.
2. Kaynağı kapatın ve konuyu günlük dille yazılı veya sesli anlatın.
3. Açıklayamadığınız, örnek veremediğiniz veya “zaten böyle” dediğiniz noktaları işaretleyin.
4. Yalnızca bu boşluklar için kaynağa dönün; ardından açıklamayı daha kısa ve daha açık biçimde yeniden kurun.

Sade anlatım, teknik doğruluğu feda etmek değildir. Bir terimi kaldırdığınızda anlam bozuluyorsa terimi tanımlayın. Benzetme kullanıyorsanız benzetmenin nerede geçersiz kaldığını da belirtin.

### Aktif hatırlama

Aktif hatırlama, cevabı yeniden okumak yerine bilgiyi bellekten geri getirmeye çalışmaktır. Roediger ve Karpicke'nin deneylerinde, metin üzerinde tekrar tekrar çalışmak kısa gecikmede avantaj sağlayabilse de geri çağırma testi yapan gruplar daha uzun gecikmelerde daha iyi kalıcılık göstermiştir [3]. Bu bulgu, testin yalnızca ölçme aracı değil, bir öğrenme etkinliği olabileceğini gösterir.

Teknik öğrenmede aktif hatırlama şu biçimlerde uygulanabilir:

- Kaynağı kapatıp bir kavramın üç temel özelliğini yazmak.
- Bir komutun sözdizimini değil, hangi durumda kullanılacağını açıklamak.
- Bir kod parçasının çıktısını çalıştırmadan önce tahmin etmek.
- Boş bir dosyada küçük bir örneği hafızadan yeniden kurmak.
- “Bu yaklaşım hangi durumda başarısız olur?” sorusunu yanıtlamak.

Hatırlama çalışmasından sonra cevabı güvenilir kaynakla karşılaştırın. Yanlış cevabı tekrar etmek yerine hatayı düzeltin ve soruyu daha sonra yeniden deneyin.

### Aralıklı tekrar

Aralıklı tekrar, aynı bilgiyi tek oturumda yoğun biçimde tekrarlamak yerine çalışmayı zamana yaymaktır. Dunlosky ve arkadaşlarının on öğrenme tekniğini değerlendiren kapsamlı incelemesi, uygulama testleri (practice testing) ile dağıtılmış çalışmayı (distributed practice) farklı yaş ve görevlerde yüksek yarara sahip teknikler arasında değerlendirmiştir [2].

ASEA için başlangıç aralığı şöyledir:

- İlk öğrenmeden sonra: aynı gün kısa geri çağırma
- Birinci tekrar: 1 gün sonra
- İkinci tekrar: 3 gün sonra
- Üçüncü tekrar: 7 gün sonra
- Dördüncü tekrar: 14 gün sonra

Bu takvim sabit bir yasa değildir. Doğru ve kolay hatırlanan konuların aralığını büyütün; karıştırılan veya uygulamada hata üreten konuları daha erken çağırın. Tekrarın bir kartı görmekten ibaret olmaması gerekir: açıklama, küçük uygulama veya hata analizi gibi üretici bir davranış ekleyin.

### Teknik not alma sistemi

Teknik not alma (technical note-taking), kaynağın kopyasını çıkarmak değil, gelecekteki bir problemi daha hızlı çözmek için işlenmiş bilgi üretmektir. Her kalıcı not tek bir ana soruya cevap vermelidir.

Önerilen not şablonu:

- **Başlık:** Aranabilir, soru veya karar odaklı ifade
- **Bağlam:** Bu bilgi hangi problem sırasında gerekli oldu?
- **Kendi açıklamam:** Kaynak kapalıyken yazılmış kısa açıklama
- **En küçük örnek:** Kavramı gösteren, gereksiz ayrıntı içermeyen uygulama
- **Sınırlar ve hatalar:** Ne zaman çalışmaz veya hangi koşulda farklı davranır?
- **Doğrulama:** Hangi test, deney veya dokümantasyon bölümü sonucu destekliyor?
- **Kaynak:** Başlık, bağlantı, sürüm ve erişim tarihi
- **İlişkiler:** Bağlantılı kavramlar ve önceki notlar

Ders sırasında alınan hızlı not ile kalıcı notu ayırın. Hızlı not eksik olabilir; haftalık incelemede doğrulanır, sadeleştirilir ve bilgi tabanına taşınır. Doğrulanmayan bir iddiayı kesin bilgi gibi kaydetmeyin.

### Resmî dokümantasyon okuma yöntemi

Resmî dokümantasyon (official documentation), bir teknolojiyle ilgili ilk başvuru noktasıdır; fakat baştan sona roman gibi okunması gerekmez. Aşağıdaki yöntem, belirli bir soruyla çalışır:

1. **Soruyu yazın:** “Bu uygulama programlama arayüzü (application programming interface, API) hangi girdileri kabul ediyor?” gibi tek bir hedef belirleyin.
2. **Sürümü doğrulayın:** Okuduğunuz sayfanın kullandığınız sürüm ve çalışma ortamıyla uyumunu kontrol edin.
3. **Genel bakışı okuyun:** Kavram sayfası veya başlangıç rehberiyle terminolojiyi öğrenin.
4. **Referansa geçin:** Parametreler, dönüş değeri, hata davranışı, varsayılanlar ve uyumluluk notlarını çıkarın.
5. **Örneği tahmin edin:** Çalıştırmadan önce örneğin ne yapacağını ve nedenini yazın.
6. **En küçük deneyi kurun:** Örneği çalıştırın; tek bir girdiyi veya koşulu değiştirerek davranışı gözlemleyin.
7. **Sınırı test edin:** Boş, hatalı veya beklenmeyen bir girdi deneyin.
8. **Kaynaklı not yazın:** Sonucu kendi cümlelerinizle kaydedin ve doğrudan ilgili dokümantasyon bölümüne bağlantı verin.

Eğitim rehberleri size bir yol gösterir; API referansı kesin ayrıntıyı bulmanızı sağlar; sürüm notları değişen davranışı açıklar. Bu belge türlerini birbirinin yerine kullanmayın.

### İngilizce teknik kaynaklarla çalışma

Yazılım dünyasındaki birçok birincil kaynak İngilizcedir. Hedef, her cümleyi kusursuz çevirmek değil; teknik anlamı doğru çıkarıp uygulayabilmektir.

Uygulanabilir okuma protokolü:

1. Başlıkları, kod bloklarını, tablo ve uyarıları tarayarak belgenin yapısını çıkarın.
2. Okuma amacınızla ilgili bölümü seçin; tüm sayfayı çevirmeye çalışmayın.
3. İlk okumada yalnızca anlamı engelleyen kelimeleri işaretleyin.
4. Terimi bağlam içinde araştırın ve kişisel sözlüğünüze “Türkçe karşılık + İngilizce terim + örnek cümle” biçiminde ekleyin.
5. Paragrafı Türkçe tek bir cümleyle özetleyin.
6. Verilen örneği çalıştırın veya davranışını açıklayın.
7. Son olarak orijinal metne dönüp özetinizin anlamı bozup bozmadığını kontrol edin.

Otomatik çeviri ilk geçişte yardımcı olabilir, ancak API adlarını, hata mesajlarını ve yerleşik teknik terimleri değiştirebilir. Kritik ayrıntıyı her zaman orijinal metinle karşılaştırın. Haftada beş sık kullanılan terim öğrenmek, yüzlerce kelimelik bağlamsız liste ezberlemekten daha uygulanabilir bir hedeftir.

### Yapay zekâyı yardımcı olarak kullanma

Yapay zekâ hızlı açıklama, soru üretme, alternatif yaklaşım bulma ve çalışma ürününü eleştirme konusunda yararlı olabilir. Bununla birlikte üretilen yanıt doğru, güncel, güvenli veya projenizin bağlamına uygun olmak zorunda değildir. GitHub'ın AI üretimi kod inceleme rehberi de işlevsel kontrolleri çalıştırmayı, bağlam ve amacı doğrulamayı, bağımlılıkları incelemeyi ve insan gözetimini korumayı önerir [7].

ASEA'da AI kullanımı için **Önce Düşün, Sonra Sor, Sonunda Doğrula** protokolü uygulanır:

1. Problemi ve kendi ilk yaklaşımınızı yazın.
2. AI'dan doğrudan tamamlanmış çözüm yerine ipucu, karşı örnek, açıklama veya test senaryosu isteyin.
3. Yanıttaki her iddia ve kod parçasını açıklayın.
4. Sürüm ve API ayrıntılarını resmî dokümantasyondan kontrol edin.
5. Kodu test, statik analiz (static analysis) ve küçük deneylerle doğrulayın.
6. Çözümü kapatıp temel yaklaşımı kendiniz yeniden üretin.
7. AI'nın hangi noktada yardımcı, eksik veya hatalı olduğunu öğrenme günlüğüne kaydedin.

Bir çıktıyı açıklayamıyorsanız onu henüz kendi çözümünüz olarak kullanmayın. AI, düşünme sorumluluğunu devralan bir otorite değil; ürettiği öneriler sınanması gereken bir yardımcıdır.

### Debug yaparak öğrenme

Hata ayıklama (debugging), hatayı ortadan kaldırmanın ötesinde programın gerçekte nasıl çalıştığını öğrenme sürecidir. Debugging öğretimi üzerine güncel bir sistematik inceleme, yapılandırılmış müdahalelerin hata bulma doğruluğu ve öğrenme açısından umut verici sonuçlar verdiğini; buna karşın sistematik strateji kullanımını yerleştirmenin hâlâ zor olduğunu bildirir [5]. Bu nedenle debugging alışkanlığı açık adımlarla çalışılmalıdır.

ASEA debugging döngüsü:

1. **Yeniden üret:** Hatanın hangi kesin adımlarla oluştuğunu kaydet.
2. **Beklenen ve gerçekleşeni ayır:** Ne olmalıydı, ne oldu?
3. **Kapsamı küçült:** Gereksiz parçaları çıkararak en küçük başarısız örneği bul.
4. **Hipotez kur:** Olası nedeni test edilebilir tek bir cümleyle yaz.
5. **Kanıt topla:** Hata mesajı, günlük, test, hata ayıklayıcı (debugger) veya kontrollü çıktı kullan.
6. **Tek değişkeni değiştir:** Aynı anda birçok rastgele düzenleme yapma.
7. **Sonucu doğrula:** Hatanın kaybolmasının yanında doğru davranışın korunduğunu test et.
8. **Öğrenmeyi kaydet:** Kök neden, yanıltıcı varsayım ve gelecekteki önleme yöntemini yaz.

Wilkin'in sistematik debugging dersi üzerine vaka çalışması, yöntem ve araçların açıkça öğretildiği bir süreç sonrasında katılımcıların hata çözme süresi ve güveninde iyileşme raporlamıştır [6]. Tek bir dersin sonucu genellenemez; ancak debugging'in doğuştan gelen sezgi değil, çalışılabilir bir mühendislik becerisi olduğunu destekler.

### Kişisel bilgi tabanı

Kişisel bilgi tabanı (personal knowledge base), doğrulanmış notların aranabilir ve bağlantılı koleksiyonudur. Amaç mümkün olan her şeyi saklamak değil, gelecekte açıklama, uygulama ve karar vermeyi hızlandırmaktır.

Basit bir klasör yapısı yeterlidir:

- `inbox/`: Henüz doğrulanmamış hızlı notlar
- `concepts/`: Tek kavramı açıklayan kalıcı notlar
- `debugging/`: Hata, kök neden ve çözüm kayıtları
- `decisions/`: Seçenek, ödünleşim ve karar gerekçeleri
- `glossary/`: Türkçe ve İngilizce teknik terimler
- `reviews/`: Günlük ve haftalık değerlendirmeler

Her notun tek bir sorusu, kendi cümlelerinizle açıklaması, kaynağı ve son gözden geçirme tarihi olmalıdır. Bilgi tabanı büyüdükçe yeni araç aramak yerine arşivleme, adlandırma ve gözden geçirme kurallarını sade tutun.

### Günlük ve haftalık çalışma rutini

Sürdürülebilir sistem, yoğun bir günden çok tekrar edilebilir küçük oturumlara dayanır.

**Günlük 30-45 dakikalık örnek rutin:**

1. 5 dakika: Önceki konudan üç aktif hatırlama sorusu.
2. 15 dakika: Tek bir yeni kavramı güvenilir kaynaktan inceleme.
3. 15 dakika: Küçük uygulama, tahmin veya debugging etkinliği.
4. 5 dakika: Bir kalıcı not ve bir sonraki adımı yazma.
5. 5 dakika: Çalışma ölçümlerini kaydetme.

**Haftalık 45-60 dakikalık inceleme:**

1. Tamamlanan uygulamaları ve doğrulama kanıtlarını sayın.
2. Hatırlama sorularındaki doğru, kısmi ve yanlış cevapları karşılaştırın.
3. En çok zaman kaybettiren hatayı kök neden açısından inceleyin.
4. `inbox/` notlarından doğrulananları kalıcı bilgi tabanına taşıyın.
5. İşe yaramayan bir çalışma davranışını çıkarın.
6. Gelecek hafta için en fazla üç ölçülebilir hedef belirleyin.

Takip edilecek temel ölçüler; geçirilen saat değil, kaynaksız açıklama sayısı, tamamlanan uygulama, doğrulanan not, çözülen hata ve gecikmeli hatırlama başarısıdır.

## Engineering Perspective

Bir yazılım mühendisi için öğrenme sistemi de tasarlanan ve iyileştirilen bir sistemdir. Girdileri zaman ve kaynaklar; süreçleri okuma, uygulama, hatırlama ve geri bildirim; çıktıları ise açıklama, çalışan çözüm, test, teknik not ve karar kaydıdır.

Bu sistem aşağıdaki mühendislik ilkeleriyle yönetilir:

- **Gözlemlenebilirlik (observability):** “İyi çalıştım” yerine hangi çıktının üretildiğini kaydedin.
- **Kısa geri bildirim döngüsü:** Yanlış anlayışı haftalar sonra değil, aynı gün küçük bir test veya açıklamayla bulun.
- **Tekrarlanabilirlik (repeatability):** Yalnızca motivasyon yüksekken çalışan plan yerine düşük enerjili günlerde de uygulanabilen asgari rutin kurun.
- **Kademeli iyileştirme (incremental improvement):** Aynı anda bütün alışkanlıkları değiştirmeyin; haftada tek bir süreç değişikliğini ölçün.
- **Kök neden analizi (root cause analysis):** Kaçırılan hedefi “disiplinsizlik” etiketiyle kapatmayın. Hedef fazla mı büyüktü, zaman mı ayrılmadı, kaynak mı yanlıştı, geri bildirim mi yoktu?
- **Risk yönetimi (risk management):** Yalnızca rahat olduğunuz konuları tekrar ederek güçlü görünmek yerine, proje için kritik bilgi boşluklarını önceleyin.

Öğrenme planı bir görev listesi değil, geri bildirim üreten bir deneydir. Bir yöntem iki hafta boyunca beklenen çıktıyı üretmiyorsa daha fazla irade harcamadan önce yöntemi, kapsamı ve ölçüyü değiştirin.

## Real World Examples

### Google: inceleme aynı zamanda öğrenme mekanizmasıdır

Google'ın yayımladığı mühendislik uygulamalarında kod incelemesinin kod tabanı sağlığını zaman içinde iyileştirmesi beklenir. Rehber ayrıca incelemenin geliştiriciye dil, çerçeve veya tasarım ilkesi hakkında yeni bilgi öğretme işlevini açıkça tanımlar [8]. Bu yaklaşım öğrenmenin yalnız yapılan bir hazırlık değil, gerçek çalışma ve geri bildirim içinde devam eden bir süreç olduğunu gösterir.

ASEA karşılığı şudur: Çalışmanızı yalnızca “doğru cevap” almak için değil, kararınızı açıklamak ve geri bildirimin nedenini anlamak için incelemeye açın. Gelen yorumu düzeltirken ne öğrendiğinizi de kaydedin.

### GitHub: AI çıktısı teslim edilmeden önce doğrulanır

GitHub'ın AI üretimi kodu inceleme rehberi, otomatik test ve statik analizi çalıştırmayı; çıktının gereksinim ve mimariyle uyumunu kontrol etmeyi; bağımlılık ve güvenlik risklerini incelemeyi önerir [7]. GitHub'ın Copilot en iyi uygulamaları da aracın hata yapabileceğini ve önerilerin doğrulanması gerektiğini belirtir [9].

Bu, AI ile hızlı çıktı üretmenin mühendislik sorumluluğunu azaltmadığını gösterir. ASEA'da AI kullanan öğrenci, teslim ettiği her satırı açıklamak ve doğrulama kanıtını sunmakla sorumludur.

### MDN ve Google: dokümantasyon öğrenmenin aktif parçasıdır

MDN'nin web geliştirme öğrenme yolu, öğretici metinleri beceri sınamaları ve uygulama görevleriyle birlikte sunar; hedefini başlangıçtan uzmanlığa sıçramak değil, öğrenciyi daha ileri kaynakları kullanabilecek yeterliliğe taşımak olarak açıklar [10]. Google'ın mühendisler için teknik yazım programı ise mühendisliğin yazılı iletişim boyutunu vurgular ve açık teknik doküman üretmeyi öğrenilebilir bir beceri olarak ele alır [11].

Bu iki örnek, dokümantasyonu yalnızca sorun çıktığında bakılan bir arşiv olarak değil; okuma, uygulama, açıklama ve iletişim becerilerinin birlikte geliştiği bir çalışma alanı olarak konumlandırır.

## Common Mistakes

### Tüketimi ilerleme sanmak

Tamamlanan video ve sayfa sayısı, öğrenmenin doğrudan kanıtı değildir. Her kaynaktan sonra bir açıklama, uygulama, tahmin veya hatırlama çıktısı üretin.

### Yeniden okumayı ana yöntem yapmak

Metin tanıdık geldiğinde anlaşılmış hissedilebilir. Kaynağı kapatıp geri çağırmadıkça hangi parçaların gerçekten erişilebilir olduğunu göremezsiniz.

### Aralıklı tekrarı kart biriktirmeye dönüştürmek

Her cümleyi karta çevirmek büyük bir bakım yükü yaratır. Yalnızca sık kullanılan, karıştırılan veya uzun süre korunması gereken bilgileri tekrar sistemine alın.

### Feynman tekniğinde yalnızca metni sadeleştirmek

Kaynağa bakarak sade cümleler yazmak bilgi boşluğunu göstermez. Önce kaynağı kapatın; takıldığınız yeri belirledikten sonra geri dönün.

### Dokümantasyon yerine yalnızca ikincil içerik kullanmak

Bloglar ve videolar bağlam sağlayabilir, ancak sürüm, parametre ve hata davranışı için resmî kaynağı kontrol edin. Eski bir öğretici güncel API ile uyuşmayabilir.

### Her İngilizce kelimeyi çevirmek

Bu yaklaşım teknik amacı kaybettirir ve okuma hızını sürdürülemez hâle getirir. Önce soruya ilgili bölümü seçin, yalnızca anlamı engelleyen kelimeleri araştırın.

### AI'dan ilk adımda tamamlanmış çözüm istemek

Kendi hipoteziniz oluşmadan alınan çözüm kısa vadede görevi bitirebilir, fakat hata ayıklama ve problem çözme pratiğini ortadan kaldırır. Önce bir deneme veya plan üretin.

### Kopyala-yapıştır ile çalışan sonucu yeterli görmek

Kopyalanan çözümün girdisini, çıktısını, varsayımlarını ve hata durumlarını açıklayamıyorsanız onu güvenli biçimde değiştiremezsiniz. Her dış çözümü en küçük örnekte yeniden kurun ve bir koşulunu değiştirin.

### Debugging sırasında rastgele değişiklik yapmak

Aynı anda birçok satırı değiştirmek hangi hipotezin doğru olduğunu belirsiz bırakır. Önce hatayı yeniden üretin, sonra tek değişkeni sınayın.

### Not deposunu bilgi tabanı sanmak

Bağlantısız kopyalar, kaynaksız iddialar ve aranamaz başlıklar gelecekte kullanılamaz. Daha az ama doğrulanmış ve kendi cümlelerinizle yazılmış not üretin.

### Sadece çalışma süresini ölçmek

Uzun süre masada kalmak, doğru yöntem kullanıldığını göstermez. Süreyi kapasite planlamak için; açıklama, uygulama, test ve hatırlama sonuçlarını öğrenmeyi değerlendirmek için kullanın.

## Best Practices

- Her oturuma tek bir ölçülebilir öğrenme hedefiyle başlayın.
- İlk teması kısa tutun ve aynı oturumda aktif çıktı üretin.
- Kaynağı kapatarak hatırlama ve açıklama yapın.
- Tekrarları aynı gün, 1 gün, 3 gün, 7 gün ve 14 gün aralıklarıyla başlatıp performansa göre ayarlayın.
- Notları kendi cümlelerinizle yazın; kaynak, sürüm ve erişim tarihini ekleyin.
- Resmî dokümantasyonda önce soruyu ve sürümü belirleyin.
- İngilizce terimleri bağlam, Türkçe karşılık ve örnekle kişisel sözlüğe ekleyin.
- AI'ya soru sormadan önce kendi yaklaşımınızı kaydedin.
- AI çıktısındaki kodu ve iddiaları testler ve birincil kaynaklarla doğrulayın.
- Kopyalanan örneği küçültün, çıktısını tahmin edin ve en az bir koşulunu değiştirin.
- Debugging sırasında beklenen/gerçekleşen farkını, hipotezi, kanıtı ve sonucu yazın.
- Günlük rutini küçük; haftalık değerlendirmeyi dürüst ve veriye dayalı tutun.
- Öğrenme sistemine aynı hafta yalnızca bir önemli değişiklik yapın.
- Başarıyı içerik tüketimiyle değil, bağımsız üretim ve gecikmeli hatırlama kanıtlarıyla değerlendirin.

## Hands-on Exercise

### Görev: Yedi günlük ölçülebilir öğrenme deneyi

Yazılım mühendisliğiyle ilgili dar bir konu seçin. Konu, yedi günde küçük bir uygulamayla sınanabilecek kapsamda olmalıdır. “JavaScript öğrenmek” fazla geniştir; “JavaScript dizilerinde `map` ile dönüşüm yapıp hata durumlarını açıklamak” uygundur.

#### Başlangıç kaydı — 1. gün

1. Konuyu ve neden öğrenmek istediğinizi 2-3 cümleyle yazın.
2. Kaynağa bakmadan bildiklerinizi en fazla 10 dakika içinde yazın.
3. Dört öğrenme seviyesinden hedefinizi seçin ve gerekçelendirin.
4. Bir resmî dokümantasyon sayfası ile en az bir güvenilir ikincil kaynak belirleyin.
5. Beş aktif hatırlama sorusu hazırlayın.

#### Günlük çalışma — 1-7. günler

Her gün 25-45 dakikalık bir oturum yapın ve şu kaydı tutun:

- Tarih ve net çalışma süresi
- Oturumun tek hedefi
- Kaynak kapalıyken cevaplanan sorular: doğru / kısmi / yanlış
- Üretilen uygulama, açıklama veya debugging kanıtı
- Karşılaşılan bir bilgi boşluğu
- Bir sonraki oturumun ilk adımı

Tekrarları en az **1., 2., 4. ve 7. günlerde** yapın. Her tekrarda aynı beş soruyu kaynak kapalıyken cevaplayın; cevapları sonradan kaynağa göre düzeltin.

#### Zorunlu öğrenme kanıtları

Yedi gün sonunda aşağıdaki ürünlerin tamamını teslim edin:

1. **Feynman açıklaması:** 300-500 kelime; jargonlar tanımlanmış, en az bir örnek ve bir sınır içeriyor.
2. **Teknik not:** Bağlam, kendi açıklamanız, en küçük örnek, hata/sınır, doğrulama ve kaynak alanlarını içeriyor.
3. **Dokümantasyon incelemesi:** Sürüm, temel davranış, bir hata veya sınır durumu ve doğrudan kaynak bağlantısı bulunuyor.
4. **Debugging günlüğü:** Yeniden üretme adımları, beklenen/gerçekleşen, hipotez, kanıt, tek değişiklik ve doğrulama sonucu bulunuyor.
5. **AI kullanım kaydı:** Kendi ilk yaklaşımınız, kullandığınız istem, AI yanıtından doğrulanan ve reddedilen noktalar, uyguladığınız testler bulunuyor. AI kullanmadıysanız bunun yerine konu hakkında üç karşı örnek üretip doğrulayın.
6. **İngilizce teknik sözlük:** Konuyla ilgili en az beş terim; İngilizce terim, Türkçe karşılık, bağlam cümlesi ve kaynak içeriyor.
7. **Hatırlama tablosu:** Beş sorunun dört oturumdaki doğru/kısmi/yanlış sonuçlarını gösteriyor.
8. **Haftalık değerlendirme:** 200-300 kelime; hangi yöntemin işe yaradığı, hangi ölçünün geliştiği, neyin değiştirileceği açıklanıyor.

#### Değerlendirme ölçütleri

Toplam puan **20**'dir:

- Hedefin dar, açık ve ölçülebilir olması: 2 puan
- Dört aralıklı hatırlama oturumunun kaydı: 4 puan
- Açıklamanın teknik doğruluğu ve sadeliği: 3 puan
- Resmî dokümantasyonun doğru sürüm ve bağlantıyla kullanılması: 2 puan
- Küçük uygulama veya örneğin bağımsız üretimi ve doğrulanması: 3 puan
- Debugging günlüğünün hipotez ve kanıt içermesi: 2 puan
- AI çıktısının veya karşı örneklerin eleştirel doğrulanması: 2 puan
- Haftalık değerlendirmenin ölçümlere dayalı olması: 2 puan

Görevin tamamlanması için en az **14/20** puan, dört hatırlama oturumunun tamamı ve zorunlu sekiz öğrenme kanıtının eksiksiz teslimi gerekir.

## Reflection Questions

1. Çalışırken en sık hangi pasif davranışı öğrenme kanıtı sanıyorsunuz?
2. Son öğrendiğiniz teknik konuda bilmek, anlamak, uygulamak ve öğretebilmek seviyelerinden hangisindesiniz? Bunu hangi kanıt destekliyor?
3. Kaynağı kapattığınızda açıklayamadığınız noktalar, çalışma planınızı nasıl değiştirmeli?
4. Aralıklı tekrar planınız yoğun bir haftada nasıl küçültülebilir ama tamamen kaybolmaz?
5. Teknik notlarınız gelecekte bir problemi çözmeye mi yarıyor, yoksa yalnızca okuduklarınızın arşivi mi oluyor?
6. İngilizce kaynak okurken anlamı en çok dil bilgisi mi, teknik bağlam eksikliği mi engelliyor? Bunu nasıl ayırt edersiniz?
7. AI'dan aldığınız bir yanıtı en son hangi test veya birincil kaynakla doğruladınız?
8. Kopyaladığınız bir çözümü bağımsız olarak yeniden üretemiyorsanız hangi öğrenme adımı eksiktir?
9. Debugging sırasında hipotez kurmadan yaptığınız değişikliklerin maliyeti nedir?
10. Haftalık değerlendirmede hangi ölçüyü bırakmanız, hangisini eklemeniz gerekir?

## Chapter Summary

Yazılım alanında sürdürülebilir öğrenme, daha fazla içerik tüketmek değil; bilgiyi geri çağırma, uygulama, açıklama, hata ayıklama ve geri bildirimle iyileştirme sistemidir. Pasif öğrenme ilk temas için yararlı olabilir, ancak aynı oturumda aktif bir çıktıya dönüşmediğinde yeterlilik yanılsaması yaratabilir.

Bilmek, anlamak, uygulamak ve öğretebilmek seviyeleri, bir konudaki gerçek hedefi ve kanıtı görünür kılar. Feynman tekniği açıklamadaki boşlukları bulur; aktif hatırlama cevabı bellekten üretir; aralıklı tekrar bu üretimi zamana yayar. Araştırmalar, uygulama testleri ve dağıtılmış çalışmanın uzun süreli öğrenme açısından güçlü yöntemler olduğunu; aktif öğrenmenin STEM ortamlarında yalnız anlatıma göre daha iyi sonuçlarla ilişkili olduğunu göstermektedir [1][2][3].

Teknik not alma, resmî dokümantasyon okuma ve İngilizce kaynaklarla çalışma, bilginin güvenilir ve yeniden kullanılabilir olmasını sağlar. AI hız ve farklı bakış açısı sunabilir, fakat açıklama ve doğrulama sorumluluğunu devralmaz. Debugging ise hata mesajını susturmak yerine sistem davranışını hipotez ve kanıtla öğrenme fırsatıdır.

Günlük küçük oturumlar uygulama ve hatırlama üretir; haftalık inceleme ise sistemin işe yarayıp yaramadığını ölçer. ASEA'da öğrenmenin temel ölçüsü harcanan süre veya tamamlanan içerik sayısı değil, bağımsız biçimde açıklanan, uygulanan, doğrulanan ve daha sonra yeniden hatırlanan bilgidir.

## Key Takeaways

- Her pasif öğrenme girdisi aynı oturumda aktif bir çıktıya dönüşmelidir.
- Bir konuyu tanımak, onu anlayıp yeni durumda uygulayabilmekle aynı değildir.
- Feynman tekniği sade açıklama üzerinden bilgi boşluklarını görünür kılar.
- Aktif hatırlama bilgiyi kaynaktan tekrar görmek yerine bellekten üretmeyi gerektirir.
- Aralıklı tekrar, çalışmayı zamana yayar ve gecikmeli hatırlamayı ölçer.
- Teknik not, kaynağın kopyası değil; bağlamı, açıklaması, sınırı ve doğrulaması olan yeniden kullanılabilir bilgidir.
- Resmî dokümantasyon soru, sürüm, referans, deney ve kaynaklı not sırasıyla okunmalıdır.
- İngilizce teknik kaynaklarda amaç kelime kelime çeviri değil, doğru teknik anlam ve uygulamadır.
- AI yardımcı olabilir; doğruluk, güvenlik ve bağlam sorumluluğu öğrencide kalır.
- Kopyalanan çözüm açıklanamıyor ve değiştirilemiyorsa öğrenilmiş sayılmaz.
- Sistematik debugging, hipotez ve kanıtla yürütülen bir öğrenme yöntemidir.
- Çalışma sistemi süreyi değil, açıklama, uygulama, doğrulama ve hatırlama kanıtlarını ölçmelidir.

## Further Reading

- Freeman ve diğerleri, **Active Learning Increases Student Performance in Science, Engineering, and Mathematics**: STEM alanlarında aktif öğrenme üzerine geniş kapsamlı meta-analiz.
- Dunlosky ve diğerleri, **Improving Students' Learning With Effective Learning Techniques**: On yaygın çalışma tekniğinin kanıt temelli değerlendirmesi.
- Roediger ve Karpicke, **Test-Enhanced Learning**: Geri çağırma pratiği ve uzun süreli hatırlama ilişkisi.
- Caltech CTLO, **The Power of Teaching**: Öğreterek öğrenme için uygulanabilir açıklama döngüsü.
- Yang ve diğerleri, **Decoding Debugging Instruction**: Debugging öğretimi müdahalelerinin sistematik incelemesi.
- GitHub Docs, **Review AI-Generated Code**: AI üretimi kodu işlev, bağlam, kalite, bağımlılık ve güvenlik açısından inceleme rehberi.
- Google Engineering Practices, **The Standard of Code Review**: Kod incelemesinde sürekli iyileştirme, kanıt ve mentorluk ilkeleri.
- MDN, **Learn Web Development**: Öğretici içerik, uygulama ve beceri sınamalarını birleştiren yapılandırılmış öğrenme yolu.

## References

1. Freeman, S., Eddy, S. L., McDonough, M. ve diğerleri. (2014). [Active Learning Increases Student Performance in Science, Engineering, and Mathematics](https://doi.org/10.1073/pnas.1319030111). *Proceedings of the National Academy of Sciences*, 111(23), 8410-8415.
2. Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J. ve Willingham, D. T. (2013). [Improving Students' Learning With Effective Learning Techniques: Promising Directions From Cognitive and Educational Psychology](https://doi.org/10.1177/1529100612453266). *Psychological Science in the Public Interest*, 14(1), 4-58.
3. Roediger, H. L. ve Karpicke, J. D. (2006). [Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention](https://doi.org/10.1111/j.1467-9280.2006.01693.x). *Psychological Science*, 17(3), 249-255.
4. California Institute of Technology, Center for Teaching, Learning, and Outreach. [The Power of Teaching](https://ctlo.caltech.edu/aboutctlo/whoweserve/undergraduates/learning-resources/learning/power-of-teaching). Erişim: 17 Temmuz 2026.
5. Yang, S., Baird, M., O'Rourke, E., Brennan, K. ve Schneider, B. (2024). [Decoding Debugging Instruction: A Systematic Literature Review of Debugging Interventions](https://doi.org/10.1145/3690652). *ACM Transactions on Computing Education*, 24(4), Article 45, 1-44.
6. Wilkin, G. A. (2025). [“Debugging: From Art to Science” — A Case Study on a Debugging Course and Its Impact on Student Performance and Confidence](https://doi.org/10.1145/3641554.3701893). *Proceedings of the 56th ACM Technical Symposium on Computer Science Education*, 1225-1231.
7. GitHub Docs. [Review AI-Generated Code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code). Erişim: 17 Temmuz 2026.
8. Google Engineering Practices. [The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html). Erişim: 17 Temmuz 2026.
9. GitHub Docs. [Best Practices for Using GitHub Copilot](https://docs.github.com/en/copilot/get-started/best-practices). Erişim: 17 Temmuz 2026.
10. MDN Web Docs. [Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development). Erişim: 17 Temmuz 2026.
11. Google for Developers. [Technical Writing Courses for Engineers](https://developers.google.com/tech-writing). Erişim: 17 Temmuz 2026.
