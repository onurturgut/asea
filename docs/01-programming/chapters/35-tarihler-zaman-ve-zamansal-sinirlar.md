---
document_type: "chapter"
chapter_id: "V01-C35"
volume_id: "V01"
title: "Tarihler, Zaman ve Zamansal Sınırlar"
slug: "tarihler-zaman-ve-zamansal-sinirlar"
version: "0.1.0"
status: "Draft"
difficulty: "Intermediate"
estimated_time: "12-16 saat"
prerequisites:
  - "V01-C08"
  - "V01-C34"
learning_outcomes:
  - "V01-LO059"
  - "V01-LO060"
related_lab_ids:
  - "V01-C35-L01"
related_assessment_ids:
  - "V01-C35-AS01"
next_chapter_id: "V01-C36"
blueprint_id: "V01-C35-BP01"
last_updated: "2026-08-01"
---

# Tarihler, Zaman ve Zamansal Sınırlar

## Learning Objectives

“2026-08-01” bir gün etiketi; “2026-08-01T09:00:00+03:00” zaman çizgisindeki bir
instant; “90 dakika” duration'dır. Bunları tek bir Date kutusuna atmak timezone ve DST
hataları üretir. Bu chapter sonunda explicit contract ile temporal value işleyecek
(`LO059`) ve ambiguity/zone/calendar riskini analiz edeceksiniz (`LO060`).

## Prerequisites

C08 input/output boundary, C34 finite integer ve unit kararını sağlar. Tahmin edin:

```js
const instant = new Date("2026-08-01T06:00:00.000Z");
console.log(instant.toISOString());
console.log(instant.getTime());
```

İki çıktı aynı instant'ı ISO UTC metni ve epoch milliseconds olarak temsil eder.

## Estimated Study Time

12–16 saat: temporal vocabulary 3, parse/validation 3, zone/format 3, DST ve lab 3–7.

## Introduction

Date object'i içinde insan dilindeki “1 Ağustos” değil, bir **time value** taşır:
1970-01-01T00:00:00Z epoch'una göre milliseconds. Local getter/formatter bu instant'ı
çevre timezone'una göre görünür kılar. Aynı instant İstanbul ve Londra'da farklı saat
etiketiyle gösterilebilir.

## Core Concepts

### Dört ayrı domain kavramı

| Kavram | Örnek | Soru |
| --- | --- | --- |
| Instant | `2026-08-01T06:00:00.000Z` | Zaman çizgisinde ne zaman? |
| Calendar date | `2026-08-01` | Hangi takvim günü? |
| Local date-time | `2026-08-01 09:00 Europe/Istanbul` | Hangi bölgede hangi duvar saati? |
| Duration | `90 dakika` | Ne kadar süre? |

Duration'ı Date gibi modellemeyin; milliseconds/structured duration ve unit contract
kullanın. Calendar date'i gece yarısı instant'ına zorlamak timezone kaymasına yol açabilir.

### Validity

```js
function assertValidDate(date, name) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError(`${name} geçerli bir Date olmalıdır.`);
  }
}
```

Invalid Date object yine Date instance'ıdır; `getTime()` NaN döndürür.

### Strict instant boundary

Bu örnek yalnız canonical UTC millisecond ISO formatını kabul eder:

```js
function parseCanonicalInstant(raw) {
  if (typeof raw !== "string") throw new TypeError("instant string olmalıdır.");
  const pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (!pattern.test(raw)) throw new RangeError("canonical UTC ISO formatı gerekir.");
  const date = new Date(raw);
  if (Number.isNaN(date.getTime()) || date.toISOString() !== raw) {
    throw new RangeError("geçersiz calendar/time bileşeni.");
  }
  return date;
}
```

Regex shape'i, round-trip calendar validity'yi kontrol eder. “Tarayıcı anlar” diye
locale-specific `01/08/2026` parse etmeyiz.

### Comparison ve serialization

```js
function compareInstants(left, right) {
  assertValidDate(left, "left");
  assertValidDate(right, "right");
  return Math.sign(left.getTime() - right.getTime());
}
```

Date object identity'sini değil epoch milliseconds'ı karşılaştırın. Network/storage
boundary'sinde canonical `toISOString()` veya açık numeric epoch contract kullanın.

### UTC ve local access

`getUTCFullYear` UTC bileşenini, `getFullYear` runtime local timezone bileşenini verir.
Local output environment'a göre değişebilir. User-facing format'ta locale ve timeZone
açık olmalıdır:

```js
const formatter = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Europe/Istanbul",
});
```

Formatted text parse/storage formatı değildir.

### Date mutation

Date setters object'i mutate eder. Snapshot gerekirse clone üretin:

```js
const copy = new Date(original.getTime());
```

### Duration ile instant arithmetic

```js
const MINUTE_MS = 60_000;
const expiresAt = new Date(createdAt.getTime() + 90 * MINUTE_MS);
```

Bu elapsed duration ekler. “Yarın aynı local saat” calendar operation'dır ve DST
geçişinde 24 elapsed saatle aynı olmayabilir. Policy'de elapsed-time mı calendar-time
mı istediğinizi yazın.

### Birlikte yapalım: süre penceresi

```js
function isWithinWindow({ occurredAt, now, windowMs }) {
  assertValidDate(occurredAt, "occurredAt");
  assertValidDate(now, "now");
  if (!Number.isSafeInteger(windowMs) || windowMs < 0) {
    throw new RangeError("windowMs non-negative safe integer olmalıdır.");
  }
  const ageMs = now.getTime() - occurredAt.getTime();
  return ageMs >= 0 && ageMs <= windowMs;
}
```

`now` içerde `new Date()` ile gizlenmedi; test inject eder. Future event false,
boundary inclusive ve unit `Ms` isimde görünürdür.

## Engineering Perspective

Temporal contract şunları taşır: value kind, input grammar, timezone assumption,
precision, inclusive/exclusive boundaries, invalid policy, storage ve display formatı.
Database “timestamp” sözcüğü tek başına yeterli değildir. Clock'u dependency olarak
vermek testleri deterministik yapar.

## Real World Examples

- Token expiry: instant + elapsed duration.
- Doğum günü: calendar date; timezone-free label olabilir.
- Ders başlangıcı: local date-time + named timezone.
- Audit: UTC instant storage, user timezone display.
- SLA: elapsed duration; DST calendar operation değil.

## Common Mistakes

- Belirsiz locale text'i Date'e vermek.
- Invalid Date'i yalnız `instanceof` ile geçerli sanmak.
- Date objects'i `===` ile temporal equality için karşılaştırmak.
- UTC storage ile local display'i karıştırmak.
- Date setters ile input object'i mutate etmek.
- “Bir gün”ü her domain'de 24 saat sanmak.
- Test içinde gerçek clock okumak.

## Best Practices

1. Instant/calendar/local/duration türünü isimlendirin.
2. Input format ve timezone'u zorunlu sözleşme yapın.
3. Validity'yi `getTime()` ile kontrol edin.
4. Comparison'da epoch value kullanın.
5. Storage ve display formatını ayırın.
6. Clock'u inject edin; DST/boundary tests yazın.

## Hands-on Exercise

### Şimdi sen dene

Canonical UTC instant parser ve `isExpired(expiresAt, now)` yazın. Equality boundary
politikasını açıklayın; invalid/future/equal cases test edin.

### Hata avı

`new Date("01/08/2026")`, Date identity equality ve mutating setter kullanılan üç
bug'ı düzeltin.

### Bağımsız uygulama

ASEA çalışma oturumu için startedAt/endedAt elapsed duration hesaplayın. Negative ve
unsafe duration'ı reddedin.

### Gerçek proje bağlantısı

P07 snapshots'a canonical generatedAt instant ve injected clock ekleyin; storage UTC,
UI `tr-TR`/explicit timezone formatı kullansın.

## Reflection Questions

1. Calendar date neden otomatik instant değildir?
2. `Z` neyi açıklar?
3. Invalid Date nasıl tespit edilir?
4. 24 saat ile “yarın aynı saat” neden ayrışabilir?
5. Clock injection hangi testi mümkün kılar?

## Chapter Summary

Temporal reliability, Date API ezberinden önce domain kind ve environment varsayımını
belirler. Instant epoch milliseconds ile karşılaştırılır; strict ISO boundary'de
parse edilir; UTC storage ve explicit timezone display ayrılır. Duration ve calendar
operation karıştırılmaz.

## Key Takeaways

- Instant, calendar date ve duration farklıdır.
- Date time value epoch milliseconds taşır.
- Invalid Date, NaN time value içerir.
- Belirsiz text parse edilmemelidir.
- Date mutable'dır; snapshot için clone gerekir.
- DST nedeniyle calendar day ve 24 elapsed hours farklı olabilir.
- Clock injection deterministik test sağlar.

## Further Reading

- C34 numeric units/safe integers
- C36 temporal parser error boundary
- ECMA-402 Intl.DateTimeFormat
- P07 temporal reliability dossier

## References

- ECMA-262 Date Objects ve Date Time String Format
- ECMA-402 Intl.DateTimeFormat
- ASEA `V01-C35-BP01`, `V01-LO059`, `V01-LO060`
