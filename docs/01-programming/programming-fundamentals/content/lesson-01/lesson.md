---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-006"
supporting_document_type: "Compatibility Report"
title: "Lesson Content: Programlama Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C01-SD-COMP-005"
derived_from:
  - "../../research/lesson-01/research-packet.md"
x-production-unit: "lesson-01"
x-canonical-lesson-id: "V01-C01"
x-content-language: "tr-TR"
---

# Programlama (Programming) Nedir?

## Purpose

Programlama kavramını ilk ilkelerden açıklamak ve öğrencinin belirsiz bir
isteği bilgisayarın işleyebileceği kesin talimatlara dönüştürmesini sağlamak.

## Scope

Bu ders programlama, algoritma, program, talimat, kaynak kod, çalışma ortamı,
yürütme ve durum kavramlarını kapsar. Programlama dili sözdizimi kapsam dışıdır.

## Ownership

İçerik yalnız [onaylı Research Packet](../../research/lesson-01/research-packet.md)
üzerinden türetilmiştir. Canonical kimlik, outcome ve prerequisite anlamı
değiştirilmemiştir.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Lesson/Chapter ID | `V01-C01` |
| Module | `V01-M01` |
| Seviye | Beginner |
| Süre | 2,5 saat |
| Learning Outcomes | `V01-LO001`, `V01-LO002` |
| İçerik durumu | Draft |

### Learning Objectives

Bu dersin sonunda öğrenci:

- program, algoritma, talimat ve hesaplama kavramlarını örneklerle ayırabilir;
- programlama ile yalnızca kod yazma arasındaki kapsam farkını açıklayabilir;
- problemden gözlenebilir çıktıya uzanan temel akışı doğru sıraya koyabilir;
- belirsiz bir günlük süreci en az sekiz kesin ve sıralı adıma dönüştürebilir;
- bir talimat dizisindeki eksik girdiyi, belirsiz fiili ve sınır durumu bulabilir.

### Learning Outcomes

- `V01-LO001`: Program, algoritma, talimat ve hesaplamayı iki örnek üzerinde
  doğru ayırmak.
- `V01-LO002`: Belirsiz bir günlük süreci en az sekiz kesin ve sıralı talimata
  dönüştürmek.

### Prerequisites

Bu ilk ders için önceden programlama dili bilmek gerekmez. `V00` hazırlığı,
temel bilgisayar kullanımı ve verilen bir süreci okuyup sıralayabilmek yeterlidir.

### Estimated Duration

Toplam çalışma süresi 2,5 saattir. Sürenin yaklaşık üçte ikisi kavramsal
anlamaya, kalan kısmı örnekleri incelemeye ve kendi talimat dizisini gözden
geçirmeye ayrılabilir.

### Difficulty

**Beginner.** Teknik geçmiş gerektirmez; ancak öğrenciden günlük dildeki
belirsizlikleri fark etmesi ve kararlarını açıkça ifade etmesi beklenir.

### Introduction

Bir arkadaşınıza “masayı hazırla” dediğinizde eksik ayrıntıları bağlamdan
çıkarabilir. Kaç kişi için hazırlanacağını, hangi tabakların kullanılacağını
ve masanın nerede olduğunu sorabilir. Bilgisayar için aynı güvenilir varsayımı
yapamayız. Bilgisayar, niyetimizi değil, ifade ettiğimiz talimatları işler.

Programlama, bu boşluğu kapatma çalışmasıdır. Bir ihtiyacı
sınırları belirli bir probleme dönüştürür, çözümün adımlarını tasarlar,
adımları bir programlama dilinde ifade eder, çalıştırır ve ortaya çıkan
davranışı beklenen sonuçla karşılaştırırız. Bu nedenle programlama yalnızca
klavyede kod yazmak değildir.

### Neden Bu Konu Önemli?

Sözdizimini ezberlemek, neyin çözülmesi gerektiği belirsizse işe yaramaz.
Programlama temeli; problemi anlamak, doğru soruları sormak ve makinenin
izleyebileceği kadar kesin bir açıklama üretmektir. Bu temel olmadan çalışan
ama yanlış davranan programlar üretmek kolaydır.

Mühendislik açısından önemli olan “kod çalıştı” demek değil, programın hangi
girdilerde hangi davranışı üretmesi gerektiğini açıklayabilmektir. Test ve hata
ayıklama daha sonra bu açıklama ile gerçekleşen davranış arasındaki farkı
inceler.

### Kavramın Açıklaması

Bir gerçek dünya ihtiyacını programa dönüştürürken şu zinciri kullanırız:

1. **Problem:** Hangi ihtiyacı karşılıyoruz?
2. **Algoritma (algorithm):** Girdiyi beklenen çıktıya hangi açık adımlarla
   dönüştüreceğiz?
3. **Program (program):** Bu adımları belirli bir çalışma ortamında nasıl ifade
   edeceğiz?
4. **Yürütme (execution):** Talimatlar işlendiğinde hangi durum ve çıktı oluşur?
5. **Kanıt:** Gerçekleşen davranış beklediğimiz davranışla uyuşuyor mu?

