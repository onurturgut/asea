---
document_type: "assessment-rubric"
assessment_id: "V01-C38-AS01"
title: "V01-C38 Yetkinlik Değerlendirmesi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
learning_outcomes:
  - "V01-LO065"
  - "V01-LO066"
---

# V01-C38 Yetkinlik Değerlendirmesi

## Değerlendirme Bileşenleri

| Bileşen | Ağırlık | Outcome |
|---|---:|---|
| Kavram ve katman açıklaması | %20 | `LO065` |
| Komut/`argv` yürütme izi | %15 | `LO065`, `LO066` |
| Çalışan CLI ve npm script | %20 | `LO066` |
| Tekrar üretilebilirlik paketi | %25 | `LO066` |
| Hata avı ve kök neden | %15 | `LO065`, `LO066` |
| Sözlü teknik savunma | %5 | `LO065` |

## Dört Düzeyli Rubric

### 4 — Bağımsız ve Aktarabilir

- Dil, engine, runtime, host ve tool sınırlarını doğru örneklerle açıklar.
- Komutu ve `argv` değerlerini hatasız izler.
- İki yürütme yolu aynı sonucu üretir.
- Kayıt başka bir öğrencinin müdahalesiz yeniden üretimine yeterlidir.
- Hataları katmana göre daraltır ve en küçük düzeltmeyi kanıtlar.

### 3 — Yetkin

- Ana ayrımlar doğru, küçük terminoloji eksikleri vardır.
- Workflow çalışır ve temel kayıt alanları tamdır.
- Hata teşhisi doğru olsa da gerekçesi kısmen yüzeyseldir.
- Küçük belge iyileştirmeleriyle akran yeniden üretimi mümkündür.

### 2 — Gelişiyor

- Host API ile JavaScript dili zaman zaman karışır.
- Program yalnız tek kişisel çalıştırma yoluyla çalışır.
- Sürüm, klasör veya tam komut kayıtlarından bazıları eksiktir.
- Düzeltme deneme-yanılmaya dayanır.

### 1 — Başlangıç

- Kaynak dosya, runtime ve process aynı kavram gibi açıklanır.
- Entry point/argüman indeksleri güvenilir değildir.
- Çalışan ve tekrarlanabilir teslimat yoktur.
- Hata kanıtı kaydedilmeden rastgele değişiklik yapılır.

## Geçme Kapısı

- Toplam en az `80/100`.
- `LO065` katman açıklamasında en az Düzey 3.
- `LO066` tekrar üretilebilirlik paketinde en az Düzey 3.
- Host API'sini dil özelliği saymak, sahte sürüm/çıktı kaydı veya yapılmamış
  akran pilotunu tamamlanmış göstermek kritik hatadır ve yeniden teslim ister.

## Yeniden Çalışma Yolu

Katman ayrımı zayıfsa öğrenci challenge deneyine; workflow kaydı zayıfsa lab'ın
ortam ve akran yeniden üretim aşamalarına döner. Tüm chapter'ı yeniden okumak
yerine eksik kanıta yönelik onarım uygulanır.
