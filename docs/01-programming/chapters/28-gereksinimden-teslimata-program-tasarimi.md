---
document_type: "chapter"
chapter_id: "V01-C28"
volume_id: "V01"
title: "Gereksinimden Teslimata Program Tasarımı"
slug: "gereksinimden-teslimata-program-tasarimi"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "11-14 saat"
prerequisites:
  - "V01-C16"
  - "V01-C23"
  - "V01-C24"
  - "V01-C25"
  - "V01-C26"
  - "V01-C27"
learning_outcomes:
  - "V01-LO046"
related_lab_ids:
  - "V01-C28-L01"
related_assessment_ids:
  - "V01-C28-AS01"
next_chapter_id: null
blueprint_id: "V01-C28-BP01"
last_updated: "2026-08-01"
---

# Gereksinimden Teslimata Program Tasarımı

## Learning Objectives

Şimdiye kadar değişkenleri, koşulları, döngüleri, fonksiyonları, veri yapılarını,
algoritmaları, hata ayıklamayı, testleri ve refactoring'i ayrı ayrı öğrendiniz.
Gerçek bir işte ise kimse size “bugün bir döngü yaz” demez. Bir ihtiyaç anlatır:
“Öğrencinin haftalık çalışma planının ne kadarını tamamladığını güvenilir biçimde
göstermeliyiz.” Sizin göreviniz bu cümleyi sınırları açık, test edilebilir ve başka
bir mühendisin inceleyebileceği bir programa dönüştürmektir.

Bu chapter sonunda ölçülebilir gereksinimlerden modüler, test edilmiş ve
açıklanabilir küçük bir program tasarlayıp teslim edebileceksiniz (`V01-LO046`).
Bunun için:

- ihtiyacı varsayımdan ayırıp kapsamı belirleyecek,
- gereksinimleri benzersiz kimlik ve kabul kriterleriyle yazacak,
- veri modeli, fonksiyon haritası ve hata politikasını koddan önce kuracak,
- her gereksinimi tasarım, kod ve test kanıtına bağlayacak,
- riskleri, reddedilen seçenekleri ve kalan sınırlamaları kaydedecek,
- teslimi “çalışıyor” diyerek değil, incelenebilir kanıtlarla savunacaksınız.

## Prerequisites

C28 yeni bir JavaScript özelliği öğretmez; önceki yeterlikleri birlikte kullanır.
Başlamadan şu kısa hazırlık kontrolünü yapın:

1. “Bir çalışma görevinin tamamlanma yüzdesi” için input, output, normal ve
   geçersiz durum sözleşmesi yazabiliyor musunuz?
2. Bir record koleksiyonunu en az iki odaklı fonksiyona ayırabiliyor musunuz?
3. 79, 80 ve 81 gibi sınır değerlerin neden birlikte test edildiğini
   açıklayabiliyor musunuz?
4. Bir failure'ın symptom, cause ve smallest failing input kaydını üretebiliyor
   musunuz?
5. Refactoring ile yeni davranış eklemeyi ayırabiliyor musunuz?

Zorlandığınız noktada C16'nın fonksiyon ayrıştırmasına, C23'ün trade-off
düşüncesine ve C24–C27 güvenilirlik zincirine dönün. Amaç bütün eski chapterları
ezberden tekrarlamak değil; tasarım kararında doğru aracı çağırabilmektir.

## Estimated Study Time

Bu chapter için 11–14 saat ayırın. İlk oturumda problem contract ve acceptance
criteria, ikinci oturumda veri modeli ve function map, üçüncü oturumda uygulama ve
testler, dördüncü oturumda dossier, review ve teknik savunma üzerinde çalışın.
Lab'ı tek oturumda bitirmeye zorlamayın; karar kayıtlarını koddan ayrı bir çalışma
ürünü olarak inceleyin.

## Introduction

Bir öğretmenin sizden okul gezisi için yoklama özeti istediğini düşünün. “Kimler
geldi, toplam kaç öğrenci vardı, katılım oranı nedir?” soruları açık görünür. Fakat
liste boşsa ne olacak? Aynı öğrenci iki kez yazılmışsa? “Geldi” bilgisi `true`
yerine `"evet"` olarak gelirse? Yüzde aşağı mı, yukarı mı yuvarlanacak?

