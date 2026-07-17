---
document_type: "standard"
standard_id: "ASEA-STD-REPOSITORY-002"
title: "ASEA Repository Standard v2.0"
version: "2.0.0"
status: "Stable"
supersedes: "repository-standard-v1.md"
---

# ASEA Repository Standard v2.0

Bu standart, ASEA repository'sindeki ortak dosya, metadata, kimlik, durum, sürümleme, inceleme ve doğrulama sözleşmelerini tanımlar. Eğitim tasarımına ilişkin kurallar [Curriculum Standard v2.0](./curriculum-standard-v2.md), Volume paketleme kuralları [Volume Standard v2.0](./volume-standard-v2.md), Chapter içerik kuralları ise [Chapter Standard v2.0](./chapter-standard-v2.md) kapsamındadır.

## 1. Purpose

Amaç; Volume 00–14 ve daha sonraki genişlemelerde insan tarafından okunabilen, makine tarafından doğrulanabilen, teknoloji bağımsız ve tutarlı bir repository sözleşmesi sağlamaktır. Bu standart ortak kuralların tek otoritesidir; daha özel standartlar bu kuralları daraltabilir ancak zayıflatamaz veya yeniden tanımlayamaz.

## 2. Standard Language

Bu belgede **MUST/ZORUNLU**, **MUST NOT/YASAK**, **SHOULD/ÖNERİLEN** ve **MAY/İZİNLİ** sözcükleri sırasıyla zorunluluk, yasak, güçlü öneri ve izin bildirir. Şemalarda listelenen alanlar, açıkça `optional` denmedikçe zorunludur.

## 3. Repository Structure

Repository kökünde yönetişim belgeleri ve aşağıdaki içerik alanları bulunabilir:

```text
repository-root/
├── README.md
├── ROADMAP.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE
├── docs/
│   ├── standards/
│   └── {volume-number}-{volume-slug}/
├── labs/
├── projects/
├── quiz/
└── assets/
```

Volume içi zorunlu yapı Volume Standard v2.0 tarafından belirlenir. Kök düzeyindeki `labs/`, `projects/` ve `quiz/` dizinleri yalnızca volume'lar arası paylaşılan içerik veya yönlendirme amacıyla kullanılabilir; Volume'a ait kanonik içerik ilgili Volume dizininde tutulur.

## 4. Folder and File Naming

### 4.1 Folder Naming

- Dizin adları küçük harfli kebab-case olmalıdır: `chapter-blueprints/`.
- Volume dizinleri iki haneli sıra ve slug kullanmalıdır: `01-programming/`.
- Türkçe karakter, boşluk, alt çizgi ve büyük harf kullanılmamalıdır.
- Sayısal sıralama gerekiyorsa sabit genişlikli ön ek kullanılmalıdır: `01-introduction.md`.

### 4.2 File Naming

- İçerik dosyaları küçük harfli kebab-case olmalıdır.
- `README.md`, repository kökündeki yönetişim dosyaları ve `LICENSE` açık istisnalardır.
- Kanonik yayın dosyası `release.md`, değişiklik geçmişi `changelog.md` adını kullanır.
- Review dosyaları `{scope-slug}-{review-type}-review.md` biçimindedir; örnek: `volume-01-technical-review.md`.
- Lab dosyaları `{chapter-number}-lab-{sequence}-{slug}.md` biçimindedir.
- Chapter Quiz dosyaları `{chapter-number}-quiz-{sequence}-{slug}.md`; Volume Final Quiz dosyası `final-quiz-{sequence}-{slug}.md` biçimindedir.
- Challenge dosyaları `{chapter-number}-challenge-{sequence}-{slug}.md` biçimindedir.
- Project dosyaları `project-{sequence}-{slug}.md`; capstone dosyası `capstone-{slug}.md` biçimindedir.
- Dosya adındaki numaralar, Front Matter kimliğindeki sıra ile eşleşmelidir.

## 5. Markdown Rules

