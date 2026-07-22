---
title: "İşlevsel Ayrıştırma ve Yeniden Kullanım — Büyük Problemi Yönetilebilir Parçalara Bölmek"
volume: "01"
chapter: "16"
chapter_id: "V01-C16"
slug: "islevsel-ayristirma-ve-yeniden-kullanim"
difficulty: "Beginner"
estimated_time: "7-9 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C16-BP01"
production_packet_id: "V01-C16-CPP-001"
prerequisites:
  - "V01-C03"
  - "V01-C04"
  - "V01-C13"
  - "V01-C14"
  - "V01-C15"
learning_objectives:
  - "V01-LO024"
last_updated: "2026-07-23"
---

# İşlevsel Ayrıştırma ve Yeniden Kullanım — Büyük Problemi Yönetilebilir Parçalara Bölmek

## Learning Objectives

Bir program büyüdüğünde sorun yalnız satır sayısı değildir. Aynı fonksiyon farklı
iş kurallarını, veri dönüşümlerini, hata yönetimini ve kullanıcı çıktısını
birlikte taşıyabilir. Küçük bir değişiklik ilgisiz davranışları bozabilir. Bu
chapter'ın sonunda büyük bir algoritmayı rastgele helper'lara değil, açık
sorumluluk ve sözleşmelere sahip fonksiyonlara ayırabileceksiniz.

Öğrenciden beklenen davranışlar şunlardır:

- İşlevsel ayrıştırmayı (Functional Decomposition), çok adımlı davranışı anlamlı
  fonksiyon sorumluluklarına bölme tasarımı olarak açıklamak.
- Bir gereksinimden sorumluluk haritası (Responsibility Map) çıkarmak.
- Sorumlulukları girdi, çıktı, hata ve yan etki sözleşmeleriyle işlev haritasına
  (Function Map) dönüştürmek.
- Her satırı fonksiyona çıkarmak ile anlamlı decomposition arasındaki farkı göstermek.
- Soyutlama seviyesini (Abstraction Level), bir fonksiyon gövdesinin anlattığı
  ayrıntı düzeyi olarak okumak.
- Uyum kavramını (Cohesion), bir birimin bütün öğelerinin aynı sorumluluğa ve
  değişim nedenine hizmet etmesi üzerinden değerlendirmek.
- Bağımlılık derecesini (Coupling), ayrı birimler arasındaki veri, durum, zamanlama,
  hata ve iç ayrıntı bağımlılıkları üzerinden analiz etmek.
- “Yüksek cohesion, düşük coupling” ifadesini ezber sloganı yerine değişim
  senaryoları ve test izolasyonuyla kanıtlamak.
- Yardımcı fonksiyonun (Helper Function) yalnız kodu kısaltmadığını, açık bir
  sözleşme ve anlamlı isim taşıması gerektiğini göstermek.
- Bağımlılık yönünü (Dependency Direction) veri akışı ve sözleşme oklarıyla çizmek.
- Bileşimi (Composition), uyumlu fonksiyon sözleşmelerini bağlama olarak kullanmak.
- Veri hattını (Pipeline), bir aşamanın sonucunu sonraki aşamanın girdisine
  dönüştüren açık akış olarak tasarlamak.
- Orkestrasyonu (Orchestration), adımların sırasını, dallanmasını, hata akışını
  ve etkili sınırlarını koordine etme rolü olarak ayırmak.
- Yeniden kullanımı (Reuse), kararlı ve uygun sözleşmeyi başka bağlamda kullanma
  davranışı olarak tanımlamak.
- Tesadüfi tekrar ile ortak iş kuralını ayırarak erken soyutlama (Premature
  Abstraction) riskini değerlendirmek.
- Davranış karakterizasyon testleriyle (Characterization Tests) kaydedildikten
  sonra küçük Extract Function adımları uygulamak.
- Aynı gereksinimi karşılayan iki işlev haritasını cohesion, coupling,
  testability ve change cost ile karşılaştırmak.
- AI tarafından önerilen decomposition'da gereksiz helper, gizli global durum,
  uyumsuz contract ve sahte reuse sorunlarını denetlemek.

`V01-LO024` için başarı kanıtı üç parçalıdır. Birincisi, gerçek bir çok adımlı
problemin sorumluluk haritasını ve function map'ini üretmektir. İkincisi, her
fonksiyonun açık contract'ını ve dependency yönünü göstermektir. Üçüncüsü,
aynı davranış için iki geçerli decomposition seçeneğini en az üç change scenario
ve bağımsız test kanıtıyla karşılaştırıp gerekçeli seçim yapmaktır.

Bu chapter'ın hedefi en küçük fonksiyon sayısını veya en kısa fonksiyonu bulmak
değildir. Amaç, kodu okuyan ve değiştiren kişinin her birimin neden var olduğunu,
neyi bildiğini, neye bağlı olduğunu ve nasıl doğrulanacağını anlayabilmesidir.

## Prerequisites

C16, önceki chapter'ların birleşim noktasıdır. C03'te problemi parçalara ayırdınız;
C04'te algoritma ve trace oluşturdunuz; C13'te function contract, C14'te açık
input/output, C15'te scope ve effect boundary öğrendiniz. Şimdi bunları çalışan
program tasarımında birleştireceksiniz.

Notlarınıza bakmadan şu soruları cevaplayın:

1. Bir problem ile henüz seçilmemiş çözüm arasındaki fark nedir?
2. Algoritmanın doğru olduğunu hangi normal, sınır ve geçersiz vaka kanıtlar?
3. Function contract hangi girdileri, sonuçları ve failure davranışını açıklar?
4. Gereksiz, türetilebilir ve gizli input arasındaki fark nedir?
5. `console.log` ile `return` neden farklı veri kanallarıdır?
6. Bir global okuma function coupling'ini nasıl artırabilir?
7. Saf çekirdek ile etkili sınır hangi sorumlulukları ayırır?

Şu fonksiyonu inceleyin:

```js
function createStudentReport(student) {
  if (!student || !Array.isArray(student.scores)) {
    console.log("Geçersiz öğrenci");
    return;
  }

  const validScores = student.scores.filter(
    (score) => Number.isFinite(score) && score >= 0 && score <= 100,
  );

  const total = validScores.reduce((sum, score) => sum + score, 0);
  const average = validScores.length === 0 ? 0 : total / validScores.length;
  const status = average >= 60 ? "Başarılı" : "Gelişmeli";
  const line = `${student.name}: ${average.toFixed(2)} - ${status}`;

  console.log(line);
}
```

Fonksiyon çalışabilir. Ayrıştırmaya başlamadan önce şu sorumlulukları yazın:

- input yapısını doğrulama;
- puanları doğrulama/filtreleme;
- ortalama hesaplama;
- akademik durum belirleme;
- metin biçimlendirme;
- terminale yazma.

Hemen altı helper çıkarmayın. Önce hangi adımlar aynı iş kuralıyla değişir,
hangileri farklı arayüzlerde yeniden kullanılabilir ve hangileri effect boundary'dir
diye düşünün. Örneğin ortalama ve durum belirleme, aynı “öğrenci sonucu”
sorumluluğunda birlikte kalabilir. Terminale yazma ise web arayüzünden bağımsız
değişir ve sınırda ayrılmalıdır.

Çalışma disiplininiz şu sırada olsun:

1. Mevcut davranışı çalıştırmadan önce tahmin edin.
2. Normal, sınır ve geçersiz testlerle davranışı kaydedin.
3. Sorumlulukları fiil + sonuç biçiminde adlandırın.
4. Her aday fonksiyon için input/output/effect contract yazın.
5. Dependency oklarını çizin.
6. Küçük bir extraction yapın ve testleri tekrar çalıştırın.
7. İki alternatif boundary'yi change scenario ile karşılaştırın.
8. AI önerisini ancak kendi function map'inizden sonra inceleyin.

## Estimated Study Time

Önerilen toplam çalışma süresi 7–9 saattir. Bölüm, yalnız metin okumayla değil
en az iki gerçek decomposition deneyiyle tamamlanır.

| Çalışma | Süre | Kanıt |
|---|---:|---|
| Ön bilgi ve tek fonksiyon analizi | 45 dakika | Sorumluluk envanteri |
| Responsibility map ve function map | 75 dakika | İki seviyeli harita |
| Cohesion ve abstraction level | 60 dakika | Boundary gerekçesi |
| Coupling ve dependency direction | 75 dakika | Dependency inventory |
| Composition, pipeline ve orchestration | 60 dakika | Veri akışı izi |
| Reuse ve premature abstraction | 45 dakika | İki tekrar vakası analizi |
| Davranış koruyan refactoring | 75 dakika | Characterization tests ve diff |
| Hands-on exercise | 90 dakika | Report generator çözümü |
| Tekrar ve yansıma | 30 dakika | Karar günlüğü |

Bir function map'i on dakikada çizip code extraction'a geçmek hızlı görünebilir;
fakat yanlış boundary seçimi daha sonra bütün caller'ları değiştirebilir. Süreyi
fonksiyon sayısına değil, sorumluluk ve dependency kanıtına harcayın.

## Introduction

