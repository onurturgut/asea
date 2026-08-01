---
document_type: "technical-decisions"
document_id: "V01-C31-TD01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Teknik ve Pedagojik Kararlar

## TD-01 — Method Listesi Yerine Output Sorusu

Karar: Yöntemler API kataloğu olarak değil; boolean, element, array veya aggregate
output ihtiyacına göre öğretilir.

## TD-02 — C32 Bağımlılığını Korumak

Karar: Callback'in higher-order control-flow mekanizması yeniden öğretilmez. C31
callback input/output sözleşmesini collection pipeline içinde uygular.

## TD-03 — İki Katmanlı Identity

Karar: Her örnekte array root ve object element identity ayrı izlenebilir. Yeni array
deep-copy gibi sunulmaz.

## TD-04 — Initial Accumulator Zorunlu Varsayımı

Karar: Öğretim örneklerinde `reduce` initial value açık yazılır. Empty-input semantiği
ve accumulator type'ı görünür tutulur.

## TD-05 — Mutation İçin Koşullu Karar

Karar: Mutating yöntemler yasaklanmaz. Local/private ownership durumunda savunulabilir;
shared input, UI state ve snapshot'larda non-mutating yaklaşım varsayılan yönelimdir.

## TD-06 — Modern Copying Yöntemleri

Karar: `toSorted`, `toReversed` ve `toSpliced` öğretilir; runtime compatibility üretim
ortamının destek matrisinde ayrıca doğrulanmalıdır. Fallback olarak spread + mutating
method yaklaşımı yalnız bilinçli shallow-copy açıklamasıyla gösterilebilir.

## TD-07 — Kapsam Sınırı

Sorting implementasyonu C22'ye, search complexity C21'e, numeric reliability C34'e,
iterators/generators ve async streams ileri akademilere bırakılır.
