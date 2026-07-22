---
document_type: "quiz"
document_id: "V01-C13-QZ01"
title: "V01-C13 Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
learning_outcomes: ["V01-LO019", "V01-LO020"]
passing_score: 75
last_updated: "2026-07-23"
---

# Quiz

Her soruyu gerekçesiyle yanıtlayın; ardından [cevap anahtarını](./quiz-answer-key.md) açın.

## Sorular

### Soru 1

Fonksiyonu sıradan kod bloğundan ayıran temel özellik hangisidir?

A. Girintili olması  
B. Çağrılabilir davranış sınırı sunması  
C. Yalnız bir satır olması  
D. Her zaman ekrana yazması

### Soru 2

Fonksiyon tanımı ne yapar?

A. Fonksiyonu mutlaka çalıştırır  
B. Çağrılabilir davranışı oluşturur  
C. Bütün testleri çalıştırır  
D. Sonucu yazdırır

### Soru 3

Fonksiyon sözleşmesinin parçası olmayan hangisidir?

A. Ön koşul  
B. Hata davranışı  
C. Çağıranın güvenmediği geçici değişken adı  
D. Gözlenebilir etki

### Soru 4

Ön koşul nedir?

A. Dönüşten sonra doğru olan garanti  
B. Geçerli çağrıdan önce doğru olması gereken koşul  
C. Fonksiyon adı  
D. Yalnız yorum

### Soru 5

Son koşul nedir?

A. Geçerli ve normal tamamlanan çağrı sonrası garanti  
B. İlk parametre  
C. Her zaman hata  
D. Çağrıdan önceki durum

### Soru 6

`console.log` ile `return` arasındaki doğru ayrım hangisidir?

A. İkisi aynıdır  
B. Log etkidir; return değeri ve denetimi çağırana taşır  
C. Return yalnız ekrana yazar  
D. Log fonksiyonu bitirir

### Soru 7

JavaScript fonksiyonu açık değer döndürmeden normal biterse sonuç nedir?

A. 0  
B. `null`  
C. `undefined`  
D. Son girdi

### Soru 8

`addOne(double(3))` ifadesinde önce hangi çağrı tamamlanır?

A. `addOne`  
B. `double`  
C. İkisi aynı anda  
D. Hiçbiri

### Soru 9

Çağıran hangisidir?

A. Çağrıyı başlatan kod  
B. Yalnız fonksiyon gövdesi  
C. Dönüş değeri  
D. Parametre adı

### Soru 10

Gizli girdi nedir?

A. Yorum satırı  
B. Sonucu etkileyen fakat görünür arayüzde bulunmayan bilgi  
C. Fonksiyon adı  
D. Sabit çıktı

### Soru 11

Global sayaç artırmak contract açısından nedir?

A. Gözlenebilir etki  
B. Ön koşul  
C. İmza  
D. Yalnız çıktı

### Soru 12

İmza ile tam sözleşme arasındaki fark nedir?

A. Fark yoktur  
B. İmza görünür çağrı biçimini, contract davranış sınırlarının tamamını açıklar  
C. Contract yalnız isimdir  
D. İmza hata politikasının tamamıdır

### Soru 13

Geçerli “bulunamadı” ile geçersiz tür neden ayrılmalıdır?

A. Kod uzasın diye  
B. Çağıran farklı durumlara doğru tepki verebilsin diye  
C. Test olmasın diye  
D. İsim değişsin diye

### Soru 14

Aynı contract'ı iki implementation karşılıyorsa hangisi doğrudur?

A. İç kod mutlaka aynı olmalıdır  
B. Gözlenebilir vaatler aynı kalabilirken mekanizma değişebilir  
C. Fonksiyon adları rastgele olmalıdır  
D. Test gerekmez

### Soru 15

Contract-first çalışmanın yararı nedir?

A. Belirsizliği koddan önce görünür kılar  
B. Bütün hataları otomatik çözer  
C. Testi gereksiz yapar  
D. Yalnız dosya sayısını artırır

### Soru 16

Bir fonksiyon geçerli bir yolda `return` çalıştırmıyorsa hangi risk vardır?

A. Otomatik yeniden çağrı  
B. Beklenmeyen `undefined`  
C. Her zaman sonsuz döngü  
D. Sözdizimi daima bozulur

### Soru 17

Fonksiyon adı `calculateTotal` fakat yalnız yazdırıyorsa temel sorun nedir?

A. İsim ve contract beklentisi davranışla uyuşmaz  
B. Parantez fazladır  
C. Sayı kullanılmıştır  
D. Fonksiyon kısa değildir

### Soru 18

Ön koşul doğruyken son koşul bozulursa ilk şüphe nereye yönelir?

A. Çağrılan implementation'a  
B. Dosya adına  
C. Kullanıcının klavyesine  
D. Yorumlara

### Soru 19

Contract'tan hangi test grupları doğrudan çıkar?

A. Yalnız başarılı  
B. Normal, sınır, geçersiz ve etki/hata vakaları  
C. Yalnız performans  
D. Yalnız ekran görüntüsü

### Soru 20

Bir hata fırlatıldığında normal dönüş için hangisi doğrudur?

A. Aynı anda değer döner  
B. Normal return yolu tamamlanmaz  
C. Hata yok sayılır  
D. Her zaman `null` döner

### Soru 21

Birden çok argüman çağrısında JavaScript değerlendirme sırası hangisidir?

A. Sağdan sola  
B. Soldan sağa  
C. Rastgele  
D. Alfabetik

### Soru 22

“Üç geçici değişken ve for döngüsü kullanır” neden zayıf contract maddesidir?

A. Çağıranın ihtiyaç duymadığı implementation ayrıntısını sabitler  
B. Çok açık olduğu için  
C. Hata içermez  
D. Test edilemez olduğu için değil

### Soru 23

AI fonksiyon üretmeden önce en doğru ilk adım nedir?

A. Eksik contract sorularını çıkarmak  
B. Kodu doğrudan kabul etmek  
C. Testleri silmek  
D. Framework eklemek

### Soru 24

Çağrı çerçevesi zihinsel modeli neyi açıklar?

A. Her aktif çağrının yerel bilgisi ve dönüş noktası olduğunu  
B. Dosyanın boyutunu  
C. İnternet hızını  
D. CSS kuralını

### Soru 25

Bir contract değişikliği nasıl ele alınmalıdır?

A. Her zaman sessiz refactoring olarak  
B. Çağıran, test ve belge etkileri olan davranış değişikliği olarak  
C. Yalnız yorum değişimi olarak  
D. Kanıtsız biçimde