Yeni başlayan geliştirici genellikle iki uçtan birine gider. İlk uçta bütün
program tek büyük fonksiyondur. Input okuma, validation, hesaplama, karar verme,
formatlama ve çıktı aynı gövdededir. Diğer uçta her iki satır ayrı helper olur.
Fonksiyon adları `step1`, `processData`, `handleThing` gibi belirsizdir; veri
onlarca parametreden geçer ve akışı anlamak için dosyada sürekli zıplamak gerekir.

İki uç da aynı temel soruyu kaçırır: **Hangi davranışlar aynı sorumluluğa aittir
ve hangi değişiklikler birlikte gerçekleşir?**

Bir rapor üreticisini düşünün. Kaynak satırlarını okur, geçersiz satırları
ayırt eder, ölçümler hesaplar, sonuçları sıralar, metne dönüştürür ve dosyaya
yazar. “Altı adım var, altı fonksiyon olsun” başlangıç için yararlı bir taslak
olabilir. Fakat her adımın sınırı yalnız sıra numarasından belirlenmez:

- Validation bütün kuralları mı kapsar, yoksa format ile iş kuralı ayrılmalı mı?
- Hesaplama boş veride ne döndürür?
- Sıralama yeni array mi üretir, input'u mu değiştirir?
- Formatlama terminal ve CSV için ortak mı?
- Dosya yazma başarısızlığı hangi seviyede ele alınır?

Bu sorular fonksiyon sözleşmelerine ve dependency'lere götürür. Ayrıştırma,
yalnız kodu bölmek değil, bilgi ve karar sınırlarını seçmektir.

İş hayatında decomposition dört yerde görünür:

1. Yeni özellik geliştirirken problemden bir implementation plan çıkarırsınız.
2. Büyük mevcut fonksiyonu güvenle refactor edersiniz.
3. Code review'da bir change'in hangi birimleri etkilediğini değerlendirirsiniz.
4. AI'ın ürettiği “clean code” çözümünün gerçekten test edilebilir olup olmadığını
   denetlersiniz.

AI çok sayıda düzgün isimli helper üretebilir. Fakat helper'lar aynı global
durumu okuyorsa, birbirinin temporary shape'ini biliyorsa veya her yeni kuralda
beşi birden değişiyorsa tasarım loosely coupled değildir. Görsel düzen, design
evidence yerine geçmez.

Bu chapter boyunca tek bir ölçüte yaslanmayacağız. Function length, parametre
sayısı, çağrı sayısı ve duplicate satır miktarı sinyal olabilir; hiçbiri tek
başına karar vermez. Sorumluluk, contract, data flow, effect, change scenario ve
test isolation birlikte değerlendirilecektir.

## Core Concepts

### 1. Ayrıştırma nedir?

İşlevsel ayrıştırma, büyük davranışı daha küçük, adlandırılmış ve contract'ı
görünür fonksiyonlara bölmektir. “Daha küçük” görecelidir. Bir fonksiyon 30 satır
olup tek bir algoritmik sorumluluğu açıkça anlatabilir; başka bir fonksiyon 6
satırda validation, global mutation ve output'u karıştırabilir.

İyi ayrıştırma şu sorulara cevap verir:

- Bu fonksiyon hangi outcome'u üretir?
- Girdileri neden gerekli?
- Hangi failure'ları tanımlar?
- Hangi dış etkileri vardır?
- Kim bu contract'a bağımlıdır?
- Hangi gereksinim değişince bu fonksiyon değişir?

Bu cevaplar yoksa kodu başka dosyaya veya helper'a taşımak yalnız fiziksel
parçalamadır.

### 2. Problem decomposition ile function decomposition

C03'te problem decomposition yaptınız: büyük amacı alt problemlere ayırdınız.
Function decomposition bunun implementation seviyesindeki devamıdır, fakat bire
bir aynı olmak zorunda değildir. Bir alt problem birden fazla fonksiyon; birkaç
çok küçük alt problem tek cohesive fonksiyon olabilir.

Örneğin “geçerli sipariş toplamını üret” alt problemi şu sözleşmelere ayrılabilir:

1. `validateOrder(order)` — yapı ve iş kuralı hatalarını döndürür.
2. `calculateOrder(order, pricingRules)` — doğrulanmış veriden toplam üretir.
3. `formatOrderResult(result, locale)` — değeri sunum metnine dönüştürür.
4. `printOrder(text)` — terminal etkisini yürütür.

Bu harita tek olası çözüm değildir. Validation küçükse hesap fonksiyonunun
result modeline entegre edilebilir. Karar, değişim ve test kanıtına bağlıdır.

### 3. Sorumluluk haritası

Sorumluluk haritası, henüz fonksiyon adı seçmeden davranışı anlamlı fiillerle
listeler. Her satır şu şablonu kullanabilir:

| Sorumluluk | Girdi | Üretilen bilgi | Hata/etki |
|---|---|---|---|
| Satır yapısını doğrula | raw rows | valid/invalid ayrımı | Validation errors |
| Ölçüm hesapla | valid rows | metrics | Empty-data rule |
| Sonucu biçimlendir | metrics | text | Locale dependency |
| Çıktıyı yaz | text, path | write result | File I/O |

Bu harita iki erken hatayı önler. Birincisi, “kodda döngü var, `loopData` helper'ı
çıkaralım” gibi syntax temelli extraction'dır. İkincisi, input parsing ile iş
kuralı validation'ını tek belirsiz “process” adında toplamaktır.

### 4. İşlev haritası

İşlev haritası sorumlulukları somut function contracts'a dönüştürür. Haritada
her node fonksiyon, ok ise veri veya kontrol bağımlılığıdır.

```text
generateReport(rawRows)
  ├─ parseRows(rawRows) -> parsedRows
  ├─ validateRows(parsedRows) -> validationResult
  ├─ calculateMetrics(validRows) -> metrics
  ├─ formatReport(metrics) -> reportText
  └─ writeReport(reportText) -> writeResult
```

Bu ağaç yalnız çağrı sırası değildir. Her okun yanında hangi veri şeklinin
aktığını yazın. `validateRows` bazen array, bazen boolean, bazen exception
üretiyorsa sonraki contract belirsizdir. Function map, data-flow ve failure-flow
haritası olarak okunmalıdır.

### 5. Top-down ve bottom-up

Top-down tasarım büyük outcome'dan alt sorumluluklara iner. Öğrenci için güçlüdür
çünkü “neden bu fonksiyon var?” sorusunu gereksinime bağlar. Bottom-up yaklaşım
mevcut küçük araçlardan ve tekrar eden davranışlardan yukarı doğru bileşim kurar.

Gerçek geliştirme ikisini döngüsel kullanır:

1. Büyük workflow'u responsibility map'e ayır.
2. Mevcut fonksiyonların hangi sorumluluğu karşıladığını bul.
3. Eksik contract'ları tasarla.
4. Küçük extraction ve tests yap.
5. Uygulama kanıtına göre haritayı düzelt.

İlk çizim kutsal mimari değildir. Kod ve testler, boundary'nin yanlış olduğunu
gösterebilir. Tasarım öğrenilen bilgiyle gelişir.

### 6. Soyutlama seviyesi

Soyutlama seviyesi, bir satırın çözümün “ne yaptığına” mı, “nasıl yaptığına” mı
ne kadar yakın olduğunu anlatır.

```js
function generateReport(rows) {
  const validRows = validateRows(rows);
  const metrics = calculateMetrics(validRows);
  const report = formatReport(metrics);
  return report;
}
```

Bu gövde yüksek seviyede workflow anlatır. `calculateMetrics` içinde index,
reduce accumulator ve division-by-zero ayrıntıları bulunabilir. Bu ayrıntıları
orchestrator'a taşırsanız okuyucu “rapor nasıl ilerliyor?” ile “ortalama nasıl
hesaplanıyor?” sorularını aynı anda çözmek zorunda kalır.

Tek abstraction seviyesi katı bir yasak değildir. Bazen tek bir koruma koşulu
workflow'u açıklar. Önemli olan fonksiyonun ana hikâyesinin aynı ayrıntı
düzeyinde kalması ve düşük seviye mekanizmanın sorumluluğu gölgelememesidir.

### 7. Cohesion

Uyum, bir fonksiyonun içindeki öğelerin aynı sorumluluğa ne kadar güçlü hizmet
ettiğidir. Basit test: fonksiyon adını dürüstçe tek bir outcome ile yazabiliyor
musunuz? “ValidateAndSaveAndPrintUser” adı üç sorumluluğun açık alarmıdır.

Fakat tek fiil de hile yapabilir. `processUser` adı validation, database write,
email ve analytics'i gizleyebilir. Cohesion isimden değil, gövdenin change
reasons'ından kanıtlanır.

Şu change scenario'ları sorun:

- Input formatı değişirse hangi satırlar değişir?
- İş kuralı değişirse hangi satırlar değişir?
- Terminal yerine web output gelirse hangi satırlar değişir?
- Hata mesajı yerelleştirilirse hangi satırlar değişir?

Bir fonksiyon ilgisiz senaryoların hepsinde değişiyorsa düşük cohesion sinyali
vardır. Aynı iş kuralının birkaç adımı birlikte değişiyorsa onları sırf kısa
fonksiyonlar olsun diye ayırmak gereksiz olabilir.

