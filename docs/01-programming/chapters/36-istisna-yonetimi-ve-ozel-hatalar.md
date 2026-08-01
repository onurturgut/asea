---
document_type: "chapter"
chapter_id: "V01-C36"
volume_id: "V01"
title: "İstisna Yönetimi ve Özel Hatalar"
slug: "istisna-yonetimi-ve-ozel-hatalar"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "12-16 saat"
prerequisites:
  - "V01-C10"
  - "V01-C13"
  - "V01-C15"
  - "V01-C29"
learning_outcomes:
  - "V01-LO061"
  - "V01-LO062"
related_lab_ids:
  - "V01-C36-L01"
related_assessment_ids:
  - "V01-C36-AS01"
next_chapter_id: "V01-C37"
blueprint_id: "V01-C36-BP01"
last_updated: "2026-08-01"
---

# İstisna Yönetimi ve Özel Hatalar

## Learning Objectives

Bir hata yakalandığında programın susması başarı değildir. Yanlış state devam ediyor,
kullanıcıya yalan başarı gösteriliyor veya root cause kayboluyorsa catch yeni hata
üretmiştir. Bu chapter sonunda recover edebilen boundary kuracak (`LO061`) ve stable
custom error/recovery contract tasarlayacaksınız (`LO062`).

## Prerequisites

C10 control flow, C13 function contract, C15 effect boundary, C29 invalid conversion
bilgisi gerekir. Tahmin edin:

```js
function inner() { throw new Error("boom"); }
function outer() { inner(); return "done"; }
try { outer(); } catch (error) { console.log(error.message); }
```

`return "done"` çalışmaz; throw normal control flow'u kesip uygun catch'e ilerler.

## Estimated Study Time

12–16 saat: propagation 3, boundary/recovery 3, custom contract 3, lab/test 3–7.

## Introduction

Exception, normal completion yerine **abrupt completion** üretir. Catch en yakın
uygun try boundary'sinde kontrolü alır. Her function'ın catch yazması gerekmez; hata
anlamlı recovery yapabilecek katmana kadar ilerleyebilir.

## Core Concepts

### Error value ve throw

JavaScript herhangi value'yu throw etmeye izin verir, fakat `Error` object stack,
name, message ve cause sözleşmesi sağladığı için tercih edilir.

```js
function parsePositiveInteger(raw) {
  if (!/^\d+$/.test(raw)) throw new TypeError("decimal integer text required");
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value < 1) {
    throw new RangeError("positive safe integer required");
  }
  return value;
}
```

TypeError contract/type uyuşmazlığını, RangeError kabul edilen türde ama domain dışı
değeri anlatır.

### Propagation trace

| Adım | Frame | Olay |
| ---: | --- | --- |
| 1 | boundary | `service()` çağrılır |
| 2 | service | `parse()` çağrılır |
| 3 | parse | Error throw edilir |
| 4 | service | Normal kalan satırlar atlanır; catch yok |
| 5 | boundary | Catch error value'yu alır |
| 6 | boundary | Recover, translate veya rethrow kararı |

Catch yalnız hatayı görebildiği için değil, toparlanma kararı verebildiği için o
katmanda bulunmalıdır.

### Narrow try ve selective recovery

```js
function loadSettings(readText) {
  let raw;
  try {
    raw = readText();
  } catch (error) {
    throw new SettingsLoadError("Ayar metni okunamadı.", { cause: error });
  }
  return parseSettings(raw);
}
```

Try yalnız read operation'ı kapsar. Parse bug'ı yanlışlıkla “dosya okunamadı” diye
etiketlenmez. Catch recovery yapamıyorsa context ekleyip cause ile yeniden fırlatır.

### Custom error contract

```js
class DomainError extends Error {
  constructor(message, { code, details = {}, cause } = {}) {
    super(message, { cause });
    this.name = "DomainError";
    this.code = code;
    this.details = details;
  }
}

class SettingsLoadError extends DomainError {}
```

Consumer yalnız message text parse etmemelidir; message değişebilir/localize olabilir.
Stable `code` programmatic classification sağlar. `details` secret, token veya gereksiz
kişisel veri taşımamalıdır. `cause` root error zincirini korur.

### Unknown catch value

Başka code string/object throw edebilir. Boundary normalize edebilir:

```js
function toError(value) {
  return value instanceof Error ? value : new Error("Unknown thrown value", {
    cause: value,
  });
}
```

### Expected outcome mı exception mı?

Kullanıcının arama sonucunda kayıt bulamaması normal domain sonucu olabilir:
`{ ok:false, reason:"not-found" }`. Bozuk invariant, programmer contract violation veya
devam edilemeyen I/O failure exception olabilir. Sıklık değil, caller'ın control-flow
sözleşmesi belirleyicidir.

### Finally

