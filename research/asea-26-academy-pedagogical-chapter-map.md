---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-CMAP-003"
supporting_document_type: "Chapter Map"
title: "ASEA 26-Academy Pedagogical Chapter Map"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-SD-ROAD-001"
  - "V01-BP01"
derived_from:
  - "./asea-26-academy-curriculum-tree.md"
  - "../docs/01-programming/programming-fundamentals/academy/04-chapter-registry.md"
---

# ASEA 26 Akademi Pedagojik Chapter Haritası

## Purpose

1.321 müfredat konusunu kitap niteliğinde öğretilebilecek pedagojik Chapter
kümelerine ayırmak ve araştırma üretim sırasını görünür kılmak.

## Scope

Akademi 01 için Blueprint v2 içindeki 38 kanonik Chapter aynen gösterilir.
Akademi 02–26 için her mevcut modül; amacı ortak, 4–10 ilişkili konuyu taşıyan
bir Chapter adayı olarak sınıflandırılır. Adaylar yeni kanonik kimlik değildir;
yalnızca ilerideki Volume Blueprint ve review sürecine girdi sağlar.

Bu harita toplam 236 Chapter üretim birimi gösterir:

- 38 kanonik Akademi 01 Chapter'ı;
- 198 kanonik olmayan Chapter adayı;
- Akademi 02–26 için 1172 doğrudan eşlenmiş konu maddesi.

## Ownership

- Akademi 01 Chapter kimlikleri: mevcut Blueprint v2 ve Repository Standard v2
- Akademi 02–26 pedagojik kümeleri: Curriculum Architect
- Yeni Volume ve Chapter kimliği tahsisi: yalnız mevcut review/migration süreci
- Teknik kapsam onayı: ilgili akademinin alan uzmanı
- AI-native eşleme: ASEA AI-Native Competency Framework

## Content

### Ayrıştırma kararı

Bir modül varsayılan olarak bir Chapter adayıdır çünkü mevcut modüller ortak
bir zihinsel model ve tamamlanma kanıtı etrafında kümelenmiştir. Alan uzmanı
incelemesinde bilişsel yük, bağımsız outcome veya laboratuvar ihtiyacı bunu
gerektirirse aday bölünebilir. Bölme işlemi konuyu kaybetmez; migration map ile
kaynak modüle geri izlenir.

Her Chapter adayı aşağıdaki üretim kapılarından geçer:

- [ ] Chapter contract ve ölçülebilir outcomes
- [ ] Ön koşul ve dependency doğrulaması
- [ ] AI-native yetkinlik eşlemesi
- [ ] Research Scope ve Source Strategy
- [ ] Research Collection ve Research Packet
- [ ] Ana ders ve öğrenme materyalleri
- [ ] Kod, link, kaynak ve traceability doğrulaması
- [ ] Teknik ve pedagojik review
- [ ] Öğrenci pilotu
- [ ] Stable release

### Akademi 01 — Programlama Temelleri

Akademi 01 için aşağıdaki kayıtlar kanonik Blueprint v2 Chapter Registry
kaynağından türetilmiştir; yeniden numaralandırılmaz.

| Chapter | Modül | Başlık | Study Hours |
| --- | --- | --- | --- |
| `V01-C01` | `M01` | What Is Programming? | `2.5` |
| `V01-C02` | `M01` | How Computers Execute Programs | `2.5` |
| `V01-C03` | `M01` | Problem Definition and Decomposition | `2.5` |
| `V01-C04` | `M01` | Algorithms, Pseudocode, and Tracing | `2.5` |
| `V01-C05` | `M02` | Values and Data Types | `2.5` |
| `V01-C06` | `M02` | Variables and State | `2.5` |
| `V01-C07` | `M02` | Operators and Expressions | `2.5` |
| `V01-C08` | `M02` | Input, Output, and Data Transformation | `2.5` |
| `V01-C09` | `M03` | Boolean Logic and Truth | `2` |
| `V01-C10` | `M03` | Conditional Execution | `2.5` |
| `V01-C11` | `M03` | Repetition and Loops | `2.5` |
| `V01-C12` | `M03` | Nested and Composite Control Flow | `2` |
| `V01-C13` | `M04` | Functions and Contracts | `2.5` |
| `V01-C14` | `M04` | Parameters and Return Values | `2.5` |
| `V01-C15` | `M04` | Scope, Lifetime, and Side Effects | `2.5` |
| `V01-C16` | `M04` | Functional Decomposition and Reuse | `2.5` |
| `V01-C17` | `M05` | Collections and Iteration | `3` |
| `V01-C18` | `M05` | Records and Data Modeling | `3` |
| `V01-C19` | `M05` | Recursion and Recursive Thinking | `3` |
| `V01-C20` | `M05` | Strings and Text Processing | `3` |
| `V01-C21` | `M06` | Searching Algorithms | `3` |
| `V01-C22` | `M06` | Sorting Algorithms | `3` |
| `V01-C23` | `M06` | Algorithmic Complexity and Trade-offs | `3` |
| `V01-C24` | `M07` | Errors and Failure Modes | `2.5` |
| `V01-C25` | `M07` | Systematic Debugging | `2.5` |
| `V01-C26` | `M07` | Testing Fundamentals | `2.5` |
| `V01-C27` | `M07` | Clean Code and Refactoring | `2.5` |
| `V01-C28` | `M07` | Program Design from Requirements to Delivery | `2` |
| `V01-C29` | `M08` | JavaScript Type System and Conversion Semantics | `4` |
| `V01-C30` | `M09` | Objects, Properties, and Data Modeling | `4` |
| `V01-C31` | `M09` | Arrays and Collection Pipelines | `4` |
| `V01-C32` | `M10` | Higher-Order Functions and Callbacks | `4` |
| `V01-C33` | `M10` | Closures, Lifetime, and State Encapsulation | `4` |
| `V01-C34` | `M11` | Numbers, Math, and Numeric Reliability | `3.5` |
| `V01-C35` | `M11` | Dates, Time, and Temporal Boundaries | `3.5` |
| `V01-C36` | `M12` | Exception Handling and Custom Errors | `3.5` |
| `V01-C37` | `M12` | ES Modules and Program Organization | `3.5` |
| `V01-C38` | `M08` | JavaScript Runtime, Tooling, and Execution Environments | `4` |

#### Akademi 01 Learning Outcome eşlemesi

| Chapter | Canonical Learning Outcomes |
| --- | --- |
| `V01-C01` | `V01-LO001`–`V01-LO002` |
| `V01-C02` | `V01-LO003`–`V01-LO004` |
| `V01-C03` | `V01-LO005` |
| `V01-C04` | `V01-LO006` |
| `V01-C05` | `V01-LO007`–`V01-LO008` |
| `V01-C06` | `V01-LO009`–`V01-LO010` |
| `V01-C07` | `V01-LO011` |
| `V01-C08` | `V01-LO012` |
| `V01-C09` | `V01-LO013`–`V01-LO014` |
| `V01-C10` | `V01-LO015`–`V01-LO016` |
| `V01-C11` | `V01-LO017` |
| `V01-C12` | `V01-LO018` |
| `V01-C13` | `V01-LO019`–`V01-LO020` |
| `V01-C14` | `V01-LO021` |
| `V01-C15` | `V01-LO022`–`V01-LO023` |
| `V01-C16` | `V01-LO024` |
| `V01-C17` | `V01-LO025`–`V01-LO026` |
| `V01-C18` | `V01-LO027`–`V01-LO028` |
| `V01-C19` | `V01-LO029`–`V01-LO030` |
| `V01-C20` | `V01-LO031` |
| `V01-C21` | `V01-LO032`–`V01-LO033` |
| `V01-C22` | `V01-LO034`–`V01-LO035` |
| `V01-C23` | `V01-LO036`–`V01-LO037` |
| `V01-C24` | `V01-LO038`–`V01-LO039` |
| `V01-C25` | `V01-LO040`–`V01-LO041` |
| `V01-C26` | `V01-LO042`–`V01-LO043` |
| `V01-C27` | `V01-LO044`–`V01-LO045` |
| `V01-C28` | `V01-LO046` |
| `V01-C29` | `V01-LO047`–`V01-LO048` |
| `V01-C30` | `V01-LO049`–`V01-LO050` |
| `V01-C31` | `V01-LO051`–`V01-LO052` |
| `V01-C32` | `V01-LO053`–`V01-LO054` |
| `V01-C33` | `V01-LO055`–`V01-LO056` |
| `V01-C34` | `V01-LO057`–`V01-LO058` |
| `V01-C35` | `V01-LO059`–`V01-LO060` |
| `V01-C36` | `V01-LO061`–`V01-LO062` |
| `V01-C37` | `V01-LO063`–`V01-LO064` |
| `V01-C38` | `V01-LO065`–`V01-LO066` |

### Akademi 02 — Nesne Yönelimli Programlama

**Amaç:** Nesne yönelimli programlamayı (Object-Oriented Programming) sınıf sözdizimi ezberi olarak değil; sorumluluk, değişmez koşul ve davranış modeli tasarlama yöntemi olarak öğretmek.

**Ön koşul:** Akademi 01; TypeScript bölümleri için Akademi 11'in temel türleri.

#### Chapter adayı 01 — Paradigma ve Nesne Modeli

- **Yerel aday anahtarı:** `academy-02/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 01
- **Konu kapsamı:**

  - prosedürel, nesne yönelimli ve fonksiyonel yaklaşımın karşılaştırılması
  - nesne; kimlik, durum ve davranış
  - sınıf ile örnek ayrımı
  - mesaj gönderme, metot çağrısı ve dinamik gönderim
  - gerçek dünyayı bire bir kopyalamanın sakıncaları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Sınıflar ve Sorumluluklar

- **Yerel aday anahtarı:** `academy-02/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 02
- **Konu kapsamı:**

  - alan, özellik, metot ve kurucu
  - `this` bağlamı ve nesne yaşam döngüsü
  - değişmez koşulların kurucuda korunması
  - tell-don't-ask ve davranışın doğru yerde tutulması
  - veri sınıfı kokusu ve anemik model

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Kapsülleme ve Soyutlama

- **Yerel aday anahtarı:** `academy-02/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 03
- **Konu kapsamı:**

  - bilgi gizleme ve değişim yüzeyini azaltma
  - erişim seviyeleri ve API sınırı
  - soyutlama, sözleşme ve uygulama ayrımı
  - arayüzler, soyut sınıflar ve davranış protokolleri
  - sızdıran soyutlama ve gereksiz soyutlama

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Kalıtım, Alt Tür ve Çok Biçimlilik

- **Yerel aday anahtarı:** `academy-02/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 04
- **Konu kapsamı:**

  - is-a ilişkisi ve alt tür sözleşmesi
  - override, overload ve shadowing ayrımı
  - Liskov ikame ilkesi
  - kalıtım hiyerarşisinin kırılganlığı
  - çok biçimli tasarım ve koşul dallarını azaltma

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Nesne İlişkileri

- **Yerel aday anahtarı:** `academy-02/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 05
- **Konu kapsamı:**

  - association, aggregation ve composition
  - has-a yaklaşımı ve kalıtım yerine bileşim
  - bağımlılık yönü ve bağımlılık enjeksiyonu
  - entity, value object, kimlik ve eşitlik
  - sahiplik, yaşam süresi ve kaynak yönetimi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — SOLID ve Tasarım Kalitesi

- **Yerel aday anahtarı:** `academy-02/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 06
- **Konu kapsamı:**

  - tek sorumluluk
  - açık/kapalı
  - Liskov ikame
  - arayüz ayrımı
  - bağımlılıkların ters çevrilmesi
  - bağlaşım, uyum ve değişim maliyeti

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Tip Güvenli Nesne Tasarımı

