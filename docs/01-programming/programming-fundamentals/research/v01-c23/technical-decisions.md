# V01-C23 Teknik Kararlar

## TD-01 — Tek bir evrensel işlem yok

Her analiz, sayılan temel işlemi açıkça söyleyecek. Aramada karşılaştırma,
sıralamada karşılaştırma/taşıma ve gerçek ölçümde süre birbirine çevrilmeyecek.

## TD-02 — O, Ω ve Θ ayrı öğretilecek

Big O “tam çalışma süresi” ya da otomatik olarak “en kötü durum” diye
tanımlanmayacak. Sınırın yönü ve analiz edilen durum ayrı ifadeler olacak.

## TD-03 — İki boyut korunacak

Bağımsız koleksiyonlar olduğunda her şeyi `n` altında gizlemek yerine `n` ve
`m` kullanılacak. Böylece `Θ(nm)` ilişkisi görünür kalacak.

## TD-04 — Benchmark ikincil kanıt

`performance.now()` deneyi öğrencinin büyümeyi gözlemlemesini sağlar. Isınma,
ortam ve gürültü nedeniyle deneysel süre asimptotik analizin yerine geçmez.

## TD-05 — Seçim bağlama bağlı

Algoritma önerisi, beklenen veri boyutu ve sıklığı belirtilmeden yapılmayacak.
Okunabilirlik ve bakım maliyeti birinci sınıf karar ölçütüdür.