Kod yazmaya hemen başlarsanız bu kararları yine verirsiniz; fakat onları kodun
içine fark etmeden gömersiniz. Sonuç çalışan bir demo olabilir, ancak isteyen
kişinin gerçek ihtiyacını karşılayıp karşılamadığı belirsiz kalır.

**Program design (program tasarımı)**, gereksinimleri tutarlı bir veri modeli,
algoritma, fonksiyon yapısı, failure politikası ve doğrulama planına dönüştürme
işidir. Tasarım yalnız kutu çizmek değildir. Koddan önce hangi kararların
verileceğini, kod sırasında hangi parçaların üretileceğini ve teslimde hangi
kanıtların gösterileceğini birbirine bağlar.

Bu chapter boyunca “ASEA Haftalık Plan Özeti” adlı küçük bir program tasarlayacağız.
Program, öğrencinin görevlerini alacak; planlanan ve tamamlanan dakikaları
toplayacak; yüzdeyi hesaplayacak ve öğrencinin durumunu belirleyecek. Basit görünen
bu örnek, profesyonel teslim zincirinin tamamını gösterecek kadar zengindir.

## Core Concepts

### İhtiyaç ile gereksinimi ayırmak

Ürün ihtiyacı şöyledir:

> Öğrenci haftalık planında ne kadar ilerlediğini görebilsin.

Bu cümle yön verir ama test yazdırmaz. “Ne kadar”, “ilerleme” ve “görebilmek”
ölçülebilir değildir. **Requirement (gereksinim)**, sistemin sağlaması gereken
gözlenebilir davranışı ve sınırı ifade eder.

İlk sürümün problem contract'ını birlikte netleştirelim:

- Input, çalışma görevlerinden oluşan non-empty bir array'dir.
- Her görev `topic`, `plannedMinutes` ve `completedMinutes` alanlarını taşır.
- `topic` boş olmayan string'dir.
- Dakikalar integer'dır; planlanan süre pozitif, tamamlanan süre sıfır veya daha
  büyüktür ve planlanan süreyi aşamaz.
- Output toplam planlanan dakika, toplam tamamlanan dakika, en yakın integer'a
  yuvarlanmış yüzde ve durum etiketidir.
- Yüzde 100 ise `completed`, en az 80 ise `on-track`, aksi hâlde `in-progress`
  üretilir.
- Geçersiz input sessizce düzeltilmez; kontrollü hata üretir.

Kapsam dışı kararlar da önemlidir: kullanıcı hesabı, database, tarih aralığı,
network ve grafik arayüz bu sürümde yoktur. Kapsam dışı demek önemsiz demek değil;
bu teslimde kanıtlanmayacak demektir.

### Gereksinime kimlik vermek

Gereksinimleri `REQ-01`, `REQ-02` gibi benzersiz kimliklerle yazalım:

| Kimlik | Ölçülebilir gereksinim |
|---|---|
| `REQ-01` | Program en az bir görev içeren array kabul eder. |
| `REQ-02` | Her görev alan ve tür kurallarına göre doğrulanır. |
| `REQ-03` | Planlanan ve tamamlanan dakikalar ayrı ayrı toplanır. |
| `REQ-04` | Tamamlanma yüzdesi en yakın integer'a yuvarlanır. |
| `REQ-05` | Durum 100, 80 ve alt sınırlarına göre belirlenir. |
| `REQ-06` | Geçersiz veri kontrollü ve açıklayıcı failure üretir. |

Kimlik, bürokrasi için değil iz sürmek için vardır. Test başarısız olduğunda
“hangi ihtiyaç tehlikede?” sorusuna doğrudan cevap verir.

### Acceptance criteria: bitti demenin ortak ölçüsü

**Acceptance criteria (kabul kriterleri)**, bir gereksinimin tamamlanmış ve kabul
edilebilir sayılması için ölçülebilir koşullardır. “İyi çalışmalı” kriter değildir.
Gözlemci aynı input ile aynı kararı verebilmelidir.

`REQ-05` için örnek:

```text
Given toplam planlanan süre 100 dakika
When tamamlanan süre 80 dakika olduğunda
Then yüzde 80 ve durum "on-track" olmalıdır
```

Burada **Given** başlangıç durumunu, **When** gerçekleşen eylem veya girdiyi,
**Then** gözlenebilir sonucu anlatır. Bu format zorunlu değildir; önemli olan
başlangıç, davranış ve beklenen sonucun açık olmasıdır.