- **Yerel aday anahtarı:** `academy-02/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 07
- **Konu kapsamı:**

  - generic sınıflar ve koleksiyonlar
  - union ve composition ile alternatif modelleme
  - hata durumlarını türlerle ifade etme
  - null güvenliği ve geçersiz durumları temsil edilemez kılma
  - immutable nesneler ve kontrollü durum geçişi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Modelleme, Test ve Refaktör

- **Yerel aday anahtarı:** `academy-02/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 02, Modül 08
- **Konu kapsamı:**

  - UML sınıf, nesne ve sıra diyagramlarının uygun kullanımı
  - test edilebilir nesne sınırları ve test doubles
  - kod kokuları: god object, feature envy, shotgun surgery
  - sorumluluk taşıma, metot çıkarma ve nesne parçalama
  - OOP'nin uygun olmadığı durumlar

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 03 — Veri Yapıları ve Algoritmalar

**Amaç:** Veri düzenleme, algoritma doğruluğu ve kaynak maliyetlerini teorik ve uygulamalı olarak öğretmek; ezberlenmiş mülakat çözümleri yerine aktarılabilir problem çözme becerisi geliştirmek.

**Ön koşul:** Akademi 01; önerilen Akademi 02.

#### Chapter adayı 01 — Matematiksel ve Analitik Temel

- **Yerel aday anahtarı:** `academy-03/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 01
- **Konu kapsamı:**

  - kümeler, bağıntılar, fonksiyonlar ve mantık
  - toplamlar, logaritma ve büyüme oranları
  - ispat fikri: doğrudan, çelişki ve tümevarım
  - algoritma sözleşmesi, değişmez ve sonlanma
  - RAM maliyet modeli ve deneysel ölçüm sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Karmaşıklık Analizi

- **Yerel aday anahtarı:** `academy-03/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 02
- **Konu kapsamı:**

  - zaman ve alan karmaşıklığı
  - Big O, Big Omega ve Big Theta
  - en iyi, ortalama, en kötü ve amortize analiz
  - iç içe döngü, özyineleme bağıntısı ve Master yöntemi giriş
  - pratik performans, sabit çarpan ve bellek yerelliği

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Doğrusal Yapılar

- **Yerel aday anahtarı:** `academy-03/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 03
- **Konu kapsamı:**

  - sabit ve dinamik diziler
  - bağlı liste: tek, çift ve dairesel
  - yığın, kuyruk ve deque
  - iterator ve dolaşım sözleşmesi
  - kullanım senaryosu ve ödünleşim matrisi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Anahtarlı Yapılar

- **Yerel aday anahtarı:** `academy-03/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 04
- **Konu kapsamı:**

  - hash fonksiyonu ve dağılım
  - çakışma çözümü
  - yük faktörü, yeniden boyutlandırma ve amortize maliyet
  - map, set ve multiset
  - eşitlik, kimlik ve değiştirilebilir anahtar riski

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Ağaçlar ve Öncelik Yapıları

- **Yerel aday anahtarı:** `academy-03/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 05
- **Konu kapsamı:**

  - ağaç terminolojisi ve dolaşım
  - ikili arama ağacı
  - dengeli ağaçların amacı
  - heap ve priority queue
  - trie ve prefix arama
  - union-find ve ayrık kümeler

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Graflar

- **Yerel aday anahtarı:** `academy-03/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 06
- **Konu kapsamı:**

  - yönlü/yönsüz, ağırlıklı/ağırlıksız grafik
  - adjacency list ve matrix
  - BFS ve DFS
  - topolojik sıralama ve döngü tespiti
  - en kısa yol: Dijkstra ve Bellman-Ford sınırları
  - minimum spanning tree fikri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Arama ve Sıralama

- **Yerel aday anahtarı:** `academy-03/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 07
- **Konu kapsamı:**

  - doğrusal ve ikili arama
  - selection, insertion, merge, quick ve heap sort
  - kararlılık, yerinde çalışma ve karşılaştırma sınırı
  - veri dağılımına göre sıralama seçimi
  - dilin yerleşik sıralamasını doğru kullanma

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Algoritma Tasarım Teknikleri

- **Yerel aday anahtarı:** `academy-03/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 08
- **Konu kapsamı:**

  - brute force ve sistematik arama
  - divide and conquer
  - greedy seçim ve doğruluk koşulları
  - dynamic programming: durum, geçiş ve memoization
  - backtracking ve budama
  - sliding window, two pointers ve prefix sum

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 09 — Dizge ve Gerçek Dünya Algoritmaları

- **Yerel aday anahtarı:** `academy-03/chapter-09`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 03, Modül 09
- **Konu kapsamı:**

  - Unicode farkındalığıyla dize işleme
  - pattern matching giriş
  - arama indeksleri ve autocomplete
  - rate limiter, cache ve scheduler içinde veri yapıları
  - performans profilleme ve benchmark yanılsamaları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 04 — Git ve GitHub

**Amaç:** Sürüm kontrolünü komut ezberi olmaktan çıkarıp güvenli değişiklik, işbirliği, inceleme ve açık kaynak çalışma sistemi olarak öğretmek.

**Ön koşul:** Akademi 01 ile paralel başlayabilir.

#### Chapter adayı 01 — Git Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-04/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 04, Modül 01
- **Konu kapsamı:**

  - çalışma ağacı, staging area ve repository
  - blob, tree, commit ve object database
  - commit DAG'ı, parent ilişkisi ve içerik adresleme
  - branch, tag, `HEAD` ve ref
  - dağıtık sürüm kontrolünün sonuçları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Günlük Yerel İş Akışı

- **Yerel aday anahtarı:** `academy-04/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 04, Modül 02
- **Konu kapsamı:**

  - kurulum, kimlik ve güvenli yapılandırma
  - `init`, `clone`, `status`, `add`, `commit`
  - `diff`, `log`, `show` ve geçmiş okuma
  - `.gitignore`, dosya yaşam döngüsü ve gizli bilgi riski
  - atomik commit ve Conventional Commits

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Değişikliği Geri Alma

- **Yerel aday anahtarı:** `academy-04/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 04, Modül 03
- **Konu kapsamı:**

  - `restore`, `revert` ve `reset` farkı
  - amend ve interaktif rebase
  - reflog ile kurtarma
  - paylaşılmış geçmişi yeniden yazmanın riski
  - güvenli kurtarma senaryoları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Branch ve Birleştirme

- **Yerel aday anahtarı:** `academy-04/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 04, Modül 04
- **Konu kapsamı:**

  - branch oluşturma ve izleme
  - fast-forward ve three-way merge
  - merge conflict okuma ve çözme
  - rebase ve cherry-pick
  - stash ve geçici çalışma

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Uzak Repository ve GitHub

- **Yerel aday anahtarı:** `academy-04/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 04, Modül 05
- **Konu kapsamı:**

  - remote, fetch, pull ve push
  - upstream tracking ve fork modeli
  - SSH/HTTPS kimlik doğrulaması
  - issues, labels, milestones ve project boards
  - pull request, draft PR ve code review
  - protected branch, CODEOWNERS ve merge politikaları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Ekip ve Açık Kaynak Pratiği

- **Yerel aday anahtarı:** `academy-04/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 04, Modül 06
- **Konu kapsamı:**

  - trunk-based development, GitHub Flow ve sürüm dalları
  - küçük PR, inceleme adabı ve geri bildirim verme
  - semantic versioning, tag, release ve changelog
  - CONTRIBUTING, issue/PR template ve lisans
  - imzalı commit/tag ve secret scanning
  - temel GitHub Actions entegrasyonu

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 05 — Linux ve Komut Satırı

**Amaç:** Öğrencinin yerel geliştirme, sunucu yönetimi ve üretim sorun çözme için Linux sistemlerini anlayıp güvenli biçimde kullanmasını sağlamak.

**Ön koşul:** Akademi 01 ve 04.

#### Chapter adayı 01 — İşletim Sistemi Temeli

- **Yerel aday anahtarı:** `academy-05/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 01
- **Konu kapsamı:**

  - kernel, user space, system call ve process
  - CPU zamanlama, bellek ve sanal bellek için zihinsel model
  - dosya tanımlayıcı, standart akışlar ve exit code
  - dağıtım, paket, shell ve terminal ayrımı
  - yardım sistemi: `man`, `info`, `--help`

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Dosya Sistemi ve Metin İşleme

- **Yerel aday anahtarı:** `academy-05/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 02
- **Konu kapsamı:**

  - mutlak/göreli yol ve Linux dizin düzeni
  - dosya, dizin, hard link ve symbolic link
  - `pwd`, `ls`, `cd`, `cp`, `mv`, `rm`, `mkdir`
  - `cat`, `less`, `head`, `tail`, `wc`, `sort`, `uniq`
  - `grep`, `find`, `xargs`, `sed` ve `awk`
  - yönlendirme, pipe ve command substitution

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Shell ve Bash

- **Yerel aday anahtarı:** `academy-05/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 03
- **Konu kapsamı:**

  - quoting, escaping, globbing ve expansion
  - environment variable ve process environment
  - alias, function ve shell başlangıç dosyaları
  - shell script yapısı, koşul, döngü ve fonksiyon
  - strict mode, hata yönetimi ve taşınabilirlik
  - ShellCheck ve güvenli script yazımı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Kullanıcı, Yetki ve Güvenlik

- **Yerel aday anahtarı:** `academy-05/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 04
- **Konu kapsamı:**

  - kullanıcı, grup, UID/GID ve sahiplik
  - read/write/execute ve octal izinler
  - umask, sticky bit, setuid/setgid ve ACL
  - `sudo`, en az ayrıcalık ve audit izi
  - SSH anahtarları, agent ve güvenli uzaktan erişim

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Süreç, Servis ve Günlükler

- **Yerel aday anahtarı:** `academy-05/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 05
- **Konu kapsamı:**

  - `ps`, `top`, `pgrep`, `kill` ve signal
  - foreground/background, jobs, `nohup` ve session
  - systemd unit, service lifecycle ve journal
  - cron/timer ve zamanlanmış görev
  - log döndürme ve temel olay incelemesi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Depolama ve Paket Yönetimi

- **Yerel aday anahtarı:** `academy-05/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 06
- **Konu kapsamı:**

  - disk, partition, filesystem ve mount
  - disk/inode kullanımı ve izin kaynaklı hatalar
  - archive ve sıkıştırma
  - apt/dnf türü paket sistemleri
  - bağımlılık, repository ve güncelleme güvenliği
  - yedekleme ve geri yükleme temeli

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Ağ ve Sorun Giderme

- **Yerel aday anahtarı:** `academy-05/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 05, Modül 07
- **Konu kapsamı:**

  - IP, subnet, port, socket, DNS ve route
  - TCP/UDP ve istemci-sunucu modeli
  - `ip`, `ss`, `ping`, `traceroute`, `dig`, `curl`
  - firewall ve dinleyen servis
  - süreç, ağ, disk, bellek ve izin üzerinden sistematik teşhis
  - performans gözlemi ve kaynak darboğazı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 06 — Veritabanları

**Amaç:** Veriyi doğru modelleme, güvenilir saklama, sorgulama, bütünlük, performans ve operasyon kararlarını öğretmek.

**Ön koşul:** Akademi 01; önerilen 03 ve 05.

#### Chapter adayı 01 — Veri ve Veritabanı Sistemleri

- **Yerel aday anahtarı:** `academy-06/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 01
- **Konu kapsamı:**

  - kalıcı veri, dosya sistemi ve DBMS ayrımı
  - ilişkisel, belge, key-value, graph ve zaman serisi modelleri
  - OLTP ile OLAP ayrımı
  - schema, catalog, table, row ve column
  - doğru veri modelini seçme ölçütleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — İlişkisel Modelleme

- **Yerel aday anahtarı:** `academy-06/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 02
- **Konu kapsamı:**

  - entity, attribute, relationship ve cardinality
  - primary, foreign, unique ve composite key
  - domain, null ve constraint
  - kavramsal, mantıksal ve fiziksel model
  - ER diyagramı ve gereksinimden şemaya geçiş

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — SQL Temelleri

