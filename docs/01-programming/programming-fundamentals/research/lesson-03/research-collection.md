---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "Research Collection: Problem Çözme Yaklaşımı"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-C03"
  - "V01-LO005"
derived_from:
  - "./research-request.md"
  - "../../academy/06-learning-outcomes.md"
x-production-unit: "lesson-03"
x-canonical-lesson-id: "V01-C03"
x-research-stage: "Collection"
x-verified-on: "2026-07-21"
---

# Research Collection: Problem Çözme Yaklaşımı

## Purpose

Hesaplama problemi çerçeveleme ve çözüm geliştirme için doğrulanabilir bilgi
tabanını toplamak.

## Scope

Belirsiz ihtiyaçtan problem contract’a; decomposition, abstraction, modelleme,
assumption/constraint kaydı, edge case ve iteratif validation’a uzanır.

## Ownership

Koleksiyon `V01-C03` kapsamını genişletemez. Normalize edilmiş sonuçlar yalnız
nihai Research Packet üzerinden Lesson Production’a aktarılır.

## Content

### Core Concepts and Definitions

| Kavram | Araştırma tanımı |
| --- | --- |
| Problem posing | Çözülmeye değer soruyu, bağlamı ve başarı koşulunu ortaya koyma |
| Problem statement | Mevcut durum, istenen sonuç ve sınırı açıklayan ifade |
| Input | Çözümün aldığı veri, olay veya başlangıç durumu |
| Output | Çözümün üretmesi gereken gözlenebilir sonuç |
| Constraint | Çözüm uzayını zorunlu olarak sınırlandıran koşul |
| Assumption | Doğru kabul edilen fakat doğrulanması veya kaydedilmesi gereken önerme |
| Edge case | Geçerli domain’in sınırında veya nadir kombinasyonunda bulunan durum |
| Decomposition | Problemi yönetilebilir ve ilişkileri açık alt problemlere ayırma |
| Abstraction | Amaç için gerekli özellikleri koruyup ilgisiz ayrıntıyı erteleme |
| Model | Problem hakkında soru sormayı ve tahmin üretmeyi sağlayan amaçlı temsil |
| Validation | Üretilen çözümün gerçek ihtiyacı karşılayıp karşılamadığını sınama |
| Verification | Çözümün tanımlı contract’a uygun yapılıp yapılmadığını sınama |

Wing’in hesaplamalı düşünme (computational thinking) çerçevesi problem çözme,
sistem tasarlama, abstraction ve decomposition’ı program yazmanın ötesinde
konumlandırır. National Academies, computing deneyimlerinde gerçek dünya
problemleriyle bağ kurmayı ve sistematik problem çözmeyi vurgular. CSTA 2026
uygulamaları problem tanımlama, abstraction oluşturma, teknoloji üretme ve
test/refine etme zincirini destekler.

### Working Cycle

Araştırmadan çıkarılan esnek mühendislik döngüsü:

1. Bağlamı ve stakeholder’ı belirle.
2. Problemi, başarı ölçütünü ve scope dışını yaz.
3. Input, output, constraint ve assumption’ları kaydet.
4. Normal, boundary ve invalid örnekleri topla.
5. Problemi alt problemlere ayır; ilişkileri koru.
6. Uygun abstraction/model seç.
7. Bir veya daha fazla çözüm yaklaşımı üret.
8. Yaklaşımı örneklerle test et; evidence topla.
9. Yanlış assumption veya eksik edge case bulunduğunda modeli güncelle.

Bu sıralama geri dönüşlüdür; doğrusal “bir kez yap ve bitir” süreci değildir.

### Terminology and Alternatives

- problem çözme (problem solving);
- problem kurma/tanımlama (problem posing/definition);
- parçalama (decomposition);
- soyutlama (abstraction);
- kısıt (constraint) ve varsayım (assumption);
- sınır durum (edge case) ve geçersiz girdi (invalid input);
- acceptance criterion, requirement ve solution approach.

“Requirement” stakeholder’ın beklediği davranışı; “constraint” seçimi
sınırlayan koşulu; “assumption” doğruluğu izlenmesi gereken kabulü belirtir.

