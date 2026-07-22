---
supporting_document_id: "V01-C04-SD-GLOS-001"
supporting_document_type: "Glossary"
title: "V01-C04 Aktif Hatırlama Kartları"
version: "0.1.0"
status: "Draft"
owner: "Content Maintainer"
scope_id: "V01-C04"
source_document: "../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md"
canonical_registry: "../../../chapter-map.md"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C04 Aktif Hatırlama Kartları

## Schedule

Gün 0, 1, 3, 7, 14 ve 30’da tekrar et. Cevabı açmadan üret. `0=yanlış`,
`1=eksik/yavaş`, `2=doğru ve gerekçeli`; 0 alan kart ertesi gün döner.

## Cards

### Kart 01

**Ön:** Algorithm nedir?  
**Arka:** Bounded inputs’u required output’a dönüştüren precise ve terminating
steps bütünü.  
**Concept:** `CON-000016`

### Kart 02

**Ön:** Goal neden algorithm değildir?  
**Arka:** Uygulanacak ordered operations ve stop behavior’ı belirtmez.  
**Concept:** `CON-000016`

### Kart 03

**Ön:** Algorithm ile program farkı?  
**Arka:** Algorithm language-independent logic; program executable,
language/runtime-specific implementation’dır.  
**Concept:** `CON-000016`

### Kart 04

**Ön:** Pseudocode’un amacı?  
**Arka:** Algorithm’ı programming language’e bağlamadan inspect ve trace etmek.  
**Concept:** `CON-000016`

### Kart 05

**Ön:** Universal pseudocode syntax var mı?  
**Arka:** Hayır; ekip convention’ı açık ve tutarlı olmalıdır.  
**Concept:** `CON-000016`

### Kart 06

**Ön:** Precise pseudocode line’ın özelliği?  
**Arka:** Tek operation, açık state/input/output ve ambiguity bulunmaması.  
**Concept:** `CON-000016`

### Kart 07

**Ön:** Sequence nedir?  
**Arka:** Operations’ın tanımlı order’da yürütülmesi.  
**Concept:** `CON-000016`

### Kart 08

**Ön:** Selection nedir?  
**Arka:** Condition’a göre alternatif execution path seçilmesi.  
**Concept:** `CON-000016`

### Kart 09

**Ön:** Iteration nedir?  
**Arka:** Bir stop condition sağlanana kadar bounded repetition.  
**Concept:** `CON-000019`

### Kart 10

**Ön:** Precondition nedir?  
**Arka:** Correct execution başlamadan önce sağlanması gereken obligation.  
**Concept:** `CON-000017`

### Kart 11

**Ön:** Postcondition nedir?  
**Arka:** Successful completion sonrasında algorithm’ın garanti ettiği durum.  
**Concept:** `CON-000017`

### Kart 12

**Ön:** Precondition kimin sorumluluğunu gösterir?  
**Arka:** Caller/input boundary’nin algorithm’a ne sağlaması gerektiğini.  
**Concept:** `CON-000017`

### Kart 13

**Ön:** Postcondition implementation steps midir?  
**Arka:** Hayır; observable result guarantee’sidir.  
**Concept:** `CON-000017`

### Kart 14

**Ön:** Invalid behavior neden açık olmalı?  
**Arka:** Contract dışı input’un normal calculation’a sızmasını önlemek için.  
**Concept:** `CON-000017`

### Kart 15

**Ön:** Dry run nedir?  
**Arka:** Algorithm steps’i bilgisayarda çalıştırmadan concrete input ile elle yürütmek.  
**Concept:** `CON-000018`

### Kart 16

**Ön:** Trace table ne kaydeder?  
**Arka:** Instruction, state before/after, branch sonucu ve output.  
**Concept:** `CON-000018`

### Kart 17

**Ön:** Prediction neden önce?  
**Arka:** Mental model ile traced behavior arasındaki divergence’ı görmek için.  
**Concept:** `CON-000018`

### Kart 18

**Ön:** Normal trace neyi gösterir?  
**Arka:** Expected valid path’in concrete behavior’ını.  
**Concept:** `CON-000018`

### Kart 19

**Ön:** Boundary üçlüsü nedir?  
**Arka:** Eşiğin hemen altı, eşiti ve hemen üstü.  
**Concept:** `CON-000018`

### Kart 20

**Ön:** Invalid trace neyi kontrol eder?  
**Arka:** Contract dışı input’un explicit safe behavior’ını.  
**Concept:** `CON-000018`

### Kart 21

**Ön:** Trace universal proof müdür?  
**Arka:** Hayır; yalnız seçili execution path için evidence’dır.  
**Concept:** `CON-000018`

### Kart 22

**Ön:** Counterexample’ın gücü?  
**Arka:** Geniş correctness claim’inin en az bir input’ta yanlış olduğunu gösterir.  
**Concept:** `CON-000018`

### Kart 23

**Ön:** Termination nedir?  
**Arka:** Contract kapsamındaki her input için defined stopping state’e ulaşma.  
**Concept:** `CON-000019`

### Kart 24

**Ön:** Progress measure nedir?  
**Arka:** Her repetition’da stop bound’a doğru ilerlediği gösterilen ölçü.  
**Concept:** `CON-000019`

### Kart 25

**Ön:** Bound nedir?  
**Arka:** Progress’in yaklaşarak stop condition’ı reachable yaptığı sınır.  
**Concept:** `CON-000019`

### Kart 26

**Ön:** Stop condition tek başına yeter mi?  
**Arka:** Hayır; bütün continuing branches guaranteed progress sağlamalıdır.  
**Concept:** `CON-000019`

### Kart 27

**Ön:** Total correctness sezgisi?  
**Arka:** Required result correctness ile termination’ın birlikte sağlanması.  
**Concept:** `CON-000019`

### Kart 28

**Ön:** AI rule eklerse ne yapılır?  
**Arka:** Assumption olarak ayrılır, source/owner ile doğrulanır.  
**Concept:** `CON-000017`

### Kart 29

**Ön:** AI loop nasıl audit edilir?  
**Arka:** Her branch’te progress, bound, stop ve boundary traces kontrol edilir.  
**Concept:** `CON-000019`

### Kart 30

**Ön:** AI’dan önce neden student-v1?  
**Arka:** Independent reasoning evidence’ını ve AI etkisini karşılaştırmak için.  
**Concept:** `CON-000018`

## Transfer Practice

İkinci turda her karta kendi fare algorithm’ından örnek ver. Üçüncü turda kartları
karıştır ve tanımdan önce counterexample üret.

## References

- [Ana ders](../../../chapters/04-algoritmalar-sozde-kod-ve-izleme.md)
- [Exercises](./exercises.md)
