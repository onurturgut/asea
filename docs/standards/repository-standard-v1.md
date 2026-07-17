# ASEA Repository Standard v1.0

Bu doküman ASEA repository'si içindeki tüm dosya, klasör ve Markdown yapısının ortak kurallarını belirler.

---

# 1. Purpose

Bu standardın amacı repository yapısını sade, ölçeklenebilir, tutarlı ve katkıya açık tutmaktır. Kurallar; dosyaların kolay bulunmasını, bağlantıların taşınabilir olmasını, değişikliklerin güvenle incelenmesini ve dokümantasyonun ortak araçlarla işlenebilmesini sağlar.

Bu standart repository genelindeki adlandırma, Markdown, varlık, sürüm kontrolü ve katkı süreçlerini kapsar. Chapter ve Volume içerikleri ayrıca kendi standartlarına uymalıdır:

- [ASEA Chapter Standard v1.0](./chapter-standard-v1.md)
- [ASEA Volume Standard v1.0](./volume-standard-v1.md)
- [ASEA Curriculum Standard v1.0](./curriculum-standard-v1.md)

---

# 2. Repository Structure

Üst düzey dizinler tek bir açık sorumluluğa sahip olmalıdır. Onaylı ana yapı aşağıdaki alanlardan oluşur:

```text
asea/
├── docs/
│   ├── standards/
│   └── <volume>/
├── labs/
├── projects/
├── quiz/
├── assets/
├── website/
├── README.md
├── ROADMAP.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE
```

- `docs/`, müfredat ve teknik dokümantasyonu barındırır.
- `docs/standards/`, bağlayıcı ASEA dokümantasyon standartlarını barındırır.
- `labs/`, Volume'ler arası veya repository düzeyindeki laboratuvar varlıklarını barındırır.
- `projects/`, bütünleşik Mini Project ve Capstone Project çalışmalarını barındırır.
- `quiz/`, ortak değerlendirme varlıklarını barındırır.
- `assets/`, birden fazla alan tarafından kullanılan varlıkları barındırır.
- `website/`, dokümantasyon sunum katmanını içerir; müfredatın tek doğruluk kaynağı değildir.

Aynı sorumluluğa sahip paralel klasörler oluşturulmamalıdır. Yeni üst düzey klasör, açık sahiplik ve ölçeklenebilirlik gerekçesi olmadan eklenmemelidir.

---

# 3. Folder Naming Convention

Tüm klasör adları küçük harfli kebab-case biçiminde olmalıdır.

Geçerli örnekler:

```text
00-academy/
software-foundations/
version-control-labs/
```

Geçersiz örnekler:

```text
SoftwareFoundations/
software_foundations/
Yazılım-Temelleri/
```

Klasör adları:

- Yalnızca ASCII küçük harf, rakam ve tek tire kullanmalıdır.
- Türkçe karakter, boşluk, alt çizgi veya gereksiz kısaltma içermemelidir.
- Aynı düzeyde benzersiz ve anlamlı olmalıdır.
- Sıralama gerekiyorsa iki basamaklı sayısal ön ek kullanmalıdır: `00-academy`, `01-example-volume`.
- Sonunda veya art arda tire içermemelidir.

---

# 4. File Naming Convention

Dosya adları küçük harfli kebab-case biçiminde olmalıdır. Türkçe karakter, boşluk ve alt çizgi kullanılmamalıdır.

Geçerli örnekler:

```text
learning-outcomes.md
01-welcome-to-asea.md
chapter-standard-v1.md
```

Repository ekosistemi tarafından adı sabitlenen kök dosyalar istisnadır: `README.md`, `LICENSE`, `ROADMAP.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` ve `SECURITY.md`.

Dosya adları içeriğin amacını belirtmeli; `new`, `final`, `copy`, `misc` veya tarih tabanlı geçici ekler kullanılmamalıdır. Sürümlü standartlarda `-v<major>` biçimi kullanılmalıdır.

---

# 5. Markdown Rules

