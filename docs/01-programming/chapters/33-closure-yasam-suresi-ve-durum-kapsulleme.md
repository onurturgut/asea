---
document_type: "chapter"
chapter_id: "V01-C33"
volume_id: "V01"
title: "Closure, Yaşam Süresi ve Durum Kapsülleme"
slug: "closure-yasam-suresi-ve-durum-kapsulleme"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "14-18 saat"
prerequisites:
  - "V01-C15"
  - "V01-C32"
learning_outcomes:
  - "V01-LO055"
  - "V01-LO056"
related_lab_ids:
  - "V01-C33-L01"
related_assessment_ids:
  - "V01-C33-AS01"
next_chapter_id: "V01-C34"
blueprint_id: "V01-C33-BP01"
last_updated: "2026-08-01"
---

# Closure, Yaşam Süresi ve Durum Kapsülleme

## Learning Objectives

Ada, ASEA'da her öğrencinin ilerlemesini ayrı tutan bir sayaç yazmak ister. Global
değişken kullanırsa bütün öğrenciler aynı sayıyı paylaşır. State'i fonksiyonun içine
alırsa fonksiyon her çağrıda yeniden başlar. İhtiyaç şudur: dış kodun doğrudan
değiştiremeyeceği, fakat izin verilen operasyonların çağrılar arasında hatırlayacağı
bir durum.

Bu chapter sonunda:

- lexical environment, binding resolution ve closure ilişkisini açıklayacak,
- outer function döndükten sonra inner function'ın hangi binding'e eriştiğini
  environment/lifetime iziyle çözümleyecek (`V01-LO055`),
- closure'ın value snapshot değil canlı binding erişimi olduğunu gösterecek,
- her factory çağrısının neden bağımsız state ürettiğini kanıtlayacak,
- captured state'in sahipliğini, mutation yüzeyini ve lifetime riskini değerlendirecek,
- invariant koruyan, iç referansı sızdırmayan ve test edilebilir closure tabanlı state
  boundary üreteceksiniz (`V01-LO056`).

## Prerequisites

C15'te lexical scope, identifier resolution, lifetime ve side effect kavramlarını;
C32'de function value'nun döndürülebileceğini ve daha sonra çağrılabileceğini
öğrendiniz.

Çalıştırmadan tahmin edin:

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
```

Sonuç `1` ve `2`dir. `createCounter` ilk satırdan önce dönmüş olmasına rağmen `count`
binding'ine erişim kaybolmaz. Bunun nedeni outer call'un call stack'te kalması değil,
dönen function object'in oluşturulduğu lexical environment ile ilişkisini korumasıdır.

## Estimated Study Time

14–18 saat planlayın. Lexical environment ve capture izi 4 saat, factory instance
analizi 3 saat, encapsulation/invariant tasarımı 4 saat, hata avı 2 saat, lab ve ölçme
3–5 saat sürer. Her factory örneğinde environment kimliklerini `E1`, `E2`; function
kimliklerini `F1`, `F2`; state değerlerini zaman sırasıyla yazın.

## Introduction

C15'te isim çözümlemeyi kullanım noktasından dış lexical scope'lara doğru yaptınız.
C33'te yeni soru şudur: İç function dış function'dan döndürüldüğünde bu lexical
erişim neden devam eder?

ECMAScript function object'leri, oluşturuldukları çevreyle ilişkili davranır. Standart
bunu `[[Environment]]` adlı iç specification mekanizmasıyla tarif eder. Bu, JavaScript
kodundan okunabilen bir property veya belirli bir heap adresi değildir. Öğrenmek için
şu kavramsal modeli kullanacağız:

```text
counter binding → F1 increment function
                     │ lexical access
                     ▼
                  E1 { count: 0 }
