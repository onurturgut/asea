---
document_type: "flashcards"
document_id: "V01-C17-FC01"
title: "V01-C17 Flashcards"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
last_updated: "2026-07-23"
---

# Flashcards

## Kartlar

### Kart 1

**Ön:** Koleksiyon nedir?  
**Arka:** Birden çok değeri erişim ve dolaşma sözleşmesiyle tutan veri yapısı ailesidir.

### Kart 2

**Ön:** Dizi nedir?  
**Arka:** Öğelere çoğunlukla sayısal konumla erişilen sıralı koleksiyondur.

### Kart 3

**Ön:** İlk dizi indeksi nedir?  
**Arka:** `0`.

### Kart 4

**Ön:** Son geçerli indeks nasıl bulunur?  
**Arka:** `array.length - 1`.

### Kart 5

**Ön:** Sınır dışı JavaScript dizi okuması genellikle ne verir?  
**Arka:** `undefined`.

### Kart 6

**Ön:** `array[-1]` son öğeyi verir mi?  
**Arka:** Hayır; son öğe için `array.at(-1)` kullanılabilir.

### Kart 7

**Ön:** Seyrek dizi nedir?  
**Arka:** İndeks aralığında atanmış olmayan boş konumlar içeren dizidir.

### Kart 8

**Ön:** Boş konum ve `undefined` aynı mıdır?  
**Arka:** Hayır; boş konumda ilgili özellik mevcut değildir.

### Kart 9

**Ön:** Dolaşma sözleşmesinin beş parçası nedir?  
**Arka:** Başlangıç, sınır, adım, geçerli öğe ve değişmez.

### Kart 10

**Ön:** `for...of` ne dolaşır?  
**Arka:** Yinelenebilir yapının değerlerini.

### Kart 11

**Ön:** `for...in` ne dolaşır?  
**Arka:** Enumerable özellik anahtarlarını.

### Kart 12

**Ön:** `map` ne üretir?  
**Arka:** Her mevcut öğenin dönüşüm sonucundan yeni dizi.

### Kart 13

**Ön:** `filter` ne üretir?  
**Arka:** Koşulu sağlayan öğelerden yeni dizi.

### Kart 14

**Ön:** `reduce` ne yapar?  
**Arka:** Öğeleri biriktiriciyle tek sonuçta birleştirir.

### Kart 15

**Ön:** Toplamın kimlik değeri nedir?  
**Arka:** `0`.

### Kart 16

**Ön:** Başlangıç değersiz `reduce`, boş dizide ne yapar?  
**Arka:** `TypeError` oluşturur.

### Kart 17

**Ön:** `map` sonucunu kullanmamak neden şüphelidir?  
**Arka:** Dönüşüm yerine yan etki amaçlandığını ve gereksiz dizi üretildiğini gösterebilir.

### Kart 18

**Ön:** `filter(Boolean)` riski nedir?  
**Arka:** `0`, `false` ve boş metin gibi geçerli değerleri atabilir.

### Kart 19

**Ön:** `const` diziyi dondurur mu?  
**Arka:** Hayır; yalnız değişkenin yeniden bağlanmasını engeller.

### Kart 20

**Ön:** Sığ kopya neyi paylaşabilir?  
**Arka:** İç nesne ve dizi referanslarını.

### Kart 21

**Ön:** Minimum neden her zaman `0` ile başlatılmaz?  
**Arka:** Pozitif dizide koleksiyonda olmayan yanlış minimum üretir.

### Kart 22

**Ön:** Boş ortalama neden `0` olmayabilir?  
**Arka:** Gözlem yokluğu ile gerçek sıfır ortalamayı ayırmak gerekir.

### Kart 23

**Ön:** Mutation sırasında dolaşma riski nedir?  
**Arka:** İndeks/sıra değişip öğeler atlanabilir veya tekrar ziyaret edilebilir.

### Kart 24

**Ön:** `some` ne zaman durabilir?  
**Arka:** İlk doğru sonuçta.

### Kart 25

**Ön:** `every` ne zaman durabilir?  
**Arka:** İlk yanlış sonuçta.

### Kart 26

**Ön:** `every([])` sonucu nedir?  
**Arka:** `true`.

### Kart 27

**Ön:** Dizi doğrulamada `Array.isArray` ne sağlar?  
**Arka:** Değerin JavaScript dizisi olup olmadığını güvenilir biçimde denetler.

### Kart 28

**Ön:** Tek geçiş ne zaman düşünülür?  
**Arka:** Ölçülmüş geçiş/ara bellek maliyeti önemliyse ve açıklık korunabiliyorsa.

### Kart 29

**Ön:** Koleksiyon testinin temel üç büyüklüğü nedir?  
**Arka:** Boş, tek öğeli ve çok öğeli.

### Kart 30

**Ön:** AI koleksiyon kodunun kabul kanıtı nedir?  
**Arka:** Sözleşme, sınır testleri, mutation kontrolü, ölçüm ve resmî kaynak doğrulaması.
