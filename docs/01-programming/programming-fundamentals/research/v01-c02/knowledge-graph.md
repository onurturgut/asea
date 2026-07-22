---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-DMAP-002"
supporting_document_type: "Dependency Map"
title: "Machine-Readable Knowledge Graph: How Computers Execute Programs"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Knowledge Engineer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["./concept-model.md", "./concept-graph.md", "./atomic-evidence-register.md"]
x-production-unit: "v01-c02"
x-research-stage: "Knowledge Graph Synthesis"
---

# Machine-Readable Knowledge Graph: How Computers Execute Programs

## Purpose

Bu belge AI Mentor ve validation araçları için deterministik düğüm/kenar görünümü sağlar.

## Scope

Grafik türetilmiştir; kanonik Knowledge Graph veya Concept Registry yerine geçmez.

## Ownership

Knowledge Engineer schema ve referential integrity'den sorumludur.

## Content

### Graph Schema

```yaml
schema_version: "1.0.0"
graph_id: "V01-C02-KG-SYNTH-001"
scope_id: "V01-C02"
node_id_pattern: "V01-C02-KC-[0-9]{3}"
edge_id_pattern: "V01-C02-KE-[0-9]{3}"
evidence_id_pattern: "V01-C02-EV-[0-9]{3}"
```

### Nodes

```yaml
nodes:
  - { id: V01-C02-KC-001, term_tr: Program, term_en: Program, ku: [V01-C02-KU-001, V01-C02-KU-011] }
  - { id: V01-C02-KC-002, term_tr: Kaynak kod, term_en: Source Code, ku: [V01-C02-KU-001] }
  - { id: V01-C02-KC-003, term_tr: Programlama dili, term_en: Programming Language, ku: [V01-C02-KU-001] }
  - { id: V01-C02-KC-004, term_tr: Derleyici, term_en: Compiler, ku: [V01-C02-KU-002] }
  - { id: V01-C02-KC-005, term_tr: Nesne dosyası, term_en: Object File, ku: [V01-C02-KU-002, V01-C02-KU-003] }
  - { id: V01-C02-KC-006, term_tr: Bağlayıcı, term_en: Linker, ku: [V01-C02-KU-003] }
  - { id: V01-C02-KC-007, term_tr: Yürütülebilir, term_en: Executable, ku: [V01-C02-KU-003] }
  - { id: V01-C02-KC-008, term_tr: Yükleyici, term_en: Loader, ku: [V01-C02-KU-004] }
  - { id: V01-C02-KC-009, term_tr: Yorumlayıcı, term_en: Interpreter, ku: [V01-C02-KU-014] }
  - { id: V01-C02-KC-010, term_tr: Assembly dili, term_en: Assembly Language, ku: [V01-C02-KU-005] }
  - { id: V01-C02-KC-011, term_tr: Makine kodu, term_en: Machine Code, ku: [V01-C02-KU-005] }
  - { id: V01-C02-KC-012, term_tr: Talimat kümesi mimarisi, term_en: Instruction Set Architecture, ku: [V01-C02-KU-006] }
  - { id: V01-C02-KC-013, term_tr: Merkezi işlem birimi, term_en: Central Processing Unit, ku: [V01-C02-KU-007] }
  - { id: V01-C02-KC-014, term_tr: Talimat, term_en: Instruction, ku: [V01-C02-KU-006, V01-C02-KU-007] }
  - { id: V01-C02-KC-015, term_tr: Register, term_en: Register, ku: [V01-C02-KU-006] }
  - { id: V01-C02-KC-016, term_tr: Program sayacı, term_en: Program Counter, ku: [V01-C02-KU-006] }
  - { id: V01-C02-KC-017, term_tr: Bellek, term_en: Memory, ku: [V01-C02-KU-009] }
  - { id: V01-C02-KC-018, term_tr: Bellek adresi, term_en: Memory Address, ku: [V01-C02-KU-009] }
  - { id: V01-C02-KC-019, term_tr: Sanal adres alanı, term_en: Virtual Address Space, ku: [V01-C02-KU-009] }
  - { id: V01-C02-KC-020, term_tr: Yığın, term_en: Stack, ku: [V01-C02-KU-010] }
  - { id: V01-C02-KC-021, term_tr: Öbek, term_en: Heap, ku: [V01-C02-KU-010] }
  - { id: V01-C02-KC-022, term_tr: Çalışma zamanı ortamı, term_en: Runtime Environment, ku: [V01-C02-KU-013, V01-C02-KU-014] }
  - { id: V01-C02-KC-023, term_tr: Süreç, term_en: Process, ku: [V01-C02-KU-011] }
  - { id: V01-C02-KC-024, term_tr: İş parçacığı, term_en: Thread, ku: [V01-C02-KU-012] }
  - { id: V01-C02-KC-025, term_tr: Sanal makine, term_en: Virtual Machine, ku: [V01-C02-KU-013] }
  - { id: V01-C02-KC-026, term_tr: Bayt kodu, term_en: Bytecode, ku: [V01-C02-KU-013] }
  - { id: V01-C02-KC-027, term_tr: Anında derleme, term_en: Just-in-Time Compilation, ku: [V01-C02-KU-014] }
  - { id: V01-C02-KC-028, term_tr: Durum, term_en: State, ku: [V01-C02-KU-016] }
  - { id: V01-C02-KC-029, term_tr: Kontrol akışı, term_en: Control Flow, ku: [V01-C02-KU-016] }
  - { id: V01-C02-KC-030, term_tr: Girdi, term_en: Input, ku: [V01-C02-KU-017] }
  - { id: V01-C02-KC-031, term_tr: Çıktı, term_en: Output, ku: [V01-C02-KU-017] }
  - { id: V01-C02-KC-032, term_tr: Getir-çözümle-yürüt, term_en: Fetch-Decode-Execute, ku: [V01-C02-KU-015] }
```

