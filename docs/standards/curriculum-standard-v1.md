# ASEA Curriculum Standard v1.0

Bu doküman ASEA'nın tüm müfredatının (Curriculum) nasıl tasarlanacağını tanımlar.

---

# 1. Purpose

ASEA müfredatı, öğrenciyi temel kavramlardan bağımsız yazılım mühendisliği uygulamasına taşıyan tutarlı bir öğrenme sistemi olmalıdır. Müfredat; Volume, Chapter, laboratuvar, proje, değerlendirme ve yansıtma etkinliklerini ortak öğrenme çıktıları etrafında birleştirir.

Bu standart:

- Müfredatın kapsamını ve ilerleme mantığını tanımlar.
- Volume ve Chapter bağımlılıklarının nasıl kurulacağını belirler.
- Öğrenme çıktıları, uygulama ve değerlendirme arasındaki izlenebilirliği zorunlu kılar.
- İçerik tekrarını, kaynaksız iddiaları ve ölçülemeyen hedefleri önler.
- Müfredat değişikliklerinin incelenebilir ve sürümlenebilir olmasını sağlar.

Bu standart, [ASEA Volume Standard v1.0](./volume-standard-v1.md) ve [ASEA Chapter Standard v1.0](./chapter-standard-v1.md) ile birlikte uygulanmalıdır.

---

# 2. Curriculum Principles

ASEA müfredatı aşağıdaki ilkelere uymalıdır:

1. **Concept First:** Teknoloji veya dil sözdiziminden önce temel kavram öğretilmelidir.
2. **Progressive Difficulty:** Konular kolaydan zora, somuttan soyuta ve yönlendirilmiş uygulamadan bağımsız çözüme ilerlemelidir.
3. **Engineering Context:** Her teknik konu gerçek yazılım mühendisliği kararları, kısıtları ve ödünleşimleriyle ilişkilendirilmelidir.
4. **Active Learning:** Öğrenci yalnızca içerik tüketmemeli; açıklama, uygulama, hata ayıklama, değerlendirme ve yansıtma çıktısı üretmelidir.
5. **Measurable Outcomes:** Her öğrenme çıktısı gözlenebilir bir davranış ve doğrulanabilir bir başarı koşulu içermelidir.
6. **Explicit Dependencies:** Ön koşullar Volume ve Chapter düzeyinde açıkça belirtilmelidir.
7. **No Unnecessary Duplication:** Aynı kavram birden fazla yerde yeniden öğretilmemeli; önceki içerik göreli bağlantıyla referans verilerek yeni bağlamda uygulanmalıdır.
8. **Official Documentation First:** Güncel teknik davranışlar için öncelikle resmî standartlar, spesifikasyonlar ve üretici belgeleri kullanılmalıdır.
9. **Evidence over Completion:** İlerleme, okunan sayfa veya geçirilen süreyle değil, üretilen öğrenme kanıtıyla değerlendirilmelidir.
10. **Accessibility and Clarity:** Dil açık, yapı öngörülebilir ve örnekler gerekli ön bilgiye uygun olmalıdır.

---

# 3. Learning Progression

Her öğrenme birimi aşağıdaki zorunlu akışı izlemelidir:

**Concept → Example → Practice → Challenge → Assessment → Reflection**

| Aşama | Amaç | Beklenen çıktı |
| --- | --- | --- |
| Concept | Kavramı, terminolojiyi ve çalışma modelini açıklamak | Öğrencinin kendi cümleleriyle doğru açıklama |
| Example | Kavramın kontrollü ve açıklanmış kullanımını göstermek | Girdi, süreç ve sonucu yorumlama |
| Practice | Yönlendirilmiş uygulamayla temel davranışı tekrar etmek | Doğrulanmış çalışma çıktısı |
| Challenge | Bilgiyi daha az yönlendirilmiş yeni bir probleme aktarmak | Gerekçelendirilmiş bağımsız çözüm |
| Assessment | Hedeflenen yeterliğin oluşup oluşmadığını ölçmek | Rubrik, test veya soru setiyle değerlendirme kanıtı |
| Reflection | Sonucu, hataları ve sonraki adımı değerlendirmek | Somut iyileştirme ve tekrar kararı |

Bu aşamalardan biri yalnızca biçimsel olarak bulunmamalıdır. Her aşama, aynı öğrenme çıktısına hizmet etmeli ve bir sonraki aşamaya gerekli kanıtı sağlamalıdır.