- **Yerel aday anahtarı:** `academy-06/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 03
- **Konu kapsamı:**

  - DDL, DML, DQL ve transaction control
  - `CREATE`, `ALTER`, `INSERT`, `UPDATE`, `DELETE`
  - `SELECT`, filtreleme, sıralama ve sınırlama
  - aggregate, grouping ve `HAVING`
  - inner/outer/cross join
  - subquery, CTE ve set işlemleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — İleri SQL

- **Yerel aday anahtarı:** `academy-06/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 04
- **Konu kapsamı:**

  - window function ve analitik sorgu
  - view ve materialized view
  - recursive CTE
  - function, trigger ve kullanım sınırları
  - zaman, JSON ve full-text veri sorgulama
  - güvenli parametrik sorgu

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Normalizasyon ve Şema Evrimi

- **Yerel aday anahtarı:** `academy-06/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 05
- **Konu kapsamı:**

  - functional dependency
  - 1NF, 2NF, 3NF ve BCNF
  - denormalizasyonun ölçülmüş gerekçeleri
  - migration, seed ve rollback
  - geriye uyumlu şema değişikliği
  - veri kalitesi ve constraint stratejisi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — İşlemler ve Eşzamanlılık

- **Yerel aday anahtarı:** `academy-06/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 06
- **Konu kapsamı:**

  - ACID özellikleri
  - transaction sınırı ve birim çalışma
  - isolation level ve anomaliler
  - MVCC, lock ve deadlock
  - optimistic/pessimistic concurrency
  - idempotency ve tutarlılık sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — İndeks ve Sorgu Performansı

- **Yerel aday anahtarı:** `academy-06/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 07
- **Konu kapsamı:**

  - B-tree, hash ve özel indeksler
  - selectivity, cardinality ve composite index sırası
  - query planner, statistics ve `EXPLAIN`
  - N+1 sorgu problemi
  - ölçüm, yavaş sorgu günlüğü ve optimizasyon süreci
  - indeks yazma/depolama maliyeti

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — PostgreSQL ve MySQL Uygulaması

- **Yerel aday anahtarı:** `academy-06/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 08
- **Konu kapsamı:**

  - kullanıcı, rol, database ve schema yönetimi
  - veri türleri ve motor özellikleri
  - bağlantı havuzu ve oturum yönetimi
  - backup, restore ve point-in-time recovery
  - replication ve high availability temeli
  - PostgreSQL/MySQL davranış farklarını belgeyle doğrulama

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 09 — NoSQL, MongoDB ve Redis

- **Yerel aday anahtarı:** `academy-06/chapter-09`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 09
- **Konu kapsamı:**

  - belge modelleme, embedding ve referencing
  - MongoDB index, aggregation ve transaction sınırları
  - Redis veri yapıları, TTL ve cache kullanımı
  - cache-aside, invalidation ve stampede
  - eventual consistency ve veri sahipliği
  - NoSQL'u varsayılan değil gereksinime göre seçme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 10 — Operasyon, Güvenlik ve Ölçek

- **Yerel aday anahtarı:** `academy-06/chapter-10`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 06, Modül 10
- **Konu kapsamı:**

  - kimlik doğrulama, yetkilendirme ve least privilege
  - şifreleme, hassas veri ve audit
  - connection, capacity ve storage planlama
  - partitioning, sharding ve replication trade-off'ları
  - izleme, bakım, vacuum/compaction kavramları
  - felaket kurtarma testi ve veri saklama politikası

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 07 — HTML5 ve Web Belge Mühendisliği

**Amaç:** HTML'i görsel yerleşim aracı değil; anlam, erişilebilirlik, etkileşim ve birlikte çalışabilirlik sağlayan web belge dili olarak öğretmek.

**Ön koşul:** Akademi 01'in ilk modülleri; Akademi 04 önerilir.

#### Chapter adayı 01 — Web ve Belge Temeli

- **Yerel aday anahtarı:** `academy-07/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 07, Modül 01
- **Konu kapsamı:**

  - internet ile web ayrımı
  - URL, HTTP isteği/yanıtı ve tarayıcı işleme hattı
  - doctype, `html`, `head` ve `body`
  - karakter kodlama, dil ve viewport metadata
  - DOM ağacı ve kaynak sırası

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Anlamsal İçerik

- **Yerel aday anahtarı:** `academy-07/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 07, Modül 02
- **Konu kapsamı:**

  - başlık hiyerarşisi, paragraf ve vurgu
  - liste, açıklama listesi, alıntı ve kod
  - `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`
  - zaman, adres ve iletişim anlamı
  - div/span kullanım sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Bağlantı, Medya ve Gömülü İçerik

- **Yerel aday anahtarı:** `academy-07/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 07, Modül 03
- **Konu kapsamı:**

  - güvenli ve erişilebilir bağlantılar
  - görüntü, alternatif metin, figure ve caption
  - responsive image: `srcset`, `sizes`, `picture`
  - audio, video, track ve caption
  - iframe güvenliği, sandbox ve third-party içerik
  - SVG ile canvas kullanım sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Tablolar ve Formlar

- **Yerel aday anahtarı:** `academy-07/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 07, Modül 04
- **Konu kapsamı:**

  - veri tablosu, caption, scope ve ilişkilendirme
  - form, label, fieldset ve legend
  - input türleri, textarea, select ve button
  - yerleşik doğrulama, hata mesajı ve autocomplete
  - dosya yükleme ve form gönderim semantiği
  - istemci doğrulamasının güvenlik sınırı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Erişilebilirlik

- **Yerel aday anahtarı:** `academy-07/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 07, Modül 05
- **Konu kapsamı:**

  - erişilebilir ad, rol, durum ve semantic tree
  - klavye kullanımı, odak sırası ve görünür odak
  - landmark, heading ve skip link
  - native HTML önce; ARIA yalnız gerektiğinde
  - ekran okuyucu ve otomatik test sınırları
  - WCAG algılanabilirlik, işletilebilirlik, anlaşılabilirlik ve sağlamlık

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Metadata, Kalite ve Performans

- **Yerel aday anahtarı:** `academy-07/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 07, Modül 06
- **Konu kapsamı:**

  - title, description, canonical URL ve social metadata
  - structured data ve arama motoru sınırları
  - progressive enhancement
  - HTML validation ve tarayıcı DevTools
  - lazy loading, resource hints ve medya performansı
  - güvenlik, gizlilik ve üçüncü taraf içerik değerlendirmesi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 08 — CSS3 ve Arayüz Yerleşimi

**Amaç:** Cascade, layout ve responsive tasarımın temel modellerini kullanarak bakımı yapılabilir, erişilebilir ve performanslı arayüzler geliştirmek.

**Ön koşul:** Akademi 07.

#### Chapter adayı 01 — Cascade ve Stil Hesaplama

- **Yerel aday anahtarı:** `academy-08/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 01
- **Konu kapsamı:**

  - stylesheet ekleme ve author/user/user-agent kaynakları
  - selector, combinator ve pseudo-class/pseudo-element
  - specificity, source order ve inheritance
  - cascade origin, importance ve cascade layer
  - computed, used ve actual value
  - browser DevTools ile cascade teşhisi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Değerler ve Kutu Modeli

- **Yerel aday anahtarı:** `academy-08/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 02
- **Konu kapsamı:**

  - mutlak/göreli birimler ve viewport/container birimleri
  - custom properties, fallback ve `calc()`
  - content, padding, border ve margin
  - `box-sizing`, overflow ve intrinsic sizing
  - block, inline ve formatting context
  - margin collapsing

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Tipografi ve Görsel Sistem

- **Yerel aday anahtarı:** `academy-08/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 03
- **Konu kapsamı:**

  - font ailesi, fallback, web font ve yükleme
  - font size, line height, measure ve okunabilirlik
  - color spaces, contrast ve transparency
  - background, border, shadow ve gradient
  - design token ve görsel hiyerarşi
  - forced colors ve yüksek kontrast

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Konumlandırma ve Katmanlama

- **Yerel aday anahtarı:** `academy-08/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 04
- **Konu kapsamı:**

  - normal flow, relative, absolute, fixed ve sticky
  - containing block
  - z-index ve stacking context
  - floats ve güncel kullanım alanı
  - overflow, clipping ve scroll davranışı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Flexbox ve Grid

- **Yerel aday anahtarı:** `academy-08/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 05
- **Konu kapsamı:**

  - flex axis, sizing, wrapping ve alignment
  - flexible length ve min-content tuzakları
  - grid tracks, lines, areas ve implicit grid
  - `minmax`, `auto-fit`, `auto-fill` ve subgrid
  - bir boyutlu/iki boyutlu layout seçimi
  - içerik sırası ile görsel sıra arasındaki erişilebilirlik

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Responsive ve Adaptif Tasarım

- **Yerel aday anahtarı:** `academy-08/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 06
- **Konu kapsamı:**

  - mobile-first ve içerik temelli breakpoint
  - media query ve kullanıcı tercihleri
  - container query
  - responsive typography ve spacing
  - aspect ratio, object fit ve responsive media
  - zoom, reflow ve dokunma hedefleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Hareket ve Etkileşim

- **Yerel aday anahtarı:** `academy-08/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 07
- **Konu kapsamı:**

  - transform, transition ve animation
  - keyframes, timing ve compositing
  - `prefers-reduced-motion`
  - hover, focus, active ve disabled durumları
  - hareketin kullanılabilirlik ve performans sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — CSS Mimarisi ve Kalite

- **Yerel aday anahtarı:** `academy-08/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 08, Modül 08
- **Konu kapsamı:**

  - component scope, utility ve composition yaklaşımları
  - BEM, CSS Modules ve cascade layers karşılaştırması
  - reset/normalize ve temel stil sözleşmesi
  - tekrar, specificity savaşı ve dead CSS
  - render performansı ve layout shift
  - visual regression ve cross-browser test

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 09 — Tailwind CSS

**Amaç:** Utility-first yaklaşımı, tasarım token'ları ve bileşen bileşimiyle tutarlı arayüz üretmek; framework kullanımını CSS bilgisinin yerine koymamak.

**Ön koşul:** Akademi 07 ve 08.

#### Chapter adayı 01 — Utility-First Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-09/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 09, Modül 01
- **Konu kapsamı:**

  - utility sınıfı, tasarım kısıtı ve composition
  - klasik CSS, CSS Modules ve utility yaklaşımı karşılaştırması
  - kurulum, içerik tarama ve üretim hattı
  - sınıf sırası, cascade ve conflict davranışı
  - Tailwind'in uygun/uygun olmadığı bağlamlar

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Temel Tasarım Sistemi

- **Yerel aday anahtarı:** `academy-09/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 09, Modül 02
- **Konu kapsamı:**

  - spacing, sizing, color ve typography ölçekleri
  - breakpoint ve responsive variant
  - flexbox, grid, position ve container
  - border, shadow, radius ve state stilleri
  - design token ile keyfi değer arasındaki seçim

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Etkileşim ve Varyantlar

- **Yerel aday anahtarı:** `academy-09/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 09, Modül 03
- **Konu kapsamı:**

  - hover, focus-visible, active ve disabled
  - group, peer ve descendant state
  - dark mode ve color scheme
  - reduced motion, contrast ve forced color
  - form ve validation durumları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Tema ve Bileşen Mimarisi

- **Yerel aday anahtarı:** `academy-09/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 09, Modül 04
- **Konu kapsamı:**

  - tema değişkenleri ve marka token'ları
  - ortak bileşen API'si ve variant tasarımı
  - class composition ve koşullu sınıflar
  - component extraction ve premature abstraction
  - headless component ile stil katmanı ayrımı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Üretim Kalitesi

- **Yerel aday anahtarı:** `academy-09/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 09, Modül 05
- **Konu kapsamı:**

  - build çıktısı ve kullanılmayan sınıflar
  - dinamik class adı üretme riski
  - eklenti ve özel utility sınırları
  - erişilebilirlik, görsel regresyon ve responsive test
  - framework sürüm geçişi ve resmi migration rehberleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 10 — Modern JavaScript

