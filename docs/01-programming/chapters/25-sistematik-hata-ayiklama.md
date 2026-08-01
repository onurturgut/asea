---
document_type: "chapter"
chapter_id: "V01-C25"
volume_id: "V01"
title: "Sistematik Hata Ayıklama"
slug: "sistematik-hata-ayiklama"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "10-12 saat"
prerequisites:
  - "V01-C02"
  - "V01-C04"
  - "V01-C23"
  - "V01-C24"
learning_outcomes:
  - "V01-LO040"
  - "V01-LO041"
related_lab_ids:
  - "V01-C25-L01"
related_assessment_ids:
  - "V01-C25-AS01"
next_chapter_id: "V01-C26"
blueprint_id: "V01-C25-BP01"
last_updated: "2026-08-01"
---

# Sistematik Hata Ayıklama

## Learning Objectives

C24’te “çalışmıyor” cümlesini parçalara ayırdınız. Bekleneni, gözleneni, failure
sınıfını, diagnostic bağlamı ve güvenli durumu kaydettiniz. Fakat bir failure’ı
doğru isimlendirmek, onu oluşturan kusurun yerini henüz göstermez.

Bu chapter sonunda:

- Bir failure’ı aynı koşullarda yeniden üretebilecek açık bir reproduction kaydı
  oluşturabileceksiniz.
- Gereksiz kodu ve veriyi kontrollü biçimde çıkararak minimal failing case
  üretebileceksiniz (`V01-LO040`).
- Gözlem ile yorumu, belirti ile kök nedeni birbirinden ayırabileceksiniz.
- En az üç test edilebilir hipotez kurup her biri için tek değişkenli deney
  tasarlayabileceksiniz.
- Hipotezleri “bence” ile değil, deney sonucu ve çalışma iziyle eleyebileceksiniz
  (`V01-LO041`).
- Log, breakpoint, step, scope ve call stack araçlarını doğru soruya göre
  kullanabileceksiniz.
- Düzeltmenin yalnız belirtiyi gizlemediğini ve komşu davranışları bozmadığını
  doğrulayabileceksiniz.

Bu chapterdaki başarı ölçüsü, hatayı ne kadar hızlı kapattığınız değildir.
Başka bir geliştiricinin aynı kanıtları izleyerek aynı kök neden sonucuna ulaşıp
ulaşamadığıdır.

## Prerequisites

C25 aşağıdaki yeterliklerin üzerine kurulur:

- C02: programın komutları belirli bir sırada yürüttüğünü açıklamak,
- C04: değişken değerlerini adım adım izlemek,
- C23: arama alanını, maliyeti ve ikili daraltma düşüncesini kullanmak,
- C24: symptom, failure, exception, contract ve diagnostic bağlamı ayırmak.

Hazırlık için şu kodu çalıştırmadan tahmin edin:

```js
function totalMinutes(minutes) {
  let total = 0;

  for (let index = 0; index <= minutes.length; index += 1) {
    total += minutes[index];
  }

  return total;
}

totalMinutes([30, 45, 60]);
```

Şunları yazın:

1. Döngü kaç kez çalışır?
2. Son turda `index` ve `minutes[index]` değerleri nedir?
3. Fonksiyon exception mı üretir, yanlış değer mi döndürür?
4. C24 sözlüğünde gözlenen olay hangi sınıfa daha yakındır?

Değer tablosu oluşturamıyorsanız C04’ün izleme bölümüne dönün. Debugger ekranı
tablonun yerine geçmez; tabloyu gerçek değerlerle doldurmanıza yardım eder.

## Estimated Study Time

Önerilen toplam süre **10–12 saattir**:

| Çalışma | Süre |
|---|---:|
| Failure kaydı ve yeniden üretim | 90 dakika |
| Minimal failing case | 90 dakika |
| Gözlem, hipotez ve deney | 150 dakika |
| Log ve debugger araçları | 120 dakika |
| Alıştırma, quiz ve hata avı | 90 dakika |
| Lab ve bağımsız debugging günlüğü | 150–210 dakika |

En verimli çalışma biçimi iki ayrı oturumdur. İlkinde failure’ı yeniden üretip
hipotezleri yazın. İkinci oturuma cevapları hatırlamadan dönerek kanıt zincirinin
başka biri tarafından da izlenebilir olup olmadığını kontrol edin.

## Introduction

