---
document_type: "project-increment"
document_id: "V01-C30-PI01"
chapter_id: "V01-C30"
project_id: "V01-P07"
version: "0.1.0"
status: "Draft"
---

# V01-P07 Proje Artımı

## Artım

P07'ye tek kayıt domain modeli ve güncelleme semantiği eklenir:

- `createStudentProgress`
- `advanceProgress`
- `renameStudent`
- identity/invariant testleri
- model karar kaydı

## C30 Kanıtı

Öğrenci en az bir alias hatasını ve bir shallow-copy hatasını yeniden üretmeli;
düzeltmeden önce identity tablosuyla nedeni göstermelidir. C31 bu modeli array içinde
çoğaltacak; bu nedenle property adları ve canonical type'lar C30 sonunda sabitlenir.

## Definition of Done

LO049 için gereksinimden geçerli model üretimi, LO050 için mutation/copy/aliasing
analizi rubrikte en az “yeterli” düzeydedir. C31'e açık bir devir notu vardır.