### 8. Function length neden karar değildir?

Uzunluk smell olabilir. Bir fonksiyonu anlamak için zihninizde parçalara ayırmak
zorundaysanız meaningful extraction adayı vardır. Fakat satır sayısı şu bilgileri
vermez:

- satırlar tek algoritmanın ayrılmaz adımları mı;
- function external effect taşıyor mu;
- helper çıkınca parametre/data coupling artacak mı;
- isim yeni abstraction sağlayacak mı;
- extraction test isolation oluşturacak mı?

Bir satırlık `saveEverything(data)` çok fazla sorumluluk gizleyebilir. Kırk
satırlık açık bir state-machine geçişi tek cohesive algoritma olabilir. Uzunluğu
inceleme başlangıcı olarak kullanın, bitiş kararı olarak değil.

### 9. Coupling

Bağımlılık derecesi, ayrı birimlerin birbirine ne ölçüde bağlandığını anlatır.
Bir fonksiyon diğerini çağırdığında coupling vardır; bu normaldir. Risk,
bağımlılığın çok geniş, gizli, karşılıklı veya internal ayrıntıya dayalı olmasıdır.

Coupling kanalları:

- parametre ve return veri şekilleri;
- shared mutable state;
- global veya modül config;
- exception ve failure modeli;
- belirli çağrı sırası;
- callback davranışı;
- output formatının internal ayrıntıları;
- başka birimin temporary field'ları;
- timing ve environment assumptions.

Bir çağrı sayacı yalnız direct coupling'i ölçer. Fonksiyon hiç başka fonksiyon
çağırmadan aynı global object'i paylaşıyorsa yine güçlü coupling vardır.

### 10. Loose coupling sıfır coupling değildir

Fonksiyonlar bileşmek için birbirine bağlanır. `formatReport(metrics)` hesap
sonucunun contract'ına ihtiyaç duyar. Bu gerekli coupling'dir. Onu loose yapan:

- küçük ve kararlı input shape;
- explicit dependency;
- internal temporary'lerden bağımsızlık;
- tutarlı failure contract;
- ayrı test edilebilirlik;
- tek yönlü dependency.

`formatReport` doğrudan `calculateMetrics` içindeki global accumulator'ı okursa
contract gizlidir. `metrics` result object alırsa dependency görünür ve başka
hesap kaynağıyla da kullanılabilir.

### 11. Dependency inventory

İki function map'i karşılaştırmadan önce şu tabloyu doldurun:

| Consumer | Provider | Kanal | Gerekli bilgi | Risk |
|---|---|---|---|---|
| `formatReport` | `calculateMetrics` | return | public metrics | Düşük |
| `writeReport` | global config | hidden read | output path | Orta |
| `validateRows` | parser temporary | internal field | `_rawIndex` | Yüksek |

Her bağlantı için şunları sorun: provider değişince consumer neden değişir?
Testte provider olmadan consumer çalışabilir mi? Dependency input olarak
verilebilir mi? Consumer gerçekten internal ayrıntıyı bilmeli mi?

### 12. Bağımlılık yönü

Yüksek seviye workflow, alt adımların public contract'ına bağımlıdır. Saf hesap
fonksiyonu terminal rengine veya file path'e bağımlı olmamalıdır. Aksi yönlü
bağımlılık reuse ve testability'yi azaltır.

Basit C16 kuralı:

```text
external input -> effectful boundary -> pure transformations -> result
       result -> formatter -> effectful output boundary
```

Bu bir tam architecture standardı değildir. Ama calculation'ın presentation'a
bağımlı olmaması gerektiğini görünür kılar. Circular dependency bu seviyede
çoğunlukla yanlış sorumluluk veya shared state sinyalidir.

### 13. Helper function contract

Anlamlı helper şu özelliklere sahiptir:

- adı outcome veya kararı açıklar;
- minimum necessary input alır;
- tutarlı result shape döndürür;
- effect'i varsa adı ve contract'ında görünürdür;
- caller'ın internal local state'ine gereksiz bağımlı değildir;
- bağımsız test için anlamlı boundary sağlar.

Kötü aday:

```js
function doPart(a, b, c, d, e) {
  return a + b - c + d * e;
}
```

Bu isim domain anlamı üretmez. Parametreler caller'ın temporary'lerini taşıyor
olabilir. Daha iyi fonksiyon sınırı formülün iş outcome'unu ve units'ini anlatır:

```js
function calculateAvailableStock(received, sold, returned, damaged) {
  return received - sold + returned - damaged;
}
```

Satır sayısı benzer, abstraction değeri farklıdır.

### 14. Orchestration

Orchestrator, adımların hangi sırada çalışacağını, failure'da devam edilip
edilmeyeceğini ve hangi effect boundary'nin kullanılacağını belirler.

```js
function generateReport(rawRows) {
  const parsed = parseRows(rawRows);
  const validation = validateRows(parsed);

  if (!validation.ok) {
    return validation;
  }

  const metrics = calculateMetrics(validation.value);
  const report = formatReport(metrics);

  return { ok: true, value: report };
}
```

Orchestrator parse algoritmasını, metric formülünü veya string formatting
ayrıntısını kendisi yürütmez. Ama iş akışını ve failure short-circuit'ini açıkça
gösterir. Bütün business logic'i orchestrator'da tutup helper'ları yalnız birer
satırlık wrapper yapmak sahte decomposition'dır.

### 15. Pipeline

Veri hattı, bir aşamanın sonucunu sonraki aşamanın girdisine aktarır. Pipeline
kurmak için contract compatibility gerekir:

```text
rawRows -> parseRows -> parsedRows
parsedRows -> validateRows -> validRows
validRows -> calculateMetrics -> metrics
metrics -> formatReport -> text
```

Bir aşama exception, diğeri `null`, üçüncüsü `{ ok, value }` kullanırsa failure
flow parçalanır. Tek model her zaman zorunlu değildir; fakat orchestrator her
modeli bilinçli çevirmelidir. İç içe function calls yazmak pipeline'ı otomatik
olarak güvenli yapmaz.

### 16. Composition

Bileşim, küçük sözleşmelerin daha büyük davranış oluşturmasıdır. Şu iki fonksiyon
uyumludur:

```js
function normalizeName(name) {
  return name.trim().toLowerCase();
}

function createSlug(name) {
  return normalizeName(name).replaceAll(" ", "-");
}
```

`normalizeName` string alır ve string döndürür; `replaceAll` bu result üzerinde
çalışır. Ancak `normalizeName` yalnız console'a yazıp `undefined` döndürseydi
composition başarısız olurdu. C14'teki açık return ve consistent result shape,
C16 composition'ın temelidir.

### 17. Reuse

Yeniden kullanım, mevcut contract'ın başka caller ihtiyacına uygun olmasıdır.
Bir fonksiyon sırf iki yerde çağrıldığı için iyi reusable değildir. Hidden state,
özel temporary shape veya çok sayıda flag onu yeni bağlama sıkı bağlayabilir.

Reuse için kanıt:

- iki caller aynı gerçek iş kuralını kullanır;
- ortak invariant vardır;
- farklılıklar küçük ve anlamlı input'larla ifade edilir;
- contract iki bağlamda da doğal görünür;
- bağımsız contract tests vardır;
- bir caller değiştiğinde diğeri gereksiz etkilenmez.

### 18. Tesadüfi tekrar

İki kod parçası bugün aynı görünse de farklı nedenlerle değişebilir. Örneğin
employee discount ve campaign discount başlangıçta `%10` hesaplayabilir. Biri
insan kaynakları kuralı, diğeri pazarlama kuralıdır. Tek `calculateDiscount`
fonksiyonunda birleştirip `type` flag'i eklemek iki domain'i coupling ile bağlar.

Önce tekrarın nedenini anlayın. Aynı invariant birkaç değişiklik boyunca
korunuyorsa extraction daha güvenilir olur. Biraz duplication, yanlış abstraction
ve flag büyümesinden daha düşük maliyetli olabilir.

### 19. Premature abstraction belirtileri

- Fonksiyon adı `handle`, `process`, `common`, `generic` gibi belirsizdir.
- Davranış `type`, `mode`, `isSpecial` flag'leriyle dallanır.
- Her caller birçok `null` veya kullanılmayan alan geçirir.
- Contract en az ortak payda için anlamını kaybeder.
- Bir iş kuralı değişince ilgisiz caller tests bozulur.
- Helper'ı anlamak için bütün caller'ları aynı anda okumak gerekir.

Bu belirtiler “reuse kötü” demek değildir. Ortak abstraction'ın henüz doğru
boundary'de olmadığını gösterir.

### 20. Characterization tests

Mevcut büyük fonksiyonun doğru olduğundan emin olmasanız bile şu anki
gözlenebilir davranışını kaydetmeniz gerekir. Characterization test, mevcut
input-output/effect ilişkisini yakalar. Refactoring sonrası fark oluşursa bilinçli
mi, regresyon mu olduğunu değerlendirirsiniz.

Test matrisi:

