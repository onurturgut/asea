---
document_type: "chapter"
chapter_id: "V01-C09"
title: "Boolean Mantığı ve Doğruluk — Kararların Temeli"
volume: "01"
module: "V01-M03"
chapter: "09"
slug: "boolean-mantigi-ve-dogruluk"
difficulty: "Beginner"
estimated_time: "8-10 saat"
status: "Draft"
version: "0.1.0"
prerequisites:
  - "V01-C07"
learning_objectives:
  - "V01-LO013"
  - "V01-LO014"
concept_ids:
  - "ASEA-CON-000032"
  - "ASEA-CON-000033"
  - "ASEA-CON-000034"
  - "ASEA-CON-000035"
production_packet: "V01-C09-CPP-001"
---

# Boolean Mantığı ve Doğruluk — Kararların Temeli

## Learning Objectives

Bu bölümü tamamladığında yalnızca `true` ve `false` yazmayı değil, bir programın karar vermeden önce kullandığı mantığı incelemeyi öğreneceksin. Hedef, operatörleri ezberlemek değildir. Hedef; bir koşulu küçük parçalara ayırmak, her parçanın doğruluk değerini görmek, bileşik bir ifadenin sonucunu kâğıt üzerinde tahmin etmek ve yazdığın kararın gerçekten gereksinimi temsil edip etmediğini kanıtlayabilmektir.

Bu bölümün sonunda şunları yapabileceksin:

- Bir cümlenin mantıksal değer (Boolean Value) üretip üretmediğini ayırt edebileceksin.
- Bir karşılaştırmanın hangi girdilerde doğru, hangi girdilerde yanlış olduğunu açıklayabileceksin.
- Mantıksal VE (Logical AND), mantıksal VEYA (Logical OR) ve mantıksal DEĞİL (Logical NOT) işlemlerini doğal dildeki gereksinimlerle eşleştirebileceksin.
- Bir, iki veya üç bağımsız girdi için doğruluk tablosu (Truth Table) oluşturabileceksin.
- Bileşik bir mantıksal ifadeyi ara sütunlara ayırarak sonucu adım adım hesaplayabileceksin.
- İki farklı ifadenin mantıksal eşdeğerlik (Logical Equivalence) taşıyıp taşımadığını doğruluk tablosuyla sınayabileceksin.
- De Morgan kurallarını kullanarak olumsuzlanmış bileşik ifadeleri daha okunabilir biçimde yeniden yazabileceksin.
- JavaScript'te doğru kabul edilen (Truthy) ve yanlış kabul edilen (Falsy) değerlerin mantıksal değerlerden farkını açıklayabileceksin.
- `&&` ve `||` operatörlerinin her zaman `true` veya `false` döndürmediğini, işlenenlerden birini döndürdüğünü gösterebileceksin.
- Kısa devre değerlendirme (Short-Circuit Evaluation) sırasında hangi ifadenin çalıştırılmayacağını tahmin edebileceksin.
- Karmaşık karar ifadelerini adlandırılmış yüklemlere ayırarak okunabilirlik ve test edilebilirlik sağlayabileceksin.
- Yapay zekâ tarafından üretilen bir koşulu gereksinim, doğruluk tablosu ve sınır durumları üzerinden denetleyebileceksin.

Özellikle iki ölçülebilir çıktı beklenir. `V01-LO013` için bağımsız girdileri eksiksiz sıralayan ve ara sonuçları gösteren bir doğruluk tablosu oluşturmalısın. `V01-LO014` için ise bileşik bir ifadeyi davranışı değiştirmeden daha okunabilir bir eşdeğer ifadeye dönüştürmeli, eşdeğerliği örneklerle değil bütün olası mantıksal girdilerle doğrulamalısın.

## Prerequisites

Bu bölüm, `V01-C07` bölümündeki temel ifade ve veri kullanımını bildiğini varsayar. Bir değişkene değer atayabilmeli, basit JavaScript ifadelerini okuyabilmeli ve `console.log` ile gözlem yapabilmelisin. Aşağıdaki kısa tanılamayı notlarına bakmadan tamamlamayı dene:

```js
const age = 20;
const minimumAge = 18;

console.log(age >= minimumAge);
console.log(age === minimumAge);
console.log(age !== minimumAge);
```

Çalıştırmadan önce üç çıktıyı sırayla tahmin et. Sonra kodu çalıştır ve tahmininle karşılaştır. Beklenen sonuçlar `true`, `false`, `true` biçimindedir. Sonuçlardan biri şaşırtıcı geldiyse karşılaştırma operatörlerini kısa süreliğine tekrar et. Burada önemli olan sembolü hatırlamak değil, her karşılaştırmanın tek bir mantıksal sonuç ürettiğini görmektir.

Şu bilgileri de kullanacağız:

- Bir ifadenin değeri vardır; bu değer başka bir ifadede kullanılabilir.
- `===`, `!==`, `<`, `>`, `<=` ve `>=` karşılaştırma operatörleridir.
- JavaScript'te kod soldan sağa okunuyor gibi görünse de operatör önceliği değerlendirme sırasını etkileyebilir.
- Bir programı anlamanın güvenilir yolu yalnızca çıktıya bakmak değil, ara değerleri izlemektir.

Henüz koşullu dallanmayı ayrıntılı bilmen gerekmiyor. Bu bölüm kararın kendisini kurar; bir kararın programa hangi yolu seçtireceği C10'da ele alınacaktır. Böylece önce “hangi koşul doğrudur?” sorusunu sağlamlaştıracak, sonra bu koşulun program akışını nasıl değiştirdiğini öğreneceksin.

## Estimated Study Time

Bu bölüm için önerilen toplam çalışma süresi 8–10 saattir. Okuma hızına göre süre değişebilir; amaç hız değil, tahmin edebilme ve kanıtlama becerisidir.

| Çalışma | Önerilen süre |
|---|---:|
| Ana dersi dikkatli okuma ve not çıkarma | 3–4 saat |
| Doğruluk tablolarını elle oluşturma | 60–90 dakika |
| Kod örneklerini tahmin etme ve çalıştırma | 60–90 dakika |
| Bölüm sonu alıştırmaları | 90–120 dakika |
| Laboratuvar ve öz değerlendirme | 90–120 dakika |

Çalışmayı iki veya üç güne bölmek yararlıdır. İlk gün temel mantık ve doğruluk tablolarına, ikinci gün JavaScript davranışlarına, üçüncü gün uygulama ve laboratuvara odaklanabilirsin. Her oturumun başında önceki oturumdan üç kavramı notlarına bakmadan açıklamak aktif hatırlamayı güçlendirir.

Bir konuyu “okudum” demek, onu kullanabildiğin anlamına gelmez. Bu bölüm için yeterlilik ölçütü şudur: Yeni bir gereksinim verildiğinde değişkenleri belirleyebiliyor, doğru mantıksal operatörü seçebiliyor, doğruluk tablosunu oluşturabiliyor ve sonucunu başka bir kişiye gerekçesiyle anlatabiliyorsan ilerlemeye hazırsın.

## Introduction

Bir konser alanının girişinde çalıştığını düşün. Bir ziyaretçinin içeri girebilmesi için geçerli bileti bulunmalı ve güvenlik kontrolünden geçmiş olmalıdır. Cümlede iki ayrı gerçek vardır: “bilet geçerli” ve “güvenlik kontrolü tamamlandı.” Giriş kararı ancak ikisi de doğruysa doğrudur. İnsanlar bu ilişkiyi günlük dilde kolayca kurar. Bilgisayar ise “ve” sözcüğünün niyetini sezmez; açık, tutarlı ve değerlendirilebilir bir ifadeye ihtiyaç duyar.