**Amaç:** ECMAScript dilini, tarayıcı çalışma ortamını, asenkron yürütmeyi ve uygulama tasarım kalıplarını üretim düzeyinde öğretmek.

**Ön koşul:** Akademi 01, 04 ve web uygulamaları için 07–08.

#### Chapter adayı 01 — Dil ve Çalışma Ortamı

- **Yerel aday anahtarı:** `academy-10/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 01
- **Konu kapsamı:**

  - ECMAScript specification, engine ve host ayrımı
  - parse, execution context ve call stack
  - strict mode ve module mode
  - lexical grammar, statement ve expression
  - tarayıcı, Node.js ve runtime API farkları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Türler ve Değer Semantiği

- **Yerel aday anahtarı:** `academy-10/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 02
- **Konu kapsamı:**

  - primitive ve object değerler
  - `undefined`, `null`, `NaN`, `Symbol` ve `BigInt`
  - coercion, equality ve sameness algoritmaları
  - pass-by-value ve object reference zihinsel modeli
  - mutability, copying ve structured clone

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Bağlamalar ve Kapsam

- **Yerel aday anahtarı:** `academy-10/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 03
- **Konu kapsamı:**

  - `let`, `const`, `var` ve declaration instantiation
  - lexical environment ve environment record
  - global, function, module ve block scope
  - hoisting teriminin sınırları ve temporal dead zone
  - shadowing, redeclaration ve closure

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Fonksiyonlar

- **Yerel aday anahtarı:** `academy-10/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 04
- **Konu kapsamı:**

  - declaration, expression, arrow ve method
  - parameter, rest, spread ve default
  - `this`, call-site, `bind`, `call` ve `apply`
  - closure, factory ve private state
  - higher-order function, composition ve partial application
  - generator ve iterator protokolü

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Nesneler ve Prototipler

- **Yerel aday anahtarı:** `academy-10/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 05
- **Konu kapsamı:**

  - property descriptor, getter/setter ve enumeration
  - prototype chain ve delegation
  - class syntax ve private fields
  - inheritance/composition trade-off'u
  - `Map`, `Set`, `WeakMap` ve `WeakSet`
  - proxy/reflection için kullanım ve riskler

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Koleksiyon ve Veri İşleme

- **Yerel aday anahtarı:** `academy-10/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 06
- **Konu kapsamı:**

  - array iteration ve mutating/non-mutating metotlar
  - `map`, `filter`, `reduce`, `some`, `every`, `find`
  - iterable ve async iterable
  - string, Unicode ve regular expression
  - JSON, serialization ve circular reference
  - date/time ile `Intl`

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — DOM ve Web API'leri

- **Yerel aday anahtarı:** `academy-10/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 07
- **Konu kapsamı:**

  - DOM seçme, oluşturma ve güncelleme
  - event propagation, delegation ve default action
  - form, constraint validation ve custom validity
  - fetch, Request/Response, headers ve streams
  - storage, URL, history ve clipboard
  - Web Worker ve ana iş parçacığı sorumluluğu

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Asenkron JavaScript

- **Yerel aday anahtarı:** `academy-10/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 08
- **Konu kapsamı:**

  - event loop, task ve microtask
  - callback ve hata yayılımı
  - Promise state, chaining ve combinator'lar
  - async/await ve paralellik kontrolü
  - cancellation, timeout ve `AbortController`
  - race condition, retry, backoff ve idempotency

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 09 — Modüller ve Uygulama Tasarımı

- **Yerel aday anahtarı:** `academy-10/chapter-09`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 09
- **Konu kapsamı:**

  - ESM import/export, live binding ve cycle
  - package, dependency ve semantic versioning
  - boundary, adapter ve dependency inversion
  - state management ve immutable update
  - error taxonomy ve recovery
  - browser security: XSS, same-origin, CORS ve CSP girişi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 10 — Performans, Bellek ve Kalite

- **Yerel aday anahtarı:** `academy-10/chapter-10`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 10, Modül 10
- **Konu kapsamı:**

  - garbage collection için ulaşılabilirlik modeli
  - memory leak kaynakları ve DevTools profiling
  - event listener, timer ve closure yaşam süresi
  - render, network ve bundle performansı
  - unit/integration/browser testing
  - lint, format, debug ve source map

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 11 — TypeScript

**Amaç:** Statik tür sistemini yalnız hata susturmak için değil; alan modeli, API sözleşmesi, güvenli refaktör ve ekip iletişimi için kullanmayı öğretmek.

**Ön koşul:** Akademi 10; önerilen Akademi 02.

#### Chapter adayı 01 — TypeScript Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-11/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 01
- **Konu kapsamı:**

  - compile-time ile runtime ayrımı
  - structural typing
  - type inference ve contextual typing
  - transpilation, type erasure ve source map
  - `tsconfig`, strict mode ve proje sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Temel Tür Modelleme

- **Yerel aday anahtarı:** `academy-11/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 02
- **Konu kapsamı:**

  - primitive, literal, tuple ve array
  - object type, optional/readonly property
  - type alias ve interface
  - union, intersection ve discriminated union
  - `null`, `undefined`, `unknown`, `never` ve `any`

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Daraltma ve Güvenli Erişim

- **Yerel aday anahtarı:** `academy-11/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 03
- **Konu kapsamı:**

  - control-flow analysis
  - `typeof`, `instanceof`, `in` ve equality narrowing
  - user-defined type guard ve assertion function
  - exhaustive checking
  - type assertion riskleri ve `satisfies`

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Fonksiyon ve Generic Tasarımı

- **Yerel aday anahtarı:** `academy-11/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 04
- **Konu kapsamı:**

  - parameter/return türü ve function type
  - optional, default ve rest parameter
  - overload ve union tabanlı alternatif
  - generic function, constraint ve inference
  - variance, callback ve API güvenliği

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — İleri Türler

- **Yerel aday anahtarı:** `academy-11/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 05
- **Konu kapsamı:**

  - `keyof`, `typeof` ve indexed access
  - mapped ve conditional type
  - distributive conditional type
  - template literal type
  - utility type tasarımı
  - recursive type ve derleyici maliyeti

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Sınıf, Modül ve Paketler

- **Yerel aday anahtarı:** `academy-11/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 06
- **Konu kapsamı:**

  - class fields, access modifier ve abstract class
  - interface implementation ve composition
  - ES module, module resolution ve path alias
  - declaration file ve DefinitelyTyped
  - library API'si ve `.d.ts` üretimi
  - monorepo/project references

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Güvenilir Uygulama Sınırları

- **Yerel aday anahtarı:** `academy-11/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 07
- **Konu kapsamı:**

  - dış verinin `unknown` kabul edilmesi
  - runtime schema validation
  - API request/response ve error union
  - branded/opaque types
  - domain model ve geçersiz durumların engellenmesi
  - environment ve configuration doğrulama

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Geçiş, Test ve Bakım

- **Yerel aday anahtarı:** `academy-11/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 11, Modül 08
- **Konu kapsamı:**

  - JavaScript'ten kademeli geçiş
  - JSDoc ve `checkJs`
  - third-party type sorunu teşhisi
  - type test ve runtime test ayrımı
  - strictness borcu ve `@ts-expect-error` yönetimi
  - derleme performansı ve sürüm yükseltme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 12 — React

**Amaç:** React'i bileşen ezberi olarak değil; bildirimsel arayüz, durum modeli, senkronizasyon ve erişilebilir etkileşim sistemi olarak öğretmek.

**Ön koşul:** Akademi 07, 08, 10 ve 11.

#### Chapter adayı 01 — React Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-12/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 01
- **Konu kapsamı:**

  - component, element ve render tree
  - declarative UI ve purity
  - JSX, expression ve composition
  - props, children ve tek yönlü veri akışı
  - render ile commit aşaması

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Arayüz Üretimi

- **Yerel aday anahtarı:** `academy-12/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 02
- **Konu kapsamı:**

  - koşullu render
  - listeler, key ve kimlik
  - event handling
  - erişilebilir native element seçimi
  - component API ve composition

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Durum ve Güncelleme

- **Yerel aday anahtarı:** `academy-12/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 03
- **Konu kapsamı:**

  - state snapshot ve event handler
  - batching ve functional update
  - object/array state'i değiştirmeden güncelleme
  - state yapısını seçme ve derived state
  - state'i kaldırma, koruma ve resetleme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Form ve State Mimarisi

- **Yerel aday anahtarı:** `academy-12/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 04
- **Konu kapsamı:**

  - controlled/uncontrolled input
  - validation, error ve submission state
  - lifting state up
  - reducer ile karmaşık geçişler
  - context ve provider sınırları
  - finite-state düşüncesine giriş

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Effect ve Dış Sistemler

- **Yerel aday anahtarı:** `academy-12/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 05
- **Konu kapsamı:**

  - effect'in senkronizasyon amacı
  - dependency ve stale closure
  - cleanup ve race condition
  - effect gerektirmeyen hesaplamalar
  - ref, DOM erişimi ve imperative escape hatch
  - custom hook ile davranış paylaşımı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Veri ve Asenkron Arayüz

- **Yerel aday anahtarı:** `academy-12/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 06
- **Konu kapsamı:**

  - loading, error, empty ve success durumları
  - server state ile client state ayrımı
  - request cancellation ve stale response
  - optimistic update ve rollback
  - Suspense kavramı ve framework entegrasyonu
  - error boundary ve recovery UI

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Performans ve Mimari

- **Yerel aday anahtarı:** `academy-12/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 07
- **Konu kapsamı:**

  - React DevTools ve profiler
  - gereksiz render nedenleri
  - memoization'ın ölçüme dayalı kullanımı
  - lazy loading ve code splitting
  - feature/component klasör sınırları
  - state yönetim aracı seçme ölçütleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Kalite ve Üretim

- **Yerel aday anahtarı:** `academy-12/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 12, Modül 08
- **Konu kapsamı:**

  - erişilebilir component ve keyboard interaction
  - unit, component ve integration test
  - React Testing Library kullanıcı odaklı sorgular
  - XSS ve güvenli render
  - responsive UI ve design system entegrasyonu
  - hata izleme ve üretim gözlemi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 13 — Next.js

**Amaç:** React tabanlı tam yığın web uygulamalarını güncel App Router modeli, sunucu/istemci sınırları, performans, güvenlik ve dağıtım sorumluluklarıyla üretime hazırlamak.

**Ön koşul:** Akademi 06, 11 ve 12; önerilen 15–16 konularıyla eşgüdüm.

#### Chapter adayı 01 — Framework ve App Router

- **Yerel aday anahtarı:** `academy-13/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 01
- **Konu kapsamı:**

  - framework'ün derleme, routing ve runtime sorumluluğu
  - file-system routing, segment ve dynamic route
  - layout, template, page ve route group
  - navigation, loading, error ve not-found sınırları
  - Pages Router farkındalığı; yeni geliştirmede App Router

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Server ve Client Components

- **Yerel aday anahtarı:** `academy-13/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 02
- **Konu kapsamı:**

  - sunucuda/istemcide yürütme sınırı
  - serialization ve prop sınırı
  - client bundle maliyeti
  - composition ve provider yerleşimi
  - secret ve sunucu-only kodun korunması

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Veri Okuma ve Akış

- **Yerel aday anahtarı:** `academy-13/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 03
- **Konu kapsamı:**

  - server-side data fetching
  - paralel ve sıralı istekler
  - streaming ve Suspense
  - cache, revalidation ve freshness kararı
  - request memoization ve veri sahipliği
  - hata, boş ve gecikmiş veri durumları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Mutation ve Formlar

- **Yerel aday anahtarı:** `academy-13/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 04
- **Konu kapsamı:**

  - server-side mutation ve action modeli
  - form submission, pending ve optimistic state
  - validation, authorization ve error mapping
  - cache invalidation/revalidation
  - idempotency ve çift gönderim
  - progressive enhancement

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Route Handler ve Entegrasyon

