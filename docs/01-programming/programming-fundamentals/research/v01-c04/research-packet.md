---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-IDX-001"
supporting_document_type: "Index"
title: "V01-C04 Algorithms, Pseudocode, and Tracing Research Packet"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Research Engineer"
prerequisite_ids:
  - "V01-C03"
learning_outcome_ids:
  - "V01-LO006"
source_ids:
  - "ASEA-SRC-000001"
evidence_ids:
  - "ASEA-EV-000010"
claim_ids:
  - "ASEA-CLM-000016"
  - "ASEA-CLM-000017"
  - "ASEA-CLM-000018"
  - "ASEA-CLM-000019"
concept_ids:
  - "ASEA-CON-000016"
  - "ASEA-CON-000017"
  - "ASEA-CON-000018"
  - "ASEA-CON-000019"
knowledge_snapshot: "1.0.0"
graph_snapshot: "1.0.1"
generated_date: "2026-07-22"
updated_date: "2026-07-22"
language: "tr"
---

# V01-C04 Algorithms, Pseudocode, and Tracing Research Packet

## Overview

Bu paket, `V01-C04` için kitap kalitesinde Türkçe ders ve öğrenme varlıkları
üretiminden önce kullanılan araştırma girdisidir. Araştırma sorusu şudur:

> Bir başlangıç öğrencisi, C03’te ürettiği problem sözleşmesini programlama
> dilinden bağımsız, sonlanan bir algoritmaya nasıl dönüştürür ve iki normal,
> bir sınır girdisinde adım adım nasıl doğrular?

Hedef kitle programlama söz dizimini henüz öğrenmemiş başlangıç öğrencisidir.
JavaScript veya başka bir dil outcome’u tanımlamaz. Formal doğruluk ispatları,
Big-O, recursion ve executable implementation kapsam dışıdır.

## Learning Goals

`V01-LO006`: Öğrenci sonlanan bir çözümü pseudocode ile yazmalı ve üç test
girdisi üzerinde trace edebilmelidir.

Araştırma şu kanıtları sağlamalıdır:

- algoritmanın amaç ve sınırlarını açıklayan tanım,
- açık ön koşul ve son koşul,
- dil bağımsız fakat tek anlamlı pseudocode,
- iki normal ve bir boundary/invalid trace,
- her yinelemede ilerlemeyi gösteren sonlanma gerekçesi,
- trace’in kanıt gücü ve sınırları,
- AI önerisinin sözleşme ve trace ile denetlenmesi.

## Official Sources

| Kaynak | Otorite | Sürüm/tarih | Lisans/erişim | Kapsam |
|---|---|---|---|---|
| NISTIR 8318 DADS | NIST | 2020 | Public citation | Algorithm terminology |
| NIST DADS | NIST | Web, checked 2026-07-22 | Public web | Algorithm/termination reference |
| ISO 5807 | ISO/IEC | 1985, confirmed 2019 | Metadata public | Flowchart conventions |
| CS2023 Computing Foundations | ACM/IEEE-CS/AAAI | 2025 web | Public web | Algorithms as essential competency |
| ACM CCECC Computer Science I | ACM | Checked 2026-07-22 | Public web | Produce algorithms and trace execution |

ISO’nun ücretli tam metni kullanılmamış; yalnızca kamuya açık kayıt ve abstract
bilgisi pakete alınmıştır.

## Supporting Sources

| Kaynak | Tür | Kullanım | Sınır |
|---|---|---|---|
| MIT 6.046J Syllabus | University courseware | Algorithm description and correctness argument | Advanced proof detail excluded |
| MIT 6.046J Notes | University primary notes | Invariant and termination | Formal depth simplified |
| MIT 6.006 Lecture 1 | University primary notes | Correctness intuition | Complexity postponed |
| CMU 15-122 | University primary course | Contracts and termination | C0 syntax not taught |
| CMU Hoare Logic Notes | University primary notes | Partial vs total correctness | Formal logic excluded |
| OpenStax Introduction to CS | Institutional textbook | Beginner workflow and representation | Determinism claim scoped |
| NCCE Tracing Algorithms | National education resource | Trace table and error discovery | Python-specific parts excluded |
| NCCE Code Tracing Quick Read | Pedagogy guidance | Predict-before-run design | Code-writing claims not generalized |
| NCCE Flowcharts/Pseudocode | National education resource | Representation comparison | GCSE framing adapted |
| CS Field Guide | University-supported guide | Pseudocode explanation | Supporting only |

