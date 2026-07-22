---
document_type: "chapter-summary"
document_id: "V01-C13-SM01"
title: "V01-C13 Summary"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C13"
learning_outcomes: ["V01-LO019", "V01-LO020"]
last_updated: "2026-07-23"
---

# Bölüm Özeti

Fonksiyon, adlandırılmış ve çağrılabilir bir davranış sınırıdır. Tanım davranışı oluşturur; çağrı çalıştırır. Fonksiyonun değeri yalnız tekrar azaltmasında değil, sorumluluğu, girdileri, garantileri ve başarısızlığı açıklaştırmasındadır.

Tam sözleşme; sorumluluk, kabul edilen girdi, ön koşul, çıktı, son koşul, gözlenebilir etki ve hata davranışını içerir. İmza bu sözleşmenin yalnız görünen çağrı arayüzüdür. Gizli global girdiler veya belgelenmemiş mutation contract'ı zayıflatır.

Çağrı denetimi caller'dan callee'ye taşır. `return` fonksiyonu bitirip değer ve denetimi çağrı noktasına döndürür. İç içe çağrıda argümanı hesaplayan iç çağrı önce tamamlanır. `console.log` yalnız etkidir; açık dönüş bulunmazsa JavaScript normal tamamlanmada `undefined` üretir.

Contract maddeleri test üretir: normal, sınır, geçersiz, son koşul, etki ve failure vakaları. Aynı contract farklı implementation'larla karşılanabilir. Contract değişikliği ise çağıranları etkileyen davranış değişikliğidir.

AI koddan önce belirsiz sözleşme sorularını çıkarmalıdır. Modelin varsayımları insan kararı değildir; implementation çağrı izi ve contract–test matrisiyle bağımsız doğrulanır.

## Hızlı Kontrol

- Bir davranış için yedi alanlı contract yazabiliyor muyum?
- Tanım ve çağrıyı ayırabiliyor muyum?
- İç içe çağrı/dönüş sırasını izleyebiliyor muyum?
- Gizli girdi ve etkiyi bulabiliyor muyum?
- Her contract maddesini teste bağlayabiliyor muyum?

Beş soruya kanıtla cevap verebiliyorsanız `V01-LO019` ve `V01-LO020` değerlendirmesine hazırsınız.