Bir odanın lambası yanmıyor. Ampulü, anahtarı, sigortayı ve prizi aynı anda
değiştirirseniz lamba yanabilir; fakat neden yanmadığını öğrenemezsiniz. Üstelik
gereksiz üç değişiklik yapmış ve yeni sorunlar eklemiş olabilirsiniz.

Kodda rastgele satır değiştirmek de böyledir. Bir `if` eklemek, değeri `0`a
zorlamak, exception’ı yakalamak ve döngü sınırını değiştirmek aynı anda yapılırsa
belirti kaybolabilir. Hangi değişikliğin etkili olduğunu ve asıl sözleşmenin
korunup korunmadığını bilemezsiniz.

**Sistematik hata ayıklama (systematic debugging)** bir tahmin oyunu değil,
küçük bir araştırmadır:

```text
Failure kaydı
    ↓
Yeniden üretim
    ↓
En küçük başarısız örnek
    ↓
Gözlem ve hipotezler
    ↓
Kontrollü deneyler
    ↓
Kök neden
    ↓
En küçük düzeltme ve doğrulama
```

Bu sıranın en önemli yanı, düzeltmenin en sonda gelmesidir. Önce problem hakkında
güvenilir bir bilgi üretirsiniz. Böylece aynı tür failure tekrarlandığında yalnız
bu kodu değil, araştırma yöntemini de yeniden kullanabilirsiniz.

## Core Concepts

### 1. Yeniden üretim: failure’ı çağırabilmek

**Yeniden üretim (reproduction)**, aynı başlangıç koşulları ve adımlar uygulandığında
aynı failure’ın tekrar gözlenmesidir. “Bazen bozuluyor” bir başlangıç belirtisidir;
reproduction kaydı değildir.

İyi bir kayıt şunları içerir:

| Alan | Örnek |
|---|---|
| Beklenen | `[30, 45, 60]` toplamı `135` olmalı |
| Gözlenen | Sonuç `NaN` |
| En küçük adımlar | Fonksiyonu diziyle çağır, dönüşü yazdır |
| Girdi | `[30, 45, 60]` |
| Ortam | JavaScript runtime ve kod sürümü |
| Tekrarlanma | 5 denemenin 5’inde |
| Güvenli durum | Girdi dizisi değişmedi |

“Beş denemenin beşinde” ifadesi failure’ın deterministik olduğunu düşündürür.
Aralıklı (intermittent) failure’da zaman, sıra, rastgelelik, paylaşılan durum veya
dış koşul gibi ek değişkenleri kaydetmek gerekir. Tekrar üretilemeyen olay yok
sayılmaz; yalnız kanıt seviyesi daha düşüktür.

### 2. Minimal failing case: gereksiz olanı çıkarmak

**En küçük başarısız örnek (minimal failing case)**, failure’ı hâlâ üreten fakat
ilgili olmayan kod ve veriden arındırılmış örnektir. En kısa kod olmak zorunda
değildir; failure’ın nedenini incelemek için yeterince küçük ve anlaşılır olmalıdır.

İlk girdimiz `[30, 45, 60]` idi. Bir öğeyi çıkaralım:

```js
totalMinutes([30]);
```

Sonuç yine `NaN` ise 45 ve 60 failure için zorunlu değildir. Boş diziyi de deneriz:

```js
totalMinutes([]);
```

Bu da `NaN` üretebilir; fakat boş koleksiyonun ayrı bir contract sorusu olması
analizi karıştırabilir. `[30]`, normal görünümlü tek öğeyle aynı failure’ı ürettiği
için daha öğretici minimal case’tir.

Azaltma döngüsü şöyledir:

1. Bir parça çıkar.
2. Aynı failure ölçütünün oluşup oluşmadığını çalıştır.
3. Failure sürerse parçayı dışarıda bırak.
4. Failure kaybolursa parçayı geri koy; o parça gerekli koşul olabilir.
5. Her adımı kaydet.

Bu yaklaşım C23’teki arama düşüncesine benzer. Büyük kod veya veri grubunu
yarılara bölerek denemek, şüpheli alanı tek tek satır gezmekten daha hızlı
daraltabilir. Ancak her parça bağımsız çıkarılamıyorsa davranış değişebilir;
azaltmanın geçerliliğini her adımda aynı failure ölçütüyle kontrol edin.

### 3. Gözlem: olanı yorumdan ayırmak

