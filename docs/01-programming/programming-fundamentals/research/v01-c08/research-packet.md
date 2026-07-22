---
document_type: "supporting-document"
supporting_document_id: "V01-C08-SD-RES-001"
supporting_document_type: "Research Packet"
title: "V01-C08 Input, Output, and Data Transformation Research Packet"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C08"
authority: "Derived"
owner_role: "Research Engineer"
prerequisite_ids: ["V01-C04", "V01-C07"]
learning_outcome_ids: ["V01-LO012"]
source_ids: ["ASEA-SRC-000001", "ASEA-SRC-000003"]
evidence_ids: ["ASEA-EV-000009", "ASEA-EV-000012"]
claim_ids: ["ASEA-CLM-000029", "ASEA-CLM-000030", "ASEA-CLM-000031"]
concept_ids: ["ASEA-CON-000029", "ASEA-CON-000030", "ASEA-CON-000031"]
generated_date: "2026-07-22"
language: "tr"
---

# V01-C08 Input, Output, and Data Transformation Research Packet

## Overview

Bu paket dış girdiyi güven sınırında alma, temsilini yorumlama, sözleşmeye göre doğrulama,
anlamını koruyarak normalize/dönüştürme ve hedef kitleye uygun çıktı üretme bilgisini toplar.
Chapter teknoloji bağımsız modelle başlar; Node.js ve ECMAScript yalnız çalıştırılabilir referans
ortamıdır.

## Learning Goals

`V01-LO012`: Öğrenci girdi sözleşmesini ve geçersiz vakaları tanımlar; en az üç aşamalı,
izlenebilir bir veri dönüşüm hattı tasarlar. Başarı kanıtı yalnız doğru görünen çıktı değil;
aşama sözleşmeleri, kontrollü hata davranışı ve normal/sınır/geçersiz testlerdir.

## Official Sources

ECMAScript 2026 dönüşüm ve JSON kuralları; Node.js 24 LTS `readline`/`process` belgeleri;
WHATWG HTML constraint validation; RFC 8259 ve ECMA-404 JSON; Unicode Normalization Forms;
W3C WCAG 2.2 hata tanımlama; CS2023 veri ve programlama yeterlikleri.

## Supporting Sources

MDN `Number`, `parseInt`, `JSON.parse`, `String.trim`, `String.normalize`, `Intl.NumberFormat`
ve constraint validation açıklamaları; OWASP Input Validation ve REST Security rehberleri.
Toplam 22 güncel ve bakımı sürdürülen resmî/standart/kurumsal kaynak kullanılır.

## Concept Coverage

- `ASEA-CON-000029`: Data Transformation Pipeline.
- `ASEA-CON-000030`: Parsing and Validation.
- `ASEA-CON-000031`: Normalization and Formatting.

Kavramlar `receive → parse → validate → normalize → transform → format → output` akışında
öğretilir. Her aşamanın girdi, çıktı, hata ve invariant sözleşmesi bulunur.

## Claim Coverage

`ASEA-CLM-000029`–`000031` semantik değişiklik yapılmadan kullanılır. Pipeline ayrımı bir trace
tablosuyla; parse/validate ayrımı başarı ve hata vakalarıyla; normalization/formatting ayrımı
aynı anlamın iç ve dış temsilleriyle kanıtlanır.

## Evidence Mapping

CS2023 yeterlik kapsamını; ECMA-262 ve JSON standartları dil/format davranışını; Node.js giriş
çıkış mekanizmasını; OWASP güven sınırı uygulamalarını; W3C erişilebilir hata geri bildirimini;
Unicode standardı metin normalizasyon sınırını destekler. Industry guide normative language
specification yerine kullanılmaz.

## Terminology

Girdi (Input), çıktı (Output), güven sınırı (Trust Boundary), girdi sözleşmesi (Input Contract),
ayrıştırma (Parsing), doğrulama (Validation), sözdizimsel doğrulama (Syntactic Validation),
anlamsal doğrulama (Semantic Validation), normalleştirme (Normalization), dönüştürme
(Transformation), biçimlendirme (Formatting), veri hattı (Pipeline), kontrollü hata
(Controlled Failure).