Tahmin edin: 79 dakika için durum ne olmalı? Peki 100 dakika? Bu iki cevap aynı
koşulun sınırlarını görünür kılar. Daha kod yazmadan üç test vakası doğmuştur.

### Veri modelini bilinçli kurmak

Bir görev şöyle temsil edilir:

```js
const task = {
  topic: "Fonksiyonlar",
  plannedMinutes: 60,
  completedMinutes: 45,
};
```

`task` bir object'tir çünkü aynı varlığa ait üç farklı bilgiyi isimli alanlarla
bir arada tutar. Array seçmedik; `["Fonksiyonlar", 60, 45]` yazıldığında 60 ile
45'in rolünü index üzerinden hatırlamak gerekir.

`topic` string'dir; hesaplama değil, insan tarafından okunacak konu adını taşır.
`plannedMinutes` ve `completedMinutes` number'dır çünkü toplama, karşılaştırma ve
bölme işlemlerine katılır. Süreyi `"60"` string'iyle tutsaydık toplama işlemi
yanlışlıkla birleştirmeye dönüşebilirdi. `completed` boolean'ı seçmedik; çünkü
sorunumuz yalnız bitti/bitmedi değil, kısmi ilerlemeyi de ölçmektir.

### Fonksiyon haritası

Koddan önce sorumlulukları cümlelerle ayıralım:

```text
createWeeklySummary(tasks)
├── validateTasks(tasks)          → veri sözleşmesini korur
├── calculateTotals(tasks)        → iki toplamı üretir
├── calculatePercentage(totals)   → oranı integer yüzdeye çevirir
└── determineStatus(percentage)   → iş etiketini seçer
```

Bu ayrım C16'daki functional decomposition bilgisini kullanır. Her fonksiyonun
tek bir değişiklik nedeni vardır. Validation kuralı değişirse toplama algoritmasına;
durum eşiği değişirse veri doğrulamaya dokunmak gerekmez.

### Birlikte yapalım: en küçük dikey dilim

Önce status davranışını yazalım:

```js
function determineStatus(completionPercentage) {
  if (completionPercentage === 100) return "completed";
  if (completionPercentage >= 80) return "on-track";
  return "in-progress";
}
```

`completionPercentage` number'dır ve adı birim ile anlamı taşır. İlk koşulun
`>= 100` olmamasının nedeni validation sözleşmesinin yüzdeyi 100'ün üzerinde
üretmemesidir. İkinci koşula 100 de uyar; bu yüzden daha özel `=== 100` koşulu
önce değerlendirilir. 100 için çalışma sırası şöyledir:

| Adım | Kontrol | Sonuç | Sonraki hareket |
|---|---|---|---|
| 1 | `100 === 100` | `true` | `"completed"` döndür |
| 2 | `100 >= 80` | Çalışmaz | Fonksiyon bitmiştir |

Koşulları ters çevirseydik 100 önce `>= 80` koşuluna girer ve yanlışlıkla
`on-track` olurdu. Sözdizimi geçerli, davranış yanlıştır.

### Toplam ve yüzde hesabı

```js
function calculateTotals(tasks) {
  let plannedMinutes = 0;
  let completedMinutes = 0;

  for (const task of tasks) {
    plannedMinutes += task.plannedMinutes;
    completedMinutes += task.completedMinutes;
  }

  return { plannedMinutes, completedMinutes };
}

function calculatePercentage({ plannedMinutes, completedMinutes }) {
  return Math.round((completedMinutes / plannedMinutes) * 100);
}
```

İki accumulator number olarak sıfırdan başlar; toplamanın etkisiz elemanı sıfırdır.
Her iterasyonda o ana kadar işlenen görevlerin toplamını taşırlar. `plannedMinutes`
validation sayesinde sıfır olamaz; böylece division by zero bu fonksiyonun değil,
giriş sözleşmesinin sorumluluğudur.

İki görev için elle izleyelim:

| Tur | Görev | Planlanan toplam | Tamamlanan toplam |
|---:|---|---:|---:|
| 0 | Henüz yok | 0 | 0 |
| 1 | Fonksiyonlar: 60/45 | 60 | 45 |
| 2 | Testler: 40/35 | 100 | 80 |

Sonra `(80 / 100) * 100 = 80`, `Math.round(80) = 80` ve status `on-track` olur.

### Validation ve kontrollü failure