- normal input;
- boş collection;
- boundary values;
- invalid data;
- duplicate data;
- output formatting;
- dış durumun önce/sonra hâli;
- hata ve return shape.

Testler yanlış iş kuralını kutsamak için değil, değişimi görünür yapmak içindir.
Bilinen bug ayrıca belgelenir ve behavior change adımında düzeltilir.

### 21. Extract Function adımları

1. Anlamlı responsibility adayını seçin.
2. Aday bloğun okuduğu dış local'ları input olarak listeleyin.
3. Ürettiği ve caller'ın kullandığı değerleri output olarak listeleyin.
4. Hidden read/write ve mutation'ı kaydedin.
5. Fonksiyon adını outcome'a göre seçin.
6. Kodu taşıyın, parameters/return contract kurun.
7. Characterization tests'i çalıştırın.
8. Caller ve extracted function'ı ayrı test edin.
9. Boundary gerçekten clarity/testability üretiyor mu değerlendirin.

Extraction sonrası parameter list çok uzunsa aday blok bağımsız responsibility
değil, caller'ın internal mekanizmasına sıkı bağlı olabilir. Ya data modelini
gözden geçirin ya da extraction'ı geri alın. Inline Function da geçerli bir
refactoring'dir; her extraction kalıcı olmak zorunda değildir.

### 22. Split phase

Bir fonksiyon aynı anda veriyi hazırlıyor ve kullanıyorsa iki aşamaya ayrılabilir.
Örneğin raw CSV satırını parse etmek ile parsed records üzerinden metrics
hesaplamak farklı change reasons taşır. Parse output contract'ı iki phase
arasındaki sınır olur.

Fayda: başka input formatı aynı calculation core'u kullanabilir. Maliyet: yeni
intermediate data model tasarlanır. Intermediate shape yalnız ilk implementasyonun
temporary'lerini yansıtıyorsa coupling artabilir. Shape domain anlamı taşımalı.

### 23. İki tasarımı karşılaştırmak

Tasarım A, validation ve calculation'ı tek `analyzeRows` fonksiyonunda tutabilir.
Tasarım B onları ayırabilir. Hangisi daha iyi? Şu change scenarios belirler:

1. Validation kuralları calculation'dan bağımsız değişiyor mu?
2. Geçerli rows başka workflow'da kullanılacak mı?
3. Validation tek başına test/rapor gerektiriyor mu?
4. İki aşama aynı intermediate structure'a sıkı mı bağlı?
5. Ayrı function calls hata modelini gereksiz karmaşıklaştırıyor mu?

Her senaryoda değişen functions, contracts ve tests'i sayın; fakat sayı tek
başına hüküm değildir. Değişikliğin riskini ve anlaşılabilirliğini gerekçelendirin.

### 24. AI decomposition audit

AI'a “bu fonksiyonu clean code yap” dediğinizde onlarca helper önerebilir.
Denetim soruları:

- Her helper hangi responsibility'yi temsil ediyor?
- Ad, gövdenin bütününü doğru anlatıyor mu?
- Function map gereksinime trace ediliyor mu?
- Parameter/return contract'ları uyumlu mu?
- Shared mutable state veya hidden config kaldı mı?
- Orchestrator business logic'i mi, workflow'u mu yönetiyor?
- Reuse gerçek shared invariant'a mı dayanıyor?
- Characterization tests behavior preservation kanıtlıyor mu?
- Alternatif decomposition neden reddedildi?

AI çıktısını satır sayısı veya estetikle değil bu kanıtlarla değerlendirin.

### 25. Uçtan uca worked example: görev özetleyici

Şimdi bütün kavramları tek örnekte birleştirelim. Gereksinim şöyledir: görev
kayıtlarını alan program, yalnız geçerli kayıtları kullanacak, tamamlanma
oranını hesaplayacak, önceliğe göre gruplayacak ve terminal için özet metni
üretecektir. Geçersiz kayıtlar kaybolmamalı; errors listesinde görünmelidir.

İlk çalışan sürüm:

```js
function summarizeTasks(tasks) {
  const errors = [];
  const valid = [];

  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index];

    if (!task || typeof task.title !== "string" || task.title.trim() === "") {
      errors.push({ index, code: "invalid-title" });
      continue;
    }

    if (!["low", "medium", "high"].includes(task.priority)) {
      errors.push({ index, code: "invalid-priority" });
      continue;
    }

    valid.push({
      title: task.title.trim(),
      priority: task.priority,
      completed: task.completed === true,
    });
  }

  const completedCount = valid.filter((task) => task.completed).length;
  const completionRate = valid.length === 0
    ? 0
    : completedCount / valid.length;

  const groups = { high: [], medium: [], low: [] };
  for (const task of valid) {
    groups[task.priority].push(task);
  }

  let text = `Geçerli görev: ${valid.length}\n`;
  text += `Tamamlanma: ${(completionRate * 100).toFixed(1)}%\n`;

  for (const priority of ["high", "medium", "low"]) {
    text += `${priority}: ${groups[priority].length}\n`;
  }

  return { text, errors };
}
```

İlk tepkiniz “uzun, bölelim” olabilir. Fakat boundary seçmeden önce davranış
kanıtı gerekir. Test en az şunları kaydeder: normal kayıt, whitespace title,
invalid title, invalid priority, boolean olmayan completed, empty list, bütün
invalid list, priority grouping ve yüzde formatting. Sonra responsibility map
çıkarılır:

| Responsibility | Input | Output | Change reason |
|---|---|---|---|
| Tek kaydı doğrula/normalize et | task, index | valid task veya error | Task schema/rules |
| Collection'ı ayır | tasks | valid tasks, errors | Accumulation policy |
| Completion metric hesapla | valid tasks | count/rate | Metric policy |
| Priority groups üret | valid tasks | groups | Grouping policy |
| Summary formatla | metrics, groups | text | Presentation |

Bu harita Tasarım A'yı önerir:

```js
function validateTask(task, index) {
  if (!task || typeof task.title !== "string" || task.title.trim() === "") {
    return { ok: false, error: { index, code: "invalid-title" } };
  }

  if (!["low", "medium", "high"].includes(task.priority)) {
    return { ok: false, error: { index, code: "invalid-priority" } };
  }

  return {
    ok: true,
    value: {
      title: task.title.trim(),
      priority: task.priority,
      completed: task.completed === true,
    },
  };
}

function partitionTasks(tasks) {
  const validTasks = [];
  const errors = [];

  for (let index = 0; index < tasks.length; index += 1) {
    const result = validateTask(tasks[index], index);

    if (result.ok) {
      validTasks.push(result.value);
    } else {
      errors.push(result.error);
    }
  }

  return { validTasks, errors };
}
```

`validateTask` tek kayıt kuralını, `partitionTasks` collection accumulation'ını
yönetir. Bu separation anlamlı mı? Eğer web formu tek task validation kullanacaksa
reuse kanıtı vardır. Tek caller olacak ve kurallar çok küçük kalacaksa iki
function arasında zıplamak ek maliyet olabilir. Boundary'nin değeri bağlama
bağlıdır.

Metrics ve grouping ayrı functions olabilir:

```js
function calculateCompletion(tasks) {
  const completed = tasks.filter((task) => task.completed).length;
  const rate = tasks.length === 0 ? 0 : completed / tasks.length;

  return { total: tasks.length, completed, rate };
}

function groupTasksByPriority(tasks) {
  const groups = { high: [], medium: [], low: [] };

  for (const task of tasks) {
    groups[task.priority].push(task);
  }

  return groups;
}
```

Bu functions aynı input'u okur fakat farklı outcomes üretir. Completion rule
değişirse grouping değişmez. Yeni priority eklendiğinde grouping ve validation
değişir, completion değişmez. Change scenarios yüksek cohesion kanıtı sağlar.

Formatter:

```js
function formatTaskSummary(completion, groups) {
  const lines = [
    `Geçerli görev: ${completion.total}`,
    `Tamamlanma: ${(completion.rate * 100).toFixed(1)}%`,
  ];

  for (const priority of ["high", "medium", "low"]) {
    lines.push(`${priority}: ${groups[priority].length}`);
  }

  return lines.join("\n");
}
```

Orchestrator:

```js
function summarizeTasks(tasks) {
  const partition = partitionTasks(tasks);
  const completion = calculateCompletion(partition.validTasks);
  const groups = groupTasksByPriority(partition.validTasks);
  const text = formatTaskSummary(completion, groups);

  return { text, errors: partition.errors };
}
```

Bu function map okunaklıdır; ancak bir coupling maliyeti vardır. Orchestrator
`partition.validTasks`, `partition.errors`, `completion` ve `groups` shapes'ini
bilir. Bu kötü değildir; workflow'un doğal contract'larıdır. Risk, formatter'ın
`partition` internal structure'ını veya validation temporary'lerini doğrudan
bilmesi olurdu.

Alternatif Tasarım B, tek `analyzeTasks` function'ında partition, completion ve
grouping'i tek loop'ta yapabilir; formatter ayrı kalır. Büyük dataset için daha
az iteration ve intermediate array üretebilir:

