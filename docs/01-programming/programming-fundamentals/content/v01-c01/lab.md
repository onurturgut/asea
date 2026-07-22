---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-024"
supporting_document_type: "Compatibility Report"
title: "Human Instruction Interpreter"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Learning Designer"
source_ids:
  - "V01-C01-L01"
  - "V01-C01"
  - "V01-C01-EX01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "../../../labs/01-lab-01-human-instruction-interpreter.md"
  - "../../assets/lesson-01/lab.md"
---

# Human Instruction Interpreter Laboratuvarı

## Objective

Belirsiz bir günlük süreci en az sekiz kesin talimata dönüştürmek, talimatları
bağımsız bir insan uygulayıcıyla kör biçimde test etmek ve gözlenen sapmalara
dayanarak sözleşmeyi düzeltmek.

## Requirements

- İki kişi: talimat yazarı ve uygulayıcı
- Metin düzenleyici
- Zamanlayıcı
- Güvenli ve geri alınabilir bir süreç
- [Değerlendirme rubriği](./assessment-rubric.md)

Fiziksel risk, para transferi, gerçek hesap silme veya özel veri içeren süreç
seçmeyin. İkinci kişi bulunamıyorsa kolaylaştırıcı talimatları harfiyen
uygulayabilir; yazar yürütme sırasında açıklama yapamaz.

## Tasks

### 1. Süreci seçin

Şunlardan birini seçin veya eşdeğer güvenli bir süreç belirleyin:

- çalışma klasörü hazırlama;
- çevrimdışı toplantı gündemi oluşturma;
- üç öğeli alışveriş listesini sınıflandırma;
- masaüstünde örnek dosyaları adlandırma.

### 2. Sözleşmeyi yazın

Şunları tanımlayın:

1. başlangıç durumu;
2. geçerli girdiler;
3. en az sekiz sıralı talimat;
4. her talimatın gözlenebilir sonucu;
5. başarı durumu;
6. iki hata durumu;
7. durdurma koşulu.

### 3. Ön test yapın

Normal, sınır ve geçersiz durum için beklenen sonuçları yazın. Uygulama
başlamadan başarı ölçütünü değiştirmeyin.

### 4. Kör yürütme yapın

Uygulayıcı yalnız yazılı talimatları görür. Yazar soru cevaplamaz, hareketi
düzeltmez ve niyetini açıklamaz. Her adım için şunlar kaydedilir:

| Adım | Yazılı talimat | Uygulayıcı davranışı | Beklenen davranış | Sapma |
| ---: | --- | --- | --- | --- |

### 5. İlk sapmayı bulun

Son hataya değil, beklenen ve gerçek davranışın ilk ayrıldığı adıma dönün.
Sapmayı sıra, eksik girdi, belirsiz fiil, gizli varsayım veya eksik hata
davranışı olarak sınıflandırın.

### 6. Sözleşmeyi düzeltin

Yalnız gözlenen kanıtın gerektirdiği talimatları değiştirin. Eski ve yeni
sürümleri ayrı saklayın.

### 7. Yeniden test edin

Mümkünse farklı bir uygulayıcıyla, değilse başlangıç durumunu sıfırlayarak üç
testi yeniden yürütün. Sonuçları ilk turla karşılaştırın.

## Bonus Challenge

Talimat kümenizi küçük bir komut sözlüğüne dönüştürün. Her komut için ad,
girdiler, ön koşul, etki, hata ve örnek yazın. Bu artefakt `V01-P01`
Instruction Simulator projesinin ilk girdisi olabilir.

## Evaluation Criteria

| Ölçüt | Ağırlık |
| --- | ---: |
| Kavramları doğru ayırma (`V01-LO001`) | 25 |
| En az sekiz kesin ve sıralı talimat (`V01-LO002`) | 30 |
| Normal, sınır ve geçersiz test kanıtı | 20 |
| İlk sapma ve kök neden analizi | 15 |
| Kanıta dayalı revizyon ve açıklama | 10 |

Geçme koşulu: en az 80/100 ve her iki learning outcome için rubrikte en az
`3 — Yetkin`.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Alıştırmalar](./exercises.md)
- [Debugging Challenge](./debugging.md)
- [Mini Proje Katkısı](./mini-project.md)
