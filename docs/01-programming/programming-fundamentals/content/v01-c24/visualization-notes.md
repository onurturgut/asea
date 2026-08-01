# Görselleştirme Notları

## Olay zinciri

Yatay akış: defect → error state → failure → symptom. Exception ayrı renkte,
zincirin bazı noktalarında oluşabilen kontrol akışı olayı olarak gösterilmeli;
zincirin zorunlu adımı gibi çizilmemelidir.

## Sınıflandırma matrisi

Satırlar failure türü; sütunlar başlangıç aşaması, birincil kanıt, örnek ve uygun
ilk müdahale. Hücreler yalnız renkle ayrılmamalı, metin etiketi taşımalıdır.

## Error contract kartı

Başarı ve failure iki görünür dal olsun. `code`, `userMessage`, `diagnostic`,
`recoverable` ve `safeState` alanları tooltip yerine sürekli okunabilir görünmelidir.
