---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-006"
supporting_document_type: "Compatibility Report"
title: "Lesson Content: Problem Çözme Yaklaşımı"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C03-SD-COMP-005"
derived_from:
  - "../../research/lesson-03/research-packet.md"
x-production-unit: "lesson-03"
x-canonical-lesson-id: "V01-C03"
x-content-language: "tr-TR"
---

# Problem Çözme (Problem Solving) Yaklaşımı

## Purpose

Belirsiz bir ihtiyacı, sınırları ve başarı ölçütleri açık bir problem
sözleşmesine dönüştürmek için sistematik bir yaklaşım kazandırmak.

## Scope

Problem tanımı, paydaş, kabul ölçütü, girdi, çıktı, kısıt, varsayım, sınır durum,
parçalama, soyutlama, model, kanıt ve yineleme ele alınır.

## Ownership

İçerik yalnız [onaylı Research Packet](../../research/lesson-03/research-packet.md)
üzerinden türetilmiştir. Kanonik outcome ve prerequisite zinciri korunmuştur.

## Content

### Lesson Metadata

| Alan | Değer |
| --- | --- |
| Lesson/Chapter ID | `V01-C03` |
| Module | `V01-M01` |
| Seviye | Beginner |
| Süre | 2,5 saat |
| Learning Outcome | `V01-LO005` |
| Prerequisites | `V01-C01`, `V01-C02` |
| İçerik durumu | Draft |

### Learning Objectives

Bu dersin sonunda öğrenci:

- belirtiyi, problemi ve çözüm fikrini ayırabilir;
- girdi, çıktı, kısıt, varsayım ve sınır durum içeren sözleşme oluşturabilir;
- parçalar arasındaki bağımlılıkları koruyan bir parçalama yapabilir;
- amaca uygun soyutlama seçebilir;
- varsayım ve modelini kanıta göre yeniden düzenleyebilir.

### Learning Outcomes

`V01-LO005`: Belirsiz bir ihtiyacı, girdi, çıktı, kısıt, varsayım ve sınır
durumları açık bir problem sözleşmesine dönüştürmek.

### Prerequisites

Öğrenci `V01-C01` ile kesin talimatların önemini; `V01-C02` ile yürütme ve durum
modelini anlamış olmalıdır.

### Estimated Duration

Toplam çalışma süresi 2,5 saattir. Süre; belirsiz isteği inceleme, sözleşme
kurma, parçalama ve kanıtla yeniden değerlendirme arasında dağıtılır.

### Difficulty

**Beginner.** Kod bilgisi gerekmez; öğrenciden gözlenebilir başarıyı ve gizli
kabulleri dikkatle ifade etmesi beklenir.

### Introduction

“Dosya yüklemeyi iyileştir” bir çözüm üretmeye başlamak için yeterli değildir.
Sorun yükleme süresi mi, başarısız işlem oranı mı, desteklenen dosya türleri mi,
yoksa kullanıcıya verilen geri bildirim mi? Belirsiz istek doğrudan çözüme
dönüştürüldüğünde ekip yanlış problemi hızlı biçimde çözebilir.

Problem tanımı (problem statement), kimin hangi ihtiyacının hangi koşullarda
karşılanacağını ve başarının nasıl gözleneceğini açıklar. İyi problem çözme,
hemen çözüm seçmekten önce bu çerçeveyi kurar.

### Neden Bu Konu Önemli?

Mühendislik başarısı yalnız çalışan bir çıktı üretmek değildir; doğru paydaşın
doğru ihtiyacını, gerçek kısıtlar içinde karşılamaktır. Açık sözleşme, çözümün
incelenmesini ve farklı kişilerin aynı başarı ölçütü üzerinde anlaşmasını sağlar.

Varsayımları görünür kılmak ayrıca riski azaltır. Gerçek sanılan doğrulanmamış
bir kabul, bütün çözümün yanlış koşullar üzerine kurulmasına neden olabilir.

### Kavramın Açıklaması

Önce üç şeyi ayırırız:

- **Belirti:** Gözlenen olumsuz durum.
- **Problem:** Belirtiyi üreten ve çözülmesi gereken açık ihtiyaç.
- **Çözüm fikri:** Problemi karşılamak için önerilen yöntem.

Ardından paydaşı (stakeholder) ve kabul ölçütünü (acceptance criterion)
belirleriz. Kabul ölçütü “daha iyi” gibi yoruma açık bir ifade değil, başarının
gözlenebilen tanımıdır.

### Teknik Açıklama

Problem sözleşmesinde şu alanlar birlikte bulunur:

- girdi (input): çözümün aldığı bilgi;
- çıktı (output): çözümün üretmesi gereken sonuç;
- kısıt (constraint): uyulması zorunlu sınır;
- varsayım (assumption): doğruluğu izlenmesi gereken kabul;
- sınır durum (edge case): geçerli alanın uç noktası.

