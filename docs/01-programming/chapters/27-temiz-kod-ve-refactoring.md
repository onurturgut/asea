---
document_type: "chapter"
chapter_id: "V01-C27"
volume_id: "V01"
title: "Temiz Kod ve Refactoring"
slug: "temiz-kod-ve-refactoring"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "10-12 saat"
prerequisites:
  - "V01-C16"
  - "V01-C23"
  - "V01-C25"
  - "V01-C26"
learning_outcomes:
  - "V01-LO044"
  - "V01-LO045"
related_lab_ids:
  - "V01-C27-L01"
related_assessment_ids:
  - "V01-C27-AS01"
next_chapter_id: "V01-C28"
blueprint_id: "V01-C27-BP01"
last_updated: "2026-08-01"
---

# Temiz Kod ve Refactoring

## Learning Objectives

Çalışan kod her zaman rahat değiştirilen kod değildir. Bir fonksiyon doğru sonucu
üretebilir; fakat `x`, `s` ve `f` gibi adlar, iç içe koşullar ve farklı yerlere
kopyalanmış aynı iş kuralı yüzünden bir sonraki değişiklik riskli olabilir.

Bu chapter sonunda:

- Okunabilirliği “güzel görünüyor” yerine kodun niyetini ve kararlarını anlama
  maliyeti üzerinden değerlendirebileceksiniz.
- Code smell’i kesin defect değil, araştırılması gereken bakım riski sinyali olarak
  açıklayabileceksiniz.
- Refactoring’i feature ekleme, bug fix, biçimlendirme ve rewrite’dan ayırabileceksiniz.
- C26 test suite’ini güvenlik ağı kullanarak küçük, geri alınabilir ve davranışı
  koruyan refactoring adımları uygulayabileceksiniz (`V01-LO044`).
- Naming, duplication, cohesion ve complexity sorunlarını kod üzerinde
  teşhis edebileceksiniz.
- Before/after karşılaştırmasını test sonucu, sorumluluk sınırı, tekrar eden kural,
  kontrol akışı ve okunabilirlik kanıtlarıyla savunabileceksiniz (`V01-LO045`).
- Her adımdan sonra test çalıştırıp failure oluşursa değişiklik alanını dar
  tutabileceksiniz.

Başarı ölçünüz daha kısa kod değildir. Aynı gözlenebilir davranışı korurken bir
sonraki doğru değişikliğin daha güvenli ve anlaşılır hâle gelmesidir.

## Prerequisites

C27 dört temel yeterliği bir araya getirir:

- C16: bir sorumluluğu küçük fonksiyonlara ayırma,
- C23: değişiklik maliyeti ve ödünleşimi açıklama,
- C25: failure olduğunda küçük adımın kök nedenini izole etme,
- C26: normal, boundary, invalid ve regression testlerinden oluşan güvenlik ağı.

Şu test sözleşmesinin yeşil olduğunu varsayın:

| Durum | Girdi | Beklenen skor |
|---|---|---:|
| Focus, kısa, tamamlanmadı | 30 dakika | 60 |
| Review, kısa, tamamlanmadı | 30 dakika | 30 |
| Focus, tamamlandı | 30 dakika | 70 |
| Review, 60 dakika | 60 dakika | 65 |

Bu tabloyu görmeden refactoring yapmayın. Davranışın ne olduğunu bilmiyorsanız
onu koruduğunuzu da gösteremezsiniz.

## Estimated Study Time

Önerilen toplam süre **10–12 saattir**:

| Çalışma | Süre |
|---|---:|
| Readability ve code smell analizi | 90 dakika |
| Refactoring güvenlik döngüsü | 120 dakika |
| Naming, extraction ve cohesion | 150 dakika |
| Duplication ve complexity | 120 dakika |
| Before/after değerlendirmesi | 90 dakika |
| Quiz, lab ve bağımsız refactoring | 150–210 dakika |