## Concept Coverage

| Concept | Research interpretation | Boundary |
|---|---|---|
| `ASEA-CON-000016` Pseudocode | İnsanların inceleyebileceği, dil bağımsız ve kesin algoritma gösterimi | Universal syntax değildir |
| `ASEA-CON-000017` Preconditions/Postconditions | Girdi yükümlülüğü ve başarılı bitiş garantisi | Formal Hoare logic öğretilmez |
| `ASEA-CON-000018` Algorithm Trace | Seçili girdi için adım ve state geçiş kaydı | Evrensel doğruluk ispatı değildir |
| `ASEA-CON-000019` Termination | Contract kapsamındaki her girdi için durma durumuna ulaşma | Undecidability veya formal proof kapsam dışı |

## Claim Coverage

- `ASEA-CLM-000016`: Pseudocode, control ve data işlemlerini incelemeye yetecek
  kesinlikte ifade eder.
- `ASEA-CLM-000017`: Ön koşul başlamadan önce; son koşul başarılı bitişten sonra
  doğru olması gerekenleri sınırlar.
- `ASEA-CLM-000018`: Trace, seçilen girdi için ilgili her adımı ve state değişimini
  kaydeder.
- `ASEA-CLM-000019`: Sonlanma, contract kapsamındaki her girdi için tanımlı stop
  durumuna ulaşma özelliğidir.

Bu paket canonical proposition metinlerini değiştirmez.

## Evidence Mapping

```text
V01-LO006
├── CON-000016 → CLM-000016 → EV-000010 → SRC-000001
├── CON-000017 → CLM-000017 → EV-000010 → SRC-000001
├── CON-000018 → CLM-000018 → EV-000010 → SRC-000001
└── CON-000019 → CLM-000019 → EV-000010 → SRC-000001
```

Expanded candidate sources lesson referencesini ve araştırma kapsamını
güçlendirir; canonical Source Registry’ye yeni kimlik eklenmediği için Stable
authority iddiası oluşturmaz.

## Terminology

| İlk kullanım | Sonraki kullanım | Kaçınılacak kullanım |
|---|---|---|
| Algoritma (Algorithm) | algoritma | Kod ile eş anlamlı kullanmak |
| Sözde kod (Pseudocode) | sözde kod | Tek evrensel syntax varmış gibi anlatmak |
| Ön koşul (Precondition) | ön koşul | Input validation ile tamamen eşitlemek |
| Son koşul (Postcondition) | son koşul | Her iç adımı tarif eden implementation sanmak |
| İzleme tablosu (Trace Table) | trace table | Test suite veya proof ile eşitlemek |
| Kuru çalıştırma (Dry Run) | kuru çalıştırma | Bilgisayarda çalıştırma sanmak |
| Sonlanma (Termination) | sonlanma | Yalnızca son satıra sahip olmak sanmak |
| Değişmez sezgisi (Invariant Intuition) | değişmez | Formal proof iddiası kurmak |

Pseudocode anahtarları (`INPUT`, `OUTPUT`, `IF`, `ELSE`, `WHILE`, `RETURN`) kod
benzeri notation oldukları için İngilizce bırakılır.

## Mental Models

### Tarif değil, sözleşmeli prosedür

Algoritma yemek tarifi benzetmesiyle başlatılabilir; ancak tarifin belirsizliği
ve insanın arka plan bilgisini kullanması nedeniyle benzetmenin sınırı hemen
gösterilmelidir. Bilgisayar için adımlar tek anlamlı ve contract’a bağlıdır.

### State filmi

Trace table, algoritmanın yalnız son fotoğrafını değil, her önemli adımdaki
state değişimini gösteren kareler dizisi olarak modellenir. Limit: tablo seçilen
girdi yolunu gösterir; bütün yolları kapsamaz.

### İlerleme sayacı

Sonlanma, her turda sıfıra yaklaşan veya üst sınıra yaklaşan ölçülebilir bir
değerle açıklanır. Limit: karmaşık algoritmalar için bu basit model yeterli
olmayabilir.

## Historical Context