Şimdi bir başka gereksinim düşün: Kullanıcı sisteme e-posta adresiyle veya doğrulanmış telefon numarasıyla giriş yapabilsin. Burada iki yöntemin aynı anda bulunması gerekmez; en az biri yeterlidir. İlk senaryoda bütün koşulların sağlanmasını, ikinci senaryoda seçeneklerden en az birinin sağlanmasını istiyoruz. Bu iki cümleyi aynı operatörle kodlamak ciddi bir davranış hatasına yol açar.

Programlama, yalnızca bilgisayara yapılacak işlemleri yazmak değildir. Gerçek dünyadaki belirsiz cümleleri kesin kurallara çevirmektir. “Uygun kullanıcıya indirim ver”, “riskli işlemi durdur”, “dosya hazırsa gönder”, “özellik etkin ve kullanıcı yetkiliyse göster” gibi gereksinimlerin her biri mantıksal bir modele dönüşür. Model yanlışsa sözdizimi kusursuz olsa bile program yanlış karar verir.

Mantıksal değer yalnızca iki olasılık taşır: `true` ve `false`. Bu küçük değer alanı ilk bakışta basit görünür. Fakat büyük sistemlerde erişim denetimi, form doğrulama, özellik bayrakları, test beklentileri, arama filtreleri, hata yönetimi ve iş kuralları bu iki değerin doğru birleştirilmesine dayanır. Bir banka transferinin onaylanması veya reddedilmesi de sonuçta bir dizi küçük önermenin birleşimidir.

Bu bölümde mantığı matematik dersi gibi soyut bırakmayacağız. Önce günlük dildeki kararları parçalayacak, sonra tabloyla bütün olasılıkları görecek, ardından JavaScript'in gerçek davranışını inceleyeceğiz. Amaç, bir operatör gördüğünde yalnızca adını söylemek değil; hangi girdinin sonucu neden belirlediğini açıklamaktır.

Bir mühendis için “bu koşul çalışıyor” cümlesi yeterli değildir. Hangi girdilerde çalıştığı, hangi sınır durumda bozulduğu ve gereksinim değiştiğinde nasıl güncelleneceği sorulmalıdır. Doğruluk tablosu bu nedenle okul alıştırmasından fazlasıdır: küçük bir karar uzayını eksiksiz inceleyen test tasarım aracıdır.

Bu bölüm boyunca üç alışkanlık geliştireceğiz. Birincisi, büyük ifadeyi adlandırılmış küçük sorulara ayırmak. İkincisi, kodu çalıştırmadan önce sonucu tahmin etmek. Üçüncüsü, birkaç seçilmiş örneğe güvenmek yerine mümkün olduğunda bütün mantıksal durumları incelemek. Bu alışkanlıklar C10'daki koşullu dallanmanın ve ilerideki güvenilir program tasarımının temelidir.

## Core Concepts

### 1. Mantıksal değer nedir?

Mantıksal değer, yalnızca doğru veya yanlış olabilen bir değerdir. JavaScript'te bu değerler küçük harfle `true` ve `false` yazılır. Bunlar metin değildir. `"true"` bir metin, `true` ise mantıksal değerdir. Aradaki fark önemlidir; çünkü metin üzerinde yapılan işlemlerle mantıksal değer üzerinde yapılan işlemler aynı değildir.

```js
const isCourseOpen = true;
const statusText = "true";

console.log(typeof isCourseOpen); // boolean
console.log(typeof statusText);   // string
console.log(isCourseOpen === statusText); // false
```

`isCourseOpen` adı bir soruya cevap verir: “Kurs açık mı?” Değişken adlarının `is`, `has`, `can` veya `should` gibi soru çağrıştıran sözcüklerle başlaması zorunlu değildir, fakat mantıksal amacı görünür kılar. `isVerified`, “doğrulanmış mı?”; `hasPermission`, “izni var mı?”; `canPublish`, “yayımlayabilir mi?” sorularına cevap verir.

Mantıksal değer ile gerçek dünya gerçeğini karıştırmamak gerekir. Programdaki `isAdult = true`, evrensel bir gerçeği değil, belirli bir anda belirli kurallara göre hesaplanan model sonucunu temsil eder. Yaş sınırı ülkeye veya işleme göre değişirse model de değişir. Kodun doğru olması, gereksinimin doğru anlaşılmasına bağlıdır.

### 2. Önerme ve yüklem

Doğru veya yanlış olduğu söylenebilen bildirim cümlesine önerme (Proposition) denir. “Kullanıcının yaşı 18 veya daha büyüktür” bir önermedir. “Yaşın kaç?” bir soru olduğu için önerme değildir. “Lütfen giriş yap” bir komuttur; o da önerme değildir.

Programda girdiye göre mantıksal sonuç üreten ifadeye yüklem (Predicate) diyebiliriz. `age >= 18` ifadesi, `age` değeri verildiğinde doğru veya yanlış üretir. Aynı ifade 20 için doğru, 15 için yanlıştır. Bu nedenle tek başına sabit bir gerçek değil, girdiye bağlı bir karar kuralıdır.

```js
const age = 20;
const isAdult = age >= 18;

console.log(isAdult); // true
```

Burada üç katman vardır: `age` ham veridir; `age >= 18` karşılaştırmadır; `isAdult` karşılaştırmanın anlamlı adla saklanan sonucudur. Bu ayrım karmaşık koşulları okumayı kolaylaştırır.

### 3. Karşılaştırmalar mantıksal değer üretir

Karşılaştırma iki değerin belirli bir ilişkiyi taşıyıp taşımadığını sorar. Sonuç her zaman `true` veya `false` olur.

| Operatör | Sorduğu soru | Örnek | Sonuç |
|---|---|---|---|
| `===` | Tür ve değer eşit mi? | `5 === 5` | `true` |
| `!==` | Tür veya değer farklı mı? | `5 !== "5"` | `true` |
| `>` | Sol taraf daha büyük mü? | `7 > 3` | `true` |
| `<` | Sol taraf daha küçük mü? | `7 < 3` | `false` |
| `>=` | Büyük veya eşit mi? | `18 >= 18` | `true` |
| `<=` | Küçük veya eşit mi? | `20 <= 18` | `false` |

Sınır sözcüklerine dikkat et. “18 yaşından büyük” `age > 18`, “18 yaşında veya daha büyük” ise `age >= 18` demektir. Bir eşittir işaretinin unutulması tam sınır değerinde hataya yol açar. Bu nedenle testlerde sınırın altı, sınırın kendisi ve sınırın üstü ayrı değerlendirilir.

```js
const minimumAge = 18;

console.log(17 >= minimumAge); // false: sınırın altı
console.log(18 >= minimumAge); // true: sınır
console.log(19 >= minimumAge); // true: sınırın üstü
```

JavaScript'te başlangıç aşamasında eşitlik için `===`, eşitsizlik için `!==` kullanmak güvenli bir varsayılandır. `==` tür dönüştürme kuralları nedeniyle beklenmedik eşitlikler oluşturabilir. Bu bölümün amacı tür dönüşümünü derinleştirmek değildir; karar mantığını açık tutmak için katı eşitliği kullanacağız.

### 4. Mantıksal DEĞİL: sonucu tersine çevirmek

`!` operatörü bir değerin mantıksal anlamını tersine çevirir. Doğru, yanlış; yanlış, doğru olur.

| A | `!A` |
|---|---|
| `false` | `true` |
| `true` | `false` |

```js
const isBlocked = false;
const canEnter = !isBlocked;

console.log(canEnter); // true
```

Olumsuzluk işaretinin hangi ifadeyi kapsadığı önemlidir. `!isReady && hasTicket` ifadesinde yalnızca `isReady` ters çevrilir. Bütün bileşik ifadeyi ters çevirmek için `!(isReady && hasTicket)` yazılır. Parantez yalnızca işlem sırasını değil, niyeti de görünür kılar.