```js
function analyzeTasks(tasks) {
  const errors = [];
  const groups = { high: [], medium: [], low: [] };
  let validCount = 0;
  let completedCount = 0;

  for (let index = 0; index < tasks.length; index += 1) {
    const result = validateTask(tasks[index], index);

    if (!result.ok) {
      errors.push(result.error);
      continue;
    }

    validCount += 1;
    if (result.value.completed) completedCount += 1;
    groups[result.value.priority].push(result.value);
  }

  return {
    errors,
    groups,
    completion: {
      total: validCount,
      completed: completedCount,
      rate: validCount === 0 ? 0 : completedCount / validCount,
    },
  };
}
```

Tasarım B daha az function ve iteration kullanır. Düşük cohesion olmak zorunda
değildir: “task collection analysis” tek outcome olarak kabul edilebilir.
Tasarım A ise metrics ve grouping'i independently reuse/test etmeyi kolaylaştırır.

Karar matrisi:

| Scenario | Tasarım A | Tasarım B |
|---|---|---|
| Başka caller yalnız completion ister | Hazır function reuse | Analysis'in tamamını çalıştırır veya yeni extraction gerekir |
| Çok büyük task listesi | Birkaç pass | Tek pass avantajı olabilir |
| Yeni grouping policy | Yalnız grouping/tests | `analyzeTasks` ve tests değişir |
| Başlangıç uygulaması küçük | Daha çok contract | Daha az indirection |
| Unit isolation | Çok güçlü | Analysis bütün olarak test edilir |

Hiçbiri evrensel kazanan değildir. Requirement küçük listeler ve farklı report
consumers öngörüyorsa A daha esnek olabilir. Tek CLI, milyonlarca row ve tek
summary varsa B ölçüm sonrası daha uygun olabilir. Profesyonel karar, “küçük
fonksiyon her zaman iyi” sloganından değil constraints ve evidence'dan çıkar.

Son olarak behavior preservation kontrol edilir. İlk function ile seçilen yeni
design aynı test inputs'ta aynı `text` ve `errors` üretmelidir. Eğer yeni design
boolean olmayan `completed` değerini farklı yorumluyorsa bu refactoring değil
behavior change'dir; ayrı karar ve test gerektirir. Bu worked example,
decomposition'ın kodu güzel parçalara bölmekten çok daha fazlası olduğunu
gösterir: contracts, dependencies, change reasons, performance constraints ve
test evidence birlikte düşünülür.

## Engineering Perspective

### Değişim maliyeti tasarımın gerçek sınavıdır

Bir tasarım ilk gün her zaman makul görünebilir. Asıl kalite, ikinci ve onuncu
değişiklikte görünür. Yeni gereksinim geldiğinde kaç function, contract ve test
değişiyor? Bir output formatı değişikliği calculation'ı bozuyor mu? Validation
kuralı eklemek file writer'ı etkiliyor mu? Cohesion ve coupling bu soruların
ortak dilidir.

Bir function map'i yalnız mevcut davranışa göre değil, olası fakat gerçekçi
change scenarios'a göre değerlendirin. Hayalî bütün gelecekleri desteklemeye
çalışmak overengineering'dir. Product roadmap, issue history veya açık
requirements hangi değişimlerin olası olduğunu gösterir. Kanıt yoksa en basit
açık tasarımı seçin ve tests sayesinde sonra refactor edilebilir bırakın.

### Information hiding sezgisi

C16'nın ana scope'u functions'tır; yine de bilgi saklama (Information Hiding)
sezgisi coupling'i anlamaya yardım eder. Bir function caller'a yalnız ihtiyacı
olan contract'ı gösterir, internal steps ve temporary values'i saklar. Caller,
provider'ın internal array ordering'ine veya variable name'lerine bağlı değilse
provider daha kolay değişir.

Örneğin `calculateMetrics` caller'a `{ average, minimum, maximum }` döndürebilir.
Caller'ın raw `sum`, `count` ve loop accumulator'ı bilmesine gerek yoktur. Fakat
gelecekte toplam da gerçek iş sonucu olacaksa onu contract'ta açıkça eklemek
gerekir. Information hiding, gerekli bilgiyi gizlemek değil, implementation
ayrıntısını public dependency yapmamaktır.

### Cohesion bir spektrumdur

“Bir function bir şey yapmalı” sözü yararlı fakat belirsizdir. `generateInvoice`
bir şey yapıyor gibi görünür, ancak bu “bir şey” validation, pricing, tax,
formatting ve persistence içerebilir. Daha doğru soru: **Birimin öğeleri aynı
outcome ve change reason etrafında mı toplanıyor?**

Bir calculation function birkaç formülü birlikte uygulayabilir; aynı pricing
policy değişince hepsi birlikte değişiyorsa cohesive olabilir. Buna karşılık
üç satırlık function hem global sayaç artırıp hem format string üretiyorsa iki
ayrı reason taşır. Cohesion mechanik sayı değil, açıklanabilir ilişki ölçüsüdür.

### Coupling envanteri neden contract'tan geniştir?

İki function açık parameter ile bağlanabilir ve yine de sıkı coupling taşıyabilir.
Consumer, provider'ın on alanlı result object'indeki altı internal alanı belirli
sırada kullanıyorsa contract geniştir. Exception message text'ini parse etmek,
global singleton paylaşmak veya provider'ın önce çağrılmış olmasını varsaymak
gizli coupling örnekleridir.

Bu yüzden dependency review şu boyutları kapsar:

- **Data coupling:** Hangi values/shapes aktarılıyor?
- **State coupling:** Aynı mutable state paylaşılıyor mu?
- **Temporal coupling:** Çağrı sırası zorunlu mu?
- **Failure coupling:** Consumer belirli error/exception ayrıntısına mı bağlı?
- **Environmental coupling:** File path, locale, clock veya process state gizli mi?
- **Implementation coupling:** Consumer provider'ın private mekanizmasını mı biliyor?

Tüm coupling'i kaldırmaya çalışmayın. Gerekli dependency'yi dar, tek yönlü ve
test edilebilir hâle getirin.

### Test boundary aynı zamanda design probe'dur

Bir function'ı bağımsız test etmek aşırı setup, global reset veya birçok mock
gerektiriyorsa boundary coupling hakkında bilgi verir. Test zorluğu otomatik
olarak tasarımın yanlış olduğunu kanıtlamaz; integration boundary doğası gereği
ortam gerektirebilir. Fakat saf calculation için database, clock ve console
setup gerekiyorsa sorumluluklar karışmış olabilir.

Testi yalnız doğrulama aracı değil, tasarım sondası olarak kullanın:

- Function'a gerekli input'u doğrudan verebiliyor musunuz?
- Result'u external effect olmadan gözleyebiliyor musunuz?
- Failure'ı deterministik üretebiliyor musunuz?
- Başka function implementation'ını bilmeden stub/fake contract kurabiliyor musunuz?

Bu sorulara hayır cevabı coupling inventory'ye yeni kanıt ekler.

### Performans ve decomposition

Daha çok function call teorik overhead oluşturabilir; ancak başlangıç ve çoğu
uygulama kodunda anlamlı design boundary'nin faydası bu mikro maliyetten daha
büyüktür. Performans iddiasını ölçmeden extraction'ı reddetmeyin veya her şeyi
inline etmeyin. Profiling gerçek hot path'i gösterirse contract korunarak bazı
adımlar inline edilebilir.

Pipeline'ların intermediate arrays üretmesi bellek maliyeti yaratabilir. Tek
loop daha verimli olabilir ve yine cohesive helper contracts kullanabilir.
Örneğin filtering, mapping ve aggregation büyük dataset'te tek geçişte yapılabilir.
Karar; input büyüklüğü, latency requirement ve ölçümle verilir. “Functional daha
temiz” veya “tek loop daha hızlı” tek başına kanıt değildir.

### Güvenlik ve hata sınırları

Validation'ı ayrı function'a çıkarmak yalnız reuse değil, güven boundary'sini
görünür kılabilir. Ancak caller'ın validation'ı atlayarak calculation'a raw input
verebilmesi risk yaratıyorsa contract ve orchestration bunu önlemelidir. Ayrı
function var diye güvenlik otomatik oluşmaz.

Error handling de cohesion sorusudur. Low-level parser, line number ve syntax
error üretir; orchestrator bunları user-facing report'a çevirebilir. Parser'ın
Türkçe terminal mesajı basması presentation coupling yaratır. Öte yandan bütün
errors'ı generic “failed”e çevirmek diagnostic evidence'ı kaybettirir. Her
boundary gerekli failure detail'i korumalı, internal hassas ayrıntıyı sızdırmamalıdır.

### Takım iletişimi ve code ownership

Function map, görev paylaşımını kolaylaştırabilir. Fakat sırf farklı ekip üyeleri
çalışsın diye yapay boundary üretmek doğru değildir. İyi contract, iki kişinin
bağımsız geliştirme yapmasına izin verir; kötü contract sürekli koordinasyon ve
merge conflict üretir.

Code review'da “bu function çok uzun” yerine şu geri bildirimleri tercih edin:

- “Input parsing ve tax policy farklı change reasons; ayrı tests gerektiriyor.”
- “Formatter, calculator'ın internal `rawTotal` alanına bağlı; public result
  contract'ını daraltalım.”