### Edges

```yaml
edges:
  - { id: V01-C02-KE-001, from: V01-C02-KC-001, type: represented-as, to: V01-C02-KC-002, evidence: [V01-C02-EV-001, V01-C02-EV-004] }
  - { id: V01-C02-KE-002, from: V01-C02-KC-002, type: transformed-by, to: V01-C02-KC-004, evidence: [V01-C02-EV-009, V01-C02-EV-012] }
  - { id: V01-C02-KE-003, from: V01-C02-KC-004, type: produces, to: V01-C02-KC-005, evidence: [V01-C02-EV-013] }
  - { id: V01-C02-KE-004, from: V01-C02-KC-005, type: consumed-by, to: V01-C02-KC-006, evidence: [V01-C02-EV-014, V01-C02-EV-016] }
  - { id: V01-C02-KE-005, from: V01-C02-KC-006, type: produces, to: V01-C02-KC-007, evidence: [V01-C02-EV-014, V01-C02-EV-017] }
  - { id: V01-C02-KE-006, from: V01-C02-KC-008, type: loads, to: V01-C02-KC-007, evidence: [V01-C02-EV-019, V01-C02-EV-020] }
  - { id: V01-C02-KE-007, from: V01-C02-KC-008, type: creates-state-for, to: V01-C02-KC-023, evidence: [V01-C02-EV-020, V01-C02-EV-022] }
  - { id: V01-C02-KE-008, from: V01-C02-KC-023, type: runs, to: V01-C02-KC-001, evidence: [V01-C02-EV-005, V01-C02-EV-067] }
  - { id: V01-C02-KE-009, from: V01-C02-KC-023, type: owns, to: V01-C02-KC-019, evidence: [V01-C02-EV-053, V01-C02-EV-057] }
  - { id: V01-C02-KE-010, from: V01-C02-KC-024, type: belongs-to, to: V01-C02-KC-023, evidence: [V01-C02-EV-068, V01-C02-EV-069] }
  - { id: V01-C02-KE-011, from: V01-C02-KC-012, type: defines, to: V01-C02-KC-014, evidence: [V01-C02-EV-027, V01-C02-EV-032] }
  - { id: V01-C02-KE-012, from: V01-C02-KC-012, type: defines, to: V01-C02-KC-015, evidence: [V01-C02-EV-030, V01-C02-EV-033] }
  - { id: V01-C02-KE-013, from: V01-C02-KC-012, type: defines, to: V01-C02-KC-016, evidence: [V01-C02-EV-031, V01-C02-EV-044] }
  - { id: V01-C02-KE-014, from: V01-C02-KC-013, type: executes, to: V01-C02-KC-014, evidence: [V01-C02-EV-025, V01-C02-EV-049] }
  - { id: V01-C02-KE-015, from: V01-C02-KC-014, type: updates, to: V01-C02-KC-028, evidence: [V01-C02-EV-040, V01-C02-EV-042] }
  - { id: V01-C02-KE-016, from: V01-C02-KC-016, type: selects, to: V01-C02-KC-014, evidence: [V01-C02-EV-043, V01-C02-EV-048] }
  - { id: V01-C02-KE-017, from: V01-C02-KC-025, type: consumes, to: V01-C02-KC-026, evidence: [V01-C02-EV-036, V01-C02-EV-076] }
  - { id: V01-C02-KE-018, from: V01-C02-KC-027, type: transforms, to: V01-C02-KC-011, evidence: [V01-C02-EV-074, V01-C02-EV-077] }
  - { id: V01-C02-KE-019, from: V01-C02-KC-030, type: updates, to: V01-C02-KC-028, evidence: [V01-C02-EV-022, V01-C02-EV-088] }
  - { id: V01-C02-KE-020, from: V01-C02-KC-028, type: produces, to: V01-C02-KC-031, evidence: [V01-C02-EV-066, V01-C02-EV-088] }
  - { id: V01-C02-KE-021, from: V01-C02-KC-029, type: selects, to: V01-C02-KC-014, evidence: [V01-C02-EV-048, V01-C02-EV-085] }
  - { id: V01-C02-KE-022, from: V01-C02-KC-032, type: models, to: V01-C02-KC-014, evidence: [V01-C02-EV-089, V01-C02-EV-090, V01-C02-EV-091] }
```

### Gates

- Her edge'in `from` ve `to` değeri tanımlı bir node olmalıdır.
- Her edge en az bir `V01-C02-EV-nnn` referansı taşımalıdır.
- Node, edge veya evidence referansında duplicate kimlik bulunmamalıdır.

## Validation

- Nodes: 32; edges: 22.
- Düğüm ve edge kimlikleri benzersizdir; bütün edge uçları tanımlı node'lara yönelir.
- Her edge en az bir mevcut evidence ID taşır.

## References

- [Concept Model](./concept-model.md)
- [Concept Graph](./concept-graph.md)
- [Atomic Evidence Register](./atomic-evidence-register.md)
