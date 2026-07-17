---
title: "How to Use This Academy — ASEA Çalışma Rehberi"
volume: "00"
chapter: "05"
slug: "how-to-use-this-academy"
difficulty: "Beginner"
estimated_time: "90-120 minutes"
status: "Draft"
prerequisites:
  - "Chapter 01 — Welcome to ASEA"
  - "Chapter 02 — Learning Philosophy"
  - "Chapter 03 — Engineering Mindset"
  - "Chapter 04 — Academy Roadmap"
learning_objectives:
  - "ASEA için sürdürülebilir bir günlük ve haftalık çalışma döngüsü kurabilmek"
  - "Git ile GitHub'ın rollerini ayırarak güvenli bir repository çalışma akışı uygulayabilmek"
  - "Küçük, anlamlı ve doğrulanmış değişikliklerden oluşan commit disiplini geliştirebilmek"
  - "Chapter, laboratuvar, quiz, proje ve teknik notları tek bir kanıt zincirinde yönetebilmek"
  - "Yapay zekâ araçlarını etik, doğrulanabilir ve öğrenmeyi destekleyen biçimde kullanabilmek"
  - "Tekrar ve ilerleme planını ölçülebilir göstergelerle güncelleyebilmek"
---

# How to Use This Academy — ASEA Çalışma Rehberi

## Learning Objectives

Bu bölümün sonunda öğrenci:

- Bir çalışma oturumunu hedef, aktif uygulama, doğrulama ve yansıtma aşamalarına böler.
- Git (dağıtık sürüm kontrol sistemi — distributed version control system) ile GitHub'ın (repository barındırma ve iş birliği platformu) farklı sorumluluklarını açıklar.
- Değişikliklerini inceleyerek yalnızca ilgili dosyaları hazırlama alanına alır ve tek amaçlı commit'ler planlar.
- Bir laboratuvarı başlangıç kontrolünden temizlik ve raporlamaya kadar tekrarlanabilir biçimde yürütür.
- Yapay zekâ çıktısını kaynak, test ve kendi açıklamasıyla doğrular; gizli veriyi korur.
- Haftalık göstergelerden hareketle yeni çalışma, tekrar veya eksik giderme kararı verir.

## Prerequisites

Volume 00'ın önceki dört chapter'ı tamamlanmalıdır. Öğrencinin dosya ve klasörlerle çalışabilmesi, bir terminal açabilmesi ve temel Markdown yazabilmesi beklenir. Git komutlarını önceden bilmek gerekmez; ancak bu bölümdeki işlemler kişisel bir deneme repository'sinde uygulanmalıdır.

## Estimated Study Time

Okuma ve örnek akışı inceleme için 90-120 dakika, uygulama görevi için yedi güne yayılmış toplam 5-7 saat ayrılmalıdır. Git kurulumu veya hesap yapılandırması gerekiyorsa ilk güne 30-60 dakika eklenebilir.

## Introduction

Akademiden sonuç almak, çok sayıda chapter'ı hızla bitirmekten değil, düzenli olarak kanıt üretmekten geçer. Bir kavramı okumak başlangıçtır; onu hatırlamak, laboratuvarda uygulamak, hatayı araştırmak, değişikliği açıklamak ve bir süre sonra yeniden kullanmak öğrenme döngüsünü tamamlar.

ASEA günlük çalışmayı gerçek yazılım mühendisliği alışkanlıklarıyla birleştirir. Öğrenci notlarını ve kodunu sürüm kontrolünde tutar, küçük değişiklikler yapar, sonuçları test eder, kararlarını kaydeder ve geri bildirimle düzeltir. Bu yöntem yalnızca düzen sağlamaz; bir problemin nasıl çözüldüğünü sonradan inceleyebilen bir öğrenme geçmişi oluşturur.

Araçlar bu disipline hizmet eder. Git, GitHub veya yapay zekâ tek başına öğrenme sistemi değildir. Ama doğru sınırlar ve kontrollerle kullanıldıklarında ilerlemeyi görünür, tekrarlanabilir ve incelenebilir hale getirirler.

## Core Concepts

### Günlük çalışma döngüsü

Odaklı bir oturum 60-90 dakika sürebilir ve beş aşamada yürütülebilir:

1. **Hedef — 5 dakika:** Tek bir öğrenme hedefi ve oturum sonunda üretilecek kanıt yazılır.
2. **Aktif hatırlama — 10 dakika:** Önceki çalışmadan üç-beş soru kaynağa bakmadan yanıtlanır.
3. **Öğrenme ve uygulama — 30-50 dakika:** Chapter'ın küçük bir bölümü okunur ve hemen örnek, lab ya da açıklamayla kullanılır.
4. **Doğrulama — 10-15 dakika:** Test, beklenen çıktı, `git diff` veya kontrol listesiyle sonuç incelenir.
5. **Yansıtma — 5-10 dakika:** Öğrenilenler, açık sorular, hata ve bir sonraki adım kaydedilir.

Yorgun bir günde süre azaltılabilir, ancak hedef ve doğrulama kaldırılmamalıdır. Bir oturumda birden fazla büyük hedef açmak, tamamlanmamış iş ve yüzeysel not üretir.

### Haftalık çalışma döngüsü

Hafta başında bir yeterlik hedefi ve teslim kanıtı seçilir. Hafta içinde chapter, lab ve tekrar oturumları dağıtılır. Hafta sonunda kanıtlar değerlendirilir: hangi hedef karşılandı, hangi hata tekrarlandı, hangi bilgi unutuldu ve sonraki hafta ne değişmeli? Chapter 02'deki aralıklı tekrar (spaced repetition) ve aktif hatırlama (active recall) bu takvime yerleştirilir; burada yöntemler tekrar anlatılmak yerine iş akışına bağlanır.

### Repository'yi kullanmak

Repository, çalışma ürünlerinin geçmişini tutar. Başlamadan önce ilgili volume'un `README.md` dosyası, chapter ön koşulları ve görev teslim ölçütleri okunur. Dosya yolları keyfî değiştirilmez; chapter, lab, quiz, proje ve varlıklar kendi alanlarında tutulur. Oluşturulan dosyanın adı repository kurallarına uyar.

Bir değişiklikten önce çalışma ağacının (working tree) durumu, sonrasında değişiklik farkı (diff) incelenir. Böylece yanlış dosyalar, geçici çıktılar, erişim anahtarları veya ilgisiz düzenlemeler commit'e girmeden görülür.

### Git ve GitHub'ın rolleri

Git yerel değişiklik geçmişini yönetir. Commit, belirli bir andaki seçilmiş değişiklikleri gerekçeli bir kayıt olarak saklar. Branch, çalışmayı başka bir değişiklik çizgisinden ayırır. GitHub ise Git repository'lerini uzakta barındırır; issue, pull request, inceleme ve otomasyon üzerinden iş birliği sağlar.

Temel komutlar ve amaçları şöyledir:

| Komut | Amaç |
| --- | --- |
| `git status` | Değişen, hazırlanan ve izlenmeyen dosyaları gösterir. |
| `git diff` | Henüz hazırlanmamış içerik farkını inceletir. |
| `git diff --staged` | Bir sonraki commit'e girecek farkı gösterir. |
| `git add <dosya>` | Yalnızca belirtilen dosyayı hazırlama alanına (staging area) ekler. |
| `git commit -m "mesaj"` | Hazırlanmış değişikliklerden yerel bir commit oluşturur. |
| `git log --oneline` | Kısa commit geçmişini gösterir. |
| `git push` | Yerel commit'leri yetkili uzak repository'ye gönderir. |

Bu komutlar bir sırayı ezberletmek için değil, kontrol noktalarını açıklamak için verilmiştir. Özellikle `commit` ve `push` aynı işlem değildir. Commit yerel geçmişi değiştirir; push başka kişilerin eriştiği uzak durumu etkiler. Görev veya repository kuralı izin vermiyorsa bu işlemler yapılmaz.

### Commit disiplini

İyi bir commit atomik değişiklik (atomic change) taşır: tek bir anlaşılır amacı vardır, ilgili dosyaları içerir, doğrulanmıştır ve gerektiğinde bağımsız incelenebilir. "Çeşitli düzenlemeler" gibi mesajlar geçmişi açıklamaz. Kısa özet, yapılan işi emir kipine yakın ve somut biçimde ifade etmelidir; gerekliyse gövdede kararın nedeni ve etkisi yazılır.