- “Bu helper yalnız caller'ın beş temporary'sini taşıyor; yeni abstraction
  üretmiyor.”
- “İki discount block aynı görünse de farklı domain rule; şimdilik birleştirmek
  coupling yaratır.”

Bu dil kişisel zevki denetlenebilir design evidence'a dönüştürür.

### Production öncesi function-map review

Bir tasarımın kodu çalışıyor diye review tamamlanmaz. Function map'i üretim
öncesinde gereksinimden testlere kadar yürüyün. İlk olarak her requirement'ın
hangi function outcome'unda karşılandığını işaretleyin. Hiçbir node'a bağlanmayan
gereksinim eksik davranış; hiçbir gereksinime hizmet etmeyen node gereksiz
abstraction adayıdır. Bu bire bir eşleme zorunluluğu değildir, izlenebilirlik
kontrolüdür: bir function birkaç requirement'a hizmet edebilir.

İkinci olarak her oku okuyun. Okun adı yalnız `data` olmamalıdır. `validatedRows`,
`pricingResult`, `reportText` veya `writeDecision` gibi contract anlamı taşımalıdır.
Ok failure durumunda ne taşıyor? Consumer eksik, boş veya invalid result'a nasıl
tepki veriyor? Bir provider'ın internal shape'i değiştiğinde kaç consumer
bozuluyor? Bu sorular coupling'i diyagram üzerinde görünür yapar.

Üçüncü olarak effect boundary'leri işaretleyin. Clock, randomness, file, console,
network ve shared state arrows'ı yoksa gerçekten effect-free program mı var,
yoksa etkiler gizlenmiş mi? Her etki için owner, retry/idempotency beklentisi,
error contract ve test strategy kaydedin. C16 async veya distributed systems
öğretmese de “bu çağrı dış dünyayı değiştiriyor” bilgisinin haritada görünmesi
gelecek chapter'lara doğru temel sağlar.

Dördüncü olarak üç ters senaryo çalıştırın:

1. Provider başarısız olursa consumer ne yapar?
2. Output formatı değişirse domain calculation etkilenir mi?
3. Aynı core başka input veya output boundary ile kullanılabilir mi?

Her “bilmiyoruz” cevabı hemen daha fazla abstraction gerektirmez. Unknown'u risk
olarak kaydedin; mevcut requirement için basit contract yeterliyse premature
extension yapmayın.

Son olarak yeni bir ekip üyesinden function map'i yalnız isim ve contract'larla
anlatmasını isteyin. Kişi her function body'yi açmadan workflow'u, data flow'u
ve failure points'i açıklayabiliyorsa harita iyi bir iletişim aracıdır. Sürekli
implementation'a bakmak gerekiyorsa names veya contracts yetersiz olabilir.

Review sonucu şu kısa decision record ile bitirilebilir:

- Seçilen decomposition ve ana responsibility boundaries.
- Değerlendirilen alternative.
- Kararı belirleyen üç change scenario.
- Bilinçli kabul edilen coupling.
- Ertelenen abstraction ve yeniden değerlendirme sinyali.
- Behavior preservation tests.

Bu kayıt büyük bir mimari belge değildir. Gelecekte bir AI veya geliştirici
“neden bu iki function ayrı?” diye sorduğunda bugünkü evidence'ı korur. Tasarım
kararının zaman içinde değişmesi başarısızlık değildir; yeni requirement veya
measurement geldiğinde decision record güncellenir ve contract migration açık
yapılır.

### Bakım sırasında yeniden değerlendirme sinyalleri

İlk decomposition sonsuza kadar doğru kalmaz. Bir function her sprint farklı
sebeple değişiyorsa cohesion varsayımını yeniden inceleyin. İki function sürekli
aynı değişiklikte birlikte düzenleniyorsa ayrım yanlış yerde olabilir veya ortak
contract eksik olabilir. Buna karşılık ortak helper giderek daha fazla mode flag,
optional field ve caller-specific branch topluyorsa reuse abstraction'ı artık
farklı responsibilities'i zorla birleştiriyor olabilir.

Test suite de sinyal üretir. Tek business rule değişikliğinde çok sayıda
unrelated test fixture güncelleniyorsa coupling yayılmıştır. Bir helper testinin
kurulması için orchestrator'ın bütün environment'ı gerekiyorsa hidden dependency
vardır. Bir function'ın contract testleri her internal refactoring'de bozuluyorsa
tests public behavior yerine implementation detail'e bağlıdır.

Bu sinyallerle uygulanabilecek seçenekler yalnız “daha fazla parçala” değildir:

- İki function'ı inline ederek gereksiz indirection'ı kaldırmak.
- Büyük function içindeki bağımsız change reason'ı extract etmek.
- Geniş result object'i consumer-specific küçük contract'a dönüştürmek.
- Hidden state'i explicit input/result yapmak.
- Yanlış shared abstraction'ı iki domain function'a ayırmak.
- Çok geçişli pipeline'ı ölçüm kanıtıyla tek cohesive pass'e toplamak.
- Orchestrator'daki domain decision'ı ilgili pure function'a taşımak.

Her değişimde önce mevcut behavior ve dependency evidence'ı güncelleyin. Tasarım
kalitesi belirli bir function count'a ulaşmak değil, yeni bilgi geldiğinde
boundary'leri güvenle değiştirebilme yeteneğidir. Bu nedenle güçlü tests ve açık
contracts, ilk çizimin kusursuz olmasından daha değerlidir.

Bir sonraki bakım çalışmasında yalnız değişen satırları değil, değişmeyen ama
değişiklikten etkilenme riski taşıyan contracts'i de gözden geçirin. Yeni
parameter eklemek bütün callers'ı; yeni result field eklemek onu kullanan
consumers'ı; yeni side effect eklemek repeat ve test behavior'ını etkileyebilir.
Diff küçük olsa bile coupling yüzeyi büyük olabilir. Review kapsamını satır
sayısına göre değil dependency map'e göre belirlemek profesyonel mühendislik
alışkanlığıdır.

AI bu aşamada impact analysis önerebilir, fakat repository araması, callers,
tests ve gerçek runtime contract sizin tarafınızdan doğrulanmalıdır. Modelin
“yalnız bu function etkilenir” iddiasını function map ve search evidence olmadan
kabul etmeyin. Decomposition'ın en önemli faydalarından biri tam da bu etki
analizini gözlemlenebilir hâle getirmesidir.

## Real World Examples

### Senaryo 1 — Öğrenci raporu

Tek function input validate eder, average hesaplar ve terminale yazar. İlk
decomposition:

```js
function analyzeStudent(student) {
  const validation = validateStudent(student);

  if (!validation.ok) {
    return validation;
  }

  const metrics = calculateScoreMetrics(student.scores);
  const status = determineAcademicStatus(metrics.average);

  return { ok: true, value: { name: student.name, metrics, status } };
}

function presentStudentReport(analysis) {
  return `${analysis.name}: ${analysis.metrics.average.toFixed(2)} - ${analysis.status}`;
}
```

`analyzeStudent` domain result üretir; formatter presentation'a aittir. CSV
output geldiğinde calculation değişmez. Passing threshold değiştiğinde
formatter değişmez. Change scenario'lar cohesion kanıtıdır.

### Senaryo 2 — CLI kayıt akışı

Workflow: terminalden line oku, command parse et, validation yap, state güncelle,
response formatla ve yazdır. Aşırı parçalı map her token ve condition için
helper üretebilir. Dengeli map:

```text
runCommand(line, state)
  -> parseCommand(line)
  -> validateCommand(command, state)
  -> executeCommand(command, state)
  -> formatCommandResult(result)
```

`runCommand` orchestration yapar. `executeCommand` yeni state ve domain event
döndürür. Terminal read/write dış sınırdadır. Parser'ın state bilmesine gerek
yoktur; coupling daralır.

### Senaryo 3 — İki output formatı

Bir report önce text, sonra JSON isteniyor. Monolithic function'da calculation
ile string interpolation iç içeyse JSON eklemek formüllere dokunur. Domain
result önce üretilirse:

```js
const metrics = calculateMetrics(records);
const text = formatTextReport(metrics);
const json = formatJsonReport(metrics);
```

Reuse, `calculateMetrics` contract'ında gerçekleşir. İki formatter'ı tek
`formatReport(metrics, type)` function'ında flag ile birleştirmek başlangıçta
kolaydır; formatlar bağımsız büyürse cohesion düşebilir. Change history seçimi
belirler.

### Senaryo 4 — Tesadüfi discount tekrarları

```js
function employeePrice(price) {
  return price * 0.9;
}

function campaignPrice(price) {
  return price * 0.9;
}
```

Formül aynıdır. Fakat employee rate HR policy'den, campaign rate marketing
schedule'dan gelir. Hemen `discountPrice(price, type)` üretmek iki policy'yi
birleştirir. Ortak matematik gerçekten karmaşıklaşırsa `applyRate(price, rate)`
gibi saf primitive reuse edilebilir; rate seçimi domain functions'ta kalır.

### Senaryo 5 — Global cache ile sahte reuse

