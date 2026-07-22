---
document_type: "research-packet"
document_id: "V01-C16-RP01"
title: "V01-C16 Functional Decomposition and Reuse Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C16"
last_updated: "2026-07-23"
---

# V01-C16 Functional Decomposition and Reuse Research Packet

## 1. Research Decision

Araştırma, `V01-LO024` için üretime hazırdır. Öğrenci çok adımlı bir problemi
anlamlı sorumluluklara ayıracak, function map üretecek ve iki tasarımı cohesion,
coupling, change cost ve testability kanıtıyla karşılaştıracaktır.

## 2. Canonical Mapping

| Alan | Kayıtlar |
|---|---|
| Blueprint | `V01-C16-BP01` |
| Ön koşullar | `V01-C03`, `V01-C04`, `V01-C13`–`V01-C15` |
| Outcome | `V01-LO024` |
| Claims | `ASEA-CLM-000055`–`ASEA-CLM-000057` |
| Concepts | `ASEA-CON-000055`–`ASEA-CON-000057` |
| Lab | `V01-C16-L01` — Decompose a Report Generator |
| Challenge | `V01-C16-CH01` — Compare Two Function Maps |

## 3. Terminology Boundary

- **İşlevsel ayrıştırma (Functional Decomposition):** Büyük davranışı açık
  sorumluluk ve sözleşmelere sahip fonksiyonlara bölme tasarımıdır.
- **Uyum (Cohesion):** Bir birimin içindeki öğelerin aynı sorumluluğa ne kadar
  güçlü hizmet ettiğidir.
- **Bağımlılık derecesi (Coupling):** Ayrı birimlerin birbirinin verisine,
  durumuna, zamanlamasına veya iç kararlarına ne ölçüde bağlı olduğudur.
- **Orkestrasyon (Orchestration):** Ayrı adımların sırasını, dallanmasını ve hata
  akışını koordine etmektir.
- **Bileşim (Composition):** Uyumlu sözleşmeleri daha büyük davranış için bağlamaktır.
- **Yeniden kullanım (Reuse):** Mevcut birimi sözleşmesine uygun başka bağlamda
  kullanmaktır; her benzer satırı tek soyutlamaya zorlamak değildir.

## 4. Decomposition Is a Design Decision

Ayrıştırma, uzun fonksiyondaki her satırı ayrı helper'a taşımak değildir. Amaç;
iş problemi içindeki anlamlı aşamaları, değişim nedenlerini ve veri akışını
görünür kılmaktır. Fonksiyon sayısının artması tek başına kalite kanıtı değildir.
Kötü ayrıştırma daha fazla çağrı, parçalı okuma ve geniş parametre zinciri
üretebilir.

## 5. Responsibility Map Before Function Map

Kod yazmadan önce problemi fiiller ve çıktılarla haritalayın: girdiyi doğrula,
normalize et, hesapla, sırala, biçimlendir ve sun. Her adım için girdi, çıktı,
hata ve yan etki sözleşmesi yazın. Bu responsibility map, function map'in nedenini
oluşturur ve sözdizimine göre rastgele extraction'ı önler.

## 6. Function Map

Function map; her fonksiyonun adını, sorumluluğunu, girdisini, sonucunu ve
bağlandığı sonraki adımları gösterir. Bir call graph'ın ham çağrı listesinden
farklıdır: tasarım niyeti ve contract compatibility içerir. `generateReport`
orchestrator; `validateRows`, `calculateMetrics` ve `formatReport` adımlarını
koordine edebilir.

## 7. Top-Down and Bottom-Up Work

Top-down yaklaşım önce bütün davranışı aşamalara böler. Bottom-up yaklaşım mevcut
küçük, güvenilir sözleşmeleri birleştirir. Gerçek refactoring döngüseldir:
problemden üst seviye harita çıkarılır, mevcut fonksiyonlar değerlendirilir,
testlerle küçük extraction yapılır ve harita yeni kanıta göre düzeltilir.

## 8. Abstraction Level

Bir orchestrator'ın aynı satırlarda “raporu hazırla” gibi yüksek seviye kararlar
ile string karakteri ve indeks yönetimi gibi düşük seviye ayrıntıları yürütmesi
okuma akışını bozar. Tek abstraction seviyesi mutlak satır kuralı değildir;
fonksiyonun gövdesi benzer ayrıntı düzeyinde bir hikâye anlatmalıdır.

## 9. Cohesion Evidence