Finally normal return, throw veya catch sonrasında cleanup için çalışır.

```js
let resource;
try {
  resource = acquire();
  return use(resource);
} finally {
  if (resource) release(resource);
}
```

Finally içinde return/throw, önceki completion'ı override edip root error'u gizleyebilir;
kaçının. Cleanup failure policy ayrıca tasarlanmalıdır.

### State atomicity

```js
function withdraw(account, amount) {
  if (!Number.isSafeInteger(amount) || amount <= 0) throw new RangeError("amount");
  if (amount > account.balanceCents) {
    throw new DomainError("Yetersiz bakiye", {
      code: "INSUFFICIENT_FUNDS",
      details: { requestedCents: amount },
    });
  }
  account.balanceCents -= amount;
}
```

Validation mutation'dan önce tamamlanır. Failure state'i yarı değiştirmemelidir.

### Birlikte yapalım: boundary kararı

```js
function handleRequest(raw, logger) {
  try {
    const amount = parsePositiveInteger(raw);
    return { ok: true, value: amount };
  } catch (thrown) {
    const error = toError(thrown);
    logger(error);
    if (error instanceof TypeError || error instanceof RangeError) {
      return { ok: false, code: "INVALID_INPUT" };
    }
    throw error;
  }
}
```

Boundary yalnız beklenen input errors'ı recoverable result'a çevirir; bilinmeyen bug'ı
yutmaz. Internal message kullanıcıya aynen açılmaz.

## Engineering Perspective

Error contract source, category, stable code, safe context, cause, recovery owner,
retry/abort policy ve observability ihtiyacını tanımlar. Catch-all ve boş catch
production teşhisini yok eder. Log edip aynı katmanda yeniden loglamak duplicate noise
üretebilir; ownership belirleyin.

## Real World Examples

- Input boundary: validation result.
- Repository boundary: storage error'u domain context ile translate.
- HTTP/UI boundary: stable code'u safe kullanıcı mesajına map.
- Cleanup: resource release finally'de.
- P08: modular failure-resilient CLI.

## Common Mistakes

- String throw etmek.
- Her şeyi catch edip `null` döndürmek.
- Message text'i error code gibi parse etmek.
- Çok geniş try ile unrelated bug'ı yanlış sınıflandırmak.
- Cause'u kaybetmek.
- Mutation sonrası validation yapmak.
- Finally'de return ile error'u bastırmak.

## Best Practices

1. Catch'i recovery yapabilen boundary'ye koyun.
2. Try scope'u dar tutun.
3. Beklenen categories'i seçici yakalayın, bilinmeyeni rethrow edin.
4. Stable code ve safe details kullanın.
5. Cause chain'i koruyun.
6. Mutation öncesi validate edin; failed operation atomic olsun.
7. Error-path tests ve cleanup tests yazın.

## Hands-on Exercise

### Şimdi sen dene

Canonical progress input parser için `ProgressInputError` oluşturun; stable code,
field details ve cause taşısın. Boundary yalnız bu error'u safe result'a çevirsin.

### Hata avı

Empty catch, broad try ve finally return içeren üç snippet'i düzeltin.

### Bağımsız uygulama

Balance transfer operation'ını iki hesabı yarı güncellemeden tamamlayacak şekilde
tasarlayın; failure trace ve invariant tests sunun.

### Gerçek proje bağlantısı

P08'e error classes, boundary mapper, cause-preserving translation ve recovery matrix
ekleyin.

## Reflection Questions

1. Catch nerede olmalıdır?
2. Expected invalid input ile exception nasıl ayrılır?
3. Stable code neden message'tan ayrıdır?
4. Cause neyi korur?
5. Finally return neden tehlikelidir?
6. Atomic state transition nasıl kanıtlanır?

## Chapter Summary

Exception normal flow'u keser ve recovery-capable boundary'ye ilerler. Profesyonel
handling hatayı yutmaz; classify, recover/translate/rethrow ve cleanup kararlarını
açıklar. Custom errors stable code, safe details ve cause taşır. State mutation failure
öncesinde doğrulanır.

## Key Takeaways

- Throw abrupt completion üretir.
- Catch ancak anlamlı recovery varsa değerlidir.
- Try scope dar olmalıdır.
- Unknown failures rethrow edilir.
- Custom error contract message'tan fazlasıdır.
- Cause root context'i korur.
- Finally cleanup içindir; completion bastırmamalıdır.
- Failed transition state'i kısmen değiştirmemelidir.

## Further Reading

- C24 failure modes
- C25 debugging
- C26 testing
- C37 module error boundaries
- P08 failure-resilient delivery

## References

- ECMA-262 try Statement, throw Statement ve Error Objects
- ASEA `V01-C36-BP01`, `V01-LO061`, `V01-LO062`
