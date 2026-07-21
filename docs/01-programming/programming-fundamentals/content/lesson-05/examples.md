---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-025"
supporting_document_type: "Compatibility Report"
title: "Examples: Flowchart"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C04-SD-COMP-015"
derived_from:
  - "../../research/lesson-05/research-packet.md"
x-production-unit: "lesson-05"
x-content-language: "tr-TR"
---

# Flowchart — Örnekler

## Purpose

Akış şeması sembollerini, yollarını ve yaygın belirsizliklerini örneklemek.

## Scope

Örnekler yalnız `V01-C04` akış şeması segmentini kapsar.

## Ownership

Tüm örnekler [Research Packet](../../research/lesson-05/research-packet.md)
önerilerinden türetilmiştir.

## Content

### Simple Examples

Yaşa göre erişim akışı; başlangıç, yaş girdisi, eşik kararı, “Evet/Hayır”
etiketli iki dal, iki sonuç ve bitişten oluşur. Her düğümün tek bir rolü vardır.

### Real World Examples

Sınırlı giriş denemesi; kimlik bilgisi girdisi, doğrulama kararı, başarılı bitiş,
başarısız durumda sayacı artırma, sınır kontrolü, yeniden deneme ve kilitli
bitiş yollarını gösterir.

### Wrong Examples

Bir karar elmasından iki ok çıkar fakat okların üzerinde koşul sonucu yazmaz.
Okların biri işleme, diğeri bitişe gider. Okuyucu hangi yolun “Evet”, hangisinin
“Hayır” olduğunu tahmin etmek zorundadır.

### Correct Examples

Aynı karar düğümündeki iki kenar “Evet” ve “Hayır” olarak etiketlenir. Döngüye
dönen yolda sayaç artırma işlemi, diğer yolda açık bitiş düğümü bulunur.

### Explanations

Doğru şema yalnız daha düzenli görünmez; her yolun koşulunu ve sonlanmasını
izlenebilir kılar. Geri dönüş oku bulunan fakat durumu değiştirmeyen döngü,
çıkış koşuluna ilerlediğini gösteremez.

### Learning Notes

- Her şeklin rolünü adıyla açıklayın.
- Her karar yolunu bir girdiyle baştan sona izleyin.
- Döngüde ilerleme adımı ile bitiş yolunu birlikte arayın.
- Şemayı eşdeğer sözde kodla karşılaştırın.
- Araçta çizilmiş olmayı teknik doğruluk kanıtı saymayın.

## Validation

- Örnekler araştırma kapsamıyla sınırlıdır.
- Diyagram varlığı veya değerlendirme oluşturulmamıştır.

## References

- [Research Packet](../../research/lesson-05/research-packet.md)
