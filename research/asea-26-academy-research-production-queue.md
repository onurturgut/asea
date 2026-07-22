---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-ROAD-002"
supporting_document_type: "Roadmap"
title: "ASEA 26-Academy Research Production Queue"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Research Lead"
source_ids:
  - "ASEA-SD-ROAD-001"
  - "ASEA-SD-CMAP-003"
derived_from:
  - "./asea-26-academy-curriculum-tree.md"
  - "./asea-26-academy-pedagogical-chapter-map.md"
  - "../docs/production/research-packet-standard.md"
---

# ASEA 26 Akademi Araştırma Üretim Kuyruğu

## Purpose

ASEA'nın 26 akademisindeki Chapter üretim birimlerinin araştırma sırasını,
kalite kapılarını ve paket durumunu takip etmek.

## Scope

Kuyruk 236 mevcut Chapter/Chapter adayını kapsar. Boş Research Packet dosyaları
önceden oluşturulmaz. Bir paket yalnız kaynak toplama ve kanıt eşleme çalışması
başladığında açılır; `Stable` yalnız Research Packet Standardındaki 26 bölüm ve
review kapıları tamamlandığında kullanılabilir.

## Ownership

- Kuyruk ve kaynak stratejisi: Research Lead
- Chapter kapsamı: Curriculum Architect
- Teknik kaynak onayı: alan uzmanı
- Pedagojik aktarım: Learning Designer
- Kaynak–Evidence–Claim eşlemesi: Knowledge Engineer

## Content

### Paket yaşam döngüsü

```text
Queued
→ Scope Defined
→ Source Strategy Ready
→ Collection Active
→ Evidence Mapped
→ Packet Draft
→ Technical Review
→ Educational Review
→ Research Ready
```

Bu etiketler kuyruk açıklamasıdır; kanonik belge lifecycle enum'u değildir.
Paket metadata'sında yalnız `Draft`, `Review`, `Stable`, `Deprecated` ve
`Archived` kullanılır.

### Research Packet tamamlanma kapısı

- [ ] Chapter scope, exclusions ve research questions kesin
- [ ] Learning Outcome ve prerequisites doğrulandı
- [ ] Birincil kaynaklar toplandı
- [ ] Supporting kaynakların kullanım sınırı yazıldı
- [ ] Kaynak version, tarih, lisans ve locator alanları kayıtlı
- [ ] Outcome → Concept → Claim → Evidence → Source zinciri tam
- [ ] Çelişki, belirsizlik ve güncellik riskleri kayıtlı
- [ ] Terminoloji ve çeviri kuralları hazır
- [ ] Mental model ve sınırları hazır
- [ ] Code reference ve teknik davranış doğrulandı
- [ ] Exercise, Quiz, Lab, Interview ve görsel fikirleri outcome'a bağlı
- [ ] Research Packet Standardındaki 26 H2 eksiksiz
- [ ] Markdown ve relative link doğrulaması geçti
- [ ] Technical ve Educational Review exact version için onaylandı

### Kaynak yeterliliği

Kaynak sayısı tek başına kalite ölçütü değildir. Paket, kapsam ve riskle orantılı
olarak aşağıdaki çeşitliliği hedefler:

- 5–10 specification, standard veya resmî dokümantasyon;
- 3–8 hakemli/kurumsal teknik çalışma;
- 2–6 güvenilir kitap veya uzun biçimli teknik kaynak;
- gerektiğinde üretim raporu, konferans ve sınırlı community kaynağı.

Bir davranışı tanımlayan birincil kaynak varken community özeti ana kanıt olarak
kullanılmaz. Güvenlik, cloud, veri, distributed systems ve AI Chapter'larında
bağımsız alan uzmanı review'u zorunludur.

### Üretim dalgaları

| Dalga | Akademiler | Öncelik gerekçesi | Durum |
| ---: | --- | --- | --- |
| 0 | Ortak framework ve Chapter haritası | Üretim sözleşmesi ve AI-native eşleme | Completed |
| 1 | 01, 04, 05 | Programlama, Git ve çalışma ortamı temeli | Active |
| 2 | 02, 03, 06 | Program tasarımı, algoritma ve kalıcı veri | Queued |
| 3 | 07–13 | Web platformu ve tip güvenli frontend | Queued |
| 4 | 14–16 | Backend, API ve güvenlik | Queued |
| 5 | 18, 17, 19 | Container, cloud ve teslimat | Queued |
| 6 | 20–23 | Mimari, kalıp, test ve system design | Queued |
| 7 | 24, 25 | AI ürün mühendisliği ve kariyer | Queued |
| 8 | 26 | Uçtan uca capstone teslimatı | Queued |

### Aktif araştırma kuyruğu

