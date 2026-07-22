---
document_type: lab
lab_id: "V01-C05-L01"
title: "İçe Aktarılan Değerleri Sınıflandırma ve Dönüştürme Laboratuvarı"
version: "0.1.0"
status: "Draft"
volume: "V01"
chapter: "V01-C05"
difficulty: "Beginner"
estimated_time: "120 minutes"
learning_outcomes: ["V01-LO007", "V01-LO008"]
assessment_id: "V01-C05-AS01"
language: "tr"
---

# İçe Aktarılan Değerleri Sınıflandırma ve Dönüştürme Laboratuvarı

## Objective

Bir etkinlik kayıt dosyasındaki ham değerleri sınıflandırmak; explicit conversion policy,
loss analysis ve test evidence üretmek.

## Scenario

Partner sistem kayıtları şu String/null alanlarla gönderiyor:

```js
const records = [
  { id: "000091", age: "18", paid: "true", amount: "199.90", seats: "2", note: "" },
  { id: "9007199254740993", age: "", paid: "false", amount: "0.10", seats: "0", note: null },
  { id: "A-104", age: "21x", paid: "yes", amount: "12 TL", seats: "-1", note: "🙂" },
];
```

Doğrulanmış requirements:

- `id`: 1–24 alphanumeric/hyphen identity; arithmetic yok, appearance korunur.
- `age`: required integer 0–130.
- `paid`: yalnız `"true"` veya `"false"`.
- `amount`: non-negative, en çok iki decimal digit; currency TRY.
- `seats`: integer 0–8.
- `note`: null veya en fazla 200 Unicode code point; empty String null’a normalize edilir.

## Environment

Node.js 20+ ve herhangi bir text editor yeterlidir. Yeni bir klasörde `lab.js` oluştur;
`node lab.js` ile çalıştır. Ek package kullanma. Expected output’u koddan önce `evidence.md`
dosyasına yaz.

## Tasks

1. Altı alanlık data dictionary oluştur.
2. On sekiz raw value’yu source type, target type ve representation ile sınıflandır.
3. Her field için accept/reject/normalize policy yaz.
4. Dönüştürücüleri result-object biçiminde geliştir; throw kullanmak zorunlu değildir.
5. En az 12 test oluştur: dört normal, üç boundary, üç invalid, iki ambiguous.
6. Her rejected value için field, raw value ve reason üret.
7. ID’yi Number’a dönüştürmediğini test evidence ile göster.
8. Amount için seçtiğin representation ve rounding kararını 100–150 kelimeyle savun.
9. AI’ye yalnız ilk sürümden sonra counterexample ürettir; kabul/reddettiğin önerileri kaydet.

## Required Deliverables

- `lab.js`
- `data-dictionary.md`
- `conversion-matrix.md`
- `test-matrix.md`
- `evidence.md`
- `ai-audit.md`
- `decision.md`

## Evaluation Criteria

| Ölçüt | Puan |
|---|---:|
| Type classification doğruluğu | 7 |
| Conversion analysis ve uygulama | 6 |
| Risk/boundary testleri | 3 |
| Evidence-based explanation | 4 |
| **Toplam** | **20** |

16/20 ve her outcome’da en az %70 gerekir. ID precision kaybı, `"false"` parsing veya
invalid age sessiz kabul edilirse sonuç en fazla 12/20 olabilir.

## Bonus Challenge

Ondalık ayırıcı olarak `,` kullanan locale-dependent amount input için yeni, çelişkisiz
boundary contract tasarla. Mevcut parser’ı sessizce genişletme; versioned policy öner.