Çift olumsuzluk `!!value`, bir değeri açık bir mantıksal değere dönüştürmek için kullanılır. Fakat yeni başlayan kodunda `Boolean(value)` çoğu zaman daha okunabilirdir. İkisi aynı genel amaca hizmet eder:

```js
console.log(Boolean("ASEA")); // true
console.log(!!"ASEA");       // true
console.log(Boolean(""));     // false
```

### 5. Mantıksal VE: bütün koşullar gerekli

`A && B`, yalnızca A ve B birlikte doğru olduğunda doğrudur. Doğal dilde “ve”, “ayrıca”, “her ikisi”, “bütün koşullar” gibi ifadeler bu ilişkiye işaret edebilir.

| A | B | `A && B` |
|---|---|---|
| `false` | `false` | `false` |
| `false` | `true` | `false` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

```js
const hasValidTicket = true;
const passedSecurity = true;
const canEnterConcert = hasValidTicket && passedSecurity;

console.log(canEnterConcert); // true
```

VE zincirinde bir yanlış değer bütün sonucu yanlış yapmak için yeterlidir. Üç koşul varsa ancak üçü de doğru olduğunda sonuç doğrudur:

```js
const isEmailVerified = true;
const acceptedTerms = true;
const isAccountActive = false;

const canPublish =
  isEmailVerified && acceptedTerms && isAccountActive;

console.log(canPublish); // false
```

Burada sorulacak mühendislik sorusu “neden false çıktı?”dır. Ara değerleri adlandırdığımız için cevap görünür: hesap etkin değildir. Tek satırda karmaşık çağrılar bulunsaydı hata kaynağını bulmak daha zor olurdu.

### 6. Mantıksal VEYA: en az bir koşul yeterli

`A || B`, A ve B'nin ikisi de yanlış olduğunda yanlış; diğer bütün durumlarda doğrudur. Programlamadaki VEYA çoğunlukla kapsayıcıdır: ikisi birden doğruysa sonuç yine doğrudur.

| A | B | `A || B` |
|---|---|---|
| `false` | `false` | `false` |
| `false` | `true` | `true` |
| `true` | `false` | `true` |
| `true` | `true` | `true` |

```js
const hasVerifiedEmail = false;
const hasVerifiedPhone = true;
const canRecoverAccount = hasVerifiedEmail || hasVerifiedPhone;

console.log(canRecoverAccount); // true
```

Günlük dildeki “ya o ya bu” bazen yalnızca birinin doğru olmasını anlatır. Buna dışlayıcı VEYA (Exclusive OR) denir. JavaScript'in `||` operatörü dışlayıcı değildir. Tam olarak bir seçeneğin doğru olması gerekiyorsa gereksinimi ayrıca modellemelisin:

```js
const selectedCard = true;
const selectedTransfer = false;
const selectedExactlyOne = selectedCard !== selectedTransfer;

console.log(selectedExactlyOne); // true
```

Bu örnek yalnızca iki mantıksal girdi için uygundur. Önemli ders, doğal dilde “veya” gördüğünde hemen `||` yazmamak; “en az biri mi, yalnızca biri mi?” diye sormaktır.

### 7. Doğruluk tablosu nasıl kurulur?

Doğruluk tablosu, bir mantıksal ifadenin mümkün olan bütün girdi birleşimlerindeki sonucunu gösterir. Bir bağımsız mantıksal girdi iki değer alır. `n` bağımsız girdi için `2^n` satır gerekir. İki girdi dört, üç girdi sekiz, dört girdi on altı satır üretir.

İki değişkenli tabloyu sistematik kurmanın bir yolu şudur:

1. A sütununda iki yanlış, ardından iki doğru yaz.
2. B sütununda yanlış ve doğruyu sırayla tekrar et.
3. İfadeyi her satır için ayrı değerlendir.

| Satır | A | B |
|---:|---|---|
| 1 | `false` | `false` |
| 2 | `false` | `true` |
| 3 | `true` | `false` |
| 4 | `true` | `true` |

Üç değişkende A dört satırda, B iki satırda, C her satırda değer değiştirir. Bu düzen hiçbir birleşimi atlamamanı sağlar.

| A | B | C |
|---|---|---|
| `false` | `false` | `false` |
| `false` | `false` | `true` |
| `false` | `true` | `false` |
| `false` | `true` | `true` |
| `true` | `false` | `false` |
| `true` | `false` | `true` |
| `true` | `true` | `false` |
| `true` | `true` | `true` |

Karmaşık ifadeyi zihinden tek adımda çözmeye çalışma. Her alt ifade için ara sütun aç. Örneğin `(A || B) && !C` için önce `A || B`, sonra `!C`, en son bunların VE sonucunu hesapla.

| A | B | C | `A || B` | `!C` | `(A || B) && !C` |
|---|---|---|---|---|---|
| F | F | F | F | T | F |
| F | F | T | F | F | F |
| F | T | F | T | T | T |
| F | T | T | T | F | F |
| T | F | F | T | T | T |
| T | F | T | T | F | F |
| T | T | F | T | T | T |
| T | T | T | T | F | F |

Ara sütunlar yalnızca hesap kolaylığı sağlamaz; yanlış sonucun hangi alt ifadeden geldiğini gösterir. Bu, programdaki ara değişkenlerin hata ayıklama değerine benzer.

### 8. Operatör önceliği ve parantez

JavaScript'te `!`, `&&` operatöründen; `&&` ise `||` operatöründen daha yüksek önceliğe sahiptir. Bu nedenle `!A || B && C`, `(!A) || (B && C)` olarak değerlendirilir. Ancak bir kuralı biliyor olmak, okuyucunun her seferinde zihinsel çözüm yapmasını istemeyi haklı çıkarmaz.

```js
const canProceed = isAdmin || isActive && hasSubscription;
```

Bu ifade teknik olarak `isAdmin || (isActive && hasSubscription)` anlamına gelir. Gereksinim buysa parantezi açıkça yazmak inceleme süresini azaltır:

```js
const canProceed = isAdmin || (isActive && hasSubscription);
```

Eğer amaç `(isAdmin || isActive) && hasSubscription` ise ilk kod yanlıştır. İki ifade yalnızca bazı girdilerde farklı sonuç verir; rastgele iki test ikisini eşdeğer sanmana neden olabilir. Doğruluk tablosu farkı eksiksiz ortaya çıkarır.

Parantezi bir süs olarak değil, gereksinim sınırı olarak düşün. Hangi koşulların birlikte grup oluşturduğunu gösterir. Uzun ifadelerde paranteze ek olarak ara yüklemler kullanmak daha güçlüdür.

### 9. Mantıksal eşdeğerlik

İki ifade bütün olası girdiler için aynı sonucu üretiyorsa mantıksal olarak eşdeğerdir. Birkaç örnekte aynı sonucu vermeleri yeterli değildir. İki değişkenli ifadeler için dört satırın, üç değişkenli ifadeler için sekiz satırın tümü uyuşmalıdır.

Örneğin `!(A && B)` ile `!A || !B` eşdeğerdir:

| A | B | `A && B` | `!(A && B)` | `!A` | `!B` | `!A || !B` |
|---|---|---|---|---|---|---|
| F | F | F | T | T | T | T |
| F | T | F | T | T | F | T |
| T | F | F | T | F | T | T |
| T | T | T | F | F | F | F |

Son iki ilgili sütun aynı olduğu için eşdeğerlik kanıtlanır. Bu dönüşüm, “A ve B'nin ikisinin birlikte doğru olmaması” ifadesini “A yanlış veya B yanlış” biçiminde okumamızı sağlar.

### 10. De Morgan kuralları

De Morgan kuralları, bileşik bir ifadenin olumsuzluğunu bileşenlere dağıtırken operatörün değişmesi gerektiğini söyler:

- `!(A && B)` eşdeğerdir `!A || !B`.
- `!(A || B)` eşdeğerdir `!A && !B`.

Sezgisel olarak bir sınıfa girmek için hem kart hem parola gerekiyorsa “giriş koşulu sağlanmadı” demek, “kart yok veya parola yanlış” demektir. Alternatif iki kurtarma yönteminden en az biri yeterliyse “hiçbir kurtarma yöntemi yok” demek, “e-posta doğrulanmamış ve telefon doğrulanmamış” demektir.

Yaygın hata, olumsuzluğu dağıtırken operatörü değiştirmemektir. `!(A && B)` ifadesi `!A && !B` değildir. İkinci ifade yalnızca ikisinin de yanlış olduğu durumda doğrudur; ilk ifade ise ikisi birden doğru olmadığı sürece doğrudur. Doğruluk tablosu bu farkı görünür kılar.

De Morgan dönüşümü her zaman daha okunabilir sonuç vermez. `!(isOpen && isVerified)` bazı bağlamlarda `!isOpen || !isVerified` biçiminden daha anlaşılır olabilir. Ama değişkenlerin olumlu adları, olumsuzluk sayısı ve iş kuralının doğal dili birlikte değerlendirilmelidir. Amaç matematiksel gösteriş değil, aynı davranışı daha düşük okuma maliyetiyle ifade etmektir.

### 11. Doğru ve yanlış kabul edilen değerler

JavaScript bir mantıksal bağlamda yalnızca `true` ve `false` ile karşılaşmaz. Başka türde değerleri de `ToBoolean` adlı kurala göre doğru veya yanlış kabul eder. Yanlış kabul edilen temel değerler şunlardır:

- `false`
- `0` ve `-0`
- `0n`
- boş metin `""`
- `null`
- `undefined`
- `NaN`

Bunların dışındaki değerlerin büyük bölümü doğru kabul edilir. Özellikle `"false"` boş olmayan bir metin olduğu için doğrudur; boş dizi `[]` ve boş nesne `{}` de nesne oldukları için doğrudur.

```js
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean("false"));   // true
console.log(Boolean("0"));       // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

Bu davranış kullanışlıdır fakat veri doğrulamanın yerini tutmaz. `if (username)` benzeri bir kontrol, yalnızca değerin mantıksal dönüşümünü sınar; kullanıcının adının geçerli biçimde olup olmadığını kanıtlamaz. Ayrıca `0` bazı alanlarda geçerli bir değer olabilir. Stok adedi sıfır olduğunda “veri yok” demekle “stok sıfır” demek farklıdır.

### 12. `&&` ve `||` her zaman mantıksal değer döndürmez

JavaScript'te `&&` ilk yanlış kabul edilen işleneni bulduğunda onu döndürür; hiç bulamazsa son işleneni döndürür. `||` ise ilk doğru kabul edilen işleneni döndürür; hiç bulamazsa son işleneni döndürür.

```js
console.log("ASEA" && 42); // 42
console.log(0 && 42);      // 0
console.log("" || "Misafir"); // "Misafir"
console.log("Onur" || "Misafir"); // "Onur"
```

Bu sonuçlar `true` ve `false` değildir. Operatörler karar verirken mantıksal dönüşüm kullanır, fakat seçtikleri özgün değeri döndürür. Bir değişkenin mutlaka mantıksal değer olmasını istiyorsan sonucu açıkça dönüştür:

```js
const hasDisplayName = Boolean(displayName);
```

`||` ile varsayılan değer seçerken geçerli yanlış değerleri kaybetme riski vardır:

```js
const configuredRetryCount = 0;
const retryCount = configuredRetryCount || 3;

console.log(retryCount); // 3; oysa 0 bilinçli bir ayar olabilir
```

Bu tür durumda “yalnızca null veya undefined ise varsayılan kullan” anlamındaki `??` operatörü daha uygun olabilir. `??` bu bölümün ana konusu değildir; burada alınacak ders, operatörü kısalığı için değil veri anlamına uygun olduğu için seçmektir.

### 13. Kısa devre değerlendirme

`A && B` ifadesinde A yanlış kabul edilirse sonuç zaten belirlenmiştir; B değerlendirilmez. `A || B` ifadesinde A doğru kabul edilirse sonuç belirlenmiştir; B değerlendirilmez. Buna kısa devre değerlendirme denir.

```js
function reportCheck() {
  console.log("İkinci ifade değerlendirildi.");
  return true;
}

console.log(false && reportCheck());
// reportCheck çalışmaz.

console.log(true || reportCheck());
// reportCheck yine çalışmaz.
```

Bu davranış gereksiz veya güvenli olmayan bir işlemi önleyebilir:

```js
const user = null;
const hasName = user !== null && user.name.length > 0;

console.log(hasName); // false; sağ taraf çalışmadığı için hata oluşmaz
```

Fakat yan etki taşıyan işlemleri mantıksal operatörlerin içine gizlemek okunabilirliği azaltır. Bir işlevin çağrılıp çağrılmadığı programın durumunu değiştiriyorsa okuyucu değerlendirme sırasını zihninde canlandırmak zorunda kalır. Başlangıçta kısa devreyi anlamalı, fakat onu kodu aşırı kısaltmak için kullanmamalısın.

### 14. Adlandırılmış yüklemler

Uzun ifadeyi küçük, anlamlı sorulara ayırmak hata ayıklamayı ve kod incelemeyi kolaylaştırır.

```js
const isOldEnough = age >= 18;
const hasVerifiedIdentity = identityStatus === "verified";
const isAccountAllowed = accountStatus !== "blocked";

const canAccessService =
  isOldEnough && hasVerifiedIdentity && isAccountAllowed;
```

Bu sürüm, tek satırlık eşdeğerinden daha uzundur; fakat her kural bağımsız görülebilir. Bir test başarısız olduğunda hangi önermenin yanlış olduğu kolayca raporlanır. Gereksinim değiştiğinde ilgili kural tek yerde güncellenir.

Adlandırma, gerçeği olduğundan iyi gösteremez. `isValid` gibi geniş ad, hangi ölçüte göre geçerli olduğunu gizleyebilir. `hasValidEmailFormat`, `isWithinUploadLimit` veya `hasAcceptedCurrentTerms` daha bilgi vericidir. Bir yüklemin adı mümkünse “evet/hayır” sorusu gibi okunmalıdır.

## Engineering Perspective

### Mantık, gereksinimin çalıştırılabilir modelidir

Bir şirket ortamında koşul çoğu zaman geliştiricinin hayalinden değil, ürün kuralından gelir. “Kurumsal müşteri veya yıllık plana sahip doğrulanmış kullanıcı erken erişim alır” cümlesi belirsizdir. Doğrulanmış olma şartı yalnızca yıllık plan kullanıcısına mı, iki gruba da mı uygulanıyor? İki olası model vardır:

```js
const modelA = isEnterprise || (hasAnnualPlan && isVerified);
const modelB = (isEnterprise || hasAnnualPlan) && isVerified;
```

Bu iki model aynı değildir. Mühendislik görevi, birini tahmin ederek seçmek değil, ürün sahibine örnek durumlar sormaktır. “Doğrulanmamış kurumsal müşteri erken erişim alır mı?” sorusunun cevabı ayrımı netleştirir. Mantıksal tablo, belirsiz doğal dili konuşulabilir örneklere çevirir.

### Doğruluk tablosu bir test tasarım aracıdır

İki veya üç bağımsız mantıksal girdi olduğunda bütün birleşimleri test etmek ucuzdur. Üç girdi yalnızca sekiz durumdur. Bir erişim kuralında yalnızca “her şey doğru” ve “her şey yanlış” örneklerini sınamak, karışık durumları kaçırır. Oysa hatalar çoğu zaman tam bu karışık satırlarda bulunur.

Örneğin `isOwner || isEditor && isPublished` ifadesini test ederken şu sorular gerekir: sahip ama yayımlanmamış içerik, editör ve yayımlanmış içerik, editör ama taslak içerik, hiçbir role sahip olmayan kullanıcı. Gereksinimin gruplaması farklıysa test bunu ortaya çıkarır.

Doğruluk tablosu değişken sayısı büyüdükçe üstel büyür. On girdi 1.024 satır üretir. Bu noktada yalnız tabloya dayanmak pratik değildir. Kuralları alt bileşenlere ayırmak, risk temelli test seçmek, sınırları incelemek ve otomatik testlerden yararlanmak gerekir. Temel tablo bilgisi yine değerlidir; çünkü karmaşık sistemi daha küçük karar birimlerine nasıl böleceğini öğretir.

### Okunabilirlik bir doğruluk özelliğidir

Kod bir kez yazılır, defalarca okunur. Mantıksal ifade gereğinden sıkıştırıldığında gelecekteki geliştirici yanlış yorumlayabilir. Yanlış yorum, yanlış değişikliğe dönüşür. Bu nedenle okunabilirlik yalnız estetik değildir; bakım hatası riskini azaltan kalite özelliğidir.

Şu iki yaklaşımı karşılaştır:

```js
const canShip = paid && stock > 0 && !blocked && (domestic || exportApproved);
```

```js
const isPaid = paymentStatus === "paid";
const hasStock = stock > 0;
const isCustomerAllowed = !isBlocked;
const hasDeliveryPermission = isDomestic || isExportApproved;

