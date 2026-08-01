# Kısa Özet

JavaScript'te type variable adına değil runtime value'ya aittir. Operatorlar kendi
contract'larına göre explicit olmayan conversion başlatabilir: `+` concatenation,
arithmetic numeric conversion, Boolean context truthiness ve `==` loose equality
algoritmasını kullanabilir.

Güvenilir program raw input'u önce grammar ile doğrular, explicit conversion yapar,
sonra result type/range/invariant'ı kontrol eder. Domain içinde canonical type ve
strict equality kullanılır. Empty, whitespace, `NaN`, ambiguity ve information loss
ayrı test edilir.
