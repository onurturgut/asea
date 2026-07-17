---
document_type: "supporting-document"
supporting_document_id: "V01-SD-ROAD-001"
supporting_document_type: "Roadmap"
title: "Volume 01 Roadmap"
version: "1.0.0"
status: "Review"
scope_id: "V01"
authority: "Authoritative"
owner_role: "Curriculum Architect"
source_ids:
  - "V01-BP01"
derived_from: []
---

# Volume 01 Roadmap

## Purpose

Bu yol haritası öğrencinin 28 Chapter boyunca hangi yeterliği üreteceğini ve her modülün bir sonrakine nasıl hazırlandığını gösterir. İlerleme takvimle değil, modül çıkış kapılarıyla belirlenir.

## Scope

This document governs the Roadmap records for Volume 01 — Programming Foundations without changing the existing curriculum meaning.

## Ownership

- **Authority:** Authoritative for its Roadmap data within Volume 01.
- **Owner Role:** Curriculum Architect.
- **Source Blueprint:** `V01-BP01`.
- **Change Control:** Semantic changes require versioned migration, validation, and review.

## Content

The existing profile-specific sections below contain the authoritative Roadmap records.

## Module 1 — Computational Thinking

### Purpose

Program, hesaplama, problem sözleşmesi, ayrıştırma, algoritma ve pseudocode kavramlarını koddan önce kurmak.

### Outcomes

- Problemi girdi, çıktı, kısıt, varsayım ve edge case'lere ayırma.
- Bir algoritmayı kesin adımlar ve trace table ile ifade etme.
- Bilgisayarın talimat, bellek ve program yürütme ilişkisini açıklama.

### Preparation for the Next Module

Öğrenci, veri üzerinde işlem yapan bir algoritmanın hangi değerlere ve durum değişikliklerine ihtiyaç duyduğunu belirleyebilir. Geçiş kanıtı: Chapter 01-04 değerlendirmeleri ve Mini Project 01'de en az %70.

## Module 2 — Data and Expressions

### Purpose

Değerlerin nasıl temsil edildiğini, değişkenlerin durumu nasıl taşıdığını ve ifadelerin veriyi nasıl dönüştürdüğünü öğretmek.

### Outcomes

- Primitive değerleri ve tür uyumsuzluklarını ayırt etme.
- Durum değişimini adım adım izleme.
- Operatör önceliğini açıklama ve güvenli girdi-dönüşüm-çıktı hattı kurma.

### Preparation for the Next Module

Öğrenci, karar ve tekrar koşullarında kullanılacak ifadeleri güvenilir biçimde değerlendirebilir. Geçiş kanıtı: Lab 05-08 ve Mini Project 02'de en az %70.

## Module 3 — Control Flow

### Purpose

Boolean mantık, koşullu yürütme, loop ve iç içe kontrol akışıyla program davranışını yönetmek.

### Outcomes

- Karar tablosunu koşullu akışa dönüştürme.
- Sonlanan loop tasarlama ve iteration durumunu izleme.
- Karmaşık akışı daha küçük karar ve tekrar bloklarına ayırma.

### Preparation for the Next Module

Öğrenci, tekrar eden veya dallanan davranışı fonksiyon sınırlarına ayırabilecek kadar kontrol akışı kurabilir. Geçiş kanıtı: Lab 09-12 ve Mini Project 03'te en az %70.

## Module 4 — Functions and Decomposition

### Purpose

Program davranışını açık sözleşmeli, test edilebilir ve yeniden kullanılabilir fonksiyonlara ayırmak.

### Outcomes

- Parametre, return value, scope ve lifetime davranışını izleme.
- Saf davranış ile dış duruma bağlı davranışı ayırma.
- Büyük bir algoritmayı tek sorumluluklu fonksiyonlara bölme.

### Preparation for the Next Module

Öğrenci, koleksiyon ve yapılandırılmış veri işlemlerini fonksiyonlarla ifade edebilir. Geçiş kanıtı: Lab 13-16 ve Mini Project 04'te en az %70.

## Module 5 — Structured Data and Recursion

### Purpose

Koleksiyonları, kayıtları, iç içe veriyi, recursive yapıları ve metni güvenli biçimde işlemek.

### Outcomes

- Array ve record tabanlı veri modeli tasarlama.
- Base case ve recursive case içeren sonlanan çözümü izleme.
- Metin işleme hattında normalize, tokenize, filtrele ve özetle adımlarını ayırma.

### Preparation for the Next Module

Öğrenci, arama ve sıralama algoritmalarının çalışacağı veri yapısını ve fonksiyon sınırlarını kurabilir. Geçiş kanıtı: Lab 17-20 ve Mini Project 05'te en az %70.

## Module 6 — Algorithms and Efficiency

### Purpose

Arama ve sıralama yaklaşımlarını doğruluk, girdi varsayımları ve temel zaman/alan maliyetiyle karşılaştırmak.

### Outcomes

- Linear ve binary search kullanım koşullarını ayırt etme.
- Basit sıralama algoritmalarını trace etme ve invariant açıklama.
- Girdi büyüklüğü arttıkça işlem sayısının nasıl değiştiğini karşılaştırma.

### Preparation for the Next Module

Öğrenci, program tasarımında yalnızca çalışan değil, bağlama uygun çözüm seçebilir. Geçiş kanıtı: Lab 21-23 ve Mini Project 06'da en az %70.

## Module 7 — Reliability and Program Design

### Purpose

Failure modelleme, sistematik debugging, test tasarımı, clean code, refactoring ve uçtan uca program tasarımını bütünleştirmek.

### Outcomes

- Hataları yeniden üretme, sınıflandırma ve hipotezle izole etme.
- Normal, boundary ve invalid input testleri tasarlama.
- Davranışı koruyarak kodu okunabilir ve modüler hale getirme.
- Gereksinimden test ve teknik incelemeye uzanan küçük program geliştirme.

### Preparation for the Next Volume

Öğrenci yeni bir teknik alanda verilen küçük problemi bağımsız programlama temelleriyle çözmeye hazırdır. Geçiş kanıtı: Lab 24-28, Final Assessment, Technical Review ve Capstone için [completion criteria](./README.md#completion-criteria).

## Milestone Summary

| Milestone | Evidence | Minimum Gate |
| --- | --- | ---: |
| Foundations | Algorithm trace + Mini Project 01 | %70 |
| Data | Data pipeline + Mini Project 02 | %70 |
| Control | Decision/loop system + Mini Project 03 | %70 |
| Decomposition | Function toolkit + Mini Project 04 | %70 |
| Structured Data | Data processor + Mini Project 05 | %70 |
| Algorithms | Algorithm workbench + Mini Project 06 | %70 |
| Reliability | Labs 24-28 + final reviews | %75 |
| Integration | Capstone | %80 and all critical gates |

## Validation

- Metadata follows the Governance Supporting Document schema.
- Canonical identifiers, counts, relative links, heading hierarchy, and duplicate authority must be validated before Stable status.
- This migration changes governance structure only; the existing curriculum meaning is preserved.

## References

- [Volume Blueprint](./volume-blueprint.md)
- [Module Map](./module-map.md)
- [Chapter Map](./chapter-map.md)
- [Assessment System](./assessment.md)