### Common Misconceptions

1. İlk duyulan çözüm problem tanımıdır: solution fixation gerçek ihtiyacı örter.
2. Decomposition yalnız işi eşit parçalara bölmektir: dependencies ve shared
   state göz ardı edilemez.
3. Abstraction ayrıntıları sonsuza dek yok saymaktır: yalnız amaç için geçici
   olarak ilgisiz ayrıntıyı ertelemektir.
4. Assumption gerçek demektir: doğrulanmamış assumption risk kaydıdır.
5. Edge case yalnız “hata”dır: boş, tek elemanlı veya maksimum geçerli değer
   doğru domain’in parçası olabilir.
6. Doğru çözüm ilk denemede bulunur: validation yeni bilgi üretir ve iteration
   gerektirir.
7. Kullanıcı ne istediğini tam bilir: ihtiyaç discovery ve örneklerle
   netleşebilir.

### Real-world Applications

- Toplu taşıma gecikme bildirimi: “gecikmeyi azalt” yerine kullanıcı, data
  freshness, threshold ve notification outcome’u belirleme.
- Dosya yükleme: size/type constraints, duplicate names, network failure,
  observable success.
- Bütçe takip aracı: stakeholder, currency, rounding, time period ve privacy
  assumptions.
- Randevu planlama: time zones, overlaps, cancellation ve no-availability edge
  case’leri.

### Prerequisites and Related Lessons

- `V01-C01`: program/algorithm/instruction ayrımı.
- `V01-C02`: state, input/output ve execution model.
- `V01-C04`: problem contract’ından finite algoritmaya geçiş.

### Potential Examples

- Kötü: “Bir not uygulaması yap.” İyi problem contract’a dönüşüm tablosu.
- “En ucuz rota” probleminde cheapest, travel time, transfer ve accessibility
  constraints çatışması.
- Büyük “etkinlik düzenle” problemini registration, capacity, schedule ve
  communication alt problemlerine ayırıp dependencies’i gösterme.
- Assumption log: iddia, evidence, owner, validation method.

### Potential Diagrams

- `Need -> Problem Contract -> Model -> Candidate Solution -> Evidence -> Revise`.
- Problem onion: context, stakeholder, input/output, constraints, edge cases.
- Decomposition tree with dependency arrows.
- Assumption/constraint/requirement comparison matrix.

### Source Register

| ID | Kaynak | Tür | Kullanım |
| --- | --- | --- | --- |
| `SRC-PS-01` | Wing, Computational Thinking | Peer-reviewed viewpoint | Abstraction, decomposition, problem solving |
| `SRC-PS-02` | National Academies 2021 report | Consensus study | Authentic problems ve computing competencies |
| `SRC-PS-03` | CSTA 2026 Standards | Professional standard | Define, abstract, create, test/refine practices |
| `SRC-PS-04` | ACM/IEEE-CS CS2023 | Curriculum report | Algorithmic problem-solving and SDF |
| `SRC-PS-05` | National Academies 2026 report highlights | Consensus report | Problem posing, abstraction, algorithmic thinking |

## Validation

- Outcome öğeleri input, output, constraint, assumption ve edge case: 5/5.
- Decomposition ve abstraction birbirinden ayrıldı.
- Süreç iterative olarak tanımlandı.
- Evrensel tek metodoloji veya yeni curriculum adımı üretilmedi.
- Beginner examples teknoloji bağımsız tutuldu.

## References

- Jeannette M. Wing, [Computational Thinking](https://doi.org/10.1145/1118178.1118215), Communications of the ACM 49(3), 2006
- National Academies, [Cultivating Interest and Competencies in Computing](https://www.nationalacademies.org/read/25912/chapter/3), 2021
- CSTA, [2026 PK–12 Computer Science Standards](https://csteachers.org/pk12standards/view/)
- ACM/IEEE-CS, [Computer Science Curricula 2023](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
- National Academies, [Data and Computing in K–12 Education: Report Highlights](https://nap.nationalacademies.org/resource/29303/Data%20and%20Computing%20in%20K12%20%20Report%20Highlights.pdf), 2026
