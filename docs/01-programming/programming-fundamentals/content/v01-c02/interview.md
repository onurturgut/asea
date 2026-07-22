---
document_type: "interview"
interview_id: "V01-C02-IV01"
title: "Program Yürütme Modeli Mülakatı"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C02"
difficulty: "Intermediate"
estimated_time: "35 minutes"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
assessment_id: "V01-C02-AS01"
interviewer_role: "Reviewer"
---

# Program Yürütme Modeli Mülakatı

## Purpose

Öğrencinin gerçek bir junior software engineer görüşmesinde program yürütme,
çalışma zamanı, süreç, bellek ve izleme kavramlarını ezber cümleler yerine doğru
mühendislik muhakemesiyle açıklayabildiğini değerlendirmek.

## Question Set

### Temel sorular

1. Kaynak kod yazıldıktan sonra programın çalışmasına kadar hangi aşamalar
   bulunabilir?
2. Program ile süreç arasındaki fark nedir? Aynı programdan iki süreç oluşabilir
   mi?
3. Derleyici, assembler, bağlayıcı ve yükleyici hangi farklı rolleri üstlenir?
4. ISA nedir ve mikro mimariyle neden aynı şey değildir?
5. Program sayacı ne işe yarar? Neden kaynak satır numarası değildir?
6. Yazmaç, sanal bellek ve fiziksel bellek arasında nasıl bir ilişki vardır?
7. Interpreter, virtual machine ve JIT kavramlarını birbirine karıştırmadan
   açıklar mısın?
8. Bir process içindeki iki thread hangi durumları paylaşabilir, hangilerini ayrı
   tutabilir?
9. Girdi ve çıktı neden yürütme durumuyla birlikte düşünülmelidir?
10. Fetch-decode-execute modelinin yararı ve sınırı nedir?

### İzleme ve teşhis soruları

11. `R1=0` iken `JZ R1,8` yürütülürse önceki ve sonraki PC'yi nasıl kaydedersin?
12. Bir program compile oluyor fakat “undefined reference” benzeri hata nedeniyle
    executable oluşmuyorsa sorunu hangi katmanda ararsın?
13. Executable oluşuyor ancak başlatılamıyorsa derleyici kodunu neden ilk şüpheli
    olarak seçmezsin?
14. Son çıktı doğru fakat ara durum tablosu tutarsızsa çözümü başarılı kabul eder
    misin? Neden?
15. Bir iz içindeki ilk yanlış geçişi sistematik olarak nasıl bulursun?

### Takip soruları

Interviewer aşağıdakilerden en az üçünü seçer:

- “Her zaman böyle mi?” diyerek adayın model sınırını açıklamasını ister.
- Yerel yürütme örneğini JVM veya WebAssembly yolu için yeniden kurdurur.
- Aynı programın farklı girdiyle farklı çıktı üretmesini durum üzerinden
  açıklatır.
- PC'nin sırayla artmadığı bir branch örneği ister.
- Kaynak değişkenini fiziksel RAM kutusu olarak düşünmenin sınırını sorar.
- Adaydan bir hata katmanı teşhis ağacı çizmesini ister.

## Evidence Guide

### Güçlü sinyaller

- Temsil ile çalışan durumu ayrı tutar.
- Aşamaları sırayla saymaktan öte her aşamanın girdisini ve çıktısını açıklar.
- “Her zaman” demeden çalışma zamanı/ISA bağlamını belirtir.
- PC ve durumu önce/sonra biçiminde izler.
- Bilmediği implementation ayrıntısını uydurmaz; specification'a bakacağını
  söyler.
- Hata teşhisinde ilk sapmaya ve son başarılı artefact'a odaklanır.

### Zayıf sinyaller

- Kaynak kod, machine code ve process'i eş anlamlı kullanır.
- “Compiler her şeyi yapar” diyerek linking/loading rollerini sileştirir.
- PC'yi kaynak satırı olarak tanımlar.
- Virtual address'i doğrudan fiziksel RAM hücresi sayar.
- JIT varsa interpreter veya CPU olmadığını iddia eder.
- Yalnız doğru son çıktıyı izleme kanıtı sayar.

### Kırmızı bayraklar

- Yanlışını yeni kanıt karşısında düzeltmeyi reddetmek.
- Güvenlik veya kapsam sınırını saklayarak kesinlik iddia etmek.
- Çalıştırmadan önce hiçbir varsayım veya durum yazmamak.

## Scoring Rubric

| Boyut | 1 — Beginning | 2 — Developing | 3 — Proficient | 4 — Exemplary |
| --- | --- | --- | --- | --- |
| Kavram ayrımları | Sistematik karıştırır | Birkaç ayrım doğru | Temel ayrımlar doğru | Alternatif çalışma zamanı yollarını da doğru sınırlar |
| Yürütme modeli | Tek ok veya ezber | Eksik katmanlı | Temsil → çalışma zamanı → durum doğru | Ödünleşim ve hata sınırı ekler |
| İzleme | Yalnız çıktı | Ara adımlar eksik | PC/durum hatasız | Değişmez ve teşhis yöntemi üretir |
| İletişim | Belirsiz/kesinlikçi | Kısmen yapılandırılmış | Açık ve gerekçeli | Bilinmeyeni ve doğrulama yolunu belirtir |

Başarı için her boyutta en az 3 gerekir.

## Feedback

Geri bildirim şu formatta verilir:

```text
Güçlü kanıt:
Karıştırılan kavram:
İlk eksik muhakeme adımı:
Tekrar çalışılacak bölüm:
Yeni deneme sorusu:
```

Model cevap ezberletilmez. Öğrenci aynı outcome'u farklı bir scenario üzerinde
yeniden açıklamalıdır.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Hata Ayıklama Görevi](./debugging.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Misconception Map](../../research/v01-c02/misconception-map.md)