İlerleme aşağıdaki sıralama ilkelerine uymalıdır:

- Tek kavramdan kavram birleşimlerine.
- Düşük belirsizlikten açık uçlu problemlere.
- Yönlendirilmiş örnekten bağımsız tasarıma.
- Yerel davranıştan sistem etkilerine.
- Anlık doğrulamadan bakım ve işletim sorumluluğuna.

---

# 4. Volume Dependencies

Her Volume, kendisinden önce gereken yeterlikleri ve sonrasında desteklediği yeterlikleri tanımlamalıdır. Bağımlılıklar yalnızca Volume numarasına dayanmamalı; ölçülebilir hazır bulunuşluk koşulları içermelidir.

Her Volume için aşağıdaki bilgiler bulunmalıdır:

- Doğrudan ön koşul olan Volume'ler.
- Ön koşullardan beklenen öğrenme çıktıları.
- Ön koşulun nasıl doğrulanacağı.
- Eksik ön koşul için önerilen geri dönüş yolu.
- Bu Volume'un hazırladığı sonraki yeterlik alanları.

Bağımlılık grafiği döngü içermemelidir. Bir Volume'un tamamlanması kendisine veya kendisinden sonraki bir Volume'a bağlı olamaz. Paralel tamamlanabilecek Volume'ler ayrıca belirtilmeli ve ortak ön koşulları gösterilmelidir.

Bir Volume yalnızca gerekli ön bilgiye bağımlı olmalıdır. Kolaylık amacıyla gereksiz ön koşul eklemek öğrenme yolunu yapay biçimde uzatır.

---

# 5. Chapter Dependencies

Her Chapter'ın `prerequisites` alanı, gereken Chapter'ları veya açık yeterlikleri belirtmelidir. "Önceki bölümü okumak" tek başına yeterli bir ön koşul değildir; öğrencinin hangi davranışı gösterebilmesi gerektiği açıklanmalıdır.

Chapter bağımlılıkları şu kurallara uymalıdır:

- Yeni terim, daha önce tanımlanmışsa ilgili Chapter'a göreli bağlantı verilmelidir.
- Bir Chapter, henüz öğretilmemiş bir kavramı açıklamasız kullanmamalıdır.
- Aynı kavram tekrar öğretilmemeli; yeni kullanım bağlamı ve artan zorluk açıkça belirtilmelidir.
- İleri yönlü zorunlu bağımlılık kurulamaz.
- Bağımlılık değişikliği, etkilenen Chapter Map ve Volume Roadmap dosyalarında birlikte güncellenmelidir.
- İlgili laboratuvar ve proje bağlantıları Chapter'ın öğrenme çıktılarıyla eşleşmelidir.

Her Chapter için "Related Next Chapter" ilişkisi yönlendirme amacı taşır; ön koşul kanıtının yerine geçmez.

---

# 6. Learning Outcomes Rules

Öğrenme çıktısı (learning outcome), öğrencinin eğitim sonunda göstereceği gözlenebilir davranışı tanımlar. Her çıktı:

- Öğrenciyi özne kabul etmelidir.
- Tek bir temel davranış içermelidir.
- `açıklamak`, `uygulamak`, `karşılaştırmak`, `tasarlamak`, `doğrulamak`, `hata ayıklamak` veya `değerlendirmek` gibi ölçülebilir fiil kullanmalıdır.
- Uygulama bağlamını veya koşulunu belirtmelidir.
- Başarı kanıtı ve değerlendirme yöntemiyle eşleştirilmelidir.
- Volume seviyesi ve tahmini süre içinde ulaşılabilir olmalıdır.

Ölçülemeyen ifadeler kullanılmamalıdır:

- Uygun değil: "Git'i öğrenmek."
- Uygun: "Yerel bir repository'de değişiklikleri seçerek tek amaçlı bir commit oluşturabilmek."
- Uygun değil: "Ölçeklenebilirliği anlamak."
- Uygun: "İki mimari seçeneği ölçülebilir yük, gecikme ve maliyet ölçütleriyle karşılaştırabilmek."

Her Volume çıktısı en az bir Chapter hedefi, bir uygulama etkinliği ve bir değerlendirme ölçütüyle izlenebilir olmalıdır. Hiçbir etkinlik bir öğrenme çıktısına bağlanmadan müfredata eklenmemelidir.

