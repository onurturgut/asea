---
document_type: "interview-questions"
document_id: "V01-C31-INT01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 Mülakat Soruları

## Temel Sorular

1. `map`, `filter` ve `reduce` output sözleşmelerini karşılaştırın.
2. `find` ile `filter()[0]` arasında niyet ve çalışma davranışı farkı nedir?
3. `sort` ile `toSorted` identity açısından nasıl ayrılır?
4. Yeni array neden deep-copy garantisi değildir?
5. Reduce initial value neden önemlidir?

## Tasarım Sorusu

Bir milyon kaydı birkaç aşamada işleyen pipeline'ı tek zincir mi, ara değişkenler mi,
tek döngü mü yaparsınız? Okunabilirlik, allocation, erken durma, ölçüm ve bakım
koşullarına bağlı cevap verin.

## Güçlü Cevap

Aday mutlak stil kuralı söylemez; output shape, short-circuit, empty boundary,
ownership ve ölçülmüş performansı birlikte değerlendirir.