- **Yerel aday anahtarı:** `academy-13/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 05
- **Konu kapsamı:**

  - route handler ve backend-for-frontend sınırı
  - HTTP method, status, header ve cookies
  - webhook ve signature verification
  - dosya yükleme ve stream
  - third-party API, timeout ve retry
  - Edge/Node runtime seçimi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Kimlik, Yetki ve Güvenlik

- **Yerel aday anahtarı:** `academy-13/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 06
- **Konu kapsamı:**

  - authentication, session ve cookie
  - authorization'ın server boundary'de uygulanması
  - CSRF, XSS, CSP ve güvenli header
  - environment variable ve secret yönetimi
  - input validation ve data access layer
  - dependency ve supply-chain güvenliği

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Web Ürün Kalitesi

- **Yerel aday anahtarı:** `academy-13/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 07
- **Konu kapsamı:**

  - metadata, sitemap, robots ve structured data
  - image, font ve script optimizasyonu
  - Core Web Vitals ve bundle analizi
  - internationalization ve locale routing
  - accessibility ve error experience
  - analytics, logging ve OpenTelemetry temeli

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Test, Dağıtım ve Operasyon

- **Yerel aday anahtarı:** `academy-13/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 13, Modül 08
- **Konu kapsamı:**

  - unit/component/E2E test sınırları
  - local, preview ve production ortamları
  - build çıktısı ve deployment modeli
  - database migration ve release sırası
  - serverless/edge davranışı ve maliyet
  - rollback, monitoring ve incident readiness

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 14 — Backend Geliştirme

**Amaç:** Ağ üzerinden hizmet veren uygulamaların çalışma zamanı, iş mantığı, veri, eşzamanlılık, güvenilirlik ve operasyon sınırlarını öğretmek.

**Ön koşul:** Akademi 05, 06, 10 ve 11.

#### Chapter adayı 01 — Sunucu ve HTTP Temeli

- **Yerel aday anahtarı:** `academy-14/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 01
- **Konu kapsamı:**

  - istemci-sunucu, süreç, port ve socket
  - HTTP mesajı, method, status, header ve body
  - stateless iletişim ve request lifecycle
  - Node.js event loop, async I/O ve thread pool
  - stream, buffer ve backpressure

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Uygulama İskeleti

- **Yerel aday anahtarı:** `academy-14/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 02
- **Konu kapsamı:**

  - routing, controller, service ve repository sorumlulukları
  - dependency injection ve composition root
  - configuration ve environment doğrulama
  - request parsing, validation ve serialization
  - middleware pipeline ve cross-cutting concern
  - modüler monolith başlangıç mimarisi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — İş Mantığı ve Veri Erişimi

- **Yerel aday anahtarı:** `academy-14/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 03
- **Konu kapsamı:**

  - domain kuralı ile taşıma katmanı ayrımı
  - transaction boundary ve unit of work
  - raw SQL, query builder ve ORM trade-off'ları
  - connection pool ve timeout
  - pagination, filtering ve sorting
  - concurrency conflict ve idempotent operation

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Hata ve Gözlemlenebilirlik

- **Yerel aday anahtarı:** `academy-14/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 04
- **Konu kapsamı:**

  - operational/programmer error ayrımı
  - merkezi hata eşleme ve güvenli hata yanıtı
  - structured log ve correlation ID
  - metric, trace ve health/readiness endpoint
  - timeout, retry, circuit breaker ve bulkhead girişi
  - üretim olayını yeniden oluşturma

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Asenkron ve Arka Plan İşleri

- **Yerel aday anahtarı:** `academy-14/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 05
- **Konu kapsamı:**

  - queue, job ve worker
  - retry/backoff, dead-letter ve poison message
  - scheduled job ve distributed lock
  - at-least-once delivery ve idempotent consumer
  - email, dosya işleme ve bildirim hattı
  - event-driven entegrasyonun sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Cache, Dosya ve Dış Servisler

- **Yerel aday anahtarı:** `academy-14/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 06
- **Konu kapsamı:**

  - cache-aside ve invalidation
  - Redis kullanımı ve stampede koruması
  - object storage, upload ve signed URL
  - third-party API adapter
  - rate limit ve quota
  - failure isolation ve fallback

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Güvenlik ve Kalite

- **Yerel aday anahtarı:** `academy-14/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 14, Modül 07
- **Konu kapsamı:**

  - input doğrulama ve output encoding
  - authentication/authorization entegrasyonu
  - secret, PII ve audit log
  - unit, integration ve database test
  - API contract ve end-to-end test
  - dependency güvenliği ve graceful shutdown

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 15 — API Mühendisliği

**Amaç:** API'leri endpoint toplamı değil; yaşam döngüsü, güvenlik, geliştirici deneyimi ve geriye uyumluluk gerektiren ürün sözleşmeleri olarak tasarlamak.

**Ön koşul:** Akademi 06, 14; önerilen 16 ile eşgüdüm.

#### Chapter adayı 01 — HTTP Semantiği

- **Yerel aday anahtarı:** `academy-15/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 01
- **Konu kapsamı:**

  - safe ve idempotent method'lar
  - status code, representation ve content negotiation
  - header, caching ve conditional request
  - URL, resource ve operation modelleme
  - HTTP/1.1, HTTP/2 ve HTTP/3 farkındalığı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — REST API Tasarımı

- **Yerel aday anahtarı:** `academy-15/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 02
- **Konu kapsamı:**

  - REST kısıtları ve uygulamadaki trade-off'lar
  - resource boundary ve aggregate
  - request/response schema
  - validation ve standard problem details
  - pagination: offset, cursor ve keyset
  - filtering, sorting, searching ve field selection

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Sözleşme ve Evrim

- **Yerel aday anahtarı:** `academy-15/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 03
- **Konu kapsamı:**

  - design-first ve code-first
  - OpenAPI document, schema ve reusable component
  - documentation, example ve SDK üretimi
  - backward compatibility ve tolerant reader sınırı
  - versioning, deprecation ve sunset
  - consumer-driven contract test

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Güvenilirlik

- **Yerel aday anahtarı:** `academy-15/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 04
- **Konu kapsamı:**

  - idempotency key
  - retry, exponential backoff ve jitter
  - optimistic concurrency ve ETag
  - rate limiting, quota ve fair usage
  - timeout ve partial failure
  - batch operation ve long-running job

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Kimlik ve API Güvenliği

- **Yerel aday anahtarı:** `academy-15/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 05
- **Konu kapsamı:**

  - API key, session, token ve OAuth kullanım alanları
  - scope, permission ve resource authorization
  - OWASP API Security riskleri
  - schema/size limit ve abuse prevention
  - audit, sensitive field ve data minimization
  - gateway ve zero-trust sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Webhook ve Olay Tabanlı API

- **Yerel aday anahtarı:** `academy-15/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 06
- **Konu kapsamı:**

  - webhook subscription ve event envelope
  - signature, timestamp ve replay prevention
  - delivery retry ve deduplication
  - ordering ve eventual consistency
  - AsyncAPI/CloudEvents farkındalığı
  - queue/stream tabanlı entegrasyon

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — GraphQL

- **Yerel aday anahtarı:** `academy-15/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 07
- **Konu kapsamı:**

  - schema, type, query, mutation ve subscription
  - resolver ve execution
  - nullability ve error model
  - N+1 ve data loader
  - depth/complexity limit ve authorization
  - REST/GraphQL seçim ölçütleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Operasyon ve Geliştirici Deneyimi

- **Yerel aday anahtarı:** `academy-15/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 15, Modül 08
- **Konu kapsamı:**

  - API catalog, ownership ve lifecycle
  - sandbox ve örnek istekler
  - latency/error/traffic/saturation ölçümleri
  - SLI/SLO ve alert
  - distributed tracing ve correlation
  - API governance ve review checklist

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 16 — Kimlik Doğrulama ve Uygulama Güvenliği

**Amaç:** Güvenliği sonradan eklenen özellik değil; tehdit, kimlik, veri, uygulama ve teslimat yaşam döngüsünün ortak mühendislik sorumluluğu yapmak.

**Ön koşul:** Akademi 05, 13–15; temel ağ ve veritabanı bilgisi.

#### Chapter adayı 01 — Güvenlik Temeli

- **Yerel aday anahtarı:** `academy-16/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 01
- **Konu kapsamı:**

  - gizlilik, bütünlük ve erişilebilirlik
  - asset, threat, vulnerability, likelihood ve impact
  - trust boundary ve attack surface
  - defense in depth ve least privilege
  - secure by default ve fail secure
  - risk acceptance ve residual risk

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Kriptografi Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-16/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 02
- **Konu kapsamı:**

  - encoding, hashing, encryption ve signing ayrımı
  - symmetric/asymmetric cryptography
  - password hashing, salt ve work factor
  - TLS ve certificate chain
  - key generation, storage, rotation ve revocation
  - kendi kripto algoritmasını yazmama ilkesi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Kullanıcı Kimliği

- **Yerel aday anahtarı:** `academy-16/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 03
- **Konu kapsamı:**

  - registration, verification ve account recovery
  - password policy, breached password ve rate limit
  - MFA, TOTP ve recovery code
  - passkey/WebAuthn temeli
  - session lifecycle ve secure cookie
  - logout, device/session management

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Federation ve Token'lar

- **Yerel aday anahtarı:** `academy-16/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 04
- **Konu kapsamı:**

  - token ile session farkı
  - JWT yapısı, doğrulama ve sık yanlış kullanım
  - OAuth roles, authorization code ve PKCE
  - OpenID Connect ve ID token
  - access/refresh token rotation
  - redirect URI, state ve nonce

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Yetkilendirme

- **Yerel aday anahtarı:** `academy-16/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 05
- **Konu kapsamı:**

  - authentication ile authorization ayrımı
  - RBAC, ABAC ve ReBAC
  - permission, policy ve resource ownership
  - deny-by-default ve server-side enforcement
  - tenant isolation
  - broken object/function level authorization

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Web ve API Saldırıları

- **Yerel aday anahtarı:** `academy-16/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 06
- **Konu kapsamı:**

  - injection ve parameterized query
  - XSS ve context-aware output encoding
  - CSRF, same-site cookie ve token
  - CORS ile access control ayrımı
  - CSP, clickjacking ve security headers
  - SSRF, path traversal, unsafe upload ve deserialization
  - API abuse, mass assignment ve excessive data exposure

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Tehdit Modelleme ve Güvenli SDLC

- **Yerel aday anahtarı:** `academy-16/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 07
- **Konu kapsamı:**

  - data flow diagram ve trust boundary
  - STRIDE ve abuse case
  - security requirement ve misuse test
  - NIST SSDF pratikleri
  - code review, SAST, DAST ve secret scanning
  - dependency, SBOM, provenance ve supply chain

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Operasyon, Gizlilik ve Olay Müdahalesi

- **Yerel aday anahtarı:** `academy-16/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 16, Modül 08
- **Konu kapsamı:**

  - security logging ve kişisel veri sınırı
  - detection, alert ve triage
  - incident containment, eradication ve recovery
  - audit trail ve forensics readiness
  - data classification, minimization ve retention
  - backup, restore ve ransomware hazırlığı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 17 — Bulut Mühendisliği

**Amaç:** Bulutu servis ezberiyle değil; paylaşılan sorumluluk, kimlik, ağ, dayanıklılık, otomasyon, maliyet ve operasyon kararlarıyla öğretmek.

**Ön koşul:** Akademi 05, 06, 14, 16 ve 18.

#### Chapter adayı 01 — Bulut Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-17/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 01
- **Konu kapsamı:**

  - IaaS, PaaS, SaaS ve serverless
  - region, availability zone ve edge
  - control plane ile data plane
  - elasticity, scalability ve pay-as-you-go
  - shared responsibility model
  - vendor lock-in ve portability trade-off'u

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Kimlik ve Organizasyon

