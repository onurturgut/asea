# Alıştırma Çözümleri

## Örnek requirement

`REQ-STATUS-01`: Yüzde 100 ise program `completed`, 80–99 aralığında `on-track`,
0–79 aralığında `in-progress` üretmelidir.

## Örnek acceptance criterion

100 planlanan ve 79 tamamlanan dakika `79` ve `in-progress` üretmelidir. Bu vaka
80 boundary'sinin alt komşusudur.

## Type gerekçesi

Dakikalar number'dır; toplama ve oran hesabına katılır. Topic string'dir; insan
tarafından okunur. Kısmi ilerleme gerektiği için completed boolean seçilmez.

## Function map gerekçesi

Validation, totals, percentage ve status ayrı değişiklik nedenlerine sahiptir.
Orkestratör yalnız sırayı ve sonuç object'ini kurar.

## Teslim değerlendirmesi

Tek demo; invalid input, boundary, requirement coverage, limitation ve
reproducibility kanıtı vermez. Test raporu ve traceability matrix gerekir.
