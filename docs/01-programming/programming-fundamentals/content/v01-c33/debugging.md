---
document_type: "debugging-guide"
document_id: "V01-C33-DBG01"
chapter_id: "V01-C33"
version: "0.1.0"
status: "Draft"
---

# C33 Hata Ayıklama Rehberi

## Environment Inventory

1. Function nerede oluşturuldu?
2. Body'deki free identifiers hangileri?
3. Her identifier hangi environment binding'ine çözülür?
4. Binding'i kim mutate edebilir?
5. Kaç factory invocation/environment vardır?
6. Hangi returned reference state'i erişilebilir tutar?

## Belirti Tablosu

| Belirti | Olası neden | Kanıt |
| --- | --- | --- |
| Instance'lar birbirini etkiliyor | State factory dışında | E1/E2 trace |
| Eski snapshot değişiyor | Internal object leak | Snapshot `===` |
| Değer eski/yeni şaşırtıyor | Binding capture yanlış modeli | Mutation timeline |
| Loop readers aynı sayı | Shared `var` binding | Binding count |
| State gereksiz yaşıyor | Callback hâlâ reachable | Ownership/cleanup izi |