const canShip =
  isPaid && hasStock && isCustomerAllowed && hasDeliveryPermission;
```

İkinci sürüm daha çok satır kullanır, fakat iş kuralını incelemeyi kolaylaştırır. Her ara değer kayıt altına alınabilir ve ayrı sınanabilir. Kod inceleyen kişi `blocked` değişkeninin neyin engeli olduğunu veya `domestic` değerinin neyi temsil ettiğini yine sorgulamalıdır; iyi adlar bağlamı taşır.

### Olumlu adlar ve olumsuzluk borcu

`!isNotReady` ifadesi çift olumsuzluk nedeniyle zihinsel yük oluşturur. Mümkün olduğunda `isReady` gibi olumlu adlar kullan. Ancak gerçek alan kavramı gerçekten olumsuzsa `isBlocked` doğal olabilir. Amaç her `not` sözcüğünü yasaklamak değil, okuyucunun kaç kez tersine çevirmek zorunda kaldığını azaltmaktır.

Üçlü olumsuzluklar hata davet eder:

```js
const shouldContinue = !isNotAllowed && !hasNoCapacity;
```

Daha açık model:

```js
const isAllowed = true;
const hasCapacity = true;
const shouldContinue = isAllowed && hasCapacity;
```

### Yetkilendirme örneklerinin sınırı

Bu bölümde erişim kuralı örnekleri kullanacağız; fakat gerçek yetkilendirme yalnız tarayıcıdaki bir mantıksal değişkene bırakılamaz. İstemci tarafındaki kontrol kullanıcı deneyimini yönetebilir, güvenlik sınırı oluşturmaz. Gerçek sistemde sunucu kimliği doğrular, güncel izinleri güvenilir veri kaynağından alır ve işlemi sunucu tarafında yetkilendirir.

Bu ayrım mühendislik düşüncesinin parçasıdır: Mantıksal ifade doğru olabilir, fakat yanlış güven sınırında çalıştırılırsa sistem güvenli değildir. Eğitim laboratuvarındaki `isAdmin` değişkeni karar modelini öğretir; üretim güvenlik mimarisini temsil etmez.

### Değişiklik maliyetini düşünmek

Bugün “aktif ve doğrulanmış” olan kural yarın “aktif, doğrulanmış ve bölgesinde hizmet açık” olabilir. Tekrarlanan karmaşık koşulların her kopyası farklı güncellenme riski taşır. Anlamlı bir işlev veya merkezi kural, değişiklik noktasını azaltır. Henüz işlev tasarımını C13–C16 kadar derin işlemiyoruz; yine de tekrar eden kararın tek isim altında toplanmasının değerini görebiliriz.

### Yapay zekâ ile üretilen koşulu denetlemek

Yapay zekâ sözdizimsel olarak geçerli fakat gereksinim açısından yanlış koşul üretebilir. “Yalnızca yönetici veya hem doğrulanmış hem ücretli kullanıcı erişsin” talebi için parantez hatası bütün davranışı değiştirir. Denetim sırası şöyle olmalıdır:

1. Gereksinimi küçük önermelere ayır.
2. Her önermenin veri kaynağını belirle.
3. Beklenen gruplamayı parantezle yaz.
4. Bütün küçük mantıksal birleşimleri tabloya koy.
5. Yapay zekânın ifadesiyle beklenen sütunu karşılaştır.
6. Sınır ve güvenlik bağlamını ayrıca incele.

“Kod çalışıyor” veya “AI böyle önerdi” kanıt değildir. Kanıt, belirlenmiş durumlarda gözlenen davranışın gereksinimle eşleşmesidir.

## Real World Examples

### Örnek 1: Form gönderme uygunluğu

Bir kayıt formu, e-posta biçimi geçerli, parola yeterince uzun ve kullanım koşulları kabul edilmişse gönderilebilir olsun.

```js
const email = "student@example.com";
const password = "guclu-parola";
const acceptedTerms = true;

const hasValidEmailShape = email.includes("@");
const hasLongEnoughPassword = password.length >= 8;
const canSubmit =
  hasValidEmailShape && hasLongEnoughPassword && acceptedTerms;

console.log({
  hasValidEmailShape,
  hasLongEnoughPassword,
  acceptedTerms,
  canSubmit,
});
```

Bu örnekte `includes("@")` gerçek e-posta doğrulaması değildir; yalnızca mantıksal bileşimi öğretmek için sınırlı bir kontroldür. Profesyonel yaklaşım, örneğin sınırını açıkça söylemektir. Üç kuraldan biri yanlışsa `canSubmit` yanlıştır.

### Örnek 2: Ücretsiz kargo

Sepet tutarı 1.000 TL veya daha fazlaysa ya da müşteri premium üyeyse ücretsiz kargo verilsin.

```js
const cartTotal = 750;
const isPremiumMember = true;

const reachedFreeShippingLimit = cartTotal >= 1000;
const hasFreeShipping =
  reachedFreeShippingLimit || isPremiumMember;

console.log(hasFreeShipping); // true
```

Burada iki koşul birlikte doğru olabilir ve ücretsiz kargo yine doğrudur. Bu, kapsayıcı VEYA örneğidir.

### Örnek 3: Özellik bayrağı

Yeni bir özellik yalnızca sistem genelinde etkinse ve kullanıcı deney grubundaysa gösterilsin. İç ekip üyeleri ise deney grubunda olmasa da özelliği görebilsin; fakat sistem genelinde kapalıyken kimse görmesin.

Gereksinimi şöyle gruplarız:

```js
const isFeatureEnabled = true;
const isExperimentMember = false;
const isInternalUser = true;

const hasAudienceAccess =
  isExperimentMember || isInternalUser;
const canSeeFeature =
  isFeatureEnabled && hasAudienceAccess;

console.log(canSeeFeature); // true
```

`isFeatureEnabled && isExperimentMember || isInternalUser` yazılsaydı öncelik nedeniyle iç kullanıcı, özellik genel olarak kapalıyken de erişebilirdi. Adlandırılmış ara koşul gereksinimin sınırını korur.

### Örnek 4: İşlem risk kontrolü

Bir işlem yüksek tutarlı ve yeni cihazdan geliyorsa ya da hesap ayrıca işaretlenmişse incelemeye gönderilsin.

```js
const amount = 12_000;
const isNewDevice = true;
const isAccountFlagged = false;

