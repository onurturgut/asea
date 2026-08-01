# V01-C27 Teknik Kararlar

## TD-01 — Outcome’lar canonical kayıtla hizalandı

LO044 behavior-preserving refactoring uygulamasını, LO045 sonucu dört
maintainability ölçütüyle savunmayı ölçer. Smell/risk açıklaması destekleyici kanıttır.

## TD-02 — Test her adımdan sonra

Toplu rewrite yerine tek dönüşüm ve test döngüsü kullanılır. Failure alanı son
küçük diff ile sınırlı kalır.

## TD-03 — Duplication bilgi temellidir

Metinsel benzerlik tek başına abstraction gerekçesi değildir. Aynı iş bilgisi ve
aynı değişiklik nedeni aranır.

## TD-04 — Metrikler karar desteğidir

Satır sayısı veya complexity sayısı tek kalite hükmü değildir. Readability,
cohesion, duplication, complexity ve test kanıtı birlikte değerlendirilir.

## TD-05 — C28 devir paketi

Refactor edilmiş kod, test sonuçları, before/after raporu, alternatifler ve kalan
riskler C28 program design dossier’ına aktarılır.
