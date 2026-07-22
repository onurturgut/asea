---
document_type: "quiz"
document_id: "V01-C17-QZ01"
title: "V01-C17 Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
learning_outcomes: ["V01-LO025", "V01-LO026"]
last_updated: "2026-07-23"
---

# Quiz

Cevap anahtarını açmadan önce bütün yanıtları ve gerekçeleri yazın. Her soru bir
seçenekten çok kararınızın nedenini ölçer.

## Sorular

### Soru 1 — Kolay

Dört öğeli yoğun bir dizinin son geçerli indeksi hangisidir?

A. 4  
B. 3  
C. 2  
D. Dizinin türüne bağlıdır

### Soru 2 — Kolay

`values[values.length]` ifadesi normal bir yoğun dizide neyi okur?

A. Son öğeyi  
B. İlk öğeyi  
C. Son geçerli indeksin bir sonrasını  
D. Dizinin uzunluğunu

### Soru 3 — Kolay

Yalnız değerlere ihtiyaç duyulan sıradan dolaşmada en açık başlangıç seçimi hangisidir?

A. `for...in`  
B. `for...of`  
C. `while (true)`  
D. `Object.keys`

### Soru 4 — Kolay

`map` yönteminin temel sonuç sözleşmesi hangisidir?

A. İlk eşleşeni döndürür  
B. Kaynak diziyi siler  
C. Her mevcut öğeden sonuç öğesi üretip yeni dizi döndürür  
D. Yalnız boolean döndürür

### Soru 5 — Kolay

`filter` sonucu için hangisi doğrudur?

A. Her zaman kaynakla aynı uzunluktadır  
B. Her zaman tek değerdir  
C. Koşulu sağlayan öğelerden yeni dizi üretir  
D. Kaynağı zorunlu olarak değiştirir

### Soru 6 — Kolay

`const values = []` tanımı hakkında hangisi doğrudur?

A. `push` kesinlikle yasaktır  
B. Değişken başka diziye yeniden bağlanamaz, dizi içeriği yine değişebilir  
C. Dizi derin biçimde dondurulur  
D. Yalnız bir öğe eklenebilir

### Soru 7 — Kolay

Toplama indirgemesi için doğal başlangıç değeri hangisidir?

A. `null`  
B. `1`  
C. `0`  
D. İlk indeks

### Soru 8 — Orta

`[].reduce((sum, value) => sum + value)` ne yapar?

A. `0` döndürür  
B. `undefined` döndürür  
C. `TypeError` oluşturur  
D. Boş dizi döndürür

### Soru 9 — Orta

`[10, , 30]` dizisinin `length` değeri nedir?

A. 2  
B. 3  
C. 1  
D. Hata oluşur

### Soru 10 — Orta

Neden `filter(Boolean)` her veri temizleme işi için güvenli değildir?

A. Hiç öğe atmaz  
B. `0`, `false` ve boş metin gibi geçerli olabilecek değerleri de atar  
C. Yalnız nesnelerde çalışır  
D. Kaynağı sıralar

### Soru 11 — Orta

Bir diziyi dolaşırken öndeki öğeyi `splice` ile silmek hangi riski doğurur?

A. Bütün öğeler iki kez dolaşılır  
B. İndeks kayması nedeniyle sonraki öğe atlanabilir  
C. Dizi otomatik donar  
D. `length` hiç değişmez

### Soru 12 — Orta

`for...in` bir dizi üzerinde esas olarak ne üretir?

A. Öğelerin sayısal toplamını  
B. Özellik anahtarlarını  
C. Yeni diziyi  
D. Yalnız son öğeyi

### Soru 13 — Orta

`map` ile yeni dış dizi üretildiğinde nesne öğeleri için ne doğrudur?

A. Her nesne otomatik derin kopyalanır  
B. İç nesne referansları callback yeni nesne üretmezse paylaşılabilir  
C. Nesneler silinir  
D. Kaynak mutlaka donar

### Soru 14 — Orta