Commit öncesi kontrol:

1. `git status` ile kapsamı görün.
2. `git diff` ile satırları inceleyin.
3. İlgili dosyaları açıkça hazırlayın; toplu ekleme yapıyorsanız kapsamdan emin olun.
4. `git diff --staged` ile commit'in gerçek içeriğini yeniden okuyun.
5. İlgili test, doğrulama veya belge kontrolünü çalıştırın.
6. Gizli bilgi, kişisel veri ve üretilmiş gereksiz dosya olmadığını doğrulayın.
7. Mesajı değişikliğin amacıyla eşleştirin.

Bir görevi tamamlamak commit veya push yetkisi anlamına gelmez. ASEA'da bu eylemler kullanıcı, maintainer veya görev tarafından açıkça istendiğinde gerçekleştirilir.

### Teknik not sistemi

Teknik not, chapter'ın kopyası olmamalıdır. Her not tek bir soruyu cevaplamalı ve şu alanları içermelidir: kavramın kendi cümlelerinizle açıklaması, küçük örnek, ne zaman kullanılacağı, sınırları, bağlantılı kaynak ve tekrar tarihi. Kalıcı not (permanent note), kaynaktan bağımsız anlaşılır; kaynak notu ise okunan belgeden çıkarılan kanıtı ve bağlantıyı korur.

Hata günlüğünde tarih, hedef, gözlenen davranış, beklenen davranış, denenen hipotezler, kanıt, kök neden ve kalıcı ders tutulur. Çözülmeyen denemeleri silmek yerine neden başarısız olduklarını yazmak, gelecekteki hata ayıklamayı hızlandırır.

### Laboratuvar yürütme protokolü

Laboratuvar başlamadan önce ön koşullar, ortam sürümleri ve güvenlik uyarıları okunur. Başlangıç durumu kaydedilir. Her adımın sonucu gözlenir; beklenmeyen çıktı oluştuğunda rastgele komut çalıştırmak yerine hipotez yazılır. Sonunda doğrulama ölçütleri çalıştırılır, üretilen dosyalar incelenir, gerekiyorsa ortam temizlenir ve kısa lab raporu hazırlanır.

Lab raporu şu soruları yanıtlar: hedef neydi, hangi kanıt başarıyı gösteriyor, en önemli hata neydi, çözüm neden çalıştı, başka hangi koşulda başarısız olabilir ve bir sonraki uygulamada ne değişecek?

### Quiz ve proje kullanımı

Quiz, kaynak kapalı biçimde ilk denemede çözülür. Yanlış cevap yalnızca doğrusu işaretlenerek kapatılmaz; hatanın bilgi eksikliği mi, kavram karışıklığı mı yoksa dikkatsizlik mi olduğu yazılır. Yanlışlardan yeni aktif hatırlama soruları üretilir.

Projede önce kapsam ve kabul ölçütleri dondurulur. Çalışma küçük görev ve commit adaylarına bölünür. Her özellik test, belge ve karar kaydıyla birlikte tamamlanır. Teslimden sonra geriye dönük değerlendirmede plan ile gerçek süre, en pahalı hata, alınan geri bildirim ve sonraki sürüme bırakılan işler kaydedilir.

### Yapay zekâyı etik ve verimli kullanmak

Yapay zekâ destekli araç (AI-assisted tool), açıklama, alternatif üretme, test fikri veya hata hipotezi için yardımcı olabilir. Ancak çıktı doğruluk garantisi taşımaz ve öğrenme sorumluluğunu devralmaz.

Güvenli kullanım protokolü:

1. Önce problemi ve kendi ilk hipotezinizi yazın.
2. Araca yalnızca gerekli ve gizli olmayan bağlamı verin.
3. Çıktıdaki iddiaları resmî belge, çalışan test veya kaynak kodla doğrulayın.
4. Üretilen kodu satır satır açıklayamadığınız sürece teslim etmeyin.
5. Lisans, atıf, mahremiyet ve kurum politikalarını kontrol edin.
6. Nerede ve ne amaçla AI yardımı alındığını çalışma kaydında belirtin.
7. Son kararın ve doğabilecek sonucun sorumluluğunu insanda tutun.