```

**Closure (kapanış)**, bir function'ın kendi body koduyla birlikte oluşturulduğu
lexical çevredeki binding'lere erişimini koruyan davranıştır. “Function değeri
kopyalar” demeyiz; function binding'i çözer. Binding'in değeri değişirse sonraki çağrı
yeni değeri görür.

## Core Concepts

### Baseline: local state neden hatırlanmaz?

```js
function incrementWithoutClosure() {
  let count = 0;
  count += 1;
  return count;
}

console.log(incrementWithoutClosure()); // 1
console.log(incrementWithoutClosure()); // 1
```

Her çağrı yeni function environment ve yeni `count` binding'i oluşturur. Çağrı
tamamlandığında dışarıda bu binding'e ulaşan function value yoktur. İkinci çağrı ilk
state'i sürdürmez.

Global state ters problemi yaratır:

```js
let sharedCount = 0;

function incrementShared() {
  sharedCount += 1;
  return sharedCount;
}
```

State kalıcıdır ama sahiplik yüzeyi büyüktür; aynı module içindeki başka kod da
`sharedCount` değerini değiştirebilir. Closure factory, kalıcılık ile kontrollü erişimi
birleştirebilir.

### Birlikte yapalım: environment ve lifetime izi

```js
function createCounter() {
  let count = 0;

  function increment() {
    count += 1;
    return count;
  }

  return increment;
}

const counter = createCounter();
const first = counter();
const second = counter();
```

| Adım | Aktif işlem | Environment/state |
| ---: | --- | --- |
| 1 | `createCounter()` çağrılır | Yeni `E1` oluşur |
| 2 | `let count = 0` | `E1.count = 0` |
| 3 | `increment` oluşturulur | `F1`, outer lexical environment olarak `E1`e bağlıdır |
| 4 | `F1` döndürülür | `counter → F1` |
| 5 | Outer call tamamlanır | Call frame biter; `F1 → E1` erişimi sürer |
| 6 | `counter()` çağrılır | `F1` kendi local çevresini oluşturur |
| 7 | `count` aranır | Local'de yok; `E1.count` bulunur |
| 8 | `count += 1` | `E1.count = 1` |
| 9 | return | `first = 1` |
| 10 | `counter()` tekrar çağrılır | Yine `E1.count` çözülür |
| 11 | mutation | `E1.count = 2` |
| 12 | return | `second = 2` |

Call frame'in bitmesi ile captured environment'a erişimin bitmesi aynı olay değildir.
Lifetime, state'e hâlâ erişilebilen function'ların reachability ilişkisine bağlıdır.
Garbage collector'ın tam olarak ne zaman çalışacağını dil seviyesinde garanti etmeyiz.

### Capture snapshot değildir

```js
let threshold = 70;

function isPassing(score) {
  return score >= threshold;
}

threshold = 80;
console.log(isPassing(75)); // false
```

Function oluşturulurken `70` sayısının donmuş kopyası saklanmaz. `threshold` binding'i
çözülür; çağrı anındaki value `80`dir. Config snapshot isteniyorsa factory çağrısında
yeni local binding oluşturulur ve dışarı mutation yolu açılmaz.

```js
function createPassRule(threshold) {
  if (!Number.isFinite(threshold)) {
    throw new TypeError("threshold sonlu number olmalıdır.");
  }

  const fixedThreshold = threshold;
  return function isPassing(score) {
    return score >= fixedThreshold;
  };
}
```

`fixedThreshold` binding'i factory invocation environment'ına aittir. Primitive
number value yeniden atanmaz; returned callback ona lexical erişim taşır.

### Her factory çağrısı ayrı environment üretir

```js
const adaCounter = createCounter();
const mertCounter = createCounter();

