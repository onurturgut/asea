---
document_type: "technical-decisions"
document_id: "V01-C29-TD001"
chapter_id: "V01-C29"
status: "Draft"
decided_at: "2026-08-01"
---

# V01-C29 Teknik ve Pedagojik Kararlar

## TD-01 — Blueprint canonical registry'den üretildi

Fiziksel C29 blueprint bulunmadığı için `04-chapter-registry`, `05-lesson-registry`,
`06-learning-outcomes`, migration kararı ve C38 outgoing dependency kullanıldı.
`LO047` Analyze, `LO048` Evaluate düzeyinde tutuldu.

## TD-02 — Folklore yerine mekanizma

“JavaScript gariptir” ve “`==` her zaman kötüdür” ifadeleri öğretim açıklaması
sayılmayacak. Her sonuç exact value/type, operator veya equality algoritması ve
intermediate result ile açıklanacak.

## TD-03 — `typeof` language-type oracle olarak sunulmayacak

`typeof null === "object"` tarihsel operator davranışı; Null ise canonical
specification'da ayrı type'tır. `NaN` ayrıca Number value olarak anlatılacak.

## TD-04 — Explicit conversion tek başına güvenlik sayılmayacak

`Number("") === 0` ve `Boolean("false") === true` örnekleri generic conversion
ile domain policy arasındaki farkı gösterecek. Boundary sırası grammar validation
→ explicit conversion → result validation olacaktır.

## TD-05 — `Number`/`parseInt` contract üzerinden seçilecek

Tüm token numeric olmalıysa grammar + `Number`; prefix extraction gerçekten
isteniyorsa `parseInt` değerlendirilecek. Araç sıralaması ezberletilmeyecek.

## TD-06 — Devamlılık C09 ve P07'ye bağlanacak

C29 truthiness/equality kanıtını C09'a; canonical domain values ve conversion
boundary artışını C30 ile `V01-P07` projesine aktaracak.