**Gözlem (observation)** doğrudan ölçtüğünüz veya araçtan okuduğunuz bilgidir:

- “Dördüncü turda `index === 3`.”
- “`minutes[3]` değeri `undefined`.”
- “Toplama sonrasında `total` değeri `NaN`.”

“Döngü bozuk” ise yorumdur. Muhtemelen doğru olabilir ama henüz ayrıntılı bir
iddiadır. İyi debugging günlüğü iki sütun kullanır:

| Gözlem | Yorum / olası anlam |
|---|---|
| `index` değerleri 0, 1, 2, 3 | Fazladan tur olabilir |
| Dizi uzunluğu 3 | Geçerli son index 2’dir |
| `minutes[3]` undefined | Koleksiyon sınırı aşılmış olabilir |
| `total` daha sonra NaN | undefined ile toplama sonucu yayılmış olabilir |

Bu ayrım confirmation bias’ı azaltır: görmek istediğiniz açıklamayı gerçek veri
gibi kaydetmezsiniz.

### 4. Hipotez: yanlışlanabilir açıklama

**Hipotez (hypothesis)** failure’ı açıklayan ve bir deneyle desteklenip
zayıflatılabilen açık önermedir. “Kodda bir sorun var” hipotez değildir; hangi
gözlem gerçekleşirse yanlış sayılacağı belli değildir.

Örneğimiz için üç hipotez:

- H1: Dizide number olmayan bir eleman bulunduğu için sonuç `NaN` oluyor.
- H2: Bölen sıfır olduğu için sonuç `NaN` oluyor.
- H3: Döngü `index === minutes.length` turuna girip `undefined` topluyor.

Her hipotez aynı anda makul görünmeyebilir. Ama onları önce yazmak, ilk fikre
bağlanıp kodu rastgele değiştirmeyi engeller.

Hipotez şablonu:

> Eğer **neden adayı** doğruysa, **kontrollü değişiklik** yapıldığında
> **ölçülebilir sonuç** gözlenmelidir.

H3 için: “Eğer sınır aşımı neden ise döngü turlarını kaydettiğimde son turda
`index`, `minutes.length` değerine eşit olmalıdır.”

### 5. Kontrollü deney: tek soruya cevap almak

**Deney (experiment)** hipotezi sınamak için koşulları kontrollü biçimde değiştirir.
Bir seferde bir ana değişken değiştirmek, sonucu hangi değişikliğin ürettiğini
anlamanızı sağlar.

| Hipotez | Deney | Beklenen kanıt | Sonuç |
|---|---|---|---|
| H1 | `minutes.every(Number.isFinite)` ölç | false olmalı | true → H1 zayıfladı |
| H2 | `minutes.length` değerini ölç | 0 olmalı | 1 → H2 elendi |
| H3 | Her turda index/değeri kaydet | index length’e ulaşmalı | ulaştı → H3 desteklendi |

“Desteklendi” ile “sonsuz kesinlikle kanıtlandı” aynı değildir. Mevcut failure’ı
açıklayan ve karşı kanıtla çelişmeyen güçlü aday elde ettik. Ardından en küçük
düzeltmeyi yapıp failure ve komşu davranışları yeniden ölçmeliyiz.

### Birlikte yapalım: kodu adım adım izlemek

Minimal örneği kullanalım:

```js
totalMinutes([30]);
```

Çalışma izi:

| Adım | `index` | `minutes.length` | Koşul `index <= length` | `minutes[index]` | `total` |
|---:|---:|---:|---|---:|---:|
| Başlangıç | — | 1 | — | — | 0 |
| 1 | 0 | 1 | true | 30 | 30 |
| 2 | 1 | 1 | true | undefined | NaN |
| Çıkış | 2 | 1 | false | — | NaN |

`index`, dolaşılan konumu taşıyan number’dır ve her turda değiştiği için `let`
ile tanımlanır. `total`, o ana kadar toplanmış dakikaları taşıyan number
accumulator’dır. Başlangıçta toplamanın etkisiz elemanı olan `0` seçilir.
`minutes.length` eleman sayısıdır; son geçerli index değildir. Bir elemanlı dizide
length 1, tek geçerli index 0’dır.

Kök neden, yalnız “fazladan tur” değildir. Daha kesin ifade:

> Döngü devam koşulunda `index <= minutes.length` kullanıldığı için `index`, ilk
> geçersiz konum olan `minutes.length` değerine ulaştığında gövde bir kez daha
> çalışıyor; `undefined` toplama işlemi `total` değerini `NaN` yapıyor.