Refactoring’i tek uzun oturumda yapmayın. Her küçük adımdan sonra test sonucunu
ve karar gerekçesini kaydedin. Ara verdiğinizde son yeşil adıma dönebilmelisiniz.

## Introduction

Bir öğretmenin tahtada doğru cevaba ulaştığını fakat bütün ara adımları `a`, `b`,
`x` diye adlandırdığını düşünün. Öğretmen sonucu biliyor olabilir; yeni öğrenci
ise hangi sayının süreyi, hangisinin puanı temsil ettiğini sürekli zihninde tutar.
Sorun öğrencinin zekâsı değil, anlatımın gereksiz hafıza yüküdür.

Kod da insanlara açıklama yapar. Runtime değişken adlarının şiirselliğini önemsemez;
ama geliştirici bir kuralı değiştirirken her ismin anlamını, her koşulun nedenini
ve hangi satırların birlikte değişmesi gerektiğini anlamak zorundadır.

**Refactoring**, çalışan yazılımın dışarıdan gözlenen davranışını değiştirmeden iç
yapısını iyileştiren disiplinli dönüşümdür. “Bütün dosyayı daha güzel yazdım”
refactoring kanıtı değildir. Küçük adım, aynı testler ve açık before/after gerekçesi
gerekir.

Bu chapterda ASEA çalışma oturumu skorunu hesaplayan bir fonksiyonu olgunlaştıracağız.
Yeni puan kuralı eklemeyeceğiz. Önceki davranışı korurken niyeti görünür, kararları
yerel ve değişikliği daha güvenli hâle getireceğiz.

## Core Concepts

### Başlangıç kodu: çalışıyor ama pahalı okunuyor

```js
function calc(s) {
  let x = 0;

  if (s.m === "focus") {
    x = s.d * 2;
  } else {
    x = s.d;
  }

  if (s.c) x += 10;
  if (s.d >= 60) x += 5;

  return x;
}
```

Fonksiyon doğru olabilir. Fakat okuyucu şunları zihninde çevirmek zorundadır:

- `calc` ne hesaplıyor?
- `s` hangi kaydı taşıyor?
- `m`, `d`, `c` alanlarının iş anlamı ne?
- `x` ara değer mi, sonuç mu?
- 2, 10 ve 5 sayıları hangi kuralları temsil ediyor?

Bu sorular doğrudan defect değildir. Bunlar bakım sırasında yanlış değişiklik
olasılığını artıran **code smell (kod kokusu)** sinyalleridir.

### Readability: okuma maliyetini azaltmak

**Okunabilirlik (readability)**, bir okuyucunun kodun niyetini, veri akışını ve
kararlarını doğru anlamak için harcadığı zihinsel çabadır. Yalnız boşluk ve satır
uzunluğu değildir.

Okunabilirlik için gözlenebilir sorular:

- İsimler iş alanındaki bilgiyi söylüyor mu?
- Fonksiyonun tek cümlelik sorumluluğu var mı?
- Kontrol akışı yukarıdan aşağı takip edilebiliyor mu?
- Aynı kuralın kaç kopyası aranmalı?
- Yorum kodun ne yaptığını mı tekrar ediyor, nedenini mi açıklıyor?
- Yeni okuyucu hangi terimleri zihninde çevirmek zorunda?

“Ben böyle seviyorum” tek başına kanıt değildir. Ekip sözlüğü, test davranışı ve
değişiklik senaryosu daha güçlü kanıttır.

### Code smell: hüküm değil araştırma işareti

Code smell, olası tasarım veya bakım sorununa işaret eden belirtidir. Her uzun
fonksiyon kötü, her tekrar yanlış veya her kısa isim anlamsız değildir. Örneğin
matematik formülündeki yerel `x` alan sözleşmesinde açık olabilir; iş kaydındaki
`s.m` ise bağlamı gizleyebilir.

Smell’i risk cümlesine dönüştürün:

> `s.m` adı çalışma modunu gizlediği için yeni mod eklerken yanlış alanın
> değiştirilme riski artıyor.