Geçersiz girdi, sözleşmenin geçerli alanı dışındadır; sınır durum ise alanın
içindedir ve özellikle incelenmelidir. Parçalama (decomposition), problemi daha
yönetilebilir parçalara ayırırken parçalar arasındaki ilişkileri korur.
Soyutlama (abstraction), amaç için gerekli bilgiyi koruyan ve ilgisiz ayrıntıyı
dışarıda bırakan modeldir; gerekli gerçeği silmek değildir.

Doğrulama iki farklı soruyu açıkça ayırmalıdır: çözümü tanımlandığı gibi yapıp
yapmadığımız ve üretilen çözümün gerçek ihtiyacı karşılayıp karşılamadığı.
Hipotez, kanıt ve yineleme (iteration) döngüsü; ilk modeli son cevap saymak
yerine yeni bulgularla düzeltmeyi sağlar.

### Günlük Hayattan Örnekler

Toplu taşıma gecikme bildirimi için “gecikmeyi haber ver” yeterli değildir.
Hangi yolcu, hangi hat, kaç dakikalık gecikme, hangi kanal ve hangi zaman
aralığı soruları sözleşmeyi oluşturur. “Bütün yolcuların telefonu vardır” bir
kısıt değil, doğrulanması gereken varsayımdır.

Randevu planlamada saat dilimi, çalışma saatleri ve çakışma kuralları kısıt
olabilir. Günün ilk ve son uygun saati sınır durumdur; biçimi bozuk tarih ise
geçersiz girdidir.

### Gerçek Yazılım Dünyasındaki Kullanımı

Dosya yükleme özelliğinde desteklenen türler, azami boyut ve güvenlik kuralları
kısıtları; dosya ve kullanıcı bilgisi girdileri; saklanan dosya veya açık hata
mesajı çıktıyı oluşturur. Büyük ama izin verilen dosya sınır durumdur.

Bir not uygulaması için “hızlı ve kolay olsun” talebi ölçülebilir değildir.
Paydaşın hangi işi ne kadar sürede tamamlaması gerektiği açıklanmadan seçilen
mimari, gerçek soruna dair kanıt sunmaz. Ekip bu nedenle varsayım günlüğü tutar,
kanıt toplar ve modelini günceller.

### Common Misconceptions

- **“Çözüm fikri problemin kendisidir.”** Bir teknoloji seçimi ihtiyacı tanımlamaz.
- **“Parçalama eşit büyüklükte parçalar üretmektir.”** Amaç, sorumlulukları ve
  bağımlılıkları yönetilebilir kılmaktır.
- **“Varsayım gerçektir.”** Varsayım doğrulanmalı ve izlenmelidir.
- **“Sınır durum geçersiz girdidir.”** Sınır durum geçerli alanın uç noktasıdır.
- **“Soyutlama ayrıntı kaybetmektir.”** Amaca gerekli ayrıntı korunmalıdır.
- **“İlk çözüm son çözüm olmalıdır.”** Kanıt, modelin yeniden kurulmasını
  gerektirebilir.
- **“Kullanıcı isteği her zaman tamdır.”** Gizli ihtiyaç ve kısıtlar araştırılır.

### Best Practices

- Çözüm önermeden paydaş ve gözlenebilir başarıyı yazın.
- Gereksinim, kısıt ve varsayımı ayrı alanlarda tutun.
- Her varsayıma bir doğrulama yöntemi bağlayın.
- Normal girdinin yanında sınır ve geçersiz girdileri tanımlayın.
- Parçalama ağacında parçalar arası bağımlılıkları gösterin.
- Soyutlamanın amacını ve dışarıda bıraktığı bilgiyi açıklayın.
- Modeli kanıtla karşılaştırıp gerektiğinde yineleyin.

### Chapter Summary

Problem çözme, belirsiz bir isteğe hemen teknoloji seçmek değil; belirtiyi,
problemi ve çözüm fikrini ayırarak açık bir sözleşme kurmaktır. Sözleşme; girdi,
çıktı, kısıt, varsayım ve sınır durumları içerir. Parçalama ilişkileri korur,
soyutlama amaca gerekli bilgiyi seçer. Hipotezler kanıtla sınanır ve model,
öğrenilenlere göre yinelemeli biçimde geliştirilir.

### Next Lesson

Kanonik öğrenme yolunda sıradaki ders `V01-C04 — Algorithms and
Representations` dersidir. Algoritma, sözde kod ve akış şeması üretim segmentleri
bu tek kanonik ders içinde birleşir.

## Validation

- `V01-LO005` doğrudan karşılandı.
- Prerequisite zinciri `V01-C01` ve `V01-C02` olarak korundu.
- Research Packet dışında bilgi kaynağı kullanılmadı.
- Değerlendirme veya yeni kanonik varlık üretilmedi.

## References

- [Research Packet](../../research/lesson-03/research-packet.md)