En küçük düzeltme `<=` yerine `<` kullanmaktır:

```js
function totalMinutes(minutes) {
  let total = 0;

  for (let index = 0; index < minutes.length; index += 1) {
    total += minutes[index];
  }

  return total;
}
```

### Root cause, trigger ve symptom

Üçünü ayırın:

- **Kök neden (root cause):** Kusuru üreten temel kod kararı; yanlış sınır operatörü.
- **Tetikleyici (trigger):** Kusurun görünür olmasını sağlayan koşul; fonksiyonun
  herhangi bir diziyle çağrılması.
- **Belirti (symptom):** Dışarıdan gözlenen sonuç; `NaN` dönmesi.

Sonucu `Number.isNaN(total) ? 0 : total` ile değiştirmek symptom’u gizler. Yanlış
döngü hâlâ çalışır; boş diziyle toplamın gerçekten 0 olup olmadığı ile bozuk
hesabın 0’a zorlanması ayırt edilemez. Root cause çözülmüş değildir.

### Loglama: doğru anda doğru değeri görmek

Log, hipoteze cevap vermelidir:

```js
function totalMinutesWithTrace(minutes) {
  let total = 0;

  for (let index = 0; index <= minutes.length; index += 1) {
    console.log({ index, length: minutes.length, value: minutes[index], total });
    total += minutes[index];
  }

  return total;
}
```

Nesne biçimi alan adlarını korur. Yalnız `console.log(total)` yazmak hangi turu
ve hangi girdiyi gördüğünüzü belirsiz bırakır. Loglara parola, token veya gereksiz
kişisel veri koymayın. Araştırma bittiğinde geçici logları kaldırın veya ürünün
kalıcı gözlemlenebilirlik sözleşmesine uygun hâle getirin.

### Breakpoint ve debugger

**Breakpoint (durma noktası)** yürütmeyi seçilen satırdan önce durdurur. O anda
scope içindeki değişkenleri ve call stack’i inceleyebilirsiniz. Bu örnekte döngü
gövdesine breakpoint koyup her turda `index`, `total` ve `minutes[index]`
değerlerini gözlersiniz.

Temel kontroller:

- **Step over:** Mevcut satırı çalıştırır, çağrılan fonksiyonun içine girmez.
- **Step into:** Çağrılan fonksiyonun içine girer.
- **Step out:** Mevcut fonksiyonun kalanını tamamlayıp çağırana döner.
- **Resume:** Bir sonraki breakpoint’e kadar devam eder.
- **Call stack:** Buraya hangi fonksiyon çağrılarından gelindiğini gösterir.
- **Scope:** O anda erişilebilen yerel ve dış değişkenleri gösterir.

Koşullu breakpoint yalnız `index === minutes.length` olduğunda durabilir. Logpoint
ise kaynak koda `console.log` eklemeden değer kaydeder. Araç seçimi soruya bağlıdır:
Akışı adım adım anlamak için breakpoint; çok tekrarlı çalışmada belirli durumu
yakalamak için koşullu breakpoint; durmadan gözlemek için logpoint kullanılır.

JavaScript’te `debugger;` ifadesi kullanılabilir bir debugger varsa yürütmeyi o
noktada durdurur; yoksa etkisi olmaz. Kalıcı kodda unutulmaması için inceleme ve
lint sürecinde temizlenmelidir.

### Binary isolation: arama alanını yarıya indirmek

Failure’ın veri mi, dönüşüm mü, hesaplama mı, çıktı mı kaynaklı olduğunu bilmiyorsanız
hattın ortasında bir gözlem noktası seçin. Orta noktaya kadar değer doğruysa ilk
yarı zayıflar, ikinci yarı güçlenir. Değer zaten yanlışsa ilk yarıya odaklanırsınız.

Bu yöntem her durumda tam yarılama sağlayamaz; parçalar birbirine sıkı bağlı
olabilir. Ama “her satıra log koymak” yerine araştırma alanını bilinçli daraltır.
Git’in `bisect` komutu da bilinen iyi ve kötü commit aralığında aynı fikri kullanarak
değişikliği getiren commit’i arar. Bu chapterda komutu uygulamak zorunlu değildir;
zihinsel model önemlidir.

### Düzeltmeyi doğrulamak ve regression riskini kaydetmek