console.log(adaCounter()); // 1
console.log(adaCounter()); // 2
console.log(mertCounter()); // 1
```

İlk factory çağrısı `E1/F1`, ikincisi `E2/F2` üretir. Aynı source code çalışsa da
`E1.count` ve `E2.count` ayrı binding'lerdir.

| Function | Captured environment | State |
| --- | --- | ---: |
| `adaCounter` (`F1`) | `E1` | `count = 2` |
| `mertCounter` (`F2`) | `E2` | `count = 1` |

Bu bağımsızlık multi-user state için kritiktir. Factory dışında tek shared state
tanımlamak bütün instance'ları yanlışlıkla birbirine bağlar.

### Bir state'i paylaşan birden fazla closure

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
      return count;
    },
    read() {
      return count;
    },
    reset() {
      count = 0;
    },
  };
}
```

Üç method function aynı factory invocation environment'ındaki `count` binding'ini
çözer. `increment` mutation yapar; `read` query'dir; `reset` kontrollü command'dır.
Object property olarak method'ların dışarı verilmesi `count` binding'ini property
yapmaz: `counter.count` yoktur.

Bu “güvenlik kasası” değildir. API'yi kullanan kodun doğrudan binding erişimini
kısıtlayan bir interface boundary'dir. Runtime inspection veya untrusted-code security
garantisi gibi sunulmamalıdır.

### Gerçek model: ilerleme tracker'ı

```js
function createProgressTracker({ completed, total }) {
  if (!Number.isInteger(completed) || !Number.isInteger(total)) {
    throw new TypeError("completed ve total integer olmalıdır.");
  }

  if (total <= 0 || completed < 0 || completed > total) {
    throw new RangeError("Başlangıç ilerlemesi geçersiz.");
  }

  let completedChapters = completed;

  function completeNext() {
    if (completedChapters >= total) {
      throw new RangeError("Tamamlanacak chapter kalmadı.");
    }

    completedChapters += 1;
    return getSnapshot();
  }

  function getSnapshot() {
    return {
      completedChapters,
      totalChapters: total,
    };
  }

  function reset() {
    completedChapters = 0;
    return getSnapshot();
  }

  return { completeNext, getSnapshot, reset };
}
```

State sahipliği factory invocation'ındadır. `completedChapters` yalnız commands
üzerinden değişir. `total` configuration binding'i değişmez. `getSnapshot` her çağrıda
yeni object üretir; internal mutable object referansı dışarı sızdırılmaz.

```js
const tracker = createProgressTracker({ completed: 31, total: 38 });
const before = tracker.getSnapshot();
const after = tracker.completeNext();

console.log(before.completedChapters); // 31
console.log(after.completedChapters); // 32
```

`before` geçmişi korur. Eğer internal state object'i doğrudan döndürseydik dış kod
invariant'ı atlayarak değiştirebilir ve eski snapshot da shared mutation görebilirdi.

### Captured `const` object değişmez değildir

```js
function createUnsafeStore() {
  const state = { count: 0 };

  return function increment() {
    state.count += 1;
    return state.count;
  };
}
```

`const`, `state` binding'inin rebinding'ini önler; object property mutation'ını değil.
C30 kimlik kuralı closure içinde de geçerlidir. State object'i kullanıyorsanız dışarı
aynı referansı vermeyin; snapshot veya seçilmiş primitive değer döndürün.

### Loop closure ve binding farkı

```js
const readers = [];

for (let index = 0; index < 3; index += 1) {
  readers.push(() => index);
}

console.log(readers.map((read) => read())); // [0, 1, 2]
```

`let` kullanılan bu loop'ta iteration'lar için ayrı lexical binding davranışı vardır.
`var` ile tek function-scoped binding paylaşılırsa callbacks loop sonundaki ortak
değeri görebilir. Çözüm, eski IIFE hilesini ezberlemek değil doğru binding scope'unu
`let` ile kurmaktır.

## Engineering Perspective

Closure state boundary şu koşullarda güçlüdür: state küçük ve tek sahibiyse, izin
verilen operations sınırlıysa, birkaç bağımsız instance gerekiyorsa ve persistence
ya da framework lifecycle yönetimi gerekmiyorsa. API, implementation detail'i gizler
ve invariant'ları merkezi tutar.