Markdown belgeleri CommonMark ile uyumlu olmalı ve repository'nin desteklediği GitHub Flavored Markdown özelliklerini kontrollü kullanmalıdır.

- Belgenin tek bir H1 başlığı olmalıdır.
- Başlık seviyeleri atlanmamalıdır: H1 → H2 → H3.
- ATX başlık biçimi kullanılmalıdır: `#`, `##`, `###`.
- Başlıklardan önce ve sonra bir boş satır bulunmalıdır.
- Liste işaretleri aynı liste içinde tutarlı olmalıdır.
- İç içe listeler doğru girintilenmelidir.
- Paragrafları hizalamak için gereksiz boşluk veya HTML kullanılmamalıdır.
- Satır sonu boşlukları bırakılmamalıdır.
- Ham HTML yalnızca Markdown ile karşılanamayan ve hedef oluşturucuda doğrulanmış durumlarda kullanılmalıdır.
- Yer tutucu metin, yorum içine gizlenmiş görev veya çözümlenmemiş `TODO` bulunmamalıdır.
- Teknik terimler ilk kullanımda Türkçe ve İngilizce birlikte verilmelidir.

Chapter ve Volume başlık sıraları kendi standartlarında tanımlandığı biçimde korunmalıdır.

---

# 6. Front Matter Rules

Front Matter, kendisi için bir şema tanımlanmış tüm Markdown içeriklerinde zorunludur ve dosyanın en üstünde geçerli YAML olarak bulunmalıdır.

Genel kurallar:

- Ayraç olarak tek başına `---` kullanılmalıdır.
- Zorunlu alanlar eksik veya boş bırakılmamalıdır.
- Alan adları küçük harfli snake_case olmalıdır.
- Metin değerleri çift tırnakla yazılmalıdır.
- Liste alanları YAML listesi olmalıdır; virgülle ayrılmış metin kullanılmamalıdır.
- Tarihler kullanılıyorsa ISO 8601 biçiminde yazılmalıdır.
- Tanımsız alan eklenmeden önce ilgili içerik standardı güncellenmelidir.
- `status`, ilgili standartta izin verilen değerlerden biri olmalıdır.

Chapter dosyaları Chapter Standard şemasını, Volume `README.md` dosyaları Volume Standard şemasını kullanmalıdır. Repository kökündeki topluluk ve lisans dosyaları, adları ve biçimleri ekosistem sözleşmeleriyle belirlendiği için kendi tanımlı yapısını korur.

---

# 7. Internal Linking

Repository içindeki tüm bağlantılar göreli (relative) olmalıdır. Yerel dosyalara mutlak işletim sistemi yolu, `file://` URI'si veya repository sahibine özgü URL verilmemelidir.

```markdown
[Chapter Standard](../../standards/chapter-standard-v1.md)
[Learning Outcomes](./learning-outcomes.md)
```

- Bağlantı hedefi mevcut olmalıdır.
- Dosya ve klasör adının büyük-küçük harfi hedefle tam eşleşmelidir.
- Klasöre değil, mümkün olduğunda açıklayıcı belgeye bağlantı verilmelidir.
- Başlık bağlantısı kullanılıyorsa hedef anchor üretilen sitede doğrulanmalıdır.
- Dosya taşındığında gelen ve giden bağlantılar aynı değişiklikte güncellenmelidir.
- "Buraya tıklayın" yerine hedefi açıklayan bağlantı metni kullanılmalıdır.
- Dış kaynağın yerine repository içinde kopya üretmek yerine, gerekli bağlam verilip resmî kaynağa bağlantı verilmelidir.

---

# 8. Asset Management

Varlıklar (assets), kapsamlarına en yakın `assets/` klasöründe tutulmalıdır. Tek Volume'a ait varlık ilgili Volume altında; birden fazla alanın kullandığı varlık kök `assets/` altında yer almalıdır.