İki function ortak global `lastResult` üzerinden data paylaşır. Parameter
sayısı azdır fakat temporal coupling yüksektir: biri önce çağrılmadan diğeri
çalışamaz. Explicit result aktarımı:

```js
const parsed = parseInput(raw);
const summary = summarize(parsed);
```

Data dependency görünürdür. `summarize` testte parser çalışmadan örnek parsed
data alabilir. Coupling yok olmadı; contract üzerinden kontrol edildi.

### Senaryo 6 — Pipeline failure modeli

Parser `{ ok, value, errors }`, validator boolean, calculator exception
üretiyorsa orchestrator üç modelle uğraşır. Tutarlı model kararı:

```js
function generateReport(raw) {
  const parsed = parseRows(raw);
  if (!parsed.ok) return parsed;

  const validated = validateRows(parsed.value);
  if (!validated.ok) return validated;

  return calculateReport(validated.value);
}
```

Bu tekrar sonraki chapter'larda result composition araçlarıyla azaltılabilir.
C16'da açıklık, clever abstraction'dan önemlidir.

### Senaryo 7 — Function extraction geri alınmalı mı?

Bir helper caller'ın `index`, `rows`, `errors`, `options`, `locale`, `count` ve
`output` local'larını alıyor; yalnız üç satırı çalıştırıp üçünü geri döndürüyor.
Adı `handleRow` gibi belirsiz. Bu boundary bağımsız sorumluluk üretmemiştir.
Çözüm helper'ı inline etmek, daha büyük “validate one row” outcome'unu bulmak
veya ilgili state'i anlamlı modelde toplamak olabilir.

### Senaryo 8 — AI tarafından üretilen modüler görünüm

AI; `getData`, `processData`, `handleData`, `saveData` functions üretir. İsimler
farklı görünür fakat hepsi global `data`yı okuyup değiştirir. Function map'teki
oklar explicit values değil hidden global state'tir. İlk refactoring, isimleri
daha da güzelleştirmek değil, her adımın input/output'unu görünür yapmaktır.

## Common Mistakes

### 1. Her satırı function yapmak

Extraction yalnız indirection ekleyip yeni domain adı, test boundary veya reuse
üretmiyorsa okuma maliyetini artırır. Aynı abstraction level'daki birkaç basit
satır birlikte kalabilir.

### 2. Fonksiyon uzunluğunu tek metrik yapmak

Satır sayısı responsibility, effect ve coupling'i ölçmez. Uzunluğu smell olarak
kullanın; boundary kararını change scenarios ve contract kanıtıyla verin.

### 3. Belirsiz helper isimleri

`processData`, `handleItem`, `doWork` outcome'u açıklamaz. Fonksiyonun adını
gövdeyi okuduktan sonra “bu neden var?” sorusuna cevap verecek biçimde seçin.

### 4. Çok fazla parametreyi normal kabul etmek

Extraction sonrası sekiz local parameter gerekiyorsa helper caller'ın internal
state'ine sıkı bağlıdır. Responsibility sınırını, gerekli input'ları ve data
modelini yeniden değerlendirin.

### 5. Global state ile parameter listesini gizlemek

Parameter sayısını azaltmak için values'i globalden okumak coupling'i yok etmez;
hidden ve daha geniş yapar. Explicit dependency ve effect inventory kullanın.

### 6. Cohesion'ı konu etiketi sanmak

“Hepsi user ile ilgili” validation, persistence ve email'in tek function'da
kalması için yeterli değildir. Aynı outcome ve change reason aranmalıdır.

### 7. Coupling'i yalnız direct call saymak

Shared state, ordering, exception text ve environment de coupling kanalıdır.
Dependency inventory'yi geniş tutun.

### 8. Orchestrator'a bütün logic'i koymak

Helper functions yalnız wrapper ise büyük function gizlenmiş olur. Orchestrator
workflow; domain functions kendi karar/hisap sorumluluklarını yürütmelidir.

### 9. Incompatible contracts'i pipeline yapmak

Output/input shape ve failure model uyumlu değilse nested calls anlaşılmaz olur.
Her okun contract'ını yazın ve gerekli adapter/translation'ı açık yapın.

### 10. Duplicate görünce hemen abstraction

Ortak syntax, ortak domain invariant demek değildir. İki block'un neden ve ne
zaman değiştiğini karşılaştırın.

### 11. Refactoring ile behavior change'i karıştırmak

Extraction sırasında formula, error message ve invalid-data policy değişirse
regression nedeni belirsizleşir. Characterization tests, küçük adım ve ayrı
commit niyeti kullanın; bu görevde commit atmasanız bile diff'i küçük tutun.

### 12. Testleri yalnız orchestrator'da bırakmak

End-to-end test workflow'u doğrular fakat hangi contract'ın bozulduğunu hızlı
göstermez. Cohesive pure functions için independent tests üretin; boundary için
integration evidence ekleyin.

### 13. Utility dump oluşturmak

İlişkisiz functions'ı `utils.js` içine atmak fiziksel reuse görünümü yaratır,
fakat ownership ve domain anlamını kaybettirir. Fonksiyonları sorumluluk ve
değişim alanına göre organize edin.

### 14. AI'ın “best practice” iddiasına güvenmek

Modelin pattern adı söylemesi boundary'yi doğru yapmaz. Responsibility map,
dependency graph, change-scenario matrix ve tests isteyin.

## Best Practices

### Önce davranışı ve sorumlulukları yaz

Code extraction'dan önce input, output, errors, effects ve responsibilities
tablosu üretin. Fonksiyon adı bu analizin sonucu olsun.

### Tek meaningful outcome hedefle

Fonksiyonun adını tek, dürüst outcome ile ifade edin. “And” içeren ad veya
belirsiz `process` kelimesi yeniden inceleme sinyalidir; otomatik hata değildir.

### Contract'ı küçük ve tutarlı tut

Necessary input alın, consistent result shape döndürün. Caller'ın internal
temporary'lerini public contract'a taşımayın.

### Pure calculation ile effects'i ayır

C15 modelini kullanın. Parse, validate ve calculate adımlarını mümkün olduğunca
value transformations yapın; file/console/network effects boundary'de kalsın.

### Dependency yönünü çiz

Function map oklarında yalnız “calls” değil, aktarılan value ve failure contract'ı
yazın. Circular veya hidden arrows'ı çözün.

### Characterization tests ile başla

Refactoring öncesi normal, boundary, invalid ve effect behavior'ı kaydedin.
Her extraction'dan sonra tests çalıştırın.

### İki tasarım üret

İlk function map'e aşık olmayın. En az iki makul alternative çizip üç gerçekçi
change scenario ile karşılaştırın. Tasarım yeteneği seçenekleri gerekçelendirmektir.

### Reuse'u shared invariant'a bağla

İki caller'ın yalnız bugünkü syntax'ı değil, değişim nedeni ve business rule'u
ortak olmalıdır. Yanlış abstraction'dansa geçici duplication kabul edilebilir.

### Orchestrator'ı ince tut ama anlamsız wrapper yapma

Orchestrator sequence, branching ve failure flow'u göstermeli; step internals'i
yürütmemeli. “İnce” satır hedefi değil, role clarity hedefidir.

### AI'a önce harita, sonra kod ürettir

AI'dan responsibility map, assumptions, alternative boundaries ve dependency
inventory isteyin. Kod önerisini kendi analysis'inizle karşılaştırın. Her kabul
kararını testle doğrulayın.

## Hands-on Exercise

Bu uygulamada büyük bir rapor üreticisini davranışı bozmadan ayrıştıracak ve iki
function map'i kanıtla karşılaştıracaksınız.

### Başlangıç kodu

```js
function generateSalesReport(rows, minimumAmount) {
  const errors = [];
  const validRows = [];

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];

    if (!row || typeof row.product !== "string") {
      errors.push(`Satır ${index}: ürün geçersiz`);
      continue;
    }

    if (!Number.isFinite(row.amount) || row.amount < 0) {
      errors.push(`Satır ${index}: tutar geçersiz`);
      continue;
    }

    if (row.amount >= minimumAmount) {
      validRows.push({
        product: row.product.trim(),
        amount: row.amount,
      });
    }
  }

  let total = 0;
  for (const row of validRows) {
    total += row.amount;
  }

  const average = validRows.length === 0 ? 0 : total / validRows.length;
  const sortedRows = [...validRows].sort((a, b) => b.amount - a.amount);

  let text = "SATIŞ RAPORU\n";
  text += `Kayıt: ${validRows.length}\n`;
  text += `Toplam: ${total.toFixed(2)}\n`;
  text += `Ortalama: ${average.toFixed(2)}\n`;

  for (const row of sortedRows) {
    text += `- ${row.product}: ${row.amount.toFixed(2)}\n`;
  }

  if (errors.length > 0) {
    text += `Hatalar: ${errors.length}\n`;
  }

  console.log(text);
  return { text, errors };
}
```

### Aşama 1 — Characterization tests

Kodda değişiklik yapmadan en az şu vakaları test edin:

1. Bir normal row.
2. Birden fazla row ve sıralama.
3. Tam `minimumAmount` boundary'si.
4. Threshold altında row.
5. Negative amount.
6. Missing product.
7. Empty rows.
8. Bütün rows invalid.
9. Input array/order mutation kontrolü.
10. Text ve errors result shape.

