---
document_type: "lab"
lab_id: "V01-C08-L01"
title: "Kayıt Verisini Normalleştirme"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
difficulty: "Beginner"
estimated_time: "150 minutes"
learning_outcomes: ["V01-LO012"]
assessment_id: "V01-C08-AS01"
language: "tr"
---

# Laboratuvar — Kayıt Verisini Normalleştirme

## Senaryo

Bir eğitim platformunun terminal kayıt aracını geliştiriyorsun. Girdiler form, CSV veya terminal
gibi farklı kaynaklardan gelebiliyor ve tamamı String ağırlıklı ham veri üretiyor. Sistem bozuk
kayıtları sessizce kabul ediyor; kullanıcılar hangi alanı düzeltmeleri gerektiğini anlamıyor.

## Ham Veri

```js
const rawRecords = [
  { name: "  Ada Lovelace  ", age: "36", role: "STUDENT", newsletter: "yes" },
  { name: "A", age: "12", role: "admin", newsletter: "maybe" },
  { name: "Deniz Kaya", age: "18x", role: "student", newsletter: "no" },
  { name: "  İpek Ak  ", age: "24", role: "MENTOR", newsletter: "yes" },
];
```

## Sözleşme

- `name`: zorunlu String, NFC sonrası 2–50 karakter; baş/son boşluk kaldırılır.
- `age`: tümü onluk tamsayı olan String; 13–120 aralığında.
- `role`: `student` veya `mentor`; case-insensitive raw giriş kabul edilip lower-case internal.
- `newsletter`: yalnız `yes`/`no`; internal Boolean'a dönüşür.
- Unknown fields reddedilir veya açık policy ile raporlanır.
- Başarısız kayıt, alan-temelli bütün uygun hataları döndürür.
- Human output ve machine output ayrı üretilir.

## Görevler

### Görev 1 — Contract Table

Dört alan için raw type, target type, presence, syntax, range/set, normalization, error code ve
output tablosu yaz.

### Görev 2 — Pipeline Tasarımı

Receive, shape check, parse, validate, normalize, transform, format ve output aşamalarını çiz.
Her stage input/output type/shape ve failure tanımlasın.

### Görev 3 — Saf Fonksiyonlar

Şunları uygula:

```text
parseAge(rawAge)
normalizeName(rawName)
parseNewsletter(rawNewsletter)
normalizeRole(rawRole)
validateRegistration(fields)
buildRegistration(rawRecord)
formatHuman(result)
formatMachine(result)
```

Fonksiyonlar raw data'yı mutate etmemeli.

### Görev 4 — Error Model

Errors en az `field`, `code`, `message` taşımalı. Raw password/token gibi hassas değerleri
yansıtmayacak genel bir tasarım notu ekle.

### Görev 5 — Test Matrisi

En az 18 test:

- 5 normal;
- 5 boundary;
- 6 invalid;
- 2 normalization/data-loss vakası.

Her test stage, expected, actual ve pass/fail kanıtı üretsin.

### Görev 6 — AI Audit

İlk çözümü kendin tamamla. Sonra [AI Mentor](./ai-mentor.md) ile review yap. Her öneriyi kabul,
ret veya deney gerekli olarak işaretle; source/test kanıtı ekle.

## Teslim Yapısı

```text
v01-c08-lab/
├── README.md
├── input-contract.md
├── pipeline-trace.md
├── registration.js
├── registration.test.js
├── sample-output.md
└── ai-review.md
```

## Başarı Ölçütleri

- Raw data domain calculation'a sızmaz.
- Parse ve validation ayrı kanıtlanır.
- En az altı görünür stage bulunur.
- 18 testin tamamı beklenen sonucu verir.
- Error output eyleme dönük ve alan-temellidir.
- Human ve machine representation ayrıdır.
- Rubrik sonucu en az 80/100'dür.

## Bonus

Input source'u terminalden JSON dosyasına değiştiren bir adapter tasarla. Domain pipeline'ı
değişmeden kalmalıdır.
