---
document_type: "technical-decisions"
document_id: "V01-C33-TD01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Teknik ve Pedagojik Kararlar

## TD-01 — Snapshot Sloganını Reddetmek

Karar: Closure “değer hatırlar” diye bırakılmaz; function'ın binding resolution
erişimini koruduğu mutation deneyiyle gösterilir.

## TD-02 — Frame ve Environment Ayrımı

Karar: Outer call frame tamamlanır. Returned function'ın environment erişimi ayrı
kavramsal çizimde gösterilir; stack frame'in sürekli aktif kaldığı söylenmez.

## TD-03 — Specification Modeli Sınırı

Karar: Environment Record ve `[[Environment]]` öğretim modelidir; JS property,
memory address veya zorunlu engine veri yapısı gibi sunulmaz.

## TD-04 — Factory Instance Kanıtı

Karar: Closure öğretimi tek counter ile bitmez. İki factory invocation için E1/E2
ve F1/F2 trace, LO055'in zorunlu kanıtıdır.

## TD-05 — Encapsulation İçin Reference Hygiene

Karar: Internal mutable object doğrudan döndürülmez. Primitive query veya fresh
snapshot kullanılır; commands invariant'ı her transition'da korur.

## TD-06 — Güvenlik ve Memory İddiasını Sınırlamak

Karar: Closure private-by-interface boundary sağlar; security vault değildir. Kesin
GC zamanı verilmez, lifetime reachability/ownership üzerinden tartışılır.

## TD-07 — Downstream Devir

Karar: C33, C30 state boundary kapısını kapatır; C17 callback lifetime ve C37 module
state organization kararlarına explicit evidence verir.
