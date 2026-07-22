---
document_type: "quiz"
document_id: "V01-C12-QZ01"
title: "V01-C12 Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C12"
learning_outcomes: ["V01-LO018"]
passing_score: 75
last_updated: "2026-07-23"
---

# Quiz

Cevapları görmeden tamamlayın. Her sorunun altına seçiminizi ve gerekçenizi yazın; ardından [cevap anahtarını](./quiz-answer-key.md) açın.

## Sorular

### Soru 1

İç içe dalda iç koşul ne zaman değerlendirilir?

A. Program başlar başlamaz  
B. İlgili dış dal seçildiğinde  
C. Yalnız `else` varsa  
D. Her zaman

### Soru 2

Parantezsiz iç içe `if` yapısındaki `else` varsayılan olarak nereye bağlanır?

A. İlk `if`  
B. En uzun koşul  
C. En yakın eşleşmemiş `if`  
D. Hiçbirine

### Soru 3

İki dış ve üç iç tur sabitse iç gövde toplam kaç kez çalışır?

A. 5  
B. 6  
C. 8  
D. 9

### Soru 4

İç tur sayıları 1, 2, 3 ve 4 ise toplam kaçtır?

A. 8  
B. 10  
C. 12  
D. 16

### Soru 5

Etiketsiz `break` iç içe döngüde neyi sonlandırır?

A. Programı  
B. Bütün döngüleri  
C. En yakın döngüyü  
D. Yalnız koşulu

### Soru 6

İç döngüde `continue` ne yapar?

A. Dış döngüyü bitirir  
B. Mevcut iç turun kalanını atlar  
C. Fonksiyondan çıkar  
D. Sayacı sıfırlar

### Soru 7

Uygulanabilir yol nedir?

A. Girintide görünen her blok  
B. Veri ve kurallar altında gerçekten izlenebilen yol  
C. Yalnız başarılı yol  
D. En kısa yol

### Soru 8

Yol tablosunda hangisi mutlaka bulunmalıdır?

A. Yalnız satır sayısı  
B. Yalnız çıktı  
C. Kararlar, durum değişimleri ve sonuç  
D. Dosya boyutu

### Soru 9

İç sayacın dışarıda tanımlanması hangi riski oluşturur?

A. Sözdizimi daima bozulur  
B. Önceki dış turun değeri sonraki tura sızabilir  
C. `if` çalışmaz  
D. Program daha hızlı olur

### Soru 10

`if (A) { if (B) { action(); } }` hangi koşulda güvenle `if (A && B)` olabilir?

A. Her zaman  
B. Dış/İç blokta korunması gereken başka davranış yoksa  
C. A yanlışsa  
D. B pahalıysa

### Soru 11

Koşul sırasının değişmesi neden davranışı değiştirebilir?

A. Değişken adları uzar  
B. Kısa devre ve yan etki sırası değişebilir  
C. Girinti artar  
D. Yorumlar silinir

### Soru 12

Koruma koşulunun ana amacı nedir?

A. Bütün koşulları silmek  
B. Sınır/geçersiz vakayı erken ele alıp ana yolu açmak  
C. Döngüyü hızlandırmayı garanti etmek  
D. Testi gereksiz kılmak

### Soru 13

İlk hatada dönmek hangi gereksinimde uygun olmayabilir?

A. Tek hata sonucu isteniyorsa  
B. Bütün doğrulama sorunları birlikte gösterilecekse  
C. Fonksiyon kısa ise  
D. Değişken `const` ise

### Soru 14

Kontrol akışı karmaşıklığı metriği nasıl kullanılmalıdır?

A. Evrensel kalite hükmü olarak  
B. İnceleme sinyali ve bağlamla birlikte  
C. Test yerine  
D. Yalnız satır saymak için

### Soru 15

Karakterizasyon testi neyi kaydeder?

A. İstenen gelecekteki tasarımı  
B. Sistemin mevcut gözlenebilir davranışını  
C. Yalnız performansı  
D. Kod stilini

### Soru 16

Aynı çıktı refactoring eşdeğerliğini neden tek başına kanıtlamaz?

A. Dosya adı değişebilir  
B. Durum, yan etki, sıra veya hata davranışı değişmiş olabilir  
C. Kod kısa olabilir  
D. Test hızlı olabilir

### Soru 17

İki koşul mantıksal olarak aynı anda doğru olamıyorsa ilgili birleşim nedir?

A. Sınır yol  
B. Uygulanamaz yol  
C. Ana yol  
D. Sonsuz yol

### Soru 18

Bir döngü 12 adayı kontrol edip 5 eşleşme bulup 3 sonuç kaydediyorsa aday sayısı kaçtır?

A. 3  
B. 5  
C. 8  
D. 12

### Soru 19

Bir durum bayrağındaki temel risk nedir?

A. Boolean olamaz  
B. Temsil ettiği diğer durumla tutarsızlaşabilir  
C. Döngüde okunamaz  
D. `const` olmak zorundadır

### Soru 20

İlk ayrışma yöntemi neyi arar?

A. Son görülen yanlış çıktıyı  
B. Beklenen ve gerçek durumun ilk farklılaştığı adımı  
C. En uzun fonksiyonu  
D. İlk yorumu

### Soru 21

AI refactoring önerisinde ilk istenecek kanıtlardan biri hangisidir?

A. Daha kısa değişken adları  
B. Önce/sonra yol ve test eşlemesi  
C. Daha fazla yorum  
D. Yeni framework

### Soru 22

Sabit olmayan iç sınırın toplam çalışması nasıl bulunur?

A. Daima çarpılır  
B. Her dış turun iç çalışma sayıları toplanır  
C. Yalnız dış sınır alınır  
D. Tahmin edilir

### Soru 23

Adlandırılmış koşulun yararı nedir?

A. Davranışı otomatik düzeltir  
B. Alan niyetini ve ara gözlemi görünür kılar  
C. Testleri siler  
D. Bütün yan etkileri kaldırır

### Soru 24

Bir `return` komutu hangi kapsamı sonlandırır?

A. En yakın `if`  
B. Mevcut fonksiyon  
C. En yakın döngü  
D. Dosya

### Soru 25

Davranış koruyan dönüşümün güvenli sırası hangisidir?

A. Yeniden yaz, sonra gereksinimi sor  
B. Yol çıkar, testle sabitle, küçük dönüşüm yap, tekrar doğrula  
C. Metriği düşür, testleri sil  
D. AI çıktısını doğrudan kabul et