```js
function validateTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    throw new TypeError("tasks must be a non-empty array");
  }

  for (const task of tasks) {
    const validTopic = typeof task.topic === "string" && task.topic.trim() !== "";
    const validPlanned = Number.isInteger(task.plannedMinutes) && task.plannedMinutes > 0;
    const validCompleted = Number.isInteger(task.completedMinutes)
      && task.completedMinutes >= 0
      && task.completedMinutes <= task.plannedMinutes;

    if (!validTopic || !validPlanned || !validCompleted) {
      throw new TypeError("task fields are invalid");
    }
  }
}
```

`validTopic`, `validPlanned` ve `validCompleted` boolean'dır. Her biri farklı bir
sözleşme sorusunun cevabını taşır. Tek, uzun koşul da çalışabilirdi; isimli ara
değerler failure kararının okunmasını kolaylaştırır. C24'teki kontrollü failure
politikası uygulanır: veri tahminle onarılmaz ve `NaN` üreterek ilerlemez.

### Programı birleştirmek

```js
function createWeeklySummary(tasks) {
  validateTasks(tasks);
  const totals = calculateTotals(tasks);
  const completionPercentage = calculatePercentage(totals);

  return {
    ...totals,
    completionPercentage,
    status: determineStatus(completionPercentage),
  };
}
```

Ana fonksiyon bir orkestratördür. Önce contract'ı korur, sonra veriyi dönüştürür,
en son açıklanabilir sonucu döndürür. `totals` object seçilmiştir; iki number'ın
birlikte taşındığını ve alan rollerini korur. Fonksiyon I/O, database veya ekrana
yazdırma yapmaz; bu sayede aynı domain davranışı doğrudan test edilebilir.

### Requirements traceability: gereksinimden kanıta iz

**Requirements traceability (gereksinim izlenebilirliği)**, her gereksinimi onu
gerçekleştiren tasarım/kod ve doğrulayan test/review kanıtına bağlar.

| Gereksinim | Tasarım kararı | Kod kanıtı | Test kanıtı |
|---|---|---|---|
| `REQ-02` | Girişte fail-fast validation | `validateTasks` | `T-04`, `T-05` |
| `REQ-03` | Tek geçişte iki accumulator | `calculateTotals` | `T-01` |
| `REQ-04` | `Math.round` ile açık yuvarlama | `calculatePercentage` | `T-02` |
| `REQ-05` | Özel eşik önce | `determineStatus` | `T-01`–`T-03` |
| `REQ-06` | `TypeError` contract'ı | `validateTasks` | `T-04`, `T-05` |

Bir requirement'ın satırda bulunması tek başına yeterli değildir. Test, yanlış
uygulamada kırılmalı; review ise tasarımın gereksiz karmaşıklık taşımadığını
incelemelidir. İzlenebilirlik “dosya var” değil, kanıt zinciridir.

### Verification ile validation farkı

**Verification (doğrulama)**, ürünü tanımlanan gereksinimlere doğru biçimde yapıp
yapmadığımızı sorar. Testler `REQ-05` eşiğinin doğru kodlandığını gösterebilir.

**Validation (geçerleme)** ise doğru problemi çözüp çözmediğimizi sorar. Öğrencinin
aslında günlük değil haftalık özet istemesi, yüzde yerine kalan süreyi daha yararlı
bulması veya kısmi görevin farklı yorumlanması stakeholder ile geçerlenir.

Testlerin tamamı geçebilir ve yine de yanlış ürün yapılmış olabilir. Bu yüzden
gereksinimler koddan önce paydaş örnekleriyle kontrol edilir; teslimde demo ve
geri bildirim yalnız test sonucuna eklenir.

### Risk and delivery

**Risk (risk)**, gerçekleşmesi kesin olmayan fakat sonucu etkileyebilecek
belirsizliktir. Risk kaydı “bir şey bozulabilir” demez:

| Risk | Olasılık/etki | Azaltma | Kalan sınırlama |
|---|---|---|---|
| Yüzde yuvarlama beklentisi farklı olabilir | Orta/Orta | Kriteri örneklerle onayla | Ondalık gösterilmez |
| Büyük array yavaş olabilir | Düşük/Düşük | Tek geçişli hesap | Benchmark yapılmadı |
| Hata mesajı hangi görevin bozuk olduğunu söylemez | Orta/Orta | Sonraki artışta index ekle | İlk sürüm genel mesaj verir |

