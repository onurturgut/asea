---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-STUDY-003"
supporting_document_type: "Study Plan"
title: "V01-C02 Student Notes System"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Learning Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md", "./reading-guide.md"]
---

# V01-C02 Öğrenci Not Sistemi

## Purpose

Öğrencinin chapter metnini kopyalamak yerine kavramları yeniden kurmasını,
karışıklıkları görünür kılmasını ve uygulama kanıtlarını tek yerde toplamasını
sağlamak.

## Scope

Bu belge doldurulabilir çalışma şablonudur. Cevap anahtarı veya lesson özeti
değildir.

## Ownership

Learning Designer şablonun yapısını korur; öğrenci kendi notlarının ve öğrenme
kanıtlarının sahibidir.

## Content

### Bölüm 1 — Başlangıç modeli

Metne bakmadan tamamla:

```text
Bir program çalıştığında...

Kaynak kod:
Onu tüketen/dönüştüren bileşen:
Oluşan temsil:
Çalışma ortamı:
Çalışan durum:
Gözlenebilir sonuç:
```

### Bölüm 2 — Kavram kartı

Her ana kavram için bir kopya doldur:

```text
Türkçe ad / English term:
Teknik tanımım:
Neden gereklidir?
Hangi girdiyi/temsili tüketir?
Hangi çıktıyı veya durumu üretir/değiştirir?
Hangi katmanda bulunur?
En sık karıştırdığım kavram:
İki kavram arasındaki sınır:
Modelin garanti etmediği şey:
Kendi örneğim:
Kaynak/evidence notum:
```

### Bölüm 3 — Temsil zinciri

Yerel ve sanal makine yollarını ayrı ayrı çiz:

```text
Yerel yol:
_____ → _____ → _____ → _____ → _____ → çalışan durum

Sanal makine yolu:
_____ → _____ → _____ → çalışan durum

İki yolun ortak noktası:
```

### Bölüm 4 — Durum izleme sayfası

| Adım | Önceki PC/state | Talimat | Okunan değerler | Değişen alanlar | Sonraki PC/state | Kontrolüm |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |
| 6 |  |  |  |  |  |  |

Her satır için kontrol:

- Önceki state, bir önceki satırın sonraki state'iyle aynı mı?
- PC doğru talimatı seçiyor mu?
- Yalnız izin verilen alanlar mı değişti?
- Sonraki PC sözleşmeye uygun mu?

### Bölüm 5 — Yanlış anlama günlüğü

| İlk düşüncem | Kanıtla gördüğüm sorun | Düzeltilmiş model | Yeni örnekte doğrulama |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

### Bölüm 6 — Hata ayıklama kaydı

```text
Beklenen sonuç:
Gerçek sonuç:
Son başarılı temsil/katman:
İlk farklı state geçişi:
Kök neden sınıfı:
Düzeltme:
Yeniden doğrulama kanıtı:
Önleme kuralı:
```

### Bölüm 7 — Outcome kanıtı

#### `V01-LO003`

- Kendi bir sayfalık execution model açıklamam:
- Yerel/VM karşılaştırmam:
- Karıştırmadan açıklayabildiğim kavram çiftleri:
- Hâlâ belirsiz olan nokta:

#### `V01-LO004`

- Tamamladığım trace:
- Dallanma içeren trace:
- Bulduğum ilk sapma:
- Rubric düzeyim ve kanıtım:

### Bölüm 8 — Aralıklı tekrar

| Tarih | Etkinlik | Sonuç | Tekrar edilecek konu |
| --- | --- | --- | --- |
| Chapter günü | Ana model + bir trace |  |  |
| +1 gün | 10 flashcard + farklı trace |  |  |
| +3 gün | Kavram haritasını metne bakmadan çiz |  |  |
| +7 gün | Quiz yanlışlarını yeniden çöz |  |  |
| +21 gün | Mülakat açıklaması + kısa trace |  |  |

### Bölüm 9 — Chapter kapanışı

Şu cümleyi tamamla:

> Artık bir programın çalışmasını kaynak dosyanın canlanması olarak değil,
> ...........................................................................
> olarak düşünüyorum.

## Validation

- Outcome not alanları: 2/2
- Trace şablonu: Tam
- Yanlış anlama ve debug kaydı: Mevcut
- Aralıklı tekrar planı: 5 temas
- Hazır cevap: Yok

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Okuma Rehberi](./reading-guide.md)
- [Kavram Özeti](./concept-summary.md)
- [Flashcards](./flashcards.md)
- [Assessment Rubriği](./assessment-rubric.md)