Bu cümle smell, bağlam ve bakım etkisini birlikte taşır (`V01-LO045`).

### Refactoring güvenlik döngüsü

```text
Yeşil testleri doğrula
        ↓
Tek smell ve hedef seç
        ↓
Küçük dönüşüm yap
        ↓
Testleri çalıştır
   ↙ başarısız     başarılı ↘
adımı geri al/incele      değişikliği kaydet
                              ↓
                         sonraki küçük adım
```

Testler başlangıçta kırmızıysa refactoring ile mevcut defect’i birbirinden
ayıramazsınız. Önce C25 süreciyle failure’ı açıklayın veya bilinen kırmızı testi
açıkça kaydedin.

### Birlikte yapalım — Adım 1: Rename

İlk adım yalnız adları değiştirir:

```js
function calculateSessionScore(session) {
  let score = 0;

  if (session.mode === "focus") {
    score = session.durationMinutes * 2;
  } else {
    score = session.durationMinutes;
  }

  if (session.completed) score += 10;
  if (session.durationMinutes >= 60) score += 5;

  return score;
}
```

`calc` yerine `calculateSessionScore`, eylem ve sonucu söyler. `session`, kayıt
biriminin ne olduğunu; `score`, number’ın rolünü açıklar. `mode` string,
`durationMinutes` number ve `completed` boolean anlamını artık isim üzerinden taşır.

Bu adım formülü değiştirmez. Test tablosundaki dört örneği çalıştırırız. Hepsi
aynı expected sonucu veriyorsa observable behavior korunmuştur.

### Adım 2: Magic number’ları adlandırmak

```js
const FOCUS_MULTIPLIER = 2;
const COMPLETION_BONUS = 10;
const LONG_SESSION_MINUTES = 60;
const LONG_SESSION_BONUS = 5;
```

Sabitler uppercase adlarla değişmeyen domain kurallarını görünür yapar. Her sayıyı
constant yapmak zorunlu değildir. `0` accumulator başlangıcı gibi yerel ve açık
değerler adlandırıldığında okuma kolaylaşmayabilir. Burada 2, 10, 60 ve 5 ürün
kuralıdır; değişiklikte aranacak ortak sözlük oluşturur.

### Adım 3: Extract Function ile kararları ayırmak

```js
function baseScoreFor(session) {
  if (session.mode === "focus") {
    return session.durationMinutes * FOCUS_MULTIPLIER;
  }

  return session.durationMinutes;
}

function completionBonusFor(session) {
  return session.completed ? COMPLETION_BONUS : 0;
}

function longSessionBonusFor(session) {
  return session.durationMinutes >= LONG_SESSION_MINUTES
    ? LONG_SESSION_BONUS
    : 0;
}

function calculateSessionScore(session) {
  return (
    baseScoreFor(session) +
    completionBonusFor(session) +
    longSessionBonusFor(session)
  );
}
```

Her yardımcı tek bir puan kuralını yanıtlar. Ana fonksiyon artık “temel skor +
tamamlama bonusu + uzun oturum bonusu” diye okunur.

Bu daha fazla satır üretti. Refactoring’in hedefi satır azaltmak değildir.
Kural sınırlarını görünür yapmak ve bir kural değiştiğinde ilgili yeri daraltmaktır.

### Cohesion: birlikte değişen bilgi birlikte dursun

**Cohesion (bağdaşıklık)**, bir fonksiyondaki parçaların aynı odak ve sorumluluk
etrafında ne kadar anlamlı birleştiğini anlatır. `completionBonusFor` yalnız
tamamlanma bonusunu bilir; formatlama, kayıt veya kullanıcı mesajı üretmez.

Yüksek cohesion “her fonksiyon tek satır olsun” değildir. Aynı kuralı anlamak için
beş dosya arasında dolaşmak da maliyetlidir. Ayrım, değişiklik nedeni üzerinden
gerekçelendirilmelidir.

### Duplication: aynı metin mi, aynı bilgi mi?