const isHighAmount = amount >= 10_000;
const hasCombinedRisk = isHighAmount && isNewDevice;
const shouldReview = hasCombinedRisk || isAccountFlagged;

console.log(shouldReview); // true
```

Bu yalnızca eğitim modelidir; gerçek dolandırıcılık sistemi çok daha fazla sinyal, gizlilik ve güvenlik kontrolü içerir. Buradaki önemli nokta, “yüksek tutar VE yeni cihaz” grubunun, “işaretli hesap” seçeneğiyle VEYA üzerinden birleşmesidir.

### Örnek 5: İçerik yayımlama

İçerik taslak değil, zorunlu alanları dolu ve editör onaylıysa yayımlanabilir olsun.

```js
const status = "review";
const title = "Mantıksal Düşünme";
const body = "İçerik...";
const isEditorApproved = true;

const isNotDraft = status !== "draft";
const hasRequiredContent =
  title.length > 0 && body.length > 0;
const canPublish =
  isNotDraft && hasRequiredContent && isEditorApproved;

console.log(canPublish); // true
```

Bu örnekte boşluklardan oluşan metnin geçerli sayılması gibi sınırlar vardır. Mantıksal birleşim doğru kurulsa bile alt yüklemin kalitesi sonucu etkiler. `title.length > 0`, başlık kalitesini değil yalnız boş olmamayı temsil eder.

### Örnek 6: Hizmet çalışma zamanı

Bir bakım işlemi, sistem bakım modunda değilse ve ya düşük trafik saatindeyse ya da acil onay varsa çalışsın.

```js
const isMaintenanceMode = false;
const isLowTrafficWindow = false;
const hasEmergencyApproval = true;

const hasSchedulingPermission =
  isLowTrafficWindow || hasEmergencyApproval;
const canRunJob =
  !isMaintenanceMode && hasSchedulingPermission;

console.log(canRunJob); // true
```

Bu kuralın gerçek sistemde zaman, dağıtık kilit, yetkilendirme ve hata yönetimi gibi ek boyutları vardır. Mantıksal ifade büyük sistemin yalnız bir karar parçasıdır.

### Örnek 7: Doğruluk tablosuyla erişim modeli

Bir eğitim laboratuvarında kullanıcının kaynağa erişmesi için hesabı etkin olmalı ve kullanıcı ya sahibi ya da editör olmalıdır:

```js
const canAccess =
  isAccountActive && (isOwner || isEditor);
```

| Etkin | Sahip | Editör | Rol uygun | Erişim |
|---|---|---|---|---|
| F | F | F | F | F |
| F | F | T | T | F |
| F | T | F | T | F |
| F | T | T | T | F |
| T | F | F | F | F |
| T | F | T | T | T |
| T | T | F | T | T |
| T | T | T | T | T |

Tablo, hesap etkin değilken rolün sonucu değiştirmediğini açıkça gösterir. Bu davranış gereksinimle uyuşuyorsa model geçer. Gerçek uygulamada rol verisinin güvenilir kaynaktan alınması ayrıca gerekir.

## Common Mistakes

### 1. Her iki tarafı ayrı karşılaştırmamak

```js
const role = "owner";
const hasAccess = role === "admin" || "owner";
```

Bu ifade “rol admin'e eşit veya rol owner'a eşit” anlamına gelmez. İkinci işlenen boş olmayan `"owner"` metnidir ve doğru kabul edilir. Sonuç çoğu durumda `"owner"` olur.

Doğru ve açık sürüm:

```js
const hasAccess =
  role === "admin" || role === "owner";
```

### 2. VE ile VEYA'yı doğal dil sezgisiyle karıştırmak

“Kullanıcı öğrenci veya öğretmense” cümlesi `||` gerektirir. `&&` kullanılırsa tek bir rol değişkeninin aynı anda iki farklı değere eşit olması beklenir ve sonuç hiçbir zaman doğru olmaz.

```js
const role = "student";
const isAllowed =
  role === "student" && role === "teacher";

console.log(isAllowed); // false
```

### 3. Parantez olmadan niyeti gizlemek

`A || B && C` sözdizimsel olarak geçerlidir, ama okuyucu `A || (B && C)` ile `(A || B) && C` arasında duraksar. Öncelik kuralını hatırlasan bile gereksinimi parantezle göster.

### 4. Olumsuzluğu yanlış dağıtmak

`!(A || B)` ifadesini `!A || !B` yapmak davranışı değiştirir. Doğru dönüşüm `!A && !B`dir. Dönüşümü ezberden yaptıysan tabloyla doğrula.

### 5. Metin `"false"` değerini yanlış sanmak

Kullanıcı girdileri ve ortam değişkenleri çoğunlukla metindir. `"false"` boş olmadığı için doğru kabul edilir.

```js
const featureFlag = "false";
console.log(Boolean(featureFlag)); // true
```

Metni anlamına göre ayrıştırmak gerekir:

```js
const isFeatureEnabled = featureFlag === "true";
```

### 6. `0` değerini veri yok sanmak

Puan, stok veya yeniden deneme sayısı için sıfır geçerli olabilir. `value || defaultValue` sıfırı varsayılanla değiştirir. Önce alanın “eksik” tanımını belirle.

### 7. `&&` ve `||` sonucunu Boolean sanmak

`"Ali" && 5` sonucu `5`, `"" || "Misafir"` sonucu `"Misafir"`dir. Sonucu başka bir yere aktarırken beklenen türü açıkça düşün.

### 8. Kısa devre nedeniyle çalışmayan işlemi unutmak

Sağ tarafta kayıt, sayaç artırma veya ağ isteği gibi bir yan etki varsa sol taraf nedeniyle hiç çalışmayabilir. Yan etkileri gizli koşul kısaltmalarına bağlamak yerine açık kontrol akışı kullanmak çoğu zaman daha okunabilirdir; bunu C10'da uygulayacağız.

### 9. Yalnız mutlu yolu test etmek

Üç koşulun tümünün doğru olduğu durumun geçmesi yeterli değildir. Birer birer yanlış olduklarında beklenen sonucu üretip üretmediğini de kontrol et. Mantıksal tablonun her satırı potansiyel test durumudur.

### 10. Güvenlik kararını istemciye bırakmak

Bir düğmeyi gizlemek, işlemi yetkisiz erişime kapatmaz. Sunucu tarafındaki yetkilendirme ayrıca uygulanmalıdır. Mantıksal ifade ile güvenlik mimarisi farklı katmanlardır.

### 11. Geniş ve belirsiz değişken adları kullanmak

`check`, `valid`, `flag` gibi adlar tek başına neyin sınandığını anlatmaz. `isPaymentComplete`, `hasRequiredFields`, `isWithinAgeLimit` gibi adlar kararın anlamını taşır.

### 12. Kod sonucunu gereksinim kanıtı sanmak

Programın hata vermeden çalışması, doğru iş kuralını uyguladığı anlamına gelmez. Sözdizimsel doğruluk, mantıksal doğruluk ve alan doğruluğu farklıdır.

## Best Practices

### Gereksinimi önce düz Türkçeyle yaz

Kodlamadan önce kararı tek bir açık cümleye dönüştür. “Hesap etkin VE kullanıcı doğrulanmış VE ödeme gecikmemişse devam et.” Sonra her parçayı ayrı yükleme eşleştir. Belirsiz “uygunsa” sözcüğünü ölçülebilir koşullara ayır.

### Bir yüklem, bir soru

Her ara değişken mümkün olduğunca tek bir evet/hayır sorusuna cevap versin. `isEligible` çok sayıda kuralı gizleyebilir; bazen üst düzey sonuç için uygundur, fakat alt kurallar ayrıca adlandırılmalıdır.

### Karmaşık ifadelerde ara sonuç kullan

Beş koşulu tek satıra sıkıştırmak yerine anlamlı gruplara ayır. Bu yaklaşım hata ayıklama sırasında ara değerleri yazdırmayı, testlerde belirli kuralı hedeflemeyi ve kod incelemede gereksinimle eşleştirmeyi kolaylaştırır.

### Niyeti parantezle görünür yap

Operatör önceliğini bil; yine de `&&` ve `||` birlikteyse iş kuralı gruplarını çoğu zaman parantezle göster. Gereksiz her alt ifadeyi parantezlemek de gürültü oluşturabilir. Hedef, doğal grupları görünür kılmaktır.

### Olumlu isimleri tercih et

Olumsuzluk zincirlerini azalt. `!isDisabled` yerine alan uygunsa `isEnabled`, `!hasNoPermission` yerine `hasPermission` daha kolay okunur. Gerçek kavram “engellenmiş” ise `isBlocked` kullanılabilir.

### Sınır durumlarını önceden listele

Sayısal karşılaştırmada sınırın altını, kendisini ve üstünü; metinde boş, yalnız boşluk, normal ve beklenmeyen türleri; mantıksal birleşimde mümkün olan doğru/yanlış durumlarını düşün.

### Gerçek mantıksal sonuç gerektiğinde açık dönüştür

Bir API alanı veya işlev sözleşmesi kesin olarak Boolean bekliyorsa `Boolean(value)` kullan. `&&` veya `||` sonucunun türünü varsayma.

### Kısa devreyi bilinçli kullan

Sağ taraf yalnız sol koşul uygunsa güvenle değerlendirilebiliyorsa kısa devre yararlıdır. Fakat önemli yan etkileri görünmez hale getirme. Okunabilirlik ile kısalık arasında okunabilirliği seç.

### Doğruluk tablosunu testlere dönüştür

İki veya üç koşullu kritik bir kararda tablo satırlarını otomatik test vakalarına çevirebilirsin. Beklenen sonuç gereksinim sahibince gözden geçirilebilir. Böylece test yalnız uygulamayı değil, ortak kararı belgeler.

### Açıklama yorumundan çok anlamlı kod yaz

```js
// Kullanıcı uygunsa true olur
const result = a && b;
```

yerine:

```js
const hasVerifiedEmail = true;
const hasActiveSubscription = true;
const canAccessCourse =
  hasVerifiedEmail && hasActiveSubscription;