- Her Markdown belgesinde en fazla bir H1 bulunmalıdır.
- Front Matter, varsa, belgenin ilk satırında başlamalıdır; H1 Front Matter'dan sonra gelir.
- Başlık seviyeleri atlanamaz: H1'i H2, H2'yi H3 izler.
- Zorunlu H2 başlıkları ilgili belge standardında tanımlanır ve yeniden adlandırılamaz.
- H3 ve daha alt başlıklar, üst bölümün anlamını bozmadığı sürece genişletilebilir.
- İç bağlantılar göreli olmalı ve hedef mevcut olmalıdır.
- Kod bloklarının tamamında dil etiketi bulunmalıdır; diyagramlar `mermaid` etiketi kullanmalıdır.
- Ham HTML yalnızca erişilebilirlik veya Markdown ile ifade edilemeyen davranış için kullanılmalıdır.
- Görseller açıklayıcı alternatif metne sahip olmalıdır.
- Tablolar başlık satırı içermeli ve yalnızca karşılaştırma ya da yapılandırılmış veri için kullanılmalıdır.

## 6. Common Front Matter Contract

Tüm yönetilen Markdown belgeleri YAML Front Matter taşır. Değer türleri YAML 1.2.2 ile uyumlu olmalıdır.

Her belge tipinde ortak alanlar:

```yaml
---
document_type: "chapter"
title: "Example Title"
version: "1.0.0"
status: "Draft"
---
```

- `document_type`: Bu standartta kayıtlı küçük harfli tür adı.
- `title`: Boş olmayan insan tarafından okunabilir başlık.
- `version`: SemVer biçiminde belge sürümü.
- `status`: Bölüm 8'deki içerik durumu.
- Türe özgü kimlik alanı zorunludur.
- Bilinmeyen alanlar `x-` öneki olmadan eklenemez. `x-` alanları kanonik şemanın parçası sayılmaz.
- Aynı bilgi iki farklı alanda tutulamaz.
- Tarihler kullanıldığında `YYYY-MM-DD` biçiminde olmalıdır.

## 7. Document Type Registry and Schemas

Bu bölüm ortak ve yönetişim belge türlerini tanımlar. Eğitim materyali şemaları Curriculum, Volume ve Chapter standartlarında tanımlanır.

### 7.1 Standard

```yaml
---
document_type: "standard"
standard_id: "ASEA-STD-REPOSITORY-002"
title: "ASEA Repository Standard v2.0"
version: "2.0.0"
status: "Stable"
supersedes: "repository-standard-v1.md"
---
```

`supersedes` önceki belge yoksa boş dizi `[]` olabilir; dosya yolu kullanıldığında göreli olmalıdır.

### 7.2 Review

```yaml
---
document_type: "review"
review_id: "V01-RV001"
title: "Volume 01 Technical Review"
version: "1.0.0"
status: "Stable"
review_type: "Technical"
scope_id: "V01"
scope_version: "0.5.0"
reviewer_roles:
  - "Technical Reviewer"
decision: "Approved"
reviewed_on: "2026-07-17"
findings: 0
updated_files:
  - "../release.md"
---
```

`review_type` yalnızca `Technical`, `Content`, `Repository` veya `Final`; `decision` yalnızca `Approved`, `Changes Required` veya `Rejected` olabilir. `status`, review kaydının olgunluğunu; `decision`, incelenen kapsamın sonucunu gösterir.

Review türlerinin sorumlulukları:

| Review | Kontrol alanı | Zorunlu çıktı | Güncelleyebileceği kayıtlar |
|---|---|---|---|
| Technical | Teknik doğruluk, kodun çalışması, güvenlik ve teknoloji kapsamı | Bulgular ve karar | Kapsam belgesi, test kanıtı, review kaydı |
| Content | Pedagojik sıra, açıklık, dil, kaynaklar ve öğrenme çıktıları | Bulgular ve karar | İçerik, traceability kaydı, review kaydı |
| Repository | Adlandırma, bağlantılar, Front Matter, şema ve yapı | Doğrulama sonucu ve karar | Manifest, bağlantılar, review kaydı |
| Final | Önceki onaylar, sürüm kapsamı ve yayın hazırlığı | Nihai karar | Release ve manifest kayıtları |

Bir reviewer kendi yaptığı değişikliği doğrulayabilir; ancak `Stable` geçişindeki Final Review farklı bir kişi veya açıkça kaydedilmiş bağımsız kontrol süreci tarafından yapılmalıdır.

### 7.3 Release