**Duplication (tekrar)** yalnız aynı satırların kopyası değildir. Aynı iş kuralının
birden fazla yerde bağımsız temsil edilmesi, kopyalardan biri güncellendiğinde
diğerinin unutulma riskini doğurur.

İki `if` satırı görünüşte benzer diye hemen ortak fonksiyona taşımayın. Bugün aynı
görünen iki kural farklı nedenlerle değişecekse yanlış abstraction onları gereksiz
bağlar. Önce şu soruyu sorun:

> Bu iki parça aynı iş bilgisini mi temsil ediyor ve aynı nedenle mi değişecek?

Evetse ortak isim ve tek kaynak değerlidir. Yalnız şekilleri benziyorsa duplication
olmayabilir.

### Complexity: karar yükünü görünür yapmak

**Karmaşıklık (complexity)** burada yalnız C23’teki zaman karmaşıklığı değildir.
Okuyucunun kontrol akışını anlamak için taşıdığı karar ve iç içe bağlam yüküdür.

İç içe `if`, birden fazla erken/örtük çıkış, negasyonlar ve karışık sorumluluklar
cognitive complexity’yi artırabilir. Tek bir metrik evrensel doğruluk vermez.
Before/after için şu kanıtları kullanabilirsiniz:

| Ölçüt | Önce | Sonra |
|---|---:|---:|
| Ana fonksiyondaki karar sayısı | 3 | 0 |
| En derin koşul seviyesi | 1 | 1 |
| Anlamsız domain adı | 5 | 0 |
| Bir puan kuralının değişiklik alanı | Ana fonksiyon | İlgili yardımcı |

Tablo “sonra kesin daha iyi” demez. İyileşme iddiasını incelenebilir yapar.

### Semantic preservation: davranış gerçekten aynı mı?

**Anlamsal koruma (semantic preservation)**, refactoring öncesi ve sonrası dışarıdan
gözlenebilir sözleşmenin aynı kalmasıdır. Aynı testlerin geçmesi güçlü kanıttır;
ama C26’da öğrendiğiniz gibi suite’in kör noktaları vardır.

Bu nedenle her adımda:

1. Mevcut testleri çalıştırın.
2. Değiştirilen kuralın boundary testlerini özellikle kontrol edin.
3. Yeni davranış eklemediğinizi diff üzerinden doğrulayın.
4. Test kör noktası refactoring alanıyla çakışıyorsa önce testi güçlendirin.

Test yeşil diye refactoring otomatik doğru sayılmaz. Yanlış oracle veya eksik
coverage aynı yanlış davranışı iki sürümde de kaçırabilir.

### Refactoring, bug fix ve feature farkı

| Çalışma | Observable behavior | Amaç |
|---|---|---|
| Refactoring | Korunur | İç yapıyı iyileştirmek |
| Bug fix | Yanlış davranış düzelir | Contract’a dönmek |
| Feature | Yeni davranış eklenir | Yeni gereksinim karşılamak |
| Formatting | Semantik olmayan görünüm değişir | Tutarlı sunum |
| Rewrite | Büyük bölüm yeniden kurulur | Mimarinin geniş değişimi |

Bir PR’da refactoring ve feature’ı karıştırmak review’u zorlaştırır. Mümkün olduğunda
önce davranış-koruyan değişikliği, sonra yeni davranışı ayrı adımlarda yapın.

### Naming: uzun değil anlamlı ve bağlama uygun

İyi isim temsil ettiği bilgi, birim ve rolü açıklar:

- `d` yerine `durationMinutes`,
- `flag` yerine `completed`,
- `data` yerine `studySession`,
- `calculate` yerine `calculateSessionScore`.

Her isim cümle kadar uzun olmamalıdır. Küçük döngüde `index` yeterlidir;
`currentStudySessionArrayPositionIndex` gürültü üretir. Ekip sözlüğünde bilinen
terim, en uzun isimden daha değerlidir.