Cohesion kısa olma değildir. Bir fonksiyonun bütün adımları aynı outcome'a ve
aynı değişim nedenine hizmet ediyorsa güçlü cohesion kanıtı vardır. Bir fonksiyon
hem veriyi parse ediyor, hem vergi hesaplıyor, hem terminal renklendiriyorsa üç
farklı değişim nedeni taşır. Gözlenebilir sorular: Fonksiyon adı bütün gövdeyi
doğru anlatıyor mu? Bir gereksinim değişikliği hangi ilgisiz satırları etkiliyor?

## 10. Coupling Inventory

Coupling yalnız çağrı sayısı değildir. Parametre/return şekli, shared mutable
state, exception, çağrı sırası, global config, belirli output formatı ve başka
fonksiyonun iç ayrıntısına güvenmek bağımlılık kanallarıdır. Envanter her bağlantı
için yön, veri, zamanlama, failure ve değişim riski kaydeder.

## 11. Appropriate Coupling

Sıfır coupling mümkün veya amaç değildir; bileşim bağımlılık gerektirir. Hedef,
küçük ve açık contract üzerinden gerekli coupling kurmaktır. `formatReport`,
`calculateMetrics` sonucuna bağımlı olabilir; fakat hesap fonksiyonunun global
ara dizisini veya internal temporary adlarını bilmemelidir.

## 12. Dependency Direction

Dependency direction, hangi birimin hangisinin sözleşmesine güvendiğini gösterir.
Üst seviye orchestrator adımları çağırır; hesap adımı terminal sunumuna bağımlı
olmamalıdır. Döngüsel bağımlılık muhakeme ve test kurulumunu zorlaştırır. C16
framework architecture öğretmez; iş akışı düzeyinde tek yönlü data-flow sezgisi kurar.

## 13. Helper Function Contract

Helper yalnız “kodu kısaltan parça” değildir. Anlamlı adı, necessary input'ları,
tutarlı return shape'i, hata davranışı ve effect boundary'si olmalıdır. Fonksiyon
yalnız caller'ın beş yerel değişkenini parametre alıp iki satırı gizliyorsa yanlış
boundary olabilir.

## 14. Orchestration

Orchestrator; sırayı, branching'i, failure propagation'ı ve etkili sınırları
koordine eder. Her adımın internal hesaplamasını kendi içinde yapmamalıdır.
“God function”ı daha küçük helper'lara ayırıp bütün kararları yine tek yerde
saklamak yalnız yüzeysel ayrıştırma olabilir.

## 15. Pipeline

Pipeline, bir adımın output'unu uyumlu sonraki input'a bağlar. Her aşama aynı
failure ve result modelini kullanmıyorsa pipeline belirsizleşir. C14 contract ve
C15 pure-core bilgisi, pipeline'ı yalnız iç içe function calls olarak değil
denetlenebilir data flow olarak kurmak için ön koşuldur.

## 16. Reuse Versus Composition

Reuse aynı fonksiyonu başka bağlamda kullanır. Composition küçük sözleşmeleri
yeni davranışta birleştirir. Her reusable fonksiyon composable olmayabilir;
console'a yazan ve `undefined` döndüren fonksiyonu değer pipeline'ına bağlamak
zordur. Bileşim için input/output/failure contract uyumu gerekir.

## 17. Premature Abstraction

İki kod parçası yüzeyde aynı görünse de farklı iş kuralları nedeniyle bağımsız
değişebilir. Hemen generic helper üretmek parametre flag'leri ve condition'larla
coupling yaratır. Ortak invariant ve aynı change reason kanıtlanana kadar küçük
duplication yanlış abstraction'dan daha güvenli olabilir.

## 18. Characterization and Refactoring

Mevcut büyük fonksiyonu ayırmadan önce çıktıları ve etkileri characterization
tests ile kaydedin. Extract Function küçük adımlarla yapılır: adayı belirle,
girdileri/çıktıları çıkar, extraction yap, test et, sonra bir sonraki boundary'ye
geç. Refactoring davranışı korur; iş kuralı değişikliği ayrı adım olmalıdır.

## 19. Compare Two Valid Designs

Tek doğru function map olmayabilir. İki tasarımı şu change scenarios ile
karşılaştırın: yeni input formatı, yeni hesap kuralı, farklı output formatı,
tek adımın bağımsız testi, hata raporlama değişikliği. Hangi tasarımda daha az
contract ve birim değişiyor? Karar satır sayısına değil değişim yayılımına dayanır.

## 20. Common Misconceptions

1. Kısa fonksiyon otomatik cohesive değildir.
2. Her duplicate satır reusable abstraction değildir.
3. Çok helper otomatik loose coupling sağlamaz.
4. Global state üzerinden veri paylaşmak parameter sayısını azaltsa da coupling'i artırır.
5. Orchestrator bütün işi yapmak zorunda değildir.
6. Pipeline, yalnız nested syntax değildir; contract compatibility gerekir.
7. Extraction öncesi test olmadan davranış korunduğu kanıtlanamaz.