```yaml
---
document_type: "release"
release_id: "V01-RL001"
title: "Volume 01 Release 1.0.0"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
scope_version: "1.0.0"
release_name: "Volume 01 Stable"
tag: "volume-01-v1.0.0"
released_on: "2026-07-17"
manifest_id: "V01-MF001"
review_ids:
  - "V01-RV001"
---
```

Release kaydı yayımlanmış kapsamı, değişmez tag'i, manifesti ve onay review'larını bağlar. Aynı `release_id` veya tag yeniden kullanılamaz. Yayımlanmış kayıt değiştirilmez; düzeltme yeni sürüm üretir.

### 7.4 Manifest

```yaml
---
document_type: "manifest"
manifest_id: "V01-MF001"
title: "Volume 01 Manifest"
version: "1.0.0"
status: "Stable"
scope_id: "V01"
scope_version: "1.0.0"
generated_on: "2026-07-17"
artifact_count: 42
artifacts:
  - id: "V01-C01"
    path: "../chapters/01-example.md"
    version: "1.0.0"
    status: "Stable"
---
```

Manifest, yayın kapsamındaki tüm kanonik artefact'ları göreli yol, kimlik, sürüm ve durumla listeler. `artifact_count`, `artifacts` sayısıyla eşleşmelidir.

### 7.5 Standard Index

```yaml
---
document_type: "standard-index"
index_id: "ASEA-STD-INDEX-002"
title: "ASEA Standards Index v2.0"
version: "2.0.0"
status: "Stable"
---
```

### 7.6 Migration Guide

```yaml
---
document_type: "migration-guide"
migration_id: "ASEA-MIGRATION-001-002"
title: "ASEA Standards Migration Guide v1 to v2"
version: "1.0.0"
status: "Stable"
source_standard_major: 1
target_standard_major: 2
---
```

## 8. Status Lifecycle

Kanonik içerik durumu şu yaşam döngüsünü kullanır:

```text
Draft -> Review -> Stable -> Deprecated -> Archived
```

| Status | Anlamı | Kullanım |
|---|---|---|
| Draft | Aktif üretim sürüyor; eksik olabilir | Tüm yönetilen belge türleri |
| Review | Üretim tamamlanmış, onay kapılarından geçiyor | Tüm yönetilen belge türleri |
| Stable | Zorunlu kontrolleri geçmiş ve yayımlanabilir | Tüm yönetilen belge türleri |
| Deprecated | Kullanılabilir ancak yeni kullanım önerilmez; ardılı belirtilir | Yayımlanmış içerik ve standartlar |
| Archived | Etkin kullanım dışı, yalnızca tarihsel kayıt | Değiştirilmeyen tarihsel içerik |

- Normal ileri geçişler tabloda gösterilen sırayı izler.
- `Review`, düzeltme gerektiğinde `Draft` durumuna dönebilir.
- `Stable` içerik, yeni sürüm açılarak `Draft` durumunda geliştirilebilir; yayımlanmış sürümün kaydı korunur.
- `Deprecated` içerik `Stable` durumuna döndürülemez; yeni bir sürüm veya ardıl belge gerekir.
- `Archived` terminal durumdur.
- Review `decision`, Blueprint `freeze_status` ve üretim ilerlemesi `status` alanında tutulamaz; bunlar ayrı alanlardır.

## 9. Identifier Standard

Kimlikler değişmez, repository genelinde benzersiz, büyük harfli ASCII ve aşağıdaki sözleşmeye uygun olmalıdır:

| Artefact | Biçim | Örnek |
|---|---|---|
| Volume | `V{NN}` | `V01` |
| Module | `V{NN}-M{NN}` | `V01-M01` |
| Learning Outcome | `V{NN}-LO{NNN}` | `V01-LO001` |
| Chapter | `V{NN}-C{NN}` | `V01-C01` |
| Lab | `V{NN}-C{NN}-L{NN}` | `V01-C01-L01` |
| Quiz | `V{NN}-C{NN}-QZ{NN}` veya `V{NN}-QZ{NNN}` | `V01-C01-QZ01` |
| Challenge | `V{NN}-C{NN}-CH{NN}` | `V01-C01-CH01` |
| Exercise | `V{NN}-C{NN}-EX{NN}` | `V01-C01-EX01` |
| Interview | `V{NN}-C{NN}-IV{NN}` | `V01-C01-IV01` |
| Project | `V{NN}-P{NN}` | `V01-P01` |
| Capstone | `V{NN}-CP{NN}` | `V01-CP01` |
| Assessment | `V{NN}-C{NN}-AS{NN}` veya `V{NN}-AS{NNN}` | `V01-C01-AS01` |
| Blueprint | `V{NN}-BP{NN}` veya `V{NN}-C{NN}-BP{NN}` | `V01-BP01` |
| Review | `V{NN}-RV{NNN}` | `V01-RV001` |
| Release | `V{NN}-RL{NNN}` | `V01-RL001` |
| Manifest | `V{NN}-MF{NNN}` | `V01-MF001` |

