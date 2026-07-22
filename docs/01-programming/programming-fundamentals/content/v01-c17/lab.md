---
document_type: "lab"
document_id: "V01-C17-L01"
title: "Analyze a Score Collection"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
learning_outcomes: ["V01-LO025", "V01-LO026"]
last_updated: "2026-07-23"
---

# Laboratuvar — Puan Koleksiyonu Analizi

## Senaryo

ASEA değerlendirme hizmeti bir oturumdaki öğrenci puanlarını analiz edecektir.
Eski prototip yanlış türleri sessizce dışarıda bırakmakta, boş sınıfta `NaN`
göstermekte ve sıralama sırasında kaynak veriyi değiştirmektedir. Göreviniz güvenilir
bir analiz modülü ve doğrulama kanıtı üretmektir.

## Gereksinimler

- Node.js ile çalışan bir `.js` modülü oluşturun.
- Girdi yalnız `0–100` aralığında sonlu sayılardan oluşan dizi olmalıdır.
- Dizi olmayan girdi ve bütün geçersiz öğeler indeksleriyle raporlanmalıdır.
- Geçersiz veri varsa kısmi istatistik üretilmemelidir.
- Geçerli veride adet, toplam, ortalama, minimum, maksimum, geçen/kalan sayısı,
  harf notu dağılımı ve sıralı kopya üretilmelidir.
- Kaynak dizi hiçbir aşamada değiştirilmemelidir.
- Boş koleksiyon sözleşmesi açıkça uygulanmalıdır.

## Görevler

1. `isValidScore`, `validateScores`, `toLetterGrade`, `summarizeScores` ve
   `analyzeScores` sözleşmelerini yazın.
2. İlk doğru sürümü açık `for...of`, `map` ve `filter` aşamalarıyla kurun.
3. Normal, boş, tek, tekrar, sınır ve geçersiz durumları içeren en az 12 assertion
   yazın.
4. Kaynak dizinin çağrıdan önceki kopyasıyla çağrı sonrasını karşılaştırın.
5. En az bir hatayı debugger veya izleme tablosuyla teşhis edip kayıt altına alın.
6. Tek geçişli alternatif özet üretin ve iki çözümü karşılaştırın.

## Teslim Edilecekler

- Çalışan kaynak kod.
- `README.md` içinde çalıştırma komutu ve veri sözleşmesi.
- Test çıktısı ve test matrisi.
- Bir dolaşma değişmezi.
- Kaynak koruma kanıtı.
- En az 300 kelimelik teknik karar kaydı.

## Bonus Challenge

Analizi, geçerli puanlarla geçersiz kayıtları ayrı kanallarda raporlayacak biçimde
genişletin; ancak varsayılan “geçersiz varsa analiz yok” davranışını koruyun.

## Evaluation Criteria

Değerlendirme doğruluk %35, sınır/hata yönetimi %25, test kanıtı %20, okunabilirlik
%10 ve karar açıklaması %10 ağırlıklarıyla yapılır. Ayrıntılar
[değerlendirme rubriğinde](assessment-rubric.md) bulunur.
