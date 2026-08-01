# Lab — Güvenilir Conversion Boundary

**ID:** `V01-C29-L01`
**Süre:** 150 dakika
**Outcomes:** `V01-LO047`, `V01-LO048`

## Senaryo

C38 Node.js workflow'unuzda integer, boolean token ve identifier alanı alan küçük
bir CLI dönüştürücü oluşturun.

## Teslimler

1. 12 expression için expected/actual value+type trace.
2. Raw input data dictionary ve accepted grammar.
3. Conversion öncesi validation.
4. Explicit conversion ve post-conversion invariant kontrolü.
5. En az 15 test: normal, empty, whitespace, malformed, boundary, ambiguous, lossy.
6. `===`/`==` ve `Number`/`parseInt` karar kaydı.
7. Raw → validated → converted → verified görsel izi.
8. C09, C30 ve P07 devir notu.

## Başarı kapısı

Öğrenci iki coercion izini sözlü açıklamalı ve conversion policy'yi domain contract
ile savunmalıdır. Yalnız doğru final output yeterli değildir.