Closure her state problemi için doğru araç değildir. State paylaşımı process/module
çapına çıkıyorsa, serialization/persistence gerekiyorsa, çok sayıda capability ve
karmaşık lifecycle varsa object/class/module veya açık state reducer daha anlaşılır
olabilir. C37 module boundary kararlarını ele alacaktır.

Lifetime maliyetini de görünür tutun. Uzun yaşayan callback, oluşturulduğu çevredeki
büyük object graph'ına erişimi koruyabilir. İhtiyaç olmayan büyük values'ı capture
etmeyin; listener/subscription gibi sahipliklerde cleanup sözleşmesi tasarlayın.
“Closure memory leak yapar” genellemesi de yanlıştır; risk gereksiz reachability ve
belirsiz ownership'tir.

Test edilebilirlik için factory initial state ve configuration kabul etmelidir. Saat,
rastgelelik veya network gibi gizli dış girdiler closure içine gömülmemeli; C15'teki
dependency injection yaklaşımıyla açık verilmelidir. Test yalnız output'u değil,
instance independence ve invariant preservation'ı kanıtlamalıdır.

## Real World Examples

### Sayaç ve rate limiter state'i

Küçük, tek sahibine ait sayı state'i controlled increment/read API'siyle tutulabilir.
Gerçek distributed rate limiter için closure yeterli değildir; persistence ve eşzamanlılık gerekir.

### Yapılandırılmış validator

`createPassRule(70)` threshold'u factory environment'ında tutar ve tekrar kullanılan
predicate üretir.

### UI component helper

Bir component dış API'ye event callback verirken küçük local state'i closure ile
hatırlayabilir. Framework lifecycle ve stale-state ayrıntıları ayrıca öğrenilmelidir.

### Test spy

Çağrı log'unu captured array'de tutan spy, invocation arguments/count'u sorgulayan
method'lar sunabilir. Internal log referansı dışarı verilmemelidir.

### ASEA P07

Her öğrenci için bağımsız progress tracker oluşturulur; complete/reset commands ve
snapshot query, C30 invariant'larını closure boundary içinde korur.

## Common Mistakes

### Hata avı 1: closure değeri dondurur sanmak

Captured binding sonradan mutate ediliyorsa closure yeni value'yu görür. Creation-time
snapshot gerekiyorsa yeni, dışarıdan yeniden atanamayan local binding tasarlayın.

### Hata avı 2: bütün instance'ları aynı state'e bağlamak

State factory dışında tanımlanırsa iki returned API aynı binding'i paylaşabilir.
Instance state factory invocation environment'ında oluşturulmalıdır.

### Hata avı 3: internal object'i döndürmek

`return state` dış kodun validation'ı atlayarak mutate etmesine izin verir. Primitive
query veya yeni snapshot object döndürün.

### Hata avı 4: `const` ile deep immutability varsaymak

Captured const object'in property'leri mutable olabilir. Binding ve object state'i
ayrı izleyin.

### Hata avı 5: outer call stack'te kaldı demek

Outer invocation tamamlanır. Erişim function object'in lexical environment ilişkisi
sayesinde sürer; call stack frame'in sonsuza kadar aktif olması gerekmez.

### Hata avı 6: cleanup ve lifetime'ı unutmak

Uzun yaşayan registration, artık gerekmediği hâlde callback ve captured graph'ı
erişilebilir tutabilir. Sahip, bırakma anı ve cleanup operation'ı tanımlayın.

## Best Practices

1. Captured binding envanteri çıkarın; her birinin sahibi ve mutation yetkisini yazın.
2. Factory'ye geçerli initial state/configuration verin.
3. Commands ve queries'i adlarıyla ayırın.
4. Her command'da invariant'ı koruyun.
5. Internal mutable reference yerine primitive veya fresh snapshot döndürün.
6. İki instance'ın bağımsızlığını test edin.
7. Gereksiz büyük values ve global dependencies capture etmeyin.
8. Callback registration varsa lifetime/cleanup contract'ı yazın.
9. Closure'ı güvenlik veya kesin memory-management garantisi gibi sunmayın.