Düzeltme sonrası yalnız `[30]` örneğine bakmayın:

| Girdi | Beklenen | Amaç |
|---|---:|---|
| `[]` | 0 | boş sınır |
| `[30]` | 30 | minimal failing case artık geçiyor |
| `[30, 45, 60]` | 135 | ilk failure tekrar etmiyor |
| `[0, 15]` | 15 | sıfır değeri korunuyor |

**Regression (gerileme)**, daha önce çalışan davranışın değişiklikten sonra
bozulmasıdır. C26’da bu örnekleri otomatik testlere dönüştüreceksiniz. Şimdilik
beklenen ve gerçek sonuçları kaydederek düzeltmenin kanıtını koruyun.

## Engineering Perspective

Debugging’in maliyeti yalnız kod yazma süresi değildir. Yanlış hipotez üzerine
yapılan geniş değişiklikler review yükünü, regression riskini ve ekipte bilgi
belirsizliğini artırır. Küçük reproduction ve tek değişkenli deney, değişiklikten
önce bilgi üretir.

Profesyonel debug kaydı şu alanları taşır:

| Alan | Soru |
|---|---|
| Symptom | Kullanıcı veya sistem ne gözledi? |
| Expected | Sözleşme ne diyordu? |
| Reproduction | Hangi kesin adımlar failure’ı çağırıyor? |
| Minimal case | Hangi kod ve veri gerçekten gerekli? |
| Observations | Ölçülen değerler neler? |
| Hypotheses | En az üç yanlışlanabilir açıklama ne? |
| Experiments | Her hipotezi hangi tek değişiklik sınadı? |
| Root cause | Hangi kod kararı failure zincirini üretti? |
| Fix | Davranışı düzelten en küçük değişiklik ne? |
| Verification | Failure ve komşu davranışlar nasıl doğrulandı? |

Üretim ortamında veri hassasiyetini koruyun. Debugging için gerçek kullanıcı
verisini kopyalamak yerine kişisel bilgiden arındırılmış temsili veri kullanın.
Log seviyesini artırmanın performans ve gizlilik maliyetini C23’teki ödünleşim
düşüncesiyle değerlendirin.

## Real World Examples

### Yalnız belirli chapter’da bozulan ilerleme

Önce chapter kimliği, önceki ilerleme ve tamamlanma bayrağı kaydedilir. Tüm
akademiyi kopyalamak yerine aynı alanları taşıyan tek kayıtla failure yeniden
üretilir. Kimlik değişince failure kayboluyorsa içerik verisi hipotezi güçlenir.

### Tarayıcıda yalnız ikinci tıklamada oluşan sorun

Tekrarlanma adımları “sayfayı aç, düğmeye iki kez bas” olarak yazılır. İlk ve
ikinci tıklama öncesi state karşılaştırılır. İkinci olay dinleyicisinin eklenmesi,
paylaşılan state veya temizlenmeyen değer ayrı hipotezlerdir; aynı anda düzeltilmez.

### Sürümden sonra başlayan regression

Bilinen son çalışan sürüm ve ilk bozuk sürüm belirlenir. Değişiklik aralığı
yarılanarak aynı reproduction her aday sürümde çalıştırılır. İlk bozuk commit
bulunsa bile commit’in tamamı root cause sayılmaz; davranışı değiştiren satır ve
sözleşme kararı ayrıca incelenir.

### Performans belirtisi

“Yavaş” tek başına ölçü değildir. Girdi boyutu, ortam, başlangıç/bitış noktası ve
tekrar sayısı kaydedilir. C23’teki büyüme analizi ile gerçek benchmark ayrımı
korunur; işlevsel correctness ile performans failure’ı birbirine karıştırılmaz.

## Common Mistakes

### Rastgele değişiklik yapmak

Birden fazla satırı aynı anda değiştirir, belirti kaybolunca hangisinin etkili
olduğunu bilemezsiniz. Önce hipotez ve beklenen deney sonucunu yazın.

### İlk fikre âşık olmak

“Kesin API bozuk” gibi erken karar, diğer kanıtları o açıklamaya uydurur. En az
üç hipotez yazıp her birini yanlışlayacak gözlemi önceden belirleyin.

### Yeniden üretmeden düzeltmeye geçmek

Failure’ı çağıran örnek yoksa düzeltmenin işe yaradığını gösteren güvenilir ölçü
de yoktur. Önce failing case’i koruyun.