- Dosya adları küçük harfli kebab-case olmalıdır.
- Aynı varlığın gereksiz kopyaları oluşturulmamalıdır.
- Kaynak, lisans ve kullanım izni kayıt altına alınmalıdır.
- Düzenlenebilir kaynak dosya ile dışa aktarılan çıktı karıştırılmamalıdır.
- Büyük ikili dosyalar eklenmeden önce boyut, sürümleme ve dağıtım etkisi değerlendirilmelidir.
- Kullanılmayan varlıklar içerik bağlantıları doğrulandıktan sonra kaldırılmalıdır.
- Hassas bilgi, erişim anahtarı, kişisel veri veya özel üretim verisi varlık olarak eklenmemelidir.

---

# 9. Code Block Standards

Her fenced code block, içerikle eşleşen bir dil etiketi kullanmalıdır.

````markdown
```javascript
const total = items.reduce((sum, item) => sum + item.price, 0);
```
````

Metin çıktısı için `text`, terminal oturumu için `console`, yapılandırma için uygun biçim etiketi kullanılmalıdır. Dil etiketi olmayan kod bloğu kabul edilmez.

Kod örnekleri:

- Belirtilen sürüm ve ortamda çalıştırılabilir olmalıdır.
- Amaç, girdi, beklenen çıktı ve önemli kararlarla açıklanmalıdır.
- Gereksiz bağımlılık içermemelidir.
- Güvenli varsayılanlar kullanmalı; gerçek parola veya anahtar içermemelidir.
- Hata gösterimi amaçlanmıyorsa söz dizimi ve çalışma hatası içermemelidir.
- Kopyalandığında tehlikeli veya yıkıcı işlem yapmamalıdır; gerekli risk uyarısı koddan önce verilmelidir.
- Uzunsa yalnızca öğrenme hedefiyle ilgili bölüme indirgenmeli ve eksiltme açıkça belirtilmelidir.

Komut istemi karakteri (`$`, `>`) yalnızca gerçek terminal oturumunu gösterirken kullanılmalıdır; kopyalanacak komutun parçası gibi sunulmamalıdır.

---

# 10. Tables

Tablolar yalnızca tekrarlanan alanları veya karşılaştırmaları metinden daha açık gösterdiğinde kullanılmalıdır.

- Her tablonun bir başlık satırı ve ayraç satırı olmalıdır.
- Sütun başlıkları kısa ve açıklayıcı olmalıdır.
- Hücreler uzun paragraflarla doldurulmamalıdır.
- Sayısal değerler sağa, metin değerleri sola hizalanmalıdır.
- Boş hücre yerine `Uygulanamaz` veya kısa bir açıklama kullanılmalıdır.
- Tablo tek başına gerekli bağlamı vermiyorsa öncesinde açıklayıcı cümle bulunmalıdır.
- Mobil görünümde okunamayacak kadar geniş tablolar liste veya alt bölümlere dönüştürülmelidir.

---

# 11. Images

Görseller açıklayıcı dosya adı, göreli yol ve anlamlı alternatif metinle kullanılmalıdır.

```markdown
![ASEA öğrenme ilerleyişi](../assets/learning-progression.png)
```

- Alternatif metin görselin öğrenme amacını açıklamalıdır; `image` veya dosya adını tekrar etmemelidir.
- Dekoratif görseller içerik değeri üretmiyorsa eklenmemelidir.
- Metin içeren diyagramlarda okunabilir kontrast ve çözünürlük sağlanmalıdır.
- Açık ve koyu temada görünürlük kontrol edilmelidir.
- Ekran görüntülerinde kişisel veya gizli veri bulunmamalıdır.
- Kaynak ve lisans bilgisi `references.md` veya varlık kaydında belirtilmelidir.
- Görseldeki kritik bilgi metin içinde de erişilebilir olmalıdır.

---

# 12. References

Kaynaklar belgenin sonunda `References` başlığı altında ve ilk kullanım sırasına veya tutarlı alfabetik sıraya göre verilmelidir.

Standart biçim:

```markdown
1. Kurum veya Yazar. [Kaynak Başlığı](https://example.org/source). Sürüm veya yayın tarihi. Erişim: 17 Temmuz 2026.
```

- Yazar veya sorumlu kurum belirtilmelidir.
- Bağlantı doğrudan kaynak belgeye gitmelidir; arama sonucu kullanılmamalıdır.
- Sürüm ve yayın tarihi teknik davranış için önemliyse eklenmelidir.
- Değişebilen web kaynaklarında erişim tarihi bulunmalıdır.
- Aynı kaynak gereksiz yere birden fazla kayıt olarak eklenmemelidir.
- Resmî dokümantasyon, standart ve birincil araştırma öncelikli olmalıdır.
- Doğrudan alıntılar açıkça işaretlenmeli ve lisans/telif sınırlarına uymalıdır.

---

# 13. Versioning

Repository sürümleri `MAJOR.MINOR.PATCH` biçimindeki Anlamsal Sürümleme (Semantic Versioning) yaklaşımını izlemelidir:

- `MAJOR`: Geriye uyumsuz yapı, sözleşme veya yayın değişikliği.
- `MINOR`: Geriye uyumlu yeni içerik veya özellik.
- `PATCH`: Geriye uyumlu düzeltme ve küçük iyileştirme.

Standart doküman dosya adında yalnızca major sürümü taşır: `repository-standard-v1.md`. Aynı major sürüm içindeki küçük değişiklikler belgenin değişiklik kaydında izlenir. Uyumsuz kural değişikliği yeni dosya üretir: `repository-standard-v2.md`.

Yayınlanmış sürüm sessizce değiştirilmemeli; sürüm etiketi, değişiklik özeti ve yayın tarihi kaydedilmelidir. Sürümleme için [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) esas alınır.

---

# 14. Branch Strategy

ASEA, kısa ömürlü branch'lere dayanan GitHub Flow yaklaşımını kullanır.

- Kararlı ana branch `main` olmalıdır.
- Doğrudan `main` üzerinde özellik veya içerik geliştirilmemelidir.
- Her branch tek bir issue, görev veya açık değişiklik amacına hizmet etmelidir.
- Branch adı küçük harfli kebab-case olmalı ve tür ön eki içermelidir.

```text
docs/volume-00-roadmap
feat/search-index
fix/broken-chapter-link
chore/update-dependencies
```

- Branch düzenli olarak güncel `main` ile uyumlu tutulmalıdır.
- Birleştirilmiş veya terk edilmiş branch'ler silinmelidir.
- Uzun ömürlü entegrasyon branch'i açık teknik gerekçe olmadan oluşturulmamalıdır.
- Korunan branch kuralları ve zorunlu kontroller atlanmamalıdır.

İş akışı GitHub'ın [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) rehberiyle uyumlu yürütülmelidir.

---

# 15. Commit Message Convention

Tüm commit mesajları Conventional Commits 1.0.0 biçimine uymalıdır:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

ASEA için temel türler:

| Tür | Kullanım |
| --- | --- |
| `feat` | Yeni kullanıcıya dönük özellik veya öğrenme bileşeni |
| `fix` | Hatalı davranış veya içeriğin düzeltilmesi |
| `docs` | Yalnızca dokümantasyon değişikliği |
| `test` | Test ekleme veya düzeltme |
| `refactor` | Davranışı değiştirmeyen kod yapısı değişikliği |
| `style` | Davranışı etkilemeyen biçim değişikliği |
| `build` | Derleme sistemi veya bağımlılık değişikliği |
| `ci` | Sürekli entegrasyon yapılandırması |
| `chore` | Diğer bakım işleri |
| `revert` | Önceki bir commit'in geri alınması |

Örnekler:

```text
docs(volume-00): add academy roadmap chapter
fix(links): correct chapter standard reference
feat(search): build documentation search index
```