### Comments: “ne” yerine “neden” ve sınır

```js
// Tamamlandıysa 10 ekle
if (session.completed) score += 10;
```

Bu yorum kodu tekrar eder. İsimler zaten “ne”yi söyleyebilir. Yorum; koddan
çıkarılamayan nedeni, dış kısıtı veya şaşırtıcı kararı açıklamalıdır:

```js
// 60 dakika eşiği, çalışma programındaki tek uzun oturum tanımıdır.
const LONG_SESSION_MINUTES = 60;
```

Kötü kodu yorumla açıklamak yerine önce adlandırma ve ayrıştırmayı değerlendirin.
Fakat domain gerekçesini silmeyin; kod her zaman “neden 60?” sorusunu cevaplamaz.

## Engineering Perspective

Refactoring ürün geliştirmeyi durduran estetik çalışma değildir. Sağlıklı kod
tabanı sonraki feature’ın değişiklik alanını ve defect riskini azaltabilir. Fakat
refactoring’in de maliyeti vardır: review süresi, merge çakışması ve eksik test
nedeniyle regression riski.

Profesyonel karar kaydı şu sorulara cevap verir:

- Hangi smell hangi gerçek değişiklik riskini doğuruyor?
- Neden şimdi refactor ediyoruz?
- Davranışı hangi testler koruyor?
- Adımlar ne kadar küçük ve geri alınabilir?
- Before/after kanıtı nedir?
- Hangi alternatif reddedildi ve neden?
- Hangi kör noktalar kaldı?

“Temiz kod” tek bir kişinin zevki değildir. Ekip standardı ve ürün bağlamı önemlidir.
Bir kerelik script ile yıllarca değişecek çekirdek domain fonksiyonuna aynı soyutlama
yatırımı yapılmayabilir. C23’teki maliyet–fayda düşüncesini kullanın.

## Real World Examples

### Form doğrulama

Tek fonksiyon tür dönüşümü, validation, hata mesajı ve kayıt yapıyorsa farklı
değişiklik nedenleri karışmıştır. Önce saf validation’ı ayırmak test izolasyonunu
ve cohesion’ı artırabilir.

### Fiyat veya puan kuralları

Aynı bonus oranı üç ekranda kopyalıysa iş kuralı değişiminde tutarsızlık riski
vardır. Ortak domain fonksiyonu tek kaynak olabilir; fakat farklı kampanyalar
gelecekte ayrışacaksa zorla birleştirmek yanlış abstraction oluşturabilir.

### Search engine sonuç kartı

Kaynak skoru, lisans görünürlüğü ve filtre etiketi aynı render fonksiyonunda
hesaplanıyorsa UI ile domain kararı karışır. Hesabı saf fonksiyona taşımak test
edilebilirliği artırır; render yalnız sunuma odaklanır.

### Admin chapter editörü

Taslak kaydetme, doğrulama ve yayınlama aynı fonksiyonda ise failure sınırları
belirsizleşir. Refactoring yeni yayın davranışı eklemez; mevcut adımları isimli
sorumluluklara ayırır ve C24 error contract’ını korur.

## Common Mistakes

### Test olmadan büyük rewrite yapmak

Davranış değiştiğinde hangi adımın etkili olduğunu bulamazsınız. Önce karakterizasyon
ve regression testlerini güçlendirin; küçük dönüşümler kullanın.

### Refactoring sırasında feature eklemek

“Hazır buradayken yeni bonus da ekleyelim” semantic preservation’ı bozar. Yeni
davranışı ayrı değişiklik ve ayrı testlerle ekleyin.

### Yalnız satır sayısını azaltmak

Kısa ifade daha fazla zihinsel çözümleme gerektirebilir. Niyet, cohesion ve
değişiklik alanını değerlendirin.

### Her tekrarı erken soyutlamak

Benzer şekilli ama farklı nedenle değişen kodu tek fonksiyona bağlamak yanlış
coupling yaratır. Aynı bilginin tekrarlandığını kanıtlayın.

