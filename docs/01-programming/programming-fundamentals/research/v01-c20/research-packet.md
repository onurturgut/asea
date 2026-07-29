---
document_type: "research-packet"
document_id: "V01-C20-RP01"
title: "V01-C20 Strings and Text Processing Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C20"
last_updated: "2026-07-29"
---

# V01-C20 Strings and Text Processing Research Packet

## Research Decision

`V01-LO031` için içerik üretimine başlanabilir. Teknik omurga ECMAScript,
ECMA-402, Unicode Standard Annex #15/#29 ve MDN'in JavaScript String
belgeleriyle doğrulandı. Ders API listesi olmayacak; dağınık bir Türkçe ders
başlığını açık politikalarla normalize, tokenize, filtre ve özetleyen veri
hattı üzerinden ilerleyecek.

## Scope

| Alan | Değer |
|---|---|
| Blueprint | `V01-C20-BP01` |
| Ön koşullar | `V01-C08`, `V01-C14`, `V01-C17` |
| Öğretim bağlamı | `V01-C19` iç içe yapılardan toplanan başlıklar |
| Outcome | `V01-LO031` |
| Lab | `V01-C20-L01` — Build a Text Statistics Pipeline |
| Sonraki chapter | `V01-C21` |

## Canonical Pipeline

```text
ham metin
  -> sınır boşluklarını temizle
  -> Unicode biçimini ortaklaştır
  -> kullanım amacına uygun locale ile case politikasını uygula
  -> token'lara ayır
  -> boş/anlamsız token'ları filtrele
  -> ölç veya özetle
  -> biçimlendirilmiş çıktı üret
```

Her aşama saf bir giriş/çıkış sözleşmesiyle gözlenir. Pipeline sırası otomatik
olarak evrensel değildir; ürün gereksinimine göre belgeyle savunulur.

## Atomic Evidence

### C20-EV01 — JavaScript String Representation

JavaScript string değerleri UTF-16 code unit dizileri olarak temsil edilir.
`length` ve indeksleme code unit düzeyinde çalıştığından kullanıcı tarafından
tek görsel karakter sayılan bazı emoji veya birleşik yazımlar birden fazla
birim sayılabilir.

### C20-EV02 — Code Unit, Code Point, Grapheme

Code unit depolama/indeksleme birimi, code point Unicode kimliği, grapheme
cluster ise kullanıcının çoğunlukla tek karakter olarak algıladığı birimdir.
`split("")` surrogate pair'i bölebilir; string iterator code point düzeyinde
ilerler; kullanıcı-algılı segmentasyon için locale-aware segmenter gerekebilir.

### C20-EV03 — Unicode Normalization

Görsel olarak aynı metin farklı code point dizileriyle temsil edilebilir.
`String.prototype.normalize("NFC")` kanonik olarak eşdeğer dizileri ortak
biçime getirebilir. NFKC/NFKD bazı anlamlı biçim ayrımlarını silebileceği için
körlemesine uygulanmaz.

### C20-EV04 — Turkish Case Mapping

Türkçede `I/ı` ve `İ/i` eşleşmeleri varsayılan Unicode case mapping'den farklı
karar gerektirir. `toLocaleLowerCase("tr-TR")` locale'i açıkça belirterek ürün
politikasını görünür kılar.

### C20-EV05 — Whitespace and Tokenization

`trim()` sınır whitespace'ini kaldırır, metnin içindeki aralıkları tek başına
düzeltmez. `split(" ")` yalnız tam bir ASCII space ayırıcısına göre böler ve
çoklu boşluklarda boş token üretebilir. Başlangıç pipeline'ı whitespace
regex'iyle sınırlandırılır; bütün diller için “kelime” tanımı sayılmaz.

### C20-EV06 — Locale-Aware Segmentation

Unicode text segmentation grapheme, word ve sentence sınırlarını ayrı
problemler olarak tanımlar. `Intl.Segmenter` locale-sensitive segmentasyon
sağlar. İlk örneğin odağını büyütmemek için ileri bölümde karşılaştırma olarak
sunulur.

## Pedagogical Decisions

1. Ders `"  JavaScript   TEMELLERİ  "` girdisinin aramada neden eşleşmediği
   problemiyle başlar.
2. İlk örnek yalnız `trim()` kullanır; bütün pipeline bir anda verilmez.
3. Her yeni aşamada ara değer tabloya eklenir.
4. Türk öğrenci bağlamında `"İSTANBUL"` örneği locale kararını zorunlu kılar;
   `"JAVASCRIPT"` karşı örneği tek locale'in karma dilli metni çözemediğini
   görünür yapar.
5. Unicode örneği “emoji uzunluğu garip” numarası olarak bırakılmaz; code
   unit/code point/grapheme kararına bağlanır.
6. Regex, yalnız whitespace ayırma için sınırlı araç olarak kullanılır; regex
   dili bu chapter'ın ayrı hedefi yapılmaz.
7. Parsing ile validation ayrılır: parçalamak, içeriğin geçerli olduğunu
   kanıtlamaz.

## Failure Boundary

- `trim()` iç boşlukları da tekleştirir sanmak;
- `split(" ")` sonucundaki boş token'ları görmemek;
- `toLowerCase()` sonucunu bütün diller için ürün politikası saymak;
- normalization ile case conversion'ı aynı işlem sanmak;
- `length` değerini kullanıcı-algılı karakter sayısı sanmak;
- empty input'u `[""]` token'ı olarak raporlamak;
- ham metni değiştirip hata kanıtını kaybetmek;
- aşamaları tek uzun ifadede birleştirip ara davranışları görünmez kılmak;
- tokenization'ın validation olduğu varsayımı;
- NFKC'yi anlam kaybı ihtimalini incelemeden kullanmak.

## Assessment Contract

Öğrenci bir metin pipeline'ını adlandırılmış aşamalarla tasarlar; her aşamanın
girdi, çıktı ve politikasını açıklar. Normal, çoklu whitespace, Türkçe case,
kanonik Unicode eşdeğerliği ve empty input vakalarını test eder. Başarı yalnız
son çıktı değil, ara iz ve karar gerekçesiyle kanıtlanır.

## Source Register

| Kaynak | Otorite | Kullanım |
|---|---|---|
| [ECMAScript Text Processing](https://tc39.es/ecma262/multipage/text-processing.html) | Ecma TC39 | String/trim/split/normalize sözleşmesi |
| [ECMAScript Internationalization API](https://tc39.es/ecma402/) | Ecma TC39 | Locale-aware case ve segmentation |
| [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Mozilla MDN | UTF-16, code point, grapheme sınırı |
| [MDN normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) | Mozilla MDN | Normalization örneği |
| [MDN toLocaleLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) | Mozilla MDN | Türkçe case mapping |
| [MDN Intl.Segmenter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) | Mozilla MDN | Locale-sensitive segmentasyon |
| [Unicode UAX #15](https://unicode.org/reports/tr15/) | Unicode Consortium | Normalization biçimleri ve riskleri |
| [Unicode UAX #29](https://unicode.org/reports/tr29/) | Unicode Consortium | Grapheme/word/sentence sınırları |

Kaynaklar doğruluk içindir; öğrenci metni bu belgelerin çevirisi değildir.
