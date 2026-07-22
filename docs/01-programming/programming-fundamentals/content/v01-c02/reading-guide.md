---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-STUDY-002"
supporting_document_type: "Study Plan"
title: "Okuma Rehberi: Bilgisayarlar Programları Nasıl Çalıştırır?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Curriculum Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md", "../../research/v01-c02/teaching-sequence.md"]
x-production-unit: "v01-c02"
x-content-language: "tr-TR"
---

# Okuma Rehberi: Bilgisayarlar Programları Nasıl Çalıştırır?

## Purpose

Uzun ders bölümünü bilişsel yükü dengelenmiş okuma oturumlarına ayırmak.

## Scope

Yeni alıştırma veya değerlendirme oluşturmaz; yalnız okuma ve tekrar sırası sağlar.

## Ownership

Müfredat Tasarımcısı (Curriculum Designer) planı sürdürür; öğrenci süreleri kendi
hızına göre ayarlayabilir.

## Content

### Plan Seçimi

- **Kanonik chapter planı:** 80 dakika okuma, 35 dakika izleme uygulaması,
  25 dakika bağımsız çalışma ve 10 dakika kısa sınav/yansıtma; toplam 2,5 saat.
- **Yoğun plan:** Tek oturumda 75–95 dakika okuma, ardından 45–60 dakika kavram tekrar ve iz incelemesi.
- **Dengeli plan:** Üç oturum; her oturum sonunda concept summary ile 10 dakika geri çağırma.
- **Destekli plan:** Beş kısa oturum; her oturum öncesi önceki kavram haritasını yeniden kurma.
- **Referans bölüm ustalık planı:** Kanonik çalışmaya ek olarak laboratuvar,
  hata ayıklama görevi, mülakat ve mini proje katkısı; toplam 6–9 saat.

### Çalışma Takvimi

| Oturum | Ders Bölümleri | Odak | Tahmini Okuma | Tahmini Çalışma |
| ---: | --- | --- | ---: | ---: |
| 1 | 1–7 | Büyük resim, program, kaynak ve dil | 15–20 dk | 25–30 dk |
| 2 | 8–12, 21–23 | Araç zinciri, makine temsili ve ISA | 20–25 dk | 35–45 dk |
| 3 | 13–20 | CPU durumu, talimat döngüsü ve bellek | 20–25 dk | 40–50 dk |
| 4 | 24–29 | Çalışma zamanı, süreç/iş parçacığı, VM, bayt kodu ve JIT | 15–20 dk | 30–40 dk |
| 5 | 30–38 | Durum, kontrol akışı, G/Ç, izleme ve sentez | 20–25 dk | 45–60 dk |

### Okuma Yöntemi

1. Bölüm başlığını soruya dönüştür: “Bu katman neden var?”
2. İlk okumada ana ilişkiyi bul; terim ayrıntılarını kavram özetiyle doğrula.
3. Bir artefakt için “kim üretir, kim tüketir?” sorusunu cevapla.
4. Durum bölümünde her değişimi önce/sonra biçiminde yazılı düşün.
5. Yanlış-anlama tablolarında önce yanlış cümleyi neden ikna edici bulduğunu belirle.

### Uyarlama Kuralları

- Yerel araç zinciri sırası karışıyorsa 8, 21, 22 ve 23. bölümler birlikte yeniden okunur.
- ISA/mikro mimari karışıyorsa 12–14. bölümler ve `VIS-04` kullanılır.
- Program/süreç ayrımı belirsizse 5. ve 23–26. bölümler tekrar edilir.
- `V01-LO004` için izleme tablosu açıklanamıyorsa 16, 30, 31 ve 33. bölümlere dönülür.
- Bir terim yalnız benzetmeyle hatırlanıyorsa teknik tanımı kavram özetinden yeniden kurulur.

### Referans Bölüm İş Akışı

1. [Ana dersi](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md) okurken [öğrenci not sistemini](./student-notes.md)
   doldur.
2. [Çalışan örnekleri](./examples.md) önce elle izle, sonra çalıştır.
3. [Alıştırmaları](./exercises.md) bağımsız tamamla.
4. [Hata ayıklama görevi](./debugging.md) ile ilk yanlış durum geçişini bul.
5. [Laboratuvarı](./lab.md) tamamla ve Git geçmişini koru.
6. [Kısa sınavı](./quiz.md) cevap anahtarını açmadan çöz.
7. [Değerlendirme rubriği](./assessment-rubric.md) üzerinden iki öğrenme çıktısını ayrı
   değerlendir.
8. Yalnız kendi denemenden sonra [AI Mentör](./ai-mentor.md) ile karşılaştır.
9. [Mülakat sorularını](./interview.md) sesli yanıtla.
10. [Mini proje rehberiyle](./mini-project.md) `V01-P01` katkısına geç.

## Validation

- Tahmini okuma süresi: 75–95 dakika.
- Kanonik bölüm çalışma süresi: 2,5 saat.
- Genişletilmiş referans paketi: 6–9 saat.
- Öğrenme çıktıları: iki plan da `V01-LO003` ve `V01-LO004` kapsamındadır.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Kavram Özeti](./concept-summary.md)
- [Görselleştirme Notları](./visualization-notes.md)
- [Referans Bölüm Dizini](./chapter.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Öğretim Sırası](../../research/v01-c02/teaching-sequence.md)