### Her şeyi küçük fonksiyona bölmek

Okuyucu basit bir akışı anlamak için sürekli dosya/fonksiyon atlıyorsa ayrıştırma
okunabilirliği azaltabilir. Fonksiyon iş anlamı taşımalıdır.

### Yorumları topluca silmek

Kodun tekrarı olan yorum kaldırılabilir; fakat domain nedeni, güvenlik sınırı ve
geçici karar kaydı korunmalıdır.

### Yeşil testi mutlak kanıt sanmak

Suite’in kör noktaları refactoring alanıyla çakışabilir. C26 risk raporunu yeniden
inceleyin ve gerekiyorsa önce test ekleyin.

## Best Practices

- Başlamadan testlerin yeşil ve güvenilir olduğunu doğrulayın.
- Smell’i bakım riskiyle ilişkilendirin; yalnız zevkle karar vermeyin.
- Tek adımda tek refactoring hedefleyin.
- Her adımı test edin ve küçük bir diff olarak inceleyin.
- Önce adlandırmayla niyeti görünür yapın; sonra extraction değerlendirin.
- Fonksiyonları aynı değişiklik nedeni etrafında yüksek cohesion ile kurun.
- Aynı metni değil, aynı bilginin tekrarını arayın.
- Comments’te kodun “ne”sini değil, çıkarılamayan “neden”ini koruyun.
- Feature, bug fix ve refactoring’i mümkün olduğunca ayrı değişikliklerde tutun.
- Before/after kararını readability, cohesion, duplication, complexity ve test
  kanıtlarıyla kaydedin.

## Hands-on Exercise

### Birlikte yapalım

Başlangıçtaki `calc` fonksiyonu için önce dört testin yeşil olduğunu kaydedin.
Yalnız rename adımını uygulayın. Testleri tekrar çalıştırın ve şu tabloyu doldurun:

| Adım | Değişen yapı | Observable behavior | Test sonucu | Geri alınabilir mi? |
|---|---|---|---|---|
| 0 | Baseline | Mevcut contract | 4/4 pass | — |
| 1 | Rename | Değişmemeli | 4/4 pass | Evet |

### Şimdi sen dene

Magic number’ları domain constant’larına dönüştürün. Her constant için:

- hangi bilgiyi temsil ettiğini,
- neden değişmez olduğunu,
- neden yerel literal bırakılmadığını,
- hangi testlerin davranışı koruduğunu

yazın. `0` değerini adlandırıp adlandırmama kararınızı ayrıca savunun.

### Hata avı

Bir geliştirici extraction sırasında şu değişikliği yapıyor:

```js
function longSessionBonusFor(session) {
  return session.durationMinutes > LONG_SESSION_MINUTES
    ? LONG_SESSION_BONUS
    : 0;
}
```

Başlangıç kodunda koşul `>= 60`, yeni kodda `> 60` oldu. Normal 30 ve 90 dakika
testleri geçebilir. Hangi boundary testi semantic değişikliği yakalar? Failure’ın
neden refactoring değil behavior change olduğunu açıklayın.

### Kademeli ipuçları

1. **Soru:** Davranış tam olarak hangi değerde dal değiştiriyor?
2. **Küçük yön:** 59, 60 ve 61 dakikayı karşılaştırın.
3. **Kavramsal açıklama:** Extraction sırasında operatör değişmesi dış davranışı
   boundary’de değiştirmiştir.
4. **Kısmi yapı:** `expectEqual(calculateSessionScore({ durationMinutes: 60, ... }), ___)`.
5. **Gerekçeli kontrol:** Koşulu eski semantiğe döndürüp tüm suite’i yeniden çalıştırın.

### Bağımsız uygulama

En az üç smell içeren 25–50 satırlık bir fonksiyon seçin. Önce smell → bakım
riski tablosu ve yeşil baseline üretin. Rename, extract veya simplify adımlarından
en az üçünü tek tek uygulayın. Her adımda test kanıtı ve diff gerekçesi kaydedin.

