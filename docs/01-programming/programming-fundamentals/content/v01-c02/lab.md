---
document_type: "lab"
lab_id: "V01-C02-L01"
title: "Küçük Bir Makineyi İzle"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C02"
difficulty: "Beginner"
estimated_time: "90 minutes"
prerequisites:
  - "V01-C02"
  - "V01-C02-EX01"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
assessment_id: "V01-C02-AS01"
deliverables:
  - "execution-traces"
  - "execution-model-report"
---

# Laboratuvar — Küçük Bir Makineyi İzle

## Objective

Bir program temsilini, yürütme durumunu ve kontrol akışını birbirinden ayırmak;
üç farklı girdi üzerinde her talimattan sonra oluşan durumu hatasız izlemek.

## Requirements

### Çalışma ortamı

- Node.js 20 veya üzeri
- Terminal
- UTF-8 metin düzenleyici
- [Çalışan örnek](./examples.md)
- Git repository; mevcut ASEA çalışma alanının dışında kişisel bir lab klasörü
  kullanılabilir

Ortamı doğrula:

```powershell
node --version
git --version
```

Node.js sürümü `v20` veya üzeri görünmelidir. Çalışma dosyasını oluşturduktan
sonra sözdizimini kontrol et:

```powershell
node --check .\tiny-machine.mjs
```

### Eğitim makinesi sözleşmesi

```text
READ Rx          input kuyruğundan ilk değeri Rx'e alır; PC bir artar.
LOADI Rx,n       Rx=n yapar; PC bir artar.
ADD Rd,Ra,Rb     Rd=Ra+Rb yapar; PC bir artar.
SUB Rd,Ra,Rb     Rd=Ra-Rb yapar; PC bir artar.
JZ Rx,address    Rx sıfırsa PC=address; değilse PC bir artar.
JMP address      PC=address yapar.
OUT Rx           Rx değerini output listesine ekler; PC bir artar.
HALT             running=false yapar; PC değişmez.
```

Bu sözleşme öğretim modelidir; gerçek bir CPU'nun bütün davranışını temsil etmez.

## Tasks

### Görev 1 — Programı temsil et

Aşağıdaki programı JavaScript nesnelerinden oluşan `program` dizisine dönüştür:

```text
0: READ R1
1: LOADI R2, 2
2: SUB R3, R1, R2
3: JZ R3, 6
4: ADD R4, R1, R1
5: OUT R4
6: OUT R1
7: HALT
```

Program dizisinin pasif temsil, `state` nesnesinin ise çalışan durum olduğunu
README içinde açıkla.

### Görev 2 — Başlangıç durumunu kur

Durum en az şu alanları taşımalıdır:

```javascript
{
  pc: 0,
  registers: { R1: 0, R2: 0, R3: 0, R4: 0 },
  input: [],
  output: [],
  running: true
}
```

Her yeni çalıştırmada yeni durum üret. Bir çalışmanın durumunu diğer çalışmayla
paylaşma.

### Görev 3 — Bağımsız el izi

Kodu çalıştırmadan önce `input=[2]`, `input=[4]` ve `input=[0]` için üç izleme
tablosu hazırla. Her tabloda şunlar bulunsun:

- adım numarası,
- önceki PC ve tam durum,
- talimat,
- okunan değerler,
- değişen alanlar,
- sonraki PC ve tam durum.

### Görev 4 — Simülatörü tamamla

[Çalışan örnekteki](./examples.md) `step` fonksiyonunu genişleterek `READ`,
`SUB`, `JZ` ve `JMP` talimatlarını uygula. Bilinmeyen talimat, geçersiz PC ve boş
girdi için açıklayıcı hata üret.

### Görev 5 — İzleri karşılaştır

Programı üç girdiyle çalıştır. Otomatik günlük ile el izini karşılaştır. İlk
fark varsa şu formatta kaydet:

```text
Beklenen önceki durum:
Gerçek önceki durum:
Talimat:
İlk farklı alan:
Kök neden:
Düzeltme:
Yeniden doğrulama:
```

### Görev 6 — Model raporu

En fazla 500 kelimede şunları açıkla:

1. Kaynak dosya, program dizisi ve çalışan durum arasındaki fark.
2. PC'nin kontrol akışındaki rolü.
3. Aynı programın üç girdide neden farklı durum yolları izlediği.
4. Simülatörün gerçek CPU, işletim sistemi ve bellek hakkında garanti etmediği
   en az üç ayrıntı.

### Görev 7 — Git kanıtı

En az üç anlamlı commit oluştur:

```text
feat(lab): add tiny machine state model
feat(lab): implement control-flow instructions
test(lab): verify execution traces
```

Commit mesajları örneği aynen kopyalamak zorunda değildir; her commit tek ve
anlamlı bir değişiklik taşımalıdır.

## Bonus Challenge

Adım sınırı ekle. Program 100 talimattan sonra hâlâ çalışıyorsa sonsuz döngü
olasılığını belirten bir hata üret. Ardından `JMP 0` programıyla korumanın
çalıştığını göster. Bonus, temel değerlendirme puanını düşürmez.

## Deliverables

```text
v01-c02-lab/
├── README.md
├── tiny-machine.mjs
├── traces/
│   ├── input-0.md
│   ├── input-2.md
│   └── input-4.md
└── model-report.md
```

README; kurulum, çalıştırma, beklenen sonuç, bilinen sınırlar ve Git commit
özetini içermelidir.

## Evaluation Criteria

| Ölçüt | Puan |
| --- | ---: |
| Program/durum ayrımının doğruluğu | 15 |
| Üç bağımsız el izinin doğruluğu | 25 |
| Simülatör talimat davranışları | 20 |
| Hata ve sınır durumları | 10 |
| Model sınırlarının açıklanması | 15 |
| Tekrar üretilebilir çalışma yönergesi | 10 |
| Git geçmişi ve teslimat düzeni | 5 |
| **Toplam** | **100** |

Başarı eşiği 80 puandır. İz doğruluğu bölümünden en az 20, program/durum
ayrımından en az 10 puan zorunludur.

## Reflection

1. El izi ile otomatik izin ilk ayrıştığı nokta neydi?
2. Son çıktının doğru olması hangi ara durum hatalarını gizleyebilir?
3. Aynı program nesnesini koruyup yalnız başlangıç durumunu değiştirmek sana
   program/süreç ayrımı hakkında ne gösterdi?
4. Simülatörün modeline gerçekçi bir özellik eklemek bilişsel yükü nasıl
   değiştirirdi?

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Çalışan Örnekler](./examples.md)
- [Alıştırmalar](./exercises.md)
- [Challenge](./debugging.md)
- [Assessment Rubriği](./assessment-rubric.md)