- Açıklama kısa, somut ve yapılan değişikliği ifade etmelidir.
- Scope küçük harfli ve repository alanıyla ilişkili olmalıdır.
- Commit tek bir mantıksal amacı taşımalıdır.
- Gerekçe gerekli olduğunda gövdede açıklanmalıdır.
- Issue bağlantısı veya inceleme bilgisi footer olarak eklenebilir.
- Geriye uyumsuz değişiklik `!` veya `BREAKING CHANGE:` footer'ıyla belirtilmelidir.
- Gizli veri, anlamsız mesaj veya otomatik üretilmiş bağlamsız açıklama kullanılmamalıdır.

Bağlayıcı sözdizimi için [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) esas alınır.

---

# 16. Pull Request Rules

Her pull request tek bir açık amaca sahip, incelenebilir büyüklükte ve kendi içinde tamamlanmış olmalıdır.

Pull request açıklaması şunları içermelidir:

- Problem veya ihtiyaç.
- Yapılan değişikliklerin özeti.
- Kapsam dışı bırakılan konular.
- Doğrulama ve test kanıtı.
- Dokümantasyon, bağlantı ve varlık etkisi.
- İlgili issue veya karar kaydı.
- Risk, geçiş ve geri alma bilgisi.

Birleştirme öncesinde:

- Zorunlu otomatik kontroller geçmelidir.
- Markdown, bağlantı ve kod doğrulamaları tamamlanmalıdır.
- İlgili standartlara uyum kontrol edilmelidir.
- En az bir yetkili inceleme alınmalıdır; yüksek riskli değişiklikte alan uzmanı incelemesi gerekir.
- Açık inceleme yorumları çözülmeli veya gerekçeli biçimde ertelenmelidir.
- Branch güncel olmalı ve çözülmemiş çakışma içermemelidir.
- Gizli bilgi ve lisans ihlali bulunmadığı doğrulanmalıdır.

Yazar kendi değişikliğini incelemeli; ancak gerekli bağımsız onayın yerine geçmemelidir. Acil değişiklikler sonradan inceleme ve kayıt yükümlülüğünü ortadan kaldırmaz.

---

# 17. Documentation Quality Rules

Repository dokümantasyonu aşağıdaki kalite kapılarını karşılamalıdır:

- Amaç, hedef okuyucu ve kapsam açık olmalıdır.
- Front Matter ilgili içerik şemasına eksiksiz uymalıdır.
- Markdown başlık hiyerarşisi korunmalıdır.
- Dosya ve klasör adları belirlenen kebab-case kurallarına uymalıdır.
- İç bağlantılar göreli ve çalışır olmalıdır.
- Kod bloklarında doğru dil etiketi bulunmalıdır.
- Kod örnekleri çalıştırılabilir, güvenli ve açıklanmış olmalıdır.
- Tablolar ve görseller erişilebilir olmalıdır.
- Teknik terimler ilk kullanımda Türkçe ve İngilizce birlikte verilmelidir.
- Teknik iddialar güvenilir, güncel ve doğrudan kaynakla desteklenmelidir.
- Referanslar standart biçimde verilmelidir.
- Gereksiz tekrar, çelişki, yer tutucu veya tamamlanmamış bölüm bulunmamalıdır.
- Gerçek şirket örnekleri doğrulanabilir olmalıdır.
- Değişiklik, ilişkili navigasyon ve bağımlılık dosyalarını tutarlı bırakmalıdır.
- Belge hedeflenen oluşturucuda veya Markdown görüntüleyicide doğru render edilmelidir.

Bir belge ancak içerik, teknik doğruluk, bağlantı, biçim ve repository uyumu birlikte doğrulandıktan sonra `Stable` durumuna alınabilir.

---

# References

1. CommonMark. [CommonMark Specification 0.31.2](https://spec.commonmark.org/0.31.2/). 28 Ocak 2024. Erişim: 17 Temmuz 2026.
2. GitHub Docs. [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow). Erişim: 17 Temmuz 2026.
3. Conventional Commits. [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). Erişim: 17 Temmuz 2026.
4. Semantic Versioning. [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html). Erişim: 17 Temmuz 2026.

---