API anahtarı, parola, özel repository içeriği, kişisel veri veya müşteri verisi bir AI aracına gönderilmemelidir. Aracın veri işleme koşulları bilinmiyorsa içerik paylaşılmaz.

### Tekrar ve ilerleme takibi

İlerleme, geçirilen saatle tek başına ölçülmez. Haftalık takip tablosu şu göstergeleri içerebilir:

- Tamamlanan öğrenme hedefi ve kanıt bağlantısı.
- İlk deneme ve tekrar quiz sonuçları.
- Bağımsız çözülen lab sayısı.
- Yardım almadan açıklanabilen kavramlar.
- Açık hata veya kavram boşluğu sayısı.
- Planlanan ve gerçek odaklı çalışma süresi.
- İnceleme geri bildirimi ve kapatılan düzeltmeler.

Bir gösterge davranışı bozuyorsa değiştirilir. Çok commit atmak veya çok saat geçirmek başarı hedefi değildir. Esas ölçüt, daha az yönlendirmeyle doğru ve açıklanabilir mühendislik çıktısı üretebilmektir.

## Engineering Perspective

Günlük çalışma bir teslim hattı (learning delivery pipeline) gibi ele alınabilir:

`Hedef → Ön bilgi kontrolü → Küçük değişiklik → Doğrulama → İnceleme → Kayıt → Tekrar`

Her aşama bir sonraki hatayı erken yakalar. Hedef belirsizse gereksiz içerik tüketilir. Küçük değişiklik yoksa sorun izole edilemez. Doğrulama yoksa çalışan ile çalışıyor görünen ayrılmaz. İnceleme yoksa kör noktalar kalır. Kayıt ve tekrar yoksa aynı hata yeniden ödenir.

Örneğin öğrenci bir laboratuvarda test hatası gördüğünde doğrudan AI çıktısını yapıştırmak yerine önce hatayı yeniden üretir, beklenen davranışı yazar, küçük bir hipotezi sınar ve farkı inceler. AI'dan alternatif hipotez isterse bunları test sonuçlarıyla eler. Çözümü kendi sözleriyle kaydeder ve bir hafta sonraki tekrar listesine benzer bir hata senaryosu ekler. Böylece araç kullanımı, hata ayıklama becerisinin yerine geçmez; geri bildirim döngüsünü zenginleştirir.

## Real World Examples

### GitHub Flow: küçük branch ve inceleme döngüsü

GitHub'ın resmî GitHub Flow rehberi; branch oluşturma, değişiklik yapma ve commit etme, pull request açma, inceleme, birleştirme ve branch silme akışını tanımlar. Pull request'in erken açılabilmesi ve geri bildirimle güncellenmesi, çalışmayı tek seferlik büyük teslim yerine görünür bir iş birliği döngüsüne dönüştürür.

### Google: küçük değişikliklerin incelenebilirliği

Google Engineering Practices, küçük ve kendi içinde tamamlanan değişikliklerin daha hızlı ve ayrıntılı incelendiğini, daha az hata içerdiğini ve daha kolay geri alınabildiğini açıklar. ASEA'daki commit disiplini bu ilkeden yararlanır: amaç commit sayısını artırmak değil, her kaydın anlaşılır ve doğrulanabilir olmasını sağlamaktır.

### GitHub: AI ile kodlamada insan sorumluluğu

GitHub Copilot sorumlu kullanım belgeleri, üretilen kodun hatalı veya güvensiz olabileceğini ve kullanıcının çıktıyı inceleyip doğrulaması gerektiğini belirtir. Bu gerçek ürün kısıtı, AI yardımını otorite değil öneri olarak ele alma kuralını destekler.

## Common Mistakes

