---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-STUDY-001"
supporting_document_type: "Study Plan"
title: "V01-C03 Okuma ve Çalışma Rehberi"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Curriculum Designer"
source_ids:
  - "V01-C03"
  - "V01-LO005"
derived_from:
  - "../../../chapters/03-problem-tanimi-ve-ayristirma.md"
  - "../../../../../knowledge/production-packets/v01-c03-cpp-001.json"
---

# V01-C03 Okuma ve Çalışma Rehberi

## Purpose

C03 ana dersini başlangıç öğrencisinin not alabileceği, geri çağırabileceği ve
uygulayabileceği dengeli çalışma oturumlarına ayırmak.

## Scope

Rehber yeni lesson, assessment veya answer key üretmez. Ana dersin 4–5 saatlik
çalışma yükünü düzenler.

## Ownership

Planın sahibi Curriculum Designer'dır. Öğrenci süreleri kendi hızına göre
uyarlayabilir; fakat AI audit, bağımsız denemeden önce yapılamaz.

## Content

### Plan selection

- **Tek günlük plan:** İki 90 dakikalık okuma/uygulama, bir 60 dakikalık
  exercise, 30 dakikalık audit/reflection.
- **İki günlük plan:** İlk gün problem contract; ikinci gün boundaries,
  decomposition ve exercise.
- **Dört oturumlu plan:** Aşağıdaki önerilen rota; yeni başlayan için en dengeli
  seçenektir.

### Schedule

| Oturum | Odak | Okuma/çalışma | Teslim kanıtı |
| ---: | --- | ---: | --- |
| 1 | Problem space, stakeholder, problem statement | 60–70 dk | Kendi problem cümlen |
| 2 | Input/output, constraint/assumption, scope | 65–75 dk | Contract'ın ilk yarısı |
| 3 | Acceptance, boundaries, decomposition, traceability | 70–80 dk | Matrix + tree + graph |
| 4 | Hands-on exercise, AI audit, reflection | 85–100 dk | Beş teslim dosyası |

### Study method

1. Her teknik terim için Türkçe adı, İngilizce adı, tanım, non-example ve kendi
   örneğini yaz.
2. Contrast tablolarında önce sınıflandır, sonra gerekçeyi kontrol et.
3. Mermaid diagramlarını metne bakmadan kâğıda yeniden çiz.
4. Ticket-pricing örneğinde her yeni alanın önceki contract'ı nasıl değiştirdiğini
   işaretle.
5. Exercise sırasında ders örneğini kopyalama; yalnız soru merceklerini kullan.
6. AI'a contract vermeden önce dosyana “independent version” etiketi koy.
7. AI önerisini ayrı dosyada değerlendir; sessizce ana teslimin üzerine yazma.

### Adjustment rules

- Constraint/assumption karışıyorsa karar diagramına ve contrast table'a dön.
- Edge/invalid karışıyorsa önce valid domain'i tek cümlede tanımla.
- Decomposition yalnız isim listesiyse her parçaya consumes/produces/dependsOn
  alanlarını ekle.
- Acceptance criterion test edilemiyorsa ölçüsüz sıfatı bul ve observable
  behavior ile değiştir.
- AI önerisini neden kabul ettiğini açıklayamıyorsan öneriyi kullanma.

### Completion gate

Chapter tamamlanmış sayılmadan önce öğrenci:

- problem contract'ı notlara bakmadan açıklayabilmeli;
- en az bir constraint/assumption ve edge/invalid contrast'ı savunabilmeli;
- tree ile graph farkını kendi örneğinde gösterebilmeli;
- AI'ın uydurduğu bir requirement'ı authority eksikliği nedeniyle reddedebilmeli;
- C04'e taşınacak bounded problem artefact'ını teslim edebilmelidir.

## Validation

- Toplam çalışma hedefi: 4–5 saat.
- Outcome: yalnız `V01-LO005`.
- AI öncesi bağımsız deneme: zorunlu.
- Answer key exposure: yok.
- Prerequisite geri dönüş noktaları: tanımlı.

## References

- [Ana Ders](../../../chapters/03-problem-tanimi-ve-ayristirma.md)
- [Chapter Package](./chapter.md)
- [Research Packet](../../research/v01-c03/research-packet.md)
- [Production Design](../../../../../knowledge/production-packets/v01-c03-production-notes.md)
