---
document_type: challenge
challenge_id: "V01-C05-CH01"
title: "Kayıplı Dönüşümleri Yakala Challenge'ı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C05"
difficulty: "Intermediate"
estimated_time: "75 minutes"
learning_outcomes: ["V01-LO007", "V01-LO008"]
assessment_id: "V01-C05-AS01"
language: "tr"
---

# Kayıplı Dönüşümleri Yakala Challenge'ı

## Scenario

AI şu normalization kurallarını öneriyor:

```js
const normalized = {
  orderId: Number(raw.orderId),
  enabled: Boolean(raw.enabled),
  amount: parseFloat(raw.amount),
  missingCount: Number(raw.missingCount || 0),
  label: String(raw.label),
};
```

## Task

1. Requirements olmadan karar verilemeyen en az on soruyu yaz.
2. Precision loss, meaning loss ve absence collapse üreten en az sekiz counterexample oluştur.
3. Her line için accept, reject veya replace kararı ver.
4. Raw-preserving result-object boundary tasarla.
5. En az 15 test ve expected output üret.
6. AI önerisinin hangi kısmını neden reddettiğini resmî kaynak davranışıyla savun.

## Constraints

Yeni framework/package yoktur. Domain requirements uydurulmaz; eksik olan açıkça
`UNRESOLVED` işaretlenir. Final çözümden önce risk register teslim edilir.

## Definition of Done

Hiçbir lossy conversion sessiz kabul edilmez; her policy source/target types, grammar,
range, absence, failure ve evidence içerir.