- `{NN}` iki, `{NNN}` üç basamaklı pozitif sıra numarasıdır.
- Kimlikteki `01` ile dosya adındaki `01` aynı sırayı göstermelidir.
- Kimlikler dosya yeniden adlandırıldığında değişmez.
- Silinen kimlik yeniden kullanılamaz.
- Dosya adları kimliklerin küçük harfli kopyası olmak zorunda değildir; dosya adlandırma sözleşmesini izler.

## 10. Versioning

### 10.1 Semantic Version

Belge ve yayın sürümleri `MAJOR.MINOR.PATCH` biçimindeki Semantic Versioning (SemVer) kullanır. Front Matter değerinde `v` öneki bulunmaz.

- `MAJOR`: Şema, zorunlu yapı veya tüketici sözleşmesindeki uyumsuz değişiklik.
- `MINOR`: Geriye uyumlu yeni yetenek ya da içerik genişletmesi.
- `PATCH`: Geriye uyumlu düzeltme.

### 10.2 Separate Version Scopes

| Kapsam | Anlam | Örnek |
|---|---|---|
| Repository version | Repository'nin bütünsel yayımlanmış durumu | `2.1.0` |
| Volume version | Tek bir Volume paketinin sürümü | `1.0.0` |
| Blueprint version | Planın içerikten bağımsız sürümü | `1.2.0` |
| Release version | Release kapsamının değişmez sürümü | `1.0.0` |
| Document version | Tek belgenin şema/içerik sürümü | `1.3.2` |

Bu değerler birbirine eşit olmak zorunda değildir ve bir alan diğerinin yerine kullanılamaz.

### 10.3 Tags and Release Names

- Repository tag'i: `asea-v{semver}`.
- Volume tag'i: `volume-{NN}-v{semver}`.
- Tag değişmez ve benzersizdir.
- Release adı insan tarafından okunabilir olmalı; kimlik veya tag yerine geçmemelidir.
- Standard dosya adı yalnızca major sürümü taşır (`chapter-standard-v2.md`); tam SemVer Front Matter'da tutulur.

## 11. Internal Linking and Assets

- Bağlantılar kaynak dosyaya göre göreli yazılır.
- Dizin bağlantıları açık bir belgeye, tercihen `README.md` dosyasına yönelmelidir.
- Aynı görselin kopyaları oluşturulmamalı; kanonik asset göreli olarak kullanılmalıdır.
- Volume'a özgü asset ilgili Volume'un `assets/` dizininde, paylaşılan asset kök `assets/` dizininde tutulur.
- Asset dosyaları küçük harfli kebab-case adlandırılır ve metin içinde kaynak/lisans bilgisiyle ilişkilendirilir.

## 12. Code, Diagrams, Tables, and References

- Kod blokları çalıştırılabilir veya açıkça `pseudocode` olarak etiketlenmiş olmalıdır.
- Her teknik örnek amacı, girdisi ve beklenen çıktısıyla açıklanmalıdır.
- Mermaid diyagramları `mermaid` dil etiketi kullanmalı ve desteklenen sözdizimiyle parse edilmelidir.
- Tablo hücreleri çok paragraflı anlatım yerine kısa, karşılaştırılabilir değerler taşımalıdır.
- Kaynaklar belgenin sonunda `References` altında standart başlık, kurum/yazar, eser adı, sürüm/tarih ve göreli ya da kalıcı bağlantı ile verilmelidir.
- Bir iddia için birincil kaynak varsa resmî dokümantasyon veya özgün standart tercih edilmelidir.

## 13. Branch, Commit, and Pull Request Rules