Akış şeması gösterimleri bilgisayar programı belgelerinde uzun süredir
kullanılır; ISO 5807 bu sembol ve convention alanını standardize eder. Pseudocode
ise tek bir global standarda sahip olmadan eğitimde ve algoritma yayınlarında
dil ayrıntılarından bağımsız anlatım için kullanılır. Tarihsel ayrıntı lesson’ın
odağını dağıtmayacak şekilde kısa tutulmalıdır.

## Technical Details

### Algorithm contract

Her örnekte şu alanlar açık olmalıdır:

- Inputs ve domain
- Preconditions
- Required output
- Postconditions
- Invalid-input behavior
- Stop condition

### ASEA pseudocode convention

- Yapısal keywords büyük harfli yazılır.
- Bloklar indentation ile görünür kılınır.
- Her satır bir gözlenebilir operation taşır.
- Assignment için `←`, equality için `=` kullanılır.
- Input/output isimleri problem contract ile aynı tutulur.
- Loop, condition ve progress update ayrı satırlarda görünürdür.
- Belirsiz “işle”, “uygun şekilde” gibi fiiller kullanılmaz.

### Trace table contract

Minimum columns:

| Step | Executed instruction | Relevant state before | Relevant state after | Output/note |
|---|---|---|---|---|

Yalnız değişen values değil, branch sonucu ve stop nedeni de kaydedilir.

### Termination argument

Başlangıç seviyesinde dört soru yeterlidir:

1. Tekrarlanan bölüm hangisi?
2. Her turda değişen progress measure nedir?
3. Measure hangi bound’a yaklaşır?
4. Bound’a ulaşıldığında loop neden durur?

## Code References

Bu chapter executable language code’u öğretmez. Reference notation:

```pseudocode
ALGORITHM example(input)
  REQUIRE input satisfies the precondition
  state ← initial value
  WHILE stop condition is false
    perform one precise operation
    update progress measure
  END WHILE
  RETURN result
ENSURE result satisfies the postcondition
```

Bu yalnız notation contract’ıdır; final lesson örneği değildir.

## Best Practices

- Problem contract tamamlanmadan pseudocode yazmaya başlamama
- Tek anlamlı operation adları kullanma
- Ön koşul ve invalid behavior’ı görünür tutma
- Her loop için stop condition ve progress update’i birlikte inceleme
- Trace’ten önce output prediction yazma
- Normal, boundary ve invalid case’leri ayrı seçme
- Pseudocode ile trace satırlarının karşılıklı izlenebilirliğini koruma
- AI önerisini contract ve counterexample ile denetleme

## Common Mistakes

| Belirti | Kök neden | Tanılama | Onarım |
|---|---|---|---|
| Pseudocode JavaScript’e benziyor | Syntax’a erken bağlanma | Keyword ve API bağımlılıklarını işaretle | Davranış odaklı notation’a dön |
| Loop durmuyor | Progress update eksik/yanlış | Measure değerlerini trace et | Bound ve update’i yeniden kur |
| Boundary case yanlış | `>` ve `>=` belirsiz | Eşiğin altı/eşiti/üstünü trace et | Contract dilini kesinleştir |
| Trace atlıyor | State yalnız sonuçta kaydediliyor | Her operation sonrası state iste | Satırları instruction ile eşleştir |
| Üç trace “proof” sayılıyor | Evidence scope karışıklığı | Kapsanmayan input sor | İddiayı seçili case’lerle sınırla |
| AI kural ekliyor | Model suggestion otorite sanılıyor | Kaynak contract satırını iste | Varsayım olarak ayır ve doğrula |

## Edge Cases

- Minimum ve maximum contract-valid input
- Eşiğe eşit input
- Empty collection veya zero count
- Invalid negative input
- Unsupported category
- Multiple rules matching simultaneously
- Progress measure’ın değişmediği branch
- Stop condition’ın başta doğru olması
- One-step execution
- Output rounding/tie behavior varsa belirsizliği

## Real World Examples

### Fare calculation

Girdi mesafe ve passenger category; çıktı fare breakdown. Contract, discount
priority ve invalid distance davranışını belirler. İki normal ve bir boundary
case trace edilir.

### Rate limiter retry

Belirli sayıda retry, her turda azalan remaining-attempt count ile termination
sezgisini gösterir. Network implementation kapsam dışıdır.

