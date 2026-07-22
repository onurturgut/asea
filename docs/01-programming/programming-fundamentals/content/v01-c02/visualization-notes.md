---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-019"
supporting_document_type: "Compatibility Report"
title: "Görselleştirme Notları: Bilgisayarlar Programları Nasıl Çalıştırır?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Learning Experience Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md", "../../research/v01-c02/mental-model.md", "../../research/v01-c02/concept-graph.md"]
x-production-unit: "v01-c02"
x-content-language: "tr-TR"
---

# Görselleştirme Notları: Bilgisayarlar Programları Nasıl Çalıştırır?

## Purpose

Dersin ana ilişkilerini teknik doğruluğu koruyan diyagram, animasyon ve etkileşim tasarımlarına dönüştürmek.

## Scope

Bu belge görsel üretmez; SVG, Mermaid ve animasyon üretim yönergesi sağlar.

## Ownership

Öğrenme Deneyimi Tasarımcısı (Learning Experience Designer) görsel
hiyerarşiden; Teknik İncelemeci (Technical Reviewer) durum ve yürütme
ilişkilerinin doğruluğundan sorumludur.

## Content

### Önerilen Görseller

| ID | Lesson Sections | Format | Visual Brief | Evidence Boundary |
| --- | --- | --- | --- | --- |
| `VIS-01` | 4, 34, 36 | Mermaid flow | Native ve VM yollarını running state'te birleştiren iki kollu akış | `EV-009`–`EV-024`, `EV-073`–`EV-080` |
| `VIS-02` | 5–7 | Layer diagram | Source, assembly, machine code ve running process'i ayrı kartlar olarak göster | `EV-001`–`EV-008`, `EV-025`, `EV-026` |
| `VIS-03` | 8, 21–23 | Pipeline | Preprocess → compile → assemble → link → load; her okun altında artifact | `EV-009`–`EV-023` |
| `VIS-04` | 12–16 | System map | ISA contract ortada; software üstte, CPU implementation altta; visible state kenarda | `EV-027`–`EV-052` |
| `VIS-05` | 14 | Three-panel sequence | Fetch, decode, execute panelleri; PC before/after ayrı | `EV-089`–`EV-092` |
| `VIS-06` | 17–20 | Memory diagram | Process virtual address space; code, stack, heap; physical RAM'den kesikli çizgiyle ayrım | `EV-053`–`EV-064` |
| `VIS-07` | 25–26 | Ownership diagram | Process address space; iki thread; her thread private PC/register, shared memory | `EV-065`–`EV-072` |
| `VIS-08` | 27–29 | Comparison table | Native ISA, JVM, WebAssembly ve CPython representation/consumer/translation farkları | `EV-035`, `EV-036`, `EV-073`–`EV-080` |
| `VIS-09` | 30–33 | State transition | `S0 --instruction--> S1`; PC/register/memory/I/O değişimlerini renk kodla | `EV-081`–`EV-088` |
| `VIS-10` | 33 | Trace table | Üç instruction için before/after state timeline | `EV-081`–`EV-088` |
| `VIS-11` | 31 | Control-flow tree | Sequential path, taken branch, trap/jump ayrımı | `EV-043`, `EV-048`, `EV-084`, `EV-085` |
| `VIS-12` | 35 | Misconception cards | Yanlış → neden → doğru model; sekiz kart | Misconception map |

### Önerilen Animasyonlar

| ID | Duration | Frames | Interaction |
| --- | ---: | --- | --- |
| `ANIM-01` | 20–30 s | Source artifact toolchain boyunca şekil değiştirir; executable loader'a girer; process state açılır | Play/pause and step |
| `ANIM-02` | 15–20 s | PC address'i seçer, instruction gelir, fields highlight olur, register result yazılır, PC güncellenir | Step forward/back |
| `ANIM-03` | 20 s | Virtual address translation ile physical location'a bağlanır; file offset ayrı kalır | Address-domain toggle |
| `ANIM-04` | 25 s | Native ve VM/JIT yolları paralel ilerleyip common state-transition loop'a ulaşır | Path selector |
| `ANIM-05` | 30 s | Üç instruction trace tablosu hücre hücre dolar | State diff highlight |

### Önerilen Etkileşimli Öğeler

| ID | Purpose | Learner Control | Guardrail |
| --- | --- | --- | --- |
| `INT-01` | Execution path explorer | Native, bytecode VM veya hybrid path seçimi | Bir yol “evrensel” olarak işaretlenmez. |
| `INT-02` | State tracer | Current instruction'ı step eder; PC/register/output değişimini görür | Lesson's abstract ISA açıkça etiketlenir. |
| `INT-03` | Address-domain comparator | File offset, virtual address, physical address katmanlarını açıp kapatır | Sayılar gerçek OS guarantee olarak sunulmaz. |
| `INT-04` | Concept dependency map | Kavrama tıklayınca prerequisites, KU ve evidence görünür | Yalnız mevcut graph node'ları kullanılır. |

### Üretim Kuralları

- ISA-visible state ile hidden microarchitecture timing farklı renk ailelerinde olmalıdır.
- Animation hiçbir zaman stack/heap layout'unu fiziksel yasa gibi göstermemelidir.
- SVG metinleri erişilebilir, yüksek kontrastlı ve screen-reader açıklamalı olmalıdır.
- Mermaid source, generated SVG ile birlikte saklanmalıdır.

## Validation

- Önerilen görsel sayısı: 12.
- Önerilen animasyon sayısı: 5.
- Önerilen etkileşimli öğe sayısı: 4.
- Her öneri ders bölümü ve kanıt sınırı taşır.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Zihinsel Model](../../research/v01-c02/mental-model.md)
- [Kavram Grafiği](../../research/v01-c02/concept-graph.md)