**Delivery readiness (teslime hazır olma)** yalnız kodun çalışması değildir.
Gereksinimler, test sonuçları, kullanım örneği, bilinen sınırlamalar ve review
kararı birlikte bulunmalıdır. Saklanan risk teslimi güçlü göstermez; ekip için
sürpriz üretir.

## Engineering Perspective

Profesyonel mühendislik, ilk fikri en hızlı kodlamak ile aylarca kusursuz plan
yapmak arasında kanıta dayalı bir denge kurar. Küçük programda yüz sayfalık tasarım
belgesi gereksizdir; fakat bir paragraf problem contract, altı requirement, function
map, test tablosu ve risk kaydı sonraki değişikliğin maliyetini ciddi biçimde
azaltabilir.

Tasarım ilerledikçe öğrenir. Dossier donmuş bir kehanet değil, kararların güncel
izidir. Yeni bilgi geldiğinde requirement değişir; ilgili tasarım, kod ve test
bağlantıları birlikte güncellenir. Buna **change readiness (değişikliğe hazır olma)**
denir.

**Technical review (teknik inceleme)**, geliştiriciyi değil teslimin correctness,
kanıt, trade-off, risk ve maintainability durumunu değerlendirir. Review soruları:

- Kapsam ve non-goals açık mı?
- Her requirement test edilebilir mi?
- Veri türleri temsil edilen bilgiye uygun mu?
- Fonksiyon sınırları değişiklik nedenlerini ayırıyor mu?
- Boundary ve invalid vakaları var mı?
- Testler gerçekten bozuk kodda kırılır mı?
- Alternatifler ve kalan riskler dürüstçe yazılmış mı?
- Başka bir geliştirici programı çalıştırıp kararı yeniden üretebilir mi?

“Ben olsam farklı yazardım” engelleyici review kanıtı değildir. Teknik gerçek,
gereksinim, test sonucu ve açık ekip standardı kişisel tercihten güçlüdür.

## Real World Examples

### ASEA search engine

“En iyi kaynakları göster” gereksinimi ölçülemez. Kaynak türleri, minimum kalite
kanıtı, sıralama kuralı, lisans görünürlüğü ve boş sonuç davranışı kabul kriterine
dönüştürülmelidir. Her kriter veri alanına, ranking kararına ve test setine bağlanır.

### Admin chapter editörü

“Taslak kaydedilsin” isteği; hangi kullanıcı, hangi alanlar, validation failure,
başarılı kayıt sonrası görünür durum ve yeniden açıldığında veri korunumu ile
ölçülebilir olur. UI'nın güzel görünmesi persistence gereksinimini kanıtlamaz.

### E-ticaret indirimi

“Yüzde 10 indirim” ifadesi vergi öncesi mi sonrası mı, hangi müşteri için, hangi
tarihte ve hangi yuvarlama kuralıyla sorularını açık bırakır. Boundary örnekleri
ve hesap oracle'ı yazılmadan doğru görünen iki farklı uygulama üretilebilir.

### Komut satırı raporu

Bir CLI aracı exit code, stdout/stderr ayrımı ve invalid input davranışını contract'a
eklemelidir. İnsan gözüyle doğru görünen çıktı otomasyon için başarısız olabilir.

## Common Mistakes

### Kodla başlayıp contract'ı sonradan uydurmak

Kod içindeki mevcut davranış gereksinim sanılır. Önce ihtiyacı, kapsamı ve örnekleri
yazın; sonra implementation'ın bunlara uyduğunu doğrulayın.

### “Çalışıyor”u “tamamlandı” sanmak

Tek normal demo boundary, invalid input, readability ve limitation kanıtı vermez.
Acceptance criteria ve definition of done listesini kullanın.

### Gereksinimi çözüm olarak yazmak

“Program `reduce` kullanmalıdır” çoğu durumda iş gereksinimi değil implementation
tercihidir. Gereksinim gözlenebilir sonucu söyler; teknik kısıt gerçekten varsa
nedeniyle ayrıca kaydedilir.

### Her şeyi ilk sürüme almak

Login, database, grafikler ve export aynı anda eklenince çekirdek davranışın kanıtı
bulanıklaşır. Non-goals yazarak kapsamı koruyun.

### Test ID'si ekleyip izlenebilirlik var sanmak

Test ilgili requirement'ı yanlış uygulamada yakalamıyorsa bağlantı yalnız etikettir.
Mutation düşüncesiyle “hangi hata bu testi kırar?” sorusunu sorun.

