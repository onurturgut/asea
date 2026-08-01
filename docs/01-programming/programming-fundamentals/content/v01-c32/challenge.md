---
document_type: "challenge"
document_id: "V01-C32-CH01"
chapter_id: "V01-C32"
version: "0.1.0"
status: "Draft"
---

# C32 Challenge — Policy Engine

Attempt processing için doğrulama, eligibility ve result formatting callback'leri
alan küçük policy engine tasarlayın.

## Kısıtlar

- Her callback'in signature contract'ı yazılıdır.
- Invocation sırası deterministiktir ve test edilir.
- Validation false olduğunda sonraki callback'ler çağrılmaz.
- Callback throw davranışı belgelenir.
- En az iki policy seti kullanılır.
- Closure state ve async API kullanılmaz.

## Savunma

Callback sayısı, API okunabilirliği, test edilebilirlik ve yanlış yapılandırma riskini
değerlendirin. Alternatif açık if/else tasarımıyla karşılaştırın.