| Sıra | Üretim birimi | Araştırma durumu | Mevcut durum ve karar |
| ---: | --- | --- | --- |
| 1 | `V01-C03` Problem Definition and Decomposition | Research Ready | Research Packet, CPP, ana ders ve öğrenme paketi üretildi; Repository Owner onayladı |
| 2 | `V01-C04` Algorithms, Pseudocode, and Tracing | Research Ready | 16 kaynaklı Research Packet, CPP, 8.138 kelimelik ana ders ve öğrenme paketi üretildi; Repository Owner onayladı |
| 3 | `V01-C05` Values and Data Types | Research Ready | 26 kaynaklık koleksiyon, Research Packet, CPP, ana ders ve tam öğrenme paketi üretildi; Repository Owner onayladı |
| 4 | `V01-C06` Variables and State | Research Ready | Mevcut kapsamlı Research Collection/Packet doğrulandı; CPP, ana ders ve tam öğrenme paketi üretildi; Repository Owner onayladı |
| 5 | `V01-C07` Operators and Expressions | Research Ready | 18 kaynaklı Research Packet, CPP, ana ders ve tam öğrenme paketi üretildi; Repository Owner onayladı |
| 6 | `V01-C08` Input, Output, and Data Transformation | Research Ready | 22 kaynaklı Research Packet, CPP, ana ders ve tam öğrenme paketi üretildi; toplu üretim yetkisiyle ilerletildi |
| 7 | `V01-C09` Boolean Logic and Truth Tables | Research Ready | 20 kaynaklı Research Packet, CPP, 8.092 kelimelik ana ders ve tam öğrenme paketi üretildi |
| 8 | `V01-C10` Conditional Execution | Research Ready | 20 kaynaklı Research Packet, CPP, 8.051 kelimelik ana ders ve tam öğrenme paketi üretildi |
| 9 | `V01-C11` Repetition and Loops | Research Ready | 20 kaynaklı Research Packet, CPP, 8.017 kelimelik ana ders ve tam öğrenme paketi üretildi |
| 10 | `V01-C12` Nested and Composite Control Flow | Research Ready | 26 kaynaklı Research Packet, CPP, 8.022 kelimelik ana ders ve tam öğrenme paketi üretildi; Modül 03 üretim raporu hazırlandı |
| 11 | `V01-C13` Functions as Contracts | Research Ready | 26 kaynaklı Research Packet, CPP, 8.132 kelimelik ana ders ve tam öğrenme paketi üretildi |
| 12 | `V01-C14` Parameters and Return Values | Research Ready | 26 kaynaklı Research Packet, CPP, 8.016 kelimelik ana ders ve tam öğrenme paketi üretildi |
| 13 | `V01-C15` Scope, Lifetime, and Side Effects | Research Ready | 26 kaynaklı Research Packet, CPP, 8.010 kelimelik ana ders ve tam öğrenme paketi üretildi |
| 14 | `V01-C16` Functional Decomposition and Reuse | Research Ready | 26 kaynaklı Research Packet, CPP, 8.004 kelimelik ana ders ve tam öğrenme paketi üretildi; Modül 04 raporu hazırlandı |
| 15 | `V01-C17` Collections and Iteration | Research Ready | 26 kaynaklı Research Packet, CPP, 8.000+ kelimelik ana ders ve tam öğrenme paketi üretildi |
| 16 | `V01-C18` Records and Data Modeling | Next — Scope Not Started | Modül 05 ikinci üretim birimi |
| 17 | Akademi 04 ilk Chapter adayı | Queued | Git kaynak stratejisi ve Volume contract gerekir |
| 18 | Akademi 05 ilk Chapter adayı | Queued | Linux/POSIX kaynak stratejisi ve Volume contract gerekir |

### C03 araştırma kararı

Mevcut `lesson-03/research-packet.md` korunur ve önceki araştırma snapshot'ı
olarak kullanılır. Yeni `v01-c03/research-packet.md` çalışması:

1. Aynı `V01-C03` kapsamını korur.
2. `V01-LO005` metnini değiştirmez.
3. C01–C02 prerequisites zincirini korur.
4. 20 resmî/akademik kaynak adayıyla requirements engineering, systems
   engineering, computational thinking ve problem framing alanlarını
   karşılaştırır.
5. Research Packet Standardındaki 26 zorunlu bölümü uygular ve lint/link
   validation'dan geçmiştir.
6. Repository Owner Draft üretimi onayladı; öğrenci pilotu ve `Stable` kararı
   Akademi 01 içerikleri tamamlandıktan sonraki toplu kalite aşamasına ertelendi.

### Güncellik bakımı

- Living specification ve framework kaynağı: her Chapter release'inde
- Güvenlik, AI, cloud ve tool kaynağı: en geç 90 günde bir
- Stabil temel standard ve akademik çalışma: yılda bir
- Kırık bağlantı: her CI çalışmasında
- Deprecated davranış: source registry uyarısı ve etkilenen paket review'u

## Validation

- Toplam üretim birimi: 236.
- Tamamlanan ilk araştırma birimleri: `V01-C03`, `V01-C04`, `V01-C05`, `V01-C06`, `V01-C07`, `V01-C08`, `V01-C09`, `V01-C10`, `V01-C11`, `V01-C12`, `V01-C13`, `V01-C14`, `V01-C15`, `V01-C16`, `V01-C17`.
- Sıradaki aktif birim: `V01-C18`.
- Önceden oluşturulmuş boş Research Packet: 0.
- Her dalga dependency sırasına bağlıdır.
- Araştırma ve lesson production birbirinden ayrılmıştır.
- Yeni kanonik lifecycle veya source of truth oluşturulmamıştır.

## References

- [Pedagojik Chapter Haritası](./asea-26-academy-pedagogical-chapter-map.md)
- [AI-Native Competency Framework](./asea-ai-native-competency-framework.md)
- [Research Packet Standard](../docs/production/research-packet-standard.md)
- [KOS Research Pipeline](../docs/knowledge-operating-system/03-research-pipeline.md)
- [ASEA 26 Akademi Eğitim Ağacı](./asea-26-academy-curriculum-tree.md)