- **Yerel aday anahtarı:** `academy-17/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 02
- **Konu kapsamı:**

  - account/subscription/project organizasyonu
  - human ve workload identity
  - role, policy ve least privilege
  - federation ve temporary credentials
  - organization policy ve guardrail
  - secret/key yönetimi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Bulut Ağları

- **Yerel aday anahtarı:** `academy-17/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 03
- **Konu kapsamı:**

  - VPC/VNet, subnet ve route
  - public/private network ve NAT
  - security group/firewall
  - DNS, load balancer ve CDN
  - private endpoint ve service connectivity
  - hybrid network ve zero trust

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Compute ve Konteyner

- **Yerel aday anahtarı:** `academy-17/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 04
- **Konu kapsamı:**

  - virtual machine, autoscaling ve image
  - container service ve registry
  - serverless function/container
  - workload placement ve runtime seçimi
  - health check, graceful termination ve rollout
  - Kubernetes temel nesnelerine giriş

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Depolama ve Veri Servisleri

- **Yerel aday anahtarı:** `academy-17/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 05
- **Konu kapsamı:**

  - object, block ve file storage
  - managed relational/NoSQL database
  - cache, queue ve event service
  - durability, consistency ve locality
  - backup, replication ve lifecycle policy
  - data transfer ve egress maliyeti

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Güvenilirlik ve Felaket Kurtarma

- **Yerel aday anahtarı:** `academy-17/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 06
- **Konu kapsamı:**

  - availability hedefi ve failure domain
  - redundancy ve automated recovery
  - RTO, RPO, backup ve restore test
  - multi-AZ/multi-region trade-off'u
  - capacity, load ve chaos test
  - graceful degradation

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Infrastructure as Code

- **Yerel aday anahtarı:** `academy-17/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 07
- **Konu kapsamı:**

  - declarative infrastructure ve desired state
  - plan/apply/state zihinsel modeli
  - module ve environment composition
  - immutable infrastructure
  - drift detection ve policy as code
  - Terraform ve provider-native araçların değerlendirilmesi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Operasyon, Güvenlik ve FinOps

- **Yerel aday anahtarı:** `academy-17/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 17, Modül 08
- **Konu kapsamı:**

  - metrics, logs, traces ve audit events
  - dashboard, SLO ve alert
  - encryption, posture management ve vulnerability scanning
  - tagging, budget, forecast ve unit economics
  - AWS/Azure/GCP Well-Architected ilkeleri
  - sürdürülebilirlik ve kaynak verimliliği

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 18 — Docker ve Konteynerler

**Amaç:** Uygulamaları tekrar üretilebilir, küçük ve güvenli konteyner artefaktlarına dönüştürmek; geliştirme ile üretim sınırlarını öğretmek.

**Ön koşul:** Akademi 05 ve 14.

#### Chapter adayı 01 — Konteyner Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-18/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 01
- **Konu kapsamı:**

  - process isolation, namespace ve cgroup
  - container ile virtual machine ayrımı
  - OCI image/runtime kavramı
  - daemon, client ve registry
  - container'ın kalıcı sunucu olmadığı gerçeği

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Image ve Dockerfile

- **Yerel aday anahtarı:** `academy-18/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 02
- **Konu kapsamı:**

  - layer, manifest, config, tag ve digest
  - build context ve `.dockerignore`
  - `FROM`, `RUN`, `COPY`, `WORKDIR`, `USER`, `CMD`, `ENTRYPOINT`
  - build cache ve deterministic build
  - multi-stage build
  - minimal base image ve non-root user

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Container Çalıştırma

- **Yerel aday anahtarı:** `academy-18/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 03
- **Konu kapsamı:**

  - create/start/stop/remove lifecycle
  - environment, port ve resource limit
  - signal, PID 1 ve graceful shutdown
  - healthcheck
  - logs, exec, inspect ve stats
  - restart policy

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Depolama ve Ağ

- **Yerel aday anahtarı:** `academy-18/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 04
- **Konu kapsamı:**

  - writable layer, volume ve bind mount
  - veri sahipliği ve izinler
  - bridge network, DNS ve service discovery
  - port publish ile expose ayrımı
  - host/container network sınırı
  - backup ve veri kaybı senaryosu

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Docker Compose

- **Yerel aday anahtarı:** `academy-18/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 05
- **Konu kapsamı:**

  - multi-service model
  - service, network, volume ve configuration
  - dependency ile readiness ayrımı
  - profile, override ve environment
  - development watch/hot reload yaklaşımı
  - local integration test ortamı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Güvenlik ve Tedarik Zinciri

- **Yerel aday anahtarı:** `academy-18/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 06
- **Konu kapsamı:**

  - trusted base image ve version pinning
  - vulnerability scanning
  - secret'ın image'a gömülmemesi
  - capability, read-only filesystem ve seccomp
  - SBOM, signing ve provenance
  - registry access ve image promotion

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Üretim ve Sorun Giderme

- **Yerel aday anahtarı:** `academy-18/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 18, Modül 07
- **Konu kapsamı:**

  - image boyutu ve startup performansı
  - container log/metric/trace
  - failed build ve runtime teşhisi
  - CI'da build/test/push
  - Compose ile orchestrator ayrımı
  - rolling update ve immutable release girişi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 19 — CI/CD, DevOps ve Site Güvenilirliği

**Amaç:** Değişikliğin commit'ten üretime güvenli, hızlı, izlenebilir ve geri alınabilir biçimde ilerlediği otomatik teslimat sistemi kurmak.

**Ön koşul:** Akademi 04, 05, 16–18 ve 22'nin test temelleri.

#### Chapter adayı 01 — Sürekli Teslimat Zihinsel Modeli

- **Yerel aday anahtarı:** `academy-19/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 01
- **Konu kapsamı:**

  - DevOps kültürü, ortak sahiplik ve hızlı geri bildirim
  - continuous integration, delivery ve deployment ayrımı
  - value stream ve deployment lead time
  - small batch ve trunk-based development
  - pipeline as code ve immutable artifact

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Pipeline Kalite Kapıları

- **Yerel aday anahtarı:** `academy-19/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 02
- **Konu kapsamı:**

  - install, lint, typecheck, test ve build
  - unit/integration/E2E test yerleşimi
  - SAST, dependency, secret ve license scan
  - artifact, checksum, SBOM ve provenance
  - fail-fast ile güvenilirlik dengesi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — GitHub Actions

- **Yerel aday anahtarı:** `academy-19/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 03
- **Konu kapsamı:**

  - workflow, event, job, step ve runner
  - permission ve `GITHUB_TOKEN`
  - environment, variable ve secret
  - matrix, cache ve artifact
  - reusable workflow ve composite action
  - concurrency, cancellation ve protected environment

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Release ve Dağıtım

- **Yerel aday anahtarı:** `academy-19/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 04
- **Konu kapsamı:**

  - SemVer, changelog, tag ve release note
  - environment promotion
  - rolling, blue-green ve canary
  - feature flag ve progressive delivery
  - database migration sırası
  - rollback ile roll-forward

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Infrastructure Delivery

- **Yerel aday anahtarı:** `academy-19/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 05
- **Konu kapsamı:**

  - IaC validate/plan/apply pipeline
  - state güvenliği ve approval
  - GitOps ve reconciliation
  - configuration drift
  - policy as code
  - temporary preview environments

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Gözlemlenebilirlik ve SRE

- **Yerel aday anahtarı:** `academy-19/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 06
- **Konu kapsamı:**

  - metric, log, trace ve event
  - SLI, SLO, SLA ve error budget
  - golden signals
  - actionable alert ve on-call
  - dashboard ve release annotation
  - synthetic ve real-user monitoring

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Olay ve Dayanıklılık

- **Yerel aday anahtarı:** `academy-19/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 07
- **Konu kapsamı:**

  - incident lifecycle ve severity
  - containment, communication ve escalation
  - rollback, disaster recovery ve game day
  - blameless postmortem ve action item
  - toil, automation ve capacity planning
  - deployment frequency ile change failure rate dengesi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Güvenlik ve Optimizasyon

- **Yerel aday anahtarı:** `academy-19/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 19, Modül 08
- **Konu kapsamı:**

  - least-privilege pipeline identity
  - OIDC ve kısa ömürlü cloud credential
  - dependency pinning ve untrusted PR riski
  - environment protection ve separation of duties
  - pipeline performansı, paralellik ve cache doğruluğu
  - build/deployment maliyeti

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 20 — Yazılım Mimarisi

**Amaç:** Mimariyi klasör düzeni veya popüler kalıp seçimi olarak değil; gereksinimler, kalite nitelikleri, sınırlar ve uzun vadeli değişim maliyetleri üzerinden verilen doğrulanabilir kararlar bütünü olarak öğretmek.

**Ön koşul:** Akademi 02, 06, 14–16 ve önerilen 21–22.

#### Chapter adayı 01 — Mimari Düşünme

- **Yerel aday anahtarı:** `academy-20/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 01
- **Konu kapsamı:**

  - yazılım mimarisi, tasarım ve uygulama ayrımı
  - stakeholder, business goal, constraint ve assumption
  - functional requirement ve quality attribute
  - modifiability, performance, availability, security ve usability
  - trade-off, risk, sensitivity point ve fitness function

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Modülerlik ve Bağımlılıklar

- **Yerel aday anahtarı:** `academy-20/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 02
- **Konu kapsamı:**

  - cohesion, coupling ve information hiding
  - component, module, service ve library
  - dependency direction ve stable boundary
  - interface, contract ve anti-corruption layer
  - package-by-layer ile package-by-feature
  - cycle tespiti ve bağımlılık kuralı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Uygulama Mimarileri

- **Yerel aday anahtarı:** `academy-20/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 03
- **Konu kapsamı:**

  - layered architecture
  - hexagonal/ports and adapters
  - clean/onion architecture
  - MVC, MVVM ve presentation patterns
  - modular monolith
  - plugin ve microkernel
  - kalıbı bağlama göre seçme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Domain-Driven Design

- **Yerel aday anahtarı:** `academy-20/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 04
- **Konu kapsamı:**

  - ubiquitous language ve domain expert işbirliği
  - subdomain ve bounded context
  - context map ve integration relation
  - entity, value object, aggregate ve domain service
  - repository, factory ve domain event
  - strategic DDD ile tactical DDD ayrımı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Dağıtık Mimari Kararları

- **Yerel aday anahtarı:** `academy-20/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 05
- **Konu kapsamı:**

  - monolith, service-oriented ve microservices trade-off'u
  - sync/async iletişim
  - event-driven architecture
  - saga ve distributed transaction seçenekleri
  - CQRS ve event sourcing'in uygunluk koşulları
  - consistency, ownership ve failure boundary

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Veri ve Entegrasyon Mimarisi

- **Yerel aday anahtarı:** `academy-20/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 06
- **Konu kapsamı:**

  - database-per-service ve shared database
  - API, message ve batch integration
  - schema evolution ve compatibility
  - outbox/inbox ve change data capture
  - cache ve materialized view
  - reporting/analytics sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Kalite Nitelikleriyle Tasarım

- **Yerel aday anahtarı:** `academy-20/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 07
- **Konu kapsamı:**

  - performance model ve capacity
  - availability tactics ve graceful degradation
  - security architecture ve threat model
  - observability ve operability
  - testability ve deployability
  - privacy, compliance ve sustainability

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Mimari Dokümantasyon ve Yönetişim