- **Pasif maraton yapmak:** Saatlerce video veya chapter tüketip hiçbir açıklama, test veya uygulama üretmemek.
- **Her şeyi aynı anda değiştirmek:** Hata kaynağını ve commit amacını belirsizleştirmek.
- **`git add` sonrasında farkı incelememek:** İlgisiz dosya veya gizli bilginin geçmişe girmesine yol açmak.
- **Commit ile push'u aynı sanmak:** Yerel kayıt ile uzak sistemi etkileyen eylemin yetki farkını gözden kaçırmak.
- **Çalışmayan denemeleri silmek:** Hangi hipotezin elendiğine dair değerli öğrenme kanıtını kaybetmek.
- **Lab'ı komut listesi gibi uygulamak:** Beklenen davranışı ve hata koşullarını açıklayamamak.
- **AI çıktısını kaynak saymak:** Uydurma API, eski davranış, güvenlik açığı veya lisans sorununu doğrulamadan kullanmak.
- **Gizli veriyi araca vermek:** Mahremiyet ve güvenlik sınırlarını öğrenme hızı uğruna ihlal etmek.
- **İlerlemeyi yalnızca süreyle ölçmek:** Üretilen yeterlik kanıtını göz ardı etmek.
- **Tekrarı başarısızlık görmek:** Unutma sinyalini planı iyileştiren veri olarak kullanmamak.

## Best Practices

1. Oturum başlamadan tek hedef ve tek teslim kanıtı belirleyin.
2. Yeni konuya geçmeden önceki bilgiyi kaynağa bakmadan geri çağırın.
3. Öğrendikten hemen sonra küçük bir uygulama veya açıklama üretin.
4. Repository durumunu değişiklikten önce ve sonra kontrol edin.
5. Bir commit adayını tek amaçlı, test edilmiş ve bağımsız incelenebilir tutun.
6. Commit veya push yetkisini görev metninden açıkça doğrulayın.
7. Notlarda kaynağı kopyalamak yerine iddia, kanıt, örnek ve sınırı bağlayın.
8. Laboratuvarda hata hipotezlerini ve elenen seçenekleri kaydedin.
9. AI çıktısını resmî dokümantasyon ve çalışan testle doğrulayın.
10. Haftalık değerlendirmede takvimi değil, kanıt ve eksikliği esas alın.
11. Unutulan veya yanlış uygulanan konuları planlı tekrar kuyruğuna alın.
12. Yardım istemeden önce problem, beklenen sonuç, denenenler ve kanıtı hazırlayın.

## Hands-on Exercise

### Görev: Yedi günlük ASEA çalışma döngüsü

Kişisel bir deneme repository'sinde yedi gün boyunca tek bir küçük teknik kavram üzerinde çalışın. Bu görev, mevcut ASEA repository'sinde commit veya push yapılmasını istemez. Her gün 45-60 dakikalık bir oturum ve aşağıdaki teslimleri üretin:

1. Bir öğrenme hedefi ve ölçülebilir tamamlanma koşulu.
2. En az beş aktif hatırlama sorusu; birinci ve yedinci gün sonuçları.
3. Kaynak bağlantılı, kendi cümlelerinizle yazılmış iki kalıcı teknik not.
4. Başlangıç durumu, adımlar, en az bir hata hipotezi, doğrulama ve sonuç içeren bir lab raporu.
5. En az üç küçük yerel commit'ten oluşan deneme geçmişi; her biri tek amaçlı olmalı ve `git diff --staged` incelemesinden sonra oluşturulmalı.
6. Bir AI aracından alınmış öneri kullanıldıysa istemin gizli veri içermediğini, iddianın nasıl doğrulandığını ve hangi bölümün reddedildiğini gösteren kayıt; AI kullanılmadıysa bunun yerine iki bağımsız kaynağın karşılaştırması.
7. Planlanan-gerçek süre, tamamlanan kanıt, açık eksik ve sonraki tekrar tarihini içeren haftalık değerlendirme.

### Değerlendirme ölçütleri

| Ölçüt | Puan |
| --- | ---: |
| Hedef ve tamamlanma koşulunun açıklığı | 3 |
| Aktif hatırlama ve tekrar kanıtı | 4 |
| Teknik notların özgünlüğü ve kaynak kalitesi | 4 |
| Lab'ın tekrarlanabilirliği ve hata analizi | 5 |
| Commit'lerin kapsamı, mesajı ve doğrulaması | 4 |
| AI/kaynak doğrulama kaydı ve etik uygunluk | 3 |
| Haftalık ölçüm ve uyarlama kararı | 2 |
| **Toplam** | **25** |

Başarı eşiği 19/25'tir. Gizli bilgi içeren bir kayıt, açıklanamayan kopya kod veya doğrulanmamış AI çıktısı bulunursa görev puandan bağımsız olarak revizyona döner.