### Çok fazla log eklemek

Binlerce satır veri, sinyali gürültü içinde kaybeder. Her log tek bir hipotez
sorusuna cevap versin ve tur/kimlik bağlamını taşısın.

### Exception mesajını kök neden sanmak

Mesaj failure’ın gerçekleştiği noktayı gösterebilir; kusurun başladığı yer daha
önce olabilir. Call stack’i ve veri akışını geriye doğru izleyin.

### Symptom kaybolunca işi bitirmek

Varsayılan değer vermek veya exception’ı yutmak ekranı sakinleştirebilir. İlk
failing case, sınırlar ve daha önce çalışan örnekler yeniden doğrulanmadan kök
nedenin çözüldüğü söylenemez.

## Best Practices

- Kodu değiştirmeden önce beklenen, gözlenen ve reproduction adımlarını yazın.
- Aynı failure ölçütünü koruyarak örneği küçültün.
- Gözlemi yorumdan ayrı kaydedin.
- En az üç yanlışlanabilir hipotez kurun.
- Her deneyde bir ana değişkeni değiştirin ve beklenen sonucu önceden yazın.
- Arama alanını veri, çağrı zinciri, kod bölümü veya sürüm aralığı üzerinden daraltın.
- Log ve breakpoint’i cevaplanacak soruya göre seçin.
- En küçük düzeltmeyi uygulayın; gereksiz refactoring’i ayrı değişikliğe bırakın.
- İlk failure, boundary ve komşu başarılı davranışları tekrar çalıştırın.
- Debug günlüğünü C26 için regression test girdisine dönüştürülebilir biçimde saklayın.

## Hands-on Exercise

### Birlikte yapalım

Şu fonksiyonu inceleyin:

```js
function findLongestTitle(titles) {
  let longest = "";

  for (const title of titles) {
    if (title.length < longest.length) {
      longest = title;
    }
  }

  return longest;
}
```

`["Koşullar", "Fonksiyonlar", "Döngüler"]` için beklenen `"Fonksiyonlar"`,
gözlenen `""`dır. Kod exception üretmez; C24’e göre logic failure vardır.

Önce hipotez üretin. “Karşılaştırma yönü yanlış” tek hipotez olsun; başlangıç
değeri ve döngünün çalışmaması ayrı hipotezlerdir. Her biri için ölçülecek değeri
ve onu eleyecek sonucu yazın.

### Şimdi sen dene

Yukarıdaki failure için:

1. Tek öğeli minimal failing case oluşturun.
2. `longest`, `title` ve koşul sonucunu tabloya yazın.
3. En az üç hipotez oluşturun.
4. Her hipotez için tek değişkenli deney tasarlayın.
5. Root cause cümlesini neden–mekanizma–symptom yapısıyla yazın.

Çözümü görmeden önce düzeltme yapmayın.

### Hata avı

Bir geliştirici sorunu şöyle “çözüyor”:

```js
function findLongestTitle(titles) {
  if (titles.length > 0) {
    return titles[0];
  }

  return "";
}
```

İlk tek öğeli failing case artık geçer. Bu neden root cause düzeltmesi sayılmaz?
En az iki karşı örnek üretin. Minimal case’in tek başına yeterli doğrulama olmadığını
ve komşu davranışların neden gerekli olduğunu açıklayın.

### Kademeli ipuçları

1. **Soru:** Fonksiyon birden fazla başlıkta gerçekten karşılaştırma yapıyor mu?
2. **Küçük yön:** İki farklı uzunlukta başlık kullanın.
3. **Kavramsal açıklama:** Failing case kusuru görünür yapar; düzeltme doğrulaması
   sözleşmenin temsil edici diğer örneklerini de gerektirir.
4. **Kısmi yapı:** `if (title.length ___ longest.length)` boşluğunu gözlemle doldurun.
5. **Gerekçeli kontrol:** Boş, tek öğeli, ilk uzun, son uzun ve eşit uzunluklu
   dizilerde beklenen davranışı karşılaştırın.

### Bağımsız uygulama

Size verilen `calculateAverage` veya kendi küçük projenizdeki gerçek bir failure
için debugging dossier hazırlayın. En az üç hipotezden ikisini kanıtla eleyin;
kalanı root cause ilan etmeden önce minimal düzeltme ve komşu davranış doğrulaması
yapın. Günlüğe zaman sırasıyla ne bildiğinizi ve hangi kararın değiştiğini yazın.

