---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "Research Collection: Algoritma Nedir?"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-C04"
  - "V01-LO006"
derived_from:
  - "./research-request.md"
  - "../../academy/06-learning-outcomes.md"
x-production-unit: "lesson-02"
x-canonical-lesson-id: "V01-C04"
x-research-stage: "Collection"
x-verified-on: "2026-07-21"
---

# Research Collection: Algoritma Nedir?

## Purpose

Algoritma kavramı için doğrulanacak teknik tanımlar, nitelikler, sınırlar,
örnekler ve kaynakları toplamak.

## Scope

Koleksiyon `V01-C04` içinde algoritmanın problem contract’ından temsile ve
trace’e uzanan temel modelini kapsar; ileri karmaşıklık analizi kapsam dışıdır.

## Ownership

Kanonik öğrenme ilişkileri `V01-C04` ve `V01-LO006` tarafından yönetilir.
Bu koleksiyon yeni algoritma standardı oluşturmaz.

## Content

### Core Concepts and Definitions

NIST, algoritmayı belirli bir sonucu veren, açıkça belirtilmiş hesaplama süreci
veya kurallar kümesi olarak tanımlar. MIT 6.006 yaklaşımı, algoritmanın bir
problemi çözmesini her geçerli problem girdisi için doğru çıktı üretmesiyle
ilişkilendirir. Başlangıç modeli bu iki yönü birleştirmelidir: açık süreç ve
contract’a göre doğruluk.

| Kavram | Araştırma tanımı |
| --- | --- |
| Computational problem | Geçerli input kümesiyle kabul edilebilir output ilişkisini tanımlayan problem sınıfı |
| Problem instance | Problem sınıfının belirli bir girdisi |
| Algorithm | Geçerli girdileri contract’a uygun çıktılara dönüştüren açık ve sonlanan işlem dizisi |
| Precondition | Algoritmanın doğru çalışması için inputta beklenen koşul |
| Postcondition | Başarılı sonuçtan sonra sağlanması gereken koşul |
| Correctness | Algoritmanın her geçerli input için contract’ı karşılaması |
| Termination | İşlemin sonlu adımda durması |
| Trace | Belirli input için adım, durum ve kararların sistematik kaydı |
| Implementation | Algoritmanın belirli dil ve ortamda gerçekleştirilmesi |

### Algorithm Properties

- Açıklık/kesinlik: her adım uygulanabilir biçimde yorumlanmalıdır.
- Sonluluk: her geçerli inputta sonlu adımda durmalıdır.
- Input/output contract: kabul edilen girdiler ve beklenen sonuç tanımlıdır.
- Etkililik: adımlar seçilen yürütücü tarafından gerçekleştirilebilir olmalıdır.
- Genellik: tek örnek yerine tanımlı problem instance sınıfını hedefler.
- Doğruluk: termination tek başına yeterli değildir; sonuç contract’ı
  karşılamalıdır.

“Deterministic” olmak zorunlu evrensel özellik değildir; randomize algoritmalar
da tanımlı doğruluk/olasılık sözleşmeleriyle algoritmadır. Başlangıç dersinde
deterministic örnekler kullanılabilir ama kavram yanlış sınırlandırılmamalıdır.

### Terminology and Alternatives

- algoritma (algorithm): ana terim;
- yöntem (method): daha genel, her zaman kesin/sonlanan değildir;
- prosedür (procedure): bağlama göre algoritma veya program alt yordamı olabilir;
- sezgisel yöntem (heuristic): iyi çözüm arar, optimal/doğru sonuç garantisi
  vermeyebilir;
- tarif (recipe): sezgisel benzetme, precision ve exhaustiveness farkı vardır;
- implementation: algoritmanın belirli teknik temsili;
- trace/dry run: algoritmayı tek input üzerinde elle izleme.

### Historical Context

