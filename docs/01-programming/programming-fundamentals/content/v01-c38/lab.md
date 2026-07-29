---
document_type: "lab"
lab_id: "V01-C38-L01"
title: "Tekrar Üretilebilir JavaScript Çalışma Akışı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
learning_outcomes:
  - "V01-LO065"
  - "V01-LO066"
assessment_id: "V01-C38-AS01"
estimated_time: "2-3 saat"
---

# V01-C38-L01 — Tekrar Üretilebilir JavaScript Çalışma Akışı

## Senaryo

ASEA'daki başka bir öğrenci, oluşturduğunuz çalışma raporunu kendi
bilgisayarında üretmek istiyor. Size soru sormadan yalnız repository içindeki
dosyaları ve README'yi kullanacak. Göreviniz yalnız çalışan kod değil,
tekrarlanabilir bir yürütme sözleşmesi teslim etmektir.

## Başlangıç Sözleşmesi

- Desteklenen Node.js LTS kullanılmalı.
- Haricî npm bağımlılığı eklenmemeli.
- Program tek bir `.js` giriş dosyasından başlamalı.
- Runtime sürümü sabit metin olarak uydurulmamalı; gerçek komut çıktısı
  kaydedilmeli.
- Gizli anahtar veya kişisel veri kullanılmamalı.

## Aşama 1 — Ortam Kanıtı

`environment-record.md` dosyasında şunları kaydedin:

```text
İşletim sistemi:
node --version:
npm --version:
Çalışma klasörü:
Tarih:
```

## Aşama 2 — Program

`study-session.js` şu komutu kabul etsin:

```powershell
node study-session.js Ada 45 3
```

Argümanlar sırasıyla öğrenci adı, çalışma dakikası ve tamamlanan görev sayısıdır.
Program şu çıktıyı üretmelidir:

```text
Öğrenci: Ada
Çalışma süresi: 45 dakika
Tamamlanan görev: 3
Oturum puanı: 48
```

Oturum puanı bu lab için yalnız `minutes + completedTasks` biçimindedir.
Pedagojik bir puanlama iddiası değildir.

## Aşama 3 — Değer İzleme

Şu adları kullanın:

- `studentName`
- `rawMinutes`
- `rawCompletedTasks`
- `minutes`
- `completedTasks`
- `sessionScore`

Her biri için gerçek bilgi, kaynak, başlangıç türü, hesaplama türü, `const`
kararı ve eksik girdi durumunu açıklayan tablo hazırlayın.

## Aşama 4 — İki Başlatma Yolu

`package.json` içinde:

```json
{
  "name": "c38-study-session",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node study-session.js"
  }
}
```

Programı iki yolla çalıştırın:

```powershell
node study-session.js Ada 45 3
npm run start -- Ada 45 3
```

İki çıktının aynı olduğunu kanıtlayın.

## Aşama 5 — Hata Deneyi

Aşağıdaki deneyleri yapın, sonucu düzeltmeden önce kaydedin:

1. Dosyanın bulunmadığı klasörde `node study-session.js Ada 45 3`.
2. `node study-session.js Ada kırkbeş 3`.
3. `node study-session.js Ada 45`.

Her deney için:

- beklenen;
- gerçekleşen;
- hata/şaşırtıcı davranışın katmanı;
- kök neden;
- C29 veya C10'a devredilecek soru

yazın.

## Aşama 6 — Akran Yeniden Üretimi

Bir akrana yalnız dosya paketini verin. Şunları gözlemleyin:

- Doğru klasöre gidebildi mi?
- Runtime ön koşulunu anladı mı?
- Argüman sırasını doğru kullandı mı?
- Beklenen çıktıyı tanıyabildi mi?
- Hata olursa kaydınız teşhise yardım etti mi?

Eksik bulunan en az bir belge ayrıntısını iyileştirin. Gerçek pilot henüz
yapılamıyorsa bu adımı “Pending human pilot” olarak bırakın; yapılmış gibi
işaretlemeyin.

## Teslimatlar

```text
c38-study-session/
├── study-session.js
├── package.json
├── README.md
├── environment-record.md
├── expected-output.txt
└── error-observations.md
```

## Kabul Testleri

```powershell
node study-session.js Ada 45 3
npm run start -- Ada 45 3
```

Her ikisi de dört beklenen satırı üretmelidir. Kaynak dosya syntax kontrolü:

```powershell
node --check study-session.js
```

## Değerlendirme

| Alan | Ağırlık |
|---|---:|
| Katmanları doğru açıklama | %20 |
| Çalışan iki yürütme yolu | %20 |
| Argüman/değişken/tür izi | %20 |
| Tekrar üretilebilir dokümantasyon | %25 |
| Hata deneyleri ve kök neden | %15 |

Kritik hata: Host API'sini dil özelliği diye açıklamak veya gerçek sürüm/komut
kanıtı olmadan işi tamamlandı saymak.
