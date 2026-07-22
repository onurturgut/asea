---
document_type: "laboratory"
document_id: "V01-C16-L01"
title: "Decompose a Report Generator"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
estimated_time: "120-150 minutes"
learning_outcomes: ["V01-LO024"]
last_updated: "2026-07-23"
---

# Laboratuvar — Rapor Üreticisini Ayrıştır

## Scenario

Bir ekip satış kayıtlarını validate eden, metrics hesaplayan, sıralayan ve
terminal report'u üreten 100+ satırlık function'ı değiştirmekte zorlanıyor.
Yeni JSON output talebi formülleri bozuyor. Sizden behavior'ı koruyarak cohesive
functions ve explicit orchestration tasarlamanız isteniyor.

## Requirements

- Ana dersteki başlangıç report generator'ını temel alın.
- Refactoring öncesi en az 12 characterization test üretin.
- Responsibility map ve iki alternative function map çizin.
- Her function için input/output/failure/effect contract yazın.
- Dependency inventory ve direction graph üretin.
- Seçilen design'ı uygulayın; global mutable state kullanmayın.
- Text ve JSON formatter'ları aynı domain result üzerinde çalıştırın.
- Her cohesive function için independent tests yazın.

## Tasks

1. Requirements ve existing behavior'ı ayırın.
2. Syntax blocks yerine meaningful responsibilities belirleyin.
3. Tasarım A'da validation/calculation/formatting'i ayırın.
4. Tasarım B'de tek-pass analysis seçeneği oluşturun.
5. Beş change scenario matrix'i hazırlayın.
6. Seçimi cohesion, coupling, performance assumption ve tests ile savunun.
7. Küçük Extract Function adımları uygulayın.
8. Her adım sonrası characterization tests çalıştırın.
9. JSON output ekleyip calculation'ın değişmediğini gösterin.
10. AI önerisini kendi haritanızla karşılaştırın.

## Bonus Challenge

Çok büyük input varsayımı için multi-pass ve single-pass designs'i `performance.now()`
ile kontrollü ölçün. Sonucu mutlak genelleme yapmadan dataset, environment ve
trade-off bağlamıyla raporlayın.

## Deliverables

- `characterization-tests.js`
- `responsibility-map.md`
- `design-a.md`
- `design-b.md`
- `change-scenario-matrix.md`
- `dependency-inventory.md`
- `solution.js`
- `solution-tests.js`
- `decision-record.md`
- `ai-audit.md`

## Evaluation Criteria

Behavior evidence %20, responsibility/function map %20, cohesion/coupling
comparison %20, implementation contracts %15, independent tests %15, decision
and AI audit %10. En az 75 gerekir; harita veya alternative comparison eksikse geçilmez.