Bir algoritma, çözüm mantığını açıklar. Program ise bu mantığın belirli bir dil
ve ortam için ifade edilmiş uygulamasıdır. Aynı algoritma farklı programlama
dillerinde farklı programlarla gerçekleştirilebilir.

### Teknik Açıklama

Kaynak kod (source code), programın insan tarafından okunabilen dil
temsilidir. Kaynak kod tek başına davranış üretmez; bir çalışma ortamı
(runtime environment) tarafından işlenir. Yürütme sırasında durum (state)
değişebilir ve dışarıdan gözlenebilen bir çıktı oluşabilir.

```text
Problem
-> Algoritma
-> Kaynak kod
-> Çalışma ortamı
-> Yürütme
-> Durum ve çıktı
```

Bu model, “bilgisayar kaynak kodu insan gibi okur” yanılgısını önler. Dilin
kuralları neyin ifade edilebileceğini belirler; belirli çalışma ortamı bu
ifadeyi işler. Programın doğru olması ise yalnız çalışmasına değil, beklenen
çıktıyı doğru koşullarda üretmesine bağlıdır.

### Günlük Hayattan Örnekler

“Dosyaları düzenle” talimatı belirsizdir. Hangi klasör? Hangi dosyalar? Hangi
sıralama kuralı? Aynı isim varsa ne olacak? Daha kesin bir sürüm; hedef klasörü
açma, uygun dosyaları seçme, adlandırma kuralını uygulama, çakışmaları kontrol
etme ve sonucu doğrulama gibi sıralı adımlar içerir.

Asansör çağırma süreci de girdiler, durum ve kurallarla düşünülebilir. Kat
düğmesi girdidir; asansörün bulunduğu kat ve hareket yönü durumdur; kontrol
kuralları hangi çağrının ne zaman karşılanacağını belirler; kapının açılması
gözlenebilir çıktıdır.

### Gerçek Yazılım Dünyasındaki Kullanımı

Dosya yeniden adlandırma otomasyonu, ATM para çekme akışı ve navigasyon sistemi
aynı temel ayrımı kullanır: gerçek dünya ihtiyacı, çözüm adımları ve çalışan
program aynı şey değildir. ATM örneğinde kart, tutar ve kimlik doğrulaması
girdilerdir; bakiye değişimi durumdur; para ve işlem mesajı çıktıdır. Eksik bir
doğrulama adımı, program çalışsa bile yanlış davranış üretebilir.

Ekip içinde kesin talimatlar iletişimi de güçlendirir. Başka bir mühendis,
tasarlanan akışı okuyabilmeli, hangi varsayımların yapıldığını görebilmeli ve
beklenen sonucu bağımsız olarak kontrol edebilmelidir.

### Common Misconceptions

- **“Programlama yalnızca kod yazmaktır.”** Kod yazma, tasarlanan çözümü ifade
  etme aşamasıdır; problem çerçeveleme ve doğrulama da sürecin parçasıdır.
- **“Algoritma ile program aynıdır.”** Algoritma çözüm mantığı, program belirli
  ortam için uygulamadır.
- **“Bilgisayar ne demek istediğimi anlar.”** İfade edilmeyen varsayımlar
  güvenilir program davranışı değildir.
- **“Program çalışıyorsa doğrudur.”** Tek bir durumda çalışmak bütün geçerli
  durumlarda doğru olduğunu göstermez.
- **“Her problem otomatikleştirilmelidir.”** Maliyet, sorumluluk, gizlilik ve
  uygunluk ayrıca değerlendirilmelidir.

### Best Practices

- Çözümden önce problem, girdi ve beklenen çıktıyı yazın.
- “Düzenle”, “uygun şekilde yap” gibi belirsiz fiilleri gözlenebilir işlemlere
  dönüştürün.
- Normal durumun yanında boş, sınır ve beklenmeyen durumları düşünün.
- Algoritma ile belirli dildeki uygulamayı ayrı konuşun.
- “Çalışıyor” yerine hangi beklentinin hangi kanıtla karşılandığını belirtin.
- Talimatlarınızı başka bir kişinin ek varsayım yapmadan izleyip izleyemediğini
  kontrol edin.

### Chapter Summary

Programlama, bir ihtiyacı kesin talimatlarla çalışan ve doğrulanabilir bir
davranışa dönüştürme sürecidir. Algoritma çözüm adımlarını, program bu adımların
belirli ortamda ifade edilmiş hâlini, yürütme ise talimatların işlenmesini
anlatır. Bilgisayar niyeti değil, ifade edilen talimatı işler. Bu yüzden açık
girdiler, sıralı adımlar, sınır durumları ve gözlenebilir çıktılar güvenilir
programlamanın başlangıç noktasıdır.

### Next Lesson

Kanonik öğrenme yolunda sıradaki ders `V01-C02 — How Computers Execute
Programs` dersidir. Pilot üretim klasörü numaraları kanonik öğrenme sırası
değildir.

## Validation

- Research Packet dışı bilgi kaynağı kullanılmadı.
- `LO001` ve `LO002` anlatımda doğrudan karşılandı.
- Yeni Lesson ID, outcome veya prerequisite üretilmedi.
- Quiz, exercise, lab veya assessment üretilmedi.

## References

- [Research Packet](../../research/lesson-01/research-packet.md)
