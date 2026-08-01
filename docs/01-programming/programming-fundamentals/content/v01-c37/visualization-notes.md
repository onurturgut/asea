---
document_type: "visualization-notes"
document_id: "V01-C37-VZ01"
chapter_id: "V01-C37"
---
# C37 Görselleştirme Notları

Ana görsel soldan sağa tek yönlü graph olmalıdır: `main → adapter → application → domain`.
İkinci görselde iki yönlü kırmızı ok cycle'ı, üçüncüde exported mutable object çevresindeki
çoklu yazarlar state ownership kaybını göstermelidir. Ok etiketi import edilen sembolü
yazmalı; renk tek başına anlam taşımamalı ve metin alternatifi bulunmalıdır.