```

Yorum, kötü adları telafi etmek zorunda kalmamalıdır. Yorum varsa kararın “nedenini” veya alışılmadık alan sınırını açıklamalıdır.

### AI çıktısını sınanabilir kanıta dönüştür

Yapay zekâdan yalnız “koşulu yaz” istemek yerine gereksinimi yeniden ifade etmesini, varsayımlarını listelemesini ve doğruluk tablosu önermesini iste. Ardından tabloyu kendin kontrol et. Öğrenme sürecinde önce kendi çözümünü üret; AI karşılaştırma ve eleştiri aracı olsun.

## Hands-on Exercise

### Laboratuvar öncesi görev: erişim kuralını modelle

Bir belge yönetim sisteminde kullanıcı belgeyi düzenleyebilsin. Eğitim amacıyla şu kuralları kullan:

1. Hesap etkin olmalıdır.
2. Belge kilitli olmamalıdır.
3. Kullanıcı belgenin sahibi veya editör rolünde olmalıdır.

Önce kod yazmadan şu adımları tamamla:

1. Üç temel girdiyi ve rol grubunu doğal dilde tanımla.
2. Her girdi için anlamlı bir değişken adı yaz.
3. Kuralı parantezli mantıksal ifade olarak göster.
4. `isOwner` ve `isEditor` değerlerinden `hasEditingRole` ara sonucunu üret.
5. Etkinlik, kilit ve rol için sekiz satırlık sadeleştirilmiş tablo oluştur. Rolü bu aşamada tek bir `hasEditingRole` girdisi olarak kullan.
6. Her satırda beklenen `canEditDocument` sonucunu hesapla.
7. Aşağıdaki başlangıç kodunu tamamla.

```js
const isAccountActive = true;
const isDocumentLocked = false;
const isOwner = false;
const isEditor = true;

// Önce rol uygunluğunu hesapla.
const hasEditingRole = /* kendi ifaden */;

// Sonra bütün erişim kuralını hesapla.
const canEditDocument = /* kendi ifaden */;

console.log({ hasEditingRole, canEditDocument });
```

8. Şu durumları ayrı ayrı dene:
   - Etkin hesap, kilitsiz belge, editör kullanıcı.
   - Etkin olmayan hesap, kilitsiz belge, sahip kullanıcı.
   - Etkin hesap, kilitli belge, sahip kullanıcı.
   - Etkin hesap, kilitsiz belge, rolü olmayan kullanıcı.
9. Kuralı De Morgan kullanarak “erişimin reddedilme nedenleri” biçiminde eşdeğer yaz.
10. İki ifadenin aynı sonucu verdiğini sekiz satırın tümünde doğrula.

Beklenen özgün model şudur; kendi çalışmanı tamamlamadan açıp karşılaştırma:

```js
const hasEditingRole = isOwner || isEditor;
const canEditDocument =
  isAccountActive && !isDocumentLocked && hasEditingRole;
```

Reddetme modeli:

```js
const shouldDenyEditing =
  !isAccountActive || isDocumentLocked || !hasEditingRole;

const canEditDocument = !shouldDenyEditing;
```

Teslim kanıtın; gereksinim metni, doğruluk tablosu, çalışan kod, dört gözlem çıktısı ve eşdeğerlik açıklamasından oluşmalıdır. Yalnız kod göndermek yeterli değildir.

### Kendi test yardımcını kur

Aşağıdaki küçük yapı, tablo satırlarını çalıştırmana yardım eder. İşlevler ileride ayrıntılı öğretilecektir; burada kodu kullanabilir, mantıksal bölüme odaklanabilirsin.

```js
const cases = [
  { active: false, locked: false, role: false, expected: false },
  { active: false, locked: false, role: true, expected: false },
  { active: false, locked: true, role: false, expected: false },
  { active: false, locked: true, role: true, expected: false },
  { active: true, locked: false, role: false, expected: false },
  { active: true, locked: false, role: true, expected: true },
  { active: true, locked: true, role: false, expected: false },
  { active: true, locked: true, role: true, expected: false },
];

