---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-020"
supporting_document_type: "Compatibility Report"
title: "V01-C02 Runnable Execution Examples"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md", "../../research/v01-c02/mental-model.md"]
---

# Çalışan Yürütme ve Durum İzleme Örnekleri

## Purpose

Ana dersteki soyut makine modelini, çalıştırılabilir ve adım adım gözlenebilir
örneklerle somutlaştırmak.

## Scope

Kod, gerçek bir CPU veya üretim sanal makinesi değildir. `LOADI`, `ADD`, `OUT`,
`JZ` ve `HALT` talimatlarından oluşan chapter'a özel eğitim makinesidir.

## Ownership

Örnekler `V01-LO003` ve `V01-LO004` için üretilmiştir. Teknik sınırlar ana
ders ve araştırma zihinsel modeli tarafından belirlenir.

## Content

### Çalışma ortamı

- Node.js 20 veya üzeri
- UTF-8 destekli metin düzenleyici
- Terminal

Kodu `tiny-machine.mjs` adıyla kaydet ve çalıştır:

```powershell
node .\tiny-machine.mjs
```

### Örnek 1 — İzlenebilir küçük makine

**Amaç:** Her talimattan önceki ve sonraki durumu aynı kayıtta göstermek.

```javascript
const program = [
  { op: "LOADI", target: "R1", value: 6 },
  { op: "ADD", target: "R2", left: "R1", right: "R1" },
  { op: "OUT", source: "R2" },
  { op: "HALT" },
];

const state = {
  pc: 0,
  registers: { R1: 0, R2: 0 },
  output: [],
  running: true,
};

const snapshot = () => structuredClone(state);

function step() {
  if (!state.running) return null;

  const before = snapshot();
  const instruction = program[state.pc];

  if (!instruction) {
    throw new Error(`Geçersiz program sayacı: ${state.pc}`);
  }

  switch (instruction.op) {
    case "LOADI":
      state.registers[instruction.target] = instruction.value;
      state.pc += 1;
      break;
    case "ADD":
      state.registers[instruction.target] =
        state.registers[instruction.left] + state.registers[instruction.right];
      state.pc += 1;
      break;
    case "OUT":
      state.output.push(state.registers[instruction.source]);
      state.pc += 1;
      break;
    case "HALT":
      state.running = false;
      break;
    default:
      throw new Error(`Bilinmeyen talimat: ${instruction.op}`);
  }

  return { before, instruction, after: snapshot() };
}

while (state.running) {
  console.log(step());
}
```

**Beklenen son durum:**

```text
pc: 3
R1: 6
R2: 12
output: [12]
running: false
```

`HALT` sırasında `pc` değerinin artmaması bu eğitim ISA'sının sözleşmesidir;
bütün gerçek makineler için evrensel kural değildir.

### Örnek 2 — Kontrol akışı

İlk programdaki `program` dizisini aşağıdakiyle değiştir:

```javascript
const program = [
  { op: "LOADI", target: "R1", value: 0 },
  { op: "JZ", source: "R1", address: 4 },
  { op: "LOADI", target: "R2", value: 99 },
  { op: "OUT", source: "R2" },
  { op: "HALT" },
];
```

Ardından `switch` içine şu durumu ekle:

```javascript
case "JZ":
  state.pc = state.registers[instruction.source] === 0
    ? instruction.address
    : state.pc + 1;
  break;
```

**Beklenen sonuç:** Çıktı listesi boş kalır. `R1` sıfır olduğu için `PC=1`
adımında dallanma alınır ve sonraki `PC` doğrudan `4` olur.

### Örnek 3 — Aynı program, farklı başlangıç durumu

`R1` değerini programın içinden yüklemek yerine başlangıç durumuna taşı:

```javascript
function createState(input) {
  return {
    pc: 0,
    registers: { R1: input, R2: 0 },
    output: [],
    running: true,
  };
}
```

Aynı talimat dizisini `6` ve `10` girdileriyle ayrı durum nesneleri üzerinde
çalıştır. Program temsili aynı kalırken süreç benzeri çalışma durumlarının ve
çıktıların farklı olduğunu gözle.

### Örnekleri okuma kontrolü

Her örnek için şunları cevapla:

1. Pasif program temsili hangisidir?
2. Çalışan durum hangi nesnede tutulur?
3. Mevcut talimatı hangi alan seçer?
4. Talimat hangi alanları okur ve değiştirir?
5. Gözlenebilir çıktı nerede oluşur?
6. Modelin gerçek CPU hakkında garanti etmediği şey nedir?

## Validation

- Node.js syntax check: `node --check tiny-machine.mjs`
- Beklenen sonuçlar ana dersin soyut ISA sözleşmesiyle uyumludur.
- Kod yorumları ve öğrenci açıklamaları Türkçedir; API ve anahtar kelimeler
  İngilizce bırakılmıştır.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Kavram Özeti](./concept-summary.md)
- [Mental Model](../../research/v01-c02/mental-model.md)
- [Atomic Evidence Register](../../research/v01-c02/atomic-evidence-register.md)