## Mental Models

Ham veri “yanlış” değil, henüz güvenilmemiştir. Her aşama bir temsil kabul eder ve daha güçlü
bir sözleşme üretir. Parse sembolleri program değerine çevirir; validation değerin burada kabul
edilebilir olup olmadığını denetler; normalization eşdeğer çeşitleri tek iç biçime getirir;
transformation yeni domain değeri üretir; formatting değeri hedefe uygun temsil eder.

## Historical Context

Input-process-output, bilgisayar biliminin temel açıklama modellerindendir. Modern yazılımda
orta bölüm tek işlem değildir: veri dosya, terminal, form, API veya sensörden gelebilir; her
sınır representation, validation ve failure kararları gerektirir. JSON'un standartlaşması ve
Unicode, “metin zaten metindir” varsayımının sınırlarını görünür kılar.

## Technical Details

Node `readline.question` bir String döndürür. `Number("")` sıfır, `Number("12abc")` `NaN`
üretir; `parseInt("12abc", 10)` 12 üretebilir. Bu fark parser seçiminin sözleşmeye bağlı olduğunu
gösterir. `JSON.parse` geçersiz JSON'da `SyntaxError` üretir; başarılı parse, alanların domain
bakımından geçerli olduğunu kanıtlamaz. Validation type/range/length/allowed-values ve
cross-field rules içerir. Normalization `trim`, açık case policy ve gerekliyse Unicode formuyla
yapılır; data loss riski değerlendirilir. Formatting internal value'yu değiştirmemelidir.

## Code References

Gerekli deneyler: CLI satırı alma; `Number`/`parseInt` fark matrisi; boş/whitespace/NaN/Infinity;
JSON parse ve sonrasında shape validation; `trim` ile boşluk; `normalize("NFC")`; case policy;
registration record pipeline; machine-readable JSON ile human-readable output ayrımı;
alan-temelli error listesi.

## Best Practices

Girdiyi kaynağı ne olursa olsun sınırda doğrula; sözleşmeyi koddan önce yaz; parsing ile
validation'ı ayır; allowlist/range/length kullan; başarı ve hata sonuçlarını açık modelle;
normalization'ı anlam kaybı açısından gerekçelendir; internal değerleri display string'e erken
çevirme; hatayı alan ve düzeltme önerisiyle sun; hassas girdiyi loglama; her aşamayı test et.

## Common Mistakes

Terminal girdisini Number sanmak; `parseInt` ile kısmi metni kabul etmek; `NaN` kontrolünü
atlamak; parse başarısını validity saymak; boş girdiyi sıfırlaştırmak; tüm String'leri lower-case
yapmak; sanitization ile validation'ı eşitlemek; biçimlendirilmiş para metniyle hesap yapmak;
tek “geçersiz” mesajı vermek; client validation'a güvenmek; raw input'u loglamak.

## Edge Cases

Boş String, yalnız whitespace, baş/son whitespace, `+0`, `-0`, decimal separator, `Infinity`,
çok büyük sayı, leading zeros, partial numeric text, Unicode-equivalent forms, Turkish `I/İ`,
çok uzun input, eksik alan, beklenmeyen alan, null/undefined, JSON duplicate names, yanlış
encoding, farklı newline biçimleri ve output locale.

## Real World Examples

Kayıt formu; CLI bütçe hesaplayıcı; CSV/JSON import; ortam değişkeni; API request; ürün kodu;
telefon numarası; para ve tarih görüntüleme; log kaydı; sensör ölçümü. Her örnekte trust
boundary ve output consumer ayrıca tanımlanır.

## Interview Notes