for (const testCase of cases) {
  const actual =
    testCase.active && !testCase.locked && testCase.role;

  console.log({
    ...testCase,
    actual,
    passed: actual === testCase.expected,
  });
}
```

Her satırda `passed` değerinin `true` olması beklenir. Bir satır başarısızsa hemen ifadeyi değiştirme; önce o satırdaki girdi, beklenen ve gerçek değeri karşılaştır.

## Reflection Questions

1. Bir programın yalnız iki mantıksal değere sahip olması, gerçek dünyanın belirsizliğini nasıl temsil edebilir?
2. “Kullanıcı uygunsa erişsin” cümlesinde hangi belirsizlikler vardır? Bunu ölçülebilir önermelere nasıl ayırırsın?
3. VE ile VEYA arasındaki farkı operatör sembolü kullanmadan nasıl anlatırsın?
4. Günlük dildeki “veya” hangi durumda JavaScript'in `||` anlamından farklı olabilir?
5. İki girdili doğruluk tablosunda neden dört satır bulunur? Üç girdide neden sekiz satır gerekir?
6. Birkaç örneğin aynı sonucu vermesi neden iki ifadenin eşdeğer olduğunu kanıtlamaz?
7. Ara sütunlar hata ayıklamayı nasıl kolaylaştırır?
8. `!(A && B)` ile `!A && !B` arasındaki farkı gerçek hayat örneğiyle açıkla.
9. `"false"` neden doğru kabul edilir? Bu davranış ortam değişkenlerinde nasıl hata yaratabilir?
10. Boş dizi neden yanlış kabul edilmez? Dizinin boşluğunu nasıl ayrıca sınarsın?
11. `&&` ve `||` operatörlerinin işlenen döndürmesi hangi durumda yararlı, hangi durumda risklidir?
12. Kısa devre değerlendirme bir hatayı önleyebilir mi? Bir yan etkiyi yanlışlıkla atlayabilir mi?
13. `isValid` adı neden bazen yetersizdir? Daha iyi üç örnek üret.
14. İstemci tarafında `canDelete = false` olması neden gerçek güvenlik sağlamaz?
15. Yapay zekânın ürettiği bir erişim koşulunu kabul etmeden önce hangi kanıtları istersin?
16. Okunabilirlik ile kısalık çatıştığında hangi ölçütlerle karar verirsin?
17. Bir iş kuralı değiştiğinde adlandırılmış ara yüklemler bakım maliyetini nasıl etkiler?
18. Doğruluk tablosunun pratik olmadığı kadar çok girdi varsa problemi nasıl bölersin?

Yanıtlarını yalnız birer cümleyle geçme. Her cevapta bir gerekçe ve mümkünse küçük bir örnek kullan. Yanlış anladığın noktaları belirlemek, doğru cevap sayısından daha değerlidir.

## Chapter Summary

Programlar karar verirken küçük doğruluk parçalarını birleştirir. Mantıksal değer `true` veya `false` olabilir. Karşılaştırmalar bu değerleri üretir; yüklemler girdiye göre bir soruyu cevaplar. `!` sonucu tersine çevirir, `&&` bütün koşulların sağlanmasını, `||` en az bir koşulun sağlanmasını temsil eder.

Doğruluk tablosu bütün olası mantıksal girdileri sistematik biçimde listeler. `n` bağımsız girdi için `2^n` satır gerekir. Karmaşık ifadelerde ara sütunlar kullanmak hem hesaplamayı hem hata ayıklamayı kolaylaştırır. İki ifadenin eşdeğer sayılması için bütün satırlarda aynı sonucu üretmesi gerekir.

De Morgan kuralları bileşik olumsuzlukları dönüştürür: `!(A && B)`, `!A || !B`; `!(A || B)`, `!A && !B` ile eşdeğerdir. Dönüşüm sırasında operatör değişir. Ancak her matematiksel dönüşüm otomatik olarak daha okunabilir değildir; alan dili ve değişken adları dikkate alınmalıdır.

JavaScript, mantıksal bağlamda başka türde değerleri doğru veya yanlış kabul eder. `false`, sıfır, boş metin, `null`, `undefined` ve `NaN` temel yanlış değerlerdir. Boş olmayan metinler, diziler ve nesneler doğru kabul edilir. Bu dönüşüm veri doğrulamayla aynı şey değildir.

JavaScript'te `&&` ve `||` her zaman mantıksal değer değil, işlenenlerden birini döndürür. `&&` ilk yanlış değerde, `||` ilk doğru değerde kısa devre yapar. Sağ tarafın çalışmaması güvenlik sağlayabilir veya gizli bir yan etkiyi atlayabilir; bu yüzden davranış bilinçli kullanılmalıdır.

Profesyonel kodda önemli olan operatör sayısını azaltmak değil, gereksinimi görünür ve sınanabilir kılmaktır. Açık değişken adları, ara yüklemler, parantezler, sınır testleri ve doğruluk tabloları karar kodunun bakım maliyetini düşürür. Yapay zekâ çıktıları da aynı kanıtlama sürecinden geçmelidir.

Bu bölüm C10'a hazırlık sağlar. Artık bir karar ifadesinin sonucunu hesaplayabiliyorsun. Sonraki bölümde bu sonuçların programın hangi kod yolunu çalıştıracağını nasıl belirlediğini öğreneceksin.

## Key Takeaways

- `true` ve `false`, metin değil mantıksal değerlerdir.
- Karşılaştırmalar mantıksal sonuç üretir.
- `A && B` yalnızca iki girdi de doğruysa doğrudur.
- `A || B`, en az bir girdi doğruysa doğrudur ve kapsayıcı VEYA'dır.
- `!A`, A'nın mantıksal anlamını tersine çevirir.
- `n` bağımsız mantıksal girdi `2^n` doğruluk tablosu satırı oluşturur.
- Ara sütunlar karmaşık ifadeyi denetlenebilir adımlara ayırır.
- Eşdeğerlik birkaç örnekle değil, bütün olası girdilerle doğrulanır.
- De Morgan dönüşümünde olumsuzluk dağıtılırken `&&` ile `||` yer değiştirir.
- `!` operatörü `&&`'den, `&&` operatörü `||`'dan önce değerlendirilir.
- Parantez, teknik zorunluluk olmadığı durumda bile iş kuralının niyetini gösterebilir.
- JavaScript'teki doğru/yanlış kabul edilme, veri geçerliliği anlamına gelmez.
- `"false"`, `[]` ve `{}` doğru kabul edilir; `0`, `""`, `null`, `undefined` ve `NaN` yanlış kabul edilir.
- `&&` ve `||` özgün işlenenlerden birini döndürebilir.
- Kısa devre nedeniyle sağ taraftaki ifade hiç çalışmayabilir.
- `role === "admin" || "owner"` doğru bir çoklu karşılaştırma değildir.
- Kritik kararlar adlandırılmış küçük yüklemlere ayrılmalıdır.
- İstemci tarafındaki görünürlük kontrolü sunucu yetkilendirmesinin yerini tutmaz.
- AI tarafından üretilen koşul doğruluk tablosu, sınır durumları ve gereksinimle denetlenmelidir.

## Further Reading

- ECMAScript dil belirtiminde `ToBoolean` soyut işlemini incele. İlk okumada bütün belirtimi anlamaya çalışma; giriş türleri ve dönen sonuç tablosuna odaklan.
- MDN'deki logical AND, logical OR ve logical NOT sayfalarında işlenen döndürme ve kısa devre örneklerini çalıştır.
- MDN'nin truthy ve falsy sözlük sayfalarını karşılaştır; her değeri `Boolean(...)` ile kendi ortamında doğrula.
- Ayrık matematik kaynaklarında önerme mantığı, doğruluk tablosu ve De Morgan yasaları bölümlerini oku.
- Kendi kullandığın bir uygulamadan üç karar kuralı seç; doğal dil gereksinimi, yüklemler ve doğruluk tablosu biçiminde yeniden modelle.

Okuma yaparken kaynak türlerini ayır. ECMAScript belirtimi dilin normatif davranışını tanımlar. MDN geliştirici odaklı açıklama ve örnek sağlar. Matematik kaynakları mantıksal yapının dilden bağımsız temelini açıklar. Bir blog yazısı pratik sezgi katabilir, fakat dil davranışında resmî belirtimin yerine geçmez.

## References

- Ecma International. [ECMAScript® 2026 Language Specification — ToBoolean](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean).
- Ecma International. [ECMAScript® 2026 Language Specification — Binary Logical Operators](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-binary-logical-operators).
- MDN Web Docs. [Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND).
- MDN Web Docs. [Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR).
- MDN Web Docs. [Logical NOT (`!`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT).
- MDN Web Docs. [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
- MDN Web Docs. [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).
- MDN Web Docs. [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).
- Lehman, E., Leighton, F. T., & Meyer, A. R. [Mathematics for Computer Science](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf). MIT OpenCourseWare.
- OpenStax. [Contemporary Mathematics — Logic](https://openstax.org/details/books/contemporary-mathematics).
- Association for Computing Machinery, IEEE Computer Society, & AAAI. [Computer Science Curricula 2023](https://csed.acm.org/).
