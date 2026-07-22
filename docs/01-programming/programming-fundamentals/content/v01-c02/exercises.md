---
document_type: "exercise"
exercise_id: "V01-C02-EX01"
title: "Program Yürütme ve Durum İzleme Alıştırmaları"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C02"
difficulty: "Beginner"
estimated_time: "45 minutes"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
assessment_id: "V01-C02-AS01"
---

# Program Yürütme ve Durum İzleme Alıştırmaları

## Objective

Program temsillerini doğru katmana yerleştirmek ve küçük bir talimat dizisini
adım adım izleyerek `V01-LO003` ile `V01-LO004` için uygulama kanıtı üretmek.

## Instructions

Önce bütün soruları yardım almadan çöz. Her izleme sorusunda yalnız son çıktıyı
değil, ara durumları da yaz. AI veya cevap anahtarıyla karşılaştırmayı bağımsız
denemeden sonra yap.

### Bölüm A — Temsil ve katman

1. Aşağıdaki öğeleri pasif temsil, dönüştürme aracı, çalışma ortamı veya çalışan
   durum olarak sınıflandır: kaynak dosya, derleyici, nesne dosyası, bağlayıcı,
   yürütülebilir dosya, yükleyici, süreç, sanal makine.
2. “Kaynak kod CPU'da çalışır” cümlesini en az dört doğru katman kullanarak
   yeniden yaz.
3. Derleme, bağlama ve yükleme için birer girdi ve çıktı yaz.
4. Program ile sürecin aynı olmadığını, aynı programın iki kez açılması
   üzerinden açıkla.
5. Makine kodu ile bayt kodunun hedeflediği sözleşmeleri karşılaştır.

### Bölüm B — Durum bileşenleri

6. Aşağıdaki alanlardan hangilerinin yürütme durumunun parçası olabileceğini ve
   nedenini yaz: kaynak dosyanın adı, PC, yazmaçlar, sanal bellek, girdi kuyruğu,
   çıktı listesi, ekran çözünürlüğü.
7. Program sayacını kaynak satır numarası olarak düşünmenin neden güvenilmez
   olduğunu açıkla.
8. Sanal adres ile fiziksel adres arasındaki farkı “aynıdır” veya “tamamen
   ilgisizdir” demeden açıkla.
9. Süreç ile iş parçacığının paylaştığı ve ayrı tuttuğu durumlara birer örnek ver.

### Bölüm C — `V01-C02-EX01` tam yürütme izi

Aşağıdaki eğitim makinesi sözleşmesini kullan:

```text
LOADI Rx, n      Rx değerini n yapar; PC bir artar.
ADD Rd, Ra, Rb   Rd = Ra + Rb yapar; PC bir artar.
SUB Rd, Ra, Rb   Rd = Ra - Rb yapar; PC bir artar.
JZ Rx, address   Rx sıfırsa PC=address; değilse PC bir artar.
OUT Rx           Rx değerini çıktıya ekler; PC bir artar.
HALT             running=false yapar; PC değişmez.
```

Başlangıç durumu:

```text
PC=0
R1=0, R2=0, R3=0
output=[]
running=true
```

Program:

```text
0: LOADI R1, 4
1: LOADI R2, 4
2: SUB R3, R1, R2
3: JZ R3, 6
4: ADD R3, R1, R2
5: OUT R3
6: OUT R1
7: HALT
```

10. Aşağıdaki tabloyu doldur:

| Adım | Önceki durum | Talimat | Okunan değerler | Değişen alanlar | Sonraki durum |
| ---: | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |
| 6 |  |  |  |  |  |

11. `PC=4` ve `PC=5` talimatlarının neden yürütülmediğini durum kanıtıyla açıkla.
12. Son çıktıyı ve son durumu yaz; yalnız sonucu değil, o sonuca ulaştıran
    kontrol akışını da açıkla.

### Bölüm D — Transfer

13. `LOADI R2, 5` değişikliği yapılırsa hangi adımların farklılaşacağını kodu
    çalıştırmadan tahmin et.
14. `JZ` talimatını kaldırmadan her iki `OUT` talimatının da çalışacağı bir
    başlangıç/program değişikliği öner.
15. Programın bitmemesine yol açabilecek bir `JZ` değişikliği üret ve sonsuz
    döngüyü PC iziyle kanıtla.

## Expected Evidence

- 15 sorunun tamamına gerekçeli yanıt
- Altı satırlık eksiksiz durum izleme tablosu
- Dallanmanın alınma nedenini gösteren karşılaştırma
- Bir alternatif girdi için değişen yürütme yolu
- Model sınırını belirten en az bir cümle

## Self-check

- [ ] Temsil, araç, ortam ve çalışan durum ayrımını korudum.
- [ ] Her izleme satırında önceki ve sonraki durum birbirine bağlanıyor.
- [ ] PC değerini talimat seçilmeden önce kaydettim.
- [ ] Yalnız sözleşmede belirtilen alanları değiştirdim.
- [ ] Dallanma alınırsa aradaki talimatları yürütmedim.
- [ ] Çıktı ve `running` değişimlerini durumun parçası olarak yazdım.
- [ ] Eğitim ISA'sını gerçek bütün CPU'lar için evrenselleştirmedim.

En az beş madde sağlanmıyorsa [ana dersteki durum izleme](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md) bölümüne
dön ve farklı bir program üzerinde yeniden dene.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Çalışan Örnekler](./examples.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Assessment Readiness](../../research/v01-c02/assessment-readiness.md)