## 21. Production Contract

Ana ders minimum 8.000 kelime ve 15 zorunlu H2 kullanacaktır. Öğrenci önce tek
fonksiyonlu çalışır örneği izleyecek, responsibility map üretecek, iki alternatif
function map'i change scenarios ve tests ile karşılaştıracaktır. JavaScript örnek
dildir; kavramlar dil bağımsız anlatılır.

## 22. Practice Contract

20 alıştırma; boundary seçimi, cohesion, coupling inventory, pipeline ve reuse
kararlarını kapsar. Lab report generator'ı ayrıştırır. Challenge iki function
map'i aynı requirements üzerinde uygular ve karar belgesi ister. AI Mentor hazır
harita vermez; önce öğrencinin responsibility ve dependency evidence'ını ister.

## 23. Assessment Contract

25 soruluk quiz ayrı answer key kullanır. Geçiş kanıtı: çok adımlı probleme ait
function map, açık contract tablosu, dependency graph, iki decomposition için
change-scenario analizi ve independent tests. Yalnız çalışan kod yeterli değildir.

## 24. Primary Sources

1. [IEEE Computer Society — SWEBOK V4.0a](https://www.computer.org/education/bodies-of-knowledge/software-engineering)
2. [SWEBOK V4 PDF](https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf)
3. [ACM/IEEE-CS/AAAI CS2023](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf)
4. [CS2023 Software Engineering Knowledge Area](https://csed.acm.org/knowledge-areas-software-engineering-se-cs2013-version/)
5. [NASA SWE-058 Detailed Design](https://swehb.nasa.gov/spaces/7150/pages/16450603/SWE-058%2B-%2BDetailed%2BDesign)
6. [NASA Software Design Analysis](https://swehb.nasa.gov/spaces/SWEHBVC/pages/100598312/Software%2BDesign%2BAnalysis)
7. [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html)
8. [ECMAScript 2025 — Function Definitions](https://tc39.es/ecma262/2025/multipage/ecmascript-language-functions-and-classes.html)
9. [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
10. [MDN — Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
11. [Node.js Test Runner](https://nodejs.org/api/test.html)
12. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
13. [Google Engineering Practices — Code Review](https://google.github.io/eng-practices/review/reviewer/)
14. [NIST SSDF SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)

## 25. Secondary and Industry Sources

15. [SEI — Introduction to Software Design](https://resources.sei.cmu.edu/asset_files/CurriculumModule/1989_007_001_15689.pdf)
16. [Microsoft Learn — Cohesion and Coupling](https://learn.microsoft.com/en-us/archive/msdn-magazine/2008/october/patterns-in-practice-cohesion-and-coupling)
17. [Microsoft Learn — Class Coupling Metrics](https://learn.microsoft.com/en-us/visualstudio/code-quality/code-metrics-class-coupling)
18. [Refactoring — Extract Function](https://refactoring.com/catalog/extractFunction.html)
19. [Refactoring — Inline Function](https://refactoring.com/catalog/inlineFunction.html)
20. [Refactoring — Move Statements into Function](https://refactoring.com/catalog/moveStatementsIntoFunction.html)
21. [Refactoring — Split Phase](https://refactoring.com/catalog/splitPhase.html)
22. [Martin Fowler — Function Length](https://martinfowler.com/bliki/FunctionLength.html)
23. [Martin Fowler — Refactoring with Pipelines](https://martinfowler.com/articles/refactoring-pipelines.html)
24. [Python Design FAQ](https://docs.python.org/3/faq/design.html)
25. [Go Code Review Comments](https://go.dev/wiki/CodeReviewComments)
26. [SEI CERT — Design and Quality Guidance](https://wiki.sei.cmu.edu/confluence/display/seccode/SEI+CERT+Coding+Standards)

İkincil kaynaklar tek başına normatif davranış kanıtı değildir. Cohesion ve
coupling'in mutlak sayısal eşikleri bu başlangıç chapter'ına taşınmayacaktır;
observable dependency ve change-scenario evidence kullanılacaktır.

## 26. Research Conclusion

Kaynaklar functional decomposition, abstraction level, cohesion, coupling,
modularity ve testability için yeterli ve çeşitli taban sağlar. Üretim kararı:
`V01-C16-CPP-001` **Ready for Draft Production**. Ana risk, fonksiyon sayısını
tasarım kalitesi sanmaktır; ders her boundary'yi responsibility, contract,
dependency ve change evidence ile gerekçelendirecektir.