### Lab — Symptom’dan root cause’a

`V01-C25-L01` kapsamında:

1. Failure’ı güvenli biçimde yeniden üretin.
2. Minimal failing case oluşturun.
3. En az üç hipotez ve kontrollü deney yazın.
4. Çalışma izi, log veya breakpoint kanıtı üretin.
5. Root cause’u kod kararı ve failure mekanizmasıyla açıklayın.
6. En küçük fix’i uygulayıp regression risklerini kaydedin.

### Gerçek proje bağlantısı

C24’te `V01-CP01` için oluşturduğunuz error contract içinden bir invalid veya
boundary senaryosu seçin. Bilerek eklenmiş küçük bir kusur üzerinden reproduction,
minimal case, hipotez günlüğü ve fix verification üretin. C26’da bu failing case
kalıcı bir regression testine dönüşecektir.

## Reflection Questions

1. İlk hipoteziniz hangi gözlemle zayıfladı veya değişti?
2. Minimal case oluştururken çıkarmaya çekindiğiniz fakat gereksiz olduğu anlaşılan neydi?
3. Log mu breakpoint mi daha yararlı oldu; hangi soruya cevap verdi?
4. Symptom’u gizleyen fakat root cause’u çözmeyen bir düzeltme örneği verebilir misiniz?
5. Bir sonraki debugging çalışmanızda ilk beş dakikayı nasıl kullanacaksınız?

## Chapter Summary

C25’te debugging’i rastgele kod değiştirmekten çıkarıp kanıt üreten bir araştırma
sürecine dönüştürdünüz. Failure’ı aynı koşullarda yeniden ürettiniz, gereksiz kod
ve veriyi azaltarak minimal failing case kurdunuz. Gözlemi yorumdan ayırdınız;
en az üç yanlışlanabilir hipotezi tek değişkenli deneylerle sınadınız.

Log, breakpoint, conditional breakpoint, call stack ve scope araçlarının ancak
doğru bir soruyla değerli olduğunu gördünüz. Root cause, trigger ve symptom’u
ayırdınız. En küçük düzeltmeden sonra ilk failure’ı, sınırları ve komşu başarılı
davranışları yeniden doğruladınız.

Artık “şunu değiştirdim ve düzeldi” yerine “bu failure şu koşullarda yeniden
üretildi; bu hipotezler şu deneylerle elendi; kök neden şu mekanizmaydı; düzeltme
şu örneklerle doğrulandı” diyebilirsiniz.

## Key Takeaways

- Yeniden üretemediğiniz failure için düzeltme ölçütünüz zayıftır.
- Minimal failing case, en kısa kod değil; aynı failure’ı koruyan en küçük
  açıklanabilir örnektir.
- Gözlem ölçülür; yorum açıklama adayıdır.
- İyi hipotez yanlışlanabilir ve ölçülebilir sonuç öngörür.
- Tek değişkenli deney hangi değişikliğin bilgi ürettiğini görünür tutar.
- Breakpoint ve log, hipotezin yerine geçmez; hipotez için kanıt toplar.
- Exception’ın oluştuğu satır root cause’un başladığı satır olmak zorunda değildir.
- Symptom’un kaybolması, kusurun giderildiğini tek başına kanıtlamaz.
- Fix sonrasında failing case ve daha önce çalışan komşu davranışlar doğrulanmalıdır.
- C26 bu manuel kanıtları otomatik ve tekrar çalıştırılabilir testlere dönüştürecektir.

## Further Reading

- Chrome DevTools’ta line breakpoint, conditional breakpoint ve logpoint’i aynı
  küçük örnek üzerinde karşılaştırın.
- Bir call stack’i aşağıdan yukarı okuyarak failure’ın oluştuğu ve verinin ilk
  bozulduğu noktaları ayırın.
- Git bisect’in iyi/kötü commit aralığını nasıl daralttığını C23’teki binary
  search ile ilişkilendirin.
- C24 lab kaydınızı C25 dossier şablonuna taşıyın ve eksik kanıtları işaretleyin.

## References

- [Chrome DevTools — Pause your code with breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints)
- [Chrome DevTools — JavaScript debugging reference](https://developer.chrome.com/docs/devtools/javascript/reference)
- [MDN — debugger statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- [Git — git bisect documentation](https://git-scm.com/docs/git-bisect)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