Boş puan dizisinin ortalamasını `0` yerine `null` seçmenin temel nedeni nedir?

A. `null` daha hızlıdır  
B. Gözlem yokluğu ile gerçek sıfır ortalamayı ayırır  
C. JavaScript yalnız `null` bölebilir  
D. Diziler sıfır tutamaz

### Soru 15 — Orta

`every` boş dizide hangi sonucu verir?

A. `true`  
B. `false`  
C. `null`  
D. Her zaman hata

### Soru 16 — Orta

Bir `map` callback'i süslü parantez kullanıp `return` yazmazsa sonuç öğeleri
genellikle ne olur?

A. `0`  
B. Kaynak öğe  
C. `undefined`  
D. Otomatik silinir

### Soru 17 — Orta

Minimum değerini `0` ile başlatmak `[4, 8]` girdisinde neden yanlıştır?

A. Döngü çalışmaz  
B. Koleksiyonda bulunmayan `0` minimum kalır  
C. Dizi sıralanır  
D. Sonuç `8` olur

### Soru 18 — Zor

Bir fonksiyon `scores.sort(...)` döndürürse çağıranın dizisi neden değişebilir?

A. `sort` yeni bağımsız dizi üretir  
B. `sort` geleneksel olarak diziyi yerinde değiştirir  
C. `const` bütün dizileri kopyalar  
D. Karşılaştırma fonksiyonu yasaktır

### Soru 19 — Zor

`map → filter → reduce` hattını tek `reduce` ile değiştirmek için en güçlü gerekçe
hangisidir?

A. Kod kesinlikle daha kısa olur  
B. `reduce` her zaman daha moderndir  
C. Gerçek ölçümde ara diziler/geçişler darboğazdır ve okunabilirlik korunabilir  
D. Test yazmaya gerek kalmaz

### Soru 20 — Zor

Asenkron callback kullanan `forEach` hakkında hangisi doğrudur?

A. Callback promise'larını otomatik bekler  
B. Dış `forEach` tamamlanması bütün asenkron işlerin bittiğini garanti etmez  
C. Her zaman sıralı çalışır  
D. `await` anahtar kelimesini yasaklar

### Soru 21 — Zor

Geçersiz puanları `filter` ile sessizce atıp ortalama almak hangi riski taşır?

A. Veri kalitesi sorununu gizleyip yanıltıcı sonuç üretir  
B. Diziyi büyütür  
C. İndeksleri negatife çevirir  
D. Ortalama daima `NaN` olur

### Soru 22 — Zor

Bir toplama döngüsünün uygun değişmezi hangisidir?

A. `total` her zaman son öğedir  
B. Her turun başında `total`, daha önce işlenmiş öğelerin toplamıdır  
C. İndeks hiçbir zaman artmaz  
D. Kaynak dizi her tur küçülür

### Soru 23 — Zor

Sığ kopya ile ilgili doğru ifade hangisidir?

A. Bütün iç içe nesneler bağımsız olur  
B. Yalnız dış yapı kopyalanabilir, iç referanslar paylaşılabilir  
C. Hiç yeni dizi oluşmaz  
D. Yalnız sayılarda çalışır

### Soru 24 — Zor

On milyon kayıt için performans kararı verirken ilk profesyonel adım hangisidir?

A. Bütün kodu tek `reduce` yapmak  
B. Gerçekçi veriyle profil/benchmark ve darboğaz ölçümü yapmak  
C. Testleri kaldırmak  
D. Her öğeyi derin kopyalamak

### Soru 25 — Zor

AI tarafından üretilen koleksiyon kodu için en güçlü kabul kanıtı hangisidir?

A. Kodun kısa olması  
B. AI'nın kendinden emin açıklaması  
C. Yazılı sözleşme, sınır testleri, mutation kontrolü ve kaynak doğrulaması  
D. Yöntem zincirinin tek satır olması

Yanıtlarınızı tamamladıktan sonra [cevap anahtarını](quiz-answer-key.md) açın.