- **Yerel aday anahtarı:** `academy-20/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 20, Modül 08
- **Konu kapsamı:**

  - C4 context/container/component/code görünümleri
  - UML'nin uygun diyagramları
  - architecture decision record
  - risk ve technical debt register
  - architecture review ve evolutionary architecture
  - build-time/runtime dependency validation

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 21 — Tasarım Kalıpları ve Refaktör

**Amaç:** Kalıpları ezberlenip her yere uygulanan şablonlar değil; tekrar eden tasarım kuvvetlerine ad veren, bağlama bağlı seçenekler olarak öğretmek.

**Ön koşul:** Akademi 02, 10–11 ve en az bir orta ölçekli proje.

#### Chapter adayı 01 — Kalıp Dili ve Tasarım İlkeleri

- **Yerel aday anahtarı:** `academy-21/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 01
- **Konu kapsamı:**

  - context, problem, forces, solution ve consequence
  - SOLID, composition ve dependency inversion tekrar
  - cohesion, coupling ve change axis
  - refactoring ile pattern'e ulaşma
  - premature abstraction ve pattern fever

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Oluşturucu Kalıplar

- **Yerel aday anahtarı:** `academy-21/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 02
- **Konu kapsamı:**

  - Factory Method
  - Abstract Factory
  - Builder
  - Prototype
  - Singleton ve global state riskleri
  - dependency injection container sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Yapısal Kalıplar

- **Yerel aday anahtarı:** `academy-21/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 03
- **Konu kapsamı:**

  - Adapter
  - Bridge
  - Composite
  - Decorator
  - Facade
  - Flyweight
  - Proxy
  - wrapper, delegation ve composition ayrımı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Davranışsal Kalıplar I

- **Yerel aday anahtarı:** `academy-21/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 04
- **Konu kapsamı:**

  - Chain of Responsibility
  - Command
  - Iterator
  - Mediator
  - Memento
  - Observer
  - event emitter ve pub/sub ayrımı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Davranışsal Kalıplar II

- **Yerel aday anahtarı:** `academy-21/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 05
- **Konu kapsamı:**

  - State
  - Strategy
  - Template Method
  - Visitor
  - Interpreter
  - null object ve specification
  - functional composition alternatifleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Uygulama ve Domain Kalıpları

- **Yerel aday anahtarı:** `academy-21/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 06
- **Konu kapsamı:**

  - Repository ve Unit of Work
  - Service Layer ve Transaction Script
  - Active Record ile Data Mapper
  - DTO, mapper ve anti-corruption layer
  - dependency injection ve composition root
  - Result/Option ve error-handling patterns

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Eşzamanlılık ve Dağıtık Kalıplar

- **Yerel aday anahtarı:** `academy-21/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 07
- **Konu kapsamı:**

  - producer-consumer
  - worker pool
  - retry, timeout ve circuit breaker
  - bulkhead
  - saga
  - outbox ve idempotent consumer

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Anti-Kalıplar ve Değerlendirme

- **Yerel aday anahtarı:** `academy-21/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 21, Modül 08
- **Konu kapsamı:**

  - god object, service locator ve shotgun surgery
  - inheritance abuse ve boolean parameter
  - premature generalization
  - pattern kaldırma ve sadeleştirme
  - test edilebilirlik ve ölçülebilir değişim maliyeti
  - kalıp karar kaydı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 22 — Yazılım Testi ve Kalite Mühendisliği

**Amaç:** Testi hata sonrası kontrol değil; gereksinim, tasarım, hızlı geri bildirim ve güvenli değişimin yaşam boyu kalite sistemi olarak öğretmek.

**Ön koşul:** Akademi 01; framework bölümleri ilgili akademilerle eşgüdümlü.

#### Chapter adayı 01 — Kalite ve Test Stratejisi

- **Yerel aday anahtarı:** `academy-22/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 01
- **Konu kapsamı:**

  - quality assurance, quality control ve testing
  - verification ile validation
  - risk-based testing
  - test level, test type ve test quadrants
  - test pyramid/trophy modellerinin bağlama göre kullanımı
  - exit criteria ve traceability

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Test Tasarım Teknikleri

- **Yerel aday anahtarı:** `academy-22/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 02
- **Konu kapsamı:**

  - equivalence partitioning
  - boundary value analysis
  - decision table
  - state transition
  - pairwise/combinatorial testing
  - use case ve exploratory testing
  - error guessing'in kanıt sınırı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Birim Testi

- **Yerel aday anahtarı:** `academy-22/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 03
- **Konu kapsamı:**

  - arrange-act-assert
  - observable behavior ve implementation detail
  - deterministic ve isolated test
  - test doubles: dummy, stub, spy, mock ve fake
  - dependency seam
  - Jest/Vitest ile assertion, fixture ve parameterized test

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Entegrasyon ve Sözleşme Testi

- **Yerel aday anahtarı:** `academy-22/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 04
- **Konu kapsamı:**

  - database ve transaction testi
  - API integration test
  - external service fake/sandbox
  - consumer/provider contract
  - container tabanlı test ortamı
  - schema ve migration testi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — UI ve Uçtan Uca Test

- **Yerel aday anahtarı:** `academy-22/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 05
- **Konu kapsamı:**

  - component test ve kullanıcı odaklı sorgu
  - accessibility test
  - Playwright ile browser/E2E
  - network, authentication ve test data
  - visual regression
  - az ama kritik E2E senaryosu

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Test Güdümlü Geliştirme

- **Yerel aday anahtarı:** `academy-22/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 06
- **Konu kapsamı:**

  - red-green-refactor
  - test-first ile tasarım geri bildirimi
  - BDD ve executable specification
  - acceptance test-driven development
  - characterization test
  - legacy code için seam oluşturma

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Özel Kalite Testleri

- **Yerel aday anahtarı:** `academy-22/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 07
- **Konu kapsamı:**

  - performance, load, stress ve soak
  - security test ve abuse case
  - property-based ve fuzz testing
  - mutation testing
  - compatibility ve localization
  - resilience/chaos testing

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Test Operasyonu

- **Yerel aday anahtarı:** `academy-22/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 22, Modül 08
- **Konu kapsamı:**

  - coverage metriklerinin sınırları
  - flaky test nedenleri ve karantina politikası
  - paralel çalışma, zaman ve concurrency
  - test data yönetimi ve privacy
  - CI kalite kapıları
  - defect report, root cause ve escape analysis

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 23 — Sistem Tasarımı ve Dağıtık Sistemler

**Amaç:** Büyük ölçekli sistemleri gereksinim, kapasite, veri, iletişim, tutarlılık, güvenilirlik, güvenlik ve maliyet boyutlarıyla tasarlamak.

**Ön koşul:** Akademi 03, 05–06, 14–16, 19–22.

#### Chapter adayı 01 — Tasarım Görüşmesi ve Gereksinim

- **Yerel aday anahtarı:** `academy-23/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 01
- **Konu kapsamı:**

  - functional/non-functional requirement
  - kapsam, assumption ve success metric
  - workload, read/write ratio ve traffic shape
  - latency, throughput, availability ve durability hedefi
  - back-of-the-envelope capacity estimation
  - API ve data model başlangıcı

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Ağ ve Trafik Katmanı

- **Yerel aday anahtarı:** `academy-23/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 02
- **Konu kapsamı:**

  - DNS, anycast ve CDN
  - load balancer L4/L7
  - reverse proxy ve API gateway
  - connection, keep-alive ve protocol seçimi
  - rate limiter algoritmaları
  - global routing ve locality

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Veri Ölçekleme

- **Yerel aday anahtarı:** `academy-23/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 03
- **Konu kapsamı:**

  - indexing ve query pattern
  - replication ve read replica
  - partitioning/sharding ve consistent hashing
  - leader/follower ve multi-leader
  - schema evolution ve online migration
  - relational/NoSQL/search store seçimi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Tutarlılık ve Dağıtık İşlemler

- **Yerel aday anahtarı:** `academy-23/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 04
- **Konu kapsamı:**

  - consistency modelleri
  - CAP'in doğru kapsamı ve network partition
  - PACELC farkındalığı
  - quorum, consensus ve leader election girişi
  - saga, 2PC trade-off'u ve outbox
  - conflict resolution ve idempotency

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Mesajlaşma ve Akış

- **Yerel aday anahtarı:** `academy-23/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 05
- **Konu kapsamı:**

  - queue, pub/sub, log ve stream
  - delivery semantics
  - ordering, partition ve consumer group
  - backpressure ve flow control
  - retry, dead-letter ve replay
  - event schema ve evolution

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Cache ve Okuma Modelleri

- **Yerel aday anahtarı:** `academy-23/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 06
- **Konu kapsamı:**

  - client/CDN/application/database cache
  - cache-aside, write-through ve write-behind
  - invalidation ve consistency
  - hot key, stampede ve eviction
  - materialized view ve search index
  - cache başarısızlığında davranış

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Dayanıklılık ve Operasyon

- **Yerel aday anahtarı:** `academy-23/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 07
- **Konu kapsamı:**

  - timeout, retry, jitter ve retry budget
  - circuit breaker, bulkhead ve load shedding
  - redundancy, failover ve disaster recovery
  - graceful degradation
  - SLI/SLO, tracing ve capacity planning
  - chaos/failure testing

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Güvenlik, Çok Kiracılık ve Maliyet

- **Yerel aday anahtarı:** `academy-23/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 08
- **Konu kapsamı:**

  - trust boundary ve service identity
  - tenant isolation ve noisy neighbor
  - encryption ve data locality
  - abuse prevention ve fraud signals
  - unit economics ve cost model
  - compliance ve audit

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 09 — Referans Sistemler

- **Yerel aday anahtarı:** `academy-23/chapter-09`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 23, Modül 09
- **Konu kapsamı:**

  - URL shortener ve paste service
  - chat ve presence sistemi
  - news feed ve notification sistemi
  - file storage ve media processing
  - search/autocomplete
  - e-commerce checkout ve inventory
  - ride matching veya delivery tracking
  - metric/log ingestion platformu

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 24 — AI Mühendisliği

**Amaç:** AI özelliklerini demo olmaktan çıkarıp veri, model, değerlendirme, güvenlik, gözlemlenebilirlik ve insan denetimiyle üretim sistemine dönüştürmek.

**Ön koşul:** Akademi 03, 06, 11, 14–16, 19, 22–23. Temel olasılık ve istatistik bu akademide köprü modülüyle tamamlanır.

#### Chapter adayı 01 — AI ve Makine Öğrenmesi Temeli

- **Yerel aday anahtarı:** `academy-24/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 01
- **Konu kapsamı:**

  - AI, machine learning, deep learning ve generative AI ayrımı
  - problem formulation ve baseline
  - feature, label, training ve inference
  - supervised/unsupervised learning
  - train/validation/test split ve data leakage
  - classification/regression metrikleri
  - bias, variance, overfitting ve generalization

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Veri ve Model Yaşam Döngüsü

- **Yerel aday anahtarı:** `academy-24/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 02
- **Konu kapsamı:**

  - veri toplama, provenance ve lisans
  - temizleme, labeling ve quality check
  - dataset versioning
  - experiment tracking ve reproducibility
  - deployment, monitoring ve model drift
  - human feedback ve rollback

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Dil Modeli Temelleri

- **Yerel aday anahtarı:** `academy-24/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 03
- **Konu kapsamı:**

  - tokenization ve context window
  - embedding ve representation
  - transformer/attention için kavramsal model
  - pretraining, instruction tuning ve alignment
  - inference, sampling, temperature ve determinism sınırı
  - hallucination, calibration ve uncertainty

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Model API'leri ve Yapılandırılmış Çıktı

- **Yerel aday anahtarı:** `academy-24/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 04
- **Konu kapsamı:**

  - model/provider seçimi
  - request, message ve response yaşam döngüsü
  - streaming, tool calling ve structured output
  - token/cost/latency bütçesi
  - retry, timeout, fallback ve rate limit
  - secret, privacy ve data retention

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — İstem ve Bağlam Mühendisliği

- **Yerel aday anahtarı:** `academy-24/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 05
- **Konu kapsamı:**

  - instruction hierarchy ve context construction
  - clear task, constraints ve examples
  - few-shot ve decomposition
  - output schema ve validation
  - prompt versioning
  - prompt injection'a dayanıklı tasarım sınırları

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Embedding, Arama ve RAG

