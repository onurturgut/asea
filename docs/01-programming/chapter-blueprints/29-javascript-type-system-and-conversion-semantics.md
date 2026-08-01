---
document_type: "blueprint"
blueprint_id: "V01-C29-BP01"
blueprint_type: "Chapter"
scope_id: "V01-C29"
title: "Chapter 29 Blueprint — JavaScript Type System and Conversion Semantics"
version: "0.1.0"
status: "Draft"
freeze_status: "Unfrozen"
owner_role: "Curriculum Architect"
prerequisites:
  - "V01-C05"
  - "V01-C07"
  - "V01-C38"
learning_outcomes:
  - "V01-LO047"
  - "V01-LO048"
planned_artifacts:
  - "V01-C29"
  - "V01-C29-L01"
  - "V01-C29-EX01"
  - "V01-C29-QZ01"
  - "V01-C29-CH01"
  - "V01-C29-IV01"
  - "V01-C29-AS01"
review_ids: []
---

# Chapter 29 Blueprint — JavaScript Type System and Conversion Semantics

## Purpose

### Chapter Metadata

| Field | Value |
|---|---|
| Chapter ID | `V01-C29` |
| Module | `V01-M08` — JavaScript Runtime and Type Semantics |
| Difficulty | Intermediate |
| Estimated Study Time | 12–15 hours |
| Primary Lab | `V01-C29-L01` — Build a Conversion Boundary |
| Assessment | `V01-C29-AS01` |
| Previous Chapter | `V01-C38` |
| Next Chapter | `V01-C09` |

### Chapter Purpose

Öğrencinin JavaScript'te türün değişken adına değil çalışma zamanındaki değere
ait olduğunu açıklamasını; operator kaynaklı coercion ve equality adımlarını
değer+tür iziyle çözmesini; dış girdiyi domain değerine açık, doğrulanmış ve
kayıp riski görünür bir dönüşüm sınırında çevirmesini sağlamak.

### Why This Chapter Exists

C05 temel değer/tür modelini, C07 expression değerlendirmesini ve C38 güvenilir
bir Node.js gözlem ortamını kurdu. Ancak `"5" + 1`, `"5" - 1`, `Boolean("false")`
ve `0 == false` gibi sonuçlar ezberlenirse öğrenci yeni ifadede tahmin yapamaz.
C29 davranışları operator contract, abstract conversion ve equality algoritmasıyla
açıklar; C09'un Boolean kararlarına ve C30'un object semantiğine güvenilir devir yapar.

## Scope

### In Scope

- JavaScript'in dynamic ve runtime-typed değer modeli.
- Primitive türlerin operasyonel özeti ve `typeof` gözlem aracının sınırları.
- Explicit conversion: `Number`, `String`, `Boolean`.
- Implicit conversion/coercion'ın operator contract üzerinden izlenmesi.
- `+` ile string concatenation ve numeric addition ayrımı.
- Arithmetic operatorlarda numeric coercion.
- Truthy/falsy dönüşümü; `"false"` değerinin truthy olması.
- `NaN`, `Number.isNaN` ve conversion failure ayrımı.
- Strict equality (`===`) ile loose equality (`==`) algoritma sınırı.
- `null` ve `undefined` değerlerinin yokluk sözleşmesinde ayrılması.
- Dış girdide grammar validation → explicit conversion → converted-result
  validation zinciri.
- C38 Node.js workflow'unda yeniden üretilebilir type trace.

### Out of Scope

- Object identity, mutation, copying ve property modelinin ayrıntıları; C30.
- Complete Boolean predicate ve short-circuit tasarımı; C09.
- Floating-point, safe integer ve numeric reliability ayrıntıları; C34.
- Exception class ve custom error tasarımı; C36.
- TypeScript static type system.
- ECMAScript specification algoritmalarını bütünüyle ezberleme.

## Audience and Level

- **Audience:** C05, C07 ve C38 kanıtlarını geçmiş JavaScript öğrencisi.
- **Entry level:** Temel primitive değerleri ve expression evaluation'ı bilir;
  coercion algoritmalarını sistematik izlememiştir.
- **Exit behavior:** Öğrenci beklenmedik bir JavaScript ifadesini operand value/type,
  operator rule, conversion, intermediate value/type ve result üzerinden izler;
  veri sınırı için açık dönüşüm politikasını ambiguity ve loss riskiyle savunur.
- **Teaching posture:** Şaşırtıcı çıktı → tahmin → görünür type trace → teknik ad →
  kontrollü sınır tasarımı → bağımsız transfer.

## Prerequisites

### Required Evidence

- `V01-C05`: Değer ile türü ayırmak ve domain anlamına uygun temsil seçmek.
- `V01-C07`: Operand, operator, grouping ve intermediate result izlemek.
- `V01-C38`: Node.js sürümü, komutu, input'u ve output'u tekrar üretilebilir
  biçimde kaydetmek.

### Diagnostic Check

Öğrenci `const raw = "40"; const result = raw + 2;` ifadesinde başlangıç value/type,
operator ve sonucu tahmin eder. “Neden 42 değil?” sorusuna yalnız “JavaScript öyle”
demesi yeni chapter ihtiyacını; string operand ve `+` contract'ını söylemesi hazır
ön bilgiyi gösterir.