---

# 7. Practice Strategy

Uygulama, öğrenme ilerleyişinin her seviyesinde bulunmalıdır. Uygulamalar aşağıdaki sırayla zorlaşmalıdır:

1. **Yönlendirilmiş örnek:** Öğrenci açıklanmış davranışı inceler ve sonucu tahmin eder.
2. **Yönlendirilmiş laboratuvar:** Açık adımlarla temel mekanizmayı uygular.
3. **Kısmi yönlendirilmiş görev:** Hedef ve kısıt verilir, çözüm adımlarını öğrenci seçer.
4. **Challenge:** Öğrenci yeni bağlamda seçenek üretir, uygular ve kararını savunur.
5. **Proje:** Birden fazla öğrenme çıktısını bütünleşik bir üründe gösterir.
6. **Capstone:** Belirsiz ve gerçekçi bir problemi gereksinimden değerlendirmeye kadar bağımsız yönetir.

Her Chapter en az bir laboratuvarla desteklenmelidir. Her Volume, [ASEA Volume Standard v1.0](./volume-standard-v1.md) gereğince en az üç Mini Project ve bir Capstone Project içermelidir.

Uygulamalar:

- Tekrarlanabilir başlangıç koşulu sunmalıdır.
- Teslim edilecek dosya veya davranışı açıkça tanımlamalıdır.
- Çalıştırılabilir doğrulama veya ölçülebilir rubrik içermelidir.
- Güvenlik, lisans ve veri gizliliği sınırlarını belirtmelidir.
- Başarısız denemelerin analiz edilmesine alan açmalıdır.
- Çözüm kopyalamayı değil karar üretmeyi gerektirmelidir.

---

# 8. Assessment Strategy

Değerlendirme stratejisi, hatırlamadan bağımsız mühendislik uygulamasına kadar farklı kanıt türlerini birlikte kullanmalıdır.

Her Chapter sonunda:

- Temel kavramlar için Quiz.
- Gerekçe ve ödünleşimler için Open-ended Questions.
- Uygulanabilir beceri için Hands-on Lab.
- Öğrenme süreci için Reflection.

Her Volume sonunda:

- Kapsamı temsil eden Final Quiz.
- Kod, tasarım ve dokümantasyonu kapsayan Technical Review.
- Bütünleşik yeterlikler için Capstone Review.
- Kanıt ve eksiklik analizi için Self Assessment.

Her değerlendirme:

- Hangi öğrenme çıktısını ölçtüğünü belirtmelidir.
- Başarı eşiği ve revizyon koşulu içermelidir.
- Mümkünse örnek performans seviyeleri içeren rubrik kullanmalıdır.
- Otomatik kontrolün ölçemediği tasarım, iletişim ve yansıtma niteliklerini insan incelemesiyle tamamlamalıdır.
- Geri bildirimden sonra yeniden denemeye izin veren koşulları açıklamalıdır.

Soru sayısı veya test geçişi tek başına Volume tamamlanma kanıtı olamaz.

---

# 9. Curriculum Quality Rules

Müfredat aşağıdaki kalite kurallarına uymalıdır:

- Öğrenme ilerleyişi **Concept → Example → Practice → Challenge → Assessment → Reflection** sırasını korumalıdır.
- Konular kolaydan zora ilerlemelidir.
- Volume ve Chapter ön koşulları açık ve doğrulanabilir olmalıdır.
- Gereksiz veya çelişkili içerik tekrarı bulunmamalıdır.
- Öğrenme çıktıları ölçülebilir olmalıdır.
- Her çıktı, uygulama ve değerlendirme kanıtıyla eşleşmelidir.
- Teknik iddialar güncel ve güvenilir kaynaklarla desteklenmelidir.
- Resmî dokümantasyon, spesifikasyon ve standartlar öncelikli olmalıdır.
- Kod örnekleri belirtilen ortamda çalıştırılabilir ve açıklanmış olmalıdır.
- Gerçek dünya örnekleri doğrulanabilir olmalı; pazarlama iddiaları kanıt gibi kullanılmamalıdır.
- Zorluk, süre ve kapsam birbiriyle gerçekçi olmalıdır.
- Erişilemeyen bağlantı, yer tutucu içerik veya tanımsız kısaltma bulunmamalıdır.
- Müfredat değişikliği bağımlılık, uygulama ve değerlendirme üzerindeki etkileriyle incelenmelidir.