### Riskleri saklamak

Bilinen limitation'ı yazmamak kaliteyi artırmaz. Teslim alan kişinin karar verme
yeteneğini azaltır.

### Review'u kişisel zevke çevirmek

Kanıt olmadan isim, stil veya mimari dayatmak teknik savunma değildir. Etkiyi
correctness, değişiklik maliyeti ve ekip standardıyla açıklayın.

## Best Practices

- İhtiyacı tek cümlelik problem statement ile başlatın.
- In-scope, out-of-scope ve varsayımları görünür yazın.
- Her requirement'a benzersiz kimlik ve ölçülebilir acceptance criteria verin.
- Veri modelini temsil edilen bilgi ve izin verilen durumlara göre seçin.
- Fonksiyon haritasını koddan önce, değişiklik nedenleri üzerinden kurun.
- Normal, boundary ve invalid testleri implementation'dan önce tasarlayın.
- Requirement → design → code → test → review zincirini canlı tutun.
- Küçük, dikey ve çalışır artışlarla ilerleyin.
- Risk için olasılık, etki, azaltma ve residual limitation kaydedin.
- Teslim paketine çalıştırma yönergesi, test sonucu ve bilinen sınırları ekleyin.
- Teknik review'da kişiyi değil artefact ve kanıtı değerlendirin.
- Teslim sonrası retrospective ile tahmin, hata ve kararları sonraki işe aktarın.

## Hands-on Exercise

### Birlikte yapalım

ASEA Haftalık Plan Özeti için `REQ-01`–`REQ-06` tablosunu kopyalayın. Her
gereksinime en az bir acceptance criterion ve bir test ID bağlayın. Ardından
function map'i çizin; henüz kod yazmayın.

### Tahmin et

Şu iki görevin sonucunu elle hesaplayın:

```js
const tasks = [
  { topic: "Döngüler", plannedMinutes: 50, completedMinutes: 40 },
  { topic: "Testler", plannedMinutes: 30, completedMinutes: 20 },
];
```

Toplamlar, yüzde ve status ne olur? Çözümü çalıştırmadan önce hesap izinizi yazın.

### Şimdi sen dene

`validateTasks`, `calculateTotals`, `calculatePercentage`, `determineStatus` ve
`createWeeklySummary` fonksiyonlarını sözleşmeye göre yazın. Her değişken için
temsil ettiği bilgi, tür seçimi ve geçersiz durum davranışını kısa notla açıklayın.

### Hata avı

Bir geliştirici status fonksiyonunu şöyle yazdı:

```js
function determineStatus(completionPercentage) {
  if (completionPercentage >= 80) return "on-track";
  if (completionPercentage === 100) return "completed";
  return "in-progress";
}
```

100 hangi etiketi üretir? Failure'ın syntax değil decision-order problemi olduğunu,
hangi requirement ve testin etkilendiğini açıklayın.

### Kademeli ipuçları

1. **Soru:** Aynı input birden fazla koşula uyuyor mu?
2. **Küçük yön:** 100 için koşulları yukarıdan aşağı değerlendirin.
3. **Kavramsal açıklama:** İlk doğru dal fonksiyonu bitirdiği için özel durum genel
   durumdan önce gelmelidir.
4. **Kısmi yapı:** Önce `completionPercentage === 100`, sonra `>= 80` kontrolü.
5. **Gerekçeli çözüm:** Koşulları düzeltin; 79, 80, 99 ve 100 testlerini birlikte
   çalıştırıp `REQ-05` trace'ini güncelleyin.

### Bağımsız uygulama

Kütüphane gecikme ücreti, sınav puanı özeti veya kişisel bütçe kategorisi gibi
başka bir küçük problem seçin. En az beş requirement, bir data model, function map,
sekiz test, risk register ve teslim notu üretin. En az bir alternative design'ı
maliyetle reddedin.

### Lab — Program Design Dossier

`V01-C28-L01` kapsamında:

1. Problem statement, paydaş, scope, non-goals ve assumptions yazın.
2. Ölçülebilir requirement ve acceptance criteria üretin.
3. Data model, pseudocode ve function map kurun.
4. Failure policy ve normal/boundary/invalid test planı hazırlayın.
5. Küçük programı uygulayıp testleri çalıştırın.
6. Requirements traceability matrix'i gerçek kanıtlarla doldurun.
7. Risk, rejected alternatives ve known limitations kaydı üretin.
8. Teknik review yapıp teslim kararını savunun.