`console.log` etkisini capture etmek zor geliyorsa önce return behavior'ı kilitleyin
ve console'nun bir external effect olduğunu decision record'a yazın.

### Aşama 2 — Responsibility map

Gövdeyi syntax blocks'a değil outcomes'a ayırın. En az şunları değerlendirin:

- tek row validation/normalization;
- collection validation/filtering;
- metrics calculation;
- sorting;
- text formatting;
- console output;
- orchestration ve failure accumulation.

Her responsibility için input, output, errors, effect ve change reason yazın.

### Aşama 3 — Tasarım A

Validation ve normalization'ı tek function'da, metrics'i ayrı function'da,
formatting'i ayrı function'da tutan bir function map üretin. Her okun data
shape'ini yazın. Orchestrator'ın hangi branching'i yönettiğini belirtin.

### Aşama 4 — Tasarım B

Tek-row validation'ı reusable function'a çıkaran; collection processing'i
ayrı orchestrator'da tutan alternatif map üretin. `sortRows` ayrı mı, metrics
içinde mi olmalı karar verin. Aynı behavior'ı karşılamalıdır.

### Aşama 5 — Change-scenario karşılaştırması

İki tasarımı şu değişikliklerde karşılaştırın:

1. CSV yerine JSON input ekleniyor.
2. New median metric ekleniyor.
3. Text yanında JSON report isteniyor.
4. Validation errors artık row number ve error code taşıyor.
5. Sorting kullanıcı seçimine bağlanıyor.

Her scenario için değişen functions, contracts ve tests'i tabloya yazın. Bir
tasarımın her senaryoda kazanması gerekmez. Trade-off'u açıklayın.

### Aşama 6 — Uygulama

Seçtiğiniz map'i JavaScript ile uygulayın. Kurallar:

- Global mutable state yok.
- Calculation input'u değiştirmez.
- `console.log` yalnız effect boundary'de.
- Her helper meaningful name ve explicit contract taşır.
- Failure shape tutarlıdır.
- Characterization tests davranışı korur.
- Extracted functions için independent tests vardır.

### Aşama 7 — Dependency inventory

Consumer, provider, channel, data, failure ve risk sütunlarını doldurun. Hidden
dependency bulursanız input/output contract'a taşıyın veya neden boundary'de
kaldığını belgeleyin.

### Aşama 8 — AI karşılaştırması

Kendi solution'ınız çalıştıktan sonra AI'a başlangıç kodunu verin. AI'dan önce
responsibility map, sonra iki alternative, en son code isteyin. Şunları kaydedin:

- Sizde olup AI'da olmayan bir design evidence.
- AI'da olup sizde olmayan yararlı bir boundary.
- AI'ın önerdiği gereksiz helper veya premature abstraction.
- Kabul ettiğiniz change ve onu doğrulayan test.
- Reddettiğiniz change ve rejection rationale.

### Teslim ölçütü

Tesliminiz characterization tests, iki function map, responsibility map,
dependency inventory, change-scenario matrix, working code, independent tests
ve AI audit içerir. Yalnız refactored code `V01-LO024` için yeterli değildir.

## Reflection Questions

1. Önceden “bir function bir iş yapmalı” sözünü nasıl yorumluyordunuz? Şimdi
   change reason kavramı bunu nasıl netleştiriyor?
2. Uzun fakat cohesive bir function örneği verebilir misiniz?
3. Kısa fakat düşük cohesion bir function nasıl görünür?
4. Direct function call dışında hangi coupling kanallarını artık arayacaksınız?
5. Parameter list'in uzaması boundary hakkında ne anlatabilir?
6. Orchestration ile business calculation arasındaki fark nedir?
7. Pipeline'da contract compatibility hangi alanları kapsar?
8. İki duplicate block'u birleştirmeden önce hangi evidence'ı ararsınız?
9. Characterization test bilinen bug'ı kaydediyorsa ne yaparsınız?
10. Hangi change scenario function map kararınızı en çok değiştirdi?
11. AI'ın clean-code önerisini reddetmek için hangi kanıt yeterli olur?
12. Kendi projenizde bu hafta ayrıştıracağınız tek function hangisi? Önce hangi
    tests ve responsibility map'i hazırlayacaksınız?

## Chapter Summary

İşlevsel ayrıştırma, büyük algoritmayı her satıra bir helper gelecek biçimde
parçalamak değildir. Gereksinimdeki anlamlı responsibilities'i açık function
contracts'a dönüştürmektir. Responsibility map “hangi outcomes var?”, function
map “hangi functions ve data/failure arrows bu outcomes'u gerçekleştiriyor?”
sorularını cevaplar.

Cohesion, birimin öğelerinin aynı responsibility ve change reason'a hizmet
etmesidir. Coupling, ayrı birimlerin data, state, timing, failure, environment
ve implementation details üzerinden dependence'ıdır. Hedef sıfır coupling
değil; küçük, explicit ve tek yönlü contracts üzerinden gerekli coupling'dir.

Orchestrator workflow order, branching ve failure flow'u koordine eder. Domain
functions kendi calculations/decisions'ını yürütür. Pipeline output-input
compatibility gerektirir. Reuse, shared invariant ve doğal contract olduğunda
değerlidir; yüzeysel duplication premature abstraction için yeterli değildir.

Refactoring behavior-preserving olmalıdır. Önce characterization tests, sonra
küçük extraction, ardından independent tests ve change-scenario comparison
yapılır. Profesyonel sonuç, yalnız daha çok function değil, explainable boundary
ve reduced change cost'tur.

## Key Takeaways

- Decomposition function sayısı değil responsibility design'ıdır.
- Önce responsibility map, sonra function map üretin.
- Function map data ve failure contracts'i göstermelidir.
- Abstraction level workflow ile mechanism ayrımını görünür yapar.
- Kısa function otomatik cohesive değildir.
- Cohesion aynı outcome ve change reason ile kanıtlanır.
- Coupling direct calls'tan daha geniştir.
- Shared state ve call order hidden coupling yaratabilir.
- Loose coupling, zero dependency anlamına gelmez.
- Helper anlamlı name ve explicit contract taşımalıdır.
- Orchestrator workflow'u yönetir, her step'in internals'ini değil.
- Pipeline contract compatibility gerektirir.
- Reuse shared invariant'a dayanmalıdır.
- Coincidental duplication yanlış abstraction'a zorlanmamalıdır.
- Characterization tests refactoring öncesi davranışı görünür kılar.
- Extract Function geri alınabilir; Inline Function de geçerli karardır.
- İki alternative change scenarios ve tests ile karşılaştırılmalıdır.
- AI'ın helper sayısı design evidence değildir.

## Further Reading

Önce CS2023 Software Design bölümündeki decomposition, abstraction, coupling ve
cohesion kapsamını okuyun. Ardından SWEBOK V4'ün Software Design bölümünde
modularization, information hiding ve separation of concerns ilişkisini inceleyin.
NASA detailed-design guidance, bu ilkelerin maintainability ve testability için
nasıl review questions'a dönüştüğünü gösterir.

Refactoring catalog'da Extract Function, Inline Function ve Split Phase'i birlikte
okuyun. Yalnız extraction öğrenmek her parçalamanın kalıcı olması gerektiği
yanılgısını doğurur. Martin Fowler'ın Function Length yazısını, satır eşiği yerine
“what” adlandırma sinyali açısından değerlendirin. Sonra kendi eski kodunuzdan
bir function seçip iki alternative map ve üç change scenario üretin.

## References

1. [IEEE Computer Society — SWEBOK V4.0a](https://www.computer.org/education/bodies-of-knowledge/software-engineering)
2. [SWEBOK V4 PDF](https://ieeecs-media.computer.org/media/education/swebok/swebok-v4.pdf)
3. [ACM/IEEE-CS/AAAI CS2023](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf)
4. [CS2023 — Software Engineering](https://csed.acm.org/knowledge-areas-software-engineering-se-cs2013-version/)
5. [NASA SWE-058 — Detailed Design](https://swehb.nasa.gov/spaces/7150/pages/16450603/SWE-058%2B-%2BDetailed%2BDesign)
6. [NASA — Software Design Analysis](https://swehb.nasa.gov/spaces/SWEHBVC/pages/100598312/Software%2BDesign%2BAnalysis)
7. [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html)
8. [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
9. [MDN — JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
10. [Node.js — Test Runner](https://nodejs.org/api/test.html)
11. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
12. [Google Engineering Practices — Code Review](https://google.github.io/eng-practices/review/reviewer/)
13. [Refactoring — Extract Function](https://refactoring.com/catalog/extractFunction.html)
14. [Refactoring — Inline Function](https://refactoring.com/catalog/inlineFunction.html)
15. [Refactoring — Split Phase](https://refactoring.com/catalog/splitPhase.html)
16. [Martin Fowler — Function Length](https://martinfowler.com/bliki/FunctionLength.html)
17. [Martin Fowler — Refactoring with Pipelines](https://martinfowler.com/articles/refactoring-pipelines.html)
18. [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