## Hands-on Exercise

### Şimdi sen dene

`createAttemptTracker(maxAttempts)` factory'si tasarlayın.

- Captured `attemptCount` sıfırdan başlasın.
- `recordAttempt()` max değeri aşmadan artırıp snapshot döndürsün.
- `remaining()` kalan hakkı döndürsün.
- `reset()` kontrollü şekilde sıfırlasın.
- Internal state doğrudan döndürülmesin.
- İki tracker instance'ının bağımsızlığı kanıtlansın.

#### Kademeli ipuçları

1. `maxAttempts` ve `attemptCount` factory environment'ında yaşar.
2. Üç returned function aynı environment'ı paylaşmalıdır.
3. Artırmadan önce cross-field invariant'ı kontrol edin.
4. Snapshot her çağrıda yeni object olmalıdır.

### Bağımsız uygulama

`createScoreHistory(limit)` API'si üretin. `add`, `average`, `snapshot`, `clear`
operations taşısın; limit invariant'ını korusun ve captured array referansını dışarı
vermesin. Empty average için domain kararınızı savunun.

### Gerçek proje bağlantısı

P07'de StudentProgress için `createProgressTracker` ekleyin. İki öğrenci instance'ı,
snapshot isolation, invalid transition ve reset testlerini; environment/state trace
ile birlikte teslim edin.

## Reflection Questions

1. Closure hangi value'yu değil, hangi ilişkiyi korur?
2. Outer function döndüğünde call frame ve lexical erişim nasıl ayrılır?
3. İki factory call neden ayrı state üretir?
4. Birden fazla returned method aynı binding'i nasıl paylaşır?
5. Internal object reference sızıntısı invariant'ı nasıl bozar?
6. Closure state ne zaman object/class/module state'ten daha uygundur?
7. Gereksiz capture lifetime ve memory açısından hangi riski doğurur?
8. Command/query ayrımı testleri nasıl sadeleştirir?

## Chapter Summary

Closure, function body ile oluşturulduğu lexical environment'daki binding'lere erişim
ilişkisidir. Captured binding value snapshot değildir; binding mutate edilirse sonraki
çağrı yeni value'yu görür. Outer call tamamlanabilir, fakat returned function erişilebilir
olduğu sürece gereken lexical state'e erişim devam eder.

Her factory invocation ayrı environment ve bağımsız state üretebilir. Aynı invocation
içinde oluşturulan birden çok closure ise aynı state'i paylaşabilir. Kapsülleme, state'i
saklamaktan fazlasıdır: invariant koruyan commands, açık queries, reference sızdırmayan
snapshots, test edilebilir initial state ve anlaşılır lifetime sözleşmesi gerektirir.

## Key Takeaways

- Function object oluşturulduğu lexical environment ile ilişkilidir.
- Closure frozen value değil binding erişimi taşır.
- Call frame lifetime ile captured state erişimi aynı değildir.
- Her factory invocation yeni instance environment'ı oluşturabilir.
- Aynı factory'deki methods ortak private-by-interface state'i paylaşabilir.
- Captured `const` object yine mutable olabilir.
- Fresh snapshot internal reference sızıntısını önler.
- Closure state boundary invariant, ownership, lifetime ve test contract'ı gerektirir.

## Further Reading

- C15: lexical scope, lifetime ve side effects
- C32: function values, callbacks ve control flow
- C30: object identity, mutation ve snapshot
- C17: collection processing için captured callbacks
- C37: module boundary ve program organization

## References

- ECMA-262, ECMAScript Function Objects ve `[[Environment]]`
- ECMA-262, Environment Records ve outer environment ilişkisi
- ECMA-262, ResolveBinding
- ASEA `V01-C33-BP01`, `V01-LO055` ve `V01-LO056`
