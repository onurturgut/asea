---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-020"
supporting_document_type: "Compatibility Report"
title: "Lesson Content: Pseudocode"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C04-SD-COMP-010"
derived_from:
  - "../../research/lesson-04/research-packet.md"
x-production-unit: "lesson-04"
x-canonical-lesson-id: "V01-C04"
x-content-language: "tr-TR"
---

# Sözde Kod (Pseudocode)

## Purpose

Algoritma mantığını programlama dili ayrıntılarına bağlanmadan, açık bloklar ve
izlenebilir durum değişimleriyle ifade etmeyi öğretmek.

## Scope

Bu içerik `V01-C04` dersinin sözde kod segmentidir. Ayrı bir kanonik ders
değildir; algoritma ve akış şeması segmentleriyle birleşir.

## Ownership

İçerik yalnız [onaylı Research Packet](../../research/lesson-04/research-packet.md)
üzerinden türetilmiştir. Evrensel sözde kod sözdizimi iddiası kurulmamıştır.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Lesson/Chapter ID | `V01-C04` |
| Module | `V01-M01` |
| Üretim segmenti | `lesson-04` |
| Seviye | Beginner |
| Süre | `V01-C04` birleşik ders süresi: 2,5 saat |
| Learning Outcome | `V01-LO006` |
| İçerik durumu | Draft |

### Learning Objectives

Bu segmentin sonunda öğrenci:

- sözde kodu çalıştırılabilir koddan ayırabilir;
- sıra, seçim ve yinelemeyi asgari gösterimle ifade edebilir;
- atama ile eşitliği ayırabilir;
- döngü ilerlemesini ve sonlanmayı görünür kılabilir;
- üç girdi için izleme tablosu hazırlamaya temel oluşturabilir.

### Learning Outcomes

Bu segment `V01-LO006` kapsamında algoritmayı açık bir gösterimle ifade etme ve
farklı girdiler üzerinde izleme becerisini destekler.

### Prerequisites

`V01-C03` problem sözleşmesi ile `lesson-02` algoritma zihinsel modeli
anlaşılmış olmalıdır.

### Estimated Duration

Bu segmente ayrı kanonik süre atanmaz. `V01-C04` içindeki algoritma, sözde kod
ve akış şeması segmentlerinin birleşik süresi 2,5 saattir.

### Difficulty

**Beginner.** Belirli bir programlama dilinin sözdizimi gerekmez.

### Introduction

Bir algoritmayı yalnız günlük cümlelerle anlatmak kolaydır; ancak blok sınırları,
koşullar ve tekrarlar belirsiz kalabilir. Doğrudan programlama diline geçmek ise
çözüm mantığını noktalama, tür veya API ayrıntılarının arkasına saklayabilir.

Sözde kod, algoritma mantığını insanların okuyup izleyebilmesi için
programlama dilinden bağımsız ve çalıştırılabilir olma zorunluluğu bulunmadan
ifade eden yapılandırılmış gösterimdir.

### Neden Bu Konu Önemli?

Sözde kod, çözümün kontrol akışını uygulama ayrıntılarından önce incelemeyi
sağlar. Ekip üyeleri; hangi girdinin alındığını, hangi kararın verildiğini,
döngünün nasıl ilerlediğini ve hangi sonucun döndürüldüğünü aynı model üzerinde
tartışabilir.

### Kavramın Açıklaması

Bu derste kullanılan asgari gösterim şunlardır:

- `INPUT` ve `OUTPUT`: veri alma ve sonuç verme;
- `SET name TO`: atama;
- `IF`, `ELSE`, `END IF`: seçim;
- `WHILE`, `END WHILE`: koşullu yineleme;
- `FOR EACH`, `END FOR`: koleksiyon üzerinde yineleme;
- `PROCEDURE`, `END PROCEDURE`: yordam;
- `RETURN`: yordamdan sonuç döndürme.

Anahtar sözcük (keyword) İngilizce kalabilir; açıklama ve adlar Türkçe olabilir.
Bu seçim evrensel bir standart değil, ders içinde tutarlılık sağlayan bir
gösterim kuralıdır.

### Teknik Açıklama

Atama (assignment), bir ada yeni değer bağlar; eşitlik karşılaştırması değildir.
Girinti, blok içeriğini görmeyi kolaylaştırır; `END IF`, `END WHILE` ve benzeri
açık son işaretleri ise sınırı kesinleştirir.

