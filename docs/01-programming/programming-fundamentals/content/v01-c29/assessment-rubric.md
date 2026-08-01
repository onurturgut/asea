# Değerlendirme Rubriği

| Boyut | Ağırlık | Başarı kanıtı |
|---|---:|---|
| Value/type ve binding modeli | 15 | Dynamic type'ı doğru açıklar |
| Coercion expression trace | 25 | Operator, conversion ve ara tür görünür |
| Equality analizi | 15 | Strict/loose mekanizma ve sınır doğru |
| Conversion boundary | 20 | Grammar → conversion → invariant zinciri |
| Test coverage | 15 | Empty, whitespace, malformed, ambiguous, lossy |
| Teknik savunma | 10 | Domain, loss, failure ve alternatif gerekçeli |

Başarı eşiği %75'tir. `Boolean("false")`, `Number("")` veya malformed prefix
vakalarını açıklayamamak outcome düzeyinde yeniden çalışma gerektirir.