---

# 10. Official Sources

Kaynak seçiminde aşağıdaki öncelik sırası kullanılmalıdır:

1. Uluslararası standartlar ve yayımlanmış spesifikasyonlar.
2. Teknolojinin resmî dokümantasyonu ve sürüm notları.
3. ACM, IEEE Computer Society ve benzeri mesleki kuruluşların müfredat rehberleri.
4. Hakemli akademik araştırmalar ve sistematik incelemeler.
5. Tanınmış teknik kitaplar.
6. Güvenilir mühendislik ekiplerinin doğrulanabilir vaka çalışmaları.

Topluluk yazıları ve eğitim videoları destekleyici kaynak olabilir; resmî davranış tanımı yerine kullanılamaz. Kaynak sürümü, yayın tarihi ve erişim tarihi konu için önemliyse belirtilmelidir. Değişebilen ürün davranışı eski kaynakla kesin gerçek olarak sunulmamalıdır.

Temel başvuru kaynakları:

- ACM ve IEEE Computer Society, [Software Engineering 2014 Curriculum Guidelines](https://www.acm.org/binaries/content/assets/education/se2014.pdf).
- IEEE Computer Society, [Guide to the Software Engineering Body of Knowledge — SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering).
- IETF, [RFC Index](https://www.rfc-editor.org/standards).
- W3C, [Standards and Drafts](https://www.w3.org/TR/).

---

# 11. Curriculum Review Process

Yeni veya değiştirilen müfredat aşağıdaki süreçten geçmelidir:

1. **Scope Review:** Amaç, hedef öğrenci, kapsam dışı konular ve ön koşullar incelenir.
2. **Dependency Review:** Volume ve Chapter bağımlılıklarında boşluk, döngü veya gereksiz tekrar aranır.
3. **Outcome Review:** Öğrenme çıktılarının ölçülebilirliği ve izlenebilirliği doğrulanır.
4. **Technical Review:** Teknik doğruluk, kod örnekleri, sürüm bilgisi ve kaynaklar kontrol edilir.
5. **Practice Review:** Laboratuvar, challenge ve projelerin uygulanabilirliği denenir.
6. **Assessment Review:** Değerlendirmelerin hedeflenen çıktıları gerçekten ölçüp ölçmediği incelenir.
7. **Content Review:** Dil, başlık hiyerarşisi, bağlantılar ve gereksiz tekrar kontrol edilir.
8. **Repository Review:** Dosya yapısı ve repository standardına uyum doğrulanır.
9. **Release Decision:** Açık kritik bulgu yoksa uygun sürüm ve durum atanır.

İnceleme kaydı; bulunan sorunları, verilen kararları, sorumluları ve kapanış kanıtını içermelidir. Teknik doğruluğu veya öğrenme güvenliğini etkileyen bulgular kapanmadan içerik `Stable` olamaz.

---

# 12. Versioning

Müfredat, `MAJOR.MINOR.PATCH` biçimindeki Anlamsal Sürümleme (Semantic Versioning) yaklaşımını kullanmalıdır:

- **MAJOR:** Öğrenme yolu, temel ön koşullar veya yeterlik beklentileriyle geriye uyumsuz değişiklik.
- **MINOR:** Mevcut yolu bozmadan yeni Volume, Chapter, öğrenme çıktısı veya değerlendirme eklenmesi.
- **PATCH:** Teknik düzeltme, bağlantı onarımı, açıklık iyileştirmesi veya sonucu değiştirmeyen küçük düzenleme.

Yayın öncesi durumlar `0.y.z` sürümleri veya `-draft`, `-review` ve `-rc` ön ekleriyle belirtilebilir. `1.0.0`, yayımlanan ilk kararlı müfredatı ifade eder. Yayınlanmış bir sürüm sessizce değiştirilmemeli; her değişiklik yeni bir sürüm ve değişiklik kaydı üretmelidir.

Sürüm değişikliğinde en az şu bilgiler kaydedilmelidir:

- Değişikliğin kapsamı ve gerekçesi.
- Etkilenen Volume, Chapter ve öğrenme çıktıları.
- Ön koşul ve değerlendirme etkisi.
- Geçiş veya yeniden çalışma gereksinimi.
- İnceleme ve yayın tarihi.

Sürümleme ayrıntıları için [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) temel alınır.

---