### Order approval

Rule priority ve conflicting conditions, pre/postcondition ile trace’in farklı
branch’leri nasıl görünür kıldığını gösterir.

Bu senaryolar gerçek şirket davranışı iddiası değildir; öğretim için sınırlandırılmış
engineering scenarios’dur.

## Interview Notes

Görüşme kanıtı şu sorular etrafında toplanmalıdır:

- Algoritma ile program arasındaki fark nedir?
- Pseudocode ne zaman yeterince kesin sayılır?
- Preconditions ve postconditions kimin sorumluluğunu belirler?
- Bir loop’un sonlandığını nasıl savunursunuz?
- Üç trace neyi gösterir, neyi göstermez?
- AI tarafından üretilen pseudocode’u nasıl review edersiniz?

Güçlü cevap; contract, state, counterexample ve termination measure kullanır.

## Exercise Ideas

1. Goal statement’ı algorithm’dan ayırma
2. Ambiguous steps’i precise operations’a çevirme
3. Contract’tan pre/postcondition üretme
4. Pseudocode’taki syntax dependency’yi temizleme
5. Eksik trace satırlarını tamamlama
6. Boundary input seçme
7. Non-terminating loop’ta progress bug’ını bulma
8. Aynı contract için iki algoritmayı readability açısından karşılaştırma
9. AI pseudocode’una counterexample üretme
10. C03 ticket contract’ını C04 fare algorithm’a dönüştürme

## Quiz Ideas

- Concept distinction: algorithm/program/pseudocode
- Precondition vs postcondition classification
- Trace prediction
- Missing state field diagnosis
- Termination measure selection
- Boundary case selection
- Contract violation detection
- AI-invented rule identification
- Short termination defense
- Trace evidence limit explanation

Final quiz 25 soru ve ayrı answer key kullanmalıdır.

## Lab Ideas

Canonical `V01-C04-L01 — Design and Trace a Fare Algorithm`:

- C03 problem contract’ını input olarak kullan
- Pre/postconditions yaz
- Dil bağımsız pseudocode üret
- İki normal, bir boundary ve bir invalid trace oluştur
- Termination gerekçesi sun
- AI alternative’ını ilk çözümden sonra audit et
- Beş dakikalık technical defense hazırla

## Animation Ideas

1. Pseudocode satırı ile trace row’un eşzamanlı ilerlemesi
2. State değerlerinin frame-by-frame değişimi
3. Progress measure’ın bound’a yaklaşması
4. Precondition filter → algorithm → postcondition flow
5. Aynı contract’ın pseudocode ve flowchart görünümü

Her animasyonun static table, text alternative, pause ve reduced-motion
karşılığı olmalıdır.

## Further Reading

- NIST DADS: canonical term lookup için
- ACM/IEEE CS2023: algoritmik yetkinliğin curriculum bağlamı için
- MIT OCW algorithms: correctness reasoning’in ileri aşaması için
- CMU 15-122: contracts ve termination’ın programlara taşınması için
- NCCE tracing: beginner trace pedagogy için
- ISO 5807: flowchart convention standardının sınırı için

## Review Notes

- Kaynak sayısı: 16.
- Concept coverage: 4/4.
- Claim coverage: 4/4.
- Outcome coverage: `V01-LO006` complete for Draft research.
- Bilinen risk: canonical registry tek aggregate source/evidence kaydına bağlı;
  expanded kaynaklar Stable öncesi registry review gerektirebilir.
- İnsan technical/pedagogical review Repository Owner kararı gereği final pilot
  aşamasına ertelenmiştir; Draft üretimi engellenmez.

## Approval

Repository Owner bu üretim akışını başlatmıştır. Paket Draft üretim girdisi
olarak kullanılabilir. Stable veya independent-review approval iddiası yoktur.

## Version

`0.1.0`: İlk kapsamlı C04 araştırma paketi. Yeni canonical outcome, concept,
claim veya evidence oluşturmaz.

## Status

**Draft — Ready for Chapter Production Packet design.**

### References

- [Source Strategy](./source-strategy.md)
- [Research Collection](./research-collection.md)
- [Chapter Blueprint](../../../chapter-blueprints/04-algorithms-pseudocode-and-tracing.md)
- [Research Packet Standard](../../../../production/research-packet-standard.md)