## Reflection Questions

1. Hangi çalışma etkinliği size ilerliyor hissi veriyor fakat yeterlik kanıtı üretmiyor?
2. Bir commit'in yeterince küçük ve anlamlı olduğunu nasıl doğrularsınız?
3. Hata günlüğünde hangi bilgi gelecekteki benliğiniz için en değerlidir?
4. AI yardımı hangi noktada öğrenme hızını artırır, hangi noktada düşünmeyi devralır?
5. Haftalık göstergelerinizden hangisi yanlış davranışı teşvik edebilir?
6. Bir konuyu tekrar etme veya yeni konuya geçme kararını hangi kanıtla verirsiniz?
7. Yardım isterken başka bir mühendisin problemi yeniden üretmesi için ne sunmalısınız?

## Chapter Summary

ASEA günlük kullanımda hedef, aktif uygulama, doğrulama, kayıt ve tekrar döngüsüyle çalışır. Git yerel değişiklik geçmişini; GitHub ise uzak iş birliği sürecini yönetir. Küçük ve doğrulanmış commit adayları, hem öğrenme geçmişini hem teknik incelemeyi iyileştirir. Notlar, laboratuvar raporları, quiz düzeltmeleri ve projeler aynı yeterlik için birbirini tamamlayan kanıtlardır. Yapay zekâ yalnızca gizlilik, açıklanabilirlik ve bağımsız doğrulama sınırları içinde yardımcıdır. İlerleme, geçirilen süreden çok giderek daha bağımsız üretilen mühendislik çıktısıyla ölçülür.

## Key Takeaways

- Her oturum gözlenebilir bir hedef ve doğrulama ile bitmelidir.
- Git ve GitHub aynı araç değildir; commit ile push farklı yetki ve etkiye sahiptir.
- İyi commit tek amaçlı, incelenmiş ve doğrulanmış bir değişiklik kaydıdır.
- Teknik not, kaynağın kopyası değil, yeniden kullanılabilir bir anlayış birimidir.
- Laboratuvarın değeri son çıktıyla birlikte hata ve karar kaydından gelir.
- AI çıktısı öneridir; doğruluk, güvenlik ve lisans sorumluluğu kullanıcıdadır.
- Tekrar planı ve ilerleme kararı ölçülebilir kanıta dayanmalıdır.

## Further Reading

- Git kitabının "Recording Changes to the Repository" bölümü, çalışma ağacı, hazırlama alanı ve commit ilişkisini uygulamalı biçimde açıklar.
- GitHub Flow rehberi, branch ve pull request üzerinden hafif bir iş birliği döngüsü sunar.
- Google'ın küçük değişiklik rehberi, commit ve inceleme kapsamı için pratik ölçütler verir.
- GitHub'ın sorumlu Copilot kullanımı belgeleri, AI çıktısının doğrulanması ve riskleri için ürün düzeyinde sınırlar açıklar.
- Chapter 02 — Learning Philosophy, aktif hatırlama, aralıklı tekrar, teknik not ve AI ile öğrenmenin pedagojik temelini ayrıntılandırır.

## References

1. Chacon, Scott ve Straub, Ben. [Pro Git — Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository). Git SCM. Erişim: 17 Temmuz 2026.
2. Git. [git-commit Documentation](https://git-scm.com/docs/git-commit). Erişim: 17 Temmuz 2026.
3. GitHub Docs. [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow). Erişim: 17 Temmuz 2026.
4. GitHub Docs. [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). Erişim: 17 Temmuz 2026.
5. Google. [Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html). Erişim: 17 Temmuz 2026.
6. Google. [Writing Good Change Descriptions](https://google.github.io/eng-practices/review/developer/cl-descriptions.html). Erişim: 17 Temmuz 2026.
7. GitHub Docs. [Responsible Use of GitHub Copilot Chat in Your IDE](https://docs.github.com/en/copilot/responsible-use/copilot-chat-in-your-ide). Erişim: 17 Temmuz 2026.
8. GitHub Docs. [Responsible Use of GitHub Copilot Code Review](https://docs.github.com/en/copilot/responsible-use/code-review). Erişim: 17 Temmuz 2026.