- **Yerel aday anahtarı:** `academy-24/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 06
- **Konu kapsamı:**

  - embedding similarity ve vector index
  - ingestion, parsing ve metadata
  - chunking ve overlap
  - lexical, vector ve hybrid retrieval
  - query transformation ve reranking
  - grounded generation ve citation
  - freshness, permission-aware retrieval ve deletion

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Agent ve Araç Kullanımı

- **Yerel aday anahtarı:** `academy-24/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 07
- **Konu kapsamı:**

  - workflow ile agent ayrımı
  - tool schema, permission ve least privilege
  - state, memory ve checkpoint
  - planning, routing ve handoff
  - human approval ve irreversible action
  - Model Context Protocol
  - sandbox ve untrusted execution

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Değerlendirme

- **Yerel aday anahtarı:** `academy-24/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 08
- **Konu kapsamı:**

  - eval objective ve failure taxonomy
  - representative dataset ve golden set
  - deterministic check ve task metric
  - rubric, human review ve model grader
  - pairwise/A-B comparison
  - retrieval ve groundedness evaluation
  - regression gate ve continuous eval

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 09 — Güvenlik ve Sorumlu AI

- **Yerel aday anahtarı:** `academy-24/chapter-09`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 09
- **Konu kapsamı:**

  - prompt injection ve indirect injection
  - data exfiltration ve tool abuse
  - unsafe content ve policy enforcement
  - bias, fairness ve accessibility
  - privacy, copyright ve provenance
  - NIST AI RMF: Govern, Map, Measure, Manage
  - red teaming ve incident response

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 10 — Üretim AI Sistemleri

- **Yerel aday anahtarı:** `academy-24/chapter-10`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 24, Modül 10
- **Konu kapsamı:**

  - model gateway ve provider abstraction
  - caching, batching ve queue
  - trace, feedback ve cost telemetry
  - latency/quality/cost trade-off'u
  - canary, shadow ve rollback
  - fine-tuning, distillation ve RAG seçim ölçütleri
  - multimodal input/output

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 25 — Kariyer ve Profesyonel Mühendislik

**Amaç:** Teknik bilgiyi işbirliği, iletişim, kanıtlanabilir portföy, mülakat ve sürdürülebilir kariyer yönetimi becerilerine dönüştürmek.

**Ön koşul:** Akademi 04 ile başlar ve program boyunca sürer.

#### Chapter adayı 01 — Profesyonel Kimlik ve Hedef

- **Yerel aday anahtarı:** `academy-25/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 01
- **Konu kapsamı:**

  - rol aileleri ve uzmanlık yolları
  - beceri envanteri ve kanıt matrisi
  - T-shaped gelişim planı
  - etik sorumluluk ve profesyonel davranış
  - çeyreklik öğrenme hedefi ve geri bildirim sistemi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — GitHub ve Portföy

- **Yerel aday anahtarı:** `academy-25/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 02
- **Konu kapsamı:**

  - profil, pinned repository ve güvenilir contribution graph yorumu
  - üretim kalitesinde README
  - issue, commit, PR ve review kanıtı
  - demo, architecture diagram ve live deployment
  - project case study: problem, karar, sonuç ve öğrenme
  - gizli bilgi, lisans ve üçüncü taraf varlıklar

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — CV ve Profesyonel Profil

- **Yerel aday anahtarı:** `academy-25/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 03
- **Konu kapsamı:**

  - role göre tek sayfalık CV
  - etki ve ölçüm odaklı madde
  - ATS uyumu ve keyword stuffing'den kaçınma
  - LinkedIn ve teknik profil tutarlılığı
  - portföy bağlantısı ve doğrulanabilir iddia
  - Türkçe/İngilizce profesyonel sürüm

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — İş Arama ve İletişim

- **Yerel aday anahtarı:** `academy-25/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 04
- **Konu kapsamı:**

  - şirket/rol araştırması
  - ilanı gereksinim ve sinyal olarak okuma
  - hedefli başvuru ve takip sistemi
  - recruiter/hiring manager iletişimi
  - networking ve topluluk katkısı
  - reddedilme verisinden öğrenme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Ekip Çalışması

- **Yerel aday anahtarı:** `academy-25/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 05
- **Konu kapsamı:**

  - yazılı ve asenkron iletişim
  - stand-up, planning, refinement ve retrospective
  - görev parçalama, tahmin ve risk bildirme
  - code review alma/verme
  - teknik anlaşmazlık ve karar kaydı
  - ürün, tasarım, QA ve operasyonla işbirliği

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Teknik Mülakat

- **Yerel aday anahtarı:** `academy-25/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 06
- **Konu kapsamı:**

  - problem netleştirme ve düşünceyi seslendirme
  - coding interview ve test etme
  - JavaScript/TypeScript, web, backend ve database soruları
  - algoritma/veri yapısı görüşmesi
  - debugging ve code review görüşmesi
  - system design görüşmesi
  - bilmeme durumunu profesyonel yönetme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Davranışsal Mülakat

- **Yerel aday anahtarı:** `academy-25/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 07
- **Konu kapsamı:**

  - STAR/CAR yapılandırması
  - sahiplik, çatışma, hata, belirsizlik ve öğrenme örnekleri
  - proje kararlarını sonuçlarla anlatma
  - etik ve güvenlik senaryoları
  - mock interview, kayıt ve rubric geri bildirimi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Teklif, Freelance ve Uzun Vadeli Gelişim

- **Yerel aday anahtarı:** `academy-25/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 25, Modül 08
- **Konu kapsamı:**

  - teklif bileşenleri ve karşılaştırma
  - müzakere ve profesyonel yazışma
  - freelance scope, estimate, contract ve change request
  - faturalama, teslimat ve müşteri sınırı farkındalığı
  - onboarding ve ilk 30/60/90 gün
  - mentorluk, açık kaynak ve sürekli öğrenme

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

### Akademi 26 — Capstone ve Gerçek Dünya Teslimatı

**Amaç:** Öğrencinin bir ürünü problem keşfinden üretim operasyonuna kadar bağımsız ve ekip içinde teslim edebildiğini bütünleşik kanıtlarla doğrulamak.

**Ön koşul:** İlgili bütün temel akademiler; capstone kapsamına göre Akademi 24.

#### Chapter adayı 01 — Hazırlık Kapıları

- **Yerel aday anahtarı:** `academy-26/chapter-01`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 01
- **Konu kapsamı:**

  - outcome ve competency gap analizi
  - capstone türü ve zorluk seviyesi seçimi
  - ekip/rol/sahiplik modeli
  - danışman ve review takvimi
  - etik, güvenlik ve hukuki sınırlar
  - başlamama/geri dönme kriterleri

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 02 — Problem ve Ürün Keşfi

- **Yerel aday anahtarı:** `academy-26/chapter-02`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 02
- **Konu kapsamı:**

  - kullanıcı ve stakeholder araştırması
  - problem statement ve value proposition
  - alternatif/rekabet analizi
  - persona, journey ve use case
  - başarı metriği ve baseline
  - scope, non-goal ve MVP

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 03 — Gereksinim ve Plan

- **Yerel aday anahtarı:** `academy-26/chapter-03`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 03
- **Konu kapsamı:**

  - functional/non-functional requirements
  - acceptance criteria ve traceability
  - risk, assumption ve dependency register
  - milestone, issue ve incremental delivery
  - estimate ve capacity
  - Definition of Ready/Done

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 04 — Tasarım ve Mimari

- **Yerel aday anahtarı:** `academy-26/chapter-04`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 04
- **Konu kapsamı:**

  - UX flow, wireframe ve accessibility plan
  - domain/data model
  - API/event contracts
  - C4 diagrams ve deployment architecture
  - ADR seti ve trade-off
  - threat model, privacy ve abuse cases
  - test ve observability strategy

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 05 — Uygulama ve İşbirliği

- **Yerel aday anahtarı:** `academy-26/chapter-05`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 05
- **Konu kapsamı:**

  - vertical slice ve working increment
  - branch, commit, PR ve code review
  - coding standards ve refactoring
  - database migration ve seeded environments
  - third-party integration
  - düzenli demo ve stakeholder feedback

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 06 — Kalite ve Güvenlik

- **Yerel aday anahtarı:** `academy-26/chapter-06`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 06
- **Konu kapsamı:**

  - unit/integration/contract/E2E test
  - accessibility ve cross-browser test
  - load/performance ve capacity test
  - SAST/dependency/secret/container scan
  - manual exploratory ve abuse testing
  - defect triage ve release criteria

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 07 — Teslimat ve Operasyon

- **Yerel aday anahtarı:** `academy-26/chapter-07`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 07
- **Konu kapsamı:**

  - container ve IaC
  - CI/CD ve protected environments
  - database release/rollback
  - metrics/logs/traces, dashboard ve SLO
  - backup/restore ve disaster drill
  - incident simulation ve postmortem
  - cost and capacity report

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

#### Chapter adayı 08 — Dokümantasyon ve Savunma

- **Yerel aday anahtarı:** `academy-26/chapter-08`
- **Durum:** Scope Draft; kanonik kimlik tahsis edilmedi.
- **Kaynak modül:** Akademi 26, Modül 08
- **Konu kapsamı:**

  - kullanıcı ve geliştirici dokümantasyonu
  - API reference ve architecture guide
  - operations runbook
  - security/privacy açıklaması
  - canlı demo ve teknik savunma
  - case study, retrospective ve bakım planı
  - devir ve açık kaynak hazırlığı
  - E-ticaret ve sipariş platformu
  - Çok kiracılı SaaS yönetim platformu
  - Gerçek zamanlı işbirliği veya mesajlaşma sistemi
  - Öğrenme yönetim sistemi
  - İş/aday eşleştirme platformu
  - Sağlık randevu ve kayıt sistemi (gerçek kişisel veri olmadan)
  - Fintech bütçe ve işlem simülatörü (gerçek para işlemi olmadan)
  - Sosyal içerik ve moderation platformu
  - AI destekli doküman araştırma ve çalışma asistanı
  - Developer tooling, CI analiz veya gözlemlenebilirlik ürünü
  - çalışan ve erişilebilir üretim dağıtımı
  - gerçek Git/PR/review geçmişi
  - test, güvenlik, performans ve gözlemlenebilirlik raporları
  - mimari kararlar ve alternatifler
  - olay/rollback tatbikatı
  - bağımsız jüri teknik savunması
  - outcome ve competency bazlı portföy matrisi

- **Üretim takibi:** [ ] Contract [ ] AI map [ ] Research [ ] Lesson [ ] Assets [ ] EQA [ ] Pilot [ ] Release

## Validation

- Akademi sayısı: 26/26.
- Akademi 01 kanonik Chapter kaydı: 38/38.
- Akademi 02–26 Chapter adayı: 198.
- Toplam üretim birimi: 236.
- Akademi 02–26 doğrudan konu eşlemesi: 1172.
- Konusuz Chapter adayı: 0.
- Yeni kanonik kimlik: 0.
- Akademi 01 kimlik veya sırası değiştirilmedi.
- Kaynak müfredat Draft olduğu için bu belge de Draft ve Informational'dır.

## References

- [ASEA 26 Akademi Eğitim Ağacı](./asea-26-academy-curriculum-tree.md)
- [ASEA AI-Native Competency Framework](./asea-ai-native-competency-framework.md)
- [Müfredat İlerleme Takip Dosyası](./asea-26-academy-curriculum-progress-tracker.txt)
- [Akademi 01 Kanonik Chapter Registry](../docs/01-programming/programming-fundamentals/academy/04-chapter-registry.md)
- [Blueprint v2 Identifier Design](../blueprint-v2/03-identifier-standard.md)
- [Supporting Document Standard](../docs/standards/governance/01-supporting-document-standard.md)
