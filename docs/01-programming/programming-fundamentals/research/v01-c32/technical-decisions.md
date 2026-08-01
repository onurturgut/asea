---
document_type: "technical-decisions"
document_id: "V01-C32-TD01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Teknik ve Pedagojik Kararlar

## TD-01 — Function Value Önce

Karar: “Higher-order” teriminden önce function reference ve invocation result somut
value trace ile ayrılır.

## TD-02 — Callback Bir İlişkidir

Karar: Function syntax'ı callback üretmez; başka caller'a çağrılmak üzere verilmesi
callback rolünü oluşturur.

## TD-03 — Beş Parçalı Contract

Karar: Callback sözleşmesi caller, timing/count, arguments, return ve error alanlarını
zorunlu içerir. Parameter sayısı tek başına compatibility kanıtı değildir.

## TD-04 — Senkron Baseline

Karar: İlk higher-order örnekler senkrondur. Timer/event yalnız host-managed yönelim
olarak anılır; Promise ve event loop ayrı chapter'a bırakılır.

## TD-05 — Signature Mismatch Vakası

Karar: `map(parseInt)` ezber trivia olarak değil, caller ve callback parameter
anlamlarının uyuşmaması şeklinde tam çağrı iziyle çözülür.

## TD-06 — Closure Sınırı

Karar: Existing named function seçip döndürmek gösterilir. Captured configuration,
retained environment ve private state C33'e bırakılır.

## TD-07 — Side Effect İçin Koşullu Yaklaşım

Karar: Predicate/mapper callback'lerinde side-effect-free yönelim tercih edilir;
notification ve test spy gibi etkiler açık contract ve invocation count ile yönetilir.