“Algorithm” terimi, el-Hârizmî’nin adının Latince biçimiyle tarihsel olarak
ilişkilidir; ancak modern formal algorithm kavramı yüzyıllar boyunca matematik,
mantık ve otomatik hesaplama çalışmalarıyla gelişmiştir. Ders tarihi tek bir
kişinin modern kavramı eksiksiz icat ettiği biçimde anlatmamalıdır.

### Common Misconceptions

1. Her adım listesi algoritmadır: belirsiz, bitmeyen veya contract’sız liste
   algoritma şartlarını karşılamayabilir.
2. Her algoritma programdır: program implementation’dır; algoritma dilden
   bağımsız açıklanabilir.
3. Tek örnekte doğru sonuç yeterlidir: doğruluk, tanımlı tüm geçerli girdileri
   kapsar.
4. Sonlanan her algoritma doğrudur: yanlış sonuçla da sonlanabilir.
5. Bir problemin tek doğru algoritması vardır: doğruluk, kaynak kullanımı ve
   sadelik trade-off’ları farklı çözümler üretir.
6. En kısa açıklama en iyi algoritmadır: eksik precondition ve edge case’ler
   kısa metni hatalı kılabilir.

### Real-world Applications

- ATM’de para çekme: validation, authorization, balance update, output.
- Rota seçimi: problem instance, constraints ve birden fazla doğru yaklaşım.
- Arama: target bulunması veya not-found sonucunun contract’a dahil edilmesi.
- Sıralama: aynı input/output contract için farklı algoritmalar.

### Prerequisites and Related Lessons

- `V01-C03`: problem, input, output, constraint, assumption, edge case.
- `lesson-04`: pseudocode representation.
- `lesson-05`: flowchart representation.
- `V01-C21`-`C23`: search, sort, complexity; yalnız ileri bağlantı.

### Potential Examples and Counterexamples

- En büyük sayıyı bulma: empty input precondition’ı açık bir finite scan.
- Kapı kilitleme: state ve failure durumlarıyla adımları kesinleştirme.
- Counterexample: “Gerekene kadar tekrar et” — termination condition belirsiz.
- Counterexample: sorted-input varsayımı yazılmamış binary search.
- Üç inputla trace: normal, boundary, invalid.

### Potential Diagrams

- `Problem Contract -> Algorithm -> Representation -> Trace -> Evidence`.
- Input/output relation ile algorithm box.
- Correctness ve termination için iki ayrı validation gate.
- Aynı algoritmanın prose/pseudocode/flowchart/program temsilleri.

### Source Register

| ID | Kaynak | Authority | Kullanım |
| --- | --- | --- | --- |
| `SRC-ALG-01` | NIST CSRC Algorithm Glossary | Government glossary | Tanım çekirdeği |
| `SRC-ALG-02` | ACM/IEEE-CS CS2023 | Curriculum authority | Algorithmic Foundations kapsamı |
| `SRC-ALG-03` | MIT OCW 6.006 Syllabus | University course | Algorithm açıklama, example, correctness, analysis evidence |
| `SRC-ALG-04` | CLRS, 4th edition | Recognized technical book | Terminology ve design/analysis sınırı |
| `SRC-ALG-05` | OpenStax Introduction to CS | Reviewed open textbook | Beginner representation examples |

## Validation

- Tanım hem açık süreç hem doğruluk contract’ı içerir.
- Termination ile correctness birbirinden ayrıldı.
- Determinism zorunlu özellik olarak yanlış sunulmadı.
- `LO006` için representation ve üç-input trace’e hazırlık mevcut.
- İleri complexity öğretimi üretilmedi.

## References

- NIST, [Algorithm — CSRC Glossary](https://csrc.nist.gov/glossary/term/algorithm)
- ACM/IEEE-CS, [Computer Science Curricula 2023](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
- MIT OpenCourseWare, [6.006 Introduction to Algorithms Syllabus](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/syllabus/)
- MIT Press, [Introduction to Algorithms, Fourth Edition](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/)
- OpenStax, [Computational Thinking](https://openstax.org/books/introduction-computer-science/pages/2-1-computational-thinking)