Güçlü aday parsing/validation/normalization/formatting farklarını örnekle açıklar; parse edilen
ama invalid olan bir değer üretir; client/server doğrulama rolünü ayırır; pipeline'da hata
yolunu çizer; `Number` ile `parseInt` seçimini contract üzerinden savunur.

## Exercise Ideas

Input kaynaklarını sınıflandır; contract tablosu yaz; `Number`/`parseInt` matrisi çıkar; parse ve
validation hatalarını ayır; registration record normalize et; alan hatalarını tasarla; pipeline
trace üret; human/machine output karşılaştır; AI pipeline'ında kayıp aşamayı bul.

## Quiz Ideas

25 madde: 7 kavram/ayrım, 8 trace ve parser davranışı, 6 failure diagnosis, 4 transfer/design.
Cevaplar ayrı dosyada ve ilk denemeden sonra açılır. `V01-LO012` yalnız recall ile ölçülmez.

## Lab Ideas

Normalize a Registration Record: raw name/age/email/consent girdileri için contract; receive,
parse, validate, normalize, transform ve format aşamaları; alan-temelli hata listesi; en az 18
normal/sınır/geçersiz test; AI audit ve decision log.

## Animation Ideas

Trust boundary'den geçen veri paketleri; aşama başına representation/type değişimi; parse başarı
ama validation failure dalı; canonical internal record ile farklı output views. Her animasyonun
statik Mermaid ve metin alternatifi bulunur.

## Further Reading

C20 Unicode ve ileri text processing'i, C24 error/failure architecture'ı derinleştirir. Web
forms, schema validators ve API security sonraki akademilerde ele alınır. Bu chapter, framework
öğretmeden dayanıklı sınır düşüncesi kazandırır.

## Review Notes

Parsing ile validation birleştirilmemeli. `trim` veya lower-case evrensel normalization gibi
sunulmamalı. Client-side validation security boundary sayılmamalı. Error message ham hassas
değeri yansıtmamalı. `parseInt` bütün numeric inputlar için varsayılan önerilmemeli. Output
encoding, sanitization ve escaping güvenlik akademisinin kapsamına taşmamalı; yalnız ayrım notu.

## Approval

Repository Owner, C07 onayıyla C08 Draft üretimini başlatmıştır. Öğrenci pilotu Akademi 01
tamamlandıktan sonraki toplu aşamaya ertelenmiştir.

## Version

Paket `0.1.0`; kaynaklar 2026-07-22 tarihinde doğrulandı. Node.js examples mevcut LTS sözleşmesine
göre yazılır; latest sayfası v26 gösterebildiği için üretimde LTS sürüm pin'i ayrıca kaydedilir.

## Status

**Research Complete — Ready for Draft Production.**

### References

- [ECMAScript 2026 Abstract Operations](https://tc39.es/ecma262/2026/multipage/abstract-operations.html)
- [ECMAScript 2026 Structured Data](https://tc39.es/ecma262/2026/multipage/structured-data.html)
- [Node.js 24 LTS Readline](https://nodejs.org/docs/latest-v24.x/api/readline.html)
- [Node.js 24 LTS Process](https://nodejs.org/docs/latest-v24.x/api/process.html)
- [WHATWG Constraint Validation](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#constraint-validation)
- [RFC 8259 — JSON](https://www.rfc-editor.org/info/rfc8259/)
- [ECMA-404 — JSON Syntax](https://ecma-international.org/publications-and-standards/standards/ecma-404/)
- [Unicode Normalization Forms](https://www.unicode.org/reports/tr15/)
- [WCAG 2.2 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [OWASP REST Security](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
- [MDN Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [MDN parseInt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN JSON.parse](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN String.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [MDN String.normalize](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [MDN Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [MDN Constraint Validation](https://developer.mozilla.org/docs/Web/HTML/Guides/Constraint_validation)
- [CS2023](https://csed.acm.org/)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)
- [CWE-20 Improper Input Validation](https://cwe.mitre.org/data/definitions/20.html)
- [The Twelve-Factor App — Config](https://12factor.net/config)
