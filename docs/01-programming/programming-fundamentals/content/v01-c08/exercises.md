---
document_type: "exercise-set"
exercise_set_id: "V01-C08-EX01"
title: "Girdi, Çıktı ve Veri Dönüşümü — Alıştırmalar"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C08"
exercise_count: 20
learning_outcomes: ["V01-LO012"]
language: "tr"
---

# Girdi, Çıktı ve Veri Dönüşümü — 20 Alıştırma

## Çalışma Protokolü

Her görevde önce sözleşme, sonra tahmin, sonra kod, sonra test üret. “Çalıştı” yerine hangi
input class'larının kabul/reddedildiğini kanıtla.

## Temel Alıştırmalar

### Alıştırma 1 — Kaynak ve Tüketici

Terminal, JSON dosyası ve web formu için raw input representation, trust boundary ve output
consumer tablosu oluştur.

### Alıştırma 2 — Girdi Sözleşmesi

Bir `quantity` alanı için presence, raw type, target type, syntax, range, normalization,
invalid behavior ve output contract yaz.

### Alıştırma 3 — Pipeline Sıralaması

Receive, parse, validate, normalize, transform, format ve output kartlarını doğru sıraya koy;
her birinin cevapladığı soruyu yaz.

### Alıştırma 4 — Parse mi Validate mı?

Şu görevleri sınıflandır: JSON text'i object'e çevirme, yaşın 13–120 olması, sayısal metni
Number'a çevirme, rolün allowed set içinde olması, tarihi alanlara ayırma.

### Alıştırma 5 — Syntactic ve Semantic

Tarih, yaş ve ürün kodu için birer syntactic ve semantic validation örneği üret.

## Parser Davranışı

### Alıştırma 6 — Number Matrisi

`"42"`, `" 42 "`, `""`, `" "`, `"42px"`, `"3.5"`, `"Infinity"`, `null` ve `undefined`
değerlerini `Number` ile dönüştür; prediction/actual/type/acceptance tablosu yap.

### Alıştırma 7 — `parseInt` Karşılaştırması

Aynı değerleri `parseInt(raw, 10)` ile dene. Hangi contract'ta `Number`, hangisinde `parseInt`
seçeceğini gerekçelendir.

### Alıştırma 8 — Boş Girdi Tuzağı

`Number("") === 0` davranışının zorunlu quantity alanını nasıl bozabileceğini göster; presence
kontrolünü conversion'dan önce ekle.

### Alıştırma 9 — JSON İki Aşama

`{"age":"24"}` ve `{"age":24}` metinlerini parse et. JSON syntax success ile field contract
success'i ayrı raporla.

### Alıştırma 10 — Controlled Failure

Bir numeric parser'ı `{ ok: true, value }` / `{ ok: false, error }` sonucu döndürecek biçimde
yaz. Throw kullanmama kararını açıkla.

## Normalization ve Output

### Alıştırma 11 — Alan Bazlı Policy

Name, password, product code ve email için `trim`, case conversion ve Unicode normalization
kararlarını ayrı ayrı değerlendir. Evrensel kural yazma.

### Alıştırma 12 — Data Loss

`"  A B  "`, `"İpek"`, `"iPEK"` ve whitespace içeren password için yanlış normalization'ın
hangi anlamı kaybettiğini yaz.

### Alıştırma 13 — Internal ve Display

123450 kuruşu internal integer, Turkish display ve machine JSON biçimlerinde üret. Display
String'in hesaplamaya neden geri sokulmaması gerektiğini açıkla.

### Alıştırma 14 — Error Tasarımı

`Invalid input` mesajını field/code/message/correction içeren üç erişilebilir hataya dönüştür.

### Alıştırma 15 — Hassas Veri

Password ve token validation failure'larında hangi bilgilerin loglanmaması gerektiğini; güvenli
diagnostic metadata'yı belirt.

## Mühendislik Alıştırmaları

### Alıştırma 16 — Ortam Değişkeni

`process.env.PORT` için missing/default/parse/range sözleşmesi ve sekiz test yaz.

### Alıştırma 17 — Kayıt Düzeyi Kural

`age`, `guardianConsent` alanları için field ve cross-field validation'ı ayır. C09'a taşmadan
karar cases tablosu üret.

### Alıştırma 18 — Hattı Aç

Raw input'u tek expression'da parse/normalize/calculate/format eden bir örneği en az altı
adlandırılmış aşamaya böl.

### Alıştırma 19 — Çalışma Ortamı

Yeni klasörde `exercise-19.js` oluştur. Node sürümünü `node --version` ile kaydet. 12 input için
`raw`, `parsed`, `validated`, `normalized`, `output`, `errorCode` kolonlarını `console.table`
ile göster. Kodu `node exercise-19.js` komutuyla çalıştır.

### Alıştırma 20 — Başlangıç Koduyla Contract Runner

Aşağıdaki kodu tamamla ve en az 15 vaka ekle:

```js
const contract = {
  field: "age",
  required: true,
  min: 13,
  max: 120,
};

function receive(raw) {
  // Ham değeri değiştirmeden kaydet.
}

function parse(raw) {
  // Presence ve entire-input kararını görünür kıl.
}

function validate(value, fieldContract) {
  // Tür ve aralık kurallarını uygula.
}

function format(result) {
  // İnsan çıktısını internal değerden ayrı üret.
}
```

## Tamamlama Ölçütü

- 20 alıştırma tamamlanmalı.
- En az 12 alıştırmada contract veya pipeline trace bulunmalı.
- 19 ve 20 çalıştırılabilir kanıt üretmeli.
- Parse success ile validation success hiçbir kayıtta karıştırılmamalı.