## Learning Outcomes

- **V01-LO047 (Analyze):** JavaScript ifadelerinde dynamic type, implicit coercion
  ve equality adımlarını operand, ara değer, tür ve sonuç iziyle çözümlemek.
- **V01-LO048 (Evaluate):** Veri sınırında explicit conversion ve validation
  stratejisini ambiguity, information loss, failure ve domain contract ölçütleriyle
  değerlendirmek ve savunmak.

### Evidence Contract

`LO047` için öğrenci en az sekiz ifadeyi çalıştırmadan önce tahmin eder ve her
dönüşümü operator/equality kuralına bağlayan type trace üretir. `LO048` için ham
string girdiyi number/boolean domain değerlerine dönüştüren bir boundary yazar;
normal, empty, whitespace, malformed ve ambiguous girdileri test eder ve reddedilen
alternatifleri açıklar.

## Content Map

### Core Concepts

1. Value type ile variable binding ayrımı.
2. Dynamic typing ve runtime observation.
3. Primitive values ve `typeof` sınırı.
4. Explicit conversion ile coercion ayrımı.
5. Operator-specific conversion: `+`, arithmetic, Boolean context.
6. `NaN` ve conversion outcome kontrolü.
7. Strict/loose equality algoritmaları.
8. Boundary conversion policy ve traceable failure.

### Teaching Sequence

```text
C38 kontrollü Node.js deneyi
  → aynı görünen girdilerin farklı türleri
  → value/type/binding ayrımı
  → explicit Number/String/Boolean gözlemleri
  → operator-specific implicit conversion traces
  → strict ve loose equality karşılaştırması
  → raw input grammar validation
  → explicit domain conversion
  → normal/boundary/invalid test evidence
  → C09 Boolean kararlarına ve P07'ye devir
```

### Canonical Running Example

Komut satırından gelen `rawMinutes` ve `rawCompleted` değerleri her zaman string
olarak gözlenir. Öğrenci önce `Number` ve `Boolean` ile naif dönüşüm yapıp empty,
whitespace ve `"false"` tuzaklarını görür. Sonra kabul edilen grammar'ı doğrular,
explicit conversion yapar ve sonucu yeniden doğrular.

## Practice and Assessment Plan

| Kademe | Öğrenci davranışı | Outcome |
|---|---|---|
| Tahmin et | Expression sonucunu value/type ile tahmin eder | `LO047` |
| Birlikte yapalım | `+`, `-`, Boolean ve equality izleri çıkarır | `LO047` |
| Şimdi sen dene | Yeni girdileri conversion table'a ekler | `LO047` |
| Hata avı | `Boolean("false")` ve `Number("")` defect'ini teşhis eder | `LO047`, `LO048` |
| Bağımsız uygulama | Validated conversion boundary üretir | `LO048` |
| Lab | Type-semantics dossier ve test suite teslim eder | `LO047`, `LO048` |
| Mülakat | Kural, risk ve alternatifleri sözlü savunur | `LO047`, `LO048` |

### Success Boundary

Sonuç tablosunu ezberlemek başarı değildir. Öğrenci yeni bir ifadede hangi
operator/equality kuralının conversion başlattığını açıklamalı; input boundary'de
hangi biçimleri neden kabul veya reddettiğini test ve domain contract ile savunmalıdır.

## Visual and Interaction Plan

- Binding kutusu içinde value/type değişim animasyonu.
- Operand → operator contract → conversion → result type hattı.
- `+` için string/numeric karar ağacı.
- Falsy değerler kümesi ve truthy counterexample kartları.
- Strict/loose equality yan yana algoritma izi.
- Raw input → grammar validation → conversion → result validation → domain value.
- Sağ panelde İngilizce Terimler, Type Trace ve Conversion Policy kartları.

## Review Gate

- [ ] `LO047` ve `LO048` canonical registry kapsamıyla eşleşiyor.
- [ ] Teknik iddialar güncel ECMAScript specification ile doğrulanmış.
- [ ] Ezber tablo yerine operator-specific mechanism ve trace öğretiliyor.
- [ ] `==` örnekleri folklore değil algoritma adımlarıyla açıklanıyor.
- [ ] `typeof null` sonucu null'ın gerçek türü olarak sunulmuyor.
- [ ] `Boolean("false")`, `Number("")`, whitespace ve `NaN` ayrıntıları test ediliyor.
- [ ] C09, C30 ve C34 kapsamları erken tüketilmiyor.
- [ ] Her önemli değişken, değer ve type kararı ayrıntılı açıklanıyor.
- [ ] Beş zorunlu uygulama kademesi ve P07 proje artışı bulunuyor.
- [ ] Markdown, code, JSON, runtime ve admin kontrolleri geçiyor.

## References

- [ECMAScript Language Types](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types)
- [ECMAScript Type Conversion](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion)
- [ECMAScript IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal)
- [ECMAScript IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal)
- [ASEA Teaching and Continuity Standard](../../standards/teaching-and-continuity-standard-v1.md)
- [C38 Chapter](../chapters/38-javascript-calisma-zamani-araclar-ve-yurutme-ortamlari.md)