```pseudocode
INPUT birinci, ikinci
IF birinci >= ikinci
  OUTPUT birinci
ELSE
  OUTPUT ikinci
END IF
```

Yineleme (iteration) yazıldığında her adımın çıkış koşuluna nasıl yaklaştığı
görünmelidir. Elle izleme (dry run), seçilen girdiyle adımları zihinsel olarak
yürütmektir. İzleme tablosu (trace table), her adımda değişen değerleri kayıt
altına alır. Okunabilir bir gösterim, tek başına doğruluk garantisi değildir.

### Günlük Hayattan Örnekler

Sınırlı PIN denemesinde deneme sayısı başlangıçta belirlenir; her başarısız
denemede artırılır ve başarı veya üst sınır durumunda süreç biter. “Doğru olana
kadar dene” ifadesi ilerleme ve üst sınır belirtmediği için yetersizdir.

Bir koleksiyonun toplamını bulurken toplam sıfırdan başlar; her öğe toplam
değerine eklenir ve koleksiyon bittiğinde sonuç verilir. Bu anlatım sıra,
atama ve yinelemeyi ayrı görünür kılar.

### Gerçek Yazılım Dünyasındaki Kullanımı

Bir ekip, uygulama kodundan önce iş kuralını sözde kodla gözden geçirebilir.
İç içe kararların açık son işaretleri, bir `ELSE` dalının hangi koşula ait
olduğunu tartışmasız hâle getirir. Aynı mantık daha sonra farklı programlama
dillerinde uygulanabilir.

Sözde kod ayrıca bir hata raporundaki akışı yeniden kurmak için kullanılabilir.
Durum değişimleri izleme tablosuna yazıldığında ilk sapmanın hangi adımda
oluştuğu daha kolay görülür.

### Common Misconceptions

- **“Sözde kod çalıştırılabilir koddur.”** Zorunlu olarak bir çalışma ortamına
  sahip değildir.
- **“Tek bir evrensel sözdizimi vardır.”** Gösterimler değişebilir; tutarlılık ve
  açıklık korunmalıdır.
- **“Serbest sözdizimi belirsizliğe izin verir.”** Bloklar ve koşullar yine açık
  olmalıdır.
- **“Daha fazla uygulama ayrıntısı her zaman iyidir.”** Gereksiz ayrıntı algoritma
  mantığını gölgeleyebilir.
- **“Okunabilir olmak doğru olmak demektir.”** Doğruluk ayrıca incelenir.
- **“Doğal dil blokları her zaman gösterir.”** Açık son işaretleri gerekir.

### Best Practices

- Kullanılan gösterim kurallarını başta açıklayın.
- Girintiyle birlikte açık blok sonları kullanın.
- Atamayı `SET ... TO` biçimiyle eşitlikten ayırın.
- Her döngüde ilerleyen değeri ve çıkış koşulunu gösterin.
- Girdi, çıktı ve sözleşme koşullarını görünür tutun.
- Normal, sınır ve geçersiz girdilerle elle izleme planlayın.
- Programlama diline özgü gereksiz ayrıntıları erteleyin.

### Chapter Summary

Sözde kod, algoritmayı çalıştırılabilir kod olmadan yapılandırılmış biçimde
anlatır. Sıra, seçim, yineleme, yordam ve dönüş açık bloklarla gösterilir. Atama
eşitlikten ayrılır; döngülerde ilerleme ve çıkış görünür tutulur. Girinti ve son
işaretleri belirsizliği azaltır. Sözde kod okunabilirlik sağlar fakat doğruluk
ve sonlanma ayrıca izlenmelidir.

### Next Lesson

Sonraki üretim segmenti, aynı `V01-C04` içindeki **Akış Şeması** konusudur.
Birleşik `V01-C04` tamamlandığında kanonik sonraki ders `V01-C05` olur.

## Validation

- Research Packet tek bilgi kaynağıdır.
- Evrensel sözde kod standardı iddiası yoktur.
- `V01-LO006` anlamı korunmuştur.
- Exercise, quiz, lab veya assessment üretilmemiştir.

## References

- [Research Packet](../../research/lesson-04/research-packet.md)
