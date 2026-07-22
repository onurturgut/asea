---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-019"
supporting_document_type: "Compatibility Report"
title: "Program, Algoritma ve Kesin Talimat Alıştırmaları"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Learning Designer"
source_ids:
  - "V01-C01-EX01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "../../../assessments/01-exercise-01-program-instruction-analysis.md"
  - "../../assets/lesson-01/exercises.md"
---

# Program, Algoritma ve Kesin Talimat Alıştırmaları

## Objective

Program, algoritma, talimat, hesaplama ve yürütme kavramlarını yeni durumlarda
ayırt etmek; belirsiz bir süreci kesin, sıralı ve test edilebilir talimatlara
dönüştürmek.

## Instructions

- Görevleri sırayla tamamlayın.
- Cevabı görmeden önce gerekçenizi yazın.
- Her sınıflandırmada en az bir ayırıcı ölçüt kullanın.
- Kod görevlerinde önce beklenen çıktıyı tahmin edin.
- Sonuç dosyanızı `v01-c01-exercises.md` adıyla saklayın.

## Exercises

### 1. Kavram eşleştirme

Aşağıdaki ifadeleri niyet, algoritma, program, yürütme veya çıktı olarak
sınıflandırın ve her karar için tek cümle gerekçe yazın:

1. “Dosyaları tarihe göre sırala.”
2. Bir sıralama yönteminin dilden bağımsız adımları.
3. `sort-files.js` kaynak dosyası.
4. Node.js sürecinin dosyayı çalıştırması.
5. Sıralanmış dosya adları listesi.

### 2. Karşı örnek üretme

Algoritma, program ve talimat için birer örnek ve birer karşı örnek yazın.
Karşı örneğin neden ilgili kavrama girmediğini açıklayın.

### 3. Girdi–işlem–çıktı

Bir restoran hesabını dört kişi arasında bölme sürecini modelleyin. En az üç
girdi, iki işlem, iki çıktı ve iki geçersiz durum belirleyin.

### 4. Çalışmak ile doğru olmak

Aşağıdaki program çalışır:

```javascript
const price = 40;
const quantity = 3;
const total = price + quantity;

console.log(total);
```

Gereksinim toplam satış tutarını hesaplamaksa programın neden yanlış olduğunu,
beklenen çıktıyı ve bunu yakalayan testi yazın.

### 5. Belirsizlik avı

“Kullanıcıları temizle” talimatında en az altı gizli karar bulun. Veri silme,
boş alan, yinelenen kayıt, hata, yetki ve başarı kanıtı başlıklarını düşünün.

### 6. Tek eylem testi

“Dosyayı aç, içeriği kontrol et ve doğruysa gönder” talimatını her biri tek
gözlenebilir eylem içeren adımlara ayırın.

### 7. Sıra bağımlılığı

Bir kullanıcı hesabı oluşturma sürecinde şu adımların neden rastgele sırada
uygulanamayacağını açıklayın: girdiyi doğrula, benzersizliği kontrol et, kaydı
oluştur, başarı mesajı üret.

### 8. Sekiz kesin talimat

Çay hazırlama, toplantı odası ayırma veya ürün iade etme süreçlerinden birini
seçin. En az sekiz sıralı ve tek anlamlı talimata dönüştürün.

### 9. Varsayım kaydı

Sekizinci alıştırmadaki süreciniz için en az beş varsayım yazın. Her varsayımın
yanlış olması hâlinde hangi talimatın değişeceğini belirtin.

### 10. Normal durum testi

Talimat diziniz için normal bir başlangıç durumu, uygulanacak adımlar ve
beklenen son durumu yazın.

### 11. Sınır durumu testi

Aynı süreçte en küçük, en büyük, boş veya son adıma yakın bir sınır durumu
seçin. Beklenen davranışı açıklayın.

### 12. Geçersiz durum testi

Eksik veya geçersiz girdi verildiğinde sistemin ne yapacağını tanımlayın.
“Hata verir” yerine gözlenebilir hata davranışını yazın.

### 13. Kör uygulama

Talimatlarınızı daha önce görmemiş bir kişiye yalnız yazılı metni vererek
uygulatın. Sorulan soruları ve ilk sapma noktasını kaydedin.

### 14. Kanıta dayalı revizyon

Kör uygulama sonucunda en az iki talimatı değiştirin. Eski talimatı, gözlenen
sorunu, yeni talimatı ve değişikliğin başarı ölçütünü tabloya yazın.

### 15. Transfer görevi

Günlük süreç için geliştirdiğiniz kesinlik kurallarını bir yazılım özelliğine
uygulayın: “Kullanıcı profilini güncelle.” Girdi, doğrulama, başarı, hata ve
test sözleşmesini oluşturun.

## Completion Criteria

- On beş görevin tümü tamamlanmıştır.
- Kavram sınıflandırmaları gerekçe içerir.
- En az sekiz talimatlı bir süreç ve üç test durumu vardır.
- Kör test kanıtı ve revizyon kaydı sunulmuştur.
- `V01-LO001` ve `V01-LO002` için ayrı kanıt gösterilmiştir.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Çalışan Örnekler](./examples.md)
- [Laboratuvar](./lab.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