### Gerçek proje bağlantısı

`V01-CP01` için C03'ten problem contract'ı, C16'dan function map'i, C23'ten
trade-off kaydını, C24–C26'dan failure/test kanıtlarını ve C27'den refactoring
raporunu tek dossier içinde birleştirin. Her requirement'ın en az bir kod ve test
kanıtı olsun. Eksik bağlantıyı “tamamlandı” olarak işaretlemeyin.

## Reflection Questions

1. İlk ihtiyaç cümlesindeki hangi kelime en fazla belirsizlik taşıyordu?
2. Hangi acceptance criterion tasarımınızı değiştirdi?
3. Hangi veri türünü neden seçtiniz ve hangi alternatifi reddettiniz?
4. Bir testiniz hangi gerçek implementation hatasında kırılır?
5. En yüksek residual risk nedir ve teslim alan kişi bunu neden bilmelidir?
6. Review sırasında kişisel tercih ile teknik gerekliliği nasıl ayırdınız?
7. Bir sonraki projede hangi tasarım adımını daha erken yapacaksınız?

## Chapter Summary

C28'de bir ihtiyeti doğrudan koda çevirmek yerine önce ölçülebilir bir problem
contract kurdunuz. Requirement'lara kimlik verdiniz, acceptance criteria ile
“bitti” kararını ortaklaştırdınız ve scope/non-goals ile ilk sürümü korudunuz.

Veri türlerini temsil ettikleri bilgi üzerinden seçtiniz. Function map ile
validation, hesaplama ve iş kararlarını ayırdınız. Normal, boundary ve invalid
vakaları koddan önce düşündünüz; ardından küçük bir dikey dilimi uyguladınız.

Requirements traceability matrix ile ihtiyaçtan tasarım, kod, test ve review
kanıtına kadar kesintisiz iz kurdunuz. Verification'ın ürünü doğru yapmayı,
validation'ın doğru ürünü yapmayı sorguladığını ayırdınız. Riskleri ve limitation'ları
saklamadan teslim paketine eklediniz.

Artık “programlama temellerini öğrendim” cümlesini yalnız syntax bilgisiyle değil;
ölçülebilir bir gereksinimi açıklanabilir, modüler, test edilmiş ve incelenebilir
bir programa dönüştüren bütünleşik mühendislik kanıtıyla söyleyebilirsiniz.

## Key Takeaways

- İhtiyaç yön verir; requirement gözlenebilir ve test edilebilir davranışı tanımlar.
- Acceptance criteria tamamlanma kararını kişisel yorumdan çıkarır.
- Program design veri, algoritma, fonksiyon, failure ve verification kararlarını
  tutarlı bir bütün hâline getirir.
- Veri türü, temsil edilen bilgi ve izin verilen işlemlere göre seçilir.
- Requirements traceability etiket listesi değil, yeniden üretilebilir kanıt zinciridir.
- Verification “doğru yaptık mı?”, validation “doğru şeyi mi yaptık?” sorusudur.
- Scope ve non-goals küçük teslimin odağını korur.
- Risk kaydı belirsizliği; limitation kaydı mevcut sınırı görünür yapar.
- Yeşil test gerekli ama tek başına teslim readiness kanıtı değildir.
- Teknik review kişisel zevk yerine correctness, evidence ve trade-off inceler.
- C28, C03–C27 yeterliklerini `V01-CP01` tesliminde birleştirir.

## Further Reading

- NASA Requirements Verification Matrix örneğini C28 traceability tablonuzla
  karşılaştırın.
- NASA'nın verification ve validation ayrımını kendi projenizde iki ayrı soruyla
  uygulayın.
- Google Engineering Practices code review kontrolünü C28 dossier'ınıza uyarlayın.
- Küçük değişikliklerin review ve failure isolation etkisini proje artışınızda
  gözlemleyin.

## References

- [NASA Systems Engineering Handbook — Appendix](https://www.nasa.gov/reference/system-engineering-handbook-appendix/)
- [NASA SWE-055 — Requirements Validation](https://swehb.nasa.gov/spaces/7150/pages/16449673/SWE-055%2B-%2BRequirements%2BValidation)
- [Google Engineering Practices — What to Look for in a Code Review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
- [Google Engineering Practices — Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