- Varsayılan korumalı dal `main` olmalıdır.
- Çalışma dalları `docs/{slug}`, `content/{slug}`, `fix/{slug}` veya `chore/{slug}` biçiminde olmalıdır.
- Commit mesajları Conventional Commits 1.0.0 biçimini izlemelidir: `type(scope): description`.
- Pull request tek, açıklanabilir bir değişiklik kapsamına sahip olmalı; ilgili kimlikleri, doğrulama sonucunu ve breaking change bilgisini belirtmelidir.
- `Stable` durumuna geçiş yapan pull request, gerekli Review kayıtlarını bağlamalıdır.

## 14. Repository Validation Standard

Doğrulama aşağıdaki sırayla yürütülür; önceki aşamanın yapısal hataları sonraki aşamaların güvenilirliğini etkiler:

1. **Scope:** Beklenmeyen, boş veya kapsam dışı dosyalar tespit edilir.
2. **Naming:** Dizin ve dosya adları, sıra numaraları ve istisnalar kontrol edilir.
3. **Front Matter:** YAML parse edilir; türe ait zorunlu alanlar, türler ve enum değerleri doğrulanır.
4. **Identifiers:** Biçim, benzersizlik, ayrılmış kimlikler ve dosya sırası eşleşmesi kontrol edilir.
5. **Versions and Status:** SemVer, geçiş kuralları, tag ve kapsam ayrımı doğrulanır.
6. **Markdown:** Tek H1, başlık hiyerarşisi, zorunlu H2'ler, tablolar ve dil etiketleri kontrol edilir.
7. **Links and Assets:** Göreli iç bağlantılar, anchor'lar, görseller ve asset yolları çözülür.
8. **Executable Material:** Kod örnekleri, testler ve Mermaid sözdizimi doğrulanır.
9. **Content Hygiene:** Yer tutucu metinler, boş bölümler, gereksiz kopyalar ve doğrulanamayan iddialar aranır.
10. **Traceability:** Outcome–Chapter–Assessment ve gerekli Lab/Project bağları doğrulanır.
11. **Reviews:** Kapsama uygun Review türleri, kararlar ve açık bulgular kontrol edilir.
12. **Release:** Definition of Done, manifest bütünlüğü, release kaydı ve tag uyumu doğrulanır.

### 14.1 Validation Result

Her kontrol `pass`, `fail` veya gerekçeli `not-applicable` sonucu üretir. Bir zorunlu kontrolün `fail` sonucu `Stable` durumunu engeller. Uyarılar açıkça sınıflandırılır; uyarıların kabul gerekçesi Review kaydına yazılır.

### 14.2 Minimum Checklist

- Dosya adları ve yollar geçerli.
- Kırık bağlantı veya eksik asset yok.
- Yer tutucu veya boş zorunlu bölüm yok.
- Tekrarlanan kimlik yok.
- Mermaid ve Markdown parse edilebilir.
- Front Matter türe özgü şemaya uygun.
- Status ve version değerleri geçerli.
- Gerekli Review kararları onaylı.
- Learning Outcome traceability eksiksiz.
- Manifest kapsamla aynı artefact'ları içeriyor.

## 15. Governance and Change Control

- v2 standartları arasındaki kapsam ve öncelik [Standards Index v2.0](./standards-index-v2.md) tarafından yönetilir.
- Bir standart başka standardın sahip olduğu alanı yeniden tanımlayamaz; bağlantıyla referans verir.
- Şema uyumsuzluğu MAJOR değişikliktir.
- Açıklama, örnek veya doğrulama iyileştirmesi sözleşmeyi değiştirmiyorsa PATCH; geriye uyumlu yeni seçenek MINOR değişikliktir.
- `Stable` standarda değişiklik, inceleme ve değişiklik kaydı olmadan uygulanamaz.

## 16. References

- YAML Language Development Team, *YAML 1.2.2 Specification*, 2021: <https://yaml.org/spec/1.2.2/>
- John MacFarlane, *CommonMark Specification*: <https://spec.commonmark.org/current/>
- Tom Preston-Werner, *Semantic Versioning 2.0.0*: <https://semver.org/spec/v2.0.0.html>
- Conventional Commits Contributors, *Conventional Commits 1.0.0*: <https://www.conventionalcommits.org/en/v1.0.0/>
