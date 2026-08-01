---
document_type: "summary"
document_id: "V01-C37-SM01"
chapter_id: "V01-C37"
---
# C37 Kısa Özet

Modül sayısı kalite ölçüsü değildir. Güçlü organizasyon; tek ve açıklanabilir
sorumluluklar, dar public API'ler, görünür bağımlılıklar, sahipli state ve side-effect-free
import davranışı üretir. Named imports graph kenarlarını gösterir. Cycle her zaman syntax
hatası değildir fakat initialization ve bakım riski olarak incelenmelidir. Uygulama,
composition root'ta birleştirilir; domain dış dünyadan bağımsız kalır.
