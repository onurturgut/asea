---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-PROJ-001"
supporting_document_type: "Project Plan"
title: "V01-C02 Contribution to V01-P01 Instruction Simulator"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Project Designer"
source_ids:
  - "V01-P01"
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
derived_from:
  - "../../../projects/project-01-instruction-simulator.md"
  - "../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md"
  - "./lab.md"
---

# V01-C02 Mini Proje Rehberi — Instruction Simulator

## Purpose

`V01-C02` içinde öğrenilen yürütme ve durum izleme modelini kanonik `V01-P01 —
Instruction Simulator` projesine bağlamak.

## Scope

Bu belge yeni veya ikinci bir proje tanımlamaz. `V01-P01` projesinin yalnız
`V01-LO003` ve `V01-LO004` kapsamındaki chapter katkısını açıklar. Kanonik proje
sözleşmesi değişmeden kalır.

## Ownership

- Kanonik proje: `V01-P01`
- Chapter katkısı: `V01-C02`
- Proje değerlendirmesi: kanonik proje rubric'i
- Bu rehberin sahibi: Project Designer

## Content

### Chapter katkısının hedefi

Öğrenci, küçük bir talimat kümesini tüketen ve her adımda önceki/sonraki durumu
gösteren bir instruction simulator bileşeni üretir.

### Gerekli özellikler

- Program ile çalışan state ayrı veri yapılarıdır.
- En az `LOADI`, `ADD`, `SUB`, `JZ`, `JMP`, `OUT` ve `HALT` desteklenir.
- Her adım için PC, talimat, okunan değerler ve state farkı kaydedilir.
- Geçersiz PC, bilinmeyen talimat ve boş input açıklayıcı hata üretir.
- Sonsuz döngü riskine karşı yapılandırılabilir adım sınırı vardır.
- Aynı program en az üç başlangıç durumu veya input ile çalıştırılır.
- Çıktı, okunabilir tablo ve JSON biçiminde dışa aktarılabilir.

### Teknik sınırlar

- Bu sürüm gerçek assembly parser gerektirmez; talimatlar JavaScript nesneleri
  veya JSON olarak temsil edilebilir.
- CPU pipeline, cache, physical memory ve OS scheduler simüle edilmez.
- UI zorunlu değildir; terminal uygulaması yeterlidir.
- Chapter'da öğretilmeyen framework kullanımı puan avantajı sağlamaz.

### Teslimatlar

```text
instruction-simulator/
├── README.md
├── src/
│   ├── machine-state.mjs
│   ├── instruction-set.mjs
│   ├── execute-step.mjs
│   └── run-program.mjs
├── programs/
│   ├── double-number.json
│   ├── branch.json
│   └── invalid-program.json
├── test/
│   └── execution.test.mjs
└── docs/
    ├── execution-model.md
    └── trace-example.md
```

### Kabul kanıtı

1. `double-number` programı doğru state trace üretir.
2. Dallanma programı alınan ve alınmayan yolu ayrı test eder.
3. Hatalı program güvenli ve açıklayıcı biçimde durur.
4. Testler program nesnesinin çalıştırmalar arasında değişmediğini doğrular.
5. README, modelin gerçek CPU hakkında garanti etmediği ayrıntıları belirtir.
6. Öğrenci teknik savunmada program/state ve ISA/implementation ayrımlarını
   açıklayabilir.

### Önerilen çalışma sırası

1. [Laboratuvarı](./lab.md) tamamla.
2. State ve instruction sözleşmesini yaz.
3. Önce `executeStep` fonksiyonunu ve testini üret.
4. İzleme kaydını ekle.
5. Hata ve adım sınırı davranışlarını ekle.
6. Üç örnek program ve testlerini tamamla.
7. README ve teknik model açıklamasını yaz.
8. [Assessment rubric](./assessment-rubric.md) ile chapter katkısını kontrol et.

## Validation

- Yeni project ID: 0
- Kanonik proje bağı: `V01-P01`
- Chapter outcomes: `V01-LO003`, `V01-LO004`
- Öğretilmemiş framework zorunluluğu: 0
- Model sınırı ve hata davranışı: Tanımlı

## References

- [Canonical V01-P01 Project](../../../projects/project-01-instruction-simulator.md)
- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Laboratuvar](./lab.md)
- [Assessment Rubriği](./assessment-rubric.md)