### Lab — Test altında refactor

`V01-C27-L01` kapsamında:

1. Smell ve bakım riski listesini çıkarın.
2. C26 suite’inin ilgili riskleri kapsadığını kontrol edin.
3. Küçük refactoring sırası planlayın.
4. Her adımdan sonra test kanıtı kaydedin.
5. Before/after readability, cohesion, duplication ve complexity raporu yazın.
6. Reddedilen bir seçeneği maliyet ve yanlış abstraction riskiyle açıklayın.

### Gerçek proje bağlantısı

`V01-CP01` kodunu C26 güvenlik ağı altında refactor edin. Yeni feature eklemeyin.
En az bir rename, bir extract ve bir duplication/cohesion kararı üretin. C28’e
test sonuçları, before/after diff özeti ve kalan teknik riskleri devredin.

## Reflection Questions

1. Hangi smell ilk bakışta rahatsız edici fakat düşük riskli çıktı?
2. Hangi küçük adım test failure üretti ve boundary kanıtı ne gösterdi?
3. Daha fazla fonksiyon kodu gerçekten daha okunabilir yaptı mı? Neye dayanıyorsunuz?
4. Hangi duplication’ı bilerek bırakıp neden yanlış abstraction’dan kaçındınız?
5. C28’e geçmeden önce kodunuzun en pahalı değişiklik alanı neresi?

## Chapter Summary

C27’de temiz kodu kişisel estetikten çıkarıp değişiklik güvenliği problemi olarak
ele aldınız. Code smell’i defect hükmü değil, bakım riski sinyali olarak yazdınız.
Refactoring’i feature, bug fix, formatting ve rewrite’dan ayırdınız.

C26’nın yeşil test suite’i altında rename, introduce constant ve extract function
gibi küçük dönüşümler uyguladınız. Her adımda semantic preservation’ı test ve diff
ile kontrol ettiniz. Naming, cohesion, duplication ve complexity kararlarını
before/after kanıtıyla savundunuz.

Artık “bu kod daha temiz” yerine “aynı davranış korunurken domain adları görünür
oldu, her puan kuralının değişiklik alanı ayrıldı, tekrar eden bilgi tek kaynağa
indi ve boundary testleri 4/4 geçti” diyebilirsiniz.

## Key Takeaways

- Refactoring dışarıdan gözlenen davranışı koruyarak iç yapıyı değiştirir.
- Code smell kesin defect değil, bağlamla değerlendirilmesi gereken risk sinyalidir.
- Testi kırmızı kod üzerinde başlatmak mevcut defect ile yeni hatayı karıştırır.
- Küçük ve geri alınabilir adımlar failure alanını dar tutar.
- İyi naming temsil edilen bilgiyi, birimi ve rolü görünür yapar.
- Cohesion aynı değişiklik nedeni etrafındaki sorumlulukları birlikte tutar.
- Her benzer kod gerçek duplication değildir; aynı bilginin tekrarı aranmalıdır.
- Kısa kod her zaman düşük cognitive complexity anlamına gelmez.
- Yeşil test güçlü kanıttır fakat suite kör noktalarını ortadan kaldırmaz.
- C28’de bu temizlenmiş, test edilmiş yapı gereksinimden teslimata bütünleşecektir.

## Further Reading

- Refactoring.com’daki Rename Variable ve Extract Function dönüşümlerini mevcut
  örnekle eşleyin.
- Google JavaScript Style Guide’ın naming bölümünü ekip sözlüğünüzle karşılaştırın.
- Bir yorumun “ne”yi mi “neden”i mi açıkladığını sınıflandırın.
- C26 risk coverage raporunu refactoring diff’inizle yan yana inceleyin.

## References

- [Refactoring — Martin Fowler](https://refactoring.com/)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Google Documentation Best Practices](https://google.github.io/styleguide/docguide/best_practices.html)
- [Node.js Test Runner](https://nodejs.org/api/test.html)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
